const UPDATE_TIME = "2026-08-24 20:24";
const THS_HOT = [
  {
    "name": "黄金概念",
    "rise": 1.17,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "创新药",
    "rise": -3.06,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "数字货币",
    "rise": -0.65,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "粮食概念",
    "rise": 1.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.61,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续277天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": -1.83,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续230天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "AI应用",
    "rise": -1.77,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续35天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "高股息精选",
    "rise": 0.41,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "红利ETF",
    "code": "886072"
  },
  {
    "name": "煤炭概念",
    "rise": 0.68,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "煤炭ETF",
    "code": "885914"
  },
  {
    "name": "ST板块",
    "rise": -1.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "PCB概念",
    "rise": -2.36,
    "rate": 0,
    "tag": "",
    "hotTag": "连续100天上榜",
    "rankChg": 2,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "固态电池",
    "rise": -0.7,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -2,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "机器人概念",
    "rise": -1.4,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续108天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "小金属概念",
    "rise": 0.17,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "工业有色ETF",
    "code": "885552"
  },
  {
    "name": "算力租赁",
    "rise": -1.79,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续141天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "锂电池概念",
    "rise": -0.73,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "芯片概念",
    "rise": -1.84,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续101天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "金属铜",
    "rise": 0.31,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "有色ETF",
    "code": "885973"
  },
  {
    "name": "商业航天",
    "rise": -1.93,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续206天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": -1.58,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续441天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  }
];
const THS_EVENTS = [
  {
    "title": "黄金升破4600美元/盎司！站上5月中旬以来最高水平",
    "desc": "",
    "heat": 225270,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "黄金概念",
      "白银"
    ],
    "stocks": [
      {
        "name": "*ST萃华",
        "code": "002731",
        "chg": 10.344828
      }
    ]
  },
  {
    "title": "阿里巴巴拟配售800亿港元新股 募资全部投入AI能力建设",
    "desc": "",
    "heat": 149711,
    "direction": "AI算力",
    "themes": [
      "东数西算(算力)",
      "数据中心(AIDC)",
      "阿里巴巴概念",
      "阿里系算力"
    ],
    "stocks": [
      {
        "name": "博汇股份",
        "code": "300839",
        "chg": 13.231756
      }
    ]
  },
  {
    "title": "LME期锌上涨1.7%，报3822美元/吨，升至逾四年来最高水平",
    "desc": "",
    "heat": 119846,
    "direction": "金属锌",
    "themes": [
      "金属锌"
    ],
    "stocks": [
      {
        "name": "白银有色",
        "code": "601212",
        "chg": 10.01642
      }
    ]
  },
  {
    "title": "固态电池领域首个国际标准立项！相关概念多股涨停",
    "desc": "",
    "heat": 104700,
    "direction": "固态电池",
    "themes": [
      "固态电池"
    ],
    "stocks": [
      {
        "name": "天力锂能",
        "code": "301152",
        "chg": 20.020587
      }
    ]
  },
  {
    "title": "多国加码粮食出口管制",
    "desc": "",
    "heat": 102784,
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
        "name": "登海种业",
        "code": "002041",
        "chg": 10.043197
      }
    ]
  },
  {
    "title": "英伟达AI服务器计划涨价至少15%",
    "desc": "",
    "heat": 60846,
    "direction": "AI服务器",
    "themes": [
      "服务器PCB",
      "戴尔供应链",
      "服务器制造",
      "液冷服务器",
      "英伟达概念"
    ],
    "stocks": [
      {
        "name": "博汇股份",
        "code": "300839",
        "chg": 13.231756
      }
    ]
  },
  {
    "title": "“梯次利用”谢幕！动力电池回收赛道格局生变",
    "desc": "",
    "heat": 33606,
    "direction": "动力电池回收",
    "themes": [
      "动力电池回收"
    ],
    "stocks": [
      {
        "name": "天力锂能",
        "code": "301152",
        "chg": 20.020587
      }
    ]
  },
  {
    "title": "长江存储IPO获受理，一季度大赚333亿元",
    "desc": "",
    "heat": 11825,
    "direction": "长江存储IPO",
    "themes": [
      "长江存储",
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "耐科装备",
        "code": "688419",
        "chg": 16.280975
      }
    ]
  },
  {
    "title": "国常会：统筹推进基础网络、空间网络、国际网络、融合网络建设",
    "desc": "",
    "heat": 175,
    "direction": "网络建设",
    "themes": [
      "网络建设"
    ],
    "stocks": [
      {
        "name": "*ST元道",
        "code": "301139",
        "chg": 0.882353
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+5.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+3.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "硅锰",
    "change": "+2.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+2.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+2.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+2.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+2.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+2.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+2.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+1.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "珠宝饰品",
    "change": "+1.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+1.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+1.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+1.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+1.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+1.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+1.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+1.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+1.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 2,
    "hot_rank_chg": 2,
    "stock_cnt": 5835,
    "price": "11.46",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "26615571000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "半年报增长",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 2.73
      },
      {
        "name": "有色 · 铜",
        "change_pct": -0.26
      },
      {
        "name": "有色 · 锑",
        "change_pct": 1.41
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.15
      },
      {
        "name": "有色 · 锌",
        "change_pct": 1.14
      },
      {
        "name": "有色金属",
        "change_pct": -0.36
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      },
      {
        "name": "白银",
        "change_pct": 2.4
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 5,
    "hot_rank_chg": 3,
    "stock_cnt": 5835,
    "price": "9.90",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "4745267800.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "6",
    "change_reason": "抗肿瘤",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.15
      },
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "医药商业",
        "change_pct": -1.63
      },
      {
        "name": "医药",
        "change_pct": -2.77
      },
      {
        "name": "流感",
        "change_pct": -2.31
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 7,
    "hot_rank_chg": -5,
    "stock_cnt": 5835,
    "price": "8.22",
    "change": "0.61",
    "market_id": "17",
    "circulate_market_value": "20702151000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.78
      },
      {
        "name": "工业大麻",
        "change_pct": -2.27
      },
      {
        "name": "中药",
        "change_pct": -2.15
      },
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "保健品",
        "change_pct": -2.13
      },
      {
        "name": "民营医院",
        "change_pct": -1.41
      },
      {
        "name": "医药",
        "change_pct": -2.77
      },
      {
        "name": "化学原料药",
        "change_pct": -3.02
      },
      {
        "name": "流感",
        "change_pct": -2.31
      },
      {
        "name": "振兴东北",
        "change_pct": -0.79
      },
      {
        "name": "食品",
        "change_pct": -1.28
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 8,
    "hot_rank_chg": 13,
    "stock_cnt": 5835,
    "price": "11.21",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "5580842500.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.15
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.44
      },
      {
        "name": "农业种植",
        "change_pct": 1.16
      },
      {
        "name": "医药",
        "change_pct": -2.77
      },
      {
        "name": "流感",
        "change_pct": -2.31
      },
      {
        "name": "大农业",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 11,
    "hot_rank_chg": 21,
    "stock_cnt": 5835,
    "price": "3.47",
    "change": "10.16",
    "market_id": "33",
    "circulate_market_value": "16210968000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.69
      },
      {
        "name": "股权转让",
        "change_pct": -0.89
      },
      {
        "name": "房地产",
        "change_pct": -1.2
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.91
      },
      {
        "name": "京津冀",
        "change_pct": -1.0
      },
      {
        "name": "旅游",
        "change_pct": -0.1
      },
      {
        "name": "国产芯片",
        "change_pct": -2.3
      },
      {
        "name": "内存",
        "change_pct": -2.8
      },
      {
        "name": "闪存",
        "change_pct": -2.86
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.05
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 16,
    "hot_rank_chg": 6,
    "stock_cnt": 5835,
    "price": "7.71",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "8779818800.00",
    "change_type": "1",
    "change_section": "16",
    "change_days": "9",
    "change_reason": "特高压",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.68
      },
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "光伏",
        "change_pct": -0.95
      },
      {
        "name": "特高压",
        "change_pct": -1.03
      },
      {
        "name": "智能电网",
        "change_pct": -1.08
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 17,
    "hot_rank_chg": 18,
    "stock_cnt": 5835,
    "price": "7.30",
    "change": "9.94",
    "market_id": "17",
    "circulate_market_value": "17452931000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "煤炭",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 2.12
      },
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.24
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 20,
    "hot_rank_chg": 45,
    "stock_cnt": 5835,
    "price": "7.82",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "3447227700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "黄金珠宝",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -0.64
      },
      {
        "name": "锂电池",
        "change_pct": -0.43
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.72
      },
      {
        "name": "两轮车",
        "change_pct": -0.43
      },
      {
        "name": "珠宝饰品",
        "change_pct": 1.42
      }
    ]
  },
  {
    "code": "600610",
    "name": "中毅达",
    "hot_rank": 22,
    "hot_rank_chg": 50,
    "stock_cnt": 5835,
    "price": "8.66",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "6137573300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "营收增长",
    "xgb_concepts": []
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 24,
    "hot_rank_chg": -9,
    "stock_cnt": 5835,
    "price": "5.75",
    "change": "-4.17",
    "market_id": "33",
    "circulate_market_value": "203361020000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.03
      },
      {
        "name": "手机产业链",
        "change_pct": -2.19
      },
      {
        "name": "超高清视频",
        "change_pct": -1.74
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.76
      },
      {
        "name": "电竞",
        "change_pct": -1.16
      },
      {
        "name": "半导体",
        "change_pct": -1.83
      },
      {
        "name": "人工智能",
        "change_pct": -1.78
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.86
      },
      {
        "name": "VR&AR",
        "change_pct": -2.16
      },
      {
        "name": "OLED",
        "change_pct": -1.68
      },
      {
        "name": "京津冀",
        "change_pct": -1.0
      },
      {
        "name": "物联网",
        "change_pct": -1.26
      },
      {
        "name": "指纹识别",
        "change_pct": -1.84
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.96
      },
      {
        "name": "白马股",
        "change_pct": -0.29
      },
      {
        "name": "智能制造",
        "change_pct": -1.67
      },
      {
        "name": "小米概念股",
        "change_pct": -2.3
      },
      {
        "name": "国产芯片",
        "change_pct": -2.3
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.01
      },
      {
        "name": "全息概念",
        "change_pct": -1.64
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.77
      },
      {
        "name": "MicroLED",
        "change_pct": -2.41
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.72
      },
      {
        "name": "智能手表",
        "change_pct": -2.7
      },
      {
        "name": "MiniLED",
        "change_pct": -2.22
      },
      {
        "name": "传感器",
        "change_pct": -2.15
      },
      {
        "name": "大硅片",
        "change_pct": -0.14
      },
      {
        "name": "AI PC",
        "change_pct": -1.55
      },
      {
        "name": "华为产业链",
        "change_pct": -1.69
      },
      {
        "name": "回购",
        "change_pct": -1.68
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -3.15
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.28
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.55
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 26,
    "hot_rank_chg": 10,
    "stock_cnt": 5835,
    "price": "10.97",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "4746429900.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "6",
    "change_reason": "光模块胶",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.89
      },
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "光伏",
        "change_pct": -0.95
      },
      {
        "name": "无线耳机",
        "change_pct": -2.23
      },
      {
        "name": "华为产业链",
        "change_pct": -1.69
      },
      {
        "name": "光伏胶膜",
        "change_pct": -1.09
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 29,
    "hot_rank_chg": -19,
    "stock_cnt": 5835,
    "price": "8.46",
    "change": "3.17",
    "market_id": "17",
    "circulate_market_value": "5429486000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.5
      },
      {
        "name": "农业种植",
        "change_pct": 1.16
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.15
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.38
      },
      {
        "name": "休闲食品",
        "change_pct": -1.6
      },
      {
        "name": "食品",
        "change_pct": -1.28
      },
      {
        "name": "食品安全",
        "change_pct": -1.29
      },
      {
        "name": "社区团购",
        "change_pct": -1.1
      },
      {
        "name": "大农业",
        "change_pct": -0.42
      },
      {
        "name": "预制菜",
        "change_pct": -0.36
      },
      {
        "name": "人造肉",
        "change_pct": -0.21
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "000931",
    "name": "中关村",
    "hot_rank": 33,
    "hot_rank_chg": 56,
    "stock_cnt": 5835,
    "price": "5.60",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4205765400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "mRNA疫苗",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.15
      },
      {
        "name": "创新药",
        "change_pct": -3.75
      },
      {
        "name": "养老产业",
        "change_pct": -0.92
      },
      {
        "name": "医药",
        "change_pct": -2.77
      },
      {
        "name": "化学原料药",
        "change_pct": -3.02
      },
      {
        "name": "口腔",
        "change_pct": -2.62
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 36,
    "hot_rank_chg": 4,
    "stock_cnt": 5835,
    "price": "11.07",
    "change": "3.07",
    "market_id": "17",
    "circulate_market_value": "19208453000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -1.03
      },
      {
        "name": "核电",
        "change_pct": -1.43
      },
      {
        "name": "锂电池",
        "change_pct": -0.43
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -2.84
      },
      {
        "name": "PCB板",
        "change_pct": -2.74
      },
      {
        "name": "中科院系",
        "change_pct": -1.54
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.72
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -0.66
      },
      {
        "name": "固态电池",
        "change_pct": 0.24
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -2.06
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 38,
    "hot_rank_chg": 4,
    "stock_cnt": 5835,
    "price": "5.00",
    "change": "-2.91",
    "market_id": "33",
    "circulate_market_value": "13221216800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.91
      },
      {
        "name": "装修装饰",
        "change_pct": -0.73
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.76
      },
      {
        "name": "破净股",
        "change_pct": -0.0
      },
      {
        "name": "航天",
        "change_pct": -2.23
      },
      {
        "name": "旧改",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 45,
    "hot_rank_chg": 38,
    "stock_cnt": 5835,
    "price": "4.44",
    "change": "9.90",
    "market_id": "33",
    "circulate_market_value": "3397224800.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "6",
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.15
      },
      {
        "name": "股权转让",
        "change_pct": -0.89
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.44
      },
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "医药商业",
        "change_pct": -1.63
      },
      {
        "name": "保健品",
        "change_pct": -2.13
      },
      {
        "name": "民营医院",
        "change_pct": -1.41
      },
      {
        "name": "医药",
        "change_pct": -2.77
      },
      {
        "name": "食品",
        "change_pct": -1.28
      },
      {
        "name": "辅助生殖",
        "change_pct": -3.33
      },
      {
        "name": "口腔",
        "change_pct": -2.62
      },
      {
        "name": "医美",
        "change_pct": -2.51
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.31
      }
    ]
  },
  {
    "code": "002445",
    "name": "中南文化",
    "hot_rank": 48,
    "hot_rank_chg": 75,
    "stock_cnt": 5835,
    "price": "3.37",
    "change": "10.13",
    "market_id": "33",
    "circulate_market_value": "7974276700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "重组",
    "xgb_concepts": [
      {
        "name": "海工装备",
        "change_pct": -1.1
      },
      {
        "name": "VR&AR",
        "change_pct": -2.16
      },
      {
        "name": "影视",
        "change_pct": -1.32
      },
      {
        "name": "光伏",
        "change_pct": -0.95
      },
      {
        "name": "复牌股",
        "change_pct": 5.07
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.06
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "知识产权",
        "change_pct": -0.97
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "000723",
    "name": "美锦能源",
    "hot_rank": 49,
    "hot_rank_chg": 58,
    "stock_cnt": 5835,
    "price": "3.89",
    "change": "9.89",
    "market_id": "33",
    "circulate_market_value": "17097235000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "煤焦一体化",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 2.12
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.39
      },
      {
        "name": "新能源整车",
        "change_pct": -1.04
      },
      {
        "name": "重卡",
        "change_pct": -1.91
      },
      {
        "name": "天然气",
        "change_pct": -0.92
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.05
      },
      {
        "name": "汽车整车",
        "change_pct": -1.34
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.72
      },
      {
        "name": "机器人",
        "change_pct": -1.36
      },
      {
        "name": "煤化工",
        "change_pct": 1.12
      },
      {
        "name": "乙二醇",
        "change_pct": 0.12
      },
      {
        "name": "碳基材料",
        "change_pct": -1.29
      },
      {
        "name": "超级电容",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 51,
    "hot_rank_chg": -10,
    "stock_cnt": 5835,
    "price": "12.57",
    "change": "2.95",
    "market_id": "33",
    "circulate_market_value": "11731852600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.24
      },
      {
        "name": "新疆概念",
        "change_pct": 0.06
      },
      {
        "name": "光伏",
        "change_pct": -0.95
      },
      {
        "name": "风电",
        "change_pct": -1.31
      },
      {
        "name": "储能",
        "change_pct": -0.78
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "600785",
    "name": "新华百货",
    "hot_rank": 55,
    "hot_rank_chg": 79,
    "stock_cnt": 5835,
    "price": "10.71",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "3383115400.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "回购",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.41
      },
      {
        "name": "冷链",
        "change_pct": -1.08
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.03
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.05
      },
      {
        "name": "首发经济",
        "change_pct": -0.56
      }
    ]
  },
  {
    "code": "000925",
    "name": "众合科技",
    "hot_rank": 56,
    "hot_rank_chg": 61,
    "stock_cnt": 5835,
    "price": "8.97",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "6020238300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "牛散入股",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": -0.89
      },
      {
        "name": "半导体",
        "change_pct": -1.83
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.39
      },
      {
        "name": "一带一路",
        "change_pct": -0.68
      },
      {
        "name": "人工智能",
        "change_pct": -1.78
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.91
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.81
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.48
      },
      {
        "name": "大数据",
        "change_pct": -1.84
      },
      {
        "name": "智慧城市",
        "change_pct": -1.26
      },
      {
        "name": "高校系",
        "change_pct": -0.47
      },
      {
        "name": "机器人",
        "change_pct": -1.36
      },
      {
        "name": "智能制造",
        "change_pct": -1.67
      },
      {
        "name": "工业互联网",
        "change_pct": -1.65
      },
      {
        "name": "数字经济",
        "change_pct": -1.38
      },
      {
        "name": "国产芯片",
        "change_pct": -2.3
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.59
      },
      {
        "name": "激光雷达",
        "change_pct": -2.11
      },
      {
        "name": "元宇宙",
        "change_pct": -1.78
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.52
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.01
      },
      {
        "name": "数据要素",
        "change_pct": -1.37
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.31
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -1.69
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.19
      },
      {
        "name": "华为产业链",
        "change_pct": -1.69
      },
      {
        "name": "时空大数据",
        "change_pct": -1.65
      },
      {
        "name": "多模态",
        "change_pct": -2.15
      },
      {
        "name": "低空经济",
        "change_pct": -1.09
      }
    ]
  },
  {
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 57,
    "hot_rank_chg": 7,
    "stock_cnt": 5835,
    "price": "11.51",
    "change": "7.17",
    "market_id": "33",
    "circulate_market_value": "6902662100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.68
      },
      {
        "name": "金融科技",
        "change_pct": -1.14
      },
      {
        "name": "移动支付",
        "change_pct": -0.45
      },
      {
        "name": "物联网",
        "change_pct": -1.26
      },
      {
        "name": "数字经济",
        "change_pct": -1.38
      },
      {
        "name": "电子身份证",
        "change_pct": -0.05
      },
      {
        "name": "ETC",
        "change_pct": -1.37
      },
      {
        "name": "数字人民币",
        "change_pct": -0.58
      },
      {
        "name": "智慧政务",
        "change_pct": -1.13
      },
      {
        "name": "eSIM",
        "change_pct": 1.05
      },
      {
        "name": "华为产业链",
        "change_pct": -1.69
      },
      {
        "name": "区块链",
        "change_pct": -1.19
      },
      {
        "name": "RWA",
        "change_pct": 0.63
      }
    ]
  },
  {
    "code": "002041",
    "name": "登海种业",
    "hot_rank": 58,
    "hot_rank_chg": 50,
    "stock_cnt": 5835,
    "price": "10.19",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "8967200000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "转基因",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 1.16
      },
      {
        "name": "转基因",
        "change_pct": 2.09
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.38
      },
      {
        "name": "大农业",
        "change_pct": -0.42
      },
      {
        "name": "人造肉",
        "change_pct": -0.21
      },
      {
        "name": "大豆",
        "change_pct": 2.37
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 65,
    "hot_rank_chg": -4,
    "stock_cnt": 5835,
    "price": "8.07",
    "change": "4.53",
    "market_id": "33",
    "circulate_market_value": "5871604500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -1.08
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.76
      },
      {
        "name": "风电",
        "change_pct": -1.31
      },
      {
        "name": "环氧丙烷",
        "change_pct": -1.31
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.38
      },
      {
        "name": "建筑节能",
        "change_pct": -1.0
      },
      {
        "name": "旧改",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "600508",
    "name": "上海能源",
    "hot_rank": 67,
    "hot_rank_chg": 102,
    "stock_cnt": 5835,
    "price": "9.88",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "9996635400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报增长",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 2.12
      },
      {
        "name": "央企改革",
        "change_pct": -0.38
      },
      {
        "name": "破净股",
        "change_pct": -0.0
      },
      {
        "name": "超超临界发电",
        "change_pct": 0.1
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "002506",
    "name": "协鑫集成",
    "hot_rank": 73,
    "hot_rank_chg": 11,
    "stock_cnt": 5835,
    "price": "2.78",
    "change": "6.51",
    "market_id": "33",
    "circulate_market_value": "16247536000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.38
      },
      {
        "name": "光伏",
        "change_pct": -0.95
      },
      {
        "name": "储能",
        "change_pct": -0.78
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.38
      },
      {
        "name": "颗粒硅",
        "change_pct": -0.25
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.19
      },
      {
        "name": "低价股",
        "change_pct": -0.56
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.72
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.88
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 74,
    "hot_rank_chg": -16,
    "stock_cnt": 5835,
    "price": "3.94",
    "change": "-9.43",
    "market_id": "33",
    "circulate_market_value": "8274606200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.15
      },
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "维生素",
        "change_pct": -3.76
      },
      {
        "name": "基因测序",
        "change_pct": -2.56
      },
      {
        "name": "民营医院",
        "change_pct": -1.41
      },
      {
        "name": "医药",
        "change_pct": -2.77
      },
      {
        "name": "化学原料药",
        "change_pct": -3.02
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -4.81
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 77,
    "hot_rank_chg": 9,
    "stock_cnt": 5835,
    "price": "9.99",
    "change": "-7.16",
    "market_id": "33",
    "circulate_market_value": "2841971300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -1.0
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.87
      },
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "教育",
        "change_pct": -1.08
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.83
      },
      {
        "name": "职业教育",
        "change_pct": -1.37
      },
      {
        "name": "在线教育",
        "change_pct": -1.19
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.53
      },
      {
        "name": "华为产业链",
        "change_pct": -1.69
      },
      {
        "name": "智谱AI",
        "change_pct": -2.5
      }
    ]
  },
  {
    "code": "003035",
    "name": "南网能源",
    "hot_rank": 80,
    "hot_rank_chg": 58,
    "stock_cnt": 5835,
    "price": "5.73",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "21704545000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "虚拟电厂",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.38
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.43
      },
      {
        "name": "光伏",
        "change_pct": -0.95
      },
      {
        "name": "风电",
        "change_pct": -1.31
      },
      {
        "name": "碳中和",
        "change_pct": -0.28
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.19
      },
      {
        "name": "建筑节能",
        "change_pct": -1.0
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      },
      {
        "name": "智能电网",
        "change_pct": -1.08
      }
    ]
  },
  {
    "code": "002277",
    "name": "友阿股份",
    "hot_rank": 82,
    "hot_rank_chg": 112,
    "stock_cnt": 5835,
    "price": "6.44",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "8978472800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "功率半导体",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.78
      },
      {
        "name": "筹码集中",
        "change_pct": -1.0
      },
      {
        "name": "资产重组",
        "change_pct": -1.31
      },
      {
        "name": "半导体",
        "change_pct": -1.83
      },
      {
        "name": "股权转让",
        "change_pct": -0.89
      },
      {
        "name": "新零售",
        "change_pct": -0.41
      },
      {
        "name": "工业自动化",
        "change_pct": -1.66
      },
      {
        "name": "机器人",
        "change_pct": -1.36
      },
      {
        "name": "智能制造",
        "change_pct": -1.67
      },
      {
        "name": "长寿药NMN",
        "change_pct": -3.25
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.54
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.75
      },
      {
        "name": "免税店概念",
        "change_pct": -0.04
      },
      {
        "name": "供应链金融",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "000065",
    "name": "北方国际",
    "hot_rank": 85,
    "hot_rank_chg": 120,
    "stock_cnt": 5835,
    "price": "9.98",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "10628885400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报增长",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.38
      },
      {
        "name": "一带一路",
        "change_pct": -0.68
      },
      {
        "name": "军工集团",
        "change_pct": -1.0
      },
      {
        "name": "风电",
        "change_pct": -1.31
      },
      {
        "name": "地下管廊",
        "change_pct": -0.56
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.35
      },
      {
        "name": "军工",
        "change_pct": -1.44
      },
      {
        "name": "大基建",
        "change_pct": -0.23
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.45
      },
      {
        "name": "超超临界发电",
        "change_pct": 0.1
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 88,
    "hot_rank_chg": -15,
    "stock_cnt": 5835,
    "price": "12.72",
    "change": "-6.06",
    "market_id": "17",
    "circulate_market_value": "16322286000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -1.78
      },
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "智能制造",
        "change_pct": -1.67
      },
      {
        "name": "工业互联网",
        "change_pct": -1.65
      },
      {
        "name": "培育钻石",
        "change_pct": -1.78
      },
      {
        "name": "金刚线",
        "change_pct": -0.81
      },
      {
        "name": "国资入股",
        "change_pct": -0.61
      },
      {
        "name": "深地经济",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 90,
    "hot_rank_chg": -13,
    "stock_cnt": 5835,
    "price": "11.33",
    "change": "-2.50",
    "market_id": "17",
    "circulate_market_value": "20270937000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.32
      },
      {
        "name": "纯碱",
        "change_pct": 0.61
      },
      {
        "name": "食品",
        "change_pct": -1.28
      },
      {
        "name": "土壤修复",
        "change_pct": -0.85
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.01
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -2.36
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -2.39
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 98,
    "hot_rank_chg": -3,
    "stock_cnt": 5835,
    "price": "5.89",
    "change": "-0.34",
    "market_id": "17",
    "circulate_market_value": "73012965000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.38
      },
      {
        "name": "核电",
        "change_pct": -1.43
      },
      {
        "name": "强势人气股",
        "change_pct": -1.43
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.43
      },
      {
        "name": "水电",
        "change_pct": 0.45
      },
      {
        "name": "火电",
        "change_pct": 0.61
      },
      {
        "name": "光伏",
        "change_pct": -0.95
      },
      {
        "name": "风电",
        "change_pct": -1.31
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      },
      {
        "name": "算电协同",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 100,
    "hot_rank_chg": 137,
    "stock_cnt": 5835,
    "price": "3.95",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "2546306000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "控制权拟变更",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.68
      },
      {
        "name": "装修装饰",
        "change_pct": -0.73
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.76
      },
      {
        "name": "家具家居",
        "change_pct": -0.82
      },
      {
        "name": "复牌股",
        "change_pct": 5.07
      },
      {
        "name": "智能制造",
        "change_pct": -1.67
      },
      {
        "name": "3D打印",
        "change_pct": -1.72
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -0.43
      },
      {
        "name": "旧改",
        "change_pct": -0.8
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5835, "price": "603.08", "change": "-10.31", "market_id": "17", "circulate_market_value": "18145302000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5835, "price": "11.46", "change": "9.98", "market_id": "33", "circulate_market_value": "26615571000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报增长", "xgb_concepts": [{"name": "黄金", "change_pct": 2.73}, {"name": "有色 · 铜", "change_pct": -0.26}, {"name": "有色 · 锑", "change_pct": 1.41}, {"name": "湖南国企改革", "change_pct": 0.15}, {"name": "有色 · 锌", "change_pct": 1.14}, {"name": "有色金属", "change_pct": -0.36}, {"name": "国企改革", "change_pct": -0.38}, {"name": "白银", "change_pct": 2.4}]}, {"code": "002015", "name": "协鑫能科", "hot_rank": 4, "hot_rank_chg": 10, "stock_cnt": 5835, "price": "15.57", "change": "10.04", "market_id": "33", "circulate_market_value": "25275164000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "签署算电协同项目"}, {"code": "600613", "name": "神奇制药", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5835, "price": "9.90", "change": "10.00", "market_id": "17", "circulate_market_value": "4745267800.00", "change_type": "1", "change_section": "8", "change_days": "6", "change_reason": "抗肿瘤", "xgb_concepts": [{"name": "中药", "change_pct": -2.15}, {"name": "强势人气股", "change_pct": -1.43}, {"name": "医药商业", "change_pct": -1.63}, {"name": "医药", "change_pct": -2.77}, {"name": "流感", "change_pct": -2.31}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5835, "price": "56.60", "change": "-2.41", "market_id": "17", "circulate_market_value": "254872010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5835, "price": "8.22", "change": "0.61", "market_id": "17", "circulate_market_value": "20702151000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.78}, {"name": "工业大麻", "change_pct": -2.27}, {"name": "中药", "change_pct": -2.15}, {"name": "强势人气股", "change_pct": -1.43}, {"name": "保健品", "change_pct": -2.13}, {"name": "民营医院", "change_pct": -1.41}, {"name": "医药", "change_pct": -2.77}, {"name": "化学原料药", "change_pct": -3.02}, {"name": "流感", "change_pct": -2.31}, {"name": "振兴东北", "change_pct": -0.79}, {"name": "食品", "change_pct": -1.28}]}, {"code": "002412", "name": "汉森制药", "hot_rank": 8, "hot_rank_chg": 13, "stock_cnt": 5835, "price": "11.21", "change": "10.01", "market_id": "33", "circulate_market_value": "5580842500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": -2.15}, {"name": "优化生育（三孩）", "change_pct": -1.44}, {"name": "农业种植", "change_pct": 1.16}, {"name": "医药", "change_pct": -2.77}, {"name": "流感", "change_pct": -2.31}, {"name": "大农业", "change_pct": -0.42}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 9, "hot_rank_chg": 10, "stock_cnt": 5835, "price": "21.05", "change": "9.98", "market_id": "33", "circulate_market_value": "9521731700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷储能"}, {"code": "300308", "name": "中际旭创", "hot_rank": 10, "hot_rank_chg": -7, "stock_cnt": 5835, "price": "870.22", "change": "-7.72", "market_id": "33", "circulate_market_value": "965890490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 11, "hot_rank_chg": 21, "stock_cnt": 5835, "price": "3.47", "change": "10.16", "market_id": "33", "circulate_market_value": "16210968000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.69}, {"name": "股权转让", "change_pct": -0.89}, {"name": "房地产", "change_pct": -1.2}, {"name": "云计算数据中心", "change_pct": -1.91}, {"name": "京津冀", "change_pct": -1.0}, {"name": "旅游", "change_pct": -0.1}, {"name": "国产芯片", "change_pct": -2.3}, {"name": "内存", "change_pct": -2.8}, {"name": "闪存", "change_pct": -2.86}, {"name": "IP经济/谷子经济", "change_pct": -1.05}]}, {"code": "600460", "name": "士兰微", "hot_rank": 12, "hot_rank_chg": -7, "stock_cnt": 5835, "price": "35.56", "change": "-0.92", "market_id": "17", "circulate_market_value": "59174395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 13, "hot_rank_chg": 3, "stock_cnt": 5835, "price": "14.19", "change": "7.09", "market_id": "17", "circulate_market_value": "5456730900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603958", "name": "哈森股份", "hot_rank": 14, "hot_rank_chg": 25, "stock_cnt": 5835, "price": "22.61", "change": "10.02", "market_id": "17", "circulate_market_value": "4959729600.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "苹果产业链"}, {"code": "600367", "name": "红星发展", "hot_rank": 15, "hot_rank_chg": 2, "stock_cnt": 5835, "price": "38.15", "change": "10.01", "market_id": "17", "circulate_market_value": "12283276900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "601700", "name": "风范股份", "hot_rank": 16, "hot_rank_chg": 6, "stock_cnt": 5835, "price": "7.71", "change": "9.99", "market_id": "17", "circulate_market_value": "8779818800.00", "change_type": "1", "change_section": "16", "change_days": "9", "change_reason": "特高压", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.68}, {"name": "强势人气股", "change_pct": -1.43}, {"name": "光伏", "change_pct": -0.95}, {"name": "特高压", "change_pct": -1.03}, {"name": "智能电网", "change_pct": -1.08}]}, {"code": "600403", "name": "大有能源", "hot_rank": 17, "hot_rank_chg": 18, "stock_cnt": 5835, "price": "7.30", "change": "9.94", "market_id": "17", "circulate_market_value": "17452931000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "煤炭", "xgb_concepts": [{"name": "煤炭", "change_pct": 2.12}, {"name": "强势人气股", "change_pct": -1.43}, {"name": "国企改革", "change_pct": -0.38}, {"name": "河南国企改革", "change_pct": 0.24}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 18, "hot_rank_chg": 5, "stock_cnt": 5835, "price": "28.40", "change": "-9.98", "market_id": "17", "circulate_market_value": "11388400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 19, "hot_rank_chg": -12, "stock_cnt": 5835, "price": "14.38", "change": "1.62", "market_id": "17", "circulate_market_value": "9782996900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 20, "hot_rank_chg": 45, "stock_cnt": 5835, "price": "7.82", "change": "9.99", "market_id": "33", "circulate_market_value": "3447227700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.64}, {"name": "锂电池", "change_pct": -0.43}, {"name": "新能源汽车", "change_pct": -0.72}, {"name": "两轮车", "change_pct": -0.43}, {"name": "珠宝饰品", "change_pct": 1.42}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 21, "hot_rank_chg": 24, "stock_cnt": 5835, "price": "14.07", "change": "10.01", "market_id": "33", "circulate_market_value": "6427883100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数字人民币"}, {"code": "600610", "name": "中毅达", "hot_rank": 22, "hot_rank_chg": 50, "stock_cnt": 5835, "price": "8.66", "change": "10.04", "market_id": "17", "circulate_market_value": "6137573300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "营收增长", "xgb_concepts": []}, {"code": "001337", "name": "四川黄金", "hot_rank": 23, "hot_rank_chg": 40, "stock_cnt": 5835, "price": "56.60", "change": "9.97", "market_id": "33", "circulate_market_value": "23772000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 24, "hot_rank_chg": -9, "stock_cnt": 5835, "price": "5.75", "change": "-4.17", "market_id": "33", "circulate_market_value": "203361020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.03}, {"name": "手机产业链", "change_pct": -2.19}, {"name": "超高清视频", "change_pct": -1.74}, {"name": "苹果产业链", "change_pct": -1.76}, {"name": "电竞", "change_pct": -1.16}, {"name": "半导体", "change_pct": -1.83}, {"name": "人工智能", "change_pct": -1.78}, {"name": "互联网医疗", "change_pct": -1.86}, {"name": "VR&AR", "change_pct": -2.16}, {"name": "OLED", "change_pct": -1.68}, {"name": "京津冀", "change_pct": -1.0}, {"name": "物联网", "change_pct": -1.26}, {"name": "指纹识别", "change_pct": -1.84}, {"name": "汽车零部件", "change_pct": -0.96}, {"name": "白马股", "change_pct": -0.29}, {"name": "智能制造", "change_pct": -1.67}, {"name": "小米概念股", "change_pct": -2.3}, {"name": "国产芯片", "change_pct": -2.3}, {"name": "液晶面板/LCD", "change_pct": -2.01}, {"name": "全息概念", "change_pct": -1.64}, {"name": "理想汽车概念股", "change_pct": -0.77}, {"name": "MicroLED", "change_pct": -2.41}, {"name": "钙钛矿电池", "change_pct": -0.72}, {"name": "智能手表", "change_pct": -2.7}, {"name": "MiniLED", "change_pct": -2.22}, {"name": "传感器", "change_pct": -2.15}, {"name": "大硅片", "change_pct": -0.14}, {"name": "AI PC", "change_pct": -1.55}, {"name": "华为产业链", "change_pct": -1.69}, {"name": "回购", "change_pct": -1.68}, {"name": "光电共封装CPO", "change_pct": -3.15}, {"name": "智能眼镜/MR头显", "change_pct": -2.28}, {"name": "玻璃基板封装", "change_pct": -1.55}]}, {"code": "600869", "name": "远东股份", "hot_rank": 25, "hot_rank_chg": 23, "stock_cnt": 5835, "price": "16.16", "change": "-4.49", "market_id": "17", "circulate_market_value": "35864740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 26, "hot_rank_chg": 10, "stock_cnt": 5835, "price": "10.97", "change": "10.03", "market_id": "17", "circulate_market_value": "4746429900.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "光模块胶", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.89}, {"name": "强势人气股", "change_pct": -1.43}, {"name": "光伏", "change_pct": -0.95}, {"name": "无线耳机", "change_pct": -2.23}, {"name": "华为产业链", "change_pct": -1.69}, {"name": "光伏胶膜", "change_pct": -1.09}]}, {"code": "000603", "name": "盛达资源", "hot_rank": 27, "hot_rank_chg": -9, "stock_cnt": 5835, "price": "39.86", "change": "8.88", "market_id": "33", "circulate_market_value": "26575314000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 28, "hot_rank_chg": 19, "stock_cnt": 5835, "price": "18.15", "change": "10.00", "market_id": "17", "circulate_market_value": "2904000000.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "SPD"}, {"code": "600127", "name": "金健米业", "hot_rank": 29, "hot_rank_chg": -19, "stock_cnt": 5835, "price": "8.46", "change": "3.17", "market_id": "17", "circulate_market_value": "5429486000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.5}, {"name": "农业种植", "change_pct": 1.16}, {"name": "湖南国企改革", "change_pct": 0.15}, {"name": "乡村振兴", "change_pct": 0.38}, {"name": "休闲食品", "change_pct": -1.6}, {"name": "食品", "change_pct": -1.28}, {"name": "食品安全", "change_pct": -1.29}, {"name": "社区团购", "change_pct": -1.1}, {"name": "大农业", "change_pct": -0.42}, {"name": "预制菜", "change_pct": -0.36}, {"name": "人造肉", "change_pct": -0.21}, {"name": "国企改革", "change_pct": -0.38}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 30, "hot_rank_chg": -18, "stock_cnt": 5835, "price": "60.43", "change": "-2.81", "market_id": "17", "circulate_market_value": "148273840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 31, "hot_rank_chg": -20, "stock_cnt": 5835, "price": "20.81", "change": "-1.84", "market_id": "33", "circulate_market_value": "24482316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 32, "hot_rank_chg": 5, "stock_cnt": 5835, "price": "412.00", "change": "-6.79", "market_id": "33", "circulate_market_value": "516748180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000931", "name": "中关村", "hot_rank": 33, "hot_rank_chg": 56, "stock_cnt": 5835, "price": "5.60", "change": "10.02", "market_id": "33", "circulate_market_value": "4205765400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "mRNA疫苗", "xgb_concepts": [{"name": "中药", "change_pct": -2.15}, {"name": "创新药", "change_pct": -3.75}, {"name": "养老产业", "change_pct": -0.92}, {"name": "医药", "change_pct": -2.77}, {"name": "化学原料药", "change_pct": -3.02}, {"name": "口腔", "change_pct": -2.62}]}, {"code": "002017", "name": "东信和平", "hot_rank": 34, "hot_rank_chg": 34, "stock_cnt": 5835, "price": "15.98", "change": "9.98", "market_id": "33", "circulate_market_value": "9271154800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报增长"}, {"code": "603986", "name": "兆易创新", "hot_rank": 35, "hot_rank_chg": -22, "stock_cnt": 5835, "price": "381.66", "change": "-6.70", "market_id": "17", "circulate_market_value": "255136630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 36, "hot_rank_chg": 4, "stock_cnt": 5835, "price": "11.07", "change": "3.07", "market_id": "17", "circulate_market_value": "19208453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -1.03}, {"name": "核电", "change_pct": -1.43}, {"name": "锂电池", "change_pct": -0.43}, {"name": "铜箔/覆铜板", "change_pct": -2.84}, {"name": "PCB板", "change_pct": -2.74}, {"name": "中科院系", "change_pct": -1.54}, {"name": "新能源汽车", "change_pct": -0.72}, {"name": "宁德时代概念股", "change_pct": -0.66}, {"name": "固态电池", "change_pct": 0.24}, {"name": "PET复合铜箔", "change_pct": -2.06}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 37, "hot_rank_chg": 9, "stock_cnt": 5835, "price": "27.65", "change": "5.29", "market_id": "17", "circulate_market_value": "6698765500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 38, "hot_rank_chg": 4, "stock_cnt": 5835, "price": "5.00", "change": "-2.91", "market_id": "33", "circulate_market_value": "13221216800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.43}, {"name": "云计算数据中心", "change_pct": -1.91}, {"name": "装修装饰", "change_pct": -0.73}, {"name": "装配式建筑", "change_pct": -0.76}, {"name": "破净股", "change_pct": -0.0}, {"name": "航天", "change_pct": -2.23}, {"name": "旧改", "change_pct": -0.8}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 39, "hot_rank_chg": -10, "stock_cnt": 5835, "price": "34.54", "change": "-0.58", "market_id": "17", "circulate_market_value": "711585940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 40, "hot_rank_chg": -20, "stock_cnt": 5835, "price": "20.30", "change": "-5.32", "market_id": "17", "circulate_market_value": "42458306000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 41, "hot_rank_chg": -16, "stock_cnt": 5835, "price": "22.34", "change": "7.56", "market_id": "33", "circulate_market_value": "20747314000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 42, "hot_rank_chg": -9, "stock_cnt": 5835, "price": "52.52", "change": "-3.17", "market_id": "17", "circulate_market_value": "44460981000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 43, "hot_rank_chg": -9, "stock_cnt": 5835, "price": "95.37", "change": "-5.46", "market_id": "33", "circulate_market_value": "62280008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 44, "hot_rank_chg": -16, "stock_cnt": 5835, "price": "379.19", "change": "4.29", "market_id": "17", "circulate_market_value": "154079430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 45, "hot_rank_chg": 38, "stock_cnt": 5835, "price": "4.44", "change": "9.90", "market_id": "33", "circulate_market_value": "3397224800.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": -2.15}, {"name": "股权转让", "change_pct": -0.89}, {"name": "优化生育（三孩）", "change_pct": -1.44}, {"name": "强势人气股", "change_pct": -1.43}, {"name": "医药商业", "change_pct": -1.63}, {"name": "保健品", "change_pct": -2.13}, {"name": "民营医院", "change_pct": -1.41}, {"name": "医药", "change_pct": -2.77}, {"name": "食品", "change_pct": -1.28}, {"name": "辅助生殖", "change_pct": -3.33}, {"name": "口腔", "change_pct": -2.62}, {"name": "医美", "change_pct": -2.51}, {"name": "新冠病毒防治", "change_pct": -2.31}]}, {"code": "600584", "name": "长电科技", "hot_rank": 46, "hot_rank_chg": -22, "stock_cnt": 5835, "price": "73.80", "change": "-6.07", "market_id": "17", "circulate_market_value": "132058795000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 47, "hot_rank_chg": 2, "stock_cnt": 5835, "price": "400.36", "change": "-3.56", "market_id": "33", "circulate_market_value": "66071032000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002445", "name": "中南文化", "hot_rank": 48, "hot_rank_chg": 75, "stock_cnt": 5835, "price": "3.37", "change": "10.13", "market_id": "33", "circulate_market_value": "7974276700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "重组", "xgb_concepts": [{"name": "海工装备", "change_pct": -1.1}, {"name": "VR&AR", "change_pct": -2.16}, {"name": "影视", "change_pct": -1.32}, {"name": "光伏", "change_pct": -0.95}, {"name": "复牌股", "change_pct": 5.07}, {"name": "江苏国企改革", "change_pct": -0.06}, {"name": "独角兽", "change_pct": 0.85}, {"name": "知识产权", "change_pct": -0.97}, {"name": "国企改革", "change_pct": -0.38}]}, {"code": "000723", "name": "美锦能源", "hot_rank": 49, "hot_rank_chg": 58, "stock_cnt": 5835, "price": "3.89", "change": "9.89", "market_id": "33", "circulate_market_value": "17097235000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "煤焦一体化", "xgb_concepts": [{"name": "煤炭", "change_pct": 2.12}, {"name": "无人驾驶", "change_pct": -1.39}, {"name": "新能源整车", "change_pct": -1.04}, {"name": "重卡", "change_pct": -1.91}, {"name": "天然气", "change_pct": -0.92}, {"name": "氢能源/燃料电池", "change_pct": -1.05}, {"name": "汽车整车", "change_pct": -1.34}, {"name": "新能源汽车", "change_pct": -0.72}, {"name": "机器人", "change_pct": -1.36}, {"name": "煤化工", "change_pct": 1.12}, {"name": "乙二醇", "change_pct": 0.12}, {"name": "碳基材料", "change_pct": -1.29}, {"name": "超级电容", "change_pct": -0.96}]}, {"code": "000636", "name": "风华高科", "hot_rank": 50, "hot_rank_chg": -20, "stock_cnt": 5835, "price": "51.91", "change": "-5.05", "market_id": "33", "circulate_market_value": "59566204000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 51, "hot_rank_chg": -10, "stock_cnt": 5835, "price": "12.57", "change": "2.95", "market_id": "33", "circulate_market_value": "11731852600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.43}, {"name": "新疆国企改革", "change_pct": 0.24}, {"name": "新疆概念", "change_pct": 0.06}, {"name": "光伏", "change_pct": -0.95}, {"name": "风电", "change_pct": -1.31}, {"name": "储能", "change_pct": -0.78}, {"name": "国企改革", "change_pct": -0.38}]}, {"code": "002407", "name": "多氟多", "hot_rank": 52, "hot_rank_chg": -14, "stock_cnt": 5835, "price": "34.57", "change": "-4.37", "market_id": "33", "circulate_market_value": "37367345000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 53, "hot_rank_chg": -1, "stock_cnt": 5835, "price": "57.85", "change": "4.92", "market_id": "33", "circulate_market_value": "21317915000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 54, "hot_rank_chg": -28, "stock_cnt": 5835, "price": "39.87", "change": "-5.16", "market_id": "17", "circulate_market_value": "158347170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600785", "name": "新华百货", "hot_rank": 55, "hot_rank_chg": 79, "stock_cnt": 5835, "price": "10.71", "change": "9.96", "market_id": "17", "circulate_market_value": "3383115400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "回购", "xgb_concepts": [{"name": "新零售", "change_pct": -0.41}, {"name": "冷链", "change_pct": -1.08}, {"name": "宁夏概念", "change_pct": 0.03}, {"name": "IP经济/谷子经济", "change_pct": -1.05}, {"name": "首发经济", "change_pct": -0.56}]}, {"code": "000925", "name": "众合科技", "hot_rank": 56, "hot_rank_chg": 61, "stock_cnt": 5835, "price": "8.97", "change": "10.06", "market_id": "33", "circulate_market_value": "6020238300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "牛散入股", "xgb_concepts": [{"name": "数字孪生", "change_pct": -0.89}, {"name": "半导体", "change_pct": -1.83}, {"name": "无人驾驶", "change_pct": -1.39}, {"name": "一带一路", "change_pct": -0.68}, {"name": "人工智能", "change_pct": -1.78}, {"name": "云计算数据中心", "change_pct": -1.91}, {"name": "高铁轨交", "change_pct": -0.81}, {"name": "磁悬浮", "change_pct": -0.48}, {"name": "大数据", "change_pct": -1.84}, {"name": "智慧城市", "change_pct": -1.26}, {"name": "高校系", "change_pct": -0.47}, {"name": "机器人", "change_pct": -1.36}, {"name": "智能制造", "change_pct": -1.67}, {"name": "工业互联网", "change_pct": -1.65}, {"name": "数字经济", "change_pct": -1.38}, {"name": "国产芯片", "change_pct": -2.3}, {"name": "腾讯概念股", "change_pct": -1.59}, {"name": "激光雷达", "change_pct": -2.11}, {"name": "元宇宙", "change_pct": -1.78}, {"name": "虚拟数字人", "change_pct": -1.52}, {"name": "东数西算/算力", "change_pct": -2.01}, {"name": "数据要素", "change_pct": -1.37}, {"name": "新冠病毒防治", "change_pct": -2.31}, {"name": "华为云·鲲鹏", "change_pct": -1.69}, {"name": "智慧灯杆", "change_pct": -0.19}, {"name": "华为产业链", "change_pct": -1.69}, {"name": "时空大数据", "change_pct": -1.65}, {"name": "多模态", "change_pct": -2.15}, {"name": "低空经济", "change_pct": -1.09}]}, {"code": "002104", "name": "恒宝股份", "hot_rank": 57, "hot_rank_chg": 7, "stock_cnt": 5835, "price": "11.51", "change": "7.17", "market_id": "33", "circulate_market_value": "6902662100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.68}, {"name": "金融科技", "change_pct": -1.14}, {"name": "移动支付", "change_pct": -0.45}, {"name": "物联网", "change_pct": -1.26}, {"name": "数字经济", "change_pct": -1.38}, {"name": "电子身份证", "change_pct": -0.05}, {"name": "ETC", "change_pct": -1.37}, {"name": "数字人民币", "change_pct": -0.58}, {"name": "智慧政务", "change_pct": -1.13}, {"name": "eSIM", "change_pct": 1.05}, {"name": "华为产业链", "change_pct": -1.69}, {"name": "区块链", "change_pct": -1.19}, {"name": "RWA", "change_pct": 0.63}]}, {"code": "002041", "name": "登海种业", "hot_rank": 58, "hot_rank_chg": 50, "stock_cnt": 5835, "price": "10.19", "change": "10.04", "market_id": "33", "circulate_market_value": "8967200000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "转基因", "xgb_concepts": [{"name": "农业种植", "change_pct": 1.16}, {"name": "转基因", "change_pct": 2.09}, {"name": "乡村振兴", "change_pct": 0.38}, {"name": "大农业", "change_pct": -0.42}, {"name": "人造肉", "change_pct": -0.21}, {"name": "大豆", "change_pct": 2.37}]}, {"code": "603823", "name": "百合花", "hot_rank": 59, "hot_rank_chg": -2, "stock_cnt": 5835, "price": "69.98", "change": "-9.99", "market_id": "17", "circulate_market_value": "29137412000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 60, "hot_rank_chg": 38, "stock_cnt": 5835, "price": "18.81", "change": "8.54", "market_id": "17", "circulate_market_value": "7880780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 61, "hot_rank_chg": -17, "stock_cnt": 5835, "price": "155.84", "change": "-4.31", "market_id": "17", "circulate_market_value": "385435990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 62, "hot_rank_chg": -31, "stock_cnt": 5835, "price": "193.60", "change": "-3.72", "market_id": "33", "circulate_market_value": "268391890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 63, "hot_rank_chg": 7, "stock_cnt": 5835, "price": "36.50", "change": "-1.49", "market_id": "17", "circulate_market_value": "131927182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 64, "hot_rank_chg": -5, "stock_cnt": 5835, "price": "72.80", "change": "-9.88", "market_id": "17", "circulate_market_value": "9513009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 65, "hot_rank_chg": -4, "stock_cnt": 5835, "price": "8.07", "change": "4.53", "market_id": "33", "circulate_market_value": "5871604500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -1.08}, {"name": "装配式建筑", "change_pct": -0.76}, {"name": "风电", "change_pct": -1.31}, {"name": "环氧丙烷", "change_pct": -1.31}, {"name": "乡村振兴", "change_pct": 0.38}, {"name": "建筑节能", "change_pct": -1.0}, {"name": "旧改", "change_pct": -0.8}]}, {"code": "600519", "name": "贵州茅台", "hot_rank": 66, "hot_rank_chg": 15, "stock_cnt": 5835, "price": "1304.66", "change": "2.50", "market_id": "17", "circulate_market_value": "1630931500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600508", "name": "上海能源", "hot_rank": 67, "hot_rank_chg": 102, "stock_cnt": 5835, "price": "9.88", "change": "10.02", "market_id": "17", "circulate_market_value": "9996635400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报增长", "xgb_concepts": [{"name": "煤炭", "change_pct": 2.12}, {"name": "央企改革", "change_pct": -0.38}, {"name": "破净股", "change_pct": -0.0}, {"name": "超超临界发电", "change_pct": 0.1}, {"name": "国企改革", "change_pct": -0.38}]}, {"code": "603118", "name": "共进股份", "hot_rank": 68, "hot_rank_chg": -12, "stock_cnt": 5835, "price": "16.01", "change": "-10.01", "market_id": "17", "circulate_market_value": "12604295300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300313", "name": "天山生物", "hot_rank": 69, "hot_rank_chg": -16, "stock_cnt": 5835, "price": "15.36", "change": "20.00", "market_id": "33", "circulate_market_value": "3031338800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "肉牛全产业链"}, {"code": "300139", "name": "晓程科技", "hot_rank": 71, "hot_rank_chg": -44, "stock_cnt": 5835, "price": "58.33", "change": "8.66", "market_id": "33", "circulate_market_value": "13629343000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 72, "hot_rank_chg": -21, "stock_cnt": 5835, "price": "121.78", "change": "-3.33", "market_id": "17", "circulate_market_value": "43928896000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002506", "name": "协鑫集成", "hot_rank": 73, "hot_rank_chg": 11, "stock_cnt": 5835, "price": "2.78", "change": "6.51", "market_id": "33", "circulate_market_value": "16247536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": -0.38}, {"name": "光伏", "change_pct": -0.95}, {"name": "储能", "change_pct": -0.78}, {"name": "乡村振兴", "change_pct": 0.38}, {"name": "颗粒硅", "change_pct": -0.25}, {"name": "BIPV概念", "change_pct": -0.19}, {"name": "低价股", "change_pct": -0.56}, {"name": "钙钛矿电池", "change_pct": -0.72}, {"name": "异质结电池HJT", "change_pct": -0.88}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 74, "hot_rank_chg": -16, "stock_cnt": 5835, "price": "3.94", "change": "-9.43", "market_id": "33", "circulate_market_value": "8274606200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.15}, {"name": "强势人气股", "change_pct": -1.43}, {"name": "维生素", "change_pct": -3.76}, {"name": "基因测序", "change_pct": -2.56}, {"name": "民营医院", "change_pct": -1.41}, {"name": "医药", "change_pct": -2.77}, {"name": "化学原料药", "change_pct": -3.02}, {"name": "PD-1抑制剂", "change_pct": -4.81}]}, {"code": "301152", "name": "天力锂能", "hot_rank": 75, "hot_rank_chg": 69, "stock_cnt": 5835, "price": "23.32", "change": "20.02", "market_id": "33", "circulate_market_value": "1655235100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池"}, {"code": "603626", "name": "科森科技", "hot_rank": 76, "hot_rank_chg": 20, "stock_cnt": 5835, "price": "19.48", "change": "4.45", "market_id": "17", "circulate_market_value": "10809056400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 77, "hot_rank_chg": 9, "stock_cnt": 5835, "price": "9.99", "change": "-7.16", "market_id": "33", "circulate_market_value": "2841971300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -1.0}, {"name": "ST摘帽", "change_pct": -1.87}, {"name": "强势人气股", "change_pct": -1.43}, {"name": "教育", "change_pct": -1.08}, {"name": "阿里巴巴概念股", "change_pct": -1.83}, {"name": "职业教育", "change_pct": -1.37}, {"name": "在线教育", "change_pct": -1.19}, {"name": "华为鸿蒙", "change_pct": -1.53}, {"name": "华为产业链", "change_pct": -1.69}, {"name": "智谱AI", "change_pct": -2.5}]}, {"code": "002882", "name": "金龙羽", "hot_rank": 78, "hot_rank_chg": 75, "stock_cnt": 5835, "price": "23.76", "change": "10.00", "market_id": "33", "circulate_market_value": "5868483300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池"}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 79, "hot_rank_chg": -29, "stock_cnt": 5835, "price": "48.77", "change": "-1.33", "market_id": "17", "circulate_market_value": "81148958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003035", "name": "南网能源", "hot_rank": 80, "hot_rank_chg": 58, "stock_cnt": 5835, "price": "5.73", "change": "9.98", "market_id": "33", "circulate_market_value": "21704545000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "虚拟电厂", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.38}, {"name": "电力体制改革", "change_pct": 0.43}, {"name": "光伏", "change_pct": -0.95}, {"name": "风电", "change_pct": -1.31}, {"name": "碳中和", "change_pct": -0.28}, {"name": "BIPV概念", "change_pct": -0.19}, {"name": "建筑节能", "change_pct": -1.0}, {"name": "国企改革", "change_pct": -0.38}, {"name": "智能电网", "change_pct": -1.08}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 81, "hot_rank_chg": -38, "stock_cnt": 5835, "price": "34.49", "change": "-5.35", "market_id": "33", "circulate_market_value": "98643907000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002277", "name": "友阿股份", "hot_rank": 82, "hot_rank_chg": 112, "stock_cnt": 5835, "price": "6.44", "change": "10.09", "market_id": "33", "circulate_market_value": "8978472800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "功率半导体", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.78}, {"name": "筹码集中", "change_pct": -1.0}, {"name": "资产重组", "change_pct": -1.31}, {"name": "半导体", "change_pct": -1.83}, {"name": "股权转让", "change_pct": -0.89}, {"name": "新零售", "change_pct": -0.41}, {"name": "工业自动化", "change_pct": -1.66}, {"name": "机器人", "change_pct": -1.36}, {"name": "智能制造", "change_pct": -1.67}, {"name": "长寿药NMN", "change_pct": -3.25}, {"name": "字节跳动概念股", "change_pct": -1.54}, {"name": "网红/MCN", "change_pct": -1.75}, {"name": "免税店概念", "change_pct": -0.04}, {"name": "供应链金融", "change_pct": -0.62}]}, {"code": "601138", "name": "工业富联", "hot_rank": 83, "hot_rank_chg": -12, "stock_cnt": 5835, "price": "60.40", "change": "-3.88", "market_id": "17", "circulate_market_value": "1198583170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 84, "hot_rank_chg": -24, "stock_cnt": 5835, "price": "14.17", "change": "-0.77", "market_id": "17", "circulate_market_value": "20868256000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000065", "name": "北方国际", "hot_rank": 85, "hot_rank_chg": 120, "stock_cnt": 5835, "price": "9.98", "change": "10.03", "market_id": "33", "circulate_market_value": "10628885400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报增长", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.38}, {"name": "一带一路", "change_pct": -0.68}, {"name": "军工集团", "change_pct": -1.0}, {"name": "风电", "change_pct": -1.31}, {"name": "地下管廊", "change_pct": -0.56}, {"name": "外贸受益概念", "change_pct": -0.35}, {"name": "军工", "change_pct": -1.44}, {"name": "大基建", "change_pct": -0.23}, {"name": "新型城镇化", "change_pct": -0.45}, {"name": "超超临界发电", "change_pct": 0.1}, {"name": "国企改革", "change_pct": -0.38}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 86, "hot_rank_chg": 11, "stock_cnt": 5835, "price": "53.72", "change": "-1.70", "market_id": "33", "circulate_market_value": "393503180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 87, "hot_rank_chg": -7, "stock_cnt": 5835, "price": "38.05", "change": "-4.20", "market_id": "17", "circulate_market_value": "55628902000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 88, "hot_rank_chg": -15, "stock_cnt": 5835, "price": "12.72", "change": "-6.06", "market_id": "17", "circulate_market_value": "16322286000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -1.78}, {"name": "强势人气股", "change_pct": -1.43}, {"name": "智能制造", "change_pct": -1.67}, {"name": "工业互联网", "change_pct": -1.65}, {"name": "培育钻石", "change_pct": -1.78}, {"name": "金刚线", "change_pct": -0.81}, {"name": "国资入股", "change_pct": -0.61}, {"name": "深地经济", "change_pct": -1.11}]}, {"code": "603200", "name": "上海洗霸", "hot_rank": 89, "hot_rank_chg": 96, "stock_cnt": 5835, "price": "39.13", "change": "10.01", "market_id": "17", "circulate_market_value": "6866536400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池"}, {"code": "600186", "name": "莲花控股", "hot_rank": 90, "hot_rank_chg": -13, "stock_cnt": 5835, "price": "11.33", "change": "-2.50", "market_id": "17", "circulate_market_value": "20270937000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.32}, {"name": "纯碱", "change_pct": 0.61}, {"name": "食品", "change_pct": -1.28}, {"name": "土壤修复", "change_pct": -0.85}, {"name": "东数西算/算力", "change_pct": -2.01}, {"name": "OpenClaw概念", "change_pct": -2.36}, {"name": "DeepSeek概念股", "change_pct": -2.39}]}, {"code": "002975", "name": "博杰股份", "hot_rank": 91, "hot_rank_chg": 29, "stock_cnt": 5835, "price": "108.88", "change": "8.28", "market_id": "33", "circulate_market_value": "15054088000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 92, "hot_rank_chg": -16, "stock_cnt": 5835, "price": "18.99", "change": "1.99", "market_id": "17", "circulate_market_value": "331581390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 93, "hot_rank_chg": -39, "stock_cnt": 5835, "price": "30.82", "change": "-8.19", "market_id": "33", "circulate_market_value": "24114651000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 94, "hot_rank_chg": -27, "stock_cnt": 5835, "price": "16.88", "change": "-3.10", "market_id": "33", "circulate_market_value": "56143328000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 95, "hot_rank_chg": -40, "stock_cnt": 5835, "price": "249.50", "change": "-8.63", "market_id": "33", "circulate_market_value": "271552820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 96, "hot_rank_chg": -30, "stock_cnt": 5835, "price": "37.02", "change": "-3.29", "market_id": "17", "circulate_market_value": "30682589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601958", "name": "金钼股份", "hot_rank": 97, "hot_rank_chg": -3, "stock_cnt": 5835, "price": "23.29", "change": "6.15", "market_id": "17", "circulate_market_value": "75147616000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 98, "hot_rank_chg": -3, "stock_cnt": 5835, "price": "5.89", "change": "-0.34", "market_id": "17", "circulate_market_value": "73012965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.38}, {"name": "核电", "change_pct": -1.43}, {"name": "强势人气股", "change_pct": -1.43}, {"name": "电力体制改革", "change_pct": 0.43}, {"name": "水电", "change_pct": 0.45}, {"name": "火电", "change_pct": 0.61}, {"name": "光伏", "change_pct": -0.95}, {"name": "风电", "change_pct": -1.31}, {"name": "国企改革", "change_pct": -0.38}, {"name": "算电协同", "change_pct": -0.18}]}, {"code": "605286", "name": "同力天启", "hot_rank": 99, "hot_rank_chg": 124, "stock_cnt": 5835, "price": "27.41", "change": "9.99", "market_id": "17", "circulate_market_value": "4604880000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算电协同"}, {"code": "002084", "name": "海鸥住工", "hot_rank": 100, "hot_rank_chg": 137, "stock_cnt": 5835, "price": "3.95", "change": "10.03", "market_id": "33", "circulate_market_value": "2546306000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "控制权拟变更", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.68}, {"name": "装修装饰", "change_pct": -0.73}, {"name": "装配式建筑", "change_pct": -0.76}, {"name": "家具家居", "change_pct": -0.82}, {"name": "复牌股", "change_pct": 5.07}, {"name": "智能制造", "change_pct": -1.67}, {"name": "3D打印", "change_pct": -1.72}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.43}, {"name": "旧改", "change_pct": -0.8}]}];
const LIMIT_UP_POOL = [{"code": "603032", "name": "德新科技", "price": 20.22, "change_pct": 10.01, "reason": "公司通过控股子公司安徽汉普斯布局精密行星减速器、电机业务，产品已应用于工业机器人、仓储机器人等领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.7, "first_limit_up": 1787535430, "break_limit_up_times": 0}, {"code": "002084", "name": "海鸥住工", "price": 3.95, "change_pct": 10.03, "reason": "公司主营业务聚焦在卫浴及厨房产品整组龙头及部品部件的制造服务与销售，控股股东拟变更为博泰车联", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 0.76, "first_limit_up": 1787534700, "break_limit_up_times": 0}, {"code": "002015", "name": "协鑫能科", "price": 15.57, "change_pct": 10.04, "reason": "1、公司签约乌兰察布绿色算电协同项目；\n2、公司新能源发电聚焦光伏电站开发运营，光伏装机 2374.88MW（分布式 1910.54MW、集中式 464.34MW），打造 “鑫零碳”“鑫阳光” 品牌光伏产品", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.96, "first_limit_up": 1787534700, "break_limit_up_times": 0}, {"code": "603958", "name": "哈森股份", "price": 22.61, "change_pct": 10.02, "reason": "公司与关联方等拟共同出资1亿元设立参股公司，主营机器人零部件及产品销售、技术服务", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 19.91, "first_limit_up": 1787535097, "break_limit_up_times": 3}, {"code": "001268", "name": "联合精密", "price": 22.42, "change_pct": 10.01, "reason": "1、公司主营精密机械零部件业务，正在建设年产3万吨空调压缩机零部件、汽车零部件、机器人零部件、光刻机零部件铸件项目；\n2、公司已完成收购成都迈特航空51%股权，迈特航空为中航工业旗下成飞、沈飞等主机厂供应商，正式切入航空精密零部件领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.22, "first_limit_up": 1787535147, "break_limit_up_times": 1}, {"code": "600604", "name": "市北高新", "price": 4.94, "change_pct": 10.02, "reason": "公司为央视融媒体产业投资基金有限合伙人，占基金2.69%份额，央视融媒体基金于2023年11月投资江苏天兵航天科技股份有限公司、于2023年12月投资长江存储控股股份有限公司、于2024年1月投资上海垣信卫星科技有限公司", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.0, "first_limit_up": 1787535000, "break_limit_up_times": 0}, {"code": "000931", "name": "中 关 村", "price": 5.6, "change_pct": 10.02, "reason": "公司拟与海徕科在创新抗体药物研发等领域开展合作", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 14.99, "first_limit_up": 1787534700, "break_limit_up_times": 1}, {"code": "603089", "name": "正裕工业", "price": 10.53, "change_pct": 10.03, "reason": "中国汽车零部件减震器行业龙头；公司丝杠产品研发中，设备全进口且与丝杠高度重合，有能力做丝杠", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.49, "first_limit_up": 1787535373, "break_limit_up_times": 0}, {"code": "601083", "name": "锦江航运", "price": 13.11, "change_pct": 9.98, "reason": "公司主要从事国际、国内海上集装箱运输业务，多年来持续深耕东北亚、东南亚和国内航线\n", "plates": ["航运"], "limit_up_days": 1, "turnover_ratio": 22.64, "first_limit_up": 1787547652, "break_limit_up_times": 2}, {"code": "000017", "name": "深中华A", "price": 7.82, "change_pct": 9.99, "reason": "公司主要业务为自行车、锂电池材料和珠宝黄金业务", "plates": ["黄金"], "limit_up_days": 3, "turnover_ratio": 2.01, "first_limit_up": 1787534700, "break_limit_up_times": 0}, {"code": "603330", "name": "天洋新材", "price": 10.97, "change_pct": 10.03, "reason": "公司电子胶板块光模块透镜固定用胶、底填胶等产品已经进入半导体及汽车电子领域小批量供货", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 27.02, "first_limit_up": 1787537092, "break_limit_up_times": 8}, {"code": "000925", "name": "众合科技", "price": 8.97, "change_pct": 10.06, "reason": "公司主营城市智慧交通等业务，中报较一季报减亏", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.76, "first_limit_up": 1787534700, "break_limit_up_times": 0}, {"code": "605286", "name": "同力天启", "price": 27.41, "change_pct": 9.99, "reason": "公司此前与天启鸿源一起同甘肃省庆阳市人民政府成功签署战略合作框架协议，项目建成后， 储能电站将为庆阳“东数西算”产业园区的数据中心直供绿色电力，实现“算电协同”，并在保证供电可靠性的前提下，实现部分备用电源的功用，提高算力中心绿电占比，进一步降低算力中心能耗成本", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.72, "first_limit_up": 1787535170, "break_limit_up_times": 1}, {"code": "000620", "name": "盈新发展", "price": 3.47, "change_pct": 10.16, "reason": "公司拟5.2亿元收购长兴半导体60%股权，切入存储芯片领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.12, "first_limit_up": 1787535237, "break_limit_up_times": 1}, {"code": "003040", "name": "楚天龙", "price": 14.07, "change_pct": 10.01, "reason": "国内较早从事数字人民币相关技术研究与产品开发的企业之一", "plates": ["数字人民币"], "limit_up_days": 2, "turnover_ratio": 11.15, "first_limit_up": 1787535117, "break_limit_up_times": 12}, {"code": "002580", "name": "圣阳股份", "price": 21.05, "change_pct": 9.98, "reason": "1、公司主要产品包括锂离子电池及电源系统、新能源系统集成产品及服务等，主要用于网络能源、智慧储能和绿色动力应用领域；\n2、公司提供储能电源、储能系统和一体化解决方案，推出了涵盖户用储能、工商业储能、大型储能系统等全系列储能产品", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 12.83, "first_limit_up": 1787535453, "break_limit_up_times": 1}, {"code": "000065", "name": "北方国际", "price": 9.98, "change_pct": 10.03, "reason": "北方工业公司旗下平台型国际工程承包商及民品业务整合平台", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.8, "first_limit_up": 1787534700, "break_limit_up_times": 9}, {"code": "002445", "name": "中南文化", "price": 3.37, "change_pct": 10.13, "reason": "公司拟收购江阴热电及苏龙热电部分股权", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 0.2, "first_limit_up": 1787534700, "break_limit_up_times": 0}, {"code": "002052", "name": "同洲电子", "price": 9.08, "change_pct": 10.06, "reason": "公司高功率服务器电源已批量出货，氮化镓版本完成小批量验证，峰值效率>98%，切入AI服务器及数据中心供应链", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.67, "first_limit_up": 1787551503, "break_limit_up_times": 0}, {"code": "605198", "name": "安德利", "price": 64.79, "change_pct": 10.0, "reason": "公司拟收购甬强科技事项尚在推进中，交易完成后将形成浓缩果汁与电子信息互连材料双主业格局；标的公司主营覆铜板材料，已完成M4至M9全系列高速板材产品布局", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.88, "first_limit_up": 1787536039, "break_limit_up_times": 1}, {"code": "002041", "name": "登海种业", "price": 10.19, "change_pct": 10.04, "reason": "国内杂交玉米种子龙头企业", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.16, "first_limit_up": 1787535852, "break_limit_up_times": 0}, {"code": "002906", "name": "华阳集团", "price": 28.23, "change_pct": 10.02, "reason": "智能座舱龙头，实控人拟变更为绵阳市国资委", "plates": ["股权转让", "无人驾驶"], "limit_up_days": 1, "turnover_ratio": 0.42, "first_limit_up": 1787534700, "break_limit_up_times": 0}, {"code": "003035", "name": "南网能源", "price": 5.73, "change_pct": 9.98, "reason": "南方电网旗下；公为智能电网提供区域清洁能源的规划、投资、建设及运营等服务 ；预计2025年盈利3亿元-3.6亿元，同比扭亏", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.18, "first_limit_up": 1787536086, "break_limit_up_times": 4}, {"code": "600594", "name": "益佰制药", "price": 4.09, "change_pct": 9.95, "reason": "主要涵盖抗肿瘤类、心血管类和镇咳类三大领域，其中中药注射剂艾迪注射液是公司核心产品，与复方斑蝥胶囊适用于肝癌、肺癌等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.6, "first_limit_up": 1787535319, "break_limit_up_times": 2}, {"code": "600367", "name": "红星发展", "price": 38.15, "change_pct": 10.01, "reason": "公司生产的高纯碳酸钡产品以更低杂质和纳米级粒径管控主要应用在液晶玻璃基板行业；康宁为公司直接客户", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 23.5, "first_limit_up": 1787538371, "break_limit_up_times": 19}, {"code": "002716", "name": "湖南白银", "price": 11.46, "change_pct": 9.98, "reason": "公司主营业务以白银冶炼和深加工为主，并综合回收黄金等有价金属", "plates": ["黄金"], "limit_up_days": 2, "turnover_ratio": 25.33, "first_limit_up": 1787537670, "break_limit_up_times": 2}, {"code": "002412", "name": "汉森制药", "price": 11.21, "change_pct": 10.01, "reason": "公司主营消化系统和心脑血管中药生产企业", "plates": ["医药"], "limit_up_days": 4, "turnover_ratio": 7.33, "first_limit_up": 1787535006, "break_limit_up_times": 0}, {"code": "002277", "name": "友阿股份", "price": 6.44, "change_pct": 10.09, "reason": "公司正全力推进收购深圳尚阳通100%股权，交易完成后将形成“百货零售+半导体”双主业格局，标的已量产车规级SiC功率器件", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.96, "first_limit_up": 1787535306, "break_limit_up_times": 5}, {"code": "002172", "name": "澳洋健康", "price": 4.44, "change_pct": 9.9, "reason": "子公司江苏澳洋医药物流有限公司具体经营内容包括中药材配送、销售业务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 16.14, "first_limit_up": 1787537223, "break_limit_up_times": 0}, {"code": "300313", "name": "天山生物", "price": 15.36, "change_pct": 20.0, "reason": "我国最大的牛品种改良产品及服务提供商之一；公司主要业务为种牛、奶牛的养殖、销售和进出口，主营涵盖生鲜牛乳的收购和销售，牛奶直接销售给各大乳品加工企业", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 23.49, "first_limit_up": 1787540322, "break_limit_up_times": 0}, {"code": "002882", "name": "金龙羽", "price": 23.76, "change_pct": 10.0, "reason": "公司固态电解质、半固态电芯已进入中试试验；全资子公司惠州金龙羽投资3亿元与锦添翼共同开发固态电池相关技术，锦添翼实际控制人李新禄及其研究团队在锂离子电池领域积累了20多年的研究基础，已成功掌握了氧化物固态电解质的宏量制备、硅碳负极材料的批量化生产、固态电芯的原位集成等研究成果", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 5.77, "first_limit_up": 1787535552, "break_limit_up_times": 0}, {"code": "002620", "name": "*ST瑞和", "price": 5.71, "change_pct": 10.02, "reason": "公司能否进入重整程序存在重大不确定性", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.34, "first_limit_up": 1787547951, "break_limit_up_times": 0}, {"code": "603200", "name": "上海洗霸", "price": 39.13, "change_pct": 10.01, "reason": "公司应用于eVTOL的高比能软包锂离子固态电池已设计完成", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 1.92, "first_limit_up": 1787535282, "break_limit_up_times": 0}, {"code": "603565", "name": "中谷物流", "price": 13.52, "change_pct": 10.01, "reason": "公司为国内排名前列的集装箱物流企业，综合运力排名全球第13名、国内前三", "plates": ["航运"], "limit_up_days": 1, "turnover_ratio": 2.62, "first_limit_up": 1787537542, "break_limit_up_times": 1}, {"code": "600272", "name": "开开实业", "price": 18.15, "change_pct": 10.0, "reason": "公司医药板块主要是中、西成药的批发、零售及以中华老字号“雷允上”为品牌的中医药药学服务和自主品牌“上雷”牌高档滋补品（枫斗、虫草、燕窝、海参等）的销售", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 31.86, "first_limit_up": 1787549634, "break_limit_up_times": 4}, {"code": "301152", "name": "天力锂能", "price": 23.32, "change_pct": 20.02, "reason": "国内主要的锂电池三元材料供应商之一；公司研发的9系高镍产品目前在固态电池的头部公司完成了小试及中试测试，搭配固态及半固态电池体系发挥出了良好的电池性能，电池包能量密度≥400wh/kg", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 20.02, "first_limit_up": 1787535330, "break_limit_up_times": 8}, {"code": "601700", "name": "风范股份", "price": 7.71, "change_pct": 9.99, "reason": "公司中标约1.29亿元南方电网项目", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 14.54, "first_limit_up": 1787536445, "break_limit_up_times": 0}, {"code": "000723", "name": "美锦能源", "price": 3.89, "change_pct": 9.89, "reason": "全国较大的独立商品焦和炼焦煤生产商；公司拥有储量丰富的优质煤炭和煤层气资源，具备“煤-焦-气-化-氢”一体化的完整产业链", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 4.15, "first_limit_up": 1787535603, "break_limit_up_times": 1}, {"code": "601212", "name": "白银有色", "price": 6.7, "change_pct": 10.02, "reason": "公司是我国多品种有色金属综合生产基地，具有年产白银500吨的生产能力，有年产金15吨的生产能力", "plates": ["黄金"], "limit_up_days": 2, "turnover_ratio": 2.95, "first_limit_up": 1787535045, "break_limit_up_times": 6}, {"code": "600610", "name": "中毅达", "price": 8.66, "change_pct": 10.04, "reason": "公司主要产品包括工业用季戊四醇、工业用双季戊四醇", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 12.0, "first_limit_up": 1787548691, "break_limit_up_times": 0}, {"code": "600403", "name": "大有能源", "price": 7.3, "change_pct": 9.94, "reason": "河南能源集团旗下煤炭企业；此前河南省委、省政府决定对间接控股股东河南能源集团和中国平煤神马控股集团实施战略重组", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 6.2, "first_limit_up": 1787552218, "break_limit_up_times": 0}, {"code": "002651", "name": "利君股份", "price": 8.61, "change_pct": 9.96, "reason": "全资子公司成都德坤航空设备制造有限公司主营航空航天零部件制造业务，德坤航空参与的长征系列火箭产品及朱雀系列火箭产品应用于商业航天领域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.12, "first_limit_up": 1787536551, "break_limit_up_times": 0}, {"code": "603105", "name": "芯能科技", "price": 7.74, "change_pct": 9.94, "reason": "工业屋顶分布式光伏开发领域龙头，公司表示参与国家电力改革和电力市场化交易，探寻分布式光伏发电实现隔墙售电将带来的发展新机遇", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.54, "first_limit_up": 1787536238, "break_limit_up_times": 1}, {"code": "002731", "name": "*ST萃华", "price": 1.28, "change_pct": 10.34, "reason": "“中华老字号”珠宝企业，主营业务为珠宝饰品，兼营铂金和镶嵌饰品", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 29.81, "first_limit_up": 1787553543, "break_limit_up_times": 2}, {"code": "002017", "name": "东信和平", "price": 15.98, "change_pct": 9.98, "reason": "1、数字身份安全产品解决方案提供商和服务商；\n2、公司适配北斗/天通的eSIM模组，支持终端直连卫星", "plates": ["数字人民币"], "limit_up_days": 2, "turnover_ratio": 7.45, "first_limit_up": 1787535060, "break_limit_up_times": 8}, {"code": "600785", "name": "新华百货", "price": 10.71, "change_pct": 9.96, "reason": "宁夏地区最大的商业零售企业，拟斥资2亿元至4亿元回购公司股份", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 5.02, "first_limit_up": 1787534700, "break_limit_up_times": 5}, {"code": "600508", "name": "上海能源", "price": 9.88, "change_pct": 10.02, "reason": "实控人为中煤集团，在江苏徐州生产基地拥有三对煤炭生产矿井，年核定生产能力805万吨，煤炭品种为1/3焦煤、气煤和肥煤，是优质炼焦配煤和动力煤", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 3.54, "first_limit_up": 1787536369, "break_limit_up_times": 2}, {"code": "600613", "name": "神奇制药", "price": 9.9, "change_pct": 10.0, "reason": "公司拥有中国驰名商标“神奇”品牌，其中枇杷止咳颗粒、强力枇杷露等较为知名", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 20.36, "first_limit_up": 1787535389, "break_limit_up_times": 1}];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600745": "ST/风险警示股"};