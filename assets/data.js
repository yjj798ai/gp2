const UPDATE_TIME = "2026-08-24 03:50";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -2.81,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "黄金概念",
    "rise": 0.87,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.46,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续276天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "粮食概念",
    "rise": 1.22,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "存储芯片",
    "rise": -2.76,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续229天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "算力租赁",
    "rise": -2.31,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续140天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "转基因",
    "rise": 2.08,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "PCB概念",
    "rise": -3.28,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "数字货币",
    "rise": -1.02,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "商业航天",
    "rise": -2.46,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续205天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "AI应用",
    "rise": -2.14,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续34天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "MLCC概念",
    "rise": -3.84,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "人形机器人",
    "rise": -2.12,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续440天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "光纤概念",
    "rise": -2.69,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "固态电池",
    "rise": -1.22,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "锂电池概念",
    "rise": -1.23,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "CRO概念",
    "rise": -3.69,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 1,
    "etfName": "生物科技ETF",
    "code": "885927"
  },
  {
    "name": "小金属概念",
    "rise": -0.23,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "有色ETF",
    "code": "885552"
  },
  {
    "name": "液冷服务器",
    "rise": -2.11,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "玉米",
    "rise": 1.37,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  }
];
const THS_EVENTS = [
  {
    "title": "黄金升破4600美元/盎司！站上5月中旬以来最高水平",
    "desc": "",
    "heat": 146109,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "黄金概念",
      "白银"
    ],
    "stocks": [
      {
        "name": "恒星科技",
        "code": "002132",
        "chg": 10.062893
      }
    ]
  },
  {
    "title": "阿里巴巴拟配售800亿港元新股 募资全部投入AI能力建设",
    "desc": "",
    "heat": 113131,
    "direction": "AI算力",
    "themes": [
      "东数西算(算力)",
      "数据中心(AIDC)",
      "阿里巴巴概念",
      "阿里系算力"
    ],
    "stocks": [
      {
        "name": "蘅东光",
        "code": "920045",
        "chg": 13.950534
      }
    ]
  },
  {
    "title": "固态电池领域首个国际标准立项！相关概念多股涨停",
    "desc": "",
    "heat": 82465,
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
    "heat": 61014,
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
        "name": "秋乐种业",
        "code": "920087",
        "chg": 13.805186
      }
    ]
  },
  {
    "title": "LME期锌上涨1.7%，报3822美元/吨，升至逾四年来最高水平",
    "desc": "",
    "heat": 56569,
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
    "title": "英伟达AI服务器计划涨价至少15%",
    "desc": "",
    "heat": 52141,
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
        "name": "蘅东光",
        "code": "920045",
        "chg": 13.950534
      }
    ]
  },
  {
    "title": "“梯次利用”谢幕！动力电池回收赛道格局生变",
    "desc": "",
    "heat": 32771,
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
        "chg": 14.089699
      }
    ]
  },
  {
    "title": "锂业股逆市走高，碳酸锂盘中大涨近4%",
    "desc": "",
    "heat": 11145,
    "direction": "锂资源",
    "themes": [
      "锂矿/锂盐",
      "盐湖提锂"
    ],
    "stocks": [
      {
        "name": "协鑫能科",
        "code": "002015",
        "chg": 10.035336
      }
    ]
  },
  {
    "title": "国常会：统筹推进基础网络、空间网络、国际网络、融合网络建设",
    "desc": "",
    "heat": 1945,
    "direction": "网络建设",
    "themes": [
      "网络建设"
    ],
    "stocks": [
      {
        "name": "*ST元道",
        "code": "301139",
        "chg": 1.176471
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+4.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+2.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "硅锰",
    "change": "+2.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+2.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+1.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+1.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "珠宝饰品",
    "change": "+1.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+1.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+1.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+1.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+1.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "+0.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信托",
    "change": "+0.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+0.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+0.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "+0.77%",
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
    "hot_rank": 3,
    "hot_rank_chg": 3,
    "stock_cnt": 5827,
    "price": "8.13",
    "change": "-0.49",
    "market_id": "17",
    "circulate_market_value": "20475485000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.28
      },
      {
        "name": "工业大麻",
        "change_pct": -2.57
      },
      {
        "name": "中药",
        "change_pct": -2.04
      },
      {
        "name": "强势人气股",
        "change_pct": -2.23
      },
      {
        "name": "保健品",
        "change_pct": -2.08
      },
      {
        "name": "民营医院",
        "change_pct": -1.39
      },
      {
        "name": "医药",
        "change_pct": -2.66
      },
      {
        "name": "化学原料药",
        "change_pct": -2.92
      },
      {
        "name": "流感",
        "change_pct": -2.37
      },
      {
        "name": "振兴东北",
        "change_pct": -1.04
      },
      {
        "name": "食品",
        "change_pct": -1.37
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 4,
    "hot_rank_chg": 3,
    "stock_cnt": 5827,
    "price": "11.31",
    "change": "8.54",
    "market_id": "33",
    "circulate_market_value": "26267200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 1.84
      },
      {
        "name": "有色 · 铜",
        "change_pct": -0.84
      },
      {
        "name": "有色 · 锑",
        "change_pct": 0.7
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.13
      },
      {
        "name": "有色 · 锌",
        "change_pct": 0.64
      },
      {
        "name": "有色金属",
        "change_pct": -0.96
      },
      {
        "name": "国企改革",
        "change_pct": -0.67
      },
      {
        "name": "白银",
        "change_pct": 1.72
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 6,
    "hot_rank_chg": 11,
    "stock_cnt": 5827,
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
        "change_pct": -2.04
      },
      {
        "name": "强势人气股",
        "change_pct": -2.23
      },
      {
        "name": "医药商业",
        "change_pct": -1.64
      },
      {
        "name": "医药",
        "change_pct": -2.66
      },
      {
        "name": "流感",
        "change_pct": -2.37
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 10,
    "hot_rank_chg": 2,
    "stock_cnt": 5827,
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
        "change_pct": -2.04
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.66
      },
      {
        "name": "农业种植",
        "change_pct": 1.4
      },
      {
        "name": "医药",
        "change_pct": -2.66
      },
      {
        "name": "流感",
        "change_pct": -2.37
      },
      {
        "name": "大农业",
        "change_pct": -0.74
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 16,
    "hot_rank_chg": 6,
    "stock_cnt": 5827,
    "price": "5.76",
    "change": "-4.00",
    "market_id": "33",
    "circulate_market_value": "203714690000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.95
      },
      {
        "name": "手机产业链",
        "change_pct": -2.88
      },
      {
        "name": "超高清视频",
        "change_pct": -2.29
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.43
      },
      {
        "name": "电竞",
        "change_pct": -1.57
      },
      {
        "name": "半导体",
        "change_pct": -2.69
      },
      {
        "name": "人工智能",
        "change_pct": -2.28
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.1
      },
      {
        "name": "VR&AR",
        "change_pct": -2.73
      },
      {
        "name": "OLED",
        "change_pct": -2.57
      },
      {
        "name": "京津冀",
        "change_pct": -1.32
      },
      {
        "name": "物联网",
        "change_pct": -1.86
      },
      {
        "name": "指纹识别",
        "change_pct": -2.46
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.35
      },
      {
        "name": "白马股",
        "change_pct": -0.28
      },
      {
        "name": "智能制造",
        "change_pct": -2.16
      },
      {
        "name": "小米概念股",
        "change_pct": -2.89
      },
      {
        "name": "国产芯片",
        "change_pct": -2.94
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.84
      },
      {
        "name": "全息概念",
        "change_pct": -2.27
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.19
      },
      {
        "name": "MicroLED",
        "change_pct": -3.15
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.97
      },
      {
        "name": "智能手表",
        "change_pct": -3.19
      },
      {
        "name": "MiniLED",
        "change_pct": -3.1
      },
      {
        "name": "传感器",
        "change_pct": -2.67
      },
      {
        "name": "大硅片",
        "change_pct": -2.09
      },
      {
        "name": "AI PC",
        "change_pct": -2.31
      },
      {
        "name": "华为产业链",
        "change_pct": -2.27
      },
      {
        "name": "回购",
        "change_pct": -1.9
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -3.97
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.96
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.49
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 17,
    "hot_rank_chg": 108,
    "stock_cnt": 5827,
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
        "change_pct": -1.33
      },
      {
        "name": "股权转让",
        "change_pct": -1.33
      },
      {
        "name": "房地产",
        "change_pct": -1.32
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.6
      },
      {
        "name": "京津冀",
        "change_pct": -1.32
      },
      {
        "name": "旅游",
        "change_pct": -0.44
      },
      {
        "name": "国产芯片",
        "change_pct": -2.94
      },
      {
        "name": "内存",
        "change_pct": -3.84
      },
      {
        "name": "闪存",
        "change_pct": -3.82
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.39
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 18,
    "hot_rank_chg": 10,
    "stock_cnt": 5827,
    "price": "8.55",
    "change": "4.27",
    "market_id": "17",
    "circulate_market_value": "5487246500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.55
      },
      {
        "name": "农业种植",
        "change_pct": 1.4
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.13
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.04
      },
      {
        "name": "休闲食品",
        "change_pct": -1.86
      },
      {
        "name": "食品",
        "change_pct": -1.37
      },
      {
        "name": "食品安全",
        "change_pct": -1.73
      },
      {
        "name": "社区团购",
        "change_pct": -1.24
      },
      {
        "name": "大农业",
        "change_pct": -0.74
      },
      {
        "name": "预制菜",
        "change_pct": -0.76
      },
      {
        "name": "人造肉",
        "change_pct": -0.54
      },
      {
        "name": "国企改革",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 37,
    "hot_rank_chg": 11,
    "stock_cnt": 5827,
    "price": "4.78",
    "change": "-7.18",
    "market_id": "33",
    "circulate_market_value": "12639483300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.23
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.6
      },
      {
        "name": "装修装饰",
        "change_pct": -1.37
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.19
      },
      {
        "name": "破净股",
        "change_pct": -0.17
      },
      {
        "name": "航天",
        "change_pct": -2.74
      },
      {
        "name": "旧改",
        "change_pct": -1.33
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 49,
    "hot_rank_chg": 208,
    "stock_cnt": 5827,
    "price": "4.66",
    "change": "5.19",
    "market_id": "17",
    "circulate_market_value": "7285054300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -1.83
      },
      {
        "name": "共享经济",
        "change_pct": -0.26
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.6
      },
      {
        "name": "旅游",
        "change_pct": -0.44
      },
      {
        "name": "物业管理",
        "change_pct": -0.89
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 57,
    "hot_rank_chg": -48,
    "stock_cnt": 5827,
    "price": "10.95",
    "change": "1.96",
    "market_id": "17",
    "circulate_market_value": "19000231000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -1.44
      },
      {
        "name": "核电",
        "change_pct": -1.78
      },
      {
        "name": "锂电池",
        "change_pct": -0.83
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -4.27
      },
      {
        "name": "PCB板",
        "change_pct": -3.98
      },
      {
        "name": "中科院系",
        "change_pct": -2.01
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.19
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -1.2
      },
      {
        "name": "固态电池",
        "change_pct": -0.21
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -3.33
      }
    ]
  },
  {
    "code": "600863",
    "name": "华能蒙电",
    "hot_rank": 58,
    "hot_rank_chg": 42,
    "stock_cnt": 5827,
    "price": "4.75",
    "change": "3.04",
    "market_id": "17",
    "circulate_market_value": "33550794000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 1.66
      },
      {
        "name": "央企改革",
        "change_pct": -0.59
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.09
      },
      {
        "name": "火电",
        "change_pct": 0.38
      },
      {
        "name": "内蒙古概念",
        "change_pct": -0.27
      },
      {
        "name": "风电",
        "change_pct": -1.75
      },
      {
        "name": "国企改革",
        "change_pct": -0.67
      },
      {
        "name": "西部大开发",
        "change_pct": -0.88
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 61,
    "hot_rank_chg": -25,
    "stock_cnt": 5827,
    "price": "11.19",
    "change": "-3.70",
    "market_id": "17",
    "circulate_market_value": "20020457000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.24
      },
      {
        "name": "纯碱",
        "change_pct": -0.46
      },
      {
        "name": "食品",
        "change_pct": -1.37
      },
      {
        "name": "土壤修复",
        "change_pct": -1.21
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.54
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -3.01
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -2.9
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 62,
    "hot_rank_chg": 61,
    "stock_cnt": 5827,
    "price": "5.91",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "73260887000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.59
      },
      {
        "name": "核电",
        "change_pct": -1.78
      },
      {
        "name": "强势人气股",
        "change_pct": -2.23
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.09
      },
      {
        "name": "水电",
        "change_pct": 0.12
      },
      {
        "name": "火电",
        "change_pct": 0.38
      },
      {
        "name": "光伏",
        "change_pct": -1.37
      },
      {
        "name": "风电",
        "change_pct": -1.75
      },
      {
        "name": "国企改革",
        "change_pct": -0.67
      },
      {
        "name": "算电协同",
        "change_pct": -0.85
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 63,
    "hot_rank_chg": 6,
    "stock_cnt": 5827,
    "price": "3.97",
    "change": "-8.74",
    "market_id": "33",
    "circulate_market_value": "8337610800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.04
      },
      {
        "name": "强势人气股",
        "change_pct": -2.23
      },
      {
        "name": "维生素",
        "change_pct": -3.58
      },
      {
        "name": "基因测序",
        "change_pct": -2.59
      },
      {
        "name": "民营医院",
        "change_pct": -1.39
      },
      {
        "name": "医药",
        "change_pct": -2.66
      },
      {
        "name": "化学原料药",
        "change_pct": -2.92
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -4.48
      }
    ]
  },
  {
    "code": "002506",
    "name": "协鑫集成",
    "hot_rank": 66,
    "hot_rank_chg": 257,
    "stock_cnt": 5827,
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
        "change_pct": -0.73
      },
      {
        "name": "光伏",
        "change_pct": -1.37
      },
      {
        "name": "储能",
        "change_pct": -1.26
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.04
      },
      {
        "name": "颗粒硅",
        "change_pct": -0.07
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.7
      },
      {
        "name": "低价股",
        "change_pct": -0.79
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.97
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.43
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 71,
    "hot_rank_chg": -3,
    "stock_cnt": 5827,
    "price": "12.70",
    "change": "-6.20",
    "market_id": "17",
    "circulate_market_value": "16296622000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -2.17
      },
      {
        "name": "强势人气股",
        "change_pct": -2.23
      },
      {
        "name": "智能制造",
        "change_pct": -2.16
      },
      {
        "name": "工业互联网",
        "change_pct": -1.99
      },
      {
        "name": "培育钻石",
        "change_pct": -2.31
      },
      {
        "name": "金刚线",
        "change_pct": -1.36
      },
      {
        "name": "国资入股",
        "change_pct": -1.02
      },
      {
        "name": "深地经济",
        "change_pct": -1.49
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 74,
    "hot_rank_chg": 33,
    "stock_cnt": 5827,
    "price": "12.54",
    "change": "2.70",
    "market_id": "33",
    "circulate_market_value": "11703853000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.23
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.17
      },
      {
        "name": "新疆概念",
        "change_pct": -0.37
      },
      {
        "name": "光伏",
        "change_pct": -1.37
      },
      {
        "name": "风电",
        "change_pct": -1.75
      },
      {
        "name": "储能",
        "change_pct": -1.26
      },
      {
        "name": "国企改革",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 76,
    "hot_rank_chg": -56,
    "stock_cnt": 5827,
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
        "change_pct": -1.19
      },
      {
        "name": "锂电池",
        "change_pct": -0.83
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.19
      },
      {
        "name": "两轮车",
        "change_pct": -0.77
      },
      {
        "name": "珠宝饰品",
        "change_pct": 1.7
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 77,
    "hot_rank_chg": -44,
    "stock_cnt": 5827,
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
        "change_pct": -1.33
      },
      {
        "name": "强势人气股",
        "change_pct": -2.23
      },
      {
        "name": "光伏",
        "change_pct": -1.37
      },
      {
        "name": "无线耳机",
        "change_pct": -2.83
      },
      {
        "name": "华为产业链",
        "change_pct": -2.27
      },
      {
        "name": "光伏胶膜",
        "change_pct": -1.63
      }
    ]
  },
  {
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 80,
    "hot_rank_chg": 47,
    "stock_cnt": 5827,
    "price": "11.15",
    "change": "3.82",
    "market_id": "33",
    "circulate_market_value": "6686766500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.05
      },
      {
        "name": "金融科技",
        "change_pct": -1.51
      },
      {
        "name": "移动支付",
        "change_pct": -0.96
      },
      {
        "name": "物联网",
        "change_pct": -1.86
      },
      {
        "name": "数字经济",
        "change_pct": -1.86
      },
      {
        "name": "电子身份证",
        "change_pct": -0.72
      },
      {
        "name": "ETC",
        "change_pct": -1.88
      },
      {
        "name": "数字人民币",
        "change_pct": -0.94
      },
      {
        "name": "智慧政务",
        "change_pct": -1.64
      },
      {
        "name": "eSIM",
        "change_pct": 0.41
      },
      {
        "name": "华为产业链",
        "change_pct": -2.27
      },
      {
        "name": "区块链",
        "change_pct": -1.55
      },
      {
        "name": "RWA",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 93,
    "hot_rank_chg": 171,
    "stock_cnt": 5827,
    "price": "9.64",
    "change": "1.90",
    "market_id": "17",
    "circulate_market_value": "6287940100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.39
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.73
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.83
      },
      {
        "name": "新零售",
        "change_pct": -0.76
      },
      {
        "name": "移动支付",
        "change_pct": -0.96
      },
      {
        "name": "京津冀",
        "change_pct": -1.32
      },
      {
        "name": "北京城市规划",
        "change_pct": -1.27
      },
      {
        "name": "国产芯片",
        "change_pct": -2.94
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.22
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.15
      },
      {
        "name": "物业管理",
        "change_pct": -0.89
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.15
      },
      {
        "name": "国企改革",
        "change_pct": -0.67
      },
      {
        "name": "数字人民币",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 95,
    "hot_rank_chg": -9,
    "stock_cnt": 5827,
    "price": "9.90",
    "change": "-7.99",
    "market_id": "33",
    "circulate_market_value": "2816367900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -1.43
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.12
      },
      {
        "name": "强势人气股",
        "change_pct": -2.23
      },
      {
        "name": "教育",
        "change_pct": -1.65
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.22
      },
      {
        "name": "职业教育",
        "change_pct": -1.91
      },
      {
        "name": "在线教育",
        "change_pct": -1.75
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.96
      },
      {
        "name": "华为产业链",
        "change_pct": -2.27
      },
      {
        "name": "智谱AI",
        "change_pct": -2.97
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5827, "price": "606.44", "change": "-9.81", "market_id": "17", "circulate_market_value": "18246397000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5827, "price": "8.13", "change": "-0.49", "market_id": "17", "circulate_market_value": "20475485000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.28}, {"name": "工业大麻", "change_pct": -2.57}, {"name": "中药", "change_pct": -2.04}, {"name": "强势人气股", "change_pct": -2.23}, {"name": "保健品", "change_pct": -2.08}, {"name": "民营医院", "change_pct": -1.39}, {"name": "医药", "change_pct": -2.66}, {"name": "化学原料药", "change_pct": -2.92}, {"name": "流感", "change_pct": -2.37}, {"name": "振兴东北", "change_pct": -1.04}, {"name": "食品", "change_pct": -1.37}]}, {"code": "002716", "name": "湖南白银", "hot_rank": 4, "hot_rank_chg": 3, "stock_cnt": 5827, "price": "11.31", "change": "8.54", "market_id": "33", "circulate_market_value": "26267200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 1.84}, {"name": "有色 · 铜", "change_pct": -0.84}, {"name": "有色 · 锑", "change_pct": 0.7}, {"name": "湖南国企改革", "change_pct": -0.13}, {"name": "有色 · 锌", "change_pct": 0.64}, {"name": "有色金属", "change_pct": -0.96}, {"name": "国企改革", "change_pct": -0.67}, {"name": "白银", "change_pct": 1.72}]}, {"code": "600460", "name": "士兰微", "hot_rank": 5, "hot_rank_chg": -4, "stock_cnt": 5827, "price": "35.92", "change": "0.08", "market_id": "17", "circulate_market_value": "59773461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 6, "hot_rank_chg": 11, "stock_cnt": 5827, "price": "9.90", "change": "10.00", "market_id": "17", "circulate_market_value": "4745267800.00", "change_type": "1", "change_section": "8", "change_days": "6", "change_reason": "抗肿瘤", "xgb_concepts": [{"name": "中药", "change_pct": -2.04}, {"name": "强势人气股", "change_pct": -2.23}, {"name": "医药商业", "change_pct": -1.64}, {"name": "医药", "change_pct": -2.66}, {"name": "流感", "change_pct": -2.37}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5827, "price": "20.73", "change": "-2.22", "market_id": "33", "circulate_market_value": "24388198000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5827, "price": "15.57", "change": "10.04", "market_id": "33", "circulate_market_value": "25275164000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "签署算电协同项目"}, {"code": "300308", "name": "中际旭创", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5827, "price": "869.77", "change": "-7.77", "market_id": "33", "circulate_market_value": "965391020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 10, "hot_rank_chg": 2, "stock_cnt": 5827, "price": "11.21", "change": "10.01", "market_id": "33", "circulate_market_value": "5580842500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": -2.04}, {"name": "优化生育（三孩）", "change_pct": -1.66}, {"name": "农业种植", "change_pct": 1.4}, {"name": "医药", "change_pct": -2.66}, {"name": "流感", "change_pct": -2.37}, {"name": "大农业", "change_pct": -0.74}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 11, "hot_rank_chg": 24, "stock_cnt": 5827, "price": "56.12", "change": "-3.24", "market_id": "17", "circulate_market_value": "252710550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 12, "hot_rank_chg": 29, "stock_cnt": 5827, "price": "190.99", "change": "-5.02", "market_id": "33", "circulate_market_value": "264773590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 13, "hot_rank_chg": 8, "stock_cnt": 5827, "price": "39.31", "change": "-6.49", "market_id": "17", "circulate_market_value": "156123090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 14, "hot_rank_chg": 17, "stock_cnt": 5827, "price": "93.96", "change": "-6.86", "market_id": "33", "circulate_market_value": "61359227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 15, "hot_rank_chg": 0, "stock_cnt": 5827, "price": "60.42", "change": "-2.83", "market_id": "17", "circulate_market_value": "148249310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 16, "hot_rank_chg": 6, "stock_cnt": 5827, "price": "5.76", "change": "-4.00", "market_id": "33", "circulate_market_value": "203714690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.95}, {"name": "手机产业链", "change_pct": -2.88}, {"name": "超高清视频", "change_pct": -2.29}, {"name": "苹果产业链", "change_pct": -2.43}, {"name": "电竞", "change_pct": -1.57}, {"name": "半导体", "change_pct": -2.69}, {"name": "人工智能", "change_pct": -2.28}, {"name": "互联网医疗", "change_pct": -2.1}, {"name": "VR&AR", "change_pct": -2.73}, {"name": "OLED", "change_pct": -2.57}, {"name": "京津冀", "change_pct": -1.32}, {"name": "物联网", "change_pct": -1.86}, {"name": "指纹识别", "change_pct": -2.46}, {"name": "汽车零部件", "change_pct": -1.35}, {"name": "白马股", "change_pct": -0.28}, {"name": "智能制造", "change_pct": -2.16}, {"name": "小米概念股", "change_pct": -2.89}, {"name": "国产芯片", "change_pct": -2.94}, {"name": "液晶面板/LCD", "change_pct": -2.84}, {"name": "全息概念", "change_pct": -2.27}, {"name": "理想汽车概念股", "change_pct": -1.19}, {"name": "MicroLED", "change_pct": -3.15}, {"name": "钙钛矿电池", "change_pct": -0.97}, {"name": "智能手表", "change_pct": -3.19}, {"name": "MiniLED", "change_pct": -3.1}, {"name": "传感器", "change_pct": -2.67}, {"name": "大硅片", "change_pct": -2.09}, {"name": "AI PC", "change_pct": -2.31}, {"name": "华为产业链", "change_pct": -2.27}, {"name": "回购", "change_pct": -1.9}, {"name": "光电共封装CPO", "change_pct": -3.97}, {"name": "智能眼镜/MR头显", "change_pct": -2.96}, {"name": "玻璃基板封装", "change_pct": -2.49}]}, {"code": "000620", "name": "盈新发展", "hot_rank": 17, "hot_rank_chg": 108, "stock_cnt": 5827, "price": "3.47", "change": "10.16", "market_id": "33", "circulate_market_value": "16210968000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.33}, {"name": "股权转让", "change_pct": -1.33}, {"name": "房地产", "change_pct": -1.32}, {"name": "云计算数据中心", "change_pct": -2.6}, {"name": "京津冀", "change_pct": -1.32}, {"name": "旅游", "change_pct": -0.44}, {"name": "国产芯片", "change_pct": -2.94}, {"name": "内存", "change_pct": -3.84}, {"name": "闪存", "change_pct": -3.82}, {"name": "IP经济/谷子经济", "change_pct": -1.39}]}, {"code": "600127", "name": "金健米业", "hot_rank": 18, "hot_rank_chg": 10, "stock_cnt": 5827, "price": "8.55", "change": "4.27", "market_id": "17", "circulate_market_value": "5487246500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.55}, {"name": "农业种植", "change_pct": 1.4}, {"name": "湖南国企改革", "change_pct": -0.13}, {"name": "乡村振兴", "change_pct": -0.04}, {"name": "休闲食品", "change_pct": -1.86}, {"name": "食品", "change_pct": -1.37}, {"name": "食品安全", "change_pct": -1.73}, {"name": "社区团购", "change_pct": -1.24}, {"name": "大农业", "change_pct": -0.74}, {"name": "预制菜", "change_pct": -0.76}, {"name": "人造肉", "change_pct": -0.54}, {"name": "国企改革", "change_pct": -0.67}]}, {"code": "603958", "name": "哈森股份", "hot_rank": 19, "hot_rank_chg": -6, "stock_cnt": 5827, "price": "21.65", "change": "5.35", "market_id": "17", "circulate_market_value": "4749144000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 20, "hot_rank_chg": -4, "stock_cnt": 5827, "price": "34.68", "change": "-0.17", "market_id": "17", "circulate_market_value": "714470190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 21, "hot_rank_chg": 24, "stock_cnt": 5827, "price": "14.07", "change": "10.01", "market_id": "33", "circulate_market_value": "6427883100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数字人民币"}, {"code": "600722", "name": "金牛化工", "hot_rank": 22, "hot_rank_chg": 3, "stock_cnt": 5827, "price": "15.00", "change": "6.01", "market_id": "17", "circulate_market_value": "10204795100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 24, "hot_rank_chg": 8, "stock_cnt": 5827, "price": "20.10", "change": "-6.25", "market_id": "17", "circulate_market_value": "42039998000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 25, "hot_rank_chg": 17, "stock_cnt": 5827, "price": "13.66", "change": "3.09", "market_id": "17", "circulate_market_value": "5252920700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002241", "name": "歌尔股份", "hot_rank": 26, "hot_rank_chg": 18, "stock_cnt": 5827, "price": "23.61", "change": "0.90", "market_id": "33", "circulate_market_value": "74270221000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601958", "name": "金钼股份", "hot_rank": 27, "hot_rank_chg": 148, "stock_cnt": 5827, "price": "23.33", "change": "6.34", "market_id": "17", "circulate_market_value": "75276681000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 28, "hot_rank_chg": -4, "stock_cnt": 5827, "price": "51.35", "change": "-5.33", "market_id": "17", "circulate_market_value": "43470514000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 29, "hot_rank_chg": 18, "stock_cnt": 5827, "price": "73.82", "change": "-6.05", "market_id": "17", "circulate_market_value": "132094584000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 30, "hot_rank_chg": 24, "stock_cnt": 5827, "price": "28.52", "change": "-9.60", "market_id": "17", "circulate_market_value": "11436520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 31, "hot_rank_chg": 215, "stock_cnt": 5827, "price": "15.02", "change": "10.04", "market_id": "33", "circulate_market_value": "8802442100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "603823", "name": "百合花", "hot_rank": 32, "hot_rank_chg": 47, "stock_cnt": 5827, "price": "69.98", "change": "-9.99", "market_id": "17", "circulate_market_value": "29137412000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 33, "hot_rank_chg": -29, "stock_cnt": 5827, "price": "66.13", "change": "-2.95", "market_id": "33", "circulate_market_value": "96116781000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002192", "name": "融捷股份", "hot_rank": 34, "hot_rank_chg": 40, "stock_cnt": 5827, "price": "78.08", "change": "7.68", "market_id": "33", "circulate_market_value": "20231905000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 35, "hot_rank_chg": 41, "stock_cnt": 5827, "price": "18.97", "change": "1.88", "market_id": "17", "circulate_market_value": "331232180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 36, "hot_rank_chg": 13, "stock_cnt": 5827, "price": "381.67", "change": "-6.70", "market_id": "17", "circulate_market_value": "255143320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 37, "hot_rank_chg": 11, "stock_cnt": 5827, "price": "4.78", "change": "-7.18", "market_id": "33", "circulate_market_value": "12639483300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.23}, {"name": "云计算数据中心", "change_pct": -2.6}, {"name": "装修装饰", "change_pct": -1.37}, {"name": "装配式建筑", "change_pct": -1.19}, {"name": "破净股", "change_pct": -0.17}, {"name": "航天", "change_pct": -2.74}, {"name": "旧改", "change_pct": -1.33}]}, {"code": "000636", "name": "风华高科", "hot_rank": 38, "hot_rank_chg": -11, "stock_cnt": 5827, "price": "51.40", "change": "-5.98", "market_id": "33", "circulate_market_value": "58980984000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 39, "hot_rank_chg": -21, "stock_cnt": 5827, "price": "39.13", "change": "6.88", "market_id": "33", "circulate_market_value": "26088611000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 40, "hot_rank_chg": -29, "stock_cnt": 5827, "price": "36.21", "change": "-5.41", "market_id": "17", "circulate_market_value": "30011252000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 41, "hot_rank_chg": -2, "stock_cnt": 5827, "price": "120.37", "change": "-4.45", "market_id": "17", "circulate_market_value": "43420276000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 42, "hot_rank_chg": 11, "stock_cnt": 5827, "price": "34.41", "change": "-4.81", "market_id": "33", "circulate_market_value": "37194399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 43, "hot_rank_chg": 98, "stock_cnt": 5827, "price": "49.52", "change": "2.36", "market_id": "33", "circulate_market_value": "73084657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 44, "hot_rank_chg": 111, "stock_cnt": 5827, "price": "21.05", "change": "9.98", "market_id": "33", "circulate_market_value": "9521731700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷储能"}, {"code": "603221", "name": "爱丽家居", "hot_rank": 45, "hot_rank_chg": 32, "stock_cnt": 5827, "price": "27.17", "change": "3.46", "market_id": "17", "circulate_market_value": "6582475900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002017", "name": "东信和平", "hot_rank": 46, "hot_rank_chg": 43, "stock_cnt": 5827, "price": "15.98", "change": "9.98", "market_id": "33", "circulate_market_value": "9271154800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报增长"}, {"code": "000938", "name": "紫光股份", "hot_rank": 47, "hot_rank_chg": -21, "stock_cnt": 5827, "price": "34.45", "change": "-5.46", "market_id": "33", "circulate_market_value": "98529504000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002460", "name": "赣锋锂业", "hot_rank": 48, "hot_rank_chg": 109, "stock_cnt": 5827, "price": "55.83", "change": "3.16", "market_id": "33", "circulate_market_value": "67622303000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 49, "hot_rank_chg": 208, "stock_cnt": 5827, "price": "4.66", "change": "5.19", "market_id": "17", "circulate_market_value": "7285054300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -1.83}, {"name": "共享经济", "change_pct": -0.26}, {"name": "云计算数据中心", "change_pct": -2.6}, {"name": "旅游", "change_pct": -0.44}, {"name": "物业管理", "change_pct": -0.89}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 50, "hot_rank_chg": -42, "stock_cnt": 5827, "price": "31.86", "change": "-3.95", "market_id": "33", "circulate_market_value": "24131245000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 51, "hot_rank_chg": 34, "stock_cnt": 5827, "price": "14.18", "change": "-0.70", "market_id": "17", "circulate_market_value": "20882983000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 52, "hot_rank_chg": 5, "stock_cnt": 5827, "price": "16.74", "change": "-3.90", "market_id": "33", "circulate_market_value": "55677684000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603626", "name": "科森科技", "hot_rank": 53, "hot_rank_chg": -30, "stock_cnt": 5827, "price": "19.45", "change": "4.29", "market_id": "17", "circulate_market_value": "10792410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 54, "hot_rank_chg": 82, "stock_cnt": 5827, "price": "17.13", "change": "3.82", "market_id": "17", "circulate_market_value": "2740800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 55, "hot_rank_chg": -25, "stock_cnt": 5827, "price": "73.88", "change": "-8.54", "market_id": "17", "circulate_market_value": "9654136000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 56, "hot_rank_chg": -16, "stock_cnt": 5827, "price": "16.01", "change": "-10.01", "market_id": "17", "circulate_market_value": "12604295300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 57, "hot_rank_chg": -48, "stock_cnt": 5827, "price": "10.95", "change": "1.96", "market_id": "17", "circulate_market_value": "19000231000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -1.44}, {"name": "核电", "change_pct": -1.78}, {"name": "锂电池", "change_pct": -0.83}, {"name": "铜箔/覆铜板", "change_pct": -4.27}, {"name": "PCB板", "change_pct": -3.98}, {"name": "中科院系", "change_pct": -2.01}, {"name": "新能源汽车", "change_pct": -1.19}, {"name": "宁德时代概念股", "change_pct": -1.2}, {"name": "固态电池", "change_pct": -0.21}, {"name": "PET复合铜箔", "change_pct": -3.33}]}, {"code": "600863", "name": "华能蒙电", "hot_rank": 58, "hot_rank_chg": 42, "stock_cnt": 5827, "price": "4.75", "change": "3.04", "market_id": "17", "circulate_market_value": "33550794000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 1.66}, {"name": "央企改革", "change_pct": -0.59}, {"name": "电力体制改革", "change_pct": 0.09}, {"name": "火电", "change_pct": 0.38}, {"name": "内蒙古概念", "change_pct": -0.27}, {"name": "风电", "change_pct": -1.75}, {"name": "国企改革", "change_pct": -0.67}, {"name": "西部大开发", "change_pct": -0.88}]}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 59, "hot_rank_chg": 14, "stock_cnt": 5827, "price": "55.81", "change": "1.22", "market_id": "33", "circulate_market_value": "20566169000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 60, "hot_rank_chg": 120, "stock_cnt": 5827, "price": "15.32", "change": "1.73", "market_id": "17", "circulate_market_value": "7848292700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 61, "hot_rank_chg": -25, "stock_cnt": 5827, "price": "11.19", "change": "-3.70", "market_id": "17", "circulate_market_value": "20020457000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.24}, {"name": "纯碱", "change_pct": -0.46}, {"name": "食品", "change_pct": -1.37}, {"name": "土壤修复", "change_pct": -1.21}, {"name": "东数西算/算力", "change_pct": -2.54}, {"name": "OpenClaw概念", "change_pct": -3.01}, {"name": "DeepSeek概念股", "change_pct": -2.9}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 62, "hot_rank_chg": 61, "stock_cnt": 5827, "price": "5.91", "change": "0.00", "market_id": "17", "circulate_market_value": "73260887000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.59}, {"name": "核电", "change_pct": -1.78}, {"name": "强势人气股", "change_pct": -2.23}, {"name": "电力体制改革", "change_pct": 0.09}, {"name": "水电", "change_pct": 0.12}, {"name": "火电", "change_pct": 0.38}, {"name": "光伏", "change_pct": -1.37}, {"name": "风电", "change_pct": -1.75}, {"name": "国企改革", "change_pct": -0.67}, {"name": "算电协同", "change_pct": -0.85}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 63, "hot_rank_chg": 6, "stock_cnt": 5827, "price": "3.97", "change": "-8.74", "market_id": "33", "circulate_market_value": "8337610800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.04}, {"name": "强势人气股", "change_pct": -2.23}, {"name": "维生素", "change_pct": -3.58}, {"name": "基因测序", "change_pct": -2.59}, {"name": "民营医院", "change_pct": -1.39}, {"name": "医药", "change_pct": -2.66}, {"name": "化学原料药", "change_pct": -2.92}, {"name": "PD-1抑制剂", "change_pct": -4.48}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 64, "hot_rank_chg": 11, "stock_cnt": 5827, "price": "31.06", "change": "-7.48", "market_id": "33", "circulate_market_value": "24302436000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 65, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "60.69", "change": "-4.99", "market_id": "33", "circulate_market_value": "92094175000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002506", "name": "协鑫集成", "hot_rank": 66, "hot_rank_chg": 257, "stock_cnt": 5827, "price": "2.78", "change": "6.51", "market_id": "33", "circulate_market_value": "16247536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": -0.73}, {"name": "光伏", "change_pct": -1.37}, {"name": "储能", "change_pct": -1.26}, {"name": "乡村振兴", "change_pct": -0.04}, {"name": "颗粒硅", "change_pct": -0.07}, {"name": "BIPV概念", "change_pct": -0.7}, {"name": "低价股", "change_pct": -0.79}, {"name": "钙钛矿电池", "change_pct": -0.97}, {"name": "异质结电池HJT", "change_pct": -1.43}]}, {"code": "000506", "name": "招金黄金", "hot_rank": 67, "hot_rank_chg": 0, "stock_cnt": 5827, "price": "22.00", "change": "5.92", "market_id": "33", "circulate_market_value": "20431553000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300139", "name": "晓程科技", "hot_rank": 68, "hot_rank_chg": 34, "stock_cnt": 5827, "price": "58.90", "change": "9.72", "market_id": "33", "circulate_market_value": "13762528000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 69, "hot_rank_chg": 18, "stock_cnt": 5827, "price": "408.77", "change": "-7.52", "market_id": "33", "circulate_market_value": "512696980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 70, "hot_rank_chg": -9, "stock_cnt": 5827, "price": "155.87", "change": "-4.29", "market_id": "17", "circulate_market_value": "385510190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 71, "hot_rank_chg": -3, "stock_cnt": 5827, "price": "12.70", "change": "-6.20", "market_id": "17", "circulate_market_value": "16296622000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -2.17}, {"name": "强势人气股", "change_pct": -2.23}, {"name": "智能制造", "change_pct": -2.16}, {"name": "工业互联网", "change_pct": -1.99}, {"name": "培育钻石", "change_pct": -2.31}, {"name": "金刚线", "change_pct": -1.36}, {"name": "国资入股", "change_pct": -1.02}, {"name": "深地经济", "change_pct": -1.49}]}, {"code": "300142", "name": "沃森生物", "hot_rank": 72, "hot_rank_chg": -34, "stock_cnt": 5827, "price": "14.84", "change": "-7.83", "market_id": "33", "circulate_market_value": "23401501000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 73, "hot_rank_chg": -21, "stock_cnt": 5827, "price": "48.73", "change": "-1.42", "market_id": "17", "circulate_market_value": "81082401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 74, "hot_rank_chg": 33, "stock_cnt": 5827, "price": "12.54", "change": "2.70", "market_id": "33", "circulate_market_value": "11703853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.23}, {"name": "新疆国企改革", "change_pct": -0.17}, {"name": "新疆概念", "change_pct": -0.37}, {"name": "光伏", "change_pct": -1.37}, {"name": "风电", "change_pct": -1.75}, {"name": "储能", "change_pct": -1.26}, {"name": "国企改革", "change_pct": -0.67}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 75, "hot_rank_chg": -19, "stock_cnt": 5827, "price": "37.73", "change": "-5.01", "market_id": "17", "circulate_market_value": "55161064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 76, "hot_rank_chg": -56, "stock_cnt": 5827, "price": "7.82", "change": "9.99", "market_id": "33", "circulate_market_value": "3447227700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -1.19}, {"name": "锂电池", "change_pct": -0.83}, {"name": "新能源汽车", "change_pct": -1.19}, {"name": "两轮车", "change_pct": -0.77}, {"name": "珠宝饰品", "change_pct": 1.7}]}, {"code": "603330", "name": "天洋新材", "hot_rank": 77, "hot_rank_chg": -44, "stock_cnt": 5827, "price": "10.97", "change": "10.03", "market_id": "17", "circulate_market_value": "4746429900.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "光模块胶", "xgb_concepts": [{"name": "股权转让", "change_pct": -1.33}, {"name": "强势人气股", "change_pct": -2.23}, {"name": "光伏", "change_pct": -1.37}, {"name": "无线耳机", "change_pct": -2.83}, {"name": "华为产业链", "change_pct": -2.27}, {"name": "光伏胶膜", "change_pct": -1.63}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 78, "hot_rank_chg": -23, "stock_cnt": 5827, "price": "370.66", "change": "1.94", "market_id": "17", "circulate_market_value": "150613360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 79, "hot_rank_chg": 16, "stock_cnt": 5827, "price": "36.39", "change": "-1.78", "market_id": "17", "circulate_market_value": "131529593000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 80, "hot_rank_chg": 47, "stock_cnt": 5827, "price": "11.15", "change": "3.82", "market_id": "33", "circulate_market_value": "6686766500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.05}, {"name": "金融科技", "change_pct": -1.51}, {"name": "移动支付", "change_pct": -0.96}, {"name": "物联网", "change_pct": -1.86}, {"name": "数字经济", "change_pct": -1.86}, {"name": "电子身份证", "change_pct": -0.72}, {"name": "ETC", "change_pct": -1.88}, {"name": "数字人民币", "change_pct": -0.94}, {"name": "智慧政务", "change_pct": -1.64}, {"name": "eSIM", "change_pct": 0.41}, {"name": "华为产业链", "change_pct": -2.27}, {"name": "区块链", "change_pct": -1.55}, {"name": "RWA", "change_pct": -0.04}]}, {"code": "300390", "name": "天华新能", "hot_rank": 81, "hot_rank_chg": 201, "stock_cnt": 5827, "price": "67.85", "change": "3.63", "market_id": "33", "circulate_market_value": "48274692000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 82, "hot_rank_chg": -39, "stock_cnt": 5827, "price": "15.41", "change": "-8.92", "market_id": "17", "circulate_market_value": "34200226000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 83, "hot_rank_chg": -21, "stock_cnt": 5827, "price": "32.22", "change": "-3.62", "market_id": "17", "circulate_market_value": "109965238000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 84, "hot_rank_chg": -21, "stock_cnt": 5827, "price": "63.35", "change": "-6.65", "market_id": "33", "circulate_market_value": "54042173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 85, "hot_rank_chg": 36, "stock_cnt": 5827, "price": "248.79", "change": "-8.89", "market_id": "33", "circulate_market_value": "270780060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002655", "name": "共达电声", "hot_rank": 86, "hot_rank_chg": -6, "stock_cnt": 5827, "price": "35.80", "change": "-5.22", "market_id": "33", "circulate_market_value": "13005141200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 87, "hot_rank_chg": -16, "stock_cnt": 5827, "price": "390.61", "change": "-5.90", "market_id": "33", "circulate_market_value": "64461999000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000831", "name": "中国稀土", "hot_rank": 88, "hot_rank_chg": 119, "stock_cnt": 5827, "price": "58.04", "change": "3.04", "market_id": "33", "circulate_market_value": "61593256000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 89, "hot_rank_chg": -39, "stock_cnt": 5827, "price": "17.54", "change": "-3.31", "market_id": "17", "circulate_market_value": "17363896000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 90, "hot_rank_chg": -31, "stock_cnt": 5827, "price": "25.64", "change": "-6.18", "market_id": "17", "circulate_market_value": "22103024000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001257", "name": "盛龙股份", "hot_rank": 91, "hot_rank_chg": 322, "stock_cnt": 5827, "price": "26.19", "change": "3.93", "market_id": "33", "circulate_market_value": "3586667800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 92, "hot_rank_chg": -41, "stock_cnt": 5827, "price": "59.99", "change": "-4.54", "market_id": "17", "circulate_market_value": "1190447100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603123", "name": "翠微股份", "hot_rank": 93, "hot_rank_chg": 171, "stock_cnt": 5827, "price": "9.64", "change": "1.90", "market_id": "17", "circulate_market_value": "6287940100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.39}, {"name": "蚂蚁集团概念股", "change_pct": -0.73}, {"name": "无人驾驶", "change_pct": -1.83}, {"name": "新零售", "change_pct": -0.76}, {"name": "移动支付", "change_pct": -0.96}, {"name": "京津冀", "change_pct": -1.32}, {"name": "北京城市规划", "change_pct": -1.27}, {"name": "国产芯片", "change_pct": -2.94}, {"name": "阿里巴巴概念股", "change_pct": -2.22}, {"name": "腾讯概念股", "change_pct": -2.15}, {"name": "物业管理", "change_pct": -0.89}, {"name": "字节跳动概念股", "change_pct": -2.15}, {"name": "国企改革", "change_pct": -0.67}, {"name": "数字人民币", "change_pct": -0.94}]}, {"code": "002202", "name": "金风科技", "hot_rank": 94, "hot_rank_chg": 3, "stock_cnt": 5827, "price": "18.20", "change": "-5.16", "market_id": "33", "circulate_market_value": "61215792000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 95, "hot_rank_chg": -9, "stock_cnt": 5827, "price": "9.90", "change": "-7.99", "market_id": "33", "circulate_market_value": "2816367900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -1.43}, {"name": "ST摘帽", "change_pct": -2.12}, {"name": "强势人气股", "change_pct": -2.23}, {"name": "教育", "change_pct": -1.65}, {"name": "阿里巴巴概念股", "change_pct": -2.22}, {"name": "职业教育", "change_pct": -1.91}, {"name": "在线教育", "change_pct": -1.75}, {"name": "华为鸿蒙", "change_pct": -1.96}, {"name": "华为产业链", "change_pct": -2.27}, {"name": "智谱AI", "change_pct": -2.97}]}, {"code": "600183", "name": "生益科技", "hot_rank": 96, "hot_rank_chg": -59, "stock_cnt": 5827, "price": "124.64", "change": "-6.14", "market_id": "17", "circulate_market_value": "300600380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 97, "hot_rank_chg": 77, "stock_cnt": 5827, "price": "37.57", "change": "-1.03", "market_id": "33", "circulate_market_value": "56693544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 98, "hot_rank_chg": 20, "stock_cnt": 5827, "price": "25.92", "change": "-9.09", "market_id": "17", "circulate_market_value": "8732965100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 99, "hot_rank_chg": 48, "stock_cnt": 5827, "price": "139.71", "change": "0.87", "market_id": "33", "circulate_market_value": "44500813000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002975", "name": "博杰股份", "hot_rank": 100, "hot_rank_chg": 72, "stock_cnt": 5827, "price": "110.61", "change": "10.01", "market_id": "33", "circulate_market_value": "15293284000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟"}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告"};