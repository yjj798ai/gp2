const UPDATE_TIME = "2026-11-10 21:10";
const THS_HOT = [
  {
    "name": "人形机器人",
    "rise": 3.32,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": 2.23,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续256天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "短剧游戏",
    "rise": 4.51,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "AI视频",
    "rise": 4.67,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "光伏概念",
    "rise": 1.93,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "机器人概念",
    "rise": 2.71,
    "rate": 0,
    "tag": "34家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.88,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续327天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "冰雪产业",
    "rise": 1.49,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "AI应用",
    "rise": 2.63,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续85天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "人工智能",
    "rise": 2.46,
    "rate": 0,
    "tag": "25家涨停",
    "hotTag": "连续34天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "AI眼镜",
    "rise": 4.07,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886085"
  },
  {
    "name": "创新药",
    "rise": 0.75,
    "rate": 0,
    "tag": "",
    "hotTag": "连续157天上榜",
    "rankChg": 1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 2.74,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续150天上榜",
    "rankChg": -1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "智能音箱",
    "rise": 4.82,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "VRETF",
    "code": "885771"
  },
  {
    "name": "存储芯片",
    "rise": 2.28,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续280天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "芯片概念",
    "rise": 2.52,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续37天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "算力租赁",
    "rise": 2.46,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "文化传媒概念",
    "rise": 3.71,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885418"
  },
  {
    "name": "猪肉",
    "rise": 0.15,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "白酒概念",
    "rise": 0.8,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  }
];
const THS_EVENTS = [
  {
    "title": "逼近3000亿，游戏IP如何从“虚拟内容”走向“实体消费”？",
    "desc": "",
    "heat": 806797,
    "direction": "游戏",
    "themes": [
      "游戏",
      "手机游戏",
      "云游戏",
      "电子竞技"
    ],
    "stocks": [
      {
        "name": "佳创视讯",
        "code": "300264",
        "chg": 20.072993
      }
    ]
  },
  {
    "title": "包揽海外下载榜前三 “duanju”成热词 AI重塑短剧出海赛道",
    "desc": "",
    "heat": 626555,
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
        "name": "丝路视觉",
        "code": "300556",
        "chg": 20.010787
      }
    ]
  },
  {
    "title": "物理AI加速落地 苹果披露机器人“大脑”HALO进展 关注减速器、伺服等零部件",
    "desc": "",
    "heat": 608375,
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
    "title": "北京支持超节点服务器、AI终端等新技术新产品！",
    "desc": "",
    "heat": 524750,
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
    "title": "面向太空算力网，“星云星座计划”发布",
    "desc": "",
    "heat": 415023,
    "direction": "太空算力",
    "themes": [
      "太空算力",
      "太空光伏"
    ],
    "stocks": [
      {
        "name": "钧达股份",
        "code": "002865",
        "chg": 10.011249
      }
    ]
  },
  {
    "title": "谷歌TPU一年扩容至四款，剑指英伟达！机构预计2028年相关销售额将突破1350亿美元",
    "desc": "",
    "heat": 392142,
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
    "title": "李强签署国务院令公布《中医药传统知识保护条例》",
    "desc": "",
    "heat": 137527,
    "direction": "中医药",
    "themes": [
      "中药",
      "中药材种植"
    ],
    "stocks": [
      {
        "name": "陇神戎发",
        "code": "300534",
        "chg": 10.176125
      }
    ]
  },
  {
    "title": "机构：美国中期选举结果落地之后，一定程度缓解贵金属的压力",
    "desc": "",
    "heat": 81766,
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
        "chg": 5.976521
      }
    ]
  },
  {
    "title": "特朗普称将与中俄元首在APEC讨论美伊冲突及无核化问题，外交部回应",
    "desc": "",
    "heat": 25473,
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
        "chg": 5.976521
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "动漫",
    "change": "+6.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+6.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+5.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "+5.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "强势人气股",
    "change": "+4.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+4.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "云游戏",
    "change": "+4.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子后视镜",
    "change": "+4.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+4.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "手游",
    "change": "+4.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能音箱",
    "change": "+4.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "VR&AR",
    "change": "+4.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物理AI",
    "change": "+4.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "广电",
    "change": "+4.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "WiFi",
    "change": "+4.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "线控底盘",
    "change": "+4.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+4.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能手表",
    "change": "+4.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+4.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI视频",
    "change": "+4.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 1,
    "hot_rank_chg": 4,
    "stock_cnt": 5887,
    "price": "6.06",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "5218645100.00",
    "change_type": "1",
    "change_section": "12",
    "change_days": "8",
    "change_reason": "光伏边框",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 1.46
      },
      {
        "name": "一带一路",
        "change_pct": 0.95
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.29
      },
      {
        "name": "光伏",
        "change_pct": 1.62
      },
      {
        "name": "有色金属",
        "change_pct": 1.32
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.95
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.68
      },
      {
        "name": "自贸区",
        "change_pct": 1.23
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.79
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5887,
    "price": "4.62",
    "change": "5.72",
    "market_id": "33",
    "circulate_market_value": "7304087300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 1.68
      },
      {
        "name": "体外诊断",
        "change_pct": 1.23
      },
      {
        "name": "医疗器械",
        "change_pct": 1.23
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "基因测序",
        "change_pct": 1.36
      },
      {
        "name": "预制菜",
        "change_pct": 0.93
      },
      {
        "name": "水产养殖",
        "change_pct": 1.97
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.28
      },
      {
        "name": "海洋经济",
        "change_pct": 1.72
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 3,
    "hot_rank_chg": 0,
    "stock_cnt": 5887,
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
        "change_pct": 2.71
      },
      {
        "name": "边缘计算",
        "change_pct": 3.59
      },
      {
        "name": "核电",
        "change_pct": 1.37
      },
      {
        "name": "海工装备",
        "change_pct": 0.71
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.55
      },
      {
        "name": "冷链",
        "change_pct": 1.42
      },
      {
        "name": "地热",
        "change_pct": 1.39
      },
      {
        "name": "储能",
        "change_pct": 1.38
      },
      {
        "name": "碳中和",
        "change_pct": 0.71
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 1.64
      },
      {
        "name": "汽车热管理",
        "change_pct": 2.5
      },
      {
        "name": "热泵",
        "change_pct": 2.17
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.79
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 2.49
      },
      {
        "name": "海洋经济",
        "change_pct": 1.72
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 4,
    "hot_rank_chg": 2,
    "stock_cnt": 5887,
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
        "change_pct": 4.91
      },
      {
        "name": "物联网",
        "change_pct": 2.74
      },
      {
        "name": "LED",
        "change_pct": 3.69
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.39
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 5,
    "hot_rank_chg": 3,
    "stock_cnt": 5887,
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
        "change_pct": 4.91
      },
      {
        "name": "光伏",
        "change_pct": 1.62
      },
      {
        "name": "家电",
        "change_pct": 2.59
      },
      {
        "name": "储能",
        "change_pct": 1.38
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 2.17
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 3.09
      },
      {
        "name": "厨卫家电",
        "change_pct": 1.73
      },
      {
        "name": "华为产业链",
        "change_pct": 2.75
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 6,
    "hot_rank_chg": 15,
    "stock_cnt": 5887,
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
        "change_pct": 4.55
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "游戏",
        "change_pct": 5.04
      },
      {
        "name": "影视",
        "change_pct": 6.05
      },
      {
        "name": "低价股",
        "change_pct": 1.03
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      },
      {
        "name": "AI视频",
        "change_pct": 4.19
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 7,
    "hot_rank_chg": 2,
    "stock_cnt": 5887,
    "price": "4.61",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "6018216300.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "5",
    "change_reason": "冰雪旅游保障",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "高速公路",
        "change_pct": 0.02
      },
      {
        "name": "振兴东北",
        "change_pct": 1.14
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 1.24
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 10,
    "hot_rank_chg": -3,
    "stock_cnt": 5887,
    "price": "11.29",
    "change": "7.12",
    "market_id": "33",
    "circulate_market_value": "11966893900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 2.14
      },
      {
        "name": "电子烟",
        "change_pct": 3.4
      },
      {
        "name": "一带一路",
        "change_pct": 0.95
      },
      {
        "name": "造纸",
        "change_pct": 2.0
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "包装印刷",
        "change_pct": 2.31
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.39
      },
      {
        "name": "太空算力",
        "change_pct": 3.17
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 11,
    "hot_rank_chg": 9,
    "stock_cnt": 5887,
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
        "change_pct": 2.38
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "京津冀",
        "change_pct": 1.03
      },
      {
        "name": "旅游",
        "change_pct": 0.62
      },
      {
        "name": "园林",
        "change_pct": 2.32
      },
      {
        "name": "海绵城市",
        "change_pct": 1.84
      },
      {
        "name": "固废处理",
        "change_pct": 1.12
      },
      {
        "name": "光伏",
        "change_pct": 1.62
      },
      {
        "name": "风电",
        "change_pct": 1.05
      },
      {
        "name": "雄安新区",
        "change_pct": 1.41
      },
      {
        "name": "北京城市规划",
        "change_pct": 1.55
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": 1.48
      },
      {
        "name": "储能",
        "change_pct": 1.38
      },
      {
        "name": "碳中和",
        "change_pct": 0.71
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.41
      },
      {
        "name": "汽车拆解",
        "change_pct": 1.98
      },
      {
        "name": "土壤修复",
        "change_pct": 1.29
      },
      {
        "name": "核污染防治",
        "change_pct": 1.6
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.35
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.87
      },
      {
        "name": "低价股",
        "change_pct": 1.03
      },
      {
        "name": "西部大开发",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 12,
    "hot_rank_chg": 5,
    "stock_cnt": 5887,
    "price": "5.60",
    "change": "4.09",
    "market_id": "17",
    "circulate_market_value": "6499037700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "纺织服装",
        "change_pct": 1.83
      },
      {
        "name": "浙江国企改革",
        "change_pct": 1.5
      },
      {
        "name": "影视",
        "change_pct": 6.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 13,
    "hot_rank_chg": 9,
    "stock_cnt": 5887,
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
        "change_pct": 1.62
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.48
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "信托",
        "change_pct": -0.52
      },
      {
        "name": "民营医院",
        "change_pct": 1.19
      },
      {
        "name": "社区团购",
        "change_pct": 1.4
      },
      {
        "name": "大金融",
        "change_pct": 0.11
      },
      {
        "name": "餐饮",
        "change_pct": 0.9
      },
      {
        "name": "首发经济",
        "change_pct": 1.99
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 17,
    "hot_rank_chg": 35,
    "stock_cnt": 5887,
    "price": "5.60",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "3132189400.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "5",
    "change_reason": "短剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 4.55
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.26
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "游戏",
        "change_pct": 5.04
      },
      {
        "name": "影视",
        "change_pct": 6.05
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 21,
    "hot_rank_chg": 18,
    "stock_cnt": 5887,
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
        "change_pct": 4.55
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "VR&AR",
        "change_pct": 4.43
      },
      {
        "name": "游戏",
        "change_pct": 5.04
      },
      {
        "name": "影视",
        "change_pct": 6.05
      },
      {
        "name": "直播/短视频",
        "change_pct": 4.5
      },
      {
        "name": "动漫",
        "change_pct": 6.19
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.92
      },
      {
        "name": "传媒",
        "change_pct": 3.72
      },
      {
        "name": "元宇宙",
        "change_pct": 3.92
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.12
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 22,
    "hot_rank_chg": 26,
    "stock_cnt": 5887,
    "price": "12.21",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5066931700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "卫星通信终端",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 2.63
      },
      {
        "name": "5G",
        "change_pct": 2.64
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.55
      },
      {
        "name": "LED",
        "change_pct": 3.69
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.39
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": 3.23
      }
    ]
  },
  {
    "code": "300118",
    "name": "东方日升",
    "hot_rank": 24,
    "hot_rank_chg": -5,
    "stock_cnt": 5887,
    "price": "11.59",
    "change": "6.82",
    "market_id": "33",
    "circulate_market_value": "10738361900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": 3.58
      },
      {
        "name": "光伏",
        "change_pct": 1.62
      },
      {
        "name": "储能",
        "change_pct": 1.38
      },
      {
        "name": "BIPV概念",
        "change_pct": 1.51
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.27
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 1.87
      },
      {
        "name": "光伏胶膜",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "000525",
    "name": "红太阳",
    "hot_rank": 36,
    "hot_rank_chg": 6,
    "stock_cnt": 5887,
    "price": "5.46",
    "change": "-1.09",
    "market_id": "33",
    "circulate_market_value": "6070209600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "草铵膦",
        "change_pct": -0.89
      },
      {
        "name": "农药",
        "change_pct": 0.35
      },
      {
        "name": "长寿药NMN",
        "change_pct": -0.1
      },
      {
        "name": "大农业",
        "change_pct": 0.79
      },
      {
        "name": "虫害防治",
        "change_pct": 0.12
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 37,
    "hot_rank_chg": 1,
    "stock_cnt": 5887,
    "price": "8.50",
    "change": "5.07",
    "market_id": "33",
    "circulate_market_value": "13829447000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.83
      },
      {
        "name": "电竞",
        "change_pct": 3.25
      },
      {
        "name": "手游",
        "change_pct": 4.55
      },
      {
        "name": "人工智能",
        "change_pct": 2.82
      },
      {
        "name": "游戏",
        "change_pct": 5.04
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.92
      },
      {
        "name": "传媒",
        "change_pct": 3.72
      },
      {
        "name": "快手概念股",
        "change_pct": 4.22
      },
      {
        "name": "元宇宙",
        "change_pct": 3.92
      },
      {
        "name": "虚拟数字人",
        "change_pct": 4.02
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.35
      },
      {
        "name": "web3.0",
        "change_pct": 3.61
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.24
      },
      {
        "name": "数据要素",
        "change_pct": 2.87
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.65
      },
      {
        "name": "AI营销",
        "change_pct": 4.2
      },
      {
        "name": "ChatGPT",
        "change_pct": 3.35
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.16
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.42
      },
      {
        "name": "人形机器人",
        "change_pct": 3.92
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      },
      {
        "name": "多模态",
        "change_pct": 3.61
      },
      {
        "name": "AI视频",
        "change_pct": 4.19
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.12
      },
      {
        "name": "小红书概念股",
        "change_pct": 4.09
      }
    ]
  },
  {
    "code": "002347",
    "name": "泰尔股份",
    "hot_rank": 39,
    "hot_rank_chg": 50,
    "stock_cnt": 5887,
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
        "change_pct": 1.55
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "人工智能",
        "change_pct": 2.82
      },
      {
        "name": "工业自动化",
        "change_pct": 3.12
      },
      {
        "name": "风电",
        "change_pct": 1.05
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.95
      },
      {
        "name": "机器人",
        "change_pct": 3.22
      },
      {
        "name": "激光",
        "change_pct": 2.89
      },
      {
        "name": "机器视觉",
        "change_pct": 3.75
      },
      {
        "name": "智能制造",
        "change_pct": 2.7
      },
      {
        "name": "3D打印",
        "change_pct": 2.56
      },
      {
        "name": "工业互联网",
        "change_pct": 2.35
      },
      {
        "name": "数字经济",
        "change_pct": 2.62
      },
      {
        "name": "动力电池回收",
        "change_pct": 1.44
      },
      {
        "name": "超级电容",
        "change_pct": 1.58
      }
    ]
  },
  {
    "code": "300052",
    "name": "中青宝",
    "hot_rank": 40,
    "hot_rank_chg": 83,
    "stock_cnt": 5887,
    "price": "11.82",
    "change": "20.00",
    "market_id": "33",
    "circulate_market_value": "3095047600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "元宇宙",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 4.55
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.26
      },
      {
        "name": "网络安全",
        "change_pct": 2.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.55
      },
      {
        "name": "游戏",
        "change_pct": 5.04
      },
      {
        "name": "数字经济",
        "change_pct": 2.62
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.79
      },
      {
        "name": "食品安全",
        "change_pct": 1.6
      },
      {
        "name": "NFT",
        "change_pct": 4.15
      },
      {
        "name": "元宇宙",
        "change_pct": 3.92
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.35
      },
      {
        "name": "云游戏",
        "change_pct": 4.69
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.28
      },
      {
        "name": "华为产业链",
        "change_pct": 2.75
      },
      {
        "name": "区块链",
        "change_pct": 2.5
      }
    ]
  },
  {
    "code": "002160",
    "name": "常铝股份",
    "hot_rank": 41,
    "hot_rank_chg": 321,
    "stock_cnt": 5887,
    "price": "4.00",
    "change": "9.89",
    "market_id": "33",
    "circulate_market_value": "4122918000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "锂电池",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 1.46
      },
      {
        "name": "特斯拉",
        "change_pct": 2.37
      },
      {
        "name": "锂电池",
        "change_pct": 1.55
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.14
      },
      {
        "name": "有色金属",
        "change_pct": 1.32
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.95
      },
      {
        "name": "智能制造",
        "change_pct": 2.7
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.68
      },
      {
        "name": "钠电池",
        "change_pct": 1.08
      },
      {
        "name": "工业母机",
        "change_pct": 2.73
      },
      {
        "name": "汽车热管理",
        "change_pct": 2.5
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "生物安全",
        "change_pct": 1.76
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 42,
    "hot_rank_chg": 11,
    "stock_cnt": 5887,
    "price": "10.95",
    "change": "0.46",
    "market_id": "17",
    "circulate_market_value": "7027526200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 1.81
      },
      {
        "name": "农业种植",
        "change_pct": 0.31
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.99
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.41
      },
      {
        "name": "休闲食品",
        "change_pct": 0.89
      },
      {
        "name": "食品",
        "change_pct": 0.95
      },
      {
        "name": "食品安全",
        "change_pct": 1.6
      },
      {
        "name": "社区团购",
        "change_pct": 1.4
      },
      {
        "name": "大农业",
        "change_pct": 0.79
      },
      {
        "name": "预制菜",
        "change_pct": 0.93
      },
      {
        "name": "人造肉",
        "change_pct": 1.29
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 44,
    "hot_rank_chg": 17,
    "stock_cnt": 5887,
    "price": "6.33",
    "change": "2.43",
    "market_id": "33",
    "circulate_market_value": "4843340800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.81
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.48
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "医药商业",
        "change_pct": 1.06
      },
      {
        "name": "保健品",
        "change_pct": 1.0
      },
      {
        "name": "民营医院",
        "change_pct": 1.19
      },
      {
        "name": "医药",
        "change_pct": 0.89
      },
      {
        "name": "食品",
        "change_pct": 0.95
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.13
      },
      {
        "name": "口腔",
        "change_pct": 1.09
      },
      {
        "name": "医美",
        "change_pct": 1.04
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.28
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 45,
    "hot_rank_chg": 65,
    "stock_cnt": 5887,
    "price": "6.96",
    "change": "4.04",
    "market_id": "33",
    "circulate_market_value": "13329043400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.29
      },
      {
        "name": "林业",
        "change_pct": 1.55
      },
      {
        "name": "碳中和",
        "change_pct": 0.71
      },
      {
        "name": "自贸区",
        "change_pct": 1.23
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 46,
    "hot_rank_chg": 27,
    "stock_cnt": 5887,
    "price": "11.92",
    "change": "3.65",
    "market_id": "17",
    "circulate_market_value": "4778513200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 0.63
      },
      {
        "name": "新零售",
        "change_pct": 1.62
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "物业管理",
        "change_pct": 1.32
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "地摊经济",
        "change_pct": 1.35
      }
    ]
  },
  {
    "code": "002045",
    "name": "国光电器",
    "hot_rank": 49,
    "hot_rank_chg": 58,
    "stock_cnt": 5887,
    "price": "11.41",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "6410513200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI眼镜",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": 3.69
      },
      {
        "name": "电子烟",
        "change_pct": 3.4
      },
      {
        "name": "苹果产业链",
        "change_pct": 4.05
      },
      {
        "name": "锂电池",
        "change_pct": 1.55
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "VR&AR",
        "change_pct": 4.43
      },
      {
        "name": "智能音箱",
        "change_pct": 4.42
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.95
      },
      {
        "name": "黑色家电",
        "change_pct": 3.66
      },
      {
        "name": "家电",
        "change_pct": 2.59
      },
      {
        "name": "固态电池",
        "change_pct": 1.4
      },
      {
        "name": "NFT",
        "change_pct": 4.15
      },
      {
        "name": "元宇宙",
        "change_pct": 3.92
      },
      {
        "name": "无线耳机",
        "change_pct": 3.59
      },
      {
        "name": "智能手表",
        "change_pct": 4.22
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 3.09
      },
      {
        "name": "华为产业链",
        "change_pct": 2.75
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.16
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 50,
    "hot_rank_chg": 21,
    "stock_cnt": 5887,
    "price": "4.63",
    "change": "3.35",
    "market_id": "33",
    "circulate_market_value": "12281309100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "装修装饰",
        "change_pct": 1.76
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.42
      },
      {
        "name": "破净股",
        "change_pct": 0.16
      },
      {
        "name": "航天",
        "change_pct": 2.17
      },
      {
        "name": "旧改",
        "change_pct": 1.46
      }
    ]
  },
  {
    "code": "600408",
    "name": "安泰集团",
    "hot_rank": 52,
    "hot_rank_chg": 53,
    "stock_cnt": 5887,
    "price": "3.65",
    "change": "9.94",
    "market_id": "17",
    "circulate_market_value": "3674820000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "煤炭",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.76
      },
      {
        "name": "钢铁",
        "change_pct": 0.49
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "煤化工",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 54,
    "hot_rank_chg": 29,
    "stock_cnt": 5887,
    "price": "11.67",
    "change": "3.27",
    "market_id": "33",
    "circulate_market_value": "3900801600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.23
      },
      {
        "name": "饲料",
        "change_pct": 0.62
      },
      {
        "name": "一带一路",
        "change_pct": 0.95
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "保健品",
        "change_pct": 1.0
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.14
      },
      {
        "name": "污水处理",
        "change_pct": 1.55
      },
      {
        "name": "环保",
        "change_pct": 1.48
      },
      {
        "name": "食品",
        "change_pct": 0.95
      },
      {
        "name": "预制菜",
        "change_pct": 0.93
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "水产养殖",
        "change_pct": 1.97
      },
      {
        "name": "广西概念",
        "change_pct": 1.1
      }
    ]
  },
  {
    "code": "300133",
    "name": "华策影视",
    "hot_rank": 57,
    "hot_rank_chg": -31,
    "stock_cnt": 5887,
    "price": "11.29",
    "change": "16.39",
    "market_id": "33",
    "circulate_market_value": "18786564000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "VR&AR",
        "change_pct": 4.43
      },
      {
        "name": "影视",
        "change_pct": 6.05
      },
      {
        "name": "大数据",
        "change_pct": 2.4
      },
      {
        "name": "教育",
        "change_pct": 2.81
      },
      {
        "name": "动漫",
        "change_pct": 6.19
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "知识产权",
        "change_pct": 3.46
      },
      {
        "name": "百度概念股",
        "change_pct": 3.38
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.92
      },
      {
        "name": "NFT",
        "change_pct": 4.15
      },
      {
        "name": "元宇宙",
        "change_pct": 3.92
      },
      {
        "name": "虚拟数字人",
        "change_pct": 4.02
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.24
      },
      {
        "name": "网红/MCN",
        "change_pct": 3.08
      },
      {
        "name": "华为产业链",
        "change_pct": 2.75
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.16
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.42
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      },
      {
        "name": "多模态",
        "change_pct": 3.61
      },
      {
        "name": "AI视频",
        "change_pct": 4.19
      },
      {
        "name": "Kimi概念",
        "change_pct": 4.18
      },
      {
        "name": "智谱AI",
        "change_pct": 3.52
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.12
      }
    ]
  },
  {
    "code": "002088",
    "name": "鲁阳节能",
    "hot_rank": 62,
    "hot_rank_chg": 14,
    "stock_cnt": 5887,
    "price": "11.20",
    "change": "1.08",
    "market_id": "33",
    "circulate_market_value": "5666803900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 1.55
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "大气治理",
        "change_pct": 1.51
      },
      {
        "name": "雄安新区",
        "change_pct": 1.41
      },
      {
        "name": "耐火材料",
        "change_pct": 0.04
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.95
      },
      {
        "name": "环保",
        "change_pct": 1.48
      },
      {
        "name": "船舶",
        "change_pct": -0.07
      },
      {
        "name": "建筑节能",
        "change_pct": 1.75
      },
      {
        "name": "气凝胶",
        "change_pct": 2.65
      },
      {
        "name": "旧改",
        "change_pct": 1.46
      }
    ]
  },
  {
    "code": "002029",
    "name": "七匹狼",
    "hot_rank": 63,
    "hot_rank_chg": 21,
    "stock_cnt": 5887,
    "price": "9.53",
    "change": "5.30",
    "market_id": "33",
    "circulate_market_value": "6341318800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "纺织服装",
        "change_pct": 1.83
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "300426",
    "name": "华智数媒",
    "hot_rank": 64,
    "hot_rank_chg": 10,
    "stock_cnt": 5887,
    "price": "11.47",
    "change": "19.98",
    "market_id": "33",
    "circulate_market_value": "4588000000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "浙江国企改革",
        "change_pct": 1.5
      },
      {
        "name": "影视",
        "change_pct": 6.05
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.79
      },
      {
        "name": "NFT",
        "change_pct": 4.15
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.12
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 65,
    "hot_rank_chg": 14,
    "stock_cnt": 5887,
    "price": "4.98",
    "change": "5.29",
    "market_id": "17",
    "circulate_market_value": "6067691900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 1.46
      },
      {
        "name": "煤炭",
        "change_pct": -0.76
      },
      {
        "name": "有色金属",
        "change_pct": 1.32
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "600278",
    "name": "东方创业",
    "hot_rank": 66,
    "hot_rank_chg": 15,
    "stock_cnt": 5887,
    "price": "8.19",
    "change": "4.60",
    "market_id": "17",
    "circulate_market_value": "7047647800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.68
      },
      {
        "name": "快递物流",
        "change_pct": 0.97
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.63
      },
      {
        "name": "一带一路",
        "change_pct": 0.95
      },
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "破净股",
        "change_pct": 0.16
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 0.79
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "进口博览会",
        "change_pct": 0.94
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.75
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "自贸区",
        "change_pct": 1.23
      }
    ]
  },
  {
    "code": "000993",
    "name": "闽东电力",
    "hot_rank": 77,
    "hot_rank_chg": 137,
    "stock_cnt": 5887,
    "price": "12.60",
    "change": "2.27",
    "market_id": "33",
    "circulate_market_value": "5770188300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": -0.34
      },
      {
        "name": "水电",
        "change_pct": -0.21
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.29
      },
      {
        "name": "有色 · 钼",
        "change_pct": 1.75
      },
      {
        "name": "光伏",
        "change_pct": 1.62
      },
      {
        "name": "风电",
        "change_pct": 1.05
      },
      {
        "name": "有色金属",
        "change_pct": 1.32
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 1.59
      },
      {
        "name": "船舶",
        "change_pct": -0.07
      },
      {
        "name": "自贸区",
        "change_pct": 1.23
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 78,
    "hot_rank_chg": -13,
    "stock_cnt": 5887,
    "price": "12.00",
    "change": "4.08",
    "market_id": "33",
    "circulate_market_value": "13614445000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 2.71
      },
      {
        "name": "足球",
        "change_pct": 2.5
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.01
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.62
      },
      {
        "name": "传媒",
        "change_pct": 3.72
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.24
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.65
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "网红/MCN",
        "change_pct": 3.08
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      },
      {
        "name": "AI视频",
        "change_pct": 4.19
      }
    ]
  },
  {
    "code": "600637",
    "name": "东方明珠",
    "hot_rank": 80,
    "hot_rank_chg": 38,
    "stock_cnt": 5887,
    "price": "8.37",
    "change": "-3.12",
    "market_id": "17",
    "circulate_market_value": "28139101000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 4.42
      },
      {
        "name": "高管增持",
        "change_pct": 1.1
      },
      {
        "name": "超高清视频",
        "change_pct": 3.73
      },
      {
        "name": "电竞",
        "change_pct": 3.25
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.63
      },
      {
        "name": "游戏",
        "change_pct": 5.04
      },
      {
        "name": "物联网",
        "change_pct": 2.74
      },
      {
        "name": "教育",
        "change_pct": 2.81
      },
      {
        "name": "智慧城市",
        "change_pct": 2.62
      },
      {
        "name": "破净股",
        "change_pct": 0.16
      },
      {
        "name": "传媒",
        "change_pct": 3.72
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.35
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "在线教育",
        "change_pct": 2.44
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.42
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      }
    ]
  },
  {
    "code": "000810",
    "name": "创维数字",
    "hot_rank": 81,
    "hot_rank_chg": 115,
    "stock_cnt": 5887,
    "price": "12.14",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "13574438000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "具身智能数据采集",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 4.42
      },
      {
        "name": "折叠屏",
        "change_pct": 3.47
      },
      {
        "name": "超高清视频",
        "change_pct": 3.73
      },
      {
        "name": "半导体",
        "change_pct": 2.62
      },
      {
        "name": "5G",
        "change_pct": 2.64
      },
      {
        "name": "人工智能",
        "change_pct": 2.82
      },
      {
        "name": "VR&AR",
        "change_pct": 4.43
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.55
      },
      {
        "name": "光通信",
        "change_pct": 2.59
      },
      {
        "name": "OLED",
        "change_pct": 2.93
      },
      {
        "name": "物联网",
        "change_pct": 2.74
      },
      {
        "name": "教育",
        "change_pct": 2.81
      },
      {
        "name": "智慧城市",
        "change_pct": 2.62
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.88
      },
      {
        "name": "智能音箱",
        "change_pct": 4.42
      },
      {
        "name": "机器人",
        "change_pct": 3.22
      },
      {
        "name": "黑色家电",
        "change_pct": 3.66
      },
      {
        "name": "家电",
        "change_pct": 2.59
      },
      {
        "name": "WiFi",
        "change_pct": 4.28
      },
      {
        "name": "数字经济",
        "change_pct": 2.62
      },
      {
        "name": "百度概念股",
        "change_pct": 3.38
      },
      {
        "name": "国产操作系统",
        "change_pct": 2.9
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.92
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.51
      },
      {
        "name": "全息概念",
        "change_pct": 3.66
      },
      {
        "name": "元宇宙",
        "change_pct": 3.92
      },
      {
        "name": "F5G",
        "change_pct": 3.78
      },
      {
        "name": "电子后视镜",
        "change_pct": 4.54
      },
      {
        "name": "华为海思",
        "change_pct": 3.25
      },
      {
        "name": "教育信息化",
        "change_pct": 2.93
      },
      {
        "name": "在线教育",
        "change_pct": 2.44
      },
      {
        "name": "云游戏",
        "change_pct": 4.69
      },
      {
        "name": "MiniLED",
        "change_pct": 2.98
      },
      {
        "name": "华为产业链",
        "change_pct": 2.75
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.16
      },
      {
        "name": "星闪概念",
        "change_pct": 3.91
      },
      {
        "name": "智能座舱",
        "change_pct": 3.96
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      },
      {
        "name": "多模态",
        "change_pct": 3.61
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 84,
    "hot_rank_chg": 35,
    "stock_cnt": 5887,
    "price": "6.82",
    "change": "7.06",
    "market_id": "33",
    "circulate_market_value": "7930618700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "影视",
        "change_pct": 6.05
      },
      {
        "name": "新疆概念",
        "change_pct": 0.8
      },
      {
        "name": "动漫",
        "change_pct": 6.19
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.79
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.92
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 5.11
      },
      {
        "name": "AI视频",
        "change_pct": 4.19
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.12
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 86,
    "hot_rank_chg": 210,
    "stock_cnt": 5887,
    "price": "3.48",
    "change": "10.13",
    "market_id": "33",
    "circulate_market_value": "3202247000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "手游",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 4.55
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.26
      },
      {
        "name": "人工智能",
        "change_pct": 2.82
      },
      {
        "name": "VR&AR",
        "change_pct": 4.43
      },
      {
        "name": "游戏",
        "change_pct": 5.04
      },
      {
        "name": "动漫",
        "change_pct": 6.19
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.92
      },
      {
        "name": "快手概念股",
        "change_pct": 4.22
      },
      {
        "name": "NFT",
        "change_pct": 4.15
      },
      {
        "name": "元宇宙",
        "change_pct": 3.92
      },
      {
        "name": "虚拟数字人",
        "change_pct": 4.02
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.65
      },
      {
        "name": "云游戏",
        "change_pct": 4.69
      },
      {
        "name": "华为产业链",
        "change_pct": 2.75
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.12
      }
    ]
  },
  {
    "code": "002376",
    "name": "新北洋",
    "hot_rank": 87,
    "hot_rank_chg": 76,
    "stock_cnt": 5887,
    "price": "7.73",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "6087101000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "机器人零部件",
    "xgb_concepts": [
      {
        "name": "彩票",
        "change_pct": 2.73
      },
      {
        "name": "锂电池",
        "change_pct": 1.55
      },
      {
        "name": "新零售",
        "change_pct": 1.62
      },
      {
        "name": "人工智能",
        "change_pct": 2.82
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.74
      },
      {
        "name": "人脸识别",
        "change_pct": 3.4
      },
      {
        "name": "物联网",
        "change_pct": 2.74
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.95
      },
      {
        "name": "机器人",
        "change_pct": 3.22
      },
      {
        "name": "智慧物流",
        "change_pct": 2.12
      },
      {
        "name": "机器视觉",
        "change_pct": 3.75
      },
      {
        "name": "智能制造",
        "change_pct": 2.7
      },
      {
        "name": "换电概念",
        "change_pct": 2.01
      },
      {
        "name": "信创",
        "change_pct": 2.45
      },
      {
        "name": "数字人民币",
        "change_pct": 2.21
      },
      {
        "name": "传感器",
        "change_pct": 3.26
      },
      {
        "name": "盲盒",
        "change_pct": 3.06
      },
      {
        "name": "打印机",
        "change_pct": 2.84
      }
    ]
  },
  {
    "code": "600776",
    "name": "东方通信",
    "hot_rank": 88,
    "hot_rank_chg": -11,
    "stock_cnt": 5887,
    "price": "12.41",
    "change": "1.55",
    "market_id": "17",
    "circulate_market_value": "11863960800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.22
      },
      {
        "name": "5G",
        "change_pct": 2.64
      },
      {
        "name": "网络安全",
        "change_pct": 2.49
      },
      {
        "name": "军工集团",
        "change_pct": 0.41
      },
      {
        "name": "军工",
        "change_pct": 1.46
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 2.45
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.39
      },
      {
        "name": "华为产业链",
        "change_pct": 2.75
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.42
      }
    ]
  },
  {
    "code": "600609",
    "name": "金杯汽车",
    "hot_rank": 90,
    "hot_rank_chg": 117,
    "stock_cnt": 5887,
    "price": "3.83",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "4996459300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "机器人",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 4.91
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.88
      },
      {
        "name": "机器人",
        "change_pct": 3.22
      },
      {
        "name": "振兴东北",
        "change_pct": 1.14
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 94,
    "hot_rank_chg": 53,
    "stock_cnt": 5887,
    "price": "5.77",
    "change": "1.41",
    "market_id": "17",
    "circulate_market_value": "14531802000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.83
      },
      {
        "name": "工业大麻",
        "change_pct": 2.14
      },
      {
        "name": "中药",
        "change_pct": 0.81
      },
      {
        "name": "保健品",
        "change_pct": 1.0
      },
      {
        "name": "民营医院",
        "change_pct": 1.19
      },
      {
        "name": "医药",
        "change_pct": 0.89
      },
      {
        "name": "化学原料药",
        "change_pct": 0.77
      },
      {
        "name": "流感",
        "change_pct": 1.11
      },
      {
        "name": "振兴东北",
        "change_pct": 1.14
      },
      {
        "name": "食品",
        "change_pct": 0.95
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 97,
    "hot_rank_chg": -3,
    "stock_cnt": 5887,
    "price": "7.84",
    "change": "3.43",
    "market_id": "33",
    "circulate_market_value": "14622249000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": 1.93
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.55
      },
      {
        "name": "军民融合",
        "change_pct": 1.84
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.3
      },
      {
        "name": "风电",
        "change_pct": 1.05
      },
      {
        "name": "军工",
        "change_pct": 1.46
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.95
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.68
      },
      {
        "name": "轮边电机",
        "change_pct": 2.2
      },
      {
        "name": "人形机器人",
        "change_pct": 3.92
      }
    ]
  },
  {
    "code": "600410",
    "name": "华胜天成",
    "hot_rank": 98,
    "hot_rank_chg": 34,
    "stock_cnt": 5887,
    "price": "12.66",
    "change": "2.68",
    "market_id": "17",
    "circulate_market_value": "13881623000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "应急产业",
        "change_pct": 1.68
      },
      {
        "name": "国产软件",
        "change_pct": 2.45
      },
      {
        "name": "人工智能",
        "change_pct": 2.82
      },
      {
        "name": "网络安全",
        "change_pct": 2.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.55
      },
      {
        "name": "军民融合",
        "change_pct": 1.84
      },
      {
        "name": "京津冀",
        "change_pct": 1.03
      },
      {
        "name": "冷链",
        "change_pct": 1.42
      },
      {
        "name": "物联网",
        "change_pct": 2.74
      },
      {
        "name": "大数据",
        "change_pct": 2.4
      },
      {
        "name": "智慧城市",
        "change_pct": 2.62
      },
      {
        "name": "军工",
        "change_pct": 1.46
      },
      {
        "name": "智能制造",
        "change_pct": 2.7
      },
      {
        "name": "工业互联网",
        "change_pct": 2.35
      },
      {
        "name": "数字经济",
        "change_pct": 2.62
      },
      {
        "name": "国产芯片",
        "change_pct": 2.79
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.79
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.92
      },
      {
        "name": "信创",
        "change_pct": 2.45
      },
      {
        "name": "华为昇腾",
        "change_pct": 2.42
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.35
      },
      {
        "name": "数据要素",
        "change_pct": 2.87
      },
      {
        "name": "无线耳机",
        "change_pct": 3.59
      },
      {
        "name": "智慧政务",
        "change_pct": 2.66
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 2.45
      },
      {
        "name": "华为产业链",
        "change_pct": 2.75
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.42
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.6
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002578", "name": "闽发铝业", "hot_rank": 1, "hot_rank_chg": 4, "stock_cnt": 5887, "price": "6.06", "change": "9.98", "market_id": "33", "circulate_market_value": "5218645100.00", "change_type": "1", "change_section": "12", "change_days": "8", "change_reason": "光伏边框", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 1.46}, {"name": "一带一路", "change_pct": 0.95}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "福建自贸/海西概念", "change_pct": 2.29}, {"name": "光伏", "change_pct": 1.62}, {"name": "有色金属", "change_pct": 1.32}, {"name": "新能源汽车", "change_pct": 1.95}, {"name": "新能源车零部件", "change_pct": 2.68}, {"name": "自贸区", "change_pct": 1.23}, {"name": "液冷服务器", "change_pct": 2.79}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5887, "price": "4.62", "change": "5.72", "market_id": "33", "circulate_market_value": "7304087300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 1.68}, {"name": "体外诊断", "change_pct": 1.23}, {"name": "医疗器械", "change_pct": 1.23}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "基因测序", "change_pct": 1.36}, {"name": "预制菜", "change_pct": 0.93}, {"name": "水产养殖", "change_pct": 1.97}, {"name": "新冠病毒防治", "change_pct": 1.28}, {"name": "海洋经济", "change_pct": 1.72}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5887, "price": "10.53", "change": "10.03", "market_id": "33", "circulate_market_value": "6319229100.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "冰雪工程", "xgb_concepts": [{"name": "体育产业", "change_pct": 2.71}, {"name": "边缘计算", "change_pct": 3.59}, {"name": "核电", "change_pct": 1.37}, {"name": "海工装备", "change_pct": 0.71}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "云计算数据中心", "change_pct": 2.55}, {"name": "冷链", "change_pct": 1.42}, {"name": "地热", "change_pct": 1.39}, {"name": "储能", "change_pct": 1.38}, {"name": "碳中和", "change_pct": 0.71}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 1.64}, {"name": "汽车热管理", "change_pct": 2.5}, {"name": "热泵", "change_pct": 2.17}, {"name": "液冷服务器", "change_pct": 2.79}, {"name": "蜜雪冰城概念股", "change_pct": 2.49}, {"name": "海洋经济", "change_pct": 1.72}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5887, "price": "5.85", "change": "9.96", "market_id": "17", "circulate_market_value": "7810059900.00", "change_type": "1", "change_section": "14", "change_days": "8", "change_reason": "商业航天", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.91}, {"name": "物联网", "change_pct": 2.74}, {"name": "LED", "change_pct": 3.69}, {"name": "卫星互联网", "change_pct": 2.39}]}, {"code": "603366", "name": "日出东方", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5887, "price": "10.88", "change": "10.01", "market_id": "17", "circulate_market_value": "8845963300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "“东方系”", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.91}, {"name": "光伏", "change_pct": 1.62}, {"name": "家电", "change_pct": 2.59}, {"name": "储能", "change_pct": 1.38}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 2.17}, {"name": "华为鸿蒙", "change_pct": 3.09}, {"name": "厨卫家电", "change_pct": 1.73}, {"name": "华为产业链", "change_pct": 2.75}]}, {"code": "600715", "name": "文投控股", "hot_rank": 6, "hot_rank_chg": 15, "stock_cnt": 5887, "price": "2.85", "change": "10.04", "market_id": "17", "circulate_market_value": "8157760900.00", "change_type": "1", "change_section": "15", "change_days": "8", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": 4.55}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "游戏", "change_pct": 5.04}, {"name": "影视", "change_pct": 6.05}, {"name": "低价股", "change_pct": 1.03}, {"name": "国企改革", "change_pct": 0.65}, {"name": "短剧/互动影游", "change_pct": 5.11}, {"name": "AI视频", "change_pct": 4.19}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5887, "price": "4.61", "change": "10.02", "market_id": "17", "circulate_market_value": "6018216300.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "冰雪旅游保障", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.91}, {"name": "高速公路", "change_pct": 0.02}, {"name": "振兴东北", "change_pct": 1.14}, {"name": "黑龙江自贸区", "change_pct": 1.24}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 8, "hot_rank_chg": 7, "stock_cnt": 5887, "price": "26.35", "change": "0.96", "market_id": "33", "circulate_market_value": "20072524000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 9, "hot_rank_chg": 3, "stock_cnt": 5887, "price": "19.26", "change": "9.99", "market_id": "33", "circulate_market_value": "8852123200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人轴承"}, {"code": "002565", "name": "顺灏股份", "hot_rank": 10, "hot_rank_chg": -3, "stock_cnt": 5887, "price": "11.29", "change": "7.12", "market_id": "33", "circulate_market_value": "11966893900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": 2.14}, {"name": "电子烟", "change_pct": 3.4}, {"name": "一带一路", "change_pct": 0.95}, {"name": "造纸", "change_pct": 2.0}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "包装印刷", "change_pct": 2.31}, {"name": "卫星互联网", "change_pct": 2.39}, {"name": "太空算力", "change_pct": 3.17}]}, {"code": "002310", "name": "东方新能", "hot_rank": 11, "hot_rank_chg": 9, "stock_cnt": 5887, "price": "2.81", "change": "10.20", "market_id": "33", "circulate_market_value": "12361216600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "签下算力大单", "xgb_concepts": [{"name": "资产重组", "change_pct": 2.38}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "京津冀", "change_pct": 1.03}, {"name": "旅游", "change_pct": 0.62}, {"name": "园林", "change_pct": 2.32}, {"name": "海绵城市", "change_pct": 1.84}, {"name": "固废处理", "change_pct": 1.12}, {"name": "光伏", "change_pct": 1.62}, {"name": "风电", "change_pct": 1.05}, {"name": "雄安新区", "change_pct": 1.41}, {"name": "北京城市规划", "change_pct": 1.55}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": 1.48}, {"name": "储能", "change_pct": 1.38}, {"name": "碳中和", "change_pct": 0.71}, {"name": "乡村振兴", "change_pct": 1.41}, {"name": "汽车拆解", "change_pct": 1.98}, {"name": "土壤修复", "change_pct": 1.29}, {"name": "核污染防治", "change_pct": 1.6}, {"name": "东数西算/算力", "change_pct": 2.35}, {"name": "新型城镇化", "change_pct": 1.87}, {"name": "低价股", "change_pct": 1.03}, {"name": "西部大开发", "change_pct": 0.15}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 12, "hot_rank_chg": 5, "stock_cnt": 5887, "price": "5.60", "change": "4.09", "market_id": "17", "circulate_market_value": "6499037700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.91}, {"name": "纺织服装", "change_pct": 1.83}, {"name": "浙江国企改革", "change_pct": 1.5}, {"name": "影视", "change_pct": 6.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 0.65}, {"name": "短剧/互动影游", "change_pct": 5.11}]}, {"code": "600327", "name": "大东方", "hot_rank": 13, "hot_rank_chg": 9, "stock_cnt": 5887, "price": "5.94", "change": "10.00", "market_id": "17", "circulate_market_value": "5255590300.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "“东方系”", "xgb_concepts": [{"name": "新零售", "change_pct": 1.62}, {"name": "优化生育（三孩）", "change_pct": 1.48}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "信托", "change_pct": -0.52}, {"name": "民营医院", "change_pct": 1.19}, {"name": "社区团购", "change_pct": 1.4}, {"name": "大金融", "change_pct": 0.11}, {"name": "餐饮", "change_pct": 0.9}, {"name": "首发经济", "change_pct": 1.99}]}, {"code": "603278", "name": "大业股份", "hot_rank": 14, "hot_rank_chg": 15, "stock_cnt": 5887, "price": "15.10", "change": "9.98", "market_id": "17", "circulate_market_value": "5160566800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "688836", "name": "宇树科技", "hot_rank": 15, "hot_rank_chg": -14, "stock_cnt": 5887, "price": "761.01", "change": "6.29", "market_id": "17", "circulate_market_value": "22897056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002865", "name": "钧达股份", "hot_rank": 16, "hot_rank_chg": 9, "stock_cnt": 5887, "price": "48.90", "change": "10.01", "market_id": "33", "circulate_market_value": "11189369000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "太空光伏"}, {"code": "600892", "name": "大晟文化", "hot_rank": 17, "hot_rank_chg": 35, "stock_cnt": 5887, "price": "5.60", "change": "10.02", "market_id": "17", "circulate_market_value": "3132189400.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "短剧", "xgb_concepts": [{"name": "手游", "change_pct": 4.55}, {"name": "ST摘帽", "change_pct": 2.26}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "游戏", "change_pct": 5.04}, {"name": "影视", "change_pct": 6.05}, {"name": "短剧/互动影游", "change_pct": 5.11}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 18, "hot_rank_chg": 5, "stock_cnt": 5887, "price": "14.35", "change": "5.13", "market_id": "17", "circulate_market_value": "14994141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 19, "hot_rank_chg": 14, "stock_cnt": 5887, "price": "24.17", "change": "10.01", "market_id": "33", "circulate_market_value": "12317765600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人关节"}, {"code": "002639", "name": "雪人集团", "hot_rank": 20, "hot_rank_chg": -10, "stock_cnt": 5887, "price": "16.10", "change": "0.94", "market_id": "33", "circulate_market_value": "10628039800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 21, "hot_rank_chg": 18, "stock_cnt": 5887, "price": "9.33", "change": "10.02", "market_id": "33", "circulate_market_value": "4419437100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "微短剧", "xgb_concepts": [{"name": "手游", "change_pct": 4.55}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "VR&AR", "change_pct": 4.43}, {"name": "游戏", "change_pct": 5.04}, {"name": "影视", "change_pct": 6.05}, {"name": "直播/短视频", "change_pct": 4.5}, {"name": "动漫", "change_pct": 6.19}, {"name": "腾讯概念股", "change_pct": 2.92}, {"name": "传媒", "change_pct": 3.72}, {"name": "元宇宙", "change_pct": 3.92}, {"name": "短剧/互动影游", "change_pct": 5.11}, {"name": "IP经济/谷子经济", "change_pct": 3.12}]}, {"code": "603703", "name": "盛洋科技", "hot_rank": 22, "hot_rank_chg": 26, "stock_cnt": 5887, "price": "12.21", "change": "10.00", "market_id": "17", "circulate_market_value": "5066931700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "卫星通信终端", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 2.63}, {"name": "5G", "change_pct": 2.64}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "云计算数据中心", "change_pct": 2.55}, {"name": "LED", "change_pct": 3.69}, {"name": "卫星互联网", "change_pct": 2.39}, {"name": "铜缆高速连接器", "change_pct": 3.23}]}, {"code": "605488", "name": "福莱新材", "hot_rank": 23, "hot_rank_chg": 8, "stock_cnt": 5887, "price": "57.30", "change": "10.00", "market_id": "17", "circulate_market_value": "17102827000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "柔性传感"}, {"code": "300118", "name": "东方日升", "hot_rank": 24, "hot_rank_chg": -5, "stock_cnt": 5887, "price": "11.59", "change": "6.82", "market_id": "33", "circulate_market_value": "10738361900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": 3.58}, {"name": "光伏", "change_pct": 1.62}, {"name": "储能", "change_pct": 1.38}, {"name": "BIPV概念", "change_pct": 1.51}, {"name": "钙钛矿电池", "change_pct": 2.27}, {"name": "异质结电池HJT", "change_pct": 1.87}, {"name": "光伏胶膜", "change_pct": 1.32}]}, {"code": "002149", "name": "西部材料", "hot_rank": 25, "hot_rank_chg": -1, "stock_cnt": 5887, "price": "43.00", "change": "3.59", "market_id": "33", "circulate_market_value": "20989982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603381", "name": "永臻股份", "hot_rank": 26, "hot_rank_chg": 30, "stock_cnt": 5887, "price": "21.89", "change": "10.00", "market_id": "17", "circulate_market_value": "3111393900.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "人形机器人"}, {"code": "001219", "name": "青岛食品", "hot_rank": 27, "hot_rank_chg": 10, "stock_cnt": 5887, "price": "25.12", "change": "4.41", "market_id": "33", "circulate_market_value": "4777761200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 28, "hot_rank_chg": 0, "stock_cnt": 5887, "price": "16.86", "change": "2.81", "market_id": "33", "circulate_market_value": "4236657600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 29, "hot_rank_chg": -25, "stock_cnt": 5887, "price": "471.00", "change": "4.20", "market_id": "33", "circulate_market_value": "522780330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 30, "hot_rank_chg": 25, "stock_cnt": 5887, "price": "17.28", "change": "9.99", "market_id": "17", "circulate_market_value": "7680000000.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "AI漫剧"}, {"code": "002384", "name": "东山精密", "hot_rank": 31, "hot_rank_chg": -18, "stock_cnt": 5887, "price": "83.69", "change": "2.70", "market_id": "33", "circulate_market_value": "116021265000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 32, "hot_rank_chg": -2, "stock_cnt": 5887, "price": "233.20", "change": "10.00", "market_id": "17", "circulate_market_value": "98724929000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "端侧AI"}, {"code": "002724", "name": "海洋王", "hot_rank": 33, "hot_rank_chg": 13, "stock_cnt": 5887, "price": "13.18", "change": "2.17", "market_id": "33", "circulate_market_value": "7466183800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 34, "hot_rank_chg": -20, "stock_cnt": 5887, "price": "35.55", "change": "-0.70", "market_id": "33", "circulate_market_value": "36321434000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 35, "hot_rank_chg": -8, "stock_cnt": 5887, "price": "32.80", "change": "9.99", "market_id": "17", "circulate_market_value": "14395816000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧"}, {"code": "000525", "name": "红太阳", "hot_rank": 36, "hot_rank_chg": 6, "stock_cnt": 5887, "price": "5.46", "change": "-1.09", "market_id": "33", "circulate_market_value": "6070209600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.91}, {"name": "草铵膦", "change_pct": -0.89}, {"name": "农药", "change_pct": 0.35}, {"name": "长寿药NMN", "change_pct": -0.1}, {"name": "大农业", "change_pct": 0.79}, {"name": "虫害防治", "change_pct": 0.12}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 37, "hot_rank_chg": 1, "stock_cnt": 5887, "price": "8.50", "change": "5.07", "market_id": "33", "circulate_market_value": "13829447000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.83}, {"name": "电竞", "change_pct": 3.25}, {"name": "手游", "change_pct": 4.55}, {"name": "人工智能", "change_pct": 2.82}, {"name": "游戏", "change_pct": 5.04}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.62}, {"name": "腾讯概念股", "change_pct": 2.92}, {"name": "传媒", "change_pct": 3.72}, {"name": "快手概念股", "change_pct": 4.22}, {"name": "元宇宙", "change_pct": 3.92}, {"name": "虚拟数字人", "change_pct": 4.02}, {"name": "东数西算/算力", "change_pct": 2.35}, {"name": "web3.0", "change_pct": 3.61}, {"name": "AIGC概念", "change_pct": 3.24}, {"name": "数据要素", "change_pct": 2.87}, {"name": "字节跳动概念股", "change_pct": 3.65}, {"name": "AI营销", "change_pct": 4.2}, {"name": "ChatGPT", "change_pct": 3.35}, {"name": "智能眼镜/MR头显", "change_pct": 4.16}, {"name": "AI大模型/智能体", "change_pct": 2.42}, {"name": "人形机器人", "change_pct": 3.92}, {"name": "短剧/互动影游", "change_pct": 5.11}, {"name": "多模态", "change_pct": 3.61}, {"name": "AI视频", "change_pct": 4.19}, {"name": "IP经济/谷子经济", "change_pct": 3.12}, {"name": "小红书概念股", "change_pct": 4.09}]}, {"code": "601595", "name": "上海电影", "hot_rank": 38, "hot_rank_chg": 16, "stock_cnt": 5887, "price": "42.57", "change": "10.00", "market_id": "17", "circulate_market_value": "19079874000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI影视"}, {"code": "002347", "name": "泰尔股份", "hot_rank": 39, "hot_rank_chg": 50, "stock_cnt": 5887, "price": "7.70", "change": "10.00", "market_id": "33", "circulate_market_value": "3799048300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "工业机器人", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.55}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "人工智能", "change_pct": 2.82}, {"name": "工业自动化", "change_pct": 3.12}, {"name": "风电", "change_pct": 1.05}, {"name": "新能源汽车", "change_pct": 1.95}, {"name": "机器人", "change_pct": 3.22}, {"name": "激光", "change_pct": 2.89}, {"name": "机器视觉", "change_pct": 3.75}, {"name": "智能制造", "change_pct": 2.7}, {"name": "3D打印", "change_pct": 2.56}, {"name": "工业互联网", "change_pct": 2.35}, {"name": "数字经济", "change_pct": 2.62}, {"name": "动力电池回收", "change_pct": 1.44}, {"name": "超级电容", "change_pct": 1.58}]}, {"code": "300052", "name": "中青宝", "hot_rank": 40, "hot_rank_chg": 83, "stock_cnt": 5887, "price": "11.82", "change": "20.00", "market_id": "33", "circulate_market_value": "3095047600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "元宇宙", "xgb_concepts": [{"name": "手游", "change_pct": 4.55}, {"name": "ST摘帽", "change_pct": 2.26}, {"name": "网络安全", "change_pct": 2.49}, {"name": "云计算数据中心", "change_pct": 2.55}, {"name": "游戏", "change_pct": 5.04}, {"name": "数字经济", "change_pct": 2.62}, {"name": "阿里巴巴概念股", "change_pct": 2.79}, {"name": "食品安全", "change_pct": 1.6}, {"name": "NFT", "change_pct": 4.15}, {"name": "元宇宙", "change_pct": 3.92}, {"name": "东数西算/算力", "change_pct": 2.35}, {"name": "云游戏", "change_pct": 4.69}, {"name": "新冠病毒防治", "change_pct": 1.28}, {"name": "华为产业链", "change_pct": 2.75}, {"name": "区块链", "change_pct": 2.5}]}, {"code": "002160", "name": "常铝股份", "hot_rank": 41, "hot_rank_chg": 321, "stock_cnt": 5887, "price": "4.00", "change": "9.89", "market_id": "33", "circulate_market_value": "4122918000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锂电池", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 1.46}, {"name": "特斯拉", "change_pct": 2.37}, {"name": "锂电池", "change_pct": 1.55}, {"name": "山东国企改革", "change_pct": 1.14}, {"name": "有色金属", "change_pct": 1.32}, {"name": "新能源汽车", "change_pct": 1.95}, {"name": "智能制造", "change_pct": 2.7}, {"name": "新能源车零部件", "change_pct": 2.68}, {"name": "钠电池", "change_pct": 1.08}, {"name": "工业母机", "change_pct": 2.73}, {"name": "汽车热管理", "change_pct": 2.5}, {"name": "国企改革", "change_pct": 0.65}, {"name": "生物安全", "change_pct": 1.76}]}, {"code": "600127", "name": "金健米业", "hot_rank": 42, "hot_rank_chg": 11, "stock_cnt": 5887, "price": "10.95", "change": "0.46", "market_id": "17", "circulate_market_value": "7027526200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 1.81}, {"name": "农业种植", "change_pct": 0.31}, {"name": "湖南国企改革", "change_pct": 0.99}, {"name": "乡村振兴", "change_pct": 1.41}, {"name": "休闲食品", "change_pct": 0.89}, {"name": "食品", "change_pct": 0.95}, {"name": "食品安全", "change_pct": 1.6}, {"name": "社区团购", "change_pct": 1.4}, {"name": "大农业", "change_pct": 0.79}, {"name": "预制菜", "change_pct": 0.93}, {"name": "人造肉", "change_pct": 1.29}, {"name": "国企改革", "change_pct": 0.65}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 43, "hot_rank_chg": 24, "stock_cnt": 5887, "price": "17.57", "change": "5.21", "market_id": "33", "circulate_market_value": "3117058600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 44, "hot_rank_chg": 17, "stock_cnt": 5887, "price": "6.33", "change": "2.43", "market_id": "33", "circulate_market_value": "4843340800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.81}, {"name": "优化生育（三孩）", "change_pct": 1.48}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "医药商业", "change_pct": 1.06}, {"name": "保健品", "change_pct": 1.0}, {"name": "民营医院", "change_pct": 1.19}, {"name": "医药", "change_pct": 0.89}, {"name": "食品", "change_pct": 0.95}, {"name": "辅助生殖", "change_pct": 1.13}, {"name": "口腔", "change_pct": 1.09}, {"name": "医美", "change_pct": 1.04}, {"name": "新冠病毒防治", "change_pct": 1.28}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 45, "hot_rank_chg": 65, "stock_cnt": 5887, "price": "6.96", "change": "4.04", "market_id": "33", "circulate_market_value": "13329043400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 2.29}, {"name": "林业", "change_pct": 1.55}, {"name": "碳中和", "change_pct": 0.71}, {"name": "自贸区", "change_pct": 1.23}]}, {"code": "600838", "name": "上海九百", "hot_rank": 46, "hot_rank_chg": 27, "stock_cnt": 5887, "price": "11.92", "change": "3.65", "market_id": "17", "circulate_market_value": "4778513200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 0.63}, {"name": "新零售", "change_pct": 1.62}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "物业管理", "change_pct": 1.32}, {"name": "国企改革", "change_pct": 0.65}, {"name": "地摊经济", "change_pct": 1.35}]}, {"code": "603706", "name": "东方环宇", "hot_rank": 47, "hot_rank_chg": 90, "stock_cnt": 5887, "price": "22.21", "change": "10.01", "market_id": "17", "circulate_market_value": "4206190100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“东方系”"}, {"code": "603466", "name": "风语筑", "hot_rank": 48, "hot_rank_chg": 14, "stock_cnt": 5887, "price": "15.33", "change": "9.97", "market_id": "17", "circulate_market_value": "9118774000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "物理AI"}, {"code": "002045", "name": "国光电器", "hot_rank": 49, "hot_rank_chg": 58, "stock_cnt": 5887, "price": "11.41", "change": "10.03", "market_id": "33", "circulate_market_value": "6410513200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI眼镜", "xgb_concepts": [{"name": "手机产业链", "change_pct": 3.69}, {"name": "电子烟", "change_pct": 3.4}, {"name": "苹果产业链", "change_pct": 4.05}, {"name": "锂电池", "change_pct": 1.55}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "VR&AR", "change_pct": 4.43}, {"name": "智能音箱", "change_pct": 4.42}, {"name": "新能源汽车", "change_pct": 1.95}, {"name": "黑色家电", "change_pct": 3.66}, {"name": "家电", "change_pct": 2.59}, {"name": "固态电池", "change_pct": 1.4}, {"name": "NFT", "change_pct": 4.15}, {"name": "元宇宙", "change_pct": 3.92}, {"name": "无线耳机", "change_pct": 3.59}, {"name": "智能手表", "change_pct": 4.22}, {"name": "华为鸿蒙", "change_pct": 3.09}, {"name": "华为产业链", "change_pct": 2.75}, {"name": "智能眼镜/MR头显", "change_pct": 4.16}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 50, "hot_rank_chg": 21, "stock_cnt": 5887, "price": "4.63", "change": "3.35", "market_id": "33", "circulate_market_value": "12281309100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.91}, {"name": "装修装饰", "change_pct": 1.76}, {"name": "装配式建筑", "change_pct": 1.42}, {"name": "破净股", "change_pct": 0.16}, {"name": "航天", "change_pct": 2.17}, {"name": "旧改", "change_pct": 1.46}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 51, "hot_rank_chg": -1, "stock_cnt": 5887, "price": "72.86", "change": "-2.03", "market_id": "33", "circulate_market_value": "47578126000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600408", "name": "安泰集团", "hot_rank": 52, "hot_rank_chg": 53, "stock_cnt": 5887, "price": "3.65", "change": "9.94", "market_id": "17", "circulate_market_value": "3674820000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "煤炭", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.76}, {"name": "钢铁", "change_pct": 0.49}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "煤化工", "change_pct": -0.09}]}, {"code": "002931", "name": "锋龙股份", "hot_rank": 53, "hot_rank_chg": 50, "stock_cnt": 5887, "price": "48.25", "change": "10.01", "market_id": "33", "circulate_market_value": "9774285100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "002696", "name": "百洋股份", "hot_rank": 54, "hot_rank_chg": 29, "stock_cnt": 5887, "price": "11.67", "change": "3.27", "market_id": "33", "circulate_market_value": "3900801600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.23}, {"name": "饲料", "change_pct": 0.62}, {"name": "一带一路", "change_pct": 0.95}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "保健品", "change_pct": 1.0}, {"name": "山东国企改革", "change_pct": 1.14}, {"name": "污水处理", "change_pct": 1.55}, {"name": "环保", "change_pct": 1.48}, {"name": "食品", "change_pct": 0.95}, {"name": "预制菜", "change_pct": 0.93}, {"name": "国企改革", "change_pct": 0.65}, {"name": "水产养殖", "change_pct": 1.97}, {"name": "广西概念", "change_pct": 1.1}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 55, "hot_rank_chg": -21, "stock_cnt": 5887, "price": "60.17", "change": "4.64", "market_id": "17", "circulate_market_value": "71150371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300364", "name": "中文在线", "hot_rank": 56, "hot_rank_chg": -38, "stock_cnt": 5887, "price": "29.05", "change": "8.07", "market_id": "33", "circulate_market_value": "19204539000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300133", "name": "华策影视", "hot_rank": 57, "hot_rank_chg": -31, "stock_cnt": 5887, "price": "11.29", "change": "16.39", "market_id": "33", "circulate_market_value": "18786564000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "VR&AR", "change_pct": 4.43}, {"name": "影视", "change_pct": 6.05}, {"name": "大数据", "change_pct": 2.4}, {"name": "教育", "change_pct": 2.81}, {"name": "动漫", "change_pct": 6.19}, {"name": "独角兽", "change_pct": 0.85}, {"name": "知识产权", "change_pct": 3.46}, {"name": "百度概念股", "change_pct": 3.38}, {"name": "腾讯概念股", "change_pct": 2.92}, {"name": "NFT", "change_pct": 4.15}, {"name": "元宇宙", "change_pct": 3.92}, {"name": "虚拟数字人", "change_pct": 4.02}, {"name": "AIGC概念", "change_pct": 3.24}, {"name": "网红/MCN", "change_pct": 3.08}, {"name": "华为产业链", "change_pct": 2.75}, {"name": "智能眼镜/MR头显", "change_pct": 4.16}, {"name": "AI大模型/智能体", "change_pct": 2.42}, {"name": "短剧/互动影游", "change_pct": 5.11}, {"name": "多模态", "change_pct": 3.61}, {"name": "AI视频", "change_pct": 4.19}, {"name": "Kimi概念", "change_pct": 4.18}, {"name": "智谱AI", "change_pct": 3.52}, {"name": "IP经济/谷子经济", "change_pct": 3.12}]}, {"code": "603598", "name": "引力传媒", "hot_rank": 58, "hot_rank_chg": 12, "stock_cnt": 5887, "price": "23.69", "change": "9.98", "market_id": "17", "circulate_market_value": "6401353100.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "AI营销"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 59, "hot_rank_chg": -43, "stock_cnt": 5887, "price": "40.45", "change": "1.15", "market_id": "17", "circulate_market_value": "182147930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 60, "hot_rank_chg": -49, "stock_cnt": 5887, "price": "183.80", "change": "4.43", "market_id": "33", "circulate_market_value": "230618220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 61, "hot_rank_chg": 17, "stock_cnt": 5887, "price": "13.21", "change": "-2.22", "market_id": "17", "circulate_market_value": "3864955400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002088", "name": "鲁阳节能", "hot_rank": 62, "hot_rank_chg": 14, "stock_cnt": 5887, "price": "11.20", "change": "1.08", "market_id": "33", "circulate_market_value": "5666803900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.55}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "大气治理", "change_pct": 1.51}, {"name": "雄安新区", "change_pct": 1.41}, {"name": "耐火材料", "change_pct": 0.04}, {"name": "新能源汽车", "change_pct": 1.95}, {"name": "环保", "change_pct": 1.48}, {"name": "船舶", "change_pct": -0.07}, {"name": "建筑节能", "change_pct": 1.75}, {"name": "气凝胶", "change_pct": 2.65}, {"name": "旧改", "change_pct": 1.46}]}, {"code": "002029", "name": "七匹狼", "hot_rank": 63, "hot_rank_chg": 21, "stock_cnt": 5887, "price": "9.53", "change": "5.30", "market_id": "33", "circulate_market_value": "6341318800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.91}, {"name": "纺织服装", "change_pct": 1.83}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "300426", "name": "华智数媒", "hot_rank": 64, "hot_rank_chg": 10, "stock_cnt": 5887, "price": "11.47", "change": "19.98", "market_id": "33", "circulate_market_value": "4588000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI漫剧", "xgb_concepts": [{"name": "浙江国企改革", "change_pct": 1.5}, {"name": "影视", "change_pct": 6.05}, {"name": "阿里巴巴概念股", "change_pct": 2.79}, {"name": "NFT", "change_pct": 4.15}, {"name": "国企改革", "change_pct": 0.65}, {"name": "短剧/互动影游", "change_pct": 5.11}, {"name": "IP经济/谷子经济", "change_pct": 3.12}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 65, "hot_rank_chg": 14, "stock_cnt": 5887, "price": "4.98", "change": "5.29", "market_id": "17", "circulate_market_value": "6067691900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 1.46}, {"name": "煤炭", "change_pct": -0.76}, {"name": "有色金属", "change_pct": 1.32}, {"name": "国企改革", "change_pct": 0.65}, {"name": "河南国企改革", "change_pct": 0.69}]}, {"code": "600278", "name": "东方创业", "hot_rank": 66, "hot_rank_chg": 15, "stock_cnt": 5887, "price": "8.19", "change": "4.60", "market_id": "17", "circulate_market_value": "7047647800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.68}, {"name": "快递物流", "change_pct": 0.97}, {"name": "上海国企改革", "change_pct": 0.63}, {"name": "一带一路", "change_pct": 0.95}, {"name": "强势人气股", "change_pct": 4.91}, {"name": "破净股", "change_pct": 0.16}, {"name": "上海自由贸易港", "change_pct": 0.79}, {"name": "独角兽", "change_pct": 0.85}, {"name": "进口博览会", "change_pct": 0.94}, {"name": "自由贸易港", "change_pct": 0.75}, {"name": "国企改革", "change_pct": 0.65}, {"name": "自贸区", "change_pct": 1.23}]}, {"code": "002432", "name": "九安医疗", "hot_rank": 67, "hot_rank_chg": 54, "stock_cnt": 5887, "price": "57.65", "change": "10.00", "market_id": "33", "circulate_market_value": "25220620000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "大模型投资"}, {"code": "300613", "name": "富瀚微", "hot_rank": 68, "hot_rank_chg": -11, "stock_cnt": 5887, "price": "80.02", "change": "20.01", "market_id": "33", "circulate_market_value": "17586026000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "端侧AI"}, {"code": "002636", "name": "金安国纪", "hot_rank": 69, "hot_rank_chg": -26, "stock_cnt": 5887, "price": "65.49", "change": "-0.82", "market_id": "33", "circulate_market_value": "47495743000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 70, "hot_rank_chg": -38, "stock_cnt": 5887, "price": "76.49", "change": "9.63", "market_id": "33", "circulate_market_value": "6017775400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 71, "hot_rank_chg": -30, "stock_cnt": 5887, "price": "18.44", "change": "3.25", "market_id": "33", "circulate_market_value": "10970549200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 72, "hot_rank_chg": -27, "stock_cnt": 5887, "price": "38.78", "change": "1.25", "market_id": "17", "circulate_market_value": "32829338000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603131", "name": "上海沪工", "hot_rank": 73, "hot_rank_chg": 56, "stock_cnt": 5887, "price": "17.81", "change": "5.32", "market_id": "17", "circulate_market_value": "6000317600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002241", "name": "歌尔股份", "hot_rank": 74, "hot_rank_chg": -10, "stock_cnt": 5887, "price": "25.69", "change": "3.84", "market_id": "33", "circulate_market_value": "81252980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001379", "name": "腾达科技", "hot_rank": 75, "hot_rank_chg": 213, "stock_cnt": 5887, "price": "17.44", "change": "10.03", "market_id": "33", "circulate_market_value": "1173684530.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "航天紧固件"}, {"code": "001318", "name": "阳光乳业", "hot_rank": 76, "hot_rank_chg": 76, "stock_cnt": 5887, "price": "14.69", "change": "10.04", "market_id": "33", "circulate_market_value": "4152275400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低温乳制品"}, {"code": "000993", "name": "闽东电力", "hot_rank": 77, "hot_rank_chg": 137, "stock_cnt": 5887, "price": "12.60", "change": "2.27", "market_id": "33", "circulate_market_value": "5770188300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电力体制改革", "change_pct": -0.34}, {"name": "水电", "change_pct": -0.21}, {"name": "福建自贸/海西概念", "change_pct": 2.29}, {"name": "有色 · 钼", "change_pct": 1.75}, {"name": "光伏", "change_pct": 1.62}, {"name": "风电", "change_pct": 1.05}, {"name": "有色金属", "change_pct": 1.32}, {"name": "宁德时代概念股", "change_pct": 1.59}, {"name": "船舶", "change_pct": -0.07}, {"name": "自贸区", "change_pct": 1.23}]}, {"code": "002181", "name": "粤传媒", "hot_rank": 78, "hot_rank_chg": -13, "stock_cnt": 5887, "price": "12.00", "change": "4.08", "market_id": "33", "circulate_market_value": "13614445000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 2.71}, {"name": "足球", "change_pct": 2.5}, {"name": "粤港澳大湾区", "change_pct": 1.01}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.62}, {"name": "传媒", "change_pct": 3.72}, {"name": "AIGC概念", "change_pct": 3.24}, {"name": "字节跳动概念股", "change_pct": 3.65}, {"name": "国企改革", "change_pct": 0.65}, {"name": "网红/MCN", "change_pct": 3.08}, {"name": "短剧/互动影游", "change_pct": 5.11}, {"name": "AI视频", "change_pct": 4.19}]}, {"code": "002009", "name": "天奇股份", "hot_rank": 79, "hot_rank_chg": 63, "stock_cnt": 5887, "price": "19.24", "change": "10.01", "market_id": "33", "circulate_market_value": "6815410600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能数据"}, {"code": "600637", "name": "东方明珠", "hot_rank": 80, "hot_rank_chg": 38, "stock_cnt": 5887, "price": "8.37", "change": "-3.12", "market_id": "17", "circulate_market_value": "28139101000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": 4.42}, {"name": "高管增持", "change_pct": 1.1}, {"name": "超高清视频", "change_pct": 3.73}, {"name": "电竞", "change_pct": 3.25}, {"name": "上海国企改革", "change_pct": 0.63}, {"name": "游戏", "change_pct": 5.04}, {"name": "物联网", "change_pct": 2.74}, {"name": "教育", "change_pct": 2.81}, {"name": "智慧城市", "change_pct": 2.62}, {"name": "破净股", "change_pct": 0.16}, {"name": "传媒", "change_pct": 3.72}, {"name": "东数西算/算力", "change_pct": 2.35}, {"name": "国企改革", "change_pct": 0.65}, {"name": "在线教育", "change_pct": 2.44}, {"name": "AI大模型/智能体", "change_pct": 2.42}, {"name": "短剧/互动影游", "change_pct": 5.11}]}, {"code": "000810", "name": "创维数字", "hot_rank": 81, "hot_rank_chg": 115, "stock_cnt": 5887, "price": "12.14", "change": "9.96", "market_id": "33", "circulate_market_value": "13574438000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能数据采集", "xgb_concepts": [{"name": "广电", "change_pct": 4.42}, {"name": "折叠屏", "change_pct": 3.47}, {"name": "超高清视频", "change_pct": 3.73}, {"name": "半导体", "change_pct": 2.62}, {"name": "5G", "change_pct": 2.64}, {"name": "人工智能", "change_pct": 2.82}, {"name": "VR&AR", "change_pct": 4.43}, {"name": "云计算数据中心", "change_pct": 2.55}, {"name": "光通信", "change_pct": 2.59}, {"name": "OLED", "change_pct": 2.93}, {"name": "物联网", "change_pct": 2.74}, {"name": "教育", "change_pct": 2.81}, {"name": "智慧城市", "change_pct": 2.62}, {"name": "汽车零部件", "change_pct": 2.88}, {"name": "智能音箱", "change_pct": 4.42}, {"name": "机器人", "change_pct": 3.22}, {"name": "黑色家电", "change_pct": 3.66}, {"name": "家电", "change_pct": 2.59}, {"name": "WiFi", "change_pct": 4.28}, {"name": "数字经济", "change_pct": 2.62}, {"name": "百度概念股", "change_pct": 3.38}, {"name": "国产操作系统", "change_pct": 2.9}, {"name": "腾讯概念股", "change_pct": 2.92}, {"name": "液晶面板/LCD", "change_pct": 2.51}, {"name": "全息概念", "change_pct": 3.66}, {"name": "元宇宙", "change_pct": 3.92}, {"name": "F5G", "change_pct": 3.78}, {"name": "电子后视镜", "change_pct": 4.54}, {"name": "华为海思", "change_pct": 3.25}, {"name": "教育信息化", "change_pct": 2.93}, {"name": "在线教育", "change_pct": 2.44}, {"name": "云游戏", "change_pct": 4.69}, {"name": "MiniLED", "change_pct": 2.98}, {"name": "华为产业链", "change_pct": 2.75}, {"name": "智能眼镜/MR头显", "change_pct": 4.16}, {"name": "星闪概念", "change_pct": 3.91}, {"name": "智能座舱", "change_pct": 3.96}, {"name": "短剧/互动影游", "change_pct": 5.11}, {"name": "多模态", "change_pct": 3.61}]}, {"code": "603121", "name": "华培动力", "hot_rank": 82, "hot_rank_chg": 110, "stock_cnt": 5887, "price": "13.18", "change": "10.02", "market_id": "17", "circulate_market_value": "4461874400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "300274", "name": "阳光电源", "hot_rank": 83, "hot_rank_chg": -39, "stock_cnt": 5887, "price": "79.60", "change": "2.25", "market_id": "33", "circulate_market_value": "126361789000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 84, "hot_rank_chg": 35, "stock_cnt": 5887, "price": "6.82", "change": "7.06", "market_id": "33", "circulate_market_value": "7930618700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.91}, {"name": "影视", "change_pct": 6.05}, {"name": "新疆概念", "change_pct": 0.8}, {"name": "动漫", "change_pct": 6.19}, {"name": "阿里巴巴概念股", "change_pct": 2.79}, {"name": "腾讯概念股", "change_pct": 2.92}, {"name": "短剧/互动影游", "change_pct": 5.11}, {"name": "AI视频", "change_pct": 4.19}, {"name": "IP经济/谷子经济", "change_pct": 3.12}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 85, "hot_rank_chg": -38, "stock_cnt": 5887, "price": "244.57", "change": "2.58", "market_id": "17", "circulate_market_value": "164037580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002425", "name": "凯撒文化", "hot_rank": 86, "hot_rank_chg": 210, "stock_cnt": 5887, "price": "3.48", "change": "10.13", "market_id": "33", "circulate_market_value": "3202247000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "手游", "xgb_concepts": [{"name": "手游", "change_pct": 4.55}, {"name": "ST摘帽", "change_pct": 2.26}, {"name": "人工智能", "change_pct": 2.82}, {"name": "VR&AR", "change_pct": 4.43}, {"name": "游戏", "change_pct": 5.04}, {"name": "动漫", "change_pct": 6.19}, {"name": "腾讯概念股", "change_pct": 2.92}, {"name": "快手概念股", "change_pct": 4.22}, {"name": "NFT", "change_pct": 4.15}, {"name": "元宇宙", "change_pct": 3.92}, {"name": "虚拟数字人", "change_pct": 4.02}, {"name": "字节跳动概念股", "change_pct": 3.65}, {"name": "云游戏", "change_pct": 4.69}, {"name": "华为产业链", "change_pct": 2.75}, {"name": "IP经济/谷子经济", "change_pct": 3.12}]}, {"code": "002376", "name": "新北洋", "hot_rank": 87, "hot_rank_chg": 76, "stock_cnt": 5887, "price": "7.73", "change": "9.96", "market_id": "33", "circulate_market_value": "6087101000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人零部件", "xgb_concepts": [{"name": "彩票", "change_pct": 2.73}, {"name": "锂电池", "change_pct": 1.55}, {"name": "新零售", "change_pct": 1.62}, {"name": "人工智能", "change_pct": 2.82}, {"name": "高铁轨交", "change_pct": 1.74}, {"name": "人脸识别", "change_pct": 3.4}, {"name": "物联网", "change_pct": 2.74}, {"name": "新能源汽车", "change_pct": 1.95}, {"name": "机器人", "change_pct": 3.22}, {"name": "智慧物流", "change_pct": 2.12}, {"name": "机器视觉", "change_pct": 3.75}, {"name": "智能制造", "change_pct": 2.7}, {"name": "换电概念", "change_pct": 2.01}, {"name": "信创", "change_pct": 2.45}, {"name": "数字人民币", "change_pct": 2.21}, {"name": "传感器", "change_pct": 3.26}, {"name": "盲盒", "change_pct": 3.06}, {"name": "打印机", "change_pct": 2.84}]}, {"code": "600776", "name": "东方通信", "hot_rank": 88, "hot_rank_chg": -11, "stock_cnt": 5887, "price": "12.41", "change": "1.55", "market_id": "17", "circulate_market_value": "11863960800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.22}, {"name": "5G", "change_pct": 2.64}, {"name": "网络安全", "change_pct": 2.49}, {"name": "军工集团", "change_pct": 0.41}, {"name": "军工", "change_pct": 1.46}, {"name": "国企改革", "change_pct": 0.65}, {"name": "华为云·鲲鹏", "change_pct": 2.45}, {"name": "卫星互联网", "change_pct": 2.39}, {"name": "华为产业链", "change_pct": 2.75}, {"name": "AI大模型/智能体", "change_pct": 2.42}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 89, "hot_rank_chg": 57, "stock_cnt": 5887, "price": "13.72", "change": "2.46", "market_id": "17", "circulate_market_value": "9137520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600609", "name": "金杯汽车", "hot_rank": 90, "hot_rank_chg": 117, "stock_cnt": 5887, "price": "3.83", "change": "10.06", "market_id": "17", "circulate_market_value": "4996459300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.91}, {"name": "汽车零部件", "change_pct": 2.88}, {"name": "机器人", "change_pct": 3.22}, {"name": "振兴东北", "change_pct": 1.14}]}, {"code": "002185", "name": "华天科技", "hot_rank": 91, "hot_rank_chg": -23, "stock_cnt": 5887, "price": "14.61", "change": "1.74", "market_id": "33", "circulate_market_value": "48652293000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 92, "hot_rank_chg": -34, "stock_cnt": 5887, "price": "42.71", "change": "1.19", "market_id": "17", "circulate_market_value": "104795232000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 93, "hot_rank_chg": -27, "stock_cnt": 5887, "price": "70.93", "change": "0.35", "market_id": "17", "circulate_market_value": "171065350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 94, "hot_rank_chg": 53, "stock_cnt": 5887, "price": "5.77", "change": "1.41", "market_id": "17", "circulate_market_value": "14531802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.83}, {"name": "工业大麻", "change_pct": 2.14}, {"name": "中药", "change_pct": 0.81}, {"name": "保健品", "change_pct": 1.0}, {"name": "民营医院", "change_pct": 1.19}, {"name": "医药", "change_pct": 0.89}, {"name": "化学原料药", "change_pct": 0.77}, {"name": "流感", "change_pct": 1.11}, {"name": "振兴东北", "change_pct": 1.14}, {"name": "食品", "change_pct": 0.95}, {"name": "肝炎概念", "change_pct": 0.75}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 95, "hot_rank_chg": -5, "stock_cnt": 5887, "price": "52.87", "change": "8.72", "market_id": "17", "circulate_market_value": "7556656900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300556", "name": "丝路视觉", "hot_rank": 96, "hot_rank_chg": 59, "stock_cnt": 5887, "price": "22.25", "change": "20.01", "market_id": "33", "circulate_market_value": "2414272100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI漫剧"}, {"code": "002249", "name": "大洋电机", "hot_rank": 97, "hot_rank_chg": -3, "stock_cnt": 5887, "price": "7.84", "change": "3.43", "market_id": "33", "circulate_market_value": "14622249000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": 1.93}, {"name": "云计算数据中心", "change_pct": 2.55}, {"name": "军民融合", "change_pct": 1.84}, {"name": "氢能源/燃料电池", "change_pct": 1.3}, {"name": "风电", "change_pct": 1.05}, {"name": "军工", "change_pct": 1.46}, {"name": "新能源汽车", "change_pct": 1.95}, {"name": "新能源车零部件", "change_pct": 2.68}, {"name": "轮边电机", "change_pct": 2.2}, {"name": "人形机器人", "change_pct": 3.92}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 98, "hot_rank_chg": 34, "stock_cnt": 5887, "price": "12.66", "change": "2.68", "market_id": "17", "circulate_market_value": "13881623000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "应急产业", "change_pct": 1.68}, {"name": "国产软件", "change_pct": 2.45}, {"name": "人工智能", "change_pct": 2.82}, {"name": "网络安全", "change_pct": 2.49}, {"name": "云计算数据中心", "change_pct": 2.55}, {"name": "军民融合", "change_pct": 1.84}, {"name": "京津冀", "change_pct": 1.03}, {"name": "冷链", "change_pct": 1.42}, {"name": "物联网", "change_pct": 2.74}, {"name": "大数据", "change_pct": 2.4}, {"name": "智慧城市", "change_pct": 2.62}, {"name": "军工", "change_pct": 1.46}, {"name": "智能制造", "change_pct": 2.7}, {"name": "工业互联网", "change_pct": 2.35}, {"name": "数字经济", "change_pct": 2.62}, {"name": "国产芯片", "change_pct": 2.79}, {"name": "阿里巴巴概念股", "change_pct": 2.79}, {"name": "腾讯概念股", "change_pct": 2.92}, {"name": "信创", "change_pct": 2.45}, {"name": "华为昇腾", "change_pct": 2.42}, {"name": "东数西算/算力", "change_pct": 2.35}, {"name": "数据要素", "change_pct": 2.87}, {"name": "无线耳机", "change_pct": 3.59}, {"name": "智慧政务", "change_pct": 2.66}, {"name": "华为云·鲲鹏", "change_pct": 2.45}, {"name": "华为产业链", "change_pct": 2.75}, {"name": "AI大模型/智能体", "change_pct": 2.42}, {"name": "DeepSeek概念股", "change_pct": 2.6}]}, {"code": "002623", "name": "亚玛顿", "hot_rank": 99, "hot_rank_chg": 134, "stock_cnt": 5887, "price": "21.21", "change": "10.01", "market_id": "33", "circulate_market_value": "4085812500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "复牌"}, {"code": "000547", "name": "航天发展", "hot_rank": 100, "hot_rank_chg": 30, "stock_cnt": 5887, "price": "13.30", "change": "4.07", "market_id": "33", "circulate_market_value": "21135310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603286", "name": "日盈电子", "price": 60.9, "change_pct": 10.01, "reason": "公司压阻式的电子皮肤样品已研发成功，在人形机器人新领域，公司以布局柔性触觉传感电子皮肤新产品为契机，结合发展战略及市场需求加快布局柔性线束等其他人形机器人产品", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 11.27, "first_limit_up": 1794291042, "break_limit_up_times": 2}, {"code": "603809", "name": "豪能股份", "price": 9.55, "change_pct": 10.02, "reason": "公司聚焦高精密行星减速器、高精密摆线减速机等产品研发量产，智能制造核心零部件项目一期、二期均有序推进，并已布局泸州关节减速器生产基地", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.51, "first_limit_up": 1794275211, "break_limit_up_times": 0}, {"code": "002664", "name": "信质集团", "price": 15.2, "change_pct": 9.99, "reason": "全球领先的汽车发电机定子生产企业；网传纪要表示，公司供货华为车BU定转子总成和电机，华为曾想把汽车零部件的能力迁移到机器人端做相关储备，公司跟车BU有过机器人业务的沟通", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.44, "first_limit_up": 1794290898, "break_limit_up_times": 1}, {"code": "002905", "name": "金逸影视", "price": 9.34, "change_pct": 10.01, "reason": "国内国内影投前五，院线前七的院线放映及发行方", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 6.17, "first_limit_up": 1794275085, "break_limit_up_times": 1}, {"code": "600715", "name": "文投控股", "price": 2.85, "change_pct": 10.04, "reason": "公司影院业务推行“一店一策”创新和“影院+”业态，探索VR观影提升非票房收入，五棵松旗舰店为全国单店票房冠军", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 6.42, "first_limit_up": 1794274270, "break_limit_up_times": 0}, {"code": "001318", "name": "阳光乳业", "price": 14.69, "change_pct": 10.04, "reason": "公司主营业务为液态乳，包括儿童调制乳、A2牛奶", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.9, "first_limit_up": 1794274560, "break_limit_up_times": 2}, {"code": "002324", "name": "普利特", "price": 9.06, "change_pct": 9.95, "reason": "1、公司LCP产品已向头部终端客户批量交付，适用于低轨卫星等商业航天领域，并持续推进相关验证与量产；\n2、公司LCP薄膜技术壁垒极高且是国内唯一实现该技术突破企业，已与海外客户关于LCP薄膜在脑机接口领域应用进行共同开发以及验证工作", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.31, "first_limit_up": 1794291009, "break_limit_up_times": 0}, {"code": "603536", "name": "惠发食品", "price": 10.77, "change_pct": 10.01, "reason": "公司主要从事速冻类预制菜的丸类制品、肠类制品、油炸类制品、串类制品、菜肴制品等速冻食品的研发、生产和销售以及供应链业务的推广运营", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.76, "first_limit_up": 1794292109, "break_limit_up_times": 0}, {"code": "600408", "name": "安泰集团", "price": 3.65, "change_pct": 9.94, "reason": "山西省焦化行业龙头企业之一，H型钢与焦炭双主业", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 16.9, "first_limit_up": 1794274924, "break_limit_up_times": 13}, {"code": "002631", "name": "德尔未来", "price": 9.74, "change_pct": 10.06, "reason": "1、公司全资成立德晶耀半导体苏州有限公司，经营范围涵盖电子专用材料研发、半导体器件专用设备制造等；\n2、控股子公司烯成石墨烯有用于柔性屏的石墨烯透明导电薄膜产品布局", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.33, "first_limit_up": 1794288579, "break_limit_up_times": 1}, {"code": "000782", "name": "恒申新材", "price": 7.93, "change_pct": 9.99, "reason": "公司主营产品为锦纶6切片和纺丝，位于国内锦纶行业中领先地位，先后开发了冰爽丝、抗菌吸湿排汗纤维等功能纤维，用于军队内裤、袜子，提高了军用被装产品的卫生保健功能", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.35, "first_limit_up": 1794290115, "break_limit_up_times": 0}, {"code": "002209", "name": "达 意 隆", "price": 12.69, "change_pct": 9.97, "reason": "公司专注于工业分拣机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.46, "first_limit_up": 1794274974, "break_limit_up_times": 1}, {"code": "603602", "name": "纵横通信", "price": 12.41, "change_pct": 10.02, "reason": "公司已为红果短剧、番茄小说等头部平台提供推广服务", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 3.08, "first_limit_up": 1794278222, "break_limit_up_times": 0}, {"code": "002425", "name": "凯撒文化", "price": 3.48, "change_pct": 10.13, "reason": "国内较早布局精品IP游戏的老牌厂商，主营移动端网络游戏等", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 4.7, "first_limit_up": 1794274449, "break_limit_up_times": 1}, {"code": "605598", "name": "上海港湾", "price": 28.15, "change_pct": 10.0, "reason": "天基基础设施能源分系统核心供应商", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 3.6, "first_limit_up": 1794274714, "break_limit_up_times": 0}, {"code": "605577", "name": "龙版传媒", "price": 17.28, "change_pct": 9.99, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 11.9, "first_limit_up": 1794279289, "break_limit_up_times": 1}, {"code": "001339", "name": "智微智能", "price": 63.39, "change_pct": 9.99, "reason": "子公司腾云智算算力设备销售保持强劲增长，维保业务实现翻倍增长，已发布GPU算力租赁平台HAT，支持整机与切卡租赁，首批种子用户落地", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.12, "first_limit_up": 1794288060, "break_limit_up_times": 0}, {"code": "001379", "name": "腾达科技", "price": 17.44, "change_pct": 10.03, "reason": "1、公司产品以不锈钢紧固件为主，其中高温合金、特种合金紧固件产品被应用于航天工程；\n2、在核电领域， 公司成功取得中核集团、 中广核集团核电设备用紧固件合格供应商、 核能行业合格供应商认证", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 26.05, "first_limit_up": 1794291267, "break_limit_up_times": 0}, {"code": "002931", "name": "锋龙股份", "price": 48.25, "change_pct": 10.01, "reason": "优必选受让控股股东所持29.99%股份", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 4.23, "first_limit_up": 1794274290, "break_limit_up_times": 0}, {"code": "600510", "name": "黑牡丹", "price": 8.16, "change_pct": 9.97, "reason": "公司纺织服装业务具备从染色、织造、整理到服装的垂直一体化生产体系，是国内牛仔布生产销售规模最大的企业，“黑牡丹”商标为中国驰名商标", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.52, "first_limit_up": 1794276236, "break_limit_up_times": 2}, {"code": "002501", "name": "*ST利源", "price": 1.2, "change_pct": 10.09, "reason": "公司拟1.11亿元收购金利股份控制权，快速切入再生铝赛道", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.93, "first_limit_up": 1794276276, "break_limit_up_times": 5}, {"code": "002313", "name": "日海智能", "price": 9.24, "change_pct": 10.0, "reason": "公司推出多款端侧AI智能模组，如48TOPS算力的SIM9850等，支持语音交互、图像分析，为陪伴机器人、AR眼镜等场景提供高算力智能连接方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.11, "first_limit_up": 1794276534, "break_limit_up_times": 6}, {"code": "002048", "name": "宁波华翔", "price": 20.86, "change_pct": 10.02, "reason": "公司是智元机器人重要合作伙伴，自2025年7月起负责全尺寸双足人形机器人关节模组总成生产与整机装配", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.37, "first_limit_up": 1794277110, "break_limit_up_times": 5}, {"code": "002376", "name": "新北洋", "price": 7.73, "change_pct": 9.96, "reason": "公司控股子公司正棋机器人专注物流自动化设备，提供分拣机、AGV 机器人及全场景解决方案，伺服电机等核心零部件已批量应用于物流机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.12, "first_limit_up": 1794276663, "break_limit_up_times": 2}, {"code": "605398", "name": "新炬网络", "price": 25.75, "change_pct": 10.0, "reason": "1、公司三季度营业收入同比增长45.40%，主要系短剧及智能内容的制作和营销业务进入规模上升阶段；\n2、公司AI运维智能体是基于公司多年专业IT智慧运维经验和成熟的智能运维平台作为基础，以Agent为核心调度单元，整合感知、记忆、认知与行动四层能力，自动归因海量告警、自主编排修复动作、沉淀运维知识形成持续进化的智能体；\n3、公司是一家以提供IT数据中心运维服务及运维产品为主的多云全栈智能运维服务商，下属子公司新炬技术AIOPS智慧运维平台软件V4.0与华为云GaussDB、华为云公有云平台（鲲鹏）完成相互", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 5.01, "first_limit_up": 1794274237, "break_limit_up_times": 1}, {"code": "002865", "name": "钧达股份", "price": 48.9, "change_pct": 10.01, "reason": "公司与尚翼光电达成战略合作，双方将围绕钙钛矿电池技术在太空能源的应用展开合作", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 23.63, "first_limit_up": 1794290961, "break_limit_up_times": 0}, {"code": "600778", "name": "友好集团", "price": 5.82, "change_pct": 10.02, "reason": "新疆商业流通龙头；公司经营业态包括百货商场、购物中心、大型综合超市、标准超市、超市便利店等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 22.16, "first_limit_up": 1794274819, "break_limit_up_times": 7}, {"code": "301314", "name": "科瑞思", "price": 50.7, "change_pct": 20.0, "reason": "1、公司拟收购宏钢光电，切入光电子封装壳体赛道，交易完成后将新增激光器、光通信、混合集成电路封装壳体及高功率光纤激光器芯片热沉等业务；\n2、公司小型磁环线圈重点应用于5G基站、WiFi6路由器、机顶盒及数据中心的交换机和服务器；\n3、公司参与的电感业务包括电感绕线、电感成品和相关自动化生产设备", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 15.84, "first_limit_up": 1794289512, "break_limit_up_times": 0}, {"code": "603278", "name": "大业股份", "price": 15.1, "change_pct": 9.98, "reason": "1、公司人形机器人灵巧手用钢丝尚处于市场调研和研究开发阶段；\n2、公司投资联营企业湖北三江航天江北机械工程主要从事航天动力系统、天线罩等航天型号产品及特种压力容器产品、高端机电成套装备、先进激光应用设备等民用产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 24.06, "first_limit_up": 1794293668, "break_limit_up_times": 0}, {"code": "001314", "name": "亿道信息", "price": 42.55, "change_pct": 10.01, "reason": "公司已形成AI音频眼镜、AI拍照眼镜等完整产品矩阵，主打款SW3035 AI眼镜支持阿里云等主流AI云服务，实现端边云三位一体协同", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 4.78, "first_limit_up": 1794289773, "break_limit_up_times": 0}, {"code": "002343", "name": "慈文传媒", "price": 9.33, "change_pct": 10.02, "reason": "公司核心影视业务主要包括影视剧的投资、制作及发行业务，推动《武林外史》《圆月弯刀》《多情剑客无情剑》等五部微短剧开发制作；互动剧方面，公司已与互影科技签署了战略框架合作协议，双方将利用AI联合研发改编经典IP衍生互动剧", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 21.93, "first_limit_up": 1794274707, "break_limit_up_times": 0}, {"code": "603283", "name": "赛腾股份", "price": 40.23, "change_pct": 10.01, "reason": "公司通过收购日本 Optima 掌握晶圆缺陷检测等核心技术，是国内唯一能量产 HBM 量测设备的企业，且半导体设备产品线丰富，涵盖晶圆字符检测机、激光开槽机等，为国产芯片生产提供关键设备支持", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.0, "first_limit_up": 1794288047, "break_limit_up_times": 0}, {"code": "002535", "name": "林州重机", "price": 2.82, "change_pct": 10.16, "reason": "公司与中科院自动化研究所签订共建“工业机器人技术工程中心协议书”，致力于工业用智能机器人和高新技术领域的核心技术研发", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.81, "first_limit_up": 1794275628, "break_limit_up_times": 0}, {"code": "603893", "name": "瑞芯微", "price": 233.2, "change_pct": 10.0, "reason": "公司RK182X协处理器顺利量产，已有数百个客户、几十个行业在深化研发中，应用场景覆盖各类机器人、车载AI BOX等领域，首批客户已进入量产阶段，将在下半年放量", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1794288023, "break_limit_up_times": 0}, {"code": "002981", "name": "朝阳科技", "price": 24.2, "change_pct": 10.0, "reason": "1、公司有向部分客户提供VR面罩及相关零部件等产品，已建立良好的合作基础；\n2、子公司星联技术的连接器产品主要应用于工业机器人、储能、新能源汽车等领域，2025年已实现部分工业机器人领域的产品交付；\n3、公司主营业务包括声学产品、精密零组件和OEM代工生产业务，产品广泛应用于智能手机、平板电脑及智能可穿戴设备等智能终，进入了苹果等知名终端品牌的供应链体系", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 5.9, "first_limit_up": 1794287127, "break_limit_up_times": 0}, {"code": "600609", "name": "金杯汽车", "price": 3.83, "change_pct": 10.06, "reason": "公司出资900万元持股60%设立金智变量机器人科技沈阳有限公司，与自变量机器人科技深圳有限公司合作在汽车行业开展垂类模型开发及数据采集，主要业务为机器人销售、数据类业务等", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 7.88, "first_limit_up": 1794277981, "break_limit_up_times": 0}, {"code": "300426", "name": "华智数媒", "price": 11.47, "change_pct": 19.98, "reason": "公司正在全面推进长中短精品影视剧内容生产，结合AIGC工具打造优质内容，深度参与浙江广电集团“智媒果”AIGC创新生态平台的开发和应用，并建立影视垂类AIGC实验室", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 27.56, "first_limit_up": 1794293787, "break_limit_up_times": 0}, {"code": "300556", "name": "丝路视觉", "price": 22.25, "change_pct": 20.01, "reason": "1、公司在VR/AR/MR交互内容与解决方案领域布局较早，可为智能眼镜提供图形图像数字内容与视觉呈现服务，开发内容可适配苹果MR等多款主流头显；\n2、公司旗下提亚数科以城市基建、生态建筑等要素搭建三维数字城市底图，实现数字孪生实时图形呈现与应用，其自研提亚引擎作为全流程数据驱动的一站式生产平台持续迭代", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 36.61, "first_limit_up": 1794293298, "break_limit_up_times": 0}, {"code": "603366", "name": "日出东方", "price": 10.88, "change_pct": 10.01, "reason": "公司光伏业务主要为分布式户用光伏业务和分布式工商业光伏业务，空气能热泵领域技术领先", "plates": ["光伏"], "limit_up_days": 3, "turnover_ratio": 0.71, "first_limit_up": 1794273900, "break_limit_up_times": 0}, {"code": "002614", "name": "奥佳华", "price": 7.62, "change_pct": 9.96, "reason": "公司是全国最大的养老按摩器材生产制造服务商；旗下AI按摩机器人运用了语音交互、人脸识别、智能生理参数检测等技术，还接入DeepSeek，打造健康生态AI大模型", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.64, "first_limit_up": 1794276177, "break_limit_up_times": 1}, {"code": "300052", "name": "中青宝", "price": 11.82, "change_pct": 20.0, "reason": "公司主营网络游戏开发、运营，此前组建智算事业部，运营深圳观澜、成都智算、乐山未来城三大数据中心，与宝德计算机系统股份有限公司为同一实际控制人", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 20.27, "first_limit_up": 1794292635, "break_limit_up_times": 1}, {"code": "603037", "name": "凯众股份", "price": 14.37, "change_pct": 10.03, "reason": "公司已组建研发团队，探索聚氨酯材料技术在机器人领域的应用机会", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.54, "first_limit_up": 1794274383, "break_limit_up_times": 1}, {"code": "002310", "name": "东方新能", "price": 2.81, "change_pct": 10.2, "reason": "1、公司拟斥资超9亿元采购GPU算力板卡，拓展算力服务；\n2、公司主营业务为新能源电站的开发、投资、建设及运营，重点聚焦陆上风电与分布式光伏等核心领域，并全面探索布局储能业务", "plates": ["云计算数据中心"], "limit_up_days": 3, "turnover_ratio": 1.37, "first_limit_up": 1794273900, "break_limit_up_times": 0}, {"code": "001226", "name": "拓山重工", "price": 41.81, "change_pct": 10.0, "reason": "公司的主要产品包括链轨节、销套、支重轮、销轴、制动装置系列等，主要应用于工程机械领域", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 7.81, "first_limit_up": 1794277887, "break_limit_up_times": 2}, {"code": "002708", "name": "光洋股份", "price": 24.17, "change_pct": 10.01, "reason": "1、公司拟10亿建设新能源汽车及机器人用精密零部件项目；\n2、公司已获得小鹏飞行汽车X3项目定点，完成A样交样", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 3.14, "first_limit_up": 1794274212, "break_limit_up_times": 0}, {"code": "002021", "name": "中捷资源", "price": 2.37, "change_pct": 10.23, "reason": "公司主要从事中、高档工业缝制机械，全资子公司浙江中捷缝纫科技与复旦大学合作机器人等技术", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.37, "first_limit_up": 1794278409, "break_limit_up_times": 3}, {"code": "603703", "name": "盛洋科技", "price": 12.21, "change_pct": 10.0, "reason": "公司是DVB-NIP软硬件唯一提供商，软件已获欧洲某头部卫星运营商认可", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 29.17, "first_limit_up": 1794279416, "break_limit_up_times": 5}, {"code": "601595", "name": "上海电影", "price": 42.57, "change_pct": 10.0, "reason": "公司拥有“专业发行+综合院线+高端影院”完整电影发行放映产业链，控股股东上海电影集团已于前期在上海影视乐园启动真人互动剧游项目，相关剧本策划、演员统筹、投资测算正在积极推进中；旗下的大IP开发主体上影元与互影科技、阅文集团等联合出品了首个双人互动影游项目《谍影成双》", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 5.78, "first_limit_up": 1794278858, "break_limit_up_times": 0}, {"code": "603666", "name": "亿嘉和", "price": 28.51, "change_pct": 9.99, "reason": "公司与与华为云签约深入合作，公司将基于在电力、康养等场景深耕的产品能力积累，提供场景和产品设计制造等能力；华为云将提供平台化大小脑产品能力，并协同电力军团进行场景化方案规划设计，双方共同推动具身智能机器人产品在商业场景的落地", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1794274292, "break_limit_up_times": 0}, {"code": "301255", "name": "通力科技", "price": 21.97, "change_pct": 19.99, "reason": "公司专注齿轮减速机研发生产，产品覆盖多个系列，可用于各类传动机械及大型重型设备", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.45, "first_limit_up": 1794274371, "break_limit_up_times": 0}, {"code": "002578", "name": "闽发铝业", "price": 6.06, "change_pct": 9.98, "reason": "1、光伏边框、储能托架类铝型材均为公司工业型材板块的成熟产品；\n2、公司液冷服务器用铝型材已开始小批量供货，正积极推进相关领域的市场拓展与技术优化，稳步提升产品交付能力；\n3、公司位于福建省南安市，为海西板块的铝型材龙头企业，表示将重点拓展机器人等工业铝型材及高端装备铝型材赛道", "plates": ["光伏"], "limit_up_days": 7, "turnover_ratio": 38.9, "first_limit_up": 1794291183, "break_limit_up_times": 0}, {"code": "002303", "name": "美盈森", "price": 4.73, "change_pct": 10.0, "reason": "国际领先的包装一体化综合服务商；公司主营运输包装、精品包装、标签及电子功能材料模切产品，并持续为消费电子、白酒、家电等行业龙头提供一体化包装服务", "plates": ["造纸"], "limit_up_days": 1, "turnover_ratio": 6.6, "first_limit_up": 1794292617, "break_limit_up_times": 1}, {"code": "603466", "name": "风语筑", "price": 15.33, "change_pct": 9.97, "reason": "公司联手宇树科技共同打造杭州市具身智能展示与应用推广中心，深度参与国家级中试基地配套建设", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.36, "first_limit_up": 1794277811, "break_limit_up_times": 1}, {"code": "002347", "name": "泰尔股份", "price": 7.7, "change_pct": 10.0, "reason": "公司工业机器人已覆盖包装、焊挂牌、取样贴标、拆带等机型，并明确布局军工、航空航天、船舶、核电、风电、有色等领域", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 8.49, "first_limit_up": 1794274212, "break_limit_up_times": 0}, {"code": "002870", "name": "香山股份", "price": 39.83, "change_pct": 10.0, "reason": "公司旗下均胜群英参与了贾维斯JARVIS的人形机器人智能表面、执行器方面的研发、生产工作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.16, "first_limit_up": 1794276612, "break_limit_up_times": 0}, {"code": "603598", "name": "引力传媒", "price": 23.69, "change_pct": 9.98, "reason": "1、领先的数字营销服务公司，字节跳动巨量引擎核心代理商；公司形成独具特色的短剧业务体系，为客户提供短剧营销投前、投中到投后的全方位服务；\n2、公司内部自研上线“核力 AI”的 1.0 版本、已具备“营销文案 生成”、“图片识别与生成”及“数字分身复刻及驱动”等功能应用", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 13.77, "first_limit_up": 1794278608, "break_limit_up_times": 0}, {"code": "600892", "name": "大晟文化", "price": 5.6, "change_pct": 10.02, "reason": "1、公司游戏影视双驱动，主营业务包括短剧制作、发行业务；\n2、公司游戏业务主要由全资子公司淘乐网络开发运营，专注于回合制端游与手游，代表作为《桃花源记》", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 34.15, "first_limit_up": 1794292912, "break_limit_up_times": 0}, {"code": "605255", "name": "天普股份", "price": 55.46, "change_pct": 10.0, "reason": "控股股东等与中昊芯英签署的协议转让股份完成过户登记，中昊芯英为国内掌握TPU架构AI芯片核心研发技术并实现TPU芯片量产核心公司", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.09, "first_limit_up": 1794287008, "break_limit_up_times": 0}, {"code": "600281", "name": "华阳新材", "price": 5.54, "change_pct": 9.92, "reason": "全资子公司太原华盛丰贵金属材料有限公司经营范围涵盖稀土高磁性材料的回收利用、加工等服务\n", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.09, "first_limit_up": 1794280774, "break_limit_up_times": 1}, {"code": "002876", "name": "三利谱", "price": 30.72, "change_pct": 9.99, "reason": "国内偏光片行业龙头企业之一，公司主营偏光片研发生产销售，产品覆盖手机、电脑、电视、车载显示及智能穿戴等领域", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 5.76, "first_limit_up": 1794288345, "break_limit_up_times": 0}, {"code": "600829", "name": "人民同泰", "price": 9.77, "change_pct": 10.02, "reason": "黑龙江省内最大的医药商业公司，哈药集团医疗商业上市平台", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.23, "first_limit_up": 1794275190, "break_limit_up_times": 0}, {"code": "002861", "name": "瀛通通讯", "price": 13.02, "change_pct": 9.97, "reason": "公司开发各类智能眼镜、音频眼镜产品，并对骨传导音频技术投入了研发", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 3.89, "first_limit_up": 1794287025, "break_limit_up_times": 0}, {"code": "000593", "name": "德龙汇能", "price": 19.31, "change_pct": 10.03, "reason": "公司主营城市管道燃气和零售商业", "plates": ["天然气"], "limit_up_days": 1, "turnover_ratio": 4.6, "first_limit_up": 1794287040, "break_limit_up_times": 0}, {"code": "001232", "name": "嘉立创", "price": 174.78, "change_pct": 10.0, "reason": "公司主营印制电路板制造业务，PCB业务为公司第一大收入来源，拥有五大现代化数字生产基地覆盖PCB全制程\n", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.6, "first_limit_up": 1794288225, "break_limit_up_times": 0}, {"code": "605258", "name": "协和电子", "price": 39.56, "change_pct": 10.01, "reason": "国内领先的高频通讯板生产商；公司车载毫米波雷达等产品且已批量供货，与合众新能源、上汽时代、万帮数字能源等新能源领域的客户建立了合作", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.03, "first_limit_up": 1794277785, "break_limit_up_times": 0}, {"code": "600327", "name": "大东方", "price": 5.94, "change_pct": 10.0, "reason": "1、公司旗下老字号“三凤桥”品牌，在各大主流平台设有“三凤桥旗舰店”，提真空及保鲜包装的各类卤味和熟食制品或礼盒套装，本地实体店在特定节日出售“年夜饭”预制礼盒；\n2、下属医疗业务板块中的儿科业务，主体主要包括以儿童身高管理为主的“健高儿科”、以儿心健康为主的“雅恩健康” 、以普儿科和儿保为主的“知贝医疗”组成，三个方向初步覆盖了儿童生长发育的全阶段", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 7.17, "first_limit_up": 1794274220, "break_limit_up_times": 0}, {"code": "001308", "name": "康冠科技", "price": 24.19, "change_pct": 10.0, "reason": "1、公司多款AI眼镜产品处于研发阶段，规划搭载近眼显示模块，融合多模态AI交互能力，计划于2026年下半年至2027年陆续推向市场；\n2、公司围绕端侧AI硬件全链条布局，投资阶跃星辰、嘉立创、爱培科，双方已推出搭载阶跃星辰大模型的闺蜜机、首款mini AI PC等产品，并拟设立联合实验室探索Token服务收入分成模式", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 5.02, "first_limit_up": 1794287160, "break_limit_up_times": 0}, {"code": "603121", "name": "华培动力", "price": 13.18, "change_pct": 10.02, "reason": "1、公司积极关注以人工智能AI的快速发展带来的人形机器人等新兴市场带来的传感器需求；\n2、公司通过设立全资子公司盛美芯，公司具备了部分核心车规级芯片的自主设计、封装测试的能力，团队具备车规级MEMS压力传感器芯片的研发、生产和销售经验", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 6.72, "first_limit_up": 1794276028, "break_limit_up_times": 0}, {"code": "600793", "name": "宜宾纸业", "price": 15.35, "change_pct": 10.04, "reason": "西南最大的食品包装原纸生产企业；公司主营业务有食品包装原纸、生活用纸原纸以及生活用纸成品纸的生产和销售", "plates": ["造纸"], "limit_up_days": 1, "turnover_ratio": 6.57, "first_limit_up": 1794277086, "break_limit_up_times": 0}, {"code": "002995", "name": "天地在线", "price": 20.68, "change_pct": 10.0, "reason": "1、公司参与制作网络短剧《草莓味的爱情》已在抖音上线发行，具备品牌营销创意、内容生产及推广运营的全案服务能力；\n2、公司在自身数字营销及虚拟数字业务的基础上，已尝试在AI数字人、企业AI助手等应用产品上探索布局，参股公司世优科技推出“世优波塔A 数字人智能体已与Deepseek的通用人工智能(AGI)能力结合", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 20.45, "first_limit_up": 1794287781, "break_limit_up_times": 1}, {"code": "603706", "name": "东方环宇", "price": 22.21, "change_pct": 10.0, "reason": "公司地处新疆，业务包括CNG汽车加气、居民生活用气、工商业客户用气", "plates": ["天然气"], "limit_up_days": 2, "turnover_ratio": 8.33, "first_limit_up": 1794274887, "break_limit_up_times": 10}, {"code": "603215", "name": "比依股份", "price": 16.38, "change_pct": 10.01, "reason": "控股股东拟参与AR光波导龙头理湃光晶新一轮融资，完成后将协助公司落实AR眼镜产线落地", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 5.52, "first_limit_up": 1794288185, "break_limit_up_times": 3}, {"code": "300264", "name": "佳创视讯", "price": 6.58, "change_pct": 20.07, "reason": "公司核心业务聚焦VR内容开发与户外大空间MR体验落地，基于Apple Vision Pro等高端设备进行MR内容开发，MR大空间运营项目已上线并获市场关注", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 11.57, "first_limit_up": 1794287115, "break_limit_up_times": 0}, {"code": "603381", "name": "永臻股份", "price": 21.89, "change_pct": 10.0, "reason": "光伏铝边框绝对龙头，全球市占率超 18%；公司主营光伏边框、BIPV 产品、光伏支架等绿色能源结构材料研发生产，配套隆基、天合光能等国内外头部组件厂商", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 29.58, "first_limit_up": 1794287395, "break_limit_up_times": 4}, {"code": "002432", "name": "九安医疗", "price": 57.65, "change_pct": 10.0, "reason": "家用医疗健康电子产品龙；公司间接投资Kimi、DeepSeek等多家大模型公司", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.51, "first_limit_up": 1794278103, "break_limit_up_times": 2}, {"code": "002160", "name": "常铝股份", "price": 4, "change_pct": 9.89, "reason": "老牌铝板带箔加工企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.35, "first_limit_up": 1794291540, "break_limit_up_times": 0}, {"code": "002623", "name": "亚玛顿", "price": 21.21, "change_pct": 10.01, "reason": "公司是国内光伏镀膜玻璃、大尺寸超薄光伏玻璃的先行者，控股股东拟向骑形网络转让公司20%股份", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 0.69, "first_limit_up": 1794273900, "break_limit_up_times": 0}, {"code": "000678", "name": "襄阳轴承", "price": 19.26, "change_pct": 9.99, "reason": "1、公司部分精密轴承产品可应用于谐波减速器等，目前已经完成产品试制并送样；\n2、公司是湖北省军民融合企业，根据2024年报东风公司的军车轴承一直指定公司独家供应", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 15.35, "first_limit_up": 1794275868, "break_limit_up_times": 0}, {"code": "300613", "name": "富瀚微", "price": 80.02, "change_pct": 20.01, "reason": "公司是国内领先的视频处理芯片设计企业，专注于安防视频监控、汽车电子等领域，其自研的智能安防与物联网 SoC 芯片、车规级 ISP 芯片等产品", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.61, "first_limit_up": 1794287472, "break_limit_up_times": 0}, {"code": "603533", "name": "掌阅科技", "price": 32.8, "change_pct": 9.99, "reason": "1、字节跳动参股，数字阅读行业龙头；公司已接入国内AI创业公司月之暗面旗下AI对话助手产品Kimi；\n2、公司推出海外短剧平台iDrama，现已上线数千部短剧作品，英语、日语、韩语、西班牙语、葡萄牙语等多语种版本", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 14.51, "first_limit_up": 1794274565, "break_limit_up_times": 1}, {"code": "688781", "name": "视涯科技", "price": 56.16, "change_pct": 20.0, "reason": "公司是全球领先的微显示整体解决方案提供商，核心产品为硅基OLED微型显示屏，并为客户提供包括战略产品开发、光学系统和XR整体解决方案等增值服务；前三季度扭亏为盈", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 17.53, "first_limit_up": 1794288044, "break_limit_up_times": 0}, {"code": "002045", "name": "国光电器", "price": 11.41, "change_pct": 10.03, "reason": "1、全球知名的电声制造厂商；公司音响电声类业务主要产品包括扬声器、蓝牙音箱、智能音箱等，应用于可穿戴产品（如VR/AR）、智能手机、平板电脑等消费电子产品；\n2、公司为VR/AR设备供应声学模组，有MR设备声学模组的技术储备，公司也将生产VR整机", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 16.08, "first_limit_up": 1794288051, "break_limit_up_times": 1}, {"code": "603679", "name": "华体科技", "price": 18.41, "change_pct": 9.98, "reason": "智慧路灯龙头；公司已有部分智慧路灯搭载了5G基站，投资5.4亿元构建全国首个以智慧城市为主题的卫星星座“天座”", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 4.76, "first_limit_up": 1794277055, "break_limit_up_times": 0}, {"code": "603955", "name": "大千生态", "price": 37.62, "change_pct": 10.0, "reason": "1、公司宠物业务已覆盖零售及服务、智能硬件、互动体验等场景，形成“消费+服务+产品”的全业务链布局；\n2、子公司浙江深辰凯动科技的羽毛球机器人正从实验原型阶段迈向产业化", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.08, "first_limit_up": 1794275475, "break_limit_up_times": 2}, {"code": "002036", "name": "联创电子", "price": 5.68, "change_pct": 10.08, "reason": "1、公司具备供应AI眼镜相关核心光学部件的能力，已有AR、VR、MR产品出货并产生营业收入；\n2、公司的微棱镜、模造玻璃透镜阵列、硅透镜阵列等光模块光学器件正在送样评测阶段；\n3、公司车载镜头（车内监控、前视ADAS、盲区监控）已获得特斯拉的认证通过，已有正式订单", "plates": ["智能眼镜/MR头显"], "limit_up_days": 1, "turnover_ratio": 5.02, "first_limit_up": 1794287157, "break_limit_up_times": 0}, {"code": "002238", "name": "天威视讯", "price": 7.41, "change_pct": 9.94, "reason": "1、公司持有河马剧场(短剧)母公司中广电传媒26%股权，中电广传媒旗下拥有头部短剧APP河马剧场、东海短剧等多个短剧应用，拥有东海短剧等多个短剧小程序；\n2、公司数据中心业务主要涵盖机柜托管、服务器租用、网络资源租用以及为客户提供定制化解决方案等服务内容；\n3、公司在现有融合业务基础上,融合AI大模型技术,推出了电视AI语音数字人、智能客服等创新服务,优化业务的用户体验,提升客户服务效率;同时通过构建AI运维智能体,逐步向AI驱动的智能化运维体系转型", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 2.63, "first_limit_up": 1794278637, "break_limit_up_times": 0}, {"code": "688611", "name": "杭州柯林", "price": 79.06, "change_pct": 20.01, "reason": "公司拟以自筹资金不超过3亿元收购上海开普勒机器人有限公司41.57%股权并取得控制权，开普勒是国内重载全尺寸工业人形机器人行业领先者", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.81, "first_limit_up": 1794277704, "break_limit_up_times": 0}, {"code": "601188", "name": "龙江交通", "price": 4.61, "change_pct": 10.02, "reason": "公司所辖哈大分公司圆满完成冰雪旅游季等关键时期保畅任务", "plates": ["冰雪产业"], "limit_up_days": 3, "turnover_ratio": 32.44, "first_limit_up": 1794273900, "break_limit_up_times": 11}, {"code": "000530", "name": "冰山冷热", "price": 10.53, "change_pct": 10.03, "reason": "1、冷热产业链综合方案服务提供商；掌握全球先进的二氧化碳跨临界冷热“五合一”零碳技术，为北京冬奥会多个比赛及配套冰场、哈尔滨亚冬会三个冰上场馆提供制冷设备；\n2、公司主要研究数据中心液冷的冷源部分，着重研发干冷器、氟泵系统、冷水系统，部分产品已实现小批量交付", "plates": ["冰雪产业"], "limit_up_days": 2, "turnover_ratio": 24.45, "first_limit_up": 1794274215, "break_limit_up_times": 5}, {"code": "605488", "name": "福莱新材", "price": 57.3, "change_pct": 10.0, "reason": "公司向全球灵巧手领军企业灵心巧手累计交付超3万套触觉传感器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.62, "first_limit_up": 1794274352, "break_limit_up_times": 2}, {"code": "002009", "name": "天奇股份", "price": 19.24, "change_pct": 10.01, "reason": "公司与银河通用、优必选科技等提供包括轮式、双足等多品类机器人产品及差异化智能制造解决方案，银河通用成为2026春晚指定具身大模型机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.78, "first_limit_up": 1794276198, "break_limit_up_times": 0}, {"code": "000810", "name": "创维数字", "price": 12.14, "change_pct": 9.96, "reason": "1、公司基于在XR领域长期积累的空间定位、多摄像头协同与时空同步等软硬件与整机能力，已切入具身智能数据采集领域，面向具身智能与机器人训练场景，推出了EGO第一视角数据采集系列产品（含双目、六摄、九摄以及腕部相机、定位模块等），覆盖从第一视角到全身动作的完整数据采集，面向机器人训练、模仿学习、空间感知等具身智能应用场景，目前已于海内外市场形成销售；\n2、公司数字智能盒子支持短剧等内容", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.21, "first_limit_up": 1794286875, "break_limit_up_times": 0}, {"code": "603058", "name": "永吉股份", "price": 8.54, "change_pct": 10.05, "reason": "1、公司AIGC业务已完成33部作品制作并上线21部，贵州灵伍捌完成102部项目制作，并参与淘宝AI短剧品牌共创计划；\n2、子公司上海埃延生产的半导体材料衬底外延设备，目前设备处于客户验证阶段；\n3、贵州省内大规模的专业烟标印刷企业，主营业务为烟标和其他包装印刷品；控股子公司澳大利亚公司TB与曲靖云麻公司，分别开展医用大麻及工业大麻领域的业务", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 9.88, "first_limit_up": 1794278571, "break_limit_up_times": 2}, {"code": "600530", "name": "ST交昂", "price": 4.43, "change_pct": 9.93, "reason": "1、公司运营6家营利性护理院/医院，为8家非营利性老年医疗护理机构输出管理咨询服务，总运营床位数近4000张，项目遍布江浙沪近10个城市；\n2、公司昂立益生菌卫生巾系列由演员佟丽娅代言，产品特别添加了昂立自有的4株复配菌株和2种益生元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.87, "first_limit_up": 1794277828, "break_limit_up_times": 0}, {"code": "600261", "name": "阳光照明", "price": 5.85, "change_pct": 9.96, "reason": "中国最大的节能灯生产和出口基地之一；公司使用自有资金 3,000万元参与蓝星光域（上海）航天科技有限公司融资，完成后阳光照明持有其1.0989%股权。蓝星光域成立于2021年 5月，专注于全场景激光通信解决方案，核心产品包括星载同轨/异轨激光通信终端、机载平流层激光通信终端等，主要应用于卫星间、星地间高速率通信，业务覆盖空天地海全场景空域", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.89, "first_limit_up": 1794274216, "break_limit_up_times": 0}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};