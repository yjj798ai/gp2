const UPDATE_TIME = "2026-08-06 02:08";
const THS_HOT = [
  {
    "name": "黄金概念",
    "rise": 1.9,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "创新药",
    "rise": -0.53,
    "rate": 0,
    "tag": "",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": 0.67,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "无人驾驶",
    "rise": 0.62,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "智能驾驶ETF",
    "code": "885736"
  },
  {
    "name": "MLCC概念",
    "rise": 1.22,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.48,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续264天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": 1.4,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续217天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "算力租赁",
    "rise": 0.57,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续128天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "PCB概念",
    "rise": 1.65,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "小金属概念",
    "rise": 1.49,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "有色ETF",
    "code": "885552"
  },
  {
    "name": "商业航天",
    "rise": 1.06,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续193天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 0.61,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续428天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": 0.54,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续95天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "稀土永磁",
    "rise": 1.88,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "金属铜",
    "rise": 1.35,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "有色ETF",
    "code": "885973"
  },
  {
    "name": "中船系",
    "rise": 2.51,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "军工ETF",
    "code": "885860"
  },
  {
    "name": "无人机",
    "rise": 0.74,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "航空航天ETF",
    "code": "885564"
  },
  {
    "name": "光纤概念",
    "rise": 0.99,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续93天上榜",
    "rankChg": 0,
    "etfName": "易方达科顺定开",
    "code": "886084"
  },
  {
    "name": "金属铅",
    "rise": 2.27,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 2,
    "etfName": "有色金属ETF",
    "code": "885971"
  },
  {
    "name": "CRO概念",
    "rise": 0.23,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  }
];
const THS_EVENTS = [
  {
    "title": "黄金继续上攻！美国财政部长贝森特表示，现阶段美联储没必要加息",
    "desc": "",
    "heat": 366431,
    "direction": "黄金",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "金一文化",
        "code": "002721",
        "chg": 10.11236
      }
    ]
  },
  {
    "title": "朱雀三号遥二可回收火箭发射在即",
    "desc": "",
    "heat": 248351,
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
        "name": "武汉凡谷",
        "code": "002194",
        "chg": 10.032715
      }
    ]
  },
  {
    "title": "MLCC产业链“涨”声不断 产品销量快速增长",
    "desc": "",
    "heat": 200635,
    "direction": "MLCC",
    "themes": [
      "MLCC概念"
    ],
    "stocks": [
      {
        "name": "博杰股份",
        "code": "002975",
        "chg": 9.998818
      }
    ]
  },
  {
    "title": "传DeepSeek重启第二轮融资 拟募资500亿元 投前估值或达5000亿元",
    "desc": "",
    "heat": 148080,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "创识科技",
        "code": "300941",
        "chg": 13.180901
      }
    ]
  },
  {
    "title": "商务部宣布加强无人机相关两用物项对美国出口管制",
    "desc": "",
    "heat": 133319,
    "direction": "对美反制",
    "themes": [
      "无人机",
      "金属铟",
      "打印复印设备"
    ],
    "stocks": [
      {
        "name": "锴威特",
        "code": "688693",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "宇树科技8月7日网上路演 定价与估值受关注",
    "desc": "",
    "heat": 100400,
    "direction": "宇树机器人",
    "themes": [
      "宇树科技",
      "人形机器人",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "谱尼测试",
        "code": "300887",
        "chg": 13.013699
      }
    ]
  },
  {
    "title": "沈腾新片《欢迎来龙餐馆》官宣定档8月11日",
    "desc": "",
    "heat": 176,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "北京文化",
        "code": "000802",
        "chg": 1.869159
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄金",
    "change": "+4.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+4.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+3.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+3.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+3.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+3.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+3.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+3.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+2.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+2.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+2.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+2.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+2.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "稀土磁材",
    "change": "+2.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "数字人民币",
    "change": "+2.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+2.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+2.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+2.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "毫米波通信",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子身份证",
    "change": "+2.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 2,
    "hot_rank_chg": 3,
    "stock_cnt": 5866,
    "price": "11.50",
    "change": "-1.96",
    "market_id": "33",
    "circulate_market_value": "3271538500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 0.32
      },
      {
        "name": "密集调研",
        "change_pct": 0.62
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.57
      },
      {
        "name": "强势人气股",
        "change_pct": 0.82
      },
      {
        "name": "教育",
        "change_pct": -0.68
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.29
      },
      {
        "name": "职业教育",
        "change_pct": -0.41
      },
      {
        "name": "在线教育",
        "change_pct": -0.77
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.06
      },
      {
        "name": "华为产业链",
        "change_pct": 0.77
      },
      {
        "name": "智谱AI",
        "change_pct": 0.34
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 12,
    "hot_rank_chg": 1,
    "stock_cnt": 5866,
    "price": "6.52",
    "change": "-3.69",
    "market_id": "17",
    "circulate_market_value": "16420684000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.18
      },
      {
        "name": "工业大麻",
        "change_pct": -0.08
      },
      {
        "name": "中药",
        "change_pct": -0.73
      },
      {
        "name": "强势人气股",
        "change_pct": 0.82
      },
      {
        "name": "保健品",
        "change_pct": -0.6
      },
      {
        "name": "民营医院",
        "change_pct": -0.59
      },
      {
        "name": "医药",
        "change_pct": -0.53
      },
      {
        "name": "化学原料药",
        "change_pct": -0.47
      },
      {
        "name": "流感",
        "change_pct": -0.27
      },
      {
        "name": "振兴东北",
        "change_pct": -0.21
      },
      {
        "name": "食品",
        "change_pct": -0.54
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 20,
    "hot_rank_chg": 5,
    "stock_cnt": 5866,
    "price": "3.10",
    "change": "-2.21",
    "market_id": "33",
    "circulate_market_value": "29491404000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 1.14
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.48
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.09
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.05
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.17
      },
      {
        "name": "减速器",
        "change_pct": -0.03
      },
      {
        "name": "华为汽车",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 23,
    "hot_rank_chg": -13,
    "stock_cnt": 5866,
    "price": "5.53",
    "change": "-2.47",
    "market_id": "33",
    "circulate_market_value": "32377035000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.14
      },
      {
        "name": "人工智能",
        "change_pct": 0.8
      },
      {
        "name": "水利",
        "change_pct": 0.4
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.58
      },
      {
        "name": "大数据",
        "change_pct": 0.83
      },
      {
        "name": "园林",
        "change_pct": 0.36
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.62
      },
      {
        "name": "数字经济",
        "change_pct": 0.81
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.64
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.22
      },
      {
        "name": "第三代半导体",
        "change_pct": 1.29
      },
      {
        "name": "快手概念股",
        "change_pct": 0.56
      },
      {
        "name": "IGBT",
        "change_pct": 0.13
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.57
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.43
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.48
      },
      {
        "name": "氮化镓",
        "change_pct": 0.99
      },
      {
        "name": "AI营销",
        "change_pct": 0.24
      },
      {
        "name": "多模态",
        "change_pct": 0.58
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.84
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.16
      },
      {
        "name": "区块链",
        "change_pct": 0.89
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 30,
    "hot_rank_chg": 12,
    "stock_cnt": 5866,
    "price": "7.16",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "8153502300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "特高压",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.26
      },
      {
        "name": "光伏",
        "change_pct": 0.06
      },
      {
        "name": "特高压",
        "change_pct": -0.28
      },
      {
        "name": "智能电网",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 36,
    "hot_rank_chg": -18,
    "stock_cnt": 5866,
    "price": "5.90",
    "change": "-1.34",
    "market_id": "33",
    "circulate_market_value": "208312420000.00",
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
        "change_pct": 1.07
      },
      {
        "name": "超高清视频",
        "change_pct": 0.42
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.21
      },
      {
        "name": "电竞",
        "change_pct": 0.52
      },
      {
        "name": "半导体",
        "change_pct": 1.36
      },
      {
        "name": "人工智能",
        "change_pct": 0.86
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.05
      },
      {
        "name": "VR&AR",
        "change_pct": 1.02
      },
      {
        "name": "OLED",
        "change_pct": 1.1
      },
      {
        "name": "京津冀",
        "change_pct": -0.14
      },
      {
        "name": "物联网",
        "change_pct": 1.09
      },
      {
        "name": "指纹识别",
        "change_pct": 1.44
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.18
      },
      {
        "name": "白马股",
        "change_pct": -0.54
      },
      {
        "name": "智能制造",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.77
      },
      {
        "name": "国产芯片",
        "change_pct": 1.06
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.03
      },
      {
        "name": "全息概念",
        "change_pct": 0.96
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.31
      },
      {
        "name": "MicroLED",
        "change_pct": 1.13
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.35
      },
      {
        "name": "智能手表",
        "change_pct": 0.93
      },
      {
        "name": "MiniLED",
        "change_pct": 1.56
      },
      {
        "name": "传感器",
        "change_pct": 0.54
      },
      {
        "name": "大硅片",
        "change_pct": 2.01
      },
      {
        "name": "AI PC",
        "change_pct": 0.76
      },
      {
        "name": "华为产业链",
        "change_pct": 0.87
      },
      {
        "name": "回购",
        "change_pct": -0.28
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.85
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.75
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 37,
    "hot_rank_chg": -15,
    "stock_cnt": 5866,
    "price": "8.03",
    "change": "1.39",
    "market_id": "33",
    "circulate_market_value": "13054321000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.17
      },
      {
        "name": "电竞",
        "change_pct": 0.52
      },
      {
        "name": "手游",
        "change_pct": 0.26
      },
      {
        "name": "强势人气股",
        "change_pct": 0.92
      },
      {
        "name": "人工智能",
        "change_pct": 0.86
      },
      {
        "name": "游戏",
        "change_pct": 0.62
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.83
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.68
      },
      {
        "name": "快手概念股",
        "change_pct": 0.62
      },
      {
        "name": "元宇宙",
        "change_pct": 0.36
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.59
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.33
      },
      {
        "name": "web3.0",
        "change_pct": 0.79
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.49
      },
      {
        "name": "数据要素",
        "change_pct": 0.94
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.52
      },
      {
        "name": "AI营销",
        "change_pct": 0.24
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.69
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.85
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.45
      },
      {
        "name": "人形机器人",
        "change_pct": 0.87
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.14
      },
      {
        "name": "多模态",
        "change_pct": 0.58
      },
      {
        "name": "AI视频",
        "change_pct": 0.15
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.41
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 41,
    "hot_rank_chg": 6,
    "stock_cnt": 5866,
    "price": "4.83",
    "change": "2.98",
    "market_id": "17",
    "circulate_market_value": "7550818000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 0.58
      },
      {
        "name": "共享经济",
        "change_pct": -0.19
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.51
      },
      {
        "name": "旅游",
        "change_pct": 0.15
      },
      {
        "name": "物业管理",
        "change_pct": -0.11
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 45,
    "hot_rank_chg": 25,
    "stock_cnt": 5866,
    "price": "8.94",
    "change": "1.94",
    "market_id": "33",
    "circulate_market_value": "20762933000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 4.98
      },
      {
        "name": "有色 · 铜",
        "change_pct": 1.57
      },
      {
        "name": "有色 · 锑",
        "change_pct": 3.32
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.02
      },
      {
        "name": "有色 · 锌",
        "change_pct": 2.74
      },
      {
        "name": "有色金属",
        "change_pct": 1.09
      },
      {
        "name": "国企改革",
        "change_pct": 0.02
      },
      {
        "name": "白银",
        "change_pct": 3.32
      }
    ]
  },
  {
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 46,
    "hot_rank_chg": 26,
    "stock_cnt": 5866,
    "price": "6.72",
    "change": "0.90",
    "market_id": "33",
    "circulate_market_value": "74992320000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 4.98
      },
      {
        "name": "锂电池",
        "change_pct": 0.21
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.12
      },
      {
        "name": "有色 · 铜",
        "change_pct": 1.57
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.92
      },
      {
        "name": "有色金属",
        "change_pct": 1.09
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.16
      },
      {
        "name": "人民币升值受益",
        "change_pct": -0.21
      },
      {
        "name": "硫酸",
        "change_pct": 1.38
      },
      {
        "name": "国企改革",
        "change_pct": 0.02
      },
      {
        "name": "白银",
        "change_pct": 3.32
      },
      {
        "name": "有色 · 镍",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "002036",
    "name": "联创电子",
    "hot_rank": 47,
    "hot_rank_chg": 62,
    "stock_cnt": 5866,
    "price": "7.55",
    "change": "-3.21",
    "market_id": "33",
    "circulate_market_value": "7968781700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": -0.67
      },
      {
        "name": "折叠屏",
        "change_pct": 1.55
      },
      {
        "name": "手机产业链",
        "change_pct": 1.07
      },
      {
        "name": "超高清视频",
        "change_pct": 0.42
      },
      {
        "name": "无线充电",
        "change_pct": 0.53
      },
      {
        "name": "特斯拉",
        "change_pct": 0.2
      },
      {
        "name": "股权转让",
        "change_pct": 0.52
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.58
      },
      {
        "name": "VR&AR",
        "change_pct": 1.02
      },
      {
        "name": "OLED",
        "change_pct": 1.1
      },
      {
        "name": "3D感应",
        "change_pct": 0.66
      },
      {
        "name": "人脸识别",
        "change_pct": 1.36
      },
      {
        "name": "3D玻璃",
        "change_pct": 1.11
      },
      {
        "name": "指纹识别",
        "change_pct": 1.44
      },
      {
        "name": "手势识别",
        "change_pct": 0.24
      },
      {
        "name": "虹膜识别",
        "change_pct": 1.05
      },
      {
        "name": "机器视觉",
        "change_pct": 1.2
      },
      {
        "name": "无人机",
        "change_pct": 1.0
      },
      {
        "name": "智能制造",
        "change_pct": 0.85
      },
      {
        "name": "国产芯片",
        "change_pct": 1.06
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.03
      },
      {
        "name": "激光雷达",
        "change_pct": 1.01
      },
      {
        "name": "元宇宙",
        "change_pct": 0.36
      },
      {
        "name": "电子后视镜",
        "change_pct": 0.58
      },
      {
        "name": "无线耳机",
        "change_pct": 0.56
      },
      {
        "name": "云游戏",
        "change_pct": 0.02
      },
      {
        "name": "AI PC",
        "change_pct": 0.76
      },
      {
        "name": "国资入股",
        "change_pct": 0.2
      },
      {
        "name": "华为产业链",
        "change_pct": 0.87
      },
      {
        "name": "毫米波雷达",
        "change_pct": 1.6
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.85
      },
      {
        "name": "英伟达概念",
        "change_pct": 1.1
      },
      {
        "name": "人形机器人",
        "change_pct": 0.87
      },
      {
        "name": "智能座舱",
        "change_pct": 0.62
      },
      {
        "name": "AI手机",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 50,
    "hot_rank_chg": -17,
    "stock_cnt": 5866,
    "price": "12.84",
    "change": "-5.17",
    "market_id": "33",
    "circulate_market_value": "11974541600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.92
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.14
      },
      {
        "name": "新疆概念",
        "change_pct": 0.56
      },
      {
        "name": "光伏",
        "change_pct": 0.06
      },
      {
        "name": "风电",
        "change_pct": -0.07
      },
      {
        "name": "储能",
        "change_pct": -0.21
      },
      {
        "name": "国企改革",
        "change_pct": 0.02
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 58,
    "hot_rank_chg": 5,
    "stock_cnt": 5866,
    "price": "9.26",
    "change": "6.32",
    "market_id": "17",
    "circulate_market_value": "3560911100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.52
      },
      {
        "name": "股权转让",
        "change_pct": 0.52
      },
      {
        "name": "新疆概念",
        "change_pct": 0.56
      },
      {
        "name": "医药",
        "change_pct": -0.49
      },
      {
        "name": "流感",
        "change_pct": -0.25
      },
      {
        "name": "国资入股",
        "change_pct": 0.2
      },
      {
        "name": "减肥药",
        "change_pct": -0.53
      }
    ]
  },
  {
    "code": "000751",
    "name": "锌业股份",
    "hot_rank": 60,
    "hot_rank_chg": 50,
    "stock_cnt": 5866,
    "price": "5.34",
    "change": "4.10",
    "market_id": "33",
    "circulate_market_value": "8611308300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铜",
        "change_pct": 1.57
      },
      {
        "name": "有色 · 锌",
        "change_pct": 2.74
      },
      {
        "name": "有色金属",
        "change_pct": 1.09
      },
      {
        "name": "硫酸",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 61,
    "hot_rank_chg": 19,
    "stock_cnt": 5866,
    "price": "6.30",
    "change": "-5.55",
    "market_id": "33",
    "circulate_market_value": "7173535100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 0.59
      },
      {
        "name": "强势人气股",
        "change_pct": 0.92
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.5
      },
      {
        "name": "航母",
        "change_pct": 0.12
      },
      {
        "name": "光伏",
        "change_pct": 0.06
      },
      {
        "name": "风电",
        "change_pct": -0.07
      },
      {
        "name": "军工",
        "change_pct": 0.83
      },
      {
        "name": "机器人",
        "change_pct": 0.73
      },
      {
        "name": "储能",
        "change_pct": -0.21
      },
      {
        "name": "国企改革",
        "change_pct": 0.02
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 66,
    "hot_rank_chg": -7,
    "stock_cnt": 5866,
    "price": "11.67",
    "change": "4.01",
    "market_id": "17",
    "circulate_market_value": "14974928000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 0.92
      },
      {
        "name": "智能制造",
        "change_pct": 0.85
      },
      {
        "name": "工业互联网",
        "change_pct": 0.49
      },
      {
        "name": "培育钻石",
        "change_pct": 1.71
      },
      {
        "name": "金刚线",
        "change_pct": 2.38
      },
      {
        "name": "国资入股",
        "change_pct": 0.2
      },
      {
        "name": "深地经济",
        "change_pct": 0.81
      }
    ]
  },
  {
    "code": "002607",
    "name": "中公教育",
    "hot_rank": 68,
    "hot_rank_chg": -38,
    "stock_cnt": 5866,
    "price": "2.21",
    "change": "-5.96",
    "market_id": "33",
    "circulate_market_value": "12251002900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.86
      },
      {
        "name": "教育",
        "change_pct": -0.74
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.33
      },
      {
        "name": "低价股",
        "change_pct": -0.47
      },
      {
        "name": "职业教育",
        "change_pct": -0.4
      },
      {
        "name": "在线教育",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 70,
    "hot_rank_chg": -20,
    "stock_cnt": 5866,
    "price": "12.13",
    "change": "-4.49",
    "market_id": "33",
    "circulate_market_value": "8307866100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.04
      },
      {
        "name": "核电",
        "change_pct": 0.08
      },
      {
        "name": "强势人气股",
        "change_pct": 0.92
      },
      {
        "name": "充电桩",
        "change_pct": -0.0
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.51
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.16
      },
      {
        "name": "储能",
        "change_pct": -0.21
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.33
      },
      {
        "name": "智能电网",
        "change_pct": 0.17
      },
      {
        "name": "核聚变",
        "change_pct": -0.31
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 77,
    "hot_rank_chg": 1,
    "stock_cnt": 5866,
    "price": "3.82",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "3515110200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "游戏IP",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.26
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.59
      },
      {
        "name": "人工智能",
        "change_pct": 0.86
      },
      {
        "name": "VR&AR",
        "change_pct": 1.02
      },
      {
        "name": "游戏",
        "change_pct": 0.62
      },
      {
        "name": "动漫",
        "change_pct": 0.38
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.68
      },
      {
        "name": "快手概念股",
        "change_pct": 0.62
      },
      {
        "name": "NFT",
        "change_pct": 0.06
      },
      {
        "name": "元宇宙",
        "change_pct": 0.36
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.59
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.52
      },
      {
        "name": "云游戏",
        "change_pct": 0.02
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.41
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 81,
    "hot_rank_chg": 4,
    "stock_cnt": 5866,
    "price": "11.99",
    "change": "5.08",
    "market_id": "33",
    "circulate_market_value": "9700137700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.55
      },
      {
        "name": "大飞机",
        "change_pct": 0.78
      },
      {
        "name": "北斗导航",
        "change_pct": 1.46
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.5
      },
      {
        "name": "军民融合",
        "change_pct": 0.94
      },
      {
        "name": "磁悬浮",
        "change_pct": 0.14
      },
      {
        "name": "军工",
        "change_pct": 0.83
      },
      {
        "name": "碳纤维",
        "change_pct": 0.91
      },
      {
        "name": "无人机",
        "change_pct": 1.0
      },
      {
        "name": "航天",
        "change_pct": 1.37
      },
      {
        "name": "卫星互联网",
        "change_pct": 1.84
      },
      {
        "name": "低空经济",
        "change_pct": 1.1
      },
      {
        "name": "海洋经济",
        "change_pct": 0.62
      }
    ]
  },
  {
    "code": "603106",
    "name": "恒银科技",
    "hot_rank": 86,
    "hot_rank_chg": 28,
    "stock_cnt": 5866,
    "price": "9.91",
    "change": "8.54",
    "market_id": "17",
    "circulate_market_value": "5158353200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 1.95
      },
      {
        "name": "人工智能",
        "change_pct": 0.86
      },
      {
        "name": "人脸识别",
        "change_pct": 1.36
      },
      {
        "name": "智慧停车",
        "change_pct": 0.85
      },
      {
        "name": "雄安新区",
        "change_pct": 0.29
      },
      {
        "name": "信创",
        "change_pct": 1.39
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.59
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.49
      },
      {
        "name": "智慧政务",
        "change_pct": 1.02
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.81
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 97,
    "hot_rank_chg": -26,
    "stock_cnt": 5866,
    "price": "3.57",
    "change": "1.13",
    "market_id": "33",
    "circulate_market_value": "7152056600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 0.55
      },
      {
        "name": "数字孪生",
        "change_pct": 1.1
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 0.92
      },
      {
        "name": "人工智能",
        "change_pct": 0.86
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.05
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.51
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.5
      },
      {
        "name": "人脸识别",
        "change_pct": 1.36
      },
      {
        "name": "智慧停车",
        "change_pct": 0.85
      },
      {
        "name": "物联网",
        "change_pct": 1.09
      },
      {
        "name": "大数据",
        "change_pct": 0.83
      },
      {
        "name": "智慧城市",
        "change_pct": 0.86
      },
      {
        "name": "雄安新区",
        "change_pct": 0.29
      },
      {
        "name": "机器人",
        "change_pct": 0.73
      },
      {
        "name": "数字经济",
        "change_pct": 0.83
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.33
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.68
      },
      {
        "name": "建筑节能",
        "change_pct": 0.17
      },
      {
        "name": "旧改",
        "change_pct": 0.3
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.81
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.06
      },
      {
        "name": "华为产业链",
        "change_pct": 0.87
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -0.09
      },
      {
        "name": "区块链",
        "change_pct": 0.89
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 100,
    "hot_rank_chg": -25,
    "stock_cnt": 5866,
    "price": "5.86",
    "change": "-4.41",
    "market_id": "33",
    "circulate_market_value": "7598870800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.75
      },
      {
        "name": "创新药",
        "change_pct": -0.52
      },
      {
        "name": "央企改革",
        "change_pct": 0.12
      },
      {
        "name": "医疗器械",
        "change_pct": -0.21
      },
      {
        "name": "强势人气股",
        "change_pct": 0.92
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.05
      },
      {
        "name": "保健品",
        "change_pct": -0.65
      },
      {
        "name": "民营医院",
        "change_pct": -0.64
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.56
      },
      {
        "name": "医药",
        "change_pct": -0.49
      },
      {
        "name": "化学原料药",
        "change_pct": -0.43
      },
      {
        "name": "海南概念",
        "change_pct": -0.36
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": 0.23
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.63
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.89
      },
      {
        "name": "食品",
        "change_pct": -0.61
      },
      {
        "name": "国企改革",
        "change_pct": 0.02
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.81
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.06
      },
      {
        "name": "自贸区",
        "change_pct": -0.39
      },
      {
        "name": "合成生物",
        "change_pct": -0.31
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002428", "name": "云南锗业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5866, "price": "90.98", "change": "10.00", "market_id": "33", "circulate_market_value": "59413181000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "磷化铟"}, {"code": "003032", "name": "传智教育", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5866, "price": "11.50", "change": "-1.96", "market_id": "33", "circulate_market_value": "3271538500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.32}, {"name": "密集调研", "change_pct": 0.62}, {"name": "ST摘帽", "change_pct": 0.57}, {"name": "强势人气股", "change_pct": 0.82}, {"name": "教育", "change_pct": -0.68}, {"name": "阿里巴巴概念股", "change_pct": 0.29}, {"name": "职业教育", "change_pct": -0.41}, {"name": "在线教育", "change_pct": -0.77}, {"name": "华为鸿蒙", "change_pct": 1.06}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "智谱AI", "change_pct": 0.34}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 3, "hot_rank_chg": 12, "stock_cnt": 5866, "price": "61.49", "change": "7.04", "market_id": "33", "circulate_market_value": "89343695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 4, "hot_rank_chg": 3, "stock_cnt": 5866, "price": "34.98", "change": "2.58", "market_id": "17", "circulate_market_value": "720650720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 5, "hot_rank_chg": 24, "stock_cnt": 5866, "price": "32.06", "change": "10.02", "market_id": "33", "circulate_market_value": "21381594000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 6, "hot_rank_chg": 30, "stock_cnt": 5866, "price": "24.79", "change": "9.98", "market_id": "17", "circulate_market_value": "6005873300.00", "change_type": "1", "change_section": "13", "change_days": "10", "change_reason": "复牌"}, {"code": "300308", "name": "中际旭创", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5866, "price": "922.18", "change": "-2.70", "market_id": "33", "circulate_market_value": "1023564260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 8, "hot_rank_chg": 15, "stock_cnt": 5866, "price": "16.54", "change": "1.60", "market_id": "33", "circulate_market_value": "9693235100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 9, "hot_rank_chg": -6, "stock_cnt": 5866, "price": "57.17", "change": "-1.05", "market_id": "33", "circulate_market_value": "66169560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 10, "hot_rank_chg": -6, "stock_cnt": 5866, "price": "51.47", "change": "-5.21", "market_id": "17", "circulate_market_value": "231816450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 11, "hot_rank_chg": 10, "stock_cnt": 5866, "price": "374.50", "change": "-2.84", "market_id": "17", "circulate_market_value": "250350230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 12, "hot_rank_chg": 1, "stock_cnt": 5866, "price": "6.52", "change": "-3.69", "market_id": "17", "circulate_market_value": "16420684000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.18}, {"name": "工业大麻", "change_pct": -0.08}, {"name": "中药", "change_pct": -0.73}, {"name": "强势人气股", "change_pct": 0.82}, {"name": "保健品", "change_pct": -0.6}, {"name": "民营医院", "change_pct": -0.59}, {"name": "医药", "change_pct": -0.53}, {"name": "化学原料药", "change_pct": -0.47}, {"name": "流感", "change_pct": -0.27}, {"name": "振兴东北", "change_pct": -0.21}, {"name": "食品", "change_pct": -0.54}]}, {"code": "000815", "name": "美利云", "hot_rank": 13, "hot_rank_chg": 7, "stock_cnt": 5866, "price": "18.70", "change": "-0.85", "market_id": "33", "circulate_market_value": "12994466100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 14, "hot_rank_chg": -3, "stock_cnt": 5866, "price": "43.79", "change": "10.00", "market_id": "17", "circulate_market_value": "37070570000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报增长"}, {"code": "603629", "name": "利通电子", "hot_rank": 15, "hot_rank_chg": 2, "stock_cnt": 5866, "price": "122.58", "change": "8.81", "market_id": "17", "circulate_market_value": "44217474000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 16, "hot_rank_chg": 27, "stock_cnt": 5866, "price": "13.72", "change": "5.70", "market_id": "33", "circulate_market_value": "8004411200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 17, "hot_rank_chg": -11, "stock_cnt": 5866, "price": "186.77", "change": "-1.09", "market_id": "33", "circulate_market_value": "258923310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300139", "name": "晓程科技", "hot_rank": 18, "hot_rank_chg": 39, "stock_cnt": 5866, "price": "47.22", "change": "5.61", "market_id": "33", "circulate_market_value": "11033388600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 19, "hot_rank_chg": 0, "stock_cnt": 5866, "price": "18.77", "change": "1.73", "market_id": "17", "circulate_market_value": "39258247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000981", "name": "山子高科", "hot_rank": 20, "hot_rank_chg": 5, "stock_cnt": 5866, "price": "3.10", "change": "-2.21", "market_id": "33", "circulate_market_value": "29491404000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 1.14}, {"name": "无人驾驶", "change_pct": 0.48}, {"name": "汽车零部件", "change_pct": 0.09}, {"name": "新能源汽车", "change_pct": 0.05}, {"name": "新能源车零部件", "change_pct": 0.17}, {"name": "减速器", "change_pct": -0.03}, {"name": "华为汽车", "change_pct": -0.05}]}, {"code": "001337", "name": "四川黄金", "hot_rank": 21, "hot_rank_chg": 27, "stock_cnt": 5866, "price": "45.80", "change": "5.85", "market_id": "33", "circulate_market_value": "19236000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 22, "hot_rank_chg": 22, "stock_cnt": 5866, "price": "42.61", "change": "4.33", "market_id": "17", "circulate_market_value": "70899264000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 23, "hot_rank_chg": -13, "stock_cnt": 5866, "price": "5.53", "change": "-2.47", "market_id": "33", "circulate_market_value": "32377035000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.14}, {"name": "人工智能", "change_pct": 0.8}, {"name": "水利", "change_pct": 0.4}, {"name": "直播/短视频", "change_pct": 0.58}, {"name": "大数据", "change_pct": 0.83}, {"name": "园林", "change_pct": 0.36}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.62}, {"name": "数字经济", "change_pct": 0.81}, {"name": "腾讯概念股", "change_pct": 0.64}, {"name": "理想汽车概念股", "change_pct": 0.22}, {"name": "第三代半导体", "change_pct": 1.29}, {"name": "快手概念股", "change_pct": 0.56}, {"name": "IGBT", "change_pct": 0.13}, {"name": "虚拟数字人", "change_pct": 0.57}, {"name": "AIGC概念", "change_pct": 0.43}, {"name": "字节跳动概念股", "change_pct": 0.48}, {"name": "氮化镓", "change_pct": 0.99}, {"name": "AI营销", "change_pct": 0.24}, {"name": "多模态", "change_pct": 0.58}, {"name": "液冷服务器", "change_pct": 0.84}, {"name": "小红书概念股", "change_pct": 0.16}, {"name": "区块链", "change_pct": 0.89}]}, {"code": "000506", "name": "招金黄金", "hot_rank": 24, "hot_rank_chg": 37, "stock_cnt": 5866, "price": "16.79", "change": "7.49", "market_id": "33", "circulate_market_value": "15592990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 25, "hot_rank_chg": -1, "stock_cnt": 5866, "price": "381.00", "change": "-1.36", "market_id": "33", "circulate_market_value": "62876336000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 26, "hot_rank_chg": -14, "stock_cnt": 5866, "price": "67.40", "change": "2.25", "market_id": "17", "circulate_market_value": "1337491820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 27, "hot_rank_chg": -19, "stock_cnt": 5866, "price": "37.27", "change": "0.89", "market_id": "33", "circulate_market_value": "106594909000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 28, "hot_rank_chg": -19, "stock_cnt": 5866, "price": "17.15", "change": "-2.17", "market_id": "17", "circulate_market_value": "25256922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 29, "hot_rank_chg": 39, "stock_cnt": 5866, "price": "36.26", "change": "4.92", "market_id": "33", "circulate_market_value": "9734445100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 30, "hot_rank_chg": 12, "stock_cnt": 5866, "price": "7.16", "change": "9.98", "market_id": "17", "circulate_market_value": "8153502300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "特高压", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.26}, {"name": "光伏", "change_pct": 0.06}, {"name": "特高压", "change_pct": -0.28}, {"name": "智能电网", "change_pct": 0.17}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 31, "hot_rank_chg": -15, "stock_cnt": 5866, "price": "55.60", "change": "2.19", "market_id": "17", "circulate_market_value": "136422730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002792", "name": "通宇通讯", "hot_rank": 32, "hot_rank_chg": 107, "stock_cnt": 5866, "price": "33.81", "change": "9.99", "market_id": "33", "circulate_market_value": "11421845700.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "拟收购"}, {"code": "688235", "name": "百济神州", "hot_rank": 33, "hot_rank_chg": -7, "stock_cnt": 5866, "price": "268.68", "change": "-4.25", "market_id": "17", "circulate_market_value": "30913047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 34, "hot_rank_chg": -2, "stock_cnt": 5866, "price": "15.42", "change": "-1.97", "market_id": "33", "circulate_market_value": "53629685000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 35, "hot_rank_chg": -21, "stock_cnt": 5866, "price": "145.80", "change": "-1.15", "market_id": "17", "circulate_market_value": "360604260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 36, "hot_rank_chg": -18, "stock_cnt": 5866, "price": "5.90", "change": "-1.34", "market_id": "33", "circulate_market_value": "208312420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.55}, {"name": "手机产业链", "change_pct": 1.07}, {"name": "超高清视频", "change_pct": 0.42}, {"name": "苹果产业链", "change_pct": 1.21}, {"name": "电竞", "change_pct": 0.52}, {"name": "半导体", "change_pct": 1.36}, {"name": "人工智能", "change_pct": 0.86}, {"name": "互联网医疗", "change_pct": -0.05}, {"name": "VR&AR", "change_pct": 1.02}, {"name": "OLED", "change_pct": 1.1}, {"name": "京津冀", "change_pct": -0.14}, {"name": "物联网", "change_pct": 1.09}, {"name": "指纹识别", "change_pct": 1.44}, {"name": "汽车零部件", "change_pct": 0.18}, {"name": "白马股", "change_pct": -0.54}, {"name": "智能制造", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.77}, {"name": "国产芯片", "change_pct": 1.06}, {"name": "液晶面板/LCD", "change_pct": 1.03}, {"name": "全息概念", "change_pct": 0.96}, {"name": "理想汽车概念股", "change_pct": 0.31}, {"name": "MicroLED", "change_pct": 1.13}, {"name": "钙钛矿电池", "change_pct": -0.35}, {"name": "智能手表", "change_pct": 0.93}, {"name": "MiniLED", "change_pct": 1.56}, {"name": "传感器", "change_pct": 0.54}, {"name": "大硅片", "change_pct": 2.01}, {"name": "AI PC", "change_pct": 0.76}, {"name": "华为产业链", "change_pct": 0.87}, {"name": "回购", "change_pct": -0.28}, {"name": "智能眼镜/MR头显", "change_pct": 0.85}, {"name": "玻璃基板封装", "change_pct": 1.75}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 37, "hot_rank_chg": -15, "stock_cnt": 5866, "price": "8.03", "change": "1.39", "market_id": "33", "circulate_market_value": "13054321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.17}, {"name": "电竞", "change_pct": 0.52}, {"name": "手游", "change_pct": 0.26}, {"name": "强势人气股", "change_pct": 0.92}, {"name": "人工智能", "change_pct": 0.86}, {"name": "游戏", "change_pct": 0.62}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.83}, {"name": "腾讯概念股", "change_pct": 0.68}, {"name": "快手概念股", "change_pct": 0.62}, {"name": "元宇宙", "change_pct": 0.36}, {"name": "虚拟数字人", "change_pct": 0.59}, {"name": "东数西算/算力", "change_pct": 0.33}, {"name": "web3.0", "change_pct": 0.79}, {"name": "AIGC概念", "change_pct": 0.49}, {"name": "数据要素", "change_pct": 0.94}, {"name": "字节跳动概念股", "change_pct": 0.52}, {"name": "AI营销", "change_pct": 0.24}, {"name": "ChatGPT", "change_pct": 0.69}, {"name": "智能眼镜/MR头显", "change_pct": 0.85}, {"name": "人工智能大模型", "change_pct": 0.45}, {"name": "人形机器人", "change_pct": 0.87}, {"name": "短剧/互动影游", "change_pct": -0.14}, {"name": "多模态", "change_pct": 0.58}, {"name": "AI视频", "change_pct": 0.15}, {"name": "IP经济/谷子经济", "change_pct": 0.41}, {"name": "小红书概念股", "change_pct": 0.16}]}, {"code": "603823", "name": "百合花", "hot_rank": 38, "hot_rank_chg": 7, "stock_cnt": 5866, "price": "66.79", "change": "9.98", "market_id": "17", "circulate_market_value": "27809199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 39, "hot_rank_chg": -11, "stock_cnt": 5866, "price": "415.52", "change": "-2.07", "market_id": "33", "circulate_market_value": "521163120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600549", "name": "厦门钨业", "hot_rank": 40, "hot_rank_chg": 24, "stock_cnt": 5866, "price": "55.92", "change": "4.08", "market_id": "17", "circulate_market_value": "86880337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 41, "hot_rank_chg": 6, "stock_cnt": 5866, "price": "4.83", "change": "2.98", "market_id": "17", "circulate_market_value": "7550818000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.58}, {"name": "共享经济", "change_pct": -0.19}, {"name": "云计算数据中心", "change_pct": 0.51}, {"name": "旅游", "change_pct": 0.15}, {"name": "物业管理", "change_pct": -0.11}]}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 42, "hot_rank_chg": 7, "stock_cnt": 5866, "price": "20.83", "change": "1.76", "market_id": "17", "circulate_market_value": "363709340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002180", "name": "奔图科技", "hot_rank": 43, "hot_rank_chg": 81, "stock_cnt": 5866, "price": "19.69", "change": "10.00", "market_id": "33", "circulate_market_value": "26784061000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国产打印机"}, {"code": "002185", "name": "华天科技", "hot_rank": 44, "hot_rank_chg": -6, "stock_cnt": 5866, "price": "16.90", "change": "1.87", "market_id": "33", "circulate_market_value": "56152815000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 45, "hot_rank_chg": 25, "stock_cnt": 5866, "price": "8.94", "change": "1.94", "market_id": "33", "circulate_market_value": "20762933000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 4.98}, {"name": "有色 · 铜", "change_pct": 1.57}, {"name": "有色 · 锑", "change_pct": 3.32}, {"name": "湖南国企改革", "change_pct": 0.02}, {"name": "有色 · 锌", "change_pct": 2.74}, {"name": "有色金属", "change_pct": 1.09}, {"name": "国企改革", "change_pct": 0.02}, {"name": "白银", "change_pct": 3.32}]}, {"code": "000630", "name": "铜陵有色", "hot_rank": 46, "hot_rank_chg": 26, "stock_cnt": 5866, "price": "6.72", "change": "0.90", "market_id": "33", "circulate_market_value": "74992320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 4.98}, {"name": "锂电池", "change_pct": 0.21}, {"name": "安徽国企改革", "change_pct": -0.12}, {"name": "有色 · 铜", "change_pct": 1.57}, {"name": "铜箔/覆铜板", "change_pct": 1.92}, {"name": "有色金属", "change_pct": 1.09}, {"name": "新能源汽车", "change_pct": 0.16}, {"name": "人民币升值受益", "change_pct": -0.21}, {"name": "硫酸", "change_pct": 1.38}, {"name": "国企改革", "change_pct": 0.02}, {"name": "白银", "change_pct": 3.32}, {"name": "有色 · 镍", "change_pct": 0.76}]}, {"code": "002036", "name": "联创电子", "hot_rank": 47, "hot_rank_chg": 62, "stock_cnt": 5866, "price": "7.55", "change": "-3.21", "market_id": "33", "circulate_market_value": "7968781700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": -0.67}, {"name": "折叠屏", "change_pct": 1.55}, {"name": "手机产业链", "change_pct": 1.07}, {"name": "超高清视频", "change_pct": 0.42}, {"name": "无线充电", "change_pct": 0.53}, {"name": "特斯拉", "change_pct": 0.2}, {"name": "股权转让", "change_pct": 0.52}, {"name": "无人驾驶", "change_pct": 0.58}, {"name": "VR&AR", "change_pct": 1.02}, {"name": "OLED", "change_pct": 1.1}, {"name": "3D感应", "change_pct": 0.66}, {"name": "人脸识别", "change_pct": 1.36}, {"name": "3D玻璃", "change_pct": 1.11}, {"name": "指纹识别", "change_pct": 1.44}, {"name": "手势识别", "change_pct": 0.24}, {"name": "虹膜识别", "change_pct": 1.05}, {"name": "机器视觉", "change_pct": 1.2}, {"name": "无人机", "change_pct": 1.0}, {"name": "智能制造", "change_pct": 0.85}, {"name": "国产芯片", "change_pct": 1.06}, {"name": "液晶面板/LCD", "change_pct": 1.03}, {"name": "激光雷达", "change_pct": 1.01}, {"name": "元宇宙", "change_pct": 0.36}, {"name": "电子后视镜", "change_pct": 0.58}, {"name": "无线耳机", "change_pct": 0.56}, {"name": "云游戏", "change_pct": 0.02}, {"name": "AI PC", "change_pct": 0.76}, {"name": "国资入股", "change_pct": 0.2}, {"name": "华为产业链", "change_pct": 0.87}, {"name": "毫米波雷达", "change_pct": 1.6}, {"name": "智能眼镜/MR头显", "change_pct": 0.85}, {"name": "英伟达概念", "change_pct": 1.1}, {"name": "人形机器人", "change_pct": 0.87}, {"name": "智能座舱", "change_pct": 0.62}, {"name": "AI手机", "change_pct": 0.29}]}, {"code": "002674", "name": "兴业科技", "hot_rank": 48, "hot_rank_chg": 5, "stock_cnt": 5866, "price": "28.71", "change": "6.61", "market_id": "33", "circulate_market_value": "8399502400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 49, "hot_rank_chg": -22, "stock_cnt": 5866, "price": "36.42", "change": "-1.19", "market_id": "17", "circulate_market_value": "56728976000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 50, "hot_rank_chg": -17, "stock_cnt": 5866, "price": "12.84", "change": "-5.17", "market_id": "33", "circulate_market_value": "11974541600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.92}, {"name": "新疆国企改革", "change_pct": 0.14}, {"name": "新疆概念", "change_pct": 0.56}, {"name": "光伏", "change_pct": 0.06}, {"name": "风电", "change_pct": -0.07}, {"name": "储能", "change_pct": -0.21}, {"name": "国企改革", "change_pct": 0.02}]}, {"code": "600397", "name": "江钨装备", "hot_rank": 51, "hot_rank_chg": 23, "stock_cnt": 5866, "price": "16.89", "change": "10.03", "market_id": "17", "circulate_market_value": "16720422000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "钨钽铌资产注入"}, {"code": "600176", "name": "中国巨石", "hot_rank": 52, "hot_rank_chg": -21, "stock_cnt": 5866, "price": "40.40", "change": "2.85", "market_id": "17", "circulate_market_value": "160452120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 53, "hot_rank_chg": -18, "stock_cnt": 5866, "price": "72.30", "change": "4.83", "market_id": "17", "circulate_market_value": "129374673000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 54, "hot_rank_chg": -8, "stock_cnt": 5866, "price": "33.76", "change": "2.90", "market_id": "33", "circulate_market_value": "36419186000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002155", "name": "湖南黄金", "hot_rank": 55, "hot_rank_chg": 45, "stock_cnt": 5866, "price": "25.45", "change": "3.12", "market_id": "33", "circulate_market_value": "39765903000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 56, "hot_rank_chg": -16, "stock_cnt": 5866, "price": "21.71", "change": "-7.03", "market_id": "17", "circulate_market_value": "8701700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 57, "hot_rank_chg": 37, "stock_cnt": 5866, "price": "30.35", "change": "4.84", "market_id": "17", "circulate_market_value": "109698356000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 58, "hot_rank_chg": 5, "stock_cnt": 5866, "price": "9.26", "change": "6.32", "market_id": "17", "circulate_market_value": "3560911100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.52}, {"name": "股权转让", "change_pct": 0.52}, {"name": "新疆概念", "change_pct": 0.56}, {"name": "医药", "change_pct": -0.49}, {"name": "流感", "change_pct": -0.25}, {"name": "国资入股", "change_pct": 0.2}, {"name": "减肥药", "change_pct": -0.53}]}, {"code": "001232", "name": "嘉立创", "hot_rank": 59, "hot_rank_chg": -20, "stock_cnt": 5866, "price": "185.39", "change": "-7.26", "market_id": "33", "circulate_market_value": "8195452100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000751", "name": "锌业股份", "hot_rank": 60, "hot_rank_chg": 50, "stock_cnt": 5866, "price": "5.34", "change": "4.10", "market_id": "33", "circulate_market_value": "8611308300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铜", "change_pct": 1.57}, {"name": "有色 · 锌", "change_pct": 2.74}, {"name": "有色金属", "change_pct": 1.09}, {"name": "硫酸", "change_pct": 1.38}]}, {"code": "000595", "name": "新能股份", "hot_rank": 61, "hot_rank_chg": 19, "stock_cnt": 5866, "price": "6.30", "change": "-5.55", "market_id": "33", "circulate_market_value": "7173535100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 0.59}, {"name": "强势人气股", "change_pct": 0.92}, {"name": "高铁轨交", "change_pct": 0.5}, {"name": "航母", "change_pct": 0.12}, {"name": "光伏", "change_pct": 0.06}, {"name": "风电", "change_pct": -0.07}, {"name": "军工", "change_pct": 0.83}, {"name": "机器人", "change_pct": 0.73}, {"name": "储能", "change_pct": -0.21}, {"name": "国企改革", "change_pct": 0.02}, {"name": "宁夏概念", "change_pct": 0.04}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 62, "hot_rank_chg": -21, "stock_cnt": 5866, "price": "67.72", "change": "0.67", "market_id": "33", "circulate_market_value": "57770102000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 63, "hot_rank_chg": -9, "stock_cnt": 5866, "price": "36.58", "change": "0.08", "market_id": "17", "circulate_market_value": "53479770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 64, "hot_rank_chg": 18, "stock_cnt": 5866, "price": "47.27", "change": "1.35", "market_id": "17", "circulate_market_value": "98076192000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 65, "hot_rank_chg": -28, "stock_cnt": 5866, "price": "248.74", "change": "5.24", "market_id": "33", "circulate_market_value": "215208590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 66, "hot_rank_chg": -7, "stock_cnt": 5866, "price": "11.67", "change": "4.01", "market_id": "17", "circulate_market_value": "14974928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.2}, {"name": "强势人气股", "change_pct": 0.92}, {"name": "智能制造", "change_pct": 0.85}, {"name": "工业互联网", "change_pct": 0.49}, {"name": "培育钻石", "change_pct": 1.71}, {"name": "金刚线", "change_pct": 2.38}, {"name": "国资入股", "change_pct": 0.2}, {"name": "深地经济", "change_pct": 0.81}]}, {"code": "002607", "name": "中公教育", "hot_rank": 68, "hot_rank_chg": -38, "stock_cnt": 5866, "price": "2.21", "change": "-5.96", "market_id": "33", "circulate_market_value": "12251002900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.86}, {"name": "教育", "change_pct": -0.74}, {"name": "独角兽", "change_pct": 0.85}, {"name": "阿里巴巴概念股", "change_pct": 0.33}, {"name": "低价股", "change_pct": -0.47}, {"name": "职业教育", "change_pct": -0.4}, {"name": "在线教育", "change_pct": -0.8}]}, {"code": "603019", "name": "中科曙光", "hot_rank": 69, "hot_rank_chg": 38, "stock_cnt": 5866, "price": "87.64", "change": "-1.14", "market_id": "17", "circulate_market_value": "128222083000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 70, "hot_rank_chg": -20, "stock_cnt": 5866, "price": "12.13", "change": "-4.49", "market_id": "33", "circulate_market_value": "8307866100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.04}, {"name": "核电", "change_pct": 0.08}, {"name": "强势人气股", "change_pct": 0.92}, {"name": "充电桩", "change_pct": -0.0}, {"name": "云计算数据中心", "change_pct": 0.51}, {"name": "新能源汽车", "change_pct": 0.16}, {"name": "储能", "change_pct": -0.21}, {"name": "阿里巴巴概念股", "change_pct": 0.33}, {"name": "智能电网", "change_pct": 0.17}, {"name": "核聚变", "change_pct": -0.31}]}, {"code": "002156", "name": "通富微电", "hot_rank": 71, "hot_rank_chg": -13, "stock_cnt": 5866, "price": "59.76", "change": "3.04", "market_id": "33", "circulate_market_value": "90682945000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603468", "name": "津富士达", "hot_rank": 72, "hot_rank_chg": 975, "stock_cnt": 5866, "price": "40.05", "change": "129.38", "market_id": "17", "circulate_market_value": "1601542400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000426", "name": "兴业银锡", "hot_rank": 73, "hot_rank_chg": 28, "stock_cnt": 5866, "price": "38.80", "change": "6.94", "market_id": "33", "circulate_market_value": "68913476000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 74, "hot_rank_chg": -18, "stock_cnt": 5866, "price": "32.24", "change": "0.75", "market_id": "17", "circulate_market_value": "110033497000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 75, "hot_rank_chg": -13, "stock_cnt": 5866, "price": "213.06", "change": "-1.75", "market_id": "33", "circulate_market_value": "231891960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000593", "name": "德龙汇能", "hot_rank": 76, "hot_rank_chg": -11, "stock_cnt": 5866, "price": "22.81", "change": "1.29", "market_id": "33", "circulate_market_value": "8177001100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002425", "name": "凯撒文化", "hot_rank": 77, "hot_rank_chg": 1, "stock_cnt": 5866, "price": "3.82", "change": "10.09", "market_id": "33", "circulate_market_value": "3515110200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "游戏IP", "xgb_concepts": [{"name": "手游", "change_pct": 0.26}, {"name": "ST摘帽", "change_pct": 0.59}, {"name": "人工智能", "change_pct": 0.86}, {"name": "VR&AR", "change_pct": 1.02}, {"name": "游戏", "change_pct": 0.62}, {"name": "动漫", "change_pct": 0.38}, {"name": "腾讯概念股", "change_pct": 0.68}, {"name": "快手概念股", "change_pct": 0.62}, {"name": "NFT", "change_pct": 0.06}, {"name": "元宇宙", "change_pct": 0.36}, {"name": "虚拟数字人", "change_pct": 0.59}, {"name": "字节跳动概念股", "change_pct": 0.52}, {"name": "云游戏", "change_pct": 0.02}, {"name": "IP经济/谷子经济", "change_pct": 0.41}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 78, "hot_rank_chg": -27, "stock_cnt": 5866, "price": "321.58", "change": "2.94", "market_id": "17", "circulate_market_value": "130670275000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000960", "name": "锡业股份", "hot_rank": 79, "hot_rank_chg": 2, "stock_cnt": 5866, "price": "39.65", "change": "2.75", "market_id": "33", "circulate_market_value": "65257831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 80, "hot_rank_chg": -3, "stock_cnt": 5866, "price": "39.20", "change": "1.32", "market_id": "33", "circulate_market_value": "61722640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 81, "hot_rank_chg": 4, "stock_cnt": 5866, "price": "11.99", "change": "5.08", "market_id": "33", "circulate_market_value": "9700137700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.55}, {"name": "大飞机", "change_pct": 0.78}, {"name": "北斗导航", "change_pct": 1.46}, {"name": "高铁轨交", "change_pct": 0.5}, {"name": "军民融合", "change_pct": 0.94}, {"name": "磁悬浮", "change_pct": 0.14}, {"name": "军工", "change_pct": 0.83}, {"name": "碳纤维", "change_pct": 0.91}, {"name": "无人机", "change_pct": 1.0}, {"name": "航天", "change_pct": 1.37}, {"name": "卫星互联网", "change_pct": 1.84}, {"name": "低空经济", "change_pct": 1.1}, {"name": "海洋经济", "change_pct": 0.62}]}, {"code": "001229", "name": "魅视科技", "hot_rank": 82, "hot_rank_chg": 7, "stock_cnt": 5866, "price": "42.96", "change": "1.51", "market_id": "33", "circulate_market_value": "3168351800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000962", "name": "东方钽业", "hot_rank": 83, "hot_rank_chg": 5, "stock_cnt": 5866, "price": "54.26", "change": "5.09", "market_id": "33", "circulate_market_value": "27302424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 84, "hot_rank_chg": 77, "stock_cnt": 5866, "price": "395.11", "change": "-2.49", "market_id": "33", "circulate_market_value": "1683200600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000510", "name": "新金路", "hot_rank": 85, "hot_rank_chg": 6, "stock_cnt": 5866, "price": "16.37", "change": "1.55", "market_id": "33", "circulate_market_value": "9930212100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603106", "name": "恒银科技", "hot_rank": 86, "hot_rank_chg": 28, "stock_cnt": 5866, "price": "9.91", "change": "8.54", "market_id": "17", "circulate_market_value": "5158353200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "金融科技", "change_pct": 1.95}, {"name": "人工智能", "change_pct": 0.86}, {"name": "人脸识别", "change_pct": 1.36}, {"name": "智慧停车", "change_pct": 0.85}, {"name": "雄安新区", "change_pct": 0.29}, {"name": "信创", "change_pct": 1.39}, {"name": "虚拟数字人", "change_pct": 0.59}, {"name": "AIGC概念", "change_pct": 0.49}, {"name": "智慧政务", "change_pct": 1.02}, {"name": "医疗信息化", "change_pct": 0.81}]}, {"code": "002975", "name": "博杰股份", "hot_rank": 87, "hot_rank_chg": 39, "stock_cnt": 5866, "price": "93.07", "change": "10.00", "market_id": "33", "circulate_market_value": "12783540400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 89, "hot_rank_chg": -37, "stock_cnt": 5866, "price": "35.04", "change": "2.25", "market_id": "33", "circulate_market_value": "27415458000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 90, "hot_rank_chg": 31, "stock_cnt": 5866, "price": "54.30", "change": "-3.52", "market_id": "17", "circulate_market_value": "7087714400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 91, "hot_rank_chg": 47, "stock_cnt": 5866, "price": "49.24", "change": "10.01", "market_id": "33", "circulate_market_value": "13590177000.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "控股股东拟变更"}, {"code": "603618", "name": "杭电股份", "hot_rank": 92, "hot_rank_chg": 3, "stock_cnt": 5866, "price": "26.43", "change": "0.84", "market_id": "17", "circulate_market_value": "18279971000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 93, "hot_rank_chg": -10, "stock_cnt": 5866, "price": "86.43", "change": "10.00", "market_id": "17", "circulate_market_value": "19418974000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "TGV玻璃基板"}, {"code": "600489", "name": "中金黄金", "hot_rank": 94, "hot_rank_chg": 31, "stock_cnt": 5866, "price": "25.65", "change": "5.77", "market_id": "17", "circulate_market_value": "124333567000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 95, "hot_rank_chg": -40, "stock_cnt": 5866, "price": "28.62", "change": "-0.28", "market_id": "33", "circulate_market_value": "21677220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002378", "name": "章源钨业", "hot_rank": 96, "hot_rank_chg": 71, "stock_cnt": 5866, "price": "26.18", "change": "3.85", "market_id": "33", "circulate_market_value": "31288277000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 97, "hot_rank_chg": -26, "stock_cnt": 5866, "price": "3.57", "change": "1.13", "market_id": "33", "circulate_market_value": "7152056600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": 0.55}, {"name": "数字孪生", "change_pct": 1.1}, {"name": "深圳本地股", "change_pct": 0.2}, {"name": "强势人气股", "change_pct": 0.92}, {"name": "人工智能", "change_pct": 0.86}, {"name": "互联网医疗", "change_pct": -0.05}, {"name": "云计算数据中心", "change_pct": 0.51}, {"name": "高铁轨交", "change_pct": 0.5}, {"name": "人脸识别", "change_pct": 1.36}, {"name": "智慧停车", "change_pct": 0.85}, {"name": "物联网", "change_pct": 1.09}, {"name": "大数据", "change_pct": 0.83}, {"name": "智慧城市", "change_pct": 0.86}, {"name": "雄安新区", "change_pct": 0.29}, {"name": "机器人", "change_pct": 0.73}, {"name": "数字经济", "change_pct": 0.83}, {"name": "阿里巴巴概念股", "change_pct": 0.33}, {"name": "腾讯概念股", "change_pct": 0.68}, {"name": "建筑节能", "change_pct": 0.17}, {"name": "旧改", "change_pct": 0.3}, {"name": "医疗信息化", "change_pct": 0.81}, {"name": "新冠病毒防治", "change_pct": -0.06}, {"name": "华为产业链", "change_pct": 0.87}, {"name": "医疗耗材供应链SPD", "change_pct": -0.09}, {"name": "区块链", "change_pct": 0.89}]}, {"code": "600961", "name": "株冶集团", "hot_rank": 98, "hot_rank_chg": -1, "stock_cnt": 5866, "price": "27.71", "change": "3.94", "market_id": "17", "circulate_market_value": "20832722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 99, "hot_rank_chg": -39, "stock_cnt": 5866, "price": "19.57", "change": "-4.02", "market_id": "33", "circulate_market_value": "8852270300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 100, "hot_rank_chg": -25, "stock_cnt": 5866, "price": "5.86", "change": "-4.41", "market_id": "33", "circulate_market_value": "7598870800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.75}, {"name": "创新药", "change_pct": -0.52}, {"name": "央企改革", "change_pct": 0.12}, {"name": "医疗器械", "change_pct": -0.21}, {"name": "强势人气股", "change_pct": 0.92}, {"name": "互联网医疗", "change_pct": -0.05}, {"name": "保健品", "change_pct": -0.65}, {"name": "民营医院", "change_pct": -0.64}, {"name": "CAR-T疗法", "change_pct": -0.56}, {"name": "医药", "change_pct": -0.49}, {"name": "化学原料药", "change_pct": -0.43}, {"name": "海南概念", "change_pct": -0.36}, {"name": "脑科学/脑机接口", "change_pct": 0.23}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -0.63}, {"name": "海南自由贸易港", "change_pct": -0.89}, {"name": "食品", "change_pct": -0.61}, {"name": "国企改革", "change_pct": 0.02}, {"name": "医疗信息化", "change_pct": 0.81}, {"name": "新冠病毒防治", "change_pct": -0.06}, {"name": "自贸区", "change_pct": -0.39}, {"name": "合成生物", "change_pct": -0.31}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告"};