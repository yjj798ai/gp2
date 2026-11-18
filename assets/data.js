const UPDATE_TIME = "2026-11-18 22:30";
const THS_HOT = [
  {
    "name": "算力租赁",
    "rise": 2.65,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "东数西算(算力)",
    "rise": 1.28,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885957"
  },
  {
    "name": "网络安全",
    "rise": 0.43,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885459"
  },
  {
    "name": "华为昇腾",
    "rise": 1.32,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886058"
  },
  {
    "name": "芯片概念",
    "rise": -0.26,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续43天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.25,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续333天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 0.61,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "华为概念",
    "rise": -0.24,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "885806"
  },
  {
    "name": "人形机器人",
    "rise": -1.27,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": -1.12,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续262天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "存储芯片",
    "rise": 0.73,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续286天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 0.44,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续156天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "黄金概念",
    "rise": -1.89,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "创新药",
    "rise": -1.72,
    "rate": 0,
    "tag": "",
    "hotTag": "连续163天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "机器人概念",
    "rise": -1.17,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "6G概念",
    "rise": 0.8,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "通信ETF",
    "code": "886037"
  },
  {
    "name": "光刻胶",
    "rise": -0.76,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "AI应用",
    "rise": -0.77,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续91天上榜",
    "rankChg": 1,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "英伟达概念",
    "rise": 1.52,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "创业板算力ETF",
    "code": "886048"
  },
  {
    "name": "猪肉",
    "rise": -1.41,
    "rate": 0,
    "tag": "",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  }
];
const THS_EVENTS = [
  {
    "title": "数字广东建设“十五五”规划：深化粤港澳人工智能领域合作 推进粤港澳大湾区共建数字产业集群",
    "desc": "",
    "heat": 502336,
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
    "heat": 319502,
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
    "heat": 191856,
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
    "heat": 59849,
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
        "name": "协创数据",
        "code": "300857",
        "chg": 18.021829
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
        "chg": 14.639037
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "超节点",
    "change": "+4.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+2.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "算力一体机",
    "change": "+2.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+2.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "东数西算/算力",
    "change": "+2.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+2.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+2.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "交换机",
    "change": "+2.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+1.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "服务器",
    "change": "+1.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+1.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+1.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+1.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+1.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+1.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+1.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+1.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+1.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+1.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+1.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 3,
    "hot_rank_chg": 8,
    "stock_cnt": 5803,
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
        "change_pct": -0.58
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "工业自动化",
        "change_pct": -1.04
      },
      {
        "name": "机械",
        "change_pct": -0.48
      },
      {
        "name": "智能制造",
        "change_pct": -0.81
      },
      {
        "name": "国产芯片",
        "change_pct": -0.01
      },
      {
        "name": "信创",
        "change_pct": 0.66
      },
      {
        "name": "AI算力芯片",
        "change_pct": 0.21
      }
    ]
  },
  {
    "code": "000158",
    "name": "常山北明",
    "hot_rank": 4,
    "hot_rank_chg": 25,
    "stock_cnt": 5803,
    "price": "12.43",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "19771701000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "华为昇腾",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.52
      },
      {
        "name": "国产软件",
        "change_pct": 0.03
      },
      {
        "name": "金融科技",
        "change_pct": 0.02
      },
      {
        "name": "人工智能",
        "change_pct": -0.87
      },
      {
        "name": "网络安全",
        "change_pct": 0.39
      },
      {
        "name": "充电桩",
        "change_pct": -0.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "京津冀",
        "change_pct": -0.03
      },
      {
        "name": "冷链",
        "change_pct": 0.03
      },
      {
        "name": "大数据",
        "change_pct": 0.06
      },
      {
        "name": "智慧城市",
        "change_pct": -0.27
      },
      {
        "name": "雄安新区",
        "change_pct": -1.16
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.09
      },
      {
        "name": "智能制造",
        "change_pct": -0.81
      },
      {
        "name": "工业互联网",
        "change_pct": -0.04
      },
      {
        "name": "数字经济",
        "change_pct": -0.25
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.14
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.32
      },
      {
        "name": "信创",
        "change_pct": 0.66
      },
      {
        "name": "NFT",
        "change_pct": -1.35
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.7
      },
      {
        "name": "国资云",
        "change_pct": 0.72
      },
      {
        "name": "数字乡村",
        "change_pct": -0.51
      },
      {
        "name": "智慧政务",
        "change_pct": 0.5
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.18
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.16
      },
      {
        "name": "华为HMS",
        "change_pct": -0.91
      },
      {
        "name": "华为产业链",
        "change_pct": -0.32
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.54
      },
      {
        "name": "智谱AI",
        "change_pct": 1.26
      },
      {
        "name": "区块链",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 5,
    "hot_rank_chg": 25,
    "stock_cnt": 5803,
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
        "change_pct": -0.92
      },
      {
        "name": "国产软件",
        "change_pct": 0.03
      },
      {
        "name": "锂电池",
        "change_pct": -1.23
      },
      {
        "name": "人工智能",
        "change_pct": -0.87
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "养老产业",
        "change_pct": -0.59
      },
      {
        "name": "大飞机",
        "change_pct": -2.02
      },
      {
        "name": "军民融合",
        "change_pct": -0.96
      },
      {
        "name": "物联网",
        "change_pct": -0.31
      },
      {
        "name": "大数据",
        "change_pct": 0.06
      },
      {
        "name": "智慧城市",
        "change_pct": -0.27
      },
      {
        "name": "军工",
        "change_pct": -1.23
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.09
      },
      {
        "name": "机器人",
        "change_pct": -1.48
      },
      {
        "name": "黑色家电",
        "change_pct": -0.95
      },
      {
        "name": "家电",
        "change_pct": -0.6
      },
      {
        "name": "储能",
        "change_pct": -0.68
      },
      {
        "name": "智能制造",
        "change_pct": -0.81
      },
      {
        "name": "工业互联网",
        "change_pct": -0.04
      },
      {
        "name": "数字经济",
        "change_pct": -0.25
      },
      {
        "name": "百度概念股",
        "change_pct": -0.97
      },
      {
        "name": "NFT",
        "change_pct": -1.35
      },
      {
        "name": "跨境支付",
        "change_pct": -0.07
      },
      {
        "name": "华为海思",
        "change_pct": 0.48
      },
      {
        "name": "云游戏",
        "change_pct": -1.26
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.9
      },
      {
        "name": "华为产业链",
        "change_pct": -0.32
      },
      {
        "name": "毫米波雷达",
        "change_pct": -0.08
      },
      {
        "name": "服务器",
        "change_pct": 1.83
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.54
      },
      {
        "name": "星闪概念",
        "change_pct": -1.17
      },
      {
        "name": "低空经济",
        "change_pct": -1.32
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 6,
    "hot_rank_chg": 2,
    "stock_cnt": 5803,
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
        "change_pct": -0.52
      },
      {
        "name": "手游",
        "change_pct": -2.47
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "游戏",
        "change_pct": -3.23
      },
      {
        "name": "物联网",
        "change_pct": -0.31
      },
      {
        "name": "机器人",
        "change_pct": -1.48
      },
      {
        "name": "无人机",
        "change_pct": -1.33
      },
      {
        "name": "国产芯片",
        "change_pct": -0.01
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.14
      },
      {
        "name": "低空经济",
        "change_pct": -1.32
      },
      {
        "name": "无人物流车",
        "change_pct": -1.91
      }
    ]
  },
  {
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 9,
    "hot_rank_chg": 81,
    "stock_cnt": 5803,
    "price": "8.09",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "3253075600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.04
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "纺织服装",
        "change_pct": -1.54
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.91
      },
      {
        "name": "外贸受益概念",
        "change_pct": -1.43
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.36
      },
      {
        "name": "国企改革",
        "change_pct": -0.89
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.88
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 10,
    "hot_rank_chg": -6,
    "stock_cnt": 5803,
    "price": "12.41",
    "change": "4.73",
    "market_id": "33",
    "circulate_market_value": "7447448600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.25
      },
      {
        "name": "边缘计算",
        "change_pct": 0.47
      },
      {
        "name": "核电",
        "change_pct": -0.81
      },
      {
        "name": "海工装备",
        "change_pct": -0.43
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "冷链",
        "change_pct": 0.03
      },
      {
        "name": "地热",
        "change_pct": 0.57
      },
      {
        "name": "储能",
        "change_pct": -0.68
      },
      {
        "name": "碳中和",
        "change_pct": -0.57
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.33
      },
      {
        "name": "汽车热管理",
        "change_pct": -1.45
      },
      {
        "name": "热泵",
        "change_pct": -0.26
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.16
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.11
      },
      {
        "name": "海洋经济",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 11,
    "hot_rank_chg": 25,
    "stock_cnt": 5803,
    "price": "8.98",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "16066462000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.57
      },
      {
        "name": "纯碱",
        "change_pct": 0.09
      },
      {
        "name": "食品",
        "change_pct": -1.46
      },
      {
        "name": "土壤修复",
        "change_pct": -0.79
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.36
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 2.65
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.92
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 17,
    "hot_rank_chg": -7,
    "stock_cnt": 5803,
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
        "change_pct": -2.47
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "游戏",
        "change_pct": -3.23
      },
      {
        "name": "影视",
        "change_pct": -4.88
      },
      {
        "name": "国企改革",
        "change_pct": -0.89
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.11
      },
      {
        "name": "AI视频",
        "change_pct": -1.21
      }
    ]
  },
  {
    "code": "300324",
    "name": "旋极信息",
    "hot_rank": 18,
    "hot_rank_chg": 22,
    "stock_cnt": 5803,
    "price": "4.44",
    "change": "20.00",
    "market_id": "33",
    "circulate_market_value": "7592326100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI芯片",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.02
      },
      {
        "name": "数字孪生",
        "change_pct": -0.36
      },
      {
        "name": "半导体",
        "change_pct": -0.0
      },
      {
        "name": "国产软件",
        "change_pct": 0.03
      },
      {
        "name": "人工智能",
        "change_pct": -0.87
      },
      {
        "name": "网络安全",
        "change_pct": 0.39
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "大飞机",
        "change_pct": -2.02
      },
      {
        "name": "北斗导航",
        "change_pct": -0.92
      },
      {
        "name": "军民融合",
        "change_pct": -0.96
      },
      {
        "name": "京津冀",
        "change_pct": -0.03
      },
      {
        "name": "物联网",
        "change_pct": -0.31
      },
      {
        "name": "大数据",
        "change_pct": 0.06
      },
      {
        "name": "智慧城市",
        "change_pct": -0.27
      },
      {
        "name": "电子发票",
        "change_pct": 0.97
      },
      {
        "name": "军工",
        "change_pct": -1.23
      },
      {
        "name": "无人机",
        "change_pct": -1.33
      },
      {
        "name": "智能制造",
        "change_pct": -0.81
      },
      {
        "name": "工业互联网",
        "change_pct": -0.04
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.25
      },
      {
        "name": "国产芯片",
        "change_pct": -0.01
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.32
      },
      {
        "name": "信创",
        "change_pct": 0.66
      },
      {
        "name": "BIPV概念",
        "change_pct": -1.02
      },
      {
        "name": "航天",
        "change_pct": -1.51
      },
      {
        "name": "数字人民币",
        "change_pct": -0.26
      },
      {
        "name": "智慧政务",
        "change_pct": 0.5
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.01
      },
      {
        "name": "云游戏",
        "change_pct": -1.26
      },
      {
        "name": "华为产业链",
        "change_pct": -0.32
      },
      {
        "name": "物理AI",
        "change_pct": -0.86
      },
      {
        "name": "时空大数据",
        "change_pct": 0.23
      },
      {
        "name": "AI算力芯片",
        "change_pct": 0.21
      },
      {
        "name": "军工信息化",
        "change_pct": -0.78
      },
      {
        "name": "财税改革",
        "change_pct": 0.59
      },
      {
        "name": "区块链",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 19,
    "hot_rank_chg": -12,
    "stock_cnt": 5803,
    "price": "5.08",
    "change": "7.17",
    "market_id": "17",
    "circulate_market_value": "6631787200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "高速公路",
        "change_pct": 0.53
      },
      {
        "name": "振兴东北",
        "change_pct": -0.96
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "000889",
    "name": "中嘉博创",
    "hot_rank": 24,
    "hot_rank_chg": 160,
    "stock_cnt": 5803,
    "price": "3.38",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "2939922100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力销售",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 0.02
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.14
      },
      {
        "name": "华为产业链",
        "change_pct": -0.32
      },
      {
        "name": "Kimi概念",
        "change_pct": 0.03
      },
      {
        "name": "智谱AI",
        "change_pct": 1.26
      },
      {
        "name": "区块链",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "002042",
    "name": "华孚时尚",
    "hot_rank": 25,
    "hot_rank_chg": 115,
    "stock_cnt": 5803,
    "price": "3.96",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "6734698200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -0.8
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "纺织服装",
        "change_pct": -1.54
      },
      {
        "name": "棉花",
        "change_pct": -0.19
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.01
      },
      {
        "name": "大农业",
        "change_pct": -1.44
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.36
      },
      {
        "name": "供销社",
        "change_pct": 0.05
      },
      {
        "name": "职业教育",
        "change_pct": -0.55
      },
      {
        "name": "C2M",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 28,
    "hot_rank_chg": -15,
    "stock_cnt": 5803,
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
        "change_pct": -1.2
      },
      {
        "name": "体外诊断",
        "change_pct": -1.59
      },
      {
        "name": "医疗器械",
        "change_pct": -1.98
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "基因测序",
        "change_pct": -1.6
      },
      {
        "name": "预制菜",
        "change_pct": -1.6
      },
      {
        "name": "水产养殖",
        "change_pct": -3.16
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.88
      },
      {
        "name": "海洋经济",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "002194",
    "name": "武汉凡谷",
    "hot_rank": 34,
    "hot_rank_chg": 50,
    "stock_cnt": 5803,
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
        "change_pct": -0.49
      },
      {
        "name": "5G",
        "change_pct": 1.36
      },
      {
        "name": "光通信",
        "change_pct": 1.6
      },
      {
        "name": "教育",
        "change_pct": -0.35
      },
      {
        "name": "毫米波通信",
        "change_pct": 0.8
      },
      {
        "name": "6G",
        "change_pct": 0.84
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.9
      },
      {
        "name": "华为产业链",
        "change_pct": -0.32
      },
      {
        "name": "毫米波雷达",
        "change_pct": -0.08
      },
      {
        "name": "5.5G概念",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 35,
    "hot_rank_chg": -7,
    "stock_cnt": 5803,
    "price": "11.00",
    "change": "3.58",
    "market_id": "17",
    "circulate_market_value": "11493766400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.62
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
        "change_pct": -2.47
      },
      {
        "name": "国企改革",
        "change_pct": -0.89
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 38,
    "hot_rank_chg": -24,
    "stock_cnt": 5803,
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
        "change_pct": -2.57
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.18
      },
      {
        "name": "物联网",
        "change_pct": -0.31
      },
      {
        "name": "LED",
        "change_pct": -0.8
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.9
      }
    ]
  },
  {
    "code": "002197",
    "name": "证通电子",
    "hot_rank": 39,
    "hot_rank_chg": 203,
    "stock_cnt": 5803,
    "price": "6.11",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "3262740100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 0.03
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.39
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.57
      },
      {
        "name": "金融科技",
        "change_pct": 0.02
      },
      {
        "name": "网络安全",
        "change_pct": 0.39
      },
      {
        "name": "充电桩",
        "change_pct": -0.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "移动支付",
        "change_pct": -0.28
      },
      {
        "name": "教育",
        "change_pct": -0.35
      },
      {
        "name": "智慧城市",
        "change_pct": -0.27
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.01
      },
      {
        "name": "LED",
        "change_pct": -0.8
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.09
      },
      {
        "name": "机器人",
        "change_pct": -1.48
      },
      {
        "name": "数字经济",
        "change_pct": -0.25
      },
      {
        "name": "国产芯片",
        "change_pct": -0.01
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.14
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.32
      },
      {
        "name": "信创",
        "change_pct": 0.66
      },
      {
        "name": "NFT",
        "change_pct": -1.35
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.36
      },
      {
        "name": "数字乡村",
        "change_pct": -0.51
      },
      {
        "name": "教育信息化",
        "change_pct": -0.14
      },
      {
        "name": "数字人民币",
        "change_pct": -0.26
      },
      {
        "name": "智慧政务",
        "change_pct": 0.5
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.01
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.18
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.16
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.36
      },
      {
        "name": "华为产业链",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 42,
    "hot_rank_chg": -11,
    "stock_cnt": 5803,
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
        "change_pct": -2.57
      },
      {
        "name": "充电桩",
        "change_pct": -0.49
      },
      {
        "name": "光伏",
        "change_pct": -1.55
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.09
      },
      {
        "name": "家电",
        "change_pct": -0.6
      },
      {
        "name": "储能",
        "change_pct": -0.68
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -0.26
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.18
      },
      {
        "name": "厨卫家电",
        "change_pct": -0.31
      },
      {
        "name": "华为产业链",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "000707",
    "name": "双环科技",
    "hot_rank": 45,
    "hot_rank_chg": 71,
    "stock_cnt": 5803,
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
        "change_pct": -0.31
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "纯碱",
        "change_pct": 0.09
      },
      {
        "name": "烧碱",
        "change_pct": -0.56
      },
      {
        "name": "钠电池",
        "change_pct": -1.17
      },
      {
        "name": "国企改革",
        "change_pct": -0.89
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "603030",
    "name": "全筑股份",
    "hot_rank": 46,
    "hot_rank_chg": 123,
    "stock_cnt": 5803,
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
        "change_pct": -1.04
      },
      {
        "name": "长三角一体化",
        "change_pct": 0.19
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "装修装饰",
        "change_pct": -1.45
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.09
      },
      {
        "name": "建筑节能",
        "change_pct": -0.79
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.69
      },
      {
        "name": "低价股",
        "change_pct": -0.47
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.95
      },
      {
        "name": "旧改",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 47,
    "hot_rank_chg": -28,
    "stock_cnt": 5803,
    "price": "10.65",
    "change": "-1.39",
    "market_id": "33",
    "circulate_market_value": "7294210600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.02
      },
      {
        "name": "核电",
        "change_pct": -0.81
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "充电桩",
        "change_pct": -0.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.09
      },
      {
        "name": "储能",
        "change_pct": -0.68
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.14
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 0.36
      },
      {
        "name": "智能电网",
        "change_pct": -0.47
      },
      {
        "name": "核聚变",
        "change_pct": -0.4
      }
    ]
  },
  {
    "code": "000410",
    "name": "沈阳机床",
    "hot_rank": 50,
    "hot_rank_chg": 99,
    "stock_cnt": 5803,
    "price": "5.71",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "11254514700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "工业母机",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.79
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "工业自动化",
        "change_pct": -1.04
      },
      {
        "name": "智能制造",
        "change_pct": -0.81
      },
      {
        "name": "工业互联网",
        "change_pct": -0.04
      },
      {
        "name": "振兴东北",
        "change_pct": -0.96
      },
      {
        "name": "工业母机",
        "change_pct": -1.03
      },
      {
        "name": "国企改革",
        "change_pct": -0.89
      }
    ]
  },
  {
    "code": "000521",
    "name": "长虹美菱",
    "hot_rank": 51,
    "hot_rank_chg": -25,
    "stock_cnt": 5803,
    "price": "4.71",
    "change": "-0.63",
    "market_id": "33",
    "circulate_market_value": "4122610500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -1.98
      },
      {
        "name": "一带一路",
        "change_pct": -0.58
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "人工智能",
        "change_pct": -0.87
      },
      {
        "name": "冷链",
        "change_pct": 0.03
      },
      {
        "name": "小家电",
        "change_pct": -0.4
      },
      {
        "name": "白色家电",
        "change_pct": -0.22
      },
      {
        "name": "家电",
        "change_pct": -0.6
      },
      {
        "name": "破净股",
        "change_pct": -0.66
      },
      {
        "name": "智能制造",
        "change_pct": -0.81
      },
      {
        "name": "工业互联网",
        "change_pct": -0.04
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -0.26
      },
      {
        "name": "垃圾分类",
        "change_pct": -0.62
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.88
      },
      {
        "name": "C2M",
        "change_pct": -0.72
      },
      {
        "name": "生物安全",
        "change_pct": -1.52
      },
      {
        "name": "出海龙头",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 52,
    "hot_rank_chg": -32,
    "stock_cnt": 5803,
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
        "change_pct": -2.47
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.57
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "人工智能",
        "change_pct": -0.87
      },
      {
        "name": "VR&AR",
        "change_pct": -1.06
      },
      {
        "name": "游戏",
        "change_pct": -3.23
      },
      {
        "name": "动漫",
        "change_pct": -3.89
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.32
      },
      {
        "name": "快手概念股",
        "change_pct": -1.43
      },
      {
        "name": "NFT",
        "change_pct": -1.35
      },
      {
        "name": "元宇宙",
        "change_pct": -1.11
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.14
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.01
      },
      {
        "name": "云游戏",
        "change_pct": -1.26
      },
      {
        "name": "华为产业链",
        "change_pct": -0.32
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.71
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 58,
    "hot_rank_chg": -8,
    "stock_cnt": 5803,
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
        "change_pct": -3.0
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.01
      },
      {
        "name": "物业管理",
        "change_pct": -0.15
      },
      {
        "name": "预制菜",
        "change_pct": -1.6
      },
      {
        "name": "地摊经济",
        "change_pct": -1.64
      }
    ]
  },
  {
    "code": "002229",
    "name": "鸿博股份",
    "hot_rank": 59,
    "hot_rank_chg": 24,
    "stock_cnt": 5803,
    "price": "10.78",
    "change": "5.48",
    "market_id": "33",
    "circulate_market_value": "5316311200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.25
      },
      {
        "name": "彩票",
        "change_pct": -2.12
      },
      {
        "name": "人工智能",
        "change_pct": -0.87
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "包装印刷",
        "change_pct": -1.02
      },
      {
        "name": "数字经济",
        "change_pct": -0.25
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.36
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.73
      },
      {
        "name": "ETC",
        "change_pct": -0.7
      },
      {
        "name": "词元概念/Token",
        "change_pct": 2.77
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.04
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.54
      },
      {
        "name": "英伟达概念",
        "change_pct": 1.43
      },
      {
        "name": "区块链",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "002272",
    "name": "川润股份",
    "hot_rank": 63,
    "hot_rank_chg": 113,
    "stock_cnt": 5803,
    "price": "12.58",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "5270149100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "液冷",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.52
      },
      {
        "name": "核电",
        "change_pct": -0.81
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "机械",
        "change_pct": -0.48
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.18
      },
      {
        "name": "风电",
        "change_pct": -0.72
      },
      {
        "name": "机器人",
        "change_pct": -1.48
      },
      {
        "name": "储能",
        "change_pct": -0.68
      },
      {
        "name": "超超临界发电",
        "change_pct": 0.2
      },
      {
        "name": "光热发电",
        "change_pct": -0.58
      },
      {
        "name": "特高压",
        "change_pct": -0.68
      },
      {
        "name": "超节点",
        "change_pct": 4.18
      },
      {
        "name": "智能电网",
        "change_pct": -0.47
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.16
      },
      {
        "name": "钍基熔盐堆",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 65,
    "hot_rank_chg": -4,
    "stock_cnt": 5803,
    "price": "3.97",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "3418815400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.75
      },
      {
        "name": "一带一路",
        "change_pct": -0.58
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.67
      },
      {
        "name": "光伏",
        "change_pct": -1.55
      },
      {
        "name": "有色金属",
        "change_pct": -1.4
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.09
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.6
      },
      {
        "name": "自贸区",
        "change_pct": -0.99
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "600630",
    "name": "龙头股份",
    "hot_rank": 66,
    "hot_rank_chg": 590,
    "stock_cnt": 5803,
    "price": "6.58",
    "change": "-3.23",
    "market_id": "17",
    "circulate_market_value": "2795589300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.04
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.66
      },
      {
        "name": "一带一路",
        "change_pct": -0.58
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.58
      },
      {
        "name": "纺织服装",
        "change_pct": -1.54
      },
      {
        "name": "上海自由贸易港",
        "change_pct": -0.66
      },
      {
        "name": "进口博览会",
        "change_pct": -1.61
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.45
      },
      {
        "name": "物业管理",
        "change_pct": -0.15
      },
      {
        "name": "国企改革",
        "change_pct": -0.89
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.88
      },
      {
        "name": "自贸区",
        "change_pct": -0.99
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 68,
    "hot_rank_chg": 10,
    "stock_cnt": 5803,
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
        "change_pct": -3.0
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.58
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "信托",
        "change_pct": -0.56
      },
      {
        "name": "民营医院",
        "change_pct": -1.73
      },
      {
        "name": "汽车销售",
        "change_pct": -1.78
      },
      {
        "name": "社区团购",
        "change_pct": -2.74
      },
      {
        "name": "大金融",
        "change_pct": -0.49
      },
      {
        "name": "餐饮",
        "change_pct": -1.71
      },
      {
        "name": "首发经济",
        "change_pct": -1.74
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 69,
    "hot_rank_chg": 12,
    "stock_cnt": 5803,
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
        "change_pct": -2.57
      },
      {
        "name": "石墨烯",
        "change_pct": -0.63
      },
      {
        "name": "军民融合",
        "change_pct": -0.96
      },
      {
        "name": "物联网",
        "change_pct": -0.31
      },
      {
        "name": "LED",
        "change_pct": -0.8
      },
      {
        "name": "军工",
        "change_pct": -1.23
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.36
      },
      {
        "name": "海洋经济",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "600405",
    "name": "动力源",
    "hot_rank": 73,
    "hot_rank_chg": 244,
    "stock_cnt": 5803,
    "price": "4.62",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "2831272700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI智算中心电源",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.02
      },
      {
        "name": "5G",
        "change_pct": 1.36
      },
      {
        "name": "充电桩",
        "change_pct": -0.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.18
      },
      {
        "name": "光伏",
        "change_pct": -1.55
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.09
      },
      {
        "name": "储能",
        "change_pct": -0.68
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -1.03
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.14
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.32
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.6
      },
      {
        "name": "换电概念",
        "change_pct": -0.59
      },
      {
        "name": "BIPV概念",
        "change_pct": -1.02
      },
      {
        "name": "华为产业链",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 74,
    "hot_rank_chg": 23,
    "stock_cnt": 5803,
    "price": "4.36",
    "change": "2.11",
    "market_id": "33",
    "circulate_market_value": "11565120500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "装修装饰",
        "change_pct": -1.45
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.09
      },
      {
        "name": "破净股",
        "change_pct": -0.66
      },
      {
        "name": "航天",
        "change_pct": -1.51
      },
      {
        "name": "旧改",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 75,
    "hot_rank_chg": 120,
    "stock_cnt": 5803,
    "price": "3.29",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "10753161400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力运维",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.18
      },
      {
        "name": "养老产业",
        "change_pct": -0.59
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.01
      },
      {
        "name": "民营医院",
        "change_pct": -1.73
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.36
      },
      {
        "name": "地摊经济",
        "change_pct": -1.64
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 79,
    "hot_rank_chg": -54,
    "stock_cnt": 5803,
    "price": "7.83",
    "change": "-1.01",
    "market_id": "33",
    "circulate_market_value": "3767321000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -1.59
      },
      {
        "name": "医疗器械",
        "change_pct": -1.98
      },
      {
        "name": "锂电池",
        "change_pct": -1.23
      },
      {
        "name": "基因测序",
        "change_pct": -1.6
      },
      {
        "name": "PCB板",
        "change_pct": 1.69
      },
      {
        "name": "医药",
        "change_pct": -1.61
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.09
      },
      {
        "name": "化学原料药",
        "change_pct": -1.81
      },
      {
        "name": "食品安全",
        "change_pct": -0.65
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.46
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.95
      },
      {
        "name": "异丙醇",
        "change_pct": -1.12
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.88
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -1.43
      }
    ]
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 80,
    "hot_rank_chg": 193,
    "stock_cnt": 5803,
    "price": "8.18",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "4924600700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.14
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.32
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.36
      },
      {
        "name": "华为产业链",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "002403",
    "name": "爱仕达",
    "hot_rank": 81,
    "hot_rank_chg": 141,
    "stock_cnt": 5803,
    "price": "11.36",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "3375754100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -1.41
      },
      {
        "name": "工业自动化",
        "change_pct": -1.04
      },
      {
        "name": "小家电",
        "change_pct": -0.4
      },
      {
        "name": "机器人",
        "change_pct": -1.48
      },
      {
        "name": "家电",
        "change_pct": -0.6
      },
      {
        "name": "智慧物流",
        "change_pct": -1.04
      },
      {
        "name": "机器视觉",
        "change_pct": -1.0
      },
      {
        "name": "智能制造",
        "change_pct": -0.81
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "减速器",
        "change_pct": -2.26
      },
      {
        "name": "C2M",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "600408",
    "name": "安泰集团",
    "hot_rank": 82,
    "hot_rank_chg": 20,
    "stock_cnt": 5803,
    "price": "3.71",
    "change": "6.30",
    "market_id": "17",
    "circulate_market_value": "3735228000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.13
      },
      {
        "name": "钢铁",
        "change_pct": 0.16
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "煤化工",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 86,
    "hot_rank_chg": -27,
    "stock_cnt": 5803,
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
        "change_pct": -2.71
      },
      {
        "name": "车联网/车路云",
        "change_pct": -0.52
      },
      {
        "name": "超高清视频",
        "change_pct": -0.92
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "人工智能",
        "change_pct": -0.87
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "影视",
        "change_pct": -4.88
      },
      {
        "name": "智慧城市",
        "change_pct": -0.27
      },
      {
        "name": "国产芯片",
        "change_pct": -0.01
      },
      {
        "name": "振兴东北",
        "change_pct": -0.96
      },
      {
        "name": "传媒",
        "change_pct": -2.47
      },
      {
        "name": "低价股",
        "change_pct": -0.47
      },
      {
        "name": "国企改革",
        "change_pct": -0.89
      },
      {
        "name": "在线教育",
        "change_pct": -0.26
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.01
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.54
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.11
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.71
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 89,
    "hot_rank_chg": 40,
    "stock_cnt": 5803,
    "price": "1.67",
    "change": "9.87",
    "market_id": "33",
    "circulate_market_value": "8420951400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "聘任会计师事务所",
    "xgb_concepts": [
      {
        "name": "新能源整车",
        "change_pct": 0.67
      },
      {
        "name": "汽车整车",
        "change_pct": 0.48
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.09
      },
      {
        "name": "低价股",
        "change_pct": -0.47
      }
    ]
  },
  {
    "code": "000711",
    "name": "京蓝科技",
    "hot_rank": 90,
    "hot_rank_chg": 234,
    "stock_cnt": 5803,
    "price": "3.48",
    "change": "10.13",
    "market_id": "33",
    "circulate_market_value": "8202411700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "7N高纯铟",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -0.57
      },
      {
        "name": "物联网",
        "change_pct": -0.31
      },
      {
        "name": "大数据",
        "change_pct": 0.06
      },
      {
        "name": "固废处理",
        "change_pct": -0.94
      },
      {
        "name": "智慧城市",
        "change_pct": -0.27
      },
      {
        "name": "有色 · 锌",
        "change_pct": -2.32
      },
      {
        "name": "有色金属",
        "change_pct": -1.4
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -1.04
      },
      {
        "name": "土壤修复",
        "change_pct": -0.79
      },
      {
        "name": "磷化铟",
        "change_pct": 1.62
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 92,
    "hot_rank_chg": -30,
    "stock_cnt": 5803,
    "price": "2.77",
    "change": "0.73",
    "market_id": "17",
    "circulate_market_value": "4046954200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.39
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "冷链",
        "change_pct": 0.03
      },
      {
        "name": "医药",
        "change_pct": -1.61
      },
      {
        "name": "食品",
        "change_pct": -1.46
      },
      {
        "name": "食品安全",
        "change_pct": -0.65
      },
      {
        "name": "预制菜",
        "change_pct": -1.6
      },
      {
        "name": "低价股",
        "change_pct": -0.47
      },
      {
        "name": "水产养殖",
        "change_pct": -3.16
      },
      {
        "name": "海洋经济",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 95,
    "hot_rank_chg": 25,
    "stock_cnt": 5803,
    "price": "5.76",
    "change": "5.30",
    "market_id": "33",
    "circulate_market_value": "6558660700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -0.57
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "高铁轨交",
        "change_pct": -1.05
      },
      {
        "name": "航母",
        "change_pct": -1.05
      },
      {
        "name": "光伏",
        "change_pct": -1.55
      },
      {
        "name": "风电",
        "change_pct": -0.72
      },
      {
        "name": "军工",
        "change_pct": -1.23
      },
      {
        "name": "储能",
        "change_pct": -0.68
      },
      {
        "name": "国企改革",
        "change_pct": -0.89
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.68
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600410", "name": "华胜天成", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5803, "price": "16.82", "change": "10.01", "market_id": "17", "circulate_market_value": "18443041000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "华为昇腾"}, {"code": "002242", "name": "九阳股份", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5803, "price": "28.37", "change": "-9.99", "market_id": "33", "circulate_market_value": "21611291000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002685", "name": "华东重机", "hot_rank": 3, "hot_rank_chg": 8, "stock_cnt": 5803, "price": "7.37", "change": "10.00", "market_id": "33", "circulate_market_value": "7425933300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "GPU芯片", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.58}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "工业自动化", "change_pct": -1.04}, {"name": "机械", "change_pct": -0.48}, {"name": "智能制造", "change_pct": -0.81}, {"name": "国产芯片", "change_pct": -0.01}, {"name": "信创", "change_pct": 0.66}, {"name": "AI算力芯片", "change_pct": 0.21}]}, {"code": "000158", "name": "常山北明", "hot_rank": 4, "hot_rank_chg": 25, "stock_cnt": 5803, "price": "12.43", "change": "10.00", "market_id": "33", "circulate_market_value": "19771701000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为昇腾", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.52}, {"name": "国产软件", "change_pct": 0.03}, {"name": "金融科技", "change_pct": 0.02}, {"name": "人工智能", "change_pct": -0.87}, {"name": "网络安全", "change_pct": 0.39}, {"name": "充电桩", "change_pct": -0.49}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "京津冀", "change_pct": -0.03}, {"name": "冷链", "change_pct": 0.03}, {"name": "大数据", "change_pct": 0.06}, {"name": "智慧城市", "change_pct": -0.27}, {"name": "雄安新区", "change_pct": -1.16}, {"name": "新能源汽车", "change_pct": -1.09}, {"name": "智能制造", "change_pct": -0.81}, {"name": "工业互联网", "change_pct": -0.04}, {"name": "数字经济", "change_pct": -0.25}, {"name": "阿里巴巴概念股", "change_pct": -0.14}, {"name": "腾讯概念股", "change_pct": 0.32}, {"name": "信创", "change_pct": 0.66}, {"name": "NFT", "change_pct": -1.35}, {"name": "华为昇腾", "change_pct": 0.7}, {"name": "国资云", "change_pct": 0.72}, {"name": "数字乡村", "change_pct": -0.51}, {"name": "智慧政务", "change_pct": 0.5}, {"name": "华为鸿蒙", "change_pct": -0.18}, {"name": "华为云·鲲鹏", "change_pct": 0.16}, {"name": "华为HMS", "change_pct": -0.91}, {"name": "华为产业链", "change_pct": -0.32}, {"name": "AI大模型/智能体", "change_pct": -0.54}, {"name": "智谱AI", "change_pct": 1.26}, {"name": "区块链", "change_pct": -0.23}]}, {"code": "600839", "name": "四川长虹", "hot_rank": 5, "hot_rank_chg": 25, "stock_cnt": 5803, "price": "5.68", "change": "10.08", "market_id": "17", "circulate_market_value": "26212965000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "家电", "xgb_concepts": [{"name": "超高清视频", "change_pct": -0.92}, {"name": "国产软件", "change_pct": 0.03}, {"name": "锂电池", "change_pct": -1.23}, {"name": "人工智能", "change_pct": -0.87}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "养老产业", "change_pct": -0.59}, {"name": "大飞机", "change_pct": -2.02}, {"name": "军民融合", "change_pct": -0.96}, {"name": "物联网", "change_pct": -0.31}, {"name": "大数据", "change_pct": 0.06}, {"name": "智慧城市", "change_pct": -0.27}, {"name": "军工", "change_pct": -1.23}, {"name": "新能源汽车", "change_pct": -1.09}, {"name": "机器人", "change_pct": -1.48}, {"name": "黑色家电", "change_pct": -0.95}, {"name": "家电", "change_pct": -0.6}, {"name": "储能", "change_pct": -0.68}, {"name": "智能制造", "change_pct": -0.81}, {"name": "工业互联网", "change_pct": -0.04}, {"name": "数字经济", "change_pct": -0.25}, {"name": "百度概念股", "change_pct": -0.97}, {"name": "NFT", "change_pct": -1.35}, {"name": "跨境支付", "change_pct": -0.07}, {"name": "华为海思", "change_pct": 0.48}, {"name": "云游戏", "change_pct": -1.26}, {"name": "网红/MCN", "change_pct": -1.9}, {"name": "华为产业链", "change_pct": -0.32}, {"name": "毫米波雷达", "change_pct": -0.08}, {"name": "服务器", "change_pct": 1.83}, {"name": "AI大模型/智能体", "change_pct": -0.54}, {"name": "星闪概念", "change_pct": -1.17}, {"name": "低空经济", "change_pct": -1.32}]}, {"code": "002148", "name": "北纬科技", "hot_rank": 6, "hot_rank_chg": 2, "stock_cnt": 5803, "price": "8.92", "change": "9.99", "market_id": "33", "circulate_market_value": "4023157400.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "四足机器人", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.52}, {"name": "手游", "change_pct": -2.47}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "游戏", "change_pct": -3.23}, {"name": "物联网", "change_pct": -0.31}, {"name": "机器人", "change_pct": -1.48}, {"name": "无人机", "change_pct": -1.33}, {"name": "国产芯片", "change_pct": -0.01}, {"name": "5G消息/RCS", "change_pct": 1.14}, {"name": "低空经济", "change_pct": -1.32}, {"name": "无人物流车", "change_pct": -1.91}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5803, "price": "396.30", "change": "0.84", "market_id": "33", "circulate_market_value": "439868030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002771", "name": "真视通", "hot_rank": 8, "hot_rank_chg": 46, "stock_cnt": 5803, "price": "13.07", "change": "10.02", "market_id": "33", "circulate_market_value": "2360342100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "液冷算力"}, {"code": "600156", "name": "华升股份", "hot_rank": 9, "hot_rank_chg": 81, "stock_cnt": 5803, "price": "8.09", "change": "10.07", "market_id": "17", "circulate_market_value": "3253075600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.04}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "纺织服装", "change_pct": -1.54}, {"name": "湖南国企改革", "change_pct": -0.91}, {"name": "外贸受益概念", "change_pct": -1.43}, {"name": "东数西算/算力", "change_pct": 2.36}, {"name": "国企改革", "change_pct": -0.89}, {"name": "新冠病毒防治", "change_pct": -0.88}, {"name": "液冷服务器", "change_pct": 0.16}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 10, "hot_rank_chg": -6, "stock_cnt": 5803, "price": "12.41", "change": "4.73", "market_id": "33", "circulate_market_value": "7447448600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.25}, {"name": "边缘计算", "change_pct": 0.47}, {"name": "核电", "change_pct": -0.81}, {"name": "海工装备", "change_pct": -0.43}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "冷链", "change_pct": 0.03}, {"name": "地热", "change_pct": 0.57}, {"name": "储能", "change_pct": -0.68}, {"name": "碳中和", "change_pct": -0.57}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -1.33}, {"name": "汽车热管理", "change_pct": -1.45}, {"name": "热泵", "change_pct": -0.26}, {"name": "液冷服务器", "change_pct": 0.16}, {"name": "蜜雪冰城概念股", "change_pct": -1.11}, {"name": "海洋经济", "change_pct": -1.12}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 11, "hot_rank_chg": 25, "stock_cnt": 5803, "price": "8.98", "change": "10.05", "market_id": "17", "circulate_market_value": "16066462000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "调味品", "change_pct": -0.57}, {"name": "纯碱", "change_pct": 0.09}, {"name": "食品", "change_pct": -1.46}, {"name": "土壤修复", "change_pct": -0.79}, {"name": "东数西算/算力", "change_pct": 2.36}, {"name": "OpenClaw概念", "change_pct": 2.65}, {"name": "DeepSeek概念股", "change_pct": 0.92}]}, {"code": "603629", "name": "利通电子", "hot_rank": 12, "hot_rank_chg": 15, "stock_cnt": 5803, "price": "60.93", "change": "10.00", "market_id": "17", "circulate_market_value": "21978877000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "000815", "name": "美利云", "hot_rank": 13, "hot_rank_chg": 32, "stock_cnt": 5803, "price": "14.31", "change": "9.99", "market_id": "33", "circulate_market_value": "9949214000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心"}, {"code": "002261", "name": "拓维信息", "hot_rank": 14, "hot_rank_chg": 3, "stock_cnt": 5803, "price": "24.60", "change": "7.14", "market_id": "33", "circulate_market_value": "28194195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 15, "hot_rank_chg": -3, "stock_cnt": 5803, "price": "80.19", "change": "10.00", "market_id": "33", "circulate_market_value": "154974310000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "600206", "name": "有研新材", "hot_rank": 16, "hot_rank_chg": -11, "stock_cnt": 5803, "price": "41.62", "change": "5.82", "market_id": "17", "circulate_market_value": "35233550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 17, "hot_rank_chg": -7, "stock_cnt": 5803, "price": "3.03", "change": "-10.09", "market_id": "17", "circulate_market_value": "8672987900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.47}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "游戏", "change_pct": -3.23}, {"name": "影视", "change_pct": -4.88}, {"name": "国企改革", "change_pct": -0.89}, {"name": "短剧/互动影游", "change_pct": -3.11}, {"name": "AI视频", "change_pct": -1.21}]}, {"code": "300324", "name": "旋极信息", "hot_rank": 18, "hot_rank_chg": 22, "stock_cnt": 5803, "price": "4.44", "change": "20.00", "market_id": "33", "circulate_market_value": "7592326100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI芯片", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.02}, {"name": "数字孪生", "change_pct": -0.36}, {"name": "半导体", "change_pct": -0.0}, {"name": "国产软件", "change_pct": 0.03}, {"name": "人工智能", "change_pct": -0.87}, {"name": "网络安全", "change_pct": 0.39}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "大飞机", "change_pct": -2.02}, {"name": "北斗导航", "change_pct": -0.92}, {"name": "军民融合", "change_pct": -0.96}, {"name": "京津冀", "change_pct": -0.03}, {"name": "物联网", "change_pct": -0.31}, {"name": "大数据", "change_pct": 0.06}, {"name": "智慧城市", "change_pct": -0.27}, {"name": "电子发票", "change_pct": 0.97}, {"name": "军工", "change_pct": -1.23}, {"name": "无人机", "change_pct": -1.33}, {"name": "智能制造", "change_pct": -0.81}, {"name": "工业互联网", "change_pct": -0.04}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.25}, {"name": "国产芯片", "change_pct": -0.01}, {"name": "腾讯概念股", "change_pct": 0.32}, {"name": "信创", "change_pct": 0.66}, {"name": "BIPV概念", "change_pct": -1.02}, {"name": "航天", "change_pct": -1.51}, {"name": "数字人民币", "change_pct": -0.26}, {"name": "智慧政务", "change_pct": 0.5}, {"name": "医疗信息化", "change_pct": 0.01}, {"name": "云游戏", "change_pct": -1.26}, {"name": "华为产业链", "change_pct": -0.32}, {"name": "物理AI", "change_pct": -0.86}, {"name": "时空大数据", "change_pct": 0.23}, {"name": "AI算力芯片", "change_pct": 0.21}, {"name": "军工信息化", "change_pct": -0.78}, {"name": "财税改革", "change_pct": 0.59}, {"name": "区块链", "change_pct": -0.23}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 19, "hot_rank_chg": -12, "stock_cnt": 5803, "price": "5.08", "change": "7.17", "market_id": "17", "circulate_market_value": "6631787200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.57}, {"name": "高速公路", "change_pct": 0.53}, {"name": "振兴东北", "change_pct": -0.96}, {"name": "黑龙江自贸区", "change_pct": 0.33}]}, {"code": "002384", "name": "东山精密", "hot_rank": 20, "hot_rank_chg": -14, "stock_cnt": 5803, "price": "71.80", "change": "0.06", "market_id": "33", "circulate_market_value": "99537900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 21, "hot_rank_chg": -3, "stock_cnt": 5803, "price": "15.80", "change": "6.76", "market_id": "17", "circulate_market_value": "12438967200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002929", "name": "润建股份", "hot_rank": 22, "hot_rank_chg": 19, "stock_cnt": 5803, "price": "53.76", "change": "10.01", "market_id": "33", "circulate_market_value": "11645920400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "词元出海"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 23, "hot_rank_chg": -8, "stock_cnt": 5803, "price": "36.91", "change": "1.99", "market_id": "17", "circulate_market_value": "166207170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000889", "name": "中嘉博创", "hot_rank": 24, "hot_rank_chg": 160, "stock_cnt": 5803, "price": "3.38", "change": "10.10", "market_id": "33", "circulate_market_value": "2939922100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力销售", "xgb_concepts": [{"name": "金融科技", "change_pct": 0.02}, {"name": "5G消息/RCS", "change_pct": 1.14}, {"name": "华为产业链", "change_pct": -0.32}, {"name": "Kimi概念", "change_pct": 0.03}, {"name": "智谱AI", "change_pct": 1.26}, {"name": "区块链", "change_pct": -0.23}]}, {"code": "002042", "name": "华孚时尚", "hot_rank": 25, "hot_rank_chg": 115, "stock_cnt": 5803, "price": "3.96", "change": "10.00", "market_id": "33", "circulate_market_value": "6734698200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "农业种植", "change_pct": -0.8}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "纺织服装", "change_pct": -1.54}, {"name": "棉花", "change_pct": -0.19}, {"name": "粤港澳大湾区", "change_pct": 0.01}, {"name": "大农业", "change_pct": -1.44}, {"name": "东数西算/算力", "change_pct": 2.36}, {"name": "供销社", "change_pct": 0.05}, {"name": "职业教育", "change_pct": -0.55}, {"name": "C2M", "change_pct": -0.72}]}, {"code": "603220", "name": "中贝通信", "hot_rank": 26, "hot_rank_chg": 73, "stock_cnt": 5803, "price": "15.62", "change": "10.00", "market_id": "17", "circulate_market_value": "8377922000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "000988", "name": "华工科技", "hot_rank": 27, "hot_rank_chg": 8, "stock_cnt": 5803, "price": "66.62", "change": "8.93", "market_id": "33", "circulate_market_value": "66952144000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002086", "name": "东方海洋", "hot_rank": 28, "hot_rank_chg": -15, "stock_cnt": 5803, "price": "3.73", "change": "-9.90", "market_id": "33", "circulate_market_value": "5897022800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.2}, {"name": "体外诊断", "change_pct": -1.59}, {"name": "医疗器械", "change_pct": -1.98}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "基因测序", "change_pct": -1.6}, {"name": "预制菜", "change_pct": -1.6}, {"name": "水产养殖", "change_pct": -3.16}, {"name": "新冠病毒防治", "change_pct": -0.88}, {"name": "海洋经济", "change_pct": -1.12}]}, {"code": "002843", "name": "泰嘉股份", "hot_rank": 29, "hot_rank_chg": 36, "stock_cnt": 5803, "price": "17.34", "change": "10.03", "market_id": "33", "circulate_market_value": "4342479800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "服务器电源"}, {"code": "301396", "name": "宏景科技", "hot_rank": 30, "hot_rank_chg": 22, "stock_cnt": 5803, "price": "114.60", "change": "20.00", "market_id": "33", "circulate_market_value": "16216679000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 31, "hot_rank_chg": 1, "stock_cnt": 5803, "price": "24.52", "change": "-5.66", "market_id": "17", "circulate_market_value": "505155970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 32, "hot_rank_chg": -23, "stock_cnt": 5803, "price": "158.21", "change": "-1.12", "market_id": "33", "circulate_market_value": "198509840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 33, "hot_rank_chg": -12, "stock_cnt": 5803, "price": "37.94", "change": "5.68", "market_id": "17", "circulate_market_value": "752884860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002194", "name": "武汉凡谷", "hot_rank": 34, "hot_rank_chg": 50, "stock_cnt": 5803, "price": "9.31", "change": "10.05", "market_id": "33", "circulate_market_value": "4791365000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "6G预研", "xgb_concepts": [{"name": "手机产业链", "change_pct": -0.49}, {"name": "5G", "change_pct": 1.36}, {"name": "光通信", "change_pct": 1.6}, {"name": "教育", "change_pct": -0.35}, {"name": "毫米波通信", "change_pct": 0.8}, {"name": "6G", "change_pct": 0.84}, {"name": "卫星互联网", "change_pct": -0.9}, {"name": "华为产业链", "change_pct": -0.32}, {"name": "毫米波雷达", "change_pct": -0.08}, {"name": "5.5G概念", "change_pct": 2.16}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 35, "hot_rank_chg": -7, "stock_cnt": 5803, "price": "11.00", "change": "3.58", "market_id": "17", "circulate_market_value": "11493766400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.62}, {"name": "上海国企改革", "change_pct": -0.66}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -2.47}, {"name": "国企改革", "change_pct": -0.89}]}, {"code": "000831", "name": "中国稀土", "hot_rank": 36, "hot_rank_chg": 1, "stock_cnt": 5803, "price": "40.34", "change": "-10.00", "market_id": "33", "circulate_market_value": "42809647000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300857", "name": "协创数据", "hot_rank": 37, "hot_rank_chg": 2, "stock_cnt": 5803, "price": "139.49", "change": "18.02", "market_id": "33", "circulate_market_value": "67637539000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600261", "name": "阳光照明", "hot_rank": 38, "hot_rank_chg": -24, "stock_cnt": 5803, "price": "5.13", "change": "-10.00", "market_id": "17", "circulate_market_value": "6848821700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.57}, {"name": "氢能源/燃料电池", "change_pct": -1.18}, {"name": "物联网", "change_pct": -0.31}, {"name": "LED", "change_pct": -0.8}, {"name": "卫星互联网", "change_pct": -0.9}]}, {"code": "002197", "name": "证通电子", "hot_rank": 39, "hot_rank_chg": 203, "stock_cnt": 5803, "price": "6.11", "change": "10.09", "market_id": "33", "circulate_market_value": "3262740100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力", "xgb_concepts": [{"name": "国产软件", "change_pct": 0.03}, {"name": "深圳本地股", "change_pct": -0.39}, {"name": "ST摘帽", "change_pct": -0.57}, {"name": "金融科技", "change_pct": 0.02}, {"name": "网络安全", "change_pct": 0.39}, {"name": "充电桩", "change_pct": -0.49}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "移动支付", "change_pct": -0.28}, {"name": "教育", "change_pct": -0.35}, {"name": "智慧城市", "change_pct": -0.27}, {"name": "粤港澳大湾区", "change_pct": 0.01}, {"name": "LED", "change_pct": -0.8}, {"name": "新能源汽车", "change_pct": -1.09}, {"name": "机器人", "change_pct": -1.48}, {"name": "数字经济", "change_pct": -0.25}, {"name": "国产芯片", "change_pct": -0.01}, {"name": "阿里巴巴概念股", "change_pct": -0.14}, {"name": "腾讯概念股", "change_pct": 0.32}, {"name": "信创", "change_pct": 0.66}, {"name": "NFT", "change_pct": -1.35}, {"name": "东数西算/算力", "change_pct": 2.36}, {"name": "数字乡村", "change_pct": -0.51}, {"name": "教育信息化", "change_pct": -0.14}, {"name": "数字人民币", "change_pct": -0.26}, {"name": "智慧政务", "change_pct": 0.5}, {"name": "医疗信息化", "change_pct": 0.01}, {"name": "华为鸿蒙", "change_pct": -0.18}, {"name": "华为云·鲲鹏", "change_pct": 0.16}, {"name": "智慧灯杆", "change_pct": -0.36}, {"name": "华为产业链", "change_pct": -0.32}]}, {"code": "301391", "name": "卡莱特", "hot_rank": 40, "hot_rank_chg": 54, "stock_cnt": 5803, "price": "46.66", "change": "20.01", "market_id": "33", "circulate_market_value": "4331703100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "华为昇腾"}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 41, "hot_rank_chg": -17, "stock_cnt": 5803, "price": "15.22", "change": "-4.88", "market_id": "33", "circulate_market_value": "6995291600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603366", "name": "日出东方", "hot_rank": 42, "hot_rank_chg": -11, "stock_cnt": 5803, "price": "10.13", "change": "-10.04", "market_id": "17", "circulate_market_value": "8236177300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.57}, {"name": "充电桩", "change_pct": -0.49}, {"name": "光伏", "change_pct": -1.55}, {"name": "新能源汽车", "change_pct": -1.09}, {"name": "家电", "change_pct": -0.6}, {"name": "储能", "change_pct": -0.68}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.26}, {"name": "华为鸿蒙", "change_pct": -0.18}, {"name": "厨卫家电", "change_pct": -0.31}, {"name": "华为产业链", "change_pct": -0.32}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 43, "hot_rank_chg": -27, "stock_cnt": 5803, "price": "608.30", "change": "-1.84", "market_id": "17", "circulate_market_value": "18302360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002916", "name": "深南电路", "hot_rank": 44, "hot_rank_chg": 44, "stock_cnt": 5803, "price": "201.19", "change": "10.00", "market_id": "33", "circulate_market_value": "133759191000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力PCB"}, {"code": "000707", "name": "双环科技", "hot_rank": 45, "hot_rank_chg": 71, "stock_cnt": 5803, "price": "5.05", "change": "10.02", "market_id": "33", "circulate_market_value": "2781053100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "氯化铵涨价", "xgb_concepts": [{"name": "定增破发", "change_pct": -0.31}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "纯碱", "change_pct": 0.09}, {"name": "烧碱", "change_pct": -0.56}, {"name": "钠电池", "change_pct": -1.17}, {"name": "国企改革", "change_pct": -0.89}, {"name": "湖北国企改革", "change_pct": -0.27}]}, {"code": "603030", "name": "全筑股份", "hot_rank": 46, "hot_rank_chg": 123, "stock_cnt": 5803, "price": "2.13", "change": "9.79", "market_id": "17", "circulate_market_value": "2805068400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "边缘AI算力", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.04}, {"name": "长三角一体化", "change_pct": 0.19}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "装修装饰", "change_pct": -1.45}, {"name": "装配式建筑", "change_pct": -1.09}, {"name": "建筑节能", "change_pct": -0.79}, {"name": "新型城镇化", "change_pct": -0.69}, {"name": "低价股", "change_pct": -0.47}, {"name": "光刻机（胶）", "change_pct": -0.95}, {"name": "旧改", "change_pct": -0.62}]}, {"code": "000533", "name": "顺钠股份", "hot_rank": 47, "hot_rank_chg": -28, "stock_cnt": 5803, "price": "10.65", "change": "-1.39", "market_id": "33", "circulate_market_value": "7294210600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.02}, {"name": "核电", "change_pct": -0.81}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "充电桩", "change_pct": -0.49}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "新能源汽车", "change_pct": -1.09}, {"name": "储能", "change_pct": -0.68}, {"name": "阿里巴巴概念股", "change_pct": -0.14}, {"name": "中芯国际概念股", "change_pct": 0.36}, {"name": "智能电网", "change_pct": -0.47}, {"name": "核聚变", "change_pct": -0.4}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 48, "hot_rank_chg": -4, "stock_cnt": 5803, "price": "70.50", "change": "3.42", "market_id": "33", "circulate_market_value": "46037029000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000410", "name": "沈阳机床", "hot_rank": 50, "hot_rank_chg": 99, "stock_cnt": 5803, "price": "5.71", "change": "10.02", "market_id": "33", "circulate_market_value": "11254514700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "工业母机", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.79}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "工业自动化", "change_pct": -1.04}, {"name": "智能制造", "change_pct": -0.81}, {"name": "工业互联网", "change_pct": -0.04}, {"name": "振兴东北", "change_pct": -0.96}, {"name": "工业母机", "change_pct": -1.03}, {"name": "国企改革", "change_pct": -0.89}]}, {"code": "000521", "name": "长虹美菱", "hot_rank": 51, "hot_rank_chg": -25, "stock_cnt": 5803, "price": "4.71", "change": "-0.63", "market_id": "33", "circulate_market_value": "4122610500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医疗器械", "change_pct": -1.98}, {"name": "一带一路", "change_pct": -0.58}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "人工智能", "change_pct": -0.87}, {"name": "冷链", "change_pct": 0.03}, {"name": "小家电", "change_pct": -0.4}, {"name": "白色家电", "change_pct": -0.22}, {"name": "家电", "change_pct": -0.6}, {"name": "破净股", "change_pct": -0.66}, {"name": "智能制造", "change_pct": -0.81}, {"name": "工业互联网", "change_pct": -0.04}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.26}, {"name": "垃圾分类", "change_pct": -0.62}, {"name": "新冠病毒防治", "change_pct": -0.88}, {"name": "C2M", "change_pct": -0.72}, {"name": "生物安全", "change_pct": -1.52}, {"name": "出海龙头", "change_pct": -0.16}]}, {"code": "002425", "name": "凯撒文化", "hot_rank": 52, "hot_rank_chg": -32, "stock_cnt": 5803, "price": "4.19", "change": "-9.89", "market_id": "33", "circulate_market_value": "3855579000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.47}, {"name": "ST摘帽", "change_pct": -0.57}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "人工智能", "change_pct": -0.87}, {"name": "VR&AR", "change_pct": -1.06}, {"name": "游戏", "change_pct": -3.23}, {"name": "动漫", "change_pct": -3.89}, {"name": "腾讯概念股", "change_pct": 0.32}, {"name": "快手概念股", "change_pct": -1.43}, {"name": "NFT", "change_pct": -1.35}, {"name": "元宇宙", "change_pct": -1.11}, {"name": "虚拟数字人", "change_pct": -1.14}, {"name": "字节跳动概念股", "change_pct": -1.01}, {"name": "云游戏", "change_pct": -1.26}, {"name": "华为产业链", "change_pct": -0.32}, {"name": "IP经济/谷子经济", "change_pct": -2.71}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 53, "hot_rank_chg": -19, "stock_cnt": 5803, "price": "949.00", "change": "4.88", "market_id": "17", "circulate_market_value": "596782450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000034", "name": "神州数码", "hot_rank": 54, "hot_rank_chg": 138, "stock_cnt": 5803, "price": "23.00", "change": "4.21", "market_id": "33", "circulate_market_value": "19530400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603324", "name": "盛剑科技", "hot_rank": 55, "hot_rank_chg": 98, "stock_cnt": 5803, "price": "22.90", "change": "9.99", "market_id": "17", "circulate_market_value": "3340615800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光刻胶"}, {"code": "600176", "name": "中国巨石", "hot_rank": 56, "hot_rank_chg": 53, "stock_cnt": 5803, "price": "26.50", "change": "1.61", "market_id": "17", "circulate_market_value": "105247056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 57, "hot_rank_chg": 9, "stock_cnt": 5803, "price": "14.22", "change": "0.57", "market_id": "33", "circulate_market_value": "47353566000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002187", "name": "广百股份", "hot_rank": 58, "hot_rank_chg": -8, "stock_cnt": 5803, "price": "7.29", "change": "-10.00", "market_id": "33", "circulate_market_value": "5109521900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -3.0}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "粤港澳大湾区", "change_pct": 0.01}, {"name": "物业管理", "change_pct": -0.15}, {"name": "预制菜", "change_pct": -1.6}, {"name": "地摊经济", "change_pct": -1.64}]}, {"code": "002229", "name": "鸿博股份", "hot_rank": 59, "hot_rank_chg": 24, "stock_cnt": 5803, "price": "10.78", "change": "5.48", "market_id": "33", "circulate_market_value": "5316311200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.25}, {"name": "彩票", "change_pct": -2.12}, {"name": "人工智能", "change_pct": -0.87}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "包装印刷", "change_pct": -1.02}, {"name": "数字经济", "change_pct": -0.25}, {"name": "东数西算/算力", "change_pct": 2.36}, {"name": "AIGC概念", "change_pct": -0.73}, {"name": "ETC", "change_pct": -0.7}, {"name": "词元概念/Token", "change_pct": 2.77}, {"name": "ChatGPT", "change_pct": 0.04}, {"name": "AI大模型/智能体", "change_pct": -0.54}, {"name": "英伟达概念", "change_pct": 1.43}, {"name": "区块链", "change_pct": -0.23}]}, {"code": "001309", "name": "德明利", "hot_rank": 60, "hot_rank_chg": -27, "stock_cnt": 5803, "price": "187.49", "change": "5.78", "market_id": "33", "circulate_market_value": "43576067000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 61, "hot_rank_chg": 49, "stock_cnt": 5803, "price": "30.68", "change": "0.26", "market_id": "17", "circulate_market_value": "750684920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002959", "name": "小熊电器", "hot_rank": 62, "hot_rank_chg": -40, "stock_cnt": 5803, "price": "41.52", "change": "4.06", "market_id": "33", "circulate_market_value": "5804263100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002272", "name": "川润股份", "hot_rank": 63, "hot_rank_chg": 113, "stock_cnt": 5803, "price": "12.58", "change": "9.96", "market_id": "33", "circulate_market_value": "5270149100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.52}, {"name": "核电", "change_pct": -0.81}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "机械", "change_pct": -0.48}, {"name": "氢能源/燃料电池", "change_pct": -1.18}, {"name": "风电", "change_pct": -0.72}, {"name": "机器人", "change_pct": -1.48}, {"name": "储能", "change_pct": -0.68}, {"name": "超超临界发电", "change_pct": 0.2}, {"name": "光热发电", "change_pct": -0.58}, {"name": "特高压", "change_pct": -0.68}, {"name": "超节点", "change_pct": 4.18}, {"name": "智能电网", "change_pct": -0.47}, {"name": "液冷服务器", "change_pct": 0.16}, {"name": "钍基熔盐堆", "change_pct": 0.27}]}, {"code": "688629", "name": "华丰科技", "hot_rank": 64, "hot_rank_chg": -11, "stock_cnt": 5803, "price": "104.10", "change": "14.62", "market_id": "17", "circulate_market_value": "47989354000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002578", "name": "闽发铝业", "hot_rank": 65, "hot_rank_chg": -4, "stock_cnt": 5803, "price": "3.97", "change": "-9.98", "market_id": "33", "circulate_market_value": "3418815400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.75}, {"name": "一带一路", "change_pct": -0.58}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "福建自贸/海西概念", "change_pct": -1.67}, {"name": "光伏", "change_pct": -1.55}, {"name": "有色金属", "change_pct": -1.4}, {"name": "新能源汽车", "change_pct": -1.09}, {"name": "新能源车零部件", "change_pct": -1.6}, {"name": "自贸区", "change_pct": -0.99}, {"name": "液冷服务器", "change_pct": 0.16}]}, {"code": "600630", "name": "龙头股份", "hot_rank": 66, "hot_rank_chg": 590, "stock_cnt": 5803, "price": "6.58", "change": "-3.23", "market_id": "17", "circulate_market_value": "2795589300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.04}, {"name": "上海国企改革", "change_pct": -0.66}, {"name": "一带一路", "change_pct": -0.58}, {"name": "优化生育（三孩）", "change_pct": -1.58}, {"name": "纺织服装", "change_pct": -1.54}, {"name": "上海自由贸易港", "change_pct": -0.66}, {"name": "进口博览会", "change_pct": -1.61}, {"name": "自由贸易港", "change_pct": -0.45}, {"name": "物业管理", "change_pct": -0.15}, {"name": "国企改革", "change_pct": -0.89}, {"name": "新冠病毒防治", "change_pct": -0.88}, {"name": "自贸区", "change_pct": -0.99}]}, {"code": "000823", "name": "超声电子", "hot_rank": 67, "hot_rank_chg": -18, "stock_cnt": 5803, "price": "17.65", "change": "6.07", "market_id": "33", "circulate_market_value": "10500552700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 68, "hot_rank_chg": 10, "stock_cnt": 5803, "price": "4.71", "change": "-9.94", "market_id": "17", "circulate_market_value": "4167311500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -3.0}, {"name": "优化生育（三孩）", "change_pct": -1.58}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "信托", "change_pct": -0.56}, {"name": "民营医院", "change_pct": -1.73}, {"name": "汽车销售", "change_pct": -1.78}, {"name": "社区团购", "change_pct": -2.74}, {"name": "大金融", "change_pct": -0.49}, {"name": "餐饮", "change_pct": -1.71}, {"name": "首发经济", "change_pct": -1.74}]}, {"code": "002724", "name": "海洋王", "hot_rank": 69, "hot_rank_chg": 12, "stock_cnt": 5803, "price": "9.49", "change": "-9.96", "market_id": "33", "circulate_market_value": "5375879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.57}, {"name": "石墨烯", "change_pct": -0.63}, {"name": "军民融合", "change_pct": -0.96}, {"name": "物联网", "change_pct": -0.31}, {"name": "LED", "change_pct": -0.8}, {"name": "军工", "change_pct": -1.23}, {"name": "智慧灯杆", "change_pct": -0.36}, {"name": "海洋经济", "change_pct": -1.12}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 70, "hot_rank_chg": -32, "stock_cnt": 5803, "price": "219.56", "change": "2.33", "market_id": "17", "circulate_market_value": "147262920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 71, "hot_rank_chg": 4, "stock_cnt": 5803, "price": "25.11", "change": "1.66", "market_id": "33", "circulate_market_value": "71816425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 72, "hot_rank_chg": -30, "stock_cnt": 5803, "price": "60.90", "change": "3.91", "market_id": "17", "circulate_market_value": "146875510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600405", "name": "动力源", "hot_rank": 73, "hot_rank_chg": 244, "stock_cnt": 5803, "price": "4.62", "change": "10.00", "market_id": "17", "circulate_market_value": "2831272700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI智算中心电源", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.02}, {"name": "5G", "change_pct": 1.36}, {"name": "充电桩", "change_pct": -0.49}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "氢能源/燃料电池", "change_pct": -1.18}, {"name": "光伏", "change_pct": -1.55}, {"name": "新能源汽车", "change_pct": -1.09}, {"name": "储能", "change_pct": -0.68}, {"name": "宁德时代概念股", "change_pct": -1.03}, {"name": "阿里巴巴概念股", "change_pct": -0.14}, {"name": "腾讯概念股", "change_pct": 0.32}, {"name": "新能源车零部件", "change_pct": -1.6}, {"name": "换电概念", "change_pct": -0.59}, {"name": "BIPV概念", "change_pct": -1.02}, {"name": "华为产业链", "change_pct": -0.32}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 74, "hot_rank_chg": 23, "stock_cnt": 5803, "price": "4.36", "change": "2.11", "market_id": "33", "circulate_market_value": "11565120500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.57}, {"name": "装修装饰", "change_pct": -1.45}, {"name": "装配式建筑", "change_pct": -1.09}, {"name": "破净股", "change_pct": -0.66}, {"name": "航天", "change_pct": -1.51}, {"name": "旧改", "change_pct": -0.62}]}, {"code": "600162", "name": "香江控股", "hot_rank": 75, "hot_rank_chg": 120, "stock_cnt": 5803, "price": "3.29", "change": "10.03", "market_id": "17", "circulate_market_value": "10753161400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力运维", "xgb_concepts": [{"name": "房地产", "change_pct": -0.18}, {"name": "养老产业", "change_pct": -0.59}, {"name": "粤港澳大湾区", "change_pct": 0.01}, {"name": "民营医院", "change_pct": -1.73}, {"name": "东数西算/算力", "change_pct": 2.36}, {"name": "地摊经济", "change_pct": -1.64}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 76, "hot_rank_chg": -53, "stock_cnt": 5803, "price": "109.42", "change": "4.60", "market_id": "33", "circulate_market_value": "119091420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 77, "hot_rank_chg": -4, "stock_cnt": 5803, "price": "26.20", "change": "8.13", "market_id": "33", "circulate_market_value": "39769728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 78, "hot_rank_chg": 33, "stock_cnt": 5803, "price": "82.65", "change": "2.09", "market_id": "17", "circulate_market_value": "120856641000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 79, "hot_rank_chg": -54, "stock_cnt": 5803, "price": "7.83", "change": "-1.01", "market_id": "33", "circulate_market_value": "3767321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -1.59}, {"name": "医疗器械", "change_pct": -1.98}, {"name": "锂电池", "change_pct": -1.23}, {"name": "基因测序", "change_pct": -1.6}, {"name": "PCB板", "change_pct": 1.69}, {"name": "医药", "change_pct": -1.61}, {"name": "新能源汽车", "change_pct": -1.09}, {"name": "化学原料药", "change_pct": -1.81}, {"name": "食品安全", "change_pct": -0.65}, {"name": "辅助生殖", "change_pct": -1.46}, {"name": "光刻机（胶）", "change_pct": -0.95}, {"name": "异丙醇", "change_pct": -1.12}, {"name": "新冠病毒防治", "change_pct": -0.88}, {"name": "磷酸铁锂", "change_pct": -1.43}]}, {"code": "603887", "name": "城地香江", "hot_rank": 80, "hot_rank_chg": 193, "stock_cnt": 5803, "price": "8.18", "change": "9.95", "market_id": "17", "circulate_market_value": "4924600700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 1.19}, {"name": "阿里巴巴概念股", "change_pct": -0.14}, {"name": "腾讯概念股", "change_pct": 0.32}, {"name": "东数西算/算力", "change_pct": 2.36}, {"name": "华为产业链", "change_pct": -0.32}]}, {"code": "002403", "name": "爱仕达", "hot_rank": 81, "hot_rank_chg": 141, "stock_cnt": 5803, "price": "11.36", "change": "9.97", "market_id": "33", "circulate_market_value": "3375754100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人", "xgb_concepts": [{"name": "特斯拉", "change_pct": -1.41}, {"name": "工业自动化", "change_pct": -1.04}, {"name": "小家电", "change_pct": -0.4}, {"name": "机器人", "change_pct": -1.48}, {"name": "家电", "change_pct": -0.6}, {"name": "智慧物流", "change_pct": -1.04}, {"name": "机器视觉", "change_pct": -1.0}, {"name": "智能制造", "change_pct": -0.81}, {"name": "独角兽", "change_pct": 0.85}, {"name": "减速器", "change_pct": -2.26}, {"name": "C2M", "change_pct": -0.72}]}, {"code": "600408", "name": "安泰集团", "hot_rank": 82, "hot_rank_chg": 20, "stock_cnt": 5803, "price": "3.71", "change": "6.30", "market_id": "17", "circulate_market_value": "3735228000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.13}, {"name": "钢铁", "change_pct": 0.16}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "煤化工", "change_pct": 0.01}]}, {"code": "002156", "name": "通富微电", "hot_rank": 83, "hot_rank_chg": -11, "stock_cnt": 5803, "price": "43.64", "change": "-0.66", "market_id": "33", "circulate_market_value": "66221615000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 84, "hot_rank_chg": -13, "stock_cnt": 5803, "price": "115.10", "change": "1.45", "market_id": "17", "circulate_market_value": "230268360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 85, "hot_rank_chg": -29, "stock_cnt": 5803, "price": "52.96", "change": "1.89", "market_id": "17", "circulate_market_value": "94767396000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601929", "name": "吉视传媒", "hot_rank": 86, "hot_rank_chg": -27, "stock_cnt": 5803, "price": "2.48", "change": "-10.14", "market_id": "17", "circulate_market_value": "8654674700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -2.71}, {"name": "车联网/车路云", "change_pct": -0.52}, {"name": "超高清视频", "change_pct": -0.92}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "人工智能", "change_pct": -0.87}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "影视", "change_pct": -4.88}, {"name": "智慧城市", "change_pct": -0.27}, {"name": "国产芯片", "change_pct": -0.01}, {"name": "振兴东北", "change_pct": -0.96}, {"name": "传媒", "change_pct": -2.47}, {"name": "低价股", "change_pct": -0.47}, {"name": "国企改革", "change_pct": -0.89}, {"name": "在线教育", "change_pct": -0.26}, {"name": "医疗信息化", "change_pct": 0.01}, {"name": "AI大模型/智能体", "change_pct": -0.54}, {"name": "短剧/互动影游", "change_pct": -3.11}, {"name": "IP经济/谷子经济", "change_pct": -2.71}]}, {"code": "000333", "name": "美的集团", "hot_rank": 87, "hot_rank_chg": 17, "stock_cnt": 5803, "price": "93.65", "change": "0.34", "market_id": "33", "circulate_market_value": "644972640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 88, "hot_rank_chg": -12, "stock_cnt": 5803, "price": "25.06", "change": "4.29", "market_id": "33", "circulate_market_value": "18980823000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 89, "hot_rank_chg": 40, "stock_cnt": 5803, "price": "1.67", "change": "9.87", "market_id": "33", "circulate_market_value": "8420951400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "聘任会计师事务所", "xgb_concepts": [{"name": "新能源整车", "change_pct": 0.67}, {"name": "汽车整车", "change_pct": 0.48}, {"name": "新能源汽车", "change_pct": -1.09}, {"name": "低价股", "change_pct": -0.47}]}, {"code": "000711", "name": "京蓝科技", "hot_rank": 90, "hot_rank_chg": 234, "stock_cnt": 5803, "price": "3.48", "change": "10.13", "market_id": "33", "circulate_market_value": "8202411700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "7N高纯铟", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -0.57}, {"name": "物联网", "change_pct": -0.31}, {"name": "大数据", "change_pct": 0.06}, {"name": "固废处理", "change_pct": -0.94}, {"name": "智慧城市", "change_pct": -0.27}, {"name": "有色 · 锌", "change_pct": -2.32}, {"name": "有色金属", "change_pct": -1.4}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -1.04}, {"name": "土壤修复", "change_pct": -0.79}, {"name": "磷化铟", "change_pct": 1.62}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 91, "hot_rank_chg": -43, "stock_cnt": 5803, "price": "241.01", "change": "1.05", "market_id": "33", "circulate_market_value": "1026851320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600467", "name": "好当家", "hot_rank": 92, "hot_rank_chg": -30, "stock_cnt": 5803, "price": "2.77", "change": "0.73", "market_id": "17", "circulate_market_value": "4046954200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.39}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "冷链", "change_pct": 0.03}, {"name": "医药", "change_pct": -1.61}, {"name": "食品", "change_pct": -1.46}, {"name": "食品安全", "change_pct": -0.65}, {"name": "预制菜", "change_pct": -1.6}, {"name": "低价股", "change_pct": -0.47}, {"name": "水产养殖", "change_pct": -3.16}, {"name": "海洋经济", "change_pct": -1.12}]}, {"code": "600619", "name": "海立股份", "hot_rank": 93, "hot_rank_chg": -36, "stock_cnt": 5803, "price": "13.70", "change": "4.58", "market_id": "17", "circulate_market_value": "10811694700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920924", "name": "广脉科技", "hot_rank": 94, "hot_rank_chg": 200, "stock_cnt": 5803, "price": "15.34", "change": "30.00", "market_id": "151", "circulate_market_value": "1003451710.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "000595", "name": "新能股份", "hot_rank": 95, "hot_rank_chg": 25, "stock_cnt": 5803, "price": "5.76", "change": "5.30", "market_id": "33", "circulate_market_value": "6558660700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -0.57}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "高铁轨交", "change_pct": -1.05}, {"name": "航母", "change_pct": -1.05}, {"name": "光伏", "change_pct": -1.55}, {"name": "风电", "change_pct": -0.72}, {"name": "军工", "change_pct": -1.23}, {"name": "储能", "change_pct": -0.68}, {"name": "国企改革", "change_pct": -0.89}, {"name": "宁夏概念", "change_pct": 0.68}]}, {"code": "688183", "name": "生益电子", "hot_rank": 96, "hot_rank_chg": -29, "stock_cnt": 5803, "price": "70.95", "change": "18.53", "market_id": "17", "circulate_market_value": "59427098000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688347", "name": "华虹宏力", "hot_rank": 97, "hot_rank_chg": -33, "stock_cnt": 5803, "price": "184.97", "change": "7.28", "market_id": "17", "circulate_market_value": "75421518000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 98, "hot_rank_chg": -47, "stock_cnt": 5803, "price": "38.59", "change": "2.23", "market_id": "17", "circulate_market_value": "94686209000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000062", "name": "深圳华强", "hot_rank": 99, "hot_rank_chg": -22, "stock_cnt": 5803, "price": "21.97", "change": "-1.39", "market_id": "33", "circulate_market_value": "22953418000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000651", "name": "格力电器", "hot_rank": 100, "hot_rank_chg": 72, "stock_cnt": 5803, "price": "40.75", "change": "0.22", "market_id": "33", "circulate_market_value": "224650390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600162", "name": "香江控股", "price": 3.29, "change_pct": 10.03, "reason": "广州市综合性房地产开发商；全资子公司香江云瀚与关联方诚雅泰签订算力技术服务合同，提供机房资源对接协调、现场运维保障等一体化配套技术服务，合同总金额15816万元，服务期限5年", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.72, "first_limit_up": 1794970527, "break_limit_up_times": 3}, {"code": "000711", "name": "京蓝科技", "price": 3.48, "change_pct": 10.13, "reason": "公司撤销其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 3.34, "first_limit_up": 1794966663, "break_limit_up_times": 0}, {"code": "301396", "name": "宏景科技", "price": 114.6, "change_pct": 20.0, "reason": "公司定位为新型数字基础设施与智能算力综合服务商，战略重心全面转向智能算力，致力于成为国内领先算力运营商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 13.67, "first_limit_up": 1794979806, "break_limit_up_times": 0}, {"code": "603220", "name": "中贝通信", "price": 15.62, "change_pct": 10.0, "reason": "1、公司中标约7.4亿元智能算力枢纽中心项目；\n2、光通信产品和设备是公司主要的技术服务领域之一，公司有光模块产品的技术储备，目前主要生产无源光模块产品", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.78, "first_limit_up": 1794971643, "break_limit_up_times": 1}, {"code": "600336", "name": "澳柯玛", "price": 6.14, "change_pct": 10.04, "reason": "公司推出的热泵三联供机组实现“一机三供”，模块化设计节省空间30%，能源利用率提升25%，碳排放降低40%，支持-30℃至 50℃宽温域运行，满足南北极端气候需求", "plates": ["家电"], "limit_up_days": 1, "turnover_ratio": 1.35, "first_limit_up": 1794965428, "break_limit_up_times": 1}, {"code": "002929", "name": "润建股份", "price": 53.76, "change_pct": 10.01, "reason": "领先的数字化智能运维（AIOps）服务商；公司为算力中心及IDC提供全生命周期一站式服务，近日签下2亿美元AI词元大单", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 16.13, "first_limit_up": 1794971694, "break_limit_up_times": 1}, {"code": "600839", "name": "四川长虹", "price": 5.68, "change_pct": 10.08, "reason": "1、公司具有电视研产供销服等方面的深厚积淀和完备的价值链体系，拥有绵阳、中山、广元、印度尼西亚、捷克5个生产制造基地，向全球用户提供优质的智能电视产品和解决方案；\n2、公司旗下零八一电子集团承担低轨卫星通信载荷配套，涉及微波、射频器件", "plates": ["家电"], "limit_up_days": 1, "turnover_ratio": 2.29, "first_limit_up": 1794965701, "break_limit_up_times": 0}, {"code": "000158", "name": "常山北明", "price": 12.43, "change_pct": 10.0, "reason": "1、全资子公司北明软件是华为重要的核心战略合作伙伴、华为多产品钻石级经销商，在数通、IT等多种产品具备五钻的交付能力，旗下拥有常山云数据中心；\n2、公司研发完成了政务服务大模型、智能知识库问答系统、大模型应用开发平台、数字人等一系列产品", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.79, "first_limit_up": 1794967332, "break_limit_up_times": 0}, {"code": "002685", "name": "华东重机", "price": 7.37, "change_pct": 10.0, "reason": "1、公司拟收购锐信图芯股权并增资，交易完成后，公司持有锐信图芯43.18%股权，锐信图芯主营业务为GPU芯片及解决方案；\n2、全资子公司润星科技主要产品包括中高档数控机床、工业机器人、以及自动化交钥匙工程等", "plates": ["国产芯片"], "limit_up_days": 4, "turnover_ratio": 2.2, "first_limit_up": 1794965100, "break_limit_up_times": 0}, {"code": "301391", "name": "卡莱特", "price": 46.66, "change_pct": 20.01, "reason": "公司已率先在昇腾Atlas 800 A3超节点平台完成DeepSeek V4的部署和调度，自主研发的算力调度平台能够实现跨卡、跨节点的系统级算力调度与任务管理", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 10.15, "first_limit_up": 1794968154, "break_limit_up_times": 0}, {"code": "000889", "name": "中嘉博创", "price": 3.38, "change_pct": 10.1, "reason": "公司申请名称一种通过插片式安装的光通信无源器件专利，全资子公司海南博创云天经营范围包含算力销售", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.45, "first_limit_up": 1794966357, "break_limit_up_times": 0}, {"code": "300991", "name": "创益通", "price": 22.68, "change_pct": 20.0, "reason": "1、公司已与莫仕、中航光电等公司展开合作，应用于5G通讯的高速连接器产品已进入小批量供货阶段；\n2、公司已成功开发出高精密/高密度/高速背板连接器及组件产品，高速背板连接器产品主要以铜材为主;公司的通讯互连产品主要包括高速背板连接器和高速射频连接器等，高速背板连接器产品主要以铜材为主，主要应用于通信基站机柜、交换机、数据中心等数据存储和传输", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.33, "first_limit_up": 1794966306, "break_limit_up_times": 0}, {"code": "002197", "name": "证通电子", "price": 6.11, "change_pct": 10.09, "reason": "1、公司算力业务依据客户订单进行扩容，现阶段全力推进机柜订单落地；\n2、国内最早研发金融电子设备的高新技术企业之一；公司已围绕数字货币加密算法、数字钱包设备及其应用、数字货币支付模组及支付设备、数字货币收单设备等关键领域开展一套完整的数字货币安全支付方案研究工作，可根据客户需求提供数字人民币支付对接到银行系统的应用开发解决方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.19, "first_limit_up": 1794967965, "break_limit_up_times": 2}, {"code": "600238", "name": "ST椰岛", "price": 4.31, "change_pct": 9.95, "reason": "海南本地股，主营以保健酒类产品为主，撤销退市风险警示", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.84, "first_limit_up": 1794980475, "break_limit_up_times": 5}, {"code": "002148", "name": "北纬科技", "price": 8.92, "change_pct": 9.99, "reason": "参股公司天宇经纬与宇树科技在机器狗应用领域开展生态合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 42.02, "first_limit_up": 1794965409, "break_limit_up_times": 4}, {"code": "688316", "name": "青云科技", "price": 50.82, "change_pct": 20.0, "reason": "平台级混合云ICT厂商和服务商；公司发布OpenClaw AI助手云端一键部署", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 13.45, "first_limit_up": 1794979020, "break_limit_up_times": 0}, {"code": "603030", "name": "全筑股份", "price": 2.13, "change_pct": 9.79, "reason": "1、公司与华芯极光在上海合资成立华芯全筑，华芯全筑致力于极紫外光源核心精密测量设备的研发与制造，同时为传统化光源路径攻关以及创新型光源技术落地提供支撑；\n2、公司成立云阙智算苏州物联科技有限公司，基于分布式数字与AI原生服务平台，聚焦数据产生端，推动分布式边缘AI算力服务及应用，目前业务尚处于早期试点培育阶段；\n3、公司主营建筑装饰工程，表示研发智能建筑装饰施工机器人；\n", "plates": ["光刻机（胶）"], "limit_up_days": 2, "turnover_ratio": 1.33, "first_limit_up": 1794965100, "break_limit_up_times": 0}, {"code": "002403", "name": "爱仕达", "price": 11.36, "change_pct": 9.97, "reason": "1、国内炊具行业知名品牌；公司小家电产品包括电饭锅、电压力锅、电磁炉、电水壶、破壁机等，围绕全场景“钛厨房”产品矩阵布局；\n2、公司与智元机器人签署战略合作协议", "plates": ["家电"], "limit_up_days": 1, "turnover_ratio": 2.85, "first_limit_up": 1794965487, "break_limit_up_times": 0}, {"code": "000410", "name": "沈阳机床", "price": 5.71, "change_pct": 10.02, "reason": "数控机床龙头，拟吸收合并沈阳优尼斯智能装备公司，后者主营产品包括机器人产品的技术开发与制造", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.45, "first_limit_up": 1794966585, "break_limit_up_times": 3}, {"code": "600405", "name": "动力源", "price": 4.62, "change_pct": 10.0, "reason": "公司数据中心业务提供240V/336V高压直流供电系统及整机柜服务器集中供电方案，全面适配AI智算中心高功率、高效率、高可靠供电需求；充换电业务方面，已构建光储充放换+V2G一体化综合能源解决方案，提供全液冷兆瓦级超充系统等产品", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 3.33, "first_limit_up": 1794965458, "break_limit_up_times": 1}, {"code": "600410", "name": "华胜天成", "price": 16.82, "change_pct": 10.01, "reason": "公司全面推进“AI+算力”战略，拥有新一代人工智能算力中心整体解决方案，并获头部科技企业智能计算ISV核心认证，为华为云软件认证合作伙伴、华为云服务合作伙伴和华为政企金牌合作伙伴", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 19.03, "first_limit_up": 1794966901, "break_limit_up_times": 0}, {"code": "002955", "name": "鸿合科技", "price": 27.39, "change_pct": 10.0, "reason": "1、公司AI研究院自主研发的“鸿合教学大模型”已通过国家网信办备案，并推出搭载15T算力平台的新一代AI智慧屏、AI课堂分析平台等产品，实现AI对教育全场景深度赋能；\n2、公司已完成对迹动体育51%股权收购，布局“AI+体育”智慧体育教育", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 3.26, "first_limit_up": 1794972360, "break_limit_up_times": 0}, {"code": "300324", "name": "旋极信息", "price": 4.44, "change_pct": 20.0, "reason": "1、子公司旋极星源设计研发了多款芯片和IP产品，和阿里等有合作。\n2、公司参股的浙江曲速科技有限公司对赌约定已完成，现已成功推出“TGU01芯片”及搭载该芯片的Bumblebee服务器，并已上市销售。公司对该芯片的性能进行了现场核验，确认其在内存配备、显存带宽性能及大模型支持能力等方面均符合对赌条款的要求。", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 18.51, "first_limit_up": 1794967083, "break_limit_up_times": 1}, {"code": "002272", "name": "川润股份", "price": 12.58, "change_pct": 9.97, "reason": "1、公司为数据中心、云计算、IDC、通信网络、人工智能领域提供液冷、温控技术及产品；\n2、公司在储能、电力电网等领域可提供液冷产品与温控节能方案，公司SVG/SVC 液冷产品已应用于智能电网领域", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 12.49, "first_limit_up": 1794979872, "break_limit_up_times": 0}, {"code": "002771", "name": "真视通", "price": 13.07, "change_pct": 10.02, "reason": "公司数据中心业务主要为用户提供数据中心基础环境建设、基础设施建设等系统建设服务，与航源光热、广电五舟联合研发了两相液冷高效散热服务器等", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 7.91, "first_limit_up": 1794965403, "break_limit_up_times": 0}, {"code": "002194", "name": "武汉凡谷", "price": 9.31, "change_pct": 10.05, "reason": "公司微波器件产品（如微波双工器、微波滤波器）是卫星中继通信和微波点对点通信的核心部件", "plates": ["6G"], "limit_up_days": 1, "turnover_ratio": 3.47, "first_limit_up": 1794965400, "break_limit_up_times": 0}, {"code": "002463", "name": "沪电股份", "price": 80.19, "change_pct": 10.0, "reason": "国内规模最大、技术实力最强的PCB制造商之一", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.42, "first_limit_up": 1794979815, "break_limit_up_times": 3}, {"code": "002916", "name": "深南电路", "price": 201.19, "change_pct": 10.0, "reason": "国内IC载板龙头，已成为全球领先的无线基站射频功放PCB供应商、亚太地区主要的航空航天用PCB供应商、国内领先的处理器芯片封装基板供应商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.07, "first_limit_up": 1794979152, "break_limit_up_times": 0}, {"code": "002843", "name": "泰嘉股份", "price": 17.34, "change_pct": 10.03, "reason": "1、公司大功率电源业务含数据中心电源，为客户代工服务器电源模块产品；\n2、公司是掌握双金属带锯条生产工艺并实现规模化生产的业内领先企业，系中国航天中国运载火箭技术研究院认可的硬质合金带锯条合格供应商", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 27.57, "first_limit_up": 1794979671, "break_limit_up_times": 1}, {"code": "600186", "name": "莲花控股", "price": 8.98, "change_pct": 10.05, "reason": "1、国内在产味精生产商历史最悠久的企业，一季度净利润增长42%；\n2、公司将以莲花科创为项目实施主体，积极引入行业实力战略合作伙伴，开展智能计算中心项目合作，在国内主要的算力节点，建设智算中心，高效推动算力租赁业务落地", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 10.96, "first_limit_up": 1794979656, "break_limit_up_times": 1}, {"code": "603629", "name": "利通电子", "price": 60.93, "change_pct": 10.0, "reason": "公司直接运营的AI算力云规模已达38000P", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 10.03, "first_limit_up": 1794972371, "break_limit_up_times": 1}, {"code": "002042", "name": "华孚时尚", "price": 3.96, "change_pct": 10.0, "reason": "公司上虞AIGC智算中心已对外租赁算力，阿克苏城市公共算力平台项目施工设备已进场，项目正在正常推进中", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.93, "first_limit_up": 1794971916, "break_limit_up_times": 3}, {"code": "688757", "name": "胜科纳米", "price": 27.84, "change_pct": 20.0, "reason": "公司是行业内知名的半导体第三方检测分析实验室，主要服务于半导体客户的研发环节，可以为半导体全产业链客户提供样品失效分析、材料分析、可靠性分析等专业、高效的检测实验\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.44, "first_limit_up": 1794979180, "break_limit_up_times": 2}, {"code": "000010", "name": "*ST美丽", "price": 0.95, "change_pct": 10.47, "reason": "公司在海南成立了算力运营公司，持股比例为32%，已开始运营，目前为智算中心设计、设备采购、施工和运营提供咨询和技术服务为主，逐渐扩充到调度服务和设备维保业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.63, "first_limit_up": 1794965598, "break_limit_up_times": 3}, {"code": "603985", "name": "恒润股份", "price": 14.73, "change_pct": 10.01, "reason": "控股子公司润六尺表示公司与多家运营商签订了深度合作协议，包销所有落地产能，已完成芜湖智算一期3000P算力落地", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.26, "first_limit_up": 1794979296, "break_limit_up_times": 0}, {"code": "603887", "name": "城地香江", "price": 8.18, "change_pct": 9.95, "reason": "1、公司为上海电信客户字节提供定制化数据中心服务，合计实现计费销售18兆瓦；\n2、子公司香江科技主营IDC相关设备和解决方案、IDC系统集成以及IDC运营管理和增值服务业务，与华为签署全面合作协议。\n3、实际控制人将由谢晓东及其一致行动人卢静芳变更为国务院国有资产监督管理委员会", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.94, "first_limit_up": 1794968082, "break_limit_up_times": 1}, {"code": "603657", "name": "春光科技", "price": 33.94, "change_pct": 10.02, "reason": "公司主营吸尘器、洗地机、扫地机器人、布衣清洗机等", "plates": ["家电"], "limit_up_days": 1, "turnover_ratio": 1.2, "first_limit_up": 1794965413, "break_limit_up_times": 1}, {"code": "000980", "name": "众泰汽车", "price": 1.67, "change_pct": 9.87, "reason": "公司全新A0级车型进入批量试制阶段", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 4.51, "first_limit_up": 1794966414, "break_limit_up_times": 0}, {"code": "600156", "name": "华升股份", "price": 8.09, "change_pct": 10.07, "reason": "公司拟6.62亿元购买易信科技97.40%股份，标的公司深耕AIDC领域，业务涉及智算中心双冷源阶梯冷却技术；一季报业绩同比减亏", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 14.47, "first_limit_up": 1794971697, "break_limit_up_times": 0}, {"code": "000815", "name": "美利云", "price": 14.31, "change_pct": 9.99, "reason": "公司主营业务为数据中心机柜租赁及机房运行维护服务。客户包括电信、美团、并行科技等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 10.52, "first_limit_up": 1794967527, "break_limit_up_times": 1}, {"code": "603324", "name": "盛剑科技", "price": 22.9, "change_pct": 9.99, "reason": "1、公司持续推进电子化学品材料研发、制备生产、客户验证等工作；电子化学品材料（主要为光刻胶剥离液）已经实现生产销售，光刻胶显影液（TMAH）回收技术在客户端测试验证成功；\n2、公司为华为武汉研发生产项目-海思光工厂洁净室提供工艺废气治理系统", "plates": ["光刻机（胶）"], "limit_up_days": 2, "turnover_ratio": 1.34, "first_limit_up": 1794965100, "break_limit_up_times": 0}, {"code": "000707", "name": "双环科技", "price": 5.05, "change_pct": 10.02, "reason": "公司主要生产与销售纯碱、氯化铵及其他化工产品，截至11月16日氯化铵工业级730元/吨创年内新高", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 14.94, "first_limit_up": 1794966144, "break_limit_up_times": 1}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》"};