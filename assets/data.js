const UPDATE_TIME = "2026-07-22 02:08";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 2.28,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续83天上榜",
    "rankChg": 0,
    "etfName": "药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 0.22,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续206天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "算力租赁",
    "rise": 0.71,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续117天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.69,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续253天上榜",
    "rankChg": 1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "国家大基金持股",
    "rise": 0.52,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "成飞概念",
    "rise": -0.28,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "军工龙头ETF",
    "code": "886030"
  },
  {
    "name": "PCB概念",
    "rise": -0.33,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -0.29,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续182天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "东数西算(算力)",
    "rise": 0.5,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "黄金概念",
    "rise": 2.25,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "先进封装",
    "rise": 0.11,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续46天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "人形机器人",
    "rise": -0.89,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续417天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "芯片概念",
    "rise": -0.18,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "光纤概念",
    "rise": -0.08,
    "rate": 0,
    "tag": "",
    "hotTag": "连续82天上榜",
    "rankChg": 0,
    "etfName": "财通升级混合LOF",
    "code": "886084"
  },
  {
    "name": "ST板块",
    "rise": 0.48,
    "rate": 0,
    "tag": "",
    "hotTag": "连续91天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "AI应用",
    "rise": -0.26,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "猪肉",
    "rise": -0.14,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 2,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 0.26,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "人工智能",
    "rise": -0.33,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": -2,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "玻璃基板",
    "rise": -0.32,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "工业母机ETF",
    "code": "886111"
  }
];
const THS_EVENTS = [
  {
    "title": "2026中国国际黄金大会开幕，黄金产业链上下游技术集体革新",
    "desc": "",
    "heat": 320400,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "晓程科技",
        "code": "300139",
        "chg": 11.059276
      }
    ]
  },
  {
    "title": "特朗普宣布两年后对仿制药征收100%关税",
    "desc": "",
    "heat": 281670,
    "direction": "仿制药",
    "themes": [
      "仿制药一致性评价",
      "CRO概念"
    ],
    "stocks": [
      {
        "name": "莱美药业",
        "code": "300006",
        "chg": 18.80531
      }
    ]
  },
  {
    "title": "英伟达(NVDA.US)AI“新王牌”来了！Vera Rubin已交付OpenAI等巨头 下一轮算力竞赛开启",
    "desc": "",
    "heat": 186049,
    "direction": "英伟达概念",
    "themes": [
      "英伟达概念"
    ],
    "stocks": [
      {
        "name": "紫光股份",
        "code": "000938",
        "chg": 10.009648
      }
    ]
  },
  {
    "title": "腾讯云：将大规模部署国产化算力 布局NPO超级节点",
    "desc": "",
    "heat": 181058,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "锐捷网络",
        "code": "301165",
        "chg": 17.860364
      }
    ]
  },
  {
    "title": "北京：下半年将布局建设Token工厂 力争新增智能算力5万P",
    "desc": "",
    "heat": 164433,
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
    "heat": 86481,
    "direction": "Kimi",
    "themes": [
      "Kimi"
    ],
    "stocks": [
      {
        "name": "ST信源",
        "code": "300352",
        "chg": 0.913242
      }
    ]
  },
  {
    "title": "美情报机构：美伊将陷入长期对峙",
    "desc": "",
    "heat": 58994,
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
        "chg": 11.326078
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄金",
    "change": "+6.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+5.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+5.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+4.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+4.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铁矿石",
    "change": "+3.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "交换机",
    "change": "+2.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铜",
    "change": "+2.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+2.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+2.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 镍",
    "change": "+2.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钼",
    "change": "+2.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+2.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+2.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+2.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "服务器",
    "change": "+2.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "耐火材料",
    "change": "+2.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+2.11%",
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
    "hot_rank": 7,
    "hot_rank_chg": -4,
    "stock_cnt": 5802,
    "price": "6.26",
    "change": "7.19",
    "market_id": "17",
    "circulate_market_value": "15765872000.00",
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
        "change_pct": 0.58
      },
      {
        "name": "中药",
        "change_pct": 1.69
      },
      {
        "name": "强势人气股",
        "change_pct": 0.57
      },
      {
        "name": "保健品",
        "change_pct": 0.58
      },
      {
        "name": "民营医院",
        "change_pct": 1.04
      },
      {
        "name": "医药",
        "change_pct": 2.03
      },
      {
        "name": "化学原料药",
        "change_pct": 2.05
      },
      {
        "name": "流感",
        "change_pct": 1.21
      },
      {
        "name": "振兴东北",
        "change_pct": -0.07
      },
      {
        "name": "食品",
        "change_pct": 0.0
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 10,
    "hot_rank_chg": 8,
    "stock_cnt": 5802,
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
        "name": "新疆国企改革",
        "change_pct": 0.9
      },
      {
        "name": "新疆概念",
        "change_pct": 0.55
      },
      {
        "name": "光伏",
        "change_pct": 0.75
      },
      {
        "name": "风电",
        "change_pct": -0.15
      },
      {
        "name": "储能",
        "change_pct": 0.05
      },
      {
        "name": "国企改革",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 13,
    "hot_rank_chg": -5,
    "stock_cnt": 5802,
    "price": "6.24",
    "change": "-1.27",
    "market_id": "33",
    "circulate_market_value": "220337250000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.64
      },
      {
        "name": "折叠屏",
        "change_pct": -0.49
      },
      {
        "name": "手机产业链",
        "change_pct": -0.03
      },
      {
        "name": "超高清视频",
        "change_pct": -0.42
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.22
      },
      {
        "name": "电竞",
        "change_pct": -1.31
      },
      {
        "name": "半导体",
        "change_pct": 0.29
      },
      {
        "name": "人工智能",
        "change_pct": -0.34
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.3
      },
      {
        "name": "VR&AR",
        "change_pct": -0.52
      },
      {
        "name": "OLED",
        "change_pct": -0.66
      },
      {
        "name": "京津冀",
        "change_pct": 0.14
      },
      {
        "name": "物联网",
        "change_pct": -0.34
      },
      {
        "name": "指纹识别",
        "change_pct": -0.06
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.98
      },
      {
        "name": "白马股",
        "change_pct": 0.58
      },
      {
        "name": "智能制造",
        "change_pct": -0.74
      },
      {
        "name": "小米概念股",
        "change_pct": 0.01
      },
      {
        "name": "国产芯片",
        "change_pct": 0.49
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.88
      },
      {
        "name": "全息概念",
        "change_pct": -0.69
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.44
      },
      {
        "name": "MicroLED",
        "change_pct": -0.5
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.46
      },
      {
        "name": "智能手表",
        "change_pct": -0.33
      },
      {
        "name": "MiniLED",
        "change_pct": -0.27
      },
      {
        "name": "传感器",
        "change_pct": -0.02
      },
      {
        "name": "大硅片",
        "change_pct": -0.74
      },
      {
        "name": "AI PC",
        "change_pct": -0.61
      },
      {
        "name": "华为产业链",
        "change_pct": -0.23
      },
      {
        "name": "回购",
        "change_pct": 0.33
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.17
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 22,
    "hot_rank_chg": 12,
    "stock_cnt": 5802,
    "price": "6.88",
    "change": "3.93",
    "market_id": "17",
    "circulate_market_value": "85285093000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.11
      },
      {
        "name": "核电",
        "change_pct": -0.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.57
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.68
      },
      {
        "name": "水电",
        "change_pct": 0.29
      },
      {
        "name": "火电",
        "change_pct": 0.85
      },
      {
        "name": "光伏",
        "change_pct": 0.75
      },
      {
        "name": "风电",
        "change_pct": -0.15
      },
      {
        "name": "国企改革",
        "change_pct": -0.09
      },
      {
        "name": "算电协同",
        "change_pct": 0.43
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 24,
    "hot_rank_chg": -4,
    "stock_cnt": 5802,
    "price": "7.65",
    "change": "5.96",
    "market_id": "17",
    "circulate_market_value": "15538101000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.11
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.68
      },
      {
        "name": "火电",
        "change_pct": 0.85
      },
      {
        "name": "风电",
        "change_pct": -0.15
      },
      {
        "name": "储能",
        "change_pct": 0.05
      },
      {
        "name": "碳中和",
        "change_pct": 0.3
      },
      {
        "name": "国企改革",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 27,
    "hot_rank_chg": 49,
    "stock_cnt": 5802,
    "price": "11.99",
    "change": "7.73",
    "market_id": "33",
    "circulate_market_value": "6992697200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 1.71
      },
      {
        "name": "一带一路",
        "change_pct": 0.01
      },
      {
        "name": "天然气",
        "change_pct": 0.44
      },
      {
        "name": "油气改革",
        "change_pct": 0.99
      },
      {
        "name": "页岩气",
        "change_pct": 0.92
      },
      {
        "name": "深地经济",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 33,
    "hot_rank_chg": 23,
    "stock_cnt": 5802,
    "price": "6.78",
    "change": "-2.02",
    "market_id": "33",
    "circulate_market_value": "8536213400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -0.34
      },
      {
        "name": "游戏",
        "change_pct": -1.3
      },
      {
        "name": "智能音箱",
        "change_pct": -0.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.01
      },
      {
        "name": "数字经济",
        "change_pct": -0.32
      },
      {
        "name": "百度概念股",
        "change_pct": -0.72
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.09
      },
      {
        "name": "拼多多概念股",
        "change_pct": -0.94
      },
      {
        "name": "传媒",
        "change_pct": -1.1
      },
      {
        "name": "全息概念",
        "change_pct": -0.69
      },
      {
        "name": "NFT",
        "change_pct": -0.97
      },
      {
        "name": "元宇宙",
        "change_pct": -0.86
      },
      {
        "name": "web3.0",
        "change_pct": -0.37
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.55
      },
      {
        "name": "数字人民币",
        "change_pct": -0.29
      },
      {
        "name": "智慧政务",
        "change_pct": -0.19
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.62
      },
      {
        "name": "盲盒",
        "change_pct": -0.6
      },
      {
        "name": "AI营销",
        "change_pct": -1.31
      },
      {
        "name": "华为产业链",
        "change_pct": -0.23
      },
      {
        "name": "供应链金融",
        "change_pct": -1.08
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.54
      },
      {
        "name": "区块链",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "000889",
    "name": "中嘉博创",
    "hot_rank": 40,
    "hot_rank_chg": -2,
    "stock_cnt": 5802,
    "price": "3.96",
    "change": "3.95",
    "market_id": "33",
    "circulate_market_value": "3435888300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": -0.53
      },
      {
        "name": "强势人气股",
        "change_pct": 0.57
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -0.45
      },
      {
        "name": "区块链",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 52,
    "hot_rank_chg": -16,
    "stock_cnt": 5802,
    "price": "5.22",
    "change": "-2.43",
    "market_id": "33",
    "circulate_market_value": "105000197000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.49
      },
      {
        "name": "手机产业链",
        "change_pct": -0.03
      },
      {
        "name": "超高清视频",
        "change_pct": -0.42
      },
      {
        "name": "电竞",
        "change_pct": -1.31
      },
      {
        "name": "半导体",
        "change_pct": 0.29
      },
      {
        "name": "OLED",
        "change_pct": -0.66
      },
      {
        "name": "光伏",
        "change_pct": 0.75
      },
      {
        "name": "黑色家电",
        "change_pct": -0.41
      },
      {
        "name": "家电",
        "change_pct": -0.87
      },
      {
        "name": "智能制造",
        "change_pct": -0.74
      },
      {
        "name": "工业互联网",
        "change_pct": -0.49
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.01
      },
      {
        "name": "国产芯片",
        "change_pct": 0.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.09
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.88
      },
      {
        "name": "MicroLED",
        "change_pct": -0.5
      },
      {
        "name": "MiniLED",
        "change_pct": -0.27
      },
      {
        "name": "华为产业链",
        "change_pct": -0.23
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 55,
    "hot_rank_chg": 23,
    "stock_cnt": 5802,
    "price": "4.90",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "5061385400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.05
      },
      {
        "name": "锂电池",
        "change_pct": -0.27
      },
      {
        "name": "强势人气股",
        "change_pct": 0.57
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.32
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.43
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.49
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "002036",
    "name": "联创电子",
    "hot_rank": 61,
    "hot_rank_chg": -8,
    "stock_cnt": 5802,
    "price": "7.02",
    "change": "-2.77",
    "market_id": "33",
    "circulate_market_value": "7398829100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": -0.9
      },
      {
        "name": "折叠屏",
        "change_pct": -0.49
      },
      {
        "name": "手机产业链",
        "change_pct": -0.03
      },
      {
        "name": "超高清视频",
        "change_pct": -0.42
      },
      {
        "name": "无线充电",
        "change_pct": 0.12
      },
      {
        "name": "特斯拉",
        "change_pct": -0.78
      },
      {
        "name": "股权转让",
        "change_pct": -0.16
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.45
      },
      {
        "name": "VR&AR",
        "change_pct": -0.52
      },
      {
        "name": "OLED",
        "change_pct": -0.66
      },
      {
        "name": "3D感应",
        "change_pct": -0.69
      },
      {
        "name": "人脸识别",
        "change_pct": -0.97
      },
      {
        "name": "3D玻璃",
        "change_pct": -0.42
      },
      {
        "name": "指纹识别",
        "change_pct": -0.06
      },
      {
        "name": "手势识别",
        "change_pct": -0.43
      },
      {
        "name": "虹膜识别",
        "change_pct": -0.91
      },
      {
        "name": "机器视觉",
        "change_pct": -0.78
      },
      {
        "name": "无人机",
        "change_pct": -0.52
      },
      {
        "name": "智能制造",
        "change_pct": -0.74
      },
      {
        "name": "国产芯片",
        "change_pct": 0.49
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.88
      },
      {
        "name": "激光雷达",
        "change_pct": -0.25
      },
      {
        "name": "元宇宙",
        "change_pct": -0.86
      },
      {
        "name": "电子后视镜",
        "change_pct": -0.88
      },
      {
        "name": "无线耳机",
        "change_pct": 0.14
      },
      {
        "name": "云游戏",
        "change_pct": -1.29
      },
      {
        "name": "AI PC",
        "change_pct": -0.61
      },
      {
        "name": "国资入股",
        "change_pct": -0.25
      },
      {
        "name": "华为产业链",
        "change_pct": -0.23
      },
      {
        "name": "毫米波雷达",
        "change_pct": -0.18
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.17
      },
      {
        "name": "英伟达概念",
        "change_pct": 0.55
      },
      {
        "name": "人形机器人",
        "change_pct": -1.12
      },
      {
        "name": "智能座舱",
        "change_pct": -0.47
      },
      {
        "name": "AI手机",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "002197",
    "name": "证通电子",
    "hot_rank": 69,
    "hot_rank_chg": 22,
    "stock_cnt": 5802,
    "price": "6.97",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "3721980100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": -0.53
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.31
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.28
      },
      {
        "name": "金融科技",
        "change_pct": -0.53
      },
      {
        "name": "充电桩",
        "change_pct": -0.03
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.52
      },
      {
        "name": "移动支付",
        "change_pct": -0.24
      },
      {
        "name": "教育",
        "change_pct": 0.27
      },
      {
        "name": "智慧城市",
        "change_pct": -0.39
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.43
      },
      {
        "name": "LED",
        "change_pct": -0.45
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.49
      },
      {
        "name": "机器人",
        "change_pct": -0.7
      },
      {
        "name": "数字经济",
        "change_pct": -0.32
      },
      {
        "name": "国产芯片",
        "change_pct": 0.49
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.3
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.09
      },
      {
        "name": "信创",
        "change_pct": -0.06
      },
      {
        "name": "NFT",
        "change_pct": -0.97
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.93
      },
      {
        "name": "数字乡村",
        "change_pct": -0.52
      },
      {
        "name": "教育信息化",
        "change_pct": -0.22
      },
      {
        "name": "数字人民币",
        "change_pct": -0.29
      },
      {
        "name": "智慧政务",
        "change_pct": -0.19
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.24
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.62
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -0.16
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.8
      },
      {
        "name": "华为产业链",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 71,
    "hot_rank_chg": 60,
    "stock_cnt": 5802,
    "price": "12.26",
    "change": "-2.46",
    "market_id": "33",
    "circulate_market_value": "42708984000.00",
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
        "name": "人工智能",
        "change_pct": -0.34
      },
      {
        "name": "VR&AR",
        "change_pct": -0.52
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.92
      },
      {
        "name": "大数据",
        "change_pct": -0.18
      },
      {
        "name": "教育",
        "change_pct": 0.27
      },
      {
        "name": "百度概念股",
        "change_pct": -0.72
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.3
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.09
      },
      {
        "name": "传媒",
        "change_pct": -1.1
      },
      {
        "name": "快手概念股",
        "change_pct": -0.73
      },
      {
        "name": "NFT",
        "change_pct": -0.97
      },
      {
        "name": "元宇宙",
        "change_pct": -0.86
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.16
      },
      {
        "name": "web3.0",
        "change_pct": -0.37
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.67
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.55
      },
      {
        "name": "职业教育",
        "change_pct": -0.2
      },
      {
        "name": "云游戏",
        "change_pct": -1.29
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.92
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -0.45
      },
      {
        "name": "AI营销",
        "change_pct": -1.31
      },
      {
        "name": "词元概念/Token",
        "change_pct": 1.43
      },
      {
        "name": "人工智能大模型",
        "change_pct": -0.3
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -1.11
      },
      {
        "name": "智谱AI",
        "change_pct": 0.3
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.97
      },
      {
        "name": "区块链",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "002575",
    "name": "群兴玩具",
    "hot_rank": 85,
    "hot_rank_chg": 1892,
    "stock_cnt": 5802,
    "price": "4.83",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "2822292200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "腾讯概念股",
        "change_pct": -0.09
      },
      {
        "name": "物业管理",
        "change_pct": -0.5
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 87,
    "hot_rank_chg": 91,
    "stock_cnt": 5802,
    "price": "7.02",
    "change": "3.54",
    "market_id": "33",
    "circulate_market_value": "4603056300.00",
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
        "name": "新零售",
        "change_pct": -0.4
      },
      {
        "name": "农业种植",
        "change_pct": -0.32
      },
      {
        "name": "冷链",
        "change_pct": -0.62
      },
      {
        "name": "大农业",
        "change_pct": 0.08
      },
      {
        "name": "预制菜",
        "change_pct": -0.34
      },
      {
        "name": "国企改革",
        "change_pct": -0.09
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.18
      },
      {
        "name": "免税店概念",
        "change_pct": 0.12
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.21
      }
    ]
  },
  {
    "code": "600821",
    "name": "金开新能",
    "hot_rank": 91,
    "hot_rank_chg": 3,
    "stock_cnt": 5802,
    "price": "7.00",
    "change": "3.86",
    "market_id": "17",
    "circulate_market_value": "13751601000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.16
      },
      {
        "name": "天津国企改革",
        "change_pct": 0.19
      },
      {
        "name": "京津冀",
        "change_pct": 0.14
      },
      {
        "name": "光伏",
        "change_pct": 0.75
      },
      {
        "name": "风电",
        "change_pct": -0.15
      },
      {
        "name": "储能",
        "change_pct": 0.05
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.93
      },
      {
        "name": "国企改革",
        "change_pct": -0.09
      },
      {
        "name": "算电协同",
        "change_pct": 0.43
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 100,
    "hot_rank_chg": 82,
    "stock_cnt": 5802,
    "price": "11.60",
    "change": "0.96",
    "market_id": "17",
    "circulate_market_value": "14804567000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.56
      },
      {
        "name": "强势人气股",
        "change_pct": 0.57
      },
      {
        "name": "智能制造",
        "change_pct": -0.74
      },
      {
        "name": "工业互联网",
        "change_pct": -0.49
      },
      {
        "name": "培育钻石",
        "change_pct": -0.36
      },
      {
        "name": "金刚线",
        "change_pct": 1.72
      },
      {
        "name": "国资入股",
        "change_pct": -0.25
      },
      {
        "name": "深地经济",
        "change_pct": 0.54
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000938", "name": "紫光股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5802, "price": "45.61", "change": "10.01", "market_id": "33", "circulate_market_value": "130447915000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5802, "price": "472.86", "change": "-6.92", "market_id": "33", "circulate_market_value": "78054059000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 3, "hot_rank_chg": 10, "stock_cnt": 5802, "price": "76.23", "change": "10.00", "market_id": "33", "circulate_market_value": "115675383000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "先进封装"}, {"code": "600584", "name": "长电科技", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5802, "price": "87.91", "change": "3.80", "market_id": "17", "circulate_market_value": "157307430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 5, "hot_rank_chg": 5, "stock_cnt": 5802, "price": "18.62", "change": "1.42", "market_id": "33", "circulate_market_value": "61834549000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 6, "hot_rank_chg": 8, "stock_cnt": 5802, "price": "16.13", "change": "10.03", "market_id": "33", "circulate_market_value": "11214592800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "算力租赁"}, {"code": "600664", "name": "哈药股份", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5802, "price": "6.26", "change": "7.19", "market_id": "17", "circulate_market_value": "15765872000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.63}, {"name": "工业大麻", "change_pct": 0.58}, {"name": "中药", "change_pct": 1.69}, {"name": "强势人气股", "change_pct": 0.57}, {"name": "保健品", "change_pct": 0.58}, {"name": "民营医院", "change_pct": 1.04}, {"name": "医药", "change_pct": 2.03}, {"name": "化学原料药", "change_pct": 2.05}, {"name": "流感", "change_pct": 1.21}, {"name": "振兴东北", "change_pct": -0.07}, {"name": "食品", "change_pct": 0.0}]}, {"code": "000021", "name": "深科技", "hot_rank": 8, "hot_rank_chg": 14, "stock_cnt": 5802, "price": "41.40", "change": "7.09", "market_id": "33", "circulate_market_value": "65154299000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "34.53", "change": "9.40", "market_id": "33", "circulate_market_value": "26191414000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 10, "hot_rank_chg": 8, "stock_cnt": 5802, "price": "11.01", "change": "9.99", "market_id": "33", "circulate_market_value": "10275892700.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "风电光伏", "xgb_concepts": [{"name": "新疆国企改革", "change_pct": 0.9}, {"name": "新疆概念", "change_pct": 0.55}, {"name": "光伏", "change_pct": 0.75}, {"name": "风电", "change_pct": -0.15}, {"name": "储能", "change_pct": 0.05}, {"name": "国企改革", "change_pct": -0.09}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 11, "hot_rank_chg": -5, "stock_cnt": 5802, "price": "496.02", "change": "4.31", "market_id": "17", "circulate_market_value": "331585370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 12, "hot_rank_chg": 9, "stock_cnt": 5802, "price": "16.42", "change": "9.98", "market_id": "17", "circulate_market_value": "12927078600.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "数据中心交换机"}, {"code": "000725", "name": "京东方A", "hot_rank": 13, "hot_rank_chg": -5, "stock_cnt": 5802, "price": "6.24", "change": "-1.27", "market_id": "33", "circulate_market_value": "220337250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.64}, {"name": "折叠屏", "change_pct": -0.49}, {"name": "手机产业链", "change_pct": -0.03}, {"name": "超高清视频", "change_pct": -0.42}, {"name": "苹果产业链", "change_pct": -0.22}, {"name": "电竞", "change_pct": -1.31}, {"name": "半导体", "change_pct": 0.29}, {"name": "人工智能", "change_pct": -0.34}, {"name": "互联网医疗", "change_pct": 0.3}, {"name": "VR&AR", "change_pct": -0.52}, {"name": "OLED", "change_pct": -0.66}, {"name": "京津冀", "change_pct": 0.14}, {"name": "物联网", "change_pct": -0.34}, {"name": "指纹识别", "change_pct": -0.06}, {"name": "汽车零部件", "change_pct": -0.98}, {"name": "白马股", "change_pct": 0.58}, {"name": "智能制造", "change_pct": -0.74}, {"name": "小米概念股", "change_pct": 0.01}, {"name": "国产芯片", "change_pct": 0.49}, {"name": "液晶面板/LCD", "change_pct": -0.88}, {"name": "全息概念", "change_pct": -0.69}, {"name": "理想汽车概念股", "change_pct": -1.44}, {"name": "MicroLED", "change_pct": -0.5}, {"name": "钙钛矿电池", "change_pct": 0.46}, {"name": "智能手表", "change_pct": -0.33}, {"name": "MiniLED", "change_pct": -0.27}, {"name": "传感器", "change_pct": -0.02}, {"name": "大硅片", "change_pct": -0.74}, {"name": "AI PC", "change_pct": -0.61}, {"name": "华为产业链", "change_pct": -0.23}, {"name": "回购", "change_pct": 0.33}, {"name": "智能眼镜/MR头显", "change_pct": -0.17}, {"name": "玻璃基板封装", "change_pct": 0.11}]}, {"code": "002384", "name": "东山精密", "hot_rank": 14, "hot_rank_chg": -5, "stock_cnt": 5802, "price": "237.83", "change": "2.98", "market_id": "33", "circulate_market_value": "329778210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 15, "hot_rank_chg": 14, "stock_cnt": 5802, "price": "118.34", "change": "10.00", "market_id": "17", "circulate_market_value": "42688007000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力租赁"}, {"code": "000977", "name": "浪潮信息", "hot_rank": 16, "hot_rank_chg": -9, "stock_cnt": 5802, "price": "94.22", "change": "6.30", "market_id": "33", "circulate_market_value": "138248900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 17, "hot_rank_chg": 27, "stock_cnt": 5802, "price": "158.71", "change": "20.00", "market_id": "33", "circulate_market_value": "4893247200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体设备"}, {"code": "002432", "name": "九安医疗", "hot_rank": 18, "hot_rank_chg": -3, "stock_cnt": 5802, "price": "82.60", "change": "3.76", "market_id": "33", "circulate_market_value": "38501284000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 19, "hot_rank_chg": -3, "stock_cnt": 5802, "price": "17.30", "change": "3.65", "market_id": "17", "circulate_market_value": "36183680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 20, "hot_rank_chg": 44, "stock_cnt": 5802, "price": "31.92", "change": "5.66", "market_id": "17", "circulate_market_value": "657609240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 21, "hot_rank_chg": -2, "stock_cnt": 5802, "price": "58.26", "change": "-2.83", "market_id": "17", "circulate_market_value": "142949430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 22, "hot_rank_chg": 12, "stock_cnt": 5802, "price": "6.88", "change": "3.93", "market_id": "17", "circulate_market_value": "85285093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.11}, {"name": "核电", "change_pct": -0.35}, {"name": "强势人气股", "change_pct": 0.57}, {"name": "电力体制改革", "change_pct": 0.68}, {"name": "水电", "change_pct": 0.29}, {"name": "火电", "change_pct": 0.85}, {"name": "光伏", "change_pct": 0.75}, {"name": "风电", "change_pct": -0.15}, {"name": "国企改革", "change_pct": -0.09}, {"name": "算电协同", "change_pct": 0.43}]}, {"code": "002371", "name": "北方华创", "hot_rank": 23, "hot_rank_chg": 4, "stock_cnt": 5802, "price": "773.98", "change": "4.00", "market_id": "33", "circulate_market_value": "561503310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 24, "hot_rank_chg": -4, "stock_cnt": 5802, "price": "7.65", "change": "5.96", "market_id": "17", "circulate_market_value": "15538101000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.11}, {"name": "电力体制改革", "change_pct": 0.68}, {"name": "火电", "change_pct": 0.85}, {"name": "风电", "change_pct": -0.15}, {"name": "储能", "change_pct": 0.05}, {"name": "碳中和", "change_pct": 0.3}, {"name": "国企改革", "change_pct": -0.09}]}, {"code": "603538", "name": "美诺华", "hot_rank": 25, "hot_rank_chg": 5, "stock_cnt": 5802, "price": "30.10", "change": "7.65", "market_id": "17", "circulate_market_value": "10141290500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 26, "hot_rank_chg": 16, "stock_cnt": 5802, "price": "14.74", "change": "8.70", "market_id": "17", "circulate_market_value": "21707698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 27, "hot_rank_chg": 49, "stock_cnt": 5802, "price": "11.99", "change": "7.73", "market_id": "33", "circulate_market_value": "6992697200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 1.71}, {"name": "一带一路", "change_pct": 0.01}, {"name": "天然气", "change_pct": 0.44}, {"name": "油气改革", "change_pct": 0.99}, {"name": "页岩气", "change_pct": 0.92}, {"name": "深地经济", "change_pct": 0.54}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 29, "hot_rank_chg": -6, "stock_cnt": 5802, "price": "63.63", "change": "6.19", "market_id": "33", "circulate_market_value": "54301861000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 30, "hot_rank_chg": 10, "stock_cnt": 5802, "price": "98.71", "change": "-8.08", "market_id": "33", "circulate_market_value": "81948187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 31, "hot_rank_chg": -19, "stock_cnt": 5802, "price": "1109.00", "change": "-2.58", "market_id": "33", "circulate_market_value": "1228991920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 32, "hot_rank_chg": -7, "stock_cnt": 5802, "price": "41.61", "change": "5.55", "market_id": "17", "circulate_market_value": "35258946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000676", "name": "智度股份", "hot_rank": 33, "hot_rank_chg": 23, "stock_cnt": 5802, "price": "6.78", "change": "-2.02", "market_id": "33", "circulate_market_value": "8536213400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.34}, {"name": "游戏", "change_pct": -1.3}, {"name": "智能音箱", "change_pct": -0.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.01}, {"name": "数字经济", "change_pct": -0.32}, {"name": "百度概念股", "change_pct": -0.72}, {"name": "腾讯概念股", "change_pct": -0.09}, {"name": "拼多多概念股", "change_pct": -0.94}, {"name": "传媒", "change_pct": -1.1}, {"name": "全息概念", "change_pct": -0.69}, {"name": "NFT", "change_pct": -0.97}, {"name": "元宇宙", "change_pct": -0.86}, {"name": "web3.0", "change_pct": -0.37}, {"name": "字节跳动概念股", "change_pct": -0.55}, {"name": "数字人民币", "change_pct": -0.29}, {"name": "智慧政务", "change_pct": -0.19}, {"name": "华为鸿蒙", "change_pct": -0.62}, {"name": "盲盒", "change_pct": -0.6}, {"name": "AI营销", "change_pct": -1.31}, {"name": "华为产业链", "change_pct": -0.23}, {"name": "供应链金融", "change_pct": -1.08}, {"name": "ChatGPT", "change_pct": -0.54}, {"name": "区块链", "change_pct": -0.72}]}, {"code": "300502", "name": "新易盛", "hot_rank": 34, "hot_rank_chg": -8, "stock_cnt": 5802, "price": "538.96", "change": "-2.49", "market_id": "33", "circulate_market_value": "674795360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 35, "hot_rank_chg": 15, "stock_cnt": 5802, "price": "113.30", "change": "8.86", "market_id": "33", "circulate_market_value": "179866940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 36, "hot_rank_chg": -8, "stock_cnt": 5802, "price": "103.13", "change": "5.36", "market_id": "17", "circulate_market_value": "150884790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 37, "hot_rank_chg": -5, "stock_cnt": 5802, "price": "34.09", "change": "-1.56", "market_id": "17", "circulate_market_value": "116347454000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 38, "hot_rank_chg": 87, "stock_cnt": 5802, "price": "19.81", "change": "6.05", "market_id": "17", "circulate_market_value": "345899280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 39, "hot_rank_chg": 4, "stock_cnt": 5802, "price": "196.59", "change": "4.96", "market_id": "33", "circulate_market_value": "153082780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000889", "name": "中嘉博创", "hot_rank": 40, "hot_rank_chg": -2, "stock_cnt": 5802, "price": "3.96", "change": "3.95", "market_id": "33", "circulate_market_value": "3435888300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "金融科技", "change_pct": -0.53}, {"name": "强势人气股", "change_pct": 0.57}, {"name": "5G消息/RCS", "change_pct": -0.45}, {"name": "区块链", "change_pct": -0.72}]}, {"code": "000063", "name": "中兴通讯", "hot_rank": 41, "hot_rank_chg": 14, "stock_cnt": 5802, "price": "36.95", "change": "5.93", "market_id": "33", "circulate_market_value": "148820600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 42, "hot_rank_chg": 19, "stock_cnt": 5802, "price": "17.73", "change": "5.28", "market_id": "33", "circulate_market_value": "13459568000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 43, "hot_rank_chg": 29, "stock_cnt": 5802, "price": "131.20", "change": "18.16", "market_id": "33", "circulate_market_value": "145875230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 44, "hot_rank_chg": -11, "stock_cnt": 5802, "price": "115.80", "change": "2.32", "market_id": "33", "circulate_market_value": "116347190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 45, "hot_rank_chg": 44, "stock_cnt": 5802, "price": "250.02", "change": "4.06", "market_id": "33", "circulate_market_value": "216316040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 46, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "150.50", "change": "4.84", "market_id": "33", "circulate_market_value": "47937673000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 47, "hot_rank_chg": -2, "stock_cnt": 5802, "price": "33.88", "change": "3.13", "market_id": "17", "circulate_market_value": "56412036000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 48, "hot_rank_chg": 19, "stock_cnt": 5802, "price": "386.00", "change": "-5.02", "market_id": "17", "circulate_market_value": "156842530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 49, "hot_rank_chg": 19, "stock_cnt": 5802, "price": "34.37", "change": "2.81", "market_id": "33", "circulate_market_value": "26891247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 50, "hot_rank_chg": 29, "stock_cnt": 5802, "price": "43.99", "change": "-1.04", "market_id": "33", "circulate_market_value": "50746595000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 51, "hot_rank_chg": 75, "stock_cnt": 5802, "price": "13.33", "change": "4.14", "market_id": "33", "circulate_market_value": "14161843000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 52, "hot_rank_chg": -16, "stock_cnt": 5802, "price": "5.22", "change": "-2.43", "market_id": "33", "circulate_market_value": "105000197000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.49}, {"name": "手机产业链", "change_pct": -0.03}, {"name": "超高清视频", "change_pct": -0.42}, {"name": "电竞", "change_pct": -1.31}, {"name": "半导体", "change_pct": 0.29}, {"name": "OLED", "change_pct": -0.66}, {"name": "光伏", "change_pct": 0.75}, {"name": "黑色家电", "change_pct": -0.41}, {"name": "家电", "change_pct": -0.87}, {"name": "智能制造", "change_pct": -0.74}, {"name": "工业互联网", "change_pct": -0.49}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.01}, {"name": "国产芯片", "change_pct": 0.49}, {"name": "腾讯概念股", "change_pct": -0.09}, {"name": "液晶面板/LCD", "change_pct": -0.88}, {"name": "MicroLED", "change_pct": -0.5}, {"name": "MiniLED", "change_pct": -0.27}, {"name": "华为产业链", "change_pct": -0.23}, {"name": "玻璃基板封装", "change_pct": 0.11}]}, {"code": "601138", "name": "工业富联", "hot_rank": 53, "hot_rank_chg": -4, "stock_cnt": 5802, "price": "61.60", "change": "0.97", "market_id": "17", "circulate_market_value": "1221800760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 54, "hot_rank_chg": -19, "stock_cnt": 5802, "price": "224.50", "change": "2.23", "market_id": "17", "circulate_market_value": "256999630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 55, "hot_rank_chg": 23, "stock_cnt": 5802, "price": "4.90", "change": "0.00", "market_id": "33", "circulate_market_value": "5061385400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.05}, {"name": "锂电池", "change_pct": -0.27}, {"name": "强势人气股", "change_pct": 0.57}, {"name": "铜箔/覆铜板", "change_pct": -0.32}, {"name": "粤港澳大湾区", "change_pct": -0.43}, {"name": "新能源汽车", "change_pct": -0.49}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.01}]}, {"code": "002008", "name": "大族激光", "hot_rank": 56, "hot_rank_chg": 28, "stock_cnt": 5802, "price": "106.32", "change": "5.26", "market_id": "33", "circulate_market_value": "101604448000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603296", "name": "华勤技术", "hot_rank": 57, "hot_rank_chg": 39, "stock_cnt": 5802, "price": "87.67", "change": "10.00", "market_id": "17", "circulate_market_value": "70012916000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超节点"}, {"code": "300475", "name": "香农芯创", "hot_rank": 58, "hot_rank_chg": 1, "stock_cnt": 5802, "price": "177.57", "change": "0.29", "market_id": "33", "circulate_market_value": "79881349000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 59, "hot_rank_chg": -1, "stock_cnt": 5802, "price": "50.48", "change": "2.77", "market_id": "17", "circulate_market_value": "31820220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300604", "name": "长川科技", "hot_rank": 60, "hot_rank_chg": -43, "stock_cnt": 5802, "price": "313.75", "change": "-1.38", "market_id": "33", "circulate_market_value": "153503140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002036", "name": "联创电子", "hot_rank": 61, "hot_rank_chg": -8, "stock_cnt": 5802, "price": "7.02", "change": "-2.77", "market_id": "33", "circulate_market_value": "7398829100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": -0.9}, {"name": "折叠屏", "change_pct": -0.49}, {"name": "手机产业链", "change_pct": -0.03}, {"name": "超高清视频", "change_pct": -0.42}, {"name": "无线充电", "change_pct": 0.12}, {"name": "特斯拉", "change_pct": -0.78}, {"name": "股权转让", "change_pct": -0.16}, {"name": "无人驾驶", "change_pct": -0.45}, {"name": "VR&AR", "change_pct": -0.52}, {"name": "OLED", "change_pct": -0.66}, {"name": "3D感应", "change_pct": -0.69}, {"name": "人脸识别", "change_pct": -0.97}, {"name": "3D玻璃", "change_pct": -0.42}, {"name": "指纹识别", "change_pct": -0.06}, {"name": "手势识别", "change_pct": -0.43}, {"name": "虹膜识别", "change_pct": -0.91}, {"name": "机器视觉", "change_pct": -0.78}, {"name": "无人机", "change_pct": -0.52}, {"name": "智能制造", "change_pct": -0.74}, {"name": "国产芯片", "change_pct": 0.49}, {"name": "液晶面板/LCD", "change_pct": -0.88}, {"name": "激光雷达", "change_pct": -0.25}, {"name": "元宇宙", "change_pct": -0.86}, {"name": "电子后视镜", "change_pct": -0.88}, {"name": "无线耳机", "change_pct": 0.14}, {"name": "云游戏", "change_pct": -1.29}, {"name": "AI PC", "change_pct": -0.61}, {"name": "国资入股", "change_pct": -0.25}, {"name": "华为产业链", "change_pct": -0.23}, {"name": "毫米波雷达", "change_pct": -0.18}, {"name": "智能眼镜/MR头显", "change_pct": -0.17}, {"name": "英伟达概念", "change_pct": 0.55}, {"name": "人形机器人", "change_pct": -1.12}, {"name": "智能座舱", "change_pct": -0.47}, {"name": "AI手机", "change_pct": -0.61}]}, {"code": "002594", "name": "比亚迪", "hot_rank": 62, "hot_rank_chg": 41, "stock_cnt": 5802, "price": "91.46", "change": "-3.01", "market_id": "33", "circulate_market_value": "318885670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 63, "hot_rank_chg": 52, "stock_cnt": 5802, "price": "38.07", "change": "7.30", "market_id": "17", "circulate_market_value": "63345106000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 64, "hot_rank_chg": 16, "stock_cnt": 5802, "price": "40.37", "change": "2.57", "market_id": "33", "circulate_market_value": "57326690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 65, "hot_rank_chg": 5, "stock_cnt": 5802, "price": "30.27", "change": "0.47", "market_id": "33", "circulate_market_value": "32654288000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 66, "hot_rank_chg": 17, "stock_cnt": 5802, "price": "121.65", "change": "-0.79", "market_id": "33", "circulate_market_value": "233871440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 67, "hot_rank_chg": -30, "stock_cnt": 5802, "price": "414.08", "change": "-1.82", "market_id": "33", "circulate_market_value": "116737417000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 68, "hot_rank_chg": -16, "stock_cnt": 5802, "price": "136.69", "change": "0.75", "market_id": "17", "circulate_market_value": "327304420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002197", "name": "证通电子", "hot_rank": 69, "hot_rank_chg": 22, "stock_cnt": 5802, "price": "6.97", "change": "9.94", "market_id": "33", "circulate_market_value": "3721980100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力租赁", "xgb_concepts": [{"name": "国产软件", "change_pct": -0.53}, {"name": "深圳本地股", "change_pct": -0.31}, {"name": "ST摘帽", "change_pct": 0.28}, {"name": "金融科技", "change_pct": -0.53}, {"name": "充电桩", "change_pct": -0.03}, {"name": "云计算数据中心", "change_pct": 0.52}, {"name": "移动支付", "change_pct": -0.24}, {"name": "教育", "change_pct": 0.27}, {"name": "智慧城市", "change_pct": -0.39}, {"name": "粤港澳大湾区", "change_pct": -0.43}, {"name": "LED", "change_pct": -0.45}, {"name": "新能源汽车", "change_pct": -0.49}, {"name": "机器人", "change_pct": -0.7}, {"name": "数字经济", "change_pct": -0.32}, {"name": "国产芯片", "change_pct": 0.49}, {"name": "阿里巴巴概念股", "change_pct": 0.3}, {"name": "腾讯概念股", "change_pct": -0.09}, {"name": "信创", "change_pct": -0.06}, {"name": "NFT", "change_pct": -0.97}, {"name": "东数西算/算力", "change_pct": 0.93}, {"name": "数字乡村", "change_pct": -0.52}, {"name": "教育信息化", "change_pct": -0.22}, {"name": "数字人民币", "change_pct": -0.29}, {"name": "智慧政务", "change_pct": -0.19}, {"name": "医疗信息化", "change_pct": 0.24}, {"name": "华为鸿蒙", "change_pct": -0.62}, {"name": "华为云·鲲鹏", "change_pct": -0.16}, {"name": "智慧灯杆", "change_pct": -0.8}, {"name": "华为产业链", "change_pct": -0.23}]}, {"code": "603893", "name": "瑞芯微", "hot_rank": 70, "hot_rank_chg": 47, "stock_cnt": 5802, "price": "223.67", "change": "7.51", "market_id": "17", "circulate_market_value": "94588578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 71, "hot_rank_chg": 60, "stock_cnt": 5802, "price": "12.26", "change": "-2.46", "market_id": "33", "circulate_market_value": "42708984000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.63}, {"name": "人工智能", "change_pct": -0.34}, {"name": "VR&AR", "change_pct": -0.52}, {"name": "直播/短视频", "change_pct": -0.92}, {"name": "大数据", "change_pct": -0.18}, {"name": "教育", "change_pct": 0.27}, {"name": "百度概念股", "change_pct": -0.72}, {"name": "阿里巴巴概念股", "change_pct": 0.3}, {"name": "腾讯概念股", "change_pct": -0.09}, {"name": "传媒", "change_pct": -1.1}, {"name": "快手概念股", "change_pct": -0.73}, {"name": "NFT", "change_pct": -0.97}, {"name": "元宇宙", "change_pct": -0.86}, {"name": "虚拟数字人", "change_pct": -1.16}, {"name": "web3.0", "change_pct": -0.37}, {"name": "AIGC概念", "change_pct": -0.67}, {"name": "字节跳动概念股", "change_pct": -0.55}, {"name": "职业教育", "change_pct": -0.2}, {"name": "云游戏", "change_pct": -1.29}, {"name": "网红/MCN", "change_pct": -0.92}, {"name": "5G消息/RCS", "change_pct": -0.45}, {"name": "AI营销", "change_pct": -1.31}, {"name": "词元概念/Token", "change_pct": 1.43}, {"name": "人工智能大模型", "change_pct": -0.3}, {"name": "Sora/AI视频", "change_pct": -1.11}, {"name": "智谱AI", "change_pct": 0.3}, {"name": "小红书概念股", "change_pct": -0.97}, {"name": "区块链", "change_pct": -0.72}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 72, "hot_rank_chg": 3, "stock_cnt": 5802, "price": "42.07", "change": "-2.16", "market_id": "17", "circulate_market_value": "167084670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 73, "hot_rank_chg": 9, "stock_cnt": 5802, "price": "24.30", "change": "3.85", "market_id": "17", "circulate_market_value": "4445280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 74, "hot_rank_chg": 12, "stock_cnt": 5802, "price": "76.59", "change": "3.54", "market_id": "33", "circulate_market_value": "50022529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 75, "hot_rank_chg": -18, "stock_cnt": 5802, "price": "168.10", "change": "0.06", "market_id": "33", "circulate_market_value": "70886800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300534", "name": "陇神戎发", "hot_rank": 76, "hot_rank_chg": -25, "stock_cnt": 5802, "price": "13.49", "change": "-2.25", "market_id": "33", "circulate_market_value": "4074674600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 77, "hot_rank_chg": 37, "stock_cnt": 5802, "price": "20.14", "change": "-0.69", "market_id": "33", "circulate_market_value": "269068910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000426", "name": "兴业银锡", "hot_rank": 78, "hot_rank_chg": 120, "stock_cnt": 5802, "price": "32.58", "change": "9.99", "market_id": "33", "circulate_market_value": "57836194000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "白银"}, {"code": "300017", "name": "网宿科技", "hot_rank": 79, "hot_rank_chg": 11, "stock_cnt": 5802, "price": "15.03", "change": "0.60", "market_id": "33", "circulate_market_value": "35238659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 80, "hot_rank_chg": -3, "stock_cnt": 5802, "price": "228.25", "change": "-1.16", "market_id": "33", "circulate_market_value": "248511640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 81, "hot_rank_chg": 0, "stock_cnt": 5802, "price": "129.88", "change": "2.71", "market_id": "17", "circulate_market_value": "321229640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 82, "hot_rank_chg": -9, "stock_cnt": 5802, "price": "27.26", "change": "-2.15", "market_id": "33", "circulate_market_value": "11741554800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 83, "hot_rank_chg": 44, "stock_cnt": 5802, "price": "15.76", "change": "5.07", "market_id": "33", "circulate_market_value": "50803040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 84, "hot_rank_chg": 11, "stock_cnt": 5802, "price": "51.76", "change": "10.62", "market_id": "33", "circulate_market_value": "1696395200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002575", "name": "群兴玩具", "hot_rank": 85, "hot_rank_chg": 1892, "stock_cnt": 5802, "price": "4.83", "change": "10.02", "market_id": "33", "circulate_market_value": "2822292200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "腾讯概念股", "change_pct": -0.09}, {"name": "物业管理", "change_pct": -0.5}, {"name": "东数西算/算力", "change_pct": 0.93}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 86, "hot_rank_chg": 54, "stock_cnt": 5802, "price": "37.88", "change": "-0.99", "market_id": "17", "circulate_market_value": "55409603000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 87, "hot_rank_chg": 91, "stock_cnt": 5802, "price": "7.02", "change": "3.54", "market_id": "33", "circulate_market_value": "4603056300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.63}, {"name": "新零售", "change_pct": -0.4}, {"name": "农业种植", "change_pct": -0.32}, {"name": "冷链", "change_pct": -0.62}, {"name": "大农业", "change_pct": 0.08}, {"name": "预制菜", "change_pct": -0.34}, {"name": "国企改革", "change_pct": -0.09}, {"name": "可降解塑料", "change_pct": -0.18}, {"name": "免税店概念", "change_pct": 0.12}, {"name": "湖北国企改革", "change_pct": -0.21}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 88, "hot_rank_chg": 36, "stock_cnt": 5802, "price": "71.55", "change": "-0.88", "market_id": "33", "circulate_market_value": "51969631000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 89, "hot_rank_chg": -48, "stock_cnt": 5802, "price": "79.66", "change": "-2.77", "market_id": "17", "circulate_market_value": "33167851000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688347", "name": "华虹宏力", "hot_rank": 90, "hot_rank_chg": -66, "stock_cnt": 5802, "price": "390.49", "change": "-1.83", "market_id": "17", "circulate_market_value": "159222300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600821", "name": "金开新能", "hot_rank": 91, "hot_rank_chg": 3, "stock_cnt": 5802, "price": "7.00", "change": "3.86", "market_id": "17", "circulate_market_value": "13751601000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.16}, {"name": "天津国企改革", "change_pct": 0.19}, {"name": "京津冀", "change_pct": 0.14}, {"name": "光伏", "change_pct": 0.75}, {"name": "风电", "change_pct": -0.15}, {"name": "储能", "change_pct": 0.05}, {"name": "东数西算/算力", "change_pct": 0.93}, {"name": "国企改革", "change_pct": -0.09}, {"name": "算电协同", "change_pct": 0.43}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 92, "hot_rank_chg": 50, "stock_cnt": 5802, "price": "39.98", "change": "9.87", "market_id": "17", "circulate_market_value": "5224314500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 93, "hot_rank_chg": -54, "stock_cnt": 5802, "price": "156.32", "change": "-2.30", "market_id": "17", "circulate_market_value": "312571620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 94, "hot_rank_chg": 12, "stock_cnt": 5802, "price": "29.30", "change": "-1.91", "market_id": "33", "circulate_market_value": "55686466000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 95, "hot_rank_chg": 80, "stock_cnt": 5802, "price": "14.76", "change": "2.93", "market_id": "33", "circulate_market_value": "22520532000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603407", "name": "长裕集团", "hot_rank": 96, "hot_rank_chg": 109, "stock_cnt": 5802, "price": "64.34", "change": "10.00", "market_id": "17", "circulate_market_value": "2310577600.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "氧化锆涨价"}, {"code": "300139", "name": "晓程科技", "hot_rank": 97, "hot_rank_chg": 252, "stock_cnt": 5802, "price": "40.45", "change": "11.00", "market_id": "33", "circulate_market_value": "9451515700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 98, "hot_rank_chg": 32, "stock_cnt": 5802, "price": "29.31", "change": "-1.64", "market_id": "33", "circulate_market_value": "41162757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 99, "hot_rank_chg": -33, "stock_cnt": 5802, "price": "267.70", "change": "-1.21", "market_id": "17", "circulate_market_value": "126238394000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 100, "hot_rank_chg": 82, "stock_cnt": 5802, "price": "11.60", "change": "0.96", "market_id": "17", "circulate_market_value": "14804567000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.56}, {"name": "强势人气股", "change_pct": 0.57}, {"name": "智能制造", "change_pct": -0.74}, {"name": "工业互联网", "change_pct": -0.49}, {"name": "培育钻石", "change_pct": -0.36}, {"name": "金刚线", "change_pct": 1.72}, {"name": "国资入股", "change_pct": -0.25}, {"name": "深地经济", "change_pct": 0.54}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第二次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "ST/风险警示股", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告"};