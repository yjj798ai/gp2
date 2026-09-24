const UPDATE_TIME = "2026-09-24 00:18";
const THS_HOT = [
  {
    "name": "PCB概念",
    "rise": 1.39,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续122天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
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
    "name": "PET铜箔",
    "rise": 2.46,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "MLCC概念",
    "rise": 1.4,
    "rate": 0,
    "tag": "",
    "hotTag": "连续39天上榜",
    "rankChg": 0,
    "etfName": "财通福鑫定开混合",
    "code": "886112"
  },
  {
    "name": "创新药",
    "rise": -0.15,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续129天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.96,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续299天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": 1.08,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续252天上榜",
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
    "name": "CRO概念",
    "rise": 1.0,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "AI应用",
    "rise": -1.31,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续57天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "培育钻石",
    "rise": 1.52,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "光纤概念",
    "rise": -0.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续128天上榜",
    "rankChg": 0,
    "etfName": "科创国寿LOF",
    "code": "886084"
  },
  {
    "name": "量子科技",
    "rise": 0.42,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885730"
  },
  {
    "name": "算力租赁",
    "rise": -1.3,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续163天上榜",
    "rankChg": 1,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": 0.15,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "网络安全",
    "rise": -0.91,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "大数据ETF",
    "code": "885459"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -0.64,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "液冷服务器",
    "rise": -0.12,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "人工智能",
    "rise": -0.85,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  }
];
const THS_EVENTS = [
  {
    "title": "利好频现，多股连板！A、H房地产股集体大爆发",
    "desc": "",
    "heat": 323681,
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
    "title": "京东方玻璃基板业务进展：24层基板通过测试，量产前尚需攻克两大环节",
    "desc": "",
    "heat": 307079,
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
    "heat": 283914,
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
    "heat": 193733,
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
    "heat": 163868,
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
    "heat": 116281,
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
    "heat": 59301,
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
    "heat": 44544,
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
    "heat": 13903,
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
    "heat": 9866,
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
    "heat": 326,
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
    "heat": 5,
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
    "name": "光刻机（胶）",
    "change": "+1.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+1.19%",
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
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 8,
    "hot_rank_chg": 3,
    "stock_cnt": 5842,
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
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 9,
    "hot_rank_chg": 4,
    "stock_cnt": 5842,
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
        "change_pct": 3.58
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
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 11,
    "hot_rank_chg": -9,
    "stock_cnt": 5842,
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
    "code": "000910",
    "name": "大亚圣象",
    "hot_rank": 15,
    "hot_rank_chg": 6,
    "stock_cnt": 5842,
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
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 16,
    "hot_rank_chg": 3,
    "stock_cnt": 5842,
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
    "code": "600503",
    "name": "华丽家族",
    "hot_rank": 20,
    "hot_rank_chg": 2,
    "stock_cnt": 5842,
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
    "code": "000002",
    "name": "万科A",
    "hot_rank": 23,
    "hot_rank_chg": -14,
    "stock_cnt": 5842,
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
    "code": "002426",
    "name": "胜利精密",
    "hot_rank": 29,
    "hot_rank_chg": 8,
    "stock_cnt": 5842,
    "price": "2.96",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "9455118400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "复合铜箔",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": 0.42
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.62
      },
      {
        "name": "特斯拉",
        "change_pct": -0.03
      },
      {
        "name": "锂电池",
        "change_pct": 0.09
      },
      {
        "name": "工业自动化",
        "change_pct": 0.26
      },
      {
        "name": "OLED",
        "change_pct": 0.95
      },
      {
        "name": "3D玻璃",
        "change_pct": 0.82
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.16
      },
      {
        "name": "机器视觉",
        "change_pct": 0.21
      },
      {
        "name": "智能制造",
        "change_pct": -0.09
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
        "name": "无线耳机",
        "change_pct": -0.02
      },
      {
        "name": "智能手表",
        "change_pct": 0.19
      },
      {
        "name": "AI PC",
        "change_pct": -0.19
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 2.47
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "600743",
    "name": "华远控股",
    "hot_rank": 30,
    "hot_rank_chg": 1,
    "stock_cnt": 5842,
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
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 32,
    "hot_rank_chg": 12,
    "stock_cnt": 5842,
    "price": "3.70",
    "change": "10.12",
    "market_id": "17",
    "circulate_market_value": "4292536700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "电子玻璃",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": 0.28
      },
      {
        "name": "国企改革",
        "change_pct": -1.0
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.68
      }
    ]
  },
  {
    "code": "603636",
    "name": "南威软件",
    "hot_rank": 33,
    "hot_rank_chg": 2,
    "stock_cnt": 5842,
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
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 41,
    "hot_rank_chg": 17,
    "stock_cnt": 5842,
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
    "code": "603803",
    "name": "瑞斯康达",
    "hot_rank": 43,
    "hot_rank_chg": 7,
    "stock_cnt": 5842,
    "price": "12.87",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5468251400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "交换机",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.0
      },
      {
        "name": "边缘计算",
        "change_pct": -0.65
      },
      {
        "name": "5G",
        "change_pct": -0.49
      },
      {
        "name": "网络安全",
        "change_pct": -0.85
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.69
      },
      {
        "name": "光通信",
        "change_pct": -0.18
      },
      {
        "name": "物联网",
        "change_pct": -0.36
      },
      {
        "name": "智慧城市",
        "change_pct": -0.79
      },
      {
        "name": "智能制造",
        "change_pct": -0.09
      },
      {
        "name": "工业互联网",
        "change_pct": -0.8
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.12
      },
      {
        "name": "F5G",
        "change_pct": -0.06
      },
      {
        "name": "交换机",
        "change_pct": -0.22
      },
      {
        "name": "光纤概念",
        "change_pct": -0.64
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 45,
    "hot_rank_chg": 4,
    "stock_cnt": 5842,
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
    "code": "002238",
    "name": "天威视讯",
    "hot_rank": 48,
    "hot_rank_chg": 5,
    "stock_cnt": 5842,
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
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 51,
    "hot_rank_chg": -18,
    "stock_cnt": 5842,
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
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 53,
    "hot_rank_chg": -2,
    "stock_cnt": 5842,
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
    "code": "002614",
    "name": "奥佳华",
    "hot_rank": 54,
    "hot_rank_chg": -2,
    "stock_cnt": 5842,
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
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 56,
    "hot_rank_chg": 0,
    "stock_cnt": 5842,
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
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 57,
    "hot_rank_chg": 5,
    "stock_cnt": 5842,
    "price": "7.54",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "2868422500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "液冷硅油",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.81
      },
      {
        "name": "强势人气股",
        "change_pct": -1.31
      },
      {
        "name": "有机硅",
        "change_pct": 1.34
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
        "name": "光伏",
        "change_pct": -0.24
      },
      {
        "name": "船舶",
        "change_pct": -2.16
      },
      {
        "name": "固态电池",
        "change_pct": 0.22
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.51
      },
      {
        "name": "旧改",
        "change_pct": 0.29
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.07
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 58,
    "hot_rank_chg": 12,
    "stock_cnt": 5842,
    "price": "12.46",
    "change": "2.47",
    "market_id": "17",
    "circulate_market_value": "21620354000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -0.03
      },
      {
        "name": "核电",
        "change_pct": -0.45
      },
      {
        "name": "锂电池",
        "change_pct": 0.09
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.02
      },
      {
        "name": "PCB板",
        "change_pct": 1.91
      },
      {
        "name": "中科院系",
        "change_pct": -0.22
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.16
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.01
      },
      {
        "name": "固态电池",
        "change_pct": 0.22
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 2.47
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 62,
    "hot_rank_chg": -14,
    "stock_cnt": 5842,
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
    "code": "002285",
    "name": "世联行",
    "hot_rank": 90,
    "hot_rank_chg": -21,
    "stock_cnt": 5842,
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
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 94,
    "hot_rank_chg": 3,
    "stock_cnt": 5842,
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
    "code": "600630",
    "name": "龙头股份",
    "hot_rank": 98,
    "hot_rank_chg": -16,
    "stock_cnt": 5842,
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
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 100,
    "hot_rank_chg": -5,
    "stock_cnt": 5842,
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
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600667", "name": "太极实业", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5842, "price": "20.59", "change": "3.62", "market_id": "17", "circulate_market_value": "43064854000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 2, "hot_rank_chg": 13, "stock_cnt": 5842, "price": "26.92", "change": "10.01", "market_id": "33", "circulate_market_value": "10102645300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "封装材料"}, {"code": "000823", "name": "超声电子", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5842, "price": "27.20", "change": "7.85", "market_id": "33", "circulate_market_value": "16182155000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 4, "hot_rank_chg": -3, "stock_cnt": 5842, "price": "30.00", "change": "-21.01", "market_id": "17", "circulate_market_value": "6334895400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 5, "hot_rank_chg": 9, "stock_cnt": 5842, "price": "23.45", "change": "9.99", "market_id": "17", "circulate_market_value": "52860479000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "尊界"}, {"code": "605058", "name": "澳弘电子", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5842, "price": "58.60", "change": "10.01", "market_id": "17", "circulate_market_value": "8375412000.00", "change_type": "1", "change_section": "9", "change_days": "7", "change_reason": "PCB"}, {"code": "000560", "name": "我爱我家", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5842, "price": "3.86", "change": "9.97", "market_id": "33", "circulate_market_value": "9042776100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "房产经纪", "xgb_concepts": [{"name": "新零售", "change_pct": -1.8}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "人工智能", "change_pct": -1.1}, {"name": "VR&AR", "change_pct": -0.69}, {"name": "京津冀", "change_pct": -0.85}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "住房租赁", "change_pct": -0.08}, {"name": "破净股", "change_pct": -0.65}, {"name": "数字经济", "change_pct": -1.6}, {"name": "房产经纪", "change_pct": 1.66}, {"name": "物业管理", "change_pct": 0.82}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "AI大模型/智能体", "change_pct": -1.29}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 9, "hot_rank_chg": 4, "stock_cnt": 5842, "price": "7.06", "change": "9.97", "market_id": "17", "circulate_market_value": "7376908200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "拟收购界面财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.25}, {"name": "上海国企改革", "change_pct": -0.53}, {"name": "复牌股", "change_pct": 3.58}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -2.68}, {"name": "国企改革", "change_pct": -1.0}]}, {"code": "000993", "name": "闽东电力", "hot_rank": 10, "hot_rank_chg": -2, "stock_cnt": 5842, "price": "18.82", "change": "-9.99", "market_id": "33", "circulate_market_value": "8618646400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 11, "hot_rank_chg": -9, "stock_cnt": 5842, "price": "9.04", "change": "-0.44", "market_id": "17", "circulate_market_value": "22767329000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.48}, {"name": "工业大麻", "change_pct": -1.36}, {"name": "中药", "change_pct": -1.04}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "保健品", "change_pct": -1.12}, {"name": "民营医院", "change_pct": -1.28}, {"name": "医药", "change_pct": -0.27}, {"name": "化学原料药", "change_pct": -0.42}, {"name": "流感", "change_pct": -0.5}, {"name": "振兴东北", "change_pct": -1.25}, {"name": "食品", "change_pct": -0.89}]}, {"code": "001216", "name": "华瓷股份", "hot_rank": 12, "hot_rank_chg": -5, "stock_cnt": 5842, "price": "28.31", "change": "6.95", "market_id": "33", "circulate_market_value": "6987932800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 13, "hot_rank_chg": -8, "stock_cnt": 5842, "price": "13.59", "change": "5.10", "market_id": "17", "circulate_market_value": "24314389000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 14, "hot_rank_chg": 11, "stock_cnt": 5842, "price": "16.74", "change": "4.23", "market_id": "17", "circulate_market_value": "21498824000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000910", "name": "大亚圣象", "hot_rank": 15, "hot_rank_chg": 6, "stock_cnt": 5842, "price": "7.58", "change": "10.02", "market_id": "33", "circulate_market_value": "4148042200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "七腾机器人", "xgb_concepts": [{"name": "锂电池", "change_pct": 0.09}, {"name": "林业", "change_pct": -1.2}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "家具家居", "change_pct": -0.04}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "破净股", "change_pct": -0.65}]}, {"code": "000725", "name": "京东方A", "hot_rank": 16, "hot_rank_chg": 3, "stock_cnt": 5842, "price": "6.02", "change": "0.33", "market_id": "33", "circulate_market_value": "212910150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.55}, {"name": "手机产业链", "change_pct": 0.42}, {"name": "超高清视频", "change_pct": -0.73}, {"name": "苹果产业链", "change_pct": 0.62}, {"name": "电竞", "change_pct": -1.97}, {"name": "半导体", "change_pct": 1.19}, {"name": "人工智能", "change_pct": -1.1}, {"name": "互联网医疗", "change_pct": -1.41}, {"name": "VR&AR", "change_pct": -0.69}, {"name": "OLED", "change_pct": 0.95}, {"name": "京津冀", "change_pct": -0.85}, {"name": "物联网", "change_pct": -0.36}, {"name": "指纹识别", "change_pct": 0.44}, {"name": "汽车零部件", "change_pct": -0.17}, {"name": "白马股", "change_pct": -0.58}, {"name": "智能制造", "change_pct": -0.09}, {"name": "小米概念股", "change_pct": 0.03}, {"name": "国产芯片", "change_pct": 0.78}, {"name": "液晶面板/LCD", "change_pct": 0.87}, {"name": "全息概念", "change_pct": -1.13}, {"name": "理想汽车概念股", "change_pct": -0.89}, {"name": "MicroLED", "change_pct": 1.19}, {"name": "钙钛矿电池", "change_pct": 0.68}, {"name": "智能手表", "change_pct": 0.19}, {"name": "MiniLED", "change_pct": 0.49}, {"name": "传感器", "change_pct": 0.26}, {"name": "大硅片", "change_pct": 1.68}, {"name": "AI PC", "change_pct": -0.19}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "回购", "change_pct": 0.1}, {"name": "光电共封装CPO", "change_pct": 0.43}, {"name": "智能眼镜/MR头显", "change_pct": 0.27}, {"name": "玻璃基板封装", "change_pct": 2.36}]}, {"code": "601811", "name": "新华文轩", "hot_rank": 17, "hot_rank_chg": -1, "stock_cnt": 5842, "price": "18.50", "change": "9.99", "market_id": "17", "circulate_market_value": "14650222000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "拟收购民族出版社"}, {"code": "600127", "name": "金健米业", "hot_rank": 18, "hot_rank_chg": -8, "stock_cnt": 5842, "price": "16.75", "change": "1.70", "market_id": "17", "circulate_market_value": "10749868900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 19, "hot_rank_chg": 4, "stock_cnt": 5842, "price": "18.37", "change": "0.49", "market_id": "33", "circulate_market_value": "61099107000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600503", "name": "华丽家族", "hot_rank": 20, "hot_rank_chg": 2, "stock_cnt": 5842, "price": "2.94", "change": "10.11", "market_id": "17", "circulate_market_value": "4710732600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "房地产开发", "xgb_concepts": [{"name": "房地产", "change_pct": -0.35}, {"name": "石墨烯", "change_pct": 0.01}, {"name": "机器人", "change_pct": 0.03}, {"name": "低价股", "change_pct": -1.17}]}, {"code": "000636", "name": "风华高科", "hot_rank": 21, "hot_rank_chg": 3, "stock_cnt": 5842, "price": "58.74", "change": "1.71", "market_id": "33", "circulate_market_value": "67403561000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 22, "hot_rank_chg": 7, "stock_cnt": 5842, "price": "51.48", "change": "3.06", "market_id": "17", "circulate_market_value": "43580565000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000002", "name": "万科A", "hot_rank": 23, "hot_rank_chg": -14, "stock_cnt": 5842, "price": "3.92", "change": "2.89", "market_id": "33", "circulate_market_value": "38083244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": -1.14}, {"name": "深圳本地股", "change_pct": -0.53}, {"name": "股权转让", "change_pct": -0.33}, {"name": "房地产", "change_pct": -0.35}, {"name": "养老产业", "change_pct": -1.42}, {"name": "冷链", "change_pct": -0.9}, {"name": "住房租赁", "change_pct": -0.08}, {"name": "破净股", "change_pct": -0.65}, {"name": "冰雪产业", "change_pct": -0.38}, {"name": "物业管理", "change_pct": 0.82}, {"name": "旧改", "change_pct": 0.29}, {"name": "REITs", "change_pct": -0.32}]}, {"code": "600371", "name": "万向德农", "hot_rank": 24, "hot_rank_chg": -4, "stock_cnt": 5842, "price": "17.28", "change": "9.99", "market_id": "17", "circulate_market_value": "5055747800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玉米种业"}, {"code": "600641", "name": "先导基电", "hot_rank": 25, "hot_rank_chg": 1, "stock_cnt": 5842, "price": "47.80", "change": "9.28", "market_id": "17", "circulate_market_value": "44484110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 26, "hot_rank_chg": 1, "stock_cnt": 5842, "price": "87.15", "change": "1.83", "market_id": "33", "circulate_market_value": "63204366000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 27, "hot_rank_chg": -10, "stock_cnt": 5842, "price": "16.79", "change": "2.94", "market_id": "17", "circulate_market_value": "5935651200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 28, "hot_rank_chg": 8, "stock_cnt": 5842, "price": "69.00", "change": "4.23", "market_id": "33", "circulate_market_value": "58862036000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002426", "name": "胜利精密", "hot_rank": 29, "hot_rank_chg": 8, "stock_cnt": 5842, "price": "2.96", "change": "10.04", "market_id": "33", "circulate_market_value": "9455118400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "复合铜箔", "xgb_concepts": [{"name": "手机产业链", "change_pct": 0.42}, {"name": "苹果产业链", "change_pct": 0.62}, {"name": "特斯拉", "change_pct": -0.03}, {"name": "锂电池", "change_pct": 0.09}, {"name": "工业自动化", "change_pct": 0.26}, {"name": "OLED", "change_pct": 0.95}, {"name": "3D玻璃", "change_pct": 0.82}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "机器视觉", "change_pct": 0.21}, {"name": "智能制造", "change_pct": -0.09}, {"name": "新能源车零部件", "change_pct": -0.1}, {"name": "低价股", "change_pct": -1.17}, {"name": "无线耳机", "change_pct": -0.02}, {"name": "智能手表", "change_pct": 0.19}, {"name": "AI PC", "change_pct": -0.19}, {"name": "PET复合铜箔", "change_pct": 2.47}, {"name": "智能眼镜/MR头显", "change_pct": 0.27}]}, {"code": "600743", "name": "华远控股", "hot_rank": 30, "hot_rank_chg": 1, "stock_cnt": 5842, "price": "2.82", "change": "10.16", "market_id": "17", "circulate_market_value": "6616004500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "控股股东拟变更", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.33}, {"name": "京津冀", "change_pct": -0.85}, {"name": "北京城市规划", "change_pct": -0.67}, {"name": "物业管理", "change_pct": 0.82}, {"name": "低价股", "change_pct": -1.17}, {"name": "国资入股", "change_pct": -0.47}]}, {"code": "603328", "name": "依顿电子", "hot_rank": 31, "hot_rank_chg": 7, "stock_cnt": 5842, "price": "15.20", "change": "9.99", "market_id": "17", "circulate_market_value": "15176328000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高端PCB"}, {"code": "600293", "name": "三峡新材", "hot_rank": 32, "hot_rank_chg": 12, "stock_cnt": 5842, "price": "3.70", "change": "10.12", "market_id": "17", "circulate_market_value": "4292536700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电子玻璃", "xgb_concepts": [{"name": "玻璃", "change_pct": 0.28}, {"name": "国企改革", "change_pct": -1.0}, {"name": "湖北国企改革", "change_pct": -0.68}]}, {"code": "603636", "name": "南威软件", "hot_rank": 33, "hot_rank_chg": 2, "stock_cnt": 5842, "price": "8.81", "change": "9.99", "market_id": "17", "circulate_market_value": "5112976200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI应用出海", "xgb_concepts": [{"name": "边缘计算", "change_pct": -0.65}, {"name": "国产软件", "change_pct": -1.45}, {"name": "蚂蚁集团概念股", "change_pct": -1.57}, {"name": "共享经济", "change_pct": -0.59}, {"name": "人工智能", "change_pct": -1.1}, {"name": "网络安全", "change_pct": -0.85}, {"name": "福建自贸/海西概念", "change_pct": -1.64}, {"name": "智慧停车", "change_pct": -0.36}, {"name": "物联网", "change_pct": -0.36}, {"name": "大数据", "change_pct": -1.43}, {"name": "智慧城市", "change_pct": -0.79}, {"name": "智慧安防", "change_pct": -0.44}, {"name": "数字经济", "change_pct": -1.6}, {"name": "阿里巴巴概念股", "change_pct": -1.43}, {"name": "信创", "change_pct": -1.34}, {"name": "华为昇腾", "change_pct": -1.01}, {"name": "东数西算/算力", "change_pct": -1.12}, {"name": "电子身份证", "change_pct": -1.17}, {"name": "数据要素", "change_pct": -1.61}, {"name": "数字乡村", "change_pct": -1.68}, {"name": "智慧政务", "change_pct": -1.74}, {"name": "华为云·鲲鹏", "change_pct": -1.51}, {"name": "智慧灯杆", "change_pct": -0.45}, {"name": "算电协同", "change_pct": -0.81}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "自贸区", "change_pct": -1.28}, {"name": "AI大模型/智能体", "change_pct": -1.29}, {"name": "智谱AI", "change_pct": -2.31}, {"name": "DeepSeek概念股", "change_pct": -1.4}, {"name": "算力一体机", "change_pct": -0.88}, {"name": "区块链", "change_pct": -1.8}]}, {"code": "002819", "name": "东方中科", "hot_rank": 34, "hot_rank_chg": 32, "stock_cnt": 5842, "price": "24.24", "change": "9.98", "market_id": "33", "circulate_market_value": "5725451300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "网络分析仪"}, {"code": "601086", "name": "国芳集团", "hot_rank": 35, "hot_rank_chg": -3, "stock_cnt": 5842, "price": "17.02", "change": "-6.28", "market_id": "17", "circulate_market_value": "11335320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301150", "name": "中一科技", "hot_rank": 36, "hot_rank_chg": 9, "stock_cnt": 5842, "price": "49.20", "change": "20.00", "market_id": "33", "circulate_market_value": "14948879000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高端电子铜箔"}, {"code": "600487", "name": "亨通光电", "hot_rank": 37, "hot_rank_chg": 2, "stock_cnt": 5842, "price": "69.94", "change": "-4.19", "market_id": "17", "circulate_market_value": "171608020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 38, "hot_rank_chg": 4, "stock_cnt": 5842, "price": "55.00", "change": "5.38", "market_id": "17", "circulate_market_value": "55560062000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 39, "hot_rank_chg": 8, "stock_cnt": 5842, "price": "24.28", "change": "1.04", "market_id": "33", "circulate_market_value": "28564662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 40, "hot_rank_chg": -6, "stock_cnt": 5842, "price": "16.29", "change": "-9.90", "market_id": "17", "circulate_market_value": "11082407600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 41, "hot_rank_chg": 17, "stock_cnt": 5842, "price": "9.80", "change": "2.62", "market_id": "17", "circulate_market_value": "35159163000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": 0.28}, {"name": "OLED", "change_pct": 0.95}, {"name": "液晶面板/LCD", "change_pct": 0.87}, {"name": "国企改革", "change_pct": -1.0}, {"name": "玻璃基板封装", "change_pct": 2.36}, {"name": "陕西国企改革", "change_pct": -0.18}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 42, "hot_rank_chg": 12, "stock_cnt": 5842, "price": "45.62", "change": "0.33", "market_id": "17", "circulate_market_value": "181183800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603803", "name": "瑞斯康达", "hot_rank": 43, "hot_rank_chg": 7, "stock_cnt": 5842, "price": "12.87", "change": "10.00", "market_id": "17", "circulate_market_value": "5468251400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "交换机", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.0}, {"name": "边缘计算", "change_pct": -0.65}, {"name": "5G", "change_pct": -0.49}, {"name": "网络安全", "change_pct": -0.85}, {"name": "云计算数据中心", "change_pct": -0.69}, {"name": "光通信", "change_pct": -0.18}, {"name": "物联网", "change_pct": -0.36}, {"name": "智慧城市", "change_pct": -0.79}, {"name": "智能制造", "change_pct": -0.09}, {"name": "工业互联网", "change_pct": -0.8}, {"name": "东数西算/算力", "change_pct": -1.12}, {"name": "F5G", "change_pct": -0.06}, {"name": "交换机", "change_pct": -0.22}, {"name": "光纤概念", "change_pct": -0.64}]}, {"code": "601579", "name": "会稽山", "hot_rank": 44, "hot_rank_chg": -26, "stock_cnt": 5842, "price": "36.75", "change": "-1.90", "market_id": "17", "circulate_market_value": "17620280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 45, "hot_rank_chg": 4, "stock_cnt": 5842, "price": "8.79", "change": "4.64", "market_id": "33", "circulate_market_value": "4114788500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.31}, {"name": "旅游", "change_pct": -0.7}, {"name": "腾讯概念股", "change_pct": -1.66}, {"name": "广西概念", "change_pct": -1.55}, {"name": "低空经济", "change_pct": -0.27}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 46, "hot_rank_chg": 0, "stock_cnt": 5842, "price": "490.97", "change": "0.36", "market_id": "17", "circulate_market_value": "14772168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 47, "hot_rank_chg": -4, "stock_cnt": 5842, "price": "21.03", "change": "-4.54", "market_id": "17", "circulate_market_value": "46672987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002238", "name": "天威视讯", "hot_rank": 48, "hot_rank_chg": 5, "stock_cnt": 5842, "price": "7.66", "change": "10.06", "market_id": "33", "circulate_market_value": "6147603200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "文化传媒", "xgb_concepts": [{"name": "广电", "change_pct": -1.86}, {"name": "超高清视频", "change_pct": -0.73}, {"name": "深圳本地股", "change_pct": -0.53}, {"name": "5G", "change_pct": -0.49}, {"name": "云计算数据中心", "change_pct": -0.69}, {"name": "智慧城市", "change_pct": -0.79}, {"name": "腾讯概念股", "change_pct": -1.66}, {"name": "传媒", "change_pct": -2.68}, {"name": "在线教育", "change_pct": -1.46}, {"name": "业绩增长", "change_pct": -0.07}, {"name": "知识付费", "change_pct": -3.27}, {"name": "智慧政务", "change_pct": -1.74}, {"name": "AI大模型/智能体", "change_pct": -1.29}, {"name": "短剧/互动影游", "change_pct": -2.77}]}, {"code": "301686", "name": "中塑股份", "hot_rank": 49, "hot_rank_chg": -21, "stock_cnt": 5842, "price": "283.50", "change": "-34.53", "market_id": "33", "circulate_market_value": "2475821700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 50, "hot_rank_chg": -9, "stock_cnt": 5842, "price": "45.90", "change": "3.78", "market_id": "33", "circulate_market_value": "69672921000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 51, "hot_rank_chg": -18, "stock_cnt": 5842, "price": "12.76", "change": "5.37", "market_id": "33", "circulate_market_value": "4199601800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.25}, {"name": "锂电池", "change_pct": 0.09}, {"name": "ST摘帽", "change_pct": -1.75}, {"name": "湖南国企改革", "change_pct": -1.47}, {"name": "污水处理", "change_pct": -0.37}, {"name": "智慧城市", "change_pct": -0.79}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "环保", "change_pct": -0.49}, {"name": "动力电池回收", "change_pct": -0.68}, {"name": "干细胞", "change_pct": 0.34}, {"name": "国企改革", "change_pct": -1.0}]}, {"code": "301689", "name": "电科思仪", "hot_rank": 52, "hot_rank_chg": 28, "stock_cnt": 5842, "price": "69.90", "change": "13.64", "market_id": "33", "circulate_market_value": "4023545500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 53, "hot_rank_chg": -2, "stock_cnt": 5842, "price": "7.98", "change": "-7.21", "market_id": "33", "circulate_market_value": "15282438000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -1.64}, {"name": "林业", "change_pct": -1.2}, {"name": "碳中和", "change_pct": -1.5}, {"name": "自贸区", "change_pct": -1.28}]}, {"code": "002614", "name": "奥佳华", "hot_rank": 54, "hot_rank_chg": -2, "stock_cnt": 5842, "price": "7.57", "change": "10.03", "market_id": "33", "circulate_market_value": "3340454100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "股份转让", "xgb_concepts": [{"name": "医疗器械", "change_pct": 0.49}, {"name": "股权转让", "change_pct": -0.33}, {"name": "人工智能", "change_pct": -1.1}, {"name": "养老产业", "change_pct": -1.42}, {"name": "福建自贸/海西概念", "change_pct": -1.64}, {"name": "外贸受益概念", "change_pct": -0.06}, {"name": "小家电", "change_pct": -0.77}, {"name": "机器人", "change_pct": 0.03}, {"name": "家电", "change_pct": -0.34}, {"name": "RCEP概念", "change_pct": -0.42}, {"name": "血氧仪", "change_pct": 0.27}, {"name": "华为鸿蒙", "change_pct": -1.61}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "自贸区", "change_pct": -1.28}, {"name": "IP经济/谷子经济", "change_pct": -1.86}]}, {"code": "600721", "name": "百花医药", "hot_rank": 55, "hot_rank_chg": -15, "stock_cnt": 5842, "price": "13.29", "change": "-8.15", "market_id": "17", "circulate_market_value": "5110638100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 56, "hot_rank_chg": 0, "stock_cnt": 5842, "price": "11.72", "change": "-1.51", "market_id": "33", "circulate_market_value": "10390855800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -0.0}, {"name": "手机产业链", "change_pct": 0.42}, {"name": "超高清视频", "change_pct": -0.73}, {"name": "锂电池", "change_pct": 0.09}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "OLED", "change_pct": 0.95}, {"name": "包装印刷", "change_pct": -0.64}, {"name": "光伏", "change_pct": -0.24}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "小米概念股", "change_pct": 0.03}, {"name": "液晶面板/LCD", "change_pct": 0.87}, {"name": "可降解塑料", "change_pct": 0.67}, {"name": "华为产业链", "change_pct": -0.59}, {"name": "PET复合铜箔", "change_pct": 2.47}]}, {"code": "002909", "name": "集泰股份", "hot_rank": 57, "hot_rank_chg": 5, "stock_cnt": 5842, "price": "7.54", "change": "10.07", "market_id": "33", "circulate_market_value": "2868422500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷硅油", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.81}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "有机硅", "change_pct": 1.34}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "装配式建筑", "change_pct": -0.06}, {"name": "光伏", "change_pct": -0.24}, {"name": "船舶", "change_pct": -2.16}, {"name": "固态电池", "change_pct": 0.22}, {"name": "新型城镇化", "change_pct": -0.51}, {"name": "旧改", "change_pct": 0.29}, {"name": "飞行汽车/eVTOL", "change_pct": -0.07}, {"name": "液冷服务器", "change_pct": -0.02}]}, {"code": "600110", "name": "诺德股份", "hot_rank": 58, "hot_rank_chg": 12, "stock_cnt": 5842, "price": "12.46", "change": "2.47", "market_id": "17", "circulate_market_value": "21620354000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.03}, {"name": "核电", "change_pct": -0.45}, {"name": "锂电池", "change_pct": 0.09}, {"name": "铜箔/覆铜板", "change_pct": 2.02}, {"name": "PCB板", "change_pct": 1.91}, {"name": "中科院系", "change_pct": -0.22}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "宁德时代概念股", "change_pct": 0.01}, {"name": "固态电池", "change_pct": 0.22}, {"name": "PET复合铜箔", "change_pct": 2.47}]}, {"code": "600522", "name": "中天科技", "hot_rank": 59, "hot_rank_chg": 9, "stock_cnt": 5842, "price": "35.78", "change": "-2.98", "market_id": "17", "circulate_market_value": "122115340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 60, "hot_rank_chg": 69, "stock_cnt": 5842, "price": "48.03", "change": "2.41", "market_id": "17", "circulate_market_value": "37088736000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688628", "name": "优利德", "hot_rank": 61, "hot_rank_chg": 48, "stock_cnt": 5842, "price": "114.44", "change": "20.00", "market_id": "17", "circulate_market_value": "12862242100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "VNA矢量网络分析仪"}, {"code": "002081", "name": "金螳螂", "hot_rank": 62, "hot_rank_chg": -14, "stock_cnt": 5842, "price": "5.32", "change": "1.72", "market_id": "33", "circulate_market_value": "14111569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.31}, {"name": "装修装饰", "change_pct": 0.05}, {"name": "装配式建筑", "change_pct": -0.06}, {"name": "航天", "change_pct": -0.45}, {"name": "旧改", "change_pct": 0.29}]}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 63, "hot_rank_chg": 14, "stock_cnt": 5842, "price": "119.23", "change": "4.09", "market_id": "33", "circulate_market_value": "98843523000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 64, "hot_rank_chg": 11, "stock_cnt": 5842, "price": "33.66", "change": "-0.33", "market_id": "33", "circulate_market_value": "96270046000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920025", "name": "凯达重工", "hot_rank": 65, "hot_rank_chg": -35, "stock_cnt": 5842, "price": "29.00", "change": "580.75", "market_id": "151", "circulate_market_value": "1479000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 66, "hot_rank_chg": -1, "stock_cnt": 5842, "price": "15.14", "change": "-4.60", "market_id": "33", "circulate_market_value": "48835430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 67, "hot_rank_chg": 4, "stock_cnt": 5842, "price": "128.10", "change": "2.37", "market_id": "33", "circulate_market_value": "246317310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 68, "hot_rank_chg": -7, "stock_cnt": 5842, "price": "15.91", "change": "-10.01", "market_id": "33", "circulate_market_value": "7268487600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 69, "hot_rank_chg": 16, "stock_cnt": 5842, "price": "39.21", "change": "2.40", "market_id": "17", "circulate_market_value": "12624568400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 70, "hot_rank_chg": 2, "stock_cnt": 5842, "price": "922.50", "change": "-0.56", "market_id": "33", "circulate_market_value": "1023916890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 71, "hot_rank_chg": -7, "stock_cnt": 5842, "price": "58.62", "change": "1.31", "market_id": "17", "circulate_market_value": "263968150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600699", "name": "均胜电子", "hot_rank": 72, "hot_rank_chg": 61, "stock_cnt": 5842, "price": "21.53", "change": "3.51", "market_id": "17", "circulate_market_value": "30048788000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002635", "name": "安洁科技", "hot_rank": 73, "hot_rank_chg": -10, "stock_cnt": 5842, "price": "16.79", "change": "10.03", "market_id": "33", "circulate_market_value": "6641000900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块基座"}, {"code": "600584", "name": "长电科技", "hot_rank": 74, "hot_rank_chg": -1, "stock_cnt": 5842, "price": "71.82", "change": "-0.58", "market_id": "17", "circulate_market_value": "128515757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 75, "hot_rank_chg": -16, "stock_cnt": 5842, "price": "15.92", "change": "-10.01", "market_id": "17", "circulate_market_value": "7075555600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 76, "hot_rank_chg": 0, "stock_cnt": 5842, "price": "143.56", "change": "0.08", "market_id": "17", "circulate_market_value": "346230670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 77, "hot_rank_chg": 42, "stock_cnt": 5842, "price": "18.56", "change": "3.69", "market_id": "17", "circulate_market_value": "17531904000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 78, "hot_rank_chg": 13, "stock_cnt": 5842, "price": "36.52", "change": "-3.18", "market_id": "33", "circulate_market_value": "27660800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 79, "hot_rank_chg": -22, "stock_cnt": 5842, "price": "50.47", "change": "-10.00", "market_id": "17", "circulate_market_value": "21014078000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 80, "hot_rank_chg": -13, "stock_cnt": 5842, "price": "79.41", "change": "6.91", "market_id": "33", "circulate_market_value": "21917071000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 81, "hot_rank_chg": -2, "stock_cnt": 5842, "price": "18.60", "change": "-1.48", "market_id": "33", "circulate_market_value": "10851951600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000756", "name": "新华制药", "hot_rank": 82, "hot_rank_chg": -22, "stock_cnt": 5842, "price": "14.53", "change": "-9.97", "market_id": "33", "circulate_market_value": "7248623400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 83, "hot_rank_chg": -9, "stock_cnt": 5842, "price": "193.00", "change": "-2.58", "market_id": "33", "circulate_market_value": "267560090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603124", "name": "江南新材", "hot_rank": 84, "hot_rank_chg": 22, "stock_cnt": 5842, "price": "145.00", "change": "10.00", "market_id": "17", "circulate_market_value": "11253277500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷散热"}, {"code": "600593", "name": "大连圣亚", "hot_rank": 85, "hot_rank_chg": -2, "stock_cnt": 5842, "price": "49.79", "change": "5.67", "market_id": "17", "circulate_market_value": "6412952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002106", "name": "莱宝高科", "hot_rank": 86, "hot_rank_chg": 27, "stock_cnt": 5842, "price": "13.90", "change": "5.06", "market_id": "33", "circulate_market_value": "9799442200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 87, "hot_rank_chg": -32, "stock_cnt": 5842, "price": "27.09", "change": "-9.82", "market_id": "17", "circulate_market_value": "10863090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 88, "hot_rank_chg": 28, "stock_cnt": 5842, "price": "18.34", "change": "0.77", "market_id": "17", "circulate_market_value": "14438649000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 89, "hot_rank_chg": -2, "stock_cnt": 5842, "price": "15.87", "change": "-3.70", "market_id": "17", "circulate_market_value": "17401371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 90, "hot_rank_chg": -21, "stock_cnt": 5842, "price": "3.17", "change": "-0.94", "market_id": "33", "circulate_market_value": "6273459700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.65}, {"name": "深圳本地股", "change_pct": -0.53}, {"name": "共享经济", "change_pct": -0.59}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "养老产业", "change_pct": -1.42}, {"name": "住房租赁", "change_pct": -0.08}, {"name": "房产经纪", "change_pct": 1.66}, {"name": "第三代半导体", "change_pct": 0.75}, {"name": "物业管理", "change_pct": 0.82}, {"name": "旧改", "change_pct": 0.29}, {"name": "横琴新区", "change_pct": -1.74}, {"name": "氮化镓", "change_pct": 0.6}, {"name": "REITs", "change_pct": -0.32}, {"name": "华为产业链", "change_pct": -0.59}]}, {"code": "001234", "name": "泰慕士", "hot_rank": 91, "hot_rank_chg": -5, "stock_cnt": 5842, "price": "32.18", "change": "10.02", "market_id": "33", "circulate_market_value": "2945805500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "针织服装"}, {"code": "300750", "name": "宁德时代", "hot_rank": 92, "hot_rank_chg": -14, "stock_cnt": 5842, "price": "301.00", "change": "-1.19", "market_id": "33", "circulate_market_value": "1282443000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688112", "name": "鼎阳科技", "hot_rank": 93, "hot_rank_chg": 97, "stock_cnt": 5842, "price": "114.98", "change": "9.49", "market_id": "17", "circulate_market_value": "18350449000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 94, "hot_rank_chg": 3, "stock_cnt": 5842, "price": "7.53", "change": "-7.15", "market_id": "33", "circulate_market_value": "12251263200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.48}, {"name": "电竞", "change_pct": -1.97}, {"name": "手游", "change_pct": -2.92}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "人工智能", "change_pct": -1.1}, {"name": "游戏", "change_pct": -2.77}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.6}, {"name": "腾讯概念股", "change_pct": -1.66}, {"name": "快手概念股", "change_pct": -3.1}, {"name": "元宇宙", "change_pct": -1.77}, {"name": "虚拟数字人", "change_pct": -2.28}, {"name": "东数西算/算力", "change_pct": -1.12}, {"name": "web3.0", "change_pct": -2.51}, {"name": "AIGC概念", "change_pct": -1.86}, {"name": "数据要素", "change_pct": -1.61}, {"name": "字节跳动概念股", "change_pct": -2.49}, {"name": "AI营销", "change_pct": -3.32}, {"name": "ChatGPT", "change_pct": -2.19}, {"name": "智能眼镜/MR头显", "change_pct": 0.27}, {"name": "AI大模型/智能体", "change_pct": -1.29}, {"name": "人形机器人", "change_pct": 0.08}, {"name": "短剧/互动影游", "change_pct": -2.77}, {"name": "多模态", "change_pct": -1.95}, {"name": "AI视频", "change_pct": -3.13}, {"name": "IP经济/谷子经济", "change_pct": -1.86}, {"name": "小红书概念股", "change_pct": -2.84}]}, {"code": "002156", "name": "通富微电", "hot_rank": 95, "hot_rank_chg": -11, "stock_cnt": 5842, "price": "62.80", "change": "-1.13", "market_id": "33", "circulate_market_value": "95296000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003026", "name": "中晶科技", "hot_rank": 96, "hot_rank_chg": 27, "stock_cnt": 5842, "price": "36.00", "change": "0.95", "market_id": "33", "circulate_market_value": "5189791700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002080", "name": "中材科技", "hot_rank": 97, "hot_rank_chg": -3, "stock_cnt": 5842, "price": "60.70", "change": "-2.88", "market_id": "33", "circulate_market_value": "101862102000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600630", "name": "龙头股份", "hot_rank": 98, "hot_rank_chg": -16, "stock_cnt": 5842, "price": "8.53", "change": "-10.02", "market_id": "17", "circulate_market_value": "3624069400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.48}, {"name": "上海国企改革", "change_pct": -0.53}, {"name": "一带一路", "change_pct": -0.81}, {"name": "优化生育（三孩）", "change_pct": -0.88}, {"name": "纺织服装", "change_pct": -0.76}, {"name": "上海自由贸易港", "change_pct": -1.01}, {"name": "进口博览会", "change_pct": -1.65}, {"name": "自由贸易港", "change_pct": -1.36}, {"name": "物业管理", "change_pct": 0.82}, {"name": "国企改革", "change_pct": -1.0}, {"name": "新冠病毒防治", "change_pct": -0.79}, {"name": "自贸区", "change_pct": -1.28}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 99, "hot_rank_chg": 6, "stock_cnt": 5842, "price": "44.87", "change": "-1.19", "market_id": "17", "circulate_market_value": "65599707000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 100, "hot_rank_chg": -5, "stock_cnt": 5842, "price": "7.10", "change": "-4.44", "market_id": "33", "circulate_market_value": "7333844200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.52}, {"name": "锂电池", "change_pct": 0.09}, {"name": "强势人气股", "change_pct": -1.31}, {"name": "铜箔/覆铜板", "change_pct": 2.02}, {"name": "粤港澳大湾区", "change_pct": -1.36}, {"name": "新能源汽车", "change_pct": -0.16}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -1.74}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};