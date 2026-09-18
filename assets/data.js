const UPDATE_TIME = "2026-09-18 10:26";
const THS_HOT = [
  {
    "name": "注册制次新股",
    "rise": 7.3,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885905"
  },
  {
    "name": "新股与次新股",
    "rise": 5.91,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "存储芯片",
    "rise": 3.43,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续248天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 1.84,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续118天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.51,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续295天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": 1.27,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续125天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "MLCC概念",
    "rise": 2.39,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续35天上榜",
    "rankChg": 0,
    "etfName": "财通福鑫定开混合",
    "code": "886112"
  },
  {
    "name": "芯片概念",
    "rise": 2.71,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "光纤概念",
    "rise": 1.95,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续124天上榜",
    "rankChg": 0,
    "etfName": "易方达科顺定开",
    "code": "886084"
  },
  {
    "name": "国家大基金持股",
    "rise": 4.03,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "液冷服务器",
    "rise": 2.15,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "粮食概念",
    "rise": 0.04,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 1,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "培育钻石",
    "rise": 1.26,
    "rate": 0,
    "tag": "",
    "hotTag": "连续13天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "先进封装",
    "rise": 2.95,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "AI应用",
    "rise": 1.57,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续53天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "商业航天",
    "rise": 2.1,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续224天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "科创次新股",
    "rise": 5.75,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885907"
  },
  {
    "name": "算力租赁",
    "rise": 1.59,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续159天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光刻胶",
    "rise": 2.18,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "汽车芯片",
    "rise": 3.83,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885945"
  }
];
const THS_EVENTS = [
  {
    "title": "韩国部分半导体设备零部件交货时间大幅拉长",
    "desc": "",
    "heat": 496077,
    "direction": "半导体设备",
    "themes": [
      "半导体设备",
      "芯片概念",
      "半导体"
    ],
    "stocks": [
      {
        "name": "腾信精密",
        "code": "920298",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "智能汽车芯片生态重构 车规供应链进入韧性竞争期",
    "desc": "",
    "heat": 438560,
    "direction": "汽车芯片",
    "themes": [
      "汽车芯片"
    ],
    "stocks": [
      {
        "name": "昂瑞微-UW",
        "code": "688790",
        "chg": 14.414314
      }
    ]
  },
  {
    "title": "机构：CoWoS紧缺持续，先进封装供给格局重塑",
    "desc": "",
    "heat": 383840,
    "direction": "先进封装",
    "themes": [
      "先进封装"
    ],
    "stocks": [
      {
        "name": "托伦斯",
        "code": "301583",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "英伟达市值飙升超7300亿元",
    "desc": "",
    "heat": 341720,
    "direction": "英伟达概念",
    "themes": [
      "英伟达概念",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "浩瀚深度",
        "code": "688292",
        "chg": 20.020855
      }
    ]
  },
  {
    "title": "住建部定调“十五五”好房子，明确房地产进入存量时代",
    "desc": "",
    "heat": 328312,
    "direction": "房地产",
    "themes": [
      "房地产",
      "租售同权"
    ],
    "stocks": [
      {
        "name": "万科Ａ",
        "code": "000002",
        "chg": 9.933775
      }
    ]
  },
  {
    "title": "十部门：“十五五”时期我国首创新药占全球比例将达到25%以上",
    "desc": "",
    "heat": 313754,
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
        "name": "C信诺维",
        "code": "688837",
        "chg": 34.461911
      }
    ]
  },
  {
    "title": "特斯拉机器人量产加速，启动新一轮中国供应链审厂",
    "desc": "",
    "heat": 303388,
    "direction": "特斯拉机器人",
    "themes": [
      "特斯拉概念",
      "人形机器人",
      "机器人概念",
      "减速器"
    ],
    "stocks": [
      {
        "name": "佰奥智能",
        "code": "300836",
        "chg": 19.420069
      }
    ]
  },
  {
    "title": "云计算服务提供商Nebius宣布将于10月1日起全面上调旗下GPU云服务定价",
    "desc": "",
    "heat": 275761,
    "direction": "云算力租赁",
    "themes": [
      "东数西算(算力)",
      "算力租赁",
      "云计算"
    ],
    "stocks": [
      {
        "name": "浩瀚深度",
        "code": "688292",
        "chg": 20.020855
      }
    ]
  },
  {
    "title": "我国批复 5 个城市群开展氢能综合应用试点",
    "desc": "",
    "heat": 233758,
    "direction": "氢能源",
    "themes": [
      "氢能源"
    ],
    "stocks": [
      {
        "name": "C沈鼓",
        "code": "601091",
        "chg": 177.740385
      }
    ]
  },
  {
    "title": "亚马逊砸最高80亿美元买发电机 Generac股价飙升18%",
    "desc": "",
    "heat": 216159,
    "direction": "发电机",
    "themes": [
      "发电机",
      "柴油发电机"
    ],
    "stocks": [
      {
        "name": "潍柴重机",
        "code": "000880",
        "chg": 6.891026
      }
    ]
  },
  {
    "title": "油价跳水，黄金直线飙涨，白银涨超4%，黄金定价逻辑已变",
    "desc": "",
    "heat": 188089,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "黄金概念",
      "白银"
    ],
    "stocks": [
      {
        "name": "南矿集团",
        "code": "001360",
        "chg": 6.088751
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄酒",
    "change": "+7.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "破发次新",
    "change": "+6.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "次新股",
    "change": "+5.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+4.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+4.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+4.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+4.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+4.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+3.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+3.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+3.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+3.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MCU概念",
    "change": "+3.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磁悬浮压缩机",
    "change": "+3.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+3.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+3.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+3.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "国产芯片",
    "change": "+3.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+3.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+3.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 9,
    "hot_rank_chg": 11,
    "stock_cnt": 5788,
    "price": "8.63",
    "change": "3.11",
    "market_id": "33",
    "circulate_market_value": "16527248000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.96
      },
      {
        "name": "林业",
        "change_pct": 2.05
      },
      {
        "name": "碳中和",
        "change_pct": 1.32
      },
      {
        "name": "自贸区",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 10,
    "hot_rank_chg": 1,
    "stock_cnt": 5788,
    "price": "8.36",
    "change": "4.89",
    "market_id": "33",
    "circulate_market_value": "3913496300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.47
      },
      {
        "name": "旅游",
        "change_pct": 1.67
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.28
      },
      {
        "name": "广西概念",
        "change_pct": 0.75
      },
      {
        "name": "低空经济",
        "change_pct": 1.96
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 11,
    "hot_rank_chg": -2,
    "stock_cnt": 5788,
    "price": "3.00",
    "change": "-0.33",
    "market_id": "33",
    "circulate_market_value": "28540068000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 3.71
      },
      {
        "name": "无人驾驶",
        "change_pct": 1.41
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.89
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.3
      },
      {
        "name": "减速器",
        "change_pct": 1.58
      },
      {
        "name": "华为汽车",
        "change_pct": 0.51
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 12,
    "hot_rank_chg": -7,
    "stock_cnt": 5788,
    "price": "5.92",
    "change": "2.96",
    "market_id": "33",
    "circulate_market_value": "209373430000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.63
      },
      {
        "name": "手机产业链",
        "change_pct": 1.77
      },
      {
        "name": "超高清视频",
        "change_pct": 1.19
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.18
      },
      {
        "name": "电竞",
        "change_pct": 1.14
      },
      {
        "name": "半导体",
        "change_pct": 3.71
      },
      {
        "name": "人工智能",
        "change_pct": 1.88
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.49
      },
      {
        "name": "VR&AR",
        "change_pct": 1.67
      },
      {
        "name": "OLED",
        "change_pct": 1.95
      },
      {
        "name": "京津冀",
        "change_pct": 1.14
      },
      {
        "name": "物联网",
        "change_pct": 1.78
      },
      {
        "name": "指纹识别",
        "change_pct": 1.48
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.89
      },
      {
        "name": "白马股",
        "change_pct": 0.85
      },
      {
        "name": "智能制造",
        "change_pct": 1.83
      },
      {
        "name": "小米概念股",
        "change_pct": 2.1
      },
      {
        "name": "国产芯片",
        "change_pct": 3.33
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.48
      },
      {
        "name": "全息概念",
        "change_pct": 1.63
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.96
      },
      {
        "name": "MicroLED",
        "change_pct": 1.77
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.6
      },
      {
        "name": "智能手表",
        "change_pct": 1.98
      },
      {
        "name": "MiniLED",
        "change_pct": 1.46
      },
      {
        "name": "传感器",
        "change_pct": 2.23
      },
      {
        "name": "大硅片",
        "change_pct": 3.25
      },
      {
        "name": "AI PC",
        "change_pct": 2.28
      },
      {
        "name": "华为产业链",
        "change_pct": 1.68
      },
      {
        "name": "回购",
        "change_pct": 1.46
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 3.18
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.5
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.58
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 16,
    "hot_rank_chg": 11,
    "stock_cnt": 5788,
    "price": "7.50",
    "change": "1.08",
    "market_id": "17",
    "circulate_market_value": "18888824000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.62
      },
      {
        "name": "工业大麻",
        "change_pct": 0.47
      },
      {
        "name": "中药",
        "change_pct": 0.84
      },
      {
        "name": "强势人气股",
        "change_pct": 1.47
      },
      {
        "name": "保健品",
        "change_pct": 0.62
      },
      {
        "name": "民营医院",
        "change_pct": 0.77
      },
      {
        "name": "医药",
        "change_pct": 1.19
      },
      {
        "name": "化学原料药",
        "change_pct": 0.94
      },
      {
        "name": "流感",
        "change_pct": 0.8
      },
      {
        "name": "振兴东北",
        "change_pct": 1.17
      },
      {
        "name": "食品",
        "change_pct": 0.59
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 21,
    "hot_rank_chg": -8,
    "stock_cnt": 5788,
    "price": "9.75",
    "change": "2.42",
    "market_id": "33",
    "circulate_market_value": "4691108500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 1.75
      },
      {
        "name": "医疗器械",
        "change_pct": 1.64
      },
      {
        "name": "锂电池",
        "change_pct": 1.5
      },
      {
        "name": "基因测序",
        "change_pct": 2.2
      },
      {
        "name": "PCB板",
        "change_pct": 1.43
      },
      {
        "name": "医药",
        "change_pct": 1.19
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "化学原料药",
        "change_pct": 0.94
      },
      {
        "name": "食品安全",
        "change_pct": 1.14
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.31
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 2.8
      },
      {
        "name": "异丙醇",
        "change_pct": 1.15
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.31
      },
      {
        "name": "磷酸铁锂",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 22,
    "hot_rank_chg": 9,
    "stock_cnt": 5788,
    "price": "11.95",
    "change": "0.67",
    "market_id": "17",
    "circulate_market_value": "4595344200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 1.52
      },
      {
        "name": "股权转让",
        "change_pct": 1.58
      },
      {
        "name": "强势人气股",
        "change_pct": 1.47
      },
      {
        "name": "新疆概念",
        "change_pct": 0.5
      },
      {
        "name": "医药",
        "change_pct": 1.19
      },
      {
        "name": "流感",
        "change_pct": 0.8
      },
      {
        "name": "国资入股",
        "change_pct": 0.61
      },
      {
        "name": "减肥药",
        "change_pct": 1.42
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 45,
    "hot_rank_chg": 7,
    "stock_cnt": 5788,
    "price": "12.61",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "22561034000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.32
      },
      {
        "name": "纯碱",
        "change_pct": 0.37
      },
      {
        "name": "食品",
        "change_pct": 0.59
      },
      {
        "name": "土壤修复",
        "change_pct": 0.86
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.97
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 2.62
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.38
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 46,
    "hot_rank_chg": -23,
    "stock_cnt": 5788,
    "price": "2.29",
    "change": "-3.38",
    "market_id": "33",
    "circulate_market_value": "11547292600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.47
      },
      {
        "name": "新能源整车",
        "change_pct": -0.88
      },
      {
        "name": "汽车整车",
        "change_pct": -0.83
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "低价股",
        "change_pct": 0.55
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 48,
    "hot_rank_chg": -10,
    "stock_cnt": 5788,
    "price": "10.23",
    "change": "4.92",
    "market_id": "17",
    "circulate_market_value": "5399415300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.9
      },
      {
        "name": "农业种植",
        "change_pct": 0.53
      },
      {
        "name": "强势人气股",
        "change_pct": 1.47
      },
      {
        "name": "转基因",
        "change_pct": -0.36
      },
      {
        "name": "棉花",
        "change_pct": 0.5
      },
      {
        "name": "大农业",
        "change_pct": 0.35
      },
      {
        "name": "供销社",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 54,
    "hot_rank_chg": 66,
    "stock_cnt": 5788,
    "price": "5.28",
    "change": "4.97",
    "market_id": "33",
    "circulate_market_value": "4039943100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.84
      },
      {
        "name": "股权转让",
        "change_pct": 1.58
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.3
      },
      {
        "name": "强势人气股",
        "change_pct": 1.47
      },
      {
        "name": "医药商业",
        "change_pct": 1.62
      },
      {
        "name": "保健品",
        "change_pct": 0.62
      },
      {
        "name": "民营医院",
        "change_pct": 0.77
      },
      {
        "name": "医药",
        "change_pct": 1.19
      },
      {
        "name": "食品",
        "change_pct": 0.59
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.31
      },
      {
        "name": "口腔",
        "change_pct": 0.97
      },
      {
        "name": "医美",
        "change_pct": 1.21
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.31
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 55,
    "hot_rank_chg": 25,
    "stock_cnt": 5788,
    "price": "6.60",
    "change": "3.12",
    "market_id": "33",
    "circulate_market_value": "4327659800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.62
      },
      {
        "name": "新零售",
        "change_pct": 1.76
      },
      {
        "name": "农业种植",
        "change_pct": 0.53
      },
      {
        "name": "冷链",
        "change_pct": 1.21
      },
      {
        "name": "大农业",
        "change_pct": 0.35
      },
      {
        "name": "预制菜",
        "change_pct": 0.5
      },
      {
        "name": "国企改革",
        "change_pct": 1.03
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.78
      },
      {
        "name": "免税店概念",
        "change_pct": 1.39
      },
      {
        "name": "湖北国企改革",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 58,
    "hot_rank_chg": 187,
    "stock_cnt": 5788,
    "price": "8.67",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "6262270000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "海底电缆",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": 1.75
      },
      {
        "name": "充电桩",
        "change_pct": 1.58
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.96
      },
      {
        "name": "军民融合",
        "change_pct": 1.57
      },
      {
        "name": "光伏",
        "change_pct": 2.04
      },
      {
        "name": "风电",
        "change_pct": 1.26
      },
      {
        "name": "军工",
        "change_pct": 1.52
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "特高压",
        "change_pct": 2.31
      },
      {
        "name": "自贸区",
        "change_pct": 1.2
      },
      {
        "name": "海洋经济",
        "change_pct": 1.54
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 68,
    "hot_rank_chg": -35,
    "stock_cnt": 5788,
    "price": "5.55",
    "change": "-3.31",
    "market_id": "17",
    "circulate_market_value": "5378136000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": 1.26
      }
    ]
  },
  {
    "code": "600630",
    "name": "龙头股份",
    "hot_rank": 75,
    "hot_rank_chg": 48,
    "stock_cnt": 5788,
    "price": "8.29",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "3522102600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "纺织服装",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.62
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.48
      },
      {
        "name": "一带一路",
        "change_pct": 1.07
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.3
      },
      {
        "name": "纺织服装",
        "change_pct": 1.58
      },
      {
        "name": "外贸受益概念",
        "change_pct": 1.49
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 1.5
      },
      {
        "name": "进口博览会",
        "change_pct": 2.32
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.09
      },
      {
        "name": "物业管理",
        "change_pct": 1.94
      },
      {
        "name": "国企改革",
        "change_pct": 1.03
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.31
      },
      {
        "name": "自贸区",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 76,
    "hot_rank_chg": 55,
    "stock_cnt": 5788,
    "price": "3.73",
    "change": "5.07",
    "market_id": "17",
    "circulate_market_value": "8251987300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 1.31
      },
      {
        "name": "强势人气股",
        "change_pct": 1.47
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.16
      },
      {
        "name": "光通信",
        "change_pct": 2.48
      },
      {
        "name": "林业",
        "change_pct": 2.05
      },
      {
        "name": "军民融合",
        "change_pct": 1.57
      },
      {
        "name": "军工",
        "change_pct": 1.52
      },
      {
        "name": "人造肉",
        "change_pct": 0.98
      }
    ]
  },
  {
    "code": "002298",
    "name": "中电鑫龙",
    "hot_rank": 79,
    "hot_rank_chg": 712,
    "stock_cnt": 5788,
    "price": "9.00",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "5987925100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力基础设施",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 1.64
      },
      {
        "name": "国产软件",
        "change_pct": 1.94
      },
      {
        "name": "锂电池",
        "change_pct": 1.5
      },
      {
        "name": "人工智能",
        "change_pct": 1.88
      },
      {
        "name": "充电桩",
        "change_pct": 1.58
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.16
      },
      {
        "name": "军民融合",
        "change_pct": 1.57
      },
      {
        "name": "磁悬浮",
        "change_pct": 1.77
      },
      {
        "name": "人脸识别",
        "change_pct": 1.06
      },
      {
        "name": "水利",
        "change_pct": 1.04
      },
      {
        "name": "物联网",
        "change_pct": 1.78
      },
      {
        "name": "大数据",
        "change_pct": 1.65
      },
      {
        "name": "智慧城市",
        "change_pct": 1.54
      },
      {
        "name": "军工",
        "change_pct": 1.52
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "储能",
        "change_pct": 1.76
      },
      {
        "name": "智慧安防",
        "change_pct": 1.55
      },
      {
        "name": "无人机",
        "change_pct": 1.65
      },
      {
        "name": "虚拟电厂",
        "change_pct": 1.76
      },
      {
        "name": "信创",
        "change_pct": 2.05
      },
      {
        "name": "元宇宙",
        "change_pct": 1.1
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.97
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.29
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.49
      },
      {
        "name": "数字乡村",
        "change_pct": 0.93
      },
      {
        "name": "华为海思",
        "change_pct": 2.09
      },
      {
        "name": "闪存",
        "change_pct": 4.47
      },
      {
        "name": "UWB超宽带",
        "change_pct": 2.73
      },
      {
        "name": "智慧政务",
        "change_pct": 1.65
      },
      {
        "name": "特高压",
        "change_pct": 2.31
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 1.96
      },
      {
        "name": "华为产业链",
        "change_pct": 1.68
      },
      {
        "name": "时空大数据",
        "change_pct": 2.91
      },
      {
        "name": "服务器",
        "change_pct": 2.4
      },
      {
        "name": "智能电网",
        "change_pct": 1.88
      },
      {
        "name": "磁电存储",
        "change_pct": 2.91
      },
      {
        "name": "军工信息化",
        "change_pct": 2.06
      },
      {
        "name": "光纤概念",
        "change_pct": 1.63
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "000559",
    "name": "万向钱潮",
    "hot_rank": 80,
    "hot_rank_chg": 200,
    "stock_cnt": 5788,
    "price": "11.02",
    "change": "2.99",
    "market_id": "33",
    "circulate_market_value": "36523153000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 3.71
      },
      {
        "name": "锂电池",
        "change_pct": 1.5
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.89
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "机器人",
        "change_pct": 1.78
      },
      {
        "name": "智能制造",
        "change_pct": 1.83
      },
      {
        "name": "工业互联网",
        "change_pct": 1.5
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.3
      },
      {
        "name": "固态电池",
        "change_pct": 1.46
      },
      {
        "name": "MCU概念",
        "change_pct": 3.68
      },
      {
        "name": "人形机器人",
        "change_pct": 1.7
      },
      {
        "name": "小米汽车",
        "change_pct": 1.22
      },
      {
        "name": "低空经济",
        "change_pct": 1.96
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 81,
    "hot_rank_chg": -23,
    "stock_cnt": 5788,
    "price": "11.55",
    "change": "-1.20",
    "market_id": "33",
    "circulate_market_value": "10240135200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 2.57
      },
      {
        "name": "手机产业链",
        "change_pct": 1.77
      },
      {
        "name": "超高清视频",
        "change_pct": 1.19
      },
      {
        "name": "锂电池",
        "change_pct": 1.5
      },
      {
        "name": "强势人气股",
        "change_pct": 1.47
      },
      {
        "name": "OLED",
        "change_pct": 1.95
      },
      {
        "name": "包装印刷",
        "change_pct": 1.23
      },
      {
        "name": "光伏",
        "change_pct": 2.04
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "小米概念股",
        "change_pct": 2.1
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.48
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.78
      },
      {
        "name": "华为产业链",
        "change_pct": 1.68
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.78
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 85,
    "hot_rank_chg": 17,
    "stock_cnt": 5788,
    "price": "12.28",
    "change": "3.45",
    "market_id": "17",
    "circulate_market_value": "21308022000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.21
      },
      {
        "name": "核电",
        "change_pct": 1.75
      },
      {
        "name": "锂电池",
        "change_pct": 1.5
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.17
      },
      {
        "name": "PCB板",
        "change_pct": 1.43
      },
      {
        "name": "中科院系",
        "change_pct": 1.22
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 1.52
      },
      {
        "name": "固态电池",
        "change_pct": 1.46
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.78
      }
    ]
  },
  {
    "code": "002531",
    "name": "天顺风能",
    "hot_rank": 89,
    "hot_rank_chg": -14,
    "stock_cnt": 5788,
    "price": "7.71",
    "change": "-5.63",
    "market_id": "33",
    "circulate_market_value": "13776757000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.9
      },
      {
        "name": "风电",
        "change_pct": 1.26
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 96,
    "hot_rank_chg": -19,
    "stock_cnt": 5788,
    "price": "6.98",
    "change": "1.16",
    "market_id": "33",
    "circulate_market_value": "13105800200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 3.71
      },
      {
        "name": "光伏",
        "change_pct": 2.04
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.3
      },
      {
        "name": "第三代半导体",
        "change_pct": 3.11
      },
      {
        "name": "碳化硅",
        "change_pct": 3.27
      },
      {
        "name": "地摊经济",
        "change_pct": 1.21
      },
      {
        "name": "人形机器人",
        "change_pct": 1.7
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": 2.1
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 97,
    "hot_rank_chg": 308,
    "stock_cnt": 5788,
    "price": "6.58",
    "change": "3.30",
    "market_id": "33",
    "circulate_market_value": "21890318000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 1.64
      },
      {
        "name": "核电",
        "change_pct": 1.75
      },
      {
        "name": "5G",
        "change_pct": 2.02
      },
      {
        "name": "一带一路",
        "change_pct": 1.07
      },
      {
        "name": "充电桩",
        "change_pct": 1.58
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.15
      },
      {
        "name": "风电",
        "change_pct": 1.26
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "储能",
        "change_pct": 1.76
      },
      {
        "name": "特高压",
        "change_pct": 2.31
      },
      {
        "name": "智能电网",
        "change_pct": 1.88
      },
      {
        "name": "海洋经济",
        "change_pct": 1.54
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 98,
    "hot_rank_chg": -10,
    "stock_cnt": 5788,
    "price": "7.07",
    "change": "-0.98",
    "market_id": "33",
    "circulate_market_value": "8249623700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.38
      },
      {
        "name": "国产软件",
        "change_pct": 1.94
      },
      {
        "name": "一带一路",
        "change_pct": 1.07
      },
      {
        "name": "量子通信",
        "change_pct": 2.14
      },
      {
        "name": "人工智能",
        "change_pct": 1.88
      },
      {
        "name": "网络安全",
        "change_pct": 2.08
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.16
      },
      {
        "name": "物联网",
        "change_pct": 1.78
      },
      {
        "name": "大数据",
        "change_pct": 1.65
      },
      {
        "name": "破净股",
        "change_pct": 0.57
      },
      {
        "name": "数字经济",
        "change_pct": 1.32
      },
      {
        "name": "国产芯片",
        "change_pct": 3.33
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.7
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.28
      },
      {
        "name": "信创",
        "change_pct": 2.05
      },
      {
        "name": "华为昇腾",
        "change_pct": 2.39
      },
      {
        "name": "跨境支付",
        "change_pct": 0.96
      },
      {
        "name": "web3.0",
        "change_pct": 1.28
      },
      {
        "name": "数字人民币",
        "change_pct": 1.19
      },
      {
        "name": "智慧政务",
        "change_pct": 1.65
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.15
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 1.96
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.19
      },
      {
        "name": "智慧灯杆",
        "change_pct": 1.62
      },
      {
        "name": "华为产业链",
        "change_pct": 1.68
      },
      {
        "name": "回购",
        "change_pct": 1.46
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.66
      },
      {
        "name": "智能电网",
        "change_pct": 1.88
      },
      {
        "name": "低空经济",
        "change_pct": 1.96
      },
      {
        "name": "量子计算",
        "change_pct": 2.8
      },
      {
        "name": "财税改革",
        "change_pct": 0.77
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.38
      }
    ]
  },
  {
    "code": "002068",
    "name": "黑猫股份",
    "hot_rank": 99,
    "hot_rank_chg": -39,
    "stock_cnt": 5788,
    "price": "9.98",
    "change": "-0.60",
    "market_id": "33",
    "circulate_market_value": "7335358100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 1.5
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.33
      },
      {
        "name": "炭黑",
        "change_pct": -0.59
      },
      {
        "name": "固态电池",
        "change_pct": 1.46
      },
      {
        "name": "PVDF概念",
        "change_pct": 0.39
      },
      {
        "name": "碳基材料",
        "change_pct": 0.97
      },
      {
        "name": "超级电容",
        "change_pct": 1.32
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000993", "name": "闽东电力", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5788, "price": "19.60", "change": "9.07", "market_id": "33", "circulate_market_value": "8975848500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5788, "price": "57.77", "change": "177.74", "market_id": "17", "circulate_market_value": "12198897000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5788, "price": "16.06", "change": "10.00", "market_id": "17", "circulate_market_value": "10695960000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "连锁零售"}, {"code": "600176", "name": "中国巨石", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5788, "price": "45.02", "change": "-4.52", "market_id": "17", "circulate_market_value": "178800850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 5, "hot_rank_chg": -4, "stock_cnt": 5788, "price": "14.32", "change": "9.98", "market_id": "17", "circulate_market_value": "9190335700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "粮油食品"}, {"code": "600667", "name": "太极实业", "hot_rank": 6, "hot_rank_chg": 2, "stock_cnt": 5788, "price": "20.46", "change": "-0.54", "market_id": "17", "circulate_market_value": "42792953000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 7, "hot_rank_chg": 8, "stock_cnt": 5788, "price": "46.47", "change": "2.95", "market_id": "17", "circulate_market_value": "67938898000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5788, "price": "69.49", "change": "1.46", "market_id": "17", "circulate_market_value": "170503880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 9, "hot_rank_chg": 11, "stock_cnt": 5788, "price": "8.63", "change": "3.11", "market_id": "33", "circulate_market_value": "16527248000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.96}, {"name": "林业", "change_pct": 2.05}, {"name": "碳中和", "change_pct": 1.32}, {"name": "自贸区", "change_pct": 1.2}]}, {"code": "000978", "name": "桂林旅游", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5788, "price": "8.36", "change": "4.89", "market_id": "33", "circulate_market_value": "3913496300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.47}, {"name": "旅游", "change_pct": 1.67}, {"name": "腾讯概念股", "change_pct": 1.28}, {"name": "广西概念", "change_pct": 0.75}, {"name": "低空经济", "change_pct": 1.96}]}, {"code": "000981", "name": "山子高科", "hot_rank": 11, "hot_rank_chg": -2, "stock_cnt": 5788, "price": "3.00", "change": "-0.33", "market_id": "33", "circulate_market_value": "28540068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 3.71}, {"name": "无人驾驶", "change_pct": 1.41}, {"name": "汽车零部件", "change_pct": 0.89}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "新能源车零部件", "change_pct": 1.3}, {"name": "减速器", "change_pct": 1.58}, {"name": "华为汽车", "change_pct": 0.51}]}, {"code": "000725", "name": "京东方A", "hot_rank": 12, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "5.92", "change": "2.96", "market_id": "33", "circulate_market_value": "209373430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.63}, {"name": "手机产业链", "change_pct": 1.77}, {"name": "超高清视频", "change_pct": 1.19}, {"name": "苹果产业链", "change_pct": 2.18}, {"name": "电竞", "change_pct": 1.14}, {"name": "半导体", "change_pct": 3.71}, {"name": "人工智能", "change_pct": 1.88}, {"name": "互联网医疗", "change_pct": 1.49}, {"name": "VR&AR", "change_pct": 1.67}, {"name": "OLED", "change_pct": 1.95}, {"name": "京津冀", "change_pct": 1.14}, {"name": "物联网", "change_pct": 1.78}, {"name": "指纹识别", "change_pct": 1.48}, {"name": "汽车零部件", "change_pct": 0.89}, {"name": "白马股", "change_pct": 0.85}, {"name": "智能制造", "change_pct": 1.83}, {"name": "小米概念股", "change_pct": 2.1}, {"name": "国产芯片", "change_pct": 3.33}, {"name": "液晶面板/LCD", "change_pct": 1.48}, {"name": "全息概念", "change_pct": 1.63}, {"name": "理想汽车概念股", "change_pct": 0.96}, {"name": "MicroLED", "change_pct": 1.77}, {"name": "钙钛矿电池", "change_pct": 2.6}, {"name": "智能手表", "change_pct": 1.98}, {"name": "MiniLED", "change_pct": 1.46}, {"name": "传感器", "change_pct": 2.23}, {"name": "大硅片", "change_pct": 3.25}, {"name": "AI PC", "change_pct": 2.28}, {"name": "华为产业链", "change_pct": 1.68}, {"name": "回购", "change_pct": 1.46}, {"name": "光电共封装CPO", "change_pct": 3.18}, {"name": "智能眼镜/MR头显", "change_pct": 2.5}, {"name": "玻璃基板封装", "change_pct": 2.58}]}, {"code": "002080", "name": "中材科技", "hot_rank": 13, "hot_rank_chg": 34, "stock_cnt": 5788, "price": "60.22", "change": "2.61", "market_id": "33", "circulate_market_value": "101056602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003026", "name": "中晶科技", "hot_rank": 14, "hot_rank_chg": 12, "stock_cnt": 5788, "price": "37.20", "change": "0.54", "market_id": "33", "circulate_market_value": "5362784700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 15, "hot_rank_chg": -1, "stock_cnt": 5788, "price": "35.98", "change": "-1.13", "market_id": "17", "circulate_market_value": "122797928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 16, "hot_rank_chg": 11, "stock_cnt": 5788, "price": "7.50", "change": "1.08", "market_id": "17", "circulate_market_value": "18888824000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "工业大麻", "change_pct": 0.47}, {"name": "中药", "change_pct": 0.84}, {"name": "强势人气股", "change_pct": 1.47}, {"name": "保健品", "change_pct": 0.62}, {"name": "民营医院", "change_pct": 0.77}, {"name": "医药", "change_pct": 1.19}, {"name": "化学原料药", "change_pct": 0.94}, {"name": "流感", "change_pct": 0.8}, {"name": "振兴东北", "change_pct": 1.17}, {"name": "食品", "change_pct": 0.59}]}, {"code": "002579", "name": "中京电子", "hot_rank": 17, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "19.89", "change": "-2.88", "market_id": "33", "circulate_market_value": "11604586900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 18, "hot_rank_chg": -2, "stock_cnt": 5788, "price": "51.60", "change": "2.08", "market_id": "17", "circulate_market_value": "43682152000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 19, "hot_rank_chg": 32, "stock_cnt": 5788, "price": "18.03", "change": "10.01", "market_id": "33", "circulate_market_value": "59968258000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体封测"}, {"code": "000636", "name": "风华高科", "hot_rank": 20, "hot_rank_chg": 2, "stock_cnt": 5788, "price": "58.20", "change": "2.74", "market_id": "33", "circulate_market_value": "66783916000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 21, "hot_rank_chg": -8, "stock_cnt": 5788, "price": "9.75", "change": "2.42", "market_id": "33", "circulate_market_value": "4691108500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 1.75}, {"name": "医疗器械", "change_pct": 1.64}, {"name": "锂电池", "change_pct": 1.5}, {"name": "基因测序", "change_pct": 2.2}, {"name": "PCB板", "change_pct": 1.43}, {"name": "医药", "change_pct": 1.19}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "化学原料药", "change_pct": 0.94}, {"name": "食品安全", "change_pct": 1.14}, {"name": "辅助生殖", "change_pct": 1.31}, {"name": "光刻机（胶）", "change_pct": 2.8}, {"name": "异丙醇", "change_pct": 1.15}, {"name": "新冠病毒防治", "change_pct": 1.31}, {"name": "磷酸铁锂", "change_pct": 1.18}]}, {"code": "600721", "name": "百花医药", "hot_rank": 22, "hot_rank_chg": 9, "stock_cnt": 5788, "price": "11.95", "change": "0.67", "market_id": "17", "circulate_market_value": "4595344200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 1.52}, {"name": "股权转让", "change_pct": 1.58}, {"name": "强势人气股", "change_pct": 1.47}, {"name": "新疆概念", "change_pct": 0.5}, {"name": "医药", "change_pct": 1.19}, {"name": "流感", "change_pct": 0.8}, {"name": "国资入股", "change_pct": 0.61}, {"name": "减肥药", "change_pct": 1.42}]}, {"code": "600869", "name": "远东股份", "hot_rank": 23, "hot_rank_chg": -2, "stock_cnt": 5788, "price": "21.41", "change": "0.52", "market_id": "17", "circulate_market_value": "47516342000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 24, "hot_rank_chg": -6, "stock_cnt": 5788, "price": "23.78", "change": "0.47", "market_id": "33", "circulate_market_value": "27976428000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 25, "hot_rank_chg": -1, "stock_cnt": 5788, "price": "23.38", "change": "-3.47", "market_id": "33", "circulate_market_value": "13909514000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 26, "hot_rank_chg": 69, "stock_cnt": 5788, "price": "13.65", "change": "4.12", "market_id": "17", "circulate_market_value": "20102448000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300570", "name": "太辰光", "hot_rank": 27, "hot_rank_chg": 110, "stock_cnt": 5788, "price": "229.35", "change": "6.19", "market_id": "33", "circulate_market_value": "44079418000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 28, "hot_rank_chg": 12, "stock_cnt": 5788, "price": "143.93", "change": "-1.44", "market_id": "17", "circulate_market_value": "347123010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 29, "hot_rank_chg": 7, "stock_cnt": 5788, "price": "21.87", "change": "10.01", "market_id": "33", "circulate_market_value": "5398307700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "氧化锆粉体"}, {"code": "601579", "name": "会稽山", "hot_rank": 30, "hot_rank_chg": 62, "stock_cnt": 5788, "price": "32.84", "change": "10.02", "market_id": "17", "circulate_market_value": "15745578000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "高端黄酒"}, {"code": "600584", "name": "长电科技", "hot_rank": 31, "hot_rank_chg": 25, "stock_cnt": 5788, "price": "73.00", "change": "7.75", "market_id": "17", "circulate_market_value": "130627264000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 32, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "15.40", "change": "-1.53", "market_id": "17", "circulate_market_value": "4505701200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 33, "hot_rank_chg": 56, "stock_cnt": 5788, "price": "42.88", "change": "4.08", "market_id": "33", "circulate_market_value": "65088776000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 34, "hot_rank_chg": -22, "stock_cnt": 5788, "price": "514.98", "change": "2.33", "market_id": "17", "circulate_market_value": "15494574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 35, "hot_rank_chg": -6, "stock_cnt": 5788, "price": "113.60", "change": "-0.22", "market_id": "17", "circulate_market_value": "40978178000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 36, "hot_rank_chg": 29, "stock_cnt": 5788, "price": "31.18", "change": "-3.05", "market_id": "33", "circulate_market_value": "43788971000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 37, "hot_rank_chg": 4, "stock_cnt": 5788, "price": "16.00", "change": "-0.37", "market_id": "17", "circulate_market_value": "20548458000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 38, "hot_rank_chg": -10, "stock_cnt": 5788, "price": "16.52", "change": "1.47", "market_id": "17", "circulate_market_value": "18114092000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 39, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "43.99", "change": "1.31", "market_id": "17", "circulate_market_value": "55938628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 40, "hot_rank_chg": 31, "stock_cnt": 5788, "price": "388.18", "change": "4.95", "market_id": "17", "circulate_market_value": "260359440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 41, "hot_rank_chg": -22, "stock_cnt": 5788, "price": "15.72", "change": "4.80", "market_id": "17", "circulate_market_value": "6986666700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 42, "hot_rank_chg": -12, "stock_cnt": 5788, "price": "39.60", "change": "-3.91", "market_id": "33", "circulate_market_value": "24984443000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603626", "name": "科森科技", "hot_rank": 43, "hot_rank_chg": 35, "stock_cnt": 5788, "price": "23.42", "change": "10.01", "market_id": "17", "circulate_market_value": "12995282300.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "机器人结构件"}, {"code": "603248", "name": "锡华科技", "hot_rank": 44, "hot_rank_chg": 15, "stock_cnt": 5788, "price": "24.57", "change": "9.98", "market_id": "17", "circulate_market_value": "1756876600.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "次新股"}, {"code": "600186", "name": "莲花控股", "hot_rank": 45, "hot_rank_chg": 7, "stock_cnt": 5788, "price": "12.61", "change": "0.00", "market_id": "17", "circulate_market_value": "22561034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.32}, {"name": "纯碱", "change_pct": 0.37}, {"name": "食品", "change_pct": 0.59}, {"name": "土壤修复", "change_pct": 0.86}, {"name": "东数西算/算力", "change_pct": 1.97}, {"name": "OpenClaw概念", "change_pct": 2.62}, {"name": "DeepSeek概念股", "change_pct": 2.38}]}, {"code": "000980", "name": "众泰汽车", "hot_rank": 46, "hot_rank_chg": -23, "stock_cnt": 5788, "price": "2.29", "change": "-3.38", "market_id": "33", "circulate_market_value": "11547292600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.47}, {"name": "新能源整车", "change_pct": -0.88}, {"name": "汽车整车", "change_pct": -0.83}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "低价股", "change_pct": 0.55}]}, {"code": "002384", "name": "东山精密", "hot_rank": 47, "hot_rank_chg": 6, "stock_cnt": 5788, "price": "196.15", "change": "1.35", "market_id": "33", "circulate_market_value": "271927010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 48, "hot_rank_chg": -10, "stock_cnt": 5788, "price": "10.23", "change": "4.92", "market_id": "17", "circulate_market_value": "5399415300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.9}, {"name": "农业种植", "change_pct": 0.53}, {"name": "强势人气股", "change_pct": 1.47}, {"name": "转基因", "change_pct": -0.36}, {"name": "棉花", "change_pct": 0.5}, {"name": "大农业", "change_pct": 0.35}, {"name": "供销社", "change_pct": 0.69}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 49, "hot_rank_chg": 25, "stock_cnt": 5788, "price": "284.66", "change": "2.52", "market_id": "33", "circulate_market_value": "309820540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 50, "hot_rank_chg": -33, "stock_cnt": 5788, "price": "47.40", "change": "-2.79", "market_id": "17", "circulate_market_value": "6774650700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002902", "name": "铭普光磁", "hot_rank": 51, "hot_rank_chg": 263, "stock_cnt": 5788, "price": "31.20", "change": "7.00", "market_id": "33", "circulate_market_value": "5817890400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 52, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "454.99", "change": "-2.58", "market_id": "17", "circulate_market_value": "184879870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 53, "hot_rank_chg": -4, "stock_cnt": 5788, "price": "926.43", "change": "3.40", "market_id": "33", "circulate_market_value": "1028278940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 54, "hot_rank_chg": 66, "stock_cnt": 5788, "price": "5.28", "change": "4.97", "market_id": "33", "circulate_market_value": "4039943100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.84}, {"name": "股权转让", "change_pct": 1.58}, {"name": "优化生育（三孩）", "change_pct": 1.3}, {"name": "强势人气股", "change_pct": 1.47}, {"name": "医药商业", "change_pct": 1.62}, {"name": "保健品", "change_pct": 0.62}, {"name": "民营医院", "change_pct": 0.77}, {"name": "医药", "change_pct": 1.19}, {"name": "食品", "change_pct": 0.59}, {"name": "辅助生殖", "change_pct": 1.31}, {"name": "口腔", "change_pct": 0.97}, {"name": "医美", "change_pct": 1.21}, {"name": "新冠病毒防治", "change_pct": 1.31}]}, {"code": "000759", "name": "中百集团", "hot_rank": 55, "hot_rank_chg": 25, "stock_cnt": 5788, "price": "6.60", "change": "3.12", "market_id": "33", "circulate_market_value": "4327659800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "新零售", "change_pct": 1.76}, {"name": "农业种植", "change_pct": 0.53}, {"name": "冷链", "change_pct": 1.21}, {"name": "大农业", "change_pct": 0.35}, {"name": "预制菜", "change_pct": 0.5}, {"name": "国企改革", "change_pct": 1.03}, {"name": "可降解塑料", "change_pct": 0.78}, {"name": "免税店概念", "change_pct": 1.39}, {"name": "湖北国企改革", "change_pct": 1.2}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 56, "hot_rank_chg": -10, "stock_cnt": 5788, "price": "80.86", "change": "1.84", "market_id": "33", "circulate_market_value": "58642628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 57, "hot_rank_chg": -15, "stock_cnt": 5788, "price": "39.91", "change": "3.31", "market_id": "17", "circulate_market_value": "27592801000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002300", "name": "太阳电缆", "hot_rank": 58, "hot_rank_chg": 187, "stock_cnt": 5788, "price": "8.67", "change": "10.03", "market_id": "33", "circulate_market_value": "6262270000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "海底电缆", "xgb_concepts": [{"name": "核电", "change_pct": 1.75}, {"name": "充电桩", "change_pct": 1.58}, {"name": "福建自贸/海西概念", "change_pct": 1.96}, {"name": "军民融合", "change_pct": 1.57}, {"name": "光伏", "change_pct": 2.04}, {"name": "风电", "change_pct": 1.26}, {"name": "军工", "change_pct": 1.52}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "特高压", "change_pct": 2.31}, {"name": "自贸区", "change_pct": 1.2}, {"name": "海洋经济", "change_pct": 1.54}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 59, "hot_rank_chg": 46, "stock_cnt": 5788, "price": "227.98", "change": "4.09", "market_id": "17", "circulate_market_value": "62828637000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 60, "hot_rank_chg": -10, "stock_cnt": 5788, "price": "55.54", "change": "3.87", "market_id": "17", "circulate_market_value": "250098780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603122", "name": "合富中国", "hot_rank": 61, "hot_rank_chg": 182, "stock_cnt": 5788, "price": "13.64", "change": "10.00", "market_id": "17", "circulate_market_value": "5429437900.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI医疗"}, {"code": "603186", "name": "华正新材", "hot_rank": 63, "hot_rank_chg": -19, "stock_cnt": 5788, "price": "226.78", "change": "-1.40", "market_id": "17", "circulate_market_value": "35556954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 64, "hot_rank_chg": -9, "stock_cnt": 5788, "price": "93.50", "change": "0.60", "market_id": "33", "circulate_market_value": "61056201000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002815", "name": "崇达技术", "hot_rank": 65, "hot_rank_chg": -11, "stock_cnt": 5788, "price": "23.40", "change": "-1.56", "market_id": "33", "circulate_market_value": "18185030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002241", "name": "歌尔股份", "hot_rank": 66, "hot_rank_chg": 120, "stock_cnt": 5788, "price": "23.33", "change": "4.71", "market_id": "33", "circulate_market_value": "73524536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 67, "hot_rank_chg": 45, "stock_cnt": 5788, "price": "61.38", "change": "5.26", "market_id": "33", "circulate_market_value": "93141217000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 68, "hot_rank_chg": -35, "stock_cnt": 5788, "price": "5.55", "change": "-3.31", "market_id": "17", "circulate_market_value": "5378136000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": 1.26}]}, {"code": "603823", "name": "百合花", "hot_rank": 69, "hot_rank_chg": 14, "stock_cnt": 5788, "price": "55.40", "change": "-3.82", "market_id": "17", "circulate_market_value": "23066771000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 70, "hot_rank_chg": 15, "stock_cnt": 5788, "price": "160.00", "change": "-0.30", "market_id": "17", "circulate_market_value": "395724840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603686", "name": "福龙马", "hot_rank": 71, "hot_rank_chg": 70, "stock_cnt": 5788, "price": "15.47", "change": "10.03", "market_id": "17", "circulate_market_value": "6426708300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为云合作"}, {"code": "002396", "name": "星网锐捷", "hot_rank": 72, "hot_rank_chg": -24, "stock_cnt": 5788, "price": "38.90", "change": "1.83", "market_id": "33", "circulate_market_value": "29463448000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 73, "hot_rank_chg": 18, "stock_cnt": 5788, "price": "148.79", "change": "2.49", "market_id": "17", "circulate_market_value": "134593420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 74, "hot_rank_chg": -37, "stock_cnt": 5788, "price": "195.40", "change": "2.19", "market_id": "33", "circulate_market_value": "153590210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600630", "name": "龙头股份", "hot_rank": 75, "hot_rank_chg": 48, "stock_cnt": 5788, "price": "8.29", "change": "9.95", "market_id": "17", "circulate_market_value": "3522102600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "纺织服装", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "上海国企改革", "change_pct": 1.48}, {"name": "一带一路", "change_pct": 1.07}, {"name": "优化生育（三孩）", "change_pct": 1.3}, {"name": "纺织服装", "change_pct": 1.58}, {"name": "外贸受益概念", "change_pct": 1.49}, {"name": "上海自由贸易港", "change_pct": 1.5}, {"name": "进口博览会", "change_pct": 2.32}, {"name": "自由贸易港", "change_pct": 1.09}, {"name": "物业管理", "change_pct": 1.94}, {"name": "国企改革", "change_pct": 1.03}, {"name": "新冠病毒防治", "change_pct": 1.31}, {"name": "自贸区", "change_pct": 1.2}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 76, "hot_rank_chg": 55, "stock_cnt": 5788, "price": "3.73", "change": "5.07", "market_id": "17", "circulate_market_value": "8251987300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 1.31}, {"name": "强势人气股", "change_pct": 1.47}, {"name": "云计算数据中心", "change_pct": 2.16}, {"name": "光通信", "change_pct": 2.48}, {"name": "林业", "change_pct": 2.05}, {"name": "军民融合", "change_pct": 1.57}, {"name": "军工", "change_pct": 1.52}, {"name": "人造肉", "change_pct": 0.98}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 77, "hot_rank_chg": -14, "stock_cnt": 5788, "price": "33.95", "change": "3.51", "market_id": "33", "circulate_market_value": "97099467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 78, "hot_rank_chg": 4, "stock_cnt": 5788, "price": "107.80", "change": "1.91", "market_id": "33", "circulate_market_value": "108337454000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002298", "name": "中电鑫龙", "hot_rank": 79, "hot_rank_chg": 712, "stock_cnt": 5788, "price": "9.00", "change": "10.02", "market_id": "33", "circulate_market_value": "5987925100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力基础设施", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 1.64}, {"name": "国产软件", "change_pct": 1.94}, {"name": "锂电池", "change_pct": 1.5}, {"name": "人工智能", "change_pct": 1.88}, {"name": "充电桩", "change_pct": 1.58}, {"name": "云计算数据中心", "change_pct": 2.16}, {"name": "军民融合", "change_pct": 1.57}, {"name": "磁悬浮", "change_pct": 1.77}, {"name": "人脸识别", "change_pct": 1.06}, {"name": "水利", "change_pct": 1.04}, {"name": "物联网", "change_pct": 1.78}, {"name": "大数据", "change_pct": 1.65}, {"name": "智慧城市", "change_pct": 1.54}, {"name": "军工", "change_pct": 1.52}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "储能", "change_pct": 1.76}, {"name": "智慧安防", "change_pct": 1.55}, {"name": "无人机", "change_pct": 1.65}, {"name": "虚拟电厂", "change_pct": 1.76}, {"name": "信创", "change_pct": 2.05}, {"name": "元宇宙", "change_pct": 1.1}, {"name": "东数西算/算力", "change_pct": 1.97}, {"name": "新型城镇化", "change_pct": 1.29}, {"name": "AIGC概念", "change_pct": 1.49}, {"name": "数字乡村", "change_pct": 0.93}, {"name": "华为海思", "change_pct": 2.09}, {"name": "闪存", "change_pct": 4.47}, {"name": "UWB超宽带", "change_pct": 2.73}, {"name": "智慧政务", "change_pct": 1.65}, {"name": "特高压", "change_pct": 2.31}, {"name": "华为云·鲲鹏", "change_pct": 1.96}, {"name": "华为产业链", "change_pct": 1.68}, {"name": "时空大数据", "change_pct": 2.91}, {"name": "服务器", "change_pct": 2.4}, {"name": "智能电网", "change_pct": 1.88}, {"name": "磁电存储", "change_pct": 2.91}, {"name": "军工信息化", "change_pct": 2.06}, {"name": "光纤概念", "change_pct": 1.63}, {"name": "雅江电站概念股", "change_pct": 1.33}]}, {"code": "000559", "name": "万向钱潮", "hot_rank": 80, "hot_rank_chg": 200, "stock_cnt": 5788, "price": "11.02", "change": "2.99", "market_id": "33", "circulate_market_value": "36523153000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 3.71}, {"name": "锂电池", "change_pct": 1.5}, {"name": "汽车零部件", "change_pct": 0.89}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "机器人", "change_pct": 1.78}, {"name": "智能制造", "change_pct": 1.83}, {"name": "工业互联网", "change_pct": 1.5}, {"name": "新能源车零部件", "change_pct": 1.3}, {"name": "固态电池", "change_pct": 1.46}, {"name": "MCU概念", "change_pct": 3.68}, {"name": "人形机器人", "change_pct": 1.7}, {"name": "小米汽车", "change_pct": 1.22}, {"name": "低空经济", "change_pct": 1.96}]}, {"code": "002585", "name": "双星新材", "hot_rank": 81, "hot_rank_chg": -23, "stock_cnt": 5788, "price": "11.55", "change": "-1.20", "market_id": "33", "circulate_market_value": "10240135200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 2.57}, {"name": "手机产业链", "change_pct": 1.77}, {"name": "超高清视频", "change_pct": 1.19}, {"name": "锂电池", "change_pct": 1.5}, {"name": "强势人气股", "change_pct": 1.47}, {"name": "OLED", "change_pct": 1.95}, {"name": "包装印刷", "change_pct": 1.23}, {"name": "光伏", "change_pct": 2.04}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "小米概念股", "change_pct": 2.1}, {"name": "液晶面板/LCD", "change_pct": 1.48}, {"name": "可降解塑料", "change_pct": 0.78}, {"name": "华为产业链", "change_pct": 1.68}, {"name": "PET复合铜箔", "change_pct": 1.78}]}, {"code": "000021", "name": "深科技", "hot_rank": 82, "hot_rank_chg": 17, "stock_cnt": 5788, "price": "36.95", "change": "4.05", "market_id": "33", "circulate_market_value": "58550481000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 83, "hot_rank_chg": -10, "stock_cnt": 5788, "price": "32.77", "change": "2.44", "market_id": "17", "circulate_market_value": "54531634000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 84, "hot_rank_chg": 24, "stock_cnt": 5788, "price": "16.02", "change": "0.63", "market_id": "17", "circulate_market_value": "10898721200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 85, "hot_rank_chg": 17, "stock_cnt": 5788, "price": "12.28", "change": "3.45", "market_id": "17", "circulate_market_value": "21308022000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.21}, {"name": "核电", "change_pct": 1.75}, {"name": "锂电池", "change_pct": 1.5}, {"name": "铜箔/覆铜板", "change_pct": 1.17}, {"name": "PCB板", "change_pct": 1.43}, {"name": "中科院系", "change_pct": 1.22}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "宁德时代概念股", "change_pct": 1.52}, {"name": "固态电池", "change_pct": 1.46}, {"name": "PET复合铜箔", "change_pct": 1.78}]}, {"code": "002050", "name": "三花智控", "hot_rank": 86, "hot_rank_chg": 20, "stock_cnt": 5788, "price": "35.31", "change": "1.93", "market_id": "33", "circulate_market_value": "130330799000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 87, "hot_rank_chg": -11, "stock_cnt": 5788, "price": "51.30", "change": "-1.91", "market_id": "17", "circulate_market_value": "51822385000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 88, "hot_rank_chg": 37, "stock_cnt": 5788, "price": "123.50", "change": "0.02", "market_id": "33", "circulate_market_value": "237472190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002531", "name": "天顺风能", "hot_rank": 89, "hot_rank_chg": -14, "stock_cnt": 5788, "price": "7.71", "change": "-5.63", "market_id": "33", "circulate_market_value": "13776757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.9}, {"name": "风电", "change_pct": 1.26}]}, {"code": "002912", "name": "中新赛克", "hot_rank": 90, "hot_rank_chg": 52, "stock_cnt": 5788, "price": "24.55", "change": "4.92", "market_id": "33", "circulate_market_value": "3982570600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 91, "hot_rank_chg": 41, "stock_cnt": 5788, "price": "62.71", "change": "2.35", "market_id": "17", "circulate_market_value": "1244423030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 92, "hot_rank_chg": 15, "stock_cnt": 5788, "price": "445.00", "change": "4.87", "market_id": "33", "circulate_market_value": "558352070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 93, "hot_rank_chg": -3, "stock_cnt": 5788, "price": "18.20", "change": "-0.11", "market_id": "33", "circulate_market_value": "61215792000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600343", "name": "航天动力", "hot_rank": 94, "hot_rank_chg": 611, "stock_cnt": 5788, "price": "21.67", "change": "10.00", "market_id": "17", "circulate_market_value": "13829932000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液力传动"}, {"code": "600641", "name": "先导基电", "hot_rank": 95, "hot_rank_chg": -52, "stock_cnt": 5788, "price": "37.30", "change": "1.36", "market_id": "17", "circulate_market_value": "34712496000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 96, "hot_rank_chg": -19, "stock_cnt": 5788, "price": "6.98", "change": "1.16", "market_id": "33", "circulate_market_value": "13105800200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 3.71}, {"name": "光伏", "change_pct": 2.04}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "新能源车零部件", "change_pct": 1.3}, {"name": "第三代半导体", "change_pct": 3.11}, {"name": "碳化硅", "change_pct": 3.27}, {"name": "地摊经济", "change_pct": 1.21}, {"name": "人形机器人", "change_pct": 1.7}, {"name": "铜缆高速连接器", "change_pct": 2.1}]}, {"code": "002498", "name": "汉缆股份", "hot_rank": 97, "hot_rank_chg": 308, "stock_cnt": 5788, "price": "6.58", "change": "3.30", "market_id": "33", "circulate_market_value": "21890318000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 1.64}, {"name": "核电", "change_pct": 1.75}, {"name": "5G", "change_pct": 2.02}, {"name": "一带一路", "change_pct": 1.07}, {"name": "充电桩", "change_pct": 1.58}, {"name": "氢能源/燃料电池", "change_pct": 1.15}, {"name": "风电", "change_pct": 1.26}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "储能", "change_pct": 1.76}, {"name": "特高压", "change_pct": 2.31}, {"name": "智能电网", "change_pct": 1.88}, {"name": "海洋经济", "change_pct": 1.54}]}, {"code": "002212", "name": "天融信", "hot_rank": 98, "hot_rank_chg": -10, "stock_cnt": 5788, "price": "7.07", "change": "-0.98", "market_id": "33", "circulate_market_value": "8249623700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.38}, {"name": "国产软件", "change_pct": 1.94}, {"name": "一带一路", "change_pct": 1.07}, {"name": "量子通信", "change_pct": 2.14}, {"name": "人工智能", "change_pct": 1.88}, {"name": "网络安全", "change_pct": 2.08}, {"name": "云计算数据中心", "change_pct": 2.16}, {"name": "物联网", "change_pct": 1.78}, {"name": "大数据", "change_pct": 1.65}, {"name": "破净股", "change_pct": 0.57}, {"name": "数字经济", "change_pct": 1.32}, {"name": "国产芯片", "change_pct": 3.33}, {"name": "阿里巴巴概念股", "change_pct": 1.7}, {"name": "腾讯概念股", "change_pct": 1.28}, {"name": "信创", "change_pct": 2.05}, {"name": "华为昇腾", "change_pct": 2.39}, {"name": "跨境支付", "change_pct": 0.96}, {"name": "web3.0", "change_pct": 1.28}, {"name": "数字人民币", "change_pct": 1.19}, {"name": "智慧政务", "change_pct": 1.65}, {"name": "华为鸿蒙", "change_pct": 1.15}, {"name": "华为云·鲲鹏", "change_pct": 1.96}, {"name": "卫星互联网", "change_pct": 2.19}, {"name": "智慧灯杆", "change_pct": 1.62}, {"name": "华为产业链", "change_pct": 1.68}, {"name": "回购", "change_pct": 1.46}, {"name": "AI大模型/智能体", "change_pct": 1.66}, {"name": "智能电网", "change_pct": 1.88}, {"name": "低空经济", "change_pct": 1.96}, {"name": "量子计算", "change_pct": 2.8}, {"name": "财税改革", "change_pct": 0.77}, {"name": "DeepSeek概念股", "change_pct": 2.38}]}, {"code": "002068", "name": "黑猫股份", "hot_rank": 99, "hot_rank_chg": -39, "stock_cnt": 5788, "price": "9.98", "change": "-0.60", "market_id": "33", "circulate_market_value": "7335358100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.5}, {"name": "新能源汽车", "change_pct": 1.33}, {"name": "炭黑", "change_pct": -0.59}, {"name": "固态电池", "change_pct": 1.46}, {"name": "PVDF概念", "change_pct": 0.39}, {"name": "碳基材料", "change_pct": 0.97}, {"name": "超级电容", "change_pct": 1.32}]}, {"code": "000920", "name": "沃顿科技", "hot_rank": 100, "hot_rank_chg": 35, "stock_cnt": 5788, "price": "13.16", "change": "4.20", "market_id": "33", "circulate_market_value": "6219387900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603118", "name": "共进股份", "price": 18.43, "change_pct": 10.03, "reason": "1、公司深耕以太网交换机领域多年，产品覆盖园区、SMB 场景及 100G/400G/800G 等规格数据中心交换机，同时布局工业与白盒交换机赛道，作为 Arista Networks 核心代工厂间接供应英伟达、微软等头部客户；\n2、参股孙公司山东华云光电技术有限公司致力于光模块等产品的研发、生产及销售", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 11.7, "first_limit_up": 1789701191, "break_limit_up_times": 0}, {"code": "601133", "name": "柏诚股份", "price": 26, "change_pct": 9.98, "reason": "我国洁净室行业头部企业之一，长鑫为公司客户之一", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.0, "first_limit_up": 1789699044, "break_limit_up_times": 0}, {"code": "601123", "name": "马矿股份", "price": 17.78, "change_pct": 10.02, "reason": "公司主营铁矿石的开采、选矿及综合利用，拥有全国知名马坑铁矿采矿权，铁矿石保有资源储量约3.25亿吨，主要产品为TFe65%造球铁精粉，面向福建省及周边省份大型钢铁企业销售，是福建省规模最大的铁矿采选企业，属于铁矿石产业链上游资源开采与加工环节", "plates": ["次新股"], "limit_up_days": 1, "turnover_ratio": 22.49, "first_limit_up": 1789696317, "break_limit_up_times": 0}, {"code": "002285", "name": "世联行", "price": 2.89, "change_pct": 9.89, "reason": "公司专注房地产服务，旗下拥有“红璞公寓”、 “世联空间”、“小样社区”等多个品牌", "plates": ["房地产"], "limit_up_days": 3, "turnover_ratio": 12.89, "first_limit_up": 1789695315, "break_limit_up_times": 1}, {"code": "002453", "name": "华软科技", "price": 5.34, "change_pct": 10.1, "reason": "公司光刻胶基材产品业务目前正处于客户接洽阶段，已有少量试订单；25年业绩同比减亏", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 13.44, "first_limit_up": 1789694700, "break_limit_up_times": 1}, {"code": "301390", "name": "经纬股份", "price": 54, "change_pct": 20.0, "reason": "公司控股股东将变更为中软西安", "plates": ["股权转让"], "limit_up_days": 2, "turnover_ratio": 9.02, "first_limit_up": 1789694700, "break_limit_up_times": 0}, {"code": "002029", "name": "七 匹 狼", "price": 9, "change_pct": 10.02, "reason": "公司位于福建省晋江市，中国男装品牌的领先企业之一，控股股东持有沐曦集成股份比例0.39%", "plates": ["外贸受益概念"], "limit_up_days": 1, "turnover_ratio": 5.97, "first_limit_up": 1789697583, "break_limit_up_times": 1}, {"code": "603230", "name": "内蒙新华", "price": 13.48, "change_pct": 10.04, "reason": "公司是内蒙古规模最大的出版物发行企业，明确以教育服务、文化消费、现代物流为核心，向综合文化服务商转型，提供阅读空间设计、阅读活动策划及阅读课程开发等服务", "plates": ["传媒"], "limit_up_days": 3, "turnover_ratio": 18.47, "first_limit_up": 1789694700, "break_limit_up_times": 6}, {"code": "603725", "name": "天安新材", "price": 11.75, "change_pct": 10.02, "reason": "公司参股若铂机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.7, "first_limit_up": 1789697066, "break_limit_up_times": 1}, {"code": "002623", "name": "亚玛顿", "price": 18.52, "change_pct": 9.98, "reason": "公司是国内光伏镀膜玻璃、大尺寸超薄光伏玻璃的先行者，率先量产1.6mm超薄光伏玻璃并获评工信部制造业单项冠军，在轻量化、高透光特种光伏玻璃领域技术优势突出", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 9.01, "first_limit_up": 1789697448, "break_limit_up_times": 1}, {"code": "600881", "name": "亚泰集团", "price": 1.93, "change_pct": 10.29, "reason": "吉林长春国资委旗下，主营水泥建材、医药、地产等；公司医药集团所属的亚泰制药、龙鑫药业、东北亚药业、亚泰永安堂药业均以生产中成药品种为主", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.97, "first_limit_up": 1789713207, "break_limit_up_times": 0}, {"code": "002980", "name": "华盛昌", "price": 128.03, "change_pct": 10.0, "reason": "公司收购伽蓝特100%股权，后者专注光通信模块和光芯片测试", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 16.01, "first_limit_up": 1789709721, "break_limit_up_times": 1}, {"code": "002836", "name": "新宏泽", "price": 11.92, "change_pct": 9.96, "reason": "公司主营业务为烟标的设计、生产及销售", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 5.5, "first_limit_up": 1789695243, "break_limit_up_times": 2}, {"code": "603138", "name": "海量数据", "price": 15.57, "change_pct": 10.04, "reason": "1、国内主要的关系型数据库产品提供商；公司布局数据库透明加密、数据库审计等安全模块，具备敏感数据保护、泄密轨迹分析及数据库攻击威胁分析能力；\n2、公司数据库产品能够为OpenClaw等智能体提供数据支撑，其技术路线与AI国产化趋势契合", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 8.58, "first_limit_up": 1789695657, "break_limit_up_times": 1}, {"code": "002300", "name": "太阳电缆", "price": 8.67, "change_pct": 10.03, "reason": "福建升级扩容“福淡”“厦金”海底光缆，推进“福州—深圳短路径光缆”项目建设；公司产品有海底电力电缆、海底光电复合电缆、柔性直流海底电缆", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 10.63, "first_limit_up": 1789695909, "break_limit_up_times": 0}, {"code": "001211", "name": "双枪科技", "price": 25.88, "change_pct": 9.99, "reason": "公司主营日用餐厨具产品，目前儿童餐具主要有稻壳餐具系列、学习筷系列等，主要材质有稻壳PP复合材料、PPS、不锈钢等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.3, "first_limit_up": 1789697511, "break_limit_up_times": 0}, {"code": "002471", "name": "中超控股", "price": 5.96, "change_pct": 9.96, "reason": "1、公司孙公司江苏精铸致力于航空航天、舰船燃机、医疗等方面的高温合金精密铸件，形成了自主可控的精密成型技术体系，已为航天科工火箭、上海空间推进研究所等单位提供航天火箭发动机高温合金精密铸件；\n2、公司已研发出一种耐高温抗拉耐腐蚀型核电站用电缆，其具有优良的耐长期热老化性能、耐辐照、电气性能稳定、阻燃性能好及无卤低烟低毒等特点，适应核电站恶劣的工作环境", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.13, "first_limit_up": 1789696200, "break_limit_up_times": 0}, {"code": "002005", "name": "德豪润达", "price": 2.66, "change_pct": 9.92, "reason": "公司主营以智能咖啡机为主的厨房小家电业务，拥有自有品牌北美电器（ACA）", "plates": ["外贸受益概念"], "limit_up_days": 1, "turnover_ratio": 3.68, "first_limit_up": 1789699698, "break_limit_up_times": 2}, {"code": "601579", "name": "会稽山", "price": 32.84, "change_pct": 10.02, "reason": "国内龙头黄酒供应商；公司在生产黄酒的同时，也利用黄酒生产过程产生的醪糟作为原料，通过蒸馏生产糟烧白酒，并一直有销售糟烧白酒等副产品的传统", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.76, "first_limit_up": 1789695727, "break_limit_up_times": 1}, {"code": "603353", "name": "和顺石油", "price": 48.55, "change_pct": 9.99, "reason": "中南地区知名的加油站连锁经营品牌；子公司奎芯科技在UCIe领域已开展相关IP研发与技术储备，聚焦高速互连与Chiplet生态，助力客户实现高带宽、低延迟及可扩展的系统设计", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.2, "first_limit_up": 1789695899, "break_limit_up_times": 6}, {"code": "001332", "name": "锡装股份", "price": 28.9, "change_pct": 10.01, "reason": "1、公司主要从事金属压力容器，产品在天然气领域应用广泛，包括蒸发器、预热器、分离器、BOG 缓冲罐等产品；此外公司的海洋油气装置模块主要应用于 LNG、LPG 等海洋油气的开采和运输行业；\n2、公司产品应用于核电领域，向全球知名核电企业法马通 销售金属压力容器，该等产品用于红沿河核电站、防城港核电站、阳江核电站、福清核电站、巴西安哥拉核电站等国内外多个大型核能发电项目", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.44, "first_limit_up": 1789712118, "break_limit_up_times": 0}, {"code": "600847", "name": "万里股份", "price": 13.92, "change_pct": 10.04, "reason": "公司主要从事铅酸电池产品的研产销，产品主要应用于汽车起动启停领域，旗下特瑞电池全部投产后磷酸铁锂的设计产能将达到 10 万吨 / 年", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 6.5, "first_limit_up": 1789696143, "break_limit_up_times": 2}, {"code": "603402", "name": "陕西旅游", "price": 64.19, "change_pct": 10.01, "reason": "公司业务集旅游演艺、旅游索道、旅游餐饮、旅游项目投资及管理为一体，依托华清宫、华山等优质旅游资源，充分发挥旅游资源整合优势、专业化运营管理优势、旅游产品创新优势，为游客提供高品质的旅游产品及服务体验", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 16.6, "first_limit_up": 1789695919, "break_limit_up_times": 0}, {"code": "603316", "name": "诚邦股份", "price": 16.69, "change_pct": 10.02, "reason": "公司拟定增1.29亿元加码半导体存储业务", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.5, "first_limit_up": 1789695554, "break_limit_up_times": 3}, {"code": "600127", "name": "金健米业", "price": 14.32, "change_pct": 9.98, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 47.06, "first_limit_up": 1789699316, "break_limit_up_times": 53}, {"code": "001216", "name": "华瓷股份", "price": 21.87, "change_pct": 10.01, "reason": "公司氧化锆粉体纯度最高可达99.995%，可适配新能源研磨、齿科陶瓷、MLCC等领域，向潮州三环供应的MLCC相关粉体仍处于小量验证阶段", "plates": ["其他"], "limit_up_days": 4, "turnover_ratio": 9.3, "first_limit_up": 1789695009, "break_limit_up_times": 1}, {"code": "600261", "name": "阳光照明", "price": 3.51, "change_pct": 10.03, "reason": "中国最大的节能灯生产和出口基地之一", "plates": ["外贸受益概念"], "limit_up_days": 1, "turnover_ratio": 6.67, "first_limit_up": 1789712397, "break_limit_up_times": 2}, {"code": "002185", "name": "华天科技", "price": 18.03, "change_pct": 10.01, "reason": "公司拟收购华羿微电100%股份，标的是国内少数集功率器件研发设计、封装测试、可靠性验证和系统解决方案等服务于一体的公司公司已掌握从低容量到大容量存储器的封装技术，实现了Nor Flash、3D NAND、DRAM产品的批量封装，与长江存储有业务合作", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 10.92, "first_limit_up": 1789696953, "break_limit_up_times": 1}, {"code": "301583", "name": "托伦斯", "price": 142.56, "change_pct": 20.0, "reason": "公司产品包括静电卡盘基体、多管式加热反射罩、气体分布盘等高端半导体设备金属零部件", "plates": ["国产芯片", "次新股"], "limit_up_days": 1, "turnover_ratio": 41.16, "first_limit_up": 1789700616, "break_limit_up_times": 0}, {"code": "001399", "name": "惠科股份", "price": 23.17, "change_pct": 10.02, "reason": "公司拟出资40亿元设立全资子公司，建设12寸混合芯片先进封装及测试项目，一期达产后产能为2000万颗/月", "plates": ["国产芯片", "次新股"], "limit_up_days": 1, "turnover_ratio": 15.02, "first_limit_up": 1789698927, "break_limit_up_times": 0}, {"code": "000910", "name": "大亚圣象", "price": 5.69, "change_pct": 10.06, "reason": "1、板材行业龙头；公司研发生产的超薄PCB纤维板有利于丰富公司产品矩阵，开拓高端电子材料市场；\n2、公司以自有资金1500万认购嘉兴翼龙股权投资合伙企业28.30189%的份额，该基金拟以股权投资的方式投资七腾机器人", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 1.95, "first_limit_up": 1789695453, "break_limit_up_times": 2}, {"code": "002161", "name": "远 望 谷", "price": 7.25, "change_pct": 10.02, "reason": "1、公司拟收购光泰通信100%股权，拓展光通信自动化设备领域；\n2、公司自主研发的RFID芯片已广泛应用于铁路、烟草、电力、图书等业务领域，且公司提供自芯片、标签、读写器到软件开发等全套产品和服务", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 7.33, "first_limit_up": 1789695855, "break_limit_up_times": 0}, {"code": "000002", "name": "万  科Ａ", "price": 3.32, "change_pct": 9.93, "reason": "公司上半年营收约702亿元", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.54, "first_limit_up": 1789712538, "break_limit_up_times": 0}, {"code": "002713", "name": "东易日盛", "price": 10.92, "change_pct": 9.97, "reason": "公司将承接未来新的算力中心集成服务订单，并拓展算力中心运营服务业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.88, "first_limit_up": 1789695909, "break_limit_up_times": 1}, {"code": "001233", "name": "海安集团", "price": 45.58, "change_pct": 9.99, "reason": "我国全钢巨胎行业的龙头企业，全钢巨胎产量国内第一", "plates": ["次新股"], "limit_up_days": 1, "turnover_ratio": 8.61, "first_limit_up": 1789695159, "break_limit_up_times": 4}, {"code": "002134", "name": "天津普林", "price": 27.1, "change_pct": 9.98, "reason": "专注于中小批量、高多层、厚铜板、光电板和HDI领域的PCB企业", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 13.35, "first_limit_up": 1789695507, "break_limit_up_times": 5}, {"code": "002971", "name": "和远气体", "price": 42.68, "change_pct": 10.0, "reason": "公司给长江存储、烽火科技、华星光电等光通信、半导体企业直接或间接供应氢气、氧气、氮气和氩气", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.53, "first_limit_up": 1789699269, "break_limit_up_times": 0}, {"code": "603248", "name": "锡华科技", "price": 24.57, "change_pct": 9.98, "reason": "公司主要从事大型高端装备专用部件的研发、制造与销售，产品结构以风电齿轮箱专用部件为主、注塑机厚大专用部件为辅，是全球行业领先、质量可靠、技术卓越的大型高端装备专用部件制造商", "plates": ["风电", "次新股"], "limit_up_days": 4, "turnover_ratio": 33.21, "first_limit_up": 1789695058, "break_limit_up_times": 1}, {"code": "601086", "name": "国芳集团", "price": 16.06, "change_pct": 10.0, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 16.83, "first_limit_up": 1789696397, "break_limit_up_times": 13}, {"code": "601091", "name": "C沈鼓", "price": 57.77, "change_pct": 177.74, "reason": "沈阳铁西区国资局旗下，离心压缩机国家级制造业单项冠军，我国核主泵中屏蔽主泵的唯一国产自主供应商", "plates": ["次新股"], "limit_up_days": 1, "turnover_ratio": 89.08, "first_limit_up": 1789697882, "break_limit_up_times": 10}, {"code": "001229", "name": "魅视科技", "price": 39.99, "change_pct": 10.01, "reason": "1、公司磷化铟半导体材料研发实验室20台工艺验证设备已到位，项目按既定进度推进，常规试验周期预计在三个月以内；\n2、公司AI边缘智能分析平台深度融合边缘计算与CV视觉分析技术，可对存量摄像头进行AI赋能，打造“事前预警-事中干预-事后追溯”的全流程闭环监管体系", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.4, "first_limit_up": 1789700559, "break_limit_up_times": 0}, {"code": "600640", "name": "国脉文化", "price": 12.06, "change_pct": 10.04, "reason": "公司正研发AI智能体平台，近期将推天翼出行、企业培训师、导览机器人、AI态势感知等应用，深耕影音、伴聊、伴读等垂直场景", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 3.02, "first_limit_up": 1789695300, "break_limit_up_times": 1}, {"code": "600838", "name": "上海九百", "price": 8.59, "change_pct": 9.99, "reason": "上海九百集团旗下，有位于上海市中心的静安寺珠宝古玩城，位于航华地区的九百家居和位于大华社区的九百购物中心", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.55, "first_limit_up": 1789699482, "break_limit_up_times": 1}, {"code": "002298", "name": "中电鑫龙", "price": 9, "change_pct": 10.02, "reason": "在OpenClaw普及后，电力设备与安防系统面临的网络攻击风险大幅提升，公司打造了AI驱动的电力安防一体化安全解决方案", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.95, "first_limit_up": 1789695216, "break_limit_up_times": 1}, {"code": "600719", "name": "大连热电", "price": 8.42, "change_pct": 10.07, "reason": "实控人大连市国资委，公司主营热电联营；此前拟101亿元购买康辉新材股权并定增募集配套资金，后者大股东为恒力石化", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 10.16, "first_limit_up": 1789708522, "break_limit_up_times": 1}, {"code": "600343", "name": "航天动力", "price": 21.67, "change_pct": 10.0, "reason": "航天科技集团下属上市公司；公司大股东是航天科技集团下属航天六院，其是我国液体火箭发动机主要研制单位", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 5.46, "first_limit_up": 1789695926, "break_limit_up_times": 0}, {"code": "601026", "name": "道生天合", "price": 15.95, "change_pct": 10.0, "reason": "1、公司是全球风电叶片用材料领域龙头供应商，其风电叶片用环氧树脂、风电叶片用结构胶的产销量行业领先；\n2、公司参股上海道宜半导体8.12%的股份", "plates": ["风电"], "limit_up_days": 1, "turnover_ratio": 10.3, "first_limit_up": 1789698343, "break_limit_up_times": 1}, {"code": "600448", "name": "华纺股份", "price": 3.54, "change_pct": 9.94, "reason": "国内纺织印染行业销售十强之一，旗下有“华纺”、“蓝铂”、“霄霓”、“衣诺德”、“纺卫”等品牌", "plates": ["外贸受益概念"], "limit_up_days": 2, "turnover_ratio": 7.67, "first_limit_up": 1789694700, "break_limit_up_times": 0}, {"code": "001238", "name": "浙江正特", "price": 26.31, "change_pct": 9.99, "reason": "公司从事户外休闲家具及用品的研产销，现拥有遮阳制品、户外休闲家具两大产品系列，产品主要销往欧美市场，销售渠道包括大型连锁超市、品牌商、电商平台等", "plates": ["外贸受益概念"], "limit_up_days": 1, "turnover_ratio": 1.11, "first_limit_up": 1789697331, "break_limit_up_times": 2}, {"code": "603016", "name": "新宏泰", "price": 30.48, "change_pct": 10.0, "reason": "公司主营断路器关键部件、低压断路器及刀熔开关，产品覆盖16A-8000A配电网络，是断路器行业关键部件配套研发、制造、服务能力领先企业之一", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.93, "first_limit_up": 1789708804, "break_limit_up_times": 0}, {"code": "000504", "name": "南华生物", "price": 10.01, "change_pct": 10.0, "reason": "湖南省政府旗下，干细胞储存和节能环保双主业，其中生物医药板块主要为细胞医疗服务，为客户提供干细胞、免疫细胞等生物资源的检测及储存服务", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 5.75, "first_limit_up": 1789695009, "break_limit_up_times": 1}, {"code": "600577", "name": "精达股份", "price": 8.72, "change_pct": 9.96, "reason": "公司主营业务是特种电磁线、特种导体以及模具制造、维修等生产、研发和销售，产品广泛用于汽车驱动电机、工业精密电机、机器人伺服电机等领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.12, "first_limit_up": 1789707764, "break_limit_up_times": 1}, {"code": "001376", "name": "百通能源", "price": 12.66, "change_pct": 9.99, "reason": "公司主营以煤炭为燃料的热电联产业务，境外全资子公司百通图达安哥拉铝业有限公司已完成注册，并取得企业境外投资证书及项目备案通知书，经营范围涵盖铝业产品生产、加工、销售及进出口", "plates": ["公告"], "limit_up_days": 1, "turnover_ratio": 5.41, "first_limit_up": 1789694700, "break_limit_up_times": 0}, {"code": "603122", "name": "合富中国", "price": 13.64, "change_pct": 10.0, "reason": "公司为唯一一家海峡两岸市场“双上市”的医疗企业，其母公司合富医疗控股在台湾上市，公司实际控制人为台湾企业家王琼芝，在两岸医疗流通领域有深度合作", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 12.71, "first_limit_up": 1789696244, "break_limit_up_times": 1}, {"code": "603120", "name": "肯特催化", "price": 59.21, "change_pct": 9.99, "reason": "1、公司四乙基氢氧化铵在半导体清洗领域已实现市场化应用；\n2、公司正在从事的主要研发项目包含环氧丙烷类催化剂的工艺开发，光刻胶显影液、刻蚀液已实现批量生产，四乙基氢氧化铵已在半导体清洗领域实现市场化应用", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.13, "first_limit_up": 1789695520, "break_limit_up_times": 2}, {"code": "688292", "name": "浩瀚深度", "price": 23.02, "change_pct": 20.02, "reason": "公司“基于虚拟化架构的云安全管理技术”，包括“虚拟化云安全检测、防御和SaaS服务技术”、“基于虚拟化的流量动态调度技术和多云安全管理”两项具体核心技术，均为自主研发，已取得相应专利及知识产权", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 6.81, "first_limit_up": 1789695949, "break_limit_up_times": 0}, {"code": "603686", "name": "福龙马", "price": 15.47, "change_pct": 10.03, "reason": "1、公司与华为云计算签订2亿元技术开发合同，布局环卫自动驾驶 ；\n2、公司位于福建省龙岩市，通过 “自动驾驶 + AI + 模块化设计” 构建城市服务生态，研发了多种城市服务机器人", "plates": ["公告"], "limit_up_days": 1, "turnover_ratio": 5.41, "first_limit_up": 1789695002, "break_limit_up_times": 0}, {"code": "603001", "name": "奥康国际", "price": 10.43, "change_pct": 10.02, "reason": "公司为定位中高端商务时尚的国内皮鞋龙头，全资子公司奥港国际持有兰亭集势 10.86% 股权，而兰亭集势从事跨境电商业务", "plates": ["外贸受益概念"], "limit_up_days": 1, "turnover_ratio": 6.42, "first_limit_up": 1789696434, "break_limit_up_times": 7}, {"code": "301689", "name": "电科思仪", "price": 63, "change_pct": 20.0, "reason": "公司研发生产的太赫兹矢量网络分析仪、信号发生器、频谱分析仪等系列化测试仪器，成果已应用于半导体测试、航空航天、通信等领域", "plates": ["次新股"], "limit_up_days": 1, "turnover_ratio": 49.34, "first_limit_up": 1789708539, "break_limit_up_times": 0}, {"code": "000410", "name": "沈阳机床", "price": 5.57, "change_pct": 10.08, "reason": "数控机床龙头，拟吸收合并沈阳优尼斯智能装备公司，后者主营产品包括机器人产品的技术开发与制造", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.45, "first_limit_up": 1789709292, "break_limit_up_times": 0}, {"code": "603626", "name": "科森科技", "price": 23.42, "change_pct": 10.0, "reason": "1、公司为某品牌家用机器人提供相关结构件；\n2、公司与清陶能源共同投资设立了合资公司——科森清陶能源科技有限公司，专注于固态电池的集成、组装和系统集成等业务", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 12.18, "first_limit_up": 1789695101, "break_limit_up_times": 7}, {"code": "002849", "name": "威星智能", "price": 20.32, "change_pct": 10.02, "reason": "公司贵安智算中心项目一期建成后，可为市场提供国产 370P 全功能智算服务能力", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 12.43, "first_limit_up": 1789695843, "break_limit_up_times": 5}, {"code": "603272", "name": "*ST联翔", "price": 16.89, "change_pct": 10.03, "reason": "A股首家墙布上市企业，控股股东拟协议转让5%股份", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.72, "first_limit_up": 1789699469, "break_limit_up_times": 8}, {"code": "001212", "name": "中旗新材", "price": 37.98, "change_pct": 9.99, "reason": "控股股东广东星空科技装备有限公司聚焦2.5D/3D先进封装及AI芯片制造设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.98, "first_limit_up": 1789700976, "break_limit_up_times": 0}, {"code": "601811", "name": "新华文轩", "price": 13.9, "change_pct": 9.97, "reason": "四川省出版传媒行业龙头，省内义务教育阶段学生教科书唯一供货方", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 3.67, "first_limit_up": 1789700173, "break_limit_up_times": 2}, {"code": "002965", "name": "祥鑫科技", "price": 31.11, "change_pct": 10.01, "reason": "1、公司拟通过现金收购与增资相结合的方式，取得苏州酷尔芯科技有限公司51%股权，整体估值暂定6.75亿元，快速切入液冷散热赛道；\n2、公司与广东省科学院智能制造研究所共建人形机器人关键零部件联合技术创新中心", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 7.51, "first_limit_up": 1789696059, "break_limit_up_times": 0}, {"code": "688175", "name": "高凌信息", "price": 21.74, "change_pct": 19.98, "reason": "1、公司是国内军用电信网通信装备主要供应商，聚焦新质军事通信能力和网络空间安全治理两大产业赛道，产品涵盖4/5G机动一体化便携站、一体化传输交换平台等；\n2、公司拟发行股份及支付现金收购凯睿星通89.49%股权，标的主营卫星通信基带、卫星网络管控系统及卫星通信地面终端等产品", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.15, "first_limit_up": 1789699691, "break_limit_up_times": 2}, {"code": "002589", "name": "瑞康医药", "price": 3.27, "change_pct": 10.1, "reason": "中医药全产业链精准服务型企业，拥有种植、中药饮片加工业务，控股子公司马鞍山井泉中药主要从事中药饮片生产和销售", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.12, "first_limit_up": 1789695303, "break_limit_up_times": 0}, {"code": "603232", "name": "格尔软件", "price": 16.31, "change_pct": 9.98, "reason": "1、公司“格尔AI大模型应用安全护栏系统”成为首个通过中国信通院大模型安全围栏能力评估的系统，并前瞻性地为AI智能体构建“数字身份与信任体系”；\n2、公司已加入上海鲲鹏生态联盟，投资的上海泓格后量子科技有限公司致力于抗量子密码领域技术研究、标准制定、产品研发，在政务、金融、军队等领域开展试点、和应用推广工作", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 13.06, "first_limit_up": 1789697048, "break_limit_up_times": 1}, {"code": "003041", "name": "真爱美家", "price": 42.02, "change_pct": 10.0, "reason": "公司主营中高端厚重型毛毯，年产能超2000万条，重点布局中东、北非等海外市场", "plates": ["外贸受益概念"], "limit_up_days": 1, "turnover_ratio": 3.88, "first_limit_up": 1789696512, "break_limit_up_times": 1}, {"code": "605188", "name": "国光连锁", "price": 13.12, "change_pct": 9.97, "reason": "江西省商贸流通行业首家上市企业，主营连锁超市、百货商场的运营业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.58, "first_limit_up": 1789696236, "break_limit_up_times": 1}, {"code": "600621", "name": "华鑫股份", "price": 14.1, "change_pct": 9.98, "reason": "旗下华鑫证券属A级券商，拥有营业网点超80家", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 4.01, "first_limit_up": 1789701491, "break_limit_up_times": 1}, {"code": "600606", "name": "绿地控股", "price": 1.45, "change_pct": 9.85, "reason": "总部位于上海的全球化房地产开发企业", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.55, "first_limit_up": 1789708477, "break_limit_up_times": 0}, {"code": "000509", "name": "华塑控股", "price": 3.77, "change_pct": 9.91, "reason": "实控人湖北省国资委；公司主要产品分为显示器产品及IOT智能显示终端两大系列，子公司宏创智能研发投产的精密段差磨床MF6000E，所加工钻针可用于高频高速PCB板", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.72, "first_limit_up": 1789695810, "break_limit_up_times": 6}, {"code": "000532", "name": "华金资本", "price": 12.96, "change_pct": 10.02, "reason": "1、实控人珠海国资委，珠海金控旗下唯一控股的上市平台，参股优必选等人工智能独角兽公司；\n2、控股子公司华冠电容主营铝电解电容器的研产销，核心产品有片式、导电高分子等多种类型铝电解电容器", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 10.08, "first_limit_up": 1789702107, "break_limit_up_times": 1}, {"code": "600630", "name": "龙头股份", "price": 8.29, "change_pct": 9.95, "reason": "上海纺织集团旗下，公司主营进出口业务，拥有优质品牌三枪，境外收入占比近半", "plates": ["外贸受益概念"], "limit_up_days": 2, "turnover_ratio": 9.33, "first_limit_up": 1789695023, "break_limit_up_times": 1}, {"code": "603375", "name": "盛景微", "price": 51.69, "change_pct": 10.0, "reason": "公司是一家具备高性能、超低功耗芯片设计能力的企业，依托自研数模混合芯片开发电子控制模块，其子公司上海先积集成电路在精密放大器等芯片领域有技术突破，产品应用于汽车、扫地机器人等领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.75, "first_limit_up": 1789697122, "break_limit_up_times": 7}, {"code": "603068", "name": "博通集成", "price": 39.81, "change_pct": 10.0, "reason": "1、公司BK7259等Wi-Fi6 MCU产品集成端侧智能能力，面向智能家居、智能硬件等场景；\n2、公司已有多款融合AI技术的AIoT芯片产品实现量产销售，应用领域涵盖AI眼镜、AI玩具等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.6, "first_limit_up": 1789696346, "break_limit_up_times": 1}, {"code": "001317", "name": "三羊马", "price": 54.51, "change_pct": 10.01, "reason": "1、机器人业务是三羊马智人科技及合作伙伴冰零智能科技高度关注且重视的下游应用领域，智人科技目前无机器人领域的量产产品；\n2、公司布局无人车物流，并为小米景明科技有限公司的承运商之一，与重庆东风小康汽车销售有限公司及其关联方有汽车整车综合物流服务业务合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.41, "first_limit_up": 1789695342, "break_limit_up_times": 0}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};