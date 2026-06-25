const UPDATE_TIME = "2026-06-25 05:01";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": 2.28,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续187天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.16,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续234天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": 0.97,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续57天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "液冷服务器",
    "rise": -0.33,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "超级电容",
    "rise": 2.37,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885886"
  },
  {
    "name": "先进封装",
    "rise": 1.02,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "创新药",
    "rise": -1.7,
    "rate": 0,
    "tag": "",
    "hotTag": "连续64天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "光纤概念",
    "rise": 0.48,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续63天上榜",
    "rankChg": 0,
    "etfName": "科创投资LOF",
    "code": "886084"
  },
  {
    "name": "商业航天",
    "rise": -1.17,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续163天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "培育钻石",
    "rise": -0.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "算力租赁",
    "rise": -1.83,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续98天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": -1.59,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续398天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "ST板块",
    "rise": -3.11,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "国家大基金持股",
    "rise": 2.21,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "同花顺果指数",
    "rise": 2.43,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886082"
  },
  {
    "name": "芯片概念",
    "rise": -0.16,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续58天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "AI应用",
    "rise": -1.95,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "白酒概念",
    "rise": -0.08,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "光刻胶",
    "rise": -1.04,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "科创半导体ETF",
    "code": "885864"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -1.11,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  }
];
const THS_EVENTS = [
  {
    "title": "摩根大通调研MLCC：涨价凶猛但下游无感，中国企业有望承接溢出订单",
    "desc": "",
    "heat": 846487,
    "direction": "MLCC涨价",
    "themes": [
      "MLCC"
    ],
    "stocks": [
      {
        "name": "火炬电子",
        "code": "603678",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "美光科技 2026 财年第三财季归母净利润 282.43 亿美元，同比增长 1398.30%",
    "desc": "",
    "heat": 363779,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "利尔达",
        "code": "920249",
        "chg": 22.403734
      }
    ]
  },
  {
    "title": "康宁发布新一代玻璃基光互连技术",
    "desc": "",
    "heat": 119866,
    "direction": "玻璃基光互联",
    "themes": [
      "光纤概念",
      "玻璃基板"
    ],
    "stocks": [
      {
        "name": "光韵达",
        "code": "300227",
        "chg": 14.554795
      }
    ]
  },
  {
    "title": "长七改火箭成功发射通信技术试验卫星二十六号A星",
    "desc": "",
    "heat": 37991,
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
        "name": "中京电子",
        "code": "002579",
        "chg": 10.020661
      }
    ]
  },
  {
    "title": "曝苹果7月下旬量产首款可折叠iPhone",
    "desc": "",
    "heat": 33856,
    "direction": "苹果折叠屏",
    "themes": [
      "柔性屏(折叠屏)"
    ],
    "stocks": [
      {
        "name": "万顺新材",
        "code": "300057",
        "chg": 15.181518
      }
    ]
  },
  {
    "title": "我国规模最大全钒液流电池储能电站转入商业运行",
    "desc": "",
    "heat": 10410,
    "direction": "钒电池",
    "themes": [
      "钒电池"
    ],
    "stocks": [
      {
        "name": "振华股份",
        "code": "603067",
        "chg": 10.009488
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "CPU概念",
    "change": "+5.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+4.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民航",
    "change": "+4.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+3.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+3.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+3.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+3.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "券商",
    "change": "+3.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+3.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+3.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+2.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧树脂",
    "change": "+2.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+2.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液氯",
    "change": "+2.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+2.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+2.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+2.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+2.2%",
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
    "hot_rank_chg": 1,
    "stock_cnt": 5858,
    "price": "7.45",
    "change": "5.38",
    "market_id": "33",
    "circulate_market_value": "263485150000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.09
      },
      {
        "name": "手机产业链",
        "change_pct": 0.44
      },
      {
        "name": "超高清视频",
        "change_pct": -0.73
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.53
      },
      {
        "name": "半导体",
        "change_pct": 1.43
      },
      {
        "name": "人工智能",
        "change_pct": -1.82
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.36
      },
      {
        "name": "VR&AR",
        "change_pct": -0.9
      },
      {
        "name": "OLED",
        "change_pct": 0.27
      },
      {
        "name": "京津冀",
        "change_pct": -1.57
      },
      {
        "name": "物联网",
        "change_pct": -1.37
      },
      {
        "name": "指纹识别",
        "change_pct": -0.8
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.98
      },
      {
        "name": "白马股",
        "change_pct": 0.63
      },
      {
        "name": "智能制造",
        "change_pct": -1.49
      },
      {
        "name": "小米概念股",
        "change_pct": -0.08
      },
      {
        "name": "国产芯片",
        "change_pct": 0.86
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.62
      },
      {
        "name": "全息概念",
        "change_pct": -1.92
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.59
      },
      {
        "name": "MicroLED",
        "change_pct": 0.32
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.96
      },
      {
        "name": "智能手表",
        "change_pct": -0.18
      },
      {
        "name": "MiniLED",
        "change_pct": 0.89
      },
      {
        "name": "传感器",
        "change_pct": -1.05
      },
      {
        "name": "大硅片",
        "change_pct": 2.4
      },
      {
        "name": "AI PC",
        "change_pct": 0.47
      },
      {
        "name": "华为产业链",
        "change_pct": -0.93
      },
      {
        "name": "回购",
        "change_pct": -0.14
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.73
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.88
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 9,
    "hot_rank_chg": 19,
    "stock_cnt": 5858,
    "price": "7.65",
    "change": "-2.17",
    "market_id": "17",
    "circulate_market_value": "94830082000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.78
      },
      {
        "name": "核电",
        "change_pct": -1.46
      },
      {
        "name": "强势人气股",
        "change_pct": -1.24
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.98
      },
      {
        "name": "水电",
        "change_pct": -2.5
      },
      {
        "name": "火电",
        "change_pct": -2.21
      },
      {
        "name": "光伏",
        "change_pct": -1.1
      },
      {
        "name": "风电",
        "change_pct": -1.76
      },
      {
        "name": "国企改革",
        "change_pct": -1.2
      },
      {
        "name": "算电协同",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 26,
    "hot_rank_chg": 1,
    "stock_cnt": 5858,
    "price": "8.06",
    "change": "-9.75",
    "market_id": "33",
    "circulate_market_value": "13086834900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.45
      },
      {
        "name": "电竞",
        "change_pct": -0.18
      },
      {
        "name": "手游",
        "change_pct": 0.37
      },
      {
        "name": "强势人气股",
        "change_pct": -1.24
      },
      {
        "name": "人工智能",
        "change_pct": -1.82
      },
      {
        "name": "游戏",
        "change_pct": -0.01
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.99
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.54
      },
      {
        "name": "快手概念股",
        "change_pct": -2.51
      },
      {
        "name": "元宇宙",
        "change_pct": -1.65
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.53
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.51
      },
      {
        "name": "web3.0",
        "change_pct": -2.5
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.89
      },
      {
        "name": "数据要素",
        "change_pct": -2.21
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.19
      },
      {
        "name": "AI营销",
        "change_pct": -2.93
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.12
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.73
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.71
      },
      {
        "name": "人形机器人",
        "change_pct": -1.27
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.45
      },
      {
        "name": "多模态",
        "change_pct": -2.04
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -3.15
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.06
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.75
      }
    ]
  },
  {
    "code": "000783",
    "name": "长江证券",
    "hot_rank": 29,
    "hot_rank_chg": 244,
    "stock_cnt": 5858,
    "price": "10.15",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "56130240000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "券商",
    "xgb_concepts": [
      {
        "name": "期货概念",
        "change_pct": 1.32
      },
      {
        "name": "券商",
        "change_pct": 3.2
      },
      {
        "name": "大金融",
        "change_pct": 0.98
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 31,
    "hot_rank_chg": 120,
    "stock_cnt": 5858,
    "price": "5.25",
    "change": "8.25",
    "market_id": "33",
    "circulate_market_value": "100443180000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.09
      },
      {
        "name": "手机产业链",
        "change_pct": 0.44
      },
      {
        "name": "超高清视频",
        "change_pct": -0.73
      },
      {
        "name": "半导体",
        "change_pct": 1.43
      },
      {
        "name": "OLED",
        "change_pct": 0.27
      },
      {
        "name": "光伏",
        "change_pct": -1.1
      },
      {
        "name": "黑色家电",
        "change_pct": 0.15
      },
      {
        "name": "家电",
        "change_pct": -1.29
      },
      {
        "name": "智能制造",
        "change_pct": -1.49
      },
      {
        "name": "工业互联网",
        "change_pct": -1.31
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.08
      },
      {
        "name": "国产芯片",
        "change_pct": 0.86
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.54
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.62
      },
      {
        "name": "MicroLED",
        "change_pct": 0.32
      },
      {
        "name": "MiniLED",
        "change_pct": 0.89
      },
      {
        "name": "华为产业链",
        "change_pct": -0.93
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.88
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 46,
    "hot_rank_chg": -22,
    "stock_cnt": 5858,
    "price": "11.20",
    "change": "-1.84",
    "market_id": "17",
    "circulate_market_value": "33313070000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -2.07
      },
      {
        "name": "禽流感",
        "change_pct": -1.98
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.86
      },
      {
        "name": "农药",
        "change_pct": -2.68
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": -2.14
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.92
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 75,
    "hot_rank_chg": 307,
    "stock_cnt": 5858,
    "price": "4.98",
    "change": "8.04",
    "market_id": "33",
    "circulate_market_value": "13141889500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.24
      },
      {
        "name": "装修装饰",
        "change_pct": -1.49
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.95
      },
      {
        "name": "破净股",
        "change_pct": -1.15
      },
      {
        "name": "航天",
        "change_pct": -1.21
      },
      {
        "name": "旧改",
        "change_pct": -1.47
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 82,
    "hot_rank_chg": -46,
    "stock_cnt": 5858,
    "price": "10.29",
    "change": "-6.81",
    "market_id": "33",
    "circulate_market_value": "4810740400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -2.05
      },
      {
        "name": "医疗器械",
        "change_pct": -2.13
      },
      {
        "name": "基因测序",
        "change_pct": -1.7
      },
      {
        "name": "PCB板",
        "change_pct": 1.82
      },
      {
        "name": "医药",
        "change_pct": -1.75
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.61
      },
      {
        "name": "化学原料药",
        "change_pct": -1.86
      },
      {
        "name": "食品安全",
        "change_pct": -1.89
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.11
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.8
      },
      {
        "name": "异丙醇",
        "change_pct": -2.52
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.79
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 84,
    "hot_rank_chg": 217,
    "stock_cnt": 5858,
    "price": "3.45",
    "change": "-7.51",
    "market_id": "17",
    "circulate_market_value": "11276111500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -1.65
      },
      {
        "name": "强势人气股",
        "change_pct": -1.24
      },
      {
        "name": "养老产业",
        "change_pct": -1.75
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.51
      },
      {
        "name": "地摊经济",
        "change_pct": -0.95
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 86,
    "hot_rank_chg": 12,
    "stock_cnt": 5858,
    "price": "3.74",
    "change": "-8.56",
    "market_id": "33",
    "circulate_market_value": "7492630700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -1.69
      },
      {
        "name": "数字孪生",
        "change_pct": -2.39
      },
      {
        "name": "深圳本地股",
        "change_pct": -1.57
      },
      {
        "name": "强势人气股",
        "change_pct": -1.24
      },
      {
        "name": "人工智能",
        "change_pct": -1.82
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.36
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.66
      },
      {
        "name": "高铁轨交",
        "change_pct": -1.96
      },
      {
        "name": "人脸识别",
        "change_pct": -2.13
      },
      {
        "name": "智慧停车",
        "change_pct": -1.97
      },
      {
        "name": "物联网",
        "change_pct": -1.37
      },
      {
        "name": "大数据",
        "change_pct": -1.91
      },
      {
        "name": "智慧城市",
        "change_pct": -1.97
      },
      {
        "name": "雄安新区",
        "change_pct": -1.9
      },
      {
        "name": "机器人",
        "change_pct": -1.67
      },
      {
        "name": "数字经济",
        "change_pct": -1.99
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.54
      },
      {
        "name": "建筑节能",
        "change_pct": -2.21
      },
      {
        "name": "旧改",
        "change_pct": -1.47
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.58
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.79
      },
      {
        "name": "华为产业链",
        "change_pct": -0.93
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -3.31
      },
      {
        "name": "区块链",
        "change_pct": -1.63
      }
    ]
  },
  {
    "code": "600909",
    "name": "华安证券",
    "hot_rank": 93,
    "hot_rank_chg": -42,
    "stock_cnt": 5858,
    "price": "11.68",
    "change": "1.65",
    "market_id": "17",
    "circulate_market_value": "58783249000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.07
      },
      {
        "name": "期货概念",
        "change_pct": 1.32
      },
      {
        "name": "券商",
        "change_pct": 3.2
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.57
      },
      {
        "name": "大金融",
        "change_pct": 0.98
      },
      {
        "name": "国企改革",
        "change_pct": -1.2
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5858, "price": "7.45", "change": "5.38", "market_id": "33", "circulate_market_value": "263485150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.09}, {"name": "手机产业链", "change_pct": 0.44}, {"name": "超高清视频", "change_pct": -0.73}, {"name": "苹果产业链", "change_pct": 0.53}, {"name": "半导体", "change_pct": 1.43}, {"name": "人工智能", "change_pct": -1.82}, {"name": "互联网医疗", "change_pct": -2.36}, {"name": "VR&AR", "change_pct": -0.9}, {"name": "OLED", "change_pct": 0.27}, {"name": "京津冀", "change_pct": -1.57}, {"name": "物联网", "change_pct": -1.37}, {"name": "指纹识别", "change_pct": -0.8}, {"name": "汽车零部件", "change_pct": -1.98}, {"name": "白马股", "change_pct": 0.63}, {"name": "智能制造", "change_pct": -1.49}, {"name": "小米概念股", "change_pct": -0.08}, {"name": "国产芯片", "change_pct": 0.86}, {"name": "液晶面板/LCD", "change_pct": -0.62}, {"name": "全息概念", "change_pct": -1.92}, {"name": "理想汽车概念股", "change_pct": -0.59}, {"name": "MicroLED", "change_pct": 0.32}, {"name": "钙钛矿电池", "change_pct": -0.96}, {"name": "智能手表", "change_pct": -0.18}, {"name": "MiniLED", "change_pct": 0.89}, {"name": "传感器", "change_pct": -1.05}, {"name": "大硅片", "change_pct": 2.4}, {"name": "AI PC", "change_pct": 0.47}, {"name": "华为产业链", "change_pct": -0.93}, {"name": "回购", "change_pct": -0.14}, {"name": "智能眼镜/MR头显", "change_pct": -0.73}, {"name": "玻璃基板封装", "change_pct": 1.88}]}, {"code": "600522", "name": "中天科技", "hot_rank": 2, "hot_rank_chg": 11, "stock_cnt": 5858, "price": "67.07", "change": "8.34", "market_id": "17", "circulate_market_value": "228906530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 3, "hot_rank_chg": 28, "stock_cnt": 5858, "price": "78.91", "change": "9.02", "market_id": "33", "circulate_market_value": "91299905000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 4, "hot_rank_chg": 4, "stock_cnt": 5858, "price": "22.32", "change": "6.34", "market_id": "33", "circulate_market_value": "74128361000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 5, "hot_rank_chg": 4, "stock_cnt": 5858, "price": "55.95", "change": "8.10", "market_id": "17", "circulate_market_value": "47364659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 6, "hot_rank_chg": -5, "stock_cnt": 5858, "price": "104.17", "change": "10.00", "market_id": "17", "circulate_market_value": "186403320000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "先进封装"}, {"code": "600487", "name": "亨通光电", "hot_rank": 7, "hot_rank_chg": 5, "stock_cnt": 5858, "price": "121.38", "change": "1.98", "market_id": "17", "circulate_market_value": "296796080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 8, "hot_rank_chg": -5, "stock_cnt": 5858, "price": "21.48", "change": "-1.51", "market_id": "17", "circulate_market_value": "107164122000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 9, "hot_rank_chg": 19, "stock_cnt": 5858, "price": "7.65", "change": "-2.17", "market_id": "17", "circulate_market_value": "94830082000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.78}, {"name": "核电", "change_pct": -1.46}, {"name": "强势人气股", "change_pct": -1.24}, {"name": "电力体制改革", "change_pct": -1.98}, {"name": "水电", "change_pct": -2.5}, {"name": "火电", "change_pct": -2.21}, {"name": "光伏", "change_pct": -1.1}, {"name": "风电", "change_pct": -1.76}, {"name": "国企改革", "change_pct": -1.2}, {"name": "算电协同", "change_pct": -0.91}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 10, "hot_rank_chg": 68, "stock_cnt": 5858, "price": "154.73", "change": "7.94", "market_id": "33", "circulate_market_value": "297516470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 11, "hot_rank_chg": 196, "stock_cnt": 5858, "price": "21.18", "change": "4.96", "market_id": "33", "circulate_market_value": "282822800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 12, "hot_rank_chg": 14, "stock_cnt": 5858, "price": "16.37", "change": "-4.27", "market_id": "17", "circulate_market_value": "20892307000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 13, "hot_rank_chg": -6, "stock_cnt": 5858, "price": "52.71", "change": "4.85", "market_id": "33", "circulate_market_value": "82972871000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 14, "hot_rank_chg": -8, "stock_cnt": 5858, "price": "751.90", "change": "6.64", "market_id": "17", "circulate_market_value": "502639090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 15, "hot_rank_chg": 10, "stock_cnt": 5858, "price": "77.68", "change": "4.05", "market_id": "33", "circulate_market_value": "117845340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 16, "hot_rank_chg": 102, "stock_cnt": 5858, "price": "21.30", "change": "10.02", "market_id": "33", "circulate_market_value": "12426673300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "600176", "name": "中国巨石", "hot_rank": 17, "hot_rank_chg": -6, "stock_cnt": 5858, "price": "69.92", "change": "7.87", "market_id": "17", "circulate_market_value": "279899320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 18, "hot_rank_chg": -13, "stock_cnt": 5858, "price": "25.31", "change": "10.00", "market_id": "17", "circulate_market_value": "52936933000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "存储芯片封测"}, {"code": "002580", "name": "圣阳股份", "hot_rank": 19, "hot_rank_chg": -5, "stock_cnt": 5858, "price": "24.99", "change": "-2.12", "market_id": "33", "circulate_market_value": "11294899800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 20, "hot_rank_chg": 3, "stock_cnt": 5858, "price": "43.44", "change": "-1.83", "market_id": "33", "circulate_market_value": "46861653000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 21, "hot_rank_chg": 50, "stock_cnt": 5858, "price": "36.20", "change": "-3.77", "market_id": "33", "circulate_market_value": "28323048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 22, "hot_rank_chg": 24, "stock_cnt": 5858, "price": "271.02", "change": "5.40", "market_id": "33", "circulate_market_value": "375720910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 23, "hot_rank_chg": 16, "stock_cnt": 5858, "price": "19.89", "change": "4.68", "market_id": "33", "circulate_market_value": "64156684000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 24, "hot_rank_chg": 121, "stock_cnt": 5858, "price": "599.85", "change": "8.02", "market_id": "33", "circulate_market_value": "752357760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 25, "hot_rank_chg": -15, "stock_cnt": 5858, "price": "131.16", "change": "6.56", "market_id": "33", "circulate_market_value": "85652153000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 26, "hot_rank_chg": 1, "stock_cnt": 5858, "price": "8.06", "change": "-9.75", "market_id": "33", "circulate_market_value": "13086834900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.45}, {"name": "电竞", "change_pct": -0.18}, {"name": "手游", "change_pct": 0.37}, {"name": "强势人气股", "change_pct": -1.24}, {"name": "人工智能", "change_pct": -1.82}, {"name": "游戏", "change_pct": -0.01}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.99}, {"name": "腾讯概念股", "change_pct": -1.54}, {"name": "快手概念股", "change_pct": -2.51}, {"name": "元宇宙", "change_pct": -1.65}, {"name": "虚拟数字人", "change_pct": -2.53}, {"name": "东数西算/算力", "change_pct": -1.51}, {"name": "web3.0", "change_pct": -2.5}, {"name": "AIGC概念", "change_pct": -1.89}, {"name": "数据要素", "change_pct": -2.21}, {"name": "字节跳动概念股", "change_pct": -2.19}, {"name": "AI营销", "change_pct": -2.93}, {"name": "ChatGPT", "change_pct": -2.12}, {"name": "智能眼镜/MR头显", "change_pct": -0.73}, {"name": "人工智能大模型", "change_pct": -1.71}, {"name": "人形机器人", "change_pct": -1.27}, {"name": "短剧/互动影游", "change_pct": -1.45}, {"name": "多模态", "change_pct": -2.04}, {"name": "Sora/AI视频", "change_pct": -3.15}, {"name": "IP经济/谷子经济", "change_pct": -1.06}, {"name": "小红书概念股", "change_pct": -2.75}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 27, "hot_rank_chg": 22, "stock_cnt": 5858, "price": "106.43", "change": "6.34", "market_id": "33", "circulate_market_value": "154634840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 28, "hot_rank_chg": -9, "stock_cnt": 5858, "price": "86.00", "change": "3.79", "market_id": "33", "circulate_market_value": "97219401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000783", "name": "长江证券", "hot_rank": 29, "hot_rank_chg": 244, "stock_cnt": 5858, "price": "10.15", "change": "9.97", "market_id": "33", "circulate_market_value": "56130240000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "券商", "xgb_concepts": [{"name": "期货概念", "change_pct": 1.32}, {"name": "券商", "change_pct": 3.2}, {"name": "大金融", "change_pct": 0.98}]}, {"code": "603629", "name": "利通电子", "hot_rank": 30, "hot_rank_chg": -13, "stock_cnt": 5858, "price": "214.81", "change": "-1.91", "market_id": "17", "circulate_market_value": "55427639000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 31, "hot_rank_chg": 120, "stock_cnt": 5858, "price": "5.25", "change": "8.25", "market_id": "33", "circulate_market_value": "100443180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.09}, {"name": "手机产业链", "change_pct": 0.44}, {"name": "超高清视频", "change_pct": -0.73}, {"name": "半导体", "change_pct": 1.43}, {"name": "OLED", "change_pct": 0.27}, {"name": "光伏", "change_pct": -1.1}, {"name": "黑色家电", "change_pct": 0.15}, {"name": "家电", "change_pct": -1.29}, {"name": "智能制造", "change_pct": -1.49}, {"name": "工业互联网", "change_pct": -1.31}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.08}, {"name": "国产芯片", "change_pct": 0.86}, {"name": "腾讯概念股", "change_pct": -1.54}, {"name": "液晶面板/LCD", "change_pct": -0.62}, {"name": "MicroLED", "change_pct": 0.32}, {"name": "MiniLED", "change_pct": 0.89}, {"name": "华为产业链", "change_pct": -0.93}, {"name": "玻璃基板封装", "change_pct": 1.88}]}, {"code": "601138", "name": "工业富联", "hot_rank": 32, "hot_rank_chg": 9, "stock_cnt": 5858, "price": "76.19", "change": "-0.77", "market_id": "17", "circulate_market_value": "1511921400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 33, "hot_rank_chg": -12, "stock_cnt": 5858, "price": "49.54", "change": "-0.94", "market_id": "17", "circulate_market_value": "82438119000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605589", "name": "圣泉集团", "hot_rank": 34, "hot_rank_chg": 57, "stock_cnt": 5858, "price": "72.02", "change": "8.58", "market_id": "17", "circulate_market_value": "60923086000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 35, "hot_rank_chg": -17, "stock_cnt": 5858, "price": "37.91", "change": "2.19", "market_id": "33", "circulate_market_value": "44541111000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 36, "hot_rank_chg": 53, "stock_cnt": 5858, "price": "18.98", "change": "-7.50", "market_id": "33", "circulate_market_value": "28959330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 37, "hot_rank_chg": 73, "stock_cnt": 5858, "price": "115.64", "change": "8.68", "market_id": "33", "circulate_market_value": "267057010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 38, "hot_rank_chg": 35, "stock_cnt": 5858, "price": "15.91", "change": "4.88", "market_id": "17", "circulate_market_value": "27606729000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 39, "hot_rank_chg": 82, "stock_cnt": 5858, "price": "55.71", "change": "5.27", "market_id": "33", "circulate_market_value": "276861990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 40, "hot_rank_chg": 3, "stock_cnt": 5858, "price": "184.38", "change": "3.99", "market_id": "17", "circulate_market_value": "441498190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 41, "hot_rank_chg": -19, "stock_cnt": 5858, "price": "71.82", "change": "4.48", "market_id": "17", "circulate_market_value": "105000467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 42, "hot_rank_chg": 16, "stock_cnt": 5858, "price": "262.00", "change": "-1.71", "market_id": "33", "circulate_market_value": "204334470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300033", "name": "同花顺", "hot_rank": 43, "hot_rank_chg": 372, "stock_cnt": 5858, "price": "259.80", "change": "8.16", "market_id": "33", "circulate_market_value": "113899155000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 44, "hot_rank_chg": 36, "stock_cnt": 5858, "price": "1333.90", "change": "1.66", "market_id": "33", "circulate_market_value": "1480548700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 45, "hot_rank_chg": -11, "stock_cnt": 5858, "price": "153.18", "change": "0.60", "market_id": "33", "circulate_market_value": "146522800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 46, "hot_rank_chg": -22, "stock_cnt": 5858, "price": "11.20", "change": "-1.84", "market_id": "17", "circulate_market_value": "33313070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.07}, {"name": "禽流感", "change_pct": -1.98}, {"name": "铜箔/覆铜板", "change_pct": 1.86}, {"name": "农药", "change_pct": -2.68}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": -2.14}, {"name": "PET复合铜箔", "change_pct": 1.92}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 47, "hot_rank_chg": 10, "stock_cnt": 5858, "price": "53.10", "change": "5.67", "market_id": "33", "circulate_market_value": "80571747000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 48, "hot_rank_chg": 16, "stock_cnt": 5858, "price": "36.95", "change": "-2.17", "market_id": "17", "circulate_market_value": "82005084000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 49, "hot_rank_chg": 44, "stock_cnt": 5858, "price": "95.77", "change": "4.42", "market_id": "33", "circulate_market_value": "81755844000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 50, "hot_rank_chg": 12, "stock_cnt": 5858, "price": "66.17", "change": "-1.46", "market_id": "17", "circulate_market_value": "70971650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 51, "hot_rank_chg": 14, "stock_cnt": 5858, "price": "84.56", "change": "2.80", "market_id": "17", "circulate_market_value": "107528310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 52, "hot_rank_chg": 64, "stock_cnt": 5858, "price": "26.13", "change": "-5.50", "market_id": "17", "circulate_market_value": "538324850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 53, "hot_rank_chg": 48, "stock_cnt": 5858, "price": "15.60", "change": "10.01", "market_id": "17", "circulate_market_value": "27910557000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力"}, {"code": "300085", "name": "银之杰", "hot_rank": 54, "hot_rank_chg": 138, "stock_cnt": 5858, "price": "39.03", "change": "1.27", "market_id": "33", "circulate_market_value": "25448062000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 55, "hot_rank_chg": -39, "stock_cnt": 5858, "price": "74.60", "change": "-0.77", "market_id": "33", "circulate_market_value": "543744790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000811", "name": "冰轮环境", "hot_rank": 56, "hot_rank_chg": -4, "stock_cnt": 5858, "price": "53.15", "change": "9.06", "market_id": "33", "circulate_market_value": "51913675000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 57, "hot_rank_chg": 4, "stock_cnt": 5858, "price": "13.43", "change": "-0.22", "market_id": "17", "circulate_market_value": "48182405000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 58, "hot_rank_chg": -29, "stock_cnt": 5858, "price": "178.51", "change": "3.15", "market_id": "33", "circulate_market_value": "56859496000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 59, "hot_rank_chg": -39, "stock_cnt": 5858, "price": "21.75", "change": "1.17", "market_id": "33", "circulate_market_value": "16471658000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 60, "hot_rank_chg": -27, "stock_cnt": 5858, "price": "47.63", "change": "-9.96", "market_id": "17", "circulate_market_value": "39476276000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 61, "hot_rank_chg": 25, "stock_cnt": 5858, "price": "95.34", "change": "7.21", "market_id": "17", "circulate_market_value": "139487600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 62, "hot_rank_chg": -30, "stock_cnt": 5858, "price": "863.00", "change": "6.54", "market_id": "33", "circulate_market_value": "142321500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 63, "hot_rank_chg": 46, "stock_cnt": 5858, "price": "24.42", "change": "3.96", "market_id": "17", "circulate_market_value": "27694197000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601066", "name": "中信建投", "hot_rank": 64, "hot_rank_chg": 478, "stock_cnt": 5858, "price": "30.50", "change": "9.99", "market_id": "17", "circulate_market_value": "198117970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 65, "hot_rank_chg": 78, "stock_cnt": 5858, "price": "69.63", "change": "3.62", "market_id": "17", "circulate_market_value": "53768242000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 66, "hot_rank_chg": 16, "stock_cnt": 5858, "price": "180.67", "change": "-3.23", "market_id": "33", "circulate_market_value": "149778240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 67, "hot_rank_chg": 38, "stock_cnt": 5858, "price": "466.24", "change": "11.81", "market_id": "17", "circulate_market_value": "219863240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 68, "hot_rank_chg": -33, "stock_cnt": 5858, "price": "322.30", "change": "-0.92", "market_id": "33", "circulate_market_value": "350787470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600392", "name": "盛和资源", "hot_rank": 69, "hot_rank_chg": 16, "stock_cnt": 5858, "price": "32.55", "change": "3.01", "market_id": "17", "circulate_market_value": "57054505000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 70, "hot_rank_chg": -11, "stock_cnt": 5858, "price": "55.41", "change": "-1.65", "market_id": "33", "circulate_market_value": "83614301000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 71, "hot_rank_chg": 25, "stock_cnt": 5858, "price": "659.01", "change": "6.29", "market_id": "33", "circulate_market_value": "185743220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 72, "hot_rank_chg": 132, "stock_cnt": 5858, "price": "224.55", "change": "13.52", "market_id": "33", "circulate_market_value": "94691439000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 73, "hot_rank_chg": -28, "stock_cnt": 5858, "price": "49.88", "change": "0.50", "market_id": "17", "circulate_market_value": "32530325000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002171", "name": "楚江新材", "hot_rank": 74, "hot_rank_chg": 73, "stock_cnt": 5858, "price": "15.49", "change": "3.13", "market_id": "33", "circulate_market_value": "24996855000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 75, "hot_rank_chg": 307, "stock_cnt": 5858, "price": "4.98", "change": "8.04", "market_id": "33", "circulate_market_value": "13141889500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.24}, {"name": "装修装饰", "change_pct": -1.49}, {"name": "装配式建筑", "change_pct": -1.95}, {"name": "破净股", "change_pct": -1.15}, {"name": "航天", "change_pct": -1.21}, {"name": "旧改", "change_pct": -1.47}]}, {"code": "600601", "name": "方正科技", "hot_rank": 76, "hot_rank_chg": 295, "stock_cnt": 5858, "price": "14.36", "change": "8.05", "market_id": "17", "circulate_market_value": "59885412000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300666", "name": "江丰电子", "hot_rank": 77, "hot_rank_chg": 111, "stock_cnt": 5858, "price": "336.07", "change": "10.54", "market_id": "33", "circulate_market_value": "74310382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688797", "name": "臻宝科技", "hot_rank": 78, "hot_rank_chg": -74, "stock_cnt": 5858, "price": "560.00", "change": "-4.27", "market_id": "17", "circulate_market_value": "16347911000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 79, "hot_rank_chg": 187, "stock_cnt": 5858, "price": "51.41", "change": "9.99", "market_id": "33", "circulate_market_value": "13801650000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "钨全产业链"}, {"code": "002600", "name": "领益智造", "hot_rank": 80, "hot_rank_chg": -65, "stock_cnt": 5858, "price": "17.97", "change": "1.75", "market_id": "33", "circulate_market_value": "129378695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 81, "hot_rank_chg": 55, "stock_cnt": 5858, "price": "15.05", "change": "-4.57", "market_id": "17", "circulate_market_value": "22164238000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 82, "hot_rank_chg": -46, "stock_cnt": 5858, "price": "10.29", "change": "-6.81", "market_id": "33", "circulate_market_value": "4810740400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -2.05}, {"name": "医疗器械", "change_pct": -2.13}, {"name": "基因测序", "change_pct": -1.7}, {"name": "PCB板", "change_pct": 1.82}, {"name": "医药", "change_pct": -1.75}, {"name": "新能源汽车", "change_pct": -1.61}, {"name": "化学原料药", "change_pct": -1.86}, {"name": "食品安全", "change_pct": -1.89}, {"name": "辅助生殖", "change_pct": -2.11}, {"name": "光刻机（胶）", "change_pct": -0.8}, {"name": "异丙醇", "change_pct": -2.52}, {"name": "新冠病毒防治", "change_pct": -1.79}, {"name": "磷酸铁锂", "change_pct": -1.31}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 83, "hot_rank_chg": -45, "stock_cnt": 5858, "price": "583.01", "change": "0.52", "market_id": "17", "circulate_market_value": "236899300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 84, "hot_rank_chg": 217, "stock_cnt": 5858, "price": "3.45", "change": "-7.51", "market_id": "17", "circulate_market_value": "11276111500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -1.65}, {"name": "强势人气股", "change_pct": -1.24}, {"name": "养老产业", "change_pct": -1.75}, {"name": "粤港澳大湾区", "change_pct": -1.51}, {"name": "地摊经济", "change_pct": -0.95}]}, {"code": "603773", "name": "沃格光电", "hot_rank": 85, "hot_rank_chg": -22, "stock_cnt": 5858, "price": "164.00", "change": "-2.01", "market_id": "17", "circulate_market_value": "36847296000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 86, "hot_rank_chg": 12, "stock_cnt": 5858, "price": "3.74", "change": "-8.56", "market_id": "33", "circulate_market_value": "7492630700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -1.69}, {"name": "数字孪生", "change_pct": -2.39}, {"name": "深圳本地股", "change_pct": -1.57}, {"name": "强势人气股", "change_pct": -1.24}, {"name": "人工智能", "change_pct": -1.82}, {"name": "互联网医疗", "change_pct": -2.36}, {"name": "云计算数据中心", "change_pct": -1.66}, {"name": "高铁轨交", "change_pct": -1.96}, {"name": "人脸识别", "change_pct": -2.13}, {"name": "智慧停车", "change_pct": -1.97}, {"name": "物联网", "change_pct": -1.37}, {"name": "大数据", "change_pct": -1.91}, {"name": "智慧城市", "change_pct": -1.97}, {"name": "雄安新区", "change_pct": -1.9}, {"name": "机器人", "change_pct": -1.67}, {"name": "数字经济", "change_pct": -1.99}, {"name": "阿里巴巴概念股", "change_pct": -1.49}, {"name": "腾讯概念股", "change_pct": -1.54}, {"name": "建筑节能", "change_pct": -2.21}, {"name": "旧改", "change_pct": -1.47}, {"name": "医疗信息化", "change_pct": -2.58}, {"name": "新冠病毒防治", "change_pct": -1.79}, {"name": "华为产业链", "change_pct": -0.93}, {"name": "医疗耗材供应链SPD", "change_pct": -3.31}, {"name": "区块链", "change_pct": -1.63}]}, {"code": "600030", "name": "中信证券", "hot_rank": 87, "hot_rank_chg": 229, "stock_cnt": 5858, "price": "28.82", "change": "3.33", "market_id": "17", "circulate_market_value": "350928200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 88, "hot_rank_chg": 78, "stock_cnt": 5858, "price": "353.58", "change": "2.96", "market_id": "33", "circulate_market_value": "305915630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600330", "name": "天通股份", "hot_rank": 89, "hot_rank_chg": 67, "stock_cnt": 5858, "price": "35.60", "change": "10.01", "market_id": "17", "circulate_market_value": "43910265000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块上游"}, {"code": "000988", "name": "华工科技", "hot_rank": 90, "hot_rank_chg": 4, "stock_cnt": 5858, "price": "172.60", "change": "2.81", "market_id": "33", "circulate_market_value": "173460520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 91, "hot_rank_chg": -25, "stock_cnt": 5858, "price": "117.20", "change": "1.20", "market_id": "33", "circulate_market_value": "84889767000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 92, "hot_rank_chg": 34, "stock_cnt": 5858, "price": "296.00", "change": "2.21", "market_id": "33", "circulate_market_value": "133210587000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600909", "name": "华安证券", "hot_rank": 93, "hot_rank_chg": -42, "stock_cnt": 5858, "price": "11.68", "change": "1.65", "market_id": "17", "circulate_market_value": "58783249000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.07}, {"name": "期货概念", "change_pct": 1.32}, {"name": "券商", "change_pct": 3.2}, {"name": "安徽国企改革", "change_pct": -0.57}, {"name": "大金融", "change_pct": 0.98}, {"name": "国企改革", "change_pct": -1.2}]}, {"code": "601208", "name": "东材科技", "hot_rank": 94, "hot_rank_chg": 43, "stock_cnt": 5858, "price": "77.28", "change": "3.66", "market_id": "17", "circulate_market_value": "78066938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 95, "hot_rank_chg": -45, "stock_cnt": 5858, "price": "26.88", "change": "-3.48", "market_id": "17", "circulate_market_value": "25391033000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 96, "hot_rank_chg": 85, "stock_cnt": 5858, "price": "44.11", "change": "0.46", "market_id": "33", "circulate_market_value": "162473110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 97, "hot_rank_chg": -50, "stock_cnt": 5858, "price": "47.61", "change": "5.85", "market_id": "33", "circulate_market_value": "66863147000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000799", "name": "酒鬼酒", "hot_rank": 98, "hot_rank_chg": 754, "stock_cnt": 5858, "price": "43.10", "change": "7.80", "market_id": "33", "circulate_market_value": "14003114000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 99, "hot_rank_chg": 49, "stock_cnt": 5858, "price": "37.97", "change": "1.47", "market_id": "33", "circulate_market_value": "152928780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301013", "name": "利和兴", "hot_rank": 100, "hot_rank_chg": 164, "stock_cnt": 5858, "price": "81.79", "change": "9.13", "market_id": "33", "circulate_market_value": "15478074000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "300237": "[行政处罚事先告知书] 美晨科技：关于收到中国证券监督管理委员会《行政处罚事先告知书》的公告", "300366": "[行政处罚事先告知书] 创意信息：2025-36 关于收到《行政处罚事先告知书》的公告"};