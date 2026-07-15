const UPDATE_TIME = "2026-07-15 04:51";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 5.13,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续78天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -4.18,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续201天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.88,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续248天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": -0.46,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续177天上榜",
    "rankChg": 0,
    "etfName": "航空航天ETF",
    "code": "886078"
  },
  {
    "name": "CRO概念",
    "rise": 6.78,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "PCB概念",
    "rise": -2.7,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "猪肉",
    "rise": 2.6,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "人形机器人",
    "rise": -0.27,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续412天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "培育钻石",
    "rise": -1.47,
    "rate": 0,
    "tag": "",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "算力租赁",
    "rise": 0.33,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续112天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光纤概念",
    "rise": -1.52,
    "rate": 0,
    "tag": "",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "AI应用",
    "rise": 1.92,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "减肥药",
    "rise": 5.86,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886051"
  },
  {
    "name": "先进封装",
    "rise": -4.18,
    "rate": 0,
    "tag": "",
    "hotTag": "连续41天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886009"
  },
  {
    "name": "白酒概念",
    "rise": 3.27,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "国家大基金持股",
    "rise": -4.96,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "机器人概念",
    "rise": 0.11,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "ST板块",
    "rise": 0.24,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续86天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "2026中报预增",
    "rise": 0.31,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "化工行业ETF",
    "code": "886110"
  },
  {
    "name": "芯片概念",
    "rise": -1.97,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  }
];
const THS_EVENTS = [
  {
    "title": "“BD红利”进入兑现窗口 创新药企价值加速分化",
    "desc": "",
    "heat": 792196,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗"
    ],
    "stocks": [
      {
        "name": "中赋科技",
        "code": "300692",
        "chg": 20.0489
      }
    ]
  },
  {
    "title": "全国用电负荷达15.51亿千瓦再创新高",
    "desc": "",
    "heat": 418747,
    "direction": "电力",
    "themes": [
      "电力",
      "绿色电力"
    ],
    "stocks": [
      {
        "name": "中赋科技",
        "code": "300692",
        "chg": 20.0489
      }
    ]
  },
  {
    "title": "曝DeepSeek拟今年启动IPO！再融资100亿",
    "desc": "",
    "heat": 241619,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "药康生物",
        "code": "688046",
        "chg": 19.983753
      }
    ]
  },
  {
    "title": "以色列芯片厂商Tower Semiconductor将在日本投资30亿美元",
    "desc": "",
    "heat": 57874,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "华盛昌",
        "code": "002980",
        "chg": 10.005385
      }
    ]
  },
  {
    "title": "SK 海力士美股 ADR 单日暴涨 27.29% 创新高，较韩股溢价超 50%",
    "desc": "",
    "heat": 51346,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "古鳌科技",
        "code": "300551",
        "chg": 14.156285
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "减肥药",
    "change": "+6.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+5.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+5.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+5.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化学原料药",
    "change": "+4.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+4.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+4.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+4.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+4.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+4.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+4.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+4.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI医疗",
    "change": "+4.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+4.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "宠物经济",
    "change": "+3.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "幽门螺杆菌概念",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医美",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "猴痘概念",
    "change": "+3.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中药",
    "change": "+3.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+3.81%",
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
    "hot_rank": 2,
    "hot_rank_chg": 7,
    "stock_cnt": 5858,
    "price": "6.47",
    "change": "-7.83",
    "market_id": "33",
    "circulate_market_value": "228825360000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.64
      },
      {
        "name": "手机产业链",
        "change_pct": -2.05
      },
      {
        "name": "超高清视频",
        "change_pct": -0.47
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.05
      },
      {
        "name": "电竞",
        "change_pct": 3.08
      },
      {
        "name": "半导体",
        "change_pct": -4.16
      },
      {
        "name": "人工智能",
        "change_pct": 1.01
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.06
      },
      {
        "name": "VR&AR",
        "change_pct": -0.59
      },
      {
        "name": "OLED",
        "change_pct": -2.59
      },
      {
        "name": "京津冀",
        "change_pct": 1.17
      },
      {
        "name": "物联网",
        "change_pct": 0.13
      },
      {
        "name": "指纹识别",
        "change_pct": -2.23
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.53
      },
      {
        "name": "白马股",
        "change_pct": 1.61
      },
      {
        "name": "智能制造",
        "change_pct": 0.22
      },
      {
        "name": "小米概念股",
        "change_pct": -1.49
      },
      {
        "name": "国产芯片",
        "change_pct": -3.29
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.71
      },
      {
        "name": "全息概念",
        "change_pct": 0.84
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.72
      },
      {
        "name": "MicroLED",
        "change_pct": -2.47
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.51
      },
      {
        "name": "智能手表",
        "change_pct": -1.82
      },
      {
        "name": "MiniLED",
        "change_pct": -2.55
      },
      {
        "name": "传感器",
        "change_pct": -1.33
      },
      {
        "name": "大硅片",
        "change_pct": -6.07
      },
      {
        "name": "AI PC",
        "change_pct": -2.04
      },
      {
        "name": "华为产业链",
        "change_pct": -0.28
      },
      {
        "name": "回购",
        "change_pct": 1.42
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.03
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.25
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 15,
    "hot_rank_chg": -2,
    "stock_cnt": 5858,
    "price": "4.49",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "11308109300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.98
      },
      {
        "name": "工业大麻",
        "change_pct": 3.21
      },
      {
        "name": "中药",
        "change_pct": 3.84
      },
      {
        "name": "保健品",
        "change_pct": 3.42
      },
      {
        "name": "医药",
        "change_pct": 4.58
      },
      {
        "name": "化学原料药",
        "change_pct": 4.79
      },
      {
        "name": "流感",
        "change_pct": 3.73
      },
      {
        "name": "振兴东北",
        "change_pct": 1.9
      },
      {
        "name": "食品",
        "change_pct": 2.59
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 18,
    "hot_rank_chg": -17,
    "stock_cnt": 5858,
    "price": "7.73",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "12566612900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.98
      },
      {
        "name": "电竞",
        "change_pct": 3.08
      },
      {
        "name": "手游",
        "change_pct": 2.83
      },
      {
        "name": "强势人气股",
        "change_pct": -1.23
      },
      {
        "name": "人工智能",
        "change_pct": 1.01
      },
      {
        "name": "游戏",
        "change_pct": 3.25
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.15
      },
      {
        "name": "快手概念股",
        "change_pct": 2.27
      },
      {
        "name": "元宇宙",
        "change_pct": 1.35
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.04
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.28
      },
      {
        "name": "web3.0",
        "change_pct": 1.22
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.82
      },
      {
        "name": "数据要素",
        "change_pct": 1.67
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.12
      },
      {
        "name": "AI营销",
        "change_pct": 2.43
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.71
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.03
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.87
      },
      {
        "name": "人形机器人",
        "change_pct": -0.27
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.31
      },
      {
        "name": "多模态",
        "change_pct": 1.74
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 1.97
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.46
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.36
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 29,
    "hot_rank_chg": 24,
    "stock_cnt": 5858,
    "price": "10.47",
    "change": "5.23",
    "market_id": "17",
    "circulate_market_value": "18732278000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.93
      },
      {
        "name": "纯碱",
        "change_pct": 1.35
      },
      {
        "name": "食品",
        "change_pct": 2.59
      },
      {
        "name": "土壤修复",
        "change_pct": 1.24
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.28
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.16
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 40,
    "hot_rank_chg": 34,
    "stock_cnt": 5858,
    "price": "5.83",
    "change": "-0.85",
    "market_id": "17",
    "circulate_market_value": "72269199000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.73
      },
      {
        "name": "核电",
        "change_pct": -0.11
      },
      {
        "name": "强势人气股",
        "change_pct": -1.23
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.94
      },
      {
        "name": "水电",
        "change_pct": 1.74
      },
      {
        "name": "火电",
        "change_pct": 0.96
      },
      {
        "name": "光伏",
        "change_pct": -0.03
      },
      {
        "name": "风电",
        "change_pct": -0.08
      },
      {
        "name": "国企改革",
        "change_pct": 1.04
      },
      {
        "name": "算电协同",
        "change_pct": -1.28
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 41,
    "hot_rank_chg": 42,
    "stock_cnt": 5858,
    "price": "6.75",
    "change": "4.33",
    "market_id": "17",
    "circulate_market_value": "7370235100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 4.58
      },
      {
        "name": "化学原料药",
        "change_pct": 4.79
      },
      {
        "name": "数字经济",
        "change_pct": 1.25
      },
      {
        "name": "辅助生殖",
        "change_pct": 3.44
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.25
      }
    ]
  },
  {
    "code": "603669",
    "name": "灵康药业",
    "hot_rank": 50,
    "hot_rank_chg": 66,
    "stock_cnt": 5858,
    "price": "7.87",
    "change": "6.35",
    "market_id": "17",
    "circulate_market_value": "5606046300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "西藏概念",
        "change_pct": 2.31
      },
      {
        "name": "民营医院",
        "change_pct": 3.38
      },
      {
        "name": "医药",
        "change_pct": 4.58
      },
      {
        "name": "流感",
        "change_pct": 3.73
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": 3.87
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 4.35
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 59,
    "hot_rank_chg": -14,
    "stock_cnt": 5858,
    "price": "5.00",
    "change": "-2.53",
    "market_id": "33",
    "circulate_market_value": "100591632000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.64
      },
      {
        "name": "手机产业链",
        "change_pct": -2.05
      },
      {
        "name": "超高清视频",
        "change_pct": -0.47
      },
      {
        "name": "电竞",
        "change_pct": 3.08
      },
      {
        "name": "半导体",
        "change_pct": -4.16
      },
      {
        "name": "OLED",
        "change_pct": -2.59
      },
      {
        "name": "光伏",
        "change_pct": -0.03
      },
      {
        "name": "黑色家电",
        "change_pct": 1.1
      },
      {
        "name": "家电",
        "change_pct": 0.64
      },
      {
        "name": "智能制造",
        "change_pct": 0.22
      },
      {
        "name": "工业互联网",
        "change_pct": 0.73
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.49
      },
      {
        "name": "国产芯片",
        "change_pct": -3.29
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.15
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.71
      },
      {
        "name": "MicroLED",
        "change_pct": -2.47
      },
      {
        "name": "MiniLED",
        "change_pct": -2.55
      },
      {
        "name": "华为产业链",
        "change_pct": -0.28
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.25
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 71,
    "hot_rank_chg": 167,
    "stock_cnt": 5858,
    "price": "5.15",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "6678188500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.84
      },
      {
        "name": "创新药",
        "change_pct": 5.93
      },
      {
        "name": "央企改革",
        "change_pct": 0.73
      },
      {
        "name": "医疗器械",
        "change_pct": 3.15
      },
      {
        "name": "强势人气股",
        "change_pct": -1.23
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.06
      },
      {
        "name": "保健品",
        "change_pct": 3.42
      },
      {
        "name": "民营医院",
        "change_pct": 3.38
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 4.65
      },
      {
        "name": "医药",
        "change_pct": 4.58
      },
      {
        "name": "化学原料药",
        "change_pct": 4.79
      },
      {
        "name": "海南概念",
        "change_pct": 2.58
      },
      {
        "name": "脑科学",
        "change_pct": 2.02
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.89
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 2.44
      },
      {
        "name": "食品",
        "change_pct": 2.59
      },
      {
        "name": "国企改革",
        "change_pct": 1.04
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.92
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.25
      },
      {
        "name": "自贸区",
        "change_pct": 1.5
      },
      {
        "name": "合成生物",
        "change_pct": 3.24
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 79,
    "hot_rank_chg": -14,
    "stock_cnt": 5858,
    "price": "8.45",
    "change": "-6.63",
    "market_id": "33",
    "circulate_market_value": "4577550900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -1.11
      },
      {
        "name": "油气管网",
        "change_pct": 0.22
      },
      {
        "name": "海工装备",
        "change_pct": -0.55
      },
      {
        "name": "举牌",
        "change_pct": 1.36
      },
      {
        "name": "天然气",
        "change_pct": -0.14
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.53
      },
      {
        "name": "风电",
        "change_pct": -0.08
      },
      {
        "name": "页岩气",
        "change_pct": -1.02
      },
      {
        "name": "国企改革",
        "change_pct": 1.04
      },
      {
        "name": "深地经济",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 80,
    "hot_rank_chg": -23,
    "stock_cnt": 5858,
    "price": "7.01",
    "change": "3.85",
    "market_id": "33",
    "circulate_market_value": "4596499200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.98
      },
      {
        "name": "新零售",
        "change_pct": 2.68
      },
      {
        "name": "农业种植",
        "change_pct": 1.19
      },
      {
        "name": "冷链",
        "change_pct": 0.32
      },
      {
        "name": "大农业",
        "change_pct": 1.68
      },
      {
        "name": "预制菜",
        "change_pct": 2.59
      },
      {
        "name": "国企改革",
        "change_pct": 1.04
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.1
      },
      {
        "name": "免税店概念",
        "change_pct": 2.77
      },
      {
        "name": "湖北国企改革",
        "change_pct": 1.22
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 83,
    "hot_rank_chg": -19,
    "stock_cnt": 5858,
    "price": "7.36",
    "change": "2.94",
    "market_id": "17",
    "circulate_market_value": "33966096000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -0.47
      },
      {
        "name": "国产软件",
        "change_pct": 1.16
      },
      {
        "name": "锂电池",
        "change_pct": -0.77
      },
      {
        "name": "人工智能",
        "change_pct": 1.01
      },
      {
        "name": "养老产业",
        "change_pct": 2.4
      },
      {
        "name": "大飞机",
        "change_pct": 0.46
      },
      {
        "name": "军民融合",
        "change_pct": -0.05
      },
      {
        "name": "物联网",
        "change_pct": 0.13
      },
      {
        "name": "大数据",
        "change_pct": 1.19
      },
      {
        "name": "智慧城市",
        "change_pct": 0.62
      },
      {
        "name": "军工",
        "change_pct": -0.03
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.14
      },
      {
        "name": "机器人",
        "change_pct": 0.14
      },
      {
        "name": "黑色家电",
        "change_pct": 1.1
      },
      {
        "name": "家电",
        "change_pct": 0.64
      },
      {
        "name": "储能",
        "change_pct": -0.06
      },
      {
        "name": "智能制造",
        "change_pct": 0.22
      },
      {
        "name": "工业互联网",
        "change_pct": 0.73
      },
      {
        "name": "数字经济",
        "change_pct": 1.25
      },
      {
        "name": "百度概念股",
        "change_pct": 1.52
      },
      {
        "name": "NFT",
        "change_pct": 2.71
      },
      {
        "name": "跨境支付",
        "change_pct": 1.64
      },
      {
        "name": "华为海思",
        "change_pct": -0.74
      },
      {
        "name": "云游戏",
        "change_pct": 2.29
      },
      {
        "name": "网红/MCN",
        "change_pct": 2.1
      },
      {
        "name": "华为产业链",
        "change_pct": -0.28
      },
      {
        "name": "毫米波雷达",
        "change_pct": -1.23
      },
      {
        "name": "服务器",
        "change_pct": -2.45
      },
      {
        "name": "星闪概念",
        "change_pct": -0.49
      },
      {
        "name": "低空经济",
        "change_pct": 0.09
      }
    ]
  },
  {
    "code": "601012",
    "name": "隆基绿能",
    "hot_rank": 84,
    "hot_rank_chg": -37,
    "stock_cnt": 5858,
    "price": "12.14",
    "change": "3.50",
    "market_id": "17",
    "circulate_market_value": "91997668000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.99
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.2
      },
      {
        "name": "光伏",
        "change_pct": -0.03
      },
      {
        "name": "白马股",
        "change_pct": 1.61
      },
      {
        "name": "碳中和",
        "change_pct": 0.73
      },
      {
        "name": "颗粒硅",
        "change_pct": 1.2
      },
      {
        "name": "BIPV概念",
        "change_pct": 1.3
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.51
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.09
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 86,
    "hot_rank_chg": 96,
    "stock_cnt": 5858,
    "price": "12.92",
    "change": "4.03",
    "market_id": "33",
    "circulate_market_value": "44934859000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.98
      },
      {
        "name": "人工智能",
        "change_pct": 1.01
      },
      {
        "name": "VR&AR",
        "change_pct": -0.59
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.75
      },
      {
        "name": "大数据",
        "change_pct": 1.19
      },
      {
        "name": "教育",
        "change_pct": 1.31
      },
      {
        "name": "百度概念股",
        "change_pct": 1.52
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.1
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.15
      },
      {
        "name": "传媒",
        "change_pct": 2.87
      },
      {
        "name": "快手概念股",
        "change_pct": 2.27
      },
      {
        "name": "NFT",
        "change_pct": 2.71
      },
      {
        "name": "元宇宙",
        "change_pct": 1.35
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.04
      },
      {
        "name": "web3.0",
        "change_pct": 1.22
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.82
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.12
      },
      {
        "name": "职业教育",
        "change_pct": 1.92
      },
      {
        "name": "云游戏",
        "change_pct": 2.29
      },
      {
        "name": "网红/MCN",
        "change_pct": 2.1
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.07
      },
      {
        "name": "AI营销",
        "change_pct": 2.43
      },
      {
        "name": "词元概念/Token",
        "change_pct": 1.4
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.87
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 1.97
      },
      {
        "name": "智谱AI",
        "change_pct": 1.13
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.36
      },
      {
        "name": "区块链",
        "change_pct": 1.58
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 87,
    "hot_rank_chg": 148,
    "stock_cnt": 5858,
    "price": "12.36",
    "change": "3.69",
    "market_id": "17",
    "circulate_market_value": "18202656000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.73
      },
      {
        "name": "强势人气股",
        "change_pct": -1.23
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.94
      },
      {
        "name": "火电",
        "change_pct": 0.96
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.2
      },
      {
        "name": "风电",
        "change_pct": -0.08
      },
      {
        "name": "国企改革",
        "change_pct": 1.04
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 93,
    "hot_rank_chg": 58,
    "stock_cnt": 5858,
    "price": "4.29",
    "change": "4.38",
    "market_id": "33",
    "circulate_market_value": "25117085000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.99
      },
      {
        "name": "人工智能",
        "change_pct": 1.01
      },
      {
        "name": "水利",
        "change_pct": 0.83
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.75
      },
      {
        "name": "大数据",
        "change_pct": 1.19
      },
      {
        "name": "园林",
        "change_pct": 1.09
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.49
      },
      {
        "name": "数字经济",
        "change_pct": 1.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.15
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.72
      },
      {
        "name": "第三代半导体",
        "change_pct": -3.39
      },
      {
        "name": "快手概念股",
        "change_pct": 2.27
      },
      {
        "name": "IGBT",
        "change_pct": -3.35
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.04
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.82
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.12
      },
      {
        "name": "氮化镓",
        "change_pct": -3.35
      },
      {
        "name": "AI营销",
        "change_pct": 2.43
      },
      {
        "name": "多模态",
        "change_pct": 1.74
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.02
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.36
      },
      {
        "name": "区块链",
        "change_pct": 1.58
      }
    ]
  },
  {
    "code": "002582",
    "name": "好想你",
    "hot_rank": 98,
    "hot_rank_chg": 197,
    "stock_cnt": 5858,
    "price": "9.99",
    "change": "8.82",
    "market_id": "33",
    "circulate_market_value": "3438953400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 1.19
      },
      {
        "name": "教育",
        "change_pct": 1.31
      },
      {
        "name": "破净股",
        "change_pct": 1.56
      },
      {
        "name": "休闲食品",
        "change_pct": 2.29
      },
      {
        "name": "食品",
        "change_pct": 2.59
      },
      {
        "name": "大农业",
        "change_pct": 1.68
      },
      {
        "name": "预制菜",
        "change_pct": 2.59
      },
      {
        "name": "人造肉",
        "change_pct": 2.34
      },
      {
        "name": "职业教育",
        "change_pct": 1.92
      },
      {
        "name": "网红/MCN",
        "change_pct": 2.1
      },
      {
        "name": "饮料",
        "change_pct": 1.71
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.46
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 2.04
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5858, "price": "23.11", "change": "-10.01", "market_id": "33", "circulate_market_value": "76786482000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 7, "stock_cnt": 5858, "price": "6.47", "change": "-7.83", "market_id": "33", "circulate_market_value": "228825360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.64}, {"name": "手机产业链", "change_pct": -2.05}, {"name": "超高清视频", "change_pct": -0.47}, {"name": "苹果产业链", "change_pct": -2.05}, {"name": "电竞", "change_pct": 3.08}, {"name": "半导体", "change_pct": -4.16}, {"name": "人工智能", "change_pct": 1.01}, {"name": "互联网医疗", "change_pct": 3.06}, {"name": "VR&AR", "change_pct": -0.59}, {"name": "OLED", "change_pct": -2.59}, {"name": "京津冀", "change_pct": 1.17}, {"name": "物联网", "change_pct": 0.13}, {"name": "指纹识别", "change_pct": -2.23}, {"name": "汽车零部件", "change_pct": 0.53}, {"name": "白马股", "change_pct": 1.61}, {"name": "智能制造", "change_pct": 0.22}, {"name": "小米概念股", "change_pct": -1.49}, {"name": "国产芯片", "change_pct": -3.29}, {"name": "液晶面板/LCD", "change_pct": -2.71}, {"name": "全息概念", "change_pct": 0.84}, {"name": "理想汽车概念股", "change_pct": 0.72}, {"name": "MicroLED", "change_pct": -2.47}, {"name": "钙钛矿电池", "change_pct": -0.51}, {"name": "智能手表", "change_pct": -1.82}, {"name": "MiniLED", "change_pct": -2.55}, {"name": "传感器", "change_pct": -1.33}, {"name": "大硅片", "change_pct": -6.07}, {"name": "AI PC", "change_pct": -2.04}, {"name": "华为产业链", "change_pct": -0.28}, {"name": "回购", "change_pct": 1.42}, {"name": "智能眼镜/MR头显", "change_pct": -1.03}, {"name": "玻璃基板封装", "change_pct": -4.25}]}, {"code": "002384", "name": "东山精密", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5858, "price": "267.36", "change": "2.69", "market_id": "33", "circulate_market_value": "370646980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 4, "hot_rank_chg": 12, "stock_cnt": 5858, "price": "41.72", "change": "8.65", "market_id": "33", "circulate_market_value": "32641921000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5858, "price": "95.36", "change": "-7.15", "market_id": "17", "circulate_market_value": "170638570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5858, "price": "79.51", "change": "2.11", "market_id": "33", "circulate_market_value": "120652626000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5858, "price": "35.46", "change": "-4.11", "market_id": "33", "circulate_market_value": "101418177000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5858, "price": "662.40", "change": "-10.00", "market_id": "33", "circulate_market_value": "109341050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 9, "hot_rank_chg": 19, "stock_cnt": 5858, "price": "38.41", "change": "8.35", "market_id": "17", "circulate_market_value": "12941095300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 10, "hot_rank_chg": 2, "stock_cnt": 5858, "price": "72.55", "change": "-2.46", "market_id": "17", "circulate_market_value": "178012040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 11, "hot_rank_chg": 3, "stock_cnt": 5858, "price": "578.90", "change": "-0.87", "market_id": "17", "circulate_market_value": "386989980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 12, "hot_rank_chg": 14, "stock_cnt": 5858, "price": "48.55", "change": "-7.54", "market_id": "33", "circulate_market_value": "76425253000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 13, "hot_rank_chg": 9, "stock_cnt": 5858, "price": "432.67", "change": "8.12", "market_id": "17", "circulate_market_value": "175810400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 14, "hot_rank_chg": 17, "stock_cnt": 5858, "price": "74.59", "change": "-9.18", "market_id": "17", "circulate_market_value": "88201865000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 15, "hot_rank_chg": -2, "stock_cnt": 5858, "price": "4.49", "change": "10.05", "market_id": "17", "circulate_market_value": "11308109300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.98}, {"name": "工业大麻", "change_pct": 3.21}, {"name": "中药", "change_pct": 3.84}, {"name": "保健品", "change_pct": 3.42}, {"name": "医药", "change_pct": 4.58}, {"name": "化学原料药", "change_pct": 4.79}, {"name": "流感", "change_pct": 3.73}, {"name": "振兴东北", "change_pct": 1.9}, {"name": "食品", "change_pct": 2.59}]}, {"code": "600667", "name": "太极实业", "hot_rank": 16, "hot_rank_chg": 9, "stock_cnt": 5858, "price": "21.33", "change": "-5.75", "market_id": "17", "circulate_market_value": "44612595000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 17, "hot_rank_chg": 18, "stock_cnt": 5858, "price": "133.91", "change": "5.02", "market_id": "17", "circulate_market_value": "331196960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 18, "hot_rank_chg": -17, "stock_cnt": 5858, "price": "7.73", "change": "0.00", "market_id": "33", "circulate_market_value": "12566612900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.98}, {"name": "电竞", "change_pct": 3.08}, {"name": "手游", "change_pct": 2.83}, {"name": "强势人气股", "change_pct": -1.23}, {"name": "人工智能", "change_pct": 1.01}, {"name": "游戏", "change_pct": 3.25}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.25}, {"name": "腾讯概念股", "change_pct": 1.15}, {"name": "快手概念股", "change_pct": 2.27}, {"name": "元宇宙", "change_pct": 1.35}, {"name": "虚拟数字人", "change_pct": 2.04}, {"name": "东数西算/算力", "change_pct": -0.28}, {"name": "web3.0", "change_pct": 1.22}, {"name": "AIGC概念", "change_pct": 1.82}, {"name": "数据要素", "change_pct": 1.67}, {"name": "字节跳动概念股", "change_pct": 2.12}, {"name": "AI营销", "change_pct": 2.43}, {"name": "ChatGPT", "change_pct": 1.71}, {"name": "智能眼镜/MR头显", "change_pct": -1.03}, {"name": "人工智能大模型", "change_pct": 1.87}, {"name": "人形机器人", "change_pct": -0.27}, {"name": "短剧/互动影游", "change_pct": 3.31}, {"name": "多模态", "change_pct": 1.74}, {"name": "Sora/AI视频", "change_pct": 1.97}, {"name": "IP经济/谷子经济", "change_pct": 2.46}, {"name": "小红书概念股", "change_pct": 2.36}]}, {"code": "002317", "name": "众生药业", "hot_rank": 19, "hot_rank_chg": 95, "stock_cnt": 5858, "price": "34.27", "change": "10.02", "market_id": "33", "circulate_market_value": "26100629000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "减肥药"}, {"code": "000977", "name": "浪潮信息", "hot_rank": 20, "hot_rank_chg": 4, "stock_cnt": 5858, "price": "84.91", "change": "-0.05", "market_id": "33", "circulate_market_value": "124548688000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 21, "hot_rank_chg": 16, "stock_cnt": 5858, "price": "48.34", "change": "-8.15", "market_id": "17", "circulate_market_value": "40922388000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 22, "hot_rank_chg": 47, "stock_cnt": 5858, "price": "41.27", "change": "11.75", "market_id": "33", "circulate_market_value": "58604719000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 23, "hot_rank_chg": 7, "stock_cnt": 5858, "price": "41.36", "change": "-2.89", "market_id": "17", "circulate_market_value": "141159600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 24, "hot_rank_chg": -13, "stock_cnt": 5858, "price": "50.62", "change": "10.00", "market_id": "17", "circulate_market_value": "31908470000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "000636", "name": "风华高科", "hot_rank": 25, "hot_rank_chg": -15, "stock_cnt": 5858, "price": "55.65", "change": "-6.33", "market_id": "33", "circulate_market_value": "64387780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 26, "hot_rank_chg": 141, "stock_cnt": 5858, "price": "28.79", "change": "7.15", "market_id": "33", "circulate_market_value": "54717179000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 27, "hot_rank_chg": 131, "stock_cnt": 5858, "price": "311.51", "change": "-13.08", "market_id": "17", "circulate_market_value": "146897730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 28, "hot_rank_chg": 12, "stock_cnt": 5858, "price": "218.99", "change": "-5.99", "market_id": "33", "circulate_market_value": "170921330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 29, "hot_rank_chg": 24, "stock_cnt": 5858, "price": "10.47", "change": "5.23", "market_id": "17", "circulate_market_value": "18732278000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.93}, {"name": "纯碱", "change_pct": 1.35}, {"name": "食品", "change_pct": 2.59}, {"name": "土壤修复", "change_pct": 1.24}, {"name": "东数西算/算力", "change_pct": -0.28}, {"name": "OpenClaw概念", "change_pct": 0.16}, {"name": "DeepSeek概念股", "change_pct": 0.76}]}, {"code": "600183", "name": "生益科技", "hot_rank": 30, "hot_rank_chg": -7, "stock_cnt": 5858, "price": "153.70", "change": "3.92", "market_id": "17", "circulate_market_value": "368034890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 31, "hot_rank_chg": 95, "stock_cnt": 5858, "price": "57.30", "change": "4.52", "market_id": "17", "circulate_market_value": "365516830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 32, "hot_rank_chg": -3, "stock_cnt": 5858, "price": "1174.48", "change": "-0.81", "market_id": "33", "circulate_market_value": "1303602070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 33, "hot_rank_chg": -18, "stock_cnt": 5858, "price": "117.75", "change": "4.20", "market_id": "17", "circulate_market_value": "42475180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 34, "hot_rank_chg": -27, "stock_cnt": 5858, "price": "33.40", "change": "3.18", "market_id": "17", "circulate_market_value": "6109973400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 35, "hot_rank_chg": 192, "stock_cnt": 5858, "price": "40.00", "change": "5.04", "market_id": "33", "circulate_market_value": "131219970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 36, "hot_rank_chg": -4, "stock_cnt": 5858, "price": "97.00", "change": "-4.81", "market_id": "17", "circulate_market_value": "141916270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 37, "hot_rank_chg": 12, "stock_cnt": 5858, "price": "39.12", "change": "-1.98", "market_id": "33", "circulate_market_value": "157560540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 38, "hot_rank_chg": -4, "stock_cnt": 5858, "price": "34.71", "change": "-3.80", "market_id": "33", "circulate_market_value": "37444015000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600129", "name": "太极集团", "hot_rank": 39, "hot_rank_chg": 68, "stock_cnt": 5858, "price": "18.35", "change": "4.08", "market_id": "17", "circulate_market_value": "10118523700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 40, "hot_rank_chg": 34, "stock_cnt": 5858, "price": "5.83", "change": "-0.85", "market_id": "17", "circulate_market_value": "72269199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.73}, {"name": "核电", "change_pct": -0.11}, {"name": "强势人气股", "change_pct": -1.23}, {"name": "电力体制改革", "change_pct": 0.94}, {"name": "水电", "change_pct": 1.74}, {"name": "火电", "change_pct": 0.96}, {"name": "光伏", "change_pct": -0.03}, {"name": "风电", "change_pct": -0.08}, {"name": "国企改革", "change_pct": 1.04}, {"name": "算电协同", "change_pct": -1.28}]}, {"code": "600488", "name": "津药药业", "hot_rank": 41, "hot_rank_chg": 42, "stock_cnt": 5858, "price": "6.75", "change": "4.33", "market_id": "17", "circulate_market_value": "7370235100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 4.58}, {"name": "化学原料药", "change_pct": 4.79}, {"name": "数字经济", "change_pct": 1.25}, {"name": "辅助生殖", "change_pct": 3.44}, {"name": "新冠病毒防治", "change_pct": 2.25}]}, {"code": "000858", "name": "五粮液", "hot_rank": 42, "hot_rank_chg": -25, "stock_cnt": 5858, "price": "76.16", "change": "3.76", "market_id": "33", "circulate_market_value": "295616060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 43, "hot_rank_chg": 18, "stock_cnt": 5858, "price": "500.90", "change": "-6.98", "market_id": "33", "circulate_market_value": "141179610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601888", "name": "中国中免", "hot_rank": 44, "hot_rank_chg": 85, "stock_cnt": 5858, "price": "54.28", "change": "6.60", "market_id": "17", "circulate_market_value": "105980373000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 45, "hot_rank_chg": -18, "stock_cnt": 5858, "price": "560.24", "change": "-1.51", "market_id": "33", "circulate_market_value": "702677190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 46, "hot_rank_chg": -27, "stock_cnt": 5858, "price": "138.27", "change": "0.83", "market_id": "33", "circulate_market_value": "265867010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002821", "name": "凯莱英", "hot_rank": 47, "hot_rank_chg": 34, "stock_cnt": 5858, "price": "192.51", "change": "8.18", "market_id": "33", "circulate_market_value": "61034113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 48, "hot_rank_chg": 148, "stock_cnt": 5858, "price": "57.71", "change": "17.80", "market_id": "33", "circulate_market_value": "1887027100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 49, "hot_rank_chg": 44, "stock_cnt": 5858, "price": "13.50", "change": "0.90", "market_id": "33", "circulate_market_value": "14342451000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603669", "name": "灵康药业", "hot_rank": 50, "hot_rank_chg": 66, "stock_cnt": 5858, "price": "7.87", "change": "6.35", "market_id": "17", "circulate_market_value": "5606046300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "西藏概念", "change_pct": 2.31}, {"name": "民营医院", "change_pct": 3.38}, {"name": "医药", "change_pct": 4.58}, {"name": "流感", "change_pct": 3.73}, {"name": "幽门螺杆菌概念", "change_pct": 3.87}, {"name": "阿尔茨海默病", "change_pct": 4.35}]}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 51, "hot_rank_chg": -31, "stock_cnt": 5858, "price": "21.19", "change": "-9.98", "market_id": "17", "circulate_market_value": "8877922900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 52, "hot_rank_chg": -31, "stock_cnt": 5858, "price": "27.03", "change": "-5.56", "market_id": "33", "circulate_market_value": "20472930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 53, "hot_rank_chg": 23, "stock_cnt": 5858, "price": "17.99", "change": "-6.84", "market_id": "17", "circulate_market_value": "59354395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 54, "hot_rank_chg": -6, "stock_cnt": 5858, "price": "47.88", "change": "-1.48", "market_id": "17", "circulate_market_value": "70000311000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 55, "hot_rank_chg": 24, "stock_cnt": 5858, "price": "14.54", "change": "-4.53", "market_id": "17", "circulate_market_value": "18556759000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000807", "name": "云铝股份", "hot_rank": 56, "hot_rank_chg": 173, "stock_cnt": 5858, "price": "26.46", "change": "5.92", "market_id": "33", "circulate_market_value": "91761192000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 57, "hot_rank_chg": -14, "stock_cnt": 5858, "price": "28.48", "change": "-6.90", "market_id": "33", "circulate_market_value": "32641084000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 58, "hot_rank_chg": -12, "stock_cnt": 5858, "price": "16.62", "change": "-1.25", "market_id": "33", "circulate_market_value": "53609303000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 59, "hot_rank_chg": -14, "stock_cnt": 5858, "price": "5.00", "change": "-2.53", "market_id": "33", "circulate_market_value": "100591632000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.64}, {"name": "手机产业链", "change_pct": -2.05}, {"name": "超高清视频", "change_pct": -0.47}, {"name": "电竞", "change_pct": 3.08}, {"name": "半导体", "change_pct": -4.16}, {"name": "OLED", "change_pct": -2.59}, {"name": "光伏", "change_pct": -0.03}, {"name": "黑色家电", "change_pct": 1.1}, {"name": "家电", "change_pct": 0.64}, {"name": "智能制造", "change_pct": 0.22}, {"name": "工业互联网", "change_pct": 0.73}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.49}, {"name": "国产芯片", "change_pct": -3.29}, {"name": "腾讯概念股", "change_pct": 1.15}, {"name": "液晶面板/LCD", "change_pct": -2.71}, {"name": "MicroLED", "change_pct": -2.47}, {"name": "MiniLED", "change_pct": -2.55}, {"name": "华为产业链", "change_pct": -0.28}, {"name": "玻璃基板封装", "change_pct": -4.25}]}, {"code": "000988", "name": "华工科技", "hot_rank": 60, "hot_rank_chg": -24, "stock_cnt": 5858, "price": "150.56", "change": "-5.81", "market_id": "33", "circulate_market_value": "151310640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002379", "name": "宏桥控股", "hot_rank": 61, "hot_rank_chg": 5, "stock_cnt": 5858, "price": "18.74", "change": "7.15", "market_id": "33", "circulate_market_value": "21295644000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 62, "hot_rank_chg": 15, "stock_cnt": 5858, "price": "150.00", "change": "-16.21", "market_id": "33", "circulate_market_value": "4624706000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 63, "hot_rank_chg": -30, "stock_cnt": 5858, "price": "53.84", "change": "-1.25", "market_id": "17", "circulate_market_value": "213830250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 64, "hot_rank_chg": -46, "stock_cnt": 5858, "price": "48.25", "change": "1.90", "market_id": "33", "circulate_market_value": "71203683000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002422", "name": "科伦药业", "hot_rank": 65, "hot_rank_chg": 13, "stock_cnt": 5858, "price": "51.69", "change": "6.58", "market_id": "33", "circulate_market_value": "67125816000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 66, "hot_rank_chg": 51, "stock_cnt": 5858, "price": "27.34", "change": "-8.87", "market_id": "33", "circulate_market_value": "11771694400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 67, "hot_rank_chg": 19, "stock_cnt": 5858, "price": "92.52", "change": "2.60", "market_id": "33", "circulate_market_value": "322581480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 68, "hot_rank_chg": -16, "stock_cnt": 5858, "price": "64.54", "change": "-1.62", "market_id": "17", "circulate_market_value": "1280737720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 69, "hot_rank_chg": 63, "stock_cnt": 5858, "price": "19.94", "change": "-14.16", "market_id": "33", "circulate_market_value": "23923828000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 70, "hot_rank_chg": 71, "stock_cnt": 5858, "price": "28.73", "change": "-9.94", "market_id": "33", "circulate_market_value": "8405353700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 71, "hot_rank_chg": 167, "stock_cnt": 5858, "price": "5.15", "change": "10.04", "market_id": "33", "circulate_market_value": "6678188500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.84}, {"name": "创新药", "change_pct": 5.93}, {"name": "央企改革", "change_pct": 0.73}, {"name": "医疗器械", "change_pct": 3.15}, {"name": "强势人气股", "change_pct": -1.23}, {"name": "互联网医疗", "change_pct": 3.06}, {"name": "保健品", "change_pct": 3.42}, {"name": "民营医院", "change_pct": 3.38}, {"name": "CAR-T疗法", "change_pct": 4.65}, {"name": "医药", "change_pct": 4.58}, {"name": "化学原料药", "change_pct": 4.79}, {"name": "海南概念", "change_pct": 2.58}, {"name": "脑科学", "change_pct": 2.02}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 1.89}, {"name": "海南自由贸易港", "change_pct": 2.44}, {"name": "食品", "change_pct": 2.59}, {"name": "国企改革", "change_pct": 1.04}, {"name": "医疗信息化", "change_pct": 1.92}, {"name": "新冠病毒防治", "change_pct": 2.25}, {"name": "自贸区", "change_pct": 1.5}, {"name": "合成生物", "change_pct": 3.24}]}, {"code": "605090", "name": "九丰能源", "hot_rank": 72, "hot_rank_chg": 59, "stock_cnt": 5858, "price": "41.97", "change": "6.52", "market_id": "17", "circulate_market_value": "29568997000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003020", "name": "立方制药", "hot_rank": 73, "hot_rank_chg": 33, "stock_cnt": 5858, "price": "21.80", "change": "4.81", "market_id": "33", "circulate_market_value": "3674352000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603501", "name": "豪威集团", "hot_rank": 74, "hot_rank_chg": 168, "stock_cnt": 5858, "price": "111.95", "change": "5.46", "market_id": "17", "circulate_market_value": "135097000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 75, "hot_rank_chg": -12, "stock_cnt": 5858, "price": "175.06", "change": "-6.63", "market_id": "33", "circulate_market_value": "55760592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600360", "name": "华微电子", "hot_rank": 76, "hot_rank_chg": 6, "stock_cnt": 5858, "price": "14.31", "change": "-10.00", "market_id": "17", "circulate_market_value": "13741826000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300528", "name": "幸福蓝海", "hot_rank": 77, "hot_rank_chg": 1833, "stock_cnt": 5858, "price": "16.99", "change": "19.99", "market_id": "33", "circulate_market_value": "6330610800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "影视院线"}, {"code": "600460", "name": "士兰微", "hot_rank": 78, "hot_rank_chg": 33, "stock_cnt": 5858, "price": "39.48", "change": "-5.55", "market_id": "17", "circulate_market_value": "65697556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 79, "hot_rank_chg": -14, "stock_cnt": 5858, "price": "8.45", "change": "-6.63", "market_id": "33", "circulate_market_value": "4577550900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -1.11}, {"name": "油气管网", "change_pct": 0.22}, {"name": "海工装备", "change_pct": -0.55}, {"name": "举牌", "change_pct": 1.36}, {"name": "天然气", "change_pct": -0.14}, {"name": "山东国企改革", "change_pct": 0.53}, {"name": "风电", "change_pct": -0.08}, {"name": "页岩气", "change_pct": -1.02}, {"name": "国企改革", "change_pct": 1.04}, {"name": "深地经济", "change_pct": -0.52}]}, {"code": "000759", "name": "中百集团", "hot_rank": 80, "hot_rank_chg": -23, "stock_cnt": 5858, "price": "7.01", "change": "3.85", "market_id": "33", "circulate_market_value": "4596499200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.98}, {"name": "新零售", "change_pct": 2.68}, {"name": "农业种植", "change_pct": 1.19}, {"name": "冷链", "change_pct": 0.32}, {"name": "大农业", "change_pct": 1.68}, {"name": "预制菜", "change_pct": 2.59}, {"name": "国企改革", "change_pct": 1.04}, {"name": "可降解塑料", "change_pct": 1.1}, {"name": "免税店概念", "change_pct": 2.77}, {"name": "湖北国企改革", "change_pct": 1.22}]}, {"code": "601127", "name": "赛力斯", "hot_rank": 81, "hot_rank_chg": 15, "stock_cnt": 5858, "price": "56.53", "change": "5.90", "market_id": "17", "circulate_market_value": "88028708000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 83, "hot_rank_chg": -19, "stock_cnt": 5858, "price": "7.36", "change": "2.94", "market_id": "17", "circulate_market_value": "33966096000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -0.47}, {"name": "国产软件", "change_pct": 1.16}, {"name": "锂电池", "change_pct": -0.77}, {"name": "人工智能", "change_pct": 1.01}, {"name": "养老产业", "change_pct": 2.4}, {"name": "大飞机", "change_pct": 0.46}, {"name": "军民融合", "change_pct": -0.05}, {"name": "物联网", "change_pct": 0.13}, {"name": "大数据", "change_pct": 1.19}, {"name": "智慧城市", "change_pct": 0.62}, {"name": "军工", "change_pct": -0.03}, {"name": "新能源汽车", "change_pct": -0.14}, {"name": "机器人", "change_pct": 0.14}, {"name": "黑色家电", "change_pct": 1.1}, {"name": "家电", "change_pct": 0.64}, {"name": "储能", "change_pct": -0.06}, {"name": "智能制造", "change_pct": 0.22}, {"name": "工业互联网", "change_pct": 0.73}, {"name": "数字经济", "change_pct": 1.25}, {"name": "百度概念股", "change_pct": 1.52}, {"name": "NFT", "change_pct": 2.71}, {"name": "跨境支付", "change_pct": 1.64}, {"name": "华为海思", "change_pct": -0.74}, {"name": "云游戏", "change_pct": 2.29}, {"name": "网红/MCN", "change_pct": 2.1}, {"name": "华为产业链", "change_pct": -0.28}, {"name": "毫米波雷达", "change_pct": -1.23}, {"name": "服务器", "change_pct": -2.45}, {"name": "星闪概念", "change_pct": -0.49}, {"name": "低空经济", "change_pct": 0.09}]}, {"code": "601012", "name": "隆基绿能", "hot_rank": 84, "hot_rank_chg": -37, "stock_cnt": 5858, "price": "12.14", "change": "3.50", "market_id": "17", "circulate_market_value": "91997668000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.99}, {"name": "氢能源/燃料电池", "change_pct": -0.2}, {"name": "光伏", "change_pct": -0.03}, {"name": "白马股", "change_pct": 1.61}, {"name": "碳中和", "change_pct": 0.73}, {"name": "颗粒硅", "change_pct": 1.2}, {"name": "BIPV概念", "change_pct": 1.3}, {"name": "钙钛矿电池", "change_pct": -0.51}, {"name": "异质结电池HJT", "change_pct": -1.09}]}, {"code": "002208", "name": "合肥城建", "hot_rank": 85, "hot_rank_chg": -25, "stock_cnt": 5858, "price": "17.28", "change": "-8.04", "market_id": "33", "circulate_market_value": "13877089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 86, "hot_rank_chg": 96, "stock_cnt": 5858, "price": "12.92", "change": "4.03", "market_id": "33", "circulate_market_value": "44934859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.98}, {"name": "人工智能", "change_pct": 1.01}, {"name": "VR&AR", "change_pct": -0.59}, {"name": "直播/短视频", "change_pct": 1.75}, {"name": "大数据", "change_pct": 1.19}, {"name": "教育", "change_pct": 1.31}, {"name": "百度概念股", "change_pct": 1.52}, {"name": "阿里巴巴概念股", "change_pct": 1.1}, {"name": "腾讯概念股", "change_pct": 1.15}, {"name": "传媒", "change_pct": 2.87}, {"name": "快手概念股", "change_pct": 2.27}, {"name": "NFT", "change_pct": 2.71}, {"name": "元宇宙", "change_pct": 1.35}, {"name": "虚拟数字人", "change_pct": 2.04}, {"name": "web3.0", "change_pct": 1.22}, {"name": "AIGC概念", "change_pct": 1.82}, {"name": "字节跳动概念股", "change_pct": 2.12}, {"name": "职业教育", "change_pct": 1.92}, {"name": "云游戏", "change_pct": 2.29}, {"name": "网红/MCN", "change_pct": 2.1}, {"name": "5G消息/RCS", "change_pct": 1.07}, {"name": "AI营销", "change_pct": 2.43}, {"name": "词元概念/Token", "change_pct": 1.4}, {"name": "人工智能大模型", "change_pct": 1.87}, {"name": "Sora/AI视频", "change_pct": 1.97}, {"name": "智谱AI", "change_pct": 1.13}, {"name": "小红书概念股", "change_pct": 2.36}, {"name": "区块链", "change_pct": 1.58}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 87, "hot_rank_chg": 148, "stock_cnt": 5858, "price": "12.36", "change": "3.69", "market_id": "17", "circulate_market_value": "18202656000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.73}, {"name": "强势人气股", "change_pct": -1.23}, {"name": "电力体制改革", "change_pct": 0.94}, {"name": "火电", "change_pct": 0.96}, {"name": "氢能源/燃料电池", "change_pct": -0.2}, {"name": "风电", "change_pct": -0.08}, {"name": "国企改革", "change_pct": 1.04}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 88, "hot_rank_chg": -46, "stock_cnt": 5858, "price": "97.56", "change": "1.97", "market_id": "33", "circulate_market_value": "70664212000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 89, "hot_rank_chg": 12, "stock_cnt": 5858, "price": "208.71", "change": "4.24", "market_id": "17", "circulate_market_value": "57518049000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 90, "hot_rank_chg": 87, "stock_cnt": 5858, "price": "47.37", "change": "3.13", "market_id": "33", "circulate_market_value": "55675095000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300255", "name": "常山药业", "hot_rank": 91, "hot_rank_chg": 601, "stock_cnt": 5858, "price": "28.90", "change": "14.50", "market_id": "33", "circulate_market_value": "26519316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300204", "name": "舒泰神", "hot_rank": 92, "hot_rank_chg": 555, "stock_cnt": 5858, "price": "26.31", "change": "13.90", "market_id": "33", "circulate_market_value": "11935913000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 93, "hot_rank_chg": 58, "stock_cnt": 5858, "price": "4.29", "change": "4.38", "market_id": "33", "circulate_market_value": "25117085000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.99}, {"name": "人工智能", "change_pct": 1.01}, {"name": "水利", "change_pct": 0.83}, {"name": "直播/短视频", "change_pct": 1.75}, {"name": "大数据", "change_pct": 1.19}, {"name": "园林", "change_pct": 1.09}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.49}, {"name": "数字经济", "change_pct": 1.25}, {"name": "腾讯概念股", "change_pct": 1.15}, {"name": "理想汽车概念股", "change_pct": 0.72}, {"name": "第三代半导体", "change_pct": -3.39}, {"name": "快手概念股", "change_pct": 2.27}, {"name": "IGBT", "change_pct": -3.35}, {"name": "虚拟数字人", "change_pct": 2.04}, {"name": "AIGC概念", "change_pct": 1.82}, {"name": "字节跳动概念股", "change_pct": 2.12}, {"name": "氮化镓", "change_pct": -3.35}, {"name": "AI营销", "change_pct": 2.43}, {"name": "多模态", "change_pct": 1.74}, {"name": "液冷服务器", "change_pct": -2.02}, {"name": "小红书概念股", "change_pct": 2.36}, {"name": "区块链", "change_pct": 1.58}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 94, "hot_rank_chg": 14, "stock_cnt": 5858, "price": "262.00", "change": "-4.21", "market_id": "33", "circulate_market_value": "285157670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 95, "hot_rank_chg": 69, "stock_cnt": 5858, "price": "54.49", "change": "-7.46", "market_id": "17", "circulate_market_value": "42077144000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 96, "hot_rank_chg": -58, "stock_cnt": 5858, "price": "28.97", "change": "-0.31", "market_id": "17", "circulate_market_value": "596833950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 97, "hot_rank_chg": -43, "stock_cnt": 5858, "price": "18.18", "change": "-0.17", "market_id": "17", "circulate_market_value": "317438110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002582", "name": "好想你", "hot_rank": 98, "hot_rank_chg": 197, "stock_cnt": 5858, "price": "9.99", "change": "8.82", "market_id": "33", "circulate_market_value": "3438953400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 1.19}, {"name": "教育", "change_pct": 1.31}, {"name": "破净股", "change_pct": 1.56}, {"name": "休闲食品", "change_pct": 2.29}, {"name": "食品", "change_pct": 2.59}, {"name": "大农业", "change_pct": 1.68}, {"name": "预制菜", "change_pct": 2.59}, {"name": "人造肉", "change_pct": 2.34}, {"name": "职业教育", "change_pct": 1.92}, {"name": "网红/MCN", "change_pct": 2.1}, {"name": "饮料", "change_pct": 1.71}, {"name": "IP经济/谷子经济", "change_pct": 2.46}, {"name": "蜜雪冰城概念股", "change_pct": 2.04}]}, {"code": "600703", "name": "三安光电", "hot_rank": 99, "hot_rank_chg": -12, "stock_cnt": 5858, "price": "14.45", "change": "-3.47", "market_id": "17", "circulate_market_value": "72091321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 100, "hot_rank_chg": -44, "stock_cnt": 5858, "price": "86.94", "change": "-3.08", "market_id": "33", "circulate_market_value": "71742909000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告"};