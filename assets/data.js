const UPDATE_TIME = "2026-08-13 08:20";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 1.78,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "算力租赁",
    "rise": -0.38,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续133天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.97,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续269天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "CRO概念",
    "rise": 3.13,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "AI应用",
    "rise": -0.97,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "存储芯片",
    "rise": -1.95,
    "rate": 0,
    "tag": "",
    "hotTag": "连续222天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "MLCC概念",
    "rise": -2.57,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "PCB概念",
    "rise": -1.7,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续92天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": -1.5,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续433天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "中国AI 50",
    "rise": 0.47,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "科创创业人工智能ETF",
    "code": "886102"
  },
  {
    "name": "商业航天",
    "rise": -1.39,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续198天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "东数西算(算力)",
    "rise": -0.64,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "猪肉",
    "rise": -0.03,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -0.87,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "光纤概念",
    "rise": -1.29,
    "rate": 0,
    "tag": "",
    "hotTag": "连续98天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "机器人概念",
    "rise": -1.33,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续100天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "白酒概念",
    "rise": 0.11,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "减肥药",
    "rise": 1.92,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886051"
  },
  {
    "name": "黄金概念",
    "rise": -3.21,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "液冷服务器",
    "rise": -0.63,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  }
];
const THS_EVENTS = [
  {
    "title": "腾讯，最新业绩出炉！二季度资本开支大增176%",
    "desc": "",
    "heat": 445021,
    "direction": "腾讯概念",
    "themes": [
      "腾讯概念",
      "腾讯系算力",
      "腾讯元宝"
    ],
    "stocks": [
      {
        "name": "立昂技术",
        "code": "300603",
        "chg": 18.306351
      }
    ]
  },
  {
    "title": "反弹超30%的创新药再度大涨！AI休整后，市场新主线来了？",
    "desc": "",
    "heat": 396055,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗",
      "实验猴"
    ],
    "stocks": [
      {
        "name": "新赣江",
        "code": "920367",
        "chg": 29.600333
      }
    ]
  },
  {
    "title": "DeepSeek V4 Pro 正式版API上线 大幅增强Agent能力",
    "desc": "",
    "heat": 213126,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "博济医药",
        "code": "300404",
        "chg": 20.016611
      }
    ]
  },
  {
    "title": "鸿海第四季度将开始出货英伟达Vera Rubin平台",
    "desc": "",
    "heat": 178825,
    "direction": "英伟达概念",
    "themes": [
      "英伟达概念",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "立昂技术",
        "code": "300603",
        "chg": 18.306351
      }
    ]
  },
  {
    "title": "算力即黄金！单笔合同突破10亿美元，AI新贵Nebius(NBIS.US)云业务营收飙升500%，盘前暴涨",
    "desc": "",
    "heat": 100045,
    "direction": "云算力租赁",
    "themes": [
      "东数西算(算力)",
      "算力租赁",
      "云计算"
    ],
    "stocks": [
      {
        "name": "立昂技术",
        "code": "300603",
        "chg": 18.306351
      }
    ]
  },
  {
    "title": "到 2030 年全国算力用电量将达 8000 亿度，届时 6 万亿度绿电奔涌入网",
    "desc": "",
    "heat": 78204,
    "direction": "算电协同",
    "themes": [
      "算电协同",
      "电力"
    ],
    "stocks": [
      {
        "name": "大唐发电",
        "code": "601991",
        "chg": 10.015898
      }
    ]
  },
  {
    "title": "从“不敢保”到“主动保” 保险补齐脑机接口产业化关键一环",
    "desc": "",
    "heat": 71855,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "澳洋健康",
        "code": "002172",
        "chg": 10.133333
      }
    ]
  },
  {
    "title": "马斯克：大概再过四五年，AI 将占到 SpaceX 价值的 99%",
    "desc": "",
    "heat": 13051,
    "direction": "太空算力",
    "themes": [
      "太空算力",
      "太空光伏"
    ],
    "stocks": [
      {
        "name": "明阳智能",
        "code": "601615",
        "chg": 1.848739
      }
    ]
  }
];
const XGT_HOT = [];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 3,
    "hot_rank_chg": -1,
    "stock_cnt": 5846,
    "price": "8.86",
    "change": "0.57",
    "market_id": "17",
    "circulate_market_value": "22313998000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 9,
    "hot_rank_chg": 19,
    "stock_cnt": 5846,
    "price": "10.93",
    "change": "-4.54",
    "market_id": "17",
    "circulate_market_value": "19555282000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 12,
    "hot_rank_chg": 10,
    "stock_cnt": 5846,
    "price": "6.27",
    "change": "-2.34",
    "market_id": "33",
    "circulate_market_value": "13790164000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 14,
    "hot_rank_chg": 7,
    "stock_cnt": 5846,
    "price": "5.56",
    "change": "0.72",
    "market_id": "33",
    "circulate_market_value": "32552679000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 19,
    "hot_rank_chg": -10,
    "stock_cnt": 5846,
    "price": "11.62",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "3305676300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 22,
    "hot_rank_chg": -12,
    "stock_cnt": 5846,
    "price": "8.35",
    "change": "-2.11",
    "market_id": "33",
    "circulate_market_value": "13574543000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 25,
    "hot_rank_chg": 26,
    "stock_cnt": 5846,
    "price": "6.26",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4479305500.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "《欢迎来龙餐馆》上映",
    "xgb_concepts": []
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 28,
    "hot_rank_chg": 41,
    "stock_cnt": 5846,
    "price": "4.81",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "12718810600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "洁净室",
    "xgb_concepts": []
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 32,
    "hot_rank_chg": -1,
    "stock_cnt": 5846,
    "price": "5.86",
    "change": "-1.18",
    "market_id": "33",
    "circulate_market_value": "207251410000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002400",
    "name": "省广集团",
    "hot_rank": 36,
    "hot_rank_chg": 34,
    "stock_cnt": 5846,
    "price": "7.95",
    "change": "8.46",
    "market_id": "33",
    "circulate_market_value": "13723009000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 39,
    "hot_rank_chg": 11,
    "stock_cnt": 5846,
    "price": "4.57",
    "change": "-3.18",
    "market_id": "17",
    "circulate_market_value": "14936762000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 42,
    "hot_rank_chg": 62,
    "stock_cnt": 5846,
    "price": "12.49",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "7519347500.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "IDC全产业链",
    "xgb_concepts": []
  },
  {
    "code": "002329",
    "name": "皇氏集团",
    "hot_rank": 43,
    "hot_rank_chg": 47,
    "stock_cnt": 5846,
    "price": "4.62",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3010359300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "乳业",
    "xgb_concepts": []
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 44,
    "hot_rank_chg": -8,
    "stock_cnt": 5846,
    "price": "10.23",
    "change": "-5.10",
    "market_id": "33",
    "circulate_market_value": "21298879000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 49,
    "hot_rank_chg": 6,
    "stock_cnt": 5846,
    "price": "3.57",
    "change": "-7.99",
    "market_id": "33",
    "circulate_market_value": "7152056600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 53,
    "hot_rank_chg": 27,
    "stock_cnt": 5846,
    "price": "6.92",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "85780937000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "超超临界火电",
    "xgb_concepts": []
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 56,
    "hot_rank_chg": -38,
    "stock_cnt": 5846,
    "price": "10.73",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "4987014300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002248",
    "name": "华东数控",
    "hot_rank": 61,
    "hot_rank_chg": 14,
    "stock_cnt": 5846,
    "price": "11.74",
    "change": "-3.53",
    "market_id": "33",
    "circulate_market_value": "3609998300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 65,
    "hot_rank_chg": -30,
    "stock_cnt": 5846,
    "price": "11.30",
    "change": "1.80",
    "market_id": "33",
    "circulate_market_value": "10020351100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600881",
    "name": "亚泰集团",
    "hot_rank": 70,
    "hot_rank_chg": 101,
    "stock_cnt": 5846,
    "price": "2.27",
    "change": "10.19",
    "market_id": "17",
    "circulate_market_value": "7336982700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "创新药",
    "xgb_concepts": []
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 73,
    "hot_rank_chg": 11,
    "stock_cnt": 5846,
    "price": "4.25",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "8925653900.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "创新药",
    "xgb_concepts": []
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 78,
    "hot_rank_chg": -34,
    "stock_cnt": 5846,
    "price": "7.10",
    "change": "-6.46",
    "market_id": "17",
    "circulate_market_value": "8085176800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600683",
    "name": "京投发展",
    "hot_rank": 81,
    "hot_rank_chg": 51,
    "stock_cnt": 5846,
    "price": "12.93",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "9578254300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "资产重组",
    "xgb_concepts": []
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 82,
    "hot_rank_chg": 12,
    "stock_cnt": 5846,
    "price": "12.08",
    "change": "-3.13",
    "market_id": "17",
    "circulate_market_value": "15501039000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 88,
    "hot_rank_chg": 234,
    "stock_cnt": 5846,
    "price": "6.80",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "50832286000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "热电联产",
    "xgb_concepts": []
  },
  {
    "code": "600376",
    "name": "首开股份",
    "hot_rank": 93,
    "hot_rank_chg": 2,
    "stock_cnt": 5846,
    "price": "4.18",
    "change": "-5.43",
    "market_id": "17",
    "circulate_market_value": "10782582700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 95,
    "hot_rank_chg": -27,
    "stock_cnt": 5846,
    "price": "6.65",
    "change": "-4.73",
    "market_id": "33",
    "circulate_market_value": "6869023100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600667", "name": "太极实业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5846, "price": "23.78", "change": "4.71", "market_id": "17", "circulate_market_value": "49736873000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5846, "price": "14.50", "change": "3.35", "market_id": "17", "circulate_market_value": "5575940700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5846, "price": "8.86", "change": "0.57", "market_id": "17", "circulate_market_value": "22313998000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "000636", "name": "风华高科", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5846, "price": "62.02", "change": "-6.75", "market_id": "33", "circulate_market_value": "71757931000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 5, "hot_rank_chg": 6, "stock_cnt": 5846, "price": "33.43", "change": "10.00", "market_id": "17", "circulate_market_value": "13405430000.00", "change_type": "1", "change_section": "13", "change_days": "9", "change_reason": "乳业"}, {"code": "603629", "name": "利通电子", "hot_rank": 6, "hot_rank_chg": 14, "stock_cnt": 5846, "price": "125.00", "change": "4.72", "market_id": "17", "circulate_market_value": "45090425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 7, "hot_rank_chg": 23, "stock_cnt": 5846, "price": "18.94", "change": "0.53", "market_id": "33", "circulate_market_value": "22282320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5846, "price": "40.76", "change": "-1.09", "market_id": "17", "circulate_market_value": "59590908000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 9, "hot_rank_chg": 19, "stock_cnt": 5846, "price": "10.93", "change": "-4.54", "market_id": "17", "circulate_market_value": "19555282000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "688825", "name": "长鑫科技", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5846, "price": "52.88", "change": "-1.20", "market_id": "17", "circulate_market_value": "238120700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 11, "hot_rank_chg": 22, "stock_cnt": 5846, "price": "39.60", "change": "7.03", "market_id": "33", "circulate_market_value": "113258878000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 12, "hot_rank_chg": 10, "stock_cnt": 5846, "price": "6.27", "change": "-2.34", "market_id": "33", "circulate_market_value": "13790164000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002229", "name": "鸿博股份", "hot_rank": 13, "hot_rank_chg": 44, "stock_cnt": 5846, "price": "13.65", "change": "5.73", "market_id": "33", "circulate_market_value": "6731581600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 14, "hot_rank_chg": 7, "stock_cnt": 5846, "price": "5.56", "change": "0.72", "market_id": "33", "circulate_market_value": "32552679000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "000815", "name": "美利云", "hot_rank": 15, "hot_rank_chg": 17, "stock_cnt": 5846, "price": "18.36", "change": "-1.98", "market_id": "33", "circulate_market_value": "12765029300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 16, "hot_rank_chg": 37, "stock_cnt": 5846, "price": "19.36", "change": "-4.39", "market_id": "17", "circulate_market_value": "20798506000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 17, "hot_rank_chg": -11, "stock_cnt": 5846, "price": "100.21", "change": "-5.44", "market_id": "33", "circulate_market_value": "65440700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 18, "hot_rank_chg": -11, "stock_cnt": 5846, "price": "15.27", "change": "-1.23", "market_id": "33", "circulate_market_value": "14251821000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 19, "hot_rank_chg": -10, "stock_cnt": 5846, "price": "11.62", "change": "-9.99", "market_id": "33", "circulate_market_value": "3305676300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600396", "name": "华电辽能", "hot_rank": 20, "hot_rank_chg": -5, "stock_cnt": 5846, "price": "18.73", "change": "9.02", "market_id": "17", "circulate_market_value": "27583799000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 21, "hot_rank_chg": 4, "stock_cnt": 5846, "price": "404.50", "change": "-2.10", "market_id": "17", "circulate_market_value": "270404990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 22, "hot_rank_chg": -12, "stock_cnt": 5846, "price": "8.35", "change": "-2.11", "market_id": "33", "circulate_market_value": "13574543000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "300308", "name": "中际旭创", "hot_rank": 23, "hot_rank_chg": -6, "stock_cnt": 5846, "price": "921.04", "change": "0.00", "market_id": "33", "circulate_market_value": "1022298930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 24, "hot_rank_chg": 2, "stock_cnt": 5846, "price": "32.57", "change": "-2.28", "market_id": "17", "circulate_market_value": "10973482800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000802", "name": "北京文化", "hot_rank": 25, "hot_rank_chg": 26, "stock_cnt": 5846, "price": "6.26", "change": "10.02", "market_id": "33", "circulate_market_value": "4479305500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "《欢迎来龙餐馆》上映", "xgb_concepts": []}, {"code": "600487", "name": "亨通光电", "hot_rank": 26, "hot_rank_chg": -12, "stock_cnt": 5846, "price": "57.25", "change": "-3.46", "market_id": "17", "circulate_market_value": "140471250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 27, "hot_rank_chg": 0, "stock_cnt": 5846, "price": "15.25", "change": "-4.03", "market_id": "33", "circulate_market_value": "53038437000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 28, "hot_rank_chg": 41, "stock_cnt": 5846, "price": "4.81", "change": "10.07", "market_id": "33", "circulate_market_value": "12718810600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "洁净室", "xgb_concepts": []}, {"code": "603228", "name": "景旺电子", "hot_rank": 29, "hot_rank_chg": 14, "stock_cnt": 5846, "price": "97.20", "change": "-1.03", "market_id": "17", "circulate_market_value": "95441994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 30, "hot_rank_chg": -1, "stock_cnt": 5846, "price": "77.82", "change": "-0.46", "market_id": "17", "circulate_market_value": "139252240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 31, "hot_rank_chg": -18, "stock_cnt": 5846, "price": "38.97", "change": "4.20", "market_id": "33", "circulate_market_value": "42039563000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 32, "hot_rank_chg": -1, "stock_cnt": 5846, "price": "5.86", "change": "-1.18", "market_id": "33", "circulate_market_value": "207251410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002384", "name": "东山精密", "hot_rank": 33, "hot_rank_chg": -17, "stock_cnt": 5846, "price": "202.11", "change": "0.96", "market_id": "33", "circulate_market_value": "280189480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 35, "hot_rank_chg": 3, "stock_cnt": 5846, "price": "17.88", "change": "-2.29", "market_id": "33", "circulate_market_value": "59409013000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002400", "name": "省广集团", "hot_rank": 36, "hot_rank_chg": 34, "stock_cnt": 5846, "price": "7.95", "change": "8.46", "market_id": "33", "circulate_market_value": "13723009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600206", "name": "有研新材", "hot_rank": 37, "hot_rank_chg": -18, "stock_cnt": 5846, "price": "50.21", "change": "-5.17", "market_id": "17", "circulate_market_value": "42505443000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 38, "hot_rank_chg": -26, "stock_cnt": 5846, "price": "58.66", "change": "-2.35", "market_id": "33", "circulate_market_value": "21616403000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 39, "hot_rank_chg": 11, "stock_cnt": 5846, "price": "4.57", "change": "-3.18", "market_id": "17", "circulate_market_value": "14936762000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600183", "name": "生益科技", "hot_rank": 40, "hot_rank_chg": 5, "stock_cnt": 5846, "price": "141.74", "change": "-1.04", "market_id": "17", "circulate_market_value": "341841280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 41, "hot_rank_chg": 5, "stock_cnt": 5846, "price": "257.16", "change": "7.13", "market_id": "33", "circulate_market_value": "279889870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603887", "name": "城地香江", "hot_rank": 42, "hot_rank_chg": 62, "stock_cnt": 5846, "price": "12.49", "change": "10.04", "market_id": "17", "circulate_market_value": "7519347500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "IDC全产业链", "xgb_concepts": []}, {"code": "002329", "name": "皇氏集团", "hot_rank": 43, "hot_rank_chg": 47, "stock_cnt": 5846, "price": "4.62", "change": "10.00", "market_id": "33", "circulate_market_value": "3010359300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "乳业", "xgb_concepts": []}, {"code": "002739", "name": "儒意电影", "hot_rank": 44, "hot_rank_chg": -8, "stock_cnt": 5846, "price": "10.23", "change": "-5.10", "market_id": "33", "circulate_market_value": "21298879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "601138", "name": "工业富联", "hot_rank": 45, "hot_rank_chg": 4, "stock_cnt": 5846, "price": "65.23", "change": "-0.56", "market_id": "17", "circulate_market_value": "1294430140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 46, "hot_rank_chg": 1, "stock_cnt": 5846, "price": "162.33", "change": "2.07", "market_id": "17", "circulate_market_value": "401487580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 47, "hot_rank_chg": -13, "stock_cnt": 5846, "price": "41.90", "change": "-3.26", "market_id": "17", "circulate_market_value": "166409500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301396", "name": "宏景科技", "hot_rank": 48, "hot_rank_chg": 105, "stock_cnt": 5846, "price": "204.32", "change": "4.86", "market_id": "33", "circulate_market_value": "28912668000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 49, "hot_rank_chg": 6, "stock_cnt": 5846, "price": "3.57", "change": "-7.99", "market_id": "33", "circulate_market_value": "7152056600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002792", "name": "通宇通讯", "hot_rank": 50, "hot_rank_chg": -27, "stock_cnt": 5846, "price": "38.63", "change": "4.10", "market_id": "33", "circulate_market_value": "13050159700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 51, "hot_rank_chg": 49, "stock_cnt": 5846, "price": "79.46", "change": "5.92", "market_id": "33", "circulate_market_value": "116554455000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 52, "hot_rank_chg": -15, "stock_cnt": 5846, "price": "32.90", "change": "-1.94", "market_id": "17", "circulate_market_value": "112286044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 53, "hot_rank_chg": 27, "stock_cnt": 5846, "price": "6.92", "change": "10.02", "market_id": "17", "circulate_market_value": "85780937000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超超临界火电", "xgb_concepts": []}, {"code": "001309", "name": "德明利", "hot_rank": 54, "hot_rank_chg": -14, "stock_cnt": 5846, "price": "396.53", "change": "-2.71", "market_id": "33", "circulate_market_value": "65438971000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 55, "hot_rank_chg": -14, "stock_cnt": 5846, "price": "16.00", "change": "-7.35", "market_id": "17", "circulate_market_value": "2560000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000779", "name": "甘咨询", "hot_rank": 56, "hot_rank_chg": -38, "stock_cnt": 5846, "price": "10.73", "change": "-9.98", "market_id": "33", "circulate_market_value": "4987014300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "000657", "name": "中钨高新", "hot_rank": 57, "hot_rank_chg": -33, "stock_cnt": 5846, "price": "66.70", "change": "-5.30", "market_id": "33", "circulate_market_value": "96945249000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603758", "name": "秦安股份", "hot_rank": 58, "hot_rank_chg": 33, "stock_cnt": 5846, "price": "15.35", "change": "10.04", "market_id": "17", "circulate_market_value": "6648331400.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "小盘股"}, {"code": "600641", "name": "先导基电", "hot_rank": 59, "hot_rank_chg": -11, "stock_cnt": 5846, "price": "34.02", "change": "-4.76", "market_id": "17", "circulate_market_value": "31660030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 60, "hot_rank_chg": -1, "stock_cnt": 5846, "price": "39.55", "change": "-1.98", "market_id": "33", "circulate_market_value": "62257853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002248", "name": "华东数控", "hot_rank": 61, "hot_rank_chg": 14, "stock_cnt": 5846, "price": "11.74", "change": "-3.53", "market_id": "33", "circulate_market_value": "3609998300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "300502", "name": "新易盛", "hot_rank": 62, "hot_rank_chg": -8, "stock_cnt": 5846, "price": "429.90", "change": "0.40", "market_id": "33", "circulate_market_value": "539199130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 63, "hot_rank_chg": -5, "stock_cnt": 5846, "price": "17.50", "change": "-6.62", "market_id": "17", "circulate_market_value": "17324298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 64, "hot_rank_chg": 109, "stock_cnt": 5846, "price": "32.38", "change": "9.99", "market_id": "33", "circulate_market_value": "24525101000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CPO"}, {"code": "002585", "name": "双星新材", "hot_rank": 65, "hot_rank_chg": -30, "stock_cnt": 5846, "price": "11.30", "change": "1.80", "market_id": "33", "circulate_market_value": "10020351100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "603118", "name": "共进股份", "hot_rank": 66, "hot_rank_chg": 252, "stock_cnt": 5846, "price": "15.96", "change": "9.99", "market_id": "17", "circulate_market_value": "12564931400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "300285", "name": "国瓷材料", "hot_rank": 67, "hot_rank_chg": -28, "stock_cnt": 5846, "price": "70.66", "change": "-4.51", "market_id": "33", "circulate_market_value": "60278137000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 68, "hot_rank_chg": -5, "stock_cnt": 5846, "price": "62.22", "change": "-1.02", "market_id": "33", "circulate_market_value": "94415877000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 69, "hot_rank_chg": 27, "stock_cnt": 5846, "price": "26.40", "change": "-1.79", "market_id": "17", "circulate_market_value": "22758183000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600881", "name": "亚泰集团", "hot_rank": 70, "hot_rank_chg": 101, "stock_cnt": 5846, "price": "2.27", "change": "10.19", "market_id": "17", "circulate_market_value": "7336982700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "创新药", "xgb_concepts": []}, {"code": "001696", "name": "宗申动力", "hot_rank": 71, "hot_rank_chg": 44, "stock_cnt": 5846, "price": "16.64", "change": "-3.76", "market_id": "33", "circulate_market_value": "14832866000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 72, "hot_rank_chg": 1, "stock_cnt": 5846, "price": "35.08", "change": "-1.43", "market_id": "33", "circulate_market_value": "141288950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 73, "hot_rank_chg": 11, "stock_cnt": 5846, "price": "4.25", "change": "10.10", "market_id": "33", "circulate_market_value": "8925653900.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "创新药", "xgb_concepts": []}, {"code": "002281", "name": "光迅科技", "hot_rank": 74, "hot_rank_chg": -14, "stock_cnt": 5846, "price": "184.85", "change": "-0.10", "market_id": "33", "circulate_market_value": "145353180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 75, "hot_rank_chg": -13, "stock_cnt": 5846, "price": "32.21", "change": "-4.08", "market_id": "17", "circulate_market_value": "663583760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 76, "hot_rank_chg": -15, "stock_cnt": 5846, "price": "76.00", "change": "-2.19", "market_id": "17", "circulate_market_value": "31643946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 77, "hot_rank_chg": 33, "stock_cnt": 5846, "price": "13.72", "change": "10.02", "market_id": "17", "circulate_market_value": "8161046900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "具身智能"}, {"code": "601700", "name": "风范股份", "hot_rank": 78, "hot_rank_chg": -34, "stock_cnt": 5846, "price": "7.10", "change": "-6.46", "market_id": "17", "circulate_market_value": "8085176800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 79, "hot_rank_chg": 3, "stock_cnt": 5846, "price": "119.23", "change": "-1.06", "market_id": "33", "circulate_market_value": "98843523000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 80, "hot_rank_chg": 7, "stock_cnt": 5846, "price": "26.30", "change": "-3.66", "market_id": "17", "circulate_market_value": "10071959800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600683", "name": "京投发展", "hot_rank": 81, "hot_rank_chg": 51, "stock_cnt": 5846, "price": "12.93", "change": "10.04", "market_id": "17", "circulate_market_value": "9578254300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "资产重组", "xgb_concepts": []}, {"code": "600172", "name": "黄河旋风", "hot_rank": 82, "hot_rank_chg": 12, "stock_cnt": 5846, "price": "12.08", "change": "-3.13", "market_id": "17", "circulate_market_value": "15501039000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002202", "name": "金风科技", "hot_rank": 83, "hot_rank_chg": 18, "stock_cnt": 5846, "price": "20.93", "change": "2.40", "market_id": "33", "circulate_market_value": "70398161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 84, "hot_rank_chg": -20, "stock_cnt": 5846, "price": "36.44", "change": "-5.96", "market_id": "33", "circulate_market_value": "51176078000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000887", "name": "中鼎股份", "hot_rank": 85, "hot_rank_chg": 84, "stock_cnt": 5846, "price": "23.69", "change": "9.98", "market_id": "33", "circulate_market_value": "31137440000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "腾讯云合作"}, {"code": "301308", "name": "江波龙", "hot_rank": 86, "hot_rank_chg": -20, "stock_cnt": 5846, "price": "397.00", "change": "-4.18", "market_id": "33", "circulate_market_value": "111895201000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002364", "name": "中恒电气", "hot_rank": 87, "hot_rank_chg": 161, "stock_cnt": 5846, "price": "43.00", "change": "3.39", "market_id": "33", "circulate_market_value": "23998462000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600726", "name": "华电能源", "hot_rank": 88, "hot_rank_chg": 234, "stock_cnt": 5846, "price": "6.80", "change": "10.03", "market_id": "17", "circulate_market_value": "50832286000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "热电联产", "xgb_concepts": []}, {"code": "002747", "name": "埃斯顿", "hot_rank": 89, "hot_rank_chg": -17, "stock_cnt": 5846, "price": "34.67", "change": "-0.12", "market_id": "33", "circulate_market_value": "27127027000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002851", "name": "麦格米特", "hot_rank": 90, "hot_rank_chg": 161, "stock_cnt": 5846, "price": "131.86", "change": "4.93", "market_id": "33", "circulate_market_value": "64834128000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 91, "hot_rank_chg": -15, "stock_cnt": 5846, "price": "65.58", "change": "-4.22", "market_id": "33", "circulate_market_value": "47500605000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 92, "hot_rank_chg": -9, "stock_cnt": 5846, "price": "271.30", "change": "-2.90", "market_id": "33", "circulate_market_value": "234727390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600376", "name": "首开股份", "hot_rank": 93, "hot_rank_chg": 2, "stock_cnt": 5846, "price": "4.18", "change": "-5.43", "market_id": "17", "circulate_market_value": "10782582700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "300862", "name": "蓝盾光电", "hot_rank": 94, "hot_rank_chg": 56, "stock_cnt": 5846, "price": "39.41", "change": "20.01", "market_id": "33", "circulate_market_value": "5969472400.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "拟收购岚创科技"}, {"code": "002141", "name": "贤丰控股", "hot_rank": 95, "hot_rank_chg": -27, "stock_cnt": 5846, "price": "6.65", "change": "-4.73", "market_id": "33", "circulate_market_value": "6869023100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "603137", "name": "恒尚节能", "hot_rank": 96, "hot_rank_chg": -29, "stock_cnt": 5846, "price": "28.98", "change": "-7.12", "market_id": "17", "circulate_market_value": "5301408000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300857", "name": "协创数据", "hot_rank": 97, "hot_rank_chg": 160, "stock_cnt": 5846, "price": "256.00", "change": "2.48", "market_id": "33", "circulate_market_value": "124636159000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 98, "hot_rank_chg": 24, "stock_cnt": 5846, "price": "120.66", "change": "-1.91", "market_id": "33", "circulate_market_value": "232006310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 99, "hot_rank_chg": 140, "stock_cnt": 5846, "price": "48.84", "change": "1.96", "market_id": "17", "circulate_market_value": "52384092000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 100, "hot_rank_chg": -3, "stock_cnt": 5846, "price": "17.55", "change": "-7.92", "market_id": "33", "circulate_market_value": "16298807000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告"};