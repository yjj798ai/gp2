const UPDATE_TIME = "2026-07-22 13:40";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -0.04,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续83天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -1.61,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续206天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.53,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续253天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "算力租赁",
    "rise": -0.24,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续117天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "国家大基金持股",
    "rise": -1.0,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "PCB概念",
    "rise": -2.54,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -1.63,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续182天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "东数西算(算力)",
    "rise": -0.45,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "黄金概念",
    "rise": 1.86,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -0.87,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "人形机器人",
    "rise": -2.04,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续417天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "先进封装",
    "rise": -1.94,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续46天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "AI应用",
    "rise": -1.11,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "光纤概念",
    "rise": -2.25,
    "rate": 0,
    "tag": "",
    "hotTag": "连续82天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "芯片概念",
    "rise": -1.6,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "猪肉",
    "rise": 0.11,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "液冷服务器",
    "rise": -0.81,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "人工智能",
    "rise": -1.2,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "ST板块",
    "rise": -0.53,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续91天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "机器人概念",
    "rise": -1.51,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续84天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  }
];
const THS_EVENTS = [
  {
    "title": "2026中国国际黄金大会开幕，黄金产业链上下游技术集体革新",
    "desc": "",
    "heat": 320028,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "山金国际",
        "code": "000975",
        "chg": 10.014656
      }
    ]
  },
  {
    "title": "腾讯云：将大规模部署国产化算力 布局NPO超级节点",
    "desc": "",
    "heat": 166836,
    "direction": "NPO",
    "themes": [
      "NPO"
    ],
    "stocks": [
      {
        "name": "锐捷网络",
        "code": "301165",
        "chg": 13.656865
      }
    ]
  },
  {
    "title": "特朗普宣布两年后对仿制药征收100%关税",
    "desc": "",
    "heat": 110555,
    "direction": "仿制药",
    "themes": [
      "仿制药一致性评价",
      "CRO概念"
    ],
    "stocks": [
      {
        "name": "莱美药业",
        "code": "300006",
        "chg": 16.59292
      }
    ]
  },
  {
    "title": "英伟达(NVDA.US)AI“新王牌”来了！Vera Rubin已交付OpenAI等巨头 下一轮算力竞赛开启",
    "desc": "",
    "heat": 108730,
    "direction": "英伟达概念",
    "themes": [
      "英伟达概念"
    ],
    "stocks": [
      {
        "name": "利通电子",
        "code": "603629",
        "chg": 10.001859
      }
    ]
  },
  {
    "title": "北京：下半年将布局建设Token工厂 力争新增智能算力5万P",
    "desc": "",
    "heat": 99780,
    "direction": "Token工厂",
    "themes": [
      "东数西算(算力)",
      "算力租赁"
    ],
    "stocks": [
      {
        "name": "创业黑马",
        "code": "300688",
        "chg": 20.009597
      }
    ]
  },
  {
    "title": "月之暗面Kimi将以投前500亿美元估值洽谈IPO前最后一轮融资",
    "desc": "",
    "heat": 91401,
    "direction": "Kimi",
    "themes": [
      "Kimi"
    ],
    "stocks": [
      {
        "name": "润和软件",
        "code": "300339",
        "chg": -0.138198
      }
    ]
  },
  {
    "title": "美情报机构：美伊将陷入长期对峙",
    "desc": "",
    "heat": 59917,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "中曼石油",
        "code": "603619",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "稳市场聚合力，证监会系列座谈会释放四大信号",
    "desc": "",
    "heat": 2151,
    "direction": "大金融",
    "themes": [
      "证券",
      "保险"
    ],
    "stocks": [
      {
        "name": "中国太保",
        "code": "601601",
        "chg": 3.540942
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄金",
    "change": "+6.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+5.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+4.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+3.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+3.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铁矿石",
    "change": "+3.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+2.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+2.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+2.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+2.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "生物柴油/生物航煤",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水电",
    "change": "+2.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+2.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电力体制改革",
    "change": "+2.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+1.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IPv6",
    "change": "+1.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "苹果期货",
    "change": "+1.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+1.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+1.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+1.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 3,
    "hot_rank_chg": 0,
    "stock_cnt": 5761,
    "price": "5.98",
    "change": "2.40",
    "market_id": "17",
    "circulate_market_value": "15060689000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.14
      },
      {
        "name": "工业大麻",
        "change_pct": -0.84
      },
      {
        "name": "中药",
        "change_pct": 0.11
      },
      {
        "name": "强势人气股",
        "change_pct": -0.43
      },
      {
        "name": "保健品",
        "change_pct": -0.94
      },
      {
        "name": "民营医院",
        "change_pct": 0.06
      },
      {
        "name": "医药",
        "change_pct": -0.09
      },
      {
        "name": "化学原料药",
        "change_pct": -0.16
      },
      {
        "name": "流感",
        "change_pct": -0.47
      },
      {
        "name": "振兴东北",
        "change_pct": -0.24
      },
      {
        "name": "食品",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 12,
    "hot_rank_chg": -4,
    "stock_cnt": 5761,
    "price": "6.04",
    "change": "-4.28",
    "market_id": "33",
    "circulate_market_value": "213617490000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.61
      },
      {
        "name": "折叠屏",
        "change_pct": -1.79
      },
      {
        "name": "手机产业链",
        "change_pct": -1.75
      },
      {
        "name": "超高清视频",
        "change_pct": -1.23
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.79
      },
      {
        "name": "电竞",
        "change_pct": -2.67
      },
      {
        "name": "半导体",
        "change_pct": -1.31
      },
      {
        "name": "人工智能",
        "change_pct": -1.33
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.59
      },
      {
        "name": "VR&AR",
        "change_pct": -1.99
      },
      {
        "name": "OLED",
        "change_pct": -2.49
      },
      {
        "name": "京津冀",
        "change_pct": -0.32
      },
      {
        "name": "物联网",
        "change_pct": -0.96
      },
      {
        "name": "指纹识别",
        "change_pct": -1.88
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.78
      },
      {
        "name": "白马股",
        "change_pct": 0.78
      },
      {
        "name": "智能制造",
        "change_pct": -1.83
      },
      {
        "name": "小米概念股",
        "change_pct": -1.08
      },
      {
        "name": "国产芯片",
        "change_pct": -1.03
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.78
      },
      {
        "name": "全息概念",
        "change_pct": -1.49
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.07
      },
      {
        "name": "MicroLED",
        "change_pct": -2.51
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.22
      },
      {
        "name": "智能手表",
        "change_pct": -1.42
      },
      {
        "name": "MiniLED",
        "change_pct": -2.57
      },
      {
        "name": "传感器",
        "change_pct": -1.33
      },
      {
        "name": "大硅片",
        "change_pct": -2.81
      },
      {
        "name": "AI PC",
        "change_pct": -1.52
      },
      {
        "name": "华为产业链",
        "change_pct": -1.44
      },
      {
        "name": "回购",
        "change_pct": -0.39
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.69
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.79
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 13,
    "hot_rank_chg": 21,
    "stock_cnt": 5761,
    "price": "6.95",
    "change": "4.99",
    "market_id": "17",
    "circulate_market_value": "86152819000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.05
      },
      {
        "name": "核电",
        "change_pct": -1.44
      },
      {
        "name": "强势人气股",
        "change_pct": -0.43
      },
      {
        "name": "电力体制改革",
        "change_pct": 2.19
      },
      {
        "name": "水电",
        "change_pct": 2.54
      },
      {
        "name": "火电",
        "change_pct": 2.43
      },
      {
        "name": "光伏",
        "change_pct": -0.64
      },
      {
        "name": "风电",
        "change_pct": -0.93
      },
      {
        "name": "国企改革",
        "change_pct": -0.23
      },
      {
        "name": "算电协同",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 15,
    "hot_rank_chg": 3,
    "stock_cnt": 5761,
    "price": "11.01",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "10275892700.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "风电光伏",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.43
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.97
      },
      {
        "name": "新疆概念",
        "change_pct": 0.19
      },
      {
        "name": "光伏",
        "change_pct": -0.64
      },
      {
        "name": "风电",
        "change_pct": -0.93
      },
      {
        "name": "储能",
        "change_pct": -1.11
      },
      {
        "name": "国企改革",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 21,
    "hot_rank_chg": -1,
    "stock_cnt": 5761,
    "price": "7.94",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "16127127000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "火电",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.05
      },
      {
        "name": "电力体制改革",
        "change_pct": 2.19
      },
      {
        "name": "火电",
        "change_pct": 2.43
      },
      {
        "name": "风电",
        "change_pct": -0.93
      },
      {
        "name": "储能",
        "change_pct": -1.11
      },
      {
        "name": "碳中和",
        "change_pct": 0.2
      },
      {
        "name": "国企改革",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 39,
    "hot_rank_chg": 224,
    "stock_cnt": 5761,
    "price": "5.21",
    "change": "9.92",
    "market_id": "33",
    "circulate_market_value": "6755992600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.11
      },
      {
        "name": "创新药",
        "change_pct": 0.04
      },
      {
        "name": "央企改革",
        "change_pct": 0.05
      },
      {
        "name": "医疗器械",
        "change_pct": -1.06
      },
      {
        "name": "强势人气股",
        "change_pct": -0.43
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.59
      },
      {
        "name": "保健品",
        "change_pct": -0.94
      },
      {
        "name": "民营医院",
        "change_pct": 0.06
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.14
      },
      {
        "name": "医药",
        "change_pct": -0.09
      },
      {
        "name": "化学原料药",
        "change_pct": -0.16
      },
      {
        "name": "海南概念",
        "change_pct": 0.37
      },
      {
        "name": "脑科学",
        "change_pct": -1.21
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.04
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.51
      },
      {
        "name": "食品",
        "change_pct": -0.61
      },
      {
        "name": "国企改革",
        "change_pct": -0.23
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.9
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.74
      },
      {
        "name": "自贸区",
        "change_pct": -0.33
      },
      {
        "name": "合成生物",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 46,
    "hot_rank_chg": 119,
    "stock_cnt": 5761,
    "price": "9.91",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "6741968000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "甲醇",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 2.74
      },
      {
        "name": "雄安新区",
        "change_pct": -0.65
      },
      {
        "name": "煤化工",
        "change_pct": 2.65
      }
    ]
  },
  {
    "code": "000889",
    "name": "中嘉博创",
    "hot_rank": 59,
    "hot_rank_chg": -21,
    "stock_cnt": 5761,
    "price": "3.99",
    "change": "5.00",
    "market_id": "33",
    "circulate_market_value": "3470682100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": -1.18
      },
      {
        "name": "强势人气股",
        "change_pct": -0.43
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -1.4
      },
      {
        "name": "区块链",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 63,
    "hot_rank_chg": 182,
    "stock_cnt": 5761,
    "price": "6.60",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "49337219000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "热电联产",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 2.96
      },
      {
        "name": "央企改革",
        "change_pct": 0.05
      },
      {
        "name": "强势人气股",
        "change_pct": -0.43
      },
      {
        "name": "电力体制改革",
        "change_pct": 2.19
      },
      {
        "name": "火电",
        "change_pct": 2.43
      },
      {
        "name": "振兴东北",
        "change_pct": -0.24
      },
      {
        "name": "国企改革",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 64,
    "hot_rank_chg": -28,
    "stock_cnt": 5761,
    "price": "5.15",
    "change": "-3.74",
    "market_id": "33",
    "circulate_market_value": "103592148000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.79
      },
      {
        "name": "手机产业链",
        "change_pct": -1.75
      },
      {
        "name": "超高清视频",
        "change_pct": -1.23
      },
      {
        "name": "电竞",
        "change_pct": -2.67
      },
      {
        "name": "半导体",
        "change_pct": -1.31
      },
      {
        "name": "OLED",
        "change_pct": -2.49
      },
      {
        "name": "光伏",
        "change_pct": -0.64
      },
      {
        "name": "黑色家电",
        "change_pct": -1.39
      },
      {
        "name": "家电",
        "change_pct": -1.66
      },
      {
        "name": "智能制造",
        "change_pct": -1.83
      },
      {
        "name": "工业互联网",
        "change_pct": -1.35
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.08
      },
      {
        "name": "国产芯片",
        "change_pct": -1.03
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.93
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.78
      },
      {
        "name": "MicroLED",
        "change_pct": -2.51
      },
      {
        "name": "MiniLED",
        "change_pct": -2.57
      },
      {
        "name": "华为产业链",
        "change_pct": -1.44
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.79
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 67,
    "hot_rank_chg": 11,
    "stock_cnt": 5761,
    "price": "5.17",
    "change": "5.51",
    "market_id": "33",
    "circulate_market_value": "5340278100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.61
      },
      {
        "name": "锂电池",
        "change_pct": -2.05
      },
      {
        "name": "强势人气股",
        "change_pct": -0.43
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -3.39
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.42
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.64
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.7
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 76,
    "hot_rank_chg": 0,
    "stock_cnt": 5761,
    "price": "12.12",
    "change": "8.89",
    "market_id": "33",
    "circulate_market_value": "7068514600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 1.57
      },
      {
        "name": "一带一路",
        "change_pct": -0.5
      },
      {
        "name": "天然气",
        "change_pct": 0.74
      },
      {
        "name": "油气改革",
        "change_pct": 1.34
      },
      {
        "name": "页岩气",
        "change_pct": 0.74
      },
      {
        "name": "深地经济",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 81,
    "hot_rank_chg": -25,
    "stock_cnt": 5761,
    "price": "6.92",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "8712477400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -1.33
      },
      {
        "name": "游戏",
        "change_pct": -2.68
      },
      {
        "name": "智能音箱",
        "change_pct": -0.81
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.08
      },
      {
        "name": "数字经济",
        "change_pct": -1.17
      },
      {
        "name": "百度概念股",
        "change_pct": -1.39
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.93
      },
      {
        "name": "拼多多概念股",
        "change_pct": -2.03
      },
      {
        "name": "传媒",
        "change_pct": -1.59
      },
      {
        "name": "全息概念",
        "change_pct": -1.49
      },
      {
        "name": "NFT",
        "change_pct": -1.99
      },
      {
        "name": "元宇宙",
        "change_pct": -2.19
      },
      {
        "name": "web3.0",
        "change_pct": -1.62
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.53
      },
      {
        "name": "数字人民币",
        "change_pct": -0.94
      },
      {
        "name": "智慧政务",
        "change_pct": -0.7
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.26
      },
      {
        "name": "盲盒",
        "change_pct": -1.7
      },
      {
        "name": "AI营销",
        "change_pct": -2.07
      },
      {
        "name": "华为产业链",
        "change_pct": -1.44
      },
      {
        "name": "供应链金融",
        "change_pct": -1.31
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.95
      },
      {
        "name": "区块链",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 83,
    "hot_rank_chg": 99,
    "stock_cnt": 5761,
    "price": "11.32",
    "change": "-1.48",
    "market_id": "17",
    "circulate_market_value": "14447215000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.58
      },
      {
        "name": "强势人气股",
        "change_pct": -0.43
      },
      {
        "name": "智能制造",
        "change_pct": -1.83
      },
      {
        "name": "工业互联网",
        "change_pct": -1.35
      },
      {
        "name": "培育钻石",
        "change_pct": -1.88
      },
      {
        "name": "金刚线",
        "change_pct": -0.37
      },
      {
        "name": "国资入股",
        "change_pct": -0.9
      },
      {
        "name": "深地经济",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "601012",
    "name": "隆基绿能",
    "hot_rank": 84,
    "hot_rank_chg": 108,
    "stock_cnt": 5761,
    "price": "12.57",
    "change": "5.37",
    "market_id": "17",
    "circulate_market_value": "95256234000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.58
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.61
      },
      {
        "name": "光伏",
        "change_pct": -0.64
      },
      {
        "name": "白马股",
        "change_pct": 0.78
      },
      {
        "name": "碳中和",
        "change_pct": 0.2
      },
      {
        "name": "颗粒硅",
        "change_pct": 0.53
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.64
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.22
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.55
      }
    ]
  },
  {
    "code": "600821",
    "name": "金开新能",
    "hot_rank": 85,
    "hot_rank_chg": 9,
    "stock_cnt": 5761,
    "price": "6.96",
    "change": "3.42",
    "market_id": "17",
    "circulate_market_value": "13692582000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -1.14
      },
      {
        "name": "天津国企改革",
        "change_pct": 0.14
      },
      {
        "name": "京津冀",
        "change_pct": -0.32
      },
      {
        "name": "光伏",
        "change_pct": -0.64
      },
      {
        "name": "风电",
        "change_pct": -0.93
      },
      {
        "name": "储能",
        "change_pct": -1.11
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.1
      },
      {
        "name": "国企改革",
        "change_pct": -0.23
      },
      {
        "name": "算电协同",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 86,
    "hot_rank_chg": 92,
    "stock_cnt": 5761,
    "price": "6.96",
    "change": "2.65",
    "market_id": "33",
    "circulate_market_value": "4563713900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.14
      },
      {
        "name": "新零售",
        "change_pct": -0.87
      },
      {
        "name": "农业种植",
        "change_pct": 0.18
      },
      {
        "name": "冷链",
        "change_pct": -1.39
      },
      {
        "name": "大农业",
        "change_pct": -0.06
      },
      {
        "name": "预制菜",
        "change_pct": -0.24
      },
      {
        "name": "国企改革",
        "change_pct": -0.23
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.3
      },
      {
        "name": "免税店概念",
        "change_pct": 0.2
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "601600",
    "name": "中国铝业",
    "hot_rank": 90,
    "hot_rank_chg": 77,
    "stock_cnt": 5761,
    "price": "9.43",
    "change": "2.95",
    "market_id": "17",
    "circulate_market_value": "124507495000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -0.72
      },
      {
        "name": "稀土磁材",
        "change_pct": -1.31
      },
      {
        "name": "央企改革",
        "change_pct": 0.05
      },
      {
        "name": "有色金属",
        "change_pct": -0.2
      },
      {
        "name": "白马股",
        "change_pct": 0.78
      },
      {
        "name": "中字头",
        "change_pct": 0.55
      },
      {
        "name": "国企改革",
        "change_pct": -0.23
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000938", "name": "紫光股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5761, "price": "44.90", "change": "8.30", "market_id": "33", "circulate_market_value": "128417263000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5761, "price": "457.20", "change": "-10.00", "market_id": "33", "circulate_market_value": "75469094000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5761, "price": "5.98", "change": "2.40", "market_id": "17", "circulate_market_value": "15060689000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.14}, {"name": "工业大麻", "change_pct": -0.84}, {"name": "中药", "change_pct": 0.11}, {"name": "强势人气股", "change_pct": -0.43}, {"name": "保健品", "change_pct": -0.94}, {"name": "民营医院", "change_pct": 0.06}, {"name": "医药", "change_pct": -0.09}, {"name": "化学原料药", "change_pct": -0.16}, {"name": "流感", "change_pct": -0.47}, {"name": "振兴东北", "change_pct": -0.24}, {"name": "食品", "change_pct": -0.61}]}, {"code": "600584", "name": "长电科技", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5761, "price": "85.78", "change": "1.29", "market_id": "17", "circulate_market_value": "153495980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 5, "hot_rank_chg": 8, "stock_cnt": 5761, "price": "74.90", "change": "8.08", "market_id": "33", "circulate_market_value": "113657171000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 6, "hot_rank_chg": 4, "stock_cnt": 5761, "price": "18.42", "change": "0.38", "market_id": "33", "circulate_market_value": "61203245000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 7, "hot_rank_chg": 15, "stock_cnt": 5761, "price": "40.22", "change": "4.06", "market_id": "33", "circulate_market_value": "63312537000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5761, "price": "34.59", "change": "9.43", "market_id": "33", "circulate_market_value": "26198989000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5761, "price": "90.47", "change": "2.04", "market_id": "33", "circulate_market_value": "132704273000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 10, "hot_rank_chg": 32, "stock_cnt": 5761, "price": "14.92", "change": "10.03", "market_id": "17", "circulate_market_value": "21972785000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "绿色电力"}, {"code": "002384", "name": "东山精密", "hot_rank": 11, "hot_rank_chg": -2, "stock_cnt": 5761, "price": "217.50", "change": "-5.84", "market_id": "33", "circulate_market_value": "301524970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 12, "hot_rank_chg": -4, "stock_cnt": 5761, "price": "6.04", "change": "-4.28", "market_id": "33", "circulate_market_value": "213617490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.61}, {"name": "折叠屏", "change_pct": -1.79}, {"name": "手机产业链", "change_pct": -1.75}, {"name": "超高清视频", "change_pct": -1.23}, {"name": "苹果产业链", "change_pct": -1.79}, {"name": "电竞", "change_pct": -2.67}, {"name": "半导体", "change_pct": -1.31}, {"name": "人工智能", "change_pct": -1.33}, {"name": "互联网医疗", "change_pct": -0.59}, {"name": "VR&AR", "change_pct": -1.99}, {"name": "OLED", "change_pct": -2.49}, {"name": "京津冀", "change_pct": -0.32}, {"name": "物联网", "change_pct": -0.96}, {"name": "指纹识别", "change_pct": -1.88}, {"name": "汽车零部件", "change_pct": -1.78}, {"name": "白马股", "change_pct": 0.78}, {"name": "智能制造", "change_pct": -1.83}, {"name": "小米概念股", "change_pct": -1.08}, {"name": "国产芯片", "change_pct": -1.03}, {"name": "液晶面板/LCD", "change_pct": -2.78}, {"name": "全息概念", "change_pct": -1.49}, {"name": "理想汽车概念股", "change_pct": -2.07}, {"name": "MicroLED", "change_pct": -2.51}, {"name": "钙钛矿电池", "change_pct": -1.22}, {"name": "智能手表", "change_pct": -1.42}, {"name": "MiniLED", "change_pct": -2.57}, {"name": "传感器", "change_pct": -1.33}, {"name": "大硅片", "change_pct": -2.81}, {"name": "AI PC", "change_pct": -1.52}, {"name": "华为产业链", "change_pct": -1.44}, {"name": "回购", "change_pct": -0.39}, {"name": "智能眼镜/MR头显", "change_pct": -1.69}, {"name": "玻璃基板封装", "change_pct": -1.79}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 13, "hot_rank_chg": 21, "stock_cnt": 5761, "price": "6.95", "change": "4.99", "market_id": "17", "circulate_market_value": "86152819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.05}, {"name": "核电", "change_pct": -1.44}, {"name": "强势人气股", "change_pct": -0.43}, {"name": "电力体制改革", "change_pct": 2.19}, {"name": "水电", "change_pct": 2.54}, {"name": "火电", "change_pct": 2.43}, {"name": "光伏", "change_pct": -0.64}, {"name": "风电", "change_pct": -0.93}, {"name": "国企改革", "change_pct": -0.23}, {"name": "算电协同", "change_pct": -0.36}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 14, "hot_rank_chg": -8, "stock_cnt": 5761, "price": "470.00", "change": "-1.16", "market_id": "17", "circulate_market_value": "314191210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 15, "hot_rank_chg": 3, "stock_cnt": 5761, "price": "11.01", "change": "9.99", "market_id": "33", "circulate_market_value": "10275892700.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "风电光伏", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.43}, {"name": "新疆国企改革", "change_pct": 0.97}, {"name": "新疆概念", "change_pct": 0.19}, {"name": "光伏", "change_pct": -0.64}, {"name": "风电", "change_pct": -0.93}, {"name": "储能", "change_pct": -1.11}, {"name": "国企改革", "change_pct": -0.23}]}, {"code": "600667", "name": "太极实业", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5761, "price": "16.69", "change": "0.00", "market_id": "17", "circulate_market_value": "34907839000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 17, "hot_rank_chg": -3, "stock_cnt": 5761, "price": "16.13", "change": "10.03", "market_id": "33", "circulate_market_value": "11214592800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "算力租赁"}, {"code": "603629", "name": "利通电子", "hot_rank": 18, "hot_rank_chg": 11, "stock_cnt": 5761, "price": "118.34", "change": "10.00", "market_id": "17", "circulate_market_value": "42688007000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力租赁"}, {"code": "603118", "name": "共进股份", "hot_rank": 19, "hot_rank_chg": 2, "stock_cnt": 5761, "price": "16.42", "change": "9.98", "market_id": "17", "circulate_market_value": "12927078700.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "数据中心交换机"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 20, "hot_rank_chg": 44, "stock_cnt": 5761, "price": "32.20", "change": "6.59", "market_id": "17", "circulate_market_value": "663377730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 21, "hot_rank_chg": -1, "stock_cnt": 5761, "price": "7.94", "change": "9.97", "market_id": "17", "circulate_market_value": "16127127000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "火电", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.05}, {"name": "电力体制改革", "change_pct": 2.19}, {"name": "火电", "change_pct": 2.43}, {"name": "风电", "change_pct": -0.93}, {"name": "储能", "change_pct": -1.11}, {"name": "碳中和", "change_pct": 0.2}, {"name": "国企改革", "change_pct": -0.23}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 22, "hot_rank_chg": -3, "stock_cnt": 5761, "price": "55.12", "change": "-8.07", "market_id": "17", "circulate_market_value": "135244980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 23, "hot_rank_chg": -8, "stock_cnt": 5761, "price": "81.64", "change": "2.37", "market_id": "33", "circulate_market_value": "37984832000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 24, "hot_rank_chg": 6, "stock_cnt": 5761, "price": "29.23", "change": "4.54", "market_id": "17", "circulate_market_value": "9848170100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 25, "hot_rank_chg": 0, "stock_cnt": 5761, "price": "40.64", "change": "2.99", "market_id": "17", "circulate_market_value": "34403927000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 26, "hot_rank_chg": 46, "stock_cnt": 5761, "price": "126.00", "change": "13.66", "market_id": "33", "circulate_market_value": "140318180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 27, "hot_rank_chg": -15, "stock_cnt": 5761, "price": "1060.80", "change": "-6.67", "market_id": "33", "circulate_market_value": "1177424120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 28, "hot_rank_chg": 27, "stock_cnt": 5761, "price": "37.50", "change": "7.51", "market_id": "33", "circulate_market_value": "151035800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 29, "hot_rank_chg": -1, "stock_cnt": 5761, "price": "102.15", "change": "4.36", "market_id": "17", "circulate_market_value": "149451000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 30, "hot_rank_chg": 13, "stock_cnt": 5761, "price": "191.90", "change": "2.62", "market_id": "33", "circulate_market_value": "149674350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 31, "hot_rank_chg": 94, "stock_cnt": 5761, "price": "19.61", "change": "4.98", "market_id": "17", "circulate_market_value": "342407110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 32, "hot_rank_chg": 0, "stock_cnt": 5761, "price": "32.50", "change": "-6.15", "market_id": "17", "circulate_market_value": "110920865000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 33, "hot_rank_chg": -7, "stock_cnt": 5761, "price": "508.80", "change": "-7.79", "market_id": "33", "circulate_market_value": "638158920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 34, "hot_rank_chg": 10, "stock_cnt": 5761, "price": "158.71", "change": "20.00", "market_id": "33", "circulate_market_value": "4893247200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体设备"}, {"code": "601869", "name": "长飞光纤", "hot_rank": 35, "hot_rank_chg": 32, "stock_cnt": 5761, "price": "366.05", "change": "-9.92", "market_id": "17", "circulate_market_value": "148740140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 36, "hot_rank_chg": -13, "stock_cnt": 5761, "price": "60.23", "change": "0.55", "market_id": "33", "circulate_market_value": "51416461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 37, "hot_rank_chg": 12, "stock_cnt": 5761, "price": "60.71", "change": "-0.44", "market_id": "17", "circulate_market_value": "1204734830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 39, "hot_rank_chg": 224, "stock_cnt": 5761, "price": "5.21", "change": "9.92", "market_id": "33", "circulate_market_value": "6755992600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 0.11}, {"name": "创新药", "change_pct": 0.04}, {"name": "央企改革", "change_pct": 0.05}, {"name": "医疗器械", "change_pct": -1.06}, {"name": "强势人气股", "change_pct": -0.43}, {"name": "互联网医疗", "change_pct": -0.59}, {"name": "保健品", "change_pct": -0.94}, {"name": "民营医院", "change_pct": 0.06}, {"name": "CAR-T疗法", "change_pct": -0.14}, {"name": "医药", "change_pct": -0.09}, {"name": "化学原料药", "change_pct": -0.16}, {"name": "海南概念", "change_pct": 0.37}, {"name": "脑科学", "change_pct": -1.21}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -0.04}, {"name": "海南自由贸易港", "change_pct": 0.51}, {"name": "食品", "change_pct": -0.61}, {"name": "国企改革", "change_pct": -0.23}, {"name": "医疗信息化", "change_pct": -0.9}, {"name": "新冠病毒防治", "change_pct": -0.74}, {"name": "自贸区", "change_pct": -0.33}, {"name": "合成生物", "change_pct": -0.82}]}, {"code": "002371", "name": "北方华创", "hot_rank": 40, "hot_rank_chg": -13, "stock_cnt": 5761, "price": "764.00", "change": "2.60", "market_id": "33", "circulate_market_value": "553983920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 41, "hot_rank_chg": 27, "stock_cnt": 5761, "price": "32.99", "change": "-1.32", "market_id": "33", "circulate_market_value": "25811529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 42, "hot_rank_chg": -1, "stock_cnt": 5761, "price": "81.93", "change": "0.00", "market_id": "17", "circulate_market_value": "34113006000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 43, "hot_rank_chg": 5, "stock_cnt": 5761, "price": "149.86", "change": "4.40", "market_id": "33", "circulate_market_value": "47733819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 44, "hot_rank_chg": -4, "stock_cnt": 5761, "price": "95.36", "change": "-11.33", "market_id": "33", "circulate_market_value": "79054922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 45, "hot_rank_chg": -12, "stock_cnt": 5761, "price": "113.51", "change": "0.32", "market_id": "33", "circulate_market_value": "114075922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 46, "hot_rank_chg": 119, "stock_cnt": 5761, "price": "9.91", "change": "9.99", "market_id": "17", "circulate_market_value": "6741968000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "甲醇", "xgb_concepts": [{"name": "甲醇", "change_pct": 2.74}, {"name": "雄安新区", "change_pct": -0.65}, {"name": "煤化工", "change_pct": 2.65}]}, {"code": "002167", "name": "东方锆业", "hot_rank": 47, "hot_rank_chg": 14, "stock_cnt": 5761, "price": "17.10", "change": "1.48", "market_id": "33", "circulate_market_value": "12973991700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 48, "hot_rank_chg": 2, "stock_cnt": 5761, "price": "109.95", "change": "5.64", "market_id": "33", "circulate_market_value": "174548720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 49, "hot_rank_chg": 9, "stock_cnt": 5761, "price": "48.06", "change": "-2.16", "market_id": "17", "circulate_market_value": "30294766000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 50, "hot_rank_chg": 25, "stock_cnt": 5761, "price": "38.70", "change": "-10.00", "market_id": "17", "circulate_market_value": "153700420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 51, "hot_rank_chg": -6, "stock_cnt": 5761, "price": "33.19", "change": "0.97", "market_id": "17", "circulate_market_value": "55230543000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 52, "hot_rank_chg": 27, "stock_cnt": 5761, "price": "41.30", "change": "-6.81", "market_id": "33", "circulate_market_value": "47784641000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 53, "hot_rank_chg": 122, "stock_cnt": 5761, "price": "15.17", "change": "5.79", "market_id": "33", "circulate_market_value": "23146103000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 54, "hot_rank_chg": 16, "stock_cnt": 5761, "price": "29.78", "change": "-1.16", "market_id": "33", "circulate_market_value": "32125692000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 55, "hot_rank_chg": 72, "stock_cnt": 5761, "price": "15.27", "change": "1.87", "market_id": "33", "circulate_market_value": "49254757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 56, "hot_rank_chg": 25, "stock_cnt": 5761, "price": "125.90", "change": "-0.43", "market_id": "17", "circulate_market_value": "311385980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 57, "hot_rank_chg": -5, "stock_cnt": 5761, "price": "126.00", "change": "-7.13", "market_id": "17", "circulate_market_value": "301707190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 58, "hot_rank_chg": 59, "stock_cnt": 5761, "price": "228.86", "change": "10.00", "market_id": "17", "circulate_market_value": "96783395000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "端侧AI"}, {"code": "000889", "name": "中嘉博创", "hot_rank": 59, "hot_rank_chg": -21, "stock_cnt": 5761, "price": "3.99", "change": "5.00", "market_id": "33", "circulate_market_value": "3470682100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "金融科技", "change_pct": -1.18}, {"name": "强势人气股", "change_pct": -0.43}, {"name": "5G消息/RCS", "change_pct": -1.4}, {"name": "区块链", "change_pct": -1.54}]}, {"code": "603296", "name": "华勤技术", "hot_rank": 60, "hot_rank_chg": 36, "stock_cnt": 5761, "price": "87.67", "change": "10.00", "market_id": "17", "circulate_market_value": "70012916000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超节点"}, {"code": "002463", "name": "沪电股份", "hot_rank": 61, "hot_rank_chg": 22, "stock_cnt": 5761, "price": "114.23", "change": "-6.83", "market_id": "33", "circulate_market_value": "219642640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 62, "hot_rank_chg": 80, "stock_cnt": 5761, "price": "40.03", "change": "10.00", "market_id": "17", "circulate_market_value": "5230848200.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "控制权拟变更"}, {"code": "600726", "name": "华电能源", "hot_rank": 63, "hot_rank_chg": 182, "stock_cnt": 5761, "price": "6.60", "change": "10.00", "market_id": "17", "circulate_market_value": "49337219000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "热电联产", "xgb_concepts": [{"name": "煤炭", "change_pct": 2.96}, {"name": "央企改革", "change_pct": 0.05}, {"name": "强势人气股", "change_pct": -0.43}, {"name": "电力体制改革", "change_pct": 2.19}, {"name": "火电", "change_pct": 2.43}, {"name": "振兴东北", "change_pct": -0.24}, {"name": "国企改革", "change_pct": -0.23}]}, {"code": "000100", "name": "TCL科技", "hot_rank": 64, "hot_rank_chg": -28, "stock_cnt": 5761, "price": "5.15", "change": "-3.74", "market_id": "33", "circulate_market_value": "103592148000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.79}, {"name": "手机产业链", "change_pct": -1.75}, {"name": "超高清视频", "change_pct": -1.23}, {"name": "电竞", "change_pct": -2.67}, {"name": "半导体", "change_pct": -1.31}, {"name": "OLED", "change_pct": -2.49}, {"name": "光伏", "change_pct": -0.64}, {"name": "黑色家电", "change_pct": -1.39}, {"name": "家电", "change_pct": -1.66}, {"name": "智能制造", "change_pct": -1.83}, {"name": "工业互联网", "change_pct": -1.35}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.08}, {"name": "国产芯片", "change_pct": -1.03}, {"name": "腾讯概念股", "change_pct": -0.93}, {"name": "液晶面板/LCD", "change_pct": -2.78}, {"name": "MicroLED", "change_pct": -2.51}, {"name": "MiniLED", "change_pct": -2.57}, {"name": "华为产业链", "change_pct": -1.44}, {"name": "玻璃基板封装", "change_pct": -1.79}]}, {"code": "603137", "name": "恒尚节能", "hot_rank": 65, "hot_rank_chg": 17, "stock_cnt": 5761, "price": "24.67", "change": "5.43", "market_id": "17", "circulate_market_value": "4512965300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 66, "hot_rank_chg": 91, "stock_cnt": 5761, "price": "59.61", "change": "-2.74", "market_id": "17", "circulate_market_value": "70488178000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 67, "hot_rank_chg": 11, "stock_cnt": 5761, "price": "5.17", "change": "5.51", "market_id": "33", "circulate_market_value": "5340278100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.61}, {"name": "锂电池", "change_pct": -2.05}, {"name": "强势人气股", "change_pct": -0.43}, {"name": "铜箔/覆铜板", "change_pct": -3.39}, {"name": "粤港澳大湾区", "change_pct": -0.42}, {"name": "新能源汽车", "change_pct": -1.64}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.7}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 68, "hot_rank_chg": 58, "stock_cnt": 5761, "price": "13.36", "change": "4.38", "market_id": "33", "circulate_market_value": "14193715000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 69, "hot_rank_chg": 287, "stock_cnt": 5761, "price": "83.82", "change": "8.86", "market_id": "17", "circulate_market_value": "6626126700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 70, "hot_rank_chg": 16, "stock_cnt": 5761, "price": "75.20", "change": "1.65", "market_id": "33", "circulate_market_value": "49108279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 71, "hot_rank_chg": 44, "stock_cnt": 5761, "price": "38.22", "change": "7.72", "market_id": "17", "circulate_market_value": "63594694000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 72, "hot_rank_chg": -37, "stock_cnt": 5761, "price": "223.00", "change": "1.55", "market_id": "17", "circulate_market_value": "255282490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 73, "hot_rank_chg": 16, "stock_cnt": 5761, "price": "240.40", "change": "0.05", "market_id": "33", "circulate_market_value": "207992860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 74, "hot_rank_chg": 10, "stock_cnt": 5761, "price": "104.93", "change": "4.00", "market_id": "33", "circulate_market_value": "100389404000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 75, "hot_rank_chg": 62, "stock_cnt": 5761, "price": "28.73", "change": "2.64", "market_id": "33", "circulate_market_value": "32927610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 76, "hot_rank_chg": 0, "stock_cnt": 5761, "price": "12.12", "change": "8.89", "market_id": "33", "circulate_market_value": "7068514600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 1.57}, {"name": "一带一路", "change_pct": -0.5}, {"name": "天然气", "change_pct": 0.74}, {"name": "油气改革", "change_pct": 1.34}, {"name": "页岩气", "change_pct": 0.74}, {"name": "深地经济", "change_pct": 0.58}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 77, "hot_rank_chg": 63, "stock_cnt": 5761, "price": "35.58", "change": "-7.05", "market_id": "17", "circulate_market_value": "52017775000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 78, "hot_rank_chg": 226, "stock_cnt": 5761, "price": "13.95", "change": "2.42", "market_id": "33", "circulate_market_value": "22168239000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 79, "hot_rank_chg": -42, "stock_cnt": 5761, "price": "388.45", "change": "-7.92", "market_id": "33", "circulate_market_value": "109485367000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 80, "hot_rank_chg": 23, "stock_cnt": 5761, "price": "91.57", "change": "-2.90", "market_id": "33", "circulate_market_value": "319269200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000676", "name": "智度股份", "hot_rank": 81, "hot_rank_chg": -25, "stock_cnt": 5761, "price": "6.92", "change": "0.00", "market_id": "33", "circulate_market_value": "8712477400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -1.33}, {"name": "游戏", "change_pct": -2.68}, {"name": "智能音箱", "change_pct": -0.81}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.08}, {"name": "数字经济", "change_pct": -1.17}, {"name": "百度概念股", "change_pct": -1.39}, {"name": "腾讯概念股", "change_pct": -0.93}, {"name": "拼多多概念股", "change_pct": -2.03}, {"name": "传媒", "change_pct": -1.59}, {"name": "全息概念", "change_pct": -1.49}, {"name": "NFT", "change_pct": -1.99}, {"name": "元宇宙", "change_pct": -2.19}, {"name": "web3.0", "change_pct": -1.62}, {"name": "字节跳动概念股", "change_pct": -1.53}, {"name": "数字人民币", "change_pct": -0.94}, {"name": "智慧政务", "change_pct": -0.7}, {"name": "华为鸿蒙", "change_pct": -1.26}, {"name": "盲盒", "change_pct": -1.7}, {"name": "AI营销", "change_pct": -2.07}, {"name": "华为产业链", "change_pct": -1.44}, {"name": "供应链金融", "change_pct": -1.31}, {"name": "ChatGPT", "change_pct": -1.95}, {"name": "区块链", "change_pct": -1.54}]}, {"code": "600602", "name": "云赛智联", "hot_rank": 82, "hot_rank_chg": 19, "stock_cnt": 5761, "price": "20.27", "change": "5.90", "market_id": "17", "circulate_market_value": "21776122000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 83, "hot_rank_chg": 99, "stock_cnt": 5761, "price": "11.32", "change": "-1.48", "market_id": "17", "circulate_market_value": "14447215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.58}, {"name": "强势人气股", "change_pct": -0.43}, {"name": "智能制造", "change_pct": -1.83}, {"name": "工业互联网", "change_pct": -1.35}, {"name": "培育钻石", "change_pct": -1.88}, {"name": "金刚线", "change_pct": -0.37}, {"name": "国资入股", "change_pct": -0.9}, {"name": "深地经济", "change_pct": 0.58}]}, {"code": "601012", "name": "隆基绿能", "hot_rank": 84, "hot_rank_chg": 108, "stock_cnt": 5761, "price": "12.57", "change": "5.37", "market_id": "17", "circulate_market_value": "95256234000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.58}, {"name": "氢能源/燃料电池", "change_pct": -1.61}, {"name": "光伏", "change_pct": -0.64}, {"name": "白马股", "change_pct": 0.78}, {"name": "碳中和", "change_pct": 0.2}, {"name": "颗粒硅", "change_pct": 0.53}, {"name": "BIPV概念", "change_pct": -0.64}, {"name": "钙钛矿电池", "change_pct": -1.22}, {"name": "异质结电池HJT", "change_pct": -1.55}]}, {"code": "600821", "name": "金开新能", "hot_rank": 85, "hot_rank_chg": 9, "stock_cnt": 5761, "price": "6.96", "change": "3.42", "market_id": "17", "circulate_market_value": "13692582000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -1.14}, {"name": "天津国企改革", "change_pct": 0.14}, {"name": "京津冀", "change_pct": -0.32}, {"name": "光伏", "change_pct": -0.64}, {"name": "风电", "change_pct": -0.93}, {"name": "储能", "change_pct": -1.11}, {"name": "东数西算/算力", "change_pct": 0.1}, {"name": "国企改革", "change_pct": -0.23}, {"name": "算电协同", "change_pct": -0.36}]}, {"code": "000759", "name": "中百集团", "hot_rank": 86, "hot_rank_chg": 92, "stock_cnt": 5761, "price": "6.96", "change": "2.65", "market_id": "33", "circulate_market_value": "4563713900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.14}, {"name": "新零售", "change_pct": -0.87}, {"name": "农业种植", "change_pct": 0.18}, {"name": "冷链", "change_pct": -1.39}, {"name": "大农业", "change_pct": -0.06}, {"name": "预制菜", "change_pct": -0.24}, {"name": "国企改革", "change_pct": -0.23}, {"name": "可降解塑料", "change_pct": -0.3}, {"name": "免税店概念", "change_pct": 0.2}, {"name": "湖北国企改革", "change_pct": -0.8}]}, {"code": "301520", "name": "万邦医药", "hot_rank": 87, "hot_rank_chg": 8, "stock_cnt": 5761, "price": "52.99", "change": "12.98", "market_id": "33", "circulate_market_value": "1732690500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000426", "name": "兴业银锡", "hot_rank": 88, "hot_rank_chg": 110, "stock_cnt": 5761, "price": "31.73", "change": "7.12", "market_id": "33", "circulate_market_value": "56327269000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 89, "hot_rank_chg": 17, "stock_cnt": 5761, "price": "28.02", "change": "-6.19", "market_id": "33", "circulate_market_value": "53253746000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601600", "name": "中国铝业", "hot_rank": 90, "hot_rank_chg": 77, "stock_cnt": 5761, "price": "9.43", "change": "2.95", "market_id": "17", "circulate_market_value": "124507495000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -0.72}, {"name": "稀土磁材", "change_pct": -1.31}, {"name": "央企改革", "change_pct": 0.05}, {"name": "有色金属", "change_pct": -0.2}, {"name": "白马股", "change_pct": 0.78}, {"name": "中字头", "change_pct": 0.55}, {"name": "国企改革", "change_pct": -0.23}]}, {"code": "002837", "name": "英维克", "hot_rank": 91, "hot_rank_chg": 48, "stock_cnt": 5761, "price": "60.51", "change": "0.87", "market_id": "33", "circulate_market_value": "68404022000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 92, "hot_rank_chg": 131, "stock_cnt": 5761, "price": "43.05", "change": "5.51", "market_id": "17", "circulate_market_value": "89339401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600246", "name": "万通发展", "hot_rank": 93, "hot_rank_chg": 129, "stock_cnt": 5761, "price": "15.66", "change": "4.05", "market_id": "17", "circulate_market_value": "29603860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 94, "hot_rank_chg": -17, "stock_cnt": 5761, "price": "217.63", "change": "-5.79", "market_id": "33", "circulate_market_value": "236865890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 95, "hot_rank_chg": 29, "stock_cnt": 5761, "price": "66.45", "change": "-8.21", "market_id": "33", "circulate_market_value": "48130759000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 96, "hot_rank_chg": 138, "stock_cnt": 5761, "price": "35.01", "change": "7.13", "market_id": "33", "circulate_market_value": "53142744000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 97, "hot_rank_chg": -38, "stock_cnt": 5761, "price": "166.60", "change": "-5.87", "market_id": "33", "circulate_market_value": "74975959000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688347", "name": "华虹宏力", "hot_rank": 98, "hot_rank_chg": -74, "stock_cnt": 5761, "price": "390.06", "change": "-1.94", "market_id": "17", "circulate_market_value": "159046970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300604", "name": "长川科技", "hot_rank": 99, "hot_rank_chg": -82, "stock_cnt": 5761, "price": "309.05", "change": "-2.81", "market_id": "33", "circulate_market_value": "151271150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 100, "hot_rank_chg": 11, "stock_cnt": 5761, "price": "38.36", "change": "0.68", "market_id": "33", "circulate_market_value": "141593610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "605196", "name": "华通线缆", "price": 29.63, "change_pct": 9.99, "reason": "1、公司主营电线电缆与油服装备，产品涵盖潜油泵电缆、连续油管等；\n2、2026年1月公司安哥拉电解铝项目正式投产，标志公司形成“线缆+油服+铝业”产业布局，该项目是电线电缆业务的向上延伸", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 5.19, "first_limit_up": 1784687665, "break_limit_up_times": 2}, {"code": "301583", "name": "托伦斯", "price": 158.71, "change_pct": 20.0, "reason": "公司产品包括静电卡盘基体、多管式加热反射罩、气体分布盘等高端半导体设备金属零部件\n", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 54.0, "first_limit_up": 1784684064, "break_limit_up_times": 40}, {"code": "002953", "name": "日丰股份", "price": 9.86, "change_pct": 10.04, "reason": "公司主营特种装备、风电、储能、充电枪等橡套电缆", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.54, "first_limit_up": 1784686005, "break_limit_up_times": 3}, {"code": "000839", "name": "国安股份", "price": 2.64, "change_pct": 10.0, "reason": "公司下属子公司鸿联九五通过内容审核与数据标注深度融合的审标一体模式，以成熟的内容审核能力带动数据标注业务规模提升", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.39, "first_limit_up": 1784698539, "break_limit_up_times": 3}, {"code": "603162", "name": "海通发展", "price": 11.28, "change_pct": 10.05, "reason": "1、公司上半年净利预增约500%，一方面，得益于上半年公司顺应市场变化趋势，适时扩大运力规模，优化全球航线布局，提高运营效率，降低运营成本；另一方面，全球干散货航运市场回暖，市场运价中枢上移，进一步增厚公司经营收益\n2、公司地处福建福州，主要从事国内沿海以及国际远洋的干散货运输业务，公司运营的航线遍布30余个国家和地区的200余个港口，为客户提供矿石、煤炭、化肥等多种货物的海上运输", "plates": ["航运", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 7.17, "first_limit_up": 1784684319, "break_limit_up_times": 11}, {"code": "600644", "name": "乐山电力", "price": 10.6, "change_pct": 9.96, "reason": "公司目前主要有电力、天然气、自来水、综合能源、宾馆等五大业务；参股子公司四川晟天新能源发展有限公司主营业务为太阳能光伏电站，项目包括牧光互补、渔光互补、农光互补等光伏复合电站以及分布式光伏电站等多种类型", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 15.6, "first_limit_up": 1784702854, "break_limit_up_times": 0}, {"code": "000975", "name": "山金国际", "price": 22.52, "change_pct": 10.01, "reason": "公司矿产金产量在中国黄金上市企业中排名第五，拥有的玉龙矿业是目前国内矿产银（含量银）最大的单体矿山之一", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 3.71, "first_limit_up": 1784685303, "break_limit_up_times": 13}, {"code": "002900", "name": "哈三联", "price": 11, "change_pct": 10.0, "reason": "公司美妆系列聚焦日常多护肤场景，打造精细化面膜矩阵；“哈三联”II 类医疗器械敷料系列搭载重组胶原蛋白与透明质酸钠两大核心成分，深耕问题性肌肤赛道", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.69, "first_limit_up": 1784684139, "break_limit_up_times": 1}, {"code": "600744", "name": "华银电力", "price": 7.94, "change_pct": 9.97, "reason": "湖南省火电龙头", "plates": ["智能电网"], "limit_up_days": 4, "turnover_ratio": 18.97, "first_limit_up": 1784702460, "break_limit_up_times": 1}, {"code": "000838", "name": "*ST发展", "price": 2.31, "change_pct": 10.0, "reason": "重庆地区优质地产商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.59, "first_limit_up": 1784702820, "break_limit_up_times": 1}, {"code": "603580", "name": "艾艾精工", "price": 40.03, "change_pct": 10.0, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 12.61, "first_limit_up": 1784684775, "break_limit_up_times": 15}, {"code": "600403", "name": "大有能源", "price": 5.7, "change_pct": 10.04, "reason": "河南能源集团旗下煤炭企业；此前河南省委、省政府决定对间接控股股东河南能源集团和中国平煤神马控股集团实施战略重组", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 6.21, "first_limit_up": 1784688217, "break_limit_up_times": 3}, {"code": "001258", "name": "立新能源", "price": 11.01, "change_pct": 9.99, "reason": "公司立足新疆，专注风力发电和光伏发电业务", "plates": ["智能电网"], "limit_up_days": 5, "turnover_ratio": 6.56, "first_limit_up": 1784683977, "break_limit_up_times": 0}, {"code": "002515", "name": "金字火腿", "price": 8.18, "change_pct": 9.95, "reason": "1、公司主营火腿及特色肉制品，重点发展香肠、腊肉、咸肉等，同时加快休闲食品市场布局；\n2、全资子公司拟不超过3亿元取得中晟微电子不超过20%股权，后者专注于高速光模块核心电芯片的研发设计", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.66, "first_limit_up": 1784685864, "break_limit_up_times": 1}, {"code": "600396", "name": "华电辽能", "price": 14.92, "change_pct": 10.03, "reason": "辽宁省重要电力和热力供应商", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 16.79, "first_limit_up": 1784686567, "break_limit_up_times": 3}, {"code": "600722", "name": "金牛化工", "price": 9.91, "change_pct": 9.99, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 20.36, "first_limit_up": 1784685526, "break_limit_up_times": 6}, {"code": "603296", "name": "华勤技术", "price": 87.67, "change_pct": 10.0, "reason": "公司已构建起覆盖AI服务器、超节点、通用服务器、交换机的全栈式产品组合", "plates": ["交换机"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1784684754, "break_limit_up_times": 0}, {"code": "002793", "name": "罗欣药业", "price": 4.94, "change_pct": 10.02, "reason": "公司拥有原料药到制剂的完整产业链", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.03, "first_limit_up": 1784684553, "break_limit_up_times": 2}, {"code": "301234", "name": "五洲医疗", "price": 40.8, "change_pct": 20.0, "reason": "公司拟收购旋智科技100%股权，切入电机控制芯片赛道\n", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 1.34, "first_limit_up": 1784683500, "break_limit_up_times": 0}, {"code": "002412", "name": "汉森制药", "price": 6.71, "change_pct": 10.0, "reason": "公司主营消化系统和心脑血管中药生产企业", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.69, "first_limit_up": 1784688939, "break_limit_up_times": 4}, {"code": "603725", "name": "天安新材", "price": 13.48, "change_pct": 10.04, "reason": "公司参股若铂机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 13.14, "first_limit_up": 1784684428, "break_limit_up_times": 4}, {"code": "603118", "name": "共进股份", "price": 16.42, "change_pct": 9.98, "reason": "1、公司深耕以太网交换机领域多年，产品覆盖园区、SMB 场景及 100G/400G/800G 等规格数据中心交换机，同时布局工业与白盒交换机赛道，作为 Arista Networks 核心代工厂间接供应英伟达、微软等头部客户；\n2、参股孙公司山东华云光电技术有限公司致力于光模块等产品的研发、生产及销售", "plates": ["交换机"], "limit_up_days": 2, "turnover_ratio": 14.11, "first_limit_up": 1784683882, "break_limit_up_times": 6}, {"code": "605162", "name": "新中港", "price": 7.68, "change_pct": 10.03, "reason": "公司专业从事热电联产业务", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.32, "first_limit_up": 1784684512, "break_limit_up_times": 0}, {"code": "603407", "name": "长裕集团", "price": 64.34, "change_pct": 10.0, "reason": "公司高纯氧化锆制品具有高绝缘性、高强度及导热特性，可用于HBM、SSD等存储芯片封装的陶瓷载板、散热底座等部件", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 5.26, "first_limit_up": 1784683500, "break_limit_up_times": 0}, {"code": "000815", "name": "美利云", "price": 16.13, "change_pct": 10.03, "reason": "公司主营业务为数据中心机柜租赁及机房运行维护服务。客户包括电信、美团、并行科技等", "plates": ["云计算数据中心"], "limit_up_days": 3, "turnover_ratio": 12.97, "first_limit_up": 1784683500, "break_limit_up_times": 3}, {"code": "000506", "name": "招金黄金", "price": 13.02, "change_pct": 9.97, "reason": "公司主要业务包括以黄金为主要品种的矿业开采", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 9.29, "first_limit_up": 1784690577, "break_limit_up_times": 0}, {"code": "603221", "name": "爱丽家居", "price": 11.57, "change_pct": 9.98, "reason": "公司拟收购欧康诺不低于77.08%股权，欧康诺专注于存储测试设备及测试服务领域", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 0.05, "first_limit_up": 1784683500, "break_limit_up_times": 0}, {"code": "605028", "name": "世茂能源", "price": 24.37, "change_pct": 10.02, "reason": "以生活垃圾和燃煤为主要原材料的热电联产企业", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 1.57, "first_limit_up": 1784684261, "break_limit_up_times": 0}, {"code": "300688", "name": "创业黑马", "price": 25.01, "change_pct": 20.01, "reason": "1、公司拟收购北京版信通技术有限公司100%股权，标的公司基于区块链技术提供电子版权认证服务，已服务12万余名APP开发者，颁发证书约41万件，合作平台覆盖华为、小米、腾讯、阿里等主流应用分发平台；\n2、公司与智谱华章科技在生成式人工智能大模型在数字政务、企业服务等领域的应用与服务项目上进行深度合作", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 15.44, "first_limit_up": 1784684892, "break_limit_up_times": 26}, {"code": "002545", "name": "东方铁塔", "price": 18.13, "change_pct": 10.01, "reason": "公司在输电线路铁塔市场份额位居行业前列，拥有 750KV 输电线路铁塔生产资质，产品覆盖国家电网、南方电网等特高压项目，为智能电网建设提供关键的输电线路支撑", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.76, "first_limit_up": 1784688537, "break_limit_up_times": 1}, {"code": "000566", "name": "海南海药", "price": 5.21, "change_pct": 9.92, "reason": "海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.99, "first_limit_up": 1784685234, "break_limit_up_times": 1}, {"code": "000603", "name": "盛达资源", "price": 22.57, "change_pct": 9.99, "reason": "公司预计中报净利润同比增长399.31%-470.64%，因“采矿及选矿能力有所提升，产能逐渐释放，2026年上半年度产品产销量增加；另外，叠加贵金属价格上涨，公司矿山主要产品销售价格较上年同期上涨，推动公司经营业绩同比显著增长”", "plates": ["黄金"], "limit_up_days": 2, "turnover_ratio": 6.27, "first_limit_up": 1784685051, "break_limit_up_times": 2}, {"code": "000595", "name": "新能股份", "price": 5.02, "change_pct": 10.09, "reason": "公司完成重大资产重组后，主营业务变更为风力发电、光伏发电及储能电站的投资运营，风光总装机容量达282.03万千瓦，已建成投运储能电站300MW/600MWh", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 1.3, "first_limit_up": 1784683923, "break_limit_up_times": 1}, {"code": "002575", "name": "群兴玩具", "price": 4.83, "change_pct": 10.02, "reason": "公司孙公司图灵引擎科技与腾讯签订了《算力服务协议》，拟向腾讯提供集群算力服务；一季度业绩同比减亏", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.62, "first_limit_up": 1784683500, "break_limit_up_times": 0}, {"code": "600594", "name": "益佰制药", "price": 3.56, "change_pct": 9.88, "reason": "主要涵盖抗肿瘤类、心血管类和镇咳类三大领域，其中中药注射剂艾迪注射液是公司核心产品，与复方斑蝥胶囊适用于肝癌、肺癌等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.09, "first_limit_up": 1784685005, "break_limit_up_times": 0}, {"code": "603988", "name": "中电电机", "price": 15.61, "change_pct": 10.01, "reason": "公司专注大中型交直流电机、发电机，产品覆盖风电、水利、石化等行业", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 5.94, "first_limit_up": 1784696993, "break_limit_up_times": 1}, {"code": "603629", "name": "利通电子", "price": 118.34, "change_pct": 10.0, "reason": "公司直接运营的AI算力云规模已达38000P", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 3.56, "first_limit_up": 1784683924, "break_limit_up_times": 0}, {"code": "603893", "name": "瑞芯微", "price": 228.86, "change_pct": 10.0, "reason": "公司的RV系列视觉类芯片依托低功耗方案及自研ISP的优势，可应用在AI眼镜等产品上", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.82, "first_limit_up": 1784687183, "break_limit_up_times": 21}, {"code": "002879", "name": "长缆科技", "price": 14.92, "change_pct": 10.03, "reason": "公司材料、箱柜、连接器、机电等产品已导入商业航天并实现导入；拟斥资1.8亿至2.2亿元回购股份", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 22.53, "first_limit_up": 1784683956, "break_limit_up_times": 4}, {"code": "002197", "name": "证通电子", "price": 6.97, "change_pct": 9.94, "reason": "1、公司算力业务依据客户订单进行扩容，现阶段全力推进机柜订单落地；\n2、国内最早研发金融电子设备的高新技术企业之一；公司已围绕数字货币加密算法、数字钱包设备及其应用、数字货币支付模组及支付设备、数字货币收单设备等关键领域开展一套完整的数字货币安全支付方案研究工作，可根据客户需求提供数字人民币支付对接到银行系统的应用开发解决方案", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 3.66, "first_limit_up": 1784683803, "break_limit_up_times": 0}, {"code": "300834", "name": "星辉环材", "price": 38.08, "change_pct": 20.01, "reason": "公司主营高分子合成材料聚苯乙烯，拟斥资1亿至2亿元回购股份", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.23, "first_limit_up": 1784689872, "break_limit_up_times": 0}, {"code": "605155", "name": "西大门", "price": 12.77, "change_pct": 9.99, "reason": "我国功能性遮阳材料细分领域的龙头，主要产品包括阳光面料、涂层面料和可调光面料等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.81, "first_limit_up": 1784696562, "break_limit_up_times": 0}, {"code": "603803", "name": "瑞斯康达", "price": 10.07, "change_pct": 10.05, "reason": "国内光纤通信接入领域领军企业；公司已成功发布智算中心 400G 算力交换机，可适配智算场景下的算力传输需求", "plates": ["交换机"], "limit_up_days": 1, "turnover_ratio": 5.39, "first_limit_up": 1784687217, "break_limit_up_times": 0}, {"code": "603619", "name": "中曼石油", "price": 21.34, "change_pct": 10.0, "reason": "公司业务涵盖勘探开发、油服工程、石油装备制造，已形成成熟完备的钻采一体化服务能力，油气装备涵盖从钻机整机到顶驱、泥浆泵、自动猫道等关键部件一系列产品体系", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 10.32, "first_limit_up": 1784684503, "break_limit_up_times": 41}, {"code": "002213", "name": "大为股份", "price": 27.49, "change_pct": 10.0, "reason": "公司半导体存储业务主要产品有NAND、DRAM存储两大系列，子公司大为创芯有产品可以应用在数据中心", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 4.29, "first_limit_up": 1784684010, "break_limit_up_times": 0}, {"code": "600726", "name": "华电能源", "price": 6.6, "change_pct": 10.0, "reason": "中国华电集团旗下，黑龙江最大发电及集中供热运营商；公司主营发电、供热及煤炭生产销售", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 5.14, "first_limit_up": 1784702188, "break_limit_up_times": 0}, {"code": "300779", "name": "惠城环保", "price": 69.12, "change_pct": 20.0, "reason": "公司将不能复活的废催化剂，通过废催化剂元素分解及利用技术，分解成资源化基础化工产品，如硅产品、铝产品、稀土产品、镍产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 11.51, "first_limit_up": 1784686821, "break_limit_up_times": 8}];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第二次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "ST/风险警示股", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告"};