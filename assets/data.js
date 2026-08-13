const UPDATE_TIME = "2026-08-13 17:54";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 1.78,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续100天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "CRO概念",
    "rise": 3.13,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "算力租赁",
    "rise": -0.38,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续134天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.97,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续270天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": -1.95,
    "rate": 0,
    "tag": "",
    "hotTag": "连续223天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "AI应用",
    "rise": -0.97,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "MLCC概念",
    "rise": -2.57,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "PCB概念",
    "rise": -1.7,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续93天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": -1.5,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续434天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": -1.39,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续199天上榜",
    "rankChg": 0,
    "etfName": "航空航天ETF",
    "code": "886078"
  },
  {
    "name": "东数西算(算力)",
    "rise": -0.64,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -0.87,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "芯片概念",
    "rise": -1.54,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "猪肉",
    "rise": -0.03,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": -1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "机器人概念",
    "rise": -1.33,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续101天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "光纤概念",
    "rise": -1.29,
    "rate": 0,
    "tag": "",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "工业40LOF",
    "code": "886084"
  },
  {
    "name": "白酒概念",
    "rise": 0.11,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "中国AI 50",
    "rise": 0.47,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886102"
  },
  {
    "name": "黄金概念",
    "rise": -3.21,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "ST板块",
    "rise": -0.85,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885699"
  }
];
const THS_EVENTS = [
  {
    "title": "反弹超30%的创新药再度大涨！AI休整后，市场新主线来了？",
    "desc": "",
    "heat": 434090,
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
        "name": "新赣江",
        "code": "920367",
        "chg": 29.600333
      }
    ]
  },
  {
    "title": "腾讯，最新业绩出炉！二季度资本开支大增176%",
    "desc": "",
    "heat": 315551,
    "direction": "腾讯概念",
    "themes": [
      "腾讯概念",
      "腾讯系算力",
      "腾讯元宝"
    ],
    "stocks": [
      {
        "name": "立昂技术",
        "code": "300603",
        "chg": 18.306351
      }
    ]
  },
  {
    "title": "DeepSeek V4 Pro 正式版API上线 大幅增强Agent能力",
    "desc": "",
    "heat": 282211,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "博济医药",
        "code": "300404",
        "chg": 20.016611
      }
    ]
  },
  {
    "title": "鸿海第四季度将开始出货英伟达Vera Rubin平台",
    "desc": "",
    "heat": 168895,
    "direction": "英伟达概念",
    "themes": [
      "英伟达概念",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "立昂技术",
        "code": "300603",
        "chg": 18.306351
      }
    ]
  },
  {
    "title": "算力即黄金！单笔合同突破10亿美元，AI新贵Nebius(NBIS.US)云业务营收飙升500%，盘前暴涨",
    "desc": "",
    "heat": 100045,
    "direction": "云算力租赁",
    "themes": [
      "东数西算(算力)",
      "算力租赁",
      "云计算"
    ],
    "stocks": [
      {
        "name": "立昂技术",
        "code": "300603",
        "chg": 18.306351
      }
    ]
  },
  {
    "title": "到 2030 年全国算力用电量将达 8000 亿度，届时 6 万亿度绿电奔涌入网",
    "desc": "",
    "heat": 79174,
    "direction": "算电协同",
    "themes": [
      "算电协同",
      "电力"
    ],
    "stocks": [
      {
        "name": "大唐发电",
        "code": "601991",
        "chg": 10.015898
      }
    ]
  },
  {
    "title": "从“不敢保”到“主动保” 保险补齐脑机接口产业化关键一环",
    "desc": "",
    "heat": 67400,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "澳洋健康",
        "code": "002172",
        "chg": 10.133333
      }
    ]
  },
  {
    "title": "马斯克：大概再过四五年，AI 将占到 SpaceX 价值的 99%",
    "desc": "",
    "heat": 7966,
    "direction": "太空算力",
    "themes": [
      "太空算力",
      "太空光伏"
    ],
    "stocks": [
      {
        "name": "明阳智能",
        "code": "601615",
        "chg": 1.848739
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+10.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+5.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+2.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+2.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+2.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血氧仪",
    "change": "+2.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+2.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因测序",
    "change": "+1.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "精准医疗",
    "change": "+1.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "猴痘概念",
    "change": "+1.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中药",
    "change": "+1.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超节点",
    "change": "+1.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+1.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+1.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+1.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+1.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "体外诊断",
    "change": "+1.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI医疗",
    "change": "+1.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+1.12%",
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
    "stock_cnt": 5850,
    "price": "6.92",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "85780937000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "超超临界火电",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.22
      },
      {
        "name": "核电",
        "change_pct": -1.47
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.41
      },
      {
        "name": "水电",
        "change_pct": 0.96
      },
      {
        "name": "火电",
        "change_pct": 0.97
      },
      {
        "name": "光伏",
        "change_pct": -1.83
      },
      {
        "name": "风电",
        "change_pct": -1.21
      },
      {
        "name": "国企改革",
        "change_pct": -1.12
      },
      {
        "name": "算电协同",
        "change_pct": 0.56
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 9,
    "hot_rank_chg": 0,
    "stock_cnt": 5850,
    "price": "5.56",
    "change": "0.72",
    "market_id": "33",
    "circulate_market_value": "32552679000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.94
      },
      {
        "name": "人工智能",
        "change_pct": -0.97
      },
      {
        "name": "水利",
        "change_pct": -1.35
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.48
      },
      {
        "name": "大数据",
        "change_pct": -1.05
      },
      {
        "name": "园林",
        "change_pct": -2.19
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.34
      },
      {
        "name": "数字经济",
        "change_pct": -1.02
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.46
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.06
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.36
      },
      {
        "name": "快手概念股",
        "change_pct": -1.14
      },
      {
        "name": "IGBT",
        "change_pct": -0.85
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.51
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.19
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.89
      },
      {
        "name": "氮化镓",
        "change_pct": -1.1
      },
      {
        "name": "AI营销",
        "change_pct": -1.5
      },
      {
        "name": "多模态",
        "change_pct": -1.04
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.43
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.04
      },
      {
        "name": "区块链",
        "change_pct": -1.46
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 10,
    "hot_rank_chg": -3,
    "stock_cnt": 5850,
    "price": "8.86",
    "change": "0.57",
    "market_id": "17",
    "circulate_market_value": "22313998000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.09
      },
      {
        "name": "工业大麻",
        "change_pct": -0.13
      },
      {
        "name": "中药",
        "change_pct": 1.54
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "保健品",
        "change_pct": 0.23
      },
      {
        "name": "民营医院",
        "change_pct": 0.41
      },
      {
        "name": "医药",
        "change_pct": 1.46
      },
      {
        "name": "化学原料药",
        "change_pct": 0.79
      },
      {
        "name": "流感",
        "change_pct": 0.88
      },
      {
        "name": "振兴东北",
        "change_pct": -0.17
      },
      {
        "name": "食品",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 15,
    "hot_rank_chg": 7,
    "stock_cnt": 5850,
    "price": "4.81",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "12718810600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "洁净室",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "装修装饰",
        "change_pct": -1.28
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.09
      },
      {
        "name": "破净股",
        "change_pct": -1.06
      },
      {
        "name": "航天",
        "change_pct": -1.39
      },
      {
        "name": "旧改",
        "change_pct": -1.3
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 19,
    "hot_rank_chg": 12,
    "stock_cnt": 5850,
    "price": "4.25",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "8925653900.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.54
      },
      {
        "name": "维生素",
        "change_pct": -1.0
      },
      {
        "name": "基因测序",
        "change_pct": 1.98
      },
      {
        "name": "民营医院",
        "change_pct": 0.41
      },
      {
        "name": "医药",
        "change_pct": 1.46
      },
      {
        "name": "化学原料药",
        "change_pct": 0.79
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 2.02
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 23,
    "hot_rank_chg": 9,
    "stock_cnt": 5850,
    "price": "11.62",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "3305676300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -0.77
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.17
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "教育",
        "change_pct": -1.47
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.0
      },
      {
        "name": "职业教育",
        "change_pct": -1.81
      },
      {
        "name": "在线教育",
        "change_pct": -2.26
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.3
      },
      {
        "name": "华为产业链",
        "change_pct": -1.1
      },
      {
        "name": "智谱AI",
        "change_pct": -1.81
      }
    ]
  },
  {
    "code": "600881",
    "name": "亚泰集团",
    "hot_rank": 25,
    "hot_rank_chg": 18,
    "stock_cnt": 5850,
    "price": "2.27",
    "change": "10.19",
    "market_id": "17",
    "circulate_market_value": "7336982700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.66
      },
      {
        "name": "中药",
        "change_pct": 1.54
      },
      {
        "name": "创新药",
        "change_pct": 2.24
      },
      {
        "name": "股权转让",
        "change_pct": -1.05
      },
      {
        "name": "水泥",
        "change_pct": -1.6
      },
      {
        "name": "保健品",
        "change_pct": 0.23
      },
      {
        "name": "医药",
        "change_pct": 1.46
      },
      {
        "name": "疫苗",
        "change_pct": 1.12
      },
      {
        "name": "振兴东北",
        "change_pct": -0.17
      },
      {
        "name": "食品",
        "change_pct": -0.19
      },
      {
        "name": "物业管理",
        "change_pct": -2.29
      },
      {
        "name": "低价股",
        "change_pct": -1.49
      },
      {
        "name": "国企改革",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 31,
    "hot_rank_chg": 8,
    "stock_cnt": 5850,
    "price": "6.26",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4479305500.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "《欢迎来龙餐馆》上映",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -1.86
      },
      {
        "name": "旅游",
        "change_pct": -1.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.37
      }
    ]
  },
  {
    "code": "600821",
    "name": "金开新能",
    "hot_rank": 33,
    "hot_rank_chg": 24,
    "stock_cnt": 5850,
    "price": "7.15",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "14066373000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算电协同",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -1.05
      },
      {
        "name": "天津国企改革",
        "change_pct": 0.06
      },
      {
        "name": "京津冀",
        "change_pct": -1.13
      },
      {
        "name": "光伏",
        "change_pct": -1.83
      },
      {
        "name": "风电",
        "change_pct": -1.21
      },
      {
        "name": "储能",
        "change_pct": -0.91
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.45
      },
      {
        "name": "国企改革",
        "change_pct": -1.12
      },
      {
        "name": "算电协同",
        "change_pct": 0.56
      }
    ]
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 35,
    "hot_rank_chg": 16,
    "stock_cnt": 5850,
    "price": "6.80",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "50832286000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "热电联产",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -1.14
      },
      {
        "name": "央企改革",
        "change_pct": -1.22
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.41
      },
      {
        "name": "火电",
        "change_pct": 0.97
      },
      {
        "name": "振兴东北",
        "change_pct": -0.17
      },
      {
        "name": "国企改革",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 37,
    "hot_rank_chg": 3,
    "stock_cnt": 5850,
    "price": "5.86",
    "change": "-1.18",
    "market_id": "33",
    "circulate_market_value": "207251410000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.89
      },
      {
        "name": "手机产业链",
        "change_pct": -1.63
      },
      {
        "name": "超高清视频",
        "change_pct": -1.38
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.29
      },
      {
        "name": "电竞",
        "change_pct": -1.18
      },
      {
        "name": "半导体",
        "change_pct": -1.81
      },
      {
        "name": "人工智能",
        "change_pct": -0.97
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.35
      },
      {
        "name": "VR&AR",
        "change_pct": -1.35
      },
      {
        "name": "OLED",
        "change_pct": -1.39
      },
      {
        "name": "京津冀",
        "change_pct": -1.13
      },
      {
        "name": "物联网",
        "change_pct": -1.11
      },
      {
        "name": "指纹识别",
        "change_pct": -2.04
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.27
      },
      {
        "name": "白马股",
        "change_pct": -0.82
      },
      {
        "name": "智能制造",
        "change_pct": -1.35
      },
      {
        "name": "小米概念股",
        "change_pct": -1.34
      },
      {
        "name": "国产芯片",
        "change_pct": -1.51
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.66
      },
      {
        "name": "全息概念",
        "change_pct": -1.22
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.06
      },
      {
        "name": "MicroLED",
        "change_pct": -1.48
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.21
      },
      {
        "name": "智能手表",
        "change_pct": -1.13
      },
      {
        "name": "MiniLED",
        "change_pct": -1.77
      },
      {
        "name": "传感器",
        "change_pct": -1.72
      },
      {
        "name": "大硅片",
        "change_pct": -2.36
      },
      {
        "name": "AI PC",
        "change_pct": -0.24
      },
      {
        "name": "华为产业链",
        "change_pct": -1.1
      },
      {
        "name": "回购",
        "change_pct": -0.77
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.31
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.9
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.76
      }
    ]
  },
  {
    "code": "600578",
    "name": "京能电力",
    "hot_rank": 38,
    "hot_rank_chg": 7,
    "stock_cnt": 5850,
    "price": "6.59",
    "change": "9.83",
    "market_id": "17",
    "circulate_market_value": "44117552000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -1.18
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.41
      },
      {
        "name": "京津冀",
        "change_pct": -1.13
      },
      {
        "name": "火电",
        "change_pct": 0.97
      },
      {
        "name": "风电",
        "change_pct": -1.21
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 42,
    "hot_rank_chg": -17,
    "stock_cnt": 5850,
    "price": "10.93",
    "change": "-4.54",
    "market_id": "17",
    "circulate_market_value": "19555282000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.71
      },
      {
        "name": "纯碱",
        "change_pct": -2.13
      },
      {
        "name": "食品",
        "change_pct": -0.19
      },
      {
        "name": "土壤修复",
        "change_pct": -1.28
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.45
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -1.49
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.2
      }
    ]
  },
  {
    "code": "002329",
    "name": "皇氏集团",
    "hot_rank": 46,
    "hot_rank_chg": 10,
    "stock_cnt": 5850,
    "price": "4.62",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3010359300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "乳业",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.09
      },
      {
        "name": "乳业（奶粉）",
        "change_pct": 1.06
      },
      {
        "name": "股权转让",
        "change_pct": -1.05
      },
      {
        "name": "一带一路",
        "change_pct": -1.22
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.42
      },
      {
        "name": "智慧城市",
        "change_pct": -1.19
      },
      {
        "name": "食品",
        "change_pct": -0.19
      },
      {
        "name": "基因编辑",
        "change_pct": 2.56
      },
      {
        "name": "社区团购",
        "change_pct": -0.35
      },
      {
        "name": "大农业",
        "change_pct": -1.18
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -1.37
      },
      {
        "name": "广西概念",
        "change_pct": -0.79
      },
      {
        "name": "饮料",
        "change_pct": 0.03
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 53,
    "hot_rank_chg": 7,
    "stock_cnt": 5850,
    "price": "12.52",
    "change": "5.57",
    "market_id": "17",
    "circulate_market_value": "8517602300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -1.33
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "雄安新区",
        "change_pct": -1.33
      },
      {
        "name": "煤化工",
        "change_pct": -1.49
      }
    ]
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 54,
    "hot_rank_chg": 9,
    "stock_cnt": 5850,
    "price": "12.49",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "7519347500.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "IDC全产业链",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": -0.53
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.0
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.46
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.45
      },
      {
        "name": "国资入股",
        "change_pct": -0.84
      },
      {
        "name": "华为产业链",
        "change_pct": -1.1
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 56,
    "hot_rank_chg": -15,
    "stock_cnt": 5850,
    "price": "8.35",
    "change": "-2.11",
    "market_id": "33",
    "circulate_market_value": "13574543000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.09
      },
      {
        "name": "电竞",
        "change_pct": -1.18
      },
      {
        "name": "手游",
        "change_pct": -1.39
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "人工智能",
        "change_pct": -0.97
      },
      {
        "name": "游戏",
        "change_pct": -1.48
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.02
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.46
      },
      {
        "name": "快手概念股",
        "change_pct": -1.14
      },
      {
        "name": "元宇宙",
        "change_pct": -1.71
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.51
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.45
      },
      {
        "name": "web3.0",
        "change_pct": -2.26
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.19
      },
      {
        "name": "数据要素",
        "change_pct": -1.2
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.89
      },
      {
        "name": "AI营销",
        "change_pct": -1.5
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.1
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.9
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.06
      },
      {
        "name": "人形机器人",
        "change_pct": -1.49
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.65
      },
      {
        "name": "多模态",
        "change_pct": -1.04
      },
      {
        "name": "AI视频",
        "change_pct": -1.25
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.37
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.04
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 60,
    "hot_rank_chg": -11,
    "stock_cnt": 5850,
    "price": "10.73",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "4987014300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.22
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.53
      },
      {
        "name": "水利",
        "change_pct": -1.35
      },
      {
        "name": "大数据",
        "change_pct": -1.05
      },
      {
        "name": "海绵城市",
        "change_pct": -1.66
      },
      {
        "name": "风电",
        "change_pct": -1.21
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.39
      },
      {
        "name": "数字经济",
        "change_pct": -1.02
      },
      {
        "name": "大基建",
        "change_pct": -1.29
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.45
      },
      {
        "name": "新型城镇化",
        "change_pct": -1.33
      },
      {
        "name": "国企改革",
        "change_pct": -1.12
      },
      {
        "name": "旧改",
        "change_pct": -1.3
      },
      {
        "name": "西部大开发",
        "change_pct": -2.34
      },
      {
        "name": "低空经济",
        "change_pct": -1.29
      },
      {
        "name": "房屋检测",
        "change_pct": -1.6
      }
    ]
  },
  {
    "code": "002400",
    "name": "省广集团",
    "hot_rank": 64,
    "hot_rank_chg": -9,
    "stock_cnt": 5850,
    "price": "7.95",
    "change": "8.46",
    "market_id": "33",
    "circulate_market_value": "13723009000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.09
      },
      {
        "name": "人工智能",
        "change_pct": -0.97
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.53
      },
      {
        "name": "大数据",
        "change_pct": -1.05
      },
      {
        "name": "百度概念股",
        "change_pct": -1.17
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.46
      },
      {
        "name": "传媒",
        "change_pct": -0.82
      },
      {
        "name": "快手概念股",
        "change_pct": -1.14
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.89
      },
      {
        "name": "国企改革",
        "change_pct": -1.12
      },
      {
        "name": "横琴新区",
        "change_pct": -1.29
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.1
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -1.37
      },
      {
        "name": "AI营销",
        "change_pct": -1.5
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.65
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.04
      },
      {
        "name": "区块链",
        "change_pct": -1.46
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 69,
    "hot_rank_chg": -23,
    "stock_cnt": 5850,
    "price": "6.27",
    "change": "-2.34",
    "market_id": "33",
    "circulate_market_value": "13790164000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": -1.65
      },
      {
        "name": "轮胎",
        "change_pct": -1.54
      },
      {
        "name": "冷链",
        "change_pct": -1.41
      },
      {
        "name": "机器人",
        "change_pct": -1.36
      },
      {
        "name": "智能制造",
        "change_pct": -1.35
      },
      {
        "name": "工业母机",
        "change_pct": -2.01
      },
      {
        "name": "减速器",
        "change_pct": -1.41
      },
      {
        "name": "头盔",
        "change_pct": -1.79
      },
      {
        "name": "人形机器人",
        "change_pct": -1.49
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 70,
    "hot_rank_chg": 9,
    "stock_cnt": 5850,
    "price": "7.80",
    "change": "3.72",
    "market_id": "17",
    "circulate_market_value": "15842769000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.22
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.41
      },
      {
        "name": "火电",
        "change_pct": 0.97
      },
      {
        "name": "风电",
        "change_pct": -1.21
      },
      {
        "name": "储能",
        "change_pct": -0.91
      },
      {
        "name": "碳中和",
        "change_pct": -1.18
      },
      {
        "name": "国企改革",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 71,
    "hot_rank_chg": -24,
    "stock_cnt": 5850,
    "price": "11.30",
    "change": "1.80",
    "market_id": "33",
    "circulate_market_value": "10020351100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -1.68
      },
      {
        "name": "手机产业链",
        "change_pct": -1.63
      },
      {
        "name": "超高清视频",
        "change_pct": -1.38
      },
      {
        "name": "锂电池",
        "change_pct": -1.55
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "OLED",
        "change_pct": -1.39
      },
      {
        "name": "包装印刷",
        "change_pct": -1.47
      },
      {
        "name": "光伏",
        "change_pct": -1.83
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.31
      },
      {
        "name": "小米概念股",
        "change_pct": -1.34
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.66
      },
      {
        "name": "可降解塑料",
        "change_pct": -1.19
      },
      {
        "name": "华为产业链",
        "change_pct": -1.1
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.63
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 74,
    "hot_rank_chg": 33,
    "stock_cnt": 5850,
    "price": "4.13",
    "change": "10.13",
    "market_id": "33",
    "circulate_market_value": "3160031200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.54
      },
      {
        "name": "股权转让",
        "change_pct": -1.05
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.42
      },
      {
        "name": "医药商业",
        "change_pct": 0.74
      },
      {
        "name": "保健品",
        "change_pct": 0.23
      },
      {
        "name": "民营医院",
        "change_pct": 0.41
      },
      {
        "name": "医药",
        "change_pct": 1.46
      },
      {
        "name": "食品",
        "change_pct": -0.19
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.62
      },
      {
        "name": "口腔",
        "change_pct": -0.52
      },
      {
        "name": "医美",
        "change_pct": 0.27
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "000936",
    "name": "华西股份",
    "hot_rank": 77,
    "hot_rank_chg": 29,
    "stock_cnt": 5850,
    "price": "6.34",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "5616525700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "间接参股光芯片",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -1.81
      },
      {
        "name": "共享经济",
        "change_pct": -1.02
      },
      {
        "name": "人工智能",
        "change_pct": -0.97
      },
      {
        "name": "光通信",
        "change_pct": -0.66
      },
      {
        "name": "涤纶",
        "change_pct": -1.2
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.54
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产芯片",
        "change_pct": -1.51
      },
      {
        "name": "国企改革",
        "change_pct": -1.12
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.31
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 81,
    "hot_rank_chg": -10,
    "stock_cnt": 5850,
    "price": "10.23",
    "change": "-5.10",
    "market_id": "33",
    "circulate_market_value": "21298879000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -1.86
      },
      {
        "name": "足球",
        "change_pct": -1.41
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.0
      },
      {
        "name": "拼多多概念股",
        "change_pct": -1.26
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.1
      },
      {
        "name": "大消费",
        "change_pct": -0.76
      },
      {
        "name": "盲盒",
        "change_pct": -1.42
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.65
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.37
      },
      {
        "name": "首发经济",
        "change_pct": -1.47
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.04
      },
      {
        "name": "服务消费",
        "change_pct": -1.66
      }
    ]
  },
  {
    "code": "002219",
    "name": "新里程",
    "hot_rank": 82,
    "hot_rank_chg": 22,
    "stock_cnt": 5850,
    "price": "2.50",
    "change": "10.13",
    "market_id": "33",
    "circulate_market_value": "8179678600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.54
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.35
      },
      {
        "name": "养老产业",
        "change_pct": -0.33
      },
      {
        "name": "民营医院",
        "change_pct": 0.41
      },
      {
        "name": "医药",
        "change_pct": 1.46
      },
      {
        "name": "低价股",
        "change_pct": -1.49
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.93
      },
      {
        "name": "AI医疗",
        "change_pct": 1.14
      }
    ]
  },
  {
    "code": "600683",
    "name": "京投发展",
    "hot_rank": 90,
    "hot_rank_chg": 18,
    "stock_cnt": 5850,
    "price": "12.93",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "9578254300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "资产重组",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -2.03
      },
      {
        "name": "光通信",
        "change_pct": -0.66
      },
      {
        "name": "京津冀",
        "change_pct": -1.13
      },
      {
        "name": "土地流转",
        "change_pct": -0.56
      },
      {
        "name": "北京城市规划",
        "change_pct": -1.94
      },
      {
        "name": "物业管理",
        "change_pct": -2.29
      },
      {
        "name": "国企改革",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 93,
    "hot_rank_chg": 8,
    "stock_cnt": 5850,
    "price": "12.32",
    "change": "-2.84",
    "market_id": "33",
    "circulate_market_value": "8437997600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.79
      },
      {
        "name": "核电",
        "change_pct": -1.47
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "充电桩",
        "change_pct": -0.77
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.53
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.31
      },
      {
        "name": "储能",
        "change_pct": -0.91
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.0
      },
      {
        "name": "智能电网",
        "change_pct": -0.92
      },
      {
        "name": "核聚变",
        "change_pct": -1.62
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 94,
    "hot_rank_chg": -11,
    "stock_cnt": 5850,
    "price": "4.57",
    "change": "-3.18",
    "market_id": "17",
    "circulate_market_value": "14936762000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -2.03
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "养老产业",
        "change_pct": -0.33
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.06
      },
      {
        "name": "民营医院",
        "change_pct": 0.41
      },
      {
        "name": "地摊经济",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "000692",
    "name": "惠天热电",
    "hot_rank": 98,
    "hot_rank_chg": 30,
    "stock_cnt": 5850,
    "price": "4.88",
    "change": "9.91",
    "market_id": "33",
    "circulate_market_value": "2600224900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "供热工程",
    "xgb_concepts": [
      {
        "name": "振兴东北",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 99,
    "hot_rank_chg": -8,
    "stock_cnt": 5850,
    "price": "3.57",
    "change": "-7.99",
    "market_id": "33",
    "circulate_market_value": "7152056600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -0.67
      },
      {
        "name": "数字孪生",
        "change_pct": -0.69
      },
      {
        "name": "深圳本地股",
        "change_pct": -1.35
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "人工智能",
        "change_pct": -0.97
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.35
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.53
      },
      {
        "name": "高铁轨交",
        "change_pct": -1.42
      },
      {
        "name": "人脸识别",
        "change_pct": -1.44
      },
      {
        "name": "智慧停车",
        "change_pct": -0.7
      },
      {
        "name": "物联网",
        "change_pct": -1.11
      },
      {
        "name": "大数据",
        "change_pct": -1.05
      },
      {
        "name": "智慧城市",
        "change_pct": -1.19
      },
      {
        "name": "雄安新区",
        "change_pct": -1.33
      },
      {
        "name": "机器人",
        "change_pct": -1.36
      },
      {
        "name": "数字经济",
        "change_pct": -1.02
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.0
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.46
      },
      {
        "name": "建筑节能",
        "change_pct": -1.77
      },
      {
        "name": "旧改",
        "change_pct": -1.3
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.93
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.04
      },
      {
        "name": "华为产业链",
        "change_pct": -1.1
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 0.18
      },
      {
        "name": "区块链",
        "change_pct": -1.46
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 100,
    "hot_rank_chg": -4,
    "stock_cnt": 5850,
    "price": "7.10",
    "change": "-6.46",
    "market_id": "17",
    "circulate_market_value": "8085176800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.22
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "光伏",
        "change_pct": -1.83
      },
      {
        "name": "特高压",
        "change_pct": -0.63
      },
      {
        "name": "智能电网",
        "change_pct": -0.92
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600667", "name": "太极实业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "23.78", "change": "4.71", "market_id": "17", "circulate_market_value": "49736873000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "39.60", "change": "7.03", "market_id": "33", "circulate_market_value": "113258878000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "6.92", "change": "10.02", "market_id": "17", "circulate_market_value": "85780937000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超超临界火电", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.22}, {"name": "核电", "change_pct": -1.47}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "电力体制改革", "change_pct": 0.41}, {"name": "水电", "change_pct": 0.96}, {"name": "火电", "change_pct": 0.97}, {"name": "光伏", "change_pct": -1.83}, {"name": "风电", "change_pct": -1.21}, {"name": "国企改革", "change_pct": -1.12}, {"name": "算电协同", "change_pct": 0.56}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "18.73", "change": "9.02", "market_id": "17", "circulate_market_value": "27583799000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "52.88", "change": "-1.20", "market_id": "17", "circulate_market_value": "238120700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "62.02", "change": "-6.75", "market_id": "33", "circulate_market_value": "71757931000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "14.50", "change": "3.35", "market_id": "17", "circulate_market_value": "5575940700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "38.97", "change": "4.20", "market_id": "33", "circulate_market_value": "42039563000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "5.56", "change": "0.72", "market_id": "33", "circulate_market_value": "32552679000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.94}, {"name": "人工智能", "change_pct": -0.97}, {"name": "水利", "change_pct": -1.35}, {"name": "直播/短视频", "change_pct": -1.48}, {"name": "大数据", "change_pct": -1.05}, {"name": "园林", "change_pct": -2.19}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.34}, {"name": "数字经济", "change_pct": -1.02}, {"name": "腾讯概念股", "change_pct": -0.46}, {"name": "理想汽车概念股", "change_pct": -1.06}, {"name": "第三代半导体", "change_pct": -1.36}, {"name": "快手概念股", "change_pct": -1.14}, {"name": "IGBT", "change_pct": -0.85}, {"name": "虚拟数字人", "change_pct": -1.51}, {"name": "AIGC概念", "change_pct": -1.19}, {"name": "字节跳动概念股", "change_pct": -0.89}, {"name": "氮化镓", "change_pct": -1.1}, {"name": "AI营销", "change_pct": -1.5}, {"name": "多模态", "change_pct": -1.04}, {"name": "液冷服务器", "change_pct": -0.43}, {"name": "小红书概念股", "change_pct": -1.04}, {"name": "区块链", "change_pct": -1.46}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 10, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "8.86", "change": "0.57", "market_id": "17", "circulate_market_value": "22313998000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.09}, {"name": "工业大麻", "change_pct": -0.13}, {"name": "中药", "change_pct": 1.54}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "保健品", "change_pct": 0.23}, {"name": "民营医院", "change_pct": 0.41}, {"name": "医药", "change_pct": 1.46}, {"name": "化学原料药", "change_pct": 0.79}, {"name": "流感", "change_pct": 0.88}, {"name": "振兴东北", "change_pct": -0.17}, {"name": "食品", "change_pct": -0.19}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 11, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "33.43", "change": "10.00", "market_id": "17", "circulate_market_value": "13405430000.00", "change_type": "1", "change_section": "13", "change_days": "9", "change_reason": "乳业"}, {"code": "603629", "name": "利通电子", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "125.00", "change": "4.72", "market_id": "17", "circulate_market_value": "45090425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 13, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "404.50", "change": "-2.10", "market_id": "17", "circulate_market_value": "270404990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 14, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "15.27", "change": "-1.23", "market_id": "33", "circulate_market_value": "14251821000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 15, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "4.81", "change": "10.07", "market_id": "33", "circulate_market_value": "12718810600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "洁净室", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.77}, {"name": "装修装饰", "change_pct": -1.28}, {"name": "装配式建筑", "change_pct": -1.09}, {"name": "破净股", "change_pct": -1.06}, {"name": "航天", "change_pct": -1.39}, {"name": "旧改", "change_pct": -1.3}]}, {"code": "002792", "name": "通宇通讯", "hot_rank": 16, "hot_rank_chg": 12, "stock_cnt": 5850, "price": "38.63", "change": "4.10", "market_id": "33", "circulate_market_value": "13050159700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 17, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "79.46", "change": "5.92", "market_id": "33", "circulate_market_value": "116554455000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 18, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "77.82", "change": "-0.46", "market_id": "17", "circulate_market_value": "139252240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 19, "hot_rank_chg": 12, "stock_cnt": 5850, "price": "4.25", "change": "10.10", "market_id": "33", "circulate_market_value": "8925653900.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 1.54}, {"name": "维生素", "change_pct": -1.0}, {"name": "基因测序", "change_pct": 1.98}, {"name": "民营医院", "change_pct": 0.41}, {"name": "医药", "change_pct": 1.46}, {"name": "化学原料药", "change_pct": 0.79}, {"name": "PD-1抑制剂", "change_pct": 2.02}]}, {"code": "603259", "name": "药明康德", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "162.33", "change": "2.07", "market_id": "17", "circulate_market_value": "401487580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 21, "hot_rank_chg": -4, "stock_cnt": 5850, "price": "32.38", "change": "9.99", "market_id": "33", "circulate_market_value": "24525101000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CPO"}, {"code": "002580", "name": "圣阳股份", "hot_rank": 22, "hot_rank_chg": 5, "stock_cnt": 5850, "price": "22.10", "change": "4.10", "market_id": "33", "circulate_market_value": "9996687500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 23, "hot_rank_chg": 9, "stock_cnt": 5850, "price": "11.62", "change": "-9.99", "market_id": "33", "circulate_market_value": "3305676300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -0.77}, {"name": "ST摘帽", "change_pct": -1.17}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "教育", "change_pct": -1.47}, {"name": "阿里巴巴概念股", "change_pct": -1.0}, {"name": "职业教育", "change_pct": -1.81}, {"name": "在线教育", "change_pct": -2.26}, {"name": "华为鸿蒙", "change_pct": -1.3}, {"name": "华为产业链", "change_pct": -1.1}, {"name": "智谱AI", "change_pct": -1.81}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 24, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "57.25", "change": "-3.46", "market_id": "17", "circulate_market_value": "140471250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600881", "name": "亚泰集团", "hot_rank": 25, "hot_rank_chg": 18, "stock_cnt": 5850, "price": "2.27", "change": "10.19", "market_id": "17", "circulate_market_value": "7336982700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.66}, {"name": "中药", "change_pct": 1.54}, {"name": "创新药", "change_pct": 2.24}, {"name": "股权转让", "change_pct": -1.05}, {"name": "水泥", "change_pct": -1.6}, {"name": "保健品", "change_pct": 0.23}, {"name": "医药", "change_pct": 1.46}, {"name": "疫苗", "change_pct": 1.12}, {"name": "振兴东北", "change_pct": -0.17}, {"name": "食品", "change_pct": -0.19}, {"name": "物业管理", "change_pct": -2.29}, {"name": "低价股", "change_pct": -1.49}, {"name": "国企改革", "change_pct": -1.12}]}, {"code": "001309", "name": "德明利", "hot_rank": 26, "hot_rank_chg": 18, "stock_cnt": 5850, "price": "396.53", "change": "-2.71", "market_id": "33", "circulate_market_value": "65438971000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 27, "hot_rank_chg": -4, "stock_cnt": 5850, "price": "100.21", "change": "-5.44", "market_id": "33", "circulate_market_value": "65440700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002229", "name": "鸿博股份", "hot_rank": 28, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "13.65", "change": "5.73", "market_id": "33", "circulate_market_value": "6731581600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 29, "hot_rank_chg": -5, "stock_cnt": 5850, "price": "921.04", "change": "0.00", "market_id": "33", "circulate_market_value": "1022298930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 30, "hot_rank_chg": -11, "stock_cnt": 5850, "price": "18.94", "change": "0.53", "market_id": "33", "circulate_market_value": "22282320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000802", "name": "北京文化", "hot_rank": 31, "hot_rank_chg": 8, "stock_cnt": 5850, "price": "6.26", "change": "10.02", "market_id": "33", "circulate_market_value": "4479305500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "《欢迎来龙餐馆》上映", "xgb_concepts": [{"name": "影视", "change_pct": -1.86}, {"name": "旅游", "change_pct": -1.16}, {"name": "IP经济/谷子经济", "change_pct": -1.37}]}, {"code": "002384", "name": "东山精密", "hot_rank": 32, "hot_rank_chg": -11, "stock_cnt": 5850, "price": "202.11", "change": "0.96", "market_id": "33", "circulate_market_value": "280189480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600821", "name": "金开新能", "hot_rank": 33, "hot_rank_chg": 24, "stock_cnt": 5850, "price": "7.15", "change": "10.00", "market_id": "17", "circulate_market_value": "14066373000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算电协同", "xgb_concepts": [{"name": "股权转让", "change_pct": -1.05}, {"name": "天津国企改革", "change_pct": 0.06}, {"name": "京津冀", "change_pct": -1.13}, {"name": "光伏", "change_pct": -1.83}, {"name": "风电", "change_pct": -1.21}, {"name": "储能", "change_pct": -0.91}, {"name": "东数西算/算力", "change_pct": -0.45}, {"name": "国企改革", "change_pct": -1.12}, {"name": "算电协同", "change_pct": 0.56}]}, {"code": "002185", "name": "华天科技", "hot_rank": 34, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "17.88", "change": "-2.29", "market_id": "33", "circulate_market_value": "59409013000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600726", "name": "华电能源", "hot_rank": 35, "hot_rank_chg": 16, "stock_cnt": 5850, "price": "6.80", "change": "10.03", "market_id": "17", "circulate_market_value": "50832286000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "热电联产", "xgb_concepts": [{"name": "煤炭", "change_pct": -1.14}, {"name": "央企改革", "change_pct": -1.22}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "电力体制改革", "change_pct": 0.41}, {"name": "火电", "change_pct": 0.97}, {"name": "振兴东北", "change_pct": -0.17}, {"name": "国企改革", "change_pct": -1.12}]}, {"code": "301520", "name": "万邦医药", "hot_rank": 36, "hot_rank_chg": -7, "stock_cnt": 5850, "price": "88.68", "change": "20.00", "market_id": "33", "circulate_market_value": "2899697900.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "创新药"}, {"code": "000725", "name": "京东方A", "hot_rank": 37, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "5.86", "change": "-1.18", "market_id": "33", "circulate_market_value": "207251410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.89}, {"name": "手机产业链", "change_pct": -1.63}, {"name": "超高清视频", "change_pct": -1.38}, {"name": "苹果产业链", "change_pct": -1.29}, {"name": "电竞", "change_pct": -1.18}, {"name": "半导体", "change_pct": -1.81}, {"name": "人工智能", "change_pct": -0.97}, {"name": "互联网医疗", "change_pct": 0.35}, {"name": "VR&AR", "change_pct": -1.35}, {"name": "OLED", "change_pct": -1.39}, {"name": "京津冀", "change_pct": -1.13}, {"name": "物联网", "change_pct": -1.11}, {"name": "指纹识别", "change_pct": -2.04}, {"name": "汽车零部件", "change_pct": -1.27}, {"name": "白马股", "change_pct": -0.82}, {"name": "智能制造", "change_pct": -1.35}, {"name": "小米概念股", "change_pct": -1.34}, {"name": "国产芯片", "change_pct": -1.51}, {"name": "液晶面板/LCD", "change_pct": -1.66}, {"name": "全息概念", "change_pct": -1.22}, {"name": "理想汽车概念股", "change_pct": -1.06}, {"name": "MicroLED", "change_pct": -1.48}, {"name": "钙钛矿电池", "change_pct": -2.21}, {"name": "智能手表", "change_pct": -1.13}, {"name": "MiniLED", "change_pct": -1.77}, {"name": "传感器", "change_pct": -1.72}, {"name": "大硅片", "change_pct": -2.36}, {"name": "AI PC", "change_pct": -0.24}, {"name": "华为产业链", "change_pct": -1.1}, {"name": "回购", "change_pct": -0.77}, {"name": "光电共封装CPO", "change_pct": 0.31}, {"name": "智能眼镜/MR头显", "change_pct": -0.9}, {"name": "玻璃基板封装", "change_pct": -1.76}]}, {"code": "600578", "name": "京能电力", "hot_rank": 38, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "6.59", "change": "9.83", "market_id": "17", "circulate_market_value": "44117552000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": -1.18}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "电力体制改革", "change_pct": 0.41}, {"name": "京津冀", "change_pct": -1.13}, {"name": "火电", "change_pct": 0.97}, {"name": "风电", "change_pct": -1.21}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 39, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "41.90", "change": "-3.26", "market_id": "17", "circulate_market_value": "166409500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 40, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "50.21", "change": "-5.17", "market_id": "17", "circulate_market_value": "42505443000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 41, "hot_rank_chg": 11, "stock_cnt": 5850, "price": "89.63", "change": "3.71", "market_id": "17", "circulate_market_value": "131133561000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 42, "hot_rank_chg": -17, "stock_cnt": 5850, "price": "10.93", "change": "-4.54", "market_id": "17", "circulate_market_value": "19555282000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.71}, {"name": "纯碱", "change_pct": -2.13}, {"name": "食品", "change_pct": -0.19}, {"name": "土壤修复", "change_pct": -1.28}, {"name": "东数西算/算力", "change_pct": -0.45}, {"name": "OpenClaw概念", "change_pct": -1.49}, {"name": "DeepSeek概念股", "change_pct": -1.2}]}, {"code": "603118", "name": "共进股份", "hot_rank": 43, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "15.96", "change": "9.99", "market_id": "17", "circulate_market_value": "12564931400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "000815", "name": "美利云", "hot_rank": 44, "hot_rank_chg": -10, "stock_cnt": 5850, "price": "18.36", "change": "-1.98", "market_id": "33", "circulate_market_value": "12765029300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 45, "hot_rank_chg": 9, "stock_cnt": 5850, "price": "13.72", "change": "10.02", "market_id": "17", "circulate_market_value": "8161046900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "具身智能"}, {"code": "002329", "name": "皇氏集团", "hot_rank": 46, "hot_rank_chg": 10, "stock_cnt": 5850, "price": "4.62", "change": "10.00", "market_id": "33", "circulate_market_value": "3010359300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "乳业", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.09}, {"name": "乳业（奶粉）", "change_pct": 1.06}, {"name": "股权转让", "change_pct": -1.05}, {"name": "一带一路", "change_pct": -1.22}, {"name": "优化生育（三孩）", "change_pct": -0.42}, {"name": "智慧城市", "change_pct": -1.19}, {"name": "食品", "change_pct": -0.19}, {"name": "基因编辑", "change_pct": 2.56}, {"name": "社区团购", "change_pct": -0.35}, {"name": "大农业", "change_pct": -1.18}, {"name": "5G消息/RCS", "change_pct": -1.37}, {"name": "广西概念", "change_pct": -0.79}, {"name": "饮料", "change_pct": 0.03}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 47, "hot_rank_chg": -17, "stock_cnt": 5850, "price": "15.25", "change": "-4.03", "market_id": "33", "circulate_market_value": "53038437000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 48, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "143.30", "change": "13.52", "market_id": "33", "circulate_market_value": "159584090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 49, "hot_rank_chg": -16, "stock_cnt": 5850, "price": "40.76", "change": "-1.09", "market_id": "17", "circulate_market_value": "59590908000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 50, "hot_rank_chg": 18, "stock_cnt": 5850, "price": "129.44", "change": "1.16", "market_id": "17", "circulate_market_value": "258823380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 51, "hot_rank_chg": 19, "stock_cnt": 5850, "price": "397.00", "change": "-4.18", "market_id": "33", "circulate_market_value": "111895201000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 52, "hot_rank_chg": 21, "stock_cnt": 5850, "price": "55.10", "change": "-10.00", "market_id": "33", "circulate_market_value": "15207538000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 53, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "12.52", "change": "5.57", "market_id": "17", "circulate_market_value": "8517602300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -1.33}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "雄安新区", "change_pct": -1.33}, {"name": "煤化工", "change_pct": -1.49}]}, {"code": "603887", "name": "城地香江", "hot_rank": 54, "hot_rank_chg": 9, "stock_cnt": 5850, "price": "12.49", "change": "10.04", "market_id": "17", "circulate_market_value": "7519347500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "IDC全产业链", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": -0.53}, {"name": "阿里巴巴概念股", "change_pct": -1.0}, {"name": "腾讯概念股", "change_pct": -0.46}, {"name": "东数西算/算力", "change_pct": -0.45}, {"name": "国资入股", "change_pct": -0.84}, {"name": "华为产业链", "change_pct": -1.1}]}, {"code": "000887", "name": "中鼎股份", "hot_rank": 55, "hot_rank_chg": 19, "stock_cnt": 5850, "price": "23.69", "change": "9.98", "market_id": "33", "circulate_market_value": "31137440000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "腾讯云合作"}, {"code": "002354", "name": "天娱数科", "hot_rank": 56, "hot_rank_chg": -15, "stock_cnt": 5850, "price": "8.35", "change": "-2.11", "market_id": "33", "circulate_market_value": "13574543000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.09}, {"name": "电竞", "change_pct": -1.18}, {"name": "手游", "change_pct": -1.39}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "人工智能", "change_pct": -0.97}, {"name": "游戏", "change_pct": -1.48}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.02}, {"name": "腾讯概念股", "change_pct": -0.46}, {"name": "快手概念股", "change_pct": -1.14}, {"name": "元宇宙", "change_pct": -1.71}, {"name": "虚拟数字人", "change_pct": -1.51}, {"name": "东数西算/算力", "change_pct": -0.45}, {"name": "web3.0", "change_pct": -2.26}, {"name": "AIGC概念", "change_pct": -1.19}, {"name": "数据要素", "change_pct": -1.2}, {"name": "字节跳动概念股", "change_pct": -0.89}, {"name": "AI营销", "change_pct": -1.5}, {"name": "ChatGPT", "change_pct": -1.1}, {"name": "智能眼镜/MR头显", "change_pct": -0.9}, {"name": "人工智能大模型", "change_pct": -1.06}, {"name": "人形机器人", "change_pct": -1.49}, {"name": "短剧/互动影游", "change_pct": -1.65}, {"name": "多模态", "change_pct": -1.04}, {"name": "AI视频", "change_pct": -1.25}, {"name": "IP经济/谷子经济", "change_pct": -1.37}, {"name": "小红书概念股", "change_pct": -1.04}]}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 57, "hot_rank_chg": -4, "stock_cnt": 5850, "price": "58.66", "change": "-2.35", "market_id": "33", "circulate_market_value": "21616403000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 58, "hot_rank_chg": -20, "stock_cnt": 5850, "price": "32.57", "change": "-2.28", "market_id": "17", "circulate_market_value": "10973482800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 59, "hot_rank_chg": -23, "stock_cnt": 5850, "price": "257.16", "change": "7.13", "market_id": "33", "circulate_market_value": "279889870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000779", "name": "甘咨询", "hot_rank": 60, "hot_rank_chg": -11, "stock_cnt": 5850, "price": "10.73", "change": "-9.98", "market_id": "33", "circulate_market_value": "4987014300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.22}, {"name": "云计算数据中心", "change_pct": -0.53}, {"name": "水利", "change_pct": -1.35}, {"name": "大数据", "change_pct": -1.05}, {"name": "海绵城市", "change_pct": -1.66}, {"name": "风电", "change_pct": -1.21}, {"name": "乡村振兴", "change_pct": -1.39}, {"name": "数字经济", "change_pct": -1.02}, {"name": "大基建", "change_pct": -1.29}, {"name": "东数西算/算力", "change_pct": -0.45}, {"name": "新型城镇化", "change_pct": -1.33}, {"name": "国企改革", "change_pct": -1.12}, {"name": "旧改", "change_pct": -1.3}, {"name": "西部大开发", "change_pct": -2.34}, {"name": "低空经济", "change_pct": -1.29}, {"name": "房屋检测", "change_pct": -1.6}]}, {"code": "000021", "name": "深科技", "hot_rank": 61, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "39.55", "change": "-1.98", "market_id": "33", "circulate_market_value": "62257853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603758", "name": "秦安股份", "hot_rank": 62, "hot_rank_chg": 19, "stock_cnt": 5850, "price": "15.35", "change": "10.04", "market_id": "17", "circulate_market_value": "6648331400.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "小盘股"}, {"code": "300684", "name": "中石科技", "hot_rank": 63, "hot_rank_chg": 29, "stock_cnt": 5850, "price": "56.13", "change": "8.23", "market_id": "33", "circulate_market_value": "11482804700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002400", "name": "省广集团", "hot_rank": 64, "hot_rank_chg": -9, "stock_cnt": 5850, "price": "7.95", "change": "8.46", "market_id": "33", "circulate_market_value": "13723009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.09}, {"name": "人工智能", "change_pct": -0.97}, {"name": "云计算数据中心", "change_pct": -0.53}, {"name": "大数据", "change_pct": -1.05}, {"name": "百度概念股", "change_pct": -1.17}, {"name": "腾讯概念股", "change_pct": -0.46}, {"name": "传媒", "change_pct": -0.82}, {"name": "快手概念股", "change_pct": -1.14}, {"name": "字节跳动概念股", "change_pct": -0.89}, {"name": "国企改革", "change_pct": -1.12}, {"name": "横琴新区", "change_pct": -1.29}, {"name": "网红/MCN", "change_pct": -1.1}, {"name": "5G消息/RCS", "change_pct": -1.37}, {"name": "AI营销", "change_pct": -1.5}, {"name": "短剧/互动影游", "change_pct": -1.65}, {"name": "小红书概念股", "change_pct": -1.04}, {"name": "区块链", "change_pct": -1.46}]}, {"code": "002484", "name": "江海股份", "hot_rank": 65, "hot_rank_chg": 23, "stock_cnt": 5850, "price": "66.61", "change": "2.12", "market_id": "33", "circulate_market_value": "54651658000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 66, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "32.21", "change": "-4.08", "market_id": "17", "circulate_market_value": "663583760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 67, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "65.23", "change": "-0.56", "market_id": "17", "circulate_market_value": "1294430140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000593", "name": "德龙汇能", "hot_rank": 68, "hot_rank_chg": 8, "stock_cnt": 5850, "price": "27.80", "change": "10.01", "market_id": "33", "circulate_market_value": "9965832100.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "牛散举牌"}, {"code": "002031", "name": "巨轮智能", "hot_rank": 69, "hot_rank_chg": -23, "stock_cnt": 5850, "price": "6.27", "change": "-2.34", "market_id": "33", "circulate_market_value": "13790164000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": -1.65}, {"name": "轮胎", "change_pct": -1.54}, {"name": "冷链", "change_pct": -1.41}, {"name": "机器人", "change_pct": -1.36}, {"name": "智能制造", "change_pct": -1.35}, {"name": "工业母机", "change_pct": -2.01}, {"name": "减速器", "change_pct": -1.41}, {"name": "头盔", "change_pct": -1.79}, {"name": "人形机器人", "change_pct": -1.49}]}, {"code": "600744", "name": "华银电力", "hot_rank": 70, "hot_rank_chg": 9, "stock_cnt": 5850, "price": "7.80", "change": "3.72", "market_id": "17", "circulate_market_value": "15842769000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.22}, {"name": "电力体制改革", "change_pct": 0.41}, {"name": "火电", "change_pct": 0.97}, {"name": "风电", "change_pct": -1.21}, {"name": "储能", "change_pct": -0.91}, {"name": "碳中和", "change_pct": -1.18}, {"name": "国企改革", "change_pct": -1.12}]}, {"code": "002585", "name": "双星新材", "hot_rank": 71, "hot_rank_chg": -24, "stock_cnt": 5850, "price": "11.30", "change": "1.80", "market_id": "33", "circulate_market_value": "10020351100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -1.68}, {"name": "手机产业链", "change_pct": -1.63}, {"name": "超高清视频", "change_pct": -1.38}, {"name": "锂电池", "change_pct": -1.55}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "OLED", "change_pct": -1.39}, {"name": "包装印刷", "change_pct": -1.47}, {"name": "光伏", "change_pct": -1.83}, {"name": "新能源汽车", "change_pct": -1.31}, {"name": "小米概念股", "change_pct": -1.34}, {"name": "液晶面板/LCD", "change_pct": -1.66}, {"name": "可降解塑料", "change_pct": -1.19}, {"name": "华为产业链", "change_pct": -1.1}, {"name": "PET复合铜箔", "change_pct": -1.63}]}, {"code": "603191", "name": "望变电气", "hot_rank": 72, "hot_rank_chg": 43, "stock_cnt": 5850, "price": "16.94", "change": "10.00", "market_id": "17", "circulate_market_value": "5589601000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "定增获批"}, {"code": "605286", "name": "同力天启", "hot_rank": 73, "hot_rank_chg": 26, "stock_cnt": 5850, "price": "34.09", "change": "10.00", "market_id": "17", "circulate_market_value": "5727120000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "算电协同"}, {"code": "002172", "name": "澳洋健康", "hot_rank": 74, "hot_rank_chg": 33, "stock_cnt": 5850, "price": "4.13", "change": "10.13", "market_id": "33", "circulate_market_value": "3160031200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": 1.54}, {"name": "股权转让", "change_pct": -1.05}, {"name": "优化生育（三孩）", "change_pct": -0.42}, {"name": "医药商业", "change_pct": 0.74}, {"name": "保健品", "change_pct": 0.23}, {"name": "民营医院", "change_pct": 0.41}, {"name": "医药", "change_pct": 1.46}, {"name": "食品", "change_pct": -0.19}, {"name": "辅助生殖", "change_pct": 0.62}, {"name": "口腔", "change_pct": -0.52}, {"name": "医美", "change_pct": 0.27}, {"name": "新冠病毒防治", "change_pct": 0.04}]}, {"code": "600522", "name": "中天科技", "hot_rank": 75, "hot_rank_chg": -17, "stock_cnt": 5850, "price": "32.90", "change": "-1.94", "market_id": "17", "circulate_market_value": "112286044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300534", "name": "陇神戎发", "hot_rank": 76, "hot_rank_chg": -14, "stock_cnt": 5850, "price": "18.92", "change": "19.98", "market_id": "33", "circulate_market_value": "5714814200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中药"}, {"code": "000936", "name": "华西股份", "hot_rank": 77, "hot_rank_chg": 29, "stock_cnt": 5850, "price": "6.34", "change": "10.07", "market_id": "33", "circulate_market_value": "5616525700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "间接参股光芯片", "xgb_concepts": [{"name": "半导体", "change_pct": -1.81}, {"name": "共享经济", "change_pct": -1.02}, {"name": "人工智能", "change_pct": -0.97}, {"name": "光通信", "change_pct": -0.66}, {"name": "涤纶", "change_pct": -1.2}, {"name": "江苏国企改革", "change_pct": -0.54}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产芯片", "change_pct": -1.51}, {"name": "国企改革", "change_pct": -1.12}, {"name": "光电共封装CPO", "change_pct": 0.31}]}, {"code": "603890", "name": "春秋电子", "hot_rank": 78, "hot_rank_chg": 19, "stock_cnt": 5850, "price": "20.45", "change": "10.01", "market_id": "17", "circulate_market_value": "9137707500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "客户联想集团"}, {"code": "002015", "name": "协鑫能科", "hot_rank": 79, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "16.44", "change": "6.89", "market_id": "33", "circulate_market_value": "26687457000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 80, "hot_rank_chg": -14, "stock_cnt": 5850, "price": "141.74", "change": "-1.04", "market_id": "17", "circulate_market_value": "341841280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 81, "hot_rank_chg": -10, "stock_cnt": 5850, "price": "10.23", "change": "-5.10", "market_id": "33", "circulate_market_value": "21298879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -1.86}, {"name": "足球", "change_pct": -1.41}, {"name": "阿里巴巴概念股", "change_pct": -1.0}, {"name": "拼多多概念股", "change_pct": -1.26}, {"name": "网红/MCN", "change_pct": -1.1}, {"name": "大消费", "change_pct": -0.76}, {"name": "盲盒", "change_pct": -1.42}, {"name": "短剧/互动影游", "change_pct": -1.65}, {"name": "IP经济/谷子经济", "change_pct": -1.37}, {"name": "首发经济", "change_pct": -1.47}, {"name": "小红书概念股", "change_pct": -1.04}, {"name": "服务消费", "change_pct": -1.66}]}, {"code": "002219", "name": "新里程", "hot_rank": 82, "hot_rank_chg": 22, "stock_cnt": 5850, "price": "2.50", "change": "10.13", "market_id": "33", "circulate_market_value": "8179678600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 1.54}, {"name": "互联网医疗", "change_pct": 0.35}, {"name": "养老产业", "change_pct": -0.33}, {"name": "民营医院", "change_pct": 0.41}, {"name": "医药", "change_pct": 1.46}, {"name": "低价股", "change_pct": -1.49}, {"name": "医疗信息化", "change_pct": -0.93}, {"name": "AI医疗", "change_pct": 1.14}]}, {"code": "600602", "name": "云赛智联", "hot_rank": 83, "hot_rank_chg": -16, "stock_cnt": 5850, "price": "19.36", "change": "-4.39", "market_id": "17", "circulate_market_value": "20798506000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 84, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "151.68", "change": "-1.82", "market_id": "17", "circulate_market_value": "133437067000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 85, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "169.00", "change": "5.82", "market_id": "17", "circulate_market_value": "46574435000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 86, "hot_rank_chg": -27, "stock_cnt": 5850, "price": "66.70", "change": "-5.30", "market_id": "33", "circulate_market_value": "96945249000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 87, "hot_rank_chg": -10, "stock_cnt": 5850, "price": "62.22", "change": "-1.02", "market_id": "33", "circulate_market_value": "94415877000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 88, "hot_rank_chg": -10, "stock_cnt": 5850, "price": "35.08", "change": "-1.43", "market_id": "33", "circulate_market_value": "141288950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603989", "name": "艾华集团", "hot_rank": 89, "hot_rank_chg": 25, "stock_cnt": 5850, "price": "29.99", "change": "1.59", "market_id": "17", "circulate_market_value": "11959408000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600683", "name": "京投发展", "hot_rank": 90, "hot_rank_chg": 18, "stock_cnt": 5850, "price": "12.93", "change": "10.04", "market_id": "17", "circulate_market_value": "9578254300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "资产重组", "xgb_concepts": [{"name": "房地产", "change_pct": -2.03}, {"name": "光通信", "change_pct": -0.66}, {"name": "京津冀", "change_pct": -1.13}, {"name": "土地流转", "change_pct": -0.56}, {"name": "北京城市规划", "change_pct": -1.94}, {"name": "物业管理", "change_pct": -2.29}, {"name": "国企改革", "change_pct": -1.12}]}, {"code": "603228", "name": "景旺电子", "hot_rank": 92, "hot_rank_chg": -23, "stock_cnt": 5850, "price": "97.20", "change": "-1.03", "market_id": "17", "circulate_market_value": "95441994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 93, "hot_rank_chg": 8, "stock_cnt": 5850, "price": "12.32", "change": "-2.84", "market_id": "33", "circulate_market_value": "8437997600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.79}, {"name": "核电", "change_pct": -1.47}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "充电桩", "change_pct": -0.77}, {"name": "云计算数据中心", "change_pct": -0.53}, {"name": "新能源汽车", "change_pct": -1.31}, {"name": "储能", "change_pct": -0.91}, {"name": "阿里巴巴概念股", "change_pct": -1.0}, {"name": "智能电网", "change_pct": -0.92}, {"name": "核聚变", "change_pct": -1.62}]}, {"code": "600162", "name": "香江控股", "hot_rank": 94, "hot_rank_chg": -11, "stock_cnt": 5850, "price": "4.57", "change": "-3.18", "market_id": "17", "circulate_market_value": "14936762000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -2.03}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "养老产业", "change_pct": -0.33}, {"name": "粤港澳大湾区", "change_pct": -1.06}, {"name": "民营医院", "change_pct": 0.41}, {"name": "地摊经济", "change_pct": -1.11}]}, {"code": "002149", "name": "西部材料", "hot_rank": 95, "hot_rank_chg": 48, "stock_cnt": 5850, "price": "42.82", "change": "5.31", "market_id": "33", "circulate_market_value": "20902124000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 96, "hot_rank_chg": -12, "stock_cnt": 5850, "price": "15.12", "change": "1.61", "market_id": "33", "circulate_market_value": "48770918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300862", "name": "蓝盾光电", "hot_rank": 97, "hot_rank_chg": 16, "stock_cnt": 5850, "price": "39.41", "change": "20.01", "market_id": "33", "circulate_market_value": "5969472400.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "拟收购岚创科技"}, {"code": "000692", "name": "惠天热电", "hot_rank": 98, "hot_rank_chg": 30, "stock_cnt": 5850, "price": "4.88", "change": "9.91", "market_id": "33", "circulate_market_value": "2600224900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "供热工程", "xgb_concepts": [{"name": "振兴东北", "change_pct": -0.17}]}, {"code": "002421", "name": "达实智能", "hot_rank": 99, "hot_rank_chg": -8, "stock_cnt": 5850, "price": "3.57", "change": "-7.99", "market_id": "33", "circulate_market_value": "7152056600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -0.67}, {"name": "数字孪生", "change_pct": -0.69}, {"name": "深圳本地股", "change_pct": -1.35}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "人工智能", "change_pct": -0.97}, {"name": "互联网医疗", "change_pct": 0.35}, {"name": "云计算数据中心", "change_pct": -0.53}, {"name": "高铁轨交", "change_pct": -1.42}, {"name": "人脸识别", "change_pct": -1.44}, {"name": "智慧停车", "change_pct": -0.7}, {"name": "物联网", "change_pct": -1.11}, {"name": "大数据", "change_pct": -1.05}, {"name": "智慧城市", "change_pct": -1.19}, {"name": "雄安新区", "change_pct": -1.33}, {"name": "机器人", "change_pct": -1.36}, {"name": "数字经济", "change_pct": -1.02}, {"name": "阿里巴巴概念股", "change_pct": -1.0}, {"name": "腾讯概念股", "change_pct": -0.46}, {"name": "建筑节能", "change_pct": -1.77}, {"name": "旧改", "change_pct": -1.3}, {"name": "医疗信息化", "change_pct": -0.93}, {"name": "新冠病毒防治", "change_pct": 0.04}, {"name": "华为产业链", "change_pct": -1.1}, {"name": "医疗耗材供应链SPD", "change_pct": 0.18}, {"name": "区块链", "change_pct": -1.46}]}, {"code": "601700", "name": "风范股份", "hot_rank": 100, "hot_rank_chg": -4, "stock_cnt": 5850, "price": "7.10", "change": "-6.46", "market_id": "17", "circulate_market_value": "8085176800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.22}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "光伏", "change_pct": -1.83}, {"name": "特高压", "change_pct": -0.63}, {"name": "智能电网", "change_pct": -0.92}]}];
const LIMIT_UP_POOL = [{"code": "603890", "name": "春秋电子", "price": 20.45, "change_pct": 10.01, "reason": "1、公司是笔记本结构件国内龙头，主要客户包括戴尔、联想；\n2、公司完成对丹麦Asetek全部股权要约收购，整合其数据中心液冷技术，冷板与CDU环节价值量各占1/3，计划以“技术+制造”模式切入爆发式增长的液冷市场", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.74, "first_limit_up": 1786597526, "break_limit_up_times": 1}, {"code": "603758", "name": "秦安股份", "price": 15.35, "change_pct": 10.04, "reason": "公司是新能源汽车发动机及变速器核心零部件供应商，参投墨现科技，后者主营压力传感器、机器人电子皮肤等", "plates": ["机器人"], "limit_up_days": 5, "turnover_ratio": 1.16, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "603998", "name": "方盛制药", "price": 10.77, "change_pct": 10.01, "reason": "公司拟以8000万元受让中国药科大学与中国医学科学院药物研究所持有的化药1类创新药物IMM-H024原料药及制剂项目的专利权，后续将按相关约定节点分期付款。", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.05, "first_limit_up": 1786598823, "break_limit_up_times": 1}, {"code": "688496", "name": "*ST清越", "price": 1.04, "change_pct": 19.54, "reason": "公司的硅基OLED产品可以用于MR头戴显示产品中", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 7.8, "first_limit_up": 1786603146, "break_limit_up_times": 2}, {"code": "600800", "name": "渤海化学", "price": 3.74, "change_pct": 10.0, "reason": "COFs全球首次吨级量产发布会，宝丽迪和渤海化工、耀科创始人等领导上台共同参与启动；渤海化工为公司第一大股东", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.07, "first_limit_up": 1786584700, "break_limit_up_times": 3}, {"code": "603118", "name": "共进股份", "price": 15.96, "change_pct": 9.99, "reason": "1、公司深耕以太网交换机领域多年，产品覆盖园区、SMB 场景及 100G/400G/800G 等规格数据中心交换机，同时布局工业与白盒交换机赛道，作为 Arista Networks 核心代工厂间接供应英伟达、微软等头部客户；\n2、参股孙公司山东华云光电技术有限公司致力于光模块等产品的研发、生产及销售", "plates": ["超节点"], "limit_up_days": 1, "turnover_ratio": 13.89, "first_limit_up": 1786584918, "break_limit_up_times": 4}, {"code": "002921", "name": "联诚精密", "price": 24.63, "change_pct": 10.0, "reason": "公司减速类产品主要应用于工程机械行走马达等，表示现正积极开发机器人零部件产品市场，如机械臂和关节头等相关零件产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.31, "first_limit_up": 1786591269, "break_limit_up_times": 0}, {"code": "600613", "name": "神奇制药", "price": 5.83, "change_pct": 10.0, "reason": "公司拥有中国驰名商标“神奇”品牌，其中枇杷止咳颗粒、强力枇杷露等较为知名", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.87, "first_limit_up": 1786586675, "break_limit_up_times": 0}, {"code": "300534", "name": "陇神戎发", "price": 18.92, "change_pct": 19.97, "reason": "公司主打产品元胡止痛滴丸为国家中药二级保护品种，具有镇痛、镇静、催眠等作用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 34.11, "first_limit_up": 1786589715, "break_limit_up_times": 0}, {"code": "002724", "name": "海洋王", "price": 6.16, "change_pct": 10.0, "reason": "公司是深海特种照明设备供应商，技术延展至水下机器人及探测装备，适配全海深场景‌", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.93, "first_limit_up": 1786600848, "break_limit_up_times": 0}, {"code": "002575", "name": "群兴玩具", "price": 6.08, "change_pct": 9.95, "reason": "公司孙公司图灵引擎科技与腾讯签订了《算力服务协议》，拟向腾讯提供集群算力服务；一季度业绩同比减亏", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.74, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "603330", "name": "天洋新材", "price": 9.71, "change_pct": 9.97, "reason": "公司电子胶板块光模块透镜固定用胶、底填胶等产品已经进入半导体及汽车电子领域小批量供货", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 15.62, "first_limit_up": 1786587277, "break_limit_up_times": 8}, {"code": "001260", "name": "坤泰股份", "price": 21.03, "change_pct": 9.99, "reason": "公司主营业务为汽车内饰件材料，主要产品包括汽车地毯和汽车脚垫两大类", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 3.31, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "301060", "name": "兰卫医学", "price": 11.96, "change_pct": 19.96, "reason": "公司与上海市经济和信息化委员会正式签署任务书，启动《基于病理数字切片标注的单病种智能初筛机器人诊断标准数据集》项目建设，构建病理AI诊断标准基础数据平台，在病理AI方面迈出实质性一步；参股公司志诺维思 (持股 20%)，专注 AI 病理图像判读", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.65, "first_limit_up": 1786597452, "break_limit_up_times": 0}, {"code": "601991", "name": "大唐发电", "price": 6.92, "change_pct": 10.02, "reason": "全资子公司西藏大唐国际怒江水电位于西藏自治区拉萨市，主要业务为水力发电", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 7.24, "first_limit_up": 1786599901, "break_limit_up_times": 0}, {"code": "000006", "name": "深振业Ａ", "price": 7.7, "change_pct": 10.0, "reason": "聚焦粤港澳大湾区房地产开发商", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.88, "first_limit_up": 1786598847, "break_limit_up_times": 0}, {"code": "000936", "name": "华西股份", "price": 6.34, "change_pct": 10.07, "reason": "公司参股熹联光芯微电子、纵慧芯光等公司，标的主营硅光、CPO等业务", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 2.92, "first_limit_up": 1786584600, "break_limit_up_times": 0}, {"code": "000887", "name": "中鼎股份", "price": 23.69, "change_pct": 9.98, "reason": "1、公司与腾讯云签署战略合作协议，在算力集群投建与运营、算力中心液冷业务、采购腾讯云服务、AI应用合作方面展开合作，合作有效期为3年；\n2、公司设立全资子公司安徽睿思博机器人科技有限公司，推动机器人部件产品的生产配套；\n3、子公司中鼎流体及中鼎智能目前已推出系列化储能液冷机组、超算中心浸没式液冷机组、热管理控制器、温压一体传感器、冷媒流道板等产品", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 5.86, "first_limit_up": 1786584600, "break_limit_up_times": 1}, {"code": "603912", "name": "佳力图", "price": 8.89, "change_pct": 10.02, "reason": "公司掌握磁悬浮压缩机在冷水机组产品中的应用技术，为数据中心等领域提供相关的制冷解决方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.71, "first_limit_up": 1786584958, "break_limit_up_times": 1}, {"code": "688137", "name": "近岸蛋白", "price": 64, "change_pct": 20.01, "reason": "国内重组蛋白解决方案专家、领先的mRNA应用服务商；公司整合AlphaFold等AI工具与自研机器学习系统，用于蛋白质设计、改造及表达，推动AI在生命科学领域的应用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.42, "first_limit_up": 1786590997, "break_limit_up_times": 0}, {"code": "603191", "name": "望变电气", "price": 16.94, "change_pct": 10.0, "reason": "公司220 kV及以下变压器订单饱和、储备6个月，产品已获美国德克萨斯州、南美洲、阿曼等地数据中心项目订单", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 11.9, "first_limit_up": 1786599242, "break_limit_up_times": 1}, {"code": "600881", "name": "亚泰集团", "price": 2.27, "change_pct": 10.19, "reason": "吉林长春国资委旗下，主营水泥建材、医药、地产等；公司医药集团所属的亚泰制药、龙鑫药业、东北亚药业、亚泰永安堂药业均以生产中成药品种为主", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 8.89, "first_limit_up": 1786584986, "break_limit_up_times": 1}, {"code": "002081", "name": "金 螳 螂", "price": 4.81, "change_pct": 10.07, "reason": "1、洁净室是公司重点布局的战略新赛道，已具备在电子半导体、新能源、大健康、实验室等高附加值领域构建系统集成能力，代表项目包括南京集成电路产业服务中心、杰华特微电子高性能电源芯片项目等；\n2、综合性专业化装饰集团；公司曾中标海南商业航天发射场项目，目前该工程已完工并投入使用，已为多次卫星发射任务提供稳定保障", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 1.03, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "600683", "name": "京投发展", "price": 12.93, "change_pct": 10.04, "reason": "1、公司拟将房地产开发业务相关资产及负债转让至控股股东北京市基础设施投资有限公司，目前正开展审计、评估等工作；\n2、公司筹划收购西安奇芯光电股权，标的从事光电子器件制造", "plates": ["房地产"], "limit_up_days": 4, "turnover_ratio": 0.25, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "300333", "name": "兆日科技", "price": 10.64, "change_pct": 19.95, "reason": "传统电子支付密码器系统行业龙头，实控人拟变更为曲嘉麟", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 0.94, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "000593", "name": "德龙汇能", "price": 27.8, "change_pct": 10.01, "reason": "公司主营城市管道燃气和零售商业，知名游资刘鑫举牌，持股比例增至5.01%", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 10.25, "first_limit_up": 1786588938, "break_limit_up_times": 0}, {"code": "002396", "name": "星网锐捷", "price": 32.38, "change_pct": 9.99, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["超节点"], "limit_up_days": 1, "turnover_ratio": 14.67, "first_limit_up": 1786588344, "break_limit_up_times": 5}, {"code": "002329", "name": "皇氏集团", "price": 4.62, "change_pct": 10.0, "reason": "国内水牛奶龙头企业，在中国西南片区享有盛名", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 24.27, "first_limit_up": 1786584300, "break_limit_up_times": 5}, {"code": "603466", "name": "风语筑", "price": 13.72, "change_pct": 10.02, "reason": "公司联手宇树科技共同打造杭州市具身智能展示与应用推广中心，深度参与国家级中试基地配套建设", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 24.01, "first_limit_up": 1786585728, "break_limit_up_times": 56}, {"code": "603903", "name": "中持股份", "price": 14.2, "change_pct": 9.99, "reason": "公司控股股东变更为芯长征，其核心业务包括硅基芯片及模组系列、第三代半导体芯片及模组系列（SiC、GaN）及功率器件检测装备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.36, "first_limit_up": 1786597215, "break_limit_up_times": 0}, {"code": "000972", "name": "中基健康", "price": 3.82, "change_pct": 10.09, "reason": "公司主营番茄制品的生产销售，重点开发和推广了高附加值的番茄红素保健品，并着手布局了小罐产品的生产及销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.09, "first_limit_up": 1786585344, "break_limit_up_times": 0}, {"code": "000695", "name": "滨海能源", "price": 14.39, "change_pct": 10.02, "reason": "公司主要从事锂电池负极材料，源网荷储绿电150MW一期项目已于8月1日凌晨实现全线送电，正式进入系统调试与试运行阶段", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 7.72, "first_limit_up": 1786597455, "break_limit_up_times": 0}, {"code": "601026", "name": "道生天合", "price": 16.63, "change_pct": 9.99, "reason": "1、公司是全球风电叶片用材料领域龙头供应商，其风电叶片用环氧树脂、风电叶片用结构胶的产销量行业领先；\n2、公司参股上海道宜半导体8.12%的股份", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 12.05, "first_limit_up": 1786589020, "break_limit_up_times": 1}, {"code": "002437", "name": "誉衡药业", "price": 4.25, "change_pct": 10.1, "reason": "子公司蒲公英主要产品安脑丸为中药领域产品", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 22.99, "first_limit_up": 1786585896, "break_limit_up_times": 1}, {"code": "300862", "name": "蓝盾光电", "price": 39.41, "change_pct": 20.01, "reason": "公司拟购岚创科技控股权，押注光学元件", "plates": ["资产重组"], "limit_up_days": 4, "turnover_ratio": 6.87, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "002706", "name": "良信股份", "price": 9.99, "change_pct": 10.02, "reason": "公司围绕“两智一新”战略推出适配智算中心等场景的高端解决方案，NEA数智盘柜专为AC400V及以下配电系统设计，已广泛应用于数据中心场景，并针对800V HVDC架构进行技术研发及储备", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.49, "first_limit_up": 1786587468, "break_limit_up_times": 1}, {"code": "300404", "name": "博济医药", "price": 14.45, "change_pct": 20.02, "reason": "公司与深圳埃格林医药有限公司签订战略合作协议，未来将利用人工智能（AI）在临床试验领域展开战略合作，共同探索利用AI技术解决临床阶段高不确定性创新靶点的临床研究策略等方面的问题", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 21.43, "first_limit_up": 1786586253, "break_limit_up_times": 0}, {"code": "002322", "name": "理工能科", "price": 11.86, "change_pct": 10.02, "reason": "1、公司是国内电力信创龙头企业，是麒麟软件在电力系统唯一合作伙伴，基于麒麟软件深度开发电力系统国产软件，市占率超过80%，面向政府和企业提供环境智慧监管、物联网智能终端、数字化智能工厂等专业产品和整体解决方案；\n2、全国领先的地表水水质监测设备和运维厂商；公司自主研发的有机物污染土壤热脱附修复技术和重金属污染土壤固化稳定和修复技术，打造高效、精准的土壤治理整体解决方案", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 1.53, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "002543", "name": "万和电气", "price": 7.33, "change_pct": 10.06, "reason": "厨卫电器及热水热能系统整体解决方案供应商；公司产品涉及太阳能、空气源热泵等低碳热源装置", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.04, "first_limit_up": 1786598733, "break_limit_up_times": 1}, {"code": "601886", "name": "江河集团", "price": 11.53, "change_pct": 10.02, "reason": "全球高端幕墙龙头之一", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 4.03, "first_limit_up": 1786587017, "break_limit_up_times": 3}, {"code": "600821", "name": "金开新能", "price": 7.15, "change_pct": 10.0, "reason": "国内风光发电领域重要运营商；新疆哈密智算中心是旗下公司探索绿电结合算力领域打造的大型数据中心，总占地 9,504 平方米，总算力80000P以上", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.0, "first_limit_up": 1786584859, "break_limit_up_times": 0}, {"code": "002219", "name": "新里程", "price": 2.5, "change_pct": 10.13, "reason": "公司布局脑机接口赛道，与北大共建脑机接口联合实验室揭牌", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.56, "first_limit_up": 1786586565, "break_limit_up_times": 0}, {"code": "000692", "name": "惠天热电", "price": 4.88, "change_pct": 9.91, "reason": "沈阳地区规模最大的国有专业化供热公司；沈阳市发改委确定公司为70万千瓦风电项目业主", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 8.55, "first_limit_up": 1786585014, "break_limit_up_times": 0}, {"code": "603261", "name": "立航科技", "price": 57.37, "change_pct": 10.01, "reason": "1、公司参与了核聚变激光点火装置神光III主机装置项目，是该项目片状放大器组件的设计制造单位之一；\n2、我国军机地面保障设备主要供应商，在低空经济相关业务中涉及无人机相关业务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.77, "first_limit_up": 1786586469, "break_limit_up_times": 1}, {"code": "603236", "name": "移远通信", "price": 59.43, "change_pct": 9.99, "reason": "公司机器人方案已落地商业服务、医疗、农业、家用、四足及人形机器人等多个领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.21, "first_limit_up": 1786584301, "break_limit_up_times": 0}, {"code": "300937", "name": "药易购", "price": 31.7, "change_pct": 19.98, "reason": "西南地区领先的医药流通企业，子公司拟1元收购闪送易购65%股权", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 29.43, "first_limit_up": 1786590798, "break_limit_up_times": 0}, {"code": "603956", "name": "威派格", "price": 7.99, "change_pct": 10.06, "reason": "1、公司联合研发的工业四足机器人巡检方案已亮相中国城镇供水排水协会年会，搭载自研水务检测装置，可监测跑冒滴漏、有毒有害气体等九类场景，并已在绥滨县北山水厂项目实现数字孪生及大屏数字人智能体落地；\n2、公司近期发布了面向数据中心液冷领域的WDS、WDM系列立式多级离心泵等新品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.31, "first_limit_up": 1786585229, "break_limit_up_times": 1}, {"code": "603887", "name": "城地香江", "price": 12.49, "change_pct": 10.04, "reason": "1、公司为上海电信客户字节提供定制化数据中心服务，合计实现计费销售18兆瓦；\n2、子公司香江科技主营IDC相关设备和解决方案、IDC系统集成以及IDC运营管理和增值服务业务，与华为签署全面合作协议。\n3、实际控制人将由谢晓东及其一致行动人卢静芳变更为国务院国有资产监督管理委员会", "plates": ["云计算数据中心"], "limit_up_days": 3, "turnover_ratio": 3.03, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "600726", "name": "华电能源", "price": 6.8, "change_pct": 10.03, "reason": "中国华电集团旗下，黑龙江最大发电及集中供热运营商；公司主营发电、供热及煤炭生产销售", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 1.93, "first_limit_up": 1786585084, "break_limit_up_times": 1}, {"code": "688265", "name": "南模生物", "price": 52.42, "change_pct": 20.01, "reason": "基因修饰动物模型产品提供商；为客户提供定制化模型、标准化模型等基因修饰动物模型，以及模型繁育、药效评价及表型分析、饲养服务等相关技术服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.63, "first_limit_up": 1786588525, "break_limit_up_times": 0}, {"code": "002644", "name": "佛慈制药", "price": 8.8, "change_pct": 10.0, "reason": "公司调整主营中成药产品出厂价，平均提价9%", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.03, "first_limit_up": 1786588578, "break_limit_up_times": 1}, {"code": "002172", "name": "澳洋健康", "price": 4.13, "change_pct": 10.13, "reason": "子公司江苏澳洋医药物流有限公司具体经营内容包括中药材配送、销售业务", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 3.05, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "605286", "name": "同力天启", "price": 34.09, "change_pct": 10.0, "reason": "公司此前与天启鸿源一起同甘肃省庆阳市人民政府成功签署战略合作框架协议，项目建成后， 储能电站将为庆阳“东数西算”产业园区的数据中心直供绿色电力，实现“算电协同”，并在保证供电可靠性的前提下，实现部分备用电源的功用，提高算力中心绿电占比，进一步降低算力中心能耗成本", "plates": ["云计算数据中心"], "limit_up_days": 4, "turnover_ratio": 1.36, "first_limit_up": 1786584300, "break_limit_up_times": 0}, {"code": "601999", "name": "出版传媒", "price": 6.74, "change_pct": 9.95, "reason": "辽宁省教材教辅出版企业；公司积极推动数智出版融合发展，应用AI图书数字人，采用“一书一模型”为纸质书配置专属AI助手，提供内容答疑、伴读与知识拓展服务，已在《数学周报》《尖子生题库》等产品落地应用", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 5.55, "first_limit_up": 1786585987, "break_limit_up_times": 2}, {"code": "002174", "name": "游族网络", "price": 13.38, "change_pct": 10.03, "reason": "1、公司与康盈半导体、曦望Sunrise达成合作，将于无锡高新区共同落地“2.5D/3D先进封装中心”，面向算力芯片、存储芯片等领域客户提供量产封装服务；\n2、公司旗下知名游戏产品有《少年三国志》系列、《女神联盟》系列、《盗墓笔记》等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.18, "first_limit_up": 1786584678, "break_limit_up_times": 0}, {"code": "600491", "name": "ST龙元", "price": 1.5, "change_pct": 10.29, "reason": "长三角建筑市场最大的民营施工企业之一，宁波开海投资拟要约收购公司6%股份", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 11.76, "first_limit_up": 1786590304, "break_limit_up_times": 0}, {"code": "601579", "name": "会稽山", "price": 17.45, "change_pct": 10.03, "reason": "国内龙头黄酒供应商；公司在生产黄酒的同时，也利用黄酒生产过程产生的醪糟作为原料，通过蒸馏生产糟烧白酒，并一直有销售糟烧白酒等副产品的传统", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.01, "first_limit_up": 1786586141, "break_limit_up_times": 0}, {"code": "002066", "name": "瑞泰科技", "price": 21.93, "change_pct": 9.98, "reason": "中国建材集团旗下，耐火材料企业；公司攻克核废料玻璃固化工程用关键耐火材料，实现国产化替代，切入核电高放废液处理赛道", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.44, "first_limit_up": 1786588206, "break_limit_up_times": 0}, {"code": "301520", "name": "万邦医药", "price": 88.68, "change_pct": 20.0, "reason": "公司拟3.02亿元收购赛德盛75.52%股份，落子创新药临床CRO赛道", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 49.28, "first_limit_up": 1786589085, "break_limit_up_times": 5}, {"code": "605179", "name": "一鸣食品", "price": 33.43, "change_pct": 10.0, "reason": "国内鲜乳烘焙知名企业", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 6.48, "first_limit_up": 1786585739, "break_limit_up_times": 17}, {"code": "002581", "name": "*ST未名", "price": 4.27, "change_pct": 10.05, "reason": "公司主要产品恩经复（神经生长因子），联营公司北京科兴致力于人用疫苗及其相关产品", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.38, "first_limit_up": 1786589394, "break_limit_up_times": 4}, {"code": "000802", "name": "北京文化", "price": 6.26, "change_pct": 10.02, "reason": "公司参与《欢迎来龙餐馆》项目投资", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 19.01, "first_limit_up": 1786584300, "break_limit_up_times": 1}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告"};