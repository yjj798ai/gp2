const UPDATE_TIME = "2026-11-28 03:02";
const THS_HOT = [
  {
    "name": "算力租赁",
    "rise": 10.48,
    "rate": 0,
    "tag": "45家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "华为昇腾",
    "rise": 12.66,
    "rate": 0,
    "tag": "34家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886058"
  },
  {
    "name": "国家大基金持股",
    "rise": 15.05,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "人形机器人",
    "rise": 9.93,
    "rate": 0,
    "tag": "65家涨停",
    "hotTag": "连续31天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "东数西算(算力)",
    "rise": 10.34,
    "rate": 0,
    "tag": "96家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885957"
  },
  {
    "name": "华为概念",
    "rise": 9.51,
    "rate": 0,
    "tag": "158家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "885806"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 12.43,
    "rate": 0,
    "tag": "65家涨停",
    "hotTag": "连续339天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "芯片概念",
    "rise": 11.25,
    "rate": 0,
    "tag": "204家涨停",
    "hotTag": "连续49天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "存储芯片",
    "rise": 13.66,
    "rate": 0,
    "tag": "72家涨停",
    "hotTag": "连续292天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 11.15,
    "rate": 0,
    "tag": "42家涨停",
    "hotTag": "连续162天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "机器人概念",
    "rise": 8.82,
    "rate": 0,
    "tag": "131家涨停",
    "hotTag": "连续30天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "商业航天",
    "rise": 9.16,
    "rate": 0,
    "tag": "59家涨停",
    "hotTag": "连续268天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "光刻机",
    "rise": 14.29,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "创新药",
    "rise": 5.93,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续169天上榜",
    "rankChg": 1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "人工智能",
    "rise": 8.69,
    "rate": 0,
    "tag": "110家涨停",
    "hotTag": "连续46天上榜",
    "rankChg": -1,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "AI应用",
    "rise": 8.86,
    "rate": 0,
    "tag": "65家涨停",
    "hotTag": "连续97天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "互联网金融",
    "rise": 8.92,
    "rate": 0,
    "tag": "39家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "先进封装",
    "rise": 12.99,
    "rate": 0,
    "tag": "62家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "超级品牌",
    "rise": 2.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885761"
  },
  {
    "name": "融资融券",
    "rise": 7.77,
    "rate": 0,
    "tag": "304家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "证券ETF",
    "code": "885338"
  }
];
const THS_EVENTS = [
  {
    "title": "英伟达暂停向东南亚四国交付AI服务器",
    "desc": "",
    "heat": 2582367,
    "direction": "华为昇腾",
    "themes": [
      "华为昇腾",
      "华为概念"
    ],
    "stocks": [
      {
        "name": "艾融软件",
        "code": "920799",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "AI存储叙事需“背书”！SSD扩显存打开新场景，市场期待巨头用大额回购表态",
    "desc": "",
    "heat": 2419972,
    "direction": "存储芯片",
    "themes": [
      "存储芯片",
      "半导体",
      "半导体设备"
    ],
    "stocks": [
      {
        "name": "中科仪",
        "code": "920186",
        "chg": 26.003104
      }
    ]
  },
  {
    "title": "学习时报：算力供给要避免“一哄而上”",
    "desc": "",
    "heat": 2083134,
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
    "title": "中信建投：行业景气上行，BIS新规下国产先进封装扩产有望加速",
    "desc": "",
    "heat": 1942669,
    "direction": "先进封装",
    "themes": [
      "先进封装"
    ],
    "stocks": [
      {
        "name": "戈碧迦",
        "code": "920438",
        "chg": 25.673122
      }
    ]
  },
  {
    "title": "宇树王兴兴预测：5-10 年内中国机器人产量有望超汽车，年产量超 2000 万台",
    "desc": "",
    "heat": 1717554,
    "direction": "人形机器人",
    "themes": [
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "众诚科技",
        "code": "920207",
        "chg": 21.827411
      }
    ]
  },
  {
    "title": "事关阿斯麦在华业务 荷兰表态力阻美国MATCH法案",
    "desc": "",
    "heat": 1700342,
    "direction": "光刻机",
    "themes": [
      "光刻机"
    ],
    "stocks": [
      {
        "name": "联合化学",
        "code": "301209",
        "chg": 20.009713
      }
    ]
  },
  {
    "title": "《广东省算力发展“十五五”规划》发布：做强广深构筑算力创新策源地",
    "desc": "",
    "heat": 1464733,
    "direction": "国产算力芯片",
    "themes": [
      "TPU",
      "CPU",
      "GPU"
    ],
    "stocks": [
      {
        "name": "科德教育",
        "code": "300192",
        "chg": 20.012995
      }
    ]
  },
  {
    "title": "从“买芯片”到“买系统”：两大运营商AI超节点集采超550亿",
    "desc": "",
    "heat": 1396213,
    "direction": "超节点",
    "themes": [
      "超节点",
      "AI服务器"
    ],
    "stocks": [
      {
        "name": "软通动力",
        "code": "301236",
        "chg": 20.013387
      }
    ]
  },
  {
    "title": "全球超 30 人亲测：马斯克旗下 Neuralink 拿下美国首个植入式脑机关键性临床试验批文",
    "desc": "",
    "heat": 980263,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "科蓝软件",
        "code": "300663",
        "chg": 20.072333
      }
    ]
  },
  {
    "title": "中疾控提醒：流感活动整体进入中流行水平",
    "desc": "",
    "heat": 537307,
    "direction": "流感",
    "themes": [
      "流感",
      "医药商业"
    ],
    "stocks": [
      {
        "name": "百洋制药",
        "code": "301015",
        "chg": 19.886364
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "高带宽存储器HBM",
    "change": "+15.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+14.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+14.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+14.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+14.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+14.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+13.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+13.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+13.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+13.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+12.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+12.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+12.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "矢量网络分析仪VNA",
    "change": "+12.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+12.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超节点",
    "change": "+12.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+12.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+12.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+12.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "国产芯片",
    "change": "+12.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002197",
    "name": "证通电子",
    "hot_rank": 6,
    "hot_rank_chg": 36,
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
        "change_pct": 11.03
      },
      {
        "name": "深圳本地股",
        "change_pct": 6.97
      },
      {
        "name": "ST摘帽",
        "change_pct": 6.58
      },
      {
        "name": "金融科技",
        "change_pct": 11.09
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "网络安全",
        "change_pct": 10.52
      },
      {
        "name": "充电桩",
        "change_pct": 8.06
      },
      {
        "name": "云计算数据中心",
        "change_pct": 10.54
      },
      {
        "name": "移动支付",
        "change_pct": 9.62
      },
      {
        "name": "教育",
        "change_pct": 6.69
      },
      {
        "name": "智慧城市",
        "change_pct": 8.97
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 5.1
      },
      {
        "name": "LED",
        "change_pct": 9.17
      },
      {
        "name": "新能源汽车",
        "change_pct": 8.0
      },
      {
        "name": "机器人",
        "change_pct": 9.35
      },
      {
        "name": "数字经济",
        "change_pct": 9.03
      },
      {
        "name": "国产芯片",
        "change_pct": 12.42
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 9.27
      },
      {
        "name": "腾讯概念股",
        "change_pct": 9.33
      },
      {
        "name": "信创",
        "change_pct": 11.23
      },
      {
        "name": "NFT",
        "change_pct": 7.02
      },
      {
        "name": "东数西算/算力",
        "change_pct": 10.55
      },
      {
        "name": "数字乡村",
        "change_pct": 7.48
      },
      {
        "name": "教育信息化",
        "change_pct": 7.85
      },
      {
        "name": "数字人民币",
        "change_pct": 10.57
      },
      {
        "name": "智慧政务",
        "change_pct": 10.06
      },
      {
        "name": "医疗信息化",
        "change_pct": 9.23
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 10.26
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 10.91
      },
      {
        "name": "智慧灯杆",
        "change_pct": 8.71
      },
      {
        "name": "华为产业链",
        "change_pct": 9.46
      },
      {
        "name": "算力租赁",
        "change_pct": 10.39
      }
    ]
  },
  {
    "code": "603030",
    "name": "全筑股份",
    "hot_rank": 11,
    "hot_rank_chg": 24,
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
        "change_pct": 6.08
      },
      {
        "name": "长三角一体化",
        "change_pct": 4.33
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "装修装饰",
        "change_pct": 6.55
      },
      {
        "name": "装配式建筑",
        "change_pct": 5.6
      },
      {
        "name": "建筑节能",
        "change_pct": 5.85
      },
      {
        "name": "新型城镇化",
        "change_pct": 6.59
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 12.66
      },
      {
        "name": "旧改",
        "change_pct": 6.24
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 12,
    "hot_rank_chg": -4,
    "stock_cnt": 5872,
    "price": "7.71",
    "change": "-4.70",
    "market_id": "33",
    "circulate_market_value": "7768513600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 5.5
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "工业自动化",
        "change_pct": 9.28
      },
      {
        "name": "机械",
        "change_pct": 5.54
      },
      {
        "name": "智能制造",
        "change_pct": 9.09
      },
      {
        "name": "国产芯片",
        "change_pct": 12.42
      },
      {
        "name": "信创",
        "change_pct": 11.23
      },
      {
        "name": "AI算力芯片",
        "change_pct": 14.36
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 13,
    "hot_rank_chg": 0,
    "stock_cnt": 5872,
    "price": "4.34",
    "change": "-9.02",
    "market_id": "33",
    "circulate_market_value": "6861415300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 6.26
      },
      {
        "name": "体外诊断",
        "change_pct": 6.2
      },
      {
        "name": "医疗器械",
        "change_pct": 6.96
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "基因测序",
        "change_pct": 6.25
      },
      {
        "name": "预制菜",
        "change_pct": 2.25
      },
      {
        "name": "水产养殖",
        "change_pct": -1.14
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 5.73
      },
      {
        "name": "海洋经济",
        "change_pct": 6.16
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 15,
    "hot_rank_chg": -12,
    "stock_cnt": 5872,
    "price": "10.66",
    "change": "-5.66",
    "market_id": "33",
    "circulate_market_value": "4807943700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 8.68
      },
      {
        "name": "手游",
        "change_pct": 6.42
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "游戏",
        "change_pct": 6.52
      },
      {
        "name": "物联网",
        "change_pct": 9.29
      },
      {
        "name": "机器人",
        "change_pct": 9.35
      },
      {
        "name": "无人机",
        "change_pct": 8.53
      },
      {
        "name": "国产芯片",
        "change_pct": 12.42
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 9.33
      },
      {
        "name": "低空经济",
        "change_pct": 8.32
      },
      {
        "name": "无人物流车",
        "change_pct": 7.24
      }
    ]
  },
  {
    "code": "300324",
    "name": "旋极信息",
    "hot_rank": 16,
    "hot_rank_chg": 3,
    "stock_cnt": 5872,
    "price": "6.05",
    "change": "20.04",
    "market_id": "33",
    "circulate_market_value": "10345399300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI芯片",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 8.17
      },
      {
        "name": "数字孪生",
        "change_pct": 8.81
      },
      {
        "name": "半导体",
        "change_pct": 13.56
      },
      {
        "name": "国产软件",
        "change_pct": 11.03
      },
      {
        "name": "人工智能",
        "change_pct": 9.38
      },
      {
        "name": "网络安全",
        "change_pct": 10.52
      },
      {
        "name": "云计算数据中心",
        "change_pct": 10.54
      },
      {
        "name": "大飞机",
        "change_pct": 8.19
      },
      {
        "name": "北斗导航",
        "change_pct": 9.07
      },
      {
        "name": "军民融合",
        "change_pct": 8.71
      },
      {
        "name": "京津冀",
        "change_pct": 6.31
      },
      {
        "name": "物联网",
        "change_pct": 9.29
      },
      {
        "name": "大数据",
        "change_pct": 9.77
      },
      {
        "name": "智慧城市",
        "change_pct": 8.97
      },
      {
        "name": "电子发票",
        "change_pct": 9.89
      },
      {
        "name": "军工",
        "change_pct": 8.29
      },
      {
        "name": "无人机",
        "change_pct": 8.53
      },
      {
        "name": "智能制造",
        "change_pct": 9.09
      },
      {
        "name": "工业互联网",
        "change_pct": 8.47
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 9.03
      },
      {
        "name": "国产芯片",
        "change_pct": 12.42
      },
      {
        "name": "腾讯概念股",
        "change_pct": 9.33
      },
      {
        "name": "信创",
        "change_pct": 11.23
      },
      {
        "name": "BIPV概念",
        "change_pct": 5.93
      },
      {
        "name": "航天",
        "change_pct": 9.26
      },
      {
        "name": "数字人民币",
        "change_pct": 10.57
      },
      {
        "name": "智慧政务",
        "change_pct": 10.06
      },
      {
        "name": "医疗信息化",
        "change_pct": 9.23
      },
      {
        "name": "云游戏",
        "change_pct": 8.4
      },
      {
        "name": "华为产业链",
        "change_pct": 9.46
      },
      {
        "name": "物理AI",
        "change_pct": 11.74
      },
      {
        "name": "时空大数据",
        "change_pct": 9.56
      },
      {
        "name": "AI算力芯片",
        "change_pct": 14.36
      },
      {
        "name": "军工信息化",
        "change_pct": 10.13
      },
      {
        "name": "财税改革",
        "change_pct": 10.64
      },
      {
        "name": "区块链",
        "change_pct": 9.04
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 22,
    "hot_rank_chg": 4,
    "stock_cnt": 5872,
    "price": "6.63",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "30597176000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "华为欧拉",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 8.92
      },
      {
        "name": "国产软件",
        "change_pct": 11.03
      },
      {
        "name": "锂电池",
        "change_pct": 8.67
      },
      {
        "name": "人工智能",
        "change_pct": 9.38
      },
      {
        "name": "云计算数据中心",
        "change_pct": 10.54
      },
      {
        "name": "养老产业",
        "change_pct": 6.23
      },
      {
        "name": "大飞机",
        "change_pct": 8.19
      },
      {
        "name": "军民融合",
        "change_pct": 8.71
      },
      {
        "name": "物联网",
        "change_pct": 9.29
      },
      {
        "name": "大数据",
        "change_pct": 9.77
      },
      {
        "name": "智慧城市",
        "change_pct": 8.97
      },
      {
        "name": "军工",
        "change_pct": 8.29
      },
      {
        "name": "新能源汽车",
        "change_pct": 8.0
      },
      {
        "name": "机器人",
        "change_pct": 9.35
      },
      {
        "name": "黑色家电",
        "change_pct": 7.01
      },
      {
        "name": "家电",
        "change_pct": 6.51
      },
      {
        "name": "储能",
        "change_pct": 7.69
      },
      {
        "name": "智能制造",
        "change_pct": 9.09
      },
      {
        "name": "工业互联网",
        "change_pct": 8.47
      },
      {
        "name": "数字经济",
        "change_pct": 9.03
      },
      {
        "name": "百度概念股",
        "change_pct": 8.1
      },
      {
        "name": "NFT",
        "change_pct": 7.02
      },
      {
        "name": "跨境支付",
        "change_pct": 10.98
      },
      {
        "name": "华为海思",
        "change_pct": 10.63
      },
      {
        "name": "云游戏",
        "change_pct": 8.4
      },
      {
        "name": "网红/MCN",
        "change_pct": 6.35
      },
      {
        "name": "华为产业链",
        "change_pct": 9.46
      },
      {
        "name": "毫米波雷达",
        "change_pct": 9.48
      },
      {
        "name": "服务器",
        "change_pct": 11.01
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 8.81
      },
      {
        "name": "星闪概念",
        "change_pct": 10.46
      },
      {
        "name": "低空经济",
        "change_pct": 8.32
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 23,
    "hot_rank_chg": 1,
    "stock_cnt": 5872,
    "price": "4.82",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "12785293800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "洁净室",
    "xgb_concepts": [
      {
        "name": "装修装饰",
        "change_pct": 6.55
      },
      {
        "name": "装配式建筑",
        "change_pct": 5.6
      },
      {
        "name": "破净股",
        "change_pct": 3.49
      },
      {
        "name": "航天",
        "change_pct": 9.26
      },
      {
        "name": "旧改",
        "change_pct": 6.24
      }
    ]
  },
  {
    "code": "002642",
    "name": "荣联科技",
    "hot_rank": 24,
    "hot_rank_chg": 39,
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
        "change_pct": 8.68
      },
      {
        "name": "边缘计算",
        "change_pct": 10.46
      },
      {
        "name": "泛在电力物联网",
        "change_pct": 8.17
      },
      {
        "name": "数字孪生",
        "change_pct": 8.81
      },
      {
        "name": "精准医疗",
        "change_pct": 6.26
      },
      {
        "name": "国产软件",
        "change_pct": 11.03
      },
      {
        "name": "金融科技",
        "change_pct": 11.09
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "人工智能",
        "change_pct": 9.38
      },
      {
        "name": "网络安全",
        "change_pct": 10.52
      },
      {
        "name": "云计算数据中心",
        "change_pct": 10.54
      },
      {
        "name": "基因测序",
        "change_pct": 6.25
      },
      {
        "name": "物联网",
        "change_pct": 9.29
      },
      {
        "name": "山东国企改革",
        "change_pct": 4.72
      },
      {
        "name": "大数据",
        "change_pct": 9.77
      },
      {
        "name": "智慧城市",
        "change_pct": 8.97
      },
      {
        "name": "智慧物流",
        "change_pct": 6.97
      },
      {
        "name": "智能制造",
        "change_pct": 9.09
      },
      {
        "name": "工业互联网",
        "change_pct": 8.47
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 9.03
      },
      {
        "name": "腾讯概念股",
        "change_pct": 9.33
      },
      {
        "name": "信创",
        "change_pct": 11.23
      },
      {
        "name": "国资云",
        "change_pct": 8.07
      },
      {
        "name": "东数西算/算力",
        "change_pct": 10.55
      },
      {
        "name": "数字乡村",
        "change_pct": 7.48
      },
      {
        "name": "国企改革",
        "change_pct": 4.73
      },
      {
        "name": "智慧政务",
        "change_pct": 10.06
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 5.73
      },
      {
        "name": "远程办公",
        "change_pct": 8.79
      },
      {
        "name": "华为产业链",
        "change_pct": 9.46
      },
      {
        "name": "算力租赁",
        "change_pct": 10.39
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 8.81
      },
      {
        "name": "星闪概念",
        "change_pct": 10.46
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 26,
    "hot_rank_chg": -9,
    "stock_cnt": 5872,
    "price": "4.06",
    "change": "-2.17",
    "market_id": "17",
    "circulate_market_value": "8982055900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 5.14
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "云计算数据中心",
        "change_pct": 10.54
      },
      {
        "name": "光通信",
        "change_pct": 12.61
      },
      {
        "name": "林业",
        "change_pct": 3.84
      },
      {
        "name": "军民融合",
        "change_pct": 8.71
      },
      {
        "name": "军工",
        "change_pct": 8.29
      },
      {
        "name": "人造肉",
        "change_pct": 3.73
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 27,
    "hot_rank_chg": 4,
    "stock_cnt": 5872,
    "price": "9.61",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "17193619000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 2.3
      },
      {
        "name": "纯碱",
        "change_pct": 3.44
      },
      {
        "name": "食品",
        "change_pct": 3.22
      },
      {
        "name": "土壤修复",
        "change_pct": 6.26
      },
      {
        "name": "东数西算/算力",
        "change_pct": 10.55
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 11.82
      },
      {
        "name": "算力租赁",
        "change_pct": 10.39
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 10.84
      }
    ]
  },
  {
    "code": "000889",
    "name": "中嘉博创",
    "hot_rank": 30,
    "hot_rank_chg": 62,
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
        "change_pct": 11.09
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 9.33
      },
      {
        "name": "华为产业链",
        "change_pct": 9.46
      },
      {
        "name": "Kimi概念",
        "change_pct": 9.05
      },
      {
        "name": "智谱AI",
        "change_pct": 11.25
      },
      {
        "name": "区块链",
        "change_pct": 9.04
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 32,
    "hot_rank_chg": -11,
    "stock_cnt": 5872,
    "price": "3.80",
    "change": "-4.04",
    "market_id": "17",
    "circulate_market_value": "5551778400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 4.19
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "冷链",
        "change_pct": 5.01
      },
      {
        "name": "医药",
        "change_pct": 5.7
      },
      {
        "name": "食品",
        "change_pct": 3.22
      },
      {
        "name": "食品安全",
        "change_pct": 7.39
      },
      {
        "name": "预制菜",
        "change_pct": 2.25
      },
      {
        "name": "水产养殖",
        "change_pct": -1.14
      },
      {
        "name": "海洋经济",
        "change_pct": 6.16
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 34,
    "hot_rank_chg": -14,
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
        "change_pct": 9.03
      },
      {
        "name": "上海国企改革",
        "change_pct": 4.26
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 5.5
      },
      {
        "name": "国企改革",
        "change_pct": 4.73
      }
    ]
  },
  {
    "code": "002122",
    "name": "汇洲智能",
    "hot_rank": 39,
    "hot_rank_chg": 17,
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
        "change_pct": 6.58
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "人工智能",
        "change_pct": 9.38
      },
      {
        "name": "云计算数据中心",
        "change_pct": 10.54
      },
      {
        "name": "智慧停车",
        "change_pct": 8.29
      },
      {
        "name": "大数据",
        "change_pct": 9.77
      },
      {
        "name": "风电",
        "change_pct": 6.08
      },
      {
        "name": "复牌股",
        "change_pct": 3.16
      },
      {
        "name": "智能制造",
        "change_pct": 9.09
      },
      {
        "name": "工业母机",
        "change_pct": 9.87
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 42,
    "hot_rank_chg": -14,
    "stock_cnt": 5872,
    "price": "2.75",
    "change": "3.77",
    "market_id": "17",
    "circulate_market_value": "7871523700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 6.42
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "游戏",
        "change_pct": 6.52
      },
      {
        "name": "影视",
        "change_pct": 5.46
      },
      {
        "name": "低价股",
        "change_pct": 3.88
      },
      {
        "name": "国企改革",
        "change_pct": 4.73
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.59
      },
      {
        "name": "AI视频",
        "change_pct": 8.51
      }
    ]
  },
  {
    "code": "600814",
    "name": "杭州解百",
    "hot_rank": 48,
    "hot_rank_chg": -14,
    "stock_cnt": 5872,
    "price": "9.53",
    "change": "3.70",
    "market_id": "17",
    "circulate_market_value": "7005299000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 3.89
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "浙江国企改革",
        "change_pct": 5.29
      },
      {
        "name": "国企改革",
        "change_pct": 4.73
      },
      {
        "name": "医美",
        "change_pct": 4.71
      }
    ]
  },
  {
    "code": "002651",
    "name": "利君股份",
    "hot_rank": 49,
    "hot_rank_chg": 30,
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
        "change_pct": 5.68
      },
      {
        "name": "通用航空",
        "change_pct": 7.75
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "大飞机",
        "change_pct": 8.19
      },
      {
        "name": "军工",
        "change_pct": 8.29
      },
      {
        "name": "无人机",
        "change_pct": 8.53
      },
      {
        "name": "航天",
        "change_pct": 9.26
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 52,
    "hot_rank_chg": -9,
    "stock_cnt": 5872,
    "price": "4.80",
    "change": "6.67",
    "market_id": "33",
    "circulate_market_value": "168846240000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 11.33
      },
      {
        "name": "手机产业链",
        "change_pct": 10.56
      },
      {
        "name": "超高清视频",
        "change_pct": 8.92
      },
      {
        "name": "苹果产业链",
        "change_pct": 11.3
      },
      {
        "name": "电竞",
        "change_pct": 6.96
      },
      {
        "name": "半导体",
        "change_pct": 13.56
      },
      {
        "name": "人工智能",
        "change_pct": 9.38
      },
      {
        "name": "互联网医疗",
        "change_pct": 6.34
      },
      {
        "name": "VR&AR",
        "change_pct": 10.05
      },
      {
        "name": "OLED",
        "change_pct": 11.08
      },
      {
        "name": "京津冀",
        "change_pct": 6.31
      },
      {
        "name": "物联网",
        "change_pct": 9.29
      },
      {
        "name": "指纹识别",
        "change_pct": 10.77
      },
      {
        "name": "汽车零部件",
        "change_pct": 7.94
      },
      {
        "name": "白马股",
        "change_pct": 2.63
      },
      {
        "name": "智能制造",
        "change_pct": 9.09
      },
      {
        "name": "小米概念股",
        "change_pct": 10.33
      },
      {
        "name": "国产芯片",
        "change_pct": 12.42
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 10.9
      },
      {
        "name": "全息概念",
        "change_pct": 8.46
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 8.29
      },
      {
        "name": "MicroLED",
        "change_pct": 10.91
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 8.99
      },
      {
        "name": "智能手表",
        "change_pct": 10.45
      },
      {
        "name": "MiniLED",
        "change_pct": 10.27
      },
      {
        "name": "传感器",
        "change_pct": 10.59
      },
      {
        "name": "大硅片",
        "change_pct": 14.8
      },
      {
        "name": "AI PC",
        "change_pct": 11.22
      },
      {
        "name": "华为产业链",
        "change_pct": 9.46
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 13.91
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 10.99
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 11.35
      }
    ]
  },
  {
    "code": "002548",
    "name": "金新农",
    "hot_rank": 54,
    "hot_rank_chg": -13,
    "stock_cnt": 5872,
    "price": "4.90",
    "change": "-8.07",
    "market_id": "33",
    "circulate_market_value": "3941910300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 3.32
      },
      {
        "name": "养猪",
        "change_pct": 0.92
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "大农业",
        "change_pct": 3.87
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 55,
    "hot_rank_chg": -2,
    "stock_cnt": 5872,
    "price": "9.27",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "9825784400.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "太空算力",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 5.46
      },
      {
        "name": "电子烟",
        "change_pct": 9.96
      },
      {
        "name": "一带一路",
        "change_pct": 5.5
      },
      {
        "name": "造纸",
        "change_pct": 5.14
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "包装印刷",
        "change_pct": 6.7
      },
      {
        "name": "卫星互联网",
        "change_pct": 8.8
      },
      {
        "name": "太空算力",
        "change_pct": 9.27
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 60,
    "hot_rank_chg": -23,
    "stock_cnt": 5872,
    "price": "9.14",
    "change": "-2.87",
    "market_id": "17",
    "circulate_market_value": "5865898600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.91
      },
      {
        "name": "农业种植",
        "change_pct": 2.51
      },
      {
        "name": "湖南国企改革",
        "change_pct": 4.87
      },
      {
        "name": "乡村振兴",
        "change_pct": 4.83
      },
      {
        "name": "休闲食品",
        "change_pct": 3.2
      },
      {
        "name": "食品",
        "change_pct": 3.22
      },
      {
        "name": "食品安全",
        "change_pct": 7.39
      },
      {
        "name": "社区团购",
        "change_pct": 2.57
      },
      {
        "name": "大农业",
        "change_pct": 3.87
      },
      {
        "name": "预制菜",
        "change_pct": 2.25
      },
      {
        "name": "人造肉",
        "change_pct": 3.73
      },
      {
        "name": "国企改革",
        "change_pct": 4.73
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 62,
    "hot_rank_chg": -32,
    "stock_cnt": 5872,
    "price": "9.10",
    "change": "-1.41",
    "market_id": "17",
    "circulate_market_value": "2453471100000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": 5.57
      },
      {
        "name": "高股息",
        "change_pct": 0.41
      },
      {
        "name": "银行",
        "change_pct": -1.07
      },
      {
        "name": "白马股",
        "change_pct": 2.63
      },
      {
        "name": "破净股",
        "change_pct": 3.49
      },
      {
        "name": "大金融",
        "change_pct": 1.84
      }
    ]
  },
  {
    "code": "601519",
    "name": "大智慧",
    "hot_rank": 63,
    "hot_rank_chg": 366,
    "stock_cnt": 5872,
    "price": "7.56",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "15038050000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "金融信息服务",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 11.03
      },
      {
        "name": "金融科技",
        "change_pct": 11.09
      },
      {
        "name": "直播/短视频",
        "change_pct": 7.28
      },
      {
        "name": "大数据",
        "change_pct": 9.77
      }
    ]
  },
  {
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 64,
    "hot_rank_chg": 8,
    "stock_cnt": 5872,
    "price": "10.51",
    "change": "8.80",
    "market_id": "17",
    "circulate_market_value": "4226183500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 6.08
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "云计算数据中心",
        "change_pct": 10.54
      },
      {
        "name": "纺织服装",
        "change_pct": 5.11
      },
      {
        "name": "湖南国企改革",
        "change_pct": 4.87
      },
      {
        "name": "外贸受益概念",
        "change_pct": 8.09
      },
      {
        "name": "东数西算/算力",
        "change_pct": 10.55
      },
      {
        "name": "国企改革",
        "change_pct": 4.73
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 5.73
      },
      {
        "name": "液冷服务器",
        "change_pct": 10.17
      }
    ]
  },
  {
    "code": "600280",
    "name": "中央商场",
    "hot_rank": 65,
    "hot_rank_chg": 11,
    "stock_cnt": 5872,
    "price": "3.41",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "3847621600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 3.89
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      }
    ]
  },
  {
    "code": "002872",
    "name": "天圣制药",
    "hot_rank": 68,
    "hot_rank_chg": 43,
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
        "change_pct": 4.19
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 5.0
      },
      {
        "name": "ST摘帽",
        "change_pct": 6.58
      },
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "复牌股",
        "change_pct": 3.16
      },
      {
        "name": "医药",
        "change_pct": 5.7
      },
      {
        "name": "肝炎概念",
        "change_pct": 5.31
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 5.73
      }
    ]
  },
  {
    "code": "002298",
    "name": "中电鑫龙",
    "hot_rank": 80,
    "hot_rank_chg": 114,
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
        "change_pct": 8.17
      },
      {
        "name": "国产软件",
        "change_pct": 11.03
      },
      {
        "name": "锂电池",
        "change_pct": 8.67
      },
      {
        "name": "人工智能",
        "change_pct": 9.38
      },
      {
        "name": "充电桩",
        "change_pct": 8.06
      },
      {
        "name": "云计算数据中心",
        "change_pct": 10.54
      },
      {
        "name": "军民融合",
        "change_pct": 8.71
      },
      {
        "name": "磁悬浮",
        "change_pct": 7.46
      },
      {
        "name": "人脸识别",
        "change_pct": 8.66
      },
      {
        "name": "水利",
        "change_pct": 5.63
      },
      {
        "name": "物联网",
        "change_pct": 9.29
      },
      {
        "name": "大数据",
        "change_pct": 9.77
      },
      {
        "name": "智慧城市",
        "change_pct": 8.97
      },
      {
        "name": "军工",
        "change_pct": 8.29
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 8.0
      },
      {
        "name": "储能",
        "change_pct": 7.69
      },
      {
        "name": "智慧安防",
        "change_pct": 9.43
      },
      {
        "name": "无人机",
        "change_pct": 8.53
      },
      {
        "name": "虚拟电厂",
        "change_pct": 7.59
      },
      {
        "name": "信创",
        "change_pct": 11.23
      },
      {
        "name": "元宇宙",
        "change_pct": 9.1
      },
      {
        "name": "东数西算/算力",
        "change_pct": 10.55
      },
      {
        "name": "新型城镇化",
        "change_pct": 6.59
      },
      {
        "name": "AIGC概念",
        "change_pct": 8.89
      },
      {
        "name": "数字乡村",
        "change_pct": 7.48
      },
      {
        "name": "华为海思",
        "change_pct": 10.63
      },
      {
        "name": "闪存",
        "change_pct": 12.97
      },
      {
        "name": "UWB超宽带",
        "change_pct": 10.0
      },
      {
        "name": "智慧政务",
        "change_pct": 10.06
      },
      {
        "name": "特高压",
        "change_pct": 7.19
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 10.91
      },
      {
        "name": "华为产业链",
        "change_pct": 9.46
      },
      {
        "name": "时空大数据",
        "change_pct": 9.56
      },
      {
        "name": "服务器",
        "change_pct": 11.01
      },
      {
        "name": "智能电网",
        "change_pct": 8.36
      },
      {
        "name": "磁电存储",
        "change_pct": 11.23
      },
      {
        "name": "军工信息化",
        "change_pct": 10.13
      },
      {
        "name": "光纤概念",
        "change_pct": 11.26
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 5.54
      }
    ]
  },
  {
    "code": "600667",
    "name": "太极实业",
    "hot_rank": 84,
    "hot_rank_chg": 22,
    "stock_cnt": 5872,
    "price": "11.97",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "25035760000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "存储芯片",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 4.33
      },
      {
        "name": "半导体",
        "change_pct": 13.56
      },
      {
        "name": "光伏",
        "change_pct": 7.3
      },
      {
        "name": "风电",
        "change_pct": 6.08
      },
      {
        "name": "江苏国企改革",
        "change_pct": 4.54
      },
      {
        "name": "国产芯片",
        "change_pct": 12.42
      },
      {
        "name": "BIPV概念",
        "change_pct": 5.93
      },
      {
        "name": "内存",
        "change_pct": 12.28
      },
      {
        "name": "国企改革",
        "change_pct": 4.73
      },
      {
        "name": "闪存",
        "change_pct": 12.97
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 14.17
      }
    ]
  },
  {
    "code": "000547",
    "name": "航天发展",
    "hot_rank": 85,
    "hot_rank_chg": 216,
    "stock_cnt": 5872,
    "price": "10.62",
    "change": "5.99",
    "market_id": "33",
    "circulate_market_value": "16876466000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 4.81
      },
      {
        "name": "5G",
        "change_pct": 10.61
      },
      {
        "name": "VR&AR",
        "change_pct": 10.05
      },
      {
        "name": "网络安全",
        "change_pct": 10.52
      },
      {
        "name": "军工集团",
        "change_pct": 7.32
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 4.87
      },
      {
        "name": "大数据",
        "change_pct": 9.77
      },
      {
        "name": "军工",
        "change_pct": 8.29
      },
      {
        "name": "无人机",
        "change_pct": 8.53
      },
      {
        "name": "信创",
        "change_pct": 11.23
      },
      {
        "name": "航天",
        "change_pct": 9.26
      },
      {
        "name": "国企改革",
        "change_pct": 4.73
      },
      {
        "name": "智慧政务",
        "change_pct": 10.06
      },
      {
        "name": "卫星互联网",
        "change_pct": 8.8
      },
      {
        "name": "华为产业链",
        "change_pct": 9.46
      },
      {
        "name": "自贸区",
        "change_pct": 3.92
      },
      {
        "name": "低空经济",
        "change_pct": 8.32
      },
      {
        "name": "军工信息化",
        "change_pct": 10.13
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 89,
    "hot_rank_chg": 64,
    "stock_cnt": 5872,
    "price": "6.03",
    "change": "3.25",
    "market_id": "33",
    "circulate_market_value": "11548007500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 4.87
      },
      {
        "name": "林业",
        "change_pct": 3.84
      },
      {
        "name": "碳中和",
        "change_pct": 4.85
      },
      {
        "name": "自贸区",
        "change_pct": 3.92
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 91,
    "hot_rank_chg": -22,
    "stock_cnt": 5872,
    "price": "9.17",
    "change": "5.04",
    "market_id": "33",
    "circulate_market_value": "4412047700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 6.2
      },
      {
        "name": "医疗器械",
        "change_pct": 6.96
      },
      {
        "name": "锂电池",
        "change_pct": 8.67
      },
      {
        "name": "基因测序",
        "change_pct": 6.25
      },
      {
        "name": "PCB板",
        "change_pct": 12.16
      },
      {
        "name": "医药",
        "change_pct": 5.7
      },
      {
        "name": "新能源汽车",
        "change_pct": 8.0
      },
      {
        "name": "化学原料药",
        "change_pct": 5.61
      },
      {
        "name": "食品安全",
        "change_pct": 7.39
      },
      {
        "name": "辅助生殖",
        "change_pct": 6.18
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 12.66
      },
      {
        "name": "异丙醇",
        "change_pct": 6.09
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 5.73
      },
      {
        "name": "磷酸铁锂",
        "change_pct": 6.69
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 93,
    "hot_rank_chg": -20,
    "stock_cnt": 5872,
    "price": "4.18",
    "change": "-5.00",
    "market_id": "17",
    "circulate_market_value": "5456864200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 4.35
      },
      {
        "name": "高速公路",
        "change_pct": 1.36
      },
      {
        "name": "振兴东北",
        "change_pct": 4.08
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 1.75
      }
    ]
  },
  {
    "code": "003040",
    "name": "楚天龙",
    "hot_rank": 99,
    "hot_rank_chg": 30,
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
        "change_pct": 8.68
      },
      {
        "name": "金融科技",
        "change_pct": 11.09
      },
      {
        "name": "人工智能",
        "change_pct": 9.38
      },
      {
        "name": "物联网",
        "change_pct": 9.29
      },
      {
        "name": "数字经济",
        "change_pct": 9.03
      },
      {
        "name": "国产操作系统",
        "change_pct": 10.39
      },
      {
        "name": "电子身份证",
        "change_pct": 10.44
      },
      {
        "name": "数字人民币",
        "change_pct": 10.57
      },
      {
        "name": "智慧政务",
        "change_pct": 10.06
      },
      {
        "name": "eSIM",
        "change_pct": 10.62
      },
      {
        "name": "华为产业链",
        "change_pct": 9.46
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 8.81
      },
      {
        "name": "区块链",
        "change_pct": 9.04
      }
    ]
  },
  {
    "code": "000066",
    "name": "中国长城",
    "hot_rank": 100,
    "hot_rank_chg": 13,
    "stock_cnt": 5872,
    "price": "11.66",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "37610378000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "国产CPU",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 13.56
      },
      {
        "name": "央企改革",
        "change_pct": 4.81
      },
      {
        "name": "锂电池",
        "change_pct": 8.67
      },
      {
        "name": "海工装备",
        "change_pct": 5.84
      },
      {
        "name": "量子通信",
        "change_pct": 8.63
      },
      {
        "name": "人工智能",
        "change_pct": 9.38
      },
      {
        "name": "网络安全",
        "change_pct": 10.52
      },
      {
        "name": "军工集团",
        "change_pct": 7.32
      },
      {
        "name": "云计算数据中心",
        "change_pct": 10.54
      },
      {
        "name": "北斗导航",
        "change_pct": 9.07
      },
      {
        "name": "军民融合",
        "change_pct": 8.71
      },
      {
        "name": "智慧城市",
        "change_pct": 8.97
      },
      {
        "name": "军工",
        "change_pct": 8.29
      },
      {
        "name": "新能源汽车",
        "change_pct": 8.0
      },
      {
        "name": "中字头",
        "change_pct": 2.73
      },
      {
        "name": "无人机",
        "change_pct": 8.53
      },
      {
        "name": "数字经济",
        "change_pct": 9.03
      },
      {
        "name": "国产芯片",
        "change_pct": 12.42
      },
      {
        "name": "百度概念股",
        "change_pct": 8.1
      },
      {
        "name": "国产操作系统",
        "change_pct": 10.39
      },
      {
        "name": "信创",
        "change_pct": 11.23
      },
      {
        "name": "钠电池",
        "change_pct": 7.37
      },
      {
        "name": "国资云",
        "change_pct": 8.07
      },
      {
        "name": "东数西算/算力",
        "change_pct": 10.55
      },
      {
        "name": "F5G",
        "change_pct": 10.5
      },
      {
        "name": "芯粒Chiplet",
        "change_pct": 14.79
      },
      {
        "name": "数据要素",
        "change_pct": 10.04
      },
      {
        "name": "航天",
        "change_pct": 9.26
      },
      {
        "name": "国企改革",
        "change_pct": 4.73
      },
      {
        "name": "AI PC",
        "change_pct": 11.22
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 11.82
      },
      {
        "name": "CPU概念",
        "change_pct": 12.93
      },
      {
        "name": "华为产业链",
        "change_pct": 9.46
      },
      {
        "name": "AI算力芯片",
        "change_pct": 14.36
      },
      {
        "name": "交换机",
        "change_pct": 12.28
      },
      {
        "name": "服务器",
        "change_pct": 11.01
      },
      {
        "name": "智能电网",
        "change_pct": 8.36
      },
      {
        "name": "液冷服务器",
        "change_pct": 10.17
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 10.84
      },
      {
        "name": "算力一体机",
        "change_pct": 11.84
      },
      {
        "name": "海洋经济",
        "change_pct": 6.16
      },
      {
        "name": "太空算力",
        "change_pct": 9.27
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "42.15", "change": "0.60", "market_id": "33", "circulate_market_value": "32108421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "20.90", "change": "10.00", "market_id": "17", "circulate_market_value": "22916739000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为昇腾"}, {"code": "000158", "name": "常山北明", "hot_rank": 3, "hot_rank_chg": 6, "stock_cnt": 5872, "price": "15.27", "change": "10.01", "market_id": "33", "circulate_market_value": "24289128000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "华为昇腾"}, {"code": "002261", "name": "拓维信息", "hot_rank": 4, "hot_rank_chg": 14, "stock_cnt": 5872, "price": "23.06", "change": "10.02", "market_id": "33", "circulate_market_value": "26429192000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "华为昇腾"}, {"code": "300502", "name": "新易盛", "hot_rank": 5, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "226.84", "change": "20.00", "market_id": "33", "circulate_market_value": "284621530000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "1.6T光模块"}, {"code": "002197", "name": "证通电子", "hot_rank": 6, "hot_rank_chg": 36, "stock_cnt": 5872, "price": "7.76", "change": "10.07", "market_id": "33", "circulate_market_value": "4143840100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "算力租赁", "xgb_concepts": [{"name": "国产软件", "change_pct": 11.03}, {"name": "深圳本地股", "change_pct": 6.97}, {"name": "ST摘帽", "change_pct": 6.58}, {"name": "金融科技", "change_pct": 11.09}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "网络安全", "change_pct": 10.52}, {"name": "充电桩", "change_pct": 8.06}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "移动支付", "change_pct": 9.62}, {"name": "教育", "change_pct": 6.69}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "粤港澳大湾区", "change_pct": 5.1}, {"name": "LED", "change_pct": 9.17}, {"name": "新能源汽车", "change_pct": 8.0}, {"name": "机器人", "change_pct": 9.35}, {"name": "数字经济", "change_pct": 9.03}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "阿里巴巴概念股", "change_pct": 9.27}, {"name": "腾讯概念股", "change_pct": 9.33}, {"name": "信创", "change_pct": 11.23}, {"name": "NFT", "change_pct": 7.02}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "数字乡村", "change_pct": 7.48}, {"name": "教育信息化", "change_pct": 7.85}, {"name": "数字人民币", "change_pct": 10.57}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "医疗信息化", "change_pct": 9.23}, {"name": "华为鸿蒙", "change_pct": 10.26}, {"name": "华为云·鲲鹏", "change_pct": 10.91}, {"name": "智慧灯杆", "change_pct": 8.71}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "算力租赁", "change_pct": 10.39}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 7, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "516.15", "change": "19.98", "market_id": "33", "circulate_market_value": "572893980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "15.45", "change": "-4.45", "market_id": "33", "circulate_market_value": "9271803400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "21.10", "change": "9.72", "market_id": "33", "circulate_market_value": "12310547200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "798.70", "change": "19.93", "market_id": "17", "circulate_market_value": "24031062000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603030", "name": "全筑股份", "hot_rank": 11, "hot_rank_chg": 24, "stock_cnt": 5872, "price": "3.16", "change": "10.11", "market_id": "17", "circulate_market_value": "4161509900.00", "change_type": "1", "change_section": "9", "change_days": "7", "change_reason": "边缘AI算力", "xgb_concepts": [{"name": "跨境电商", "change_pct": 6.08}, {"name": "长三角一体化", "change_pct": 4.33}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "装修装饰", "change_pct": 6.55}, {"name": "装配式建筑", "change_pct": 5.6}, {"name": "建筑节能", "change_pct": 5.85}, {"name": "新型城镇化", "change_pct": 6.59}, {"name": "光刻机（胶）", "change_pct": 12.66}, {"name": "旧改", "change_pct": 6.24}]}, {"code": "002685", "name": "华东重机", "hot_rank": 12, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "7.71", "change": "-4.70", "market_id": "33", "circulate_market_value": "7768513600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 5.5}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "工业自动化", "change_pct": 9.28}, {"name": "机械", "change_pct": 5.54}, {"name": "智能制造", "change_pct": 9.09}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "信创", "change_pct": 11.23}, {"name": "AI算力芯片", "change_pct": 14.36}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 13, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "4.34", "change": "-9.02", "market_id": "33", "circulate_market_value": "6861415300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 6.26}, {"name": "体外诊断", "change_pct": 6.2}, {"name": "医疗器械", "change_pct": 6.96}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "基因测序", "change_pct": 6.25}, {"name": "预制菜", "change_pct": 2.25}, {"name": "水产养殖", "change_pct": -1.14}, {"name": "新冠病毒防治", "change_pct": 5.73}, {"name": "海洋经济", "change_pct": 6.16}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 14, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "160.52", "change": "19.80", "market_id": "33", "circulate_market_value": "174708050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002148", "name": "北纬科技", "hot_rank": 15, "hot_rank_chg": -12, "stock_cnt": 5872, "price": "10.66", "change": "-5.66", "market_id": "33", "circulate_market_value": "4807943700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 8.68}, {"name": "手游", "change_pct": 6.42}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "游戏", "change_pct": 6.52}, {"name": "物联网", "change_pct": 9.29}, {"name": "机器人", "change_pct": 9.35}, {"name": "无人机", "change_pct": 8.53}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "5G消息/RCS", "change_pct": 9.33}, {"name": "低空经济", "change_pct": 8.32}, {"name": "无人物流车", "change_pct": 7.24}]}, {"code": "300324", "name": "旋极信息", "hot_rank": 16, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "6.05", "change": "20.04", "market_id": "33", "circulate_market_value": "10345399300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI芯片", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 8.17}, {"name": "数字孪生", "change_pct": 8.81}, {"name": "半导体", "change_pct": 13.56}, {"name": "国产软件", "change_pct": 11.03}, {"name": "人工智能", "change_pct": 9.38}, {"name": "网络安全", "change_pct": 10.52}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "大飞机", "change_pct": 8.19}, {"name": "北斗导航", "change_pct": 9.07}, {"name": "军民融合", "change_pct": 8.71}, {"name": "京津冀", "change_pct": 6.31}, {"name": "物联网", "change_pct": 9.29}, {"name": "大数据", "change_pct": 9.77}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "电子发票", "change_pct": 9.89}, {"name": "军工", "change_pct": 8.29}, {"name": "无人机", "change_pct": 8.53}, {"name": "智能制造", "change_pct": 9.09}, {"name": "工业互联网", "change_pct": 8.47}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 9.03}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "腾讯概念股", "change_pct": 9.33}, {"name": "信创", "change_pct": 11.23}, {"name": "BIPV概念", "change_pct": 5.93}, {"name": "航天", "change_pct": 9.26}, {"name": "数字人民币", "change_pct": 10.57}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "医疗信息化", "change_pct": 9.23}, {"name": "云游戏", "change_pct": 8.4}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "物理AI", "change_pct": 11.74}, {"name": "时空大数据", "change_pct": 9.56}, {"name": "AI算力芯片", "change_pct": 14.36}, {"name": "军工信息化", "change_pct": 10.13}, {"name": "财税改革", "change_pct": 10.64}, {"name": "区块链", "change_pct": 9.04}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 17, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "20.63", "change": "-6.06", "market_id": "33", "circulate_market_value": "9481791400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603960", "name": "克来机电", "hot_rank": 18, "hot_rank_chg": 5, "stock_cnt": 5872, "price": "22.51", "change": "10.02", "market_id": "17", "circulate_market_value": "5902074700.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "人形机器人"}, {"code": "002384", "name": "东山精密", "hot_rank": 19, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "79.77", "change": "10.00", "market_id": "33", "circulate_market_value": "110586884000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 20, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "36.93", "change": "12.97", "market_id": "17", "circulate_market_value": "166297230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002771", "name": "真视通", "hot_rank": 21, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "21.10", "change": "7.65", "market_id": "33", "circulate_market_value": "3810498700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 22, "hot_rank_chg": 4, "stock_cnt": 5872, "price": "6.63", "change": "9.95", "market_id": "17", "circulate_market_value": "30597176000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为欧拉", "xgb_concepts": [{"name": "超高清视频", "change_pct": 8.92}, {"name": "国产软件", "change_pct": 11.03}, {"name": "锂电池", "change_pct": 8.67}, {"name": "人工智能", "change_pct": 9.38}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "养老产业", "change_pct": 6.23}, {"name": "大飞机", "change_pct": 8.19}, {"name": "军民融合", "change_pct": 8.71}, {"name": "物联网", "change_pct": 9.29}, {"name": "大数据", "change_pct": 9.77}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "军工", "change_pct": 8.29}, {"name": "新能源汽车", "change_pct": 8.0}, {"name": "机器人", "change_pct": 9.35}, {"name": "黑色家电", "change_pct": 7.01}, {"name": "家电", "change_pct": 6.51}, {"name": "储能", "change_pct": 7.69}, {"name": "智能制造", "change_pct": 9.09}, {"name": "工业互联网", "change_pct": 8.47}, {"name": "数字经济", "change_pct": 9.03}, {"name": "百度概念股", "change_pct": 8.1}, {"name": "NFT", "change_pct": 7.02}, {"name": "跨境支付", "change_pct": 10.98}, {"name": "华为海思", "change_pct": 10.63}, {"name": "云游戏", "change_pct": 8.4}, {"name": "网红/MCN", "change_pct": 6.35}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "毫米波雷达", "change_pct": 9.48}, {"name": "服务器", "change_pct": 11.01}, {"name": "AI大模型/智能体", "change_pct": 8.81}, {"name": "星闪概念", "change_pct": 10.46}, {"name": "低空经济", "change_pct": 8.32}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 23, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "4.82", "change": "10.05", "market_id": "33", "circulate_market_value": "12785293800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "洁净室", "xgb_concepts": [{"name": "装修装饰", "change_pct": 6.55}, {"name": "装配式建筑", "change_pct": 5.6}, {"name": "破净股", "change_pct": 3.49}, {"name": "航天", "change_pct": 9.26}, {"name": "旧改", "change_pct": 6.24}]}, {"code": "002642", "name": "荣联科技", "hot_rank": 24, "hot_rank_chg": 39, "stock_cnt": 5872, "price": "9.16", "change": "9.96", "market_id": "33", "circulate_market_value": "6060075700.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "存储设备集采", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 8.68}, {"name": "边缘计算", "change_pct": 10.46}, {"name": "泛在电力物联网", "change_pct": 8.17}, {"name": "数字孪生", "change_pct": 8.81}, {"name": "精准医疗", "change_pct": 6.26}, {"name": "国产软件", "change_pct": 11.03}, {"name": "金融科技", "change_pct": 11.09}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "人工智能", "change_pct": 9.38}, {"name": "网络安全", "change_pct": 10.52}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "基因测序", "change_pct": 6.25}, {"name": "物联网", "change_pct": 9.29}, {"name": "山东国企改革", "change_pct": 4.72}, {"name": "大数据", "change_pct": 9.77}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "智慧物流", "change_pct": 6.97}, {"name": "智能制造", "change_pct": 9.09}, {"name": "工业互联网", "change_pct": 8.47}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 9.03}, {"name": "腾讯概念股", "change_pct": 9.33}, {"name": "信创", "change_pct": 11.23}, {"name": "国资云", "change_pct": 8.07}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "数字乡村", "change_pct": 7.48}, {"name": "国企改革", "change_pct": 4.73}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "新冠病毒防治", "change_pct": 5.73}, {"name": "远程办公", "change_pct": 8.79}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "算力租赁", "change_pct": 10.39}, {"name": "AI大模型/智能体", "change_pct": 8.81}, {"name": "星闪概念", "change_pct": 10.46}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 25, "hot_rank_chg": 56, "stock_cnt": 5872, "price": "28.42", "change": "9.98", "market_id": "17", "circulate_market_value": "112872503000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电子布"}, {"code": "600103", "name": "青山纸业", "hot_rank": 26, "hot_rank_chg": -9, "stock_cnt": 5872, "price": "4.06", "change": "-2.17", "market_id": "17", "circulate_market_value": "8982055900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 5.14}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "光通信", "change_pct": 12.61}, {"name": "林业", "change_pct": 3.84}, {"name": "军民融合", "change_pct": 8.71}, {"name": "军工", "change_pct": 8.29}, {"name": "人造肉", "change_pct": 3.73}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 27, "hot_rank_chg": 4, "stock_cnt": 5872, "price": "9.61", "change": "9.95", "market_id": "17", "circulate_market_value": "17193619000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "调味品", "change_pct": 2.3}, {"name": "纯碱", "change_pct": 3.44}, {"name": "食品", "change_pct": 3.22}, {"name": "土壤修复", "change_pct": 6.26}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "OpenClaw概念", "change_pct": 11.82}, {"name": "算力租赁", "change_pct": 10.39}, {"name": "DeepSeek概念股", "change_pct": 10.84}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 28, "hot_rank_chg": -16, "stock_cnt": 5872, "price": "15.16", "change": "4.77", "market_id": "17", "circulate_market_value": "10313646300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 29, "hot_rank_chg": 56, "stock_cnt": 5872, "price": "17.39", "change": "-9.99", "market_id": "33", "circulate_market_value": "3307534500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000889", "name": "中嘉博创", "hot_rank": 30, "hot_rank_chg": 62, "stock_cnt": 5872, "price": "4.30", "change": "9.97", "market_id": "33", "circulate_market_value": "3740137600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力销售", "xgb_concepts": [{"name": "金融科技", "change_pct": 11.09}, {"name": "5G消息/RCS", "change_pct": 9.33}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "Kimi概念", "change_pct": 9.05}, {"name": "智谱AI", "change_pct": 11.25}, {"name": "区块链", "change_pct": 9.04}]}, {"code": "301391", "name": "卡莱特", "hot_rank": 31, "hot_rank_chg": 34, "stock_cnt": 5872, "price": "68.80", "change": "20.01", "market_id": "33", "circulate_market_value": "6387080400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为昇腾"}, {"code": "600467", "name": "好当家", "hot_rank": 32, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "3.80", "change": "-4.04", "market_id": "17", "circulate_market_value": "5551778400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 4.19}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "冷链", "change_pct": 5.01}, {"name": "医药", "change_pct": 5.7}, {"name": "食品", "change_pct": 3.22}, {"name": "食品安全", "change_pct": 7.39}, {"name": "预制菜", "change_pct": 2.25}, {"name": "水产养殖", "change_pct": -1.14}, {"name": "海洋经济", "change_pct": 6.16}]}, {"code": "600584", "name": "长电科技", "hot_rank": 33, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "52.58", "change": "10.00", "market_id": "17", "circulate_market_value": "94087418000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "600825", "name": "新华传媒", "hot_rank": 34, "hot_rank_chg": -14, "stock_cnt": 5872, "price": "12.36", "change": "9.96", "market_id": "17", "circulate_market_value": "12914813800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "界面财联社重组", "xgb_concepts": [{"name": "资产重组", "change_pct": 9.03}, {"name": "上海国企改革", "change_pct": 4.26}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 5.5}, {"name": "国企改革", "change_pct": 4.73}]}, {"code": "600206", "name": "有研新材", "hot_rank": 35, "hot_rank_chg": 4, "stock_cnt": 5872, "price": "40.58", "change": "10.00", "market_id": "17", "circulate_market_value": "34353134000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体靶材"}, {"code": "000823", "name": "超声电子", "hot_rank": 36, "hot_rank_chg": -9, "stock_cnt": 5872, "price": "22.56", "change": "8.62", "market_id": "33", "circulate_market_value": "13421669700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 37, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "217.34", "change": "10.00", "market_id": "17", "circulate_market_value": "145773920000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "002122", "name": "汇洲智能", "hot_rank": 39, "hot_rank_chg": 17, "stock_cnt": 5872, "price": "4.18", "change": "10.00", "market_id": "33", "circulate_market_value": "8304914000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "具身智能数据", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 6.58}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "人工智能", "change_pct": 9.38}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "智慧停车", "change_pct": 8.29}, {"name": "大数据", "change_pct": 9.77}, {"name": "风电", "change_pct": 6.08}, {"name": "复牌股", "change_pct": 3.16}, {"name": "智能制造", "change_pct": 9.09}, {"name": "工业母机", "change_pct": 9.87}]}, {"code": "300339", "name": "润和软件", "hot_rank": 40, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "34.69", "change": "19.99", "market_id": "33", "circulate_market_value": "26977950000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "开源鸿蒙"}, {"code": "603324", "name": "盛剑科技", "hot_rank": 41, "hot_rank_chg": 9, "stock_cnt": 5872, "price": "37.40", "change": "5.35", "market_id": "17", "circulate_market_value": "5455852900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 42, "hot_rank_chg": -14, "stock_cnt": 5872, "price": "2.75", "change": "3.77", "market_id": "17", "circulate_market_value": "7871523700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 6.42}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "游戏", "change_pct": 6.52}, {"name": "影视", "change_pct": 5.46}, {"name": "低价股", "change_pct": 3.88}, {"name": "国企改革", "change_pct": 4.73}, {"name": "短剧/互动影游", "change_pct": 6.59}, {"name": "AI视频", "change_pct": 8.51}]}, {"code": "600519", "name": "贵州茅台", "hot_rank": 43, "hot_rank_chg": 37, "stock_cnt": 5872, "price": "1472.36", "change": "0.23", "market_id": "17", "circulate_market_value": "1840570100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 44, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "13.89", "change": "9.98", "market_id": "33", "circulate_market_value": "46254644000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "600487", "name": "亨通光电", "hot_rank": 45, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "38.13", "change": "10.01", "market_id": "17", "circulate_market_value": "93557532000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光通信"}, {"code": "688256", "name": "寒武纪", "hot_rank": 46, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "1118.99", "change": "18.68", "market_id": "17", "circulate_market_value": "703681350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 47, "hot_rank_chg": -15, "stock_cnt": 5872, "price": "44.74", "change": "9.12", "market_id": "17", "circulate_market_value": "887824690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600814", "name": "杭州解百", "hot_rank": 48, "hot_rank_chg": -14, "stock_cnt": 5872, "price": "9.53", "change": "3.70", "market_id": "17", "circulate_market_value": "7005299000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 3.89}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "浙江国企改革", "change_pct": 5.29}, {"name": "国企改革", "change_pct": 4.73}, {"name": "医美", "change_pct": 4.71}]}, {"code": "002651", "name": "利君股份", "hot_rank": 49, "hot_rank_chg": 30, "stock_cnt": 5872, "price": "9.56", "change": "10.01", "market_id": "33", "circulate_market_value": "5405832400.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "商业航天", "xgb_concepts": [{"name": "业绩爆雷", "change_pct": 5.68}, {"name": "通用航空", "change_pct": 7.75}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "大飞机", "change_pct": 8.19}, {"name": "军工", "change_pct": 8.29}, {"name": "无人机", "change_pct": 8.53}, {"name": "航天", "change_pct": 9.26}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 50, "hot_rank_chg": -25, "stock_cnt": 5872, "price": "215.89", "change": "5.71", "market_id": "33", "circulate_market_value": "919824620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300085", "name": "银之杰", "hot_rank": 51, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "29.34", "change": "20.00", "market_id": "33", "circulate_market_value": "17507387000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "金融科技"}, {"code": "000725", "name": "京东方A", "hot_rank": 52, "hot_rank_chg": -9, "stock_cnt": 5872, "price": "4.80", "change": "6.67", "market_id": "33", "circulate_market_value": "168846240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 11.33}, {"name": "手机产业链", "change_pct": 10.56}, {"name": "超高清视频", "change_pct": 8.92}, {"name": "苹果产业链", "change_pct": 11.3}, {"name": "电竞", "change_pct": 6.96}, {"name": "半导体", "change_pct": 13.56}, {"name": "人工智能", "change_pct": 9.38}, {"name": "互联网医疗", "change_pct": 6.34}, {"name": "VR&AR", "change_pct": 10.05}, {"name": "OLED", "change_pct": 11.08}, {"name": "京津冀", "change_pct": 6.31}, {"name": "物联网", "change_pct": 9.29}, {"name": "指纹识别", "change_pct": 10.77}, {"name": "汽车零部件", "change_pct": 7.94}, {"name": "白马股", "change_pct": 2.63}, {"name": "智能制造", "change_pct": 9.09}, {"name": "小米概念股", "change_pct": 10.33}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "液晶面板/LCD", "change_pct": 10.9}, {"name": "全息概念", "change_pct": 8.46}, {"name": "理想汽车概念股", "change_pct": 8.29}, {"name": "MicroLED", "change_pct": 10.91}, {"name": "钙钛矿电池", "change_pct": 8.99}, {"name": "智能手表", "change_pct": 10.45}, {"name": "MiniLED", "change_pct": 10.27}, {"name": "传感器", "change_pct": 10.59}, {"name": "大硅片", "change_pct": 14.8}, {"name": "AI PC", "change_pct": 11.22}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "光电共封装CPO", "change_pct": 13.91}, {"name": "智能眼镜/MR头显", "change_pct": 10.99}, {"name": "玻璃基板封装", "change_pct": 11.35}]}, {"code": "002815", "name": "崇达技术", "hot_rank": 53, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "16.79", "change": "10.03", "market_id": "33", "circulate_market_value": "13048147700.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "AI服务器"}, {"code": "002548", "name": "金新农", "hot_rank": 54, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "4.90", "change": "-8.07", "market_id": "33", "circulate_market_value": "3941910300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 3.32}, {"name": "养猪", "change_pct": 0.92}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "大农业", "change_pct": 3.87}]}, {"code": "002565", "name": "顺灏股份", "hot_rank": 55, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "9.27", "change": "9.96", "market_id": "33", "circulate_market_value": "9825784400.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "太空算力", "xgb_concepts": [{"name": "工业大麻", "change_pct": 5.46}, {"name": "电子烟", "change_pct": 9.96}, {"name": "一带一路", "change_pct": 5.5}, {"name": "造纸", "change_pct": 5.14}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "包装印刷", "change_pct": 6.7}, {"name": "卫星互联网", "change_pct": 8.8}, {"name": "太空算力", "change_pct": 9.27}]}, {"code": "001309", "name": "德明利", "hot_rank": 56, "hot_rank_chg": 22, "stock_cnt": 5872, "price": "173.43", "change": "10.00", "market_id": "33", "circulate_market_value": "40308269000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储模组"}, {"code": "002077", "name": "大港股份", "hot_rank": 57, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "14.07", "change": "10.01", "market_id": "33", "circulate_market_value": "8165503600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "集成电路测试"}, {"code": "600183", "name": "生益科技", "hot_rank": 58, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "68.04", "change": "10.01", "market_id": "17", "circulate_market_value": "164095390000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板"}, {"code": "688981", "name": "中芯国际", "hot_rank": 59, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "134.42", "change": "15.38", "market_id": "17", "circulate_market_value": "268919830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 60, "hot_rank_chg": -23, "stock_cnt": 5872, "price": "9.14", "change": "-2.87", "market_id": "17", "circulate_market_value": "5865898600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.91}, {"name": "农业种植", "change_pct": 2.51}, {"name": "湖南国企改革", "change_pct": 4.87}, {"name": "乡村振兴", "change_pct": 4.83}, {"name": "休闲食品", "change_pct": 3.2}, {"name": "食品", "change_pct": 3.22}, {"name": "食品安全", "change_pct": 7.39}, {"name": "社区团购", "change_pct": 2.57}, {"name": "大农业", "change_pct": 3.87}, {"name": "预制菜", "change_pct": 2.25}, {"name": "人造肉", "change_pct": 3.73}, {"name": "国企改革", "change_pct": 4.73}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 61, "hot_rank_chg": 103, "stock_cnt": 5872, "price": "221.44", "change": "10.00", "market_id": "17", "circulate_market_value": "89979556000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光通信"}, {"code": "601398", "name": "工商银行", "hot_rank": 62, "hot_rank_chg": -32, "stock_cnt": 5872, "price": "9.10", "change": "-1.41", "market_id": "17", "circulate_market_value": "2453471100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": 5.57}, {"name": "高股息", "change_pct": 0.41}, {"name": "银行", "change_pct": -1.07}, {"name": "白马股", "change_pct": 2.63}, {"name": "破净股", "change_pct": 3.49}, {"name": "大金融", "change_pct": 1.84}]}, {"code": "601519", "name": "大智慧", "hot_rank": 63, "hot_rank_chg": 366, "stock_cnt": 5872, "price": "7.56", "change": "10.04", "market_id": "17", "circulate_market_value": "15038050000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "金融信息服务", "xgb_concepts": [{"name": "国产软件", "change_pct": 11.03}, {"name": "金融科技", "change_pct": 11.09}, {"name": "直播/短视频", "change_pct": 7.28}, {"name": "大数据", "change_pct": 9.77}]}, {"code": "600156", "name": "华升股份", "hot_rank": 64, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "10.51", "change": "8.80", "market_id": "17", "circulate_market_value": "4226183500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 6.08}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "纺织服装", "change_pct": 5.11}, {"name": "湖南国企改革", "change_pct": 4.87}, {"name": "外贸受益概念", "change_pct": 8.09}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "国企改革", "change_pct": 4.73}, {"name": "新冠病毒防治", "change_pct": 5.73}, {"name": "液冷服务器", "change_pct": 10.17}]}, {"code": "600280", "name": "中央商场", "hot_rank": 65, "hot_rank_chg": 11, "stock_cnt": 5872, "price": "3.41", "change": "10.00", "market_id": "17", "circulate_market_value": "3847621600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": 3.89}, {"name": "强势人气股", "change_pct": 4.35}]}, {"code": "301236", "name": "软通动力", "hot_rank": 66, "hot_rank_chg": 16, "stock_cnt": 5872, "price": "35.86", "change": "20.01", "market_id": "33", "circulate_market_value": "31124503000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为昇腾"}, {"code": "002164", "name": "宁波东力", "hot_rank": 67, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "23.17", "change": "10.02", "market_id": "33", "circulate_market_value": "11116390100.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "人形机器人"}, {"code": "002872", "name": "天圣制药", "hot_rank": 68, "hot_rank_chg": 43, "stock_cnt": 5872, "price": "8.59", "change": "9.99", "market_id": "33", "circulate_market_value": "1846146800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "摘帽", "xgb_concepts": [{"name": "中药", "change_pct": 4.19}, {"name": "优化生育（三孩）", "change_pct": 5.0}, {"name": "ST摘帽", "change_pct": 6.58}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "复牌股", "change_pct": 3.16}, {"name": "医药", "change_pct": 5.7}, {"name": "肝炎概念", "change_pct": 5.31}, {"name": "新冠病毒防治", "change_pct": 5.73}]}, {"code": "300059", "name": "东方财富", "hot_rank": 69, "hot_rank_chg": -36, "stock_cnt": 5872, "price": "19.13", "change": "9.13", "market_id": "33", "circulate_market_value": "258438180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 70, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "62.35", "change": "10.00", "market_id": "17", "circulate_market_value": "22491104000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "002156", "name": "通富微电", "hot_rank": 71, "hot_rank_chg": 4, "stock_cnt": 5872, "price": "40.13", "change": "10.01", "market_id": "33", "circulate_market_value": "60895358000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "董事长提议回购"}, {"code": "000034", "name": "神州数码", "hot_rank": 72, "hot_rank_chg": 132, "stock_cnt": 5872, "price": "21.35", "change": "9.99", "market_id": "33", "circulate_market_value": "18129306000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超节点中标"}, {"code": "002708", "name": "光洋股份", "hot_rank": 73, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "25.59", "change": "10.02", "market_id": "33", "circulate_market_value": "13760642000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "机器人关节"}, {"code": "002463", "name": "沪电股份", "hot_rank": 74, "hot_rank_chg": -16, "stock_cnt": 5872, "price": "89.20", "change": "10.00", "market_id": "33", "circulate_market_value": "172386930000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "601088", "name": "中国神华", "hot_rank": 75, "hot_rank_chg": 35, "stock_cnt": 5872, "price": "50.86", "change": "-4.04", "market_id": "17", "circulate_market_value": "862011080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 76, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "23.57", "change": "9.99", "market_id": "33", "circulate_market_value": "67411913000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国产算力"}, {"code": "603386", "name": "骏亚科技", "hot_rank": 77, "hot_rank_chg": 49, "stock_cnt": 5872, "price": "15.97", "change": "9.99", "market_id": "17", "circulate_market_value": "5211371300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 78, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "24.85", "change": "4.63", "market_id": "17", "circulate_market_value": "511954560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 79, "hot_rank_chg": -33, "stock_cnt": 5872, "price": "20.21", "change": "-1.85", "market_id": "17", "circulate_market_value": "8982222200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002298", "name": "中电鑫龙", "hot_rank": 80, "hot_rank_chg": 114, "stock_cnt": 5872, "price": "7.76", "change": "10.07", "market_id": "33", "circulate_market_value": "5162922100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力基础设施", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 8.17}, {"name": "国产软件", "change_pct": 11.03}, {"name": "锂电池", "change_pct": 8.67}, {"name": "人工智能", "change_pct": 9.38}, {"name": "充电桩", "change_pct": 8.06}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "军民融合", "change_pct": 8.71}, {"name": "磁悬浮", "change_pct": 7.46}, {"name": "人脸识别", "change_pct": 8.66}, {"name": "水利", "change_pct": 5.63}, {"name": "物联网", "change_pct": 9.29}, {"name": "大数据", "change_pct": 9.77}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "军工", "change_pct": 8.29}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 8.0}, {"name": "储能", "change_pct": 7.69}, {"name": "智慧安防", "change_pct": 9.43}, {"name": "无人机", "change_pct": 8.53}, {"name": "虚拟电厂", "change_pct": 7.59}, {"name": "信创", "change_pct": 11.23}, {"name": "元宇宙", "change_pct": 9.1}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "新型城镇化", "change_pct": 6.59}, {"name": "AIGC概念", "change_pct": 8.89}, {"name": "数字乡村", "change_pct": 7.48}, {"name": "华为海思", "change_pct": 10.63}, {"name": "闪存", "change_pct": 12.97}, {"name": "UWB超宽带", "change_pct": 10.0}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "特高压", "change_pct": 7.19}, {"name": "华为云·鲲鹏", "change_pct": 10.91}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "时空大数据", "change_pct": 9.56}, {"name": "服务器", "change_pct": 11.01}, {"name": "智能电网", "change_pct": 8.36}, {"name": "磁电存储", "change_pct": 11.23}, {"name": "军工信息化", "change_pct": 10.13}, {"name": "光纤概念", "change_pct": 11.26}, {"name": "雅江电站概念股", "change_pct": 5.54}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 81, "hot_rank_chg": 20, "stock_cnt": 5872, "price": "46.81", "change": "10.01", "market_id": "33", "circulate_market_value": "68666322000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "600900", "name": "长江电力", "hot_rank": 82, "hot_rank_chg": 30, "stock_cnt": 5872, "price": "31.22", "change": "-1.82", "market_id": "17", "circulate_market_value": "763897760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920799", "name": "艾融软件", "hot_rank": 83, "hot_rank_chg": 216, "stock_cnt": 5872, "price": "29.51", "change": "30.00", "market_id": "151", "circulate_market_value": "3543263400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中标保险项目"}, {"code": "600667", "name": "太极实业", "hot_rank": 84, "hot_rank_chg": 22, "stock_cnt": 5872, "price": "11.97", "change": "10.02", "market_id": "17", "circulate_market_value": "25035760000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 4.33}, {"name": "半导体", "change_pct": 13.56}, {"name": "光伏", "change_pct": 7.3}, {"name": "风电", "change_pct": 6.08}, {"name": "江苏国企改革", "change_pct": 4.54}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "BIPV概念", "change_pct": 5.93}, {"name": "内存", "change_pct": 12.28}, {"name": "国企改革", "change_pct": 4.73}, {"name": "闪存", "change_pct": 12.97}, {"name": "中芯国际概念股", "change_pct": 14.17}]}, {"code": "000547", "name": "航天发展", "hot_rank": 85, "hot_rank_chg": 216, "stock_cnt": 5872, "price": "10.62", "change": "5.99", "market_id": "33", "circulate_market_value": "16876466000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 4.81}, {"name": "5G", "change_pct": 10.61}, {"name": "VR&AR", "change_pct": 10.05}, {"name": "网络安全", "change_pct": 10.52}, {"name": "军工集团", "change_pct": 7.32}, {"name": "福建自贸/海西概念", "change_pct": 4.87}, {"name": "大数据", "change_pct": 9.77}, {"name": "军工", "change_pct": 8.29}, {"name": "无人机", "change_pct": 8.53}, {"name": "信创", "change_pct": 11.23}, {"name": "航天", "change_pct": 9.26}, {"name": "国企改革", "change_pct": 4.73}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "卫星互联网", "change_pct": 8.8}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "自贸区", "change_pct": 3.92}, {"name": "低空经济", "change_pct": 8.32}, {"name": "军工信息化", "change_pct": 10.13}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 86, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "68.32", "change": "10.00", "market_id": "33", "circulate_market_value": "44613472000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟"}, {"code": "300666", "name": "江丰电子", "hot_rank": 87, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "209.03", "change": "20.00", "market_id": "33", "circulate_market_value": "46288364000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体材料"}, {"code": "002636", "name": "金安国纪", "hot_rank": 88, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "51.46", "change": "10.00", "market_id": "33", "circulate_market_value": "37320674000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板"}, {"code": "000592", "name": "平潭发展", "hot_rank": 89, "hot_rank_chg": 64, "stock_cnt": 5872, "price": "6.03", "change": "3.25", "market_id": "33", "circulate_market_value": "11548007500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 4.87}, {"name": "林业", "change_pct": 3.84}, {"name": "碳中和", "change_pct": 4.85}, {"name": "自贸区", "change_pct": 3.92}]}, {"code": "603019", "name": "中科曙光", "hot_rank": 90, "hot_rank_chg": 41, "stock_cnt": 5872, "price": "76.05", "change": "9.99", "market_id": "17", "circulate_market_value": "111205657000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力"}, {"code": "002584", "name": "西陇科学", "hot_rank": 91, "hot_rank_chg": -22, "stock_cnt": 5872, "price": "9.17", "change": "5.04", "market_id": "33", "circulate_market_value": "4412047700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 6.2}, {"name": "医疗器械", "change_pct": 6.96}, {"name": "锂电池", "change_pct": 8.67}, {"name": "基因测序", "change_pct": 6.25}, {"name": "PCB板", "change_pct": 12.16}, {"name": "医药", "change_pct": 5.7}, {"name": "新能源汽车", "change_pct": 8.0}, {"name": "化学原料药", "change_pct": 5.61}, {"name": "食品安全", "change_pct": 7.39}, {"name": "辅助生殖", "change_pct": 6.18}, {"name": "光刻机（胶）", "change_pct": 12.66}, {"name": "异丙醇", "change_pct": 6.09}, {"name": "新冠病毒防治", "change_pct": 5.73}, {"name": "磷酸铁锂", "change_pct": 6.69}]}, {"code": "300604", "name": "长川科技", "hot_rank": 92, "hot_rank_chg": -38, "stock_cnt": 5872, "price": "200.62", "change": "20.00", "market_id": "33", "circulate_market_value": "98863426000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体设备"}, {"code": "601188", "name": "龙江交通", "hot_rank": 93, "hot_rank_chg": -20, "stock_cnt": 5872, "price": "4.18", "change": "-5.00", "market_id": "17", "circulate_market_value": "5456864200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.35}, {"name": "高速公路", "change_pct": 1.36}, {"name": "振兴东北", "change_pct": 4.08}, {"name": "黑龙江自贸区", "change_pct": 1.75}]}, {"code": "000815", "name": "美利云", "hot_rank": 94, "hot_rank_chg": -37, "stock_cnt": 5872, "price": "15.80", "change": "6.90", "market_id": "33", "circulate_market_value": "10985156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688498", "name": "源杰科技", "hot_rank": 95, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "704.40", "change": "20.00", "market_id": "17", "circulate_market_value": "86565226000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光芯片"}, {"code": "000636", "name": "风华高科", "hot_rank": 96, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "29.57", "change": "10.01", "market_id": "33", "circulate_market_value": "33931278000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC"}, {"code": "002436", "name": "兴森科技", "hot_rank": 97, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "26.41", "change": "10.00", "market_id": "33", "circulate_market_value": "40088493000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "封装基板"}, {"code": "000988", "name": "华工科技", "hot_rank": 98, "hot_rank_chg": 19, "stock_cnt": 5872, "price": "64.52", "change": "10.01", "market_id": "33", "circulate_market_value": "64841675000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块"}, {"code": "003040", "name": "楚天龙", "hot_rank": 99, "hot_rank_chg": 30, "stock_cnt": 5872, "price": "12.18", "change": "10.03", "market_id": "33", "circulate_market_value": "5564436100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "eSIM", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 8.68}, {"name": "金融科技", "change_pct": 11.09}, {"name": "人工智能", "change_pct": 9.38}, {"name": "物联网", "change_pct": 9.29}, {"name": "数字经济", "change_pct": 9.03}, {"name": "国产操作系统", "change_pct": 10.39}, {"name": "电子身份证", "change_pct": 10.44}, {"name": "数字人民币", "change_pct": 10.57}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "eSIM", "change_pct": 10.62}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "AI大模型/智能体", "change_pct": 8.81}, {"name": "区块链", "change_pct": 9.04}]}, {"code": "000066", "name": "中国长城", "hot_rank": 100, "hot_rank_chg": 13, "stock_cnt": 5872, "price": "11.66", "change": "10.00", "market_id": "33", "circulate_market_value": "37610378000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国产CPU", "xgb_concepts": [{"name": "半导体", "change_pct": 13.56}, {"name": "央企改革", "change_pct": 4.81}, {"name": "锂电池", "change_pct": 8.67}, {"name": "海工装备", "change_pct": 5.84}, {"name": "量子通信", "change_pct": 8.63}, {"name": "人工智能", "change_pct": 9.38}, {"name": "网络安全", "change_pct": 10.52}, {"name": "军工集团", "change_pct": 7.32}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "北斗导航", "change_pct": 9.07}, {"name": "军民融合", "change_pct": 8.71}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "军工", "change_pct": 8.29}, {"name": "新能源汽车", "change_pct": 8.0}, {"name": "中字头", "change_pct": 2.73}, {"name": "无人机", "change_pct": 8.53}, {"name": "数字经济", "change_pct": 9.03}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "百度概念股", "change_pct": 8.1}, {"name": "国产操作系统", "change_pct": 10.39}, {"name": "信创", "change_pct": 11.23}, {"name": "钠电池", "change_pct": 7.37}, {"name": "国资云", "change_pct": 8.07}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "F5G", "change_pct": 10.5}, {"name": "芯粒Chiplet", "change_pct": 14.79}, {"name": "数据要素", "change_pct": 10.04}, {"name": "航天", "change_pct": 9.26}, {"name": "国企改革", "change_pct": 4.73}, {"name": "AI PC", "change_pct": 11.22}, {"name": "OpenClaw概念", "change_pct": 11.82}, {"name": "CPU概念", "change_pct": 12.93}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "AI算力芯片", "change_pct": 14.36}, {"name": "交换机", "change_pct": 12.28}, {"name": "服务器", "change_pct": 11.01}, {"name": "智能电网", "change_pct": 8.36}, {"name": "液冷服务器", "change_pct": 10.17}, {"name": "DeepSeek概念股", "change_pct": 10.84}, {"name": "算力一体机", "change_pct": 11.84}, {"name": "海洋经济", "change_pct": 6.16}, {"name": "太空算力", "change_pct": 9.27}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000820": "[行政处罚事先告知书] 神雾节能：关于收到《行政处罚事先告知书》的公告", "688225": "[行政处罚事先告知书] 亚信集团：关于公司财务总监因非本公司事项收到行政处罚事先告知书暨辞去职务的公告", "300670": "[行政处罚事先告知书] 大烨智能：关于收到《行政处罚事先告知书》的公告", "300500": "[行政处罚事先告知书] 启迪设计：关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》的公告", "301030": "[行政处罚事先告知书] *ST仕净：关于收到《行政处罚事先告知书》的公告", "688033": "[行政处罚事先告知书] *ST天宜：关于公司收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的", "000892": "[行政处罚事先告知书] 欢瑞世纪：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920249": "[行政处罚事先告知书] [临时公告]利尔达:关于公司及相关当事人收到中国证券监督管理委员会浙江监管局行政", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行"};