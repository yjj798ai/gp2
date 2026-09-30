const UPDATE_TIME = "2026-09-30 06:24";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 2.63,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续132天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "CRO概念",
    "rise": 3.57,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物科技ETF",
    "code": "885927"
  },
  {
    "name": "固态电池",
    "rise": -0.0,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.88,
    "rate": 0,
    "tag": "",
    "hotTag": "连续302天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -2.19,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续125天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": -2.57,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续255天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "粮食概念",
    "rise": 2.31,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885995"
  },
  {
    "name": "白酒概念",
    "rise": 2.28,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 3,
    "etfName": "食品饮料ETF",
    "code": "885525"
  },
  {
    "name": "重组蛋白",
    "rise": 3.98,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "生物医药ETF",
    "code": "885955"
  },
  {
    "name": "染料",
    "rise": 1.87,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "化工ETF",
    "code": "885633"
  },
  {
    "name": "玻璃基板",
    "rise": -1.28,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "机床ETF",
    "code": "886111"
  },
  {
    "name": "人形机器人",
    "rise": -0.45,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": -2.3,
    "rate": 0,
    "tag": "",
    "hotTag": "连续42天上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "AI应用",
    "rise": -0.37,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续60天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "光纤概念",
    "rise": -0.85,
    "rate": 0,
    "tag": "",
    "hotTag": "连续131天上榜",
    "rankChg": 0,
    "etfName": "易方达科顺定开",
    "code": "886084"
  },
  {
    "name": "培育钻石",
    "rise": -1.69,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "海峡两岸",
    "rise": -0.27,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885939"
  },
  {
    "name": "商业航天",
    "rise": -0.73,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续231天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "新股与次新股",
    "rise": -1.04,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "芬太尼",
    "rise": 2.27,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": -2,
    "etfName": "",
    "code": "885805"
  }
];
const THS_EVENTS = [
  {
    "title": "10月1日起全国将实施居民购房贷款贴息政策",
    "desc": "",
    "heat": 451374,
    "direction": "房地产",
    "themes": [
      "房地产开发",
      "租售同权",
      "物业管理",
      "房屋检测",
      "房地产"
    ],
    "stocks": [
      {
        "name": "陆家嘴",
        "code": "600663",
        "chg": 10.010881
      }
    ]
  },
  {
    "title": "阿斯利康20亿美元战略投资Summit",
    "desc": "",
    "heat": 378450,
    "direction": "抗肿瘤药物",
    "themes": [
      "细胞免疫治疗",
      "重组蛋白",
      "肿瘤疫苗",
      "CRO概念"
    ],
    "stocks": [
      {
        "name": "康希诺",
        "code": "688185",
        "chg": 20.004677
      }
    ]
  },
  {
    "title": "中国气象局：11月前后或形成有监测记录来最强厄尔尼诺事件",
    "desc": "",
    "heat": 371009,
    "direction": "农业",
    "themes": [
      "渔业",
      "中药材种植",
      "食用菌种植",
      "农作物种业",
      "经济作物种植",
      "果蔬种植",
      "生态农业",
      "小麦产业",
      "水稻产业",
      "稀有糖",
      "天然甜味剂",
      "功能性糖醇",
      "磷酸铁锂",
      "磷矿",
      "黄磷",
      "农业种植",
      "粮食概念",
      "代糖概念",
      "磷化工"
    ],
    "stocks": [
      {
        "name": "蔚蓝生物",
        "code": "603739",
        "chg": 10.031348
      }
    ]
  },
  {
    "title": "需求复苏 染料产业链景气度持续上行",
    "desc": "",
    "heat": 221535,
    "direction": "染料",
    "themes": [
      "染料"
    ],
    "stocks": [
      {
        "name": "善水科技",
        "code": "301190",
        "chg": 20.00668
      }
    ]
  },
  {
    "title": "OpenAI推出全天候自主智能体Dots、GPT-6.1 Sol模型",
    "desc": "",
    "heat": 79836,
    "direction": "AI智能体",
    "themes": [
      "OpenClaw",
      "AI智能体"
    ],
    "stocks": [
      {
        "name": "贝瑞基因",
        "code": "000710",
        "chg": 10.020243
      }
    ]
  },
  {
    "title": "特朗普会见多家科企负责人 签署人工智能相关文件",
    "desc": "",
    "heat": 23666,
    "direction": "AI安全",
    "themes": [
      "AI安全",
      "AI反诈",
      "AI内容审核"
    ],
    "stocks": [
      {
        "name": "高凌信息",
        "code": "688175",
        "chg": 3.776274
      }
    ]
  },
  {
    "title": "华为昇腾950DT千卡超节点落地中国移动算力中心北京节点",
    "desc": "",
    "heat": 13541,
    "direction": "超节点",
    "themes": [
      "超节点"
    ],
    "stocks": [
      {
        "name": "协创数据",
        "code": "300857",
        "chg": 1.818256
      }
    ]
  },
  {
    "title": "2026金融街论坛年会将于10月19日在京开幕",
    "desc": "",
    "heat": 1046,
    "direction": "大金融",
    "themes": [
      "互联网金融",
      "银行",
      "证券",
      "保险"
    ],
    "stocks": [
      {
        "name": "*ST建艺",
        "code": "002789",
        "chg": 6.31136
      }
    ]
  },
  {
    "title": "美国特朗普政府推出人工智能驱动的联邦政府信息网站",
    "desc": "",
    "heat": 781,
    "direction": "AI政务",
    "themes": [
      "AI政务",
      "智慧政务"
    ],
    "stocks": [
      {
        "name": "华是科技",
        "code": "301218",
        "chg": 16.890882
      }
    ]
  },
  {
    "title": "机构：AI促进电子级树脂升级迭代，相关公司有望受益",
    "desc": "",
    "heat": 25,
    "direction": "BCB碳氢树脂",
    "themes": [
      "BCB碳氢树脂"
    ],
    "stocks": [
      {
        "name": "阳谷华泰",
        "code": "300121",
        "chg": 0.531915
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "肿瘤疫苗",
    "change": "+6.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+5.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+4.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+4.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+4.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+3.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+3.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+3.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+3.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+3.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+3.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+3.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+3.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+3.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "染料",
    "change": "+2.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "猴痘概念",
    "change": "+2.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "颗粒硅",
    "change": "+2.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因测序",
    "change": "+2.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5799,
    "price": "4.29",
    "change": "4.90",
    "market_id": "33",
    "circulate_market_value": "41580684000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": 0.24
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.36
      },
      {
        "name": "股权转让",
        "change_pct": -0.18
      },
      {
        "name": "房地产",
        "change_pct": 0.92
      },
      {
        "name": "养老产业",
        "change_pct": 0.34
      },
      {
        "name": "冷链",
        "change_pct": 0.08
      },
      {
        "name": "住房租赁",
        "change_pct": 1.29
      },
      {
        "name": "破净股",
        "change_pct": 0.74
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.07
      },
      {
        "name": "物业管理",
        "change_pct": 1.09
      },
      {
        "name": "旧改",
        "change_pct": 0.58
      },
      {
        "name": "REITs",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 3,
    "hot_rank_chg": 0,
    "stock_cnt": 5799,
    "price": "10.35",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "10814589200.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "7",
    "change_reason": "拟收购界面财联社",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.39
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.8
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -0.49
      },
      {
        "name": "国企改革",
        "change_pct": 0.52
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 4,
    "hot_rank_chg": 7,
    "stock_cnt": 5799,
    "price": "7.41",
    "change": "3.78",
    "market_id": "17",
    "circulate_market_value": "18662158000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.03
      },
      {
        "name": "工业大麻",
        "change_pct": 0.87
      },
      {
        "name": "中药",
        "change_pct": 1.48
      },
      {
        "name": "强势人气股",
        "change_pct": -0.89
      },
      {
        "name": "保健品",
        "change_pct": 1.64
      },
      {
        "name": "民营医院",
        "change_pct": 0.87
      },
      {
        "name": "医药",
        "change_pct": 2.39
      },
      {
        "name": "化学原料药",
        "change_pct": 2.25
      },
      {
        "name": "流感",
        "change_pct": 2.05
      },
      {
        "name": "振兴东北",
        "change_pct": 1.34
      },
      {
        "name": "食品",
        "change_pct": 1.56
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 5,
    "hot_rank_chg": 2,
    "stock_cnt": 5799,
    "price": "3.72",
    "change": "-1.06",
    "market_id": "33",
    "circulate_market_value": "8714799800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.53
      },
      {
        "name": "强势人气股",
        "change_pct": -0.89
      },
      {
        "name": "人工智能",
        "change_pct": -0.69
      },
      {
        "name": "VR&AR",
        "change_pct": -0.92
      },
      {
        "name": "京津冀",
        "change_pct": -0.05
      },
      {
        "name": "装修装饰",
        "change_pct": 0.11
      },
      {
        "name": "住房租赁",
        "change_pct": 1.29
      },
      {
        "name": "破净股",
        "change_pct": 0.74
      },
      {
        "name": "数字经济",
        "change_pct": -1.23
      },
      {
        "name": "房产经纪",
        "change_pct": -0.75
      },
      {
        "name": "物业管理",
        "change_pct": 1.09
      },
      {
        "name": "华为产业链",
        "change_pct": -1.01
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.48
      }
    ]
  },
  {
    "code": "002242",
    "name": "九阳股份",
    "hot_rank": 11,
    "hot_rank_chg": 5,
    "stock_cnt": 5799,
    "price": "12.50",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "9522070300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "厨房小家电",
    "xgb_concepts": [
      {
        "name": "小家电",
        "change_pct": 0.22
      },
      {
        "name": "机器人",
        "change_pct": -0.53
      },
      {
        "name": "家电",
        "change_pct": -0.19
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.92
      }
    ]
  },
  {
    "code": "000678",
    "name": "襄阳轴承",
    "hot_rank": 13,
    "hot_rank_chg": 11,
    "stock_cnt": 5799,
    "price": "12.89",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "5924396100.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "机器人轴承",
    "xgb_concepts": [
      {
        "name": "农机",
        "change_pct": -0.5
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.01
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.23
      },
      {
        "name": "大农业",
        "change_pct": 1.19
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 16,
    "hot_rank_chg": -2,
    "stock_cnt": 5799,
    "price": "8.62",
    "change": "-1.37",
    "market_id": "33",
    "circulate_market_value": "16508097000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.33
      },
      {
        "name": "林业",
        "change_pct": 0.21
      },
      {
        "name": "碳中和",
        "change_pct": 0.62
      },
      {
        "name": "自贸区",
        "change_pct": 0.62
      }
    ]
  },
  {
    "code": "601238",
    "name": "广汽集团",
    "hot_rank": 24,
    "hot_rank_chg": 5,
    "stock_cnt": 5799,
    "price": "5.87",
    "change": "4.82",
    "market_id": "17",
    "circulate_market_value": "43342305000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": 0.54
      },
      {
        "name": "车联网/车路云",
        "change_pct": -1.05
      },
      {
        "name": "业绩爆雷",
        "change_pct": 1.56
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.52
      },
      {
        "name": "锂电池",
        "change_pct": -0.05
      },
      {
        "name": "石墨烯",
        "change_pct": -0.41
      },
      {
        "name": "新能源整车",
        "change_pct": 1.46
      },
      {
        "name": "汽车整车",
        "change_pct": 1.45
      },
      {
        "name": "复牌股",
        "change_pct": -6.45
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "破净股",
        "change_pct": 0.74
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -0.39
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "动力电池回收",
        "change_pct": 0.71
      },
      {
        "name": "华为汽车",
        "change_pct": 0.11
      },
      {
        "name": "大消费",
        "change_pct": 1.95
      },
      {
        "name": "华为产业链",
        "change_pct": -1.01
      },
      {
        "name": "人形机器人",
        "change_pct": -0.51
      },
      {
        "name": "智能座舱",
        "change_pct": -0.47
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.49
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 30,
    "hot_rank_chg": -18,
    "stock_cnt": 5799,
    "price": "6.11",
    "change": "-0.33",
    "market_id": "17",
    "circulate_market_value": "5920794800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 31,
    "hot_rank_chg": 323,
    "stock_cnt": 5799,
    "price": "6.37",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "27259955000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "天然橡胶",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 2.94
      },
      {
        "name": "橡胶",
        "change_pct": 2.38
      },
      {
        "name": "土地流转",
        "change_pct": 1.48
      },
      {
        "name": "农垦",
        "change_pct": 2.27
      },
      {
        "name": "海南概念",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.88
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.97
      },
      {
        "name": "大农业",
        "change_pct": 1.19
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.16
      },
      {
        "name": "大消费",
        "change_pct": 1.95
      },
      {
        "name": "免税店概念",
        "change_pct": 1.21
      },
      {
        "name": "自贸区",
        "change_pct": 0.62
      }
    ]
  },
  {
    "code": "002640",
    "name": "跨境通",
    "hot_rank": 34,
    "hot_rank_chg": -1,
    "stock_cnt": 5799,
    "price": "4.01",
    "change": "1.52",
    "market_id": "33",
    "circulate_market_value": "6193047100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.03
      },
      {
        "name": "数字经济",
        "change_pct": -1.23
      },
      {
        "name": "拼多多概念股",
        "change_pct": -1.15
      },
      {
        "name": "无线耳机",
        "change_pct": -1.5
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 38,
    "hot_rank_chg": 71,
    "stock_cnt": 5799,
    "price": "4.77",
    "change": "-0.21",
    "market_id": "33",
    "circulate_market_value": "12652666200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.89
      },
      {
        "name": "装修装饰",
        "change_pct": 0.11
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.35
      },
      {
        "name": "破净股",
        "change_pct": 0.74
      },
      {
        "name": "航天",
        "change_pct": -0.62
      },
      {
        "name": "旧改",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 42,
    "hot_rank_chg": -11,
    "stock_cnt": 5799,
    "price": "12.24",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "6444060600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -0.36
      },
      {
        "name": "房地产",
        "change_pct": 0.92
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.08
      },
      {
        "name": "住房租赁",
        "change_pct": 1.29
      },
      {
        "name": "物业管理",
        "change_pct": 1.09
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.23
      },
      {
        "name": "旧改",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "600241",
    "name": "时代万恒",
    "hot_rank": 43,
    "hot_rank_chg": -3,
    "stock_cnt": 5799,
    "price": "9.72",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "2860616600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "锂电池",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.05
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 0.94
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "振兴东北",
        "change_pct": 1.34
      },
      {
        "name": "国企改革",
        "change_pct": 0.52
      },
      {
        "name": "自贸区",
        "change_pct": 0.62
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 45,
    "hot_rank_chg": -3,
    "stock_cnt": 5799,
    "price": "6.54",
    "change": "-1.36",
    "market_id": "33",
    "circulate_market_value": "7605021500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -0.55
      },
      {
        "name": "新疆概念",
        "change_pct": -0.61
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.74
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.01
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.27
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.29
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 46,
    "hot_rank_chg": 30,
    "stock_cnt": 5799,
    "price": "5.72",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "201946340000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.71
      },
      {
        "name": "手机产业链",
        "change_pct": -1.34
      },
      {
        "name": "超高清视频",
        "change_pct": -0.56
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.47
      },
      {
        "name": "电竞",
        "change_pct": -0.33
      },
      {
        "name": "半导体",
        "change_pct": -2.35
      },
      {
        "name": "人工智能",
        "change_pct": -0.69
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.78
      },
      {
        "name": "VR&AR",
        "change_pct": -0.92
      },
      {
        "name": "OLED",
        "change_pct": -1.49
      },
      {
        "name": "京津冀",
        "change_pct": -0.05
      },
      {
        "name": "物联网",
        "change_pct": -0.83
      },
      {
        "name": "指纹识别",
        "change_pct": -1.09
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.01
      },
      {
        "name": "白马股",
        "change_pct": 0.88
      },
      {
        "name": "智能制造",
        "change_pct": -0.74
      },
      {
        "name": "小米概念股",
        "change_pct": -1.17
      },
      {
        "name": "国产芯片",
        "change_pct": -2.05
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.43
      },
      {
        "name": "全息概念",
        "change_pct": -1.06
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.02
      },
      {
        "name": "MicroLED",
        "change_pct": -1.3
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.04
      },
      {
        "name": "智能手表",
        "change_pct": -0.88
      },
      {
        "name": "MiniLED",
        "change_pct": -1.56
      },
      {
        "name": "传感器",
        "change_pct": -1.23
      },
      {
        "name": "大硅片",
        "change_pct": -2.93
      },
      {
        "name": "AI PC",
        "change_pct": -1.42
      },
      {
        "name": "华为产业链",
        "change_pct": -1.01
      },
      {
        "name": "回购",
        "change_pct": 0.74
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -0.75
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.29
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.76
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 47,
    "hot_rank_chg": -17,
    "stock_cnt": 5799,
    "price": "6.72",
    "change": "-2.61",
    "market_id": "17",
    "circulate_market_value": "7337478500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 2.4
      },
      {
        "name": "化学原料药",
        "change_pct": 2.25
      },
      {
        "name": "数字经济",
        "change_pct": -1.24
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.34
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.89
      }
    ]
  },
  {
    "code": "600059",
    "name": "古越龙山",
    "hot_rank": 48,
    "hot_rank_chg": 241,
    "stock_cnt": 5799,
    "price": "12.27",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "11184625400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "高端黄酒",
    "xgb_concepts": [
      {
        "name": "白酒",
        "change_pct": 3.34
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.46
      },
      {
        "name": "黄酒",
        "change_pct": 5.08
      },
      {
        "name": "国企改革",
        "change_pct": 0.53
      },
      {
        "name": "回购",
        "change_pct": 0.73
      }
    ]
  },
  {
    "code": "600152",
    "name": "维科技术",
    "hot_rank": 56,
    "hot_rank_chg": 17,
    "stock_cnt": 5799,
    "price": "8.46",
    "change": "1.68",
    "market_id": "17",
    "circulate_market_value": "4476011500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.06
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "储能",
        "change_pct": 0.19
      },
      {
        "name": "无人机",
        "change_pct": -0.55
      },
      {
        "name": "钠电池",
        "change_pct": 0.99
      }
    ]
  },
  {
    "code": "600032",
    "name": "浙江新能",
    "hot_rank": 57,
    "hot_rank_chg": -8,
    "stock_cnt": 5799,
    "price": "7.77",
    "change": "-4.90",
    "market_id": "17",
    "circulate_market_value": "18684327000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 1.11
      },
      {
        "name": "水电",
        "change_pct": 0.73
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.46
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.05
      },
      {
        "name": "光伏",
        "change_pct": -0.11
      },
      {
        "name": "风电",
        "change_pct": 0.09
      },
      {
        "name": "国企改革",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 61,
    "hot_rank_chg": -8,
    "stock_cnt": 5799,
    "price": "11.53",
    "change": "-0.35",
    "market_id": "17",
    "circulate_market_value": "20628764000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.59
      },
      {
        "name": "纯碱",
        "change_pct": 1.2
      },
      {
        "name": "食品",
        "change_pct": 1.56
      },
      {
        "name": "土壤修复",
        "change_pct": -0.01
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.59
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -1.38
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.15
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 67,
    "hot_rank_chg": -26,
    "stock_cnt": 5799,
    "price": "10.12",
    "change": "5.75",
    "market_id": "17",
    "circulate_market_value": "36307218000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -0.17
      },
      {
        "name": "OLED",
        "change_pct": -1.5
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.45
      },
      {
        "name": "国企改革",
        "change_pct": 0.53
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.81
      },
      {
        "name": "陕西国企改革",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 71,
    "hot_rank_chg": 18,
    "stock_cnt": 5799,
    "price": "2.25",
    "change": "1.35",
    "market_id": "33",
    "circulate_market_value": "11345593100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.86
      },
      {
        "name": "新能源整车",
        "change_pct": 1.5
      },
      {
        "name": "汽车整车",
        "change_pct": 1.47
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "低价股",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "002285",
    "name": "世联行",
    "hot_rank": 75,
    "hot_rank_chg": 50,
    "stock_cnt": 5799,
    "price": "3.05",
    "change": "-4.98",
    "market_id": "33",
    "circulate_market_value": "6035978600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.0
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.33
      },
      {
        "name": "共享经济",
        "change_pct": -0.05
      },
      {
        "name": "强势人气股",
        "change_pct": -0.86
      },
      {
        "name": "养老产业",
        "change_pct": 0.35
      },
      {
        "name": "住房租赁",
        "change_pct": 1.35
      },
      {
        "name": "房产经纪",
        "change_pct": -0.25
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.98
      },
      {
        "name": "物业管理",
        "change_pct": 1.17
      },
      {
        "name": "旧改",
        "change_pct": 0.57
      },
      {
        "name": "横琴新区",
        "change_pct": -0.33
      },
      {
        "name": "氮化镓",
        "change_pct": -1.87
      },
      {
        "name": "REITs",
        "change_pct": 1.25
      },
      {
        "name": "华为产业链",
        "change_pct": -1.01
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 80,
    "hot_rank_chg": -45,
    "stock_cnt": 5799,
    "price": "7.37",
    "change": "6.20",
    "market_id": "17",
    "circulate_market_value": "3377290700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": 1.63
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.3
      },
      {
        "name": "自贸区",
        "change_pct": 0.62
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 82,
    "hot_rank_chg": -26,
    "stock_cnt": 5799,
    "price": "5.40",
    "change": "-0.91",
    "market_id": "33",
    "circulate_market_value": "4162365600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.46
      },
      {
        "name": "股权转让",
        "change_pct": -0.19
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.94
      },
      {
        "name": "强势人气股",
        "change_pct": -0.86
      },
      {
        "name": "医药商业",
        "change_pct": 1.33
      },
      {
        "name": "保健品",
        "change_pct": 1.62
      },
      {
        "name": "民营医院",
        "change_pct": 0.87
      },
      {
        "name": "医药",
        "change_pct": 2.4
      },
      {
        "name": "食品",
        "change_pct": 1.56
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.34
      },
      {
        "name": "口腔",
        "change_pct": 0.43
      },
      {
        "name": "医美",
        "change_pct": 1.36
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.89
      }
    ]
  },
  {
    "code": "600719",
    "name": "大连热电",
    "hot_rank": 83,
    "hot_rank_chg": 360,
    "stock_cnt": 5799,
    "price": "8.71",
    "change": "6.48",
    "market_id": "17",
    "circulate_market_value": "3524062500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 1.11
      },
      {
        "name": "振兴东北",
        "change_pct": 1.31
      },
      {
        "name": "国企改革",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "605388",
    "name": "均瑶健康",
    "hot_rank": 88,
    "hot_rank_chg": 114,
    "stock_cnt": 5799,
    "price": "7.39",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "4437576800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "益生菌",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.68
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.94
      },
      {
        "name": "食品",
        "change_pct": 1.56
      },
      {
        "name": "大农业",
        "change_pct": 1.19
      },
      {
        "name": "植物奶",
        "change_pct": 1.84
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": 2.69
      },
      {
        "name": "饮料",
        "change_pct": 1.85
      }
    ]
  },
  {
    "code": "600072",
    "name": "中船科技",
    "hot_rank": 89,
    "hot_rank_chg": 1407,
    "stock_cnt": 5799,
    "price": "9.70",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "10508372000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "风电主机",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.63
      },
      {
        "name": "军工集团",
        "change_pct": 0.29
      },
      {
        "name": "航母",
        "change_pct": 0.55
      },
      {
        "name": "风电",
        "change_pct": 0.09
      },
      {
        "name": "军工",
        "change_pct": -0.43
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "国企改革",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 90,
    "hot_rank_chg": 10,
    "stock_cnt": 5799,
    "price": "5.37",
    "change": "1.13",
    "market_id": "17",
    "circulate_market_value": "6567240900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -0.46
      },
      {
        "name": "煤炭",
        "change_pct": 0.64
      },
      {
        "name": "有色金属",
        "change_pct": -0.37
      },
      {
        "name": "国企改革",
        "change_pct": 0.53
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 91,
    "hot_rank_chg": -11,
    "stock_cnt": 5799,
    "price": "2.70",
    "change": "-2.17",
    "market_id": "33",
    "circulate_market_value": "25686061000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -2.38
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.53
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.01
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.22
      },
      {
        "name": "低价股",
        "change_pct": 0.58
      },
      {
        "name": "减速器",
        "change_pct": -0.23
      },
      {
        "name": "华为汽车",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 94,
    "hot_rank_chg": 251,
    "stock_cnt": 5799,
    "price": "9.10",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4606633800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "固态电池",
    "xgb_concepts": [
      {
        "name": "仪器仪表",
        "change_pct": -0.87
      },
      {
        "name": "锂电池",
        "change_pct": -0.06
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.09
      },
      {
        "name": "有机硅",
        "change_pct": 0.46
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "华为产业链",
        "change_pct": -1.01
      },
      {
        "name": "供应链金融",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 98,
    "hot_rank_chg": -10,
    "stock_cnt": 5799,
    "price": "5.53",
    "change": "-2.81",
    "market_id": "33",
    "circulate_market_value": "12162616600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": -0.94
      },
      {
        "name": "轮胎",
        "change_pct": -0.07
      },
      {
        "name": "冷链",
        "change_pct": 0.05
      },
      {
        "name": "机器人",
        "change_pct": -0.55
      },
      {
        "name": "智能制造",
        "change_pct": -0.76
      },
      {
        "name": "工业母机",
        "change_pct": -0.97
      },
      {
        "name": "减速器",
        "change_pct": -0.23
      },
      {
        "name": "头盔",
        "change_pct": -0.79
      },
      {
        "name": "人形机器人",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "002413",
    "name": "雷科防务",
    "hot_rank": 99,
    "hot_rank_chg": 30,
    "stock_cnt": 5799,
    "price": "8.60",
    "change": "-1.94",
    "market_id": "33",
    "circulate_market_value": "11153656600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.06
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.53
      },
      {
        "name": "5G",
        "change_pct": -1.9
      },
      {
        "name": "人工智能",
        "change_pct": -0.71
      },
      {
        "name": "大飞机",
        "change_pct": -0.22
      },
      {
        "name": "北斗导航",
        "change_pct": -0.92
      },
      {
        "name": "军民融合",
        "change_pct": -0.68
      },
      {
        "name": "军工",
        "change_pct": -0.43
      },
      {
        "name": "国产芯片",
        "change_pct": -2.08
      },
      {
        "name": "百度概念股",
        "change_pct": -0.72
      },
      {
        "name": "毫米波通信",
        "change_pct": -2.15
      },
      {
        "name": "航天",
        "change_pct": -0.63
      },
      {
        "name": "闪存",
        "change_pct": -2.9
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.01
      },
      {
        "name": "华为产业链",
        "change_pct": -1.01
      },
      {
        "name": "毫米波雷达",
        "change_pct": -1.77
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.5
      },
      {
        "name": "低空经济",
        "change_pct": -0.62
      },
      {
        "name": "军工信息化",
        "change_pct": -0.7
      },
      {
        "name": "算力一体机",
        "change_pct": -1.41
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "001246", "name": "力勤资源", "hot_rank": 1, "hot_rank_chg": 36, "stock_cnt": 5799, "price": "66.00", "change": "210.93", "market_id": "33", "circulate_market_value": "10385127100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000002", "name": "万科A", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5799, "price": "4.29", "change": "4.90", "market_id": "33", "circulate_market_value": "41580684000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": 0.24}, {"name": "深圳本地股", "change_pct": -0.36}, {"name": "股权转让", "change_pct": -0.18}, {"name": "房地产", "change_pct": 0.92}, {"name": "养老产业", "change_pct": 0.34}, {"name": "冷链", "change_pct": 0.08}, {"name": "住房租赁", "change_pct": 1.29}, {"name": "破净股", "change_pct": 0.74}, {"name": "冰雪产业", "change_pct": -0.07}, {"name": "物业管理", "change_pct": 1.09}, {"name": "旧改", "change_pct": 0.58}, {"name": "REITs", "change_pct": 1.38}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5799, "price": "10.35", "change": "9.99", "market_id": "17", "circulate_market_value": "10814589200.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "拟收购界面财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.39}, {"name": "上海国企改革", "change_pct": 0.8}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -0.49}, {"name": "国企改革", "change_pct": 0.52}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 4, "hot_rank_chg": 7, "stock_cnt": 5799, "price": "7.41", "change": "3.78", "market_id": "17", "circulate_market_value": "18662158000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.03}, {"name": "工业大麻", "change_pct": 0.87}, {"name": "中药", "change_pct": 1.48}, {"name": "强势人气股", "change_pct": -0.89}, {"name": "保健品", "change_pct": 1.64}, {"name": "民营医院", "change_pct": 0.87}, {"name": "医药", "change_pct": 2.39}, {"name": "化学原料药", "change_pct": 2.25}, {"name": "流感", "change_pct": 2.05}, {"name": "振兴东北", "change_pct": 1.34}, {"name": "食品", "change_pct": 1.56}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 5, "hot_rank_chg": 2, "stock_cnt": 5799, "price": "3.72", "change": "-1.06", "market_id": "33", "circulate_market_value": "8714799800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.53}, {"name": "强势人气股", "change_pct": -0.89}, {"name": "人工智能", "change_pct": -0.69}, {"name": "VR&AR", "change_pct": -0.92}, {"name": "京津冀", "change_pct": -0.05}, {"name": "装修装饰", "change_pct": 0.11}, {"name": "住房租赁", "change_pct": 1.29}, {"name": "破净股", "change_pct": 0.74}, {"name": "数字经济", "change_pct": -1.23}, {"name": "房产经纪", "change_pct": -0.75}, {"name": "物业管理", "change_pct": 1.09}, {"name": "华为产业链", "change_pct": -1.01}, {"name": "AI大模型/智能体", "change_pct": -0.48}]}, {"code": "601811", "name": "新华文轩", "hot_rank": 6, "hot_rank_chg": 2, "stock_cnt": 5799, "price": "21.55", "change": "5.79", "market_id": "17", "circulate_market_value": "17065529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002074", "name": "国轩高科", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5799, "price": "29.68", "change": "3.52", "market_id": "33", "circulate_market_value": "51561367000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5799, "price": "23.29", "change": "-7.54", "market_id": "17", "circulate_market_value": "4917990500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5799, "price": "13.19", "change": "-1.27", "market_id": "17", "circulate_market_value": "8465120600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5799, "price": "54.89", "change": "-3.89", "market_id": "17", "circulate_market_value": "134680640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 11, "hot_rank_chg": 5, "stock_cnt": 5799, "price": "12.50", "change": "10.04", "market_id": "33", "circulate_market_value": "9522070300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "厨房小家电", "xgb_concepts": [{"name": "小家电", "change_pct": 0.22}, {"name": "机器人", "change_pct": -0.53}, {"name": "家电", "change_pct": -0.19}, {"name": "华为鸿蒙", "change_pct": -0.92}]}, {"code": "000993", "name": "闽东电力", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5799, "price": "16.94", "change": "4.24", "market_id": "33", "circulate_market_value": "7771436200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 13, "hot_rank_chg": 11, "stock_cnt": 5799, "price": "12.89", "change": "9.98", "market_id": "33", "circulate_market_value": "5924396100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "机器人轴承", "xgb_concepts": [{"name": "农机", "change_pct": -0.5}, {"name": "汽车零部件", "change_pct": 0.01}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "新能源车零部件", "change_pct": -0.23}, {"name": "大农业", "change_pct": 1.19}]}, {"code": "601579", "name": "会稽山", "hot_rank": 14, "hot_rank_chg": 7, "stock_cnt": 5799, "price": "37.87", "change": "0.56", "market_id": "17", "circulate_market_value": "18157279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 15, "hot_rank_chg": -2, "stock_cnt": 5799, "price": "45.65", "change": "6.01", "market_id": "33", "circulate_market_value": "28713181000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 16, "hot_rank_chg": -2, "stock_cnt": 5799, "price": "8.62", "change": "-1.37", "market_id": "33", "circulate_market_value": "16508097000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.33}, {"name": "林业", "change_pct": 0.21}, {"name": "碳中和", "change_pct": 0.62}, {"name": "自贸区", "change_pct": 0.62}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 17, "hot_rank_chg": 96, "stock_cnt": 5799, "price": "16.28", "change": "10.00", "market_id": "17", "circulate_market_value": "7235555600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI漫剧"}, {"code": "603230", "name": "内蒙新华", "hot_rank": 18, "hot_rank_chg": 32, "stock_cnt": 5799, "price": "14.67", "change": "-4.18", "market_id": "17", "circulate_market_value": "5186182400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 19, "hot_rank_chg": 1, "stock_cnt": 5799, "price": "26.18", "change": "-10.00", "market_id": "33", "circulate_market_value": "6462171700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 20, "hot_rank_chg": 6, "stock_cnt": 5799, "price": "47.35", "change": "-4.69", "market_id": "17", "circulate_market_value": "40101231000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 21, "hot_rank_chg": -20, "stock_cnt": 5799, "price": "23.17", "change": "-5.04", "market_id": "33", "circulate_market_value": "13784578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 22, "hot_rank_chg": 3, "stock_cnt": 5799, "price": "27.41", "change": "5.38", "market_id": "17", "circulate_market_value": "61854650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002866", "name": "传艺科技", "hot_rank": 23, "hot_rank_chg": 59, "stock_cnt": 5799, "price": "16.90", "change": "10.03", "market_id": "33", "circulate_market_value": "3105694300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "601238", "name": "广汽集团", "hot_rank": 24, "hot_rank_chg": 5, "stock_cnt": 5799, "price": "5.87", "change": "4.82", "market_id": "17", "circulate_market_value": "43342305000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": 0.54}, {"name": "车联网/车路云", "change_pct": -1.05}, {"name": "业绩爆雷", "change_pct": 1.56}, {"name": "无人驾驶", "change_pct": -0.52}, {"name": "锂电池", "change_pct": -0.05}, {"name": "石墨烯", "change_pct": -0.41}, {"name": "新能源整车", "change_pct": 1.46}, {"name": "汽车整车", "change_pct": 1.45}, {"name": "复牌股", "change_pct": -6.45}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "破净股", "change_pct": 0.74}, {"name": "宁德时代概念股", "change_pct": -0.39}, {"name": "独角兽", "change_pct": 0.85}, {"name": "动力电池回收", "change_pct": 0.71}, {"name": "华为汽车", "change_pct": 0.11}, {"name": "大消费", "change_pct": 1.95}, {"name": "华为产业链", "change_pct": -1.01}, {"name": "人形机器人", "change_pct": -0.51}, {"name": "智能座舱", "change_pct": -0.47}, {"name": "飞行汽车/eVTOL", "change_pct": -0.49}]}, {"code": "600721", "name": "百花医药", "hot_rank": 25, "hot_rank_chg": 14, "stock_cnt": 5799, "price": "13.20", "change": "1.93", "market_id": "17", "circulate_market_value": "5076028800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 26, "hot_rank_chg": 25, "stock_cnt": 5799, "price": "44.74", "change": "10.01", "market_id": "17", "circulate_market_value": "7850979800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "603949", "name": "雪龙集团", "hot_rank": 27, "hot_rank_chg": -5, "stock_cnt": 5799, "price": "18.41", "change": "-9.98", "market_id": "17", "circulate_market_value": "3869879100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301190", "name": "善水科技", "hot_rank": 28, "hot_rank_chg": 35, "stock_cnt": 5799, "price": "35.93", "change": "20.01", "market_id": "33", "circulate_market_value": "6534014200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "染料中间体"}, {"code": "600641", "name": "先导基电", "hot_rank": 29, "hot_rank_chg": 67, "stock_cnt": 5799, "price": "48.74", "change": "-0.06", "market_id": "17", "circulate_market_value": "45349596000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 30, "hot_rank_chg": -18, "stock_cnt": 5799, "price": "6.11", "change": "-0.33", "market_id": "17", "circulate_market_value": "5920794800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": 0.01}]}, {"code": "601118", "name": "海南橡胶", "hot_rank": 31, "hot_rank_chg": 323, "stock_cnt": 5799, "price": "6.37", "change": "10.02", "market_id": "17", "circulate_market_value": "27259955000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "天然橡胶", "xgb_concepts": [{"name": "农业种植", "change_pct": 2.94}, {"name": "橡胶", "change_pct": 2.38}, {"name": "土地流转", "change_pct": 1.48}, {"name": "农垦", "change_pct": 2.27}, {"name": "海南概念", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.88}, {"name": "海南自由贸易港", "change_pct": 0.97}, {"name": "大农业", "change_pct": 1.19}, {"name": "可降解塑料", "change_pct": 0.16}, {"name": "大消费", "change_pct": 1.95}, {"name": "免税店概念", "change_pct": 1.21}, {"name": "自贸区", "change_pct": 0.62}]}, {"code": "002119", "name": "康强电子", "hot_rank": 32, "hot_rank_chg": -14, "stock_cnt": 5799, "price": "25.72", "change": "-9.02", "market_id": "33", "circulate_market_value": "9652304500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 33, "hot_rank_chg": 1, "stock_cnt": 5799, "price": "13.42", "change": "-6.03", "market_id": "17", "circulate_market_value": "8931060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002640", "name": "跨境通", "hot_rank": 34, "hot_rank_chg": -1, "stock_cnt": 5799, "price": "4.01", "change": "1.52", "market_id": "33", "circulate_market_value": "6193047100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.03}, {"name": "数字经济", "change_pct": -1.23}, {"name": "拼多多概念股", "change_pct": -1.15}, {"name": "无线耳机", "change_pct": -1.5}, {"name": "网红/MCN", "change_pct": -0.61}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 35, "hot_rank_chg": -20, "stock_cnt": 5799, "price": "14.13", "change": "-5.17", "market_id": "17", "circulate_market_value": "18146857000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 36, "hot_rank_chg": -30, "stock_cnt": 5799, "price": "53.64", "change": "-10.00", "market_id": "17", "circulate_market_value": "7666503400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 37, "hot_rank_chg": 33, "stock_cnt": 5799, "price": "17.38", "change": "-3.18", "market_id": "17", "circulate_market_value": "36351003000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 38, "hot_rank_chg": 71, "stock_cnt": 5799, "price": "4.77", "change": "-0.21", "market_id": "33", "circulate_market_value": "12652666200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.89}, {"name": "装修装饰", "change_pct": 0.11}, {"name": "装配式建筑", "change_pct": 0.35}, {"name": "破净股", "change_pct": 0.74}, {"name": "航天", "change_pct": -0.62}, {"name": "旧改", "change_pct": 0.58}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 39, "hot_rank_chg": 19, "stock_cnt": 5799, "price": "811.39", "change": "-0.19", "market_id": "33", "circulate_market_value": "900680580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 40, "hot_rank_chg": 4, "stock_cnt": 5799, "price": "80.18", "change": "-3.43", "market_id": "33", "circulate_market_value": "58149468000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301716", "name": "鸿富诚", "hot_rank": 41, "hot_rank_chg": -13, "stock_cnt": 5799, "price": "585.68", "change": "1.18", "market_id": "33", "circulate_market_value": "7293673900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000011", "name": "深物业A", "hot_rank": 42, "hot_rank_chg": -11, "stock_cnt": 5799, "price": "12.24", "change": "9.97", "market_id": "33", "circulate_market_value": "6444060600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.36}, {"name": "房地产", "change_pct": 0.92}, {"name": "粤港澳大湾区", "change_pct": 0.08}, {"name": "住房租赁", "change_pct": 1.29}, {"name": "物业管理", "change_pct": 1.09}, {"name": "新型城镇化", "change_pct": -0.23}, {"name": "旧改", "change_pct": 0.58}]}, {"code": "600241", "name": "时代万恒", "hot_rank": 43, "hot_rank_chg": -3, "stock_cnt": 5799, "price": "9.72", "change": "9.96", "market_id": "17", "circulate_market_value": "2860616600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "锂电池", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.05}, {"name": "中日韩自贸区", "change_pct": 0.94}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "振兴东北", "change_pct": 1.34}, {"name": "国企改革", "change_pct": 0.52}, {"name": "自贸区", "change_pct": 0.62}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 44, "hot_rank_chg": 64, "stock_cnt": 5799, "price": "19.42", "change": "3.80", "market_id": "33", "circulate_market_value": "8779896100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 45, "hot_rank_chg": -3, "stock_cnt": 5799, "price": "6.54", "change": "-1.36", "market_id": "33", "circulate_market_value": "7605021500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.55}, {"name": "新疆概念", "change_pct": -0.61}, {"name": "阿里巴巴概念股", "change_pct": -0.74}, {"name": "腾讯概念股", "change_pct": -1.01}, {"name": "短剧/互动影游", "change_pct": -0.27}, {"name": "IP经济/谷子经济", "change_pct": -0.29}]}, {"code": "000725", "name": "京东方A", "hot_rank": 46, "hot_rank_chg": 30, "stock_cnt": 5799, "price": "5.72", "change": "0.00", "market_id": "33", "circulate_market_value": "201946340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.71}, {"name": "手机产业链", "change_pct": -1.34}, {"name": "超高清视频", "change_pct": -0.56}, {"name": "苹果产业链", "change_pct": -1.47}, {"name": "电竞", "change_pct": -0.33}, {"name": "半导体", "change_pct": -2.35}, {"name": "人工智能", "change_pct": -0.69}, {"name": "互联网医疗", "change_pct": 0.78}, {"name": "VR&AR", "change_pct": -0.92}, {"name": "OLED", "change_pct": -1.49}, {"name": "京津冀", "change_pct": -0.05}, {"name": "物联网", "change_pct": -0.83}, {"name": "指纹识别", "change_pct": -1.09}, {"name": "汽车零部件", "change_pct": 0.01}, {"name": "白马股", "change_pct": 0.88}, {"name": "智能制造", "change_pct": -0.74}, {"name": "小米概念股", "change_pct": -1.17}, {"name": "国产芯片", "change_pct": -2.05}, {"name": "液晶面板/LCD", "change_pct": -1.43}, {"name": "全息概念", "change_pct": -1.06}, {"name": "理想汽车概念股", "change_pct": -0.02}, {"name": "MicroLED", "change_pct": -1.3}, {"name": "钙钛矿电池", "change_pct": -0.04}, {"name": "智能手表", "change_pct": -0.88}, {"name": "MiniLED", "change_pct": -1.56}, {"name": "传感器", "change_pct": -1.23}, {"name": "大硅片", "change_pct": -2.93}, {"name": "AI PC", "change_pct": -1.42}, {"name": "华为产业链", "change_pct": -1.01}, {"name": "回购", "change_pct": 0.74}, {"name": "光电共封装CPO", "change_pct": -0.75}, {"name": "智能眼镜/MR头显", "change_pct": -1.29}, {"name": "玻璃基板封装", "change_pct": -0.76}]}, {"code": "600488", "name": "津药药业", "hot_rank": 47, "hot_rank_chg": -17, "stock_cnt": 5799, "price": "6.72", "change": "-2.61", "market_id": "17", "circulate_market_value": "7337478500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 2.4}, {"name": "化学原料药", "change_pct": 2.25}, {"name": "数字经济", "change_pct": -1.24}, {"name": "辅助生殖", "change_pct": 2.34}, {"name": "新冠病毒防治", "change_pct": 0.89}]}, {"code": "600059", "name": "古越龙山", "hot_rank": 48, "hot_rank_chg": 241, "stock_cnt": 5799, "price": "12.27", "change": "10.04", "market_id": "17", "circulate_market_value": "11184625400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高端黄酒", "xgb_concepts": [{"name": "白酒", "change_pct": 3.34}, {"name": "浙江国企改革", "change_pct": 0.46}, {"name": "黄酒", "change_pct": 5.08}, {"name": "国企改革", "change_pct": 0.53}, {"name": "回购", "change_pct": 0.73}]}, {"code": "603823", "name": "百合花", "hot_rank": 49, "hot_rank_chg": -17, "stock_cnt": 5799, "price": "43.11", "change": "0.98", "market_id": "17", "circulate_market_value": "17949612000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 50, "hot_rank_chg": -4, "stock_cnt": 5799, "price": "16.44", "change": "-3.41", "market_id": "33", "circulate_market_value": "54679876000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 51, "hot_rank_chg": 14, "stock_cnt": 5799, "price": "20.01", "change": "-2.96", "market_id": "33", "circulate_market_value": "23541141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 52, "hot_rank_chg": -14, "stock_cnt": 5799, "price": "39.37", "change": "-0.81", "market_id": "17", "circulate_market_value": "156361380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 53, "hot_rank_chg": 6, "stock_cnt": 5799, "price": "49.67", "change": "-2.99", "market_id": "33", "circulate_market_value": "57007302000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 54, "hot_rank_chg": 1, "stock_cnt": 5799, "price": "17.67", "change": "-2.05", "market_id": "17", "circulate_market_value": "39193769000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600152", "name": "维科技术", "hot_rank": 56, "hot_rank_chg": 17, "stock_cnt": 5799, "price": "8.46", "change": "1.68", "market_id": "17", "circulate_market_value": "4476011500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.06}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "储能", "change_pct": 0.19}, {"name": "无人机", "change_pct": -0.55}, {"name": "钠电池", "change_pct": 0.99}]}, {"code": "600032", "name": "浙江新能", "hot_rank": 57, "hot_rank_chg": -8, "stock_cnt": 5799, "price": "7.77", "change": "-4.90", "market_id": "17", "circulate_market_value": "18684327000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 1.11}, {"name": "水电", "change_pct": 0.73}, {"name": "浙江国企改革", "change_pct": 0.46}, {"name": "氢能源/燃料电池", "change_pct": 0.05}, {"name": "光伏", "change_pct": -0.11}, {"name": "风电", "change_pct": 0.09}, {"name": "国企改革", "change_pct": 0.53}]}, {"code": "300207", "name": "欣旺达", "hot_rank": 58, "hot_rank_chg": -35, "stock_cnt": 5799, "price": "21.91", "change": "1.91", "market_id": "33", "circulate_market_value": "37552113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 59, "hot_rank_chg": 229, "stock_cnt": 5799, "price": "28.59", "change": "10.00", "market_id": "17", "circulate_market_value": "9632541400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "JH389"}, {"code": "600522", "name": "中天科技", "hot_rank": 60, "hot_rank_chg": 26, "stock_cnt": 5799, "price": "31.15", "change": "-0.57", "market_id": "17", "circulate_market_value": "106313382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 61, "hot_rank_chg": -8, "stock_cnt": 5799, "price": "11.53", "change": "-0.35", "market_id": "17", "circulate_market_value": "20628764000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.59}, {"name": "纯碱", "change_pct": 1.2}, {"name": "食品", "change_pct": 1.56}, {"name": "土壤修复", "change_pct": -0.01}, {"name": "东数西算/算力", "change_pct": -1.59}, {"name": "OpenClaw概念", "change_pct": -1.38}, {"name": "DeepSeek概念股", "change_pct": -1.15}]}, {"code": "600371", "name": "万向德农", "hot_rank": 62, "hot_rank_chg": 37, "stock_cnt": 5799, "price": "13.64", "change": "6.23", "market_id": "17", "circulate_market_value": "3990763900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 63, "hot_rank_chg": 4, "stock_cnt": 5799, "price": "261.59", "change": "2.19", "market_id": "33", "circulate_market_value": "284722310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 64, "hot_rank_chg": 15, "stock_cnt": 5799, "price": "167.43", "change": "-2.23", "market_id": "33", "circulate_market_value": "232070260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 65, "hot_rank_chg": 79, "stock_cnt": 5799, "price": "206.04", "change": "2.45", "market_id": "17", "circulate_market_value": "56779472000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 66, "hot_rank_chg": -12, "stock_cnt": 5799, "price": "36.26", "change": "-2.00", "market_id": "17", "circulate_market_value": "53011932000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 67, "hot_rank_chg": -26, "stock_cnt": 5799, "price": "10.12", "change": "5.75", "market_id": "17", "circulate_market_value": "36307218000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -0.17}, {"name": "OLED", "change_pct": -1.5}, {"name": "液晶面板/LCD", "change_pct": -1.45}, {"name": "国企改革", "change_pct": 0.53}, {"name": "玻璃基板封装", "change_pct": -0.81}, {"name": "陕西国企改革", "change_pct": -0.12}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 68, "hot_rank_chg": -41, "stock_cnt": 5799, "price": "451.03", "change": "0.00", "market_id": "17", "circulate_market_value": "13570464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002912", "name": "中新赛克", "hot_rank": 69, "hot_rank_chg": -52, "stock_cnt": 5799, "price": "26.59", "change": "-8.65", "market_id": "33", "circulate_market_value": "4315127400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603328", "name": "依顿电子", "hot_rank": 70, "hot_rank_chg": -23, "stock_cnt": 5799, "price": "13.83", "change": "-4.16", "market_id": "17", "circulate_market_value": "13818446000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 71, "hot_rank_chg": 18, "stock_cnt": 5799, "price": "2.25", "change": "1.35", "market_id": "33", "circulate_market_value": "11345593100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.86}, {"name": "新能源整车", "change_pct": 1.5}, {"name": "汽车整车", "change_pct": 1.47}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "低价股", "change_pct": 0.58}]}, {"code": "601208", "name": "东材科技", "hot_rank": 72, "hot_rank_chg": 22, "stock_cnt": 5799, "price": "48.18", "change": "-4.65", "market_id": "17", "circulate_market_value": "48670614000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 73, "hot_rank_chg": 10, "stock_cnt": 5799, "price": "353.99", "change": "-3.70", "market_id": "17", "circulate_market_value": "237407460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 75, "hot_rank_chg": 50, "stock_cnt": 5799, "price": "3.05", "change": "-4.98", "market_id": "33", "circulate_market_value": "6035978600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.0}, {"name": "深圳本地股", "change_pct": -0.33}, {"name": "共享经济", "change_pct": -0.05}, {"name": "强势人气股", "change_pct": -0.86}, {"name": "养老产业", "change_pct": 0.35}, {"name": "住房租赁", "change_pct": 1.35}, {"name": "房产经纪", "change_pct": -0.25}, {"name": "第三代半导体", "change_pct": -1.98}, {"name": "物业管理", "change_pct": 1.17}, {"name": "旧改", "change_pct": 0.57}, {"name": "横琴新区", "change_pct": -0.33}, {"name": "氮化镓", "change_pct": -1.87}, {"name": "REITs", "change_pct": 1.25}, {"name": "华为产业链", "change_pct": -1.01}]}, {"code": "603118", "name": "共进股份", "hot_rank": 76, "hot_rank_chg": 158, "stock_cnt": 5799, "price": "15.77", "change": "-3.25", "market_id": "17", "circulate_market_value": "12415348900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603400", "name": "华之杰", "hot_rank": 77, "hot_rank_chg": 240, "stock_cnt": 5799, "price": "54.50", "change": "-0.31", "market_id": "17", "circulate_market_value": "1974539100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002058", "name": "紫竹高科", "hot_rank": 78, "hot_rank_chg": 54, "stock_cnt": 5799, "price": "20.20", "change": "10.02", "market_id": "33", "circulate_market_value": "2895989800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "300502", "name": "新易盛", "hot_rank": 79, "hot_rank_chg": 12, "stock_cnt": 5799, "price": "390.05", "change": "-0.72", "market_id": "33", "circulate_market_value": "489430090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 80, "hot_rank_chg": -45, "stock_cnt": 5799, "price": "7.37", "change": "6.20", "market_id": "17", "circulate_market_value": "3377290700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": 1.63}, {"name": "福建自贸/海西概念", "change_pct": 0.3}, {"name": "自贸区", "change_pct": 0.62}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 81, "hot_rank_chg": -38, "stock_cnt": 5799, "price": "411.63", "change": "0.89", "market_id": "17", "circulate_market_value": "167244790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 82, "hot_rank_chg": -26, "stock_cnt": 5799, "price": "5.40", "change": "-0.91", "market_id": "33", "circulate_market_value": "4162365600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.46}, {"name": "股权转让", "change_pct": -0.19}, {"name": "优化生育（三孩）", "change_pct": 0.94}, {"name": "强势人气股", "change_pct": -0.86}, {"name": "医药商业", "change_pct": 1.33}, {"name": "保健品", "change_pct": 1.62}, {"name": "民营医院", "change_pct": 0.87}, {"name": "医药", "change_pct": 2.4}, {"name": "食品", "change_pct": 1.56}, {"name": "辅助生殖", "change_pct": 2.34}, {"name": "口腔", "change_pct": 0.43}, {"name": "医美", "change_pct": 1.36}, {"name": "新冠病毒防治", "change_pct": 0.89}]}, {"code": "600719", "name": "大连热电", "hot_rank": 83, "hot_rank_chg": 360, "stock_cnt": 5799, "price": "8.71", "change": "6.48", "market_id": "17", "circulate_market_value": "3524062500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 1.11}, {"name": "振兴东北", "change_pct": 1.31}, {"name": "国企改革", "change_pct": 0.53}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 84, "hot_rank_chg": -32, "stock_cnt": 5799, "price": "54.82", "change": "-1.30", "market_id": "17", "circulate_market_value": "246901630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688185", "name": "康希诺", "hot_rank": 85, "hot_rank_chg": 1289, "stock_cnt": 5799, "price": "102.64", "change": "20.00", "market_id": "17", "circulate_market_value": "11739234600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "mRNA肿瘤疫苗"}, {"code": "600722", "name": "金牛化工", "hot_rank": 86, "hot_rank_chg": 38, "stock_cnt": 5799, "price": "14.85", "change": "1.92", "market_id": "17", "circulate_market_value": "10102747200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301699", "name": "洛轴股份", "hot_rank": 87, "hot_rank_chg": 101, "stock_cnt": 5799, "price": "37.83", "change": "0.32", "market_id": "33", "circulate_market_value": "2645506700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605388", "name": "均瑶健康", "hot_rank": 88, "hot_rank_chg": 114, "stock_cnt": 5799, "price": "7.39", "change": "9.97", "market_id": "17", "circulate_market_value": "4437576800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "益生菌", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.68}, {"name": "优化生育（三孩）", "change_pct": 0.94}, {"name": "食品", "change_pct": 1.56}, {"name": "大农业", "change_pct": 1.19}, {"name": "植物奶", "change_pct": 1.84}, {"name": "幽门螺杆菌概念", "change_pct": 2.69}, {"name": "饮料", "change_pct": 1.85}]}, {"code": "600072", "name": "中船科技", "hot_rank": 89, "hot_rank_chg": 1407, "stock_cnt": 5799, "price": "9.70", "change": "9.98", "market_id": "17", "circulate_market_value": "10508372000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "风电主机", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.63}, {"name": "军工集团", "change_pct": 0.29}, {"name": "航母", "change_pct": 0.55}, {"name": "风电", "change_pct": 0.09}, {"name": "军工", "change_pct": -0.43}, {"name": "PPP", "change_pct": -0.9}, {"name": "国企改革", "change_pct": 0.53}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 90, "hot_rank_chg": 10, "stock_cnt": 5799, "price": "5.37", "change": "1.13", "market_id": "17", "circulate_market_value": "6567240900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -0.46}, {"name": "煤炭", "change_pct": 0.64}, {"name": "有色金属", "change_pct": -0.37}, {"name": "国企改革", "change_pct": 0.53}, {"name": "河南国企改革", "change_pct": -0.12}]}, {"code": "000981", "name": "山子高科", "hot_rank": 91, "hot_rank_chg": -11, "stock_cnt": 5799, "price": "2.70", "change": "-2.17", "market_id": "33", "circulate_market_value": "25686061000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -2.38}, {"name": "无人驾驶", "change_pct": -0.53}, {"name": "汽车零部件", "change_pct": 0.01}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "新能源车零部件", "change_pct": -0.22}, {"name": "低价股", "change_pct": 0.58}, {"name": "减速器", "change_pct": -0.23}, {"name": "华为汽车", "change_pct": 0.13}]}, {"code": "001317", "name": "三羊马", "hot_rank": 92, "hot_rank_chg": 70, "stock_cnt": 5799, "price": "61.93", "change": "-0.83", "market_id": "33", "circulate_market_value": "5299446000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 93, "hot_rank_chg": -33, "stock_cnt": 5799, "price": "290.35", "change": "1.24", "market_id": "33", "circulate_market_value": "1237070170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002388", "name": "新亚制程", "hot_rank": 94, "hot_rank_chg": 251, "stock_cnt": 5799, "price": "9.10", "change": "10.04", "market_id": "33", "circulate_market_value": "4606633800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池", "xgb_concepts": [{"name": "仪器仪表", "change_pct": -0.87}, {"name": "锂电池", "change_pct": -0.06}, {"name": "ST摘帽", "change_pct": 0.09}, {"name": "有机硅", "change_pct": 0.46}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "华为产业链", "change_pct": -1.01}, {"name": "供应链金融", "change_pct": 0.42}]}, {"code": "300450", "name": "先导智能", "hot_rank": 95, "hot_rank_chg": -18, "stock_cnt": 5799, "price": "34.57", "change": "2.43", "market_id": "33", "circulate_market_value": "53924533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301689", "name": "电科思仪", "hot_rank": 96, "hot_rank_chg": 59, "stock_cnt": 5799, "price": "75.00", "change": "-3.24", "market_id": "33", "circulate_market_value": "4317108900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002882", "name": "金龙羽", "hot_rank": 97, "hot_rank_chg": -61, "stock_cnt": 5799, "price": "25.04", "change": "2.12", "market_id": "33", "circulate_market_value": "6182160700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 98, "hot_rank_chg": -10, "stock_cnt": 5799, "price": "5.53", "change": "-2.81", "market_id": "33", "circulate_market_value": "12162616600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": -0.94}, {"name": "轮胎", "change_pct": -0.07}, {"name": "冷链", "change_pct": 0.05}, {"name": "机器人", "change_pct": -0.55}, {"name": "智能制造", "change_pct": -0.76}, {"name": "工业母机", "change_pct": -0.97}, {"name": "减速器", "change_pct": -0.23}, {"name": "头盔", "change_pct": -0.79}, {"name": "人形机器人", "change_pct": -0.52}]}, {"code": "002413", "name": "雷科防务", "hot_rank": 99, "hot_rank_chg": 30, "stock_cnt": 5799, "price": "8.60", "change": "-1.94", "market_id": "33", "circulate_market_value": "11153656600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.06}, {"name": "无人驾驶", "change_pct": -0.53}, {"name": "5G", "change_pct": -1.9}, {"name": "人工智能", "change_pct": -0.71}, {"name": "大飞机", "change_pct": -0.22}, {"name": "北斗导航", "change_pct": -0.92}, {"name": "军民融合", "change_pct": -0.68}, {"name": "军工", "change_pct": -0.43}, {"name": "国产芯片", "change_pct": -2.08}, {"name": "百度概念股", "change_pct": -0.72}, {"name": "毫米波通信", "change_pct": -2.15}, {"name": "航天", "change_pct": -0.63}, {"name": "闪存", "change_pct": -2.9}, {"name": "卫星互联网", "change_pct": -1.01}, {"name": "华为产业链", "change_pct": -1.01}, {"name": "毫米波雷达", "change_pct": -1.77}, {"name": "飞行汽车/eVTOL", "change_pct": -0.5}, {"name": "低空经济", "change_pct": -0.62}, {"name": "军工信息化", "change_pct": -0.7}, {"name": "算力一体机", "change_pct": -1.41}]}, {"code": "600699", "name": "均胜电子", "hot_rank": 100, "hot_rank_chg": -19, "stock_cnt": 5799, "price": "23.26", "change": "2.24", "market_id": "17", "circulate_market_value": "32463297000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};