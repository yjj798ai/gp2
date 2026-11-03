const UPDATE_TIME = "2026-11-03 18:58";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": -5.02,
    "rate": 0,
    "tag": "",
    "hotTag": "连续322天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "猪肉",
    "rise": 2.34,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "短剧游戏",
    "rise": 0.12,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "影视ETF",
    "code": "886060"
  },
  {
    "name": "中船系",
    "rise": 3.44,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885860"
  },
  {
    "name": "白酒概念",
    "rise": 0.86,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "商业航天",
    "rise": -2.0,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续251天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "AI应用",
    "rise": -1.34,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "固态电池",
    "rise": -0.46,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "创新药",
    "rise": -0.95,
    "rate": 0,
    "tag": "",
    "hotTag": "连续152天上榜",
    "rankChg": 1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "人形机器人",
    "rise": -2.75,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "超级品牌",
    "rise": 1.74,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885761"
  },
  {
    "name": "PCB概念",
    "rise": -4.01,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续145天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": -4.82,
    "rate": 0,
    "tag": "",
    "hotTag": "连续275天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "AI视频",
    "rise": -0.8,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886068"
  },
  {
    "name": "机器人概念",
    "rise": -1.89,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "光伏概念",
    "rise": -1.2,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 2,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "人工智能",
    "rise": -1.47,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": -1,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "冰雪产业",
    "rise": 0.17,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": -1,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "新股与次新股",
    "rise": -1.89,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "高股息精选",
    "rise": 0.69,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "红利ETF",
    "code": "886072"
  }
];
const THS_EVENTS = [
  {
    "title": "三天营收已超10亿元！《影之刃零》发售72小时销量超400万份",
    "desc": "",
    "heat": 389610,
    "direction": "游戏",
    "themes": [
      "游戏",
      "手机游戏",
      "网络游戏"
    ],
    "stocks": [
      {
        "name": "国旅联合",
        "code": "600358",
        "chg": 10.079051
      }
    ]
  },
  {
    "title": "硫化锂再次成为资本关注的焦点 数千万元A轮融资落定",
    "desc": "",
    "heat": 364658,
    "direction": "电池",
    "themes": [
      "电池",
      "固态电池",
      "钠离子电池"
    ],
    "stocks": [
      {
        "name": "尚水智能",
        "code": "301513",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "透视光伏行业三季报：盈利修复信号显现 先进产能唱主角",
    "desc": "",
    "heat": 80441,
    "direction": "光伏设备",
    "themes": [
      "光伏设备",
      "光伏概念"
    ],
    "stocks": [
      {
        "name": "高测股份",
        "code": "688556",
        "chg": 11.609907
      }
    ]
  },
  {
    "title": "影视院线领涨传媒板块：AI漫剧进入业绩验证期",
    "desc": "",
    "heat": 79416,
    "direction": "影视院线",
    "themes": [
      "影视院线",
      "短剧游戏",
      "AI视频"
    ],
    "stocks": [
      {
        "name": "ST豆神",
        "code": "300010",
        "chg": 19.936709
      }
    ]
  },
  {
    "title": "药明生物，拿下费森尤斯十年长单",
    "desc": "",
    "heat": 58306,
    "direction": "创新药",
    "themes": [
      "ADC药物",
      "PD-1",
      "创新药"
    ],
    "stocks": [
      {
        "name": "片仔癀",
        "code": "600436",
        "chg": 6.267717
      }
    ]
  },
  {
    "title": "李佳琦直播卖千问办公 半小时卖出2万亿Token",
    "desc": "",
    "heat": 30710,
    "direction": "词元概念（Token）",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "明阳电路",
        "code": "300739",
        "chg": 12.456747
      }
    ]
  },
  {
    "title": "特朗普：“不急于”决定是否重启对伊朗的战事",
    "desc": "",
    "heat": 21261,
    "direction": "美伊战争/战后重建",
    "themes": [
      "战后重建",
      "白银",
      "黄金概念",
      "航运概念"
    ],
    "stocks": [
      {
        "name": "东方创业",
        "code": "600278",
        "chg": 5.448718
      }
    ]
  },
  {
    "title": "电子布供需紧平衡 龙头业绩大增 加速产能扩张",
    "desc": "",
    "heat": 10005,
    "direction": "电子布涨价",
    "themes": [
      "电子布",
      "PCB概念"
    ],
    "stocks": [
      {
        "name": "明阳电路",
        "code": "300739",
        "chg": 12.456747
      }
    ]
  },
  {
    "title": "证监会部署多项举措稳市场稳预期；央行下调股票回购增持再贷款利率",
    "desc": "",
    "heat": 4351,
    "direction": "大金融",
    "themes": [
      "互联网金融",
      "银行",
      "证券",
      "保险"
    ],
    "stocks": [
      {
        "name": "银之杰",
        "code": "300085",
        "chg": 8.170915
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "水产养殖",
    "change": "+3.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "破发次新",
    "change": "+3.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+2.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+2.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+2.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "+2.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "啤酒",
    "change": "+2.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "+2.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+2.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+2.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民航",
    "change": "+2.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大消费",
    "change": "+1.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中日韩自贸区",
    "change": "+1.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+1.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+1.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液氯",
    "change": "+1.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饲料",
    "change": "+1.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷酸铁锂",
    "change": "+1.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+1.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水泥",
    "change": "+1.57%",
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
    "hot_rank": 3,
    "hot_rank_chg": 3,
    "stock_cnt": 5863,
    "price": "3.42",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "5406921700.00",
    "change_type": "1",
    "change_section": "10",
    "change_days": "6",
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -1.42
      },
      {
        "name": "体外诊断",
        "change_pct": -1.46
      },
      {
        "name": "医疗器械",
        "change_pct": -1.56
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "基因测序",
        "change_pct": -2.11
      },
      {
        "name": "预制菜",
        "change_pct": 0.93
      },
      {
        "name": "水产养殖",
        "change_pct": 3.35
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.5
      },
      {
        "name": "海洋经济",
        "change_pct": -0.79
      }
    ]
  },
  {
    "code": "002029",
    "name": "七匹狼",
    "hot_rank": 4,
    "hot_rank_chg": 14,
    "stock_cnt": 5863,
    "price": "10.33",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "6873643600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "夹克男装",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "纺织服装",
        "change_pct": 0.26
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 6,
    "hot_rank_chg": 6,
    "stock_cnt": 5863,
    "price": "4.95",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "6608512200.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "5",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "LED",
        "change_pct": -1.44
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.81
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 7,
    "hot_rank_chg": 39,
    "stock_cnt": 5863,
    "price": "11.55",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "6637059100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "羊毛羊绒",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": 0.26
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.81
      },
      {
        "name": "自贸区",
        "change_pct": 0.67
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 9,
    "hot_rank_chg": 8,
    "stock_cnt": 5863,
    "price": "2.46",
    "change": "9.82",
    "market_id": "17",
    "circulate_market_value": "7041435700.00",
    "change_type": "1",
    "change_section": "10",
    "change_days": "6",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 1.0
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "游戏",
        "change_pct": 0.52
      },
      {
        "name": "影视",
        "change_pct": 1.86
      },
      {
        "name": "低价股",
        "change_pct": 0.59
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.37
      },
      {
        "name": "AI视频",
        "change_pct": -1.4
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 10,
    "hot_rank_chg": -8,
    "stock_cnt": 5863,
    "price": "6.80",
    "change": "4.62",
    "market_id": "33",
    "circulate_market_value": "5202957000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.11
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.16
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "医药商业",
        "change_pct": 0.61
      },
      {
        "name": "保健品",
        "change_pct": 0.29
      },
      {
        "name": "民营医院",
        "change_pct": 0.33
      },
      {
        "name": "医药",
        "change_pct": -1.01
      },
      {
        "name": "食品",
        "change_pct": 0.6
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.18
      },
      {
        "name": "口腔",
        "change_pct": -1.66
      },
      {
        "name": "医美",
        "change_pct": 0.58
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.5
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 12,
    "hot_rank_chg": 23,
    "stock_cnt": 5863,
    "price": "12.36",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "4131440200.00",
    "change_type": "1",
    "change_section": "18",
    "change_days": "10",
    "change_reason": "水产加工",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.7
      },
      {
        "name": "饲料",
        "change_pct": 1.64
      },
      {
        "name": "一带一路",
        "change_pct": -0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "保健品",
        "change_pct": 0.29
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.04
      },
      {
        "name": "污水处理",
        "change_pct": -0.94
      },
      {
        "name": "环保",
        "change_pct": -0.82
      },
      {
        "name": "食品",
        "change_pct": 0.6
      },
      {
        "name": "预制菜",
        "change_pct": 0.93
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      },
      {
        "name": "水产养殖",
        "change_pct": 3.35
      },
      {
        "name": "广西概念",
        "change_pct": 0.36
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 14,
    "hot_rank_chg": 64,
    "stock_cnt": 5863,
    "price": "4.81",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "2690327000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "短剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 1.0
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.64
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "游戏",
        "change_pct": 0.52
      },
      {
        "name": "影视",
        "change_pct": 1.86
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.37
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 15,
    "hot_rank_chg": -8,
    "stock_cnt": 5863,
    "price": "12.76",
    "change": "-3.70",
    "market_id": "33",
    "circulate_market_value": "7228263000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "石墨烯",
        "change_pct": -2.06
      },
      {
        "name": "军民融合",
        "change_pct": -1.6
      },
      {
        "name": "物联网",
        "change_pct": -1.81
      },
      {
        "name": "LED",
        "change_pct": -1.44
      },
      {
        "name": "军工",
        "change_pct": -1.16
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.86
      },
      {
        "name": "海洋经济",
        "change_pct": -0.79
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 16,
    "hot_rank_chg": 60,
    "stock_cnt": 5863,
    "price": "8.72",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "6298384600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "电线电缆",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -0.69
      },
      {
        "name": "充电桩",
        "change_pct": -0.99
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.81
      },
      {
        "name": "军民融合",
        "change_pct": -1.6
      },
      {
        "name": "光伏",
        "change_pct": -0.24
      },
      {
        "name": "风电",
        "change_pct": -0.28
      },
      {
        "name": "军工",
        "change_pct": -1.16
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.79
      },
      {
        "name": "特高压",
        "change_pct": -0.26
      },
      {
        "name": "自贸区",
        "change_pct": 0.67
      },
      {
        "name": "海洋经济",
        "change_pct": -0.79
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 17,
    "hot_rank_chg": -6,
    "stock_cnt": 5863,
    "price": "8.60",
    "change": "-1.26",
    "market_id": "33",
    "circulate_market_value": "5161003800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.41
      },
      {
        "name": "边缘计算",
        "change_pct": -2.24
      },
      {
        "name": "核电",
        "change_pct": -0.69
      },
      {
        "name": "海工装备",
        "change_pct": -0.54
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.79
      },
      {
        "name": "冷链",
        "change_pct": -0.54
      },
      {
        "name": "地热",
        "change_pct": -1.62
      },
      {
        "name": "储能",
        "change_pct": -0.17
      },
      {
        "name": "碳中和",
        "change_pct": 0.24
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.4
      },
      {
        "name": "汽车热管理",
        "change_pct": -2.02
      },
      {
        "name": "热泵",
        "change_pct": -1.69
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.9
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.23
      },
      {
        "name": "海洋经济",
        "change_pct": -0.79
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 22,
    "hot_rank_chg": 5,
    "stock_cnt": 5863,
    "price": "7.87",
    "change": "6.93",
    "market_id": "33",
    "circulate_market_value": "14736038000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -0.99
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.79
      },
      {
        "name": "军民融合",
        "change_pct": -1.6
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.05
      },
      {
        "name": "风电",
        "change_pct": -0.28
      },
      {
        "name": "军工",
        "change_pct": -1.16
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.79
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.65
      },
      {
        "name": "轮边电机",
        "change_pct": 0.05
      },
      {
        "name": "人形机器人",
        "change_pct": -3.21
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 25,
    "hot_rank_chg": 7,
    "stock_cnt": 5863,
    "price": "12.55",
    "change": "6.81",
    "market_id": "17",
    "circulate_market_value": "5031068900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 0.62
      },
      {
        "name": "新零售",
        "change_pct": 0.71
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "物业管理",
        "change_pct": -0.18
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      },
      {
        "name": "地摊经济",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 26,
    "hot_rank_chg": 68,
    "stock_cnt": 5863,
    "price": "3.70",
    "change": "10.12",
    "market_id": "17",
    "circulate_market_value": "4830238700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "冰雪旅游保障",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "高速公路",
        "change_pct": 0.78
      },
      {
        "name": "振兴东北",
        "change_pct": 0.89
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 2.31
      }
    ]
  },
  {
    "code": "000591",
    "name": "太阳能",
    "hot_rank": 27,
    "hot_rank_chg": 99,
    "stock_cnt": 5863,
    "price": "4.59",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "17916056000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "光伏电站",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.31
      },
      {
        "name": "光伏",
        "change_pct": -0.24
      },
      {
        "name": "储能",
        "change_pct": -0.17
      },
      {
        "name": "破净股",
        "change_pct": 0.69
      },
      {
        "name": "BIPV概念",
        "change_pct": 0.98
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.36
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "002292",
    "name": "奥飞娱乐",
    "hot_rank": 29,
    "hot_rank_chg": 48,
    "stock_cnt": 5863,
    "price": "9.58",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "9751323700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "智能内容制作",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -1.56
      },
      {
        "name": "手游",
        "change_pct": 1.0
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.16
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "人工智能",
        "change_pct": -1.86
      },
      {
        "name": "VR&AR",
        "change_pct": -2.46
      },
      {
        "name": "影视",
        "change_pct": 1.86
      },
      {
        "name": "动漫",
        "change_pct": 0.59
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.73
      },
      {
        "name": "传媒",
        "change_pct": -0.24
      },
      {
        "name": "全息概念",
        "change_pct": -2.27
      },
      {
        "name": "NFT",
        "change_pct": -0.71
      },
      {
        "name": "元宇宙",
        "change_pct": -1.34
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.33
      },
      {
        "name": "玩具",
        "change_pct": -0.44
      },
      {
        "name": "盲盒",
        "change_pct": -0.01
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.37
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600558",
    "name": "大西洋",
    "hot_rank": 33,
    "hot_rank_chg": 56,
    "stock_cnt": 5863,
    "price": "6.24",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "5601054100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "机器人焊接材料",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -0.69
      },
      {
        "name": "军民融合",
        "change_pct": -1.6
      },
      {
        "name": "有色 · 钛",
        "change_pct": 0.62
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.07
      },
      {
        "name": "有色金属",
        "change_pct": -0.44
      },
      {
        "name": "军工",
        "change_pct": -1.16
      },
      {
        "name": "超超临界发电",
        "change_pct": 0.52
      },
      {
        "name": "核聚变",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 34,
    "hot_rank_chg": 40,
    "stock_cnt": 5863,
    "price": "4.00",
    "change": "9.89",
    "market_id": "17",
    "circulate_market_value": "4640580200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "赛纬重组",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -2.54
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "玻璃",
        "change_pct": 0.26
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      },
      {
        "name": "湖北国企改革",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 37,
    "hot_rank_chg": 101,
    "stock_cnt": 5863,
    "price": "3.82",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "4433272200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI影视",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "纺织服装",
        "change_pct": 0.26
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.56
      },
      {
        "name": "影视",
        "change_pct": 1.86
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.37
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 38,
    "hot_rank_chg": -15,
    "stock_cnt": 5863,
    "price": "12.31",
    "change": "-1.28",
    "market_id": "17",
    "circulate_market_value": "12862569400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -2.54
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.62
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -0.24
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 39,
    "hot_rank_chg": 207,
    "stock_cnt": 5863,
    "price": "4.35",
    "change": "10.13",
    "market_id": "17",
    "circulate_market_value": "3848790900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.71
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.16
      },
      {
        "name": "信托",
        "change_pct": 0.82
      },
      {
        "name": "民营医院",
        "change_pct": 0.33
      },
      {
        "name": "社区团购",
        "change_pct": 1.43
      },
      {
        "name": "大金融",
        "change_pct": 0.17
      },
      {
        "name": "餐饮",
        "change_pct": 0.47
      },
      {
        "name": "首发经济",
        "change_pct": 0.44
      }
    ]
  },
  {
    "code": "000599",
    "name": "青岛双星",
    "hot_rank": 40,
    "hot_rank_chg": 135,
    "stock_cnt": 5863,
    "price": "4.50",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "3675339500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "轮胎",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -2.54
      },
      {
        "name": "一带一路",
        "change_pct": -0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "石墨烯",
        "change_pct": -2.06
      },
      {
        "name": "军民融合",
        "change_pct": -1.6
      },
      {
        "name": "轮胎",
        "change_pct": 0.45
      },
      {
        "name": "物联网",
        "change_pct": -1.81
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.04
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 1.92
      },
      {
        "name": "外贸受益概念",
        "change_pct": -1.48
      },
      {
        "name": "军工",
        "change_pct": -1.16
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      },
      {
        "name": "篮球",
        "change_pct": 0.14
      },
      {
        "name": "华为产业链",
        "change_pct": -1.99
      },
      {
        "name": "自贸区",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "000608",
    "name": "阳光股份",
    "hot_rank": 45,
    "hot_rank_chg": 198,
    "stock_cnt": 5863,
    "price": "6.20",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "3576465700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业物业",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.55
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.64
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.41
      },
      {
        "name": "广西概念",
        "change_pct": 0.36
      }
    ]
  },
  {
    "code": "000525",
    "name": "红太阳",
    "hot_rank": 46,
    "hot_rank_chg": 10,
    "stock_cnt": 5863,
    "price": "5.02",
    "change": "1.62",
    "market_id": "33",
    "circulate_market_value": "5581035200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "草铵膦",
        "change_pct": 0.51
      },
      {
        "name": "农药",
        "change_pct": 0.02
      },
      {
        "name": "长寿药NMN",
        "change_pct": -0.97
      },
      {
        "name": "大农业",
        "change_pct": 0.57
      },
      {
        "name": "虫害防治",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 50,
    "hot_rank_chg": 0,
    "stock_cnt": 5863,
    "price": "10.10",
    "change": "3.27",
    "market_id": "17",
    "circulate_market_value": "6482010500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.13
      },
      {
        "name": "农业种植",
        "change_pct": 0.24
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.39
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.01
      },
      {
        "name": "休闲食品",
        "change_pct": 0.07
      },
      {
        "name": "食品",
        "change_pct": 0.6
      },
      {
        "name": "食品安全",
        "change_pct": -1.08
      },
      {
        "name": "社区团购",
        "change_pct": 1.43
      },
      {
        "name": "大农业",
        "change_pct": 0.57
      },
      {
        "name": "预制菜",
        "change_pct": 0.93
      },
      {
        "name": "人造肉",
        "change_pct": -0.39
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "002088",
    "name": "鲁阳节能",
    "hot_rank": 51,
    "hot_rank_chg": 266,
    "stock_cnt": 5863,
    "price": "8.33",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4214685400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "陶瓷纤维",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.35
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "大气治理",
        "change_pct": -1.36
      },
      {
        "name": "雄安新区",
        "change_pct": -0.27
      },
      {
        "name": "耐火材料",
        "change_pct": 0.18
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.79
      },
      {
        "name": "环保",
        "change_pct": -0.82
      },
      {
        "name": "船舶",
        "change_pct": 0.67
      },
      {
        "name": "建筑节能",
        "change_pct": -0.28
      },
      {
        "name": "气凝胶",
        "change_pct": 0.93
      },
      {
        "name": "旧改",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 53,
    "hot_rank_chg": 10,
    "stock_cnt": 5863,
    "price": "10.90",
    "change": "5.11",
    "market_id": "17",
    "circulate_market_value": "4716142800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -1.88
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "光伏",
        "change_pct": -0.24
      },
      {
        "name": "无线耳机",
        "change_pct": -3.06
      },
      {
        "name": "华为产业链",
        "change_pct": -1.99
      },
      {
        "name": "光伏胶膜",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 55,
    "hot_rank_chg": -19,
    "stock_cnt": 5863,
    "price": "8.30",
    "change": "5.60",
    "market_id": "33",
    "circulate_market_value": "3931546400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 1.0
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "VR&AR",
        "change_pct": -2.46
      },
      {
        "name": "游戏",
        "change_pct": 0.52
      },
      {
        "name": "影视",
        "change_pct": 1.86
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.13
      },
      {
        "name": "动漫",
        "change_pct": 0.59
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.73
      },
      {
        "name": "传媒",
        "change_pct": -0.24
      },
      {
        "name": "元宇宙",
        "change_pct": -1.34
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.37
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600189",
    "name": "泉阳泉",
    "hot_rank": 58,
    "hot_rank_chg": -16,
    "stock_cnt": 5863,
    "price": "9.40",
    "change": "-3.29",
    "market_id": "17",
    "circulate_market_value": "6722859400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "园林",
        "change_pct": -1.71
      },
      {
        "name": "碳中和",
        "change_pct": 0.24
      },
      {
        "name": "振兴东北",
        "change_pct": 0.89
      },
      {
        "name": "饮料",
        "change_pct": 0.91
      },
      {
        "name": "林业碳汇",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 60,
    "hot_rank_chg": -6,
    "stock_cnt": 5863,
    "price": "11.19",
    "change": "-4.68",
    "market_id": "17",
    "circulate_market_value": "4643649900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.82
      },
      {
        "name": "5G",
        "change_pct": -3.52
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.79
      },
      {
        "name": "LED",
        "change_pct": -1.44
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.81
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": -3.62
      }
    ]
  },
  {
    "code": "600241",
    "name": "时代万恒",
    "hot_rank": 62,
    "hot_rank_chg": 68,
    "stock_cnt": 5863,
    "price": "9.12",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "2684035300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "锂电池",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.35
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 1.92
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.79
      },
      {
        "name": "振兴东北",
        "change_pct": 0.89
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      },
      {
        "name": "自贸区",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "002652",
    "name": "扬子新材",
    "hot_rank": 63,
    "hot_rank_chg": 209,
    "stock_cnt": 5863,
    "price": "4.17",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "2135306900.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "有机涂层板",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "装修装饰",
        "change_pct": -0.44
      }
    ]
  },
  {
    "code": "601366",
    "name": "利群股份",
    "hot_rank": 64,
    "hot_rank_chg": 406,
    "stock_cnt": 5863,
    "price": "3.96",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "3800574800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "零售连锁",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.25
      },
      {
        "name": "新零售",
        "change_pct": 0.71
      },
      {
        "name": "智慧物流",
        "change_pct": -0.66
      },
      {
        "name": "破净股",
        "change_pct": 0.69
      },
      {
        "name": "智能制造",
        "change_pct": -2.15
      },
      {
        "name": "社区团购",
        "change_pct": 1.43
      },
      {
        "name": "华为产业链",
        "change_pct": -1.99
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 68,
    "hot_rank_chg": 47,
    "stock_cnt": 5863,
    "price": "7.51",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "3441445500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "水泥熟料",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": 1.57
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.81
      },
      {
        "name": "自贸区",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "000410",
    "name": "沈阳机床",
    "hot_rank": 69,
    "hot_rank_chg": -16,
    "stock_cnt": 5863,
    "price": "5.83",
    "change": "-1.35",
    "market_id": "33",
    "circulate_market_value": "11491036900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.31
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "工业自动化",
        "change_pct": -2.58
      },
      {
        "name": "智能制造",
        "change_pct": -2.15
      },
      {
        "name": "工业互联网",
        "change_pct": -1.45
      },
      {
        "name": "振兴东北",
        "change_pct": 0.89
      },
      {
        "name": "工业母机",
        "change_pct": -3.02
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 72,
    "hot_rank_chg": -21,
    "stock_cnt": 5863,
    "price": "4.40",
    "change": "1.38",
    "market_id": "33",
    "circulate_market_value": "155615390000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.47
      },
      {
        "name": "折叠屏",
        "change_pct": -3.31
      },
      {
        "name": "手机产业链",
        "change_pct": -2.95
      },
      {
        "name": "超高清视频",
        "change_pct": -1.56
      },
      {
        "name": "苹果产业链",
        "change_pct": -3.67
      },
      {
        "name": "电竞",
        "change_pct": 0.19
      },
      {
        "name": "半导体",
        "change_pct": -4.42
      },
      {
        "name": "人工智能",
        "change_pct": -1.86
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.68
      },
      {
        "name": "VR&AR",
        "change_pct": -2.46
      },
      {
        "name": "OLED",
        "change_pct": -2.89
      },
      {
        "name": "京津冀",
        "change_pct": -0.22
      },
      {
        "name": "物联网",
        "change_pct": -1.81
      },
      {
        "name": "指纹识别",
        "change_pct": -2.67
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.74
      },
      {
        "name": "白马股",
        "change_pct": 1.32
      },
      {
        "name": "智能制造",
        "change_pct": -2.15
      },
      {
        "name": "小米概念股",
        "change_pct": -2.47
      },
      {
        "name": "国产芯片",
        "change_pct": -3.77
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.36
      },
      {
        "name": "全息概念",
        "change_pct": -2.27
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.13
      },
      {
        "name": "MicroLED",
        "change_pct": -2.85
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.36
      },
      {
        "name": "智能手表",
        "change_pct": -2.51
      },
      {
        "name": "MiniLED",
        "change_pct": -2.17
      },
      {
        "name": "传感器",
        "change_pct": -2.8
      },
      {
        "name": "大硅片",
        "change_pct": -3.59
      },
      {
        "name": "AI PC",
        "change_pct": -3.03
      },
      {
        "name": "华为产业链",
        "change_pct": -1.99
      },
      {
        "name": "回购",
        "change_pct": -2.34
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -7.16
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.08
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.71
      }
    ]
  },
  {
    "code": "600630",
    "name": "龙头股份",
    "hot_rank": 75,
    "hot_rank_chg": 226,
    "stock_cnt": 5863,
    "price": "7.05",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "2995274300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "纺织服装",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.25
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.62
      },
      {
        "name": "一带一路",
        "change_pct": -0.2
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.16
      },
      {
        "name": "纺织服装",
        "change_pct": 0.26
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 0.32
      },
      {
        "name": "进口博览会",
        "change_pct": 1.52
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.44
      },
      {
        "name": "物业管理",
        "change_pct": -0.18
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.5
      },
      {
        "name": "自贸区",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "000417",
    "name": "合百集团",
    "hot_rank": 78,
    "hot_rank_chg": 1,
    "stock_cnt": 5863,
    "price": "5.96",
    "change": "-4.94",
    "market_id": "33",
    "circulate_market_value": "4643003600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.25
      },
      {
        "name": "新零售",
        "change_pct": 0.71
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "人工智能",
        "change_pct": -1.86
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.18
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.13
      },
      {
        "name": "冷链",
        "change_pct": -0.54
      },
      {
        "name": "破净股",
        "change_pct": 0.69
      },
      {
        "name": "国企改革",
        "change_pct": 0.4
      },
      {
        "name": "地摊经济",
        "change_pct": -0.36
      },
      {
        "name": "首发经济",
        "change_pct": 0.44
      }
    ]
  },
  {
    "code": "605388",
    "name": "均瑶健康",
    "hot_rank": 80,
    "hot_rank_chg": 230,
    "stock_cnt": 5863,
    "price": "6.58",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "3951184700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "益生菌食品",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.13
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.16
      },
      {
        "name": "食品",
        "change_pct": 0.6
      },
      {
        "name": "大农业",
        "change_pct": 0.57
      },
      {
        "name": "植物奶",
        "change_pct": 0.93
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": -0.74
      },
      {
        "name": "饮料",
        "change_pct": 0.91
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 83,
    "hot_rank_chg": -12,
    "stock_cnt": 5863,
    "price": "6.61",
    "change": "1.23",
    "market_id": "33",
    "circulate_market_value": "12658761100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.81
      },
      {
        "name": "林业",
        "change_pct": -1.07
      },
      {
        "name": "碳中和",
        "change_pct": 0.24
      },
      {
        "name": "自贸区",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 86,
    "hot_rank_chg": -60,
    "stock_cnt": 5863,
    "price": "8.59",
    "change": "-1.15",
    "market_id": "17",
    "circulate_market_value": "2315968900000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.21
      },
      {
        "name": "高股息",
        "change_pct": 0.47
      },
      {
        "name": "银行",
        "change_pct": -0.44
      },
      {
        "name": "白马股",
        "change_pct": 1.32
      },
      {
        "name": "破净股",
        "change_pct": 0.69
      },
      {
        "name": "大金融",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 88,
    "hot_rank_chg": 313,
    "stock_cnt": 5863,
    "price": "3.76",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "3237971200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "光伏边框",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -0.6
      },
      {
        "name": "一带一路",
        "change_pct": -0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 1.72
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.81
      },
      {
        "name": "光伏",
        "change_pct": -0.24
      },
      {
        "name": "有色金属",
        "change_pct": -0.44
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.79
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.65
      },
      {
        "name": "自贸区",
        "change_pct": 0.67
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.9
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 94,
    "hot_rank_chg": 11,
    "stock_cnt": 5863,
    "price": "5.48",
    "change": "-4.86",
    "market_id": "17",
    "circulate_market_value": "13801434000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.25
      },
      {
        "name": "工业大麻",
        "change_pct": -0.17
      },
      {
        "name": "中药",
        "change_pct": 0.11
      },
      {
        "name": "保健品",
        "change_pct": 0.29
      },
      {
        "name": "民营医院",
        "change_pct": 0.33
      },
      {
        "name": "医药",
        "change_pct": -1.01
      },
      {
        "name": "化学原料药",
        "change_pct": -0.83
      },
      {
        "name": "流感",
        "change_pct": -0.54
      },
      {
        "name": "振兴东北",
        "change_pct": 0.89
      },
      {
        "name": "食品",
        "change_pct": 0.6
      },
      {
        "name": "肝炎概念",
        "change_pct": -0.54
      }
    ]
  },
  {
    "code": "601099",
    "name": "太平洋",
    "hot_rank": 99,
    "hot_rank_chg": -33,
    "stock_cnt": 5863,
    "price": "3.58",
    "change": "1.13",
    "market_id": "17",
    "circulate_market_value": "24402413000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "券商",
        "change_pct": 0.77
      },
      {
        "name": "大金融",
        "change_pct": 0.17
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "300308", "name": "中际旭创", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "480.20", "change": "-12.69", "market_id": "33", "circulate_market_value": "532991750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001381", "name": "皇冠新材", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "84.55", "change": "397.94", "market_id": "33", "circulate_market_value": "3728421700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002086", "name": "东方海洋", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5863, "price": "3.42", "change": "9.97", "market_id": "33", "circulate_market_value": "5406921700.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.42}, {"name": "体外诊断", "change_pct": -1.46}, {"name": "医疗器械", "change_pct": -1.56}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "基因测序", "change_pct": -2.11}, {"name": "预制菜", "change_pct": 0.93}, {"name": "水产养殖", "change_pct": 3.35}, {"name": "新冠病毒防治", "change_pct": -0.5}, {"name": "海洋经济", "change_pct": -0.79}]}, {"code": "002029", "name": "七匹狼", "hot_rank": 4, "hot_rank_chg": 14, "stock_cnt": 5863, "price": "10.33", "change": "10.01", "market_id": "33", "circulate_market_value": "6873643600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "夹克男装", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.72}, {"name": "纺织服装", "change_pct": 0.26}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 5, "hot_rank_chg": 24, "stock_cnt": 5863, "price": "18.67", "change": "10.02", "market_id": "33", "circulate_market_value": "8445165400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池"}, {"code": "600261", "name": "阳光照明", "hot_rank": 6, "hot_rank_chg": 6, "stock_cnt": 5863, "price": "4.95", "change": "10.00", "market_id": "17", "circulate_market_value": "6608512200.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "商业航天", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.72}, {"name": "LED", "change_pct": -1.44}, {"name": "卫星互联网", "change_pct": -1.81}]}, {"code": "601566", "name": "九牧王", "hot_rank": 7, "hot_rank_chg": 39, "stock_cnt": 5863, "price": "11.55", "change": "10.00", "market_id": "17", "circulate_market_value": "6637059100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "羊毛羊绒", "xgb_concepts": [{"name": "纺织服装", "change_pct": 0.26}, {"name": "福建自贸/海西概念", "change_pct": 0.81}, {"name": "自贸区", "change_pct": 0.67}, {"name": "IP经济/谷子经济", "change_pct": 0.13}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "20.26", "change": "1.86", "market_id": "33", "circulate_market_value": "9311735000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 9, "hot_rank_chg": 8, "stock_cnt": 5863, "price": "2.46", "change": "9.82", "market_id": "17", "circulate_market_value": "7041435700.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": 1.0}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "游戏", "change_pct": 0.52}, {"name": "影视", "change_pct": 1.86}, {"name": "低价股", "change_pct": 0.59}, {"name": "国企改革", "change_pct": 0.4}, {"name": "短剧/互动影游", "change_pct": 0.37}, {"name": "AI视频", "change_pct": -1.4}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 10, "hot_rank_chg": -8, "stock_cnt": 5863, "price": "6.80", "change": "4.62", "market_id": "33", "circulate_market_value": "5202957000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.11}, {"name": "优化生育（三孩）", "change_pct": 0.16}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "医药商业", "change_pct": 0.61}, {"name": "保健品", "change_pct": 0.29}, {"name": "民营医院", "change_pct": 0.33}, {"name": "医药", "change_pct": -1.01}, {"name": "食品", "change_pct": 0.6}, {"name": "辅助生殖", "change_pct": -1.18}, {"name": "口腔", "change_pct": -1.66}, {"name": "医美", "change_pct": 0.58}, {"name": "新冠病毒防治", "change_pct": -0.5}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 11, "hot_rank_chg": 5, "stock_cnt": 5863, "price": "22.88", "change": "-1.93", "market_id": "33", "circulate_market_value": "17429198000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 12, "hot_rank_chg": 23, "stock_cnt": 5863, "price": "12.36", "change": "9.96", "market_id": "33", "circulate_market_value": "4131440200.00", "change_type": "1", "change_section": "18", "change_days": "10", "change_reason": "水产加工", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.7}, {"name": "饲料", "change_pct": 1.64}, {"name": "一带一路", "change_pct": -0.2}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "保健品", "change_pct": 0.29}, {"name": "山东国企改革", "change_pct": 0.04}, {"name": "污水处理", "change_pct": -0.94}, {"name": "环保", "change_pct": -0.82}, {"name": "食品", "change_pct": 0.6}, {"name": "预制菜", "change_pct": 0.93}, {"name": "国企改革", "change_pct": 0.4}, {"name": "水产养殖", "change_pct": 3.35}, {"name": "广西概念", "change_pct": 0.36}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 13, "hot_rank_chg": 12, "stock_cnt": 5863, "price": "17.16", "change": "10.00", "market_id": "33", "circulate_market_value": "3044321300.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "白酒"}, {"code": "600892", "name": "大晟文化", "hot_rank": 14, "hot_rank_chg": 64, "stock_cnt": 5863, "price": "4.81", "change": "10.07", "market_id": "17", "circulate_market_value": "2690327000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "短剧", "xgb_concepts": [{"name": "手游", "change_pct": 1.0}, {"name": "ST摘帽", "change_pct": -0.64}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "游戏", "change_pct": 0.52}, {"name": "影视", "change_pct": 1.86}, {"name": "短剧/互动影游", "change_pct": 0.37}]}, {"code": "002724", "name": "海洋王", "hot_rank": 15, "hot_rank_chg": -8, "stock_cnt": 5863, "price": "12.76", "change": "-3.70", "market_id": "33", "circulate_market_value": "7228263000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.72}, {"name": "石墨烯", "change_pct": -2.06}, {"name": "军民融合", "change_pct": -1.6}, {"name": "物联网", "change_pct": -1.81}, {"name": "LED", "change_pct": -1.44}, {"name": "军工", "change_pct": -1.16}, {"name": "智慧灯杆", "change_pct": -1.86}, {"name": "海洋经济", "change_pct": -0.79}]}, {"code": "002300", "name": "太阳电缆", "hot_rank": 16, "hot_rank_chg": 60, "stock_cnt": 5863, "price": "8.72", "change": "9.96", "market_id": "33", "circulate_market_value": "6298384600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电线电缆", "xgb_concepts": [{"name": "核电", "change_pct": -0.69}, {"name": "充电桩", "change_pct": -0.99}, {"name": "福建自贸/海西概念", "change_pct": 0.81}, {"name": "军民融合", "change_pct": -1.6}, {"name": "光伏", "change_pct": -0.24}, {"name": "风电", "change_pct": -0.28}, {"name": "军工", "change_pct": -1.16}, {"name": "新能源汽车", "change_pct": -0.79}, {"name": "特高压", "change_pct": -0.26}, {"name": "自贸区", "change_pct": 0.67}, {"name": "海洋经济", "change_pct": -0.79}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 17, "hot_rank_chg": -6, "stock_cnt": 5863, "price": "8.60", "change": "-1.26", "market_id": "33", "circulate_market_value": "5161003800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.41}, {"name": "边缘计算", "change_pct": -2.24}, {"name": "核电", "change_pct": -0.69}, {"name": "海工装备", "change_pct": -0.54}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "云计算数据中心", "change_pct": -2.79}, {"name": "冷链", "change_pct": -0.54}, {"name": "地热", "change_pct": -1.62}, {"name": "储能", "change_pct": -0.17}, {"name": "碳中和", "change_pct": 0.24}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 0.4}, {"name": "汽车热管理", "change_pct": -2.02}, {"name": "热泵", "change_pct": -1.69}, {"name": "液冷服务器", "change_pct": -2.9}, {"name": "蜜雪冰城概念股", "change_pct": -1.23}, {"name": "海洋经济", "change_pct": -0.79}]}, {"code": "300502", "name": "新易盛", "hot_rank": 18, "hot_rank_chg": -15, "stock_cnt": 5863, "price": "173.36", "change": "-9.46", "market_id": "33", "circulate_market_value": "217518910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 19, "hot_rank_chg": 21, "stock_cnt": 5863, "price": "15.84", "change": "10.00", "market_id": "33", "circulate_market_value": "4477334400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低温乳制品"}, {"code": "001309", "name": "德明利", "hot_rank": 20, "hot_rank_chg": 11, "stock_cnt": 5863, "price": "187.00", "change": "-10.00", "market_id": "33", "circulate_market_value": "43462182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 21, "hot_rank_chg": -8, "stock_cnt": 5863, "price": "15.81", "change": "-10.02", "market_id": "17", "circulate_market_value": "5403216000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002249", "name": "大洋电机", "hot_rank": 22, "hot_rank_chg": 5, "stock_cnt": 5863, "price": "7.87", "change": "6.93", "market_id": "33", "circulate_market_value": "14736038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -0.99}, {"name": "云计算数据中心", "change_pct": -2.79}, {"name": "军民融合", "change_pct": -1.6}, {"name": "氢能源/燃料电池", "change_pct": 0.05}, {"name": "风电", "change_pct": -0.28}, {"name": "军工", "change_pct": -1.16}, {"name": "新能源汽车", "change_pct": -0.79}, {"name": "新能源车零部件", "change_pct": -1.65}, {"name": "轮边电机", "change_pct": 0.05}, {"name": "人形机器人", "change_pct": -3.21}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 23, "hot_rank_chg": -14, "stock_cnt": 5863, "price": "38.80", "change": "-7.00", "market_id": "17", "circulate_market_value": "174717910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 24, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "21.96", "change": "0.14", "market_id": "33", "circulate_market_value": "4176737100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 25, "hot_rank_chg": 7, "stock_cnt": 5863, "price": "12.55", "change": "6.81", "market_id": "17", "circulate_market_value": "5031068900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 0.62}, {"name": "新零售", "change_pct": 0.71}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "物业管理", "change_pct": -0.18}, {"name": "国企改革", "change_pct": 0.4}, {"name": "地摊经济", "change_pct": -0.36}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 26, "hot_rank_chg": 68, "stock_cnt": 5863, "price": "3.70", "change": "10.12", "market_id": "17", "circulate_market_value": "4830238700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪旅游保障", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.72}, {"name": "高速公路", "change_pct": 0.78}, {"name": "振兴东北", "change_pct": 0.89}, {"name": "黑龙江自贸区", "change_pct": 2.31}]}, {"code": "000591", "name": "太阳能", "hot_rank": 27, "hot_rank_chg": 99, "stock_cnt": 5863, "price": "4.59", "change": "10.07", "market_id": "33", "circulate_market_value": "17916056000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光伏电站", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.31}, {"name": "光伏", "change_pct": -0.24}, {"name": "储能", "change_pct": -0.17}, {"name": "破净股", "change_pct": 0.69}, {"name": "BIPV概念", "change_pct": 0.98}, {"name": "钙钛矿电池", "change_pct": -0.36}, {"name": "国企改革", "change_pct": 0.4}]}, {"code": "002384", "name": "东山精密", "hot_rank": 28, "hot_rank_chg": -14, "stock_cnt": 5863, "price": "88.13", "change": "-4.41", "market_id": "33", "circulate_market_value": "122176533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002292", "name": "奥飞娱乐", "hot_rank": 29, "hot_rank_chg": 48, "stock_cnt": 5863, "price": "9.58", "change": "9.99", "market_id": "33", "circulate_market_value": "9751323700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "智能内容制作", "xgb_concepts": [{"name": "超高清视频", "change_pct": -1.56}, {"name": "手游", "change_pct": 1.0}, {"name": "优化生育（三孩）", "change_pct": 0.16}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "人工智能", "change_pct": -1.86}, {"name": "VR&AR", "change_pct": -2.46}, {"name": "影视", "change_pct": 1.86}, {"name": "动漫", "change_pct": 0.59}, {"name": "独角兽", "change_pct": 0.85}, {"name": "腾讯概念股", "change_pct": -1.73}, {"name": "传媒", "change_pct": -0.24}, {"name": "全息概念", "change_pct": -2.27}, {"name": "NFT", "change_pct": -0.71}, {"name": "元宇宙", "change_pct": -1.34}, {"name": "虚拟数字人", "change_pct": -1.33}, {"name": "玩具", "change_pct": -0.44}, {"name": "盲盒", "change_pct": -0.01}, {"name": "短剧/互动影游", "change_pct": 0.37}, {"name": "IP经济/谷子经济", "change_pct": 0.13}]}, {"code": "600519", "name": "贵州茅台", "hot_rank": 30, "hot_rank_chg": -9, "stock_cnt": 5863, "price": "1480.00", "change": "2.84", "market_id": "17", "circulate_market_value": "1850120800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 31, "hot_rank_chg": -23, "stock_cnt": 5863, "price": "624.58", "change": "-5.68", "market_id": "17", "circulate_market_value": "18792188000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 32, "hot_rank_chg": 15, "stock_cnt": 5863, "price": "14.30", "change": "10.00", "market_id": "17", "circulate_market_value": "6355555600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "漫剧"}, {"code": "600558", "name": "大西洋", "hot_rank": 33, "hot_rank_chg": 56, "stock_cnt": 5863, "price": "6.24", "change": "10.05", "market_id": "17", "circulate_market_value": "5601054100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人焊接材料", "xgb_concepts": [{"name": "核电", "change_pct": -0.69}, {"name": "军民融合", "change_pct": -1.6}, {"name": "有色 · 钛", "change_pct": 0.62}, {"name": "装配式建筑", "change_pct": 0.07}, {"name": "有色金属", "change_pct": -0.44}, {"name": "军工", "change_pct": -1.16}, {"name": "超超临界发电", "change_pct": 0.52}, {"name": "核聚变", "change_pct": -1.31}]}, {"code": "600293", "name": "三峡新材", "hot_rank": 34, "hot_rank_chg": 40, "stock_cnt": 5863, "price": "4.00", "change": "9.89", "market_id": "17", "circulate_market_value": "4640580200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "赛纬重组", "xgb_concepts": [{"name": "资产重组", "change_pct": -2.54}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "玻璃", "change_pct": 0.26}, {"name": "国企改革", "change_pct": 0.4}, {"name": "湖北国企改革", "change_pct": 0.54}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 35, "hot_rank_chg": -25, "stock_cnt": 5863, "price": "249.32", "change": "3.80", "market_id": "33", "circulate_market_value": "1062257050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002058", "name": "紫竹高科", "hot_rank": 36, "hot_rank_chg": 120, "stock_cnt": 5863, "price": "21.13", "change": "9.99", "market_id": "33", "circulate_market_value": "3029320000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "601599", "name": "浙文影业", "hot_rank": 37, "hot_rank_chg": 101, "stock_cnt": 5863, "price": "3.82", "change": "10.09", "market_id": "17", "circulate_market_value": "4433272200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI影视", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.72}, {"name": "纺织服装", "change_pct": 0.26}, {"name": "浙江国企改革", "change_pct": 0.56}, {"name": "影视", "change_pct": 1.86}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 0.4}, {"name": "短剧/互动影游", "change_pct": 0.37}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 38, "hot_rank_chg": -15, "stock_cnt": 5863, "price": "12.31", "change": "-1.28", "market_id": "17", "circulate_market_value": "12862569400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -2.54}, {"name": "上海国企改革", "change_pct": 0.62}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -0.24}, {"name": "国企改革", "change_pct": 0.4}]}, {"code": "600327", "name": "大东方", "hot_rank": 39, "hot_rank_chg": 207, "stock_cnt": 5863, "price": "4.35", "change": "10.13", "market_id": "17", "circulate_market_value": "3848790900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": 0.71}, {"name": "优化生育（三孩）", "change_pct": 0.16}, {"name": "信托", "change_pct": 0.82}, {"name": "民营医院", "change_pct": 0.33}, {"name": "社区团购", "change_pct": 1.43}, {"name": "大金融", "change_pct": 0.17}, {"name": "餐饮", "change_pct": 0.47}, {"name": "首发经济", "change_pct": 0.44}]}, {"code": "000599", "name": "青岛双星", "hot_rank": 40, "hot_rank_chg": 135, "stock_cnt": 5863, "price": "4.50", "change": "10.02", "market_id": "33", "circulate_market_value": "3675339500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "轮胎", "xgb_concepts": [{"name": "资产重组", "change_pct": -2.54}, {"name": "一带一路", "change_pct": -0.2}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "石墨烯", "change_pct": -2.06}, {"name": "军民融合", "change_pct": -1.6}, {"name": "轮胎", "change_pct": 0.45}, {"name": "物联网", "change_pct": -1.81}, {"name": "山东国企改革", "change_pct": 0.04}, {"name": "中日韩自贸区", "change_pct": 1.92}, {"name": "外贸受益概念", "change_pct": -1.48}, {"name": "军工", "change_pct": -1.16}, {"name": "国企改革", "change_pct": 0.4}, {"name": "篮球", "change_pct": 0.14}, {"name": "华为产业链", "change_pct": -1.99}, {"name": "自贸区", "change_pct": 0.67}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 41, "hot_rank_chg": 8, "stock_cnt": 5863, "price": "18.01", "change": "4.04", "market_id": "17", "circulate_market_value": "3803048900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 42, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "14.00", "change": "4.01", "market_id": "17", "circulate_market_value": "9324000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 43, "hot_rank_chg": -24, "stock_cnt": 5863, "price": "75.72", "change": "5.84", "market_id": "33", "circulate_market_value": "120202446000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603258", "name": "电魂网络", "hot_rank": 44, "hot_rank_chg": 70, "stock_cnt": 5863, "price": "16.69", "change": "10.02", "market_id": "17", "circulate_market_value": "4027987100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "游戏"}, {"code": "000608", "name": "阳光股份", "hot_rank": 45, "hot_rank_chg": 198, "stock_cnt": 5863, "price": "6.20", "change": "9.93", "market_id": "33", "circulate_market_value": "3576465700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业物业", "xgb_concepts": [{"name": "房地产", "change_pct": 0.55}, {"name": "ST摘帽", "change_pct": -0.64}, {"name": "东数西算/算力", "change_pct": -2.41}, {"name": "广西概念", "change_pct": 0.36}]}, {"code": "000525", "name": "红太阳", "hot_rank": 46, "hot_rank_chg": 10, "stock_cnt": 5863, "price": "5.02", "change": "1.62", "market_id": "33", "circulate_market_value": "5581035200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.72}, {"name": "草铵膦", "change_pct": 0.51}, {"name": "农药", "change_pct": 0.02}, {"name": "长寿药NMN", "change_pct": -0.97}, {"name": "大农业", "change_pct": 0.57}, {"name": "虫害防治", "change_pct": 0.65}]}, {"code": "002827", "name": "高争民爆", "hot_rank": 47, "hot_rank_chg": 69, "stock_cnt": 5863, "price": "62.68", "change": "10.00", "market_id": "33", "circulate_market_value": "17299609000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "重组复牌"}, {"code": "002708", "name": "光洋股份", "hot_rank": 48, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "18.88", "change": "-8.08", "market_id": "33", "circulate_market_value": "9621821000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 49, "hot_rank_chg": -19, "stock_cnt": 5863, "price": "28.72", "change": "7.49", "market_id": "17", "circulate_market_value": "12605117100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 50, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "10.10", "change": "3.27", "market_id": "17", "circulate_market_value": "6482010500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.13}, {"name": "农业种植", "change_pct": 0.24}, {"name": "湖南国企改革", "change_pct": 0.39}, {"name": "乡村振兴", "change_pct": -0.01}, {"name": "休闲食品", "change_pct": 0.07}, {"name": "食品", "change_pct": 0.6}, {"name": "食品安全", "change_pct": -1.08}, {"name": "社区团购", "change_pct": 1.43}, {"name": "大农业", "change_pct": 0.57}, {"name": "预制菜", "change_pct": 0.93}, {"name": "人造肉", "change_pct": -0.39}, {"name": "国企改革", "change_pct": 0.4}]}, {"code": "002088", "name": "鲁阳节能", "hot_rank": 51, "hot_rank_chg": 266, "stock_cnt": 5863, "price": "8.33", "change": "10.04", "market_id": "33", "circulate_market_value": "4214685400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "陶瓷纤维", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.35}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "大气治理", "change_pct": -1.36}, {"name": "雄安新区", "change_pct": -0.27}, {"name": "耐火材料", "change_pct": 0.18}, {"name": "新能源汽车", "change_pct": -0.79}, {"name": "环保", "change_pct": -0.82}, {"name": "船舶", "change_pct": 0.67}, {"name": "建筑节能", "change_pct": -0.28}, {"name": "气凝胶", "change_pct": 0.93}, {"name": "旧改", "change_pct": -0.17}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 52, "hot_rank_chg": 29, "stock_cnt": 5863, "price": "68.53", "change": "-5.08", "market_id": "33", "circulate_market_value": "44750604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 53, "hot_rank_chg": 10, "stock_cnt": 5863, "price": "10.90", "change": "5.11", "market_id": "17", "circulate_market_value": "4716142800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -1.88}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "光伏", "change_pct": -0.24}, {"name": "无线耳机", "change_pct": -3.06}, {"name": "华为产业链", "change_pct": -1.99}, {"name": "光伏胶膜", "change_pct": -0.13}]}, {"code": "600183", "name": "生益科技", "hot_rank": 54, "hot_rank_chg": -16, "stock_cnt": 5863, "price": "73.87", "change": "-10.00", "market_id": "17", "circulate_market_value": "178155890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 55, "hot_rank_chg": -19, "stock_cnt": 5863, "price": "8.30", "change": "5.60", "market_id": "33", "circulate_market_value": "3931546400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 1.0}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "VR&AR", "change_pct": -2.46}, {"name": "游戏", "change_pct": 0.52}, {"name": "影视", "change_pct": 1.86}, {"name": "直播/短视频", "change_pct": -0.13}, {"name": "动漫", "change_pct": 0.59}, {"name": "腾讯概念股", "change_pct": -1.73}, {"name": "传媒", "change_pct": -0.24}, {"name": "元宇宙", "change_pct": -1.34}, {"name": "短剧/互动影游", "change_pct": 0.37}, {"name": "IP经济/谷子经济", "change_pct": 0.13}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 56, "hot_rank_chg": -28, "stock_cnt": 5863, "price": "250.16", "change": "-5.84", "market_id": "17", "circulate_market_value": "167786900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 57, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "56.42", "change": "6.35", "market_id": "17", "circulate_market_value": "8064054900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600189", "name": "泉阳泉", "hot_rank": 58, "hot_rank_chg": -16, "stock_cnt": 5863, "price": "9.40", "change": "-3.29", "market_id": "17", "circulate_market_value": "6722859400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.72}, {"name": "园林", "change_pct": -1.71}, {"name": "碳中和", "change_pct": 0.24}, {"name": "振兴东北", "change_pct": 0.89}, {"name": "饮料", "change_pct": 0.91}, {"name": "林业碳汇", "change_pct": -0.17}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 59, "hot_rank_chg": -25, "stock_cnt": 5863, "price": "40.45", "change": "-7.05", "market_id": "17", "circulate_market_value": "99249991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603703", "name": "盛洋科技", "hot_rank": 60, "hot_rank_chg": -6, "stock_cnt": 5863, "price": "11.19", "change": "-4.68", "market_id": "17", "circulate_market_value": "4643649900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.82}, {"name": "5G", "change_pct": -3.52}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "云计算数据中心", "change_pct": -2.79}, {"name": "LED", "change_pct": -1.44}, {"name": "卫星互联网", "change_pct": -1.81}, {"name": "铜缆高速连接器", "change_pct": -3.62}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 61, "hot_rank_chg": -24, "stock_cnt": 5863, "price": "58.55", "change": "-8.09", "market_id": "33", "circulate_market_value": "42462601000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600241", "name": "时代万恒", "hot_rank": 62, "hot_rank_chg": 68, "stock_cnt": 5863, "price": "9.12", "change": "10.01", "market_id": "17", "circulate_market_value": "2684035300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锂电池", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.35}, {"name": "中日韩自贸区", "change_pct": 1.92}, {"name": "新能源汽车", "change_pct": -0.79}, {"name": "振兴东北", "change_pct": 0.89}, {"name": "国企改革", "change_pct": 0.4}, {"name": "自贸区", "change_pct": 0.67}]}, {"code": "002652", "name": "扬子新材", "hot_rank": 63, "hot_rank_chg": 209, "stock_cnt": 5863, "price": "4.17", "change": "10.03", "market_id": "33", "circulate_market_value": "2135306900.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "有机涂层板", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.72}, {"name": "装修装饰", "change_pct": -0.44}]}, {"code": "601366", "name": "利群股份", "hot_rank": 64, "hot_rank_chg": 406, "stock_cnt": 5863, "price": "3.96", "change": "10.00", "market_id": "17", "circulate_market_value": "3800574800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "零售连锁", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.25}, {"name": "新零售", "change_pct": 0.71}, {"name": "智慧物流", "change_pct": -0.66}, {"name": "破净股", "change_pct": 0.69}, {"name": "智能制造", "change_pct": -2.15}, {"name": "社区团购", "change_pct": 1.43}, {"name": "华为产业链", "change_pct": -1.99}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 65, "hot_rank_chg": -50, "stock_cnt": 5863, "price": "123.61", "change": "-12.80", "market_id": "33", "circulate_market_value": "134535650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 66, "hot_rank_chg": 82, "stock_cnt": 5863, "price": "15.64", "change": "9.99", "market_id": "17", "circulate_market_value": "8805265300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池材料"}, {"code": "001317", "name": "三羊马", "hot_rank": 67, "hot_rank_chg": 5, "stock_cnt": 5863, "price": "54.75", "change": "4.72", "market_id": "33", "circulate_market_value": "4681262800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 68, "hot_rank_chg": 47, "stock_cnt": 5863, "price": "7.51", "change": "9.96", "market_id": "17", "circulate_market_value": "3441445500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "水泥熟料", "xgb_concepts": [{"name": "水泥", "change_pct": 1.57}, {"name": "福建自贸/海西概念", "change_pct": 0.81}, {"name": "自贸区", "change_pct": 0.67}]}, {"code": "000410", "name": "沈阳机床", "hot_rank": 69, "hot_rank_chg": -16, "stock_cnt": 5863, "price": "5.83", "change": "-1.35", "market_id": "33", "circulate_market_value": "11491036900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.31}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "工业自动化", "change_pct": -2.58}, {"name": "智能制造", "change_pct": -2.15}, {"name": "工业互联网", "change_pct": -1.45}, {"name": "振兴东北", "change_pct": 0.89}, {"name": "工业母机", "change_pct": -3.02}, {"name": "国企改革", "change_pct": 0.4}]}, {"code": "002949", "name": "华阳国际", "hot_rank": 70, "hot_rank_chg": 73, "stock_cnt": 5863, "price": "15.34", "change": "8.95", "market_id": "33", "circulate_market_value": "2330539300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 71, "hot_rank_chg": -32, "stock_cnt": 5863, "price": "13.88", "change": "-6.85", "market_id": "33", "circulate_market_value": "46221343000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 72, "hot_rank_chg": -21, "stock_cnt": 5863, "price": "4.40", "change": "1.38", "market_id": "33", "circulate_market_value": "155615390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.47}, {"name": "折叠屏", "change_pct": -3.31}, {"name": "手机产业链", "change_pct": -2.95}, {"name": "超高清视频", "change_pct": -1.56}, {"name": "苹果产业链", "change_pct": -3.67}, {"name": "电竞", "change_pct": 0.19}, {"name": "半导体", "change_pct": -4.42}, {"name": "人工智能", "change_pct": -1.86}, {"name": "互联网医疗", "change_pct": -0.68}, {"name": "VR&AR", "change_pct": -2.46}, {"name": "OLED", "change_pct": -2.89}, {"name": "京津冀", "change_pct": -0.22}, {"name": "物联网", "change_pct": -1.81}, {"name": "指纹识别", "change_pct": -2.67}, {"name": "汽车零部件", "change_pct": -1.74}, {"name": "白马股", "change_pct": 1.32}, {"name": "智能制造", "change_pct": -2.15}, {"name": "小米概念股", "change_pct": -2.47}, {"name": "国产芯片", "change_pct": -3.77}, {"name": "液晶面板/LCD", "change_pct": -2.36}, {"name": "全息概念", "change_pct": -2.27}, {"name": "理想汽车概念股", "change_pct": -2.13}, {"name": "MicroLED", "change_pct": -2.85}, {"name": "钙钛矿电池", "change_pct": -0.36}, {"name": "智能手表", "change_pct": -2.51}, {"name": "MiniLED", "change_pct": -2.17}, {"name": "传感器", "change_pct": -2.8}, {"name": "大硅片", "change_pct": -3.59}, {"name": "AI PC", "change_pct": -3.03}, {"name": "华为产业链", "change_pct": -1.99}, {"name": "回购", "change_pct": -2.34}, {"name": "光电共封装CPO", "change_pct": -7.16}, {"name": "智能眼镜/MR头显", "change_pct": -3.08}, {"name": "玻璃基板封装", "change_pct": -3.71}]}, {"code": "603131", "name": "上海沪工", "hot_rank": 73, "hot_rank_chg": -6, "stock_cnt": 5863, "price": "15.57", "change": "-10.00", "market_id": "17", "circulate_market_value": "5245645400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 74, "hot_rank_chg": -41, "stock_cnt": 5863, "price": "767.93", "change": "-10.81", "market_id": "17", "circulate_market_value": "482915860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600630", "name": "龙头股份", "hot_rank": 75, "hot_rank_chg": 226, "stock_cnt": 5863, "price": "7.05", "change": "9.98", "market_id": "17", "circulate_market_value": "2995274300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "纺织服装", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.25}, {"name": "上海国企改革", "change_pct": 0.62}, {"name": "一带一路", "change_pct": -0.2}, {"name": "优化生育（三孩）", "change_pct": 0.16}, {"name": "纺织服装", "change_pct": 0.26}, {"name": "上海自由贸易港", "change_pct": 0.32}, {"name": "进口博览会", "change_pct": 1.52}, {"name": "自由贸易港", "change_pct": 0.44}, {"name": "物业管理", "change_pct": -0.18}, {"name": "国企改革", "change_pct": 0.4}, {"name": "新冠病毒防治", "change_pct": -0.5}, {"name": "自贸区", "change_pct": 0.67}]}, {"code": "600506", "name": "统一股份", "hot_rank": 76, "hot_rank_chg": -24, "stock_cnt": 5863, "price": "19.52", "change": "2.74", "market_id": "17", "circulate_market_value": "4872672500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 77, "hot_rank_chg": -57, "stock_cnt": 5863, "price": "27.80", "change": "3.89", "market_id": "33", "circulate_market_value": "28403259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000417", "name": "合百集团", "hot_rank": 78, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "5.96", "change": "-4.94", "market_id": "33", "circulate_market_value": "4643003600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.25}, {"name": "新零售", "change_pct": 0.71}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "人工智能", "change_pct": -1.86}, {"name": "安徽国企改革", "change_pct": -0.18}, {"name": "直播/短视频", "change_pct": -0.13}, {"name": "冷链", "change_pct": -0.54}, {"name": "破净股", "change_pct": 0.69}, {"name": "国企改革", "change_pct": 0.4}, {"name": "地摊经济", "change_pct": -0.36}, {"name": "首发经济", "change_pct": 0.44}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 79, "hot_rank_chg": -20, "stock_cnt": 5863, "price": "14.18", "change": "2.53", "market_id": "33", "circulate_market_value": "9360596500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605388", "name": "均瑶健康", "hot_rank": 80, "hot_rank_chg": 230, "stock_cnt": 5863, "price": "6.58", "change": "10.03", "market_id": "17", "circulate_market_value": "3951184700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "益生菌食品", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.13}, {"name": "优化生育（三孩）", "change_pct": 0.16}, {"name": "食品", "change_pct": 0.6}, {"name": "大农业", "change_pct": 0.57}, {"name": "植物奶", "change_pct": 0.93}, {"name": "幽门螺杆菌概念", "change_pct": -0.74}, {"name": "饮料", "change_pct": 0.91}]}, {"code": "000333", "name": "美的集团", "hot_rank": 81, "hot_rank_chg": 137, "stock_cnt": 5863, "price": "88.88", "change": "1.39", "market_id": "33", "circulate_market_value": "612073360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 82, "hot_rank_chg": -27, "stock_cnt": 5863, "price": "41.95", "change": "-5.50", "market_id": "17", "circulate_market_value": "832459670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 83, "hot_rank_chg": -12, "stock_cnt": 5863, "price": "6.61", "change": "1.23", "market_id": "33", "circulate_market_value": "12658761100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.81}, {"name": "林业", "change_pct": -1.07}, {"name": "碳中和", "change_pct": 0.24}, {"name": "自贸区", "change_pct": 0.67}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 84, "hot_rank_chg": -9, "stock_cnt": 5863, "price": "27.45", "change": "2.27", "market_id": "17", "circulate_market_value": "565519220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002275", "name": "桂林三金", "hot_rank": 85, "hot_rank_chg": 10, "stock_cnt": 5863, "price": "15.80", "change": "-4.13", "market_id": "33", "circulate_market_value": "8923070600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 86, "hot_rank_chg": -60, "stock_cnt": 5863, "price": "8.59", "change": "-1.15", "market_id": "17", "circulate_market_value": "2315968900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.21}, {"name": "高股息", "change_pct": 0.47}, {"name": "银行", "change_pct": -0.44}, {"name": "白马股", "change_pct": 1.32}, {"name": "破净股", "change_pct": 0.69}, {"name": "大金融", "change_pct": 0.17}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 87, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "92.20", "change": "-10.00", "market_id": "33", "circulate_market_value": "72471943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002578", "name": "闽发铝业", "hot_rank": 88, "hot_rank_chg": 313, "stock_cnt": 5863, "price": "3.76", "change": "9.94", "market_id": "33", "circulate_market_value": "3237971200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光伏边框", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -0.6}, {"name": "一带一路", "change_pct": -0.2}, {"name": "强势人气股", "change_pct": 1.72}, {"name": "福建自贸/海西概念", "change_pct": 0.81}, {"name": "光伏", "change_pct": -0.24}, {"name": "有色金属", "change_pct": -0.44}, {"name": "新能源汽车", "change_pct": -0.79}, {"name": "新能源车零部件", "change_pct": -1.65}, {"name": "自贸区", "change_pct": 0.67}, {"name": "液冷服务器", "change_pct": -2.9}]}, {"code": "301513", "name": "尚水智能", "hot_rank": 90, "hot_rank_chg": 73, "stock_cnt": 5863, "price": "54.78", "change": "20.00", "market_id": "33", "circulate_market_value": "1164075000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池设备"}, {"code": "600900", "name": "长江电力", "hot_rank": 91, "hot_rank_chg": 45, "stock_cnt": 5863, "price": "29.86", "change": "1.22", "market_id": "17", "circulate_market_value": "730620980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601318", "name": "中国平安", "hot_rank": 92, "hot_rank_chg": -10, "stock_cnt": 5863, "price": "54.59", "change": "2.77", "market_id": "17", "circulate_market_value": "581932950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688498", "name": "源杰科技", "hot_rank": 93, "hot_rank_chg": -25, "stock_cnt": 5863, "price": "604.90", "change": "-10.78", "market_id": "17", "circulate_market_value": "74337458000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 94, "hot_rank_chg": 11, "stock_cnt": 5863, "price": "5.48", "change": "-4.86", "market_id": "17", "circulate_market_value": "13801434000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.25}, {"name": "工业大麻", "change_pct": -0.17}, {"name": "中药", "change_pct": 0.11}, {"name": "保健品", "change_pct": 0.29}, {"name": "民营医院", "change_pct": 0.33}, {"name": "医药", "change_pct": -1.01}, {"name": "化学原料药", "change_pct": -0.83}, {"name": "流感", "change_pct": -0.54}, {"name": "振兴东北", "change_pct": 0.89}, {"name": "食品", "change_pct": 0.6}, {"name": "肝炎概念", "change_pct": -0.54}]}, {"code": "600584", "name": "长电科技", "hot_rank": 95, "hot_rank_chg": -25, "stock_cnt": 5863, "price": "47.04", "change": "-6.48", "market_id": "17", "circulate_market_value": "84174061000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 96, "hot_rank_chg": 44, "stock_cnt": 5863, "price": "43.01", "change": "3.81", "market_id": "33", "circulate_market_value": "141096220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300085", "name": "银之杰", "hot_rank": 97, "hot_rank_chg": -73, "stock_cnt": 5863, "price": "28.86", "change": "8.17", "market_id": "33", "circulate_market_value": "17220968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002805", "name": "丰元股份", "hot_rank": 98, "hot_rank_chg": 227, "stock_cnt": 5863, "price": "14.36", "change": "10.04", "market_id": "33", "circulate_market_value": "4003798700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池"}, {"code": "601099", "name": "太平洋", "hot_rank": 99, "hot_rank_chg": -33, "stock_cnt": 5863, "price": "3.58", "change": "1.13", "market_id": "17", "circulate_market_value": "24402413000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "券商", "change_pct": 0.77}, {"name": "大金融", "change_pct": 0.17}]}];
const LIMIT_UP_POOL = [{"code": "000838", "name": "*ST发展", "price": 1.55, "change_pct": 9.93, "reason": "公司目前仍处于预重整阶段", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.32, "first_limit_up": 1793671098, "break_limit_up_times": 0}, {"code": "000599", "name": "青岛双星", "price": 4.5, "change_pct": 10.02, "reason": "全球知名的轮胎制造企业之一；公司的主营业务为轮胎产品的研发、生产及销售，轮胎产品主要是载重全钢子午胎系列和乘用半钢子午胎系列；拥有轮胎设计产能2050万条/年", "plates": ["轮胎"], "limit_up_days": 2, "turnover_ratio": 4.87, "first_limit_up": 1793670213, "break_limit_up_times": 0}, {"code": "600630", "name": "龙头股份", "price": 7.05, "change_pct": 9.98, "reason": "上海纺织集团旗下，公司主营进出口业务，拥有优质品牌三枪，境外收入占比近半", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.3, "first_limit_up": 1793675864, "break_limit_up_times": 0}, {"code": "002086", "name": "东方海洋", "price": 3.42, "change_pct": 9.97, "reason": "公司主要从事海水苗种繁育、养殖，水产品加工等，水产品加工主要包括调理食品系列、冷冻鱼片系列、海参系列加工产品等", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 14.58, "first_limit_up": 1793669100, "break_limit_up_times": 3}, {"code": "600537", "name": "*ST亿晶", "price": 1.54, "change_pct": 10.0, "reason": "公司预重整投资安排生变，中润光能拟入主", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.15, "first_limit_up": 1793669100, "break_limit_up_times": 0}, {"code": "603258", "name": "电魂网络", "price": 16.69, "change_pct": 10.02, "reason": "1、公司依托国风《梦三国》游戏内容打造的人工智能漫剧《梦启三国·破界之战》已在红果平台开放预约，即将全平台上线；\n2、精品化网络游戏研运一体商；公司产品体系已涵盖AI游戏品类，旗下《吾家有女Ai》以AI互动玩法为核心，主打AI智能体角色养成交互体验，将AI技术深度融入精品化游戏研发运营", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 7.81, "first_limit_up": 1793669100, "break_limit_up_times": 1}, {"code": "601566", "name": "九牧王", "price": 11.55, "change_pct": 10.0, "reason": "公司位于福建厦门市，是国内男裤龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.14, "first_limit_up": 1793674860, "break_limit_up_times": 0}, {"code": "002992", "name": "宝明科技", "price": 30.36, "change_pct": 10.0, "reason": "1、公司成功开发出新一代锂电复合铜箔产品，具有低面阻、免辊焊的特点，在硅碳负极及固态电池应用上具有更好的性能优势，并已获得市场高度认可；\n2、公司HVLP4/5铜箔主要技术指标已完成厂内验证，正布局向客户送样", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 3.73, "first_limit_up": 1793687121, "break_limit_up_times": 0}, {"code": "600715", "name": "文投控股", "price": 2.46, "change_pct": 9.82, "reason": "公司影院业务推行“一店一策”创新和“影院+”业态，探索VR观影提升非票房收入，五棵松旗舰店为全国单店票房冠军", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 23.28, "first_limit_up": 1793671988, "break_limit_up_times": 15}, {"code": "601188", "name": "龙江交通", "price": 3.7, "change_pct": 10.12, "reason": "公司所辖哈大分公司圆满完成冰雪旅游季等关键时期保畅任务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 18.86, "first_limit_up": 1793674848, "break_limit_up_times": 4}, {"code": "001318", "name": "阳光乳业", "price": 15.84, "change_pct": 10.0, "reason": "公司主营业务为液态乳，包括儿童调制乳、A2牛奶", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 18.28, "first_limit_up": 1793676303, "break_limit_up_times": 1}, {"code": "601599", "name": "浙文影业", "price": 3.82, "change_pct": 10.09, "reason": "公司出品的文旅微短剧《九龙湖之有间客栈》已于2025年度播出，竖屏微短剧《江南机动队》杀青待播，并将继续布局微短剧业务矩阵", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 2.15, "first_limit_up": 1793669100, "break_limit_up_times": 0}, {"code": "600892", "name": "大晟文化", "price": 4.81, "change_pct": 10.07, "reason": "1、公司游戏影视双驱动，主营业务包括短剧制作、发行业务；\n2、公司游戏业务主要由全资子公司淘乐网络开发运营，专注于回合制端游与手游，代表作为《桃花源记》", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 1.26, "first_limit_up": 1793669100, "break_limit_up_times": 0}, {"code": "600734", "name": "*ST实达", "price": 1.91, "change_pct": 9.77, "reason": "公司位于福建福州，拟收购凯特科技不少于51%股权", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 3.55, "first_limit_up": 1793669506, "break_limit_up_times": 1}, {"code": "000591", "name": "太阳能", "price": 4.59, "change_pct": 10.07, "reason": "国内第一家以光伏电站投资运营为主业的上市公司，最大的太阳能光伏发电的投资运营商之一", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1793670465, "break_limit_up_times": 1}, {"code": "600558", "name": "大西洋", "price": 6.24, "change_pct": 10.05, "reason": "1、机器人配套设备的制造可以使用公司的焊接材料；\n2、公司焊接材料成功运用于秦山核电、福清核电、防城港核电等核电项目的装备制造中", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.16, "first_limit_up": 1793669848, "break_limit_up_times": 2}, {"code": "002696", "name": "百洋股份", "price": 12.36, "change_pct": 9.96, "reason": "公司为全球加工规模最大、国内领先的罗非鱼食品综合提供商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 24.26, "first_limit_up": 1793672367, "break_limit_up_times": 1}, {"code": "002692", "name": "远程股份", "price": 4.18, "change_pct": 10.0, "reason": "1、公司拟组成联合体收购中复碳芯股权；\n2、公司的电力电缆、控制电缆、防火电缆等产品可应用于数据中心领域；\n3、公司拟与新鼎纪元基金、苏新投资共同投资江苏新纪元半导体有限公司，其中新鼎纪元基金拟投资5.1亿元，苏新投资拟投资1亿元，远程股份拟投资5000万元", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 1.24, "first_limit_up": 1793669400, "break_limit_up_times": 0}, {"code": "002580", "name": "圣阳股份", "price": 18.67, "change_pct": 10.02, "reason": "1、公司主要产品包括锂离子电池及电源系统、新能源系统集成产品及服务等，主要用于网络能源、智慧储能和绿色动力应用领域；\n2、公司提供储能电源、储能系统和一体化解决方案，推出了涵盖户用储能、工商业储能、大型储能系统等全系列储能产品", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 8.77, "first_limit_up": 1793669745, "break_limit_up_times": 0}, {"code": "605378", "name": "野马电池", "price": 14.36, "change_pct": 10.04, "reason": "国内领先的锌锰电池制造商和出口商；公司扣式一次锂电池产线已调试完成并投入生产，正布局搭建新产线，实现产品更新迭代", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 2.6, "first_limit_up": 1793670565, "break_limit_up_times": 1}, {"code": "002105", "name": "信隆健康", "price": 5.56, "change_pct": 10.1, "reason": "1、公司积极进入智能电动医疗康养器材产业，布局电动轮椅、外骨骼机器人等产品，部分产品正开发、测试及洽谈中；\n2、公司设有信隆台湾研发中心，实控人廖学金籍贯为中国台湾", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.27, "first_limit_up": 1793669466, "break_limit_up_times": 0}, {"code": "002300", "name": "太阳电缆", "price": 8.72, "change_pct": 9.96, "reason": "福建升级扩容“福淡”“厦金”海底光缆，推进“福州—深圳短路径光缆”项目建设；公司产品有海底电力电缆、海底光电复合电缆、柔性直流海底电缆", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 12.49, "first_limit_up": 1793670666, "break_limit_up_times": 1}, {"code": "002827", "name": "高争民爆", "price": 62.68, "change_pct": 10.0, "reason": "西藏民爆行业龙头；公司拟购买紫源铜业51%股权和晟源矿业100%股权", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 0.17, "first_limit_up": 1793669100, "break_limit_up_times": 0}, {"code": "600358", "name": "国旅联合", "price": 5.57, "change_pct": 10.08, "reason": "公司已完成润田实业100%股份过户及新增股份登记，形成包装饮用水为龙头、互联网数字营销和跨境电商为两翼的业务格局", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.89, "first_limit_up": 1793669531, "break_limit_up_times": 1}, {"code": "603906", "name": "龙蟠科技", "price": 15.64, "change_pct": 9.99, "reason": "公司主要从事磷酸铁锂正极材料研产销，与全球主流锂电池制造商如宁德时代、LGES、瑞浦兰钧、亿纬锂能、欣旺达等建立了长期稳定的合作关系", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 4.23, "first_limit_up": 1793670433, "break_limit_up_times": 0}, {"code": "603381", "name": "永臻股份", "price": 15.58, "change_pct": 10.03, "reason": "光伏铝边框绝对龙头，全球市占率超 18%；公司主营光伏边框、BIPV 产品、光伏支架等绿色能源结构材料研发生产，配套隆基、天合光能等国内外头部组件厂商", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 4.35, "first_limit_up": 1793669673, "break_limit_up_times": 1}, {"code": "603289", "name": "泰瑞机器", "price": 10.37, "change_pct": 9.97, "reason": "公司拟不超2.45亿元控股亿芯微，跨界存储模组", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 1.54, "first_limit_up": 1793669100, "break_limit_up_times": 0}, {"code": "002088", "name": "鲁阳节能", "price": 8.33, "change_pct": 10.04, "reason": "中国陶瓷纤维龙头，间接控股股东筹划破产重组，公司实控人拟发生变更", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.81, "first_limit_up": 1793669943, "break_limit_up_times": 0}, {"code": "300010", "name": "ST豆神", "price": 3.79, "change_pct": 19.94, "reason": "公司此前与北京智谱华章科技有限公司和海南何尊网络科技有限公司签署《战略合作框架协议》，成立合资公司专注于AI 教育产品的技术研发及销售", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 10.75, "first_limit_up": 1793688738, "break_limit_up_times": 0}, {"code": "000679", "name": "大连友谊", "price": 6.62, "change_pct": 9.97, "reason": "公司零售业主要集中在大连地区，以百货店（友谊商城）为主，持续通过第三方直播平台等新媒体营销手段来拉动销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.68, "first_limit_up": 1793671407, "break_limit_up_times": 0}, {"code": "301513", "name": "尚水智能", "price": 54.78, "change_pct": 20.0, "reason": "公司主要产品分为新能源电池极片制造智能装备和新材料制备智能装备两大板块\n", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 27.95, "first_limit_up": 1793671539, "break_limit_up_times": 0}, {"code": "601123", "name": "马矿股份", "price": 15.07, "change_pct": 10.0, "reason": "公司主营铁矿石的开采、选矿及综合利用，拥有全国知名马坑铁矿采矿权，铁矿石保有资源储量约3.25亿吨，主要产品为TFe65%造球铁精粉，面向福建省及周边省份大型钢铁企业销售，是福建省规模最大的铁矿采选企业，属于铁矿石产业链上游资源开采与加工环节", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.9, "first_limit_up": 1793688463, "break_limit_up_times": 0}, {"code": "002058", "name": "紫竹高科", "price": 21.13, "change_pct": 9.99, "reason": "1、公司核心业务聚焦于铝塑膜业务及汽车检具业务，铝塑膜是软包锂电池电芯封装的关键材料，下游主要应用于3C消费电子、动力、储能三类软包电池；\n2、公司具备《民用核安全电气设备设计许可证》和《民用核安全电气设备制造许可证》，为福清/方家山核电站供货核级压力变送器；公司有能力生产核级的仪器仪表产品", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 8.7, "first_limit_up": 1793670528, "break_limit_up_times": 0}, {"code": "002652", "name": "扬子新材", "price": 4.17, "change_pct": 10.03, "reason": "公司有多款产品可满足于半导体洁净室的不同需求，前三季度净利润同比增长61.68%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 18.25, "first_limit_up": 1793687520, "break_limit_up_times": 0}, {"code": "601366", "name": "利群股份", "price": 3.96, "change_pct": 10.0, "reason": "公司为国内知名商业零售连锁企业，主要从事以百货、超市及电器全品类经营为核心主业的零售连锁业务，和以城市物流中心为支撑的品牌代理及商业物流配送业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.85, "first_limit_up": 1793685694, "break_limit_up_times": 0}, {"code": "000151", "name": "中成股份", "price": 9.56, "change_pct": 10.01, "reason": "公司收购中技江苏，标的主要从事工商业用户侧储能项目的投资、开发和运营", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.74, "first_limit_up": 1793675649, "break_limit_up_times": 4}, {"code": "600261", "name": "阳光照明", "price": 4.95, "change_pct": 10.0, "reason": "中国最大的节能灯生产和出口基地之一；公司使用自有资金 3,000万元参与蓝星光域（上海）航天科技有限公司融资，完成后阳光照明持有其1.0989%股权。蓝星光域成立于2021年 5月，专注于全场景激光通信解决方案，核心产品包括星载同轨/异轨激光通信终端、机载平流层激光通信终端等，主要应用于卫星间、星地间高速率通信，业务覆盖空天地海全场景空域", "plates": ["其他"], "limit_up_days": 4, "turnover_ratio": 25.52, "first_limit_up": 1793669100, "break_limit_up_times": 6}, {"code": "600778", "name": "友好集团", "price": 5.49, "change_pct": 10.02, "reason": "新疆商业流通龙头；公司经营业态包括百货商场、购物中心、大型综合超市、标准超市、超市便利店等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.65, "first_limit_up": 1793682017, "break_limit_up_times": 0}, {"code": "600802", "name": "福建水泥", "price": 7.51, "change_pct": 9.96, "reason": "公司是福建地区产能规模最大的水泥制造企业", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 14.85, "first_limit_up": 1793671210, "break_limit_up_times": 1}, {"code": "002292", "name": "奥飞娱乐", "price": 9.58, "change_pct": 9.99, "reason": "“中国动漫第一股”、动漫文娱领军企业；公司主营以IP为核心撬动动画、电影、婴童用品、玩具、潮玩手办、衍生品授权、实景娱乐等业务生态，玩具与婴童用品业务保持稳健扩张，“喜羊羊与灰太狼”IP动画大电影项目正有序推进，拟2027年上映", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 5.55, "first_limit_up": 1793669409, "break_limit_up_times": 1}, {"code": "600293", "name": "三峡新材", "price": 4, "change_pct": 9.89, "reason": "1、公司拟收购锂电池电解液公司珠海赛纬100%股权；\n2、公司正加速向汽车玻璃、电子玻璃等高附加值领域拓展", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 16.01, "first_limit_up": 1793670864, "break_limit_up_times": 1}, {"code": "600241", "name": "时代万恒", "price": 9.12, "change_pct": 10.01, "reason": "控股子公司九夷锂能主营业务为锂电池的研产销，拥有国内领先的圆柱形锂电池全自动化产线，目标市场定位于高端电动工具领域，开拓了博世、飞利浦、斯蒂尔、宝时得等优质客户", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 15.92, "first_limit_up": 1793672487, "break_limit_up_times": 0}, {"code": "002805", "name": "丰元股份", "price": 14.36, "change_pct": 10.04, "reason": "公司与中科院青能所共同成立了中科丰元研究院，在固态电池正极材料方面有相应研发布局并持续投入研发", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 7.73, "first_limit_up": 1793670954, "break_limit_up_times": 1}, {"code": "002029", "name": "七 匹 狼", "price": 10.33, "change_pct": 10.01, "reason": "公司位于福建省晋江市，中国男装品牌的领先企业之一，控股股东持有沐曦集成股份比例0.39%", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 5.28, "first_limit_up": 1793669544, "break_limit_up_times": 0}, {"code": "000995", "name": "皇台酒业", "price": 17.16, "change_pct": 10.0, "reason": "甘肃小型白酒企业；公司白酒产业拥有“皇台”和“凉州皇台”两大品牌，目前拥有“窖底原浆”、“皇台经典”等系列产品", "plates": ["白酒"], "limit_up_days": 3, "turnover_ratio": 1.93, "first_limit_up": 1793669100, "break_limit_up_times": 0}, {"code": "000608", "name": "阳光股份", "price": 6.2, "change_pct": 9.93, "reason": "公司撤销退市风险警示，正在积极推进上海项目相关工作", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.52, "first_limit_up": 1793682534, "break_limit_up_times": 1}, {"code": "600327", "name": "大东方", "price": 4.35, "change_pct": 10.13, "reason": "1、公司旗下老字号“三凤桥”品牌，在各大主流平台设有“三凤桥旗舰店”，提真空及保鲜包装的各类卤味和熟食制品或礼盒套装，本地实体店在特定节日出售“年夜饭”预制礼盒；\n2、下属医疗业务板块中的儿科业务，主体主要包括以儿童身高管理为主的“健高儿科”、以儿心健康为主的“雅恩健康” 、以普儿科和儿保为主的“知贝医疗”组成，三个方向初步覆盖了儿童生长发育的全阶段", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.5, "first_limit_up": 1793671048, "break_limit_up_times": 0}, {"code": "605577", "name": "龙版传媒", "price": 14.3, "change_pct": 10.0, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 0.85, "first_limit_up": 1793669100, "break_limit_up_times": 0}, {"code": "002578", "name": "闽发铝业", "price": 3.76, "change_pct": 9.94, "reason": "1、公司位于福建省南安市，为海西板块的铝型材龙头企业，表示将重点拓展机器人等工业铝型材及高端装备铝型材赛道；\n2、公司液冷服务器用铝型材已开始小批量供货，正积极推进相关领域的市场拓展与技术优化，稳步提升产品交付能力；\n3、光伏支架和边框等配套产品是公司的主要工业材产品之一", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 9.31, "first_limit_up": 1793682003, "break_limit_up_times": 1}, {"code": "002522", "name": "浙江众成", "price": 5.06, "change_pct": 10.0, "reason": "1、控股子公司众立合成材料的SEP光纤油膏、SEPS成人用品弹性体已批量供货，技术国内领先；\n2、控股子公司众立合成材料所开发的氢化苯乙烯/异戊二烯嵌段共聚物（SEPS）系列产品可用于实体娃娃等成人用品领域，已经具备成熟的规模化生产能力", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.0, "first_limit_up": 1793687799, "break_limit_up_times": 2}, {"code": "605388", "name": "均瑶健康", "price": 6.58, "change_pct": 10.03, "reason": "国内最早生产与销售常温乳酸菌饮品的品牌企业之一；全资子公司奇梦星主要负责公司IP产品及母婴渠道产品的经营，目前已推出了“小黄人”系列乳酸菌饮品、“功夫熊猫”系列常温奶酪棒等产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 0.77, "first_limit_up": 1793669100, "break_limit_up_times": 0}, {"code": "603402", "name": "陕西旅游", "price": 56.35, "change_pct": 9.99, "reason": "公司业务集旅游演艺、旅游索道、旅游餐饮、旅游项目投资及管理为一体，依托华清宫、华山等优质旅游资源，充分发挥旅游资源整合优势、专业化运营管理优势、旅游产品创新优势，为游客提供高品质的旅游产品及服务体验", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 11.35, "first_limit_up": 1793674152, "break_limit_up_times": 0}];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "600745": "ST/风险警示股", "300010": "ST/风险警示股"};