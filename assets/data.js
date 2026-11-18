const UPDATE_TIME = "2026-11-18 05:40";
const THS_HOT = [
  {
    "name": "算力租赁",
    "rise": 2.63,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.3,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续332天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "东数西算(算力)",
    "rise": 1.4,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885957"
  },
  {
    "name": "冰雪产业",
    "rise": -0.93,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "光刻胶",
    "rise": -0.36,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "人形机器人",
    "rise": -1.01,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "光刻机",
    "rise": -0.1,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "芯片概念",
    "rise": -0.01,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续42天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "6G概念",
    "rise": 0.93,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886037"
  },
  {
    "name": "创新药",
    "rise": -1.57,
    "rate": 0,
    "tag": "",
    "hotTag": "连续162天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "华为昇腾",
    "rise": 1.71,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886058"
  },
  {
    "name": "商业航天",
    "rise": -0.8,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续261天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": 0.63,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续155天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "家用电器",
    "rise": -0.23,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "家电ETF",
    "code": "885543"
  },
  {
    "name": "机器人概念",
    "rise": -0.86,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "存储芯片",
    "rise": 0.93,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续285天上榜",
    "rankChg": 1,
    "etfName": "集成电路ETF",
    "code": "886042"
  },
  {
    "name": "短剧游戏",
    "rise": -2.59,
    "rate": 0,
    "tag": "",
    "hotTag": "连续21天上榜",
    "rankChg": -1,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "AI应用",
    "rise": -0.44,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续90天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "F5G概念",
    "rise": 2.51,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "885998"
  },
  {
    "name": "华为概念",
    "rise": 0.02,
    "rate": 0,
    "tag": "23家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "885806"
  }
];
const THS_EVENTS = [
  {
    "title": "黄仁勋离职后首份财报超预期，英伟达盘后大涨",
    "desc": "",
    "heat": 834944,
    "direction": "英伟达概念",
    "themes": [
      "英伟达概念",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "广脉科技",
        "code": "920924",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "数字广东建设“十五五”规划：深化粤港澳人工智能领域合作 推进粤港澳大湾区共建数字产业集群",
    "desc": "",
    "heat": 511751,
    "direction": "人工智能",
    "themes": [
      "AI智能体",
      "AI应用",
      "人工智能",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "广脉科技",
        "code": "920924",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "工业和信息化部：8个省（市）开展6G创新发展部省协同试点工作",
    "desc": "",
    "heat": 340581,
    "direction": "6G概念",
    "themes": [
      "6G概念",
      "通信服务"
    ],
    "stocks": [
      {
        "name": "广脉科技",
        "code": "920924",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "深市科技龙头估值处历史低位 光通信行业订单能见度指向2027年",
    "desc": "",
    "heat": 200568,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)",
      "通信设备",
      "F5G概念",
      "光纤概念",
      "元件"
    ],
    "stocks": [
      {
        "name": "胜科纳米",
        "code": "688757",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "商务部等9部门：推动家电生产企业自建或合资建设回收、分拣、拆解、利用设施",
    "desc": "",
    "heat": 58614,
    "direction": "家用电器",
    "themes": [
      "小家电",
      "家用电器",
      "黑色家电",
      "白色家电",
      "厨卫电器"
    ],
    "stocks": [
      {
        "name": "宏海科技",
        "code": "920108",
        "chg": 14.342105
      }
    ]
  },
  {
    "title": "又一癌症疫苗迎来重大突破 美药企股价一度暴涨超200%",
    "desc": "",
    "heat": 0,
    "direction": "抗癌疫苗",
    "themes": [
      "肿瘤疫苗",
      "生物疫苗",
      "重组蛋白",
      "生物制品",
      "基因测序"
    ],
    "stocks": [
      {
        "name": "百克生物",
        "code": "688276",
        "chg": 9.157754
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "超节点",
    "change": "+3.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+2.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "算力一体机",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+2.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "东数西算/算力",
    "change": "+2.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "交换机",
    "change": "+2.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+2.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+2.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+1.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+1.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+1.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+1.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "+1.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+1.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+1.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+1.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "服务器",
    "change": "+1.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5G",
    "change": "+1.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智谱AI",
    "change": "+1.46%",
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
    "hot_rank": 3,
    "hot_rank_chg": 2,
    "stock_cnt": 5786,
    "price": "11.90",
    "change": "0.42",
    "market_id": "33",
    "circulate_market_value": "7141389000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.96
      },
      {
        "name": "边缘计算",
        "change_pct": 0.69
      },
      {
        "name": "核电",
        "change_pct": -0.66
      },
      {
        "name": "海工装备",
        "change_pct": -0.32
      },
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.39
      },
      {
        "name": "冷链",
        "change_pct": 0.08
      },
      {
        "name": "地热",
        "change_pct": 0.38
      },
      {
        "name": "储能",
        "change_pct": -0.47
      },
      {
        "name": "碳中和",
        "change_pct": -0.45
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.45
      },
      {
        "name": "汽车热管理",
        "change_pct": -1.15
      },
      {
        "name": "热泵",
        "change_pct": 0.13
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.21
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.27
      },
      {
        "name": "海洋经济",
        "change_pct": -0.84
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 4,
    "hot_rank_chg": 14,
    "stock_cnt": 5786,
    "price": "8.92",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "4023157400.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "5",
    "change_reason": "四足机器人",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.16
      },
      {
        "name": "手游",
        "change_pct": -2.32
      },
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "游戏",
        "change_pct": -2.93
      },
      {
        "name": "物联网",
        "change_pct": 0.07
      },
      {
        "name": "机器人",
        "change_pct": -1.15
      },
      {
        "name": "无人机",
        "change_pct": -1.08
      },
      {
        "name": "国产芯片",
        "change_pct": 0.23
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.33
      },
      {
        "name": "低空经济",
        "change_pct": -0.98
      },
      {
        "name": "无人物流车",
        "change_pct": -1.45
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 5,
    "hot_rank_chg": 10,
    "stock_cnt": 5786,
    "price": "4.92",
    "change": "3.80",
    "market_id": "17",
    "circulate_market_value": "6422912000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "高速公路",
        "change_pct": 0.36
      },
      {
        "name": "振兴东北",
        "change_pct": -0.71
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -0.51
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 6,
    "hot_rank_chg": -3,
    "stock_cnt": 5786,
    "price": "3.03",
    "change": "-10.09",
    "market_id": "17",
    "circulate_market_value": "8672987900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -2.32
      },
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "游戏",
        "change_pct": -2.93
      },
      {
        "name": "影视",
        "change_pct": -4.72
      },
      {
        "name": "国企改革",
        "change_pct": -0.68
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.73
      },
      {
        "name": "AI视频",
        "change_pct": -0.79
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 7,
    "hot_rank_chg": 2,
    "stock_cnt": 5786,
    "price": "5.13",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "6848821700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.97
      },
      {
        "name": "物联网",
        "change_pct": 0.07
      },
      {
        "name": "LED",
        "change_pct": -0.4
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.53
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 8,
    "hot_rank_chg": -4,
    "stock_cnt": 5786,
    "price": "3.73",
    "change": "-9.90",
    "market_id": "33",
    "circulate_market_value": "5897022800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -1.25
      },
      {
        "name": "体外诊断",
        "change_pct": -1.26
      },
      {
        "name": "医疗器械",
        "change_pct": -1.62
      },
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "基因测序",
        "change_pct": -1.48
      },
      {
        "name": "预制菜",
        "change_pct": -1.39
      },
      {
        "name": "水产养殖",
        "change_pct": -3.03
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.7
      },
      {
        "name": "海洋经济",
        "change_pct": -0.84
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 9,
    "hot_rank_chg": 13,
    "stock_cnt": 5786,
    "price": "7.37",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "7425933300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "GPU芯片",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.39
      },
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "工业自动化",
        "change_pct": -0.75
      },
      {
        "name": "机械",
        "change_pct": -0.34
      },
      {
        "name": "智能制造",
        "change_pct": -0.49
      },
      {
        "name": "国产芯片",
        "change_pct": 0.23
      },
      {
        "name": "信创",
        "change_pct": 1.03
      },
      {
        "name": "AI算力芯片",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 12,
    "hot_rank_chg": -5,
    "stock_cnt": 5786,
    "price": "4.19",
    "change": "-9.89",
    "market_id": "33",
    "circulate_market_value": "3855579000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -2.32
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.27
      },
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "人工智能",
        "change_pct": -0.51
      },
      {
        "name": "VR&AR",
        "change_pct": -0.7
      },
      {
        "name": "游戏",
        "change_pct": -2.93
      },
      {
        "name": "动漫",
        "change_pct": -3.61
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.53
      },
      {
        "name": "快手概念股",
        "change_pct": -0.92
      },
      {
        "name": "NFT",
        "change_pct": -0.93
      },
      {
        "name": "元宇宙",
        "change_pct": -0.77
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.66
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.68
      },
      {
        "name": "云游戏",
        "change_pct": -1.41
      },
      {
        "name": "华为产业链",
        "change_pct": -0.05
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.31
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 14,
    "hot_rank_chg": 77,
    "stock_cnt": 5786,
    "price": "8.08",
    "change": "2.15",
    "market_id": "33",
    "circulate_market_value": "3887605900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -1.26
      },
      {
        "name": "医疗器械",
        "change_pct": -1.62
      },
      {
        "name": "锂电池",
        "change_pct": -0.96
      },
      {
        "name": "基因测序",
        "change_pct": -1.48
      },
      {
        "name": "PCB板",
        "change_pct": 1.88
      },
      {
        "name": "医药",
        "change_pct": -1.5
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.79
      },
      {
        "name": "化学原料药",
        "change_pct": -1.69
      },
      {
        "name": "食品安全",
        "change_pct": -0.21
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.25
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.5
      },
      {
        "name": "异丙醇",
        "change_pct": -0.58
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.7
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -1.06
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 15,
    "hot_rank_chg": 1,
    "stock_cnt": 5786,
    "price": "10.13",
    "change": "-10.04",
    "market_id": "17",
    "circulate_market_value": "8236177300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "充电桩",
        "change_pct": -0.19
      },
      {
        "name": "光伏",
        "change_pct": -1.21
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.79
      },
      {
        "name": "家电",
        "change_pct": -0.26
      },
      {
        "name": "储能",
        "change_pct": -0.47
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 0.13
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.23
      },
      {
        "name": "厨卫家电",
        "change_pct": -0.21
      },
      {
        "name": "华为产业链",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "000521",
    "name": "长虹美菱",
    "hot_rank": 16,
    "hot_rank_chg": 74,
    "stock_cnt": 5786,
    "price": "5.01",
    "change": "6.75",
    "market_id": "33",
    "circulate_market_value": "4428961700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -1.62
      },
      {
        "name": "一带一路",
        "change_pct": -0.39
      },
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "人工智能",
        "change_pct": -0.51
      },
      {
        "name": "冷链",
        "change_pct": 0.08
      },
      {
        "name": "小家电",
        "change_pct": 0.01
      },
      {
        "name": "白色家电",
        "change_pct": 0.07
      },
      {
        "name": "家电",
        "change_pct": -0.26
      },
      {
        "name": "破净股",
        "change_pct": -0.49
      },
      {
        "name": "智能制造",
        "change_pct": -0.49
      },
      {
        "name": "工业互联网",
        "change_pct": 0.2
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 0.13
      },
      {
        "name": "垃圾分类",
        "change_pct": -0.26
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.7
      },
      {
        "name": "C2M",
        "change_pct": -0.2
      },
      {
        "name": "生物安全",
        "change_pct": -0.84
      },
      {
        "name": "出海龙头",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 17,
    "hot_rank_chg": 0,
    "stock_cnt": 5786,
    "price": "10.94",
    "change": "1.39",
    "market_id": "33",
    "circulate_market_value": "7499681300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 0.22
      },
      {
        "name": "核电",
        "change_pct": -0.66
      },
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "充电桩",
        "change_pct": -0.19
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.39
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.79
      },
      {
        "name": "储能",
        "change_pct": -0.47
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.15
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 0.63
      },
      {
        "name": "智能电网",
        "change_pct": -0.17
      },
      {
        "name": "核聚变",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 22,
    "hot_rank_chg": -9,
    "stock_cnt": 5786,
    "price": "7.29",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "5109521900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -2.58
      },
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.02
      },
      {
        "name": "物业管理",
        "change_pct": -0.05
      },
      {
        "name": "预制菜",
        "change_pct": -1.39
      },
      {
        "name": "地摊经济",
        "change_pct": -1.43
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 24,
    "hot_rank_chg": 2,
    "stock_cnt": 5786,
    "price": "10.91",
    "change": "2.73",
    "market_id": "17",
    "circulate_market_value": "11399726400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.41
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.66
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -2.03
      },
      {
        "name": "国企改革",
        "change_pct": -0.68
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 25,
    "hot_rank_chg": 235,
    "stock_cnt": 5786,
    "price": "5.68",
    "change": "10.08",
    "market_id": "17",
    "circulate_market_value": "26212965000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "家电",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -0.57
      },
      {
        "name": "国产软件",
        "change_pct": 0.51
      },
      {
        "name": "锂电池",
        "change_pct": -0.96
      },
      {
        "name": "人工智能",
        "change_pct": -0.51
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.39
      },
      {
        "name": "养老产业",
        "change_pct": -0.31
      },
      {
        "name": "大飞机",
        "change_pct": -1.75
      },
      {
        "name": "军民融合",
        "change_pct": -0.7
      },
      {
        "name": "物联网",
        "change_pct": 0.07
      },
      {
        "name": "大数据",
        "change_pct": 0.45
      },
      {
        "name": "智慧城市",
        "change_pct": 0.14
      },
      {
        "name": "军工",
        "change_pct": -0.96
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.79
      },
      {
        "name": "机器人",
        "change_pct": -1.15
      },
      {
        "name": "黑色家电",
        "change_pct": -0.3
      },
      {
        "name": "家电",
        "change_pct": -0.26
      },
      {
        "name": "储能",
        "change_pct": -0.47
      },
      {
        "name": "智能制造",
        "change_pct": -0.49
      },
      {
        "name": "工业互联网",
        "change_pct": 0.2
      },
      {
        "name": "数字经济",
        "change_pct": 0.16
      },
      {
        "name": "百度概念股",
        "change_pct": -0.59
      },
      {
        "name": "NFT",
        "change_pct": -0.93
      },
      {
        "name": "跨境支付",
        "change_pct": 0.29
      },
      {
        "name": "华为海思",
        "change_pct": 0.68
      },
      {
        "name": "云游戏",
        "change_pct": -1.41
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.52
      },
      {
        "name": "华为产业链",
        "change_pct": -0.05
      },
      {
        "name": "毫米波雷达",
        "change_pct": 0.26
      },
      {
        "name": "服务器",
        "change_pct": 1.5
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.19
      },
      {
        "name": "星闪概念",
        "change_pct": -0.82
      },
      {
        "name": "低空经济",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 28,
    "hot_rank_chg": 3,
    "stock_cnt": 5786,
    "price": "9.49",
    "change": "-9.96",
    "market_id": "33",
    "circulate_market_value": "5375879000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.89
      },
      {
        "name": "石墨烯",
        "change_pct": -0.26
      },
      {
        "name": "军民融合",
        "change_pct": -0.7
      },
      {
        "name": "物联网",
        "change_pct": 0.07
      },
      {
        "name": "LED",
        "change_pct": -0.4
      },
      {
        "name": "军工",
        "change_pct": -0.96
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.03
      },
      {
        "name": "海洋经济",
        "change_pct": -0.87
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 29,
    "hot_rank_chg": 16,
    "stock_cnt": 5786,
    "price": "8.20",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "3884178300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -2.35
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "VR&AR",
        "change_pct": -0.78
      },
      {
        "name": "游戏",
        "change_pct": -2.96
      },
      {
        "name": "影视",
        "change_pct": -4.72
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.85
      },
      {
        "name": "动漫",
        "change_pct": -3.68
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.51
      },
      {
        "name": "传媒",
        "change_pct": -2.07
      },
      {
        "name": "元宇宙",
        "change_pct": -0.8
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.79
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.32
      }
    ]
  },
  {
    "code": "002194",
    "name": "武汉凡谷",
    "hot_rank": 33,
    "hot_rank_chg": 1407,
    "stock_cnt": 5786,
    "price": "9.31",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "4791365000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "6G预研",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -0.32
      },
      {
        "name": "5G",
        "change_pct": 1.42
      },
      {
        "name": "光通信",
        "change_pct": 1.44
      },
      {
        "name": "教育",
        "change_pct": -0.31
      },
      {
        "name": "毫米波通信",
        "change_pct": 0.88
      },
      {
        "name": "6G",
        "change_pct": 0.92
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.54
      },
      {
        "name": "华为产业链",
        "change_pct": -0.08
      },
      {
        "name": "毫米波雷达",
        "change_pct": 0.23
      },
      {
        "name": "5.5G概念",
        "change_pct": 2.26
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 35,
    "hot_rank_chg": 12,
    "stock_cnt": 5786,
    "price": "4.71",
    "change": "-9.94",
    "market_id": "17",
    "circulate_market_value": "4167311500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -2.62
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.26
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "信托",
        "change_pct": -0.49
      },
      {
        "name": "民营医院",
        "change_pct": -1.43
      },
      {
        "name": "汽车销售",
        "change_pct": -1.54
      },
      {
        "name": "社区团购",
        "change_pct": -2.34
      },
      {
        "name": "大金融",
        "change_pct": -0.62
      },
      {
        "name": "餐饮",
        "change_pct": -1.43
      },
      {
        "name": "首发经济",
        "change_pct": -1.36
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 36,
    "hot_rank_chg": 27,
    "stock_cnt": 5786,
    "price": "4.10",
    "change": "-9.89",
    "market_id": "17",
    "circulate_market_value": "4758224100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "纺织服装",
        "change_pct": -1.17
      },
      {
        "name": "浙江国企改革",
        "change_pct": -1.14
      },
      {
        "name": "影视",
        "change_pct": -4.72
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -0.69
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.79
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 38,
    "hot_rank_chg": 10,
    "stock_cnt": 5786,
    "price": "4.07",
    "change": "-7.71",
    "market_id": "33",
    "circulate_market_value": "3504931600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.43
      },
      {
        "name": "一带一路",
        "change_pct": -0.41
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.2
      },
      {
        "name": "光伏",
        "change_pct": -1.23
      },
      {
        "name": "有色金属",
        "change_pct": -1.17
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.83
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.31
      },
      {
        "name": "自贸区",
        "change_pct": -0.74
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 39,
    "hot_rank_chg": -20,
    "stock_cnt": 5786,
    "price": "2.48",
    "change": "-10.14",
    "market_id": "17",
    "circulate_market_value": "8654674700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -2.17
      },
      {
        "name": "车联网/车路云",
        "change_pct": -0.19
      },
      {
        "name": "超高清视频",
        "change_pct": -0.62
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "人工智能",
        "change_pct": -0.53
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "影视",
        "change_pct": -4.72
      },
      {
        "name": "智慧城市",
        "change_pct": 0.11
      },
      {
        "name": "国产芯片",
        "change_pct": 0.12
      },
      {
        "name": "振兴东北",
        "change_pct": -0.7
      },
      {
        "name": "传媒",
        "change_pct": -2.07
      },
      {
        "name": "低价股",
        "change_pct": -0.12
      },
      {
        "name": "国企改革",
        "change_pct": -0.69
      },
      {
        "name": "在线教育",
        "change_pct": 0.11
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.38
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.22
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.79
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.32
      }
    ]
  },
  {
    "code": "002419",
    "name": "天虹股份",
    "hot_rank": 43,
    "hot_rank_chg": 3,
    "stock_cnt": 5786,
    "price": "4.90",
    "change": "-8.24",
    "market_id": "33",
    "circulate_market_value": "5592074500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.81
      },
      {
        "name": "彩票",
        "change_pct": -1.93
      },
      {
        "name": "央企改革",
        "change_pct": -0.65
      },
      {
        "name": "白酒",
        "change_pct": -2.01
      },
      {
        "name": "新零售",
        "change_pct": -2.62
      },
      {
        "name": "农业种植",
        "change_pct": -0.39
      },
      {
        "name": "人工智能",
        "change_pct": -0.53
      },
      {
        "name": "军工集团",
        "change_pct": -1.67
      },
      {
        "name": "军工",
        "change_pct": -0.98
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.51
      },
      {
        "name": "大农业",
        "change_pct": -1.12
      },
      {
        "name": "国企改革",
        "change_pct": -0.69
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "002451",
    "name": "摩恩电气",
    "hot_rank": 44,
    "hot_rank_chg": 139,
    "stock_cnt": 5786,
    "price": "7.15",
    "change": "0.28",
    "market_id": "33",
    "circulate_market_value": "3139915400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 0.1
      },
      {
        "name": "5G",
        "change_pct": 1.42
      },
      {
        "name": "充电桩",
        "change_pct": -0.22
      },
      {
        "name": "光伏",
        "change_pct": -1.23
      },
      {
        "name": "风电",
        "change_pct": -0.49
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.83
      },
      {
        "name": "供应链金融",
        "change_pct": -0.56
      },
      {
        "name": "智能电网",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 45,
    "hot_rank_chg": 14,
    "stock_cnt": 5786,
    "price": "4.94",
    "change": "-10.02",
    "market_id": "17",
    "circulate_market_value": "2763038500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -2.35
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.32
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "游戏",
        "change_pct": -2.96
      },
      {
        "name": "影视",
        "change_pct": -4.72
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.79
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 53,
    "hot_rank_chg": -13,
    "stock_cnt": 5786,
    "price": "3.15",
    "change": "-5.97",
    "market_id": "17",
    "circulate_market_value": "6968836500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -0.93
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "光通信",
        "change_pct": 1.44
      },
      {
        "name": "林业",
        "change_pct": -1.32
      },
      {
        "name": "军民融合",
        "change_pct": -0.73
      },
      {
        "name": "军工",
        "change_pct": -0.98
      },
      {
        "name": "人造肉",
        "change_pct": -1.47
      }
    ]
  },
  {
    "code": "600853",
    "name": "龙建股份",
    "hot_rank": 56,
    "hot_rank_chg": 61,
    "stock_cnt": 5786,
    "price": "3.74",
    "change": "-6.73",
    "market_id": "17",
    "circulate_market_value": "3791254900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.41
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "水利",
        "change_pct": -0.51
      },
      {
        "name": "智慧城市",
        "change_pct": 0.11
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.45
      },
      {
        "name": "振兴东北",
        "change_pct": -0.7
      },
      {
        "name": "大基建",
        "change_pct": -0.63
      },
      {
        "name": "中俄贸易",
        "change_pct": -1.34
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.38
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -0.12
      },
      {
        "name": "旧改",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "600936",
    "name": "北投科技",
    "hot_rank": 57,
    "hot_rank_chg": -4,
    "stock_cnt": 5786,
    "price": "4.02",
    "change": "-8.82",
    "market_id": "17",
    "circulate_market_value": "6734235700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "智慧城市",
        "change_pct": 0.11
      },
      {
        "name": "机器人",
        "change_pct": -1.2
      },
      {
        "name": "无人机",
        "change_pct": -1.08
      },
      {
        "name": "广西概念",
        "change_pct": -0.69
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.22
      },
      {
        "name": "低空经济",
        "change_pct": -0.99
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 58,
    "hot_rank_chg": 13,
    "stock_cnt": 5786,
    "price": "2.67",
    "change": "-2.91",
    "market_id": "17",
    "circulate_market_value": "3900854800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.31
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "冷链",
        "change_pct": 0.14
      },
      {
        "name": "医药",
        "change_pct": -1.5
      },
      {
        "name": "食品",
        "change_pct": -1.24
      },
      {
        "name": "食品安全",
        "change_pct": -0.26
      },
      {
        "name": "预制菜",
        "change_pct": -1.39
      },
      {
        "name": "低价股",
        "change_pct": -0.12
      },
      {
        "name": "水产养殖",
        "change_pct": -3.07
      },
      {
        "name": "海洋经济",
        "change_pct": -0.87
      }
    ]
  },
  {
    "code": "603278",
    "name": "大业股份",
    "hot_rank": 59,
    "hot_rank_chg": 52,
    "stock_cnt": 5786,
    "price": "11.39",
    "change": "-6.33",
    "market_id": "17",
    "circulate_market_value": "3892639500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "轮胎",
        "change_pct": -1.24
      },
      {
        "name": "风电",
        "change_pct": -0.49
      },
      {
        "name": "航天",
        "change_pct": -1.22
      },
      {
        "name": "人形机器人",
        "change_pct": -1.51
      }
    ]
  },
  {
    "code": "600881",
    "name": "亚泰集团",
    "hot_rank": 63,
    "hot_rank_chg": 130,
    "stock_cnt": 5786,
    "price": "1.79",
    "change": "3.47",
    "market_id": "17",
    "circulate_market_value": "5785550300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.97
      },
      {
        "name": "中药",
        "change_pct": -1.31
      },
      {
        "name": "创新药",
        "change_pct": -1.8
      },
      {
        "name": "水泥",
        "change_pct": -0.67
      },
      {
        "name": "保健品",
        "change_pct": -0.65
      },
      {
        "name": "医药",
        "change_pct": -1.5
      },
      {
        "name": "疫苗",
        "change_pct": 1.16
      },
      {
        "name": "振兴东北",
        "change_pct": -0.7
      },
      {
        "name": "食品",
        "change_pct": -1.24
      },
      {
        "name": "物业管理",
        "change_pct": -0.13
      },
      {
        "name": "低价股",
        "change_pct": -0.12
      },
      {
        "name": "国企改革",
        "change_pct": -0.69
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 65,
    "hot_rank_chg": 69,
    "stock_cnt": 5786,
    "price": "8.82",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "3535779100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -0.65
      },
      {
        "name": "新零售",
        "change_pct": -2.62
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "物业管理",
        "change_pct": -0.13
      },
      {
        "name": "国企改革",
        "change_pct": -0.69
      },
      {
        "name": "地摊经济",
        "change_pct": -1.43
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 66,
    "hot_rank_chg": 18,
    "stock_cnt": 5786,
    "price": "5.65",
    "change": "-10.03",
    "market_id": "17",
    "circulate_market_value": "2589103500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -0.67
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.2
      },
      {
        "name": "自贸区",
        "change_pct": -0.74
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 67,
    "hot_rank_chg": -39,
    "stock_cnt": 5786,
    "price": "9.03",
    "change": "-0.33",
    "market_id": "17",
    "circulate_market_value": "2434598300000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.43
      },
      {
        "name": "高股息",
        "change_pct": -0.08
      },
      {
        "name": "银行",
        "change_pct": -0.64
      },
      {
        "name": "白马股",
        "change_pct": -0.37
      },
      {
        "name": "破净股",
        "change_pct": -0.47
      },
      {
        "name": "大金融",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 68,
    "hot_rank_chg": 50,
    "stock_cnt": 5786,
    "price": "7.66",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "2560423300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.83
      },
      {
        "name": "饲料",
        "change_pct": -1.4
      },
      {
        "name": "一带一路",
        "change_pct": -0.41
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "保健品",
        "change_pct": -0.65
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.22
      },
      {
        "name": "污水处理",
        "change_pct": -0.57
      },
      {
        "name": "环保",
        "change_pct": -0.72
      },
      {
        "name": "食品",
        "change_pct": -1.24
      },
      {
        "name": "预制菜",
        "change_pct": -1.39
      },
      {
        "name": "国企改革",
        "change_pct": -0.69
      },
      {
        "name": "水产养殖",
        "change_pct": -3.07
      },
      {
        "name": "广西概念",
        "change_pct": -0.69
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 72,
    "hot_rank_chg": 4,
    "stock_cnt": 5786,
    "price": "2.34",
    "change": "-2.90",
    "market_id": "33",
    "circulate_market_value": "10293682100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.46
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "京津冀",
        "change_pct": 0.17
      },
      {
        "name": "旅游",
        "change_pct": -1.04
      },
      {
        "name": "园林",
        "change_pct": -0.82
      },
      {
        "name": "海绵城市",
        "change_pct": -1.2
      },
      {
        "name": "固废处理",
        "change_pct": -0.62
      },
      {
        "name": "光伏",
        "change_pct": -1.23
      },
      {
        "name": "风电",
        "change_pct": -0.49
      },
      {
        "name": "雄安新区",
        "change_pct": -0.8
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.22
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -0.72
      },
      {
        "name": "储能",
        "change_pct": -0.47
      },
      {
        "name": "碳中和",
        "change_pct": -0.43
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.55
      },
      {
        "name": "汽车拆解",
        "change_pct": -0.42
      },
      {
        "name": "土壤修复",
        "change_pct": -0.44
      },
      {
        "name": "核污染防治",
        "change_pct": -0.15
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.29
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.38
      },
      {
        "name": "低价股",
        "change_pct": -0.12
      },
      {
        "name": "西部大开发",
        "change_pct": -0.87
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 77,
    "hot_rank_chg": -56,
    "stock_cnt": 5786,
    "price": "11.94",
    "change": "-0.42",
    "market_id": "33",
    "circulate_market_value": "41526488000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.81
      },
      {
        "name": "人工智能",
        "change_pct": -0.53
      },
      {
        "name": "VR&AR",
        "change_pct": -0.78
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.85
      },
      {
        "name": "大数据",
        "change_pct": 0.42
      },
      {
        "name": "教育",
        "change_pct": -0.31
      },
      {
        "name": "百度概念股",
        "change_pct": -0.63
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.11
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.51
      },
      {
        "name": "传媒",
        "change_pct": -2.07
      },
      {
        "name": "快手概念股",
        "change_pct": -0.96
      },
      {
        "name": "NFT",
        "change_pct": -0.94
      },
      {
        "name": "元宇宙",
        "change_pct": -0.8
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.69
      },
      {
        "name": "web3.0",
        "change_pct": -0.36
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.46
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.71
      },
      {
        "name": "职业教育",
        "change_pct": -0.27
      },
      {
        "name": "云游戏",
        "change_pct": -1.46
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.54
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.26
      },
      {
        "name": "AI营销",
        "change_pct": -0.83
      },
      {
        "name": "词元概念/Token",
        "change_pct": 2.55
      },
      {
        "name": "华为产业链",
        "change_pct": -0.08
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.22
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.79
      },
      {
        "name": "AI视频",
        "change_pct": -0.82
      },
      {
        "name": "智谱AI",
        "change_pct": 1.43
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.83
      },
      {
        "name": "区块链",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 84,
    "hot_rank_chg": 102,
    "stock_cnt": 5786,
    "price": "9.61",
    "change": "-0.72",
    "market_id": "33",
    "circulate_market_value": "10891556200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.97
      },
      {
        "name": "足球",
        "change_pct": -1.38
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.02
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.13
      },
      {
        "name": "传媒",
        "change_pct": -2.07
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.46
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.71
      },
      {
        "name": "国企改革",
        "change_pct": -0.69
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.54
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.79
      },
      {
        "name": "AI视频",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "002905",
    "name": "金逸影视",
    "hot_rank": 85,
    "hot_rank_chg": -50,
    "stock_cnt": 5786,
    "price": "9.23",
    "change": "-9.95",
    "market_id": "33",
    "circulate_market_value": "3225331200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "影视",
        "change_pct": -4.72
      }
    ]
  },
  {
    "code": "000707",
    "name": "双环科技",
    "hot_rank": 86,
    "hot_rank_chg": 262,
    "stock_cnt": 5786,
    "price": "5.05",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "2781053100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "氯化铵涨价",
    "xgb_concepts": [
      {
        "name": "定增破发",
        "change_pct": -0.16
      },
      {
        "name": "纯碱",
        "change_pct": 0.18
      },
      {
        "name": "烧碱",
        "change_pct": -0.29
      },
      {
        "name": "钠电池",
        "change_pct": -0.92
      },
      {
        "name": "国企改革",
        "change_pct": -0.69
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "603030",
    "name": "全筑股份",
    "hot_rank": 87,
    "hot_rank_chg": 383,
    "stock_cnt": 5786,
    "price": "2.13",
    "change": "9.79",
    "market_id": "17",
    "circulate_market_value": "2805068400.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "边缘AI算力",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.81
      },
      {
        "name": "长三角一体化",
        "change_pct": 0.1
      },
      {
        "name": "装修装饰",
        "change_pct": -1.23
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.82
      },
      {
        "name": "建筑节能",
        "change_pct": -0.54
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.38
      },
      {
        "name": "低价股",
        "change_pct": -0.12
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.61
      },
      {
        "name": "旧改",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "001318",
    "name": "阳光乳业",
    "hot_rank": 91,
    "hot_rank_chg": -21,
    "stock_cnt": 5786,
    "price": "12.91",
    "change": "-8.83",
    "market_id": "33",
    "circulate_market_value": "3649140600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.78
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.26
      },
      {
        "name": "食品",
        "change_pct": -1.24
      },
      {
        "name": "大农业",
        "change_pct": -1.12
      },
      {
        "name": "饮料",
        "change_pct": -1.41
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 93,
    "hot_rank_chg": -19,
    "stock_cnt": 5786,
    "price": "4.31",
    "change": "0.94",
    "market_id": "33",
    "circulate_market_value": "11432493000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "装修装饰",
        "change_pct": -1.23
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.82
      },
      {
        "name": "破净股",
        "change_pct": -0.47
      },
      {
        "name": "航天",
        "change_pct": -1.22
      },
      {
        "name": "旧改",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 94,
    "hot_rank_chg": 20,
    "stock_cnt": 5786,
    "price": "8.57",
    "change": "-3.49",
    "market_id": "33",
    "circulate_market_value": "9083815800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.84
      },
      {
        "name": "电子烟",
        "change_pct": -1.03
      },
      {
        "name": "一带一路",
        "change_pct": -0.41
      },
      {
        "name": "造纸",
        "change_pct": -0.93
      },
      {
        "name": "强势人气股",
        "change_pct": -2.9
      },
      {
        "name": "包装印刷",
        "change_pct": -0.7
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.54
      },
      {
        "name": "太空算力",
        "change_pct": -0.77
      }
    ]
  },
  {
    "code": "002112",
    "name": "三变科技",
    "hot_rank": 95,
    "hot_rank_chg": 984,
    "stock_cnt": 5786,
    "price": "12.05",
    "change": "0.42",
    "market_id": "33",
    "circulate_market_value": "3158064000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 0.31
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "浙江国企改革",
        "change_pct": -1.14
      },
      {
        "name": "光伏",
        "change_pct": -1.23
      },
      {
        "name": "风电",
        "change_pct": -0.49
      },
      {
        "name": "储能",
        "change_pct": -0.47
      },
      {
        "name": "国企改革",
        "change_pct": -0.62
      },
      {
        "name": "智能电网",
        "change_pct": -0.1
      }
    ]
  },
  {
    "code": "002520",
    "name": "日发精机",
    "hot_rank": 98,
    "hot_rank_chg": 26,
    "stock_cnt": 5786,
    "price": "6.67",
    "change": "-5.12",
    "market_id": "33",
    "circulate_market_value": "4704505600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "通用航空",
        "change_pct": -2.05
      },
      {
        "name": "强势人气股",
        "change_pct": -2.81
      },
      {
        "name": "工业自动化",
        "change_pct": -0.69
      },
      {
        "name": "大飞机",
        "change_pct": -1.65
      },
      {
        "name": "军民融合",
        "change_pct": -0.64
      },
      {
        "name": "风电",
        "change_pct": -0.43
      },
      {
        "name": "军工",
        "change_pct": -0.89
      },
      {
        "name": "机器人",
        "change_pct": -1.1
      },
      {
        "name": "智能制造",
        "change_pct": -0.44
      },
      {
        "name": "工业母机",
        "change_pct": -0.66
      },
      {
        "name": "减速器",
        "change_pct": -1.99
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 99,
    "hot_rank_chg": -27,
    "stock_cnt": 5786,
    "price": "6.08",
    "change": "-2.72",
    "market_id": "33",
    "circulate_market_value": "11643762100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.17
      },
      {
        "name": "林业",
        "change_pct": -1.31
      },
      {
        "name": "碳中和",
        "change_pct": -0.41
      },
      {
        "name": "自贸区",
        "change_pct": -0.68
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 100,
    "hot_rank_chg": -25,
    "stock_cnt": 5786,
    "price": "4.99",
    "change": "-3.49",
    "market_id": "33",
    "circulate_market_value": "3810400800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.27
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.22
      },
      {
        "name": "强势人气股",
        "change_pct": -2.81
      },
      {
        "name": "医药商业",
        "change_pct": -1.61
      },
      {
        "name": "保健品",
        "change_pct": -0.63
      },
      {
        "name": "民营医院",
        "change_pct": -1.34
      },
      {
        "name": "医药",
        "change_pct": -1.45
      },
      {
        "name": "食品",
        "change_pct": -1.2
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.2
      },
      {
        "name": "口腔",
        "change_pct": -1.08
      },
      {
        "name": "医美",
        "change_pct": -1.03
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.63
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5786, "price": "29.29", "change": "-7.08", "market_id": "33", "circulate_market_value": "22312115000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 2, "hot_rank_chg": 6, "stock_cnt": 5786, "price": "16.82", "change": "10.01", "market_id": "17", "circulate_market_value": "18443041000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "华为昇腾"}, {"code": "000530", "name": "冰山冷热", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5786, "price": "11.90", "change": "0.42", "market_id": "33", "circulate_market_value": "7141389000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.96}, {"name": "边缘计算", "change_pct": 0.69}, {"name": "核电", "change_pct": -0.66}, {"name": "海工装备", "change_pct": -0.32}, {"name": "强势人气股", "change_pct": -2.89}, {"name": "云计算数据中心", "change_pct": 1.39}, {"name": "冷链", "change_pct": 0.08}, {"name": "地热", "change_pct": 0.38}, {"name": "储能", "change_pct": -0.47}, {"name": "碳中和", "change_pct": -0.45}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -1.45}, {"name": "汽车热管理", "change_pct": -1.15}, {"name": "热泵", "change_pct": 0.13}, {"name": "液冷服务器", "change_pct": 0.21}, {"name": "蜜雪冰城概念股", "change_pct": -1.27}, {"name": "海洋经济", "change_pct": -0.84}]}, {"code": "002148", "name": "北纬科技", "hot_rank": 4, "hot_rank_chg": 14, "stock_cnt": 5786, "price": "8.92", "change": "9.99", "market_id": "33", "circulate_market_value": "4023157400.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "四足机器人", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.16}, {"name": "手游", "change_pct": -2.32}, {"name": "强势人气股", "change_pct": -2.89}, {"name": "游戏", "change_pct": -2.93}, {"name": "物联网", "change_pct": 0.07}, {"name": "机器人", "change_pct": -1.15}, {"name": "无人机", "change_pct": -1.08}, {"name": "国产芯片", "change_pct": 0.23}, {"name": "5G消息/RCS", "change_pct": 1.33}, {"name": "低空经济", "change_pct": -0.98}, {"name": "无人物流车", "change_pct": -1.45}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 5, "hot_rank_chg": 10, "stock_cnt": 5786, "price": "4.92", "change": "3.80", "market_id": "17", "circulate_market_value": "6422912000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.89}, {"name": "高速公路", "change_pct": 0.36}, {"name": "振兴东北", "change_pct": -0.71}, {"name": "黑龙江自贸区", "change_pct": -0.51}]}, {"code": "600715", "name": "文投控股", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5786, "price": "3.03", "change": "-10.09", "market_id": "17", "circulate_market_value": "8672987900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.32}, {"name": "强势人气股", "change_pct": -2.89}, {"name": "游戏", "change_pct": -2.93}, {"name": "影视", "change_pct": -4.72}, {"name": "国企改革", "change_pct": -0.68}, {"name": "短剧/互动影游", "change_pct": -2.73}, {"name": "AI视频", "change_pct": -0.79}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5786, "price": "5.13", "change": "-10.00", "market_id": "17", "circulate_market_value": "6848821700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.89}, {"name": "氢能源/燃料电池", "change_pct": -0.97}, {"name": "物联网", "change_pct": 0.07}, {"name": "LED", "change_pct": -0.4}, {"name": "卫星互联网", "change_pct": -0.53}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5786, "price": "3.73", "change": "-9.90", "market_id": "33", "circulate_market_value": "5897022800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.25}, {"name": "体外诊断", "change_pct": -1.26}, {"name": "医疗器械", "change_pct": -1.62}, {"name": "强势人气股", "change_pct": -2.89}, {"name": "基因测序", "change_pct": -1.48}, {"name": "预制菜", "change_pct": -1.39}, {"name": "水产养殖", "change_pct": -3.03}, {"name": "新冠病毒防治", "change_pct": -0.7}, {"name": "海洋经济", "change_pct": -0.84}]}, {"code": "002685", "name": "华东重机", "hot_rank": 9, "hot_rank_chg": 13, "stock_cnt": 5786, "price": "7.37", "change": "10.00", "market_id": "33", "circulate_market_value": "7425933300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "GPU芯片", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.39}, {"name": "强势人气股", "change_pct": -2.89}, {"name": "工业自动化", "change_pct": -0.75}, {"name": "机械", "change_pct": -0.34}, {"name": "智能制造", "change_pct": -0.49}, {"name": "国产芯片", "change_pct": 0.23}, {"name": "信创", "change_pct": 1.03}, {"name": "AI算力芯片", "change_pct": 0.29}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 10, "hot_rank_chg": -8, "stock_cnt": 5786, "price": "396.45", "change": "0.86", "market_id": "33", "circulate_market_value": "439979030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 11, "hot_rank_chg": 1, "stock_cnt": 5786, "price": "42.51", "change": "8.09", "market_id": "17", "circulate_market_value": "35986982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002425", "name": "凯撒文化", "hot_rank": 12, "hot_rank_chg": -5, "stock_cnt": 5786, "price": "4.19", "change": "-9.89", "market_id": "33", "circulate_market_value": "3855579000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.32}, {"name": "ST摘帽", "change_pct": -0.27}, {"name": "强势人气股", "change_pct": -2.89}, {"name": "人工智能", "change_pct": -0.51}, {"name": "VR&AR", "change_pct": -0.7}, {"name": "游戏", "change_pct": -2.93}, {"name": "动漫", "change_pct": -3.61}, {"name": "腾讯概念股", "change_pct": 0.53}, {"name": "快手概念股", "change_pct": -0.92}, {"name": "NFT", "change_pct": -0.93}, {"name": "元宇宙", "change_pct": -0.77}, {"name": "虚拟数字人", "change_pct": -0.66}, {"name": "字节跳动概念股", "change_pct": -0.68}, {"name": "云游戏", "change_pct": -1.41}, {"name": "华为产业链", "change_pct": -0.05}, {"name": "IP经济/谷子经济", "change_pct": -2.31}]}, {"code": "002384", "name": "东山精密", "hot_rank": 13, "hot_rank_chg": -7, "stock_cnt": 5786, "price": "72.45", "change": "0.92", "market_id": "33", "circulate_market_value": "100397419000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 14, "hot_rank_chg": 77, "stock_cnt": 5786, "price": "8.08", "change": "2.15", "market_id": "33", "circulate_market_value": "3887605900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -1.26}, {"name": "医疗器械", "change_pct": -1.62}, {"name": "锂电池", "change_pct": -0.96}, {"name": "基因测序", "change_pct": -1.48}, {"name": "PCB板", "change_pct": 1.88}, {"name": "医药", "change_pct": -1.5}, {"name": "新能源汽车", "change_pct": -0.79}, {"name": "化学原料药", "change_pct": -1.69}, {"name": "食品安全", "change_pct": -0.21}, {"name": "辅助生殖", "change_pct": -1.25}, {"name": "光刻机（胶）", "change_pct": -0.5}, {"name": "异丙醇", "change_pct": -0.58}, {"name": "新冠病毒防治", "change_pct": -0.7}, {"name": "磷酸铁锂", "change_pct": -1.06}]}, {"code": "603366", "name": "日出东方", "hot_rank": 15, "hot_rank_chg": 1, "stock_cnt": 5786, "price": "10.13", "change": "-10.04", "market_id": "17", "circulate_market_value": "8236177300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.89}, {"name": "充电桩", "change_pct": -0.19}, {"name": "光伏", "change_pct": -1.21}, {"name": "新能源汽车", "change_pct": -0.79}, {"name": "家电", "change_pct": -0.26}, {"name": "储能", "change_pct": -0.47}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.13}, {"name": "华为鸿蒙", "change_pct": 0.23}, {"name": "厨卫家电", "change_pct": -0.21}, {"name": "华为产业链", "change_pct": -0.05}]}, {"code": "000521", "name": "长虹美菱", "hot_rank": 16, "hot_rank_chg": 74, "stock_cnt": 5786, "price": "5.01", "change": "6.75", "market_id": "33", "circulate_market_value": "4428961700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医疗器械", "change_pct": -1.62}, {"name": "一带一路", "change_pct": -0.39}, {"name": "强势人气股", "change_pct": -2.89}, {"name": "人工智能", "change_pct": -0.51}, {"name": "冷链", "change_pct": 0.08}, {"name": "小家电", "change_pct": 0.01}, {"name": "白色家电", "change_pct": 0.07}, {"name": "家电", "change_pct": -0.26}, {"name": "破净股", "change_pct": -0.49}, {"name": "智能制造", "change_pct": -0.49}, {"name": "工业互联网", "change_pct": 0.2}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.13}, {"name": "垃圾分类", "change_pct": -0.26}, {"name": "新冠病毒防治", "change_pct": -0.7}, {"name": "C2M", "change_pct": -0.2}, {"name": "生物安全", "change_pct": -0.84}, {"name": "出海龙头", "change_pct": -0.19}]}, {"code": "000533", "name": "顺钠股份", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5786, "price": "10.94", "change": "1.39", "market_id": "33", "circulate_market_value": "7499681300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 0.22}, {"name": "核电", "change_pct": -0.66}, {"name": "强势人气股", "change_pct": -2.89}, {"name": "充电桩", "change_pct": -0.19}, {"name": "云计算数据中心", "change_pct": 1.39}, {"name": "新能源汽车", "change_pct": -0.79}, {"name": "储能", "change_pct": -0.47}, {"name": "阿里巴巴概念股", "change_pct": 0.15}, {"name": "中芯国际概念股", "change_pct": 0.63}, {"name": "智能电网", "change_pct": -0.17}, {"name": "核聚变", "change_pct": -0.13}]}, {"code": "002959", "name": "小熊电器", "hot_rank": 18, "hot_rank_chg": 37, "stock_cnt": 5786, "price": "40.00", "change": "0.33", "market_id": "33", "circulate_market_value": "5595969400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 19, "hot_rank_chg": 1, "stock_cnt": 5786, "price": "15.23", "change": "-4.75", "market_id": "33", "circulate_market_value": "7004483800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 20, "hot_rank_chg": 7, "stock_cnt": 5786, "price": "37.80", "change": "5.29", "market_id": "17", "circulate_market_value": "750106690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 21, "hot_rank_chg": 16, "stock_cnt": 5786, "price": "80.19", "change": "10.00", "market_id": "33", "circulate_market_value": "154974310000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "002187", "name": "广百股份", "hot_rank": 22, "hot_rank_chg": -9, "stock_cnt": 5786, "price": "7.29", "change": "-10.00", "market_id": "33", "circulate_market_value": "5109521900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -2.58}, {"name": "强势人气股", "change_pct": -2.89}, {"name": "粤港澳大湾区", "change_pct": 0.02}, {"name": "物业管理", "change_pct": -0.05}, {"name": "预制菜", "change_pct": -1.39}, {"name": "地摊经济", "change_pct": -1.43}]}, {"code": "300502", "name": "新易盛", "hot_rank": 23, "hot_rank_chg": -13, "stock_cnt": 5786, "price": "159.88", "change": "-0.07", "market_id": "33", "circulate_market_value": "200605230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 24, "hot_rank_chg": 2, "stock_cnt": 5786, "price": "10.91", "change": "2.73", "market_id": "17", "circulate_market_value": "11399726400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.41}, {"name": "上海国企改革", "change_pct": -0.66}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -2.03}, {"name": "国企改革", "change_pct": -0.68}]}, {"code": "600839", "name": "四川长虹", "hot_rank": 25, "hot_rank_chg": 235, "stock_cnt": 5786, "price": "5.68", "change": "10.08", "market_id": "17", "circulate_market_value": "26212965000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "家电", "xgb_concepts": [{"name": "超高清视频", "change_pct": -0.57}, {"name": "国产软件", "change_pct": 0.51}, {"name": "锂电池", "change_pct": -0.96}, {"name": "人工智能", "change_pct": -0.51}, {"name": "云计算数据中心", "change_pct": 1.39}, {"name": "养老产业", "change_pct": -0.31}, {"name": "大飞机", "change_pct": -1.75}, {"name": "军民融合", "change_pct": -0.7}, {"name": "物联网", "change_pct": 0.07}, {"name": "大数据", "change_pct": 0.45}, {"name": "智慧城市", "change_pct": 0.14}, {"name": "军工", "change_pct": -0.96}, {"name": "新能源汽车", "change_pct": -0.79}, {"name": "机器人", "change_pct": -1.15}, {"name": "黑色家电", "change_pct": -0.3}, {"name": "家电", "change_pct": -0.26}, {"name": "储能", "change_pct": -0.47}, {"name": "智能制造", "change_pct": -0.49}, {"name": "工业互联网", "change_pct": 0.2}, {"name": "数字经济", "change_pct": 0.16}, {"name": "百度概念股", "change_pct": -0.59}, {"name": "NFT", "change_pct": -0.93}, {"name": "跨境支付", "change_pct": 0.29}, {"name": "华为海思", "change_pct": 0.68}, {"name": "云游戏", "change_pct": -1.41}, {"name": "网红/MCN", "change_pct": -1.52}, {"name": "华为产业链", "change_pct": -0.05}, {"name": "毫米波雷达", "change_pct": 0.26}, {"name": "服务器", "change_pct": 1.5}, {"name": "AI大模型/智能体", "change_pct": -0.19}, {"name": "星闪概念", "change_pct": -0.82}, {"name": "低空经济", "change_pct": -0.98}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 26, "hot_rank_chg": -3, "stock_cnt": 5786, "price": "108.80", "change": "4.00", "market_id": "33", "circulate_market_value": "118416620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 27, "hot_rank_chg": -16, "stock_cnt": 5786, "price": "609.00", "change": "-1.73", "market_id": "17", "circulate_market_value": "18323421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 28, "hot_rank_chg": 3, "stock_cnt": 5786, "price": "9.49", "change": "-9.96", "market_id": "33", "circulate_market_value": "5375879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.89}, {"name": "石墨烯", "change_pct": -0.26}, {"name": "军民融合", "change_pct": -0.7}, {"name": "物联网", "change_pct": 0.07}, {"name": "LED", "change_pct": -0.4}, {"name": "军工", "change_pct": -0.96}, {"name": "智慧灯杆", "change_pct": -0.03}, {"name": "海洋经济", "change_pct": -0.87}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 29, "hot_rank_chg": 16, "stock_cnt": 5786, "price": "8.20", "change": "-9.99", "market_id": "33", "circulate_market_value": "3884178300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.35}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "VR&AR", "change_pct": -0.78}, {"name": "游戏", "change_pct": -2.96}, {"name": "影视", "change_pct": -4.72}, {"name": "直播/短视频", "change_pct": -1.85}, {"name": "动漫", "change_pct": -3.68}, {"name": "腾讯概念股", "change_pct": 0.51}, {"name": "传媒", "change_pct": -2.07}, {"name": "元宇宙", "change_pct": -0.8}, {"name": "短剧/互动影游", "change_pct": -2.79}, {"name": "IP经济/谷子经济", "change_pct": -2.32}]}, {"code": "301209", "name": "联合化学", "hot_rank": 30, "hot_rank_chg": 67, "stock_cnt": 5786, "price": "61.58", "change": "16.28", "market_id": "33", "circulate_market_value": "8249022800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 31, "hot_rank_chg": 10, "stock_cnt": 5786, "price": "16.22", "change": "-4.08", "market_id": "33", "circulate_market_value": "2877557800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002771", "name": "真视通", "hot_rank": 32, "hot_rank_chg": 207, "stock_cnt": 5786, "price": "13.07", "change": "10.02", "market_id": "33", "circulate_market_value": "2360342100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "液冷算力"}, {"code": "002194", "name": "武汉凡谷", "hot_rank": 33, "hot_rank_chg": 1407, "stock_cnt": 5786, "price": "9.31", "change": "10.05", "market_id": "33", "circulate_market_value": "4791365000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "6G预研", "xgb_concepts": [{"name": "手机产业链", "change_pct": -0.32}, {"name": "5G", "change_pct": 1.42}, {"name": "光通信", "change_pct": 1.44}, {"name": "教育", "change_pct": -0.31}, {"name": "毫米波通信", "change_pct": 0.88}, {"name": "6G", "change_pct": 0.92}, {"name": "卫星互联网", "change_pct": -0.54}, {"name": "华为产业链", "change_pct": -0.08}, {"name": "毫米波雷达", "change_pct": 0.23}, {"name": "5.5G概念", "change_pct": 2.26}]}, {"code": "300476", "name": "胜宏科技", "hot_rank": 34, "hot_rank_chg": 32, "stock_cnt": 5786, "price": "113.29", "change": "5.97", "market_id": "33", "circulate_market_value": "97991903000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 35, "hot_rank_chg": 12, "stock_cnt": 5786, "price": "4.71", "change": "-9.94", "market_id": "17", "circulate_market_value": "4167311500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -2.62}, {"name": "优化生育（三孩）", "change_pct": -1.26}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "信托", "change_pct": -0.49}, {"name": "民营医院", "change_pct": -1.43}, {"name": "汽车销售", "change_pct": -1.54}, {"name": "社区团购", "change_pct": -2.34}, {"name": "大金融", "change_pct": -0.62}, {"name": "餐饮", "change_pct": -1.43}, {"name": "首发经济", "change_pct": -1.36}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 36, "hot_rank_chg": 27, "stock_cnt": 5786, "price": "4.10", "change": "-9.89", "market_id": "17", "circulate_market_value": "4758224100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.9}, {"name": "纺织服装", "change_pct": -1.17}, {"name": "浙江国企改革", "change_pct": -1.14}, {"name": "影视", "change_pct": -4.72}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -0.69}, {"name": "短剧/互动影游", "change_pct": -2.79}]}, {"code": "603118", "name": "共进股份", "hot_rank": 37, "hot_rank_chg": -8, "stock_cnt": 5786, "price": "15.30", "change": "3.38", "market_id": "17", "circulate_market_value": "12045329000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002578", "name": "闽发铝业", "hot_rank": 38, "hot_rank_chg": 10, "stock_cnt": 5786, "price": "4.07", "change": "-7.71", "market_id": "33", "circulate_market_value": "3504931600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.43}, {"name": "一带一路", "change_pct": -0.41}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "福建自贸/海西概念", "change_pct": -1.2}, {"name": "光伏", "change_pct": -1.23}, {"name": "有色金属", "change_pct": -1.17}, {"name": "新能源汽车", "change_pct": -0.83}, {"name": "新能源车零部件", "change_pct": -1.31}, {"name": "自贸区", "change_pct": -0.74}, {"name": "液冷服务器", "change_pct": 0.17}]}, {"code": "601929", "name": "吉视传媒", "hot_rank": 39, "hot_rank_chg": -20, "stock_cnt": 5786, "price": "2.48", "change": "-10.14", "market_id": "17", "circulate_market_value": "8654674700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -2.17}, {"name": "车联网/车路云", "change_pct": -0.19}, {"name": "超高清视频", "change_pct": -0.62}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "人工智能", "change_pct": -0.53}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "影视", "change_pct": -4.72}, {"name": "智慧城市", "change_pct": 0.11}, {"name": "国产芯片", "change_pct": 0.12}, {"name": "振兴东北", "change_pct": -0.7}, {"name": "传媒", "change_pct": -2.07}, {"name": "低价股", "change_pct": -0.12}, {"name": "国企改革", "change_pct": -0.69}, {"name": "在线教育", "change_pct": 0.11}, {"name": "医疗信息化", "change_pct": 0.38}, {"name": "AI大模型/智能体", "change_pct": -0.22}, {"name": "短剧/互动影游", "change_pct": -2.79}, {"name": "IP经济/谷子经济", "change_pct": -2.32}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 40, "hot_rank_chg": 62, "stock_cnt": 5786, "price": "22.23", "change": "-0.40", "market_id": "33", "circulate_market_value": "11323986400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 41, "hot_rank_chg": -27, "stock_cnt": 5786, "price": "37.11", "change": "2.54", "market_id": "17", "circulate_market_value": "167107780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600619", "name": "海立股份", "hot_rank": 42, "hot_rank_chg": 67, "stock_cnt": 5786, "price": "13.46", "change": "2.75", "market_id": "17", "circulate_market_value": "10622292800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002419", "name": "天虹股份", "hot_rank": 43, "hot_rank_chg": 3, "stock_cnt": 5786, "price": "4.90", "change": "-8.24", "market_id": "33", "circulate_market_value": "5592074500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.81}, {"name": "彩票", "change_pct": -1.93}, {"name": "央企改革", "change_pct": -0.65}, {"name": "白酒", "change_pct": -2.01}, {"name": "新零售", "change_pct": -2.62}, {"name": "农业种植", "change_pct": -0.39}, {"name": "人工智能", "change_pct": -0.53}, {"name": "军工集团", "change_pct": -1.67}, {"name": "军工", "change_pct": -0.98}, {"name": "腾讯概念股", "change_pct": 0.51}, {"name": "大农业", "change_pct": -1.12}, {"name": "国企改革", "change_pct": -0.69}, {"name": "AI大模型/智能体", "change_pct": -0.22}]}, {"code": "002451", "name": "摩恩电气", "hot_rank": 44, "hot_rank_chg": 139, "stock_cnt": 5786, "price": "7.15", "change": "0.28", "market_id": "33", "circulate_market_value": "3139915400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 0.1}, {"name": "5G", "change_pct": 1.42}, {"name": "充电桩", "change_pct": -0.22}, {"name": "光伏", "change_pct": -1.23}, {"name": "风电", "change_pct": -0.49}, {"name": "新能源汽车", "change_pct": -0.83}, {"name": "供应链金融", "change_pct": -0.56}, {"name": "智能电网", "change_pct": -0.19}]}, {"code": "600892", "name": "大晟文化", "hot_rank": 45, "hot_rank_chg": 14, "stock_cnt": 5786, "price": "4.94", "change": "-10.02", "market_id": "17", "circulate_market_value": "2763038500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.35}, {"name": "ST摘帽", "change_pct": -0.32}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "游戏", "change_pct": -2.96}, {"name": "影视", "change_pct": -4.72}, {"name": "短剧/互动影游", "change_pct": -2.79}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 46, "hot_rank_chg": 14, "stock_cnt": 5786, "price": "14.47", "change": "0.56", "market_id": "33", "circulate_market_value": "9545432000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 47, "hot_rank_chg": -14, "stock_cnt": 5786, "price": "28.20", "change": "-2.96", "market_id": "33", "circulate_market_value": "28811939000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 48, "hot_rank_chg": 94, "stock_cnt": 5786, "price": "17.22", "change": "2.20", "market_id": "33", "circulate_market_value": "3275201000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000831", "name": "中国稀土", "hot_rank": 49, "hot_rank_chg": -19, "stock_cnt": 5786, "price": "40.61", "change": "-9.37", "market_id": "33", "circulate_market_value": "43106789000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 50, "hot_rank_chg": -8, "stock_cnt": 5786, "price": "38.56", "change": "2.07", "market_id": "17", "circulate_market_value": "94538990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 51, "hot_rank_chg": 0, "stock_cnt": 5786, "price": "60.77", "change": "3.69", "market_id": "17", "circulate_market_value": "146561980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 52, "hot_rank_chg": 5, "stock_cnt": 5786, "price": "106.59", "change": "2.18", "market_id": "17", "circulate_market_value": "29374965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 53, "hot_rank_chg": -13, "stock_cnt": 5786, "price": "3.15", "change": "-5.97", "market_id": "17", "circulate_market_value": "6968836500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.93}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "光通信", "change_pct": 1.44}, {"name": "林业", "change_pct": -1.32}, {"name": "军民融合", "change_pct": -0.73}, {"name": "军工", "change_pct": -0.98}, {"name": "人造肉", "change_pct": -1.47}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 54, "hot_rank_chg": -16, "stock_cnt": 5786, "price": "24.30", "change": "5.88", "market_id": "33", "circulate_market_value": "27861824000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 55, "hot_rank_chg": -31, "stock_cnt": 5786, "price": "220.66", "change": "2.84", "market_id": "17", "circulate_market_value": "148000710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600853", "name": "龙建股份", "hot_rank": 56, "hot_rank_chg": 61, "stock_cnt": 5786, "price": "3.74", "change": "-6.73", "market_id": "17", "circulate_market_value": "3791254900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.41}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "水利", "change_pct": -0.51}, {"name": "智慧城市", "change_pct": 0.11}, {"name": "PPP", "change_pct": -0.9}, {"name": "冰雪产业", "change_pct": -1.45}, {"name": "振兴东北", "change_pct": -0.7}, {"name": "大基建", "change_pct": -0.63}, {"name": "中俄贸易", "change_pct": -1.34}, {"name": "新型城镇化", "change_pct": -0.38}, {"name": "黑龙江自贸区", "change_pct": -0.12}, {"name": "旧改", "change_pct": -0.42}]}, {"code": "600936", "name": "北投科技", "hot_rank": 57, "hot_rank_chg": -4, "stock_cnt": 5786, "price": "4.02", "change": "-8.82", "market_id": "17", "circulate_market_value": "6734235700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.9}, {"name": "智慧城市", "change_pct": 0.11}, {"name": "机器人", "change_pct": -1.2}, {"name": "无人机", "change_pct": -1.08}, {"name": "广西概念", "change_pct": -0.69}, {"name": "AI大模型/智能体", "change_pct": -0.22}, {"name": "低空经济", "change_pct": -0.99}]}, {"code": "600467", "name": "好当家", "hot_rank": 58, "hot_rank_chg": 13, "stock_cnt": 5786, "price": "2.67", "change": "-2.91", "market_id": "17", "circulate_market_value": "3900854800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.31}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "冷链", "change_pct": 0.14}, {"name": "医药", "change_pct": -1.5}, {"name": "食品", "change_pct": -1.24}, {"name": "食品安全", "change_pct": -0.26}, {"name": "预制菜", "change_pct": -1.39}, {"name": "低价股", "change_pct": -0.12}, {"name": "水产养殖", "change_pct": -3.07}, {"name": "海洋经济", "change_pct": -0.87}]}, {"code": "603278", "name": "大业股份", "hot_rank": 59, "hot_rank_chg": 52, "stock_cnt": 5786, "price": "11.39", "change": "-6.33", "market_id": "17", "circulate_market_value": "3892639500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.9}, {"name": "轮胎", "change_pct": -1.24}, {"name": "风电", "change_pct": -0.49}, {"name": "航天", "change_pct": -1.22}, {"name": "人形机器人", "change_pct": -1.51}]}, {"code": "002843", "name": "泰嘉股份", "hot_rank": 60, "hot_rank_chg": 114, "stock_cnt": 5786, "price": "17.34", "change": "10.03", "market_id": "33", "circulate_market_value": "4342479800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": ""}, {"code": "603324", "name": "盛剑科技", "hot_rank": 61, "hot_rank_chg": 333, "stock_cnt": 5786, "price": "22.90", "change": "9.99", "market_id": "17", "circulate_market_value": "3340615800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光刻胶"}, {"code": "002428", "name": "云南锗业", "hot_rank": 62, "hot_rank_chg": -12, "stock_cnt": 5786, "price": "70.39", "change": "3.27", "market_id": "33", "circulate_market_value": "45971728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600881", "name": "亚泰集团", "hot_rank": 63, "hot_rank_chg": 130, "stock_cnt": 5786, "price": "1.79", "change": "3.47", "market_id": "17", "circulate_market_value": "5785550300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.97}, {"name": "中药", "change_pct": -1.31}, {"name": "创新药", "change_pct": -1.8}, {"name": "水泥", "change_pct": -0.67}, {"name": "保健品", "change_pct": -0.65}, {"name": "医药", "change_pct": -1.5}, {"name": "疫苗", "change_pct": 1.16}, {"name": "振兴东北", "change_pct": -0.7}, {"name": "食品", "change_pct": -1.24}, {"name": "物业管理", "change_pct": -0.13}, {"name": "低价股", "change_pct": -0.12}, {"name": "国企改革", "change_pct": -0.69}]}, {"code": "605488", "name": "福莱新材", "hot_rank": 64, "hot_rank_chg": 5, "stock_cnt": 5786, "price": "43.86", "change": "-8.73", "market_id": "17", "circulate_market_value": "13067395300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 65, "hot_rank_chg": 69, "stock_cnt": 5786, "price": "8.82", "change": "-10.00", "market_id": "17", "circulate_market_value": "3535779100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -0.65}, {"name": "新零售", "change_pct": -2.62}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "物业管理", "change_pct": -0.13}, {"name": "国企改革", "change_pct": -0.69}, {"name": "地摊经济", "change_pct": -1.43}]}, {"code": "600802", "name": "福建水泥", "hot_rank": 66, "hot_rank_chg": 18, "stock_cnt": 5786, "price": "5.65", "change": "-10.03", "market_id": "17", "circulate_market_value": "2589103500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -0.67}, {"name": "福建自贸/海西概念", "change_pct": -1.2}, {"name": "自贸区", "change_pct": -0.74}]}, {"code": "601398", "name": "工商银行", "hot_rank": 67, "hot_rank_chg": -39, "stock_cnt": 5786, "price": "9.03", "change": "-0.33", "market_id": "17", "circulate_market_value": "2434598300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.43}, {"name": "高股息", "change_pct": -0.08}, {"name": "银行", "change_pct": -0.64}, {"name": "白马股", "change_pct": -0.37}, {"name": "破净股", "change_pct": -0.47}, {"name": "大金融", "change_pct": -0.62}]}, {"code": "002696", "name": "百洋股份", "hot_rank": 68, "hot_rank_chg": 50, "stock_cnt": 5786, "price": "7.66", "change": "-9.99", "market_id": "33", "circulate_market_value": "2560423300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.83}, {"name": "饲料", "change_pct": -1.4}, {"name": "一带一路", "change_pct": -0.41}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "保健品", "change_pct": -0.65}, {"name": "山东国企改革", "change_pct": -0.22}, {"name": "污水处理", "change_pct": -0.57}, {"name": "环保", "change_pct": -0.72}, {"name": "食品", "change_pct": -1.24}, {"name": "预制菜", "change_pct": -1.39}, {"name": "国企改革", "change_pct": -0.69}, {"name": "水产养殖", "change_pct": -3.07}, {"name": "广西概念", "change_pct": -0.69}]}, {"code": "603466", "name": "风语筑", "hot_rank": 69, "hot_rank_chg": 62, "stock_cnt": 5786, "price": "13.62", "change": "-2.78", "market_id": "17", "circulate_market_value": "8101611300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 70, "hot_rank_chg": 80, "stock_cnt": 5786, "price": "14.35", "change": "-5.90", "market_id": "17", "circulate_market_value": "6377777800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 71, "hot_rank_chg": 7, "stock_cnt": 5786, "price": "24.50", "change": "-5.73", "market_id": "17", "circulate_market_value": "504743930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002310", "name": "东方新能", "hot_rank": 72, "hot_rank_chg": 4, "stock_cnt": 5786, "price": "2.34", "change": "-2.90", "market_id": "33", "circulate_market_value": "10293682100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.46}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "京津冀", "change_pct": 0.17}, {"name": "旅游", "change_pct": -1.04}, {"name": "园林", "change_pct": -0.82}, {"name": "海绵城市", "change_pct": -1.2}, {"name": "固废处理", "change_pct": -0.62}, {"name": "光伏", "change_pct": -1.23}, {"name": "风电", "change_pct": -0.49}, {"name": "雄安新区", "change_pct": -0.8}, {"name": "北京城市规划", "change_pct": 0.22}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -0.72}, {"name": "储能", "change_pct": -0.47}, {"name": "碳中和", "change_pct": -0.43}, {"name": "乡村振兴", "change_pct": -0.55}, {"name": "汽车拆解", "change_pct": -0.42}, {"name": "土壤修复", "change_pct": -0.44}, {"name": "核污染防治", "change_pct": -0.15}, {"name": "东数西算/算力", "change_pct": 2.29}, {"name": "新型城镇化", "change_pct": -0.38}, {"name": "低价股", "change_pct": -0.12}, {"name": "西部大开发", "change_pct": -0.87}]}, {"code": "002861", "name": "瀛通通讯", "hot_rank": 73, "hot_rank_chg": 35, "stock_cnt": 5786, "price": "14.11", "change": "-5.68", "market_id": "33", "circulate_market_value": "2003679300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 74, "hot_rank_chg": 92, "stock_cnt": 5786, "price": "24.44", "change": "-0.41", "market_id": "17", "circulate_market_value": "9424974300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 75, "hot_rank_chg": 40, "stock_cnt": 5786, "price": "17.50", "change": "5.17", "market_id": "33", "circulate_market_value": "10411312900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 76, "hot_rank_chg": 7, "stock_cnt": 5786, "price": "52.91", "change": "2.80", "market_id": "33", "circulate_market_value": "38365014000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 77, "hot_rank_chg": -56, "stock_cnt": 5786, "price": "11.94", "change": "-0.42", "market_id": "33", "circulate_market_value": "41526488000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.81}, {"name": "人工智能", "change_pct": -0.53}, {"name": "VR&AR", "change_pct": -0.78}, {"name": "直播/短视频", "change_pct": -1.85}, {"name": "大数据", "change_pct": 0.42}, {"name": "教育", "change_pct": -0.31}, {"name": "百度概念股", "change_pct": -0.63}, {"name": "阿里巴巴概念股", "change_pct": 0.11}, {"name": "腾讯概念股", "change_pct": 0.51}, {"name": "传媒", "change_pct": -2.07}, {"name": "快手概念股", "change_pct": -0.96}, {"name": "NFT", "change_pct": -0.94}, {"name": "元宇宙", "change_pct": -0.8}, {"name": "虚拟数字人", "change_pct": -0.69}, {"name": "web3.0", "change_pct": -0.36}, {"name": "AIGC概念", "change_pct": -0.46}, {"name": "字节跳动概念股", "change_pct": -0.71}, {"name": "职业教育", "change_pct": -0.27}, {"name": "云游戏", "change_pct": -1.46}, {"name": "网红/MCN", "change_pct": -1.54}, {"name": "5G消息/RCS", "change_pct": 1.26}, {"name": "AI营销", "change_pct": -0.83}, {"name": "词元概念/Token", "change_pct": 2.55}, {"name": "华为产业链", "change_pct": -0.08}, {"name": "AI大模型/智能体", "change_pct": -0.22}, {"name": "短剧/互动影游", "change_pct": -2.79}, {"name": "AI视频", "change_pct": -0.82}, {"name": "智谱AI", "change_pct": 1.43}, {"name": "小红书概念股", "change_pct": -0.83}, {"name": "区块链", "change_pct": 0.16}]}, {"code": "301313", "name": "凡拓数创", "hot_rank": 78, "hot_rank_chg": 16, "stock_cnt": 5786, "price": "53.51", "change": "-0.56", "market_id": "33", "circulate_market_value": "4209846500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 79, "hot_rank_chg": 144, "stock_cnt": 5786, "price": "55.33", "change": "8.10", "market_id": "17", "circulate_market_value": "54398211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000062", "name": "深圳华强", "hot_rank": 80, "hot_rank_chg": -7, "stock_cnt": 5786, "price": "22.30", "change": "0.09", "market_id": "33", "circulate_market_value": "23298190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 81, "hot_rank_chg": -38, "stock_cnt": 5786, "price": "44.00", "change": "0.20", "market_id": "33", "circulate_market_value": "66798247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 82, "hot_rank_chg": -43, "stock_cnt": 5786, "price": "52.84", "change": "1.66", "market_id": "17", "circulate_market_value": "94552666000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603626", "name": "科森科技", "hot_rank": 83, "hot_rank_chg": 242, "stock_cnt": 5786, "price": "26.60", "change": "0.15", "market_id": "17", "circulate_market_value": "14759800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002181", "name": "粤传媒", "hot_rank": 84, "hot_rank_chg": 102, "stock_cnt": 5786, "price": "9.61", "change": "-0.72", "market_id": "33", "circulate_market_value": "10891556200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.97}, {"name": "足球", "change_pct": -1.38}, {"name": "粤港澳大湾区", "change_pct": 0.02}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.13}, {"name": "传媒", "change_pct": -2.07}, {"name": "AIGC概念", "change_pct": -0.46}, {"name": "字节跳动概念股", "change_pct": -0.71}, {"name": "国企改革", "change_pct": -0.69}, {"name": "网红/MCN", "change_pct": -1.54}, {"name": "短剧/互动影游", "change_pct": -2.79}, {"name": "AI视频", "change_pct": -0.82}]}, {"code": "002905", "name": "金逸影视", "hot_rank": 85, "hot_rank_chg": -50, "stock_cnt": 5786, "price": "9.23", "change": "-9.95", "market_id": "33", "circulate_market_value": "3225331200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.9}, {"name": "影视", "change_pct": -4.72}]}, {"code": "000707", "name": "双环科技", "hot_rank": 86, "hot_rank_chg": 262, "stock_cnt": 5786, "price": "5.05", "change": "10.02", "market_id": "33", "circulate_market_value": "2781053100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "氯化铵涨价", "xgb_concepts": [{"name": "定增破发", "change_pct": -0.16}, {"name": "纯碱", "change_pct": 0.18}, {"name": "烧碱", "change_pct": -0.29}, {"name": "钠电池", "change_pct": -0.92}, {"name": "国企改革", "change_pct": -0.69}, {"name": "湖北国企改革", "change_pct": -0.16}]}, {"code": "603030", "name": "全筑股份", "hot_rank": 87, "hot_rank_chg": 383, "stock_cnt": 5786, "price": "2.13", "change": "9.79", "market_id": "17", "circulate_market_value": "2805068400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "边缘AI算力", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.81}, {"name": "长三角一体化", "change_pct": 0.1}, {"name": "装修装饰", "change_pct": -1.23}, {"name": "装配式建筑", "change_pct": -0.82}, {"name": "建筑节能", "change_pct": -0.54}, {"name": "新型城镇化", "change_pct": -0.38}, {"name": "低价股", "change_pct": -0.12}, {"name": "光刻机（胶）", "change_pct": -0.61}, {"name": "旧改", "change_pct": -0.42}]}, {"code": "002185", "name": "华天科技", "hot_rank": 88, "hot_rank_chg": -30, "stock_cnt": 5786, "price": "14.24", "change": "0.64", "market_id": "33", "circulate_market_value": "47386867000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 89, "hot_rank_chg": -55, "stock_cnt": 5786, "price": "239.76", "change": "0.50", "market_id": "33", "circulate_market_value": "1021227310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 90, "hot_rank_chg": -25, "stock_cnt": 5786, "price": "17.15", "change": "-4.78", "market_id": "17", "circulate_market_value": "3621448600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 91, "hot_rank_chg": -21, "stock_cnt": 5786, "price": "12.91", "change": "-8.83", "market_id": "33", "circulate_market_value": "3649140600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.78}, {"name": "优化生育（三孩）", "change_pct": -1.26}, {"name": "食品", "change_pct": -1.24}, {"name": "大农业", "change_pct": -1.12}, {"name": "饮料", "change_pct": -1.41}]}, {"code": "600641", "name": "先导基电", "hot_rank": 92, "hot_rank_chg": 4, "stock_cnt": 5786, "price": "30.33", "change": "-1.33", "market_id": "17", "circulate_market_value": "28226005000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 93, "hot_rank_chg": -19, "stock_cnt": 5786, "price": "4.31", "change": "0.94", "market_id": "33", "circulate_market_value": "11432493000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.9}, {"name": "装修装饰", "change_pct": -1.23}, {"name": "装配式建筑", "change_pct": -0.82}, {"name": "破净股", "change_pct": -0.47}, {"name": "航天", "change_pct": -1.22}, {"name": "旧改", "change_pct": -0.42}]}, {"code": "002565", "name": "顺灏股份", "hot_rank": 94, "hot_rank_chg": 20, "stock_cnt": 5786, "price": "8.57", "change": "-3.49", "market_id": "33", "circulate_market_value": "9083815800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.84}, {"name": "电子烟", "change_pct": -1.03}, {"name": "一带一路", "change_pct": -0.41}, {"name": "造纸", "change_pct": -0.93}, {"name": "强势人气股", "change_pct": -2.9}, {"name": "包装印刷", "change_pct": -0.7}, {"name": "卫星互联网", "change_pct": -0.54}, {"name": "太空算力", "change_pct": -0.77}]}, {"code": "002112", "name": "三变科技", "hot_rank": 95, "hot_rank_chg": 984, "stock_cnt": 5786, "price": "12.05", "change": "0.42", "market_id": "33", "circulate_market_value": "3158064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 0.31}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "浙江国企改革", "change_pct": -1.14}, {"name": "光伏", "change_pct": -1.23}, {"name": "风电", "change_pct": -0.49}, {"name": "储能", "change_pct": -0.47}, {"name": "国企改革", "change_pct": -0.62}, {"name": "智能电网", "change_pct": -0.1}]}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 96, "hot_rank_chg": -52, "stock_cnt": 5786, "price": "29.22", "change": "-4.79", "market_id": "33", "circulate_market_value": "7123387200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 97, "hot_rank_chg": -4, "stock_cnt": 5786, "price": "15.01", "change": "-1.31", "market_id": "33", "circulate_market_value": "3771781200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002520", "name": "日发精机", "hot_rank": 98, "hot_rank_chg": 26, "stock_cnt": 5786, "price": "6.67", "change": "-5.12", "market_id": "33", "circulate_market_value": "4704505600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "通用航空", "change_pct": -2.05}, {"name": "强势人气股", "change_pct": -2.81}, {"name": "工业自动化", "change_pct": -0.69}, {"name": "大飞机", "change_pct": -1.65}, {"name": "军民融合", "change_pct": -0.64}, {"name": "风电", "change_pct": -0.43}, {"name": "军工", "change_pct": -0.89}, {"name": "机器人", "change_pct": -1.1}, {"name": "智能制造", "change_pct": -0.44}, {"name": "工业母机", "change_pct": -0.66}, {"name": "减速器", "change_pct": -1.99}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 99, "hot_rank_chg": -27, "stock_cnt": 5786, "price": "6.08", "change": "-2.72", "market_id": "33", "circulate_market_value": "11643762100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -1.17}, {"name": "林业", "change_pct": -1.31}, {"name": "碳中和", "change_pct": -0.41}, {"name": "自贸区", "change_pct": -0.68}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 100, "hot_rank_chg": -25, "stock_cnt": 5786, "price": "4.99", "change": "-3.49", "market_id": "33", "circulate_market_value": "3810400800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.27}, {"name": "优化生育（三孩）", "change_pct": -1.22}, {"name": "强势人气股", "change_pct": -2.81}, {"name": "医药商业", "change_pct": -1.61}, {"name": "保健品", "change_pct": -0.63}, {"name": "民营医院", "change_pct": -1.34}, {"name": "医药", "change_pct": -1.45}, {"name": "食品", "change_pct": -1.2}, {"name": "辅助生殖", "change_pct": -1.2}, {"name": "口腔", "change_pct": -1.08}, {"name": "医美", "change_pct": -1.03}, {"name": "新冠病毒防治", "change_pct": -0.63}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》"};