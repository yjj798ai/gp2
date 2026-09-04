const UPDATE_TIME = "2026-09-04 05:23";
const THS_HOT = [
  {
    "name": "数字货币",
    "rise": 3.06,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "AI应用",
    "rise": 2.03,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续43天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "猪肉",
    "rise": 6.88,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "液冷服务器",
    "rise": -0.78,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "AI视频",
    "rise": 3.11,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886068"
  },
  {
    "name": "创新药",
    "rise": 0.76,
    "rate": 0,
    "tag": "",
    "hotTag": "连续115天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "粮食概念",
    "rise": 2.78,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.77,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续285天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "培育钻石",
    "rise": 0.22,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "PCB概念",
    "rise": -0.56,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续108天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "无人驾驶",
    "rise": 0.8,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "智能汽车ETF",
    "code": "885736"
  },
  {
    "name": "跨境支付(CIPS)",
    "rise": 3.18,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "银行AH优选ETF",
    "code": "885966"
  },
  {
    "name": "算力租赁",
    "rise": 1.03,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续149天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "存储芯片",
    "rise": -0.95,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续238天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "兵装重组概念",
    "rise": 3.12,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "商业航天",
    "rise": 0.96,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续214天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "互联网金融",
    "rise": 2.32,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "黄金概念",
    "rise": 0.28,
    "rate": 0,
    "tag": "",
    "hotTag": "连续23天上榜",
    "rankChg": -2,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "光纤概念",
    "rise": -0.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续114天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "AIGC概念",
    "rise": 2.16,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886019"
  }
];
const THS_EVENTS = [
  {
    "title": "供应压力缓和价格整体回暖 机构看好产能进一步加速去化 猪肉概念股涨幅居前",
    "desc": "",
    "heat": 777030,
    "direction": "猪肉",
    "themes": [
      "猪肉"
    ],
    "stocks": [
      {
        "name": "大禹生物",
        "code": "920970",
        "chg": 24.534161
      }
    ]
  },
  {
    "title": "芒果超媒董事长：以《后西游记》为战略起点 布局AI精品内容赛道",
    "desc": "",
    "heat": 365757,
    "direction": "AI视频",
    "themes": [
      "AI漫剧",
      "AI视频"
    ],
    "stocks": [
      {
        "name": "易点天下",
        "code": "301171",
        "chg": 13.875181
      }
    ]
  },
  {
    "title": "宏观因素提振比特币 加密货币概念股上涨",
    "desc": "",
    "heat": 348092,
    "direction": "数字货币",
    "themes": [
      "数字货币",
      "RWA"
    ],
    "stocks": [
      {
        "name": "四方精创",
        "code": "300468",
        "chg": 18.0
      }
    ]
  },
  {
    "title": "GPT-6 Astra横空出世，AGI纪元正式开启",
    "desc": "",
    "heat": 326402,
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
        "name": "柏星龙",
        "code": "920075",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "随着国储收购落地、深加工开机率逐步回升，后续玉米价格继续深跌的空间非常有限",
    "desc": "",
    "heat": 259401,
    "direction": "转基因",
    "themes": [
      "转基因",
      "粮食概念",
      "玉米",
      "大豆",
      "农业种植"
    ],
    "stocks": [
      {
        "name": "亚盛集团",
        "code": "600108",
        "chg": 10.10101
      }
    ]
  },
  {
    "title": "2026医保国谈将于9月5日举行",
    "desc": "",
    "heat": 197984,
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
        "name": "昂利康",
        "code": "002940",
        "chg": 7.974734
      }
    ]
  },
  {
    "title": "促进中小企业发展“十五五”规划发布",
    "desc": "",
    "heat": 176916,
    "direction": "创投",
    "themes": [
      "创投"
    ],
    "stocks": [
      {
        "name": "易点天下",
        "code": "301171",
        "chg": 13.875181
      }
    ]
  },
  {
    "title": "华为Mate 90系列入网：直接标注5G！首发韬定律麒麟芯",
    "desc": "",
    "heat": 165101,
    "direction": "华为5G",
    "themes": [
      "华为5G",
      "华为概念",
      "5G"
    ],
    "stocks": [
      {
        "name": "德龙激光",
        "code": "688170",
        "chg": 20.007593
      }
    ]
  },
  {
    "title": "特斯拉：Cybercab正式在美国奥斯汀投入运营",
    "desc": "",
    "heat": 152153,
    "direction": "无人驾驶",
    "themes": [
      "无人驾驶"
    ],
    "stocks": [
      {
        "name": "大地电气",
        "code": "920436",
        "chg": 13.143872
      }
    ]
  },
  {
    "title": "美联储加息预期降温，贵金属板块迎来反弹，白银有色涨停",
    "desc": "",
    "heat": 96948,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "黄金概念",
      "白银"
    ],
    "stocks": [
      {
        "name": "宁波中百",
        "code": "600857",
        "chg": 8.59375
      }
    ]
  },
  {
    "title": "英伟达宣布英伟达Rtx Spark Windows个人电脑将于2026年10月上市",
    "desc": "",
    "heat": 13776,
    "direction": "AI PC",
    "themes": [
      "AI PC"
    ],
    "stocks": [
      {
        "name": "景旺电子",
        "code": "603228",
        "chg": 9.997738
      }
    ]
  },
  {
    "title": "今年第三轮！模拟芯片大厂，涨价",
    "desc": "",
    "heat": 12484,
    "direction": "模拟芯片",
    "themes": [
      "模拟芯片"
    ],
    "stocks": [
      {
        "name": "盛景微",
        "code": "603375",
        "chg": 2.242563
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄酒",
    "change": "+8.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+6.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+5.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+5.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+4.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饲料",
    "change": "+4.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+4.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+4.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "预制菜",
    "change": "+4.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "RWA",
    "change": "+4.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+3.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+3.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+3.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+3.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+3.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+3.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+3.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI视频",
    "change": "+3.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+3.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+3.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 2,
    "hot_rank_chg": 3,
    "stock_cnt": 5779,
    "price": "12.02",
    "change": "-1.39",
    "market_id": "17",
    "circulate_market_value": "8018640000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.6
      },
      {
        "name": "强势人气股",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 4,
    "hot_rank_chg": 0,
    "stock_cnt": 5779,
    "price": "12.43",
    "change": "-1.89",
    "market_id": "17",
    "circulate_market_value": "7977365400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.54
      },
      {
        "name": "农业种植",
        "change_pct": 3.59
      },
      {
        "name": "强势人气股",
        "change_pct": -0.13
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.74
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.1
      },
      {
        "name": "休闲食品",
        "change_pct": 2.32
      },
      {
        "name": "食品",
        "change_pct": 2.13
      },
      {
        "name": "食品安全",
        "change_pct": 1.83
      },
      {
        "name": "社区团购",
        "change_pct": 2.69
      },
      {
        "name": "大农业",
        "change_pct": 2.52
      },
      {
        "name": "预制菜",
        "change_pct": 4.0
      },
      {
        "name": "人造肉",
        "change_pct": 3.25
      },
      {
        "name": "国企改革",
        "change_pct": 1.4
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 5,
    "hot_rank_chg": 16,
    "stock_cnt": 5779,
    "price": "5.24",
    "change": "1.94",
    "market_id": "17",
    "circulate_market_value": "8207410900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 0.63
      },
      {
        "name": "共享经济",
        "change_pct": 1.62
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.52
      },
      {
        "name": "旅游",
        "change_pct": 2.13
      },
      {
        "name": "物业管理",
        "change_pct": 2.58
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 8,
    "hot_rank_chg": -1,
    "stock_cnt": 5779,
    "price": "8.28",
    "change": "-2.92",
    "market_id": "17",
    "circulate_market_value": "20903632000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.06
      },
      {
        "name": "工业大麻",
        "change_pct": 0.89
      },
      {
        "name": "中药",
        "change_pct": 1.1
      },
      {
        "name": "强势人气股",
        "change_pct": -0.13
      },
      {
        "name": "保健品",
        "change_pct": 1.36
      },
      {
        "name": "民营医院",
        "change_pct": 0.89
      },
      {
        "name": "医药",
        "change_pct": 0.85
      },
      {
        "name": "化学原料药",
        "change_pct": 0.78
      },
      {
        "name": "流感",
        "change_pct": 1.01
      },
      {
        "name": "振兴东北",
        "change_pct": 1.37
      },
      {
        "name": "食品",
        "change_pct": 2.13
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 12,
    "hot_rank_chg": 208,
    "stock_cnt": 5779,
    "price": "11.18",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "7292445100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "数字人民币",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.46
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 2.51
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.63
      },
      {
        "name": "新零售",
        "change_pct": 1.6
      },
      {
        "name": "移动支付",
        "change_pct": 2.01
      },
      {
        "name": "京津冀",
        "change_pct": 1.78
      },
      {
        "name": "北京城市规划",
        "change_pct": 2.25
      },
      {
        "name": "国产芯片",
        "change_pct": -0.27
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.85
      },
      {
        "name": "物业管理",
        "change_pct": 2.58
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.32
      },
      {
        "name": "国企改革",
        "change_pct": 1.4
      },
      {
        "name": "数字人民币",
        "change_pct": 3.1
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.89
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 13,
    "hot_rank_chg": 14,
    "stock_cnt": 5779,
    "price": "3.15",
    "change": "10.14",
    "market_id": "33",
    "circulate_market_value": "7379467600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.6
      },
      {
        "name": "强势人气股",
        "change_pct": -0.13
      },
      {
        "name": "人工智能",
        "change_pct": 1.47
      },
      {
        "name": "VR&AR",
        "change_pct": 0.48
      },
      {
        "name": "京津冀",
        "change_pct": 1.78
      },
      {
        "name": "装修装饰",
        "change_pct": 1.68
      },
      {
        "name": "住房租赁",
        "change_pct": 3.07
      },
      {
        "name": "破净股",
        "change_pct": 1.42
      },
      {
        "name": "数字经济",
        "change_pct": 1.99
      },
      {
        "name": "房产经纪",
        "change_pct": 4.66
      },
      {
        "name": "物业管理",
        "change_pct": 2.58
      },
      {
        "name": "低价股",
        "change_pct": 1.79
      },
      {
        "name": "华为产业链",
        "change_pct": 0.82
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.89
      }
    ]
  },
  {
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 15,
    "hot_rank_chg": 0,
    "stock_cnt": 5779,
    "price": "7.65",
    "change": "-4.49",
    "market_id": "33",
    "circulate_market_value": "2910269500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.27
      },
      {
        "name": "有机硅",
        "change_pct": -0.11
      },
      {
        "name": "装修装饰",
        "change_pct": 1.68
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.62
      },
      {
        "name": "光伏",
        "change_pct": 0.72
      },
      {
        "name": "船舶",
        "change_pct": 2.79
      },
      {
        "name": "固态电池",
        "change_pct": 0.09
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.64
      },
      {
        "name": "旧改",
        "change_pct": 1.61
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 0.84
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 17,
    "hot_rank_chg": 29,
    "stock_cnt": 5779,
    "price": "5.17",
    "change": "3.82",
    "market_id": "33",
    "circulate_market_value": "13687161000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.13
      },
      {
        "name": "装修装饰",
        "change_pct": 1.68
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.62
      },
      {
        "name": "航天",
        "change_pct": 0.9
      },
      {
        "name": "旧改",
        "change_pct": 1.61
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 20,
    "hot_rank_chg": 15,
    "stock_cnt": 5779,
    "price": "5.59",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "3973365300.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "AIGC影视",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 1.47
      },
      {
        "name": "影视",
        "change_pct": 2.58
      },
      {
        "name": "旅游",
        "change_pct": 2.13
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.72
      },
      {
        "name": "AI营销",
        "change_pct": 3.94
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.89
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.95
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.35
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 23,
    "hot_rank_chg": 37,
    "stock_cnt": 5779,
    "price": "12.20",
    "change": "3.39",
    "market_id": "17",
    "circulate_market_value": "4691481100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 0.74
      },
      {
        "name": "股权转让",
        "change_pct": 0.79
      },
      {
        "name": "强势人气股",
        "change_pct": -0.13
      },
      {
        "name": "新疆概念",
        "change_pct": 1.95
      },
      {
        "name": "医药",
        "change_pct": 0.85
      },
      {
        "name": "流感",
        "change_pct": 1.01
      },
      {
        "name": "国资入股",
        "change_pct": 0.95
      },
      {
        "name": "减肥药",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "002328",
    "name": "新朋股份",
    "hot_rank": 24,
    "hot_rank_chg": 4,
    "stock_cnt": 5779,
    "price": "10.15",
    "change": "0.49",
    "market_id": "33",
    "circulate_market_value": "5792461800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 1.16
      },
      {
        "name": "特斯拉",
        "change_pct": 0.14
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.52
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.5
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.48
      },
      {
        "name": "储能",
        "change_pct": 1.0
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.53
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 27,
    "hot_rank_chg": -10,
    "stock_cnt": 5779,
    "price": "11.84",
    "change": "-4.36",
    "market_id": "17",
    "circulate_market_value": "21183397000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 2.02
      },
      {
        "name": "纯碱",
        "change_pct": 0.97
      },
      {
        "name": "食品",
        "change_pct": 2.13
      },
      {
        "name": "土壤修复",
        "change_pct": 1.0
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.84
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.07
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.57
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 30,
    "hot_rank_chg": 33,
    "stock_cnt": 5779,
    "price": "9.52",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "4196625000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 0.84
      },
      {
        "name": "锂电池",
        "change_pct": 0.09
      },
      {
        "name": "强势人气股",
        "change_pct": -0.13
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.48
      },
      {
        "name": "两轮车",
        "change_pct": 1.03
      },
      {
        "name": "珠宝饰品",
        "change_pct": 1.23
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 33,
    "hot_rank_chg": -13,
    "stock_cnt": 5779,
    "price": "5.12",
    "change": "-10.02",
    "market_id": "17",
    "circulate_market_value": "6238269600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.45
      },
      {
        "name": "煤炭",
        "change_pct": 0.4
      },
      {
        "name": "有色金属",
        "change_pct": -0.06
      },
      {
        "name": "国企改革",
        "change_pct": 1.4
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.03
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 34,
    "hot_rank_chg": -4,
    "stock_cnt": 5779,
    "price": "5.91",
    "change": "2.25",
    "market_id": "33",
    "circulate_market_value": "5853224100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.38
      },
      {
        "name": "旅游",
        "change_pct": 2.13
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.72
      },
      {
        "name": "国企改革",
        "change_pct": 1.4
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 37,
    "hot_rank_chg": -18,
    "stock_cnt": 5779,
    "price": "11.20",
    "change": "1.45",
    "market_id": "17",
    "circulate_market_value": "9732271200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.06
      },
      {
        "name": "快递物流",
        "change_pct": 1.53
      },
      {
        "name": "新零售",
        "change_pct": 1.6
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.5
      },
      {
        "name": "旅游",
        "change_pct": 2.13
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.62
      },
      {
        "name": "物业管理",
        "change_pct": 2.58
      },
      {
        "name": "免税店概念",
        "change_pct": 1.75
      },
      {
        "name": "自贸区",
        "change_pct": 1.88
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 38,
    "hot_rank_chg": 26,
    "stock_cnt": 5779,
    "price": "8.55",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "13910797000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI影视",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.06
      },
      {
        "name": "电竞",
        "change_pct": 2.88
      },
      {
        "name": "手游",
        "change_pct": 3.19
      },
      {
        "name": "强势人气股",
        "change_pct": -0.13
      },
      {
        "name": "人工智能",
        "change_pct": 1.47
      },
      {
        "name": "游戏",
        "change_pct": 2.76
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.99
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.85
      },
      {
        "name": "快手概念股",
        "change_pct": 3.49
      },
      {
        "name": "元宇宙",
        "change_pct": 1.94
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.72
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.84
      },
      {
        "name": "web3.0",
        "change_pct": 2.8
      },
      {
        "name": "AIGC概念",
        "change_pct": 2.43
      },
      {
        "name": "数据要素",
        "change_pct": 2.29
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.32
      },
      {
        "name": "AI营销",
        "change_pct": 3.94
      },
      {
        "name": "ChatGPT",
        "change_pct": 2.22
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.04
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.89
      },
      {
        "name": "人形机器人",
        "change_pct": -0.27
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.95
      },
      {
        "name": "多模态",
        "change_pct": 2.05
      },
      {
        "name": "AI视频",
        "change_pct": 3.49
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.35
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.44
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 46,
    "hot_rank_chg": 20,
    "stock_cnt": 5779,
    "price": "4.50",
    "change": "1.81",
    "market_id": "17",
    "circulate_market_value": "5749199100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.54
      },
      {
        "name": "化肥",
        "change_pct": 1.39
      },
      {
        "name": "保健品",
        "change_pct": 1.36
      },
      {
        "name": "民营医院",
        "change_pct": 0.89
      },
      {
        "name": "医药",
        "change_pct": 0.85
      },
      {
        "name": "煤化工",
        "change_pct": 0.78
      },
      {
        "name": "食品",
        "change_pct": 2.13
      },
      {
        "name": "大农业",
        "change_pct": 2.52
      },
      {
        "name": "干细胞",
        "change_pct": 1.0
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 1.1
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 50,
    "hot_rank_chg": 1,
    "stock_cnt": 5779,
    "price": "9.25",
    "change": "1.76",
    "market_id": "17",
    "circulate_market_value": "4433709800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.1
      },
      {
        "name": "强势人气股",
        "change_pct": -0.13
      },
      {
        "name": "医药商业",
        "change_pct": 1.85
      },
      {
        "name": "医药",
        "change_pct": 0.85
      },
      {
        "name": "流感",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 56,
    "hot_rank_chg": -14,
    "stock_cnt": 5779,
    "price": "8.16",
    "change": "-2.86",
    "market_id": "33",
    "circulate_market_value": "5886678300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": 1.07
      },
      {
        "name": "充电桩",
        "change_pct": 0.98
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.5
      },
      {
        "name": "军民融合",
        "change_pct": 1.0
      },
      {
        "name": "光伏",
        "change_pct": 0.72
      },
      {
        "name": "风电",
        "change_pct": 1.1
      },
      {
        "name": "军工",
        "change_pct": 1.23
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.48
      },
      {
        "name": "特高压",
        "change_pct": 1.18
      },
      {
        "name": "自贸区",
        "change_pct": 1.88
      },
      {
        "name": "海洋经济",
        "change_pct": 1.66
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 57,
    "hot_rank_chg": -32,
    "stock_cnt": 5779,
    "price": "5.29",
    "change": "-6.37",
    "market_id": "33",
    "circulate_market_value": "6011556000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 0.63
      },
      {
        "name": "锂电池",
        "change_pct": 0.09
      },
      {
        "name": "石墨烯",
        "change_pct": 0.56
      },
      {
        "name": "新能源整车",
        "change_pct": 1.3
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.52
      },
      {
        "name": "汽车整车",
        "change_pct": 1.77
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.48
      },
      {
        "name": "白色家电",
        "change_pct": 0.48
      },
      {
        "name": "家电",
        "change_pct": 0.52
      },
      {
        "name": "汽车热管理",
        "change_pct": 0.42
      },
      {
        "name": "热泵",
        "change_pct": -0.2
      },
      {
        "name": "轮边电机",
        "change_pct": 0.4
      },
      {
        "name": "超级电容",
        "change_pct": 0.05
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 58,
    "hot_rank_chg": 10,
    "stock_cnt": 5779,
    "price": "12.65",
    "change": "0.08",
    "market_id": "33",
    "circulate_market_value": "11322079300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.79
      },
      {
        "name": "期货概念",
        "change_pct": 2.0
      },
      {
        "name": "券商",
        "change_pct": 1.35
      },
      {
        "name": "大金融",
        "change_pct": 1.12
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "600185",
    "name": "珠免集团",
    "hot_rank": 60,
    "hot_rank_chg": -12,
    "stock_cnt": 5779,
    "price": "5.40",
    "change": "2.27",
    "market_id": "17",
    "circulate_market_value": "10179031300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.06
      },
      {
        "name": "资产重组",
        "change_pct": 0.69
      },
      {
        "name": "股权转让",
        "change_pct": 0.79
      },
      {
        "name": "房地产",
        "change_pct": 2.07
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.49
      },
      {
        "name": "横琴新区",
        "change_pct": 2.29
      },
      {
        "name": "免税店概念",
        "change_pct": 1.75
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 69,
    "hot_rank_chg": -35,
    "stock_cnt": 5779,
    "price": "11.35",
    "change": "-1.99",
    "market_id": "33",
    "circulate_market_value": "26383324000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -0.94
      },
      {
        "name": "有色 · 铜",
        "change_pct": -0.31
      },
      {
        "name": "有色 · 锑",
        "change_pct": -1.14
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.74
      },
      {
        "name": "有色 · 锌",
        "change_pct": -0.74
      },
      {
        "name": "有色金属",
        "change_pct": -0.06
      },
      {
        "name": "国企改革",
        "change_pct": 1.4
      },
      {
        "name": "白银",
        "change_pct": -1.28
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 70,
    "hot_rank_chg": -5,
    "stock_cnt": 5779,
    "price": "5.69",
    "change": "-0.53",
    "market_id": "33",
    "circulate_market_value": "200885320000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.45
      },
      {
        "name": "手机产业链",
        "change_pct": -0.34
      },
      {
        "name": "超高清视频",
        "change_pct": 0.74
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.82
      },
      {
        "name": "电竞",
        "change_pct": 2.88
      },
      {
        "name": "半导体",
        "change_pct": -0.73
      },
      {
        "name": "人工智能",
        "change_pct": 1.47
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.45
      },
      {
        "name": "VR&AR",
        "change_pct": 0.48
      },
      {
        "name": "OLED",
        "change_pct": -0.2
      },
      {
        "name": "京津冀",
        "change_pct": 1.78
      },
      {
        "name": "物联网",
        "change_pct": 0.89
      },
      {
        "name": "指纹识别",
        "change_pct": -0.08
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.5
      },
      {
        "name": "白马股",
        "change_pct": 0.97
      },
      {
        "name": "智能制造",
        "change_pct": 0.43
      },
      {
        "name": "小米概念股",
        "change_pct": -0.06
      },
      {
        "name": "国产芯片",
        "change_pct": -0.27
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.39
      },
      {
        "name": "全息概念",
        "change_pct": 0.98
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.26
      },
      {
        "name": "MicroLED",
        "change_pct": 0.05
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.62
      },
      {
        "name": "智能手表",
        "change_pct": -0.09
      },
      {
        "name": "MiniLED",
        "change_pct": 0.2
      },
      {
        "name": "传感器",
        "change_pct": 0.31
      },
      {
        "name": "大硅片",
        "change_pct": -1.78
      },
      {
        "name": "AI PC",
        "change_pct": -0.36
      },
      {
        "name": "华为产业链",
        "change_pct": 0.82
      },
      {
        "name": "回购",
        "change_pct": 1.12
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -0.98
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.04
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.53
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 71,
    "hot_rank_chg": 4,
    "stock_cnt": 5779,
    "price": "9.99",
    "change": "-7.41",
    "market_id": "33",
    "circulate_market_value": "2844816100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 1.1
      },
      {
        "name": "强势人气股",
        "change_pct": -0.13
      },
      {
        "name": "教育",
        "change_pct": 1.47
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.62
      },
      {
        "name": "职业教育",
        "change_pct": 1.68
      },
      {
        "name": "在线教育",
        "change_pct": 0.93
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.8
      },
      {
        "name": "华为产业链",
        "change_pct": 0.82
      },
      {
        "name": "智谱AI",
        "change_pct": 2.02
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 72,
    "hot_rank_chg": -10,
    "stock_cnt": 5779,
    "price": "3.60",
    "change": "-2.44",
    "market_id": "17",
    "circulate_market_value": "7964384600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 0.85
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.52
      },
      {
        "name": "光通信",
        "change_pct": -0.73
      },
      {
        "name": "林业",
        "change_pct": 3.01
      },
      {
        "name": "军民融合",
        "change_pct": 1.0
      },
      {
        "name": "军工",
        "change_pct": 1.23
      },
      {
        "name": "人造肉",
        "change_pct": 3.25
      }
    ]
  },
  {
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 73,
    "hot_rank_chg": 19,
    "stock_cnt": 5779,
    "price": "4.36",
    "change": "10.10",
    "market_id": "17",
    "circulate_market_value": "8488549900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "玉米制种",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.06
      },
      {
        "name": "农业种植",
        "change_pct": 3.59
      },
      {
        "name": "土地流转",
        "change_pct": 2.78
      },
      {
        "name": "农垦",
        "change_pct": 4.24
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.1
      },
      {
        "name": "食品",
        "change_pct": 2.13
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 1.89
      },
      {
        "name": "大农业",
        "change_pct": 2.52
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 1.84
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 75,
    "hot_rank_chg": 39,
    "stock_cnt": 5779,
    "price": "6.30",
    "change": "4.12",
    "market_id": "17",
    "circulate_market_value": "3668488600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 3.59
      },
      {
        "name": "新疆国企改革",
        "change_pct": 2.47
      },
      {
        "name": "农垦",
        "change_pct": 4.24
      },
      {
        "name": "棉花",
        "change_pct": 3.0
      },
      {
        "name": "新疆概念",
        "change_pct": 1.95
      },
      {
        "name": "风电",
        "change_pct": 1.1
      },
      {
        "name": "大农业",
        "change_pct": 2.51
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 84,
    "hot_rank_chg": -2,
    "stock_cnt": 5779,
    "price": "4.85",
    "change": "3.85",
    "market_id": "33",
    "circulate_market_value": "28454313000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.89
      },
      {
        "name": "人工智能",
        "change_pct": 1.47
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.49
      },
      {
        "name": "水利",
        "change_pct": 1.33
      },
      {
        "name": "直播/短视频",
        "change_pct": 3.38
      },
      {
        "name": "大数据",
        "change_pct": 1.85
      },
      {
        "name": "园林",
        "change_pct": 1.79
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.07
      },
      {
        "name": "数字经济",
        "change_pct": 1.98
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.84
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.22
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.14
      },
      {
        "name": "快手概念股",
        "change_pct": 3.5
      },
      {
        "name": "IGBT",
        "change_pct": -0.01
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.75
      },
      {
        "name": "AIGC概念",
        "change_pct": 2.44
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.33
      },
      {
        "name": "氮化镓",
        "change_pct": 0.11
      },
      {
        "name": "AI营销",
        "change_pct": 3.97
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.89
      },
      {
        "name": "多模态",
        "change_pct": 2.07
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.22
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.46
      },
      {
        "name": "区块链",
        "change_pct": 2.2
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 85,
    "hot_rank_chg": 9,
    "stock_cnt": 5779,
    "price": "4.09",
    "change": "-3.53",
    "market_id": "33",
    "circulate_market_value": "8620972900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.06
      },
      {
        "name": "强势人气股",
        "change_pct": -0.15
      },
      {
        "name": "维生素",
        "change_pct": 2.32
      },
      {
        "name": "基因测序",
        "change_pct": 0.87
      },
      {
        "name": "民营医院",
        "change_pct": 0.86
      },
      {
        "name": "医药",
        "change_pct": 0.85
      },
      {
        "name": "化学原料药",
        "change_pct": 0.79
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 0.22
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 92,
    "hot_rank_chg": 4,
    "stock_cnt": 5779,
    "price": "4.97",
    "change": "-8.62",
    "market_id": "17",
    "circulate_market_value": "2785411300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 3.25
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.13
      },
      {
        "name": "游戏",
        "change_pct": 2.81
      },
      {
        "name": "影视",
        "change_pct": 2.65
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.98
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 96,
    "hot_rank_chg": -27,
    "stock_cnt": 5779,
    "price": "5.83",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "6779399900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 2.65
      },
      {
        "name": "新疆概念",
        "change_pct": 1.92
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.84
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.98
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.39
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "003040", "name": "楚天龙", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5779, "price": "21.12", "change": "10.00", "market_id": "33", "circulate_market_value": "9648677400.00", "change_type": "1", "change_section": "11", "change_days": "7", "change_reason": "数字人民币"}, {"code": "601086", "name": "国芳集团", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5779, "price": "12.02", "change": "-1.39", "market_id": "17", "circulate_market_value": "8018640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 1.6}, {"name": "强势人气股", "change_pct": -0.13}]}, {"code": "002104", "name": "恒宝股份", "hot_rank": 3, "hot_rank_chg": 19, "stock_cnt": 5779, "price": "14.05", "change": "7.74", "market_id": "33", "circulate_market_value": "8543160300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5779, "price": "12.43", "change": "-1.89", "market_id": "17", "circulate_market_value": "7977365400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.54}, {"name": "农业种植", "change_pct": 3.59}, {"name": "强势人气股", "change_pct": -0.13}, {"name": "湖南国企改革", "change_pct": 1.74}, {"name": "乡村振兴", "change_pct": 2.1}, {"name": "休闲食品", "change_pct": 2.32}, {"name": "食品", "change_pct": 2.13}, {"name": "食品安全", "change_pct": 1.83}, {"name": "社区团购", "change_pct": 2.69}, {"name": "大农业", "change_pct": 2.52}, {"name": "预制菜", "change_pct": 4.0}, {"name": "人造肉", "change_pct": 3.25}, {"name": "国企改革", "change_pct": 1.4}]}, {"code": "600611", "name": "大众交通", "hot_rank": 5, "hot_rank_chg": 16, "stock_cnt": 5779, "price": "5.24", "change": "1.94", "market_id": "17", "circulate_market_value": "8207410900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.63}, {"name": "共享经济", "change_pct": 1.62}, {"name": "云计算数据中心", "change_pct": 0.52}, {"name": "旅游", "change_pct": 2.13}, {"name": "物业管理", "change_pct": 2.58}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5779, "price": "16.07", "change": "0.94", "market_id": "17", "circulate_market_value": "20638357000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 7, "hot_rank_chg": -6, "stock_cnt": 5779, "price": "21.56", "change": "2.47", "market_id": "17", "circulate_market_value": "47871439000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5779, "price": "8.28", "change": "-2.92", "market_id": "17", "circulate_market_value": "20903632000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.06}, {"name": "工业大麻", "change_pct": 0.89}, {"name": "中药", "change_pct": 1.1}, {"name": "强势人气股", "change_pct": -0.13}, {"name": "保健品", "change_pct": 1.36}, {"name": "民营医院", "change_pct": 0.89}, {"name": "医药", "change_pct": 0.85}, {"name": "化学原料药", "change_pct": 0.78}, {"name": "流感", "change_pct": 1.01}, {"name": "振兴东北", "change_pct": 1.37}, {"name": "食品", "change_pct": 2.13}]}, {"code": "002703", "name": "浙江世宝", "hot_rank": 9, "hot_rank_chg": 22, "stock_cnt": 5779, "price": "17.39", "change": "-4.18", "market_id": "33", "circulate_market_value": "10197236500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 11, "hot_rank_chg": -3, "stock_cnt": 5779, "price": "18.08", "change": "4.33", "market_id": "17", "circulate_market_value": "12300179700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603123", "name": "翠微股份", "hot_rank": 12, "hot_rank_chg": 208, "stock_cnt": 5779, "price": "11.18", "change": "10.04", "market_id": "17", "circulate_market_value": "7292445100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数字人民币", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.46}, {"name": "蚂蚁集团概念股", "change_pct": 2.51}, {"name": "无人驾驶", "change_pct": 0.63}, {"name": "新零售", "change_pct": 1.6}, {"name": "移动支付", "change_pct": 2.01}, {"name": "京津冀", "change_pct": 1.78}, {"name": "北京城市规划", "change_pct": 2.25}, {"name": "国产芯片", "change_pct": -0.27}, {"name": "阿里巴巴概念股", "change_pct": 1.62}, {"name": "腾讯概念股", "change_pct": 1.85}, {"name": "物业管理", "change_pct": 2.58}, {"name": "字节跳动概念股", "change_pct": 2.32}, {"name": "国企改革", "change_pct": 1.4}, {"name": "数字人民币", "change_pct": 3.1}, {"name": "AI大模型/智能体", "change_pct": 1.89}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 13, "hot_rank_chg": 14, "stock_cnt": 5779, "price": "3.15", "change": "10.14", "market_id": "33", "circulate_market_value": "7379467600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 1.6}, {"name": "强势人气股", "change_pct": -0.13}, {"name": "人工智能", "change_pct": 1.47}, {"name": "VR&AR", "change_pct": 0.48}, {"name": "京津冀", "change_pct": 1.78}, {"name": "装修装饰", "change_pct": 1.68}, {"name": "住房租赁", "change_pct": 3.07}, {"name": "破净股", "change_pct": 1.42}, {"name": "数字经济", "change_pct": 1.99}, {"name": "房产经纪", "change_pct": 4.66}, {"name": "物业管理", "change_pct": 2.58}, {"name": "低价股", "change_pct": 1.79}, {"name": "华为产业链", "change_pct": 0.82}, {"name": "AI大模型/智能体", "change_pct": 1.89}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 14, "hot_rank_chg": 4, "stock_cnt": 5779, "price": "15.55", "change": "9.97", "market_id": "17", "circulate_market_value": "6911111100.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "AI漫剧"}, {"code": "002909", "name": "集泰股份", "hot_rank": 15, "hot_rank_chg": 0, "stock_cnt": 5779, "price": "7.65", "change": "-4.49", "market_id": "33", "circulate_market_value": "2910269500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.27}, {"name": "有机硅", "change_pct": -0.11}, {"name": "装修装饰", "change_pct": 1.68}, {"name": "装配式建筑", "change_pct": 1.62}, {"name": "光伏", "change_pct": 0.72}, {"name": "船舶", "change_pct": 2.79}, {"name": "固态电池", "change_pct": 0.09}, {"name": "新型城镇化", "change_pct": 1.64}, {"name": "旧改", "change_pct": 1.61}, {"name": "飞行汽车/eVTOL", "change_pct": 0.84}, {"name": "液冷服务器", "change_pct": -1.16}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 16, "hot_rank_chg": 16, "stock_cnt": 5779, "price": "27.30", "change": "-2.78", "market_id": "17", "circulate_market_value": "10947300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 17, "hot_rank_chg": 29, "stock_cnt": 5779, "price": "5.17", "change": "3.82", "market_id": "33", "circulate_market_value": "13687161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.13}, {"name": "装修装饰", "change_pct": 1.68}, {"name": "装配式建筑", "change_pct": 1.62}, {"name": "航天", "change_pct": 0.9}, {"name": "旧改", "change_pct": 1.61}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 18, "hot_rank_chg": -8, "stock_cnt": 5779, "price": "36.80", "change": "-6.24", "market_id": "17", "circulate_market_value": "25442623000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 20, "hot_rank_chg": 15, "stock_cnt": 5779, "price": "5.59", "change": "10.04", "market_id": "33", "circulate_market_value": "3973365300.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "AIGC影视", "xgb_concepts": [{"name": "人工智能", "change_pct": 1.47}, {"name": "影视", "change_pct": 2.58}, {"name": "旅游", "change_pct": 2.13}, {"name": "虚拟数字人", "change_pct": 2.72}, {"name": "AI营销", "change_pct": 3.94}, {"name": "AI大模型/智能体", "change_pct": 1.89}, {"name": "短剧/互动影游", "change_pct": 2.95}, {"name": "IP经济/谷子经济", "change_pct": 2.35}]}, {"code": "002297", "name": "博云新材", "hot_rank": 21, "hot_rank_chg": -5, "stock_cnt": 5779, "price": "21.77", "change": "-1.14", "market_id": "33", "circulate_market_value": "12465029800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300468", "name": "四方精创", "hot_rank": 22, "hot_rank_chg": 301, "stock_cnt": 5779, "price": "28.32", "change": "17.96", "market_id": "33", "circulate_market_value": "15004337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 23, "hot_rank_chg": 37, "stock_cnt": 5779, "price": "12.20", "change": "3.39", "market_id": "17", "circulate_market_value": "4691481100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 0.74}, {"name": "股权转让", "change_pct": 0.79}, {"name": "强势人气股", "change_pct": -0.13}, {"name": "新疆概念", "change_pct": 1.95}, {"name": "医药", "change_pct": 0.85}, {"name": "流感", "change_pct": 1.01}, {"name": "国资入股", "change_pct": 0.95}, {"name": "减肥药", "change_pct": 0.58}]}, {"code": "002328", "name": "新朋股份", "hot_rank": 24, "hot_rank_chg": 4, "stock_cnt": 5779, "price": "10.15", "change": "0.49", "market_id": "33", "circulate_market_value": "5792461800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 1.16}, {"name": "特斯拉", "change_pct": 0.14}, {"name": "云计算数据中心", "change_pct": 0.52}, {"name": "汽车零部件", "change_pct": 0.5}, {"name": "新能源汽车", "change_pct": 0.48}, {"name": "储能", "change_pct": 1.0}, {"name": "新能源车零部件", "change_pct": 0.53}, {"name": "液冷服务器", "change_pct": -1.16}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 25, "hot_rank_chg": 1, "stock_cnt": 5779, "price": "63.98", "change": "-1.99", "market_id": "17", "circulate_market_value": "157008820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 26, "hot_rank_chg": -14, "stock_cnt": 5779, "price": "13.48", "change": "-2.95", "market_id": "17", "circulate_market_value": "67251972000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 27, "hot_rank_chg": -10, "stock_cnt": 5779, "price": "11.84", "change": "-4.36", "market_id": "17", "circulate_market_value": "21183397000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 2.02}, {"name": "纯碱", "change_pct": 0.97}, {"name": "食品", "change_pct": 2.13}, {"name": "土壤修复", "change_pct": 1.0}, {"name": "东数西算/算力", "change_pct": 0.84}, {"name": "OpenClaw概念", "change_pct": 1.07}, {"name": "DeepSeek概念股", "change_pct": 1.57}]}, {"code": "603270", "name": "金帝股份", "hot_rank": 28, "hot_rank_chg": 9, "stock_cnt": 5779, "price": "34.98", "change": "0.09", "market_id": "17", "circulate_market_value": "2473669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 29, "hot_rank_chg": -18, "stock_cnt": 5779, "price": "548.75", "change": "-0.36", "market_id": "17", "circulate_market_value": "16502513000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 30, "hot_rank_chg": 33, "stock_cnt": 5779, "price": "9.52", "change": "-10.02", "market_id": "33", "circulate_market_value": "4196625000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.84}, {"name": "锂电池", "change_pct": 0.09}, {"name": "强势人气股", "change_pct": -0.13}, {"name": "新能源汽车", "change_pct": 0.48}, {"name": "两轮车", "change_pct": 1.03}, {"name": "珠宝饰品", "change_pct": 1.23}]}, {"code": "002837", "name": "英维克", "hot_rank": 31, "hot_rank_chg": -8, "stock_cnt": 5779, "price": "64.86", "change": "-5.29", "market_id": "33", "circulate_market_value": "73513285000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 32, "hot_rank_chg": 9, "stock_cnt": 5779, "price": "78.11", "change": "-9.55", "market_id": "33", "circulate_market_value": "114566113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 33, "hot_rank_chg": -13, "stock_cnt": 5779, "price": "5.12", "change": "-10.02", "market_id": "17", "circulate_market_value": "6238269600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.45}, {"name": "煤炭", "change_pct": 0.4}, {"name": "有色金属", "change_pct": -0.06}, {"name": "国企改革", "change_pct": 1.4}, {"name": "河南国企改革", "change_pct": -0.03}]}, {"code": "002059", "name": "云南旅游", "hot_rank": 34, "hot_rank_chg": -4, "stock_cnt": 5779, "price": "5.91", "change": "2.25", "market_id": "33", "circulate_market_value": "5853224100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.38}, {"name": "旅游", "change_pct": 2.13}, {"name": "虚拟数字人", "change_pct": 2.72}, {"name": "国企改革", "change_pct": 1.4}]}, {"code": "003005", "name": "竞业达", "hot_rank": 35, "hot_rank_chg": -6, "stock_cnt": 5779, "price": "19.19", "change": "-6.53", "market_id": "33", "circulate_market_value": "2575195800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 36, "hot_rank_chg": 185, "stock_cnt": 5779, "price": "66.15", "change": "9.99", "market_id": "33", "circulate_market_value": "18257326000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "控股股东拟变更"}, {"code": "600693", "name": "东百集团", "hot_rank": 37, "hot_rank_chg": -18, "stock_cnt": 5779, "price": "11.20", "change": "1.45", "market_id": "17", "circulate_market_value": "9732271200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.06}, {"name": "快递物流", "change_pct": 1.53}, {"name": "新零售", "change_pct": 1.6}, {"name": "福建自贸/海西概念", "change_pct": 2.5}, {"name": "旅游", "change_pct": 2.13}, {"name": "阿里巴巴概念股", "change_pct": 1.62}, {"name": "物业管理", "change_pct": 2.58}, {"name": "免税店概念", "change_pct": 1.75}, {"name": "自贸区", "change_pct": 1.88}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 38, "hot_rank_chg": 26, "stock_cnt": 5779, "price": "8.55", "change": "10.04", "market_id": "33", "circulate_market_value": "13910797000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI影视", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.06}, {"name": "电竞", "change_pct": 2.88}, {"name": "手游", "change_pct": 3.19}, {"name": "强势人气股", "change_pct": -0.13}, {"name": "人工智能", "change_pct": 1.47}, {"name": "游戏", "change_pct": 2.76}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.99}, {"name": "腾讯概念股", "change_pct": 1.85}, {"name": "快手概念股", "change_pct": 3.49}, {"name": "元宇宙", "change_pct": 1.94}, {"name": "虚拟数字人", "change_pct": 2.72}, {"name": "东数西算/算力", "change_pct": 0.84}, {"name": "web3.0", "change_pct": 2.8}, {"name": "AIGC概念", "change_pct": 2.43}, {"name": "数据要素", "change_pct": 2.29}, {"name": "字节跳动概念股", "change_pct": 2.32}, {"name": "AI营销", "change_pct": 3.94}, {"name": "ChatGPT", "change_pct": 2.22}, {"name": "智能眼镜/MR头显", "change_pct": 0.04}, {"name": "AI大模型/智能体", "change_pct": 1.89}, {"name": "人形机器人", "change_pct": -0.27}, {"name": "短剧/互动影游", "change_pct": 2.95}, {"name": "多模态", "change_pct": 2.05}, {"name": "AI视频", "change_pct": 3.49}, {"name": "IP经济/谷子经济", "change_pct": 2.35}, {"name": "小红书概念股", "change_pct": 3.44}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 39, "hot_rank_chg": 14, "stock_cnt": 5779, "price": "21.48", "change": "6.60", "market_id": "33", "circulate_market_value": "21946115000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 40, "hot_rank_chg": 12, "stock_cnt": 5779, "price": "35.77", "change": "-6.16", "market_id": "33", "circulate_market_value": "102333400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 41, "hot_rank_chg": -3, "stock_cnt": 5779, "price": "41.15", "change": "-3.47", "market_id": "17", "circulate_market_value": "163430810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 42, "hot_rank_chg": -6, "stock_cnt": 5779, "price": "37.65", "change": "-5.02", "market_id": "33", "circulate_market_value": "28524253000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600967", "name": "内蒙一机", "hot_rank": 43, "hot_rank_chg": 0, "stock_cnt": 5779, "price": "14.00", "change": "3.32", "market_id": "17", "circulate_market_value": "23842143000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 44, "hot_rank_chg": -30, "stock_cnt": 5779, "price": "13.61", "change": "-4.56", "market_id": "17", "circulate_market_value": "5695881900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 45, "hot_rank_chg": 53, "stock_cnt": 5779, "price": "181.61", "change": "1.36", "market_id": "33", "circulate_market_value": "251756020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 46, "hot_rank_chg": 20, "stock_cnt": 5779, "price": "4.50", "change": "1.81", "market_id": "17", "circulate_market_value": "5749199100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.54}, {"name": "化肥", "change_pct": 1.39}, {"name": "保健品", "change_pct": 1.36}, {"name": "民营医院", "change_pct": 0.89}, {"name": "医药", "change_pct": 0.85}, {"name": "煤化工", "change_pct": 0.78}, {"name": "食品", "change_pct": 2.13}, {"name": "大农业", "change_pct": 2.52}, {"name": "干细胞", "change_pct": 1.0}, {"name": "阿尔茨海默病", "change_pct": 1.1}]}, {"code": "605580", "name": "恒盛能源", "hot_rank": 47, "hot_rank_chg": 55, "stock_cnt": 5779, "price": "22.47", "change": "9.98", "market_id": "17", "circulate_market_value": "6291600000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "培育钻石"}, {"code": "002472", "name": "双环传动", "hot_rank": 48, "hot_rank_chg": 517, "stock_cnt": 5779, "price": "38.91", "change": "9.85", "market_id": "33", "circulate_market_value": "29453620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 49, "hot_rank_chg": -10, "stock_cnt": 5779, "price": "829.16", "change": "1.99", "market_id": "33", "circulate_market_value": "920315370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 50, "hot_rank_chg": 1, "stock_cnt": 5779, "price": "9.25", "change": "1.76", "market_id": "17", "circulate_market_value": "4433709800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.1}, {"name": "强势人气股", "change_pct": -0.13}, {"name": "医药商业", "change_pct": 1.85}, {"name": "医药", "change_pct": 0.85}, {"name": "流感", "change_pct": 1.01}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 51, "hot_rank_chg": 10, "stock_cnt": 5779, "price": "27.93", "change": "-6.99", "market_id": "17", "circulate_market_value": "6766601100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002980", "name": "华盛昌", "hot_rank": 52, "hot_rank_chg": 31, "stock_cnt": 5779, "price": "109.10", "change": "2.42", "market_id": "33", "circulate_market_value": "11064572100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 53, "hot_rank_chg": -6, "stock_cnt": 5779, "price": "34.02", "change": "-1.87", "market_id": "33", "circulate_market_value": "36783650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 54, "hot_rank_chg": -41, "stock_cnt": 5779, "price": "14.23", "change": "1.14", "market_id": "33", "circulate_market_value": "9393294900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003018", "name": "金富科技", "hot_rank": 55, "hot_rank_chg": -31, "stock_cnt": 5779, "price": "56.45", "change": "0.04", "market_id": "33", "circulate_market_value": "16060677000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002300", "name": "太阳电缆", "hot_rank": 56, "hot_rank_chg": -14, "stock_cnt": 5779, "price": "8.16", "change": "-2.86", "market_id": "33", "circulate_market_value": "5886678300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": 1.07}, {"name": "充电桩", "change_pct": 0.98}, {"name": "福建自贸/海西概念", "change_pct": 2.5}, {"name": "军民融合", "change_pct": 1.0}, {"name": "光伏", "change_pct": 0.72}, {"name": "风电", "change_pct": 1.1}, {"name": "军工", "change_pct": 1.23}, {"name": "新能源汽车", "change_pct": 0.48}, {"name": "特高压", "change_pct": 1.18}, {"name": "自贸区", "change_pct": 1.88}, {"name": "海洋经济", "change_pct": 1.66}]}, {"code": "002418", "name": "康盛股份", "hot_rank": 57, "hot_rank_chg": -32, "stock_cnt": 5779, "price": "5.29", "change": "-6.37", "market_id": "33", "circulate_market_value": "6011556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.63}, {"name": "锂电池", "change_pct": 0.09}, {"name": "石墨烯", "change_pct": 0.56}, {"name": "新能源整车", "change_pct": 1.3}, {"name": "云计算数据中心", "change_pct": 0.52}, {"name": "汽车整车", "change_pct": 1.77}, {"name": "新能源汽车", "change_pct": 0.48}, {"name": "白色家电", "change_pct": 0.48}, {"name": "家电", "change_pct": 0.52}, {"name": "汽车热管理", "change_pct": 0.42}, {"name": "热泵", "change_pct": -0.2}, {"name": "轮边电机", "change_pct": 0.4}, {"name": "超级电容", "change_pct": 0.05}, {"name": "液冷服务器", "change_pct": -1.16}]}, {"code": "000712", "name": "锦龙股份", "hot_rank": 58, "hot_rank_chg": 10, "stock_cnt": 5779, "price": "12.65", "change": "0.08", "market_id": "33", "circulate_market_value": "11322079300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.79}, {"name": "期货概念", "change_pct": 2.0}, {"name": "券商", "change_pct": 1.35}, {"name": "大金融", "change_pct": 1.12}, {"name": "东数西算/算力", "change_pct": 0.84}]}, {"code": "600183", "name": "生益科技", "hot_rank": 59, "hot_rank_chg": 14, "stock_cnt": 5779, "price": "139.70", "change": "-2.46", "market_id": "17", "circulate_market_value": "336824850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600185", "name": "珠免集团", "hot_rank": 60, "hot_rank_chg": -12, "stock_cnt": 5779, "price": "5.40", "change": "2.27", "market_id": "17", "circulate_market_value": "10179031300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.06}, {"name": "资产重组", "change_pct": 0.69}, {"name": "股权转让", "change_pct": 0.79}, {"name": "房地产", "change_pct": 2.07}, {"name": "粤港澳大湾区", "change_pct": 1.49}, {"name": "横琴新区", "change_pct": 2.29}, {"name": "免税店概念", "change_pct": 1.75}]}, {"code": "000636", "name": "风华高科", "hot_rank": 61, "hot_rank_chg": -16, "stock_cnt": 5779, "price": "49.45", "change": "-2.29", "market_id": "33", "circulate_market_value": "56754854000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 62, "hot_rank_chg": -29, "stock_cnt": 5779, "price": "56.10", "change": "0.99", "market_id": "17", "circulate_market_value": "252620490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 63, "hot_rank_chg": 63, "stock_cnt": 5779, "price": "65.95", "change": "-3.87", "market_id": "33", "circulate_market_value": "47807594000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 64, "hot_rank_chg": 17, "stock_cnt": 5779, "price": "111.25", "change": "-0.32", "market_id": "17", "circulate_market_value": "40130478000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002886", "name": "沃特股份", "hot_rank": 65, "hot_rank_chg": -11, "stock_cnt": 5779, "price": "25.75", "change": "-7.24", "market_id": "33", "circulate_market_value": "5383762700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 66, "hot_rank_chg": 5, "stock_cnt": 5779, "price": "65.09", "change": "2.83", "market_id": "17", "circulate_market_value": "1289667560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 67, "hot_rank_chg": -12, "stock_cnt": 5779, "price": "13.41", "change": "2.45", "market_id": "17", "circulate_market_value": "3920545200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 68, "hot_rank_chg": 267, "stock_cnt": 5779, "price": "97.26", "change": "10.00", "market_id": "17", "circulate_market_value": "95510356000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 69, "hot_rank_chg": -35, "stock_cnt": 5779, "price": "11.35", "change": "-1.99", "market_id": "33", "circulate_market_value": "26383324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -0.94}, {"name": "有色 · 铜", "change_pct": -0.31}, {"name": "有色 · 锑", "change_pct": -1.14}, {"name": "湖南国企改革", "change_pct": 1.74}, {"name": "有色 · 锌", "change_pct": -0.74}, {"name": "有色金属", "change_pct": -0.06}, {"name": "国企改革", "change_pct": 1.4}, {"name": "白银", "change_pct": -1.28}]}, {"code": "000725", "name": "京东方A", "hot_rank": 70, "hot_rank_chg": -5, "stock_cnt": 5779, "price": "5.69", "change": "-0.53", "market_id": "33", "circulate_market_value": "200885320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.45}, {"name": "手机产业链", "change_pct": -0.34}, {"name": "超高清视频", "change_pct": 0.74}, {"name": "苹果产业链", "change_pct": -0.82}, {"name": "电竞", "change_pct": 2.88}, {"name": "半导体", "change_pct": -0.73}, {"name": "人工智能", "change_pct": 1.47}, {"name": "互联网医疗", "change_pct": 1.45}, {"name": "VR&AR", "change_pct": 0.48}, {"name": "OLED", "change_pct": -0.2}, {"name": "京津冀", "change_pct": 1.78}, {"name": "物联网", "change_pct": 0.89}, {"name": "指纹识别", "change_pct": -0.08}, {"name": "汽车零部件", "change_pct": 0.5}, {"name": "白马股", "change_pct": 0.97}, {"name": "智能制造", "change_pct": 0.43}, {"name": "小米概念股", "change_pct": -0.06}, {"name": "国产芯片", "change_pct": -0.27}, {"name": "液晶面板/LCD", "change_pct": -0.39}, {"name": "全息概念", "change_pct": 0.98}, {"name": "理想汽车概念股", "change_pct": 0.26}, {"name": "MicroLED", "change_pct": 0.05}, {"name": "钙钛矿电池", "change_pct": 1.62}, {"name": "智能手表", "change_pct": -0.09}, {"name": "MiniLED", "change_pct": 0.2}, {"name": "传感器", "change_pct": 0.31}, {"name": "大硅片", "change_pct": -1.78}, {"name": "AI PC", "change_pct": -0.36}, {"name": "华为产业链", "change_pct": 0.82}, {"name": "回购", "change_pct": 1.12}, {"name": "光电共封装CPO", "change_pct": -0.98}, {"name": "智能眼镜/MR头显", "change_pct": 0.04}, {"name": "玻璃基板封装", "change_pct": -0.53}]}, {"code": "003032", "name": "传智教育", "hot_rank": 71, "hot_rank_chg": 4, "stock_cnt": 5779, "price": "9.99", "change": "-7.41", "market_id": "33", "circulate_market_value": "2844816100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 1.1}, {"name": "强势人气股", "change_pct": -0.13}, {"name": "教育", "change_pct": 1.47}, {"name": "阿里巴巴概念股", "change_pct": 1.62}, {"name": "职业教育", "change_pct": 1.68}, {"name": "在线教育", "change_pct": 0.93}, {"name": "华为鸿蒙", "change_pct": 1.8}, {"name": "华为产业链", "change_pct": 0.82}, {"name": "智谱AI", "change_pct": 2.02}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 72, "hot_rank_chg": -10, "stock_cnt": 5779, "price": "3.60", "change": "-2.44", "market_id": "17", "circulate_market_value": "7964384600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 0.85}, {"name": "云计算数据中心", "change_pct": 0.52}, {"name": "光通信", "change_pct": -0.73}, {"name": "林业", "change_pct": 3.01}, {"name": "军民融合", "change_pct": 1.0}, {"name": "军工", "change_pct": 1.23}, {"name": "人造肉", "change_pct": 3.25}]}, {"code": "600108", "name": "亚盛集团", "hot_rank": 73, "hot_rank_chg": 19, "stock_cnt": 5779, "price": "4.36", "change": "10.10", "market_id": "17", "circulate_market_value": "8488549900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "玉米制种", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.06}, {"name": "农业种植", "change_pct": 3.59}, {"name": "土地流转", "change_pct": 2.78}, {"name": "农垦", "change_pct": 4.24}, {"name": "乡村振兴", "change_pct": 2.1}, {"name": "食品", "change_pct": 2.13}, {"name": "甜味剂/代糖", "change_pct": 1.89}, {"name": "大农业", "change_pct": 2.52}, {"name": "蜜雪冰城概念股", "change_pct": 1.84}]}, {"code": "605398", "name": "新炬网络", "hot_rank": 74, "hot_rank_chg": 78, "stock_cnt": 5779, "price": "26.66", "change": "9.98", "market_id": "17", "circulate_market_value": "4338018700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI智能运维"}, {"code": "600540", "name": "新赛股份", "hot_rank": 75, "hot_rank_chg": 39, "stock_cnt": 5779, "price": "6.30", "change": "4.12", "market_id": "17", "circulate_market_value": "3668488600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.59}, {"name": "新疆国企改革", "change_pct": 2.47}, {"name": "农垦", "change_pct": 4.24}, {"name": "棉花", "change_pct": 3.0}, {"name": "新疆概念", "change_pct": 1.95}, {"name": "风电", "change_pct": 1.1}, {"name": "大农业", "change_pct": 2.51}, {"name": "国企改革", "change_pct": 1.41}]}, {"code": "600584", "name": "长电科技", "hot_rank": 76, "hot_rank_chg": -18, "stock_cnt": 5779, "price": "68.53", "change": "-3.85", "market_id": "17", "circulate_market_value": "122628580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 77, "hot_rank_chg": 67, "stock_cnt": 5779, "price": "14.16", "change": "7.28", "market_id": "33", "circulate_market_value": "49212713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603138", "name": "海量数据", "hot_rank": 78, "hot_rank_chg": 52, "stock_cnt": 5779, "price": "14.64", "change": "0.97", "market_id": "17", "circulate_market_value": "4221339300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 79, "hot_rank_chg": 8, "stock_cnt": 5779, "price": "379.63", "change": "-0.89", "market_id": "17", "circulate_market_value": "254738820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 80, "hot_rank_chg": 26, "stock_cnt": 5779, "price": "46.12", "change": "-2.39", "market_id": "17", "circulate_market_value": "39043040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 81, "hot_rank_chg": -5, "stock_cnt": 5779, "price": "46.66", "change": "-4.05", "market_id": "17", "circulate_market_value": "50045900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002017", "name": "东信和平", "hot_rank": 82, "hot_rank_chg": 160, "stock_cnt": 5779, "price": "17.13", "change": "4.01", "market_id": "33", "circulate_market_value": "9938353000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 83, "hot_rank_chg": 132, "stock_cnt": 5779, "price": "13.43", "change": "6.42", "market_id": "17", "circulate_market_value": "56007039000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 84, "hot_rank_chg": -2, "stock_cnt": 5779, "price": "4.85", "change": "3.85", "market_id": "33", "circulate_market_value": "28454313000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.89}, {"name": "人工智能", "change_pct": 1.47}, {"name": "云计算数据中心", "change_pct": 0.49}, {"name": "水利", "change_pct": 1.33}, {"name": "直播/短视频", "change_pct": 3.38}, {"name": "大数据", "change_pct": 1.85}, {"name": "园林", "change_pct": 1.79}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.07}, {"name": "数字经济", "change_pct": 1.98}, {"name": "腾讯概念股", "change_pct": 1.84}, {"name": "理想汽车概念股", "change_pct": 0.22}, {"name": "第三代半导体", "change_pct": -0.14}, {"name": "快手概念股", "change_pct": 3.5}, {"name": "IGBT", "change_pct": -0.01}, {"name": "虚拟数字人", "change_pct": 2.75}, {"name": "AIGC概念", "change_pct": 2.44}, {"name": "字节跳动概念股", "change_pct": 2.33}, {"name": "氮化镓", "change_pct": 0.11}, {"name": "AI营销", "change_pct": 3.97}, {"name": "AI大模型/智能体", "change_pct": 1.89}, {"name": "多模态", "change_pct": 2.07}, {"name": "液冷服务器", "change_pct": -1.22}, {"name": "小红书概念股", "change_pct": 3.46}, {"name": "区块链", "change_pct": 2.2}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 85, "hot_rank_chg": 9, "stock_cnt": 5779, "price": "4.09", "change": "-3.53", "market_id": "33", "circulate_market_value": "8620972900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.06}, {"name": "强势人气股", "change_pct": -0.15}, {"name": "维生素", "change_pct": 2.32}, {"name": "基因测序", "change_pct": 0.87}, {"name": "民营医院", "change_pct": 0.86}, {"name": "医药", "change_pct": 0.85}, {"name": "化学原料药", "change_pct": 0.79}, {"name": "PD-1抑制剂", "change_pct": 0.22}]}, {"code": "601606", "name": "长城军工", "hot_rank": 86, "hot_rank_chg": -37, "stock_cnt": 5779, "price": "35.30", "change": "1.73", "market_id": "17", "circulate_market_value": "25558020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 87, "hot_rank_chg": -2, "stock_cnt": 5779, "price": "21.00", "change": "-0.28", "market_id": "33", "circulate_market_value": "24705845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 88, "hot_rank_chg": 46, "stock_cnt": 5779, "price": "393.68", "change": "2.32", "market_id": "33", "circulate_market_value": "493770450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 89, "hot_rank_chg": -1, "stock_cnt": 5779, "price": "17.59", "change": "-2.17", "market_id": "17", "circulate_market_value": "36790227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002855", "name": "捷荣技术", "hot_rank": 90, "hot_rank_chg": 3, "stock_cnt": 5779, "price": "18.23", "change": "6.60", "market_id": "33", "circulate_market_value": "4491184700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 91, "hot_rank_chg": -47, "stock_cnt": 5779, "price": "27.72", "change": "-2.67", "market_id": "17", "circulate_market_value": "9342790200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 92, "hot_rank_chg": 4, "stock_cnt": 5779, "price": "4.97", "change": "-8.62", "market_id": "17", "circulate_market_value": "2785411300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 3.25}, {"name": "ST摘帽", "change_pct": 1.13}, {"name": "游戏", "change_pct": 2.81}, {"name": "影视", "change_pct": 2.65}, {"name": "短剧/互动影游", "change_pct": 2.98}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 93, "hot_rank_chg": 34, "stock_cnt": 5779, "price": "34.12", "change": "-3.07", "market_id": "33", "circulate_market_value": "51776543000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001696", "name": "宗申动力", "hot_rank": 94, "hot_rank_chg": -38, "stock_cnt": 5779, "price": "17.09", "change": "0.29", "market_id": "33", "circulate_market_value": "15235966000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 95, "hot_rank_chg": 104, "stock_cnt": 5779, "price": "252.37", "change": "1.43", "market_id": "33", "circulate_market_value": "274676490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 96, "hot_rank_chg": -27, "stock_cnt": 5779, "price": "5.83", "change": "0.00", "market_id": "33", "circulate_market_value": "6779399900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 2.65}, {"name": "新疆概念", "change_pct": 1.92}, {"name": "阿里巴巴概念股", "change_pct": 1.62}, {"name": "腾讯概念股", "change_pct": 1.84}, {"name": "短剧/互动影游", "change_pct": 2.98}, {"name": "IP经济/谷子经济", "change_pct": 2.39}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 97, "hot_rank_chg": 3, "stock_cnt": 5779, "price": "33.50", "change": "0.57", "market_id": "17", "circulate_market_value": "690160070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 98, "hot_rank_chg": -18, "stock_cnt": 5779, "price": "22.70", "change": "2.25", "market_id": "33", "circulate_market_value": "10263567400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 99, "hot_rank_chg": 82, "stock_cnt": 5779, "price": "16.47", "change": "0.06", "market_id": "33", "circulate_market_value": "11450982200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603890", "name": "春秋电子", "hot_rank": 100, "hot_rank_chg": 5, "stock_cnt": 5779, "price": "19.83", "change": "0.97", "market_id": "17", "circulate_market_value": "9994642600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};