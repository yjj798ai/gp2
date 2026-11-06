const UPDATE_TIME = "2026-11-06 19:49";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": -2.41,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续253天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "光伏概念",
    "rise": -1.79,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "AI应用",
    "rise": -2.2,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续82天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": -1.78,
    "rate": 0,
    "tag": "",
    "hotTag": "连续154天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "短剧游戏",
    "rise": -1.4,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "人形机器人",
    "rise": -2.93,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -4.35,
    "rate": 0,
    "tag": "",
    "hotTag": "连续324天上榜",
    "rankChg": -1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "高股息精选",
    "rise": 0.01,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "红利ETF",
    "code": "886072"
  },
  {
    "name": "核电",
    "rise": -1.61,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "电力ETF",
    "code": "885571"
  },
  {
    "name": "转基因",
    "rise": 2.01,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "机器人概念",
    "rise": -2.43,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "人工智能",
    "rise": -2.21,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续31天上榜",
    "rankChg": -1,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "储能",
    "rise": -1.94,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "储能电池ETF",
    "code": "885921"
  },
  {
    "name": "PCB概念",
    "rise": -3.93,
    "rate": 0,
    "tag": "",
    "hotTag": "连续147天上榜",
    "rankChg": 1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": -3.31,
    "rate": 0,
    "tag": "",
    "hotTag": "连续277天上榜",
    "rankChg": -1,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "超级品牌",
    "rise": -0.65,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885761"
  },
  {
    "name": "芯片概念",
    "rise": -3.02,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续34天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "AI视频",
    "rise": -1.8,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886068"
  },
  {
    "name": "算力租赁",
    "rise": -2.11,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "国企改革",
    "rise": -1.11,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "央企红利ETF",
    "code": "886021"
  }
];
const THS_EVENTS = [
  {
    "title": "今年前9个月泰国大米对东盟出口增长109%",
    "desc": "",
    "heat": 161975,
    "direction": "粮食",
    "themes": [
      "玉米",
      "大豆",
      "猪肉",
      "转基因"
    ],
    "stocks": [
      {
        "name": "秋乐种业",
        "code": "920087",
        "chg": 11.544462
      }
    ]
  },
  {
    "title": "美国首只人形机器人股Agility(AGLT.US)今晚登陆纳斯达克 富士康、英伟达站台",
    "desc": "",
    "heat": 76456,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "自动化设备",
      "人形机器人",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "N森峰",
        "code": "920085",
        "chg": 120.629567
      }
    ]
  },
  {
    "title": "上交所召开两场并购重组专题座谈会！",
    "desc": "",
    "heat": 54507,
    "direction": "并购重组",
    "themes": [
      "股权转让(并购重组)"
    ],
    "stocks": [
      {
        "name": "新亚制程",
        "code": "002388",
        "chg": 10.066007
      }
    ]
  },
  {
    "title": "民主党中期选举大胜后，AI巨头迎监管与数据中心双重压力",
    "desc": "",
    "heat": 20025,
    "direction": "Token出海",
    "themes": [
      "东数西算(算力)",
      "算力租赁"
    ],
    "stocks": [
      {
        "name": "奥雅股份",
        "code": "300949",
        "chg": 12.517275
      }
    ]
  },
  {
    "title": "超聚变IPO，11月12日上会",
    "desc": "",
    "heat": 0,
    "direction": "超聚变IPO",
    "themes": [
      "股权相关",
      "代理经销",
      "硬件供应链"
    ],
    "stocks": [
      {
        "name": "东方明珠",
        "code": "600637",
        "chg": 4.798962
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "转基因",
    "change": "+2.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "棉花",
    "change": "+2.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+1.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "+1.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+1.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+0.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水电",
    "change": "+0.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+0.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电力体制改革",
    "change": "+0.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+0.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "山东自贸区",
    "change": "+0.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+0.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车拆解",
    "change": "+0.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "成渝城市群",
    "change": "+0.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "+0.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+0.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "+0.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新疆国企改革",
    "change": "+0.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "进口博览会",
    "change": "+0.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "宁夏概念",
    "change": "+0.01%",
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
    "hot_rank": 1,
    "hot_rank_chg": 1,
    "stock_cnt": 5825,
    "price": "3.97",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "6276455900.00",
    "change_type": "1",
    "change_section": "13",
    "change_days": "8",
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -1.51
      },
      {
        "name": "体外诊断",
        "change_pct": -2.01
      },
      {
        "name": "医疗器械",
        "change_pct": -1.83
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "基因测序",
        "change_pct": -1.79
      },
      {
        "name": "预制菜",
        "change_pct": -1.15
      },
      {
        "name": "水产养殖",
        "change_pct": 0.32
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.51
      },
      {
        "name": "海洋经济",
        "change_pct": -1.73
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 3,
    "hot_rank_chg": 25,
    "stock_cnt": 5825,
    "price": "8.99",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "7309302400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“东方”",
    "xgb_concepts": [
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "家电",
        "change_pct": -1.55
      },
      {
        "name": "储能",
        "change_pct": -1.52
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -2.0
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -2.48
      },
      {
        "name": "厨卫家电",
        "change_pct": -0.75
      },
      {
        "name": "华为产业链",
        "change_pct": -2.52
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 4,
    "hot_rank_chg": 1,
    "stock_cnt": 5825,
    "price": "5.40",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "7209286000.00",
    "change_type": "1",
    "change_section": "12",
    "change_days": "7",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "LED",
        "change_pct": -1.73
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.14
      }
    ]
  },
  {
    "code": "002088",
    "name": "鲁阳节能",
    "hot_rank": 6,
    "hot_rank_chg": 17,
    "stock_cnt": 5825,
    "price": "11.09",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "5611147800.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "5",
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -2.45
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "大气治理",
        "change_pct": -1.82
      },
      {
        "name": "雄安新区",
        "change_pct": -1.13
      },
      {
        "name": "耐火材料",
        "change_pct": 0.75
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.11
      },
      {
        "name": "环保",
        "change_pct": -1.2
      },
      {
        "name": "船舶",
        "change_pct": -0.94
      },
      {
        "name": "建筑节能",
        "change_pct": -1.27
      },
      {
        "name": "气凝胶",
        "change_pct": -1.62
      },
      {
        "name": "旧改",
        "change_pct": -1.28
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 7,
    "hot_rank_chg": 7,
    "stock_cnt": 5825,
    "price": "5.08",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "5895555700.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "纺织服装",
        "change_pct": -1.11
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.65
      },
      {
        "name": "影视",
        "change_pct": -0.58
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.61
      }
    ]
  },
  {
    "code": "300118",
    "name": "东方日升",
    "hot_rank": 9,
    "hot_rank_chg": -2,
    "stock_cnt": 5825,
    "price": "10.27",
    "change": "15.26",
    "market_id": "33",
    "circulate_market_value": "9515356100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -1.22
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "储能",
        "change_pct": -1.52
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.54
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.57
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.97
      },
      {
        "name": "光伏胶膜",
        "change_pct": -1.75
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 11,
    "hot_rank_chg": 11,
    "stock_cnt": 5825,
    "price": "5.01",
    "change": "10.11",
    "market_id": "33",
    "circulate_market_value": "4314424400.00",
    "change_type": "1",
    "change_section": "10",
    "change_days": "6",
    "change_reason": "光伏边框",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.76
      },
      {
        "name": "一带一路",
        "change_pct": -1.46
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.49
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "有色金属",
        "change_pct": -2.3
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.11
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.92
      },
      {
        "name": "自贸区",
        "change_pct": -1.02
      },
      {
        "name": "液冷服务器",
        "change_pct": -3.29
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 12,
    "hot_rank_chg": 110,
    "stock_cnt": 5825,
    "price": "2.32",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "10205701900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“东方”",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.98
      },
      {
        "name": "京津冀",
        "change_pct": -1.37
      },
      {
        "name": "旅游",
        "change_pct": -1.42
      },
      {
        "name": "园林",
        "change_pct": -1.84
      },
      {
        "name": "海绵城市",
        "change_pct": -0.56
      },
      {
        "name": "固废处理",
        "change_pct": -0.75
      },
      {
        "name": "雄安新区",
        "change_pct": -1.13
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.98
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -1.2
      },
      {
        "name": "碳中和",
        "change_pct": -0.93
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.33
      },
      {
        "name": "汽车拆解",
        "change_pct": 0.23
      },
      {
        "name": "土壤修复",
        "change_pct": -1.25
      },
      {
        "name": "核污染防治",
        "change_pct": -1.79
      },
      {
        "name": "新型城镇化",
        "change_pct": -1.17
      },
      {
        "name": "低价股",
        "change_pct": -1.06
      },
      {
        "name": "西部大开发",
        "change_pct": -1.3
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 13,
    "hot_rank_chg": 31,
    "stock_cnt": 5825,
    "price": "4.91",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "4344267400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“东方”",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.93
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.4
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "信托",
        "change_pct": -0.35
      },
      {
        "name": "民营医院",
        "change_pct": -1.14
      },
      {
        "name": "社区团购",
        "change_pct": -0.69
      },
      {
        "name": "大金融",
        "change_pct": 0.21
      },
      {
        "name": "餐饮",
        "change_pct": -1.46
      },
      {
        "name": "首发经济",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 14,
    "hot_rank_chg": 6,
    "stock_cnt": 5825,
    "price": "8.70",
    "change": "-3.76",
    "market_id": "33",
    "circulate_market_value": "5221015500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.52
      },
      {
        "name": "边缘计算",
        "change_pct": -2.43
      },
      {
        "name": "核电",
        "change_pct": -1.69
      },
      {
        "name": "海工装备",
        "change_pct": -1.93
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.01
      },
      {
        "name": "冷链",
        "change_pct": -1.76
      },
      {
        "name": "地热",
        "change_pct": -2.72
      },
      {
        "name": "储能",
        "change_pct": -1.52
      },
      {
        "name": "碳中和",
        "change_pct": -0.93
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.49
      },
      {
        "name": "汽车热管理",
        "change_pct": -1.99
      },
      {
        "name": "热泵",
        "change_pct": -2.0
      },
      {
        "name": "液冷服务器",
        "change_pct": -3.29
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.68
      },
      {
        "name": "海洋经济",
        "change_pct": -1.73
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 15,
    "hot_rank_chg": -5,
    "stock_cnt": 5825,
    "price": "11.19",
    "change": "6.88",
    "market_id": "17",
    "circulate_market_value": "7181554200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -2.37
      },
      {
        "name": "农业种植",
        "change_pct": 1.37
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.7
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.33
      },
      {
        "name": "休闲食品",
        "change_pct": -1.66
      },
      {
        "name": "食品",
        "change_pct": -1.24
      },
      {
        "name": "食品安全",
        "change_pct": -2.09
      },
      {
        "name": "社区团购",
        "change_pct": -0.69
      },
      {
        "name": "大农业",
        "change_pct": -0.96
      },
      {
        "name": "预制菜",
        "change_pct": -1.15
      },
      {
        "name": "人造肉",
        "change_pct": -0.76
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 16,
    "hot_rank_chg": 61,
    "stock_cnt": 5825,
    "price": "11.31",
    "change": "2.17",
    "market_id": "17",
    "circulate_market_value": "6499146200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -1.11
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.49
      },
      {
        "name": "自贸区",
        "change_pct": -1.02
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "002029",
    "name": "七匹狼",
    "hot_rank": 18,
    "hot_rank_chg": 24,
    "stock_cnt": 5825,
    "price": "8.90",
    "change": "0.45",
    "market_id": "33",
    "circulate_market_value": "5922113000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "纺织服装",
        "change_pct": -1.11
      },
      {
        "name": "破净股",
        "change_pct": -0.65
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "000525",
    "name": "红太阳",
    "hot_rank": 19,
    "hot_rank_chg": 79,
    "stock_cnt": 5825,
    "price": "5.02",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "5581035200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "草铵膦",
        "change_pct": 0.45
      },
      {
        "name": "农药",
        "change_pct": -1.01
      },
      {
        "name": "长寿药NMN",
        "change_pct": -0.89
      },
      {
        "name": "大农业",
        "change_pct": -0.96
      },
      {
        "name": "虫害防治",
        "change_pct": -0.43
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 21,
    "hot_rank_chg": 61,
    "stock_cnt": 5825,
    "price": "6.67",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "3376510700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "电解液",
    "xgb_concepts": [
      {
        "name": "电子特气",
        "change_pct": -1.8
      },
      {
        "name": "资产重组",
        "change_pct": -1.98
      },
      {
        "name": "仪器仪表",
        "change_pct": -2.55
      },
      {
        "name": "锂电池",
        "change_pct": -2.45
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.48
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "有机硅",
        "change_pct": -0.87
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.11
      },
      {
        "name": "华为产业链",
        "change_pct": -2.52
      },
      {
        "name": "供应链金融",
        "change_pct": -0.7
      },
      {
        "name": "服务器",
        "change_pct": -3.31
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 24,
    "hot_rank_chg": 15,
    "stock_cnt": 5825,
    "price": "12.39",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "3625041400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "玉米种业",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 1.37
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "转基因",
        "change_pct": 2.31
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.33
      },
      {
        "name": "大农业",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 25,
    "hot_rank_chg": 49,
    "stock_cnt": 5825,
    "price": "3.81",
    "change": "10.12",
    "market_id": "17",
    "circulate_market_value": "4973840400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "冰雪旅游保障",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "高速公路",
        "change_pct": 1.03
      },
      {
        "name": "振兴东北",
        "change_pct": -1.06
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 1.17
      }
    ]
  },
  {
    "code": "600637",
    "name": "东方明珠",
    "hot_rank": 27,
    "hot_rank_chg": 45,
    "stock_cnt": 5825,
    "price": "8.08",
    "change": "4.80",
    "market_id": "17",
    "circulate_market_value": "27164151000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -1.77
      },
      {
        "name": "高管增持",
        "change_pct": -1.8
      },
      {
        "name": "超高清视频",
        "change_pct": -2.43
      },
      {
        "name": "电竞",
        "change_pct": -1.42
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.71
      },
      {
        "name": "游戏",
        "change_pct": -2.81
      },
      {
        "name": "物联网",
        "change_pct": -2.41
      },
      {
        "name": "教育",
        "change_pct": -2.12
      },
      {
        "name": "智慧城市",
        "change_pct": -2.16
      },
      {
        "name": "破净股",
        "change_pct": -0.65
      },
      {
        "name": "传媒",
        "change_pct": -1.41
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.18
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "在线教育",
        "change_pct": -2.11
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.12
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.61
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 30,
    "hot_rank_chg": 6,
    "stock_cnt": 5825,
    "price": "11.97",
    "change": "1.53",
    "market_id": "33",
    "circulate_market_value": "6780745100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "石墨烯",
        "change_pct": -2.41
      },
      {
        "name": "军民融合",
        "change_pct": -2.08
      },
      {
        "name": "物联网",
        "change_pct": -2.41
      },
      {
        "name": "LED",
        "change_pct": -1.73
      },
      {
        "name": "军工",
        "change_pct": -1.92
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.72
      },
      {
        "name": "海洋经济",
        "change_pct": -1.73
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 31,
    "hot_rank_chg": 37,
    "stock_cnt": 5825,
    "price": "2.35",
    "change": "-6.75",
    "market_id": "17",
    "circulate_market_value": "6726574800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -2.74
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "游戏",
        "change_pct": -2.81
      },
      {
        "name": "影视",
        "change_pct": -0.58
      },
      {
        "name": "低价股",
        "change_pct": -1.06
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.61
      },
      {
        "name": "AI视频",
        "change_pct": -1.79
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 32,
    "hot_rank_chg": -7,
    "stock_cnt": 5825,
    "price": "12.94",
    "change": "-1.07",
    "market_id": "17",
    "circulate_market_value": "13520849000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.98
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.71
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -1.41
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 34,
    "hot_rank_chg": -2,
    "stock_cnt": 5825,
    "price": "4.44",
    "change": "-6.13",
    "market_id": "33",
    "circulate_market_value": "11777324500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "装修装饰",
        "change_pct": -1.93
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.54
      },
      {
        "name": "破净股",
        "change_pct": -0.65
      },
      {
        "name": "航天",
        "change_pct": -2.26
      },
      {
        "name": "旧改",
        "change_pct": -1.28
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 36,
    "hot_rank_chg": 71,
    "stock_cnt": 5825,
    "price": "9.57",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "8931887800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "风电光伏",
    "xgb_concepts": [
      {
        "name": "新疆国企改革",
        "change_pct": 0.06
      },
      {
        "name": "新疆概念",
        "change_pct": -0.61
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "风电",
        "change_pct": -1.3
      },
      {
        "name": "储能",
        "change_pct": -1.52
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 41,
    "hot_rank_chg": 42,
    "stock_cnt": 5825,
    "price": "11.06",
    "change": "1.19",
    "market_id": "33",
    "circulate_market_value": "3696903600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -1.44
      },
      {
        "name": "饲料",
        "change_pct": -0.69
      },
      {
        "name": "一带一路",
        "change_pct": -1.46
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "保健品",
        "change_pct": -0.94
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.14
      },
      {
        "name": "污水处理",
        "change_pct": -1.33
      },
      {
        "name": "环保",
        "change_pct": -1.2
      },
      {
        "name": "食品",
        "change_pct": -1.24
      },
      {
        "name": "预制菜",
        "change_pct": -1.15
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "水产养殖",
        "change_pct": 0.32
      },
      {
        "name": "广西概念",
        "change_pct": -0.76
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 44,
    "hot_rank_chg": 19,
    "stock_cnt": 5825,
    "price": "5.62",
    "change": "-7.11",
    "market_id": "33",
    "circulate_market_value": "4300090900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.18
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.4
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "医药商业",
        "change_pct": -1.37
      },
      {
        "name": "保健品",
        "change_pct": -0.94
      },
      {
        "name": "民营医院",
        "change_pct": -1.14
      },
      {
        "name": "医药",
        "change_pct": -1.88
      },
      {
        "name": "食品",
        "change_pct": -1.24
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.93
      },
      {
        "name": "口腔",
        "change_pct": -1.06
      },
      {
        "name": "医美",
        "change_pct": -1.63
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.51
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 46,
    "hot_rank_chg": -6,
    "stock_cnt": 5825,
    "price": "8.58",
    "change": "-3.49",
    "market_id": "33",
    "circulate_market_value": "4064176900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -2.74
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "VR&AR",
        "change_pct": -2.76
      },
      {
        "name": "游戏",
        "change_pct": -2.81
      },
      {
        "name": "影视",
        "change_pct": -0.58
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.8
      },
      {
        "name": "动漫",
        "change_pct": -1.57
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.47
      },
      {
        "name": "传媒",
        "change_pct": -1.41
      },
      {
        "name": "元宇宙",
        "change_pct": -1.88
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.61
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "600410",
    "name": "华胜天成",
    "hot_rank": 49,
    "hot_rank_chg": -6,
    "stock_cnt": 5825,
    "price": "12.68",
    "change": "5.32",
    "market_id": "17",
    "circulate_market_value": "13903553000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "应急产业",
        "change_pct": -1.6
      },
      {
        "name": "国产软件",
        "change_pct": -2.47
      },
      {
        "name": "人工智能",
        "change_pct": -2.37
      },
      {
        "name": "网络安全",
        "change_pct": -2.51
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.01
      },
      {
        "name": "军民融合",
        "change_pct": -2.08
      },
      {
        "name": "京津冀",
        "change_pct": -1.37
      },
      {
        "name": "冷链",
        "change_pct": -1.76
      },
      {
        "name": "物联网",
        "change_pct": -2.41
      },
      {
        "name": "大数据",
        "change_pct": -2.26
      },
      {
        "name": "智慧城市",
        "change_pct": -2.16
      },
      {
        "name": "军工",
        "change_pct": -1.92
      },
      {
        "name": "智能制造",
        "change_pct": -2.51
      },
      {
        "name": "工业互联网",
        "change_pct": -2.32
      },
      {
        "name": "数字经济",
        "change_pct": -2.21
      },
      {
        "name": "国产芯片",
        "change_pct": -3.2
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.07
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.47
      },
      {
        "name": "信创",
        "change_pct": -2.6
      },
      {
        "name": "华为昇腾",
        "change_pct": -2.46
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.18
      },
      {
        "name": "数据要素",
        "change_pct": -2.24
      },
      {
        "name": "无线耳机",
        "change_pct": -3.16
      },
      {
        "name": "智慧政务",
        "change_pct": -2.38
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -2.36
      },
      {
        "name": "华为产业链",
        "change_pct": -2.52
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.12
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -2.5
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 50,
    "hot_rank_chg": 47,
    "stock_cnt": 5825,
    "price": "10.45",
    "change": "-9.99",
    "market_id": "17",
    "circulate_market_value": "4189216700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -0.71
      },
      {
        "name": "新零售",
        "change_pct": -1.93
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "物业管理",
        "change_pct": -1.54
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "地摊经济",
        "change_pct": -2.24
      }
    ]
  },
  {
    "code": "600278",
    "name": "东方创业",
    "hot_rank": 51,
    "hot_rank_chg": 160,
    "stock_cnt": 5825,
    "price": "7.12",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "6126892800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“东方”",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.98
      },
      {
        "name": "快递物流",
        "change_pct": -0.88
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.71
      },
      {
        "name": "一带一路",
        "change_pct": -1.46
      },
      {
        "name": "破净股",
        "change_pct": -0.65
      },
      {
        "name": "上海自由贸易港",
        "change_pct": -0.49
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "进口博览会",
        "change_pct": 0.05
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.86
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "自贸区",
        "change_pct": -1.02
      }
    ]
  },
  {
    "code": "002506",
    "name": "协鑫集成",
    "hot_rank": 60,
    "hot_rank_chg": -19,
    "stock_cnt": 5825,
    "price": "2.58",
    "change": "1.57",
    "market_id": "33",
    "circulate_market_value": "15078660000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -1.64
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "储能",
        "change_pct": -1.52
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.33
      },
      {
        "name": "颗粒硅",
        "change_pct": -0.79
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.54
      },
      {
        "name": "低价股",
        "change_pct": -1.06
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.57
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.97
      },
      {
        "name": "华为产业链",
        "change_pct": -2.52
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 68,
    "hot_rank_chg": 175,
    "stock_cnt": 5825,
    "price": "5.38",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "6125971200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "储能并网",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -1.48
      },
      {
        "name": "高铁轨交",
        "change_pct": -1.47
      },
      {
        "name": "航母",
        "change_pct": -0.67
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "风电",
        "change_pct": -1.3
      },
      {
        "name": "军工",
        "change_pct": -1.92
      },
      {
        "name": "储能",
        "change_pct": -1.52
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 69,
    "hot_rank_chg": 26,
    "stock_cnt": 5825,
    "price": "9.58",
    "change": "-2.44",
    "market_id": "33",
    "circulate_market_value": "10154370500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.79
      },
      {
        "name": "电子烟",
        "change_pct": -2.64
      },
      {
        "name": "一带一路",
        "change_pct": -1.46
      },
      {
        "name": "造纸",
        "change_pct": -1.64
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "包装印刷",
        "change_pct": -1.89
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.14
      },
      {
        "name": "太空算力",
        "change_pct": -1.74
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 70,
    "hot_rank_chg": -18,
    "stock_cnt": 5825,
    "price": "8.44",
    "change": "1.08",
    "market_id": "17",
    "circulate_market_value": "2275527100000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.4
      },
      {
        "name": "高股息",
        "change_pct": 0.22
      },
      {
        "name": "银行",
        "change_pct": 0.99
      },
      {
        "name": "白马股",
        "change_pct": -0.49
      },
      {
        "name": "破净股",
        "change_pct": -0.65
      },
      {
        "name": "大金融",
        "change_pct": 0.21
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 72,
    "hot_rank_chg": 30,
    "stock_cnt": 5825,
    "price": "12.71",
    "change": "-9.34",
    "market_id": "17",
    "circulate_market_value": "8464860000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.93
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 73,
    "hot_rank_chg": -27,
    "stock_cnt": 5825,
    "price": "10.08",
    "change": "-0.98",
    "market_id": "17",
    "circulate_market_value": "14844885000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.95
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.76
      },
      {
        "name": "火电",
        "change_pct": 0.76
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.74
      },
      {
        "name": "风电",
        "change_pct": -1.3
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 74,
    "hot_rank_chg": 153,
    "stock_cnt": 5825,
    "price": "4.58",
    "change": "10.10",
    "market_id": "17",
    "circulate_market_value": "2662706500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "棉花全产业链",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 1.37
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.06
      },
      {
        "name": "农垦",
        "change_pct": 0.78
      },
      {
        "name": "棉花",
        "change_pct": 2.03
      },
      {
        "name": "新疆概念",
        "change_pct": -0.61
      },
      {
        "name": "风电",
        "change_pct": -1.3
      },
      {
        "name": "大农业",
        "change_pct": -0.96
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 75,
    "hot_rank_chg": -49,
    "stock_cnt": 5825,
    "price": "4.26",
    "change": "-2.96",
    "market_id": "33",
    "circulate_market_value": "24941435000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -2.37
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.01
      },
      {
        "name": "水利",
        "change_pct": -1.44
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.8
      },
      {
        "name": "大数据",
        "change_pct": -2.26
      },
      {
        "name": "园林",
        "change_pct": -1.84
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.66
      },
      {
        "name": "数字经济",
        "change_pct": -2.21
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.47
      },
      {
        "name": "传媒",
        "change_pct": -1.41
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.52
      },
      {
        "name": "第三代半导体",
        "change_pct": -2.57
      },
      {
        "name": "快手概念股",
        "change_pct": -1.73
      },
      {
        "name": "IGBT",
        "change_pct": -1.93
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.04
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.6
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.07
      },
      {
        "name": "氮化镓",
        "change_pct": -2.64
      },
      {
        "name": "AI营销",
        "change_pct": -2.09
      },
      {
        "name": "华为产业链",
        "change_pct": -2.52
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.12
      },
      {
        "name": "多模态",
        "change_pct": -2.23
      },
      {
        "name": "AI视频",
        "change_pct": -1.79
      },
      {
        "name": "液冷服务器",
        "change_pct": -3.29
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.94
      },
      {
        "name": "区块链",
        "change_pct": -2.03
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 76,
    "hot_rank_chg": -3,
    "stock_cnt": 5825,
    "price": "4.46",
    "change": "-2.83",
    "market_id": "33",
    "circulate_market_value": "157737420000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.83
      },
      {
        "name": "折叠屏",
        "change_pct": -3.3
      },
      {
        "name": "手机产业链",
        "change_pct": -2.92
      },
      {
        "name": "超高清视频",
        "change_pct": -2.43
      },
      {
        "name": "苹果产业链",
        "change_pct": -3.48
      },
      {
        "name": "电竞",
        "change_pct": -1.42
      },
      {
        "name": "半导体",
        "change_pct": -3.31
      },
      {
        "name": "人工智能",
        "change_pct": -2.37
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.89
      },
      {
        "name": "VR&AR",
        "change_pct": -2.76
      },
      {
        "name": "OLED",
        "change_pct": -2.78
      },
      {
        "name": "京津冀",
        "change_pct": -1.37
      },
      {
        "name": "物联网",
        "change_pct": -2.41
      },
      {
        "name": "指纹识别",
        "change_pct": -3.38
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.13
      },
      {
        "name": "白马股",
        "change_pct": -0.49
      },
      {
        "name": "智能制造",
        "change_pct": -2.51
      },
      {
        "name": "小米概念股",
        "change_pct": -2.66
      },
      {
        "name": "国产芯片",
        "change_pct": -3.2
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.84
      },
      {
        "name": "全息概念",
        "change_pct": -1.83
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.52
      },
      {
        "name": "MicroLED",
        "change_pct": -3.14
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.57
      },
      {
        "name": "智能手表",
        "change_pct": -2.2
      },
      {
        "name": "MiniLED",
        "change_pct": -2.97
      },
      {
        "name": "传感器",
        "change_pct": -3.25
      },
      {
        "name": "大硅片",
        "change_pct": -1.0
      },
      {
        "name": "AI PC",
        "change_pct": -3.44
      },
      {
        "name": "华为产业链",
        "change_pct": -2.52
      },
      {
        "name": "回购",
        "change_pct": -2.64
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -5.17
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.03
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.56
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 77,
    "hot_rank_chg": 58,
    "stock_cnt": 5825,
    "price": "6.65",
    "change": "-2.92",
    "market_id": "33",
    "circulate_market_value": "12735364800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.49
      },
      {
        "name": "林业",
        "change_pct": -2.19
      },
      {
        "name": "碳中和",
        "change_pct": -0.93
      },
      {
        "name": "自贸区",
        "change_pct": -1.02
      }
    ]
  },
  {
    "code": "600207",
    "name": "安彩高科",
    "hot_rank": 78,
    "hot_rank_chg": 155,
    "stock_cnt": 5825,
    "price": "4.88",
    "change": "9.91",
    "market_id": "17",
    "circulate_market_value": "5315845300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "光伏玻璃",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -1.79
      },
      {
        "name": "天然气",
        "change_pct": -0.75
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "储能",
        "change_pct": -1.52
      },
      {
        "name": "光热发电",
        "change_pct": -1.18
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.49
      }
    ]
  },
  {
    "code": "600986",
    "name": "浙文互联",
    "hot_rank": 79,
    "hot_rank_chg": 10,
    "stock_cnt": 5825,
    "price": "7.76",
    "change": "1.44",
    "market_id": "17",
    "circulate_market_value": "11542022700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.65
      },
      {
        "name": "电竞",
        "change_pct": -1.42
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -1.64
      },
      {
        "name": "共享经济",
        "change_pct": -1.07
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.65
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.8
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.66
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.07
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.47
      },
      {
        "name": "传媒",
        "change_pct": -1.41
      },
      {
        "name": "快手概念股",
        "change_pct": -1.73
      },
      {
        "name": "NFT",
        "change_pct": -1.38
      },
      {
        "name": "元宇宙",
        "change_pct": -1.88
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.04
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.18
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.6
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.07
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.52
      },
      {
        "name": "AI营销",
        "change_pct": -2.09
      },
      {
        "name": "华为产业链",
        "change_pct": -2.52
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.12
      },
      {
        "name": "小米汽车",
        "change_pct": -2.2
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.61
      },
      {
        "name": "多模态",
        "change_pct": -2.23
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.94
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -2.5
      },
      {
        "name": "区块链",
        "change_pct": -2.03
      }
    ]
  },
  {
    "code": "002712",
    "name": "思美传媒",
    "hot_rank": 80,
    "hot_rank_chg": 218,
    "stock_cnt": 5825,
    "price": "5.96",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "3223765600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI营销",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -2.37
      },
      {
        "name": "影视",
        "change_pct": -0.58
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.8
      },
      {
        "name": "知识产权",
        "change_pct": -1.46
      },
      {
        "name": "百度概念股",
        "change_pct": -2.13
      },
      {
        "name": "传媒",
        "change_pct": -1.41
      },
      {
        "name": "快手概念股",
        "change_pct": -1.73
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.04
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.07
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.52
      },
      {
        "name": "华为产业链",
        "change_pct": -2.52
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.61
      },
      {
        "name": "AI视频",
        "change_pct": -1.79
      },
      {
        "name": "智谱AI",
        "change_pct": -1.57
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.54
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.94
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 82,
    "hot_rank_chg": -28,
    "stock_cnt": 5825,
    "price": "8.53",
    "change": "3.02",
    "market_id": "33",
    "circulate_market_value": "6161149100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -1.69
      },
      {
        "name": "充电桩",
        "change_pct": -2.05
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.49
      },
      {
        "name": "军民融合",
        "change_pct": -2.08
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "风电",
        "change_pct": -1.3
      },
      {
        "name": "军工",
        "change_pct": -1.92
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.11
      },
      {
        "name": "特高压",
        "change_pct": -1.54
      },
      {
        "name": "自贸区",
        "change_pct": -1.02
      },
      {
        "name": "海洋经济",
        "change_pct": -1.73
      }
    ]
  },
  {
    "code": "600229",
    "name": "城市传媒",
    "hot_rank": 84,
    "hot_rank_chg": 223,
    "stock_cnt": 5825,
    "price": "6.42",
    "change": "9.93",
    "market_id": "17",
    "circulate_market_value": "4241744000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AIGC",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -2.37
      },
      {
        "name": "VR&AR",
        "change_pct": -2.76
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.14
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -1.41
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.6
      },
      {
        "name": "数据要素",
        "change_pct": -2.24
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "在线教育",
        "change_pct": -2.11
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 87,
    "hot_rank_chg": 285,
    "stock_cnt": 5825,
    "price": "7.07",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "2842922700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.65
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.01
      },
      {
        "name": "纺织服装",
        "change_pct": -1.11
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.7
      },
      {
        "name": "外贸受益概念",
        "change_pct": -2.51
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.18
      },
      {
        "name": "国企改革",
        "change_pct": -0.93
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.51
      },
      {
        "name": "液冷服务器",
        "change_pct": -3.29
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 89,
    "hot_rank_chg": 41,
    "stock_cnt": 5825,
    "price": "4.63",
    "change": "-9.92",
    "market_id": "17",
    "circulate_market_value": "2589649500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -2.74
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.48
      },
      {
        "name": "强势人气股",
        "change_pct": -1.29
      },
      {
        "name": "游戏",
        "change_pct": -2.81
      },
      {
        "name": "影视",
        "change_pct": -0.58
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.61
      }
    ]
  },
  {
    "code": "601012",
    "name": "隆基绿能",
    "hot_rank": 93,
    "hot_rank_chg": -34,
    "stock_cnt": 5825,
    "price": "12.42",
    "change": "-0.40",
    "market_id": "17",
    "circulate_market_value": "94119534000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.74
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "白马股",
        "change_pct": -0.49
      },
      {
        "name": "碳中和",
        "change_pct": -0.93
      },
      {
        "name": "颗粒硅",
        "change_pct": -0.79
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.54
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.57
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 97,
    "hot_rank_chg": 75,
    "stock_cnt": 5825,
    "price": "5.55",
    "change": "-4.31",
    "market_id": "17",
    "circulate_market_value": "13977730000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.65
      },
      {
        "name": "工业大麻",
        "change_pct": -1.79
      },
      {
        "name": "中药",
        "change_pct": -1.18
      },
      {
        "name": "保健品",
        "change_pct": -0.94
      },
      {
        "name": "民营医院",
        "change_pct": -1.14
      },
      {
        "name": "医药",
        "change_pct": -1.88
      },
      {
        "name": "化学原料药",
        "change_pct": -1.8
      },
      {
        "name": "流感",
        "change_pct": -1.7
      },
      {
        "name": "振兴东北",
        "change_pct": -1.06
      },
      {
        "name": "食品",
        "change_pct": -1.24
      },
      {
        "name": "肝炎概念",
        "change_pct": -1.48
      }
    ]
  },
  {
    "code": "000993",
    "name": "闽东电力",
    "hot_rank": 98,
    "hot_rank_chg": 23,
    "stock_cnt": 5825,
    "price": "12.31",
    "change": "0.65",
    "market_id": "33",
    "circulate_market_value": "5637382400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 0.76
      },
      {
        "name": "水电",
        "change_pct": 0.87
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.49
      },
      {
        "name": "有色 · 钼",
        "change_pct": -3.43
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "风电",
        "change_pct": -1.3
      },
      {
        "name": "有色金属",
        "change_pct": -2.3
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -2.69
      },
      {
        "name": "船舶",
        "change_pct": -0.94
      },
      {
        "name": "自贸区",
        "change_pct": -1.02
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 99,
    "hot_rank_chg": -13,
    "stock_cnt": 5825,
    "price": "8.12",
    "change": "-3.45",
    "market_id": "33",
    "circulate_market_value": "13211189500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.65
      },
      {
        "name": "电竞",
        "change_pct": -1.42
      },
      {
        "name": "手游",
        "change_pct": -2.74
      },
      {
        "name": "人工智能",
        "change_pct": -2.37
      },
      {
        "name": "游戏",
        "change_pct": -2.81
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.21
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.47
      },
      {
        "name": "传媒",
        "change_pct": -1.41
      },
      {
        "name": "快手概念股",
        "change_pct": -1.73
      },
      {
        "name": "元宇宙",
        "change_pct": -1.88
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.04
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.18
      },
      {
        "name": "web3.0",
        "change_pct": -2.43
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.6
      },
      {
        "name": "数据要素",
        "change_pct": -2.24
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.07
      },
      {
        "name": "AI营销",
        "change_pct": -2.09
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.25
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.03
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.12
      },
      {
        "name": "人形机器人",
        "change_pct": -3.1
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.61
      },
      {
        "name": "多模态",
        "change_pct": -2.23
      },
      {
        "name": "AI视频",
        "change_pct": -1.79
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.54
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.94
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002086", "name": "东方海洋", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5825, "price": "3.97", "change": "9.97", "market_id": "33", "circulate_market_value": "6276455900.00", "change_type": "1", "change_section": "13", "change_days": "8", "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.51}, {"name": "体外诊断", "change_pct": -2.01}, {"name": "医疗器械", "change_pct": -1.83}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "基因测序", "change_pct": -1.79}, {"name": "预制菜", "change_pct": -1.15}, {"name": "水产养殖", "change_pct": 0.32}, {"name": "新冠病毒防治", "change_pct": -1.51}, {"name": "海洋经济", "change_pct": -1.73}]}, {"code": "002384", "name": "东山精密", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5825, "price": "80.19", "change": "-10.00", "market_id": "33", "circulate_market_value": "111169139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603366", "name": "日出东方", "hot_rank": 3, "hot_rank_chg": 25, "stock_cnt": 5825, "price": "8.99", "change": "10.04", "market_id": "17", "circulate_market_value": "7309302400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“东方”", "xgb_concepts": [{"name": "光伏", "change_pct": -1.07}, {"name": "家电", "change_pct": -1.55}, {"name": "储能", "change_pct": -1.52}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -2.0}, {"name": "华为鸿蒙", "change_pct": -2.48}, {"name": "厨卫家电", "change_pct": -0.75}, {"name": "华为产业链", "change_pct": -2.52}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5825, "price": "5.40", "change": "9.98", "market_id": "17", "circulate_market_value": "7209286000.00", "change_type": "1", "change_section": "12", "change_days": "7", "change_reason": "商业航天", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.29}, {"name": "LED", "change_pct": -1.73}, {"name": "卫星互联网", "change_pct": -2.14}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5825, "price": "25.10", "change": "3.00", "market_id": "33", "circulate_market_value": "19120317000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002088", "name": "鲁阳节能", "hot_rank": 6, "hot_rank_chg": 17, "stock_cnt": 5825, "price": "11.09", "change": "10.02", "market_id": "33", "circulate_market_value": "5611147800.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "锂电池", "change_pct": -2.45}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "大气治理", "change_pct": -1.82}, {"name": "雄安新区", "change_pct": -1.13}, {"name": "耐火材料", "change_pct": 0.75}, {"name": "新能源汽车", "change_pct": -2.11}, {"name": "环保", "change_pct": -1.2}, {"name": "船舶", "change_pct": -0.94}, {"name": "建筑节能", "change_pct": -1.27}, {"name": "气凝胶", "change_pct": -1.62}, {"name": "旧改", "change_pct": -1.28}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 7, "hot_rank_chg": 7, "stock_cnt": 5825, "price": "5.08", "change": "9.96", "market_id": "17", "circulate_market_value": "5895555700.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.29}, {"name": "纺织服装", "change_pct": -1.11}, {"name": "浙江国企改革", "change_pct": -0.65}, {"name": "影视", "change_pct": -0.58}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -0.93}, {"name": "短剧/互动影游", "change_pct": -1.61}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 8, "hot_rank_chg": 4, "stock_cnt": 5825, "price": "17.77", "change": "-9.98", "market_id": "33", "circulate_market_value": "8167301600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300118", "name": "东方日升", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5825, "price": "10.27", "change": "15.26", "market_id": "33", "circulate_market_value": "9515356100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -1.22}, {"name": "光伏", "change_pct": -1.07}, {"name": "储能", "change_pct": -1.52}, {"name": "BIPV概念", "change_pct": -0.54}, {"name": "钙钛矿电池", "change_pct": -1.57}, {"name": "异质结电池HJT", "change_pct": -0.97}, {"name": "光伏胶膜", "change_pct": -1.75}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 10, "hot_rank_chg": -9, "stock_cnt": 5825, "price": "448.00", "change": "-9.19", "market_id": "33", "circulate_market_value": "497251780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002578", "name": "闽发铝业", "hot_rank": 11, "hot_rank_chg": 11, "stock_cnt": 5825, "price": "5.01", "change": "10.11", "market_id": "33", "circulate_market_value": "4314424400.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "光伏边框", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.76}, {"name": "一带一路", "change_pct": -1.46}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "福建自贸/海西概念", "change_pct": -1.49}, {"name": "光伏", "change_pct": -1.07}, {"name": "有色金属", "change_pct": -2.3}, {"name": "新能源汽车", "change_pct": -2.11}, {"name": "新能源车零部件", "change_pct": -1.92}, {"name": "自贸区", "change_pct": -1.02}, {"name": "液冷服务器", "change_pct": -3.29}]}, {"code": "002310", "name": "东方新能", "hot_rank": 12, "hot_rank_chg": 110, "stock_cnt": 5825, "price": "2.32", "change": "9.95", "market_id": "33", "circulate_market_value": "10205701900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“东方”", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.98}, {"name": "京津冀", "change_pct": -1.37}, {"name": "旅游", "change_pct": -1.42}, {"name": "园林", "change_pct": -1.84}, {"name": "海绵城市", "change_pct": -0.56}, {"name": "固废处理", "change_pct": -0.75}, {"name": "雄安新区", "change_pct": -1.13}, {"name": "北京城市规划", "change_pct": -0.98}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -1.2}, {"name": "碳中和", "change_pct": -0.93}, {"name": "乡村振兴", "change_pct": -0.33}, {"name": "汽车拆解", "change_pct": 0.23}, {"name": "土壤修复", "change_pct": -1.25}, {"name": "核污染防治", "change_pct": -1.79}, {"name": "新型城镇化", "change_pct": -1.17}, {"name": "低价股", "change_pct": -1.06}, {"name": "西部大开发", "change_pct": -1.3}]}, {"code": "600327", "name": "大东方", "hot_rank": 13, "hot_rank_chg": 31, "stock_cnt": 5825, "price": "4.91", "change": "10.09", "market_id": "17", "circulate_market_value": "4344267400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“东方”", "xgb_concepts": [{"name": "新零售", "change_pct": -1.93}, {"name": "优化生育（三孩）", "change_pct": -1.4}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "信托", "change_pct": -0.35}, {"name": "民营医院", "change_pct": -1.14}, {"name": "社区团购", "change_pct": -0.69}, {"name": "大金融", "change_pct": 0.21}, {"name": "餐饮", "change_pct": -1.46}, {"name": "首发经济", "change_pct": -1.14}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 14, "hot_rank_chg": 6, "stock_cnt": 5825, "price": "8.70", "change": "-3.76", "market_id": "33", "circulate_market_value": "5221015500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.52}, {"name": "边缘计算", "change_pct": -2.43}, {"name": "核电", "change_pct": -1.69}, {"name": "海工装备", "change_pct": -1.93}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "云计算数据中心", "change_pct": -3.01}, {"name": "冷链", "change_pct": -1.76}, {"name": "地热", "change_pct": -2.72}, {"name": "储能", "change_pct": -1.52}, {"name": "碳中和", "change_pct": -0.93}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -1.49}, {"name": "汽车热管理", "change_pct": -1.99}, {"name": "热泵", "change_pct": -2.0}, {"name": "液冷服务器", "change_pct": -3.29}, {"name": "蜜雪冰城概念股", "change_pct": -1.68}, {"name": "海洋经济", "change_pct": -1.73}]}, {"code": "600127", "name": "金健米业", "hot_rank": 15, "hot_rank_chg": -5, "stock_cnt": 5825, "price": "11.19", "change": "6.88", "market_id": "17", "circulate_market_value": "7181554200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -2.37}, {"name": "农业种植", "change_pct": 1.37}, {"name": "湖南国企改革", "change_pct": -0.7}, {"name": "乡村振兴", "change_pct": -0.33}, {"name": "休闲食品", "change_pct": -1.66}, {"name": "食品", "change_pct": -1.24}, {"name": "食品安全", "change_pct": -2.09}, {"name": "社区团购", "change_pct": -0.69}, {"name": "大农业", "change_pct": -0.96}, {"name": "预制菜", "change_pct": -1.15}, {"name": "人造肉", "change_pct": -0.76}, {"name": "国企改革", "change_pct": -0.93}]}, {"code": "601566", "name": "九牧王", "hot_rank": 16, "hot_rank_chg": 61, "stock_cnt": 5825, "price": "11.31", "change": "2.17", "market_id": "17", "circulate_market_value": "6499146200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -1.11}, {"name": "福建自贸/海西概念", "change_pct": -1.49}, {"name": "自贸区", "change_pct": -1.02}, {"name": "IP经济/谷子经济", "change_pct": -1.54}]}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 17, "hot_rank_chg": 39, "stock_cnt": 5825, "price": "14.91", "change": "10.04", "market_id": "33", "circulate_market_value": "3746652700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“东方”"}, {"code": "002029", "name": "七匹狼", "hot_rank": 18, "hot_rank_chg": 24, "stock_cnt": 5825, "price": "8.90", "change": "0.45", "market_id": "33", "circulate_market_value": "5922113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.29}, {"name": "纺织服装", "change_pct": -1.11}, {"name": "破净股", "change_pct": -0.65}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "000525", "name": "红太阳", "hot_rank": 19, "hot_rank_chg": 79, "stock_cnt": 5825, "price": "5.02", "change": "10.09", "market_id": "33", "circulate_market_value": "5581035200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.29}, {"name": "草铵膦", "change_pct": 0.45}, {"name": "农药", "change_pct": -1.01}, {"name": "长寿药NMN", "change_pct": -0.89}, {"name": "大农业", "change_pct": -0.96}, {"name": "虫害防治", "change_pct": -0.43}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 20, "hot_rank_chg": -14, "stock_cnt": 5825, "price": "34.83", "change": "6.25", "market_id": "33", "circulate_market_value": "35585810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002388", "name": "新亚制程", "hot_rank": 21, "hot_rank_chg": 61, "stock_cnt": 5825, "price": "6.67", "change": "10.07", "market_id": "33", "circulate_market_value": "3376510700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "电解液", "xgb_concepts": [{"name": "电子特气", "change_pct": -1.8}, {"name": "资产重组", "change_pct": -1.98}, {"name": "仪器仪表", "change_pct": -2.55}, {"name": "锂电池", "change_pct": -2.45}, {"name": "ST摘帽", "change_pct": -1.48}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "有机硅", "change_pct": -0.87}, {"name": "新能源汽车", "change_pct": -2.11}, {"name": "华为产业链", "change_pct": -2.52}, {"name": "供应链金融", "change_pct": -0.7}, {"name": "服务器", "change_pct": -3.31}]}, {"code": "002929", "name": "润建股份", "hot_rank": 22, "hot_rank_chg": 5, "stock_cnt": 5825, "price": "63.11", "change": "10.01", "market_id": "33", "circulate_market_value": "13671392000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "词元出海"}, {"code": "603381", "name": "永臻股份", "hot_rank": 23, "hot_rank_chg": 32, "stock_cnt": 5825, "price": "20.74", "change": "10.03", "market_id": "17", "circulate_market_value": "2947935600.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "光伏"}, {"code": "600371", "name": "万向德农", "hot_rank": 24, "hot_rank_chg": 15, "stock_cnt": 5825, "price": "12.39", "change": "10.04", "market_id": "17", "circulate_market_value": "3625041400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "玉米种业", "xgb_concepts": [{"name": "农业种植", "change_pct": 1.37}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "转基因", "change_pct": 2.31}, {"name": "乡村振兴", "change_pct": -0.33}, {"name": "大农业", "change_pct": -0.96}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 25, "hot_rank_chg": 49, "stock_cnt": 5825, "price": "3.81", "change": "10.12", "market_id": "17", "circulate_market_value": "4973840400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪旅游保障", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.29}, {"name": "高速公路", "change_pct": 1.03}, {"name": "振兴东北", "change_pct": -1.06}, {"name": "黑龙江自贸区", "change_pct": 1.17}]}, {"code": "603278", "name": "大业股份", "hot_rank": 26, "hot_rank_chg": 22, "stock_cnt": 5825, "price": "13.57", "change": "-10.01", "market_id": "17", "circulate_market_value": "4637674900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600637", "name": "东方明珠", "hot_rank": 27, "hot_rank_chg": 45, "stock_cnt": 5825, "price": "8.08", "change": "4.80", "market_id": "17", "circulate_market_value": "27164151000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -1.77}, {"name": "高管增持", "change_pct": -1.8}, {"name": "超高清视频", "change_pct": -2.43}, {"name": "电竞", "change_pct": -1.42}, {"name": "上海国企改革", "change_pct": -0.71}, {"name": "游戏", "change_pct": -2.81}, {"name": "物联网", "change_pct": -2.41}, {"name": "教育", "change_pct": -2.12}, {"name": "智慧城市", "change_pct": -2.16}, {"name": "破净股", "change_pct": -0.65}, {"name": "传媒", "change_pct": -1.41}, {"name": "东数西算/算力", "change_pct": -2.18}, {"name": "国企改革", "change_pct": -0.93}, {"name": "在线教育", "change_pct": -2.11}, {"name": "AI大模型/智能体", "change_pct": -2.12}, {"name": "短剧/互动影游", "change_pct": -1.61}]}, {"code": "300502", "name": "新易盛", "hot_rank": 28, "hot_rank_chg": -24, "stock_cnt": 5825, "price": "172.10", "change": "-7.28", "market_id": "33", "circulate_market_value": "215937960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 29, "hot_rank_chg": -12, "stock_cnt": 5825, "price": "16.43", "change": "-8.72", "market_id": "33", "circulate_market_value": "2914813400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 30, "hot_rank_chg": 6, "stock_cnt": 5825, "price": "11.97", "change": "1.53", "market_id": "33", "circulate_market_value": "6780745100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.29}, {"name": "石墨烯", "change_pct": -2.41}, {"name": "军民融合", "change_pct": -2.08}, {"name": "物联网", "change_pct": -2.41}, {"name": "LED", "change_pct": -1.73}, {"name": "军工", "change_pct": -1.92}, {"name": "智慧灯杆", "change_pct": -1.72}, {"name": "海洋经济", "change_pct": -1.73}]}, {"code": "600715", "name": "文投控股", "hot_rank": 31, "hot_rank_chg": 37, "stock_cnt": 5825, "price": "2.35", "change": "-6.75", "market_id": "17", "circulate_market_value": "6726574800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.74}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "游戏", "change_pct": -2.81}, {"name": "影视", "change_pct": -0.58}, {"name": "低价股", "change_pct": -1.06}, {"name": "国企改革", "change_pct": -0.93}, {"name": "短剧/互动影游", "change_pct": -1.61}, {"name": "AI视频", "change_pct": -1.79}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 32, "hot_rank_chg": -7, "stock_cnt": 5825, "price": "12.94", "change": "-1.07", "market_id": "17", "circulate_market_value": "13520849000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.98}, {"name": "上海国企改革", "change_pct": -0.71}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -1.41}, {"name": "国企改革", "change_pct": -0.93}]}, {"code": "002611", "name": "东方精工", "hot_rank": 33, "hot_rank_chg": 67, "stock_cnt": 5825, "price": "13.91", "change": "3.96", "market_id": "33", "circulate_market_value": "13965117000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 34, "hot_rank_chg": -2, "stock_cnt": 5825, "price": "4.44", "change": "-6.13", "market_id": "33", "circulate_market_value": "11777324500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.29}, {"name": "装修装饰", "change_pct": -1.93}, {"name": "装配式建筑", "change_pct": -1.54}, {"name": "破净股", "change_pct": -0.65}, {"name": "航天", "change_pct": -2.26}, {"name": "旧改", "change_pct": -1.28}]}, {"code": "600206", "name": "有研新材", "hot_rank": 35, "hot_rank_chg": -22, "stock_cnt": 5825, "price": "38.29", "change": "-0.26", "market_id": "17", "circulate_market_value": "32414527000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 36, "hot_rank_chg": 71, "stock_cnt": 5825, "price": "9.57", "change": "10.00", "market_id": "33", "circulate_market_value": "8931887800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "风电光伏", "xgb_concepts": [{"name": "新疆国企改革", "change_pct": 0.06}, {"name": "新疆概念", "change_pct": -0.61}, {"name": "光伏", "change_pct": -1.07}, {"name": "风电", "change_pct": -1.3}, {"name": "储能", "change_pct": -1.52}, {"name": "国企改革", "change_pct": -0.93}]}, {"code": "301697", "name": "贝特利", "hot_rank": 37, "hot_rank_chg": -2, "stock_cnt": 5825, "price": "36.60", "change": "20.00", "market_id": "33", "circulate_market_value": "1610071800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光伏银粉"}, {"code": "688836", "name": "宇树科技", "hot_rank": 38, "hot_rank_chg": -22, "stock_cnt": 5825, "price": "656.62", "change": "-4.00", "market_id": "17", "circulate_market_value": "19756199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 39, "hot_rank_chg": 25, "stock_cnt": 5825, "price": "22.49", "change": "-3.19", "market_id": "33", "circulate_market_value": "4277541800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 40, "hot_rank_chg": -31, "stock_cnt": 5825, "price": "40.41", "change": "-4.99", "market_id": "17", "circulate_market_value": "181967800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 41, "hot_rank_chg": 42, "stock_cnt": 5825, "price": "11.06", "change": "1.19", "market_id": "33", "circulate_market_value": "3696903600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.44}, {"name": "饲料", "change_pct": -0.69}, {"name": "一带一路", "change_pct": -1.46}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "保健品", "change_pct": -0.94}, {"name": "山东国企改革", "change_pct": -1.14}, {"name": "污水处理", "change_pct": -1.33}, {"name": "环保", "change_pct": -1.2}, {"name": "食品", "change_pct": -1.24}, {"name": "预制菜", "change_pct": -1.15}, {"name": "国企改革", "change_pct": -0.93}, {"name": "水产养殖", "change_pct": 0.32}, {"name": "广西概念", "change_pct": -0.76}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 42, "hot_rank_chg": -23, "stock_cnt": 5825, "price": "239.49", "change": "-8.99", "market_id": "17", "circulate_market_value": "160630330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 43, "hot_rank_chg": -25, "stock_cnt": 5825, "price": "65.95", "change": "0.11", "market_id": "33", "circulate_market_value": "47829351000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 44, "hot_rank_chg": 19, "stock_cnt": 5825, "price": "5.62", "change": "-7.11", "market_id": "33", "circulate_market_value": "4300090900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.18}, {"name": "优化生育（三孩）", "change_pct": -1.4}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "医药商业", "change_pct": -1.37}, {"name": "保健品", "change_pct": -0.94}, {"name": "民营医院", "change_pct": -1.14}, {"name": "医药", "change_pct": -1.88}, {"name": "食品", "change_pct": -1.24}, {"name": "辅助生殖", "change_pct": -1.93}, {"name": "口腔", "change_pct": -1.06}, {"name": "医美", "change_pct": -1.63}, {"name": "新冠病毒防治", "change_pct": -1.51}]}, {"code": "002275", "name": "桂林三金", "hot_rank": 45, "hot_rank_chg": 12, "stock_cnt": 5825, "price": "18.20", "change": "3.65", "market_id": "33", "circulate_market_value": "10278473800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 46, "hot_rank_chg": -6, "stock_cnt": 5825, "price": "8.58", "change": "-3.49", "market_id": "33", "circulate_market_value": "4064176900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.74}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "VR&AR", "change_pct": -2.76}, {"name": "游戏", "change_pct": -2.81}, {"name": "影视", "change_pct": -0.58}, {"name": "直播/短视频", "change_pct": -1.8}, {"name": "动漫", "change_pct": -1.57}, {"name": "腾讯概念股", "change_pct": -2.47}, {"name": "传媒", "change_pct": -1.41}, {"name": "元宇宙", "change_pct": -1.88}, {"name": "短剧/互动影游", "change_pct": -1.61}, {"name": "IP经济/谷子经济", "change_pct": -1.54}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 47, "hot_rank_chg": -23, "stock_cnt": 5825, "price": "72.43", "change": "-8.32", "market_id": "33", "circulate_market_value": "47297333000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601595", "name": "上海电影", "hot_rank": 48, "hot_rank_chg": 48, "stock_cnt": 5825, "price": "35.76", "change": "10.00", "market_id": "17", "circulate_market_value": "16027632000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI影视"}, {"code": "600410", "name": "华胜天成", "hot_rank": 49, "hot_rank_chg": -6, "stock_cnt": 5825, "price": "12.68", "change": "5.32", "market_id": "17", "circulate_market_value": "13903553000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "应急产业", "change_pct": -1.6}, {"name": "国产软件", "change_pct": -2.47}, {"name": "人工智能", "change_pct": -2.37}, {"name": "网络安全", "change_pct": -2.51}, {"name": "云计算数据中心", "change_pct": -3.01}, {"name": "军民融合", "change_pct": -2.08}, {"name": "京津冀", "change_pct": -1.37}, {"name": "冷链", "change_pct": -1.76}, {"name": "物联网", "change_pct": -2.41}, {"name": "大数据", "change_pct": -2.26}, {"name": "智慧城市", "change_pct": -2.16}, {"name": "军工", "change_pct": -1.92}, {"name": "智能制造", "change_pct": -2.51}, {"name": "工业互联网", "change_pct": -2.32}, {"name": "数字经济", "change_pct": -2.21}, {"name": "国产芯片", "change_pct": -3.2}, {"name": "阿里巴巴概念股", "change_pct": -2.07}, {"name": "腾讯概念股", "change_pct": -2.47}, {"name": "信创", "change_pct": -2.6}, {"name": "华为昇腾", "change_pct": -2.46}, {"name": "东数西算/算力", "change_pct": -2.18}, {"name": "数据要素", "change_pct": -2.24}, {"name": "无线耳机", "change_pct": -3.16}, {"name": "智慧政务", "change_pct": -2.38}, {"name": "华为云·鲲鹏", "change_pct": -2.36}, {"name": "华为产业链", "change_pct": -2.52}, {"name": "AI大模型/智能体", "change_pct": -2.12}, {"name": "DeepSeek概念股", "change_pct": -2.5}]}, {"code": "600838", "name": "上海九百", "hot_rank": 50, "hot_rank_chg": 47, "stock_cnt": 5825, "price": "10.45", "change": "-9.99", "market_id": "17", "circulate_market_value": "4189216700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -0.71}, {"name": "新零售", "change_pct": -1.93}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "物业管理", "change_pct": -1.54}, {"name": "国企改革", "change_pct": -0.93}, {"name": "地摊经济", "change_pct": -2.24}]}, {"code": "600278", "name": "东方创业", "hot_rank": 51, "hot_rank_chg": 160, "stock_cnt": 5825, "price": "7.12", "change": "10.05", "market_id": "17", "circulate_market_value": "6126892800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“东方”", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.98}, {"name": "快递物流", "change_pct": -0.88}, {"name": "上海国企改革", "change_pct": -0.71}, {"name": "一带一路", "change_pct": -1.46}, {"name": "破净股", "change_pct": -0.65}, {"name": "上海自由贸易港", "change_pct": -0.49}, {"name": "独角兽", "change_pct": 0.85}, {"name": "进口博览会", "change_pct": 0.05}, {"name": "自由贸易港", "change_pct": -0.86}, {"name": "国企改革", "change_pct": -0.93}, {"name": "自贸区", "change_pct": -1.02}]}, {"code": "002149", "name": "西部材料", "hot_rank": 52, "hot_rank_chg": 28, "stock_cnt": 5825, "price": "37.74", "change": "3.54", "market_id": "33", "circulate_market_value": "18422371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 53, "hot_rank_chg": -42, "stock_cnt": 5825, "price": "81.97", "change": "-3.72", "market_id": "33", "circulate_market_value": "130124068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 54, "hot_rank_chg": -21, "stock_cnt": 5825, "price": "40.71", "change": "-8.08", "market_id": "17", "circulate_market_value": "807853000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001381", "name": "皇冠新材", "hot_rank": 55, "hot_rank_chg": -18, "stock_cnt": 5825, "price": "47.33", "change": "-17.11", "market_id": "33", "circulate_market_value": "2087122400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 56, "hot_rank_chg": 165, "stock_cnt": 5825, "price": "44.55", "change": "-4.30", "market_id": "17", "circulate_market_value": "27964780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 57, "hot_rank_chg": -6, "stock_cnt": 5825, "price": "185.95", "change": "-7.39", "market_id": "33", "circulate_market_value": "43218143000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 58, "hot_rank_chg": 12, "stock_cnt": 5825, "price": "28.28", "change": "-4.07", "market_id": "17", "circulate_market_value": "582618710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002865", "name": "钧达股份", "hot_rank": 59, "hot_rank_chg": -29, "stock_cnt": 5825, "price": "44.59", "change": "2.11", "market_id": "33", "circulate_market_value": "10203148500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002506", "name": "协鑫集成", "hot_rank": 60, "hot_rank_chg": -19, "stock_cnt": 5825, "price": "2.58", "change": "1.57", "market_id": "33", "circulate_market_value": "15078660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": -1.64}, {"name": "光伏", "change_pct": -1.07}, {"name": "储能", "change_pct": -1.52}, {"name": "乡村振兴", "change_pct": -0.33}, {"name": "颗粒硅", "change_pct": -0.79}, {"name": "BIPV概念", "change_pct": -0.54}, {"name": "低价股", "change_pct": -1.06}, {"name": "钙钛矿电池", "change_pct": -1.57}, {"name": "异质结电池HJT", "change_pct": -0.97}, {"name": "华为产业链", "change_pct": -2.52}]}, {"code": "600900", "name": "长江电力", "hot_rank": 61, "hot_rank_chg": 31, "stock_cnt": 5825, "price": "29.91", "change": "2.15", "market_id": "17", "circulate_market_value": "731844390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 62, "hot_rank_chg": 77, "stock_cnt": 5825, "price": "13.29", "change": "-5.14", "market_id": "17", "circulate_market_value": "232054590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 63, "hot_rank_chg": -29, "stock_cnt": 5825, "price": "18.78", "change": "-1.05", "market_id": "33", "circulate_market_value": "253709830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 64, "hot_rank_chg": -49, "stock_cnt": 5825, "price": "254.22", "change": "-3.73", "market_id": "33", "circulate_market_value": "1083134070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600875", "name": "东方电气", "hot_rank": 65, "hot_rank_chg": 25, "stock_cnt": 5825, "price": "22.69", "change": "-1.73", "market_id": "17", "circulate_market_value": "51355788000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 66, "hot_rank_chg": -35, "stock_cnt": 5825, "price": "40.90", "change": "-6.43", "market_id": "17", "circulate_market_value": "100354132000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 67, "hot_rank_chg": -20, "stock_cnt": 5825, "price": "31.40", "change": "1.23", "market_id": "17", "circulate_market_value": "29221779000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000595", "name": "新能股份", "hot_rank": 68, "hot_rank_chg": 175, "stock_cnt": 5825, "price": "5.38", "change": "10.02", "market_id": "33", "circulate_market_value": "6125971200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "储能并网", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -1.48}, {"name": "高铁轨交", "change_pct": -1.47}, {"name": "航母", "change_pct": -0.67}, {"name": "光伏", "change_pct": -1.07}, {"name": "风电", "change_pct": -1.3}, {"name": "军工", "change_pct": -1.92}, {"name": "储能", "change_pct": -1.52}, {"name": "国企改革", "change_pct": -0.93}, {"name": "宁夏概念", "change_pct": 0.01}]}, {"code": "002565", "name": "顺灏股份", "hot_rank": 69, "hot_rank_chg": 26, "stock_cnt": 5825, "price": "9.58", "change": "-2.44", "market_id": "33", "circulate_market_value": "10154370500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.79}, {"name": "电子烟", "change_pct": -2.64}, {"name": "一带一路", "change_pct": -1.46}, {"name": "造纸", "change_pct": -1.64}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "包装印刷", "change_pct": -1.89}, {"name": "卫星互联网", "change_pct": -2.14}, {"name": "太空算力", "change_pct": -1.74}]}, {"code": "601398", "name": "工商银行", "hot_rank": 70, "hot_rank_chg": -18, "stock_cnt": 5825, "price": "8.44", "change": "1.08", "market_id": "17", "circulate_market_value": "2275527100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.4}, {"name": "高股息", "change_pct": 0.22}, {"name": "银行", "change_pct": 0.99}, {"name": "白马股", "change_pct": -0.49}, {"name": "破净股", "change_pct": -0.65}, {"name": "大金融", "change_pct": 0.21}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 71, "hot_rank_chg": 35, "stock_cnt": 5825, "price": "15.52", "change": "-7.62", "market_id": "17", "circulate_market_value": "6897777800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 72, "hot_rank_chg": 30, "stock_cnt": 5825, "price": "12.71", "change": "-9.34", "market_id": "17", "circulate_market_value": "8464860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -1.93}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 73, "hot_rank_chg": -27, "stock_cnt": 5825, "price": "10.08", "change": "-0.98", "market_id": "17", "circulate_market_value": "14844885000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.95}, {"name": "电力体制改革", "change_pct": 0.76}, {"name": "火电", "change_pct": 0.76}, {"name": "氢能源/燃料电池", "change_pct": -1.74}, {"name": "风电", "change_pct": -1.3}, {"name": "国企改革", "change_pct": -0.93}]}, {"code": "600540", "name": "新赛股份", "hot_rank": 74, "hot_rank_chg": 153, "stock_cnt": 5825, "price": "4.58", "change": "10.10", "market_id": "17", "circulate_market_value": "2662706500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "棉花全产业链", "xgb_concepts": [{"name": "农业种植", "change_pct": 1.37}, {"name": "新疆国企改革", "change_pct": 0.06}, {"name": "农垦", "change_pct": 0.78}, {"name": "棉花", "change_pct": 2.03}, {"name": "新疆概念", "change_pct": -0.61}, {"name": "风电", "change_pct": -1.3}, {"name": "大农业", "change_pct": -0.96}, {"name": "国企改革", "change_pct": -0.93}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 75, "hot_rank_chg": -49, "stock_cnt": 5825, "price": "4.26", "change": "-2.96", "market_id": "33", "circulate_market_value": "24941435000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -2.37}, {"name": "云计算数据中心", "change_pct": -3.01}, {"name": "水利", "change_pct": -1.44}, {"name": "直播/短视频", "change_pct": -1.8}, {"name": "大数据", "change_pct": -2.26}, {"name": "园林", "change_pct": -1.84}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.66}, {"name": "数字经济", "change_pct": -2.21}, {"name": "腾讯概念股", "change_pct": -2.47}, {"name": "传媒", "change_pct": -1.41}, {"name": "理想汽车概念股", "change_pct": -2.52}, {"name": "第三代半导体", "change_pct": -2.57}, {"name": "快手概念股", "change_pct": -1.73}, {"name": "IGBT", "change_pct": -1.93}, {"name": "虚拟数字人", "change_pct": -2.04}, {"name": "AIGC概念", "change_pct": -1.6}, {"name": "字节跳动概念股", "change_pct": -2.07}, {"name": "氮化镓", "change_pct": -2.64}, {"name": "AI营销", "change_pct": -2.09}, {"name": "华为产业链", "change_pct": -2.52}, {"name": "AI大模型/智能体", "change_pct": -2.12}, {"name": "多模态", "change_pct": -2.23}, {"name": "AI视频", "change_pct": -1.79}, {"name": "液冷服务器", "change_pct": -3.29}, {"name": "小红书概念股", "change_pct": -1.94}, {"name": "区块链", "change_pct": -2.03}]}, {"code": "000725", "name": "京东方A", "hot_rank": 76, "hot_rank_chg": -3, "stock_cnt": 5825, "price": "4.46", "change": "-2.83", "market_id": "33", "circulate_market_value": "157737420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.83}, {"name": "折叠屏", "change_pct": -3.3}, {"name": "手机产业链", "change_pct": -2.92}, {"name": "超高清视频", "change_pct": -2.43}, {"name": "苹果产业链", "change_pct": -3.48}, {"name": "电竞", "change_pct": -1.42}, {"name": "半导体", "change_pct": -3.31}, {"name": "人工智能", "change_pct": -2.37}, {"name": "互联网医疗", "change_pct": -1.89}, {"name": "VR&AR", "change_pct": -2.76}, {"name": "OLED", "change_pct": -2.78}, {"name": "京津冀", "change_pct": -1.37}, {"name": "物联网", "change_pct": -2.41}, {"name": "指纹识别", "change_pct": -3.38}, {"name": "汽车零部件", "change_pct": -2.13}, {"name": "白马股", "change_pct": -0.49}, {"name": "智能制造", "change_pct": -2.51}, {"name": "小米概念股", "change_pct": -2.66}, {"name": "国产芯片", "change_pct": -3.2}, {"name": "液晶面板/LCD", "change_pct": -2.84}, {"name": "全息概念", "change_pct": -1.83}, {"name": "理想汽车概念股", "change_pct": -2.52}, {"name": "MicroLED", "change_pct": -3.14}, {"name": "钙钛矿电池", "change_pct": -1.57}, {"name": "智能手表", "change_pct": -2.2}, {"name": "MiniLED", "change_pct": -2.97}, {"name": "传感器", "change_pct": -3.25}, {"name": "大硅片", "change_pct": -1.0}, {"name": "AI PC", "change_pct": -3.44}, {"name": "华为产业链", "change_pct": -2.52}, {"name": "回购", "change_pct": -2.64}, {"name": "光电共封装CPO", "change_pct": -5.17}, {"name": "智能眼镜/MR头显", "change_pct": -3.03}, {"name": "玻璃基板封装", "change_pct": -3.56}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 77, "hot_rank_chg": 58, "stock_cnt": 5825, "price": "6.65", "change": "-2.92", "market_id": "33", "circulate_market_value": "12735364800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -1.49}, {"name": "林业", "change_pct": -2.19}, {"name": "碳中和", "change_pct": -0.93}, {"name": "自贸区", "change_pct": -1.02}]}, {"code": "600207", "name": "安彩高科", "hot_rank": 78, "hot_rank_chg": 155, "stock_cnt": 5825, "price": "4.88", "change": "9.91", "market_id": "17", "circulate_market_value": "5315845300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光伏玻璃", "xgb_concepts": [{"name": "玻璃", "change_pct": -1.79}, {"name": "天然气", "change_pct": -0.75}, {"name": "光伏", "change_pct": -1.07}, {"name": "储能", "change_pct": -1.52}, {"name": "光热发电", "change_pct": -1.18}, {"name": "国企改革", "change_pct": -0.93}, {"name": "河南国企改革", "change_pct": -0.49}]}, {"code": "600986", "name": "浙文互联", "hot_rank": 79, "hot_rank_chg": 10, "stock_cnt": 5825, "price": "7.76", "change": "1.44", "market_id": "17", "circulate_market_value": "11542022700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.65}, {"name": "电竞", "change_pct": -1.42}, {"name": "蚂蚁集团概念股", "change_pct": -1.64}, {"name": "共享经济", "change_pct": -1.07}, {"name": "浙江国企改革", "change_pct": -0.65}, {"name": "直播/短视频", "change_pct": -1.8}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.66}, {"name": "阿里巴巴概念股", "change_pct": -2.07}, {"name": "腾讯概念股", "change_pct": -2.47}, {"name": "传媒", "change_pct": -1.41}, {"name": "快手概念股", "change_pct": -1.73}, {"name": "NFT", "change_pct": -1.38}, {"name": "元宇宙", "change_pct": -1.88}, {"name": "虚拟数字人", "change_pct": -2.04}, {"name": "东数西算/算力", "change_pct": -2.18}, {"name": "AIGC概念", "change_pct": -1.6}, {"name": "字节跳动概念股", "change_pct": -2.07}, {"name": "国企改革", "change_pct": -0.93}, {"name": "网红/MCN", "change_pct": -1.52}, {"name": "AI营销", "change_pct": -2.09}, {"name": "华为产业链", "change_pct": -2.52}, {"name": "AI大模型/智能体", "change_pct": -2.12}, {"name": "小米汽车", "change_pct": -2.2}, {"name": "短剧/互动影游", "change_pct": -1.61}, {"name": "多模态", "change_pct": -2.23}, {"name": "小红书概念股", "change_pct": -1.94}, {"name": "DeepSeek概念股", "change_pct": -2.5}, {"name": "区块链", "change_pct": -2.03}]}, {"code": "002712", "name": "思美传媒", "hot_rank": 80, "hot_rank_chg": 218, "stock_cnt": 5825, "price": "5.96", "change": "9.96", "market_id": "33", "circulate_market_value": "3223765600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI营销", "xgb_concepts": [{"name": "人工智能", "change_pct": -2.37}, {"name": "影视", "change_pct": -0.58}, {"name": "直播/短视频", "change_pct": -1.8}, {"name": "知识产权", "change_pct": -1.46}, {"name": "百度概念股", "change_pct": -2.13}, {"name": "传媒", "change_pct": -1.41}, {"name": "快手概念股", "change_pct": -1.73}, {"name": "虚拟数字人", "change_pct": -2.04}, {"name": "字节跳动概念股", "change_pct": -2.07}, {"name": "网红/MCN", "change_pct": -1.52}, {"name": "华为产业链", "change_pct": -2.52}, {"name": "短剧/互动影游", "change_pct": -1.61}, {"name": "AI视频", "change_pct": -1.79}, {"name": "智谱AI", "change_pct": -1.57}, {"name": "IP经济/谷子经济", "change_pct": -1.54}, {"name": "小红书概念股", "change_pct": -1.94}]}, {"code": "600183", "name": "生益科技", "hot_rank": 81, "hot_rank_chg": -31, "stock_cnt": 5825, "price": "70.49", "change": "-9.37", "market_id": "17", "circulate_market_value": "170004180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002300", "name": "太阳电缆", "hot_rank": 82, "hot_rank_chg": -28, "stock_cnt": 5825, "price": "8.53", "change": "3.02", "market_id": "33", "circulate_market_value": "6161149100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": -1.69}, {"name": "充电桩", "change_pct": -2.05}, {"name": "福建自贸/海西概念", "change_pct": -1.49}, {"name": "军民融合", "change_pct": -2.08}, {"name": "光伏", "change_pct": -1.07}, {"name": "风电", "change_pct": -1.3}, {"name": "军工", "change_pct": -1.92}, {"name": "新能源汽车", "change_pct": -2.11}, {"name": "特高压", "change_pct": -1.54}, {"name": "自贸区", "change_pct": -1.02}, {"name": "海洋经济", "change_pct": -1.73}]}, {"code": "603606", "name": "东方电缆", "hot_rank": 83, "hot_rank_chg": 48, "stock_cnt": 5825, "price": "40.06", "change": "-2.29", "market_id": "17", "circulate_market_value": "33041828000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600229", "name": "城市传媒", "hot_rank": 84, "hot_rank_chg": 223, "stock_cnt": 5825, "price": "6.42", "change": "9.93", "market_id": "17", "circulate_market_value": "4241744000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AIGC", "xgb_concepts": [{"name": "人工智能", "change_pct": -2.37}, {"name": "VR&AR", "change_pct": -2.76}, {"name": "山东国企改革", "change_pct": -1.14}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -1.41}, {"name": "AIGC概念", "change_pct": -1.6}, {"name": "数据要素", "change_pct": -2.24}, {"name": "国企改革", "change_pct": -0.93}, {"name": "在线教育", "change_pct": -2.11}, {"name": "IP经济/谷子经济", "change_pct": -1.54}]}, {"code": "002185", "name": "华天科技", "hot_rank": 85, "hot_rank_chg": -32, "stock_cnt": 5825, "price": "14.40", "change": "-4.32", "market_id": "33", "circulate_market_value": "47952979000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 86, "hot_rank_chg": -5, "stock_cnt": 5825, "price": "18.11", "change": "-5.82", "market_id": "33", "circulate_market_value": "8191855700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600156", "name": "华升股份", "hot_rank": 87, "hot_rank_chg": 285, "stock_cnt": 5825, "price": "7.07", "change": "9.95", "market_id": "17", "circulate_market_value": "2842922700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.65}, {"name": "云计算数据中心", "change_pct": -3.01}, {"name": "纺织服装", "change_pct": -1.11}, {"name": "湖南国企改革", "change_pct": -0.7}, {"name": "外贸受益概念", "change_pct": -2.51}, {"name": "东数西算/算力", "change_pct": -2.18}, {"name": "国企改革", "change_pct": -0.93}, {"name": "新冠病毒防治", "change_pct": -1.51}, {"name": "液冷服务器", "change_pct": -3.29}]}, {"code": "605339", "name": "南侨食品", "hot_rank": 88, "hot_rank_chg": 179, "stock_cnt": 5825, "price": "15.80", "change": "10.03", "market_id": "17", "circulate_market_value": "6703791700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "烘焙油脂"}, {"code": "600892", "name": "大晟文化", "hot_rank": 89, "hot_rank_chg": 41, "stock_cnt": 5825, "price": "4.63", "change": "-9.92", "market_id": "17", "circulate_market_value": "2589649500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.74}, {"name": "ST摘帽", "change_pct": -1.48}, {"name": "强势人气股", "change_pct": -1.29}, {"name": "游戏", "change_pct": -2.81}, {"name": "影视", "change_pct": -0.58}, {"name": "短剧/互动影游", "change_pct": -1.61}]}, {"code": "603657", "name": "春光科技", "hot_rank": 90, "hot_rank_chg": 147, "stock_cnt": 5825, "price": "33.88", "change": "10.00", "market_id": "17", "circulate_market_value": "4580238900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "扫地机器人"}, {"code": "603259", "name": "药明康德", "hot_rank": 91, "hot_rank_chg": -33, "stock_cnt": 5825, "price": "147.00", "change": "-4.83", "market_id": "17", "circulate_market_value": "363572200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 92, "hot_rank_chg": 16, "stock_cnt": 5825, "price": "50.22", "change": "-10.00", "market_id": "17", "circulate_market_value": "7177895000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601012", "name": "隆基绿能", "hot_rank": 93, "hot_rank_chg": -34, "stock_cnt": 5825, "price": "12.42", "change": "-0.40", "market_id": "17", "circulate_market_value": "94119534000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "氢能源/燃料电池", "change_pct": -1.74}, {"name": "光伏", "change_pct": -1.07}, {"name": "白马股", "change_pct": -0.49}, {"name": "碳中和", "change_pct": -0.93}, {"name": "颗粒硅", "change_pct": -0.79}, {"name": "BIPV概念", "change_pct": -0.54}, {"name": "钙钛矿电池", "change_pct": -1.57}, {"name": "异质结电池HJT", "change_pct": -0.97}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 94, "hot_rank_chg": 75, "stock_cnt": 5825, "price": "55.00", "change": "-3.32", "market_id": "17", "circulate_market_value": "65036902000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 95, "hot_rank_chg": -33, "stock_cnt": 5825, "price": "73.21", "change": "-9.62", "market_id": "33", "circulate_market_value": "141078860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 96, "hot_rank_chg": -25, "stock_cnt": 5825, "price": "1453.00", "change": "0.07", "market_id": "17", "circulate_market_value": "1816368600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 97, "hot_rank_chg": 75, "stock_cnt": 5825, "price": "5.55", "change": "-4.31", "market_id": "17", "circulate_market_value": "13977730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.65}, {"name": "工业大麻", "change_pct": -1.79}, {"name": "中药", "change_pct": -1.18}, {"name": "保健品", "change_pct": -0.94}, {"name": "民营医院", "change_pct": -1.14}, {"name": "医药", "change_pct": -1.88}, {"name": "化学原料药", "change_pct": -1.8}, {"name": "流感", "change_pct": -1.7}, {"name": "振兴东北", "change_pct": -1.06}, {"name": "食品", "change_pct": -1.24}, {"name": "肝炎概念", "change_pct": -1.48}]}, {"code": "000993", "name": "闽东电力", "hot_rank": 98, "hot_rank_chg": 23, "stock_cnt": 5825, "price": "12.31", "change": "0.65", "market_id": "33", "circulate_market_value": "5637382400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 0.76}, {"name": "水电", "change_pct": 0.87}, {"name": "福建自贸/海西概念", "change_pct": -1.49}, {"name": "有色 · 钼", "change_pct": -3.43}, {"name": "光伏", "change_pct": -1.07}, {"name": "风电", "change_pct": -1.3}, {"name": "有色金属", "change_pct": -2.3}, {"name": "宁德时代概念股", "change_pct": -2.69}, {"name": "船舶", "change_pct": -0.94}, {"name": "自贸区", "change_pct": -1.02}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 99, "hot_rank_chg": -13, "stock_cnt": 5825, "price": "8.12", "change": "-3.45", "market_id": "33", "circulate_market_value": "13211189500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.65}, {"name": "电竞", "change_pct": -1.42}, {"name": "手游", "change_pct": -2.74}, {"name": "人工智能", "change_pct": -2.37}, {"name": "游戏", "change_pct": -2.81}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.21}, {"name": "腾讯概念股", "change_pct": -2.47}, {"name": "传媒", "change_pct": -1.41}, {"name": "快手概念股", "change_pct": -1.73}, {"name": "元宇宙", "change_pct": -1.88}, {"name": "虚拟数字人", "change_pct": -2.04}, {"name": "东数西算/算力", "change_pct": -2.18}, {"name": "web3.0", "change_pct": -2.43}, {"name": "AIGC概念", "change_pct": -1.6}, {"name": "数据要素", "change_pct": -2.24}, {"name": "字节跳动概念股", "change_pct": -2.07}, {"name": "AI营销", "change_pct": -2.09}, {"name": "ChatGPT", "change_pct": -2.25}, {"name": "智能眼镜/MR头显", "change_pct": -3.03}, {"name": "AI大模型/智能体", "change_pct": -2.12}, {"name": "人形机器人", "change_pct": -3.1}, {"name": "短剧/互动影游", "change_pct": -1.61}, {"name": "多模态", "change_pct": -2.23}, {"name": "AI视频", "change_pct": -1.79}, {"name": "IP经济/谷子经济", "change_pct": -1.54}, {"name": "小红书概念股", "change_pct": -1.94}]}, {"code": "603598", "name": "引力传媒", "hot_rank": 100, "hot_rank_chg": -40, "stock_cnt": 5825, "price": "21.56", "change": "-0.46", "market_id": "17", "circulate_market_value": "5825798700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600278", "name": "东方创业", "price": 7.12, "change_pct": 10.05, "reason": "公司拥有多家全资控股的物流和航运公司", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.99, "first_limit_up": 1793930658, "break_limit_up_times": 3}, {"code": "300237", "name": "美晨科技", "price": 2.82, "change_pct": 20.0, "reason": "公司撤销其他风险警示", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.91, "first_limit_up": 1793942439, "break_limit_up_times": 1}, {"code": "600540", "name": "新赛股份", "price": 4.58, "change_pct": 10.1, "reason": "公司农业主要产品为棉籽、葵花籽、菜籽及其他油料作物，立足于新疆棉花产业，聚焦棉业全产业链", "plates": ["农业种植"], "limit_up_days": 1, "turnover_ratio": 18.24, "first_limit_up": 1793933920, "break_limit_up_times": 0}, {"code": "001258", "name": "立新能源", "price": 9.57, "change_pct": 10.0, "reason": "公司立足新疆，专注风力发电和光伏发电业务", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 3.62, "first_limit_up": 1793928876, "break_limit_up_times": 1}, {"code": "002578", "name": "闽发铝业", "price": 5.01, "change_pct": 10.11, "reason": "1、光伏边框、储能托架类铝型材均为公司工业型材板块的成熟产品；\n2、公司液冷服务器用铝型材已开始小批量供货，正积极推进相关领域的市场拓展与技术优化，稳步提升产品交付能力；\n3、公司位于福建省南安市，为海西板块的铝型材龙头企业，表示将重点拓展机器人等工业铝型材及高端装备铝型材赛道", "plates": ["光伏"], "limit_up_days": 5, "turnover_ratio": 12.5, "first_limit_up": 1793928300, "break_limit_up_times": 1}, {"code": "002088", "name": "鲁阳节能", "price": 11.09, "change_pct": 10.02, "reason": "中国陶瓷纤维龙头；公司纤维纸产品主要向新能源电池防火材料加工厂家供货，新能源电池防火市场是公司重点拓展市场之一，正推进客户需求对接、产品设计及送样", "plates": ["其他"], "limit_up_days": 4, "turnover_ratio": 12.43, "first_limit_up": 1793947551, "break_limit_up_times": 8}, {"code": "002889", "name": "东方嘉盛", "price": 14.91, "change_pct": 10.04, "reason": "1、公司与国际头部芯片光刻机厂商合作，共同在深圳建设寄售维修保税仓库，为华南片区集成电路制造企业提供全天候快速响应的光刻机寄售维修服务。\n2、公司是国内领先的一体化供应链服务商；为客户提供包括原材料、零部件及产成品采购、订单及合同管理、进出口代理等在内的一体化供应链管理服务。", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 14.23, "first_limit_up": 1793931738, "break_limit_up_times": 1}, {"code": "600261", "name": "阳光照明", "price": 5.4, "change_pct": 9.98, "reason": "中国最大的节能灯生产和出口基地之一；公司使用自有资金 3,000万元参与蓝星光域（上海）航天科技有限公司融资，完成后阳光照明持有其1.0989%股权。蓝星光域成立于2021年 5月，专注于全场景激光通信解决方案，核心产品包括星载同轨/异轨激光通信终端、机载平流层激光通信终端等，主要应用于卫星间、星地间高速率通信，业务覆盖空天地海全场景空域", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 18.01, "first_limit_up": 1793929799, "break_limit_up_times": 1}, {"code": "002086", "name": "东方海洋", "price": 3.97, "change_pct": 9.97, "reason": "公司主要从事海水苗种繁育、养殖，水产品加工等，水产品加工主要包括调理食品系列、冷冻鱼片系列、海参系列加工产品等", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 42.55, "first_limit_up": 1793930553, "break_limit_up_times": 2}, {"code": "603381", "name": "永臻股份", "price": 20.74, "change_pct": 10.03, "reason": "光伏铝边框绝对龙头，全球市占率超 18%；公司主营光伏边框、BIPV 产品、光伏支架等绿色能源结构材料研发生产，配套隆基、天合光能等国内外头部组件厂商", "plates": ["光伏"], "limit_up_days": 4, "turnover_ratio": 5.29, "first_limit_up": 1793928300, "break_limit_up_times": 0}, {"code": "000595", "name": "新能股份", "price": 5.38, "change_pct": 10.02, "reason": "公司完成重大资产重组后，主营业务变更为风力发电、光伏发电及储能电站的投资运营，风光总装机容量达282.03万千瓦，已建成投运储能电站300MW/600MWh", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 1.8, "first_limit_up": 1793928696, "break_limit_up_times": 1}, {"code": "300686", "name": "智动力", "price": 13.68, "change_pct": 20.0, "reason": "1、公司智能终端组件业务覆盖智能手机、智能穿戴、智能家居及机器人等场景，目前已为扫地机器人产品提供配套组件；\n2、公司计划投资约3亿元建设光通信、算力热控及、铟锡镓铟系列等项目，拓展光通信及算力热控材料领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.95, "first_limit_up": 1793934513, "break_limit_up_times": 1}, {"code": "000525", "name": "红太阳", "price": 5.02, "change_pct": 10.09, "reason": "绿色农药全产业链公司，拥有行业内最完整、规模最大的吡啶碱产业链；第三季度净利润同比增长38.96%", "plates": ["农业种植"], "limit_up_days": 1, "turnover_ratio": 11.34, "first_limit_up": 1793943591, "break_limit_up_times": 0}, {"code": "601599", "name": "浙文影业", "price": 5.08, "change_pct": 9.96, "reason": "公司出品的文旅微短剧《九龙湖之有间客栈》已于2025年度播出，竖屏微短剧《江南机动队》杀青待播，并将继续布局微短剧业务矩阵", "plates": ["短剧/互动影游"], "limit_up_days": 5, "turnover_ratio": 21.97, "first_limit_up": 1793928300, "break_limit_up_times": 1}, {"code": "601595", "name": "上海电影", "price": 35.76, "change_pct": 10.0, "reason": "公司拥有“专业发行+综合院线+高端影院”完整电影发行放映产业链，控股股东上海电影集团已于前期在上海影视乐园启动真人互动剧游项目，相关剧本策划、演员统筹、投资测算正在积极推进中；旗下的大IP开发主体上影元与互影科技、阅文集团等联合出品了首个双人互动影游项目《谍影成双》", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 4.95, "first_limit_up": 1793932050, "break_limit_up_times": 1}, {"code": "002310", "name": "东方新能", "price": 2.32, "change_pct": 9.95, "reason": "公司主营业务为新能源电站的开发、投资、建设及运营，重点聚焦陆上风电与分布式光伏等核心领域，并全面探索布局储能业务", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 2.81, "first_limit_up": 1793929725, "break_limit_up_times": 0}, {"code": "600156", "name": "华升股份", "price": 7.07, "change_pct": 9.95, "reason": "公司拟6.62亿元购买易信科技97.40%股份，标的公司深耕AIDC领域，业务涉及智算中心双冷源阶梯冷却技术；一季报业绩同比减亏", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 10.04, "first_limit_up": 1793942266, "break_limit_up_times": 3}, {"code": "002973", "name": "侨银股份", "price": 10.78, "change_pct": 10.0, "reason": "公司与国家地方共建人形机器人创新中心开展了合作，主要系双方在城市服务场景与具身智能机器人领域的资源融合与技术协同，着力推动在环卫作业、物业管理、家居场景的应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.64, "first_limit_up": 1793941884, "break_limit_up_times": 2}, {"code": "600371", "name": "万向德农", "price": 12.39, "change_pct": 10.04, "reason": "公司主要从事玉米杂交种子的研产销，单倍体育种技术领先", "plates": ["农业种植"], "limit_up_days": 1, "turnover_ratio": 22.78, "first_limit_up": 1793928988, "break_limit_up_times": 4}, {"code": "603366", "name": "日出东方", "price": 8.99, "change_pct": 10.04, "reason": "公司光伏业务主要为分布式户用光伏业务和分布式工商业光伏业务，空气能热泵领域技术领先", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 6.92, "first_limit_up": 1793929514, "break_limit_up_times": 0}, {"code": "002929", "name": "润建股份", "price": 63.11, "change_pct": 10.01, "reason": "领先的数字化智能运维（AIOps）服务商；公司为算力中心及IDC提供全生命周期一站式服务，近日签下2亿美元AI词元大单", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 19.55, "first_limit_up": 1793941551, "break_limit_up_times": 1}, {"code": "601188", "name": "龙江交通", "price": 3.81, "change_pct": 10.12, "reason": "公司所辖哈大分公司圆满完成冰雪旅游季等关键时期保畅任务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 21.58, "first_limit_up": 1793929239, "break_limit_up_times": 4}, {"code": "600537", "name": "*ST亿晶", "price": 2.05, "change_pct": 10.22, "reason": "公司预重整投资安排生变，中润光能拟入主", "plates": ["ST股"], "limit_up_days": 5, "turnover_ratio": 8.09, "first_limit_up": 1793929181, "break_limit_up_times": 5}, {"code": "002712", "name": "思美传媒", "price": 5.96, "change_pct": 9.96, "reason": "公司子公司掌维科技的网络文学IP已与多家公司合作授权短剧改编，包括《前妻攻略，傅先生偏要宠我》《神医农女：买个相公来种田》等作品；互动影游方面，其IP改编的互动游戏《I Love You, I Quit》已上线海外平台Chapters，并储备数万IP具备改编互动剧或互动游戏潜力", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 8.2, "first_limit_up": 1793932944, "break_limit_up_times": 0}, {"code": "600327", "name": "大东方", "price": 4.91, "change_pct": 10.09, "reason": "1、公司旗下老字号“三凤桥”品牌，在各大主流平台设有“三凤桥旗舰店”，提真空及保鲜包装的各类卤味和熟食制品或礼盒套装，本地实体店在特定节日出售“年夜饭”预制礼盒；\n2、下属医疗业务板块中的儿科业务，主体主要包括以儿童身高管理为主的“健高儿科”、以儿心健康为主的“雅恩健康” 、以普儿科和儿保为主的“知贝医疗”组成，三个方向初步覆盖了儿童生长发育的全阶段", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 20.75, "first_limit_up": 1793930240, "break_limit_up_times": 2}, {"code": "001316", "name": "润贝航科", "price": 27.82, "change_pct": 10.0, "reason": "控股子公司杭州轻云将主要负责航空、航天先进复合材料的研发、生产", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.5, "first_limit_up": 1793930244, "break_limit_up_times": 2}, {"code": "301697", "name": "贝特利", "price": 36.6, "change_pct": 20.0, "reason": "1、公司主营电子材料研发生产与销售，光伏银粉和HJT浆料是核心导电材料产品，其中银粉收入占主营业务收入七成以上，可适配TOPCon、HJT、BC等多种光伏电池浆料，客户覆盖上海银浆、帝科股份、华晟新能源等光伏企业，属于光伏产业链上游关键原材料环节；\n2、公司四甲基环四硅氧烷可作为半导体上游原材料，LED封装胶已规模化销售，Mini-LED封装胶已量产并开始小批量销售\n", "plates": ["光伏"], "limit_up_days": 3, "turnover_ratio": 40.68, "first_limit_up": 1793928846, "break_limit_up_times": 1}, {"code": "603657", "name": "春光科技", "price": 33.88, "change_pct": 10.0, "reason": "公司主营吸尘器、洗地机、扫地机器人、布衣清洗机等", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 6.65, "first_limit_up": 1793928686, "break_limit_up_times": 1}, {"code": "002388", "name": "新亚制程", "price": 6.67, "change_pct": 10.07, "reason": "公司产品已批量用于人型机器人主板，与多家客户建立合作", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 19.95, "first_limit_up": 1793932044, "break_limit_up_times": 0}, {"code": "605339", "name": "南侨食品", "price": 15.8, "change_pct": 10.03, "reason": "国内烘焙油脂市场龙头，间接控股股东南侨投控为台湾地区上市公司，实控人、董事长陈正文为中国台湾籍\n", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 0.6, "first_limit_up": 1793928300, "break_limit_up_times": 0}, {"code": "600229", "name": "城市传媒", "price": 6.42, "change_pct": 9.93, "reason": "1、公司推进头部IP全链条运营，开发人工智能生成内容应用产品，并推进以IP深度开发运营为核心的文化科技业务；\n2、公司针对出版行业开放了“万象出版大模型”，属于出版行业第一个垂直细分的大模型", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 1.31, "first_limit_up": 1793928608, "break_limit_up_times": 0}, {"code": "600207", "name": "安彩高科", "price": 4.88, "change_pct": 9.91, "reason": "公司具备太阳能光伏玻璃原片、钢化片、镀膜片全产品链的生产能力", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 3.28, "first_limit_up": 1793928725, "break_limit_up_times": 1}, {"code": "001308", "name": "康冠科技", "price": 20.94, "change_pct": 9.98, "reason": "公司围绕端侧AI硬件全链条布局，投资阶跃星辰、嘉立创、爱培科，双方已推出搭载阶跃星辰大模型的闺蜜机、首款mini AI PC等产品，并拟设立联合实验室探索Token服务收入分成模式", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1793932899, "break_limit_up_times": 0}];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};