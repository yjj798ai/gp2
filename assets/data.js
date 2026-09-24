const UPDATE_TIME = "2026-09-24 10:59";
const THS_HOT = [
  {
    "name": "海峡两岸",
    "rise": -0.28,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885939"
  },
  {
    "name": "福建自贸区",
    "rise": 0.53,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885617"
  },
  {
    "name": "PCB概念",
    "rise": -3.12,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续122天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "中船系",
    "rise": 1.53,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885860"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.03,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续299天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -2.5,
    "rate": 0,
    "tag": "",
    "hotTag": "连续129天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "MLCC概念",
    "rise": -2.38,
    "rate": 0,
    "tag": "",
    "hotTag": "连续39天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "存储芯片",
    "rise": -2.38,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续252天上榜",
    "rankChg": 2,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "商业航天",
    "rise": -1.31,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续228天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "培育钻石",
    "rise": -2.51,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": -2,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "人形机器人",
    "rise": -1.32,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "新股与次新股",
    "rise": -2.21,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "AI应用",
    "rise": -1.25,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续57天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "人工智能",
    "rise": -1.17,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "玻璃基板",
    "rise": -3.22,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "工业母机ETF",
    "code": "886111"
  },
  {
    "name": "光纤概念",
    "rise": -2.29,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续128天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "机器人概念",
    "rise": -1.21,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "芯片概念",
    "rise": -1.82,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "赛马概念",
    "rise": 1.33,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 3,
    "etfName": "传媒ETF",
    "code": "885792"
  },
  {
    "name": "液冷服务器",
    "rise": -2.0,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886044"
  }
];
const THS_EVENTS = [
  {
    "title": "矢量网络分析仪（VNA）概念火爆！龙头暴涨近70%",
    "desc": "",
    "heat": 573186,
    "direction": "矢量网络分析仪（VNA）",
    "themes": [
      "矢量网络分析仪（VNA）"
    ],
    "stocks": [
      {
        "name": "电科思仪",
        "code": "301689",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "马斯克重磅预判！人形机器人20年有望达1000亿台",
    "desc": "",
    "heat": 159461,
    "direction": "人形机器人",
    "themes": [
      "滚柱丝杠",
      "灵巧手",
      "减速器轴承",
      "电机",
      "控制系统",
      "加工设备",
      "电子皮肤",
      "机器人概念",
      "减速器",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "路桥信息",
        "code": "920748",
        "chg": 29.985755
      }
    ]
  },
  {
    "title": "新一代通信网：筑牢数字中国与万物智联的信息大动脉",
    "desc": "",
    "heat": 29945,
    "direction": "新一代通信网",
    "themes": [
      "6G芯片",
      "6G元器件",
      "6G网络设备",
      "6G测试设备",
      "卫星互联网",
      "太赫兹"
    ],
    "stocks": [
      {
        "name": "电科思仪",
        "code": "301689",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "台积电据悉将于2027年1月上调晶圆代工价格3%至6%",
    "desc": "",
    "heat": 28386,
    "direction": "晶圆代工",
    "themes": [
      "晶圆代工",
      "混合键合",
      "EDA",
      "2.5D/3D封装",
      "先进封装封测",
      "扇出型封装",
      "先进封装设备",
      "先进封装材料",
      "先进封装"
    ],
    "stocks": [
      {
        "name": "康强电子",
        "code": "002119",
        "chg": 9.992571
      }
    ]
  },
  {
    "title": "OpenAI与Anthropic CEO联合国呼吁管控AI风险，特朗普称不设限",
    "desc": "",
    "heat": 11376,
    "direction": "AI安全",
    "themes": [
      "AI安全",
      "AI反诈",
      "AI内容审核"
    ],
    "stocks": [
      {
        "name": "新媒股份",
        "code": "300770",
        "chg": 1.032702
      }
    ]
  },
  {
    "title": "硅片涨价背后，国产材料的重资产困局与转机",
    "desc": "",
    "heat": 1900,
    "direction": "硅片涨价",
    "themes": [
      "半导体硅片"
    ],
    "stocks": [
      {
        "name": "立昂微",
        "code": "605358",
        "chg": 0.64543
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "矢量网络分析仪VNA",
    "change": "+5.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "福建自贸/海西概念",
    "change": "+3.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+2.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "破发次新",
    "change": "+1.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "林业",
    "change": "+1.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纺织服装",
    "change": "+0.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车销售",
    "change": "+0.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "+0.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "自贸区",
    "change": "+0.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+0.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "+0.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中俄贸易",
    "change": "+0.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+0.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玩具",
    "change": "+0.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "篮球",
    "change": "+0.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "广电",
    "change": "+0.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快递物流",
    "change": "+0.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "进口博览会",
    "change": "+0.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+0.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "RCEP概念",
    "change": "+0.04%",
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
    "hot_rank": 5,
    "hot_rank_chg": -3,
    "stock_cnt": 5801,
    "price": "8.14",
    "change": "-9.96",
    "market_id": "17",
    "circulate_market_value": "20500670000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.37
      },
      {
        "name": "工业大麻",
        "change_pct": -1.72
      },
      {
        "name": "中药",
        "change_pct": -1.55
      },
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "保健品",
        "change_pct": -1.74
      },
      {
        "name": "民营医院",
        "change_pct": -0.43
      },
      {
        "name": "医药",
        "change_pct": -2.22
      },
      {
        "name": "化学原料药",
        "change_pct": -2.27
      },
      {
        "name": "流感",
        "change_pct": -1.82
      },
      {
        "name": "振兴东北",
        "change_pct": -0.64
      },
      {
        "name": "食品",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 7,
    "hot_rank_chg": 6,
    "stock_cnt": 5801,
    "price": "7.77",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "8118778600.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "拟收购界面财联社",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.14
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.96
      },
      {
        "name": "复牌股",
        "change_pct": 2.39
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -0.42
      },
      {
        "name": "国企改革",
        "change_pct": -0.87
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 10,
    "hot_rank_chg": 1,
    "stock_cnt": 5801,
    "price": "3.66",
    "change": "-5.18",
    "market_id": "33",
    "circulate_market_value": "8574238500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.11
      },
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "人工智能",
        "change_pct": -1.3
      },
      {
        "name": "VR&AR",
        "change_pct": -2.01
      },
      {
        "name": "京津冀",
        "change_pct": -1.24
      },
      {
        "name": "装修装饰",
        "change_pct": -1.24
      },
      {
        "name": "住房租赁",
        "change_pct": -2.39
      },
      {
        "name": "破净股",
        "change_pct": -0.71
      },
      {
        "name": "数字经济",
        "change_pct": -1.36
      },
      {
        "name": "房产经纪",
        "change_pct": -1.86
      },
      {
        "name": "物业管理",
        "change_pct": -2.12
      },
      {
        "name": "华为产业链",
        "change_pct": -1.67
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.39
      }
    ]
  },
  {
    "code": "000910",
    "name": "大亚圣象",
    "hot_rank": 21,
    "hot_rank_chg": 0,
    "stock_cnt": 5801,
    "price": "7.60",
    "change": "0.26",
    "market_id": "33",
    "circulate_market_value": "4158987000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -1.92
      },
      {
        "name": "林业",
        "change_pct": 1.44
      },
      {
        "name": "装修装饰",
        "change_pct": -1.24
      },
      {
        "name": "家具家居",
        "change_pct": -0.67
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.31
      },
      {
        "name": "破净股",
        "change_pct": -0.71
      }
    ]
  },
  {
    "code": "002413",
    "name": "雷科防务",
    "hot_rank": 24,
    "hot_rank_chg": 725,
    "stock_cnt": 5801,
    "price": "8.97",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "11620011600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.95
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.29
      },
      {
        "name": "5G",
        "change_pct": -1.99
      },
      {
        "name": "人工智能",
        "change_pct": -1.3
      },
      {
        "name": "大飞机",
        "change_pct": -1.17
      },
      {
        "name": "北斗导航",
        "change_pct": -0.59
      },
      {
        "name": "军民融合",
        "change_pct": -1.11
      },
      {
        "name": "军工",
        "change_pct": -1.07
      },
      {
        "name": "国产芯片",
        "change_pct": -1.95
      },
      {
        "name": "百度概念股",
        "change_pct": -1.49
      },
      {
        "name": "毫米波通信",
        "change_pct": -0.77
      },
      {
        "name": "航天",
        "change_pct": -0.66
      },
      {
        "name": "闪存",
        "change_pct": -2.8
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.26
      },
      {
        "name": "华为产业链",
        "change_pct": -1.67
      },
      {
        "name": "毫米波雷达",
        "change_pct": -1.5
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.97
      },
      {
        "name": "低空经济",
        "change_pct": -1.0
      },
      {
        "name": "军工信息化",
        "change_pct": -0.51
      },
      {
        "name": "算力一体机",
        "change_pct": -1.58
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 29,
    "hot_rank_chg": 341,
    "stock_cnt": 5801,
    "price": "9.58",
    "change": "5.04",
    "market_id": "33",
    "circulate_market_value": "10868865500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.04
      },
      {
        "name": "足球",
        "change_pct": 0.1
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.1
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.36
      },
      {
        "name": "传媒",
        "change_pct": -0.42
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.6
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.53
      },
      {
        "name": "国企改革",
        "change_pct": -0.87
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.85
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.93
      }
    ]
  },
  {
    "code": "603601",
    "name": "再升科技",
    "hot_rank": 30,
    "hot_rank_chg": 235,
    "stock_cnt": 5801,
    "price": "10.59",
    "change": "4.64",
    "market_id": "17",
    "circulate_market_value": "12097390900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -1.01
      },
      {
        "name": "核电",
        "change_pct": -0.84
      },
      {
        "name": "大飞机",
        "change_pct": -1.17
      },
      {
        "name": "大气治理",
        "change_pct": -0.93
      },
      {
        "name": "玻纤",
        "change_pct": -3.39
      },
      {
        "name": "环保",
        "change_pct": -0.78
      },
      {
        "name": "核污染防治",
        "change_pct": -0.71
      },
      {
        "name": "航天",
        "change_pct": -0.66
      },
      {
        "name": "生物安全",
        "change_pct": -1.13
      },
      {
        "name": "中芯国际概念股",
        "change_pct": -1.86
      }
    ]
  },
  {
    "code": "600792",
    "name": "云煤能源",
    "hot_rank": 32,
    "hot_rank_chg": 76,
    "stock_cnt": 5801,
    "price": "5.70",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "6326564500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "焦炭",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.37
      },
      {
        "name": "甲醇",
        "change_pct": -0.89
      },
      {
        "name": "煤化工",
        "change_pct": -0.21
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 35,
    "hot_rank_chg": -16,
    "stock_cnt": 5801,
    "price": "5.85",
    "change": "-2.82",
    "market_id": "33",
    "circulate_market_value": "206897730000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.48
      },
      {
        "name": "手机产业链",
        "change_pct": -2.21
      },
      {
        "name": "超高清视频",
        "change_pct": -1.35
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.6
      },
      {
        "name": "电竞",
        "change_pct": -1.03
      },
      {
        "name": "半导体",
        "change_pct": -2.24
      },
      {
        "name": "人工智能",
        "change_pct": -1.3
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.62
      },
      {
        "name": "VR&AR",
        "change_pct": -2.01
      },
      {
        "name": "OLED",
        "change_pct": -2.49
      },
      {
        "name": "京津冀",
        "change_pct": -1.24
      },
      {
        "name": "物联网",
        "change_pct": -1.05
      },
      {
        "name": "指纹识别",
        "change_pct": -2.04
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.63
      },
      {
        "name": "白马股",
        "change_pct": -1.36
      },
      {
        "name": "智能制造",
        "change_pct": -1.37
      },
      {
        "name": "小米概念股",
        "change_pct": -1.99
      },
      {
        "name": "国产芯片",
        "change_pct": -1.95
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.18
      },
      {
        "name": "全息概念",
        "change_pct": -1.52
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.13
      },
      {
        "name": "MicroLED",
        "change_pct": -2.63
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.81
      },
      {
        "name": "智能手表",
        "change_pct": -2.41
      },
      {
        "name": "MiniLED",
        "change_pct": -2.5
      },
      {
        "name": "传感器",
        "change_pct": -1.21
      },
      {
        "name": "大硅片",
        "change_pct": -1.44
      },
      {
        "name": "AI PC",
        "change_pct": -2.72
      },
      {
        "name": "华为产业链",
        "change_pct": -1.67
      },
      {
        "name": "回购",
        "change_pct": -1.65
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -3.57
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.24
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.11
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 37,
    "hot_rank_chg": 14,
    "stock_cnt": 5801,
    "price": "8.78",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "16814512000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "海峡两岸",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 3.25
      },
      {
        "name": "林业",
        "change_pct": 1.44
      },
      {
        "name": "碳中和",
        "change_pct": -0.63
      },
      {
        "name": "自贸区",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 45,
    "hot_rank_chg": -36,
    "stock_cnt": 5801,
    "price": "3.76",
    "change": "-4.08",
    "market_id": "33",
    "circulate_market_value": "36528825000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": 0.2
      },
      {
        "name": "深圳本地股",
        "change_pct": -1.4
      },
      {
        "name": "股权转让",
        "change_pct": -0.98
      },
      {
        "name": "房地产",
        "change_pct": -1.81
      },
      {
        "name": "养老产业",
        "change_pct": -0.77
      },
      {
        "name": "冷链",
        "change_pct": -0.74
      },
      {
        "name": "住房租赁",
        "change_pct": -2.39
      },
      {
        "name": "破净股",
        "change_pct": -0.71
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.33
      },
      {
        "name": "物业管理",
        "change_pct": -2.12
      },
      {
        "name": "旧改",
        "change_pct": -1.32
      },
      {
        "name": "REITs",
        "change_pct": -1.75
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 47,
    "hot_rank_chg": 2,
    "stock_cnt": 5801,
    "price": "7.91",
    "change": "-10.01",
    "market_id": "33",
    "circulate_market_value": "3702841600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "旅游",
        "change_pct": -1.8
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.33
      },
      {
        "name": "广西概念",
        "change_pct": -0.92
      },
      {
        "name": "低空经济",
        "change_pct": -1.0
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 48,
    "hot_rank_chg": -8,
    "stock_cnt": 5801,
    "price": "12.92",
    "change": "-2.78",
    "market_id": "17",
    "circulate_market_value": "4968355400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -2.87
      },
      {
        "name": "股权转让",
        "change_pct": -0.98
      },
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "新疆概念",
        "change_pct": -1.17
      },
      {
        "name": "医药",
        "change_pct": -2.22
      },
      {
        "name": "流感",
        "change_pct": -1.82
      },
      {
        "name": "国资入股",
        "change_pct": -0.92
      },
      {
        "name": "减肥药",
        "change_pct": -2.82
      }
    ]
  },
  {
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 51,
    "hot_rank_chg": 11,
    "stock_cnt": 5801,
    "price": "8.29",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "3153743000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "PCB三防漆",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.83
      },
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "有机硅",
        "change_pct": -1.39
      },
      {
        "name": "装修装饰",
        "change_pct": -1.24
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.8
      },
      {
        "name": "光伏",
        "change_pct": -1.5
      },
      {
        "name": "船舶",
        "change_pct": -0.31
      },
      {
        "name": "固态电池",
        "change_pct": -1.61
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.74
      },
      {
        "name": "旧改",
        "change_pct": -1.32
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.97
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.03
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 54,
    "hot_rank_chg": -6,
    "stock_cnt": 5801,
    "price": "4.97",
    "change": "-6.58",
    "market_id": "33",
    "circulate_market_value": "13183176300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "装修装饰",
        "change_pct": -1.24
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.8
      },
      {
        "name": "破净股",
        "change_pct": -0.71
      },
      {
        "name": "航天",
        "change_pct": -0.66
      },
      {
        "name": "旧改",
        "change_pct": -1.32
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 60,
    "hot_rank_chg": -16,
    "stock_cnt": 5801,
    "price": "3.78",
    "change": "2.16",
    "market_id": "17",
    "circulate_market_value": "4385348300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -1.8
      },
      {
        "name": "国企改革",
        "change_pct": -0.87
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "002614",
    "name": "奥佳华",
    "hot_rank": 61,
    "hot_rank_chg": -9,
    "stock_cnt": 5801,
    "price": "8.33",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "3675823300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "股份转让",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -1.35
      },
      {
        "name": "股权转让",
        "change_pct": -0.98
      },
      {
        "name": "人工智能",
        "change_pct": -1.3
      },
      {
        "name": "养老产业",
        "change_pct": -0.77
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 3.25
      },
      {
        "name": "外贸受益概念",
        "change_pct": -1.02
      },
      {
        "name": "小家电",
        "change_pct": -0.04
      },
      {
        "name": "机器人",
        "change_pct": -1.15
      },
      {
        "name": "家电",
        "change_pct": -0.61
      },
      {
        "name": "RCEP概念",
        "change_pct": 0.04
      },
      {
        "name": "血氧仪",
        "change_pct": -0.64
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.09
      },
      {
        "name": "华为产业链",
        "change_pct": -1.67
      },
      {
        "name": "自贸区",
        "change_pct": 0.85
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.76
      }
    ]
  },
  {
    "code": "002238",
    "name": "天威视讯",
    "hot_rank": 66,
    "hot_rank_chg": -13,
    "stock_cnt": 5801,
    "price": "8.43",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "6765573700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "广电网络",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 0.31
      },
      {
        "name": "超高清视频",
        "change_pct": -1.35
      },
      {
        "name": "深圳本地股",
        "change_pct": -1.4
      },
      {
        "name": "5G",
        "change_pct": -1.99
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.93
      },
      {
        "name": "智慧城市",
        "change_pct": -0.91
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.33
      },
      {
        "name": "传媒",
        "change_pct": -0.42
      },
      {
        "name": "在线教育",
        "change_pct": -0.29
      },
      {
        "name": "业绩增长",
        "change_pct": -1.73
      },
      {
        "name": "知识付费",
        "change_pct": -0.92
      },
      {
        "name": "智慧政务",
        "change_pct": -1.55
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.39
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.93
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 68,
    "hot_rank_chg": 135,
    "stock_cnt": 5801,
    "price": "8.79",
    "change": "-2.55",
    "market_id": "33",
    "circulate_market_value": "4229214800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -1.15
      },
      {
        "name": "医疗器械",
        "change_pct": -1.35
      },
      {
        "name": "锂电池",
        "change_pct": -1.92
      },
      {
        "name": "基因测序",
        "change_pct": -0.79
      },
      {
        "name": "PCB板",
        "change_pct": -3.73
      },
      {
        "name": "医药",
        "change_pct": -2.22
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.31
      },
      {
        "name": "化学原料药",
        "change_pct": -2.27
      },
      {
        "name": "食品安全",
        "change_pct": -0.52
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.28
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -2.56
      },
      {
        "name": "异丙醇",
        "change_pct": -2.17
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.18
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -1.45
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 74,
    "hot_rank_chg": 346,
    "stock_cnt": 5801,
    "price": "5.50",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5329684300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "风电铸件",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": -0.26
      }
    ]
  },
  {
    "code": "600503",
    "name": "华丽家族",
    "hot_rank": 78,
    "hot_rank_chg": -56,
    "stock_cnt": 5801,
    "price": "2.65",
    "change": "-9.86",
    "market_id": "17",
    "circulate_market_value": "4246068500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -1.81
      },
      {
        "name": "石墨烯",
        "change_pct": -1.6
      },
      {
        "name": "机器人",
        "change_pct": -1.15
      },
      {
        "name": "低价股",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 87,
    "hot_rank_chg": 87,
    "stock_cnt": 5801,
    "price": "7.19",
    "change": "-0.69",
    "market_id": "17",
    "circulate_market_value": "17189941000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.37
      },
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "国企改革",
        "change_pct": -0.87
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 88,
    "hot_rank_chg": -30,
    "stock_cnt": 5801,
    "price": "9.49",
    "change": "-3.16",
    "market_id": "17",
    "circulate_market_value": "34046986000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -1.8
      },
      {
        "name": "OLED",
        "change_pct": -2.49
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.18
      },
      {
        "name": "国企改革",
        "change_pct": -0.87
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.11
      },
      {
        "name": "陕西国企改革",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 89,
    "hot_rank_chg": 8,
    "stock_cnt": 5801,
    "price": "7.48",
    "change": "-0.66",
    "market_id": "33",
    "circulate_market_value": "12169913500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.37
      },
      {
        "name": "电竞",
        "change_pct": -1.03
      },
      {
        "name": "手游",
        "change_pct": -1.08
      },
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "人工智能",
        "change_pct": -1.3
      },
      {
        "name": "游戏",
        "change_pct": -1.01
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.36
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.33
      },
      {
        "name": "快手概念股",
        "change_pct": -1.6
      },
      {
        "name": "元宇宙",
        "change_pct": -1.6
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.52
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.5
      },
      {
        "name": "web3.0",
        "change_pct": -1.14
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.6
      },
      {
        "name": "数据要素",
        "change_pct": -1.71
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.53
      },
      {
        "name": "AI营销",
        "change_pct": -1.58
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.02
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.24
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.39
      },
      {
        "name": "人形机器人",
        "change_pct": -1.04
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.93
      },
      {
        "name": "多模态",
        "change_pct": -1.82
      },
      {
        "name": "AI视频",
        "change_pct": -1.74
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.76
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.45
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 90,
    "hot_rank_chg": 147,
    "stock_cnt": 5801,
    "price": "4.90",
    "change": "1.87",
    "market_id": "17",
    "circulate_market_value": "5970219000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.43
      },
      {
        "name": "煤炭",
        "change_pct": 0.37
      },
      {
        "name": "有色金属",
        "change_pct": -2.15
      },
      {
        "name": "国企改革",
        "change_pct": -0.87
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "603636",
    "name": "南威软件",
    "hot_rank": 91,
    "hot_rank_chg": -56,
    "stock_cnt": 5801,
    "price": "7.94",
    "change": "-9.88",
    "market_id": "17",
    "circulate_market_value": "4608062600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -2.05
      },
      {
        "name": "国产软件",
        "change_pct": -1.57
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -1.47
      },
      {
        "name": "共享经济",
        "change_pct": -0.97
      },
      {
        "name": "人工智能",
        "change_pct": -1.3
      },
      {
        "name": "网络安全",
        "change_pct": -1.64
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 3.25
      },
      {
        "name": "智慧停车",
        "change_pct": -0.95
      },
      {
        "name": "物联网",
        "change_pct": -1.05
      },
      {
        "name": "大数据",
        "change_pct": -1.43
      },
      {
        "name": "智慧城市",
        "change_pct": -0.91
      },
      {
        "name": "智慧安防",
        "change_pct": -1.1
      },
      {
        "name": "数字经济",
        "change_pct": -1.36
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.32
      },
      {
        "name": "信创",
        "change_pct": -1.68
      },
      {
        "name": "华为昇腾",
        "change_pct": -1.84
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.5
      },
      {
        "name": "电子身份证",
        "change_pct": -2.19
      },
      {
        "name": "数据要素",
        "change_pct": -1.71
      },
      {
        "name": "数字乡村",
        "change_pct": -0.59
      },
      {
        "name": "智慧政务",
        "change_pct": -1.55
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -1.78
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.24
      },
      {
        "name": "算电协同",
        "change_pct": -1.62
      },
      {
        "name": "华为产业链",
        "change_pct": -1.67
      },
      {
        "name": "自贸区",
        "change_pct": 0.85
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.39
      },
      {
        "name": "智谱AI",
        "change_pct": -1.62
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.51
      },
      {
        "name": "算力一体机",
        "change_pct": -1.58
      },
      {
        "name": "区块链",
        "change_pct": -1.43
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 93,
    "hot_rank_chg": 103,
    "stock_cnt": 5801,
    "price": "5.42",
    "change": "1.31",
    "market_id": "33",
    "circulate_market_value": "4147062800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.55
      },
      {
        "name": "股权转让",
        "change_pct": -0.98
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.62
      },
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "医药商业",
        "change_pct": -0.37
      },
      {
        "name": "保健品",
        "change_pct": -1.74
      },
      {
        "name": "民营医院",
        "change_pct": -0.43
      },
      {
        "name": "医药",
        "change_pct": -2.22
      },
      {
        "name": "食品",
        "change_pct": -1.31
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.28
      },
      {
        "name": "口腔",
        "change_pct": -0.58
      },
      {
        "name": "医美",
        "change_pct": -0.86
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.18
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 96,
    "hot_rank_chg": 16,
    "stock_cnt": 5801,
    "price": "2.74",
    "change": "-2.49",
    "market_id": "33",
    "circulate_market_value": "26066596000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -2.24
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.29
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.63
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.31
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.77
      },
      {
        "name": "低价股",
        "change_pct": -0.91
      },
      {
        "name": "减速器",
        "change_pct": -0.47
      },
      {
        "name": "华为汽车",
        "change_pct": -1.02
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 97,
    "hot_rank_chg": -4,
    "stock_cnt": 5801,
    "price": "2.04",
    "change": "-7.27",
    "market_id": "33",
    "circulate_market_value": "10286671100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "新能源整车",
        "change_pct": -0.99
      },
      {
        "name": "汽车整车",
        "change_pct": -1.02
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.31
      },
      {
        "name": "低价股",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 100,
    "hot_rank_chg": -44,
    "stock_cnt": 5801,
    "price": "11.20",
    "change": "-4.44",
    "market_id": "33",
    "circulate_market_value": "9929828000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -3.42
      },
      {
        "name": "手机产业链",
        "change_pct": -2.21
      },
      {
        "name": "超高清视频",
        "change_pct": -1.35
      },
      {
        "name": "锂电池",
        "change_pct": -1.92
      },
      {
        "name": "强势人气股",
        "change_pct": -2.34
      },
      {
        "name": "OLED",
        "change_pct": -2.49
      },
      {
        "name": "包装印刷",
        "change_pct": -0.45
      },
      {
        "name": "光伏",
        "change_pct": -1.5
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.31
      },
      {
        "name": "小米概念股",
        "change_pct": -1.99
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.18
      },
      {
        "name": "可降解塑料",
        "change_pct": -1.32
      },
      {
        "name": "华为产业链",
        "change_pct": -1.67
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -3.64
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "601091", "name": "沈鼓集团", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5801, "price": "27.00", "change": "-10.00", "market_id": "17", "circulate_market_value": "5701405900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 2, "hot_rank_chg": 15, "stock_cnt": 5801, "price": "18.47", "change": "10.01", "market_id": "17", "circulate_market_value": "6529569800.00", "change_type": "1", "change_section": "7", "change_days": "6", "change_reason": "出版发行"}, {"code": "600641", "name": "先导基电", "hot_rank": 3, "hot_rank_chg": 23, "stock_cnt": 5801, "price": "51.56", "change": "7.87", "market_id": "17", "circulate_market_value": "47983279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 4, "hot_rank_chg": 11, "stock_cnt": 5801, "price": "29.61", "change": "9.99", "market_id": "33", "circulate_market_value": "11112159200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体封装材料"}, {"code": "600664", "name": "哈药股份", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5801, "price": "8.14", "change": "-9.96", "market_id": "17", "circulate_market_value": "20500670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.37}, {"name": "工业大麻", "change_pct": -1.72}, {"name": "中药", "change_pct": -1.55}, {"name": "强势人气股", "change_pct": -2.34}, {"name": "保健品", "change_pct": -1.74}, {"name": "民营医院", "change_pct": -0.43}, {"name": "医药", "change_pct": -2.22}, {"name": "化学原料药", "change_pct": -2.27}, {"name": "流感", "change_pct": -1.82}, {"name": "振兴东北", "change_pct": -0.64}, {"name": "食品", "change_pct": -1.31}]}, {"code": "002579", "name": "中京电子", "hot_rank": 6, "hot_rank_chg": 73, "stock_cnt": 5801, "price": "19.22", "change": "3.33", "market_id": "33", "circulate_market_value": "11213683300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 7, "hot_rank_chg": 6, "stock_cnt": 5801, "price": "7.77", "change": "10.06", "market_id": "17", "circulate_market_value": "8118778600.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "拟收购界面财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.14}, {"name": "上海国企改革", "change_pct": -0.96}, {"name": "复牌股", "change_pct": 2.39}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -0.42}, {"name": "国企改革", "change_pct": -0.87}]}, {"code": "000823", "name": "超声电子", "hot_rank": 8, "hot_rank_chg": -5, "stock_cnt": 5801, "price": "24.48", "change": "-10.00", "market_id": "33", "circulate_market_value": "14563939000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5801, "price": "19.32", "change": "2.66", "market_id": "33", "circulate_market_value": "8847622100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5801, "price": "3.66", "change": "-5.18", "market_id": "33", "circulate_market_value": "8574238500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -1.11}, {"name": "强势人气股", "change_pct": -2.34}, {"name": "人工智能", "change_pct": -1.3}, {"name": "VR&AR", "change_pct": -2.01}, {"name": "京津冀", "change_pct": -1.24}, {"name": "装修装饰", "change_pct": -1.24}, {"name": "住房租赁", "change_pct": -2.39}, {"name": "破净股", "change_pct": -0.71}, {"name": "数字经济", "change_pct": -1.36}, {"name": "房产经纪", "change_pct": -1.86}, {"name": "物业管理", "change_pct": -2.12}, {"name": "华为产业链", "change_pct": -1.67}, {"name": "AI大模型/智能体", "change_pct": -1.39}]}, {"code": "600667", "name": "太极实业", "hot_rank": 11, "hot_rank_chg": -7, "stock_cnt": 5801, "price": "19.41", "change": "-5.73", "market_id": "17", "circulate_market_value": "40596834000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 12, "hot_rank_chg": -2, "stock_cnt": 5801, "price": "16.49", "change": "-1.55", "market_id": "17", "circulate_market_value": "10583005300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 13, "hot_rank_chg": 19, "stock_cnt": 5801, "price": "15.32", "change": "-9.99", "market_id": "17", "circulate_market_value": "10203120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 14, "hot_rank_chg": 22, "stock_cnt": 5801, "price": "70.00", "change": "1.45", "market_id": "33", "circulate_market_value": "59715109000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 15, "hot_rank_chg": -8, "stock_cnt": 5801, "price": "28.40", "change": "0.32", "market_id": "33", "circulate_market_value": "7010148100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 16, "hot_rank_chg": 9, "stock_cnt": 5801, "price": "16.89", "change": "0.90", "market_id": "17", "circulate_market_value": "21691466000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 17, "hot_rank_chg": -1, "stock_cnt": 5801, "price": "20.35", "change": "10.00", "market_id": "17", "circulate_market_value": "16115244000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "拟收购民族出版社"}, {"code": "600186", "name": "莲花控股", "hot_rank": 18, "hot_rank_chg": -13, "stock_cnt": 5801, "price": "13.04", "change": "-4.05", "market_id": "17", "circulate_market_value": "23330363000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 19, "hot_rank_chg": 28, "stock_cnt": 5801, "price": "23.80", "change": "-1.98", "market_id": "33", "circulate_market_value": "27999957000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 20, "hot_rank_chg": 13, "stock_cnt": 5801, "price": "13.73", "change": "7.60", "market_id": "33", "circulate_market_value": "4518850500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000910", "name": "大亚圣象", "hot_rank": 21, "hot_rank_chg": 0, "stock_cnt": 5801, "price": "7.60", "change": "0.26", "market_id": "33", "circulate_market_value": "4158987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.92}, {"name": "林业", "change_pct": 1.44}, {"name": "装修装饰", "change_pct": -1.24}, {"name": "家具家居", "change_pct": -0.67}, {"name": "新能源汽车", "change_pct": -1.31}, {"name": "破净股", "change_pct": -0.71}]}, {"code": "000636", "name": "风华高科", "hot_rank": 22, "hot_rank_chg": 2, "stock_cnt": 5801, "price": "56.02", "change": "-4.63", "market_id": "33", "circulate_market_value": "64282388000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 23, "hot_rank_chg": 0, "stock_cnt": 5801, "price": "17.58", "change": "-4.30", "market_id": "33", "circulate_market_value": "58471546000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002413", "name": "雷科防务", "hot_rank": 24, "hot_rank_chg": 725, "stock_cnt": 5801, "price": "8.97", "change": "10.06", "market_id": "33", "circulate_market_value": "11620011600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.95}, {"name": "无人驾驶", "change_pct": -1.29}, {"name": "5G", "change_pct": -1.99}, {"name": "人工智能", "change_pct": -1.3}, {"name": "大飞机", "change_pct": -1.17}, {"name": "北斗导航", "change_pct": -0.59}, {"name": "军民融合", "change_pct": -1.11}, {"name": "军工", "change_pct": -1.07}, {"name": "国产芯片", "change_pct": -1.95}, {"name": "百度概念股", "change_pct": -1.49}, {"name": "毫米波通信", "change_pct": -0.77}, {"name": "航天", "change_pct": -0.66}, {"name": "闪存", "change_pct": -2.8}, {"name": "卫星互联网", "change_pct": -0.26}, {"name": "华为产业链", "change_pct": -1.67}, {"name": "毫米波雷达", "change_pct": -1.5}, {"name": "飞行汽车/eVTOL", "change_pct": -0.97}, {"name": "低空经济", "change_pct": -1.0}, {"name": "军工信息化", "change_pct": -0.51}, {"name": "算力一体机", "change_pct": -1.58}]}, {"code": "301686", "name": "中塑股份", "hot_rank": 25, "hot_rank_chg": 3, "stock_cnt": 5801, "price": "258.08", "change": "-8.97", "market_id": "33", "circulate_market_value": "2253827400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 26, "hot_rank_chg": -6, "stock_cnt": 5801, "price": "15.85", "change": "-8.28", "market_id": "17", "circulate_market_value": "4637361300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 27, "hot_rank_chg": 102, "stock_cnt": 5801, "price": "48.34", "change": "0.65", "market_id": "17", "circulate_market_value": "37328118000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 28, "hot_rank_chg": -10, "stock_cnt": 5801, "price": "38.04", "change": "3.51", "market_id": "17", "circulate_market_value": "18238788000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002181", "name": "粤传媒", "hot_rank": 29, "hot_rank_chg": 341, "stock_cnt": 5801, "price": "9.58", "change": "5.04", "market_id": "33", "circulate_market_value": "10868865500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.04}, {"name": "足球", "change_pct": 0.1}, {"name": "粤港澳大湾区", "change_pct": -1.1}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.36}, {"name": "传媒", "change_pct": -0.42}, {"name": "AIGC概念", "change_pct": -1.6}, {"name": "字节跳动概念股", "change_pct": -1.53}, {"name": "国企改革", "change_pct": -0.87}, {"name": "网红/MCN", "change_pct": -0.85}, {"name": "短剧/互动影游", "change_pct": -0.93}]}, {"code": "603601", "name": "再升科技", "hot_rank": 30, "hot_rank_chg": 235, "stock_cnt": 5801, "price": "10.59", "change": "4.64", "market_id": "17", "circulate_market_value": "12097390900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -1.01}, {"name": "核电", "change_pct": -0.84}, {"name": "大飞机", "change_pct": -1.17}, {"name": "大气治理", "change_pct": -0.93}, {"name": "玻纤", "change_pct": -3.39}, {"name": "环保", "change_pct": -0.78}, {"name": "核污染防治", "change_pct": -0.71}, {"name": "航天", "change_pct": -0.66}, {"name": "生物安全", "change_pct": -1.13}, {"name": "中芯国际概念股", "change_pct": -1.86}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 31, "hot_rank_chg": 23, "stock_cnt": 5801, "price": "43.06", "change": "-5.61", "market_id": "17", "circulate_market_value": "171016540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600792", "name": "云煤能源", "hot_rank": 32, "hot_rank_chg": 76, "stock_cnt": 5801, "price": "5.70", "change": "10.04", "market_id": "17", "circulate_market_value": "6326564500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "焦炭", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.37}, {"name": "甲醇", "change_pct": -0.89}, {"name": "煤化工", "change_pct": -0.21}]}, {"code": "002487", "name": "大金重工", "hot_rank": 33, "hot_rank_chg": 110, "stock_cnt": 5801, "price": "39.77", "change": "4.96", "market_id": "33", "circulate_market_value": "25091699000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 34, "hot_rank_chg": -7, "stock_cnt": 5801, "price": "80.88", "change": "-7.20", "market_id": "33", "circulate_market_value": "58657133000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 35, "hot_rank_chg": -16, "stock_cnt": 5801, "price": "5.85", "change": "-2.82", "market_id": "33", "circulate_market_value": "206897730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.48}, {"name": "手机产业链", "change_pct": -2.21}, {"name": "超高清视频", "change_pct": -1.35}, {"name": "苹果产业链", "change_pct": -2.6}, {"name": "电竞", "change_pct": -1.03}, {"name": "半导体", "change_pct": -2.24}, {"name": "人工智能", "change_pct": -1.3}, {"name": "互联网医疗", "change_pct": -0.62}, {"name": "VR&AR", "change_pct": -2.01}, {"name": "OLED", "change_pct": -2.49}, {"name": "京津冀", "change_pct": -1.24}, {"name": "物联网", "change_pct": -1.05}, {"name": "指纹识别", "change_pct": -2.04}, {"name": "汽车零部件", "change_pct": -0.63}, {"name": "白马股", "change_pct": -1.36}, {"name": "智能制造", "change_pct": -1.37}, {"name": "小米概念股", "change_pct": -1.99}, {"name": "国产芯片", "change_pct": -1.95}, {"name": "液晶面板/LCD", "change_pct": -2.18}, {"name": "全息概念", "change_pct": -1.52}, {"name": "理想汽车概念股", "change_pct": -1.13}, {"name": "MicroLED", "change_pct": -2.63}, {"name": "钙钛矿电池", "change_pct": -1.81}, {"name": "智能手表", "change_pct": -2.41}, {"name": "MiniLED", "change_pct": -2.5}, {"name": "传感器", "change_pct": -1.21}, {"name": "大硅片", "change_pct": -1.44}, {"name": "AI PC", "change_pct": -2.72}, {"name": "华为产业链", "change_pct": -1.67}, {"name": "回购", "change_pct": -1.65}, {"name": "光电共封装CPO", "change_pct": -3.57}, {"name": "智能眼镜/MR头显", "change_pct": -2.24}, {"name": "玻璃基板封装", "change_pct": -3.11}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 36, "hot_rank_chg": -30, "stock_cnt": 5801, "price": "60.20", "change": "2.73", "market_id": "17", "circulate_market_value": "8604092200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 37, "hot_rank_chg": 14, "stock_cnt": 5801, "price": "8.78", "change": "10.03", "market_id": "33", "circulate_market_value": "16814512000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "海峡两岸", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 3.25}, {"name": "林业", "change_pct": 1.44}, {"name": "碳中和", "change_pct": -0.63}, {"name": "自贸区", "change_pct": 0.85}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 38, "hot_rank_chg": -4, "stock_cnt": 5801, "price": "15.12", "change": "-7.18", "market_id": "17", "circulate_market_value": "10286433500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 40, "hot_rank_chg": -1, "stock_cnt": 5801, "price": "67.38", "change": "-3.66", "market_id": "17", "circulate_market_value": "165326680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 41, "hot_rank_chg": 18, "stock_cnt": 5801, "price": "16.52", "change": "3.77", "market_id": "17", "circulate_market_value": "7342222200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 42, "hot_rank_chg": -13, "stock_cnt": 5801, "price": "49.81", "change": "-3.24", "market_id": "17", "circulate_market_value": "42166821000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 43, "hot_rank_chg": -29, "stock_cnt": 5801, "price": "22.93", "change": "-2.22", "market_id": "17", "circulate_market_value": "51688306000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 44, "hot_rank_chg": -1, "stock_cnt": 5801, "price": "19.83", "change": "-5.71", "market_id": "17", "circulate_market_value": "44009765000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000002", "name": "万科A", "hot_rank": 45, "hot_rank_chg": -36, "stock_cnt": 5801, "price": "3.76", "change": "-4.08", "market_id": "33", "circulate_market_value": "36528825000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": 0.2}, {"name": "深圳本地股", "change_pct": -1.4}, {"name": "股权转让", "change_pct": -0.98}, {"name": "房地产", "change_pct": -1.81}, {"name": "养老产业", "change_pct": -0.77}, {"name": "冷链", "change_pct": -0.74}, {"name": "住房租赁", "change_pct": -2.39}, {"name": "破净股", "change_pct": -0.71}, {"name": "冰雪产业", "change_pct": -0.33}, {"name": "物业管理", "change_pct": -2.12}, {"name": "旧改", "change_pct": -1.32}, {"name": "REITs", "change_pct": -1.75}]}, {"code": "301689", "name": "电科思仪", "hot_rank": 46, "hot_rank_chg": 34, "stock_cnt": 5801, "price": "83.88", "change": "20.00", "market_id": "33", "circulate_market_value": "4828254600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "矢量网络分析仪"}, {"code": "000978", "name": "桂林旅游", "hot_rank": 47, "hot_rank_chg": 2, "stock_cnt": 5801, "price": "7.91", "change": "-10.01", "market_id": "33", "circulate_market_value": "3702841600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.34}, {"name": "旅游", "change_pct": -1.8}, {"name": "腾讯概念股", "change_pct": -1.33}, {"name": "广西概念", "change_pct": -0.92}, {"name": "低空经济", "change_pct": -1.0}]}, {"code": "600721", "name": "百花医药", "hot_rank": 48, "hot_rank_chg": -8, "stock_cnt": 5801, "price": "12.92", "change": "-2.78", "market_id": "17", "circulate_market_value": "4968355400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -2.87}, {"name": "股权转让", "change_pct": -0.98}, {"name": "强势人气股", "change_pct": -2.34}, {"name": "新疆概念", "change_pct": -1.17}, {"name": "医药", "change_pct": -2.22}, {"name": "流感", "change_pct": -1.82}, {"name": "国资入股", "change_pct": -0.92}, {"name": "减肥药", "change_pct": -2.82}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 49, "hot_rank_chg": 23, "stock_cnt": 5801, "price": "895.86", "change": "-2.89", "market_id": "33", "circulate_market_value": "994348160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600699", "name": "均胜电子", "hot_rank": 50, "hot_rank_chg": 83, "stock_cnt": 5801, "price": "22.62", "change": "5.06", "market_id": "17", "circulate_market_value": "31570068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002909", "name": "集泰股份", "hot_rank": 51, "hot_rank_chg": 11, "stock_cnt": 5801, "price": "8.29", "change": "9.95", "market_id": "33", "circulate_market_value": "3153743000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB三防漆", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.83}, {"name": "强势人气股", "change_pct": -2.34}, {"name": "有机硅", "change_pct": -1.39}, {"name": "装修装饰", "change_pct": -1.24}, {"name": "装配式建筑", "change_pct": -0.8}, {"name": "光伏", "change_pct": -1.5}, {"name": "船舶", "change_pct": -0.31}, {"name": "固态电池", "change_pct": -1.61}, {"name": "新型城镇化", "change_pct": -0.74}, {"name": "旧改", "change_pct": -1.32}, {"name": "飞行汽车/eVTOL", "change_pct": -0.97}, {"name": "液冷服务器", "change_pct": -2.03}]}, {"code": "001317", "name": "三羊马", "hot_rank": 52, "hot_rank_chg": 36, "stock_cnt": 5801, "price": "65.30", "change": "10.01", "market_id": "33", "circulate_market_value": "5583314400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 53, "hot_rank_chg": 38, "stock_cnt": 5801, "price": "36.65", "change": "0.36", "market_id": "33", "circulate_market_value": "27759264000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 54, "hot_rank_chg": -6, "stock_cnt": 5801, "price": "4.97", "change": "-6.58", "market_id": "33", "circulate_market_value": "13183176300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.34}, {"name": "装修装饰", "change_pct": -1.24}, {"name": "装配式建筑", "change_pct": -0.8}, {"name": "破净股", "change_pct": -0.71}, {"name": "航天", "change_pct": -0.66}, {"name": "旧改", "change_pct": -1.32}]}, {"code": "600584", "name": "长电科技", "hot_rank": 55, "hot_rank_chg": 18, "stock_cnt": 5801, "price": "68.78", "change": "-4.17", "market_id": "17", "circulate_market_value": "123075934000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 56, "hot_rank_chg": -14, "stock_cnt": 5801, "price": "56.44", "change": "2.62", "market_id": "17", "circulate_market_value": "57014725000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 57, "hot_rank_chg": 0, "stock_cnt": 5801, "price": "45.42", "change": "-10.01", "market_id": "17", "circulate_market_value": "18911421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 58, "hot_rank_chg": -12, "stock_cnt": 5801, "price": "488.00", "change": "-0.60", "market_id": "17", "circulate_market_value": "14682807000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002297", "name": "博云新材", "hot_rank": 59, "hot_rank_chg": 246, "stock_cnt": 5801, "price": "22.47", "change": "5.49", "market_id": "33", "circulate_market_value": "12877665300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600293", "name": "三峡新材", "hot_rank": 60, "hot_rank_chg": -16, "stock_cnt": 5801, "price": "3.78", "change": "2.16", "market_id": "17", "circulate_market_value": "4385348300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -1.8}, {"name": "国企改革", "change_pct": -0.87}, {"name": "湖北国企改革", "change_pct": -0.96}]}, {"code": "002614", "name": "奥佳华", "hot_rank": 61, "hot_rank_chg": -9, "stock_cnt": 5801, "price": "8.33", "change": "10.04", "market_id": "33", "circulate_market_value": "3675823300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "股份转让", "xgb_concepts": [{"name": "医疗器械", "change_pct": -1.35}, {"name": "股权转让", "change_pct": -0.98}, {"name": "人工智能", "change_pct": -1.3}, {"name": "养老产业", "change_pct": -0.77}, {"name": "福建自贸/海西概念", "change_pct": 3.25}, {"name": "外贸受益概念", "change_pct": -1.02}, {"name": "小家电", "change_pct": -0.04}, {"name": "机器人", "change_pct": -1.15}, {"name": "家电", "change_pct": -0.61}, {"name": "RCEP概念", "change_pct": 0.04}, {"name": "血氧仪", "change_pct": -0.64}, {"name": "华为鸿蒙", "change_pct": -1.09}, {"name": "华为产业链", "change_pct": -1.67}, {"name": "自贸区", "change_pct": 0.85}, {"name": "IP经济/谷子经济", "change_pct": -0.76}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 62, "hot_rank_chg": 52, "stock_cnt": 5801, "price": "91.63", "change": "-2.92", "market_id": "33", "circulate_market_value": "59835077000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 63, "hot_rank_chg": 5, "stock_cnt": 5801, "price": "34.80", "change": "-2.74", "market_id": "17", "circulate_market_value": "118770648000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 64, "hot_rank_chg": -23, "stock_cnt": 5801, "price": "43.31", "change": "-5.64", "market_id": "33", "circulate_market_value": "65741486000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 65, "hot_rank_chg": 9, "stock_cnt": 5801, "price": "185.99", "change": "-3.63", "market_id": "33", "circulate_market_value": "257841980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002238", "name": "天威视讯", "hot_rank": 66, "hot_rank_chg": -13, "stock_cnt": 5801, "price": "8.43", "change": "10.05", "market_id": "33", "circulate_market_value": "6765573700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "广电网络", "xgb_concepts": [{"name": "广电", "change_pct": 0.31}, {"name": "超高清视频", "change_pct": -1.35}, {"name": "深圳本地股", "change_pct": -1.4}, {"name": "5G", "change_pct": -1.99}, {"name": "云计算数据中心", "change_pct": -1.93}, {"name": "智慧城市", "change_pct": -0.91}, {"name": "腾讯概念股", "change_pct": -1.33}, {"name": "传媒", "change_pct": -0.42}, {"name": "在线教育", "change_pct": -0.29}, {"name": "业绩增长", "change_pct": -1.73}, {"name": "知识付费", "change_pct": -0.92}, {"name": "智慧政务", "change_pct": -1.55}, {"name": "AI大模型/智能体", "change_pct": -1.39}, {"name": "短剧/互动影游", "change_pct": -0.93}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 67, "hot_rank_chg": -6, "stock_cnt": 5801, "price": "14.50", "change": "-8.86", "market_id": "33", "circulate_market_value": "6624328700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 68, "hot_rank_chg": 135, "stock_cnt": 5801, "price": "8.79", "change": "-2.55", "market_id": "33", "circulate_market_value": "4229214800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -1.15}, {"name": "医疗器械", "change_pct": -1.35}, {"name": "锂电池", "change_pct": -1.92}, {"name": "基因测序", "change_pct": -0.79}, {"name": "PCB板", "change_pct": -3.73}, {"name": "医药", "change_pct": -2.22}, {"name": "新能源汽车", "change_pct": -1.31}, {"name": "化学原料药", "change_pct": -2.27}, {"name": "食品安全", "change_pct": -0.52}, {"name": "辅助生殖", "change_pct": -1.28}, {"name": "光刻机（胶）", "change_pct": -2.56}, {"name": "异丙醇", "change_pct": -2.17}, {"name": "新冠病毒防治", "change_pct": -1.18}, {"name": "磷酸铁锂", "change_pct": -1.45}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 69, "hot_rank_chg": 6, "stock_cnt": 5801, "price": "33.40", "change": "-0.77", "market_id": "33", "circulate_market_value": "95526427000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 70, "hot_rank_chg": 6, "stock_cnt": 5801, "price": "137.33", "change": "-4.34", "market_id": "17", "circulate_market_value": "331205470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 71, "hot_rank_chg": 25, "stock_cnt": 5801, "price": "383.77", "change": "-3.75", "market_id": "17", "circulate_market_value": "257401570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 72, "hot_rank_chg": -7, "stock_cnt": 5801, "price": "14.80", "change": "-2.25", "market_id": "33", "circulate_market_value": "47738730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920201", "name": "百瑞吉", "hot_rank": 73, "hot_rank_chg": 1445, "stock_cnt": 5801, "price": "72.35", "change": "331.43", "market_id": "151", "circulate_market_value": "550472590.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 74, "hot_rank_chg": 346, "stock_cnt": 5801, "price": "5.50", "change": "10.00", "market_id": "17", "circulate_market_value": "5329684300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "风电铸件", "xgb_concepts": [{"name": "风电", "change_pct": -0.26}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 75, "hot_rank_chg": -20, "stock_cnt": 5801, "price": "24.38", "change": "-10.00", "market_id": "17", "circulate_market_value": "9776380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002819", "name": "东方中科", "hot_rank": 76, "hot_rank_chg": -10, "stock_cnt": 5801, "price": "26.66", "change": "9.98", "market_id": "33", "circulate_market_value": "6297051600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "网络分析仪"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 77, "hot_rank_chg": -13, "stock_cnt": 5801, "price": "56.20", "change": "-4.13", "market_id": "17", "circulate_market_value": "253070790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600503", "name": "华丽家族", "hot_rank": 78, "hot_rank_chg": -56, "stock_cnt": 5801, "price": "2.65", "change": "-9.86", "market_id": "17", "circulate_market_value": "4246068500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -1.81}, {"name": "石墨烯", "change_pct": -1.6}, {"name": "机器人", "change_pct": -1.15}, {"name": "低价股", "change_pct": -0.91}]}, {"code": "300489", "name": "光智科技", "hot_rank": 79, "hot_rank_chg": 136, "stock_cnt": 5801, "price": "271.15", "change": "2.70", "market_id": "33", "circulate_market_value": "37370552000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 80, "hot_rank_chg": 563, "stock_cnt": 5801, "price": "16.27", "change": "10.01", "market_id": "17", "circulate_market_value": "6816602400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟衬底"}, {"code": "603256", "name": "宏和科技", "hot_rank": 81, "hot_rank_chg": 53, "stock_cnt": 5801, "price": "152.00", "change": "-3.06", "market_id": "17", "circulate_market_value": "137497140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301699", "name": "洛轴股份", "hot_rank": 82, "hot_rank_chg": 645, "stock_cnt": 5801, "price": "35.54", "change": "19.99", "market_id": "33", "circulate_market_value": "2485363700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "航空轴承"}, {"code": "002050", "name": "三花智控", "hot_rank": 83, "hot_rank_chg": 119, "stock_cnt": 5801, "price": "36.08", "change": "0.25", "market_id": "33", "circulate_market_value": "133172903000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 84, "hot_rank_chg": 21, "stock_cnt": 5801, "price": "42.53", "change": "-5.21", "market_id": "17", "circulate_market_value": "62178639000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 85, "hot_rank_chg": 63, "stock_cnt": 5801, "price": "13.15", "change": "-2.74", "market_id": "33", "circulate_market_value": "45734783000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 86, "hot_rank_chg": 4, "stock_cnt": 5801, "price": "105.89", "change": "-5.09", "market_id": "17", "circulate_market_value": "38197001000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 87, "hot_rank_chg": 87, "stock_cnt": 5801, "price": "7.19", "change": "-0.69", "market_id": "17", "circulate_market_value": "17189941000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.37}, {"name": "强势人气股", "change_pct": -2.34}, {"name": "国企改革", "change_pct": -0.87}, {"name": "河南国企改革", "change_pct": -0.18}]}, {"code": "600707", "name": "彩虹股份", "hot_rank": 88, "hot_rank_chg": -30, "stock_cnt": 5801, "price": "9.49", "change": "-3.16", "market_id": "17", "circulate_market_value": "34046986000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -1.8}, {"name": "OLED", "change_pct": -2.49}, {"name": "液晶面板/LCD", "change_pct": -2.18}, {"name": "国企改革", "change_pct": -0.87}, {"name": "玻璃基板封装", "change_pct": -3.11}, {"name": "陕西国企改革", "change_pct": -1.03}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 89, "hot_rank_chg": 8, "stock_cnt": 5801, "price": "7.48", "change": "-0.66", "market_id": "33", "circulate_market_value": "12169913500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.37}, {"name": "电竞", "change_pct": -1.03}, {"name": "手游", "change_pct": -1.08}, {"name": "强势人气股", "change_pct": -2.34}, {"name": "人工智能", "change_pct": -1.3}, {"name": "游戏", "change_pct": -1.01}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.36}, {"name": "腾讯概念股", "change_pct": -1.33}, {"name": "快手概念股", "change_pct": -1.6}, {"name": "元宇宙", "change_pct": -1.6}, {"name": "虚拟数字人", "change_pct": -1.52}, {"name": "东数西算/算力", "change_pct": -1.5}, {"name": "web3.0", "change_pct": -1.14}, {"name": "AIGC概念", "change_pct": -1.6}, {"name": "数据要素", "change_pct": -1.71}, {"name": "字节跳动概念股", "change_pct": -1.53}, {"name": "AI营销", "change_pct": -1.58}, {"name": "ChatGPT", "change_pct": -2.02}, {"name": "智能眼镜/MR头显", "change_pct": -2.24}, {"name": "AI大模型/智能体", "change_pct": -1.39}, {"name": "人形机器人", "change_pct": -1.04}, {"name": "短剧/互动影游", "change_pct": -0.93}, {"name": "多模态", "change_pct": -1.82}, {"name": "AI视频", "change_pct": -1.74}, {"name": "IP经济/谷子经济", "change_pct": -0.76}, {"name": "小红书概念股", "change_pct": -1.45}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 90, "hot_rank_chg": 147, "stock_cnt": 5801, "price": "4.90", "change": "1.87", "market_id": "17", "circulate_market_value": "5970219000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.43}, {"name": "煤炭", "change_pct": 0.37}, {"name": "有色金属", "change_pct": -2.15}, {"name": "国企改革", "change_pct": -0.87}, {"name": "河南国企改革", "change_pct": -0.18}]}, {"code": "603636", "name": "南威软件", "hot_rank": 91, "hot_rank_chg": -56, "stock_cnt": 5801, "price": "7.94", "change": "-9.88", "market_id": "17", "circulate_market_value": "4608062600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -2.05}, {"name": "国产软件", "change_pct": -1.57}, {"name": "蚂蚁集团概念股", "change_pct": -1.47}, {"name": "共享经济", "change_pct": -0.97}, {"name": "人工智能", "change_pct": -1.3}, {"name": "网络安全", "change_pct": -1.64}, {"name": "福建自贸/海西概念", "change_pct": 3.25}, {"name": "智慧停车", "change_pct": -0.95}, {"name": "物联网", "change_pct": -1.05}, {"name": "大数据", "change_pct": -1.43}, {"name": "智慧城市", "change_pct": -0.91}, {"name": "智慧安防", "change_pct": -1.1}, {"name": "数字经济", "change_pct": -1.36}, {"name": "阿里巴巴概念股", "change_pct": -1.32}, {"name": "信创", "change_pct": -1.68}, {"name": "华为昇腾", "change_pct": -1.84}, {"name": "东数西算/算力", "change_pct": -1.5}, {"name": "电子身份证", "change_pct": -2.19}, {"name": "数据要素", "change_pct": -1.71}, {"name": "数字乡村", "change_pct": -0.59}, {"name": "智慧政务", "change_pct": -1.55}, {"name": "华为云·鲲鹏", "change_pct": -1.78}, {"name": "智慧灯杆", "change_pct": -1.24}, {"name": "算电协同", "change_pct": -1.62}, {"name": "华为产业链", "change_pct": -1.67}, {"name": "自贸区", "change_pct": 0.85}, {"name": "AI大模型/智能体", "change_pct": -1.39}, {"name": "智谱AI", "change_pct": -1.62}, {"name": "DeepSeek概念股", "change_pct": -1.51}, {"name": "算力一体机", "change_pct": -1.58}, {"name": "区块链", "change_pct": -1.43}]}, {"code": "920025", "name": "凯达重工", "hot_rank": 92, "hot_rank_chg": -62, "stock_cnt": 5801, "price": "20.30", "change": "-30.00", "market_id": "151", "circulate_market_value": "1035300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 93, "hot_rank_chg": 103, "stock_cnt": 5801, "price": "5.42", "change": "1.31", "market_id": "33", "circulate_market_value": "4147062800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.55}, {"name": "股权转让", "change_pct": -0.98}, {"name": "优化生育（三孩）", "change_pct": -0.62}, {"name": "强势人气股", "change_pct": -2.34}, {"name": "医药商业", "change_pct": -0.37}, {"name": "保健品", "change_pct": -1.74}, {"name": "民营医院", "change_pct": -0.43}, {"name": "医药", "change_pct": -2.22}, {"name": "食品", "change_pct": -1.31}, {"name": "辅助生殖", "change_pct": -1.28}, {"name": "口腔", "change_pct": -0.58}, {"name": "医美", "change_pct": -0.86}, {"name": "新冠病毒防治", "change_pct": -1.18}]}, {"code": "003026", "name": "中晶科技", "hot_rank": 94, "hot_rank_chg": 29, "stock_cnt": 5801, "price": "35.55", "change": "-1.25", "market_id": "33", "circulate_market_value": "5124919300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000756", "name": "新华制药", "hot_rank": 95, "hot_rank_chg": -35, "stock_cnt": 5801, "price": "13.92", "change": "-4.20", "market_id": "33", "circulate_market_value": "6944310900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000981", "name": "山子高科", "hot_rank": 96, "hot_rank_chg": 16, "stock_cnt": 5801, "price": "2.74", "change": "-2.49", "market_id": "33", "circulate_market_value": "26066596000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -2.24}, {"name": "无人驾驶", "change_pct": -1.29}, {"name": "汽车零部件", "change_pct": -0.63}, {"name": "新能源汽车", "change_pct": -1.31}, {"name": "新能源车零部件", "change_pct": -0.77}, {"name": "低价股", "change_pct": -0.91}, {"name": "减速器", "change_pct": -0.47}, {"name": "华为汽车", "change_pct": -1.02}]}, {"code": "000980", "name": "众泰汽车", "hot_rank": 97, "hot_rank_chg": -4, "stock_cnt": 5801, "price": "2.04", "change": "-7.27", "market_id": "33", "circulate_market_value": "10286671100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.34}, {"name": "新能源整车", "change_pct": -0.99}, {"name": "汽车整车", "change_pct": -1.02}, {"name": "新能源汽车", "change_pct": -1.31}, {"name": "低价股", "change_pct": -0.91}]}, {"code": "002202", "name": "金风科技", "hot_rank": 98, "hot_rank_chg": 96, "stock_cnt": 5801, "price": "17.90", "change": "0.39", "market_id": "33", "circulate_market_value": "60208531000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 99, "hot_rank_chg": 130, "stock_cnt": 5801, "price": "17.70", "change": "-0.23", "market_id": "17", "circulate_market_value": "17522290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 100, "hot_rank_chg": -44, "stock_cnt": 5801, "price": "11.20", "change": "-4.44", "market_id": "33", "circulate_market_value": "9929828000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -3.42}, {"name": "手机产业链", "change_pct": -2.21}, {"name": "超高清视频", "change_pct": -1.35}, {"name": "锂电池", "change_pct": -1.92}, {"name": "强势人气股", "change_pct": -2.34}, {"name": "OLED", "change_pct": -2.49}, {"name": "包装印刷", "change_pct": -0.45}, {"name": "光伏", "change_pct": -1.5}, {"name": "新能源汽车", "change_pct": -1.31}, {"name": "小米概念股", "change_pct": -1.99}, {"name": "液晶面板/LCD", "change_pct": -2.18}, {"name": "可降解塑料", "change_pct": -1.32}, {"name": "华为产业链", "change_pct": -1.67}, {"name": "PET复合铜箔", "change_pct": -3.64}]}];
const LIMIT_UP_POOL = [{"code": "600802", "name": "福建水泥", "price": 6.62, "change_pct": 9.97, "reason": "公司为福建省水泥行业的传统龙头企业，是福建地区产能规模最大的水泥制造企业", "plates": ["福建自贸/海西概念"], "limit_up_days": 2, "turnover_ratio": 15.38, "first_limit_up": 1790231053, "break_limit_up_times": 0}, {"code": "002205", "name": "国统股份", "price": 12.78, "change_pct": 9.98, "reason": "中国物流集团旗下，我国大型管道输水工程PCCP骨干供应商之一", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 9.41, "first_limit_up": 1790230632, "break_limit_up_times": 1}, {"code": "002836", "name": "新宏泽", "price": 12.27, "change_pct": 10.04, "reason": "公司主营业务为烟标的设计、生产及销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.67, "first_limit_up": 1790216790, "break_limit_up_times": 0}, {"code": "002679", "name": "福建金森", "price": 11.58, "change_pct": 9.97, "reason": "福建将乐县财政局旗下；公司主营森林经营和管护、造林更新、木材产销，为南方集体林区FSC认证用材林蓄积量最大的国有控股企业", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 10.63, "first_limit_up": 1790232351, "break_limit_up_times": 0}, {"code": "000592", "name": "平潭发展", "price": 8.78, "change_pct": 10.03, "reason": "A股唯一一家注册在平潭岛的上市公司，公司拥有90万亩林地，受益林业碳汇交易发展", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 17.01, "first_limit_up": 1790231022, "break_limit_up_times": 0}, {"code": "601811", "name": "新华文轩", "price": 20.35, "change_pct": 10.0, "reason": "四川省出版传媒行业龙头，省内义务教育阶段学生教科书唯一供货方", "plates": ["传媒"], "limit_up_days": 5, "turnover_ratio": 1.57, "first_limit_up": 1790213405, "break_limit_up_times": 0}, {"code": "300300", "name": "海峡创新", "price": 10.81, "change_pct": 19.98, "reason": "公司实控人为平潭国资委，是平潭国资控股的唯一上市公司", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 24.26, "first_limit_up": 1790231043, "break_limit_up_times": 2}, {"code": "002622", "name": "皓宸医疗", "price": 2.72, "change_pct": 10.12, "reason": "公司主营口腔医疗服务与永磁开关及高低压成套设备的研产销，汇垠日丰将成为的第一大股东", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.28, "first_limit_up": 1790213802, "break_limit_up_times": 0}, {"code": "301311", "name": "昆船智能", "price": 17.98, "change_pct": 20.03, "reason": "大股东为中国船舶集团，公司主要从事智能物流、智能产线方面及相关产品设计\n", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 14.1, "first_limit_up": 1790229756, "break_limit_up_times": 1}, {"code": "002238", "name": "天威视讯", "price": 8.43, "change_pct": 10.05, "reason": "1、公司在现有融合业务基础上,融合AI大模型技术,推出了电视AI语音数字人、智能客服等创新服务,优化业务的用户体验,提升客户服务效率;同时通过构建AI运维智能体,逐步向AI驱动的智能化运维体系转型；\n2、公司数据中心业务主要涵盖机柜托管、服务器租用、网络资源租用以及为客户提供定制化解决方案等服务内容。\n3、公司是深圳地区最主要的电视服务提供商，数字电视服务市占率第一", "plates": ["传媒"], "limit_up_days": 3, "turnover_ratio": 10.82, "first_limit_up": 1790213436, "break_limit_up_times": 3}, {"code": "000678", "name": "襄阳轴承", "price": 9.68, "change_pct": 10.0, "reason": "1、公司是湖北省军民融合企业，根据2024年报东风公司的军车轴承一直指定公司独家供应；\n2、公司主营汽车用减速器用圆锥轴承、球轴承等，公告称暂无机器人轴承的市场应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.8, "first_limit_up": 1790213820, "break_limit_up_times": 0}, {"code": "600843", "name": "上工申贝", "price": 8.37, "change_pct": 9.99, "reason": "公司计划2026年集中资源攻坚碳纤维轻型运动飞机等新项目的国产化与量产，完成MOSAIC轻型飞机研发并启动生产，实现首架两座水陆两栖轻型运动飞机的国产化落地，并启动电动三座飞机的开发工作", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 12.08, "first_limit_up": 1790215488, "break_limit_up_times": 0}, {"code": "600189", "name": "泉阳泉", "price": 9.1, "change_pct": 10.04, "reason": "吉林省市场占有率第一的饮用水品牌，推出白桦树汁等产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.38, "first_limit_up": 1790217331, "break_limit_up_times": 1}, {"code": "600358", "name": "国旅联合", "price": 5.72, "change_pct": 10.0, "reason": "实控人江西省国资委；公司子公司国旅户外、南京国旅联合旅行社是个性化旅行综合服务业务的经营主体，主要业务内容包括水上旅游业态运营、俱乐部会员出行服务、主题定制旅游、旅游资源集采等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.83, "first_limit_up": 1790214193, "break_limit_up_times": 7}, {"code": "002164", "name": "宁波东力", "price": 13.06, "change_pct": 10.03, "reason": "公司的产品包括行星减速器等，杭州湾电机、减速器部分车间已投入生产；同时拟实施年产52万台电机及减速机项目", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.93, "first_limit_up": 1790214630, "break_limit_up_times": 6}, {"code": "603065", "name": "宿迁联盛", "price": 16.27, "change_pct": 10.01, "reason": "公司拟设立合资公司开展磷化铟衬底业务，预计二期产能40万片/年", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 10.6, "first_limit_up": 1790215128, "break_limit_up_times": 2}, {"code": "603042", "name": "华脉科技", "price": 18.73, "change_pct": 9.98, "reason": "1、信息通信网络基础设施解决方案提供商，实控人拟协议转让5.27%股份；\n2、公司主要产品覆盖了从局端OLT到用户端ONU的全系列ODN及无线通信网络建设产品，包括ODN物理连接及保护设备、光无源器件、光缆等光通信产品及微波无源器件、POI多路接入等无线通信网络建设产品", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 27.66, "first_limit_up": 1790217789, "break_limit_up_times": 1}, {"code": "603500", "name": "祥和实业", "price": 10.42, "change_pct": 10.03, "reason": "公司在电子元器件配件方面，紧跟铝电解电容器技术迭代，已成功开发应用于超级电容、锂电池等领域的电容器用橡胶密封塞等产品；国内主要客户包括江海股份、艾华集团等知名电容器公司", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.19, "first_limit_up": 1790213523, "break_limit_up_times": 1}, {"code": "002909", "name": "集泰股份", "price": 8.29, "change_pct": 9.95, "reason": "公司当前研发的液冷导热硅油，其应用主要聚焦于数据中心及储能领域的热管理解决方案", "plates": ["液冷服务器"], "limit_up_days": 2, "turnover_ratio": 19.86, "first_limit_up": 1790213739, "break_limit_up_times": 2}, {"code": "600792", "name": "云煤能源", "price": 5.7, "change_pct": 10.04, "reason": "云南省大型的焦炭生产与焦化工企业之一；旗下拥有焦炉气制甲醇，产能10万吨/年", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 16.42, "first_limit_up": 1790213994, "break_limit_up_times": 1}, {"code": "000753", "name": "漳州发展", "price": 5.35, "change_pct": 10.08, "reason": "实控人漳州国资委；公司新能源板块加大光伏项目投资，新能源板块累计并网发电项目装机容量约为30MW；公司旗下新能源投资公司与一道新能源（衢州） 公司合作参股20%的一道新能源科技（漳州） 有限公司东山光伏组件项目年产能约4.55GW", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 8.73, "first_limit_up": 1790231988, "break_limit_up_times": 0}, {"code": "002614", "name": "奥佳华", "price": 8.33, "change_pct": 10.04, "reason": "1、公司是全国最大的养老按摩器材生产制造服务商，实控人联合自然人股东折价转让10%股份；\n2、旗下AI按摩机器人运用了语音交互、人脸识别、智能生理参数检测等技术，还接入DeepSeek，打造健康生态AI大模型", "plates": ["股权转让"], "limit_up_days": 4, "turnover_ratio": 12.99, "first_limit_up": 1790213457, "break_limit_up_times": 1}, {"code": "002119", "name": "康强电子", "price": 29.61, "change_pct": 9.99, "reason": "公司主营引线框架、键合丝等半导体封装材料", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 30.86, "first_limit_up": 1790213595, "break_limit_up_times": 1}, {"code": "001234", "name": "泰慕士", "price": 35.4, "change_pct": 10.01, "reason": "公司出口占比约30%，主营业务为针织面料与针织服装的研产销，主要产品可以分为运动服装、休闲服装及儿童服装，为迪卡侬、森马服饰、Quiksilver、Kappa、佐丹奴、全棉时代等知名服装品牌提供贴牌加工服务，目前与安踏合作的产品主要是运动服装和儿童服装", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 2.48, "first_limit_up": 1790213100, "break_limit_up_times": 0}, {"code": "603396", "name": "金辰股份", "price": 35.64, "change_pct": 10.0, "reason": "公司为全球光伏组件设备龙头，拟投资约10亿元建设半导体装备研发及制造项目，布局TGV玻璃基封装等设备", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 7.97, "first_limit_up": 1790213663, "break_limit_up_times": 1}, {"code": "000498", "name": "山东路桥", "price": 5.65, "change_pct": 9.92, "reason": "区域性路桥工程企业，主营路桥工程施工与养护施工，控股股东及一致行动人拟4.5亿至9亿元增持公司股份", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.84, "first_limit_up": 1790213100, "break_limit_up_times": 1}, {"code": "603949", "name": "雪龙集团", "price": 16.9, "change_pct": 10.03, "reason": "公司对深创投中小企业发展基金（新疆）有限合伙企业的持股比例为0.7239%，后者持有杭州宇树科技有限公司1.3546%股份", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 2.12, "first_limit_up": 1790213401, "break_limit_up_times": 0}, {"code": "000710", "name": "贝瑞基因", "price": 11.01, "change_pct": 9.99, "reason": "公司自主研发了 NLPearl 遗传疾病人工智能临床决策支持系统、CNVisi 智能报告解读系统，为科研和临床工作者提供智能决策支持", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.46, "first_limit_up": 1790213547, "break_limit_up_times": 0}, {"code": "600825", "name": "新华传媒", "price": 7.77, "change_pct": 10.06, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组", "传媒"], "limit_up_days": 4, "turnover_ratio": 0.57, "first_limit_up": 1790213100, "break_limit_up_times": 0}, {"code": "601567", "name": "三星电气", "price": 16.25, "change_pct": 10.02, "reason": "全资子公司中标美国数据中心1.32亿美元储能油变项目", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 0.91, "first_limit_up": 1790213100, "break_limit_up_times": 0}, {"code": "688682", "name": "霍莱沃", "price": 37.94, "change_pct": 19.99, "reason": "公司面向卫星的电磁测量系统业务（包括相控阵校准测量系统及射频测量系统）在今年实现订单的快速增长", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 5.87, "first_limit_up": 1790213976, "break_limit_up_times": 2}, {"code": "000905", "name": "厦门港务", "price": 9.81, "change_pct": 9.98, "reason": "实控人厦门国资委，主营港口业务，厦门最大的港口码头运营商，公司的业务受益于海西自贸区的发展", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 5.63, "first_limit_up": 1790231940, "break_limit_up_times": 0}, {"code": "000850", "name": "华茂股份", "price": 5.12, "change_pct": 10.11, "reason": "安庆市地方国企，主要从事混纺纱线、面料、产业用纺织品等棉纺产品的生产、销售", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 1.45, "first_limit_up": 1790213100, "break_limit_up_times": 0}, {"code": "301699", "name": "洛轴股份", "price": 35.54, "change_pct": 19.99, "reason": "1、公司围绕国产机器人产业发展需求，开展相关产品研发，并参与起草国内工业机器人轴承国家标准，其中RV减速器轴承、机械臂轴承、滚珠丝杠等产品处于小批量供货阶段；\n2、公司可研制生产600千瓦至20兆瓦以上风电轴承，20兆瓦级海上风电主轴轴承获河南省首台套认定", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 36.9, "first_limit_up": 1790214138, "break_limit_up_times": 1}, {"code": "603122", "name": "合富中国", "price": 14.93, "change_pct": 10.02, "reason": "公司为唯一一家海峡两岸市场“双上市”的医疗企业，其母公司合富医疗控股在台湾上市，公司实际控制人为台湾企业家王琼芝，在两岸医疗流通领域有深度合作", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 18.98, "first_limit_up": 1790232494, "break_limit_up_times": 1}, {"code": "002029", "name": "七 匹 狼", "price": 9.26, "change_pct": 9.98, "reason": "公司位于福建省晋江市，中国男装品牌的领先企业之一，控股股东持有沐曦集成股份比例0.39%", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 9.35, "first_limit_up": 1790213850, "break_limit_up_times": 4}, {"code": "603230", "name": "内蒙新华", "price": 18.47, "change_pct": 10.01, "reason": "公司是内蒙古规模最大的出版物发行企业，明确以教育服务、文化消费、现代物流为核心，向综合文化服务商转型，提供阅读空间设计、阅读活动策划及阅读课程开发等服务", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 20.42, "first_limit_up": 1790213675, "break_limit_up_times": 6}, {"code": "600815", "name": "厦工股份", "price": 4.65, "change_pct": 9.93, "reason": "实控人厦门国资委，中国最大的工程机械制造基地之一", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 16.7, "first_limit_up": 1790215124, "break_limit_up_times": 3}, {"code": "002264", "name": "新 华 都", "price": 8.13, "change_pct": 10.01, "reason": "福建公司；公司为白酒电商龙头，电商代运营服务的品牌有金佰利、伊利、美加净、芳芯、碧缇丝、家安等，进行全渠道销售代理的品牌有泸州老窖、汾酒、五粮液、郎酒、水井坊、古井贡酒、青岛啤酒等", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 14.79, "first_limit_up": 1790232624, "break_limit_up_times": 0}, {"code": "603375", "name": "盛景微", "price": 49.25, "change_pct": 10.01, "reason": "公司是一家具备高性能、超低功耗芯片设计能力的企业，依托自研数模混合芯片开发电子控制模块，其子公司上海先积集成电路在精密放大器等芯片领域有技术突破，产品应用于汽车、扫地机器人等领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 11.59, "first_limit_up": 1790228531, "break_limit_up_times": 0}, {"code": "002395", "name": "双象股份", "price": 14.05, "change_pct": 10.02, "reason": "1、公司光学级PMMA材料可应用于光学仪器、光学镜片等领域；\n2、公司生产的足球革主要用于训练用球、校园用球、礼品球等", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.24, "first_limit_up": 1790213715, "break_limit_up_times": 1}, {"code": "603767", "name": "中马传动", "price": 14.74, "change_pct": 10.0, "reason": "公司减速器应用于新能源汽车，表示目前未涉足机器人行业", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.49, "first_limit_up": 1790214030, "break_limit_up_times": 1}, {"code": "603970", "name": "中农立华", "price": 12.17, "change_pct": 10.04, "reason": "完整承继中农集团平台资源，是我国农药流通的主要渠道之一；主营农药流通及植保技术服务，销售农药原药、制剂及相关产品，面向种植户提供作物健康解决方案；为国际领先农药企业提供代理，具备行业领先的产品资源优势", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 2.84, "first_limit_up": 1790229371, "break_limit_up_times": 0}, {"code": "301689", "name": "电科思仪", "price": 83.88, "change_pct": 20.0, "reason": "公司研发生产的太赫兹矢量网络分析仪、信号发生器、频谱分析仪等系列化测试仪器，成果已应用于半导体测试、航空航天、通信等领域", "plates": ["仪器仪表"], "limit_up_days": 1, "turnover_ratio": 56.71, "first_limit_up": 1790228427, "break_limit_up_times": 2}, {"code": "002413", "name": "雷科防务", "price": 8.97, "change_pct": 10.06, "reason": "1、公司具备国家认证的从事军工产品研发和生产所需的资质，在雷达系统、卫星应用、智能控制、安全存储等业务方向的产品可广泛应用于国防军工领域；\n2、公司卫星应用方向的遥感业务和公司的微波元器件相关产品可应用于商业航天领域", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 17.21, "first_limit_up": 1790213517, "break_limit_up_times": 2}, {"code": "603278", "name": "大业股份", "price": 9.8, "change_pct": 9.99, "reason": "1、公司人形机器人灵巧手用钢丝尚处于市场调研和研究开发阶段；\n2、公司投资联营企业湖北三江航天江北机械工程主要从事航天动力系统、天线罩等航天型号产品及特种压力容器产品、高端机电成套装备、先进激光应用设备等民用产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.71, "first_limit_up": 1790213874, "break_limit_up_times": 1}, {"code": "605018", "name": "长华集团", "price": 12.74, "change_pct": 10.02, "reason": "汽车金属零部件供应商；公司拓展人形机器人用行星滚柱丝杠，产品精度为C5级并向C3级提升，规划新生产线预计2026年三季度建成", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.63, "first_limit_up": 1790214405, "break_limit_up_times": 0}, {"code": "601218", "name": "吉鑫科技", "price": 5.5, "change_pct": 10.0, "reason": "国内起步最早的生产大型风电铸件的企业，表示更大兆瓦级的海上风机也正在开发中", "plates": ["风电"], "limit_up_days": 1, "turnover_ratio": 15.24, "first_limit_up": 1790215341, "break_limit_up_times": 1}, {"code": "000790", "name": "华神科技", "price": 4.68, "change_pct": 10.12, "reason": "1、公司拥有三七通舒胶囊、鼻渊舒口服液、活力苏口服液等26个药品注册生产品种；\n2、在合成生物领域，力争建立以合成生物及绿色化学合成为核心的新业务赛道增长极，巩固和增强公司产业竞争力", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.41, "first_limit_up": 1790213619, "break_limit_up_times": 0}, {"code": "002819", "name": "东方中科", "price": 26.66, "change_pct": 9.98, "reason": "1、电子测试测量领域领先的综合服务商；公司为党政机关、大型国有企业提供计算机网络系统、网络安全系统以及电子政务应用系统的规划、设计、实施、运维、技术支持等全面服务；\n2、控股子公司北汇信息2024年已中标中国一汽“脑机接口测试技术采购”项目，可提供自动驾驶互动测试验证等仿真系统", "plates": ["仪器仪表"], "limit_up_days": 2, "turnover_ratio": 7.88, "first_limit_up": 1790213406, "break_limit_up_times": 2}, {"code": "002321", "name": "华英农业", "price": 2.27, "change_pct": 10.19, "reason": "公司聚焦鸭产业，深耕食品与羽绒两大产业链，覆盖种鸭养殖、孵化、商品鸭饲养、禽苗销售、饲料生产、屠宰加工、冻品销售、熟食及预制菜、羽绒加工与销售等全环节", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.34, "first_limit_up": 1790213421, "break_limit_up_times": 0}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};