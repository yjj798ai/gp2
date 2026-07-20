const UPDATE_TIME = "2026-07-20 02:31";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.54,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 1,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.67,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续251天上榜",
    "rankChg": -1,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "算力租赁",
    "rise": 1.0,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续115天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "存储芯片",
    "rise": -4.27,
    "rate": 0,
    "tag": "",
    "hotTag": "连续204天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "人工智能",
    "rise": -0.03,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "PCB概念",
    "rise": -4.31,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续74天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -1.49,
    "rate": 0,
    "tag": "",
    "hotTag": "连续180天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "国家大基金持股",
    "rise": -3.7,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "AI应用",
    "rise": 0.54,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "人形机器人",
    "rise": -1.67,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续415天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "先进封装",
    "rise": -4.09,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续44天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "光纤概念",
    "rise": -3.13,
    "rate": 0,
    "tag": "",
    "hotTag": "连续80天上榜",
    "rankChg": 1,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "培育钻石",
    "rise": -2.92,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "猪肉",
    "rise": 0.16,
    "rate": 0,
    "tag": "",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "农牧ETF",
    "code": "885573"
  },
  {
    "name": "白酒概念",
    "rise": 2.29,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 4,
    "etfName": "食品饮料ETF",
    "code": "885525"
  },
  {
    "name": "中国AI 50",
    "rise": 0.75,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "科创创业人工智能ETF",
    "code": "886102"
  },
  {
    "name": "东数西算(算力)",
    "rise": -0.13,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "芯片概念",
    "rise": -2.48,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续75天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "ST板块",
    "rise": -1.05,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续89天上榜",
    "rankChg": -2,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -0.61,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  }
];
const THS_EVENTS = [
  {
    "title": "茅台调价背后：市场化改革持续深化 消费需求支撑价格体系",
    "desc": "",
    "heat": 272129,
    "direction": "白酒",
    "themes": [
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "威龙股份",
        "code": "603779",
        "chg": 10.012674
      }
    ]
  },
  {
    "title": "证监会今开座谈会 促进市场稳定健康发展 资深业内人士认为，应理性看待近期市场调整，相信中国资产的内在价值与支撑力",
    "desc": "",
    "heat": 172331,
    "direction": "大金融",
    "themes": [
      "证券",
      "保险"
    ],
    "stocks": [
      {
        "name": "湘财股份",
        "code": "600095",
        "chg": 5.638665
      }
    ]
  },
  {
    "title": "“工业维生素”价格暴涨，钼铁一天跳涨1500元",
    "desc": "",
    "heat": 161753,
    "direction": "钼铁",
    "themes": [
      "金属钼"
    ],
    "stocks": [
      {
        "name": "兖矿能源",
        "code": "600188",
        "chg": 9.206349
      }
    ]
  },
  {
    "title": "月之暗面Kimi称算力紧缺：暂停C端新用户订阅 将已有算力全部投入于服务已订阅用户",
    "desc": "",
    "heat": 56196,
    "direction": "Kimi",
    "themes": [
      "Kimi"
    ],
    "stocks": [
      {
        "name": "三七互娱",
        "code": "002555",
        "chg": 4.9117
      }
    ]
  },
  {
    "title": "上海“星枢计划”首发星座发布",
    "desc": "",
    "heat": 19381,
    "direction": "太空算力",
    "themes": [
      "太空算力",
      "太空光伏"
    ],
    "stocks": [
      {
        "name": "明阳智能",
        "code": "601615",
        "chg": 4.317959
      }
    ]
  },
  {
    "title": "10倍、20倍！长飞光纤预判，保偏光纤需求狂飙",
    "desc": "",
    "heat": 17379,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念",
      "MPO连接器"
    ],
    "stocks": [
      {
        "name": "万隆光电",
        "code": "300710",
        "chg": 5.210819
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "电力体制改革",
    "change": "+4.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+4.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+4.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水电",
    "change": "+4.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+4.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+4.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+3.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+3.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "山西国企改革",
    "change": "+3.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "油气改革",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+2.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "油服",
    "change": "+2.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+2.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+2.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+2.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "可燃冰",
    "change": "+2.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "页岩气",
    "change": "+2.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "丁辛醇",
    "change": "+2.47%",
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
    "hot_rank_chg": 1,
    "stock_cnt": 5857,
    "price": "5.34",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "13448843000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.45
      },
      {
        "name": "工业大麻",
        "change_pct": -0.96
      },
      {
        "name": "中药",
        "change_pct": 0.3
      },
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "保健品",
        "change_pct": 0.42
      },
      {
        "name": "医药",
        "change_pct": 0.38
      },
      {
        "name": "化学原料药",
        "change_pct": 0.34
      },
      {
        "name": "流感",
        "change_pct": -0.18
      },
      {
        "name": "振兴东北",
        "change_pct": 1.08
      },
      {
        "name": "食品",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 8,
    "hot_rank_chg": 5,
    "stock_cnt": 5857,
    "price": "5.86",
    "change": "-3.46",
    "market_id": "33",
    "circulate_market_value": "207251410000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.64
      },
      {
        "name": "折叠屏",
        "change_pct": -3.82
      },
      {
        "name": "手机产业链",
        "change_pct": -2.69
      },
      {
        "name": "超高清视频",
        "change_pct": -0.31
      },
      {
        "name": "苹果产业链",
        "change_pct": -3.07
      },
      {
        "name": "电竞",
        "change_pct": 0.03
      },
      {
        "name": "半导体",
        "change_pct": -3.41
      },
      {
        "name": "人工智能",
        "change_pct": 0.15
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.03
      },
      {
        "name": "VR&AR",
        "change_pct": -1.3
      },
      {
        "name": "OLED",
        "change_pct": -3.21
      },
      {
        "name": "京津冀",
        "change_pct": 1.16
      },
      {
        "name": "物联网",
        "change_pct": -0.12
      },
      {
        "name": "指纹识别",
        "change_pct": -1.29
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.57
      },
      {
        "name": "白马股",
        "change_pct": 1.19
      },
      {
        "name": "智能制造",
        "change_pct": -1.17
      },
      {
        "name": "小米概念股",
        "change_pct": -1.68
      },
      {
        "name": "国产芯片",
        "change_pct": -2.39
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.78
      },
      {
        "name": "全息概念",
        "change_pct": -0.18
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.99
      },
      {
        "name": "MicroLED",
        "change_pct": -2.47
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.67
      },
      {
        "name": "智能手表",
        "change_pct": -1.89
      },
      {
        "name": "MiniLED",
        "change_pct": -2.43
      },
      {
        "name": "传感器",
        "change_pct": -1.62
      },
      {
        "name": "大硅片",
        "change_pct": -2.41
      },
      {
        "name": "AI PC",
        "change_pct": -1.94
      },
      {
        "name": "华为产业链",
        "change_pct": -0.82
      },
      {
        "name": "回购",
        "change_pct": 0.26
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.06
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.06
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 14,
    "hot_rank_chg": 68,
    "stock_cnt": 5857,
    "price": "12.48",
    "change": "7.12",
    "market_id": "17",
    "circulate_market_value": "18379381000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.2
      },
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "电力体制改革",
        "change_pct": 4.74
      },
      {
        "name": "火电",
        "change_pct": 4.49
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.27
      },
      {
        "name": "风电",
        "change_pct": 0.64
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 17,
    "hot_rank_chg": 8,
    "stock_cnt": 5857,
    "price": "6.18",
    "change": "6.55",
    "market_id": "17",
    "circulate_market_value": "76607831000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.2
      },
      {
        "name": "核电",
        "change_pct": -0.3
      },
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "电力体制改革",
        "change_pct": 4.74
      },
      {
        "name": "水电",
        "change_pct": 4.43
      },
      {
        "name": "火电",
        "change_pct": 4.49
      },
      {
        "name": "光伏",
        "change_pct": -0.75
      },
      {
        "name": "风电",
        "change_pct": 0.64
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      },
      {
        "name": "算电协同",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 21,
    "hot_rank_chg": 3,
    "stock_cnt": 5857,
    "price": "6.56",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "13324175200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "火电",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.2
      },
      {
        "name": "电力体制改革",
        "change_pct": 4.74
      },
      {
        "name": "火电",
        "change_pct": 4.49
      },
      {
        "name": "风电",
        "change_pct": 0.64
      },
      {
        "name": "储能",
        "change_pct": -0.09
      },
      {
        "name": "碳中和",
        "change_pct": 1.53
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 26,
    "hot_rank_chg": -11,
    "stock_cnt": 5857,
    "price": "9.10",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "8493244600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "风电光伏",
    "xgb_concepts": [
      {
        "name": "新疆国企改革",
        "change_pct": 1.42
      },
      {
        "name": "新疆概念",
        "change_pct": 0.9
      },
      {
        "name": "光伏",
        "change_pct": -1.01
      },
      {
        "name": "风电",
        "change_pct": 0.44
      },
      {
        "name": "储能",
        "change_pct": -0.32
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 34,
    "hot_rank_chg": 33,
    "stock_cnt": 5857,
    "price": "11.96",
    "change": "13.93",
    "market_id": "33",
    "circulate_market_value": "6975200900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 2.63
      },
      {
        "name": "一带一路",
        "change_pct": 0.48
      },
      {
        "name": "天然气",
        "change_pct": 2.01
      },
      {
        "name": "油气改革",
        "change_pct": 2.79
      },
      {
        "name": "页岩气",
        "change_pct": 2.33
      },
      {
        "name": "深地经济",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 42,
    "hot_rank_chg": -24,
    "stock_cnt": 5857,
    "price": "2.85",
    "change": "-6.86",
    "market_id": "17",
    "circulate_market_value": "9315048600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.12
      },
      {
        "name": "强势人气股",
        "change_pct": -2.63
      },
      {
        "name": "养老产业",
        "change_pct": 0.78
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.84
      },
      {
        "name": "地摊经济",
        "change_pct": -0.1
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 46,
    "hot_rank_chg": -3,
    "stock_cnt": 5857,
    "price": "7.32",
    "change": "4.87",
    "market_id": "33",
    "circulate_market_value": "4799768100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.33
      },
      {
        "name": "新零售",
        "change_pct": 0.06
      },
      {
        "name": "农业种植",
        "change_pct": 0.9
      },
      {
        "name": "冷链",
        "change_pct": -0.42
      },
      {
        "name": "大农业",
        "change_pct": 0.47
      },
      {
        "name": "预制菜",
        "change_pct": 0.28
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.79
      },
      {
        "name": "免税店概念",
        "change_pct": 1.25
      },
      {
        "name": "湖北国企改革",
        "change_pct": 0.12
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 48,
    "hot_rank_chg": -37,
    "stock_cnt": 5857,
    "price": "6.39",
    "change": "-6.58",
    "market_id": "33",
    "circulate_market_value": "8045192300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -0.02
      },
      {
        "name": "游戏",
        "change_pct": 0.88
      },
      {
        "name": "智能音箱",
        "change_pct": -2.19
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.0
      },
      {
        "name": "数字经济",
        "change_pct": 0.6
      },
      {
        "name": "百度概念股",
        "change_pct": 0.55
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.35
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.08
      },
      {
        "name": "传媒",
        "change_pct": 0.75
      },
      {
        "name": "全息概念",
        "change_pct": -0.38
      },
      {
        "name": "NFT",
        "change_pct": 0.7
      },
      {
        "name": "元宇宙",
        "change_pct": 0.06
      },
      {
        "name": "web3.0",
        "change_pct": -0.22
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.1
      },
      {
        "name": "数字人民币",
        "change_pct": 1.28
      },
      {
        "name": "智慧政务",
        "change_pct": 1.15
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.61
      },
      {
        "name": "盲盒",
        "change_pct": -0.61
      },
      {
        "name": "AI营销",
        "change_pct": -0.28
      },
      {
        "name": "华为产业链",
        "change_pct": -1.07
      },
      {
        "name": "供应链金融",
        "change_pct": 0.73
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.37
      },
      {
        "name": "区块链",
        "change_pct": 0.9
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 50,
    "hot_rank_chg": -28,
    "stock_cnt": 5857,
    "price": "9.38",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "6381398600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "甲醇",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 4.06
      },
      {
        "name": "雄安新区",
        "change_pct": 0.7
      },
      {
        "name": "煤化工",
        "change_pct": 3.85
      }
    ]
  },
  {
    "code": "600644",
    "name": "乐山电力",
    "hot_rank": 54,
    "hot_rank_chg": -20,
    "stock_cnt": 5857,
    "price": "9.91",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "5731159300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "电力",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 4.58
      },
      {
        "name": "水电",
        "change_pct": 4.34
      },
      {
        "name": "天然气",
        "change_pct": 2.01
      },
      {
        "name": "光伏",
        "change_pct": -1.01
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 55,
    "hot_rank_chg": -3,
    "stock_cnt": 5857,
    "price": "9.28",
    "change": "-7.83",
    "market_id": "33",
    "circulate_market_value": "19320977000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -0.45
      },
      {
        "name": "足球",
        "change_pct": -0.43
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.43
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.08
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.22
      },
      {
        "name": "大消费",
        "change_pct": 1.67
      },
      {
        "name": "盲盒",
        "change_pct": -0.61
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.34
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.23
      },
      {
        "name": "首发经济",
        "change_pct": -0.0
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.29
      },
      {
        "name": "服务消费",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 57,
    "hot_rank_chg": -37,
    "stock_cnt": 5857,
    "price": "3.26",
    "change": "6.86",
    "market_id": "17",
    "circulate_market_value": "4164975400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.28
      },
      {
        "name": "甲醇",
        "change_pct": 4.06
      },
      {
        "name": "化肥",
        "change_pct": 1.37
      },
      {
        "name": "保健品",
        "change_pct": 0.43
      },
      {
        "name": "民营医院",
        "change_pct": -0.12
      },
      {
        "name": "医药",
        "change_pct": 0.33
      },
      {
        "name": "煤化工",
        "change_pct": 3.85
      },
      {
        "name": "食品",
        "change_pct": 0.45
      },
      {
        "name": "大农业",
        "change_pct": 0.47
      },
      {
        "name": "干细胞",
        "change_pct": 0.44
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 0.78
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 62,
    "hot_rank_chg": 161,
    "stock_cnt": 5857,
    "price": "5.28",
    "change": "-9.12",
    "market_id": "17",
    "circulate_market_value": "5765161700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 0.33
      },
      {
        "name": "化学原料药",
        "change_pct": 0.28
      },
      {
        "name": "数字经济",
        "change_pct": 0.6
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.22
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.29
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 63,
    "hot_rank_chg": 89,
    "stock_cnt": 5857,
    "price": "12.15",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "42187294000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.33
      },
      {
        "name": "人工智能",
        "change_pct": -0.02
      },
      {
        "name": "VR&AR",
        "change_pct": -1.61
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.89
      },
      {
        "name": "大数据",
        "change_pct": 0.55
      },
      {
        "name": "教育",
        "change_pct": 0.32
      },
      {
        "name": "百度概念股",
        "change_pct": 0.55
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.43
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.35
      },
      {
        "name": "传媒",
        "change_pct": 0.75
      },
      {
        "name": "快手概念股",
        "change_pct": 0.46
      },
      {
        "name": "NFT",
        "change_pct": 0.7
      },
      {
        "name": "元宇宙",
        "change_pct": 0.06
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.6
      },
      {
        "name": "web3.0",
        "change_pct": -0.22
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.33
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.1
      },
      {
        "name": "职业教育",
        "change_pct": 0.14
      },
      {
        "name": "云游戏",
        "change_pct": 0.66
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.22
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.32
      },
      {
        "name": "AI营销",
        "change_pct": -0.28
      },
      {
        "name": "词元概念/Token",
        "change_pct": 1.99
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.47
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.87
      },
      {
        "name": "智谱AI",
        "change_pct": 0.98
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.29
      },
      {
        "name": "区块链",
        "change_pct": 0.9
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 65,
    "hot_rank_chg": 39,
    "stock_cnt": 5857,
    "price": "4.79",
    "change": "-6.08",
    "market_id": "33",
    "circulate_market_value": "6211363700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.28
      },
      {
        "name": "创新药",
        "change_pct": 1.08
      },
      {
        "name": "央企改革",
        "change_pct": 1.06
      },
      {
        "name": "医疗器械",
        "change_pct": -0.02
      },
      {
        "name": "强势人气股",
        "change_pct": -2.63
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.97
      },
      {
        "name": "保健品",
        "change_pct": 0.43
      },
      {
        "name": "民营医院",
        "change_pct": -0.12
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 1.3
      },
      {
        "name": "医药",
        "change_pct": 0.33
      },
      {
        "name": "化学原料药",
        "change_pct": 0.28
      },
      {
        "name": "海南概念",
        "change_pct": 0.85
      },
      {
        "name": "脑科学",
        "change_pct": -0.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.57
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.49
      },
      {
        "name": "食品",
        "change_pct": 0.45
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.75
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.29
      },
      {
        "name": "自贸区",
        "change_pct": 0.51
      },
      {
        "name": "合成生物",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 67,
    "hot_rank_chg": 124,
    "stock_cnt": 5857,
    "price": "11.30",
    "change": "-4.96",
    "market_id": "17",
    "circulate_market_value": "14421690000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.82
      },
      {
        "name": "强势人气股",
        "change_pct": -2.63
      },
      {
        "name": "智能制造",
        "change_pct": -1.41
      },
      {
        "name": "工业互联网",
        "change_pct": -0.63
      },
      {
        "name": "培育钻石",
        "change_pct": -2.49
      },
      {
        "name": "金刚线",
        "change_pct": -4.89
      },
      {
        "name": "国资入股",
        "change_pct": -0.38
      },
      {
        "name": "深地经济",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 70,
    "hot_rank_chg": -35,
    "stock_cnt": 5857,
    "price": "5.44",
    "change": "-9.93",
    "market_id": "33",
    "circulate_market_value": "5619170700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.14
      },
      {
        "name": "锂电池",
        "change_pct": -2.72
      },
      {
        "name": "强势人气股",
        "change_pct": -2.63
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -6.53
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.84
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.33
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 74,
    "hot_rank_chg": -9,
    "stock_cnt": 5857,
    "price": "5.00",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "100574901000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -4.21
      },
      {
        "name": "手机产业链",
        "change_pct": -3.06
      },
      {
        "name": "超高清视频",
        "change_pct": -0.57
      },
      {
        "name": "电竞",
        "change_pct": -0.12
      },
      {
        "name": "半导体",
        "change_pct": -3.9
      },
      {
        "name": "OLED",
        "change_pct": -3.61
      },
      {
        "name": "光伏",
        "change_pct": -1.01
      },
      {
        "name": "黑色家电",
        "change_pct": -0.99
      },
      {
        "name": "家电",
        "change_pct": -0.88
      },
      {
        "name": "智能制造",
        "change_pct": -1.41
      },
      {
        "name": "工业互联网",
        "change_pct": -0.63
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.0
      },
      {
        "name": "国产芯片",
        "change_pct": -2.81
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.35
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.16
      },
      {
        "name": "MicroLED",
        "change_pct": -2.92
      },
      {
        "name": "MiniLED",
        "change_pct": -2.77
      },
      {
        "name": "华为产业链",
        "change_pct": -1.07
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.53
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 80,
    "hot_rank_chg": 150,
    "stock_cnt": 5857,
    "price": "7.80",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "4225431600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "油气装备",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 2.63
      },
      {
        "name": "油气管网",
        "change_pct": 2.38
      },
      {
        "name": "海工装备",
        "change_pct": 0.82
      },
      {
        "name": "举牌",
        "change_pct": 0.47
      },
      {
        "name": "天然气",
        "change_pct": 2.01
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.21
      },
      {
        "name": "风电",
        "change_pct": 0.44
      },
      {
        "name": "页岩气",
        "change_pct": 2.33
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      },
      {
        "name": "深地经济",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 85,
    "hot_rank_chg": 101,
    "stock_cnt": 5857,
    "price": "8.74",
    "change": "-2.13",
    "market_id": "17",
    "circulate_market_value": "15637069000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.52
      },
      {
        "name": "纯碱",
        "change_pct": 1.96
      },
      {
        "name": "食品",
        "change_pct": 0.45
      },
      {
        "name": "土壤修复",
        "change_pct": 0.15
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.91
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.51
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 88,
    "hot_rank_chg": 432,
    "stock_cnt": 5857,
    "price": "5.83",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "43581210000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "热电联产",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 4.64
      },
      {
        "name": "央企改革",
        "change_pct": 1.06
      },
      {
        "name": "强势人气股",
        "change_pct": -2.63
      },
      {
        "name": "电力体制改革",
        "change_pct": 4.58
      },
      {
        "name": "火电",
        "change_pct": 4.31
      },
      {
        "name": "振兴东北",
        "change_pct": 1.03
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "000767",
    "name": "晋控电力",
    "hot_rank": 91,
    "hot_rank_chg": 146,
    "stock_cnt": 5857,
    "price": "3.76",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "10950046600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "火电",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 4.58
      },
      {
        "name": "水电",
        "change_pct": 4.34
      },
      {
        "name": "山西国企改革",
        "change_pct": 3.51
      },
      {
        "name": "火电",
        "change_pct": 4.31
      },
      {
        "name": "风电",
        "change_pct": 0.44
      },
      {
        "name": "超超临界发电",
        "change_pct": 1.62
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "300368",
    "name": "汇金股份",
    "hot_rank": 93,
    "hot_rank_chg": 453,
    "stock_cnt": 5857,
    "price": "9.41",
    "change": "20.03",
    "market_id": "33",
    "circulate_market_value": "4977358100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "金融机具",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 1.6
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.64
      },
      {
        "name": "京津冀",
        "change_pct": 1.01
      },
      {
        "name": "国资云",
        "change_pct": 2.25
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.91
      },
      {
        "name": "数字人民币",
        "change_pct": 1.28
      },
      {
        "name": "华为产业链",
        "change_pct": -1.07
      },
      {
        "name": "征信概念",
        "change_pct": 3.13
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000938", "name": "紫光股份", "hot_rank": 1, "hot_rank_chg": 7, "stock_cnt": 5857, "price": "37.90", "change": "7.88", "market_id": "33", "circulate_market_value": "108396754000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5857, "price": "482.89", "change": "-10.00", "market_id": "33", "circulate_market_value": "79709691000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5857, "price": "5.34", "change": "0.00", "market_id": "17", "circulate_market_value": "13448843000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.45}, {"name": "工业大麻", "change_pct": -0.96}, {"name": "中药", "change_pct": 0.3}, {"name": "强势人气股", "change_pct": -2.36}, {"name": "保健品", "change_pct": 0.42}, {"name": "医药", "change_pct": 0.38}, {"name": "化学原料药", "change_pct": 0.34}, {"name": "流感", "change_pct": -0.18}, {"name": "振兴东北", "change_pct": 1.08}, {"name": "食品", "change_pct": 0.48}]}, {"code": "002185", "name": "华天科技", "hot_rank": 4, "hot_rank_chg": 5, "stock_cnt": 5857, "price": "17.11", "change": "-8.60", "market_id": "33", "circulate_market_value": "56850572000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 5, "hot_rank_chg": 12, "stock_cnt": 5857, "price": "217.73", "change": "-10.00", "market_id": "33", "circulate_market_value": "301843830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5857, "price": "79.00", "change": "-7.59", "market_id": "17", "circulate_market_value": "141363750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 7, "hot_rank_chg": 20, "stock_cnt": 5857, "price": "81.70", "change": "5.56", "market_id": "33", "circulate_market_value": "119840158000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 8, "hot_rank_chg": 5, "stock_cnt": 5857, "price": "5.86", "change": "-3.46", "market_id": "33", "circulate_market_value": "207251410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.64}, {"name": "折叠屏", "change_pct": -3.82}, {"name": "手机产业链", "change_pct": -2.69}, {"name": "超高清视频", "change_pct": -0.31}, {"name": "苹果产业链", "change_pct": -3.07}, {"name": "电竞", "change_pct": 0.03}, {"name": "半导体", "change_pct": -3.41}, {"name": "人工智能", "change_pct": 0.15}, {"name": "互联网医疗", "change_pct": 1.03}, {"name": "VR&AR", "change_pct": -1.3}, {"name": "OLED", "change_pct": -3.21}, {"name": "京津冀", "change_pct": 1.16}, {"name": "物联网", "change_pct": -0.12}, {"name": "指纹识别", "change_pct": -1.29}, {"name": "汽车零部件", "change_pct": -0.57}, {"name": "白马股", "change_pct": 1.19}, {"name": "智能制造", "change_pct": -1.17}, {"name": "小米概念股", "change_pct": -1.68}, {"name": "国产芯片", "change_pct": -2.39}, {"name": "液晶面板/LCD", "change_pct": -2.78}, {"name": "全息概念", "change_pct": -0.18}, {"name": "理想汽车概念股", "change_pct": -0.99}, {"name": "MicroLED", "change_pct": -2.47}, {"name": "钙钛矿电池", "change_pct": -0.67}, {"name": "智能手表", "change_pct": -1.89}, {"name": "MiniLED", "change_pct": -2.43}, {"name": "传感器", "change_pct": -1.62}, {"name": "大硅片", "change_pct": -2.41}, {"name": "AI PC", "change_pct": -1.94}, {"name": "华为产业链", "change_pct": -0.82}, {"name": "回购", "change_pct": 0.26}, {"name": "智能眼镜/MR头显", "change_pct": -2.06}, {"name": "玻璃基板封装", "change_pct": -4.06}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 9, "hot_rank_chg": 3, "stock_cnt": 5857, "price": "30.23", "change": "0.97", "market_id": "33", "circulate_market_value": "22896659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 10, "hot_rank_chg": -8, "stock_cnt": 5857, "price": "495.50", "change": "2.55", "market_id": "33", "circulate_market_value": "621113750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 11, "hot_rank_chg": 19, "stock_cnt": 5857, "price": "67.64", "change": "-0.88", "market_id": "33", "circulate_market_value": "102640468000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 12, "hot_rank_chg": 4, "stock_cnt": 5857, "price": "446.79", "change": "-3.53", "market_id": "17", "circulate_market_value": "298675510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 13, "hot_rank_chg": -7, "stock_cnt": 5857, "price": "103.24", "change": "-20.00", "market_id": "33", "circulate_market_value": "85587565000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 14, "hot_rank_chg": 68, "stock_cnt": 5857, "price": "12.48", "change": "7.12", "market_id": "17", "circulate_market_value": "18379381000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.2}, {"name": "强势人气股", "change_pct": -2.36}, {"name": "电力体制改革", "change_pct": 4.74}, {"name": "火电", "change_pct": 4.49}, {"name": "氢能源/燃料电池", "change_pct": -0.27}, {"name": "风电", "change_pct": 0.64}, {"name": "国企改革", "change_pct": 0.96}]}, {"code": "603127", "name": "昭衍新药", "hot_rank": 15, "hot_rank_chg": 25, "stock_cnt": 5857, "price": "46.32", "change": "-3.36", "market_id": "17", "circulate_market_value": "29197952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 16, "hot_rank_chg": -6, "stock_cnt": 5857, "price": "990.00", "change": "1.08", "market_id": "33", "circulate_market_value": "1098851480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 17, "hot_rank_chg": 8, "stock_cnt": 5857, "price": "6.18", "change": "6.55", "market_id": "17", "circulate_market_value": "76607831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.2}, {"name": "核电", "change_pct": -0.3}, {"name": "强势人气股", "change_pct": -2.36}, {"name": "电力体制改革", "change_pct": 4.74}, {"name": "水电", "change_pct": 4.43}, {"name": "火电", "change_pct": 4.49}, {"name": "光伏", "change_pct": -0.75}, {"name": "风电", "change_pct": 0.64}, {"name": "国企改革", "change_pct": 0.96}, {"name": "算电协同", "change_pct": 1.18}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 18, "hot_rank_chg": 23, "stock_cnt": 5857, "price": "34.37", "change": "-10.00", "market_id": "33", "circulate_market_value": "26891247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 19, "hot_rank_chg": 32, "stock_cnt": 5857, "price": "99.87", "change": "10.00", "market_id": "17", "circulate_market_value": "36025446000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "603538", "name": "美诺华", "hot_rank": 20, "hot_rank_chg": 25, "stock_cnt": 5857, "price": "31.87", "change": "-7.68", "market_id": "17", "circulate_market_value": "10737638800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 21, "hot_rank_chg": 3, "stock_cnt": 5857, "price": "6.56", "change": "10.07", "market_id": "17", "circulate_market_value": "13324175200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "火电", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.2}, {"name": "电力体制改革", "change_pct": 4.74}, {"name": "火电", "change_pct": 4.49}, {"name": "风电", "change_pct": 0.64}, {"name": "储能", "change_pct": -0.09}, {"name": "碳中和", "change_pct": 1.53}, {"name": "国企改革", "change_pct": 0.96}]}, {"code": "603019", "name": "中科曙光", "hot_rank": 22, "hot_rank_chg": 11, "stock_cnt": 5857, "price": "91.69", "change": "4.32", "market_id": "17", "circulate_market_value": "134147453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 23, "hot_rank_chg": -9, "stock_cnt": 5857, "price": "56.01", "change": "-4.08", "market_id": "17", "circulate_market_value": "137428730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 24, "hot_rank_chg": 4, "stock_cnt": 5857, "price": "34.50", "change": "-4.17", "market_id": "33", "circulate_market_value": "138952930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 25, "hot_rank_chg": -24, "stock_cnt": 5857, "price": "85.02", "change": "7.90", "market_id": "33", "circulate_market_value": "39557453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 26, "hot_rank_chg": -11, "stock_cnt": 5857, "price": "9.10", "change": "10.04", "market_id": "33", "circulate_market_value": "8493244600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "风电光伏", "xgb_concepts": [{"name": "新疆国企改革", "change_pct": 1.42}, {"name": "新疆概念", "change_pct": 0.9}, {"name": "光伏", "change_pct": -1.01}, {"name": "风电", "change_pct": 0.44}, {"name": "储能", "change_pct": -0.32}, {"name": "国企改革", "change_pct": 0.84}]}, {"code": "603118", "name": "共进股份", "hot_rank": 27, "hot_rank_chg": -20, "stock_cnt": 5857, "price": "16.45", "change": "10.03", "market_id": "17", "circulate_market_value": "12950696900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数据中心交换机"}, {"code": "002281", "name": "光迅科技", "hot_rank": 28, "hot_rank_chg": 35, "stock_cnt": 5857, "price": "170.51", "change": "-10.00", "market_id": "33", "circulate_market_value": "133082774000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 29, "hot_rank_chg": 44, "stock_cnt": 5857, "price": "115.13", "change": "-9.93", "market_id": "33", "circulate_market_value": "221373170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 30, "hot_rank_chg": 30, "stock_cnt": 5857, "price": "14.82", "change": "5.87", "market_id": "33", "circulate_market_value": "22612079000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 31, "hot_rank_chg": 6, "stock_cnt": 5857, "price": "32.69", "change": "-2.85", "market_id": "17", "circulate_market_value": "111569324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 32, "hot_rank_chg": 29, "stock_cnt": 5857, "price": "15.72", "change": "-6.76", "market_id": "17", "circulate_market_value": "32879043000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 33, "hot_rank_chg": 20, "stock_cnt": 5857, "price": "36.61", "change": "-6.15", "market_id": "33", "circulate_market_value": "57629836000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 34, "hot_rank_chg": 33, "stock_cnt": 5857, "price": "11.96", "change": "13.93", "market_id": "33", "circulate_market_value": "6975200900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 2.63}, {"name": "一带一路", "change_pct": 0.48}, {"name": "天然气", "change_pct": 2.01}, {"name": "油气改革", "change_pct": 2.79}, {"name": "页岩气", "change_pct": 2.33}, {"name": "深地经济", "change_pct": 2.14}]}, {"code": "603137", "name": "恒尚节能", "hot_rank": 35, "hot_rank_chg": 33, "stock_cnt": 5857, "price": "29.74", "change": "3.08", "market_id": "17", "circulate_market_value": "5440437400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 36, "hot_rank_chg": 39, "stock_cnt": 5857, "price": "37.59", "change": "-5.67", "market_id": "17", "circulate_market_value": "31821940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 37, "hot_rank_chg": 51, "stock_cnt": 5857, "price": "41.88", "change": "-9.99", "market_id": "33", "circulate_market_value": "48455709000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 38, "hot_rank_chg": 103, "stock_cnt": 5857, "price": "42.89", "change": "-8.70", "market_id": "33", "circulate_market_value": "63293802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 39, "hot_rank_chg": -16, "stock_cnt": 5857, "price": "210.01", "change": "-0.62", "market_id": "33", "circulate_market_value": "228550610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 40, "hot_rank_chg": 15, "stock_cnt": 5857, "price": "56.58", "change": "-1.75", "market_id": "17", "circulate_market_value": "1122778740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 41, "hot_rank_chg": 48, "stock_cnt": 5857, "price": "122.03", "change": "-7.66", "market_id": "17", "circulate_market_value": "292201020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 42, "hot_rank_chg": -24, "stock_cnt": 5857, "price": "2.85", "change": "-6.86", "market_id": "17", "circulate_market_value": "9315048600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.12}, {"name": "强势人气股", "change_pct": -2.63}, {"name": "养老产业", "change_pct": 0.78}, {"name": "粤港澳大湾区", "change_pct": 0.84}, {"name": "地摊经济", "change_pct": -0.1}]}, {"code": "002407", "name": "多氟多", "hot_rank": 43, "hot_rank_chg": 19, "stock_cnt": 5857, "price": "28.96", "change": "-7.27", "market_id": "33", "circulate_market_value": "31241102000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 44, "hot_rank_chg": 2, "stock_cnt": 5857, "price": "19.07", "change": "3.53", "market_id": "17", "circulate_market_value": "20486958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 45, "hot_rank_chg": 19, "stock_cnt": 5857, "price": "72.67", "change": "3.55", "market_id": "17", "circulate_market_value": "30257441000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 46, "hot_rank_chg": -3, "stock_cnt": 5857, "price": "7.32", "change": "4.87", "market_id": "33", "circulate_market_value": "4799768100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.33}, {"name": "新零售", "change_pct": 0.06}, {"name": "农业种植", "change_pct": 0.9}, {"name": "冷链", "change_pct": -0.42}, {"name": "大农业", "change_pct": 0.47}, {"name": "预制菜", "change_pct": 0.28}, {"name": "国企改革", "change_pct": 0.84}, {"name": "可降解塑料", "change_pct": -0.79}, {"name": "免税店概念", "change_pct": 1.25}, {"name": "湖北国企改革", "change_pct": 0.12}]}, {"code": "603259", "name": "药明康德", "hot_rank": 47, "hot_rank_chg": 32, "stock_cnt": 5857, "price": "122.13", "change": "3.60", "market_id": "17", "circulate_market_value": "302061720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000676", "name": "智度股份", "hot_rank": 48, "hot_rank_chg": -37, "stock_cnt": 5857, "price": "6.39", "change": "-6.58", "market_id": "33", "circulate_market_value": "8045192300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.02}, {"name": "游戏", "change_pct": 0.88}, {"name": "智能音箱", "change_pct": -2.19}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.0}, {"name": "数字经济", "change_pct": 0.6}, {"name": "百度概念股", "change_pct": 0.55}, {"name": "腾讯概念股", "change_pct": 0.35}, {"name": "拼多多概念股", "change_pct": 0.08}, {"name": "传媒", "change_pct": 0.75}, {"name": "全息概念", "change_pct": -0.38}, {"name": "NFT", "change_pct": 0.7}, {"name": "元宇宙", "change_pct": 0.06}, {"name": "web3.0", "change_pct": -0.22}, {"name": "字节跳动概念股", "change_pct": -0.1}, {"name": "数字人民币", "change_pct": 1.28}, {"name": "智慧政务", "change_pct": 1.15}, {"name": "华为鸿蒙", "change_pct": 0.61}, {"name": "盲盒", "change_pct": -0.61}, {"name": "AI营销", "change_pct": -0.28}, {"name": "华为产业链", "change_pct": -1.07}, {"name": "供应链金融", "change_pct": 0.73}, {"name": "ChatGPT", "change_pct": 0.37}, {"name": "区块链", "change_pct": 0.9}]}, {"code": "000988", "name": "华工科技", "hot_rank": 49, "hot_rank_chg": 32, "stock_cnt": 5857, "price": "105.96", "change": "-9.91", "market_id": "33", "circulate_market_value": "106488280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 50, "hot_rank_chg": -28, "stock_cnt": 5857, "price": "9.38", "change": "9.96", "market_id": "17", "circulate_market_value": "6381398600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "甲醇", "xgb_concepts": [{"name": "甲醇", "change_pct": 4.06}, {"name": "雄安新区", "change_pct": 0.7}, {"name": "煤化工", "change_pct": 3.85}]}, {"code": "600519", "name": "贵州茅台", "hot_rank": 51, "hot_rank_chg": 18, "stock_cnt": 5857, "price": "1318.94", "change": "5.25", "market_id": "17", "circulate_market_value": "1648782600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 52, "hot_rank_chg": 86, "stock_cnt": 5857, "price": "36.56", "change": "-8.73", "market_id": "17", "circulate_market_value": "53450530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 53, "hot_rank_chg": 277, "stock_cnt": 5857, "price": "13.33", "change": "9.98", "market_id": "33", "circulate_market_value": "9267856300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "600644", "name": "乐山电力", "hot_rank": 54, "hot_rank_chg": -20, "stock_cnt": 5857, "price": "9.91", "change": "9.99", "market_id": "17", "circulate_market_value": "5731159300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "电力", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 4.58}, {"name": "水电", "change_pct": 4.34}, {"name": "天然气", "change_pct": 2.01}, {"name": "光伏", "change_pct": -1.01}]}, {"code": "002739", "name": "儒意电影", "hot_rank": 55, "hot_rank_chg": -3, "stock_cnt": 5857, "price": "9.28", "change": "-7.83", "market_id": "33", "circulate_market_value": "19320977000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.45}, {"name": "足球", "change_pct": -0.43}, {"name": "阿里巴巴概念股", "change_pct": 0.43}, {"name": "拼多多概念股", "change_pct": 0.08}, {"name": "网红/MCN", "change_pct": -0.22}, {"name": "大消费", "change_pct": 1.67}, {"name": "盲盒", "change_pct": -0.61}, {"name": "短剧/互动影游", "change_pct": 0.34}, {"name": "IP经济/谷子经济", "change_pct": -0.23}, {"name": "首发经济", "change_pct": -0.0}, {"name": "小红书概念股", "change_pct": -0.29}, {"name": "服务消费", "change_pct": 0.49}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 56, "hot_rank_chg": 134, "stock_cnt": 5857, "price": "16.76", "change": "-2.33", "market_id": "33", "circulate_market_value": "19717618000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 57, "hot_rank_chg": -37, "stock_cnt": 5857, "price": "3.26", "change": "6.86", "market_id": "17", "circulate_market_value": "4164975400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.28}, {"name": "甲醇", "change_pct": 4.06}, {"name": "化肥", "change_pct": 1.37}, {"name": "保健品", "change_pct": 0.43}, {"name": "民营医院", "change_pct": -0.12}, {"name": "医药", "change_pct": 0.33}, {"name": "煤化工", "change_pct": 3.85}, {"name": "食品", "change_pct": 0.45}, {"name": "大农业", "change_pct": 0.47}, {"name": "干细胞", "change_pct": 0.44}, {"name": "阿尔茨海默病", "change_pct": 0.78}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 58, "hot_rank_chg": 56, "stock_cnt": 5857, "price": "27.70", "change": "1.17", "market_id": "33", "circulate_market_value": "31747122000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 59, "hot_rank_chg": 38, "stock_cnt": 5857, "price": "14.73", "change": "0.14", "market_id": "33", "circulate_market_value": "47512938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000722", "name": "湖南发展", "hot_rank": 60, "hot_rank_chg": -39, "stock_cnt": 5857, "price": "14.79", "change": "6.94", "market_id": "33", "circulate_market_value": "6864901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 61, "hot_rank_chg": 32, "stock_cnt": 5857, "price": "63.00", "change": "-5.43", "market_id": "33", "circulate_market_value": "2060001900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 62, "hot_rank_chg": 161, "stock_cnt": 5857, "price": "5.28", "change": "-9.12", "market_id": "17", "circulate_market_value": "5765161700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 0.33}, {"name": "化学原料药", "change_pct": 0.28}, {"name": "数字经济", "change_pct": 0.6}, {"name": "辅助生殖", "change_pct": -0.22}, {"name": "新冠病毒防治", "change_pct": -0.29}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 63, "hot_rank_chg": 89, "stock_cnt": 5857, "price": "12.15", "change": "0.00", "market_id": "33", "circulate_market_value": "42187294000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.33}, {"name": "人工智能", "change_pct": -0.02}, {"name": "VR&AR", "change_pct": -1.61}, {"name": "直播/短视频", "change_pct": 0.89}, {"name": "大数据", "change_pct": 0.55}, {"name": "教育", "change_pct": 0.32}, {"name": "百度概念股", "change_pct": 0.55}, {"name": "阿里巴巴概念股", "change_pct": 0.43}, {"name": "腾讯概念股", "change_pct": 0.35}, {"name": "传媒", "change_pct": 0.75}, {"name": "快手概念股", "change_pct": 0.46}, {"name": "NFT", "change_pct": 0.7}, {"name": "元宇宙", "change_pct": 0.06}, {"name": "虚拟数字人", "change_pct": 0.6}, {"name": "web3.0", "change_pct": -0.22}, {"name": "AIGC概念", "change_pct": 0.33}, {"name": "字节跳动概念股", "change_pct": -0.1}, {"name": "职业教育", "change_pct": 0.14}, {"name": "云游戏", "change_pct": 0.66}, {"name": "网红/MCN", "change_pct": -0.22}, {"name": "5G消息/RCS", "change_pct": 1.32}, {"name": "AI营销", "change_pct": -0.28}, {"name": "词元概念/Token", "change_pct": 1.99}, {"name": "人工智能大模型", "change_pct": 0.47}, {"name": "Sora/AI视频", "change_pct": 0.87}, {"name": "智谱AI", "change_pct": 0.98}, {"name": "小红书概念股", "change_pct": -0.29}, {"name": "区块链", "change_pct": 0.9}]}, {"code": "300059", "name": "东方财富", "hot_rank": 64, "hot_rank_chg": 54, "stock_cnt": 5857, "price": "20.06", "change": "1.83", "market_id": "33", "circulate_market_value": "268000650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 65, "hot_rank_chg": 39, "stock_cnt": 5857, "price": "4.79", "change": "-6.08", "market_id": "33", "circulate_market_value": "6211363700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.28}, {"name": "创新药", "change_pct": 1.08}, {"name": "央企改革", "change_pct": 1.06}, {"name": "医疗器械", "change_pct": -0.02}, {"name": "强势人气股", "change_pct": -2.63}, {"name": "互联网医疗", "change_pct": 0.97}, {"name": "保健品", "change_pct": 0.43}, {"name": "民营医院", "change_pct": -0.12}, {"name": "CAR-T疗法", "change_pct": 1.3}, {"name": "医药", "change_pct": 0.33}, {"name": "化学原料药", "change_pct": 0.28}, {"name": "海南概念", "change_pct": 0.85}, {"name": "脑科学", "change_pct": -0.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.57}, {"name": "海南自由贸易港", "change_pct": 1.49}, {"name": "食品", "change_pct": 0.45}, {"name": "国企改革", "change_pct": 0.84}, {"name": "医疗信息化", "change_pct": 0.75}, {"name": "新冠病毒防治", "change_pct": -0.29}, {"name": "自贸区", "change_pct": 0.51}, {"name": "合成生物", "change_pct": -0.22}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 66, "hot_rank_chg": -24, "stock_cnt": 5857, "price": "349.79", "change": "-3.26", "market_id": "17", "circulate_market_value": "142133080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 67, "hot_rank_chg": 124, "stock_cnt": 5857, "price": "11.30", "change": "-4.96", "market_id": "17", "circulate_market_value": "14421690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.82}, {"name": "强势人气股", "change_pct": -2.63}, {"name": "智能制造", "change_pct": -1.41}, {"name": "工业互联网", "change_pct": -0.63}, {"name": "培育钻石", "change_pct": -2.49}, {"name": "金刚线", "change_pct": -4.89}, {"name": "国资入股", "change_pct": -0.38}, {"name": "深地经济", "change_pct": 2.14}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 68, "hot_rank_chg": 45, "stock_cnt": 5857, "price": "40.48", "change": "-7.58", "market_id": "17", "circulate_market_value": "160769840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 69, "hot_rank_chg": 21, "stock_cnt": 5857, "price": "29.62", "change": "1.72", "market_id": "33", "circulate_market_value": "56294646000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 70, "hot_rank_chg": -35, "stock_cnt": 5857, "price": "5.44", "change": "-9.93", "market_id": "33", "circulate_market_value": "5619170700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.14}, {"name": "锂电池", "change_pct": -2.72}, {"name": "强势人气股", "change_pct": -2.63}, {"name": "铜箔/覆铜板", "change_pct": -6.53}, {"name": "粤港澳大湾区", "change_pct": 0.84}, {"name": "新能源汽车", "change_pct": -1.33}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.09}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 71, "hot_rank_chg": 113, "stock_cnt": 5857, "price": "72.54", "change": "-10.00", "market_id": "33", "circulate_market_value": "52541840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 73, "hot_rank_chg": 12, "stock_cnt": 5857, "price": "185.47", "change": "1.02", "market_id": "17", "circulate_market_value": "212319480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 74, "hot_rank_chg": -9, "stock_cnt": 5857, "price": "5.00", "change": "0.00", "market_id": "33", "circulate_market_value": "100574901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -4.21}, {"name": "手机产业链", "change_pct": -3.06}, {"name": "超高清视频", "change_pct": -0.57}, {"name": "电竞", "change_pct": -0.12}, {"name": "半导体", "change_pct": -3.9}, {"name": "OLED", "change_pct": -3.61}, {"name": "光伏", "change_pct": -1.01}, {"name": "黑色家电", "change_pct": -0.99}, {"name": "家电", "change_pct": -0.88}, {"name": "智能制造", "change_pct": -1.41}, {"name": "工业互联网", "change_pct": -0.63}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.0}, {"name": "国产芯片", "change_pct": -2.81}, {"name": "腾讯概念股", "change_pct": 0.35}, {"name": "液晶面板/LCD", "change_pct": -3.16}, {"name": "MicroLED", "change_pct": -2.92}, {"name": "MiniLED", "change_pct": -2.77}, {"name": "华为产业链", "change_pct": -1.07}, {"name": "玻璃基板封装", "change_pct": -4.53}]}, {"code": "301165", "name": "锐捷网络", "hot_rank": 75, "hot_rank_chg": 156, "stock_cnt": 5857, "price": "103.85", "change": "8.23", "market_id": "33", "circulate_market_value": "115818182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300085", "name": "银之杰", "hot_rank": 76, "hot_rank_chg": 146, "stock_cnt": 5857, "price": "31.26", "change": "2.08", "market_id": "33", "circulate_market_value": "20427563000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 77, "hot_rank_chg": 128, "stock_cnt": 5857, "price": "24.40", "change": "3.79", "market_id": "33", "circulate_market_value": "10505828200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 78, "hot_rank_chg": 27, "stock_cnt": 5857, "price": "75.85", "change": "4.25", "market_id": "33", "circulate_market_value": "294412790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300017", "name": "网宿科技", "hot_rank": 79, "hot_rank_chg": 135, "stock_cnt": 5857, "price": "13.94", "change": "5.29", "market_id": "33", "circulate_market_value": "32639661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 80, "hot_rank_chg": 150, "stock_cnt": 5857, "price": "7.80", "change": "10.01", "market_id": "33", "circulate_market_value": "4225431600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "油气装备", "xgb_concepts": [{"name": "油服", "change_pct": 2.63}, {"name": "油气管网", "change_pct": 2.38}, {"name": "海工装备", "change_pct": 0.82}, {"name": "举牌", "change_pct": 0.47}, {"name": "天然气", "change_pct": 2.01}, {"name": "山东国企改革", "change_pct": 0.21}, {"name": "风电", "change_pct": 0.44}, {"name": "页岩气", "change_pct": 2.33}, {"name": "国企改革", "change_pct": 0.84}, {"name": "深地经济", "change_pct": 2.14}]}, {"code": "603893", "name": "瑞芯微", "hot_rank": 82, "hot_rank_chg": -6, "stock_cnt": 5857, "price": "206.78", "change": "2.48", "market_id": "17", "circulate_market_value": "87445908000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 83, "hot_rank_chg": 17, "stock_cnt": 5857, "price": "40.16", "change": "0.83", "market_id": "33", "circulate_market_value": "131744850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 84, "hot_rank_chg": -25, "stock_cnt": 5857, "price": "93.28", "change": "-0.26", "market_id": "33", "circulate_market_value": "325231310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 85, "hot_rank_chg": 101, "stock_cnt": 5857, "price": "8.74", "change": "-2.13", "market_id": "17", "circulate_market_value": "15637069000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.52}, {"name": "纯碱", "change_pct": 1.96}, {"name": "食品", "change_pct": 0.45}, {"name": "土壤修复", "change_pct": 0.15}, {"name": "东数西算/算力", "change_pct": 0.91}, {"name": "OpenClaw概念", "change_pct": 0.51}, {"name": "DeepSeek概念股", "change_pct": 1.01}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 86, "hot_rank_chg": -57, "stock_cnt": 5857, "price": "49.41", "change": "10.00", "market_id": "17", "circulate_market_value": "6456562800.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "控制权拟变更"}, {"code": "002851", "name": "麦格米特", "hot_rank": 87, "hot_rank_chg": 176, "stock_cnt": 5857, "price": "122.93", "change": "-10.00", "market_id": "33", "circulate_market_value": "56695467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600726", "name": "华电能源", "hot_rank": 88, "hot_rank_chg": 432, "stock_cnt": 5857, "price": "5.83", "change": "10.00", "market_id": "17", "circulate_market_value": "43581210000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "热电联产", "xgb_concepts": [{"name": "煤炭", "change_pct": 4.64}, {"name": "央企改革", "change_pct": 1.06}, {"name": "强势人气股", "change_pct": -2.63}, {"name": "电力体制改革", "change_pct": 4.58}, {"name": "火电", "change_pct": 4.31}, {"name": "振兴东北", "change_pct": 1.03}, {"name": "国企改革", "change_pct": 0.84}]}, {"code": "002050", "name": "三花智控", "hot_rank": 89, "hot_rank_chg": 50, "stock_cnt": 5857, "price": "38.61", "change": "-2.82", "market_id": "33", "circulate_market_value": "142246870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 90, "hot_rank_chg": 50, "stock_cnt": 5857, "price": "222.00", "change": "-8.03", "market_id": "33", "circulate_market_value": "192090580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000767", "name": "晋控电力", "hot_rank": 91, "hot_rank_chg": 146, "stock_cnt": 5857, "price": "3.76", "change": "9.94", "market_id": "33", "circulate_market_value": "10950046600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "火电", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 4.58}, {"name": "水电", "change_pct": 4.34}, {"name": "山西国企改革", "change_pct": 3.51}, {"name": "火电", "change_pct": 4.31}, {"name": "风电", "change_pct": 0.44}, {"name": "超超临界发电", "change_pct": 1.62}, {"name": "国企改革", "change_pct": 0.84}]}, {"code": "301583", "name": "托伦斯", "hot_rank": 92, "hot_rank_chg": 152, "stock_cnt": 5857, "price": "117.10", "change": "-13.88", "market_id": "33", "circulate_market_value": "3610970400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300368", "name": "汇金股份", "hot_rank": 93, "hot_rank_chg": 453, "stock_cnt": 5857, "price": "9.41", "change": "20.03", "market_id": "33", "circulate_market_value": "4977358100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "金融机具", "xgb_concepts": [{"name": "金融科技", "change_pct": 1.6}, {"name": "云计算数据中心", "change_pct": 0.64}, {"name": "京津冀", "change_pct": 1.01}, {"name": "国资云", "change_pct": 2.25}, {"name": "东数西算/算力", "change_pct": 0.91}, {"name": "数字人民币", "change_pct": 1.28}, {"name": "华为产业链", "change_pct": -1.07}, {"name": "征信概念", "change_pct": 3.13}]}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 94, "hot_rank_chg": 103, "stock_cnt": 5857, "price": "15.44", "change": "-10.02", "market_id": "17", "circulate_market_value": "6468859300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 95, "hot_rank_chg": -8, "stock_cnt": 5857, "price": "54.94", "change": "3.29", "market_id": "17", "circulate_market_value": "350462380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688432", "name": "有研硅", "hot_rank": 96, "hot_rank_chg": 108, "stock_cnt": 5857, "price": "42.07", "change": "8.21", "market_id": "17", "circulate_market_value": "52600199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 97, "hot_rank_chg": 27, "stock_cnt": 5857, "price": "17.74", "change": "1.90", "market_id": "17", "circulate_market_value": "309755340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 98, "hot_rank_chg": 137, "stock_cnt": 5857, "price": "30.65", "change": "-10.01", "market_id": "33", "circulate_market_value": "46524568000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 99, "hot_rank_chg": -5, "stock_cnt": 5857, "price": "60.38", "change": "-3.16", "market_id": "17", "circulate_market_value": "71398694000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 100, "hot_rank_chg": 141, "stock_cnt": 5857, "price": "158.52", "change": "-10.00", "market_id": "17", "circulate_market_value": "43686269000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第二次风险提示性公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》"};