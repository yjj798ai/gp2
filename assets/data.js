const UPDATE_TIME = "2026-09-18 05:36";
const THS_HOT = [
  {
    "name": "PCB概念",
    "rise": 1.89,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续118天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": 3.44,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续248天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.5,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续295天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": 1.28,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续125天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "MLCC概念",
    "rise": 2.34,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续35天上榜",
    "rankChg": 0,
    "etfName": "科创配置LOF",
    "code": "886112"
  },
  {
    "name": "注册制次新股",
    "rise": 5.91,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885905"
  },
  {
    "name": "粮食概念",
    "rise": -0.29,
    "rate": 0,
    "tag": "",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "光纤概念",
    "rise": 1.89,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续124天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "先进封装",
    "rise": 2.99,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "新股与次新股",
    "rise": 5.04,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "芯片概念",
    "rise": 2.67,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "CRO概念",
    "rise": 1.52,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "国家大基金持股",
    "rise": 4.15,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "海峡两岸",
    "rise": 1.93,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885939"
  },
  {
    "name": "液冷服务器",
    "rise": 2.09,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "商业航天",
    "rise": 2.04,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续224天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "汽车芯片",
    "rise": 3.82,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "半导体ETF",
    "code": "885945"
  },
  {
    "name": "培育钻石",
    "rise": 0.75,
    "rate": 0,
    "tag": "",
    "hotTag": "连续13天上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "AI应用",
    "rise": 1.44,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续53天上榜",
    "rankChg": -2,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "算力租赁",
    "rise": 1.5,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续159天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  }
];
const THS_EVENTS = [
  {
    "title": "韩国部分半导体设备零部件交货时间大幅拉长",
    "desc": "",
    "heat": 496681,
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
    "heat": 434113,
    "direction": "汽车芯片",
    "themes": [
      "汽车芯片"
    ],
    "stocks": [
      {
        "name": "翱捷科技-U",
        "code": "688220",
        "chg": 12.191067
      }
    ]
  },
  {
    "title": "英伟达市值飙升超7300亿元",
    "desc": "",
    "heat": 342870,
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
    "title": "特斯拉机器人量产加速，启动新一轮中国供应链审厂",
    "desc": "",
    "heat": 287642,
    "direction": "特斯拉机器人",
    "themes": [
      "特斯拉概念",
      "人形机器人",
      "机器人概念",
      "减速器"
    ],
    "stocks": [
      {
        "name": "东微半导",
        "code": "688261",
        "chg": 19.99717
      }
    ]
  },
  {
    "title": "十部门：“十五五”时期我国首创新药占全球比例将达到25%以上",
    "desc": "",
    "heat": 285351,
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
        "chg": 27.64208
      }
    ]
  },
  {
    "title": "云计算服务提供商Nebius宣布将于10月1日起全面上调旗下GPU云服务定价",
    "desc": "",
    "heat": 278207,
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
    "title": "亚马逊砸最高80亿美元买发电机 Generac股价飙升18%",
    "desc": "",
    "heat": 213777,
    "direction": "发电机",
    "themes": [
      "发电机",
      "柴油发电机"
    ],
    "stocks": [
      {
        "name": "科泰电源",
        "code": "300153",
        "chg": 6.759735
      }
    ]
  },
  {
    "title": "我国批复 5 个城市群开展氢能综合应用试点",
    "desc": "",
    "heat": 184054,
    "direction": "氢能源",
    "themes": [
      "氢能源"
    ],
    "stocks": [
      {
        "name": "C沈鼓",
        "code": "601091",
        "chg": 84.855769
      }
    ]
  },
  {
    "title": "油价跳水，黄金直线飙涨，白银涨超4%，黄金定价逻辑已变",
    "desc": "",
    "heat": 177133,
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
        "chg": 6.24355
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄酒",
    "change": "+8.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "破发次新",
    "change": "+6.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "次新股",
    "change": "+4.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+4.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+4.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+4.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+4.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+3.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+3.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+3.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+3.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MCU概念",
    "change": "+3.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+3.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+3.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+3.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "国产芯片",
    "change": "+3.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IGBT",
    "change": "+3.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+3.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "WiFi",
    "change": "+3.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+3.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 8,
    "hot_rank_chg": 1,
    "stock_cnt": 5790,
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
        "change_pct": 3.76
      },
      {
        "name": "无人驾驶",
        "change_pct": 1.38
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.82
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.22
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.19
      },
      {
        "name": "减速器",
        "change_pct": 1.46
      },
      {
        "name": "华为汽车",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 11,
    "hot_rank_chg": 2,
    "stock_cnt": 5790,
    "price": "9.71",
    "change": "2.00",
    "market_id": "33",
    "circulate_market_value": "4671863000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 1.88
      },
      {
        "name": "医疗器械",
        "change_pct": 1.67
      },
      {
        "name": "锂电池",
        "change_pct": 1.34
      },
      {
        "name": "基因测序",
        "change_pct": 2.47
      },
      {
        "name": "PCB板",
        "change_pct": 1.57
      },
      {
        "name": "医药",
        "change_pct": 1.24
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.22
      },
      {
        "name": "化学原料药",
        "change_pct": 1.07
      },
      {
        "name": "食品安全",
        "change_pct": 1.25
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.49
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 2.54
      },
      {
        "name": "异丙醇",
        "change_pct": 1.27
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.4
      },
      {
        "name": "磷酸铁锂",
        "change_pct": 1.0
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 14,
    "hot_rank_chg": -9,
    "stock_cnt": 5790,
    "price": "5.87",
    "change": "2.09",
    "market_id": "33",
    "circulate_market_value": "207605080000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.68
      },
      {
        "name": "手机产业链",
        "change_pct": 1.78
      },
      {
        "name": "超高清视频",
        "change_pct": 1.09
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.13
      },
      {
        "name": "电竞",
        "change_pct": 0.93
      },
      {
        "name": "半导体",
        "change_pct": 3.76
      },
      {
        "name": "人工智能",
        "change_pct": 1.77
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.52
      },
      {
        "name": "VR&AR",
        "change_pct": 1.67
      },
      {
        "name": "OLED",
        "change_pct": 1.78
      },
      {
        "name": "京津冀",
        "change_pct": 0.97
      },
      {
        "name": "物联网",
        "change_pct": 1.82
      },
      {
        "name": "指纹识别",
        "change_pct": 1.41
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.82
      },
      {
        "name": "白马股",
        "change_pct": 0.94
      },
      {
        "name": "智能制造",
        "change_pct": 1.77
      },
      {
        "name": "小米概念股",
        "change_pct": 2.1
      },
      {
        "name": "国产芯片",
        "change_pct": 3.37
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.32
      },
      {
        "name": "全息概念",
        "change_pct": 1.45
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.75
      },
      {
        "name": "MicroLED",
        "change_pct": 1.71
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.16
      },
      {
        "name": "智能手表",
        "change_pct": 1.84
      },
      {
        "name": "MiniLED",
        "change_pct": 1.36
      },
      {
        "name": "传感器",
        "change_pct": 2.29
      },
      {
        "name": "大硅片",
        "change_pct": 3.04
      },
      {
        "name": "AI PC",
        "change_pct": 2.27
      },
      {
        "name": "华为产业链",
        "change_pct": 1.62
      },
      {
        "name": "回购",
        "change_pct": 1.38
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 3.26
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.38
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.58
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 19,
    "hot_rank_chg": -8,
    "stock_cnt": 5790,
    "price": "8.27",
    "change": "3.76",
    "market_id": "33",
    "circulate_market_value": "3871365300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.3
      },
      {
        "name": "旅游",
        "change_pct": 1.65
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.2
      },
      {
        "name": "广西概念",
        "change_pct": 0.76
      },
      {
        "name": "低空经济",
        "change_pct": 1.91
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 23,
    "hot_rank_chg": 4,
    "stock_cnt": 5790,
    "price": "7.54",
    "change": "1.62",
    "market_id": "17",
    "circulate_market_value": "18989564000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.59
      },
      {
        "name": "工业大麻",
        "change_pct": 0.44
      },
      {
        "name": "中药",
        "change_pct": 0.83
      },
      {
        "name": "强势人气股",
        "change_pct": 1.3
      },
      {
        "name": "保健品",
        "change_pct": 0.53
      },
      {
        "name": "民营医院",
        "change_pct": 0.91
      },
      {
        "name": "医药",
        "change_pct": 1.24
      },
      {
        "name": "化学原料药",
        "change_pct": 1.07
      },
      {
        "name": "流感",
        "change_pct": 0.9
      },
      {
        "name": "振兴东北",
        "change_pct": 0.89
      },
      {
        "name": "食品",
        "change_pct": 0.52
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 26,
    "hot_rank_chg": -6,
    "stock_cnt": 5790,
    "price": "8.68",
    "change": "3.70",
    "market_id": "33",
    "circulate_market_value": "16623002000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.97
      },
      {
        "name": "林业",
        "change_pct": 1.88
      },
      {
        "name": "碳中和",
        "change_pct": 1.22
      },
      {
        "name": "自贸区",
        "change_pct": 1.16
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 29,
    "hot_rank_chg": 2,
    "stock_cnt": 5790,
    "price": "12.19",
    "change": "2.70",
    "market_id": "17",
    "circulate_market_value": "4683790200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 1.49
      },
      {
        "name": "股权转让",
        "change_pct": 1.41
      },
      {
        "name": "强势人气股",
        "change_pct": 1.3
      },
      {
        "name": "新疆概念",
        "change_pct": 0.33
      },
      {
        "name": "医药",
        "change_pct": 1.24
      },
      {
        "name": "流感",
        "change_pct": 0.9
      },
      {
        "name": "国资入股",
        "change_pct": 0.6
      },
      {
        "name": "减肥药",
        "change_pct": 1.41
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 31,
    "hot_rank_chg": -8,
    "stock_cnt": 5790,
    "price": "2.25",
    "change": "-5.06",
    "market_id": "33",
    "circulate_market_value": "11345593100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.3
      },
      {
        "name": "新能源整车",
        "change_pct": -1.04
      },
      {
        "name": "汽车整车",
        "change_pct": -0.97
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.22
      },
      {
        "name": "低价股",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "603230",
    "name": "内蒙新华",
    "hot_rank": 37,
    "hot_rank_chg": 30,
    "stock_cnt": 5790,
    "price": "12.95",
    "change": "5.71",
    "market_id": "17",
    "circulate_market_value": "4578122900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "教育",
        "change_pct": 0.54
      },
      {
        "name": "内蒙古概念",
        "change_pct": 0.94
      },
      {
        "name": "传媒",
        "change_pct": 0.47
      },
      {
        "name": "教育信息化",
        "change_pct": 0.94
      }
    ]
  },
  {
    "code": "600630",
    "name": "龙头股份",
    "hot_rank": 40,
    "hot_rank_chg": 83,
    "stock_cnt": 5790,
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
        "change_pct": 1.58
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.36
      },
      {
        "name": "一带一路",
        "change_pct": 0.98
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.37
      },
      {
        "name": "纺织服装",
        "change_pct": 1.55
      },
      {
        "name": "外贸受益概念",
        "change_pct": 1.35
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 1.39
      },
      {
        "name": "进口博览会",
        "change_pct": 2.49
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.96
      },
      {
        "name": "物业管理",
        "change_pct": 1.23
      },
      {
        "name": "国企改革",
        "change_pct": 0.92
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.42
      },
      {
        "name": "自贸区",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 48,
    "hot_rank_chg": 4,
    "stock_cnt": 5790,
    "price": "12.66",
    "change": "0.40",
    "market_id": "17",
    "circulate_market_value": "22650491000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.3
      },
      {
        "name": "纯碱",
        "change_pct": 0.4
      },
      {
        "name": "食品",
        "change_pct": 0.5
      },
      {
        "name": "土壤修复",
        "change_pct": 0.78
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.83
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 2.58
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.33
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 53,
    "hot_rank_chg": -15,
    "stock_cnt": 5790,
    "price": "10.20",
    "change": "4.62",
    "market_id": "17",
    "circulate_market_value": "5383581200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.69
      },
      {
        "name": "农业种植",
        "change_pct": 0.0
      },
      {
        "name": "强势人气股",
        "change_pct": 1.3
      },
      {
        "name": "转基因",
        "change_pct": -0.82
      },
      {
        "name": "棉花",
        "change_pct": -0.16
      },
      {
        "name": "大农业",
        "change_pct": 0.21
      },
      {
        "name": "供销社",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 54,
    "hot_rank_chg": 4,
    "stock_cnt": 5790,
    "price": "11.61",
    "change": "-0.68",
    "market_id": "33",
    "circulate_market_value": "10293330700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 2.53
      },
      {
        "name": "手机产业链",
        "change_pct": 1.77
      },
      {
        "name": "超高清视频",
        "change_pct": 1.13
      },
      {
        "name": "锂电池",
        "change_pct": 1.34
      },
      {
        "name": "强势人气股",
        "change_pct": 1.3
      },
      {
        "name": "OLED",
        "change_pct": 1.8
      },
      {
        "name": "包装印刷",
        "change_pct": 1.25
      },
      {
        "name": "光伏",
        "change_pct": 1.73
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.23
      },
      {
        "name": "小米概念股",
        "change_pct": 2.09
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.29
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.73
      },
      {
        "name": "华为产业链",
        "change_pct": 1.62
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.82
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 55,
    "hot_rank_chg": 47,
    "stock_cnt": 5790,
    "price": "12.18",
    "change": "2.61",
    "market_id": "17",
    "circulate_market_value": "21134504000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.15
      },
      {
        "name": "核电",
        "change_pct": 1.67
      },
      {
        "name": "锂电池",
        "change_pct": 1.34
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.13
      },
      {
        "name": "PCB板",
        "change_pct": 1.59
      },
      {
        "name": "中科院系",
        "change_pct": 1.14
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.23
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 1.36
      },
      {
        "name": "固态电池",
        "change_pct": 1.31
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.82
      }
    ]
  },
  {
    "code": "002453",
    "name": "华软科技",
    "hot_rank": 64,
    "hot_rank_chg": 130,
    "stock_cnt": 5790,
    "price": "5.34",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "3434161900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "光引发剂",
    "xgb_concepts": [
      {
        "name": "苹果产业链",
        "change_pct": 2.14
      },
      {
        "name": "锂电池",
        "change_pct": 1.34
      },
      {
        "name": "保健品",
        "change_pct": 0.51
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.23
      },
      {
        "name": "食品",
        "change_pct": 0.5
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.86
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 2.53
      },
      {
        "name": "横琴新区",
        "change_pct": 1.81
      },
      {
        "name": "供应链金融",
        "change_pct": 1.05
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 65,
    "hot_rank_chg": -32,
    "stock_cnt": 5790,
    "price": "5.49",
    "change": "-4.36",
    "market_id": "17",
    "circulate_market_value": "5319994000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": 1.11
      }
    ]
  },
  {
    "code": "002068",
    "name": "黑猫股份",
    "hot_rank": 70,
    "hot_rank_chg": -10,
    "stock_cnt": 5790,
    "price": "9.99",
    "change": "-0.50",
    "market_id": "33",
    "circulate_market_value": "7342708200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 1.34
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.23
      },
      {
        "name": "炭黑",
        "change_pct": -1.01
      },
      {
        "name": "固态电池",
        "change_pct": 1.31
      },
      {
        "name": "PVDF概念",
        "change_pct": 0.47
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
  },
  {
    "code": "002531",
    "name": "天顺风能",
    "hot_rank": 81,
    "hot_rank_chg": -6,
    "stock_cnt": 5790,
    "price": "7.61",
    "change": "-6.85",
    "market_id": "33",
    "circulate_market_value": "13598070000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.69
      },
      {
        "name": "风电",
        "change_pct": 1.11
      }
    ]
  },
  {
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 87,
    "hot_rank_chg": 115,
    "stock_cnt": 5790,
    "price": "10.01",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3294515200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "细胞医疗",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 1.88
      },
      {
        "name": "锂电池",
        "change_pct": 1.34
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.17
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.35
      },
      {
        "name": "污水处理",
        "change_pct": 1.23
      },
      {
        "name": "智慧城市",
        "change_pct": 1.48
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.23
      },
      {
        "name": "环保",
        "change_pct": 1.39
      },
      {
        "name": "动力电池回收",
        "change_pct": 1.21
      },
      {
        "name": "干细胞",
        "change_pct": 1.54
      },
      {
        "name": "国企改革",
        "change_pct": 0.92
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 89,
    "hot_rank_chg": -12,
    "stock_cnt": 5790,
    "price": "7.01",
    "change": "1.59",
    "market_id": "33",
    "circulate_market_value": "13162128900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 3.75
      },
      {
        "name": "光伏",
        "change_pct": 1.73
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.23
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.18
      },
      {
        "name": "第三代半导体",
        "change_pct": 3.18
      },
      {
        "name": "碳化硅",
        "change_pct": 3.43
      },
      {
        "name": "地摊经济",
        "change_pct": 1.12
      },
      {
        "name": "人形机器人",
        "change_pct": 1.55
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": 2.21
      }
    ]
  },
  {
    "code": "600448",
    "name": "华纺股份",
    "hot_rank": 97,
    "hot_rank_chg": 134,
    "stock_cnt": 5790,
    "price": "3.54",
    "change": "9.94",
    "market_id": "17",
    "circulate_market_value": "2229561600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "纺织印染",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": 1.55
      },
      {
        "name": "印染",
        "change_pct": 1.87
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.86
      },
      {
        "name": "外贸受益概念",
        "change_pct": 1.35
      },
      {
        "name": "抗菌面料",
        "change_pct": 1.44
      },
      {
        "name": "国企改革",
        "change_pct": 0.92
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.42
      },
      {
        "name": "C2M",
        "change_pct": 1.92
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "601091", "name": "沈鼓集团", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5790, "price": "37.60", "change": "80.77", "market_id": "17", "circulate_market_value": "7939735600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5790, "price": "45.50", "change": "-3.50", "market_id": "17", "circulate_market_value": "180707210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5790, "price": "19.61", "change": "9.13", "market_id": "33", "circulate_market_value": "8980428000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 4, "hot_rank_chg": 4, "stock_cnt": 5790, "price": "20.74", "change": "0.83", "market_id": "17", "circulate_market_value": "43378585000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 5, "hot_rank_chg": -4, "stock_cnt": 5790, "price": "14.28", "change": "9.68", "market_id": "17", "circulate_market_value": "9164664400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002080", "name": "中材科技", "hot_rank": 6, "hot_rank_chg": 41, "stock_cnt": 5790, "price": "59.72", "change": "1.75", "market_id": "33", "circulate_market_value": "100217540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003026", "name": "中晶科技", "hot_rank": 7, "hot_rank_chg": 19, "stock_cnt": 5790, "price": "37.38", "change": "1.03", "market_id": "33", "circulate_market_value": "5387292100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000981", "name": "山子高科", "hot_rank": 8, "hot_rank_chg": 1, "stock_cnt": 5790, "price": "3.00", "change": "-0.33", "market_id": "33", "circulate_market_value": "28540068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 3.76}, {"name": "无人驾驶", "change_pct": 1.38}, {"name": "汽车零部件", "change_pct": 0.82}, {"name": "新能源汽车", "change_pct": 1.22}, {"name": "新能源车零部件", "change_pct": 1.19}, {"name": "减速器", "change_pct": 1.46}, {"name": "华为汽车", "change_pct": 0.48}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5790, "price": "69.76", "change": "1.85", "market_id": "17", "circulate_market_value": "171166360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 10, "hot_rank_chg": -8, "stock_cnt": 5790, "price": "16.06", "change": "10.00", "market_id": "17", "circulate_market_value": "10695960000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "连锁零售"}, {"code": "002584", "name": "西陇科学", "hot_rank": 11, "hot_rank_chg": 2, "stock_cnt": 5790, "price": "9.71", "change": "2.00", "market_id": "33", "circulate_market_value": "4671863000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 1.88}, {"name": "医疗器械", "change_pct": 1.67}, {"name": "锂电池", "change_pct": 1.34}, {"name": "基因测序", "change_pct": 2.47}, {"name": "PCB板", "change_pct": 1.57}, {"name": "医药", "change_pct": 1.24}, {"name": "新能源汽车", "change_pct": 1.22}, {"name": "化学原料药", "change_pct": 1.07}, {"name": "食品安全", "change_pct": 1.25}, {"name": "辅助生殖", "change_pct": 1.49}, {"name": "光刻机（胶）", "change_pct": 2.54}, {"name": "异丙醇", "change_pct": 1.27}, {"name": "新冠病毒防治", "change_pct": 1.4}, {"name": "磷酸铁锂", "change_pct": 1.0}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 12, "hot_rank_chg": 3, "stock_cnt": 5790, "price": "46.55", "change": "3.12", "market_id": "17", "circulate_market_value": "68055858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 13, "hot_rank_chg": 1, "stock_cnt": 5790, "price": "35.96", "change": "-1.18", "market_id": "17", "circulate_market_value": "122729669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 14, "hot_rank_chg": -9, "stock_cnt": 5790, "price": "5.87", "change": "2.09", "market_id": "33", "circulate_market_value": "207605080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.68}, {"name": "手机产业链", "change_pct": 1.78}, {"name": "超高清视频", "change_pct": 1.09}, {"name": "苹果产业链", "change_pct": 2.13}, {"name": "电竞", "change_pct": 0.93}, {"name": "半导体", "change_pct": 3.76}, {"name": "人工智能", "change_pct": 1.77}, {"name": "互联网医疗", "change_pct": 1.52}, {"name": "VR&AR", "change_pct": 1.67}, {"name": "OLED", "change_pct": 1.78}, {"name": "京津冀", "change_pct": 0.97}, {"name": "物联网", "change_pct": 1.82}, {"name": "指纹识别", "change_pct": 1.41}, {"name": "汽车零部件", "change_pct": 0.82}, {"name": "白马股", "change_pct": 0.94}, {"name": "智能制造", "change_pct": 1.77}, {"name": "小米概念股", "change_pct": 2.1}, {"name": "国产芯片", "change_pct": 3.37}, {"name": "液晶面板/LCD", "change_pct": 1.32}, {"name": "全息概念", "change_pct": 1.45}, {"name": "理想汽车概念股", "change_pct": 0.75}, {"name": "MicroLED", "change_pct": 1.71}, {"name": "钙钛矿电池", "change_pct": 2.16}, {"name": "智能手表", "change_pct": 1.84}, {"name": "MiniLED", "change_pct": 1.36}, {"name": "传感器", "change_pct": 2.29}, {"name": "大硅片", "change_pct": 3.04}, {"name": "AI PC", "change_pct": 2.27}, {"name": "华为产业链", "change_pct": 1.62}, {"name": "回购", "change_pct": 1.38}, {"name": "光电共封装CPO", "change_pct": 3.26}, {"name": "智能眼镜/MR头显", "change_pct": 2.38}, {"name": "玻璃基板封装", "change_pct": 2.58}]}, {"code": "001216", "name": "华瓷股份", "hot_rank": 15, "hot_rank_chg": 21, "stock_cnt": 5790, "price": "21.87", "change": "10.01", "market_id": "33", "circulate_market_value": "5398307700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "氧化锆粉体"}, {"code": "000636", "name": "风华高科", "hot_rank": 16, "hot_rank_chg": 6, "stock_cnt": 5790, "price": "58.28", "change": "2.88", "market_id": "33", "circulate_market_value": "66875715000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 17, "hot_rank_chg": -1, "stock_cnt": 5790, "price": "51.15", "change": "1.19", "market_id": "17", "circulate_market_value": "43301203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 18, "hot_rank_chg": 0, "stock_cnt": 5790, "price": "23.78", "change": "0.47", "market_id": "33", "circulate_market_value": "27976428000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 19, "hot_rank_chg": -8, "stock_cnt": 5790, "price": "8.27", "change": "3.76", "market_id": "33", "circulate_market_value": "3871365300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.3}, {"name": "旅游", "change_pct": 1.65}, {"name": "腾讯概念股", "change_pct": 1.2}, {"name": "广西概念", "change_pct": 0.76}, {"name": "低空经济", "change_pct": 1.91}]}, {"code": "600869", "name": "远东股份", "hot_rank": 20, "hot_rank_chg": 1, "stock_cnt": 5790, "price": "21.34", "change": "0.19", "market_id": "17", "circulate_market_value": "47360988000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 21, "hot_rank_chg": -11, "stock_cnt": 5790, "price": "19.68", "change": "-3.91", "market_id": "33", "circulate_market_value": "11482064900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 22, "hot_rank_chg": 3, "stock_cnt": 5790, "price": "15.42", "change": "-1.41", "market_id": "17", "circulate_market_value": "4505701200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 23, "hot_rank_chg": 4, "stock_cnt": 5790, "price": "7.54", "change": "1.62", "market_id": "17", "circulate_market_value": "18989564000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.59}, {"name": "工业大麻", "change_pct": 0.44}, {"name": "中药", "change_pct": 0.83}, {"name": "强势人气股", "change_pct": 1.3}, {"name": "保健品", "change_pct": 0.53}, {"name": "民营医院", "change_pct": 0.91}, {"name": "医药", "change_pct": 1.24}, {"name": "化学原料药", "change_pct": 1.07}, {"name": "流感", "change_pct": 0.9}, {"name": "振兴东北", "change_pct": 0.89}, {"name": "食品", "change_pct": 0.52}]}, {"code": "000823", "name": "超声电子", "hot_rank": 24, "hot_rank_chg": 0, "stock_cnt": 5790, "price": "23.43", "change": "-3.26", "market_id": "33", "circulate_market_value": "13939261000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 25, "hot_rank_chg": -8, "stock_cnt": 5790, "price": "48.05", "change": "-1.46", "market_id": "17", "circulate_market_value": "6867552000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 26, "hot_rank_chg": -6, "stock_cnt": 5790, "price": "8.68", "change": "3.70", "market_id": "33", "circulate_market_value": "16623002000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.97}, {"name": "林业", "change_pct": 1.88}, {"name": "碳中和", "change_pct": 1.22}, {"name": "自贸区", "change_pct": 1.16}]}, {"code": "301526", "name": "国际复材", "hot_rank": 27, "hot_rank_chg": 38, "stock_cnt": 5790, "price": "31.43", "change": "-2.27", "market_id": "33", "circulate_market_value": "44126026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603686", "name": "福龙马", "hot_rank": 28, "hot_rank_chg": 113, "stock_cnt": 5790, "price": "15.47", "change": "10.03", "market_id": "17", "circulate_market_value": "6426708300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为云合作"}, {"code": "600721", "name": "百花医药", "hot_rank": 29, "hot_rank_chg": 2, "stock_cnt": 5790, "price": "12.19", "change": "2.70", "market_id": "17", "circulate_market_value": "4683790200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 1.49}, {"name": "股权转让", "change_pct": 1.41}, {"name": "强势人气股", "change_pct": 1.3}, {"name": "新疆概念", "change_pct": 0.33}, {"name": "医药", "change_pct": 1.24}, {"name": "流感", "change_pct": 0.9}, {"name": "国资入股", "change_pct": 0.6}, {"name": "减肥药", "change_pct": 1.41}]}, {"code": "603626", "name": "科森科技", "hot_rank": 30, "hot_rank_chg": 48, "stock_cnt": 5790, "price": "23.42", "change": "10.01", "market_id": "17", "circulate_market_value": "12995282300.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "机器人结构件"}, {"code": "000980", "name": "众泰汽车", "hot_rank": 31, "hot_rank_chg": -8, "stock_cnt": 5790, "price": "2.25", "change": "-5.06", "market_id": "33", "circulate_market_value": "11345593100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.3}, {"name": "新能源整车", "change_pct": -1.04}, {"name": "汽车整车", "change_pct": -0.97}, {"name": "新能源汽车", "change_pct": 1.22}, {"name": "低价股", "change_pct": 0.49}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 32, "hot_rank_chg": -20, "stock_cnt": 5790, "price": "504.75", "change": "0.30", "market_id": "17", "circulate_market_value": "15193998000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 33, "hot_rank_chg": -1, "stock_cnt": 5790, "price": "44.21", "change": "1.82", "market_id": "17", "circulate_market_value": "56218385000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 34, "hot_rank_chg": 17, "stock_cnt": 5790, "price": "18.03", "change": "10.01", "market_id": "33", "circulate_market_value": "59968258000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体封测"}, {"code": "603986", "name": "兆易创新", "hot_rank": 35, "hot_rank_chg": 36, "stock_cnt": 5790, "price": "387.30", "change": "4.71", "market_id": "17", "circulate_market_value": "259769210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 36, "hot_rank_chg": -7, "stock_cnt": 5790, "price": "113.70", "change": "-0.13", "market_id": "17", "circulate_market_value": "41014251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 37, "hot_rank_chg": 30, "stock_cnt": 5790, "price": "12.95", "change": "5.71", "market_id": "17", "circulate_market_value": "4578122900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "教育", "change_pct": 0.54}, {"name": "内蒙古概念", "change_pct": 0.94}, {"name": "传媒", "change_pct": 0.47}, {"name": "教育信息化", "change_pct": 0.94}]}, {"code": "002487", "name": "大金重工", "hot_rank": 38, "hot_rank_chg": -8, "stock_cnt": 5790, "price": "39.62", "change": "-3.86", "market_id": "33", "circulate_market_value": "24997061000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 39, "hot_rank_chg": 5, "stock_cnt": 5790, "price": "226.06", "change": "-1.71", "market_id": "17", "circulate_market_value": "35444064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600630", "name": "龙头股份", "hot_rank": 40, "hot_rank_chg": 83, "stock_cnt": 5790, "price": "8.29", "change": "9.95", "market_id": "17", "circulate_market_value": "3522102600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "纺织服装", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.58}, {"name": "上海国企改革", "change_pct": 1.36}, {"name": "一带一路", "change_pct": 0.98}, {"name": "优化生育（三孩）", "change_pct": 1.37}, {"name": "纺织服装", "change_pct": 1.55}, {"name": "外贸受益概念", "change_pct": 1.35}, {"name": "上海自由贸易港", "change_pct": 1.39}, {"name": "进口博览会", "change_pct": 2.49}, {"name": "自由贸易港", "change_pct": 0.96}, {"name": "物业管理", "change_pct": 1.23}, {"name": "国企改革", "change_pct": 0.92}, {"name": "新冠病毒防治", "change_pct": 1.42}, {"name": "自贸区", "change_pct": 1.15}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 41, "hot_rank_chg": -13, "stock_cnt": 5790, "price": "15.98", "change": "-1.84", "market_id": "17", "circulate_market_value": "17521985000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 42, "hot_rank_chg": 47, "stock_cnt": 5790, "price": "43.01", "change": "4.39", "market_id": "33", "circulate_market_value": "65286107000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 43, "hot_rank_chg": 39, "stock_cnt": 5790, "price": "107.90", "change": "2.00", "market_id": "33", "circulate_market_value": "108437952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 44, "hot_rank_chg": -3, "stock_cnt": 5790, "price": "15.93", "change": "-0.81", "market_id": "17", "circulate_market_value": "20458558000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 45, "hot_rank_chg": 11, "stock_cnt": 5790, "price": "72.81", "change": "7.47", "market_id": "17", "circulate_market_value": "130287275000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 46, "hot_rank_chg": -27, "stock_cnt": 5790, "price": "15.09", "change": "0.60", "market_id": "17", "circulate_market_value": "6706666700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300570", "name": "太辰光", "hot_rank": 47, "hot_rank_chg": 90, "stock_cnt": 5790, "price": "230.90", "change": "6.91", "market_id": "33", "circulate_market_value": "44379239000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 48, "hot_rank_chg": 4, "stock_cnt": 5790, "price": "12.66", "change": "0.40", "market_id": "17", "circulate_market_value": "22650491000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.3}, {"name": "纯碱", "change_pct": 0.4}, {"name": "食品", "change_pct": 0.5}, {"name": "土壤修复", "change_pct": 0.78}, {"name": "东数西算/算力", "change_pct": 1.83}, {"name": "OpenClaw概念", "change_pct": 2.58}, {"name": "DeepSeek概念股", "change_pct": 2.33}]}, {"code": "600183", "name": "生益科技", "hot_rank": 49, "hot_rank_chg": -9, "stock_cnt": 5790, "price": "143.58", "change": "-1.68", "market_id": "17", "circulate_market_value": "346278900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002815", "name": "崇达技术", "hot_rank": 50, "hot_rank_chg": 4, "stock_cnt": 5790, "price": "23.49", "change": "-1.18", "market_id": "33", "circulate_market_value": "18254973000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 51, "hot_rank_chg": -2, "stock_cnt": 5790, "price": "932.00", "change": "4.02", "market_id": "33", "circulate_market_value": "1034827570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 52, "hot_rank_chg": 1, "stock_cnt": 5790, "price": "198.30", "change": "2.46", "market_id": "33", "circulate_market_value": "274866010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 53, "hot_rank_chg": -15, "stock_cnt": 5790, "price": "10.20", "change": "4.62", "market_id": "17", "circulate_market_value": "5383581200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.69}, {"name": "农业种植", "change_pct": 0.0}, {"name": "强势人气股", "change_pct": 1.3}, {"name": "转基因", "change_pct": -0.82}, {"name": "棉花", "change_pct": -0.16}, {"name": "大农业", "change_pct": 0.21}, {"name": "供销社", "change_pct": 0.54}]}, {"code": "002585", "name": "双星新材", "hot_rank": 54, "hot_rank_chg": 4, "stock_cnt": 5790, "price": "11.61", "change": "-0.68", "market_id": "33", "circulate_market_value": "10293330700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 2.53}, {"name": "手机产业链", "change_pct": 1.77}, {"name": "超高清视频", "change_pct": 1.13}, {"name": "锂电池", "change_pct": 1.34}, {"name": "强势人气股", "change_pct": 1.3}, {"name": "OLED", "change_pct": 1.8}, {"name": "包装印刷", "change_pct": 1.25}, {"name": "光伏", "change_pct": 1.73}, {"name": "新能源汽车", "change_pct": 1.23}, {"name": "小米概念股", "change_pct": 2.09}, {"name": "液晶面板/LCD", "change_pct": 1.29}, {"name": "可降解塑料", "change_pct": 0.73}, {"name": "华为产业链", "change_pct": 1.62}, {"name": "PET复合铜箔", "change_pct": 1.82}]}, {"code": "600110", "name": "诺德股份", "hot_rank": 55, "hot_rank_chg": 47, "stock_cnt": 5790, "price": "12.18", "change": "2.61", "market_id": "17", "circulate_market_value": "21134504000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.15}, {"name": "核电", "change_pct": 1.67}, {"name": "锂电池", "change_pct": 1.34}, {"name": "铜箔/覆铜板", "change_pct": 1.13}, {"name": "PCB板", "change_pct": 1.59}, {"name": "中科院系", "change_pct": 1.14}, {"name": "新能源汽车", "change_pct": 1.23}, {"name": "宁德时代概念股", "change_pct": 1.36}, {"name": "固态电池", "change_pct": 1.31}, {"name": "PET复合铜箔", "change_pct": 1.82}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 56, "hot_rank_chg": -14, "stock_cnt": 5790, "price": "39.41", "change": "2.02", "market_id": "17", "circulate_market_value": "27247113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 57, "hot_rank_chg": -11, "stock_cnt": 5790, "price": "80.46", "change": "1.33", "market_id": "33", "circulate_market_value": "58352534000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 58, "hot_rank_chg": -8, "stock_cnt": 5790, "price": "55.39", "change": "3.59", "market_id": "17", "circulate_market_value": "249423330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 59, "hot_rank_chg": -16, "stock_cnt": 5790, "price": "37.42", "change": "1.69", "market_id": "17", "circulate_market_value": "34824172000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603248", "name": "锡华科技", "hot_rank": 60, "hot_rank_chg": -1, "stock_cnt": 5790, "price": "24.57", "change": "9.98", "market_id": "17", "circulate_market_value": "1756876600.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "次新股"}, {"code": "002396", "name": "星网锐捷", "hot_rank": 61, "hot_rank_chg": -13, "stock_cnt": 5790, "price": "39.02", "change": "2.15", "market_id": "33", "circulate_market_value": "29554337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 63, "hot_rank_chg": 29, "stock_cnt": 5790, "price": "32.84", "change": "10.02", "market_id": "17", "circulate_market_value": "15745578000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "高端黄酒"}, {"code": "002453", "name": "华软科技", "hot_rank": 64, "hot_rank_chg": 130, "stock_cnt": 5790, "price": "5.34", "change": "10.10", "market_id": "33", "circulate_market_value": "3434161900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光引发剂", "xgb_concepts": [{"name": "苹果产业链", "change_pct": 2.14}, {"name": "锂电池", "change_pct": 1.34}, {"name": "保健品", "change_pct": 0.51}, {"name": "新能源汽车", "change_pct": 1.23}, {"name": "食品", "change_pct": 0.5}, {"name": "字节跳动概念股", "change_pct": 0.86}, {"name": "光刻机（胶）", "change_pct": 2.53}, {"name": "横琴新区", "change_pct": 1.81}, {"name": "供应链金融", "change_pct": 1.05}]}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 65, "hot_rank_chg": -32, "stock_cnt": 5790, "price": "5.49", "change": "-4.36", "market_id": "17", "circulate_market_value": "5319994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": 1.11}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 67, "hot_rank_chg": -22, "stock_cnt": 5790, "price": "461.61", "change": "-1.16", "market_id": "17", "circulate_market_value": "187569830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000920", "name": "沃顿科技", "hot_rank": 68, "hot_rank_chg": 67, "stock_cnt": 5790, "price": "13.12", "change": "3.88", "market_id": "33", "circulate_market_value": "6200484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600699", "name": "均胜电子", "hot_rank": 69, "hot_rank_chg": 1, "stock_cnt": 5790, "price": "20.08", "change": "1.06", "market_id": "17", "circulate_market_value": "28025065000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002068", "name": "黑猫股份", "hot_rank": 70, "hot_rank_chg": -10, "stock_cnt": 5790, "price": "9.99", "change": "-0.50", "market_id": "33", "circulate_market_value": "7342708200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.34}, {"name": "新能源汽车", "change_pct": 1.23}, {"name": "炭黑", "change_pct": -1.01}, {"name": "固态电池", "change_pct": 1.31}, {"name": "PVDF概念", "change_pct": 0.47}, {"name": "碳基材料", "change_pct": 0.97}, {"name": "超级电容", "change_pct": 1.32}]}, {"code": "300014", "name": "亿纬锂能", "hot_rank": 71, "hot_rank_chg": 523, "stock_cnt": 5790, "price": "51.56", "change": "6.90", "market_id": "33", "circulate_market_value": "108987617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 72, "hot_rank_chg": -35, "stock_cnt": 5790, "price": "195.95", "change": "2.47", "market_id": "33", "circulate_market_value": "154022530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 73, "hot_rank_chg": -10, "stock_cnt": 5790, "price": "34.03", "change": "3.75", "market_id": "33", "circulate_market_value": "97328273000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 74, "hot_rank_chg": 32, "stock_cnt": 5790, "price": "35.23", "change": "1.70", "market_id": "33", "circulate_market_value": "130035515000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 75, "hot_rank_chg": -20, "stock_cnt": 5790, "price": "93.43", "change": "0.53", "market_id": "33", "circulate_market_value": "61010491000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 76, "hot_rank_chg": 15, "stock_cnt": 5790, "price": "147.07", "change": "1.30", "market_id": "17", "circulate_market_value": "133037528000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 77, "hot_rank_chg": -3, "stock_cnt": 5790, "price": "286.00", "change": "3.01", "market_id": "33", "circulate_market_value": "311181030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 78, "hot_rank_chg": 54, "stock_cnt": 5790, "price": "63.35", "change": "3.40", "market_id": "17", "circulate_market_value": "1257123250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 79, "hot_rank_chg": -3, "stock_cnt": 5790, "price": "51.63", "change": "-1.28", "market_id": "17", "circulate_market_value": "52155745000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003001", "name": "中岩大地", "hot_rank": 80, "hot_rank_chg": 6, "stock_cnt": 5790, "price": "19.99", "change": "-1.62", "market_id": "33", "circulate_market_value": "2285876500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002531", "name": "天顺风能", "hot_rank": 81, "hot_rank_chg": -6, "stock_cnt": 5790, "price": "7.61", "change": "-6.85", "market_id": "33", "circulate_market_value": "13598070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.69}, {"name": "风电", "change_pct": 1.11}]}, {"code": "002156", "name": "通富微电", "hot_rank": 82, "hot_rank_chg": 30, "stock_cnt": 5790, "price": "61.50", "change": "5.47", "market_id": "33", "circulate_market_value": "93323312000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002912", "name": "中新赛克", "hot_rank": 83, "hot_rank_chg": 59, "stock_cnt": 5790, "price": "24.47", "change": "4.57", "market_id": "33", "circulate_market_value": "3969592800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 84, "hot_rank_chg": -11, "stock_cnt": 5790, "price": "32.84", "change": "2.66", "market_id": "17", "circulate_market_value": "54648119000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 85, "hot_rank_chg": 14, "stock_cnt": 5790, "price": "37.00", "change": "4.20", "market_id": "33", "circulate_market_value": "58629710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 86, "hot_rank_chg": 9, "stock_cnt": 5790, "price": "13.57", "change": "3.51", "market_id": "17", "circulate_market_value": "19984632000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 87, "hot_rank_chg": 115, "stock_cnt": 5790, "price": "10.01", "change": "10.00", "market_id": "33", "circulate_market_value": "3294515200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "细胞医疗", "xgb_concepts": [{"name": "资产重组", "change_pct": 1.88}, {"name": "锂电池", "change_pct": 1.34}, {"name": "ST摘帽", "change_pct": 1.17}, {"name": "湖南国企改革", "change_pct": 1.35}, {"name": "污水处理", "change_pct": 1.23}, {"name": "智慧城市", "change_pct": 1.48}, {"name": "新能源汽车", "change_pct": 1.23}, {"name": "环保", "change_pct": 1.39}, {"name": "动力电池回收", "change_pct": 1.21}, {"name": "干细胞", "change_pct": 1.54}, {"name": "国企改革", "change_pct": 0.92}]}, {"code": "300502", "name": "新易盛", "hot_rank": 88, "hot_rank_chg": 19, "stock_cnt": 5790, "price": "447.00", "change": "5.34", "market_id": "33", "circulate_market_value": "560861520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 89, "hot_rank_chg": -12, "stock_cnt": 5790, "price": "7.01", "change": "1.59", "market_id": "33", "circulate_market_value": "13162128900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 3.75}, {"name": "光伏", "change_pct": 1.73}, {"name": "新能源汽车", "change_pct": 1.23}, {"name": "新能源车零部件", "change_pct": 1.18}, {"name": "第三代半导体", "change_pct": 3.18}, {"name": "碳化硅", "change_pct": 3.43}, {"name": "地摊经济", "change_pct": 1.12}, {"name": "人形机器人", "change_pct": 1.55}, {"name": "铜缆高速连接器", "change_pct": 2.21}]}, {"code": "603823", "name": "百合花", "hot_rank": 90, "hot_rank_chg": -7, "stock_cnt": 5790, "price": "55.42", "change": "-3.79", "market_id": "17", "circulate_market_value": "23075098000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 91, "hot_rank_chg": -27, "stock_cnt": 5790, "price": "31.38", "change": "1.55", "market_id": "17", "circulate_market_value": "646484270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 92, "hot_rank_chg": -31, "stock_cnt": 5790, "price": "301.56", "change": "-0.90", "market_id": "33", "circulate_market_value": "1284827120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 93, "hot_rank_chg": -8, "stock_cnt": 5790, "price": "160.85", "change": "0.22", "market_id": "17", "circulate_market_value": "397827130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 94, "hot_rank_chg": 30, "stock_cnt": 5790, "price": "414.08", "change": "4.32", "market_id": "33", "circulate_market_value": "68415811000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002655", "name": "共达电声", "hot_rank": 95, "hot_rank_chg": -38, "stock_cnt": 5790, "price": "41.22", "change": "1.10", "market_id": "33", "circulate_market_value": "14974076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688432", "name": "有研硅", "hot_rank": 96, "hot_rank_chg": 13, "stock_cnt": 5790, "price": "56.22", "change": "2.22", "market_id": "17", "circulate_market_value": "70291970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600448", "name": "华纺股份", "hot_rank": 97, "hot_rank_chg": 134, "stock_cnt": 5790, "price": "3.54", "change": "9.94", "market_id": "17", "circulate_market_value": "2229561600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "纺织印染", "xgb_concepts": [{"name": "纺织服装", "change_pct": 1.55}, {"name": "印染", "change_pct": 1.87}, {"name": "山东国企改革", "change_pct": 0.86}, {"name": "外贸受益概念", "change_pct": 1.35}, {"name": "抗菌面料", "change_pct": 1.44}, {"name": "国企改革", "change_pct": 0.92}, {"name": "新冠病毒防治", "change_pct": 1.42}, {"name": "C2M", "change_pct": 1.92}]}, {"code": "000070", "name": "特发信息", "hot_rank": 98, "hot_rank_chg": -36, "stock_cnt": 5790, "price": "17.69", "change": "-1.61", "market_id": "33", "circulate_market_value": "15155324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 99, "hot_rank_chg": -6, "stock_cnt": 5790, "price": "71.89", "change": "2.98", "market_id": "33", "circulate_market_value": "105456567000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 100, "hot_rank_chg": 5, "stock_cnt": 5790, "price": "228.96", "change": "4.53", "market_id": "17", "circulate_market_value": "63098714000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};