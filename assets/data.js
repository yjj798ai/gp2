const UPDATE_TIME = "2026-10-29 22:22";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": -2.21,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续248天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": -4.09,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "高股息精选",
    "rise": 0.28,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "高股息ETF",
    "code": "886072"
  },
  {
    "name": "机器人概念",
    "rise": -3.46,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -6.16,
    "rate": 0,
    "tag": "",
    "hotTag": "连续319天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -1.87,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续149天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -5.28,
    "rate": 0,
    "tag": "",
    "hotTag": "连续272天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": -5.36,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续142天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "军工",
    "rise": -2.29,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "人工智能",
    "rise": -3.05,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "AI应用",
    "rise": -3.06,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "数字货币",
    "rise": -3.55,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "证金持股",
    "rise": 0.97,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "金选300C类LOF",
    "code": "885663"
  },
  {
    "name": "短剧游戏",
    "rise": -2.0,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "冰雪产业",
    "rise": -1.17,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "减速器",
    "rise": -3.65,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "超级品牌",
    "rise": -0.77,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885761"
  },
  {
    "name": "光伏概念",
    "rise": -3.08,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "芯片概念",
    "rise": -4.19,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "猪肉",
    "rise": -1.05,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  }
];
const THS_EVENTS = [
  {
    "title": "2026智元创新日10月29日启幕 展示具身智能部署态全新突破",
    "desc": "",
    "heat": 104821,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "自动化设备",
      "人形机器人",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "中海达",
        "code": "300177",
        "chg": 14.194577
      }
    ]
  },
  {
    "title": "高端工业母机需求爆发，国产工业母机订单已排到明年二季度",
    "desc": "",
    "heat": 35279,
    "direction": "工业母机",
    "themes": [
      "工业母机"
    ],
    "stocks": [
      {
        "name": "上海沪工",
        "code": "603131",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "SK海力士业绩超预期",
    "desc": "",
    "heat": 29881,
    "direction": "存储芯片",
    "themes": [
      "HBM存储",
      "DRAM存储",
      "SRAM存储",
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "西测测试",
        "code": "301306",
        "chg": 11.74921
      }
    ]
  },
  {
    "title": "需求暴涨8倍！AI服务器MLCC供不应求",
    "desc": "",
    "heat": 16145,
    "direction": "MLCC",
    "themes": [
      "MLCC概念"
    ],
    "stocks": [
      {
        "name": "信维通信",
        "code": "300136",
        "chg": 4.561481
      }
    ]
  },
  {
    "title": "河南：“十五五”将聚焦散热等金刚石应用领域，实施超硬材料省级重大项目",
    "desc": "",
    "heat": 1536,
    "direction": "金刚石散热",
    "themes": [
      "金刚石散热"
    ],
    "stocks": [
      {
        "name": "惠丰钻石",
        "code": "920725",
        "chg": 4.676923
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "银行",
    "change": "+1.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "SpaceX概念股",
    "change": "+1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "+1.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+1.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "+1.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+0.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+0.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+0.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+0.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "+0.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中字头",
    "change": "+0.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信托",
    "change": "+0.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+0.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+0.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民航",
    "change": "+0.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "休闲食品",
    "change": "+0.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "回购增持再贷款",
    "change": "+0.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+0.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "船舶",
    "change": "+0.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白马股",
    "change": "-0.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 1,
    "hot_rank_chg": 95,
    "stock_cnt": 5805,
    "price": "3.72",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "4966397000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "LED",
        "change_pct": -3.44
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.1
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 2,
    "hot_rank_chg": 47,
    "stock_cnt": 5805,
    "price": "2.57",
    "change": "9.83",
    "market_id": "33",
    "circulate_market_value": "4063096200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -1.95
      },
      {
        "name": "体外诊断",
        "change_pct": -2.0
      },
      {
        "name": "医疗器械",
        "change_pct": -1.93
      },
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "基因测序",
        "change_pct": -2.12
      },
      {
        "name": "预制菜",
        "change_pct": -0.8
      },
      {
        "name": "低价股",
        "change_pct": -2.26
      },
      {
        "name": "水产养殖",
        "change_pct": 0.23
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.04
      },
      {
        "name": "海洋经济",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 5,
    "hot_rank_chg": 108,
    "stock_cnt": 5805,
    "price": "10.86",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "4506705800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "卫星通信终端",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -3.06
      },
      {
        "name": "5G",
        "change_pct": -4.58
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.26
      },
      {
        "name": "LED",
        "change_pct": -3.44
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.1
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": -4.43
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 15,
    "hot_rank_chg": -6,
    "stock_cnt": 5805,
    "price": "8.23",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "4938960600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "冰雪工程",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -2.06
      },
      {
        "name": "边缘计算",
        "change_pct": -3.72
      },
      {
        "name": "核电",
        "change_pct": -1.77
      },
      {
        "name": "海工装备",
        "change_pct": -0.69
      },
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.26
      },
      {
        "name": "冷链",
        "change_pct": -1.93
      },
      {
        "name": "地热",
        "change_pct": -2.0
      },
      {
        "name": "储能",
        "change_pct": -2.64
      },
      {
        "name": "碳中和",
        "change_pct": -1.38
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.37
      },
      {
        "name": "汽车热管理",
        "change_pct": -3.71
      },
      {
        "name": "热泵",
        "change_pct": -2.59
      },
      {
        "name": "液冷服务器",
        "change_pct": -4.07
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.7
      },
      {
        "name": "海洋经济",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 16,
    "hot_rank_chg": 14,
    "stock_cnt": 5805,
    "price": "5.37",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4108805700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.47
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.69
      },
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "医药商业",
        "change_pct": -0.74
      },
      {
        "name": "保健品",
        "change_pct": -1.77
      },
      {
        "name": "民营医院",
        "change_pct": -1.01
      },
      {
        "name": "医药",
        "change_pct": -1.79
      },
      {
        "name": "食品",
        "change_pct": -1.08
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.54
      },
      {
        "name": "口腔",
        "change_pct": -1.41
      },
      {
        "name": "医美",
        "change_pct": -1.47
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.04
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 19,
    "hot_rank_chg": -7,
    "stock_cnt": 5805,
    "price": "8.28",
    "change": "3.24",
    "market_id": "33",
    "circulate_market_value": "15503735000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -3.16
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.26
      },
      {
        "name": "军民融合",
        "change_pct": -2.17
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -2.74
      },
      {
        "name": "风电",
        "change_pct": -1.45
      },
      {
        "name": "军工",
        "change_pct": -1.86
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.38
      },
      {
        "name": "新能源车零部件",
        "change_pct": -3.62
      },
      {
        "name": "轮边电机",
        "change_pct": -2.58
      },
      {
        "name": "人形机器人",
        "change_pct": -3.99
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 21,
    "hot_rank_chg": 11,
    "stock_cnt": 5805,
    "price": "2.27",
    "change": "10.19",
    "market_id": "17",
    "circulate_market_value": "6497585000.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "4",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.91
      },
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "游戏",
        "change_pct": -1.16
      },
      {
        "name": "影视",
        "change_pct": -0.31
      },
      {
        "name": "低价股",
        "change_pct": -2.26
      },
      {
        "name": "国企改革",
        "change_pct": -1.56
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.9
      },
      {
        "name": "AI视频",
        "change_pct": -3.2
      }
    ]
  },
  {
    "code": "002526",
    "name": "山东矿机",
    "hot_rank": 22,
    "hot_rank_chg": 35,
    "stock_cnt": 5805,
    "price": "3.28",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "5809649000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "煤炭机械",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "机械",
        "change_pct": -1.4
      },
      {
        "name": "游戏",
        "change_pct": -1.16
      },
      {
        "name": "机器人",
        "change_pct": -3.6
      },
      {
        "name": "无人机",
        "change_pct": -1.76
      },
      {
        "name": "低空经济",
        "change_pct": -2.37
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 23,
    "hot_rank_chg": -6,
    "stock_cnt": 5805,
    "price": "12.35",
    "change": "4.93",
    "market_id": "33",
    "circulate_market_value": "4128097600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -2.05
      },
      {
        "name": "饲料",
        "change_pct": -1.22
      },
      {
        "name": "一带一路",
        "change_pct": -1.62
      },
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "保健品",
        "change_pct": -1.77
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.72
      },
      {
        "name": "污水处理",
        "change_pct": -1.84
      },
      {
        "name": "环保",
        "change_pct": -2.15
      },
      {
        "name": "食品",
        "change_pct": -1.08
      },
      {
        "name": "预制菜",
        "change_pct": -0.8
      },
      {
        "name": "国企改革",
        "change_pct": -1.56
      },
      {
        "name": "水产养殖",
        "change_pct": 0.23
      },
      {
        "name": "广西概念",
        "change_pct": -1.53
      }
    ]
  },
  {
    "code": "601956",
    "name": "东贝集团",
    "hot_rank": 24,
    "hot_rank_chg": 21,
    "stock_cnt": 5805,
    "price": "6.70",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "4164831200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "机器人电机",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.51
      },
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "冷链",
        "change_pct": -1.93
      },
      {
        "name": "汽车零部件",
        "change_pct": -3.61
      },
      {
        "name": "机器人",
        "change_pct": -3.6
      },
      {
        "name": "白色家电",
        "change_pct": -2.46
      },
      {
        "name": "家电",
        "change_pct": -2.71
      },
      {
        "name": "拼多多概念股",
        "change_pct": -3.03
      },
      {
        "name": "人形机器人",
        "change_pct": -3.99
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.7
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 34,
    "hot_rank_chg": -16,
    "stock_cnt": 5805,
    "price": "8.78",
    "change": "2.57",
    "market_id": "17",
    "circulate_market_value": "2367195200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.09
      },
      {
        "name": "高股息",
        "change_pct": 0.59
      },
      {
        "name": "银行",
        "change_pct": 1.98
      },
      {
        "name": "白马股",
        "change_pct": -0.06
      },
      {
        "name": "破净股",
        "change_pct": -1.17
      },
      {
        "name": "大金融",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 35,
    "hot_rank_chg": -12,
    "stock_cnt": 5805,
    "price": "8.36",
    "change": "2.20",
    "market_id": "33",
    "circulate_market_value": "13601668000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.51
      },
      {
        "name": "电竞",
        "change_pct": -1.58
      },
      {
        "name": "手游",
        "change_pct": -0.91
      },
      {
        "name": "人工智能",
        "change_pct": -3.37
      },
      {
        "name": "游戏",
        "change_pct": -1.16
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -3.12
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.19
      },
      {
        "name": "传媒",
        "change_pct": -2.6
      },
      {
        "name": "快手概念股",
        "change_pct": -3.15
      },
      {
        "name": "元宇宙",
        "change_pct": -2.95
      },
      {
        "name": "虚拟数字人",
        "change_pct": -3.22
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.57
      },
      {
        "name": "web3.0",
        "change_pct": -2.49
      },
      {
        "name": "AIGC概念",
        "change_pct": -3.41
      },
      {
        "name": "数据要素",
        "change_pct": -3.35
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -3.21
      },
      {
        "name": "AI营销",
        "change_pct": -4.22
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.89
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -4.59
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.34
      },
      {
        "name": "人形机器人",
        "change_pct": -3.99
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.9
      },
      {
        "name": "多模态",
        "change_pct": -3.38
      },
      {
        "name": "AI视频",
        "change_pct": -3.2
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.73
      },
      {
        "name": "小红书概念股",
        "change_pct": -3.68
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 37,
    "hot_rank_chg": 47,
    "stock_cnt": 5805,
    "price": "8.14",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "8628035100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "太空算力",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -2.07
      },
      {
        "name": "电子烟",
        "change_pct": -4.26
      },
      {
        "name": "一带一路",
        "change_pct": -1.62
      },
      {
        "name": "造纸",
        "change_pct": -1.38
      },
      {
        "name": "包装印刷",
        "change_pct": -2.39
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.1
      },
      {
        "name": "太空算力",
        "change_pct": 0.5
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 39,
    "hot_rank_chg": -10,
    "stock_cnt": 5805,
    "price": "8.97",
    "change": "2.98",
    "market_id": "33",
    "circulate_market_value": "4248912200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.91
      },
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "VR&AR",
        "change_pct": -4.03
      },
      {
        "name": "游戏",
        "change_pct": -1.16
      },
      {
        "name": "影视",
        "change_pct": -0.31
      },
      {
        "name": "直播/短视频",
        "change_pct": -3.01
      },
      {
        "name": "动漫",
        "change_pct": -1.44
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.19
      },
      {
        "name": "传媒",
        "change_pct": -2.6
      },
      {
        "name": "元宇宙",
        "change_pct": -2.95
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.9
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.73
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 42,
    "hot_rank_chg": 84,
    "stock_cnt": 5805,
    "price": "3.50",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "4569144700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "冰雪旅游保障",
    "xgb_concepts": [
      {
        "name": "高速公路",
        "change_pct": 0.95
      },
      {
        "name": "振兴东北",
        "change_pct": -1.68
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "002531",
    "name": "天顺风能",
    "hot_rank": 56,
    "hot_rank_chg": 17,
    "stock_cnt": 5805,
    "price": "7.06",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "12615292300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "三季报增长",
    "xgb_concepts": [
      {
        "name": "海工装备",
        "change_pct": -0.69
      },
      {
        "name": "风电",
        "change_pct": -1.45
      },
      {
        "name": "船舶",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "600558",
    "name": "大西洋",
    "hot_rank": 60,
    "hot_rank_chg": 32,
    "stock_cnt": 5805,
    "price": "5.90",
    "change": "4.98",
    "market_id": "17",
    "circulate_market_value": "5295868500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -1.77
      },
      {
        "name": "军民融合",
        "change_pct": -2.17
      },
      {
        "name": "有色 · 钛",
        "change_pct": -0.99
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.96
      },
      {
        "name": "有色金属",
        "change_pct": -2.79
      },
      {
        "name": "军工",
        "change_pct": -1.86
      },
      {
        "name": "超超临界发电",
        "change_pct": -0.85
      },
      {
        "name": "核聚变",
        "change_pct": -2.22
      }
    ]
  },
  {
    "code": "000701",
    "name": "厦门信达",
    "hot_rank": 64,
    "hot_rank_chg": 221,
    "stock_cnt": 5805,
    "price": "5.62",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "3752736100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "大宗商品",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -4.22
      },
      {
        "name": "应急产业",
        "change_pct": -1.72
      },
      {
        "name": "车联网/车路云",
        "change_pct": -3.06
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.34
      },
      {
        "name": "电子车牌",
        "change_pct": -2.96
      },
      {
        "name": "物联网",
        "change_pct": -3.35
      },
      {
        "name": "智慧城市",
        "change_pct": -2.91
      },
      {
        "name": "LED",
        "change_pct": -3.44
      },
      {
        "name": "智慧安防",
        "change_pct": -2.49
      },
      {
        "name": "小米概念股",
        "change_pct": -4.47
      },
      {
        "name": "汽车销售",
        "change_pct": -0.6
      },
      {
        "name": "食品安全",
        "change_pct": -0.97
      },
      {
        "name": "web3.0",
        "change_pct": -2.49
      },
      {
        "name": "国企改革",
        "change_pct": -1.56
      },
      {
        "name": "MiniLED",
        "change_pct": -4.68
      },
      {
        "name": "自贸区",
        "change_pct": -1.63
      },
      {
        "name": "小米汽车",
        "change_pct": -2.63
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.73
      }
    ]
  },
  {
    "code": "002376",
    "name": "新北洋",
    "hot_rank": 69,
    "hot_rank_chg": 74,
    "stock_cnt": 5805,
    "price": "7.61",
    "change": "0.40",
    "market_id": "33",
    "circulate_market_value": "5992605300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "彩票",
        "change_pct": -3.22
      },
      {
        "name": "锂电池",
        "change_pct": -3.69
      },
      {
        "name": "新零售",
        "change_pct": -2.35
      },
      {
        "name": "人工智能",
        "change_pct": -3.37
      },
      {
        "name": "高铁轨交",
        "change_pct": -2.01
      },
      {
        "name": "人脸识别",
        "change_pct": -2.8
      },
      {
        "name": "物联网",
        "change_pct": -3.35
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.38
      },
      {
        "name": "机器人",
        "change_pct": -3.6
      },
      {
        "name": "智慧物流",
        "change_pct": -2.42
      },
      {
        "name": "机器视觉",
        "change_pct": -4.3
      },
      {
        "name": "智能制造",
        "change_pct": -3.41
      },
      {
        "name": "换电概念",
        "change_pct": -2.98
      },
      {
        "name": "信创",
        "change_pct": -4.03
      },
      {
        "name": "数字人民币",
        "change_pct": -3.23
      },
      {
        "name": "盲盒",
        "change_pct": -3.11
      },
      {
        "name": "打印机",
        "change_pct": -3.56
      }
    ]
  },
  {
    "code": "603528",
    "name": "多伦科技",
    "hot_rank": 70,
    "hot_rank_chg": -22,
    "stock_cnt": 5805,
    "price": "7.98",
    "change": "-10.03",
    "market_id": "17",
    "circulate_market_value": "5633322400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -3.06
      },
      {
        "name": "国产软件",
        "change_pct": -3.6
      },
      {
        "name": "无人驾驶",
        "change_pct": -3.44
      },
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "人工智能",
        "change_pct": -3.37
      },
      {
        "name": "充电桩",
        "change_pct": -3.16
      },
      {
        "name": "北斗导航",
        "change_pct": -1.27
      },
      {
        "name": "智慧停车",
        "change_pct": -2.71
      },
      {
        "name": "物联网",
        "change_pct": -3.35
      },
      {
        "name": "教育",
        "change_pct": -3.16
      },
      {
        "name": "智慧城市",
        "change_pct": -2.91
      },
      {
        "name": "光伏",
        "change_pct": -2.3
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.38
      },
      {
        "name": "机器人",
        "change_pct": -3.6
      },
      {
        "name": "机器视觉",
        "change_pct": -4.3
      },
      {
        "name": "智慧安防",
        "change_pct": -2.49
      },
      {
        "name": "智能制造",
        "change_pct": -3.41
      },
      {
        "name": "国产芯片",
        "change_pct": -4.46
      },
      {
        "name": "华为昇腾",
        "change_pct": -4.13
      },
      {
        "name": "职业教育",
        "change_pct": -2.88
      },
      {
        "name": "在线教育",
        "change_pct": -2.86
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -4.04
      },
      {
        "name": "华为产业链",
        "change_pct": -3.81
      },
      {
        "name": "汽车检测",
        "change_pct": -3.46
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 71,
    "hot_rank_chg": 112,
    "stock_cnt": 5805,
    "price": "9.05",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "2574558600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "三季报增长",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -2.34
      },
      {
        "name": "教育",
        "change_pct": -3.16
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -3.16
      },
      {
        "name": "职业教育",
        "change_pct": -2.88
      },
      {
        "name": "在线教育",
        "change_pct": -2.86
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -3.67
      },
      {
        "name": "华为产业链",
        "change_pct": -3.81
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.9
      },
      {
        "name": "智谱AI",
        "change_pct": -3.58
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 72,
    "hot_rank_chg": -17,
    "stock_cnt": 5805,
    "price": "9.70",
    "change": "4.75",
    "market_id": "33",
    "circulate_market_value": "9225039200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -3.05
      },
      {
        "name": "大飞机",
        "change_pct": -0.6
      },
      {
        "name": "北斗导航",
        "change_pct": -1.27
      },
      {
        "name": "高铁轨交",
        "change_pct": -2.01
      },
      {
        "name": "军民融合",
        "change_pct": -2.17
      },
      {
        "name": "磁悬浮",
        "change_pct": -1.95
      },
      {
        "name": "军工",
        "change_pct": -1.86
      },
      {
        "name": "碳纤维",
        "change_pct": -2.48
      },
      {
        "name": "无人机",
        "change_pct": -1.76
      },
      {
        "name": "智能制造",
        "change_pct": -3.41
      },
      {
        "name": "3D打印",
        "change_pct": -3.15
      },
      {
        "name": "航天",
        "change_pct": -0.7
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.1
      },
      {
        "name": "国资入股",
        "change_pct": -1.18
      },
      {
        "name": "低空经济",
        "change_pct": -2.37
      },
      {
        "name": "海洋经济",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "000547",
    "name": "航天发展",
    "hot_rank": 74,
    "hot_rank_chg": -8,
    "stock_cnt": 5805,
    "price": "12.90",
    "change": "4.03",
    "market_id": "33",
    "circulate_market_value": "20499662000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.25
      },
      {
        "name": "5G",
        "change_pct": -4.58
      },
      {
        "name": "VR&AR",
        "change_pct": -4.03
      },
      {
        "name": "网络安全",
        "change_pct": -4.21
      },
      {
        "name": "军工集团",
        "change_pct": -0.83
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.34
      },
      {
        "name": "大数据",
        "change_pct": -3.16
      },
      {
        "name": "军工",
        "change_pct": -1.86
      },
      {
        "name": "无人机",
        "change_pct": -1.76
      },
      {
        "name": "信创",
        "change_pct": -4.03
      },
      {
        "name": "航天",
        "change_pct": -0.7
      },
      {
        "name": "国企改革",
        "change_pct": -1.56
      },
      {
        "name": "智慧政务",
        "change_pct": -3.6
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.1
      },
      {
        "name": "华为产业链",
        "change_pct": -3.81
      },
      {
        "name": "自贸区",
        "change_pct": -1.63
      },
      {
        "name": "低空经济",
        "change_pct": -2.37
      },
      {
        "name": "军工信息化",
        "change_pct": -1.75
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 76,
    "hot_rank_chg": 63,
    "stock_cnt": 5805,
    "price": "9.68",
    "change": "1.04",
    "market_id": "17",
    "circulate_market_value": "4188280900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -3.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "光伏",
        "change_pct": -2.3
      },
      {
        "name": "无线耳机",
        "change_pct": -4.54
      },
      {
        "name": "华为产业链",
        "change_pct": -3.81
      },
      {
        "name": "光伏胶膜",
        "change_pct": -2.13
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 82,
    "hot_rank_chg": -11,
    "stock_cnt": 5805,
    "price": "4.63",
    "change": "-4.14",
    "market_id": "33",
    "circulate_market_value": "163749830000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -5.14
      },
      {
        "name": "手机产业链",
        "change_pct": -4.82
      },
      {
        "name": "超高清视频",
        "change_pct": -3.49
      },
      {
        "name": "苹果产业链",
        "change_pct": -4.86
      },
      {
        "name": "电竞",
        "change_pct": -1.58
      },
      {
        "name": "半导体",
        "change_pct": -5.06
      },
      {
        "name": "人工智能",
        "change_pct": -3.37
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.9
      },
      {
        "name": "VR&AR",
        "change_pct": -4.03
      },
      {
        "name": "OLED",
        "change_pct": -4.73
      },
      {
        "name": "京津冀",
        "change_pct": -2.45
      },
      {
        "name": "物联网",
        "change_pct": -3.35
      },
      {
        "name": "指纹识别",
        "change_pct": -5.38
      },
      {
        "name": "汽车零部件",
        "change_pct": -3.61
      },
      {
        "name": "白马股",
        "change_pct": -0.06
      },
      {
        "name": "智能制造",
        "change_pct": -3.41
      },
      {
        "name": "小米概念股",
        "change_pct": -4.47
      },
      {
        "name": "国产芯片",
        "change_pct": -4.46
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -4.37
      },
      {
        "name": "全息概念",
        "change_pct": -2.57
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -4.1
      },
      {
        "name": "MicroLED",
        "change_pct": -5.11
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.83
      },
      {
        "name": "智能手表",
        "change_pct": -4.61
      },
      {
        "name": "MiniLED",
        "change_pct": -4.68
      },
      {
        "name": "传感器",
        "change_pct": -3.94
      },
      {
        "name": "大硅片",
        "change_pct": -5.62
      },
      {
        "name": "AI PC",
        "change_pct": -5.46
      },
      {
        "name": "华为产业链",
        "change_pct": -3.81
      },
      {
        "name": "回购",
        "change_pct": -2.51
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -8.23
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -4.59
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -5.89
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 85,
    "hot_rank_chg": 57,
    "stock_cnt": 5805,
    "price": "7.92",
    "change": "4.49",
    "market_id": "33",
    "circulate_market_value": "5720551100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -1.77
      },
      {
        "name": "充电桩",
        "change_pct": -3.16
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.34
      },
      {
        "name": "军民融合",
        "change_pct": -2.17
      },
      {
        "name": "光伏",
        "change_pct": -2.3
      },
      {
        "name": "风电",
        "change_pct": -1.45
      },
      {
        "name": "军工",
        "change_pct": -1.86
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.38
      },
      {
        "name": "特高压",
        "change_pct": -2.44
      },
      {
        "name": "自贸区",
        "change_pct": -1.63
      },
      {
        "name": "海洋经济",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 87,
    "hot_rank_chg": -48,
    "stock_cnt": 5805,
    "price": "10.48",
    "change": "5.64",
    "market_id": "33",
    "circulate_market_value": "11065003000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -1.82
      },
      {
        "name": "医疗器械",
        "change_pct": -1.93
      },
      {
        "name": "医药",
        "change_pct": -1.79
      },
      {
        "name": "疫苗",
        "change_pct": -2.8
      },
      {
        "name": "化学原料药",
        "change_pct": -1.89
      },
      {
        "name": "肝炎概念",
        "change_pct": -2.01
      },
      {
        "name": "干细胞",
        "change_pct": -1.17
      },
      {
        "name": "眼科",
        "change_pct": -1.47
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -2.5
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 88,
    "hot_rank_chg": -55,
    "stock_cnt": 5805,
    "price": "11.50",
    "change": "3.32",
    "market_id": "17",
    "circulate_market_value": "14769204000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "智能制造",
        "change_pct": -3.41
      },
      {
        "name": "工业互联网",
        "change_pct": -3.32
      },
      {
        "name": "培育钻石",
        "change_pct": -2.32
      },
      {
        "name": "金刚线",
        "change_pct": -1.67
      },
      {
        "name": "国资入股",
        "change_pct": -1.18
      },
      {
        "name": "深地经济",
        "change_pct": -2.61
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 89,
    "hot_rank_chg": 21,
    "stock_cnt": 5805,
    "price": "3.37",
    "change": "3.37",
    "market_id": "33",
    "circulate_market_value": "6861991100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -3.72
      },
      {
        "name": "数字孪生",
        "change_pct": -2.08
      },
      {
        "name": "深圳本地股",
        "change_pct": -3.68
      },
      {
        "name": "人工智能",
        "change_pct": -3.37
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.9
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.26
      },
      {
        "name": "高铁轨交",
        "change_pct": -2.01
      },
      {
        "name": "人脸识别",
        "change_pct": -2.8
      },
      {
        "name": "智慧停车",
        "change_pct": -2.71
      },
      {
        "name": "物联网",
        "change_pct": -3.35
      },
      {
        "name": "大数据",
        "change_pct": -3.16
      },
      {
        "name": "智慧城市",
        "change_pct": -2.91
      },
      {
        "name": "雄安新区",
        "change_pct": -2.19
      },
      {
        "name": "机器人",
        "change_pct": -3.6
      },
      {
        "name": "数字经济",
        "change_pct": -3.12
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -3.16
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.19
      },
      {
        "name": "建筑节能",
        "change_pct": -1.96
      },
      {
        "name": "旧改",
        "change_pct": -2.26
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.8
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.04
      },
      {
        "name": "华为产业链",
        "change_pct": -3.81
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.34
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -1.34
      },
      {
        "name": "液冷服务器",
        "change_pct": -4.07
      },
      {
        "name": "区块链",
        "change_pct": -2.57
      }
    ]
  },
  {
    "code": "600428",
    "name": "中远海特",
    "hot_rank": 92,
    "hot_rank_chg": 183,
    "stock_cnt": 5805,
    "price": "11.39",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "31253253000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "三季报增长",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.25
      },
      {
        "name": "一带一路",
        "change_pct": -1.62
      },
      {
        "name": "航运",
        "change_pct": -0.2
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.97
      },
      {
        "name": "国企改革",
        "change_pct": -1.56
      },
      {
        "name": "回购增持再贷款",
        "change_pct": 0.18
      },
      {
        "name": "海洋经济",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 95,
    "hot_rank_chg": -30,
    "stock_cnt": 5805,
    "price": "6.74",
    "change": "0.60",
    "market_id": "33",
    "circulate_market_value": "12907723100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.34
      },
      {
        "name": "林业",
        "change_pct": -0.23
      },
      {
        "name": "碳中和",
        "change_pct": -1.38
      },
      {
        "name": "自贸区",
        "change_pct": -1.63
      }
    ]
  },
  {
    "code": "603006",
    "name": "联明股份",
    "hot_rank": 99,
    "hot_rank_chg": 210,
    "stock_cnt": 5805,
    "price": "11.81",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "3002742700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "三季报增长",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.25
      },
      {
        "name": "冷链",
        "change_pct": -1.93
      },
      {
        "name": "汽车零部件",
        "change_pct": -3.61
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.38
      },
      {
        "name": "新能源车零部件",
        "change_pct": -3.62
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600261", "name": "阳光照明", "hot_rank": 1, "hot_rank_chg": 95, "stock_cnt": 5805, "price": "3.72", "change": "10.06", "market_id": "17", "circulate_market_value": "4966397000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天", "xgb_concepts": [{"name": "LED", "change_pct": -3.44}, {"name": "卫星互联网", "change_pct": -1.1}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 2, "hot_rank_chg": 47, "stock_cnt": 5805, "price": "2.57", "change": "9.83", "market_id": "33", "circulate_market_value": "4063096200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.95}, {"name": "体外诊断", "change_pct": -2.0}, {"name": "医疗器械", "change_pct": -1.93}, {"name": "强势人气股", "change_pct": 0.25}, {"name": "基因测序", "change_pct": -2.12}, {"name": "预制菜", "change_pct": -0.8}, {"name": "低价股", "change_pct": -2.26}, {"name": "水产养殖", "change_pct": 0.23}, {"name": "新冠病毒防治", "change_pct": -2.04}, {"name": "海洋经济", "change_pct": -1.35}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5805, "price": "582.05", "change": "-8.53", "market_id": "33", "circulate_market_value": "646038830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 4, "hot_rank_chg": -3, "stock_cnt": 5805, "price": "18.75", "change": "6.47", "market_id": "33", "circulate_market_value": "8617721200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603703", "name": "盛洋科技", "hot_rank": 5, "hot_rank_chg": 108, "stock_cnt": 5805, "price": "10.86", "change": "10.03", "market_id": "17", "circulate_market_value": "4506705800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "卫星通信终端", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -3.06}, {"name": "5G", "change_pct": -4.58}, {"name": "云计算数据中心", "change_pct": -4.26}, {"name": "LED", "change_pct": -3.44}, {"name": "卫星互联网", "change_pct": -1.1}, {"name": "铜缆高速连接器", "change_pct": -4.43}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5805, "price": "20.83", "change": "9.98", "market_id": "33", "circulate_market_value": "10615600200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "人形机器人"}, {"code": "300502", "name": "新易盛", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5805, "price": "228.40", "change": "-11.06", "market_id": "33", "circulate_market_value": "286578900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5805, "price": "23.00", "change": "2.77", "market_id": "33", "circulate_market_value": "17520609000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5805, "price": "14.84", "change": "0.20", "market_id": "17", "circulate_market_value": "15506136000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 10, "hot_rank_chg": -7, "stock_cnt": 5805, "price": "161.60", "change": "-19.77", "market_id": "33", "circulate_market_value": "175883510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 11, "hot_rank_chg": 4, "stock_cnt": 5805, "price": "94.14", "change": "-10.00", "market_id": "33", "circulate_market_value": "130508327000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 12, "hot_rank_chg": 1, "stock_cnt": 5805, "price": "13.54", "change": "1.04", "market_id": "33", "circulate_market_value": "7670116000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603131", "name": "上海沪工", "hot_rank": 13, "hot_rank_chg": 40, "stock_cnt": 5805, "price": "15.95", "change": "10.00", "market_id": "17", "circulate_market_value": "5373670200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "三季报扭亏"}, {"code": "603278", "name": "大业股份", "hot_rank": 14, "hot_rank_chg": 0, "stock_cnt": 5805, "price": "17.88", "change": "-0.22", "market_id": "17", "circulate_market_value": "6110657900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 15, "hot_rank_chg": -6, "stock_cnt": 5805, "price": "8.23", "change": "10.03", "market_id": "33", "circulate_market_value": "4938960600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪工程", "xgb_concepts": [{"name": "体育产业", "change_pct": -2.06}, {"name": "边缘计算", "change_pct": -3.72}, {"name": "核电", "change_pct": -1.77}, {"name": "海工装备", "change_pct": -0.69}, {"name": "强势人气股", "change_pct": 0.25}, {"name": "云计算数据中心", "change_pct": -4.26}, {"name": "冷链", "change_pct": -1.93}, {"name": "地热", "change_pct": -2.0}, {"name": "储能", "change_pct": -2.64}, {"name": "碳中和", "change_pct": -1.38}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -0.37}, {"name": "汽车热管理", "change_pct": -3.71}, {"name": "热泵", "change_pct": -2.59}, {"name": "液冷服务器", "change_pct": -4.07}, {"name": "蜜雪冰城概念股", "change_pct": -0.7}, {"name": "海洋经济", "change_pct": -1.35}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 16, "hot_rank_chg": 14, "stock_cnt": 5805, "price": "5.37", "change": "10.04", "market_id": "33", "circulate_market_value": "4108805700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": -1.47}, {"name": "优化生育（三孩）", "change_pct": -1.69}, {"name": "强势人气股", "change_pct": 0.25}, {"name": "医药商业", "change_pct": -0.74}, {"name": "保健品", "change_pct": -1.77}, {"name": "民营医院", "change_pct": -1.01}, {"name": "医药", "change_pct": -1.79}, {"name": "食品", "change_pct": -1.08}, {"name": "辅助生殖", "change_pct": -1.54}, {"name": "口腔", "change_pct": -1.41}, {"name": "医美", "change_pct": -1.47}, {"name": "新冠病毒防治", "change_pct": -2.04}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 17, "hot_rank_chg": -15, "stock_cnt": 5805, "price": "662.39", "change": "-4.82", "market_id": "17", "circulate_market_value": "19929805000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 18, "hot_rank_chg": 1, "stock_cnt": 5805, "price": "55.90", "change": "10.00", "market_id": "17", "circulate_market_value": "66101143000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报增长"}, {"code": "002249", "name": "大洋电机", "hot_rank": 19, "hot_rank_chg": -7, "stock_cnt": 5805, "price": "8.28", "change": "3.24", "market_id": "33", "circulate_market_value": "15503735000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -3.16}, {"name": "云计算数据中心", "change_pct": -4.26}, {"name": "军民融合", "change_pct": -2.17}, {"name": "氢能源/燃料电池", "change_pct": -2.74}, {"name": "风电", "change_pct": -1.45}, {"name": "军工", "change_pct": -1.86}, {"name": "新能源汽车", "change_pct": -3.38}, {"name": "新能源车零部件", "change_pct": -3.62}, {"name": "轮边电机", "change_pct": -2.58}, {"name": "人形机器人", "change_pct": -3.99}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 20, "hot_rank_chg": 1, "stock_cnt": 5805, "price": "275.99", "change": "-4.79", "market_id": "17", "circulate_market_value": "185111550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 21, "hot_rank_chg": 11, "stock_cnt": 5805, "price": "2.27", "change": "10.19", "market_id": "17", "circulate_market_value": "6497585000.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": -0.91}, {"name": "强势人气股", "change_pct": 0.25}, {"name": "游戏", "change_pct": -1.16}, {"name": "影视", "change_pct": -0.31}, {"name": "低价股", "change_pct": -2.26}, {"name": "国企改革", "change_pct": -1.56}, {"name": "短剧/互动影游", "change_pct": -1.9}, {"name": "AI视频", "change_pct": -3.2}]}, {"code": "002526", "name": "山东矿机", "hot_rank": 22, "hot_rank_chg": 35, "stock_cnt": 5805, "price": "3.28", "change": "10.07", "market_id": "33", "circulate_market_value": "5809649000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "煤炭机械", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.25}, {"name": "机械", "change_pct": -1.4}, {"name": "游戏", "change_pct": -1.16}, {"name": "机器人", "change_pct": -3.6}, {"name": "无人机", "change_pct": -1.76}, {"name": "低空经济", "change_pct": -2.37}]}, {"code": "002696", "name": "百洋股份", "hot_rank": 23, "hot_rank_chg": -6, "stock_cnt": 5805, "price": "12.35", "change": "4.93", "market_id": "33", "circulate_market_value": "4128097600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.05}, {"name": "饲料", "change_pct": -1.22}, {"name": "一带一路", "change_pct": -1.62}, {"name": "强势人气股", "change_pct": 0.25}, {"name": "保健品", "change_pct": -1.77}, {"name": "山东国企改革", "change_pct": -1.72}, {"name": "污水处理", "change_pct": -1.84}, {"name": "环保", "change_pct": -2.15}, {"name": "食品", "change_pct": -1.08}, {"name": "预制菜", "change_pct": -0.8}, {"name": "国企改革", "change_pct": -1.56}, {"name": "水产养殖", "change_pct": 0.23}, {"name": "广西概念", "change_pct": -1.53}]}, {"code": "601956", "name": "东贝集团", "hot_rank": 24, "hot_rank_chg": 21, "stock_cnt": 5805, "price": "6.70", "change": "10.02", "market_id": "17", "circulate_market_value": "4164831200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "机器人电机", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.51}, {"name": "强势人气股", "change_pct": 0.25}, {"name": "冷链", "change_pct": -1.93}, {"name": "汽车零部件", "change_pct": -3.61}, {"name": "机器人", "change_pct": -3.6}, {"name": "白色家电", "change_pct": -2.46}, {"name": "家电", "change_pct": -2.71}, {"name": "拼多多概念股", "change_pct": -3.03}, {"name": "人形机器人", "change_pct": -3.99}, {"name": "蜜雪冰城概念股", "change_pct": -0.7}]}, {"code": "300476", "name": "胜宏科技", "hot_rank": 25, "hot_rank_chg": 12, "stock_cnt": 5805, "price": "160.38", "change": "-11.05", "market_id": "33", "circulate_market_value": "138759970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 26, "hot_rank_chg": 14, "stock_cnt": 5805, "price": "45.22", "change": "-7.03", "market_id": "17", "circulate_market_value": "897349850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 27, "hot_rank_chg": 19, "stock_cnt": 5805, "price": "18.13", "change": "10.01", "market_id": "33", "circulate_market_value": "3448280700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "股权转让"}, {"code": "600838", "name": "上海九百", "hot_rank": 28, "hot_rank_chg": -18, "stock_cnt": 5805, "price": "13.63", "change": "-2.57", "market_id": "17", "circulate_market_value": "5464021400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 29, "hot_rank_chg": -13, "stock_cnt": 5805, "price": "15.17", "change": "-6.82", "market_id": "33", "circulate_market_value": "50455822000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002149", "name": "西部材料", "hot_rank": 30, "hot_rank_chg": 32, "stock_cnt": 5805, "price": "32.31", "change": "10.01", "market_id": "33", "circulate_market_value": "15771775000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "601857", "name": "中国石油", "hot_rank": 31, "hot_rank_chg": 13, "stock_cnt": 5805, "price": "13.69", "change": "3.24", "market_id": "17", "circulate_market_value": "2216713200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 32, "hot_rank_chg": 18, "stock_cnt": 5805, "price": "23.77", "change": "9.99", "market_id": "17", "circulate_market_value": "9531770000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低温乳品"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 33, "hot_rank_chg": -22, "stock_cnt": 5805, "price": "42.87", "change": "-3.36", "market_id": "17", "circulate_market_value": "193045280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 34, "hot_rank_chg": -16, "stock_cnt": 5805, "price": "8.78", "change": "2.57", "market_id": "17", "circulate_market_value": "2367195200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.09}, {"name": "高股息", "change_pct": 0.59}, {"name": "银行", "change_pct": 1.98}, {"name": "白马股", "change_pct": -0.06}, {"name": "破净股", "change_pct": -1.17}, {"name": "大金融", "change_pct": 1.01}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 35, "hot_rank_chg": -12, "stock_cnt": 5805, "price": "8.36", "change": "2.20", "market_id": "33", "circulate_market_value": "13601668000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.51}, {"name": "电竞", "change_pct": -1.58}, {"name": "手游", "change_pct": -0.91}, {"name": "人工智能", "change_pct": -3.37}, {"name": "游戏", "change_pct": -1.16}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -3.12}, {"name": "腾讯概念股", "change_pct": -3.19}, {"name": "传媒", "change_pct": -2.6}, {"name": "快手概念股", "change_pct": -3.15}, {"name": "元宇宙", "change_pct": -2.95}, {"name": "虚拟数字人", "change_pct": -3.22}, {"name": "东数西算/算力", "change_pct": -3.57}, {"name": "web3.0", "change_pct": -2.49}, {"name": "AIGC概念", "change_pct": -3.41}, {"name": "数据要素", "change_pct": -3.35}, {"name": "字节跳动概念股", "change_pct": -3.21}, {"name": "AI营销", "change_pct": -4.22}, {"name": "ChatGPT", "change_pct": -2.89}, {"name": "智能眼镜/MR头显", "change_pct": -4.59}, {"name": "AI大模型/智能体", "change_pct": -3.34}, {"name": "人形机器人", "change_pct": -3.99}, {"name": "短剧/互动影游", "change_pct": -1.9}, {"name": "多模态", "change_pct": -3.38}, {"name": "AI视频", "change_pct": -3.2}, {"name": "IP经济/谷子经济", "change_pct": -1.73}, {"name": "小红书概念股", "change_pct": -3.68}]}, {"code": "301079", "name": "邵阳液压", "hot_rank": 36, "hot_rank_chg": 40, "stock_cnt": 5805, "price": "34.00", "change": "20.01", "market_id": "33", "circulate_market_value": "2615736000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "航天"}, {"code": "002565", "name": "顺灏股份", "hot_rank": 37, "hot_rank_chg": 47, "stock_cnt": 5805, "price": "8.14", "change": "10.00", "market_id": "33", "circulate_market_value": "8628035100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "太空算力", "xgb_concepts": [{"name": "工业大麻", "change_pct": -2.07}, {"name": "电子烟", "change_pct": -4.26}, {"name": "一带一路", "change_pct": -1.62}, {"name": "造纸", "change_pct": -1.38}, {"name": "包装印刷", "change_pct": -2.39}, {"name": "卫星互联网", "change_pct": -1.1}, {"name": "太空算力", "change_pct": 0.5}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 38, "hot_rank_chg": -14, "stock_cnt": 5805, "price": "229.07", "change": "-0.03", "market_id": "33", "circulate_market_value": "975979560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 39, "hot_rank_chg": -10, "stock_cnt": 5805, "price": "8.97", "change": "2.98", "market_id": "33", "circulate_market_value": "4248912200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.91}, {"name": "强势人气股", "change_pct": 0.25}, {"name": "VR&AR", "change_pct": -4.03}, {"name": "游戏", "change_pct": -1.16}, {"name": "影视", "change_pct": -0.31}, {"name": "直播/短视频", "change_pct": -3.01}, {"name": "动漫", "change_pct": -1.44}, {"name": "腾讯概念股", "change_pct": -3.19}, {"name": "传媒", "change_pct": -2.6}, {"name": "元宇宙", "change_pct": -2.95}, {"name": "短剧/互动影游", "change_pct": -1.9}, {"name": "IP经济/谷子经济", "change_pct": -1.73}]}, {"code": "600592", "name": "龙溪股份", "hot_rank": 40, "hot_rank_chg": 91, "stock_cnt": 5805, "price": "17.41", "change": "9.98", "market_id": "17", "circulate_market_value": "6956227700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "关节轴承"}, {"code": "600487", "name": "亨通光电", "hot_rank": 41, "hot_rank_chg": -15, "stock_cnt": 5805, "price": "44.60", "change": "-7.98", "market_id": "17", "circulate_market_value": "109432623000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 42, "hot_rank_chg": 84, "stock_cnt": 5805, "price": "3.50", "change": "10.06", "market_id": "17", "circulate_market_value": "4569144700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪旅游保障", "xgb_concepts": [{"name": "高速公路", "change_pct": 0.95}, {"name": "振兴东北", "change_pct": -1.68}, {"name": "黑龙江自贸区", "change_pct": 1.15}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 43, "hot_rank_chg": -18, "stock_cnt": 5805, "price": "13.60", "change": "3.42", "market_id": "17", "circulate_market_value": "9057600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600501", "name": "航天晨光", "hot_rank": 44, "hot_rank_chg": 108, "stock_cnt": 5805, "price": "16.89", "change": "10.03", "market_id": "17", "circulate_market_value": "7225950700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "601995", "name": "中金公司", "hot_rank": 45, "hot_rank_chg": -9, "stock_cnt": 5805, "price": "27.12", "change": "-9.99", "market_id": "17", "circulate_market_value": "110103526000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 46, "hot_rank_chg": -12, "stock_cnt": 5805, "price": "215.40", "change": "-6.58", "market_id": "33", "circulate_market_value": "50062856000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001317", "name": "三羊马", "hot_rank": 47, "hot_rank_chg": -12, "stock_cnt": 5805, "price": "58.08", "change": "4.93", "market_id": "33", "circulate_market_value": "4965986200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002865", "name": "钧达股份", "hot_rank": 48, "hot_rank_chg": 64, "stock_cnt": 5805, "price": "38.62", "change": "10.00", "market_id": "33", "circulate_market_value": "8837084500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "601088", "name": "中国神华", "hot_rank": 49, "hot_rank_chg": 54, "stock_cnt": 5805, "price": "51.62", "change": "3.97", "market_id": "17", "circulate_market_value": "874892090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603667", "name": "五洲新春", "hot_rank": 50, "hot_rank_chg": -23, "stock_cnt": 5805, "price": "53.11", "change": "6.26", "market_id": "17", "circulate_market_value": "20349199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 51, "hot_rank_chg": -8, "stock_cnt": 5805, "price": "94.11", "change": "-10.00", "market_id": "33", "circulate_market_value": "181354070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 52, "hot_rank_chg": 39, "stock_cnt": 5805, "price": "29.99", "change": "2.01", "market_id": "17", "circulate_market_value": "733801850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 53, "hot_rank_chg": 10, "stock_cnt": 5805, "price": "1354.00", "change": "1.75", "market_id": "17", "circulate_market_value": "1692610500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601318", "name": "中国平安", "hot_rank": 54, "hot_rank_chg": -2, "stock_cnt": 5805, "price": "53.20", "change": "1.70", "market_id": "17", "circulate_market_value": "567115460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 55, "hot_rank_chg": 45, "stock_cnt": 5805, "price": "13.59", "change": "2.10", "market_id": "33", "circulate_market_value": "3841349400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002531", "name": "天顺风能", "hot_rank": 56, "hot_rank_chg": 17, "stock_cnt": 5805, "price": "7.06", "change": "9.97", "market_id": "33", "circulate_market_value": "12615292300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报增长", "xgb_concepts": [{"name": "海工装备", "change_pct": -0.69}, {"name": "风电", "change_pct": -1.45}, {"name": "船舶", "change_pct": 0.04}]}, {"code": "000559", "name": "万向钱潮", "hot_rank": 57, "hot_rank_chg": -37, "stock_cnt": 5805, "price": "13.02", "change": "-1.21", "market_id": "33", "circulate_market_value": "43318569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 58, "hot_rank_chg": -36, "stock_cnt": 5805, "price": "57.89", "change": "-1.20", "market_id": "33", "circulate_market_value": "41983945000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 59, "hot_rank_chg": -18, "stock_cnt": 5805, "price": "17.99", "change": "6.45", "market_id": "33", "circulate_market_value": "8631154800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600558", "name": "大西洋", "hot_rank": 60, "hot_rank_chg": 32, "stock_cnt": 5805, "price": "5.90", "change": "4.98", "market_id": "17", "circulate_market_value": "5295868500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": -1.77}, {"name": "军民融合", "change_pct": -2.17}, {"name": "有色 · 钛", "change_pct": -0.99}, {"name": "装配式建筑", "change_pct": -1.96}, {"name": "有色金属", "change_pct": -2.79}, {"name": "军工", "change_pct": -1.86}, {"name": "超超临界发电", "change_pct": -0.85}, {"name": "核聚变", "change_pct": -2.22}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 61, "hot_rank_chg": 62, "stock_cnt": 5805, "price": "16.78", "change": "2.44", "market_id": "33", "circulate_market_value": "7590245100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 62, "hot_rank_chg": -11, "stock_cnt": 5805, "price": "72.28", "change": "-0.17", "market_id": "33", "circulate_market_value": "280555790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 63, "hot_rank_chg": 12, "stock_cnt": 5805, "price": "221.51", "change": "-7.40", "market_id": "33", "circulate_market_value": "62433013000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000701", "name": "厦门信达", "hot_rank": 64, "hot_rank_chg": 221, "stock_cnt": 5805, "price": "5.62", "change": "9.98", "market_id": "33", "circulate_market_value": "3752736100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "大宗商品", "xgb_concepts": [{"name": "被动元件", "change_pct": -4.22}, {"name": "应急产业", "change_pct": -1.72}, {"name": "车联网/车路云", "change_pct": -3.06}, {"name": "福建自贸/海西概念", "change_pct": -1.34}, {"name": "电子车牌", "change_pct": -2.96}, {"name": "物联网", "change_pct": -3.35}, {"name": "智慧城市", "change_pct": -2.91}, {"name": "LED", "change_pct": -3.44}, {"name": "智慧安防", "change_pct": -2.49}, {"name": "小米概念股", "change_pct": -4.47}, {"name": "汽车销售", "change_pct": -0.6}, {"name": "食品安全", "change_pct": -0.97}, {"name": "web3.0", "change_pct": -2.49}, {"name": "国企改革", "change_pct": -1.56}, {"name": "MiniLED", "change_pct": -4.68}, {"name": "自贸区", "change_pct": -1.63}, {"name": "小米汽车", "change_pct": -2.63}, {"name": "IP经济/谷子经济", "change_pct": -1.73}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 65, "hot_rank_chg": 41, "stock_cnt": 5805, "price": "28.04", "change": "0.32", "market_id": "17", "circulate_market_value": "577674280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 66, "hot_rank_chg": -28, "stock_cnt": 5805, "price": "13.79", "change": "0.58", "market_id": "17", "circulate_market_value": "28842367000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 67, "hot_rank_chg": -7, "stock_cnt": 5805, "price": "47.65", "change": "-1.98", "market_id": "17", "circulate_market_value": "14222508000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002862", "name": "实丰文化", "hot_rank": 68, "hot_rank_chg": 176, "stock_cnt": 5805, "price": "16.92", "change": "10.01", "market_id": "33", "circulate_market_value": "2175517100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI玩具"}, {"code": "002376", "name": "新北洋", "hot_rank": 69, "hot_rank_chg": 74, "stock_cnt": 5805, "price": "7.61", "change": "0.40", "market_id": "33", "circulate_market_value": "5992605300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "彩票", "change_pct": -3.22}, {"name": "锂电池", "change_pct": -3.69}, {"name": "新零售", "change_pct": -2.35}, {"name": "人工智能", "change_pct": -3.37}, {"name": "高铁轨交", "change_pct": -2.01}, {"name": "人脸识别", "change_pct": -2.8}, {"name": "物联网", "change_pct": -3.35}, {"name": "新能源汽车", "change_pct": -3.38}, {"name": "机器人", "change_pct": -3.6}, {"name": "智慧物流", "change_pct": -2.42}, {"name": "机器视觉", "change_pct": -4.3}, {"name": "智能制造", "change_pct": -3.41}, {"name": "换电概念", "change_pct": -2.98}, {"name": "信创", "change_pct": -4.03}, {"name": "数字人民币", "change_pct": -3.23}, {"name": "盲盒", "change_pct": -3.11}, {"name": "打印机", "change_pct": -3.56}]}, {"code": "603528", "name": "多伦科技", "hot_rank": 70, "hot_rank_chg": -22, "stock_cnt": 5805, "price": "7.98", "change": "-10.03", "market_id": "17", "circulate_market_value": "5633322400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -3.06}, {"name": "国产软件", "change_pct": -3.6}, {"name": "无人驾驶", "change_pct": -3.44}, {"name": "强势人气股", "change_pct": 0.25}, {"name": "人工智能", "change_pct": -3.37}, {"name": "充电桩", "change_pct": -3.16}, {"name": "北斗导航", "change_pct": -1.27}, {"name": "智慧停车", "change_pct": -2.71}, {"name": "物联网", "change_pct": -3.35}, {"name": "教育", "change_pct": -3.16}, {"name": "智慧城市", "change_pct": -2.91}, {"name": "光伏", "change_pct": -2.3}, {"name": "新能源汽车", "change_pct": -3.38}, {"name": "机器人", "change_pct": -3.6}, {"name": "机器视觉", "change_pct": -4.3}, {"name": "智慧安防", "change_pct": -2.49}, {"name": "智能制造", "change_pct": -3.41}, {"name": "国产芯片", "change_pct": -4.46}, {"name": "华为昇腾", "change_pct": -4.13}, {"name": "职业教育", "change_pct": -2.88}, {"name": "在线教育", "change_pct": -2.86}, {"name": "华为云·鲲鹏", "change_pct": -4.04}, {"name": "华为产业链", "change_pct": -3.81}, {"name": "汽车检测", "change_pct": -3.46}]}, {"code": "003032", "name": "传智教育", "hot_rank": 71, "hot_rank_chg": 112, "stock_cnt": 5805, "price": "9.05", "change": "9.96", "market_id": "33", "circulate_market_value": "2574558600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报增长", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -2.34}, {"name": "教育", "change_pct": -3.16}, {"name": "阿里巴巴概念股", "change_pct": -3.16}, {"name": "职业教育", "change_pct": -2.88}, {"name": "在线教育", "change_pct": -2.86}, {"name": "华为鸿蒙", "change_pct": -3.67}, {"name": "华为产业链", "change_pct": -3.81}, {"name": "短剧/互动影游", "change_pct": -1.9}, {"name": "智谱AI", "change_pct": -3.58}]}, {"code": "002361", "name": "神剑股份", "hot_rank": 72, "hot_rank_chg": -17, "stock_cnt": 5805, "price": "9.70", "change": "4.75", "market_id": "33", "circulate_market_value": "9225039200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -3.05}, {"name": "大飞机", "change_pct": -0.6}, {"name": "北斗导航", "change_pct": -1.27}, {"name": "高铁轨交", "change_pct": -2.01}, {"name": "军民融合", "change_pct": -2.17}, {"name": "磁悬浮", "change_pct": -1.95}, {"name": "军工", "change_pct": -1.86}, {"name": "碳纤维", "change_pct": -2.48}, {"name": "无人机", "change_pct": -1.76}, {"name": "智能制造", "change_pct": -3.41}, {"name": "3D打印", "change_pct": -3.15}, {"name": "航天", "change_pct": -0.7}, {"name": "卫星互联网", "change_pct": -1.1}, {"name": "国资入股", "change_pct": -1.18}, {"name": "低空经济", "change_pct": -2.37}, {"name": "海洋经济", "change_pct": -1.35}]}, {"code": "688525", "name": "佰维存储", "hot_rank": 73, "hot_rank_chg": -45, "stock_cnt": 5805, "price": "138.10", "change": "-15.79", "market_id": "17", "circulate_market_value": "65682017000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 74, "hot_rank_chg": -8, "stock_cnt": 5805, "price": "12.90", "change": "4.03", "market_id": "33", "circulate_market_value": "20499662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.25}, {"name": "5G", "change_pct": -4.58}, {"name": "VR&AR", "change_pct": -4.03}, {"name": "网络安全", "change_pct": -4.21}, {"name": "军工集团", "change_pct": -0.83}, {"name": "福建自贸/海西概念", "change_pct": -1.34}, {"name": "大数据", "change_pct": -3.16}, {"name": "军工", "change_pct": -1.86}, {"name": "无人机", "change_pct": -1.76}, {"name": "信创", "change_pct": -4.03}, {"name": "航天", "change_pct": -0.7}, {"name": "国企改革", "change_pct": -1.56}, {"name": "智慧政务", "change_pct": -3.6}, {"name": "卫星互联网", "change_pct": -1.1}, {"name": "华为产业链", "change_pct": -3.81}, {"name": "自贸区", "change_pct": -1.63}, {"name": "低空经济", "change_pct": -2.37}, {"name": "军工信息化", "change_pct": -1.75}]}, {"code": "600879", "name": "航天电子", "hot_rank": 75, "hot_rank_chg": 10, "stock_cnt": 5805, "price": "13.72", "change": "6.27", "market_id": "17", "circulate_market_value": "45266387000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 76, "hot_rank_chg": 63, "stock_cnt": 5805, "price": "9.68", "change": "1.04", "market_id": "17", "circulate_market_value": "4188280900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -3.35}, {"name": "强势人气股", "change_pct": 0.25}, {"name": "光伏", "change_pct": -2.3}, {"name": "无线耳机", "change_pct": -4.54}, {"name": "华为产业链", "change_pct": -3.81}, {"name": "光伏胶膜", "change_pct": -2.13}]}, {"code": "301313", "name": "凡拓数创", "hot_rank": 77, "hot_rank_chg": -46, "stock_cnt": 5805, "price": "64.82", "change": "2.89", "market_id": "33", "circulate_market_value": "5099649700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002943", "name": "宇晶股份", "hot_rank": 78, "hot_rank_chg": 192, "stock_cnt": 5805, "price": "27.62", "change": "10.00", "market_id": "33", "circulate_market_value": "5216098300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人"}, {"code": "002202", "name": "金风科技", "hot_rank": 79, "hot_rank_chg": -23, "stock_cnt": 5805, "price": "14.90", "change": "3.62", "market_id": "33", "circulate_market_value": "50117716000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 80, "hot_rank_chg": -6, "stock_cnt": 5805, "price": "68.65", "change": "-8.04", "market_id": "33", "circulate_market_value": "44828965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603382", "name": "海阳科技", "hot_rank": 81, "hot_rank_chg": 341, "stock_cnt": 5805, "price": "19.87", "change": "10.02", "market_id": "17", "circulate_market_value": "2294704600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "尼龙6"}, {"code": "000725", "name": "京东方A", "hot_rank": 82, "hot_rank_chg": -11, "stock_cnt": 5805, "price": "4.63", "change": "-4.14", "market_id": "33", "circulate_market_value": "163749830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -5.14}, {"name": "手机产业链", "change_pct": -4.82}, {"name": "超高清视频", "change_pct": -3.49}, {"name": "苹果产业链", "change_pct": -4.86}, {"name": "电竞", "change_pct": -1.58}, {"name": "半导体", "change_pct": -5.06}, {"name": "人工智能", "change_pct": -3.37}, {"name": "互联网医疗", "change_pct": -1.9}, {"name": "VR&AR", "change_pct": -4.03}, {"name": "OLED", "change_pct": -4.73}, {"name": "京津冀", "change_pct": -2.45}, {"name": "物联网", "change_pct": -3.35}, {"name": "指纹识别", "change_pct": -5.38}, {"name": "汽车零部件", "change_pct": -3.61}, {"name": "白马股", "change_pct": -0.06}, {"name": "智能制造", "change_pct": -3.41}, {"name": "小米概念股", "change_pct": -4.47}, {"name": "国产芯片", "change_pct": -4.46}, {"name": "液晶面板/LCD", "change_pct": -4.37}, {"name": "全息概念", "change_pct": -2.57}, {"name": "理想汽车概念股", "change_pct": -4.1}, {"name": "MicroLED", "change_pct": -5.11}, {"name": "钙钛矿电池", "change_pct": -1.83}, {"name": "智能手表", "change_pct": -4.61}, {"name": "MiniLED", "change_pct": -4.68}, {"name": "传感器", "change_pct": -3.94}, {"name": "大硅片", "change_pct": -5.62}, {"name": "AI PC", "change_pct": -5.46}, {"name": "华为产业链", "change_pct": -3.81}, {"name": "回购", "change_pct": -2.51}, {"name": "光电共封装CPO", "change_pct": -8.23}, {"name": "智能眼镜/MR头显", "change_pct": -4.59}, {"name": "玻璃基板封装", "change_pct": -5.89}]}, {"code": "600584", "name": "长电科技", "hot_rank": 83, "hot_rank_chg": -29, "stock_cnt": 5805, "price": "51.87", "change": "-6.39", "market_id": "17", "circulate_market_value": "92816934000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 84, "hot_rank_chg": -4, "stock_cnt": 5805, "price": "18.45", "change": "-10.00", "market_id": "33", "circulate_market_value": "4554127900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002300", "name": "太阳电缆", "hot_rank": 85, "hot_rank_chg": 57, "stock_cnt": 5805, "price": "7.92", "change": "4.49", "market_id": "33", "circulate_market_value": "5720551100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": -1.77}, {"name": "充电桩", "change_pct": -3.16}, {"name": "福建自贸/海西概念", "change_pct": -1.34}, {"name": "军民融合", "change_pct": -2.17}, {"name": "光伏", "change_pct": -2.3}, {"name": "风电", "change_pct": -1.45}, {"name": "军工", "change_pct": -1.86}, {"name": "新能源汽车", "change_pct": -3.38}, {"name": "特高压", "change_pct": -2.44}, {"name": "自贸区", "change_pct": -1.63}, {"name": "海洋经济", "change_pct": -1.35}]}, {"code": "002487", "name": "大金重工", "hot_rank": 86, "hot_rank_chg": -22, "stock_cnt": 5805, "price": "32.54", "change": "4.90", "market_id": "33", "circulate_market_value": "20530145000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300006", "name": "莱美药业", "hot_rank": 87, "hot_rank_chg": -48, "stock_cnt": 5805, "price": "10.48", "change": "5.64", "market_id": "33", "circulate_market_value": "11065003000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -1.82}, {"name": "医疗器械", "change_pct": -1.93}, {"name": "医药", "change_pct": -1.79}, {"name": "疫苗", "change_pct": -2.8}, {"name": "化学原料药", "change_pct": -1.89}, {"name": "肝炎概念", "change_pct": -2.01}, {"name": "干细胞", "change_pct": -1.17}, {"name": "眼科", "change_pct": -1.47}, {"name": "肿瘤疫苗", "change_pct": -2.5}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 88, "hot_rank_chg": -55, "stock_cnt": 5805, "price": "11.50", "change": "3.32", "market_id": "17", "circulate_market_value": "14769204000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "智能制造", "change_pct": -3.41}, {"name": "工业互联网", "change_pct": -3.32}, {"name": "培育钻石", "change_pct": -2.32}, {"name": "金刚线", "change_pct": -1.67}, {"name": "国资入股", "change_pct": -1.18}, {"name": "深地经济", "change_pct": -2.61}]}, {"code": "002421", "name": "达实智能", "hot_rank": 89, "hot_rank_chg": 21, "stock_cnt": 5805, "price": "3.37", "change": "3.37", "market_id": "33", "circulate_market_value": "6861991100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -3.72}, {"name": "数字孪生", "change_pct": -2.08}, {"name": "深圳本地股", "change_pct": -3.68}, {"name": "人工智能", "change_pct": -3.37}, {"name": "互联网医疗", "change_pct": -1.9}, {"name": "云计算数据中心", "change_pct": -4.26}, {"name": "高铁轨交", "change_pct": -2.01}, {"name": "人脸识别", "change_pct": -2.8}, {"name": "智慧停车", "change_pct": -2.71}, {"name": "物联网", "change_pct": -3.35}, {"name": "大数据", "change_pct": -3.16}, {"name": "智慧城市", "change_pct": -2.91}, {"name": "雄安新区", "change_pct": -2.19}, {"name": "机器人", "change_pct": -3.6}, {"name": "数字经济", "change_pct": -3.12}, {"name": "阿里巴巴概念股", "change_pct": -3.16}, {"name": "腾讯概念股", "change_pct": -3.19}, {"name": "建筑节能", "change_pct": -1.96}, {"name": "旧改", "change_pct": -2.26}, {"name": "医疗信息化", "change_pct": -2.8}, {"name": "新冠病毒防治", "change_pct": -2.04}, {"name": "华为产业链", "change_pct": -3.81}, {"name": "AI大模型/智能体", "change_pct": -3.34}, {"name": "医疗耗材供应链SPD", "change_pct": -1.34}, {"name": "液冷服务器", "change_pct": -4.07}, {"name": "区块链", "change_pct": -2.57}]}, {"code": "603259", "name": "药明康德", "hot_rank": 90, "hot_rank_chg": -7, "stock_cnt": 5805, "price": "142.89", "change": "0.34", "market_id": "17", "circulate_market_value": "353407010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 91, "hot_rank_chg": -19, "stock_cnt": 5805, "price": "94.12", "change": "-8.17", "market_id": "17", "circulate_market_value": "226993800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600428", "name": "中远海特", "hot_rank": 92, "hot_rank_chg": 183, "stock_cnt": 5805, "price": "11.39", "change": "10.05", "market_id": "17", "circulate_market_value": "31253253000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报增长", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.25}, {"name": "一带一路", "change_pct": -1.62}, {"name": "航运", "change_pct": -0.2}, {"name": "粤港澳大湾区", "change_pct": -1.97}, {"name": "国企改革", "change_pct": -1.56}, {"name": "回购增持再贷款", "change_pct": 0.18}, {"name": "海洋经济", "change_pct": -1.35}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 93, "hot_rank_chg": 27, "stock_cnt": 5805, "price": "67.21", "change": "-1.50", "market_id": "33", "circulate_market_value": "106693164000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 94, "hot_rank_chg": -15, "stock_cnt": 5805, "price": "147.37", "change": "-10.00", "market_id": "17", "circulate_market_value": "23106219000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 95, "hot_rank_chg": -30, "stock_cnt": 5805, "price": "6.74", "change": "0.60", "market_id": "33", "circulate_market_value": "12907723100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -1.34}, {"name": "林业", "change_pct": -0.23}, {"name": "碳中和", "change_pct": -1.38}, {"name": "自贸区", "change_pct": -1.63}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 96, "hot_rank_chg": -7, "stock_cnt": 5805, "price": "17.11", "change": "-8.40", "market_id": "17", "circulate_market_value": "3613002000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 97, "hot_rank_chg": 0, "stock_cnt": 5805, "price": "913.00", "change": "-4.70", "market_id": "17", "circulate_market_value": "574143710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 98, "hot_rank_chg": -39, "stock_cnt": 5805, "price": "28.40", "change": "-5.77", "market_id": "33", "circulate_market_value": "22275425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603006", "name": "联明股份", "hot_rank": 99, "hot_rank_chg": 210, "stock_cnt": 5805, "price": "11.81", "change": "9.96", "market_id": "17", "circulate_market_value": "3002742700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "三季报增长", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.25}, {"name": "冷链", "change_pct": -1.93}, {"name": "汽车零部件", "change_pct": -3.61}, {"name": "新能源汽车", "change_pct": -3.38}, {"name": "新能源车零部件", "change_pct": -3.62}]}, {"code": "002594", "name": "比亚迪", "hot_rank": 100, "hot_rank_chg": 88, "stock_cnt": 5805, "price": "82.50", "change": "-0.29", "market_id": "33", "circulate_market_value": "287683170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002172", "name": "澳洋健康", "price": 5.37, "change_pct": 10.04, "reason": "公司计划以全资子公司澳洋老年病医院为业务主体，拟投资3500万元开展张家港澳洋老年病医院项目，以二级老年病专科医院为设计标准，计划核定床位约105张", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 18.6, "first_limit_up": 1793237448, "break_limit_up_times": 5}, {"code": "605338", "name": "巴比食品", "price": 18.98, "change_pct": 10.03, "reason": "公司为国内中式面点速冻食品龙头，第三季度净利润同比增长10.51%", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.16, "first_limit_up": 1793239161, "break_limit_up_times": 0}, {"code": "600118", "name": "中国卫星", "price": 55.9, "change_pct": 10.0, "reason": "国内卫星制造龙头，北斗主要提供商之一，主营小卫星 / 微小卫星研制、宇航部组件配套、卫星通导遥终端及地面应用系统集成，提供卫星运营服务与天地一体信息解决方案", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 4.84, "first_limit_up": 1793240698, "break_limit_up_times": 16}, {"code": "003032", "name": "传智教育", "price": 9.05, "change_pct": 9.96, "reason": "公司近日正式发布“AI具身智能机器人开发”新学科，首期班将于今年10月正式开班，课程覆盖工业机械臂、四足巡检机器人、人形服务机器人三类设备，并对接智元、宇树等头部厂商方案；第三季度净利润增幅达3403.46%", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 8.52, "first_limit_up": 1793237523, "break_limit_up_times": 0}, {"code": "000701", "name": "厦门信达", "price": 5.62, "change_pct": 9.98, "reason": "公司是福建省最具影响力的汽车经销商集团之一，第三季度扣非净利润同比增长498.3%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 8.67, "first_limit_up": 1793238027, "break_limit_up_times": 1}, {"code": "002862", "name": "实丰文化", "price": 16.92, "change_pct": 10.01, "reason": "公司表示将根据疯狂动物城IP的独特属性、目标受众需求及市场趋势，开发合适的IP潮流产品", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 1.67, "first_limit_up": 1793237100, "break_limit_up_times": 0}, {"code": "603703", "name": "盛洋科技", "price": 10.86, "change_pct": 10.03, "reason": "公司是DVB-NIP软硬件唯一提供商，软件已获欧洲某头部卫星运营商认可", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 8.26, "first_limit_up": 1793239530, "break_limit_up_times": 0}, {"code": "002526", "name": "山东矿机", "price": 3.28, "change_pct": 10.07, "reason": "1、公司目前构建了“煤机整机+核心配件+智能输送+智能控制”业务格局，第三季度净利润同比增长55.05%；\n2、公司智能焊接机器人主要用于替代人工，对结构件等部件进行焊接作业", "plates": ["业绩增长", "机器人"], "limit_up_days": 2, "turnover_ratio": 2.51, "first_limit_up": 1793237100, "break_limit_up_times": 0}, {"code": "002865", "name": "钧达股份", "price": 38.62, "change_pct": 10.0, "reason": "公司与尚翼光电达成战略合作，双方将围绕钙钛矿电池技术在太空能源的应用展开合作", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 12.87, "first_limit_up": 1793239110, "break_limit_up_times": 1}, {"code": "001219", "name": "青岛食品", "price": 18.13, "change_pct": 10.01, "reason": "公司主要从事饼干与花生酱等休闲食品的研产销，控股股东拟转让所持29.24%股权，实控人或变更为青岛市国资委", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 1.57, "first_limit_up": 1793237100, "break_limit_up_times": 0}, {"code": "002149", "name": "西部材料", "price": 32.31, "change_pct": 10.01, "reason": "公司生产航空发动机用材料，子公司天力公司生产卫星过渡接头及航空用材料，超级牛散章建平新进成为公司第四大流通股东", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 12.07, "first_limit_up": 1793242452, "break_limit_up_times": 1}, {"code": "002531", "name": "天顺风能", "price": 7.06, "change_pct": 9.97, "reason": "1、全球最具规模的风力发电塔架制造商之一,第三季度净利润同比增长455.45%；\n2、公司复材事业部中标中国船舶科学研究中心目标无人地效翼船结构建造及总装联调项目", "plates": ["业绩增长", "风电"], "limit_up_days": 1, "turnover_ratio": 7.86, "first_limit_up": 1793242764, "break_limit_up_times": 3}, {"code": "601188", "name": "龙江交通", "price": 3.5, "change_pct": 10.06, "reason": "公司所辖哈大分公司圆满完成冰雪旅游季等关键时期保畅任务", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 14.3, "first_limit_up": 1793237499, "break_limit_up_times": 2}, {"code": "002277", "name": "友阿股份", "price": 5.53, "change_pct": 9.94, "reason": "公司正全力推进收购深圳尚阳通100%股权，交易完成后将形成“百货零售+半导体”双主业格局，标的已量产车规级SiC功率器件", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.41, "first_limit_up": 1793237454, "break_limit_up_times": 3}, {"code": "002275", "name": "桂林三金", "price": 13.62, "change_pct": 10.02, "reason": "公司拥有国家中药保护品种21种，核心产品三金片、西瓜霜等产品为全国知名品牌，作用有清热泻火，消肿止痛、治疗咽炎等；第三季度净利润同比增长15.52%", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.09, "first_limit_up": 1793238297, "break_limit_up_times": 2}, {"code": "001225", "name": "和泰机电", "price": 32.92, "change_pct": 9.99, "reason": "公司通过持续实施自动化、智能化改造，更新迭代生产设备，在物料输送设备制造领域的生产工艺已相对成熟，应用了机器人自动焊接技术，机器人视觉识别自动上下料、自动装箱等技术", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.99, "first_limit_up": 1793238309, "break_limit_up_times": 10}, {"code": "002708", "name": "光洋股份", "price": 20.83, "change_pct": 9.98, "reason": "1、公司拟10亿建设新能源汽车及机器人用精密零部件项目；\n2、公司已获得小鹏飞行汽车X3项目定点，完成A样交样", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 27.9, "first_limit_up": 1793237100, "break_limit_up_times": 30}, {"code": "605179", "name": "一鸣食品", "price": 23.77, "change_pct": 10.0, "reason": "国内鲜乳烘焙知名企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.72, "first_limit_up": 1793239957, "break_limit_up_times": 2}, {"code": "603103", "name": "横店影视", "price": 17.44, "change_pct": 10.03, "reason": "公司已建立专门团队负责短剧、微短剧业务，围绕短剧精品化开展布局，依托影视投资制作发行与放映体系切入短剧内容领域", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 2.01, "first_limit_up": 1793238378, "break_limit_up_times": 1}, {"code": "600501", "name": "航天晨光", "price": 16.89, "change_pct": 10.03, "reason": "公司与国内多家发射场有业务往来，可为航天地面发射场加注供气系统配套高压储气罐等产品", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 8.07, "first_limit_up": 1793240751, "break_limit_up_times": 2}, {"code": "301079", "name": "邵阳液压", "price": 34, "change_pct": 20.01, "reason": "公司主营液压柱塞泵、液压缸、液压系统等，产品可以用于航空航天领域，西昌卫星发射中心、福建航空装备维修中心都是公司近年来的重要客户", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 19.66, "first_limit_up": 1793239125, "break_limit_up_times": 0}, {"code": "600715", "name": "文投控股", "price": 2.27, "change_pct": 10.19, "reason": "公司影院业务推行“一店一策”创新和“影院+”业态，探索VR观影提升非票房收入，五棵松旗舰店为全国单店票房冠军", "plates": ["短剧/互动影游"], "limit_up_days": 3, "turnover_ratio": 17.97, "first_limit_up": 1793237411, "break_limit_up_times": 6}, {"code": "601956", "name": "东贝集团", "price": 6.7, "change_pct": 10.02, "reason": "公司在洗衣机电机、空调电机、机器人关节电机等领域均有相关技术研发储备，人形机器人关节电机目前还处于研发测试阶段", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 2.53, "first_limit_up": 1793237100, "break_limit_up_times": 0}, {"code": "600592", "name": "龙溪股份", "price": 17.41, "change_pct": 9.98, "reason": "关节轴承行业龙头，广泛应用于航空军工等领域，也是机器人的主要配套件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.58, "first_limit_up": 1793237416, "break_limit_up_times": 0}, {"code": "600643", "name": "爱建集团", "price": 4.25, "change_pct": 10.1, "reason": "民营综合性金融公司，拥有爱建证券、爱建信托、爱建资管、爱建租赁等金融业务，第三季度净利润同比增长624.36%", "plates": ["业绩增长", "大金融"], "limit_up_days": 1, "turnover_ratio": 4.11, "first_limit_up": 1793237401, "break_limit_up_times": 11}, {"code": "600261", "name": "阳光照明", "price": 3.72, "change_pct": 10.06, "reason": "中国最大的节能灯生产和出口基地之一；公司使用自有资金 3,000万元参与蓝星光域（上海）航天科技有限公司融资，完成后阳光照明持有其1.0989%股权。蓝星光域成立于2021年 5月，专注于全场景激光通信解决方案，核心产品包括星载同轨/异轨激光通信终端、机载平流层激光通信终端等，主要应用于卫星间、星地间高速率通信，业务覆盖空天地海全场景空域", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 5.68, "first_limit_up": 1793237543, "break_limit_up_times": 2}, {"code": "000530", "name": "冰山冷热", "price": 8.23, "change_pct": 10.03, "reason": "1、冷热产业链综合方案服务提供商；掌握全球先进的二氧化碳跨临界冷热“五合一”零碳技术，为北京冬奥会多个比赛及配套冰场、哈尔滨亚冬会三个冰上场馆提供制冷设备；\n2、公司主要研究数据中心液冷的冷源部分，着重研发干冷器、氟泵系统、冷水系统，部分产品已实现小批量交付", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 37.92, "first_limit_up": 1793241411, "break_limit_up_times": 3}, {"code": "603536", "name": "惠发食品", "price": 10.44, "change_pct": 10.01, "reason": "公司主要从事速冻类预制菜的丸类制品、肠类制品、油炸类制品、串类制品、菜肴制品等速冻食品的研发、生产和销售以及供应链业务的推广运营", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.75, "first_limit_up": 1793239245, "break_limit_up_times": 1}, {"code": "002679", "name": "福建金森", "price": 10.65, "change_pct": 10.02, "reason": "福建将乐县财政局旗下；公司主营森林经营和管护、造林更新、木材产销，为南方集体林区FSC认证用材林蓄积量最大的国有控股企业，第三季度净利润同比增长693%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.18, "first_limit_up": 1793239887, "break_limit_up_times": 0}, {"code": "002565", "name": "顺灏股份", "price": 8.14, "change_pct": 10.0, "reason": "公司参股北京轨道辰光布局太空算力，其第一代试验星“辰光一号”正在开展在轨测试", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 11.48, "first_limit_up": 1793238666, "break_limit_up_times": 1}, {"code": "600428", "name": "中远海特", "price": 11.39, "change_pct": 10.05, "reason": "公司主营远洋及沿海货物运输，前三季度净利润同比增长96.91%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.36, "first_limit_up": 1793237424, "break_limit_up_times": 2}, {"code": "600997", "name": "开滦股份", "price": 5.39, "change_pct": 10.0, "reason": "唐山煤炭龙头企业，第三季度净利润同比增长190.29%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.94, "first_limit_up": 1793238062, "break_limit_up_times": 3}, {"code": "600576", "name": "祥源文旅", "price": 5.38, "change_pct": 10.02, "reason": "公司主营业务包括旅游业务、动漫衍生、动画影视等，旗下湖南莽山五指峰景区包含冰雪相关业务", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 3.92, "first_limit_up": 1793242317, "break_limit_up_times": 0}, {"code": "002943", "name": "宇晶股份", "price": 27.62, "change_pct": 10.0, "reason": "1、公司于2026年1月设立控股子公司，与知名高校团队合作研发机器人灵巧手、视触觉传感器等产品；\n2、公司6-8英寸碳化硅切磨抛设备已批量销售，系碳化硅衬底加工核心供应商，并推进12英寸硅片切割设备研发", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 18.05, "first_limit_up": 1793250009, "break_limit_up_times": 2}, {"code": "603006", "name": "联明股份", "price": 11.81, "change_pct": 9.96, "reason": "公司通过尚成一号产业基金(持股0.71%)间接投资逐际动力，后者为具身智能机器人初创公司，战略投资者包括阿里巴巴；第三季度净利润同比增长97.50%", "plates": ["机器人", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 2.42, "first_limit_up": 1793237405, "break_limit_up_times": 0}, {"code": "605598", "name": "上海港湾", "price": 24.9, "change_pct": 9.98, "reason": "天基基础设施能源分系统核心供应商", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 2.37, "first_limit_up": 1793239377, "break_limit_up_times": 0}, {"code": "603131", "name": "上海沪工", "price": 15.95, "change_pct": 10.0, "reason": "1、公司的航天业务板块由两部分构成，华宇科技为航天装备制造平台、沪航卫星科技为卫星业务平台；前三季度业绩同比扭亏：\n2、公司具备专业的商业卫星AIT生产能力，可同时在线装配多颗50KG以下的商业卫星；一季度净利润同比增长39.52%", "plates": ["航天", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 11.12, "first_limit_up": 1793238629, "break_limit_up_times": 0}, {"code": "603382", "name": "海阳科技", "price": 19.87, "change_pct": 10.02, "reason": "国内尼龙6系列主要生产企业之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 11.26, "first_limit_up": 1793239203, "break_limit_up_times": 2}, {"code": "002086", "name": "东方海洋", "price": 2.57, "change_pct": 9.83, "reason": "公司主要从事海水苗种繁育、养殖，水产品加工等，水产品加工主要包括调理食品系列、冷冻鱼片系列、海参系列加工产品等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 21.83, "first_limit_up": 1793253216, "break_limit_up_times": 0}];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};