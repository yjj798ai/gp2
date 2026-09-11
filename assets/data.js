const UPDATE_TIME = "2026-09-11 10:29";
const THS_HOT = [
  {
    "name": "兵装重组概念",
    "rise": 3.23,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "MLCC概念",
    "rise": 1.77,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续30天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.27,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续290天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -0.52,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续113天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "铜缆高速连接",
    "rise": 1.02,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886073"
  },
  {
    "name": "光纤概念",
    "rise": -0.09,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续119天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "粮食概念",
    "rise": -3.4,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "创新药",
    "rise": -2.24,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续120天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -1.56,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续243天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "军工",
    "rise": -1.02,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "军工龙头ETF",
    "code": "885700"
  },
  {
    "name": "商业航天",
    "rise": -0.92,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续219天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "培育钻石",
    "rise": -1.53,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "液冷服务器",
    "rise": -1.71,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "AI应用",
    "rise": -1.99,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续48天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "ST板块",
    "rise": -0.71,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "农业种植",
    "rise": -3.03,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "算力租赁",
    "rise": -1.64,
    "rate": 0,
    "tag": "",
    "hotTag": "连续154天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "黄金概念",
    "rise": -3.89,
    "rate": 0,
    "tag": "",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "猪肉",
    "rise": -2.21,
    "rate": 0,
    "tag": "",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "绿色电力",
    "rise": -1.37,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电力ETF",
    "code": "885936"
  }
];
const THS_EVENTS = [
  {
    "title": "MLCC概念直线拉升涨停，龙头村田宣布停产多类料号",
    "desc": "",
    "heat": 257988,
    "direction": "MLCC",
    "themes": [
      "MLCC概念"
    ],
    "stocks": [
      {
        "name": "昀冢科技",
        "code": "688260",
        "chg": 18.682505
      }
    ]
  },
  {
    "title": "厄尔尼诺扰动下 农业产业链以创新筑牢稳产根基",
    "desc": "",
    "heat": 230662,
    "direction": "农业",
    "themes": [
      "渔业",
      "农业种植",
      "生态农业",
      "磷化工",
      "粮食概念",
      "代糖概念"
    ],
    "stocks": [
      {
        "name": "宏辉果蔬",
        "code": "603336",
        "chg": 10.032715
      }
    ]
  },
  {
    "title": "机构：维持对北美算力产业链和国产AI算力产业链的长期看好",
    "desc": "",
    "heat": 168456,
    "direction": "AI算力",
    "themes": [
      "东数西算(算力)",
      "数据中心(AIDC)",
      "阿里巴巴概念",
      "阿里系算力"
    ],
    "stocks": [
      {
        "name": "ST荣科",
        "code": "300290",
        "chg": 15.616438
      }
    ]
  },
  {
    "title": "中国空军多型现役主战机首次在国外航展公开展示",
    "desc": "",
    "heat": 152350,
    "direction": "军工",
    "themes": [
      "兵装重组概念",
      "军工装备",
      "军工",
      "军工信息化",
      "军工电子"
    ],
    "stocks": [
      {
        "name": "神宇股份",
        "code": "300563",
        "chg": 19.98281
      }
    ]
  },
  {
    "title": "工信部印发《“人工智能+软件”专项行动实施方案》",
    "desc": "",
    "heat": 110761,
    "direction": "AI应用",
    "themes": [
      "AI应用",
      "人工智能",
      "AI智能体",
      "多模态AI",
      "ChatGPT概念"
    ],
    "stocks": [
      {
        "name": "ST荣科",
        "code": "300290",
        "chg": 15.616438
      }
    ]
  },
  {
    "title": "第七批国家组织医用耗材集采开标，156家企业558个产品投标",
    "desc": "",
    "heat": 100893,
    "direction": "医用耗材",
    "themes": [
      "医疗器械概念",
      "医药医疗",
      "医疗服务",
      "医药商业"
    ],
    "stocks": [
      {
        "name": "神宇股份",
        "code": "300563",
        "chg": 19.98281
      }
    ]
  },
  {
    "title": "WTI原油再度破100，双航道风险与多重供给冲击重塑油市",
    "desc": "",
    "heat": 52311,
    "direction": "油气",
    "themes": [
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "海油发展",
        "code": "600968",
        "chg": -0.498753
      }
    ]
  },
  {
    "title": "金融强国建设“十五五”规划出台 四部门详解",
    "desc": "",
    "heat": 16461,
    "direction": "大金融",
    "themes": [
      "证券",
      "保险",
      "互联网金融",
      "银行"
    ],
    "stocks": [
      {
        "name": "闽东电力",
        "code": "000993",
        "chg": 9.984152
      }
    ]
  },
  {
    "title": "持续深化金融基础设施互联 着力推进跨境支付体系建设",
    "desc": "",
    "heat": 8406,
    "direction": "跨境支付（CIPS）",
    "themes": [
      "跨境支付(CIPS)"
    ],
    "stocks": [
      {
        "name": "天融信",
        "code": "002212",
        "chg": 2.748092
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "玻纤",
    "change": "+4.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+2.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "苹果期货",
    "change": "+2.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+1.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+1.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+1.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+0.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+0.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光纤概念",
    "change": "+0.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "6G",
    "change": "+0.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+0.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃",
    "change": "+0.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "毫米波通信",
    "change": "+0.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑色家电",
    "change": "+0.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超导概念",
    "change": "-0.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "-0.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5G",
    "change": "-0.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "军工信息化",
    "change": "-0.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "-0.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水电",
    "change": "-0.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 1,
    "hot_rank_chg": 1,
    "stock_cnt": 5779,
    "price": "8.13",
    "change": "-6.44",
    "market_id": "33",
    "circulate_market_value": "5330890000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.27
      },
      {
        "name": "新零售",
        "change_pct": -2.9
      },
      {
        "name": "农业种植",
        "change_pct": -2.98
      },
      {
        "name": "冷链",
        "change_pct": -1.82
      },
      {
        "name": "大农业",
        "change_pct": -2.97
      },
      {
        "name": "预制菜",
        "change_pct": -3.55
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      },
      {
        "name": "可降解塑料",
        "change_pct": -2.81
      },
      {
        "name": "免税店概念",
        "change_pct": -3.28
      },
      {
        "name": "湖北国企改革",
        "change_pct": -2.32
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 6,
    "hot_rank_chg": 4,
    "stock_cnt": 5779,
    "price": "9.87",
    "change": "1.86",
    "market_id": "33",
    "circulate_market_value": "4620359800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "旅游",
        "change_pct": -3.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.8
      },
      {
        "name": "广西概念",
        "change_pct": -2.05
      },
      {
        "name": "低空经济",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 11,
    "hot_rank_chg": 9,
    "stock_cnt": 5779,
    "price": "7.06",
    "change": "0.86",
    "market_id": "17",
    "circulate_market_value": "14339737000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.49
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.62
      },
      {
        "name": "火电",
        "change_pct": -0.96
      },
      {
        "name": "风电",
        "change_pct": -0.64
      },
      {
        "name": "储能",
        "change_pct": -1.52
      },
      {
        "name": "碳中和",
        "change_pct": -1.7
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 17,
    "hot_rank_chg": 0,
    "stock_cnt": 5779,
    "price": "10.97",
    "change": "-4.19",
    "market_id": "17",
    "circulate_market_value": "5789988800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -2.98
      },
      {
        "name": "强势人气股",
        "change_pct": -2.11
      },
      {
        "name": "棉花",
        "change_pct": -3.55
      },
      {
        "name": "大农业",
        "change_pct": -2.97
      },
      {
        "name": "供销社",
        "change_pct": -2.53
      }
    ]
  },
  {
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 22,
    "hot_rank_chg": -14,
    "stock_cnt": 5779,
    "price": "4.73",
    "change": "-9.90",
    "market_id": "17",
    "circulate_market_value": "9208908500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.27
      },
      {
        "name": "农业种植",
        "change_pct": -2.98
      },
      {
        "name": "强势人气股",
        "change_pct": -2.11
      },
      {
        "name": "土地流转",
        "change_pct": -3.37
      },
      {
        "name": "农垦",
        "change_pct": -3.76
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.78
      },
      {
        "name": "食品",
        "change_pct": -2.9
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": -4.64
      },
      {
        "name": "大农业",
        "change_pct": -2.97
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -2.89
      }
    ]
  },
  {
    "code": "600359",
    "name": "新农开发",
    "hot_rank": 24,
    "hot_rank_chg": 29,
    "stock_cnt": 5779,
    "price": "9.72",
    "change": "0.83",
    "market_id": "17",
    "circulate_market_value": "3708304600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -2.98
      },
      {
        "name": "新疆国企改革",
        "change_pct": -3.58
      },
      {
        "name": "农垦",
        "change_pct": -3.76
      },
      {
        "name": "棉花",
        "change_pct": -3.55
      },
      {
        "name": "新疆概念",
        "change_pct": -2.94
      },
      {
        "name": "大农业",
        "change_pct": -2.97
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.04
      }
    ]
  },
  {
    "code": "600792",
    "name": "云煤能源",
    "hot_rank": 26,
    "hot_rank_chg": 4,
    "stock_cnt": 5779,
    "price": "5.15",
    "change": "-4.81",
    "market_id": "17",
    "circulate_market_value": "5716106500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -2.59
      },
      {
        "name": "甲醇",
        "change_pct": -3.8
      },
      {
        "name": "煤化工",
        "change_pct": -3.72
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 30,
    "hot_rank_chg": -17,
    "stock_cnt": 5779,
    "price": "7.75",
    "change": "-6.29",
    "market_id": "33",
    "circulate_market_value": "14841966000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.55
      },
      {
        "name": "林业",
        "change_pct": -2.97
      },
      {
        "name": "碳中和",
        "change_pct": -1.7
      },
      {
        "name": "自贸区",
        "change_pct": -2.45
      }
    ]
  },
  {
    "code": "000523",
    "name": "红棉股份",
    "hot_rank": 37,
    "hot_rank_chg": -23,
    "stock_cnt": 5779,
    "price": "4.01",
    "change": "-10.09",
    "market_id": "33",
    "circulate_market_value": "7197220400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "啤酒",
        "change_pct": -1.82
      },
      {
        "name": "调味品",
        "change_pct": -3.02
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -2.18
      },
      {
        "name": "白糖",
        "change_pct": -7.33
      },
      {
        "name": "食品",
        "change_pct": -2.9
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": -4.64
      },
      {
        "name": "物业管理",
        "change_pct": -2.82
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      },
      {
        "name": "饮料",
        "change_pct": -2.87
      }
    ]
  },
  {
    "code": "002194",
    "name": "武汉凡谷",
    "hot_rank": 40,
    "hot_rank_chg": 204,
    "stock_cnt": 5779,
    "price": "11.46",
    "change": "5.53",
    "market_id": "33",
    "circulate_market_value": "5897856300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -0.99
      },
      {
        "name": "5G",
        "change_pct": -0.06
      },
      {
        "name": "光通信",
        "change_pct": -0.11
      },
      {
        "name": "教育",
        "change_pct": -1.77
      },
      {
        "name": "毫米波通信",
        "change_pct": 0.31
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.36
      },
      {
        "name": "华为产业链",
        "change_pct": -1.36
      },
      {
        "name": "毫米波雷达",
        "change_pct": -0.35
      },
      {
        "name": "5.5G概念",
        "change_pct": 0.57
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 41,
    "hot_rank_chg": 20,
    "stock_cnt": 5779,
    "price": "11.98",
    "change": "1.61",
    "market_id": "17",
    "circulate_market_value": "21433877000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -3.02
      },
      {
        "name": "纯碱",
        "change_pct": -3.31
      },
      {
        "name": "食品",
        "change_pct": -2.9
      },
      {
        "name": "土壤修复",
        "change_pct": -2.13
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.3
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.82
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.58
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 43,
    "hot_rank_chg": -16,
    "stock_cnt": 5779,
    "price": "5.68",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "5625433600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.49
      },
      {
        "name": "旅游",
        "change_pct": -3.25
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.6
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      }
    ]
  },
  {
    "code": "600712",
    "name": "南宁百货",
    "hot_rank": 45,
    "hot_rank_chg": 58,
    "stock_cnt": 5779,
    "price": "6.70",
    "change": "-1.90",
    "market_id": "17",
    "circulate_market_value": "3608944100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.27
      },
      {
        "name": "新零售",
        "change_pct": -2.9
      },
      {
        "name": "职业教育",
        "change_pct": -1.78
      },
      {
        "name": "免税店概念",
        "change_pct": -3.28
      },
      {
        "name": "地摊经济",
        "change_pct": -3.13
      },
      {
        "name": "广西概念",
        "change_pct": -2.05
      }
    ]
  },
  {
    "code": "603601",
    "name": "再升科技",
    "hot_rank": 47,
    "hot_rank_chg": -21,
    "stock_cnt": 5779,
    "price": "10.79",
    "change": "8.33",
    "market_id": "17",
    "circulate_market_value": "12325859100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -0.83
      },
      {
        "name": "核电",
        "change_pct": -1.35
      },
      {
        "name": "大飞机",
        "change_pct": -0.67
      },
      {
        "name": "大气治理",
        "change_pct": -1.55
      },
      {
        "name": "玻纤",
        "change_pct": 4.51
      },
      {
        "name": "环保",
        "change_pct": -1.88
      },
      {
        "name": "核污染防治",
        "change_pct": -1.07
      },
      {
        "name": "航天",
        "change_pct": -0.96
      },
      {
        "name": "生物安全",
        "change_pct": -0.9
      },
      {
        "name": "中芯国际概念股",
        "change_pct": -1.99
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 48,
    "hot_rank_chg": 527,
    "stock_cnt": 5779,
    "price": "9.96",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "8830454200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "MLCC离型膜",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 2.88
      },
      {
        "name": "手机产业链",
        "change_pct": -0.99
      },
      {
        "name": "超高清视频",
        "change_pct": -0.93
      },
      {
        "name": "锂电池",
        "change_pct": -2.11
      },
      {
        "name": "强势人气股",
        "change_pct": -2.11
      },
      {
        "name": "OLED",
        "change_pct": -1.44
      },
      {
        "name": "包装印刷",
        "change_pct": -2.15
      },
      {
        "name": "光伏",
        "change_pct": -1.46
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.92
      },
      {
        "name": "小米概念股",
        "change_pct": -1.21
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.32
      },
      {
        "name": "可降解塑料",
        "change_pct": -2.81
      },
      {
        "name": "华为产业链",
        "change_pct": -1.36
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 52,
    "hot_rank_chg": 116,
    "stock_cnt": 5779,
    "price": "7.06",
    "change": "-2.08",
    "market_id": "33",
    "circulate_market_value": "6256928000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -2.98
      },
      {
        "name": "土地流转",
        "change_pct": -3.37
      },
      {
        "name": "海南概念",
        "change_pct": -3.19
      },
      {
        "name": "自由贸易港",
        "change_pct": -2.57
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -3.24
      },
      {
        "name": "大农业",
        "change_pct": -2.97
      },
      {
        "name": "水产养殖",
        "change_pct": -4.02
      },
      {
        "name": "自贸区",
        "change_pct": -2.45
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 54,
    "hot_rank_chg": 47,
    "stock_cnt": 5779,
    "price": "2.12",
    "change": "9.85",
    "market_id": "33",
    "circulate_market_value": "10690070000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "A0车型",
    "xgb_concepts": [
      {
        "name": "新能源整车",
        "change_pct": -1.1
      },
      {
        "name": "汽车整车",
        "change_pct": -1.0
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.92
      },
      {
        "name": "低价股",
        "change_pct": -1.82
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 55,
    "hot_rank_chg": -27,
    "stock_cnt": 5779,
    "price": "5.78",
    "change": "-3.99",
    "market_id": "17",
    "circulate_market_value": "71649395000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.49
      },
      {
        "name": "核电",
        "change_pct": -1.35
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.62
      },
      {
        "name": "水电",
        "change_pct": -0.13
      },
      {
        "name": "火电",
        "change_pct": -0.96
      },
      {
        "name": "光伏",
        "change_pct": -1.46
      },
      {
        "name": "风电",
        "change_pct": -0.64
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      },
      {
        "name": "算电协同",
        "change_pct": -1.46
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 57,
    "hot_rank_chg": 3,
    "stock_cnt": 5779,
    "price": "5.33",
    "change": "-2.38",
    "market_id": "33",
    "circulate_market_value": "188506820000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.31
      },
      {
        "name": "手机产业链",
        "change_pct": -0.99
      },
      {
        "name": "超高清视频",
        "change_pct": -0.93
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.79
      },
      {
        "name": "电竞",
        "change_pct": -1.52
      },
      {
        "name": "半导体",
        "change_pct": -1.8
      },
      {
        "name": "人工智能",
        "change_pct": -1.74
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.69
      },
      {
        "name": "VR&AR",
        "change_pct": -1.21
      },
      {
        "name": "OLED",
        "change_pct": -1.44
      },
      {
        "name": "京津冀",
        "change_pct": -2.05
      },
      {
        "name": "物联网",
        "change_pct": -1.5
      },
      {
        "name": "指纹识别",
        "change_pct": -1.27
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.98
      },
      {
        "name": "白马股",
        "change_pct": -0.92
      },
      {
        "name": "智能制造",
        "change_pct": -1.82
      },
      {
        "name": "小米概念股",
        "change_pct": -1.21
      },
      {
        "name": "国产芯片",
        "change_pct": -1.57
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.32
      },
      {
        "name": "全息概念",
        "change_pct": -1.54
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.22
      },
      {
        "name": "MicroLED",
        "change_pct": -1.75
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.01
      },
      {
        "name": "智能手表",
        "change_pct": -1.76
      },
      {
        "name": "MiniLED",
        "change_pct": -1.09
      },
      {
        "name": "传感器",
        "change_pct": -1.86
      },
      {
        "name": "大硅片",
        "change_pct": -1.78
      },
      {
        "name": "AI PC",
        "change_pct": -0.68
      },
      {
        "name": "华为产业链",
        "change_pct": -1.36
      },
      {
        "name": "回购",
        "change_pct": -1.89
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -0.98
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.53
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.87
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 59,
    "hot_rank_chg": -30,
    "stock_cnt": 5779,
    "price": "6.99",
    "change": "-1.96",
    "market_id": "17",
    "circulate_market_value": "17604384000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.27
      },
      {
        "name": "工业大麻",
        "change_pct": -1.47
      },
      {
        "name": "中药",
        "change_pct": -2.09
      },
      {
        "name": "强势人气股",
        "change_pct": -2.11
      },
      {
        "name": "保健品",
        "change_pct": -2.09
      },
      {
        "name": "民营医院",
        "change_pct": -2.4
      },
      {
        "name": "医药",
        "change_pct": -2.39
      },
      {
        "name": "化学原料药",
        "change_pct": -2.38
      },
      {
        "name": "流感",
        "change_pct": -2.37
      },
      {
        "name": "振兴东北",
        "change_pct": -2.21
      },
      {
        "name": "食品",
        "change_pct": -2.9
      }
    ]
  },
  {
    "code": "000930",
    "name": "中粮科技",
    "hot_rank": 60,
    "hot_rank_chg": -22,
    "stock_cnt": 5779,
    "price": "5.88",
    "change": "-9.54",
    "market_id": "33",
    "circulate_market_value": "10915061400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.49
      },
      {
        "name": "饲料",
        "change_pct": -2.92
      },
      {
        "name": "白酒",
        "change_pct": -2.35
      },
      {
        "name": "燃料乙醇",
        "change_pct": -6.96
      },
      {
        "name": "食品",
        "change_pct": -2.9
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": -4.64
      },
      {
        "name": "大农业",
        "change_pct": -2.97
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      },
      {
        "name": "可降解塑料",
        "change_pct": -2.81
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.04
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -2.89
      }
    ]
  },
  {
    "code": "603318",
    "name": "水发燃气",
    "hot_rank": 64,
    "hot_rank_chg": -5,
    "stock_cnt": 5779,
    "price": "9.92",
    "change": "-4.16",
    "market_id": "17",
    "circulate_market_value": "4553983600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": -1.58
      },
      {
        "name": "电子特气",
        "change_pct": -2.22
      },
      {
        "name": "一带一路",
        "change_pct": -1.9
      },
      {
        "name": "天然气",
        "change_pct": -2.24
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.65
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      },
      {
        "name": "氦气",
        "change_pct": -2.31
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 65,
    "hot_rank_chg": -25,
    "stock_cnt": 5779,
    "price": "5.11",
    "change": "-8.42",
    "market_id": "17",
    "circulate_market_value": "6226085500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -2.34
      },
      {
        "name": "煤炭",
        "change_pct": -2.59
      },
      {
        "name": "有色金属",
        "change_pct": -2.78
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      },
      {
        "name": "河南国企改革",
        "change_pct": -1.53
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 66,
    "hot_rank_chg": 67,
    "stock_cnt": 5779,
    "price": "9.93",
    "change": "-7.71",
    "market_id": "17",
    "circulate_market_value": "8628701100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.27
      },
      {
        "name": "快递物流",
        "change_pct": -2.17
      },
      {
        "name": "新零售",
        "change_pct": -2.9
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.55
      },
      {
        "name": "旅游",
        "change_pct": -3.25
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.57
      },
      {
        "name": "物业管理",
        "change_pct": -2.82
      },
      {
        "name": "免税店概念",
        "change_pct": -3.28
      },
      {
        "name": "自贸区",
        "change_pct": -2.45
      }
    ]
  },
  {
    "code": "002068",
    "name": "黑猫股份",
    "hot_rank": 77,
    "hot_rank_chg": -44,
    "stock_cnt": 5779,
    "price": "9.68",
    "change": "-6.02",
    "market_id": "33",
    "circulate_market_value": "7114856300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -2.11
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.92
      },
      {
        "name": "炭黑",
        "change_pct": -3.5
      },
      {
        "name": "固态电池",
        "change_pct": -2.07
      },
      {
        "name": "PVDF概念",
        "change_pct": -2.56
      },
      {
        "name": "碳基材料",
        "change_pct": -2.16
      },
      {
        "name": "超级电容",
        "change_pct": -0.74
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 86,
    "hot_rank_chg": -20,
    "stock_cnt": 5779,
    "price": "10.91",
    "change": "-4.30",
    "market_id": "17",
    "circulate_market_value": "4195414700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -2.39
      },
      {
        "name": "股权转让",
        "change_pct": -1.77
      },
      {
        "name": "强势人气股",
        "change_pct": -2.11
      },
      {
        "name": "新疆概念",
        "change_pct": -2.94
      },
      {
        "name": "医药",
        "change_pct": -2.39
      },
      {
        "name": "流感",
        "change_pct": -2.37
      },
      {
        "name": "国资入股",
        "change_pct": -2.07
      },
      {
        "name": "减肥药",
        "change_pct": -2.13
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 87,
    "hot_rank_chg": 47,
    "stock_cnt": 5779,
    "price": "7.48",
    "change": "-1.84",
    "market_id": "33",
    "circulate_market_value": "12169913500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.27
      },
      {
        "name": "电竞",
        "change_pct": -1.52
      },
      {
        "name": "手游",
        "change_pct": -1.62
      },
      {
        "name": "强势人气股",
        "change_pct": -2.11
      },
      {
        "name": "人工智能",
        "change_pct": -1.74
      },
      {
        "name": "游戏",
        "change_pct": -1.65
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.59
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.8
      },
      {
        "name": "快手概念股",
        "change_pct": -1.73
      },
      {
        "name": "元宇宙",
        "change_pct": -1.48
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.6
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.3
      },
      {
        "name": "web3.0",
        "change_pct": -1.78
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.45
      },
      {
        "name": "数据要素",
        "change_pct": -1.56
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.56
      },
      {
        "name": "AI营销",
        "change_pct": -1.46
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.55
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.53
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.83
      },
      {
        "name": "人形机器人",
        "change_pct": -1.99
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.81
      },
      {
        "name": "多模态",
        "change_pct": -1.76
      },
      {
        "name": "AI视频",
        "change_pct": -1.26
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.48
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.47
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 88,
    "hot_rank_chg": -25,
    "stock_cnt": 5779,
    "price": "11.45",
    "change": "-8.03",
    "market_id": "33",
    "circulate_market_value": "10686532400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.11
      },
      {
        "name": "新疆国企改革",
        "change_pct": -3.58
      },
      {
        "name": "新疆概念",
        "change_pct": -2.94
      },
      {
        "name": "光伏",
        "change_pct": -1.46
      },
      {
        "name": "风电",
        "change_pct": -0.64
      },
      {
        "name": "储能",
        "change_pct": -1.52
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 89,
    "hot_rank_chg": -35,
    "stock_cnt": 5779,
    "price": "6.78",
    "change": "-7.63",
    "market_id": "17",
    "circulate_market_value": "29014520000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -2.98
      },
      {
        "name": "橡胶",
        "change_pct": -2.0
      },
      {
        "name": "土地流转",
        "change_pct": -3.37
      },
      {
        "name": "农垦",
        "change_pct": -3.76
      },
      {
        "name": "海南概念",
        "change_pct": -3.19
      },
      {
        "name": "自由贸易港",
        "change_pct": -2.57
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -3.24
      },
      {
        "name": "大农业",
        "change_pct": -2.97
      },
      {
        "name": "可降解塑料",
        "change_pct": -2.81
      },
      {
        "name": "大消费",
        "change_pct": -1.77
      },
      {
        "name": "免税店概念",
        "change_pct": -3.28
      },
      {
        "name": "自贸区",
        "change_pct": -2.45
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 95,
    "hot_rank_chg": -13,
    "stock_cnt": 5779,
    "price": "4.79",
    "change": "-4.58",
    "market_id": "33",
    "circulate_market_value": "12705717200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.11
      },
      {
        "name": "装修装饰",
        "change_pct": -2.29
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.34
      },
      {
        "name": "破净股",
        "change_pct": -2.02
      },
      {
        "name": "航天",
        "change_pct": -0.96
      },
      {
        "name": "旧改",
        "change_pct": -2.58
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 97,
    "hot_rank_chg": 74,
    "stock_cnt": 5779,
    "price": "10.18",
    "change": "-4.32",
    "market_id": "33",
    "circulate_market_value": "5937083800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -2.59
      },
      {
        "name": "一带一路",
        "change_pct": -1.9
      },
      {
        "name": "天然气",
        "change_pct": -2.24
      },
      {
        "name": "油气改革",
        "change_pct": -2.52
      },
      {
        "name": "页岩气",
        "change_pct": -2.18
      },
      {
        "name": "深地经济",
        "change_pct": -2.18
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 98,
    "hot_rank_chg": 88,
    "stock_cnt": 5779,
    "price": "7.35",
    "change": "-3.42",
    "market_id": "17",
    "circulate_market_value": "7954160200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.49
      },
      {
        "name": "农业种植",
        "change_pct": -2.98
      },
      {
        "name": "化肥",
        "change_pct": -4.14
      },
      {
        "name": "转基因",
        "change_pct": -1.12
      },
      {
        "name": "土地流转",
        "change_pct": -3.37
      },
      {
        "name": "农垦",
        "change_pct": -3.76
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.78
      },
      {
        "name": "大农业",
        "change_pct": -2.97
      },
      {
        "name": "国企改革",
        "change_pct": -1.82
      },
      {
        "name": "大豆",
        "change_pct": -2.28
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 99,
    "hot_rank_chg": 73,
    "stock_cnt": 5779,
    "price": "7.00",
    "change": "2.34",
    "market_id": "33",
    "circulate_market_value": "23287572000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.2
      },
      {
        "name": "核电",
        "change_pct": -1.35
      },
      {
        "name": "5G",
        "change_pct": -0.06
      },
      {
        "name": "一带一路",
        "change_pct": -1.9
      },
      {
        "name": "充电桩",
        "change_pct": -1.12
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.83
      },
      {
        "name": "风电",
        "change_pct": -0.64
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.92
      },
      {
        "name": "储能",
        "change_pct": -1.52
      },
      {
        "name": "特高压",
        "change_pct": -0.9
      },
      {
        "name": "智能电网",
        "change_pct": -1.03
      },
      {
        "name": "海洋经济",
        "change_pct": -1.71
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000759", "name": "中百集团", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5779, "price": "8.13", "change": "-6.44", "market_id": "33", "circulate_market_value": "5330890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.27}, {"name": "新零售", "change_pct": -2.9}, {"name": "农业种植", "change_pct": -2.98}, {"name": "冷链", "change_pct": -1.82}, {"name": "大农业", "change_pct": -2.97}, {"name": "预制菜", "change_pct": -3.55}, {"name": "国企改革", "change_pct": -1.82}, {"name": "可降解塑料", "change_pct": -2.81}, {"name": "免税店概念", "change_pct": -3.28}, {"name": "湖北国企改革", "change_pct": -2.32}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 2, "hot_rank_chg": 5, "stock_cnt": 5779, "price": "16.35", "change": "8.21", "market_id": "17", "circulate_market_value": "10889100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5779, "price": "13.55", "change": "-3.21", "market_id": "17", "circulate_market_value": "8696162600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 4, "hot_rank_chg": -3, "stock_cnt": 5779, "price": "25.35", "change": "5.19", "market_id": "17", "circulate_market_value": "56260592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 5, "hot_rank_chg": 20, "stock_cnt": 5779, "price": "55.99", "change": "10.00", "market_id": "33", "circulate_market_value": "64247963000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC"}, {"code": "000978", "name": "桂林旅游", "hot_rank": 6, "hot_rank_chg": 4, "stock_cnt": 5779, "price": "9.87", "change": "1.86", "market_id": "33", "circulate_market_value": "4620359800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "旅游", "change_pct": -3.25}, {"name": "腾讯概念股", "change_pct": -1.8}, {"name": "广西概念", "change_pct": -2.05}, {"name": "低空经济", "change_pct": -1.12}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 7, "hot_rank_chg": 43, "stock_cnt": 5779, "price": "926.00", "change": "4.03", "market_id": "33", "circulate_market_value": "1027801660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5779, "price": "14.60", "change": "-5.87", "market_id": "17", "circulate_market_value": "21501520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 9, "hot_rank_chg": 12, "stock_cnt": 5779, "price": "40.71", "change": "3.59", "market_id": "17", "circulate_market_value": "28145901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 10, "hot_rank_chg": -7, "stock_cnt": 5779, "price": "19.50", "change": "-2.40", "market_id": "17", "circulate_market_value": "40785072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 11, "hot_rank_chg": 9, "stock_cnt": 5779, "price": "7.06", "change": "0.86", "market_id": "17", "circulate_market_value": "14339737000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.49}, {"name": "电力体制改革", "change_pct": -0.62}, {"name": "火电", "change_pct": -0.96}, {"name": "风电", "change_pct": -0.64}, {"name": "储能", "change_pct": -1.52}, {"name": "碳中和", "change_pct": -1.7}, {"name": "国企改革", "change_pct": -1.82}]}, {"code": "600371", "name": "万向德农", "hot_rank": 12, "hot_rank_chg": 77, "stock_cnt": 5779, "price": "14.78", "change": "4.45", "market_id": "17", "circulate_market_value": "4324302800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 13, "hot_rank_chg": 85, "stock_cnt": 5779, "price": "42.20", "change": "4.51", "market_id": "17", "circulate_market_value": "61696181000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 14, "hot_rank_chg": 61, "stock_cnt": 5779, "price": "15.42", "change": "9.99", "market_id": "17", "circulate_market_value": "16907948000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "Kimi合作"}, {"code": "000993", "name": "闽东电力", "hot_rank": 15, "hot_rank_chg": 7, "stock_cnt": 5779, "price": "13.88", "change": "9.98", "market_id": "33", "circulate_market_value": "6356366200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "清洁能源"}, {"code": "600487", "name": "亨通光电", "hot_rank": 16, "hot_rank_chg": 8, "stock_cnt": 5779, "price": "65.24", "change": "2.08", "market_id": "17", "circulate_market_value": "160075880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5779, "price": "10.97", "change": "-4.19", "market_id": "17", "circulate_market_value": "5789988800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -2.98}, {"name": "强势人气股", "change_pct": -2.11}, {"name": "棉花", "change_pct": -3.55}, {"name": "大农业", "change_pct": -2.97}, {"name": "供销社", "change_pct": -2.53}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 18, "hot_rank_chg": -6, "stock_cnt": 5779, "price": "15.03", "change": "-2.15", "market_id": "17", "circulate_market_value": "19302707000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 19, "hot_rank_chg": -10, "stock_cnt": 5779, "price": "477.12", "change": "-4.30", "market_id": "17", "circulate_market_value": "14355453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 20, "hot_rank_chg": 63, "stock_cnt": 5779, "price": "473.99", "change": "8.78", "market_id": "17", "circulate_market_value": "192600300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 21, "hot_rank_chg": 23, "stock_cnt": 5779, "price": "194.42", "change": "0.35", "market_id": "33", "circulate_market_value": "269528670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600108", "name": "亚盛集团", "hot_rank": 22, "hot_rank_chg": -14, "stock_cnt": 5779, "price": "4.73", "change": "-9.90", "market_id": "17", "circulate_market_value": "9208908500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.27}, {"name": "农业种植", "change_pct": -2.98}, {"name": "强势人气股", "change_pct": -2.11}, {"name": "土地流转", "change_pct": -3.37}, {"name": "农垦", "change_pct": -3.76}, {"name": "乡村振兴", "change_pct": -2.78}, {"name": "食品", "change_pct": -2.9}, {"name": "甜味剂/代糖", "change_pct": -4.64}, {"name": "大农业", "change_pct": -2.97}, {"name": "蜜雪冰城概念股", "change_pct": -2.89}]}, {"code": "600865", "name": "百大集团", "hot_rank": 23, "hot_rank_chg": -5, "stock_cnt": 5779, "price": "13.19", "change": "-9.97", "market_id": "17", "circulate_market_value": "4962609800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600359", "name": "新农开发", "hot_rank": 24, "hot_rank_chg": 29, "stock_cnt": 5779, "price": "9.72", "change": "0.83", "market_id": "17", "circulate_market_value": "3708304600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -2.98}, {"name": "新疆国企改革", "change_pct": -3.58}, {"name": "农垦", "change_pct": -3.76}, {"name": "棉花", "change_pct": -3.55}, {"name": "新疆概念", "change_pct": -2.94}, {"name": "大农业", "change_pct": -2.97}, {"name": "国企改革", "change_pct": -1.82}, {"name": "新冠病毒防治", "change_pct": -2.04}]}, {"code": "002297", "name": "博云新材", "hot_rank": 25, "hot_rank_chg": 18, "stock_cnt": 5779, "price": "23.53", "change": "7.44", "market_id": "33", "circulate_market_value": "13485156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600792", "name": "云煤能源", "hot_rank": 26, "hot_rank_chg": 4, "stock_cnt": 5779, "price": "5.15", "change": "-4.81", "market_id": "17", "circulate_market_value": "5716106500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -2.59}, {"name": "甲醇", "change_pct": -3.8}, {"name": "煤化工", "change_pct": -3.72}]}, {"code": "688801", "name": "燧原科技", "hot_rank": 27, "hot_rank_chg": 674, "stock_cnt": 5779, "price": "397.00", "change": "179.22", "market_id": "17", "circulate_market_value": "7106429000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 28, "hot_rank_chg": -12, "stock_cnt": 5779, "price": "16.98", "change": "-7.26", "market_id": "17", "circulate_market_value": "11551828100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600737", "name": "中粮糖业", "hot_rank": 29, "hot_rank_chg": -18, "stock_cnt": 5779, "price": "16.21", "change": "-9.04", "market_id": "17", "circulate_market_value": "34670730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 30, "hot_rank_chg": -17, "stock_cnt": 5779, "price": "7.75", "change": "-6.29", "market_id": "33", "circulate_market_value": "14841966000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -2.55}, {"name": "林业", "change_pct": -2.97}, {"name": "碳中和", "change_pct": -1.7}, {"name": "自贸区", "change_pct": -2.45}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 31, "hot_rank_chg": -25, "stock_cnt": 5779, "price": "82.46", "change": "7.86", "market_id": "33", "circulate_market_value": "59803007000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000070", "name": "特发信息", "hot_rank": 32, "hot_rank_chg": 299, "stock_cnt": 5779, "price": "17.16", "change": "6.06", "market_id": "33", "circulate_market_value": "14701264000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 33, "hot_rank_chg": 22, "stock_cnt": 5779, "price": "21.19", "change": "0.81", "market_id": "33", "circulate_market_value": "24929374000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 34, "hot_rank_chg": -15, "stock_cnt": 5779, "price": "20.57", "change": "10.00", "market_id": "33", "circulate_market_value": "12237754700.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "PCB"}, {"code": "603466", "name": "风语筑", "hot_rank": 35, "hot_rank_chg": 193, "stock_cnt": 5779, "price": "13.27", "change": "10.03", "market_id": "17", "circulate_market_value": "7893374100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI视频"}, {"code": "600522", "name": "中天科技", "hot_rank": 36, "hot_rank_chg": 70, "stock_cnt": 5779, "price": "34.49", "change": "3.57", "market_id": "17", "circulate_market_value": "117712633000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000523", "name": "红棉股份", "hot_rank": 37, "hot_rank_chg": -23, "stock_cnt": 5779, "price": "4.01", "change": "-10.09", "market_id": "33", "circulate_market_value": "7197220400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "啤酒", "change_pct": -1.82}, {"name": "调味品", "change_pct": -3.02}, {"name": "粤港澳大湾区", "change_pct": -2.18}, {"name": "白糖", "change_pct": -7.33}, {"name": "食品", "change_pct": -2.9}, {"name": "甜味剂/代糖", "change_pct": -4.64}, {"name": "物业管理", "change_pct": -2.82}, {"name": "国企改革", "change_pct": -1.82}, {"name": "饮料", "change_pct": -2.87}]}, {"code": "002600", "name": "领益智造", "hot_rank": 38, "hot_rank_chg": 11, "stock_cnt": 5779, "price": "13.10", "change": "2.02", "market_id": "33", "circulate_market_value": "94320009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 39, "hot_rank_chg": -16, "stock_cnt": 5779, "price": "44.66", "change": "2.76", "market_id": "17", "circulate_market_value": "177371080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002194", "name": "武汉凡谷", "hot_rank": 40, "hot_rank_chg": 204, "stock_cnt": 5779, "price": "11.46", "change": "5.53", "market_id": "33", "circulate_market_value": "5897856300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手机产业链", "change_pct": -0.99}, {"name": "5G", "change_pct": -0.06}, {"name": "光通信", "change_pct": -0.11}, {"name": "教育", "change_pct": -1.77}, {"name": "毫米波通信", "change_pct": 0.31}, {"name": "卫星互联网", "change_pct": -0.36}, {"name": "华为产业链", "change_pct": -1.36}, {"name": "毫米波雷达", "change_pct": -0.35}, {"name": "5.5G概念", "change_pct": 0.57}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 41, "hot_rank_chg": 20, "stock_cnt": 5779, "price": "11.98", "change": "1.61", "market_id": "17", "circulate_market_value": "21433877000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -3.02}, {"name": "纯碱", "change_pct": -3.31}, {"name": "食品", "change_pct": -2.9}, {"name": "土壤修复", "change_pct": -2.13}, {"name": "东数西算/算力", "change_pct": -1.3}, {"name": "OpenClaw概念", "change_pct": -0.82}, {"name": "DeepSeek概念股", "change_pct": -1.58}]}, {"code": "000722", "name": "湖南发展", "hot_rank": 42, "hot_rank_chg": 32, "stock_cnt": 5779, "price": "15.21", "change": "3.19", "market_id": "33", "circulate_market_value": "7059847500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002059", "name": "云南旅游", "hot_rank": 43, "hot_rank_chg": -16, "stock_cnt": 5779, "price": "5.68", "change": "-9.98", "market_id": "33", "circulate_market_value": "5625433600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.49}, {"name": "旅游", "change_pct": -3.25}, {"name": "虚拟数字人", "change_pct": -1.6}, {"name": "国企改革", "change_pct": -1.82}]}, {"code": "300502", "name": "新易盛", "hot_rank": 44, "hot_rank_chg": 121, "stock_cnt": 5779, "price": "423.00", "change": "2.94", "market_id": "33", "circulate_market_value": "530544850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600712", "name": "南宁百货", "hot_rank": 45, "hot_rank_chg": 58, "stock_cnt": 5779, "price": "6.70", "change": "-1.90", "market_id": "17", "circulate_market_value": "3608944100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.27}, {"name": "新零售", "change_pct": -2.9}, {"name": "职业教育", "change_pct": -1.78}, {"name": "免税店概念", "change_pct": -3.28}, {"name": "地摊经济", "change_pct": -3.13}, {"name": "广西概念", "change_pct": -2.05}]}, {"code": "603938", "name": "三孚股份", "hot_rank": 46, "hot_rank_chg": 172, "stock_cnt": 5779, "price": "49.56", "change": "10.01", "market_id": "17", "circulate_market_value": "18962870000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "二氯硅反倾销"}, {"code": "603601", "name": "再升科技", "hot_rank": 47, "hot_rank_chg": -21, "stock_cnt": 5779, "price": "10.79", "change": "8.33", "market_id": "17", "circulate_market_value": "12325859100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -0.83}, {"name": "核电", "change_pct": -1.35}, {"name": "大飞机", "change_pct": -0.67}, {"name": "大气治理", "change_pct": -1.55}, {"name": "玻纤", "change_pct": 4.51}, {"name": "环保", "change_pct": -1.88}, {"name": "核污染防治", "change_pct": -1.07}, {"name": "航天", "change_pct": -0.96}, {"name": "生物安全", "change_pct": -0.9}, {"name": "中芯国际概念股", "change_pct": -1.99}]}, {"code": "002585", "name": "双星新材", "hot_rank": 48, "hot_rank_chg": 527, "stock_cnt": 5779, "price": "9.96", "change": "10.05", "market_id": "33", "circulate_market_value": "8830454200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC离型膜", "xgb_concepts": [{"name": "被动元件", "change_pct": 2.88}, {"name": "手机产业链", "change_pct": -0.99}, {"name": "超高清视频", "change_pct": -0.93}, {"name": "锂电池", "change_pct": -2.11}, {"name": "强势人气股", "change_pct": -2.11}, {"name": "OLED", "change_pct": -1.44}, {"name": "包装印刷", "change_pct": -2.15}, {"name": "光伏", "change_pct": -1.46}, {"name": "新能源汽车", "change_pct": -1.92}, {"name": "小米概念股", "change_pct": -1.21}, {"name": "液晶面板/LCD", "change_pct": -1.32}, {"name": "可降解塑料", "change_pct": -2.81}, {"name": "华为产业链", "change_pct": -1.36}, {"name": "PET复合铜箔", "change_pct": -0.96}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 49, "hot_rank_chg": 73, "stock_cnt": 5779, "price": "32.26", "change": "-5.42", "market_id": "17", "circulate_market_value": "664613850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 50, "hot_rank_chg": -13, "stock_cnt": 5779, "price": "56.73", "change": "-0.82", "market_id": "17", "circulate_market_value": "255457400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 51, "hot_rank_chg": -10, "stock_cnt": 5779, "price": "17.08", "change": "2.09", "market_id": "33", "circulate_market_value": "9965125400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 52, "hot_rank_chg": 116, "stock_cnt": 5779, "price": "7.06", "change": "-2.08", "market_id": "33", "circulate_market_value": "6256928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -2.98}, {"name": "土地流转", "change_pct": -3.37}, {"name": "海南概念", "change_pct": -3.19}, {"name": "自由贸易港", "change_pct": -2.57}, {"name": "海南自由贸易港", "change_pct": -3.24}, {"name": "大农业", "change_pct": -2.97}, {"name": "水产养殖", "change_pct": -4.02}, {"name": "自贸区", "change_pct": -2.45}]}, {"code": "600362", "name": "江西铜业", "hot_rank": 53, "hot_rank_chg": 26, "stock_cnt": 5779, "price": "45.78", "change": "-7.78", "market_id": "17", "circulate_market_value": "95004826000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 54, "hot_rank_chg": 47, "stock_cnt": 5779, "price": "2.12", "change": "9.85", "market_id": "33", "circulate_market_value": "10690070000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "A0车型", "xgb_concepts": [{"name": "新能源整车", "change_pct": -1.1}, {"name": "汽车整车", "change_pct": -1.0}, {"name": "新能源汽车", "change_pct": -1.92}, {"name": "低价股", "change_pct": -1.82}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 55, "hot_rank_chg": -27, "stock_cnt": 5779, "price": "5.78", "change": "-3.99", "market_id": "17", "circulate_market_value": "71649395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.49}, {"name": "核电", "change_pct": -1.35}, {"name": "电力体制改革", "change_pct": -0.62}, {"name": "水电", "change_pct": -0.13}, {"name": "火电", "change_pct": -0.96}, {"name": "光伏", "change_pct": -1.46}, {"name": "风电", "change_pct": -0.64}, {"name": "国企改革", "change_pct": -1.82}, {"name": "算电协同", "change_pct": -1.46}]}, {"code": "000021", "name": "深科技", "hot_rank": 56, "hot_rank_chg": -24, "stock_cnt": 5779, "price": "35.03", "change": "-4.03", "market_id": "33", "circulate_market_value": "55508074000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 57, "hot_rank_chg": 3, "stock_cnt": 5779, "price": "5.33", "change": "-2.38", "market_id": "33", "circulate_market_value": "188506820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.31}, {"name": "手机产业链", "change_pct": -0.99}, {"name": "超高清视频", "change_pct": -0.93}, {"name": "苹果产业链", "change_pct": -1.79}, {"name": "电竞", "change_pct": -1.52}, {"name": "半导体", "change_pct": -1.8}, {"name": "人工智能", "change_pct": -1.74}, {"name": "互联网医疗", "change_pct": -1.69}, {"name": "VR&AR", "change_pct": -1.21}, {"name": "OLED", "change_pct": -1.44}, {"name": "京津冀", "change_pct": -2.05}, {"name": "物联网", "change_pct": -1.5}, {"name": "指纹识别", "change_pct": -1.27}, {"name": "汽车零部件", "change_pct": -1.98}, {"name": "白马股", "change_pct": -0.92}, {"name": "智能制造", "change_pct": -1.82}, {"name": "小米概念股", "change_pct": -1.21}, {"name": "国产芯片", "change_pct": -1.57}, {"name": "液晶面板/LCD", "change_pct": -1.32}, {"name": "全息概念", "change_pct": -1.54}, {"name": "理想汽车概念股", "change_pct": -2.22}, {"name": "MicroLED", "change_pct": -1.75}, {"name": "钙钛矿电池", "change_pct": -2.01}, {"name": "智能手表", "change_pct": -1.76}, {"name": "MiniLED", "change_pct": -1.09}, {"name": "传感器", "change_pct": -1.86}, {"name": "大硅片", "change_pct": -1.78}, {"name": "AI PC", "change_pct": -0.68}, {"name": "华为产业链", "change_pct": -1.36}, {"name": "回购", "change_pct": -1.89}, {"name": "光电共封装CPO", "change_pct": -0.98}, {"name": "智能眼镜/MR头显", "change_pct": -1.53}, {"name": "玻璃基板封装", "change_pct": -1.87}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 58, "hot_rank_chg": -27, "stock_cnt": 5779, "price": "17.46", "change": "-7.62", "market_id": "33", "circulate_market_value": "7976605500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 59, "hot_rank_chg": -30, "stock_cnt": 5779, "price": "6.99", "change": "-1.96", "market_id": "17", "circulate_market_value": "17604384000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.27}, {"name": "工业大麻", "change_pct": -1.47}, {"name": "中药", "change_pct": -2.09}, {"name": "强势人气股", "change_pct": -2.11}, {"name": "保健品", "change_pct": -2.09}, {"name": "民营医院", "change_pct": -2.4}, {"name": "医药", "change_pct": -2.39}, {"name": "化学原料药", "change_pct": -2.38}, {"name": "流感", "change_pct": -2.37}, {"name": "振兴东北", "change_pct": -2.21}, {"name": "食品", "change_pct": -2.9}]}, {"code": "000930", "name": "中粮科技", "hot_rank": 60, "hot_rank_chg": -22, "stock_cnt": 5779, "price": "5.88", "change": "-9.54", "market_id": "33", "circulate_market_value": "10915061400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.49}, {"name": "饲料", "change_pct": -2.92}, {"name": "白酒", "change_pct": -2.35}, {"name": "燃料乙醇", "change_pct": -6.96}, {"name": "食品", "change_pct": -2.9}, {"name": "甜味剂/代糖", "change_pct": -4.64}, {"name": "大农业", "change_pct": -2.97}, {"name": "国企改革", "change_pct": -1.82}, {"name": "可降解塑料", "change_pct": -2.81}, {"name": "新冠病毒防治", "change_pct": -2.04}, {"name": "蜜雪冰城概念股", "change_pct": -2.89}]}, {"code": "300913", "name": "兆龙互连", "hot_rank": 61, "hot_rank_chg": 479, "stock_cnt": 5779, "price": "42.92", "change": "8.63", "market_id": "33", "circulate_market_value": "12268867400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 62, "hot_rank_chg": -47, "stock_cnt": 5779, "price": "224.46", "change": "-4.25", "market_id": "17", "circulate_market_value": "61858566000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 63, "hot_rank_chg": 8, "stock_cnt": 5779, "price": "371.32", "change": "-2.45", "market_id": "17", "circulate_market_value": "249051130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603318", "name": "水发燃气", "hot_rank": 64, "hot_rank_chg": -5, "stock_cnt": 5779, "price": "9.92", "change": "-4.16", "market_id": "17", "circulate_market_value": "4553983600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "燃气轮机", "change_pct": -1.58}, {"name": "电子特气", "change_pct": -2.22}, {"name": "一带一路", "change_pct": -1.9}, {"name": "天然气", "change_pct": -2.24}, {"name": "山东国企改革", "change_pct": -1.65}, {"name": "国企改革", "change_pct": -1.82}, {"name": "氦气", "change_pct": -2.31}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 65, "hot_rank_chg": -25, "stock_cnt": 5779, "price": "5.11", "change": "-8.42", "market_id": "17", "circulate_market_value": "6226085500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -2.34}, {"name": "煤炭", "change_pct": -2.59}, {"name": "有色金属", "change_pct": -2.78}, {"name": "国企改革", "change_pct": -1.82}, {"name": "河南国企改革", "change_pct": -1.53}]}, {"code": "600693", "name": "东百集团", "hot_rank": 66, "hot_rank_chg": 67, "stock_cnt": 5779, "price": "9.93", "change": "-7.71", "market_id": "17", "circulate_market_value": "8628701100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.27}, {"name": "快递物流", "change_pct": -2.17}, {"name": "新零售", "change_pct": -2.9}, {"name": "福建自贸/海西概念", "change_pct": -2.55}, {"name": "旅游", "change_pct": -3.25}, {"name": "阿里巴巴概念股", "change_pct": -1.57}, {"name": "物业管理", "change_pct": -2.82}, {"name": "免税店概念", "change_pct": -3.28}, {"name": "自贸区", "change_pct": -2.45}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 67, "hot_rank_chg": 18, "stock_cnt": 5779, "price": "32.84", "change": "-0.79", "market_id": "33", "circulate_market_value": "93924787000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 68, "hot_rank_chg": 130, "stock_cnt": 5779, "price": "40.75", "change": "1.54", "market_id": "17", "circulate_market_value": "51818574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 70, "hot_rank_chg": 138, "stock_cnt": 5779, "price": "18.15", "change": "-4.52", "market_id": "17", "circulate_market_value": "316914290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 71, "hot_rank_chg": 37, "stock_cnt": 5779, "price": "36.12", "change": "4.73", "market_id": "17", "circulate_market_value": "26159130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002902", "name": "铭普光磁", "hot_rank": 72, "hot_rank_chg": 187, "stock_cnt": 5779, "price": "30.86", "change": "10.02", "market_id": "33", "circulate_market_value": "5754490300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "800G光模块"}, {"code": "600967", "name": "内蒙一机", "hot_rank": 73, "hot_rank_chg": 58, "stock_cnt": 5779, "price": "14.98", "change": "9.98", "market_id": "17", "circulate_market_value": "25492884000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "军工装备"}, {"code": "600206", "name": "有研新材", "hot_rank": 74, "hot_rank_chg": -5, "stock_cnt": 5779, "price": "45.55", "change": "-2.65", "market_id": "17", "circulate_market_value": "38560504000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 75, "hot_rank_chg": -13, "stock_cnt": 5779, "price": "148.43", "change": "1.00", "market_id": "17", "circulate_market_value": "357975880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 76, "hot_rank_chg": -25, "stock_cnt": 5779, "price": "261.96", "change": "-2.62", "market_id": "33", "circulate_market_value": "285114130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002068", "name": "黑猫股份", "hot_rank": 77, "hot_rank_chg": -44, "stock_cnt": 5779, "price": "9.68", "change": "-6.02", "market_id": "33", "circulate_market_value": "7114856300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -2.11}, {"name": "新能源汽车", "change_pct": -1.92}, {"name": "炭黑", "change_pct": -3.5}, {"name": "固态电池", "change_pct": -2.07}, {"name": "PVDF概念", "change_pct": -2.56}, {"name": "碳基材料", "change_pct": -2.16}, {"name": "超级电容", "change_pct": -0.74}]}, {"code": "000737", "name": "北方铜业", "hot_rank": 78, "hot_rank_chg": 84, "stock_cnt": 5779, "price": "14.74", "change": "-10.01", "market_id": "33", "circulate_market_value": "28072958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 79, "hot_rank_chg": -22, "stock_cnt": 5779, "price": "16.20", "change": "-1.10", "market_id": "33", "circulate_market_value": "53881630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002815", "name": "崇达技术", "hot_rank": 80, "hot_rank_chg": 122, "stock_cnt": 5779, "price": "20.08", "change": "10.03", "market_id": "33", "circulate_market_value": "15604932000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI服务器PCB"}, {"code": "000988", "name": "华工科技", "hot_rank": 81, "hot_rank_chg": -9, "stock_cnt": 5779, "price": "103.88", "change": "-1.81", "market_id": "33", "circulate_market_value": "104397910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603936", "name": "博敏电子", "hot_rank": 82, "hot_rank_chg": 58, "stock_cnt": 5779, "price": "20.88", "change": "10.01", "market_id": "17", "circulate_market_value": "13162710300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力PCB"}, {"code": "000977", "name": "浪潮信息", "hot_rank": 83, "hot_rank_chg": -7, "stock_cnt": 5779, "price": "70.54", "change": "0.16", "market_id": "33", "circulate_market_value": "103476231000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603042", "name": "华脉科技", "hot_rank": 84, "hot_rank_chg": 41, "stock_cnt": 5779, "price": "16.57", "change": "-1.37", "market_id": "17", "circulate_market_value": "3459265700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 85, "hot_rank_chg": 44, "stock_cnt": 5779, "price": "64.07", "change": "0.25", "market_id": "17", "circulate_market_value": "1271410990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 86, "hot_rank_chg": -20, "stock_cnt": 5779, "price": "10.91", "change": "-4.30", "market_id": "17", "circulate_market_value": "4195414700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -2.39}, {"name": "股权转让", "change_pct": -1.77}, {"name": "强势人气股", "change_pct": -2.11}, {"name": "新疆概念", "change_pct": -2.94}, {"name": "医药", "change_pct": -2.39}, {"name": "流感", "change_pct": -2.37}, {"name": "国资入股", "change_pct": -2.07}, {"name": "减肥药", "change_pct": -2.13}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 87, "hot_rank_chg": 47, "stock_cnt": 5779, "price": "7.48", "change": "-1.84", "market_id": "33", "circulate_market_value": "12169913500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.27}, {"name": "电竞", "change_pct": -1.52}, {"name": "手游", "change_pct": -1.62}, {"name": "强势人气股", "change_pct": -2.11}, {"name": "人工智能", "change_pct": -1.74}, {"name": "游戏", "change_pct": -1.65}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.59}, {"name": "腾讯概念股", "change_pct": -1.8}, {"name": "快手概念股", "change_pct": -1.73}, {"name": "元宇宙", "change_pct": -1.48}, {"name": "虚拟数字人", "change_pct": -1.6}, {"name": "东数西算/算力", "change_pct": -1.3}, {"name": "web3.0", "change_pct": -1.78}, {"name": "AIGC概念", "change_pct": -1.45}, {"name": "数据要素", "change_pct": -1.56}, {"name": "字节跳动概念股", "change_pct": -1.56}, {"name": "AI营销", "change_pct": -1.46}, {"name": "ChatGPT", "change_pct": -1.55}, {"name": "智能眼镜/MR头显", "change_pct": -1.53}, {"name": "AI大模型/智能体", "change_pct": -1.83}, {"name": "人形机器人", "change_pct": -1.99}, {"name": "短剧/互动影游", "change_pct": -0.81}, {"name": "多模态", "change_pct": -1.76}, {"name": "AI视频", "change_pct": -1.26}, {"name": "IP经济/谷子经济", "change_pct": -1.48}, {"name": "小红书概念股", "change_pct": -1.47}]}, {"code": "001258", "name": "立新能源", "hot_rank": 88, "hot_rank_chg": -25, "stock_cnt": 5779, "price": "11.45", "change": "-8.03", "market_id": "33", "circulate_market_value": "10686532400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.11}, {"name": "新疆国企改革", "change_pct": -3.58}, {"name": "新疆概念", "change_pct": -2.94}, {"name": "光伏", "change_pct": -1.46}, {"name": "风电", "change_pct": -0.64}, {"name": "储能", "change_pct": -1.52}, {"name": "国企改革", "change_pct": -1.82}]}, {"code": "601118", "name": "海南橡胶", "hot_rank": 89, "hot_rank_chg": -35, "stock_cnt": 5779, "price": "6.78", "change": "-7.63", "market_id": "17", "circulate_market_value": "29014520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -2.98}, {"name": "橡胶", "change_pct": -2.0}, {"name": "土地流转", "change_pct": -3.37}, {"name": "农垦", "change_pct": -3.76}, {"name": "海南概念", "change_pct": -3.19}, {"name": "自由贸易港", "change_pct": -2.57}, {"name": "海南自由贸易港", "change_pct": -3.24}, {"name": "大农业", "change_pct": -2.97}, {"name": "可降解塑料", "change_pct": -2.81}, {"name": "大消费", "change_pct": -1.77}, {"name": "免税店概念", "change_pct": -3.28}, {"name": "自贸区", "change_pct": -2.45}]}, {"code": "002407", "name": "多氟多", "hot_rank": 90, "hot_rank_chg": 9, "stock_cnt": 5779, "price": "31.87", "change": "-2.90", "market_id": "33", "circulate_market_value": "34448866000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600150", "name": "中国船舶", "hot_rank": 91, "hot_rank_chg": -56, "stock_cnt": 5779, "price": "39.75", "change": "-2.62", "market_id": "17", "circulate_market_value": "299143450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 92, "hot_rank_chg": 1, "stock_cnt": 5779, "price": "67.74", "change": "-0.56", "market_id": "17", "circulate_market_value": "121214943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 93, "hot_rank_chg": -57, "stock_cnt": 5779, "price": "227.74", "change": "4.47", "market_id": "17", "circulate_market_value": "35707473000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 94, "hot_rank_chg": 8, "stock_cnt": 5779, "price": "18.60", "change": "2.54", "market_id": "33", "circulate_market_value": "62561195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 95, "hot_rank_chg": -13, "stock_cnt": 5779, "price": "4.79", "change": "-4.58", "market_id": "33", "circulate_market_value": "12705717200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.11}, {"name": "装修装饰", "change_pct": -2.29}, {"name": "装配式建筑", "change_pct": -2.34}, {"name": "破净股", "change_pct": -2.02}, {"name": "航天", "change_pct": -0.96}, {"name": "旧改", "change_pct": -2.58}]}, {"code": "603162", "name": "海通发展", "hot_rank": 96, "hot_rank_chg": -57, "stock_cnt": 5779, "price": "14.16", "change": "-8.76", "market_id": "17", "circulate_market_value": "5981696200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 97, "hot_rank_chg": 74, "stock_cnt": 5779, "price": "10.18", "change": "-4.32", "market_id": "33", "circulate_market_value": "5937083800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -2.59}, {"name": "一带一路", "change_pct": -1.9}, {"name": "天然气", "change_pct": -2.24}, {"name": "油气改革", "change_pct": -2.52}, {"name": "页岩气", "change_pct": -2.18}, {"name": "深地经济", "change_pct": -2.18}]}, {"code": "600313", "name": "农发种业", "hot_rank": 98, "hot_rank_chg": 88, "stock_cnt": 5779, "price": "7.35", "change": "-3.42", "market_id": "17", "circulate_market_value": "7954160200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.49}, {"name": "农业种植", "change_pct": -2.98}, {"name": "化肥", "change_pct": -4.14}, {"name": "转基因", "change_pct": -1.12}, {"name": "土地流转", "change_pct": -3.37}, {"name": "农垦", "change_pct": -3.76}, {"name": "乡村振兴", "change_pct": -2.78}, {"name": "大农业", "change_pct": -2.97}, {"name": "国企改革", "change_pct": -1.82}, {"name": "大豆", "change_pct": -2.28}]}, {"code": "002498", "name": "汉缆股份", "hot_rank": 99, "hot_rank_chg": 73, "stock_cnt": 5779, "price": "7.00", "change": "2.34", "market_id": "33", "circulate_market_value": "23287572000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.2}, {"name": "核电", "change_pct": -1.35}, {"name": "5G", "change_pct": -0.06}, {"name": "一带一路", "change_pct": -1.9}, {"name": "充电桩", "change_pct": -1.12}, {"name": "氢能源/燃料电池", "change_pct": -1.83}, {"name": "风电", "change_pct": -0.64}, {"name": "新能源汽车", "change_pct": -1.92}, {"name": "储能", "change_pct": -1.52}, {"name": "特高压", "change_pct": -0.9}, {"name": "智能电网", "change_pct": -1.03}, {"name": "海洋经济", "change_pct": -1.71}]}, {"code": "002015", "name": "协鑫能科", "hot_rank": 100, "hot_rank_chg": -58, "stock_cnt": 5779, "price": "16.45", "change": "-4.25", "market_id": "33", "circulate_market_value": "26703690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002790", "name": "瑞尔特", "price": 9.31, "change_pct": 10.05, "reason": "公司注册地位于福建厦门海沧区，专注于卫浴配件产品和智能卫浴产品", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 4.09, "first_limit_up": 1789089900, "break_limit_up_times": 0}, {"code": "600967", "name": "内蒙一机", "price": 14.98, "change_pct": 9.99, "reason": "1、公司为兵器工业集团旗下企业，是我国唯一主战坦克及中重型轮式装甲车公司\n2、公司研制的两栖无人查险机器人系列产品是公司承担的国家应急管理部揭榜攻关项目，目前已完成研制，正在试验中", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 10.36, "first_limit_up": 1789094050, "break_limit_up_times": 9}, {"code": "600184", "name": "光电股份", "price": 19.98, "change_pct": 10.02, "reason": "兵工集团唯一光电上市平台，陆军光电武器装备核心供应商；公司光通信核心材料GP是光模块光隔离器中的核心材料", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 7.99, "first_limit_up": 1789090581, "break_limit_up_times": 9}, {"code": "002201", "name": "九鼎新材", "price": 11.09, "change_pct": 10.02, "reason": "1、全球较大的玻纤制砂轮增强片供应商，国家航空航天特种玻纤布定点企业；\n2、公司的主要产品类别玻璃纤维复合材料就有应用于风力发电领域的风电机舱罩和叶片", "plates": ["玻纤"], "limit_up_days": 2, "turnover_ratio": 18.53, "first_limit_up": 1789104984, "break_limit_up_times": 0}, {"code": "603936", "name": "博敏电子", "price": 20.88, "change_pct": 10.01, "reason": "公司为国内PCB细分HDI板龙头，现已为多家客户批量提供400G、800G光模块产品", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 18.55, "first_limit_up": 1789104964, "break_limit_up_times": 0}, {"code": "600207", "name": "安彩高科", "price": 4.94, "change_pct": 10.02, "reason": "公司具备太阳能光伏玻璃原片、钢化片、镀膜片全产品链的生产能力", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.27, "first_limit_up": 1789090774, "break_limit_up_times": 0}, {"code": "603439", "name": "三力制药", "price": 12.54, "change_pct": 10.0, "reason": "苗药龙头，儿童咽喉疾病中成药领跑企业，主要产品为开喉剑喷雾剂（儿童型）、开喉剑喷雾剂和强力天麻杜仲胶囊等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.48, "first_limit_up": 1789107779, "break_limit_up_times": 0}, {"code": "002815", "name": "崇达技术", "price": 20.08, "change_pct": 10.03, "reason": "公司是全球领先的小批量PCB企业，供给工业控制领域客户的PCB产品有应用于智能家居、人形机器人、工业机器人等方面", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 13.47, "first_limit_up": 1789105197, "break_limit_up_times": 0}, {"code": "603938", "name": "三孚股份", "price": 49.56, "change_pct": 10.01, "reason": "1、商务部对原产于日本的进口二氯二氢硅实施临时反倾销措施，唐山三孚电子材料曾代表国内产业提起调查申请；\n2、公司电子特气产品应用于存储芯片等领域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.14, "first_limit_up": 1789090747, "break_limit_up_times": 1}, {"code": "002912", "name": "中新赛克", "price": 23.51, "change_pct": 10.01, "reason": "深圳国资委旗下，领先的网络可视化基础架构产品提供商，已有相关的算力数据网络监测和调度技术研发储备；公司海睿思产品已成功通过上海数据交易所的数商认证", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 2.12, "first_limit_up": 1789089900, "break_limit_up_times": 0}, {"code": "002902", "name": "铭普光磁", "price": 30.86, "change_pct": 10.02, "reason": "1、通信磁性元器件研发生产企业；公司光模块以PON光模块和数据中心光模块为主，主要应用于数通市场和电信市场两大领域；一季度业绩同比减亏；\n2、公司研发出图腾柱无桥电路PFC电感-4KW，并与半导体供应商Innoscience（英诺赛科公司）芯片系列搭配使用开发", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 18.64, "first_limit_up": 1789091574, "break_limit_up_times": 2}, {"code": "002242", "name": "九阳股份", "price": 9.74, "change_pct": 10.06, "reason": "豆浆机龙头；公司表示没有哈基米hachimi相关的产品等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1789092570, "break_limit_up_times": 1}, {"code": "605069", "name": "正和生态", "price": 11.5, "change_pct": 10.05, "reason": "国内领先的生态环境科技运营商；公司携手智谱共同开发河湖生态修复基础大模型RiverLake GLM v1.0通过验收", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.69, "first_limit_up": 1789090371, "break_limit_up_times": 0}, {"code": "600088", "name": "中视传媒", "price": 13.4, "change_pct": 10.02, "reason": "央视与国际足联达成合作，宣布6000万美元拿下美加墨世界杯转播权；公司是中央电视台旗下唯一上市公司，已形成影视、广告、旅游三大主营业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.88, "first_limit_up": 1789095936, "break_limit_up_times": 1}, {"code": "600410", "name": "华胜天成", "price": 15.42, "change_pct": 9.99, "reason": "公司全面推进“AI+算力”战略，拥有新一代人工智能算力中心整体解决方案，并获头部科技企业智能计算ISV核心认证，为华为云软件认证合作伙伴、华为云服务合作伙伴和华为政企金牌合作伙伴", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 12.86, "first_limit_up": 1789090856, "break_limit_up_times": 1}, {"code": "000980", "name": "众泰汽车", "price": 2.12, "change_pct": 9.84, "reason": "公司全新A0级车型进入批量试制阶段", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 11.82, "first_limit_up": 1789096116, "break_limit_up_times": 1}, {"code": "002585", "name": "双星新材", "price": 9.96, "change_pct": 10.06, "reason": "公司MLCC离型膜已切入国内头部客户并实现稳定供货，复合铜箔项目正常推进，受益国产替代", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 11.87, "first_limit_up": 1789090398, "break_limit_up_times": 2}, {"code": "001232", "name": "嘉立创", "price": 182.48, "change_pct": 10.0, "reason": "公司主营印制电路板制造业务，PCB业务为公司第一大收入来源，拥有五大现代化数字生产基地覆盖PCB全制程\n", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 16.25, "first_limit_up": 1789105674, "break_limit_up_times": 0}, {"code": "605058", "name": "澳弘电子", "price": 33.31, "change_pct": 10.01, "reason": "公司拟3.3亿元投建高端PCB定制化生产基地，产品以高性能、高可靠性的多层铝基盲孔板、阶梯槽PCB、热电分离铜基板、microled板、高多层厚铜板、多层特种线圈板、高频雷达板等高端定制化PCB产品为主", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 6.81, "first_limit_up": 1789093216, "break_limit_up_times": 0}, {"code": "603136", "name": "天目湖", "price": 10.58, "change_pct": 9.98, "reason": "公司地处长三角，为区域旅游龙头，天目湖旅游度假区是国家5A级旅游景区", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 11.84, "first_limit_up": 1789107288, "break_limit_up_times": 0}, {"code": "605011", "name": "杭州热电", "price": 19.03, "change_pct": 10.0, "reason": "实控人为杭州国资委，公司主营工业园区热电联产、集中供热，提供的主要产品是蒸汽与电力，已覆盖上海、杭州等地区", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.21, "first_limit_up": 1789091717, "break_limit_up_times": 0}, {"code": "002848", "name": "高斯贝尔", "price": 15.24, "change_pct": 10.04, "reason": "1、公司高速覆铜板介电损耗低于0.002，应用于AI服务器、高端GPU主板、光模块等设备，郴州功田电子高频高速覆铜板相关新材料业务订单情况良好，正推进下游客户送样验证、机构认证及批量导入；\n2、公司依托省级微波电子陶瓷技术工程研究中心，在 5G/6G 新材料领域深入研究开发多年，拥有自主可控的关键技术，开发出能够完全替代国外进口的高端产品及市场所需的高精尖产品，涉及多项高频、高速、封装覆铜板、陶瓷新材料等技术", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 18.27, "first_limit_up": 1789091571, "break_limit_up_times": 4}, {"code": "603421", "name": "鼎信通讯", "price": 8.02, "change_pct": 10.01, "reason": "公司深耕智能电网，拥有电能计量、配电自动化、中低压数字化全矩阵产品，参与国标制定，具备芯片-方案-系统垂直整合能力", "plates": ["智能电网"], "limit_up_days": 3, "turnover_ratio": 16.88, "first_limit_up": 1789093233, "break_limit_up_times": 3}, {"code": "603693", "name": "江苏新能", "price": 12.8, "change_pct": 9.97, "reason": "江苏省人民政府旗下，业务主要包括风能发电、生物质能发电和光伏发电三个板块", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.8, "first_limit_up": 1789092334, "break_limit_up_times": 6}, {"code": "600876", "name": "凯盛新能", "price": 8.7, "change_pct": 9.99, "reason": "1、国内著名的玻璃生产制造商之一；公司超薄电子玻璃产品结构优势明显,具备批量生产0.12mm-2.0mm系列浮法玻璃生产能力，玻璃板块主导产品为超薄电子玻璃基板；\n2、公司主营产品包括双玻组件玻璃、AR光伏镀膜玻璃、高透光伏玻璃钢化片等太阳能装备用光伏电池封装材料，在产光伏玻璃原片产能4650吨/日", "plates": ["玻纤"], "limit_up_days": 2, "turnover_ratio": 4.24, "first_limit_up": 1789090290, "break_limit_up_times": 2}, {"code": "002560", "name": "通达股份", "price": 6.88, "change_pct": 10.08, "reason": "国内架空导线龙头，特高压导线主要供应商", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 12.54, "first_limit_up": 1789091391, "break_limit_up_times": 5}, {"code": "300563", "name": "神宇股份", "price": 27.92, "change_pct": 19.98, "reason": "1、公司已开发出传输速率可达224Gbps的高速铜缆，DAC高速数据线持续量产，USB4、Thunderbolt4产品齐全，用于数据中心短距高速互联；\n2、公司射频同轴电缆应用范围包括航天、电子等军用领域，可以用于北斗卫星导航卫星基础建设", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 18.05, "first_limit_up": 1789092384, "break_limit_up_times": 3}, {"code": "002218", "name": "拓日新能", "price": 4.41, "change_pct": 9.98, "reason": "国内较早打通并拥有“从砂到电”垂直一体化光伏产业链的企业之一；公司参与了东方红卫星“开拓一号”单晶硅太阳电池项目，具备成熟的卫星用光伏组件生产制造能力，研发的钙钛矿/晶硅叠层电池技术可应用于航天领域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.78, "first_limit_up": 1789102932, "break_limit_up_times": 0}, {"code": "605258", "name": "协和电子", "price": 34.77, "change_pct": 10.0, "reason": "国内领先的高频通讯板生产商；公司车载毫米波雷达等产品且已批量供货，与合众新能源、上汽时代、万帮数字能源等新能源领域的客户建立了合作", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.16, "first_limit_up": 1789091102, "break_limit_up_times": 7}, {"code": "002161", "name": "远 望 谷", "price": 8.04, "change_pct": 9.99, "reason": "1、公司拟收购光泰通信100%股权，拓展光通信自动化设备领域；\n2、公司自主研发的RFID芯片已广泛应用于铁路、烟草、电力、图书等业务领域，且公司提供自芯片、标签、读写器到软件开发等全套产品和服务", "plates": ["资产重组", "光通信"], "limit_up_days": 1, "turnover_ratio": 2.54, "first_limit_up": 1789089900, "break_limit_up_times": 0}, {"code": "002519", "name": "银河电子", "price": 6.31, "change_pct": 9.93, "reason": "1、公司军工业务主要包括技术保障装备、智能供配电系统、综合电子信息系统、综合环境控制系统和保障类电源等，上述各分系统主要用于坦克、装甲车、自行火炮、指挥车、通信车、侦察车、技术保障、后勤等各型军用特种车辆；\n2、公司通过参股格思航天布局卫星用户终端业务，其关联公司银河航天是我国领先的卫星互联网解决方案提供商和卫星制造商，已建成中国首个低轨宽带通信试验星座“小蜘蛛网”，完成多项低轨宽带卫星互联网通信验证", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 13.38, "first_limit_up": 1789105890, "break_limit_up_times": 2}, {"code": "601199", "name": "江南水务", "price": 6.47, "change_pct": 10.03, "reason": "江阴市水务平台，拥有4座地面水厂和一家污水处理厂", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.64, "first_limit_up": 1789105829, "break_limit_up_times": 2}, {"code": "603466", "name": "风语筑", "price": 13.27, "change_pct": 10.03, "reason": "公司联手宇树科技共同打造杭州市具身智能展示与应用推广中心，深度参与国家级中试基地配套建设", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.13, "first_limit_up": 1789090556, "break_limit_up_times": 2}, {"code": "603386", "name": "骏亚科技", "price": 16.46, "change_pct": 10.03, "reason": "公司已成功推进人形机器人、服务器、AI、光模块等领域PCB开发，其中已成功导入国内头部人形机器人客户并开始批量供货", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.9, "first_limit_up": 1789106936, "break_limit_up_times": 0}, {"code": "600237", "name": "铜峰电子", "price": 9.22, "change_pct": 10.02, "reason": "国内领先的薄膜电容及薄膜材料生产商，拥有完整的 “电容器用薄膜 - 金属化薄膜 - 薄膜电容器” 产业链", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 16.22, "first_limit_up": 1789107384, "break_limit_up_times": 0}, {"code": "000636", "name": "风华高科", "price": 55.99, "change_pct": 10.0, "reason": "国内被动电子元件行业龙头；公司MLCC、合金电阻、大电流电感已批量导入国内头部AI服务器及机器人客户，AI算力订单充足", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 16.22, "first_limit_up": 1789105041, "break_limit_up_times": 0}, {"code": "605088", "name": "冠盛股份", "price": 22.48, "change_pct": 9.98, "reason": "公司联合上海人工智能研究院等发布洁净环境机器人产品，已获授权发明专利6项，智能仿生关节臂仍处于研发迭代阶段", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.66, "first_limit_up": 1789091440, "break_limit_up_times": 0}, {"code": "000823", "name": "超声电子", "price": 20.57, "change_pct": 10.0, "reason": "公司M7/M8级高速覆铜板处于研发测试阶段，800G、1.6T光模块配套PCB在研究跟进中", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 30.75, "first_limit_up": 1789103055, "break_limit_up_times": 1}, {"code": "000993", "name": "闽东电力", "price": 13.88, "change_pct": 9.98, "reason": "1、福建省最大的电力股份制企业；公司主营业务为电力生产与开发，主要以水电、风电、光伏为主；\n2、持股海交所7.4%，海交所提供不良资产处置服务", "plates": ["智能电网"], "limit_up_days": 3, "turnover_ratio": 10.47, "first_limit_up": 1789089900, "break_limit_up_times": 1}, {"code": "603336", "name": "宏辉果蔬", "price": 10.09, "change_pct": 10.03, "reason": "果蔬产品产业一体化的专业农产品服务商；公司拟收购施美药业41.128%股份，切入医药赛道", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.32, "first_limit_up": 1789106113, "break_limit_up_times": 0}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券"};