const UPDATE_TIME = "2026-09-17 05:40";
const THS_HOT = [
  {
    "name": "CRO概念",
    "rise": 2.0,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "PCB概念",
    "rise": -0.87,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续117天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "创新药",
    "rise": 0.8,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续124天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.26,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续294天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "粮食概念",
    "rise": 3.18,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "转基因",
    "rise": 4.34,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "农牧ETF",
    "code": "885877"
  },
  {
    "name": "玻璃基板",
    "rise": 0.5,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "工业母机ETF",
    "code": "886111"
  },
  {
    "name": "光纤概念",
    "rise": -0.28,
    "rate": 0,
    "tag": "",
    "hotTag": "连续123天上榜",
    "rankChg": 0,
    "etfName": "工业40LOF",
    "code": "886084"
  },
  {
    "name": "MLCC概念",
    "rise": -1.36,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续34天上榜",
    "rankChg": 1,
    "etfName": "科创配置LOF",
    "code": "886112"
  },
  {
    "name": "兵装重组概念",
    "rise": 0.6,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "存储芯片",
    "rise": -0.46,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续247天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "886042"
  },
  {
    "name": "玉米",
    "rise": 3.93,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  },
  {
    "name": "培育钻石",
    "rise": -0.21,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "光刻胶",
    "rise": -0.28,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "液冷服务器",
    "rise": 0.22,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "农业种植",
    "rise": 2.06,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "人形机器人",
    "rise": 0.48,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "AI应用",
    "rise": 0.24,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续52天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "先进封装",
    "rise": -0.14,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "算力租赁",
    "rise": 0.02,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续158天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  }
];
const THS_EVENTS = [
  {
    "title": "超强厄尔尼诺威力大 多重因素牵动“粮食概念股”",
    "desc": "",
    "heat": 288020,
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
        "name": "金丹科技",
        "code": "300829",
        "chg": 14.915623
      }
    ]
  },
  {
    "title": "CRO概念持续走强，行业进入复苏阶段",
    "desc": "",
    "heat": 205124,
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
        "name": "金石亚药",
        "code": "300434",
        "chg": 19.980788
      }
    ]
  },
  {
    "title": "芒果首部AI纪录片《台湾岛纪》9月17日播出",
    "desc": "",
    "heat": 124598,
    "direction": "AI视频",
    "themes": [
      "AI漫剧",
      "AI视频"
    ],
    "stocks": [
      {
        "name": "芒果超媒",
        "code": "300413",
        "chg": 7.46181
      }
    ]
  },
  {
    "title": "高盛大幅上调高速光模块需求预测",
    "desc": "",
    "heat": 77944,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)",
      "F5G概念"
    ],
    "stocks": [
      {
        "name": "均胜电子",
        "code": "600699",
        "chg": 10.022148
      }
    ]
  },
  {
    "title": "英特尔CEO：CPU需求极其旺盛 英特尔仅能满足50%客户需求",
    "desc": "",
    "heat": 70650,
    "direction": "芯片半导体",
    "themes": [
      "芯片概念",
      "半导体",
      "EDA"
    ],
    "stocks": [
      {
        "name": "腾信精密",
        "code": "920298",
        "chg": 11.664075
      }
    ]
  },
  {
    "title": "文化和旅游发展“十五五”规划发布",
    "desc": "",
    "heat": 55248,
    "direction": "旅游及酒店",
    "themes": [
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "大连圣亚",
        "code": "600593",
        "chg": 10.00762
      }
    ]
  },
  {
    "title": "AI 持续“耗电”，集邦咨询预计今年全球数据中心用电需求同比增长 31%",
    "desc": "",
    "heat": 40125,
    "direction": "电力电网",
    "themes": [
      "电力",
      "电网设备",
      "柔性直流输电",
      "特高压",
      "智能电网"
    ],
    "stocks": [
      {
        "name": "经纬股份",
        "code": "301390",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "华为预测：到2035年，全球年度Token消耗量将增长10万倍",
    "desc": "",
    "heat": 33615,
    "direction": "词元概念（Token）",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "共达电声",
        "code": "002655",
        "chg": 10.010793
      }
    ]
  },
  {
    "title": "“豆包手机”努比亚NaviX Ultra上市开售，售价5499元起",
    "desc": "",
    "heat": 11510,
    "direction": "豆包手机",
    "themes": [
      "豆包手机",
      "AI手机"
    ],
    "stocks": [
      {
        "name": "长盈精密",
        "code": "300115",
        "chg": 5.43572
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+7.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+4.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+4.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+4.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肿瘤疫苗",
    "change": "+2.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+2.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+2.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+2.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "棉花",
    "change": "+2.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+2.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人造肉",
    "change": "+2.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+2.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车整车",
    "change": "+2.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "进口博览会",
    "change": "+1.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "+1.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+1.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玩具",
    "change": "+1.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新能源整车",
    "change": "+1.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+1.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "烟草",
    "change": "+1.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 5,
    "hot_rank_chg": 55,
    "stock_cnt": 5788,
    "price": "9.77",
    "change": "2.30",
    "market_id": "33",
    "circulate_market_value": "4700731300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 1.16
      },
      {
        "name": "医疗器械",
        "change_pct": 0.54
      },
      {
        "name": "锂电池",
        "change_pct": -0.58
      },
      {
        "name": "基因测序",
        "change_pct": 1.31
      },
      {
        "name": "PCB板",
        "change_pct": -1.35
      },
      {
        "name": "医药",
        "change_pct": 0.92
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.1
      },
      {
        "name": "化学原料药",
        "change_pct": 0.97
      },
      {
        "name": "食品安全",
        "change_pct": 0.27
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.63
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 0.02
      },
      {
        "name": "异丙醇",
        "change_pct": 0.09
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.51
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -0.74
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 8,
    "hot_rank_chg": 0,
    "stock_cnt": 5788,
    "price": "8.54",
    "change": "-1.95",
    "market_id": "33",
    "circulate_market_value": "16354890000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.69
      },
      {
        "name": "林业",
        "change_pct": -1.21
      },
      {
        "name": "碳中和",
        "change_pct": -0.97
      },
      {
        "name": "自贸区",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 9,
    "hot_rank_chg": 25,
    "stock_cnt": 5788,
    "price": "5.76",
    "change": "5.69",
    "market_id": "33",
    "circulate_market_value": "203714690000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.37
      },
      {
        "name": "手机产业链",
        "change_pct": 0.18
      },
      {
        "name": "超高清视频",
        "change_pct": 0.61
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.55
      },
      {
        "name": "电竞",
        "change_pct": 0.58
      },
      {
        "name": "半导体",
        "change_pct": -0.12
      },
      {
        "name": "人工智能",
        "change_pct": 0.34
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.01
      },
      {
        "name": "VR&AR",
        "change_pct": 0.27
      },
      {
        "name": "OLED",
        "change_pct": 0.35
      },
      {
        "name": "京津冀",
        "change_pct": 0.08
      },
      {
        "name": "物联网",
        "change_pct": -0.0
      },
      {
        "name": "指纹识别",
        "change_pct": 1.18
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.43
      },
      {
        "name": "白马股",
        "change_pct": -0.27
      },
      {
        "name": "智能制造",
        "change_pct": 0.1
      },
      {
        "name": "小米概念股",
        "change_pct": 0.07
      },
      {
        "name": "国产芯片",
        "change_pct": -0.01
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.3
      },
      {
        "name": "全息概念",
        "change_pct": 0.15
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.19
      },
      {
        "name": "MicroLED",
        "change_pct": 0.42
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.12
      },
      {
        "name": "智能手表",
        "change_pct": 0.66
      },
      {
        "name": "MiniLED",
        "change_pct": 0.48
      },
      {
        "name": "传感器",
        "change_pct": 0.32
      },
      {
        "name": "大硅片",
        "change_pct": 0.0
      },
      {
        "name": "AI PC",
        "change_pct": 0.06
      },
      {
        "name": "华为产业链",
        "change_pct": -0.05
      },
      {
        "name": "回购",
        "change_pct": 0.11
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.58
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.37
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 11,
    "hot_rank_chg": 27,
    "stock_cnt": 5788,
    "price": "8.39",
    "change": "-4.55",
    "market_id": "33",
    "circulate_market_value": "3927539900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.62
      },
      {
        "name": "旅游",
        "change_pct": 1.09
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.36
      },
      {
        "name": "广西概念",
        "change_pct": -0.2
      },
      {
        "name": "低空经济",
        "change_pct": -0.34
      }
    ]
  },
  {
    "code": "002068",
    "name": "黑猫股份",
    "hot_rank": 19,
    "hot_rank_chg": 55,
    "stock_cnt": 5788,
    "price": "9.95",
    "change": "-1.87",
    "market_id": "33",
    "circulate_market_value": "7313307900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.58
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.1
      },
      {
        "name": "炭黑",
        "change_pct": -0.66
      },
      {
        "name": "固态电池",
        "change_pct": -0.7
      },
      {
        "name": "PVDF概念",
        "change_pct": -0.46
      },
      {
        "name": "碳基材料",
        "change_pct": -0.85
      },
      {
        "name": "超级电容",
        "change_pct": -1.05
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 21,
    "hot_rank_chg": 20,
    "stock_cnt": 5788,
    "price": "7.49",
    "change": "1.77",
    "market_id": "17",
    "circulate_market_value": "18863639000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.66
      },
      {
        "name": "工业大麻",
        "change_pct": -0.05
      },
      {
        "name": "中药",
        "change_pct": 0.67
      },
      {
        "name": "强势人气股",
        "change_pct": 0.62
      },
      {
        "name": "保健品",
        "change_pct": 0.7
      },
      {
        "name": "民营医院",
        "change_pct": 0.5
      },
      {
        "name": "医药",
        "change_pct": 0.94
      },
      {
        "name": "化学原料药",
        "change_pct": 0.99
      },
      {
        "name": "流感",
        "change_pct": 1.06
      },
      {
        "name": "振兴东北",
        "change_pct": 0.79
      },
      {
        "name": "食品",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 27,
    "hot_rank_chg": 34,
    "stock_cnt": 5788,
    "price": "6.89",
    "change": "-1.85",
    "market_id": "33",
    "circulate_market_value": "12936814300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.09
      },
      {
        "name": "光伏",
        "change_pct": -0.58
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.1
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.85
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.05
      },
      {
        "name": "碳化硅",
        "change_pct": 0.12
      },
      {
        "name": "地摊经济",
        "change_pct": 0.43
      },
      {
        "name": "人形机器人",
        "change_pct": 0.78
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": -0.59
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 31,
    "hot_rank_chg": -7,
    "stock_cnt": 5788,
    "price": "3.01",
    "change": "9.85",
    "market_id": "33",
    "circulate_market_value": "28635202000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "哪吒重整关联",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.09
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.27
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.42
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.1
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.85
      },
      {
        "name": "低价股",
        "change_pct": 0.42
      },
      {
        "name": "减速器",
        "change_pct": 1.41
      },
      {
        "name": "华为汽车",
        "change_pct": 1.1
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 33,
    "hot_rank_chg": -14,
    "stock_cnt": 5788,
    "price": "11.71",
    "change": "-3.78",
    "market_id": "33",
    "circulate_market_value": "10381989800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -1.64
      },
      {
        "name": "手机产业链",
        "change_pct": 0.2
      },
      {
        "name": "超高清视频",
        "change_pct": 0.6
      },
      {
        "name": "锂电池",
        "change_pct": -0.57
      },
      {
        "name": "强势人气股",
        "change_pct": 0.62
      },
      {
        "name": "OLED",
        "change_pct": 0.38
      },
      {
        "name": "包装印刷",
        "change_pct": -0.07
      },
      {
        "name": "光伏",
        "change_pct": -0.58
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.1
      },
      {
        "name": "小米概念股",
        "change_pct": 0.09
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.32
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.83
      },
      {
        "name": "华为产业链",
        "change_pct": -0.03
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.27
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 34,
    "hot_rank_chg": 52,
    "stock_cnt": 5788,
    "price": "7.01",
    "change": "0.29",
    "market_id": "33",
    "circulate_market_value": "8179612800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.05
      },
      {
        "name": "国产软件",
        "change_pct": -0.28
      },
      {
        "name": "一带一路",
        "change_pct": -0.03
      },
      {
        "name": "量子通信",
        "change_pct": -0.31
      },
      {
        "name": "人工智能",
        "change_pct": 0.35
      },
      {
        "name": "网络安全",
        "change_pct": -0.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.11
      },
      {
        "name": "物联网",
        "change_pct": 0.0
      },
      {
        "name": "大数据",
        "change_pct": -0.14
      },
      {
        "name": "破净股",
        "change_pct": -0.18
      },
      {
        "name": "数字经济",
        "change_pct": 0.04
      },
      {
        "name": "国产芯片",
        "change_pct": 0.02
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.18
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.36
      },
      {
        "name": "信创",
        "change_pct": -0.38
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.03
      },
      {
        "name": "跨境支付",
        "change_pct": -0.25
      },
      {
        "name": "web3.0",
        "change_pct": 0.23
      },
      {
        "name": "数字人民币",
        "change_pct": -0.16
      },
      {
        "name": "智慧政务",
        "change_pct": -0.13
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.02
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -0.25
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.93
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.07
      },
      {
        "name": "华为产业链",
        "change_pct": -0.03
      },
      {
        "name": "回购",
        "change_pct": 0.12
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.0
      },
      {
        "name": "智能电网",
        "change_pct": -0.34
      },
      {
        "name": "低空经济",
        "change_pct": -0.33
      },
      {
        "name": "量子计算",
        "change_pct": -0.46
      },
      {
        "name": "财税改革",
        "change_pct": -0.43
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "002137",
    "name": "实益达",
    "hot_rank": 37,
    "hot_rank_chg": 192,
    "stock_cnt": 5788,
    "price": "8.54",
    "change": "4.15",
    "market_id": "33",
    "circulate_market_value": "3385759500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.09
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.62
      },
      {
        "name": "光伏",
        "change_pct": -0.58
      },
      {
        "name": "LED",
        "change_pct": 0.39
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.04
      },
      {
        "name": "无线耳机",
        "change_pct": 0.53
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.95
      },
      {
        "name": "华为产业链",
        "change_pct": -0.03
      },
      {
        "name": "微信小店",
        "change_pct": 1.2
      },
      {
        "name": "区块链",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 44,
    "hot_rank_chg": -9,
    "stock_cnt": 5788,
    "price": "12.78",
    "change": "-0.78",
    "market_id": "17",
    "circulate_market_value": "22865187000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.75
      },
      {
        "name": "纯碱",
        "change_pct": 0.26
      },
      {
        "name": "食品",
        "change_pct": 0.7
      },
      {
        "name": "土壤修复",
        "change_pct": -0.35
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.05
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.2
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 47,
    "hot_rank_chg": 211,
    "stock_cnt": 5788,
    "price": "11.87",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "4564580400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "CRO",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 1.1
      },
      {
        "name": "股权转让",
        "change_pct": 0.08
      },
      {
        "name": "强势人气股",
        "change_pct": 0.62
      },
      {
        "name": "新疆概念",
        "change_pct": 0.06
      },
      {
        "name": "医药",
        "change_pct": 0.94
      },
      {
        "name": "流感",
        "change_pct": 1.06
      },
      {
        "name": "国资入股",
        "change_pct": 0.15
      },
      {
        "name": "减肥药",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 56,
    "hot_rank_chg": -8,
    "stock_cnt": 5788,
    "price": "3.58",
    "change": "-2.98",
    "market_id": "17",
    "circulate_market_value": "7920138000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 0.12
      },
      {
        "name": "强势人气股",
        "change_pct": 0.62
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.11
      },
      {
        "name": "光通信",
        "change_pct": 0.28
      },
      {
        "name": "林业",
        "change_pct": -1.2
      },
      {
        "name": "军民融合",
        "change_pct": -0.6
      },
      {
        "name": "军工",
        "change_pct": -0.64
      },
      {
        "name": "人造肉",
        "change_pct": 2.13
      }
    ]
  },
  {
    "code": "603230",
    "name": "内蒙新华",
    "hot_rank": 58,
    "hot_rank_chg": 357,
    "stock_cnt": 5788,
    "price": "12.25",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "4330656800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "出版发行",
    "xgb_concepts": [
      {
        "name": "教育",
        "change_pct": 1.32
      },
      {
        "name": "内蒙古概念",
        "change_pct": -0.63
      },
      {
        "name": "传媒",
        "change_pct": 1.63
      },
      {
        "name": "教育信息化",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 59,
    "hot_rank_chg": 97,
    "stock_cnt": 5788,
    "price": "9.23",
    "change": "1.21",
    "market_id": "17",
    "circulate_market_value": "33114192000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": 0.46
      },
      {
        "name": "OLED",
        "change_pct": 0.38
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.32
      },
      {
        "name": "国企改革",
        "change_pct": -0.09
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.15
      },
      {
        "name": "陕西国企改革",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "002531",
    "name": "天顺风能",
    "hot_rank": 63,
    "hot_rank_chg": 15,
    "stock_cnt": 5788,
    "price": "7.58",
    "change": "-3.07",
    "market_id": "33",
    "circulate_market_value": "13544464000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 1.67
      },
      {
        "name": "风电",
        "change_pct": -0.68
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 71,
    "hot_rank_chg": -22,
    "stock_cnt": 5788,
    "price": "11.93",
    "change": "-2.13",
    "market_id": "17",
    "circulate_market_value": "20700709000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 0.65
      },
      {
        "name": "核电",
        "change_pct": -0.57
      },
      {
        "name": "锂电池",
        "change_pct": -0.57
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -2.09
      },
      {
        "name": "PCB板",
        "change_pct": -1.32
      },
      {
        "name": "中科院系",
        "change_pct": -0.28
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.1
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -0.1
      },
      {
        "name": "固态电池",
        "change_pct": -0.7
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.27
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 85,
    "hot_rank_chg": -16,
    "stock_cnt": 5788,
    "price": "5.43",
    "change": "4.02",
    "market_id": "17",
    "circulate_market_value": "5261852000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": -0.68
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 87,
    "hot_rank_chg": -17,
    "stock_cnt": 5788,
    "price": "2.37",
    "change": "10.23",
    "market_id": "33",
    "circulate_market_value": "11950691400.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "5",
    "change_reason": "汽车整车",
    "xgb_concepts": [
      {
        "name": "新能源整车",
        "change_pct": 1.75
      },
      {
        "name": "汽车整车",
        "change_pct": 2.03
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.1
      },
      {
        "name": "低价股",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 88,
    "hot_rank_chg": -7,
    "stock_cnt": 5788,
    "price": "6.50",
    "change": "3.67",
    "market_id": "33",
    "circulate_market_value": "4262089200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.66
      },
      {
        "name": "新零售",
        "change_pct": 0.55
      },
      {
        "name": "农业种植",
        "change_pct": 4.09
      },
      {
        "name": "冷链",
        "change_pct": 0.43
      },
      {
        "name": "大农业",
        "change_pct": 0.9
      },
      {
        "name": "预制菜",
        "change_pct": 0.69
      },
      {
        "name": "国企改革",
        "change_pct": -0.09
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.83
      },
      {
        "name": "免税店概念",
        "change_pct": 0.05
      },
      {
        "name": "湖北国企改革",
        "change_pct": 0.73
      }
    ]
  },
  {
    "code": "603601",
    "name": "再升科技",
    "hot_rank": 93,
    "hot_rank_chg": 76,
    "stock_cnt": 5788,
    "price": "9.96",
    "change": "-3.21",
    "market_id": "17",
    "circulate_market_value": "11377716100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -0.78
      },
      {
        "name": "核电",
        "change_pct": -0.57
      },
      {
        "name": "大飞机",
        "change_pct": -0.4
      },
      {
        "name": "大气治理",
        "change_pct": 0.04
      },
      {
        "name": "玻纤",
        "change_pct": 0.72
      },
      {
        "name": "环保",
        "change_pct": -0.22
      },
      {
        "name": "核污染防治",
        "change_pct": -0.05
      },
      {
        "name": "航天",
        "change_pct": -0.68
      },
      {
        "name": "生物安全",
        "change_pct": 0.61
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "002285",
    "name": "世联行",
    "hot_rank": 96,
    "hot_rank_chg": 428,
    "stock_cnt": 5788,
    "price": "2.63",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "5204794700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "房地产服务",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 0.84
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.05
      },
      {
        "name": "共享经济",
        "change_pct": 0.49
      },
      {
        "name": "养老产业",
        "change_pct": 0.24
      },
      {
        "name": "住房租赁",
        "change_pct": 0.78
      },
      {
        "name": "房产经纪",
        "change_pct": 4.04
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.05
      },
      {
        "name": "物业管理",
        "change_pct": 1.05
      },
      {
        "name": "低价股",
        "change_pct": 0.42
      },
      {
        "name": "旧改",
        "change_pct": 0.49
      },
      {
        "name": "横琴新区",
        "change_pct": 1.33
      },
      {
        "name": "氮化镓",
        "change_pct": -0.15
      },
      {
        "name": "REITs",
        "change_pct": -0.06
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600176", "name": "中国巨石", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5788, "price": "48.34", "change": "2.00", "market_id": "17", "circulate_market_value": "191986520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5788, "price": "17.99", "change": "-2.65", "market_id": "33", "circulate_market_value": "8238546700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 3, "hot_rank_chg": 4, "stock_cnt": 5788, "price": "50.78", "change": "-1.65", "market_id": "17", "circulate_market_value": "42987978000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 4, "hot_rank_chg": 5, "stock_cnt": 5788, "price": "45.77", "change": "1.22", "market_id": "17", "circulate_market_value": "66915502000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 5, "hot_rank_chg": 55, "stock_cnt": 5788, "price": "9.77", "change": "2.30", "market_id": "33", "circulate_market_value": "4700731300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 1.16}, {"name": "医疗器械", "change_pct": 0.54}, {"name": "锂电池", "change_pct": -0.58}, {"name": "基因测序", "change_pct": 1.31}, {"name": "PCB板", "change_pct": -1.35}, {"name": "医药", "change_pct": 0.92}, {"name": "新能源汽车", "change_pct": 0.1}, {"name": "化学原料药", "change_pct": 0.97}, {"name": "食品安全", "change_pct": 0.27}, {"name": "辅助生殖", "change_pct": 0.63}, {"name": "光刻机（胶）", "change_pct": 0.02}, {"name": "异丙醇", "change_pct": 0.09}, {"name": "新冠病毒防治", "change_pct": 0.51}, {"name": "磷酸铁锂", "change_pct": -0.74}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 6, "hot_rank_chg": -5, "stock_cnt": 5788, "price": "23.77", "change": "-2.78", "market_id": "33", "circulate_market_value": "27964663000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5788, "price": "20.45", "change": "1.09", "market_id": "17", "circulate_market_value": "42772038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5788, "price": "8.54", "change": "-1.95", "market_id": "33", "circulate_market_value": "16354890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.69}, {"name": "林业", "change_pct": -1.21}, {"name": "碳中和", "change_pct": -0.97}, {"name": "自贸区", "change_pct": 0.16}]}, {"code": "000725", "name": "京东方A", "hot_rank": 9, "hot_rank_chg": 25, "stock_cnt": 5788, "price": "5.76", "change": "5.69", "market_id": "33", "circulate_market_value": "203714690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.37}, {"name": "手机产业链", "change_pct": 0.18}, {"name": "超高清视频", "change_pct": 0.61}, {"name": "苹果产业链", "change_pct": 0.55}, {"name": "电竞", "change_pct": 0.58}, {"name": "半导体", "change_pct": -0.12}, {"name": "人工智能", "change_pct": 0.34}, {"name": "互联网医疗", "change_pct": -0.01}, {"name": "VR&AR", "change_pct": 0.27}, {"name": "OLED", "change_pct": 0.35}, {"name": "京津冀", "change_pct": 0.08}, {"name": "物联网", "change_pct": -0.0}, {"name": "指纹识别", "change_pct": 1.18}, {"name": "汽车零部件", "change_pct": 1.43}, {"name": "白马股", "change_pct": -0.27}, {"name": "智能制造", "change_pct": 0.1}, {"name": "小米概念股", "change_pct": 0.07}, {"name": "国产芯片", "change_pct": -0.01}, {"name": "液晶面板/LCD", "change_pct": 0.3}, {"name": "全息概念", "change_pct": 0.15}, {"name": "理想汽车概念股", "change_pct": 1.19}, {"name": "MicroLED", "change_pct": 0.42}, {"name": "钙钛矿电池", "change_pct": -0.12}, {"name": "智能手表", "change_pct": 0.66}, {"name": "MiniLED", "change_pct": 0.48}, {"name": "传感器", "change_pct": 0.32}, {"name": "大硅片", "change_pct": 0.0}, {"name": "AI PC", "change_pct": 0.06}, {"name": "华为产业链", "change_pct": -0.05}, {"name": "回购", "change_pct": 0.11}, {"name": "光电共封装CPO", "change_pct": 0.58}, {"name": "智能眼镜/MR头显", "change_pct": 0.37}, {"name": "玻璃基板封装", "change_pct": 0.14}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 10, "hot_rank_chg": 4, "stock_cnt": 5788, "price": "15.48", "change": "6.25", "market_id": "17", "circulate_market_value": "10309680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 11, "hot_rank_chg": 27, "stock_cnt": 5788, "price": "8.39", "change": "-4.55", "market_id": "33", "circulate_market_value": "3927539900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.62}, {"name": "旅游", "change_pct": 1.09}, {"name": "腾讯概念股", "change_pct": 0.36}, {"name": "广西概念", "change_pct": -0.2}, {"name": "低空经济", "change_pct": -0.34}]}, {"code": "002080", "name": "中材科技", "hot_rank": 12, "hot_rank_chg": 97, "stock_cnt": 5788, "price": "59.14", "change": "5.83", "market_id": "33", "circulate_market_value": "99244229000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 13, "hot_rank_chg": -9, "stock_cnt": 5788, "price": "68.50", "change": "4.74", "market_id": "17", "circulate_market_value": "168074770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 14, "hot_rank_chg": -9, "stock_cnt": 5788, "price": "21.78", "change": "-0.37", "market_id": "17", "circulate_market_value": "48337503000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 15, "hot_rank_chg": 51, "stock_cnt": 5788, "price": "113.92", "change": "3.96", "market_id": "17", "circulate_market_value": "41093610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003026", "name": "中晶科技", "hot_rank": 16, "hot_rank_chg": 55, "stock_cnt": 5788, "price": "37.00", "change": "9.99", "market_id": "33", "circulate_market_value": "5333952600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半导体硅片"}, {"code": "605058", "name": "澳弘电子", "hot_rank": 17, "hot_rank_chg": 39, "stock_cnt": 5788, "price": "48.76", "change": "9.99", "market_id": "17", "circulate_market_value": "6969028900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "PCB"}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 18, "hot_rank_chg": 1128, "stock_cnt": 5788, "price": "13.19", "change": "200.46", "market_id": "17", "circulate_market_value": "2785242400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002068", "name": "黑猫股份", "hot_rank": 19, "hot_rank_chg": 55, "stock_cnt": 5788, "price": "9.95", "change": "-1.87", "market_id": "33", "circulate_market_value": "7313307900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.58}, {"name": "新能源汽车", "change_pct": 0.1}, {"name": "炭黑", "change_pct": -0.66}, {"name": "固态电池", "change_pct": -0.7}, {"name": "PVDF概念", "change_pct": -0.46}, {"name": "碳基材料", "change_pct": -0.85}, {"name": "超级电容", "change_pct": -1.05}]}, {"code": "600127", "name": "金健米业", "hot_rank": 20, "hot_rank_chg": -5, "stock_cnt": 5788, "price": "13.02", "change": "9.97", "market_id": "17", "circulate_market_value": "8356017500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮油食品"}, {"code": "600664", "name": "哈药股份", "hot_rank": 21, "hot_rank_chg": 20, "stock_cnt": 5788, "price": "7.49", "change": "1.77", "market_id": "17", "circulate_market_value": "18863639000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "工业大麻", "change_pct": -0.05}, {"name": "中药", "change_pct": 0.67}, {"name": "强势人气股", "change_pct": 0.62}, {"name": "保健品", "change_pct": 0.7}, {"name": "民营医院", "change_pct": 0.5}, {"name": "医药", "change_pct": 0.94}, {"name": "化学原料药", "change_pct": 0.99}, {"name": "流感", "change_pct": 1.06}, {"name": "振兴东北", "change_pct": 0.79}, {"name": "食品", "change_pct": 0.7}]}, {"code": "000636", "name": "风华高科", "hot_rank": 22, "hot_rank_chg": -12, "stock_cnt": 5788, "price": "57.29", "change": "-2.20", "market_id": "33", "circulate_market_value": "65739700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 23, "hot_rank_chg": -1, "stock_cnt": 5788, "price": "192.00", "change": "3.67", "market_id": "33", "circulate_market_value": "150917710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 24, "hot_rank_chg": -12, "stock_cnt": 5788, "price": "24.17", "change": "-3.78", "market_id": "33", "circulate_market_value": "14379510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 25, "hot_rank_chg": 57, "stock_cnt": 5788, "price": "14.61", "change": "7.11", "market_id": "17", "circulate_market_value": "6493333300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 26, "hot_rank_chg": 0, "stock_cnt": 5788, "price": "39.48", "change": "-1.96", "market_id": "17", "circulate_market_value": "27295509000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 27, "hot_rank_chg": 34, "stock_cnt": 5788, "price": "6.89", "change": "-1.85", "market_id": "33", "circulate_market_value": "12936814300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.09}, {"name": "光伏", "change_pct": -0.58}, {"name": "新能源汽车", "change_pct": 0.1}, {"name": "新能源车零部件", "change_pct": 0.85}, {"name": "第三代半导体", "change_pct": -0.05}, {"name": "碳化硅", "change_pct": 0.12}, {"name": "地摊经济", "change_pct": 0.43}, {"name": "人形机器人", "change_pct": 0.78}, {"name": "铜缆高速连接器", "change_pct": -0.59}]}, {"code": "301526", "name": "国际复材", "hot_rank": 28, "hot_rank_chg": 44, "stock_cnt": 5788, "price": "32.98", "change": "2.90", "market_id": "33", "circulate_market_value": "46316879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 29, "hot_rank_chg": 4, "stock_cnt": 5788, "price": "38.82", "change": "-0.03", "market_id": "33", "circulate_market_value": "29402854000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 30, "hot_rank_chg": 78, "stock_cnt": 5788, "price": "19.88", "change": "10.02", "market_id": "33", "circulate_market_value": "4907103600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "氧化锆粉体"}, {"code": "000981", "name": "山子高科", "hot_rank": 31, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "3.01", "change": "9.85", "market_id": "33", "circulate_market_value": "28635202000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "哪吒重整关联", "xgb_concepts": [{"name": "半导体", "change_pct": -0.09}, {"name": "无人驾驶", "change_pct": 0.27}, {"name": "汽车零部件", "change_pct": 1.42}, {"name": "新能源汽车", "change_pct": 0.1}, {"name": "新能源车零部件", "change_pct": 0.85}, {"name": "低价股", "change_pct": 0.42}, {"name": "减速器", "change_pct": 1.41}, {"name": "华为汽车", "change_pct": 1.1}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 32, "hot_rank_chg": -1, "stock_cnt": 5788, "price": "93.30", "change": "-1.36", "market_id": "33", "circulate_market_value": "60925600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 33, "hot_rank_chg": -14, "stock_cnt": 5788, "price": "11.71", "change": "-3.78", "market_id": "33", "circulate_market_value": "10381989800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -1.64}, {"name": "手机产业链", "change_pct": 0.2}, {"name": "超高清视频", "change_pct": 0.6}, {"name": "锂电池", "change_pct": -0.57}, {"name": "强势人气股", "change_pct": 0.62}, {"name": "OLED", "change_pct": 0.38}, {"name": "包装印刷", "change_pct": -0.07}, {"name": "光伏", "change_pct": -0.58}, {"name": "新能源汽车", "change_pct": 0.1}, {"name": "小米概念股", "change_pct": 0.09}, {"name": "液晶面板/LCD", "change_pct": 0.32}, {"name": "可降解塑料", "change_pct": 0.83}, {"name": "华为产业链", "change_pct": -0.03}, {"name": "PET复合铜箔", "change_pct": -1.27}]}, {"code": "002212", "name": "天融信", "hot_rank": 34, "hot_rank_chg": 52, "stock_cnt": 5788, "price": "7.01", "change": "0.29", "market_id": "33", "circulate_market_value": "8179612800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.05}, {"name": "国产软件", "change_pct": -0.28}, {"name": "一带一路", "change_pct": -0.03}, {"name": "量子通信", "change_pct": -0.31}, {"name": "人工智能", "change_pct": 0.35}, {"name": "网络安全", "change_pct": -0.49}, {"name": "云计算数据中心", "change_pct": -0.11}, {"name": "物联网", "change_pct": 0.0}, {"name": "大数据", "change_pct": -0.14}, {"name": "破净股", "change_pct": -0.18}, {"name": "数字经济", "change_pct": 0.04}, {"name": "国产芯片", "change_pct": 0.02}, {"name": "阿里巴巴概念股", "change_pct": 0.18}, {"name": "腾讯概念股", "change_pct": 0.36}, {"name": "信创", "change_pct": -0.38}, {"name": "华为昇腾", "change_pct": 0.03}, {"name": "跨境支付", "change_pct": -0.25}, {"name": "web3.0", "change_pct": 0.23}, {"name": "数字人民币", "change_pct": -0.16}, {"name": "智慧政务", "change_pct": -0.13}, {"name": "华为鸿蒙", "change_pct": -0.02}, {"name": "华为云·鲲鹏", "change_pct": -0.25}, {"name": "卫星互联网", "change_pct": -0.93}, {"name": "智慧灯杆", "change_pct": 0.07}, {"name": "华为产业链", "change_pct": -0.03}, {"name": "回购", "change_pct": 0.12}, {"name": "AI大模型/智能体", "change_pct": 0.0}, {"name": "智能电网", "change_pct": -0.34}, {"name": "低空经济", "change_pct": -0.33}, {"name": "量子计算", "change_pct": -0.46}, {"name": "财税改革", "change_pct": -0.43}, {"name": "DeepSeek概念股", "change_pct": -0.22}]}, {"code": "688432", "name": "有研硅", "hot_rank": 35, "hot_rank_chg": 16, "stock_cnt": 5788, "price": "54.66", "change": "1.11", "market_id": "17", "circulate_market_value": "68341500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 36, "hot_rank_chg": -18, "stock_cnt": 5788, "price": "36.13", "change": "2.67", "market_id": "17", "circulate_market_value": "123309871000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002137", "name": "实益达", "hot_rank": 37, "hot_rank_chg": 192, "stock_cnt": 5788, "price": "8.54", "change": "4.15", "market_id": "33", "circulate_market_value": "3385759500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.09}, {"name": "直播/短视频", "change_pct": 1.62}, {"name": "光伏", "change_pct": -0.58}, {"name": "LED", "change_pct": 0.39}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.04}, {"name": "无线耳机", "change_pct": 0.53}, {"name": "网红/MCN", "change_pct": 0.95}, {"name": "华为产业链", "change_pct": -0.03}, {"name": "微信小店", "change_pct": 1.2}, {"name": "区块链", "change_pct": -0.18}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 38, "hot_rank_chg": -6, "stock_cnt": 5788, "price": "16.18", "change": "-2.82", "market_id": "17", "circulate_market_value": "20779628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 39, "hot_rank_chg": -22, "stock_cnt": 5788, "price": "20.40", "change": "3.82", "market_id": "33", "circulate_market_value": "11902140400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 40, "hot_rank_chg": -29, "stock_cnt": 5788, "price": "52.87", "change": "-2.67", "market_id": "17", "circulate_market_value": "53398270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 41, "hot_rank_chg": -11, "stock_cnt": 5788, "price": "80.70", "change": "-2.09", "market_id": "33", "circulate_market_value": "58526591000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 42, "hot_rank_chg": 79, "stock_cnt": 5788, "price": "17.41", "change": "1.69", "market_id": "17", "circulate_market_value": "11379198700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 43, "hot_rank_chg": -23, "stock_cnt": 5788, "price": "907.02", "change": "-0.09", "market_id": "33", "circulate_market_value": "1006735060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 44, "hot_rank_chg": -9, "stock_cnt": 5788, "price": "12.78", "change": "-0.78", "market_id": "17", "circulate_market_value": "22865187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.75}, {"name": "纯碱", "change_pct": 0.26}, {"name": "食品", "change_pct": 0.7}, {"name": "土壤修复", "change_pct": -0.35}, {"name": "东数西算/算力", "change_pct": -0.05}, {"name": "OpenClaw概念", "change_pct": -0.2}, {"name": "DeepSeek概念股", "change_pct": -0.22}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 45, "hot_rank_chg": -17, "stock_cnt": 5788, "price": "504.30", "change": "6.33", "market_id": "17", "circulate_market_value": "15173237000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 46, "hot_rank_chg": 49, "stock_cnt": 5788, "price": "145.27", "change": "1.39", "market_id": "17", "circulate_market_value": "131409273000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 47, "hot_rank_chg": 211, "stock_cnt": 5788, "price": "11.87", "change": "10.01", "market_id": "17", "circulate_market_value": "4564580400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CRO", "xgb_concepts": [{"name": "创新药", "change_pct": 1.1}, {"name": "股权转让", "change_pct": 0.08}, {"name": "强势人气股", "change_pct": 0.62}, {"name": "新疆概念", "change_pct": 0.06}, {"name": "医药", "change_pct": 0.94}, {"name": "流感", "change_pct": 1.06}, {"name": "国资入股", "change_pct": 0.15}, {"name": "减肥药", "change_pct": 1.18}]}, {"code": "600371", "name": "万向德农", "hot_rank": 48, "hot_rank_chg": 37, "stock_cnt": 5788, "price": "15.64", "change": "9.99", "market_id": "17", "circulate_market_value": "4575919900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "玉米种业"}, {"code": "002815", "name": "崇达技术", "hot_rank": 49, "hot_rank_chg": -10, "stock_cnt": 5788, "price": "23.89", "change": "2.18", "market_id": "33", "circulate_market_value": "18565828000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 50, "hot_rank_chg": -23, "stock_cnt": 5788, "price": "16.47", "change": "-2.25", "market_id": "33", "circulate_market_value": "54779657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 51, "hot_rank_chg": 7, "stock_cnt": 5788, "price": "32.07", "change": "2.33", "market_id": "17", "circulate_market_value": "53366784000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 52, "hot_rank_chg": 25, "stock_cnt": 5788, "price": "19.50", "change": "0.62", "market_id": "17", "circulate_market_value": "22114531000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 53, "hot_rank_chg": -37, "stock_cnt": 5788, "price": "194.90", "change": "1.51", "market_id": "33", "circulate_market_value": "270194100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 54, "hot_rank_chg": 44, "stock_cnt": 5788, "price": "73.25", "change": "5.68", "market_id": "17", "circulate_market_value": "45125147000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 55, "hot_rank_chg": -42, "stock_cnt": 5788, "price": "305.68", "change": "0.07", "market_id": "33", "circulate_market_value": "1302380800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 56, "hot_rank_chg": -8, "stock_cnt": 5788, "price": "3.58", "change": "-2.98", "market_id": "17", "circulate_market_value": "7920138000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 0.12}, {"name": "强势人气股", "change_pct": 0.62}, {"name": "云计算数据中心", "change_pct": -0.11}, {"name": "光通信", "change_pct": 0.28}, {"name": "林业", "change_pct": -1.2}, {"name": "军民融合", "change_pct": -0.6}, {"name": "军工", "change_pct": -0.64}, {"name": "人造肉", "change_pct": 2.13}]}, {"code": "600183", "name": "生益科技", "hot_rank": 57, "hot_rank_chg": -34, "stock_cnt": 5788, "price": "148.50", "change": "-3.87", "market_id": "17", "circulate_market_value": "358144710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 58, "hot_rank_chg": 357, "stock_cnt": 5788, "price": "12.25", "change": "9.96", "market_id": "17", "circulate_market_value": "4330656800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "出版发行", "xgb_concepts": [{"name": "教育", "change_pct": 1.32}, {"name": "内蒙古概念", "change_pct": -0.63}, {"name": "传媒", "change_pct": 1.63}, {"name": "教育信息化", "change_pct": 0.93}]}, {"code": "600707", "name": "彩虹股份", "hot_rank": 59, "hot_rank_chg": 97, "stock_cnt": 5788, "price": "9.23", "change": "1.21", "market_id": "17", "circulate_market_value": "33114192000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": 0.46}, {"name": "OLED", "change_pct": 0.38}, {"name": "液晶面板/LCD", "change_pct": 0.32}, {"name": "国企改革", "change_pct": -0.09}, {"name": "玻璃基板封装", "change_pct": 0.15}, {"name": "陕西国企改革", "change_pct": -0.36}]}, {"code": "600584", "name": "长电科技", "hot_rank": 60, "hot_rank_chg": -35, "stock_cnt": 5788, "price": "68.11", "change": "-2.07", "market_id": "17", "circulate_market_value": "121877026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 61, "hot_rank_chg": -24, "stock_cnt": 5788, "price": "43.81", "change": "3.62", "market_id": "17", "circulate_market_value": "55709736000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 62, "hot_rank_chg": -12, "stock_cnt": 5788, "price": "38.03", "change": "-2.89", "market_id": "33", "circulate_market_value": "23993898000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002531", "name": "天顺风能", "hot_rank": 63, "hot_rank_chg": 15, "stock_cnt": 5788, "price": "7.58", "change": "-3.07", "market_id": "33", "circulate_market_value": "13544464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 1.67}, {"name": "风电", "change_pct": -0.68}]}, {"code": "000021", "name": "深科技", "hot_rank": 64, "hot_rank_chg": -18, "stock_cnt": 5788, "price": "35.80", "change": "-1.10", "market_id": "33", "circulate_market_value": "56728206000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 65, "hot_rank_chg": -6, "stock_cnt": 5788, "price": "45.40", "change": "1.18", "market_id": "17", "circulate_market_value": "35057852000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 66, "hot_rank_chg": 7, "stock_cnt": 5788, "price": "13.15", "change": "-2.95", "market_id": "17", "circulate_market_value": "19366095000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 67, "hot_rank_chg": 8, "stock_cnt": 5788, "price": "16.20", "change": "2.60", "market_id": "17", "circulate_market_value": "17763214000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300489", "name": "光智科技", "hot_rank": 68, "hot_rank_chg": 332, "stock_cnt": 5788, "price": "225.78", "change": "7.28", "market_id": "33", "circulate_market_value": "31117548000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 69, "hot_rank_chg": -25, "stock_cnt": 5788, "price": "469.58", "change": "1.86", "market_id": "17", "circulate_market_value": "190808350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 70, "hot_rank_chg": 307, "stock_cnt": 5788, "price": "18.29", "change": "7.46", "market_id": "33", "circulate_market_value": "18686892000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 71, "hot_rank_chg": -22, "stock_cnt": 5788, "price": "11.93", "change": "-2.13", "market_id": "17", "circulate_market_value": "20700709000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 0.65}, {"name": "核电", "change_pct": -0.57}, {"name": "锂电池", "change_pct": -0.57}, {"name": "铜箔/覆铜板", "change_pct": -2.09}, {"name": "PCB板", "change_pct": -1.32}, {"name": "中科院系", "change_pct": -0.28}, {"name": "新能源汽车", "change_pct": 0.1}, {"name": "宁德时代概念股", "change_pct": -0.1}, {"name": "固态电池", "change_pct": -0.7}, {"name": "PET复合铜箔", "change_pct": -1.27}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 73, "hot_rank_chg": -9, "stock_cnt": 5788, "price": "279.43", "change": "4.08", "market_id": "33", "circulate_market_value": "304128270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 74, "hot_rank_chg": -32, "stock_cnt": 5788, "price": "370.11", "change": "-0.81", "market_id": "17", "circulate_market_value": "248239560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 75, "hot_rank_chg": -23, "stock_cnt": 5788, "price": "41.33", "change": "-3.44", "market_id": "33", "circulate_market_value": "62735987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 76, "hot_rank_chg": -47, "stock_cnt": 5788, "price": "428.66", "change": "1.17", "market_id": "33", "circulate_market_value": "537849880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 77, "hot_rank_chg": -22, "stock_cnt": 5788, "price": "60.78", "change": "-2.03", "market_id": "33", "circulate_market_value": "88340813000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 78, "hot_rank_chg": -25, "stock_cnt": 5788, "price": "33.09", "change": "-2.62", "market_id": "33", "circulate_market_value": "94639805000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 79, "hot_rank_chg": -32, "stock_cnt": 5788, "price": "222.30", "change": "-0.59", "market_id": "17", "circulate_market_value": "61263295000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 80, "hot_rank_chg": -37, "stock_cnt": 5788, "price": "53.82", "change": "-2.32", "market_id": "17", "circulate_market_value": "242353560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 81, "hot_rank_chg": -41, "stock_cnt": 5788, "price": "106.30", "change": "0.30", "market_id": "33", "circulate_market_value": "106829975000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000338", "name": "潍柴动力", "hot_rank": 82, "hot_rank_chg": 402, "stock_cnt": 5788, "price": "26.70", "change": "4.62", "market_id": "33", "circulate_market_value": "132335681000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 83, "hot_rank_chg": 240, "stock_cnt": 5788, "price": "74.59", "change": "9.35", "market_id": "33", "circulate_market_value": "2438976900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 84, "hot_rank_chg": -48, "stock_cnt": 5788, "price": "236.66", "change": "-6.82", "market_id": "17", "circulate_market_value": "37106044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 85, "hot_rank_chg": -16, "stock_cnt": 5788, "price": "5.43", "change": "4.02", "market_id": "17", "circulate_market_value": "5261852000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": -0.68}]}, {"code": "002912", "name": "中新赛克", "hot_rank": 86, "hot_rank_chg": 2, "stock_cnt": 5788, "price": "23.63", "change": "-7.73", "market_id": "33", "circulate_market_value": "3833325600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 87, "hot_rank_chg": -17, "stock_cnt": 5788, "price": "2.37", "change": "10.23", "market_id": "33", "circulate_market_value": "11950691400.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "汽车整车", "xgb_concepts": [{"name": "新能源整车", "change_pct": 1.75}, {"name": "汽车整车", "change_pct": 2.03}, {"name": "新能源汽车", "change_pct": 0.1}, {"name": "低价股", "change_pct": 0.42}]}, {"code": "000759", "name": "中百集团", "hot_rank": 88, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "6.50", "change": "3.67", "market_id": "33", "circulate_market_value": "4262089200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "新零售", "change_pct": 0.55}, {"name": "农业种植", "change_pct": 4.09}, {"name": "冷链", "change_pct": 0.43}, {"name": "大农业", "change_pct": 0.9}, {"name": "预制菜", "change_pct": 0.69}, {"name": "国企改革", "change_pct": -0.09}, {"name": "可降解塑料", "change_pct": 0.83}, {"name": "免税店概念", "change_pct": 0.05}, {"name": "湖北国企改革", "change_pct": 0.73}]}, {"code": "603042", "name": "华脉科技", "hot_rank": 89, "hot_rank_chg": 41, "stock_cnt": 5788, "price": "17.71", "change": "3.21", "market_id": "17", "circulate_market_value": "3697259900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 90, "hot_rank_chg": -11, "stock_cnt": 5788, "price": "18.40", "change": "0.93", "market_id": "33", "circulate_market_value": "61888493000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 91, "hot_rank_chg": -34, "stock_cnt": 5788, "price": "32.73", "change": "-0.58", "market_id": "33", "circulate_market_value": "35378456000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 92, "hot_rank_chg": -38, "stock_cnt": 5788, "price": "70.03", "change": "-1.57", "market_id": "33", "circulate_market_value": "102728104000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603601", "name": "再升科技", "hot_rank": 93, "hot_rank_chg": 76, "stock_cnt": 5788, "price": "9.96", "change": "-3.21", "market_id": "17", "circulate_market_value": "11377716100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -0.78}, {"name": "核电", "change_pct": -0.57}, {"name": "大飞机", "change_pct": -0.4}, {"name": "大气治理", "change_pct": 0.04}, {"name": "玻纤", "change_pct": 0.72}, {"name": "环保", "change_pct": -0.22}, {"name": "核污染防治", "change_pct": -0.05}, {"name": "航天", "change_pct": -0.68}, {"name": "生物安全", "change_pct": 0.61}, {"name": "中芯国际概念股", "change_pct": 0.05}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 94, "hot_rank_chg": -4, "stock_cnt": 5788, "price": "16.11", "change": "0.50", "market_id": "17", "circulate_market_value": "10959950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603139", "name": "康惠股份", "hot_rank": 95, "hot_rank_chg": 493, "stock_cnt": 5788, "price": "39.32", "change": "-2.41", "market_id": "17", "circulate_market_value": "3927281600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 96, "hot_rank_chg": 428, "stock_cnt": 5788, "price": "2.63", "change": "10.04", "market_id": "33", "circulate_market_value": "5204794700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "房地产服务", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 0.84}, {"name": "深圳本地股", "change_pct": -0.05}, {"name": "共享经济", "change_pct": 0.49}, {"name": "养老产业", "change_pct": 0.24}, {"name": "住房租赁", "change_pct": 0.78}, {"name": "房产经纪", "change_pct": 4.04}, {"name": "第三代半导体", "change_pct": -0.05}, {"name": "物业管理", "change_pct": 1.05}, {"name": "低价股", "change_pct": 0.42}, {"name": "旧改", "change_pct": 0.49}, {"name": "横琴新区", "change_pct": 1.33}, {"name": "氮化镓", "change_pct": -0.15}, {"name": "REITs", "change_pct": -0.06}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 97, "hot_rank_chg": 158, "stock_cnt": 5788, "price": "28.66", "change": "-2.65", "market_id": "17", "circulate_market_value": "6943458200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601127", "name": "赛力斯", "hot_rank": 98, "hot_rank_chg": -53, "stock_cnt": 5788, "price": "47.15", "change": "3.58", "market_id": "17", "circulate_market_value": "73422140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 99, "hot_rank_chg": 89, "stock_cnt": 5788, "price": "160.41", "change": "1.71", "market_id": "17", "circulate_market_value": "396738880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300207", "name": "欣旺达", "hot_rank": 100, "hot_rank_chg": -79, "stock_cnt": 5788, "price": "20.08", "change": "1.36", "market_id": "33", "circulate_market_value": "34415629000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};