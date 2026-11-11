const UPDATE_TIME = "2026-11-11 01:41";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": 0.61,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续256天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 0.72,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "短剧游戏",
    "rise": -0.6,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "AI视频",
    "rise": -0.42,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886068"
  },
  {
    "name": "机器人概念",
    "rise": 0.66,
    "rate": 0,
    "tag": "34家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "光伏概念",
    "rise": 0.81,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "人工智能",
    "rise": 0.38,
    "rate": 0,
    "tag": "25家涨停",
    "hotTag": "连续34天上榜",
    "rankChg": -1,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "AI眼镜",
    "rise": 0.54,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886085"
  },
  {
    "name": "AI应用",
    "rise": 0.18,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续85天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "冰雪产业",
    "rise": -0.66,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续22天上榜",
    "rankChg": 2,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "创新药",
    "rise": 0.01,
    "rate": 0,
    "tag": "",
    "hotTag": "连续157天上榜",
    "rankChg": -1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.75,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续327天上榜",
    "rankChg": -1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": 1.16,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续150天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "海工装备",
    "rise": 0.69,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885426"
  },
  {
    "name": "文化传媒概念",
    "rise": -0.32,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "传媒ETF",
    "code": "885418"
  },
  {
    "name": "存储芯片",
    "rise": 0.8,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续280天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "智能音箱",
    "rise": 0.28,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "",
    "rankChg": -2,
    "etfName": "物联网ETF",
    "code": "885771"
  },
  {
    "name": "芯片概念",
    "rise": 0.82,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续37天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "885756"
  },
  {
    "name": "猪肉",
    "rise": -0.07,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 2,
    "etfName": "农业ETF",
    "code": "885573"
  },
  {
    "name": "算力租赁",
    "rise": 0.54,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  }
];
const THS_EVENTS = [
  {
    "title": "华为新型存储系统11月12日启动试用，瞄准AI温冷数据",
    "desc": "",
    "heat": 238876,
    "direction": "磁电存储",
    "themes": [
      "磁电存储"
    ],
    "stocks": [
      {
        "name": "斯迪克",
        "code": "300806",
        "chg": 6.706562
      }
    ]
  },
  {
    "title": "全球最强 AI 模型：Claude Fable 5.2 登场，机器人测试成功率64.9%较GPT-6 Astra翻倍、登顶多项基准",
    "desc": "",
    "heat": 156518,
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
        "name": "瑞迪智驱",
        "code": "301596",
        "chg": 10.951305
      }
    ]
  },
  {
    "title": "阿里拟分拆平头哥赴港上市 估值或在200亿至300亿美元",
    "desc": "",
    "heat": 107432,
    "direction": "平头哥IPO",
    "themes": [
      "平头哥",
      "芯片概念"
    ],
    "stocks": [
      {
        "name": "中科海讯",
        "code": "300810",
        "chg": 11.781889
      }
    ]
  },
  {
    "title": "AI眼镜热度的产业链投影：从端侧AI到PCB、存储的传导距离有多远",
    "desc": "",
    "heat": 57181,
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
        "name": "瀛通通讯",
        "code": "002861",
        "chg": 9.984639
      }
    ]
  },
  {
    "title": "新一轮俄美乌三方会谈在阿布扎比开始举行",
    "desc": "",
    "heat": 26734,
    "direction": "俄乌重建",
    "themes": [
      "国际工程承包",
      "工程机械出口"
    ],
    "stocks": [
      {
        "name": "厦工股份",
        "code": "600815",
        "chg": 9.375
      }
    ]
  },
  {
    "title": "京东入局短剧带货赛道：内测“京东追剧福利社”，剧中同款可直接买",
    "desc": "",
    "heat": 8300,
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
        "name": "文投控股",
        "code": "600715",
        "chg": 8.070175
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "光电共封装CPO",
    "change": "+2.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "林业",
    "change": "+2.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+2.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+2.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+2.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光纤概念",
    "change": "+1.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃",
    "change": "+1.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化工",
    "change": "+1.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "交换机",
    "change": "+1.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电梯",
    "change": "+1.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+1.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5G",
    "change": "+1.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "耐火材料",
    "change": "+1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+1.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磁电存储",
    "change": "+1.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子车牌",
    "change": "+1.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+1.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "矢量网络分析仪VNA",
    "change": "+1.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "英伟达概念",
    "change": "+1.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高校系",
    "change": "+1.19%",
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
    "stock_cnt": 5897,
    "price": "6.07",
    "change": "0.33",
    "market_id": "33",
    "circulate_market_value": "5235868400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.08
      },
      {
        "name": "一带一路",
        "change_pct": 0.36
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.16
      },
      {
        "name": "光伏",
        "change_pct": 0.96
      },
      {
        "name": "有色金属",
        "change_pct": 0.1
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.58
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.88
      },
      {
        "name": "自贸区",
        "change_pct": 0.5
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 2,
    "hot_rank_chg": 6,
    "stock_cnt": 5897,
    "price": "11.97",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "9732185800.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "光伏",
        "change_pct": 0.96
      },
      {
        "name": "家电",
        "change_pct": 0.23
      },
      {
        "name": "储能",
        "change_pct": 0.36
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 0.74
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.3
      },
      {
        "name": "厨卫家电",
        "change_pct": 0.71
      },
      {
        "name": "华为产业链",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 3,
    "hot_rank_chg": 18,
    "stock_cnt": 5897,
    "price": "3.14",
    "change": "10.18",
    "market_id": "17",
    "circulate_market_value": "8987848800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.69
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "游戏",
        "change_pct": 0.56
      },
      {
        "name": "影视",
        "change_pct": -1.13
      },
      {
        "name": "低价股",
        "change_pct": 0.57
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.49
      },
      {
        "name": "AI视频",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 4,
    "hot_rank_chg": -1,
    "stock_cnt": 5897,
    "price": "11.00",
    "change": "4.46",
    "market_id": "33",
    "circulate_market_value": "6601284000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.02
      },
      {
        "name": "边缘计算",
        "change_pct": 0.94
      },
      {
        "name": "核电",
        "change_pct": 0.57
      },
      {
        "name": "海工装备",
        "change_pct": 0.89
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.81
      },
      {
        "name": "冷链",
        "change_pct": 0.29
      },
      {
        "name": "地热",
        "change_pct": 0.38
      },
      {
        "name": "储能",
        "change_pct": 0.36
      },
      {
        "name": "碳中和",
        "change_pct": 0.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.62
      },
      {
        "name": "汽车热管理",
        "change_pct": 0.92
      },
      {
        "name": "热泵",
        "change_pct": 0.74
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.74
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 0.96
      },
      {
        "name": "海洋经济",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 5,
    "hot_rank_chg": -3,
    "stock_cnt": 5897,
    "price": "4.53",
    "change": "-1.95",
    "market_id": "33",
    "circulate_market_value": "7161799900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 0.1
      },
      {
        "name": "体外诊断",
        "change_pct": 0.1
      },
      {
        "name": "医疗器械",
        "change_pct": 0.28
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "基因测序",
        "change_pct": 0.17
      },
      {
        "name": "预制菜",
        "change_pct": 0.17
      },
      {
        "name": "水产养殖",
        "change_pct": 0.4
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.12
      },
      {
        "name": "海洋经济",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 6,
    "hot_rank_chg": 0,
    "stock_cnt": 5897,
    "price": "5.81",
    "change": "-0.68",
    "market_id": "17",
    "circulate_market_value": "7756657700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "物联网",
        "change_pct": 0.76
      },
      {
        "name": "LED",
        "change_pct": 0.2
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.64
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 8,
    "hot_rank_chg": 1,
    "stock_cnt": 5897,
    "price": "4.35",
    "change": "-4.99",
    "market_id": "17",
    "circulate_market_value": "5717958200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "高速公路",
        "change_pct": -0.2
      },
      {
        "name": "振兴东北",
        "change_pct": 0.21
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -1.01
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 9,
    "hot_rank_chg": 11,
    "stock_cnt": 5897,
    "price": "2.90",
    "change": "3.20",
    "market_id": "33",
    "circulate_market_value": "12757127400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.81
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "京津冀",
        "change_pct": 0.33
      },
      {
        "name": "旅游",
        "change_pct": -0.47
      },
      {
        "name": "园林",
        "change_pct": 1.01
      },
      {
        "name": "海绵城市",
        "change_pct": 0.84
      },
      {
        "name": "固废处理",
        "change_pct": 0.62
      },
      {
        "name": "光伏",
        "change_pct": 0.96
      },
      {
        "name": "风电",
        "change_pct": 0.57
      },
      {
        "name": "雄安新区",
        "change_pct": 0.62
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.41
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": 0.72
      },
      {
        "name": "储能",
        "change_pct": 0.36
      },
      {
        "name": "碳中和",
        "change_pct": 0.34
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.74
      },
      {
        "name": "汽车拆解",
        "change_pct": 0.81
      },
      {
        "name": "土壤修复",
        "change_pct": 0.55
      },
      {
        "name": "核污染防治",
        "change_pct": 0.77
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.5
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.78
      },
      {
        "name": "低价股",
        "change_pct": 0.57
      },
      {
        "name": "西部大开发",
        "change_pct": -0.03
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 10,
    "hot_rank_chg": 12,
    "stock_cnt": 5897,
    "price": "6.53",
    "change": "9.93",
    "market_id": "17",
    "circulate_market_value": "5777610300.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "5",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.15
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.03
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "信托",
        "change_pct": 0.03
      },
      {
        "name": "民营医院",
        "change_pct": 0.03
      },
      {
        "name": "社区团购",
        "change_pct": 0.63
      },
      {
        "name": "大金融",
        "change_pct": 0.0
      },
      {
        "name": "餐饮",
        "change_pct": -0.27
      },
      {
        "name": "首发经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 12,
    "hot_rank_chg": -5,
    "stock_cnt": 5897,
    "price": "11.16",
    "change": "-1.33",
    "market_id": "33",
    "circulate_market_value": "11807900600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -0.18
      },
      {
        "name": "电子烟",
        "change_pct": 0.49
      },
      {
        "name": "一带一路",
        "change_pct": 0.36
      },
      {
        "name": "造纸",
        "change_pct": 1.04
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "包装印刷",
        "change_pct": 0.71
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.64
      },
      {
        "name": "太空算力",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 13,
    "hot_rank_chg": 26,
    "stock_cnt": 5897,
    "price": "9.27",
    "change": "-0.96",
    "market_id": "33",
    "circulate_market_value": "4376805800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.69
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "VR&AR",
        "change_pct": 0.43
      },
      {
        "name": "游戏",
        "change_pct": 0.56
      },
      {
        "name": "影视",
        "change_pct": -1.13
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.48
      },
      {
        "name": "动漫",
        "change_pct": -0.63
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.26
      },
      {
        "name": "传媒",
        "change_pct": -0.39
      },
      {
        "name": "元宇宙",
        "change_pct": -0.12
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.49
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.35
      }
    ]
  },
  {
    "code": "002347",
    "name": "泰尔股份",
    "hot_rank": 19,
    "hot_rank_chg": 70,
    "stock_cnt": 5897,
    "price": "7.46",
    "change": "-3.12",
    "market_id": "33",
    "circulate_market_value": "3680636400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 0.41
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "人工智能",
        "change_pct": 0.45
      },
      {
        "name": "工业自动化",
        "change_pct": 1.05
      },
      {
        "name": "风电",
        "change_pct": 0.57
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.58
      },
      {
        "name": "机器人",
        "change_pct": 0.69
      },
      {
        "name": "激光",
        "change_pct": 1.2
      },
      {
        "name": "机器视觉",
        "change_pct": 0.65
      },
      {
        "name": "智能制造",
        "change_pct": 0.66
      },
      {
        "name": "3D打印",
        "change_pct": 0.26
      },
      {
        "name": "工业互联网",
        "change_pct": 0.52
      },
      {
        "name": "数字经济",
        "change_pct": 0.33
      },
      {
        "name": "动力电池回收",
        "change_pct": -0.09
      },
      {
        "name": "超级电容",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 20,
    "hot_rank_chg": 32,
    "stock_cnt": 5897,
    "price": "5.58",
    "change": "-0.36",
    "market_id": "17",
    "circulate_market_value": "3121003000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.69
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.87
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "游戏",
        "change_pct": 0.56
      },
      {
        "name": "影视",
        "change_pct": -1.13
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.49
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 21,
    "hot_rank_chg": -4,
    "stock_cnt": 5897,
    "price": "5.29",
    "change": "-5.54",
    "market_id": "17",
    "circulate_market_value": "6139269600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "纺织服装",
        "change_pct": 0.23
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.27
      },
      {
        "name": "影视",
        "change_pct": -1.13
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.49
      }
    ]
  },
  {
    "code": "300118",
    "name": "东方日升",
    "hot_rank": 30,
    "hot_rank_chg": -11,
    "stock_cnt": 5897,
    "price": "11.09",
    "change": "-4.31",
    "market_id": "33",
    "circulate_market_value": "10275102100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -0.02
      },
      {
        "name": "光伏",
        "change_pct": 0.96
      },
      {
        "name": "储能",
        "change_pct": 0.36
      },
      {
        "name": "BIPV概念",
        "change_pct": 0.83
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.19
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.49
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.73
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 32,
    "hot_rank_chg": 16,
    "stock_cnt": 5897,
    "price": "12.30",
    "change": "0.74",
    "market_id": "17",
    "circulate_market_value": "5104280100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.57
      },
      {
        "name": "5G",
        "change_pct": 1.43
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.81
      },
      {
        "name": "LED",
        "change_pct": 0.2
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.64
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": 1.4
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 33,
    "hot_rank_chg": 13,
    "stock_cnt": 5897,
    "price": "12.20",
    "change": "-7.44",
    "market_id": "33",
    "circulate_market_value": "6911035100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "石墨烯",
        "change_pct": 0.85
      },
      {
        "name": "军民融合",
        "change_pct": 0.69
      },
      {
        "name": "物联网",
        "change_pct": 0.76
      },
      {
        "name": "LED",
        "change_pct": 0.2
      },
      {
        "name": "军工",
        "change_pct": 0.65
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.09
      },
      {
        "name": "海洋经济",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "002045",
    "name": "国光电器",
    "hot_rank": 34,
    "hot_rank_chg": 73,
    "stock_cnt": 5897,
    "price": "10.90",
    "change": "-4.47",
    "market_id": "33",
    "circulate_market_value": "6123978400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": 0.7
      },
      {
        "name": "电子烟",
        "change_pct": 0.49
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.04
      },
      {
        "name": "锂电池",
        "change_pct": 0.41
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "VR&AR",
        "change_pct": 0.43
      },
      {
        "name": "智能音箱",
        "change_pct": 0.39
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.58
      },
      {
        "name": "黑色家电",
        "change_pct": -0.76
      },
      {
        "name": "家电",
        "change_pct": 0.23
      },
      {
        "name": "固态电池",
        "change_pct": 0.25
      },
      {
        "name": "NFT",
        "change_pct": -0.17
      },
      {
        "name": "元宇宙",
        "change_pct": -0.06
      },
      {
        "name": "无线耳机",
        "change_pct": 0.46
      },
      {
        "name": "智能手表",
        "change_pct": 0.14
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.3
      },
      {
        "name": "华为产业链",
        "change_pct": 0.54
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "002160",
    "name": "常铝股份",
    "hot_rank": 37,
    "hot_rank_chg": 325,
    "stock_cnt": 5897,
    "price": "4.40",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "4535209800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.22
      },
      {
        "name": "特斯拉",
        "change_pct": 0.62
      },
      {
        "name": "锂电池",
        "change_pct": 0.46
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.01
      },
      {
        "name": "有色金属",
        "change_pct": 0.23
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.65
      },
      {
        "name": "智能制造",
        "change_pct": 0.79
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.99
      },
      {
        "name": "钠电池",
        "change_pct": 0.24
      },
      {
        "name": "工业母机",
        "change_pct": 1.15
      },
      {
        "name": "汽车热管理",
        "change_pct": 1.04
      },
      {
        "name": "国企改革",
        "change_pct": 0.29
      },
      {
        "name": "生物安全",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "000810",
    "name": "创维数字",
    "hot_rank": 39,
    "hot_rank_chg": 157,
    "stock_cnt": 5897,
    "price": "11.84",
    "change": "-2.47",
    "market_id": "33",
    "circulate_market_value": "13238991000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -0.11
      },
      {
        "name": "折叠屏",
        "change_pct": 0.74
      },
      {
        "name": "超高清视频",
        "change_pct": 0.27
      },
      {
        "name": "半导体",
        "change_pct": 0.9
      },
      {
        "name": "5G",
        "change_pct": 1.58
      },
      {
        "name": "人工智能",
        "change_pct": 0.52
      },
      {
        "name": "VR&AR",
        "change_pct": 0.53
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.91
      },
      {
        "name": "光通信",
        "change_pct": 2.7
      },
      {
        "name": "OLED",
        "change_pct": 0.47
      },
      {
        "name": "物联网",
        "change_pct": 0.86
      },
      {
        "name": "教育",
        "change_pct": 0.84
      },
      {
        "name": "智慧城市",
        "change_pct": 0.58
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.01
      },
      {
        "name": "智能音箱",
        "change_pct": 0.53
      },
      {
        "name": "机器人",
        "change_pct": 0.84
      },
      {
        "name": "黑色家电",
        "change_pct": -0.44
      },
      {
        "name": "家电",
        "change_pct": 0.33
      },
      {
        "name": "WiFi",
        "change_pct": 1.13
      },
      {
        "name": "数字经济",
        "change_pct": 0.38
      },
      {
        "name": "百度概念股",
        "change_pct": 0.07
      },
      {
        "name": "国产操作系统",
        "change_pct": 0.06
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.33
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.63
      },
      {
        "name": "全息概念",
        "change_pct": 0.22
      },
      {
        "name": "元宇宙",
        "change_pct": -0.06
      },
      {
        "name": "F5G",
        "change_pct": 2.73
      },
      {
        "name": "电子后视镜",
        "change_pct": 0.43
      },
      {
        "name": "华为海思",
        "change_pct": 0.76
      },
      {
        "name": "教育信息化",
        "change_pct": 0.49
      },
      {
        "name": "在线教育",
        "change_pct": 0.95
      },
      {
        "name": "云游戏",
        "change_pct": 0.3
      },
      {
        "name": "MiniLED",
        "change_pct": 0.54
      },
      {
        "name": "华为产业链",
        "change_pct": 0.64
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.69
      },
      {
        "name": "星闪概念",
        "change_pct": 0.94
      },
      {
        "name": "智能座舱",
        "change_pct": 0.95
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.37
      },
      {
        "name": "多模态",
        "change_pct": 0.1
      }
    ]
  },
  {
    "code": "600408",
    "name": "安泰集团",
    "hot_rank": 43,
    "hot_rank_chg": 62,
    "stock_cnt": 5897,
    "price": "3.78",
    "change": "3.84",
    "market_id": "17",
    "circulate_market_value": "3815772000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.59
      },
      {
        "name": "钢铁",
        "change_pct": 0.86
      },
      {
        "name": "强势人气股",
        "change_pct": 0.3
      },
      {
        "name": "煤化工",
        "change_pct": 0.73
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 45,
    "hot_rank_chg": -7,
    "stock_cnt": 5897,
    "price": "8.41",
    "change": "-1.18",
    "market_id": "33",
    "circulate_market_value": "13666748000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.13
      },
      {
        "name": "电竞",
        "change_pct": -0.28
      },
      {
        "name": "手游",
        "change_pct": 0.62
      },
      {
        "name": "人工智能",
        "change_pct": 0.52
      },
      {
        "name": "游戏",
        "change_pct": 0.55
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.38
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.33
      },
      {
        "name": "传媒",
        "change_pct": -0.34
      },
      {
        "name": "快手概念股",
        "change_pct": -0.18
      },
      {
        "name": "元宇宙",
        "change_pct": -0.06
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.24
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.56
      },
      {
        "name": "web3.0",
        "change_pct": 0.43
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.22
      },
      {
        "name": "数据要素",
        "change_pct": 0.27
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.09
      },
      {
        "name": "AI营销",
        "change_pct": -0.33
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.08
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.69
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.22
      },
      {
        "name": "人形机器人",
        "change_pct": 1.08
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.37
      },
      {
        "name": "多模态",
        "change_pct": 0.1
      },
      {
        "name": "AI视频",
        "change_pct": -0.19
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.27
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.33
      }
    ]
  },
  {
    "code": "000525",
    "name": "红太阳",
    "hot_rank": 46,
    "hot_rank_chg": -4,
    "stock_cnt": 5897,
    "price": "5.34",
    "change": "-2.20",
    "market_id": "33",
    "circulate_market_value": "5936798400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.3
      },
      {
        "name": "草铵膦",
        "change_pct": -0.1
      },
      {
        "name": "农药",
        "change_pct": 0.51
      },
      {
        "name": "长寿药NMN",
        "change_pct": 0.01
      },
      {
        "name": "大农业",
        "change_pct": 0.43
      },
      {
        "name": "虫害防治",
        "change_pct": 0.31
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 48,
    "hot_rank_chg": 13,
    "stock_cnt": 5897,
    "price": "6.10",
    "change": "-3.95",
    "market_id": "33",
    "circulate_market_value": "4652055600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.1
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.09
      },
      {
        "name": "强势人气股",
        "change_pct": 0.3
      },
      {
        "name": "医药商业",
        "change_pct": 0.04
      },
      {
        "name": "保健品",
        "change_pct": 0.04
      },
      {
        "name": "民营医院",
        "change_pct": 0.05
      },
      {
        "name": "医药",
        "change_pct": 0.04
      },
      {
        "name": "食品",
        "change_pct": 0.04
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.02
      },
      {
        "name": "口腔",
        "change_pct": 0.12
      },
      {
        "name": "医美",
        "change_pct": -0.31
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "002376",
    "name": "新北洋",
    "hot_rank": 51,
    "hot_rank_chg": 112,
    "stock_cnt": 5897,
    "price": "7.79",
    "change": "0.78",
    "market_id": "33",
    "circulate_market_value": "6134348900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "彩票",
        "change_pct": 0.3
      },
      {
        "name": "锂电池",
        "change_pct": 0.46
      },
      {
        "name": "新零售",
        "change_pct": 0.19
      },
      {
        "name": "人工智能",
        "change_pct": 0.52
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.61
      },
      {
        "name": "人脸识别",
        "change_pct": 0.62
      },
      {
        "name": "物联网",
        "change_pct": 0.86
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.65
      },
      {
        "name": "机器人",
        "change_pct": 0.84
      },
      {
        "name": "智慧物流",
        "change_pct": 0.36
      },
      {
        "name": "机器视觉",
        "change_pct": 0.81
      },
      {
        "name": "智能制造",
        "change_pct": 0.79
      },
      {
        "name": "换电概念",
        "change_pct": 0.63
      },
      {
        "name": "信创",
        "change_pct": 0.49
      },
      {
        "name": "数字人民币",
        "change_pct": 0.15
      },
      {
        "name": "传感器",
        "change_pct": 0.96
      },
      {
        "name": "盲盒",
        "change_pct": 0.13
      },
      {
        "name": "打印机",
        "change_pct": 0.35
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 52,
    "hot_rank_chg": 244,
    "stock_cnt": 5897,
    "price": "3.83",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "3524312100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.62
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.97
      },
      {
        "name": "人工智能",
        "change_pct": 0.52
      },
      {
        "name": "VR&AR",
        "change_pct": 0.53
      },
      {
        "name": "游戏",
        "change_pct": 0.55
      },
      {
        "name": "动漫",
        "change_pct": -0.47
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.33
      },
      {
        "name": "快手概念股",
        "change_pct": -0.18
      },
      {
        "name": "NFT",
        "change_pct": -0.21
      },
      {
        "name": "元宇宙",
        "change_pct": -0.06
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.24
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.09
      },
      {
        "name": "云游戏",
        "change_pct": 0.3
      },
      {
        "name": "华为产业链",
        "change_pct": 0.64
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 55,
    "hot_rank_chg": 16,
    "stock_cnt": 5897,
    "price": "4.52",
    "change": "-2.38",
    "market_id": "33",
    "circulate_market_value": "11989528600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.3
      },
      {
        "name": "装修装饰",
        "change_pct": 0.56
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.66
      },
      {
        "name": "破净股",
        "change_pct": 0.31
      },
      {
        "name": "航天",
        "change_pct": 0.77
      },
      {
        "name": "旧改",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "600609",
    "name": "金杯汽车",
    "hot_rank": 56,
    "hot_rank_chg": 151,
    "stock_cnt": 5897,
    "price": "3.90",
    "change": "1.83",
    "market_id": "17",
    "circulate_market_value": "5087778400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.3
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.01
      },
      {
        "name": "机器人",
        "change_pct": 0.84
      },
      {
        "name": "振兴东北",
        "change_pct": 0.22
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 58,
    "hot_rank_chg": -5,
    "stock_cnt": 5897,
    "price": "11.29",
    "change": "3.10",
    "market_id": "17",
    "circulate_market_value": "7245732500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -0.47
      },
      {
        "name": "农业种植",
        "change_pct": 0.78
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.21
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.72
      },
      {
        "name": "休闲食品",
        "change_pct": -0.48
      },
      {
        "name": "食品",
        "change_pct": 0.04
      },
      {
        "name": "食品安全",
        "change_pct": 0.37
      },
      {
        "name": "社区团购",
        "change_pct": 0.69
      },
      {
        "name": "大农业",
        "change_pct": 0.43
      },
      {
        "name": "预制菜",
        "change_pct": 0.13
      },
      {
        "name": "人造肉",
        "change_pct": 0.93
      },
      {
        "name": "国企改革",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "300052",
    "name": "中青宝",
    "hot_rank": 62,
    "hot_rank_chg": 61,
    "stock_cnt": 5897,
    "price": "12.33",
    "change": "4.32",
    "market_id": "33",
    "circulate_market_value": "3228590300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.62
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.97
      },
      {
        "name": "网络安全",
        "change_pct": 0.45
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.91
      },
      {
        "name": "游戏",
        "change_pct": 0.55
      },
      {
        "name": "数字经济",
        "change_pct": 0.38
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.25
      },
      {
        "name": "食品安全",
        "change_pct": 0.37
      },
      {
        "name": "NFT",
        "change_pct": -0.21
      },
      {
        "name": "元宇宙",
        "change_pct": -0.06
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.56
      },
      {
        "name": "云游戏",
        "change_pct": 0.3
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.18
      },
      {
        "name": "华为产业链",
        "change_pct": 0.64
      },
      {
        "name": "区块链",
        "change_pct": 0.23
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 65,
    "hot_rank_chg": 8,
    "stock_cnt": 5897,
    "price": "11.93",
    "change": "0.34",
    "market_id": "17",
    "circulate_market_value": "4794548500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 0.24
      },
      {
        "name": "新零售",
        "change_pct": 0.19
      },
      {
        "name": "强势人气股",
        "change_pct": 0.3
      },
      {
        "name": "物业管理",
        "change_pct": 0.3
      },
      {
        "name": "国企改革",
        "change_pct": 0.29
      },
      {
        "name": "地摊经济",
        "change_pct": 0.31
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 69,
    "hot_rank_chg": 14,
    "stock_cnt": 5897,
    "price": "11.36",
    "change": "-2.66",
    "market_id": "33",
    "circulate_market_value": "3797181300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.3
      },
      {
        "name": "饲料",
        "change_pct": 0.17
      },
      {
        "name": "一带一路",
        "change_pct": 0.4
      },
      {
        "name": "强势人气股",
        "change_pct": 0.3
      },
      {
        "name": "保健品",
        "change_pct": 0.04
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.01
      },
      {
        "name": "污水处理",
        "change_pct": 0.76
      },
      {
        "name": "环保",
        "change_pct": 0.78
      },
      {
        "name": "食品",
        "change_pct": 0.04
      },
      {
        "name": "预制菜",
        "change_pct": 0.13
      },
      {
        "name": "国企改革",
        "change_pct": 0.29
      },
      {
        "name": "水产养殖",
        "change_pct": 0.1
      },
      {
        "name": "广西概念",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "600829",
    "name": "人民同泰",
    "hot_rank": 70,
    "hot_rank_chg": 286,
    "stock_cnt": 5897,
    "price": "10.33",
    "change": "5.73",
    "market_id": "17",
    "circulate_market_value": "5990249200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药商业",
        "change_pct": 0.04
      },
      {
        "name": "民营医院",
        "change_pct": 0.05
      },
      {
        "name": "医药",
        "change_pct": 0.04
      },
      {
        "name": "振兴东北",
        "change_pct": 0.22
      },
      {
        "name": "宠物经济",
        "change_pct": 0.41
      },
      {
        "name": "眼科",
        "change_pct": 0.22
      }
    ]
  },
  {
    "code": "002088",
    "name": "鲁阳节能",
    "hot_rank": 73,
    "hot_rank_chg": 3,
    "stock_cnt": 5897,
    "price": "11.60",
    "change": "3.66",
    "market_id": "33",
    "circulate_market_value": "5874249400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 0.46
      },
      {
        "name": "强势人气股",
        "change_pct": 0.3
      },
      {
        "name": "大气治理",
        "change_pct": 0.8
      },
      {
        "name": "雄安新区",
        "change_pct": 0.67
      },
      {
        "name": "耐火材料",
        "change_pct": 1.33
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.65
      },
      {
        "name": "环保",
        "change_pct": 0.78
      },
      {
        "name": "船舶",
        "change_pct": 1.1
      },
      {
        "name": "建筑节能",
        "change_pct": 0.6
      },
      {
        "name": "气凝胶",
        "change_pct": 0.88
      },
      {
        "name": "旧改",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 74,
    "hot_rank_chg": 114,
    "stock_cnt": 5897,
    "price": "8.07",
    "change": "4.13",
    "market_id": "17",
    "circulate_market_value": "3698064600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": 0.41
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.25
      },
      {
        "name": "自贸区",
        "change_pct": 0.55
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 79,
    "hot_rank_chg": 0,
    "stock_cnt": 5897,
    "price": "4.88",
    "change": "-2.01",
    "market_id": "17",
    "circulate_market_value": "5945850700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.22
      },
      {
        "name": "煤炭",
        "change_pct": 0.59
      },
      {
        "name": "有色金属",
        "change_pct": 0.23
      },
      {
        "name": "国企改革",
        "change_pct": 0.29
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "300133",
    "name": "华策影视",
    "hot_rank": 80,
    "hot_rank_chg": -54,
    "stock_cnt": 5897,
    "price": "10.61",
    "change": "-5.93",
    "market_id": "33",
    "circulate_market_value": "17671684000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "VR&AR",
        "change_pct": 0.53
      },
      {
        "name": "影视",
        "change_pct": -0.97
      },
      {
        "name": "大数据",
        "change_pct": 0.39
      },
      {
        "name": "教育",
        "change_pct": 0.84
      },
      {
        "name": "动漫",
        "change_pct": -0.47
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "知识产权",
        "change_pct": -0.29
      },
      {
        "name": "百度概念股",
        "change_pct": 0.07
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.33
      },
      {
        "name": "NFT",
        "change_pct": -0.21
      },
      {
        "name": "元宇宙",
        "change_pct": -0.06
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.24
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.22
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.09
      },
      {
        "name": "华为产业链",
        "change_pct": 0.64
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.69
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.22
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.37
      },
      {
        "name": "多模态",
        "change_pct": 0.1
      },
      {
        "name": "AI视频",
        "change_pct": -0.19
      },
      {
        "name": "Kimi概念",
        "change_pct": -0.96
      },
      {
        "name": "智谱AI",
        "change_pct": 0.27
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "002313",
    "name": "日海智能",
    "hot_rank": 81,
    "hot_rank_chg": 205,
    "stock_cnt": 5897,
    "price": "10.16",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "3803693700.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.62
      },
      {
        "name": "边缘计算",
        "change_pct": 1.05
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.85
      },
      {
        "name": "5G",
        "change_pct": 1.58
      },
      {
        "name": "强势人气股",
        "change_pct": 0.3
      },
      {
        "name": "人工智能",
        "change_pct": 0.52
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.91
      },
      {
        "name": "北斗导航",
        "change_pct": 0.91
      },
      {
        "name": "物联网",
        "change_pct": 0.86
      },
      {
        "name": "智慧城市",
        "change_pct": 0.58
      },
      {
        "name": "智能制造",
        "change_pct": 0.79
      },
      {
        "name": "工业互联网",
        "change_pct": 0.65
      },
      {
        "name": "小米概念股",
        "change_pct": 0.74
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.25
      },
      {
        "name": "华为海思",
        "change_pct": 0.76
      },
      {
        "name": "国企改革",
        "change_pct": 0.29
      },
      {
        "name": "低空经济",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "300426",
    "name": "华智数媒",
    "hot_rank": 83,
    "hot_rank_chg": -9,
    "stock_cnt": 5897,
    "price": "10.86",
    "change": "-5.58",
    "market_id": "33",
    "circulate_market_value": "4332000000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "浙江国企改革",
        "change_pct": 0.34
      },
      {
        "name": "影视",
        "change_pct": -0.97
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.25
      },
      {
        "name": "NFT",
        "change_pct": -0.21
      },
      {
        "name": "国企改革",
        "change_pct": 0.29
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.37
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 86,
    "hot_rank_chg": -21,
    "stock_cnt": 5897,
    "price": "11.62",
    "change": "-3.17",
    "market_id": "33",
    "circulate_market_value": "13183321100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.0
      },
      {
        "name": "足球",
        "change_pct": -0.05
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.57
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.38
      },
      {
        "name": "传媒",
        "change_pct": -0.34
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.22
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.09
      },
      {
        "name": "国企改革",
        "change_pct": 0.29
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.09
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.37
      },
      {
        "name": "AI视频",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "603809",
    "name": "豪能股份",
    "hot_rank": 91,
    "hot_rank_chg": 358,
    "stock_cnt": 5897,
    "price": "9.40",
    "change": "-1.57",
    "market_id": "17",
    "circulate_market_value": "8650714800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "大飞机",
        "change_pct": 0.4
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.61
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.01
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.65
      },
      {
        "name": "机器人",
        "change_pct": 0.84
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.99
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.09
      },
      {
        "name": "减速器",
        "change_pct": 0.85
      },
      {
        "name": "航天",
        "change_pct": 0.77
      },
      {
        "name": "人形机器人",
        "change_pct": 1.08
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 93,
    "hot_rank_chg": 17,
    "stock_cnt": 5897,
    "price": "6.98",
    "change": "0.29",
    "market_id": "33",
    "circulate_market_value": "13367345300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.25
      },
      {
        "name": "林业",
        "change_pct": 2.6
      },
      {
        "name": "碳中和",
        "change_pct": 0.37
      },
      {
        "name": "自贸区",
        "change_pct": 0.55
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 96,
    "hot_rank_chg": 23,
    "stock_cnt": 5897,
    "price": "6.57",
    "change": "-3.67",
    "market_id": "33",
    "circulate_market_value": "7639906900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.3
      },
      {
        "name": "影视",
        "change_pct": -0.97
      },
      {
        "name": "新疆概念",
        "change_pct": -0.16
      },
      {
        "name": "动漫",
        "change_pct": -0.47
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.33
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.37
      },
      {
        "name": "AI视频",
        "change_pct": -0.19
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "600637",
    "name": "东方明珠",
    "hot_rank": 98,
    "hot_rank_chg": 20,
    "stock_cnt": 5897,
    "price": "8.26",
    "change": "-1.31",
    "market_id": "17",
    "circulate_market_value": "27769292000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -0.11
      },
      {
        "name": "高管增持",
        "change_pct": 0.28
      },
      {
        "name": "超高清视频",
        "change_pct": 0.27
      },
      {
        "name": "电竞",
        "change_pct": -0.28
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.24
      },
      {
        "name": "游戏",
        "change_pct": 0.55
      },
      {
        "name": "物联网",
        "change_pct": 0.86
      },
      {
        "name": "教育",
        "change_pct": 0.84
      },
      {
        "name": "智慧城市",
        "change_pct": 0.58
      },
      {
        "name": "破净股",
        "change_pct": 0.31
      },
      {
        "name": "传媒",
        "change_pct": -0.34
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.56
      },
      {
        "name": "国企改革",
        "change_pct": 0.29
      },
      {
        "name": "在线教育",
        "change_pct": 0.95
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.22
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.37
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002578", "name": "闽发铝业", "hot_rank": 1, "hot_rank_chg": 4, "stock_cnt": 5897, "price": "6.07", "change": "0.33", "market_id": "33", "circulate_market_value": "5235868400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.08}, {"name": "一带一路", "change_pct": 0.36}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "福建自贸/海西概念", "change_pct": 1.16}, {"name": "光伏", "change_pct": 0.96}, {"name": "有色金属", "change_pct": 0.1}, {"name": "新能源汽车", "change_pct": 0.58}, {"name": "新能源车零部件", "change_pct": 0.88}, {"name": "自贸区", "change_pct": 0.5}, {"name": "液冷服务器", "change_pct": 0.74}]}, {"code": "603366", "name": "日出东方", "hot_rank": 2, "hot_rank_chg": 6, "stock_cnt": 5897, "price": "11.97", "change": "10.02", "market_id": "17", "circulate_market_value": "9732185800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.16}, {"name": "光伏", "change_pct": 0.96}, {"name": "家电", "change_pct": 0.23}, {"name": "储能", "change_pct": 0.36}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.74}, {"name": "华为鸿蒙", "change_pct": 0.3}, {"name": "厨卫家电", "change_pct": 0.71}, {"name": "华为产业链", "change_pct": 0.54}]}, {"code": "600715", "name": "文投控股", "hot_rank": 3, "hot_rank_chg": 18, "stock_cnt": 5897, "price": "3.14", "change": "10.18", "market_id": "17", "circulate_market_value": "8987848800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.69}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "游戏", "change_pct": 0.56}, {"name": "影视", "change_pct": -1.13}, {"name": "低价股", "change_pct": 0.57}, {"name": "国企改革", "change_pct": 0.26}, {"name": "短剧/互动影游", "change_pct": -0.49}, {"name": "AI视频", "change_pct": -0.19}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5897, "price": "11.00", "change": "4.46", "market_id": "33", "circulate_market_value": "6601284000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.02}, {"name": "边缘计算", "change_pct": 0.94}, {"name": "核电", "change_pct": 0.57}, {"name": "海工装备", "change_pct": 0.89}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "云计算数据中心", "change_pct": 0.81}, {"name": "冷链", "change_pct": 0.29}, {"name": "地热", "change_pct": 0.38}, {"name": "储能", "change_pct": 0.36}, {"name": "碳中和", "change_pct": 0.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -0.62}, {"name": "汽车热管理", "change_pct": 0.92}, {"name": "热泵", "change_pct": 0.74}, {"name": "液冷服务器", "change_pct": 0.74}, {"name": "蜜雪冰城概念股", "change_pct": 0.96}, {"name": "海洋经济", "change_pct": 0.84}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5897, "price": "4.53", "change": "-1.95", "market_id": "33", "circulate_market_value": "7161799900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 0.1}, {"name": "体外诊断", "change_pct": 0.1}, {"name": "医疗器械", "change_pct": 0.28}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "基因测序", "change_pct": 0.17}, {"name": "预制菜", "change_pct": 0.17}, {"name": "水产养殖", "change_pct": 0.4}, {"name": "新冠病毒防治", "change_pct": 0.12}, {"name": "海洋经济", "change_pct": 0.84}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5897, "price": "5.81", "change": "-0.68", "market_id": "17", "circulate_market_value": "7756657700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.16}, {"name": "物联网", "change_pct": 0.76}, {"name": "LED", "change_pct": 0.2}, {"name": "卫星互联网", "change_pct": 0.64}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 7, "hot_rank_chg": 5, "stock_cnt": 5897, "price": "18.50", "change": "-4.72", "market_id": "33", "circulate_market_value": "8433876500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 8, "hot_rank_chg": 1, "stock_cnt": 5897, "price": "4.35", "change": "-4.99", "market_id": "17", "circulate_market_value": "5717958200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.16}, {"name": "高速公路", "change_pct": -0.2}, {"name": "振兴东北", "change_pct": 0.21}, {"name": "黑龙江自贸区", "change_pct": -1.01}]}, {"code": "002310", "name": "东方新能", "hot_rank": 9, "hot_rank_chg": 11, "stock_cnt": 5897, "price": "2.90", "change": "3.20", "market_id": "33", "circulate_market_value": "12757127400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.81}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "京津冀", "change_pct": 0.33}, {"name": "旅游", "change_pct": -0.47}, {"name": "园林", "change_pct": 1.01}, {"name": "海绵城市", "change_pct": 0.84}, {"name": "固废处理", "change_pct": 0.62}, {"name": "光伏", "change_pct": 0.96}, {"name": "风电", "change_pct": 0.57}, {"name": "雄安新区", "change_pct": 0.62}, {"name": "北京城市规划", "change_pct": 0.41}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": 0.72}, {"name": "储能", "change_pct": 0.36}, {"name": "碳中和", "change_pct": 0.34}, {"name": "乡村振兴", "change_pct": 0.74}, {"name": "汽车拆解", "change_pct": 0.81}, {"name": "土壤修复", "change_pct": 0.55}, {"name": "核污染防治", "change_pct": 0.77}, {"name": "东数西算/算力", "change_pct": 0.5}, {"name": "新型城镇化", "change_pct": 0.78}, {"name": "低价股", "change_pct": 0.57}, {"name": "西部大开发", "change_pct": -0.03}]}, {"code": "600327", "name": "大东方", "hot_rank": 10, "hot_rank_chg": 12, "stock_cnt": 5897, "price": "6.53", "change": "9.93", "market_id": "17", "circulate_market_value": "5777610300.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.15}, {"name": "优化生育（三孩）", "change_pct": 0.03}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "信托", "change_pct": 0.03}, {"name": "民营医院", "change_pct": 0.03}, {"name": "社区团购", "change_pct": 0.63}, {"name": "大金融", "change_pct": 0.0}, {"name": "餐饮", "change_pct": -0.27}, {"name": "首发经济", "change_pct": 0.13}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 11, "hot_rank_chg": 22, "stock_cnt": 5897, "price": "26.03", "change": "7.49", "market_id": "33", "circulate_market_value": "13240196500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 12, "hot_rank_chg": -5, "stock_cnt": 5897, "price": "11.16", "change": "-1.33", "market_id": "33", "circulate_market_value": "11807900600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -0.18}, {"name": "电子烟", "change_pct": 0.49}, {"name": "一带一路", "change_pct": 0.36}, {"name": "造纸", "change_pct": 1.04}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "包装印刷", "change_pct": 0.71}, {"name": "卫星互联网", "change_pct": 0.64}, {"name": "太空算力", "change_pct": 0.79}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 13, "hot_rank_chg": 26, "stock_cnt": 5897, "price": "9.27", "change": "-0.96", "market_id": "33", "circulate_market_value": "4376805800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.69}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "VR&AR", "change_pct": 0.43}, {"name": "游戏", "change_pct": 0.56}, {"name": "影视", "change_pct": -1.13}, {"name": "直播/短视频", "change_pct": -0.48}, {"name": "动漫", "change_pct": -0.63}, {"name": "腾讯概念股", "change_pct": 0.26}, {"name": "传媒", "change_pct": -0.39}, {"name": "元宇宙", "change_pct": -0.12}, {"name": "短剧/互动影游", "change_pct": -0.49}, {"name": "IP经济/谷子经济", "change_pct": -0.35}]}, {"code": "605488", "name": "福莱新材", "hot_rank": 14, "hot_rank_chg": 17, "stock_cnt": 5897, "price": "61.28", "change": "6.95", "market_id": "17", "circulate_market_value": "18290772000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 15, "hot_rank_chg": 0, "stock_cnt": 5897, "price": "26.22", "change": "-0.46", "market_id": "33", "circulate_market_value": "19981112000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 16, "hot_rank_chg": -15, "stock_cnt": 5897, "price": "743.00", "change": "-2.37", "market_id": "17", "circulate_market_value": "22355176000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 17, "hot_rank_chg": 20, "stock_cnt": 5897, "price": "23.64", "change": "-6.09", "market_id": "33", "circulate_market_value": "4486759000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 18, "hot_rank_chg": 11, "stock_cnt": 5897, "price": "14.74", "change": "-2.38", "market_id": "17", "circulate_market_value": "5037533400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002347", "name": "泰尔股份", "hot_rank": 19, "hot_rank_chg": 70, "stock_cnt": 5897, "price": "7.46", "change": "-3.12", "market_id": "33", "circulate_market_value": "3680636400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 0.41}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "人工智能", "change_pct": 0.45}, {"name": "工业自动化", "change_pct": 1.05}, {"name": "风电", "change_pct": 0.57}, {"name": "新能源汽车", "change_pct": 0.58}, {"name": "机器人", "change_pct": 0.69}, {"name": "激光", "change_pct": 1.2}, {"name": "机器视觉", "change_pct": 0.65}, {"name": "智能制造", "change_pct": 0.66}, {"name": "3D打印", "change_pct": 0.26}, {"name": "工业互联网", "change_pct": 0.52}, {"name": "数字经济", "change_pct": 0.33}, {"name": "动力电池回收", "change_pct": -0.09}, {"name": "超级电容", "change_pct": 0.69}]}, {"code": "600892", "name": "大晟文化", "hot_rank": 20, "hot_rank_chg": 32, "stock_cnt": 5897, "price": "5.58", "change": "-0.36", "market_id": "17", "circulate_market_value": "3121003000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.69}, {"name": "ST摘帽", "change_pct": 0.87}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "游戏", "change_pct": 0.56}, {"name": "影视", "change_pct": -1.13}, {"name": "短剧/互动影游", "change_pct": -0.49}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 21, "hot_rank_chg": -4, "stock_cnt": 5897, "price": "5.29", "change": "-5.54", "market_id": "17", "circulate_market_value": "6139269600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.16}, {"name": "纺织服装", "change_pct": 0.23}, {"name": "浙江国企改革", "change_pct": 0.27}, {"name": "影视", "change_pct": -1.13}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 0.26}, {"name": "短剧/互动影游", "change_pct": -0.49}]}, {"code": "603533", "name": "掌阅科技", "hot_rank": 22, "hot_rank_chg": 5, "stock_cnt": 5897, "price": "31.40", "change": "-4.27", "market_id": "17", "circulate_market_value": "13781361000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 23, "hot_rank_chg": -19, "stock_cnt": 5897, "price": "496.00", "change": "5.31", "market_id": "33", "circulate_market_value": "550528750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002865", "name": "钧达股份", "hot_rank": 24, "hot_rank_chg": 1, "stock_cnt": 5897, "price": "50.74", "change": "4.01", "market_id": "33", "circulate_market_value": "11637859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 25, "hot_rank_chg": 5, "stock_cnt": 5897, "price": "232.75", "change": "-0.31", "market_id": "17", "circulate_market_value": "98420117000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 26, "hot_rank_chg": -16, "stock_cnt": 5897, "price": "15.63", "change": "-2.79", "market_id": "33", "circulate_market_value": "10330982700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 27, "hot_rank_chg": -4, "stock_cnt": 5897, "price": "13.97", "change": "-2.65", "market_id": "17", "circulate_market_value": "14597083000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 28, "hot_rank_chg": 34, "stock_cnt": 5897, "price": "15.76", "change": "2.74", "market_id": "17", "circulate_market_value": "9368603400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603381", "name": "永臻股份", "hot_rank": 29, "hot_rank_chg": 27, "stock_cnt": 5897, "price": "22.97", "change": "4.93", "market_id": "17", "circulate_market_value": "3264902600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300118", "name": "东方日升", "hot_rank": 30, "hot_rank_chg": -11, "stock_cnt": 5897, "price": "11.09", "change": "-4.31", "market_id": "33", "circulate_market_value": "10275102100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -0.02}, {"name": "光伏", "change_pct": 0.96}, {"name": "储能", "change_pct": 0.36}, {"name": "BIPV概念", "change_pct": 0.83}, {"name": "钙钛矿电池", "change_pct": 1.19}, {"name": "异质结电池HJT", "change_pct": 0.49}, {"name": "光伏胶膜", "change_pct": 0.73}]}, {"code": "601595", "name": "上海电影", "hot_rank": 31, "hot_rank_chg": 23, "stock_cnt": 5897, "price": "41.97", "change": "-1.41", "market_id": "17", "circulate_market_value": "18810954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603703", "name": "盛洋科技", "hot_rank": 32, "hot_rank_chg": 16, "stock_cnt": 5897, "price": "12.30", "change": "0.74", "market_id": "17", "circulate_market_value": "5104280100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.57}, {"name": "5G", "change_pct": 1.43}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "云计算数据中心", "change_pct": 0.81}, {"name": "LED", "change_pct": 0.2}, {"name": "卫星互联网", "change_pct": 0.64}, {"name": "铜缆高速连接器", "change_pct": 1.4}]}, {"code": "002724", "name": "海洋王", "hot_rank": 33, "hot_rank_chg": 13, "stock_cnt": 5897, "price": "12.20", "change": "-7.44", "market_id": "33", "circulate_market_value": "6911035100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.16}, {"name": "石墨烯", "change_pct": 0.85}, {"name": "军民融合", "change_pct": 0.69}, {"name": "物联网", "change_pct": 0.76}, {"name": "LED", "change_pct": 0.2}, {"name": "军工", "change_pct": 0.65}, {"name": "智慧灯杆", "change_pct": 0.09}, {"name": "海洋经济", "change_pct": 0.84}]}, {"code": "002045", "name": "国光电器", "hot_rank": 34, "hot_rank_chg": 73, "stock_cnt": 5897, "price": "10.90", "change": "-4.47", "market_id": "33", "circulate_market_value": "6123978400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手机产业链", "change_pct": 0.7}, {"name": "电子烟", "change_pct": 0.49}, {"name": "苹果产业链", "change_pct": 1.04}, {"name": "锂电池", "change_pct": 0.41}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "VR&AR", "change_pct": 0.43}, {"name": "智能音箱", "change_pct": 0.39}, {"name": "新能源汽车", "change_pct": 0.58}, {"name": "黑色家电", "change_pct": -0.76}, {"name": "家电", "change_pct": 0.23}, {"name": "固态电池", "change_pct": 0.25}, {"name": "NFT", "change_pct": -0.17}, {"name": "元宇宙", "change_pct": -0.06}, {"name": "无线耳机", "change_pct": 0.46}, {"name": "智能手表", "change_pct": 0.14}, {"name": "华为鸿蒙", "change_pct": 0.3}, {"name": "华为产业链", "change_pct": 0.54}, {"name": "智能眼镜/MR头显", "change_pct": 0.69}]}, {"code": "002384", "name": "东山精密", "hot_rank": 35, "hot_rank_chg": -22, "stock_cnt": 5897, "price": "87.89", "change": "5.04", "market_id": "33", "circulate_market_value": "121871543000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 36, "hot_rank_chg": -8, "stock_cnt": 5897, "price": "16.10", "change": "-4.51", "market_id": "33", "circulate_market_value": "4045681300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002160", "name": "常铝股份", "hot_rank": 37, "hot_rank_chg": 325, "stock_cnt": 5897, "price": "4.40", "change": "10.00", "market_id": "33", "circulate_market_value": "4535209800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.22}, {"name": "特斯拉", "change_pct": 0.62}, {"name": "锂电池", "change_pct": 0.46}, {"name": "山东国企改革", "change_pct": 0.01}, {"name": "有色金属", "change_pct": 0.23}, {"name": "新能源汽车", "change_pct": 0.65}, {"name": "智能制造", "change_pct": 0.79}, {"name": "新能源车零部件", "change_pct": 0.99}, {"name": "钠电池", "change_pct": 0.24}, {"name": "工业母机", "change_pct": 1.15}, {"name": "汽车热管理", "change_pct": 1.04}, {"name": "国企改革", "change_pct": 0.29}, {"name": "生物安全", "change_pct": 1.01}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 38, "hot_rank_chg": -24, "stock_cnt": 5897, "price": "34.95", "change": "-1.69", "market_id": "33", "circulate_market_value": "35708414000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000810", "name": "创维数字", "hot_rank": 39, "hot_rank_chg": 157, "stock_cnt": 5897, "price": "11.84", "change": "-2.47", "market_id": "33", "circulate_market_value": "13238991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -0.11}, {"name": "折叠屏", "change_pct": 0.74}, {"name": "超高清视频", "change_pct": 0.27}, {"name": "半导体", "change_pct": 0.9}, {"name": "5G", "change_pct": 1.58}, {"name": "人工智能", "change_pct": 0.52}, {"name": "VR&AR", "change_pct": 0.53}, {"name": "云计算数据中心", "change_pct": 0.91}, {"name": "光通信", "change_pct": 2.7}, {"name": "OLED", "change_pct": 0.47}, {"name": "物联网", "change_pct": 0.86}, {"name": "教育", "change_pct": 0.84}, {"name": "智慧城市", "change_pct": 0.58}, {"name": "汽车零部件", "change_pct": 1.01}, {"name": "智能音箱", "change_pct": 0.53}, {"name": "机器人", "change_pct": 0.84}, {"name": "黑色家电", "change_pct": -0.44}, {"name": "家电", "change_pct": 0.33}, {"name": "WiFi", "change_pct": 1.13}, {"name": "数字经济", "change_pct": 0.38}, {"name": "百度概念股", "change_pct": 0.07}, {"name": "国产操作系统", "change_pct": 0.06}, {"name": "腾讯概念股", "change_pct": 0.33}, {"name": "液晶面板/LCD", "change_pct": 0.63}, {"name": "全息概念", "change_pct": 0.22}, {"name": "元宇宙", "change_pct": -0.06}, {"name": "F5G", "change_pct": 2.73}, {"name": "电子后视镜", "change_pct": 0.43}, {"name": "华为海思", "change_pct": 0.76}, {"name": "教育信息化", "change_pct": 0.49}, {"name": "在线教育", "change_pct": 0.95}, {"name": "云游戏", "change_pct": 0.3}, {"name": "MiniLED", "change_pct": 0.54}, {"name": "华为产业链", "change_pct": 0.64}, {"name": "智能眼镜/MR头显", "change_pct": 0.69}, {"name": "星闪概念", "change_pct": 0.94}, {"name": "智能座舱", "change_pct": 0.95}, {"name": "短剧/互动影游", "change_pct": -0.37}, {"name": "多模态", "change_pct": 0.1}]}, {"code": "002149", "name": "西部材料", "hot_rank": 40, "hot_rank_chg": -16, "stock_cnt": 5897, "price": "43.18", "change": "0.14", "market_id": "33", "circulate_market_value": "21019271000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 41, "hot_rank_chg": 62, "stock_cnt": 5897, "price": "53.08", "change": "10.01", "market_id": "33", "circulate_market_value": "10752726500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": ""}, {"code": "002009", "name": "天奇股份", "hot_rank": 42, "hot_rank_chg": 100, "stock_cnt": 5897, "price": "19.31", "change": "0.31", "market_id": "33", "circulate_market_value": "6836664500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600408", "name": "安泰集团", "hot_rank": 43, "hot_rank_chg": 62, "stock_cnt": 5897, "price": "3.78", "change": "3.84", "market_id": "17", "circulate_market_value": "3815772000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.59}, {"name": "钢铁", "change_pct": 0.86}, {"name": "强势人气股", "change_pct": 0.3}, {"name": "煤化工", "change_pct": 0.73}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 44, "hot_rank_chg": 11, "stock_cnt": 5897, "price": "16.54", "change": "-4.40", "market_id": "17", "circulate_market_value": "7342222200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 45, "hot_rank_chg": -7, "stock_cnt": 5897, "price": "8.41", "change": "-1.18", "market_id": "33", "circulate_market_value": "13666748000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.13}, {"name": "电竞", "change_pct": -0.28}, {"name": "手游", "change_pct": 0.62}, {"name": "人工智能", "change_pct": 0.52}, {"name": "游戏", "change_pct": 0.55}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.38}, {"name": "腾讯概念股", "change_pct": 0.33}, {"name": "传媒", "change_pct": -0.34}, {"name": "快手概念股", "change_pct": -0.18}, {"name": "元宇宙", "change_pct": -0.06}, {"name": "虚拟数字人", "change_pct": -0.24}, {"name": "东数西算/算力", "change_pct": 0.56}, {"name": "web3.0", "change_pct": 0.43}, {"name": "AIGC概念", "change_pct": -0.22}, {"name": "数据要素", "change_pct": 0.27}, {"name": "字节跳动概念股", "change_pct": -0.09}, {"name": "AI营销", "change_pct": -0.33}, {"name": "ChatGPT", "change_pct": -0.08}, {"name": "智能眼镜/MR头显", "change_pct": 0.69}, {"name": "AI大模型/智能体", "change_pct": 0.22}, {"name": "人形机器人", "change_pct": 1.08}, {"name": "短剧/互动影游", "change_pct": -0.37}, {"name": "多模态", "change_pct": 0.1}, {"name": "AI视频", "change_pct": -0.19}, {"name": "IP经济/谷子经济", "change_pct": -0.27}, {"name": "小红书概念股", "change_pct": -0.33}]}, {"code": "000525", "name": "红太阳", "hot_rank": 46, "hot_rank_chg": -4, "stock_cnt": 5897, "price": "5.34", "change": "-2.20", "market_id": "33", "circulate_market_value": "5936798400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.3}, {"name": "草铵膦", "change_pct": -0.1}, {"name": "农药", "change_pct": 0.51}, {"name": "长寿药NMN", "change_pct": 0.01}, {"name": "大农业", "change_pct": 0.43}, {"name": "虫害防治", "change_pct": 0.31}]}, {"code": "300364", "name": "中文在线", "hot_rank": 47, "hot_rank_chg": -29, "stock_cnt": 5897, "price": "28.11", "change": "-3.24", "market_id": "33", "circulate_market_value": "18583118000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 48, "hot_rank_chg": 13, "stock_cnt": 5897, "price": "6.10", "change": "-3.95", "market_id": "33", "circulate_market_value": "4652055600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.1}, {"name": "优化生育（三孩）", "change_pct": 0.09}, {"name": "强势人气股", "change_pct": 0.3}, {"name": "医药商业", "change_pct": 0.04}, {"name": "保健品", "change_pct": 0.04}, {"name": "民营医院", "change_pct": 0.05}, {"name": "医药", "change_pct": 0.04}, {"name": "食品", "change_pct": 0.04}, {"name": "辅助生殖", "change_pct": 0.02}, {"name": "口腔", "change_pct": 0.12}, {"name": "医美", "change_pct": -0.31}, {"name": "新冠病毒防治", "change_pct": 0.18}]}, {"code": "300613", "name": "富瀚微", "hot_rank": 49, "hot_rank_chg": 8, "stock_cnt": 5897, "price": "82.89", "change": "3.47", "market_id": "33", "circulate_market_value": "18196988000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001379", "name": "腾达科技", "hot_rank": 50, "hot_rank_chg": 238, "stock_cnt": 5897, "price": "17.22", "change": "-1.26", "market_id": "33", "circulate_market_value": "1158878880.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002376", "name": "新北洋", "hot_rank": 51, "hot_rank_chg": 112, "stock_cnt": 5897, "price": "7.79", "change": "0.78", "market_id": "33", "circulate_market_value": "6134348900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "彩票", "change_pct": 0.3}, {"name": "锂电池", "change_pct": 0.46}, {"name": "新零售", "change_pct": 0.19}, {"name": "人工智能", "change_pct": 0.52}, {"name": "高铁轨交", "change_pct": 0.61}, {"name": "人脸识别", "change_pct": 0.62}, {"name": "物联网", "change_pct": 0.86}, {"name": "新能源汽车", "change_pct": 0.65}, {"name": "机器人", "change_pct": 0.84}, {"name": "智慧物流", "change_pct": 0.36}, {"name": "机器视觉", "change_pct": 0.81}, {"name": "智能制造", "change_pct": 0.79}, {"name": "换电概念", "change_pct": 0.63}, {"name": "信创", "change_pct": 0.49}, {"name": "数字人民币", "change_pct": 0.15}, {"name": "传感器", "change_pct": 0.96}, {"name": "盲盒", "change_pct": 0.13}, {"name": "打印机", "change_pct": 0.35}]}, {"code": "002425", "name": "凯撒文化", "hot_rank": 52, "hot_rank_chg": 244, "stock_cnt": 5897, "price": "3.83", "change": "10.06", "market_id": "33", "circulate_market_value": "3524312100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.62}, {"name": "ST摘帽", "change_pct": 0.97}, {"name": "人工智能", "change_pct": 0.52}, {"name": "VR&AR", "change_pct": 0.53}, {"name": "游戏", "change_pct": 0.55}, {"name": "动漫", "change_pct": -0.47}, {"name": "腾讯概念股", "change_pct": 0.33}, {"name": "快手概念股", "change_pct": -0.18}, {"name": "NFT", "change_pct": -0.21}, {"name": "元宇宙", "change_pct": -0.06}, {"name": "虚拟数字人", "change_pct": -0.24}, {"name": "字节跳动概念股", "change_pct": -0.09}, {"name": "云游戏", "change_pct": 0.3}, {"name": "华为产业链", "change_pct": 0.64}, {"name": "IP经济/谷子经济", "change_pct": -0.27}]}, {"code": "300502", "name": "新易盛", "hot_rank": 53, "hot_rank_chg": -42, "stock_cnt": 5897, "price": "196.66", "change": "6.86", "market_id": "33", "circulate_market_value": "246427740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603598", "name": "引力传媒", "hot_rank": 54, "hot_rank_chg": 16, "stock_cnt": 5897, "price": "22.62", "change": "-4.60", "market_id": "17", "circulate_market_value": "6106820600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 55, "hot_rank_chg": 16, "stock_cnt": 5897, "price": "4.52", "change": "-2.38", "market_id": "33", "circulate_market_value": "11989528600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.3}, {"name": "装修装饰", "change_pct": 0.56}, {"name": "装配式建筑", "change_pct": 0.66}, {"name": "破净股", "change_pct": 0.31}, {"name": "航天", "change_pct": 0.77}, {"name": "旧改", "change_pct": 0.58}]}, {"code": "600609", "name": "金杯汽车", "hot_rank": 56, "hot_rank_chg": 151, "stock_cnt": 5897, "price": "3.90", "change": "1.83", "market_id": "17", "circulate_market_value": "5087778400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.3}, {"name": "汽车零部件", "change_pct": 1.01}, {"name": "机器人", "change_pct": 0.84}, {"name": "振兴东北", "change_pct": 0.22}]}, {"code": "603121", "name": "华培动力", "hot_rank": 57, "hot_rank_chg": 135, "stock_cnt": 5897, "price": "13.19", "change": "0.08", "market_id": "17", "circulate_market_value": "4465259700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 58, "hot_rank_chg": -5, "stock_cnt": 5897, "price": "11.29", "change": "3.10", "market_id": "17", "circulate_market_value": "7245732500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -0.47}, {"name": "农业种植", "change_pct": 0.78}, {"name": "湖南国企改革", "change_pct": 0.21}, {"name": "乡村振兴", "change_pct": 0.72}, {"name": "休闲食品", "change_pct": -0.48}, {"name": "食品", "change_pct": 0.04}, {"name": "食品安全", "change_pct": 0.37}, {"name": "社区团购", "change_pct": 0.69}, {"name": "大农业", "change_pct": 0.43}, {"name": "预制菜", "change_pct": 0.13}, {"name": "人造肉", "change_pct": 0.93}, {"name": "国企改革", "change_pct": 0.29}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 59, "hot_rank_chg": -25, "stock_cnt": 5897, "price": "59.75", "change": "-0.70", "market_id": "17", "circulate_market_value": "70653726000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603706", "name": "东方环宇", "hot_rank": 60, "hot_rank_chg": 77, "stock_cnt": 5897, "price": "21.01", "change": "-5.40", "market_id": "17", "circulate_market_value": "3978930800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002623", "name": "亚玛顿", "hot_rank": 61, "hot_rank_chg": 172, "stock_cnt": 5897, "price": "23.33", "change": "9.99", "market_id": "33", "circulate_market_value": "4494201100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": ""}, {"code": "300052", "name": "中青宝", "hot_rank": 62, "hot_rank_chg": 61, "stock_cnt": 5897, "price": "12.33", "change": "4.32", "market_id": "33", "circulate_market_value": "3228590300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.62}, {"name": "ST摘帽", "change_pct": 0.97}, {"name": "网络安全", "change_pct": 0.45}, {"name": "云计算数据中心", "change_pct": 0.91}, {"name": "游戏", "change_pct": 0.55}, {"name": "数字经济", "change_pct": 0.38}, {"name": "阿里巴巴概念股", "change_pct": 0.25}, {"name": "食品安全", "change_pct": 0.37}, {"name": "NFT", "change_pct": -0.21}, {"name": "元宇宙", "change_pct": -0.06}, {"name": "东数西算/算力", "change_pct": 0.56}, {"name": "云游戏", "change_pct": 0.3}, {"name": "新冠病毒防治", "change_pct": 0.18}, {"name": "华为产业链", "change_pct": 0.64}, {"name": "区块链", "change_pct": 0.23}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 63, "hot_rank_chg": 4, "stock_cnt": 5897, "price": "16.85", "change": "-4.10", "market_id": "33", "circulate_market_value": "2989324800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 64, "hot_rank_chg": 57, "stock_cnt": 5897, "price": "57.92", "change": "0.45", "market_id": "33", "circulate_market_value": "25334364000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 65, "hot_rank_chg": 8, "stock_cnt": 5897, "price": "11.93", "change": "0.34", "market_id": "17", "circulate_market_value": "4794548500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 0.24}, {"name": "新零售", "change_pct": 0.19}, {"name": "强势人气股", "change_pct": 0.3}, {"name": "物业管理", "change_pct": 0.3}, {"name": "国企改革", "change_pct": 0.29}, {"name": "地摊经济", "change_pct": 0.31}]}, {"code": "000823", "name": "超声电子", "hot_rank": 66, "hot_rank_chg": -25, "stock_cnt": 5897, "price": "18.69", "change": "1.41", "market_id": "33", "circulate_market_value": "11125231500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 67, "hot_rank_chg": -51, "stock_cnt": 5897, "price": "40.43", "change": "-0.05", "market_id": "17", "circulate_market_value": "182057870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002241", "name": "歌尔股份", "hot_rank": 68, "hot_rank_chg": -4, "stock_cnt": 5897, "price": "25.11", "change": "-2.34", "market_id": "33", "circulate_market_value": "79355285000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 69, "hot_rank_chg": 14, "stock_cnt": 5897, "price": "11.36", "change": "-2.66", "market_id": "33", "circulate_market_value": "3797181300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.3}, {"name": "饲料", "change_pct": 0.17}, {"name": "一带一路", "change_pct": 0.4}, {"name": "强势人气股", "change_pct": 0.3}, {"name": "保健品", "change_pct": 0.04}, {"name": "山东国企改革", "change_pct": 0.01}, {"name": "污水处理", "change_pct": 0.76}, {"name": "环保", "change_pct": 0.78}, {"name": "食品", "change_pct": 0.04}, {"name": "预制菜", "change_pct": 0.13}, {"name": "国企改革", "change_pct": 0.29}, {"name": "水产养殖", "change_pct": 0.1}, {"name": "广西概念", "change_pct": 0.25}]}, {"code": "600829", "name": "人民同泰", "hot_rank": 70, "hot_rank_chg": 286, "stock_cnt": 5897, "price": "10.33", "change": "5.73", "market_id": "17", "circulate_market_value": "5990249200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药商业", "change_pct": 0.04}, {"name": "民营医院", "change_pct": 0.05}, {"name": "医药", "change_pct": 0.04}, {"name": "振兴东北", "change_pct": 0.22}, {"name": "宠物经济", "change_pct": 0.41}, {"name": "眼科", "change_pct": 0.22}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 71, "hot_rank_chg": -21, "stock_cnt": 5897, "price": "73.02", "change": "0.22", "market_id": "33", "circulate_market_value": "47682608000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 72, "hot_rank_chg": 0, "stock_cnt": 5897, "price": "34.29", "change": "2.45", "market_id": "17", "circulate_market_value": "31911300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002088", "name": "鲁阳节能", "hot_rank": 73, "hot_rank_chg": 3, "stock_cnt": 5897, "price": "11.60", "change": "3.66", "market_id": "33", "circulate_market_value": "5874249400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 0.46}, {"name": "强势人气股", "change_pct": 0.3}, {"name": "大气治理", "change_pct": 0.8}, {"name": "雄安新区", "change_pct": 0.67}, {"name": "耐火材料", "change_pct": 1.33}, {"name": "新能源汽车", "change_pct": 0.65}, {"name": "环保", "change_pct": 0.78}, {"name": "船舶", "change_pct": 1.1}, {"name": "建筑节能", "change_pct": 0.6}, {"name": "气凝胶", "change_pct": 0.88}, {"name": "旧改", "change_pct": 0.58}]}, {"code": "600802", "name": "福建水泥", "hot_rank": 74, "hot_rank_chg": 114, "stock_cnt": 5897, "price": "8.07", "change": "4.13", "market_id": "17", "circulate_market_value": "3698064600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": 0.41}, {"name": "福建自贸/海西概念", "change_pct": 1.25}, {"name": "自贸区", "change_pct": 0.55}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 75, "hot_rank_chg": -32, "stock_cnt": 5897, "price": "65.80", "change": "0.44", "market_id": "33", "circulate_market_value": "47706061000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 76, "hot_rank_chg": -44, "stock_cnt": 5897, "price": "76.62", "change": "0.17", "market_id": "33", "circulate_market_value": "6028003000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 77, "hot_rank_chg": 75, "stock_cnt": 5897, "price": "14.22", "change": "-3.20", "market_id": "33", "circulate_market_value": "4019425200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 78, "hot_rank_chg": -31, "stock_cnt": 5897, "price": "246.80", "change": "0.84", "market_id": "17", "circulate_market_value": "165412550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 79, "hot_rank_chg": 0, "stock_cnt": 5897, "price": "4.88", "change": "-2.01", "market_id": "17", "circulate_market_value": "5945850700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.22}, {"name": "煤炭", "change_pct": 0.59}, {"name": "有色金属", "change_pct": 0.23}, {"name": "国企改革", "change_pct": 0.29}, {"name": "河南国企改革", "change_pct": 0.18}]}, {"code": "300133", "name": "华策影视", "hot_rank": 80, "hot_rank_chg": -54, "stock_cnt": 5897, "price": "10.61", "change": "-5.93", "market_id": "33", "circulate_market_value": "17671684000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "VR&AR", "change_pct": 0.53}, {"name": "影视", "change_pct": -0.97}, {"name": "大数据", "change_pct": 0.39}, {"name": "教育", "change_pct": 0.84}, {"name": "动漫", "change_pct": -0.47}, {"name": "独角兽", "change_pct": 0.85}, {"name": "知识产权", "change_pct": -0.29}, {"name": "百度概念股", "change_pct": 0.07}, {"name": "腾讯概念股", "change_pct": 0.33}, {"name": "NFT", "change_pct": -0.21}, {"name": "元宇宙", "change_pct": -0.06}, {"name": "虚拟数字人", "change_pct": -0.24}, {"name": "AIGC概念", "change_pct": -0.22}, {"name": "网红/MCN", "change_pct": -0.09}, {"name": "华为产业链", "change_pct": 0.64}, {"name": "智能眼镜/MR头显", "change_pct": 0.69}, {"name": "AI大模型/智能体", "change_pct": 0.22}, {"name": "短剧/互动影游", "change_pct": -0.37}, {"name": "多模态", "change_pct": 0.1}, {"name": "AI视频", "change_pct": -0.19}, {"name": "Kimi概念", "change_pct": -0.96}, {"name": "智谱AI", "change_pct": 0.27}, {"name": "IP经济/谷子经济", "change_pct": -0.27}]}, {"code": "002313", "name": "日海智能", "hot_rank": 81, "hot_rank_chg": 205, "stock_cnt": 5897, "price": "10.16", "change": "9.96", "market_id": "33", "circulate_market_value": "3803693700.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.62}, {"name": "边缘计算", "change_pct": 1.05}, {"name": "无人驾驶", "change_pct": 0.85}, {"name": "5G", "change_pct": 1.58}, {"name": "强势人气股", "change_pct": 0.3}, {"name": "人工智能", "change_pct": 0.52}, {"name": "云计算数据中心", "change_pct": 0.91}, {"name": "北斗导航", "change_pct": 0.91}, {"name": "物联网", "change_pct": 0.86}, {"name": "智慧城市", "change_pct": 0.58}, {"name": "智能制造", "change_pct": 0.79}, {"name": "工业互联网", "change_pct": 0.65}, {"name": "小米概念股", "change_pct": 0.74}, {"name": "阿里巴巴概念股", "change_pct": 0.25}, {"name": "华为海思", "change_pct": 0.76}, {"name": "国企改革", "change_pct": 0.29}, {"name": "低空经济", "change_pct": 0.74}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 82, "hot_rank_chg": -24, "stock_cnt": 5897, "price": "43.65", "change": "2.20", "market_id": "17", "circulate_market_value": "107101659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300426", "name": "华智数媒", "hot_rank": 83, "hot_rank_chg": -9, "stock_cnt": 5897, "price": "10.86", "change": "-5.58", "market_id": "33", "circulate_market_value": "4332000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "浙江国企改革", "change_pct": 0.34}, {"name": "影视", "change_pct": -0.97}, {"name": "阿里巴巴概念股", "change_pct": 0.25}, {"name": "NFT", "change_pct": -0.21}, {"name": "国企改革", "change_pct": 0.29}, {"name": "短剧/互动影游", "change_pct": -0.37}, {"name": "IP经济/谷子经济", "change_pct": -0.27}]}, {"code": "002275", "name": "桂林三金", "hot_rank": 84, "hot_rank_chg": 73, "stock_cnt": 5897, "price": "15.92", "change": "-5.62", "market_id": "33", "circulate_market_value": "9007783300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002995", "name": "天地在线", "hot_rank": 85, "hot_rank_chg": 151, "stock_cnt": 5897, "price": "20.58", "change": "-0.77", "market_id": "33", "circulate_market_value": "2497153600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002181", "name": "粤传媒", "hot_rank": 86, "hot_rank_chg": -21, "stock_cnt": 5897, "price": "11.62", "change": "-3.17", "market_id": "33", "circulate_market_value": "13183321100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.0}, {"name": "足球", "change_pct": -0.05}, {"name": "粤港澳大湾区", "change_pct": 0.57}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.38}, {"name": "传媒", "change_pct": -0.34}, {"name": "AIGC概念", "change_pct": -0.22}, {"name": "字节跳动概念股", "change_pct": -0.09}, {"name": "国企改革", "change_pct": 0.29}, {"name": "网红/MCN", "change_pct": -0.09}, {"name": "短剧/互动影游", "change_pct": -0.37}, {"name": "AI视频", "change_pct": -0.19}]}, {"code": "600206", "name": "有研新材", "hot_rank": 87, "hot_rank_chg": -42, "stock_cnt": 5897, "price": "38.82", "change": "0.10", "market_id": "17", "circulate_market_value": "32863200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002929", "name": "润建股份", "hot_rank": 88, "hot_rank_chg": -1, "stock_cnt": 5897, "price": "59.47", "change": "1.36", "market_id": "33", "circulate_market_value": "12867702200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 89, "hot_rank_chg": -11, "stock_cnt": 5897, "price": "13.19", "change": "-0.15", "market_id": "17", "circulate_market_value": "3859103800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001339", "name": "智微智能", "hot_rank": 90, "hot_rank_chg": 251, "stock_cnt": 5897, "price": "66.44", "change": "4.70", "market_id": "33", "circulate_market_value": "10745281200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603809", "name": "豪能股份", "hot_rank": 91, "hot_rank_chg": 358, "stock_cnt": 5897, "price": "9.40", "change": "-1.57", "market_id": "17", "circulate_market_value": "8650714800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "大飞机", "change_pct": 0.4}, {"name": "高铁轨交", "change_pct": 0.61}, {"name": "汽车零部件", "change_pct": 1.01}, {"name": "新能源汽车", "change_pct": 0.65}, {"name": "机器人", "change_pct": 0.84}, {"name": "新能源车零部件", "change_pct": 0.99}, {"name": "理想汽车概念股", "change_pct": 1.09}, {"name": "减速器", "change_pct": 0.85}, {"name": "航天", "change_pct": 0.77}, {"name": "人形机器人", "change_pct": 1.08}]}, {"code": "001308", "name": "康冠科技", "hot_rank": 92, "hot_rank_chg": 191, "stock_cnt": 5897, "price": "23.77", "change": "-2.27", "market_id": "33", "circulate_market_value": "12465970700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 93, "hot_rank_chg": 17, "stock_cnt": 5897, "price": "6.98", "change": "0.29", "market_id": "33", "circulate_market_value": "13367345300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.25}, {"name": "林业", "change_pct": 2.6}, {"name": "碳中和", "change_pct": 0.37}, {"name": "自贸区", "change_pct": 0.55}]}, {"code": "600183", "name": "生益科技", "hot_rank": 94, "hot_rank_chg": -28, "stock_cnt": 5897, "price": "71.34", "change": "0.58", "market_id": "17", "circulate_market_value": "172054160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300458", "name": "全志科技", "hot_rank": 95, "hot_rank_chg": 9, "stock_cnt": 5897, "price": "29.77", "change": "0.57", "market_id": "33", "circulate_market_value": "24219044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 96, "hot_rank_chg": 23, "stock_cnt": 5897, "price": "6.57", "change": "-3.67", "market_id": "33", "circulate_market_value": "7639906900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.3}, {"name": "影视", "change_pct": -0.97}, {"name": "新疆概念", "change_pct": -0.16}, {"name": "动漫", "change_pct": -0.47}, {"name": "阿里巴巴概念股", "change_pct": 0.25}, {"name": "腾讯概念股", "change_pct": 0.33}, {"name": "短剧/互动影游", "change_pct": -0.37}, {"name": "AI视频", "change_pct": -0.19}, {"name": "IP经济/谷子经济", "change_pct": -0.27}]}, {"code": "605598", "name": "上海港湾", "hot_rank": 97, "hot_rank_chg": 222, "stock_cnt": 5897, "price": "30.97", "change": "10.02", "market_id": "17", "circulate_market_value": "7459702100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600637", "name": "东方明珠", "hot_rank": 98, "hot_rank_chg": 20, "stock_cnt": 5897, "price": "8.26", "change": "-1.31", "market_id": "17", "circulate_market_value": "27769292000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -0.11}, {"name": "高管增持", "change_pct": 0.28}, {"name": "超高清视频", "change_pct": 0.27}, {"name": "电竞", "change_pct": -0.28}, {"name": "上海国企改革", "change_pct": 0.24}, {"name": "游戏", "change_pct": 0.55}, {"name": "物联网", "change_pct": 0.86}, {"name": "教育", "change_pct": 0.84}, {"name": "智慧城市", "change_pct": 0.58}, {"name": "破净股", "change_pct": 0.31}, {"name": "传媒", "change_pct": -0.34}, {"name": "东数西算/算力", "change_pct": 0.56}, {"name": "国企改革", "change_pct": 0.29}, {"name": "在线教育", "change_pct": 0.95}, {"name": "AI大模型/智能体", "change_pct": 0.22}, {"name": "短剧/互动影游", "change_pct": -0.37}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 99, "hot_rank_chg": -19, "stock_cnt": 5897, "price": "30.41", "change": "-0.46", "market_id": "33", "circulate_market_value": "23859804000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 100, "hot_rank_chg": -49, "stock_cnt": 5897, "price": "246.63", "change": "-1.33", "market_id": "33", "circulate_market_value": "1050753390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};