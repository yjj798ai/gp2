const UPDATE_TIME = "2026-08-14 01:26";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -0.23,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续100天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 1.35,
    "rate": 0,
    "tag": "",
    "hotTag": "连续223天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "算力租赁",
    "rise": -0.02,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续134天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "CRO概念",
    "rise": -0.39,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.07,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续270天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI应用",
    "rise": -0.06,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "MLCC概念",
    "rise": 0.74,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "PCB概念",
    "rise": 0.63,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续93天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 0.33,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "东数西算(算力)",
    "rise": 0.28,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "人形机器人",
    "rise": 0.37,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续434天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": 0.38,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续199天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "机器人概念",
    "rise": 0.26,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续101天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "芯片概念",
    "rise": 0.72,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "光纤概念",
    "rise": 0.64,
    "rate": 0,
    "tag": "",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "无人机",
    "rise": 0.38,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "通用航空ETF",
    "code": "885564"
  },
  {
    "name": "人工智能",
    "rise": 0.09,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "猪肉",
    "rise": -0.02,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "绿色电力",
    "rise": -0.04,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电力ETF",
    "code": "885936"
  },
  {
    "name": "中国AI 50",
    "rise": 0.42,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886102"
  }
];
const THS_EVENTS = [
  {
    "title": "国际金价再上4400美元 金饰涨价催生消费轻量化",
    "desc": "",
    "heat": 337408,
    "direction": "黄金",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "中创环保",
        "code": "300056",
        "chg": 2.201622
      }
    ]
  },
  {
    "title": "DeepSeek Harness开发者预览版上线",
    "desc": "",
    "heat": 154456,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "博济医药",
        "code": "300404",
        "chg": 9.965398
      }
    ]
  },
  {
    "title": "三分之二产能提前锁定、80%毛利锚定，闪迪给存储赛道画了三年增长曲线",
    "desc": "",
    "heat": 93985,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "阿莱德",
        "code": "301419",
        "chg": 6.220096
      }
    ]
  },
  {
    "title": "商务部：对原产于印度的进口单模光纤继续征收反倾销税",
    "desc": "",
    "heat": 58919,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念",
      "MPO连接器"
    ],
    "stocks": [
      {
        "name": "鼎通科技",
        "code": "688668",
        "chg": 3.149606
      }
    ]
  },
  {
    "title": "五粮液，出手稳价",
    "desc": "",
    "heat": 37853,
    "direction": "白酒",
    "themes": [
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "会稽山",
        "code": "601579",
        "chg": 10.028653
      }
    ]
  },
  {
    "title": "算力金属身价飙升，算力金属大涨价",
    "desc": "",
    "heat": 1350,
    "direction": "算力金属",
    "themes": [
      "金属钨",
      "金属钼",
      "金属铟",
      "金属铜",
      "金属锡",
      "金属锗",
      "金属镓",
      "金属锆"
    ],
    "stocks": [
      {
        "name": "三友科技",
        "code": "920475",
        "chg": 3.197442
      }
    ]
  },
  {
    "title": "利好来了！细胞治疗，北京出台新政（附概念股）",
    "desc": "",
    "heat": 90,
    "direction": "CAR-T细胞疗法",
    "themes": [
      "制备设备与试剂耗材",
      "创新药CAR-T研发",
      "CXO/CDMO服务",
      "细胞免疫治疗"
    ],
    "stocks": [
      {
        "name": "博济医药",
        "code": "300404",
        "chg": 9.965398
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+8.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+1.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+1.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+1.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+1.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+1.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+1.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+1.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "HEPS概念",
    "change": "+1.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+1.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "耐火材料",
    "change": "+1.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+1.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "折叠屏",
    "change": "+1.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+1.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+1.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+1.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+1.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "石墨烯",
    "change": "+1.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+1.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+1.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 3,
    "hot_rank_chg": 2,
    "stock_cnt": 5868,
    "price": "7.10",
    "change": "2.60",
    "market_id": "17",
    "circulate_market_value": "88012233000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.04
      },
      {
        "name": "核电",
        "change_pct": 0.26
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.28
      },
      {
        "name": "水电",
        "change_pct": -0.54
      },
      {
        "name": "火电",
        "change_pct": -0.42
      },
      {
        "name": "光伏",
        "change_pct": 0.26
      },
      {
        "name": "风电",
        "change_pct": 0.14
      },
      {
        "name": "国企改革",
        "change_pct": 0.01
      },
      {
        "name": "算电协同",
        "change_pct": 0.35
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 10,
    "hot_rank_chg": -1,
    "stock_cnt": 5868,
    "price": "5.37",
    "change": "-3.42",
    "market_id": "33",
    "circulate_market_value": "31440268000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.15
      },
      {
        "name": "人工智能",
        "change_pct": 0.14
      },
      {
        "name": "水利",
        "change_pct": -0.11
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.18
      },
      {
        "name": "大数据",
        "change_pct": 0.01
      },
      {
        "name": "园林",
        "change_pct": 0.15
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.59
      },
      {
        "name": "数字经济",
        "change_pct": 0.1
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.0
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.32
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.96
      },
      {
        "name": "快手概念股",
        "change_pct": -0.53
      },
      {
        "name": "IGBT",
        "change_pct": 0.67
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.06
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.01
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.13
      },
      {
        "name": "氮化镓",
        "change_pct": 0.96
      },
      {
        "name": "AI营销",
        "change_pct": -0.41
      },
      {
        "name": "多模态",
        "change_pct": -0.03
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.86
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.22
      },
      {
        "name": "区块链",
        "change_pct": -0.0
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 11,
    "hot_rank_chg": -4,
    "stock_cnt": 5868,
    "price": "8.60",
    "change": "-2.94",
    "market_id": "17",
    "circulate_market_value": "21659185000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.01
      },
      {
        "name": "工业大麻",
        "change_pct": -0.17
      },
      {
        "name": "中药",
        "change_pct": 0.08
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "保健品",
        "change_pct": 0.02
      },
      {
        "name": "民营医院",
        "change_pct": 0.03
      },
      {
        "name": "医药",
        "change_pct": -0.13
      },
      {
        "name": "化学原料药",
        "change_pct": -0.22
      },
      {
        "name": "流感",
        "change_pct": -0.26
      },
      {
        "name": "振兴东北",
        "change_pct": 0.17
      },
      {
        "name": "食品",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 13,
    "hot_rank_chg": 9,
    "stock_cnt": 5868,
    "price": "5.29",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "13988047000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "装修装饰",
        "change_pct": 0.19
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.14
      },
      {
        "name": "航天",
        "change_pct": 0.37
      },
      {
        "name": "旧改",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 14,
    "hot_rank_chg": 17,
    "stock_cnt": 5868,
    "price": "4.66",
    "change": "9.65",
    "market_id": "33",
    "circulate_market_value": "9786716900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.08
      },
      {
        "name": "维生素",
        "change_pct": 0.02
      },
      {
        "name": "基因测序",
        "change_pct": 0.23
      },
      {
        "name": "民营医院",
        "change_pct": 0.03
      },
      {
        "name": "医药",
        "change_pct": -0.13
      },
      {
        "name": "化学原料药",
        "change_pct": -0.22
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "600881",
    "name": "亚泰集团",
    "hot_rank": 18,
    "hot_rank_chg": 25,
    "stock_cnt": 5868,
    "price": "2.50",
    "change": "10.13",
    "market_id": "17",
    "circulate_market_value": "8080377500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.09
      },
      {
        "name": "中药",
        "change_pct": 0.08
      },
      {
        "name": "创新药",
        "change_pct": -0.18
      },
      {
        "name": "股权转让",
        "change_pct": 0.13
      },
      {
        "name": "水泥",
        "change_pct": 0.45
      },
      {
        "name": "保健品",
        "change_pct": 0.02
      },
      {
        "name": "医药",
        "change_pct": -0.13
      },
      {
        "name": "疫苗",
        "change_pct": -0.1
      },
      {
        "name": "振兴东北",
        "change_pct": 0.17
      },
      {
        "name": "食品",
        "change_pct": -0.09
      },
      {
        "name": "物业管理",
        "change_pct": -0.02
      },
      {
        "name": "低价股",
        "change_pct": -0.02
      },
      {
        "name": "国企改革",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "002229",
    "name": "鸿博股份",
    "hot_rank": 19,
    "hot_rank_chg": 7,
    "stock_cnt": 5868,
    "price": "12.31",
    "change": "-9.82",
    "market_id": "33",
    "circulate_market_value": "6070752400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.09
      },
      {
        "name": "彩票",
        "change_pct": 0.13
      },
      {
        "name": "人工智能",
        "change_pct": 0.14
      },
      {
        "name": "包装印刷",
        "change_pct": 0.08
      },
      {
        "name": "数字经济",
        "change_pct": 0.1
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.15
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.01
      },
      {
        "name": "ETC",
        "change_pct": 0.1
      },
      {
        "name": "词元概念/Token",
        "change_pct": -0.18
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.22
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.01
      },
      {
        "name": "英伟达概念",
        "change_pct": 0.55
      },
      {
        "name": "区块链",
        "change_pct": -0.0
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 20,
    "hot_rank_chg": 19,
    "stock_cnt": 5868,
    "price": "5.63",
    "change": "-10.06",
    "market_id": "33",
    "circulate_market_value": "4028512700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -0.48
      },
      {
        "name": "旅游",
        "change_pct": -0.07
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.1
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 21,
    "hot_rank_chg": 11,
    "stock_cnt": 5868,
    "price": "11.50",
    "change": "-1.03",
    "market_id": "33",
    "circulate_market_value": "3271538500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 0.01
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.16
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "教育",
        "change_pct": -0.02
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.07
      },
      {
        "name": "职业教育",
        "change_pct": -0.02
      },
      {
        "name": "在线教育",
        "change_pct": 0.15
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.33
      },
      {
        "name": "华为产业链",
        "change_pct": 0.39
      },
      {
        "name": "智谱AI",
        "change_pct": 0.12
      }
    ]
  },
  {
    "code": "600821",
    "name": "金开新能",
    "hot_rank": 26,
    "hot_rank_chg": 31,
    "stock_cnt": 5868,
    "price": "7.79",
    "change": "8.95",
    "market_id": "17",
    "circulate_market_value": "15325461000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.13
      },
      {
        "name": "天津国企改革",
        "change_pct": 0.87
      },
      {
        "name": "京津冀",
        "change_pct": 0.22
      },
      {
        "name": "光伏",
        "change_pct": 0.26
      },
      {
        "name": "风电",
        "change_pct": 0.14
      },
      {
        "name": "储能",
        "change_pct": 0.25
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.15
      },
      {
        "name": "国企改革",
        "change_pct": 0.01
      },
      {
        "name": "算电协同",
        "change_pct": 0.35
      }
    ]
  },
  {
    "code": "002329",
    "name": "皇氏集团",
    "hot_rank": 31,
    "hot_rank_chg": 25,
    "stock_cnt": 5868,
    "price": "4.55",
    "change": "-1.51",
    "market_id": "33",
    "circulate_market_value": "2964747800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.01
      },
      {
        "name": "乳业（奶粉）",
        "change_pct": -0.75
      },
      {
        "name": "股权转让",
        "change_pct": 0.13
      },
      {
        "name": "一带一路",
        "change_pct": 0.07
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.04
      },
      {
        "name": "智慧城市",
        "change_pct": 0.09
      },
      {
        "name": "食品",
        "change_pct": -0.09
      },
      {
        "name": "基因编辑",
        "change_pct": -0.52
      },
      {
        "name": "社区团购",
        "change_pct": -0.45
      },
      {
        "name": "大农业",
        "change_pct": -0.1
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.05
      },
      {
        "name": "广西概念",
        "change_pct": -0.56
      },
      {
        "name": "饮料",
        "change_pct": -0.45
      }
    ]
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 33,
    "hot_rank_chg": 18,
    "stock_cnt": 5868,
    "price": "7.47",
    "change": "9.85",
    "market_id": "17",
    "circulate_market_value": "55840761000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.07
      },
      {
        "name": "央企改革",
        "change_pct": 0.04
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.28
      },
      {
        "name": "火电",
        "change_pct": -0.42
      },
      {
        "name": "振兴东北",
        "change_pct": 0.17
      },
      {
        "name": "国企改革",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 42,
    "hot_rank_chg": -2,
    "stock_cnt": 5868,
    "price": "5.85",
    "change": "-0.17",
    "market_id": "33",
    "circulate_market_value": "206897730000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.18
      },
      {
        "name": "手机产业链",
        "change_pct": 0.94
      },
      {
        "name": "超高清视频",
        "change_pct": 0.37
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.74
      },
      {
        "name": "电竞",
        "change_pct": 0.13
      },
      {
        "name": "半导体",
        "change_pct": 1.14
      },
      {
        "name": "人工智能",
        "change_pct": 0.14
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.21
      },
      {
        "name": "VR&AR",
        "change_pct": 0.61
      },
      {
        "name": "OLED",
        "change_pct": 0.61
      },
      {
        "name": "京津冀",
        "change_pct": 0.22
      },
      {
        "name": "物联网",
        "change_pct": 0.24
      },
      {
        "name": "指纹识别",
        "change_pct": 0.96
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.27
      },
      {
        "name": "白马股",
        "change_pct": -0.04
      },
      {
        "name": "智能制造",
        "change_pct": 0.25
      },
      {
        "name": "小米概念股",
        "change_pct": 0.59
      },
      {
        "name": "国产芯片",
        "change_pct": 0.96
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.46
      },
      {
        "name": "全息概念",
        "change_pct": 0.55
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.32
      },
      {
        "name": "MicroLED",
        "change_pct": 0.6
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.44
      },
      {
        "name": "智能手表",
        "change_pct": 0.77
      },
      {
        "name": "MiniLED",
        "change_pct": 0.49
      },
      {
        "name": "传感器",
        "change_pct": 0.64
      },
      {
        "name": "大硅片",
        "change_pct": 1.54
      },
      {
        "name": "AI PC",
        "change_pct": 0.9
      },
      {
        "name": "华为产业链",
        "change_pct": 0.39
      },
      {
        "name": "回购",
        "change_pct": 0.14
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.98
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.92
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 47,
    "hot_rank_chg": -22,
    "stock_cnt": 5868,
    "price": "10.70",
    "change": "-2.10",
    "market_id": "17",
    "circulate_market_value": "19143780000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.07
      },
      {
        "name": "纯碱",
        "change_pct": 0.05
      },
      {
        "name": "食品",
        "change_pct": -0.09
      },
      {
        "name": "土壤修复",
        "change_pct": 0.04
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.15
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.09
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 51,
    "hot_rank_chg": -10,
    "stock_cnt": 5868,
    "price": "8.17",
    "change": "-2.16",
    "market_id": "33",
    "circulate_market_value": "13281918200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.01
      },
      {
        "name": "电竞",
        "change_pct": 0.13
      },
      {
        "name": "手游",
        "change_pct": -0.17
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "人工智能",
        "change_pct": 0.14
      },
      {
        "name": "游戏",
        "change_pct": -0.16
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.1
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.0
      },
      {
        "name": "快手概念股",
        "change_pct": -0.53
      },
      {
        "name": "元宇宙",
        "change_pct": 0.21
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.06
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.15
      },
      {
        "name": "web3.0",
        "change_pct": 0.28
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.01
      },
      {
        "name": "数据要素",
        "change_pct": 0.08
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.13
      },
      {
        "name": "AI营销",
        "change_pct": -0.41
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.22
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.92
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.01
      },
      {
        "name": "人形机器人",
        "change_pct": 0.26
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.52
      },
      {
        "name": "多模态",
        "change_pct": -0.03
      },
      {
        "name": "AI视频",
        "change_pct": 0.08
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.1
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 52,
    "hot_rank_chg": -6,
    "stock_cnt": 5868,
    "price": "6.01",
    "change": "-4.15",
    "market_id": "33",
    "circulate_market_value": "13218322900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": 0.3
      },
      {
        "name": "轮胎",
        "change_pct": 0.02
      },
      {
        "name": "冷链",
        "change_pct": 0.17
      },
      {
        "name": "机器人",
        "change_pct": 0.26
      },
      {
        "name": "智能制造",
        "change_pct": 0.25
      },
      {
        "name": "工业母机",
        "change_pct": 0.19
      },
      {
        "name": "减速器",
        "change_pct": 0.06
      },
      {
        "name": "头盔",
        "change_pct": 0.16
      },
      {
        "name": "人形机器人",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 54,
    "hot_rank_chg": 6,
    "stock_cnt": 5868,
    "price": "12.11",
    "change": "-3.27",
    "market_id": "17",
    "circulate_market_value": "8238671300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.22
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "雄安新区",
        "change_pct": -0.07
      },
      {
        "name": "煤化工",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "600578",
    "name": "京能电力",
    "hot_rank": 55,
    "hot_rank_chg": -10,
    "stock_cnt": 5868,
    "price": "6.40",
    "change": "-2.88",
    "market_id": "17",
    "circulate_market_value": "42845574000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.13
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.28
      },
      {
        "name": "京津冀",
        "change_pct": 0.22
      },
      {
        "name": "火电",
        "change_pct": -0.42
      },
      {
        "name": "风电",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "002400",
    "name": "省广集团",
    "hot_rank": 56,
    "hot_rank_chg": -1,
    "stock_cnt": 5868,
    "price": "7.55",
    "change": "-5.03",
    "market_id": "33",
    "circulate_market_value": "13032542900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.01
      },
      {
        "name": "人工智能",
        "change_pct": 0.14
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.18
      },
      {
        "name": "大数据",
        "change_pct": 0.01
      },
      {
        "name": "百度概念股",
        "change_pct": -0.14
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.0
      },
      {
        "name": "传媒",
        "change_pct": -0.29
      },
      {
        "name": "快手概念股",
        "change_pct": -0.53
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.13
      },
      {
        "name": "国企改革",
        "change_pct": 0.01
      },
      {
        "name": "横琴新区",
        "change_pct": -0.18
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.22
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.05
      },
      {
        "name": "AI营销",
        "change_pct": -0.41
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.52
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.22
      },
      {
        "name": "区块链",
        "change_pct": -0.0
      }
    ]
  },
  {
    "code": "000936",
    "name": "华西股份",
    "hot_rank": 57,
    "hot_rank_chg": 49,
    "stock_cnt": 5868,
    "price": "6.97",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "6174634700.00",
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
        "name": "共享经济",
        "change_pct": -0.18
      },
      {
        "name": "人工智能",
        "change_pct": 0.14
      },
      {
        "name": "光通信",
        "change_pct": 0.95
      },
      {
        "name": "涤纶",
        "change_pct": 0.64
      },
      {
        "name": "江苏国企改革",
        "change_pct": 0.08
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产芯片",
        "change_pct": 0.96
      },
      {
        "name": "国企改革",
        "change_pct": 0.01
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.98
      }
    ]
  },
  {
    "code": "002219",
    "name": "新里程",
    "hot_rank": 63,
    "hot_rank_chg": 41,
    "stock_cnt": 5868,
    "price": "2.70",
    "change": "8.00",
    "market_id": "33",
    "circulate_market_value": "8834052800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.08
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.21
      },
      {
        "name": "养老产业",
        "change_pct": -0.03
      },
      {
        "name": "民营医院",
        "change_pct": 0.03
      },
      {
        "name": "医药",
        "change_pct": -0.13
      },
      {
        "name": "低价股",
        "change_pct": -0.02
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.03
      },
      {
        "name": "AI医疗",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 68,
    "hot_rank_chg": -19,
    "stock_cnt": 5868,
    "price": "10.10",
    "change": "-5.87",
    "market_id": "33",
    "circulate_market_value": "4694207400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.07
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.18
      },
      {
        "name": "水利",
        "change_pct": -0.11
      },
      {
        "name": "大数据",
        "change_pct": 0.01
      },
      {
        "name": "海绵城市",
        "change_pct": -0.14
      },
      {
        "name": "风电",
        "change_pct": 0.14
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.12
      },
      {
        "name": "数字经济",
        "change_pct": 0.1
      },
      {
        "name": "大基建",
        "change_pct": -0.06
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.15
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.03
      },
      {
        "name": "国企改革",
        "change_pct": 0.01
      },
      {
        "name": "旧改",
        "change_pct": 0.15
      },
      {
        "name": "西部大开发",
        "change_pct": -0.29
      },
      {
        "name": "低空经济",
        "change_pct": 0.22
      },
      {
        "name": "房屋检测",
        "change_pct": 0.02
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 71,
    "hot_rank_chg": 36,
    "stock_cnt": 5868,
    "price": "4.54",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "3473738900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.08
      },
      {
        "name": "股权转让",
        "change_pct": 0.13
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.04
      },
      {
        "name": "医药商业",
        "change_pct": -0.17
      },
      {
        "name": "保健品",
        "change_pct": 0.02
      },
      {
        "name": "民营医院",
        "change_pct": 0.03
      },
      {
        "name": "医药",
        "change_pct": -0.13
      },
      {
        "name": "食品",
        "change_pct": -0.09
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.16
      },
      {
        "name": "口腔",
        "change_pct": 0.05
      },
      {
        "name": "医美",
        "change_pct": 0.21
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 82,
    "hot_rank_chg": -35,
    "stock_cnt": 5868,
    "price": "11.02",
    "change": "-2.48",
    "market_id": "33",
    "circulate_market_value": "9772059200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 1.02
      },
      {
        "name": "手机产业链",
        "change_pct": 0.94
      },
      {
        "name": "超高清视频",
        "change_pct": 0.37
      },
      {
        "name": "锂电池",
        "change_pct": 0.25
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "OLED",
        "change_pct": 0.61
      },
      {
        "name": "包装印刷",
        "change_pct": 0.08
      },
      {
        "name": "光伏",
        "change_pct": 0.26
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.2
      },
      {
        "name": "小米概念股",
        "change_pct": 0.59
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.46
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.3
      },
      {
        "name": "华为产业链",
        "change_pct": 0.39
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "000692",
    "name": "惠天热电",
    "hot_rank": 83,
    "hot_rank_chg": 45,
    "stock_cnt": 5868,
    "price": "5.35",
    "change": "9.63",
    "market_id": "33",
    "circulate_market_value": "2850656400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "振兴东北",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 86,
    "hot_rank_chg": -3,
    "stock_cnt": 5868,
    "price": "4.20",
    "change": "-8.10",
    "market_id": "17",
    "circulate_market_value": "13727440000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.05
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "养老产业",
        "change_pct": -0.03
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.0
      },
      {
        "name": "民营医院",
        "change_pct": 0.03
      },
      {
        "name": "地摊经济",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 87,
    "hot_rank_chg": -8,
    "stock_cnt": 5868,
    "price": "7.63",
    "change": "-2.18",
    "market_id": "17",
    "circulate_market_value": "15497478000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.04
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.28
      },
      {
        "name": "火电",
        "change_pct": -0.42
      },
      {
        "name": "风电",
        "change_pct": 0.14
      },
      {
        "name": "储能",
        "change_pct": 0.25
      },
      {
        "name": "碳中和",
        "change_pct": 0.01
      },
      {
        "name": "国企改革",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 93,
    "hot_rank_chg": -2,
    "stock_cnt": 5868,
    "price": "3.49",
    "change": "-2.24",
    "market_id": "33",
    "circulate_market_value": "6991786400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 0.18
      },
      {
        "name": "数字孪生",
        "change_pct": 0.06
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.18
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "人工智能",
        "change_pct": 0.14
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.21
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.18
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.16
      },
      {
        "name": "人脸识别",
        "change_pct": 0.13
      },
      {
        "name": "智慧停车",
        "change_pct": -0.03
      },
      {
        "name": "物联网",
        "change_pct": 0.24
      },
      {
        "name": "大数据",
        "change_pct": 0.01
      },
      {
        "name": "智慧城市",
        "change_pct": 0.09
      },
      {
        "name": "雄安新区",
        "change_pct": -0.07
      },
      {
        "name": "机器人",
        "change_pct": 0.26
      },
      {
        "name": "数字经济",
        "change_pct": 0.1
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.07
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.0
      },
      {
        "name": "建筑节能",
        "change_pct": 0.32
      },
      {
        "name": "旧改",
        "change_pct": 0.15
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.03
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.02
      },
      {
        "name": "华为产业链",
        "change_pct": 0.39
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -0.5
      },
      {
        "name": "区块链",
        "change_pct": -0.0
      }
    ]
  },
  {
    "code": "002575",
    "name": "群兴玩具",
    "hot_rank": 94,
    "hot_rank_chg": 37,
    "stock_cnt": 5868,
    "price": "6.47",
    "change": "6.42",
    "market_id": "33",
    "circulate_market_value": "3780586000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "腾讯概念股",
        "change_pct": -0.0
      },
      {
        "name": "物业管理",
        "change_pct": -0.02
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 95,
    "hot_rank_chg": -24,
    "stock_cnt": 5868,
    "price": "9.85",
    "change": "-3.71",
    "market_id": "33",
    "circulate_market_value": "20507718000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -0.48
      },
      {
        "name": "足球",
        "change_pct": 0.08
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.07
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.05
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.22
      },
      {
        "name": "大消费",
        "change_pct": -0.16
      },
      {
        "name": "盲盒",
        "change_pct": 0.19
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.52
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.1
      },
      {
        "name": "首发经济",
        "change_pct": -0.18
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.22
      },
      {
        "name": "服务消费",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 99,
    "hot_rank_chg": 39,
    "stock_cnt": 5868,
    "price": "10.00",
    "change": "2.99",
    "market_id": "17",
    "circulate_market_value": "4326736500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.13
      },
      {
        "name": "强势人气股",
        "change_pct": -0.01
      },
      {
        "name": "光伏",
        "change_pct": 0.26
      },
      {
        "name": "无线耳机",
        "change_pct": 1.06
      },
      {
        "name": "华为产业链",
        "change_pct": 0.39
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.47
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600667", "name": "太极实业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5868, "price": "23.78", "change": "0.00", "market_id": "17", "circulate_market_value": "49736873000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5868, "price": "18.30", "change": "-2.30", "market_id": "17", "circulate_market_value": "26950535000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5868, "price": "7.10", "change": "2.60", "market_id": "17", "circulate_market_value": "88012233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.04}, {"name": "核电", "change_pct": 0.26}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "电力体制改革", "change_pct": -0.28}, {"name": "水电", "change_pct": -0.54}, {"name": "火电", "change_pct": -0.42}, {"name": "光伏", "change_pct": 0.26}, {"name": "风电", "change_pct": 0.14}, {"name": "国企改革", "change_pct": 0.01}, {"name": "算电协同", "change_pct": 0.35}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5868, "price": "39.60", "change": "0.00", "market_id": "33", "circulate_market_value": "113258878000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 5, "hot_rank_chg": 1, "stock_cnt": 5868, "price": "13.78", "change": "-4.97", "market_id": "17", "circulate_market_value": "5299066400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 6, "hot_rank_chg": 5, "stock_cnt": 5868, "price": "38.35", "change": "-1.59", "market_id": "33", "circulate_market_value": "41370728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5868, "price": "54.20", "change": "2.50", "market_id": "17", "circulate_market_value": "244064710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5868, "price": "61.50", "change": "-0.84", "market_id": "33", "circulate_market_value": "71156285000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5868, "price": "34.33", "change": "2.69", "market_id": "17", "circulate_market_value": "13766330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 10, "hot_rank_chg": -1, "stock_cnt": 5868, "price": "5.37", "change": "-3.42", "market_id": "33", "circulate_market_value": "31440268000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.15}, {"name": "人工智能", "change_pct": 0.14}, {"name": "水利", "change_pct": -0.11}, {"name": "直播/短视频", "change_pct": -0.18}, {"name": "大数据", "change_pct": 0.01}, {"name": "园林", "change_pct": 0.15}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.59}, {"name": "数字经济", "change_pct": 0.1}, {"name": "腾讯概念股", "change_pct": -0.0}, {"name": "理想汽车概念股", "change_pct": 0.32}, {"name": "第三代半导体", "change_pct": 0.96}, {"name": "快手概念股", "change_pct": -0.53}, {"name": "IGBT", "change_pct": 0.67}, {"name": "虚拟数字人", "change_pct": 0.06}, {"name": "AIGC概念", "change_pct": 0.01}, {"name": "字节跳动概念股", "change_pct": -0.13}, {"name": "氮化镓", "change_pct": 0.96}, {"name": "AI营销", "change_pct": -0.41}, {"name": "多模态", "change_pct": -0.03}, {"name": "液冷服务器", "change_pct": 0.86}, {"name": "小红书概念股", "change_pct": -0.22}, {"name": "区块链", "change_pct": -0.0}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 11, "hot_rank_chg": -4, "stock_cnt": 5868, "price": "8.60", "change": "-2.94", "market_id": "17", "circulate_market_value": "21659185000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.01}, {"name": "工业大麻", "change_pct": -0.17}, {"name": "中药", "change_pct": 0.08}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "保健品", "change_pct": 0.02}, {"name": "民营医院", "change_pct": 0.03}, {"name": "医药", "change_pct": -0.13}, {"name": "化学原料药", "change_pct": -0.22}, {"name": "流感", "change_pct": -0.26}, {"name": "振兴东北", "change_pct": 0.17}, {"name": "食品", "change_pct": -0.09}]}, {"code": "603629", "name": "利通电子", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5868, "price": "128.05", "change": "2.44", "market_id": "17", "circulate_market_value": "46190631000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 13, "hot_rank_chg": 9, "stock_cnt": 5868, "price": "5.29", "change": "9.98", "market_id": "33", "circulate_market_value": "13988047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.01}, {"name": "装修装饰", "change_pct": 0.19}, {"name": "装配式建筑", "change_pct": 0.14}, {"name": "航天", "change_pct": 0.37}, {"name": "旧改", "change_pct": 0.15}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 14, "hot_rank_chg": 17, "stock_cnt": 5868, "price": "4.66", "change": "9.65", "market_id": "33", "circulate_market_value": "9786716900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.08}, {"name": "维生素", "change_pct": 0.02}, {"name": "基因测序", "change_pct": 0.23}, {"name": "民营医院", "change_pct": 0.03}, {"name": "医药", "change_pct": -0.13}, {"name": "化学原料药", "change_pct": -0.22}, {"name": "PD-1抑制剂", "change_pct": -0.16}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 15, "hot_rank_chg": -1, "stock_cnt": 5868, "price": "415.00", "change": "2.60", "market_id": "17", "circulate_market_value": "277424150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 16, "hot_rank_chg": 1, "stock_cnt": 5868, "price": "32.50", "change": "0.37", "market_id": "33", "circulate_market_value": "24615991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 17, "hot_rank_chg": -4, "stock_cnt": 5868, "price": "15.00", "change": "-1.77", "market_id": "33", "circulate_market_value": "13999824000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600881", "name": "亚泰集团", "hot_rank": 18, "hot_rank_chg": 25, "stock_cnt": 5868, "price": "2.50", "change": "10.13", "market_id": "17", "circulate_market_value": "8080377500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.09}, {"name": "中药", "change_pct": 0.08}, {"name": "创新药", "change_pct": -0.18}, {"name": "股权转让", "change_pct": 0.13}, {"name": "水泥", "change_pct": 0.45}, {"name": "保健品", "change_pct": 0.02}, {"name": "医药", "change_pct": -0.13}, {"name": "疫苗", "change_pct": -0.1}, {"name": "振兴东北", "change_pct": 0.17}, {"name": "食品", "change_pct": -0.09}, {"name": "物业管理", "change_pct": -0.02}, {"name": "低价股", "change_pct": -0.02}, {"name": "国企改革", "change_pct": 0.01}]}, {"code": "002229", "name": "鸿博股份", "hot_rank": 19, "hot_rank_chg": 7, "stock_cnt": 5868, "price": "12.31", "change": "-9.82", "market_id": "33", "circulate_market_value": "6070752400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.09}, {"name": "彩票", "change_pct": 0.13}, {"name": "人工智能", "change_pct": 0.14}, {"name": "包装印刷", "change_pct": 0.08}, {"name": "数字经济", "change_pct": 0.1}, {"name": "东数西算/算力", "change_pct": 0.15}, {"name": "AIGC概念", "change_pct": 0.01}, {"name": "ETC", "change_pct": 0.1}, {"name": "词元概念/Token", "change_pct": -0.18}, {"name": "ChatGPT", "change_pct": 0.22}, {"name": "人工智能大模型", "change_pct": 0.01}, {"name": "英伟达概念", "change_pct": 0.55}, {"name": "区块链", "change_pct": -0.0}]}, {"code": "000802", "name": "北京文化", "hot_rank": 20, "hot_rank_chg": 19, "stock_cnt": 5868, "price": "5.63", "change": "-10.06", "market_id": "33", "circulate_market_value": "4028512700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.48}, {"name": "旅游", "change_pct": -0.07}, {"name": "IP经济/谷子经济", "change_pct": -0.1}]}, {"code": "003032", "name": "传智教育", "hot_rank": 21, "hot_rank_chg": 11, "stock_cnt": 5868, "price": "11.50", "change": "-1.03", "market_id": "33", "circulate_market_value": "3271538500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.01}, {"name": "ST摘帽", "change_pct": -0.16}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "教育", "change_pct": -0.02}, {"name": "阿里巴巴概念股", "change_pct": 0.07}, {"name": "职业教育", "change_pct": -0.02}, {"name": "在线教育", "change_pct": 0.15}, {"name": "华为鸿蒙", "change_pct": 0.33}, {"name": "华为产业链", "change_pct": 0.39}, {"name": "智谱AI", "change_pct": 0.12}]}, {"code": "603259", "name": "药明康德", "hot_rank": 22, "hot_rank_chg": -2, "stock_cnt": 5868, "price": "160.06", "change": "-1.40", "market_id": "17", "circulate_market_value": "395873240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 23, "hot_rank_chg": -8, "stock_cnt": 5868, "price": "78.85", "change": "1.32", "market_id": "17", "circulate_market_value": "141095340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 24, "hot_rank_chg": -8, "stock_cnt": 5868, "price": "79.96", "change": "0.63", "market_id": "33", "circulate_market_value": "117287871000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 25, "hot_rank_chg": 2, "stock_cnt": 5868, "price": "21.66", "change": "-1.99", "market_id": "33", "circulate_market_value": "9797658400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600821", "name": "金开新能", "hot_rank": 26, "hot_rank_chg": 31, "stock_cnt": 5868, "price": "7.79", "change": "8.95", "market_id": "17", "circulate_market_value": "15325461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.13}, {"name": "天津国企改革", "change_pct": 0.87}, {"name": "京津冀", "change_pct": 0.22}, {"name": "光伏", "change_pct": 0.26}, {"name": "风电", "change_pct": 0.14}, {"name": "储能", "change_pct": 0.25}, {"name": "东数西算/算力", "change_pct": 0.15}, {"name": "国企改革", "change_pct": 0.01}, {"name": "算电协同", "change_pct": 0.35}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 27, "hot_rank_chg": -9, "stock_cnt": 5868, "price": "57.25", "change": "0.00", "market_id": "17", "circulate_market_value": "140471250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 28, "hot_rank_chg": -9, "stock_cnt": 5868, "price": "18.50", "change": "-2.32", "market_id": "33", "circulate_market_value": "21764674000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002792", "name": "通宇通讯", "hot_rank": 29, "hot_rank_chg": -1, "stock_cnt": 5868, "price": "37.00", "change": "-4.22", "market_id": "33", "circulate_market_value": "12499505800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 30, "hot_rank_chg": -6, "stock_cnt": 5868, "price": "934.00", "change": "1.41", "market_id": "33", "circulate_market_value": "1036683750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002329", "name": "皇氏集团", "hot_rank": 31, "hot_rank_chg": 25, "stock_cnt": 5868, "price": "4.55", "change": "-1.51", "market_id": "33", "circulate_market_value": "2964747800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.01}, {"name": "乳业（奶粉）", "change_pct": -0.75}, {"name": "股权转让", "change_pct": 0.13}, {"name": "一带一路", "change_pct": 0.07}, {"name": "优化生育（三孩）", "change_pct": -0.04}, {"name": "智慧城市", "change_pct": 0.09}, {"name": "食品", "change_pct": -0.09}, {"name": "基因编辑", "change_pct": -0.52}, {"name": "社区团购", "change_pct": -0.45}, {"name": "大农业", "change_pct": -0.1}, {"name": "5G消息/RCS", "change_pct": 0.05}, {"name": "广西概念", "change_pct": -0.56}, {"name": "饮料", "change_pct": -0.45}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 32, "hot_rank_chg": -9, "stock_cnt": 5868, "price": "98.25", "change": "-1.96", "market_id": "33", "circulate_market_value": "64160750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600726", "name": "华电能源", "hot_rank": 33, "hot_rank_chg": 18, "stock_cnt": 5868, "price": "7.47", "change": "9.85", "market_id": "17", "circulate_market_value": "55840761000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.07}, {"name": "央企改革", "change_pct": 0.04}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "电力体制改革", "change_pct": -0.28}, {"name": "火电", "change_pct": -0.42}, {"name": "振兴东北", "change_pct": 0.17}, {"name": "国企改革", "change_pct": 0.01}]}, {"code": "603466", "name": "风语筑", "hot_rank": 34, "hot_rank_chg": 20, "stock_cnt": 5868, "price": "14.00", "change": "2.04", "market_id": "17", "circulate_market_value": "8327598900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 35, "hot_rank_chg": 15, "stock_cnt": 5868, "price": "16.40", "change": "2.76", "market_id": "17", "circulate_market_value": "12911333100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 36, "hot_rank_chg": 8, "stock_cnt": 5868, "price": "406.00", "change": "2.39", "market_id": "33", "circulate_market_value": "67001796000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603887", "name": "城地香江", "hot_rank": 37, "hot_rank_chg": 26, "stock_cnt": 5868, "price": "13.40", "change": "7.29", "market_id": "17", "circulate_market_value": "8067194200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 38, "hot_rank_chg": -9, "stock_cnt": 5868, "price": "86.00", "change": "-3.02", "market_id": "33", "circulate_market_value": "2812066100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000887", "name": "中鼎股份", "hot_rank": 39, "hot_rank_chg": 35, "stock_cnt": 5868, "price": "23.00", "change": "-2.91", "market_id": "33", "circulate_market_value": "30230524000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 40, "hot_rank_chg": -5, "stock_cnt": 5868, "price": "18.08", "change": "1.12", "market_id": "33", "circulate_market_value": "60073544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 41, "hot_rank_chg": 32, "stock_cnt": 5868, "price": "53.00", "change": "-3.81", "market_id": "33", "circulate_market_value": "14627940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 42, "hot_rank_chg": -2, "stock_cnt": 5868, "price": "5.85", "change": "-0.17", "market_id": "33", "circulate_market_value": "206897730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.18}, {"name": "手机产业链", "change_pct": 0.94}, {"name": "超高清视频", "change_pct": 0.37}, {"name": "苹果产业链", "change_pct": 0.74}, {"name": "电竞", "change_pct": 0.13}, {"name": "半导体", "change_pct": 1.14}, {"name": "人工智能", "change_pct": 0.14}, {"name": "互联网医疗", "change_pct": -0.21}, {"name": "VR&AR", "change_pct": 0.61}, {"name": "OLED", "change_pct": 0.61}, {"name": "京津冀", "change_pct": 0.22}, {"name": "物联网", "change_pct": 0.24}, {"name": "指纹识别", "change_pct": 0.96}, {"name": "汽车零部件", "change_pct": 0.27}, {"name": "白马股", "change_pct": -0.04}, {"name": "智能制造", "change_pct": 0.25}, {"name": "小米概念股", "change_pct": 0.59}, {"name": "国产芯片", "change_pct": 0.96}, {"name": "液晶面板/LCD", "change_pct": 0.46}, {"name": "全息概念", "change_pct": 0.55}, {"name": "理想汽车概念股", "change_pct": 0.32}, {"name": "MicroLED", "change_pct": 0.6}, {"name": "钙钛矿电池", "change_pct": 0.44}, {"name": "智能手表", "change_pct": 0.77}, {"name": "MiniLED", "change_pct": 0.49}, {"name": "传感器", "change_pct": 0.64}, {"name": "大硅片", "change_pct": 1.54}, {"name": "AI PC", "change_pct": 0.9}, {"name": "华为产业链", "change_pct": 0.39}, {"name": "回购", "change_pct": 0.14}, {"name": "光电共封装CPO", "change_pct": 0.98}, {"name": "智能眼镜/MR头显", "change_pct": 0.92}, {"name": "玻璃基板封装", "change_pct": 0.7}]}, {"code": "600206", "name": "有研新材", "hot_rank": 43, "hot_rank_chg": -6, "stock_cnt": 5868, "price": "49.80", "change": "-0.82", "market_id": "17", "circulate_market_value": "42158356000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 44, "hot_rank_chg": -23, "stock_cnt": 5868, "price": "203.06", "change": "0.47", "market_id": "33", "circulate_market_value": "281506490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603758", "name": "秦安股份", "hot_rank": 45, "hot_rank_chg": 36, "stock_cnt": 5868, "price": "16.00", "change": "4.24", "market_id": "17", "circulate_market_value": "6929856800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 46, "hot_rank_chg": 22, "stock_cnt": 5868, "price": "133.50", "change": "3.14", "market_id": "17", "circulate_market_value": "266941600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 47, "hot_rank_chg": -22, "stock_cnt": 5868, "price": "10.70", "change": "-2.10", "market_id": "17", "circulate_market_value": "19143780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.07}, {"name": "纯碱", "change_pct": 0.05}, {"name": "食品", "change_pct": -0.09}, {"name": "土壤修复", "change_pct": 0.04}, {"name": "东数西算/算力", "change_pct": 0.15}, {"name": "OpenClaw概念", "change_pct": 0.09}, {"name": "DeepSeek概念股", "change_pct": 0.15}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 48, "hot_rank_chg": -15, "stock_cnt": 5868, "price": "40.56", "change": "-0.49", "market_id": "17", "circulate_market_value": "59298509000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 49, "hot_rank_chg": 3, "stock_cnt": 5868, "price": "89.90", "change": "0.30", "market_id": "17", "circulate_market_value": "131528586000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300684", "name": "中石科技", "hot_rank": 50, "hot_rank_chg": 42, "stock_cnt": 5868, "price": "67.36", "change": "20.01", "market_id": "33", "circulate_market_value": "13780184000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 51, "hot_rank_chg": -10, "stock_cnt": 5868, "price": "8.17", "change": "-2.16", "market_id": "33", "circulate_market_value": "13281918200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.01}, {"name": "电竞", "change_pct": 0.13}, {"name": "手游", "change_pct": -0.17}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "人工智能", "change_pct": 0.14}, {"name": "游戏", "change_pct": -0.16}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.1}, {"name": "腾讯概念股", "change_pct": -0.0}, {"name": "快手概念股", "change_pct": -0.53}, {"name": "元宇宙", "change_pct": 0.21}, {"name": "虚拟数字人", "change_pct": 0.06}, {"name": "东数西算/算力", "change_pct": 0.15}, {"name": "web3.0", "change_pct": 0.28}, {"name": "AIGC概念", "change_pct": 0.01}, {"name": "数据要素", "change_pct": 0.08}, {"name": "字节跳动概念股", "change_pct": -0.13}, {"name": "AI营销", "change_pct": -0.41}, {"name": "ChatGPT", "change_pct": 0.22}, {"name": "智能眼镜/MR头显", "change_pct": 0.92}, {"name": "人工智能大模型", "change_pct": 0.01}, {"name": "人形机器人", "change_pct": 0.26}, {"name": "短剧/互动影游", "change_pct": -0.52}, {"name": "多模态", "change_pct": -0.03}, {"name": "AI视频", "change_pct": 0.08}, {"name": "IP经济/谷子经济", "change_pct": -0.1}, {"name": "小红书概念股", "change_pct": -0.22}]}, {"code": "002031", "name": "巨轮智能", "hot_rank": 52, "hot_rank_chg": -6, "stock_cnt": 5868, "price": "6.01", "change": "-4.15", "market_id": "33", "circulate_market_value": "13218322900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": 0.3}, {"name": "轮胎", "change_pct": 0.02}, {"name": "冷链", "change_pct": 0.17}, {"name": "机器人", "change_pct": 0.26}, {"name": "智能制造", "change_pct": 0.25}, {"name": "工业母机", "change_pct": 0.19}, {"name": "减速器", "change_pct": 0.06}, {"name": "头盔", "change_pct": 0.16}, {"name": "人形机器人", "change_pct": 0.26}]}, {"code": "301165", "name": "锐捷网络", "hot_rank": 53, "hot_rank_chg": -5, "stock_cnt": 5868, "price": "140.28", "change": "-2.11", "market_id": "33", "circulate_market_value": "156220910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 54, "hot_rank_chg": 6, "stock_cnt": 5868, "price": "12.11", "change": "-3.27", "market_id": "17", "circulate_market_value": "8238671300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.22}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "雄安新区", "change_pct": -0.07}, {"name": "煤化工", "change_pct": -0.2}]}, {"code": "600578", "name": "京能电力", "hot_rank": 55, "hot_rank_chg": -10, "stock_cnt": 5868, "price": "6.40", "change": "-2.88", "market_id": "17", "circulate_market_value": "42845574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": -0.13}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "电力体制改革", "change_pct": -0.28}, {"name": "京津冀", "change_pct": 0.22}, {"name": "火电", "change_pct": -0.42}, {"name": "风电", "change_pct": 0.14}]}, {"code": "002400", "name": "省广集团", "hot_rank": 56, "hot_rank_chg": -1, "stock_cnt": 5868, "price": "7.55", "change": "-5.03", "market_id": "33", "circulate_market_value": "13032542900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.01}, {"name": "人工智能", "change_pct": 0.14}, {"name": "云计算数据中心", "change_pct": 0.18}, {"name": "大数据", "change_pct": 0.01}, {"name": "百度概念股", "change_pct": -0.14}, {"name": "腾讯概念股", "change_pct": -0.0}, {"name": "传媒", "change_pct": -0.29}, {"name": "快手概念股", "change_pct": -0.53}, {"name": "字节跳动概念股", "change_pct": -0.13}, {"name": "国企改革", "change_pct": 0.01}, {"name": "横琴新区", "change_pct": -0.18}, {"name": "网红/MCN", "change_pct": -0.22}, {"name": "5G消息/RCS", "change_pct": 0.05}, {"name": "AI营销", "change_pct": -0.41}, {"name": "短剧/互动影游", "change_pct": -0.52}, {"name": "小红书概念股", "change_pct": -0.22}, {"name": "区块链", "change_pct": -0.0}]}, {"code": "000936", "name": "华西股份", "hot_rank": 57, "hot_rank_chg": 49, "stock_cnt": 5868, "price": "6.97", "change": "9.94", "market_id": "33", "circulate_market_value": "6174634700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 1.14}, {"name": "共享经济", "change_pct": -0.18}, {"name": "人工智能", "change_pct": 0.14}, {"name": "光通信", "change_pct": 0.95}, {"name": "涤纶", "change_pct": 0.64}, {"name": "江苏国企改革", "change_pct": 0.08}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产芯片", "change_pct": 0.96}, {"name": "国企改革", "change_pct": 0.01}, {"name": "光电共封装CPO", "change_pct": 0.98}]}, {"code": "000593", "name": "德龙汇能", "hot_rank": 58, "hot_rank_chg": 18, "stock_cnt": 5868, "price": "25.02", "change": "-10.00", "market_id": "33", "circulate_market_value": "8969248900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 59, "hot_rank_chg": -17, "stock_cnt": 5868, "price": "41.59", "change": "-0.74", "market_id": "17", "circulate_market_value": "165178300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605286", "name": "同力天启", "hot_rank": 60, "hot_rank_chg": 39, "stock_cnt": 5868, "price": "37.50", "change": "10.00", "market_id": "17", "circulate_market_value": "6300000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 61, "hot_rank_chg": -23, "stock_cnt": 5868, "price": "30.70", "change": "-5.74", "market_id": "17", "circulate_market_value": "10343442500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 62, "hot_rank_chg": -26, "stock_cnt": 5868, "price": "261.00", "change": "1.49", "market_id": "33", "circulate_market_value": "284069280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002219", "name": "新里程", "hot_rank": 63, "hot_rank_chg": 41, "stock_cnt": 5868, "price": "2.70", "change": "8.00", "market_id": "33", "circulate_market_value": "8834052800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.08}, {"name": "互联网医疗", "change_pct": -0.21}, {"name": "养老产业", "change_pct": -0.03}, {"name": "民营医院", "change_pct": 0.03}, {"name": "医药", "change_pct": -0.13}, {"name": "低价股", "change_pct": -0.02}, {"name": "医疗信息化", "change_pct": 0.03}, {"name": "AI医疗", "change_pct": -0.09}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 64, "hot_rank_chg": -34, "stock_cnt": 5868, "price": "14.76", "change": "-3.21", "market_id": "33", "circulate_market_value": "51334251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 65, "hot_rank_chg": 5, "stock_cnt": 5868, "price": "406.55", "change": "2.41", "market_id": "33", "circulate_market_value": "114586887000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 66, "hot_rank_chg": -32, "stock_cnt": 5868, "price": "16.97", "change": "-7.57", "market_id": "33", "circulate_market_value": "11798613700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603890", "name": "春秋电子", "hot_rank": 67, "hot_rank_chg": 30, "stock_cnt": 5868, "price": "21.26", "change": "3.96", "market_id": "17", "circulate_market_value": "9499641200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000779", "name": "甘咨询", "hot_rank": 68, "hot_rank_chg": -19, "stock_cnt": 5868, "price": "10.10", "change": "-5.87", "market_id": "33", "circulate_market_value": "4694207400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.07}, {"name": "云计算数据中心", "change_pct": 0.18}, {"name": "水利", "change_pct": -0.11}, {"name": "大数据", "change_pct": 0.01}, {"name": "海绵城市", "change_pct": -0.14}, {"name": "风电", "change_pct": 0.14}, {"name": "乡村振兴", "change_pct": -0.12}, {"name": "数字经济", "change_pct": 0.1}, {"name": "大基建", "change_pct": -0.06}, {"name": "东数西算/算力", "change_pct": 0.15}, {"name": "新型城镇化", "change_pct": 0.03}, {"name": "国企改革", "change_pct": 0.01}, {"name": "旧改", "change_pct": 0.15}, {"name": "西部大开发", "change_pct": -0.29}, {"name": "低空经济", "change_pct": 0.22}, {"name": "房屋检测", "change_pct": 0.02}]}, {"code": "603256", "name": "宏和科技", "hot_rank": 69, "hot_rank_chg": 17, "stock_cnt": 5868, "price": "140.88", "change": "-7.12", "market_id": "17", "circulate_market_value": "123936010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002484", "name": "江海股份", "hot_rank": 70, "hot_rank_chg": 18, "stock_cnt": 5868, "price": "69.01", "change": "3.60", "market_id": "33", "circulate_market_value": "56620791000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 71, "hot_rank_chg": 36, "stock_cnt": 5868, "price": "4.54", "change": "9.93", "market_id": "33", "circulate_market_value": "3473738900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.08}, {"name": "股权转让", "change_pct": 0.13}, {"name": "优化生育（三孩）", "change_pct": -0.04}, {"name": "医药商业", "change_pct": -0.17}, {"name": "保健品", "change_pct": 0.02}, {"name": "民营医院", "change_pct": 0.03}, {"name": "医药", "change_pct": -0.13}, {"name": "食品", "change_pct": -0.09}, {"name": "辅助生殖", "change_pct": 0.16}, {"name": "口腔", "change_pct": 0.05}, {"name": "医美", "change_pct": 0.21}, {"name": "新冠病毒防治", "change_pct": -0.02}]}, {"code": "002015", "name": "协鑫能科", "hot_rank": 72, "hot_rank_chg": 8, "stock_cnt": 5868, "price": "16.44", "change": "0.00", "market_id": "33", "circulate_market_value": "26687457000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 73, "hot_rank_chg": -20, "stock_cnt": 5868, "price": "58.00", "change": "-1.12", "market_id": "33", "circulate_market_value": "21373191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300534", "name": "陇神戎发", "hot_rank": 74, "hot_rank_chg": -12, "stock_cnt": 5868, "price": "18.00", "change": "-4.86", "market_id": "33", "circulate_market_value": "5436926800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603989", "name": "艾华集团", "hot_rank": 75, "hot_rank_chg": 39, "stock_cnt": 5868, "price": "30.80", "change": "2.70", "market_id": "17", "circulate_market_value": "12282419700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 76, "hot_rank_chg": -12, "stock_cnt": 5868, "price": "31.80", "change": "-1.27", "market_id": "17", "circulate_market_value": "655137020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 77, "hot_rank_chg": -12, "stock_cnt": 5868, "price": "40.18", "change": "1.59", "market_id": "33", "circulate_market_value": "63249571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600683", "name": "京投发展", "hot_rank": 78, "hot_rank_chg": 30, "stock_cnt": 5868, "price": "14.22", "change": "9.98", "market_id": "17", "circulate_market_value": "10533857400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300404", "name": "博济医药", "hot_rank": 79, "hot_rank_chg": 24, "stock_cnt": 5868, "price": "15.63", "change": "8.17", "market_id": "33", "circulate_market_value": "4462609000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300862", "name": "蓝盾光电", "hot_rank": 80, "hot_rank_chg": 33, "stock_cnt": 5868, "price": "47.18", "change": "19.72", "market_id": "33", "circulate_market_value": "7146402100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 81, "hot_rank_chg": -20, "stock_cnt": 5868, "price": "65.88", "change": "1.00", "market_id": "17", "circulate_market_value": "1307328800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 82, "hot_rank_chg": -35, "stock_cnt": 5868, "price": "11.02", "change": "-2.48", "market_id": "33", "circulate_market_value": "9772059200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 1.02}, {"name": "手机产业链", "change_pct": 0.94}, {"name": "超高清视频", "change_pct": 0.37}, {"name": "锂电池", "change_pct": 0.25}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "OLED", "change_pct": 0.61}, {"name": "包装印刷", "change_pct": 0.08}, {"name": "光伏", "change_pct": 0.26}, {"name": "新能源汽车", "change_pct": 0.2}, {"name": "小米概念股", "change_pct": 0.59}, {"name": "液晶面板/LCD", "change_pct": 0.46}, {"name": "可降解塑料", "change_pct": 0.3}, {"name": "华为产业链", "change_pct": 0.39}, {"name": "PET复合铜箔", "change_pct": 0.69}]}, {"code": "000692", "name": "惠天热电", "hot_rank": 83, "hot_rank_chg": 45, "stock_cnt": 5868, "price": "5.35", "change": "9.63", "market_id": "33", "circulate_market_value": "2850656400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "振兴东北", "change_pct": 0.17}]}, {"code": "600522", "name": "中天科技", "hot_rank": 84, "hot_rank_chg": -26, "stock_cnt": 5868, "price": "32.90", "change": "0.00", "market_id": "17", "circulate_market_value": "112286044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 85, "hot_rank_chg": -18, "stock_cnt": 5868, "price": "18.70", "change": "-3.41", "market_id": "17", "circulate_market_value": "20089466000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 86, "hot_rank_chg": -3, "stock_cnt": 5868, "price": "4.20", "change": "-8.10", "market_id": "17", "circulate_market_value": "13727440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.05}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "养老产业", "change_pct": -0.03}, {"name": "粤港澳大湾区", "change_pct": -0.0}, {"name": "民营医院", "change_pct": 0.03}, {"name": "地摊经济", "change_pct": -0.24}]}, {"code": "600744", "name": "华银电力", "hot_rank": 87, "hot_rank_chg": -8, "stock_cnt": 5868, "price": "7.63", "change": "-2.18", "market_id": "17", "circulate_market_value": "15497478000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.04}, {"name": "电力体制改革", "change_pct": -0.28}, {"name": "火电", "change_pct": -0.42}, {"name": "风电", "change_pct": 0.14}, {"name": "储能", "change_pct": 0.25}, {"name": "碳中和", "change_pct": 0.01}, {"name": "国企改革", "change_pct": 0.01}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 88, "hot_rank_chg": 1, "stock_cnt": 5868, "price": "172.00", "change": "1.77", "market_id": "17", "circulate_market_value": "47401200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603191", "name": "望变电气", "hot_rank": 89, "hot_rank_chg": 26, "stock_cnt": 5868, "price": "17.19", "change": "1.48", "market_id": "17", "circulate_market_value": "5672092100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 90, "hot_rank_chg": -24, "stock_cnt": 5868, "price": "140.99", "change": "-0.53", "market_id": "17", "circulate_market_value": "340032470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 91, "hot_rank_chg": -32, "stock_cnt": 5868, "price": "65.00", "change": "-2.55", "market_id": "33", "circulate_market_value": "94474380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 92, "hot_rank_chg": -15, "stock_cnt": 5868, "price": "62.49", "change": "0.43", "market_id": "33", "circulate_market_value": "94825589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 93, "hot_rank_chg": -2, "stock_cnt": 5868, "price": "3.49", "change": "-2.24", "market_id": "33", "circulate_market_value": "6991786400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": 0.18}, {"name": "数字孪生", "change_pct": 0.06}, {"name": "深圳本地股", "change_pct": 0.18}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "人工智能", "change_pct": 0.14}, {"name": "互联网医疗", "change_pct": -0.21}, {"name": "云计算数据中心", "change_pct": 0.18}, {"name": "高铁轨交", "change_pct": 0.16}, {"name": "人脸识别", "change_pct": 0.13}, {"name": "智慧停车", "change_pct": -0.03}, {"name": "物联网", "change_pct": 0.24}, {"name": "大数据", "change_pct": 0.01}, {"name": "智慧城市", "change_pct": 0.09}, {"name": "雄安新区", "change_pct": -0.07}, {"name": "机器人", "change_pct": 0.26}, {"name": "数字经济", "change_pct": 0.1}, {"name": "阿里巴巴概念股", "change_pct": 0.07}, {"name": "腾讯概念股", "change_pct": -0.0}, {"name": "建筑节能", "change_pct": 0.32}, {"name": "旧改", "change_pct": 0.15}, {"name": "医疗信息化", "change_pct": 0.03}, {"name": "新冠病毒防治", "change_pct": -0.02}, {"name": "华为产业链", "change_pct": 0.39}, {"name": "医疗耗材供应链SPD", "change_pct": -0.5}, {"name": "区块链", "change_pct": -0.0}]}, {"code": "002575", "name": "群兴玩具", "hot_rank": 94, "hot_rank_chg": 37, "stock_cnt": 5868, "price": "6.47", "change": "6.42", "market_id": "33", "circulate_market_value": "3780586000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "腾讯概念股", "change_pct": -0.0}, {"name": "物业管理", "change_pct": -0.02}, {"name": "东数西算/算力", "change_pct": 0.15}]}, {"code": "002739", "name": "儒意电影", "hot_rank": 95, "hot_rank_chg": -24, "stock_cnt": 5868, "price": "9.85", "change": "-3.71", "market_id": "33", "circulate_market_value": "20507718000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.48}, {"name": "足球", "change_pct": 0.08}, {"name": "阿里巴巴概念股", "change_pct": 0.07}, {"name": "拼多多概念股", "change_pct": 0.05}, {"name": "网红/MCN", "change_pct": -0.22}, {"name": "大消费", "change_pct": -0.16}, {"name": "盲盒", "change_pct": 0.19}, {"name": "短剧/互动影游", "change_pct": -0.52}, {"name": "IP经济/谷子经济", "change_pct": -0.1}, {"name": "首发经济", "change_pct": -0.18}, {"name": "小红书概念股", "change_pct": -0.22}, {"name": "服务消费", "change_pct": 0.05}]}, {"code": "603823", "name": "百合花", "hot_rank": 97, "hot_rank_chg": -10, "stock_cnt": 5868, "price": "75.77", "change": "-0.30", "market_id": "17", "circulate_market_value": "31548181000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 98, "hot_rank_chg": -4, "stock_cnt": 5868, "price": "15.50", "change": "-3.12", "market_id": "17", "circulate_market_value": "2480000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 99, "hot_rank_chg": 39, "stock_cnt": 5868, "price": "10.00", "change": "2.99", "market_id": "17", "circulate_market_value": "4326736500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.13}, {"name": "强势人气股", "change_pct": -0.01}, {"name": "光伏", "change_pct": 0.26}, {"name": "无线耳机", "change_pct": 1.06}, {"name": "华为产业链", "change_pct": 0.39}, {"name": "光伏胶膜", "change_pct": 0.47}]}, {"code": "603228", "name": "景旺电子", "hot_rank": 100, "hot_rank_chg": -31, "stock_cnt": 5868, "price": "96.10", "change": "-1.13", "market_id": "17", "circulate_market_value": "94361889000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告"};