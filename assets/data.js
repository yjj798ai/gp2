const UPDATE_TIME = "2026-11-27 02:41";
const THS_HOT = [
  {
    "name": "算力租赁",
    "rise": 5.07,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "东数西算(算力)",
    "rise": 4.31,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885957"
  },
  {
    "name": "华为盘古",
    "rise": 6.95,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886094"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 4.33,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续339天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": 2.77,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续268天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 2.92,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续31天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "华为昇腾",
    "rise": 6.31,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "软件ETF",
    "code": "886058"
  },
  {
    "name": "PCB概念",
    "rise": 3.55,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续162天上榜",
    "rankChg": -1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "华为欧拉",
    "rise": 6.58,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "885982"
  },
  {
    "name": "机器人概念",
    "rise": 2.66,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "连续30天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "创新药",
    "rise": 1.42,
    "rate": 0,
    "tag": "",
    "hotTag": "连续169天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "光刻胶",
    "rise": 4.07,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "华为概念",
    "rise": 3.38,
    "rate": 0,
    "tag": "26家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "885806"
  },
  {
    "name": "存储芯片",
    "rise": 5.04,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续292天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "猪肉",
    "rise": -0.83,
    "rate": 0,
    "tag": "",
    "hotTag": "连续32天上榜",
    "rankChg": -1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "短剧游戏",
    "rise": 0.94,
    "rate": 0,
    "tag": "",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "AI应用",
    "rise": 3.07,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "连续97天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "冰雪产业",
    "rise": 0.16,
    "rate": 0,
    "tag": "",
    "hotTag": "连续34天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "ST板块",
    "rise": 1.02,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "芯片概念",
    "rise": 3.84,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "连续49天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  }
];
const THS_EVENTS = [
  {
    "title": "学习时报：算力供给要避免“一哄而上”",
    "desc": "",
    "heat": 725667,
    "direction": "算力租赁",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "汉鑫科技",
        "code": "920092",
        "chg": 29.968288
      }
    ]
  },
  {
    "title": "事关阿斯麦在华业务 荷兰表态力阻美国MATCH法案",
    "desc": "",
    "heat": 684183,
    "direction": "光刻机",
    "themes": [
      "光刻机"
    ],
    "stocks": [
      {
        "name": "腾景科技",
        "code": "688195",
        "chg": 20.00469
      }
    ]
  },
  {
    "title": "英伟达暂停向东南亚四国交付AI服务器",
    "desc": "",
    "heat": 635783,
    "direction": "华为昇腾",
    "themes": [
      "华为昇腾",
      "华为概念"
    ],
    "stocks": [
      {
        "name": "汉鑫科技",
        "code": "920092",
        "chg": 29.968288
      }
    ]
  },
  {
    "title": "宇树王兴兴预测：5-10 年内中国机器人产量有望超汽车，年产量超 2000 万台",
    "desc": "",
    "heat": 446219,
    "direction": "人形机器人",
    "themes": [
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "润和软件",
        "code": "300339",
        "chg": 19.993082
      }
    ]
  },
  {
    "title": "《广东省算力发展“十五五”规划》发布：做强广深构筑算力创新策源地",
    "desc": "",
    "heat": 445982,
    "direction": "国产算力芯片",
    "themes": [
      "TPU",
      "CPU",
      "GPU"
    ],
    "stocks": [
      {
        "name": "艾布鲁",
        "code": "301259",
        "chg": 19.967132
      }
    ]
  },
  {
    "title": "全球超 30 人亲测：马斯克旗下 Neuralink 拿下美国首个植入式脑机关键性临床试验批文",
    "desc": "",
    "heat": 326876,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "百洋制药",
        "code": "301015",
        "chg": 13.873106
      }
    ]
  },
  {
    "title": "中疾控提醒：流感活动整体进入中流行水平",
    "desc": "",
    "heat": 118618,
    "direction": "流感",
    "themes": [
      "流感",
      "医药商业"
    ],
    "stocks": [
      {
        "name": "百洋制药",
        "code": "301015",
        "chg": 13.873106
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "高带宽存储器HBM",
    "change": "+6.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为盘古",
    "change": "+6.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磁电存储",
    "change": "+6.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "算力一体机",
    "change": "+6.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超节点",
    "change": "+6.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "财税改革",
    "change": "+5.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+5.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+5.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+5.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为昇腾",
    "change": "+5.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+5.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智谱AI",
    "change": "+5.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为云·鲲鹏",
    "change": "+5.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "RWA",
    "change": "+5.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "算力租赁",
    "change": "+5.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+5.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "金融科技",
    "change": "+5.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信创",
    "change": "+5.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "数字人民币",
    "change": "+5.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子发票",
    "change": "+5.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5872,
    "price": "10.65",
    "change": "-5.75",
    "market_id": "33",
    "circulate_market_value": "4803433400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 3.2
      },
      {
        "name": "手游",
        "change_pct": 1.69
      },
      {
        "name": "强势人气股",
        "change_pct": 0.17
      },
      {
        "name": "游戏",
        "change_pct": 1.2
      },
      {
        "name": "物联网",
        "change_pct": 3.53
      },
      {
        "name": "机器人",
        "change_pct": 2.92
      },
      {
        "name": "无人机",
        "change_pct": 2.83
      },
      {
        "name": "国产芯片",
        "change_pct": 4.05
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 3.8
      },
      {
        "name": "低空经济",
        "change_pct": 2.78
      },
      {
        "name": "无人物流车",
        "change_pct": 1.72
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 4,
    "hot_rank_chg": 2,
    "stock_cnt": 5872,
    "price": "8.10",
    "change": "0.12",
    "market_id": "33",
    "circulate_market_value": "8161473500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.27
      },
      {
        "name": "强势人气股",
        "change_pct": 0.17
      },
      {
        "name": "工业自动化",
        "change_pct": 2.78
      },
      {
        "name": "机械",
        "change_pct": 1.4
      },
      {
        "name": "智能制造",
        "change_pct": 2.93
      },
      {
        "name": "国产芯片",
        "change_pct": 4.05
      },
      {
        "name": "信创",
        "change_pct": 5.19
      },
      {
        "name": "AI算力芯片",
        "change_pct": 4.36
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 5,
    "hot_rank_chg": 70,
    "stock_cnt": 5872,
    "price": "12.36",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "12914813800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "界面财联社重组",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 3.07
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.88
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 0.69
      },
      {
        "name": "国企改革",
        "change_pct": 1.03
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 11,
    "hot_rank_chg": -2,
    "stock_cnt": 5872,
    "price": "3.99",
    "change": "-3.62",
    "market_id": "17",
    "circulate_market_value": "8849316200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 1.39
      },
      {
        "name": "强势人气股",
        "change_pct": 0.17
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.3
      },
      {
        "name": "光通信",
        "change_pct": 4.81
      },
      {
        "name": "林业",
        "change_pct": 0.42
      },
      {
        "name": "军民融合",
        "change_pct": 2.88
      },
      {
        "name": "军工",
        "change_pct": 2.8
      },
      {
        "name": "人造肉",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "002197",
    "name": "证通电子",
    "hot_rank": 13,
    "hot_rank_chg": 35,
    "stock_cnt": 5872,
    "price": "7.76",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "4143840100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 4.88
      },
      {
        "name": "深圳本地股",
        "change_pct": 2.12
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.01
      },
      {
        "name": "金融科技",
        "change_pct": 5.2
      },
      {
        "name": "网络安全",
        "change_pct": 4.98
      },
      {
        "name": "充电桩",
        "change_pct": 2.7
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.3
      },
      {
        "name": "移动支付",
        "change_pct": 4.19
      },
      {
        "name": "教育",
        "change_pct": 2.06
      },
      {
        "name": "智慧城市",
        "change_pct": 3.79
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.96
      },
      {
        "name": "LED",
        "change_pct": 2.6
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.43
      },
      {
        "name": "机器人",
        "change_pct": 2.92
      },
      {
        "name": "数字经济",
        "change_pct": 3.71
      },
      {
        "name": "国产芯片",
        "change_pct": 4.05
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 3.7
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.66
      },
      {
        "name": "信创",
        "change_pct": 5.19
      },
      {
        "name": "NFT",
        "change_pct": 1.65
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.96
      },
      {
        "name": "数字乡村",
        "change_pct": 3.34
      },
      {
        "name": "教育信息化",
        "change_pct": 2.82
      },
      {
        "name": "数字人民币",
        "change_pct": 5.1
      },
      {
        "name": "智慧政务",
        "change_pct": 4.88
      },
      {
        "name": "医疗信息化",
        "change_pct": 4.22
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 4.86
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 5.28
      },
      {
        "name": "智慧灯杆",
        "change_pct": 3.37
      },
      {
        "name": "华为产业链",
        "change_pct": 3.41
      },
      {
        "name": "算力租赁",
        "change_pct": 5.21
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 14,
    "hot_rank_chg": 20,
    "stock_cnt": 5872,
    "price": "4.51",
    "change": "2.97",
    "market_id": "33",
    "circulate_market_value": "11963003100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "装修装饰",
        "change_pct": 1.91
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.47
      },
      {
        "name": "破净股",
        "change_pct": 0.55
      },
      {
        "name": "航天",
        "change_pct": 2.83
      },
      {
        "name": "旧改",
        "change_pct": 1.86
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 15,
    "hot_rank_chg": -8,
    "stock_cnt": 5872,
    "price": "4.31",
    "change": "-9.64",
    "market_id": "33",
    "circulate_market_value": "6813986200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 1.65
      },
      {
        "name": "体外诊断",
        "change_pct": 1.55
      },
      {
        "name": "医疗器械",
        "change_pct": 1.83
      },
      {
        "name": "强势人气股",
        "change_pct": 0.17
      },
      {
        "name": "基因测序",
        "change_pct": 1.59
      },
      {
        "name": "预制菜",
        "change_pct": -0.8
      },
      {
        "name": "水产养殖",
        "change_pct": -4.05
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.38
      },
      {
        "name": "海洋经济",
        "change_pct": 1.23
      }
    ]
  },
  {
    "code": "600814",
    "name": "杭州解百",
    "hot_rank": 16,
    "hot_rank_chg": 1,
    "stock_cnt": 5872,
    "price": "9.48",
    "change": "3.16",
    "market_id": "17",
    "circulate_market_value": "6968545100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.27
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "浙江国企改革",
        "change_pct": 1.37
      },
      {
        "name": "国企改革",
        "change_pct": 1.01
      },
      {
        "name": "医美",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 17,
    "hot_rank_chg": 12,
    "stock_cnt": 5872,
    "price": "8.76",
    "change": "-6.91",
    "market_id": "17",
    "circulate_market_value": "5622021000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -0.38
      },
      {
        "name": "农业种植",
        "change_pct": -1.11
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.52
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.97
      },
      {
        "name": "休闲食品",
        "change_pct": -0.37
      },
      {
        "name": "食品",
        "change_pct": -0.07
      },
      {
        "name": "食品安全",
        "change_pct": 2.3
      },
      {
        "name": "社区团购",
        "change_pct": -0.84
      },
      {
        "name": "大农业",
        "change_pct": 0.23
      },
      {
        "name": "预制菜",
        "change_pct": -0.78
      },
      {
        "name": "人造肉",
        "change_pct": 0.01
      },
      {
        "name": "国企改革",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "603030",
    "name": "全筑股份",
    "hot_rank": 18,
    "hot_rank_chg": 14,
    "stock_cnt": 5872,
    "price": "3.16",
    "change": "10.11",
    "market_id": "17",
    "circulate_market_value": "4161509900.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "7",
    "change_reason": "边缘AI算力",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.45
      },
      {
        "name": "长三角一体化",
        "change_pct": 1.01
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "装修装饰",
        "change_pct": 1.96
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.53
      },
      {
        "name": "建筑节能",
        "change_pct": 1.69
      },
      {
        "name": "新型城镇化",
        "change_pct": 2.15
      },
      {
        "name": "低价股",
        "change_pct": 1.0
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 5.16
      },
      {
        "name": "旧改",
        "change_pct": 1.92
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 19,
    "hot_rank_chg": -6,
    "stock_cnt": 5872,
    "price": "3.78",
    "change": "-4.55",
    "market_id": "17",
    "circulate_market_value": "5522558500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.62
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "冷链",
        "change_pct": 0.96
      },
      {
        "name": "医药",
        "change_pct": 1.23
      },
      {
        "name": "食品",
        "change_pct": -0.07
      },
      {
        "name": "食品安全",
        "change_pct": 2.3
      },
      {
        "name": "预制菜",
        "change_pct": -0.78
      },
      {
        "name": "水产养殖",
        "change_pct": -3.95
      },
      {
        "name": "海洋经济",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "002548",
    "name": "金新农",
    "hot_rank": 20,
    "hot_rank_chg": -2,
    "stock_cnt": 5872,
    "price": "4.88",
    "change": "-8.44",
    "market_id": "33",
    "circulate_market_value": "3925820900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 0.03
      },
      {
        "name": "养猪",
        "change_pct": -0.94
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "大农业",
        "change_pct": 0.23
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 23,
    "hot_rank_chg": 13,
    "stock_cnt": 5872,
    "price": "8.82",
    "change": "4.63",
    "market_id": "33",
    "circulate_market_value": "9348804600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 0.83
      },
      {
        "name": "电子烟",
        "change_pct": 3.27
      },
      {
        "name": "一带一路",
        "change_pct": 1.24
      },
      {
        "name": "造纸",
        "change_pct": 1.38
      },
      {
        "name": "包装印刷",
        "change_pct": 2.04
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.5
      },
      {
        "name": "太空算力",
        "change_pct": 2.32
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 24,
    "hot_rank_chg": 4,
    "stock_cnt": 5872,
    "price": "2.77",
    "change": "4.53",
    "market_id": "17",
    "circulate_market_value": "7928771100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 1.59
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "游戏",
        "change_pct": 1.13
      },
      {
        "name": "影视",
        "change_pct": 0.18
      },
      {
        "name": "低价股",
        "change_pct": 1.0
      },
      {
        "name": "国企改革",
        "change_pct": 1.01
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.06
      },
      {
        "name": "AI视频",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "002651",
    "name": "利君股份",
    "hot_rank": 27,
    "hot_rank_chg": 53,
    "stock_cnt": 5872,
    "price": "9.56",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "5405832400.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "业绩爆雷",
        "change_pct": 2.03
      },
      {
        "name": "通用航空",
        "change_pct": 2.48
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "大飞机",
        "change_pct": 2.42
      },
      {
        "name": "军工",
        "change_pct": 2.73
      },
      {
        "name": "无人机",
        "change_pct": 2.76
      },
      {
        "name": "航天",
        "change_pct": 2.72
      }
    ]
  },
  {
    "code": "600280",
    "name": "中央商场",
    "hot_rank": 30,
    "hot_rank_chg": 54,
    "stock_cnt": 5872,
    "price": "3.35",
    "change": "8.06",
    "market_id": "17",
    "circulate_market_value": "3779921500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "002122",
    "name": "汇洲智能",
    "hot_rank": 31,
    "hot_rank_chg": 4,
    "stock_cnt": 5872,
    "price": "4.18",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "8304914000.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "具身智能数据",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 2.04
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "人工智能",
        "change_pct": 3.25
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.18
      },
      {
        "name": "智慧停车",
        "change_pct": 3.23
      },
      {
        "name": "大数据",
        "change_pct": 4.05
      },
      {
        "name": "风电",
        "change_pct": 1.4
      },
      {
        "name": "复牌股",
        "change_pct": 0.93
      },
      {
        "name": "智能制造",
        "change_pct": 2.85
      },
      {
        "name": "工业母机",
        "change_pct": 2.64
      }
    ]
  },
  {
    "code": "000889",
    "name": "中嘉博创",
    "hot_rank": 32,
    "hot_rank_chg": 53,
    "stock_cnt": 5872,
    "price": "4.30",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "3740137600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "算力销售",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 5.12
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 3.68
      },
      {
        "name": "华为产业链",
        "change_pct": 3.31
      },
      {
        "name": "Kimi概念",
        "change_pct": 2.34
      },
      {
        "name": "智谱AI",
        "change_pct": 5.21
      },
      {
        "name": "区块链",
        "change_pct": 3.66
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 33,
    "hot_rank_chg": 19,
    "stock_cnt": 5872,
    "price": "3.46",
    "change": "-2.82",
    "market_id": "17",
    "circulate_market_value": "4407719300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.89
      },
      {
        "name": "化肥",
        "change_pct": -0.34
      },
      {
        "name": "保健品",
        "change_pct": 0.21
      },
      {
        "name": "民营医院",
        "change_pct": 1.07
      },
      {
        "name": "医药",
        "change_pct": 1.23
      },
      {
        "name": "煤化工",
        "change_pct": -1.03
      },
      {
        "name": "食品",
        "change_pct": -0.07
      },
      {
        "name": "大农业",
        "change_pct": 0.23
      },
      {
        "name": "干细胞",
        "change_pct": 1.63
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 1.39
      }
    ]
  },
  {
    "code": "603278",
    "name": "大业股份",
    "hot_rank": 35,
    "hot_rank_chg": 34,
    "stock_cnt": 5872,
    "price": "12.19",
    "change": "1.67",
    "market_id": "17",
    "circulate_market_value": "4162629400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "轮胎",
        "change_pct": 0.73
      },
      {
        "name": "风电",
        "change_pct": 1.4
      },
      {
        "name": "航天",
        "change_pct": 2.72
      },
      {
        "name": "人形机器人",
        "change_pct": 2.91
      }
    ]
  },
  {
    "code": "002639",
    "name": "雪人集团",
    "hot_rank": 38,
    "hot_rank_chg": 2,
    "stock_cnt": 5872,
    "price": "12.19",
    "change": "-3.41",
    "market_id": "33",
    "circulate_market_value": "8046944400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 1.39
      },
      {
        "name": "体育产业",
        "change_pct": 1.49
      },
      {
        "name": "一带一路",
        "change_pct": 1.24
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.18
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.78
      },
      {
        "name": "天然气",
        "change_pct": 0.58
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.56
      },
      {
        "name": "冷链",
        "change_pct": 0.96
      },
      {
        "name": "地热",
        "change_pct": 1.29
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.43
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.57
      },
      {
        "name": "热泵",
        "change_pct": 1.95
      },
      {
        "name": "华为产业链",
        "change_pct": 3.31
      },
      {
        "name": "自贸区",
        "change_pct": 0.49
      },
      {
        "name": "核聚变",
        "change_pct": 2.2
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.57
      },
      {
        "name": "磁悬浮压缩机",
        "change_pct": 2.94
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "002470",
    "name": "金正大",
    "hot_rank": 39,
    "hot_rank_chg": 129,
    "stock_cnt": 5872,
    "price": "1.76",
    "change": "0.57",
    "market_id": "33",
    "circulate_market_value": "5782912400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "磷化工",
        "change_pct": 0.38
      },
      {
        "name": "锂电池",
        "change_pct": 2.54
      },
      {
        "name": "化肥",
        "change_pct": -0.34
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.91
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.37
      },
      {
        "name": "大农业",
        "change_pct": 0.23
      },
      {
        "name": "低价股",
        "change_pct": 1.0
      },
      {
        "name": "数字乡村",
        "change_pct": 3.26
      },
      {
        "name": "国企改革",
        "change_pct": 1.01
      },
      {
        "name": "磷酸铁锂",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "000993",
    "name": "闽东电力",
    "hot_rank": 42,
    "hot_rank_chg": 115,
    "stock_cnt": 5872,
    "price": "10.80",
    "change": "-2.70",
    "market_id": "33",
    "circulate_market_value": "4945875700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 0.41
      },
      {
        "name": "水电",
        "change_pct": 0.56
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.78
      },
      {
        "name": "有色 · 钼",
        "change_pct": 2.29
      },
      {
        "name": "光伏",
        "change_pct": 1.59
      },
      {
        "name": "风电",
        "change_pct": 1.4
      },
      {
        "name": "有色金属",
        "change_pct": 2.23
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 2.64
      },
      {
        "name": "船舶",
        "change_pct": 0.74
      },
      {
        "name": "自贸区",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "300324",
    "name": "旋极信息",
    "hot_rank": 43,
    "hot_rank_chg": -16,
    "stock_cnt": 5872,
    "price": "5.72",
    "change": "13.49",
    "market_id": "33",
    "circulate_market_value": "9781104800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.98
      },
      {
        "name": "数字孪生",
        "change_pct": 3.25
      },
      {
        "name": "半导体",
        "change_pct": 4.69
      },
      {
        "name": "国产软件",
        "change_pct": 4.81
      },
      {
        "name": "人工智能",
        "change_pct": 3.25
      },
      {
        "name": "网络安全",
        "change_pct": 4.89
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.18
      },
      {
        "name": "大飞机",
        "change_pct": 2.42
      },
      {
        "name": "北斗导航",
        "change_pct": 3.11
      },
      {
        "name": "军民融合",
        "change_pct": 2.8
      },
      {
        "name": "京津冀",
        "change_pct": 2.1
      },
      {
        "name": "物联网",
        "change_pct": 3.48
      },
      {
        "name": "大数据",
        "change_pct": 4.05
      },
      {
        "name": "智慧城市",
        "change_pct": 3.76
      },
      {
        "name": "电子发票",
        "change_pct": 4.91
      },
      {
        "name": "军工",
        "change_pct": 2.73
      },
      {
        "name": "无人机",
        "change_pct": 2.76
      },
      {
        "name": "智能制造",
        "change_pct": 2.85
      },
      {
        "name": "工业互联网",
        "change_pct": 2.75
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 3.64
      },
      {
        "name": "国产芯片",
        "change_pct": 3.88
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.57
      },
      {
        "name": "信创",
        "change_pct": 5.1
      },
      {
        "name": "BIPV概念",
        "change_pct": 1.57
      },
      {
        "name": "航天",
        "change_pct": 2.72
      },
      {
        "name": "数字人民币",
        "change_pct": 5.01
      },
      {
        "name": "智慧政务",
        "change_pct": 4.79
      },
      {
        "name": "医疗信息化",
        "change_pct": 4.15
      },
      {
        "name": "云游戏",
        "change_pct": 2.52
      },
      {
        "name": "华为产业链",
        "change_pct": 3.31
      },
      {
        "name": "物理AI",
        "change_pct": 3.94
      },
      {
        "name": "时空大数据",
        "change_pct": 4.23
      },
      {
        "name": "AI算力芯片",
        "change_pct": 4.17
      },
      {
        "name": "军工信息化",
        "change_pct": 4.05
      },
      {
        "name": "财税改革",
        "change_pct": 5.61
      },
      {
        "name": "区块链",
        "change_pct": 3.66
      }
    ]
  },
  {
    "code": "002872",
    "name": "天圣制药",
    "hot_rank": 44,
    "hot_rank_chg": 82,
    "stock_cnt": 5872,
    "price": "8.59",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "1846146800.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "摘帽",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.62
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.88
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.04
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "复牌股",
        "change_pct": 0.93
      },
      {
        "name": "医药",
        "change_pct": 1.23
      },
      {
        "name": "肝炎概念",
        "change_pct": 1.11
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.34
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 46,
    "hot_rank_chg": 3,
    "stock_cnt": 5872,
    "price": "3.83",
    "change": "-4.96",
    "market_id": "17",
    "circulate_market_value": "5113252900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.56
      },
      {
        "name": "物联网",
        "change_pct": 3.48
      },
      {
        "name": "LED",
        "change_pct": 2.55
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.5
      }
    ]
  },
  {
    "code": "002199",
    "name": "东晶电子",
    "hot_rank": 48,
    "hot_rank_chg": 77,
    "stock_cnt": 5872,
    "price": "11.85",
    "change": "4.96",
    "market_id": "33",
    "circulate_market_value": "2736189800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 3.6
      },
      {
        "name": "锂电池",
        "change_pct": 2.54
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.04
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.37
      }
    ]
  },
  {
    "code": "600567",
    "name": "山鹰国际",
    "hot_rank": 49,
    "hot_rank_chg": 92,
    "stock_cnt": 5872,
    "price": "1.11",
    "change": "9.90",
    "market_id": "17",
    "circulate_market_value": "6888058500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "要约收购",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 3.01
      },
      {
        "name": "造纸",
        "change_pct": 1.38
      },
      {
        "name": "包装印刷",
        "change_pct": 2.04
      },
      {
        "name": "固废处理",
        "change_pct": 1.38
      },
      {
        "name": "复牌股",
        "change_pct": 0.93
      },
      {
        "name": "环保",
        "change_pct": 1.83
      },
      {
        "name": "人民币升值受益",
        "change_pct": 0.34
      },
      {
        "name": "破净股",
        "change_pct": 0.55
      },
      {
        "name": "数字经济",
        "change_pct": 3.64
      },
      {
        "name": "低价股",
        "change_pct": 1.0
      },
      {
        "name": "回购增持再贷款",
        "change_pct": 0.91
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 50,
    "hot_rank_chg": -3,
    "stock_cnt": 5872,
    "price": "3.96",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "5169660900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "高速公路",
        "change_pct": -0.76
      },
      {
        "name": "振兴东北",
        "change_pct": 0.19
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 51,
    "hot_rank_chg": 0,
    "stock_cnt": 5872,
    "price": "10.85",
    "change": "-7.97",
    "market_id": "17",
    "circulate_market_value": "7226100000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 52,
    "hot_rank_chg": 15,
    "stock_cnt": 5872,
    "price": "9.02",
    "change": "3.32",
    "market_id": "33",
    "circulate_market_value": "4339876800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 1.52
      },
      {
        "name": "医疗器械",
        "change_pct": 1.8
      },
      {
        "name": "锂电池",
        "change_pct": 2.54
      },
      {
        "name": "基因测序",
        "change_pct": 1.52
      },
      {
        "name": "PCB板",
        "change_pct": 3.73
      },
      {
        "name": "医药",
        "change_pct": 1.23
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.37
      },
      {
        "name": "化学原料药",
        "change_pct": 1.1
      },
      {
        "name": "食品安全",
        "change_pct": 2.3
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.51
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 5.16
      },
      {
        "name": "异丙醇",
        "change_pct": 1.22
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.34
      },
      {
        "name": "磷酸铁锂",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 54,
    "hot_rank_chg": -21,
    "stock_cnt": 5872,
    "price": "6.30",
    "change": "4.48",
    "market_id": "17",
    "circulate_market_value": "29074239000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 2.38
      },
      {
        "name": "国产软件",
        "change_pct": 4.81
      },
      {
        "name": "锂电池",
        "change_pct": 2.54
      },
      {
        "name": "人工智能",
        "change_pct": 3.25
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.18
      },
      {
        "name": "养老产业",
        "change_pct": 1.8
      },
      {
        "name": "大飞机",
        "change_pct": 2.42
      },
      {
        "name": "军民融合",
        "change_pct": 2.8
      },
      {
        "name": "物联网",
        "change_pct": 3.48
      },
      {
        "name": "大数据",
        "change_pct": 4.05
      },
      {
        "name": "智慧城市",
        "change_pct": 3.76
      },
      {
        "name": "军工",
        "change_pct": 2.73
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.37
      },
      {
        "name": "机器人",
        "change_pct": 2.84
      },
      {
        "name": "黑色家电",
        "change_pct": 1.76
      },
      {
        "name": "家电",
        "change_pct": 1.29
      },
      {
        "name": "储能",
        "change_pct": 2.28
      },
      {
        "name": "智能制造",
        "change_pct": 2.85
      },
      {
        "name": "工业互联网",
        "change_pct": 2.75
      },
      {
        "name": "数字经济",
        "change_pct": 3.64
      },
      {
        "name": "百度概念股",
        "change_pct": 2.25
      },
      {
        "name": "NFT",
        "change_pct": 1.63
      },
      {
        "name": "跨境支付",
        "change_pct": 5.33
      },
      {
        "name": "华为海思",
        "change_pct": 4.51
      },
      {
        "name": "云游戏",
        "change_pct": 2.52
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.28
      },
      {
        "name": "华为产业链",
        "change_pct": 3.31
      },
      {
        "name": "毫米波雷达",
        "change_pct": 2.59
      },
      {
        "name": "服务器",
        "change_pct": 4.49
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 3.17
      },
      {
        "name": "星闪概念",
        "change_pct": 3.56
      },
      {
        "name": "低空经济",
        "change_pct": 2.69
      }
    ]
  },
  {
    "code": "003040",
    "name": "楚天龙",
    "hot_rank": 55,
    "hot_rank_chg": 130,
    "stock_cnt": 5872,
    "price": "12.18",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "5564436100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "eSIM",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 3.13
      },
      {
        "name": "金融科技",
        "change_pct": 5.12
      },
      {
        "name": "人工智能",
        "change_pct": 3.25
      },
      {
        "name": "物联网",
        "change_pct": 3.48
      },
      {
        "name": "数字经济",
        "change_pct": 3.64
      },
      {
        "name": "国产操作系统",
        "change_pct": 4.6
      },
      {
        "name": "电子身份证",
        "change_pct": 4.78
      },
      {
        "name": "数字人民币",
        "change_pct": 5.01
      },
      {
        "name": "智慧政务",
        "change_pct": 4.79
      },
      {
        "name": "eSIM",
        "change_pct": 4.44
      },
      {
        "name": "华为产业链",
        "change_pct": 3.31
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 3.17
      },
      {
        "name": "区块链",
        "change_pct": 3.66
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 57,
    "hot_rank_chg": 29,
    "stock_cnt": 5872,
    "price": "4.49",
    "change": "-3.65",
    "market_id": "17",
    "circulate_market_value": "3972660000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.27
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.88
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "信托",
        "change_pct": 0.5
      },
      {
        "name": "民营医院",
        "change_pct": 1.07
      },
      {
        "name": "汽车销售",
        "change_pct": 0.77
      },
      {
        "name": "社区团购",
        "change_pct": -0.84
      },
      {
        "name": "大金融",
        "change_pct": -0.09
      },
      {
        "name": "餐饮",
        "change_pct": -0.21
      },
      {
        "name": "首发经济",
        "change_pct": 0.37
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 58,
    "hot_rank_chg": 142,
    "stock_cnt": 5872,
    "price": "8.31",
    "change": "-1.07",
    "market_id": "17",
    "circulate_market_value": "3448501400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 3.13
      },
      {
        "name": "5G",
        "change_pct": 3.71
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.18
      },
      {
        "name": "LED",
        "change_pct": 2.55
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.5
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": 3.51
      }
    ]
  },
  {
    "code": "600185",
    "name": "珠免集团",
    "hot_rank": 66,
    "hot_rank_chg": 96,
    "stock_cnt": 5872,
    "price": "4.90",
    "change": "4.03",
    "market_id": "17",
    "circulate_market_value": "9236528400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.45
      },
      {
        "name": "房地产",
        "change_pct": 1.07
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 2.03
      },
      {
        "name": "复牌股",
        "change_pct": 0.93
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.37
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.09
      },
      {
        "name": "横琴新区",
        "change_pct": 1.48
      },
      {
        "name": "免税店概念",
        "change_pct": 0.12
      },
      {
        "name": "自贸区",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "002642",
    "name": "荣联科技",
    "hot_rank": 67,
    "hot_rank_chg": -24,
    "stock_cnt": 5872,
    "price": "9.16",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "6060075700.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "4",
    "change_reason": "存储设备集采",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 3.13
      },
      {
        "name": "边缘计算",
        "change_pct": 4.48
      },
      {
        "name": "泛在电力物联网",
        "change_pct": 2.98
      },
      {
        "name": "数字孪生",
        "change_pct": 3.25
      },
      {
        "name": "精准医疗",
        "change_pct": 1.61
      },
      {
        "name": "国产软件",
        "change_pct": 4.81
      },
      {
        "name": "金融科技",
        "change_pct": 5.12
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "人工智能",
        "change_pct": 3.25
      },
      {
        "name": "网络安全",
        "change_pct": 4.89
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.18
      },
      {
        "name": "基因测序",
        "change_pct": 1.52
      },
      {
        "name": "物联网",
        "change_pct": 3.48
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.91
      },
      {
        "name": "大数据",
        "change_pct": 4.05
      },
      {
        "name": "智慧城市",
        "change_pct": 3.76
      },
      {
        "name": "智慧物流",
        "change_pct": 1.85
      },
      {
        "name": "智能制造",
        "change_pct": 2.85
      },
      {
        "name": "工业互联网",
        "change_pct": 2.75
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 3.64
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.57
      },
      {
        "name": "信创",
        "change_pct": 5.1
      },
      {
        "name": "国资云",
        "change_pct": 3.68
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.87
      },
      {
        "name": "数字乡村",
        "change_pct": 3.26
      },
      {
        "name": "国企改革",
        "change_pct": 1.01
      },
      {
        "name": "智慧政务",
        "change_pct": 4.79
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.34
      },
      {
        "name": "远程办公",
        "change_pct": 3.42
      },
      {
        "name": "华为产业链",
        "change_pct": 3.31
      },
      {
        "name": "算力租赁",
        "change_pct": 5.1
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 3.17
      },
      {
        "name": "星闪概念",
        "change_pct": 3.56
      }
    ]
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 68,
    "hot_rank_chg": 37,
    "stock_cnt": 5872,
    "price": "9.26",
    "change": "3.93",
    "market_id": "17",
    "circulate_market_value": "5574792400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 4.18
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 3.61
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.57
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.87
      },
      {
        "name": "华为产业链",
        "change_pct": 3.31
      },
      {
        "name": "算力租赁",
        "change_pct": 5.1
      }
    ]
  },
  {
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 69,
    "hot_rank_chg": -11,
    "stock_cnt": 5872,
    "price": "10.00",
    "change": "3.52",
    "market_id": "17",
    "circulate_market_value": "4021107000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.45
      },
      {
        "name": "强势人气股",
        "change_pct": 0.19
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.18
      },
      {
        "name": "纺织服装",
        "change_pct": 0.84
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.52
      },
      {
        "name": "外贸受益概念",
        "change_pct": 2.04
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.87
      },
      {
        "name": "国企改革",
        "change_pct": 1.01
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.34
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.57
      }
    ]
  },
  {
    "code": "600229",
    "name": "城市传媒",
    "hot_rank": 71,
    "hot_rank_chg": 126,
    "stock_cnt": 5872,
    "price": "5.79",
    "change": "-2.52",
    "market_id": "17",
    "circulate_market_value": "3832105100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 3.25
      },
      {
        "name": "VR&AR",
        "change_pct": 3.3
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.91
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 0.65
      },
      {
        "name": "AIGC概念",
        "change_pct": 2.8
      },
      {
        "name": "数据要素",
        "change_pct": 4.23
      },
      {
        "name": "国企改革",
        "change_pct": 1.01
      },
      {
        "name": "在线教育",
        "change_pct": 2.79
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "002144",
    "name": "宏达高科",
    "hot_rank": 73,
    "hot_rank_chg": 173,
    "stock_cnt": 5872,
    "price": "10.99",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "1512874600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 1.52
      },
      {
        "name": "医疗器械",
        "change_pct": 1.8
      },
      {
        "name": "纺织服装",
        "change_pct": 0.84
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.26
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.37
      },
      {
        "name": "机器人",
        "change_pct": 2.84
      },
      {
        "name": "破净股",
        "change_pct": 0.55
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.45
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 74,
    "hot_rank_chg": -1,
    "stock_cnt": 5872,
    "price": "9.49",
    "change": "8.58",
    "market_id": "17",
    "circulate_market_value": "16978922000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.32
      },
      {
        "name": "纯碱",
        "change_pct": 0.26
      },
      {
        "name": "食品",
        "change_pct": -0.07
      },
      {
        "name": "土壤修复",
        "change_pct": 1.99
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.87
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 5.49
      },
      {
        "name": "算力租赁",
        "change_pct": 5.1
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 4.92
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 76,
    "hot_rank_chg": 7,
    "stock_cnt": 5872,
    "price": "6.40",
    "change": "-2.29",
    "market_id": "33",
    "circulate_market_value": "4657698500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 0.96
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.53
      },
      {
        "name": "风电",
        "change_pct": 1.4
      },
      {
        "name": "环氧丙烷",
        "change_pct": 1.38
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.97
      },
      {
        "name": "建筑节能",
        "change_pct": 1.69
      },
      {
        "name": "旧改",
        "change_pct": 1.92
      }
    ]
  },
  {
    "code": "002298",
    "name": "中电鑫龙",
    "hot_rank": 77,
    "hot_rank_chg": 219,
    "stock_cnt": 5872,
    "price": "7.76",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "5162922100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "算力基础设施",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.98
      },
      {
        "name": "国产软件",
        "change_pct": 4.81
      },
      {
        "name": "锂电池",
        "change_pct": 2.54
      },
      {
        "name": "人工智能",
        "change_pct": 3.25
      },
      {
        "name": "充电桩",
        "change_pct": 2.62
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.18
      },
      {
        "name": "军民融合",
        "change_pct": 2.8
      },
      {
        "name": "磁悬浮",
        "change_pct": 2.12
      },
      {
        "name": "人脸识别",
        "change_pct": 3.24
      },
      {
        "name": "水利",
        "change_pct": 1.68
      },
      {
        "name": "物联网",
        "change_pct": 3.48
      },
      {
        "name": "大数据",
        "change_pct": 4.05
      },
      {
        "name": "智慧城市",
        "change_pct": 3.76
      },
      {
        "name": "军工",
        "change_pct": 2.73
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.37
      },
      {
        "name": "储能",
        "change_pct": 2.28
      },
      {
        "name": "智慧安防",
        "change_pct": 3.45
      },
      {
        "name": "无人机",
        "change_pct": 2.76
      },
      {
        "name": "虚拟电厂",
        "change_pct": 2.79
      },
      {
        "name": "信创",
        "change_pct": 5.1
      },
      {
        "name": "元宇宙",
        "change_pct": 2.91
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.87
      },
      {
        "name": "新型城镇化",
        "change_pct": 2.15
      },
      {
        "name": "AIGC概念",
        "change_pct": 2.8
      },
      {
        "name": "数字乡村",
        "change_pct": 3.26
      },
      {
        "name": "华为海思",
        "change_pct": 4.51
      },
      {
        "name": "闪存",
        "change_pct": 4.67
      },
      {
        "name": "UWB超宽带",
        "change_pct": 3.46
      },
      {
        "name": "智慧政务",
        "change_pct": 4.79
      },
      {
        "name": "特高压",
        "change_pct": 1.73
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 5.21
      },
      {
        "name": "华为产业链",
        "change_pct": 3.31
      },
      {
        "name": "时空大数据",
        "change_pct": 4.23
      },
      {
        "name": "服务器",
        "change_pct": 4.49
      },
      {
        "name": "智能电网",
        "change_pct": 2.84
      },
      {
        "name": "磁电存储",
        "change_pct": 6.39
      },
      {
        "name": "军工信息化",
        "change_pct": 4.05
      },
      {
        "name": "光纤概念",
        "change_pct": 4.13
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 83,
    "hot_rank_chg": -17,
    "stock_cnt": 5872,
    "price": "8.69",
    "change": "-4.92",
    "market_id": "33",
    "circulate_market_value": "4928378300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 2.76
      },
      {
        "name": "军民融合",
        "change_pct": 2.8
      },
      {
        "name": "物联网",
        "change_pct": 3.48
      },
      {
        "name": "LED",
        "change_pct": 2.55
      },
      {
        "name": "军工",
        "change_pct": 2.73
      },
      {
        "name": "智慧灯杆",
        "change_pct": 3.37
      },
      {
        "name": "海洋经济",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "000798",
    "name": "中水渔业",
    "hot_rank": 84,
    "hot_rank_chg": 215,
    "stock_cnt": 5872,
    "price": "8.10",
    "change": "-6.36",
    "market_id": "33",
    "circulate_market_value": "2963273300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.13
      },
      {
        "name": "人工智能",
        "change_pct": 3.25
      },
      {
        "name": "社区团购",
        "change_pct": -0.84
      },
      {
        "name": "预制菜",
        "change_pct": -0.78
      },
      {
        "name": "国企改革",
        "change_pct": 1.01
      },
      {
        "name": "水产养殖",
        "change_pct": -3.95
      },
      {
        "name": "海洋经济",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "000711",
    "name": "京蓝科技",
    "hot_rank": 85,
    "hot_rank_chg": -7,
    "stock_cnt": 5872,
    "price": "4.21",
    "change": "2.19",
    "market_id": "33",
    "circulate_market_value": "9923032600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 2.23
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.04
      },
      {
        "name": "物联网",
        "change_pct": 3.48
      },
      {
        "name": "大数据",
        "change_pct": 4.05
      },
      {
        "name": "固废处理",
        "change_pct": 1.38
      },
      {
        "name": "智慧城市",
        "change_pct": 3.76
      },
      {
        "name": "有色 · 锌",
        "change_pct": 2.83
      },
      {
        "name": "有色金属",
        "change_pct": 2.23
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": 1.83
      },
      {
        "name": "土壤修复",
        "change_pct": 1.99
      },
      {
        "name": "磷化铟",
        "change_pct": 2.76
      }
    ]
  },
  {
    "code": "002226",
    "name": "江南化工",
    "hot_rank": 86,
    "hot_rank_chg": 124,
    "stock_cnt": 5872,
    "price": "5.70",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "15098834000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.13
      },
      {
        "name": "一带一路",
        "change_pct": 1.24
      },
      {
        "name": "人工智能",
        "change_pct": 3.25
      },
      {
        "name": "军工集团",
        "change_pct": 2.59
      },
      {
        "name": "民爆",
        "change_pct": 1.48
      },
      {
        "name": "风电",
        "change_pct": 1.4
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.26
      },
      {
        "name": "军工",
        "change_pct": 2.73
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 1.01
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 1.26
      }
    ]
  },
  {
    "code": "603708",
    "name": "家家悦",
    "hot_rank": 87,
    "hot_rank_chg": 49,
    "stock_cnt": 5872,
    "price": "10.07",
    "change": "-5.45",
    "market_id": "17",
    "circulate_market_value": "6234421900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.22
      },
      {
        "name": "社区团购",
        "change_pct": -0.86
      },
      {
        "name": "大消费",
        "change_pct": -0.55
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 88,
    "hot_rank_chg": -31,
    "stock_cnt": 5872,
    "price": "8.72",
    "change": "-3.11",
    "market_id": "17",
    "circulate_market_value": "7089779400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.12
      },
      {
        "name": "充电桩",
        "change_pct": 2.59
      },
      {
        "name": "光伏",
        "change_pct": 1.56
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.32
      },
      {
        "name": "家电",
        "change_pct": 1.23
      },
      {
        "name": "储能",
        "change_pct": 2.25
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 1.89
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 4.74
      },
      {
        "name": "厨卫家电",
        "change_pct": 0.08
      },
      {
        "name": "华为产业链",
        "change_pct": 3.27
      }
    ]
  },
  {
    "code": "000912",
    "name": "泸天化",
    "hot_rank": 91,
    "hot_rank_chg": 231,
    "stock_cnt": 5872,
    "price": "3.16",
    "change": "-3.36",
    "market_id": "33",
    "circulate_market_value": "4954880000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.95
      },
      {
        "name": "化肥",
        "change_pct": -0.41
      },
      {
        "name": "破净股",
        "change_pct": 0.54
      },
      {
        "name": "煤化工",
        "change_pct": -1.02
      },
      {
        "name": "大农业",
        "change_pct": 0.2
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 92,
    "hot_rank_chg": -3,
    "stock_cnt": 5872,
    "price": "4.71",
    "change": "-2.89",
    "market_id": "17",
    "circulate_market_value": "11862181500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.38
      },
      {
        "name": "工业大麻",
        "change_pct": 0.71
      },
      {
        "name": "中药",
        "change_pct": 0.59
      },
      {
        "name": "保健品",
        "change_pct": 0.17
      },
      {
        "name": "民营医院",
        "change_pct": 1.02
      },
      {
        "name": "医药",
        "change_pct": 1.16
      },
      {
        "name": "化学原料药",
        "change_pct": 1.06
      },
      {
        "name": "流感",
        "change_pct": 0.82
      },
      {
        "name": "振兴东北",
        "change_pct": 0.17
      },
      {
        "name": "食品",
        "change_pct": -0.1
      },
      {
        "name": "肝炎概念",
        "change_pct": 1.08
      }
    ]
  },
  {
    "code": "002728",
    "name": "特一药业",
    "hot_rank": 94,
    "hot_rank_chg": 24,
    "stock_cnt": 5872,
    "price": "8.17",
    "change": "-5.44",
    "market_id": "33",
    "circulate_market_value": "4095693800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.59
      },
      {
        "name": "医药",
        "change_pct": 1.16
      },
      {
        "name": "化学原料药",
        "change_pct": 1.06
      },
      {
        "name": "流感",
        "change_pct": 0.82
      },
      {
        "name": "长寿药NMN",
        "change_pct": -0.3
      },
      {
        "name": "肝炎概念",
        "change_pct": 1.08
      },
      {
        "name": "医美",
        "change_pct": 0.42
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.28
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 95,
    "hot_rank_chg": 51,
    "stock_cnt": 5872,
    "price": "3.63",
    "change": "-1.36",
    "market_id": "17",
    "circulate_market_value": "4212769100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": 0.8
      },
      {
        "name": "浙江国企改革",
        "change_pct": 1.34
      },
      {
        "name": "影视",
        "change_pct": -0.04
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 0.99
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.88
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "42.34", "change": "1.05", "market_id": "33", "circulate_market_value": "32253157000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002148", "name": "北纬科技", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "10.65", "change": "-5.75", "market_id": "33", "circulate_market_value": "4803433400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 3.2}, {"name": "手游", "change_pct": 1.69}, {"name": "强势人气股", "change_pct": 0.17}, {"name": "游戏", "change_pct": 1.2}, {"name": "物联网", "change_pct": 3.53}, {"name": "机器人", "change_pct": 2.92}, {"name": "无人机", "change_pct": 2.83}, {"name": "国产芯片", "change_pct": 4.05}, {"name": "5G消息/RCS", "change_pct": 3.8}, {"name": "低空经济", "change_pct": 2.78}, {"name": "无人物流车", "change_pct": 1.72}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "15.54", "change": "-3.90", "market_id": "33", "circulate_market_value": "9325813900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002685", "name": "华东重机", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "8.10", "change": "0.12", "market_id": "33", "circulate_market_value": "8161473500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.27}, {"name": "强势人气股", "change_pct": 0.17}, {"name": "工业自动化", "change_pct": 2.78}, {"name": "机械", "change_pct": 1.4}, {"name": "智能制造", "change_pct": 2.93}, {"name": "国产芯片", "change_pct": 4.05}, {"name": "信创", "change_pct": 5.19}, {"name": "AI算力芯片", "change_pct": 4.36}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 5, "hot_rank_chg": 70, "stock_cnt": 5872, "price": "12.36", "change": "9.96", "market_id": "17", "circulate_market_value": "12914813800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "界面财联社重组", "xgb_concepts": [{"name": "资产重组", "change_pct": 3.07}, {"name": "上海国企改革", "change_pct": 0.88}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 0.69}, {"name": "国企改革", "change_pct": 1.03}]}, {"code": "000158", "name": "常山北明", "hot_rank": 6, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "15.27", "change": "10.01", "market_id": "33", "circulate_market_value": "24289128000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "华为昇腾"}, {"code": "600722", "name": "金牛化工", "hot_rank": 7, "hot_rank_chg": 4, "stock_cnt": 5872, "price": "15.09", "change": "4.29", "market_id": "17", "circulate_market_value": "10266023900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "20.20", "change": "5.04", "market_id": "33", "circulate_market_value": "11785452800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "21.35", "change": "-2.78", "market_id": "33", "circulate_market_value": "9812711900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 10, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "20.90", "change": "10.00", "market_id": "17", "circulate_market_value": "22916739000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为昇腾"}, {"code": "600103", "name": "青山纸业", "hot_rank": 11, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "3.99", "change": "-3.62", "market_id": "17", "circulate_market_value": "8849316200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 1.39}, {"name": "强势人气股", "change_pct": 0.17}, {"name": "云计算数据中心", "change_pct": 4.3}, {"name": "光通信", "change_pct": 4.81}, {"name": "林业", "change_pct": 0.42}, {"name": "军民融合", "change_pct": 2.88}, {"name": "军工", "change_pct": 2.8}, {"name": "人造肉", "change_pct": 0.01}]}, {"code": "603960", "name": "克来机电", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "21.39", "change": "4.55", "market_id": "17", "circulate_market_value": "5608413100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002197", "name": "证通电子", "hot_rank": 13, "hot_rank_chg": 35, "stock_cnt": 5872, "price": "7.76", "change": "10.07", "market_id": "33", "circulate_market_value": "4143840100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "算力租赁", "xgb_concepts": [{"name": "国产软件", "change_pct": 4.88}, {"name": "深圳本地股", "change_pct": 2.12}, {"name": "ST摘帽", "change_pct": 2.01}, {"name": "金融科技", "change_pct": 5.2}, {"name": "网络安全", "change_pct": 4.98}, {"name": "充电桩", "change_pct": 2.7}, {"name": "云计算数据中心", "change_pct": 4.3}, {"name": "移动支付", "change_pct": 4.19}, {"name": "教育", "change_pct": 2.06}, {"name": "智慧城市", "change_pct": 3.79}, {"name": "粤港澳大湾区", "change_pct": 1.96}, {"name": "LED", "change_pct": 2.6}, {"name": "新能源汽车", "change_pct": 2.43}, {"name": "机器人", "change_pct": 2.92}, {"name": "数字经济", "change_pct": 3.71}, {"name": "国产芯片", "change_pct": 4.05}, {"name": "阿里巴巴概念股", "change_pct": 3.7}, {"name": "腾讯概念股", "change_pct": 3.66}, {"name": "信创", "change_pct": 5.19}, {"name": "NFT", "change_pct": 1.65}, {"name": "东数西算/算力", "change_pct": 4.96}, {"name": "数字乡村", "change_pct": 3.34}, {"name": "教育信息化", "change_pct": 2.82}, {"name": "数字人民币", "change_pct": 5.1}, {"name": "智慧政务", "change_pct": 4.88}, {"name": "医疗信息化", "change_pct": 4.22}, {"name": "华为鸿蒙", "change_pct": 4.86}, {"name": "华为云·鲲鹏", "change_pct": 5.28}, {"name": "智慧灯杆", "change_pct": 3.37}, {"name": "华为产业链", "change_pct": 3.41}, {"name": "算力租赁", "change_pct": 5.21}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 14, "hot_rank_chg": 20, "stock_cnt": 5872, "price": "4.51", "change": "2.97", "market_id": "33", "circulate_market_value": "11963003100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "装修装饰", "change_pct": 1.91}, {"name": "装配式建筑", "change_pct": 1.47}, {"name": "破净股", "change_pct": 0.55}, {"name": "航天", "change_pct": 2.83}, {"name": "旧改", "change_pct": 1.86}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 15, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "4.31", "change": "-9.64", "market_id": "33", "circulate_market_value": "6813986200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 1.65}, {"name": "体外诊断", "change_pct": 1.55}, {"name": "医疗器械", "change_pct": 1.83}, {"name": "强势人气股", "change_pct": 0.17}, {"name": "基因测序", "change_pct": 1.59}, {"name": "预制菜", "change_pct": -0.8}, {"name": "水产养殖", "change_pct": -4.05}, {"name": "新冠病毒防治", "change_pct": 1.38}, {"name": "海洋经济", "change_pct": 1.23}]}, {"code": "600814", "name": "杭州解百", "hot_rank": 16, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "9.48", "change": "3.16", "market_id": "17", "circulate_market_value": "6968545100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.27}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "浙江国企改革", "change_pct": 1.37}, {"name": "国企改革", "change_pct": 1.01}, {"name": "医美", "change_pct": 0.47}]}, {"code": "600127", "name": "金健米业", "hot_rank": 17, "hot_rank_chg": 12, "stock_cnt": 5872, "price": "8.76", "change": "-6.91", "market_id": "17", "circulate_market_value": "5622021000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -0.38}, {"name": "农业种植", "change_pct": -1.11}, {"name": "湖南国企改革", "change_pct": 0.52}, {"name": "乡村振兴", "change_pct": 0.97}, {"name": "休闲食品", "change_pct": -0.37}, {"name": "食品", "change_pct": -0.07}, {"name": "食品安全", "change_pct": 2.3}, {"name": "社区团购", "change_pct": -0.84}, {"name": "大农业", "change_pct": 0.23}, {"name": "预制菜", "change_pct": -0.78}, {"name": "人造肉", "change_pct": 0.01}, {"name": "国企改革", "change_pct": 1.01}]}, {"code": "603030", "name": "全筑股份", "hot_rank": 18, "hot_rank_chg": 14, "stock_cnt": 5872, "price": "3.16", "change": "10.11", "market_id": "17", "circulate_market_value": "4161509900.00", "change_type": "1", "change_section": "9", "change_days": "7", "change_reason": "边缘AI算力", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.45}, {"name": "长三角一体化", "change_pct": 1.01}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "装修装饰", "change_pct": 1.96}, {"name": "装配式建筑", "change_pct": 1.53}, {"name": "建筑节能", "change_pct": 1.69}, {"name": "新型城镇化", "change_pct": 2.15}, {"name": "低价股", "change_pct": 1.0}, {"name": "光刻机（胶）", "change_pct": 5.16}, {"name": "旧改", "change_pct": 1.92}]}, {"code": "600467", "name": "好当家", "hot_rank": 19, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "3.78", "change": "-4.55", "market_id": "17", "circulate_market_value": "5522558500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.62}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "冷链", "change_pct": 0.96}, {"name": "医药", "change_pct": 1.23}, {"name": "食品", "change_pct": -0.07}, {"name": "食品安全", "change_pct": 2.3}, {"name": "预制菜", "change_pct": -0.78}, {"name": "水产养殖", "change_pct": -3.95}, {"name": "海洋经济", "change_pct": 1.18}]}, {"code": "002548", "name": "金新农", "hot_rank": 20, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "4.88", "change": "-8.44", "market_id": "33", "circulate_market_value": "3925820900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 0.03}, {"name": "养猪", "change_pct": -0.94}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "大农业", "change_pct": 0.23}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 21, "hot_rank_chg": 10, "stock_cnt": 5872, "price": "23.06", "change": "10.02", "market_id": "33", "circulate_market_value": "26429192000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "华为昇腾"}, {"code": "002771", "name": "真视通", "hot_rank": 22, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "19.75", "change": "0.77", "market_id": "33", "circulate_market_value": "3566699000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 23, "hot_rank_chg": 13, "stock_cnt": 5872, "price": "8.82", "change": "4.63", "market_id": "33", "circulate_market_value": "9348804600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": 0.83}, {"name": "电子烟", "change_pct": 3.27}, {"name": "一带一路", "change_pct": 1.24}, {"name": "造纸", "change_pct": 1.38}, {"name": "包装印刷", "change_pct": 2.04}, {"name": "卫星互联网", "change_pct": 2.5}, {"name": "太空算力", "change_pct": 2.32}]}, {"code": "600715", "name": "文投控股", "hot_rank": 24, "hot_rank_chg": 4, "stock_cnt": 5872, "price": "2.77", "change": "4.53", "market_id": "17", "circulate_market_value": "7928771100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 1.59}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "游戏", "change_pct": 1.13}, {"name": "影视", "change_pct": 0.18}, {"name": "低价股", "change_pct": 1.0}, {"name": "国企改革", "change_pct": 1.01}, {"name": "短剧/互动影游", "change_pct": 1.06}, {"name": "AI视频", "change_pct": 2.16}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 25, "hot_rank_chg": -17, "stock_cnt": 5872, "price": "450.80", "change": "4.79", "market_id": "33", "circulate_market_value": "500359600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 26, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "19.93", "change": "-3.21", "market_id": "17", "circulate_market_value": "8857777800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002651", "name": "利君股份", "hot_rank": 27, "hot_rank_chg": 53, "stock_cnt": 5872, "price": "9.56", "change": "10.01", "market_id": "33", "circulate_market_value": "5405832400.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "商业航天", "xgb_concepts": [{"name": "业绩爆雷", "change_pct": 2.03}, {"name": "通用航空", "change_pct": 2.48}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "大飞机", "change_pct": 2.42}, {"name": "军工", "change_pct": 2.73}, {"name": "无人机", "change_pct": 2.76}, {"name": "航天", "change_pct": 2.72}]}, {"code": "603324", "name": "盛剑科技", "hot_rank": 28, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "35.51", "change": "0.03", "market_id": "17", "circulate_market_value": "5180142700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 29, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "20.78", "change": "0.05", "market_id": "33", "circulate_market_value": "12362690400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600280", "name": "中央商场", "hot_rank": 30, "hot_rank_chg": 54, "stock_cnt": 5872, "price": "3.35", "change": "8.06", "market_id": "17", "circulate_market_value": "3779921500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.27}]}, {"code": "002122", "name": "汇洲智能", "hot_rank": 31, "hot_rank_chg": 4, "stock_cnt": 5872, "price": "4.18", "change": "10.00", "market_id": "33", "circulate_market_value": "8304914000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "具身智能数据", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 2.04}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "人工智能", "change_pct": 3.25}, {"name": "云计算数据中心", "change_pct": 4.18}, {"name": "智慧停车", "change_pct": 3.23}, {"name": "大数据", "change_pct": 4.05}, {"name": "风电", "change_pct": 1.4}, {"name": "复牌股", "change_pct": 0.93}, {"name": "智能制造", "change_pct": 2.85}, {"name": "工业母机", "change_pct": 2.64}]}, {"code": "000889", "name": "中嘉博创", "hot_rank": 32, "hot_rank_chg": 53, "stock_cnt": 5872, "price": "4.30", "change": "9.97", "market_id": "33", "circulate_market_value": "3740137600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力销售", "xgb_concepts": [{"name": "金融科技", "change_pct": 5.12}, {"name": "5G消息/RCS", "change_pct": 3.68}, {"name": "华为产业链", "change_pct": 3.31}, {"name": "Kimi概念", "change_pct": 2.34}, {"name": "智谱AI", "change_pct": 5.21}, {"name": "区块链", "change_pct": 3.66}]}, {"code": "600227", "name": "赤天化", "hot_rank": 33, "hot_rank_chg": 19, "stock_cnt": 5872, "price": "3.46", "change": "-2.82", "market_id": "17", "circulate_market_value": "4407719300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.89}, {"name": "化肥", "change_pct": -0.34}, {"name": "保健品", "change_pct": 0.21}, {"name": "民营医院", "change_pct": 1.07}, {"name": "医药", "change_pct": 1.23}, {"name": "煤化工", "change_pct": -1.03}, {"name": "食品", "change_pct": -0.07}, {"name": "大农业", "change_pct": 0.23}, {"name": "干细胞", "change_pct": 1.63}, {"name": "阿尔茨海默病", "change_pct": 1.39}]}, {"code": "002384", "name": "东山精密", "hot_rank": 34, "hot_rank_chg": -18, "stock_cnt": 5872, "price": "75.71", "change": "4.40", "market_id": "33", "circulate_market_value": "104958418000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 35, "hot_rank_chg": 34, "stock_cnt": 5872, "price": "12.19", "change": "1.67", "market_id": "17", "circulate_market_value": "4162629400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "轮胎", "change_pct": 0.73}, {"name": "风电", "change_pct": 1.4}, {"name": "航天", "change_pct": 2.72}, {"name": "人形机器人", "change_pct": 2.91}]}, {"code": "300502", "name": "新易盛", "hot_rank": 36, "hot_rank_chg": -24, "stock_cnt": 5872, "price": "199.02", "change": "5.29", "market_id": "33", "circulate_market_value": "249727670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002815", "name": "崇达技术", "hot_rank": 37, "hot_rank_chg": 18, "stock_cnt": 5872, "price": "15.99", "change": "4.78", "market_id": "33", "circulate_market_value": "12426437200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 38, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "12.19", "change": "-3.41", "market_id": "33", "circulate_market_value": "8046944400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 1.39}, {"name": "体育产业", "change_pct": 1.49}, {"name": "一带一路", "change_pct": 1.24}, {"name": "云计算数据中心", "change_pct": 4.18}, {"name": "福建自贸/海西概念", "change_pct": 0.78}, {"name": "天然气", "change_pct": 0.58}, {"name": "氢能源/燃料电池", "change_pct": 1.56}, {"name": "冷链", "change_pct": 0.96}, {"name": "地热", "change_pct": 1.29}, {"name": "冰雪产业", "change_pct": -0.43}, {"name": "腾讯概念股", "change_pct": 3.57}, {"name": "热泵", "change_pct": 1.95}, {"name": "华为产业链", "change_pct": 3.31}, {"name": "自贸区", "change_pct": 0.49}, {"name": "核聚变", "change_pct": 2.2}, {"name": "液冷服务器", "change_pct": 3.57}, {"name": "磁悬浮压缩机", "change_pct": 2.94}, {"name": "雅江电站概念股", "change_pct": 1.3}]}, {"code": "002470", "name": "金正大", "hot_rank": 39, "hot_rank_chg": 129, "stock_cnt": 5872, "price": "1.76", "change": "0.57", "market_id": "33", "circulate_market_value": "5782912400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "磷化工", "change_pct": 0.38}, {"name": "锂电池", "change_pct": 2.54}, {"name": "化肥", "change_pct": -0.34}, {"name": "山东国企改革", "change_pct": 0.91}, {"name": "新能源汽车", "change_pct": 2.37}, {"name": "大农业", "change_pct": 0.23}, {"name": "低价股", "change_pct": 1.0}, {"name": "数字乡村", "change_pct": 3.26}, {"name": "国企改革", "change_pct": 1.01}, {"name": "磷酸铁锂", "change_pct": 1.44}]}, {"code": "002077", "name": "大港股份", "hot_rank": 40, "hot_rank_chg": 34, "stock_cnt": 5872, "price": "13.33", "change": "4.22", "market_id": "33", "circulate_market_value": "7736045700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603386", "name": "骏亚科技", "hot_rank": 41, "hot_rank_chg": 103, "stock_cnt": 5872, "price": "15.97", "change": "9.99", "market_id": "17", "circulate_market_value": "5211371300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB"}, {"code": "000993", "name": "闽东电力", "hot_rank": 42, "hot_rank_chg": 115, "stock_cnt": 5872, "price": "10.80", "change": "-2.70", "market_id": "33", "circulate_market_value": "4945875700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 0.41}, {"name": "水电", "change_pct": 0.56}, {"name": "福建自贸/海西概念", "change_pct": 0.78}, {"name": "有色 · 钼", "change_pct": 2.29}, {"name": "光伏", "change_pct": 1.59}, {"name": "风电", "change_pct": 1.4}, {"name": "有色金属", "change_pct": 2.23}, {"name": "宁德时代概念股", "change_pct": 2.64}, {"name": "船舶", "change_pct": 0.74}, {"name": "自贸区", "change_pct": 0.49}]}, {"code": "300324", "name": "旋极信息", "hot_rank": 43, "hot_rank_chg": -16, "stock_cnt": 5872, "price": "5.72", "change": "13.49", "market_id": "33", "circulate_market_value": "9781104800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.98}, {"name": "数字孪生", "change_pct": 3.25}, {"name": "半导体", "change_pct": 4.69}, {"name": "国产软件", "change_pct": 4.81}, {"name": "人工智能", "change_pct": 3.25}, {"name": "网络安全", "change_pct": 4.89}, {"name": "云计算数据中心", "change_pct": 4.18}, {"name": "大飞机", "change_pct": 2.42}, {"name": "北斗导航", "change_pct": 3.11}, {"name": "军民融合", "change_pct": 2.8}, {"name": "京津冀", "change_pct": 2.1}, {"name": "物联网", "change_pct": 3.48}, {"name": "大数据", "change_pct": 4.05}, {"name": "智慧城市", "change_pct": 3.76}, {"name": "电子发票", "change_pct": 4.91}, {"name": "军工", "change_pct": 2.73}, {"name": "无人机", "change_pct": 2.76}, {"name": "智能制造", "change_pct": 2.85}, {"name": "工业互联网", "change_pct": 2.75}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 3.64}, {"name": "国产芯片", "change_pct": 3.88}, {"name": "腾讯概念股", "change_pct": 3.57}, {"name": "信创", "change_pct": 5.1}, {"name": "BIPV概念", "change_pct": 1.57}, {"name": "航天", "change_pct": 2.72}, {"name": "数字人民币", "change_pct": 5.01}, {"name": "智慧政务", "change_pct": 4.79}, {"name": "医疗信息化", "change_pct": 4.15}, {"name": "云游戏", "change_pct": 2.52}, {"name": "华为产业链", "change_pct": 3.31}, {"name": "物理AI", "change_pct": 3.94}, {"name": "时空大数据", "change_pct": 4.23}, {"name": "AI算力芯片", "change_pct": 4.17}, {"name": "军工信息化", "change_pct": 4.05}, {"name": "财税改革", "change_pct": 5.61}, {"name": "区块链", "change_pct": 3.66}]}, {"code": "002872", "name": "天圣制药", "hot_rank": 44, "hot_rank_chg": 82, "stock_cnt": 5872, "price": "8.59", "change": "9.99", "market_id": "33", "circulate_market_value": "1846146800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "摘帽", "xgb_concepts": [{"name": "中药", "change_pct": 0.62}, {"name": "优化生育（三孩）", "change_pct": 0.88}, {"name": "ST摘帽", "change_pct": 2.04}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "复牌股", "change_pct": 0.93}, {"name": "医药", "change_pct": 1.23}, {"name": "肝炎概念", "change_pct": 1.11}, {"name": "新冠病毒防治", "change_pct": 1.34}]}, {"code": "600183", "name": "生益科技", "hot_rank": 45, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "63.20", "change": "2.18", "market_id": "17", "circulate_market_value": "152422530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600261", "name": "阳光照明", "hot_rank": 46, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "3.83", "change": "-4.96", "market_id": "17", "circulate_market_value": "5113252900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "氢能源/燃料电池", "change_pct": 1.56}, {"name": "物联网", "change_pct": 3.48}, {"name": "LED", "change_pct": 2.55}, {"name": "卫星互联网", "change_pct": 2.5}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 47, "hot_rank_chg": -27, "stock_cnt": 5872, "price": "139.10", "change": "3.81", "market_id": "33", "circulate_market_value": "151394780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002199", "name": "东晶电子", "hot_rank": 48, "hot_rank_chg": 77, "stock_cnt": 5872, "price": "11.85", "change": "4.96", "market_id": "33", "circulate_market_value": "2736189800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 3.6}, {"name": "锂电池", "change_pct": 2.54}, {"name": "ST摘帽", "change_pct": 2.04}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "新能源汽车", "change_pct": 2.37}]}, {"code": "600567", "name": "山鹰国际", "hot_rank": 49, "hot_rank_chg": 92, "stock_cnt": 5872, "price": "1.11", "change": "9.90", "market_id": "17", "circulate_market_value": "6888058500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "要约收购", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 3.01}, {"name": "造纸", "change_pct": 1.38}, {"name": "包装印刷", "change_pct": 2.04}, {"name": "固废处理", "change_pct": 1.38}, {"name": "复牌股", "change_pct": 0.93}, {"name": "环保", "change_pct": 1.83}, {"name": "人民币升值受益", "change_pct": 0.34}, {"name": "破净股", "change_pct": 0.55}, {"name": "数字经济", "change_pct": 3.64}, {"name": "低价股", "change_pct": 1.0}, {"name": "回购增持再贷款", "change_pct": 0.91}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 50, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "3.96", "change": "-10.00", "market_id": "17", "circulate_market_value": "5169660900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.19}, {"name": "高速公路", "change_pct": -0.76}, {"name": "振兴东北", "change_pct": 0.19}, {"name": "黑龙江自贸区", "change_pct": -1.54}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 51, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "10.85", "change": "-7.97", "market_id": "17", "circulate_market_value": "7226100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.27}]}, {"code": "002584", "name": "西陇科学", "hot_rank": 52, "hot_rank_chg": 15, "stock_cnt": 5872, "price": "9.02", "change": "3.32", "market_id": "33", "circulate_market_value": "4339876800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 1.52}, {"name": "医疗器械", "change_pct": 1.8}, {"name": "锂电池", "change_pct": 2.54}, {"name": "基因测序", "change_pct": 1.52}, {"name": "PCB板", "change_pct": 3.73}, {"name": "医药", "change_pct": 1.23}, {"name": "新能源汽车", "change_pct": 2.37}, {"name": "化学原料药", "change_pct": 1.1}, {"name": "食品安全", "change_pct": 2.3}, {"name": "辅助生殖", "change_pct": 1.51}, {"name": "光刻机（胶）", "change_pct": 5.16}, {"name": "异丙醇", "change_pct": 1.22}, {"name": "新冠病毒防治", "change_pct": 1.34}, {"name": "磷酸铁锂", "change_pct": 1.44}]}, {"code": "601811", "name": "新华文轩", "hot_rank": 53, "hot_rank_chg": 571, "stock_cnt": 5872, "price": "14.54", "change": "-5.28", "market_id": "17", "circulate_market_value": "11514282700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 54, "hot_rank_chg": -21, "stock_cnt": 5872, "price": "6.30", "change": "4.48", "market_id": "17", "circulate_market_value": "29074239000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": 2.38}, {"name": "国产软件", "change_pct": 4.81}, {"name": "锂电池", "change_pct": 2.54}, {"name": "人工智能", "change_pct": 3.25}, {"name": "云计算数据中心", "change_pct": 4.18}, {"name": "养老产业", "change_pct": 1.8}, {"name": "大飞机", "change_pct": 2.42}, {"name": "军民融合", "change_pct": 2.8}, {"name": "物联网", "change_pct": 3.48}, {"name": "大数据", "change_pct": 4.05}, {"name": "智慧城市", "change_pct": 3.76}, {"name": "军工", "change_pct": 2.73}, {"name": "新能源汽车", "change_pct": 2.37}, {"name": "机器人", "change_pct": 2.84}, {"name": "黑色家电", "change_pct": 1.76}, {"name": "家电", "change_pct": 1.29}, {"name": "储能", "change_pct": 2.28}, {"name": "智能制造", "change_pct": 2.85}, {"name": "工业互联网", "change_pct": 2.75}, {"name": "数字经济", "change_pct": 3.64}, {"name": "百度概念股", "change_pct": 2.25}, {"name": "NFT", "change_pct": 1.63}, {"name": "跨境支付", "change_pct": 5.33}, {"name": "华为海思", "change_pct": 4.51}, {"name": "云游戏", "change_pct": 2.52}, {"name": "网红/MCN", "change_pct": 1.28}, {"name": "华为产业链", "change_pct": 3.31}, {"name": "毫米波雷达", "change_pct": 2.59}, {"name": "服务器", "change_pct": 4.49}, {"name": "AI大模型/智能体", "change_pct": 3.17}, {"name": "星闪概念", "change_pct": 3.56}, {"name": "低空经济", "change_pct": 2.69}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 55, "hot_rank_chg": 130, "stock_cnt": 5872, "price": "12.18", "change": "10.03", "market_id": "33", "circulate_market_value": "5564436100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "eSIM", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 3.13}, {"name": "金融科技", "change_pct": 5.12}, {"name": "人工智能", "change_pct": 3.25}, {"name": "物联网", "change_pct": 3.48}, {"name": "数字经济", "change_pct": 3.64}, {"name": "国产操作系统", "change_pct": 4.6}, {"name": "电子身份证", "change_pct": 4.78}, {"name": "数字人民币", "change_pct": 5.01}, {"name": "智慧政务", "change_pct": 4.79}, {"name": "eSIM", "change_pct": 4.44}, {"name": "华为产业链", "change_pct": 3.31}, {"name": "AI大模型/智能体", "change_pct": 3.17}, {"name": "区块链", "change_pct": 3.66}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 56, "hot_rank_chg": -32, "stock_cnt": 5872, "price": "33.53", "change": "2.57", "market_id": "17", "circulate_market_value": "150986900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 57, "hot_rank_chg": 29, "stock_cnt": 5872, "price": "4.49", "change": "-3.65", "market_id": "17", "circulate_market_value": "3972660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.27}, {"name": "优化生育（三孩）", "change_pct": 0.88}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "信托", "change_pct": 0.5}, {"name": "民营医院", "change_pct": 1.07}, {"name": "汽车销售", "change_pct": 0.77}, {"name": "社区团购", "change_pct": -0.84}, {"name": "大金融", "change_pct": -0.09}, {"name": "餐饮", "change_pct": -0.21}, {"name": "首发经济", "change_pct": 0.37}]}, {"code": "603703", "name": "盛洋科技", "hot_rank": 58, "hot_rank_chg": 142, "stock_cnt": 5872, "price": "8.31", "change": "-1.07", "market_id": "17", "circulate_market_value": "3448501400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 3.13}, {"name": "5G", "change_pct": 3.71}, {"name": "云计算数据中心", "change_pct": 4.18}, {"name": "LED", "change_pct": 2.55}, {"name": "卫星互联网", "change_pct": 2.5}, {"name": "铜缆高速连接器", "change_pct": 3.51}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 59, "hot_rank_chg": -38, "stock_cnt": 5872, "price": "694.03", "change": "4.21", "market_id": "17", "circulate_market_value": "20881780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 60, "hot_rank_chg": 163, "stock_cnt": 5872, "price": "21.03", "change": "5.15", "market_id": "33", "circulate_market_value": "15928440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 61, "hot_rank_chg": -22, "stock_cnt": 5872, "price": "51.00", "change": "-1.72", "market_id": "17", "circulate_market_value": "15222411000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 62, "hot_rank_chg": 38, "stock_cnt": 5872, "price": "42.83", "change": "0.87", "market_id": "17", "circulate_market_value": "6124560400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 63, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "22.44", "change": "6.55", "market_id": "33", "circulate_market_value": "10766154200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688629", "name": "华丰科技", "hot_rank": 64, "hot_rank_chg": 60, "stock_cnt": 5872, "price": "102.00", "change": "10.27", "market_id": "17", "circulate_market_value": "47021269000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 65, "hot_rank_chg": -24, "stock_cnt": 5872, "price": "15.13", "change": "-5.91", "market_id": "17", "circulate_market_value": "8999807600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600185", "name": "珠免集团", "hot_rank": 66, "hot_rank_chg": 96, "stock_cnt": 5872, "price": "4.90", "change": "4.03", "market_id": "17", "circulate_market_value": "9236528400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.45}, {"name": "房地产", "change_pct": 1.07}, {"name": "粤港澳大湾区", "change_pct": 2.03}, {"name": "复牌股", "change_pct": 0.93}, {"name": "自由贸易港", "change_pct": 0.37}, {"name": "海南自由贸易港", "change_pct": -0.09}, {"name": "横琴新区", "change_pct": 1.48}, {"name": "免税店概念", "change_pct": 0.12}, {"name": "自贸区", "change_pct": 0.49}]}, {"code": "002642", "name": "荣联科技", "hot_rank": 67, "hot_rank_chg": -24, "stock_cnt": 5872, "price": "9.16", "change": "9.96", "market_id": "33", "circulate_market_value": "6060075700.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "存储设备集采", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 3.13}, {"name": "边缘计算", "change_pct": 4.48}, {"name": "泛在电力物联网", "change_pct": 2.98}, {"name": "数字孪生", "change_pct": 3.25}, {"name": "精准医疗", "change_pct": 1.61}, {"name": "国产软件", "change_pct": 4.81}, {"name": "金融科技", "change_pct": 5.12}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "人工智能", "change_pct": 3.25}, {"name": "网络安全", "change_pct": 4.89}, {"name": "云计算数据中心", "change_pct": 4.18}, {"name": "基因测序", "change_pct": 1.52}, {"name": "物联网", "change_pct": 3.48}, {"name": "山东国企改革", "change_pct": 0.91}, {"name": "大数据", "change_pct": 4.05}, {"name": "智慧城市", "change_pct": 3.76}, {"name": "智慧物流", "change_pct": 1.85}, {"name": "智能制造", "change_pct": 2.85}, {"name": "工业互联网", "change_pct": 2.75}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 3.64}, {"name": "腾讯概念股", "change_pct": 3.57}, {"name": "信创", "change_pct": 5.1}, {"name": "国资云", "change_pct": 3.68}, {"name": "东数西算/算力", "change_pct": 4.87}, {"name": "数字乡村", "change_pct": 3.26}, {"name": "国企改革", "change_pct": 1.01}, {"name": "智慧政务", "change_pct": 4.79}, {"name": "新冠病毒防治", "change_pct": 1.34}, {"name": "远程办公", "change_pct": 3.42}, {"name": "华为产业链", "change_pct": 3.31}, {"name": "算力租赁", "change_pct": 5.1}, {"name": "AI大模型/智能体", "change_pct": 3.17}, {"name": "星闪概念", "change_pct": 3.56}]}, {"code": "603887", "name": "城地香江", "hot_rank": 68, "hot_rank_chg": 37, "stock_cnt": 5872, "price": "9.26", "change": "3.93", "market_id": "17", "circulate_market_value": "5574792400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 4.18}, {"name": "阿里巴巴概念股", "change_pct": 3.61}, {"name": "腾讯概念股", "change_pct": 3.57}, {"name": "东数西算/算力", "change_pct": 4.87}, {"name": "华为产业链", "change_pct": 3.31}, {"name": "算力租赁", "change_pct": 5.1}]}, {"code": "600156", "name": "华升股份", "hot_rank": 69, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "10.00", "change": "3.52", "market_id": "17", "circulate_market_value": "4021107000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.45}, {"name": "强势人气股", "change_pct": 0.19}, {"name": "云计算数据中心", "change_pct": 4.18}, {"name": "纺织服装", "change_pct": 0.84}, {"name": "湖南国企改革", "change_pct": 0.52}, {"name": "外贸受益概念", "change_pct": 2.04}, {"name": "东数西算/算力", "change_pct": 4.87}, {"name": "国企改革", "change_pct": 1.01}, {"name": "新冠病毒防治", "change_pct": 1.34}, {"name": "液冷服务器", "change_pct": 3.57}]}, {"code": "603118", "name": "共进股份", "hot_rank": 70, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "13.86", "change": "4.53", "market_id": "17", "circulate_market_value": "10911651000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600229", "name": "城市传媒", "hot_rank": 71, "hot_rank_chg": 126, "stock_cnt": 5872, "price": "5.79", "change": "-2.52", "market_id": "17", "circulate_market_value": "3832105100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 3.25}, {"name": "VR&AR", "change_pct": 3.3}, {"name": "山东国企改革", "change_pct": 0.91}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 0.65}, {"name": "AIGC概念", "change_pct": 2.8}, {"name": "数据要素", "change_pct": 4.23}, {"name": "国企改革", "change_pct": 1.01}, {"name": "在线教育", "change_pct": 2.79}, {"name": "IP经济/谷子经济", "change_pct": 0.79}]}, {"code": "002144", "name": "宏达高科", "hot_rank": 73, "hot_rank_chg": 173, "stock_cnt": 5872, "price": "10.99", "change": "10.01", "market_id": "33", "circulate_market_value": "1512874600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 1.52}, {"name": "医疗器械", "change_pct": 1.8}, {"name": "纺织服装", "change_pct": 0.84}, {"name": "汽车零部件", "change_pct": 2.26}, {"name": "新能源汽车", "change_pct": 2.37}, {"name": "机器人", "change_pct": 2.84}, {"name": "破净股", "change_pct": 0.55}, {"name": "新能源车零部件", "change_pct": 2.45}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 74, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "9.49", "change": "8.58", "market_id": "17", "circulate_market_value": "16978922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.32}, {"name": "纯碱", "change_pct": 0.26}, {"name": "食品", "change_pct": -0.07}, {"name": "土壤修复", "change_pct": 1.99}, {"name": "东数西算/算力", "change_pct": 4.87}, {"name": "OpenClaw概念", "change_pct": 5.49}, {"name": "算力租赁", "change_pct": 5.1}, {"name": "DeepSeek概念股", "change_pct": 4.92}]}, {"code": "002149", "name": "西部材料", "hot_rank": 75, "hot_rank_chg": -33, "stock_cnt": 5872, "price": "27.54", "change": "1.32", "market_id": "33", "circulate_market_value": "13443351000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 76, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "6.40", "change": "-2.29", "market_id": "33", "circulate_market_value": "4657698500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 0.96}, {"name": "装配式建筑", "change_pct": 1.53}, {"name": "风电", "change_pct": 1.4}, {"name": "环氧丙烷", "change_pct": 1.38}, {"name": "乡村振兴", "change_pct": 0.97}, {"name": "建筑节能", "change_pct": 1.69}, {"name": "旧改", "change_pct": 1.92}]}, {"code": "002298", "name": "中电鑫龙", "hot_rank": 77, "hot_rank_chg": 219, "stock_cnt": 5872, "price": "7.76", "change": "10.07", "market_id": "33", "circulate_market_value": "5162922100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力基础设施", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.98}, {"name": "国产软件", "change_pct": 4.81}, {"name": "锂电池", "change_pct": 2.54}, {"name": "人工智能", "change_pct": 3.25}, {"name": "充电桩", "change_pct": 2.62}, {"name": "云计算数据中心", "change_pct": 4.18}, {"name": "军民融合", "change_pct": 2.8}, {"name": "磁悬浮", "change_pct": 2.12}, {"name": "人脸识别", "change_pct": 3.24}, {"name": "水利", "change_pct": 1.68}, {"name": "物联网", "change_pct": 3.48}, {"name": "大数据", "change_pct": 4.05}, {"name": "智慧城市", "change_pct": 3.76}, {"name": "军工", "change_pct": 2.73}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 2.37}, {"name": "储能", "change_pct": 2.28}, {"name": "智慧安防", "change_pct": 3.45}, {"name": "无人机", "change_pct": 2.76}, {"name": "虚拟电厂", "change_pct": 2.79}, {"name": "信创", "change_pct": 5.1}, {"name": "元宇宙", "change_pct": 2.91}, {"name": "东数西算/算力", "change_pct": 4.87}, {"name": "新型城镇化", "change_pct": 2.15}, {"name": "AIGC概念", "change_pct": 2.8}, {"name": "数字乡村", "change_pct": 3.26}, {"name": "华为海思", "change_pct": 4.51}, {"name": "闪存", "change_pct": 4.67}, {"name": "UWB超宽带", "change_pct": 3.46}, {"name": "智慧政务", "change_pct": 4.79}, {"name": "特高压", "change_pct": 1.73}, {"name": "华为云·鲲鹏", "change_pct": 5.21}, {"name": "华为产业链", "change_pct": 3.31}, {"name": "时空大数据", "change_pct": 4.23}, {"name": "服务器", "change_pct": 4.49}, {"name": "智能电网", "change_pct": 2.84}, {"name": "磁电存储", "change_pct": 6.39}, {"name": "军工信息化", "change_pct": 4.05}, {"name": "光纤概念", "change_pct": 4.13}, {"name": "雅江电站概念股", "change_pct": 1.3}]}, {"code": "601138", "name": "工业富联", "hot_rank": 78, "hot_rank_chg": -41, "stock_cnt": 5872, "price": "41.61", "change": "1.46", "market_id": "17", "circulate_market_value": "825514240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 79, "hot_rank_chg": -15, "stock_cnt": 5872, "price": "48.22", "change": "3.08", "market_id": "33", "circulate_market_value": "34970907000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 80, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "15.21", "change": "2.91", "market_id": "33", "circulate_market_value": "10574950800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 81, "hot_rank_chg": -16, "stock_cnt": 5872, "price": "25.59", "change": "10.02", "market_id": "33", "circulate_market_value": "13760642000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人关节"}, {"code": "600206", "name": "有研新材", "hot_rank": 82, "hot_rank_chg": -32, "stock_cnt": 5872, "price": "37.95", "change": "2.87", "market_id": "17", "circulate_market_value": "32126699000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 83, "hot_rank_chg": -17, "stock_cnt": 5872, "price": "8.69", "change": "-4.92", "market_id": "33", "circulate_market_value": "4928378300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 2.76}, {"name": "军民融合", "change_pct": 2.8}, {"name": "物联网", "change_pct": 3.48}, {"name": "LED", "change_pct": 2.55}, {"name": "军工", "change_pct": 2.73}, {"name": "智慧灯杆", "change_pct": 3.37}, {"name": "海洋经济", "change_pct": 1.18}]}, {"code": "000798", "name": "中水渔业", "hot_rank": 84, "hot_rank_chg": 215, "stock_cnt": 5872, "price": "8.10", "change": "-6.36", "market_id": "33", "circulate_market_value": "2963273300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.13}, {"name": "人工智能", "change_pct": 3.25}, {"name": "社区团购", "change_pct": -0.84}, {"name": "预制菜", "change_pct": -0.78}, {"name": "国企改革", "change_pct": 1.01}, {"name": "水产养殖", "change_pct": -3.95}, {"name": "海洋经济", "change_pct": 1.18}]}, {"code": "000711", "name": "京蓝科技", "hot_rank": 85, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "4.21", "change": "2.19", "market_id": "33", "circulate_market_value": "9923032600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 2.23}, {"name": "ST摘帽", "change_pct": 2.04}, {"name": "物联网", "change_pct": 3.48}, {"name": "大数据", "change_pct": 4.05}, {"name": "固废处理", "change_pct": 1.38}, {"name": "智慧城市", "change_pct": 3.76}, {"name": "有色 · 锌", "change_pct": 2.83}, {"name": "有色金属", "change_pct": 2.23}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": 1.83}, {"name": "土壤修复", "change_pct": 1.99}, {"name": "磷化铟", "change_pct": 2.76}]}, {"code": "002226", "name": "江南化工", "hot_rank": 86, "hot_rank_chg": 124, "stock_cnt": 5872, "price": "5.70", "change": "0.00", "market_id": "33", "circulate_market_value": "15098834000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.13}, {"name": "一带一路", "change_pct": 1.24}, {"name": "人工智能", "change_pct": 3.25}, {"name": "军工集团", "change_pct": 2.59}, {"name": "民爆", "change_pct": 1.48}, {"name": "风电", "change_pct": 1.4}, {"name": "汽车零部件", "change_pct": 2.26}, {"name": "军工", "change_pct": 2.73}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 1.01}, {"name": "雅江电站概念股", "change_pct": 1.26}]}, {"code": "603708", "name": "家家悦", "hot_rank": 87, "hot_rank_chg": 49, "stock_cnt": 5872, "price": "10.07", "change": "-5.45", "market_id": "17", "circulate_market_value": "6234421900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.22}, {"name": "社区团购", "change_pct": -0.86}, {"name": "大消费", "change_pct": -0.55}]}, {"code": "603366", "name": "日出东方", "hot_rank": 88, "hot_rank_chg": -31, "stock_cnt": 5872, "price": "8.72", "change": "-3.11", "market_id": "17", "circulate_market_value": "7089779400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.12}, {"name": "充电桩", "change_pct": 2.59}, {"name": "光伏", "change_pct": 1.56}, {"name": "新能源汽车", "change_pct": 2.32}, {"name": "家电", "change_pct": 1.23}, {"name": "储能", "change_pct": 2.25}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 1.89}, {"name": "华为鸿蒙", "change_pct": 4.74}, {"name": "厨卫家电", "change_pct": 0.08}, {"name": "华为产业链", "change_pct": 3.27}]}, {"code": "002931", "name": "锋龙股份", "hot_rank": 89, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "47.01", "change": "0.90", "market_id": "33", "circulate_market_value": "9523091100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 90, "hot_rank_chg": -36, "stock_cnt": 5872, "price": "23.99", "change": "1.01", "market_id": "17", "circulate_market_value": "494237020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000912", "name": "泸天化", "hot_rank": 91, "hot_rank_chg": 231, "stock_cnt": 5872, "price": "3.16", "change": "-3.36", "market_id": "33", "circulate_market_value": "4954880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.95}, {"name": "化肥", "change_pct": -0.41}, {"name": "破净股", "change_pct": 0.54}, {"name": "煤化工", "change_pct": -1.02}, {"name": "大农业", "change_pct": 0.2}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 92, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "4.71", "change": "-2.89", "market_id": "17", "circulate_market_value": "11862181500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.38}, {"name": "工业大麻", "change_pct": 0.71}, {"name": "中药", "change_pct": 0.59}, {"name": "保健品", "change_pct": 0.17}, {"name": "民营医院", "change_pct": 1.02}, {"name": "医药", "change_pct": 1.16}, {"name": "化学原料药", "change_pct": 1.06}, {"name": "流感", "change_pct": 0.82}, {"name": "振兴东北", "change_pct": 0.17}, {"name": "食品", "change_pct": -0.1}, {"name": "肝炎概念", "change_pct": 1.08}]}, {"code": "301313", "name": "凡拓数创", "hot_rank": 93, "hot_rank_chg": -47, "stock_cnt": 5872, "price": "74.66", "change": "-4.16", "market_id": "33", "circulate_market_value": "5873802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002728", "name": "特一药业", "hot_rank": 94, "hot_rank_chg": 24, "stock_cnt": 5872, "price": "8.17", "change": "-5.44", "market_id": "33", "circulate_market_value": "4095693800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.59}, {"name": "医药", "change_pct": 1.16}, {"name": "化学原料药", "change_pct": 1.06}, {"name": "流感", "change_pct": 0.82}, {"name": "长寿药NMN", "change_pct": -0.3}, {"name": "肝炎概念", "change_pct": 1.08}, {"name": "医美", "change_pct": 0.42}, {"name": "新冠病毒防治", "change_pct": 1.28}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 95, "hot_rank_chg": 51, "stock_cnt": 5872, "price": "3.63", "change": "-1.36", "market_id": "17", "circulate_market_value": "4212769100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": 0.8}, {"name": "浙江国企改革", "change_pct": 1.34}, {"name": "影视", "change_pct": -0.04}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 0.99}, {"name": "短剧/互动影游", "change_pct": 0.88}]}, {"code": "002275", "name": "桂林三金", "hot_rank": 96, "hot_rank_chg": 32, "stock_cnt": 5872, "price": "13.62", "change": "-6.26", "market_id": "33", "circulate_market_value": "7691912800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 97, "hot_rank_chg": 53, "stock_cnt": 5872, "price": "27.97", "change": "4.05", "market_id": "33", "circulate_market_value": "32095294000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300829", "name": "金丹科技", "hot_rank": 98, "hot_rank_chg": -16, "stock_cnt": 5872, "price": "32.81", "change": "1.20", "market_id": "33", "circulate_market_value": "5660696100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 99, "hot_rank_chg": -76, "stock_cnt": 5872, "price": "203.10", "change": "-0.60", "market_id": "33", "circulate_market_value": "864905270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603396", "name": "金辰股份", "hot_rank": 100, "hot_rank_chg": 111, "stock_cnt": 5872, "price": "24.74", "change": "-2.90", "market_id": "17", "circulate_market_value": "3427169800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000820": "[行政处罚事先告知书] 神雾节能：关于收到《行政处罚事先告知书》的公告", "688225": "[行政处罚事先告知书] 亚信集团：关于公司财务总监因非本公司事项收到行政处罚事先告知书暨辞去职务的公告", "300670": "[行政处罚事先告知书] 大烨智能：关于收到《行政处罚事先告知书》的公告", "300500": "[行政处罚事先告知书] 启迪设计：关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》的公告", "301030": "[行政处罚事先告知书] *ST仕净：关于收到《行政处罚事先告知书》的公告", "688033": "[行政处罚事先告知书] *ST天宜：关于公司收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的", "000892": "[行政处罚事先告知书] 欢瑞世纪：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920249": "[行政处罚事先告知书] [临时公告]利尔达:关于公司及相关当事人收到中国证券监督管理委员会浙江监管局行政", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行"};