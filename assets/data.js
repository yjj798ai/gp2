const UPDATE_TIME = "2026-09-21 02:57";
const THS_HOT = [
  {
    "name": "MLCC概念",
    "rise": 2.15,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续36天上榜",
    "rankChg": 0,
    "etfName": "财通福鑫定开混合",
    "code": "886112"
  },
  {
    "name": "创新药",
    "rise": 4.1,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续126天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 0.79,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续119天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.91,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续296天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": 0.17,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续249天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "CRO概念",
    "rise": 4.75,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "培育钻石",
    "rise": 0.31,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "AI应用",
    "rise": 1.8,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续54天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "光纤概念",
    "rise": 1.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续125天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "新股与次新股",
    "rise": 0.55,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "商业航天",
    "rise": 1.2,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续225天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "粮食概念",
    "rise": 1.92,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": -1,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "液冷服务器",
    "rise": 0.87,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "人形机器人",
    "rise": 1.27,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "注册制次新股",
    "rise": 0.42,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "",
    "code": "885905"
  },
  {
    "name": "芯片概念",
    "rise": 0.76,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "玻璃基板",
    "rise": 0.89,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 2,
    "etfName": "工业母机ETF",
    "code": "886111"
  },
  {
    "name": "数字货币",
    "rise": 1.29,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "猪肉",
    "rise": 1.46,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "文化传媒概念",
    "rise": 1.52,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": -2,
    "etfName": "传媒ETF",
    "code": "885418"
  }
];
const THS_EVENTS = [
  {
    "title": "国家药监局表示：让创新药械跑出上市加速度",
    "desc": "",
    "heat": 616821,
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
        "name": "峆一药业",
        "code": "920478",
        "chg": 29.905561
      }
    ]
  },
  {
    "title": "特朗普宣布将任命新任人工智能顾问并组建\"AI部队\"",
    "desc": "",
    "heat": 493391,
    "direction": "人工智能",
    "themes": [
      "AI智能体",
      "AI应用",
      "人工智能",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "诺禾致源",
        "code": "688315",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "中美经贸磋商在美国纽约开始举行",
    "desc": "",
    "heat": 380743,
    "direction": "贸易降税",
    "themes": [
      "贸易降税"
    ],
    "stocks": [
      {
        "name": "华瓷股份",
        "code": "001216",
        "chg": 10.013717
      }
    ]
  },
  {
    "title": "“电子工业大米”MLCC价格最高涨十倍 行情剧烈波动",
    "desc": "",
    "heat": 253005,
    "direction": "MLCC",
    "themes": [
      "MLCC概念"
    ],
    "stocks": [
      {
        "name": "双星新材",
        "code": "002585",
        "chg": 10.04329
      }
    ]
  },
  {
    "title": "固态变压器产业化元年：十余年实验室技术终迎千亿赛道",
    "desc": "",
    "heat": 70500,
    "direction": "固态变压器",
    "themes": [
      "固态变压器(SST)"
    ],
    "stocks": [
      {
        "name": "泰永长征",
        "code": "002927",
        "chg": 3.650386
      }
    ]
  },
  {
    "title": "卡塔尔称美国希望与伊朗达成协议",
    "desc": "",
    "heat": 55201,
    "direction": "美伊战争/战后重建",
    "themes": [
      "战后重建",
      "白银",
      "黄金概念",
      "航运概念"
    ],
    "stocks": [
      {
        "name": "南矿集团",
        "code": "001360",
        "chg": 5.98249
      }
    ]
  },
  {
    "title": "机构：全球AI领域资本支出2027年升至1.4万亿美元 九成增量来自内存涨价",
    "desc": "",
    "heat": 34634,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "诚邦股份",
        "code": "603316",
        "chg": 10.005992
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "肿瘤疫苗",
    "change": "+6.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "精准医疗",
    "change": "+4.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+4.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+4.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "猴痘概念",
    "change": "+4.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "主题公园",
    "change": "+4.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+4.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因测序",
    "change": "+4.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+4.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "辅助生殖",
    "change": "+4.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+4.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+4.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+3.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+3.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+3.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "流感",
    "change": "+3.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化学原料药",
    "change": "+3.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "体外诊断",
    "change": "+3.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+3.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+3.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 2,
    "hot_rank_chg": -1,
    "stock_cnt": 5859,
    "price": "5.84",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "6102145000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "资产重组",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 1.05
      },
      {
        "name": "复牌股",
        "change_pct": 2.93
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 1.64
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "002453",
    "name": "华软科技",
    "hot_rank": 12,
    "hot_rank_chg": 0,
    "stock_cnt": 5859,
    "price": "5.87",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "3775005700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "光引发剂",
    "xgb_concepts": [
      {
        "name": "苹果产业链",
        "change_pct": 0.98
      },
      {
        "name": "锂电池",
        "change_pct": 0.39
      },
      {
        "name": "保健品",
        "change_pct": 2.68
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.89
      },
      {
        "name": "食品",
        "change_pct": 1.77
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.45
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.35
      },
      {
        "name": "横琴新区",
        "change_pct": 1.44
      },
      {
        "name": "供应链金融",
        "change_pct": 1.52
      }
    ]
  },
  {
    "code": "600630",
    "name": "龙头股份",
    "hot_rank": 14,
    "hot_rank_chg": 2,
    "stock_cnt": 5859,
    "price": "9.12",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "3874737800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "纺织服装",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.61
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.06
      },
      {
        "name": "一带一路",
        "change_pct": 1.13
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.29
      },
      {
        "name": "纺织服装",
        "change_pct": 1.78
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 1.46
      },
      {
        "name": "进口博览会",
        "change_pct": 2.68
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.25
      },
      {
        "name": "物业管理",
        "change_pct": 1.25
      },
      {
        "name": "国企改革",
        "change_pct": 0.95
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.46
      },
      {
        "name": "自贸区",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 16,
    "hot_rank_chg": 12,
    "stock_cnt": 5859,
    "price": "12.71",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "11268581600.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "4",
    "change_reason": "MLCC离型膜",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 1.12
      },
      {
        "name": "手机产业链",
        "change_pct": 1.17
      },
      {
        "name": "超高清视频",
        "change_pct": 1.22
      },
      {
        "name": "锂电池",
        "change_pct": 0.37
      },
      {
        "name": "强势人气股",
        "change_pct": 2.88
      },
      {
        "name": "OLED",
        "change_pct": 0.48
      },
      {
        "name": "包装印刷",
        "change_pct": 1.21
      },
      {
        "name": "光伏",
        "change_pct": 0.77
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.87
      },
      {
        "name": "小米概念股",
        "change_pct": 0.91
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.53
      },
      {
        "name": "可降解塑料",
        "change_pct": 2.13
      },
      {
        "name": "华为产业链",
        "change_pct": 1.26
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 24,
    "hot_rank_chg": 34,
    "stock_cnt": 5859,
    "price": "9.61",
    "change": "-1.44",
    "market_id": "33",
    "circulate_market_value": "4623749000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 3.65
      },
      {
        "name": "医疗器械",
        "change_pct": 3.1
      },
      {
        "name": "锂电池",
        "change_pct": 0.37
      },
      {
        "name": "基因测序",
        "change_pct": 4.29
      },
      {
        "name": "PCB板",
        "change_pct": 0.78
      },
      {
        "name": "医药",
        "change_pct": 3.81
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.87
      },
      {
        "name": "化学原料药",
        "change_pct": 3.73
      },
      {
        "name": "食品安全",
        "change_pct": 1.43
      },
      {
        "name": "辅助生殖",
        "change_pct": 4.03
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.36
      },
      {
        "name": "异丙醇",
        "change_pct": 0.62
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.46
      },
      {
        "name": "磷酸铁锂",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "600448",
    "name": "华纺股份",
    "hot_rank": 26,
    "hot_rank_chg": -4,
    "stock_cnt": 5859,
    "price": "3.69",
    "change": "4.24",
    "market_id": "17",
    "circulate_market_value": "2330332700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": 1.78
      },
      {
        "name": "印染",
        "change_pct": 0.7
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.98
      },
      {
        "name": "外贸受益概念",
        "change_pct": 1.9
      },
      {
        "name": "抗菌面料",
        "change_pct": 1.07
      },
      {
        "name": "国企改革",
        "change_pct": 0.95
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.46
      },
      {
        "name": "C2M",
        "change_pct": 1.6
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 30,
    "hot_rank_chg": -5,
    "stock_cnt": 5859,
    "price": "6.09",
    "change": "2.87",
    "market_id": "33",
    "circulate_market_value": "215385850000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.06
      },
      {
        "name": "手机产业链",
        "change_pct": 1.17
      },
      {
        "name": "超高清视频",
        "change_pct": 1.22
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.98
      },
      {
        "name": "电竞",
        "change_pct": 1.67
      },
      {
        "name": "半导体",
        "change_pct": 0.05
      },
      {
        "name": "人工智能",
        "change_pct": 1.45
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.6
      },
      {
        "name": "VR&AR",
        "change_pct": 1.08
      },
      {
        "name": "OLED",
        "change_pct": 0.48
      },
      {
        "name": "京津冀",
        "change_pct": 0.97
      },
      {
        "name": "物联网",
        "change_pct": 1.37
      },
      {
        "name": "指纹识别",
        "change_pct": 0.91
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.72
      },
      {
        "name": "白马股",
        "change_pct": 0.26
      },
      {
        "name": "智能制造",
        "change_pct": 1.17
      },
      {
        "name": "小米概念股",
        "change_pct": 0.91
      },
      {
        "name": "国产芯片",
        "change_pct": 0.44
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.53
      },
      {
        "name": "全息概念",
        "change_pct": 1.8
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.91
      },
      {
        "name": "MicroLED",
        "change_pct": 0.91
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.85
      },
      {
        "name": "智能手表",
        "change_pct": 0.89
      },
      {
        "name": "MiniLED",
        "change_pct": 1.16
      },
      {
        "name": "传感器",
        "change_pct": 1.12
      },
      {
        "name": "大硅片",
        "change_pct": -0.32
      },
      {
        "name": "AI PC",
        "change_pct": 0.71
      },
      {
        "name": "华为产业链",
        "change_pct": 1.26
      },
      {
        "name": "回购",
        "change_pct": 1.16
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.71
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.99
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.83
      }
    ]
  },
  {
    "code": "002298",
    "name": "中电鑫龙",
    "hot_rank": 32,
    "hot_rank_chg": 12,
    "stock_cnt": 5859,
    "price": "9.01",
    "change": "0.11",
    "market_id": "33",
    "circulate_market_value": "5994578400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 0.86
      },
      {
        "name": "国产软件",
        "change_pct": 1.42
      },
      {
        "name": "锂电池",
        "change_pct": 0.37
      },
      {
        "name": "人工智能",
        "change_pct": 1.45
      },
      {
        "name": "充电桩",
        "change_pct": 0.66
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.12
      },
      {
        "name": "军民融合",
        "change_pct": 1.28
      },
      {
        "name": "磁悬浮",
        "change_pct": 1.18
      },
      {
        "name": "人脸识别",
        "change_pct": 0.7
      },
      {
        "name": "水利",
        "change_pct": 1.07
      },
      {
        "name": "物联网",
        "change_pct": 1.37
      },
      {
        "name": "大数据",
        "change_pct": 1.28
      },
      {
        "name": "智慧城市",
        "change_pct": 1.33
      },
      {
        "name": "军工",
        "change_pct": 1.28
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.87
      },
      {
        "name": "储能",
        "change_pct": 0.63
      },
      {
        "name": "智慧安防",
        "change_pct": 1.34
      },
      {
        "name": "无人机",
        "change_pct": 1.29
      },
      {
        "name": "虚拟电厂",
        "change_pct": 0.56
      },
      {
        "name": "信创",
        "change_pct": 1.35
      },
      {
        "name": "元宇宙",
        "change_pct": 1.51
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.96
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.09
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.11
      },
      {
        "name": "数字乡村",
        "change_pct": 1.23
      },
      {
        "name": "华为海思",
        "change_pct": 1.02
      },
      {
        "name": "闪存",
        "change_pct": 1.44
      },
      {
        "name": "UWB超宽带",
        "change_pct": 1.58
      },
      {
        "name": "智慧政务",
        "change_pct": 1.29
      },
      {
        "name": "特高压",
        "change_pct": 0.58
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 1.27
      },
      {
        "name": "华为产业链",
        "change_pct": 1.26
      },
      {
        "name": "时空大数据",
        "change_pct": 0.62
      },
      {
        "name": "服务器",
        "change_pct": 0.98
      },
      {
        "name": "智能电网",
        "change_pct": 0.97
      },
      {
        "name": "磁电存储",
        "change_pct": 0.71
      },
      {
        "name": "军工信息化",
        "change_pct": 1.47
      },
      {
        "name": "光纤概念",
        "change_pct": 1.41
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 35,
    "hot_rank_chg": 1,
    "stock_cnt": 5859,
    "price": "11.01",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "3623637600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "细胞医疗",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 1.18
      },
      {
        "name": "锂电池",
        "change_pct": 0.37
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.42
      },
      {
        "name": "湖南国企改革",
        "change_pct": 2.13
      },
      {
        "name": "污水处理",
        "change_pct": 1.11
      },
      {
        "name": "智慧城市",
        "change_pct": 1.33
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.87
      },
      {
        "name": "环保",
        "change_pct": 1.01
      },
      {
        "name": "动力电池回收",
        "change_pct": 0.33
      },
      {
        "name": "干细胞",
        "change_pct": 4.55
      },
      {
        "name": "国企改革",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 39,
    "hot_rank_chg": -9,
    "stock_cnt": 5859,
    "price": "8.51",
    "change": "-1.39",
    "market_id": "33",
    "circulate_market_value": "16297437000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.11
      },
      {
        "name": "林业",
        "change_pct": 0.6
      },
      {
        "name": "碳中和",
        "change_pct": 0.52
      },
      {
        "name": "自贸区",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 44,
    "hot_rank_chg": -20,
    "stock_cnt": 5859,
    "price": "8.25",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "20777706000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药研发",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.61
      },
      {
        "name": "工业大麻",
        "change_pct": 2.75
      },
      {
        "name": "中药",
        "change_pct": 3.14
      },
      {
        "name": "强势人气股",
        "change_pct": 2.88
      },
      {
        "name": "保健品",
        "change_pct": 2.63
      },
      {
        "name": "民营医院",
        "change_pct": 3.14
      },
      {
        "name": "医药",
        "change_pct": 3.81
      },
      {
        "name": "化学原料药",
        "change_pct": 3.73
      },
      {
        "name": "流感",
        "change_pct": 3.81
      },
      {
        "name": "振兴东北",
        "change_pct": 1.4
      },
      {
        "name": "食品",
        "change_pct": 1.74
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 45,
    "hot_rank_chg": 18,
    "stock_cnt": 5859,
    "price": "2.95",
    "change": "-1.67",
    "market_id": "33",
    "circulate_market_value": "28064400000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.05
      },
      {
        "name": "无人驾驶",
        "change_pct": 1.04
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.72
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.87
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.57
      },
      {
        "name": "减速器",
        "change_pct": 1.58
      },
      {
        "name": "华为汽车",
        "change_pct": 1.49
      }
    ]
  },
  {
    "code": "002285",
    "name": "世联行",
    "hot_rank": 48,
    "hot_rank_chg": -11,
    "stock_cnt": 5859,
    "price": "2.84",
    "change": "-1.73",
    "market_id": "33",
    "circulate_market_value": "5620386600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 0.7
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.94
      },
      {
        "name": "共享经济",
        "change_pct": 0.93
      },
      {
        "name": "养老产业",
        "change_pct": 2.51
      },
      {
        "name": "住房租赁",
        "change_pct": 0.66
      },
      {
        "name": "房产经纪",
        "change_pct": -0.11
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.15
      },
      {
        "name": "物业管理",
        "change_pct": 1.25
      },
      {
        "name": "低价股",
        "change_pct": 1.12
      },
      {
        "name": "旧改",
        "change_pct": 1.28
      },
      {
        "name": "横琴新区",
        "change_pct": 1.44
      },
      {
        "name": "氮化镓",
        "change_pct": 0.35
      },
      {
        "name": "REITs",
        "change_pct": 0.53
      },
      {
        "name": "华为产业链",
        "change_pct": 1.26
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 52,
    "hot_rank_chg": 24,
    "stock_cnt": 5859,
    "price": "8.47",
    "change": "1.32",
    "market_id": "33",
    "circulate_market_value": "3964989600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.88
      },
      {
        "name": "旅游",
        "change_pct": 2.2
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.45
      },
      {
        "name": "广西概念",
        "change_pct": 1.49
      },
      {
        "name": "低空经济",
        "change_pct": 0.97
      }
    ]
  },
  {
    "code": "600606",
    "name": "绿地控股",
    "hot_rank": 61,
    "hot_rank_chg": 73,
    "stock_cnt": 5859,
    "price": "1.51",
    "change": "4.14",
    "market_id": "17",
    "circulate_market_value": "21221870000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.56
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 1.03
      },
      {
        "name": "房地产",
        "change_pct": 0.71
      },
      {
        "name": "旅游",
        "change_pct": 2.2
      },
      {
        "name": "雄安新区",
        "change_pct": 0.96
      },
      {
        "name": "破净股",
        "change_pct": 0.7
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 1.46
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "进口博览会",
        "change_pct": 2.68
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.25
      },
      {
        "name": "物业管理",
        "change_pct": 1.25
      },
      {
        "name": "元宇宙",
        "change_pct": 1.51
      },
      {
        "name": "低价股",
        "change_pct": 1.12
      },
      {
        "name": "自贸区",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 62,
    "hot_rank_chg": 2,
    "stock_cnt": 5859,
    "price": "12.23",
    "change": "-0.41",
    "market_id": "17",
    "circulate_market_value": "21221263000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.5
      },
      {
        "name": "核电",
        "change_pct": 0.85
      },
      {
        "name": "锂电池",
        "change_pct": 0.37
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 0.52
      },
      {
        "name": "PCB板",
        "change_pct": 0.78
      },
      {
        "name": "中科院系",
        "change_pct": 0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.87
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.71
      },
      {
        "name": "固态电池",
        "change_pct": 0.22
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 63,
    "hot_rank_chg": -3,
    "stock_cnt": 5859,
    "price": "8.55",
    "change": "-1.38",
    "market_id": "33",
    "circulate_market_value": "6168372100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": 0.85
      },
      {
        "name": "充电桩",
        "change_pct": 0.66
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.11
      },
      {
        "name": "军民融合",
        "change_pct": 1.28
      },
      {
        "name": "光伏",
        "change_pct": 0.77
      },
      {
        "name": "风电",
        "change_pct": 0.66
      },
      {
        "name": "军工",
        "change_pct": 1.28
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.87
      },
      {
        "name": "特高压",
        "change_pct": 0.58
      },
      {
        "name": "自贸区",
        "change_pct": 0.95
      },
      {
        "name": "海洋经济",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "600640",
    "name": "国脉文化",
    "hot_rank": 71,
    "hot_rank_chg": 33,
    "stock_cnt": 5859,
    "price": "12.25",
    "change": "1.58",
    "market_id": "17",
    "circulate_market_value": "9696503900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 1.22
      },
      {
        "name": "数字孪生",
        "change_pct": 1.71
      },
      {
        "name": "央企改革",
        "change_pct": 0.63
      },
      {
        "name": "人工智能",
        "change_pct": 1.45
      },
      {
        "name": "游戏",
        "change_pct": 1.59
      },
      {
        "name": "旅游",
        "change_pct": 2.2
      },
      {
        "name": "动漫",
        "change_pct": 1.49
      },
      {
        "name": "数字经济",
        "change_pct": 1.29
      },
      {
        "name": "传媒",
        "change_pct": 1.62
      },
      {
        "name": "全息概念",
        "change_pct": 1.8
      },
      {
        "name": "NFT",
        "change_pct": 1.33
      },
      {
        "name": "元宇宙",
        "change_pct": 1.51
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.37
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.11
      },
      {
        "name": "国企改革",
        "change_pct": 0.95
      },
      {
        "name": "云游戏",
        "change_pct": 1.3
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.69
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.99
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.49
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.8
      },
      {
        "name": "多模态",
        "change_pct": 1.12
      },
      {
        "name": "AI视频",
        "change_pct": 1.03
      },
      {
        "name": "智谱AI",
        "change_pct": 1.94
      }
    ]
  },
  {
    "code": "002589",
    "name": "瑞康医药",
    "hot_rank": 80,
    "hot_rank_chg": 9,
    "stock_cnt": 5859,
    "price": "3.60",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "4916129600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.14
      },
      {
        "name": "体外诊断",
        "change_pct": 3.65
      },
      {
        "name": "农业种植",
        "change_pct": 2.03
      },
      {
        "name": "人工智能",
        "change_pct": 1.45
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.6
      },
      {
        "name": "医药商业",
        "change_pct": 2.9
      },
      {
        "name": "养老产业",
        "change_pct": 2.51
      },
      {
        "name": "冷链",
        "change_pct": 1.26
      },
      {
        "name": "医药",
        "change_pct": 3.81
      },
      {
        "name": "大农业",
        "change_pct": 1.72
      },
      {
        "name": "口腔",
        "change_pct": 2.74
      },
      {
        "name": "医疗信息化",
        "change_pct": 2.09
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.46
      },
      {
        "name": "华为产业链",
        "change_pct": 1.26
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 2.76
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 85,
    "hot_rank_chg": 12,
    "stock_cnt": 5859,
    "price": "5.81",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4445467600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.14
      },
      {
        "name": "股权转让",
        "change_pct": 1.21
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.29
      },
      {
        "name": "强势人气股",
        "change_pct": 2.88
      },
      {
        "name": "医药商业",
        "change_pct": 2.9
      },
      {
        "name": "保健品",
        "change_pct": 2.63
      },
      {
        "name": "民营医院",
        "change_pct": 3.14
      },
      {
        "name": "医药",
        "change_pct": 3.81
      },
      {
        "name": "食品",
        "change_pct": 1.74
      },
      {
        "name": "辅助生殖",
        "change_pct": 4.03
      },
      {
        "name": "口腔",
        "change_pct": 2.74
      },
      {
        "name": "医美",
        "change_pct": 3.28
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.46
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 87,
    "hot_rank_chg": -2,
    "stock_cnt": 5859,
    "price": "2.25",
    "change": "-1.75",
    "market_id": "33",
    "circulate_market_value": "11345593100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.88
      },
      {
        "name": "新能源整车",
        "change_pct": 0.29
      },
      {
        "name": "汽车整车",
        "change_pct": 0.22
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.87
      },
      {
        "name": "低价股",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "600880",
    "name": "博瑞传播",
    "hot_rank": 92,
    "hot_rank_chg": 62,
    "stock_cnt": 5859,
    "price": "4.90",
    "change": "-3.54",
    "market_id": "17",
    "circulate_market_value": "5355847900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.61
      },
      {
        "name": "手游",
        "change_pct": 1.39
      },
      {
        "name": "人工智能",
        "change_pct": 1.45
      },
      {
        "name": "游戏",
        "change_pct": 1.59
      },
      {
        "name": "教育",
        "change_pct": 1.8
      },
      {
        "name": "数字经济",
        "change_pct": 1.29
      },
      {
        "name": "知识产权",
        "change_pct": 1.36
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.37
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.45
      },
      {
        "name": "传媒",
        "change_pct": 1.62
      },
      {
        "name": "NFT",
        "change_pct": 1.33
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.37
      },
      {
        "name": "数据要素",
        "change_pct": 1.59
      },
      {
        "name": "教育信息化",
        "change_pct": 1.22
      },
      {
        "name": "AI营销",
        "change_pct": 1.24
      },
      {
        "name": "华为产业链",
        "change_pct": 1.26
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.49
      },
      {
        "name": "AI视频",
        "change_pct": 1.03
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.94
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.19
      },
      {
        "name": "区块链",
        "change_pct": 1.43
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 96,
    "hot_rank_chg": -15,
    "stock_cnt": 5859,
    "price": "12.57",
    "change": "-0.32",
    "market_id": "17",
    "circulate_market_value": "22489468000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.7
      },
      {
        "name": "纯碱",
        "change_pct": 1.49
      },
      {
        "name": "食品",
        "change_pct": 1.74
      },
      {
        "name": "土壤修复",
        "change_pct": 1.14
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.96
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.97
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.39
      }
    ]
  },
  {
    "code": "002264",
    "name": "新华都",
    "hot_rank": 99,
    "hot_rank_chg": 71,
    "stock_cnt": 5859,
    "price": "7.63",
    "change": "3.81",
    "market_id": "33",
    "circulate_market_value": "4966427100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.61
      },
      {
        "name": "人工智能",
        "change_pct": 1.45
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.11
      },
      {
        "name": "数字经济",
        "change_pct": 1.29
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.37
      },
      {
        "name": "拼多多概念股",
        "change_pct": 2.4
      },
      {
        "name": "传媒",
        "change_pct": 1.62
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.45
      },
      {
        "name": "AI营销",
        "change_pct": 1.24
      },
      {
        "name": "自贸区",
        "change_pct": 0.95
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.49
      },
      {
        "name": "微信小店",
        "change_pct": 2.12
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.19
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "601091", "name": "沈鼓集团", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5859, "price": "45.30", "change": "-21.59", "market_id": "17", "circulate_market_value": "9576250300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5859, "price": "5.84", "change": "9.98", "market_id": "17", "circulate_market_value": "6102145000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "资产重组", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 1.05}, {"name": "复牌股", "change_pct": 2.93}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 1.64}, {"name": "国企改革", "change_pct": 0.96}]}, {"code": "002185", "name": "华天科技", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "18.34", "change": "1.72", "market_id": "33", "circulate_market_value": "60999327000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "59.05", "change": "1.46", "market_id": "33", "circulate_market_value": "67759283000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "24.06", "change": "10.01", "market_id": "33", "circulate_market_value": "5938878900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "MLCC验证"}, {"code": "603230", "name": "内蒙新华", "hot_rank": 6, "hot_rank_chg": 1, "stock_cnt": 5859, "price": "14.83", "change": "10.02", "market_id": "17", "circulate_market_value": "5242746100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "出版发行"}, {"code": "000657", "name": "中钨高新", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5859, "price": "60.11", "change": "-2.67", "market_id": "33", "circulate_market_value": "87367000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5859, "price": "20.36", "change": "3.88", "market_id": "33", "circulate_market_value": "9323891600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 9, "hot_rank_chg": 9, "stock_cnt": 5859, "price": "17.67", "change": "10.03", "market_id": "17", "circulate_market_value": "11768220000.00", "change_type": "1", "change_section": "17", "change_days": "9", "change_reason": "连锁零售"}, {"code": "003040", "name": "楚天龙", "hot_rank": 10, "hot_rank_chg": 56, "stock_cnt": 5859, "price": "16.96", "change": "3.54", "market_id": "33", "circulate_market_value": "7748180400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 11, "hot_rank_chg": -1, "stock_cnt": 5859, "price": "15.75", "change": "9.99", "market_id": "17", "circulate_market_value": "10108085700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "粮油食品"}, {"code": "002453", "name": "华软科技", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "5.87", "change": "9.93", "market_id": "33", "circulate_market_value": "3775005700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光引发剂", "xgb_concepts": [{"name": "苹果产业链", "change_pct": 0.98}, {"name": "锂电池", "change_pct": 0.39}, {"name": "保健品", "change_pct": 2.68}, {"name": "新能源汽车", "change_pct": 0.89}, {"name": "食品", "change_pct": 1.77}, {"name": "字节跳动概念股", "change_pct": 1.45}, {"name": "光刻机（胶）", "change_pct": -0.35}, {"name": "横琴新区", "change_pct": 1.44}, {"name": "供应链金融", "change_pct": 1.52}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 13, "hot_rank_chg": -4, "stock_cnt": 5859, "price": "17.06", "change": "3.27", "market_id": "17", "circulate_market_value": "18706199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600630", "name": "龙头股份", "hot_rank": 14, "hot_rank_chg": 2, "stock_cnt": 5859, "price": "9.12", "change": "10.01", "market_id": "17", "circulate_market_value": "3874737800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "纺织服装", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.61}, {"name": "上海国企改革", "change_pct": 1.06}, {"name": "一带一路", "change_pct": 1.13}, {"name": "优化生育（三孩）", "change_pct": 2.29}, {"name": "纺织服装", "change_pct": 1.78}, {"name": "上海自由贸易港", "change_pct": 1.46}, {"name": "进口博览会", "change_pct": 2.68}, {"name": "自由贸易港", "change_pct": 1.25}, {"name": "物业管理", "change_pct": 1.25}, {"name": "国企改革", "change_pct": 0.95}, {"name": "新冠病毒防治", "change_pct": 2.46}, {"name": "自贸区", "change_pct": 0.95}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 15, "hot_rank_chg": 4, "stock_cnt": 5859, "price": "45.88", "change": "1.91", "market_id": "17", "circulate_market_value": "182216410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 16, "hot_rank_chg": 12, "stock_cnt": 5859, "price": "12.71", "change": "10.04", "market_id": "33", "circulate_market_value": "11268581600.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "MLCC离型膜", "xgb_concepts": [{"name": "被动元件", "change_pct": 1.12}, {"name": "手机产业链", "change_pct": 1.17}, {"name": "超高清视频", "change_pct": 1.22}, {"name": "锂电池", "change_pct": 0.37}, {"name": "强势人气股", "change_pct": 2.88}, {"name": "OLED", "change_pct": 0.48}, {"name": "包装印刷", "change_pct": 1.21}, {"name": "光伏", "change_pct": 0.77}, {"name": "新能源汽车", "change_pct": 0.87}, {"name": "小米概念股", "change_pct": 0.91}, {"name": "液晶面板/LCD", "change_pct": 1.53}, {"name": "可降解塑料", "change_pct": 2.13}, {"name": "华为产业链", "change_pct": 1.26}, {"name": "PET复合铜箔", "change_pct": 0.15}]}, {"code": "601811", "name": "新华文轩", "hot_rank": 17, "hot_rank_chg": -3, "stock_cnt": 5859, "price": "15.29", "change": "10.00", "market_id": "17", "circulate_market_value": "12108210600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "教科书发行"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 18, "hot_rank_chg": -12, "stock_cnt": 5859, "price": "56.87", "change": "2.40", "market_id": "17", "circulate_market_value": "256087830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603248", "name": "锡华科技", "hot_rank": 19, "hot_rank_chg": -4, "stock_cnt": 5859, "price": "24.69", "change": "0.49", "market_id": "17", "circulate_market_value": "1766172300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 20, "hot_rank_chg": 9, "stock_cnt": 5859, "price": "72.78", "change": "4.74", "market_id": "17", "circulate_market_value": "178576370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000070", "name": "特发信息", "hot_rank": 21, "hot_rank_chg": 169, "stock_cnt": 5859, "price": "19.47", "change": "10.00", "market_id": "33", "circulate_market_value": "16680281000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 22, "hot_rank_chg": -5, "stock_cnt": 5859, "price": "20.46", "change": "0.00", "market_id": "17", "circulate_market_value": "42792953000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603686", "name": "福龙马", "hot_rank": 23, "hot_rank_chg": 22, "stock_cnt": 5859, "price": "15.49", "change": "0.13", "market_id": "17", "circulate_market_value": "6447479900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 24, "hot_rank_chg": 34, "stock_cnt": 5859, "price": "9.61", "change": "-1.44", "market_id": "33", "circulate_market_value": "4623749000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 3.65}, {"name": "医疗器械", "change_pct": 3.1}, {"name": "锂电池", "change_pct": 0.37}, {"name": "基因测序", "change_pct": 4.29}, {"name": "PCB板", "change_pct": 0.78}, {"name": "医药", "change_pct": 3.81}, {"name": "新能源汽车", "change_pct": 0.87}, {"name": "化学原料药", "change_pct": 3.73}, {"name": "食品安全", "change_pct": 1.43}, {"name": "辅助生殖", "change_pct": 4.03}, {"name": "光刻机（胶）", "change_pct": -0.36}, {"name": "异丙醇", "change_pct": 0.62}, {"name": "新冠病毒防治", "change_pct": 2.46}, {"name": "磷酸铁锂", "change_pct": 0.01}]}, {"code": "003026", "name": "中晶科技", "hot_rank": 25, "hot_rank_chg": 17, "stock_cnt": 5859, "price": "36.25", "change": "-2.55", "market_id": "33", "circulate_market_value": "5225831900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600448", "name": "华纺股份", "hot_rank": 26, "hot_rank_chg": -4, "stock_cnt": 5859, "price": "3.69", "change": "4.24", "market_id": "17", "circulate_market_value": "2330332700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": 1.78}, {"name": "印染", "change_pct": 0.7}, {"name": "山东国企改革", "change_pct": 0.98}, {"name": "外贸受益概念", "change_pct": 1.9}, {"name": "抗菌面料", "change_pct": 1.07}, {"name": "国企改革", "change_pct": 0.95}, {"name": "新冠病毒防治", "change_pct": 2.46}, {"name": "C2M", "change_pct": 1.6}]}, {"code": "600584", "name": "长电科技", "hot_rank": 27, "hot_rank_chg": -14, "stock_cnt": 5859, "price": "71.84", "change": "-1.59", "market_id": "17", "circulate_market_value": "128551543000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 28, "hot_rank_chg": -1, "stock_cnt": 5859, "price": "132.09", "change": "0.86", "market_id": "33", "circulate_market_value": "247057500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 29, "hot_rank_chg": 11, "stock_cnt": 5859, "price": "35.50", "change": "8.10", "market_id": "17", "circulate_market_value": "17025746000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 30, "hot_rank_chg": -5, "stock_cnt": 5859, "price": "6.09", "change": "2.87", "market_id": "33", "circulate_market_value": "215385850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.06}, {"name": "手机产业链", "change_pct": 1.17}, {"name": "超高清视频", "change_pct": 1.22}, {"name": "苹果产业链", "change_pct": 0.98}, {"name": "电竞", "change_pct": 1.67}, {"name": "半导体", "change_pct": 0.05}, {"name": "人工智能", "change_pct": 1.45}, {"name": "互联网医疗", "change_pct": 2.6}, {"name": "VR&AR", "change_pct": 1.08}, {"name": "OLED", "change_pct": 0.48}, {"name": "京津冀", "change_pct": 0.97}, {"name": "物联网", "change_pct": 1.37}, {"name": "指纹识别", "change_pct": 0.91}, {"name": "汽车零部件", "change_pct": 1.72}, {"name": "白马股", "change_pct": 0.26}, {"name": "智能制造", "change_pct": 1.17}, {"name": "小米概念股", "change_pct": 0.91}, {"name": "国产芯片", "change_pct": 0.44}, {"name": "液晶面板/LCD", "change_pct": 1.53}, {"name": "全息概念", "change_pct": 1.8}, {"name": "理想汽车概念股", "change_pct": 1.91}, {"name": "MicroLED", "change_pct": 0.91}, {"name": "钙钛矿电池", "change_pct": 0.85}, {"name": "智能手表", "change_pct": 0.89}, {"name": "MiniLED", "change_pct": 1.16}, {"name": "传感器", "change_pct": 1.12}, {"name": "大硅片", "change_pct": -0.32}, {"name": "AI PC", "change_pct": 0.71}, {"name": "华为产业链", "change_pct": 1.26}, {"name": "回购", "change_pct": 1.16}, {"name": "光电共封装CPO", "change_pct": 0.71}, {"name": "智能眼镜/MR头显", "change_pct": 0.99}, {"name": "玻璃基板封装", "change_pct": 0.83}]}, {"code": "002080", "name": "中材科技", "hot_rank": 31, "hot_rank_chg": 36, "stock_cnt": 5859, "price": "65.12", "change": "8.14", "market_id": "33", "circulate_market_value": "109296189000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002298", "name": "中电鑫龙", "hot_rank": 32, "hot_rank_chg": 12, "stock_cnt": 5859, "price": "9.01", "change": "0.11", "market_id": "33", "circulate_market_value": "5994578400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 0.86}, {"name": "国产软件", "change_pct": 1.42}, {"name": "锂电池", "change_pct": 0.37}, {"name": "人工智能", "change_pct": 1.45}, {"name": "充电桩", "change_pct": 0.66}, {"name": "云计算数据中心", "change_pct": 1.12}, {"name": "军民融合", "change_pct": 1.28}, {"name": "磁悬浮", "change_pct": 1.18}, {"name": "人脸识别", "change_pct": 0.7}, {"name": "水利", "change_pct": 1.07}, {"name": "物联网", "change_pct": 1.37}, {"name": "大数据", "change_pct": 1.28}, {"name": "智慧城市", "change_pct": 1.33}, {"name": "军工", "change_pct": 1.28}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 0.87}, {"name": "储能", "change_pct": 0.63}, {"name": "智慧安防", "change_pct": 1.34}, {"name": "无人机", "change_pct": 1.29}, {"name": "虚拟电厂", "change_pct": 0.56}, {"name": "信创", "change_pct": 1.35}, {"name": "元宇宙", "change_pct": 1.51}, {"name": "东数西算/算力", "change_pct": 0.96}, {"name": "新型城镇化", "change_pct": 1.09}, {"name": "AIGC概念", "change_pct": 1.11}, {"name": "数字乡村", "change_pct": 1.23}, {"name": "华为海思", "change_pct": 1.02}, {"name": "闪存", "change_pct": 1.44}, {"name": "UWB超宽带", "change_pct": 1.58}, {"name": "智慧政务", "change_pct": 1.29}, {"name": "特高压", "change_pct": 0.58}, {"name": "华为云·鲲鹏", "change_pct": 1.27}, {"name": "华为产业链", "change_pct": 1.26}, {"name": "时空大数据", "change_pct": 0.62}, {"name": "服务器", "change_pct": 0.98}, {"name": "智能电网", "change_pct": 0.97}, {"name": "磁电存储", "change_pct": 0.71}, {"name": "军工信息化", "change_pct": 1.47}, {"name": "光纤概念", "change_pct": 1.41}, {"name": "雅江电站概念股", "change_pct": 1.02}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 33, "hot_rank_chg": 15, "stock_cnt": 5859, "price": "67.77", "change": "0.91", "market_id": "33", "circulate_market_value": "57812756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603888", "name": "新华网", "hot_rank": 34, "hot_rank_chg": 9, "stock_cnt": 5859, "price": "18.60", "change": "0.70", "market_id": "17", "circulate_market_value": "13797721000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 35, "hot_rank_chg": 1, "stock_cnt": 5859, "price": "11.01", "change": "9.99", "market_id": "33", "circulate_market_value": "3623637600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "细胞医疗", "xgb_concepts": [{"name": "资产重组", "change_pct": 1.18}, {"name": "锂电池", "change_pct": 0.37}, {"name": "ST摘帽", "change_pct": 1.42}, {"name": "湖南国企改革", "change_pct": 2.13}, {"name": "污水处理", "change_pct": 1.11}, {"name": "智慧城市", "change_pct": 1.33}, {"name": "新能源汽车", "change_pct": 0.87}, {"name": "环保", "change_pct": 1.01}, {"name": "动力电池回收", "change_pct": 0.33}, {"name": "干细胞", "change_pct": 4.55}, {"name": "国企改革", "change_pct": 0.95}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 36, "hot_rank_chg": 18, "stock_cnt": 5859, "price": "392.05", "change": "1.00", "market_id": "17", "circulate_market_value": "263002070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603316", "name": "诚邦股份", "hot_rank": 37, "hot_rank_chg": 2, "stock_cnt": 5859, "price": "18.36", "change": "10.01", "market_id": "17", "circulate_market_value": "4851887000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体存储"}, {"code": "600206", "name": "有研新材", "hot_rank": 38, "hot_rank_chg": -18, "stock_cnt": 5859, "price": "51.36", "change": "-0.47", "market_id": "17", "circulate_market_value": "43478979000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 39, "hot_rank_chg": -9, "stock_cnt": 5859, "price": "8.51", "change": "-1.39", "market_id": "33", "circulate_market_value": "16297437000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.11}, {"name": "林业", "change_pct": 0.6}, {"name": "碳中和", "change_pct": 0.52}, {"name": "自贸区", "change_pct": 0.95}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 40, "hot_rank_chg": 1, "stock_cnt": 5859, "price": "499.28", "change": "-3.05", "market_id": "17", "circulate_market_value": "15040249000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 41, "hot_rank_chg": -20, "stock_cnt": 5859, "price": "18.42", "change": "-0.05", "market_id": "17", "circulate_market_value": "14485886000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 42, "hot_rank_chg": -9, "stock_cnt": 5859, "price": "16.09", "change": "2.35", "market_id": "17", "circulate_market_value": "7146666700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 43, "hot_rank_chg": -20, "stock_cnt": 5859, "price": "47.24", "change": "1.66", "market_id": "17", "circulate_market_value": "69035395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 44, "hot_rank_chg": -20, "stock_cnt": 5859, "price": "8.25", "change": "10.00", "market_id": "17", "circulate_market_value": "20777706000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药研发", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.61}, {"name": "工业大麻", "change_pct": 2.75}, {"name": "中药", "change_pct": 3.14}, {"name": "强势人气股", "change_pct": 2.88}, {"name": "保健品", "change_pct": 2.63}, {"name": "民营医院", "change_pct": 3.14}, {"name": "医药", "change_pct": 3.81}, {"name": "化学原料药", "change_pct": 3.73}, {"name": "流感", "change_pct": 3.81}, {"name": "振兴东北", "change_pct": 1.4}, {"name": "食品", "change_pct": 1.74}]}, {"code": "000981", "name": "山子高科", "hot_rank": 45, "hot_rank_chg": 18, "stock_cnt": 5859, "price": "2.95", "change": "-1.67", "market_id": "33", "circulate_market_value": "28064400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 0.05}, {"name": "无人驾驶", "change_pct": 1.04}, {"name": "汽车零部件", "change_pct": 1.72}, {"name": "新能源汽车", "change_pct": 0.87}, {"name": "新能源车零部件", "change_pct": 1.57}, {"name": "减速器", "change_pct": 1.58}, {"name": "华为汽车", "change_pct": 1.49}]}, {"code": "600522", "name": "中天科技", "hot_rank": 46, "hot_rank_chg": -15, "stock_cnt": 5859, "price": "36.93", "change": "2.64", "market_id": "17", "circulate_market_value": "126108490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 47, "hot_rank_chg": -1, "stock_cnt": 5859, "price": "22.93", "change": "7.10", "market_id": "17", "circulate_market_value": "50889758000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 48, "hot_rank_chg": -11, "stock_cnt": 5859, "price": "2.84", "change": "-1.73", "market_id": "33", "circulate_market_value": "5620386600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 0.7}, {"name": "深圳本地股", "change_pct": 0.94}, {"name": "共享经济", "change_pct": 0.93}, {"name": "养老产业", "change_pct": 2.51}, {"name": "住房租赁", "change_pct": 0.66}, {"name": "房产经纪", "change_pct": -0.11}, {"name": "第三代半导体", "change_pct": 0.15}, {"name": "物业管理", "change_pct": 1.25}, {"name": "低价股", "change_pct": 1.12}, {"name": "旧改", "change_pct": 1.28}, {"name": "横琴新区", "change_pct": 1.44}, {"name": "氮化镓", "change_pct": 0.35}, {"name": "REITs", "change_pct": 0.53}, {"name": "华为产业链", "change_pct": 1.26}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 49, "hot_rank_chg": -15, "stock_cnt": 5859, "price": "24.37", "change": "2.48", "market_id": "33", "circulate_market_value": "28670545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 50, "hot_rank_chg": -3, "stock_cnt": 5859, "price": "23.68", "change": "1.28", "market_id": "33", "circulate_market_value": "14093943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 51, "hot_rank_chg": -2, "stock_cnt": 5859, "price": "19.27", "change": "-3.12", "market_id": "33", "circulate_market_value": "11248689600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 52, "hot_rank_chg": 24, "stock_cnt": 5859, "price": "8.47", "change": "1.32", "market_id": "33", "circulate_market_value": "3964989600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.88}, {"name": "旅游", "change_pct": 2.2}, {"name": "腾讯概念股", "change_pct": 1.45}, {"name": "广西概念", "change_pct": 1.49}, {"name": "低空经济", "change_pct": 0.97}]}, {"code": "600367", "name": "红星发展", "hot_rank": 53, "hot_rank_chg": -21, "stock_cnt": 5859, "price": "38.25", "change": "0.66", "market_id": "17", "circulate_market_value": "12318693900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000756", "name": "新华制药", "hot_rank": 54, "hot_rank_chg": 42, "stock_cnt": 5859, "price": "14.67", "change": "9.97", "market_id": "33", "circulate_market_value": "7318465600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "药品注册"}, {"code": "001317", "name": "三羊马", "hot_rank": 55, "hot_rank_chg": 40, "stock_cnt": 5859, "price": "59.96", "change": "10.00", "market_id": "33", "circulate_market_value": "5126730900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "汽车物流"}, {"code": "600301", "name": "华锡有色", "hot_rank": 56, "hot_rank_chg": 142, "stock_cnt": 5859, "price": "49.97", "change": "9.99", "market_id": "17", "circulate_market_value": "13758524000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "控制权变更"}, {"code": "603122", "name": "合富中国", "hot_rank": 57, "hot_rank_chg": 18, "stock_cnt": 5859, "price": "14.04", "change": "2.93", "market_id": "17", "circulate_market_value": "5588659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600621", "name": "华鑫股份", "hot_rank": 58, "hot_rank_chg": 3, "stock_cnt": 5859, "price": "13.96", "change": "-0.99", "market_id": "17", "circulate_market_value": "14810154000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 59, "hot_rank_chg": -8, "stock_cnt": 5859, "price": "16.20", "change": "1.25", "market_id": "17", "circulate_market_value": "20805313000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 60, "hot_rank_chg": 13, "stock_cnt": 5859, "price": "943.46", "change": "1.84", "market_id": "33", "circulate_market_value": "1047225560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600606", "name": "绿地控股", "hot_rank": 61, "hot_rank_chg": 73, "stock_cnt": 5859, "price": "1.51", "change": "4.14", "market_id": "17", "circulate_market_value": "21221870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.56}, {"name": "蚂蚁集团概念股", "change_pct": 1.03}, {"name": "房地产", "change_pct": 0.71}, {"name": "旅游", "change_pct": 2.2}, {"name": "雄安新区", "change_pct": 0.96}, {"name": "破净股", "change_pct": 0.7}, {"name": "上海自由贸易港", "change_pct": 1.46}, {"name": "独角兽", "change_pct": 0.85}, {"name": "进口博览会", "change_pct": 2.68}, {"name": "自由贸易港", "change_pct": 1.25}, {"name": "物业管理", "change_pct": 1.25}, {"name": "元宇宙", "change_pct": 1.51}, {"name": "低价股", "change_pct": 1.12}, {"name": "自贸区", "change_pct": 0.95}]}, {"code": "600110", "name": "诺德股份", "hot_rank": 62, "hot_rank_chg": 2, "stock_cnt": 5859, "price": "12.23", "change": "-0.41", "market_id": "17", "circulate_market_value": "21221263000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.5}, {"name": "核电", "change_pct": 0.85}, {"name": "锂电池", "change_pct": 0.37}, {"name": "铜箔/覆铜板", "change_pct": 0.52}, {"name": "PCB板", "change_pct": 0.78}, {"name": "中科院系", "change_pct": 0.9}, {"name": "新能源汽车", "change_pct": 0.87}, {"name": "宁德时代概念股", "change_pct": 0.71}, {"name": "固态电池", "change_pct": 0.22}, {"name": "PET复合铜箔", "change_pct": 0.15}]}, {"code": "002300", "name": "太阳电缆", "hot_rank": 63, "hot_rank_chg": -3, "stock_cnt": 5859, "price": "8.55", "change": "-1.38", "market_id": "33", "circulate_market_value": "6168372100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": 0.85}, {"name": "充电桩", "change_pct": 0.66}, {"name": "福建自贸/海西概念", "change_pct": 1.11}, {"name": "军民融合", "change_pct": 1.28}, {"name": "光伏", "change_pct": 0.77}, {"name": "风电", "change_pct": 0.66}, {"name": "军工", "change_pct": 1.28}, {"name": "新能源汽车", "change_pct": 0.87}, {"name": "特高压", "change_pct": 0.58}, {"name": "自贸区", "change_pct": 0.95}, {"name": "海洋经济", "change_pct": 1.25}]}, {"code": "002156", "name": "通富微电", "hot_rank": 64, "hot_rank_chg": -14, "stock_cnt": 5859, "price": "61.12", "change": "-0.42", "market_id": "33", "circulate_market_value": "92761854000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 65, "hot_rank_chg": -10, "stock_cnt": 5859, "price": "13.15", "change": "10.04", "market_id": "17", "circulate_market_value": "5056801400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "CRO"}, {"code": "603138", "name": "海量数据", "hot_rank": 66, "hot_rank_chg": 25, "stock_cnt": 5859, "price": "15.69", "change": "0.77", "market_id": "17", "circulate_market_value": "4524099300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 67, "hot_rank_chg": -10, "stock_cnt": 5859, "price": "36.97", "change": "0.05", "market_id": "33", "circulate_market_value": "58582173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603626", "name": "科森科技", "hot_rank": 68, "hot_rank_chg": -30, "stock_cnt": 5859, "price": "23.23", "change": "-0.81", "market_id": "17", "circulate_market_value": "12889855200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 69, "hot_rank_chg": 50, "stock_cnt": 5859, "price": "111.99", "change": "-1.42", "market_id": "17", "circulate_market_value": "40393806000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 70, "hot_rank_chg": 8, "stock_cnt": 5859, "price": "166.55", "change": "4.09", "market_id": "17", "circulate_market_value": "411924820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600640", "name": "国脉文化", "hot_rank": 71, "hot_rank_chg": 33, "stock_cnt": 5859, "price": "12.25", "change": "1.58", "market_id": "17", "circulate_market_value": "9696503900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": 1.22}, {"name": "数字孪生", "change_pct": 1.71}, {"name": "央企改革", "change_pct": 0.63}, {"name": "人工智能", "change_pct": 1.45}, {"name": "游戏", "change_pct": 1.59}, {"name": "旅游", "change_pct": 2.2}, {"name": "动漫", "change_pct": 1.49}, {"name": "数字经济", "change_pct": 1.29}, {"name": "传媒", "change_pct": 1.62}, {"name": "全息概念", "change_pct": 1.8}, {"name": "NFT", "change_pct": 1.33}, {"name": "元宇宙", "change_pct": 1.51}, {"name": "虚拟数字人", "change_pct": 1.37}, {"name": "AIGC概念", "change_pct": 1.11}, {"name": "国企改革", "change_pct": 0.95}, {"name": "云游戏", "change_pct": 1.3}, {"name": "5G消息/RCS", "change_pct": 1.69}, {"name": "智能眼镜/MR头显", "change_pct": 0.99}, {"name": "AI大模型/智能体", "change_pct": 1.49}, {"name": "短剧/互动影游", "change_pct": 1.8}, {"name": "多模态", "change_pct": 1.12}, {"name": "AI视频", "change_pct": 1.03}, {"name": "智谱AI", "change_pct": 1.94}]}, {"code": "002487", "name": "大金重工", "hot_rank": 72, "hot_rank_chg": 11, "stock_cnt": 5859, "price": "39.55", "change": "-0.13", "market_id": "33", "circulate_market_value": "24921351000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 73, "hot_rank_chg": -38, "stock_cnt": 5859, "price": "108.23", "change": "0.40", "market_id": "33", "circulate_market_value": "108769598000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 74, "hot_rank_chg": -9, "stock_cnt": 5859, "price": "145.39", "change": "1.01", "market_id": "17", "circulate_market_value": "350644170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601123", "name": "马矿股份", "hot_rank": 75, "hot_rank_chg": 5, "stock_cnt": 5859, "price": "19.56", "change": "10.01", "market_id": "17", "circulate_market_value": "1874400700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "次新股"}, {"code": "002980", "name": "华盛昌", "hot_rank": 76, "hot_rank_chg": -50, "stock_cnt": 5859, "price": "119.00", "change": "-7.05", "market_id": "33", "circulate_market_value": "12058195800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 78, "hot_rank_chg": -26, "stock_cnt": 5859, "price": "13.94", "change": "2.12", "market_id": "17", "circulate_market_value": "20529533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 79, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "33.88", "change": "-0.21", "market_id": "33", "circulate_market_value": "96899262000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002589", "name": "瑞康医药", "hot_rank": 80, "hot_rank_chg": 9, "stock_cnt": 5859, "price": "3.60", "change": "10.09", "market_id": "33", "circulate_market_value": "4916129600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.14}, {"name": "体外诊断", "change_pct": 3.65}, {"name": "农业种植", "change_pct": 2.03}, {"name": "人工智能", "change_pct": 1.45}, {"name": "互联网医疗", "change_pct": 2.6}, {"name": "医药商业", "change_pct": 2.9}, {"name": "养老产业", "change_pct": 2.51}, {"name": "冷链", "change_pct": 1.26}, {"name": "医药", "change_pct": 3.81}, {"name": "大农业", "change_pct": 1.72}, {"name": "口腔", "change_pct": 2.74}, {"name": "医疗信息化", "change_pct": 2.09}, {"name": "新冠病毒防治", "change_pct": 2.46}, {"name": "华为产业链", "change_pct": 1.26}, {"name": "医疗耗材供应链SPD", "change_pct": 2.76}]}, {"code": "600460", "name": "士兰微", "hot_rank": 81, "hot_rank_chg": 7, "stock_cnt": 5859, "price": "33.30", "change": "1.62", "market_id": "17", "circulate_market_value": "55413592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 82, "hot_rank_chg": -26, "stock_cnt": 5859, "price": "230.30", "change": "1.55", "market_id": "17", "circulate_market_value": "36108856000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 83, "hot_rank_chg": -24, "stock_cnt": 5859, "price": "46.50", "change": "-1.90", "market_id": "17", "circulate_market_value": "6646018100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 84, "hot_rank_chg": -15, "stock_cnt": 5859, "price": "14.14", "change": "0.28", "market_id": "33", "circulate_market_value": "9340486500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 85, "hot_rank_chg": 12, "stock_cnt": 5859, "price": "5.81", "change": "10.04", "market_id": "33", "circulate_market_value": "4445467600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": 3.14}, {"name": "股权转让", "change_pct": 1.21}, {"name": "优化生育（三孩）", "change_pct": 2.29}, {"name": "强势人气股", "change_pct": 2.88}, {"name": "医药商业", "change_pct": 2.9}, {"name": "保健品", "change_pct": 2.63}, {"name": "民营医院", "change_pct": 3.14}, {"name": "医药", "change_pct": 3.81}, {"name": "食品", "change_pct": 1.74}, {"name": "辅助生殖", "change_pct": 4.03}, {"name": "口腔", "change_pct": 2.74}, {"name": "医美", "change_pct": 3.28}, {"name": "新冠病毒防治", "change_pct": 2.46}]}, {"code": "600371", "name": "万向德农", "hot_rank": 86, "hot_rank_chg": 15, "stock_cnt": 5859, "price": "16.18", "change": "5.07", "market_id": "17", "circulate_market_value": "4733912000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 87, "hot_rank_chg": -2, "stock_cnt": 5859, "price": "2.25", "change": "-1.75", "market_id": "33", "circulate_market_value": "11345593100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.88}, {"name": "新能源整车", "change_pct": 0.29}, {"name": "汽车整车", "change_pct": 0.22}, {"name": "新能源汽车", "change_pct": 0.87}, {"name": "低价股", "change_pct": 1.12}]}, {"code": "300502", "name": "新易盛", "hot_rank": 88, "hot_rank_chg": 67, "stock_cnt": 5859, "price": "461.22", "change": "3.65", "market_id": "33", "circulate_market_value": "578703690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 89, "hot_rank_chg": -19, "stock_cnt": 5859, "price": "37.76", "change": "-2.93", "market_id": "33", "circulate_market_value": "28599994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 90, "hot_rank_chg": 9, "stock_cnt": 5859, "price": "196.29", "change": "0.07", "market_id": "33", "circulate_market_value": "272121090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 91, "hot_rank_chg": -7, "stock_cnt": 5859, "price": "24.65", "change": "6.39", "market_id": "33", "circulate_market_value": "10613469900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600880", "name": "博瑞传播", "hot_rank": 92, "hot_rank_chg": 62, "stock_cnt": 5859, "price": "4.90", "change": "-3.54", "market_id": "17", "circulate_market_value": "5355847900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.61}, {"name": "手游", "change_pct": 1.39}, {"name": "人工智能", "change_pct": 1.45}, {"name": "游戏", "change_pct": 1.59}, {"name": "教育", "change_pct": 1.8}, {"name": "数字经济", "change_pct": 1.29}, {"name": "知识产权", "change_pct": 1.36}, {"name": "阿里巴巴概念股", "change_pct": 1.37}, {"name": "腾讯概念股", "change_pct": 1.45}, {"name": "传媒", "change_pct": 1.62}, {"name": "NFT", "change_pct": 1.33}, {"name": "虚拟数字人", "change_pct": 1.37}, {"name": "数据要素", "change_pct": 1.59}, {"name": "教育信息化", "change_pct": 1.22}, {"name": "AI营销", "change_pct": 1.24}, {"name": "华为产业链", "change_pct": 1.26}, {"name": "AI大模型/智能体", "change_pct": 1.49}, {"name": "AI视频", "change_pct": 1.03}, {"name": "IP经济/谷子经济", "change_pct": 1.94}, {"name": "小红书概念股", "change_pct": 1.19}, {"name": "区块链", "change_pct": 1.43}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 93, "hot_rank_chg": 9, "stock_cnt": 5859, "price": "462.88", "change": "1.73", "market_id": "17", "circulate_market_value": "188134640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 94, "hot_rank_chg": -20, "stock_cnt": 5859, "price": "40.74", "change": "2.08", "market_id": "17", "circulate_market_value": "28166643000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 95, "hot_rank_chg": -24, "stock_cnt": 5859, "price": "43.86", "change": "2.29", "market_id": "33", "circulate_market_value": "66591526000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 96, "hot_rank_chg": -15, "stock_cnt": 5859, "price": "12.57", "change": "-0.32", "market_id": "17", "circulate_market_value": "22489468000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.7}, {"name": "纯碱", "change_pct": 1.49}, {"name": "食品", "change_pct": 1.74}, {"name": "土壤修复", "change_pct": 1.14}, {"name": "东数西算/算力", "change_pct": 0.96}, {"name": "OpenClaw概念", "change_pct": 0.97}, {"name": "DeepSeek概念股", "change_pct": 1.39}]}, {"code": "001376", "name": "百通能源", "hot_rank": 97, "hot_rank_chg": 70, "stock_cnt": 5859, "price": "13.93", "change": "10.03", "market_id": "33", "circulate_market_value": "2994815100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "安哥拉电解铝"}, {"code": "600498", "name": "烽火通信", "hot_rank": 98, "hot_rank_chg": -26, "stock_cnt": 5859, "price": "44.82", "change": "1.89", "market_id": "17", "circulate_market_value": "57019506000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002264", "name": "新华都", "hot_rank": 99, "hot_rank_chg": 71, "stock_cnt": 5859, "price": "7.63", "change": "3.81", "market_id": "33", "circulate_market_value": "4966427100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.61}, {"name": "人工智能", "change_pct": 1.45}, {"name": "福建自贸/海西概念", "change_pct": 1.11}, {"name": "数字经济", "change_pct": 1.29}, {"name": "阿里巴巴概念股", "change_pct": 1.37}, {"name": "拼多多概念股", "change_pct": 2.4}, {"name": "传媒", "change_pct": 1.62}, {"name": "网红/MCN", "change_pct": 1.45}, {"name": "AI营销", "change_pct": 1.24}, {"name": "自贸区", "change_pct": 0.95}, {"name": "AI大模型/智能体", "change_pct": 1.49}, {"name": "微信小店", "change_pct": 2.12}, {"name": "小红书概念股", "change_pct": 1.19}]}, {"code": "603823", "name": "百合花", "hot_rank": 100, "hot_rank_chg": 20, "stock_cnt": 5859, "price": "56.05", "change": "1.17", "market_id": "17", "circulate_market_value": "23354065000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};