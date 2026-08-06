const UPDATE_TIME = "2026-08-06 08:27";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 2.28,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续264天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI应用",
    "rise": -0.03,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": -0.13,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 2.31,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续217天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 2.18,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "MLCC概念",
    "rise": 1.27,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "商业航天",
    "rise": 0.98,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续193天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "黄金概念",
    "rise": 0.68,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "算力租赁",
    "rise": -0.19,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续128天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "先进封装",
    "rise": 2.42,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "无人驾驶",
    "rise": 0.57,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "智能驾驶ETF",
    "code": "885736"
  },
  {
    "name": "人形机器人",
    "rise": 0.37,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续428天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "6G概念",
    "rise": 2.73,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "通信ETF",
    "code": "886037"
  },
  {
    "name": "国家大基金持股",
    "rise": 2.65,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "数字货币",
    "rise": 1.73,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "光纤概念",
    "rise": 1.46,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续93天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "机器人概念",
    "rise": 0.47,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续95天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "稀土永磁",
    "rise": 1.26,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "氟化工概念",
    "rise": 2.53,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "化工行业ETF",
    "code": "885551"
  },
  {
    "name": "芯片概念",
    "rise": 1.63,
    "rate": 0,
    "tag": "25家涨停",
    "hotTag": "连续88天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  }
];
const THS_EVENTS = [
  {
    "title": "黄金继续上攻！美国财政部长贝森特表示，现阶段美联储没必要加息",
    "desc": "",
    "heat": 555561,
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
    "title": "消息称英伟达急寻中国 AI 基站供应商，与“下一个中际旭创”合作开发 6G 基站",
    "desc": "",
    "heat": 349284,
    "direction": "6G概念",
    "themes": [
      "6G概念"
    ],
    "stocks": [
      {
        "name": "广哈通信",
        "code": "300711",
        "chg": 19.98739
      }
    ]
  },
  {
    "title": "朱雀三号遥二可回收火箭发射在即",
    "desc": "",
    "heat": 236944,
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
    "heat": 197208,
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
    "heat": 181884,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "任子行",
        "code": "300311",
        "chg": 19.932998
      }
    ]
  },
  {
    "title": "商务部宣布加强无人机相关两用物项对美国出口管制",
    "desc": "",
    "heat": 114801,
    "direction": "对美反制",
    "themes": [
      "无人机",
      "金属铟",
      "打印复印设备"
    ],
    "stocks": [
      {
        "name": "科翔股份",
        "code": "300903",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "宇树科技8月7日网上路演 定价与估值受关注",
    "desc": "",
    "heat": 92094,
    "direction": "宇树机器人",
    "themes": [
      "宇树科技",
      "人形机器人",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "德迈仕",
        "code": "301007",
        "chg": 16.885813
      }
    ]
  },
  {
    "title": "沈腾新片《欢迎来龙餐馆》官宣定档8月11日",
    "desc": "",
    "heat": 686,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "幸福蓝海",
        "code": "300528",
        "chg": 0.9299
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "电子特气",
    "change": "+6.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+5.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+5.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "制冷剂",
    "change": "+4.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+4.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+4.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+4.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氟化工",
    "change": "+4.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+3.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+3.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+3.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+3.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+3.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+3.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+3.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+3.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+3.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+3.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+3.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+3.12%",
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
    "hot_rank": 6,
    "hot_rank_chg": -1,
    "stock_cnt": 5760,
    "price": "10.95",
    "change": "-6.65",
    "market_id": "33",
    "circulate_market_value": "3115073600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 0.43
      },
      {
        "name": "密集调研",
        "change_pct": -0.69
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.01
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "教育",
        "change_pct": -1.17
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.23
      },
      {
        "name": "职业教育",
        "change_pct": -0.81
      },
      {
        "name": "在线教育",
        "change_pct": -1.71
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.38
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      },
      {
        "name": "智谱AI",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": 4,
    "stock_cnt": 5760,
    "price": "6.22",
    "change": "-8.12",
    "market_id": "17",
    "circulate_market_value": "15665131000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.08
      },
      {
        "name": "工业大麻",
        "change_pct": 0.41
      },
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "保健品",
        "change_pct": 0.48
      },
      {
        "name": "民营医院",
        "change_pct": -0.27
      },
      {
        "name": "医药",
        "change_pct": 0.01
      },
      {
        "name": "化学原料药",
        "change_pct": -0.11
      },
      {
        "name": "流感",
        "change_pct": 0.19
      },
      {
        "name": "振兴东北",
        "change_pct": 0.12
      },
      {
        "name": "食品",
        "change_pct": -0.11
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 15,
    "hot_rank_chg": 7,
    "stock_cnt": 5760,
    "price": "8.10",
    "change": "2.27",
    "market_id": "33",
    "circulate_market_value": "13168119600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.08
      },
      {
        "name": "电竞",
        "change_pct": -0.37
      },
      {
        "name": "手游",
        "change_pct": -0.66
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "人工智能",
        "change_pct": 0.29
      },
      {
        "name": "游戏",
        "change_pct": -0.51
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.13
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.02
      },
      {
        "name": "快手概念股",
        "change_pct": -0.56
      },
      {
        "name": "元宇宙",
        "change_pct": -0.45
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.53
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.21
      },
      {
        "name": "web3.0",
        "change_pct": 0.13
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.52
      },
      {
        "name": "数据要素",
        "change_pct": 0.02
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.26
      },
      {
        "name": "AI营销",
        "change_pct": -1.06
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.43
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.82
      },
      {
        "name": "人工智能大模型",
        "change_pct": -0.55
      },
      {
        "name": "人形机器人",
        "change_pct": 0.58
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.98
      },
      {
        "name": "多模态",
        "change_pct": -0.68
      },
      {
        "name": "AI视频",
        "change_pct": -0.87
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.0
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.95
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 18,
    "hot_rank_chg": -8,
    "stock_cnt": 5760,
    "price": "5.48",
    "change": "-3.35",
    "market_id": "33",
    "circulate_market_value": "32084296000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.35
      },
      {
        "name": "人工智能",
        "change_pct": 0.29
      },
      {
        "name": "水利",
        "change_pct": 0.31
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.55
      },
      {
        "name": "大数据",
        "change_pct": 0.07
      },
      {
        "name": "园林",
        "change_pct": 0.9
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.9
      },
      {
        "name": "数字经济",
        "change_pct": 0.13
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.02
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.04
      },
      {
        "name": "第三代半导体",
        "change_pct": 1.92
      },
      {
        "name": "快手概念股",
        "change_pct": -0.56
      },
      {
        "name": "IGBT",
        "change_pct": 0.55
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.53
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.52
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.26
      },
      {
        "name": "氮化镓",
        "change_pct": 1.63
      },
      {
        "name": "AI营销",
        "change_pct": -1.06
      },
      {
        "name": "多模态",
        "change_pct": -0.68
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.25
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.95
      },
      {
        "name": "区块链",
        "change_pct": 0.23
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 22,
    "hot_rank_chg": -4,
    "stock_cnt": 5760,
    "price": "5.96",
    "change": "-0.17",
    "market_id": "33",
    "circulate_market_value": "210788120000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.41
      },
      {
        "name": "手机产业链",
        "change_pct": 1.47
      },
      {
        "name": "超高清视频",
        "change_pct": 0.37
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.53
      },
      {
        "name": "电竞",
        "change_pct": -0.37
      },
      {
        "name": "半导体",
        "change_pct": 2.36
      },
      {
        "name": "人工智能",
        "change_pct": 0.29
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.22
      },
      {
        "name": "VR&AR",
        "change_pct": 0.93
      },
      {
        "name": "OLED",
        "change_pct": 1.72
      },
      {
        "name": "京津冀",
        "change_pct": -0.16
      },
      {
        "name": "物联网",
        "change_pct": 0.94
      },
      {
        "name": "指纹识别",
        "change_pct": 1.63
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.05
      },
      {
        "name": "白马股",
        "change_pct": -0.5
      },
      {
        "name": "智能制造",
        "change_pct": 0.76
      },
      {
        "name": "小米概念股",
        "change_pct": 0.9
      },
      {
        "name": "国产芯片",
        "change_pct": 1.67
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.63
      },
      {
        "name": "全息概念",
        "change_pct": 0.54
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.04
      },
      {
        "name": "MicroLED",
        "change_pct": 2.04
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.61
      },
      {
        "name": "智能手表",
        "change_pct": 0.89
      },
      {
        "name": "MiniLED",
        "change_pct": 2.06
      },
      {
        "name": "传感器",
        "change_pct": 0.7
      },
      {
        "name": "大硅片",
        "change_pct": 3.33
      },
      {
        "name": "AI PC",
        "change_pct": 0.87
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      },
      {
        "name": "回购",
        "change_pct": -0.47
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.82
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.81
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 24,
    "hot_rank_chg": 18,
    "stock_cnt": 5760,
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
        "change_pct": 0.22
      },
      {
        "name": "光伏",
        "change_pct": 0.2
      },
      {
        "name": "特高压",
        "change_pct": -0.47
      },
      {
        "name": "智能电网",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 33,
    "hot_rank_chg": 0,
    "stock_cnt": 5760,
    "price": "12.19",
    "change": "-9.90",
    "market_id": "33",
    "circulate_market_value": "11377214500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.07
      },
      {
        "name": "新疆概念",
        "change_pct": 0.53
      },
      {
        "name": "光伏",
        "change_pct": 0.2
      },
      {
        "name": "风电",
        "change_pct": -0.26
      },
      {
        "name": "储能",
        "change_pct": -0.3
      },
      {
        "name": "国企改革",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 35,
    "hot_rank_chg": 50,
    "stock_cnt": 5760,
    "price": "11.70",
    "change": "2.54",
    "market_id": "33",
    "circulate_market_value": "9465522200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.99
      },
      {
        "name": "大飞机",
        "change_pct": 0.36
      },
      {
        "name": "北斗导航",
        "change_pct": 1.0
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.35
      },
      {
        "name": "军民融合",
        "change_pct": 0.65
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.06
      },
      {
        "name": "军工",
        "change_pct": 0.53
      },
      {
        "name": "碳纤维",
        "change_pct": 0.9
      },
      {
        "name": "无人机",
        "change_pct": 0.44
      },
      {
        "name": "航天",
        "change_pct": 1.08
      },
      {
        "name": "卫星互联网",
        "change_pct": 1.65
      },
      {
        "name": "低空经济",
        "change_pct": 0.76
      },
      {
        "name": "海洋经济",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 39,
    "hot_rank_chg": 24,
    "stock_cnt": 5760,
    "price": "9.58",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "3683966300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "CRO",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.32
      },
      {
        "name": "股权转让",
        "change_pct": 0.82
      },
      {
        "name": "新疆概念",
        "change_pct": 0.53
      },
      {
        "name": "医药",
        "change_pct": 0.01
      },
      {
        "name": "流感",
        "change_pct": 0.19
      },
      {
        "name": "国资入股",
        "change_pct": 0.49
      },
      {
        "name": "减肥药",
        "change_pct": -0.86
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 41,
    "hot_rank_chg": -16,
    "stock_cnt": 5760,
    "price": "3.01",
    "change": "-5.05",
    "market_id": "33",
    "circulate_market_value": "28635202000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 2.36
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.41
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.05
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.15
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.31
      },
      {
        "name": "减速器",
        "change_pct": -0.07
      },
      {
        "name": "华为汽车",
        "change_pct": -0.08
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 57,
    "hot_rank_chg": 2,
    "stock_cnt": 5760,
    "price": "11.74",
    "change": "4.63",
    "market_id": "17",
    "circulate_market_value": "15064752000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.35
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "智能制造",
        "change_pct": 0.76
      },
      {
        "name": "工业互联网",
        "change_pct": 0.22
      },
      {
        "name": "培育钻石",
        "change_pct": 1.15
      },
      {
        "name": "金刚线",
        "change_pct": 2.72
      },
      {
        "name": "国资入股",
        "change_pct": 0.49
      },
      {
        "name": "深地经济",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 59,
    "hot_rank_chg": -12,
    "stock_cnt": 5760,
    "price": "4.89",
    "change": "4.26",
    "market_id": "17",
    "circulate_market_value": "7644617000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 0.41
      },
      {
        "name": "共享经济",
        "change_pct": -0.23
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.03
      },
      {
        "name": "旅游",
        "change_pct": 0.05
      },
      {
        "name": "物业管理",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 65,
    "hot_rank_chg": -15,
    "stock_cnt": 5760,
    "price": "12.12",
    "change": "-4.57",
    "market_id": "33",
    "circulate_market_value": "8301017100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.26
      },
      {
        "name": "核电",
        "change_pct": -0.12
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "充电桩",
        "change_pct": 0.25
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.03
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.15
      },
      {
        "name": "储能",
        "change_pct": -0.3
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.23
      },
      {
        "name": "智能电网",
        "change_pct": -0.02
      },
      {
        "name": "核聚变",
        "change_pct": -0.35
      }
    ]
  },
  {
    "code": "603106",
    "name": "恒银科技",
    "hot_rank": 67,
    "hot_rank_chg": 47,
    "stock_cnt": 5760,
    "price": "10.04",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "5226020800.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "金融智能终端",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 0.93
      },
      {
        "name": "人工智能",
        "change_pct": 0.29
      },
      {
        "name": "人脸识别",
        "change_pct": 0.68
      },
      {
        "name": "智慧停车",
        "change_pct": 0.2
      },
      {
        "name": "雄安新区",
        "change_pct": 0.24
      },
      {
        "name": "信创",
        "change_pct": 0.61
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.53
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.52
      },
      {
        "name": "智慧政务",
        "change_pct": 0.11
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 69,
    "hot_rank_chg": 15,
    "stock_cnt": 5760,
    "price": "9.68",
    "change": "1.04",
    "market_id": "17",
    "circulate_market_value": "17318859000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.57
      },
      {
        "name": "纯碱",
        "change_pct": -0.3
      },
      {
        "name": "食品",
        "change_pct": -0.11
      },
      {
        "name": "土壤修复",
        "change_pct": 0.3
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.21
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.52
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.23
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 70,
    "hot_rank_chg": 17,
    "stock_cnt": 5760,
    "price": "6.25",
    "change": "-2.80",
    "market_id": "17",
    "circulate_market_value": "77475557000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.12
      },
      {
        "name": "核电",
        "change_pct": -0.12
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.66
      },
      {
        "name": "水电",
        "change_pct": -0.68
      },
      {
        "name": "火电",
        "change_pct": -0.61
      },
      {
        "name": "光伏",
        "change_pct": 0.2
      },
      {
        "name": "风电",
        "change_pct": -0.26
      },
      {
        "name": "国企改革",
        "change_pct": 0.16
      },
      {
        "name": "算电协同",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 71,
    "hot_rank_chg": 7,
    "stock_cnt": 5760,
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
        "change_pct": -0.66
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.01
      },
      {
        "name": "人工智能",
        "change_pct": 0.29
      },
      {
        "name": "VR&AR",
        "change_pct": 0.93
      },
      {
        "name": "游戏",
        "change_pct": -0.51
      },
      {
        "name": "动漫",
        "change_pct": -0.88
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.02
      },
      {
        "name": "快手概念股",
        "change_pct": -0.56
      },
      {
        "name": "NFT",
        "change_pct": -1.01
      },
      {
        "name": "元宇宙",
        "change_pct": -0.45
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.53
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.26
      },
      {
        "name": "云游戏",
        "change_pct": -1.02
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.0
      }
    ]
  },
  {
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 75,
    "hot_rank_chg": -3,
    "stock_cnt": 5760,
    "price": "6.57",
    "change": "-1.50",
    "market_id": "33",
    "circulate_market_value": "73209442000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 3.12
      },
      {
        "name": "锂电池",
        "change_pct": 0.11
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.44
      },
      {
        "name": "有色 · 铜",
        "change_pct": 0.4
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.62
      },
      {
        "name": "有色金属",
        "change_pct": 0.66
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.15
      },
      {
        "name": "人民币升值受益",
        "change_pct": -0.57
      },
      {
        "name": "硫酸",
        "change_pct": 1.84
      },
      {
        "name": "国企改革",
        "change_pct": 0.16
      },
      {
        "name": "白银",
        "change_pct": 1.36
      },
      {
        "name": "有色 · 镍",
        "change_pct": -0.21
      }
    ]
  },
  {
    "code": "600601",
    "name": "方正科技",
    "hot_rank": 76,
    "hot_rank_chg": 231,
    "stock_cnt": 5760,
    "price": "11.70",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "48792431000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "PCB",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.02
      },
      {
        "name": "光通信",
        "change_pct": 2.4
      },
      {
        "name": "PCB板",
        "change_pct": 3.2
      },
      {
        "name": "智慧城市",
        "change_pct": 0.3
      },
      {
        "name": "电子发票",
        "change_pct": 0.64
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 77,
    "hot_rank_chg": -2,
    "stock_cnt": 5760,
    "price": "5.85",
    "change": "-4.57",
    "market_id": "33",
    "circulate_market_value": "7585903500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "创新药",
        "change_pct": -0.32
      },
      {
        "name": "央企改革",
        "change_pct": 0.12
      },
      {
        "name": "医疗器械",
        "change_pct": -0.04
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.22
      },
      {
        "name": "保健品",
        "change_pct": 0.48
      },
      {
        "name": "民营医院",
        "change_pct": -0.27
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -1.11
      },
      {
        "name": "医药",
        "change_pct": 0.01
      },
      {
        "name": "化学原料药",
        "change_pct": -0.11
      },
      {
        "name": "海南概念",
        "change_pct": 0.25
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": -0.13
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.23
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.48
      },
      {
        "name": "食品",
        "change_pct": -0.11
      },
      {
        "name": "国企改革",
        "change_pct": 0.16
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.05
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.17
      },
      {
        "name": "自贸区",
        "change_pct": -0.01
      },
      {
        "name": "合成生物",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 81,
    "hot_rank_chg": 60,
    "stock_cnt": 5760,
    "price": "4.58",
    "change": "10.10",
    "market_id": "17",
    "circulate_market_value": "2561683500.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "短剧",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 0.43
      },
      {
        "name": "手游",
        "change_pct": -0.66
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.01
      },
      {
        "name": "游戏",
        "change_pct": -0.51
      },
      {
        "name": "影视",
        "change_pct": -0.57
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "002721",
    "name": "金一文化",
    "hot_rank": 87,
    "hot_rank_chg": 139,
    "stock_cnt": 5760,
    "price": "2.94",
    "change": "10.11",
    "market_id": "33",
    "circulate_market_value": "7818573100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "数字货币",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.5
      },
      {
        "name": "金融科技",
        "change_pct": 0.93
      },
      {
        "name": "人工智能",
        "change_pct": 0.29
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.44
      },
      {
        "name": "低价股",
        "change_pct": -0.21
      },
      {
        "name": "数字人民币",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 89,
    "hot_rank_chg": -18,
    "stock_cnt": 5760,
    "price": "3.44",
    "change": "-2.55",
    "market_id": "33",
    "circulate_market_value": "6891617500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 0.11
      },
      {
        "name": "数字孪生",
        "change_pct": 0.4
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.53
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "人工智能",
        "change_pct": 0.29
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.22
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.03
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.35
      },
      {
        "name": "人脸识别",
        "change_pct": 0.68
      },
      {
        "name": "智慧停车",
        "change_pct": 0.2
      },
      {
        "name": "物联网",
        "change_pct": 0.94
      },
      {
        "name": "大数据",
        "change_pct": 0.07
      },
      {
        "name": "智慧城市",
        "change_pct": 0.3
      },
      {
        "name": "雄安新区",
        "change_pct": 0.24
      },
      {
        "name": "机器人",
        "change_pct": 0.51
      },
      {
        "name": "数字经济",
        "change_pct": 0.13
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.23
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.02
      },
      {
        "name": "建筑节能",
        "change_pct": 0.59
      },
      {
        "name": "旧改",
        "change_pct": 0.45
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.05
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.17
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 1.68
      },
      {
        "name": "区块链",
        "change_pct": 0.23
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 91,
    "hot_rank_chg": 820,
    "stock_cnt": 5760,
    "price": "10.07",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "6568418800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "数字人民币",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.65
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 0.06
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.41
      },
      {
        "name": "新零售",
        "change_pct": 0.03
      },
      {
        "name": "移动支付",
        "change_pct": 1.22
      },
      {
        "name": "京津冀",
        "change_pct": -0.16
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.49
      },
      {
        "name": "国产芯片",
        "change_pct": 1.67
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.23
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.02
      },
      {
        "name": "物业管理",
        "change_pct": 0.53
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.26
      },
      {
        "name": "国企改革",
        "change_pct": 0.16
      },
      {
        "name": "数字人民币",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 92,
    "hot_rank_chg": -22,
    "stock_cnt": 5760,
    "price": "8.62",
    "change": "-1.71",
    "market_id": "33",
    "circulate_market_value": "20019740000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 3.12
      },
      {
        "name": "有色 · 铜",
        "change_pct": 0.4
      },
      {
        "name": "有色 · 锑",
        "change_pct": 1.48
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.0
      },
      {
        "name": "有色 · 锌",
        "change_pct": 0.94
      },
      {
        "name": "有色金属",
        "change_pct": 0.66
      },
      {
        "name": "国企改革",
        "change_pct": 0.16
      },
      {
        "name": "白银",
        "change_pct": 1.36
      }
    ]
  },
  {
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 93,
    "hot_rank_chg": 764,
    "stock_cnt": 5760,
    "price": "11.76",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "7052589600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "数字人民币",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.22
      },
      {
        "name": "金融科技",
        "change_pct": 0.93
      },
      {
        "name": "移动支付",
        "change_pct": 1.22
      },
      {
        "name": "物联网",
        "change_pct": 0.94
      },
      {
        "name": "数字经济",
        "change_pct": 0.13
      },
      {
        "name": "电子身份证",
        "change_pct": 2.02
      },
      {
        "name": "ETC",
        "change_pct": 0.04
      },
      {
        "name": "数字人民币",
        "change_pct": 1.48
      },
      {
        "name": "智慧政务",
        "change_pct": 0.11
      },
      {
        "name": "eSIM",
        "change_pct": 3.41
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      },
      {
        "name": "区块链",
        "change_pct": 0.23
      },
      {
        "name": "RWA",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 98,
    "hot_rank_chg": 378,
    "stock_cnt": 5760,
    "price": "7.36",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "8587971300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI安全",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.65
      },
      {
        "name": "国产软件",
        "change_pct": 0.41
      },
      {
        "name": "一带一路",
        "change_pct": 0.22
      },
      {
        "name": "量子通信",
        "change_pct": 1.61
      },
      {
        "name": "人工智能",
        "change_pct": 0.29
      },
      {
        "name": "网络安全",
        "change_pct": 1.23
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.03
      },
      {
        "name": "物联网",
        "change_pct": 0.94
      },
      {
        "name": "大数据",
        "change_pct": 0.07
      },
      {
        "name": "破净股",
        "change_pct": -0.14
      },
      {
        "name": "数字经济",
        "change_pct": 0.13
      },
      {
        "name": "国产芯片",
        "change_pct": 1.67
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.23
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.02
      },
      {
        "name": "信创",
        "change_pct": 0.61
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.07
      },
      {
        "name": "跨境支付",
        "change_pct": 0.92
      },
      {
        "name": "web3.0",
        "change_pct": 0.13
      },
      {
        "name": "数字人民币",
        "change_pct": 1.48
      },
      {
        "name": "智慧政务",
        "change_pct": 0.11
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.38
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.29
      },
      {
        "name": "卫星互联网",
        "change_pct": 1.65
      },
      {
        "name": "智慧灯杆",
        "change_pct": 1.78
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      },
      {
        "name": "回购",
        "change_pct": -0.47
      },
      {
        "name": "智能电网",
        "change_pct": -0.02
      },
      {
        "name": "低空经济",
        "change_pct": 0.76
      },
      {
        "name": "量子计算",
        "change_pct": 1.44
      },
      {
        "name": "财税改革",
        "change_pct": 0.51
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.23
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002428", "name": "云南锗业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5760, "price": "90.98", "change": "10.00", "market_id": "33", "circulate_market_value": "59413181000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "磷化铟"}, {"code": "600206", "name": "有研新材", "hot_rank": 2, "hot_rank_chg": 9, "stock_cnt": 5760, "price": "43.79", "change": "10.00", "market_id": "17", "circulate_market_value": "37070570000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报增长"}, {"code": "000636", "name": "风华高科", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5760, "price": "58.28", "change": "0.83", "market_id": "33", "circulate_market_value": "67430704000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 4, "hot_rank_chg": 32, "stock_cnt": 5760, "price": "24.79", "change": "9.98", "market_id": "17", "circulate_market_value": "6005873300.00", "change_type": "1", "change_section": "13", "change_days": "10", "change_reason": "复牌"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5760, "price": "51.96", "change": "-4.31", "market_id": "17", "circulate_market_value": "233977900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5760, "price": "10.95", "change": "-6.65", "market_id": "33", "circulate_market_value": "3115073600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.43}, {"name": "密集调研", "change_pct": -0.69}, {"name": "ST摘帽", "change_pct": 1.01}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "教育", "change_pct": -1.17}, {"name": "阿里巴巴概念股", "change_pct": -0.23}, {"name": "职业教育", "change_pct": -0.81}, {"name": "在线教育", "change_pct": -1.71}, {"name": "华为鸿蒙", "change_pct": 0.38}, {"name": "华为产业链", "change_pct": 0.63}, {"name": "智谱AI", "change_pct": -0.72}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5760, "price": "955.00", "change": "0.77", "market_id": "33", "circulate_market_value": "1059992490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5760, "price": "34.50", "change": "1.17", "market_id": "17", "circulate_market_value": "710761860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": 4, "stock_cnt": 5760, "price": "6.22", "change": "-8.12", "market_id": "17", "circulate_market_value": "15665131000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.08}, {"name": "工业大麻", "change_pct": 0.41}, {"name": "中药", "change_pct": 0.04}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "保健品", "change_pct": 0.48}, {"name": "民营医院", "change_pct": -0.27}, {"name": "医药", "change_pct": 0.01}, {"name": "化学原料药", "change_pct": -0.11}, {"name": "流感", "change_pct": 0.19}, {"name": "振兴东北", "change_pct": 0.12}, {"name": "食品", "change_pct": -0.11}]}, {"code": "600584", "name": "长电科技", "hot_rank": 10, "hot_rank_chg": 25, "stock_cnt": 5760, "price": "75.87", "change": "10.00", "market_id": "17", "circulate_market_value": "135762880000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "000657", "name": "中钨高新", "hot_rank": 11, "hot_rank_chg": 4, "stock_cnt": 5760, "price": "62.50", "change": "8.83", "market_id": "33", "circulate_market_value": "90840750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 12, "hot_rank_chg": -4, "stock_cnt": 5760, "price": "37.94", "change": "2.71", "market_id": "33", "circulate_market_value": "108511157000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 13, "hot_rank_chg": 10, "stock_cnt": 5760, "price": "16.35", "change": "0.43", "market_id": "33", "circulate_market_value": "9581886000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 14, "hot_rank_chg": 5, "stock_cnt": 5760, "price": "19.17", "change": "3.90", "market_id": "17", "circulate_market_value": "40094864000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 15, "hot_rank_chg": 7, "stock_cnt": 5760, "price": "8.10", "change": "2.27", "market_id": "33", "circulate_market_value": "13168119600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.08}, {"name": "电竞", "change_pct": -0.37}, {"name": "手游", "change_pct": -0.66}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "人工智能", "change_pct": 0.29}, {"name": "游戏", "change_pct": -0.51}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.13}, {"name": "腾讯概念股", "change_pct": -0.02}, {"name": "快手概念股", "change_pct": -0.56}, {"name": "元宇宙", "change_pct": -0.45}, {"name": "虚拟数字人", "change_pct": -0.53}, {"name": "东数西算/算力", "change_pct": -0.21}, {"name": "web3.0", "change_pct": 0.13}, {"name": "AIGC概念", "change_pct": -0.52}, {"name": "数据要素", "change_pct": 0.02}, {"name": "字节跳动概念股", "change_pct": -0.26}, {"name": "AI营销", "change_pct": -1.06}, {"name": "ChatGPT", "change_pct": -0.43}, {"name": "智能眼镜/MR头显", "change_pct": 0.82}, {"name": "人工智能大模型", "change_pct": -0.55}, {"name": "人形机器人", "change_pct": 0.58}, {"name": "短剧/互动影游", "change_pct": -0.98}, {"name": "多模态", "change_pct": -0.68}, {"name": "AI视频", "change_pct": -0.87}, {"name": "IP经济/谷子经济", "change_pct": -0.0}, {"name": "小红书概念股", "change_pct": -0.95}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 16, "hot_rank_chg": 5, "stock_cnt": 5760, "price": "385.00", "change": "-0.11", "market_id": "17", "circulate_market_value": "257369390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 17, "hot_rank_chg": -11, "stock_cnt": 5760, "price": "187.68", "change": "-0.61", "market_id": "33", "circulate_market_value": "260184860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 18, "hot_rank_chg": -8, "stock_cnt": 5760, "price": "5.48", "change": "-3.35", "market_id": "33", "circulate_market_value": "32084296000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.35}, {"name": "人工智能", "change_pct": 0.29}, {"name": "水利", "change_pct": 0.31}, {"name": "直播/短视频", "change_pct": -0.55}, {"name": "大数据", "change_pct": 0.07}, {"name": "园林", "change_pct": 0.9}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.9}, {"name": "数字经济", "change_pct": 0.13}, {"name": "腾讯概念股", "change_pct": -0.02}, {"name": "理想汽车概念股", "change_pct": 0.04}, {"name": "第三代半导体", "change_pct": 1.92}, {"name": "快手概念股", "change_pct": -0.56}, {"name": "IGBT", "change_pct": 0.55}, {"name": "虚拟数字人", "change_pct": -0.53}, {"name": "AIGC概念", "change_pct": -0.52}, {"name": "字节跳动概念股", "change_pct": -0.26}, {"name": "氮化镓", "change_pct": 1.63}, {"name": "AI营销", "change_pct": -1.06}, {"name": "多模态", "change_pct": -0.68}, {"name": "液冷服务器", "change_pct": 1.25}, {"name": "小红书概念股", "change_pct": -0.95}, {"name": "区块链", "change_pct": 0.23}]}, {"code": "603629", "name": "利通电子", "hot_rank": 19, "hot_rank_chg": -2, "stock_cnt": 5760, "price": "122.52", "change": "8.76", "market_id": "17", "circulate_market_value": "44195831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 20, "hot_rank_chg": -11, "stock_cnt": 5760, "price": "17.35", "change": "-1.03", "market_id": "17", "circulate_market_value": "25551463000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 21, "hot_rank_chg": 8, "stock_cnt": 5760, "price": "31.30", "change": "7.38", "market_id": "33", "circulate_market_value": "20868222000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 22, "hot_rank_chg": -4, "stock_cnt": 5760, "price": "5.96", "change": "-0.17", "market_id": "33", "circulate_market_value": "210788120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.41}, {"name": "手机产业链", "change_pct": 1.47}, {"name": "超高清视频", "change_pct": 0.37}, {"name": "苹果产业链", "change_pct": 1.53}, {"name": "电竞", "change_pct": -0.37}, {"name": "半导体", "change_pct": 2.36}, {"name": "人工智能", "change_pct": 0.29}, {"name": "互联网医疗", "change_pct": -0.22}, {"name": "VR&AR", "change_pct": 0.93}, {"name": "OLED", "change_pct": 1.72}, {"name": "京津冀", "change_pct": -0.16}, {"name": "物联网", "change_pct": 0.94}, {"name": "指纹识别", "change_pct": 1.63}, {"name": "汽车零部件", "change_pct": 0.05}, {"name": "白马股", "change_pct": -0.5}, {"name": "智能制造", "change_pct": 0.76}, {"name": "小米概念股", "change_pct": 0.9}, {"name": "国产芯片", "change_pct": 1.67}, {"name": "液晶面板/LCD", "change_pct": 1.63}, {"name": "全息概念", "change_pct": 0.54}, {"name": "理想汽车概念股", "change_pct": 0.04}, {"name": "MicroLED", "change_pct": 2.04}, {"name": "钙钛矿电池", "change_pct": -0.61}, {"name": "智能手表", "change_pct": 0.89}, {"name": "MiniLED", "change_pct": 2.06}, {"name": "传感器", "change_pct": 0.7}, {"name": "大硅片", "change_pct": 3.33}, {"name": "AI PC", "change_pct": 0.87}, {"name": "华为产业链", "change_pct": 0.63}, {"name": "回购", "change_pct": -0.47}, {"name": "智能眼镜/MR头显", "change_pct": 0.82}, {"name": "玻璃基板封装", "change_pct": 2.81}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 23, "hot_rank_chg": -7, "stock_cnt": 5760, "price": "56.15", "change": "3.20", "market_id": "17", "circulate_market_value": "137772240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 24, "hot_rank_chg": 18, "stock_cnt": 5760, "price": "7.16", "change": "9.98", "market_id": "17", "circulate_market_value": "8153502300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "特高压", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.22}, {"name": "光伏", "change_pct": 0.2}, {"name": "特高压", "change_pct": -0.47}, {"name": "智能电网", "change_pct": -0.02}]}, {"code": "002185", "name": "华天科技", "hot_rank": 25, "hot_rank_chg": 13, "stock_cnt": 5760, "price": "17.26", "change": "4.04", "market_id": "33", "circulate_market_value": "57348969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 26, "hot_rank_chg": -14, "stock_cnt": 5760, "price": "68.27", "change": "3.56", "market_id": "17", "circulate_market_value": "1354756200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 27, "hot_rank_chg": -7, "stock_cnt": 5760, "price": "18.31", "change": "-2.87", "market_id": "33", "circulate_market_value": "12730266200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 28, "hot_rank_chg": 17, "stock_cnt": 5760, "price": "66.80", "change": "9.99", "market_id": "17", "circulate_market_value": "27813363000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "光刻胶"}, {"code": "001309", "name": "德明利", "hot_rank": 29, "hot_rank_chg": -5, "stock_cnt": 5760, "price": "388.25", "change": "0.52", "market_id": "33", "circulate_market_value": "64072802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 30, "hot_rank_chg": 13, "stock_cnt": 5760, "price": "13.93", "change": "7.32", "market_id": "33", "circulate_market_value": "8126927700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 31, "hot_rank_chg": 0, "stock_cnt": 5760, "price": "40.78", "change": "3.82", "market_id": "17", "circulate_market_value": "161961320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 32, "hot_rank_chg": 26, "stock_cnt": 5760, "price": "60.96", "change": "5.10", "market_id": "33", "circulate_market_value": "92503887000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 33, "hot_rank_chg": 0, "stock_cnt": 5760, "price": "12.19", "change": "-9.90", "market_id": "33", "circulate_market_value": "11377214500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.55}, {"name": "新疆国企改革", "change_pct": 0.07}, {"name": "新疆概念", "change_pct": 0.53}, {"name": "光伏", "change_pct": 0.2}, {"name": "风电", "change_pct": -0.26}, {"name": "储能", "change_pct": -0.3}, {"name": "国企改革", "change_pct": 0.16}]}, {"code": "300476", "name": "胜宏科技", "hot_rank": 34, "hot_rank_chg": 3, "stock_cnt": 5760, "price": "250.15", "change": "5.84", "market_id": "33", "circulate_market_value": "216428520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 35, "hot_rank_chg": 50, "stock_cnt": 5760, "price": "11.70", "change": "2.54", "market_id": "33", "circulate_market_value": "9465522200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.99}, {"name": "大飞机", "change_pct": 0.36}, {"name": "北斗导航", "change_pct": 1.0}, {"name": "高铁轨交", "change_pct": 0.35}, {"name": "军民融合", "change_pct": 0.65}, {"name": "磁悬浮", "change_pct": -0.06}, {"name": "军工", "change_pct": 0.53}, {"name": "碳纤维", "change_pct": 0.9}, {"name": "无人机", "change_pct": 0.44}, {"name": "航天", "change_pct": 1.08}, {"name": "卫星互联网", "change_pct": 1.65}, {"name": "低空经济", "change_pct": 0.76}, {"name": "海洋经济", "change_pct": 0.48}]}, {"code": "002792", "name": "通宇通讯", "hot_rank": 36, "hot_rank_chg": 103, "stock_cnt": 5760, "price": "33.81", "change": "9.99", "market_id": "33", "circulate_market_value": "11421845700.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "拟入股佳贤通信"}, {"code": "603259", "name": "药明康德", "hot_rank": 37, "hot_rank_chg": -23, "stock_cnt": 5760, "price": "142.70", "change": "-3.25", "market_id": "17", "circulate_market_value": "352937090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 38, "hot_rank_chg": 8, "stock_cnt": 5760, "price": "36.09", "change": "10.00", "market_id": "33", "circulate_market_value": "38932713000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体级氢氟酸"}, {"code": "600721", "name": "百花医药", "hot_rank": 39, "hot_rank_chg": 24, "stock_cnt": 5760, "price": "9.58", "change": "9.99", "market_id": "17", "circulate_market_value": "3683966300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "CRO", "xgb_concepts": [{"name": "创新药", "change_pct": -0.32}, {"name": "股权转让", "change_pct": 0.82}, {"name": "新疆概念", "change_pct": 0.53}, {"name": "医药", "change_pct": 0.01}, {"name": "流感", "change_pct": 0.19}, {"name": "国资入股", "change_pct": 0.49}, {"name": "减肥药", "change_pct": -0.86}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 40, "hot_rank_chg": -8, "stock_cnt": 5760, "price": "15.34", "change": "-2.48", "market_id": "33", "circulate_market_value": "53351451000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000981", "name": "山子高科", "hot_rank": 41, "hot_rank_chg": -16, "stock_cnt": 5760, "price": "3.01", "change": "-5.05", "market_id": "33", "circulate_market_value": "28635202000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 2.36}, {"name": "无人驾驶", "change_pct": 0.41}, {"name": "汽车零部件", "change_pct": 0.05}, {"name": "新能源汽车", "change_pct": 0.15}, {"name": "新能源车零部件", "change_pct": 0.31}, {"name": "减速器", "change_pct": -0.07}, {"name": "华为汽车", "change_pct": -0.08}]}, {"code": "002202", "name": "金风科技", "hot_rank": 42, "hot_rank_chg": 63, "stock_cnt": 5760, "price": "20.76", "change": "2.98", "market_id": "33", "circulate_market_value": "69826365000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 43, "hot_rank_chg": 9, "stock_cnt": 5760, "price": "34.81", "change": "1.58", "market_id": "33", "circulate_market_value": "27235505000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603039", "name": "泛微网络", "hot_rank": 44, "hot_rank_chg": 35, "stock_cnt": 5760, "price": "49.10", "change": "9.99", "market_id": "17", "circulate_market_value": "15105082000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI应用"}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 45, "hot_rank_chg": -18, "stock_cnt": 5760, "price": "36.23", "change": "-1.71", "market_id": "17", "circulate_market_value": "56433026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 46, "hot_rank_chg": -18, "stock_cnt": 5760, "price": "421.87", "change": "-0.57", "market_id": "33", "circulate_market_value": "529127560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 47, "hot_rank_chg": 249, "stock_cnt": 5760, "price": "86.32", "change": "10.00", "market_id": "17", "circulate_market_value": "84758775000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力PCB"}, {"code": "300139", "name": "晓程科技", "hot_rank": 48, "hot_rank_chg": 9, "stock_cnt": 5760, "price": "46.04", "change": "2.98", "market_id": "33", "circulate_market_value": "10757670700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600549", "name": "厦门钨业", "hot_rank": 49, "hot_rank_chg": 15, "stock_cnt": 5760, "price": "57.47", "change": "6.98", "market_id": "17", "circulate_market_value": "89304471000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 50, "hot_rank_chg": 24, "stock_cnt": 5760, "price": "16.89", "change": "10.03", "market_id": "17", "circulate_market_value": "16720422000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "钨钽铌资产注入"}, {"code": "002827", "name": "高争民爆", "hot_rank": 51, "hot_rank_chg": 87, "stock_cnt": 5760, "price": "49.24", "change": "10.01", "market_id": "33", "circulate_market_value": "13590177000.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "控股股东拟变更"}, {"code": "300285", "name": "国瓷材料", "hot_rank": 52, "hot_rank_chg": -11, "stock_cnt": 5760, "price": "69.53", "change": "3.36", "market_id": "33", "circulate_market_value": "59314165000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 53, "hot_rank_chg": 1, "stock_cnt": 5760, "price": "38.38", "change": "5.01", "market_id": "17", "circulate_market_value": "56111361000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 54, "hot_rank_chg": -5, "stock_cnt": 5760, "price": "20.37", "change": "-0.49", "market_id": "17", "circulate_market_value": "355677360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 55, "hot_rank_chg": 22, "stock_cnt": 5760, "price": "39.91", "change": "3.13", "market_id": "33", "circulate_market_value": "62824549000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 56, "hot_rank_chg": 0, "stock_cnt": 5760, "price": "32.29", "change": "0.91", "market_id": "17", "circulate_market_value": "110204144000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 57, "hot_rank_chg": 2, "stock_cnt": 5760, "price": "11.74", "change": "4.63", "market_id": "17", "circulate_market_value": "15064752000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.35}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "智能制造", "change_pct": 0.76}, {"name": "工业互联网", "change_pct": 0.22}, {"name": "培育钻石", "change_pct": 1.15}, {"name": "金刚线", "change_pct": 2.72}, {"name": "国资入股", "change_pct": 0.49}, {"name": "深地经济", "change_pct": 0.84}]}, {"code": "001232", "name": "嘉立创", "hot_rank": 58, "hot_rank_chg": -19, "stock_cnt": 5760, "price": "176.81", "change": "-11.55", "market_id": "33", "circulate_market_value": "7816159900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 59, "hot_rank_chg": -12, "stock_cnt": 5760, "price": "4.89", "change": "4.26", "market_id": "17", "circulate_market_value": "7644617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.41}, {"name": "共享经济", "change_pct": -0.23}, {"name": "云计算数据中心", "change_pct": 0.03}, {"name": "旅游", "change_pct": 0.05}, {"name": "物业管理", "change_pct": 0.53}]}, {"code": "600703", "name": "三安光电", "hot_rank": 60, "hot_rank_chg": 13, "stock_cnt": 5760, "price": "13.71", "change": "2.70", "market_id": "17", "circulate_market_value": "68399447000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 61, "hot_rank_chg": -21, "stock_cnt": 5760, "price": "21.66", "change": "-7.20", "market_id": "17", "circulate_market_value": "8685660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 62, "hot_rank_chg": 7, "stock_cnt": 5760, "price": "35.20", "change": "2.95", "market_id": "33", "circulate_market_value": "49434631000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 63, "hot_rank_chg": -2, "stock_cnt": 5760, "price": "16.48", "change": "5.51", "market_id": "33", "circulate_market_value": "15305091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 64, "hot_rank_chg": 4, "stock_cnt": 5760, "price": "36.98", "change": "7.00", "market_id": "33", "circulate_market_value": "9927738000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 65, "hot_rank_chg": -15, "stock_cnt": 5760, "price": "12.12", "change": "-4.57", "market_id": "33", "circulate_market_value": "8301017100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.26}, {"name": "核电", "change_pct": -0.12}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "充电桩", "change_pct": 0.25}, {"name": "云计算数据中心", "change_pct": 0.03}, {"name": "新能源汽车", "change_pct": 0.15}, {"name": "储能", "change_pct": -0.3}, {"name": "阿里巴巴概念股", "change_pct": -0.23}, {"name": "智能电网", "change_pct": -0.02}, {"name": "核聚变", "change_pct": -0.35}]}, {"code": "603773", "name": "沃格光电", "hot_rank": 66, "hot_rank_chg": 17, "stock_cnt": 5760, "price": "86.43", "change": "10.00", "market_id": "17", "circulate_market_value": "19418974000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "TGV玻璃基板"}, {"code": "603106", "name": "恒银科技", "hot_rank": 67, "hot_rank_chg": 47, "stock_cnt": 5760, "price": "10.04", "change": "9.97", "market_id": "17", "circulate_market_value": "5226020800.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "金融智能终端", "xgb_concepts": [{"name": "金融科技", "change_pct": 0.93}, {"name": "人工智能", "change_pct": 0.29}, {"name": "人脸识别", "change_pct": 0.68}, {"name": "智慧停车", "change_pct": 0.2}, {"name": "雄安新区", "change_pct": 0.24}, {"name": "信创", "change_pct": 0.61}, {"name": "虚拟数字人", "change_pct": -0.53}, {"name": "AIGC概念", "change_pct": -0.52}, {"name": "智慧政务", "change_pct": 0.11}, {"name": "医疗信息化", "change_pct": 0.05}]}, {"code": "603468", "name": "津富士达", "hot_rank": 68, "hot_rank_chg": 979, "stock_cnt": 5760, "price": "37.49", "change": "114.72", "market_id": "17", "circulate_market_value": "1499171600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 69, "hot_rank_chg": 15, "stock_cnt": 5760, "price": "9.68", "change": "1.04", "market_id": "17", "circulate_market_value": "17318859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.57}, {"name": "纯碱", "change_pct": -0.3}, {"name": "食品", "change_pct": -0.11}, {"name": "土壤修复", "change_pct": 0.3}, {"name": "东数西算/算力", "change_pct": -0.21}, {"name": "OpenClaw概念", "change_pct": -0.52}, {"name": "DeepSeek概念股", "change_pct": 0.23}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 70, "hot_rank_chg": 17, "stock_cnt": 5760, "price": "6.25", "change": "-2.80", "market_id": "17", "circulate_market_value": "77475557000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.12}, {"name": "核电", "change_pct": -0.12}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "电力体制改革", "change_pct": -0.66}, {"name": "水电", "change_pct": -0.68}, {"name": "火电", "change_pct": -0.61}, {"name": "光伏", "change_pct": 0.2}, {"name": "风电", "change_pct": -0.26}, {"name": "国企改革", "change_pct": 0.16}, {"name": "算电协同", "change_pct": -0.97}]}, {"code": "002425", "name": "凯撒文化", "hot_rank": 71, "hot_rank_chg": 7, "stock_cnt": 5760, "price": "3.82", "change": "10.09", "market_id": "33", "circulate_market_value": "3515110200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "游戏IP", "xgb_concepts": [{"name": "手游", "change_pct": -0.66}, {"name": "ST摘帽", "change_pct": 1.01}, {"name": "人工智能", "change_pct": 0.29}, {"name": "VR&AR", "change_pct": 0.93}, {"name": "游戏", "change_pct": -0.51}, {"name": "动漫", "change_pct": -0.88}, {"name": "腾讯概念股", "change_pct": -0.02}, {"name": "快手概念股", "change_pct": -0.56}, {"name": "NFT", "change_pct": -1.01}, {"name": "元宇宙", "change_pct": -0.45}, {"name": "虚拟数字人", "change_pct": -0.53}, {"name": "字节跳动概念股", "change_pct": -0.26}, {"name": "云游戏", "change_pct": -1.02}, {"name": "IP经济/谷子经济", "change_pct": -0.0}]}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 72, "hot_rank_chg": -28, "stock_cnt": 5760, "price": "41.30", "change": "1.13", "market_id": "17", "circulate_market_value": "68719540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 73, "hot_rank_chg": -20, "stock_cnt": 5760, "price": "28.65", "change": "6.39", "market_id": "33", "circulate_market_value": "8381948600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 74, "hot_rank_chg": -12, "stock_cnt": 5760, "price": "225.28", "change": "3.89", "market_id": "33", "circulate_market_value": "245192060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000630", "name": "铜陵有色", "hot_rank": 75, "hot_rank_chg": -3, "stock_cnt": 5760, "price": "6.57", "change": "-1.50", "market_id": "33", "circulate_market_value": "73209442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 3.12}, {"name": "锂电池", "change_pct": 0.11}, {"name": "安徽国企改革", "change_pct": 0.44}, {"name": "有色 · 铜", "change_pct": 0.4}, {"name": "铜箔/覆铜板", "change_pct": 2.62}, {"name": "有色金属", "change_pct": 0.66}, {"name": "新能源汽车", "change_pct": 0.15}, {"name": "人民币升值受益", "change_pct": -0.57}, {"name": "硫酸", "change_pct": 1.84}, {"name": "国企改革", "change_pct": 0.16}, {"name": "白银", "change_pct": 1.36}, {"name": "有色 · 镍", "change_pct": -0.21}]}, {"code": "600601", "name": "方正科技", "hot_rank": 76, "hot_rank_chg": 231, "stock_cnt": 5760, "price": "11.70", "change": "9.96", "market_id": "17", "circulate_market_value": "48792431000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.02}, {"name": "光通信", "change_pct": 2.4}, {"name": "PCB板", "change_pct": 3.2}, {"name": "智慧城市", "change_pct": 0.3}, {"name": "电子发票", "change_pct": 0.64}, {"name": "华为产业链", "change_pct": 0.63}]}, {"code": "000566", "name": "海南海药", "hot_rank": 77, "hot_rank_chg": -2, "stock_cnt": 5760, "price": "5.85", "change": "-4.57", "market_id": "33", "circulate_market_value": "7585903500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.04}, {"name": "创新药", "change_pct": -0.32}, {"name": "央企改革", "change_pct": 0.12}, {"name": "医疗器械", "change_pct": -0.04}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "互联网医疗", "change_pct": -0.22}, {"name": "保健品", "change_pct": 0.48}, {"name": "民营医院", "change_pct": -0.27}, {"name": "CAR-T疗法", "change_pct": -1.11}, {"name": "医药", "change_pct": 0.01}, {"name": "化学原料药", "change_pct": -0.11}, {"name": "海南概念", "change_pct": 0.25}, {"name": "脑科学/脑机接口", "change_pct": -0.13}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -0.23}, {"name": "海南自由贸易港", "change_pct": -0.48}, {"name": "食品", "change_pct": -0.11}, {"name": "国企改革", "change_pct": 0.16}, {"name": "医疗信息化", "change_pct": 0.05}, {"name": "新冠病毒防治", "change_pct": 0.17}, {"name": "自贸区", "change_pct": -0.01}, {"name": "合成生物", "change_pct": -0.2}]}, {"code": "600183", "name": "生益科技", "hot_rank": 78, "hot_rank_chg": -12, "stock_cnt": 5760, "price": "127.25", "change": "3.63", "market_id": "17", "circulate_market_value": "306895040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 79, "hot_rank_chg": -3, "stock_cnt": 5760, "price": "15.97", "change": "-1.11", "market_id": "17", "circulate_market_value": "17511020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001337", "name": "四川黄金", "hot_rank": 80, "hot_rank_chg": -32, "stock_cnt": 5760, "price": "45.01", "change": "4.02", "market_id": "33", "circulate_market_value": "18904200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 81, "hot_rank_chg": 60, "stock_cnt": 5760, "price": "4.58", "change": "10.10", "market_id": "17", "circulate_market_value": "2561683500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "短剧", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.43}, {"name": "手游", "change_pct": -0.66}, {"name": "ST摘帽", "change_pct": 1.01}, {"name": "游戏", "change_pct": -0.51}, {"name": "影视", "change_pct": -0.57}, {"name": "短剧/互动影游", "change_pct": -0.98}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 83, "hot_rank_chg": -23, "stock_cnt": 5760, "price": "19.11", "change": "-6.28", "market_id": "33", "circulate_market_value": "8644194500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 84, "hot_rank_chg": 60, "stock_cnt": 5760, "price": "43.27", "change": "9.99", "market_id": "33", "circulate_market_value": "15945137000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "覆铜板"}, {"code": "301171", "name": "易点天下", "hot_rank": 85, "hot_rank_chg": 5, "stock_cnt": 5760, "price": "38.42", "change": "-1.51", "market_id": "33", "circulate_market_value": "19282409000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 86, "hot_rank_chg": -35, "stock_cnt": 5760, "price": "328.25", "change": "5.07", "market_id": "17", "circulate_market_value": "133380552000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002721", "name": "金一文化", "hot_rank": 87, "hot_rank_chg": 139, "stock_cnt": 5760, "price": "2.94", "change": "10.11", "market_id": "33", "circulate_market_value": "7818573100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数字货币", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.5}, {"name": "金融科技", "change_pct": 0.93}, {"name": "人工智能", "change_pct": 0.29}, {"name": "珠宝饰品", "change_pct": 0.44}, {"name": "低价股", "change_pct": -0.21}, {"name": "数字人民币", "change_pct": 1.48}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 88, "hot_rank_chg": 11, "stock_cnt": 5760, "price": "55.90", "change": "0.05", "market_id": "33", "circulate_market_value": "409471700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 89, "hot_rank_chg": -18, "stock_cnt": 5760, "price": "3.44", "change": "-2.55", "market_id": "33", "circulate_market_value": "6891617500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": 0.11}, {"name": "数字孪生", "change_pct": 0.4}, {"name": "深圳本地股", "change_pct": 0.53}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "人工智能", "change_pct": 0.29}, {"name": "互联网医疗", "change_pct": -0.22}, {"name": "云计算数据中心", "change_pct": 0.03}, {"name": "高铁轨交", "change_pct": 0.35}, {"name": "人脸识别", "change_pct": 0.68}, {"name": "智慧停车", "change_pct": 0.2}, {"name": "物联网", "change_pct": 0.94}, {"name": "大数据", "change_pct": 0.07}, {"name": "智慧城市", "change_pct": 0.3}, {"name": "雄安新区", "change_pct": 0.24}, {"name": "机器人", "change_pct": 0.51}, {"name": "数字经济", "change_pct": 0.13}, {"name": "阿里巴巴概念股", "change_pct": -0.23}, {"name": "腾讯概念股", "change_pct": -0.02}, {"name": "建筑节能", "change_pct": 0.59}, {"name": "旧改", "change_pct": 0.45}, {"name": "医疗信息化", "change_pct": 0.05}, {"name": "新冠病毒防治", "change_pct": 0.17}, {"name": "华为产业链", "change_pct": 0.63}, {"name": "医疗耗材供应链SPD", "change_pct": 1.68}, {"name": "区块链", "change_pct": 0.23}]}, {"code": "300996", "name": "普联软件", "hot_rank": 90, "hot_rank_chg": 91, "stock_cnt": 5760, "price": "20.31", "change": "5.78", "market_id": "33", "circulate_market_value": "6766120200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603123", "name": "翠微股份", "hot_rank": 91, "hot_rank_chg": 820, "stock_cnt": 5760, "price": "10.07", "change": "10.05", "market_id": "17", "circulate_market_value": "6568418800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数字人民币", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.65}, {"name": "蚂蚁集团概念股", "change_pct": 0.06}, {"name": "无人驾驶", "change_pct": 0.41}, {"name": "新零售", "change_pct": 0.03}, {"name": "移动支付", "change_pct": 1.22}, {"name": "京津冀", "change_pct": -0.16}, {"name": "北京城市规划", "change_pct": 0.49}, {"name": "国产芯片", "change_pct": 1.67}, {"name": "阿里巴巴概念股", "change_pct": -0.23}, {"name": "腾讯概念股", "change_pct": -0.02}, {"name": "物业管理", "change_pct": 0.53}, {"name": "字节跳动概念股", "change_pct": -0.26}, {"name": "国企改革", "change_pct": 0.16}, {"name": "数字人民币", "change_pct": 1.48}]}, {"code": "002716", "name": "湖南白银", "hot_rank": 92, "hot_rank_chg": -22, "stock_cnt": 5760, "price": "8.62", "change": "-1.71", "market_id": "33", "circulate_market_value": "20019740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 3.12}, {"name": "有色 · 铜", "change_pct": 0.4}, {"name": "有色 · 锑", "change_pct": 1.48}, {"name": "湖南国企改革", "change_pct": -0.0}, {"name": "有色 · 锌", "change_pct": 0.94}, {"name": "有色金属", "change_pct": 0.66}, {"name": "国企改革", "change_pct": 0.16}, {"name": "白银", "change_pct": 1.36}]}, {"code": "002104", "name": "恒宝股份", "hot_rank": 93, "hot_rank_chg": 764, "stock_cnt": 5760, "price": "11.76", "change": "10.01", "market_id": "33", "circulate_market_value": "7052589600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数字人民币", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.22}, {"name": "金融科技", "change_pct": 0.93}, {"name": "移动支付", "change_pct": 1.22}, {"name": "物联网", "change_pct": 0.94}, {"name": "数字经济", "change_pct": 0.13}, {"name": "电子身份证", "change_pct": 2.02}, {"name": "ETC", "change_pct": 0.04}, {"name": "数字人民币", "change_pct": 1.48}, {"name": "智慧政务", "change_pct": 0.11}, {"name": "eSIM", "change_pct": 3.41}, {"name": "华为产业链", "change_pct": 0.63}, {"name": "区块链", "change_pct": 0.23}, {"name": "RWA", "change_pct": 0.54}]}, {"code": "000426", "name": "兴业银锡", "hot_rank": 94, "hot_rank_chg": 7, "stock_cnt": 5760, "price": "37.58", "change": "3.53", "market_id": "33", "circulate_market_value": "66712221000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 95, "hot_rank_chg": 16, "stock_cnt": 5760, "price": "117.20", "change": "1.38", "market_id": "33", "circulate_market_value": "225353390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 96, "hot_rank_chg": 11, "stock_cnt": 5760, "price": "87.80", "change": "-0.96", "market_id": "17", "circulate_market_value": "128456171000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600111", "name": "北方稀土", "hot_rank": 97, "hot_rank_chg": -4, "stock_cnt": 5760, "price": "41.91", "change": "0.34", "market_id": "17", "circulate_market_value": "151507410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002212", "name": "天融信", "hot_rank": 98, "hot_rank_chg": 378, "stock_cnt": 5760, "price": "7.36", "change": "10.02", "market_id": "33", "circulate_market_value": "8587971300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI安全", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.65}, {"name": "国产软件", "change_pct": 0.41}, {"name": "一带一路", "change_pct": 0.22}, {"name": "量子通信", "change_pct": 1.61}, {"name": "人工智能", "change_pct": 0.29}, {"name": "网络安全", "change_pct": 1.23}, {"name": "云计算数据中心", "change_pct": 0.03}, {"name": "物联网", "change_pct": 0.94}, {"name": "大数据", "change_pct": 0.07}, {"name": "破净股", "change_pct": -0.14}, {"name": "数字经济", "change_pct": 0.13}, {"name": "国产芯片", "change_pct": 1.67}, {"name": "阿里巴巴概念股", "change_pct": -0.23}, {"name": "腾讯概念股", "change_pct": -0.02}, {"name": "信创", "change_pct": 0.61}, {"name": "华为昇腾", "change_pct": 0.07}, {"name": "跨境支付", "change_pct": 0.92}, {"name": "web3.0", "change_pct": 0.13}, {"name": "数字人民币", "change_pct": 1.48}, {"name": "智慧政务", "change_pct": 0.11}, {"name": "华为鸿蒙", "change_pct": 0.38}, {"name": "华为云·鲲鹏", "change_pct": 0.29}, {"name": "卫星互联网", "change_pct": 1.65}, {"name": "智慧灯杆", "change_pct": 1.78}, {"name": "华为产业链", "change_pct": 0.63}, {"name": "回购", "change_pct": -0.47}, {"name": "智能电网", "change_pct": -0.02}, {"name": "低空经济", "change_pct": 0.76}, {"name": "量子计算", "change_pct": 1.44}, {"name": "财税改革", "change_pct": 0.51}, {"name": "DeepSeek概念股", "change_pct": 0.23}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 99, "hot_rank_chg": -32, "stock_cnt": 5760, "price": "76.79", "change": "-0.53", "market_id": "33", "circulate_market_value": "112638014000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 100, "hot_rank_chg": 3, "stock_cnt": 5760, "price": "145.01", "change": "3.12", "market_id": "33", "circulate_market_value": "46188984000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "601700", "name": "风范股份", "price": 7.16, "change_pct": 9.98, "reason": "公司中标2.9亿元南方电网特高压直流输电工程项目", "plates": ["智能电网"], "limit_up_days": 4, "turnover_ratio": 15.85, "first_limit_up": 1785979824, "break_limit_up_times": 5}, {"code": "600892", "name": "大晟文化", "price": 4.58, "change_pct": 10.1, "reason": "游戏影视双驱动；公司游戏业务主要由全资子公司淘乐网络开发运营，专注于回合制端游与手游，代表作为《桃花源记》", "plates": ["游戏"], "limit_up_days": 3, "turnover_ratio": 25.99, "first_limit_up": 1785979500, "break_limit_up_times": 12}, {"code": "600262", "name": "北方股份", "price": 15.63, "change_pct": 9.99, "reason": "兵器工业集团旗下上市公司，国内最大的矿用车研发、生产基地", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.54, "first_limit_up": 1785980558, "break_limit_up_times": 1}, {"code": "603228", "name": "景旺电子", "price": 86.32, "change_pct": 10.0, "reason": "国内少数产品类型覆盖RPCB、FPC和MPCB的厂商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 4.74, "first_limit_up": 1785980624, "break_limit_up_times": 0}, {"code": "002485", "name": "ST雪发", "price": 5.9, "change_pct": 10.07, "reason": "公司主要业务为供应链运营管理和综合服务、文化旅游业务及服装销售业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.06, "first_limit_up": 1785996006, "break_limit_up_times": 0}, {"code": "688693", "name": "锴威特", "price": 77.82, "change_pct": 20.0, "reason": "公司16.5亿元并购晶艺半导体， 完善功率半导体产品布局", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 1.17, "first_limit_up": 1785979500, "break_limit_up_times": 0}, {"code": "002407", "name": "多氟多", "price": 36.09, "change_pct": 10.0, "reason": "1、公司半导体级氢氟酸已稳定批量供应台积电、三星、华虹、长鑫存储等，同时规划六氟化钨等高端电子特气产线；\n2、锂电池电解质六氟磷酸锂全球龙头，拥有“氟资源→氢氟酸及电子级氢氟酸→氟化锂→六氟磷酸锂→锂电池”完整的产业链", "plates": ["电子特气"], "limit_up_days": 1, "turnover_ratio": 20.73, "first_limit_up": 1785999033, "break_limit_up_times": 0}, {"code": "600326", "name": "西藏天路", "price": 7.52, "change_pct": 9.94, "reason": "1、公司是西藏唯一建筑建材类上市国企，主营工程施工、水泥生产销售及沥青混凝土生产加工销售；\n2、公司拥有的西藏拉萨市尼木县冲江及冲江西矿区以铜矿为主，伴生钼矿和少量的银矿", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.25, "first_limit_up": 1785980586, "break_limit_up_times": 1}, {"code": "603738", "name": "泰晶科技", "price": 36.47, "change_pct": 10.02, "reason": "公司为国内晶振龙头，消息称公司对全系列晶振产品实施价格调整，各品类产品调涨区间为10%-30%", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 15.84, "first_limit_up": 1785999202, "break_limit_up_times": 0}, {"code": "603823", "name": "百合花", "price": 66.8, "change_pct": 10.0, "reason": "1、公司拟投1亿元建设年产1000吨聚醚醚酮PEEK材料项目，产品面向人形机器人、新能源汽车、航空航天等高端制造领域；\n2、公司目前是国内少数具备生产全色谱颜料能力的生产企业，拟以自筹资金投入“年产3000吨电池级碳酸锂项目”，开发的普鲁士蓝（白）主要应用于钠离子电池正极材料；\n3、COFS 材料可用于固态电池，公司在COFS方面有做过课题研究，并申请了相关专利；\n4、公司生产的高性能颜料已应用于半导体领域液晶面板用光刻胶，并实现吨级销售", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 4.1, "first_limit_up": 1785980169, "break_limit_up_times": 75}, {"code": "603106", "name": "恒银科技", "price": 10.04, "change_pct": 9.97, "reason": "国内领先的以金融智能终端为核心的智慧银行解决方案提供商；公司接入阿里千问、蚂蚁“灵光”，深入探索“AI+金融”新范式", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 23.43, "first_limit_up": 1785982104, "break_limit_up_times": 3}, {"code": "603421", "name": "鼎信通讯", "price": 6.41, "change_pct": 9.95, "reason": "公司深耕智能电网，拥有电能计量、配电自动化、中低压数字化全矩阵产品，参与国标制定，具备芯片-方案-系统垂直整合能力", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 5.51, "first_limit_up": 1785983852, "break_limit_up_times": 1}, {"code": "003029", "name": "吉大正元", "price": 18.76, "change_pct": 10.03, "reason": "国内领先的网络安全企业；公司密切关注数字货币领域发展，积极参与数字货币系统安全建设，持续研究数字货币相关安全需求，参与了人民银行数字货币研究所以及几家试点银行的研究工作", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 5.22, "first_limit_up": 1785995163, "break_limit_up_times": 0}, {"code": "003040", "name": "楚天龙", "price": 12.46, "change_pct": 9.97, "reason": "国内较早从事数字人民币相关技术研究与产品开发的企业之一", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 2.72, "first_limit_up": 1785980271, "break_limit_up_times": 0}, {"code": "600272", "name": "开开实业", "price": 11.79, "change_pct": 9.98, "reason": "公司医药板块主要是中、西成药的批发、零售及以中华老字号“雷允上”为品牌的中医药药学服务和自主品牌“上雷”牌高档滋补品（枫斗、虫草、燕窝、海参等）的销售", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.32, "first_limit_up": 1785986518, "break_limit_up_times": 2}, {"code": "601101", "name": "昊华能源", "price": 12.72, "change_pct": 10.03, "reason": "京能集团煤炭业务的上市平台，上半年净利润预计增长65.68%，报告期内，煤炭、甲醇产品销售价格同比上涨；公司实现增产，商品煤销量较上年同期增加39万吨", "plates": ["煤炭", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.15, "first_limit_up": 1785980681, "break_limit_up_times": 0}, {"code": "601678", "name": "滨化股份", "price": 7.28, "change_pct": 9.97, "reason": "1、公司高纯氟化氢达到6N等级，处于国内领先、国际一流水平。产品已顺利导入14nm先进制程半导体终端客户，品质和稳定性获得行业头部企业认可；\n2、国内最大的食品级烧碱生产企业，粒碱生产龙头；公司电子级氢氟酸设计产能为0.6万吨/年，六氟磷酸锂设计产能0.1万吨/年；\n3、公司主营业务涵盖氯碱化学品、碳三碳四、湿电子化学品三大板块，拥有合计51万吨/年的环氧丙烷产能，是目前国内最大的民营环氧丙烷生产商", "plates": ["电子特气"], "limit_up_days": 1, "turnover_ratio": 17.23, "first_limit_up": 1785981331, "break_limit_up_times": 5}, {"code": "002425", "name": "凯撒文化", "price": 3.82, "change_pct": 10.09, "reason": "公司在国漫、小说等拥有多款人气IP的游戏改编权", "plates": ["游戏"], "limit_up_days": 3, "turnover_ratio": 11.96, "first_limit_up": 1785979500, "break_limit_up_times": 3}, {"code": "603039", "name": "泛微网络", "price": 49.1, "change_pct": 9.99, "reason": "公司主营协同管理和移动办公软件，腾讯为公司第五大股东，公司旗下所有产品全面接入DeepSeek大模型，借助泛微2024年发布的数智大脑Xiaoe.AI，可快捷方便为客户搭建“DeepSeek大模型+专业小模型+智能体”的数智底座", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 12.73, "first_limit_up": 1785980135, "break_limit_up_times": 2}, {"code": "600721", "name": "百花医药", "price": 9.58, "change_pct": 9.99, "reason": "综合服务性CRO企业，控股股东、实际控制人拟变更为金华市国资委", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 32.72, "first_limit_up": 1785979828, "break_limit_up_times": 3}, {"code": "002975", "name": "博杰股份", "price": 93.07, "change_pct": 10.0, "reason": "1、参股公司鼎泰芯源主营磷化铟InP单晶材料，自主研发VGF/VB法晶体生长等40余项核心专利，可生产掺硫/掺锡/掺铁InP衬底产品；\n2、公司聚焦液冷服务器制造与检测环节，核心提供液冷板精密焊接设备、液冷系统密封性检测设备及自动化产线解决方案", "plates": ["磷化铟"], "limit_up_days": 3, "turnover_ratio": 11.46, "first_limit_up": 1785981639, "break_limit_up_times": 6}, {"code": "002915", "name": "中欣氟材", "price": 18.65, "change_pct": 10.03, "reason": "国内氟化工精细化学品行业龙头；拥有基础配套原料萤石、氢氟酸、氟制冷剂、含氟精细化学品等在内的完整的氟化工产业链", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.88, "first_limit_up": 1785994509, "break_limit_up_times": 2}, {"code": "600206", "name": "有研新材", "price": 43.79, "change_pct": 10.0, "reason": "控股子公司为长江存储、长鑫存储靶材供应商，子公司有研亿金量产12英寸晶圆制造高纯靶材，为国内大硅片下游晶圆厂提供配套耗材", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 12.17, "first_limit_up": 1785981071, "break_limit_up_times": 6}, {"code": "301251", "name": "威尔高", "price": 39.83, "change_pct": 20.01, "reason": "公司主营印制电路板，以“AI数据中心电源、新一代通讯、新能源、汽车电子”为产品导向，将DC/DC高端电源PCB作为优先发展的核心方向，已获头部电源厂商批量级订单", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 17.76, "first_limit_up": 1785992568, "break_limit_up_times": 0}, {"code": "600829", "name": "人民同泰", "price": 10.35, "change_pct": 9.99, "reason": "黑龙江省内最大的医药商业公司，哈药集团医疗商业上市平台", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.85, "first_limit_up": 1785985297, "break_limit_up_times": 0}, {"code": "600665", "name": "天地源", "price": 3.33, "change_pct": 9.9, "reason": "立足西安的房地产开发商", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.88, "first_limit_up": 1785984263, "break_limit_up_times": 1}, {"code": "002826", "name": "易明医药", "price": 18.15, "change_pct": 10.0, "reason": "聚焦心血管、糖尿病等慢性病的中药企业", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.37, "first_limit_up": 1785984459, "break_limit_up_times": 1}, {"code": "002686", "name": "亿利达", "price": 6.57, "change_pct": 10.05, "reason": "1、公司控股股东、实控人变更事项获反垄断审查通过；\n2、公司的产品可以应用数据中心冷却系统，风机产品已经在华为、阿里、腾讯、移动等企业的数据中心中配套应用", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 6.12, "first_limit_up": 1785982647, "break_limit_up_times": 0}, {"code": "600584", "name": "长电科技", "price": 75.87, "change_pct": 10.0, "reason": "国内封测龙头，拟投资78亿元在上海临港建设高端先进封测工厂", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.18, "first_limit_up": 1785984494, "break_limit_up_times": 1}, {"code": "002369", "name": "卓翼科技", "price": 6.27, "change_pct": 10.0, "reason": "1、公司拟投资设立全资子公司卓翼智造江西科技有限公司，注册资本1.02亿元，并拟引入丰城市剑邑产业引导基金投资中心增资9800万元，增资后公司持股51%；\n2、国内大型3C产品和智能硬件产品的方案提供商；小米是公司重要合作伙伴之一，合作的产品包括智能手机、路由器、移动电源、智能手环和智能摄像头等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.86, "first_limit_up": 1785979989, "break_limit_up_times": 1}, {"code": "002792", "name": "通宇通讯", "price": 33.81, "change_pct": 9.99, "reason": "佳贤通信与英伟达合作开发6G AI-RAN基站，公司拟入股25%股权", "plates": ["6G"], "limit_up_days": 1, "turnover_ratio": 6.94, "first_limit_up": 1785979932, "break_limit_up_times": 0}, {"code": "300903", "name": "科翔股份", "price": 64.32, "change_pct": 20.0, "reason": "1、公司提供多种类型的PCB产品，包括双层板、多层板、高密度互连（HDI）板、厚铜板、高频/高速板、金属基板、陶瓷基板、IC载板及柔性线路板等；\n2、公司完成200G/400G光模块产品的研发试产，且已逐步与国内外多家互联网厂商和通信设备商建立了良好的合作关系，公司在800G光模块领域等新产品的研发工作也在有序推进", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 12.21, "first_limit_up": 1785982791, "break_limit_up_times": 0}, {"code": "605336", "name": "*ST帅电", "price": 11.54, "change_pct": 10.01, "reason": "公司筹划重大资产重组，仍未签署正式协议", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.43, "first_limit_up": 1785996302, "break_limit_up_times": 0}, {"code": "001267", "name": "汇绿生态", "price": 38.81, "change_pct": 10.01, "reason": "公司拟不超1.95亿元收购武汉钧恒30%股权，武汉钧恒对高速光模块技术持续投入，当前已经具备单波400G高速链路仿真能力，um级高精度光学微组装能力，及各种高速控制算法能力；基于上述能力积累，当前武汉钧恒1.6T模块相关产品已经开发出来，具备送样能力，3.2T模块单点技术已经验证完成，预计年底启动项目开发", "plates": ["光通信"], "limit_up_days": 3, "turnover_ratio": 12.21, "first_limit_up": 1785992805, "break_limit_up_times": 5}, {"code": "600601", "name": "方正科技", "price": 11.7, "change_pct": 9.96, "reason": "公司PCB业务产品主要包括高密度互连板、多层板、系统板、大型背板、金手指板和车载板等，在服务存储和光模块领域均有应用，华为是公司PCB业务的主要客户之一", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.42, "first_limit_up": 1785982171, "break_limit_up_times": 1}, {"code": "003036", "name": "泰坦股份", "price": 52.25, "change_pct": 10.0, "reason": "1、公司电子布织机目前处于研发阶段；\n2、公司纺织机器人已完成纱筒抓取与生头关节研发", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 3.58, "first_limit_up": 1785984822, "break_limit_up_times": 0}, {"code": "000720", "name": "新能泰山", "price": 3.93, "change_pct": 10.08, "reason": "控股子公司曲阜电缆主要从事电线电缆、光纤光缆、电力光缆等产品的研发、制造与销售", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 7.24, "first_limit_up": 1785980040, "break_limit_up_times": 1}, {"code": "002180", "name": "奔图科技", "price": 19.69, "change_pct": 10.0, "reason": "公司打印机全产业链布局，旗下奔图+利盟双品牌覆盖激光打印机整机市场，同时主营打印机主控SoC芯片及通用耗材芯片，是全球领先的打印成像解决方案提供商", "plates": ["打印机"], "limit_up_days": 1, "turnover_ratio": 0.83, "first_limit_up": 1785979500, "break_limit_up_times": 0}, {"code": "002721", "name": "金一文化", "price": 2.94, "change_pct": 10.11, "reason": "公司主营业务为贵金属工艺品及黄金珠宝首饰的研发设计及销售", "plates": ["黄金"], "limit_up_days": 2, "turnover_ratio": 1.0, "first_limit_up": 1785979500, "break_limit_up_times": 0}, {"code": "000908", "name": "石药景峰", "price": 6.83, "change_pct": 9.98, "reason": "公司致力于创新药物研发，拥有多个创新药项目；上半年业绩同比扭亏，报告期内，石药集团湖南景峰医药股份有限公司顺利完成司法重整，资产负债结构优化，财务费用等支出下降，主营业务亏损同比大幅收窄；同时，公司本期确认结构性存款收益、政府补助等非经常性损益，进一步提升业绩水平", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.11, "first_limit_up": 1785985518, "break_limit_up_times": 0}, {"code": "002104", "name": "恒宝股份", "price": 11.76, "change_pct": 10.01, "reason": "1、首批参与中国人民银行数字货币研究所“数字人民币试点”工作的金融科技公司之一；\n2、公司重点攻关量子加密在金融场景的抗量子计算破译能力，为移动支付、跨境结算提供 “三位一体” 安全解决方案，量子加密模组获东南亚多国央行订单", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 4.72, "first_limit_up": 1785980175, "break_limit_up_times": 0}, {"code": "600758", "name": "辽宁能源", "price": 3.67, "change_pct": 9.88, "reason": "辽宁煤炭龙头，下辖两个热电联营的电厂", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 7.75, "first_limit_up": 1785995826, "break_limit_up_times": 0}, {"code": "000839", "name": "国安股份", "price": 3.14, "change_pct": 10.18, "reason": "公司子公司鸿联九五聚焦AI大模型融合与智能体场景化应用，完成国产开源大模型深度适配，并推进“人类专家+AI智能体”协同服务模式", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 7.18, "first_limit_up": 1785995034, "break_limit_up_times": 0}, {"code": "600403", "name": "大有能源", "price": 6.41, "change_pct": 9.95, "reason": "河南能源集团旗下煤炭企业；此前河南省委、省政府决定对间接控股股东河南能源集团和中国平煤神马控股集团实施战略重组", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 4.29, "first_limit_up": 1785986834, "break_limit_up_times": 0}, {"code": "002194", "name": "武汉凡谷", "price": 10.09, "change_pct": 10.03, "reason": "公司微波器件产品（如微波双工器、微波滤波器）是卫星中继通信和微波点对点通信的核心部件", "plates": ["6G"], "limit_up_days": 1, "turnover_ratio": 7.93, "first_limit_up": 1785980562, "break_limit_up_times": 1}, {"code": "600397", "name": "江钨装备", "price": 16.89, "change_pct": 10.03, "reason": "公司拟定增募资不超过19亿元，用于收购控股股东旗下江钨硬质合金、华茂钨材料及九江有色金属冶炼三家公司100%股权，拟注入钨制品及钽铌制品领域优质资产", "plates": ["资产重组"], "limit_up_days": 3, "turnover_ratio": 2.45, "first_limit_up": 1785979802, "break_limit_up_times": 0}, {"code": "603988", "name": "中电电机", "price": 22.72, "change_pct": 10.02, "reason": "公司专注大中型交直流电机、发电机，产品覆盖风电、水利、石化等行业", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 8.53, "first_limit_up": 1785979884, "break_limit_up_times": 6}, {"code": "002214", "name": "大立科技", "price": 16.34, "change_pct": 10.03, "reason": "公司股票8月5日起撤销退市风险", "plates": ["ST摘帽"], "limit_up_days": 2, "turnover_ratio": 0.31, "first_limit_up": 1785979500, "break_limit_up_times": 0}, {"code": "002376", "name": "新北洋", "price": 6.99, "change_pct": 10.08, "reason": "公司的智能自助零售、智慧柜员机等设备在部分数字人民币试点地区可以根据客户需求支持数字人民币；数字人民币仍在试点和内测阶段，公司将继续关注试点应用进展，并持续推进相关解决方案的研究开发工作", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 4.87, "first_limit_up": 1785979800, "break_limit_up_times": 1}, {"code": "603123", "name": "翠微股份", "price": 10.07, "change_pct": 10.05, "reason": "子公司海科融通已与央行数字货币研究所指定运营银行系统对接，在多商业场景中支持数字人民币支付收款，为商户提供数字人民币收单服务", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 6.58, "first_limit_up": 1785980724, "break_limit_up_times": 0}, {"code": "002973", "name": "侨银股份", "price": 10.99, "change_pct": 10.01, "reason": "公司与国家地方共建人形机器人创新中心开展了合作，主要系双方在城市服务场景与具身智能机器人领域的资源融合与技术协同，着力推动在环卫作业、物业管理、家居场景的应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.88, "first_limit_up": 1785981756, "break_limit_up_times": 0}, {"code": "000692", "name": "惠天热电", "price": 4.24, "change_pct": 10.13, "reason": "沈阳地区规模最大的国有专业化供热公司；沈阳市发改委确定公司为70万千瓦风电项目业主", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.21, "first_limit_up": 1785979845, "break_limit_up_times": 0}, {"code": "002827", "name": "高争民爆", "price": 49.24, "change_pct": 10.01, "reason": "公司34%股份拟无偿划转，控股股东或变更为地矿集团", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 6.39, "first_limit_up": 1785979947, "break_limit_up_times": 3}, {"code": "002212", "name": "天融信", "price": 7.36, "change_pct": 10.01, "reason": "1、公司参与的数字货币相关网络安全国家/行业标准主要有《信息安全技术 区块链信息服务安全规范》《公钥密码应用技术体系框架规范》《动态口令密码应用技术规范》《信息安全技术 传输层密码协议（TLCP）》《金融数据安全 数据生命周期安全规范》《金融行业网络安全等级保护测评指南》等；\n2、公司智算云赋能OpenClaw安全稳定运行", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 7.0, "first_limit_up": 1785980361, "break_limit_up_times": 0}, {"code": "002759", "name": "ST天际", "price": 16.68, "change_pct": 10.03, "reason": "公司六氟磷酸锂产能位居行业前列，互动平台表示密切关注固态电池的技术路线，制定相关材料的研发方向，以应对及配套以后固态电池的发展", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 12.1, "first_limit_up": 1785994920, "break_limit_up_times": 1}, {"code": "603221", "name": "爱丽家居", "price": 24.79, "change_pct": 9.98, "reason": "公司拟收购欧康诺不低于77.08%股权，欧康诺专注于存储测试设备及测试服务领域", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 6.61, "first_limit_up": 1785979500, "break_limit_up_times": 1}, {"code": "600127", "name": "金健米业", "price": 6.17, "change_pct": 9.98, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.4, "first_limit_up": 1785986789, "break_limit_up_times": 1}, {"code": "601699", "name": "潞安环能", "price": 16.24, "change_pct": 10.03, "reason": "山西潞安集团的上市平台，全国煤炭企业唯一连续获评的高新技术企业，主要产品包括混煤、洗精煤、喷吹煤、洗混块等4大类煤炭产品以及焦炭产品", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 2.24, "first_limit_up": 1785996561, "break_limit_up_times": 0}, {"code": "603285", "name": "键邦股份", "price": 35.86, "change_pct": 10.0, "reason": "公司赛克产品作为高端电磁线漆关键耐热改性单体，全球市场占有率超75%，终端应用覆盖AI算力配套等新兴产业，目前赛克下游绝缘漆占比已升至 60% 以上，深度配套变压器、新能源汽车电机、AI算力中心等高增量赛道", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.16, "first_limit_up": 1785980614, "break_limit_up_times": 0}, {"code": "002428", "name": "云南锗业", "price": 90.98, "change_pct": 10.0, "reason": "1、公司作为磷化铟衬底龙头，产能为15万片/年（2—4英寸）；\n2、公司“空间太阳能电池用锗晶片建设项目”2025年末将形成年产125万片产能，最终达250万片，锗晶片主要用于空间卫星、空间站等深空设备的空间卫星电池，直接配套商业航天需求", "plates": ["磷化铟"], "limit_up_days": 3, "turnover_ratio": 11.97, "first_limit_up": 1785979830, "break_limit_up_times": 5}, {"code": "603122", "name": "合富中国", "price": 12.39, "change_pct": 10.04, "reason": "公司为唯一一家海峡两岸市场“双上市”的医疗企业，其母公司合富医疗控股在台湾上市，公司实际控制人为台湾企业家王琼芝，在两岸医疗流通领域有深度合作", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.61, "first_limit_up": 1785985650, "break_limit_up_times": 0}, {"code": "002552", "name": "宝鼎科技", "price": 43.27, "change_pct": 9.99, "reason": "1、公司预计2026年半年度净利润同比增长468.71%-559.71%，因“子公司金宝电子覆铜板及电子铜箔业务扭亏为盈，产品销量及销售价格持续上升”；\n2、公司控股子公司金宝电子专业从事电子铜箔、覆铜板设计、研发、生产及销售，是国内能提供设计至生产一体化全流程服务的少数企业之一；产品广泛应用于 5G 通讯、汽车电子等领域，其中电子铜箔有 HTE 箔、LP 箔等多种类型，覆铜板涵盖玻纤布基、复合基、铝基等，是 PCB 产业链中的重要供应商", "plates": ["PCB板"], "limit_up_days": 3, "turnover_ratio": 4.81, "first_limit_up": 1785979854, "break_limit_up_times": 2}, {"code": "002667", "name": "*ST威领", "price": 13.48, "change_pct": 10.04, "reason": "公司业务主要包括锂矿选矿、基础性锂电原料锂盐加工及冶炼业务等，通过收购嘉宇矿业74.3%股权，新增钨锡铅锌矿开采业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 9.18, "first_limit_up": 1785995541, "break_limit_up_times": 1}, {"code": "603078", "name": "江化微", "price": 34.19, "change_pct": 10.01, "reason": "1、公司23.96%股份过户完成，上海福迅科技成为第一大股东；\n2、公司是国内湿电子化学品行业的领先企业之一；公司生产的光刻胶配套试剂主要用于下游半导体和平板显示领域", "plates": ["国产芯片", "股权转让"], "limit_up_days": 2, "turnover_ratio": 8.48, "first_limit_up": 1785982796, "break_limit_up_times": 1}, {"code": "002963", "name": "豪尔赛", "price": 19.35, "change_pct": 10.01, "reason": "1、公司参股的华奕新能源已中标某头部通讯公司的数据中心冷板试点项目，其基于蒸发冷却独有冷水技术，复合液冷板，可完全实现无压缩机补冷；\n2、公司智慧灯杆解决方案基于灯具节能、智能灯控等技术，结合物联网、大数据、5G、AI、机器视觉等新一代信息技术，通过智慧照明云平台对城市路灯等公共照明实现统一智能化管理", "plates": ["云计算数据中心"], "limit_up_days": 5, "turnover_ratio": 11.17, "first_limit_up": 1785979803, "break_limit_up_times": 3}, {"code": "600188", "name": "兖矿能源", "price": 21.27, "change_pct": 9.98, "reason": "华东地区最大的煤炭生产商和中国最大的煤炭出口企业之一，上半年净利润同比预增53%，报告期内煤炭、煤化工产品价格上涨，公司经营业绩改善；公开挂牌转让内蒙古鑫泰煤炭有限公司100%股权，产生较高投资收益", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 1.56, "first_limit_up": 1785995804, "break_limit_up_times": 0}, {"code": "603773", "name": "沃格光电", "price": 86.43, "change_pct": 10.0, "reason": "公司光模块/CPO玻璃基封装载板已批量送样，与北极雄芯战略合作开发AI芯片玻璃基先进封装", "plates": ["光通信"], "limit_up_days": 3, "turnover_ratio": 5.97, "first_limit_up": 1785980919, "break_limit_up_times": 1}, {"code": "002971", "name": "和远气体", "price": 41.25, "change_pct": 10.0, "reason": "公司给长江存储、烽火科技、华星光电等光通信、半导体企业直接或间接供应氢气、氧气、氮气和氩气", "plates": ["电子特气"], "limit_up_days": 2, "turnover_ratio": 14.14, "first_limit_up": 1785984180, "break_limit_up_times": 0}, {"code": "601666", "name": "平煤股份", "price": 8.92, "change_pct": 9.99, "reason": "中南地区焦煤龙头，国内品种最全的炼焦煤和电煤生产基地，产品主要有动力煤和冶炼精煤两大类", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 2.55, "first_limit_up": 1785995552, "break_limit_up_times": 0}, {"code": "300311", "name": "任子行", "price": 7.16, "change_pct": 19.93, "reason": "参股子公司成都链安有数字货币反洗钱的监控系统", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 31.42, "first_limit_up": 1785995223, "break_limit_up_times": 0}, {"code": "001378", "name": "德冠新材", "price": 19.59, "change_pct": 9.99, "reason": "公司主要从事功能薄膜和功能母料，上半年净利润预计增长53.21%~74.72%，报告期内，受上游原材料价格上涨影响，BOPP行业景气度有所提升。公司“膜材料+”产品战略加速，公司功能薄膜产品实现有效的价格传导和技术溢价；中兴科技园新生产线于三月份正式投产，新产能稳步释放，推动公司产销量提升", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.77, "first_limit_up": 1785984663, "break_limit_up_times": 0}, {"code": "688549", "name": "中巨芯", "price": 27.85, "change_pct": 19.99, "reason": "公司主要从事电子湿化学品、电子特种气体和前驱体材料，为逻辑芯片、存储芯片制造稳定批量供应电子级硝酸，六氟化钨目前产能为600吨/年", "plates": ["电子特气"], "limit_up_days": 2, "turnover_ratio": 32.2, "first_limit_up": 1785984888, "break_limit_up_times": 18}, {"code": "300540", "name": "蜀道装备", "price": 33.61, "change_pct": 19.99, "reason": "1、公司在特种气体领域已开展实质性布局，依托深冷分离、提纯及液化等核心技术，重点发展高纯度、高附加值气体业务；\n2、公司向国内两家航天基地供应火箭推进剂级液态甲烷装置及液氧、液氮、液氩等空分产品，酒泉航天产业园液体空分项目已获订单，适配商业航天", "plates": ["电子特气"], "limit_up_days": 1, "turnover_ratio": 11.69, "first_limit_up": 1785992877, "break_limit_up_times": 0}, {"code": "002302", "name": "西部建设", "price": 5.08, "change_pct": 9.96, "reason": "公司签约星际荣耀可重复使用液体运载火箭生产总部基地项目", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 1.37, "first_limit_up": 1785980799, "break_limit_up_times": 1}, {"code": "002052", "name": "同洲电子", "price": 9.75, "change_pct": 10.05, "reason": "公司高功率服务器电源已批量出货，氮化镓版本完成小批量验证，峰值效率>98%，切入AI服务器及数据中心供应链", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.47, "first_limit_up": 1785995550, "break_limit_up_times": 0}, {"code": "002649", "name": "博彦科技", "price": 11.29, "change_pct": 10.04, "reason": "1、中国领先的软件与信息技术服务商；公司通过参与部分银行客户数字人民币相关项目的开发不断积累相关项目经验及技术、人才储备，已在国有行的系统开发、股份制商业银行和一些头部城商行的应用场景实现落地；\n2、公司积极与国内外主流大模型厂商开展技术与生态合作，基于客户场景需求，为行业客户提供一站式AI应用解决方案及服务，相关方案已在部分金融、化工、制造等多个行业实现业务落地", "plates": ["数字人民币"], "limit_up_days": 2, "turnover_ratio": 10.47, "first_limit_up": 1785979899, "break_limit_up_times": 1}, {"code": "300615", "name": "欣天科技", "price": 18.02, "change_pct": 19.97, "reason": "公司控股股东将变更为深圳元启", "plates": ["股权转让"], "limit_up_days": 4, "turnover_ratio": 28.44, "first_limit_up": 1785979845, "break_limit_up_times": 1}, {"code": "600156", "name": "华升股份", "price": 8.84, "change_pct": 9.95, "reason": "公司拟6.62亿元购买易信科技97.40%股份，标的公司深耕AIDC领域，业务涉及智算中心双冷源阶梯冷却技术；一季报业绩同比减亏", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.66, "first_limit_up": 1785979916, "break_limit_up_times": 2}, {"code": "300711", "name": "广哈通信", "price": 19.03, "change_pct": 19.99, "reason": "1、公司5G核心网遵循3GPP标准，已实现了R17的部分功能，并且正积极推进5G-Advanced（R18）阶段的创新功能开发，同时公司已开展对6G演进和6G空天地一体化网络布局的研究；\n2、公司此前中标中石油北斗及UWB定位技术服务项目", "plates": ["6G"], "limit_up_days": 1, "turnover_ratio": 5.84, "first_limit_up": 1785981036, "break_limit_up_times": 3}, {"code": "300386", "name": "飞天诚信", "price": 12.56, "change_pct": 19.96, "reason": "公司为较早参与国内法定数字人民币相关产品与服务的科技企业，参与了中银通数字货币硬件钱包及配套服务年度供应商入围项目的投标工作", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 8.49, "first_limit_up": 1785980067, "break_limit_up_times": 0}, {"code": "600330", "name": "天通股份", "price": 21.65, "change_pct": 10.01, "reason": "公司生产的铌酸锂晶体材料是铌酸锂电光调制芯片及器件的上游关键原材料；公司已自主量产6英寸铌酸锂/钽酸锂晶体及黑化抛光晶片", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 13.05, "first_limit_up": 1785998048, "break_limit_up_times": 0}, {"code": "605366", "name": "宏柏新材", "price": 8.47, "change_pct": 10.0, "reason": "1、公司重点布局2万吨光纤级高纯四氯化硅和5000吨电子级正硅酸乙酯项目，以满足AI算力及半导体产业需求，具备高纯硅烷产品的生产工艺技术，能较快实现量产落地；\n2、国内功能性硅烷行业龙头企业；公司具备完整的“硅块-三氯氢硅-中间体-功能性硅烷-气相白炭黑”绿色循环产业链，相关产品和技术适用于液体硅胶", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 4.8, "first_limit_up": 1785983210, "break_limit_up_times": 1}, {"code": "600985", "name": "淮北矿业", "price": 16.5, "change_pct": 10.0, "reason": "公司是安徽四大煤企之一的淮矿集团控股的煤炭上市平台，是华东地区品种最齐全、规模最大的焦煤企业，拥有生产矿井16对，资源储量为37.09亿吨，可采储量达16.60亿吨", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 1.57, "first_limit_up": 1785995556, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告"};