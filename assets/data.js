const UPDATE_TIME = "2026-10-19 02:56";
const THS_HOT = [
  {
    "name": "兵装重组概念",
    "rise": 3.57,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "飞行汽车(eVTOL)",
    "rise": -0.26,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "航空航天ETF",
    "code": "886066"
  },
  {
    "name": "低空经济",
    "rise": -0.43,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "通用航空ETF",
    "code": "886067"
  },
  {
    "name": "创新药",
    "rise": -0.97,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续140天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": -0.43,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续133天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.07,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续310天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "军工",
    "rise": -0.13,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "军工龙头ETF",
    "code": "885700"
  },
  {
    "name": "DRG/DIP",
    "rise": 2.05,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "医疗器械ETF",
    "code": "885947"
  },
  {
    "name": "冰雪产业",
    "rise": -1.21,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "存储芯片",
    "rise": -0.77,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续263天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "AI应用",
    "rise": -0.55,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续68天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "数字货币",
    "rise": 0.07,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "算力租赁",
    "rise": -0.05,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "青蒿素",
    "rise": 1.4,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885852"
  },
  {
    "name": "CRO概念",
    "rise": -2.3,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "光纤概念",
    "rise": 0.12,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续139天上榜",
    "rankChg": 0,
    "etfName": "深成长ETF",
    "code": "886084"
  },
  {
    "name": "MLCC概念",
    "rise": -0.79,
    "rate": 0,
    "tag": "",
    "hotTag": "连续50天上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "猪肉",
    "rise": 0.02,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 2,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "固态电池",
    "rise": -0.93,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "商业航天",
    "rise": -0.19,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续239天上榜",
    "rankChg": -2,
    "etfName": "卫星ETF",
    "code": "886078"
  }
];
const THS_EVENTS = [
  {
    "title": "中信建投：珠海航展催化下，看好军工后续表现",
    "desc": "",
    "heat": 359996,
    "direction": "兵装重组",
    "themes": [
      "兵装重组概念"
    ],
    "stocks": [
      {
        "name": "东安动力",
        "code": "600178",
        "chg": 10.04878
      }
    ]
  },
  {
    "title": "内蒙古乌兰察布：绿色算力成为核心竞争力",
    "desc": "",
    "heat": 55938,
    "direction": "内蒙绿色算力",
    "themes": [
      "内蒙绿色算力"
    ],
    "stocks": [
      {
        "name": "许继电气",
        "code": "000400",
        "chg": 2.341288
      }
    ]
  },
  {
    "title": "国家数据集团或于近日挂牌成立",
    "desc": "",
    "heat": 51556,
    "direction": "数据要素",
    "themes": [
      "数据要素",
      "数据安全"
    ],
    "stocks": [
      {
        "name": "大普微-UW",
        "code": "301666",
        "chg": 19.999269
      }
    ]
  },
  {
    "title": "三部门：同意京津冀等5个城市群开展氢能综合应用试点工作",
    "desc": "",
    "heat": 41602,
    "direction": "氢能源",
    "themes": [
      "氢能源"
    ],
    "stocks": [
      {
        "name": "肯特股份",
        "code": "301591",
        "chg": 19.994944
      }
    ]
  },
  {
    "title": "全球人形机器人收入前五全是中国企业 前8个月深圳机器人出口激增超1200%",
    "desc": "",
    "heat": 40351,
    "direction": "人形机器人",
    "themes": [
      "灵巧手",
      "减速器轴承",
      "控制系统",
      "电子皮肤",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "四会富仕",
        "code": "300852",
        "chg": 18.059888
      }
    ]
  },
  {
    "title": "伊朗武装部队开火拦截霍尔木兹海峡“违规”通行船只",
    "desc": "",
    "heat": 20101,
    "direction": "美伊战争",
    "themes": [
      "石油加工贸易",
      "油气开采及服务",
      "稀土永磁",
      "天然气"
    ],
    "stocks": [
      {
        "name": "京城股份",
        "code": "600860",
        "chg": 9.987358
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "有色 · 镁",
    "change": "+2.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "DRGs概念",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+2.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTFE概念",
    "change": "+1.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "颗粒硅",
    "change": "+1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "草甘膦",
    "change": "+1.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "长寿药NMN",
    "change": "+1.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "出海龙头",
    "change": "+1.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+1.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "健康中国",
    "change": "+1.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "HEPS概念",
    "change": "+1.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航母",
    "change": "+0.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "染料",
    "change": "+0.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超节点",
    "change": "+0.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PEEK材料",
    "change": "+0.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+0.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "蔚来汽车概念股",
    "change": "+0.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+0.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "呼吸机",
    "change": "+0.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002085",
    "name": "万丰奥威",
    "hot_rank": 3,
    "hot_rank_chg": -2,
    "stock_cnt": 5859,
    "price": "10.90",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "23143943000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "低空经济",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -0.38
      },
      {
        "name": "特斯拉",
        "change_pct": 0.09
      },
      {
        "name": "通用航空",
        "change_pct": -0.14
      },
      {
        "name": "锂电池",
        "change_pct": -0.94
      },
      {
        "name": "海工装备",
        "change_pct": 0.37
      },
      {
        "name": "有色 · 镁",
        "change_pct": 2.84
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.28
      },
      {
        "name": "有色金属",
        "change_pct": -0.56
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.53
      },
      {
        "name": "无人机",
        "change_pct": -0.22
      },
      {
        "name": "小米概念股",
        "change_pct": -0.62
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.14
      },
      {
        "name": "一体化压铸",
        "change_pct": 0.44
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.32
      },
      {
        "name": "低空经济",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 4,
    "hot_rank_chg": -1,
    "stock_cnt": 5859,
    "price": "7.77",
    "change": "1.97",
    "market_id": "33",
    "circulate_market_value": "4662907000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.2
      },
      {
        "name": "边缘计算",
        "change_pct": -0.04
      },
      {
        "name": "核电",
        "change_pct": -0.41
      },
      {
        "name": "海工装备",
        "change_pct": 0.37
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.23
      },
      {
        "name": "冷链",
        "change_pct": -0.92
      },
      {
        "name": "地热",
        "change_pct": -0.55
      },
      {
        "name": "储能",
        "change_pct": -0.09
      },
      {
        "name": "碳中和",
        "change_pct": -0.0
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.49
      },
      {
        "name": "汽车热管理",
        "change_pct": -0.53
      },
      {
        "name": "热泵",
        "change_pct": -1.14
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.42
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.15
      },
      {
        "name": "海洋经济",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 12,
    "hot_rank_chg": 1,
    "stock_cnt": 5859,
    "price": "9.84",
    "change": "5.47",
    "market_id": "33",
    "circulate_market_value": "4661014000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -1.29
      },
      {
        "name": "强势人气股",
        "change_pct": -2.52
      },
      {
        "name": "VR&AR",
        "change_pct": -0.59
      },
      {
        "name": "游戏",
        "change_pct": -1.57
      },
      {
        "name": "影视",
        "change_pct": -1.92
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.33
      },
      {
        "name": "动漫",
        "change_pct": -1.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.51
      },
      {
        "name": "传媒",
        "change_pct": -1.83
      },
      {
        "name": "元宇宙",
        "change_pct": -0.67
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.41
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.49
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 17,
    "hot_rank_chg": 15,
    "stock_cnt": 5859,
    "price": "9.06",
    "change": "-8.21",
    "market_id": "17",
    "circulate_market_value": "7872712200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.72
      },
      {
        "name": "快递物流",
        "change_pct": -0.86
      },
      {
        "name": "新零售",
        "change_pct": -1.28
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.02
      },
      {
        "name": "旅游",
        "change_pct": -1.47
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.45
      },
      {
        "name": "物业管理",
        "change_pct": -2.51
      },
      {
        "name": "免税店概念",
        "change_pct": -1.26
      },
      {
        "name": "自贸区",
        "change_pct": -1.28
      }
    ]
  },
  {
    "code": "603999",
    "name": "读者传媒",
    "hot_rank": 21,
    "hot_rank_chg": -2,
    "stock_cnt": 5859,
    "price": "7.54",
    "change": "-10.02",
    "market_id": "17",
    "circulate_market_value": "4343040000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "知识产权",
        "change_pct": -2.2
      },
      {
        "name": "传媒",
        "change_pct": -1.66
      },
      {
        "name": "NFT",
        "change_pct": -1.36
      },
      {
        "name": "在线教育",
        "change_pct": -1.0
      },
      {
        "name": "知识付费",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "600843",
    "name": "上工申贝",
    "hot_rank": 23,
    "hot_rank_chg": -7,
    "stock_cnt": 5859,
    "price": "9.34",
    "change": "4.47",
    "market_id": "17",
    "circulate_market_value": "4382540300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "碳纤维",
        "change_pct": -1.11
      },
      {
        "name": "低空经济",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "002510",
    "name": "天汽模",
    "hot_rank": 26,
    "hot_rank_chg": 10,
    "stock_cnt": 5859,
    "price": "6.20",
    "change": "4.03",
    "market_id": "33",
    "circulate_market_value": "6293597000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": 0.86
      },
      {
        "name": "资产重组",
        "change_pct": -0.81
      },
      {
        "name": "特斯拉",
        "change_pct": 0.23
      },
      {
        "name": "股权转让",
        "change_pct": -0.6
      },
      {
        "name": "通用航空",
        "change_pct": 0.01
      },
      {
        "name": "大飞机",
        "change_pct": -0.11
      },
      {
        "name": "军民融合",
        "change_pct": 0.05
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.1
      },
      {
        "name": "军工",
        "change_pct": 0.23
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.35
      },
      {
        "name": "无人机",
        "change_pct": -0.04
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.02
      },
      {
        "name": "低空经济",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "600812",
    "name": "华北制药",
    "hot_rank": 27,
    "hot_rank_chg": 18,
    "stock_cnt": 5859,
    "price": "5.90",
    "change": "-5.75",
    "market_id": "17",
    "circulate_market_value": "10122809200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "维生素",
        "change_pct": -0.38
      },
      {
        "name": "雄安新区",
        "change_pct": -0.88
      },
      {
        "name": "医药",
        "change_pct": -1.14
      },
      {
        "name": "疫苗",
        "change_pct": -1.16
      },
      {
        "name": "化学原料药",
        "change_pct": -1.27
      },
      {
        "name": "流感",
        "change_pct": -1.3
      },
      {
        "name": "肝素",
        "change_pct": -0.7
      },
      {
        "name": "眼科",
        "change_pct": -0.84
      }
    ]
  },
  {
    "code": "600178",
    "name": "东安动力",
    "hot_rank": 28,
    "hot_rank_chg": 2,
    "stock_cnt": 5859,
    "price": "11.28",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "5261851100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "飞行汽车",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.23
      },
      {
        "name": "股权转让",
        "change_pct": -0.6
      },
      {
        "name": "军工集团",
        "change_pct": 0.79
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.1
      },
      {
        "name": "军工",
        "change_pct": 0.23
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.35
      },
      {
        "name": "振兴东北",
        "change_pct": -1.15
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.02
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.2
      },
      {
        "name": "国企改革",
        "change_pct": -0.29
      },
      {
        "name": "华为产业链",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "601999",
    "name": "出版传媒",
    "hot_rank": 31,
    "hot_rank_chg": 2,
    "stock_cnt": 5859,
    "price": "7.46",
    "change": "-9.58",
    "market_id": "17",
    "circulate_market_value": "4109823700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "教育",
        "change_pct": -1.64
      },
      {
        "name": "数字经济",
        "change_pct": -0.26
      },
      {
        "name": "知识产权",
        "change_pct": -2.2
      },
      {
        "name": "振兴东北",
        "change_pct": -1.15
      },
      {
        "name": "传媒",
        "change_pct": -1.66
      },
      {
        "name": "在线教育",
        "change_pct": -1.0
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 32,
    "hot_rank_chg": -11,
    "stock_cnt": 5859,
    "price": "8.42",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "4769747200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "专业照明",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -0.48
      },
      {
        "name": "军民融合",
        "change_pct": 0.05
      },
      {
        "name": "物联网",
        "change_pct": -0.36
      },
      {
        "name": "LED",
        "change_pct": -0.78
      },
      {
        "name": "军工",
        "change_pct": 0.23
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.46
      },
      {
        "name": "海洋经济",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 36,
    "hot_rank_chg": -16,
    "stock_cnt": 5859,
    "price": "8.86",
    "change": "-8.28",
    "market_id": "33",
    "circulate_market_value": "2961534000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.5
      },
      {
        "name": "饲料",
        "change_pct": -0.44
      },
      {
        "name": "一带一路",
        "change_pct": -0.29
      },
      {
        "name": "强势人气股",
        "change_pct": -2.2
      },
      {
        "name": "保健品",
        "change_pct": -0.1
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.54
      },
      {
        "name": "污水处理",
        "change_pct": -0.76
      },
      {
        "name": "环保",
        "change_pct": -0.95
      },
      {
        "name": "食品",
        "change_pct": -0.79
      },
      {
        "name": "预制菜",
        "change_pct": -0.78
      },
      {
        "name": "国企改革",
        "change_pct": -0.29
      },
      {
        "name": "水产养殖",
        "change_pct": -3.04
      },
      {
        "name": "广西概念",
        "change_pct": -1.24
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 41,
    "hot_rank_chg": -1,
    "stock_cnt": 5859,
    "price": "5.97",
    "change": "-5.54",
    "market_id": "17",
    "circulate_market_value": "15035504000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.55
      },
      {
        "name": "工业大麻",
        "change_pct": -0.14
      },
      {
        "name": "中药",
        "change_pct": -0.54
      },
      {
        "name": "保健品",
        "change_pct": -0.1
      },
      {
        "name": "民营医院",
        "change_pct": -0.42
      },
      {
        "name": "医药",
        "change_pct": -1.14
      },
      {
        "name": "化学原料药",
        "change_pct": -1.27
      },
      {
        "name": "流感",
        "change_pct": -1.3
      },
      {
        "name": "振兴东北",
        "change_pct": -1.15
      },
      {
        "name": "食品",
        "change_pct": -0.79
      }
    ]
  },
  {
    "code": "300411",
    "name": "金盾股份",
    "hot_rank": 42,
    "hot_rank_chg": 0,
    "stock_cnt": 5859,
    "price": "10.76",
    "change": "12.08",
    "market_id": "33",
    "circulate_market_value": "3326082800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -0.25
      },
      {
        "name": "人工智能",
        "change_pct": -0.43
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.27
      },
      {
        "name": "军民融合",
        "change_pct": 0.05
      },
      {
        "name": "军工",
        "change_pct": 0.23
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.8
      },
      {
        "name": "核聚变",
        "change_pct": -0.28
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.14
      },
      {
        "name": "低空经济",
        "change_pct": -0.23
      },
      {
        "name": "海洋经济",
        "change_pct": 0.04
      },
      {
        "name": "雅江电站概念股",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "000420",
    "name": "吉林化纤",
    "hot_rank": 43,
    "hot_rank_chg": -20,
    "stock_cnt": 5859,
    "price": "3.88",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "9540048300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "粘胶短纤",
        "change_pct": -0.71
      },
      {
        "name": "大飞机",
        "change_pct": -0.11
      },
      {
        "name": "风电",
        "change_pct": 0.0
      },
      {
        "name": "碳纤维",
        "change_pct": -1.11
      },
      {
        "name": "振兴东北",
        "change_pct": -1.15
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.14
      },
      {
        "name": "低空经济",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "000607",
    "name": "华媒控股",
    "hot_rank": 46,
    "hot_rank_chg": -19,
    "stock_cnt": 5859,
    "price": "4.15",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "3673008000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.0
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.54
      },
      {
        "name": "教育",
        "change_pct": -1.64
      },
      {
        "name": "知识产权",
        "change_pct": -2.2
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.27
      },
      {
        "name": "传媒",
        "change_pct": -1.66
      },
      {
        "name": "社区团购",
        "change_pct": -1.09
      },
      {
        "name": "NFT",
        "change_pct": -1.36
      },
      {
        "name": "数据要素",
        "change_pct": -0.12
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.55
      },
      {
        "name": "国企改革",
        "change_pct": -0.29
      },
      {
        "name": "职业教育",
        "change_pct": -1.28
      },
      {
        "name": "在线教育",
        "change_pct": -1.0
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.24
      },
      {
        "name": "区块链",
        "change_pct": 0.02
      }
    ]
  },
  {
    "code": "002917",
    "name": "金奥博",
    "hot_rank": 51,
    "hot_rank_chg": -34,
    "stock_cnt": 5859,
    "price": "12.61",
    "change": "5.26",
    "market_id": "33",
    "circulate_market_value": "3285494300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -0.28
      },
      {
        "name": "一带一路",
        "change_pct": -0.29
      },
      {
        "name": "人工智能",
        "change_pct": -0.43
      },
      {
        "name": "VR&AR",
        "change_pct": -0.4
      },
      {
        "name": "工业自动化",
        "change_pct": -0.44
      },
      {
        "name": "军民融合",
        "change_pct": 0.05
      },
      {
        "name": "民爆",
        "change_pct": 0.47
      },
      {
        "name": "军工",
        "change_pct": 0.23
      },
      {
        "name": "机器人",
        "change_pct": -0.04
      },
      {
        "name": "智能制造",
        "change_pct": -0.24
      },
      {
        "name": "工业互联网",
        "change_pct": 0.36
      },
      {
        "name": "国产芯片",
        "change_pct": -0.3
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 55,
    "hot_rank_chg": -3,
    "stock_cnt": 5859,
    "price": "6.94",
    "change": "2.36",
    "market_id": "17",
    "circulate_market_value": "3180243900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -0.36
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.85
      },
      {
        "name": "自贸区",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "600668",
    "name": "尖峰集团",
    "hot_rank": 60,
    "hot_rank_chg": -35,
    "stock_cnt": 5859,
    "price": "8.19",
    "change": "-6.83",
    "market_id": "17",
    "circulate_market_value": "3381655900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.54
      },
      {
        "name": "创新药",
        "change_pct": -1.19
      },
      {
        "name": "水泥",
        "change_pct": -0.36
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.54
      },
      {
        "name": "保健品",
        "change_pct": -0.1
      },
      {
        "name": "医药",
        "change_pct": -1.14
      },
      {
        "name": "化学原料药",
        "change_pct": -1.27
      },
      {
        "name": "破净股",
        "change_pct": -0.35
      },
      {
        "name": "食品",
        "change_pct": -0.79
      },
      {
        "name": "国企改革",
        "change_pct": -0.29
      },
      {
        "name": "眼科",
        "change_pct": -0.84
      }
    ]
  },
  {
    "code": "300581",
    "name": "晨曦航空",
    "hot_rank": 62,
    "hot_rank_chg": -3,
    "stock_cnt": 5859,
    "price": "11.87",
    "change": "0.51",
    "market_id": "33",
    "circulate_market_value": "6529800300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "通用航空",
        "change_pct": 0.01
      },
      {
        "name": "北斗导航",
        "change_pct": -0.27
      },
      {
        "name": "军民融合",
        "change_pct": 0.05
      },
      {
        "name": "军工",
        "change_pct": 0.23
      },
      {
        "name": "无人机",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "603278",
    "name": "大业股份",
    "hot_rank": 66,
    "hot_rank_chg": 7,
    "stock_cnt": 5859,
    "price": "10.06",
    "change": "1.51",
    "market_id": "17",
    "circulate_market_value": "3438099500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.6
      },
      {
        "name": "轮胎",
        "change_pct": 0.63
      },
      {
        "name": "风电",
        "change_pct": 0.0
      },
      {
        "name": "航天",
        "change_pct": -0.23
      },
      {
        "name": "人形机器人",
        "change_pct": 0.36
      }
    ]
  },
  {
    "code": "603636",
    "name": "南威软件",
    "hot_rank": 72,
    "hot_rank_chg": -10,
    "stock_cnt": 5859,
    "price": "8.32",
    "change": "3.48",
    "market_id": "17",
    "circulate_market_value": "4828599600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 0.13
      },
      {
        "name": "国产软件",
        "change_pct": -0.04
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 0.81
      },
      {
        "name": "共享经济",
        "change_pct": -0.62
      },
      {
        "name": "人工智能",
        "change_pct": -0.43
      },
      {
        "name": "网络安全",
        "change_pct": 0.01
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.85
      },
      {
        "name": "智慧停车",
        "change_pct": -0.66
      },
      {
        "name": "物联网",
        "change_pct": -0.36
      },
      {
        "name": "大数据",
        "change_pct": 0.0
      },
      {
        "name": "智慧城市",
        "change_pct": -0.53
      },
      {
        "name": "储能",
        "change_pct": 0.04
      },
      {
        "name": "智慧安防",
        "change_pct": -0.38
      },
      {
        "name": "数字经济",
        "change_pct": -0.26
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.27
      },
      {
        "name": "信创",
        "change_pct": 0.05
      },
      {
        "name": "华为昇腾",
        "change_pct": -0.44
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.15
      },
      {
        "name": "电子身份证",
        "change_pct": 0.05
      },
      {
        "name": "数据要素",
        "change_pct": -0.12
      },
      {
        "name": "数字乡村",
        "change_pct": -0.18
      },
      {
        "name": "智慧政务",
        "change_pct": 0.26
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -0.03
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.46
      },
      {
        "name": "算电协同",
        "change_pct": 0.59
      },
      {
        "name": "华为产业链",
        "change_pct": -0.23
      },
      {
        "name": "自贸区",
        "change_pct": -1.14
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.3
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.24
      },
      {
        "name": "智谱AI",
        "change_pct": -0.28
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.07
      },
      {
        "name": "AI医疗",
        "change_pct": -0.49
      },
      {
        "name": "算力一体机",
        "change_pct": 0.64
      },
      {
        "name": "区块链",
        "change_pct": 0.02
      }
    ]
  },
  {
    "code": "000573",
    "name": "粤宏远A",
    "hot_rank": 74,
    "hot_rank_chg": -17,
    "stock_cnt": 5859,
    "price": "4.24",
    "change": "-5.14",
    "market_id": "33",
    "circulate_market_value": "2682053600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.81
      },
      {
        "name": "锂电池",
        "change_pct": -0.75
      },
      {
        "name": "房地产",
        "change_pct": -2.24
      },
      {
        "name": "固废处理",
        "change_pct": -0.7
      },
      {
        "name": "有色金属",
        "change_pct": -0.39
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.35
      },
      {
        "name": "环保",
        "change_pct": -0.95
      },
      {
        "name": "篮球",
        "change_pct": -2.29
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 77,
    "hot_rank_chg": -6,
    "stock_cnt": 5859,
    "price": "6.92",
    "change": "-5.72",
    "market_id": "33",
    "circulate_market_value": "13252439700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.85
      },
      {
        "name": "林业",
        "change_pct": -2.08
      },
      {
        "name": "碳中和",
        "change_pct": 0.06
      },
      {
        "name": "自贸区",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "600860",
    "name": "京城股份",
    "hot_rank": 81,
    "hot_rank_chg": -15,
    "stock_cnt": 5859,
    "price": "8.70",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "3863154900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "飞行汽车概念股活跃",
    "xgb_concepts": [
      {
        "name": "天然气",
        "change_pct": -0.39
      },
      {
        "name": "京津冀",
        "change_pct": -0.5
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.4
      },
      {
        "name": "机器人",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 82,
    "hot_rank_chg": -27,
    "stock_cnt": 5859,
    "price": "9.20",
    "change": "-5.64",
    "market_id": "33",
    "circulate_market_value": "9713552300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -1.19
      },
      {
        "name": "医疗器械",
        "change_pct": -0.67
      },
      {
        "name": "医药",
        "change_pct": -1.14
      },
      {
        "name": "疫苗",
        "change_pct": -1.16
      },
      {
        "name": "化学原料药",
        "change_pct": -1.27
      },
      {
        "name": "干细胞",
        "change_pct": -2.54
      },
      {
        "name": "眼科",
        "change_pct": -0.84
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -2.86
      }
    ]
  },
  {
    "code": "000576",
    "name": "甘化科工",
    "hot_rank": 86,
    "hot_rank_chg": -30,
    "stock_cnt": 5859,
    "price": "9.65",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "4186317300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "军工电源",
    "xgb_concepts": [
      {
        "name": "军民融合",
        "change_pct": 0.05
      },
      {
        "name": "军工",
        "change_pct": 0.23
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.53
      },
      {
        "name": "碳化硅",
        "change_pct": -0.69
      }
    ]
  },
  {
    "code": "000678",
    "name": "襄阳轴承",
    "hot_rank": 89,
    "hot_rank_chg": -45,
    "stock_cnt": 5859,
    "price": "10.70",
    "change": "-2.10",
    "market_id": "33",
    "circulate_market_value": "4917846200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农机",
        "change_pct": -0.9
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.1
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.35
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.02
      },
      {
        "name": "大农业",
        "change_pct": -0.85
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 90,
    "hot_rank_chg": 24,
    "stock_cnt": 5859,
    "price": "10.97",
    "change": "-3.77",
    "market_id": "33",
    "circulate_market_value": "5775436700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -1.12
      },
      {
        "name": "房地产",
        "change_pct": -2.24
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.17
      },
      {
        "name": "住房租赁",
        "change_pct": -2.54
      },
      {
        "name": "物业管理",
        "change_pct": -2.35
      },
      {
        "name": "新型城镇化",
        "change_pct": -1.64
      },
      {
        "name": "旧改",
        "change_pct": -1.46
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 91,
    "hot_rank_chg": -1,
    "stock_cnt": 5859,
    "price": "6.35",
    "change": "-4.94",
    "market_id": "33",
    "circulate_market_value": "7384080500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -1.75
      },
      {
        "name": "新疆概念",
        "change_pct": -0.82
      },
      {
        "name": "动漫",
        "change_pct": -1.37
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.27
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.34
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.24
      },
      {
        "name": "AI视频",
        "change_pct": -0.94
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.3
      }
    ]
  },
  {
    "code": "000701",
    "name": "厦门信达",
    "hot_rank": 96,
    "hot_rank_chg": -22,
    "stock_cnt": 5859,
    "price": "5.25",
    "change": "-2.05",
    "market_id": "33",
    "circulate_market_value": "3505669800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -0.63
      },
      {
        "name": "应急产业",
        "change_pct": 0.14
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.85
      },
      {
        "name": "电子车牌",
        "change_pct": -1.36
      },
      {
        "name": "物联网",
        "change_pct": -0.36
      },
      {
        "name": "智慧城市",
        "change_pct": -0.53
      },
      {
        "name": "LED",
        "change_pct": -0.78
      },
      {
        "name": "智慧安防",
        "change_pct": -0.38
      },
      {
        "name": "小米概念股",
        "change_pct": -0.38
      },
      {
        "name": "汽车销售",
        "change_pct": -1.16
      },
      {
        "name": "食品安全",
        "change_pct": -0.99
      },
      {
        "name": "web3.0",
        "change_pct": -0.31
      },
      {
        "name": "国企改革",
        "change_pct": -0.29
      },
      {
        "name": "MiniLED",
        "change_pct": -0.55
      },
      {
        "name": "自贸区",
        "change_pct": -1.14
      },
      {
        "name": "小米汽车",
        "change_pct": 0.23
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.3
      }
    ]
  },
  {
    "code": "002614",
    "name": "奥佳华",
    "hot_rank": 97,
    "hot_rank_chg": -36,
    "stock_cnt": 5859,
    "price": "8.26",
    "change": "-5.82",
    "market_id": "33",
    "circulate_market_value": "3644934100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -0.67
      },
      {
        "name": "股权转让",
        "change_pct": -0.6
      },
      {
        "name": "人工智能",
        "change_pct": -0.43
      },
      {
        "name": "养老产业",
        "change_pct": -0.19
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.85
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.36
      },
      {
        "name": "小家电",
        "change_pct": 0.06
      },
      {
        "name": "机器人",
        "change_pct": -0.04
      },
      {
        "name": "家电",
        "change_pct": -0.06
      },
      {
        "name": "RCEP概念",
        "change_pct": -0.2
      },
      {
        "name": "血氧仪",
        "change_pct": -0.71
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.22
      },
      {
        "name": "华为产业链",
        "change_pct": -0.23
      },
      {
        "name": "自贸区",
        "change_pct": -1.14
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.3
      }
    ]
  },
  {
    "code": "600267",
    "name": "海正药业",
    "hot_rank": 100,
    "hot_rank_chg": 1061,
    "stock_cnt": 5859,
    "price": "12.06",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "14234081000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "业绩增长",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -1.19
      },
      {
        "name": "动物保健",
        "change_pct": -0.5
      },
      {
        "name": "医药商业",
        "change_pct": 0.25
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.54
      },
      {
        "name": "医药",
        "change_pct": -1.14
      },
      {
        "name": "化学原料药",
        "change_pct": -1.27
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 0.19
      },
      {
        "name": "宠物经济",
        "change_pct": -0.99
      },
      {
        "name": "国企改革",
        "change_pct": -0.29
      },
      {
        "name": "医美",
        "change_pct": -0.55
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.79
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.8
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600825", "name": "新华传媒", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5859, "price": "15.17", "change": "0.07", "market_id": "17", "circulate_market_value": "15850949000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5859, "price": "19.33", "change": "8.66", "market_id": "33", "circulate_market_value": "14724930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002085", "name": "万丰奥威", "hot_rank": 3, "hot_rank_chg": -2, "stock_cnt": 5859, "price": "10.90", "change": "9.99", "market_id": "33", "circulate_market_value": "23143943000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "低空经济", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -0.38}, {"name": "特斯拉", "change_pct": 0.09}, {"name": "通用航空", "change_pct": -0.14}, {"name": "锂电池", "change_pct": -0.94}, {"name": "海工装备", "change_pct": 0.37}, {"name": "有色 · 镁", "change_pct": 2.84}, {"name": "汽车零部件", "change_pct": -0.28}, {"name": "有色金属", "change_pct": -0.56}, {"name": "新能源汽车", "change_pct": -0.53}, {"name": "无人机", "change_pct": -0.22}, {"name": "小米概念股", "change_pct": -0.62}, {"name": "新能源车零部件", "change_pct": -0.14}, {"name": "一体化压铸", "change_pct": 0.44}, {"name": "飞行汽车/eVTOL", "change_pct": -0.32}, {"name": "低空经济", "change_pct": -0.42}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5859, "price": "7.77", "change": "1.97", "market_id": "33", "circulate_market_value": "4662907000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.2}, {"name": "边缘计算", "change_pct": -0.04}, {"name": "核电", "change_pct": -0.41}, {"name": "海工装备", "change_pct": 0.37}, {"name": "云计算数据中心", "change_pct": -0.23}, {"name": "冷链", "change_pct": -0.92}, {"name": "地热", "change_pct": -0.55}, {"name": "储能", "change_pct": -0.09}, {"name": "碳中和", "change_pct": -0.0}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -1.49}, {"name": "汽车热管理", "change_pct": -0.53}, {"name": "热泵", "change_pct": -1.14}, {"name": "液冷服务器", "change_pct": -0.42}, {"name": "蜜雪冰城概念股", "change_pct": -1.15}, {"name": "海洋经济", "change_pct": -0.12}]}, {"code": "601606", "name": "长城军工", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5859, "price": "33.39", "change": "4.61", "market_id": "17", "circulate_market_value": "24181986000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 6, "hot_rank_chg": 32, "stock_cnt": 5859, "price": "50.25", "change": "10.00", "market_id": "17", "circulate_market_value": "123295724000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5859, "price": "25.58", "change": "-9.10", "market_id": "17", "circulate_market_value": "20256902000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 8, "hot_rank_chg": 6, "stock_cnt": 5859, "price": "22.35", "change": "-0.09", "market_id": "17", "circulate_market_value": "50380883000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603197", "name": "保隆科技", "hot_rank": 9, "hot_rank_chg": -7, "stock_cnt": 5859, "price": "32.33", "change": "10.00", "market_id": "17", "circulate_market_value": "6826548300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "飞行汽车"}, {"code": "001696", "name": "宗申动力", "hot_rank": 10, "hot_rank_chg": -3, "stock_cnt": 5859, "price": "16.21", "change": "2.14", "market_id": "33", "circulate_market_value": "14451434000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003029", "name": "吉大正元", "hot_rank": 11, "hot_rank_chg": -7, "stock_cnt": 5859, "price": "24.19", "change": "10.01", "market_id": "33", "circulate_market_value": "4247353700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "人工智能安全"}, {"code": "002343", "name": "慈文传媒", "hot_rank": 12, "hot_rank_chg": 1, "stock_cnt": 5859, "price": "9.84", "change": "5.47", "market_id": "33", "circulate_market_value": "4661014000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -1.29}, {"name": "强势人气股", "change_pct": -2.52}, {"name": "VR&AR", "change_pct": -0.59}, {"name": "游戏", "change_pct": -1.57}, {"name": "影视", "change_pct": -1.92}, {"name": "直播/短视频", "change_pct": -1.33}, {"name": "动漫", "change_pct": -1.49}, {"name": "腾讯概念股", "change_pct": -0.51}, {"name": "传媒", "change_pct": -1.83}, {"name": "元宇宙", "change_pct": -0.67}, {"name": "短剧/互动影游", "change_pct": -1.41}, {"name": "IP经济/谷子经济", "change_pct": -1.49}]}, {"code": "600584", "name": "长电科技", "hot_rank": 13, "hot_rank_chg": 144, "stock_cnt": 5859, "price": "56.20", "change": "-1.33", "market_id": "17", "circulate_market_value": "100565099000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000099", "name": "中信海直", "hot_rank": 14, "hot_rank_chg": -2, "stock_cnt": 5859, "price": "15.54", "change": "5.36", "market_id": "33", "circulate_market_value": "12055467900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 15, "hot_rank_chg": -5, "stock_cnt": 5859, "price": "13.47", "change": "-7.87", "market_id": "17", "circulate_market_value": "8644819900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600241", "name": "时代万恒", "hot_rank": 16, "hot_rank_chg": -1, "stock_cnt": 5859, "price": "13.52", "change": "-4.45", "market_id": "17", "circulate_market_value": "3978964600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 17, "hot_rank_chg": 15, "stock_cnt": 5859, "price": "9.06", "change": "-8.21", "market_id": "17", "circulate_market_value": "7872712200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.72}, {"name": "快递物流", "change_pct": -0.86}, {"name": "新零售", "change_pct": -1.28}, {"name": "福建自贸/海西概念", "change_pct": -2.02}, {"name": "旅游", "change_pct": -1.47}, {"name": "阿里巴巴概念股", "change_pct": -0.45}, {"name": "物业管理", "change_pct": -2.51}, {"name": "免税店概念", "change_pct": -1.26}, {"name": "自贸区", "change_pct": -1.28}]}, {"code": "000823", "name": "超声电子", "hot_rank": 18, "hot_rank_chg": 16, "stock_cnt": 5859, "price": "25.10", "change": "-0.63", "market_id": "33", "circulate_market_value": "14932797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 19, "hot_rank_chg": -8, "stock_cnt": 5859, "price": "18.92", "change": "-1.66", "market_id": "17", "circulate_market_value": "41990154000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 20, "hot_rank_chg": 17, "stock_cnt": 5859, "price": "143.98", "change": "-0.22", "market_id": "17", "circulate_market_value": "356102890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603999", "name": "读者传媒", "hot_rank": 21, "hot_rank_chg": -2, "stock_cnt": 5859, "price": "7.54", "change": "-10.02", "market_id": "17", "circulate_market_value": "4343040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "知识产权", "change_pct": -2.2}, {"name": "传媒", "change_pct": -1.66}, {"name": "NFT", "change_pct": -1.36}, {"name": "在线教育", "change_pct": -1.0}, {"name": "知识付费", "change_pct": -1.23}]}, {"code": "000993", "name": "闽东电力", "hot_rank": 22, "hot_rank_chg": 4, "stock_cnt": 5859, "price": "16.38", "change": "-10.00", "market_id": "33", "circulate_market_value": "7501244800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600843", "name": "上工申贝", "hot_rank": 23, "hot_rank_chg": -7, "stock_cnt": 5859, "price": "9.34", "change": "4.47", "market_id": "17", "circulate_market_value": "4382540300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "碳纤维", "change_pct": -1.11}, {"name": "低空经济", "change_pct": -0.23}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 24, "hot_rank_chg": -6, "stock_cnt": 5859, "price": "42.58", "change": "-5.42", "market_id": "17", "circulate_market_value": "191739400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 25, "hot_rank_chg": 3, "stock_cnt": 5859, "price": "14.80", "change": "-5.49", "market_id": "33", "circulate_market_value": "9769554800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002510", "name": "天汽模", "hot_rank": 26, "hot_rank_chg": 10, "stock_cnt": 5859, "price": "6.20", "change": "4.03", "market_id": "33", "circulate_market_value": "6293597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": 0.86}, {"name": "资产重组", "change_pct": -0.81}, {"name": "特斯拉", "change_pct": 0.23}, {"name": "股权转让", "change_pct": -0.6}, {"name": "通用航空", "change_pct": 0.01}, {"name": "大飞机", "change_pct": -0.11}, {"name": "军民融合", "change_pct": 0.05}, {"name": "汽车零部件", "change_pct": -0.1}, {"name": "军工", "change_pct": 0.23}, {"name": "新能源汽车", "change_pct": -0.35}, {"name": "无人机", "change_pct": -0.04}, {"name": "新能源车零部件", "change_pct": 0.02}, {"name": "低空经济", "change_pct": -0.23}]}, {"code": "600812", "name": "华北制药", "hot_rank": 27, "hot_rank_chg": 18, "stock_cnt": 5859, "price": "5.90", "change": "-5.75", "market_id": "17", "circulate_market_value": "10122809200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "维生素", "change_pct": -0.38}, {"name": "雄安新区", "change_pct": -0.88}, {"name": "医药", "change_pct": -1.14}, {"name": "疫苗", "change_pct": -1.16}, {"name": "化学原料药", "change_pct": -1.27}, {"name": "流感", "change_pct": -1.3}, {"name": "肝素", "change_pct": -0.7}, {"name": "眼科", "change_pct": -0.84}]}, {"code": "600178", "name": "东安动力", "hot_rank": 28, "hot_rank_chg": 2, "stock_cnt": 5859, "price": "11.28", "change": "10.05", "market_id": "17", "circulate_market_value": "5261851100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "飞行汽车", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.23}, {"name": "股权转让", "change_pct": -0.6}, {"name": "军工集团", "change_pct": 0.79}, {"name": "汽车零部件", "change_pct": -0.1}, {"name": "军工", "change_pct": 0.23}, {"name": "新能源汽车", "change_pct": -0.35}, {"name": "振兴东北", "change_pct": -1.15}, {"name": "新能源车零部件", "change_pct": 0.02}, {"name": "理想汽车概念股", "change_pct": 0.2}, {"name": "国企改革", "change_pct": -0.29}, {"name": "华为产业链", "change_pct": -0.23}]}, {"code": "001318", "name": "阳光乳业", "hot_rank": 29, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "14.49", "change": "-5.11", "market_id": "33", "circulate_market_value": "4095743400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 30, "hot_rank_chg": 1, "stock_cnt": 5859, "price": "667.76", "change": "-0.33", "market_id": "33", "circulate_market_value": "741171530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601999", "name": "出版传媒", "hot_rank": 31, "hot_rank_chg": 2, "stock_cnt": 5859, "price": "7.46", "change": "-9.58", "market_id": "17", "circulate_market_value": "4109823700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "教育", "change_pct": -1.64}, {"name": "数字经济", "change_pct": -0.26}, {"name": "知识产权", "change_pct": -2.2}, {"name": "振兴东北", "change_pct": -1.15}, {"name": "传媒", "change_pct": -1.66}, {"name": "在线教育", "change_pct": -1.0}]}, {"code": "002724", "name": "海洋王", "hot_rank": 32, "hot_rank_chg": -11, "stock_cnt": 5859, "price": "8.42", "change": "10.06", "market_id": "33", "circulate_market_value": "4769747200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "专业照明", "xgb_concepts": [{"name": "石墨烯", "change_pct": -0.48}, {"name": "军民融合", "change_pct": 0.05}, {"name": "物联网", "change_pct": -0.36}, {"name": "LED", "change_pct": -0.78}, {"name": "军工", "change_pct": 0.23}, {"name": "智慧灯杆", "change_pct": -0.46}, {"name": "海洋经济", "change_pct": 0.04}]}, {"code": "002815", "name": "崇达技术", "hot_rank": 33, "hot_rank_chg": 25, "stock_cnt": 5859, "price": "23.11", "change": "-1.53", "market_id": "33", "circulate_market_value": "17959660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 34, "hot_rank_chg": 217, "stock_cnt": 5859, "price": "76.41", "change": "-2.88", "market_id": "33", "circulate_market_value": "49896303000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 35, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "71.10", "change": "8.01", "market_id": "17", "circulate_market_value": "10162252800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 36, "hot_rank_chg": -16, "stock_cnt": 5859, "price": "8.86", "change": "-8.28", "market_id": "33", "circulate_market_value": "2961534000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.5}, {"name": "饲料", "change_pct": -0.44}, {"name": "一带一路", "change_pct": -0.29}, {"name": "强势人气股", "change_pct": -2.2}, {"name": "保健品", "change_pct": -0.1}, {"name": "山东国企改革", "change_pct": -0.54}, {"name": "污水处理", "change_pct": -0.76}, {"name": "环保", "change_pct": -0.95}, {"name": "食品", "change_pct": -0.79}, {"name": "预制菜", "change_pct": -0.78}, {"name": "国企改革", "change_pct": -0.29}, {"name": "水产养殖", "change_pct": -3.04}, {"name": "广西概念", "change_pct": -1.24}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 37, "hot_rank_chg": 16, "stock_cnt": 5859, "price": "15.31", "change": "-7.27", "market_id": "17", "circulate_market_value": "6804444500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300773", "name": "拉卡拉", "hot_rank": 38, "hot_rank_chg": 261, "stock_cnt": 5859, "price": "15.20", "change": "5.70", "market_id": "33", "circulate_market_value": "15634883000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301230", "name": "泓博医药", "hot_rank": 39, "hot_rank_chg": 291, "stock_cnt": 5859, "price": "34.20", "change": "-6.84", "market_id": "33", "circulate_market_value": "5565978800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002929", "name": "润建股份", "hot_rank": 40, "hot_rank_chg": 110, "stock_cnt": 5859, "price": "46.40", "change": "10.01", "market_id": "33", "circulate_market_value": "10051538500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "签AI词元大单"}, {"code": "600664", "name": "哈药股份", "hot_rank": 41, "hot_rank_chg": -1, "stock_cnt": 5859, "price": "5.97", "change": "-5.54", "market_id": "17", "circulate_market_value": "15035504000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.55}, {"name": "工业大麻", "change_pct": -0.14}, {"name": "中药", "change_pct": -0.54}, {"name": "保健品", "change_pct": -0.1}, {"name": "民营医院", "change_pct": -0.42}, {"name": "医药", "change_pct": -1.14}, {"name": "化学原料药", "change_pct": -1.27}, {"name": "流感", "change_pct": -1.3}, {"name": "振兴东北", "change_pct": -1.15}, {"name": "食品", "change_pct": -0.79}]}, {"code": "300411", "name": "金盾股份", "hot_rank": 42, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "10.76", "change": "12.08", "market_id": "33", "circulate_market_value": "3326082800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": -0.25}, {"name": "人工智能", "change_pct": -0.43}, {"name": "高铁轨交", "change_pct": -0.27}, {"name": "军民融合", "change_pct": 0.05}, {"name": "军工", "change_pct": 0.23}, {"name": "新冠病毒防治", "change_pct": -0.8}, {"name": "核聚变", "change_pct": -0.28}, {"name": "飞行汽车/eVTOL", "change_pct": -0.14}, {"name": "低空经济", "change_pct": -0.23}, {"name": "海洋经济", "change_pct": 0.04}, {"name": "雅江电站概念股", "change_pct": -0.27}]}, {"code": "000420", "name": "吉林化纤", "hot_rank": 43, "hot_rank_chg": -20, "stock_cnt": 5859, "price": "3.88", "change": "0.00", "market_id": "33", "circulate_market_value": "9540048300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "粘胶短纤", "change_pct": -0.71}, {"name": "大飞机", "change_pct": -0.11}, {"name": "风电", "change_pct": 0.0}, {"name": "碳纤维", "change_pct": -1.11}, {"name": "振兴东北", "change_pct": -1.15}, {"name": "飞行汽车/eVTOL", "change_pct": -0.14}, {"name": "低空经济", "change_pct": -0.23}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 44, "hot_rank_chg": 20, "stock_cnt": 5859, "price": "284.69", "change": "1.00", "market_id": "17", "circulate_market_value": "190946800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 45, "hot_rank_chg": 263, "stock_cnt": 5859, "price": "13.83", "change": "6.14", "market_id": "33", "circulate_market_value": "22450579000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000607", "name": "华媒控股", "hot_rank": 46, "hot_rank_chg": -19, "stock_cnt": 5859, "price": "4.15", "change": "-9.98", "market_id": "33", "circulate_market_value": "3673008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": -1.0}, {"name": "浙江国企改革", "change_pct": -0.54}, {"name": "教育", "change_pct": -1.64}, {"name": "知识产权", "change_pct": -2.2}, {"name": "阿里巴巴概念股", "change_pct": -0.27}, {"name": "传媒", "change_pct": -1.66}, {"name": "社区团购", "change_pct": -1.09}, {"name": "NFT", "change_pct": -1.36}, {"name": "数据要素", "change_pct": -0.12}, {"name": "字节跳动概念股", "change_pct": -0.55}, {"name": "国企改革", "change_pct": -0.29}, {"name": "职业教育", "change_pct": -1.28}, {"name": "在线教育", "change_pct": -1.0}, {"name": "短剧/互动影游", "change_pct": -1.24}, {"name": "区块链", "change_pct": 0.02}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 47, "hot_rank_chg": 3, "stock_cnt": 5859, "price": "14.82", "change": "3.78", "market_id": "33", "circulate_market_value": "2629186600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 48, "hot_rank_chg": -5, "stock_cnt": 5859, "price": "53.94", "change": "-2.83", "market_id": "17", "circulate_market_value": "9465396800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301569", "name": "联亚药业", "hot_rank": 49, "hot_rank_chg": 89, "stock_cnt": 5859, "price": "23.41", "change": "-6.83", "market_id": "33", "circulate_market_value": "2740084600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 50, "hot_rank_chg": -28, "stock_cnt": 5859, "price": "15.74", "change": "9.99", "market_id": "33", "circulate_market_value": "3955218900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半导体供应链"}, {"code": "002917", "name": "金奥博", "hot_rank": 51, "hot_rank_chg": -34, "stock_cnt": 5859, "price": "12.61", "change": "5.26", "market_id": "33", "circulate_market_value": "3285494300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -0.28}, {"name": "一带一路", "change_pct": -0.29}, {"name": "人工智能", "change_pct": -0.43}, {"name": "VR&AR", "change_pct": -0.4}, {"name": "工业自动化", "change_pct": -0.44}, {"name": "军民融合", "change_pct": 0.05}, {"name": "民爆", "change_pct": 0.47}, {"name": "军工", "change_pct": 0.23}, {"name": "机器人", "change_pct": -0.04}, {"name": "智能制造", "change_pct": -0.24}, {"name": "工业互联网", "change_pct": 0.36}, {"name": "国产芯片", "change_pct": -0.3}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 52, "hot_rank_chg": -13, "stock_cnt": 5859, "price": "33.55", "change": "3.58", "market_id": "17", "circulate_market_value": "23195652000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300364", "name": "中文在线", "hot_rank": 53, "hot_rank_chg": 90, "stock_cnt": 5859, "price": "23.79", "change": "-1.45", "market_id": "33", "circulate_market_value": "15727228000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 54, "hot_rank_chg": 35, "stock_cnt": 5859, "price": "123.25", "change": "0.47", "market_id": "33", "circulate_market_value": "170864150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 55, "hot_rank_chg": -3, "stock_cnt": 5859, "price": "6.94", "change": "2.36", "market_id": "17", "circulate_market_value": "3180243900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -0.36}, {"name": "福建自贸/海西概念", "change_pct": -1.85}, {"name": "自贸区", "change_pct": -1.14}]}, {"code": "000636", "name": "风华高科", "hot_rank": 56, "hot_rank_chg": 77, "stock_cnt": 5859, "price": "39.85", "change": "-2.23", "market_id": "33", "circulate_market_value": "45727475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 57, "hot_rank_chg": 60, "stock_cnt": 5859, "price": "41.60", "change": "-1.09", "market_id": "33", "circulate_market_value": "15329737000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600967", "name": "内蒙一机", "hot_rank": 58, "hot_rank_chg": -11, "stock_cnt": 5859, "price": "13.82", "change": "-0.50", "market_id": "17", "circulate_market_value": "23518802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600699", "name": "均胜电子", "hot_rank": 59, "hot_rank_chg": -35, "stock_cnt": 5859, "price": "20.39", "change": "0.44", "market_id": "17", "circulate_market_value": "28457723000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600668", "name": "尖峰集团", "hot_rank": 60, "hot_rank_chg": -35, "stock_cnt": 5859, "price": "8.19", "change": "-6.83", "market_id": "17", "circulate_market_value": "3381655900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.54}, {"name": "创新药", "change_pct": -1.19}, {"name": "水泥", "change_pct": -0.36}, {"name": "浙江国企改革", "change_pct": -0.54}, {"name": "保健品", "change_pct": -0.1}, {"name": "医药", "change_pct": -1.14}, {"name": "化学原料药", "change_pct": -1.27}, {"name": "破净股", "change_pct": -0.35}, {"name": "食品", "change_pct": -0.79}, {"name": "国企改革", "change_pct": -0.29}, {"name": "眼科", "change_pct": -0.84}]}, {"code": "600206", "name": "有研新材", "hot_rank": 61, "hot_rank_chg": 41, "stock_cnt": 5859, "price": "37.94", "change": "1.15", "market_id": "17", "circulate_market_value": "32118233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300581", "name": "晨曦航空", "hot_rank": 62, "hot_rank_chg": -3, "stock_cnt": 5859, "price": "11.87", "change": "0.51", "market_id": "33", "circulate_market_value": "6529800300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "通用航空", "change_pct": 0.01}, {"name": "北斗导航", "change_pct": -0.27}, {"name": "军民融合", "change_pct": 0.05}, {"name": "军工", "change_pct": 0.23}, {"name": "无人机", "change_pct": -0.04}]}, {"code": "002058", "name": "紫竹高科", "hot_rank": 63, "hot_rank_chg": 53, "stock_cnt": 5859, "price": "21.97", "change": "-4.69", "market_id": "33", "circulate_market_value": "3149747300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 64, "hot_rank_chg": 31, "stock_cnt": 5859, "price": "63.55", "change": "-2.68", "market_id": "33", "circulate_market_value": "46088784000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 65, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "34.60", "change": "-3.33", "market_id": "33", "circulate_market_value": "21829841000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 66, "hot_rank_chg": 7, "stock_cnt": 5859, "price": "10.06", "change": "1.51", "market_id": "17", "circulate_market_value": "3438099500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.6}, {"name": "轮胎", "change_pct": 0.63}, {"name": "风电", "change_pct": 0.0}, {"name": "航天", "change_pct": -0.23}, {"name": "人形机器人", "change_pct": 0.36}]}, {"code": "001216", "name": "华瓷股份", "hot_rank": 67, "hot_rank_chg": 0, "stock_cnt": 5859, "price": "24.31", "change": "10.00", "market_id": "33", "circulate_market_value": "6000588000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 68, "hot_rank_chg": 29, "stock_cnt": 5859, "price": "18.47", "change": "-4.65", "market_id": "17", "circulate_market_value": "3900184000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 69, "hot_rank_chg": 55, "stock_cnt": 5859, "price": "14.46", "change": "-1.09", "market_id": "17", "circulate_market_value": "30243700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 70, "hot_rank_chg": 55, "stock_cnt": 5859, "price": "33.78", "change": "-0.35", "market_id": "17", "circulate_market_value": "134160210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603096", "name": "新经典", "hot_rank": 71, "hot_rank_chg": -2, "stock_cnt": 5859, "price": "18.90", "change": "-10.00", "market_id": "17", "circulate_market_value": "2915034400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603636", "name": "南威软件", "hot_rank": 72, "hot_rank_chg": -10, "stock_cnt": 5859, "price": "8.32", "change": "3.48", "market_id": "17", "circulate_market_value": "4828599600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": 0.13}, {"name": "国产软件", "change_pct": -0.04}, {"name": "蚂蚁集团概念股", "change_pct": 0.81}, {"name": "共享经济", "change_pct": -0.62}, {"name": "人工智能", "change_pct": -0.43}, {"name": "网络安全", "change_pct": 0.01}, {"name": "福建自贸/海西概念", "change_pct": -1.85}, {"name": "智慧停车", "change_pct": -0.66}, {"name": "物联网", "change_pct": -0.36}, {"name": "大数据", "change_pct": 0.0}, {"name": "智慧城市", "change_pct": -0.53}, {"name": "储能", "change_pct": 0.04}, {"name": "智慧安防", "change_pct": -0.38}, {"name": "数字经济", "change_pct": -0.26}, {"name": "阿里巴巴概念股", "change_pct": -0.27}, {"name": "信创", "change_pct": 0.05}, {"name": "华为昇腾", "change_pct": -0.44}, {"name": "东数西算/算力", "change_pct": 0.15}, {"name": "电子身份证", "change_pct": 0.05}, {"name": "数据要素", "change_pct": -0.12}, {"name": "数字乡村", "change_pct": -0.18}, {"name": "智慧政务", "change_pct": 0.26}, {"name": "华为云·鲲鹏", "change_pct": -0.03}, {"name": "智慧灯杆", "change_pct": -0.46}, {"name": "算电协同", "change_pct": 0.59}, {"name": "华为产业链", "change_pct": -0.23}, {"name": "自贸区", "change_pct": -1.14}, {"name": "AI大模型/智能体", "change_pct": -0.3}, {"name": "短剧/互动影游", "change_pct": -1.24}, {"name": "智谱AI", "change_pct": -0.28}, {"name": "DeepSeek概念股", "change_pct": -0.07}, {"name": "AI医疗", "change_pct": -0.49}, {"name": "算力一体机", "change_pct": 0.64}, {"name": "区块链", "change_pct": 0.02}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 73, "hot_rank_chg": -27, "stock_cnt": 5859, "price": "472.77", "change": "10.72", "market_id": "17", "circulate_market_value": "14224571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000573", "name": "粤宏远A", "hot_rank": 74, "hot_rank_chg": -17, "stock_cnt": 5859, "price": "4.24", "change": "-5.14", "market_id": "33", "circulate_market_value": "2682053600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.81}, {"name": "锂电池", "change_pct": -0.75}, {"name": "房地产", "change_pct": -2.24}, {"name": "固废处理", "change_pct": -0.7}, {"name": "有色金属", "change_pct": -0.39}, {"name": "新能源汽车", "change_pct": -0.35}, {"name": "环保", "change_pct": -0.95}, {"name": "篮球", "change_pct": -2.29}]}, {"code": "001309", "name": "德明利", "hot_rank": 75, "hot_rank_chg": -34, "stock_cnt": 5859, "price": "226.61", "change": "10.00", "market_id": "33", "circulate_market_value": "52568394000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 76, "hot_rank_chg": 150, "stock_cnt": 5859, "price": "24.98", "change": "-1.23", "market_id": "33", "circulate_market_value": "27001339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 77, "hot_rank_chg": -6, "stock_cnt": 5859, "price": "6.92", "change": "-5.72", "market_id": "33", "circulate_market_value": "13252439700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -1.85}, {"name": "林业", "change_pct": -2.08}, {"name": "碳中和", "change_pct": 0.06}, {"name": "自贸区", "change_pct": -1.14}]}, {"code": "600183", "name": "生益科技", "hot_rank": 78, "hot_rank_chg": -18, "stock_cnt": 5859, "price": "118.88", "change": "3.73", "market_id": "17", "circulate_market_value": "286708700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001317", "name": "三羊马", "hot_rank": 79, "hot_rank_chg": 8, "stock_cnt": 5859, "price": "55.26", "change": "-3.86", "market_id": "33", "circulate_market_value": "4724869100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 80, "hot_rank_chg": 116, "stock_cnt": 5859, "price": "37.15", "change": "6.97", "market_id": "33", "circulate_market_value": "9049285800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600860", "name": "京城股份", "hot_rank": 81, "hot_rank_chg": -15, "stock_cnt": 5859, "price": "8.70", "change": "9.99", "market_id": "17", "circulate_market_value": "3863154900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "飞行汽车概念股活跃", "xgb_concepts": [{"name": "天然气", "change_pct": -0.39}, {"name": "京津冀", "change_pct": -0.5}, {"name": "氢能源/燃料电池", "change_pct": -0.4}, {"name": "机器人", "change_pct": -0.04}]}, {"code": "300006", "name": "莱美药业", "hot_rank": 82, "hot_rank_chg": -27, "stock_cnt": 5859, "price": "9.20", "change": "-5.64", "market_id": "33", "circulate_market_value": "9713552300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -1.19}, {"name": "医疗器械", "change_pct": -0.67}, {"name": "医药", "change_pct": -1.14}, {"name": "疫苗", "change_pct": -1.16}, {"name": "化学原料药", "change_pct": -1.27}, {"name": "干细胞", "change_pct": -2.54}, {"name": "眼科", "change_pct": -0.84}, {"name": "肿瘤疫苗", "change_pct": -2.86}]}, {"code": "301526", "name": "国际复材", "hot_rank": 83, "hot_rank_chg": 653, "stock_cnt": 5859, "price": "21.41", "change": "-2.15", "market_id": "33", "circulate_market_value": "30039965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301190", "name": "善水科技", "hot_rank": 84, "hot_rank_chg": 31, "stock_cnt": 5859, "price": "50.70", "change": "9.29", "market_id": "33", "circulate_market_value": "9219997800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 85, "hot_rank_chg": 42, "stock_cnt": 5859, "price": "309.30", "change": "0.78", "market_id": "33", "circulate_market_value": "388086060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000576", "name": "甘化科工", "hot_rank": 86, "hot_rank_chg": -30, "stock_cnt": 5859, "price": "9.65", "change": "10.03", "market_id": "33", "circulate_market_value": "4186317300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "军工电源", "xgb_concepts": [{"name": "军民融合", "change_pct": 0.05}, {"name": "军工", "change_pct": 0.23}, {"name": "第三代半导体", "change_pct": -0.53}, {"name": "碳化硅", "change_pct": -0.69}]}, {"code": "600522", "name": "中天科技", "hot_rank": 87, "hot_rank_chg": 110, "stock_cnt": 5859, "price": "28.01", "change": "5.22", "market_id": "17", "circulate_market_value": "95596720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002460", "name": "赣锋锂业", "hot_rank": 88, "hot_rank_chg": 19, "stock_cnt": 5859, "price": "38.24", "change": "-2.67", "market_id": "33", "circulate_market_value": "46322761000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 89, "hot_rank_chg": -45, "stock_cnt": 5859, "price": "10.70", "change": "-2.10", "market_id": "33", "circulate_market_value": "4917846200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农机", "change_pct": -0.9}, {"name": "汽车零部件", "change_pct": -0.1}, {"name": "新能源汽车", "change_pct": -0.35}, {"name": "新能源车零部件", "change_pct": 0.02}, {"name": "大农业", "change_pct": -0.85}]}, {"code": "000011", "name": "深物业A", "hot_rank": 90, "hot_rank_chg": 24, "stock_cnt": 5859, "price": "10.97", "change": "-3.77", "market_id": "33", "circulate_market_value": "5775436700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -1.12}, {"name": "房地产", "change_pct": -2.24}, {"name": "粤港澳大湾区", "change_pct": -1.17}, {"name": "住房租赁", "change_pct": -2.54}, {"name": "物业管理", "change_pct": -2.35}, {"name": "新型城镇化", "change_pct": -1.64}, {"name": "旧改", "change_pct": -1.46}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 91, "hot_rank_chg": -1, "stock_cnt": 5859, "price": "6.35", "change": "-4.94", "market_id": "33", "circulate_market_value": "7384080500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -1.75}, {"name": "新疆概念", "change_pct": -0.82}, {"name": "动漫", "change_pct": -1.37}, {"name": "阿里巴巴概念股", "change_pct": -0.27}, {"name": "腾讯概念股", "change_pct": -0.34}, {"name": "短剧/互动影游", "change_pct": -1.24}, {"name": "AI视频", "change_pct": -0.94}, {"name": "IP经济/谷子经济", "change_pct": -1.3}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 92, "hot_rank_chg": 61, "stock_cnt": 5859, "price": "13.25", "change": "-2.86", "market_id": "17", "circulate_market_value": "9014235700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601127", "name": "赛力斯", "hot_rank": 93, "hot_rank_chg": 39, "stock_cnt": 5859, "price": "45.62", "change": "-1.87", "market_id": "17", "circulate_market_value": "71039619000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 94, "hot_rank_chg": -15, "stock_cnt": 5859, "price": "29.16", "change": "5.54", "market_id": "17", "circulate_market_value": "12798231700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002949", "name": "华阳国际", "hot_rank": 95, "hot_rank_chg": -44, "stock_cnt": 5859, "price": "13.55", "change": "-4.17", "market_id": "33", "circulate_market_value": "2058592400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000701", "name": "厦门信达", "hot_rank": 96, "hot_rank_chg": -22, "stock_cnt": 5859, "price": "5.25", "change": "-2.05", "market_id": "33", "circulate_market_value": "3505669800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -0.63}, {"name": "应急产业", "change_pct": 0.14}, {"name": "福建自贸/海西概念", "change_pct": -1.85}, {"name": "电子车牌", "change_pct": -1.36}, {"name": "物联网", "change_pct": -0.36}, {"name": "智慧城市", "change_pct": -0.53}, {"name": "LED", "change_pct": -0.78}, {"name": "智慧安防", "change_pct": -0.38}, {"name": "小米概念股", "change_pct": -0.38}, {"name": "汽车销售", "change_pct": -1.16}, {"name": "食品安全", "change_pct": -0.99}, {"name": "web3.0", "change_pct": -0.31}, {"name": "国企改革", "change_pct": -0.29}, {"name": "MiniLED", "change_pct": -0.55}, {"name": "自贸区", "change_pct": -1.14}, {"name": "小米汽车", "change_pct": 0.23}, {"name": "IP经济/谷子经济", "change_pct": -1.3}]}, {"code": "002614", "name": "奥佳华", "hot_rank": 97, "hot_rank_chg": -36, "stock_cnt": 5859, "price": "8.26", "change": "-5.82", "market_id": "33", "circulate_market_value": "3644934100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医疗器械", "change_pct": -0.67}, {"name": "股权转让", "change_pct": -0.6}, {"name": "人工智能", "change_pct": -0.43}, {"name": "养老产业", "change_pct": -0.19}, {"name": "福建自贸/海西概念", "change_pct": -1.85}, {"name": "外贸受益概念", "change_pct": -0.36}, {"name": "小家电", "change_pct": 0.06}, {"name": "机器人", "change_pct": -0.04}, {"name": "家电", "change_pct": -0.06}, {"name": "RCEP概念", "change_pct": -0.2}, {"name": "血氧仪", "change_pct": -0.71}, {"name": "华为鸿蒙", "change_pct": -0.22}, {"name": "华为产业链", "change_pct": -0.23}, {"name": "自贸区", "change_pct": -1.14}, {"name": "IP经济/谷子经济", "change_pct": -1.3}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 98, "hot_rank_chg": 165, "stock_cnt": 5859, "price": "206.85", "change": "-2.80", "market_id": "33", "circulate_market_value": "225133070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 99, "hot_rank_chg": 59, "stock_cnt": 5859, "price": "16.84", "change": "-0.94", "market_id": "33", "circulate_market_value": "7617385400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600267", "name": "海正药业", "hot_rank": 100, "hot_rank_chg": 1061, "stock_cnt": 5859, "price": "12.06", "change": "10.04", "market_id": "17", "circulate_market_value": "14234081000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "业绩增长", "xgb_concepts": [{"name": "创新药", "change_pct": -1.19}, {"name": "动物保健", "change_pct": -0.5}, {"name": "医药商业", "change_pct": 0.25}, {"name": "浙江国企改革", "change_pct": -0.54}, {"name": "医药", "change_pct": -1.14}, {"name": "化学原料药", "change_pct": -1.27}, {"name": "PD-1抑制剂", "change_pct": 0.19}, {"name": "宠物经济", "change_pct": -0.99}, {"name": "国企改革", "change_pct": -0.29}, {"name": "医美", "change_pct": -0.55}, {"name": "阿尔茨海默病", "change_pct": -0.79}, {"name": "新冠病毒防治", "change_pct": -0.8}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"524505": "[立案调查] 25宏桂01：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524784": "[立案调查] 26宏桂01：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524990": "[立案调查] 26宏桂02：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524583": "[立案调查] 25宏桂02：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};