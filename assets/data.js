const UPDATE_TIME = "2026-07-01 02:58";
const THS_HOT = [
  {
    "name": "2026中报预增",
    "rise": 5.94,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "存储芯片",
    "rise": 2.38,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续191天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.23,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续238天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": 1.16,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续167天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "创新药",
    "rise": 1.94,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续68天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 0.3,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续61天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": 2.01,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续402天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "先进封装",
    "rise": 0.94,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续31天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "猪肉",
    "rise": 7.5,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "光纤概念",
    "rise": -0.72,
    "rate": 0,
    "tag": "",
    "hotTag": "连续67天上榜",
    "rankChg": 0,
    "etfName": "平安新兴产业LOF",
    "code": "886084"
  },
  {
    "name": "光刻胶",
    "rise": 2.21,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "培育钻石",
    "rise": -1.01,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "算力租赁",
    "rise": 1.06,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续102天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "ST板块",
    "rise": 3.16,
    "rate": 0,
    "tag": "50家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "国家大基金持股",
    "rise": 2.79,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 2,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "芯片概念",
    "rise": 1.75,
    "rate": 0,
    "tag": "32家涨停",
    "hotTag": "连续62天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "机器人概念",
    "rise": 1.67,
    "rate": 0,
    "tag": "32家涨停",
    "hotTag": "连续69天上榜",
    "rankChg": -2,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "氟化工概念",
    "rise": 3.63,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "化工行业ETF",
    "code": "885551"
  },
  {
    "name": "液冷服务器",
    "rise": 0.54,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "超级电容",
    "rise": 0.76,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -2,
    "etfName": "",
    "code": "885886"
  }
];
const THS_EVENTS = [
  {
    "title": "优必选发布超仿生人形机器人",
    "desc": "",
    "heat": 624492,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "金道科技",
        "code": "301279",
        "chg": 20.018408
      }
    ]
  },
  {
    "title": "18 万一吨！被严重低估的电子氢氟酸，半导体的隐形护城河",
    "desc": "",
    "heat": 556443,
    "direction": "电子特气",
    "themes": [
      "电子特气"
    ],
    "stocks": [
      {
        "name": "金宏气体",
        "code": "688106",
        "chg": 20.009643
      }
    ]
  },
  {
    "title": "八部门出台新政促工业互联网发展 明确2030年核心产业增加值将破2.5万亿元",
    "desc": "",
    "heat": 433650,
    "direction": "工业互联网",
    "themes": [
      "工业互联网"
    ],
    "stocks": [
      {
        "name": "拓斯达",
        "code": "300607",
        "chg": 20.009702
      }
    ]
  },
  {
    "title": "三星电机获价值4540亿韩元AI服务器MLCC合同",
    "desc": "",
    "heat": 405599,
    "direction": "MLCC涨价",
    "themes": [
      "MLCC"
    ],
    "stocks": [
      {
        "name": "振华科技",
        "code": "000733",
        "chg": 9.992938
      }
    ]
  },
  {
    "title": "闪迪涨858%、美光涨300%！美股上半年收官，存储巨头集体狂飙",
    "desc": "",
    "heat": 361605,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "金宏气体",
        "code": "688106",
        "chg": 20.009643
      }
    ]
  },
  {
    "title": "SK海力士拟订购半导体检测设备 总价最高可达4000亿韩元",
    "desc": "",
    "heat": 338023,
    "direction": "半导体检测设备",
    "themes": [
      "半导体检测设备"
    ],
    "stocks": [
      {
        "name": "金海通",
        "code": "603061",
        "chg": 7.309546
      }
    ]
  },
  {
    "title": "富乔工业提价30%引领电子布涨价周期启动",
    "desc": "",
    "heat": 35,
    "direction": "电子布涨价",
    "themes": [
      "电子布"
    ],
    "stocks": [
      {
        "name": "国际复材",
        "code": "301526",
        "chg": 2.421256
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "养鸡",
    "change": "+7.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+6.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+6.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "征信概念",
    "change": "+6.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+5.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "制冷剂",
    "change": "+5.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+5.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+5.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氟化工",
    "change": "+5.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "钛白粉",
    "change": "+4.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+4.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+4.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "期货概念",
    "change": "+4.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+4.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信托",
    "change": "+4.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+4.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饲料",
    "change": "+4.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "炭黑",
    "change": "+4.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "券商",
    "change": "+4.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "社区团购",
    "change": "+4.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5850,
    "price": "8.58",
    "change": "-1.15",
    "market_id": "33",
    "circulate_market_value": "303450010000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 5,
    "hot_rank_chg": -2,
    "stock_cnt": 5850,
    "price": "6.10",
    "change": "4.81",
    "market_id": "33",
    "circulate_market_value": "116705409000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.42
      },
      {
        "name": "手机产业链",
        "change_pct": 1.14
      },
      {
        "name": "超高清视频",
        "change_pct": 1.78
      },
      {
        "name": "半导体",
        "change_pct": 2.23
      },
      {
        "name": "OLED",
        "change_pct": 1.44
      },
      {
        "name": "光伏",
        "change_pct": 0.74
      },
      {
        "name": "黑色家电",
        "change_pct": 1.57
      },
      {
        "name": "家电",
        "change_pct": 1.28
      },
      {
        "name": "智能制造",
        "change_pct": 1.85
      },
      {
        "name": "工业互联网",
        "change_pct": 2.18
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 1.37
      },
      {
        "name": "国产芯片",
        "change_pct": 1.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.59
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.41
      },
      {
        "name": "MicroLED",
        "change_pct": 0.09
      },
      {
        "name": "MiniLED",
        "change_pct": 1.04
      },
      {
        "name": "华为产业链",
        "change_pct": 1.54
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 11,
    "hot_rank_chg": 7,
    "stock_cnt": 5850,
    "price": "9.50",
    "change": "2.15",
    "market_id": "33",
    "circulate_market_value": "15444091000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 24,
    "hot_rank_chg": 46,
    "stock_cnt": 5850,
    "price": "7.44",
    "change": "5.08",
    "market_id": "17",
    "circulate_market_value": "92226903000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.66
      },
      {
        "name": "核电",
        "change_pct": 1.01
      },
      {
        "name": "强势人气股",
        "change_pct": 1.52
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.96
      },
      {
        "name": "水电",
        "change_pct": 2.55
      },
      {
        "name": "火电",
        "change_pct": 2.09
      },
      {
        "name": "光伏",
        "change_pct": 0.76
      },
      {
        "name": "风电",
        "change_pct": 0.87
      },
      {
        "name": "国企改革",
        "change_pct": 2.03
      },
      {
        "name": "算电协同",
        "change_pct": 0.23
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 28,
    "hot_rank_chg": 8,
    "stock_cnt": 5850,
    "price": "3.85",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "17986233000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.85
      },
      {
        "name": "房地产",
        "change_pct": 2.71
      },
      {
        "name": "京津冀",
        "change_pct": 2.14
      },
      {
        "name": "旅游",
        "change_pct": 2.58
      },
      {
        "name": "国产芯片",
        "change_pct": 1.66
      },
      {
        "name": "内存",
        "change_pct": 1.52
      },
      {
        "name": "闪存",
        "change_pct": 2.0
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.49
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 35,
    "hot_rank_chg": -3,
    "stock_cnt": 5850,
    "price": "12.19",
    "change": "1.33",
    "market_id": "33",
    "circulate_market_value": "49244916000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 2.3
      },
      {
        "name": "一带一路",
        "change_pct": 1.56
      },
      {
        "name": "京津冀",
        "change_pct": 2.14
      },
      {
        "name": "光伏",
        "change_pct": 0.76
      },
      {
        "name": "碳中和",
        "change_pct": 1.9
      },
      {
        "name": "国产芯片",
        "change_pct": 1.66
      },
      {
        "name": "IGBT",
        "change_pct": 0.07
      },
      {
        "name": "颗粒硅",
        "change_pct": 1.52
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 1.73
      },
      {
        "name": "大硅片",
        "change_pct": 4.45
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 56,
    "hot_rank_chg": 129,
    "stock_cnt": 5850,
    "price": "9.77",
    "change": "1.88",
    "market_id": "17",
    "circulate_market_value": "29059705000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.64
      },
      {
        "name": "禽流感",
        "change_pct": 3.07
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 0.31
      },
      {
        "name": "农药",
        "change_pct": 2.7
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": 3.58
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "600909",
    "name": "华安证券",
    "hot_rank": 77,
    "hot_rank_chg": 221,
    "stock_cnt": 5850,
    "price": "12.22",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "61395837000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "存储芯片",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 2.18
      },
      {
        "name": "期货概念",
        "change_pct": 4.77
      },
      {
        "name": "券商",
        "change_pct": 4.39
      },
      {
        "name": "安徽国企改革",
        "change_pct": 2.3
      },
      {
        "name": "大金融",
        "change_pct": 2.49
      },
      {
        "name": "国企改革",
        "change_pct": 2.03
      }
    ]
  },
  {
    "code": "600497",
    "name": "驰宏锌锗",
    "hot_rank": 99,
    "hot_rank_chg": 33,
    "stock_cnt": 5850,
    "price": "12.49",
    "change": "3.14",
    "market_id": "17",
    "circulate_market_value": "62954352000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.66
      },
      {
        "name": "军民融合",
        "change_pct": 1.54
      },
      {
        "name": "有色 · 锑",
        "change_pct": 2.93
      },
      {
        "name": "有色 · 钼",
        "change_pct": 0.86
      },
      {
        "name": "有色 · 锌",
        "change_pct": 2.7
      },
      {
        "name": "有色金属",
        "change_pct": 1.39
      },
      {
        "name": "军工",
        "change_pct": 1.53
      },
      {
        "name": "硫酸",
        "change_pct": 2.5
      },
      {
        "name": "国企改革",
        "change_pct": 2.03
      },
      {
        "name": "白银",
        "change_pct": 2.88
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.14
      },
      {
        "name": "光纤概念",
        "change_pct": -1.22
      },
      {
        "name": "有色 · 铋",
        "change_pct": 4.85
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "8.58", "change": "-1.15", "market_id": "33", "circulate_market_value": "303450010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600667", "name": "太极实业", "hot_rank": 2, "hot_rank_chg": 5, "stock_cnt": 5850, "price": "31.75", "change": "8.81", "market_id": "17", "circulate_market_value": "66406464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 3, "hot_rank_chg": 6, "stock_cnt": 5850, "price": "107.14", "change": "3.47", "market_id": "17", "circulate_market_value": "191717880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "64.16", "change": "-0.17", "market_id": "33", "circulate_market_value": "100997822000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "6.10", "change": "4.81", "market_id": "33", "circulate_market_value": "116705409000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.42}, {"name": "手机产业链", "change_pct": 1.14}, {"name": "超高清视频", "change_pct": 1.78}, {"name": "半导体", "change_pct": 2.23}, {"name": "OLED", "change_pct": 1.44}, {"name": "光伏", "change_pct": 0.74}, {"name": "黑色家电", "change_pct": 1.57}, {"name": "家电", "change_pct": 1.28}, {"name": "智能制造", "change_pct": 1.85}, {"name": "工业互联网", "change_pct": 2.18}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.37}, {"name": "国产芯片", "change_pct": 1.62}, {"name": "腾讯概念股", "change_pct": 1.59}, {"name": "液晶面板/LCD", "change_pct": 1.41}, {"name": "MicroLED", "change_pct": 0.09}, {"name": "MiniLED", "change_pct": 1.04}, {"name": "华为产业链", "change_pct": 1.54}, {"name": "玻璃基板封装", "change_pct": -0.32}]}, {"code": "002185", "name": "华天科技", "hot_rank": 6, "hot_rank_chg": 9, "stock_cnt": 5850, "price": "22.43", "change": "0.54", "market_id": "33", "circulate_market_value": "74527079000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 7, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "55.25", "change": "9.99", "market_id": "33", "circulate_market_value": "59601896000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半导体级氢氟酸涨价"}, {"code": "600522", "name": "中天科技", "hot_rank": 8, "hot_rank_chg": 11, "stock_cnt": 5850, "price": "57.10", "change": "-5.90", "market_id": "17", "circulate_market_value": "194879430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "66.00", "change": "-0.90", "market_id": "17", "circulate_market_value": "55872520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 10, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "74.21", "change": "2.73", "market_id": "33", "circulate_market_value": "85861943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 11, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "9.50", "change": "2.15", "market_id": "33", "circulate_market_value": "15444091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "300274", "name": "阳光电源", "hot_rank": 12, "hot_rank_chg": 190, "stock_cnt": 5850, "price": "138.98", "change": "-12.60", "market_id": "33", "circulate_market_value": "220634670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 13, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "41.98", "change": "9.95", "market_id": "33", "circulate_market_value": "18075191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 14, "hot_rank_chg": -8, "stock_cnt": 5850, "price": "17.72", "change": "4.91", "market_id": "17", "circulate_market_value": "63573508000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 15, "hot_rank_chg": 5, "stock_cnt": 5850, "price": "73.45", "change": "0.78", "market_id": "17", "circulate_market_value": "294030390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 16, "hot_rank_chg": 6, "stock_cnt": 5850, "price": "82.92", "change": "10.00", "market_id": "17", "circulate_market_value": "88937120000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 17, "hot_rank_chg": 8, "stock_cnt": 5850, "price": "104.21", "change": "-4.69", "market_id": "17", "circulate_market_value": "254812330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 18, "hot_rank_chg": -4, "stock_cnt": 5850, "price": "54.58", "change": "-0.15", "market_id": "17", "circulate_market_value": "90825041000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 19, "hot_rank_chg": -7, "stock_cnt": 5850, "price": "243.44", "change": "8.50", "market_id": "33", "circulate_market_value": "77541178000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 20, "hot_rank_chg": 26, "stock_cnt": 5850, "price": "16.55", "change": "-1.49", "market_id": "17", "circulate_market_value": "21122033000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 21, "hot_rank_chg": 10, "stock_cnt": 5850, "price": "80.96", "change": "4.28", "market_id": "17", "circulate_market_value": "62517261000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 22, "hot_rank_chg": -5, "stock_cnt": 5850, "price": "820.00", "change": "0.61", "market_id": "17", "circulate_market_value": "548163390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 23, "hot_rank_chg": -10, "stock_cnt": 5850, "price": "24.76", "change": "3.64", "market_id": "33", "circulate_market_value": "83280386000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 24, "hot_rank_chg": 46, "stock_cnt": 5850, "price": "7.44", "change": "5.08", "market_id": "17", "circulate_market_value": "92226903000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.66}, {"name": "核电", "change_pct": 1.01}, {"name": "强势人气股", "change_pct": 1.52}, {"name": "电力体制改革", "change_pct": 1.96}, {"name": "水电", "change_pct": 2.55}, {"name": "火电", "change_pct": 2.09}, {"name": "光伏", "change_pct": 0.76}, {"name": "风电", "change_pct": 0.87}, {"name": "国企改革", "change_pct": 2.03}, {"name": "算电协同", "change_pct": 0.23}]}, {"code": "600703", "name": "三安光电", "hot_rank": 25, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "20.71", "change": "-2.40", "market_id": "17", "circulate_market_value": "103322578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 26, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "30.46", "change": "-6.51", "market_id": "17", "circulate_market_value": "28772726000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 27, "hot_rank_chg": 6, "stock_cnt": 5850, "price": "75.38", "change": "-0.65", "market_id": "33", "circulate_market_value": "114385548000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 28, "hot_rank_chg": 8, "stock_cnt": 5850, "price": "3.85", "change": "10.00", "market_id": "33", "circulate_market_value": "17986233000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.85}, {"name": "房地产", "change_pct": 2.71}, {"name": "京津冀", "change_pct": 2.14}, {"name": "旅游", "change_pct": 2.58}, {"name": "国产芯片", "change_pct": 1.66}, {"name": "内存", "change_pct": 1.52}, {"name": "闪存", "change_pct": 2.0}, {"name": "IP经济/谷子经济", "change_pct": 2.49}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 29, "hot_rank_chg": 10, "stock_cnt": 5850, "price": "41.06", "change": "9.99", "market_id": "33", "circulate_market_value": "32125534000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "002549", "name": "凯美特气", "hot_rank": 30, "hot_rank_chg": 43, "stock_cnt": 5850, "price": "22.06", "change": "4.89", "market_id": "33", "circulate_market_value": "15273451000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 31, "hot_rank_chg": 17, "stock_cnt": 5850, "price": "63.79", "change": "-5.47", "market_id": "17", "circulate_market_value": "93260648000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 32, "hot_rank_chg": 79, "stock_cnt": 5850, "price": "26.12", "change": "1.83", "market_id": "33", "circulate_market_value": "15539628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 33, "hot_rank_chg": -22, "stock_cnt": 5850, "price": "39.72", "change": "-0.50", "market_id": "33", "circulate_market_value": "14906280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 34, "hot_rank_chg": 111, "stock_cnt": 5850, "price": "37.45", "change": "3.48", "market_id": "33", "circulate_market_value": "150834420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 35, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "12.19", "change": "1.33", "market_id": "33", "circulate_market_value": "49244916000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 2.3}, {"name": "一带一路", "change_pct": 1.56}, {"name": "京津冀", "change_pct": 2.14}, {"name": "光伏", "change_pct": 0.76}, {"name": "碳中和", "change_pct": 1.9}, {"name": "国产芯片", "change_pct": 1.66}, {"name": "IGBT", "change_pct": 0.07}, {"name": "颗粒硅", "change_pct": 1.52}, {"name": "异质结电池HJT", "change_pct": 1.73}, {"name": "大硅片", "change_pct": 4.45}]}, {"code": "002384", "name": "东山精密", "hot_rank": 36, "hot_rank_chg": 18, "stock_cnt": 5850, "price": "253.51", "change": "-3.37", "market_id": "33", "circulate_market_value": "351446420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 37, "hot_rank_chg": -9, "stock_cnt": 5850, "price": "24.28", "change": "10.01", "market_id": "33", "circulate_market_value": "18421551000.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "锆产品涨价"}, {"code": "000938", "name": "紫光股份", "hot_rank": 38, "hot_rank_chg": -15, "stock_cnt": 5850, "price": "30.14", "change": "4.43", "market_id": "33", "circulate_market_value": "86202590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 39, "hot_rank_chg": 104, "stock_cnt": 5850, "price": "271.00", "change": "8.84", "market_id": "33", "circulate_market_value": "114279136000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 40, "hot_rank_chg": 21, "stock_cnt": 5850, "price": "71.16", "change": "-1.37", "market_id": "17", "circulate_market_value": "1412105600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 41, "hot_rank_chg": 6, "stock_cnt": 5850, "price": "149.37", "change": "-2.25", "market_id": "33", "circulate_market_value": "287210200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 42, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "249.60", "change": "-2.92", "market_id": "33", "circulate_market_value": "194812390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 43, "hot_rank_chg": 37, "stock_cnt": 5850, "price": "18.71", "change": "-1.78", "market_id": "33", "circulate_market_value": "60350786000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 44, "hot_rank_chg": 24, "stock_cnt": 5850, "price": "21.79", "change": "0.51", "market_id": "33", "circulate_market_value": "12712545200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 45, "hot_rank_chg": 71, "stock_cnt": 5850, "price": "15.36", "change": "1.79", "market_id": "17", "circulate_market_value": "26652379000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 46, "hot_rank_chg": 40, "stock_cnt": 5850, "price": "14.86", "change": "-0.67", "market_id": "17", "circulate_market_value": "21884423000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 47, "hot_rank_chg": 59, "stock_cnt": 5850, "price": "122.05", "change": "-1.98", "market_id": "17", "circulate_market_value": "301863850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 48, "hot_rank_chg": -13, "stock_cnt": 5850, "price": "17.95", "change": "3.52", "market_id": "33", "circulate_market_value": "129234701000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 49, "hot_rank_chg": -7, "stock_cnt": 5850, "price": "183.81", "change": "2.80", "market_id": "17", "circulate_market_value": "47428678000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 50, "hot_rank_chg": 59, "stock_cnt": 5850, "price": "97.03", "change": "1.37", "market_id": "33", "circulate_market_value": "140977350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 51, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "118.23", "change": "-1.62", "market_id": "33", "circulate_market_value": "77208402000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 52, "hot_rank_chg": -42, "stock_cnt": 5850, "price": "105.38", "change": "-1.73", "market_id": "17", "circulate_market_value": "154176670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 53, "hot_rank_chg": -23, "stock_cnt": 5850, "price": "178.90", "change": "-3.09", "market_id": "33", "circulate_market_value": "179791930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 54, "hot_rank_chg": 29, "stock_cnt": 5850, "price": "30.41", "change": "-6.08", "market_id": "33", "circulate_market_value": "35776418000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 55, "hot_rank_chg": 163, "stock_cnt": 5850, "price": "21.38", "change": "4.91", "market_id": "33", "circulate_market_value": "285493460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 56, "hot_rank_chg": 129, "stock_cnt": 5850, "price": "9.77", "change": "1.88", "market_id": "17", "circulate_market_value": "29059705000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.64}, {"name": "禽流感", "change_pct": 3.07}, {"name": "铜箔/覆铜板", "change_pct": 0.31}, {"name": "农药", "change_pct": 2.7}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": 3.58}, {"name": "PET复合铜箔", "change_pct": 1.32}]}, {"code": "300346", "name": "南大光电", "hot_rank": 57, "hot_rank_chg": 18, "stock_cnt": 5850, "price": "92.66", "change": "0.01", "market_id": "33", "circulate_market_value": "60784037000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 58, "hot_rank_chg": 23, "stock_cnt": 5850, "price": "54.38", "change": "2.58", "market_id": "17", "circulate_market_value": "146812190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 59, "hot_rank_chg": -15, "stock_cnt": 5850, "price": "62.25", "change": "-1.08", "market_id": "17", "circulate_market_value": "20042831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603678", "name": "火炬电子", "hot_rank": 60, "hot_rank_chg": 100, "stock_cnt": 5850, "price": "88.02", "change": "6.04", "market_id": "17", "circulate_market_value": "41859375000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 61, "hot_rank_chg": -34, "stock_cnt": 5850, "price": "53.70", "change": "-0.32", "market_id": "17", "circulate_market_value": "35021621000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 62, "hot_rank_chg": 28, "stock_cnt": 5850, "price": "105.13", "change": "1.89", "market_id": "33", "circulate_market_value": "89746183000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 63, "hot_rank_chg": 62, "stock_cnt": 5850, "price": "24.40", "change": "0.95", "market_id": "17", "circulate_market_value": "27671516000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 64, "hot_rank_chg": -43, "stock_cnt": 5850, "price": "14.77", "change": "-0.20", "market_id": "17", "circulate_market_value": "5032198100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 65, "hot_rank_chg": -27, "stock_cnt": 5850, "price": "111.94", "change": "-0.22", "market_id": "17", "circulate_market_value": "8849065000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 66, "hot_rank_chg": 22, "stock_cnt": 5850, "price": "49.50", "change": "-2.65", "market_id": "33", "circulate_market_value": "75137556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002326", "name": "永太科技", "hot_rank": 67, "hot_rank_chg": -17, "stock_cnt": 5850, "price": "26.02", "change": "10.02", "market_id": "33", "circulate_market_value": "21028298000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "600183", "name": "生益科技", "hot_rank": 68, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "168.99", "change": "-2.54", "market_id": "17", "circulate_market_value": "404646820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 69, "hot_rank_chg": -28, "stock_cnt": 5850, "price": "20.65", "change": "2.13", "market_id": "33", "circulate_market_value": "16583442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 70, "hot_rank_chg": -19, "stock_cnt": 5850, "price": "143.20", "change": "-4.60", "market_id": "33", "circulate_market_value": "137003360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 71, "hot_rank_chg": -4, "stock_cnt": 5850, "price": "1272.00", "change": "0.16", "market_id": "33", "circulate_market_value": "1411843400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 72, "hot_rank_chg": 115, "stock_cnt": 5850, "price": "305.19", "change": "1.73", "market_id": "33", "circulate_market_value": "137346420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 73, "hot_rank_chg": 16, "stock_cnt": 5850, "price": "319.88", "change": "3.22", "market_id": "17", "circulate_market_value": "366718920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 74, "hot_rank_chg": -31, "stock_cnt": 5850, "price": "95.46", "change": "-2.57", "market_id": "17", "circulate_market_value": "58657630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 75, "hot_rank_chg": -13, "stock_cnt": 5850, "price": "43.85", "change": "10.01", "market_id": "17", "circulate_market_value": "40808122000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 76, "hot_rank_chg": 52, "stock_cnt": 5850, "price": "14.99", "change": "-0.47", "market_id": "33", "circulate_market_value": "12127194600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600909", "name": "华安证券", "hot_rank": 77, "hot_rank_chg": 221, "stock_cnt": 5850, "price": "12.22", "change": "9.99", "market_id": "17", "circulate_market_value": "61395837000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 2.18}, {"name": "期货概念", "change_pct": 4.77}, {"name": "券商", "change_pct": 4.39}, {"name": "安徽国企改革", "change_pct": 2.3}, {"name": "大金融", "change_pct": 2.49}, {"name": "国企改革", "change_pct": 2.03}]}, {"code": "600869", "name": "远东股份", "hot_rank": 78, "hot_rank_chg": 96, "stock_cnt": 5850, "price": "33.05", "change": "-1.31", "market_id": "17", "circulate_market_value": "73349608000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 79, "hot_rank_chg": 34, "stock_cnt": 5850, "price": "726.08", "change": "3.15", "market_id": "33", "circulate_market_value": "204621660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 80, "hot_rank_chg": 125, "stock_cnt": 5850, "price": "29.95", "change": "9.99", "market_id": "17", "circulate_market_value": "29649298000.00", "change_type": "1", "change_section": "11", "change_days": "6", "change_reason": "钨钽铌资产注入"}, {"code": "603078", "name": "江化微", "hot_rank": 81, "hot_rank_chg": -28, "stock_cnt": 5850, "price": "53.80", "change": "8.86", "market_id": "17", "circulate_market_value": "20747284000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 82, "hot_rank_chg": 66, "stock_cnt": 5850, "price": "47.78", "change": "2.40", "market_id": "33", "circulate_market_value": "67115938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 83, "hot_rank_chg": 63, "stock_cnt": 5850, "price": "170.65", "change": "3.39", "market_id": "33", "circulate_market_value": "141479790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300666", "name": "江丰电子", "hot_rank": 84, "hot_rank_chg": 33, "stock_cnt": 5850, "price": "412.46", "change": "11.87", "market_id": "33", "circulate_market_value": "91179305000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 85, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "14.33", "change": "3.54", "market_id": "17", "circulate_market_value": "59760303000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 86, "hot_rank_chg": -12, "stock_cnt": 5850, "price": "44.90", "change": "2.40", "market_id": "33", "circulate_market_value": "165420470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 87, "hot_rank_chg": 79, "stock_cnt": 5850, "price": "84.38", "change": "2.84", "market_id": "17", "circulate_market_value": "99778433000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 88, "hot_rank_chg": -30, "stock_cnt": 5850, "price": "598.18", "change": "-1.45", "market_id": "33", "circulate_market_value": "751304190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 89, "hot_rank_chg": -32, "stock_cnt": 5850, "price": "67.57", "change": "-3.95", "market_id": "33", "circulate_market_value": "493364250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300607", "name": "拓斯达", "hot_rank": 91, "hot_rank_chg": 477, "stock_cnt": 5850, "price": "49.48", "change": "20.01", "market_id": "33", "circulate_market_value": "16699468000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "一季报暴增"}, {"code": "300433", "name": "蓝思科技", "hot_rank": 92, "hot_rank_chg": 44, "stock_cnt": 5850, "price": "54.94", "change": "2.40", "market_id": "33", "circulate_market_value": "273085020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 93, "hot_rank_chg": -33, "stock_cnt": 5850, "price": "156.29", "change": "-4.28", "market_id": "17", "circulate_market_value": "35115024000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300319", "name": "麦捷科技", "hot_rank": 95, "hot_rank_chg": 142, "stock_cnt": 5850, "price": "30.40", "change": "2.60", "market_id": "33", "circulate_market_value": "25878615000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 96, "hot_rank_chg": 19, "stock_cnt": 5850, "price": "52.12", "change": "1.34", "market_id": "33", "circulate_market_value": "78649654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 97, "hot_rank_chg": 247, "stock_cnt": 5850, "price": "387.34", "change": "-1.44", "market_id": "33", "circulate_market_value": "1649209000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 98, "hot_rank_chg": -32, "stock_cnt": 5850, "price": "113.40", "change": "-5.48", "market_id": "33", "circulate_market_value": "82137368000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600497", "name": "驰宏锌锗", "hot_rank": 99, "hot_rank_chg": 33, "stock_cnt": 5850, "price": "12.49", "change": "3.14", "market_id": "17", "circulate_market_value": "62954352000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.66}, {"name": "军民融合", "change_pct": 1.54}, {"name": "有色 · 锑", "change_pct": 2.93}, {"name": "有色 · 钼", "change_pct": 0.86}, {"name": "有色 · 锌", "change_pct": 2.7}, {"name": "有色金属", "change_pct": 1.39}, {"name": "军工", "change_pct": 1.53}, {"name": "硫酸", "change_pct": 2.5}, {"name": "国企改革", "change_pct": 2.03}, {"name": "白银", "change_pct": 2.88}, {"name": "新冠病毒防治", "change_pct": 2.14}, {"name": "光纤概念", "change_pct": -1.22}, {"name": "有色 · 铋", "change_pct": 4.85}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 100, "hot_rank_chg": 44, "stock_cnt": 5850, "price": "291.60", "change": "-3.69", "market_id": "33", "circulate_market_value": "317373960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};