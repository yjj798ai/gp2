const UPDATE_TIME = "2026-11-10 05:43";
const THS_HOT = [
  {
    "name": "人形机器人",
    "rise": 3.38,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": 2.17,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续255天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "短剧游戏",
    "rise": 4.14,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "冰雪产业",
    "rise": 1.24,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 3.15,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续326天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI视频",
    "rise": 4.4,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "PCB概念",
    "rise": 2.99,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续149天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "机器人概念",
    "rise": 2.66,
    "rate": 0,
    "tag": "30家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "创新药",
    "rise": 0.71,
    "rate": 0,
    "tag": "",
    "hotTag": "连续156天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": 2.51,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续84天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "光伏概念",
    "rise": 1.79,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "存储芯片",
    "rise": 2.69,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续279天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "减速器",
    "rise": 3.15,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "人工智能",
    "rise": 2.38,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "连续33天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "芯片概念",
    "rise": 2.7,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续36天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "算力租赁",
    "rise": 2.35,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "AI眼镜",
    "rise": 4.2,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "首次上榜",
    "rankChg": 6,
    "etfName": "消费电子ETF",
    "code": "886085"
  },
  {
    "name": "文化传媒概念",
    "rise": 3.38,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": -1,
    "etfName": "传媒ETF",
    "code": "885418"
  },
  {
    "name": "猪肉",
    "rise": 0.13,
    "rate": 0,
    "tag": "",
    "hotTag": "连续19天上榜",
    "rankChg": -1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "CRO概念",
    "rise": 1.24,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "生物科技ETF",
    "code": "885927"
  }
];
const THS_EVENTS = [
  {
    "title": "物理AI加速落地 苹果披露机器人“大脑”HALO进展 关注减速器、伺服等零部件",
    "desc": "",
    "heat": 586852,
    "direction": "物理AI",
    "themes": [
      "仿真训练",
      "多模态感知硬件",
      "算力底座",
      "物理AI",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "杭州柯林",
        "code": "688611",
        "chg": 20.006072
      }
    ]
  },
  {
    "title": "包揽海外下载榜前三 “duanju”成热词 AI重塑短剧出海赛道",
    "desc": "",
    "heat": 571679,
    "direction": "AI短剧",
    "themes": [
      "AI漫剧",
      "红果短剧",
      "短剧游戏",
      "AI视频",
      "影视院线"
    ],
    "stocks": [
      {
        "name": "华策影视",
        "code": "300133",
        "chg": 17.731959
      }
    ]
  },
  {
    "title": "北京支持超节点服务器、AI终端等新技术新产品！",
    "desc": "",
    "heat": 544760,
    "direction": "端侧AI",
    "themes": [
      "端侧AI",
      "智能音箱",
      "消费电子",
      "AI眼镜",
      "智能穿戴"
    ],
    "stocks": [
      {
        "name": "富瀚微",
        "code": "300613",
        "chg": 20.005999
      }
    ]
  },
  {
    "title": "谷歌TPU一年扩容至四款，剑指英伟达！机构预计2028年相关销售额将突破1350亿美元",
    "desc": "",
    "heat": 397262,
    "direction": "芯片半导体",
    "themes": [
      "芯片概念",
      "半导体",
      "EDA"
    ],
    "stocks": [
      {
        "name": "杭州柯林",
        "code": "688611",
        "chg": 20.006072
      }
    ]
  },
  {
    "title": "面向太空算力网，“星云星座计划”发布",
    "desc": "",
    "heat": 384121,
    "direction": "太空算力",
    "themes": [
      "太空算力",
      "太空光伏"
    ],
    "stocks": [
      {
        "name": "上海港湾",
        "code": "605598",
        "chg": 10.003908
      }
    ]
  },
  {
    "title": "李强签署国务院令公布《中医药传统知识保护条例》",
    "desc": "",
    "heat": 171946,
    "direction": "中医药",
    "themes": [
      "中药",
      "中药材种植"
    ],
    "stocks": [
      {
        "name": "*ST香雪",
        "code": "300147",
        "chg": 13.255361
      }
    ]
  },
  {
    "title": "机构：美国中期选举结果落地之后，一定程度缓解贵金属的压力",
    "desc": "",
    "heat": 107221,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "黄金概念",
      "白银"
    ],
    "stocks": [
      {
        "name": "南矿集团",
        "code": "001360",
        "chg": 5.763074
      }
    ]
  },
  {
    "title": "特朗普称将与中俄元首在APEC讨论美伊冲突及无核化问题，外交部回应",
    "desc": "",
    "heat": 33570,
    "direction": "美伊战争/战后重建",
    "themes": [
      "战后重建",
      "白银",
      "黄金概念",
      "航运概念"
    ],
    "stocks": [
      {
        "name": "南矿集团",
        "code": "001360",
        "chg": 5.763074
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "动漫",
    "change": "+6.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+5.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+5.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+4.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能音箱",
    "change": "+4.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+4.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子后视镜",
    "change": "+4.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能手表",
    "change": "+4.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+4.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "WiFi",
    "change": "+4.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+4.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能眼镜/MR头显",
    "change": "+4.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "星闪概念",
    "change": "+4.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "线控底盘",
    "change": "+4.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "广电",
    "change": "+4.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "VR&AR",
    "change": "+4.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "苹果产业链",
    "change": "+4.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车黑匣子EDR",
    "change": "+4.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "云游戏",
    "change": "+4.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "+4.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 1,
    "hot_rank_chg": 12,
    "stock_cnt": 5788,
    "price": "10.53",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "6319229100.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "5",
    "change_reason": "冰雪工程",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 2.46
      },
      {
        "name": "边缘计算",
        "change_pct": 3.58
      },
      {
        "name": "核电",
        "change_pct": 1.3
      },
      {
        "name": "海工装备",
        "change_pct": 0.66
      },
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.63
      },
      {
        "name": "冷链",
        "change_pct": 1.45
      },
      {
        "name": "地热",
        "change_pct": 1.45
      },
      {
        "name": "储能",
        "change_pct": 1.33
      },
      {
        "name": "碳中和",
        "change_pct": 0.61
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 1.36
      },
      {
        "name": "汽车热管理",
        "change_pct": 2.42
      },
      {
        "name": "热泵",
        "change_pct": 2.34
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.94
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 2.36
      },
      {
        "name": "海洋经济",
        "change_pct": 1.62
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 2,
    "hot_rank_chg": -1,
    "stock_cnt": 5788,
    "price": "4.58",
    "change": "4.58",
    "market_id": "33",
    "circulate_market_value": "7225038700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 1.69
      },
      {
        "name": "体外诊断",
        "change_pct": 1.14
      },
      {
        "name": "医疗器械",
        "change_pct": 1.12
      },
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "基因测序",
        "change_pct": 1.39
      },
      {
        "name": "预制菜",
        "change_pct": 0.8
      },
      {
        "name": "水产养殖",
        "change_pct": 2.07
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.17
      },
      {
        "name": "海洋经济",
        "change_pct": 1.62
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 3,
    "hot_rank_chg": 1,
    "stock_cnt": 5788,
    "price": "5.85",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "7810059900.00",
    "change_type": "1",
    "change_section": "14",
    "change_days": "8",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "LED",
        "change_pct": 3.42
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.3
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 4,
    "hot_rank_chg": 1,
    "stock_cnt": 5788,
    "price": "10.88",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "8845963300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "“东方系”",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "光伏",
        "change_pct": 1.27
      },
      {
        "name": "家电",
        "change_pct": 2.49
      },
      {
        "name": "储能",
        "change_pct": 1.33
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 2.34
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 3.03
      },
      {
        "name": "厨卫家电",
        "change_pct": 1.63
      },
      {
        "name": "华为产业链",
        "change_pct": 2.75
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 7,
    "hot_rank_chg": 37,
    "stock_cnt": 5788,
    "price": "4.42",
    "change": "5.49",
    "market_id": "17",
    "circulate_market_value": "5770177000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "高速公路",
        "change_pct": -0.23
      },
      {
        "name": "振兴东北",
        "change_pct": 0.97
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 8,
    "hot_rank_chg": 12,
    "stock_cnt": 5788,
    "price": "5.94",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5255590300.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "4",
    "change_reason": "“东方系”",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.35
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.33
      },
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "信托",
        "change_pct": -0.42
      },
      {
        "name": "民营医院",
        "change_pct": 1.02
      },
      {
        "name": "社区团购",
        "change_pct": 1.13
      },
      {
        "name": "大金融",
        "change_pct": 0.21
      },
      {
        "name": "餐饮",
        "change_pct": 0.58
      },
      {
        "name": "首发经济",
        "change_pct": 1.64
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 9,
    "hot_rank_chg": 24,
    "stock_cnt": 5788,
    "price": "10.97",
    "change": "4.17",
    "market_id": "33",
    "circulate_market_value": "11638307800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 1.41
      },
      {
        "name": "电子烟",
        "change_pct": 3.39
      },
      {
        "name": "一带一路",
        "change_pct": 0.88
      },
      {
        "name": "造纸",
        "change_pct": 1.66
      },
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "包装印刷",
        "change_pct": 2.11
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.3
      },
      {
        "name": "太空算力",
        "change_pct": 2.93
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 12,
    "hot_rank_chg": 22,
    "stock_cnt": 5788,
    "price": "2.85",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "8157760900.00",
    "change_type": "1",
    "change_section": "15",
    "change_days": "8",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 3.58
      },
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "游戏",
        "change_pct": 4.07
      },
      {
        "name": "影视",
        "change_pct": 5.37
      },
      {
        "name": "低价股",
        "change_pct": 1.02
      },
      {
        "name": "国企改革",
        "change_pct": 0.6
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.73
      },
      {
        "name": "AI视频",
        "change_pct": 3.97
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 13,
    "hot_rank_chg": 5,
    "stock_cnt": 5788,
    "price": "5.89",
    "change": "6.71",
    "market_id": "33",
    "circulate_market_value": "5063635900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 1.32
      },
      {
        "name": "一带一路",
        "change_pct": 0.88
      },
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.94
      },
      {
        "name": "光伏",
        "change_pct": 1.27
      },
      {
        "name": "有色金属",
        "change_pct": 1.4
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.91
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.57
      },
      {
        "name": "自贸区",
        "change_pct": 1.07
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.94
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 14,
    "hot_rank_chg": 5,
    "stock_cnt": 5788,
    "price": "2.81",
    "change": "10.20",
    "market_id": "33",
    "circulate_market_value": "12361216600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "签下算力大单",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 2.65
      },
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "京津冀",
        "change_pct": 1.01
      },
      {
        "name": "旅游",
        "change_pct": 0.27
      },
      {
        "name": "园林",
        "change_pct": 2.25
      },
      {
        "name": "海绵城市",
        "change_pct": 1.48
      },
      {
        "name": "固废处理",
        "change_pct": 0.99
      },
      {
        "name": "雄安新区",
        "change_pct": 1.23
      },
      {
        "name": "北京城市规划",
        "change_pct": 1.38
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": 1.34
      },
      {
        "name": "碳中和",
        "change_pct": 0.61
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.24
      },
      {
        "name": "汽车拆解",
        "change_pct": 1.82
      },
      {
        "name": "土壤修复",
        "change_pct": 1.21
      },
      {
        "name": "核污染防治",
        "change_pct": 1.61
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.33
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.63
      },
      {
        "name": "低价股",
        "change_pct": 1.02
      },
      {
        "name": "西部大开发",
        "change_pct": -0.25
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 15,
    "hot_rank_chg": -7,
    "stock_cnt": 5788,
    "price": "5.49",
    "change": "2.04",
    "market_id": "17",
    "circulate_market_value": "6371378100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "纺织服装",
        "change_pct": 1.7
      },
      {
        "name": "浙江国企改革",
        "change_pct": 1.3
      },
      {
        "name": "影视",
        "change_pct": 5.37
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 0.6
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.73
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 19,
    "hot_rank_chg": 55,
    "stock_cnt": 5788,
    "price": "9.33",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4419437100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "微短剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 3.58
      },
      {
        "name": "强势人气股",
        "change_pct": 3.8
      },
      {
        "name": "VR&AR",
        "change_pct": 4.22
      },
      {
        "name": "游戏",
        "change_pct": 4.07
      },
      {
        "name": "影视",
        "change_pct": 5.37
      },
      {
        "name": "直播/短视频",
        "change_pct": 4.4
      },
      {
        "name": "动漫",
        "change_pct": 6.05
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.99
      },
      {
        "name": "传媒",
        "change_pct": 3.46
      },
      {
        "name": "元宇宙",
        "change_pct": 3.63
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.73
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.78
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 30,
    "hot_rank_chg": 2,
    "stock_cnt": 5788,
    "price": "11.00",
    "change": "0.92",
    "market_id": "17",
    "circulate_market_value": "7059615400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 1.57
      },
      {
        "name": "农业种植",
        "change_pct": 0.27
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.97
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.24
      },
      {
        "name": "休闲食品",
        "change_pct": 0.73
      },
      {
        "name": "食品",
        "change_pct": 0.8
      },
      {
        "name": "食品安全",
        "change_pct": 1.58
      },
      {
        "name": "社区团购",
        "change_pct": 1.13
      },
      {
        "name": "大农业",
        "change_pct": 0.74
      },
      {
        "name": "预制菜",
        "change_pct": 0.8
      },
      {
        "name": "人造肉",
        "change_pct": 1.02
      },
      {
        "name": "国企改革",
        "change_pct": 0.6
      }
    ]
  },
  {
    "code": "300118",
    "name": "东方日升",
    "hot_rank": 32,
    "hot_rank_chg": -23,
    "stock_cnt": 5788,
    "price": "11.09",
    "change": "2.21",
    "market_id": "33",
    "circulate_market_value": "10275102100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": 2.6
      },
      {
        "name": "光伏",
        "change_pct": 1.27
      },
      {
        "name": "储能",
        "change_pct": 1.33
      },
      {
        "name": "BIPV概念",
        "change_pct": 1.25
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.9
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 1.43
      },
      {
        "name": "光伏胶膜",
        "change_pct": 1.07
      }
    ]
  },
  {
    "code": "300133",
    "name": "华策影视",
    "hot_rank": 34,
    "hot_rank_chg": 149,
    "stock_cnt": 5788,
    "price": "11.36",
    "change": "17.11",
    "market_id": "33",
    "circulate_market_value": "18903044000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "VR&AR",
        "change_pct": 4.22
      },
      {
        "name": "影视",
        "change_pct": 5.29
      },
      {
        "name": "大数据",
        "change_pct": 2.4
      },
      {
        "name": "教育",
        "change_pct": 2.74
      },
      {
        "name": "动漫",
        "change_pct": 5.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "知识产权",
        "change_pct": 3.48
      },
      {
        "name": "百度概念股",
        "change_pct": 3.23
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.0
      },
      {
        "name": "NFT",
        "change_pct": 3.75
      },
      {
        "name": "元宇宙",
        "change_pct": 3.63
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.79
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.14
      },
      {
        "name": "网红/MCN",
        "change_pct": 3.06
      },
      {
        "name": "华为产业链",
        "change_pct": 2.79
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.29
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.4
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.73
      },
      {
        "name": "多模态",
        "change_pct": 3.67
      },
      {
        "name": "AI视频",
        "change_pct": 3.97
      },
      {
        "name": "Kimi概念",
        "change_pct": 4.34
      },
      {
        "name": "智谱AI",
        "change_pct": 3.41
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.78
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 40,
    "hot_rank_chg": 77,
    "stock_cnt": 5788,
    "price": "11.54",
    "change": "3.96",
    "market_id": "17",
    "circulate_market_value": "4788893700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 2.61
      },
      {
        "name": "5G",
        "change_pct": 2.78
      },
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.69
      },
      {
        "name": "LED",
        "change_pct": 3.52
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.3
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": 3.34
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 42,
    "hot_rank_chg": 27,
    "stock_cnt": 5788,
    "price": "8.52",
    "change": "5.32",
    "market_id": "33",
    "circulate_market_value": "13861987000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.74
      },
      {
        "name": "电竞",
        "change_pct": 2.97
      },
      {
        "name": "手游",
        "change_pct": 3.59
      },
      {
        "name": "人工智能",
        "change_pct": 2.81
      },
      {
        "name": "游戏",
        "change_pct": 4.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.0
      },
      {
        "name": "传媒",
        "change_pct": 3.46
      },
      {
        "name": "快手概念股",
        "change_pct": 4.05
      },
      {
        "name": "元宇宙",
        "change_pct": 3.63
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.79
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.33
      },
      {
        "name": "web3.0",
        "change_pct": 3.36
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.14
      },
      {
        "name": "数据要素",
        "change_pct": 2.79
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.5
      },
      {
        "name": "AI营销",
        "change_pct": 4.04
      },
      {
        "name": "ChatGPT",
        "change_pct": 3.28
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.29
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.4
      },
      {
        "name": "人形机器人",
        "change_pct": 3.93
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.73
      },
      {
        "name": "多模态",
        "change_pct": 3.67
      },
      {
        "name": "AI视频",
        "change_pct": 3.97
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.78
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.89
      }
    ]
  },
  {
    "code": "600776",
    "name": "东方通信",
    "hot_rank": 47,
    "hot_rank_chg": 37,
    "stock_cnt": 5788,
    "price": "12.60",
    "change": "3.11",
    "market_id": "17",
    "circulate_market_value": "12045600800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.27
      },
      {
        "name": "5G",
        "change_pct": 2.78
      },
      {
        "name": "网络安全",
        "change_pct": 2.56
      },
      {
        "name": "军工集团",
        "change_pct": 0.43
      },
      {
        "name": "军工",
        "change_pct": 1.39
      },
      {
        "name": "国企改革",
        "change_pct": 0.6
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 2.55
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.3
      },
      {
        "name": "华为产业链",
        "change_pct": 2.79
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.4
      }
    ]
  },
  {
    "code": "002347",
    "name": "泰尔股份",
    "hot_rank": 48,
    "hot_rank_chg": 133,
    "stock_cnt": 5788,
    "price": "7.70",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3799048300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "工业机器人",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 1.59
      },
      {
        "name": "人工智能",
        "change_pct": 2.81
      },
      {
        "name": "工业自动化",
        "change_pct": 3.08
      },
      {
        "name": "风电",
        "change_pct": 1.01
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.96
      },
      {
        "name": "机器人",
        "change_pct": 3.16
      },
      {
        "name": "激光",
        "change_pct": 3.22
      },
      {
        "name": "机器视觉",
        "change_pct": 3.79
      },
      {
        "name": "智能制造",
        "change_pct": 2.75
      },
      {
        "name": "3D打印",
        "change_pct": 2.55
      },
      {
        "name": "工业互联网",
        "change_pct": 2.43
      },
      {
        "name": "数字经济",
        "change_pct": 2.49
      },
      {
        "name": "动力电池回收",
        "change_pct": 1.47
      },
      {
        "name": "超级电容",
        "change_pct": 1.72
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 51,
    "hot_rank_chg": -13,
    "stock_cnt": 5788,
    "price": "6.32",
    "change": "2.27",
    "market_id": "33",
    "circulate_market_value": "4835689400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.85
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.38
      },
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "医药商业",
        "change_pct": 1.07
      },
      {
        "name": "保健品",
        "change_pct": 0.88
      },
      {
        "name": "民营医院",
        "change_pct": 1.08
      },
      {
        "name": "医药",
        "change_pct": 0.91
      },
      {
        "name": "食品",
        "change_pct": 0.84
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.25
      },
      {
        "name": "口腔",
        "change_pct": 1.07
      },
      {
        "name": "医美",
        "change_pct": 0.84
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "000525",
    "name": "红太阳",
    "hot_rank": 53,
    "hot_rank_chg": -13,
    "stock_cnt": 5788,
    "price": "5.68",
    "change": "2.90",
    "market_id": "33",
    "circulate_market_value": "6314796800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "草铵膦",
        "change_pct": -0.24
      },
      {
        "name": "农药",
        "change_pct": 0.45
      },
      {
        "name": "长寿药NMN",
        "change_pct": -0.1
      },
      {
        "name": "大农业",
        "change_pct": 0.8
      },
      {
        "name": "虫害防治",
        "change_pct": -0.1
      }
    ]
  },
  {
    "code": "600278",
    "name": "东方创业",
    "hot_rank": 54,
    "hot_rank_chg": 13,
    "stock_cnt": 5788,
    "price": "8.17",
    "change": "4.34",
    "market_id": "17",
    "circulate_market_value": "7030437400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.75
      },
      {
        "name": "快递物流",
        "change_pct": 1.01
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.66
      },
      {
        "name": "一带一路",
        "change_pct": 0.92
      },
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "破净股",
        "change_pct": 0.21
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 0.82
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "进口博览会",
        "change_pct": 1.06
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.72
      },
      {
        "name": "国企改革",
        "change_pct": 0.64
      },
      {
        "name": "自贸区",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "600408",
    "name": "安泰集团",
    "hot_rank": 55,
    "hot_rank_chg": 136,
    "stock_cnt": 5788,
    "price": "3.65",
    "change": "9.94",
    "market_id": "17",
    "circulate_market_value": "3674820000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.58
      },
      {
        "name": "钢铁",
        "change_pct": 0.64
      },
      {
        "name": "煤化工",
        "change_pct": 0.0
      }
    ]
  },
  {
    "code": "002088",
    "name": "鲁阳节能",
    "hot_rank": 60,
    "hot_rank_chg": -36,
    "stock_cnt": 5788,
    "price": "11.27",
    "change": "1.80",
    "market_id": "33",
    "circulate_market_value": "5707281100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 1.59
      },
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "大气治理",
        "change_pct": 1.56
      },
      {
        "name": "雄安新区",
        "change_pct": 1.3
      },
      {
        "name": "耐火材料",
        "change_pct": 0.13
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.96
      },
      {
        "name": "环保",
        "change_pct": 1.42
      },
      {
        "name": "船舶",
        "change_pct": -0.05
      },
      {
        "name": "建筑节能",
        "change_pct": 1.43
      },
      {
        "name": "气凝胶",
        "change_pct": 2.39
      },
      {
        "name": "旧改",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 61,
    "hot_rank_chg": 11,
    "stock_cnt": 5788,
    "price": "4.92",
    "change": "4.02",
    "market_id": "17",
    "circulate_market_value": "5994587200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 1.42
      },
      {
        "name": "煤炭",
        "change_pct": -0.58
      },
      {
        "name": "有色金属",
        "change_pct": 1.51
      },
      {
        "name": "国企改革",
        "change_pct": 0.64
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.68
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 65,
    "hot_rank_chg": 12,
    "stock_cnt": 5788,
    "price": "4.54",
    "change": "1.34",
    "market_id": "33",
    "circulate_market_value": "12042579600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "装修装饰",
        "change_pct": 1.6
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.24
      },
      {
        "name": "破净股",
        "change_pct": 0.21
      },
      {
        "name": "航天",
        "change_pct": 2.0
      },
      {
        "name": "旧改",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 66,
    "hot_rank_chg": 20,
    "stock_cnt": 5788,
    "price": "12.10",
    "change": "4.94",
    "market_id": "33",
    "circulate_market_value": "13727899000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 2.53
      },
      {
        "name": "足球",
        "change_pct": 2.27
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.03
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.49
      },
      {
        "name": "传媒",
        "change_pct": 3.46
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.13
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.5
      },
      {
        "name": "国企改革",
        "change_pct": 0.64
      },
      {
        "name": "网红/MCN",
        "change_pct": 3.07
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.71
      },
      {
        "name": "AI视频",
        "change_pct": 3.94
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 68,
    "hot_rank_chg": -11,
    "stock_cnt": 5788,
    "price": "11.85",
    "change": "3.04",
    "market_id": "17",
    "circulate_market_value": "4750451500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 0.66
      },
      {
        "name": "新零售",
        "change_pct": 1.4
      },
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "物业管理",
        "change_pct": 1.32
      },
      {
        "name": "国企改革",
        "change_pct": 0.64
      },
      {
        "name": "地摊经济",
        "change_pct": 1.46
      }
    ]
  },
  {
    "code": "002124",
    "name": "天邦食品",
    "hot_rank": 71,
    "hot_rank_chg": 148,
    "stock_cnt": 5788,
    "price": "2.20",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "4339226400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 0.72
      },
      {
        "name": "养猪",
        "change_pct": 0.22
      },
      {
        "name": "社区团购",
        "change_pct": 1.19
      },
      {
        "name": "大农业",
        "change_pct": 0.8
      },
      {
        "name": "预制菜",
        "change_pct": 0.83
      },
      {
        "name": "元宇宙",
        "change_pct": 3.64
      },
      {
        "name": "低价股",
        "change_pct": 1.11
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 72,
    "hot_rank_chg": -6,
    "stock_cnt": 5788,
    "price": "5.20",
    "change": "2.16",
    "market_id": "17",
    "circulate_market_value": "2908461600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 3.59
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.86
      },
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "游戏",
        "change_pct": 4.05
      },
      {
        "name": "影视",
        "change_pct": 5.29
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.71
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 74,
    "hot_rank_chg": -28,
    "stock_cnt": 5788,
    "price": "6.94",
    "change": "1.76",
    "market_id": "33",
    "circulate_market_value": "3513191100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电子特气",
        "change_pct": 1.5
      },
      {
        "name": "资产重组",
        "change_pct": 2.7
      },
      {
        "name": "仪器仪表",
        "change_pct": 2.78
      },
      {
        "name": "锂电池",
        "change_pct": 1.59
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.86
      },
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "有机硅",
        "change_pct": 1.22
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.96
      },
      {
        "name": "华为产业链",
        "change_pct": 2.79
      },
      {
        "name": "供应链金融",
        "change_pct": 1.6
      },
      {
        "name": "服务器",
        "change_pct": 2.32
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 75,
    "hot_rank_chg": 8,
    "stock_cnt": 5788,
    "price": "10.01",
    "change": "3.30",
    "market_id": "33",
    "circulate_market_value": "9519860000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 1.93
      },
      {
        "name": "大飞机",
        "change_pct": 1.3
      },
      {
        "name": "北斗导航",
        "change_pct": 2.73
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.71
      },
      {
        "name": "军民融合",
        "change_pct": 1.75
      },
      {
        "name": "磁悬浮",
        "change_pct": 1.68
      },
      {
        "name": "军工",
        "change_pct": 1.39
      },
      {
        "name": "碳纤维",
        "change_pct": 2.16
      },
      {
        "name": "无人机",
        "change_pct": 1.89
      },
      {
        "name": "智能制造",
        "change_pct": 2.75
      },
      {
        "name": "3D打印",
        "change_pct": 2.55
      },
      {
        "name": "航天",
        "change_pct": 2.0
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.33
      },
      {
        "name": "国资入股",
        "change_pct": 1.0
      },
      {
        "name": "低空经济",
        "change_pct": 1.92
      },
      {
        "name": "海洋经济",
        "change_pct": 1.69
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 76,
    "hot_rank_chg": 89,
    "stock_cnt": 5788,
    "price": "6.75",
    "change": "5.81",
    "market_id": "33",
    "circulate_market_value": "7837591000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "影视",
        "change_pct": 5.29
      },
      {
        "name": "新疆概念",
        "change_pct": 0.45
      },
      {
        "name": "动漫",
        "change_pct": 5.94
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.73
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.0
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.71
      },
      {
        "name": "AI视频",
        "change_pct": 3.94
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.76
      }
    ]
  },
  {
    "code": "002029",
    "name": "七匹狼",
    "hot_rank": 77,
    "hot_rank_chg": -7,
    "stock_cnt": 5788,
    "price": "9.42",
    "change": "3.98",
    "market_id": "33",
    "circulate_market_value": "6261470100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "纺织服装",
        "change_pct": 1.78
      },
      {
        "name": "破净股",
        "change_pct": 0.21
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 83,
    "hot_rank_chg": 7,
    "stock_cnt": 5788,
    "price": "12.00",
    "change": "6.28",
    "market_id": "33",
    "circulate_market_value": "4014449600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.29
      },
      {
        "name": "饲料",
        "change_pct": 0.72
      },
      {
        "name": "一带一路",
        "change_pct": 0.92
      },
      {
        "name": "强势人气股",
        "change_pct": 3.79
      },
      {
        "name": "保健品",
        "change_pct": 0.88
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.05
      },
      {
        "name": "污水处理",
        "change_pct": 1.47
      },
      {
        "name": "环保",
        "change_pct": 1.42
      },
      {
        "name": "食品",
        "change_pct": 0.84
      },
      {
        "name": "预制菜",
        "change_pct": 0.83
      },
      {
        "name": "国企改革",
        "change_pct": 0.64
      },
      {
        "name": "水产养殖",
        "change_pct": 2.09
      },
      {
        "name": "广西概念",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "002712",
    "name": "思美传媒",
    "hot_rank": 85,
    "hot_rank_chg": -27,
    "stock_cnt": 5788,
    "price": "6.11",
    "change": "4.09",
    "market_id": "33",
    "circulate_market_value": "3304900700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 2.81
      },
      {
        "name": "影视",
        "change_pct": 5.29
      },
      {
        "name": "直播/短视频",
        "change_pct": 4.38
      },
      {
        "name": "知识产权",
        "change_pct": 3.48
      },
      {
        "name": "百度概念股",
        "change_pct": 3.23
      },
      {
        "name": "传媒",
        "change_pct": 3.46
      },
      {
        "name": "快手概念股",
        "change_pct": 4.05
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.77
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.5
      },
      {
        "name": "网红/MCN",
        "change_pct": 3.07
      },
      {
        "name": "华为产业链",
        "change_pct": 2.79
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.71
      },
      {
        "name": "AI视频",
        "change_pct": 3.94
      },
      {
        "name": "智谱AI",
        "change_pct": 3.42
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.76
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.91
      }
    ]
  },
  {
    "code": "600853",
    "name": "龙建股份",
    "hot_rank": 88,
    "hot_rank_chg": 153,
    "stock_cnt": 5788,
    "price": "3.90",
    "change": "1.30",
    "market_id": "17",
    "circulate_market_value": "3953447600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.92
      },
      {
        "name": "水利",
        "change_pct": 1.14
      },
      {
        "name": "智慧城市",
        "change_pct": 2.57
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "冰雪产业",
        "change_pct": 1.37
      },
      {
        "name": "振兴东北",
        "change_pct": 1.03
      },
      {
        "name": "大基建",
        "change_pct": 0.74
      },
      {
        "name": "中俄贸易",
        "change_pct": 1.11
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.69
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 0.8
      },
      {
        "name": "旧改",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "600637",
    "name": "东方明珠",
    "hot_rank": 89,
    "hot_rank_chg": -26,
    "stock_cnt": 5788,
    "price": "8.39",
    "change": "-2.89",
    "market_id": "17",
    "circulate_market_value": "28206339000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 4.23
      },
      {
        "name": "高管增持",
        "change_pct": 1.32
      },
      {
        "name": "超高清视频",
        "change_pct": 3.73
      },
      {
        "name": "电竞",
        "change_pct": 2.97
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.66
      },
      {
        "name": "游戏",
        "change_pct": 4.05
      },
      {
        "name": "物联网",
        "change_pct": 2.81
      },
      {
        "name": "教育",
        "change_pct": 2.74
      },
      {
        "name": "智慧城市",
        "change_pct": 2.57
      },
      {
        "name": "破净股",
        "change_pct": 0.21
      },
      {
        "name": "传媒",
        "change_pct": 3.46
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.36
      },
      {
        "name": "国企改革",
        "change_pct": 0.64
      },
      {
        "name": "在线教育",
        "change_pct": 2.25
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.42
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.71
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 91,
    "hot_rank_chg": 11,
    "stock_cnt": 5788,
    "price": "4.32",
    "change": "3.10",
    "market_id": "33",
    "circulate_market_value": "25292723000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 2.81
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.69
      },
      {
        "name": "水利",
        "change_pct": 1.14
      },
      {
        "name": "直播/短视频",
        "change_pct": 4.38
      },
      {
        "name": "大数据",
        "change_pct": 2.4
      },
      {
        "name": "园林",
        "change_pct": 2.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 3.7
      },
      {
        "name": "数字经济",
        "change_pct": 2.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.0
      },
      {
        "name": "传媒",
        "change_pct": 3.46
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 3.35
      },
      {
        "name": "第三代半导体",
        "change_pct": 2.51
      },
      {
        "name": "快手概念股",
        "change_pct": 4.05
      },
      {
        "name": "IGBT",
        "change_pct": 2.3
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.77
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.13
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.5
      },
      {
        "name": "氮化镓",
        "change_pct": 2.51
      },
      {
        "name": "AI营销",
        "change_pct": 4.01
      },
      {
        "name": "华为产业链",
        "change_pct": 2.79
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.42
      },
      {
        "name": "多模态",
        "change_pct": 3.66
      },
      {
        "name": "AI视频",
        "change_pct": 3.94
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.98
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.91
      },
      {
        "name": "区块链",
        "change_pct": 2.36
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 92,
    "hot_rank_chg": -5,
    "stock_cnt": 5788,
    "price": "4.51",
    "change": "1.34",
    "market_id": "33",
    "circulate_market_value": "159859450000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 3.83
      },
      {
        "name": "手机产业链",
        "change_pct": 3.88
      },
      {
        "name": "超高清视频",
        "change_pct": 3.73
      },
      {
        "name": "苹果产业链",
        "change_pct": 4.22
      },
      {
        "name": "电竞",
        "change_pct": 2.97
      },
      {
        "name": "半导体",
        "change_pct": 3.13
      },
      {
        "name": "人工智能",
        "change_pct": 2.81
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.58
      },
      {
        "name": "VR&AR",
        "change_pct": 4.26
      },
      {
        "name": "OLED",
        "change_pct": 3.22
      },
      {
        "name": "京津冀",
        "change_pct": 1.07
      },
      {
        "name": "物联网",
        "change_pct": 2.81
      },
      {
        "name": "指纹识别",
        "change_pct": 3.53
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.84
      },
      {
        "name": "白马股",
        "change_pct": -0.15
      },
      {
        "name": "智能制造",
        "change_pct": 2.75
      },
      {
        "name": "小米概念股",
        "change_pct": 3.7
      },
      {
        "name": "国产芯片",
        "change_pct": 3.24
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.72
      },
      {
        "name": "全息概念",
        "change_pct": 3.23
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 3.35
      },
      {
        "name": "MicroLED",
        "change_pct": 3.29
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.94
      },
      {
        "name": "智能手表",
        "change_pct": 4.51
      },
      {
        "name": "MiniLED",
        "change_pct": 3.18
      },
      {
        "name": "传感器",
        "change_pct": 3.47
      },
      {
        "name": "大硅片",
        "change_pct": 1.99
      },
      {
        "name": "AI PC",
        "change_pct": 3.67
      },
      {
        "name": "华为产业链",
        "change_pct": 2.79
      },
      {
        "name": "回购",
        "change_pct": 1.99
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 3.23
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.32
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 3.17
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 99,
    "hot_rank_chg": 41,
    "stock_cnt": 5788,
    "price": "10.06",
    "change": "1.21",
    "market_id": "17",
    "circulate_market_value": "14815431000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.27
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.33
      },
      {
        "name": "火电",
        "change_pct": -0.33
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.36
      },
      {
        "name": "风电",
        "change_pct": 1.01
      },
      {
        "name": "国企改革",
        "change_pct": 0.64
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000530", "name": "冰山冷热", "hot_rank": 1, "hot_rank_chg": 12, "stock_cnt": 5788, "price": "10.53", "change": "10.03", "market_id": "33", "circulate_market_value": "6319229100.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "冰雪工程", "xgb_concepts": [{"name": "体育产业", "change_pct": 2.46}, {"name": "边缘计算", "change_pct": 3.58}, {"name": "核电", "change_pct": 1.3}, {"name": "海工装备", "change_pct": 0.66}, {"name": "强势人气股", "change_pct": 3.8}, {"name": "云计算数据中心", "change_pct": 2.63}, {"name": "冷链", "change_pct": 1.45}, {"name": "地热", "change_pct": 1.45}, {"name": "储能", "change_pct": 1.33}, {"name": "碳中和", "change_pct": 0.61}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 1.36}, {"name": "汽车热管理", "change_pct": 2.42}, {"name": "热泵", "change_pct": 2.34}, {"name": "液冷服务器", "change_pct": 2.94}, {"name": "蜜雪冰城概念股", "change_pct": 2.36}, {"name": "海洋经济", "change_pct": 1.62}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5788, "price": "4.58", "change": "4.58", "market_id": "33", "circulate_market_value": "7225038700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 1.69}, {"name": "体外诊断", "change_pct": 1.14}, {"name": "医疗器械", "change_pct": 1.12}, {"name": "强势人气股", "change_pct": 3.8}, {"name": "基因测序", "change_pct": 1.39}, {"name": "预制菜", "change_pct": 0.8}, {"name": "水产养殖", "change_pct": 2.07}, {"name": "新冠病毒防治", "change_pct": 1.17}, {"name": "海洋经济", "change_pct": 1.62}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5788, "price": "5.85", "change": "9.96", "market_id": "17", "circulate_market_value": "7810059900.00", "change_type": "1", "change_section": "14", "change_days": "8", "change_reason": "商业航天", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.8}, {"name": "LED", "change_pct": 3.42}, {"name": "卫星互联网", "change_pct": 2.3}]}, {"code": "603366", "name": "日出东方", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5788, "price": "10.88", "change": "10.01", "market_id": "17", "circulate_market_value": "8845963300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "“东方系”", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.8}, {"name": "光伏", "change_pct": 1.27}, {"name": "家电", "change_pct": 2.49}, {"name": "储能", "change_pct": 1.33}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 2.34}, {"name": "华为鸿蒙", "change_pct": 3.03}, {"name": "厨卫家电", "change_pct": 1.63}, {"name": "华为产业链", "change_pct": 2.75}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5788, "price": "750.00", "change": "4.75", "market_id": "17", "circulate_market_value": "22565790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 6, "hot_rank_chg": 8, "stock_cnt": 5788, "price": "16.10", "change": "0.94", "market_id": "33", "circulate_market_value": "10628039800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 7, "hot_rank_chg": 37, "stock_cnt": 5788, "price": "4.42", "change": "5.49", "market_id": "17", "circulate_market_value": "5770177000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.8}, {"name": "高速公路", "change_pct": -0.23}, {"name": "振兴东北", "change_pct": 0.97}, {"name": "黑龙江自贸区", "change_pct": 0.84}]}, {"code": "600327", "name": "大东方", "hot_rank": 8, "hot_rank_chg": 12, "stock_cnt": 5788, "price": "5.94", "change": "10.00", "market_id": "17", "circulate_market_value": "5255590300.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "“东方系”", "xgb_concepts": [{"name": "新零售", "change_pct": 1.35}, {"name": "优化生育（三孩）", "change_pct": 1.33}, {"name": "强势人气股", "change_pct": 3.8}, {"name": "信托", "change_pct": -0.42}, {"name": "民营医院", "change_pct": 1.02}, {"name": "社区团购", "change_pct": 1.13}, {"name": "大金融", "change_pct": 0.21}, {"name": "餐饮", "change_pct": 0.58}, {"name": "首发经济", "change_pct": 1.64}]}, {"code": "002565", "name": "顺灏股份", "hot_rank": 9, "hot_rank_chg": 24, "stock_cnt": 5788, "price": "10.97", "change": "4.17", "market_id": "33", "circulate_market_value": "11638307800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": 1.41}, {"name": "电子烟", "change_pct": 3.39}, {"name": "一带一路", "change_pct": 0.88}, {"name": "造纸", "change_pct": 1.66}, {"name": "强势人气股", "change_pct": 3.8}, {"name": "包装印刷", "change_pct": 2.11}, {"name": "卫星互联网", "change_pct": 2.3}, {"name": "太空算力", "change_pct": 2.93}]}, {"code": "002384", "name": "东山精密", "hot_rank": 10, "hot_rank_chg": -3, "stock_cnt": 5788, "price": "84.04", "change": "3.13", "market_id": "33", "circulate_market_value": "116506478000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 11, "hot_rank_chg": -8, "stock_cnt": 5788, "price": "471.00", "change": "4.19", "market_id": "33", "circulate_market_value": "522724830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 12, "hot_rank_chg": 22, "stock_cnt": 5788, "price": "2.85", "change": "10.04", "market_id": "17", "circulate_market_value": "8157760900.00", "change_type": "1", "change_section": "15", "change_days": "8", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": 3.58}, {"name": "强势人气股", "change_pct": 3.8}, {"name": "游戏", "change_pct": 4.07}, {"name": "影视", "change_pct": 5.37}, {"name": "低价股", "change_pct": 1.02}, {"name": "国企改革", "change_pct": 0.6}, {"name": "短剧/互动影游", "change_pct": 4.73}, {"name": "AI视频", "change_pct": 3.97}]}, {"code": "002578", "name": "闽发铝业", "hot_rank": 13, "hot_rank_chg": 5, "stock_cnt": 5788, "price": "5.89", "change": "6.71", "market_id": "33", "circulate_market_value": "5063635900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 1.32}, {"name": "一带一路", "change_pct": 0.88}, {"name": "强势人气股", "change_pct": 3.8}, {"name": "福建自贸/海西概念", "change_pct": 1.94}, {"name": "光伏", "change_pct": 1.27}, {"name": "有色金属", "change_pct": 1.4}, {"name": "新能源汽车", "change_pct": 1.91}, {"name": "新能源车零部件", "change_pct": 2.57}, {"name": "自贸区", "change_pct": 1.07}, {"name": "液冷服务器", "change_pct": 2.94}]}, {"code": "002310", "name": "东方新能", "hot_rank": 14, "hot_rank_chg": 5, "stock_cnt": 5788, "price": "2.81", "change": "10.20", "market_id": "33", "circulate_market_value": "12361216600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "签下算力大单", "xgb_concepts": [{"name": "资产重组", "change_pct": 2.65}, {"name": "强势人气股", "change_pct": 3.8}, {"name": "京津冀", "change_pct": 1.01}, {"name": "旅游", "change_pct": 0.27}, {"name": "园林", "change_pct": 2.25}, {"name": "海绵城市", "change_pct": 1.48}, {"name": "固废处理", "change_pct": 0.99}, {"name": "雄安新区", "change_pct": 1.23}, {"name": "北京城市规划", "change_pct": 1.38}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": 1.34}, {"name": "碳中和", "change_pct": 0.61}, {"name": "乡村振兴", "change_pct": 1.24}, {"name": "汽车拆解", "change_pct": 1.82}, {"name": "土壤修复", "change_pct": 1.21}, {"name": "核污染防治", "change_pct": 1.61}, {"name": "东数西算/算力", "change_pct": 2.33}, {"name": "新型城镇化", "change_pct": 1.63}, {"name": "低价股", "change_pct": 1.02}, {"name": "西部大开发", "change_pct": -0.25}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 15, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "5.49", "change": "2.04", "market_id": "17", "circulate_market_value": "6371378100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.8}, {"name": "纺织服装", "change_pct": 1.7}, {"name": "浙江国企改革", "change_pct": 1.3}, {"name": "影视", "change_pct": 5.37}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 0.6}, {"name": "短剧/互动影游", "change_pct": 4.73}]}, {"code": "300502", "name": "新易盛", "hot_rank": 16, "hot_rank_chg": -4, "stock_cnt": 5788, "price": "185.10", "change": "5.17", "market_id": "33", "circulate_market_value": "232249370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 17, "hot_rank_chg": 81, "stock_cnt": 5788, "price": "32.80", "change": "9.99", "market_id": "17", "circulate_market_value": "14395816000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧"}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 18, "hot_rank_chg": -3, "stock_cnt": 5788, "price": "19.26", "change": "9.99", "market_id": "33", "circulate_market_value": "8852123200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人轴承"}, {"code": "002343", "name": "慈文传媒", "hot_rank": 19, "hot_rank_chg": 55, "stock_cnt": 5788, "price": "9.33", "change": "10.02", "market_id": "33", "circulate_market_value": "4419437100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "微短剧", "xgb_concepts": [{"name": "手游", "change_pct": 3.58}, {"name": "强势人气股", "change_pct": 3.8}, {"name": "VR&AR", "change_pct": 4.22}, {"name": "游戏", "change_pct": 4.07}, {"name": "影视", "change_pct": 5.37}, {"name": "直播/短视频", "change_pct": 4.4}, {"name": "动漫", "change_pct": 6.05}, {"name": "腾讯概念股", "change_pct": 2.99}, {"name": "传媒", "change_pct": 3.46}, {"name": "元宇宙", "change_pct": 3.63}, {"name": "短剧/互动影游", "change_pct": 4.73}, {"name": "IP经济/谷子经济", "change_pct": 2.78}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 20, "hot_rank_chg": -9, "stock_cnt": 5788, "price": "26.20", "change": "0.38", "market_id": "33", "circulate_market_value": "19958259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 21, "hot_rank_chg": 35, "stock_cnt": 5788, "price": "18.46", "change": "3.42", "market_id": "33", "circulate_market_value": "10988397100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 22, "hot_rank_chg": 30, "stock_cnt": 5788, "price": "24.17", "change": "10.01", "market_id": "33", "circulate_market_value": "12317765600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人关节"}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 23, "hot_rank_chg": 13, "stock_cnt": 5788, "price": "17.06", "change": "4.02", "market_id": "33", "circulate_market_value": "4286914500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 24, "hot_rank_chg": -14, "stock_cnt": 5788, "price": "36.27", "change": "1.31", "market_id": "33", "circulate_market_value": "37057057000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 25, "hot_rank_chg": 81, "stock_cnt": 5788, "price": "44.73", "change": "3.47", "market_id": "33", "circulate_market_value": "67845289000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 26, "hot_rank_chg": 13, "stock_cnt": 5788, "price": "57.30", "change": "10.00", "market_id": "17", "circulate_market_value": "17102827000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "柔性传感"}, {"code": "002149", "name": "西部材料", "hot_rank": 27, "hot_rank_chg": 2, "stock_cnt": 5788, "price": "41.27", "change": "-0.58", "market_id": "33", "circulate_market_value": "20145502000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 28, "hot_rank_chg": -6, "stock_cnt": 5788, "price": "14.20", "change": "4.03", "market_id": "17", "circulate_market_value": "14837407000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 29, "hot_rank_chg": -23, "stock_cnt": 5788, "price": "40.62", "change": "1.57", "market_id": "17", "circulate_market_value": "182913440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 30, "hot_rank_chg": 2, "stock_cnt": 5788, "price": "11.00", "change": "0.92", "market_id": "17", "circulate_market_value": "7059615400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 1.57}, {"name": "农业种植", "change_pct": 0.27}, {"name": "湖南国企改革", "change_pct": 0.97}, {"name": "乡村振兴", "change_pct": 1.24}, {"name": "休闲食品", "change_pct": 0.73}, {"name": "食品", "change_pct": 0.8}, {"name": "食品安全", "change_pct": 1.58}, {"name": "社区团购", "change_pct": 1.13}, {"name": "大农业", "change_pct": 0.74}, {"name": "预制菜", "change_pct": 0.8}, {"name": "人造肉", "change_pct": 1.02}, {"name": "国企改革", "change_pct": 0.6}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 31, "hot_rank_chg": 10, "stock_cnt": 5788, "price": "66.60", "change": "0.86", "market_id": "33", "circulate_market_value": "48300755000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300118", "name": "东方日升", "hot_rank": 32, "hot_rank_chg": -23, "stock_cnt": 5788, "price": "11.09", "change": "2.21", "market_id": "33", "circulate_market_value": "10275102100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": 2.6}, {"name": "光伏", "change_pct": 1.27}, {"name": "储能", "change_pct": 1.33}, {"name": "BIPV概念", "change_pct": 1.25}, {"name": "钙钛矿电池", "change_pct": 1.9}, {"name": "异质结电池HJT", "change_pct": 1.43}, {"name": "光伏胶膜", "change_pct": 1.07}]}, {"code": "301313", "name": "凡拓数创", "hot_rank": 33, "hot_rank_chg": -12, "stock_cnt": 5788, "price": "72.46", "change": "3.86", "market_id": "33", "circulate_market_value": "5700719100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300133", "name": "华策影视", "hot_rank": 34, "hot_rank_chg": 149, "stock_cnt": 5788, "price": "11.36", "change": "17.11", "market_id": "33", "circulate_market_value": "18903044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "VR&AR", "change_pct": 4.22}, {"name": "影视", "change_pct": 5.29}, {"name": "大数据", "change_pct": 2.4}, {"name": "教育", "change_pct": 2.74}, {"name": "动漫", "change_pct": 5.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "知识产权", "change_pct": 3.48}, {"name": "百度概念股", "change_pct": 3.23}, {"name": "腾讯概念股", "change_pct": 3.0}, {"name": "NFT", "change_pct": 3.75}, {"name": "元宇宙", "change_pct": 3.63}, {"name": "虚拟数字人", "change_pct": 3.79}, {"name": "AIGC概念", "change_pct": 3.14}, {"name": "网红/MCN", "change_pct": 3.06}, {"name": "华为产业链", "change_pct": 2.79}, {"name": "智能眼镜/MR头显", "change_pct": 4.29}, {"name": "AI大模型/智能体", "change_pct": 2.4}, {"name": "短剧/互动影游", "change_pct": 4.73}, {"name": "多模态", "change_pct": 3.67}, {"name": "AI视频", "change_pct": 3.97}, {"name": "Kimi概念", "change_pct": 4.34}, {"name": "智谱AI", "change_pct": 3.41}, {"name": "IP经济/谷子经济", "change_pct": 2.78}]}, {"code": "600641", "name": "先导基电", "hot_rank": 35, "hot_rank_chg": 10, "stock_cnt": 5788, "price": "33.45", "change": "2.23", "market_id": "17", "circulate_market_value": "31129571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 36, "hot_rank_chg": 59, "stock_cnt": 5788, "price": "150.96", "change": "0.45", "market_id": "17", "circulate_market_value": "373366390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 37, "hot_rank_chg": -2, "stock_cnt": 5788, "price": "42.97", "change": "1.80", "market_id": "17", "circulate_market_value": "105433180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 38, "hot_rank_chg": -21, "stock_cnt": 5788, "price": "59.98", "change": "4.31", "market_id": "17", "circulate_market_value": "70925698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 39, "hot_rank_chg": 8, "stock_cnt": 5788, "price": "39.05", "change": "1.96", "market_id": "17", "circulate_market_value": "33057908000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603703", "name": "盛洋科技", "hot_rank": 40, "hot_rank_chg": 77, "stock_cnt": 5788, "price": "11.54", "change": "3.96", "market_id": "17", "circulate_market_value": "4788893700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 2.61}, {"name": "5G", "change_pct": 2.78}, {"name": "强势人气股", "change_pct": 3.79}, {"name": "云计算数据中心", "change_pct": 2.69}, {"name": "LED", "change_pct": 3.52}, {"name": "卫星互联网", "change_pct": 2.3}, {"name": "铜缆高速连接器", "change_pct": 3.34}]}, {"code": "002724", "name": "海洋王", "hot_rank": 41, "hot_rank_chg": -15, "stock_cnt": 5788, "price": "13.15", "change": "1.94", "market_id": "33", "circulate_market_value": "7449189500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 42, "hot_rank_chg": 27, "stock_cnt": 5788, "price": "8.52", "change": "5.32", "market_id": "33", "circulate_market_value": "13861987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.74}, {"name": "电竞", "change_pct": 2.97}, {"name": "手游", "change_pct": 3.59}, {"name": "人工智能", "change_pct": 2.81}, {"name": "游戏", "change_pct": 4.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.49}, {"name": "腾讯概念股", "change_pct": 3.0}, {"name": "传媒", "change_pct": 3.46}, {"name": "快手概念股", "change_pct": 4.05}, {"name": "元宇宙", "change_pct": 3.63}, {"name": "虚拟数字人", "change_pct": 3.79}, {"name": "东数西算/算力", "change_pct": 2.33}, {"name": "web3.0", "change_pct": 3.36}, {"name": "AIGC概念", "change_pct": 3.14}, {"name": "数据要素", "change_pct": 2.79}, {"name": "字节跳动概念股", "change_pct": 3.5}, {"name": "AI营销", "change_pct": 4.04}, {"name": "ChatGPT", "change_pct": 3.28}, {"name": "智能眼镜/MR头显", "change_pct": 4.29}, {"name": "AI大模型/智能体", "change_pct": 2.4}, {"name": "人形机器人", "change_pct": 3.93}, {"name": "短剧/互动影游", "change_pct": 4.73}, {"name": "多模态", "change_pct": 3.67}, {"name": "AI视频", "change_pct": 3.97}, {"name": "IP经济/谷子经济", "change_pct": 2.78}, {"name": "小红书概念股", "change_pct": 3.89}]}, {"code": "002865", "name": "钧达股份", "hot_rank": 43, "hot_rank_chg": -18, "stock_cnt": 5788, "price": "46.09", "change": "3.65", "market_id": "33", "circulate_market_value": "10541804300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 44, "hot_rank_chg": -17, "stock_cnt": 5788, "price": "43.26", "change": "1.62", "market_id": "17", "circulate_market_value": "858455430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 45, "hot_rank_chg": -15, "stock_cnt": 5788, "price": "25.68", "change": "6.73", "market_id": "33", "circulate_market_value": "4884271800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 46, "hot_rank_chg": 5, "stock_cnt": 5788, "price": "81.71", "change": "5.98", "market_id": "33", "circulate_market_value": "157911840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600776", "name": "东方通信", "hot_rank": 47, "hot_rank_chg": 37, "stock_cnt": 5788, "price": "12.60", "change": "3.11", "market_id": "17", "circulate_market_value": "12045600800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.27}, {"name": "5G", "change_pct": 2.78}, {"name": "网络安全", "change_pct": 2.56}, {"name": "军工集团", "change_pct": 0.43}, {"name": "军工", "change_pct": 1.39}, {"name": "国企改革", "change_pct": 0.6}, {"name": "华为云·鲲鹏", "change_pct": 2.55}, {"name": "卫星互联网", "change_pct": 2.3}, {"name": "华为产业链", "change_pct": 2.79}, {"name": "AI大模型/智能体", "change_pct": 2.4}]}, {"code": "002347", "name": "泰尔股份", "hot_rank": 48, "hot_rank_chg": 133, "stock_cnt": 5788, "price": "7.70", "change": "10.00", "market_id": "33", "circulate_market_value": "3799048300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "工业机器人", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.59}, {"name": "人工智能", "change_pct": 2.81}, {"name": "工业自动化", "change_pct": 3.08}, {"name": "风电", "change_pct": 1.01}, {"name": "新能源汽车", "change_pct": 1.96}, {"name": "机器人", "change_pct": 3.16}, {"name": "激光", "change_pct": 3.22}, {"name": "机器视觉", "change_pct": 3.79}, {"name": "智能制造", "change_pct": 2.75}, {"name": "3D打印", "change_pct": 2.55}, {"name": "工业互联网", "change_pct": 2.43}, {"name": "数字经济", "change_pct": 2.49}, {"name": "动力电池回收", "change_pct": 1.47}, {"name": "超级电容", "change_pct": 1.72}]}, {"code": "300364", "name": "中文在线", "hot_rank": 49, "hot_rank_chg": -21, "stock_cnt": 5788, "price": "28.70", "change": "6.77", "market_id": "33", "circulate_market_value": "18973159000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 50, "hot_rank_chg": -13, "stock_cnt": 5788, "price": "13.05", "change": "-3.40", "market_id": "17", "circulate_market_value": "3818142900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 51, "hot_rank_chg": -13, "stock_cnt": 5788, "price": "6.32", "change": "2.27", "market_id": "33", "circulate_market_value": "4835689400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.85}, {"name": "优化生育（三孩）", "change_pct": 1.38}, {"name": "强势人气股", "change_pct": 3.79}, {"name": "医药商业", "change_pct": 1.07}, {"name": "保健品", "change_pct": 0.88}, {"name": "民营医院", "change_pct": 1.08}, {"name": "医药", "change_pct": 0.91}, {"name": "食品", "change_pct": 0.84}, {"name": "辅助生殖", "change_pct": 1.25}, {"name": "口腔", "change_pct": 1.07}, {"name": "医美", "change_pct": 0.84}, {"name": "新冠病毒防治", "change_pct": 1.25}]}, {"code": "300136", "name": "信维通信", "hot_rank": 52, "hot_rank_chg": -36, "stock_cnt": 5788, "price": "50.00", "change": "4.82", "market_id": "33", "circulate_market_value": "41256136000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000525", "name": "红太阳", "hot_rank": 53, "hot_rank_chg": -13, "stock_cnt": 5788, "price": "5.68", "change": "2.90", "market_id": "33", "circulate_market_value": "6314796800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.79}, {"name": "草铵膦", "change_pct": -0.24}, {"name": "农药", "change_pct": 0.45}, {"name": "长寿药NMN", "change_pct": -0.1}, {"name": "大农业", "change_pct": 0.8}, {"name": "虫害防治", "change_pct": -0.1}]}, {"code": "600278", "name": "东方创业", "hot_rank": 54, "hot_rank_chg": 13, "stock_cnt": 5788, "price": "8.17", "change": "4.34", "market_id": "17", "circulate_market_value": "7030437400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.75}, {"name": "快递物流", "change_pct": 1.01}, {"name": "上海国企改革", "change_pct": 0.66}, {"name": "一带一路", "change_pct": 0.92}, {"name": "强势人气股", "change_pct": 3.79}, {"name": "破净股", "change_pct": 0.21}, {"name": "上海自由贸易港", "change_pct": 0.82}, {"name": "独角兽", "change_pct": 0.85}, {"name": "进口博览会", "change_pct": 1.06}, {"name": "自由贸易港", "change_pct": 0.72}, {"name": "国企改革", "change_pct": 0.64}, {"name": "自贸区", "change_pct": 1.12}]}, {"code": "600408", "name": "安泰集团", "hot_rank": 55, "hot_rank_chg": 136, "stock_cnt": 5788, "price": "3.65", "change": "9.94", "market_id": "17", "circulate_market_value": "3674820000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.58}, {"name": "钢铁", "change_pct": 0.64}, {"name": "煤化工", "change_pct": 0.0}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 56, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "246.63", "change": "3.45", "market_id": "17", "circulate_market_value": "165419260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 57, "hot_rank_chg": 123, "stock_cnt": 5788, "price": "48.25", "change": "10.01", "market_id": "33", "circulate_market_value": "9774285100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "002428", "name": "云南锗业", "hot_rank": 58, "hot_rank_chg": -15, "stock_cnt": 5788, "price": "73.73", "change": "-0.86", "market_id": "33", "circulate_market_value": "48146243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 59, "hot_rank_chg": 16, "stock_cnt": 5788, "price": "72.33", "change": "2.33", "market_id": "17", "circulate_market_value": "174441790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002088", "name": "鲁阳节能", "hot_rank": 60, "hot_rank_chg": -36, "stock_cnt": 5788, "price": "11.27", "change": "1.80", "market_id": "33", "circulate_market_value": "5707281100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.59}, {"name": "强势人气股", "change_pct": 3.79}, {"name": "大气治理", "change_pct": 1.56}, {"name": "雄安新区", "change_pct": 1.3}, {"name": "耐火材料", "change_pct": 0.13}, {"name": "新能源汽车", "change_pct": 1.96}, {"name": "环保", "change_pct": 1.42}, {"name": "船舶", "change_pct": -0.05}, {"name": "建筑节能", "change_pct": 1.43}, {"name": "气凝胶", "change_pct": 2.39}, {"name": "旧改", "change_pct": 1.33}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 61, "hot_rank_chg": 11, "stock_cnt": 5788, "price": "4.92", "change": "4.02", "market_id": "17", "circulate_market_value": "5994587200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 1.42}, {"name": "煤炭", "change_pct": -0.58}, {"name": "有色金属", "change_pct": 1.51}, {"name": "国企改革", "change_pct": 0.64}, {"name": "河南国企改革", "change_pct": 0.68}]}, {"code": "603278", "name": "大业股份", "hot_rank": 62, "hot_rank_chg": 6, "stock_cnt": 5788, "price": "14.67", "change": "6.85", "market_id": "17", "circulate_market_value": "5013610300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 63, "hot_rank_chg": 16, "stock_cnt": 5788, "price": "14.73", "change": "2.58", "market_id": "33", "circulate_market_value": "49051901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 64, "hot_rank_chg": -9, "stock_cnt": 5788, "price": "127.56", "change": "3.86", "market_id": "33", "circulate_market_value": "138834780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 65, "hot_rank_chg": 12, "stock_cnt": 5788, "price": "4.54", "change": "1.34", "market_id": "33", "circulate_market_value": "12042579600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.79}, {"name": "装修装饰", "change_pct": 1.6}, {"name": "装配式建筑", "change_pct": 1.24}, {"name": "破净股", "change_pct": 0.21}, {"name": "航天", "change_pct": 2.0}, {"name": "旧改", "change_pct": 1.33}]}, {"code": "002181", "name": "粤传媒", "hot_rank": 66, "hot_rank_chg": 20, "stock_cnt": 5788, "price": "12.10", "change": "4.94", "market_id": "33", "circulate_market_value": "13727899000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 2.53}, {"name": "足球", "change_pct": 2.27}, {"name": "粤港澳大湾区", "change_pct": 1.03}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.49}, {"name": "传媒", "change_pct": 3.46}, {"name": "AIGC概念", "change_pct": 3.13}, {"name": "字节跳动概念股", "change_pct": 3.5}, {"name": "国企改革", "change_pct": 0.64}, {"name": "网红/MCN", "change_pct": 3.07}, {"name": "短剧/互动影游", "change_pct": 4.71}, {"name": "AI视频", "change_pct": 3.94}]}, {"code": "002929", "name": "润建股份", "hot_rank": 67, "hot_rank_chg": -25, "stock_cnt": 5788, "price": "57.58", "change": "-2.37", "market_id": "33", "circulate_market_value": "12477771900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 68, "hot_rank_chg": -11, "stock_cnt": 5788, "price": "11.85", "change": "3.04", "market_id": "17", "circulate_market_value": "4750451500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 0.66}, {"name": "新零售", "change_pct": 1.4}, {"name": "强势人气股", "change_pct": 3.79}, {"name": "物业管理", "change_pct": 1.32}, {"name": "国企改革", "change_pct": 0.64}, {"name": "地摊经济", "change_pct": 1.46}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 69, "hot_rank_chg": -46, "stock_cnt": 5788, "price": "78.36", "change": "0.66", "market_id": "33", "circulate_market_value": "124393339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 70, "hot_rank_chg": 22, "stock_cnt": 5788, "price": "53.21", "change": "2.27", "market_id": "17", "circulate_market_value": "95214749000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002124", "name": "天邦食品", "hot_rank": 71, "hot_rank_chg": 148, "stock_cnt": 5788, "price": "2.20", "change": "0.00", "market_id": "33", "circulate_market_value": "4339226400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 0.72}, {"name": "养猪", "change_pct": 0.22}, {"name": "社区团购", "change_pct": 1.19}, {"name": "大农业", "change_pct": 0.8}, {"name": "预制菜", "change_pct": 0.83}, {"name": "元宇宙", "change_pct": 3.64}, {"name": "低价股", "change_pct": 1.11}]}, {"code": "600892", "name": "大晟文化", "hot_rank": 72, "hot_rank_chg": -6, "stock_cnt": 5788, "price": "5.20", "change": "2.16", "market_id": "17", "circulate_market_value": "2908461600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 3.59}, {"name": "ST摘帽", "change_pct": 1.86}, {"name": "强势人气股", "change_pct": 3.79}, {"name": "游戏", "change_pct": 4.05}, {"name": "影视", "change_pct": 5.29}, {"name": "短剧/互动影游", "change_pct": 4.71}]}, {"code": "001318", "name": "阳光乳业", "hot_rank": 73, "hot_rank_chg": 200, "stock_cnt": 5788, "price": "14.69", "change": "10.04", "market_id": "33", "circulate_market_value": "4152275400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低温乳制品"}, {"code": "002388", "name": "新亚制程", "hot_rank": 74, "hot_rank_chg": -28, "stock_cnt": 5788, "price": "6.94", "change": "1.76", "market_id": "33", "circulate_market_value": "3513191100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电子特气", "change_pct": 1.5}, {"name": "资产重组", "change_pct": 2.7}, {"name": "仪器仪表", "change_pct": 2.78}, {"name": "锂电池", "change_pct": 1.59}, {"name": "ST摘帽", "change_pct": 1.86}, {"name": "强势人气股", "change_pct": 3.79}, {"name": "有机硅", "change_pct": 1.22}, {"name": "新能源汽车", "change_pct": 1.96}, {"name": "华为产业链", "change_pct": 2.79}, {"name": "供应链金融", "change_pct": 1.6}, {"name": "服务器", "change_pct": 2.32}]}, {"code": "002361", "name": "神剑股份", "hot_rank": 75, "hot_rank_chg": 8, "stock_cnt": 5788, "price": "10.01", "change": "3.30", "market_id": "33", "circulate_market_value": "9519860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.93}, {"name": "大飞机", "change_pct": 1.3}, {"name": "北斗导航", "change_pct": 2.73}, {"name": "高铁轨交", "change_pct": 1.71}, {"name": "军民融合", "change_pct": 1.75}, {"name": "磁悬浮", "change_pct": 1.68}, {"name": "军工", "change_pct": 1.39}, {"name": "碳纤维", "change_pct": 2.16}, {"name": "无人机", "change_pct": 1.89}, {"name": "智能制造", "change_pct": 2.75}, {"name": "3D打印", "change_pct": 2.55}, {"name": "航天", "change_pct": 2.0}, {"name": "卫星互联网", "change_pct": 2.33}, {"name": "国资入股", "change_pct": 1.0}, {"name": "低空经济", "change_pct": 1.92}, {"name": "海洋经济", "change_pct": 1.69}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 76, "hot_rank_chg": 89, "stock_cnt": 5788, "price": "6.75", "change": "5.81", "market_id": "33", "circulate_market_value": "7837591000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.79}, {"name": "影视", "change_pct": 5.29}, {"name": "新疆概念", "change_pct": 0.45}, {"name": "动漫", "change_pct": 5.94}, {"name": "阿里巴巴概念股", "change_pct": 2.73}, {"name": "腾讯概念股", "change_pct": 3.0}, {"name": "短剧/互动影游", "change_pct": 4.71}, {"name": "AI视频", "change_pct": 3.94}, {"name": "IP经济/谷子经济", "change_pct": 2.76}]}, {"code": "002029", "name": "七匹狼", "hot_rank": 77, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "9.42", "change": "3.98", "market_id": "33", "circulate_market_value": "6261470100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.79}, {"name": "纺织服装", "change_pct": 1.78}, {"name": "破净股", "change_pct": 0.21}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 78, "hot_rank_chg": -16, "stock_cnt": 5788, "price": "17.09", "change": "2.22", "market_id": "33", "circulate_market_value": "3028354600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 79, "hot_rank_chg": -48, "stock_cnt": 5788, "price": "249.46", "change": "0.33", "market_id": "33", "circulate_market_value": "1062853540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601595", "name": "上海电影", "hot_rank": 80, "hot_rank_chg": -7, "stock_cnt": 5788, "price": "42.57", "change": "10.00", "market_id": "17", "circulate_market_value": "19079874000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI影视"}, {"code": "603598", "name": "引力传媒", "hot_rank": 81, "hot_rank_chg": 38, "stock_cnt": 5788, "price": "23.69", "change": "9.98", "market_id": "17", "circulate_market_value": "6401353100.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "AI营销"}, {"code": "300058", "name": "蓝色光标", "hot_rank": 82, "hot_rank_chg": -32, "stock_cnt": 5788, "price": "13.34", "change": "2.62", "market_id": "33", "circulate_market_value": "46395590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 83, "hot_rank_chg": 7, "stock_cnt": 5788, "price": "12.00", "change": "6.28", "market_id": "33", "circulate_market_value": "4014449600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.29}, {"name": "饲料", "change_pct": 0.72}, {"name": "一带一路", "change_pct": 0.92}, {"name": "强势人气股", "change_pct": 3.79}, {"name": "保健品", "change_pct": 0.88}, {"name": "山东国企改革", "change_pct": 1.05}, {"name": "污水处理", "change_pct": 1.47}, {"name": "环保", "change_pct": 1.42}, {"name": "食品", "change_pct": 0.84}, {"name": "预制菜", "change_pct": 0.83}, {"name": "国企改革", "change_pct": 0.64}, {"name": "水产养殖", "change_pct": 2.09}, {"name": "广西概念", "change_pct": 1.12}]}, {"code": "603381", "name": "永臻股份", "hot_rank": 84, "hot_rank_chg": -23, "stock_cnt": 5788, "price": "21.89", "change": "10.00", "market_id": "17", "circulate_market_value": "3111393900.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": ""}, {"code": "002712", "name": "思美传媒", "hot_rank": 85, "hot_rank_chg": -27, "stock_cnt": 5788, "price": "6.11", "change": "4.09", "market_id": "33", "circulate_market_value": "3304900700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 2.81}, {"name": "影视", "change_pct": 5.29}, {"name": "直播/短视频", "change_pct": 4.38}, {"name": "知识产权", "change_pct": 3.48}, {"name": "百度概念股", "change_pct": 3.23}, {"name": "传媒", "change_pct": 3.46}, {"name": "快手概念股", "change_pct": 4.05}, {"name": "虚拟数字人", "change_pct": 3.77}, {"name": "字节跳动概念股", "change_pct": 3.5}, {"name": "网红/MCN", "change_pct": 3.07}, {"name": "华为产业链", "change_pct": 2.79}, {"name": "短剧/互动影游", "change_pct": 4.71}, {"name": "AI视频", "change_pct": 3.94}, {"name": "智谱AI", "change_pct": 3.42}, {"name": "IP经济/谷子经济", "change_pct": 2.76}, {"name": "小红书概念股", "change_pct": 3.91}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 86, "hot_rank_chg": 21, "stock_cnt": 5788, "price": "28.46", "change": "1.50", "market_id": "17", "circulate_market_value": "113031367000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 87, "hot_rank_chg": 23, "stock_cnt": 5788, "price": "30.68", "change": "4.32", "market_id": "33", "circulate_market_value": "24063734000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600853", "name": "龙建股份", "hot_rank": 88, "hot_rank_chg": 153, "stock_cnt": 5788, "price": "3.90", "change": "1.30", "market_id": "17", "circulate_market_value": "3953447600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.92}, {"name": "水利", "change_pct": 1.14}, {"name": "智慧城市", "change_pct": 2.57}, {"name": "PPP", "change_pct": -0.9}, {"name": "冰雪产业", "change_pct": 1.37}, {"name": "振兴东北", "change_pct": 1.03}, {"name": "大基建", "change_pct": 0.74}, {"name": "中俄贸易", "change_pct": 1.11}, {"name": "新型城镇化", "change_pct": 1.69}, {"name": "黑龙江自贸区", "change_pct": 0.8}, {"name": "旧改", "change_pct": 1.33}]}, {"code": "600637", "name": "东方明珠", "hot_rank": 89, "hot_rank_chg": -26, "stock_cnt": 5788, "price": "8.39", "change": "-2.89", "market_id": "17", "circulate_market_value": "28206339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": 4.23}, {"name": "高管增持", "change_pct": 1.32}, {"name": "超高清视频", "change_pct": 3.73}, {"name": "电竞", "change_pct": 2.97}, {"name": "上海国企改革", "change_pct": 0.66}, {"name": "游戏", "change_pct": 4.05}, {"name": "物联网", "change_pct": 2.81}, {"name": "教育", "change_pct": 2.74}, {"name": "智慧城市", "change_pct": 2.57}, {"name": "破净股", "change_pct": 0.21}, {"name": "传媒", "change_pct": 3.46}, {"name": "东数西算/算力", "change_pct": 2.36}, {"name": "国企改革", "change_pct": 0.64}, {"name": "在线教育", "change_pct": 2.25}, {"name": "AI大模型/智能体", "change_pct": 2.42}, {"name": "短剧/互动影游", "change_pct": 4.71}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 90, "hot_rank_chg": 57, "stock_cnt": 5788, "price": "17.12", "change": "8.97", "market_id": "17", "circulate_market_value": "7608888900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 91, "hot_rank_chg": 11, "stock_cnt": 5788, "price": "4.32", "change": "3.10", "market_id": "33", "circulate_market_value": "25292723000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 2.81}, {"name": "云计算数据中心", "change_pct": 2.69}, {"name": "水利", "change_pct": 1.14}, {"name": "直播/短视频", "change_pct": 4.38}, {"name": "大数据", "change_pct": 2.4}, {"name": "园林", "change_pct": 2.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 3.7}, {"name": "数字经济", "change_pct": 2.49}, {"name": "腾讯概念股", "change_pct": 3.0}, {"name": "传媒", "change_pct": 3.46}, {"name": "理想汽车概念股", "change_pct": 3.35}, {"name": "第三代半导体", "change_pct": 2.51}, {"name": "快手概念股", "change_pct": 4.05}, {"name": "IGBT", "change_pct": 2.3}, {"name": "虚拟数字人", "change_pct": 3.77}, {"name": "AIGC概念", "change_pct": 3.13}, {"name": "字节跳动概念股", "change_pct": 3.5}, {"name": "氮化镓", "change_pct": 2.51}, {"name": "AI营销", "change_pct": 4.01}, {"name": "华为产业链", "change_pct": 2.79}, {"name": "AI大模型/智能体", "change_pct": 2.42}, {"name": "多模态", "change_pct": 3.66}, {"name": "AI视频", "change_pct": 3.94}, {"name": "液冷服务器", "change_pct": 2.98}, {"name": "小红书概念股", "change_pct": 3.91}, {"name": "区块链", "change_pct": 2.36}]}, {"code": "000725", "name": "京东方A", "hot_rank": 92, "hot_rank_chg": -5, "stock_cnt": 5788, "price": "4.51", "change": "1.34", "market_id": "33", "circulate_market_value": "159859450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 3.83}, {"name": "手机产业链", "change_pct": 3.88}, {"name": "超高清视频", "change_pct": 3.73}, {"name": "苹果产业链", "change_pct": 4.22}, {"name": "电竞", "change_pct": 2.97}, {"name": "半导体", "change_pct": 3.13}, {"name": "人工智能", "change_pct": 2.81}, {"name": "互联网医疗", "change_pct": 1.58}, {"name": "VR&AR", "change_pct": 4.26}, {"name": "OLED", "change_pct": 3.22}, {"name": "京津冀", "change_pct": 1.07}, {"name": "物联网", "change_pct": 2.81}, {"name": "指纹识别", "change_pct": 3.53}, {"name": "汽车零部件", "change_pct": 2.84}, {"name": "白马股", "change_pct": -0.15}, {"name": "智能制造", "change_pct": 2.75}, {"name": "小米概念股", "change_pct": 3.7}, {"name": "国产芯片", "change_pct": 3.24}, {"name": "液晶面板/LCD", "change_pct": 2.72}, {"name": "全息概念", "change_pct": 3.23}, {"name": "理想汽车概念股", "change_pct": 3.35}, {"name": "MicroLED", "change_pct": 3.29}, {"name": "钙钛矿电池", "change_pct": 1.94}, {"name": "智能手表", "change_pct": 4.51}, {"name": "MiniLED", "change_pct": 3.18}, {"name": "传感器", "change_pct": 3.47}, {"name": "大硅片", "change_pct": 1.99}, {"name": "AI PC", "change_pct": 3.67}, {"name": "华为产业链", "change_pct": 2.79}, {"name": "回购", "change_pct": 1.99}, {"name": "光电共封装CPO", "change_pct": 3.23}, {"name": "智能眼镜/MR头显", "change_pct": 4.32}, {"name": "玻璃基板封装", "change_pct": 3.17}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 93, "hot_rank_chg": -17, "stock_cnt": 5788, "price": "13.63", "change": "1.79", "market_id": "17", "circulate_market_value": "9077580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 94, "hot_rank_chg": 17, "stock_cnt": 5788, "price": "35.49", "change": "3.65", "market_id": "33", "circulate_market_value": "130995187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 95, "hot_rank_chg": 77, "stock_cnt": 5788, "price": "13.00", "change": "2.20", "market_id": "17", "circulate_market_value": "27190048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 96, "hot_rank_chg": 20, "stock_cnt": 5788, "price": "20.13", "change": "2.18", "market_id": "33", "circulate_market_value": "9657873600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 97, "hot_rank_chg": 23, "stock_cnt": 5788, "price": "13.97", "change": "3.02", "market_id": "17", "circulate_market_value": "46091212000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 98, "hot_rank_chg": 5, "stock_cnt": 5788, "price": "13.21", "change": "3.37", "market_id": "33", "circulate_market_value": "20992289000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 99, "hot_rank_chg": 41, "stock_cnt": 5788, "price": "10.06", "change": "1.21", "market_id": "17", "circulate_market_value": "14815431000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.27}, {"name": "电力体制改革", "change_pct": -0.33}, {"name": "火电", "change_pct": -0.33}, {"name": "氢能源/燃料电池", "change_pct": 1.36}, {"name": "风电", "change_pct": 1.01}, {"name": "国企改革", "change_pct": 0.64}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 100, "hot_rank_chg": 84, "stock_cnt": 5788, "price": "106.26", "change": "2.85", "market_id": "17", "circulate_market_value": "29284021000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};