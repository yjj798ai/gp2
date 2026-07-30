const UPDATE_TIME = "2026-07-30 19:18";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": -6.62,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续213天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -6.63,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续260天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI应用",
    "rise": -0.97,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": -2.06,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续90天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "白酒概念",
    "rise": 1.83,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "机器人概念",
    "rise": -2.66,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续91天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "芯片概念",
    "rise": -4.89,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续84天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "人形机器人",
    "rise": -3.13,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续424天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -3.34,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "人工智能",
    "rise": -1.66,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "PCB概念",
    "rise": -5.77,
    "rate": 0,
    "tag": "",
    "hotTag": "连续83天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -3.15,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续189天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "先进封装",
    "rise": -6.53,
    "rate": 0,
    "tag": "",
    "hotTag": "连续53天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "算力租赁",
    "rise": -2.81,
    "rate": 0,
    "tag": "",
    "hotTag": "连续124天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "高股息精选",
    "rise": 0.93,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "红利低波ETF",
    "code": "886072"
  },
  {
    "name": "氢能源",
    "rise": -1.57,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "新能源ETF",
    "code": "885823"
  },
  {
    "name": "黄金概念",
    "rise": -0.41,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "猪肉",
    "rise": 0.87,
    "rate": 0,
    "tag": "",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "超级品牌",
    "rise": 0.78,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "食品ETF",
    "code": "885761"
  },
  {
    "name": "草甘膦",
    "rise": 1.98,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "化工ETF",
    "code": "885640"
  }
];
const THS_EVENTS = [
  {
    "title": "机构同步释放积极信号！白酒概念震荡走强，舍得酒业涨停",
    "desc": "",
    "heat": 298751,
    "direction": "白酒",
    "themes": [
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "均瑶健康",
        "code": "605388",
        "chg": 10.071942
      }
    ]
  },
  {
    "title": "三部门联合发布《邮政业发展“十五五”规划》",
    "desc": "",
    "heat": 206015,
    "direction": "物流",
    "themes": [
      "物流",
      "冷链物流",
      "智能物流",
      "低空物流"
    ],
    "stocks": [
      {
        "name": "春光智能",
        "code": "920810",
        "chg": 11.125158
      }
    ]
  },
  {
    "title": "超预期！三星Q2净利同比飙升近13倍，半导体业务营利超89万亿韩元，预计需求持续强劲",
    "desc": "",
    "heat": 60486,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "德明利",
        "code": "001309",
        "chg": 10.000564
      }
    ]
  },
  {
    "title": "月之暗面Kimi完成35亿美元F轮融资 Pre IPO轮已提前开启",
    "desc": "",
    "heat": 59451,
    "direction": "Kimi",
    "themes": [
      "Kimi"
    ],
    "stocks": [
      {
        "name": "返利科技",
        "code": "600228",
        "chg": 10.06006
      }
    ]
  },
  {
    "title": "SpaceX获得美国太空军16亿美元的合同",
    "desc": "",
    "heat": 44790,
    "direction": "SpaceX",
    "themes": [
      "商业航天"
    ],
    "stocks": [
      {
        "name": "ST达华",
        "code": "002512",
        "chg": 10.149254
      }
    ]
  },
  {
    "title": "ChinaJoy开幕在即，游戏板块估值修复一触即发？",
    "desc": "",
    "heat": 6416,
    "direction": "网络游戏",
    "themes": [
      "网络游戏",
      "游戏"
    ],
    "stocks": [
      {
        "name": "佳云科技",
        "code": "300242",
        "chg": 5.287356
      }
    ]
  },
  {
    "title": "突发！美军对伊朗发动攻击，国际油价单日暴涨超6%",
    "desc": "",
    "heat": 2396,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "科力股份",
        "code": "920088",
        "chg": 11.135182
      }
    ]
  },
  {
    "title": "两大MLCC原厂开启新一轮涨价",
    "desc": "",
    "heat": 1280,
    "direction": "MLCC涨价",
    "themes": [
      "MLCC"
    ],
    "stocks": [
      {
        "name": "风华高科",
        "code": "000636",
        "chg": 6.293412
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+7.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+4.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新能源整车",
    "change": "+2.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车整车",
    "change": "+2.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+2.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "草甘膦",
    "change": "+2.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "草铵膦",
    "change": "+2.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+1.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "颗粒硅",
    "change": "+1.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大消费",
    "change": "+1.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农药",
    "change": "+1.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "+1.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "珠宝饰品",
    "change": "+1.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+1.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机场",
    "change": "+1.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+1.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "虫害防治",
    "change": "+1.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "厨卫家电",
    "change": "+1.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+1.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "财税改革",
    "change": "+1.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 8,
    "hot_rank_chg": 0,
    "stock_cnt": 5857,
    "price": "12.35",
    "change": "6.37",
    "market_id": "33",
    "circulate_market_value": "11526546300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -3.67
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.13
      },
      {
        "name": "新疆概念",
        "change_pct": -0.74
      },
      {
        "name": "光伏",
        "change_pct": -2.2
      },
      {
        "name": "风电",
        "change_pct": -1.46
      },
      {
        "name": "储能",
        "change_pct": -2.25
      },
      {
        "name": "国企改革",
        "change_pct": -0.5
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 16,
    "hot_rank_chg": 0,
    "stock_cnt": 5857,
    "price": "5.36",
    "change": "-6.13",
    "market_id": "33",
    "circulate_market_value": "189567840000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -5.51
      },
      {
        "name": "手机产业链",
        "change_pct": -4.75
      },
      {
        "name": "超高清视频",
        "change_pct": -2.61
      },
      {
        "name": "苹果产业链",
        "change_pct": -5.49
      },
      {
        "name": "电竞",
        "change_pct": -1.32
      },
      {
        "name": "半导体",
        "change_pct": -6.79
      },
      {
        "name": "人工智能",
        "change_pct": -1.96
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.79
      },
      {
        "name": "VR&AR",
        "change_pct": -4.53
      },
      {
        "name": "OLED",
        "change_pct": -5.19
      },
      {
        "name": "京津冀",
        "change_pct": -1.45
      },
      {
        "name": "物联网",
        "change_pct": -2.63
      },
      {
        "name": "指纹识别",
        "change_pct": -4.03
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.62
      },
      {
        "name": "白马股",
        "change_pct": 0.45
      },
      {
        "name": "智能制造",
        "change_pct": -3.09
      },
      {
        "name": "小米概念股",
        "change_pct": -4.07
      },
      {
        "name": "国产芯片",
        "change_pct": -5.63
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -4.7
      },
      {
        "name": "全息概念",
        "change_pct": -2.78
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.92
      },
      {
        "name": "MicroLED",
        "change_pct": -5.28
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.94
      },
      {
        "name": "智能手表",
        "change_pct": -5.08
      },
      {
        "name": "MiniLED",
        "change_pct": -5.08
      },
      {
        "name": "传感器",
        "change_pct": -3.93
      },
      {
        "name": "大硅片",
        "change_pct": -8.35
      },
      {
        "name": "AI PC",
        "change_pct": -4.5
      },
      {
        "name": "华为产业链",
        "change_pct": -2.97
      },
      {
        "name": "回购",
        "change_pct": -1.12
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -5.25
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -6.6
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 17,
    "hot_rank_chg": 2,
    "stock_cnt": 5857,
    "price": "5.95",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "7715577000.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "4",
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.1
      },
      {
        "name": "创新药",
        "change_pct": -2.77
      },
      {
        "name": "央企改革",
        "change_pct": -0.63
      },
      {
        "name": "医疗器械",
        "change_pct": -1.39
      },
      {
        "name": "强势人气股",
        "change_pct": -3.67
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.79
      },
      {
        "name": "保健品",
        "change_pct": -0.78
      },
      {
        "name": "民营医院",
        "change_pct": -0.5
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -1.0
      },
      {
        "name": "医药",
        "change_pct": -1.89
      },
      {
        "name": "化学原料药",
        "change_pct": -1.91
      },
      {
        "name": "海南概念",
        "change_pct": -0.25
      },
      {
        "name": "脑科学",
        "change_pct": -2.74
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.91
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.48
      },
      {
        "name": "食品",
        "change_pct": -0.29
      },
      {
        "name": "国企改革",
        "change_pct": -0.5
      },
      {
        "name": "医疗信息化",
        "change_pct": -1.55
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.6
      },
      {
        "name": "自贸区",
        "change_pct": 0.17
      },
      {
        "name": "合成生物",
        "change_pct": -1.34
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 27,
    "hot_rank_chg": -2,
    "stock_cnt": 5857,
    "price": "5.56",
    "change": "3.73",
    "market_id": "17",
    "circulate_market_value": "14002915000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.63
      },
      {
        "name": "工业大麻",
        "change_pct": -1.61
      },
      {
        "name": "中药",
        "change_pct": -1.1
      },
      {
        "name": "强势人气股",
        "change_pct": -3.67
      },
      {
        "name": "保健品",
        "change_pct": -0.78
      },
      {
        "name": "民营医院",
        "change_pct": -0.5
      },
      {
        "name": "医药",
        "change_pct": -1.89
      },
      {
        "name": "化学原料药",
        "change_pct": -1.91
      },
      {
        "name": "流感",
        "change_pct": -1.64
      },
      {
        "name": "振兴东北",
        "change_pct": 0.01
      },
      {
        "name": "食品",
        "change_pct": -0.29
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 28,
    "hot_rank_chg": 22,
    "stock_cnt": 5857,
    "price": "8.66",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "7679313300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "半年报预增",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -2.59
      },
      {
        "name": "手机产业链",
        "change_pct": -4.75
      },
      {
        "name": "超高清视频",
        "change_pct": -2.61
      },
      {
        "name": "强势人气股",
        "change_pct": -3.67
      },
      {
        "name": "OLED",
        "change_pct": -5.19
      },
      {
        "name": "包装印刷",
        "change_pct": -2.08
      },
      {
        "name": "光伏",
        "change_pct": -2.2
      },
      {
        "name": "小米概念股",
        "change_pct": -4.07
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -4.7
      },
      {
        "name": "可降解塑料",
        "change_pct": -1.5
      },
      {
        "name": "华为产业链",
        "change_pct": -2.97
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -5.36
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 31,
    "hot_rank_chg": 17,
    "stock_cnt": 5857,
    "price": "8.01",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "2278697700.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "AI教育",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -1.49
      },
      {
        "name": "密集调研",
        "change_pct": -2.92
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.52
      },
      {
        "name": "教育",
        "change_pct": 0.4
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.99
      },
      {
        "name": "职业教育",
        "change_pct": 0.48
      },
      {
        "name": "在线教育",
        "change_pct": 0.99
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.98
      },
      {
        "name": "华为产业链",
        "change_pct": -2.97
      },
      {
        "name": "智谱AI",
        "change_pct": -1.33
      }
    ]
  },
  {
    "code": "000428",
    "name": "华天酒店",
    "hot_rank": 34,
    "hot_rank_chg": -1,
    "stock_cnt": 5857,
    "price": "3.83",
    "change": "-5.20",
    "market_id": "33",
    "circulate_market_value": "3902486600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "湖南国企改革",
        "change_pct": -1.04
      },
      {
        "name": "旅游",
        "change_pct": 0.08
      },
      {
        "name": "物业管理",
        "change_pct": 0.37
      },
      {
        "name": "预制菜",
        "change_pct": 0.23
      },
      {
        "name": "国企改革",
        "change_pct": -0.5
      },
      {
        "name": "餐饮",
        "change_pct": 0.82
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 43,
    "hot_rank_chg": -4,
    "stock_cnt": 5857,
    "price": "4.24",
    "change": "3.67",
    "market_id": "33",
    "circulate_market_value": "24824345000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -1.8
      },
      {
        "name": "人工智能",
        "change_pct": -1.96
      },
      {
        "name": "水利",
        "change_pct": -1.28
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.89
      },
      {
        "name": "大数据",
        "change_pct": -1.13
      },
      {
        "name": "园林",
        "change_pct": -3.39
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -4.07
      },
      {
        "name": "数字经济",
        "change_pct": -1.09
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.83
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.92
      },
      {
        "name": "第三代半导体",
        "change_pct": -5.58
      },
      {
        "name": "快手概念股",
        "change_pct": -1.44
      },
      {
        "name": "IGBT",
        "change_pct": -4.58
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.01
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.35
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.65
      },
      {
        "name": "氮化镓",
        "change_pct": -5.44
      },
      {
        "name": "AI营销",
        "change_pct": -1.18
      },
      {
        "name": "多模态",
        "change_pct": -1.62
      },
      {
        "name": "液冷服务器",
        "change_pct": -5.17
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.09
      },
      {
        "name": "区块链",
        "change_pct": -0.56
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 44,
    "hot_rank_chg": -10,
    "stock_cnt": 5857,
    "price": "10.88",
    "change": "6.77",
    "market_id": "17",
    "circulate_market_value": "7401878100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.02
      },
      {
        "name": "强势人气股",
        "change_pct": -3.67
      },
      {
        "name": "雄安新区",
        "change_pct": -1.03
      },
      {
        "name": "煤化工",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 47,
    "hot_rank_chg": -1,
    "stock_cnt": 5857,
    "price": "5.67",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "5856746000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.85
      },
      {
        "name": "锂电池",
        "change_pct": -2.23
      },
      {
        "name": "强势人气股",
        "change_pct": -3.67
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -6.14
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.12
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.16
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 52,
    "hot_rank_chg": -1,
    "stock_cnt": 5857,
    "price": "10.92",
    "change": "-9.97",
    "market_id": "33",
    "circulate_market_value": "7479134200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -2.44
      },
      {
        "name": "核电",
        "change_pct": -2.38
      },
      {
        "name": "充电桩",
        "change_pct": -2.92
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.8
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.16
      },
      {
        "name": "储能",
        "change_pct": -2.25
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.99
      },
      {
        "name": "智能电网",
        "change_pct": -2.84
      },
      {
        "name": "核聚变",
        "change_pct": -3.03
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 56,
    "hot_rank_chg": 5,
    "stock_cnt": 5857,
    "price": "8.15",
    "change": "2.52",
    "market_id": "17",
    "circulate_market_value": "2197339500000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.46
      },
      {
        "name": "高股息",
        "change_pct": 1.21
      },
      {
        "name": "银行",
        "change_pct": 2.43
      },
      {
        "name": "白马股",
        "change_pct": 0.45
      },
      {
        "name": "破净股",
        "change_pct": 0.48
      },
      {
        "name": "大金融",
        "change_pct": 1.62
      }
    ]
  },
  {
    "code": "605388",
    "name": "均瑶健康",
    "hot_rank": 58,
    "hot_rank_chg": 37,
    "stock_cnt": 5857,
    "price": "6.12",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "3674962100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "益生菌",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -0.36
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.92
      },
      {
        "name": "食品",
        "change_pct": -0.29
      },
      {
        "name": "大农业",
        "change_pct": 0.22
      },
      {
        "name": "植物奶",
        "change_pct": 0.34
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": -0.99
      },
      {
        "name": "饮料",
        "change_pct": -0.44
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 62,
    "hot_rank_chg": -27,
    "stock_cnt": 5857,
    "price": "9.19",
    "change": "-2.96",
    "market_id": "17",
    "circulate_market_value": "7985676100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.63
      },
      {
        "name": "快递物流",
        "change_pct": 0.06
      },
      {
        "name": "新零售",
        "change_pct": 0.41
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.65
      },
      {
        "name": "旅游",
        "change_pct": 0.08
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.99
      },
      {
        "name": "物业管理",
        "change_pct": 0.37
      },
      {
        "name": "免税店概念",
        "change_pct": 0.49
      },
      {
        "name": "自贸区",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "600228",
    "name": "返利科技",
    "hot_rank": 63,
    "hot_rank_chg": 44,
    "stock_cnt": 5857,
    "price": "7.33",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "3049552500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "控制权变更",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -1.49
      },
      {
        "name": "新零售",
        "change_pct": 0.41
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.52
      },
      {
        "name": "人工智能",
        "change_pct": -1.96
      },
      {
        "name": "百度概念股",
        "change_pct": 0.07
      },
      {
        "name": "拼多多概念股",
        "change_pct": -1.68
      },
      {
        "name": "传媒",
        "change_pct": 0.04
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.09
      }
    ]
  },
  {
    "code": "000670",
    "name": "盈方微",
    "hot_rank": 68,
    "hot_rank_chg": 38,
    "stock_cnt": 5857,
    "price": "7.00",
    "change": "4.32",
    "market_id": "33",
    "circulate_market_value": "5813150500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -2.59
      },
      {
        "name": "资产重组",
        "change_pct": -3.32
      },
      {
        "name": "半导体",
        "change_pct": -6.79
      },
      {
        "name": "小米概念股",
        "change_pct": -4.07
      },
      {
        "name": "国产芯片",
        "change_pct": -5.63
      }
    ]
  },
  {
    "code": "600376",
    "name": "首开股份",
    "hot_rank": 69,
    "hot_rank_chg": 68,
    "stock_cnt": 5857,
    "price": "3.69",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "9518595700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.55
      },
      {
        "name": "京津冀",
        "change_pct": -1.45
      },
      {
        "name": "雄安新区",
        "change_pct": -1.03
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.89
      },
      {
        "name": "住房租赁",
        "change_pct": -0.18
      },
      {
        "name": "物业管理",
        "change_pct": 0.37
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 72,
    "hot_rank_chg": -10,
    "stock_cnt": 5857,
    "price": "5.82",
    "change": "-5.67",
    "market_id": "17",
    "circulate_market_value": "72145239000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.63
      },
      {
        "name": "核电",
        "change_pct": -2.38
      },
      {
        "name": "强势人气股",
        "change_pct": -3.67
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.39
      },
      {
        "name": "水电",
        "change_pct": -0.98
      },
      {
        "name": "火电",
        "change_pct": -1.54
      },
      {
        "name": "光伏",
        "change_pct": -2.2
      },
      {
        "name": "风电",
        "change_pct": -1.46
      },
      {
        "name": "国企改革",
        "change_pct": -0.5
      },
      {
        "name": "算电协同",
        "change_pct": -2.44
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 75,
    "hot_rank_chg": 27,
    "stock_cnt": 5857,
    "price": "2.89",
    "change": "9.89",
    "market_id": "17",
    "circulate_market_value": "9445786200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.55
      },
      {
        "name": "强势人气股",
        "change_pct": -3.67
      },
      {
        "name": "养老产业",
        "change_pct": -0.71
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.12
      },
      {
        "name": "民营医院",
        "change_pct": -0.5
      },
      {
        "name": "低价股",
        "change_pct": -0.77
      },
      {
        "name": "地摊经济",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "601616",
    "name": "广电电气",
    "hot_rank": 83,
    "hot_rank_chg": 53,
    "stock_cnt": 5857,
    "price": "3.80",
    "change": "10.14",
    "market_id": "17",
    "circulate_market_value": "3243966200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "回购",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -2.44
      },
      {
        "name": "股权转让",
        "change_pct": -2.41
      },
      {
        "name": "充电桩",
        "change_pct": -2.92
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.16
      },
      {
        "name": "IGBT",
        "change_pct": -4.58
      },
      {
        "name": "智能电网",
        "change_pct": -2.84
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 99,
    "hot_rank_chg": -14,
    "stock_cnt": 5857,
    "price": "6.96",
    "change": "-3.20",
    "market_id": "33",
    "circulate_market_value": "23154500000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -2.44
      },
      {
        "name": "核电",
        "change_pct": -2.38
      },
      {
        "name": "5G",
        "change_pct": -5.26
      },
      {
        "name": "一带一路",
        "change_pct": -0.67
      },
      {
        "name": "充电桩",
        "change_pct": -2.92
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.5
      },
      {
        "name": "风电",
        "change_pct": -1.46
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.16
      },
      {
        "name": "储能",
        "change_pct": -2.25
      },
      {
        "name": "特高压",
        "change_pct": -2.83
      },
      {
        "name": "智能电网",
        "change_pct": -2.84
      },
      {
        "name": "海洋经济",
        "change_pct": -1.9
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "001309", "name": "德明利", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5857, "price": "390.04", "change": "10.00", "market_id": "33", "circulate_market_value": "64368205000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5857, "price": "52.87", "change": "-0.15", "market_id": "17", "circulate_market_value": "238075670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5857, "price": "371.10", "change": "1.94", "market_id": "17", "circulate_market_value": "248077360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5857, "price": "50.50", "change": "6.29", "market_id": "33", "circulate_market_value": "58429144000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5857, "price": "864.00", "change": "-9.15", "market_id": "33", "circulate_market_value": "958987970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 6, "hot_rank_chg": 4, "stock_cnt": 5857, "price": "64.51", "change": "-10.00", "market_id": "17", "circulate_market_value": "115435134000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5857, "price": "33.60", "change": "-9.99", "market_id": "33", "circulate_market_value": "96098442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5857, "price": "12.35", "change": "6.37", "market_id": "33", "circulate_market_value": "11526546300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -3.67}, {"name": "新疆国企改革", "change_pct": -0.13}, {"name": "新疆概念", "change_pct": -0.74}, {"name": "光伏", "change_pct": -2.2}, {"name": "风电", "change_pct": -1.46}, {"name": "储能", "change_pct": -2.25}, {"name": "国企改革", "change_pct": -0.5}]}, {"code": "002185", "name": "华天科技", "hot_rank": 9, "hot_rank_chg": 3, "stock_cnt": 5857, "price": "14.91", "change": "-10.02", "market_id": "33", "circulate_market_value": "49540738000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 10, "hot_rank_chg": -4, "stock_cnt": 5857, "price": "161.80", "change": "-10.00", "market_id": "33", "circulate_market_value": "224306850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 11, "hot_rank_chg": 2, "stock_cnt": 5857, "price": "32.96", "change": "7.33", "market_id": "17", "circulate_market_value": "48187349000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 12, "hot_rank_chg": 2, "stock_cnt": 5857, "price": "15.66", "change": "-10.00", "market_id": "17", "circulate_market_value": "32753551000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 13, "hot_rank_chg": -4, "stock_cnt": 5857, "price": "55.89", "change": "-10.00", "market_id": "33", "circulate_market_value": "84810405000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 14, "hot_rank_chg": 4, "stock_cnt": 5857, "price": "36.42", "change": "-9.29", "market_id": "33", "circulate_market_value": "57330746000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 15, "hot_rank_chg": 9, "stock_cnt": 5857, "price": "338.78", "change": "2.78", "market_id": "33", "circulate_market_value": "95485784000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5857, "price": "5.36", "change": "-6.13", "market_id": "33", "circulate_market_value": "189567840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -5.51}, {"name": "手机产业链", "change_pct": -4.75}, {"name": "超高清视频", "change_pct": -2.61}, {"name": "苹果产业链", "change_pct": -5.49}, {"name": "电竞", "change_pct": -1.32}, {"name": "半导体", "change_pct": -6.79}, {"name": "人工智能", "change_pct": -1.96}, {"name": "互联网医疗", "change_pct": -0.79}, {"name": "VR&AR", "change_pct": -4.53}, {"name": "OLED", "change_pct": -5.19}, {"name": "京津冀", "change_pct": -1.45}, {"name": "物联网", "change_pct": -2.63}, {"name": "指纹识别", "change_pct": -4.03}, {"name": "汽车零部件", "change_pct": -1.62}, {"name": "白马股", "change_pct": 0.45}, {"name": "智能制造", "change_pct": -3.09}, {"name": "小米概念股", "change_pct": -4.07}, {"name": "国产芯片", "change_pct": -5.63}, {"name": "液晶面板/LCD", "change_pct": -4.7}, {"name": "全息概念", "change_pct": -2.78}, {"name": "理想汽车概念股", "change_pct": -0.92}, {"name": "MicroLED", "change_pct": -5.28}, {"name": "钙钛矿电池", "change_pct": -2.94}, {"name": "智能手表", "change_pct": -5.08}, {"name": "MiniLED", "change_pct": -5.08}, {"name": "传感器", "change_pct": -3.93}, {"name": "大硅片", "change_pct": -8.35}, {"name": "AI PC", "change_pct": -4.5}, {"name": "华为产业链", "change_pct": -2.97}, {"name": "回购", "change_pct": -1.12}, {"name": "智能眼镜/MR头显", "change_pct": -5.25}, {"name": "玻璃基板封装", "change_pct": -6.6}]}, {"code": "000566", "name": "海南海药", "hot_rank": 17, "hot_rank_chg": 2, "stock_cnt": 5857, "price": "5.95", "change": "9.98", "market_id": "33", "circulate_market_value": "7715577000.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": -1.1}, {"name": "创新药", "change_pct": -2.77}, {"name": "央企改革", "change_pct": -0.63}, {"name": "医疗器械", "change_pct": -1.39}, {"name": "强势人气股", "change_pct": -3.67}, {"name": "互联网医疗", "change_pct": -0.79}, {"name": "保健品", "change_pct": -0.78}, {"name": "民营医院", "change_pct": -0.5}, {"name": "CAR-T疗法", "change_pct": -1.0}, {"name": "医药", "change_pct": -1.89}, {"name": "化学原料药", "change_pct": -1.91}, {"name": "海南概念", "change_pct": -0.25}, {"name": "脑科学", "change_pct": -2.74}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.91}, {"name": "海南自由贸易港", "change_pct": 0.48}, {"name": "食品", "change_pct": -0.29}, {"name": "国企改革", "change_pct": -0.5}, {"name": "医疗信息化", "change_pct": -1.55}, {"name": "新冠病毒防治", "change_pct": -1.6}, {"name": "自贸区", "change_pct": 0.17}, {"name": "合成生物", "change_pct": -1.34}]}, {"code": "300502", "name": "新易盛", "hot_rank": 18, "hot_rank_chg": -7, "stock_cnt": 5857, "price": "371.10", "change": "-11.89", "market_id": "33", "circulate_market_value": "465449640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 19, "hot_rank_chg": 1, "stock_cnt": 5857, "price": "47.20", "change": "-5.13", "market_id": "17", "circulate_market_value": "115812103000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 20, "hot_rank_chg": 3, "stock_cnt": 5857, "price": "17.61", "change": "9.99", "market_id": "17", "circulate_market_value": "7061610000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "原奶周期"}, {"code": "603221", "name": "爱丽家居", "hot_rank": 21, "hot_rank_chg": 0, "stock_cnt": 5857, "price": "20.49", "change": "9.98", "market_id": "17", "circulate_market_value": "4964112300.00", "change_type": "1", "change_section": "8", "change_days": "8", "change_reason": "拟收购欧康诺"}, {"code": "600396", "name": "华电辽能", "hot_rank": 22, "hot_rank_chg": -7, "stock_cnt": 5857, "price": "14.54", "change": "-10.03", "market_id": "17", "circulate_market_value": "21413157000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 23, "hot_rank_chg": 5, "stock_cnt": 5857, "price": "105.30", "change": "-3.30", "market_id": "33", "circulate_market_value": "196890590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 24, "hot_rank_chg": -7, "stock_cnt": 5857, "price": "32.93", "change": "9.04", "market_id": "33", "circulate_market_value": "46246659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 25, "hot_rank_chg": 1, "stock_cnt": 5857, "price": "35.87", "change": "-10.01", "market_id": "17", "circulate_market_value": "30365868000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 26, "hot_rank_chg": -4, "stock_cnt": 5857, "price": "35.65", "change": "6.96", "market_id": "17", "circulate_market_value": "25818742000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 27, "hot_rank_chg": -2, "stock_cnt": 5857, "price": "5.56", "change": "3.73", "market_id": "17", "circulate_market_value": "14002915000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.63}, {"name": "工业大麻", "change_pct": -1.61}, {"name": "中药", "change_pct": -1.1}, {"name": "强势人气股", "change_pct": -3.67}, {"name": "保健品", "change_pct": -0.78}, {"name": "民营医院", "change_pct": -0.5}, {"name": "医药", "change_pct": -1.89}, {"name": "化学原料药", "change_pct": -1.91}, {"name": "流感", "change_pct": -1.64}, {"name": "振兴东北", "change_pct": 0.01}, {"name": "食品", "change_pct": -0.29}]}, {"code": "002585", "name": "双星新材", "hot_rank": 28, "hot_rank_chg": 22, "stock_cnt": 5857, "price": "8.66", "change": "10.04", "market_id": "33", "circulate_market_value": "7679313300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增", "xgb_concepts": [{"name": "被动元件", "change_pct": -2.59}, {"name": "手机产业链", "change_pct": -4.75}, {"name": "超高清视频", "change_pct": -2.61}, {"name": "强势人气股", "change_pct": -3.67}, {"name": "OLED", "change_pct": -5.19}, {"name": "包装印刷", "change_pct": -2.08}, {"name": "光伏", "change_pct": -2.2}, {"name": "小米概念股", "change_pct": -4.07}, {"name": "液晶面板/LCD", "change_pct": -4.7}, {"name": "可降解塑料", "change_pct": -1.5}, {"name": "华为产业链", "change_pct": -2.97}, {"name": "PET复合铜箔", "change_pct": -5.36}]}, {"code": "002409", "name": "雅克科技", "hot_rank": 29, "hot_rank_chg": 3, "stock_cnt": 5857, "price": "136.96", "change": "-10.00", "market_id": "33", "circulate_market_value": "43624875000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 30, "hot_rank_chg": 6, "stock_cnt": 5857, "price": "219.84", "change": "3.76", "market_id": "17", "circulate_market_value": "103669214000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 31, "hot_rank_chg": 17, "stock_cnt": 5857, "price": "8.01", "change": "10.03", "market_id": "33", "circulate_market_value": "2278697700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "AI教育", "xgb_concepts": [{"name": "筹码集中", "change_pct": -1.49}, {"name": "密集调研", "change_pct": -2.92}, {"name": "ST摘帽", "change_pct": -2.52}, {"name": "教育", "change_pct": 0.4}, {"name": "阿里巴巴概念股", "change_pct": -1.99}, {"name": "职业教育", "change_pct": 0.48}, {"name": "在线教育", "change_pct": 0.99}, {"name": "华为鸿蒙", "change_pct": -0.98}, {"name": "华为产业链", "change_pct": -2.97}, {"name": "智谱AI", "change_pct": -1.33}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 32, "hot_rank_chg": -5, "stock_cnt": 5857, "price": "19.36", "change": "4.03", "market_id": "33", "circulate_market_value": "8757279200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 33, "hot_rank_chg": -4, "stock_cnt": 5857, "price": "30.56", "change": "-4.47", "market_id": "33", "circulate_market_value": "32967130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000428", "name": "华天酒店", "hot_rank": 34, "hot_rank_chg": -1, "stock_cnt": 5857, "price": "3.83", "change": "-5.20", "market_id": "33", "circulate_market_value": "3902486600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "湖南国企改革", "change_pct": -1.04}, {"name": "旅游", "change_pct": 0.08}, {"name": "物业管理", "change_pct": 0.37}, {"name": "预制菜", "change_pct": 0.23}, {"name": "国企改革", "change_pct": -0.5}, {"name": "餐饮", "change_pct": 0.82}]}, {"code": "603137", "name": "恒尚节能", "hot_rank": 35, "hot_rank_chg": 6, "stock_cnt": 5857, "price": "26.21", "change": "9.99", "market_id": "17", "circulate_market_value": "4794682700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "跨界存储"}, {"code": "600418", "name": "江淮汽车", "hot_rank": 36, "hot_rank_chg": 4, "stock_cnt": 5857, "price": "24.39", "change": "10.01", "market_id": "17", "circulate_market_value": "53267999000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "尊界新品"}, {"code": "603629", "name": "利通电子", "hot_rank": 37, "hot_rank_chg": 0, "stock_cnt": 5857, "price": "87.28", "change": "-9.97", "market_id": "17", "circulate_market_value": "31483938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 38, "hot_rank_chg": -8, "stock_cnt": 5857, "price": "36.63", "change": "-4.58", "market_id": "17", "circulate_market_value": "145479230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 39, "hot_rank_chg": 6, "stock_cnt": 5857, "price": "32.70", "change": "1.71", "market_id": "17", "circulate_market_value": "673678640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 40, "hot_rank_chg": -9, "stock_cnt": 5857, "price": "61.28", "change": "3.65", "market_id": "33", "circulate_market_value": "52312813000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 41, "hot_rank_chg": 3, "stock_cnt": 5857, "price": "56.20", "change": "-3.05", "market_id": "17", "circulate_market_value": "7343833800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 42, "hot_rank_chg": 12, "stock_cnt": 5857, "price": "262.66", "change": "-6.76", "market_id": "17", "circulate_market_value": "106728822000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 43, "hot_rank_chg": -4, "stock_cnt": 5857, "price": "4.24", "change": "3.67", "market_id": "33", "circulate_market_value": "24824345000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -1.8}, {"name": "人工智能", "change_pct": -1.96}, {"name": "水利", "change_pct": -1.28}, {"name": "直播/短视频", "change_pct": -0.89}, {"name": "大数据", "change_pct": -1.13}, {"name": "园林", "change_pct": -3.39}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -4.07}, {"name": "数字经济", "change_pct": -1.09}, {"name": "腾讯概念股", "change_pct": -1.83}, {"name": "理想汽车概念股", "change_pct": -0.92}, {"name": "第三代半导体", "change_pct": -5.58}, {"name": "快手概念股", "change_pct": -1.44}, {"name": "IGBT", "change_pct": -4.58}, {"name": "虚拟数字人", "change_pct": -1.01}, {"name": "AIGC概念", "change_pct": -1.35}, {"name": "字节跳动概念股", "change_pct": -1.65}, {"name": "氮化镓", "change_pct": -5.44}, {"name": "AI营销", "change_pct": -1.18}, {"name": "多模态", "change_pct": -1.62}, {"name": "液冷服务器", "change_pct": -5.17}, {"name": "小红书概念股", "change_pct": -1.09}, {"name": "区块链", "change_pct": -0.56}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 44, "hot_rank_chg": -10, "stock_cnt": 5857, "price": "10.88", "change": "6.77", "market_id": "17", "circulate_market_value": "7401878100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.02}, {"name": "强势人气股", "change_pct": -3.67}, {"name": "雄安新区", "change_pct": -1.03}, {"name": "煤化工", "change_pct": 0.11}]}, {"code": "601138", "name": "工业富联", "hot_rank": 45, "hot_rank_chg": -7, "stock_cnt": 5857, "price": "53.80", "change": "-6.84", "market_id": "17", "circulate_market_value": "1067612160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 46, "hot_rank_chg": -4, "stock_cnt": 5857, "price": "1361.76", "change": "3.09", "market_id": "17", "circulate_market_value": "1702311100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 47, "hot_rank_chg": -1, "stock_cnt": 5857, "price": "5.67", "change": "-10.00", "market_id": "33", "circulate_market_value": "5856746000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.85}, {"name": "锂电池", "change_pct": -2.23}, {"name": "强势人气股", "change_pct": -3.67}, {"name": "铜箔/覆铜板", "change_pct": -6.14}, {"name": "粤港澳大湾区", "change_pct": -0.12}, {"name": "新能源汽车", "change_pct": -2.16}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -1.23}]}, {"code": "002703", "name": "浙江世宝", "hot_rank": 48, "hot_rank_chg": 10, "stock_cnt": 5857, "price": "14.61", "change": "10.02", "market_id": "33", "circulate_market_value": "8562162400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "减持终止"}, {"code": "002882", "name": "金龙羽", "hot_rank": 49, "hot_rank_chg": 21, "stock_cnt": 5857, "price": "21.62", "change": "10.03", "market_id": "33", "circulate_market_value": "5335438700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "601127", "name": "赛力斯", "hot_rank": 50, "hot_rank_chg": 2, "stock_cnt": 5857, "price": "61.45", "change": "5.95", "market_id": "17", "circulate_market_value": "95690148000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 51, "hot_rank_chg": -2, "stock_cnt": 5857, "price": "27.70", "change": "-5.59", "market_id": "17", "circulate_market_value": "94538705000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 52, "hot_rank_chg": -1, "stock_cnt": 5857, "price": "10.92", "change": "-9.97", "market_id": "33", "circulate_market_value": "7479134200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -2.44}, {"name": "核电", "change_pct": -2.38}, {"name": "充电桩", "change_pct": -2.92}, {"name": "云计算数据中心", "change_pct": -2.8}, {"name": "新能源汽车", "change_pct": -2.16}, {"name": "储能", "change_pct": -2.25}, {"name": "阿里巴巴概念股", "change_pct": -1.99}, {"name": "智能电网", "change_pct": -2.84}, {"name": "核聚变", "change_pct": -3.03}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 53, "hot_rank_chg": 3, "stock_cnt": 5857, "price": "69.08", "change": "-7.82", "market_id": "33", "circulate_market_value": "101328741000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605068", "name": "明新旭腾", "hot_rank": 54, "hot_rank_chg": 40, "stock_cnt": 5857, "price": "20.59", "change": "9.99", "market_id": "17", "circulate_market_value": "3339667000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "人形机器人"}, {"code": "603823", "name": "百合花", "hot_rank": 55, "hot_rank_chg": 11, "stock_cnt": 5857, "price": "49.81", "change": "-9.99", "market_id": "17", "circulate_market_value": "20739275000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 56, "hot_rank_chg": 5, "stock_cnt": 5857, "price": "8.15", "change": "2.52", "market_id": "17", "circulate_market_value": "2197339500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.46}, {"name": "高股息", "change_pct": 1.21}, {"name": "银行", "change_pct": 2.43}, {"name": "白马股", "change_pct": 0.45}, {"name": "破净股", "change_pct": 0.48}, {"name": "大金融", "change_pct": 1.62}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 57, "hot_rank_chg": 27, "stock_cnt": 5857, "price": "61.80", "change": "-7.73", "market_id": "33", "circulate_market_value": "40357602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605388", "name": "均瑶健康", "hot_rank": 58, "hot_rank_chg": 37, "stock_cnt": 5857, "price": "6.12", "change": "10.07", "market_id": "17", "circulate_market_value": "3674962100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "益生菌", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -0.36}, {"name": "优化生育（三孩）", "change_pct": -0.92}, {"name": "食品", "change_pct": -0.29}, {"name": "大农业", "change_pct": 0.22}, {"name": "植物奶", "change_pct": 0.34}, {"name": "幽门螺杆菌概念", "change_pct": -0.99}, {"name": "饮料", "change_pct": -0.44}]}, {"code": "600900", "name": "长江电力", "hot_rank": 59, "hot_rank_chg": 6, "stock_cnt": 5857, "price": "29.49", "change": "1.94", "market_id": "17", "circulate_market_value": "721567740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 60, "hot_rank_chg": -3, "stock_cnt": 5857, "price": "27.95", "change": "-10.01", "market_id": "33", "circulate_market_value": "21868209000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000593", "name": "德龙汇能", "hot_rank": 61, "hot_rank_chg": 6, "stock_cnt": 5857, "price": "15.38", "change": "-7.74", "market_id": "33", "circulate_market_value": "5513471100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 62, "hot_rank_chg": -27, "stock_cnt": 5857, "price": "9.19", "change": "-2.96", "market_id": "17", "circulate_market_value": "7985676100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.63}, {"name": "快递物流", "change_pct": 0.06}, {"name": "新零售", "change_pct": 0.41}, {"name": "福建自贸/海西概念", "change_pct": -0.65}, {"name": "旅游", "change_pct": 0.08}, {"name": "阿里巴巴概念股", "change_pct": -1.99}, {"name": "物业管理", "change_pct": 0.37}, {"name": "免税店概念", "change_pct": 0.49}, {"name": "自贸区", "change_pct": 0.17}]}, {"code": "600228", "name": "返利科技", "hot_rank": 63, "hot_rank_chg": 44, "stock_cnt": 5857, "price": "7.33", "change": "10.06", "market_id": "17", "circulate_market_value": "3049552500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "控制权变更", "xgb_concepts": [{"name": "筹码集中", "change_pct": -1.49}, {"name": "新零售", "change_pct": 0.41}, {"name": "ST摘帽", "change_pct": -2.52}, {"name": "人工智能", "change_pct": -1.96}, {"name": "百度概念股", "change_pct": 0.07}, {"name": "拼多多概念股", "change_pct": -1.68}, {"name": "传媒", "change_pct": 0.04}, {"name": "小红书概念股", "change_pct": -1.09}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 64, "hot_rank_chg": -4, "stock_cnt": 5857, "price": "152.33", "change": "-10.00", "market_id": "33", "circulate_market_value": "118811330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 65, "hot_rank_chg": -1, "stock_cnt": 5857, "price": "401.88", "change": "1.27", "market_id": "33", "circulate_market_value": "1712041400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 66, "hot_rank_chg": -3, "stock_cnt": 5857, "price": "1042.43", "change": "-9.11", "market_id": "17", "circulate_market_value": "654951440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 67, "hot_rank_chg": -12, "stock_cnt": 5857, "price": "96.20", "change": "1.42", "market_id": "33", "circulate_market_value": "335412220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000670", "name": "盈方微", "hot_rank": 68, "hot_rank_chg": 38, "stock_cnt": 5857, "price": "7.00", "change": "4.32", "market_id": "33", "circulate_market_value": "5813150500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -2.59}, {"name": "资产重组", "change_pct": -3.32}, {"name": "半导体", "change_pct": -6.79}, {"name": "小米概念股", "change_pct": -4.07}, {"name": "国产芯片", "change_pct": -5.63}]}, {"code": "600376", "name": "首开股份", "hot_rank": 69, "hot_rank_chg": 68, "stock_cnt": 5857, "price": "3.69", "change": "0.00", "market_id": "17", "circulate_market_value": "9518595700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -0.55}, {"name": "京津冀", "change_pct": -1.45}, {"name": "雄安新区", "change_pct": -1.03}, {"name": "北京城市规划", "change_pct": -0.89}, {"name": "住房租赁", "change_pct": -0.18}, {"name": "物业管理", "change_pct": 0.37}]}, {"code": "000858", "name": "五粮液", "hot_rank": 70, "hot_rank_chg": -27, "stock_cnt": 5857, "price": "78.56", "change": "4.51", "market_id": "33", "circulate_market_value": "304931690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 71, "hot_rank_chg": 22, "stock_cnt": 5857, "price": "31.45", "change": "10.00", "market_id": "33", "circulate_market_value": "8680159900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "控股股东拟变更"}, {"code": "601991", "name": "大唐发电", "hot_rank": 72, "hot_rank_chg": -10, "stock_cnt": 5857, "price": "5.82", "change": "-5.67", "market_id": "17", "circulate_market_value": "72145239000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.63}, {"name": "核电", "change_pct": -2.38}, {"name": "强势人气股", "change_pct": -3.67}, {"name": "电力体制改革", "change_pct": -1.39}, {"name": "水电", "change_pct": -0.98}, {"name": "火电", "change_pct": -1.54}, {"name": "光伏", "change_pct": -2.2}, {"name": "风电", "change_pct": -1.46}, {"name": "国企改革", "change_pct": -0.5}, {"name": "算电协同", "change_pct": -2.44}]}, {"code": "301583", "name": "托伦斯", "hot_rank": 73, "hot_rank_chg": -20, "stock_cnt": 5857, "price": "158.07", "change": "-18.45", "market_id": "33", "circulate_market_value": "4873515100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603556", "name": "海兴电力", "hot_rank": 74, "hot_rank_chg": 35, "stock_cnt": 5857, "price": "26.99", "change": "9.98", "market_id": "17", "circulate_market_value": "13124269900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "智能电网"}, {"code": "600162", "name": "香江控股", "hot_rank": 75, "hot_rank_chg": 27, "stock_cnt": 5857, "price": "2.89", "change": "9.89", "market_id": "17", "circulate_market_value": "9445786200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力", "xgb_concepts": [{"name": "房地产", "change_pct": -0.55}, {"name": "强势人气股", "change_pct": -3.67}, {"name": "养老产业", "change_pct": -0.71}, {"name": "粤港澳大湾区", "change_pct": -0.12}, {"name": "民营医院", "change_pct": -0.5}, {"name": "低价股", "change_pct": -0.77}, {"name": "地摊经济", "change_pct": 0.7}]}, {"code": "002371", "name": "北方华创", "hot_rank": 76, "hot_rank_chg": 21, "stock_cnt": 5857, "price": "668.07", "change": "-5.42", "market_id": "33", "circulate_market_value": "484424140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 77, "hot_rank_chg": -18, "stock_cnt": 5857, "price": "160.10", "change": "-12.08", "market_id": "33", "circulate_market_value": "174250930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 78, "hot_rank_chg": 3, "stock_cnt": 5857, "price": "100.08", "change": "-7.49", "market_id": "17", "circulate_market_value": "241367830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600895", "name": "张江高科", "hot_rank": 79, "hot_rank_chg": -32, "stock_cnt": 5857, "price": "32.48", "change": "3.60", "market_id": "17", "circulate_market_value": "50301437000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301677", "name": "欣兴工具", "hot_rank": 80, "hot_rank_chg": -2, "stock_cnt": 5857, "price": "82.40", "change": "145.38", "market_id": "33", "circulate_market_value": "1766657500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 81, "hot_rank_chg": -12, "stock_cnt": 5857, "price": "14.98", "change": "-9.98", "market_id": "17", "circulate_market_value": "11793400600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 82, "hot_rank_chg": -7, "stock_cnt": 5857, "price": "196.78", "change": "-5.17", "market_id": "17", "circulate_market_value": "225266760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601616", "name": "广电电气", "hot_rank": 83, "hot_rank_chg": 53, "stock_cnt": 5857, "price": "3.80", "change": "10.14", "market_id": "17", "circulate_market_value": "3243966200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "回购", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -2.44}, {"name": "股权转让", "change_pct": -2.41}, {"name": "充电桩", "change_pct": -2.92}, {"name": "新能源汽车", "change_pct": -2.16}, {"name": "IGBT", "change_pct": -4.58}, {"name": "智能电网", "change_pct": -2.84}]}, {"code": "002258", "name": "利尔化学", "hot_rank": 84, "hot_rank_chg": 36, "stock_cnt": 5857, "price": "16.18", "change": "9.99", "market_id": "33", "circulate_market_value": "12930222600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华润双鹤拟入主"}, {"code": "300223", "name": "北京君正", "hot_rank": 85, "hot_rank_chg": 1, "stock_cnt": 5857, "price": "123.66", "change": "-0.72", "market_id": "33", "circulate_market_value": "52146708000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688766", "name": "普冉股份", "hot_rank": 86, "hot_rank_chg": 6, "stock_cnt": 5857, "price": "353.12", "change": "4.32", "market_id": "17", "circulate_market_value": "52510199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600702", "name": "舍得酒业", "hot_rank": 87, "hot_rank_chg": 2, "stock_cnt": 5857, "price": "37.49", "change": "10.01", "market_id": "17", "circulate_market_value": "12444837900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "白酒"}, {"code": "603019", "name": "中科曙光", "hot_rank": 88, "hot_rank_chg": -8, "stock_cnt": 5857, "price": "81.00", "change": "-6.51", "market_id": "17", "circulate_market_value": "118507402000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 89, "hot_rank_chg": 9, "stock_cnt": 5857, "price": "140.83", "change": "-3.21", "market_id": "33", "circulate_market_value": "63378537000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 90, "hot_rank_chg": -19, "stock_cnt": 5857, "price": "96.55", "change": "-8.27", "market_id": "33", "circulate_market_value": "185647350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 91, "hot_rank_chg": -23, "stock_cnt": 5857, "price": "284.64", "change": "-5.49", "market_id": "17", "circulate_market_value": "41264500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600036", "name": "招商银行", "hot_rank": 92, "hot_rank_chg": -5, "stock_cnt": 5857, "price": "40.55", "change": "2.24", "market_id": "17", "circulate_market_value": "836503700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 93, "hot_rank_chg": -16, "stock_cnt": 5857, "price": "91.10", "change": "-9.14", "market_id": "33", "circulate_market_value": "91554193000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 94, "hot_rank_chg": -20, "stock_cnt": 5857, "price": "180.36", "change": "-10.54", "market_id": "33", "circulate_market_value": "156046560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 95, "hot_rank_chg": -23, "stock_cnt": 5857, "price": "19.05", "change": "-6.98", "market_id": "33", "circulate_market_value": "8017478800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 96, "hot_rank_chg": 23, "stock_cnt": 5857, "price": "22.29", "change": "-10.01", "market_id": "17", "circulate_market_value": "8536273100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000333", "name": "美的集团", "hot_rank": 97, "hot_rank_chg": 7, "stock_cnt": 5857, "price": "88.95", "change": "2.23", "market_id": "33", "circulate_market_value": "612178740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300996", "name": "普联软件", "hot_rank": 98, "hot_rank_chg": 25, "stock_cnt": 5857, "price": "15.52", "change": "20.03", "market_id": "33", "circulate_market_value": "5170368600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "明略科技入主"}, {"code": "002498", "name": "汉缆股份", "hot_rank": 99, "hot_rank_chg": -14, "stock_cnt": 5857, "price": "6.96", "change": "-3.20", "market_id": "33", "circulate_market_value": "23154500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -2.44}, {"name": "核电", "change_pct": -2.38}, {"name": "5G", "change_pct": -5.26}, {"name": "一带一路", "change_pct": -0.67}, {"name": "充电桩", "change_pct": -2.92}, {"name": "氢能源/燃料电池", "change_pct": -1.5}, {"name": "风电", "change_pct": -1.46}, {"name": "新能源汽车", "change_pct": -2.16}, {"name": "储能", "change_pct": -2.25}, {"name": "特高压", "change_pct": -2.83}, {"name": "智能电网", "change_pct": -2.84}, {"name": "海洋经济", "change_pct": -1.9}]}, {"code": "002558", "name": "巨人网络", "hot_rank": 100, "hot_rank_chg": -27, "stock_cnt": 5857, "price": "27.68", "change": "2.60", "market_id": "33", "circulate_market_value": "52607555000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603221", "name": "爱丽家居", "price": 20.49, "change_pct": 9.98, "reason": "公司拟收购欧康诺不低于77.08%股权，欧康诺专注于存储测试设备及测试服务领域", "plates": ["资产重组"], "limit_up_days": 8, "turnover_ratio": 1.37, "first_limit_up": 1785374700, "break_limit_up_times": 0}, {"code": "002686", "name": "亿利达", "price": 5.81, "change_pct": 10.04, "reason": "公司的产品可以应用数据中心冷却系统，风机产品已经在华为、阿里、腾讯、移动等企业的数据中心中配套应用", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.95, "first_limit_up": 1785375030, "break_limit_up_times": 2}, {"code": "600228", "name": "返利科技", "price": 7.33, "change_pct": 10.06, "reason": "国内知名的在线导购公司，基于人工智能技术开发的电商导购APP", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 5.81, "first_limit_up": 1785375422, "break_limit_up_times": 0}, {"code": "002703", "name": "浙江世宝", "price": 14.61, "change_pct": 10.02, "reason": "公司在线控转向和后轮转向领域技术储备深厚，已获多家主流车企定点，线控转向首个量产项目预计于2026年下半年开始量产", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 8.37, "first_limit_up": 1785375336, "break_limit_up_times": 1}, {"code": "600712", "name": "南宁百货", "price": 5.25, "change_pct": 10.06, "reason": "南宁百货品牌，此前向广西壮族自治区及南宁市政府相关部门递交了关于免税品经营资质申报的请示", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.72, "first_limit_up": 1785375548, "break_limit_up_times": 1}, {"code": "600629", "name": "华建集团", "price": 13.94, "change_pct": 10.02, "reason": "公司旗下上海科技创业投资有限公司持有上海微电子装备（集团）股份有限公司13.275%股权", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.39, "first_limit_up": 1785377972, "break_limit_up_times": 0}, {"code": "600663", "name": "陆家嘴", "price": 8.28, "change_pct": 9.96, "reason": "公司上半年净利润同比增长35.91%，主要系公司在推动住宅产品及部分办公楼宇销售的同时，打造产业聚集平台，整合优势资源，注重产业链上下游转型升级，聚焦城市楼宇更新改造和高能级专业化租赁运营队伍打造，依托全方位商业配套等综合优势，不断提升资产管理能级和效率，为公司经营业绩和可持续发展带来新动能", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.69, "first_limit_up": 1785393038, "break_limit_up_times": 0}, {"code": "600475", "name": "华光环能", "price": 14.88, "change_pct": 9.98, "reason": "公司业务包括光伏电站工程总承包和光伏电站运营", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.49, "first_limit_up": 1785390377, "break_limit_up_times": 0}, {"code": "600418", "name": "江淮汽车", "price": 24.39, "change_pct": 10.01, "reason": "公司预计上半年净亏损7.4亿元，上年同期亏损7.73亿元，业绩变动主要系市场竞争加剧导致销量同比下滑，联营企业经营亏损使投资收益为-1.3亿元，受汇率波动影响，公司财务费用为1.4亿元左右", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1785376762, "break_limit_up_times": 1}, {"code": "603352", "name": "至信股份", "price": 27.06, "change_pct": 10.0, "reason": "公司主要从事汽车冲焊件及相关模具的开发、加工、生产和销售，已与长安汽车、吉利汽车、比亚迪、理想汽车、蔚来汽车、零跑汽车等知名整车制造商建立战略合作关系", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 9.7, "first_limit_up": 1785378309, "break_limit_up_times": 0}, {"code": "603376", "name": "大明电子", "price": 26.46, "change_pct": 10.02, "reason": "公司专注于汽车电子零部件配套领域\n", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 9.33, "first_limit_up": 1785377073, "break_limit_up_times": 0}, {"code": "002846", "name": "英联股份", "price": 10.74, "change_pct": 10.04, "reason": "1、公司签署9.18亿元罐头易开盖项目投资协议；\n2、公司投资30.89亿元建设新能源汽车动力锂电池复合铜箔、复合铝箔项目，项目分为2期，计划建设100条复合铜箔和10条复合铝箔生产线，达产后产能可达复合铜箔5亿㎡、复合铝箔1亿㎡", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.57, "first_limit_up": 1785376635, "break_limit_up_times": 1}, {"code": "001225", "name": "和泰机电", "price": 43.66, "change_pct": 10.0, "reason": "公司通过持续实施自动化、智能化改造，更新迭代生产设备，在物料输送设备制造领域的生产工艺已相对成熟，应用了机器人自动焊接技术，机器人视觉识别自动上下料、自动装箱等技术", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.71, "first_limit_up": 1785378513, "break_limit_up_times": 0}, {"code": "300996", "name": "普联软件", "price": 15.52, "change_pct": 20.03, "reason": "管理信息化方案及IT综合服务商，控股股东拟向明略昭辉转让19.07%公司股份，控制权将变更", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 14.03, "first_limit_up": 1785375213, "break_limit_up_times": 0}, {"code": "601003", "name": "柳钢股份", "price": 4.19, "change_pct": 9.97, "reason": "华南、西南地区最大的钢铁联合企业", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 1.48, "first_limit_up": 1785375209, "break_limit_up_times": 0}, {"code": "603039", "name": "泛微网络", "price": 34.02, "change_pct": 9.99, "reason": "公司主营协同管理和移动办公软件，腾讯为公司第五大股东，公司旗下所有产品全面接入DeepSeek大模型，借助泛微2024年发布的数智大脑Xiaoe.AI，可快捷方便为客户搭建“DeepSeek大模型+专业小模型+智能体”的数智底座", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 7.52, "first_limit_up": 1785388189, "break_limit_up_times": 2}, {"code": "002827", "name": "高争民爆", "price": 31.45, "change_pct": 10.0, "reason": "公司34%股份拟无偿划转，控股股东或变更为地矿集团", "plates": ["股权转让"], "limit_up_days": 2, "turnover_ratio": 0.6, "first_limit_up": 1785374700, "break_limit_up_times": 0}, {"code": "002534", "name": "西子洁能", "price": 13.81, "change_pct": 10.04, "reason": "公司及子公司以承接太阳能光伏总承包项目为主，部分分布式光伏项目自持；公司在熔盐储能、电化学储能等领域有深厚技术积累和众多专利，参与建设多个储能项目，为火电厂灵活性调峰、电网侧储能调峰、用户侧储能等提供设备及解决方案", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 2.84, "first_limit_up": 1785388146, "break_limit_up_times": 0}, {"code": "603185", "name": "弘元绿能", "price": 15.37, "change_pct": 10.02, "reason": "公司为国内光伏硅片龙头", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 2.69, "first_limit_up": 1785376745, "break_limit_up_times": 1}, {"code": "605388", "name": "均瑶健康", "price": 6.12, "change_pct": 10.07, "reason": "国内最早生产与销售常温乳酸菌饮品的品牌企业之一；全资子公司奇梦星主要负责公司IP产品及母婴渠道产品的经营，目前已推出了“小黄人”系列乳酸菌饮品、“功夫熊猫”系列常温奶酪棒等产品", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 2.47, "first_limit_up": 1785375048, "break_limit_up_times": 0}, {"code": "300894", "name": "火星人", "price": 11.8, "change_pct": 20.04, "reason": "国内集成灶行业知名企业；参股的北京星动纪元科技有限公司和戴盟（深圳）机器人科技有限公司，专注研发和生产真正可商用的多系列通用仿人机器人产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.7, "first_limit_up": 1785379632, "break_limit_up_times": 1}, {"code": "000566", "name": "海南海药", "price": 5.95, "change_pct": 9.98, "reason": "1、公司参股上海力声特医学科技有限公司，其核心产品人工耳蜗被视为目前临床应用最成熟的脑机接口之一，通过电信号刺激听神经实现听觉重建；\n2、海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 28.19, "first_limit_up": 1785375969, "break_limit_up_times": 10}, {"code": "000025", "name": "特  力Ａ", "price": 15.64, "change_pct": 9.99, "reason": "公司主营黄金珠宝销售及物业租赁", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.73, "first_limit_up": 1785379038, "break_limit_up_times": 0}, {"code": "603348", "name": "文灿股份", "price": 14.76, "change_pct": 9.99, "reason": "汽车用铝合金压铸件生产商，积极关注机器人行业的发展", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.85, "first_limit_up": 1785377758, "break_limit_up_times": 0}, {"code": "603137", "name": "恒尚节能", "price": 26.21, "change_pct": 9.99, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 17.3, "first_limit_up": 1785375447, "break_limit_up_times": 5}, {"code": "000721", "name": "西安饮食", "price": 6.81, "change_pct": 10.02, "reason": "公司大股东为西安曲江新区国有资产管理委员会，拥有西安饭庄、德发长酒店、西安烤鸭店、大香港酒楼、西安永宁兴业酒店有限责任公司等20家分公司、17家子公司，目前已开业2家社区餐饮便民店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.69, "first_limit_up": 1785376389, "break_limit_up_times": 0}, {"code": "002882", "name": "金龙羽", "price": 21.62, "change_pct": 10.03, "reason": "公司固态电解质、半固态电芯已进入中试试验；全资子公司惠州金龙羽投资3亿元与锦添翼共同开发固态电池相关技术，锦添翼实际控制人李新禄及其研究团队在锂离子电池领域积累了20多年的研究基础，已成功掌握了氧化物固态电解质的宏量制备、硅碳负极材料的批量化生产、固态电芯的原位集成等研究成果", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 6.29, "first_limit_up": 1785375018, "break_limit_up_times": 1}, {"code": "301449", "name": "天溯计量", "price": 39.08, "change_pct": 19.99, "reason": "1、《电动汽车用动力蓄电池安全要求》GB 38031-2025于2026年7月1日实施，公司已具备相关测试能力，并积极推进申请相关资质认定，公司检测服务包括新能源电池检测认证服务；\n2、据2026年6月25日投资者关系活动记录表，公司已设立人工智能专项子公司布局产业，在工业机器人领域，自行编制《工业机器人视觉测量系统校准规范》并获CNAS认可", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 23.89, "first_limit_up": 1785388851, "break_limit_up_times": 0}, {"code": "603171", "name": "税友股份", "price": 41.47, "change_pct": 10.0, "reason": "公司与阿里云在AI智能体应用方面保持长期合作，90%以上基础设施使用阿里云，通义千问大模型应用于财税咨询、爱搜税等AI SaaS场景", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 2.2, "first_limit_up": 1785375862, "break_limit_up_times": 1}, {"code": "600702", "name": "舍得酒业", "price": 37.49, "change_pct": 10.01, "reason": "川酒六朵金花之一", "plates": ["白酒"], "limit_up_days": 1, "turnover_ratio": 4.28, "first_limit_up": 1785375730, "break_limit_up_times": 1}, {"code": "002731", "name": "*ST萃华", "price": 2.06, "change_pct": 10.16, "reason": "“中华老字号”珠宝企业，主营业务为珠宝饰品，兼营铂金和镶嵌饰品", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 25.58, "first_limit_up": 1785393780, "break_limit_up_times": 1}, {"code": "002667", "name": "*ST威领", "price": 11.72, "change_pct": 10.05, "reason": "公司业务主要包括锂矿选矿、基础性锂电原料锂盐加工及冶炼业务等，通过收购嘉宇矿业74.3%股权，新增钨锡铅锌矿开采业务", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 11.76, "first_limit_up": 1785376140, "break_limit_up_times": 2}, {"code": "002547", "name": "*ST春兴", "price": 2.43, "change_pct": 9.95, "reason": "公司控股股东孙洁晓及一致行动人袁静全部持股被轮候冻结", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.82, "first_limit_up": 1785374700, "break_limit_up_times": 0}, {"code": "301668", "name": "昊创瑞通", "price": 37.26, "change_pct": 20.0, "reason": "公司主要产品包括智能环网柜、智能柱上开关和箱式变电站等\n", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 23.32, "first_limit_up": 1785376824, "break_limit_up_times": 2}, {"code": "002512", "name": "ST达华", "price": 3.69, "change_pct": 10.15, "reason": "公司预计上半年净利润2300万元至3450万元，同比扭亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.95, "first_limit_up": 1785393063, "break_limit_up_times": 4}, {"code": "605068", "name": "明新旭腾", "price": 20.59, "change_pct": 9.99, "reason": "公司正积极接触柔性传感器公司，实现皮肤与传感器业务结合", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 3.67, "first_limit_up": 1785375005, "break_limit_up_times": 1}, {"code": "601616", "name": "广电电气", "price": 3.8, "change_pct": 10.14, "reason": "公司聚焦40.5kV及以下电压等级智能输配电成套设备研发，子公司安奕极电气荣获腾讯A级供应商，安奕极产品广泛应用于数据中心领域", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.35, "first_limit_up": 1785375114, "break_limit_up_times": 1}, {"code": "603919", "name": "金徽酒", "price": 16.89, "change_pct": 10.03, "reason": "公司为甘肃浓香型白酒龙头", "plates": ["白酒"], "limit_up_days": 1, "turnover_ratio": 4.56, "first_limit_up": 1785381396, "break_limit_up_times": 1}, {"code": "000820", "name": "神雾节能", "price": 3.2, "change_pct": 9.97, "reason": "公司撤销退市风险警示", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 0.23, "first_limit_up": 1785374700, "break_limit_up_times": 0}, {"code": "605179", "name": "一鸣食品", "price": 17.61, "change_pct": 9.99, "reason": "国内鲜乳烘焙知名企业", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 0.69, "first_limit_up": 1785374700, "break_limit_up_times": 0}, {"code": "600162", "name": "香江控股", "price": 2.89, "change_pct": 9.89, "reason": "公司签5年互联网数据中心业务协议，预计总金额7.96亿元", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.58, "first_limit_up": 1785375263, "break_limit_up_times": 0}, {"code": "605033", "name": "美邦股份", "price": 18.7, "change_pct": 10.0, "reason": "公司主营农药制剂的研产销，主要产品为杀菌剂、杀虫剂等，产品品种规格丰富，拥有数百种杀虫剂农药登记证", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.11, "first_limit_up": 1785375830, "break_limit_up_times": 0}, {"code": "001309", "name": "德明利", "price": 390.04, "change_pct": 10.0, "reason": "公司目前已建立了完善的存储产品矩阵，包括移动存储、固态硬盘、嵌入式存储、内存条等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 18.57, "first_limit_up": 1785388953, "break_limit_up_times": 1}, {"code": "000009", "name": "中国宝安", "price": 7.15, "change_pct": 10.0, "reason": "子公司贝特瑞新建硅基负极1.5万吨产能", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 2.18, "first_limit_up": 1785377055, "break_limit_up_times": 0}, {"code": "002702", "name": "海欣食品", "price": 4.94, "change_pct": 10.02, "reason": "公司位于福建省福州市，为国内鱼丸龙头，主营速冻鱼糜，速冻肉制品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.85, "first_limit_up": 1785375585, "break_limit_up_times": 0}, {"code": "600513", "name": "联环药业", "price": 16.76, "change_pct": 9.97, "reason": "公司主导产品之一爱普列特片为国家一类新药，是国内首创的治疗前列腺良性增生症的有效药物，生产的美愈伪麻胶囊可用于缓解普通感冒和流行性感冒症状", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.22, "first_limit_up": 1785376503, "break_limit_up_times": 2}, {"code": "301667", "name": "纳百川", "price": 65.82, "change_pct": 20.0, "reason": "公司已成为宁德时代、中创新航、阳光电源等国内排名前列新能源电池及电源设备厂商储能热管理系统供应商", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 17.3, "first_limit_up": 1785377157, "break_limit_up_times": 0}, {"code": "603660", "name": "苏州科达", "price": 8.83, "change_pct": 9.96, "reason": "1、公司自研的“开端大模型”已形成多模态、行业语言及AIGC三大模型矩阵，深度融入安防摄像机和各类平台软件中，并在警情分析等十多个行业应用场景落地；\n2、公司与华东师范大学共建“卫星应用技术联合实验室”，首颗技术验证星预计2026年5月左右发射，实现高光谱遥感数据星上AI实时处理", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 5.97, "first_limit_up": 1785375375, "break_limit_up_times": 2}, {"code": "603382", "name": "海阳科技", "price": 18.6, "change_pct": 9.99, "reason": "国内尼龙6系列主要生产企业之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.42, "first_limit_up": 1785381896, "break_limit_up_times": 0}, {"code": "002258", "name": "利尔化学", "price": 16.18, "change_pct": 9.99, "reason": "华润双鹤拟56.56亿元现金收购利尔化学23.5%股份", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 4.61, "first_limit_up": 1785374700, "break_limit_up_times": 2}, {"code": "603556", "name": "海兴电力", "price": 26.99, "change_pct": 9.98, "reason": "公司聚焦智能配用电、智慧水务及数字能源业务，主要产品包括智能电能表、一二次融合设备、环网柜等，面向全球电力公司提供解决方案", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 5.19, "first_limit_up": 1785390547, "break_limit_up_times": 0}, {"code": "603813", "name": "原尚股份", "price": 31.15, "change_pct": 9.99, "reason": "公司此前撤销退市风险警示", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 1.04, "first_limit_up": 1785379439, "break_limit_up_times": 0}, {"code": "003032", "name": "传智教育", "price": 8.01, "change_pct": 10.03, "reason": "公司近日正式发布“AI具身智能机器人开发”新学科，首期班将于今年10月正式开班，课程覆盖工业机械臂、四足巡检机器人、人形服务机器人三类设备，并对接智元、宇树等头部厂商方案", "plates": ["教育"], "limit_up_days": 4, "turnover_ratio": 8.8, "first_limit_up": 1785375009, "break_limit_up_times": 0}, {"code": "002585", "name": "双星新材", "price": 8.66, "change_pct": 10.04, "reason": "公司MLCC离型膜已切入国内头部客户并实现稳定供货，复合铜箔项目正常推进，受益国产替代", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 14.46, "first_limit_up": 1785375063, "break_limit_up_times": 3}, {"code": "000526", "name": "学大教育", "price": 36.33, "change_pct": 9.99, "reason": "国内最大的K12课外辅导服务提供商之一", "plates": ["教育"], "limit_up_days": 1, "turnover_ratio": 5.13, "first_limit_up": 1785375720, "break_limit_up_times": 0}];
const RISK_STOCKS = {"603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处"};