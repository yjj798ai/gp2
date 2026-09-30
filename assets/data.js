const UPDATE_TIME = "2026-09-30 13:17";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 2.46,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续132天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "CRO概念",
    "rise": 3.41,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "固态电池",
    "rise": -0.14,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "PCB概念",
    "rise": -2.34,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续125天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.05,
    "rate": 0,
    "tag": "",
    "hotTag": "连续302天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "重组蛋白",
    "rise": 3.78,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885955"
  },
  {
    "name": "白酒概念",
    "rise": 2.07,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885525"
  },
  {
    "name": "商业航天",
    "rise": -0.89,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续231天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "风电",
    "rise": 0.06,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "电力ETF",
    "code": "885641"
  },
  {
    "name": "存储芯片",
    "rise": -2.73,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续255天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "染料",
    "rise": 1.9,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885633"
  },
  {
    "name": "机器人概念",
    "rise": -0.6,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 2,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "细胞免疫治疗",
    "rise": 3.45,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885769"
  },
  {
    "name": "粮食概念",
    "rise": 2.06,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -2,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "AI应用",
    "rise": -0.54,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续60天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "黄金概念",
    "rise": 0.42,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "人形机器人",
    "rise": -0.6,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "玻璃基板",
    "rise": -1.38,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "工业母机ETF",
    "code": "886111"
  },
  {
    "name": "新股与次新股",
    "rise": -1.24,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "ST板块",
    "rise": 0.25,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  }
];
const THS_EVENTS = [
  {
    "title": "10月1日起全国将实施居民购房贷款贴息政策",
    "desc": "",
    "heat": 418272,
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
    "title": "中国气象局：11月前后或形成有监测记录来最强厄尔尼诺事件",
    "desc": "",
    "heat": 404338,
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
    "title": "阿斯利康20亿美元战略投资Summit",
    "desc": "",
    "heat": 365548,
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
    "title": "需求复苏 染料产业链景气度持续上行",
    "desc": "",
    "heat": 228452,
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
    "heat": 79331,
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
    "heat": 17741,
    "direction": "AI安全",
    "themes": [
      "AI安全",
      "AI反诈",
      "AI内容审核"
    ],
    "stocks": [
      {
        "name": "汉邦高科",
        "code": "300449",
        "chg": 4.261796
      }
    ]
  },
  {
    "title": "华为昇腾950DT千卡超节点落地中国移动算力中心北京节点",
    "desc": "",
    "heat": 13386,
    "direction": "超节点",
    "themes": [
      "超节点"
    ],
    "stocks": [
      {
        "name": "协创数据",
        "code": "300857",
        "chg": 1.935955
      }
    ]
  },
  {
    "title": "2026金融街论坛年会将于10月19日在京开幕",
    "desc": "",
    "heat": 986,
    "direction": "大金融",
    "themes": [
      "互联网金融",
      "银行",
      "证券",
      "保险"
    ],
    "stocks": [
      {
        "name": "闽东电力",
        "code": "000993",
        "chg": 4.97543
      }
    ]
  },
  {
    "title": "美国特朗普政府推出人工智能驱动的联邦政府信息网站",
    "desc": "",
    "heat": 766,
    "direction": "AI政务",
    "themes": [
      "AI政务",
      "智慧政务"
    ],
    "stocks": [
      {
        "name": "华是科技",
        "code": "301218",
        "chg": 15.844544
      }
    ]
  },
  {
    "title": "机构：AI促进电子级树脂升级迭代，相关公司有望受益",
    "desc": "",
    "heat": 35,
    "direction": "BCB碳氢树脂",
    "themes": [
      "BCB碳氢树脂"
    ],
    "stocks": [
      {
        "name": "阳谷华泰",
        "code": "300121",
        "chg": 1.170213
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "肿瘤疫苗",
    "change": "+6.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+4.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+4.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+4.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+3.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+3.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+3.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+3.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+3.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+2.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+2.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+2.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+2.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+2.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "染料",
    "change": "+2.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "猴痘概念",
    "change": "+2.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因测序",
    "change": "+2.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芬太尼概念",
    "change": "+2.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "颗粒硅",
    "change": "+2.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+2.58%",
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
    "stock_cnt": 5814,
    "price": "4.26",
    "change": "4.41",
    "market_id": "33",
    "circulate_market_value": "41386382000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": 0.11
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.53
      },
      {
        "name": "股权转让",
        "change_pct": -0.29
      },
      {
        "name": "房地产",
        "change_pct": 0.83
      },
      {
        "name": "养老产业",
        "change_pct": 0.18
      },
      {
        "name": "冷链",
        "change_pct": -0.07
      },
      {
        "name": "住房租赁",
        "change_pct": 1.07
      },
      {
        "name": "破净股",
        "change_pct": 0.65
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.19
      },
      {
        "name": "物业管理",
        "change_pct": 0.96
      },
      {
        "name": "旧改",
        "change_pct": 0.49
      },
      {
        "name": "REITs",
        "change_pct": 1.29
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 4,
    "hot_rank_chg": 7,
    "stock_cnt": 5814,
    "price": "7.40",
    "change": "3.64",
    "market_id": "17",
    "circulate_market_value": "18636973000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.17
      },
      {
        "name": "工业大麻",
        "change_pct": 0.74
      },
      {
        "name": "中药",
        "change_pct": 1.34
      },
      {
        "name": "强势人气股",
        "change_pct": -1.12
      },
      {
        "name": "保健品",
        "change_pct": 1.5
      },
      {
        "name": "民营医院",
        "change_pct": 0.77
      },
      {
        "name": "医药",
        "change_pct": 2.24
      },
      {
        "name": "化学原料药",
        "change_pct": 2.12
      },
      {
        "name": "流感",
        "change_pct": 1.93
      },
      {
        "name": "振兴东北",
        "change_pct": 1.2
      },
      {
        "name": "食品",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "000678",
    "name": "襄阳轴承",
    "hot_rank": 5,
    "hot_rank_chg": 19,
    "stock_cnt": 5814,
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
        "change_pct": -0.08
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.26
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.32
      },
      {
        "name": "大农业",
        "change_pct": 1.07
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 6,
    "hot_rank_chg": 1,
    "stock_cnt": 5814,
    "price": "3.70",
    "change": "-1.60",
    "market_id": "33",
    "circulate_market_value": "8667946000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.43
      },
      {
        "name": "强势人气股",
        "change_pct": -1.12
      },
      {
        "name": "人工智能",
        "change_pct": -0.83
      },
      {
        "name": "VR&AR",
        "change_pct": -1.04
      },
      {
        "name": "京津冀",
        "change_pct": -0.15
      },
      {
        "name": "装修装饰",
        "change_pct": -0.11
      },
      {
        "name": "住房租赁",
        "change_pct": 1.07
      },
      {
        "name": "破净股",
        "change_pct": 0.65
      },
      {
        "name": "数字经济",
        "change_pct": -1.41
      },
      {
        "name": "房产经纪",
        "change_pct": -0.91
      },
      {
        "name": "物业管理",
        "change_pct": 0.96
      },
      {
        "name": "华为产业链",
        "change_pct": -1.16
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 11,
    "hot_rank_chg": -8,
    "stock_cnt": 5814,
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
        "change_pct": -0.5
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.71
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -0.81
      },
      {
        "name": "国企改革",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 13,
    "hot_rank_chg": 28,
    "stock_cnt": 5814,
    "price": "10.08",
    "change": "5.33",
    "market_id": "17",
    "circulate_market_value": "36163711000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -0.24
      },
      {
        "name": "OLED",
        "change_pct": -1.61
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.56
      },
      {
        "name": "国企改革",
        "change_pct": 0.42
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.9
      },
      {
        "name": "陕西国企改革",
        "change_pct": -0.08
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 14,
    "hot_rank_chg": 0,
    "stock_cnt": 5814,
    "price": "8.53",
    "change": "-2.40",
    "market_id": "33",
    "circulate_market_value": "16335739000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.11
      },
      {
        "name": "林业",
        "change_pct": -0.01
      },
      {
        "name": "碳中和",
        "change_pct": 0.51
      },
      {
        "name": "自贸区",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "002242",
    "name": "九阳股份",
    "hot_rank": 15,
    "hot_rank_chg": 1,
    "stock_cnt": 5814,
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
        "change_pct": 0.04
      },
      {
        "name": "机器人",
        "change_pct": -0.67
      },
      {
        "name": "家电",
        "change_pct": -0.34
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 26,
    "hot_rank_chg": 63,
    "stock_cnt": 5814,
    "price": "2.26",
    "change": "1.80",
    "market_id": "33",
    "circulate_market_value": "11396018000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.12
      },
      {
        "name": "新能源整车",
        "change_pct": 1.52
      },
      {
        "name": "汽车整车",
        "change_pct": 1.52
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.26
      },
      {
        "name": "低价股",
        "change_pct": 0.51
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 27,
    "hot_rank_chg": 49,
    "stock_cnt": 5814,
    "price": "5.72",
    "change": "0.17",
    "market_id": "33",
    "circulate_market_value": "202300010000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.75
      },
      {
        "name": "手机产业链",
        "change_pct": -1.44
      },
      {
        "name": "超高清视频",
        "change_pct": -0.66
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.55
      },
      {
        "name": "电竞",
        "change_pct": -0.49
      },
      {
        "name": "半导体",
        "change_pct": -2.52
      },
      {
        "name": "人工智能",
        "change_pct": -0.83
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.54
      },
      {
        "name": "VR&AR",
        "change_pct": -1.04
      },
      {
        "name": "OLED",
        "change_pct": -1.61
      },
      {
        "name": "京津冀",
        "change_pct": -0.15
      },
      {
        "name": "物联网",
        "change_pct": -1.06
      },
      {
        "name": "指纹识别",
        "change_pct": -1.29
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.08
      },
      {
        "name": "白马股",
        "change_pct": 0.83
      },
      {
        "name": "智能制造",
        "change_pct": -0.87
      },
      {
        "name": "小米概念股",
        "change_pct": -1.33
      },
      {
        "name": "国产芯片",
        "change_pct": -2.21
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.56
      },
      {
        "name": "全息概念",
        "change_pct": -1.16
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.03
      },
      {
        "name": "MicroLED",
        "change_pct": -1.48
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.17
      },
      {
        "name": "智能手表",
        "change_pct": -1.03
      },
      {
        "name": "MiniLED",
        "change_pct": -1.72
      },
      {
        "name": "传感器",
        "change_pct": -1.44
      },
      {
        "name": "大硅片",
        "change_pct": -3.1
      },
      {
        "name": "AI PC",
        "change_pct": -1.55
      },
      {
        "name": "华为产业链",
        "change_pct": -1.16
      },
      {
        "name": "回购",
        "change_pct": 0.66
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -0.93
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.45
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.9
      }
    ]
  },
  {
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 30,
    "hot_rank_chg": 109,
    "stock_cnt": 5814,
    "price": "12.42",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "4087700200.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "5",
    "change_reason": "细胞存储",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.5
      },
      {
        "name": "锂电池",
        "change_pct": -0.21
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.09
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.47
      },
      {
        "name": "污水处理",
        "change_pct": -0.2
      },
      {
        "name": "智慧城市",
        "change_pct": -1.13
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.26
      },
      {
        "name": "环保",
        "change_pct": -0.42
      },
      {
        "name": "动力电池回收",
        "change_pct": 0.63
      },
      {
        "name": "干细胞",
        "change_pct": 3.45
      },
      {
        "name": "国企改革",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "601238",
    "name": "广汽集团",
    "hot_rank": 33,
    "hot_rank_chg": -4,
    "stock_cnt": 5814,
    "price": "5.84",
    "change": "4.29",
    "market_id": "17",
    "circulate_market_value": "43120794000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": 0.4
      },
      {
        "name": "车联网/车路云",
        "change_pct": -1.19
      },
      {
        "name": "业绩爆雷",
        "change_pct": 1.52
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.62
      },
      {
        "name": "锂电池",
        "change_pct": -0.21
      },
      {
        "name": "石墨烯",
        "change_pct": -0.56
      },
      {
        "name": "新能源整车",
        "change_pct": 1.52
      },
      {
        "name": "汽车整车",
        "change_pct": 1.52
      },
      {
        "name": "复牌股",
        "change_pct": -7.51
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.26
      },
      {
        "name": "破净股",
        "change_pct": 0.65
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -0.43
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "动力电池回收",
        "change_pct": 0.63
      },
      {
        "name": "华为汽车",
        "change_pct": 0.07
      },
      {
        "name": "大消费",
        "change_pct": 1.74
      },
      {
        "name": "华为产业链",
        "change_pct": -1.16
      },
      {
        "name": "人形机器人",
        "change_pct": -0.66
      },
      {
        "name": "智能座舱",
        "change_pct": -0.6
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 36,
    "hot_rank_chg": -6,
    "stock_cnt": 5814,
    "price": "6.69",
    "change": "-3.04",
    "market_id": "17",
    "circulate_market_value": "7304721900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 2.24
      },
      {
        "name": "化学原料药",
        "change_pct": 2.12
      },
      {
        "name": "数字经济",
        "change_pct": -1.41
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.16
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 41,
    "hot_rank_chg": 12,
    "stock_cnt": 5814,
    "price": "11.46",
    "change": "-0.95",
    "market_id": "17",
    "circulate_market_value": "20503525000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.54
      },
      {
        "name": "纯碱",
        "change_pct": 1.03
      },
      {
        "name": "食品",
        "change_pct": 1.44
      },
      {
        "name": "土壤修复",
        "change_pct": -0.11
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.77
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -1.59
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.3
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 44,
    "hot_rank_chg": -32,
    "stock_cnt": 5814,
    "price": "6.08",
    "change": "-0.82",
    "market_id": "17",
    "circulate_market_value": "5891723800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "002640",
    "name": "跨境通",
    "hot_rank": 54,
    "hot_rank_chg": -21,
    "stock_cnt": 5814,
    "price": "3.91",
    "change": "-0.76",
    "market_id": "33",
    "circulate_market_value": "6053703600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.17
      },
      {
        "name": "数字经济",
        "change_pct": -1.41
      },
      {
        "name": "拼多多概念股",
        "change_pct": -1.38
      },
      {
        "name": "无线耳机",
        "change_pct": -1.75
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.83
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 55,
    "hot_rank_chg": 33,
    "stock_cnt": 5814,
    "price": "5.44",
    "change": "-4.39",
    "market_id": "33",
    "circulate_market_value": "11964671600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": -1.04
      },
      {
        "name": "轮胎",
        "change_pct": -0.22
      },
      {
        "name": "冷链",
        "change_pct": -0.07
      },
      {
        "name": "机器人",
        "change_pct": -0.67
      },
      {
        "name": "智能制造",
        "change_pct": -0.87
      },
      {
        "name": "工业母机",
        "change_pct": -1.07
      },
      {
        "name": "减速器",
        "change_pct": -0.34
      },
      {
        "name": "头盔",
        "change_pct": -0.81
      },
      {
        "name": "人形机器人",
        "change_pct": -0.66
      }
    ]
  },
  {
    "code": "603278",
    "name": "大业股份",
    "hot_rank": 60,
    "hot_rank_chg": 32,
    "stock_cnt": 5814,
    "price": "10.27",
    "change": "-2.75",
    "market_id": "17",
    "circulate_market_value": "3509869000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.29
      },
      {
        "name": "轮胎",
        "change_pct": -0.22
      },
      {
        "name": "风电",
        "change_pct": -0.02
      },
      {
        "name": "航天",
        "change_pct": -0.74
      },
      {
        "name": "人形机器人",
        "change_pct": -0.66
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 65,
    "hot_rank_chg": -30,
    "stock_cnt": 5814,
    "price": "7.24",
    "change": "4.32",
    "market_id": "17",
    "circulate_market_value": "3317718400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": 1.38
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.11
      },
      {
        "name": "自贸区",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 66,
    "hot_rank_chg": 14,
    "stock_cnt": 5814,
    "price": "2.69",
    "change": "-2.54",
    "market_id": "33",
    "circulate_market_value": "25590928000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -2.52
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.62
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.08
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.26
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.32
      },
      {
        "name": "低价股",
        "change_pct": 0.51
      },
      {
        "name": "减速器",
        "change_pct": -0.34
      },
      {
        "name": "华为汽车",
        "change_pct": 0.07
      }
    ]
  },
  {
    "code": "600059",
    "name": "古越龙山",
    "hot_rank": 68,
    "hot_rank_chg": 221,
    "stock_cnt": 5814,
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
        "change_pct": 2.82
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.23
      },
      {
        "name": "黄酒",
        "change_pct": 4.69
      },
      {
        "name": "国企改革",
        "change_pct": 0.42
      },
      {
        "name": "回购",
        "change_pct": 0.66
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 75,
    "hot_rank_chg": -33,
    "stock_cnt": 5814,
    "price": "6.58",
    "change": "-0.75",
    "market_id": "33",
    "circulate_market_value": "7651535400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -0.65
      },
      {
        "name": "新疆概念",
        "change_pct": -0.72
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.88
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.19
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.37
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.48
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 77,
    "hot_rank_chg": 277,
    "stock_cnt": 5814,
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
        "change_pct": 2.81
      },
      {
        "name": "橡胶",
        "change_pct": 2.55
      },
      {
        "name": "土地流转",
        "change_pct": 1.41
      },
      {
        "name": "农垦",
        "change_pct": 2.13
      },
      {
        "name": "海南概念",
        "change_pct": 0.79
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.79
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.92
      },
      {
        "name": "大农业",
        "change_pct": 1.07
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.01
      },
      {
        "name": "大消费",
        "change_pct": 1.74
      },
      {
        "name": "免税店概念",
        "change_pct": 1.24
      },
      {
        "name": "自贸区",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 82,
    "hot_rank_chg": -51,
    "stock_cnt": 5814,
    "price": "12.24",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "6444060600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "房地产开发",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -0.53
      },
      {
        "name": "房地产",
        "change_pct": 0.83
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.02
      },
      {
        "name": "住房租赁",
        "change_pct": 1.07
      },
      {
        "name": "物业管理",
        "change_pct": 0.96
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.29
      },
      {
        "name": "旧改",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 83,
    "hot_rank_chg": 17,
    "stock_cnt": 5814,
    "price": "5.34",
    "change": "0.19",
    "market_id": "17",
    "circulate_market_value": "6506320300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -0.68
      },
      {
        "name": "煤炭",
        "change_pct": 0.73
      },
      {
        "name": "有色金属",
        "change_pct": -0.48
      },
      {
        "name": "国企改革",
        "change_pct": 0.42
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.29
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 90,
    "hot_rank_chg": -34,
    "stock_cnt": 5814,
    "price": "5.43",
    "change": "-1.09",
    "market_id": "33",
    "circulate_market_value": "4154714200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.34
      },
      {
        "name": "股权转让",
        "change_pct": -0.29
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.77
      },
      {
        "name": "强势人气股",
        "change_pct": -1.12
      },
      {
        "name": "医药商业",
        "change_pct": 1.17
      },
      {
        "name": "保健品",
        "change_pct": 1.5
      },
      {
        "name": "民营医院",
        "change_pct": 0.77
      },
      {
        "name": "医药",
        "change_pct": 2.24
      },
      {
        "name": "食品",
        "change_pct": 1.44
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.16
      },
      {
        "name": "口腔",
        "change_pct": 0.22
      },
      {
        "name": "医美",
        "change_pct": 1.2
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "605366",
    "name": "宏柏新材",
    "hot_rank": 97,
    "hot_rank_chg": 10,
    "stock_cnt": 5814,
    "price": "10.41",
    "change": "6.77",
    "market_id": "17",
    "circulate_market_value": "8045136400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有机硅",
        "change_pct": 0.34
      },
      {
        "name": "气凝胶",
        "change_pct": 0.25
      },
      {
        "name": "光纤概念",
        "change_pct": -0.87
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 98,
    "hot_rank_chg": 11,
    "stock_cnt": 5814,
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
        "change_pct": -1.12
      },
      {
        "name": "装修装饰",
        "change_pct": -0.11
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.14
      },
      {
        "name": "破净股",
        "change_pct": 0.65
      },
      {
        "name": "航天",
        "change_pct": -0.74
      },
      {
        "name": "旧改",
        "change_pct": 0.49
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "001246", "name": "力勤资源", "hot_rank": 1, "hot_rank_chg": 36, "stock_cnt": 5814, "price": "65.09", "change": "206.59", "market_id": "33", "circulate_market_value": "10240386700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000002", "name": "万科A", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5814, "price": "4.26", "change": "4.41", "market_id": "33", "circulate_market_value": "41386382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": 0.11}, {"name": "深圳本地股", "change_pct": -0.53}, {"name": "股权转让", "change_pct": -0.29}, {"name": "房地产", "change_pct": 0.83}, {"name": "养老产业", "change_pct": 0.18}, {"name": "冷链", "change_pct": -0.07}, {"name": "住房租赁", "change_pct": 1.07}, {"name": "破净股", "change_pct": 0.65}, {"name": "冰雪产业", "change_pct": -0.19}, {"name": "物业管理", "change_pct": 0.96}, {"name": "旧改", "change_pct": 0.49}, {"name": "REITs", "change_pct": 1.29}]}, {"code": "600418", "name": "江淮汽车", "hot_rank": 3, "hot_rank_chg": 22, "stock_cnt": 5814, "price": "27.47", "change": "5.49", "market_id": "17", "circulate_market_value": "61922275000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 4, "hot_rank_chg": 7, "stock_cnt": 5814, "price": "7.40", "change": "3.64", "market_id": "17", "circulate_market_value": "18636973000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.17}, {"name": "工业大麻", "change_pct": 0.74}, {"name": "中药", "change_pct": 1.34}, {"name": "强势人气股", "change_pct": -1.12}, {"name": "保健品", "change_pct": 1.5}, {"name": "民营医院", "change_pct": 0.77}, {"name": "医药", "change_pct": 2.24}, {"name": "化学原料药", "change_pct": 2.12}, {"name": "流感", "change_pct": 1.93}, {"name": "振兴东北", "change_pct": 1.2}, {"name": "食品", "change_pct": 1.44}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 5, "hot_rank_chg": 19, "stock_cnt": 5814, "price": "12.89", "change": "9.98", "market_id": "33", "circulate_market_value": "5924396100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "机器人轴承", "xgb_concepts": [{"name": "农机", "change_pct": -0.5}, {"name": "汽车零部件", "change_pct": -0.08}, {"name": "新能源汽车", "change_pct": -0.26}, {"name": "新能源车零部件", "change_pct": -0.32}, {"name": "大农业", "change_pct": 1.07}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 6, "hot_rank_chg": 1, "stock_cnt": 5814, "price": "3.70", "change": "-1.60", "market_id": "33", "circulate_market_value": "8667946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.43}, {"name": "强势人气股", "change_pct": -1.12}, {"name": "人工智能", "change_pct": -0.83}, {"name": "VR&AR", "change_pct": -1.04}, {"name": "京津冀", "change_pct": -0.15}, {"name": "装修装饰", "change_pct": -0.11}, {"name": "住房租赁", "change_pct": 1.07}, {"name": "破净股", "change_pct": 0.65}, {"name": "数字经济", "change_pct": -1.41}, {"name": "房产经纪", "change_pct": -0.91}, {"name": "物业管理", "change_pct": 0.96}, {"name": "华为产业链", "change_pct": -1.16}, {"name": "AI大模型/智能体", "change_pct": -0.61}]}, {"code": "600127", "name": "金健米业", "hot_rank": 7, "hot_rank_chg": 3, "stock_cnt": 5814, "price": "13.14", "change": "-1.65", "market_id": "17", "circulate_market_value": "8433031500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5814, "price": "54.86", "change": "-3.94", "market_id": "17", "circulate_market_value": "134607030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5814, "price": "21.12", "change": "3.68", "market_id": "17", "circulate_market_value": "16725010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 10, "hot_rank_chg": -6, "stock_cnt": 5814, "price": "23.15", "change": "-8.10", "market_id": "17", "circulate_market_value": "4888427700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 11, "hot_rank_chg": -8, "stock_cnt": 5814, "price": "10.35", "change": "9.99", "market_id": "17", "circulate_market_value": "10814589200.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "拟收购界面财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.5}, {"name": "上海国企改革", "change_pct": 0.71}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -0.81}, {"name": "国企改革", "change_pct": 0.42}]}, {"code": "002074", "name": "国轩高科", "hot_rank": 12, "hot_rank_chg": -3, "stock_cnt": 5814, "price": "29.50", "change": "2.86", "market_id": "33", "circulate_market_value": "51231402000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 13, "hot_rank_chg": 28, "stock_cnt": 5814, "price": "10.08", "change": "5.33", "market_id": "17", "circulate_market_value": "36163711000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -0.24}, {"name": "OLED", "change_pct": -1.61}, {"name": "液晶面板/LCD", "change_pct": -1.56}, {"name": "国企改革", "change_pct": 0.42}, {"name": "玻璃基板封装", "change_pct": -0.9}, {"name": "陕西国企改革", "change_pct": -0.08}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 14, "hot_rank_chg": 0, "stock_cnt": 5814, "price": "8.53", "change": "-2.40", "market_id": "33", "circulate_market_value": "16335739000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.11}, {"name": "林业", "change_pct": -0.01}, {"name": "碳中和", "change_pct": 0.51}, {"name": "自贸区", "change_pct": 0.49}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 15, "hot_rank_chg": 1, "stock_cnt": 5814, "price": "12.50", "change": "10.04", "market_id": "33", "circulate_market_value": "9522070300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "厨房小家电", "xgb_concepts": [{"name": "小家电", "change_pct": 0.04}, {"name": "机器人", "change_pct": -0.67}, {"name": "家电", "change_pct": -0.34}, {"name": "华为鸿蒙", "change_pct": -1.12}]}, {"code": "002487", "name": "大金重工", "hot_rank": 16, "hot_rank_chg": -3, "stock_cnt": 5814, "price": "46.29", "change": "7.83", "market_id": "33", "circulate_market_value": "29205299000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 17, "hot_rank_chg": 2, "stock_cnt": 5814, "price": "17.09", "change": "4.97", "market_id": "33", "circulate_market_value": "7826390400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 18, "hot_rank_chg": 21, "stock_cnt": 5814, "price": "13.11", "change": "1.24", "market_id": "17", "circulate_market_value": "5041419500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 19, "hot_rank_chg": 32, "stock_cnt": 5814, "price": "44.74", "change": "10.01", "market_id": "17", "circulate_market_value": "7850979800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "600206", "name": "有研新材", "hot_rank": 20, "hot_rank_chg": 6, "stock_cnt": 5814, "price": "46.62", "change": "-6.20", "market_id": "17", "circulate_market_value": "39466316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 21, "hot_rank_chg": -1, "stock_cnt": 5814, "price": "26.18", "change": "-10.00", "market_id": "33", "circulate_market_value": "6462171700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603949", "name": "雪龙集团", "hot_rank": 22, "hot_rank_chg": 0, "stock_cnt": 5814, "price": "18.41", "change": "-9.98", "market_id": "17", "circulate_market_value": "3869879100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 23, "hot_rank_chg": -5, "stock_cnt": 5814, "price": "25.80", "change": "-8.74", "market_id": "33", "circulate_market_value": "9682327200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 24, "hot_rank_chg": 26, "stock_cnt": 5814, "price": "14.01", "change": "-8.49", "market_id": "17", "circulate_market_value": "4952857200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 25, "hot_rank_chg": -4, "stock_cnt": 5814, "price": "37.30", "change": "-0.96", "market_id": "17", "circulate_market_value": "17883985000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 26, "hot_rank_chg": 63, "stock_cnt": 5814, "price": "2.26", "change": "1.80", "market_id": "33", "circulate_market_value": "11396018000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.12}, {"name": "新能源整车", "change_pct": 1.52}, {"name": "汽车整车", "change_pct": 1.52}, {"name": "新能源汽车", "change_pct": -0.26}, {"name": "低价股", "change_pct": 0.51}]}, {"code": "000725", "name": "京东方A", "hot_rank": 27, "hot_rank_chg": 49, "stock_cnt": 5814, "price": "5.72", "change": "0.17", "market_id": "33", "circulate_market_value": "202300010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.75}, {"name": "手机产业链", "change_pct": -1.44}, {"name": "超高清视频", "change_pct": -0.66}, {"name": "苹果产业链", "change_pct": -1.55}, {"name": "电竞", "change_pct": -0.49}, {"name": "半导体", "change_pct": -2.52}, {"name": "人工智能", "change_pct": -0.83}, {"name": "互联网医疗", "change_pct": 0.54}, {"name": "VR&AR", "change_pct": -1.04}, {"name": "OLED", "change_pct": -1.61}, {"name": "京津冀", "change_pct": -0.15}, {"name": "物联网", "change_pct": -1.06}, {"name": "指纹识别", "change_pct": -1.29}, {"name": "汽车零部件", "change_pct": -0.08}, {"name": "白马股", "change_pct": 0.83}, {"name": "智能制造", "change_pct": -0.87}, {"name": "小米概念股", "change_pct": -1.33}, {"name": "国产芯片", "change_pct": -2.21}, {"name": "液晶面板/LCD", "change_pct": -1.56}, {"name": "全息概念", "change_pct": -1.16}, {"name": "理想汽车概念股", "change_pct": -0.03}, {"name": "MicroLED", "change_pct": -1.48}, {"name": "钙钛矿电池", "change_pct": -0.17}, {"name": "智能手表", "change_pct": -1.03}, {"name": "MiniLED", "change_pct": -1.72}, {"name": "传感器", "change_pct": -1.44}, {"name": "大硅片", "change_pct": -3.1}, {"name": "AI PC", "change_pct": -1.55}, {"name": "华为产业链", "change_pct": -1.16}, {"name": "回购", "change_pct": 0.66}, {"name": "光电共封装CPO", "change_pct": -0.93}, {"name": "智能眼镜/MR头显", "change_pct": -1.45}, {"name": "玻璃基板封装", "change_pct": -0.9}]}, {"code": "000823", "name": "超声电子", "hot_rank": 28, "hot_rank_chg": -27, "stock_cnt": 5814, "price": "23.28", "change": "-4.59", "market_id": "33", "circulate_market_value": "13850021000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 29, "hot_rank_chg": 79, "stock_cnt": 5814, "price": "19.52", "change": "4.38", "market_id": "33", "circulate_market_value": "8829653400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 30, "hot_rank_chg": 109, "stock_cnt": 5814, "price": "12.42", "change": "10.01", "market_id": "33", "circulate_market_value": "4087700200.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "细胞存储", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.5}, {"name": "锂电池", "change_pct": -0.21}, {"name": "ST摘帽", "change_pct": 0.09}, {"name": "湖南国企改革", "change_pct": 0.47}, {"name": "污水处理", "change_pct": -0.2}, {"name": "智慧城市", "change_pct": -1.13}, {"name": "新能源汽车", "change_pct": -0.26}, {"name": "环保", "change_pct": -0.42}, {"name": "动力电池回收", "change_pct": 0.63}, {"name": "干细胞", "change_pct": 3.45}, {"name": "国企改革", "change_pct": 0.42}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 31, "hot_rank_chg": -16, "stock_cnt": 5814, "price": "14.12", "change": "-5.24", "market_id": "17", "circulate_market_value": "18134014000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600699", "name": "均胜电子", "hot_rank": 32, "hot_rank_chg": 49, "stock_cnt": 5814, "price": "23.46", "change": "3.12", "market_id": "17", "circulate_market_value": "32742431000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601238", "name": "广汽集团", "hot_rank": 33, "hot_rank_chg": -4, "stock_cnt": 5814, "price": "5.84", "change": "4.29", "market_id": "17", "circulate_market_value": "43120794000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": 0.4}, {"name": "车联网/车路云", "change_pct": -1.19}, {"name": "业绩爆雷", "change_pct": 1.52}, {"name": "无人驾驶", "change_pct": -0.62}, {"name": "锂电池", "change_pct": -0.21}, {"name": "石墨烯", "change_pct": -0.56}, {"name": "新能源整车", "change_pct": 1.52}, {"name": "汽车整车", "change_pct": 1.52}, {"name": "复牌股", "change_pct": -7.51}, {"name": "新能源汽车", "change_pct": -0.26}, {"name": "破净股", "change_pct": 0.65}, {"name": "宁德时代概念股", "change_pct": -0.43}, {"name": "独角兽", "change_pct": 0.85}, {"name": "动力电池回收", "change_pct": 0.63}, {"name": "华为汽车", "change_pct": 0.07}, {"name": "大消费", "change_pct": 1.74}, {"name": "华为产业链", "change_pct": -1.16}, {"name": "人形机器人", "change_pct": -0.66}, {"name": "智能座舱", "change_pct": -0.6}, {"name": "飞行汽车/eVTOL", "change_pct": -0.61}]}, {"code": "603538", "name": "美诺华", "hot_rank": 34, "hot_rank_chg": 254, "stock_cnt": 5814, "price": "28.59", "change": "10.00", "market_id": "17", "circulate_market_value": "9632541400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "JH389"}, {"code": "605058", "name": "澳弘电子", "hot_rank": 35, "hot_rank_chg": -29, "stock_cnt": 5814, "price": "53.64", "change": "-10.00", "market_id": "17", "circulate_market_value": "7666503400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 36, "hot_rank_chg": -6, "stock_cnt": 5814, "price": "6.69", "change": "-3.04", "market_id": "17", "circulate_market_value": "7304721900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 2.24}, {"name": "化学原料药", "change_pct": 2.12}, {"name": "数字经济", "change_pct": -1.41}, {"name": "辅助生殖", "change_pct": 2.16}, {"name": "新冠病毒防治", "change_pct": 0.79}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 37, "hot_rank_chg": 21, "stock_cnt": 5814, "price": "808.44", "change": "-0.56", "market_id": "33", "circulate_market_value": "897317470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 38, "hot_rank_chg": -4, "stock_cnt": 5814, "price": "13.33", "change": "-6.59", "market_id": "17", "circulate_market_value": "8877780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 39, "hot_rank_chg": 31, "stock_cnt": 5814, "price": "17.29", "change": "-3.68", "market_id": "17", "circulate_market_value": "36162764000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 40, "hot_rank_chg": 73, "stock_cnt": 5814, "price": "16.28", "change": "10.00", "market_id": "17", "circulate_market_value": "7235555600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI漫剧"}, {"code": "600186", "name": "莲花控股", "hot_rank": 41, "hot_rank_chg": 12, "stock_cnt": 5814, "price": "11.46", "change": "-0.95", "market_id": "17", "circulate_market_value": "20503525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.54}, {"name": "纯碱", "change_pct": 1.03}, {"name": "食品", "change_pct": 1.44}, {"name": "土壤修复", "change_pct": -0.11}, {"name": "东数西算/算力", "change_pct": -1.77}, {"name": "OpenClaw概念", "change_pct": -1.59}, {"name": "DeepSeek概念股", "change_pct": -1.3}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 43, "hot_rank_chg": 40, "stock_cnt": 5814, "price": "353.90", "change": "-3.72", "market_id": "17", "circulate_market_value": "237367220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 44, "hot_rank_chg": -32, "stock_cnt": 5814, "price": "6.08", "change": "-0.82", "market_id": "17", "circulate_market_value": "5891723800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": -0.02}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 45, "hot_rank_chg": -1, "stock_cnt": 5814, "price": "79.45", "change": "-4.31", "market_id": "33", "circulate_market_value": "57620045000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 46, "hot_rank_chg": 0, "stock_cnt": 5814, "price": "16.46", "change": "-3.29", "market_id": "33", "circulate_market_value": "54746397000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300207", "name": "欣旺达", "hot_rank": 47, "hot_rank_chg": -24, "stock_cnt": 5814, "price": "22.00", "change": "2.33", "market_id": "33", "circulate_market_value": "37706366000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 48, "hot_rank_chg": 48, "stock_cnt": 5814, "price": "48.57", "change": "-0.39", "market_id": "17", "circulate_market_value": "45200695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 49, "hot_rank_chg": 10, "stock_cnt": 5814, "price": "49.61", "change": "-3.12", "market_id": "33", "circulate_market_value": "56926977000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 50, "hot_rank_chg": -23, "stock_cnt": 5814, "price": "450.40", "change": "-0.14", "market_id": "17", "circulate_market_value": "13551509000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688137", "name": "近岸蛋白", "hot_rank": 51, "hot_rank_chg": 76, "stock_cnt": 5814, "price": "160.39", "change": "13.47", "market_id": "17", "circulate_market_value": "11214060300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 52, "hot_rank_chg": -14, "stock_cnt": 5814, "price": "39.41", "change": "-0.71", "market_id": "17", "circulate_market_value": "156520240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002866", "name": "传艺科技", "hot_rank": 53, "hot_rank_chg": 29, "stock_cnt": 5814, "price": "16.90", "change": "10.03", "market_id": "33", "circulate_market_value": "3105694300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "002640", "name": "跨境通", "hot_rank": 54, "hot_rank_chg": -21, "stock_cnt": 5814, "price": "3.91", "change": "-0.76", "market_id": "33", "circulate_market_value": "6053703600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.17}, {"name": "数字经济", "change_pct": -1.41}, {"name": "拼多多概念股", "change_pct": -1.38}, {"name": "无线耳机", "change_pct": -1.75}, {"name": "网红/MCN", "change_pct": -0.83}]}, {"code": "002031", "name": "巨轮智能", "hot_rank": 55, "hot_rank_chg": 33, "stock_cnt": 5814, "price": "5.44", "change": "-4.39", "market_id": "33", "circulate_market_value": "11964671600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": -1.04}, {"name": "轮胎", "change_pct": -0.22}, {"name": "冷链", "change_pct": -0.07}, {"name": "机器人", "change_pct": -0.67}, {"name": "智能制造", "change_pct": -0.87}, {"name": "工业母机", "change_pct": -1.07}, {"name": "减速器", "change_pct": -0.34}, {"name": "头盔", "change_pct": -0.81}, {"name": "人形机器人", "change_pct": -0.66}]}, {"code": "301716", "name": "鸿富诚", "hot_rank": 56, "hot_rank_chg": -28, "stock_cnt": 5814, "price": "586.60", "change": "1.33", "market_id": "33", "circulate_market_value": "7305131000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 57, "hot_rank_chg": 22, "stock_cnt": 5814, "price": "167.40", "change": "-2.23", "market_id": "33", "circulate_market_value": "232070260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 58, "hot_rank_chg": 40, "stock_cnt": 5814, "price": "167.34", "change": "4.16", "market_id": "17", "circulate_market_value": "413878720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002882", "name": "金龙羽", "hot_rank": 59, "hot_rank_chg": -23, "stock_cnt": 5814, "price": "24.98", "change": "1.92", "market_id": "33", "circulate_market_value": "6169811100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 60, "hot_rank_chg": 32, "stock_cnt": 5814, "price": "10.27", "change": "-2.75", "market_id": "17", "circulate_market_value": "3509869000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.29}, {"name": "轮胎", "change_pct": -0.22}, {"name": "风电", "change_pct": -0.02}, {"name": "航天", "change_pct": -0.74}, {"name": "人形机器人", "change_pct": -0.66}]}, {"code": "301190", "name": "善水科技", "hot_rank": 61, "hot_rank_chg": 2, "stock_cnt": 5814, "price": "35.93", "change": "20.01", "market_id": "33", "circulate_market_value": "6534014200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "染料中间体"}, {"code": "002491", "name": "通鼎互联", "hot_rank": 62, "hot_rank_chg": 3, "stock_cnt": 5814, "price": "20.04", "change": "-2.81", "market_id": "33", "circulate_market_value": "23576435000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 63, "hot_rank_chg": 36, "stock_cnt": 5814, "price": "13.51", "change": "5.22", "market_id": "17", "circulate_market_value": "3952728800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 64, "hot_rank_chg": 0, "stock_cnt": 5814, "price": "56.90", "change": "-5.73", "market_id": "33", "circulate_market_value": "86343031000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 65, "hot_rank_chg": -30, "stock_cnt": 5814, "price": "7.24", "change": "4.32", "market_id": "17", "circulate_market_value": "3317718400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": 1.38}, {"name": "福建自贸/海西概念", "change_pct": 0.11}, {"name": "自贸区", "change_pct": 0.49}]}, {"code": "000981", "name": "山子高科", "hot_rank": 66, "hot_rank_chg": 14, "stock_cnt": 5814, "price": "2.69", "change": "-2.54", "market_id": "33", "circulate_market_value": "25590928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -2.52}, {"name": "无人驾驶", "change_pct": -0.62}, {"name": "汽车零部件", "change_pct": -0.08}, {"name": "新能源汽车", "change_pct": -0.26}, {"name": "新能源车零部件", "change_pct": -0.32}, {"name": "低价股", "change_pct": 0.51}, {"name": "减速器", "change_pct": -0.34}, {"name": "华为汽车", "change_pct": 0.07}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 67, "hot_rank_chg": -15, "stock_cnt": 5814, "price": "54.79", "change": "-1.37", "market_id": "17", "circulate_market_value": "246721510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600059", "name": "古越龙山", "hot_rank": 68, "hot_rank_chg": 221, "stock_cnt": 5814, "price": "12.27", "change": "10.04", "market_id": "17", "circulate_market_value": "11184625400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高端黄酒", "xgb_concepts": [{"name": "白酒", "change_pct": 2.82}, {"name": "浙江国企改革", "change_pct": 0.23}, {"name": "黄酒", "change_pct": 4.69}, {"name": "国企改革", "change_pct": 0.42}, {"name": "回购", "change_pct": 0.66}]}, {"code": "300450", "name": "先导智能", "hot_rank": 69, "hot_rank_chg": 8, "stock_cnt": 5814, "price": "34.94", "change": "3.50", "market_id": "33", "circulate_market_value": "54485922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 70, "hot_rank_chg": -15, "stock_cnt": 5814, "price": "17.65", "change": "-2.11", "market_id": "17", "circulate_market_value": "39171576000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 71, "hot_rank_chg": 15, "stock_cnt": 5814, "price": "31.13", "change": "-0.64", "market_id": "17", "circulate_market_value": "106245123000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 72, "hot_rank_chg": 19, "stock_cnt": 5814, "price": "389.00", "change": "-0.99", "market_id": "33", "circulate_market_value": "488087540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 73, "hot_rank_chg": -41, "stock_cnt": 5814, "price": "42.41", "change": "-0.66", "market_id": "17", "circulate_market_value": "17658154000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 75, "hot_rank_chg": -33, "stock_cnt": 5814, "price": "6.58", "change": "-0.75", "market_id": "33", "circulate_market_value": "7651535400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.65}, {"name": "新疆概念", "change_pct": -0.72}, {"name": "阿里巴巴概念股", "change_pct": -0.88}, {"name": "腾讯概念股", "change_pct": -1.19}, {"name": "短剧/互动影游", "change_pct": -0.37}, {"name": "IP经济/谷子经济", "change_pct": -0.48}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 76, "hot_rank_chg": -22, "stock_cnt": 5814, "price": "36.26", "change": "-2.00", "market_id": "17", "circulate_market_value": "53011932000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601118", "name": "海南橡胶", "hot_rank": 77, "hot_rank_chg": 277, "stock_cnt": 5814, "price": "6.37", "change": "10.02", "market_id": "17", "circulate_market_value": "27259955000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "天然橡胶", "xgb_concepts": [{"name": "农业种植", "change_pct": 2.81}, {"name": "橡胶", "change_pct": 2.55}, {"name": "土地流转", "change_pct": 1.41}, {"name": "农垦", "change_pct": 2.13}, {"name": "海南概念", "change_pct": 0.79}, {"name": "自由贸易港", "change_pct": 0.79}, {"name": "海南自由贸易港", "change_pct": 0.92}, {"name": "大农业", "change_pct": 1.07}, {"name": "可降解塑料", "change_pct": -0.01}, {"name": "大消费", "change_pct": 1.74}, {"name": "免税店概念", "change_pct": 1.24}, {"name": "自贸区", "change_pct": 0.49}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 78, "hot_rank_chg": 40, "stock_cnt": 5814, "price": "86.87", "change": "-0.33", "market_id": "33", "circulate_market_value": "56726762000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 79, "hot_rank_chg": 45, "stock_cnt": 5814, "price": "14.72", "change": "1.03", "market_id": "17", "circulate_market_value": "10014305600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 80, "hot_rank_chg": -9, "stock_cnt": 5814, "price": "64.28", "change": "-2.16", "market_id": "17", "circulate_market_value": "115023569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603396", "name": "金辰股份", "hot_rank": 81, "hot_rank_chg": 31, "stock_cnt": 5814, "price": "33.50", "change": "-5.04", "market_id": "17", "circulate_market_value": "4640670500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000011", "name": "深物业A", "hot_rank": 82, "hot_rank_chg": -51, "stock_cnt": 5814, "price": "12.24", "change": "9.97", "market_id": "33", "circulate_market_value": "6444060600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "房地产开发", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.53}, {"name": "房地产", "change_pct": 0.83}, {"name": "粤港澳大湾区", "change_pct": -0.02}, {"name": "住房租赁", "change_pct": 1.07}, {"name": "物业管理", "change_pct": 0.96}, {"name": "新型城镇化", "change_pct": -0.29}, {"name": "旧改", "change_pct": 0.49}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 83, "hot_rank_chg": 17, "stock_cnt": 5814, "price": "5.34", "change": "0.19", "market_id": "17", "circulate_market_value": "6506320300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -0.68}, {"name": "煤炭", "change_pct": 0.73}, {"name": "有色金属", "change_pct": -0.48}, {"name": "国企改革", "change_pct": 0.42}, {"name": "河南国企改革", "change_pct": -0.29}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 84, "hot_rank_chg": -24, "stock_cnt": 5814, "price": "291.11", "change": "1.50", "market_id": "33", "circulate_market_value": "1240308240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 85, "hot_rank_chg": 374, "stock_cnt": 5814, "price": "49.30", "change": "10.00", "market_id": "17", "circulate_market_value": "30946434000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药CRO"}, {"code": "300394", "name": "天孚通信", "hot_rank": 86, "hot_rank_chg": -19, "stock_cnt": 5814, "price": "260.77", "change": "1.87", "market_id": "33", "circulate_market_value": "283818950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301047", "name": "义翘神州", "hot_rank": 87, "hot_rank_chg": 501, "stock_cnt": 5814, "price": "159.00", "change": "10.99", "market_id": "33", "circulate_market_value": "19013319000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601127", "name": "赛力斯", "hot_rank": 88, "hot_rank_chg": 29, "stock_cnt": 5814, "price": "46.94", "change": "0.28", "market_id": "17", "circulate_market_value": "73095127000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 89, "hot_rank_chg": -11, "stock_cnt": 5814, "price": "129.96", "change": "-2.27", "market_id": "17", "circulate_market_value": "313430880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 90, "hot_rank_chg": -34, "stock_cnt": 5814, "price": "5.43", "change": "-1.09", "market_id": "33", "circulate_market_value": "4154714200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.34}, {"name": "股权转让", "change_pct": -0.29}, {"name": "优化生育（三孩）", "change_pct": 0.77}, {"name": "强势人气股", "change_pct": -1.12}, {"name": "医药商业", "change_pct": 1.17}, {"name": "保健品", "change_pct": 1.5}, {"name": "民营医院", "change_pct": 0.77}, {"name": "医药", "change_pct": 2.24}, {"name": "食品", "change_pct": 1.44}, {"name": "辅助生殖", "change_pct": 2.16}, {"name": "口腔", "change_pct": 0.22}, {"name": "医美", "change_pct": 1.2}, {"name": "新冠病毒防治", "change_pct": 0.79}]}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 91, "hot_rank_chg": 272, "stock_cnt": 5814, "price": "19.04", "change": "9.99", "market_id": "17", "circulate_market_value": "10719453400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷酸铁锂"}, {"code": "002273", "name": "水晶光电", "hot_rank": 92, "hot_rank_chg": 628, "stock_cnt": 5814, "price": "24.40", "change": "3.79", "market_id": "33", "circulate_market_value": "33332386000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 93, "hot_rank_chg": -50, "stock_cnt": 5814, "price": "411.16", "change": "0.79", "market_id": "17", "circulate_market_value": "167070060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 94, "hot_rank_chg": 50, "stock_cnt": 5814, "price": "205.45", "change": "2.16", "market_id": "17", "circulate_market_value": "56619631000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 95, "hot_rank_chg": 31, "stock_cnt": 5814, "price": "47.20", "change": "3.46", "market_id": "17", "circulate_market_value": "301088910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002962", "name": "五方光电", "hot_rank": 96, "hot_rank_chg": 135, "stock_cnt": 5814, "price": "16.17", "change": "10.00", "market_id": "33", "circulate_market_value": "3383018400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "TGV光学"}, {"code": "605366", "name": "宏柏新材", "hot_rank": 97, "hot_rank_chg": 10, "stock_cnt": 5814, "price": "10.41", "change": "6.77", "market_id": "17", "circulate_market_value": "8045136400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有机硅", "change_pct": 0.34}, {"name": "气凝胶", "change_pct": 0.25}, {"name": "光纤概念", "change_pct": -0.87}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 98, "hot_rank_chg": 11, "stock_cnt": 5814, "price": "4.77", "change": "-0.21", "market_id": "33", "circulate_market_value": "12652666200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.12}, {"name": "装修装饰", "change_pct": -0.11}, {"name": "装配式建筑", "change_pct": 0.14}, {"name": "破净股", "change_pct": 0.65}, {"name": "航天", "change_pct": -0.74}, {"name": "旧改", "change_pct": 0.49}]}, {"code": "002164", "name": "宁波东力", "hot_rank": 99, "hot_rank_chg": 421, "stock_cnt": 5814, "price": "13.26", "change": "10.04", "market_id": "33", "circulate_market_value": "6361818400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能"}, {"code": "301080", "name": "百普赛斯", "hot_rank": 100, "hot_rank_chg": 401, "stock_cnt": 5814, "price": "141.07", "change": "14.69", "market_id": "33", "circulate_market_value": "17892946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "001318", "name": "阳光乳业", "price": 13.04, "change_pct": 10.04, "reason": "公司主营业务为液态乳，包括儿童调制乳、A2牛奶", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1790745624, "break_limit_up_times": 0}, {"code": "000678", "name": "襄阳轴承", "price": 12.89, "change_pct": 9.98, "reason": "1、公司部分精密轴承产品可应用于谐波减速器等，目前已经完成产品试制并送样；\n2、公司是湖北省军民融合企业，根据2024年报东风公司的军车轴承一直指定公司独家供应", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 19.65, "first_limit_up": 1790733780, "break_limit_up_times": 0}, {"code": "600072", "name": "中船科技", "price": 9.7, "change_pct": 9.98, "reason": "中国船舶集团旗下，船舶工业领域龙头；公司是DP2/DP3级动态定位系统龙头，为领航者号、星际归航号、提供风浪中平台稳定技术，是海上回收的基础保障", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.09, "first_limit_up": 1790732193, "break_limit_up_times": 0}, {"code": "002694", "name": "*ST顾地", "price": 2.76, "change_pct": 9.96, "reason": "塑料管道龙头企业，产品广泛应用于建筑给排水；管网改造是旧改重要环节之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.72, "first_limit_up": 1790750235, "break_limit_up_times": 1}, {"code": "603538", "name": "美诺华", "price": 28.59, "change_pct": 10.0, "reason": "诺和诺德司美格鲁肽在中国的核心化合物专利到期；公司储备了减肥多肽类中间体，正在进行GLP-1的研发和技术的储备", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 14.11, "first_limit_up": 1790732915, "break_limit_up_times": 0}, {"code": "600059", "name": "古越龙山", "price": 12.27, "change_pct": 10.04, "reason": "公司拥有中国最大的黄酒生产基地，有少量的白酒生产和销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.87, "first_limit_up": 1790731874, "break_limit_up_times": 4}, {"code": "600081", "name": "东风科技", "price": 11.89, "change_pct": 9.99, "reason": "东风汽车集团旗下汽车零部件生产商；公司智能装备业务涉及机器人产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.0, "first_limit_up": 1790732294, "break_limit_up_times": 1}, {"code": "603919", "name": "金徽酒", "price": 17.4, "change_pct": 9.99, "reason": "公司为甘肃浓香型白酒龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.51, "first_limit_up": 1790746733, "break_limit_up_times": 0}, {"code": "600825", "name": "新华传媒", "price": 10.35, "change_pct": 9.99, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组", "传媒"], "limit_up_days": 7, "turnover_ratio": 1.34, "first_limit_up": 1790731500, "break_limit_up_times": 0}, {"code": "301190", "name": "善水科技", "price": 35.93, "change_pct": 20.01, "reason": "公司主要经营染料中间体、农药和医药中间体的研产销", "plates": ["染料"], "limit_up_days": 3, "turnover_ratio": 7.95, "first_limit_up": 1790731875, "break_limit_up_times": 1}, {"code": "001206", "name": "依依股份", "price": 18.62, "change_pct": 9.98, "reason": "公司专注于宠物卫生护理用品领域，表示与主要客户的调价已基本达成共识，产能利用率处于合理区间", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.35, "first_limit_up": 1790731800, "break_limit_up_times": 0}, {"code": "603948", "name": "建业股份", "price": 21.36, "change_pct": 9.99, "reason": "公司电子化学品板块主要产品包括电子特气超纯氨及湿电子化学品，应用于LED、太阳能、集成电路、半导体等领域，超纯氨已形成年产21,000吨的生产能力，产品质量达到7N等级", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.23, "first_limit_up": 1790732012, "break_limit_up_times": 0}, {"code": "603928", "name": "兴业股份", "price": 13.07, "change_pct": 10.02, "reason": "公司已研发成功半导体光刻胶用酚醛树脂、特种半导体封装用酚醛树脂等一批特种有机合成功能新材料", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.01, "first_limit_up": 1790732460, "break_limit_up_times": 1}, {"code": "688806", "name": "泰诺麦博", "price": 30.67, "change_pct": 19.99, "reason": "公司是面向全球市场的创新生物制药企业，核心产品斯泰度塔单抗注射液为全球同类首创（First-in-Class）重组抗破伤风毒素全人源单克隆抗体药物，被CDE认定为突破性治疗药物并纳入优先审评程序，另一核心产品TNM001已递交NDA并纳入优先审评", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 23.59, "first_limit_up": 1790733473, "break_limit_up_times": 0}, {"code": "600592", "name": "龙溪股份", "price": 16.2, "change_pct": 9.98, "reason": "关节轴承行业龙头，广泛应用于航空军工等领域，也是机器人的主要配套件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.72, "first_limit_up": 1790733644, "break_limit_up_times": 0}, {"code": "002058", "name": "紫竹高科", "price": 20.2, "change_pct": 10.02, "reason": "1、公司核心业务聚焦于铝塑膜业务及汽车检具业务，铝塑膜是软包锂电池电芯封装的关键材料，下游主要应用于3C消费电子、动力、储能三类软包电池；\n2、公司具备《民用核安全电气设备设计许可证》和《民用核安全电气设备制造许可证》，为福清/方家山核电站供货核级压力变送器；公司有能力生产核级的仪器仪表产品", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 1.77, "first_limit_up": 1790731500, "break_limit_up_times": 0}, {"code": "603590", "name": "康辰药业", "price": 32.11, "change_pct": 10.0, "reason": "创新型制药研发企业，主要产品“苏灵”是目前国内血凝酶制剂市场唯一的国家一类新药，在研管线深入布局靶向抗肿瘤药产品系列", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.86, "first_limit_up": 1790733332, "break_limit_up_times": 0}, {"code": "002755", "name": "奥赛康", "price": 13.55, "change_pct": 9.98, "reason": "公司产品剂型主要定位于冻干粉针制剂、固体口服制剂，国内抗消化性溃疡药物质子泵抑制剂注射剂产品细分领域市场占有率第一", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.03, "first_limit_up": 1790735037, "break_limit_up_times": 0}, {"code": "002962", "name": "五方光电", "price": 16.17, "change_pct": 10.0, "reason": "公司表示拓展TGV技术在光学领域的应用", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 17.06, "first_limit_up": 1790732961, "break_limit_up_times": 1}, {"code": "002226", "name": "江南化工", "price": 5.34, "change_pct": 10.1, "reason": "公司民爆与新能源“双核驱动”，截至2025年底新能源装机106万千瓦，风、光电站布局内蒙古、新疆等资源区，受益绿电政策", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.96, "first_limit_up": 1790733948, "break_limit_up_times": 2}, {"code": "000710", "name": "贝瑞基因", "price": 10.87, "change_pct": 10.02, "reason": "公司自主研发了 NLPearl 遗传疾病人工智能临床决策支持系统、CNVisi 智能报告解读系统，为科研和临床工作者提供智能决策支持", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.52, "first_limit_up": 1790731986, "break_limit_up_times": 0}, {"code": "601118", "name": "海南橡胶", "price": 6.37, "change_pct": 10.02, "reason": "中国天然橡胶产业龙头，拥有341万亩橡胶园（国内第一）、20家橡胶基地分公司", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 1.47, "first_limit_up": 1790731808, "break_limit_up_times": 0}, {"code": "000504", "name": "南华生物", "price": 12.42, "change_pct": 10.01, "reason": "湖南省政府旗下，干细胞储存和节能环保双主业，其中生物医药板块主要为细胞医疗服务，为客户提供干细胞、免疫细胞等生物资源的检测及储存服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 22.51, "first_limit_up": 1790734962, "break_limit_up_times": 0}, {"code": "002316", "name": "亚联发展", "price": 4.95, "change_pct": 10.0, "reason": "公司基于华为Atlas人工智能计算机平台开发的“无人值守变电站智能运检系统”已在南方电网顺利使用，基于华为Tai Shan200系列开发的“变电站智能网关系统”能够为电力行业客户提供网络安全解决方案", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 8.7, "first_limit_up": 1790731983, "break_limit_up_times": 0}, {"code": "603127", "name": "昭衍新药", "price": 49.3, "change_pct": 10.0, "reason": "国内创新药龙头；公司核心业务为药物的非临床评价服务，是新药研发链条中非临床安全性评价的关键环节，主要为创新药客户提供药物非临床药理毒理学评价，受益于国内创新药融资与BD授权交易回暖带来的行业需求增长", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.83, "first_limit_up": 1790736550, "break_limit_up_times": 1}, {"code": "603185", "name": "弘元绿能", "price": 15.15, "change_pct": 10.02, "reason": "公司为国内光伏硅片龙头", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.48, "first_limit_up": 1790746699, "break_limit_up_times": 0}, {"code": "000692", "name": "惠天热电", "price": 4.59, "change_pct": 10.07, "reason": "沈阳地区规模最大的国有专业化供热公司；沈阳市发改委确定公司为70万千瓦风电项目业主", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 7.08, "first_limit_up": 1790732547, "break_limit_up_times": 4}, {"code": "605288", "name": "凯迪股份", "price": 71.83, "change_pct": 10.0, "reason": "公司是线性驱动系统龙头，网传资料显示，公司招聘电机研发工程师，工作让内容包括负责机器人用伺服电机电磁方案分析及结构方案设计", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.0, "first_limit_up": 1790733628, "break_limit_up_times": 1}, {"code": "605388", "name": "均瑶健康", "price": 7.39, "change_pct": 9.97, "reason": "国内最早生产与销售常温乳酸菌饮品的品牌企业之一；全资子公司奇梦星主要负责公司IP产品及母婴渠道产品的经营，目前已推出了“小黄人”系列乳酸菌饮品、“功夫熊猫”系列常温奶酪棒等产品", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 1.92, "first_limit_up": 1790731500, "break_limit_up_times": 0}, {"code": "002242", "name": "九阳股份", "price": 12.5, "change_pct": 10.04, "reason": "豆浆机龙头；公司表示与华为不存在市场传闻所称的战略合作关系", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 4.59, "first_limit_up": 1790731500, "break_limit_up_times": 1}, {"code": "603188", "name": "亚邦股份", "price": 5.4, "change_pct": 9.98, "reason": "公司主要从事染料及农药的生产销售", "plates": ["染料"], "limit_up_days": 2, "turnover_ratio": 5.76, "first_limit_up": 1790731926, "break_limit_up_times": 0}, {"code": "300893", "name": "松原安全", "price": 15.13, "change_pct": 19.98, "reason": "国内领先的汽车被动安全系统一级供应商之一", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 8.94, "first_limit_up": 1790734482, "break_limit_up_times": 1}, {"code": "605287", "name": "德才股份", "price": 37.39, "change_pct": 10.0, "reason": "1、控股孙公司奇想无限作为漫剧制作以及提出AIGC领域智能体一站式解决方案的团队，受邀参与火山引擎大模型游戏+漫剧 AI 工坊”广州企业沙龙；\n2、公司主营业务涵盖内装装饰工程、建筑幕墙工程、智能化工程、古建筑工程等", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 5.47, "first_limit_up": 1790734800, "break_limit_up_times": 3}, {"code": "002419", "name": "天虹股份", "price": 5.09, "change_pct": 9.94, "reason": "1、深圳本地股；国内拥有门店最多的零售商；已确立百货、超市、购物中心、便利店四大实体业态与移动生活消费服务平台天虹APP的线上线下融合的多业态发展格局；\n2、公司自有品牌开发并推出了天优酱香酒，生产工厂位于贵州省仁怀市茅台镇核心产区，占地面积1200余亩", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.51, "first_limit_up": 1790744886, "break_limit_up_times": 0}, {"code": "002454", "name": "松芝股份", "price": 5.61, "change_pct": 10.0, "reason": "新能源汽车热管理系统及零部件供应商，2025年净利润同比增长81.32%", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 2.52, "first_limit_up": 1790734041, "break_limit_up_times": 0}, {"code": "600241", "name": "时代万恒", "price": 9.72, "change_pct": 9.95, "reason": "控股子公司九夷锂能主营业务为锂电池的研产销，拥有国内领先的圆柱形锂电池全自动化产线，目标市场定位于高端电动工具领域，开拓了博世、飞利浦、斯蒂尔、宝时得等优质客户", "plates": ["锂电池"], "limit_up_days": 3, "turnover_ratio": 2.61, "first_limit_up": 1790731500, "break_limit_up_times": 0}, {"code": "002041", "name": "登海种业", "price": 10.23, "change_pct": 10.0, "reason": "国内杂交玉米种子龙头企业", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 3.92, "first_limit_up": 1790746113, "break_limit_up_times": 0}, {"code": "002388", "name": "新亚制程", "price": 9.1, "change_pct": 10.04, "reason": "公司产品已批量用于人型机器人主板，与多家客户建立合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.05, "first_limit_up": 1790731896, "break_limit_up_times": 1}, {"code": "002164", "name": "宁波东力", "price": 13.26, "change_pct": 10.04, "reason": "公司的产品包括行星减速器等，杭州湾电机、减速器部分车间已投入生产；同时拟实施年产52万台电机及减速机项目", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.41, "first_limit_up": 1790733672, "break_limit_up_times": 1}, {"code": "605577", "name": "龙版传媒", "price": 16.28, "change_pct": 10.0, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 2.31, "first_limit_up": 1790731812, "break_limit_up_times": 0}, {"code": "600663", "name": "陆家嘴", "price": 10.11, "change_pct": 10.01, "reason": "陆家嘴金融贸易区城市开发商，公司以 “商业地产 + 商业运营 + 金融服务” 为核心格局，聚焦商办楼宇、高端住宅开发及租赁", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 0.93, "first_limit_up": 1790738008, "break_limit_up_times": 0}, {"code": "688185", "name": "康希诺", "price": 102.64, "change_pct": 20.0, "reason": "国内创新疫苗研发先进企业，与德普世生物达成mRNA治疗型肿瘤疫苗战略合作", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.32, "first_limit_up": 1790732283, "break_limit_up_times": 1}, {"code": "002188", "name": "中天服务", "price": 6.4, "change_pct": 9.97, "reason": "公司主营物业管理", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 9.13, "first_limit_up": 1790737740, "break_limit_up_times": 0}, {"code": "600356", "name": "恒丰纸业", "price": 11.46, "change_pct": 9.98, "reason": "国内卷烟辅料龙头，五大卷烟辅料供应商之一；公司主要业务为特种纸、纸浆的生产和销售", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.15, "first_limit_up": 1790731943, "break_limit_up_times": 0}, {"code": "000911", "name": "*ST广糖", "price": 5.4, "change_pct": 9.98, "reason": "公司是国内糖业龙头之一，是海天味业、加多宝、娃哈哈等供应商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.78, "first_limit_up": 1790746860, "break_limit_up_times": 0}, {"code": "002866", "name": "传艺科技", "price": 16.9, "change_pct": 10.03, "reason": "1、公司在钠电池正负极材料、电解液等关键环节进行一体化布局并实现量产交付，产品可应用于A00级车、小动力车、电动工具及储能等领域；\n2、公司专注于柔性线路板（FPC）的设计、研发、制造和销售，为客户提供定制化解决方案；\n3、消费电子零组件行业头部企业之一，拟定增募资不超8.71亿元，加码智能化产线升级", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 18.65, "first_limit_up": 1790731806, "break_limit_up_times": 3}, {"code": "603906", "name": "龙蟠科技", "price": 19.04, "change_pct": 9.99, "reason": "公司签署锂矿投资条款清单拟认购GL1股份并支付7500万美元预付款；25年净利润同比减亏", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 6.57, "first_limit_up": 1790734283, "break_limit_up_times": 2}, {"code": "000011", "name": "深物业A", "price": 12.24, "change_pct": 9.97, "reason": "深圳国资委控股的深圳投资控股公司旗下；主营房地产开发、房屋租赁、物业管理，餐饮业务和仓储业务", "plates": ["房地产"], "limit_up_days": 3, "turnover_ratio": 17.07, "first_limit_up": 1790738742, "break_limit_up_times": 2}, {"code": "002856", "name": "*ST美芝", "price": 20.22, "change_pct": 10.01, "reason": "公司主要业务为建筑装饰工程的设计与施工", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 7.09, "first_limit_up": 1790734650, "break_limit_up_times": 3}, {"code": "605303", "name": "园林股份", "price": 28.66, "change_pct": 10.02, "reason": "公司拟收购存储芯片及模组企业华澜微93.5%股份", "plates": ["国产芯片", "资产重组"], "limit_up_days": 2, "turnover_ratio": 0.11, "first_limit_up": 1790731500, "break_limit_up_times": 0}, {"code": "605011", "name": "杭州热电", "price": 19.21, "change_pct": 10.02, "reason": "实控人为杭州国资委，公司主营工业园区热电联产、集中供热，提供的主要产品是蒸汽与电力，已覆盖上海、杭州等地区", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1790732436, "break_limit_up_times": 2}, {"code": "600131", "name": "国网信通", "price": 15.39, "change_pct": 10.01, "reason": "1、公司主要是为企业提供云应用软件的定制化设计、研发及应用推广，主要包括电力营销、ERP、企业门户、能源交易；\n2、公司的云网融合业务产品立足于服务电力能源行业智能化相关应用，具备为虚拟电厂类应用提供服务的能力", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.25, "first_limit_up": 1790748529, "break_limit_up_times": 0}, {"code": "000838", "name": "*ST发展", "price": 2.45, "change_pct": 9.87, "reason": "重庆地区优质地产商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.6, "first_limit_up": 1790748942, "break_limit_up_times": 1}, {"code": "001266", "name": "宏英智能", "price": 39.96, "change_pct": 9.99, "reason": "公司已在电网侧储能完成多个大型项目，浸没式储能已经在数据中心、电信基站等商用化", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.79, "first_limit_up": 1790747985, "break_limit_up_times": 0}, {"code": "603739", "name": "蔚蓝生物", "price": 14.04, "change_pct": 10.03, "reason": "公司在猪用疫苗领域布局多款产品，其中猪伪狂犬病病毒基因缺失灭活疫苗已获新兽药证书，猪圆环-副猪-链球菌三联灭活疫苗已通过产品质量复核检验", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 3.64, "first_limit_up": 1790732937, "break_limit_up_times": 0}, {"code": "603200", "name": "上海洗霸", "price": 44.74, "change_pct": 10.01, "reason": "公司应用于eVTOL的高比能软包锂离子固态电池已设计完成", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 13.87, "first_limit_up": 1790734276, "break_limit_up_times": 2}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};