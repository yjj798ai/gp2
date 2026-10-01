const UPDATE_TIME = "2026-10-01 01:46";
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
    "etfName": "生物科技ETF",
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
    "name": "重组蛋白",
    "rise": 3.78,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物科技ETF",
    "code": "885955"
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
    "name": "存储芯片",
    "rise": -2.73,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续255天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
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
    "name": "黄金概念",
    "rise": 0.42,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "细胞免疫治疗",
    "rise": 3.45,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 2,
    "etfName": "生物医药ETF",
    "code": "885769"
  },
  {
    "name": "超级品牌",
    "rise": 1.48,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 3,
    "etfName": "食品饮料ETF",
    "code": "885761"
  },
  {
    "name": "机器人概念",
    "rise": -0.6,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "粮食概念",
    "rise": 2.06,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -3,
    "etfName": "粮食ETF",
    "code": "885995"
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
    "name": "MLCC概念",
    "rise": -2.42,
    "rate": 0,
    "tag": "",
    "hotTag": "连续42天上榜",
    "rankChg": 1,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "国企改革",
    "rise": 0.34,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "央企科技ETF",
    "code": "886021"
  }
];
const THS_EVENTS = [
  {
    "title": "中国气象局：11月前后或形成有监测记录来最强厄尔尼诺事件",
    "desc": "",
    "heat": 365783,
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
    "heat": 365348,
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
    "title": "10月1日起全国将实施居民购房贷款贴息政策",
    "desc": "",
    "heat": 357622,
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
    "title": "需求复苏 染料产业链景气度持续上行",
    "desc": "",
    "heat": 230207,
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
    "heat": 61306,
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
    "heat": 12206,
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
    "heat": 8831,
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
    "title": "美国特朗普政府推出人工智能驱动的联邦政府信息网站",
    "desc": "",
    "heat": 721,
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
    "title": "2026金融街论坛年会将于10月19日在京开幕",
    "desc": "",
    "heat": 701,
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
    "title": "机构：AI促进电子级树脂升级迭代，相关公司有望受益",
    "desc": "",
    "heat": 0,
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
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5839,
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
    "code": "000678",
    "name": "襄阳轴承",
    "hot_rank": 3,
    "hot_rank_chg": 3,
    "stock_cnt": 5839,
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
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 6,
    "hot_rank_chg": 2,
    "stock_cnt": 5839,
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
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 7,
    "hot_rank_chg": 11,
    "stock_cnt": 5839,
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
    "code": "002242",
    "name": "九阳股份",
    "hot_rank": 8,
    "hot_rank_chg": 6,
    "stock_cnt": 5839,
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
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": -4,
    "stock_cnt": 5839,
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
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 14,
    "hot_rank_chg": -11,
    "stock_cnt": 5839,
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
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 22,
    "hot_rank_chg": 9,
    "stock_cnt": 5839,
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
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 28,
    "hot_rank_chg": -16,
    "stock_cnt": 5839,
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
    "code": "600241",
    "name": "时代万恒",
    "hot_rank": 31,
    "hot_rank_chg": 51,
    "stock_cnt": 5839,
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
        "change_pct": -0.21
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.26
      },
      {
        "name": "振兴东北",
        "change_pct": 1.2
      },
      {
        "name": "国企改革",
        "change_pct": 0.42
      },
      {
        "name": "自贸区",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 33,
    "hot_rank_chg": 37,
    "stock_cnt": 5839,
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
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 38,
    "hot_rank_chg": -15,
    "stock_cnt": 5839,
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
    "code": "600059",
    "name": "古越龙山",
    "hot_rank": 39,
    "hot_rank_chg": 30,
    "stock_cnt": 5839,
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
    "code": "605366",
    "name": "宏柏新材",
    "hot_rank": 48,
    "hot_rank_chg": 10,
    "stock_cnt": 5839,
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
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 50,
    "hot_rank_chg": 62,
    "stock_cnt": 5839,
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
        "change_pct": -1.08
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
        "name": "有机硅",
        "change_pct": 0.34
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.26
      },
      {
        "name": "华为产业链",
        "change_pct": -1.16
      },
      {
        "name": "供应链金融",
        "change_pct": 0.37
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 54,
    "hot_rank_chg": -30,
    "stock_cnt": 5839,
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
    "code": "000710",
    "name": "贝瑞基因",
    "hot_rank": 56,
    "hot_rank_chg": 45,
    "stock_cnt": 5839,
    "price": "10.87",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "3647182400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI医疗",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 2.38
      },
      {
        "name": "体外诊断",
        "change_pct": 2.0
      },
      {
        "name": "医疗器械",
        "change_pct": 0.99
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.77
      },
      {
        "name": "人工智能",
        "change_pct": -0.83
      },
      {
        "name": "基因测序",
        "change_pct": 2.65
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.16
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.79
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.61
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.3
      },
      {
        "name": "AI医疗",
        "change_pct": 1.27
      }
    ]
  },
  {
    "code": "002531",
    "name": "天顺风能",
    "hot_rank": 61,
    "hot_rank_chg": 68,
    "stock_cnt": 5839,
    "price": "7.98",
    "change": "4.45",
    "market_id": "33",
    "circulate_market_value": "14259211000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "海工装备",
        "change_pct": 0.19
      },
      {
        "name": "风电",
        "change_pct": -0.02
      },
      {
        "name": "船舶",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 64,
    "hot_rank_chg": -23,
    "stock_cnt": 5839,
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
    "code": "600072",
    "name": "中船科技",
    "hot_rank": 66,
    "hot_rank_chg": 50,
    "stock_cnt": 5839,
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
        "change_pct": 0.53
      },
      {
        "name": "军工集团",
        "change_pct": 0.15
      },
      {
        "name": "航母",
        "change_pct": 0.32
      },
      {
        "name": "风电",
        "change_pct": -0.02
      },
      {
        "name": "军工",
        "change_pct": -0.53
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "国企改革",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "605388",
    "name": "均瑶健康",
    "hot_rank": 68,
    "hot_rank_chg": 65,
    "stock_cnt": 5839,
    "price": "7.39",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "4437576800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "益生菌",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.56
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.77
      },
      {
        "name": "食品",
        "change_pct": 1.44
      },
      {
        "name": "大农业",
        "change_pct": 1.07
      },
      {
        "name": "植物奶",
        "change_pct": 1.83
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": 2.55
      },
      {
        "name": "饮料",
        "change_pct": 1.83
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 70,
    "hot_rank_chg": -17,
    "stock_cnt": 5839,
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
    "code": "601238",
    "name": "广汽集团",
    "hot_rank": 74,
    "hot_rank_chg": -7,
    "stock_cnt": 5839,
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
    "code": "603188",
    "name": "亚邦股份",
    "hot_rank": 83,
    "hot_rank_chg": 84,
    "stock_cnt": 5839,
    "price": "5.40",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "3078918000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "染料产业链",
    "xgb_concepts": [
      {
        "name": "染料",
        "change_pct": 2.78
      },
      {
        "name": "江苏国企改革",
        "change_pct": 0.42
      },
      {
        "name": "国企改革",
        "change_pct": 0.42
      },
      {
        "name": "国资入股",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "002226",
    "name": "江南化工",
    "hot_rank": 88,
    "hot_rank_chg": 118,
    "stock_cnt": 5839,
    "price": "5.34",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "14145223000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "风电",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.53
      },
      {
        "name": "一带一路",
        "change_pct": 0.23
      },
      {
        "name": "人工智能",
        "change_pct": -0.83
      },
      {
        "name": "军工集团",
        "change_pct": 0.15
      },
      {
        "name": "民爆",
        "change_pct": 0.28
      },
      {
        "name": "风电",
        "change_pct": -0.02
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.08
      },
      {
        "name": "军工",
        "change_pct": -0.53
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 0.42
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "000692",
    "name": "惠天热电",
    "hot_rank": 89,
    "hot_rank_chg": 58,
    "stock_cnt": 5839,
    "price": "4.59",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "2445703400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "供热",
    "xgb_concepts": [
      {
        "name": "振兴东北",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 90,
    "hot_rank_chg": -51,
    "stock_cnt": 5839,
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
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 92,
    "hot_rank_chg": -9,
    "stock_cnt": 5839,
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
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 94,
    "hot_rank_chg": -32,
    "stock_cnt": 5839,
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
    "code": "600663",
    "name": "陆家嘴",
    "hot_rank": 95,
    "hot_rank_chg": 126,
    "stock_cnt": 5839,
    "price": "10.11",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "39776963000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "房地产开发",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.64
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.71
      },
      {
        "name": "房地产",
        "change_pct": 0.83
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 0.66
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.79
      },
      {
        "name": "物业管理",
        "change_pct": 0.96
      },
      {
        "name": "国企改革",
        "change_pct": 0.42
      },
      {
        "name": "自贸区",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "002640",
    "name": "跨境通",
    "hot_rank": 99,
    "hot_rank_chg": -35,
    "stock_cnt": 5839,
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
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000002", "name": "万科A", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5839, "price": "4.26", "change": "4.41", "market_id": "33", "circulate_market_value": "41386382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": 0.11}, {"name": "深圳本地股", "change_pct": -0.53}, {"name": "股权转让", "change_pct": -0.29}, {"name": "房地产", "change_pct": 0.83}, {"name": "养老产业", "change_pct": 0.18}, {"name": "冷链", "change_pct": -0.07}, {"name": "住房租赁", "change_pct": 1.07}, {"name": "破净股", "change_pct": 0.65}, {"name": "冰雪产业", "change_pct": -0.19}, {"name": "物业管理", "change_pct": 0.96}, {"name": "旧改", "change_pct": 0.49}, {"name": "REITs", "change_pct": 1.29}]}, {"code": "002487", "name": "大金重工", "hot_rank": 2, "hot_rank_chg": 11, "stock_cnt": 5839, "price": "46.29", "change": "7.83", "market_id": "33", "circulate_market_value": "29205299000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5839, "price": "12.89", "change": "9.98", "market_id": "33", "circulate_market_value": "5924396100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "机器人轴承", "xgb_concepts": [{"name": "农机", "change_pct": -0.5}, {"name": "汽车零部件", "change_pct": -0.08}, {"name": "新能源汽车", "change_pct": -0.26}, {"name": "新能源车零部件", "change_pct": -0.32}, {"name": "大农业", "change_pct": 1.07}]}, {"code": "001246", "name": "力勤资源", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5839, "price": "65.09", "change": "206.59", "market_id": "33", "circulate_market_value": "10240386700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5839, "price": "27.47", "change": "5.49", "market_id": "17", "circulate_market_value": "61922275000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 6, "hot_rank_chg": 2, "stock_cnt": 5839, "price": "10.35", "change": "9.99", "market_id": "17", "circulate_market_value": "10814589200.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "拟收购界面财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.5}, {"name": "上海国企改革", "change_pct": 0.71}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -0.81}, {"name": "国企改革", "change_pct": 0.42}]}, {"code": "000011", "name": "深物业A", "hot_rank": 7, "hot_rank_chg": 11, "stock_cnt": 5839, "price": "12.24", "change": "9.97", "market_id": "33", "circulate_market_value": "6444060600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "房地产开发", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.53}, {"name": "房地产", "change_pct": 0.83}, {"name": "粤港澳大湾区", "change_pct": -0.02}, {"name": "住房租赁", "change_pct": 1.07}, {"name": "物业管理", "change_pct": 0.96}, {"name": "新型城镇化", "change_pct": -0.29}, {"name": "旧改", "change_pct": 0.49}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 8, "hot_rank_chg": 6, "stock_cnt": 5839, "price": "12.50", "change": "10.04", "market_id": "33", "circulate_market_value": "9522070300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "厨房小家电", "xgb_concepts": [{"name": "小家电", "change_pct": 0.04}, {"name": "机器人", "change_pct": -0.67}, {"name": "家电", "change_pct": -0.34}, {"name": "华为鸿蒙", "change_pct": -1.12}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "7.40", "change": "3.64", "market_id": "17", "circulate_market_value": "18636973000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.17}, {"name": "工业大麻", "change_pct": 0.74}, {"name": "中药", "change_pct": 1.34}, {"name": "强势人气股", "change_pct": -1.12}, {"name": "保健品", "change_pct": 1.5}, {"name": "民营医院", "change_pct": 0.77}, {"name": "医药", "change_pct": 2.24}, {"name": "化学原料药", "change_pct": 2.12}, {"name": "流感", "change_pct": 1.93}, {"name": "振兴东北", "change_pct": 1.2}, {"name": "食品", "change_pct": 1.44}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 10, "hot_rank_chg": -1, "stock_cnt": 5839, "price": "23.15", "change": "-8.10", "market_id": "17", "circulate_market_value": "4888427700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 11, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "13.14", "change": "-1.65", "market_id": "17", "circulate_market_value": "8433031500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 12, "hot_rank_chg": -2, "stock_cnt": 5839, "price": "54.86", "change": "-3.94", "market_id": "17", "circulate_market_value": "134607030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 13, "hot_rank_chg": 19, "stock_cnt": 5839, "price": "450.40", "change": "-0.14", "market_id": "17", "circulate_market_value": "13551509000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 14, "hot_rank_chg": -11, "stock_cnt": 5839, "price": "3.70", "change": "-1.60", "market_id": "33", "circulate_market_value": "8667946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.43}, {"name": "强势人气股", "change_pct": -1.12}, {"name": "人工智能", "change_pct": -0.83}, {"name": "VR&AR", "change_pct": -1.04}, {"name": "京津冀", "change_pct": -0.15}, {"name": "装修装饰", "change_pct": -0.11}, {"name": "住房租赁", "change_pct": 1.07}, {"name": "破净股", "change_pct": 0.65}, {"name": "数字经济", "change_pct": -1.41}, {"name": "房产经纪", "change_pct": -0.91}, {"name": "物业管理", "change_pct": 0.96}, {"name": "华为产业链", "change_pct": -1.16}, {"name": "AI大模型/智能体", "change_pct": -0.61}]}, {"code": "601127", "name": "赛力斯", "hot_rank": 15, "hot_rank_chg": 85, "stock_cnt": 5839, "price": "46.94", "change": "0.28", "market_id": "17", "circulate_market_value": "73095127000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 16, "hot_rank_chg": -5, "stock_cnt": 5839, "price": "21.12", "change": "3.68", "market_id": "17", "circulate_market_value": "16725010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 17, "hot_rank_chg": 12, "stock_cnt": 5839, "price": "167.34", "change": "4.16", "market_id": "17", "circulate_market_value": "413878720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 18, "hot_rank_chg": 3, "stock_cnt": 5839, "price": "28.59", "change": "10.00", "market_id": "17", "circulate_market_value": "9632541400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "JH389"}, {"code": "002866", "name": "传艺科技", "hot_rank": 19, "hot_rank_chg": 28, "stock_cnt": 5839, "price": "16.90", "change": "10.03", "market_id": "33", "circulate_market_value": "3105694300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "603200", "name": "上海洗霸", "hot_rank": 20, "hot_rank_chg": 7, "stock_cnt": 5839, "price": "44.74", "change": "10.01", "market_id": "17", "circulate_market_value": "7850979800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "688137", "name": "近岸蛋白", "hot_rank": 21, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "160.39", "change": "13.47", "market_id": "17", "circulate_market_value": "11214060300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 22, "hot_rank_chg": 9, "stock_cnt": 5839, "price": "12.42", "change": "10.01", "market_id": "33", "circulate_market_value": "4087700200.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "细胞存储", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.5}, {"name": "锂电池", "change_pct": -0.21}, {"name": "ST摘帽", "change_pct": 0.09}, {"name": "湖南国企改革", "change_pct": 0.47}, {"name": "污水处理", "change_pct": -0.2}, {"name": "智慧城市", "change_pct": -1.13}, {"name": "新能源汽车", "change_pct": -0.26}, {"name": "环保", "change_pct": -0.42}, {"name": "动力电池回收", "change_pct": 0.63}, {"name": "干细胞", "change_pct": 3.45}, {"name": "国企改革", "change_pct": 0.42}]}, {"code": "002074", "name": "国轩高科", "hot_rank": 23, "hot_rank_chg": -8, "stock_cnt": 5839, "price": "29.50", "change": "2.86", "market_id": "33", "circulate_market_value": "51231402000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 24, "hot_rank_chg": -8, "stock_cnt": 5839, "price": "17.09", "change": "4.97", "market_id": "33", "circulate_market_value": "7826390400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301190", "name": "善水科技", "hot_rank": 25, "hot_rank_chg": 23, "stock_cnt": 5839, "price": "35.93", "change": "20.01", "market_id": "33", "circulate_market_value": "6534014200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "染料中间体"}, {"code": "605577", "name": "龙版传媒", "hot_rank": 26, "hot_rank_chg": 19, "stock_cnt": 5839, "price": "16.28", "change": "10.00", "market_id": "17", "circulate_market_value": "7235555600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI漫剧"}, {"code": "603127", "name": "昭衍新药", "hot_rank": 27, "hot_rank_chg": 1, "stock_cnt": 5839, "price": "49.30", "change": "10.00", "market_id": "17", "circulate_market_value": "30946434000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药CRO"}, {"code": "000592", "name": "平潭发展", "hot_rank": 28, "hot_rank_chg": -16, "stock_cnt": 5839, "price": "8.53", "change": "-2.40", "market_id": "33", "circulate_market_value": "16335739000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.11}, {"name": "林业", "change_pct": -0.01}, {"name": "碳中和", "change_pct": 0.51}, {"name": "自贸区", "change_pct": 0.49}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 29, "hot_rank_chg": 7, "stock_cnt": 5839, "price": "808.44", "change": "-0.56", "market_id": "33", "circulate_market_value": "897317470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 30, "hot_rank_chg": 12, "stock_cnt": 5839, "price": "47.20", "change": "3.46", "market_id": "17", "circulate_market_value": "301088910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600241", "name": "时代万恒", "hot_rank": 31, "hot_rank_chg": 51, "stock_cnt": 5839, "price": "9.72", "change": "9.96", "market_id": "17", "circulate_market_value": "2860616600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "锂电池", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.21}, {"name": "中日韩自贸区", "change_pct": 0.9}, {"name": "新能源汽车", "change_pct": -0.26}, {"name": "振兴东北", "change_pct": 1.2}, {"name": "国企改革", "change_pct": 0.42}, {"name": "自贸区", "change_pct": 0.49}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 32, "hot_rank_chg": 31, "stock_cnt": 5839, "price": "291.11", "change": "1.50", "market_id": "33", "circulate_market_value": "1240308240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601118", "name": "海南橡胶", "hot_rank": 33, "hot_rank_chg": 37, "stock_cnt": 5839, "price": "6.37", "change": "10.02", "market_id": "17", "circulate_market_value": "27259955000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "天然橡胶", "xgb_concepts": [{"name": "农业种植", "change_pct": 2.81}, {"name": "橡胶", "change_pct": 2.55}, {"name": "土地流转", "change_pct": 1.41}, {"name": "农垦", "change_pct": 2.13}, {"name": "海南概念", "change_pct": 0.79}, {"name": "自由贸易港", "change_pct": 0.79}, {"name": "海南自由贸易港", "change_pct": 0.92}, {"name": "大农业", "change_pct": 1.07}, {"name": "可降解塑料", "change_pct": -0.01}, {"name": "大消费", "change_pct": 1.74}, {"name": "免税店概念", "change_pct": 1.24}, {"name": "自贸区", "change_pct": 0.49}]}, {"code": "603949", "name": "雪龙集团", "hot_rank": 34, "hot_rank_chg": 3, "stock_cnt": 5839, "price": "18.41", "change": "-9.98", "market_id": "17", "circulate_market_value": "3869879100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 35, "hot_rank_chg": -2, "stock_cnt": 5839, "price": "37.30", "change": "-0.96", "market_id": "17", "circulate_market_value": "17883985000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 36, "hot_rank_chg": -16, "stock_cnt": 5839, "price": "46.62", "change": "-6.20", "market_id": "17", "circulate_market_value": "39466316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 37, "hot_rank_chg": 14, "stock_cnt": 5839, "price": "54.79", "change": "-1.37", "market_id": "17", "circulate_market_value": "246721510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 38, "hot_rank_chg": -15, "stock_cnt": 5839, "price": "10.08", "change": "5.33", "market_id": "17", "circulate_market_value": "36163711000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -0.24}, {"name": "OLED", "change_pct": -1.61}, {"name": "液晶面板/LCD", "change_pct": -1.56}, {"name": "国企改革", "change_pct": 0.42}, {"name": "玻璃基板封装", "change_pct": -0.9}, {"name": "陕西国企改革", "change_pct": -0.08}]}, {"code": "600059", "name": "古越龙山", "hot_rank": 39, "hot_rank_chg": 30, "stock_cnt": 5839, "price": "12.27", "change": "10.04", "market_id": "17", "circulate_market_value": "11184625400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高端黄酒", "xgb_concepts": [{"name": "白酒", "change_pct": 2.82}, {"name": "浙江国企改革", "change_pct": 0.23}, {"name": "黄酒", "change_pct": 4.69}, {"name": "国企改革", "change_pct": 0.42}, {"name": "回购", "change_pct": 0.66}]}, {"code": "001216", "name": "华瓷股份", "hot_rank": 40, "hot_rank_chg": -14, "stock_cnt": 5839, "price": "26.18", "change": "-10.00", "market_id": "33", "circulate_market_value": "6462171700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 41, "hot_rank_chg": 2, "stock_cnt": 5839, "price": "13.33", "change": "-6.59", "market_id": "17", "circulate_market_value": "8877780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 42, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "353.90", "change": "-3.72", "market_id": "17", "circulate_market_value": "237367220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002962", "name": "五方光电", "hot_rank": 43, "hot_rank_chg": 38, "stock_cnt": 5839, "price": "16.17", "change": "10.00", "market_id": "33", "circulate_market_value": "3383018400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "TGV光学"}, {"code": "002119", "name": "康强电子", "hot_rank": 44, "hot_rank_chg": -22, "stock_cnt": 5839, "price": "25.80", "change": "-8.74", "market_id": "33", "circulate_market_value": "9682327200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 45, "hot_rank_chg": -1, "stock_cnt": 5839, "price": "53.64", "change": "-10.00", "market_id": "17", "circulate_market_value": "7666503400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 46, "hot_rank_chg": -16, "stock_cnt": 5839, "price": "14.01", "change": "-8.49", "market_id": "17", "circulate_market_value": "4952857200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 47, "hot_rank_chg": -22, "stock_cnt": 5839, "price": "13.11", "change": "1.24", "market_id": "17", "circulate_market_value": "5041419500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605366", "name": "宏柏新材", "hot_rank": 48, "hot_rank_chg": 10, "stock_cnt": 5839, "price": "10.41", "change": "6.77", "market_id": "17", "circulate_market_value": "8045136400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有机硅", "change_pct": 0.34}, {"name": "气凝胶", "change_pct": 0.25}, {"name": "光纤概念", "change_pct": -0.87}]}, {"code": "000823", "name": "超声电子", "hot_rank": 49, "hot_rank_chg": -15, "stock_cnt": 5839, "price": "23.28", "change": "-4.59", "market_id": "33", "circulate_market_value": "13850021000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002388", "name": "新亚制程", "hot_rank": 50, "hot_rank_chg": 62, "stock_cnt": 5839, "price": "9.10", "change": "10.04", "market_id": "33", "circulate_market_value": "4606633800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池", "xgb_concepts": [{"name": "仪器仪表", "change_pct": -1.08}, {"name": "锂电池", "change_pct": -0.21}, {"name": "ST摘帽", "change_pct": 0.09}, {"name": "有机硅", "change_pct": 0.34}, {"name": "新能源汽车", "change_pct": -0.26}, {"name": "华为产业链", "change_pct": -1.16}, {"name": "供应链金融", "change_pct": 0.37}]}, {"code": "002164", "name": "宁波东力", "hot_rank": 51, "hot_rank_chg": 39, "stock_cnt": 5839, "price": "13.26", "change": "10.04", "market_id": "33", "circulate_market_value": "6361818400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能"}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 52, "hot_rank_chg": 21, "stock_cnt": 5839, "price": "19.04", "change": "9.99", "market_id": "17", "circulate_market_value": "10719453400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷酸铁锂"}, {"code": "600176", "name": "中国巨石", "hot_rank": 53, "hot_rank_chg": -1, "stock_cnt": 5839, "price": "39.41", "change": "-0.71", "market_id": "17", "circulate_market_value": "156520240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 54, "hot_rank_chg": -30, "stock_cnt": 5839, "price": "7.24", "change": "4.32", "market_id": "17", "circulate_market_value": "3317718400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": 1.38}, {"name": "福建自贸/海西概念", "change_pct": 0.11}, {"name": "自贸区", "change_pct": 0.49}]}, {"code": "600667", "name": "太极实业", "hot_rank": 55, "hot_rank_chg": -9, "stock_cnt": 5839, "price": "17.29", "change": "-3.68", "market_id": "17", "circulate_market_value": "36162764000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000710", "name": "贝瑞基因", "hot_rank": 56, "hot_rank_chg": 45, "stock_cnt": 5839, "price": "10.87", "change": "10.02", "market_id": "33", "circulate_market_value": "3647182400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI医疗", "xgb_concepts": [{"name": "精准医疗", "change_pct": 2.38}, {"name": "体外诊断", "change_pct": 2.0}, {"name": "医疗器械", "change_pct": 0.99}, {"name": "优化生育（三孩）", "change_pct": 0.77}, {"name": "人工智能", "change_pct": -0.83}, {"name": "基因测序", "change_pct": 2.65}, {"name": "辅助生殖", "change_pct": 2.16}, {"name": "新冠病毒防治", "change_pct": 0.79}, {"name": "AI大模型/智能体", "change_pct": -0.61}, {"name": "DeepSeek概念股", "change_pct": -1.3}, {"name": "AI医疗", "change_pct": 1.27}]}, {"code": "002058", "name": "紫竹高科", "hot_rank": 57, "hot_rank_chg": 60, "stock_cnt": 5839, "price": "20.20", "change": "10.02", "market_id": "33", "circulate_market_value": "2895989800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "600699", "name": "均胜电子", "hot_rank": 58, "hot_rank_chg": -2, "stock_cnt": 5839, "price": "23.46", "change": "3.12", "market_id": "17", "circulate_market_value": "32742431000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 59, "hot_rank_chg": -10, "stock_cnt": 5839, "price": "16.46", "change": "-3.29", "market_id": "33", "circulate_market_value": "54746397000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 60, "hot_rank_chg": 51, "stock_cnt": 5839, "price": "1258.62", "change": "1.86", "market_id": "17", "circulate_market_value": "1573377700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002531", "name": "天顺风能", "hot_rank": 61, "hot_rank_chg": 68, "stock_cnt": 5839, "price": "7.98", "change": "4.45", "market_id": "33", "circulate_market_value": "14259211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "海工装备", "change_pct": 0.19}, {"name": "风电", "change_pct": -0.02}, {"name": "船舶", "change_pct": 0.58}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 62, "hot_rank_chg": -27, "stock_cnt": 5839, "price": "19.52", "change": "4.38", "market_id": "33", "circulate_market_value": "8829653400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 63, "hot_rank_chg": -23, "stock_cnt": 5839, "price": "14.12", "change": "-5.24", "market_id": "17", "circulate_market_value": "18134014000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 64, "hot_rank_chg": -23, "stock_cnt": 5839, "price": "5.72", "change": "0.17", "market_id": "33", "circulate_market_value": "202300010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.75}, {"name": "手机产业链", "change_pct": -1.44}, {"name": "超高清视频", "change_pct": -0.66}, {"name": "苹果产业链", "change_pct": -1.55}, {"name": "电竞", "change_pct": -0.49}, {"name": "半导体", "change_pct": -2.52}, {"name": "人工智能", "change_pct": -0.83}, {"name": "互联网医疗", "change_pct": 0.54}, {"name": "VR&AR", "change_pct": -1.04}, {"name": "OLED", "change_pct": -1.61}, {"name": "京津冀", "change_pct": -0.15}, {"name": "物联网", "change_pct": -1.06}, {"name": "指纹识别", "change_pct": -1.29}, {"name": "汽车零部件", "change_pct": -0.08}, {"name": "白马股", "change_pct": 0.83}, {"name": "智能制造", "change_pct": -0.87}, {"name": "小米概念股", "change_pct": -1.33}, {"name": "国产芯片", "change_pct": -2.21}, {"name": "液晶面板/LCD", "change_pct": -1.56}, {"name": "全息概念", "change_pct": -1.16}, {"name": "理想汽车概念股", "change_pct": -0.03}, {"name": "MicroLED", "change_pct": -1.48}, {"name": "钙钛矿电池", "change_pct": -0.17}, {"name": "智能手表", "change_pct": -1.03}, {"name": "MiniLED", "change_pct": -1.72}, {"name": "传感器", "change_pct": -1.44}, {"name": "大硅片", "change_pct": -3.1}, {"name": "AI PC", "change_pct": -1.55}, {"name": "华为产业链", "change_pct": -1.16}, {"name": "回购", "change_pct": 0.66}, {"name": "光电共封装CPO", "change_pct": -0.93}, {"name": "智能眼镜/MR头显", "change_pct": -1.45}, {"name": "玻璃基板封装", "change_pct": -0.9}]}, {"code": "300207", "name": "欣旺达", "hot_rank": 65, "hot_rank_chg": -5, "stock_cnt": 5839, "price": "22.00", "change": "2.33", "market_id": "33", "circulate_market_value": "37706366000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600072", "name": "中船科技", "hot_rank": 66, "hot_rank_chg": 50, "stock_cnt": 5839, "price": "9.70", "change": "9.98", "market_id": "17", "circulate_market_value": "10508372000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "风电主机", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.53}, {"name": "军工集团", "change_pct": 0.15}, {"name": "航母", "change_pct": 0.32}, {"name": "风电", "change_pct": -0.02}, {"name": "军工", "change_pct": -0.53}, {"name": "PPP", "change_pct": -0.9}, {"name": "国企改革", "change_pct": 0.42}]}, {"code": "688185", "name": "康希诺", "hot_rank": 67, "hot_rank_chg": 24, "stock_cnt": 5839, "price": "102.64", "change": "20.00", "market_id": "17", "circulate_market_value": "11739234600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "mRNA肿瘤疫苗"}, {"code": "605388", "name": "均瑶健康", "hot_rank": 68, "hot_rank_chg": 65, "stock_cnt": 5839, "price": "7.39", "change": "9.97", "market_id": "17", "circulate_market_value": "4437576800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "益生菌", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.56}, {"name": "优化生育（三孩）", "change_pct": 0.77}, {"name": "食品", "change_pct": 1.44}, {"name": "大农业", "change_pct": 1.07}, {"name": "植物奶", "change_pct": 1.83}, {"name": "幽门螺杆菌概念", "change_pct": 2.55}, {"name": "饮料", "change_pct": 1.83}]}, {"code": "301080", "name": "百普赛斯", "hot_rank": 69, "hot_rank_chg": 28, "stock_cnt": 5839, "price": "141.07", "change": "14.69", "market_id": "33", "circulate_market_value": "17892946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 70, "hot_rank_chg": -17, "stock_cnt": 5839, "price": "6.08", "change": "-0.82", "market_id": "17", "circulate_market_value": "5891723800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": -0.02}]}, {"code": "600371", "name": "万向德农", "hot_rank": 71, "hot_rank_chg": -52, "stock_cnt": 5839, "price": "13.51", "change": "5.22", "market_id": "17", "circulate_market_value": "3952728800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 72, "hot_rank_chg": 69, "stock_cnt": 5839, "price": "17.22", "change": "0.76", "market_id": "33", "circulate_market_value": "57921279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 73, "hot_rank_chg": -18, "stock_cnt": 5839, "price": "79.45", "change": "-4.31", "market_id": "33", "circulate_market_value": "57620045000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601238", "name": "广汽集团", "hot_rank": 74, "hot_rank_chg": -7, "stock_cnt": 5839, "price": "5.84", "change": "4.29", "market_id": "17", "circulate_market_value": "43120794000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": 0.4}, {"name": "车联网/车路云", "change_pct": -1.19}, {"name": "业绩爆雷", "change_pct": 1.52}, {"name": "无人驾驶", "change_pct": -0.62}, {"name": "锂电池", "change_pct": -0.21}, {"name": "石墨烯", "change_pct": -0.56}, {"name": "新能源整车", "change_pct": 1.52}, {"name": "汽车整车", "change_pct": 1.52}, {"name": "复牌股", "change_pct": -7.51}, {"name": "新能源汽车", "change_pct": -0.26}, {"name": "破净股", "change_pct": 0.65}, {"name": "宁德时代概念股", "change_pct": -0.43}, {"name": "独角兽", "change_pct": 0.85}, {"name": "动力电池回收", "change_pct": 0.63}, {"name": "华为汽车", "change_pct": 0.07}, {"name": "大消费", "change_pct": 1.74}, {"name": "华为产业链", "change_pct": -1.16}, {"name": "人形机器人", "change_pct": -0.66}, {"name": "智能座舱", "change_pct": -0.6}, {"name": "飞行汽车/eVTOL", "change_pct": -0.61}]}, {"code": "300450", "name": "先导智能", "hot_rank": 75, "hot_rank_chg": -1, "stock_cnt": 5839, "price": "34.94", "change": "3.50", "market_id": "33", "circulate_market_value": "54485922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 76, "hot_rank_chg": 2, "stock_cnt": 5839, "price": "31.13", "change": "-0.64", "market_id": "17", "circulate_market_value": "106245123000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 77, "hot_rank_chg": -20, "stock_cnt": 5839, "price": "48.57", "change": "-0.39", "market_id": "17", "circulate_market_value": "45200695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 78, "hot_rank_chg": 67, "stock_cnt": 5839, "price": "13.07", "change": "10.02", "market_id": "17", "circulate_market_value": "4453001300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻胶树脂"}, {"code": "605303", "name": "园林股份", "hot_rank": 79, "hot_rank_chg": 78, "stock_cnt": 5839, "price": "28.66", "change": "10.02", "market_id": "17", "circulate_market_value": "4621064100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "复牌"}, {"code": "603823", "name": "百合花", "hot_rank": 80, "hot_rank_chg": -9, "stock_cnt": 5839, "price": "42.41", "change": "-0.66", "market_id": "17", "circulate_market_value": "17658154000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 81, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "17.65", "change": "-2.11", "market_id": "17", "circulate_market_value": "39171576000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 82, "hot_rank_chg": -28, "stock_cnt": 5839, "price": "49.61", "change": "-3.12", "market_id": "33", "circulate_market_value": "56926977000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603188", "name": "亚邦股份", "hot_rank": 83, "hot_rank_chg": 84, "stock_cnt": 5839, "price": "5.40", "change": "9.98", "market_id": "17", "circulate_market_value": "3078918000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "染料产业链", "xgb_concepts": [{"name": "染料", "change_pct": 2.78}, {"name": "江苏国企改革", "change_pct": 0.42}, {"name": "国企改革", "change_pct": 0.42}, {"name": "国资入股", "change_pct": 0.13}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 84, "hot_rank_chg": 44, "stock_cnt": 5839, "price": "1009.01", "change": "-3.54", "market_id": "17", "circulate_market_value": "634519980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603739", "name": "蔚蓝生物", "hot_rank": 85, "hot_rank_chg": 182, "stock_cnt": 5839, "price": "14.04", "change": "10.03", "market_id": "17", "circulate_market_value": "3552525300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "新兽药注册"}, {"code": "300773", "name": "拉卡拉", "hot_rank": 86, "hot_rank_chg": 346, "stock_cnt": 5839, "price": "14.38", "change": "-0.62", "market_id": "33", "circulate_market_value": "14791422000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 87, "hot_rank_chg": -8, "stock_cnt": 5839, "price": "20.04", "change": "-2.81", "market_id": "33", "circulate_market_value": "23576435000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002226", "name": "江南化工", "hot_rank": 88, "hot_rank_chg": 118, "stock_cnt": 5839, "price": "5.34", "change": "10.10", "market_id": "33", "circulate_market_value": "14145223000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "风电", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.53}, {"name": "一带一路", "change_pct": 0.23}, {"name": "人工智能", "change_pct": -0.83}, {"name": "军工集团", "change_pct": 0.15}, {"name": "民爆", "change_pct": 0.28}, {"name": "风电", "change_pct": -0.02}, {"name": "汽车零部件", "change_pct": -0.08}, {"name": "军工", "change_pct": -0.53}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 0.42}, {"name": "雅江电站概念股", "change_pct": 0.04}]}, {"code": "000692", "name": "惠天热电", "hot_rank": 89, "hot_rank_chg": 58, "stock_cnt": 5839, "price": "4.59", "change": "10.07", "market_id": "33", "circulate_market_value": "2445703400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "供热", "xgb_concepts": [{"name": "振兴东北", "change_pct": 1.2}]}, {"code": "600488", "name": "津药药业", "hot_rank": 90, "hot_rank_chg": -51, "stock_cnt": 5839, "price": "6.69", "change": "-3.04", "market_id": "17", "circulate_market_value": "7304721900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 2.24}, {"name": "化学原料药", "change_pct": 2.12}, {"name": "数字经济", "change_pct": -1.41}, {"name": "辅助生殖", "change_pct": 2.16}, {"name": "新冠病毒防治", "change_pct": 0.79}]}, {"code": "600900", "name": "长江电力", "hot_rank": 91, "hot_rank_chg": 88, "stock_cnt": 5839, "price": "28.54", "change": "0.56", "market_id": "17", "circulate_market_value": "698322930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 92, "hot_rank_chg": -9, "stock_cnt": 5839, "price": "6.58", "change": "-0.75", "market_id": "33", "circulate_market_value": "7651535400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.65}, {"name": "新疆概念", "change_pct": -0.72}, {"name": "阿里巴巴概念股", "change_pct": -0.88}, {"name": "腾讯概念股", "change_pct": -1.19}, {"name": "短剧/互动影游", "change_pct": -0.37}, {"name": "IP经济/谷子经济", "change_pct": -0.48}]}, {"code": "301047", "name": "义翘神州", "hot_rank": 93, "hot_rank_chg": -8, "stock_cnt": 5839, "price": "159.00", "change": "10.99", "market_id": "33", "circulate_market_value": "19013319000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 94, "hot_rank_chg": -32, "stock_cnt": 5839, "price": "11.46", "change": "-0.95", "market_id": "17", "circulate_market_value": "20503525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.54}, {"name": "纯碱", "change_pct": 1.03}, {"name": "食品", "change_pct": 1.44}, {"name": "土壤修复", "change_pct": -0.11}, {"name": "东数西算/算力", "change_pct": -1.77}, {"name": "OpenClaw概念", "change_pct": -1.59}, {"name": "DeepSeek概念股", "change_pct": -1.3}]}, {"code": "600663", "name": "陆家嘴", "hot_rank": 95, "hot_rank_chg": 126, "stock_cnt": 5839, "price": "10.11", "change": "10.01", "market_id": "17", "circulate_market_value": "39776963000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "房地产开发", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.64}, {"name": "上海国企改革", "change_pct": 0.71}, {"name": "房地产", "change_pct": 0.83}, {"name": "上海自由贸易港", "change_pct": 0.66}, {"name": "自由贸易港", "change_pct": 0.79}, {"name": "物业管理", "change_pct": 0.96}, {"name": "国企改革", "change_pct": 0.42}, {"name": "自贸区", "change_pct": 0.49}]}, {"code": "002384", "name": "东山精密", "hot_rank": 96, "hot_rank_chg": -37, "stock_cnt": 5839, "price": "167.40", "change": "-2.23", "market_id": "33", "circulate_market_value": "232070260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 97, "hot_rank_chg": -17, "stock_cnt": 5839, "price": "64.28", "change": "-2.16", "market_id": "17", "circulate_market_value": "115023569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301218", "name": "华是科技", "hot_rank": 98, "hot_rank_chg": -22, "stock_cnt": 5839, "price": "69.75", "change": "15.85", "market_id": "33", "circulate_market_value": "5001295500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002640", "name": "跨境通", "hot_rank": 99, "hot_rank_chg": -35, "stock_cnt": 5839, "price": "3.91", "change": "-0.76", "market_id": "33", "circulate_market_value": "6053703600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.17}, {"name": "数字经济", "change_pct": -1.41}, {"name": "拼多多概念股", "change_pct": -1.38}, {"name": "无线耳机", "change_pct": -1.75}, {"name": "网红/MCN", "change_pct": -0.83}]}, {"code": "000858", "name": "五粮液", "hot_rank": 100, "hot_rank_chg": 64, "stock_cnt": 5839, "price": "70.06", "change": "1.88", "market_id": "33", "circulate_market_value": "271938830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};