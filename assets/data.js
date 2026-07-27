const UPDATE_TIME = "2026-07-27 22:01";
const THS_HOT = [
  {
    "name": "光刻机",
    "rise": 3.86,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "脑机接口",
    "rise": 5.54,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "创新药",
    "rise": 3.46,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 3.15,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续210天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 4.47,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "芯片概念",
    "rise": 3.25,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "人工智能",
    "rise": 3.26,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 3.93,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续257天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI应用",
    "rise": 3.51,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "光刻胶",
    "rise": 3.75,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "科创半导体ETF",
    "code": "885864"
  },
  {
    "name": "商业航天",
    "rise": 3.44,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续186天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "军工",
    "rise": 3.49,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -2,
    "etfName": "军工龙头ETF",
    "code": "885700"
  },
  {
    "name": "算力租赁",
    "rise": 3.57,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续121天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "锂电池概念",
    "rise": 3.62,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "人形机器人",
    "rise": 3.52,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续421天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "兵装重组概念",
    "rise": 3.3,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "储能",
    "rise": 3.28,
    "rate": 0,
    "tag": "26家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885921"
  },
  {
    "name": "绿色电力",
    "rise": 2.57,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "电力ETF",
    "code": "885936"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 3.4,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "PET铜箔",
    "rise": 4.89,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "886020"
  }
];
const THS_EVENTS = [
  {
    "title": "脑机接口迎重大突破：视网膜芯片获准在欧上市 可帮助患者恢复视力",
    "desc": "",
    "heat": 700306,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "爱朋医疗",
        "code": "300753",
        "chg": 19.989047
      }
    ]
  },
  {
    "title": "宁德时代：587Ah 储能大电芯已实现规模化交付，今明年储能市场仍将保持较快速增长",
    "desc": "",
    "heat": 658037,
    "direction": "宁德时代",
    "themes": [
      "宁德时代概念",
      "电池"
    ],
    "stocks": [
      {
        "name": "紫建电子",
        "code": "301121",
        "chg": 19.985826
      }
    ]
  },
  {
    "title": "“巨无霸”来了！长鑫科技今日登陆科创板",
    "desc": "",
    "heat": 587255,
    "direction": "长鑫科技IPO",
    "themes": [
      "长鑫存储",
      "存储芯片",
      "半导体设备"
    ],
    "stocks": [
      {
        "name": "N长鑫",
        "code": "688825",
        "chg": 465.819861
      }
    ]
  },
  {
    "title": "中国已建成全球规模最大医疗服务体系 累计在研创新药数量超4000款",
    "desc": "",
    "heat": 533317,
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
        "name": "陇神戎发",
        "code": "300534",
        "chg": 20.035778
      }
    ]
  },
  {
    "title": "2026年暑期档电影票房突破55亿元",
    "desc": "",
    "heat": 445359,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "奥飞娱乐",
        "code": "002292",
        "chg": 10.070922
      }
    ]
  },
  {
    "title": "被罚没51.79亿元！携程回应：坚决服从",
    "desc": "",
    "heat": 397949,
    "direction": "旅游及酒店",
    "themes": [
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "君亭酒店",
        "code": "301073",
        "chg": 11.474359
      }
    ]
  },
  {
    "title": "成立仅三年，营收暴涨至10亿元，智元机器人将赴港IPO",
    "desc": "",
    "heat": 342651,
    "direction": "智元机器人",
    "themes": [
      "智元"
    ],
    "stocks": [
      {
        "name": "汉威科技",
        "code": "300007",
        "chg": 9.72973
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "玻纤",
    "change": "+9.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+8.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血氧仪",
    "change": "+6.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "脑科学",
    "change": "+5.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+5.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+5.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+5.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+4.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化妆品",
    "change": "+4.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+4.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PET复合铜箔",
    "change": "+4.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "量子计算",
    "change": "+4.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+4.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+4.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子车牌",
    "change": "+4.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+4.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锆",
    "change": "+4.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "拼多多概念股",
    "change": "+4.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+4.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+4.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 12,
    "hot_rank_chg": 3,
    "stock_cnt": 5741,
    "price": "10.51",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "7198324200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "数据中心",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 3.35
      },
      {
        "name": "核电",
        "change_pct": 3.15
      },
      {
        "name": "充电桩",
        "change_pct": 3.44
      },
      {
        "name": "云计算数据中心",
        "change_pct": 3.11
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.54
      },
      {
        "name": "储能",
        "change_pct": 3.53
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 3.38
      },
      {
        "name": "智能电网",
        "change_pct": 3.5
      },
      {
        "name": "核聚变",
        "change_pct": 3.8
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 13,
    "hot_rank_chg": 10,
    "stock_cnt": 5741,
    "price": "5.97",
    "change": "3.11",
    "market_id": "33",
    "circulate_market_value": "211141790000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 4.13
      },
      {
        "name": "手机产业链",
        "change_pct": 3.63
      },
      {
        "name": "超高清视频",
        "change_pct": 2.67
      },
      {
        "name": "苹果产业链",
        "change_pct": 3.91
      },
      {
        "name": "电竞",
        "change_pct": 4.09
      },
      {
        "name": "半导体",
        "change_pct": 2.87
      },
      {
        "name": "人工智能",
        "change_pct": 3.4
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.78
      },
      {
        "name": "VR&AR",
        "change_pct": 3.31
      },
      {
        "name": "OLED",
        "change_pct": 3.36
      },
      {
        "name": "京津冀",
        "change_pct": 2.65
      },
      {
        "name": "物联网",
        "change_pct": 3.18
      },
      {
        "name": "指纹识别",
        "change_pct": 2.47
      },
      {
        "name": "汽车零部件",
        "change_pct": 3.16
      },
      {
        "name": "白马股",
        "change_pct": 0.91
      },
      {
        "name": "智能制造",
        "change_pct": 3.46
      },
      {
        "name": "小米概念股",
        "change_pct": 3.47
      },
      {
        "name": "国产芯片",
        "change_pct": 2.64
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 3.57
      },
      {
        "name": "全息概念",
        "change_pct": 3.09
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 3.27
      },
      {
        "name": "MicroLED",
        "change_pct": 3.49
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 3.2
      },
      {
        "name": "智能手表",
        "change_pct": 3.66
      },
      {
        "name": "MiniLED",
        "change_pct": 3.65
      },
      {
        "name": "传感器",
        "change_pct": 3.11
      },
      {
        "name": "大硅片",
        "change_pct": 3.24
      },
      {
        "name": "AI PC",
        "change_pct": 3.21
      },
      {
        "name": "华为产业链",
        "change_pct": 3.62
      },
      {
        "name": "回购",
        "change_pct": 2.52
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.84
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 3.39
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 23,
    "hot_rank_chg": -1,
    "stock_cnt": 5741,
    "price": "5.64",
    "change": "4.44",
    "market_id": "17",
    "circulate_market_value": "14204396000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 3.34
      },
      {
        "name": "工业大麻",
        "change_pct": 3.5
      },
      {
        "name": "中药",
        "change_pct": 3.58
      },
      {
        "name": "强势人气股",
        "change_pct": 3.87
      },
      {
        "name": "保健品",
        "change_pct": 2.83
      },
      {
        "name": "民营医院",
        "change_pct": 3.68
      },
      {
        "name": "医药",
        "change_pct": 3.47
      },
      {
        "name": "化学原料药",
        "change_pct": 3.69
      },
      {
        "name": "流感",
        "change_pct": 3.55
      },
      {
        "name": "振兴东北",
        "change_pct": 2.29
      },
      {
        "name": "食品",
        "change_pct": 2.35
      }
    ]
  },
  {
    "code": "600958",
    "name": "东方证券",
    "hot_rank": 29,
    "hot_rank_chg": 19,
    "stock_cnt": 5741,
    "price": "9.08",
    "change": "2.48",
    "market_id": "17",
    "circulate_market_value": "67822904000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 1.89
      },
      {
        "name": "期货概念",
        "change_pct": 1.77
      },
      {
        "name": "券商",
        "change_pct": 0.75
      },
      {
        "name": "破净股",
        "change_pct": 1.73
      },
      {
        "name": "大金融",
        "change_pct": 0.75
      },
      {
        "name": "业绩增长",
        "change_pct": 2.76
      },
      {
        "name": "回购",
        "change_pct": 2.52
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 33,
    "hot_rank_chg": 0,
    "stock_cnt": 5741,
    "price": "5.73",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "5918722100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.78
      },
      {
        "name": "锂电池",
        "change_pct": 4.29
      },
      {
        "name": "强势人气股",
        "change_pct": 3.87
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 5.4
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 2.65
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.54
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 3.25
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 36,
    "hot_rank_chg": 9,
    "stock_cnt": 5741,
    "price": "5.30",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "6872698900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.58
      },
      {
        "name": "创新药",
        "change_pct": 3.22
      },
      {
        "name": "央企改革",
        "change_pct": 2.26
      },
      {
        "name": "医疗器械",
        "change_pct": 3.85
      },
      {
        "name": "强势人气股",
        "change_pct": 3.87
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.78
      },
      {
        "name": "保健品",
        "change_pct": 2.83
      },
      {
        "name": "民营医院",
        "change_pct": 3.68
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 3.03
      },
      {
        "name": "医药",
        "change_pct": 3.47
      },
      {
        "name": "化学原料药",
        "change_pct": 3.69
      },
      {
        "name": "海南概念",
        "change_pct": 3.35
      },
      {
        "name": "脑科学",
        "change_pct": 5.55
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 2.39
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 2.84
      },
      {
        "name": "食品",
        "change_pct": 2.35
      },
      {
        "name": "国企改革",
        "change_pct": 2.35
      },
      {
        "name": "医疗信息化",
        "change_pct": 4.03
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 3.49
      },
      {
        "name": "自贸区",
        "change_pct": 2.45
      },
      {
        "name": "合成生物",
        "change_pct": 3.58
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 37,
    "hot_rank_chg": 17,
    "stock_cnt": 5741,
    "price": "3.06",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "7362764900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 4.29
      },
      {
        "name": "5G",
        "change_pct": 3.7
      },
      {
        "name": "一带一路",
        "change_pct": 2.42
      },
      {
        "name": "光通信",
        "change_pct": 4.15
      },
      {
        "name": "军民融合",
        "change_pct": 3.53
      },
      {
        "name": "光伏",
        "change_pct": 3.34
      },
      {
        "name": "军工",
        "change_pct": 3.35
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.54
      },
      {
        "name": "储能",
        "change_pct": 3.53
      },
      {
        "name": "BIPV概念",
        "change_pct": 3.19
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 3.2
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 3.69
      },
      {
        "name": "华为产业链",
        "change_pct": 3.62
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 38,
    "hot_rank_chg": -2,
    "stock_cnt": 5741,
    "price": "7.10",
    "change": "9.23",
    "market_id": "33",
    "circulate_market_value": "23620252000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 3.35
      },
      {
        "name": "核电",
        "change_pct": 3.15
      },
      {
        "name": "5G",
        "change_pct": 3.7
      },
      {
        "name": "一带一路",
        "change_pct": 2.42
      },
      {
        "name": "充电桩",
        "change_pct": 3.44
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 3.26
      },
      {
        "name": "风电",
        "change_pct": 3.79
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.54
      },
      {
        "name": "储能",
        "change_pct": 3.53
      },
      {
        "name": "特高压",
        "change_pct": 3.77
      },
      {
        "name": "智能电网",
        "change_pct": 3.5
      },
      {
        "name": "海洋经济",
        "change_pct": 2.69
      }
    ]
  },
  {
    "code": "600617",
    "name": "国新能源",
    "hot_rank": 40,
    "hot_rank_chg": -5,
    "stock_cnt": 5741,
    "price": "3.73",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "6622774200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "天然气",
    "xgb_concepts": [
      {
        "name": "山西国企改革",
        "change_pct": 1.81
      },
      {
        "name": "天然气",
        "change_pct": 0.97
      },
      {
        "name": "油气改革",
        "change_pct": 0.75
      },
      {
        "name": "国企改革",
        "change_pct": 2.35
      }
    ]
  },
  {
    "code": "002083",
    "name": "孚日股份",
    "hot_rank": 43,
    "hot_rank_chg": -2,
    "stock_cnt": 5741,
    "price": "12.00",
    "change": "4.17",
    "market_id": "33",
    "circulate_market_value": "11359668100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 3.29
      },
      {
        "name": "锂电池",
        "change_pct": 4.29
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 3.6
      },
      {
        "name": "举牌",
        "change_pct": 2.19
      },
      {
        "name": "纺织服装",
        "change_pct": 3.35
      },
      {
        "name": "山东国企改革",
        "change_pct": 2.75
      },
      {
        "name": "教育",
        "change_pct": 2.79
      },
      {
        "name": "外贸受益概念",
        "change_pct": 2.98
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.54
      },
      {
        "name": "抗菌面料",
        "change_pct": 3.51
      },
      {
        "name": "国企改革",
        "change_pct": 2.35
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 3.49
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 45,
    "hot_rank_chg": 12,
    "stock_cnt": 5741,
    "price": "7.06",
    "change": "7.95",
    "market_id": "17",
    "circulate_market_value": "14425954000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 4.29
      },
      {
        "name": "军民融合",
        "change_pct": 3.53
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 3.26
      },
      {
        "name": "烧碱",
        "change_pct": 2.3
      },
      {
        "name": "军工",
        "change_pct": 3.35
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.54
      },
      {
        "name": "环氧丙烷",
        "change_pct": 2.99
      },
      {
        "name": "氟化工",
        "change_pct": 4.37
      },
      {
        "name": "双氧水",
        "change_pct": 2.98
      },
      {
        "name": "液氯",
        "change_pct": 2.93
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 48,
    "hot_rank_chg": -4,
    "stock_cnt": 5741,
    "price": "6.22",
    "change": "-1.11",
    "market_id": "17",
    "circulate_market_value": "77103674000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 2.26
      },
      {
        "name": "核电",
        "change_pct": 3.15
      },
      {
        "name": "强势人气股",
        "change_pct": 3.87
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.87
      },
      {
        "name": "水电",
        "change_pct": 1.31
      },
      {
        "name": "火电",
        "change_pct": 1.42
      },
      {
        "name": "光伏",
        "change_pct": 3.34
      },
      {
        "name": "风电",
        "change_pct": 3.79
      },
      {
        "name": "国企改革",
        "change_pct": 2.35
      },
      {
        "name": "算电协同",
        "change_pct": 3.95
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 50,
    "hot_rank_chg": 2,
    "stock_cnt": 5741,
    "price": "4.80",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "2429416500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "锂电材料",
    "xgb_concepts": [
      {
        "name": "仪器仪表",
        "change_pct": 3.48
      },
      {
        "name": "锂电池",
        "change_pct": 4.29
      },
      {
        "name": "ST摘帽",
        "change_pct": 3.13
      },
      {
        "name": "有机硅",
        "change_pct": 3.76
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.54
      },
      {
        "name": "华为产业链",
        "change_pct": 3.62
      },
      {
        "name": "供应链金融",
        "change_pct": 2.74
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 51,
    "hot_rank_chg": 10,
    "stock_cnt": 5741,
    "price": "7.12",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "8964283100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "华为鲸鸿动能",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 3.86
      },
      {
        "name": "人工智能",
        "change_pct": 3.4
      },
      {
        "name": "游戏",
        "change_pct": 3.73
      },
      {
        "name": "智能音箱",
        "change_pct": 3.56
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 3.47
      },
      {
        "name": "数字经济",
        "change_pct": 3.3
      },
      {
        "name": "百度概念股",
        "change_pct": 3.46
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.66
      },
      {
        "name": "拼多多概念股",
        "change_pct": 4.52
      },
      {
        "name": "传媒",
        "change_pct": 3.26
      },
      {
        "name": "全息概念",
        "change_pct": 3.09
      },
      {
        "name": "NFT",
        "change_pct": 3.68
      },
      {
        "name": "元宇宙",
        "change_pct": 3.48
      },
      {
        "name": "web3.0",
        "change_pct": 4.15
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 4.09
      },
      {
        "name": "数字人民币",
        "change_pct": 3.04
      },
      {
        "name": "智慧政务",
        "change_pct": 3.52
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 3.39
      },
      {
        "name": "盲盒",
        "change_pct": 4.05
      },
      {
        "name": "AI营销",
        "change_pct": 4.86
      },
      {
        "name": "华为产业链",
        "change_pct": 3.62
      },
      {
        "name": "供应链金融",
        "change_pct": 2.74
      },
      {
        "name": "ChatGPT",
        "change_pct": 3.59
      },
      {
        "name": "区块链",
        "change_pct": 3.37
      }
    ]
  },
  {
    "code": "600775",
    "name": "南京熊猫",
    "hot_rank": 53,
    "hot_rank_chg": 20,
    "stock_cnt": 5741,
    "price": "9.41",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "6322000600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "脑机接口概念",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 1.89
      },
      {
        "name": "央企改革",
        "change_pct": 2.26
      },
      {
        "name": "股权转让",
        "change_pct": 3.29
      },
      {
        "name": "5G",
        "change_pct": 3.7
      },
      {
        "name": "军工集团",
        "change_pct": 2.87
      },
      {
        "name": "工业自动化",
        "change_pct": 3.37
      },
      {
        "name": "北斗导航",
        "change_pct": 3.1
      },
      {
        "name": "智慧城市",
        "change_pct": 3.33
      },
      {
        "name": "军工",
        "change_pct": 3.35
      },
      {
        "name": "机器人",
        "change_pct": 3.56
      },
      {
        "name": "白色家电",
        "change_pct": 2.73
      },
      {
        "name": "家电",
        "change_pct": 3.08
      },
      {
        "name": "脑科学",
        "change_pct": 5.55
      },
      {
        "name": "无人机",
        "change_pct": 3.06
      },
      {
        "name": "智能制造",
        "change_pct": 3.46
      },
      {
        "name": "工业互联网",
        "change_pct": 2.96
      },
      {
        "name": "国企改革",
        "change_pct": 2.35
      },
      {
        "name": "卫星互联网",
        "change_pct": 3.6
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 60,
    "hot_rank_chg": -4,
    "stock_cnt": 5741,
    "price": "10.29",
    "change": "-9.97",
    "market_id": "17",
    "circulate_market_value": "7000489500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.78
      },
      {
        "name": "雄安新区",
        "change_pct": 2.38
      },
      {
        "name": "煤化工",
        "change_pct": 1.13
      }
    ]
  },
  {
    "code": "601727",
    "name": "上海电气",
    "hot_rank": 67,
    "hot_rank_chg": 146,
    "stock_cnt": 5741,
    "price": "6.60",
    "change": "1.23",
    "market_id": "17",
    "circulate_market_value": "83263222000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": 3.53
      },
      {
        "name": "泛在电力物联网",
        "change_pct": 3.35
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.84
      },
      {
        "name": "核电",
        "change_pct": 3.15
      },
      {
        "name": "一带一路",
        "change_pct": 2.42
      },
      {
        "name": "工业自动化",
        "change_pct": 3.37
      },
      {
        "name": "大飞机",
        "change_pct": 3.1
      },
      {
        "name": "高铁轨交",
        "change_pct": 3.02
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 3.26
      },
      {
        "name": "光伏",
        "change_pct": 3.34
      },
      {
        "name": "风电",
        "change_pct": 3.79
      },
      {
        "name": "白马股",
        "change_pct": 0.91
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.54
      },
      {
        "name": "机器人",
        "change_pct": 3.56
      },
      {
        "name": "储能",
        "change_pct": 3.53
      },
      {
        "name": "碳中和",
        "change_pct": 2.31
      },
      {
        "name": "智能制造",
        "change_pct": 3.46
      },
      {
        "name": "工业互联网",
        "change_pct": 2.96
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "换电概念",
        "change_pct": 4.29
      },
      {
        "name": "虚拟电厂",
        "change_pct": 3.22
      },
      {
        "name": "工业母机",
        "change_pct": 3.56
      },
      {
        "name": "东数西算/算力",
        "change_pct": 3.47
      },
      {
        "name": "超超临界发电",
        "change_pct": 2.01
      },
      {
        "name": "钒电池",
        "change_pct": 2.56
      },
      {
        "name": "减速器",
        "change_pct": 3.8
      },
      {
        "name": "光热发电",
        "change_pct": 3.26
      },
      {
        "name": "国企改革",
        "change_pct": 2.35
      },
      {
        "name": "特高压",
        "change_pct": 3.77
      },
      {
        "name": "回购",
        "change_pct": 2.52
      },
      {
        "name": "智能电网",
        "change_pct": 3.5
      },
      {
        "name": "核聚变",
        "change_pct": 3.8
      },
      {
        "name": "区块链",
        "change_pct": 3.37
      },
      {
        "name": "钍基熔盐堆",
        "change_pct": 2.56
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 70,
    "hot_rank_chg": 0,
    "stock_cnt": 5741,
    "price": "7.61",
    "change": "1.06",
    "market_id": "17",
    "circulate_market_value": "15456856000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 2.26
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.87
      },
      {
        "name": "火电",
        "change_pct": 1.42
      },
      {
        "name": "风电",
        "change_pct": 3.79
      },
      {
        "name": "储能",
        "change_pct": 3.53
      },
      {
        "name": "碳中和",
        "change_pct": 2.31
      },
      {
        "name": "国企改革",
        "change_pct": 2.35
      }
    ]
  },
  {
    "code": "603567",
    "name": "珍宝岛",
    "hot_rank": 73,
    "hot_rank_chg": 2,
    "stock_cnt": 5741,
    "price": "6.44",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "6049757200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "中药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.58
      },
      {
        "name": "创新药",
        "change_pct": 3.22
      },
      {
        "name": "医药",
        "change_pct": 3.47
      },
      {
        "name": "破净股",
        "change_pct": 1.73
      },
      {
        "name": "流感",
        "change_pct": 3.55
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 77,
    "hot_rank_chg": 11,
    "stock_cnt": 5741,
    "price": "2.41",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "10601612800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 3.27
      },
      {
        "name": "京津冀",
        "change_pct": 2.65
      },
      {
        "name": "旅游",
        "change_pct": 3.96
      },
      {
        "name": "园林",
        "change_pct": 3.62
      },
      {
        "name": "海绵城市",
        "change_pct": 2.6
      },
      {
        "name": "固废处理",
        "change_pct": 2.4
      },
      {
        "name": "雄安新区",
        "change_pct": 2.38
      },
      {
        "name": "北京城市规划",
        "change_pct": 3.58
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": 2.9
      },
      {
        "name": "碳中和",
        "change_pct": 2.31
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.53
      },
      {
        "name": "汽车拆解",
        "change_pct": 2.49
      },
      {
        "name": "土壤修复",
        "change_pct": 2.98
      },
      {
        "name": "核污染防治",
        "change_pct": 2.86
      },
      {
        "name": "新型城镇化",
        "change_pct": 2.98
      },
      {
        "name": "低价股",
        "change_pct": 2.52
      },
      {
        "name": "西部大开发",
        "change_pct": 2.0
      }
    ]
  },
  {
    "code": "002900",
    "name": "哈三联",
    "hot_rank": 80,
    "hot_rank_chg": -11,
    "stock_cnt": 5741,
    "price": "12.54",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "2020474900.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 3.22
      },
      {
        "name": "医药",
        "change_pct": 3.47
      },
      {
        "name": "化学原料药",
        "change_pct": 3.69
      },
      {
        "name": "医美",
        "change_pct": 3.91
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 3.49
      },
      {
        "name": "化妆品",
        "change_pct": 4.89
      }
    ]
  },
  {
    "code": "000862",
    "name": "银星能源",
    "hot_rank": 81,
    "hot_rank_chg": 0,
    "stock_cnt": 5741,
    "price": "6.12",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "3843158600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "绿电直连",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 2.26
      },
      {
        "name": "光伏",
        "change_pct": 3.34
      },
      {
        "name": "风电",
        "change_pct": 3.79
      },
      {
        "name": "国企改革",
        "change_pct": 2.35
      },
      {
        "name": "宁夏概念",
        "change_pct": 2.89
      }
    ]
  },
  {
    "code": "600619",
    "name": "海立股份",
    "hot_rank": 91,
    "hot_rank_chg": 288,
    "stock_cnt": 5741,
    "price": "12.42",
    "change": "3.24",
    "market_id": "17",
    "circulate_market_value": "9801551000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 1.84
      },
      {
        "name": "冷链",
        "change_pct": 2.86
      },
      {
        "name": "汽车零部件",
        "change_pct": 3.16
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.54
      },
      {
        "name": "白色家电",
        "change_pct": 2.73
      },
      {
        "name": "家电",
        "change_pct": 3.08
      },
      {
        "name": "小米概念股",
        "change_pct": 3.47
      },
      {
        "name": "新能源车零部件",
        "change_pct": 3.25
      },
      {
        "name": "汽车热管理",
        "change_pct": 3.27
      },
      {
        "name": "热泵",
        "change_pct": 3.73
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 3.71
      },
      {
        "name": "国企改革",
        "change_pct": 2.35
      },
      {
        "name": "磁悬浮压缩机",
        "change_pct": 4.23
      }
    ]
  },
  {
    "code": "002195",
    "name": "岩山科技",
    "hot_rank": 94,
    "hot_rank_chg": 34,
    "stock_cnt": 5741,
    "price": "6.21",
    "change": "5.43",
    "market_id": "33",
    "circulate_market_value": "34874326000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 3.11
      },
      {
        "name": "无人驾驶",
        "change_pct": 2.92
      },
      {
        "name": "人工智能",
        "change_pct": 3.4
      },
      {
        "name": "网络安全",
        "change_pct": 2.86
      },
      {
        "name": "游戏",
        "change_pct": 3.73
      },
      {
        "name": "大数据",
        "change_pct": 3.21
      },
      {
        "name": "脑科学",
        "change_pct": 5.55
      },
      {
        "name": "百度概念股",
        "change_pct": 3.46
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 3.38
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.66
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 4.09
      },
      {
        "name": "自动刹车",
        "change_pct": 2.62
      },
      {
        "name": "人工智能大模型",
        "change_pct": 3.17
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.38
      },
      {
        "name": "AI医疗",
        "change_pct": 3.91
      },
      {
        "name": "区块链",
        "change_pct": 3.37
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688825", "name": "长鑫科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5741, "price": "49.00", "change": "465.82", "market_id": "17", "circulate_market_value": "220648910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600895", "name": "张江高科", "hot_rank": 2, "hot_rank_chg": 25, "stock_cnt": 5741, "price": "28.22", "change": "2.99", "market_id": "17", "circulate_market_value": "43704019000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5741, "price": "33.57", "change": "9.99", "market_id": "33", "circulate_market_value": "36214220000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锂电池"}, {"code": "001258", "name": "立新能源", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5741, "price": "14.33", "change": "9.98", "market_id": "33", "circulate_market_value": "13374527000.00", "change_type": "1", "change_section": "8", "change_days": "7", "change_reason": "风电光伏"}, {"code": "600667", "name": "太极实业", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5741, "price": "17.92", "change": "10.01", "market_id": "17", "circulate_market_value": "37480436000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "002409", "name": "雅克科技", "hot_rank": 6, "hot_rank_chg": 1, "stock_cnt": 5741, "price": "169.35", "change": "10.00", "market_id": "33", "circulate_market_value": "53941827000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "HBM前驱体"}, {"code": "601606", "name": "长城军工", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5741, "price": "35.26", "change": "10.02", "market_id": "17", "circulate_market_value": "25536293000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "军工"}, {"code": "000938", "name": "紫光股份", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5741, "price": "41.47", "change": "0.05", "market_id": "33", "circulate_market_value": "118607214000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5741, "price": "44.24", "change": "9.99", "market_id": "33", "circulate_market_value": "51186245000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC"}, {"code": "603986", "name": "兆易创新", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5741, "price": "434.03", "change": "-5.03", "market_id": "17", "circulate_market_value": "290145550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 11, "hot_rank_chg": 6, "stock_cnt": 5741, "price": "24.88", "change": "9.99", "market_id": "17", "circulate_market_value": "9528150500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "存储芯片"}, {"code": "000533", "name": "顺钠股份", "hot_rank": 12, "hot_rank_chg": 3, "stock_cnt": 5741, "price": "10.51", "change": "10.05", "market_id": "33", "circulate_market_value": "7198324200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "数据中心", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 3.35}, {"name": "核电", "change_pct": 3.15}, {"name": "充电桩", "change_pct": 3.44}, {"name": "云计算数据中心", "change_pct": 3.11}, {"name": "新能源汽车", "change_pct": 3.54}, {"name": "储能", "change_pct": 3.53}, {"name": "阿里巴巴概念股", "change_pct": 3.38}, {"name": "智能电网", "change_pct": 3.5}, {"name": "核聚变", "change_pct": 3.8}]}, {"code": "000725", "name": "京东方A", "hot_rank": 13, "hot_rank_chg": 10, "stock_cnt": 5741, "price": "5.97", "change": "3.11", "market_id": "33", "circulate_market_value": "211141790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 4.13}, {"name": "手机产业链", "change_pct": 3.63}, {"name": "超高清视频", "change_pct": 2.67}, {"name": "苹果产业链", "change_pct": 3.91}, {"name": "电竞", "change_pct": 4.09}, {"name": "半导体", "change_pct": 2.87}, {"name": "人工智能", "change_pct": 3.4}, {"name": "互联网医疗", "change_pct": 3.78}, {"name": "VR&AR", "change_pct": 3.31}, {"name": "OLED", "change_pct": 3.36}, {"name": "京津冀", "change_pct": 2.65}, {"name": "物联网", "change_pct": 3.18}, {"name": "指纹识别", "change_pct": 2.47}, {"name": "汽车零部件", "change_pct": 3.16}, {"name": "白马股", "change_pct": 0.91}, {"name": "智能制造", "change_pct": 3.46}, {"name": "小米概念股", "change_pct": 3.47}, {"name": "国产芯片", "change_pct": 2.64}, {"name": "液晶面板/LCD", "change_pct": 3.57}, {"name": "全息概念", "change_pct": 3.09}, {"name": "理想汽车概念股", "change_pct": 3.27}, {"name": "MicroLED", "change_pct": 3.49}, {"name": "钙钛矿电池", "change_pct": 3.2}, {"name": "智能手表", "change_pct": 3.66}, {"name": "MiniLED", "change_pct": 3.65}, {"name": "传感器", "change_pct": 3.11}, {"name": "大硅片", "change_pct": 3.24}, {"name": "AI PC", "change_pct": 3.21}, {"name": "华为产业链", "change_pct": 3.62}, {"name": "回购", "change_pct": 2.52}, {"name": "智能眼镜/MR头显", "change_pct": 3.84}, {"name": "玻璃基板封装", "change_pct": 3.39}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 14, "hot_rank_chg": -1, "stock_cnt": 5741, "price": "41.07", "change": "9.99", "market_id": "17", "circulate_market_value": "163113080000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB概念"}, {"code": "002173", "name": "创新医疗", "hot_rank": 15, "hot_rank_chg": 9, "stock_cnt": 5741, "price": "20.69", "change": "9.99", "market_id": "33", "circulate_market_value": "8707697500.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "脑机接口"}, {"code": "002156", "name": "通富微电", "hot_rank": 16, "hot_rank_chg": -6, "stock_cnt": 5741, "price": "76.67", "change": "0.04", "market_id": "33", "circulate_market_value": "116343062000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 17, "hot_rank_chg": -6, "stock_cnt": 5741, "price": "47.05", "change": "6.93", "market_id": "17", "circulate_market_value": "39830334000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920176", "name": "维琪科技", "hot_rank": 18, "hot_rank_chg": -4, "stock_cnt": 5741, "price": "155.01", "change": "599.50", "market_id": "151", "circulate_market_value": "1231864470.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 19, "hot_rank_chg": -3, "stock_cnt": 5741, "price": "15.68", "change": "6.16", "market_id": "17", "circulate_market_value": "23092043000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5741, "price": "82.35", "change": "-0.66", "market_id": "17", "circulate_market_value": "147358290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 21, "hot_rank_chg": -3, "stock_cnt": 5741, "price": "43.95", "change": "4.67", "market_id": "33", "circulate_market_value": "69184138000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 22, "hot_rank_chg": 3, "stock_cnt": 5741, "price": "13.97", "change": "10.00", "market_id": "33", "circulate_market_value": "14841781000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "新股"}, {"code": "600664", "name": "哈药股份", "hot_rank": 23, "hot_rank_chg": -1, "stock_cnt": 5741, "price": "5.64", "change": "4.44", "market_id": "17", "circulate_market_value": "14204396000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 3.34}, {"name": "工业大麻", "change_pct": 3.5}, {"name": "中药", "change_pct": 3.58}, {"name": "强势人气股", "change_pct": 3.87}, {"name": "保健品", "change_pct": 2.83}, {"name": "民营医院", "change_pct": 3.68}, {"name": "医药", "change_pct": 3.47}, {"name": "化学原料药", "change_pct": 3.69}, {"name": "流感", "change_pct": 3.55}, {"name": "振兴东北", "change_pct": 2.29}, {"name": "食品", "change_pct": 2.35}]}, {"code": "001309", "name": "德明利", "hot_rank": 24, "hot_rank_chg": -12, "stock_cnt": 5741, "price": "401.60", "change": "0.43", "market_id": "33", "circulate_market_value": "66275949000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 25, "hot_rank_chg": 4, "stock_cnt": 5741, "price": "61.55", "change": "2.16", "market_id": "17", "circulate_market_value": "1221403880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002879", "name": "长缆科技", "hot_rank": 26, "hot_rank_chg": -7, "stock_cnt": 5741, "price": "19.86", "change": "10.03", "market_id": "33", "circulate_market_value": "2723581000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "回购增持"}, {"code": "002185", "name": "华天科技", "hot_rank": 27, "hot_rank_chg": -1, "stock_cnt": 5741, "price": "18.59", "change": "0.00", "market_id": "33", "circulate_market_value": "61768096000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 28, "hot_rank_chg": -7, "stock_cnt": 5741, "price": "211.90", "change": "6.39", "market_id": "33", "circulate_market_value": "293761570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600958", "name": "东方证券", "hot_rank": 29, "hot_rank_chg": 19, "stock_cnt": 5741, "price": "9.08", "change": "2.48", "market_id": "17", "circulate_market_value": "67822904000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 1.89}, {"name": "期货概念", "change_pct": 1.77}, {"name": "券商", "change_pct": 0.75}, {"name": "破净股", "change_pct": 1.73}, {"name": "大金融", "change_pct": 0.75}, {"name": "业绩增长", "change_pct": 2.76}, {"name": "回购", "change_pct": 2.52}]}, {"code": "301526", "name": "国际复材", "hot_rank": 30, "hot_rank_chg": 8, "stock_cnt": 5741, "price": "30.84", "change": "20.00", "market_id": "33", "circulate_market_value": "43311478000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "300750", "name": "宁德时代", "hot_rank": 31, "hot_rank_chg": -3, "stock_cnt": 5741, "price": "400.00", "change": "4.44", "market_id": "33", "circulate_market_value": "1704032400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 32, "hot_rank_chg": -2, "stock_cnt": 5741, "price": "16.87", "change": "9.97", "market_id": "33", "circulate_market_value": "7630955600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力"}, {"code": "002141", "name": "贤丰控股", "hot_rank": 33, "hot_rank_chg": 0, "stock_cnt": 5741, "price": "5.73", "change": "9.98", "market_id": "33", "circulate_market_value": "5918722100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.78}, {"name": "锂电池", "change_pct": 4.29}, {"name": "强势人气股", "change_pct": 3.87}, {"name": "铜箔/覆铜板", "change_pct": 5.4}, {"name": "粤港澳大湾区", "change_pct": 2.65}, {"name": "新能源汽车", "change_pct": 3.54}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 3.25}]}, {"code": "688146", "name": "中船特气", "hot_rank": 34, "hot_rank_chg": 0, "stock_cnt": 5741, "price": "284.94", "change": "15.98", "market_id": "17", "circulate_market_value": "41307992000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 35, "hot_rank_chg": -3, "stock_cnt": 5741, "price": "13.06", "change": "-3.97", "market_id": "33", "circulate_market_value": "10488123800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 36, "hot_rank_chg": 9, "stock_cnt": 5741, "price": "5.30", "change": "9.96", "market_id": "33", "circulate_market_value": "6872698900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.58}, {"name": "创新药", "change_pct": 3.22}, {"name": "央企改革", "change_pct": 2.26}, {"name": "医疗器械", "change_pct": 3.85}, {"name": "强势人气股", "change_pct": 3.87}, {"name": "互联网医疗", "change_pct": 3.78}, {"name": "保健品", "change_pct": 2.83}, {"name": "民营医院", "change_pct": 3.68}, {"name": "CAR-T疗法", "change_pct": 3.03}, {"name": "医药", "change_pct": 3.47}, {"name": "化学原料药", "change_pct": 3.69}, {"name": "海南概念", "change_pct": 3.35}, {"name": "脑科学", "change_pct": 5.55}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 2.39}, {"name": "海南自由贸易港", "change_pct": 2.84}, {"name": "食品", "change_pct": 2.35}, {"name": "国企改革", "change_pct": 2.35}, {"name": "医疗信息化", "change_pct": 4.03}, {"name": "新冠病毒防治", "change_pct": 3.49}, {"name": "自贸区", "change_pct": 2.45}, {"name": "合成生物", "change_pct": 3.58}]}, {"code": "002309", "name": "中利集团", "hot_rank": 37, "hot_rank_chg": 17, "stock_cnt": 5741, "price": "3.06", "change": "10.07", "market_id": "33", "circulate_market_value": "7362764900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏", "xgb_concepts": [{"name": "锂电池", "change_pct": 4.29}, {"name": "5G", "change_pct": 3.7}, {"name": "一带一路", "change_pct": 2.42}, {"name": "光通信", "change_pct": 4.15}, {"name": "军民融合", "change_pct": 3.53}, {"name": "光伏", "change_pct": 3.34}, {"name": "军工", "change_pct": 3.35}, {"name": "新能源汽车", "change_pct": 3.54}, {"name": "储能", "change_pct": 3.53}, {"name": "BIPV概念", "change_pct": 3.19}, {"name": "钙钛矿电池", "change_pct": 3.2}, {"name": "异质结电池HJT", "change_pct": 3.69}, {"name": "华为产业链", "change_pct": 3.62}]}, {"code": "002498", "name": "汉缆股份", "hot_rank": 38, "hot_rank_chg": -2, "stock_cnt": 5741, "price": "7.10", "change": "9.23", "market_id": "33", "circulate_market_value": "23620252000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 3.35}, {"name": "核电", "change_pct": 3.15}, {"name": "5G", "change_pct": 3.7}, {"name": "一带一路", "change_pct": 2.42}, {"name": "充电桩", "change_pct": 3.44}, {"name": "氢能源/燃料电池", "change_pct": 3.26}, {"name": "风电", "change_pct": 3.79}, {"name": "新能源汽车", "change_pct": 3.54}, {"name": "储能", "change_pct": 3.53}, {"name": "特高压", "change_pct": 3.77}, {"name": "智能电网", "change_pct": 3.5}, {"name": "海洋经济", "change_pct": 2.69}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 39, "hot_rank_chg": -8, "stock_cnt": 5741, "price": "55.55", "change": "5.95", "market_id": "17", "circulate_market_value": "136300050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600617", "name": "国新能源", "hot_rank": 40, "hot_rank_chg": -5, "stock_cnt": 5741, "price": "3.73", "change": "10.03", "market_id": "17", "circulate_market_value": "6622774200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "天然气", "xgb_concepts": [{"name": "山西国企改革", "change_pct": 1.81}, {"name": "天然气", "change_pct": 0.97}, {"name": "油气改革", "change_pct": 0.75}, {"name": "国企改革", "change_pct": 2.35}]}, {"code": "603823", "name": "百合花", "hot_rank": 41, "hot_rank_chg": 2, "stock_cnt": 5741, "price": "68.32", "change": "-10.00", "market_id": "17", "circulate_market_value": "28446242000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301234", "name": "五洲医疗", "hot_rank": 42, "hot_rank_chg": 9, "stock_cnt": 5741, "price": "70.50", "change": "20.00", "market_id": "33", "circulate_market_value": "2832028200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "跨界并购"}, {"code": "002083", "name": "孚日股份", "hot_rank": 43, "hot_rank_chg": -2, "stock_cnt": 5741, "price": "12.00", "change": "4.17", "market_id": "33", "circulate_market_value": "11359668100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 3.29}, {"name": "锂电池", "change_pct": 4.29}, {"name": "优化生育（三孩）", "change_pct": 3.6}, {"name": "举牌", "change_pct": 2.19}, {"name": "纺织服装", "change_pct": 3.35}, {"name": "山东国企改革", "change_pct": 2.75}, {"name": "教育", "change_pct": 2.79}, {"name": "外贸受益概念", "change_pct": 2.98}, {"name": "新能源汽车", "change_pct": 3.54}, {"name": "抗菌面料", "change_pct": 3.51}, {"name": "国企改革", "change_pct": 2.35}, {"name": "新冠病毒防治", "change_pct": 3.49}]}, {"code": "601179", "name": "中国西电", "hot_rank": 44, "hot_rank_chg": 5, "stock_cnt": 5741, "price": "14.09", "change": "3.98", "market_id": "17", "circulate_market_value": "72223682000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601678", "name": "滨化股份", "hot_rank": 45, "hot_rank_chg": 12, "stock_cnt": 5741, "price": "7.06", "change": "7.95", "market_id": "17", "circulate_market_value": "14425954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 4.29}, {"name": "军民融合", "change_pct": 3.53}, {"name": "氢能源/燃料电池", "change_pct": 3.26}, {"name": "烧碱", "change_pct": 2.3}, {"name": "军工", "change_pct": 3.35}, {"name": "新能源汽车", "change_pct": 3.54}, {"name": "环氧丙烷", "change_pct": 2.99}, {"name": "氟化工", "change_pct": 4.37}, {"name": "双氧水", "change_pct": 2.98}, {"name": "液氯", "change_pct": 2.93}]}, {"code": "002222", "name": "福晶科技", "hot_rank": 46, "hot_rank_chg": 113, "stock_cnt": 5741, "price": "57.29", "change": "2.32", "market_id": "33", "circulate_market_value": "26820412000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 47, "hot_rank_chg": -10, "stock_cnt": 5741, "price": "1076.94", "change": "2.91", "market_id": "33", "circulate_market_value": "1195338540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 48, "hot_rank_chg": -4, "stock_cnt": 5741, "price": "6.22", "change": "-1.11", "market_id": "17", "circulate_market_value": "77103674000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 2.26}, {"name": "核电", "change_pct": 3.15}, {"name": "强势人气股", "change_pct": 3.87}, {"name": "电力体制改革", "change_pct": 1.87}, {"name": "水电", "change_pct": 1.31}, {"name": "火电", "change_pct": 1.42}, {"name": "光伏", "change_pct": 3.34}, {"name": "风电", "change_pct": 3.79}, {"name": "国企改革", "change_pct": 2.35}, {"name": "算电协同", "change_pct": 3.95}]}, {"code": "000815", "name": "美利云", "hot_rank": 49, "hot_rank_chg": -7, "stock_cnt": 5741, "price": "16.60", "change": "2.53", "market_id": "33", "circulate_market_value": "11541366400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002388", "name": "新亚制程", "hot_rank": 50, "hot_rank_chg": 2, "stock_cnt": 5741, "price": "4.80", "change": "10.09", "market_id": "33", "circulate_market_value": "2429416500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "锂电材料", "xgb_concepts": [{"name": "仪器仪表", "change_pct": 3.48}, {"name": "锂电池", "change_pct": 4.29}, {"name": "ST摘帽", "change_pct": 3.13}, {"name": "有机硅", "change_pct": 3.76}, {"name": "新能源汽车", "change_pct": 3.54}, {"name": "华为产业链", "change_pct": 3.62}, {"name": "供应链金融", "change_pct": 2.74}]}, {"code": "000676", "name": "智度股份", "hot_rank": 51, "hot_rank_chg": 10, "stock_cnt": 5741, "price": "7.12", "change": "10.05", "market_id": "33", "circulate_market_value": "8964283100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为鲸鸿动能", "xgb_concepts": [{"name": "密集调研", "change_pct": 3.86}, {"name": "人工智能", "change_pct": 3.4}, {"name": "游戏", "change_pct": 3.73}, {"name": "智能音箱", "change_pct": 3.56}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 3.47}, {"name": "数字经济", "change_pct": 3.3}, {"name": "百度概念股", "change_pct": 3.46}, {"name": "腾讯概念股", "change_pct": 3.66}, {"name": "拼多多概念股", "change_pct": 4.52}, {"name": "传媒", "change_pct": 3.26}, {"name": "全息概念", "change_pct": 3.09}, {"name": "NFT", "change_pct": 3.68}, {"name": "元宇宙", "change_pct": 3.48}, {"name": "web3.0", "change_pct": 4.15}, {"name": "字节跳动概念股", "change_pct": 4.09}, {"name": "数字人民币", "change_pct": 3.04}, {"name": "智慧政务", "change_pct": 3.52}, {"name": "华为鸿蒙", "change_pct": 3.39}, {"name": "盲盒", "change_pct": 4.05}, {"name": "AI营销", "change_pct": 4.86}, {"name": "华为产业链", "change_pct": 3.62}, {"name": "供应链金融", "change_pct": 2.74}, {"name": "ChatGPT", "change_pct": 3.59}, {"name": "区块链", "change_pct": 3.37}]}, {"code": "002371", "name": "北方华创", "hot_rank": 52, "hot_rank_chg": 6, "stock_cnt": 5741, "price": "770.00", "change": "1.72", "market_id": "33", "circulate_market_value": "558334580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600775", "name": "南京熊猫", "hot_rank": 53, "hot_rank_chg": 20, "stock_cnt": 5741, "price": "9.41", "change": "10.06", "market_id": "17", "circulate_market_value": "6322000600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "脑机接口概念", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 1.89}, {"name": "央企改革", "change_pct": 2.26}, {"name": "股权转让", "change_pct": 3.29}, {"name": "5G", "change_pct": 3.7}, {"name": "军工集团", "change_pct": 2.87}, {"name": "工业自动化", "change_pct": 3.37}, {"name": "北斗导航", "change_pct": 3.1}, {"name": "智慧城市", "change_pct": 3.33}, {"name": "军工", "change_pct": 3.35}, {"name": "机器人", "change_pct": 3.56}, {"name": "白色家电", "change_pct": 2.73}, {"name": "家电", "change_pct": 3.08}, {"name": "脑科学", "change_pct": 5.55}, {"name": "无人机", "change_pct": 3.06}, {"name": "智能制造", "change_pct": 3.46}, {"name": "工业互联网", "change_pct": 2.96}, {"name": "国企改革", "change_pct": 2.35}, {"name": "卫星互联网", "change_pct": 3.6}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 54, "hot_rank_chg": -7, "stock_cnt": 5741, "price": "31.30", "change": "-4.92", "market_id": "33", "circulate_market_value": "23707093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688502", "name": "茂莱光学", "hot_rank": 55, "hot_rank_chg": 87, "stock_cnt": 5741, "price": "381.78", "change": "6.64", "market_id": "17", "circulate_market_value": "20158270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002415", "name": "海康威视", "hot_rank": 56, "hot_rank_chg": 21, "stock_cnt": 5741, "price": "36.99", "change": "4.23", "market_id": "33", "circulate_market_value": "334615010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300534", "name": "陇神戎发", "hot_rank": 57, "hot_rank_chg": 11, "stock_cnt": 5741, "price": "13.42", "change": "20.04", "market_id": "33", "circulate_market_value": "4053531000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中医药"}, {"code": "603629", "name": "利通电子", "hot_rank": 58, "hot_rank_chg": -19, "stock_cnt": 5741, "price": "115.06", "change": "5.94", "market_id": "17", "circulate_market_value": "41504834000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 59, "hot_rank_chg": -9, "stock_cnt": 5741, "price": "160.35", "change": "10.00", "market_id": "17", "circulate_market_value": "141064300000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "特种电子布"}, {"code": "600722", "name": "金牛化工", "hot_rank": 60, "hot_rank_chg": -4, "stock_cnt": 5741, "price": "10.29", "change": "-9.97", "market_id": "17", "circulate_market_value": "7000489500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.78}, {"name": "雄安新区", "change_pct": 2.38}, {"name": "煤化工", "change_pct": 1.13}]}, {"code": "603118", "name": "共进股份", "hot_rank": 61, "hot_rank_chg": -1, "stock_cnt": 5741, "price": "16.20", "change": "2.73", "market_id": "17", "circulate_market_value": "12753877800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 62, "hot_rank_chg": -7, "stock_cnt": 5741, "price": "85.00", "change": "-0.36", "market_id": "33", "circulate_market_value": "124680703000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 63, "hot_rank_chg": -23, "stock_cnt": 5741, "price": "15.40", "change": "10.00", "market_id": "17", "circulate_market_value": "3730958000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "拟收购欧康诺"}, {"code": "603228", "name": "景旺电子", "hot_rank": 64, "hot_rank_chg": -18, "stock_cnt": 5741, "price": "82.06", "change": "10.00", "market_id": "17", "circulate_market_value": "80573696000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力PCB"}, {"code": "603459", "name": "红板科技", "hot_rank": 65, "hot_rank_chg": -12, "stock_cnt": 5741, "price": "92.50", "change": "10.00", "market_id": "17", "circulate_market_value": "7312296900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "600900", "name": "长江电力", "hot_rank": 66, "hot_rank_chg": 12, "stock_cnt": 5741, "price": "28.35", "change": "-1.90", "market_id": "17", "circulate_market_value": "693673970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601727", "name": "上海电气", "hot_rank": 67, "hot_rank_chg": 146, "stock_cnt": 5741, "price": "6.60", "change": "1.23", "market_id": "17", "circulate_market_value": "83263222000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "燃气轮机", "change_pct": 3.53}, {"name": "泛在电力物联网", "change_pct": 3.35}, {"name": "上海国企改革", "change_pct": 1.84}, {"name": "核电", "change_pct": 3.15}, {"name": "一带一路", "change_pct": 2.42}, {"name": "工业自动化", "change_pct": 3.37}, {"name": "大飞机", "change_pct": 3.1}, {"name": "高铁轨交", "change_pct": 3.02}, {"name": "氢能源/燃料电池", "change_pct": 3.26}, {"name": "光伏", "change_pct": 3.34}, {"name": "风电", "change_pct": 3.79}, {"name": "白马股", "change_pct": 0.91}, {"name": "新能源汽车", "change_pct": 3.54}, {"name": "机器人", "change_pct": 3.56}, {"name": "储能", "change_pct": 3.53}, {"name": "碳中和", "change_pct": 2.31}, {"name": "智能制造", "change_pct": 3.46}, {"name": "工业互联网", "change_pct": 2.96}, {"name": "独角兽", "change_pct": 0.85}, {"name": "换电概念", "change_pct": 4.29}, {"name": "虚拟电厂", "change_pct": 3.22}, {"name": "工业母机", "change_pct": 3.56}, {"name": "东数西算/算力", "change_pct": 3.47}, {"name": "超超临界发电", "change_pct": 2.01}, {"name": "钒电池", "change_pct": 2.56}, {"name": "减速器", "change_pct": 3.8}, {"name": "光热发电", "change_pct": 3.26}, {"name": "国企改革", "change_pct": 2.35}, {"name": "特高压", "change_pct": 3.77}, {"name": "回购", "change_pct": 2.52}, {"name": "智能电网", "change_pct": 3.5}, {"name": "核聚变", "change_pct": 3.8}, {"name": "区块链", "change_pct": 3.37}, {"name": "钍基熔盐堆", "change_pct": 2.56}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 68, "hot_rank_chg": 11, "stock_cnt": 5741, "price": "31.77", "change": "0.82", "market_id": "17", "circulate_market_value": "654518970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300753", "name": "爱朋医疗", "hot_rank": 69, "hot_rank_chg": 72, "stock_cnt": 5741, "price": "21.91", "change": "19.99", "market_id": "33", "circulate_market_value": "1925758300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "脑机接口"}, {"code": "600744", "name": "华银电力", "hot_rank": 70, "hot_rank_chg": 0, "stock_cnt": 5741, "price": "7.61", "change": "1.06", "market_id": "17", "circulate_market_value": "15456856000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 2.26}, {"name": "电力体制改革", "change_pct": 1.87}, {"name": "火电", "change_pct": 1.42}, {"name": "风电", "change_pct": 3.79}, {"name": "储能", "change_pct": 3.53}, {"name": "碳中和", "change_pct": 2.31}, {"name": "国企改革", "change_pct": 2.35}]}, {"code": "600522", "name": "中天科技", "hot_rank": 71, "hot_rank_chg": -8, "stock_cnt": 5741, "price": "32.66", "change": "4.05", "market_id": "17", "circulate_market_value": "111466936000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 72, "hot_rank_chg": -5, "stock_cnt": 5741, "price": "62.89", "change": "3.80", "market_id": "33", "circulate_market_value": "460673980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603567", "name": "珍宝岛", "hot_rank": 73, "hot_rank_chg": 2, "stock_cnt": 5741, "price": "6.44", "change": "10.09", "market_id": "17", "circulate_market_value": "6049757200.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "中药", "xgb_concepts": [{"name": "中药", "change_pct": 3.58}, {"name": "创新药", "change_pct": 3.22}, {"name": "医药", "change_pct": 3.47}, {"name": "破净股", "change_pct": 1.73}, {"name": "流感", "change_pct": 3.55}]}, {"code": "603127", "name": "昭衍新药", "hot_rank": 74, "hot_rank_chg": -15, "stock_cnt": 5741, "price": "49.70", "change": "9.81", "market_id": "17", "circulate_market_value": "31197521000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 75, "hot_rank_chg": 9, "stock_cnt": 5741, "price": "143.77", "change": "0.03", "market_id": "17", "circulate_market_value": "287477110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 76, "hot_rank_chg": -14, "stock_cnt": 5741, "price": "28.32", "change": "6.83", "market_id": "17", "circulate_market_value": "5180672000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002310", "name": "东方新能", "hot_rank": 77, "hot_rank_chg": 11, "stock_cnt": 5741, "price": "2.41", "change": "10.05", "market_id": "33", "circulate_market_value": "10601612800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏", "xgb_concepts": [{"name": "资产重组", "change_pct": 3.27}, {"name": "京津冀", "change_pct": 2.65}, {"name": "旅游", "change_pct": 3.96}, {"name": "园林", "change_pct": 3.62}, {"name": "海绵城市", "change_pct": 2.6}, {"name": "固废处理", "change_pct": 2.4}, {"name": "雄安新区", "change_pct": 2.38}, {"name": "北京城市规划", "change_pct": 3.58}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": 2.9}, {"name": "碳中和", "change_pct": 2.31}, {"name": "乡村振兴", "change_pct": 2.53}, {"name": "汽车拆解", "change_pct": 2.49}, {"name": "土壤修复", "change_pct": 2.98}, {"name": "核污染防治", "change_pct": 2.86}, {"name": "新型城镇化", "change_pct": 2.98}, {"name": "低价股", "change_pct": 2.52}, {"name": "西部大开发", "change_pct": 2.0}]}, {"code": "300548", "name": "长芯博创", "hot_rank": 78, "hot_rank_chg": -7, "stock_cnt": 5741, "price": "167.70", "change": "2.88", "market_id": "33", "circulate_market_value": "49338775000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 79, "hot_rank_chg": -3, "stock_cnt": 5741, "price": "36.03", "change": "2.80", "market_id": "33", "circulate_market_value": "132993161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002900", "name": "哈三联", "hot_rank": 80, "hot_rank_chg": -11, "stock_cnt": 5741, "price": "12.54", "change": "10.00", "market_id": "33", "circulate_market_value": "2020474900.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "创新药", "change_pct": 3.22}, {"name": "医药", "change_pct": 3.47}, {"name": "化学原料药", "change_pct": 3.69}, {"name": "医美", "change_pct": 3.91}, {"name": "新冠病毒防治", "change_pct": 3.49}, {"name": "化妆品", "change_pct": 4.89}]}, {"code": "000862", "name": "银星能源", "hot_rank": 81, "hot_rank_chg": 0, "stock_cnt": 5741, "price": "6.12", "change": "10.07", "market_id": "33", "circulate_market_value": "3843158600.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "绿电直连", "xgb_concepts": [{"name": "央企改革", "change_pct": 2.26}, {"name": "光伏", "change_pct": 3.34}, {"name": "风电", "change_pct": 3.79}, {"name": "国企改革", "change_pct": 2.35}, {"name": "宁夏概念", "change_pct": 2.89}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 82, "hot_rank_chg": -17, "stock_cnt": 5741, "price": "62.44", "change": "9.14", "market_id": "33", "circulate_market_value": "53303069000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 83, "hot_rank_chg": -19, "stock_cnt": 5741, "price": "63.69", "change": "10.00", "market_id": "33", "circulate_market_value": "46131649000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增"}, {"code": "002432", "name": "九安医疗", "hot_rank": 84, "hot_rank_chg": -4, "stock_cnt": 5741, "price": "72.40", "change": "7.13", "market_id": "33", "circulate_market_value": "33685716000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 85, "hot_rank_chg": 69, "stock_cnt": 5741, "price": "55.75", "change": "4.01", "market_id": "33", "circulate_market_value": "36571445000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 86, "hot_rank_chg": 4, "stock_cnt": 5741, "price": "96.74", "change": "-0.78", "market_id": "17", "circulate_market_value": "141535880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 87, "hot_rank_chg": -21, "stock_cnt": 5741, "price": "491.00", "change": "3.15", "market_id": "33", "circulate_market_value": "615833390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 89, "hot_rank_chg": 20, "stock_cnt": 5741, "price": "35.25", "change": "0.71", "market_id": "33", "circulate_market_value": "141973650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 90, "hot_rank_chg": -18, "stock_cnt": 5741, "price": "125.99", "change": "6.13", "market_id": "17", "circulate_market_value": "303856240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600619", "name": "海立股份", "hot_rank": 91, "hot_rank_chg": 288, "stock_cnt": 5741, "price": "12.42", "change": "3.24", "market_id": "17", "circulate_market_value": "9801551000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 1.84}, {"name": "冷链", "change_pct": 2.86}, {"name": "汽车零部件", "change_pct": 3.16}, {"name": "新能源汽车", "change_pct": 3.54}, {"name": "白色家电", "change_pct": 2.73}, {"name": "家电", "change_pct": 3.08}, {"name": "小米概念股", "change_pct": 3.47}, {"name": "新能源车零部件", "change_pct": 3.25}, {"name": "汽车热管理", "change_pct": 3.27}, {"name": "热泵", "change_pct": 3.73}, {"name": "光刻机（胶）", "change_pct": 3.71}, {"name": "国企改革", "change_pct": 2.35}, {"name": "磁悬浮压缩机", "change_pct": 4.23}]}, {"code": "301421", "name": "波长光电", "hot_rank": 92, "hot_rank_chg": 129, "stock_cnt": 5741, "price": "68.43", "change": "3.17", "market_id": "33", "circulate_market_value": "3168889600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 93, "hot_rank_chg": -11, "stock_cnt": 5741, "price": "31.55", "change": "5.03", "market_id": "33", "circulate_market_value": "24684866000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002195", "name": "岩山科技", "hot_rank": 94, "hot_rank_chg": 34, "stock_cnt": 5741, "price": "6.21", "change": "5.43", "market_id": "33", "circulate_market_value": "34874326000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "国产软件", "change_pct": 3.11}, {"name": "无人驾驶", "change_pct": 2.92}, {"name": "人工智能", "change_pct": 3.4}, {"name": "网络安全", "change_pct": 2.86}, {"name": "游戏", "change_pct": 3.73}, {"name": "大数据", "change_pct": 3.21}, {"name": "脑科学", "change_pct": 5.55}, {"name": "百度概念股", "change_pct": 3.46}, {"name": "阿里巴巴概念股", "change_pct": 3.38}, {"name": "腾讯概念股", "change_pct": 3.66}, {"name": "字节跳动概念股", "change_pct": 4.09}, {"name": "自动刹车", "change_pct": 2.62}, {"name": "人工智能大模型", "change_pct": 3.17}, {"name": "短剧/互动影游", "change_pct": 4.38}, {"name": "AI医疗", "change_pct": 3.91}, {"name": "区块链", "change_pct": 3.37}]}, {"code": "300433", "name": "蓝思科技", "hot_rank": 95, "hot_rank_chg": 5, "stock_cnt": 5741, "price": "36.63", "change": "-1.85", "market_id": "33", "circulate_market_value": "182040110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 96, "hot_rank_chg": -9, "stock_cnt": 5741, "price": "175.00", "change": "0.57", "market_id": "33", "circulate_market_value": "5395490300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002353", "name": "杰瑞股份", "hot_rank": 97, "hot_rank_chg": -23, "stock_cnt": 5741, "price": "151.02", "change": "10.00", "market_id": "33", "circulate_market_value": "104361161000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "大额订单"}, {"code": "002428", "name": "云南锗业", "hot_rank": 98, "hot_rank_chg": -3, "stock_cnt": 5741, "price": "79.04", "change": "1.23", "market_id": "33", "circulate_market_value": "51615936000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600539", "name": "狮头股份", "hot_rank": 99, "hot_rank_chg": -13, "stock_cnt": 5741, "price": "17.78", "change": "-3.94", "market_id": "17", "circulate_market_value": "4089400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600683", "name": "京投发展", "price": 8.27, "change_pct": 9.97, "reason": "公司筹划收购西安奇芯光电股权，标的从事光电子器件制造", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 2.4, "first_limit_up": 1785118882, "break_limit_up_times": 0}, {"code": "605108", "name": "同庆楼", "price": 12.21, "change_pct": 10.0, "reason": "安徽省中华老字号餐饮品牌，主要从事大众聚餐和宴会服务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.01, "first_limit_up": 1785128616, "break_limit_up_times": 1}, {"code": "301526", "name": "国际复材", "price": 30.84, "change_pct": 20.0, "reason": "公司电子级玻璃纤维主要应用于印制电路板，拟投资16.93亿元建设3600万米高频高速电子纤维布项目，切入高端PCB材料", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 16.06, "first_limit_up": 1785134013, "break_limit_up_times": 0}, {"code": "002759", "name": "ST天际", "price": 14.94, "change_pct": 10.01, "reason": "公司六氟磷酸锂产能位居行业前列，互动平台表示密切关注固态电池的技术路线，制定相关材料的研发方向，以应对及配套以后固态电池的发展", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 9.42, "first_limit_up": 1785135363, "break_limit_up_times": 0}, {"code": "002580", "name": "圣阳股份", "price": 16.87, "change_pct": 9.97, "reason": "1、公司主要产品包括锂离子电池及电源系统、新能源系统集成产品及服务等，主要用于网络能源、智慧储能和绿色动力应用领域；\n2、公司提供储能电源、储能系统和一体化解决方案，推出了涵盖户用储能、工商业储能、大型储能系统等全系列储能产品", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 2.49, "first_limit_up": 1785115800, "break_limit_up_times": 0}, {"code": "605006", "name": "山东玻纤", "price": 13.98, "change_pct": 9.99, "reason": "公司玻纤产能位居全国第四，玻纤纱为电子级玻璃纤维布的生产的原材料", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.78, "first_limit_up": 1785134420, "break_limit_up_times": 0}, {"code": "600617", "name": "国新能源", "price": 3.73, "change_pct": 10.03, "reason": "山西省内规模最大的天然气管网运营企业", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 3.06, "first_limit_up": 1785115886, "break_limit_up_times": 0}, {"code": "001267", "name": "汇绿生态", "price": 34.1, "change_pct": 10.0, "reason": "公司拟不超1.95亿元收购武汉钧恒30%股权，武汉钧恒对高速光模块技术持续投入，当前已经具备单波400G高速链路仿真能力，um级高精度光学微组装能力，及各种高速控制算法能力；基于上述能力积累，当前武汉钧恒1.6T模块相关产品已经开发出来，具备送样能力，3.2T模块单点技术已经验证完成，预计年底启动项目开发", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.44, "first_limit_up": 1785117408, "break_limit_up_times": 0}, {"code": "000909", "name": "*ST数源", "price": 4.04, "change_pct": 10.08, "reason": "全资子公司拟挂牌转让温岭祥泰27.5%股权", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.8, "first_limit_up": 1785128847, "break_limit_up_times": 0}, {"code": "002969", "name": "嘉美包装", "price": 11.46, "change_pct": 9.98, "reason": "控股股东拟变更为逐越鸿智，追觅科技创始人俞浩将成公司新实控人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.69, "first_limit_up": 1785116229, "break_limit_up_times": 0}, {"code": "002364", "name": "中恒电气", "price": 40, "change_pct": 10.01, "reason": "宁德时代拟以41亿元认购控股股东中恒科技投资新增注册资本", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 7.12, "first_limit_up": 1785133959, "break_limit_up_times": 0}, {"code": "600962", "name": "国投中鲁", "price": 23.57, "change_pct": 9.99, "reason": "公司拟收购的中国电子工程设计院承担第一条由国内企业主导的12英寸3D闪存芯片生产线等多条集成电路产线设计总包", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.12, "first_limit_up": 1785116497, "break_limit_up_times": 1}, {"code": "002158", "name": "汉钟精机", "price": 27.35, "change_pct": 10.02, "reason": "公司制冷压缩机可用于数据中心液冷环节", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 2.59, "first_limit_up": 1785134343, "break_limit_up_times": 1}, {"code": "603110", "name": "东方材料", "price": 20.6, "change_pct": 9.98, "reason": "1、全资子公司东方超算旗下的全国一体化算力平台拥有便捷调度多元算力，首批13家数据中心已经加盟东方超算全国一体化超级算力集群；\n2、公司主营PCB电子油墨、软包装油墨及聚氨酯胶粘剂，PCB油墨应用于刚挠结合板等新兴电子产品", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.3, "first_limit_up": 1785118924, "break_limit_up_times": 1}, {"code": "002292", "name": "奥飞娱乐", "price": 7.76, "change_pct": 10.07, "reason": "“中国动漫第一股”、动漫文娱领军企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.91, "first_limit_up": 1785118809, "break_limit_up_times": 2}, {"code": "003032", "name": "传智教育", "price": 6.02, "change_pct": 10.05, "reason": "公司近日正式发布“AI具身智能机器人开发”新学科，首期班将于今年10月正式开班，课程覆盖工业机械臂、四足巡检机器人、人形服务机器人三类设备，并对接智元、宇树等头部厂商方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.8, "first_limit_up": 1785117420, "break_limit_up_times": 0}, {"code": "002407", "name": "多氟多", "price": 33.57, "change_pct": 9.99, "reason": "1、锂电池电解质六氟磷酸锂全球龙头，拥有“氟资源→氢氟酸及电子级氢氟酸→氟化锂→六氟磷酸锂→锂电池”完整的产业链；\n2、公司半导体级氢氟酸已稳定批量供应台积电、三星、华虹、长鑫存储等，同时规划六氟化钨等高端电子特气产线", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 19.54, "first_limit_up": 1785135396, "break_limit_up_times": 0}, {"code": "603097", "name": "江苏华辰", "price": 16.89, "change_pct": 10.03, "reason": "公司专业从事输配电及控制设备的研产销，产品可运用于人工智能服务器或数据中心领域，目前已获得数据中心变压器相关订单（非HVDC产品），并正积极组织力量，调研应用于HVDC的相关产品", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.92, "first_limit_up": 1785118877, "break_limit_up_times": 1}, {"code": "300897", "name": "山科智能", "price": 14.94, "change_pct": 20.0, "reason": "公司股东协议转让5.00%股份完成过户登记", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 4.26, "first_limit_up": 1785116826, "break_limit_up_times": 0}, {"code": "002484", "name": "江海股份", "price": 69.95, "change_pct": 10.0, "reason": "国内唯一、全球少数几家在铝电解电容器、薄膜电容器、超级电容器三大类电容器同时研产销的公司，而且是品种最齐全、产业链最完整的企业", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 4.95, "first_limit_up": 1785134295, "break_limit_up_times": 0}, {"code": "002612", "name": "朗姿股份", "price": 12.6, "change_pct": 10.04, "reason": "医美行业龙头，控股“米兰柏羽”、“晶肤医美”和“高一生医美”三大国内医美品牌，公司三季报净利润同比增长366.95%", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.73, "first_limit_up": 1785118674, "break_limit_up_times": 0}, {"code": "603790", "name": "雅运股份", "price": 21.05, "change_pct": 9.98, "reason": "公司主要从事中高端染料和纺织助剂的研产销，此前受让浙江容腾基金份额0.8333%，后者投资了宇树科技", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.56, "first_limit_up": 1785117429, "break_limit_up_times": 0}, {"code": "002640", "name": "跨境通", "price": 3.42, "change_pct": 9.97, "reason": "跨境电商龙头，上半年业绩同比扭亏，主要原因为全资下属公司深圳飒芙破产清算，公司已丧失对深圳飒芙的控制权，本报告期深圳飒芙不再纳入公司合并报表范围，深圳飒芙前期超额亏损，本报告期出表确认大额投资收益，属于非经常性损益，预计对本报告期净利润的影响金额为1.6-1.7亿元", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 11.58, "first_limit_up": 1785129657, "break_limit_up_times": 1}, {"code": "603608", "name": "天创时尚", "price": 18.35, "change_pct": 10.01, "reason": "公司控股股东安徽先睿为轴承企业慈兴集团全资子公司，核心业务为机器人轴承与商业航天轴承两大板块", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.11, "first_limit_up": 1785134449, "break_limit_up_times": 3}, {"code": "002577", "name": "雷柏科技", "price": 17.68, "change_pct": 10.02, "reason": "1、公司推出智能音频眼镜主要为接打电话、音频播放等；\n2、公司游戏类产品迄今已成功推出高端电竞VT与游戏V两大系列，涵盖游戏鼠标、游戏键盘、游戏耳机、游戏手柄等多个品类产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.65, "first_limit_up": 1785131448, "break_limit_up_times": 0}, {"code": "603435", "name": "嘉德利", "price": 48.76, "change_pct": 9.99, "reason": "公司从事BOPP电工膜研产销，产品系薄膜电容器和复合集流体等电子电力领域的关键材料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 9.94, "first_limit_up": 1785130866, "break_limit_up_times": 0}, {"code": "600829", "name": "人民同泰", "price": 9.37, "change_pct": 9.98, "reason": "黑龙江省内最大的医药商业公司，哈药集团医疗商业上市平台", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.09, "first_limit_up": 1785116303, "break_limit_up_times": 1}, {"code": "002951", "name": "金时科技", "price": 12.31, "change_pct": 10.01, "reason": "1、公司主营储能系统设备、混合储能系列、超级电容炭及储能消防装置，开发新型号产品(如3000F低内阻超级电容器)保持技术领先；\n2、公司通过智芯一号股权基金（持股99%）间接投资了苏州易缆微半导体技术有限公司；易缆微半导体是一家光纤通信产品研发生产商，致力于光纤通信系统、光网络系统、光电传感系统、物联网系统技术研究和试验发展及进出口业务", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 1.3, "first_limit_up": 1785116841, "break_limit_up_times": 0}, {"code": "000533", "name": "顺钠股份", "price": 10.51, "change_pct": 10.05, "reason": "全资子公司顺特电气设备有限公司产品广泛用于智能电网建设，干式变压器、开关柜等产品应用于数据中心基础设施建设等领域", "plates": ["智能电网"], "limit_up_days": 3, "turnover_ratio": 9.51, "first_limit_up": 1785115827, "break_limit_up_times": 2}, {"code": "600730", "name": "*ST高科", "price": 8.62, "change_pct": 9.95, "reason": "公司收到法院出具的《民事裁定书》，裁定撤销此前对公司及两家子公司作出的行为保全措施", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.35, "first_limit_up": 1785133454, "break_limit_up_times": 0}, {"code": "002242", "name": "九阳股份", "price": 8.88, "change_pct": 10.04, "reason": "豆浆机龙头；公司表示没有哈基米hachimi相关的产品等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.16, "first_limit_up": 1785120021, "break_limit_up_times": 0}, {"code": "603660", "name": "苏州科达", "price": 8.48, "change_pct": 9.99, "reason": "公司与华东师范大学共建“卫星应用技术联合实验室”，首颗技术验证星预计2026年5月左右发射，实现高光谱遥感数据星上AI实时处理", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1785118350, "break_limit_up_times": 0}, {"code": "603507", "name": "振江股份", "price": 24.61, "change_pct": 10.01, "reason": "1、公司燃气轮机业务向西门子等企业批量供应底座、冷却罩等钢结构件，2025年业务规模同比翻倍，局部组装已启动并规划向整机集成延伸；\n2、国内专业从事新能源发电设备钢结构件的领先企；公司主要产品包括机舱罩、转子房、定子（段）、塔筒等风电设备产品", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 4.99, "first_limit_up": 1785128473, "break_limit_up_times": 0}, {"code": "002636", "name": "金安国纪", "price": 63.69, "change_pct": 10.0, "reason": "国内覆铜板龙头，同时生产电子级玻纤布；公司上半年业绩预增超9倍，主要因“2026年上半年覆铜板市场整体景气度向好，公司核心产品覆铜板及半固化片处于供不应求状态，销量同比增长叠加售价持续上行，推动公司毛利率提升，进而带动利润实现大幅增长”", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.53, "first_limit_up": 1785134283, "break_limit_up_times": 0}, {"code": "603228", "name": "景旺电子", "price": 82.06, "change_pct": 10.0, "reason": "国内少数产品类型覆盖RPCB、FPC和MPCB的厂商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.62, "first_limit_up": 1785134118, "break_limit_up_times": 0}, {"code": "001317", "name": "三羊马", "price": 51.81, "change_pct": 10.0, "reason": "1、公司预计上半年实现扭亏为盈，主要系“期间费用减少+投资收益增加”；\n2、机器人业务是三羊马智人科技及合作伙伴冰零智能科技高度关注且重视的下游应用领域，智人科技目前无机器人领域的量产产品；\n3、公司布局无人车物流，并为小米景明科技有限公司的承运商之一，与重庆东风小康汽车销售有限公司及其关联方有汽车整车综合物流服务业务合作", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.28, "first_limit_up": 1785118407, "break_limit_up_times": 0}, {"code": "002388", "name": "新亚制程", "price": 4.8, "change_pct": 10.09, "reason": "公司产品已批量用于人型机器人主板，与多家客户建立合作", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 13.28, "first_limit_up": 1785116550, "break_limit_up_times": 1}, {"code": "688171", "name": "纬德信息", "price": 28.2, "change_pct": 20.0, "reason": "1、公司发布2026年股权激励草案，以2025年营业收入为基数，2026-2028年收入增长率目标分别为30%、50%、65%；\n2、公司近期完成对北京玻色量子的参股投资，双方共同打造“量子计算+电力”实用场景解决方案，布局量子科技赛道", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.81, "first_limit_up": 1785122935, "break_limit_up_times": 1}, {"code": "605128", "name": "上海沿浦", "price": 21.87, "change_pct": 10.01, "reason": "公司开发的机器人关节模组已实现小批量交付", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.8, "first_limit_up": 1785131204, "break_limit_up_times": 0}, {"code": "300795", "name": "米奥会展", "price": 13.28, "change_pct": 19.96, "reason": "目前公司参股的“华月创智（青岛）创业投资基金合伙企业（有限合伙）”持有“北京月之暗面科技有限公司”4.233%的股权", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 22.19, "first_limit_up": 1785121161, "break_limit_up_times": 0}, {"code": "600376", "name": "首开股份", "price": 3.64, "change_pct": 9.97, "reason": "公司通过金石投资间接投资宇树机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.0, "first_limit_up": 1785117055, "break_limit_up_times": 0}, {"code": "002173", "name": "创新医疗", "price": 20.69, "change_pct": 9.99, "reason": "公司此前出资设立的“杭州博灵医疗科技有限公司”，该公司运用脑机接口技术帮助偏瘫患者恢复对残疾肢体自主控制的技术研究工作取得了一定的进展", "plates": ["脑科学"], "limit_up_days": 1, "turnover_ratio": 10.04, "first_limit_up": 1785115992, "break_limit_up_times": 3}, {"code": "002310", "name": "东方新能", "price": 2.41, "change_pct": 10.05, "reason": "公司上半年业绩扭亏为盈，主要得益于报告期内重大资产购买的标的资产纳入合并报表范围，以现金购买的海城锐海100%股权及电投瑞享80%股权已完成过户，标的资产合计持有815.85MW新能源电站", "plates": ["智能电网", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.67, "first_limit_up": 1785116715, "break_limit_up_times": 1}, {"code": "000636", "name": "风华高科", "price": 44.24, "change_pct": 10.0, "reason": "国内被动电子元件行业龙头；公司MLCC、合金电阻、大电流电感已批量导入国内头部AI服务器及机器人客户，AI算力订单充足", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 11.09, "first_limit_up": 1785117348, "break_limit_up_times": 2}, {"code": "002353", "name": "杰瑞股份", "price": 151.02, "change_pct": 10.0, "reason": "公司签署近百亿元燃气轮机发电机组供应合同", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 4.44, "first_limit_up": 1785134496, "break_limit_up_times": 0}, {"code": "603221", "name": "爱丽家居", "price": 15.4, "change_pct": 10.0, "reason": "公司拟收购欧康诺不低于77.08%股权，欧康诺专注于存储测试设备及测试服务领域", "plates": ["资产重组"], "limit_up_days": 5, "turnover_ratio": 0.23, "first_limit_up": 1785115500, "break_limit_up_times": 0}, {"code": "002409", "name": "雅克科技", "price": 169.35, "change_pct": 10.0, "reason": "1、公司子公司成都科美特专注于含氟类特种气体的研产销，主要产品为六氟化硫和四氟化碳，目前为合肥长鑫供应含氟类特种气体；\n2、公司向SK海力士、三星电子等提供逻辑芯片，海力士占全球HBM市场80%份额", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.45, "first_limit_up": 1785117471, "break_limit_up_times": 4}, {"code": "002647", "name": "仁东控股", "price": 8.92, "change_pct": 9.99, "reason": "公司1亿元增资深圳江原科技，持股4.1427%，后者12英寸国产AI算力芯片D1已流片、D10算力卡实现批量应用，并同步研发T800，公司借此布局第二增长曲线", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.07, "first_limit_up": 1785132357, "break_limit_up_times": 0}, {"code": "002514", "name": "*ST宝馨", "price": 1.72, "change_pct": 10.26, "reason": "参股公司海胶智能主要从事智能农业机器人研发、生产及销售等相关业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 8.41, "first_limit_up": 1785133107, "break_limit_up_times": 0}, {"code": "603690", "name": "至纯科技", "price": 24.88, "change_pct": 9.99, "reason": "公司成为国内领先的核心工艺设备及系统专业供应商，与深圳新凯来多年保持合作", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 9.31, "first_limit_up": 1785115940, "break_limit_up_times": 1}, {"code": "603256", "name": "宏和科技", "price": 160.35, "change_pct": 10.0, "reason": "公司是全球高端电子级玻璃纤维布龙头，极薄布、低介电、低CTE特种电子布技术国际领先，为AI服务器PCB核心上游材料", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.54, "first_limit_up": 1785117453, "break_limit_up_times": 3}, {"code": "603115", "name": "海星股份", "price": 73.89, "change_pct": 10.0, "reason": "公司已切入AI服务器/数据中心用铝电解电容器市场，800V DC高压架构带动AI电极箔需求增长，公司主营产品电极箔是铝电解电容器的核心原材料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 4.35, "first_limit_up": 1785128918, "break_limit_up_times": 1}, {"code": "002235", "name": "安妮股份", "price": 7.22, "change_pct": 10.06, "reason": "公司为多省份福利彩票中心提供服务，覆盖体育彩票相关印制需求，是体育产业配套服务提供商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.89, "first_limit_up": 1785116496, "break_limit_up_times": 0}, {"code": "000676", "name": "智度股份", "price": 7.12, "change_pct": 10.05, "reason": "公司预计上半年净利润同比增长63.69%至75.81%，报告期内，公司主营业务稳健发展，为本期净利润提供稳定支撑，其中互联网媒体业务保持了较好的盈利能力，利润同比增长；公司对外转让参股公司上海邑炎信息科技有限公司22.4128%的股权确认投资收益约为0.67亿元，计入非经常性损益，相关事项已于2026年6月完成", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.92, "first_limit_up": 1785120327, "break_limit_up_times": 0}, {"code": "000566", "name": "海南海药", "price": 5.3, "change_pct": 9.96, "reason": "海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.57, "first_limit_up": 1785116067, "break_limit_up_times": 0}, {"code": "001248", "name": "华润新能", "price": 13.97, "change_pct": 10.0, "reason": "公司主营新能源发电业务，核心聚焦风力发电站的开发、建设和运营管理，拥有多个风电场项目，风电装机容量处于行业前列，主要分布于内蒙古、黑龙江、广东等风资源丰富地区\n", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 16.96, "first_limit_up": 1785129414, "break_limit_up_times": 0}, {"code": "603567", "name": "珍宝岛", "price": 6.44, "change_pct": 10.09, "reason": "公司拥有小儿热速清糖浆，可用于小儿外感风热所致的感冒", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.2, "first_limit_up": 1785120587, "break_limit_up_times": 0}, {"code": "603459", "name": "红板科技", "price": 92.5, "change_pct": 10.0, "reason": "公司面向光模块领域开展了800G三阶盲孔光模块PCB产品、高传输速率光模块电路板等多项研发项目，有生产1.6T光模块电路板的技术能力，相关业务正根据客户需求有序推进", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 23.98, "first_limit_up": 1785121271, "break_limit_up_times": 5}, {"code": "002141", "name": "贤丰控股", "price": 5.73, "change_pct": 9.98, "reason": "公司覆铜板上年度年产量近700万张，产品直接用于PCB生产", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 17.85, "first_limit_up": 1785117504, "break_limit_up_times": 0}, {"code": "603610", "name": "麒盛科技", "price": 13.78, "change_pct": 9.98, "reason": "公司对外投资睡眠产业相关的技术与平台，包括双向脑机交互技术，该技术能够应用于智能家居领域", "plates": ["脑科学"], "limit_up_days": 1, "turnover_ratio": 2.97, "first_limit_up": 1785131596, "break_limit_up_times": 0}, {"code": "001223", "name": "欧克科技", "price": 30.6, "change_pct": 9.99, "reason": "1、公司控股深圳飞仕达切入PCB设备领域，产品包括蚀刻机、显影机等，并与有泽新材PI膜及FCCL业务联动，打造“设备+材料”一体化解决方案；\n2、公司机器人目前主要产品为码垛机器人、协作机器人；\n3、控股子公司江西有泽新材料生产的PI薄膜可用于固态电池，其高电绝缘、耐高温特性可提升电池安全性，有研究表明相关固态电池能量密度可达300Wh/kg，CPI薄膜可用于电池封装环节", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 3.23, "first_limit_up": 1785135141, "break_limit_up_times": 0}, {"code": "002925", "name": "盈趣科技", "price": 22.83, "change_pct": 10.02, "reason": "公司与天津大学、厦门市科学技术局联合设立厦门市北洋脑机接口与智慧健康创新研究院，公司有多个脑机接口创新研发项目尚处于研发阶段", "plates": ["脑科学"], "limit_up_days": 1, "turnover_ratio": 2.38, "first_limit_up": 1785119376, "break_limit_up_times": 2}, {"code": "603657", "name": "春光科技", "price": 21.59, "change_pct": 9.98, "reason": "公司主营吸尘器、洗地机、扫地机器人、布衣清洗机等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.89, "first_limit_up": 1785117317, "break_limit_up_times": 0}, {"code": "301085", "name": "亚康股份", "price": 61.51, "change_pct": 20.0, "reason": "公司合资成立东数西算庆阳智算中心；网传公司是kimi、字节跳动算力提供商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 13.05, "first_limit_up": 1785130836, "break_limit_up_times": 0}, {"code": "002775", "name": "文科股份", "price": 3.89, "change_pct": 9.89, "reason": "1、公司绿色能源业务以“合同能源管理+工程EPC”双轮驱动，2025年累计签约光伏项目125个，总装机容量约350MW，并积极向光储充及虚拟电厂等领域拓展；\n2、公司与新凯来有办公场所租赁业务合作", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.2, "first_limit_up": 1785116955, "break_limit_up_times": 0}, {"code": "603989", "name": "艾华集团", "price": 28.86, "change_pct": 9.98, "reason": "国内铝电解电容器行业龙头；公司的产品是AI算力硬件供电与电能管理链条中的关键基础元件，可应用在AI基础设施的各个关键部位，如服务器电源及供电保障与能源系统等", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 6.34, "first_limit_up": 1785133455, "break_limit_up_times": 3}, {"code": "300214", "name": "日科化学", "price": 14.23, "change_pct": 19.98, "reason": "公司拟收购亘元新材70.75%股份，标的主营锂电池电解液核心添加剂VC（碳酸亚乙烯酯）和FEC（氟代碳酸乙烯酯），与下游宁德时代、比亚迪等多家优质大客户建立了战略合作关系，是行业领先的锂电池电解液添加剂生产商", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 16.52, "first_limit_up": 1785128529, "break_limit_up_times": 0}, {"code": "003030", "name": "祖名股份", "price": 22.61, "change_pct": 10.02, "reason": "国内生鲜豆制品领军企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.58, "first_limit_up": 1785131727, "break_limit_up_times": 0}, {"code": "003020", "name": "立方制药", "price": 17.16, "change_pct": 10.0, "reason": "公司此前收到国家药监局下发的丹皮酚《化学原料药上市申请批准通知书》，丹皮酚作为中药单体成分，有消炎止痒作用，皮炎，皮肤瘙痒，蚊臭虫叮咬红肿等各种皮肤疾患有一定效果", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.61, "first_limit_up": 1785117726, "break_limit_up_times": 0}, {"code": "300534", "name": "陇神戎发", "price": 13.42, "change_pct": 20.04, "reason": "公司主打产品元胡止痛滴丸为国家中药二级保护品种，具有镇痛、镇静、催眠等作用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 26.29, "first_limit_up": 1785119250, "break_limit_up_times": 0}, {"code": "603630", "name": "拉芳家化", "price": 14.43, "change_pct": 9.98, "reason": "公司旗下拥有驱蚊花露水等相关驱蚊产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.57, "first_limit_up": 1785117687, "break_limit_up_times": 1}, {"code": "000428", "name": "华天酒店", "price": 3.34, "change_pct": 9.87, "reason": "湖南省旅游酒店支柱企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.5, "first_limit_up": 1785115803, "break_limit_up_times": 1}, {"code": "603716", "name": "塞力医疗", "price": 14.94, "change_pct": 10.01, "reason": "公司与华为技术有限公司及脑机智能全国重点实验室三方签署战略合作，聚焦于精神障碍精准诊疗领域，特别是人工智能在精神医学数字疗法中的应用", "plates": ["脑科学"], "limit_up_days": 1, "turnover_ratio": 6.42, "first_limit_up": 1785116118, "break_limit_up_times": 0}, {"code": "601606", "name": "长城军工", "price": 35.26, "change_pct": 10.02, "reason": "安徽省国资委旗下，公司为老牌弹药供应商", "plates": ["军工"], "limit_up_days": 3, "turnover_ratio": 9.83, "first_limit_up": 1785116303, "break_limit_up_times": 4}, {"code": "002051", "name": "中工国际", "price": 9.05, "change_pct": 9.96, "reason": "1、公司所属中国中元在数据中心领域已具备“咨询—设计—测试—认证—评价”一体化全链条服务能力，将持续关注数据中心业务发展机遇，探索算力资产布局可行性；\n2、国际工程龙头，公司核心业务为国际工程承包，业务范围涉及亚洲、非洲、美洲及欧洲地区，在医疗建筑、机场物流及载人索道工程等领域具有独特优势", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.98, "first_limit_up": 1785115977, "break_limit_up_times": 0}, {"code": "002918", "name": "蒙娜丽莎", "price": 9.33, "change_pct": 10.02, "reason": "行业陶瓷大板、岩板龙头，公司及子公司近日收到国家知识产权局和美国专利及商标局颁发的3项《发明专利证书》。专利名称分别为“具有防伪视觉效果的陶瓷板及其制备方法”、“一种具有颜色玉石效果的陶瓷岩板及其制备方法”和“一种具有鎏金溢彩黑金脉纹的瓷质仿古砖及其制备方法”。", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.62, "first_limit_up": 1785118101, "break_limit_up_times": 0}, {"code": "601789", "name": "宁波建工", "price": 4.41, "change_pct": 9.98, "reason": "公司直接加间接持有中经云32.37%股权，中经云主营数据中心机柜位出租，客户包括腾讯、阿里、百度、金山云及三大电信运营商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.04, "first_limit_up": 1785122972, "break_limit_up_times": 0}, {"code": "605376", "name": "博迁新材", "price": 151.66, "change_pct": 10.0, "reason": "公司是全球领先、国内唯一的小粒径纳米镍粉生产商、国内MLCC镍粉市场领军企业，银包铜粉已批量用于光伏HJT电池低温浆料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 5.19, "first_limit_up": 1785133478, "break_limit_up_times": 0}, {"code": "002900", "name": "哈三联", "price": 12.54, "change_pct": 10.0, "reason": "公司美妆系列聚焦日常多护肤场景，打造精细化面膜矩阵；“哈三联”II 类医疗器械敷料系列搭载重组胶原蛋白与透明质酸钠两大核心成分，深耕问题性肌肤赛道", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 15.45, "first_limit_up": 1785116319, "break_limit_up_times": 7}, {"code": "603988", "name": "中电电机", "price": 18.04, "change_pct": 10.0, "reason": "公司专注大中型交直流电机、发电机，产品覆盖风电、水利、石化等行业", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 9.09, "first_limit_up": 1785132661, "break_limit_up_times": 0}, {"code": "605068", "name": "明新旭腾", "price": 15.47, "change_pct": 10.03, "reason": "公司正积极接触柔性传感器公司，实现皮肤与传感器业务结合", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.68, "first_limit_up": 1785116772, "break_limit_up_times": 0}, {"code": "603082", "name": "北自科技", "price": 37.29, "change_pct": 10.0, "reason": "公司是全国机器人标准化技术委员会人形机器人标准工作组（SAC/TC591/WG2）成员单位，参与制订人形机器人及其应用领域相关的国家标准及行业标准", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.72, "first_limit_up": 1785118504, "break_limit_up_times": 0}, {"code": "002879", "name": "长缆科技", "price": 19.86, "change_pct": 10.03, "reason": "1、国内电缆附件领域的重要企业；公司产品覆盖高压超高压、中低压电缆附件等多个板块；\n2、公司材料、箱柜、连接器、机电等产品已导入商业航天并实现导入；拟斥资1.8亿至2.2亿元回购股份;", "plates": ["智能电网"], "limit_up_days": 5, "turnover_ratio": 37.54, "first_limit_up": 1785116280, "break_limit_up_times": 1}, {"code": "002029", "name": "七 匹 狼", "price": 8, "change_pct": 10.04, "reason": "公司位于福建省晋江市，中国男装品牌的领先企业之一，控股股东持有沐曦集成股份比例0.39%", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.24, "first_limit_up": 1785131142, "break_limit_up_times": 0}, {"code": "600667", "name": "太极实业", "price": 17.92, "change_pct": 10.01, "reason": "DRAM封装龙头；子公司海太半导体的封测业务主要是为SK海力士的DRAM产品提供后工序服务，对12英寸1Z纳米级晶圆进行集成电路封装，海太半导体由公司和SK海力士共同投资组建，公司持有海太半导体55%股权，SK海力士持有海太半导体45%股权", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.56, "first_limit_up": 1785117177, "break_limit_up_times": 0}, {"code": "601218", "name": "吉鑫科技", "price": 4.47, "change_pct": 10.1, "reason": "国内起步最早的生产大型风电铸件的企业，表示更大兆瓦级的海上风机也正在开发中", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.11, "first_limit_up": 1785116180, "break_limit_up_times": 0}, {"code": "002211", "name": "ST宏达", "price": 3.78, "change_pct": 9.88, "reason": "公司控股股东将变更为巨融科技", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.18, "first_limit_up": 1785115500, "break_limit_up_times": 0}, {"code": "001258", "name": "立新能源", "price": 14.33, "change_pct": 9.98, "reason": "公司立足新疆，专注风力发电和光伏发电业务", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 9.01, "first_limit_up": 1785116034, "break_limit_up_times": 1}, {"code": "300802", "name": "矩子科技", "price": 22.72, "change_pct": 20.02, "reason": "公司自动光学检测设备主要应用于PCBA、MiniLED、半导体封测等工艺环节的外观缺陷检测", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 10.04, "first_limit_up": 1785132639, "break_limit_up_times": 0}, {"code": "603358", "name": "华达科技", "price": 34.05, "change_pct": 10.02, "reason": "公司此前与埃夫特在工业/人形机器人制造研发生产、轻量化材料产品开发及汽车零部件行业应用等领域达成全面战略合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.75, "first_limit_up": 1785117382, "break_limit_up_times": 0}, {"code": "600165", "name": "ST宁科", "price": 2.43, "change_pct": 9.95, "reason": "公司实控人及多名董事高管拟增持公司股份", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.22, "first_limit_up": 1785118211, "break_limit_up_times": 0}, {"code": "603378", "name": "*ST亚士", "price": 5.06, "change_pct": 10.0, "reason": "行业内少数同时拥有功能型建筑涂料、保温装饰板和保温板三大产品体系及其系统服务能力的企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.38, "first_limit_up": 1785121637, "break_limit_up_times": 1}, {"code": "600775", "name": "南京熊猫", "price": 9.41, "change_pct": 10.06, "reason": "1、公司承担江苏省重点研发计划“基于脑机接口技术的多模态人机交互系统集成关键技术研发”项目，处于科研开发阶段；\n2、公司的新一代卫星通信终端项目包括软硬件，可支持终端与终端之间的卫星通信", "plates": ["脑科学"], "limit_up_days": 1, "turnover_ratio": 5.55, "first_limit_up": 1785118765, "break_limit_up_times": 1}, {"code": "002309", "name": "中利集团", "price": 3.06, "change_pct": 10.07, "reason": "1、公司上半年业绩扭亏，主要系本期确认大额债务重组收益；\n2、公司主要线缆产品涵盖阻燃耐火软电缆、舰船用电缆、高铁及铁路信号线缆、新能源汽车及充电桩线缆、液冷电缆、数据通信线缆、海洋工程平台用电缆、光电复合缆、光纤预制棒及光纤等；\n3、全球领先的组件供应商、光伏电站开发与EPC服务商", "plates": ["光通信", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 11.42, "first_limit_up": 1785116166, "break_limit_up_times": 4}, {"code": "603931", "name": "格林达", "price": 36.22, "change_pct": 9.99, "reason": "1、国内湿电子化学品主要生产厂商之一；公司产品主要有显影液、蚀刻液、稀释液、清洗液等，核心产品TMAH显影液系LCD、OLED显示面板生产过程中的关键材料之一；\n2、TMA价格持续上涨，据网络截图显示，查询到公司也在生产和销售偏苯三酸酐", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.68, "first_limit_up": 1785117340, "break_limit_up_times": 0}, {"code": "603402", "name": "陕西旅游", "price": 66.42, "change_pct": 10.0, "reason": "公司业务集旅游演艺、旅游索道、旅游餐饮、旅游项目投资及管理为一体，依托华清宫、华山等优质旅游资源，充分发挥旅游资源整合优势、专业化运营管理优势、旅游产品创新优势，为游客提供高品质的旅游产品及服务体验", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 11.57, "first_limit_up": 1785129894, "break_limit_up_times": 1}, {"code": "688496", "name": "*ST清越", "price": 0.89, "change_pct": 20.27, "reason": "公司的硅基OLED产品可以用于MR头戴显示产品中", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.32, "first_limit_up": 1785116068, "break_limit_up_times": 0}, {"code": "001328", "name": "登康口腔", "price": 31.42, "change_pct": 10.01, "reason": "公司是中国具有影响力的专业口腔护理企业，主要产品涵盖牙膏、牙刷、漱口水等口腔清洁护理用品\n", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.22, "first_limit_up": 1785134106, "break_limit_up_times": 0}, {"code": "002731", "name": "*ST萃华", "price": 1.83, "change_pct": 10.24, "reason": "“中华老字号”珠宝企业，主营业务为珠宝饰品，兼营铂金和镶嵌饰品", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 19.9, "first_limit_up": 1785116742, "break_limit_up_times": 2}, {"code": "300753", "name": "爱朋医疗", "price": 21.91, "change_pct": 19.99, "reason": "公司麻醉深度监测仪产品属于脑电采集设备，非侵入式脑机接口；参股的常州瑞神安源于清华大学微电子所团队植入式神经刺激器项目的产学研转化，瑞神安植入式闭环神经刺激器系统（CNS），可用于帕金森病、癫痫、阿尔茨海默病、抑郁症等多种大脑疾病的治疗，该产品是脑机接口技术应用之一", "plates": ["脑科学"], "limit_up_days": 1, "turnover_ratio": 17.19, "first_limit_up": 1785116349, "break_limit_up_times": 2}, {"code": "002365", "name": "永安药业", "price": 12.79, "change_pct": 9.97, "reason": "公司是牛磺酸行业龙头，上半年净利最高预增290%，主要原因为主营产品牛磺酸的销量增加和销售价格比上年同期上涨", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.73, "first_limit_up": 1785115932, "break_limit_up_times": 0}, {"code": "603906", "name": "龙蟠科技", "price": 18.96, "change_pct": 9.98, "reason": "公司签署锂矿投资条款清单拟认购GL1股份并支付7500万美元预付款；25年净利润同比减亏", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 4.39, "first_limit_up": 1785119654, "break_limit_up_times": 1}, {"code": "001358", "name": "兴欣新材", "price": 22.3, "change_pct": 10.01, "reason": "公司产品N-羟乙基哌嗪及N,N-二甲基丙酰胺是东进公司生产光刻胶剥离液的必备原材料，后者为全球主要湿电子化工品供应商；拟斥资5000万元至1亿元回购股份", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.84, "first_limit_up": 1785131994, "break_limit_up_times": 0}, {"code": "002080", "name": "中材科技", "price": 51.94, "change_pct": 10.0, "reason": "1、公司自主研发的第一代低介电产品，已成功应用于高端 PCB 领域；\n2、全资子公司泰山玻纤专业从事玻璃纤维及其制品的研发、制造及销售，拥有超140万吨的玻璃纤维年产能，在玻璃纤维配方、大型玻纤池窑设计、窑炉纯氧燃烧技术等方面拥有核心自主知识产权，居世界领先水平", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.73, "first_limit_up": 1785134448, "break_limit_up_times": 1}, {"code": "000862", "name": "银星能源", "price": 6.12, "change_pct": 10.07, "reason": "中铝集团旗下，新能源业务主要包括风力发电和太阳能光伏发电", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 14.89, "first_limit_up": 1785118542, "break_limit_up_times": 1}, {"code": "002528", "name": "*ST英飞", "price": 4.49, "change_pct": 10.05, "reason": "公司及全资子公司拟申请预重整及重整", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.11, "first_limit_up": 1785130011, "break_limit_up_times": 0}, {"code": "603315", "name": "福鞍股份", "price": 12.03, "change_pct": 9.96, "reason": "公司与三菱、GE、西门子等国际企业均有良好的合作关系，为其提供大型铸钢件，与三菱在燃气轮机领域合作稳定，主要供应燃兼压缸、透平缸、排气缸外缸及空气冷凝管等产品", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 2.41, "first_limit_up": 1785117275, "break_limit_up_times": 0}, {"code": "603330", "name": "天洋新材", "price": 6.61, "change_pct": 9.98, "reason": "公司电子胶板块光模块透镜固定用胶、底填胶等产品已经进入半导体及汽车电子领域小批量供货", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1785117195, "break_limit_up_times": 0}, {"code": "301121", "name": "紫建电子", "price": 33.86, "change_pct": 19.99, "reason": "国内采用叠片工艺规模化生产扣式可充电锂电池的标志性企业；公司已经取得了“一种满足高倍率充放电的固态电池”方面的实用新型专利，在继续跟进固态电池的课题研究和开发", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 4.4, "first_limit_up": 1785115866, "break_limit_up_times": 1}, {"code": "600594", "name": "益佰制药", "price": 3.63, "change_pct": 10.0, "reason": "主要涵盖抗肿瘤类、心血管类和镇咳类三大领域，其中中药注射剂艾迪注射液是公司核心产品，与复方斑蝥胶囊适用于肝癌、肺癌等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.36, "first_limit_up": 1785116372, "break_limit_up_times": 2}, {"code": "600847", "name": "万里股份", "price": 11.22, "change_pct": 10.0, "reason": "公司主要从事铅酸电池产品的研产销，产品主要应用于汽车起动启停领域，旗下特瑞电池全部投产后磷酸铁锂的设计产能将达到 10 万吨 / 年", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 2.12, "first_limit_up": 1785119851, "break_limit_up_times": 0}, {"code": "603955", "name": "大千生态", "price": 18.62, "change_pct": 9.98, "reason": "公司宠物业务已覆盖零售及服务、智能硬件、互动体验等场景，形成“消费+服务+产品”的全业务链布局", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.08, "first_limit_up": 1785118619, "break_limit_up_times": 0}, {"code": "603389", "name": "亚振家居", "price": 42.35, "change_pct": 10.0, "reason": "公司主要从事中高端海派艺术家具产品的生产", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 0.79, "first_limit_up": 1785117342, "break_limit_up_times": 1}, {"code": "002174", "name": "游族网络", "price": 11.34, "change_pct": 9.99, "reason": "公司旗下知名游戏产品有《少年三国志》系列、《女神联盟》系列、《盗墓笔记》等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.3, "first_limit_up": 1785133755, "break_limit_up_times": 0}, {"code": "301234", "name": "五洲医疗", "price": 70.5, "change_pct": 20.0, "reason": "公司拟收购旋智科技100%股权，切入电机控制芯片赛道", "plates": ["资产重组"], "limit_up_days": 4, "turnover_ratio": 26.51, "first_limit_up": 1785115500, "break_limit_up_times": 1}, {"code": "600176", "name": "中国巨石", "price": 41.07, "change_pct": 9.99, "reason": "AI服务器升级推动PCB单机价值量暴涨，电子布等上游材料价格持续上涨；公司为世界玻纤龙头，产能规模全球第一，宣布扩产电子布", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.81, "first_limit_up": 1785134319, "break_limit_up_times": 0}, {"code": "002270", "name": "华明装备", "price": 19.86, "change_pct": 10.03, "reason": "1、公司“双机器人等离子切割装备研发”项目将机器人技术、数控技术、等离子切割技术有机结合，采用两个五自由度机器人并行排列同时参与切割过程，能够完成复杂形状工件的三维切割；\n2、公司是国内首批实现特高压分接开关批量投运的企业，产品已用于±800kV陇东直流等工程", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.98, "first_limit_up": 1785134139, "break_limit_up_times": 0}, {"code": "002522", "name": "浙江众成", "price": 4.77, "change_pct": 9.91, "reason": "1、控股子公司众立合成材料的SEP光纤油膏、SEPS成人用品弹性体已批量供货，技术国内领先；\n2、控股子公司众立合成材料所开发的氢化苯乙烯/异戊二烯嵌段共聚物（SEPS）系列产品可用于实体娃娃等成人用品领域，已经具备成熟的规模化生产能力", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 4.08, "first_limit_up": 1785122700, "break_limit_up_times": 0}, {"code": "603607", "name": "京华激光", "price": 20.63, "change_pct": 10.03, "reason": "卡游多款IP卡牌生产商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.91, "first_limit_up": 1785128463, "break_limit_up_times": 0}, {"code": "002448", "name": "中原内配", "price": 11.94, "change_pct": 10.05, "reason": "控股子公司中原内配上海电子科技有限公司与宁波普智未来机器人有限公司签署战略合作框架协议，成为其关节模组核心供应商，并将在智能制造场景中优先部署其人形机器人，正推进从汽车零部件供应商向“汽车+机器人”双赛道核心部件服务商升级", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.89, "first_limit_up": 1785115872, "break_limit_up_times": 1}, {"code": "600488", "name": "津药药业", "price": 5.32, "change_pct": 9.92, "reason": "公司创新研究院JYSW003银屑病创新药项目正按合同推进，前期药效与安全性表现良好", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.42, "first_limit_up": 1785116584, "break_limit_up_times": 0}];
const RISK_STOCKS = {"603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "ST/风险警示股", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告"};