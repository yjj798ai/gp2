const UPDATE_TIME = "2026-09-23 08:22";
const THS_HOT = [
  {
    "name": "玻璃基板",
    "rise": 2.16,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "机床ETF",
    "code": "886111"
  },
  {
    "name": "PCB概念",
    "rise": 1.39,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续121天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "培育钻石",
    "rise": 1.52,
    "rate": 0,
    "tag": "",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "创新药",
    "rise": -0.15,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续128天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PET铜箔",
    "rise": 2.46,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "MLCC概念",
    "rise": 1.4,
    "rate": 0,
    "tag": "",
    "hotTag": "连续38天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.96,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续298天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": 1.08,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续251天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "先进封装",
    "rise": 1.43,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "CRO概念",
    "rise": 1.0,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "新股与次新股",
    "rise": 0.18,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "光纤概念",
    "rise": -0.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续127天上榜",
    "rankChg": 0,
    "etfName": "科创红土LOF",
    "code": "886084"
  },
  {
    "name": "人形机器人",
    "rise": 0.15,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "AI应用",
    "rise": -1.31,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续56天上榜",
    "rankChg": -1,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "芯片概念",
    "rise": 0.64,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "算力租赁",
    "rise": -1.3,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续162天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "白酒概念",
    "rise": -0.57,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885525"
  },
  {
    "name": "液冷服务器",
    "rise": -0.12,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "粮食概念",
    "rise": -1.1,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "科创次新股",
    "rise": 1.27,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885907"
  }
];
const THS_EVENTS = [
  {
    "title": "京东方玻璃基板业务进展：24层基板通过测试，量产前尚需攻克两大环节",
    "desc": "",
    "heat": 298354,
    "direction": "玻璃基板",
    "themes": [
      "显示用玻璃基板",
      "设备及耗材",
      "玻璃基板制造",
      "玻璃基板封装"
    ],
    "stocks": [
      {
        "name": "天承科技",
        "code": "688603",
        "chg": 6.755187
      }
    ]
  },
  {
    "title": "医药工业擘画“十五五”新蓝图 药企开启全球化深度竞速",
    "desc": "",
    "heat": 278499,
    "direction": "CRO概念",
    "themes": [
      "药物发现CRO",
      "药物定制CRO",
      "临床前CRO",
      "临床CRO"
    ],
    "stocks": [
      {
        "name": "益诺思",
        "code": "688710",
        "chg": 14.415201
      }
    ]
  },
  {
    "title": "利好频现，多股连板！A、H房地产股集体大爆发",
    "desc": "",
    "heat": 259341,
    "direction": "房地产",
    "themes": [
      "房地产开发",
      "租售同权",
      "物业管理",
      "房地产"
    ],
    "stocks": [
      {
        "name": "安居宝",
        "code": "300155",
        "chg": 11.946903
      }
    ]
  },
  {
    "title": "PCB概念股表现活跃！PCB厂商陆续启动重新报价",
    "desc": "",
    "heat": 235263,
    "direction": "AI PCB",
    "themes": [
      "电子布",
      "树脂",
      "PCB铜箔",
      "PCB设备",
      "服务器PCB"
    ],
    "stocks": [
      {
        "name": "中一科技",
        "code": "301150",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "美股存储芯片四巨头 集体大涨",
    "desc": "",
    "heat": 189788,
    "direction": "存储芯片",
    "themes": [
      "HBM存储",
      "长鑫存储",
      "长江存储",
      "DRAM存储",
      "SRAM存储",
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "信宇人",
        "code": "688573",
        "chg": 10.14772
      }
    ]
  },
  {
    "title": "机构：金刚石迎来产业化元年",
    "desc": "",
    "heat": 164818,
    "direction": "培育钻石",
    "themes": [
      "金刚石散热",
      "培育制造",
      "超硬材料",
      "MPCVD设备",
      "品牌零售",
      "培育钻石"
    ],
    "stocks": [
      {
        "name": "沃尔德",
        "code": "688028",
        "chg": 4.765738
      }
    ]
  },
  {
    "title": "特斯拉人形机器人量产在即 中国产业链公司迎合作新机遇",
    "desc": "",
    "heat": 109376,
    "direction": "人形机器人",
    "themes": [
      "滚柱丝杠",
      "灵巧手",
      "减速器轴承",
      "电机",
      "控制系统",
      "加工设备",
      "电子皮肤",
      "机器人概念",
      "减速器",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "华光新材",
        "code": "688379",
        "chg": 13.978686
      }
    ]
  },
  {
    "title": "千问加速打造Personal Agent 让每个人拥有更懂自己的AI助理",
    "desc": "",
    "heat": 66181,
    "direction": "AI智能体",
    "themes": [
      "OpenClaw",
      "AI智能体"
    ],
    "stocks": [
      {
        "name": "优利德",
        "code": "688628",
        "chg": 19.995806
      }
    ]
  },
  {
    "title": "小摩：2026年定制AI ASIC市场规模约600亿至700亿美元",
    "desc": "",
    "heat": 44534,
    "direction": "端侧AI芯片",
    "themes": [
      "低功耗SoC",
      "高性能SoC",
      "物联网模组",
      "IP"
    ],
    "stocks": [
      {
        "name": "国芯科技",
        "code": "688262",
        "chg": 7.167832
      }
    ]
  },
  {
    "title": "高盛：中秋期间白酒需求前景谨慎，品牌分化加剧",
    "desc": "",
    "heat": 33978,
    "direction": "白酒",
    "themes": [
      "一线酒企",
      "二线酒企",
      "三线酒企"
    ],
    "stocks": [
      {
        "name": "天佑德酒",
        "code": "002646",
        "chg": 3.966006
      }
    ]
  },
  {
    "title": "联合国秘书长呼吁全球监管人工智能，避免出现杀人机器人",
    "desc": "",
    "heat": 10856,
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
        "chg": 15.275387
      }
    ]
  },
  {
    "title": "厄尔尼诺致印尼镍加工中心被迫减产 或影响约10万吨镍生铁产量",
    "desc": "",
    "heat": 1106,
    "direction": "金属镍",
    "themes": [
      "镍矿",
      "镍冶炼",
      "镍加工",
      "再生镍",
      "金属镍"
    ],
    "stocks": [
      {
        "name": "杉杉股份",
        "code": "600884",
        "chg": 5.861456
      }
    ]
  },
  {
    "title": "国庆文化和旅游消费月启动将发放超3.1亿元消费券",
    "desc": "",
    "heat": 135,
    "direction": "旅游及酒店",
    "themes": [
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "大连圣亚",
        "code": "600593",
        "chg": 5.666384
      }
    ]
  },
  {
    "title": "宁波中东欧医药交易（集采）平台上线",
    "desc": "",
    "heat": 0,
    "direction": "药械出海/宁波",
    "themes": [
      "宁波药械",
      "跨境贸易"
    ],
    "stocks": [
      {
        "name": "健信超导",
        "code": "688805",
        "chg": 1.503574
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "量子计算",
    "change": "+3.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "金刚线",
    "change": "+2.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+2.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PET复合铜箔",
    "change": "+2.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃基板封装",
    "change": "+2.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+2.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧树脂",
    "change": "+2.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+2.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+2.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+1.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "HEPS概念",
    "change": "+1.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+1.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "培育钻石",
    "change": "+1.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+1.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水泥",
    "change": "+1.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "仪器仪表",
    "change": "+1.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有机硅",
    "change": "+1.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+1.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+1.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MicroLED",
    "change": "+1.19%",
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
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5789,
    "price": "9.04",
    "change": "-0.44",
    "market_id": "17",
    "circulate_market_value": "22767329000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.48
      },
      {
        "name": "工业大麻",
        "change_pct": -1.36
      },
      {
        "name": "中药",
        "change_pct": -1.04
      },
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "保健品",
        "change_pct": -1.12
      },
      {
        "name": "民营医院",
        "change_pct": -1.28
      },
      {
        "name": "医药",
        "change_pct": -0.27
      },
      {
        "name": "化学原料药",
        "change_pct": -0.42
      },
      {
        "name": "流感",
        "change_pct": -0.5
      },
      {
        "name": "振兴东北",
        "change_pct": -1.25
      },
      {
        "name": "食品",
        "change_pct": -0.89
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 7,
    "hot_rank_chg": 36,
    "stock_cnt": 5789,
    "price": "6.02",
    "change": "0.33",
    "market_id": "33",
    "circulate_market_value": "212910150000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.55
      },
      {
        "name": "手机产业链",
        "change_pct": 0.42
      },
      {
        "name": "超高清视频",
        "change_pct": -0.73
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.62
      },
      {
        "name": "电竞",
        "change_pct": -1.97
      },
      {
        "name": "半导体",
        "change_pct": 1.19
      },
      {
        "name": "人工智能",
        "change_pct": -1.1
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.41
      },
      {
        "name": "VR&AR",
        "change_pct": -0.69
      },
      {
        "name": "OLED",
        "change_pct": 0.95
      },
      {
        "name": "京津冀",
        "change_pct": -0.85
      },
      {
        "name": "物联网",
        "change_pct": -0.36
      },
      {
        "name": "指纹识别",
        "change_pct": 0.44
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.17
      },
      {
        "name": "白马股",
        "change_pct": -0.58
      },
      {
        "name": "智能制造",
        "change_pct": -0.09
      },
      {
        "name": "小米概念股",
        "change_pct": 0.03
      },
      {
        "name": "国产芯片",
        "change_pct": 0.78
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.87
      },
      {
        "name": "全息概念",
        "change_pct": -1.13
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.89
      },
      {
        "name": "MicroLED",
        "change_pct": 1.19
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.68
      },
      {
        "name": "智能手表",
        "change_pct": 0.19
      },
      {
        "name": "MiniLED",
        "change_pct": 0.49
      },
      {
        "name": "传感器",
        "change_pct": 0.26
      },
      {
        "name": "大硅片",
        "change_pct": 1.68
      },
      {
        "name": "AI PC",
        "change_pct": -0.19
      },
      {
        "name": "华为产业链",
        "change_pct": -0.59
      },
      {
        "name": "回购",
        "change_pct": 0.1
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.43
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.27
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.36
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 8,
    "hot_rank_chg": -2,
    "stock_cnt": 5789,
    "price": "7.06",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "7376908200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "拟收购界面财联社",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.25
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.53
      },
      {
        "name": "复牌股",
        "change_pct": 1.32
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -2.68
      },
      {
        "name": "国企改革",
        "change_pct": -1.0
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 9,
    "hot_rank_chg": 12,
    "stock_cnt": 5789,
    "price": "3.86",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "9042776100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "房产经纪",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.8
      },
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "人工智能",
        "change_pct": -1.1
      },
      {
        "name": "VR&AR",
        "change_pct": -0.69
      },
      {
        "name": "京津冀",
        "change_pct": -0.85
      },
      {
        "name": "装修装饰",
        "change_pct": 0.05
      },
      {
        "name": "住房租赁",
        "change_pct": -0.08
      },
      {
        "name": "破净股",
        "change_pct": -0.65
      },
      {
        "name": "数字经济",
        "change_pct": -1.6
      },
      {
        "name": "房产经纪",
        "change_pct": 1.66
      },
      {
        "name": "物业管理",
        "change_pct": 0.82
      },
      {
        "name": "华为产业链",
        "change_pct": -0.59
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.29
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 11,
    "hot_rank_chg": 34,
    "stock_cnt": 5789,
    "price": "3.92",
    "change": "2.89",
    "market_id": "33",
    "circulate_market_value": "38083244000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": -1.14
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.53
      },
      {
        "name": "股权转让",
        "change_pct": -0.33
      },
      {
        "name": "房地产",
        "change_pct": -0.35
      },
      {
        "name": "养老产业",
        "change_pct": -1.42
      },
      {
        "name": "冷链",
        "change_pct": -0.9
      },
      {
        "name": "住房租赁",
        "change_pct": -0.08
      },
      {
        "name": "破净股",
        "change_pct": -0.65
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.38
      },
      {
        "name": "物业管理",
        "change_pct": 0.82
      },
      {
        "name": "旧改",
        "change_pct": 0.29
      },
      {
        "name": "REITs",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 22,
    "hot_rank_chg": 20,
    "stock_cnt": 5789,
    "price": "12.76",
    "change": "5.37",
    "market_id": "33",
    "circulate_market_value": "4199601800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.25
      },
      {
        "name": "锂电池",
        "change_pct": 0.09
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.75
      },
      {
        "name": "湖南国企改革",
        "change_pct": -1.47
      },
      {
        "name": "污水处理",
        "change_pct": -0.37
      },
      {
        "name": "智慧城市",
        "change_pct": -0.79
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.16
      },
      {
        "name": "环保",
        "change_pct": -0.49
      },
      {
        "name": "动力电池回收",
        "change_pct": -0.68
      },
      {
        "name": "干细胞",
        "change_pct": 0.34
      },
      {
        "name": "国企改革",
        "change_pct": -1.0
      }
    ]
  },
  {
    "code": "002285",
    "name": "世联行",
    "hot_rank": 27,
    "hot_rank_chg": 70,
    "stock_cnt": 5789,
    "price": "3.17",
    "change": "-0.94",
    "market_id": "33",
    "circulate_market_value": "6273459700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.65
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.53
      },
      {
        "name": "共享经济",
        "change_pct": -0.59
      },
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "养老产业",
        "change_pct": -1.42
      },
      {
        "name": "住房租赁",
        "change_pct": -0.08
      },
      {
        "name": "房产经纪",
        "change_pct": 1.66
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.75
      },
      {
        "name": "物业管理",
        "change_pct": 0.82
      },
      {
        "name": "旧改",
        "change_pct": 0.29
      },
      {
        "name": "横琴新区",
        "change_pct": -1.74
      },
      {
        "name": "氮化镓",
        "change_pct": 0.6
      },
      {
        "name": "REITs",
        "change_pct": -0.32
      },
      {
        "name": "华为产业链",
        "change_pct": -0.59
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 31,
    "hot_rank_chg": 153,
    "stock_cnt": 5789,
    "price": "9.80",
    "change": "2.62",
    "market_id": "17",
    "circulate_market_value": "35159163000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": 0.28
      },
      {
        "name": "OLED",
        "change_pct": 0.95
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.87
      },
      {
        "name": "国企改革",
        "change_pct": -1.0
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.36
      },
      {
        "name": "陕西国企改革",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 36,
    "hot_rank_chg": 21,
    "stock_cnt": 5789,
    "price": "7.25",
    "change": "-2.69",
    "market_id": "33",
    "circulate_market_value": "9127955400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -1.1
      },
      {
        "name": "游戏",
        "change_pct": -2.77
      },
      {
        "name": "智能音箱",
        "change_pct": -0.15
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.03
      },
      {
        "name": "数字经济",
        "change_pct": -1.6
      },
      {
        "name": "百度概念股",
        "change_pct": -1.67
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.66
      },
      {
        "name": "拼多多概念股",
        "change_pct": -2.23
      },
      {
        "name": "传媒",
        "change_pct": -2.68
      },
      {
        "name": "全息概念",
        "change_pct": -1.13
      },
      {
        "name": "NFT",
        "change_pct": -3.48
      },
      {
        "name": "元宇宙",
        "change_pct": -1.77
      },
      {
        "name": "web3.0",
        "change_pct": -2.51
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.49
      },
      {
        "name": "数字人民币",
        "change_pct": -1.61
      },
      {
        "name": "智慧政务",
        "change_pct": -1.74
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.61
      },
      {
        "name": "盲盒",
        "change_pct": -1.72
      },
      {
        "name": "AI营销",
        "change_pct": -3.32
      },
      {
        "name": "华为产业链",
        "change_pct": -0.59
      },
      {
        "name": "供应链金融",
        "change_pct": -1.67
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.19
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.29
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.84
      },
      {
        "name": "区块链",
        "change_pct": -1.8
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 43,
    "hot_rank_chg": 121,
    "stock_cnt": 5789,
    "price": "2.20",
    "change": "0.92",
    "market_id": "33",
    "circulate_market_value": "11093468800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "新能源整车",
        "change_pct": -0.42
      },
      {
        "name": "汽车整车",
        "change_pct": -0.47
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.16
      },
      {
        "name": "低价股",
        "change_pct": -1.17
      }
    ]
  },
  {
    "code": "603636",
    "name": "南威软件",
    "hot_rank": 48,
    "hot_rank_chg": 6,
    "stock_cnt": 5789,
    "price": "8.81",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "5112976200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "AI应用出海",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -0.65
      },
      {
        "name": "国产软件",
        "change_pct": -1.45
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -1.57
      },
      {
        "name": "共享经济",
        "change_pct": -0.59
      },
      {
        "name": "人工智能",
        "change_pct": -1.1
      },
      {
        "name": "网络安全",
        "change_pct": -0.85
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.64
      },
      {
        "name": "智慧停车",
        "change_pct": -0.36
      },
      {
        "name": "物联网",
        "change_pct": -0.36
      },
      {
        "name": "大数据",
        "change_pct": -1.43
      },
      {
        "name": "智慧城市",
        "change_pct": -0.79
      },
      {
        "name": "智慧安防",
        "change_pct": -0.44
      },
      {
        "name": "数字经济",
        "change_pct": -1.6
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.43
      },
      {
        "name": "信创",
        "change_pct": -1.34
      },
      {
        "name": "华为昇腾",
        "change_pct": -1.01
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.12
      },
      {
        "name": "电子身份证",
        "change_pct": -1.17
      },
      {
        "name": "数据要素",
        "change_pct": -1.61
      },
      {
        "name": "数字乡村",
        "change_pct": -1.68
      },
      {
        "name": "智慧政务",
        "change_pct": -1.74
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -1.51
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.45
      },
      {
        "name": "算电协同",
        "change_pct": -0.81
      },
      {
        "name": "华为产业链",
        "change_pct": -0.59
      },
      {
        "name": "自贸区",
        "change_pct": -1.28
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.29
      },
      {
        "name": "智谱AI",
        "change_pct": -2.31
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.4
      },
      {
        "name": "算力一体机",
        "change_pct": -0.88
      },
      {
        "name": "区块链",
        "change_pct": -1.8
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 52,
    "hot_rank_chg": 15,
    "stock_cnt": 5789,
    "price": "5.32",
    "change": "1.72",
    "market_id": "33",
    "circulate_market_value": "14111569000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "装修装饰",
        "change_pct": 0.05
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.06
      },
      {
        "name": "航天",
        "change_pct": -0.45
      },
      {
        "name": "旧改",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 53,
    "hot_rank_chg": 64,
    "stock_cnt": 5789,
    "price": "2.81",
    "change": "-2.43",
    "market_id": "33",
    "circulate_market_value": "26732531000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 1.19
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.17
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.17
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.16
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.1
      },
      {
        "name": "低价股",
        "change_pct": -1.17
      },
      {
        "name": "减速器",
        "change_pct": -0.01
      },
      {
        "name": "华为汽车",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "000910",
    "name": "大亚圣象",
    "hot_rank": 54,
    "hot_rank_chg": 16,
    "stock_cnt": 5789,
    "price": "7.58",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4148042200.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "七腾机器人",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 0.09
      },
      {
        "name": "林业",
        "change_pct": -1.2
      },
      {
        "name": "装修装饰",
        "change_pct": 0.05
      },
      {
        "name": "家具家居",
        "change_pct": -0.04
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.16
      },
      {
        "name": "破净股",
        "change_pct": -0.65
      }
    ]
  },
  {
    "code": "600743",
    "name": "华远控股",
    "hot_rank": 59,
    "hot_rank_chg": 56,
    "stock_cnt": 5789,
    "price": "2.82",
    "change": "10.16",
    "market_id": "17",
    "circulate_market_value": "6616004500.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "控股股东拟变更",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.33
      },
      {
        "name": "京津冀",
        "change_pct": -0.85
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.67
      },
      {
        "name": "物业管理",
        "change_pct": 0.82
      },
      {
        "name": "低价股",
        "change_pct": -1.17
      },
      {
        "name": "国资入股",
        "change_pct": -0.47
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 60,
    "hot_rank_chg": -12,
    "stock_cnt": 5789,
    "price": "7.98",
    "change": "-7.21",
    "market_id": "33",
    "circulate_market_value": "15282438000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.64
      },
      {
        "name": "林业",
        "change_pct": -1.2
      },
      {
        "name": "碳中和",
        "change_pct": -1.5
      },
      {
        "name": "自贸区",
        "change_pct": -1.28
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 62,
    "hot_rank_chg": -16,
    "stock_cnt": 5789,
    "price": "11.72",
    "change": "-1.51",
    "market_id": "33",
    "circulate_market_value": "10390855800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -0.0
      },
      {
        "name": "手机产业链",
        "change_pct": 0.42
      },
      {
        "name": "超高清视频",
        "change_pct": -0.73
      },
      {
        "name": "锂电池",
        "change_pct": 0.09
      },
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "OLED",
        "change_pct": 0.95
      },
      {
        "name": "包装印刷",
        "change_pct": -0.64
      },
      {
        "name": "光伏",
        "change_pct": -0.24
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.16
      },
      {
        "name": "小米概念股",
        "change_pct": 0.03
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.87
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.67
      },
      {
        "name": "华为产业链",
        "change_pct": -0.59
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 2.47
      }
    ]
  },
  {
    "code": "600630",
    "name": "龙头股份",
    "hot_rank": 64,
    "hot_rank_chg": -24,
    "stock_cnt": 5789,
    "price": "8.53",
    "change": "-10.02",
    "market_id": "17",
    "circulate_market_value": "3624069400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.48
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.53
      },
      {
        "name": "一带一路",
        "change_pct": -0.81
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.88
      },
      {
        "name": "纺织服装",
        "change_pct": -0.76
      },
      {
        "name": "上海自由贸易港",
        "change_pct": -1.01
      },
      {
        "name": "进口博览会",
        "change_pct": -1.65
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.36
      },
      {
        "name": "物业管理",
        "change_pct": 0.82
      },
      {
        "name": "国企改革",
        "change_pct": -1.0
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.79
      },
      {
        "name": "自贸区",
        "change_pct": -1.28
      }
    ]
  },
  {
    "code": "600770",
    "name": "综艺股份",
    "hot_rank": 67,
    "hot_rank_chg": 33,
    "stock_cnt": 5789,
    "price": "6.51",
    "change": "-1.81",
    "market_id": "17",
    "circulate_market_value": "8463000000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.25
      },
      {
        "name": "半导体",
        "change_pct": 1.19
      },
      {
        "name": "股权转让",
        "change_pct": -0.33
      },
      {
        "name": "手游",
        "change_pct": -2.92
      },
      {
        "name": "人工智能",
        "change_pct": -1.1
      },
      {
        "name": "游戏",
        "change_pct": -2.77
      },
      {
        "name": "光伏",
        "change_pct": -0.24
      },
      {
        "name": "国产芯片",
        "change_pct": 0.78
      },
      {
        "name": "CPU概念",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 69,
    "hot_rank_chg": -11,
    "stock_cnt": 5789,
    "price": "7.53",
    "change": "-7.15",
    "market_id": "33",
    "circulate_market_value": "12251263200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.48
      },
      {
        "name": "电竞",
        "change_pct": -1.97
      },
      {
        "name": "手游",
        "change_pct": -2.92
      },
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "人工智能",
        "change_pct": -1.1
      },
      {
        "name": "游戏",
        "change_pct": -2.77
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.6
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.66
      },
      {
        "name": "快手概念股",
        "change_pct": -3.1
      },
      {
        "name": "元宇宙",
        "change_pct": -1.77
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.28
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.12
      },
      {
        "name": "web3.0",
        "change_pct": -2.51
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.86
      },
      {
        "name": "数据要素",
        "change_pct": -1.61
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.49
      },
      {
        "name": "AI营销",
        "change_pct": -3.32
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.19
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.27
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.29
      },
      {
        "name": "人形机器人",
        "change_pct": 0.08
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.77
      },
      {
        "name": "多模态",
        "change_pct": -1.95
      },
      {
        "name": "AI视频",
        "change_pct": -3.13
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.86
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.84
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 74,
    "hot_rank_chg": -48,
    "stock_cnt": 5789,
    "price": "7.10",
    "change": "-4.44",
    "market_id": "33",
    "circulate_market_value": "7333844200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.52
      },
      {
        "name": "锂电池",
        "change_pct": 0.09
      },
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.02
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.36
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.16
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -1.74
      }
    ]
  },
  {
    "code": "002614",
    "name": "奥佳华",
    "hot_rank": 76,
    "hot_rank_chg": 48,
    "stock_cnt": 5789,
    "price": "7.57",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "3340454100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "股份转让",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": 0.49
      },
      {
        "name": "股权转让",
        "change_pct": -0.33
      },
      {
        "name": "人工智能",
        "change_pct": -1.1
      },
      {
        "name": "养老产业",
        "change_pct": -1.42
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.64
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.06
      },
      {
        "name": "小家电",
        "change_pct": -0.77
      },
      {
        "name": "机器人",
        "change_pct": 0.03
      },
      {
        "name": "家电",
        "change_pct": -0.34
      },
      {
        "name": "RCEP概念",
        "change_pct": -0.42
      },
      {
        "name": "血氧仪",
        "change_pct": 0.27
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.61
      },
      {
        "name": "华为产业链",
        "change_pct": -0.59
      },
      {
        "name": "自贸区",
        "change_pct": -1.28
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.86
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 79,
    "hot_rank_chg": 47,
    "stock_cnt": 5789,
    "price": "9.26",
    "change": "-7.03",
    "market_id": "33",
    "circulate_market_value": "2634299700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.23
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.75
      },
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "教育",
        "change_pct": -1.68
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.43
      },
      {
        "name": "职业教育",
        "change_pct": -1.8
      },
      {
        "name": "在线教育",
        "change_pct": -1.46
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.61
      },
      {
        "name": "华为产业链",
        "change_pct": -0.59
      },
      {
        "name": "智谱AI",
        "change_pct": -2.31
      }
    ]
  },
  {
    "code": "600503",
    "name": "华丽家族",
    "hot_rank": 81,
    "hot_rank_chg": 12,
    "stock_cnt": 5789,
    "price": "2.94",
    "change": "10.11",
    "market_id": "17",
    "circulate_market_value": "4710732600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "房地产开发",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.35
      },
      {
        "name": "石墨烯",
        "change_pct": 0.01
      },
      {
        "name": "机器人",
        "change_pct": 0.03
      },
      {
        "name": "低价股",
        "change_pct": -1.17
      }
    ]
  },
  {
    "code": "000607",
    "name": "华媒控股",
    "hot_rank": 83,
    "hot_rank_chg": -22,
    "stock_cnt": 5789,
    "price": "4.48",
    "change": "-10.04",
    "market_id": "33",
    "circulate_market_value": "3965078500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.88
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.68
      },
      {
        "name": "教育",
        "change_pct": -1.68
      },
      {
        "name": "知识产权",
        "change_pct": -2.9
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.43
      },
      {
        "name": "传媒",
        "change_pct": -2.68
      },
      {
        "name": "社区团购",
        "change_pct": -2.27
      },
      {
        "name": "NFT",
        "change_pct": -3.48
      },
      {
        "name": "数据要素",
        "change_pct": -1.61
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.49
      },
      {
        "name": "国企改革",
        "change_pct": -1.0
      },
      {
        "name": "职业教育",
        "change_pct": -1.8
      },
      {
        "name": "在线教育",
        "change_pct": -1.46
      },
      {
        "name": "区块链",
        "change_pct": -1.8
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 86,
    "hot_rank_chg": 20,
    "stock_cnt": 5789,
    "price": "8.79",
    "change": "4.64",
    "market_id": "33",
    "circulate_market_value": "4114788500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "旅游",
        "change_pct": -0.7
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.66
      },
      {
        "name": "广西概念",
        "change_pct": -1.55
      },
      {
        "name": "低空经济",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "600448",
    "name": "华纺股份",
    "hot_rank": 88,
    "hot_rank_chg": -32,
    "stock_cnt": 5789,
    "price": "3.26",
    "change": "-8.94",
    "market_id": "17",
    "circulate_market_value": "2053212100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -0.76
      },
      {
        "name": "印染",
        "change_pct": -1.5
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.26
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.06
      },
      {
        "name": "抗菌面料",
        "change_pct": -0.88
      },
      {
        "name": "国企改革",
        "change_pct": -1.0
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.79
      },
      {
        "name": "C2M",
        "change_pct": -1.2
      }
    ]
  },
  {
    "code": "600059",
    "name": "古越龙山",
    "hot_rank": 91,
    "hot_rank_chg": 213,
    "stock_cnt": 5789,
    "price": "11.33",
    "change": "5.00",
    "market_id": "17",
    "circulate_market_value": "10327775500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "白酒",
        "change_pct": -0.14
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.68
      },
      {
        "name": "黄酒",
        "change_pct": 2.12
      },
      {
        "name": "国企改革",
        "change_pct": -1.0
      },
      {
        "name": "回购",
        "change_pct": 0.1
      }
    ]
  },
  {
    "code": "002238",
    "name": "天威视讯",
    "hot_rank": 92,
    "hot_rank_chg": 129,
    "stock_cnt": 5789,
    "price": "7.66",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "6147603200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "文化传媒",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -1.86
      },
      {
        "name": "超高清视频",
        "change_pct": -0.73
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.53
      },
      {
        "name": "5G",
        "change_pct": -0.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.69
      },
      {
        "name": "智慧城市",
        "change_pct": -0.79
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.66
      },
      {
        "name": "传媒",
        "change_pct": -2.68
      },
      {
        "name": "在线教育",
        "change_pct": -1.46
      },
      {
        "name": "业绩增长",
        "change_pct": -0.07
      },
      {
        "name": "知识付费",
        "change_pct": -3.27
      },
      {
        "name": "智慧政务",
        "change_pct": -1.74
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.29
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.77
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 93,
    "hot_rank_chg": -18,
    "stock_cnt": 5789,
    "price": "4.41",
    "change": "-5.37",
    "market_id": "33",
    "circulate_market_value": "25819655000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.16
      },
      {
        "name": "人工智能",
        "change_pct": -1.1
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.69
      },
      {
        "name": "水利",
        "change_pct": -0.58
      },
      {
        "name": "直播/短视频",
        "change_pct": -2.82
      },
      {
        "name": "大数据",
        "change_pct": -1.43
      },
      {
        "name": "园林",
        "change_pct": -1.22
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.03
      },
      {
        "name": "数字经济",
        "change_pct": -1.6
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.66
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.89
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.75
      },
      {
        "name": "快手概念股",
        "change_pct": -3.1
      },
      {
        "name": "IGBT",
        "change_pct": 0.31
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.28
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.86
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.49
      },
      {
        "name": "氮化镓",
        "change_pct": 0.6
      },
      {
        "name": "AI营销",
        "change_pct": -3.32
      },
      {
        "name": "华为产业链",
        "change_pct": -0.59
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.29
      },
      {
        "name": "多模态",
        "change_pct": -1.95
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.02
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.84
      },
      {
        "name": "区块链",
        "change_pct": -1.8
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 96,
    "hot_rank_chg": -11,
    "stock_cnt": 5789,
    "price": "8.66",
    "change": "-8.16",
    "market_id": "17",
    "circulate_market_value": "4150911000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.04
      },
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "医药商业",
        "change_pct": -1.54
      },
      {
        "name": "医药",
        "change_pct": -0.27
      },
      {
        "name": "流感",
        "change_pct": -0.5
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 98,
    "hot_rank_chg": 15,
    "stock_cnt": 5789,
    "price": "12.99",
    "change": "-6.28",
    "market_id": "17",
    "circulate_market_value": "19130462000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.97
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.22
      },
      {
        "name": "火电",
        "change_pct": -1.72
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.23
      },
      {
        "name": "风电",
        "change_pct": -1.21
      },
      {
        "name": "国企改革",
        "change_pct": -1.0
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "601091", "name": "沈鼓集团", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5789, "price": "30.00", "change": "-21.01", "market_id": "17", "circulate_market_value": "6334895500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5789, "price": "9.04", "change": "-0.44", "market_id": "17", "circulate_market_value": "22767329000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.48}, {"name": "工业大麻", "change_pct": -1.36}, {"name": "中药", "change_pct": -1.04}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "保健品", "change_pct": -1.12}, {"name": "民营医院", "change_pct": -1.28}, {"name": "医药", "change_pct": -0.27}, {"name": "化学原料药", "change_pct": -0.42}, {"name": "流感", "change_pct": -0.5}, {"name": "振兴东北", "change_pct": -1.25}, {"name": "食品", "change_pct": -0.89}]}, {"code": "001216", "name": "华瓷股份", "hot_rank": 3, "hot_rank_chg": 9, "stock_cnt": 5789, "price": "28.31", "change": "6.95", "market_id": "33", "circulate_market_value": "6987932800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920025", "name": "凯达重工", "hot_rank": 4, "hot_rank_chg": 391, "stock_cnt": 5789, "price": "29.00", "change": "580.75", "market_id": "151", "circulate_market_value": "1479000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5789, "price": "18.82", "change": "-9.99", "market_id": "33", "circulate_market_value": "8618646400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301686", "name": "中塑股份", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5789, "price": "283.50", "change": "-34.53", "market_id": "33", "circulate_market_value": "2475821700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 7, "hot_rank_chg": 36, "stock_cnt": 5789, "price": "6.02", "change": "0.33", "market_id": "33", "circulate_market_value": "212910150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.55}, {"name": "手机产业链", "change_pct": 0.42}, {"name": "超高清视频", "change_pct": -0.73}, {"name": "苹果产业链", "change_pct": 0.62}, {"name": "电竞", "change_pct": -1.97}, {"name": "半导体", "change_pct": 1.19}, {"name": "人工智能", "change_pct": -1.1}, {"name": "互联网医疗", "change_pct": -1.41}, {"name": "VR&AR", "change_pct": -0.69}, {"name": "OLED", "change_pct": 0.95}, {"name": "京津冀", "change_pct": -0.85}, {"name": "物联网", "change_pct": -0.36}, {"name": "指纹识别", "change_pct": 0.44}, {"name": "汽车零部件", "change_pct": -0.17}, {"name": "白马股", "change_pct": -0.58}, {"name": "智能制造", "change_pct": -0.09}, {"name": "小米概念股", "change_pct": 0.03}, {"name": "国产芯片", "change_pct": 0.78}, {"name": "液晶面板/LCD", "change_pct": 0.87}, {"name": "全息概念", "change_pct": -1.13}, {"name": "理想汽车概念股", "change_pct": -0.89}, {"name": "MicroLED", "change_pct": 1.19}, {"name": "钙钛矿电池", "change_pct": 0.68}, {"name": "智能手表", "change_pct": 0.19}, {"name": "MiniLED", "change_pct": 0.49}, {"name": "传感器", "change_pct": 0.26}, {"name": "大硅片", "change_pct": 1.68}, {"name": "AI PC", "change_pct": -0.19}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "回购", "change_pct": 0.1}, {"name": "光电共封装CPO", "change_pct": 0.43}, {"name": "智能眼镜/MR头显", "change_pct": 0.27}, {"name": "玻璃基板封装", "change_pct": 2.36}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5789, "price": "7.06", "change": "9.97", "market_id": "17", "circulate_market_value": "7376908200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "拟收购界面财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.25}, {"name": "上海国企改革", "change_pct": -0.53}, {"name": "复牌股", "change_pct": 1.32}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -2.68}, {"name": "国企改革", "change_pct": -1.0}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 9, "hot_rank_chg": 12, "stock_cnt": 5789, "price": "3.86", "change": "9.97", "market_id": "33", "circulate_market_value": "9042776100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "房产经纪", "xgb_concepts": [{"name": "新零售", "change_pct": -1.8}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "人工智能", "change_pct": -1.1}, {"name": "VR&AR", "change_pct": -0.69}, {"name": "京津冀", "change_pct": -0.85}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "住房租赁", "change_pct": -0.08}, {"name": "破净股", "change_pct": -0.65}, {"name": "数字经济", "change_pct": -1.6}, {"name": "房产经纪", "change_pct": 1.66}, {"name": "物业管理", "change_pct": 0.82}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "AI大模型/智能体", "change_pct": -1.29}]}, {"code": "000002", "name": "万科A", "hot_rank": 11, "hot_rank_chg": 34, "stock_cnt": 5789, "price": "3.92", "change": "2.89", "market_id": "33", "circulate_market_value": "38083244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": -1.14}, {"name": "深圳本地股", "change_pct": -0.53}, {"name": "股权转让", "change_pct": -0.33}, {"name": "房地产", "change_pct": -0.35}, {"name": "养老产业", "change_pct": -1.42}, {"name": "冷链", "change_pct": -0.9}, {"name": "住房租赁", "change_pct": -0.08}, {"name": "破净股", "change_pct": -0.65}, {"name": "冰雪产业", "change_pct": -0.38}, {"name": "物业管理", "change_pct": 0.82}, {"name": "旧改", "change_pct": 0.29}, {"name": "REITs", "change_pct": -0.32}]}, {"code": "600127", "name": "金健米业", "hot_rank": 12, "hot_rank_chg": -8, "stock_cnt": 5789, "price": "16.75", "change": "1.70", "market_id": "17", "circulate_market_value": "10749868900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 13, "hot_rank_chg": 7, "stock_cnt": 5789, "price": "18.50", "change": "9.99", "market_id": "17", "circulate_market_value": "14650222000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "拟收购民族出版社"}, {"code": "603230", "name": "内蒙新华", "hot_rank": 14, "hot_rank_chg": -4, "stock_cnt": 5789, "price": "16.79", "change": "2.94", "market_id": "17", "circulate_market_value": "5935651200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 15, "hot_rank_chg": 15, "stock_cnt": 5789, "price": "47.80", "change": "9.28", "market_id": "17", "circulate_market_value": "44484110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 16, "hot_rank_chg": -2, "stock_cnt": 5789, "price": "17.02", "change": "-6.28", "market_id": "17", "circulate_market_value": "11335320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 17, "hot_rank_chg": -8, "stock_cnt": 5789, "price": "69.94", "change": "-4.19", "market_id": "17", "circulate_market_value": "171608020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 18, "hot_rank_chg": -7, "stock_cnt": 5789, "price": "18.37", "change": "0.49", "market_id": "33", "circulate_market_value": "61099107000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 19, "hot_rank_chg": 12, "stock_cnt": 5789, "price": "58.74", "change": "1.71", "market_id": "33", "circulate_market_value": "67403561000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 20, "hot_rank_chg": -13, "stock_cnt": 5789, "price": "13.29", "change": "-8.15", "market_id": "17", "circulate_market_value": "5110638100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 21, "hot_rank_chg": 44, "stock_cnt": 5789, "price": "23.45", "change": "9.99", "market_id": "17", "circulate_market_value": "52860479000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "尊界"}, {"code": "000504", "name": "南华生物", "hot_rank": 22, "hot_rank_chg": 20, "stock_cnt": 5789, "price": "12.76", "change": "5.37", "market_id": "33", "circulate_market_value": "4199601800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.25}, {"name": "锂电池", "change_pct": 0.09}, {"name": "ST摘帽", "change_pct": -1.75}, {"name": "湖南国企改革", "change_pct": -1.47}, {"name": "污水处理", "change_pct": -0.37}, {"name": "智慧城市", "change_pct": -0.79}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "环保", "change_pct": -0.49}, {"name": "动力电池回收", "change_pct": -0.68}, {"name": "干细胞", "change_pct": 0.34}, {"name": "国企改革", "change_pct": -1.0}]}, {"code": "920229", "name": "世纪数码", "hot_rank": 23, "hot_rank_chg": -10, "stock_cnt": 5789, "price": "92.40", "change": "-30.00", "market_id": "151", "circulate_market_value": "1048740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 24, "hot_rank_chg": -16, "stock_cnt": 5789, "price": "15.14", "change": "-4.60", "market_id": "33", "circulate_market_value": "48835430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 25, "hot_rank_chg": 3, "stock_cnt": 5789, "price": "45.62", "change": "0.33", "market_id": "17", "circulate_market_value": "181183800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 26, "hot_rank_chg": -1, "stock_cnt": 5789, "price": "20.59", "change": "3.62", "market_id": "17", "circulate_market_value": "43064853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 27, "hot_rank_chg": 70, "stock_cnt": 5789, "price": "3.17", "change": "-0.94", "market_id": "33", "circulate_market_value": "6273459700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.65}, {"name": "深圳本地股", "change_pct": -0.53}, {"name": "共享经济", "change_pct": -0.59}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "养老产业", "change_pct": -1.42}, {"name": "住房租赁", "change_pct": -0.08}, {"name": "房产经纪", "change_pct": 1.66}, {"name": "第三代半导体", "change_pct": 0.75}, {"name": "物业管理", "change_pct": 0.82}, {"name": "旧改", "change_pct": 0.29}, {"name": "横琴新区", "change_pct": -1.74}, {"name": "氮化镓", "change_pct": 0.6}, {"name": "REITs", "change_pct": -0.32}, {"name": "华为产业链", "change_pct": -0.59}]}, {"code": "601579", "name": "会稽山", "hot_rank": 28, "hot_rank_chg": 9, "stock_cnt": 5789, "price": "36.75", "change": "-1.90", "market_id": "17", "circulate_market_value": "17620280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 29, "hot_rank_chg": 6, "stock_cnt": 5789, "price": "24.28", "change": "1.04", "market_id": "33", "circulate_market_value": "28564662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 30, "hot_rank_chg": -13, "stock_cnt": 5789, "price": "58.60", "change": "10.01", "market_id": "17", "circulate_market_value": "8375412000.00", "change_type": "1", "change_section": "9", "change_days": "7", "change_reason": "PCB"}, {"code": "600707", "name": "彩虹股份", "hot_rank": 31, "hot_rank_chg": 153, "stock_cnt": 5789, "price": "9.80", "change": "2.62", "market_id": "17", "circulate_market_value": "35159163000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": 0.28}, {"name": "OLED", "change_pct": 0.95}, {"name": "液晶面板/LCD", "change_pct": 0.87}, {"name": "国企改革", "change_pct": -1.0}, {"name": "玻璃基板封装", "change_pct": 2.36}, {"name": "陕西国企改革", "change_pct": -0.18}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 32, "hot_rank_chg": 30, "stock_cnt": 5789, "price": "45.90", "change": "3.78", "market_id": "33", "circulate_market_value": "69672921000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 33, "hot_rank_chg": -15, "stock_cnt": 5789, "price": "16.29", "change": "-9.90", "market_id": "17", "circulate_market_value": "11082407500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 34, "hot_rank_chg": 25, "stock_cnt": 5789, "price": "16.74", "change": "4.23", "market_id": "17", "circulate_market_value": "21498824000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 35, "hot_rank_chg": -12, "stock_cnt": 5789, "price": "13.59", "change": "5.10", "market_id": "17", "circulate_market_value": "24314389000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000676", "name": "智度股份", "hot_rank": 36, "hot_rank_chg": 21, "stock_cnt": 5789, "price": "7.25", "change": "-2.69", "market_id": "33", "circulate_market_value": "9127955400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -1.1}, {"name": "游戏", "change_pct": -2.77}, {"name": "智能音箱", "change_pct": -0.15}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.03}, {"name": "数字经济", "change_pct": -1.6}, {"name": "百度概念股", "change_pct": -1.67}, {"name": "腾讯概念股", "change_pct": -1.66}, {"name": "拼多多概念股", "change_pct": -2.23}, {"name": "传媒", "change_pct": -2.68}, {"name": "全息概念", "change_pct": -1.13}, {"name": "NFT", "change_pct": -3.48}, {"name": "元宇宙", "change_pct": -1.77}, {"name": "web3.0", "change_pct": -2.51}, {"name": "字节跳动概念股", "change_pct": -2.49}, {"name": "数字人民币", "change_pct": -1.61}, {"name": "智慧政务", "change_pct": -1.74}, {"name": "华为鸿蒙", "change_pct": -1.61}, {"name": "盲盒", "change_pct": -1.72}, {"name": "AI营销", "change_pct": -3.32}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "供应链金融", "change_pct": -1.67}, {"name": "ChatGPT", "change_pct": -2.19}, {"name": "AI大模型/智能体", "change_pct": -1.29}, {"name": "小红书概念股", "change_pct": -2.84}, {"name": "区块链", "change_pct": -1.8}]}, {"code": "603598", "name": "引力传媒", "hot_rank": 37, "hot_rank_chg": 39, "stock_cnt": 5789, "price": "19.12", "change": "0.84", "market_id": "17", "circulate_market_value": "5159673500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002971", "name": "和远气体", "hot_rank": 38, "hot_rank_chg": 110, "stock_cnt": 5789, "price": "41.78", "change": "3.57", "market_id": "33", "circulate_market_value": "6726769900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 39, "hot_rank_chg": -23, "stock_cnt": 5789, "price": "27.20", "change": "7.85", "market_id": "33", "circulate_market_value": "16182155000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 40, "hot_rank_chg": -6, "stock_cnt": 5789, "price": "35.78", "change": "-2.98", "market_id": "17", "circulate_market_value": "122115339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 41, "hot_rank_chg": -2, "stock_cnt": 5789, "price": "58.62", "change": "1.31", "market_id": "17", "circulate_market_value": "263968140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 42, "hot_rank_chg": -18, "stock_cnt": 5789, "price": "21.03", "change": "-4.54", "market_id": "17", "circulate_market_value": "46672988000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 43, "hot_rank_chg": 121, "stock_cnt": 5789, "price": "2.20", "change": "0.92", "market_id": "33", "circulate_market_value": "11093468800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.31}, {"name": "新能源整车", "change_pct": -0.42}, {"name": "汽车整车", "change_pct": -0.47}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "低价股", "change_pct": -1.17}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 44, "hot_rank_chg": -25, "stock_cnt": 5789, "price": "87.15", "change": "1.83", "market_id": "33", "circulate_market_value": "63204366000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 45, "hot_rank_chg": -1, "stock_cnt": 5789, "price": "27.09", "change": "-9.82", "market_id": "17", "circulate_market_value": "10863090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 46, "hot_rank_chg": -24, "stock_cnt": 5789, "price": "62.80", "change": "-1.13", "market_id": "33", "circulate_market_value": "95296000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 47, "hot_rank_chg": 104, "stock_cnt": 5789, "price": "55.00", "change": "5.38", "market_id": "17", "circulate_market_value": "55560062000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603636", "name": "南威软件", "hot_rank": 48, "hot_rank_chg": 6, "stock_cnt": 5789, "price": "8.81", "change": "9.99", "market_id": "17", "circulate_market_value": "5112976200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI应用出海", "xgb_concepts": [{"name": "边缘计算", "change_pct": -0.65}, {"name": "国产软件", "change_pct": -1.45}, {"name": "蚂蚁集团概念股", "change_pct": -1.57}, {"name": "共享经济", "change_pct": -0.59}, {"name": "人工智能", "change_pct": -1.1}, {"name": "网络安全", "change_pct": -0.85}, {"name": "福建自贸/海西概念", "change_pct": -1.64}, {"name": "智慧停车", "change_pct": -0.36}, {"name": "物联网", "change_pct": -0.36}, {"name": "大数据", "change_pct": -1.43}, {"name": "智慧城市", "change_pct": -0.79}, {"name": "智慧安防", "change_pct": -0.44}, {"name": "数字经济", "change_pct": -1.6}, {"name": "阿里巴巴概念股", "change_pct": -1.43}, {"name": "信创", "change_pct": -1.34}, {"name": "华为昇腾", "change_pct": -1.01}, {"name": "东数西算/算力", "change_pct": -1.12}, {"name": "电子身份证", "change_pct": -1.17}, {"name": "数据要素", "change_pct": -1.61}, {"name": "数字乡村", "change_pct": -1.68}, {"name": "智慧政务", "change_pct": -1.74}, {"name": "华为云·鲲鹏", "change_pct": -1.51}, {"name": "智慧灯杆", "change_pct": -0.45}, {"name": "算电协同", "change_pct": -0.81}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "自贸区", "change_pct": -1.28}, {"name": "AI大模型/智能体", "change_pct": -1.29}, {"name": "智谱AI", "change_pct": -2.31}, {"name": "DeepSeek概念股", "change_pct": -1.4}, {"name": "算力一体机", "change_pct": -0.88}, {"name": "区块链", "change_pct": -1.8}]}, {"code": "002757", "name": "南兴股份", "hot_rank": 49, "hot_rank_chg": 25, "stock_cnt": 5789, "price": "20.28", "change": "2.12", "market_id": "33", "circulate_market_value": "5763649900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000756", "name": "新华制药", "hot_rank": 50, "hot_rank_chg": -35, "stock_cnt": 5789, "price": "14.53", "change": "-9.97", "market_id": "33", "circulate_market_value": "7248623400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 51, "hot_rank_chg": -2, "stock_cnt": 5789, "price": "51.48", "change": "3.06", "market_id": "17", "circulate_market_value": "43580566000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 52, "hot_rank_chg": 15, "stock_cnt": 5789, "price": "5.32", "change": "1.72", "market_id": "33", "circulate_market_value": "14111569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.31}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "装配式建筑", "change_pct": -0.06}, {"name": "航天", "change_pct": -0.45}, {"name": "旧改", "change_pct": 0.29}]}, {"code": "000981", "name": "山子高科", "hot_rank": 53, "hot_rank_chg": 64, "stock_cnt": 5789, "price": "2.81", "change": "-2.43", "market_id": "33", "circulate_market_value": "26732531000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 1.19}, {"name": "无人驾驶", "change_pct": -0.17}, {"name": "汽车零部件", "change_pct": -0.17}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "新能源车零部件", "change_pct": -0.1}, {"name": "低价股", "change_pct": -1.17}, {"name": "减速器", "change_pct": -0.01}, {"name": "华为汽车", "change_pct": -0.41}]}, {"code": "000910", "name": "大亚圣象", "hot_rank": 54, "hot_rank_chg": 16, "stock_cnt": 5789, "price": "7.58", "change": "10.02", "market_id": "33", "circulate_market_value": "4148042200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "七腾机器人", "xgb_concepts": [{"name": "锂电池", "change_pct": 0.09}, {"name": "林业", "change_pct": -1.2}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "家具家居", "change_pct": -0.04}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "破净股", "change_pct": -0.65}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 55, "hot_rank_chg": -23, "stock_cnt": 5789, "price": "398.72", "change": "-0.84", "market_id": "17", "circulate_market_value": "267428810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 56, "hot_rank_chg": 8, "stock_cnt": 5789, "price": "77.56", "change": "-1.42", "market_id": "17", "circulate_market_value": "10135013400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 57, "hot_rank_chg": 11, "stock_cnt": 5789, "price": "44.87", "change": "-1.19", "market_id": "17", "circulate_market_value": "65599707000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 58, "hot_rank_chg": -3, "stock_cnt": 5789, "price": "15.91", "change": "-10.01", "market_id": "33", "circulate_market_value": "7268487600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600743", "name": "华远控股", "hot_rank": 59, "hot_rank_chg": 56, "stock_cnt": 5789, "price": "2.82", "change": "10.16", "market_id": "17", "circulate_market_value": "6616004500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "控股股东拟变更", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.33}, {"name": "京津冀", "change_pct": -0.85}, {"name": "北京城市规划", "change_pct": -0.67}, {"name": "物业管理", "change_pct": 0.82}, {"name": "低价股", "change_pct": -1.17}, {"name": "国资入股", "change_pct": -0.47}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 60, "hot_rank_chg": -12, "stock_cnt": 5789, "price": "7.98", "change": "-7.21", "market_id": "33", "circulate_market_value": "15282438000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -1.64}, {"name": "林业", "change_pct": -1.2}, {"name": "碳中和", "change_pct": -1.5}, {"name": "自贸区", "change_pct": -1.28}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 61, "hot_rank_chg": -20, "stock_cnt": 5789, "price": "15.87", "change": "-3.70", "market_id": "17", "circulate_market_value": "17401371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 62, "hot_rank_chg": -16, "stock_cnt": 5789, "price": "11.72", "change": "-1.51", "market_id": "33", "circulate_market_value": "10390855800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -0.0}, {"name": "手机产业链", "change_pct": 0.42}, {"name": "超高清视频", "change_pct": -0.73}, {"name": "锂电池", "change_pct": 0.09}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "OLED", "change_pct": 0.95}, {"name": "包装印刷", "change_pct": -0.64}, {"name": "光伏", "change_pct": -0.24}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "小米概念股", "change_pct": 0.03}, {"name": "液晶面板/LCD", "change_pct": 0.87}, {"name": "可降解塑料", "change_pct": 0.67}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "PET复合铜箔", "change_pct": 2.47}]}, {"code": "600584", "name": "长电科技", "hot_rank": 63, "hot_rank_chg": -12, "stock_cnt": 5789, "price": "71.82", "change": "-0.58", "market_id": "17", "circulate_market_value": "128515754000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600630", "name": "龙头股份", "hot_rank": 64, "hot_rank_chg": -24, "stock_cnt": 5789, "price": "8.53", "change": "-10.02", "market_id": "17", "circulate_market_value": "3624069400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.48}, {"name": "上海国企改革", "change_pct": -0.53}, {"name": "一带一路", "change_pct": -0.81}, {"name": "优化生育（三孩）", "change_pct": -0.88}, {"name": "纺织服装", "change_pct": -0.76}, {"name": "上海自由贸易港", "change_pct": -1.01}, {"name": "进口博览会", "change_pct": -1.65}, {"name": "自由贸易港", "change_pct": -1.36}, {"name": "物业管理", "change_pct": 0.82}, {"name": "国企改革", "change_pct": -1.0}, {"name": "新冠病毒防治", "change_pct": -0.79}, {"name": "自贸区", "change_pct": -1.28}]}, {"code": "603629", "name": "利通电子", "hot_rank": 65, "hot_rank_chg": -18, "stock_cnt": 5789, "price": "111.57", "change": "-3.79", "market_id": "17", "circulate_market_value": "40245910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 66, "hot_rank_chg": -37, "stock_cnt": 5789, "price": "15.92", "change": "-10.01", "market_id": "17", "circulate_market_value": "7075555600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600770", "name": "综艺股份", "hot_rank": 67, "hot_rank_chg": 33, "stock_cnt": 5789, "price": "6.51", "change": "-1.81", "market_id": "17", "circulate_market_value": "8463000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.25}, {"name": "半导体", "change_pct": 1.19}, {"name": "股权转让", "change_pct": -0.33}, {"name": "手游", "change_pct": -2.92}, {"name": "人工智能", "change_pct": -1.1}, {"name": "游戏", "change_pct": -2.77}, {"name": "光伏", "change_pct": -0.24}, {"name": "国产芯片", "change_pct": 0.78}, {"name": "CPU概念", "change_pct": -0.23}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 68, "hot_rank_chg": -35, "stock_cnt": 5789, "price": "13.52", "change": "-3.77", "market_id": "33", "circulate_market_value": "47021617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 69, "hot_rank_chg": -11, "stock_cnt": 5789, "price": "7.53", "change": "-7.15", "market_id": "33", "circulate_market_value": "12251263200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.48}, {"name": "电竞", "change_pct": -1.97}, {"name": "手游", "change_pct": -2.92}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "人工智能", "change_pct": -1.1}, {"name": "游戏", "change_pct": -2.77}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.6}, {"name": "腾讯概念股", "change_pct": -1.66}, {"name": "快手概念股", "change_pct": -3.1}, {"name": "元宇宙", "change_pct": -1.77}, {"name": "虚拟数字人", "change_pct": -2.28}, {"name": "东数西算/算力", "change_pct": -1.12}, {"name": "web3.0", "change_pct": -2.51}, {"name": "AIGC概念", "change_pct": -1.86}, {"name": "数据要素", "change_pct": -1.61}, {"name": "字节跳动概念股", "change_pct": -2.49}, {"name": "AI营销", "change_pct": -3.32}, {"name": "ChatGPT", "change_pct": -2.19}, {"name": "智能眼镜/MR头显", "change_pct": 0.27}, {"name": "AI大模型/智能体", "change_pct": -1.29}, {"name": "人形机器人", "change_pct": 0.08}, {"name": "短剧/互动影游", "change_pct": -2.77}, {"name": "多模态", "change_pct": -1.95}, {"name": "AI视频", "change_pct": -3.13}, {"name": "IP经济/谷子经济", "change_pct": -1.86}, {"name": "小红书概念股", "change_pct": -2.84}]}, {"code": "002080", "name": "中材科技", "hot_rank": 70, "hot_rank_chg": -18, "stock_cnt": 5789, "price": "60.70", "change": "-2.88", "market_id": "33", "circulate_market_value": "101862102000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 71, "hot_rank_chg": -21, "stock_cnt": 5789, "price": "193.00", "change": "-2.58", "market_id": "33", "circulate_market_value": "267560090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300684", "name": "中石科技", "hot_rank": 72, "hot_rank_chg": 30, "stock_cnt": 5789, "price": "119.50", "change": "6.93", "market_id": "33", "circulate_market_value": "24446734000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001317", "name": "三羊马", "hot_rank": 73, "hot_rank_chg": -35, "stock_cnt": 5789, "price": "59.36", "change": "-10.01", "market_id": "33", "circulate_market_value": "5075429400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 74, "hot_rank_chg": -48, "stock_cnt": 5789, "price": "7.10", "change": "-4.44", "market_id": "33", "circulate_market_value": "7333844200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.52}, {"name": "锂电池", "change_pct": 0.09}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "铜箔/覆铜板", "change_pct": 2.02}, {"name": "粤港澳大湾区", "change_pct": -1.36}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -1.74}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 75, "hot_rank_chg": -39, "stock_cnt": 5789, "price": "490.97", "change": "0.36", "market_id": "17", "circulate_market_value": "14772168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002614", "name": "奥佳华", "hot_rank": 76, "hot_rank_chg": 48, "stock_cnt": 5789, "price": "7.57", "change": "10.03", "market_id": "33", "circulate_market_value": "3340454100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "股份转让", "xgb_concepts": [{"name": "医疗器械", "change_pct": 0.49}, {"name": "股权转让", "change_pct": -0.33}, {"name": "人工智能", "change_pct": -1.1}, {"name": "养老产业", "change_pct": -1.42}, {"name": "福建自贸/海西概念", "change_pct": -1.64}, {"name": "外贸受益概念", "change_pct": -0.06}, {"name": "小家电", "change_pct": -0.77}, {"name": "机器人", "change_pct": 0.03}, {"name": "家电", "change_pct": -0.34}, {"name": "RCEP概念", "change_pct": -0.42}, {"name": "血氧仪", "change_pct": 0.27}, {"name": "华为鸿蒙", "change_pct": -1.61}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "自贸区", "change_pct": -1.28}, {"name": "IP经济/谷子经济", "change_pct": -1.86}]}, {"code": "601995", "name": "中金公司", "hot_rank": 77, "hot_rank_chg": 11, "stock_cnt": 5789, "price": "32.65", "change": "2.67", "market_id": "17", "circulate_market_value": "95453661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 78, "hot_rank_chg": 5, "stock_cnt": 5789, "price": "18.60", "change": "-1.48", "market_id": "33", "circulate_market_value": "10851951600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 79, "hot_rank_chg": 47, "stock_cnt": 5789, "price": "9.26", "change": "-7.03", "market_id": "33", "circulate_market_value": "2634299700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.23}, {"name": "ST摘帽", "change_pct": -1.75}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "教育", "change_pct": -1.68}, {"name": "阿里巴巴概念股", "change_pct": -1.43}, {"name": "职业教育", "change_pct": -1.8}, {"name": "在线教育", "change_pct": -1.46}, {"name": "华为鸿蒙", "change_pct": -1.61}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "智谱AI", "change_pct": -2.31}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 80, "hot_rank_chg": -11, "stock_cnt": 5789, "price": "922.50", "change": "-0.56", "market_id": "33", "circulate_market_value": "1023916890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600503", "name": "华丽家族", "hot_rank": 81, "hot_rank_chg": 12, "stock_cnt": 5789, "price": "2.94", "change": "10.11", "market_id": "17", "circulate_market_value": "4710732600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "房地产开发", "xgb_concepts": [{"name": "房地产", "change_pct": -0.35}, {"name": "石墨烯", "change_pct": 0.01}, {"name": "机器人", "change_pct": 0.03}, {"name": "低价股", "change_pct": -1.17}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 82, "hot_rank_chg": -5, "stock_cnt": 5789, "price": "37.74", "change": "-2.71", "market_id": "17", "circulate_market_value": "26092516000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000607", "name": "华媒控股", "hot_rank": 83, "hot_rank_chg": -22, "stock_cnt": 5789, "price": "4.48", "change": "-10.04", "market_id": "33", "circulate_market_value": "3965078500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": -0.88}, {"name": "浙江国企改革", "change_pct": -0.68}, {"name": "教育", "change_pct": -1.68}, {"name": "知识产权", "change_pct": -2.9}, {"name": "阿里巴巴概念股", "change_pct": -1.43}, {"name": "传媒", "change_pct": -2.68}, {"name": "社区团购", "change_pct": -2.27}, {"name": "NFT", "change_pct": -3.48}, {"name": "数据要素", "change_pct": -1.61}, {"name": "字节跳动概念股", "change_pct": -2.49}, {"name": "国企改革", "change_pct": -1.0}, {"name": "职业教育", "change_pct": -1.8}, {"name": "在线教育", "change_pct": -1.46}, {"name": "区块链", "change_pct": -1.8}]}, {"code": "301047", "name": "义翘神州", "hot_rank": 84, "hot_rank_chg": 30, "stock_cnt": 5789, "price": "150.00", "change": "10.12", "market_id": "33", "circulate_market_value": "17937093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 85, "hot_rank_chg": -1, "stock_cnt": 5789, "price": "457.89", "change": "0.28", "market_id": "17", "circulate_market_value": "186058250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 86, "hot_rank_chg": 20, "stock_cnt": 5789, "price": "8.79", "change": "4.64", "market_id": "33", "circulate_market_value": "4114788500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.31}, {"name": "旅游", "change_pct": -0.7}, {"name": "腾讯概念股", "change_pct": -1.66}, {"name": "广西概念", "change_pct": -1.55}, {"name": "低空经济", "change_pct": -0.27}]}, {"code": "600183", "name": "生益科技", "hot_rank": 87, "hot_rank_chg": -8, "stock_cnt": 5789, "price": "143.56", "change": "0.08", "market_id": "17", "circulate_market_value": "346230670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600448", "name": "华纺股份", "hot_rank": 88, "hot_rank_chg": -32, "stock_cnt": 5789, "price": "3.26", "change": "-8.94", "market_id": "17", "circulate_market_value": "2053212100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -0.76}, {"name": "印染", "change_pct": -1.5}, {"name": "山东国企改革", "change_pct": -1.26}, {"name": "外贸受益概念", "change_pct": -0.06}, {"name": "抗菌面料", "change_pct": -0.88}, {"name": "国企改革", "change_pct": -1.0}, {"name": "新冠病毒防治", "change_pct": -0.79}, {"name": "C2M", "change_pct": -1.2}]}, {"code": "300476", "name": "胜宏科技", "hot_rank": 89, "hot_rank_chg": 23, "stock_cnt": 5789, "price": "244.30", "change": "0.91", "market_id": "33", "circulate_market_value": "211367130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 90, "hot_rank_chg": -24, "stock_cnt": 5789, "price": "223.01", "change": "2.39", "market_id": "17", "circulate_market_value": "94354539000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600059", "name": "古越龙山", "hot_rank": 91, "hot_rank_chg": 213, "stock_cnt": 5789, "price": "11.33", "change": "5.00", "market_id": "17", "circulate_market_value": "10327775500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "白酒", "change_pct": -0.14}, {"name": "浙江国企改革", "change_pct": -0.68}, {"name": "黄酒", "change_pct": 2.12}, {"name": "国企改革", "change_pct": -1.0}, {"name": "回购", "change_pct": 0.1}]}, {"code": "002238", "name": "天威视讯", "hot_rank": 92, "hot_rank_chg": 129, "stock_cnt": 5789, "price": "7.66", "change": "10.06", "market_id": "33", "circulate_market_value": "6147603200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "文化传媒", "xgb_concepts": [{"name": "广电", "change_pct": -1.86}, {"name": "超高清视频", "change_pct": -0.73}, {"name": "深圳本地股", "change_pct": -0.53}, {"name": "5G", "change_pct": -0.49}, {"name": "云计算数据中心", "change_pct": -0.69}, {"name": "智慧城市", "change_pct": -0.79}, {"name": "腾讯概念股", "change_pct": -1.66}, {"name": "传媒", "change_pct": -2.68}, {"name": "在线教育", "change_pct": -1.46}, {"name": "业绩增长", "change_pct": -0.07}, {"name": "知识付费", "change_pct": -3.27}, {"name": "智慧政务", "change_pct": -1.74}, {"name": "AI大模型/智能体", "change_pct": -1.29}, {"name": "短剧/互动影游", "change_pct": -2.77}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 93, "hot_rank_chg": -18, "stock_cnt": 5789, "price": "4.41", "change": "-5.37", "market_id": "33", "circulate_market_value": "25819655000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.16}, {"name": "人工智能", "change_pct": -1.1}, {"name": "云计算数据中心", "change_pct": -0.69}, {"name": "水利", "change_pct": -0.58}, {"name": "直播/短视频", "change_pct": -2.82}, {"name": "大数据", "change_pct": -1.43}, {"name": "园林", "change_pct": -1.22}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.03}, {"name": "数字经济", "change_pct": -1.6}, {"name": "腾讯概念股", "change_pct": -1.66}, {"name": "理想汽车概念股", "change_pct": -0.89}, {"name": "第三代半导体", "change_pct": 0.75}, {"name": "快手概念股", "change_pct": -3.1}, {"name": "IGBT", "change_pct": 0.31}, {"name": "虚拟数字人", "change_pct": -2.28}, {"name": "AIGC概念", "change_pct": -1.86}, {"name": "字节跳动概念股", "change_pct": -2.49}, {"name": "氮化镓", "change_pct": 0.6}, {"name": "AI营销", "change_pct": -3.32}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "AI大模型/智能体", "change_pct": -1.29}, {"name": "多模态", "change_pct": -1.95}, {"name": "液冷服务器", "change_pct": -0.02}, {"name": "小红书概念股", "change_pct": -2.84}, {"name": "区块链", "change_pct": -1.8}]}, {"code": "600367", "name": "红星发展", "hot_rank": 94, "hot_rank_chg": 46, "stock_cnt": 5789, "price": "39.21", "change": "2.40", "market_id": "17", "circulate_market_value": "12624568500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600593", "name": "大连圣亚", "hot_rank": 95, "hot_rank_chg": 105, "stock_cnt": 5789, "price": "49.79", "change": "5.67", "market_id": "17", "circulate_market_value": "6412952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 96, "hot_rank_chg": -11, "stock_cnt": 5789, "price": "8.66", "change": "-8.16", "market_id": "17", "circulate_market_value": "4150911000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.04}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "医药商业", "change_pct": -1.54}, {"name": "医药", "change_pct": -0.27}, {"name": "流感", "change_pct": -0.5}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 97, "hot_rank_chg": -17, "stock_cnt": 5789, "price": "94.39", "change": "-0.37", "market_id": "33", "circulate_market_value": "61637378000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 98, "hot_rank_chg": 15, "stock_cnt": 5789, "price": "12.99", "change": "-6.28", "market_id": "17", "circulate_market_value": "19130462000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.97}, {"name": "电力体制改革", "change_pct": -2.22}, {"name": "火电", "change_pct": -1.72}, {"name": "氢能源/燃料电池", "change_pct": -0.23}, {"name": "风电", "change_pct": -1.21}, {"name": "国企改革", "change_pct": -1.0}]}, {"code": "603823", "name": "百合花", "hot_rank": 99, "hot_rank_chg": 8, "stock_cnt": 5789, "price": "50.47", "change": "-10.00", "market_id": "17", "circulate_market_value": "21014078000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 100, "hot_rank_chg": -73, "stock_cnt": 5789, "price": "13.19", "change": "-2.80", "market_id": "17", "circulate_market_value": "5520108900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600843", "name": "上工申贝", "price": 7.61, "change_pct": 9.97, "reason": "公司计划2026年集中资源攻坚碳纤维轻型运动飞机等新项目的国产化与量产，完成MOSAIC轻型飞机研发并启动生产，实现首架两座水陆两栖轻型运动飞机的国产化落地，并启动电动三座飞机的开发工作", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.43, "first_limit_up": 1790127047, "break_limit_up_times": 1}, {"code": "000910", "name": "大亚圣象", "price": 7.58, "change_pct": 10.01, "reason": "1、板材行业龙头；公司研发生产的超薄PCB纤维板有利于丰富公司产品矩阵，开拓高端电子材料市场；\n2、公司以自有资金1500万认购嘉兴翼龙股权投资合伙企业28.30189%的份额，该基金拟以股权投资的方式投资七腾机器人", "plates": ["PCB板"], "limit_up_days": 4, "turnover_ratio": 5.51, "first_limit_up": 1790127039, "break_limit_up_times": 0}, {"code": "600503", "name": "华丽家族", "price": 2.94, "change_pct": 10.11, "reason": "1、公司以高端地产开发为基石，开发类型涵盖低密住宅、别墅、公寓、商铺及城市更新项目，聚焦上海、苏州、遵义核心城市；\n2、公司控股的南江机器人主要产品包括为面向3C制造行业、医药行业、汽车制造行业和光伏行业中的智慧物流环节而设计的智能移动机器人iAGV系列、智能搬运机器人iCarrier系列以及相应的智能调度系统", "plates": ["房地产"], "limit_up_days": 3, "turnover_ratio": 25.86, "first_limit_up": 1790127836, "break_limit_up_times": 8}, {"code": "601811", "name": "新华文轩", "price": 18.5, "change_pct": 9.99, "reason": "四川省出版传媒行业龙头，省内义务教育阶段学生教科书唯一供货方", "plates": ["传媒"], "limit_up_days": 4, "turnover_ratio": 2.1, "first_limit_up": 1790127016, "break_limit_up_times": 0}, {"code": "002614", "name": "奥佳华", "price": 7.57, "change_pct": 10.03, "reason": "1、公司是全国最大的养老按摩器材生产制造服务商，实控人联合自然人股东折价转让10%股份；\n2、旗下AI按摩机器人运用了语音交互、人脸识别、智能生理参数检测等技术，还接入DeepSeek，打造健康生态AI大模型", "plates": ["股权转让"], "limit_up_days": 3, "turnover_ratio": 29.8, "first_limit_up": 1790127069, "break_limit_up_times": 9}, {"code": "600605", "name": "汇通能源", "price": 31.61, "change_pct": 9.99, "reason": "公司受让兴华芯7.43%股权交易已完成，标的公司是一家专注于半导体光掩模版（Photomask）研发与制造的高科技企业", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.06, "first_limit_up": 1790128319, "break_limit_up_times": 3}, {"code": "002426", "name": "胜利精密", "price": 2.96, "change_pct": 10.04, "reason": "1、公司复合铜箔项目处于工艺优化、样品测试和量产准备阶段，前期已实现小批量供货，目前正持续推进客户验证和产品导入，并同步进行生产线设备的性能优化及调试；\n2、国内产销规模最大、研发能力最强的专业精密结构模组制造服务商之一，联想笔记本金属机壳供应商之一", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.38, "first_limit_up": 1790127231, "break_limit_up_times": 0}, {"code": "603328", "name": "依顿电子", "price": 15.2, "change_pct": 9.99, "reason": "1、印制电路板行业内的重要品牌之一；公司的印制电路板具有高精度、高密度、高可靠性的特点，已广泛应用于汽车电子、新能源及电源、计算机与通讯、工控医疗、多媒体与显示等领域；\n2、公司是苹果的间接供应商，目前进入苹果产业链的产品主要用于电源系统及模块，键盘使用，数据线连接器等", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 6.62, "first_limit_up": 1790129917, "break_limit_up_times": 0}, {"code": "603991", "name": "领先股份", "price": 185.57, "change_pct": 10.0, "reason": "控股51%子公司苏州桔云主要产品用于半导体后道先进封装领域，包括涂胶显影设备、清洗设备等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.0, "first_limit_up": 1790139712, "break_limit_up_times": 2}, {"code": "605058", "name": "澳弘电子", "price": 58.6, "change_pct": 10.01, "reason": "公司拟3.3亿元投建高端PCB定制化生产基地，产品以高性能、高可靠性的多层铝基盲孔板、阶梯槽PCB、热电分离铜基板、microled板、高多层厚铜板、多层特种线圈板、高频雷达板等高端定制化PCB产品为主", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 15.32, "first_limit_up": 1790142677, "break_limit_up_times": 0}, {"code": "603396", "name": "金辰股份", "price": 32.4, "change_pct": 10.02, "reason": "公司为全球光伏组件设备龙头，拟投资约10亿元建设半导体装备研发及制造项目，布局TGV玻璃基封装等设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.08, "first_limit_up": 1790127459, "break_limit_up_times": 0}, {"code": "600825", "name": "新华传媒", "price": 7.06, "change_pct": 9.97, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组", "传媒"], "limit_up_days": 3, "turnover_ratio": 0.44, "first_limit_up": 1790126700, "break_limit_up_times": 0}, {"code": "603067", "name": "振华股份", "price": 39.86, "change_pct": 9.99, "reason": "公司为全球产能最大、产品线最全的铬化学品龙头，金属铬产品在高温合金、铜基、铝基特种合金、高端焊接材料、溅射靶材等领域广泛应用，高温合金是燃气轮机的主要材料，单质铬的添加量在15%~20%之间", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.03, "first_limit_up": 1790139861, "break_limit_up_times": 2}, {"code": "603636", "name": "南威软件", "price": 8.81, "change_pct": 9.99, "reason": "1、公司以人工智能重构数字政府、公共安全等传统业务，推出政务专属大模型与面向C端的茶寿健康大模型；\n2、公司智算中心已落地3285万元算力租赁框架订单，并面向政企及海外文娱业务拓展算力服务", "plates": ["AI大模型/智能体"], "limit_up_days": 3, "turnover_ratio": 12.62, "first_limit_up": 1790126700, "break_limit_up_times": 3}, {"code": "002909", "name": "集泰股份", "price": 7.54, "change_pct": 10.07, "reason": "公司当前研发的液冷导热硅油，其应用主要聚焦于数据中心及储能领域的热管理解决方案", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 19.49, "first_limit_up": 1790130867, "break_limit_up_times": 2}, {"code": "603124", "name": "江南新材", "price": 145, "change_pct": 10.0, "reason": "公司铜基新材料产品广泛应用于PCB制造及服务器液冷散热领域，高精密铜基散热片已应用于服务器液冷散热", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.54, "first_limit_up": 1790139762, "break_limit_up_times": 0}, {"code": "002286", "name": "保龄宝", "price": 8.75, "change_pct": 10.06, "reason": "国内功能糖龙头之一，全球5家赤藓糖醇生产商之一", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.68, "first_limit_up": 1790129574, "break_limit_up_times": 0}, {"code": "001234", "name": "泰慕士", "price": 32.18, "change_pct": 10.02, "reason": "公司出口占比约30%，主营业务为针织面料与针织服装的研产销，主要产品可以分为运动服装、休闲服装及儿童服装，为迪卡侬、森马服饰、Quiksilver、Kappa、佐丹奴、全棉时代等知名服装品牌提供贴牌加工服务，目前与安踏合作的产品主要是运动服装和儿童服装", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 3.04, "first_limit_up": 1790126700, "break_limit_up_times": 0}, {"code": "600802", "name": "福建水泥", "price": 6.02, "change_pct": 10.05, "reason": "公司为福建省水泥行业的传统龙头企业，是福建地区产能规模最大的水泥制造企业", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 8.01, "first_limit_up": 1790128884, "break_limit_up_times": 0}, {"code": "600653", "name": "申华控股", "price": 1.87, "change_pct": 10.0, "reason": "实控人沈阳市国资委，公司主营汽车销售", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 3.83, "first_limit_up": 1790127909, "break_limit_up_times": 0}, {"code": "600293", "name": "三峡新材", "price": 3.7, "change_pct": 10.12, "reason": "公司正加速向汽车玻璃、电子玻璃等高附加值领域拓展", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 5.52, "first_limit_up": 1790127136, "break_limit_up_times": 0}, {"code": "688337", "name": "普源精电", "price": 57.18, "change_pct": 20.0, "reason": "光模块等AI基础设施需求爆发催化测试仪器，公司测试电源订单饱满，超高带宽实时示波器等新品待落地", "plates": ["仪器仪表"], "limit_up_days": 1, "turnover_ratio": 7.63, "first_limit_up": 1790139876, "break_limit_up_times": 1}, {"code": "603937", "name": "丽岛新材", "price": 12.97, "change_pct": 10.01, "reason": "全资子公司丽岛新能源主要产品为铝带、箔材产品等，是利用铝箔等的良好导电性，用作锂电池的集流体材料", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 5.11, "first_limit_up": 1790130449, "break_limit_up_times": 0}, {"code": "600230", "name": "沧州大化", "price": 14.82, "change_pct": 10.02, "reason": "1、公司此前共聚硅PC产品投料试车成功，使公司成为国内第一家连续生产法生产共聚硅PC的企业，填补了该领域国内空白；\n2、公司拥有烧碱产能16万吨/年", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.62, "first_limit_up": 1790128518, "break_limit_up_times": 1}, {"code": "688056", "name": "莱伯泰科", "price": 52.92, "change_pct": 20.0, "reason": "国内实验分析仪器和洁净环保型实验室的主要供应商之一；公司自主研发的质谱仪系列产品首次实现国产ICP-MS在半导体行业芯片生产线上的应用，并通过国际半导体产业协会SEMI认证，应用于半导体领域的ICP-MS/MS产品已实现销售", "plates": ["仪器仪表"], "limit_up_days": 1, "turnover_ratio": 3.86, "first_limit_up": 1790140970, "break_limit_up_times": 0}, {"code": "301150", "name": "中一科技", "price": 49.2, "change_pct": 20.0, "reason": "1、公司高频高速铜箔已向头部PCB客户批量供货；\n2、公司已具备固态电池用锂-铜一体化复合负极材料技术", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 14.55, "first_limit_up": 1790130771, "break_limit_up_times": 3}, {"code": "603222", "name": "济民健康", "price": 8.94, "change_pct": 9.96, "reason": "1、子公司博鳌国际医院拥有国内唯一一家通过日本国厚生省认证的国际再生医学实验室，建成了包括细胞存储、国际标准细胞制备、细胞治疗临床研究、干细胞与再生医学技术转化四大核心技术平台，医院自体脂肪干细胞获得中检院的质量检定；\n2、公司近日全资成立浙江继明芯集成电路有限公司与上海继明芯微电子有限公司，经营范围涵盖集成电路芯片设计及服务、人工智能应用软件开发等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.28, "first_limit_up": 1790128672, "break_limit_up_times": 0}, {"code": "002635", "name": "安洁科技", "price": 16.79, "change_pct": 10.03, "reason": "1、苏州志烽已配合客户批量生产出货光模块芯片基座，包含钨铜合金和氮化铝陶瓷等材料方案；\n2、公司产品包含PCB相关屏蔽、导热缓冲材料等产品；\n3、公司正利用新能源汽车精密结构件技术经验，推进人形机器人相关零部件的技术拓展和业务规划", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.17, "first_limit_up": 1790128155, "break_limit_up_times": 1}, {"code": "002238", "name": "天威视讯", "price": 7.66, "change_pct": 10.06, "reason": "1、公司在现有融合业务基础上,融合AI大模型技术,推出了电视AI语音数字人、智能客服等创新服务,优化业务的用户体验,提升客户服务效率;同时通过构建AI运维智能体,逐步向AI驱动的智能化运维体系转型；\n2、公司数据中心业务主要涵盖机柜托管、服务器租用、网络资源租用以及为客户提供定制化解决方案等服务内容。\n3、公司是深圳地区最主要的电视服务提供商，数字电视服务市占率第一", "plates": ["AI大模型/智能体"], "limit_up_days": 2, "turnover_ratio": 1.43, "first_limit_up": 1790126700, "break_limit_up_times": 0}, {"code": "002638", "name": "勤上股份", "price": 4.74, "change_pct": 9.98, "reason": "公司深耕大功率LED照明二十余年，产品覆盖道路、隧道、景观等场景", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.9, "first_limit_up": 1790144022, "break_limit_up_times": 0}, {"code": "300931", "name": "通用电梯", "price": 19.21, "change_pct": 19.99, "reason": "公司主要为各类建筑的电梯提供系统性的解决方案及全面更新改造方案，在电梯行业处于第二梯队", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 24.01, "first_limit_up": 1790128776, "break_limit_up_times": 35}, {"code": "603803", "name": "瑞斯康达", "price": 12.87, "change_pct": 10.0, "reason": "国内光纤通信接入领域领军企业；公司已成功发布智算中心 400G 算力交换机，可适配智算场景下的算力传输需求", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 5.0, "first_limit_up": 1790139652, "break_limit_up_times": 0}, {"code": "002935", "name": "天奥电子", "price": 17.52, "change_pct": 9.98, "reason": "1、公司DDR系列存储器产品谱系并已取得国防军工领域客户订单；\n2、公司星载原子钟、宇航级晶振及时统设备是航天 “时间基准核心”，配套北斗、载人航天、天宫空间站、G60 星座及星网，T0 控制台保障火箭发射时频同步，为星箭时频与同步提供高可靠支撑。", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 3.54, "first_limit_up": 1790139951, "break_limit_up_times": 0}, {"code": "600418", "name": "江淮汽车", "price": 23.45, "change_pct": 9.99, "reason": "消息称玛莎拉蒂与华为、江淮汽车开展长期产业合作谈判", "plates": ["新能源汽车"], "limit_up_days": 2, "turnover_ratio": 9.63, "first_limit_up": 1790145700, "break_limit_up_times": 0}, {"code": "688512", "name": "慧智微", "price": 17.32, "change_pct": 20.03, "reason": "公司是一家为智能手机、物联网等领域提供射频前端的芯片设计公司，主营业务为射频前端芯片及模组的研发、设计和销售", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 17.71, "first_limit_up": 1790141297, "break_limit_up_times": 24}, {"code": "603373", "name": "安邦护卫", "price": 47.96, "change_pct": 10.0, "reason": "1、公司联合温州理工学院科研团队打造了“智能安防中枢平台”，创新性地应用四足机器人技术；\n2、下属子公司衢州安邦和衢州通航开展的无人机业务包含无人机驾驶员培训（民航培训、警航培训）、低空管制服务、无人机测绘等，公司自主研发的“零距离”空地一体无人机5G飞行平台还运用到消防救援等，均为低空经济范畴", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.64, "first_limit_up": 1790140620, "break_limit_up_times": 0}, {"code": "000560", "name": "我爱我家", "price": 3.86, "change_pct": 9.97, "reason": "1、国内最早开展全国性房地产经纪连锁业务的企业之一；\n2、公司开发的小爱聊天助手基于自然语言理解、语义识别、实时推荐等多种技术，利用客户与经纪人聊天的实时数据、客户历史画像、公司积累的海量数据和相关知识库，构建了一套辅助经纪人与客户聊天交互的智能服务系统", "plates": ["房地产"], "limit_up_days": 3, "turnover_ratio": 13.45, "first_limit_up": 1790127021, "break_limit_up_times": 10}, {"code": "600743", "name": "华远控股", "price": 2.82, "change_pct": 10.16, "reason": "公司控股股东华远集团拟转让所持29.9%股份予金融街资本", "plates": ["股权转让"], "limit_up_days": 3, "turnover_ratio": 4.21, "first_limit_up": 1790127010, "break_limit_up_times": 0}, {"code": "002633", "name": "申科股份", "price": 15.87, "change_pct": 9.98, "reason": "公司于2025年12月在上海投资设立燃气轮机业务全资子公司，旨在抢抓燃气轮机产业发展机遇，拓展高端装备制造业务板块", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.84, "first_limit_up": 1790133429, "break_limit_up_times": 0}, {"code": "002849", "name": "威星智能", "price": 23, "change_pct": 10.0, "reason": "公司贵安智算中心项目一期建成后，可为市场提供国产 370P 全功能智算服务能力", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.96, "first_limit_up": 1790129781, "break_limit_up_times": 1}, {"code": "002119", "name": "康强电子", "price": 26.92, "change_pct": 10.01, "reason": "公司主营引线框架、键合丝等半导体封装材料", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.27, "first_limit_up": 1790132823, "break_limit_up_times": 0}, {"code": "002541", "name": "鸿路钢构", "price": 19.69, "change_pct": 10.0, "reason": "公司是目前中国大型钢结构企业集团之一，十大生产基地已规模化投入使用约3300多台自研焊接机器人工作站，且焊接机器人已远销越南、墨西哥、以色列等国家，累计对外销售435台", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.36, "first_limit_up": 1790143971, "break_limit_up_times": 0}, {"code": "688656", "name": "浩欧博", "price": 141.04, "change_pct": 20.0, "reason": "过敏检测领域国产龙头，此前中国生物制药拟收购公司最多55%股份", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.83, "first_limit_up": 1790128087, "break_limit_up_times": 1}, {"code": "002937", "name": "兴瑞科技", "price": 30.13, "change_pct": 10.0, "reason": "消息称公司新增数据中心液冷服务器快接头、冷板等组件，已通过台湾配套英伟达等，持续扩展液冷组件品类", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 9.12, "first_limit_up": 1790143887, "break_limit_up_times": 0}, {"code": "002989", "name": "中天精装", "price": 27.96, "change_pct": 9.99, "reason": "公司布局半导体行业的高端载板、存储封测及智能存储芯片领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 10.15, "first_limit_up": 1790133957, "break_limit_up_times": 0}, {"code": "603949", "name": "雪龙集团", "price": 15.36, "change_pct": 10.03, "reason": "公司对深创投中小企业发展基金（新疆）有限合伙企业的持股比例为0.7239%，后者持有杭州宇树科技有限公司1.3546%股份", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.85, "first_limit_up": 1790127926, "break_limit_up_times": 1}, {"code": "002819", "name": "东方中科", "price": 24.24, "change_pct": 9.98, "reason": "1、电子测试测量领域领先的综合服务商；公司为党政机关、大型国有企业提供计算机网络系统、网络安全系统以及电子政务应用系统的规划、设计、实施、运维、技术支持等全面服务；\n2、控股子公司北汇信息2024年已中标中国一汽“脑机接口测试技术采购”项目，可提供自动驾驶互动测试验证等仿真系统", "plates": ["仪器仪表"], "limit_up_days": 1, "turnover_ratio": 3.99, "first_limit_up": 1790133132, "break_limit_up_times": 0}, {"code": "000850", "name": "华茂股份", "price": 4.65, "change_pct": 9.93, "reason": "安庆市地方国企，主要从事混纺纱线、面料、产业用纺织品等棉纺产品的生产、销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.77, "first_limit_up": 1790127096, "break_limit_up_times": 0}, {"code": "688628", "name": "优利德", "price": 114.44, "change_pct": 20.0, "reason": "1、测试测量仪器仪表领域知名的本土品牌；主要产品包括电子电工测试仪表、测试仪器、温度及环境测试仪表、电力及高压测试仪表及测绘测量仪表五大产品线，覆盖数十种物理单位的测试测量，“UNI-T”在境内外具有较高的市场美誉度；\n2、公司与浙江信测通信签署股份转让意向协议，拟收购其51%股权，切入光通信测试设备领域，强化产业链协同", "plates": ["仪器仪表"], "limit_up_days": 1, "turnover_ratio": 11.79, "first_limit_up": 1790131876, "break_limit_up_times": 1}, {"code": "600371", "name": "万向德农", "price": 17.28, "change_pct": 9.99, "reason": "公司是国内采用单倍体育种技术领先供应商", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 27.77, "first_limit_up": 1790140561, "break_limit_up_times": 0}, {"code": "603773", "name": "沃格光电", "price": 102.5, "change_pct": 10.0, "reason": "公司光模块/CPO玻璃基封装载板已批量送样，与北极雄芯战略合作开发AI芯片玻璃基先进封装", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 21.94, "first_limit_up": 1790127187, "break_limit_up_times": 2}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};