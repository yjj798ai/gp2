const UPDATE_TIME = "2026-11-27 20:36";
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
    "name": "芯片概念",
    "rise": 11.25,
    "rate": 0,
    "tag": "204家涨停",
    "hotTag": "连续49天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
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
    "name": "存储芯片",
    "rise": 13.66,
    "rate": 0,
    "tag": "72家涨停",
    "hotTag": "连续292天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "人工智能",
    "rise": 8.69,
    "rate": 0,
    "tag": "110家涨停",
    "hotTag": "连续46天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "机器人概念",
    "rise": 8.82,
    "rate": 0,
    "tag": "131家涨停",
    "hotTag": "连续30天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "商业航天",
    "rise": 9.16,
    "rate": 0,
    "tag": "59家涨停",
    "hotTag": "连续268天上榜",
    "rankChg": -1,
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
    "etfName": "科创半导体设备ETF",
    "code": "886054"
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
    "name": "创新药",
    "rise": 5.93,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续169天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": 8.86,
    "rate": 0,
    "tag": "65家涨停",
    "hotTag": "连续97天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "融资融券",
    "rise": 7.77,
    "rate": 0,
    "tag": "304家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "证券ETF",
    "code": "885338"
  },
  {
    "name": "互联网金融",
    "rise": 8.92,
    "rate": 0,
    "tag": "39家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "科创次新股",
    "rise": 15.52,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "科创综指ETF",
    "code": "885907"
  },
  {
    "name": "超级品牌",
    "rise": 2.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "食品ETF",
    "code": "885761"
  }
];
const THS_EVENTS = [
  {
    "title": "英伟达暂停向东南亚四国交付AI服务器",
    "desc": "",
    "heat": 2582767,
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
    "heat": 2423302,
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
    "heat": 2085709,
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
    "heat": 1948659,
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
    "heat": 1725849,
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
    "heat": 1702017,
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
    "heat": 1464633,
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
    "heat": 1396523,
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
    "heat": 989108,
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
    "heat": 540077,
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
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 9,
    "hot_rank_chg": 4,
    "stock_cnt": 5796,
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
    "hot_rank": 10,
    "hot_rank_chg": -7,
    "stock_cnt": 5796,
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
    "code": "002197",
    "name": "证通电子",
    "hot_rank": 11,
    "hot_rank_chg": 31,
    "stock_cnt": 5796,
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
    "hot_rank": 12,
    "hot_rank_chg": 23,
    "stock_cnt": 5796,
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
    "hot_rank": 13,
    "hot_rank_chg": -5,
    "stock_cnt": 5796,
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
    "code": "300324",
    "name": "旋极信息",
    "hot_rank": 20,
    "hot_rank_chg": -1,
    "stock_cnt": 5796,
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
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 21,
    "hot_rank_chg": 3,
    "stock_cnt": 5796,
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
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 22,
    "hot_rank_chg": 4,
    "stock_cnt": 5796,
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
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 24,
    "hot_rank_chg": -7,
    "stock_cnt": 5796,
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
    "code": "002642",
    "name": "荣联科技",
    "hot_rank": 26,
    "hot_rank_chg": 37,
    "stock_cnt": 5796,
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
    "code": "000889",
    "name": "中嘉博创",
    "hot_rank": 27,
    "hot_rank_chg": 65,
    "stock_cnt": 5796,
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
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 28,
    "hot_rank_chg": 3,
    "stock_cnt": 5796,
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
    "code": "600467",
    "name": "好当家",
    "hot_rank": 29,
    "hot_rank_chg": -8,
    "stock_cnt": 5796,
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
    "hot_rank": 32,
    "hot_rank_chg": -12,
    "stock_cnt": 5796,
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
    "hot_rank": 34,
    "hot_rank_chg": 22,
    "stock_cnt": 5796,
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
    "hot_rank": 35,
    "hot_rank_chg": -7,
    "stock_cnt": 5796,
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
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 45,
    "hot_rank_chg": -2,
    "stock_cnt": 5796,
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
    "hot_rank": 51,
    "hot_rank_chg": -10,
    "stock_cnt": 5796,
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
    "code": "600814",
    "name": "杭州解百",
    "hot_rank": 52,
    "hot_rank_chg": -18,
    "stock_cnt": 5796,
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
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 53,
    "hot_rank_chg": -16,
    "stock_cnt": 5796,
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
    "code": "002651",
    "name": "利君股份",
    "hot_rank": 54,
    "hot_rank_chg": 25,
    "stock_cnt": 5796,
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
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 57,
    "hot_rank_chg": -27,
    "stock_cnt": 5796,
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
    "code": "600280",
    "name": "中央商场",
    "hot_rank": 62,
    "hot_rank_chg": 14,
    "stock_cnt": 5796,
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
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 65,
    "hot_rank_chg": -12,
    "stock_cnt": 5796,
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
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 67,
    "hot_rank_chg": 5,
    "stock_cnt": 5796,
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
    "code": "002872",
    "name": "天圣制药",
    "hot_rank": 68,
    "hot_rank_chg": 43,
    "stock_cnt": 5796,
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
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 74,
    "hot_rank_chg": -1,
    "stock_cnt": 5796,
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
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 76,
    "hot_rank_chg": 77,
    "stock_cnt": 5796,
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
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 78,
    "hot_rank_chg": 19,
    "stock_cnt": 5796,
    "price": "3.94",
    "change": "-2.23",
    "market_id": "17",
    "circulate_market_value": "5260108700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "氢能源/燃料电池",
        "change_pct": 6.83
      },
      {
        "name": "物联网",
        "change_pct": 9.29
      },
      {
        "name": "LED",
        "change_pct": 9.17
      },
      {
        "name": "卫星互联网",
        "change_pct": 8.8
      }
    ]
  },
  {
    "code": "002298",
    "name": "中电鑫龙",
    "hot_rank": 81,
    "hot_rank_chg": 113,
    "stock_cnt": 5796,
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
    "code": "003040",
    "name": "楚天龙",
    "hot_rank": 84,
    "hot_rank_chg": 45,
    "stock_cnt": 5796,
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
    "code": "000547",
    "name": "航天发展",
    "hot_rank": 88,
    "hot_rank_chg": 213,
    "stock_cnt": 5796,
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
    "code": "600567",
    "name": "山鹰国际",
    "hot_rank": 89,
    "hot_rank_chg": 60,
    "stock_cnt": 5796,
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
        "change_pct": 9.29
      },
      {
        "name": "造纸",
        "change_pct": 5.14
      },
      {
        "name": "包装印刷",
        "change_pct": 6.7
      },
      {
        "name": "固废处理",
        "change_pct": 5.66
      },
      {
        "name": "复牌股",
        "change_pct": 3.16
      },
      {
        "name": "环保",
        "change_pct": 6.65
      },
      {
        "name": "人民币升值受益",
        "change_pct": 3.12
      },
      {
        "name": "破净股",
        "change_pct": 3.49
      },
      {
        "name": "数字经济",
        "change_pct": 9.03
      },
      {
        "name": "低价股",
        "change_pct": 3.88
      },
      {
        "name": "回购增持再贷款",
        "change_pct": 5.16
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 91,
    "hot_rank_chg": 8,
    "stock_cnt": 5796,
    "price": "11.31",
    "change": "-4.07",
    "market_id": "17",
    "circulate_market_value": "7532460000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 3.89
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 92,
    "hot_rank_chg": 40,
    "stock_cnt": 5796,
    "price": "4.95",
    "change": "2.06",
    "market_id": "17",
    "circulate_market_value": "12466623900.00",
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
        "name": "工业大麻",
        "change_pct": 5.46
      },
      {
        "name": "中药",
        "change_pct": 4.19
      },
      {
        "name": "保健品",
        "change_pct": 3.4
      },
      {
        "name": "民营医院",
        "change_pct": 4.73
      },
      {
        "name": "医药",
        "change_pct": 5.7
      },
      {
        "name": "化学原料药",
        "change_pct": 5.61
      },
      {
        "name": "流感",
        "change_pct": 5.21
      },
      {
        "name": "振兴东北",
        "change_pct": 4.08
      },
      {
        "name": "食品",
        "change_pct": 3.22
      },
      {
        "name": "肝炎概念",
        "change_pct": 5.31
      }
    ]
  },
  {
    "code": "002199",
    "name": "东晶电子",
    "hot_rank": 95,
    "hot_rank_chg": 25,
    "stock_cnt": 5796,
    "price": "12.42",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "2867804000.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "4",
    "change_reason": "石英晶体元器件",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 11.2
      },
      {
        "name": "锂电池",
        "change_pct": 8.67
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
        "name": "新能源汽车",
        "change_pct": 8.0
      }
    ]
  },
  {
    "code": "600667",
    "name": "太极实业",
    "hot_rank": 98,
    "hot_rank_chg": 8,
    "stock_cnt": 5796,
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
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "42.15", "change": "0.60", "market_id": "33", "circulate_market_value": "32108421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "20.90", "change": "10.00", "market_id": "17", "circulate_market_value": "22916739000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为昇腾"}, {"code": "000158", "name": "常山北明", "hot_rank": 3, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "15.27", "change": "10.01", "market_id": "33", "circulate_market_value": "24289128000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "华为昇腾"}, {"code": "300308", "name": "中际旭创", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "516.15", "change": "19.98", "market_id": "33", "circulate_market_value": "572893980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 5, "hot_rank_chg": 13, "stock_cnt": 5796, "price": "23.06", "change": "10.02", "market_id": "33", "circulate_market_value": "26429192000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "华为昇腾"}, {"code": "000530", "name": "冰山冷热", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "15.45", "change": "-4.45", "market_id": "33", "circulate_market_value": "9271803400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "21.10", "change": "9.72", "market_id": "33", "circulate_market_value": "12310547200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "226.84", "change": "20.00", "market_id": "33", "circulate_market_value": "284621530000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "1.6T光模块"}, {"code": "002086", "name": "东方海洋", "hot_rank": 9, "hot_rank_chg": 4, "stock_cnt": 5796, "price": "4.34", "change": "-9.02", "market_id": "33", "circulate_market_value": "6861415300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 6.26}, {"name": "体外诊断", "change_pct": 6.2}, {"name": "医疗器械", "change_pct": 6.96}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "基因测序", "change_pct": 6.25}, {"name": "预制菜", "change_pct": 2.25}, {"name": "水产养殖", "change_pct": -1.14}, {"name": "新冠病毒防治", "change_pct": 5.73}, {"name": "海洋经济", "change_pct": 6.16}]}, {"code": "002148", "name": "北纬科技", "hot_rank": 10, "hot_rank_chg": -7, "stock_cnt": 5796, "price": "10.66", "change": "-5.66", "market_id": "33", "circulate_market_value": "4807943700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 8.68}, {"name": "手游", "change_pct": 6.42}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "游戏", "change_pct": 6.52}, {"name": "物联网", "change_pct": 9.29}, {"name": "机器人", "change_pct": 9.35}, {"name": "无人机", "change_pct": 8.53}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "5G消息/RCS", "change_pct": 9.33}, {"name": "低空经济", "change_pct": 8.32}, {"name": "无人物流车", "change_pct": 7.24}]}, {"code": "002197", "name": "证通电子", "hot_rank": 11, "hot_rank_chg": 31, "stock_cnt": 5796, "price": "7.76", "change": "10.07", "market_id": "33", "circulate_market_value": "4143840100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "算力租赁", "xgb_concepts": [{"name": "国产软件", "change_pct": 11.03}, {"name": "深圳本地股", "change_pct": 6.97}, {"name": "ST摘帽", "change_pct": 6.58}, {"name": "金融科技", "change_pct": 11.09}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "网络安全", "change_pct": 10.52}, {"name": "充电桩", "change_pct": 8.06}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "移动支付", "change_pct": 9.62}, {"name": "教育", "change_pct": 6.69}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "粤港澳大湾区", "change_pct": 5.1}, {"name": "LED", "change_pct": 9.17}, {"name": "新能源汽车", "change_pct": 8.0}, {"name": "机器人", "change_pct": 9.35}, {"name": "数字经济", "change_pct": 9.03}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "阿里巴巴概念股", "change_pct": 9.27}, {"name": "腾讯概念股", "change_pct": 9.33}, {"name": "信创", "change_pct": 11.23}, {"name": "NFT", "change_pct": 7.02}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "数字乡村", "change_pct": 7.48}, {"name": "教育信息化", "change_pct": 7.85}, {"name": "数字人民币", "change_pct": 10.57}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "医疗信息化", "change_pct": 9.23}, {"name": "华为鸿蒙", "change_pct": 10.26}, {"name": "华为云·鲲鹏", "change_pct": 10.91}, {"name": "智慧灯杆", "change_pct": 8.71}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "算力租赁", "change_pct": 10.39}]}, {"code": "603030", "name": "全筑股份", "hot_rank": 12, "hot_rank_chg": 23, "stock_cnt": 5796, "price": "3.16", "change": "10.11", "market_id": "17", "circulate_market_value": "4161509900.00", "change_type": "1", "change_section": "9", "change_days": "7", "change_reason": "边缘AI算力", "xgb_concepts": [{"name": "跨境电商", "change_pct": 6.08}, {"name": "长三角一体化", "change_pct": 4.33}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "装修装饰", "change_pct": 6.55}, {"name": "装配式建筑", "change_pct": 5.6}, {"name": "建筑节能", "change_pct": 5.85}, {"name": "新型城镇化", "change_pct": 6.59}, {"name": "光刻机（胶）", "change_pct": 12.66}, {"name": "旧改", "change_pct": 6.24}]}, {"code": "002685", "name": "华东重机", "hot_rank": 13, "hot_rank_chg": -5, "stock_cnt": 5796, "price": "7.71", "change": "-4.70", "market_id": "33", "circulate_market_value": "7768513600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 5.5}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "工业自动化", "change_pct": 9.28}, {"name": "机械", "change_pct": 5.54}, {"name": "智能制造", "change_pct": 9.09}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "信创", "change_pct": 11.23}, {"name": "AI算力芯片", "change_pct": 14.36}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 14, "hot_rank_chg": -4, "stock_cnt": 5796, "price": "20.63", "change": "-6.06", "market_id": "33", "circulate_market_value": "9481791400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 15, "hot_rank_chg": -4, "stock_cnt": 5796, "price": "798.70", "change": "19.93", "market_id": "17", "circulate_market_value": "24031062000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "36.93", "change": "12.97", "market_id": "17", "circulate_market_value": "166297230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603960", "name": "克来机电", "hot_rank": 17, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "22.51", "change": "10.02", "market_id": "17", "circulate_market_value": "5902074700.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "人形机器人"}, {"code": "002384", "name": "东山精密", "hot_rank": 18, "hot_rank_chg": -3, "stock_cnt": 5796, "price": "79.77", "change": "10.00", "market_id": "33", "circulate_market_value": "110586884000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI"}, {"code": "002771", "name": "真视通", "hot_rank": 19, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "21.10", "change": "7.65", "market_id": "33", "circulate_market_value": "3810498700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300324", "name": "旋极信息", "hot_rank": 20, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "6.05", "change": "20.04", "market_id": "33", "circulate_market_value": "10345399300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI芯片", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 8.17}, {"name": "数字孪生", "change_pct": 8.81}, {"name": "半导体", "change_pct": 13.56}, {"name": "国产软件", "change_pct": 11.03}, {"name": "人工智能", "change_pct": 9.38}, {"name": "网络安全", "change_pct": 10.52}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "大飞机", "change_pct": 8.19}, {"name": "北斗导航", "change_pct": 9.07}, {"name": "军民融合", "change_pct": 8.71}, {"name": "京津冀", "change_pct": 6.31}, {"name": "物联网", "change_pct": 9.29}, {"name": "大数据", "change_pct": 9.77}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "电子发票", "change_pct": 9.89}, {"name": "军工", "change_pct": 8.29}, {"name": "无人机", "change_pct": 8.53}, {"name": "智能制造", "change_pct": 9.09}, {"name": "工业互联网", "change_pct": 8.47}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 9.03}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "腾讯概念股", "change_pct": 9.33}, {"name": "信创", "change_pct": 11.23}, {"name": "BIPV概念", "change_pct": 5.93}, {"name": "航天", "change_pct": 9.26}, {"name": "数字人民币", "change_pct": 10.57}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "医疗信息化", "change_pct": 9.23}, {"name": "云游戏", "change_pct": 8.4}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "物理AI", "change_pct": 11.74}, {"name": "时空大数据", "change_pct": 9.56}, {"name": "AI算力芯片", "change_pct": 14.36}, {"name": "军工信息化", "change_pct": 10.13}, {"name": "财税改革", "change_pct": 10.64}, {"name": "区块链", "change_pct": 9.04}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 21, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "4.82", "change": "10.05", "market_id": "33", "circulate_market_value": "12785293800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "洁净室", "xgb_concepts": [{"name": "装修装饰", "change_pct": 6.55}, {"name": "装配式建筑", "change_pct": 5.6}, {"name": "破净股", "change_pct": 3.49}, {"name": "航天", "change_pct": 9.26}, {"name": "旧改", "change_pct": 6.24}]}, {"code": "600839", "name": "四川长虹", "hot_rank": 22, "hot_rank_chg": 4, "stock_cnt": 5796, "price": "6.63", "change": "9.95", "market_id": "17", "circulate_market_value": "30597176000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为欧拉", "xgb_concepts": [{"name": "超高清视频", "change_pct": 8.92}, {"name": "国产软件", "change_pct": 11.03}, {"name": "锂电池", "change_pct": 8.67}, {"name": "人工智能", "change_pct": 9.38}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "养老产业", "change_pct": 6.23}, {"name": "大飞机", "change_pct": 8.19}, {"name": "军民融合", "change_pct": 8.71}, {"name": "物联网", "change_pct": 9.29}, {"name": "大数据", "change_pct": 9.77}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "军工", "change_pct": 8.29}, {"name": "新能源汽车", "change_pct": 8.0}, {"name": "机器人", "change_pct": 9.35}, {"name": "黑色家电", "change_pct": 7.01}, {"name": "家电", "change_pct": 6.51}, {"name": "储能", "change_pct": 7.69}, {"name": "智能制造", "change_pct": 9.09}, {"name": "工业互联网", "change_pct": 8.47}, {"name": "数字经济", "change_pct": 9.03}, {"name": "百度概念股", "change_pct": 8.1}, {"name": "NFT", "change_pct": 7.02}, {"name": "跨境支付", "change_pct": 10.98}, {"name": "华为海思", "change_pct": 10.63}, {"name": "云游戏", "change_pct": 8.4}, {"name": "网红/MCN", "change_pct": 6.35}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "毫米波雷达", "change_pct": 9.48}, {"name": "服务器", "change_pct": 11.01}, {"name": "AI大模型/智能体", "change_pct": 8.81}, {"name": "星闪概念", "change_pct": 10.46}, {"name": "低空经济", "change_pct": 8.32}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 23, "hot_rank_chg": -9, "stock_cnt": 5796, "price": "160.52", "change": "19.80", "market_id": "33", "circulate_market_value": "174708050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 24, "hot_rank_chg": -7, "stock_cnt": 5796, "price": "4.06", "change": "-2.17", "market_id": "17", "circulate_market_value": "8982055900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 5.14}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "光通信", "change_pct": 12.61}, {"name": "林业", "change_pct": 3.84}, {"name": "军民融合", "change_pct": 8.71}, {"name": "军工", "change_pct": 8.29}, {"name": "人造肉", "change_pct": 3.73}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 25, "hot_rank_chg": -13, "stock_cnt": 5796, "price": "15.16", "change": "4.77", "market_id": "17", "circulate_market_value": "10313646300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002642", "name": "荣联科技", "hot_rank": 26, "hot_rank_chg": 37, "stock_cnt": 5796, "price": "9.16", "change": "9.96", "market_id": "33", "circulate_market_value": "6060075700.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "存储设备集采", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 8.68}, {"name": "边缘计算", "change_pct": 10.46}, {"name": "泛在电力物联网", "change_pct": 8.17}, {"name": "数字孪生", "change_pct": 8.81}, {"name": "精准医疗", "change_pct": 6.26}, {"name": "国产软件", "change_pct": 11.03}, {"name": "金融科技", "change_pct": 11.09}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "人工智能", "change_pct": 9.38}, {"name": "网络安全", "change_pct": 10.52}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "基因测序", "change_pct": 6.25}, {"name": "物联网", "change_pct": 9.29}, {"name": "山东国企改革", "change_pct": 4.72}, {"name": "大数据", "change_pct": 9.77}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "智慧物流", "change_pct": 6.97}, {"name": "智能制造", "change_pct": 9.09}, {"name": "工业互联网", "change_pct": 8.47}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 9.03}, {"name": "腾讯概念股", "change_pct": 9.33}, {"name": "信创", "change_pct": 11.23}, {"name": "国资云", "change_pct": 8.07}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "数字乡村", "change_pct": 7.48}, {"name": "国企改革", "change_pct": 4.73}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "新冠病毒防治", "change_pct": 5.73}, {"name": "远程办公", "change_pct": 8.79}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "算力租赁", "change_pct": 10.39}, {"name": "AI大模型/智能体", "change_pct": 8.81}, {"name": "星闪概念", "change_pct": 10.46}]}, {"code": "000889", "name": "中嘉博创", "hot_rank": 27, "hot_rank_chg": 65, "stock_cnt": 5796, "price": "4.30", "change": "9.97", "market_id": "33", "circulate_market_value": "3740137600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力销售", "xgb_concepts": [{"name": "金融科技", "change_pct": 11.09}, {"name": "5G消息/RCS", "change_pct": 9.33}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "Kimi概念", "change_pct": 9.05}, {"name": "智谱AI", "change_pct": 11.25}, {"name": "区块链", "change_pct": 9.04}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 28, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "9.61", "change": "9.95", "market_id": "17", "circulate_market_value": "17193619000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "调味品", "change_pct": 2.3}, {"name": "纯碱", "change_pct": 3.44}, {"name": "食品", "change_pct": 3.22}, {"name": "土壤修复", "change_pct": 6.26}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "OpenClaw概念", "change_pct": 11.82}, {"name": "算力租赁", "change_pct": 10.39}, {"name": "DeepSeek概念股", "change_pct": 10.84}]}, {"code": "600467", "name": "好当家", "hot_rank": 29, "hot_rank_chg": -8, "stock_cnt": 5796, "price": "3.80", "change": "-4.04", "market_id": "17", "circulate_market_value": "5551778400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 4.19}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "冷链", "change_pct": 5.01}, {"name": "医药", "change_pct": 5.7}, {"name": "食品", "change_pct": 3.22}, {"name": "食品安全", "change_pct": 7.39}, {"name": "预制菜", "change_pct": 2.25}, {"name": "水产养殖", "change_pct": -1.14}, {"name": "海洋经济", "change_pct": 6.16}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 30, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "217.34", "change": "10.00", "market_id": "17", "circulate_market_value": "145773920000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "600176", "name": "中国巨石", "hot_rank": 31, "hot_rank_chg": 50, "stock_cnt": 5796, "price": "28.42", "change": "9.98", "market_id": "17", "circulate_market_value": "112872503000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电子布"}, {"code": "600825", "name": "新华传媒", "hot_rank": 32, "hot_rank_chg": -12, "stock_cnt": 5796, "price": "12.36", "change": "9.96", "market_id": "17", "circulate_market_value": "12914813800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "界面财联社重组", "xgb_concepts": [{"name": "资产重组", "change_pct": 9.03}, {"name": "上海国企改革", "change_pct": 4.26}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 5.5}, {"name": "国企改革", "change_pct": 4.73}]}, {"code": "001219", "name": "青岛食品", "hot_rank": 33, "hot_rank_chg": 52, "stock_cnt": 5796, "price": "17.39", "change": "-9.99", "market_id": "33", "circulate_market_value": "3307534500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002122", "name": "汇洲智能", "hot_rank": 34, "hot_rank_chg": 22, "stock_cnt": 5796, "price": "4.18", "change": "10.00", "market_id": "33", "circulate_market_value": "8304914000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "具身智能数据", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 6.58}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "人工智能", "change_pct": 9.38}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "智慧停车", "change_pct": 8.29}, {"name": "大数据", "change_pct": 9.77}, {"name": "风电", "change_pct": 6.08}, {"name": "复牌股", "change_pct": 3.16}, {"name": "智能制造", "change_pct": 9.09}, {"name": "工业母机", "change_pct": 9.87}]}, {"code": "600715", "name": "文投控股", "hot_rank": 35, "hot_rank_chg": -7, "stock_cnt": 5796, "price": "2.75", "change": "3.77", "market_id": "17", "circulate_market_value": "7871523700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 6.42}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "游戏", "change_pct": 6.52}, {"name": "影视", "change_pct": 5.46}, {"name": "低价股", "change_pct": 3.88}, {"name": "国企改革", "change_pct": 4.73}, {"name": "短剧/互动影游", "change_pct": 6.59}, {"name": "AI视频", "change_pct": 8.51}]}, {"code": "600206", "name": "有研新材", "hot_rank": 36, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "40.58", "change": "10.00", "market_id": "17", "circulate_market_value": "34353134000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体靶材"}, {"code": "600584", "name": "长电科技", "hot_rank": 37, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "52.58", "change": "10.00", "market_id": "17", "circulate_market_value": "94087418000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "301391", "name": "卡莱特", "hot_rank": 38, "hot_rank_chg": 27, "stock_cnt": 5796, "price": "68.80", "change": "20.01", "market_id": "33", "circulate_market_value": "6387080400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为昇腾"}, {"code": "688256", "name": "寒武纪", "hot_rank": 39, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "1118.99", "change": "18.68", "market_id": "17", "circulate_market_value": "703681350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 40, "hot_rank_chg": 40, "stock_cnt": 5796, "price": "1472.36", "change": "0.23", "market_id": "17", "circulate_market_value": "1840570100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300339", "name": "润和软件", "hot_rank": 41, "hot_rank_chg": -12, "stock_cnt": 5796, "price": "34.69", "change": "19.99", "market_id": "33", "circulate_market_value": "26977950000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "开源鸿蒙"}, {"code": "002185", "name": "华天科技", "hot_rank": 42, "hot_rank_chg": 5, "stock_cnt": 5796, "price": "13.89", "change": "9.98", "market_id": "33", "circulate_market_value": "46254644000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "000823", "name": "超声电子", "hot_rank": 43, "hot_rank_chg": -16, "stock_cnt": 5796, "price": "22.56", "change": "8.62", "market_id": "33", "circulate_market_value": "13421669700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 44, "hot_rank_chg": -12, "stock_cnt": 5796, "price": "44.74", "change": "9.12", "market_id": "17", "circulate_market_value": "887824690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 45, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "4.80", "change": "6.67", "market_id": "33", "circulate_market_value": "168846240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 11.33}, {"name": "手机产业链", "change_pct": 10.56}, {"name": "超高清视频", "change_pct": 8.92}, {"name": "苹果产业链", "change_pct": 11.3}, {"name": "电竞", "change_pct": 6.96}, {"name": "半导体", "change_pct": 13.56}, {"name": "人工智能", "change_pct": 9.38}, {"name": "互联网医疗", "change_pct": 6.34}, {"name": "VR&AR", "change_pct": 10.05}, {"name": "OLED", "change_pct": 11.08}, {"name": "京津冀", "change_pct": 6.31}, {"name": "物联网", "change_pct": 9.29}, {"name": "指纹识别", "change_pct": 10.77}, {"name": "汽车零部件", "change_pct": 7.94}, {"name": "白马股", "change_pct": 2.63}, {"name": "智能制造", "change_pct": 9.09}, {"name": "小米概念股", "change_pct": 10.33}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "液晶面板/LCD", "change_pct": 10.9}, {"name": "全息概念", "change_pct": 8.46}, {"name": "理想汽车概念股", "change_pct": 8.29}, {"name": "MicroLED", "change_pct": 10.91}, {"name": "钙钛矿电池", "change_pct": 8.99}, {"name": "智能手表", "change_pct": 10.45}, {"name": "MiniLED", "change_pct": 10.27}, {"name": "传感器", "change_pct": 10.59}, {"name": "大硅片", "change_pct": 14.8}, {"name": "AI PC", "change_pct": 11.22}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "光电共封装CPO", "change_pct": 13.91}, {"name": "智能眼镜/MR头显", "change_pct": 10.99}, {"name": "玻璃基板封装", "change_pct": 11.35}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 46, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "38.13", "change": "10.01", "market_id": "17", "circulate_market_value": "93557532000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光通信"}, {"code": "603324", "name": "盛剑科技", "hot_rank": 47, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "37.40", "change": "5.35", "market_id": "17", "circulate_market_value": "5455852900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 48, "hot_rank_chg": -23, "stock_cnt": 5796, "price": "215.89", "change": "5.71", "market_id": "33", "circulate_market_value": "919824620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300085", "name": "银之杰", "hot_rank": 49, "hot_rank_chg": -11, "stock_cnt": 5796, "price": "29.34", "change": "20.00", "market_id": "33", "circulate_market_value": "17507387000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "金融科技"}, {"code": "001309", "name": "德明利", "hot_rank": 50, "hot_rank_chg": 28, "stock_cnt": 5796, "price": "173.43", "change": "10.00", "market_id": "33", "circulate_market_value": "40308269000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储模组"}, {"code": "002548", "name": "金新农", "hot_rank": 51, "hot_rank_chg": -10, "stock_cnt": 5796, "price": "4.90", "change": "-8.07", "market_id": "33", "circulate_market_value": "3941910300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 3.32}, {"name": "养猪", "change_pct": 0.92}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "大农业", "change_pct": 3.87}]}, {"code": "600814", "name": "杭州解百", "hot_rank": 52, "hot_rank_chg": -18, "stock_cnt": 5796, "price": "9.53", "change": "3.70", "market_id": "17", "circulate_market_value": "7005299000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 3.89}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "浙江国企改革", "change_pct": 5.29}, {"name": "国企改革", "change_pct": 4.73}, {"name": "医美", "change_pct": 4.71}]}, {"code": "600127", "name": "金健米业", "hot_rank": 53, "hot_rank_chg": -16, "stock_cnt": 5796, "price": "9.14", "change": "-2.87", "market_id": "17", "circulate_market_value": "5865898600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.91}, {"name": "农业种植", "change_pct": 2.51}, {"name": "湖南国企改革", "change_pct": 4.87}, {"name": "乡村振兴", "change_pct": 4.83}, {"name": "休闲食品", "change_pct": 3.2}, {"name": "食品", "change_pct": 3.22}, {"name": "食品安全", "change_pct": 7.39}, {"name": "社区团购", "change_pct": 2.57}, {"name": "大农业", "change_pct": 3.87}, {"name": "预制菜", "change_pct": 2.25}, {"name": "人造肉", "change_pct": 3.73}, {"name": "国企改革", "change_pct": 4.73}]}, {"code": "002651", "name": "利君股份", "hot_rank": 54, "hot_rank_chg": 25, "stock_cnt": 5796, "price": "9.56", "change": "10.01", "market_id": "33", "circulate_market_value": "5405832400.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "商业航天", "xgb_concepts": [{"name": "业绩爆雷", "change_pct": 5.68}, {"name": "通用航空", "change_pct": 7.75}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "大飞机", "change_pct": 8.19}, {"name": "军工", "change_pct": 8.29}, {"name": "无人机", "change_pct": 8.53}, {"name": "航天", "change_pct": 9.26}]}, {"code": "002815", "name": "崇达技术", "hot_rank": 55, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "16.79", "change": "10.03", "market_id": "33", "circulate_market_value": "13048147700.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "AI服务器"}, {"code": "600183", "name": "生益科技", "hot_rank": 56, "hot_rank_chg": -5, "stock_cnt": 5796, "price": "68.04", "change": "10.01", "market_id": "17", "circulate_market_value": "164095390000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板"}, {"code": "601398", "name": "工商银行", "hot_rank": 57, "hot_rank_chg": -27, "stock_cnt": 5796, "price": "9.10", "change": "-1.41", "market_id": "17", "circulate_market_value": "2453471100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": 5.57}, {"name": "高股息", "change_pct": 0.41}, {"name": "银行", "change_pct": -1.07}, {"name": "白马股", "change_pct": 2.63}, {"name": "破净股", "change_pct": 3.49}, {"name": "大金融", "change_pct": 1.84}]}, {"code": "002077", "name": "大港股份", "hot_rank": 58, "hot_rank_chg": 2, "stock_cnt": 5796, "price": "14.07", "change": "10.01", "market_id": "33", "circulate_market_value": "8165503600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "集成电路测试"}, {"code": "002708", "name": "光洋股份", "hot_rank": 59, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "25.59", "change": "10.02", "market_id": "33", "circulate_market_value": "13760642000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "机器人关节"}, {"code": "601869", "name": "长飞光纤", "hot_rank": 60, "hot_rank_chg": 104, "stock_cnt": 5796, "price": "221.44", "change": "10.00", "market_id": "17", "circulate_market_value": "89979556000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光通信"}, {"code": "002164", "name": "宁波东力", "hot_rank": 61, "hot_rank_chg": 7, "stock_cnt": 5796, "price": "23.17", "change": "10.02", "market_id": "33", "circulate_market_value": "11116390100.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "人形机器人"}, {"code": "600280", "name": "中央商场", "hot_rank": 62, "hot_rank_chg": 14, "stock_cnt": 5796, "price": "3.41", "change": "10.00", "market_id": "17", "circulate_market_value": "3847621600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": 3.89}, {"name": "强势人气股", "change_pct": 4.35}]}, {"code": "603629", "name": "利通电子", "hot_rank": 63, "hot_rank_chg": 14, "stock_cnt": 5796, "price": "62.35", "change": "10.00", "market_id": "17", "circulate_market_value": "22491104000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "300059", "name": "东方财富", "hot_rank": 64, "hot_rank_chg": -31, "stock_cnt": 5796, "price": "19.13", "change": "9.13", "market_id": "33", "circulate_market_value": "258438180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 65, "hot_rank_chg": -12, "stock_cnt": 5796, "price": "9.27", "change": "9.96", "market_id": "33", "circulate_market_value": "9825784400.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "太空算力", "xgb_concepts": [{"name": "工业大麻", "change_pct": 5.46}, {"name": "电子烟", "change_pct": 9.96}, {"name": "一带一路", "change_pct": 5.5}, {"name": "造纸", "change_pct": 5.14}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "包装印刷", "change_pct": 6.7}, {"name": "卫星互联网", "change_pct": 8.8}, {"name": "太空算力", "change_pct": 9.27}]}, {"code": "688981", "name": "中芯国际", "hot_rank": 66, "hot_rank_chg": -14, "stock_cnt": 5796, "price": "134.42", "change": "15.38", "market_id": "17", "circulate_market_value": "268919830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600156", "name": "华升股份", "hot_rank": 67, "hot_rank_chg": 5, "stock_cnt": 5796, "price": "10.51", "change": "8.80", "market_id": "17", "circulate_market_value": "4226183500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 6.08}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "纺织服装", "change_pct": 5.11}, {"name": "湖南国企改革", "change_pct": 4.87}, {"name": "外贸受益概念", "change_pct": 8.09}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "国企改革", "change_pct": 4.73}, {"name": "新冠病毒防治", "change_pct": 5.73}, {"name": "液冷服务器", "change_pct": 10.17}]}, {"code": "002872", "name": "天圣制药", "hot_rank": 68, "hot_rank_chg": 43, "stock_cnt": 5796, "price": "8.59", "change": "9.99", "market_id": "33", "circulate_market_value": "1846146800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "摘帽", "xgb_concepts": [{"name": "中药", "change_pct": 4.19}, {"name": "优化生育（三孩）", "change_pct": 5.0}, {"name": "ST摘帽", "change_pct": 6.58}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "复牌股", "change_pct": 3.16}, {"name": "医药", "change_pct": 5.7}, {"name": "肝炎概念", "change_pct": 5.31}, {"name": "新冠病毒防治", "change_pct": 5.73}]}, {"code": "301236", "name": "软通动力", "hot_rank": 69, "hot_rank_chg": 13, "stock_cnt": 5796, "price": "35.86", "change": "20.01", "market_id": "33", "circulate_market_value": "31124503000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为昇腾"}, {"code": "002428", "name": "云南锗业", "hot_rank": 70, "hot_rank_chg": 23, "stock_cnt": 5796, "price": "68.32", "change": "10.00", "market_id": "33", "circulate_market_value": "44613472000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟"}, {"code": "300666", "name": "江丰电子", "hot_rank": 71, "hot_rank_chg": 23, "stock_cnt": 5796, "price": "209.03", "change": "20.00", "market_id": "33", "circulate_market_value": "46288364000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体材料"}, {"code": "002156", "name": "通富微电", "hot_rank": 72, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "40.13", "change": "10.01", "market_id": "33", "circulate_market_value": "60895358000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "董事长提议回购"}, {"code": "605577", "name": "龙版传媒", "hot_rank": 73, "hot_rank_chg": -27, "stock_cnt": 5796, "price": "20.21", "change": "-1.85", "market_id": "17", "circulate_market_value": "8982222200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 74, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "4.18", "change": "-5.00", "market_id": "17", "circulate_market_value": "5456864200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 4.35}, {"name": "高速公路", "change_pct": 1.36}, {"name": "振兴东北", "change_pct": 4.08}, {"name": "黑龙江自贸区", "change_pct": 1.75}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 75, "hot_rank_chg": -17, "stock_cnt": 5796, "price": "89.20", "change": "10.00", "market_id": "33", "circulate_market_value": "172386930000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "000592", "name": "平潭发展", "hot_rank": 76, "hot_rank_chg": 77, "stock_cnt": 5796, "price": "6.03", "change": "3.25", "market_id": "33", "circulate_market_value": "11548007500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 4.87}, {"name": "林业", "change_pct": 3.84}, {"name": "碳中和", "change_pct": 4.85}, {"name": "自贸区", "change_pct": 3.92}]}, {"code": "603386", "name": "骏亚科技", "hot_rank": 77, "hot_rank_chg": 49, "stock_cnt": 5796, "price": "15.97", "change": "9.99", "market_id": "17", "circulate_market_value": "5211371300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB"}, {"code": "600261", "name": "阳光照明", "hot_rank": 78, "hot_rank_chg": 19, "stock_cnt": 5796, "price": "3.94", "change": "-2.23", "market_id": "17", "circulate_market_value": "5260108700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "氢能源/燃料电池", "change_pct": 6.83}, {"name": "物联网", "change_pct": 9.29}, {"name": "LED", "change_pct": 9.17}, {"name": "卫星互联网", "change_pct": 8.8}]}, {"code": "000034", "name": "神州数码", "hot_rank": 79, "hot_rank_chg": 125, "stock_cnt": 5796, "price": "21.35", "change": "9.99", "market_id": "33", "circulate_market_value": "18129306000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超节点中标"}, {"code": "000815", "name": "美利云", "hot_rank": 80, "hot_rank_chg": -23, "stock_cnt": 5796, "price": "15.80", "change": "6.90", "market_id": "33", "circulate_market_value": "10985156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002298", "name": "中电鑫龙", "hot_rank": 81, "hot_rank_chg": 113, "stock_cnt": 5796, "price": "7.76", "change": "10.07", "market_id": "33", "circulate_market_value": "5162922100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力基础设施", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 8.17}, {"name": "国产软件", "change_pct": 11.03}, {"name": "锂电池", "change_pct": 8.67}, {"name": "人工智能", "change_pct": 9.38}, {"name": "充电桩", "change_pct": 8.06}, {"name": "云计算数据中心", "change_pct": 10.54}, {"name": "军民融合", "change_pct": 8.71}, {"name": "磁悬浮", "change_pct": 7.46}, {"name": "人脸识别", "change_pct": 8.66}, {"name": "水利", "change_pct": 5.63}, {"name": "物联网", "change_pct": 9.29}, {"name": "大数据", "change_pct": 9.77}, {"name": "智慧城市", "change_pct": 8.97}, {"name": "军工", "change_pct": 8.29}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 8.0}, {"name": "储能", "change_pct": 7.69}, {"name": "智慧安防", "change_pct": 9.43}, {"name": "无人机", "change_pct": 8.53}, {"name": "虚拟电厂", "change_pct": 7.59}, {"name": "信创", "change_pct": 11.23}, {"name": "元宇宙", "change_pct": 9.1}, {"name": "东数西算/算力", "change_pct": 10.55}, {"name": "新型城镇化", "change_pct": 6.59}, {"name": "AIGC概念", "change_pct": 8.89}, {"name": "数字乡村", "change_pct": 7.48}, {"name": "华为海思", "change_pct": 10.63}, {"name": "闪存", "change_pct": 12.97}, {"name": "UWB超宽带", "change_pct": 10.0}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "特高压", "change_pct": 7.19}, {"name": "华为云·鲲鹏", "change_pct": 10.91}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "时空大数据", "change_pct": 9.56}, {"name": "服务器", "change_pct": 11.01}, {"name": "智能电网", "change_pct": 8.36}, {"name": "磁电存储", "change_pct": 11.23}, {"name": "军工信息化", "change_pct": 10.13}, {"name": "光纤概念", "change_pct": 11.26}, {"name": "雅江电站概念股", "change_pct": 5.54}]}, {"code": "920799", "name": "艾融软件", "hot_rank": 82, "hot_rank_chg": 217, "stock_cnt": 5796, "price": "29.51", "change": "30.00", "market_id": "151", "circulate_market_value": "3543263400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中标保险项目"}, {"code": "300604", "name": "长川科技", "hot_rank": 83, "hot_rank_chg": -29, "stock_cnt": 5796, "price": "200.62", "change": "20.00", "market_id": "33", "circulate_market_value": "98863426000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体设备"}, {"code": "003040", "name": "楚天龙", "hot_rank": 84, "hot_rank_chg": 45, "stock_cnt": 5796, "price": "12.18", "change": "10.03", "market_id": "33", "circulate_market_value": "5564436100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "eSIM", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 8.68}, {"name": "金融科技", "change_pct": 11.09}, {"name": "人工智能", "change_pct": 9.38}, {"name": "物联网", "change_pct": 9.29}, {"name": "数字经济", "change_pct": 9.03}, {"name": "国产操作系统", "change_pct": 10.39}, {"name": "电子身份证", "change_pct": 10.44}, {"name": "数字人民币", "change_pct": 10.57}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "eSIM", "change_pct": 10.62}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "AI大模型/智能体", "change_pct": 8.81}, {"name": "区块链", "change_pct": 9.04}]}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 85, "hot_rank_chg": -26, "stock_cnt": 5796, "price": "32.26", "change": "20.02", "market_id": "33", "circulate_market_value": "7864492500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "硅光代工"}, {"code": "600900", "name": "长江电力", "hot_rank": 86, "hot_rank_chg": 26, "stock_cnt": 5796, "price": "31.22", "change": "-1.82", "market_id": "17", "circulate_market_value": "763897760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601088", "name": "中国神华", "hot_rank": 87, "hot_rank_chg": 23, "stock_cnt": 5796, "price": "50.86", "change": "-4.04", "market_id": "17", "circulate_market_value": "862011080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 88, "hot_rank_chg": 213, "stock_cnt": 5796, "price": "10.62", "change": "5.99", "market_id": "33", "circulate_market_value": "16876466000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 4.81}, {"name": "5G", "change_pct": 10.61}, {"name": "VR&AR", "change_pct": 10.05}, {"name": "网络安全", "change_pct": 10.52}, {"name": "军工集团", "change_pct": 7.32}, {"name": "福建自贸/海西概念", "change_pct": 4.87}, {"name": "大数据", "change_pct": 9.77}, {"name": "军工", "change_pct": 8.29}, {"name": "无人机", "change_pct": 8.53}, {"name": "信创", "change_pct": 11.23}, {"name": "航天", "change_pct": 9.26}, {"name": "国企改革", "change_pct": 4.73}, {"name": "智慧政务", "change_pct": 10.06}, {"name": "卫星互联网", "change_pct": 8.8}, {"name": "华为产业链", "change_pct": 9.46}, {"name": "自贸区", "change_pct": 3.92}, {"name": "低空经济", "change_pct": 8.32}, {"name": "军工信息化", "change_pct": 10.13}]}, {"code": "600567", "name": "山鹰国际", "hot_rank": 89, "hot_rank_chg": 60, "stock_cnt": 5796, "price": "1.11", "change": "9.90", "market_id": "17", "circulate_market_value": "6888058500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "要约收购", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 9.29}, {"name": "造纸", "change_pct": 5.14}, {"name": "包装印刷", "change_pct": 6.7}, {"name": "固废处理", "change_pct": 5.66}, {"name": "复牌股", "change_pct": 3.16}, {"name": "环保", "change_pct": 6.65}, {"name": "人民币升值受益", "change_pct": 3.12}, {"name": "破净股", "change_pct": 3.49}, {"name": "数字经济", "change_pct": 9.03}, {"name": "低价股", "change_pct": 3.88}, {"name": "回购增持再贷款", "change_pct": 5.16}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 90, "hot_rank_chg": -6, "stock_cnt": 5796, "price": "23.57", "change": "9.99", "market_id": "33", "circulate_market_value": "67411913000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国产算力"}, {"code": "601086", "name": "国芳集团", "hot_rank": 91, "hot_rank_chg": 8, "stock_cnt": 5796, "price": "11.31", "change": "-4.07", "market_id": "17", "circulate_market_value": "7532460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 3.89}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 92, "hot_rank_chg": 40, "stock_cnt": 5796, "price": "4.95", "change": "2.06", "market_id": "17", "circulate_market_value": "12466623900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 6.08}, {"name": "工业大麻", "change_pct": 5.46}, {"name": "中药", "change_pct": 4.19}, {"name": "保健品", "change_pct": 3.4}, {"name": "民营医院", "change_pct": 4.73}, {"name": "医药", "change_pct": 5.7}, {"name": "化学原料药", "change_pct": 5.61}, {"name": "流感", "change_pct": 5.21}, {"name": "振兴东北", "change_pct": 4.08}, {"name": "食品", "change_pct": 3.22}, {"name": "肝炎概念", "change_pct": 5.31}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 93, "hot_rank_chg": -4, "stock_cnt": 5796, "price": "51.46", "change": "10.00", "market_id": "33", "circulate_market_value": "37320674000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板"}, {"code": "000977", "name": "浪潮信息", "hot_rank": 94, "hot_rank_chg": 7, "stock_cnt": 5796, "price": "46.81", "change": "10.01", "market_id": "33", "circulate_market_value": "68666322000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "002199", "name": "东晶电子", "hot_rank": 95, "hot_rank_chg": 25, "stock_cnt": 5796, "price": "12.42", "change": "10.01", "market_id": "33", "circulate_market_value": "2867804000.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "石英晶体元器件", "xgb_concepts": [{"name": "被动元件", "change_pct": 11.2}, {"name": "锂电池", "change_pct": 8.67}, {"name": "ST摘帽", "change_pct": 6.58}, {"name": "强势人气股", "change_pct": 4.35}, {"name": "新能源汽车", "change_pct": 8.0}]}, {"code": "000988", "name": "华工科技", "hot_rank": 96, "hot_rank_chg": 21, "stock_cnt": 5796, "price": "64.52", "change": "10.01", "market_id": "33", "circulate_market_value": "64841675000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块"}, {"code": "002371", "name": "北方华创", "hot_rank": 97, "hot_rank_chg": 27, "stock_cnt": 5796, "price": "527.38", "change": "10.00", "market_id": "33", "circulate_market_value": "383589990000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体设备"}, {"code": "600667", "name": "太极实业", "hot_rank": 98, "hot_rank_chg": 8, "stock_cnt": 5796, "price": "11.97", "change": "10.02", "market_id": "17", "circulate_market_value": "25035760000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 4.33}, {"name": "半导体", "change_pct": 13.56}, {"name": "光伏", "change_pct": 7.3}, {"name": "风电", "change_pct": 6.08}, {"name": "江苏国企改革", "change_pct": 4.54}, {"name": "国产芯片", "change_pct": 12.42}, {"name": "BIPV概念", "change_pct": 5.93}, {"name": "内存", "change_pct": 12.28}, {"name": "国企改革", "change_pct": 4.73}, {"name": "闪存", "change_pct": 12.97}, {"name": "中芯国际概念股", "change_pct": 14.17}]}, {"code": "000636", "name": "风华高科", "hot_rank": 99, "hot_rank_chg": 5, "stock_cnt": 5796, "price": "29.57", "change": "10.01", "market_id": "33", "circulate_market_value": "33931278000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 100, "hot_rank_chg": -26, "stock_cnt": 5796, "price": "24.85", "change": "4.63", "market_id": "17", "circulate_market_value": "511954560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "688691", "name": "灿芯股份", "price": 59.64, "change_pct": 20.0, "reason": "公司与客户共同开展超级计算内存芯片设计，产品可通过标准DDR接口替代普通内存，适用于云端及边缘算力场景", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 24.03, "first_limit_up": 1795749071, "break_limit_up_times": 1}, {"code": "603303", "name": "得邦照明", "price": 21.84, "change_pct": 10.03, "reason": "公司主要从事绿色照明产品的研产销，已形成了节能灯、LED灯泡和LED室内应用灯具等四大类绿色照明产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.03, "first_limit_up": 1795756090, "break_limit_up_times": 7}, {"code": "002990", "name": "盛视科技", "price": 31.44, "change_pct": 10.01, "reason": "1、全资子公司签署《算力产业合作协议》，围绕算电协同、AIDC智能算力中心运营等四大维度开展合作，整体合作业务体量折算合计约60亿元；\n2、公司参股的苏州亿铸智能科技有限公司是一家将新型存储器ReRAM及存算一体创新计算架构相结合，面向数据中心、云计算等场景的大算力AI芯片公司；\n3、人工智能智慧口岸应用领域领先企业之一，已建立了机器人产品线，包括室内/外巡检机器人、协作机器人、车底查验机器人、测温机器人、协运机器人等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.04, "first_limit_up": 1795755600, "break_limit_up_times": 0}, {"code": "300461", "name": "田中精机", "price": 36.84, "change_pct": 20.0, "reason": "自动化设备提供商；公司拥有无框力矩电机、空心杯电机及关节模组生产线，相关产品可应用于机器人领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.81, "first_limit_up": 1795761462, "break_limit_up_times": 2}, {"code": "000571", "name": "新大洲A", "price": 3.99, "change_pct": 9.92, "reason": "1、内蒙古呼伦贝尔地区为数不多的生产长焰煤的煤炭企业；\n2、参股子公司中航新大洲公司主要生产产品之一为LEAP发动机零部件，其中LEAP-A对应机型空客320neo，LEAP-B对应机型波音737MAX，LEAP-C对应机型C919", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.55, "first_limit_up": 1795758015, "break_limit_up_times": 0}, {"code": "603800", "name": "洪田股份", "price": 30.68, "change_pct": 10.0, "reason": "子公司洪镭光学获得半导体掩模版直写光刻机订单", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.24, "first_limit_up": 1795755777, "break_limit_up_times": 0}, {"code": "688535", "name": "华海诚科", "price": 78.35, "change_pct": 20.0, "reason": "公司的颗粒状环氧塑封料（GMC)可以用于HBM的封装", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.05, "first_limit_up": 1795746949, "break_limit_up_times": 1}, {"code": "002338", "name": "奥普光电", "price": 35.82, "change_pct": 10.01, "reason": "1、公司实控人为长春光学精密机械与物理研究所，光栅尺是半导体设备的核心部件之一，可用于半导体加工领域多种设备；\n2、公司空间光学系统、高性能碳纤维复合材料制品等产品已应用于卫星，光电经纬仪、航空/航天相机等多次参与神舟、嫦娥等国家重大任务", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 2.92, "first_limit_up": 1795756032, "break_limit_up_times": 15}, {"code": "605376", "name": "博迁新材", "price": 64.68, "change_pct": 10.0, "reason": "公司是全球领先、国内唯一的小粒径纳米镍粉生产商、国内MLCC镍粉市场领军企业，银包铜粉已批量用于光伏HJT电池低温浆料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 4.09, "first_limit_up": 1795755997, "break_limit_up_times": 2}, {"code": "002975", "name": "博杰股份", "price": 69.14, "change_pct": 10.01, "reason": "1、公司拿下鼎泰芯源控股权，鼎泰芯源由中科院半导体所Ⅲ-V族化合物半导体技术团队创立，目前的核心产品为磷化铟衬底，是国内少数几家掌握磷化铟衬底材料核心技术并实现国产化量产的企业；\n2、公司披露人形机器人测试业务覆盖IMU传感器、摄像头、力传感器及麦克风检测；\n3、公司聚焦液冷服务器制造与检测环节，核心提供液冷板精密焊接设备、液冷系统密封性检测设备及自动化产线解决方案", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 8.37, "first_limit_up": 1795758438, "break_limit_up_times": 3}, {"code": "603031", "name": "安孚科技", "price": 25.36, "change_pct": 10.02, "reason": "1、公司联合领投苏州易缆微3000万元，占股4.3%，布局1.6T/3.2T光模块核心芯片及CPO解决方案，加码光芯片赛道；\n2、公司战略投资的苏州易缆微硅光异质集成薄膜铌酸锂芯片已为某航天系上市公司提供产品与服务", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.98, "first_limit_up": 1795761036, "break_limit_up_times": 0}, {"code": "300663", "name": "科蓝软件", "price": 6.64, "change_pct": 20.07, "reason": "公司是华为核心ISV生态合作伙伴，围绕互联网银行与信创领域合作，基于HarmonyOS打造金融原生APP方案，并联合推出银行自主可控改造及智慧金融出海方案", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 11.38, "first_limit_up": 1795755645, "break_limit_up_times": 0}, {"code": "600667", "name": "太极实业", "price": 11.97, "change_pct": 10.02, "reason": "DRAM封装龙头；子公司海太半导体的封测业务主要是为SK海力士的DRAM产品提供后工序服务，对12英寸1Z纳米级晶圆进行集成电路封装，海太半导体由公司和SK海力士共同投资组建，公司持有海太半导体55%股权，SK海力士持有海太半导体45%股权", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.78, "first_limit_up": 1795760643, "break_limit_up_times": 0}, {"code": "002930", "name": "宏川智慧", "price": 6.68, "change_pct": 10.05, "reason": "1、公司成为燧原指定S级经销商；\n2、子公司宏川智算完成一批企业级DDR5内存条交付，已顺利送达至国内某头部GPU设计厂商，用于其AI算力芯片的服务器验证与算力中心建设", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 0.5, "first_limit_up": 1795742700, "break_limit_up_times": 0}, {"code": "603316", "name": "诚邦股份", "price": 9.35, "change_pct": 10.0, "reason": "公司拟定增1.29亿元加码半导体存储业务", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.43, "first_limit_up": 1795757237, "break_limit_up_times": 4}, {"code": "688147", "name": "微导纳米", "price": 53.23, "change_pct": 20.0, "reason": "面向全球的半导体、泛半导体高端微纳装备制造商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.25, "first_limit_up": 1795755868, "break_limit_up_times": 15}, {"code": "002492", "name": "恒基达鑫", "price": 4.5, "change_pct": 10.02, "reason": "公司为石化物流服务提供商，是目前华南沿海地区规模最大的石化产品码头之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.69, "first_limit_up": 1795757289, "break_limit_up_times": 4}, {"code": "605255", "name": "天普股份", "price": 65.48, "change_pct": 9.99, "reason": "控股股东等与中昊芯英签署的协议转让股份完成过户登记，中昊芯英为国内掌握TPU架构AI芯片核心研发技术并实现TPU芯片量产核心公司", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.06, "first_limit_up": 1795758076, "break_limit_up_times": 6}, {"code": "301316", "name": "慧博云通", "price": 38.65, "change_pct": 19.99, "reason": "1、公司目前与华为的主要合作为向其提供移动智能终端外场测试服务，公司作为华为海思信息技术服务供应商之一，主要向华为海思提供芯片外场测试服务；\n2、公司拟发行股份购买宝德计算65.47%股份，标的为服务器、终端整机研发生产商，核心产品含基于鲲鹏、昇腾处理器的AI训练及推理服务器等全栈算力产品，交易后公司实现软硬一体化延伸", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 10.67, "first_limit_up": 1795746690, "break_limit_up_times": 1}, {"code": "600589", "name": "大位科技", "price": 5.93, "change_pct": 10.02, "reason": "公司为国内AIDC（人工智能数据中心）服务商，已拥有北京核心区域优质的数据中心资源，正投建张北、太仆寺旗大型智算中心，绑定互联网头部客户", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.09, "first_limit_up": 1795743057, "break_limit_up_times": 0}, {"code": "601789", "name": "宁波建工", "price": 3.71, "change_pct": 10.09, "reason": "公司直接加间接持有中经云32.37%股权，中经云主营数据中心机柜位出租，客户包括腾讯、阿里、百度、金山云及三大电信运营商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.21, "first_limit_up": 1795743423, "break_limit_up_times": 5}, {"code": "600460", "name": "士兰微", "price": 22.29, "change_pct": 10.02, "reason": "公司拟200亿元投建12英寸高端模拟芯片生产线项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.07, "first_limit_up": 1795760875, "break_limit_up_times": 0}, {"code": "603319", "name": "美湖股份", "price": 18.46, "change_pct": 10.01, "reason": "1、公司持有朗道智通 66.13%股权，后者主要产品及业务有工业物流机器人（AGV）；\n2、国内内燃机机油泵龙头，控股子公司东兴昌科技激光雷达电机产品已实现对全球图像级激光雷达领先企业的配套供货，并实车装配于某新能源汽车制造厂商", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.83, "first_limit_up": 1795761348, "break_limit_up_times": 10}, {"code": "601869", "name": "长飞光纤", "price": 221.44, "change_pct": 10.0, "reason": "全球光纤光缆行业的领先企业；公司空芯技术产能水平领先，并已在相关项目中标", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 2.97, "first_limit_up": 1795758294, "break_limit_up_times": 1}, {"code": "001306", "name": "夏厦精密", "price": 50.49, "change_pct": 10.0, "reason": "公司主要产品减速机及其配件，应用领域为机器人，主要用于机器人的关键传动部件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.79, "first_limit_up": 1795757229, "break_limit_up_times": 0}, {"code": "003007", "name": "直真科技", "price": 31.91, "change_pct": 10.0, "reason": "1、公司拥有数据中心智能运维软件系统产品，参加了电信运营商大型集团级数据中心、省级数据中心相关OSS系统的建设，与华为在昇腾生态原生开发、鲲鹏生态原生开发方面签署了合作协议，共同推进算力原生应用开发；\n2、公司承建“千帆星座”卫星互联网网络管理中心系统及“国网星座”运控流量预测系统已上线并通过专家评审，支撑卫星发射及在轨测试，深度参与天地一体化信息网络建设;", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 6.91, "first_limit_up": 1795746951, "break_limit_up_times": 0}, {"code": "603119", "name": "浙江荣泰", "price": 52.99, "change_pct": 10.01, "reason": "公司上半年已向国内外客户交付机器人零部件，正推进泰国生产基地建设和产能搭建", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.18, "first_limit_up": 1795755602, "break_limit_up_times": 2}, {"code": "000062", "name": "深圳华强", "price": 18.4, "change_pct": 9.98, "reason": "公司是华为海思全系列产品代理商", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 3.08, "first_limit_up": 1795743384, "break_limit_up_times": 1}, {"code": "601133", "name": "柏诚股份", "price": 16.69, "change_pct": 10.02, "reason": "我国洁净室行业头部企业之一，长鑫为公司客户之一", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1795757253, "break_limit_up_times": 1}, {"code": "600895", "name": "张江高科", "price": 24.97, "change_pct": 10.0, "reason": "全资子公司张江浩成创业投资有限公司持有上海微电子10.78%股份；上海微电子是国产光刻机龙头", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 2.83, "first_limit_up": 1795757742, "break_limit_up_times": 3}, {"code": "603929", "name": "亚翔集成", "price": 82.52, "change_pct": 10.0, "reason": "公司主营洁净室工程", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1795758290, "break_limit_up_times": 0}, {"code": "002913", "name": "奥士康", "price": 69.27, "change_pct": 10.0, "reason": "公司表示有通过供应体系向英伟达提供PCB系列产品，目前正在积极参与英伟达R系列产品的打样和测试工作，主要为GPU相关产品", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 6.07, "first_limit_up": 1795757295, "break_limit_up_times": 10}, {"code": "688596", "name": "正帆科技", "price": 55.44, "change_pct": 20.0, "reason": "公司完成收购汉京半导体62.23%股权，新增石英、碳化硅陶瓷等半导体设备核心零组件，产品矩阵延伸至高端耗材", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.96, "first_limit_up": 1795757232, "break_limit_up_times": 13}, {"code": "000935", "name": "四川双马", "price": 15.52, "change_pct": 9.99, "reason": "公司参与投资专业化基金主要聚焦智能制造、半导体、清洁能源及技术、消费和服务、自动驾驶、精准医疗等领域", "plates": ["创投"], "limit_up_days": 1, "turnover_ratio": 1.07, "first_limit_up": 1795758525, "break_limit_up_times": 1}, {"code": "603688", "name": "石英股份", "price": 30.78, "change_pct": 10.01, "reason": "国内石英制品行业的龙头企业；公司在光通讯行业的主营产品一直以石英延长管、石英棒、石英套管为主，为光纤预制棒及光纤拉丝工艺提供部分石英材料", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 2.23, "first_limit_up": 1795761296, "break_limit_up_times": 0}, {"code": "603931", "name": "格林达", "price": 30.46, "change_pct": 10.0, "reason": "1、国内湿电子化学品主要生产厂商之一；公司产品主要有显影液、蚀刻液、稀释液、清洗液等，核心产品TMAH显影液系LCD、OLED显示面板生产过程中的关键材料之一；\n2、TMA价格持续上涨，据网络截图显示，查询到公司也在生产和销售偏苯三酸酐", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 11.32, "first_limit_up": 1795761687, "break_limit_up_times": 1}, {"code": "002631", "name": "德尔未来", "price": 7.9, "change_pct": 10.03, "reason": "1、公司全资成立德晶耀半导体苏州有限公司，经营范围涵盖电子专用材料研发、半导体器件专用设备制造等；\n2、控股子公司烯成石墨烯有用于柔性屏的石墨烯透明导电薄膜产品布局", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.21, "first_limit_up": 1795759401, "break_limit_up_times": 5}, {"code": "301086", "name": "鸿富瀚", "price": 96.48, "change_pct": 20.0, "reason": "1、公司机器人产品包括人形机器人关节、减速器、躯干等金属精密组件和注塑件，正面向北美客户小批量打样；\n2、子公司梅州市鸿富瀚科技有限公司于近日收到某客户中标通知书，确认为整机柜液冷部件-冷板产品的中标人，中标产品预计于2026年6月至2027年1月交付", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.95, "first_limit_up": 1795759881, "break_limit_up_times": 2}, {"code": "002298", "name": "中电鑫龙", "price": 7.76, "change_pct": 10.07, "reason": "1、公司子公司北京中电兴发与华为完成信创技术与产品互认证并签署战略合作协议，双方在智慧城市、大数据中心等领域推进项目落地；\n2、公司在算力基础设施方面为客户提供智能输配电设备与算力建设服务解决方案，相关产品与服务已应用于苏州市人工智能算力中心、芜湖数据中心集群等项目", "plates": ["华为昇腾"], "limit_up_days": 2, "turnover_ratio": 8.69, "first_limit_up": 1795743051, "break_limit_up_times": 1}, {"code": "002065", "name": "东华软件", "price": 5.95, "change_pct": 9.98, "reason": "公司与摩尔线程等的合作正深入推进，具体围绕软件适配、市场推广两大核心方向展开，同时同步推进技术、市场、服务三方面协同。", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.61, "first_limit_up": 1795755933, "break_limit_up_times": 0}, {"code": "002916", "name": "深南电路", "price": 224.92, "change_pct": 10.0, "reason": "国内IC载板龙头，已成为全球领先的无线基站射频功放PCB供应商、亚太地区主要的航空航天用PCB供应商、国内领先的处理器芯片封装基板供应商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.09, "first_limit_up": 1795749444, "break_limit_up_times": 0}, {"code": "002674", "name": "兴业科技", "price": 16.15, "change_pct": 10.01, "reason": "公司拟收购青岛立昂磷化铟衬底及半导体电子材料业务，切入光通信与算力光模块核心材料赛道", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 2.64, "first_limit_up": 1795758366, "break_limit_up_times": 0}, {"code": "688012", "name": "中微公司", "price": 269.1, "change_pct": 20.0, "reason": "公司为国内半导体设备龙头，核心产品等离子体刻蚀设备已批量应用在国内外一线客户从65纳米到14纳米、7纳米和5纳米及更先进生产线中", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.75, "first_limit_up": 1795761867, "break_limit_up_times": 2}, {"code": "003043", "name": "华亚智能", "price": 40.46, "change_pct": 10.01, "reason": "1、公司主营精密金属制造，主要为国内外知名半导体设备制造商、品牌商等客户提供各类定制化精密金属结构件；\n2、公司有少量精密金属结构件应用于储能逆变器上", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.7, "first_limit_up": 1795755777, "break_limit_up_times": 1}, {"code": "301172", "name": "君逸数码", "price": 14.36, "change_pct": 19.97, "reason": "子公司光宏精密在光通信相关业务的布局，主要围绕核心光学产品展开，重点研发适配光通信场景的微透镜阵列、高精度光学组件等，可用于光模块、光传输设备的信号准直与调控环节", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.08, "first_limit_up": 1795757211, "break_limit_up_times": 23}, {"code": "002409", "name": "雅克科技", "price": 80.14, "change_pct": 10.01, "reason": "1、公司子公司成都科美特专注于含氟类特种气体的研产销，主要产品为六氟化硫和四氟化碳，目前为合肥长鑫供应含氟类特种气体；\n2、公司向SK海力士、三星电子等提供逻辑芯片，海力士占全球HBM市场80%份额", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.25, "first_limit_up": 1795755855, "break_limit_up_times": 1}, {"code": "605118", "name": "力鼎光电", "price": 23.25, "change_pct": 9.98, "reason": "1、公司镜头产品在AI或机器人领域的作用主要是为其提供更加清晰、完整、高效的视觉捕捉和视觉识别，已沉淀了多年机器视觉应用领域的开发和生产技术；\n2、公司参股20%上海理鑫光学，后者主要产品包括激光超短焦投影镜头、增强现实眼镜核心元器件、AR/VR镜头等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.88, "first_limit_up": 1795758493, "break_limit_up_times": 1}, {"code": "603629", "name": "利通电子", "price": 62.35, "change_pct": 10.0, "reason": "公司直接运营的AI算力云规模已达38000P", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 12.01, "first_limit_up": 1795757637, "break_limit_up_times": 0}, {"code": "603683", "name": "晶华新材", "price": 13.29, "change_pct": 10.02, "reason": "1、公司柔性触觉传感器适配人形机器人灵巧手等场景，相关产品已实现小批量量产，并与多家具身智能、灵巧手领域头部企业开展合作；\n2、公司为电池组装过程提供各类胶带，已成熟运用于软包电池、半固态电池；\n3、公司已实现在折叠屏手机应用场景上的产品突破并实现量产", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.4, "first_limit_up": 1795758079, "break_limit_up_times": 4}, {"code": "600641", "name": "先导基电", "price": 27.76, "change_pct": 9.98, "reason": "公司大股东先导科技集团自有镓、 锗、 铟等稀散金属（产量全球领先） ， 能够提供电子材料（如掺杂材料、 前驱体、 电子特气） 以及工艺测试等多方面支持， 为公司零部件产品研发及国产化验证提供保障", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.64, "first_limit_up": 1795755771, "break_limit_up_times": 1}, {"code": "605588", "name": "冠石科技", "price": 34.93, "change_pct": 10.02, "reason": "2024年7月中旬公司首台电子束掩膜版光刻机顺利交付。项目预计2025年公司实现45nm光掩膜版的量产， 2028年实现28nm光掩膜版的量产", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.12, "first_limit_up": 1795756201, "break_limit_up_times": 2}, {"code": "002963", "name": "豪尔赛", "price": 15.43, "change_pct": 9.98, "reason": "1、公司参股的华奕新能源已中标某头部通讯公司的数据中心冷板试点项目，其基于蒸发冷却独有冷水技术，复合液冷板，可完全实现无压缩机补冷；\n2、公司智慧灯杆解决方案基于灯具节能、智能灯控等技术，结合物联网、大数据、5G、AI、机器视觉等新一代信息技术，通过智慧照明云平台对城市路灯等公共照明实现统一智能化管理", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 3.64, "first_limit_up": 1795755801, "break_limit_up_times": 4}, {"code": "002164", "name": "宁波东力", "price": 23.17, "change_pct": 10.02, "reason": "公司重点布局谐波减速器与精密行星减速器，相关产品已实现批量试样及供货，配套业务进入产业化落地推进阶段", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 19.27, "first_limit_up": 1795745058, "break_limit_up_times": 16}, {"code": "603679", "name": "华体科技", "price": 15.94, "change_pct": 10.01, "reason": "智慧路灯龙头；公司已有部分智慧路灯搭载了5G基站，投资5.4亿元构建全国首个以智慧城市为主题的卫星星座“天座”", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 4.04, "first_limit_up": 1795757332, "break_limit_up_times": 6}, {"code": "603358", "name": "华达科技", "price": 18.98, "change_pct": 10.03, "reason": "公司此前与埃夫特在工业/人形机器人制造研发生产、轻量化材料产品开发及汽车零部件行业应用等领域达成全面战略合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.59, "first_limit_up": 1795761261, "break_limit_up_times": 13}, {"code": "688521", "name": "芯原股份", "price": 89.81, "change_pct": 20.0, "reason": "国内领先的芯片设计供应商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.78, "first_limit_up": 1795758397, "break_limit_up_times": 5}, {"code": "300473", "name": "德尔股份", "price": 52.8, "change_pct": 20.0, "reason": "1、公司以海外工厂生产线为应用场景，对机器人本体开展针对性训练和二次开发，目标是通过替代部分人工推进产线智能化升级；\n2、公司日本子公司研发的固态电池产品已通过针刺试验", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.15, "first_limit_up": 1795757175, "break_limit_up_times": 7}, {"code": "002785", "name": "万里石", "price": 27.37, "change_pct": 10.01, "reason": "1、A股首家石材上市公司，5000吨电池级碳酸锂后端生产线已试生产并少量销售；\n2、控股子公司拟收购赛富矿业和唐资源全部股权，双方将在铀矿（核电主要原料）等战略性矿种领域的矿产勘查、矿权投资、矿业开发等产业协同方面开展深度合作", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 2.06, "first_limit_up": 1795746651, "break_limit_up_times": 0}, {"code": "000056", "name": "*ST皇庭", "price": 1.91, "change_pct": 9.77, "reason": "1、控股子公司意发功率核心产品为FRD等硅基功率半导体，同时具有IGBT设计能力，目前其拥有2条生产线，已稳定生产6英寸晶圆；\n2、公司实施“高新科技+商业管理”双主业战略，商业管理以“自持+整租+委托管理”模式布局粤港澳大湾区及全国一二线城市核心地段，旗下深圳皇庭广场已成为区域购物中心标识之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.32, "first_limit_up": 1795743336, "break_limit_up_times": 4}, {"code": "688785", "name": "恒运昌", "price": 219.96, "change_pct": 20.0, "reason": "公司是国内领先的半导体设备核心零部件供应商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.69, "first_limit_up": 1795757108, "break_limit_up_times": 11}, {"code": "001225", "name": "和泰机电", "price": 27.23, "change_pct": 10.02, "reason": "公司通过持续实施自动化、智能化改造，更新迭代生产设备，在物料输送设备制造领域的生产工艺已相对成熟，应用了机器人自动焊接技术，机器人视觉识别自动上下料、自动装箱等技术", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.34, "first_limit_up": 1795757508, "break_limit_up_times": 0}, {"code": "603386", "name": "骏亚科技", "price": 15.97, "change_pct": 9.99, "reason": "行业内为数不多可以为客户提供从样板到批量生产一站式服务的PCB企业；公司产品包括刚性电路板、柔性电路板（FPC）、刚柔结合板（RFPC）、高密度互联电路板（HDI）和PCBA，产品结构类型丰富，拥有1-108层线路板研制能力，兼具印制电路板研发、批量生产及整机服务能力", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 11.31, "first_limit_up": 1795742700, "break_limit_up_times": 3}, {"code": "603496", "name": "恒为科技", "price": 18.87, "change_pct": 10.03, "reason": "1、公司系华为网络可视化产品供应商，国产化产品采用昇腾与鲲鹏解决方案，旗下智云·前海智算中心部署华为昇腾集群，覆盖算力到可视化的国产方案；\n2、公司提供智算可视化运维、AI一体机、光交换机、集群组网调优等算力底座产品与服务，形成AI算力底座+AI应用双轮驱动战略", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 4.05, "first_limit_up": 1795745018, "break_limit_up_times": 0}, {"code": "603186", "name": "华正新材", "price": 125.25, "change_pct": 10.0, "reason": "公司已将AI算力赛道纳入五年战略重点，Extreme Low-loss等级覆铜板已批量供货AI服务器、交换机、数据中心等核心场景", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.67, "first_limit_up": 1795755601, "break_limit_up_times": 0}, {"code": "603063", "name": "禾望电气", "price": 18.47, "change_pct": 10.01, "reason": "公司携储能、光伏、氢能多个系列核心装备亮相Intersolar Europe 2026德国展，多款新品迎来海外首展，组串式/集中式储能变流器已实现海外市场GW级批量出货", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 4.77, "first_limit_up": 1795761692, "break_limit_up_times": 3}, {"code": "002008", "name": "大族激光", "price": 47.62, "change_pct": 10.0, "reason": "全球领先的智能制造装备整体解决方案服务商，控股子公司大族数控研发、生产并销售PCB专用设备", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.46, "first_limit_up": 1795757247, "break_limit_up_times": 2}, {"code": "688035", "name": "德邦科技", "price": 56.65, "change_pct": 20.0, "reason": "控股子公司泰吉诺液态金属片已小批量供货国内浸没式液冷服务器客户，产品用于AI服务器主控芯片散热", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 6.05, "first_limit_up": 1795759224, "break_limit_up_times": 2}, {"code": "002213", "name": "大为股份", "price": 19.24, "change_pct": 10.01, "reason": "公司半导体存储业务主要产品有NAND、DRAM存储两大系列，子公司大为创芯有产品可以应用在数据中心", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.65, "first_limit_up": 1795761069, "break_limit_up_times": 0}, {"code": "002723", "name": "小崧股份", "price": 5.58, "change_pct": 10.06, "reason": "国内较早从事可充电式照明、电风扇类产品研产销的企业之一；公司控股股东变更为嘉晟时代，", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 3.58, "first_limit_up": 1795756725, "break_limit_up_times": 0}, {"code": "000811", "name": "冰轮环境", "price": 21.18, "change_pct": 10.03, "reason": "数据中心温控系统是旗下公司顿汉布什的主要业务之一，服务过国家超算广州中心（天河二号）、中国联通西安数据中心、中国移动贵州数据中心等；公司有产品服务数据中心液冷业务", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 5.05, "first_limit_up": 1795758573, "break_limit_up_times": 1}, {"code": "002855", "name": "捷荣技术", "price": 9.98, "change_pct": 10.03, "reason": "公司精密结构件产品经客户ODM厂家间接供应华为品牌终端，应用于华为手机等产品", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 4.05, "first_limit_up": 1795744770, "break_limit_up_times": 0}, {"code": "000938", "name": "紫光股份", "price": 23.57, "change_pct": 9.99, "reason": "公司旗下新华三为服务器、智算行业龙头之一，拥有覆盖 AI 数据中心、智能园区、工业等场景的全系列交换机产品，核心子公司新华三推出H3C UniPoD S80000系列超节点，覆盖32-1024卡全系列，单柜支持128卡高密部署，为万亿参数大模型训练提供高性能算力平台", "plates": ["超节点"], "limit_up_days": 1, "turnover_ratio": 4.9, "first_limit_up": 1795758087, "break_limit_up_times": 0}, {"code": "002144", "name": "宏达高科", "price": 10.99, "change_pct": 10.01, "reason": "1、孙公司浙江威尔德开发有智能按摩机器人；\n2、国内经编面料龙头，为宝马，长城，比亚迪等汽车品牌的新能源车型供应汽车内饰面料产品；\n3、全资子公司威尔德主要从事超声诊断、治疗设备、体外诊断试剂", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 26.09, "first_limit_up": 1795744302, "break_limit_up_times": 2}, {"code": "002859", "name": "洁美科技", "price": 36, "change_pct": 9.99, "reason": "全球电子元器件封装耗材一站式整体解决方案提供商；公司拟9.15亿元收购埃福思科技100%股权，标的是国内领先的超高精度光学抛光设备企业", "plates": ["被动元件", "资产重组"], "limit_up_days": 1, "turnover_ratio": 2.91, "first_limit_up": 1795758300, "break_limit_up_times": 1}, {"code": "600410", "name": "华胜天成", "price": 20.9, "change_pct": 10.0, "reason": "华为昇腾生态合作伙伴，提供算力平台集成、软件适配及运维服务，为政企客户搭建基于昇腾芯片的智算平台；共同参与多个省市智算中心规划建设项目，目前承建的智算中心使用的服务器主要为鲲鹏、昇腾", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 24.92, "first_limit_up": 1795745490, "break_limit_up_times": 0}, {"code": "603175", "name": "超颖电子", "price": 105.6, "change_pct": 10.0, "reason": "公司间接控股股东定颖投控为中国台湾上市公司，主要产品为印制电路板，按照层数可分为双面板和多层板", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.01, "first_limit_up": 1795757250, "break_limit_up_times": 9}, {"code": "603213", "name": "镇洋发展", "price": 13.97, "change_pct": 10.0, "reason": "浙江沪杭甬换股吸收合并公司事项发布异议股东现金选择权实施公告，现金选择权行权价格12.96元/股", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.08, "first_limit_up": 1795742700, "break_limit_up_times": 4}, {"code": "603950", "name": "长源东谷", "price": 27.62, "change_pct": 10.0, "reason": "公司拟收购康豪机电，标的终端应用覆盖数据中心、发电及储能等场景，主要客户包括康明斯集团、卡特彼勒、MTU、广西玉柴、潍柴动力等国内外知名动力系统制造商", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 1.89, "first_limit_up": 1795756035, "break_limit_up_times": 0}, {"code": "603893", "name": "瑞芯微", "price": 211.72, "change_pct": 10.0, "reason": "公司RK182X协处理器顺利量产，已有数百个客户、几十个行业在深化研发中，应用场景覆盖各类机器人、车载AI BOX等领域，首批客户已进入量产阶段，将在下半年放量", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.16, "first_limit_up": 1795758249, "break_limit_up_times": 2}, {"code": "600095", "name": "湘财股份", "price": 7.15, "change_pct": 10.0, "reason": "公司上半年净利同比增长273.74%，报告期内，公司主动优化业务结构，证券主业实现亮眼增长，整体盈利能力显著提升，扎实推进降本提质增效、吸收合并大智慧、产业结构优化、全面风险管控等重点工作", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 2.19, "first_limit_up": 1795755994, "break_limit_up_times": 17}, {"code": "002921", "name": "联诚精密", "price": 13.62, "change_pct": 10.02, "reason": "公司减速类产品主要应用于工程机械行走马达等，表示现正积极开发机器人零部件产品市场，如机械臂和关节头等相关零件产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.17, "first_limit_up": 1795760844, "break_limit_up_times": 0}, {"code": "603051", "name": "鹿山新材", "price": 23.96, "change_pct": 10.01, "reason": "1、公司整合资源快速切入人形机器人电子皮肤、电子肌肉及仿真皮肤（TPE、硅胶等材料）领域；\n2、公司针对太空光伏不同应用提出三种封装方案，已持续向头部客户出货多年", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 2.99, "first_limit_up": 1795742700, "break_limit_up_times": 0}, {"code": "603680", "name": "今创集团", "price": 10.42, "change_pct": 10.03, "reason": "国内轨交车辆配套产品领域龙头，新设常州今创航空航天产业投资有限公司，拟布局商业航天产业链，目前处于筹备初期", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 2.07, "first_limit_up": 1795747932, "break_limit_up_times": 1}, {"code": "603986", "name": "兆易创新", "price": 217.34, "change_pct": 10.0, "reason": "国内存储龙头，产品包括DDR3L/DDR4/LPDDR4X等，投资23亿持有长鑫1.80%股权", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.45, "first_limit_up": 1795760767, "break_limit_up_times": 0}, {"code": "002708", "name": "光洋股份", "price": 25.59, "change_pct": 10.02, "reason": "1、公司拟10亿建设新能源汽车及机器人用精密零部件项目；\n2、公司已获得小鹏飞行汽车X3项目定点，完成A样交样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 16.53, "first_limit_up": 1795744524, "break_limit_up_times": 3}, {"code": "000555", "name": "神州信息", "price": 8.8, "change_pct": 10.0, "reason": "金融科技全产业链综合服务商；公司作为数字人民币产业联盟理事单位，数字人民币解决方案在多个金融机构落地，助力基础设施建设，完成了汇丰银行、恒生银行、富邦华一银行等客户的数币系统及场景应用解决方案的交付", "plates": ["RWA"], "limit_up_days": 1, "turnover_ratio": 3.35, "first_limit_up": 1795755786, "break_limit_up_times": 35}, {"code": "688545", "name": "兴福电子", "price": 56.42, "change_pct": 19.99, "reason": "SK海力士、长存资本新进公司2026Q1前十大流通股东", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.83, "first_limit_up": 1795761526, "break_limit_up_times": 1}, {"code": "600825", "name": "新华传媒", "price": 12.36, "change_pct": 9.96, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 8.23, "first_limit_up": 1795742700, "break_limit_up_times": 2}, {"code": "300925", "name": "法本信息", "price": 13.31, "change_pct": 20.02, "reason": "1、华为是公司客户之一，公司持续深耕华为等大客户，提供软件技术服务，并密切关注华为星闪等前沿技术带来的市场机遇；\n2、公司已与主流大模型公司建立生态合作，形成基础大模型→垂直大模型→Agent行业应用全栈能力，FarAIGPTCoder代码生成大模型算法通过国家网信办深度合成服务算法备案并落地运营商、银行等行业", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 8.67, "first_limit_up": 1795745469, "break_limit_up_times": 1}, {"code": "002972", "name": "科安达", "price": 9.76, "change_pct": 10.03, "reason": "公司产品主要有轨道交通信号计轴系统、铁路站场综合防雷系统、信号监测防雷分线柜等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.17, "first_limit_up": 1795758078, "break_limit_up_times": 0}, {"code": "688605", "name": "先锋精科", "price": 63.78, "change_pct": 20.0, "reason": "公司主营半导体刻蚀和薄膜沉积设备细分领域关键零部件的精密制造", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.56, "first_limit_up": 1795759371, "break_limit_up_times": 4}, {"code": "603407", "name": "长裕集团", "price": 36.91, "change_pct": 10.01, "reason": "公司高纯氧化锆制品具有高绝缘性、高强度及导热特性，可用于HBM、SSD等存储芯片封装的陶瓷载板、散热底座等部件", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.88, "first_limit_up": 1795757269, "break_limit_up_times": 12}, {"code": "003031", "name": "中瓷电子", "price": 77.51, "change_pct": 10.01, "reason": "公司为电子陶瓷龙头，上半年高端光模块外壳和基板逐步实现放量，目前公司已可以设计开发1.6T光通信器件外壳和基板，与国外同类产品技术水平相当", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 1.49, "first_limit_up": 1795757715, "break_limit_up_times": 2}, {"code": "301392", "name": "汇成真空", "price": 121.58, "change_pct": 20.0, "reason": "公司的光刻掩膜版设备主要应用于集成电路、平板显示等领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 12.48, "first_limit_up": 1795756488, "break_limit_up_times": 0}, {"code": "603936", "name": "博敏电子", "price": 12.64, "change_pct": 10.01, "reason": "公司为国内PCB细分HDI板龙头，现已为多家客户批量提供400G、800G光模块产品", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.23, "first_limit_up": 1795755602, "break_limit_up_times": 0}, {"code": "603997", "name": "继峰股份", "price": 10.11, "change_pct": 10.01, "reason": "1、公司与灵心巧手合资成立宁波继巧智能机器人有限公司，落地机器人业务实体化布局；\n2、公司为国内乘用车座椅头枕细分市场龙头之一，近日成为某新能源汽车主机厂的座椅总成供应商", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.01, "first_limit_up": 1795759984, "break_limit_up_times": 1}, {"code": "002787", "name": "华源控股", "price": 15.84, "change_pct": 10.0, "reason": "公司2025年12月完成对暖芯科技51%股权收购，切入半导体温控设备及配套零配件赛道，并合资设立苏州致源真空科技布局分子泵，形成“核心温控设备+配套零配件”一体化体系，产品已导入华润微电子、拓荆科技、广州芯粤能等头部客户", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.25, "first_limit_up": 1795755981, "break_limit_up_times": 4}, {"code": "600280", "name": "中央商场", "price": 3.41, "change_pct": 10.0, "reason": "公司主营百货零售业以及部分房地产开发业务，控股子公司破产清算指定管理人", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 21.8, "first_limit_up": 1795743000, "break_limit_up_times": 4}, {"code": "002730", "name": "电光科技", "price": 14.21, "change_pct": 9.98, "reason": "公司目前算力达到千卡集群", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.04, "first_limit_up": 1795758306, "break_limit_up_times": 1}, {"code": "603901", "name": "永创智能", "price": 10.02, "change_pct": 9.99, "reason": "公司新设人形智能机器人研发部门，加快人形机器人整机、核心零部件、以及人形机器人在包装领域应用技术的研发工作，目前已完成多款人形机器人产品及核心部件的设计定型", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.18, "first_limit_up": 1795761343, "break_limit_up_times": 0}, {"code": "002331", "name": "皖通科技", "price": 6.44, "change_pct": 10.09, "reason": "全资子公司华东电子与华为联合开发“华东智能岸边理货系统-华为版”，据媒体报道，该项目基于昇思Mindspore AI框架、异构计算架构CANN", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.18, "first_limit_up": 1795755699, "break_limit_up_times": 0}, {"code": "002119", "name": "康强电子", "price": 18.12, "change_pct": 10.02, "reason": "公司主营引线框架、键合丝等半导体封装材料", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 11.57, "first_limit_up": 1795747371, "break_limit_up_times": 3}, {"code": "002851", "name": "麦格米特", "price": 66.14, "change_pct": 10.0, "reason": "公司业务涵盖 33kW Power Shelf、 110kW Power Shelf（适配 GB300、Vera Rubin 等高端算力场景）、800VDC-50VDC Power Shelf， 满足不同输入、 输出电压的机架级供电需求， 提供高功率密度的配电支撑。", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.86, "first_limit_up": 1795761045, "break_limit_up_times": 0}, {"code": "002364", "name": "中恒电气", "price": 21.43, "change_pct": 10.01, "reason": "宁德时代拟以41亿元认购控股股东中恒科技投资新增注册资本", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1795761222, "break_limit_up_times": 0}, {"code": "301259", "name": "艾布鲁", "price": 14.6, "change_pct": 19.97, "reason": "1、公司建成并运营上饶星罗人工智能算力中心，算力规模达200PFlop/s，面向市场提供算力租赁及按需调配服务；\n2、公司控股子公司杭州星罗中昊科技有限公司持有中昊芯英9.7346%的股份，后者是国内掌握TPU架构AI芯片核心研发技术并实现芯片量产的公司", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.65, "first_limit_up": 1795743150, "break_limit_up_times": 0}, {"code": "002290", "name": "禾盛新材", "price": 34.85, "change_pct": 10.01, "reason": "公司参股的熠知电子主营CPU及服务器产品", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.78, "first_limit_up": 1795756203, "break_limit_up_times": 1}, {"code": "688195", "name": "腾景科技", "price": 102.34, "change_pct": 20.0, "reason": "公司签订约8915万元光通信领域高端光器件销售订单", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.36, "first_limit_up": 1795746654, "break_limit_up_times": 2}, {"code": "688610", "name": "埃科光电", "price": 69.9, "change_pct": 20.0, "reason": "1、公司在半导体量检测领域业务稳步推进，相关产品在半导体晶圆、套刻、先进封装等检测工艺中均有导入；\n2、公司工业相机已在AI眼镜领域逐步导入，并与航空航天、卫星互联网、机器人客户探讨需求，未来针对性开发产品", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.65, "first_limit_up": 1795762166, "break_limit_up_times": 0}, {"code": "301396", "name": "宏景科技", "price": 115.45, "change_pct": 20.0, "reason": "公司定位为新型数字基础设施与智能算力综合服务商，战略重心全面转向智能算力，致力于成为国内领先算力运营商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 20.42, "first_limit_up": 1795759122, "break_limit_up_times": 1}, {"code": "600162", "name": "香江控股", "price": 3.36, "change_pct": 10.16, "reason": "广州市综合性房地产开发商；全资子公司香江云瀚与关联方诚雅泰签订算力技术服务合同，提供机房资源对接协调、现场运维保障等一体化配套技术服务，合同总金额15816万元，服务期限5年", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.36, "first_limit_up": 1795746732, "break_limit_up_times": 1}, {"code": "600520", "name": "三佳科技", "price": 22.07, "change_pct": 10.02, "reason": "公司主营半导体封装装备，产品覆盖全自动塑封系统、切筋成型设备及塑封模具，应用于集成电路、功率器件和分立器件封装，完成对众合半导体控制权收购，众合半导体为国内少数具备180T/200T全自动塑封机、Auto精密模具量产能力的本土厂商", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 7.12, "first_limit_up": 1795743250, "break_limit_up_times": 0}, {"code": "002816", "name": "*ST和科", "price": 12.67, "change_pct": 9.98, "reason": "公司25年业绩同比扭亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.42, "first_limit_up": 1795744725, "break_limit_up_times": 1}, {"code": "002222", "name": "福晶科技", "price": 47.45, "change_pct": 9.99, "reason": "公司具有磁光晶体到法拉第旋光片全制程能力，主要应用于光纤通信、光信息处理系统和精密光学测量系统中；第三季度净利润同比增59.9%", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 5.78, "first_limit_up": 1795755621, "break_limit_up_times": 1}, {"code": "002253", "name": "川大智胜", "price": 7.02, "change_pct": 10.03, "reason": "ST摘帽—公司为军航空管龙头，军航空管现用设备三分之二由公司提供", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.56, "first_limit_up": 1795757262, "break_limit_up_times": 1}, {"code": "000988", "name": "华工科技", "price": 64.52, "change_pct": 10.01, "reason": "据央视财经报道，今年以来，公司旗下核心子公司华工正源800G以上光模块出口同比增长超过100倍", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 5.85, "first_limit_up": 1795756194, "break_limit_up_times": 1}, {"code": "603078", "name": "江化微", "price": 28.85, "change_pct": 9.99, "reason": "公司是国内湿电子化学品行业的领先企业之一，生产的光刻胶配套试剂主要用于下游半导体和平板显示领域", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 17.52, "first_limit_up": 1795761288, "break_limit_up_times": 4}, {"code": "688432", "name": "有研硅", "price": 31.62, "change_pct": 20.0, "reason": "国内半导体材料龙头企业；公司通过公开摘牌方式收购安徽晶隆半导体60%股权，标的公司已完成8英寸硅外延片试生产并获客户验证，收购后可形成衬底到外延的一站式解决方案", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.75, "first_limit_up": 1795760253, "break_limit_up_times": 0}, {"code": "300820", "name": "英杰电气", "price": 48.4, "change_pct": 20.01, "reason": "电源龙头，公司射频电源匹配器实现纳秒级阻抗响应并部分量产，配套中微公司等头部半导体设备厂", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.3, "first_limit_up": 1795757109, "break_limit_up_times": 41}, {"code": "001373", "name": "翔腾新材", "price": 21.59, "change_pct": 9.98, "reason": "公司的主要产品偏光片、光学膜片和功能性胶粘材料可广泛应用于手机等各类光电显示产品中，且其产品最终应用于 LG、小米、三星、华为等知名手机品牌商", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.57, "first_limit_up": 1795758084, "break_limit_up_times": 0}, {"code": "002825", "name": "纳尔股份", "price": 9.02, "change_pct": 10.0, "reason": "公司收购菲莱测试不低于51%股权，进入半导体设备、设备零部件等领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.77, "first_limit_up": 1795757076, "break_limit_up_times": 25}, {"code": "603172", "name": "万丰股份", "price": 15.31, "change_pct": 9.99, "reason": "公司主要从事分散染料及其滤饼，产品以中高端分散染料为主，主要用于涤纶及其混纺织物的染色和印花", "plates": ["染料"], "limit_up_days": 1, "turnover_ratio": 1.36, "first_limit_up": 1795758411, "break_limit_up_times": 0}, {"code": "000977", "name": "浪潮信息", "price": 46.81, "change_pct": 10.01, "reason": "浪潮AI服务器市场份额全球第一；公司从部件、整机到数据中心，持续进行液冷产品创新，包含全液冷冷板服务器、全液冷机柜、兆瓦级冷量分配单元、液冷智算算力仓、兆瓦级两相液冷整机柜等，连续4年蝉联中国液冷服务器市场第一", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 4.97, "first_limit_up": 1795762092, "break_limit_up_times": 1}, {"code": "603375", "name": "盛景微", "price": 39.19, "change_pct": 9.99, "reason": "公司是一家具备高性能、超低功耗芯片设计能力的企业，依托自研数模混合芯片开发电子控制模块，其子公司上海先积集成电路在精密放大器等芯片领域有技术突破，产品应用于汽车、扫地机器人等领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.92, "first_limit_up": 1795757299, "break_limit_up_times": 8}, {"code": "002870", "name": "香山股份", "price": 31.97, "change_pct": 10.01, "reason": "公司旗下均胜群英参与了贾维斯JARVIS的人形机器人智能表面、执行器方面的研发、生产工作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.92, "first_limit_up": 1795758747, "break_limit_up_times": 16}, {"code": "002305", "name": "*ST南置", "price": 1.82, "change_pct": 10.3, "reason": "公司战略转型综合性城市运营服务商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.4, "first_limit_up": 1795745118, "break_limit_up_times": 2}, {"code": "603922", "name": "ST金鸿顺", "price": 8.88, "change_pct": 10.04, "reason": "公司主营汽车车身和底盘冲压零部件及其相关模具，拟购买新思考电机95.79%股权，标的是微特电机行业下属微型驱动马达领域头部企业，为国内主流智能手机品牌的摄像头马达核心供应商，并积极拓宽汽车电子行业应用，探索智能驾驶、人形机器人等新兴行业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.99, "first_limit_up": 1795761967, "break_limit_up_times": 0}, {"code": "002384", "name": "东山精密", "price": 79.77, "change_pct": 10.0, "reason": "1、全球第三的印刷电路板企业、全球第二的柔性线路板企业；\n2、收购的索尔思具备光芯片IDM全流程自研及量产能力，是国内少数、全球为数不多实现高端EML光芯片规模化量产的企业，光模块方面，索尔思实现全产业链布局，产品覆盖10G至1.6T全速率，并持续推进3.2T及以上下一代光模块研发", "plates": ["PCB板", "光通信"], "limit_up_days": 1, "turnover_ratio": 11.53, "first_limit_up": 1795755747, "break_limit_up_times": 1}, {"code": "603037", "name": "凯众股份", "price": 10.38, "change_pct": 9.96, "reason": "公司已组建研发团队，探索聚氨酯材料技术在机器人领域的应用机会", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.78, "first_limit_up": 1795758225, "break_limit_up_times": 6}, {"code": "300377", "name": "赢时胜", "price": 13.49, "change_pct": 20.02, "reason": "软件产品与技术服务厂商；与数字货币有关研发投入和合作实践是公司发展战略之一，公司将充分利用多年来在金融机构尤其是各类银行提供产品及技术服务支持的丰富资源和经验，积极及时跟踪相关政策和细则", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 11.41, "first_limit_up": 1795756092, "break_limit_up_times": 7}, {"code": "002971", "name": "和远气体", "price": 31.24, "change_pct": 10.0, "reason": "公司给长江存储、烽火科技、华星光电等光通信、半导体企业直接或间接供应氢气、氧气、氮气和氩气", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.11, "first_limit_up": 1795761714, "break_limit_up_times": 11}, {"code": "600839", "name": "四川长虹", "price": 6.63, "change_pct": 9.95, "reason": "1、公司具有电视研产供销服等方面的深厚积淀和完备的价值链体系，拥有绵阳、中山、广元、印度尼西亚、捷克5个生产制造基地，向全球用户提供优质的智能电视产品和解决方案；\n2、公司旗下零八一电子集团承担低轨卫星通信载荷配套，涉及微波、射频器件", "plates": ["家电"], "limit_up_days": 1, "turnover_ratio": 9.51, "first_limit_up": 1795756884, "break_limit_up_times": 5}, {"code": "003036", "name": "泰坦股份", "price": 27.19, "change_pct": 9.99, "reason": "1、公司电子布织机目前处于研发阶段；\n2、公司纺织机器人已完成纱筒抓取与生头关节研发", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 1.85, "first_limit_up": 1795757670, "break_limit_up_times": 3}, {"code": "002077", "name": "大港股份", "price": 14.07, "change_pct": 10.01, "reason": "全资子公司上海旻艾定位于中高端IC测试，主打12英寸、8英寸的CP服务以及QFP、BGA、DIP、SOP、QFN等封装芯片测试，产品类型包括存储芯片等多个类型", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 20.69, "first_limit_up": 1795747416, "break_limit_up_times": 5}, {"code": "000066", "name": "中国长城", "price": 11.66, "change_pct": 10.0, "reason": "1、公司与华为共建“鹏腾”生态，在产业标准、伙伴计划、技术协同、开源贡献、市场营销、人才培养等方面深度合作；\n2、公司飞腾芯片产品主要包括高性能服务器CPU、高效能桌面CPU等四大系列，为从端到云的各型设备提供核心算力支撑", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 4.65, "first_limit_up": 1795761867, "break_limit_up_times": 0}, {"code": "688120", "name": "华海清科", "price": 217.85, "change_pct": 20.0, "reason": "公司是一家拥有核心自主知识产权的高端半导体设备制造商，主要从事半导体专用设备的研产销及技术服务，主要产品为化学机械抛光（CMP）设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.68, "first_limit_up": 1795757810, "break_limit_up_times": 5}, {"code": "002651", "name": "利君股份", "price": 9.56, "change_pct": 10.01, "reason": "1、全资子公司成都德坤航空设备制造有限公司主营航空航天零部件制造业务，德坤航空参与的长征系列火箭产品及朱雀系列火箭产品应用于商业航天领域；\n2、子公司利君环际从事智能装备制造、工业机器人制造，已储备相关核心技术，部分产品正推动工业落地应用", "plates": ["军工"], "limit_up_days": 4, "turnover_ratio": 13.58, "first_limit_up": 1795743003, "break_limit_up_times": 3}, {"code": "002988", "name": "豪美新材", "price": 28.64, "change_pct": 9.98, "reason": "华南地区最具规模的汽车轻量化铝基新材料企业，前瞻布局人形机器人、低空飞行器、液冷散热器等新兴赛道", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.0, "first_limit_up": 1795758558, "break_limit_up_times": 0}, {"code": "001388", "name": "信通电子", "price": 18.89, "change_pct": 10.02, "reason": "1、防冰治冰机器人以及智能巡检四足机器人是公司结合电力智能运维数字化和智能化转型需求，推出的新一代机器人产品，是公司空天地立体化协同巡检系统方案的重要组成部分；\n2、公司拟1.6亿元投资阜时科技，标的公司为国家级专精特新“小巨人”，专注物理AI空间感知SPAD-SoC芯片研发；\n3、公司通过自建与租赁并行模式构建算力体系，能够满足大规模模型训练需求，租赁算力可弹性扩展；\n4、公司专注于电力智能化改造相关业务的拓展，公司输电线路智能巡检系统、变电站智能辅控系统等产品凭借高性能和高可靠性，已广泛应用于国家电网", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.56, "first_limit_up": 1795749273, "break_limit_up_times": 0}, {"code": "603090", "name": "宏盛股份", "price": 25.08, "change_pct": 10.0, "reason": "公司开发的冷却分配单元CDU及列间空调已批量应用于数据中心液冷系统", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.71, "first_limit_up": 1795747961, "break_limit_up_times": 0}, {"code": "603773", "name": "沃格光电", "price": 49.83, "change_pct": 10.0, "reason": "公司光模块/CPO玻璃基封装载板已批量送样，与北极雄芯战略合作开发AI芯片玻璃基先进封装", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 5.82, "first_limit_up": 1795757319, "break_limit_up_times": 5}, {"code": "300085", "name": "银之杰", "price": 29.34, "change_pct": 20.0, "reason": "公司选举卓海杭为公司董事长，后者旗下拥有开盘啦行情软件", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 13.35, "first_limit_up": 1795755753, "break_limit_up_times": 6}, {"code": "000948", "name": "南天信息", "price": 12.94, "change_pct": 10.03, "reason": "1、国内领先的金融科技数字化综合解决方案和服务提供商之一；公司以“金融科技”和“数字化服务”为业务主线，持续围绕云计算、大数据、人工智能等新技术开展技术孵化和应用孵化，发力自主可控技术体系/生态、云计算数据中心建设、分布式云平台/云核心建设、电子渠道应用平台、区块链技术与应用等领域；\n2、公司有相关跨境支付的业务筹划，也开发了部分银行客户与cips的接口", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.91, "first_limit_up": 1795756041, "break_limit_up_times": 3}, {"code": "603296", "name": "华勤技术", "price": 67.65, "change_pct": 10.0, "reason": "公司与华为保持多年战略合作并为其全球战略供应商，为手机、平板、笔电、智能穿戴、AIoT等多品类提供研发设计与制造服务", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 2.1, "first_limit_up": 1795761828, "break_limit_up_times": 4}, {"code": "603459", "name": "红板科技", "price": 55.14, "change_pct": 9.99, "reason": "公司面向光模块领域开展了800G三阶盲孔光模块PCB产品、高传输速率光模块电路板等多项研发项目，有生产1.6T光模块电路板的技术能力，相关业务正根据客户需求有序推进", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 12.3, "first_limit_up": 1795758574, "break_limit_up_times": 0}, {"code": "000032", "name": "深桑达Ａ", "price": 10.64, "change_pct": 10.03, "reason": "1、公司旗下中国电子云拥有自研 CECSTACK 云平台，输出私有云、混合云、智算算力服务，面向党政、央国企提供信创云解决方案；\n2、公司作为中国电子信息产业建设主力军，深度参与半导体产业全链布局，旗下子公司承建华虹无锡FAB9B项目洁净室及一般机电系统工程等项目；\n3、数字基础设施和数据资源体系的建设者和运营商；公司与百川智能、智谱 AI、中科闻歌等国内头部大模型公司建立生态合作关系，从技术、算力、商业化、产业落地等层面深入合作，推动中国电子云可信智算战略落地实现;", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.12, "first_limit_up": 1795761309, "break_limit_up_times": 10}, {"code": "301611", "name": "珂玛科技", "price": 64.74, "change_pct": 20.0, "reason": "公司12英寸静电卡盘已验证并小规模量产，产品用于存储芯片等晶圆制造前道设备，实现国产替代", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.83, "first_limit_up": 1795761690, "break_limit_up_times": 3}, {"code": "000657", "name": "中钨高新", "price": 36.38, "change_pct": 10.01, "reason": "公司旗下子公司金洲公司是PCB微钻领域龙头，具备极小径钻头精磨等核心技术", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 4.64, "first_limit_up": 1795761252, "break_limit_up_times": 0}, {"code": "688372", "name": "伟测科技", "price": 101.48, "change_pct": 20.0, "reason": "公司是国内知名的第三方集成电路测试服务企业", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.47, "first_limit_up": 1795757263, "break_limit_up_times": 12}, {"code": "688702", "name": "盛科通信", "price": 196.32, "change_pct": 20.0, "reason": "国内领先的以太网交换芯片设计企业；公司面向数据中心的高端800G交换容量芯片产品已在2024年实现小批量交付，预计未来量产将进一步拓展数据中心和云服务市场", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.32, "first_limit_up": 1795757216, "break_limit_up_times": 12}, {"code": "688141", "name": "杰华特", "price": 66.52, "change_pct": 20.01, "reason": "公司专注于模拟集成电路的设计研发，具备包括芯片和系统设计技术、晶圆制造工艺在内的完整核心技术架构\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.25, "first_limit_up": 1795755977, "break_limit_up_times": 7}, {"code": "300939", "name": "秋田微", "price": 58.75, "change_pct": 20.0, "reason": "公司在研项目“5G通讯用波长选择器（WSS）硅基液晶器件”有序推进中，WSS是5G通信网络核心光模块，其核心部件为硅基液晶器件", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.79, "first_limit_up": 1795745256, "break_limit_up_times": 0}, {"code": "002453", "name": "华软科技", "price": 4.91, "change_pct": 10.09, "reason": "公司不生产光刻胶产品，仅有少量光引发剂产品", "plates": ["光刻机（胶）"], "limit_up_days": 2, "turnover_ratio": 16.81, "first_limit_up": 1795762005, "break_limit_up_times": 1}, {"code": "002527", "name": "新时达", "price": 9.69, "change_pct": 9.99, "reason": "1、国内为数不多通过控制器切入机器人本体的厂家，控制器与伺服系统中的伺服驱动器100%自供；海尔集团将成为公司实际控制人；\n2、目前公司有液冷产品，已批量应用于数据中心", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1795758039, "break_limit_up_times": 4}, {"code": "300666", "name": "江丰电子", "price": 209.03, "change_pct": 20.0, "reason": "公司拟收购凯德石英控制权，标的专注于石英仪器、石英管道、石英舟等石英玻璃制品的研发、生产和销售", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.76, "first_limit_up": 1795757241, "break_limit_up_times": 0}, {"code": "688636", "name": "智明达", "price": 18.06, "change_pct": 20.0, "reason": "1、公司目前承担的星载项目属于低轨通讯卫星，主要是做任务系统，未来将会随着下游的定型放量而逐步量产，成为公司新的增长点；\n2、公司为核心军用嵌入式计算机模块产品供应商，飞控计算机、任务计算机、视觉导航计算机等产品都可以运用于低空经济", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 10.36, "first_limit_up": 1795758307, "break_limit_up_times": 3}, {"code": "301660", "name": "粤芯半导", "price": 32.26, "change_pct": 20.01, "reason": "公司是广东省自主培育且首家进入量产的12英寸晶圆制造企业，面向境内外芯片设计公司提供特色工艺晶圆代工服务，承担多项国家级、省市级半导体科研项目，助力集成电路产业链实现自主可控和国产替代\n", "plates": ["国产芯片", "次新股"], "limit_up_days": 1, "turnover_ratio": 38.89, "first_limit_up": 1795762338, "break_limit_up_times": 0}, {"code": "603080", "name": "新疆火炬", "price": 16.94, "change_pct": 10.0, "reason": "喀什天然气优质供应商，拥有喀什市、疏勒县和疏附县的燃气特许经营权，拥有18座加气站", "plates": ["天然气"], "limit_up_days": 1, "turnover_ratio": 3.39, "first_limit_up": 1795748118, "break_limit_up_times": 1}, {"code": "000573", "name": "粤宏远Ａ", "price": 3.77, "change_pct": 9.91, "reason": "1、公司拟不超5.5亿元收购金旺达100%股权，标的公司专注于精密传动功能部件领域生产制造，核心产品包括精密直线导轨、精密滚珠丝杠等，广泛应用于新能源、3C电子、LCD/LED面板、汽车制造装备、医疗等高端自动化领域；\n2、东莞市场多年经营的房地产企业，广东省合法产能最大的再生铅企业", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 5.05, "first_limit_up": 1795749309, "break_limit_up_times": 7}, {"code": "003033", "name": "征和工业", "price": 69.94, "change_pct": 10.0, "reason": "1、公司研发的微型链系统项目，重点攻关机器人灵巧手传动技术；\n2、公司是张雪机车链传动系统的核心供应商，双方更在赛事级链系统产品上展开联合研发", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.49, "first_limit_up": 1795756197, "break_limit_up_times": 5}, {"code": "000859", "name": "国风新材", "price": 7.74, "change_pct": 9.94, "reason": "1、公司半导体封装用光敏聚酰亚胺（PSPI）光刻胶研发取得阶段性成果，目前已处于实验室送样检测阶段；\n2、公司年产10亿平米光学级聚酯基膜项目的G1线为MLCC用光学级聚酯基膜生产线，目前已完成设备安装，正按计划进行设备调试及工艺参数的精细化调校，后续将开展带料试车及全流程稳态运行验证，项目整体进展符合预期", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 7.19, "first_limit_up": 1795743555, "break_limit_up_times": 4}, {"code": "688585", "name": "上纬新材", "price": 190.32, "change_pct": 20.0, "reason": "公司消费级具身智能机器人“启元Q1”和“启元T1”下线10000台", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.5, "first_limit_up": 1795760421, "break_limit_up_times": 0}, {"code": "688037", "name": "芯源微", "price": 275.4, "change_pct": 20.0, "reason": "公司是国内唯一可提供量产型前道涂胶显影机的厂商，其光刻工序涂胶显影设备和单片式湿法设备等产品是半导体芯片制造过程中的关键设备，已成功打破国外厂商垄断，广泛应用于集成电路制造前道晶圆加工及后道先进封装等环节", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.59, "first_limit_up": 1795758790, "break_limit_up_times": 1}, {"code": "002938", "name": "鹏鼎控股", "price": 50.38, "change_pct": 10.0, "reason": "1、公司是全球第一大PCB公司，苹果的核心供应商，拟投资80亿元建设淮安产业园，深化AI全产业链布局；\n2、公司PCB产品可应用于以AI手机为代表的AI终端消费电子产品领域", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 1.83, "first_limit_up": 1795761690, "break_limit_up_times": 0}, {"code": "601519", "name": "大智慧", "price": 7.56, "change_pct": 10.04, "reason": "公司是互联网金融信息服务综合提供商，，正在推进湘财股份换股吸收合并事项", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 3.65, "first_limit_up": 1795755901, "break_limit_up_times": 28}, {"code": "002843", "name": "泰嘉股份", "price": 15.57, "change_pct": 10.04, "reason": "1、公司大功率电源业务含数据中心电源，为客户代工服务器电源模块产品；子公司罗定雅达与华为开展合作，积极对接华为各类电源产品生产，为华为服务器及数据中心提供电源模块等配套；\n2、公司是掌握双金属带锯条生产工艺并实现规模化生产的业内领先企业，系中国航天中国运载火箭技术研究院认可的硬质合金带锯条合格供应商", "plates": ["华为昇腾"], "limit_up_days": 2, "turnover_ratio": 14.77, "first_limit_up": 1795749474, "break_limit_up_times": 0}, {"code": "603124", "name": "江南新材", "price": 68.02, "change_pct": 9.99, "reason": "公司铜基新材料产品广泛应用于PCB制造及服务器液冷散热领域，高精密铜基散热片已应用于服务器液冷散热", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 4.63, "first_limit_up": 1795757355, "break_limit_up_times": 0}, {"code": "002943", "name": "宇晶股份", "price": 22.78, "change_pct": 10.0, "reason": "1、公司于2026年1月设立控股子公司，与知名高校团队合作研发机器人灵巧手、视触觉传感器等产品；\n2、公司6-8英寸碳化硅切磨抛设备已批量销售，系碳化硅衬底加工核心供应商，并推进12英寸硅片切割设备研发", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.78, "first_limit_up": 1795756203, "break_limit_up_times": 4}, {"code": "603337", "name": "杰克科技", "price": 37.73, "change_pct": 10.0, "reason": "公司为工业缝制机龙头，计划于近期正式发布上市人形机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.53, "first_limit_up": 1795760906, "break_limit_up_times": 0}, {"code": "003040", "name": "楚天龙", "price": 12.18, "change_pct": 10.03, "reason": "1、公司与华为云签署框架合作协议，聚焦云计算、人工智能、数字人民币生态建设等方向，双方还将探索数字金融与鸿蒙生态深化合作，聚焦鸿蒙生态物联网端侧应用，打造智能合约平台为核心的场景解决方案；\n2、《上海市浦东新区促进离岸金融业务发展若干规定（草案）》公开征求意见，提出支持建设数字人民币跨境、离岸及区块链基础设施；公司数字人民币业务已覆盖公共交通、政务服务、零售消费等核心场景，构建“软硬件结合+全生命周期服务”一体化解决方案，并与工行、农行等8家运营机构及华为等伙伴深度合作", "plates": ["华为昇腾"], "limit_up_days": 2, "turnover_ratio": 8.22, "first_limit_up": 1795743816, "break_limit_up_times": 0}, {"code": "002872", "name": "天圣制药", "price": 8.59, "change_pct": 9.99, "reason": "公司撤销撤销其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 4, "turnover_ratio": 46.04, "first_limit_up": 1795743015, "break_limit_up_times": 10}, {"code": "003026", "name": "中晶科技", "price": 24.18, "change_pct": 10.01, "reason": "半导体硅材料制造商，主要产品为半导体硅片及半导体硅棒，8英寸抛光片项目正按照整体规划在加速推进中", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.3, "first_limit_up": 1795755969, "break_limit_up_times": 0}, {"code": "688361", "name": "中科飞测", "price": 260.84, "change_pct": 20.0, "reason": "公司目前的产品可以满足HBM技术领域对于量检测设备的需求，其中图形晶圆缺陷检测设备、三维形貌量测设备等多个系列产品已成功通过国内多家HBM客户产线验证，实现了批量出货\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.78, "first_limit_up": 1795755790, "break_limit_up_times": 6}, {"code": "600619", "name": "海立股份", "price": 14.47, "change_pct": 10.04, "reason": "公司为上海微电子装备集团的封装光刻机提供冷却系统配套", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 6.66, "first_limit_up": 1795745817, "break_limit_up_times": 0}, {"code": "002122", "name": "汇洲智能", "price": 4.18, "change_pct": 10.0, "reason": "公司股票11月23日起撤销其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 17.67, "first_limit_up": 1795744830, "break_limit_up_times": 0}, {"code": "002281", "name": "光迅科技", "price": 87.05, "change_pct": 9.99, "reason": "1、光模块龙头之一，字节跳动是公司重要客户；此前联合思科推出1.6T硅光模块，发布OCS全光交换机；\n2、公司是浸没液冷智算产业发展联盟会员单位，是相关标准、工艺研究和实践的重要参与者之一，目前已有相关产品发布，可以提供全套的液冷光模块产品", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 4.72, "first_limit_up": 1795755867, "break_limit_up_times": 3}, {"code": "300672", "name": "国科微", "price": 117.88, "change_pct": 20.0, "reason": "国内SSD主控芯片龙头，研制出完全自主可控的国内首款高性能固态存储控制器芯片，一季度净利润同比增长6.7%", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.66, "first_limit_up": 1795759188, "break_limit_up_times": 1}, {"code": "002272", "name": "川润股份", "price": 10.76, "change_pct": 10.02, "reason": "1、公司为数据中心、云计算、IDC、通信网络、人工智能领域提供液冷、温控技术及产品；\n2、公司在储能、电力电网等领域可提供液冷产品与温控节能方案，公司SVG/SVC 液冷产品已应用于智能电网领域", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.14, "first_limit_up": 1795746624, "break_limit_up_times": 0}, {"code": "002353", "name": "杰瑞股份", "price": 71.38, "change_pct": 10.0, "reason": "公司签署近百亿元燃气轮机发电机组供应合同", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 2.92, "first_limit_up": 1795758294, "break_limit_up_times": 2}, {"code": "688593", "name": "新相微", "price": 20.94, "change_pct": 20.0, "reason": "公司主营业务聚焦于显示芯片", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.44, "first_limit_up": 1795762326, "break_limit_up_times": 0}, {"code": "601208", "name": "东材科技", "price": 28.33, "change_pct": 10.02, "reason": "公司双马来酰亚胺树脂、活性酯树脂、碳氢树脂、聚苯醚树脂等已通过国内外一线覆铜板厂商，配套应用于英伟达、华为、苹果、英特尔等主流服务器体系", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.0, "first_limit_up": 1795757612, "break_limit_up_times": 0}, {"code": "002815", "name": "崇达技术", "price": 16.79, "change_pct": 10.03, "reason": "公司是全球领先的小批量PCB企业，供给工业控制领域客户的PCB产品有应用于智能家居、人形机器人、工业机器人等方面", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 28.08, "first_limit_up": 1795757484, "break_limit_up_times": 3}, {"code": "002536", "name": "飞龙股份", "price": 24.42, "change_pct": 10.0, "reason": "1、公司针对机器人关节等部位日益增长的液冷散热需求，依托公司在电子泵、温控阀及集成模块等新能源热管理产品上的技术优势，积极布局机器人领域液冷市场；\n2、公司的数据中心液冷产品在芜湖飞龙、郑州飞龙已建有专门生产线；公司多个液冷项目正在进行中，公司电子水泵系列产品和温控阀系列产品已应用在服务器液冷领域，该领域部分项目已经量产", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 6.58, "first_limit_up": 1795749084, "break_limit_up_times": 1}, {"code": "600186", "name": "莲花控股", "price": 9.61, "change_pct": 9.95, "reason": "国内在产味精生产商历史最悠久的企业，公司将以莲花科创为项目实施主体，积极引入行业实力战略合作伙伴，开展智能计算中心项目合作，在国内主要的算力节点，建设智算中心，高效推动算力租赁业务落地", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 14.2, "first_limit_up": 1795749790, "break_limit_up_times": 0}, {"code": "301717", "name": "超纯应材", "price": 259.42, "change_pct": 20.0, "reason": "公司拥有数十款半导体设备特殊涂层零部件产品，覆盖了晶圆制造、封装以及硅片制造领域的设备，在刻蚀、光刻、量检测、退火、薄膜沉积设备领域取得较为突出的技术优势，并且在扩散、离子注入、键合和先进封装等设备领域开展量产或客户验证，并为硅外延片制造设备提供关键零部件产品", "plates": ["次新股", "国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.2, "first_limit_up": 1795756926, "break_limit_up_times": 0}, {"code": "603757", "name": "大元泵业", "price": 33.5, "change_pct": 10.02, "reason": "公司表示已完成在储能及数据机房液冷领域的产品储备，已开始小批量接受客户订单，公司与华为、中兴在IDC温控领域推进屏蔽齿轮泵项目", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 4.13, "first_limit_up": 1795758510, "break_limit_up_times": 1}, {"code": "301107", "name": "瑜欣电子", "price": 22.2, "change_pct": 20.0, "reason": "公司与哈尔滨工业大学重庆研究院合作推进机器人零部件项目", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.15, "first_limit_up": 1795746984, "break_limit_up_times": 0}, {"code": "600114", "name": "东睦股份", "price": 17.27, "change_pct": 10.0, "reason": "公司已布局轴向磁通电机，该类电机适用于人形机器人、四足机器狗等领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.33, "first_limit_up": 1795759564, "break_limit_up_times": 2}, {"code": "000029", "name": "深深房Ａ", "price": 16.24, "change_pct": 10.03, "reason": "实控人深圳市国资委；深圳市最早的房地产上市公司之一，此前终止与恒大重组", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 1.22, "first_limit_up": 1795757295, "break_limit_up_times": 34}, {"code": "002081", "name": "金 螳 螂", "price": 4.82, "change_pct": 10.05, "reason": "1、洁净室是公司重点布局的战略新赛道，已具备在电子半导体、新能源、大健康、实验室等高附加值领域构建系统集成能力，代表项目包括南京集成电路产业服务中心、杰华特微电子高性能电源芯片项目等；\n2、综合性专业化装饰集团；公司曾中标海南商业航天发射场项目，目前该工程已完工并投入使用，已为多次卫星发射任务提供稳定保障", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 18.17, "first_limit_up": 1795755786, "break_limit_up_times": 3}, {"code": "600651", "name": "飞乐音响", "price": 4.36, "change_pct": 10.1, "reason": "公司的主要产品是汽车电子电器、汽车照明、模块封装及芯片测试服务、智能制造系统集成、检验检测、精密零件", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.48, "first_limit_up": 1795762208, "break_limit_up_times": 0}, {"code": "605289", "name": "罗曼股份", "price": 50.71, "change_pct": 10.0, "reason": "公司拟收购武桐高新39.23%的股权，标的主要从事AIDC算力服务器与集群综合解决方案服务业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.75, "first_limit_up": 1795758375, "break_limit_up_times": 1}, {"code": "002757", "name": "南兴股份", "price": 14.72, "change_pct": 10.01, "reason": "公司开发了小鹭AIGC智能助手；全资子公司唯一网络是国内领先的数字经济基础设施服务提供商，主要经营范围包括IDC、云计算（含公有云、混合云、私有云及云增值等服务）、云联网、数字化解决方案等服务", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 6.59, "first_limit_up": 1795748532, "break_limit_up_times": 1}, {"code": "603650", "name": "彤程新材", "price": 48.51, "change_pct": 10.0, "reason": "公司目前光刻胶产能可满足未来2—3年订单增长需求", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.63, "first_limit_up": 1795755966, "break_limit_up_times": 13}, {"code": "600602", "name": "云赛智联", "price": 14.27, "change_pct": 10.02, "reason": "上海百千万智算集群工程正式启动；公司以云服务大数据、行业解决方案、智能化产品为核心业务，此前与阶跃星辰共同投资设立上海智能算力公司，其中阶跃星辰持股10%，云赛智联直接持股11%", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1795762273, "break_limit_up_times": 0}, {"code": "001326", "name": "联域股份", "price": 56.55, "change_pct": 10.0, "reason": "公司已完成对洛阳奥维特18%股权投资，切入机器人核心零部件赛道，奥维特薄壁交叉滚子轴承用于谐波减速器、行星减速器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.46, "first_limit_up": 1795757184, "break_limit_up_times": 1}, {"code": "002048", "name": "宁波华翔", "price": 17.64, "change_pct": 9.98, "reason": "公司是智元机器人重要合作伙伴，自2025年7月起负责全尺寸双足人形机器人关节模组总成生产与整机装配", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.37, "first_limit_up": 1795761270, "break_limit_up_times": 4}, {"code": "002046", "name": "国机精工", "price": 30.13, "change_pct": 10.0, "reason": "1、公司已将机器人轴承纳入“十五五”业务板块规划，未来重点聚焦交叉滚子轴承等高附加值产品；\n2、培育钻石产业链核心玩家，以“设备+产品”双轮驱动布局；子公司三磨所是超硬材料行业引领者，其六面顶压机市占率超 60%，为黄河旋风、力量钻石等头部企业供货；\n3、中国航空航天轴承领域领先企业，曾为嫦娥一号、嫦娥二号、长征二号捆绑式大推力火箭、长征四号甲等项目提供配套轴承及相关研发服务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.62, "first_limit_up": 1795757355, "break_limit_up_times": 8}, {"code": "603636", "name": "南威软件", "price": 7.19, "change_pct": 9.94, "reason": "1、短剧业务方面，公司首部海外AI短剧于26年8月发行，2026年下半年预计出品25部高质量AI短剧，并按年产超100部的产能规划持续推进；\n2、公司首创数据要素操作系统，打造停车数据要素运营平台，推动相关数据产品进场交易，还构建了数据资源化、资产化、商品化的闭环体系，全面参与数据要素的生产、流通与应用等环节；\n3、公司以人工智能重构数字政府、公共安全等传统业务，推出政务专属大模型与面向C端的茶寿健康大模型；\n4、公司智算中心已落地3285万元算力租赁框架订单，并面向政企及海外文娱业务拓展算力服务", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 8.19, "first_limit_up": 1795749318, "break_limit_up_times": 0}, {"code": "002436", "name": "兴森科技", "price": 26.41, "change_pct": 10.0, "reason": "国内本土IC封装基板行业的先行者之一；公司生产的FCBGA封装基板可用于HBM存储的封装", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.64, "first_limit_up": 1795747902, "break_limit_up_times": 1}, {"code": "603722", "name": "阿科力", "price": 23.75, "change_pct": 10.0, "reason": "股东朱学军、崔小丽等与青岛华芯智基签署《股份转让协议之补充协议》，标的股份确定为1679.85万股占总股本17.19%，转让价格28.08元/股、总价款4.72亿元，完成后华芯智基成为第二大股东；后续定增完成其持股预计不超过26.39%，肖迪、郑东将成为实控人", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 3.98, "first_limit_up": 1795746419, "break_limit_up_times": 0}, {"code": "002491", "name": "通鼎互联", "price": 12.66, "change_pct": 9.99, "reason": "通信线缆全产业链企业；公司聚焦光通信产业的发展，建成了涵盖光纤预制棒、光纤、光缆、通信电缆、通信设备等多个业务类别较为完整的产业链，可为客户提供一揽子的产品和解决方案", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.82, "first_limit_up": 1795762524, "break_limit_up_times": 0}, {"code": "605208", "name": "永茂泰", "price": 9.44, "change_pct": 10.02, "reason": "国内先进铝合金及汽车零部件一体化发展企业；公司重点突出在机器人领域，已获得国内某知名机器人企业关于躯干、关节、上下肢、头部等多款产品订单，并顺利完成交样；公司还与多家机器人主机及零部件供应商共同研发机器人铝、镁合金结构件、关键零部件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.84, "first_limit_up": 1795759966, "break_limit_up_times": 2}, {"code": "688409", "name": "富创精密", "price": 114.4, "change_pct": 20.0, "reason": "公司结构零部件（基板、冷却板等）多种产品应用于光刻机、涂胶显影设备，主要客户有上海微电子、芯源微", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.39, "first_limit_up": 1795756011, "break_limit_up_times": 11}, {"code": "603626", "name": "科森科技", "price": 25.88, "change_pct": 9.99, "reason": "1、公司已承接机器人核心结构件及模组订单，系头部终端品牌一级供应商，部分产品已进入小批量试产；\n2、公司与清陶能源共同投资设立了合资公司——科森清陶能源科技有限公司，专注于固态电池的集成、组装和系统集成等业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.13, "first_limit_up": 1795756357, "break_limit_up_times": 10}, {"code": "605358", "name": "立昂微", "price": 27.07, "change_pct": 10.0, "reason": "从硅片到芯片的一站式制造平台；公司主营业务主要分三大板块，分别是半导体硅片、半导体功率器件芯片、化合物半导体射频芯片；主要产品包括6-12英寸半导体硅抛光片和硅外延片等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.47, "first_limit_up": 1795755975, "break_limit_up_times": 11}, {"code": "600330", "name": "天通股份", "price": 14.48, "change_pct": 10.03, "reason": "公司生产的铌酸锂晶体材料是铌酸锂电光调制芯片及器件的上游关键原材料；公司已自主量产6英寸铌酸锂/钽酸锂晶体及黑化抛光晶片", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 5.98, "first_limit_up": 1795757290, "break_limit_up_times": 1}, {"code": "002819", "name": "东方中科", "price": 17.38, "change_pct": 10.0, "reason": "1、作为国内领先的测试技术科技服务商，华为海思是公司的客户之一，公司为其提供综合测试解决方案；公司旗下子公司中科鸿略为开放原子开源基金会 OpenHarmony 工作组主要成员，与华为终端签署战略合作共建鸿蒙生态，推出基于鸿蒙的移动办公、工业物联网解决方案；\n2、控股子公司北汇信息2024年已中标中国一汽“脑机接口测试技术采购”项目，可提供自动驾驶互动测试验证等仿真系统", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 2.65, "first_limit_up": 1795757307, "break_limit_up_times": 10}, {"code": "000021", "name": "深科技", "price": 25.43, "change_pct": 9.99, "reason": "公司主要从事存储芯片封测，为国内在高端存储芯片（DRAM、NANDFLASH）封装和测试领域龙头之一，长鑫为主要客户之一", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.71, "first_limit_up": 1795759572, "break_limit_up_times": 0}, {"code": "002768", "name": "国恩股份", "price": 50.36, "change_pct": 10.0, "reason": "公司已完成PEEK聚合技术及核心工艺开发，拟投资建设年产1,000吨PEEK材料项目，构建“核心树脂-关键中间品-终端构件”产业一体化格局", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.57, "first_limit_up": 1795757928, "break_limit_up_times": 0}, {"code": "000603", "name": "盛达资源", "price": 26.25, "change_pct": 10.02, "reason": "公司预计中报净利润同比增长399.31%-470.64%，因“采矿及选矿能力有所提升，产能逐渐释放，2026年上半年度产品产销量增加；另外，叠加贵金属价格上涨，公司矿山主要产品销售价格较上年同期上涨，推动公司经营业绩同比显著增长”", "plates": ["黄金"], "limit_up_days": 2, "turnover_ratio": 9.53, "first_limit_up": 1795760856, "break_limit_up_times": 0}, {"code": "300324", "name": "旋极信息", "price": 6.05, "change_pct": 20.04, "reason": "1、子公司旋极星源设计研发了多款芯片和IP产品，和阿里等有合作。\n2、公司参股的浙江曲速科技有限公司对赌约定已完成，现已成功推出“TGU01芯片”及搭载该芯片的Bumblebee服务器，并已上市销售。公司对该芯片的性能进行了现场核验，确认其在内存配备、显存带宽性能及大模型支持能力等方面均符合对赌条款的要求。", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 32.42, "first_limit_up": 1795755681, "break_limit_up_times": 2}, {"code": "603236", "name": "移远通信", "price": 85.65, "change_pct": 10.01, "reason": "公司针对人形、四足、割草、工业、服务等机器人打造专属整体解决方案，支撑机器人完成环境感知、语音交互、自主决策与运动控制", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.82, "first_limit_up": 1795755601, "break_limit_up_times": 0}, {"code": "300862", "name": "蓝盾光电", "price": 28.22, "change_pct": 19.98, "reason": "公司披露发行股份及支付现金购买岚创科技100%股权并募集配套资金的重组报告书草案，标的聚焦精密光学薄膜沉积领域，超窄带薄膜滤光片已实现商业化量产，主要应用于光通信等领域", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 14.55, "first_limit_up": 1795749210, "break_limit_up_times": 0}, {"code": "002197", "name": "证通电子", "price": 7.76, "change_pct": 10.07, "reason": "1、公司与华为签署OpenHarmony生态使能合作协议，率先基于开源鸿蒙推进金融场景化建设并落地新疆银行等场景，IDC云服务及智慧城市领域亦广泛合作，算力业务依据客户订单进行扩容，现阶段全力推进机柜订单落地；\n2、国内最早研发金融电子设备的高新技术企业之一；公司已围绕数字货币加密算法、数字钱包设备及其应用、数字货币支付模组及支付设备、数字货币收单设备等关键领域开展一套完整的数字货币安全支付方案研究工作，可根据客户需求提供数字人民币支付对接到银行系统的应用开发解决方案", "plates": ["华为昇腾"], "limit_up_days": 3, "turnover_ratio": 2.33, "first_limit_up": 1795742700, "break_limit_up_times": 0}, {"code": "002190", "name": "成飞集成", "price": 21.36, "change_pct": 9.99, "reason": "中国航空工业集团旗下上市公司，参与航天相关零部件制造", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 6.02, "first_limit_up": 1795744554, "break_limit_up_times": 2}, {"code": "603283", "name": "赛腾股份", "price": 38.65, "change_pct": 9.99, "reason": "公司通过收购日本 Optima 掌握晶圆缺陷检测等核心技术，是国内唯一能量产 HBM 量测设备的企业，且半导体设备产品线丰富，涵盖晶圆字符检测机、激光开槽机等，为国产芯片生产提供关键设备支持", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.01, "first_limit_up": 1795755643, "break_limit_up_times": 0}, {"code": "002552", "name": "宝鼎科技", "price": 30.03, "change_pct": 10.0, "reason": "子公司金宝电子生产电子铜箔与FR-4覆铜板，覆铜板是印制电路板（PCB）核心基材，电子铜箔供应给覆铜板及PCB厂商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.13, "first_limit_up": 1795762251, "break_limit_up_times": 0}, {"code": "003018", "name": "金富科技", "price": 27.86, "change_pct": 9.99, "reason": "1、公司拟收购卓晖金属和联益热能各51%股权，标的公司均聚焦液冷散热产品；\n2、公司是国内最大的塑料防盗瓶盖供应商之一，长期稳定供应华润怡宝、可口可乐、达能等头部饮料品牌", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 3.35, "first_limit_up": 1795761297, "break_limit_up_times": 7}, {"code": "301178", "name": "天亿马", "price": 34.88, "change_pct": 19.99, "reason": "1、公司与华为在智慧政务、智慧交通领域长期合作，解决方案嵌入华为产品，核心产品社会管理网格化系统通过华为FusionCloud云平台互联互通测试；\n2、公司为客户搭建国产高性能算力服务器集群，提供算力及存储资源服务，算力业务已落地深圳开放智算中心1000P FP16", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 10.77, "first_limit_up": 1795743219, "break_limit_up_times": 1}, {"code": "688693", "name": "锴威特", "price": 50.24, "change_pct": 19.99, "reason": "公司16.5亿元并购晶艺半导体， 完善功率半导体产品布局", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 5.85, "first_limit_up": 1795762599, "break_limit_up_times": 0}, {"code": "603015", "name": "弘讯科技", "price": 8.65, "change_pct": 10.05, "reason": "1、公司持续推进自主可控芯片主要包括CPU芯片、MCU芯片、通讯芯片、ASIC芯片在人机界面、控制主机、伺服驱动器等核心产品中的规模化导入，可无缝适配边缘计算、轻量化AI算法等产业智能发展趋势；\n2、公司意大利子公司EEI参与欧洲跨国人造太阳项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.06, "first_limit_up": 1795758471, "break_limit_up_times": 2}, {"code": "003005", "name": "竞业达", "price": 11.81, "change_pct": 9.96, "reason": "1、公司通过子公司元宇动力在河北怀来建设大型算力中心，提供算力调度、云服务及咨询运营；\n2、公司“星空教育大模型”通过国家网信办备案，累计完成文生文、文生图、文生视频等7项深度合成算法备案，形成教育垂类大模型+深度合成算法+应用落地的完整AI服务体系", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.7, "first_limit_up": 1795755627, "break_limit_up_times": 4}, {"code": "603002", "name": "宏昌电子", "price": 12.28, "change_pct": 10.04, "reason": "公司深耕电子级环氧树脂近30年，正加速开发聚苯醚（PPE）、聚醚等高频高速树脂，并打通了“树脂-覆铜板-增层膜”全产业链", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.87, "first_limit_up": 1795760679, "break_limit_up_times": 1}, {"code": "000818", "name": "航锦科技", "price": 9.37, "change_pct": 9.98, "reason": "1、公司是一家在国产军工芯片领域具有重要地位的企业，旗下子公司长沙韶光研发的高性能 GPU 芯片 SG6931 支持 2D/3D 图形加速等功能，还有反熔丝 FPGA 芯片因抗辐射等特性用于战机等关键设备，此外公司产品还涵盖模拟芯片、存储芯片、总线接口芯片等；\n2、公司智算算力板块已部署GPU服务器集群，自持服务器约1400台、运算能力1.5万P，为多家大型终端客户提供算力租赁及全栈解决方案，旗下超擎数智为DeepSeek提供光模块和交换机", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.89, "first_limit_up": 1795743189, "break_limit_up_times": 4}, {"code": "002871", "name": "伟隆股份", "price": 12.38, "change_pct": 10.04, "reason": "公司阀门产品可应用于数据中心液冷系统的一次侧与二次侧管路", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 2.37, "first_limit_up": 1795758486, "break_limit_up_times": 0}, {"code": "688797", "name": "臻宝科技", "price": 172.45, "change_pct": 20.0, "reason": "公司主营硅、石英、碳化硅、氧化铝陶瓷半导体设备零部件，适配存储、逻辑芯片先进制造产线，已实现对海力士大连等外资晶圆厂商稳定批量供货，并与美光半导体建立了业务合作关系", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 14.58, "first_limit_up": 1795757110, "break_limit_up_times": 13}, {"code": "603019", "name": "中科曙光", "price": 76.05, "change_pct": 9.99, "reason": "公司ParaStor F9000全闪存储系统在生产型全节点和10节点榜单中实现双榜第一，是首个达成此成就的中国厂商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.8, "first_limit_up": 1795762368, "break_limit_up_times": 1}, {"code": "603061", "name": "金海通", "price": 190.67, "change_pct": 10.0, "reason": "公司主营半导体芯片测试设备，深耕集成电路测试分选机领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.13, "first_limit_up": 1795746678, "break_limit_up_times": 0}, {"code": "688652", "name": "京仪装备", "price": 97.44, "change_pct": 20.0, "reason": "公司主要从事半导体专用设备的研产销，主营产品包括半导体专用温控设备（Chiller）、半导体专用工艺废气处理设备（Local Scrubber）和晶圆传片设备（Sorter）\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.75, "first_limit_up": 1795747921, "break_limit_up_times": 1}, {"code": "600487", "name": "亨通光电", "price": 38.13, "change_pct": 10.01, "reason": "公司预计前三季度归母净利润同比增长151.27%至168.10%，受人工智能发展及数据中心资本开支持续加大影响，光通信市场需求增长、价格上涨", "plates": ["光通信", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.51, "first_limit_up": 1795760563, "break_limit_up_times": 0}, {"code": "688629", "name": "华丰科技", "price": 111, "change_pct": 20.0, "reason": "公司主营光连接器和光模块，高速背板连接器广泛适用于数据中心用高端服务器、交换机、超级计算机等领域，华为是公司重要客户之一", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 7.7, "first_limit_up": 1795755736, "break_limit_up_times": 7}, {"code": "603400", "name": "华之杰", "price": 30.36, "change_pct": 10.0, "reason": "1、公司设立苏州康阳机器人，围绕电驱、电控、电池管理布局具身智能机器人产业化；\n2、公司电子水泵产品向数据中心液冷服务器领域拓展，已切入国内头部客户供应链，产品处于送样测试确认阶段", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.1, "first_limit_up": 1795757024, "break_limit_up_times": 0}, {"code": "603127", "name": "昭衍新药", "price": 36.99, "change_pct": 9.99, "reason": "国内创新药龙头；公司核心业务为药物的非临床评价服务，是新药研发链条中非临床安全性评价的关键环节，主要为创新药客户提供药物非临床药理毒理学评价，受益于国内创新药融资与BD授权交易回暖带来的行业需求增长", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.6, "first_limit_up": 1795757382, "break_limit_up_times": 1}, {"code": "603083", "name": "剑桥科技", "price": 105.63, "change_pct": 10.0, "reason": "公司拟于2027年底前将高速光模块产品的年产能再扩充至少1000万支", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 13.29, "first_limit_up": 1795756194, "break_limit_up_times": 3}, {"code": "603990", "name": "麦迪科技", "price": 18.92, "change_pct": 10.0, "reason": "公司与优必选成立合资公司，在AI智能服务和医疗康养领域开展深度合作，共同推动人形服务机器人在医疗康养领域的应用落地及产业发展", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.35, "first_limit_up": 1795755694, "break_limit_up_times": 3}, {"code": "688313", "name": "仕佳光子", "price": 87.22, "change_pct": 20.01, "reason": "公司拟购福可喜玛82.38%股权，标的专注MT插芯等MPO配套部件研发，产品应用于数据中心高速连接场景", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 7.44, "first_limit_up": 1795761302, "break_limit_up_times": 2}, {"code": "600243", "name": "*ST海华", "price": 3.15, "change_pct": 10.14, "reason": "公司专业从事机械制造、特殊齿轮、电梯配件研发生产", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.51, "first_limit_up": 1795745074, "break_limit_up_times": 8}, {"code": "300843", "name": "胜蓝股份", "price": 91.56, "change_pct": 20.0, "reason": "1、公司与优必选、云深处等人形机器人公司存在合作关系，并生产供货应用在人形机器人的连接器及线束产品；\n2、公司高频高速连接器可以应用在数据中心、服务器等设备上，目前公司该类产品主要供给浪潮、联想、曙光等客户；公司有研发、生产铜缆高速连接器产品；\n3、公司液冷板、UQD等零组件已小批量供货台湾地区散热厂并获认可，液冷产品实现小批量商业化突破", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.65, "first_limit_up": 1795755603, "break_limit_up_times": 0}, {"code": "603040", "name": "新坐标", "price": 35.64, "change_pct": 10.0, "reason": "公司为国内冷锻细分领域龙头，已完成多类行星滚柱丝杠开发，产品应用包括机器人线性执行关节，并配合客户进行定制化研发、迭代与送样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.69, "first_limit_up": 1795755717, "break_limit_up_times": 2}, {"code": "600105", "name": "永鼎股份", "price": 20.98, "change_pct": 10.02, "reason": "1、公司已经实现了从光芯片-光器件-光模块-系统集成的全产业链布局；\n2、公司高温超导带材已应用于超导感应加热、超导磁拉单晶、可控核聚变磁体、超导电力装备等领域", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 7.62, "first_limit_up": 1795761804, "break_limit_up_times": 0}, {"code": "603228", "name": "景旺电子", "price": 64.53, "change_pct": 10.01, "reason": "国内少数产品类型覆盖RPCB、FPC和MPCB的厂商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.62, "first_limit_up": 1795759519, "break_limit_up_times": 0}, {"code": "002199", "name": "东晶电子", "price": 12.42, "change_pct": 10.01, "reason": "国内最具规模的石英晶体元器件制造商之一；公司多款石英晶体元器件产品已在高通、紫光展锐、恒玄科技、矽昌通信、物奇微、爱科微等电子行业平台上完成导入认证", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 15.05, "first_limit_up": 1795743000, "break_limit_up_times": 1}, {"code": "688048", "name": "长光华芯", "price": 125.64, "change_pct": 20.0, "reason": "国内高功率半导体激光芯片龙头；公司的100EML芯片可以应用在800G的光模块上", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.97, "first_limit_up": 1795758290, "break_limit_up_times": 3}, {"code": "603421", "name": "鼎信通讯", "price": 5.02, "change_pct": 10.09, "reason": "公司与华为基于T3核心板合作研发台区智能融合终端项目，并将华为星闪、鸿蒙系统作为国产化技术引入自身电力系统产品", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1795744786, "break_limit_up_times": 0}, {"code": "688019", "name": "安集科技", "price": 228.85, "change_pct": 20.0, "reason": "公司是国产集成电路CMP抛光液和光刻胶去除剂龙头之一，Q3净利同比增261.86%", "plates": ["国产芯片", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.61, "first_limit_up": 1795758463, "break_limit_up_times": 7}, {"code": "688502", "name": "茂莱光学", "price": 427.2, "change_pct": 20.0, "reason": "公司为光刻机光学系统提供用于匀光、中继照明模块的光学器件、投影物镜", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 4.49, "first_limit_up": 1795758566, "break_limit_up_times": 3}, {"code": "688757", "name": "胜科纳米", "price": 34.7, "change_pct": 19.99, "reason": "公司是行业内知名的半导体第三方检测分析实验室，主要服务于半导体客户的研发环节，可以为半导体全产业链客户提供样品失效分析、材料分析、可靠性分析等专业、高效的检测实验\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 21.0, "first_limit_up": 1795760740, "break_limit_up_times": 3}, {"code": "000070", "name": "特发信息", "price": 11.78, "change_pct": 9.99, "reason": "深圳国资委控股的特发集团旗下，以光通信产业为主；公司“基于CPO技术的高密度超薄多芯MPO插芯关键技术研究”项目属于CPO配套技术，该技术的产品和CPO配套，目前已经实现量产出货", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 5.89, "first_limit_up": 1795762563, "break_limit_up_times": 0}, {"code": "600353", "name": "旭光电子", "price": 16.38, "change_pct": 10.01, "reason": "1）参股子公司储翰科技是一家专注于接入网光模块和光组件生产及销售的高新技术企业，拥有从芯片封装到光电器件到光电模块的垂直整合产品线；\n2）子公司成都旭瓷具备商用氮化铝全产业链的量产能力，产品涵盖氮化铝粉体(原粉，造粒粉，填料粉)、氮化铝基板、氮化铝结构件、氮化铝高温共烧陶瓷(HTCC)及高端功能器件(陶瓷管壳、加热器、光通信器件、TR组件)，产品被广泛应用于新能源汽车、半导体装备、大功率电力电子模块等高端制造领域，以及低轨卫星、船舶导航等国家战略场景", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 5.02, "first_limit_up": 1795757193, "break_limit_up_times": 9}, {"code": "688788", "name": "科思科技", "price": 21.52, "change_pct": 20.02, "reason": "军工电子信息装备供应商；公司第一代智能无线电基带处理芯片已进入商业化推广阶段，新一代芯片已转入宽带自组网模组研发阶段", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 3.4, "first_limit_up": 1795758310, "break_limit_up_times": 11}, {"code": "603938", "name": "三孚股份", "price": 27.53, "change_pct": 9.99, "reason": "1、公司高纯四氯化硅产品主要用于生产光纤预制棒及人造石英，目前与国内主要光纤企业建立了良好合作，国内市场占有率较高；\n2、公司电子特气产品应用于存储芯片等领域", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1795761964, "break_limit_up_times": 0}, {"code": "002850", "name": "科达利", "price": 152.33, "change_pct": 10.0, "reason": "国内最大的锂电池精密结构件供应商之一；公司人形机器人相关业务在谐波减速器和关节模组上布局，主要根据客户需求配套生产", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.6, "first_limit_up": 1795761801, "break_limit_up_times": 4}, {"code": "600730", "name": "*ST高科", "price": 6.38, "change_pct": 10.0, "reason": "公司收到法院出具的《民事裁定书》，裁定撤销此前对公司及两家子公司作出的行为保全措施", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.93, "first_limit_up": 1795758422, "break_limit_up_times": 7}, {"code": "603203", "name": "快克智能", "price": 34.05, "change_pct": 10.02, "reason": "1、公司高速高精固晶机已批量供货成都先进等头部功率半导体企业，芯片封装AOI与光模块AOI设备在800G及以上光模块头部客户小批量应用；\n2、在服务器液冷领域，公司可为液冷装置核心零部件提供精密组装自动化产线，已为飞龙股份交付多条散热水泵自动化生产线，该水泵用于英伟达服务器液冷系统", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 6.38, "first_limit_up": 1795757391, "break_limit_up_times": 0}, {"code": "002947", "name": "恒铭达", "price": 42.48, "change_pct": 9.99, "reason": "1、公司为苹果全球200家核心供应商之一，富士康组件生产商；产品广泛应用于手机、平板电脑、笔记本电脑、智能穿戴设备等消费电子产品及其组件。\n2、子公司华阳通新切入昇腾服务器组装。", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 2.88, "first_limit_up": 1795755753, "break_limit_up_times": 0}, {"code": "688419", "name": "耐科装备", "price": 37.56, "change_pct": 20.0, "reason": "公司半导体封装设备及模具主要应用于半导体封装领域的塑料封装和切筋成型环节，采用压缩成型工艺的全自动封装设备NTCMS40-V1已发往客户进行试用，100mm×300mm基板类封装装备已发往客户端进行试用", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.77, "first_limit_up": 1795762020, "break_limit_up_times": 1}, {"code": "002885", "name": "京泉华", "price": 18.34, "change_pct": 10.02, "reason": "公司磁性元器件及电源类产品已覆盖光伏储能、数据中心、新能源汽车、充电桩等高景气赛道，并通过GE、法雷奥、比亚迪等客户认证", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.88, "first_limit_up": 1795761252, "break_limit_up_times": 0}, {"code": "300598", "name": "诚迈科技", "price": 28.38, "change_pct": 20.0, "reason": "公司是华为鸿蒙、欧拉、矿鸿生态重要合作伙伴，为 HarmonyOS 开发服务商，提供软件定制与操作系统适配服务，华为系公司重要客户", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 8.25, "first_limit_up": 1795757403, "break_limit_up_times": 1}, {"code": "300339", "name": "润和软件", "price": 34.69, "change_pct": 19.99, "reason": "华为深度战略合作伙伴；全国首批完成昇腾910C芯片深度兼容性认证的企业，自研AIRUNS训推一体化平台适配Atlas 800T A3服务器，通过模型实例编排、图级并行融合等技术，实现昇腾算力高吞吐、低时延释放，推理效能倍级增强", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 8.7, "first_limit_up": 1795744830, "break_limit_up_times": 0}, {"code": "000766", "name": "通化金马", "price": 10.51, "change_pct": 10.05, "reason": "公司自主研发治疗轻、中度阿尔茨海默病的琥珀八氢氨吖啶片，为国家1.1类新药", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.19, "first_limit_up": 1795755858, "break_limit_up_times": 35}, {"code": "688552", "name": "航天南湖", "price": 28.81, "change_pct": 19.99, "reason": "公司产品主要包括雷达及配套装备，防空预警雷达产品已成为我国防空预警领域的主力装备", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1795757197, "break_limit_up_times": 3}, {"code": "002368", "name": "太极股份", "price": 10.97, "change_pct": 10.03, "reason": "国内领先的信息系统集成商；公司参与华为鲲鹏生态构建，面向复杂应用场景与华为联合打造行业数字化转型解决方案，政务云体系与华为等生态伙伴开放共建", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 2.13, "first_limit_up": 1795745343, "break_limit_up_times": 0}, {"code": "603052", "name": "可川科技", "price": 32.26, "change_pct": 9.99, "reason": "子公司可川光子致力于高速硅光芯片和硅光模块的研发和生产，目前首条400G/800G高速光模块生产线已正式投产启用", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 1.68, "first_limit_up": 1795758211, "break_limit_up_times": 0}, {"code": "300870", "name": "欧陆通", "price": 93.22, "change_pct": 20.01, "reason": "公司就算力设备GPU电源项目开展合作，将全力配合客户推进至测试、小批量及批量生产", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.4, "first_limit_up": 1795761636, "break_limit_up_times": 2}, {"code": "605168", "name": "三人行", "price": 36.41, "change_pct": 10.0, "reason": "公司与科通技术签署战略合作并投资，科通为NVIDIA中国区总代理，保障公司算力中心GPU硬件需求，并拟2.8亿元在青海设全资子公司青海三人行绿能智算科技有限公司，主营算力租赁及数据中心业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.74, "first_limit_up": 1795743450, "break_limit_up_times": 0}, {"code": "002670", "name": "国盛证券", "price": 9.7, "change_pct": 9.98, "reason": "综合性金融服务集团，国盛证券是公司的全资子公司", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 3.03, "first_limit_up": 1795747209, "break_limit_up_times": 2}, {"code": "300943", "name": "春晖智控", "price": 24.02, "change_pct": 19.98, "reason": "1、公司通过参股并拟全资收购的春晖仪表供应卫星电磁解除装置、航天级温度传感器等，已小批量供货星网、银河航天等；\n2、公司研发的氢气电磁阀、调压阀等产品，能够精确控制氢气的流量和压力，确保氢燃料电池汽车供氢系统的稳定运行", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 13.24, "first_limit_up": 1795759533, "break_limit_up_times": 10}, {"code": "605178", "name": "时空科技", "price": 47.99, "change_pct": 9.99, "reason": "公司拟收购嘉合劲威，切入存储领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.33, "first_limit_up": 1795745350, "break_limit_up_times": 0}, {"code": "688082", "name": "盛美上海", "price": 244.8, "change_pct": 20.0, "reason": "公司主要产品包括半导体清洗设备、半导体电镀设备和先进封装湿法设备，推出Ultra ECDP电化学去镀设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.41, "first_limit_up": 1795760839, "break_limit_up_times": 2}, {"code": "688729", "name": "屹唐股份", "price": 22.52, "change_pct": 19.98, "reason": "公司干法去胶设备及快速热处理设备已实现大规模装机，2025年凭借33.7%的市场占有率位居全球第二，累计服务的客户全面覆盖全球前十大芯片制造商和国内行业领先芯片制造商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1795761127, "break_limit_up_times": 3}, {"code": "002979", "name": "雷赛智能", "price": 46.53, "change_pct": 10.0, "reason": "国内智能装备运动控制领域龙头；公司人形机器人产品线包括无框力矩电机、空心杯电机、微型伺服系统，并发布DH2015高自由度灵巧手，聚焦具身智能运动控制与关节模组", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.77, "first_limit_up": 1795757316, "break_limit_up_times": 21}, {"code": "688200", "name": "华峰测控", "price": 223.55, "change_pct": 20.0, "reason": "公司为国内半导体测试机龙头，现已成为国内前三大半导体封测厂商模拟测试领域的主力供应商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.9, "first_limit_up": 1795758254, "break_limit_up_times": 9}, {"code": "001267", "name": "汇绿生态", "price": 19.99, "change_pct": 10.02, "reason": "公司拟不超1.95亿元收购武汉钧恒30%股权，武汉钧恒对高速光模块技术持续投入，当前已经具备单波400G高速链路仿真能力，um级高精度光学微组装能力，及各种高速控制算法能力；基于上述能力积累，当前武汉钧恒1.6T模块相关产品已经开发出来，具备送样能力，3.2T模块单点技术已经验证完成，预计年底启动项目开发", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 4.25, "first_limit_up": 1795758093, "break_limit_up_times": 0}, {"code": "002156", "name": "通富微电", "price": 40.13, "change_pct": 10.01, "reason": "公司是国内第二、全球第四的封测巨头，掌握多种先进封测技术，为 AMD 等国际巨头及华为海思、寒武纪等国内芯片企业提供封测服务", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.24, "first_limit_up": 1795757790, "break_limit_up_times": 0}, {"code": "002647", "name": "仁东控股", "price": 6.44, "change_pct": 10.09, "reason": "公司1亿元增资深圳江原科技，持股4.1427%，后者12英寸国产AI算力芯片D1已流片、D10算力卡实现批量应用，并同步研发T800，公司借此布局第二增长曲线", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.66, "first_limit_up": 1795762596, "break_limit_up_times": 0}, {"code": "600666", "name": "奥瑞德", "price": 2.88, "change_pct": 9.92, "reason": "公司以算力租赁 + 智算中心为 AI 词元训练 / 推理提供算力底座，还完成 AI 服务器资产代币化，深度绑定词元经济；拟定增募资不超8.68亿元用于产能建设及补流", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.05, "first_limit_up": 1795743137, "break_limit_up_times": 7}, {"code": "603912", "name": "佳力图", "price": 6.18, "change_pct": 9.96, "reason": "1、华为系公司主要客户之一，公司为华为数据中心提供温控节能设备，覆盖精密空调与冷板式、浸没式液冷等机房控温方案；\n2、公司掌握磁悬浮压缩机在冷水机组产品中的应用技术，为数据中心等领域提供相关的制冷解决方案", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 3.5, "first_limit_up": 1795746976, "break_limit_up_times": 0}, {"code": "600552", "name": "凯盛科技", "price": 11.22, "change_pct": 10.0, "reason": "公司UTG（超薄柔性玻璃）项目主体生产线已基本建成，相关产品已实现向下游客户批量交付，剩余产能生产线处于调试、验证阶段，预计2026年4月项目可完全达到使用状态", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 4.42, "first_limit_up": 1795761621, "break_limit_up_times": 0}, {"code": "603661", "name": "恒林股份", "price": 24.31, "change_pct": 10.0, "reason": "跨界布局培育钻石的家居龙头，通过子公司河南闪耀钻石开展业务，产品涵盖培育钻石饰品、大尺寸金刚石单晶片及金刚石单晶刀具", "plates": ["培育钻石"], "limit_up_days": 1, "turnover_ratio": 2.54, "first_limit_up": 1795760694, "break_limit_up_times": 0}, {"code": "688069", "name": "德林海", "price": 30.76, "change_pct": 20.02, "reason": "国内领先的专业化蓝藻治理企业；控股股东等调整协议转让方案，转让价降至18.87元/股", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.87, "first_limit_up": 1795743057, "break_limit_up_times": 0}, {"code": "002667", "name": "*ST威领", "price": 18.85, "change_pct": 9.98, "reason": "山南锑金要约收购结果出炉", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 7.7, "first_limit_up": 1795761276, "break_limit_up_times": 1}, {"code": "300604", "name": "长川科技", "price": 200.62, "change_pct": 20.0, "reason": "公司半导体测试设备龙头，存储测试机放量", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.51, "first_limit_up": 1795755867, "break_limit_up_times": 4}, {"code": "001339", "name": "智微智能", "price": 54.52, "change_pct": 10.01, "reason": "子公司腾云智算算力设备销售保持强劲增长，维保业务实现翻倍增长，已发布GPU算力租赁平台HAT，支持整机与切卡租赁，首批种子用户落地", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.31, "first_limit_up": 1795756035, "break_limit_up_times": 16}, {"code": "001212", "name": "中旗新材", "price": 23.23, "change_pct": 9.99, "reason": "控股股东广东星空科技装备有限公司聚焦2.5D/3D先进封装及AI芯片制造设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.77, "first_limit_up": 1795761852, "break_limit_up_times": 8}, {"code": "603005", "name": "晶方科技", "price": 20.76, "change_pct": 10.02, "reason": "公司称作为全球车规CIS芯片晶圆级TSV封装技术的开发者，拥有显著的技术与量产领先优势，随着车联网、智能汽车、自动驾驶等应用的逐步普及，汽车上摄像头的数量迅速增加，公司在汽车电子领域的业务规模有望持续增长", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.09, "first_limit_up": 1795757178, "break_limit_up_times": 9}, {"code": "002123", "name": "梦网科技", "price": 6.79, "change_pct": 10.05, "reason": "公司成立梦网云智算子公司，以GPU、AI芯片为核心打造全栈云算力服务平台，具备算力资源纳管、调度到运营的全生命周期管理能力，面向大模型客户提供一站式AI算力服务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.9, "first_limit_up": 1795755621, "break_limit_up_times": 0}, {"code": "688807", "name": "优迅股份", "price": 166.08, "change_pct": 20.0, "reason": "公司围绕1.6T光模块应用积极布局下一代速率产品，重点研发跨阻放大器、VCSEL激光器驱动器，以及面向LPO/NPO架构的MZ调制器驱动器等核心芯片，目前已进入样品测试阶段", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 12.83, "first_limit_up": 1795759315, "break_limit_up_times": 2}, {"code": "688343", "name": "云天励飞", "price": 53.16, "change_pct": 20.0, "reason": "公司已加入华为昇腾万里伙伴计划，与华为联合打造有竞争力的人工智能解决方案，聚焦计算机视觉与昇腾生态融合，开发智能安防、智慧城市解决方案；完成视觉智能产品与昇腾Atlas服务器适配", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 5.16, "first_limit_up": 1795755861, "break_limit_up_times": 31}, {"code": "688143", "name": "长盈通", "price": 108.94, "change_pct": 20.0, "reason": "公司自研适配 CPO 的超细径器件保偏光纤、空芯光纤，相关产品已送样头部光模块厂商验证", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 12.51, "first_limit_up": 1795757144, "break_limit_up_times": 2}, {"code": "003019", "name": "宸展光电", "price": 22.02, "change_pct": 9.99, "reason": "公司主营智能交互显示设备，可应用于人形机器人等智能终端上", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.5, "first_limit_up": 1795762122, "break_limit_up_times": 0}, {"code": "600571", "name": "信雅达", "price": 8.67, "change_pct": 10.03, "reason": "人民币跨境支付系统提供商，昆仑银行跨境支付系统服务商", "plates": ["RWA"], "limit_up_days": 1, "turnover_ratio": 4.26, "first_limit_up": 1795755988, "break_limit_up_times": 19}, {"code": "688371", "name": "菲沃泰", "price": 18.4, "change_pct": 20.03, "reason": "1、公司相变液冷服务器主板涂层产品已量产，并可为算力服务器算力主板、光模块、电源等部件提供镀膜防护，液冷服务器业务正快速放量；\n2、公司主营高性能多功能纳米薄膜，以一站式解决方案服务于植入式脑机接口等医疗领域器械及耗材，可提升表面质感、强化绝缘抗菌及耐腐蚀性能；\n3、公司采用PECVD与CVD耦合真空镀膜技术对浸没式PCBA等部件进行处理，形成透明绝缘涂层，相关技术已在多家客户的服务器电源、算力大板等产品上成功量产", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.36, "first_limit_up": 1795755758, "break_limit_up_times": 2}, {"code": "002649", "name": "博彦科技", "price": 8.55, "change_pct": 10.04, "reason": "1、中国领先的软件与信息技术服务商；公司通过参与部分银行客户数字人民币相关项目的开发不断积累相关项目经验及技术、人才储备，已在国有行的系统开发、股份制商业银行和一些头部城商行的应用场景实现落地；\n2、公司积极与国内外主流大模型厂商开展技术与生态合作，基于客户场景需求，为行业客户提供一站式AI应用解决方案及服务，相关方案已在部分金融、化工、制造等多个行业实现业务落地", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 3.76, "first_limit_up": 1795756101, "break_limit_up_times": 3}, {"code": "002980", "name": "华盛昌", "price": 68.73, "change_pct": 10.0, "reason": "公司收购伽蓝特100%股权，后者专注光通信模块和光芯片测试", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 17.58, "first_limit_up": 1795760811, "break_limit_up_times": 0}, {"code": "300502", "name": "新易盛", "price": 226.84, "change_pct": 20.0, "reason": "800G和1.6T光模块为公司今年主力产品，CPO等技术已作储备布局", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 10.39, "first_limit_up": 1795762077, "break_limit_up_times": 0}, {"code": "002371", "name": "北方华创", "price": 527.38, "change_pct": 10.0, "reason": "国产半导体设备龙头", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.64, "first_limit_up": 1795755675, "break_limit_up_times": 0}, {"code": "300047", "name": "天源迪科", "price": 8.7, "change_pct": 20.0, "reason": "1、全资子公司金华威为华为政企全线产品总经销商，代理分销昇腾AI计算产品及超聚变产品；\n2、公司智能体平台已在运营商全国级系统中实现规模化部署，并形成“大模型+智能体+数智一体机”解决方案", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 7.37, "first_limit_up": 1795743219, "break_limit_up_times": 2}, {"code": "605111", "name": "新洁能", "price": 34.9, "change_pct": 9.99, "reason": "功率半导体龙头，国内最早专门从事MOSFET、IGBT研发设计的企业之一", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.33, "first_limit_up": 1795757313, "break_limit_up_times": 0}, {"code": "603917", "name": "合力科技", "price": 10.43, "change_pct": 10.02, "reason": "公司主要从事汽车用铸造模具、压铸模具、热冲压模具、铝合金部品和汽车制动系统", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 2.28, "first_limit_up": 1795757479, "break_limit_up_times": 1}, {"code": "688205", "name": "德科立", "price": 87.6, "change_pct": 20.0, "reason": "光传输全产业链企业；公司400G相干模块已实现小批量试产，硅基OCS获海外样品订单", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 9.0, "first_limit_up": 1795755724, "break_limit_up_times": 3}, {"code": "603068", "name": "博通集成", "price": 30.69, "change_pct": 10.0, "reason": "1、公司BK7259等Wi-Fi6 MCU产品集成端侧智能能力，面向智能家居、智能硬件等场景；\n2、公司已有多款融合AI技术的AIoT芯片产品实现量产销售，应用领域涵盖AI眼镜、AI玩具等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.07, "first_limit_up": 1795758131, "break_limit_up_times": 4}, {"code": "688630", "name": "芯碁微装", "price": 251.16, "change_pct": 20.0, "reason": "公司的直写光刻设备主要应用于PCB、显示、先进封装等领域，在高精度LDI技术领域，公司已突破1μm分辨率，达到国际先进水平，填补国内空白", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 7.41, "first_limit_up": 1795749649, "break_limit_up_times": 2}, {"code": "603663", "name": "三祥新材", "price": 26.62, "change_pct": 10.0, "reason": "1、公司锆铪分离项目正处于项目建设中，现有半工业化产线已实现连续稳定生产，产出的锆铪产品均为4N级以上，并已将部分产品向下游半导体领域客户送样；\n2、公司锆基卤化物材料目前已向下游电池企业小批量供货", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 2.7, "first_limit_up": 1795755983, "break_limit_up_times": 12}, {"code": "002480", "name": "新筑股份", "price": 5.36, "change_pct": 10.06, "reason": "公司拟购买蜀道清洁能源60%股权、出售轨交相关资产的重大重组已获四川省国资委批准，尚需深交所审核及证监会注册", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1795743717, "break_limit_up_times": 3}, {"code": "000034", "name": "神州数码", "price": 21.35, "change_pct": 9.99, "reason": "1、华为昇腾AI服务器全国总经销商，同时为昇腾生态提供全栈解决方案；自主研发搭载昇腾310P芯片的“神州鲲泰”AI服务器，在智慧城市领域中标金额超20亿元，服务200余家金融机构；\n2、公司旗下合肥木犀实现400G和800G交换机量产，拥有英伟达、博通、思科等多个品牌交换芯片对应的交换机产品的研发和生产能力，所生产的交换机可以适配当前国内外主流的服务器设备；\n3、公司经销长鑫存储各类型号产品，国产存储业务规模保持高速成长;", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 5.18, "first_limit_up": 1795744884, "break_limit_up_times": 1}, {"code": "600850", "name": "电科数字", "price": 12.16, "change_pct": 10.05, "reason": "1、子公司柏飞电子为半导体装备生产商提供光刻机的控制器；\n2、公司AI相关订单已突破百个，通过智弈智算平台为客户提供异构算力调度服务，聚焦算力需求领域", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1795755854, "break_limit_up_times": 14}, {"code": "603171", "name": "税友股份", "price": 37.13, "change_pct": 10.01, "reason": "1、在数据价值开发、探索数据价值服务方面，已经形成以税务风险管理工具和指标模型定制开发为主的数据服务产品，并凭借自身在数据治理和数据资产管理、以及税收风险类应用功能开发方面的成绩，跻身为税务数据应用方面的领先企业；\n2、公司与阿里云在AI智能体应用方面保持长期合作，90%以上基础设施使用阿里云，通义千问大模型应用于财税咨询、爱搜税等AI SaaS场景", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 1.92, "first_limit_up": 1795757229, "break_limit_up_times": 0}, {"code": "603322", "name": "超讯科技", "price": 19.8, "change_pct": 10.0, "reason": "公司为“沐曦”品牌GPU产品特定行业总代理，并于2025年初携手沐曦等设立控股子公司“讯曦智能”，向芯片封测、服务器整机生产、销售及维修延伸，强化国产算力产业链布局", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.97, "first_limit_up": 1795743190, "break_limit_up_times": 4}, {"code": "603305", "name": "旭升集团", "price": 11.42, "change_pct": 10.02, "reason": "公司深度挖掘自身铝合金精密加工专长，结合人形机器人独特的结构与性能需求，全力投入关节壳体、躯干结构件等关键产品研发，并斩获多家海内外客户项目定点", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.34, "first_limit_up": 1795749693, "break_limit_up_times": 0}, {"code": "301421", "name": "波长光电", "price": 75.78, "change_pct": 20.0, "reason": "公司已具备提供光刻机配套的大孔径光学镜头的能力；成功开发的光刻机平行光源系统可用于国产光刻机领域配套，并已交付多套系统用于接近式掩膜芯片光刻工序", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 19.94, "first_limit_up": 1795759494, "break_limit_up_times": 16}, {"code": "603373", "name": "安邦护卫", "price": 36.07, "change_pct": 10.0, "reason": "1、公司联合温州理工学院科研团队打造了“智能安防中枢平台”，创新性地应用四足机器人技术；\n2、下属子公司衢州安邦和衢州通航开展的无人机业务包含无人机驾驶员培训（民航培训、警航培训）、低空管制服务、无人机测绘等，公司自主研发的“零距离”空地一体无人机5G飞行平台还运用到消防救援等，均为低空经济范畴", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 2.33, "first_limit_up": 1795743062, "break_limit_up_times": 0}, {"code": "600797", "name": "浙大网新", "price": 5.9, "change_pct": 10.07, "reason": "1、子公司网新图灵作为华为产品合作伙伴，公司为客户提供基于华为产品的行业解决方案，双方合作涵盖设备采购与系统集成；\n2、全资子公司与阿里巴巴合作建设的ZH12数据中心项目已全部完工并投入运营，双方已完成第3个模块的正式商务合同签署，合同服务期限10年，预计该模块服务期内总收入为4.48亿元", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 1.29, "first_limit_up": 1795743044, "break_limit_up_times": 0}, {"code": "002957", "name": "科瑞技术", "price": 23.38, "change_pct": 10.02, "reason": "公司为国内外客户提供超高精密部件、光耦合设备、共晶设备等多款半导体封装及测试设备，光耦合、共晶、芯片AOI设备均已量产", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.56, "first_limit_up": 1795756188, "break_limit_up_times": 3}, {"code": "000889", "name": "中嘉博创", "price": 4.3, "change_pct": 9.97, "reason": "1、公司与华为终端、华为云、IT等涉及短信相关的业务领域合作；\n2、公司申请名称一种通过插片式安装的光通信无源器件专利，全资子公司海南博创云天经营范围包含算力销售", "plates": ["华为昇腾"], "limit_up_days": 2, "turnover_ratio": 5.44, "first_limit_up": 1795743006, "break_limit_up_times": 0}, {"code": "603738", "name": "泰晶科技", "price": 21.43, "change_pct": 10.01, "reason": "公司为国内晶振龙头，旗下晶振产品已应用于人形机器人控制系统、传感器同步等方面", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.36, "first_limit_up": 1795761767, "break_limit_up_times": 0}, {"code": "002575", "name": "群兴玩具", "price": 4.26, "change_pct": 10.08, "reason": "公司孙公司图灵引擎科技与腾讯签订了《算力服务协议》，拟向腾讯提供集群算力服务；一季度业绩同比减亏", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 10.53, "first_limit_up": 1795762521, "break_limit_up_times": 0}, {"code": "301236", "name": "软通动力", "price": 35.86, "change_pct": 20.01, "reason": "1、首批入驻北京昇腾人工智能计算中心的合作伙伴；华为鲲鹏、昇腾计算核心合作伙伴，具备全栈智能产品开发与行业适配能力，为昇腾生态提供软件定制开发、模型优化及场景落地服务，参与昇腾原生应用开发，优化AI算法在行业场景的运行效能；\n2、公司定位独立Token供应商，打造“绿色能源+算力+Tokens”一体化模式，“北京壹号词元工厂”投产，承建的粤港澳大湾区公共算力服务平台及Token工厂上线，与北京壹号词元工厂形成南北双核协同", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 6.38, "first_limit_up": 1795755624, "break_limit_up_times": 0}, {"code": "603045", "name": "福达合金", "price": 28.27, "change_pct": 10.0, "reason": "公司低压电接触材料销售额国内第一，高分断能力焊接触头组件已配套施耐德、西门子、ABB等全球头部客户，北美数据中心低压配套业务在关税压力下逆势增长", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.63, "first_limit_up": 1795761623, "break_limit_up_times": 4}, {"code": "688668", "name": "鼎通科技", "price": 95.58, "change_pct": 20.0, "reason": "1、公司高速通讯连接器零组件业务收入占比约为70%-75%，主要供给安费诺、莫仕和泰科等世界知名连接器企业；\n2、目前公司液冷产线已有2条正在运行中，另外根据市场需求及客户预测等信息，对于液冷产品今年共规划5条产线，目前正在有序地进行扩产中", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 7.91, "first_limit_up": 1795762301, "break_limit_up_times": 0}, {"code": "301209", "name": "联合化学", "price": 49.42, "change_pct": 20.01, "reason": "1、公司控股子公司启辰半导体建设产线研发量产 KrF 光刻胶用苯乙烯类光刻胶单体、树脂，一期产能 200 吨正在建设中；\n2、公司投资1.2亿元布局卓光芮科技，其子公司罡景光学高端光学系统已获近1亿元在手订单", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 12.23, "first_limit_up": 1795757199, "break_limit_up_times": 25}, {"code": "001389", "name": "广合科技", "price": 90.61, "change_pct": 10.0, "reason": "公司拥有CPU PCB产品，在国内算力服务器CPU主板PCB制造商中排名第一，在全球同类厂商中排名第三（全球市场份额 12.4%），已应用于 Intel发布的Purley、Whitley、Eagle stream、Birch Stream 等各世代芯片平台的服务器，在AMD发布的各世代芯片平台也有对应的PCB产品向服务器厂商供应", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.72, "first_limit_up": 1795757490, "break_limit_up_times": 2}, {"code": "600180", "name": "*ST瑞茂", "price": 0.74, "change_pct": 10.45, "reason": "公司与新疆金正解除重整投资协议", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 1.94, "first_limit_up": 1795742700, "break_limit_up_times": 0}, {"code": "003021", "name": "兆威机电", "price": 83.29, "change_pct": 10.0, "reason": "1、公司产品应用于机器人领域，持续推动微型传动及驱动系统在灵巧手、机器人关节等场景应用，灵巧手产品商业化进程持续推进；\n2、公司的微型传动系统可以应用于AR/VR领域，如磁感应系统、瞳距调节驱动系统、头部自动松紧装置、智能眼镜隐藏式微型扬声器等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.29, "first_limit_up": 1795757637, "break_limit_up_times": 0}, {"code": "002655", "name": "共达电声", "price": 27.29, "change_pct": 10.0, "reason": "1、公司拟以自有资金2000万元参与对合肥硅臻芯片的增资,布局光量子芯片领域；\n2、公司上半年设立全资子公司共达智算，聚焦“AI算力基础设施”，通过联合AIDC共建、算力租赁服务等构建AI算力生态闭环，布局训练服务器、推理服务器等产品，成为公司第二增长曲线；\n3、公司主营的微型麦克风、扬声器等声学器件可应用于AI手机，为AI手机的语音交互、音频播放等功能提供声学硬件支持", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 7.56, "first_limit_up": 1795756014, "break_limit_up_times": 14}, {"code": "300567", "name": "精测电子", "price": 100.44, "change_pct": 20.0, "reason": "1、公司半导体领域的测试设备适用于各种类芯片的缺陷检查；\n2、在新能源板块开发完成针对锂电池行业的电芯化成分容制程检测系统、模组电池组／包检测系统和BMS检测系统；\n3、 公司在VR/AR终端检测方面有相应的产品和订单，有少量出货订单", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.18, "first_limit_up": 1795748997, "break_limit_up_times": 0}, {"code": "300192", "name": "科德教育", "price": 18.47, "change_pct": 20.01, "reason": "公司参股中昊芯英", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.2, "first_limit_up": 1795757406, "break_limit_up_times": 6}, {"code": "603927", "name": "中科软", "price": 12.91, "change_pct": 9.97, "reason": "公司推动大模型技术在保险、政务、医疗卫生等行业深度落地，提供中科软训练推理一体化平台MaaS Studio；以MaaS平台为底座开发核保、理赔、风控等细分领域智能体，提供AI办公辅助智能体", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 2.47, "first_limit_up": 1795756257, "break_limit_up_times": 1}, {"code": "603030", "name": "全筑股份", "price": 3.16, "change_pct": 10.1, "reason": "1、公司与华芯极光在上海合资成立华芯全筑，华芯全筑致力于极紫外光源核心精密测量设备的研发与制造，同时为传统化光源路径攻关以及创新型光源技术落地提供支撑；\n2、公司成立云阙智算苏州物联科技有限公司，基于分布式数字与AI原生服务平台，聚焦数据产生端，推动分布式边缘AI算力服务及应用，目前业务尚处于早期试点培育阶段；\n3、公司主营建筑装饰工程，表示研发智能建筑装饰施工机器人", "plates": ["光刻机（胶）"], "limit_up_days": 4, "turnover_ratio": 9.83, "first_limit_up": 1795743033, "break_limit_up_times": 0}, {"code": "605389", "name": "长龄液压", "price": 59.29, "change_pct": 10.0, "reason": "公司目前向杭州海康机器人股份有限公司、兰剑智能科技股份有限公司翼菲机器人智能制造有限公司小批量供货AGV小车、AMR智能搬运机器人顶升机构用回转支承", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 0.82, "first_limit_up": 1795761329, "break_limit_up_times": 7}, {"code": "002335", "name": "科华数据", "price": 23.07, "change_pct": 10.01, "reason": "公司已与腾讯云在数据中心领域建立了深入密切的合作关系,建设及运营了张家口、广州、清远地区的四大定制化数据中心", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.6, "first_limit_up": 1795762056, "break_limit_up_times": 0}, {"code": "002344", "name": "海宁皮城", "price": 3.7, "change_pct": 10.12, "reason": "全球唯一一个提供全产业链服务的皮革专业市场；公司主营皮革专业市场的开发、租赁和服务，海宁中国皮革城是目前全球最具规模、中国最具影响力的皮革专业市场", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 0.92, "first_limit_up": 1795742700, "break_limit_up_times": 0}, {"code": "002152", "name": "广电运通", "price": 8.49, "change_pct": 9.97, "reason": "公司围绕“四云两中心”开展自主研发，打造广州政务信创云、公安信创云、国资国企云、AI智算云等专属云服务，并推进新一代高可用云数据中心和算力中心建设", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.77, "first_limit_up": 1795756212, "break_limit_up_times": 2}, {"code": "600206", "name": "有研新材", "price": 40.58, "change_pct": 10.0, "reason": "控股子公司为长江存储、长鑫存储靶材供应商，子公司有研亿金量产12英寸晶圆制造高纯靶材，为国内大硅片下游晶圆厂提供配套耗材", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 11.51, "first_limit_up": 1795758395, "break_limit_up_times": 1}, {"code": "000026", "name": "飞亚达", "price": 21.86, "change_pct": 10.02, "reason": "中国航空工业集团旗下，国产腕表龙头，拟收购长空齿轮全部或部分控股权，后者主要产品为精密齿轮、精密减速器，相关产品的下游市场应用场景广阔，包括航空航天、电子、机器人等高端装备领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.13, "first_limit_up": 1795755624, "break_limit_up_times": 0}, {"code": "603690", "name": "至纯科技", "price": 17.82, "change_pct": 10.0, "reason": "公司为国内领先的核心工艺设备及系统专业供应商，与深圳新凯来多年保持合作", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.82, "first_limit_up": 1795757279, "break_limit_up_times": 8}, {"code": "600183", "name": "生益科技", "price": 68.04, "change_pct": 10.01, "reason": "1、中国大陆最大的覆铜板制造商；公司高速产品覆盖服务器、数据中心、交换机、光模块等领域，极低损耗产品已通过多家国内外终端客户认证并批量供应；\n2、公司与银河航天签署战略合作协议，切入商业航天赛道", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.52, "first_limit_up": 1795760608, "break_limit_up_times": 0}, {"code": "002713", "name": "东易日盛", "price": 8.36, "change_pct": 10.0, "reason": "控股股东无偿捐赠华著智算85%股权，切入算力中心运营及算力服务赛道", "plates": ["云计算数据中心", "股权转让"], "limit_up_days": 2, "turnover_ratio": 8.21, "first_limit_up": 1795755624, "break_limit_up_times": 1}, {"code": "603285", "name": "键邦股份", "price": 24.74, "change_pct": 10.0, "reason": "公司赛克产品作为高端电磁线漆关键耐热改性单体，全球市场占有率超75%，终端应用覆盖AI算力配套等新兴产业，目前赛克下游绝缘漆占比已升至 60% 以上，深度配套变压器、新能源汽车电机、AI算力中心等高增量赛道", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.48, "first_limit_up": 1795757423, "break_limit_up_times": 4}, {"code": "688820", "name": "盛合晶微", "price": 121.32, "change_pct": 20.0, "reason": "公司是全球领先的集成电路晶圆级先进封测企业，已经成为中国大陆在芯粒多芯片集成封装领域起步最早、技术最先进、生产规模最大、布局最完善的企业之一\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 24.21, "first_limit_up": 1795760768, "break_limit_up_times": 0}, {"code": "605398", "name": "新炬网络", "price": 23.09, "change_pct": 10.0, "reason": "1、公司三季度营业收入同比增长45.40%，主要系短剧及智能内容的制作和营销业务进入规模上升阶段；\n2、公司AI运维智能体是基于公司多年专业IT智慧运维经验和成熟的智能运维平台作为基础，以Agent为核心调度单元，整合感知、记忆、认知与行动四层能力，自动归因海量告警、自主编排修复动作、沉淀运维知识形成持续进化的智能体；\n3、公司是一家以提供IT数据中心运维服务及运维产品为主的多云全栈智能运维服务商，下属子公司新炬技术AIOPS智慧运维平台软件V4.0与华为云GaussDB、华为云公有云平台（鲲鹏）完成相互", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 3.74, "first_limit_up": 1795757743, "break_limit_up_times": 2}, {"code": "605318", "name": "法狮龙", "price": 81.84, "change_pct": 10.0, "reason": "设立全资子公司北宸星穹，服务于AI智算行业，满足客户算力调度、存算协同及推理响应需求", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.68, "first_limit_up": 1795755665, "break_limit_up_times": 0}, {"code": "002428", "name": "云南锗业", "price": 68.32, "change_pct": 10.0, "reason": "1、公司作为磷化铟衬底龙头，控股子公司签下N型磷化铟衬底长单，五年预计供货总量达90万片；\n2、公司“空间太阳能电池用锗晶片建设项目”2025年末将形成年产125万片产能，最终达250万片，锗晶片主要用于空间卫星、空间站等深空设备的空间卫星电池，直接配套商业航天需求", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 11.02, "first_limit_up": 1795761954, "break_limit_up_times": 0}, {"code": "603859", "name": "能科科技", "price": 33.11, "change_pct": 10.0, "reason": "1、公司灵智具身智能AI训推平台面向工业场景，开发四足、轮式、人形、机械臂等七款具身形态场景应用；\n2、公司凭借工业领域经验基于开源和闭源大模型形成多行业AI Agent，与头部客户合作开展AI+智能制造 ；打造“乐系列”产品与AI融合 ，开展“灵系列”AI 新产品研究；\n3、商业航天是公司战略重点，已服务航天客户多年，并与卫星企业围绕算力及AI场景深度合作;", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.88, "first_limit_up": 1795762026, "break_limit_up_times": 0}, {"code": "688172", "name": "燕东微", "price": 37.78, "change_pct": 20.01, "reason": "国内知名的集成电路及分立器件制造和系统方案提供商，6 英寸 SiC 生产线已具备量产条件", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.89, "first_limit_up": 1795756215, "break_limit_up_times": 27}, {"code": "301391", "name": "卡莱特", "price": 68.8, "change_pct": 20.01, "reason": "公司已率先在昇腾Atlas 800 A3超节点平台完成DeepSeek V4的部署和调度，自主研发的算力调度平台能够实现跨卡、跨节点的系统级算力调度与任务管理", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 18.04, "first_limit_up": 1795749450, "break_limit_up_times": 0}, {"code": "603038", "name": "华立股份", "price": 10.91, "change_pct": 9.98, "reason": "子公司华立康茂应用鸿蒙智联技术开发智能家居产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.63, "first_limit_up": 1795755733, "break_limit_up_times": 17}, {"code": "600584", "name": "长电科技", "price": 52.58, "change_pct": 10.0, "reason": "国内封测龙头，拟投资78亿元在上海临港建设高端先进封测工厂", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.14, "first_limit_up": 1795755818, "break_limit_up_times": 2}, {"code": "688827", "name": "钶锐锶", "price": 86.84, "change_pct": 19.99, "reason": "公司自研总线型数控系统可控制多个工业机器人及设备实现复杂自动化生产，数控系统产品覆盖工业机器人、力控打磨设备等应用场景并已销售给发那科机器人等企业，全直驱数控机床亦应用于机器人行业高精密零部件的加工\n", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 39.36, "first_limit_up": 1795757726, "break_limit_up_times": 2}, {"code": "002406", "name": "远东传动", "price": 6, "change_pct": 10.09, "reason": "公司目前已建成近100余条高端智能机器人汽车传动轴生产线，产品主要应用在商用车、乘用车（包括传统燃油车、新能源汽车）等车辆以及工程机械领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.95, "first_limit_up": 1795745235, "break_limit_up_times": 1}, {"code": "603655", "name": "朗博科技", "price": 20.87, "change_pct": 10.02, "reason": "车用橡胶零部件制造商；主要产品有车用O型圈及垫圈、轮毂组件、油封、轴封等产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.54, "first_limit_up": 1795757119, "break_limit_up_times": 0}, {"code": "002636", "name": "金安国纪", "price": 51.46, "change_pct": 10.0, "reason": "国内覆铜板龙头，同时生产电子级玻纤布，第三季净利暴增超1000%", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 7.96, "first_limit_up": 1795758513, "break_limit_up_times": 1}, {"code": "000510", "name": "新金路", "price": 7.81, "change_pct": 10.0, "reason": "1、公司高纯石英砂中试正在进行中，中试阶段的纯度大于5N，5N高纯石英砂是半导体芯片制造（石英坩埚、石英器件）、光伏单晶硅拉制（石英坩埚）、高端光学器件等领域的关键材料；\n2、公司控股子公司广西有色栗木矿业主要从事钽、铌、铅、锌、铜等有色金属及非金属的采矿、选矿、冶炼业务", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.9, "first_limit_up": 1795757580, "break_limit_up_times": 1}, {"code": "603163", "name": "圣晖集成", "price": 53.76, "change_pct": 10.01, "reason": "1、公司中标8.58亿元电子厂房内装及固资项目；\n2、公司提供英诺赛科（苏州）半导体禅额眼帘洁净室工程服务，核心技术覆盖气流管理、微分子污染控制等领域，已实现量产配套", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.17, "first_limit_up": 1795755984, "break_limit_up_times": 1}, {"code": "300508", "name": "维宏股份", "price": 45.77, "change_pct": 20.01, "reason": "公司推出灵巧手专用关节驱动器，上半年汉姆电子灵巧手关节电机出货5万余台", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 13.85, "first_limit_up": 1795756539, "break_limit_up_times": 3}, {"code": "600446", "name": "金证股份", "price": 9.1, "change_pct": 10.04, "reason": "公司通过其参股的香港卓信科技（TTL）在稳定币赎回代币化基金领域构建了完整的技术解决方案，推动 RWA 在基金领域的规模化应用", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 2.67, "first_limit_up": 1795755785, "break_limit_up_times": 1}, {"code": "603918", "name": "金桥信息", "price": 8.83, "change_pct": 9.96, "reason": "1、公司依托阿里巴巴、蚂蚁集团等优质合作伙伴搭建司法大模型技术生态；\n2、公司的区块链技术实现法院数字化司法可信、保障信息安全，已在多家法院进行试点应用", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 4.13, "first_limit_up": 1795762131, "break_limit_up_times": 0}, {"code": "600498", "name": "烽火通信", "price": 27.27, "change_pct": 10.0, "reason": "公司拟与联通战新基金、湖北省引导基金等共设湖北烽火创业投资基金，围绕光通信、半导体、商业航天等新一代信息技术投资布局", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.42, "first_limit_up": 1795761187, "break_limit_up_times": 0}, {"code": "000636", "name": "风华高科", "price": 29.57, "change_pct": 10.01, "reason": "国内被动电子元件行业龙头；公司MLCC、合金电阻、大电流电感已批量导入国内头部AI服务器及机器人客户，AI算力订单充足", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 8.18, "first_limit_up": 1795758159, "break_limit_up_times": 1}, {"code": "300363", "name": "博腾股份", "price": 27.6, "change_pct": 20.0, "reason": "CDMO服务提供商；公司的原料药CDMO业务主要为客户提供化学药开发及上市过程中的一系列定制研发及生产服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.33, "first_limit_up": 1795761006, "break_limit_up_times": 14}, {"code": "603608", "name": "天创股份", "price": 14.8, "change_pct": 10.04, "reason": "公司控股股东安徽先睿为轴承企业慈兴集团全资子公司，核心业务为机器人轴承与商业航天轴承两大板块", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.23, "first_limit_up": 1795743018, "break_limit_up_times": 3}, {"code": "002565", "name": "顺灏股份", "price": 9.27, "change_pct": 9.96, "reason": "公司参股北京轨道辰光布局太空算力，其第一代试验星“辰光一号”正在开展在轨测试", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 20.27, "first_limit_up": 1795761150, "break_limit_up_times": 0}, {"code": "002642", "name": "荣联科技", "price": 9.16, "change_pct": 9.96, "reason": "企业云计算和大数据专业服务提供商；公司系华为企业级IT产品合作伙伴，在产品、服务与云等领域长期合作，面向客户提供云计算、大数据整体解决方案", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 18.04, "first_limit_up": 1795743978, "break_limit_up_times": 1}, {"code": "603667", "name": "五洲新春", "price": 48.82, "change_pct": 10.0, "reason": "公司在机器人减速器轴承领域研发成功RV减速器轴承和谐波减速器柔性轴承，其中RV减速器轴承和谐波减速器轴承分别为国内知名机器人减速器企业南高齿、来福谐波等客户送样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.31, "first_limit_up": 1795760474, "break_limit_up_times": 2}, {"code": "600345", "name": "长江通信", "price": 34.05, "change_pct": 10.02, "reason": "1、参股公司长飞光纤是世界领先的光纤预制棒、光纤及光缆供应商之一；\n2、低轨卫星通信是公司重点开拓的新行业之一，公司背靠中国信科，其在星地融合标准制定上发挥了突出的贡献，自R18开始首次实现中国在3GPPNTN的标准立项，目前已累计牵头16项，是全球牵头卫星NTN立项最多的公司", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 5.54, "first_limit_up": 1795762093, "break_limit_up_times": 0}, {"code": "603009", "name": "北特科技", "price": 45.16, "change_pct": 10.01, "reason": "1、公司根据客户需求，配合推进人形机器人用丝杠产品的样件研发工作；\n2、公司目前通过Tier one客户间接向华为问界系列车型配套供应转向器齿条、齿轮等产品，向特斯拉配套相应底盘零部件产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.41, "first_limit_up": 1795746435, "break_limit_up_times": 0}, {"code": "688485", "name": "九州一轨", "price": 70.88, "change_pct": 19.99, "reason": "1、轨道交通减振降噪行业龙头；公司收购苏州晶禧半导体100%股权事项已完成工商变更登记，依托其激光隐形切割技术向光纤及配套半导体器件加工领域延伸，核心业务包括激光隐形切割与AOI检测、分选等，已成功导入800G/1.6T光模块产线；\n2、公司成立通创九州金刚石提前布局契合国家战略的功能性金刚石蓝海市场", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 4.69, "first_limit_up": 1795747107, "break_limit_up_times": 1}, {"code": "002837", "name": "英维克", "price": 33.64, "change_pct": 10.01, "reason": "公司液冷服务器管路产品已达V0级标准，并成功取得美国UL认证，为英伟达数据中心部件提供商之一", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 4.05, "first_limit_up": 1795755987, "break_limit_up_times": 25}, {"code": "300480", "name": "光力科技", "price": 25.64, "change_pct": 19.98, "reason": "公司半导体划片机采用自主空气主轴技术，使用洁净空气运行，具备不依赖氦气的差异化优势，已在国内多家头部封测企业实现批量销售", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.1, "first_limit_up": 1795759956, "break_limit_up_times": 2}, {"code": "688498", "name": "源杰科技", "price": 704.4, "change_pct": 20.0, "reason": "公司主营业务为光芯片，CW 70mW激光器等产品实现批量交付，适用于数据中心高速场景", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.7, "first_limit_up": 1795757348, "break_limit_up_times": 6}, {"code": "603033", "name": "三维股份", "price": 5.7, "change_pct": 10.04, "reason": "公司官网显示有超高分子聚乙烯型材产品，据网络资料超高分子聚乙烯可作为机器人用腱绳材料", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.18, "first_limit_up": 1795761751, "break_limit_up_times": 0}, {"code": "000158", "name": "常山北明", "price": 15.27, "change_pct": 10.01, "reason": "1、全资子公司北明软件是华为重要的核心战略合作伙伴、华为多产品钻石级经销商；华为昇腾生态核心合作伙伴，提供软硬件一体化解决方案，完成多款软件与昇腾硬件的兼容性认证，为政府客户搭建智能办公、数据治理平台，利用昇腾算力提升数据处理与决策效率，同时参与昇腾服务器配套硬件研发，旗下拥有常山云数据中心；\n2、公司研发完成了政务服务大模型、智能知识库问答系统、大模型应用开发平台、数字人等一系列产品;", "plates": ["华为昇腾"], "limit_up_days": 2, "turnover_ratio": 1.51, "first_limit_up": 1795742700, "break_limit_up_times": 0}, {"code": "603067", "name": "振华股份", "price": 18.82, "change_pct": 9.99, "reason": "公司为全球产能最大、产品线最全的铬化学品龙头，金属铬产品在高温合金、铜基、铝基特种合金、高端焊接材料、溅射靶材等领域广泛应用，高温合金是燃气轮机的主要材料，单质铬的添加量在15%~20%之间，已通过下游连接件厂商向BE产业链间接供货", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 5.07, "first_limit_up": 1795762359, "break_limit_up_times": 0}, {"code": "002687", "name": "乔治白", "price": 6.16, "change_pct": 10.0, "reason": "中高端职业装领导者；公司主要从事“乔治白”“giuseppe”品牌的职业装以及校服产品设计研产销", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.46, "first_limit_up": 1795758408, "break_limit_up_times": 5}, {"code": "600378", "name": "昊华科技", "price": 30.02, "change_pct": 10.0, "reason": "公司是国内氟化工龙头，受上游原材料成本上升等因素影响，公司PTFE产品销售价格有所上涨", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 2.26, "first_limit_up": 1795761611, "break_limit_up_times": 3}, {"code": "688809", "name": "强一股份", "price": 259.14, "change_pct": 20.0, "reason": "公司聚焦晶圆测试核心硬件探针卡\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.04, "first_limit_up": 1795755783, "break_limit_up_times": 9}, {"code": "603256", "name": "宏和科技", "price": 70.47, "change_pct": 10.01, "reason": "公司是全球高端电子级玻璃纤维布龙头，极薄布、低介电、低CTE特种电子布技术国际领先，为AI服务器PCB核心上游材料", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 1.73, "first_limit_up": 1795758276, "break_limit_up_times": 0}, {"code": "002929", "name": "润建股份", "price": 50.33, "change_pct": 10.01, "reason": "领先的数字化智能运维（AIOps）服务商；公司为算力中心及IDC提供全生命周期一站式服务，近日签下2亿美元AI词元大单", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 10.45, "first_limit_up": 1795749912, "break_limit_up_times": 1}, {"code": "603306", "name": "华懋科技", "price": 39.61, "change_pct": 10.0, "reason": "1、国内光刻胶产业链龙头之一，目前已批量供应国内头部晶圆厂；\n2、公司拟以15.04亿元收购富创优越剩余57.84%股权，实现全资控股。标的是全球AI及算力制造产业链企业，致力于高速率光模块、高速铜缆连接器等", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.09, "first_limit_up": 1795746501, "break_limit_up_times": 0}, {"code": "000962", "name": "东方钽业", "price": 31.43, "change_pct": 10.01, "reason": "1、国内最大的钽、铌产品生产基地；AI服务器对钽电容需求的爆发式增长，25H2至今全球钽电容龙头Kemet已经宣布了三次涨价，公司电容器级钽粉全球市占率25%，电容器用钽丝全球市占率50%+，4月以来公司已针对下游钽电容客户涨价50%+，涨价已经逐渐传递至公司端；\n2、公司涂层材料已配套商业航天火箭喷管，超导铌材及铌超导腔用于可控核聚变等国家大科学装置", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 3.57, "first_limit_up": 1795758282, "break_limit_up_times": 0}, {"code": "603978", "name": "深圳新星", "price": 17.52, "change_pct": 9.98, "reason": "公司自身是全球头部铝晶粒细化剂制造商，全资子公司松岩新能源建设有5800吨/年的六氟磷酸锂生产产能，投资设立全资子公司赣州市松辉氟新材料有限公司，主要从事氟化锂、PVDF等新能源材料研产销", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 6.5, "first_limit_up": 1795758363, "break_limit_up_times": 26}, {"code": "300684", "name": "中石科技", "price": 58.42, "change_pct": 20.01, "reason": "1、中际旭创拟以55.70元/股受让公司控股股东10.47%股份，交易总价17.47亿元，成为公司持股5%以上股东；\n2、公司宜兴子公司主营产品包括液冷模组等，建立相关技术储备和产品线，为国内外多家服务器企业提供液冷等全方位的管理综合解决方案；\n3、公司VC产品在高速光模块中的市场化应用加速落地", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 14.11, "first_limit_up": 1795761654, "break_limit_up_times": 9}, {"code": "600683", "name": "京投发展", "price": 6.69, "change_pct": 10.03, "reason": "1、公司筹划收购西安奇芯光电股权，标的从事光电子器件制造；\n2、公司拟将房地产开发业务相关资产及负债转让至控股股东北京市基础设施投资有限公司，目前正开展审计、评估等工作", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.0, "first_limit_up": 1795755801, "break_limit_up_times": 24}, {"code": "002463", "name": "沪电股份", "price": 89.2, "change_pct": 10.0, "reason": "国内规模最大、技术实力最强的PCB制造商之一", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.47, "first_limit_up": 1795758399, "break_limit_up_times": 4}, {"code": "000409", "name": "云鼎科技", "price": 8.12, "change_pct": 10.03, "reason": "公司系华为全联接大会铂金合作伙伴，基于华为盘古通用模型联合打造全球首个商用的盘古矿山大模型，并在矿鸿、人工智能、矿用终端等领域启动合作", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 1.87, "first_limit_up": 1795743543, "break_limit_up_times": 0}, {"code": "000628", "name": "高新发展", "price": 49.13, "change_pct": 10.01, "reason": "公司功率半导体业务已形成IGBT、SiC、Si MOSFET全谱系产品，第七代IGBT及混合型SiC功率模块实现批量供货", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.03, "first_limit_up": 1795749390, "break_limit_up_times": 0}, {"code": "603960", "name": "克来机电", "price": 22.51, "change_pct": 10.02, "reason": "1、公司将柔性自动化装备与机器人系统应用于新能源汽车电驱、电控、功率半导体模组及汽车内饰安全件等领域；\n2、公司在光通讯领域研发的自动化组装测试装备已供货至光通讯器件生产商Finisar", "plates": ["机器人"], "limit_up_days": 6, "turnover_ratio": 23.78, "first_limit_up": 1795756203, "break_limit_up_times": 0}, {"code": "002403", "name": "爱仕达", "price": 9.92, "change_pct": 9.98, "reason": "国内炊具行业知名品牌；公司与智元机器人签署战略合作协议", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.75, "first_limit_up": 1795744467, "break_limit_up_times": 0}, {"code": "600176", "name": "中国巨石", "price": 28.42, "change_pct": 9.98, "reason": "AI服务器升级推动PCB单机价值量暴涨，电子布等上游材料价格持续上涨；公司为世界玻纤龙头，产能规模全球第一，宣布扩产电子布", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.11, "first_limit_up": 1795761871, "break_limit_up_times": 0}, {"code": "603895", "name": "天永智能", "price": 24.64, "change_pct": 10.0, "reason": "公司是智能型自动化生产线和智能型自动化装备的集成供应商，产品大多属于工业机器人范畴；公司与上海交通大学签署定位活检机器人的研制相关技术开发合同", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.99, "first_limit_up": 1795761961, "break_limit_up_times": 1}, {"code": "603297", "name": "永新光学", "price": 96.34, "change_pct": 10.0, "reason": "公司产品广泛应用于光刻设备、半导体光学量/检测设备等关键制程装备，并切入光刻机对准系统、照明系统等核心环节，在手订单快速增加", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1795755971, "break_limit_up_times": 1}, {"code": "002779", "name": "中坚科技", "price": 72.03, "change_pct": 10.0, "reason": "1、公司主营园林机械及便携式数码发电机主要应用于园林绿化、农业、家庭庭院养护作业（锯枝、修剪）及伐木造材等领域，出口占比较高；\n2、全资子公司中坚机器人落户上海马桥人工智能创新试验区，将加速构建户外一体化机器人平台", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.71, "first_limit_up": 1795760421, "break_limit_up_times": 0}, {"code": "000426", "name": "兴业银锡", "price": 20.47, "change_pct": 9.99, "reason": "1、公司主营业务为有色金属及贵金属采选与冶炼，产品有银、锡、锌、铅等有色金属；\n2、公司旗下西藏黄金拥有金矿资源，主营产品为金精粉", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 5.46, "first_limit_up": 1795761015, "break_limit_up_times": 0}, {"code": "688530", "name": "欧莱新材", "price": 43.45, "change_pct": 19.99, "reason": "国内高性能溅射靶材领域技术领先的生产商；公司主营铜靶、铝靶、钼及钼合金靶等溅射靶材", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.31, "first_limit_up": 1795759539, "break_limit_up_times": 0}, {"code": "600071", "name": "凤凰光学", "price": 13.61, "change_pct": 10.02, "reason": "中国电科旗下上市公司；公司业务方面重点聚焦光电影像传感和智能控制两大领域，光学产品已批量用于扫地机器人、工业抓取机器人、仓储配送机器人等场景", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.63, "first_limit_up": 1795760904, "break_limit_up_times": 0}, {"code": "603956", "name": "威派格", "price": 6.45, "change_pct": 10.07, "reason": "1、公司联合研发的工业四足机器人巡检方案已亮相中国城镇供水排水协会年会，搭载自研水务检测装置，可监测跑冒滴漏、有毒有害气体等九类场景，并已在绥滨县北山水厂项目实现数字孪生及大屏数字人智能体落地；\n2、公司近期发布了面向数据中心液冷领域的WDS、WDM系列立式多级离心泵等新品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.44, "first_limit_up": 1795756973, "break_limit_up_times": 0}, {"code": "688347", "name": "华虹宏力", "price": 212.4, "change_pct": 20.0, "reason": "公司位居全球纯晶圆代工企业第五位，在中国大陆企业中排名第二", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.9, "first_limit_up": 1795757156, "break_limit_up_times": 3}, {"code": "002396", "name": "星网锐捷", "price": 22, "change_pct": 10.0, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.9, "first_limit_up": 1795755981, "break_limit_up_times": 8}, {"code": "002657", "name": "中科金财", "price": 12.96, "change_pct": 10.02, "reason": "公司以人工智能解决方案、金融科技解决方案及数据中心解决方案为基础，搭建覆盖算力基础设施、AI算法、大模型、AI Agent的全栈布局，为金融机构提供数据中心及算力中心建设、改建、部署、调优、维保等综合算力服务", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 7.81, "first_limit_up": 1795745481, "break_limit_up_times": 26}, {"code": "001309", "name": "德明利", "price": 173.43, "change_pct": 10.0, "reason": "公司目前已建立了完善的存储产品矩阵，包括移动存储、固态硬盘、嵌入式存储、内存条等", "plates": ["闪存"], "limit_up_days": 1, "turnover_ratio": 9.6, "first_limit_up": 1795759206, "break_limit_up_times": 2}, {"code": "600107", "name": "*ST尔雅", "price": 4.44, "change_pct": 9.9, "reason": "公司为国内职业装行业龙头之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.97, "first_limit_up": 1795760301, "break_limit_up_times": 0}, {"code": "002903", "name": "宇环数控", "price": 20.11, "change_pct": 10.01, "reason": "公司螺旋拉床可用于机器人部分零部件加工", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.78, "first_limit_up": 1795757418, "break_limit_up_times": 4}, {"code": "002484", "name": "江海股份", "price": 31.2, "change_pct": 10.01, "reason": "国内唯一、全球少数几家在铝电解电容器、薄膜电容器、超级电容器三大类电容器同时研产销的公司，而且是品种最齐全、产业链最完整的企业", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 3.57, "first_limit_up": 1795756038, "break_limit_up_times": 1}, {"code": "688362", "name": "甬矽电子", "price": 39.16, "change_pct": 20.01, "reason": "公司聚焦中高端封装业务，全部产品基本均为QFN/DFN、Hybrid-BGA、WBLGA等中高端先进封装形式，并在系统级封装（SiP）、高密度细间距凸点倒装产品（FC类产品）等先进封装领域具有较为突出的工艺优势和技术先进性", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.63, "first_limit_up": 1795759392, "break_limit_up_times": 2}, {"code": "600246", "name": "万通发展", "price": 9.21, "change_pct": 10.04, "reason": "公司拟投资8.54亿元取得数渡科技62.98%股权，标的PCIe5.0交换芯片有望于2025年底逐步开始批量供货", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.51, "first_limit_up": 1795755666, "break_limit_up_times": 4}, {"code": "603739", "name": "蔚蓝生物", "price": 11.52, "change_pct": 10.03, "reason": "公司在猪用疫苗领域布局多款产品，其中猪伪狂犬病病毒基因缺失灭活疫苗已获新兽药证书，猪圆环-副猪-链球菌三联灭活疫苗已通过产品质量复核检验", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 4.17, "first_limit_up": 1795757067, "break_limit_up_times": 8}, {"code": "603138", "name": "海量数据", "price": 12.88, "change_pct": 9.99, "reason": "公司自研数据库Vastbase已完成与华为鲲鹏服务器、欧拉操作系统及华为云等软硬件与云平台的适配，依托鲲鹏生态打造自主数据库产品体系", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 6.25, "first_limit_up": 1795747279, "break_limit_up_times": 2}, {"code": "603220", "name": "中贝通信", "price": 15.25, "change_pct": 10.03, "reason": "1、公司是华为昇腾生态核心战略合作伙伴，加入华为根技术生态联盟，围绕昇腾、鲲鹏技术开展联合创新，与华为共建合肥智算中心并交付全栈昇腾910B集群；\n2、光通信产品和设备是公司主要的技术服务领域之一，公司有光模块产品的技术储备，目前主要生产无源光模块产品", "plates": ["华为昇腾"], "limit_up_days": 1, "turnover_ratio": 5.54, "first_limit_up": 1795743453, "break_limit_up_times": 2}, {"code": "688072", "name": "拓荆科技", "price": 547.37, "change_pct": 20.0, "reason": "公司拟定增募资46亿投入高端半导体设备产业化基地建设等项目。在披露定增预案的同时，还宣布向控股子公司拓荆键科增资，后者还将引入多家外部投资者，其中包括实控人为大基金三期的国投集新基金，这也是大基金三期成立至今首度出手半导体产业项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.09, "first_limit_up": 1795758451, "break_limit_up_times": 1}, {"code": "603955", "name": "灵动股份", "price": 28.18, "change_pct": 9.99, "reason": "1、公司宠物业务已覆盖零售及服务、智能硬件、互动体验等场景，形成“消费+服务+产品”的全业务链布局；\n2、子公司浙江深辰凯动科技的羽毛球机器人正从实验原型阶段迈向产业化", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.85, "first_limit_up": 1795756210, "break_limit_up_times": 4}, {"code": "000700", "name": "模塑科技", "price": 14.84, "change_pct": 10.01, "reason": "公司复用汽车外饰制造能力开发人形机器人外覆盖件，已与多家头部整机厂商开展对接、送样及交付", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.15, "first_limit_up": 1795744776, "break_limit_up_times": 1}, {"code": "002889", "name": "东方嘉盛", "price": 13.05, "change_pct": 10.03, "reason": "1、公司与国际头部芯片光刻机厂商合作，共同在深圳建设寄售维修保税仓库，为华南片区集成电路制造企业提供全天候快速响应的光刻机寄售维修服务；\n2、公司是国内领先的一体化供应链服务商；为客户提供包括原材料、零部件及产成品采购、订单及合同管理、进出口代理等在内的一体化供应链管理服务", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 11.61, "first_limit_up": 1795756620, "break_limit_up_times": 9}, {"code": "600536", "name": "中国软件", "price": 28.05, "change_pct": 10.0, "reason": "中国电子信息产业集团旗下，中国电子软件板块的龙头核心企业，中国软件业国家队核心成员；公司拥有完整的从操作系统等基础软件、中间件、安全产品到应用系统的业务链条，参股的麒麟软件在政务内网份额高", "plates": ["信创"], "limit_up_days": 1, "turnover_ratio": 2.67, "first_limit_up": 1795748469, "break_limit_up_times": 0}, {"code": "603687", "name": "大胜达", "price": 13.66, "change_pct": 9.98, "reason": "公司与芯瞳半导体及其原股东已于5月19日正式签署Pre-B轮增资及股权转让协议，公司以5.5亿元取得芯瞳半导体22.9831%股权，标的公司是国内专注于通用高性能图形处理器芯片设计研发与销售的先驱企业", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 6.41, "first_limit_up": 1795745141, "break_limit_up_times": 3}, {"code": "002185", "name": "华天科技", "price": 13.89, "change_pct": 9.98, "reason": "公司拟收购华羿微电100%股份，标的是国内少数集功率器件研发设计、封装测试、可靠性验证和系统解决方案等服务于一体的公司公司已掌握从低容量到大容量存储器的封装技术，实现了Nor Flash、3D NAND、DRAM产品的批量封装，与长江存储有业务合作", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.57, "first_limit_up": 1795761849, "break_limit_up_times": 0}, {"code": "001393", "name": "维通利", "price": 35.27, "change_pct": 10.01, "reason": "公司电连接产品配套数据中心电源系统、配电柜，已与西门子、施耐德、ABB、维谛技术、台达电子等客户建立稳定合作关系", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.98, "first_limit_up": 1795759221, "break_limit_up_times": 0}, {"code": "688515", "name": "裕太微", "price": 100.45, "change_pct": 20.0, "reason": "公司是国内少数实现集成以太网物理层芯片的以太网交换机芯片规模量产的企业，推出了 YT9230 系列等适用于安防、中小微企业等多场景的以太网交换芯片，发布了 YT99 系列车规级 TSN 交换芯片，相关产品可适配多领域交换机相关设备与场景的需求", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.45, "first_limit_up": 1795760842, "break_limit_up_times": 0}, {"code": "688627", "name": "精智达", "price": 208.16, "change_pct": 20.0, "reason": "公司半导体存储器件测试设备目前进展顺利，其中DRAM晶圆老化测试设备，已完成技术开发和测试等工作，进入验证阶段，DRAM测试机仍处于持续研发测试阶段", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.82, "first_limit_up": 1795755770, "break_limit_up_times": 8}, {"code": "002261", "name": "拓维信息", "price": 23.06, "change_pct": 10.02, "reason": "1、公司围绕PaaS（云计算平台）、AI、IOT（物联网）、大数据等政企数字化中的关键技术构建数字化基础平台能力，打造平台型产品；\n2、公司及旗下开鸿智谷作为开源鸿蒙核心共建单位、开源鸿蒙项目群A类捐赠人、开源鸿蒙AI Model SIG组长单位，依托基于开源鸿蒙自研的在鸿OS 3.0底层能力，近期完成了OpenClaw的深度适配与预集成，推出搭载该融合能力的AI BOX（边缘AI小站）", "plates": ["华为昇腾"], "limit_up_days": 2, "turnover_ratio": 8.0, "first_limit_up": 1795743225, "break_limit_up_times": 2}, {"code": "002025", "name": "航天电器", "price": 55.26, "change_pct": 9.99, "reason": "1、国内光通信器件行业的重点骨干企业；控股子公司江苏奥雷光电有限公司主营业务为光模块、光互连产品研制生产，产品主要应用于防务、通信、视频监控和工业控制等领域；\n2、中航科工集团旗下，航天连接器龙头，市场占比超过70%", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 2.45, "first_limit_up": 1795755600, "break_limit_up_times": 0}, {"code": "600567", "name": "山鹰国际", "price": 1.11, "change_pct": 9.9, "reason": "公司收到要约收购报告书，自然人程俊拟以1.18元/股要约收购5%股份", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 6.82, "first_limit_up": 1795742700, "break_limit_up_times": 6}, {"code": "603380", "name": "易德龙", "price": 23.71, "change_pct": 10.02, "reason": "1、公司长期是浪潮辅助板卡等产品的主要供应商，另外还生产GPU板卡，通讯下游头部服务器客户受AI需求带动订单量显著增加，公司为其提供服务器主板、整机组装等服务；\n2、公司主要产品应用于包括高端家用电器，家用智能机器人，有涉及部分机器人控制板业务，如扫地机器人控制板，是科沃斯机器人的PCBA供应商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.1, "first_limit_up": 1795762096, "break_limit_up_times": 0}, {"code": "002897", "name": "意华股份", "price": 43.66, "change_pct": 10.0, "reason": "1、国内少数实现高速连接器量产的企业之一；公司聚焦于5G、6G和光通讯模块的研发制造，具有完整自主知识产权的5GSFP、SFP+系列产品已陆续研发成功并通过关键客户各项性能测试；\n2、公司在研2X4/2X8 OSFP液冷屏蔽组件及NPC模组类产品，主要用于对连接器和光模块信号传递接触面进行散热处理，在光模块出货放量及液冷技术加速渗透背景下，前瞻布局相关产品", "plates": ["光通信", "液冷服务器"], "limit_up_days": 1, "turnover_ratio": 6.03, "first_limit_up": 1795746633, "break_limit_up_times": 0}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000820": "[行政处罚事先告知书] 神雾节能：关于收到《行政处罚事先告知书》的公告", "688225": "[行政处罚事先告知书] 亚信集团：关于公司财务总监因非本公司事项收到行政处罚事先告知书暨辞去职务的公告", "300670": "[行政处罚事先告知书] 大烨智能：关于收到《行政处罚事先告知书》的公告", "300500": "[行政处罚事先告知书] 启迪设计：关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》的公告", "301030": "[行政处罚事先告知书] *ST仕净：关于收到《行政处罚事先告知书》的公告", "688033": "[行政处罚事先告知书] *ST天宜：关于公司收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的", "000892": "[行政处罚事先告知书] 欢瑞世纪：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920249": "[行政处罚事先告知书] [临时公告]利尔达:关于公司及相关当事人收到中国证券监督管理委员会浙江监管局行政", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行"};