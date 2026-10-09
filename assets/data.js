const UPDATE_TIME = "2026-10-09 23:53";
const THS_HOT = [
  {
    "name": "AI应用",
    "rise": 2.85,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续62天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "AI视频",
    "rise": 5.48,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886068"
  },
  {
    "name": "固态电池",
    "rise": 0.4,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "储能电池ETF",
    "code": "886032"
  },
  {
    "name": "创新药",
    "rise": 1.4,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续134天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "短剧游戏",
    "rise": 5.42,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "影视ETF",
    "code": "886060"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.87,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续304天上榜",
    "rankChg": 1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "人工智能",
    "rise": 1.45,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": -1,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "PCB概念",
    "rise": -2.48,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续127天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "粮食概念",
    "rise": 3.48,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "网络安全",
    "rise": 2.67,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885459"
  },
  {
    "name": "商业航天",
    "rise": -0.44,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续233天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "钠离子电池",
    "rise": 1.34,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885928"
  },
  {
    "name": "转基因",
    "rise": 5.45,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "文化传媒概念",
    "rise": 3.98,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885418"
  },
  {
    "name": "CRO概念",
    "rise": 0.87,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "生物科技ETF",
    "code": "885927"
  },
  {
    "name": "黄金概念",
    "rise": 2.25,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "锂电池概念",
    "rise": 0.34,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "存储芯片",
    "rise": -1.55,
    "rate": 0,
    "tag": "",
    "hotTag": "连续257天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "886042"
  },
  {
    "name": "算力租赁",
    "rise": 1.09,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续168天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "超级品牌",
    "rise": 0.85,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885761"
  }
];
const THS_EVENTS = [
  {
    "title": "文化出口新赛道！前7个月文娱服务出口大增57.8%，AI短剧板块拉升",
    "desc": "",
    "heat": 619115,
    "direction": "AI视频",
    "themes": [
      "AI漫剧",
      "AI影视制作",
      "视频生成模型",
      "视频生成工具",
      "视频语料",
      "红果短剧",
      "AI语料",
      "AI视频",
      "短剧游戏"
    ],
    "stocks": [
      {
        "name": "流金科技",
        "code": "920021",
        "chg": 20.136054
      }
    ]
  },
  {
    "title": "天然橡胶价格创近九年新高，“最强厄尔尼诺”点燃行情",
    "desc": "",
    "heat": 403286,
    "direction": "橡胶",
    "themes": [
      "橡胶",
      "硅橡胶",
      "橡胶制品"
    ],
    "stocks": [
      {
        "name": "东岳硅材",
        "code": "300821",
        "chg": 20.013996
      }
    ]
  },
  {
    "title": "联合国警告说厄尔尼诺现象将于12月达到顶峰",
    "desc": "",
    "heat": 389838,
    "direction": "粮食",
    "themes": [
      "粮食概念",
      "玉米",
      "大豆",
      "转基因",
      "农业种植"
    ],
    "stocks": [
      {
        "name": "秋乐种业",
        "code": "920087",
        "chg": 13.633311
      }
    ]
  },
  {
    "title": "以人的需求为原点 激活消费大市场",
    "desc": "",
    "heat": 352204,
    "direction": "大消费",
    "themes": [
      "零售",
      "消费",
      "乳品深加工",
      "乳品功能配料",
      "奶源及牧业",
      "含乳饮料",
      "知名啤酒品牌",
      "啤酒原材料",
      "精酿鲜啤",
      "一线酒企",
      "二线酒企",
      "三线酒企",
      "乳业",
      "啤酒概念",
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "芒果超媒",
        "code": "300413",
        "chg": 19.979134
      }
    ]
  },
  {
    "title": "有机硅行业供需格局持续改善",
    "desc": "",
    "heat": 252509,
    "direction": "有机硅",
    "themes": [
      "有机硅概念"
    ],
    "stocks": [
      {
        "name": "东岳硅材",
        "code": "300821",
        "chg": 20.013996
      }
    ]
  },
  {
    "title": "俄罗斯“不明肺炎”疑云发酵 流感抗疫概念集体走强",
    "desc": "",
    "heat": 242101,
    "direction": "鼠疫",
    "themes": [
      "鼠疫",
      "禽流感",
      "动物疫苗",
      "生物疫苗",
      "流感"
    ],
    "stocks": [
      {
        "name": "向日葵",
        "code": "300111",
        "chg": 14.814815
      }
    ]
  },
  {
    "title": "从讲故事到拼交付，钠离子电池产业迎来锂钠互补新格局",
    "desc": "",
    "heat": 168163,
    "direction": "钠离子电池",
    "themes": [
      "钠电池",
      "钠电电解液",
      "钠电正极",
      "钠电负极",
      "钠离子电池"
    ],
    "stocks": [
      {
        "name": "领湃科技",
        "code": "300530",
        "chg": 20.016611
      }
    ]
  },
  {
    "title": "国家能源局组织召开全国可再生能源电力开发建设月度（9月）调度视频会",
    "desc": "",
    "heat": 107785,
    "direction": "绿色电力",
    "themes": [
      "绿色电力",
      "电力",
      "碳中和"
    ],
    "stocks": [
      {
        "name": "科恒股份",
        "code": "300340",
        "chg": 15.891892
      }
    ]
  },
  {
    "title": "航运巨头：自2026年10月12日起，将紧急燃油附加费（EFS）提高至20%",
    "desc": "",
    "heat": 81714,
    "direction": "航运",
    "themes": [
      "航运概念",
      "港口航运",
      "机场航运"
    ],
    "stocks": [
      {
        "name": "皖通科技",
        "code": "002331",
        "chg": 4.270987
      }
    ]
  },
  {
    "title": "懂车帝回应制动踏板支架断裂质疑",
    "desc": "",
    "heat": 53556,
    "direction": "汽车制动系统",
    "themes": [
      "汽车制动系统",
      "自动紧急制动系统（AEBS）"
    ],
    "stocks": [
      {
        "name": "众捷股份",
        "code": "301560",
        "chg": 4.337601
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "影视",
    "change": "+7.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+7.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+6.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+5.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "传媒",
    "change": "+5.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+5.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识产权",
    "change": "+5.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+5.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+5.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+5.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+5.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "NFT",
    "change": "+4.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+4.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI视频",
    "change": "+4.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+4.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "征信概念",
    "change": "+4.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "+4.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "盲盒",
    "change": "+4.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "财税改革",
    "change": "+4.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+3.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 2,
    "hot_rank_chg": 2,
    "stock_cnt": 5819,
    "price": "12.53",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "13092444800.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "9",
    "change_reason": "拟收购财联社",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.18
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.45
      },
      {
        "name": "强势人气股",
        "change_pct": 0.87
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 5.65
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "600241",
    "name": "时代万恒",
    "hot_rank": 10,
    "hot_rank_chg": 5,
    "stock_cnt": 5819,
    "price": "11.76",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "3460992900.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "新能源电池",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 0.36
      },
      {
        "name": "强势人气股",
        "change_pct": 0.87
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 1.86
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.03
      },
      {
        "name": "振兴东北",
        "change_pct": 1.71
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      },
      {
        "name": "自贸区",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "600812",
    "name": "华北制药",
    "hot_rank": 12,
    "hot_rank_chg": 18,
    "stock_cnt": 5819,
    "price": "6.03",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "10345854100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "鼠疫",
    "xgb_concepts": [
      {
        "name": "维生素",
        "change_pct": 1.89
      },
      {
        "name": "雄安新区",
        "change_pct": 0.67
      },
      {
        "name": "医药",
        "change_pct": 1.41
      },
      {
        "name": "疫苗",
        "change_pct": 2.02
      },
      {
        "name": "化学原料药",
        "change_pct": 1.69
      },
      {
        "name": "流感",
        "change_pct": 2.1
      },
      {
        "name": "肝素",
        "change_pct": 2.62
      },
      {
        "name": "眼科",
        "change_pct": 1.69
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 13,
    "hot_rank_chg": 16,
    "stock_cnt": 5819,
    "price": "7.16",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "30640703000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "天然橡胶",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.74
      },
      {
        "name": "橡胶",
        "change_pct": 2.27
      },
      {
        "name": "土地流转",
        "change_pct": 2.93
      },
      {
        "name": "农垦",
        "change_pct": 3.77
      },
      {
        "name": "海南概念",
        "change_pct": 1.88
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.39
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 2.17
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.48
      },
      {
        "name": "大消费",
        "change_pct": 1.61
      },
      {
        "name": "免税店概念",
        "change_pct": 2.2
      },
      {
        "name": "自贸区",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 16,
    "hot_rank_chg": 23,
    "stock_cnt": 5819,
    "price": "6.97",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "8105045800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI短剧",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 7.39
      },
      {
        "name": "新疆概念",
        "change_pct": 1.31
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.5
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.92
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.4
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 28,
    "hot_rank_chg": 71,
    "stock_cnt": 5819,
    "price": "2.50",
    "change": "10.13",
    "market_id": "17",
    "circulate_market_value": "8724470400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "智慧广电",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 3.71
      },
      {
        "name": "超高清视频",
        "change_pct": 1.25
      },
      {
        "name": "人工智能",
        "change_pct": 1.57
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.31
      },
      {
        "name": "影视",
        "change_pct": 7.39
      },
      {
        "name": "智慧城市",
        "change_pct": 1.12
      },
      {
        "name": "国产芯片",
        "change_pct": -0.57
      },
      {
        "name": "振兴东北",
        "change_pct": 1.71
      },
      {
        "name": "传媒",
        "change_pct": 5.65
      },
      {
        "name": "低价股",
        "change_pct": 0.88
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      },
      {
        "name": "在线教育",
        "change_pct": 2.05
      },
      {
        "name": "医疗信息化",
        "change_pct": 2.68
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.38
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.4
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 36,
    "hot_rank_chg": -5,
    "stock_cnt": 5819,
    "price": "7.39",
    "change": "2.07",
    "market_id": "17",
    "circulate_market_value": "18611788000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.86
      },
      {
        "name": "工业大麻",
        "change_pct": 2.11
      },
      {
        "name": "中药",
        "change_pct": 1.9
      },
      {
        "name": "强势人气股",
        "change_pct": 0.87
      },
      {
        "name": "保健品",
        "change_pct": 1.47
      },
      {
        "name": "民营医院",
        "change_pct": 1.65
      },
      {
        "name": "医药",
        "change_pct": 1.41
      },
      {
        "name": "化学原料药",
        "change_pct": 1.69
      },
      {
        "name": "流感",
        "change_pct": 2.1
      },
      {
        "name": "振兴东北",
        "change_pct": 1.71
      },
      {
        "name": "食品",
        "change_pct": 1.58
      }
    ]
  },
  {
    "code": "000678",
    "name": "襄阳轴承",
    "hot_rank": 37,
    "hot_rank_chg": -5,
    "stock_cnt": 5819,
    "price": "12.62",
    "change": "3.10",
    "market_id": "33",
    "circulate_market_value": "5800300900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农机",
        "change_pct": 0.81
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.02
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.03
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.3
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 38,
    "hot_rank_chg": 67,
    "stock_cnt": 5819,
    "price": "7.56",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "8821379800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "人工智能安全",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.6
      },
      {
        "name": "国产软件",
        "change_pct": 2.97
      },
      {
        "name": "一带一路",
        "change_pct": 0.24
      },
      {
        "name": "量子通信",
        "change_pct": 1.15
      },
      {
        "name": "人工智能",
        "change_pct": 1.57
      },
      {
        "name": "网络安全",
        "change_pct": 3.13
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.31
      },
      {
        "name": "物联网",
        "change_pct": 0.72
      },
      {
        "name": "大数据",
        "change_pct": 2.32
      },
      {
        "name": "破净股",
        "change_pct": 0.75
      },
      {
        "name": "数字经济",
        "change_pct": 2.2
      },
      {
        "name": "国产芯片",
        "change_pct": -0.57
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.5
      },
      {
        "name": "信创",
        "change_pct": 2.74
      },
      {
        "name": "华为昇腾",
        "change_pct": 2.02
      },
      {
        "name": "跨境支付",
        "change_pct": 3.71
      },
      {
        "name": "web3.0",
        "change_pct": 3.44
      },
      {
        "name": "数字人民币",
        "change_pct": 3.27
      },
      {
        "name": "智慧政务",
        "change_pct": 2.57
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 2.75
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 3.09
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.73
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.27
      },
      {
        "name": "华为产业链",
        "change_pct": 0.65
      },
      {
        "name": "回购",
        "change_pct": 0.37
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.38
      },
      {
        "name": "智能电网",
        "change_pct": 0.08
      },
      {
        "name": "低空经济",
        "change_pct": 0.01
      },
      {
        "name": "量子计算",
        "change_pct": 2.05
      },
      {
        "name": "财税改革",
        "change_pct": 4.26
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.06
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 40,
    "hot_rank_chg": 60,
    "stock_cnt": 5819,
    "price": "4.85",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "3447374200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 1.57
      },
      {
        "name": "影视",
        "change_pct": 7.39
      },
      {
        "name": "旅游",
        "change_pct": 1.3
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.72
      },
      {
        "name": "AI营销",
        "change_pct": 5.41
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.38
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.92
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.4
      }
    ]
  },
  {
    "code": "300369",
    "name": "绿盟科技",
    "hot_rank": 44,
    "hot_rank_chg": 73,
    "stock_cnt": 5819,
    "price": "10.43",
    "change": "20.02",
    "market_id": "33",
    "circulate_market_value": "8428023300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "人工智能安全",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.6
      },
      {
        "name": "泛在电力物联网",
        "change_pct": 0.22
      },
      {
        "name": "国产软件",
        "change_pct": 2.97
      },
      {
        "name": "人工智能",
        "change_pct": 1.57
      },
      {
        "name": "网络安全",
        "change_pct": 3.13
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.31
      },
      {
        "name": "智能制造",
        "change_pct": -0.04
      },
      {
        "name": "工业互联网",
        "change_pct": 1.17
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产操作系统",
        "change_pct": 2.9
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.5
      },
      {
        "name": "信创",
        "change_pct": 2.74
      },
      {
        "name": "数据要素",
        "change_pct": 3.23
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 3.09
      },
      {
        "name": "华为产业链",
        "change_pct": 0.65
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.38
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 48,
    "hot_rank_chg": 55,
    "stock_cnt": 5819,
    "price": "9.39",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "10653303400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI视频",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.57
      },
      {
        "name": "足球",
        "change_pct": 1.44
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.7
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.2
      },
      {
        "name": "传媒",
        "change_pct": 5.65
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.78
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.41
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      },
      {
        "name": "网红/MCN",
        "change_pct": 2.86
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.92
      }
    ]
  },
  {
    "code": "000710",
    "name": "贝瑞基因",
    "hot_rank": 50,
    "hot_rank_chg": 46,
    "stock_cnt": 5819,
    "price": "11.30",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "3791459100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "AI医疗",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 2.15
      },
      {
        "name": "体外诊断",
        "change_pct": 1.65
      },
      {
        "name": "医疗器械",
        "change_pct": 1.13
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.04
      },
      {
        "name": "人工智能",
        "change_pct": 1.57
      },
      {
        "name": "基因测序",
        "change_pct": 2.11
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.46
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.49
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.38
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.06
      },
      {
        "name": "AI医疗",
        "change_pct": 1.57
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 52,
    "hot_rank_chg": 8,
    "stock_cnt": 5819,
    "price": "9.99",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "5272742800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "玉米种业",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.74
      },
      {
        "name": "强势人气股",
        "change_pct": 0.87
      },
      {
        "name": "转基因",
        "change_pct": 5.92
      },
      {
        "name": "棉花",
        "change_pct": 2.8
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      },
      {
        "name": "供销社",
        "change_pct": 1.88
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 54,
    "hot_rank_chg": -10,
    "stock_cnt": 5819,
    "price": "4.06",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "39443359000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": 0.99
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.29
      },
      {
        "name": "股权转让",
        "change_pct": 0.68
      },
      {
        "name": "房地产",
        "change_pct": 0.15
      },
      {
        "name": "养老产业",
        "change_pct": 1.89
      },
      {
        "name": "冷链",
        "change_pct": 0.27
      },
      {
        "name": "住房租赁",
        "change_pct": 0.27
      },
      {
        "name": "破净股",
        "change_pct": 0.75
      },
      {
        "name": "冰雪产业",
        "change_pct": 1.28
      },
      {
        "name": "物业管理",
        "change_pct": 0.34
      },
      {
        "name": "旧改",
        "change_pct": 0.29
      },
      {
        "name": "REITs",
        "change_pct": 0.94
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 57,
    "hot_rank_chg": -21,
    "stock_cnt": 5819,
    "price": "8.13",
    "change": "0.62",
    "market_id": "33",
    "circulate_market_value": "15569702000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.02
      },
      {
        "name": "林业",
        "change_pct": 1.27
      },
      {
        "name": "碳中和",
        "change_pct": 0.53
      },
      {
        "name": "自贸区",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "600408",
    "name": "安泰集团",
    "hot_rank": 61,
    "hot_rank_chg": -6,
    "stock_cnt": 5819,
    "price": "3.78",
    "change": "9.88",
    "market_id": "17",
    "circulate_market_value": "3805704000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "焦炭",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 1.27
      },
      {
        "name": "钢铁",
        "change_pct": 0.75
      },
      {
        "name": "煤化工",
        "change_pct": 1.69
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 62,
    "hot_rank_chg": 40,
    "stock_cnt": 5819,
    "price": "12.87",
    "change": "6.80",
    "market_id": "33",
    "circulate_market_value": "44760963000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.86
      },
      {
        "name": "人工智能",
        "change_pct": 1.57
      },
      {
        "name": "VR&AR",
        "change_pct": 0.14
      },
      {
        "name": "直播/短视频",
        "change_pct": 4.54
      },
      {
        "name": "大数据",
        "change_pct": 2.32
      },
      {
        "name": "教育",
        "change_pct": 2.32
      },
      {
        "name": "百度概念股",
        "change_pct": 2.84
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.5
      },
      {
        "name": "传媒",
        "change_pct": 5.65
      },
      {
        "name": "快手概念股",
        "change_pct": 5.23
      },
      {
        "name": "NFT",
        "change_pct": 4.83
      },
      {
        "name": "元宇宙",
        "change_pct": 2.51
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.72
      },
      {
        "name": "web3.0",
        "change_pct": 3.44
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.78
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.41
      },
      {
        "name": "职业教育",
        "change_pct": 2.86
      },
      {
        "name": "云游戏",
        "change_pct": 3.24
      },
      {
        "name": "网红/MCN",
        "change_pct": 2.86
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 2.8
      },
      {
        "name": "AI营销",
        "change_pct": 5.41
      },
      {
        "name": "词元概念/Token",
        "change_pct": 2.71
      },
      {
        "name": "华为产业链",
        "change_pct": 0.65
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.38
      },
      {
        "name": "AI视频",
        "change_pct": 4.58
      },
      {
        "name": "智谱AI",
        "change_pct": 2.71
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.88
      },
      {
        "name": "区块链",
        "change_pct": 2.73
      }
    ]
  },
  {
    "code": "600400",
    "name": "红豆股份",
    "hot_rank": 64,
    "hot_rank_chg": 42,
    "stock_cnt": 5819,
    "price": "3.98",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "9119660000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "牛散持股",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.57
      },
      {
        "name": "筹码集中",
        "change_pct": 0.11
      },
      {
        "name": "纺织服装",
        "change_pct": 1.24
      },
      {
        "name": "机器人",
        "change_pct": -0.02
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 66,
    "hot_rank_chg": -3,
    "stock_cnt": 5819,
    "price": "12.59",
    "change": "3.88",
    "market_id": "33",
    "circulate_market_value": "6628327100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 0.29
      },
      {
        "name": "房地产",
        "change_pct": 0.15
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.7
      },
      {
        "name": "住房租赁",
        "change_pct": 0.27
      },
      {
        "name": "物业管理",
        "change_pct": 0.34
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.03
      },
      {
        "name": "旧改",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 67,
    "hot_rank_chg": -3,
    "stock_cnt": 5819,
    "price": "5.50",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "194519240000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.62
      },
      {
        "name": "手机产业链",
        "change_pct": -1.24
      },
      {
        "name": "超高清视频",
        "change_pct": 1.25
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.65
      },
      {
        "name": "电竞",
        "change_pct": 2.7
      },
      {
        "name": "半导体",
        "change_pct": -1.52
      },
      {
        "name": "人工智能",
        "change_pct": 1.57
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.33
      },
      {
        "name": "VR&AR",
        "change_pct": 0.14
      },
      {
        "name": "OLED",
        "change_pct": -1.21
      },
      {
        "name": "京津冀",
        "change_pct": 0.78
      },
      {
        "name": "物联网",
        "change_pct": 0.72
      },
      {
        "name": "指纹识别",
        "change_pct": -0.81
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.02
      },
      {
        "name": "白马股",
        "change_pct": 0.6
      },
      {
        "name": "智能制造",
        "change_pct": -0.04
      },
      {
        "name": "小米概念股",
        "change_pct": -0.66
      },
      {
        "name": "国产芯片",
        "change_pct": -0.57
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.52
      },
      {
        "name": "全息概念",
        "change_pct": 0.18
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.29
      },
      {
        "name": "MicroLED",
        "change_pct": -1.91
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.02
      },
      {
        "name": "智能手表",
        "change_pct": -0.72
      },
      {
        "name": "MiniLED",
        "change_pct": -1.78
      },
      {
        "name": "传感器",
        "change_pct": -0.22
      },
      {
        "name": "大硅片",
        "change_pct": -1.13
      },
      {
        "name": "AI PC",
        "change_pct": -1.06
      },
      {
        "name": "华为产业链",
        "change_pct": 0.65
      },
      {
        "name": "回购",
        "change_pct": 0.37
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.03
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.56
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.86
      }
    ]
  },
  {
    "code": "605366",
    "name": "宏柏新材",
    "hot_rank": 70,
    "hot_rank_chg": -14,
    "stock_cnt": 5819,
    "price": "9.94",
    "change": "-9.96",
    "market_id": "17",
    "circulate_market_value": "7681907300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有机硅",
        "change_pct": 2.89
      },
      {
        "name": "气凝胶",
        "change_pct": 0.34
      },
      {
        "name": "光纤概念",
        "change_pct": -1.25
      }
    ]
  },
  {
    "code": "300182",
    "name": "捷成股份",
    "hot_rank": 71,
    "hot_rank_chg": 140,
    "stock_cnt": 5819,
    "price": "5.56",
    "change": "10.98",
    "market_id": "33",
    "circulate_market_value": "13425199000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 3.71
      },
      {
        "name": "超高清视频",
        "change_pct": 1.25
      },
      {
        "name": "股权转让",
        "change_pct": 0.68
      },
      {
        "name": "人工智能",
        "change_pct": 1.57
      },
      {
        "name": "VR&AR",
        "change_pct": 0.14
      },
      {
        "name": "军民融合",
        "change_pct": -0.16
      },
      {
        "name": "影视",
        "change_pct": 7.39
      },
      {
        "name": "直播/短视频",
        "change_pct": 4.54
      },
      {
        "name": "大数据",
        "change_pct": 2.32
      },
      {
        "name": "教育",
        "change_pct": 2.32
      },
      {
        "name": "军工",
        "change_pct": -0.26
      },
      {
        "name": "数字经济",
        "change_pct": 2.2
      },
      {
        "name": "知识产权",
        "change_pct": 5.52
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.5
      },
      {
        "name": "快手概念股",
        "change_pct": 5.23
      },
      {
        "name": "NFT",
        "change_pct": 4.83
      },
      {
        "name": "元宇宙",
        "change_pct": 2.51
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.72
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.78
      },
      {
        "name": "数据要素",
        "change_pct": 3.23
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.41
      },
      {
        "name": "教育信息化",
        "change_pct": 2.37
      },
      {
        "name": "在线教育",
        "change_pct": 2.05
      },
      {
        "name": "华为产业链",
        "change_pct": 0.65
      },
      {
        "name": "ChatGPT",
        "change_pct": 3.66
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.38
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.92
      },
      {
        "name": "多模态",
        "change_pct": 3.4
      },
      {
        "name": "AI视频",
        "change_pct": 4.58
      },
      {
        "name": "华为盘古",
        "change_pct": 2.47
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.4
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 72,
    "hot_rank_chg": 63,
    "stock_cnt": 5819,
    "price": "7.37",
    "change": "5.29",
    "market_id": "33",
    "circulate_market_value": "11990944200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.86
      },
      {
        "name": "电竞",
        "change_pct": 2.7
      },
      {
        "name": "手游",
        "change_pct": 3.53
      },
      {
        "name": "强势人气股",
        "change_pct": 0.87
      },
      {
        "name": "人工智能",
        "change_pct": 1.57
      },
      {
        "name": "游戏",
        "change_pct": 4.35
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.2
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.5
      },
      {
        "name": "快手概念股",
        "change_pct": 5.23
      },
      {
        "name": "元宇宙",
        "change_pct": 2.51
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.72
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.89
      },
      {
        "name": "web3.0",
        "change_pct": 3.44
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.78
      },
      {
        "name": "数据要素",
        "change_pct": 3.23
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.41
      },
      {
        "name": "AI营销",
        "change_pct": 5.41
      },
      {
        "name": "ChatGPT",
        "change_pct": 3.66
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.56
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.38
      },
      {
        "name": "人形机器人",
        "change_pct": -0.32
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.92
      },
      {
        "name": "多模态",
        "change_pct": 3.4
      },
      {
        "name": "AI视频",
        "change_pct": 4.58
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.4
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.88
      }
    ]
  },
  {
    "code": "601519",
    "name": "大智慧",
    "hot_rank": 74,
    "hot_rank_chg": 93,
    "stock_cnt": 5819,
    "price": "9.17",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "18240597000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "互联网金融",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.18
      },
      {
        "name": "国产软件",
        "change_pct": 2.97
      },
      {
        "name": "金融科技",
        "change_pct": 3.49
      },
      {
        "name": "直播/短视频",
        "change_pct": 4.54
      },
      {
        "name": "大数据",
        "change_pct": 2.32
      }
    ]
  },
  {
    "code": "605136",
    "name": "丽人丽妆",
    "hot_rank": 77,
    "hot_rank_chg": 55,
    "stock_cnt": 5819,
    "price": "9.44",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "3780328200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "化妆品电商",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.86
      },
      {
        "name": "新零售",
        "change_pct": 3.52
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.04
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.25
      },
      {
        "name": "预制菜",
        "change_pct": 1.56
      },
      {
        "name": "化妆品",
        "change_pct": 1.42
      }
    ]
  },
  {
    "code": "000420",
    "name": "吉林化纤",
    "hot_rank": 79,
    "hot_rank_chg": 83,
    "stock_cnt": 5819,
    "price": "3.81",
    "change": "10.12",
    "market_id": "33",
    "circulate_market_value": "9367934100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "碳纤维",
    "xgb_concepts": [
      {
        "name": "粘胶短纤",
        "change_pct": 3.13
      },
      {
        "name": "大飞机",
        "change_pct": -0.42
      },
      {
        "name": "风电",
        "change_pct": -0.92
      },
      {
        "name": "碳纤维",
        "change_pct": -0.17
      },
      {
        "name": "振兴东北",
        "change_pct": 1.71
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 0.07
      },
      {
        "name": "低空经济",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 82,
    "hot_rank_chg": 94,
    "stock_cnt": 5819,
    "price": "4.30",
    "change": "4.37",
    "market_id": "33",
    "circulate_market_value": "25175627000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.57
      },
      {
        "name": "人工智能",
        "change_pct": 1.57
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.31
      },
      {
        "name": "水利",
        "change_pct": 0.4
      },
      {
        "name": "直播/短视频",
        "change_pct": 4.54
      },
      {
        "name": "大数据",
        "change_pct": 2.32
      },
      {
        "name": "园林",
        "change_pct": -0.73
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.66
      },
      {
        "name": "数字经济",
        "change_pct": 2.2
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.5
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.29
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.65
      },
      {
        "name": "快手概念股",
        "change_pct": 5.23
      },
      {
        "name": "IGBT",
        "change_pct": -0.3
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.72
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.78
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.41
      },
      {
        "name": "氮化镓",
        "change_pct": -1.57
      },
      {
        "name": "AI营销",
        "change_pct": 5.41
      },
      {
        "name": "华为产业链",
        "change_pct": 0.65
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.38
      },
      {
        "name": "多模态",
        "change_pct": 3.4
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.1
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.88
      },
      {
        "name": "区块链",
        "change_pct": 2.73
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 88,
    "hot_rank_chg": -36,
    "stock_cnt": 5819,
    "price": "10.76",
    "change": "-6.11",
    "market_id": "17",
    "circulate_market_value": "19251128000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.44
      },
      {
        "name": "纯碱",
        "change_pct": 0.86
      },
      {
        "name": "食品",
        "change_pct": 1.58
      },
      {
        "name": "土壤修复",
        "change_pct": 0.15
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.89
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.53
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.06
      }
    ]
  },
  {
    "code": "600478",
    "name": "科力远",
    "hot_rank": 92,
    "hot_rank_chg": 56,
    "stock_cnt": 5819,
    "price": "5.10",
    "change": "9.91",
    "market_id": "17",
    "circulate_market_value": "8638986500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "固态电池",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.57
      },
      {
        "name": "锂电池",
        "change_pct": 0.36
      },
      {
        "name": "共享经济",
        "change_pct": 1.58
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.18
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.03
      },
      {
        "name": "储能",
        "change_pct": -0.02
      },
      {
        "name": "固态电池",
        "change_pct": 0.71
      },
      {
        "name": "动力电池回收",
        "change_pct": 1.37
      },
      {
        "name": "超级电容",
        "change_pct": 0.26
      },
      {
        "name": "RWA",
        "change_pct": 3.36
      },
      {
        "name": "锂矿/碳酸锂",
        "change_pct": 1.93
      }
    ]
  },
  {
    "code": "300133",
    "name": "华策影视",
    "hot_rank": 93,
    "hot_rank_chg": 212,
    "stock_cnt": 5819,
    "price": "8.38",
    "change": "10.85",
    "market_id": "33",
    "circulate_market_value": "13944323000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "VR&AR",
        "change_pct": 0.14
      },
      {
        "name": "影视",
        "change_pct": 7.39
      },
      {
        "name": "大数据",
        "change_pct": 2.32
      },
      {
        "name": "教育",
        "change_pct": 2.32
      },
      {
        "name": "动漫",
        "change_pct": 7.03
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "知识产权",
        "change_pct": 5.52
      },
      {
        "name": "百度概念股",
        "change_pct": 2.84
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.5
      },
      {
        "name": "NFT",
        "change_pct": 4.83
      },
      {
        "name": "元宇宙",
        "change_pct": 2.51
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.72
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.78
      },
      {
        "name": "网红/MCN",
        "change_pct": 2.86
      },
      {
        "name": "华为产业链",
        "change_pct": 0.65
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.56
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.38
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.92
      },
      {
        "name": "多模态",
        "change_pct": 3.4
      },
      {
        "name": "AI视频",
        "change_pct": 4.58
      },
      {
        "name": "Kimi概念",
        "change_pct": 5.26
      },
      {
        "name": "智谱AI",
        "change_pct": 2.71
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.4
      }
    ]
  },
  {
    "code": "600865",
    "name": "百大集团",
    "hot_rank": 98,
    "hot_rank_chg": -12,
    "stock_cnt": 5819,
    "price": "11.51",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4330526000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业零售",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.87
      },
      {
        "name": "物业管理",
        "change_pct": 0.34
      },
      {
        "name": "免税店概念",
        "change_pct": 2.2
      },
      {
        "name": "地摊经济",
        "change_pct": 2.44
      }
    ]
  },
  {
    "code": "002531",
    "name": "天顺风能",
    "hot_rank": 99,
    "hot_rank_chg": -2,
    "stock_cnt": 5819,
    "price": "7.52",
    "change": "-9.94",
    "market_id": "33",
    "circulate_market_value": "13437252000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "海工装备",
        "change_pct": -1.28
      },
      {
        "name": "风电",
        "change_pct": -0.92
      },
      {
        "name": "船舶",
        "change_pct": -2.05
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 100,
    "hot_rank_chg": -51,
    "stock_cnt": 5819,
    "price": "9.44",
    "change": "1.72",
    "market_id": "33",
    "circulate_market_value": "10005976800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 2.11
      },
      {
        "name": "电子烟",
        "change_pct": 0.45
      },
      {
        "name": "一带一路",
        "change_pct": 0.24
      },
      {
        "name": "造纸",
        "change_pct": 0.26
      },
      {
        "name": "包装印刷",
        "change_pct": 0.23
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.73
      },
      {
        "name": "回购",
        "change_pct": 0.37
      },
      {
        "name": "太空算力",
        "change_pct": -1.17
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600418", "name": "江淮汽车", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5819, "price": "22.75", "change": "-7.97", "market_id": "17", "circulate_market_value": "51282554000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5819, "price": "12.53", "change": "10.01", "market_id": "17", "circulate_market_value": "13092444800.00", "change_type": "1", "change_section": "9", "change_days": "9", "change_reason": "拟收购财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.18}, {"name": "上海国企改革", "change_pct": 1.45}, {"name": "强势人气股", "change_pct": 0.87}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 5.65}, {"name": "国企改革", "change_pct": 0.96}]}, {"code": "300364", "name": "中文在线", "hot_rank": 3, "hot_rank_chg": 34, "stock_cnt": 5819, "price": "24.47", "change": "20.01", "market_id": "33", "circulate_market_value": "16176766000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧"}, {"code": "600127", "name": "金健米业", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5819, "price": "15.18", "change": "10.00", "market_id": "17", "circulate_market_value": "9742269200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮油食品"}, {"code": "600176", "name": "中国巨石", "hot_rank": 5, "hot_rank_chg": 11, "stock_cnt": 5819, "price": "38.57", "change": "-2.48", "market_id": "17", "circulate_market_value": "153184110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5819, "price": "43.75", "change": "-10.00", "market_id": "33", "circulate_market_value": "27602762000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5819, "price": "15.13", "change": "10.04", "market_id": "33", "circulate_market_value": "11525513900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "机器人投资"}, {"code": "002709", "name": "天赐材料", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5819, "price": "35.68", "change": "9.15", "market_id": "33", "circulate_market_value": "53841513000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5819, "price": "20.91", "change": "9.99", "market_id": "17", "circulate_market_value": "16558711000.00", "change_type": "1", "change_section": "10", "change_days": "7", "change_reason": "教科书发行"}, {"code": "600241", "name": "时代万恒", "hot_rank": 10, "hot_rank_chg": 5, "stock_cnt": 5819, "price": "11.76", "change": "10.01", "market_id": "17", "circulate_market_value": "3460992900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "新能源电池", "xgb_concepts": [{"name": "锂电池", "change_pct": 0.36}, {"name": "强势人气股", "change_pct": 0.87}, {"name": "中日韩自贸区", "change_pct": 1.86}, {"name": "新能源汽车", "change_pct": 0.03}, {"name": "振兴东北", "change_pct": 1.71}, {"name": "国企改革", "change_pct": 0.96}, {"name": "自贸区", "change_pct": 1.15}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 11, "hot_rank_chg": 43, "stock_cnt": 5819, "price": "23.00", "change": "19.98", "market_id": "33", "circulate_market_value": "23499099000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AIGC长剧"}, {"code": "600812", "name": "华北制药", "hot_rank": 12, "hot_rank_chg": 18, "stock_cnt": 5819, "price": "6.03", "change": "10.04", "market_id": "17", "circulate_market_value": "10345854100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "鼠疫", "xgb_concepts": [{"name": "维生素", "change_pct": 1.89}, {"name": "雄安新区", "change_pct": 0.67}, {"name": "医药", "change_pct": 1.41}, {"name": "疫苗", "change_pct": 2.02}, {"name": "化学原料药", "change_pct": 1.69}, {"name": "流感", "change_pct": 2.1}, {"name": "肝素", "change_pct": 2.62}, {"name": "眼科", "change_pct": 1.69}]}, {"code": "601118", "name": "海南橡胶", "hot_rank": 13, "hot_rank_chg": 16, "stock_cnt": 5819, "price": "7.16", "change": "9.98", "market_id": "17", "circulate_market_value": "30640703000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "天然橡胶", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.74}, {"name": "橡胶", "change_pct": 2.27}, {"name": "土地流转", "change_pct": 2.93}, {"name": "农垦", "change_pct": 3.77}, {"name": "海南概念", "change_pct": 1.88}, {"name": "自由贸易港", "change_pct": 1.39}, {"name": "海南自由贸易港", "change_pct": 2.17}, {"name": "大农业", "change_pct": 1.81}, {"name": "可降解塑料", "change_pct": 1.48}, {"name": "大消费", "change_pct": 1.61}, {"name": "免税店概念", "change_pct": 2.2}, {"name": "自贸区", "change_pct": 1.15}]}, {"code": "002080", "name": "中材科技", "hot_rank": 14, "hot_rank_chg": 81, "stock_cnt": 5819, "price": "51.80", "change": "-0.40", "market_id": "33", "circulate_market_value": "86926802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 15, "hot_rank_chg": 12, "stock_cnt": 5819, "price": "432.00", "change": "0.98", "market_id": "17", "circulate_market_value": "12997895000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 16, "hot_rank_chg": 23, "stock_cnt": 5819, "price": "6.97", "change": "9.94", "market_id": "33", "circulate_market_value": "8105045800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧", "xgb_concepts": [{"name": "影视", "change_pct": 7.39}, {"name": "新疆概念", "change_pct": 1.31}, {"name": "阿里巴巴概念股", "change_pct": 2.25}, {"name": "腾讯概念股", "change_pct": 2.5}, {"name": "短剧/互动影游", "change_pct": 6.92}, {"name": "IP经济/谷子经济", "change_pct": 3.4}]}, {"code": "600206", "name": "有研新材", "hot_rank": 17, "hot_rank_chg": 3, "stock_cnt": 5819, "price": "47.95", "change": "7.42", "market_id": "17", "circulate_market_value": "40592232000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 18, "hot_rank_chg": 8, "stock_cnt": 5819, "price": "17.15", "change": "20.01", "market_id": "33", "circulate_market_value": "20576411000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报预增"}, {"code": "002407", "name": "多氟多", "hot_rank": 19, "hot_rank_chg": -6, "stock_cnt": 5819, "price": "31.89", "change": "6.12", "market_id": "33", "circulate_market_value": "34470484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 20, "hot_rank_chg": -12, "stock_cnt": 5819, "price": "53.92", "change": "9.57", "market_id": "17", "circulate_market_value": "9461887200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 21, "hot_rank_chg": -2, "stock_cnt": 5819, "price": "23.03", "change": "-4.83", "market_id": "17", "circulate_market_value": "4863088100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002058", "name": "紫竹高科", "hot_rank": 22, "hot_rank_chg": 20, "stock_cnt": 5819, "price": "24.44", "change": "9.99", "market_id": "33", "circulate_market_value": "3503860900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "固态电池"}, {"code": "002074", "name": "国轩高科", "hot_rank": 23, "hot_rank_chg": -2, "stock_cnt": 5819, "price": "30.41", "change": "-2.84", "market_id": "33", "circulate_market_value": "52811760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 24, "hot_rank_chg": 52, "stock_cnt": 5819, "price": "96.98", "change": "-0.93", "market_id": "17", "circulate_market_value": "95240185000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001246", "name": "力勤资源", "hot_rank": 25, "hot_rank_chg": -13, "stock_cnt": 5819, "price": "45.05", "change": "-15.87", "market_id": "33", "circulate_market_value": "7087562200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002733", "name": "雄韬股份", "hot_rank": 26, "hot_rank_chg": 9, "stock_cnt": 5819, "price": "20.78", "change": "10.01", "market_id": "33", "circulate_market_value": "7664968100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数据中心UPS"}, {"code": "603533", "name": "掌阅科技", "hot_rank": 27, "hot_rank_chg": 62, "stock_cnt": 5819, "price": "25.44", "change": "9.99", "market_id": "17", "circulate_market_value": "11165535500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧"}, {"code": "601929", "name": "吉视传媒", "hot_rank": 28, "hot_rank_chg": 71, "stock_cnt": 5819, "price": "2.50", "change": "10.13", "market_id": "17", "circulate_market_value": "8724470400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "智慧广电", "xgb_concepts": [{"name": "广电", "change_pct": 3.71}, {"name": "超高清视频", "change_pct": 1.25}, {"name": "人工智能", "change_pct": 1.57}, {"name": "云计算数据中心", "change_pct": 0.31}, {"name": "影视", "change_pct": 7.39}, {"name": "智慧城市", "change_pct": 1.12}, {"name": "国产芯片", "change_pct": -0.57}, {"name": "振兴东北", "change_pct": 1.71}, {"name": "传媒", "change_pct": 5.65}, {"name": "低价股", "change_pct": 0.88}, {"name": "国企改革", "change_pct": 0.96}, {"name": "在线教育", "change_pct": 2.05}, {"name": "医疗信息化", "change_pct": 2.68}, {"name": "AI大模型/智能体", "change_pct": 2.38}, {"name": "IP经济/谷子经济", "change_pct": 3.4}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 29, "hot_rank_chg": -7, "stock_cnt": 5819, "price": "51.00", "change": "0.95", "market_id": "17", "circulate_market_value": "229654990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 30, "hot_rank_chg": 10, "stock_cnt": 5819, "price": "16.20", "change": "9.98", "market_id": "17", "circulate_market_value": "7200000000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI漫剧"}, {"code": "002384", "name": "东山精密", "hot_rank": 31, "hot_rank_chg": -21, "stock_cnt": 5819, "price": "145.49", "change": "-3.43", "market_id": "33", "circulate_market_value": "201695950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 32, "hot_rank_chg": -14, "stock_cnt": 5819, "price": "775.29", "change": "-0.98", "market_id": "33", "circulate_market_value": "860523060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 33, "hot_rank_chg": -26, "stock_cnt": 5819, "price": "14.94", "change": "10.02", "market_id": "17", "circulate_market_value": "9950040000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "连锁零售"}, {"code": "600722", "name": "金牛化工", "hot_rank": 34, "hot_rank_chg": -25, "stock_cnt": 5819, "price": "16.88", "change": "4.26", "market_id": "17", "circulate_market_value": "11483796100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 35, "hot_rank_chg": -18, "stock_cnt": 5819, "price": "297.75", "change": "3.84", "market_id": "33", "circulate_market_value": "1268598740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 36, "hot_rank_chg": -5, "stock_cnt": 5819, "price": "7.39", "change": "2.07", "market_id": "17", "circulate_market_value": "18611788000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.86}, {"name": "工业大麻", "change_pct": 2.11}, {"name": "中药", "change_pct": 1.9}, {"name": "强势人气股", "change_pct": 0.87}, {"name": "保健品", "change_pct": 1.47}, {"name": "民营医院", "change_pct": 1.65}, {"name": "医药", "change_pct": 1.41}, {"name": "化学原料药", "change_pct": 1.69}, {"name": "流感", "change_pct": 2.1}, {"name": "振兴东北", "change_pct": 1.71}, {"name": "食品", "change_pct": 1.58}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 37, "hot_rank_chg": -5, "stock_cnt": 5819, "price": "12.62", "change": "3.10", "market_id": "33", "circulate_market_value": "5800300900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农机", "change_pct": 0.81}, {"name": "汽车零部件", "change_pct": 0.02}, {"name": "新能源汽车", "change_pct": 0.03}, {"name": "新能源车零部件", "change_pct": -0.3}, {"name": "大农业", "change_pct": 1.81}]}, {"code": "002212", "name": "天融信", "hot_rank": 38, "hot_rank_chg": 67, "stock_cnt": 5819, "price": "7.56", "change": "10.04", "market_id": "33", "circulate_market_value": "8821379800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人工智能安全", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.6}, {"name": "国产软件", "change_pct": 2.97}, {"name": "一带一路", "change_pct": 0.24}, {"name": "量子通信", "change_pct": 1.15}, {"name": "人工智能", "change_pct": 1.57}, {"name": "网络安全", "change_pct": 3.13}, {"name": "云计算数据中心", "change_pct": 0.31}, {"name": "物联网", "change_pct": 0.72}, {"name": "大数据", "change_pct": 2.32}, {"name": "破净股", "change_pct": 0.75}, {"name": "数字经济", "change_pct": 2.2}, {"name": "国产芯片", "change_pct": -0.57}, {"name": "阿里巴巴概念股", "change_pct": 2.25}, {"name": "腾讯概念股", "change_pct": 2.5}, {"name": "信创", "change_pct": 2.74}, {"name": "华为昇腾", "change_pct": 2.02}, {"name": "跨境支付", "change_pct": 3.71}, {"name": "web3.0", "change_pct": 3.44}, {"name": "数字人民币", "change_pct": 3.27}, {"name": "智慧政务", "change_pct": 2.57}, {"name": "华为鸿蒙", "change_pct": 2.75}, {"name": "华为云·鲲鹏", "change_pct": 3.09}, {"name": "卫星互联网", "change_pct": -0.73}, {"name": "智慧灯杆", "change_pct": 0.27}, {"name": "华为产业链", "change_pct": 0.65}, {"name": "回购", "change_pct": 0.37}, {"name": "AI大模型/智能体", "change_pct": 2.38}, {"name": "智能电网", "change_pct": 0.08}, {"name": "低空经济", "change_pct": 0.01}, {"name": "量子计算", "change_pct": 2.05}, {"name": "财税改革", "change_pct": 4.26}, {"name": "DeepSeek概念股", "change_pct": 2.06}]}, {"code": "601127", "name": "赛力斯", "hot_rank": 39, "hot_rank_chg": -6, "stock_cnt": 5819, "price": "46.58", "change": "-2.90", "market_id": "17", "circulate_market_value": "72534534000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 40, "hot_rank_chg": 60, "stock_cnt": 5819, "price": "4.85", "change": "9.98", "market_id": "33", "circulate_market_value": "3447374200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI漫剧", "xgb_concepts": [{"name": "人工智能", "change_pct": 1.57}, {"name": "影视", "change_pct": 7.39}, {"name": "旅游", "change_pct": 1.3}, {"name": "虚拟数字人", "change_pct": 3.72}, {"name": "AI营销", "change_pct": 5.41}, {"name": "AI大模型/智能体", "change_pct": 2.38}, {"name": "短剧/互动影游", "change_pct": 6.92}, {"name": "IP经济/谷子经济", "change_pct": 3.4}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 41, "hot_rank_chg": 2, "stock_cnt": 5819, "price": "53.35", "change": "10.00", "market_id": "17", "circulate_market_value": "7625262800.00", "change_type": "1", "change_section": "15", "change_days": "9", "change_reason": "PCB"}, {"code": "002805", "name": "丰元股份", "hot_rank": 42, "hot_rank_chg": 8, "stock_cnt": 5819, "price": "19.44", "change": "10.02", "market_id": "33", "circulate_market_value": "5420184400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "600487", "name": "亨通光电", "hot_rank": 43, "hot_rank_chg": -9, "stock_cnt": 5819, "price": "52.95", "change": "0.47", "market_id": "17", "circulate_market_value": "129920569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300369", "name": "绿盟科技", "hot_rank": 44, "hot_rank_chg": 73, "stock_cnt": 5819, "price": "10.43", "change": "20.02", "market_id": "33", "circulate_market_value": "8428023300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人工智能安全", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.6}, {"name": "泛在电力物联网", "change_pct": 0.22}, {"name": "国产软件", "change_pct": 2.97}, {"name": "人工智能", "change_pct": 1.57}, {"name": "网络安全", "change_pct": 3.13}, {"name": "云计算数据中心", "change_pct": 0.31}, {"name": "智能制造", "change_pct": -0.04}, {"name": "工业互联网", "change_pct": 1.17}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产操作系统", "change_pct": 2.9}, {"name": "腾讯概念股", "change_pct": 2.5}, {"name": "信创", "change_pct": 2.74}, {"name": "数据要素", "change_pct": 3.23}, {"name": "华为云·鲲鹏", "change_pct": 3.09}, {"name": "华为产业链", "change_pct": 0.65}, {"name": "AI大模型/智能体", "change_pct": 2.38}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 45, "hot_rank_chg": 14, "stock_cnt": 5819, "price": "30.80", "change": "4.87", "market_id": "17", "circulate_market_value": "634535230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002912", "name": "中新赛克", "hot_rank": 46, "hot_rank_chg": 72, "stock_cnt": 5819, "price": "28.55", "change": "10.02", "market_id": "33", "circulate_market_value": "4631462000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "AI安全"}, {"code": "002636", "name": "金安国纪", "hot_rank": 47, "hot_rank_chg": -9, "stock_cnt": 5819, "price": "71.67", "change": "-10.00", "market_id": "33", "circulate_market_value": "51977704000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002181", "name": "粤传媒", "hot_rank": 48, "hot_rank_chg": 55, "stock_cnt": 5819, "price": "9.39", "change": "9.95", "market_id": "33", "circulate_market_value": "10653303400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI视频", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.57}, {"name": "足球", "change_pct": 1.44}, {"name": "粤港澳大湾区", "change_pct": 0.7}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.2}, {"name": "传媒", "change_pct": 5.65}, {"name": "AIGC概念", "change_pct": 3.78}, {"name": "字节跳动概念股", "change_pct": 3.41}, {"name": "国企改革", "change_pct": 0.96}, {"name": "网红/MCN", "change_pct": 2.86}, {"name": "短剧/互动影游", "change_pct": 6.92}]}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 49, "hot_rank_chg": -35, "stock_cnt": 5819, "price": "21.37", "change": "2.05", "market_id": "17", "circulate_market_value": "12031235300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000710", "name": "贝瑞基因", "hot_rank": 50, "hot_rank_chg": 46, "stock_cnt": 5819, "price": "11.30", "change": "10.03", "market_id": "33", "circulate_market_value": "3791459100.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI医疗", "xgb_concepts": [{"name": "精准医疗", "change_pct": 2.15}, {"name": "体外诊断", "change_pct": 1.65}, {"name": "医疗器械", "change_pct": 1.13}, {"name": "优化生育（三孩）", "change_pct": 2.04}, {"name": "人工智能", "change_pct": 1.57}, {"name": "基因测序", "change_pct": 2.11}, {"name": "辅助生殖", "change_pct": 1.46}, {"name": "新冠病毒防治", "change_pct": 1.49}, {"name": "AI大模型/智能体", "change_pct": 2.38}, {"name": "DeepSeek概念股", "change_pct": 2.06}, {"name": "AI医疗", "change_pct": 1.57}]}, {"code": "300450", "name": "先导智能", "hot_rank": 51, "hot_rank_chg": -5, "stock_cnt": 5819, "price": "36.73", "change": "-2.29", "market_id": "33", "circulate_market_value": "57277273000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 52, "hot_rank_chg": 8, "stock_cnt": 5819, "price": "9.99", "change": "10.02", "market_id": "17", "circulate_market_value": "5272742800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玉米种业", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.74}, {"name": "强势人气股", "change_pct": 0.87}, {"name": "转基因", "change_pct": 5.92}, {"name": "棉花", "change_pct": 2.8}, {"name": "大农业", "change_pct": 1.81}, {"name": "供销社", "change_pct": 1.88}]}, {"code": "600371", "name": "万向德农", "hot_rank": 53, "hot_rank_chg": -25, "stock_cnt": 5819, "price": "14.97", "change": "9.99", "market_id": "17", "circulate_market_value": "4379892700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玉米种业"}, {"code": "000002", "name": "万科A", "hot_rank": 54, "hot_rank_chg": -10, "stock_cnt": 5819, "price": "4.06", "change": "0.00", "market_id": "33", "circulate_market_value": "39443359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": 0.99}, {"name": "深圳本地股", "change_pct": 0.29}, {"name": "股权转让", "change_pct": 0.68}, {"name": "房地产", "change_pct": 0.15}, {"name": "养老产业", "change_pct": 1.89}, {"name": "冷链", "change_pct": 0.27}, {"name": "住房租赁", "change_pct": 0.27}, {"name": "破净股", "change_pct": 0.75}, {"name": "冰雪产业", "change_pct": 1.28}, {"name": "物业管理", "change_pct": 0.34}, {"name": "旧改", "change_pct": 0.29}, {"name": "REITs", "change_pct": 0.94}]}, {"code": "301190", "name": "善水科技", "hot_rank": 55, "hot_rank_chg": -7, "stock_cnt": 5819, "price": "43.99", "change": "11.31", "market_id": "33", "circulate_market_value": "7999757500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 56, "hot_rank_chg": -31, "stock_cnt": 5819, "price": "20.72", "change": "-3.00", "market_id": "33", "circulate_market_value": "9372459900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 57, "hot_rank_chg": -21, "stock_cnt": 5819, "price": "8.13", "change": "0.62", "market_id": "33", "circulate_market_value": "15569702000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.02}, {"name": "林业", "change_pct": 1.27}, {"name": "碳中和", "change_pct": 0.53}, {"name": "自贸区", "change_pct": 1.15}]}, {"code": "002866", "name": "传艺科技", "hot_rank": 58, "hot_rank_chg": -34, "stock_cnt": 5819, "price": "18.32", "change": "-1.45", "market_id": "33", "circulate_market_value": "3366646100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 59, "hot_rank_chg": -18, "stock_cnt": 5819, "price": "17.89", "change": "0.85", "market_id": "33", "circulate_market_value": "8192751500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 60, "hot_rank_chg": -37, "stock_cnt": 5819, "price": "47.17", "change": "-6.41", "market_id": "33", "circulate_market_value": "54127102000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600408", "name": "安泰集团", "hot_rank": 61, "hot_rank_chg": -6, "stock_cnt": 5819, "price": "3.78", "change": "9.88", "market_id": "17", "circulate_market_value": "3805704000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "焦炭", "xgb_concepts": [{"name": "煤炭", "change_pct": 1.27}, {"name": "钢铁", "change_pct": 0.75}, {"name": "煤化工", "change_pct": 1.69}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 62, "hot_rank_chg": 40, "stock_cnt": 5819, "price": "12.87", "change": "6.80", "market_id": "33", "circulate_market_value": "44760963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.86}, {"name": "人工智能", "change_pct": 1.57}, {"name": "VR&AR", "change_pct": 0.14}, {"name": "直播/短视频", "change_pct": 4.54}, {"name": "大数据", "change_pct": 2.32}, {"name": "教育", "change_pct": 2.32}, {"name": "百度概念股", "change_pct": 2.84}, {"name": "阿里巴巴概念股", "change_pct": 2.25}, {"name": "腾讯概念股", "change_pct": 2.5}, {"name": "传媒", "change_pct": 5.65}, {"name": "快手概念股", "change_pct": 5.23}, {"name": "NFT", "change_pct": 4.83}, {"name": "元宇宙", "change_pct": 2.51}, {"name": "虚拟数字人", "change_pct": 3.72}, {"name": "web3.0", "change_pct": 3.44}, {"name": "AIGC概念", "change_pct": 3.78}, {"name": "字节跳动概念股", "change_pct": 3.41}, {"name": "职业教育", "change_pct": 2.86}, {"name": "云游戏", "change_pct": 3.24}, {"name": "网红/MCN", "change_pct": 2.86}, {"name": "5G消息/RCS", "change_pct": 2.8}, {"name": "AI营销", "change_pct": 5.41}, {"name": "词元概念/Token", "change_pct": 2.71}, {"name": "华为产业链", "change_pct": 0.65}, {"name": "AI大模型/智能体", "change_pct": 2.38}, {"name": "AI视频", "change_pct": 4.58}, {"name": "智谱AI", "change_pct": 2.71}, {"name": "小红书概念股", "change_pct": 3.88}, {"name": "区块链", "change_pct": 2.73}]}, {"code": "002594", "name": "比亚迪", "hot_rank": 63, "hot_rank_chg": 9, "stock_cnt": 5819, "price": "84.95", "change": "3.95", "market_id": "33", "circulate_market_value": "296226490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600400", "name": "红豆股份", "hot_rank": 64, "hot_rank_chg": 42, "stock_cnt": 5819, "price": "3.98", "change": "9.95", "market_id": "17", "circulate_market_value": "9119660000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "牛散持股", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.57}, {"name": "筹码集中", "change_pct": 0.11}, {"name": "纺织服装", "change_pct": 1.24}, {"name": "机器人", "change_pct": -0.02}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "688137", "name": "近岸蛋白", "hot_rank": 65, "hot_rank_chg": 12, "stock_cnt": 5819, "price": "161.18", "change": "7.45", "market_id": "17", "circulate_market_value": "11269295100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000011", "name": "深物业A", "hot_rank": 66, "hot_rank_chg": -3, "stock_cnt": 5819, "price": "12.59", "change": "3.88", "market_id": "33", "circulate_market_value": "6628327100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.29}, {"name": "房地产", "change_pct": 0.15}, {"name": "粤港澳大湾区", "change_pct": 0.7}, {"name": "住房租赁", "change_pct": 0.27}, {"name": "物业管理", "change_pct": 0.34}, {"name": "新型城镇化", "change_pct": 0.03}, {"name": "旧改", "change_pct": 0.29}]}, {"code": "000725", "name": "京东方A", "hot_rank": 67, "hot_rank_chg": -3, "stock_cnt": 5819, "price": "5.50", "change": "0.00", "market_id": "33", "circulate_market_value": "194519240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.62}, {"name": "手机产业链", "change_pct": -1.24}, {"name": "超高清视频", "change_pct": 1.25}, {"name": "苹果产业链", "change_pct": -1.65}, {"name": "电竞", "change_pct": 2.7}, {"name": "半导体", "change_pct": -1.52}, {"name": "人工智能", "change_pct": 1.57}, {"name": "互联网医疗", "change_pct": 2.33}, {"name": "VR&AR", "change_pct": 0.14}, {"name": "OLED", "change_pct": -1.21}, {"name": "京津冀", "change_pct": 0.78}, {"name": "物联网", "change_pct": 0.72}, {"name": "指纹识别", "change_pct": -0.81}, {"name": "汽车零部件", "change_pct": 0.02}, {"name": "白马股", "change_pct": 0.6}, {"name": "智能制造", "change_pct": -0.04}, {"name": "小米概念股", "change_pct": -0.66}, {"name": "国产芯片", "change_pct": -0.57}, {"name": "液晶面板/LCD", "change_pct": -1.52}, {"name": "全息概念", "change_pct": 0.18}, {"name": "理想汽车概念股", "change_pct": 0.29}, {"name": "MicroLED", "change_pct": -1.91}, {"name": "钙钛矿电池", "change_pct": 0.02}, {"name": "智能手表", "change_pct": -0.72}, {"name": "MiniLED", "change_pct": -1.78}, {"name": "传感器", "change_pct": -0.22}, {"name": "大硅片", "change_pct": -1.13}, {"name": "AI PC", "change_pct": -1.06}, {"name": "华为产业链", "change_pct": 0.65}, {"name": "回购", "change_pct": 0.37}, {"name": "光电共封装CPO", "change_pct": -1.03}, {"name": "智能眼镜/MR头显", "change_pct": -0.56}, {"name": "玻璃基板封装", "change_pct": -2.86}]}, {"code": "300530", "name": "领湃科技", "hot_rank": 68, "hot_rank_chg": 12, "stock_cnt": 5819, "price": "28.90", "change": "20.02", "market_id": "33", "circulate_market_value": "4969394100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "储能电池"}, {"code": "603823", "name": "百合花", "hot_rank": 69, "hot_rank_chg": -12, "stock_cnt": 5819, "price": "41.93", "change": "-10.00", "market_id": "17", "circulate_market_value": "17458298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605366", "name": "宏柏新材", "hot_rank": 70, "hot_rank_chg": -14, "stock_cnt": 5819, "price": "9.94", "change": "-9.96", "market_id": "17", "circulate_market_value": "7681907300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有机硅", "change_pct": 2.89}, {"name": "气凝胶", "change_pct": 0.34}, {"name": "光纤概念", "change_pct": -1.25}]}, {"code": "300182", "name": "捷成股份", "hot_rank": 71, "hot_rank_chg": 140, "stock_cnt": 5819, "price": "5.56", "change": "10.98", "market_id": "33", "circulate_market_value": "13425199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": 3.71}, {"name": "超高清视频", "change_pct": 1.25}, {"name": "股权转让", "change_pct": 0.68}, {"name": "人工智能", "change_pct": 1.57}, {"name": "VR&AR", "change_pct": 0.14}, {"name": "军民融合", "change_pct": -0.16}, {"name": "影视", "change_pct": 7.39}, {"name": "直播/短视频", "change_pct": 4.54}, {"name": "大数据", "change_pct": 2.32}, {"name": "教育", "change_pct": 2.32}, {"name": "军工", "change_pct": -0.26}, {"name": "数字经济", "change_pct": 2.2}, {"name": "知识产权", "change_pct": 5.52}, {"name": "阿里巴巴概念股", "change_pct": 2.25}, {"name": "腾讯概念股", "change_pct": 2.5}, {"name": "快手概念股", "change_pct": 5.23}, {"name": "NFT", "change_pct": 4.83}, {"name": "元宇宙", "change_pct": 2.51}, {"name": "虚拟数字人", "change_pct": 3.72}, {"name": "AIGC概念", "change_pct": 3.78}, {"name": "数据要素", "change_pct": 3.23}, {"name": "字节跳动概念股", "change_pct": 3.41}, {"name": "教育信息化", "change_pct": 2.37}, {"name": "在线教育", "change_pct": 2.05}, {"name": "华为产业链", "change_pct": 0.65}, {"name": "ChatGPT", "change_pct": 3.66}, {"name": "AI大模型/智能体", "change_pct": 2.38}, {"name": "短剧/互动影游", "change_pct": 6.92}, {"name": "多模态", "change_pct": 3.4}, {"name": "AI视频", "change_pct": 4.58}, {"name": "华为盘古", "change_pct": 2.47}, {"name": "IP经济/谷子经济", "change_pct": 3.4}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 72, "hot_rank_chg": 63, "stock_cnt": 5819, "price": "7.37", "change": "5.29", "market_id": "33", "circulate_market_value": "11990944200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.86}, {"name": "电竞", "change_pct": 2.7}, {"name": "手游", "change_pct": 3.53}, {"name": "强势人气股", "change_pct": 0.87}, {"name": "人工智能", "change_pct": 1.57}, {"name": "游戏", "change_pct": 4.35}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.2}, {"name": "腾讯概念股", "change_pct": 2.5}, {"name": "快手概念股", "change_pct": 5.23}, {"name": "元宇宙", "change_pct": 2.51}, {"name": "虚拟数字人", "change_pct": 3.72}, {"name": "东数西算/算力", "change_pct": 0.89}, {"name": "web3.0", "change_pct": 3.44}, {"name": "AIGC概念", "change_pct": 3.78}, {"name": "数据要素", "change_pct": 3.23}, {"name": "字节跳动概念股", "change_pct": 3.41}, {"name": "AI营销", "change_pct": 5.41}, {"name": "ChatGPT", "change_pct": 3.66}, {"name": "智能眼镜/MR头显", "change_pct": -0.56}, {"name": "AI大模型/智能体", "change_pct": 2.38}, {"name": "人形机器人", "change_pct": -0.32}, {"name": "短剧/互动影游", "change_pct": 6.92}, {"name": "多模态", "change_pct": 3.4}, {"name": "AI视频", "change_pct": 4.58}, {"name": "IP经济/谷子经济", "change_pct": 3.4}, {"name": "小红书概念股", "change_pct": 3.88}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 73, "hot_rank_chg": -28, "stock_cnt": 5819, "price": "326.46", "change": "-2.37", "market_id": "17", "circulate_market_value": "218962710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601519", "name": "大智慧", "hot_rank": 74, "hot_rank_chg": 93, "stock_cnt": 5819, "price": "9.17", "change": "9.95", "market_id": "17", "circulate_market_value": "18240597000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "互联网金融", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.18}, {"name": "国产软件", "change_pct": 2.97}, {"name": "金融科技", "change_pct": 3.49}, {"name": "直播/短视频", "change_pct": 4.54}, {"name": "大数据", "change_pct": 2.32}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 75, "hot_rank_chg": 13, "stock_cnt": 5819, "price": "87.86", "change": "2.51", "market_id": "33", "circulate_market_value": "57373239000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 76, "hot_rank_chg": -6, "stock_cnt": 5819, "price": "157.80", "change": "-2.59", "market_id": "17", "circulate_market_value": "390283620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605136", "name": "丽人丽妆", "hot_rank": 77, "hot_rank_chg": 55, "stock_cnt": 5819, "price": "9.44", "change": "10.02", "market_id": "17", "circulate_market_value": "3780328200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "化妆品电商", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.86}, {"name": "新零售", "change_pct": 3.52}, {"name": "优化生育（三孩）", "change_pct": 2.04}, {"name": "阿里巴巴概念股", "change_pct": 2.25}, {"name": "预制菜", "change_pct": 1.56}, {"name": "化妆品", "change_pct": 1.42}]}, {"code": "600621", "name": "华鑫股份", "hot_rank": 78, "hot_rank_chg": 59, "stock_cnt": 5819, "price": "14.48", "change": "10.03", "market_id": "17", "circulate_market_value": "15361822000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "证券经纪"}, {"code": "000420", "name": "吉林化纤", "hot_rank": 79, "hot_rank_chg": 83, "stock_cnt": 5819, "price": "3.81", "change": "10.12", "market_id": "33", "circulate_market_value": "9367934100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "碳纤维", "xgb_concepts": [{"name": "粘胶短纤", "change_pct": 3.13}, {"name": "大飞机", "change_pct": -0.42}, {"name": "风电", "change_pct": -0.92}, {"name": "碳纤维", "change_pct": -0.17}, {"name": "振兴东北", "change_pct": 1.71}, {"name": "飞行汽车/eVTOL", "change_pct": 0.07}, {"name": "低空经济", "change_pct": 0.01}]}, {"code": "300207", "name": "欣旺达", "hot_rank": 80, "hot_rank_chg": -11, "stock_cnt": 5819, "price": "20.66", "change": "-3.91", "market_id": "33", "circulate_market_value": "35409706000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 81, "hot_rank_chg": -6, "stock_cnt": 5819, "price": "40.28", "change": "1.72", "market_id": "17", "circulate_market_value": "19312786000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 82, "hot_rank_chg": 94, "stock_cnt": 5819, "price": "4.30", "change": "4.37", "market_id": "33", "circulate_market_value": "25175627000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.57}, {"name": "人工智能", "change_pct": 1.57}, {"name": "云计算数据中心", "change_pct": 0.31}, {"name": "水利", "change_pct": 0.4}, {"name": "直播/短视频", "change_pct": 4.54}, {"name": "大数据", "change_pct": 2.32}, {"name": "园林", "change_pct": -0.73}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.66}, {"name": "数字经济", "change_pct": 2.2}, {"name": "腾讯概念股", "change_pct": 2.5}, {"name": "理想汽车概念股", "change_pct": 0.29}, {"name": "第三代半导体", "change_pct": -1.65}, {"name": "快手概念股", "change_pct": 5.23}, {"name": "IGBT", "change_pct": -0.3}, {"name": "虚拟数字人", "change_pct": 3.72}, {"name": "AIGC概念", "change_pct": 3.78}, {"name": "字节跳动概念股", "change_pct": 3.41}, {"name": "氮化镓", "change_pct": -1.57}, {"name": "AI营销", "change_pct": 5.41}, {"name": "华为产业链", "change_pct": 0.65}, {"name": "AI大模型/智能体", "change_pct": 2.38}, {"name": "多模态", "change_pct": 3.4}, {"name": "液冷服务器", "change_pct": -1.1}, {"name": "小红书概念股", "change_pct": 3.88}, {"name": "区块链", "change_pct": 2.73}]}, {"code": "002185", "name": "华天科技", "hot_rank": 83, "hot_rank_chg": -12, "stock_cnt": 5819, "price": "15.85", "change": "-1.12", "market_id": "33", "circulate_market_value": "52717521000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001389", "name": "广合科技", "hot_rank": 84, "hot_rank_chg": 202, "stock_cnt": 5819, "price": "154.50", "change": "-7.49", "market_id": "33", "circulate_market_value": "23541875000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600737", "name": "中粮糖业", "hot_rank": 85, "hot_rank_chg": 35, "stock_cnt": 5819, "price": "15.61", "change": "3.24", "market_id": "17", "circulate_market_value": "33387421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 86, "hot_rank_chg": 4, "stock_cnt": 5819, "price": "28.99", "change": "0.31", "market_id": "17", "circulate_market_value": "709333630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 87, "hot_rank_chg": -13, "stock_cnt": 5819, "price": "62.74", "change": "0.22", "market_id": "17", "circulate_market_value": "112267870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 88, "hot_rank_chg": -36, "stock_cnt": 5819, "price": "10.76", "change": "-6.11", "market_id": "17", "circulate_market_value": "19251128000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.44}, {"name": "纯碱", "change_pct": 0.86}, {"name": "食品", "change_pct": 1.58}, {"name": "土壤修复", "change_pct": 0.15}, {"name": "东数西算/算力", "change_pct": 0.89}, {"name": "OpenClaw概念", "change_pct": 1.53}, {"name": "DeepSeek概念股", "change_pct": 2.06}]}, {"code": "600667", "name": "太极实业", "hot_rank": 89, "hot_rank_chg": -28, "stock_cnt": 5819, "price": "16.32", "change": "-1.39", "market_id": "17", "circulate_market_value": "34133968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 90, "hot_rank_chg": 50, "stock_cnt": 5819, "price": "25.49", "change": "10.01", "market_id": "33", "circulate_market_value": "19576889000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "减肥药"}, {"code": "300502", "name": "新易盛", "hot_rank": 91, "hot_rank_chg": -24, "stock_cnt": 5819, "price": "370.20", "change": "-2.19", "market_id": "33", "circulate_market_value": "464498730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600478", "name": "科力远", "hot_rank": 92, "hot_rank_chg": 56, "stock_cnt": 5819, "price": "5.10", "change": "9.91", "market_id": "17", "circulate_market_value": "8638986500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.57}, {"name": "锂电池", "change_pct": 0.36}, {"name": "共享经济", "change_pct": 1.58}, {"name": "氢能源/燃料电池", "change_pct": 0.18}, {"name": "新能源汽车", "change_pct": 0.03}, {"name": "储能", "change_pct": -0.02}, {"name": "固态电池", "change_pct": 0.71}, {"name": "动力电池回收", "change_pct": 1.37}, {"name": "超级电容", "change_pct": 0.26}, {"name": "RWA", "change_pct": 3.36}, {"name": "锂矿/碳酸锂", "change_pct": 1.93}]}, {"code": "300133", "name": "华策影视", "hot_rank": 93, "hot_rank_chg": 212, "stock_cnt": 5819, "price": "8.38", "change": "10.85", "market_id": "33", "circulate_market_value": "13944323000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "VR&AR", "change_pct": 0.14}, {"name": "影视", "change_pct": 7.39}, {"name": "大数据", "change_pct": 2.32}, {"name": "教育", "change_pct": 2.32}, {"name": "动漫", "change_pct": 7.03}, {"name": "独角兽", "change_pct": 0.85}, {"name": "知识产权", "change_pct": 5.52}, {"name": "百度概念股", "change_pct": 2.84}, {"name": "腾讯概念股", "change_pct": 2.5}, {"name": "NFT", "change_pct": 4.83}, {"name": "元宇宙", "change_pct": 2.51}, {"name": "虚拟数字人", "change_pct": 3.72}, {"name": "AIGC概念", "change_pct": 3.78}, {"name": "网红/MCN", "change_pct": 2.86}, {"name": "华为产业链", "change_pct": 0.65}, {"name": "智能眼镜/MR头显", "change_pct": -0.56}, {"name": "AI大模型/智能体", "change_pct": 2.38}, {"name": "短剧/互动影游", "change_pct": 6.92}, {"name": "多模态", "change_pct": 3.4}, {"name": "AI视频", "change_pct": 4.58}, {"name": "Kimi概念", "change_pct": 5.26}, {"name": "智谱AI", "change_pct": 2.71}, {"name": "IP经济/谷子经济", "change_pct": 3.4}]}, {"code": "001300", "name": "三柏硕", "hot_rank": 94, "hot_rank_chg": 36, "stock_cnt": 5819, "price": "14.86", "change": "9.99", "market_id": "33", "circulate_market_value": "3622510100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "蹦床"}, {"code": "605287", "name": "德才股份", "hot_rank": 95, "hot_rank_chg": 138, "stock_cnt": 5819, "price": "40.18", "change": "9.99", "market_id": "17", "circulate_market_value": "5625200000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI漫剧"}, {"code": "300418", "name": "昆仑万维", "hot_rank": 96, "hot_rank_chg": 114, "stock_cnt": 5819, "price": "41.15", "change": "7.27", "market_id": "33", "circulate_market_value": "48328934000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 97, "hot_rank_chg": -24, "stock_cnt": 5819, "price": "23.20", "change": "-7.46", "market_id": "33", "circulate_market_value": "8706588800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600865", "name": "百大集团", "hot_rank": 98, "hot_rank_chg": -12, "stock_cnt": 5819, "price": "11.51", "change": "10.04", "market_id": "17", "circulate_market_value": "4330526000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业零售", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.87}, {"name": "物业管理", "change_pct": 0.34}, {"name": "免税店概念", "change_pct": 2.2}, {"name": "地摊经济", "change_pct": 2.44}]}, {"code": "002531", "name": "天顺风能", "hot_rank": 99, "hot_rank_chg": -2, "stock_cnt": 5819, "price": "7.52", "change": "-9.94", "market_id": "33", "circulate_market_value": "13437252000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "海工装备", "change_pct": -1.28}, {"name": "风电", "change_pct": -0.92}, {"name": "船舶", "change_pct": -2.05}]}, {"code": "002565", "name": "顺灏股份", "hot_rank": 100, "hot_rank_chg": -51, "stock_cnt": 5819, "price": "9.44", "change": "1.72", "market_id": "33", "circulate_market_value": "10005976800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": 2.11}, {"name": "电子烟", "change_pct": 0.45}, {"name": "一带一路", "change_pct": 0.24}, {"name": "造纸", "change_pct": 0.26}, {"name": "包装印刷", "change_pct": 0.23}, {"name": "卫星互联网", "change_pct": -0.73}, {"name": "回购", "change_pct": 0.37}, {"name": "太空算力", "change_pct": -1.17}]}];
const LIMIT_UP_POOL = [{"code": "603398", "name": "*ST沐邦", "price": 8.56, "change_pct": 10.03, "reason": "公司预重整迎新进展，11家财务投资人拟15.88亿元认购股份", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.91, "first_limit_up": 1791526955, "break_limit_up_times": 1}, {"code": "601519", "name": "大智慧", "price": 9.17, "change_pct": 9.95, "reason": "公司是互联网金融信息服务综合提供商，，正在推进湘财股份换股吸收合并事项", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 4.85, "first_limit_up": 1791523215, "break_limit_up_times": 1}, {"code": "002343", "name": "慈文传媒", "price": 6.08, "change_pct": 9.95, "reason": "公司核心影视业务主要包括影视剧的投资、制作及发行业务，推动《武林外史》《圆月弯刀》《多情剑客无情剑》等五部微短剧开发制作；互动剧方面，公司已与互影科技签署了战略框架合作协议，双方将利用AI联合研发改编经典IP衍生互动剧", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 5.11, "first_limit_up": 1791526674, "break_limit_up_times": 2}, {"code": "002242", "name": "九阳股份", "price": 15.13, "change_pct": 10.04, "reason": "豆浆机龙头；公司表示与华为不存在市场传闻所称的战略合作关系", "plates": ["大消费"], "limit_up_days": 5, "turnover_ratio": 18.28, "first_limit_up": 1791509427, "break_limit_up_times": 6}, {"code": "603232", "name": "格尔软件", "price": 16.98, "change_pct": 9.97, "reason": "1、公司“格尔AI大模型应用安全护栏系统”成为首个通过中国信通院大模型安全围栏能力评估的系统，并前瞻性地为AI智能体构建“数字身份与信任体系”；\n2、公司已加入上海鲲鹏生态联盟，投资的上海泓格后量子科技有限公司致力于抗量子密码领域技术研究、标准制定、产品研发，在政务、金融、军队等领域开展试点、和应用推广工作", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 10.83, "first_limit_up": 1791525896, "break_limit_up_times": 0}, {"code": "000736", "name": "中交发展", "price": 5.21, "change_pct": 9.92, "reason": "中交房地产集团控股的上市平台，当前主营业务聚焦 “物业管理 + 资产管理与运营” 双轮驱动", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.59, "first_limit_up": 1791527562, "break_limit_up_times": 0}, {"code": "000420", "name": "吉林化纤", "price": 3.81, "change_pct": 10.12, "reason": "全球优质的粘胶长丝供应商之一；公司碳纤维材料可用于机器人制造", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.76, "first_limit_up": 1791522939, "break_limit_up_times": 1}, {"code": "603838", "name": "*ST四通", "price": 12.95, "change_pct": 10.03, "reason": "新型家居生活陶瓷供应商，外贸收入占比近8成", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.34, "first_limit_up": 1791525010, "break_limit_up_times": 4}, {"code": "600621", "name": "华鑫股份", "price": 14.48, "change_pct": 10.03, "reason": "旗下华鑫证券属A级券商，拥有营业网点超80家", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 4.72, "first_limit_up": 1791522962, "break_limit_up_times": 0}, {"code": "000710", "name": "贝瑞基因", "price": 11.3, "change_pct": 10.03, "reason": "公司自主研发了 NLPearl 遗传疾病人工智能临床决策支持系统、CNVisi 智能报告解读系统，为科研和临床工作者提供智能决策支持", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 22.86, "first_limit_up": 1791525732, "break_limit_up_times": 0}, {"code": "605058", "name": "澳弘电子", "price": 53.35, "change_pct": 10.0, "reason": "公司拟3.3亿元投建高端PCB定制化生产基地，产品以高性能、高可靠性的多层铝基盲孔板、阶梯槽PCB、热电分离铜基板、microled板、高多层厚铜板、多层特种线圈板、高频雷达板等高端定制化PCB产品为主", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 14.82, "first_limit_up": 1791527912, "break_limit_up_times": 0}, {"code": "002692", "name": "远程股份", "price": 4.76, "change_pct": 9.93, "reason": "1、无锡国资委旗下；公司的电力电缆、控制电缆、防火电缆等产品可应用于数据中心领域；\n2、公司拟与新鼎纪元基金、苏新投资共同投资江苏新纪元半导体有限公司，其中新鼎纪元基金拟投资5.1亿元，苏新投资拟投资1亿元，远程股份拟投资5000万元", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.39, "first_limit_up": 1791509508, "break_limit_up_times": 0}, {"code": "001300", "name": "三柏硕", "price": 14.86, "change_pct": 9.99, "reason": "公司主营休闲运动和健身器材，拥有蹦床等31个系列千余款产品，为迪卡侬等国际品牌代工", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 3.41, "first_limit_up": 1791509418, "break_limit_up_times": 0}, {"code": "688152", "name": "麒麟信安", "price": 45.85, "change_pct": 19.99, "reason": "公司以操作系统为根技术，形成了 “操作系统-云计算-信息安全” 产品体系", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 11.24, "first_limit_up": 1791526550, "break_limit_up_times": 0}, {"code": "603101", "name": "汇嘉时代", "price": 7.99, "change_pct": 10.06, "reason": "新疆地区百货商超零售连锁企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.99, "first_limit_up": 1791513394, "break_limit_up_times": 2}, {"code": "002480", "name": "新筑股份", "price": 6, "change_pct": 10.09, "reason": "公司拟购买蜀道清洁能源60%股权、出售轨交相关资产的重大重组已获四川省国资委批准，尚需深交所审核及证监会注册", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 6.4, "first_limit_up": 1791515865, "break_limit_up_times": 6}, {"code": "600371", "name": "万向德农", "price": 14.97, "change_pct": 9.99, "reason": "公司主要从事玉米杂交种子的研产销，单倍体育种技术领先", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 22.35, "first_limit_up": 1791512445, "break_limit_up_times": 1}, {"code": "300413", "name": "芒果超媒", "price": 23, "change_pct": 19.98, "reason": "由公司出品、芒果TV AIGC创新内容中心制作、伯璟文化承制，Seedance 2.0、Seedance 2.5 提供AI技术支持的神话题材季播剧《后西游记》第一季“花果山篇”将于8月31日在芒果TV上线", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 11.17, "first_limit_up": 1791526653, "break_limit_up_times": 1}, {"code": "600127", "name": "金健米业", "price": 15.18, "change_pct": 10.0, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 31.47, "first_limit_up": 1791510639, "break_limit_up_times": 2}, {"code": "002979", "name": "雷赛智能", "price": 55.58, "change_pct": 9.99, "reason": "国内智能装备运动控制领域龙头", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.91, "first_limit_up": 1791527205, "break_limit_up_times": 0}, {"code": "600354", "name": "敦煌种业", "price": 9.99, "change_pct": 10.02, "reason": "公司主营各类农作物种子的研发、生产、加工和销售", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 23.67, "first_limit_up": 1791522936, "break_limit_up_times": 0}, {"code": "000546", "name": "金圆股份", "price": 4.77, "change_pct": 9.91, "reason": "公司新能源材料业务构建了上游锂资源开采提炼、下游废旧锂电池回收利用为一体的循环经济体系，已在国内西藏地区，海外阿根廷卡塔马卡省、萨尔塔省布局锂资源；西藏捌千错项目完成了年产2000吨碳酸锂产线的建设", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 3.59, "first_limit_up": 1791514248, "break_limit_up_times": 0}, {"code": "605136", "name": "丽人丽妆", "price": 9.44, "change_pct": 10.02, "reason": "国内领先化妆品网络零售服务商，推出了“千金极光饮”产品，同步搭配白番茄浓缩粉、麦角硫因、胶原三肽等科技成分，养出“千金白”", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.26, "first_limit_up": 1791509595, "break_limit_up_times": 0}, {"code": "002082", "name": "ST万邦", "price": 12.85, "change_pct": 10.02, "reason": "国内拥有药品剂型较多的制药企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.78, "first_limit_up": 1791525609, "break_limit_up_times": 2}, {"code": "600400", "name": "红豆股份", "price": 3.98, "change_pct": 9.94, "reason": "公司主营业务为男装的生产与销售，投资智能养老机器人项目，布局“人工智能+居家养老”领域", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 8.51, "first_limit_up": 1791528372, "break_limit_up_times": 0}, {"code": "300369", "name": "绿盟科技", "price": 10.43, "change_pct": 20.02, "reason": "1、公司积极拓展云安全市场，围绕运营商公有云的安全原子能力打磨云安全产品技术硬实力；\n2、公司迭代“风云卫”AI安全能力平台并推出AI安全一体机“清风卫”，构建“评估-防护-响应”全栈AI安全体系，清风卫产品获公安三所“大模型安全防护围栏”认证", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 13.07, "first_limit_up": 1791522309, "break_limit_up_times": 0}, {"code": "605287", "name": "德才股份", "price": 40.18, "change_pct": 9.99, "reason": "1、控股孙公司奇想无限作为漫剧制作以及提出AIGC领域智能体一站式解决方案的团队，受邀参与火山引擎大模型游戏+漫剧 AI 工坊”广州企业沙龙；\n2、公司主营业务涵盖内装装饰工程、建筑幕墙工程、智能化工程、古建筑工程等", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 6.61, "first_limit_up": 1791524364, "break_limit_up_times": 0}, {"code": "603533", "name": "掌阅科技", "price": 25.44, "change_pct": 9.99, "reason": "1、字节跳动参股，数字阅读行业龙头；公司已接入国内AI创业公司月之暗面旗下AI对话助手产品Kimi；\n2、公司推出海外短剧平台iDrama，现已上线数千部短剧作品，英语、日语、韩语、西班牙语、葡萄牙语等多语种版本", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 8.39, "first_limit_up": 1791526143, "break_limit_up_times": 0}, {"code": "002733", "name": "雄韬股份", "price": 20.78, "change_pct": 10.01, "reason": "公司自主生产磷酸铁锂系列锂电池电芯及电池系统，产品主要面向 AI 数据中心 UPS 备电、通信基站、工商业储能、工业车辆动力场景", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 5.71, "first_limit_up": 1791509463, "break_limit_up_times": 0}, {"code": "605177", "name": "东亚药业", "price": 28.29, "change_pct": 9.99, "reason": "公司主营医药及中间体，产品主要涵盖抗细菌类药物(β-内酰胺类和喹诺酮类)、皮肤用抗真菌药物等领域", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 13.36, "first_limit_up": 1791523832, "break_limit_up_times": 0}, {"code": "600825", "name": "新华传媒", "price": 12.53, "change_pct": 10.01, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组"], "limit_up_days": 9, "turnover_ratio": 4.78, "first_limit_up": 1791509100, "break_limit_up_times": 0}, {"code": "300981", "name": "中红医疗", "price": 23.36, "change_pct": 19.98, "reason": "国内最早生产并销售PVC手套和丁腈手套的企业之一", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.91, "first_limit_up": 1791514020, "break_limit_up_times": 1}, {"code": "001330", "name": "博纳影业", "price": 6.97, "change_pct": 9.94, "reason": "公司首部AI超写实院线电影《三星堆：未来往事》正式定档2026年10月23日登陆全国院线", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 20.92, "first_limit_up": 1791526575, "break_limit_up_times": 1}, {"code": "002696", "name": "百洋股份", "price": 7.32, "change_pct": 10.08, "reason": "公司为全球加工规模最大、国内领先的罗非鱼食品综合提供商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.18, "first_limit_up": 1791526932, "break_limit_up_times": 0}, {"code": "603067", "name": "振华股份", "price": 42.31, "change_pct": 10.01, "reason": "公司为全球产能最大、产品线最全的铬化学品龙头，金属铬产品在高温合金、铜基、铝基特种合金、高端焊接材料、溅射靶材等领域广泛应用，高温合金是燃气轮机的主要材料，单质铬的添加量在15%~20%之间", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.51, "first_limit_up": 1791522672, "break_limit_up_times": 1}, {"code": "601811", "name": "新华文轩", "price": 20.91, "change_pct": 9.99, "reason": "四川省出版传媒行业龙头，省内义务教育阶段学生教科书唯一供货方", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 7.47, "first_limit_up": 1791509519, "break_limit_up_times": 3}, {"code": "000892", "name": "欢瑞世纪", "price": 4.85, "change_pct": 9.98, "reason": "1、公司与阶跃星辰共建“麟跃”AI联合实验室，已上线基于IP《十州三境》的首支AI短剧先导概念片，并持续推进AIGC在短剧、互动剧、漫剧等场景落地；\n2、公司通过与明略科技、阶跃星辰合作，用 AI 算法优化短剧投流渠道 / 素材 / 出价、社媒智能运营与 AIGC 营销素材生成，聚焦影视内容精准推广与降本增效", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 18.83, "first_limit_up": 1791525798, "break_limit_up_times": 0}, {"code": "603155", "name": "新亚强", "price": 15.43, "change_pct": 9.98, "reason": "公司专业从事有机硅精细化学品的研产销，配套用于平板显示、电子、半导体、芯片等相关领域的电子级六甲基二硅氮烷产品，已向国内多家半导体客户提供产品服务，并在部分主要应用端实现进口产品的替代", "plates": ["有机硅"], "limit_up_days": 1, "turnover_ratio": 6.5, "first_limit_up": 1791510018, "break_limit_up_times": 2}, {"code": "605577", "name": "龙版传媒", "price": 16.2, "change_pct": 9.98, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 8.72, "first_limit_up": 1791524680, "break_limit_up_times": 0}, {"code": "600408", "name": "安泰集团", "price": 3.78, "change_pct": 9.88, "reason": "山西省焦化行业龙头企业之一，H型钢与焦炭双主业", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 20.91, "first_limit_up": 1791513797, "break_limit_up_times": 0}, {"code": "300530", "name": "领湃科技", "price": 28.9, "change_pct": 20.02, "reason": "1、公司已经完成了NCM811电池化学体系研发，固态电解质及固态电池、干法电极及其制备技术的基础试验，相关专利正在申请或已获得授权；\n2、公司产品类别覆盖电芯、模组、系统集成，量产的产品是磷酸铁锂135Ah产品", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 15.04, "first_limit_up": 1791510867, "break_limit_up_times": 4}, {"code": "600882", "name": "妙可蓝多", "price": 21.13, "change_pct": 9.99, "reason": "国内奶酪龙头，预计前三季度营收和净利润同比增幅均超20%", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.07, "first_limit_up": 1791522363, "break_limit_up_times": 0}, {"code": "002805", "name": "丰元股份", "price": 19.44, "change_pct": 10.02, "reason": "公司与中科院青能所共同成立了中科丰元研究院，在固态电池正极材料方面有相应研发布局并持续投入研发", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 11.36, "first_limit_up": 1791509781, "break_limit_up_times": 1}, {"code": "300821", "name": "东岳硅材", "price": 17.15, "change_pct": 20.01, "reason": "中国有机硅行业中生产规模最大的企业之一，预告前三季度净利润预增超190倍", "plates": ["有机硅", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 12.56, "first_limit_up": 1791509919, "break_limit_up_times": 1}, {"code": "605399", "name": "晨光新材", "price": 13.06, "change_pct": 10.03, "reason": "1、公司铜陵“年产30万吨功能性硅烷项目”规划气凝胶产能5000吨，宁夏中卫规划“年产30万吨硅基及气凝胶新材料项目”，主要生产三氯氢硅、正硅酸乙酯、乙烯基硅烷、苯基硅烷和气凝胶材料；\n2、在太阳能相关应用中，三氯氢硅可用于多晶硅制造，偶联剂产品可用于EVA、POE胶膜，以提升使用寿命，也可用于光伏组件中背板的密封胶、灌封胶中", "plates": ["有机硅"], "limit_up_days": 1, "turnover_ratio": 1.95, "first_limit_up": 1791509722, "break_limit_up_times": 0}, {"code": "002317", "name": "众生药业", "price": 25.49, "change_pct": 10.01, "reason": "公司自研MASH新药ZSP1601片IIb期临床试验初步结果积极", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.43, "first_limit_up": 1791526095, "break_limit_up_times": 0}, {"code": "600207", "name": "安彩高科", "price": 5.6, "change_pct": 10.02, "reason": "公司具备太阳能光伏玻璃原片、钢化片、镀膜片全产品链的生产能力", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.53, "first_limit_up": 1791509700, "break_limit_up_times": 1}, {"code": "600715", "name": "文投控股", "price": 1.76, "change_pct": 10.0, "reason": "公司影院业务推行“一店一策”创新和“影院+”业态，探索VR观影提升非票房收入，五棵松旗舰店为全国单店票房冠军；上半年净利润同比扭亏为盈", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1791527380, "break_limit_up_times": 3}, {"code": "600865", "name": "百大集团", "price": 11.51, "change_pct": 10.04, "reason": "公司主要从事百货零售、酒店服务、物业管理业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.85, "first_limit_up": 1791522327, "break_limit_up_times": 0}, {"code": "601566", "name": "九牧王", "price": 10.14, "change_pct": 9.98, "reason": "公司位于福建厦门市，是国内男裤龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.0, "first_limit_up": 1791524293, "break_limit_up_times": 0}, {"code": "002212", "name": "天融信", "price": 7.56, "change_pct": 10.04, "reason": "1、公司作为腾讯生态合作伙伴，已使用WorkBuddy、CodeBuddy，与腾讯在威胁情报、大模型安全、云安全等多方向展开深度合作；\n2、公司参与的数字货币相关网络安全国家/行业标准主要有《信息安全技术 区块链信息服务安全规范》《公钥密码应用技术体系框架规范》《动态口令密码应用技术规范》《信息安全技术 传输层密码协议（TLCP）》《金融数据安全 数据生命周期安全规范》《金融行业网络安全等级保护测评指南》等", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 10.56, "first_limit_up": 1791522486, "break_limit_up_times": 0}, {"code": "601929", "name": "吉视传媒", "price": 2.5, "change_pct": 10.13, "reason": "1、吉林有线网络运营商，公司旗下影院公司开有影城，基于吉林台海量广播电视媒资资源及来画公司布局AI视频和可视化AI智能体；\n2、公司一直在开展和谋划数据服务业务，例如为政企客户提供机柜租赁服务、大数据云计算服务，政府云（吉林祥云）及多个行业云平台都部署在公司", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 5.72, "first_limit_up": 1791525385, "break_limit_up_times": 0}, {"code": "600812", "name": "华北制药", "price": 6.03, "change_pct": 10.04, "reason": "公司是我国最大的抗生素、维生素生产基地之一，产品主要是维生素C和维生素B12", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 6.75, "first_limit_up": 1791509458, "break_limit_up_times": 0}, {"code": "001336", "name": "楚环科技", "price": 22.72, "change_pct": 10.02, "reason": "公司拟与礼瀚投资等签署合伙协议，共同投资“瀚智科”，后者投资范围包括但不限于半导体、新能源、航空航天、新材料等行业优质标的股权和/或合伙份额", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 24.13, "first_limit_up": 1791509850, "break_limit_up_times": 1}, {"code": "601595", "name": "上海电影", "price": 24.74, "change_pct": 10.0, "reason": "公司拥有“专业发行+综合院线+高端影院”完整电影发行放映产业链，控股股东上海电影集团已于前期在上海影视乐园启动真人互动剧游项目，相关剧本策划、演员统筹、投资测算正在积极推进中；旗下的大IP开发主体上影元与互影科技、阅文集团等联合出品了首个双人互动影游项目《谍影成双》", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 2.8, "first_limit_up": 1791525146, "break_limit_up_times": 0}, {"code": "603096", "name": "新经典", "price": 17.33, "change_pct": 10.03, "reason": "公司打造了“bibi 动物园”和“极简史”两大重点IP，推出相关漫画、图书、盲盒手办、日历、文创产品，“bibi 动物园”的礼盒也在国内各电商平台销售", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 2.8, "first_limit_up": 1791525635, "break_limit_up_times": 0}, {"code": "002058", "name": "紫竹高科", "price": 24.44, "change_pct": 9.99, "reason": "1、公司核心业务聚焦于铝塑膜业务及汽车检具业务，铝塑膜是软包锂电池电芯封装的关键材料，下游主要应用于3C消费电子、动力、储能三类软包电池；\n2、公司具备《民用核安全电气设备设计许可证》和《民用核安全电气设备制造许可证》，为福清/方家山核电站供货核级压力变送器；公司有能力生产核级的仪器仪表产品", "plates": ["锂电池"], "limit_up_days": 4, "turnover_ratio": 2.88, "first_limit_up": 1791509100, "break_limit_up_times": 0}, {"code": "605188", "name": "国光连锁", "price": 13.84, "change_pct": 10.02, "reason": "江西省商贸流通行业首家上市企业，主营连锁超市、百货商场的运营业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.6, "first_limit_up": 1791522616, "break_limit_up_times": 0}, {"code": "601086", "name": "国芳集团", "price": 14.94, "change_pct": 10.01, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.56, "first_limit_up": 1791512167, "break_limit_up_times": 0}, {"code": "002811", "name": "郑中设计", "price": 18.4, "change_pct": 9.98, "reason": "室内设计领域的国际领先企业之一；公司已完成对深迪半导体的战略入股并成为第一大股东，切入MEMS陀螺仪芯片及惯性测量单元IMU的研发与设计赛道，布局第二增长曲线", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.3, "first_limit_up": 1791524286, "break_limit_up_times": 3}, {"code": "605168", "name": "三人行", "price": 52.1, "change_pct": 10.01, "reason": "公司与科通技术签署战略合作并投资，科通为NVIDIA中国区总代理，保障公司算力中心GPU硬件需求，并拟2.8亿元在青海设全资子公司青海三人行绿能智算科技有限公司，主营算力租赁及数据中心业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.1, "first_limit_up": 1791527220, "break_limit_up_times": 8}, {"code": "601069", "name": "西部黄金", "price": 26.55, "change_pct": 9.98, "reason": "西北地区最大的黄金采选冶企业", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 3.17, "first_limit_up": 1791522854, "break_limit_up_times": 0}, {"code": "600478", "name": "科力远", "price": 5.1, "change_pct": 9.91, "reason": "公司同安矿区完成矿证变更，年采选规模由5万吨扩至40万吨，对应年产1万吨碳酸锂，原料自给率提升", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 3.62, "first_limit_up": 1791509869, "break_limit_up_times": 1}, {"code": "600629", "name": "华建集团", "price": 18.02, "change_pct": 10.01, "reason": "公司旗下上海科技创业投资有限公司持有上海微电子装备（集团）股份有限公司13.275%股权", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.08, "first_limit_up": 1791511882, "break_limit_up_times": 0}, {"code": "601118", "name": "海南橡胶", "price": 7.16, "change_pct": 9.98, "reason": "中国天然橡胶产业龙头，拥有341万亩橡胶园（国内第一）、20家橡胶基地分公司", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 6.64, "first_limit_up": 1791528756, "break_limit_up_times": 0}, {"code": "600241", "name": "时代万恒", "price": 11.76, "change_pct": 10.01, "reason": "控股子公司九夷锂能主营业务为锂电池的研产销，拥有国内领先的圆柱形锂电池全自动化产线，目标市场定位于高端电动工具领域，开拓了博世、飞利浦、斯蒂尔、宝时得等优质客户", "plates": ["锂电池"], "limit_up_days": 5, "turnover_ratio": 1.99, "first_limit_up": 1791509100, "break_limit_up_times": 0}, {"code": "600843", "name": "上工申贝", "price": 8.18, "change_pct": 9.95, "reason": "1、公司推进人工智能、机器人技术与缝制工艺结合，已在汽车座椅、沙发、鞋服等领域开展市场化推广；\n2、公司计划2026年集中资源攻坚碳纤维轻型运动飞机等新项目的国产化与量产，完成MOSAIC轻型飞机研发并启动生产，实现首架两座水陆两栖轻型运动飞机的国产化落地，并启动电动三座飞机的开发工作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.83, "first_limit_up": 1791510119, "break_limit_up_times": 1}, {"code": "002912", "name": "中新赛克", "price": 28.55, "change_pct": 10.02, "reason": "1、深圳国资委旗下，领先的网络可视化基础架构产品提供商，已有相关的算力数据网络监测和调度技术研发储备；公司海睿思产品已成功通过上海数据交易所的数商认证；\n2、公司构建了涵盖网络内容安全、宽带网与移动网产品、数据运营及电磁空间安全的全栈式防护体系，深度融合AI大模型与GenAI技术，推出了数据安全分类分级系统及全链路安全可信解决方案，为政府、运营商及关键基础设施提供全生命周期的网络空间数据智能治理与安全防护服务", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 15.65, "first_limit_up": 1791523548, "break_limit_up_times": 0}, {"code": "603216", "name": "梦天家居", "price": 24.1, "change_pct": 10.0, "reason": "公司在家具行业特别是木门领域具有领导地位，此前以7000万元增资重庆凌芯微电子并持股35%，切入功率半导体晶圆代工赛道", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.0, "first_limit_up": 1791527241, "break_limit_up_times": 0}, {"code": "002675", "name": "东诚药业", "price": 13.89, "change_pct": 9.98, "reason": "公司为肝素钠原料药和硫酸软骨素龙头，覆盖了肝素钠原料药、肝素钙原料药、硫酸软骨素以及绒促性素等注射剂的药品生产", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.15, "first_limit_up": 1791513405, "break_limit_up_times": 3}, {"code": "002181", "name": "粤 传 媒", "price": 9.39, "change_pct": 9.95, "reason": "1、公司启动短剧13部、已上映5部，并采用自制和投资双线布局微短剧业务；\n2、公司全资子公司先锋报业经营足球类媒体，包括《足球》报以及足球+app、足球+小程序、足球报官方微博、微信公众号足球报等新媒体平台", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 7.63, "first_limit_up": 1791526263, "break_limit_up_times": 14}, {"code": "300364", "name": "中文在线", "price": 24.47, "change_pct": 20.01, "reason": "1、公司推出自研AI语言大模型“中文逍遥 1.0”，依托十多年在文学领域的深厚积累，利用超550万种数字内容资源训练而成；\n2、公司以优质 IP 为核心，开发各类衍生品，形成国谷、日谷、美谷品类矩阵，影视业务专注于微短剧（真人短剧和 AI 动漫短剧）制作与发行", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 12.58, "first_limit_up": 1791526131, "break_limit_up_times": 0}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};