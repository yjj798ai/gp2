const UPDATE_TIME = "2026-06-25 11:37";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": 3.12,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "连续187天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.75,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续234天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": 1.35,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续57天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "超级电容",
    "rise": 2.58,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885886"
  },
  {
    "name": "液冷服务器",
    "rise": -0.27,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "培育钻石",
    "rise": 2.65,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "创新药",
    "rise": -1.24,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续64天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "先进封装",
    "rise": 1.8,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "光纤概念",
    "rise": 1.5,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续63天上榜",
    "rankChg": 0,
    "etfName": "科创红土LOF",
    "code": "886084"
  },
  {
    "name": "商业航天",
    "rise": -0.94,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续163天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "算力租赁",
    "rise": -1.57,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续98天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "国家大基金持股",
    "rise": 2.57,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "人形机器人",
    "rise": -1.47,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续398天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "芯片概念",
    "rise": 0.37,
    "rate": 0,
    "tag": "35家涨停",
    "hotTag": "连续58天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -0.9,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 1,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "ST板块",
    "rise": -3.65,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光刻胶",
    "rise": -0.59,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "科创半导体ETF",
    "code": "885864"
  },
  {
    "name": "PET铜箔",
    "rise": 1.98,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "稀土永磁",
    "rise": -0.4,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "AI应用",
    "rise": -1.92,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  }
];
const THS_EVENTS = [
  {
    "title": "摩根大通调研MLCC：涨价凶猛但下游无感，中国企业有望承接溢出订单",
    "desc": "",
    "heat": 1079888,
    "direction": "MLCC涨价",
    "themes": [
      "MLCC"
    ],
    "stocks": [
      {
        "name": "利和兴",
        "code": "301013",
        "chg": 13.288859
      }
    ]
  },
  {
    "title": "美光科技 2026 财年第三财季归母净利润 282.43 亿美元，同比增长 1398.30%",
    "desc": "",
    "heat": 567841,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "利尔达",
        "code": "920249",
        "chg": 29.988331
      }
    ]
  },
  {
    "title": "康宁发布新一代玻璃基光互连技术",
    "desc": "",
    "heat": 264874,
    "direction": "玻璃基光互联",
    "themes": [
      "光纤概念",
      "玻璃基板"
    ],
    "stocks": [
      {
        "name": "杰普特",
        "code": "688025",
        "chg": 18.94066
      }
    ]
  },
  {
    "title": "曝苹果7月下旬量产首款可折叠iPhone",
    "desc": "",
    "heat": 109139,
    "direction": "苹果折叠屏",
    "themes": [
      "柔性屏(折叠屏)"
    ],
    "stocks": [
      {
        "name": "斯迪克",
        "code": "300806",
        "chg": 17.774003
      }
    ]
  },
  {
    "title": "长七改火箭成功发射通信技术试验卫星二十六号A星",
    "desc": "",
    "heat": 51911,
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
        "name": "信维通信",
        "code": "300136",
        "chg": 13.198216
      }
    ]
  },
  {
    "title": "我国规模最大全钒液流电池储能电站转入商业运行",
    "desc": "",
    "heat": 10560,
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
    "change": "+6.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+6.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+5.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+5.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民航",
    "change": "+4.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+3.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+3.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃基板封装",
    "change": "+3.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+3.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧树脂",
    "change": "+3.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+3.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "券商",
    "change": "+3.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "培育钻石",
    "change": "+2.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+2.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液氯",
    "change": "+2.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+2.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+2.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+2.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+2.48%",
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
    "hot_rank": 3,
    "hot_rank_chg": -1,
    "stock_cnt": 5854,
    "price": "7.52",
    "change": "6.37",
    "market_id": "33",
    "circulate_market_value": "265960850000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.55
      },
      {
        "name": "手机产业链",
        "change_pct": 0.75
      },
      {
        "name": "超高清视频",
        "change_pct": -0.36
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.98
      },
      {
        "name": "半导体",
        "change_pct": 2.28
      },
      {
        "name": "人工智能",
        "change_pct": -1.79
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.27
      },
      {
        "name": "VR&AR",
        "change_pct": -0.27
      },
      {
        "name": "OLED",
        "change_pct": 0.86
      },
      {
        "name": "京津冀",
        "change_pct": -1.59
      },
      {
        "name": "物联网",
        "change_pct": -1.16
      },
      {
        "name": "指纹识别",
        "change_pct": -0.57
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.24
      },
      {
        "name": "白马股",
        "change_pct": 0.37
      },
      {
        "name": "智能制造",
        "change_pct": -1.31
      },
      {
        "name": "小米概念股",
        "change_pct": 0.05
      },
      {
        "name": "国产芯片",
        "change_pct": 1.47
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.2
      },
      {
        "name": "全息概念",
        "change_pct": -1.75
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.99
      },
      {
        "name": "MicroLED",
        "change_pct": 1.37
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.12
      },
      {
        "name": "智能手表",
        "change_pct": 0.44
      },
      {
        "name": "MiniLED",
        "change_pct": 1.7
      },
      {
        "name": "传感器",
        "change_pct": -0.53
      },
      {
        "name": "大硅片",
        "change_pct": 2.87
      },
      {
        "name": "AI PC",
        "change_pct": 0.35
      },
      {
        "name": "华为产业链",
        "change_pct": -0.79
      },
      {
        "name": "回购",
        "change_pct": -0.06
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.28
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 3.47
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 12,
    "hot_rank_chg": 16,
    "stock_cnt": 5854,
    "price": "7.47",
    "change": "-4.48",
    "market_id": "17",
    "circulate_market_value": "92598786000.00",
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
        "name": "核电",
        "change_pct": -1.47
      },
      {
        "name": "强势人气股",
        "change_pct": -0.2
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.08
      },
      {
        "name": "水电",
        "change_pct": -2.93
      },
      {
        "name": "火电",
        "change_pct": -2.25
      },
      {
        "name": "光伏",
        "change_pct": -0.71
      },
      {
        "name": "风电",
        "change_pct": -1.77
      },
      {
        "name": "国企改革",
        "change_pct": -1.31
      },
      {
        "name": "算电协同",
        "change_pct": 0.03
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 22,
    "hot_rank_chg": 129,
    "stock_cnt": 5854,
    "price": "5.34",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "102165063000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "面板",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.55
      },
      {
        "name": "手机产业链",
        "change_pct": 0.75
      },
      {
        "name": "超高清视频",
        "change_pct": -0.36
      },
      {
        "name": "半导体",
        "change_pct": 2.28
      },
      {
        "name": "OLED",
        "change_pct": 0.86
      },
      {
        "name": "光伏",
        "change_pct": -0.71
      },
      {
        "name": "黑色家电",
        "change_pct": 0.08
      },
      {
        "name": "家电",
        "change_pct": -1.44
      },
      {
        "name": "智能制造",
        "change_pct": -1.31
      },
      {
        "name": "工业互联网",
        "change_pct": -1.25
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.05
      },
      {
        "name": "国产芯片",
        "change_pct": 1.47
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.57
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.2
      },
      {
        "name": "MicroLED",
        "change_pct": 1.37
      },
      {
        "name": "MiniLED",
        "change_pct": 1.7
      },
      {
        "name": "华为产业链",
        "change_pct": -0.79
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 3.47
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 23,
    "hot_rank_chg": 4,
    "stock_cnt": 5854,
    "price": "8.03",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "13054321000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.7
      },
      {
        "name": "电竞",
        "change_pct": -0.41
      },
      {
        "name": "手游",
        "change_pct": 0.34
      },
      {
        "name": "强势人气股",
        "change_pct": -0.2
      },
      {
        "name": "人工智能",
        "change_pct": -1.79
      },
      {
        "name": "游戏",
        "change_pct": 0.02
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.04
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.57
      },
      {
        "name": "快手概念股",
        "change_pct": -2.61
      },
      {
        "name": "元宇宙",
        "change_pct": -1.75
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.66
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.33
      },
      {
        "name": "web3.0",
        "change_pct": -2.7
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.07
      },
      {
        "name": "数据要素",
        "change_pct": -2.44
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.38
      },
      {
        "name": "AI营销",
        "change_pct": -3.21
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.29
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.28
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.87
      },
      {
        "name": "人形机器人",
        "change_pct": -1.28
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.52
      },
      {
        "name": "多模态",
        "change_pct": -2.27
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -3.14
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.21
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.92
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 33,
    "hot_rank_chg": 173,
    "stock_cnt": 5854,
    "price": "5.24",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "5412583600.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "5",
    "change_reason": "PCB上游",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -1.46
      },
      {
        "name": "锂电池",
        "change_pct": -1.36
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.24
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.52
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.65
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -1.55
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 53,
    "hot_rank_chg": -29,
    "stock_cnt": 5854,
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
        "change_pct": -1.46
      },
      {
        "name": "禽流感",
        "change_pct": -1.79
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.61
      },
      {
        "name": "农药",
        "change_pct": -2.55
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": -2.27
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 2.43
      }
    ]
  },
  {
    "code": "000783",
    "name": "长江证券",
    "hot_rank": 57,
    "hot_rank_chg": 216,
    "stock_cnt": 5854,
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
        "change_pct": 1.35
      },
      {
        "name": "券商",
        "change_pct": 3.0
      },
      {
        "name": "大金融",
        "change_pct": 0.5
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 62,
    "hot_rank_chg": -26,
    "stock_cnt": 5854,
    "price": "10.27",
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
        "change_pct": -1.86
      },
      {
        "name": "医疗器械",
        "change_pct": -2.04
      },
      {
        "name": "基因测序",
        "change_pct": -1.33
      },
      {
        "name": "PCB板",
        "change_pct": 1.86
      },
      {
        "name": "医药",
        "change_pct": -1.37
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.65
      },
      {
        "name": "化学原料药",
        "change_pct": -1.35
      },
      {
        "name": "食品安全",
        "change_pct": -1.94
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.72
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.06
      },
      {
        "name": "异丙醇",
        "change_pct": -2.97
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.54
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -1.36
      }
    ]
  },
  {
    "code": "600909",
    "name": "华安证券",
    "hot_rank": 79,
    "hot_rank_chg": -28,
    "stock_cnt": 5854,
    "price": "12.05",
    "change": "4.69",
    "market_id": "17",
    "circulate_market_value": "60541722000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.02
      },
      {
        "name": "期货概念",
        "change_pct": 1.35
      },
      {
        "name": "券商",
        "change_pct": 3.0
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.58
      },
      {
        "name": "大金融",
        "change_pct": 0.5
      },
      {
        "name": "国企改革",
        "change_pct": -1.31
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600172", "name": "黄河旋风", "hot_rank": 1, "hot_rank_chg": 25, "stock_cnt": 5854, "price": "18.27", "change": "6.84", "market_id": "17", "circulate_market_value": "23317193000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 2, "hot_rank_chg": 11, "stock_cnt": 5854, "price": "68.10", "change": "10.00", "market_id": "17", "circulate_market_value": "232421870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "7.52", "change": "6.37", "market_id": "33", "circulate_market_value": "265960850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.55}, {"name": "手机产业链", "change_pct": 0.75}, {"name": "超高清视频", "change_pct": -0.36}, {"name": "苹果产业链", "change_pct": 0.98}, {"name": "半导体", "change_pct": 2.28}, {"name": "人工智能", "change_pct": -1.79}, {"name": "互联网医疗", "change_pct": -2.27}, {"name": "VR&AR", "change_pct": -0.27}, {"name": "OLED", "change_pct": 0.86}, {"name": "京津冀", "change_pct": -1.59}, {"name": "物联网", "change_pct": -1.16}, {"name": "指纹识别", "change_pct": -0.57}, {"name": "汽车零部件", "change_pct": -2.24}, {"name": "白马股", "change_pct": 0.37}, {"name": "智能制造", "change_pct": -1.31}, {"name": "小米概念股", "change_pct": 0.05}, {"name": "国产芯片", "change_pct": 1.47}, {"name": "液晶面板/LCD", "change_pct": -0.2}, {"name": "全息概念", "change_pct": -1.75}, {"name": "理想汽车概念股", "change_pct": -0.99}, {"name": "MicroLED", "change_pct": 1.37}, {"name": "钙钛矿电池", "change_pct": -0.12}, {"name": "智能手表", "change_pct": 0.44}, {"name": "MiniLED", "change_pct": 1.7}, {"name": "传感器", "change_pct": -0.53}, {"name": "大硅片", "change_pct": 2.87}, {"name": "AI PC", "change_pct": 0.35}, {"name": "华为产业链", "change_pct": -0.79}, {"name": "回购", "change_pct": -0.06}, {"name": "智能眼镜/MR头显", "change_pct": -0.28}, {"name": "玻璃基板封装", "change_pct": 3.47}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5854, "price": "775.21", "change": "9.95", "market_id": "17", "circulate_market_value": "518221630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 5, "hot_rank_chg": -4, "stock_cnt": 5854, "price": "104.17", "change": "10.00", "market_id": "17", "circulate_market_value": "186403320000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "先进封装"}, {"code": "000636", "name": "风华高科", "hot_rank": 6, "hot_rank_chg": 25, "stock_cnt": 5854, "price": "79.62", "change": "10.00", "market_id": "33", "circulate_market_value": "92121384000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC"}, {"code": "002185", "name": "华天科技", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "22.40", "change": "6.77", "market_id": "33", "circulate_market_value": "74427399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 8, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "56.16", "change": "8.50", "market_id": "17", "circulate_market_value": "47542435000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 9, "hot_rank_chg": 3, "stock_cnt": 5854, "price": "123.00", "change": "3.34", "market_id": "17", "circulate_market_value": "300757280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5854, "price": "25.31", "change": "10.00", "market_id": "17", "circulate_market_value": "52936933000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "存储芯片封测"}, {"code": "000066", "name": "中国长城", "hot_rank": 11, "hot_rank_chg": 28, "stock_cnt": 5854, "price": "20.47", "change": "7.74", "market_id": "33", "circulate_market_value": "66027517000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 12, "hot_rank_chg": 16, "stock_cnt": 5854, "price": "7.47", "change": "-4.48", "market_id": "17", "circulate_market_value": "92598786000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.95}, {"name": "核电", "change_pct": -1.47}, {"name": "强势人气股", "change_pct": -0.2}, {"name": "电力体制改革", "change_pct": -2.08}, {"name": "水电", "change_pct": -2.93}, {"name": "火电", "change_pct": -2.25}, {"name": "光伏", "change_pct": -0.71}, {"name": "风电", "change_pct": -1.77}, {"name": "国企改革", "change_pct": -1.31}, {"name": "算电协同", "change_pct": 0.03}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 13, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "70.80", "change": "9.23", "market_id": "17", "circulate_market_value": "283422080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 14, "hot_rank_chg": 72, "stock_cnt": 5854, "price": "97.82", "change": "10.00", "market_id": "17", "circulate_market_value": "143115980000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超算登顶"}, {"code": "600703", "name": "三安光电", "hot_rank": 15, "hot_rank_chg": -12, "stock_cnt": 5854, "price": "21.67", "change": "-0.64", "market_id": "17", "circulate_market_value": "108112036000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 16, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "207.88", "change": "-5.08", "market_id": "17", "circulate_market_value": "53639484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 17, "hot_rank_chg": -10, "stock_cnt": 5854, "price": "53.20", "change": "5.83", "market_id": "33", "circulate_market_value": "83744199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 18, "hot_rank_chg": 127, "stock_cnt": 5854, "price": "610.49", "change": "9.94", "market_id": "33", "circulate_market_value": "765702910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 19, "hot_rank_chg": 13, "stock_cnt": 5854, "price": "891.00", "change": "10.00", "market_id": "33", "circulate_market_value": "146939110000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "002384", "name": "东山精密", "hot_rank": 20, "hot_rank_chg": 26, "stock_cnt": 5854, "price": "275.80", "change": "7.26", "market_id": "33", "circulate_market_value": "382347530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 21, "hot_rank_chg": 92, "stock_cnt": 5854, "price": "116.73", "change": "13.20", "market_id": "33", "circulate_market_value": "96325624000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 22, "hot_rank_chg": 129, "stock_cnt": 5854, "price": "5.34", "change": "10.10", "market_id": "33", "circulate_market_value": "102165063000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "面板", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.55}, {"name": "手机产业链", "change_pct": 0.75}, {"name": "超高清视频", "change_pct": -0.36}, {"name": "半导体", "change_pct": 2.28}, {"name": "OLED", "change_pct": 0.86}, {"name": "光伏", "change_pct": -0.71}, {"name": "黑色家电", "change_pct": 0.08}, {"name": "家电", "change_pct": -1.44}, {"name": "智能制造", "change_pct": -1.31}, {"name": "工业互联网", "change_pct": -1.25}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.05}, {"name": "国产芯片", "change_pct": 1.47}, {"name": "腾讯概念股", "change_pct": -1.57}, {"name": "液晶面板/LCD", "change_pct": -0.2}, {"name": "MicroLED", "change_pct": 1.37}, {"name": "MiniLED", "change_pct": 1.7}, {"name": "华为产业链", "change_pct": -0.79}, {"name": "玻璃基板封装", "change_pct": 3.47}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 23, "hot_rank_chg": 4, "stock_cnt": 5854, "price": "8.03", "change": "-9.98", "market_id": "33", "circulate_market_value": "13054321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.7}, {"name": "电竞", "change_pct": -0.41}, {"name": "手游", "change_pct": 0.34}, {"name": "强势人气股", "change_pct": -0.2}, {"name": "人工智能", "change_pct": -1.79}, {"name": "游戏", "change_pct": 0.02}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.04}, {"name": "腾讯概念股", "change_pct": -1.57}, {"name": "快手概念股", "change_pct": -2.61}, {"name": "元宇宙", "change_pct": -1.75}, {"name": "虚拟数字人", "change_pct": -2.66}, {"name": "东数西算/算力", "change_pct": -1.33}, {"name": "web3.0", "change_pct": -2.7}, {"name": "AIGC概念", "change_pct": -2.07}, {"name": "数据要素", "change_pct": -2.44}, {"name": "字节跳动概念股", "change_pct": -2.38}, {"name": "AI营销", "change_pct": -3.21}, {"name": "ChatGPT", "change_pct": -2.29}, {"name": "智能眼镜/MR头显", "change_pct": -0.28}, {"name": "人工智能大模型", "change_pct": -1.87}, {"name": "人形机器人", "change_pct": -1.28}, {"name": "短剧/互动影游", "change_pct": -1.52}, {"name": "多模态", "change_pct": -2.27}, {"name": "Sora/AI视频", "change_pct": -3.14}, {"name": "IP经济/谷子经济", "change_pct": -1.21}, {"name": "小红书概念股", "change_pct": -2.92}]}, {"code": "002156", "name": "通富微电", "hot_rank": 24, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "77.81", "change": "4.25", "market_id": "33", "circulate_market_value": "118072957000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 25, "hot_rank_chg": 179, "stock_cnt": 5854, "price": "237.36", "change": "20.00", "market_id": "33", "circulate_market_value": "100093342000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "300394", "name": "天孚通信", "hot_rank": 26, "hot_rank_chg": 9, "stock_cnt": 5854, "price": "341.97", "change": "5.13", "market_id": "33", "circulate_market_value": "372196060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 27, "hot_rank_chg": -13, "stock_cnt": 5854, "price": "25.28", "change": "-0.90", "market_id": "33", "circulate_market_value": "11435124900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 28, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "22.77", "change": "6.10", "market_id": "33", "circulate_market_value": "17275894000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 29, "hot_rank_chg": 60, "stock_cnt": 5854, "price": "18.60", "change": "-9.36", "market_id": "33", "circulate_market_value": "28379533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 30, "hot_rank_chg": 11, "stock_cnt": 5854, "price": "76.99", "change": "0.27", "market_id": "17", "circulate_market_value": "1527796700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 31, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "43.79", "change": "-1.04", "market_id": "33", "circulate_market_value": "47239222000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 32, "hot_rank_chg": 46, "stock_cnt": 5854, "price": "154.99", "change": "8.12", "market_id": "33", "circulate_market_value": "298016400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 33, "hot_rank_chg": 173, "stock_cnt": 5854, "price": "5.24", "change": "10.08", "market_id": "33", "circulate_market_value": "5412583600.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "PCB上游", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.46}, {"name": "锂电池", "change_pct": -1.36}, {"name": "ST摘帽", "change_pct": -2.24}, {"name": "粤港澳大湾区", "change_pct": -1.52}, {"name": "新能源汽车", "change_pct": -1.65}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -1.55}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 34, "hot_rank_chg": 46, "stock_cnt": 5854, "price": "1323.40", "change": "0.85", "market_id": "33", "circulate_market_value": "1468894300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 35, "hot_rank_chg": -14, "stock_cnt": 5854, "price": "49.86", "change": "-0.30", "market_id": "17", "circulate_market_value": "82970622000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 36, "hot_rank_chg": 7, "stock_cnt": 5854, "price": "187.20", "change": "5.58", "market_id": "17", "circulate_market_value": "448250690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600141", "name": "兴发集团", "hot_rank": 37, "hot_rank_chg": 30, "stock_cnt": 5854, "price": "47.48", "change": "10.01", "market_id": "17", "circulate_market_value": "57058608000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "磷化工"}, {"code": "300285", "name": "国瓷材料", "hot_rank": 38, "hot_rank_chg": 55, "stock_cnt": 5854, "price": "98.40", "change": "7.28", "market_id": "33", "circulate_market_value": "84000993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 39, "hot_rank_chg": -20, "stock_cnt": 5854, "price": "86.99", "change": "4.98", "market_id": "33", "circulate_market_value": "98338554000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 40, "hot_rank_chg": -18, "stock_cnt": 5854, "price": "72.96", "change": "6.14", "market_id": "17", "circulate_market_value": "106667141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 41, "hot_rank_chg": 77, "stock_cnt": 5854, "price": "21.30", "change": "10.02", "market_id": "33", "circulate_market_value": "12426673300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "002008", "name": "大族激光", "hot_rank": 42, "hot_rank_chg": -8, "stock_cnt": 5854, "price": "152.80", "change": "0.37", "market_id": "33", "circulate_market_value": "146187940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 43, "hot_rank_chg": -33, "stock_cnt": 5854, "price": "130.10", "change": "5.70", "market_id": "33", "circulate_market_value": "84959935000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 44, "hot_rank_chg": 61, "stock_cnt": 5854, "price": "480.30", "change": "15.18", "market_id": "17", "circulate_market_value": "226493460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 45, "hot_rank_chg": 13, "stock_cnt": 5854, "price": "261.46", "change": "-1.84", "market_id": "33", "circulate_market_value": "204069100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 46, "hot_rank_chg": 17, "stock_cnt": 5854, "price": "171.99", "change": "2.76", "market_id": "17", "circulate_market_value": "38642478000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 47, "hot_rank_chg": 10, "stock_cnt": 5854, "price": "53.53", "change": "6.57", "market_id": "33", "circulate_market_value": "81254816000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688797", "name": "臻宝科技", "hot_rank": 48, "hot_rank_chg": -44, "stock_cnt": 5854, "price": "574.44", "change": "-1.80", "market_id": "17", "circulate_market_value": "16769453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 49, "hot_rank_chg": -31, "stock_cnt": 5854, "price": "38.50", "change": "3.91", "market_id": "33", "circulate_market_value": "45294052000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 50, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "105.68", "change": "5.60", "market_id": "33", "circulate_market_value": "153545150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 51, "hot_rank_chg": 65, "stock_cnt": 5854, "price": "25.92", "change": "-6.26", "market_id": "17", "circulate_market_value": "533998480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605589", "name": "圣泉集团", "hot_rank": 52, "hot_rank_chg": 39, "stock_cnt": 5854, "price": "72.96", "change": "10.00", "market_id": "17", "circulate_market_value": "61718250000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PPO树脂"}, {"code": "600226", "name": "亨通股份", "hot_rank": 53, "hot_rank_chg": -29, "stock_cnt": 5854, "price": "11.20", "change": "-1.84", "market_id": "17", "circulate_market_value": "33313070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.46}, {"name": "禽流感", "change_pct": -1.79}, {"name": "铜箔/覆铜板", "change_pct": 1.61}, {"name": "农药", "change_pct": -2.55}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": -2.27}, {"name": "PET复合铜箔", "change_pct": 2.43}]}, {"code": "000811", "name": "冰轮环境", "hot_rank": 54, "hot_rank_chg": -2, "stock_cnt": 5854, "price": "53.52", "change": "10.01", "market_id": "33", "circulate_market_value": "52363737000.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "数据中心液冷"}, {"code": "600186", "name": "莲花控股", "hot_rank": 55, "hot_rank_chg": 46, "stock_cnt": 5854, "price": "15.60", "change": "10.01", "market_id": "17", "circulate_market_value": "27910557000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力"}, {"code": "301308", "name": "江波龙", "hot_rank": 56, "hot_rank_chg": 40, "stock_cnt": 5854, "price": "677.30", "change": "9.25", "market_id": "33", "circulate_market_value": "190898290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000783", "name": "长江证券", "hot_rank": 57, "hot_rank_chg": 216, "stock_cnt": 5854, "price": "10.15", "change": "9.97", "market_id": "33", "circulate_market_value": "56130240000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "券商", "xgb_concepts": [{"name": "期货概念", "change_pct": 1.35}, {"name": "券商", "change_pct": 3.0}, {"name": "大金融", "change_pct": 0.5}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 58, "hot_rank_chg": -42, "stock_cnt": 5854, "price": "74.42", "change": "-0.84", "market_id": "33", "circulate_market_value": "543379720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 59, "hot_rank_chg": 84, "stock_cnt": 5854, "price": "70.50", "change": "4.91", "market_id": "17", "circulate_market_value": "54440056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 60, "hot_rank_chg": 147, "stock_cnt": 5854, "price": "21.11", "change": "4.61", "market_id": "33", "circulate_market_value": "281888070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 61, "hot_rank_chg": -28, "stock_cnt": 5854, "price": "48.75", "change": "-7.84", "market_id": "17", "circulate_market_value": "40404544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 62, "hot_rank_chg": -26, "stock_cnt": 5854, "price": "10.27", "change": "-6.81", "market_id": "33", "circulate_market_value": "4810740400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -1.86}, {"name": "医疗器械", "change_pct": -2.04}, {"name": "基因测序", "change_pct": -1.33}, {"name": "PCB板", "change_pct": 1.86}, {"name": "医药", "change_pct": -1.37}, {"name": "新能源汽车", "change_pct": -1.65}, {"name": "化学原料药", "change_pct": -1.35}, {"name": "食品安全", "change_pct": -1.94}, {"name": "辅助生殖", "change_pct": -1.72}, {"name": "光刻机（胶）", "change_pct": -0.06}, {"name": "异丙醇", "change_pct": -2.97}, {"name": "新冠病毒防治", "change_pct": -1.54}, {"name": "磷酸铁锂", "change_pct": -1.36}]}, {"code": "600378", "name": "昊华科技", "hot_rank": 63, "hot_rank_chg": -1, "stock_cnt": 5854, "price": "68.40", "change": "1.86", "market_id": "17", "circulate_market_value": "73363471000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 64, "hot_rank_chg": 7, "stock_cnt": 5854, "price": "36.87", "change": "-1.99", "market_id": "33", "circulate_market_value": "28847259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 65, "hot_rank_chg": 8, "stock_cnt": 5854, "price": "15.77", "change": "3.96", "market_id": "17", "circulate_market_value": "27363803000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 66, "hot_rank_chg": 73, "stock_cnt": 5854, "price": "57.19", "change": "4.97", "market_id": "17", "circulate_market_value": "39539771000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301013", "name": "利和兴", "hot_rank": 67, "hot_rank_chg": 197, "stock_cnt": 5854, "price": "84.91", "change": "13.29", "market_id": "33", "circulate_market_value": "16068507000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 68, "hot_rank_chg": 161, "stock_cnt": 5854, "price": "163.62", "change": "12.64", "market_id": "33", "circulate_market_value": "305937320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 69, "hot_rank_chg": 40, "stock_cnt": 5854, "price": "24.95", "change": "6.21", "market_id": "17", "circulate_market_value": "28295259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300179", "name": "四方达", "hot_rank": 70, "hot_rank_chg": 167, "stock_cnt": 5854, "price": "62.00", "change": "4.03", "market_id": "33", "circulate_market_value": "23186876000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 71, "hot_rank_chg": -26, "stock_cnt": 5854, "price": "50.00", "change": "0.75", "market_id": "17", "circulate_market_value": "32608585000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 72, "hot_rank_chg": 10, "stock_cnt": 5854, "price": "183.27", "change": "-1.83", "market_id": "33", "circulate_market_value": "151933680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 73, "hot_rank_chg": -9, "stock_cnt": 5854, "price": "37.31", "change": "-1.22", "market_id": "17", "circulate_market_value": "82804051000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 74, "hot_rank_chg": 52, "stock_cnt": 5854, "price": "306.25", "change": "5.75", "market_id": "33", "circulate_market_value": "137823450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 75, "hot_rank_chg": -9, "stock_cnt": 5854, "price": "112.99", "change": "-2.44", "market_id": "33", "circulate_market_value": "81840399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 76, "hot_rank_chg": 57, "stock_cnt": 5854, "price": "14.70", "change": "5.00", "market_id": "33", "circulate_market_value": "13035324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 77, "hot_rank_chg": 60, "stock_cnt": 5854, "price": "77.58", "change": "4.06", "market_id": "17", "circulate_market_value": "78369993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 78, "hot_rank_chg": -40, "stock_cnt": 5854, "price": "575.00", "change": "-0.86", "market_id": "17", "circulate_market_value": "233644530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600909", "name": "华安证券", "hot_rank": 79, "hot_rank_chg": -28, "stock_cnt": 5854, "price": "12.05", "change": "4.69", "market_id": "17", "circulate_market_value": "60541722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.02}, {"name": "期货概念", "change_pct": 1.35}, {"name": "券商", "change_pct": 3.0}, {"name": "安徽国企改革", "change_pct": -0.58}, {"name": "大金融", "change_pct": 0.5}, {"name": "国企改革", "change_pct": -1.31}]}, {"code": "002409", "name": "雅克科技", "hot_rank": 80, "hot_rank_chg": -51, "stock_cnt": 5854, "price": "181.03", "change": "4.61", "market_id": "33", "circulate_market_value": "57662173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 81, "hot_rank_chg": 67, "stock_cnt": 5854, "price": "38.44", "change": "2.73", "market_id": "33", "circulate_market_value": "154821760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 82, "hot_rank_chg": 137, "stock_cnt": 5854, "price": "68.57", "change": "5.82", "market_id": "33", "circulate_market_value": "100580657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 83, "hot_rank_chg": -68, "stock_cnt": 5854, "price": "17.88", "change": "1.25", "market_id": "33", "circulate_market_value": "128730722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600392", "name": "盛和资源", "hot_rank": 84, "hot_rank_chg": 1, "stock_cnt": 5854, "price": "32.20", "change": "1.90", "market_id": "17", "circulate_market_value": "56441016000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 85, "hot_rank_chg": -11, "stock_cnt": 5854, "price": "52.98", "change": "3.88", "market_id": "17", "circulate_market_value": "17058139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 86, "hot_rank_chg": -21, "stock_cnt": 5854, "price": "84.69", "change": "2.95", "market_id": "17", "circulate_market_value": "107693621000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 87, "hot_rank_chg": 23, "stock_cnt": 5854, "price": "114.14", "change": "7.27", "market_id": "33", "circulate_market_value": "263592940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 88, "hot_rank_chg": -46, "stock_cnt": 5854, "price": "25.87", "change": "9.99", "market_id": "33", "circulate_market_value": "15390895000.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "转债摘牌"}, {"code": "300433", "name": "蓝思科技", "hot_rank": 89, "hot_rank_chg": 32, "stock_cnt": 5854, "price": "55.72", "change": "5.29", "market_id": "33", "circulate_market_value": "276911680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 90, "hot_rank_chg": 4, "stock_cnt": 5854, "price": "173.58", "change": "3.39", "market_id": "33", "circulate_market_value": "174445410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002335", "name": "科华数据", "hot_rank": 91, "hot_rank_chg": 459, "stock_cnt": 5854, "price": "42.25", "change": "9.97", "market_id": "33", "circulate_market_value": "27873790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 92, "hot_rank_chg": -33, "stock_cnt": 5854, "price": "55.20", "change": "-2.02", "market_id": "33", "circulate_market_value": "83297408000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 93, "hot_rank_chg": 251, "stock_cnt": 5854, "price": "34.57", "change": "9.99", "market_id": "17", "circulate_market_value": "13239074100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体设备"}, {"code": "600707", "name": "彩虹股份", "hot_rank": 94, "hot_rank_chg": -33, "stock_cnt": 5854, "price": "13.63", "change": "1.26", "market_id": "17", "circulate_market_value": "48899938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 95, "hot_rank_chg": 75, "stock_cnt": 5854, "price": "279.16", "change": "4.75", "market_id": "17", "circulate_market_value": "320036430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001696", "name": "宗申动力", "hot_rank": 96, "hot_rank_chg": 71, "stock_cnt": 5854, "price": "25.26", "change": "7.95", "market_id": "33", "circulate_market_value": "22516719000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300077", "name": "国民技术", "hot_rank": 97, "hot_rank_chg": 299, "stock_cnt": 5854, "price": "29.03", "change": "12.61", "market_id": "33", "circulate_market_value": "16440499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600330", "name": "天通股份", "hot_rank": 98, "hot_rank_chg": 58, "stock_cnt": 5854, "price": "35.60", "change": "10.01", "market_id": "17", "circulate_market_value": "43910265000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块上游"}, {"code": "600552", "name": "凯盛科技", "hot_rank": 99, "hot_rank_chg": -49, "stock_cnt": 5854, "price": "26.91", "change": "-3.38", "market_id": "17", "circulate_market_value": "25419372000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002171", "name": "楚江新材", "hot_rank": 100, "hot_rank_chg": 47, "stock_cnt": 5854, "price": "15.71", "change": "4.59", "market_id": "33", "circulate_market_value": "25351878000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002579", "name": "中京电子", "price": 21.3, "change_pct": 10.02, "reason": "公司系国内少数兼具刚柔印制电路板批量生产与较强研发能力的PCB制造商，部分产品有直接或间接配套人形机器人的研发、生产等", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 22.46, "first_limit_up": 1782356610, "break_limit_up_times": 0}, {"code": "000100", "name": "TCL科技", "price": 5.34, "change_pct": 10.1, "reason": "公司旗下子公司天津普林与TCL华星曾联合研发并展出过玻璃芯基板，且依托其在显示面板领域积累的精密加工等底层技术优势，目前正对玻璃基封装领域进行前期调研与技术预研", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 11.8, "first_limit_up": 1782352038, "break_limit_up_times": 1}, {"code": "002068", "name": "黑猫股份", "price": 14.83, "change_pct": 10.01, "reason": "国内炭黑行业龙头；公司介孔碳产品已进入中试阶段，目前中试产品已送客户试样推广，主要用于硅碳负极材料及电容炭领域", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 10.63, "first_limit_up": 1782351105, "break_limit_up_times": 7}, {"code": "600667", "name": "太极实业", "price": 25.31, "change_pct": 10.0, "reason": "DRAM封装龙头；子公司海太半导体的封测业务主要是为SK海力士的DRAM产品提供后工序服务，对12英寸1Z纳米级晶圆进行集成电路封装，海太半导体由公司和SK海力士共同投资组建，公司持有海太半导体55%股权，SK海力士持有海太半导体45%股权", "plates": ["闪存"], "limit_up_days": 2, "turnover_ratio": 0.73, "first_limit_up": 1782350700, "break_limit_up_times": 0}, {"code": "000823", "name": "超声电子", "price": 25.87, "change_pct": 9.99, "reason": "公司M7/M8级高速覆铜板处于研发测试阶段，800G、1.6T光模块配套PCB在研究跟进中", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 8.32, "first_limit_up": 1782351135, "break_limit_up_times": 0}, {"code": "688669", "name": "聚石化学", "price": 88.73, "change_pct": 20.0, "reason": "1、公司光刻胶树脂产品已完成中试和应用验证，并储备了LCD光刻胶等专利技术；\n2、子公司龙华化工五氧化二磷产能居全国前列，高纯多聚磷酸已获天赐材料认可，用于六氟磷酸锂", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.07, "first_limit_up": 1782363622, "break_limit_up_times": 0}, {"code": "603500", "name": "祥和实业", "price": 12.96, "change_pct": 10.02, "reason": "公司在电子元器件配件方面，紧跟铝电解电容器技术迭代，已成功开发应用于超级电容、锂电池等领域的电容器用橡胶密封塞等产品；国内主要客户包括江海股份、艾华集团等知名电容器公司", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 3.8, "first_limit_up": 1782351850, "break_limit_up_times": 0}, {"code": "000034", "name": "神州数码", "price": 27.94, "change_pct": 10.0, "reason": "1、公司旗下合肥木犀实现400G和800G交换机量产，拥有英伟达、博通、思科等多个品牌交换芯片对应的交换机产品的研发和生产能力，所生产的交换机可以适配当前国内外主流的服务器设备；\n神州鲲泰基于华为昇腾310P芯片开发AI推理平台，可为国产化AI算力提供保障，AI推理套件产品算力最高达176TOPS；\n2、公司经销长鑫存储各类型号产品，国产存储业务规模保持高速成长", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.06, "first_limit_up": 1782351204, "break_limit_up_times": 3}, {"code": "603527", "name": "众源新材", "price": 14.08, "change_pct": 10.0, "reason": "公司铜箔为压延铜箔，目前铜箔最薄能做到9微米，可以用于PCB板上", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.78, "first_limit_up": 1782353637, "break_limit_up_times": 0}, {"code": "601798", "name": "蓝科高新", "price": 7.83, "change_pct": 9.97, "reason": "公司拟1.31亿元购买中国空分51%股权，标的是一家以技术为核心，工程设计、咨询和工程总承包业务并举的专业工程公司，业务领域涉及工业气体制备、天然气液化、低温液体贮运、环保工程和废水深度处理回用、化工工程和能源综合回收利用、自动化控制等", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 6.41, "first_limit_up": 1782353704, "break_limit_up_times": 2}, {"code": "603929", "name": "亚翔集成", "price": 255.07, "change_pct": 10.0, "reason": "公司主营洁净室工程，台湾亚翔持有公司53.99%股权，年报净利润同比增长40.30%", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 1.25, "first_limit_up": 1782350701, "break_limit_up_times": 1}, {"code": "000048", "name": "京基智农", "price": 22.31, "change_pct": 10.01, "reason": "公司主营业务包括生猪养殖与销售、饲料生产与销售、种鸡与肉鸡养殖与销售等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.66, "first_limit_up": 1782365007, "break_limit_up_times": 9}, {"code": "600500", "name": "中化国际", "price": 8.64, "change_pct": 10.06, "reason": "1、公司拟收购南通星辰100%股权，标的核心业务为环氧树脂和工程塑料，主营产品包括双酚A、环氧树脂、聚苯醚（PPE）、聚对苯二甲酸丁二酯（PBT）及系列改性工程塑料；\n2、目前公司对位芳纶总产能8000吨/年，已实现光纤光缆领域全球TOP5客户稳定供货", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.65, "first_limit_up": 1782363610, "break_limit_up_times": 0}, {"code": "600857", "name": "宁波中百", "price": 17.36, "change_pct": 10.01, "reason": "宁波大型百货零售商店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.29, "first_limit_up": 1782351611, "break_limit_up_times": 1}, {"code": "000609", "name": "*ST中迪", "price": 11.7, "change_pct": 5.03, "reason": "公司关联方深圳天微电子拟将其持有的广西天微电子有限公司70%股权无偿赠与公司", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 5.06, "first_limit_up": 1782369351, "break_limit_up_times": 2}, {"code": "600228", "name": "返利科技", "price": 9.81, "change_pct": 9.98, "reason": "国内知名的在线导购公司，基于人工智能技术开发的电商导购APP；控股股东将变更为繁枫智能", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 0.56, "first_limit_up": 1782350701, "break_limit_up_times": 0}, {"code": "603690", "name": "至纯科技", "price": 34.57, "change_pct": 9.99, "reason": "公司成为国内领先的核心工艺设备及系统专业供应商，与深圳新凯来多年保持合作", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.21, "first_limit_up": 1782364879, "break_limit_up_times": 3}, {"code": "002518", "name": "科士达", "price": 54.43, "change_pct": 10.0, "reason": "公司针对AI智算场景已构建完备产品体系，包括PowerFort一体化电力模块、兆瓦级UPS、LiquiX AI智算液冷CDU等，并与字节跳动、阿里巴巴、京东等头部企业形成稳定合作格局", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 2.22, "first_limit_up": 1782352989, "break_limit_up_times": 0}, {"code": "002990", "name": "盛视科技", "price": 72.6, "change_pct": 10.0, "reason": "1、公司参股的苏州亿铸智能科技有限公司是一家将新型存储器ReRAM及存算一体创新计算架构相结合，面向数据中心、云计算等场景的大算力AI芯片公司；\n2、人工智能智慧口岸应用领域领先企业之一，已建立了机器人产品线，包括室内/外巡检机器人、协作机器人、车底查验机器人、测温机器人、协运机器人等", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 6.28, "first_limit_up": 1782351096, "break_limit_up_times": 4}, {"code": "600516", "name": "方大炭素", "price": 6.77, "change_pct": 10.08, "reason": "1、国内炭素龙头；公司石墨烯散热垫片正与英伟达对接；控股子公司成都炭材在光纤领域已与国内企业合作多年，成为其稳定的石墨材料供应商；\n2、公司及控股子公司成都炭材已取得民用核安全设备制造许可证，高温气冷堆炭/石墨堆内构件、钍基熔盐堆用TEMR超细颗粒核级石墨及可控核聚变石墨铠甲等产品已量产销售", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.6, "first_limit_up": 1782354624, "break_limit_up_times": 2}, {"code": "600058", "name": "五矿发展", "price": 11.77, "change_pct": 10.0, "reason": "公司拟通过资产置换、发行股份及支付现金方式购买五矿矿业控股有限公司100%股权及鲁中矿业有限公司100%股权，所涉及的审计、评估工作已初步完成，正在履行国资评估备案程序", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 2.44, "first_limit_up": 1782353720, "break_limit_up_times": 0}, {"code": "603378", "name": "*ST亚士", "price": 5.01, "change_pct": 5.03, "reason": "行业内少数同时拥有功能型建筑涂料、保温装饰板和保温板三大产品体系及其系统服务能力的企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.49, "first_limit_up": 1782370242, "break_limit_up_times": 0}, {"code": "603313", "name": "梦百合", "price": 5.59, "change_pct": 10.04, "reason": "记忆绵家居制品供应商；公司主要从事致力于提升人类深度睡眠的家居产品—记忆绵床垫、记忆绵枕头等家居产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.46, "first_limit_up": 1782351255, "break_limit_up_times": 1}, {"code": "688380", "name": "中微半导", "price": 61.74, "change_pct": 20.0, "reason": "公司MCU、Nor flash等产品涨价15%~50%", "plates": ["闪存"], "limit_up_days": 1, "turnover_ratio": 6.11, "first_limit_up": 1782352638, "break_limit_up_times": 0}, {"code": "600579", "name": "中化装备", "price": 7.89, "change_pct": 10.04, "reason": "公司工业机器人产品包括单维滑轨机器人和工业机器人系列", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.66, "first_limit_up": 1782351505, "break_limit_up_times": 1}, {"code": "300223", "name": "北京君正", "price": 237.36, "change_pct": 20.0, "reason": "公司存储芯片分为SRAM、DRAM和Flash三大类别，主要面向汽车、工业、医疗等行业市场及高端消费类市场，Flash产品线包括了目前全球主流的NOR Flash存储芯片和NAND Flash存储芯片", "plates": ["闪存"], "limit_up_days": 1, "turnover_ratio": 13.38, "first_limit_up": 1782364077, "break_limit_up_times": 1}, {"code": "603800", "name": "洪田股份", "price": 84.95, "change_pct": 10.0, "reason": "子公司洪镭光学获得半导体掩模版直写光刻机订单", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.73, "first_limit_up": 1782351660, "break_limit_up_times": 2}, {"code": "605366", "name": "宏柏新材", "price": 13.07, "change_pct": 10.02, "reason": "1、公司重点布局2万吨光纤级高纯四氯化硅和5000吨电子级正硅酸乙酯项目，以满足AI算力及半导体产业需求，具备高纯硅烷产品的生产工艺技术，能较快实现量产落地；\n2、国内功能性硅烷行业龙头企业；公司具备完整的“硅块-三氯氢硅-中间体-功能性硅烷-气相白炭黑”绿色循环产业链，相关产品和技术适用于液体硅胶", "plates": ["光通信"], "limit_up_days": 3, "turnover_ratio": 1.94, "first_limit_up": 1782350701, "break_limit_up_times": 0}, {"code": "001309", "name": "德明利", "price": 891, "change_pct": 10.0, "reason": "公司目前已建立了完善的存储产品矩阵，包括移动存储、固态硬盘、嵌入式存储、内存条等", "plates": ["闪存"], "limit_up_days": 1, "turnover_ratio": 12.3, "first_limit_up": 1782365211, "break_limit_up_times": 10}, {"code": "603115", "name": "海星股份", "price": 131.33, "change_pct": 10.0, "reason": "公司已切入AI服务器/数据中心用铝电解电容器市场，800V DC高压架构带动AI电极箔需求增长，公司主营产品电极箔是铝电解电容器的核心原材料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 2.06, "first_limit_up": 1782351535, "break_limit_up_times": 1}, {"code": "002965", "name": "祥鑫科技", "price": 47.16, "change_pct": 10.01, "reason": "公司与广东省科学院智能制造研究所共建人形机器人关键零部件联合技术创新中心", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.13, "first_limit_up": 1782352710, "break_limit_up_times": 0}, {"code": "300819", "name": "聚杰微纤", "price": 84.22, "change_pct": 20.01, "reason": "子公司肌动科技公司的驱动纤维，主要应用在仿生肌肉方面，但目前还处于研发与打样阶段", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.96, "first_limit_up": 1782354615, "break_limit_up_times": 0}, {"code": "002558", "name": "巨人网络", "price": 27.73, "change_pct": 10.0, "reason": "中国游戏行业龙头；公司确认参与光轮智能新一轮10亿元战略融资，布局人工智能进入真实物理世界，是公司在AI产业生态投资的重要举措", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.84, "first_limit_up": 1782352518, "break_limit_up_times": 4}, {"code": "600458", "name": "时代新材", "price": 16.92, "change_pct": 10.01, "reason": "1、公司是国内稀缺的超容隔膜核心供应商，为江海股份等核心客户的上游隔膜供应商，产品性能对标日本NKK；\n2、公司半导体封装新材料聚焦高端聚酰亚胺材料，用于IGBT等功率半导体封装领域，已打通材料研制至器件验证全链条，实现国产化闭环", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 9.46, "first_limit_up": 1782352211, "break_limit_up_times": 8}, {"code": "600678", "name": "ST金顶", "price": 6.9, "change_pct": 5.02, "reason": "公司参股公司开物信息发布矿用AI卫星", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 9.12, "first_limit_up": 1782364158, "break_limit_up_times": 2}, {"code": "300650", "name": "太龙股份", "price": 14.86, "change_pct": 20.03, "reason": "子公司博思达与英诺赛科存在氮化镓芯片方案沟通", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.04, "first_limit_up": 1782352494, "break_limit_up_times": 1}, {"code": "603063", "name": "禾望电气", "price": 55.17, "change_pct": 10.01, "reason": "公司携储能、光伏、氢能多个系列核心装备亮相Intersolar Europe 2026德国展，多款新品迎来海外首展，组串式/集中式储能变流器已实现海外市场GW级批量出货", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.2, "first_limit_up": 1782367773, "break_limit_up_times": 0}, {"code": "600668", "name": "尖峰集团", "price": 7.68, "change_pct": 10.03, "reason": "公司以建材和医药为主，以健康品、商贸物流、电缆等业务为辅", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.36, "first_limit_up": 1782368010, "break_limit_up_times": 7}, {"code": "600584", "name": "长电科技", "price": 104.17, "change_pct": 10.0, "reason": "国内封测龙头，拟投资78亿元在上海临港建设高端先进封测工厂", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 6.69, "first_limit_up": 1782351528, "break_limit_up_times": 3}, {"code": "688376", "name": "美埃科技", "price": 101.52, "change_pct": 20.0, "reason": "公司为半导体行业提供国际最高洁净等级标准（ISO Class 1 级）洁净环境提供EFU（超薄型设备端自带风机过滤机组）及ULPA（超高效过滤器）等产品", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.94, "first_limit_up": 1782351564, "break_limit_up_times": 1}, {"code": "605376", "name": "XD博迁新", "price": 246.84, "change_pct": 10.0, "reason": "公司是全球领先、国内唯一的小粒径纳米镍粉生产商、国内MLCC镍粉市场领军企业，银包铜粉已批量用于光伏HJT电池低温浆料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 2.92, "first_limit_up": 1782352243, "break_limit_up_times": 3}, {"code": "002822", "name": "ST中装", "price": 2.76, "change_pct": 4.94, "reason": "公司申请撤销股票交易其他风险警示", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 0.53, "first_limit_up": 1782350700, "break_limit_up_times": 0}, {"code": "688093", "name": "世华科技", "price": 34.72, "change_pct": 20.01, "reason": "公司在集成电路领域的主要产品感光干膜系列产品已实现小批量出货，正在持续进行多元化客户开拓及验证中，感光干膜是PCB制程中的核心图形转移材料，公司产品具备高解析、强附着等优势", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.28, "first_limit_up": 1782356493, "break_limit_up_times": 4}, {"code": "603267", "name": "鸿远电子", "price": 83.6, "change_pct": 10.0, "reason": "公司为航天领域多层瓷介电容器（MLCC）的主要供应商之一", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 6.16, "first_limit_up": 1782352139, "break_limit_up_times": 4}, {"code": "002928", "name": "华夏航空", "price": 7.9, "change_pct": 10.03, "reason": "国内唯一一家规模化的独立支线航空公司，支线航点占全部国内支线机场比例达42%", "plates": ["民航"], "limit_up_days": 1, "turnover_ratio": 5.38, "first_limit_up": 1782355122, "break_limit_up_times": 0}, {"code": "002787", "name": "华源控股", "price": 30.34, "change_pct": 10.01, "reason": "公司2025年12月完成对暖芯科技51%股权收购，切入半导体温控设备及配套零配件赛道，并合资设立苏州致源真空科技布局分子泵，形成“核心温控设备+配套零配件”一体化体系，产品已导入华润微电子、拓荆科技、广州芯粤能等头部客户", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.39, "first_limit_up": 1782351405, "break_limit_up_times": 19}, {"code": "600903", "name": "贵州燃气", "price": 7.99, "change_pct": 10.06, "reason": "公司拟发行股份购买贵州页岩气勘探开发有限责任公司100%股权，标的公司实现高纯气体生产领域零的突破，高纯氦气日均产出超200立方米", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.81, "first_limit_up": 1782365886, "break_limit_up_times": 0}, {"code": "002654", "name": "万润科技", "price": 20.72, "change_pct": 9.98, "reason": "公司大股东为长江产业投资集团有限公司，子公司万润半导体主要从事存储器", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 12.3, "first_limit_up": 1782356880, "break_limit_up_times": 1}, {"code": "002484", "name": "江海股份", "price": 111.02, "change_pct": 10.0, "reason": "国内唯一、全球少数几家在铝电解电容器、薄膜电容器、超级电容器三大类电容器同时研产销的公司，而且是品种最齐全、产业链最完整的企业", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 2.6, "first_limit_up": 1782351540, "break_limit_up_times": 0}, {"code": "002387", "name": "维信诺", "price": 8.97, "change_pct": 10.06, "reason": "全球AMOLED显示产业的领军企业之一；公司ViP技术已量产供货，4月9日获行业协会鉴定“国际领先”，并搭载穿戴产品出货", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.96, "first_limit_up": 1782351204, "break_limit_up_times": 0}, {"code": "603595", "name": "ST东尼", "price": 35.22, "change_pct": 5.01, "reason": "无线充电材料及器件领先厂商，主要包括超微细电子线材、无线充电隔磁材料", "plates": ["ST股"], "limit_up_days": 5, "turnover_ratio": 0.41, "first_limit_up": 1782351006, "break_limit_up_times": 0}, {"code": "603065", "name": "宿迁联盛", "price": 20.13, "change_pct": 10.0, "reason": "公司拟设立合资公司开展磷化铟衬底业务，预计二期产能40万片/年", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 8.8, "first_limit_up": 1782353216, "break_limit_up_times": 1}, {"code": "603459", "name": "红板科技", "price": 94.96, "change_pct": 10.0, "reason": "公司面向光模块领域开展了800G三阶盲孔光模块PCB产品、高传输速率光模块电路板等多项研发项目，有生产1.6T光模块电路板的技术能力，相关业务正根据客户需求有序推进", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 15.05, "first_limit_up": 1782351677, "break_limit_up_times": 4}, {"code": "603733", "name": "仙鹤股份", "price": 27.21, "change_pct": 9.98, "reason": "1、公司参与的“超级电容器纸”行业标准已发布，电解电容器纸广泛应用于5G配套设施、工业通讯电源及汽车电子等领域；\n2、国内特种纸行业领军企业，已开展HNB新型烟草缓释材料端的开发", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 2.67, "first_limit_up": 1782366252, "break_limit_up_times": 0}, {"code": "002025", "name": "航天电器", "price": 73.27, "change_pct": 10.0, "reason": "1、国内光通信器件行业的重点骨干企业；控股子公司江苏奥雷光电有限公司主营业务为光模块、光互连产品研制生产，产品主要应用于防务、通信、视频监控和工业控制等领域；\n2、中航科工集团旗下，航天连接器龙头，市场占比超过70%", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 11.96, "first_limit_up": 1782351510, "break_limit_up_times": 24}, {"code": "600888", "name": "新疆众和", "price": 16.12, "change_pct": 10.03, "reason": "1、公司是新疆铝加工行业龙头，超高纯铝溅射靶基材实现批量供应；\n2、参股公司成都富江机械制造有限公司拥有武器装备科研生产许可证、武器装备承制资格证、武器装备质量体系认证、武器装备科研生产保密资格证，军工资质齐全", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1782351026, "break_limit_up_times": 4}, {"code": "603678", "name": "火炬电子", "price": 75.13, "change_pct": 10.0, "reason": "国内特种 MLCC (片式多层陶瓷电容器) 领先企业；公司正积极拓展商业航天、低空经济供应链，已参与部分客户在商业航天领域的产品配套", "plates": ["被动元件"], "limit_up_days": 2, "turnover_ratio": 3.13, "first_limit_up": 1782351097, "break_limit_up_times": 1}, {"code": "605589", "name": "圣泉集团", "price": 72.96, "change_pct": 10.0, "reason": "国内领先的PCB基板用电子树脂供应商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.23, "first_limit_up": 1782363751, "break_limit_up_times": 5}, {"code": "605318", "name": "法狮龙", "price": 134.2, "change_pct": 10.0, "reason": "设立全资子公司北宸星穹，服务于AI智算行业，满足客户算力调度、存算协同及推理响应需求", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.69, "first_limit_up": 1782354066, "break_limit_up_times": 2}, {"code": "603661", "name": "恒林股份", "price": 37.3, "change_pct": 10.0, "reason": "跨界布局培育钻石的家居龙头，通过子公司河南闪耀钻石开展业务，产品涵盖培育钻石饰品、大尺寸金刚石单晶片及金刚石单晶刀具", "plates": ["培育钻石"], "limit_up_days": 1, "turnover_ratio": 3.14, "first_limit_up": 1782351366, "break_limit_up_times": 0}, {"code": "600330", "name": "天通股份", "price": 35.6, "change_pct": 10.01, "reason": "公司生产的铌酸锂晶体材料是铌酸锂电光调制芯片及器件的上游关键原材料；公司已自主量产6英寸铌酸锂/钽酸锂晶体及黑化抛光晶片", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 13.29, "first_limit_up": 1782351990, "break_limit_up_times": 15}, {"code": "603067", "name": "振华股份", "price": 46.38, "change_pct": 10.01, "reason": "公司为全球产能最大、产品线最全的铬化学品龙头，金属铬产品在高温合金、铜基、铝基特种合金、高端焊接材料、溅射靶材等领域广泛应用，高温合金是燃气轮机的主要材料，单质铬的添加量在15%~20%之间", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.71, "first_limit_up": 1782352759, "break_limit_up_times": 3}, {"code": "603335", "name": "迪生力", "price": 9.1, "change_pct": 10.04, "reason": "公司拟斥资9800万元收购全芯半导体30%股权", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 24.17, "first_limit_up": 1782351695, "break_limit_up_times": 2}, {"code": "600237", "name": "铜峰电子", "price": 12.99, "change_pct": 9.99, "reason": "国内领先的薄膜电容及薄膜材料生产商，拥有完整的 “电容器用薄膜 - 金属化薄膜 - 薄膜电容器” 产业链", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 17.62, "first_limit_up": 1782363652, "break_limit_up_times": 2}, {"code": "600186", "name": "莲花控股", "price": 15.6, "change_pct": 10.01, "reason": "1、国内在产味精生产商历史最悠久的企业，一季度净利润增长42%；\n2、公司将以莲花科创为项目实施主体，积极引入行业实力战略合作伙伴，开展智能计算中心项目合作，在国内主要的算力节点，建设智算中心，高效推动算力租赁业务落地", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 8.86, "first_limit_up": 1782351677, "break_limit_up_times": 3}, {"code": "605300", "name": "佳禾食品", "price": 9.43, "change_pct": 10.04, "reason": "公司已成为国内外奶茶、咖啡等领域具有较高知名度的原料产品，蜜雪冰城和古茗均为公司下游客户", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.0, "first_limit_up": 1782351224, "break_limit_up_times": 0}, {"code": "688381", "name": "帝奥微", "price": 51.9, "change_pct": 20.0, "reason": "公司拟收购荣湃半导体100%股权，后者专注于高性能、高品质模拟芯片的设计、研发与销售，产品包括数字隔离器、隔离接口、隔离驱动、隔离采样、光MOS等系列产品，应用于汽车电子、工业控制、新能源、智能电表、智能家电等众多领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 12.68, "first_limit_up": 1782365712, "break_limit_up_times": 26}, {"code": "600141", "name": "兴发集团", "price": 47.48, "change_pct": 10.01, "reason": "公司是国内磷化工龙头；参股企业兴力电子拥有1.5万吨/年电子级氢氟酸产能，联营公司湖北瓮福主营产品为无水氟化氢", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 10.08, "first_limit_up": 1782364918, "break_limit_up_times": 45}, {"code": "002303", "name": "美盈森", "price": 4.25, "change_pct": 10.1, "reason": "国际领先的包装一体化综合服务商；公司主营运输包装、精品包装、标签及电子功能材料模切产品，并持续为消费电子、白酒、家电等行业龙头提供一体化包装服务", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 15.57, "first_limit_up": 1782352818, "break_limit_up_times": 1}, {"code": "600184", "name": "光电股份", "price": 29.17, "change_pct": 9.99, "reason": "兵工集团唯一光电上市平台，陆军光电武器装备核心供应商；公司光通信核心材料GP是光模块光隔离器中的核心材料", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 9.04, "first_limit_up": 1782351909, "break_limit_up_times": 7}, {"code": "001330", "name": "博纳影业", "price": 6.93, "change_pct": 10.0, "reason": "公司参与了春节档电影《飞驰人生3》出品发行", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.06, "first_limit_up": 1782356190, "break_limit_up_times": 0}, {"code": "000056", "name": "*ST皇庭", "price": 1.97, "change_pct": 4.79, "reason": "1、控股子公司意发功率核心产品为FRD等硅基功率半导体，同时具有IGBT设计能力，目前其拥有2条生产线，已稳定生产6英寸晶圆；\n2、公司实施“高新科技+商业管理”双主业战略，商业管理以“自持+整租+委托管理”模式布局粤港澳大湾区及全国一二线城市核心地段，旗下深圳皇庭广场已成为区域购物中心标识之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 8.42, "first_limit_up": 1782351042, "break_limit_up_times": 8}, {"code": "002141", "name": "贤丰控股", "price": 5.24, "change_pct": 10.08, "reason": "公司覆铜板上年度年产量近700万张，产品直接用于PCB生产", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 20.13, "first_limit_up": 1782367716, "break_limit_up_times": 1}, {"code": "002080", "name": "中材科技", "price": 92.93, "change_pct": 10.0, "reason": "1、公司自主研发的第一代低介电产品，已成功应用于高端 PCB 领域；\n2、全资子公司泰山玻纤专业从事玻璃纤维及其制品的研发、制造及销售，拥有超140万吨的玻璃纤维年产能，在玻璃纤维配方、大型玻纤池窑设计、窑炉纯氧燃烧技术等方面拥有核心自主知识产权，居世界领先水平", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 2.26, "first_limit_up": 1782352335, "break_limit_up_times": 8}, {"code": "002056", "name": "横店东磁", "price": 30.2, "change_pct": 10.02, "reason": "全球规模最大的铁氧体磁性材料生产企业；公司芯片电感已实现规模化量产且收入增速较高，AI服务器和数据中心的软磁磁芯/电感收入占软磁板块比重持续提升", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.22, "first_limit_up": 1782357405, "break_limit_up_times": 2}, {"code": "000962", "name": "东方钽业", "price": 84.02, "change_pct": 10.0, "reason": "国内最大的钽、铌产品生产基地；公司涂层材料已配套商业航天火箭喷管，超导铌材及铌超导腔用于可控核聚变等国家大科学装置", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 7.63, "first_limit_up": 1782352083, "break_limit_up_times": 3}, {"code": "000636", "name": "风华高科", "price": 79.62, "change_pct": 10.0, "reason": "国内被动电子元件行业龙头；公司MLCC、合金电阻、大电流电感已批量导入国内头部AI服务器及机器人客户，AI算力订单充足", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 12.54, "first_limit_up": 1782365112, "break_limit_up_times": 6}, {"code": "002842", "name": "翔鹭钨业", "price": 51.41, "change_pct": 9.99, "reason": "公司是国内钨行业具备完整产业链的企业之一，一季度净利润同比增长2917.13%", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 19.77, "first_limit_up": 1782353232, "break_limit_up_times": 37}, {"code": "000766", "name": "通化金马", "price": 26.61, "change_pct": 10.0, "reason": "公司自主研发治疗轻、中度阿尔茨海默病的琥珀八氢氨吖啶片，为国家1.1类新药", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.19, "first_limit_up": 1782368421, "break_limit_up_times": 8}, {"code": "000818", "name": "航锦科技", "price": 14.81, "change_pct": 10.03, "reason": "1、公司是一家在国产军工芯片领域具有重要地位的企业，旗下子公司长沙韶光研发的高性能 GPU 芯片 SG6931 支持 2D/3D 图形加速等功能，还有反熔丝 FPGA 芯片因抗辐射等特性用于战机等关键设备，此外公司产品还涵盖模拟芯片、存储芯片、总线接口芯片等；\n2、公司智算算力板块已部署GPU服务器集群，自持服务器约1400台、运算能力1.5万P，为多家大型终端客户提供算力租赁及全栈解决方案，旗下超擎数智为DeepSeek提供光模块和交换机", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 3.13, "first_limit_up": 1782351123, "break_limit_up_times": 0}, {"code": "603989", "name": "艾华集团", "price": 53.75, "change_pct": 10.01, "reason": "国内铝电解电容器行业龙头；公司的产品是AI算力硬件供电与电能管理链条中的关键基础元件，可应用在AI基础设施的各个关键部位，如服务器电源及供电保障与能源系统等", "plates": ["被动元件"], "limit_up_days": 2, "turnover_ratio": 2.49, "first_limit_up": 1782351093, "break_limit_up_times": 2}, {"code": "603956", "name": "威派格", "price": 5.3, "change_pct": 9.96, "reason": "公司联合研发的工业四足机器人巡检方案已亮相中国城镇供水排水协会年会，搭载自研水务检测装置，可监测跑冒滴漏、有毒有害气体等九类场景，并已在绥滨县北山水厂项目实现数字孪生及大屏数字人智能体落地", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.85, "first_limit_up": 1782351290, "break_limit_up_times": 2}, {"code": "603010", "name": "万盛股份", "price": 15.53, "change_pct": 9.99, "reason": "磷系阻燃剂全球龙头，新型尼龙阻燃剂、覆铜板阻燃剂、PCB光刻胶用树脂等多款新产品已在不同生产基地顺利投产", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 4.56, "first_limit_up": 1782363674, "break_limit_up_times": 1}, {"code": "002980", "name": "华盛昌", "price": 123.83, "change_pct": 10.0, "reason": "公司拟收购伽蓝特100%股权，后者专注光通信模块和光芯片测试", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 7.17, "first_limit_up": 1782352587, "break_limit_up_times": 0}, {"code": "002254", "name": "泰和新材", "price": 20.17, "change_pct": 9.98, "reason": "1、长飞等光缆企业是公司对位芳纶的重要客户，正常年份该领域的销售占比约为40-50%；\n2、公司专业从事氨纶、芳纶等高性能纤维生产，相关产品可用于航空航天领域", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 13.2, "first_limit_up": 1782351735, "break_limit_up_times": 23}, {"code": "600962", "name": "国投中鲁", "price": 26.36, "change_pct": 10.02, "reason": "公司拟收购的中国电子工程设计院承担第一条由国内企业主导的12英寸3D闪存芯片生产线等多条集成电路产线设计总包", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.35, "first_limit_up": 1782352100, "break_limit_up_times": 2}, {"code": "002674", "name": "兴业科技", "price": 26.21, "change_pct": 9.99, "reason": "公司拟收购青岛立昂磷化铟衬底及半导体电子材料的研发、制造与销售业务", "plates": ["有色金属"], "limit_up_days": 5, "turnover_ratio": 0.99, "first_limit_up": 1782350700, "break_limit_up_times": 0}, {"code": "000783", "name": "长江证券", "price": 10.15, "change_pct": 9.97, "reason": "公司一季度净利润同比增长51.73%", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 9.71, "first_limit_up": 1782355143, "break_limit_up_times": 5}, {"code": "000811", "name": "冰轮环境", "price": 53.52, "change_pct": 10.01, "reason": "数据中心温控系统是旗下公司顿汉布什的主要业务之一，服务过国家超算广州中心（天河二号）、中国联通西安数据中心、中国移动贵州数据中心等；公司有产品服务数据中心液冷业务", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 6.49, "first_limit_up": 1782351426, "break_limit_up_times": 10}, {"code": "600152", "name": "维科技术", "price": 11.81, "change_pct": 9.96, "reason": "国内排名前五的3C数码电池供应商；公司与上海交大合作进行钠电研发，并在南昌基地实现国内首条GW级钠电产线量产，拥有能量密度160Wh/kg、循环6000次以上的钠电技术并推出多款产品，还申请了钠离子电池相关专利", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.3, "first_limit_up": 1782354490, "break_limit_up_times": 0}, {"code": "603019", "name": "中科曙光", "price": 97.82, "change_pct": 10.0, "reason": "公司ParaStor F9000全闪存储系统在生产型全节点和10节点榜单中实现双榜第一，是首个达成此成就的中国厂商。自今年2月国家超算互联网核心节点建设启动以来，ParaStor F9000已投入实际生产环境", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.0, "first_limit_up": 1782369370, "break_limit_up_times": 1}];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "300237": "[行政处罚事先告知书] 美晨科技：关于收到中国证券监督管理委员会《行政处罚事先告知书》的公告", "301372": "[行政处罚事先告知书] 科净源：关于收到中国证券监督管理委员会北京监管局的《行政处罚事先告知书》的公告"};