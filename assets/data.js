const UPDATE_TIME = "2026-06-23 02:47";
const THS_HOT = [];
const THS_EVENTS = [
  {
    "title": "日本酸素宣布上调氦气价格，涨幅平均超过30%",
    "desc": "",
    "heat": 380626,
    "direction": "氦气",
    "themes": [
      "氦气生产",
      "电子特气"
    ],
    "stocks": [
      {
        "name": "凯美特气",
        "code": "002549",
        "chg": 10.017678
      }
    ]
  },
  {
    "title": "国务院新闻办公室将于6月23日举行全链条扩大汽车消费新闻发布会",
    "desc": "",
    "heat": 241131,
    "direction": "汽车整车",
    "themes": [
      "汽车整车",
      "新能源汽车"
    ],
    "stocks": [
      {
        "name": "方盛股份",
        "code": "920662",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "“只要数据中心在建，光纤就不愁卖” 一根“黄线”搅动A股风云",
    "desc": "",
    "heat": 211316,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念",
      "MPO连接器"
    ],
    "stocks": [
      {
        "name": "特发信息",
        "code": "000070",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "英伟达宣布Vera Rubin平台采用全面液冷技术 不锈钢波纹管赛道迎来新机遇",
    "desc": "",
    "heat": 151847,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "方盛股份",
        "code": "920662",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "特朗普签令：2028年科研级量子计算机实现突破",
    "desc": "",
    "heat": 130286,
    "direction": "量子科技",
    "themes": [
      "量子科技"
    ],
    "stocks": [
      {
        "name": "国民技术",
        "code": "300077",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "“算力金属”掀起涨停潮！AI硬件刚需拉动，锡、钽、铟价格大幅走高",
    "desc": "",
    "heat": 51915,
    "direction": "算力金属",
    "themes": [
      "金属钨",
      "金属钼",
      "金属铟",
      "金属铜",
      "金属锡",
      "金属锗",
      "金属镓",
      "金属锆"
    ],
    "stocks": [
      {
        "name": "东江环保",
        "code": "002672",
        "chg": 10.133333
      }
    ]
  },
  {
    "title": "伊朗央行行长：伊朗资产解冻有“显著进展”",
    "desc": "",
    "heat": 20000,
    "direction": "美伊战争/战后重建",
    "themes": [
      "战后重建",
      "白银",
      "黄金概念",
      "航运概念"
    ],
    "stocks": [
      {
        "name": "东江环保",
        "code": "002672",
        "chg": 10.133333
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "炭黑",
    "change": "+4.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "辅助生殖",
    "change": "+4.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+4.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+4.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+4.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+3.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+3.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化学原料药",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+3.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+3.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+3.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+3.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "流感",
    "change": "+3.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "天津自贸区",
    "change": "+3.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中药",
    "change": "+3.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "幽门螺杆菌概念",
    "change": "+3.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+3.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "异丙醇",
    "change": "+3.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "横琴新区",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5843,
    "price": "6.90",
    "change": "-0.43",
    "market_id": "33",
    "circulate_market_value": "244033230000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 1.96
      },
      {
        "name": "折叠屏",
        "change_pct": -0.35
      },
      {
        "name": "手机产业链",
        "change_pct": 0.24
      },
      {
        "name": "超高清视频",
        "change_pct": 1.04
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.11
      },
      {
        "name": "半导体",
        "change_pct": 1.69
      },
      {
        "name": "人工智能",
        "change_pct": 0.67
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.77
      },
      {
        "name": "VR&AR",
        "change_pct": 0.6
      },
      {
        "name": "OLED",
        "change_pct": 1.07
      },
      {
        "name": "京津冀",
        "change_pct": 1.08
      },
      {
        "name": "物联网",
        "change_pct": 1.06
      },
      {
        "name": "指纹识别",
        "change_pct": 0.37
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.5
      },
      {
        "name": "白马股",
        "change_pct": -0.39
      },
      {
        "name": "智能制造",
        "change_pct": 0.94
      },
      {
        "name": "小米概念股",
        "change_pct": 0.69
      },
      {
        "name": "国产芯片",
        "change_pct": 1.58
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.76
      },
      {
        "name": "全息概念",
        "change_pct": 1.48
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.55
      },
      {
        "name": "MicroLED",
        "change_pct": 0.91
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.53
      },
      {
        "name": "智能手表",
        "change_pct": 1.08
      },
      {
        "name": "MiniLED",
        "change_pct": 0.45
      },
      {
        "name": "传感器",
        "change_pct": 0.92
      },
      {
        "name": "大硅片",
        "change_pct": -0.34
      },
      {
        "name": "AI PC",
        "change_pct": 0.21
      },
      {
        "name": "华为产业链",
        "change_pct": 0.29
      },
      {
        "name": "回购",
        "change_pct": 0.57
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.4
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.57
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 7,
    "hot_rank_chg": 12,
    "stock_cnt": 5843,
    "price": "8.38",
    "change": "0.12",
    "market_id": "17",
    "circulate_market_value": "103879227000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.37
      },
      {
        "name": "核电",
        "change_pct": 0.4
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.14
      },
      {
        "name": "水电",
        "change_pct": -0.06
      },
      {
        "name": "火电",
        "change_pct": -0.14
      },
      {
        "name": "光伏",
        "change_pct": -0.81
      },
      {
        "name": "风电",
        "change_pct": 0.16
      },
      {
        "name": "国企改革",
        "change_pct": 0.86
      },
      {
        "name": "算电协同",
        "change_pct": -0.6
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 24,
    "hot_rank_chg": -6,
    "stock_cnt": 5843,
    "price": "8.29",
    "change": "-2.47",
    "market_id": "33",
    "circulate_market_value": "13477001000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.21
      },
      {
        "name": "电竞",
        "change_pct": 0.17
      },
      {
        "name": "手游",
        "change_pct": -0.01
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "人工智能",
        "change_pct": 0.67
      },
      {
        "name": "游戏",
        "change_pct": -1.69
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.6
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.51
      },
      {
        "name": "快手概念股",
        "change_pct": -1.04
      },
      {
        "name": "元宇宙",
        "change_pct": -0.82
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.1
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.22
      },
      {
        "name": "web3.0",
        "change_pct": -0.01
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.2
      },
      {
        "name": "数据要素",
        "change_pct": 0.45
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.21
      },
      {
        "name": "AI营销",
        "change_pct": -1.08
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.33
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.4
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.01
      },
      {
        "name": "人形机器人",
        "change_pct": 0.28
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.0
      },
      {
        "name": "多模态",
        "change_pct": -0.53
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -0.25
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.98
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.18
      }
    ]
  },
  {
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 31,
    "hot_rank_chg": 53,
    "stock_cnt": 5843,
    "price": "7.19",
    "change": "-9.33",
    "market_id": "33",
    "circulate_market_value": "80118095000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -6.74
      },
      {
        "name": "锂电池",
        "change_pct": -0.72
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.43
      },
      {
        "name": "有色 · 铜",
        "change_pct": -4.09
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -6.42
      },
      {
        "name": "有色金属",
        "change_pct": -1.72
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.18
      },
      {
        "name": "人民币升值受益",
        "change_pct": -0.65
      },
      {
        "name": "硫酸",
        "change_pct": -2.03
      },
      {
        "name": "国企改革",
        "change_pct": 0.86
      },
      {
        "name": "白银",
        "change_pct": -5.04
      },
      {
        "name": "有色 · 镍",
        "change_pct": -4.36
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 52,
    "hot_rank_chg": 5,
    "stock_cnt": 5843,
    "price": "10.55",
    "change": "-0.28",
    "market_id": "17",
    "circulate_market_value": "31379722000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.68
      },
      {
        "name": "禽流感",
        "change_pct": 2.48
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -6.42
      },
      {
        "name": "农药",
        "change_pct": 0.57
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": 1.05
      },
      {
        "name": "参股基金",
        "change_pct": 2.34
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -2.71
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 54,
    "hot_rank_chg": -13,
    "stock_cnt": 5843,
    "price": "4.08",
    "change": "-3.09",
    "market_id": "33",
    "circulate_market_value": "8173778900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 0.24
      },
      {
        "name": "数字孪生",
        "change_pct": 0.52
      },
      {
        "name": "深圳本地股",
        "change_pct": 1.83
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "人工智能",
        "change_pct": 0.67
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.77
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.11
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.71
      },
      {
        "name": "人脸识别",
        "change_pct": 0.73
      },
      {
        "name": "智慧停车",
        "change_pct": 1.44
      },
      {
        "name": "物联网",
        "change_pct": 1.06
      },
      {
        "name": "大数据",
        "change_pct": 0.54
      },
      {
        "name": "智慧城市",
        "change_pct": 1.11
      },
      {
        "name": "雄安新区",
        "change_pct": 1.23
      },
      {
        "name": "机器人",
        "change_pct": 0.72
      },
      {
        "name": "数字经济",
        "change_pct": 0.6
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.43
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.51
      },
      {
        "name": "建筑节能",
        "change_pct": 1.76
      },
      {
        "name": "旧改",
        "change_pct": 1.63
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.55
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.11
      },
      {
        "name": "华为产业链",
        "change_pct": 0.29
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 2.96
      },
      {
        "name": "区块链",
        "change_pct": 0.39
      }
    ]
  },
  {
    "code": "000783",
    "name": "长江证券",
    "hot_rank": 67,
    "hot_rank_chg": 114,
    "stock_cnt": 5843,
    "price": "9.46",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "52314490000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "券商",
    "xgb_concepts": [
      {
        "name": "期货概念",
        "change_pct": 1.02
      },
      {
        "name": "券商",
        "change_pct": 2.13
      },
      {
        "name": "大金融",
        "change_pct": 1.24
      },
      {
        "name": "参股基金",
        "change_pct": 2.34
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 78,
    "hot_rank_chg": 44,
    "stock_cnt": 5843,
    "price": "4.95",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "5113032200.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.68
      },
      {
        "name": "锂电池",
        "change_pct": -0.72
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.44
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.98
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.18
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 3.05
      }
    ]
  },
  {
    "code": "600909",
    "name": "华安证券",
    "hot_rank": 79,
    "hot_rank_chg": 190,
    "stock_cnt": 5843,
    "price": "10.47",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "52603471000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "证券",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 1.0
      },
      {
        "name": "期货概念",
        "change_pct": 1.02
      },
      {
        "name": "券商",
        "change_pct": 2.13
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.43
      },
      {
        "name": "大金融",
        "change_pct": 1.24
      },
      {
        "name": "参股基金",
        "change_pct": 2.34
      },
      {
        "name": "国企改革",
        "change_pct": 0.86
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 82,
    "hot_rank_chg": 258,
    "stock_cnt": 5843,
    "price": "5.29",
    "change": "-1.49",
    "market_id": "33",
    "circulate_market_value": "30971884000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.34
      },
      {
        "name": "人工智能",
        "change_pct": 0.67
      },
      {
        "name": "水利",
        "change_pct": 1.24
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.08
      },
      {
        "name": "大数据",
        "change_pct": 0.54
      },
      {
        "name": "园林",
        "change_pct": 2.2
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.69
      },
      {
        "name": "数字经济",
        "change_pct": 0.6
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.51
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.55
      },
      {
        "name": "第三代半导体",
        "change_pct": 1.45
      },
      {
        "name": "快手概念股",
        "change_pct": -1.04
      },
      {
        "name": "IGBT",
        "change_pct": 2.95
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.1
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.2
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.21
      },
      {
        "name": "氮化镓",
        "change_pct": 1.09
      },
      {
        "name": "AI营销",
        "change_pct": -1.08
      },
      {
        "name": "多模态",
        "change_pct": -0.53
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.38
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.18
      },
      {
        "name": "区块链",
        "change_pct": 0.39
      }
    ]
  },
  {
    "code": "600497",
    "name": "驰宏锌锗",
    "hot_rank": 87,
    "hot_rank_chg": -32,
    "stock_cnt": 5843,
    "price": "11.60",
    "change": "2.56",
    "market_id": "17",
    "circulate_market_value": "58468414000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.37
      },
      {
        "name": "军民融合",
        "change_pct": -0.38
      },
      {
        "name": "有色 · 锑",
        "change_pct": -3.53
      },
      {
        "name": "有色 · 钼",
        "change_pct": -5.11
      },
      {
        "name": "有色 · 锌",
        "change_pct": -3.7
      },
      {
        "name": "有色金属",
        "change_pct": -1.72
      },
      {
        "name": "军工",
        "change_pct": -0.27
      },
      {
        "name": "硫酸",
        "change_pct": -2.03
      },
      {
        "name": "国企改革",
        "change_pct": 0.86
      },
      {
        "name": "白银",
        "change_pct": -5.04
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.11
      },
      {
        "name": "光纤概念",
        "change_pct": 1.4
      },
      {
        "name": "有色 · 铋",
        "change_pct": 3.32
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600172", "name": "黄河旋风", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5843, "price": "16.95", "change": "9.99", "market_id": "17", "circulate_market_value": "21632535000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "培育钻石"}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5843, "price": "6.90", "change": "-0.43", "market_id": "33", "circulate_market_value": "244033230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 1.96}, {"name": "折叠屏", "change_pct": -0.35}, {"name": "手机产业链", "change_pct": 0.24}, {"name": "超高清视频", "change_pct": 1.04}, {"name": "苹果产业链", "change_pct": 0.11}, {"name": "半导体", "change_pct": 1.69}, {"name": "人工智能", "change_pct": 0.67}, {"name": "互联网医疗", "change_pct": 1.77}, {"name": "VR&AR", "change_pct": 0.6}, {"name": "OLED", "change_pct": 1.07}, {"name": "京津冀", "change_pct": 1.08}, {"name": "物联网", "change_pct": 1.06}, {"name": "指纹识别", "change_pct": 0.37}, {"name": "汽车零部件", "change_pct": 1.5}, {"name": "白马股", "change_pct": -0.39}, {"name": "智能制造", "change_pct": 0.94}, {"name": "小米概念股", "change_pct": 0.69}, {"name": "国产芯片", "change_pct": 1.58}, {"name": "液晶面板/LCD", "change_pct": 0.76}, {"name": "全息概念", "change_pct": 1.48}, {"name": "理想汽车概念股", "change_pct": 1.55}, {"name": "MicroLED", "change_pct": 0.91}, {"name": "钙钛矿电池", "change_pct": -1.53}, {"name": "智能手表", "change_pct": 1.08}, {"name": "MiniLED", "change_pct": 0.45}, {"name": "传感器", "change_pct": 0.92}, {"name": "大硅片", "change_pct": -0.34}, {"name": "AI PC", "change_pct": 0.21}, {"name": "华为产业链", "change_pct": 0.29}, {"name": "回购", "change_pct": 0.57}, {"name": "智能眼镜/MR头显", "change_pct": 0.4}, {"name": "玻璃基板封装", "change_pct": -0.57}]}, {"code": "600584", "name": "长电科技", "hot_rank": 3, "hot_rank_chg": -2, "stock_cnt": 5843, "price": "89.46", "change": "-1.94", "market_id": "17", "circulate_market_value": "160081030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 4, "hot_rank_chg": 9, "stock_cnt": 5843, "price": "63.75", "change": "6.91", "market_id": "17", "circulate_market_value": "217575540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 5, "hot_rank_chg": 4, "stock_cnt": 5843, "price": "121.30", "change": "0.97", "market_id": "17", "circulate_market_value": "296600470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 6, "hot_rank_chg": 36, "stock_cnt": 5843, "price": "82.13", "change": "6.25", "market_id": "33", "circulate_market_value": "92844528000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 7, "hot_rank_chg": 12, "stock_cnt": 5843, "price": "8.38", "change": "0.12", "market_id": "17", "circulate_market_value": "103879227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.37}, {"name": "核电", "change_pct": 0.4}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "电力体制改革", "change_pct": 0.14}, {"name": "水电", "change_pct": -0.06}, {"name": "火电", "change_pct": -0.14}, {"name": "光伏", "change_pct": -0.81}, {"name": "风电", "change_pct": 0.16}, {"name": "国企改革", "change_pct": 0.86}, {"name": "算电协同", "change_pct": -0.6}]}, {"code": "600206", "name": "有研新材", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5843, "price": "49.33", "change": "5.50", "market_id": "17", "circulate_market_value": "41760476000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 9, "hot_rank_chg": -3, "stock_cnt": 5843, "price": "42.35", "change": "-0.73", "market_id": "33", "circulate_market_value": "45685797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 10, "hot_rank_chg": 6, "stock_cnt": 5843, "price": "20.21", "change": "-1.12", "market_id": "33", "circulate_market_value": "67150792000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 11, "hot_rank_chg": -4, "stock_cnt": 5843, "price": "21.94", "change": "-2.79", "market_id": "17", "circulate_market_value": "45888435000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 12, "hot_rank_chg": 3, "stock_cnt": 5843, "price": "21.40", "change": "2.10", "market_id": "33", "circulate_market_value": "285894060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300085", "name": "银之杰", "hot_rank": 13, "hot_rank_chg": 41, "stock_cnt": 5843, "price": "38.82", "change": "20.00", "market_id": "33", "circulate_market_value": "25311139000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "开盘啦实控人任董事长"}, {"code": "600703", "name": "三安光电", "hot_rank": 14, "hot_rank_chg": -9, "stock_cnt": 5843, "price": "20.40", "change": "5.75", "market_id": "17", "circulate_market_value": "101775982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 15, "hot_rank_chg": -3, "stock_cnt": 5843, "price": "114.37", "change": "3.52", "market_id": "33", "circulate_market_value": "74687684000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 16, "hot_rank_chg": 6, "stock_cnt": 5843, "price": "570.58", "change": "10.00", "market_id": "17", "circulate_market_value": "231848520000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "空芯光纤"}, {"code": "000636", "name": "风华高科", "hot_rank": 17, "hot_rank_chg": 7, "stock_cnt": 5843, "price": "70.51", "change": "-3.38", "market_id": "33", "circulate_market_value": "81580994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002297", "name": "博云新材", "hot_rank": 18, "hot_rank_chg": 2, "stock_cnt": 5843, "price": "32.23", "change": "3.30", "market_id": "33", "circulate_market_value": "18471168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 19, "hot_rank_chg": 21, "stock_cnt": 5843, "price": "15.44", "change": "-9.97", "market_id": "17", "circulate_market_value": "26791194000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 20, "hot_rank_chg": 29, "stock_cnt": 5843, "price": "171.59", "change": "-7.00", "market_id": "17", "circulate_market_value": "410872520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 21, "hot_rank_chg": 2, "stock_cnt": 5843, "price": "202.73", "change": "4.37", "market_id": "17", "circulate_market_value": "52310625000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 22, "hot_rank_chg": 3, "stock_cnt": 5843, "price": "61.55", "change": "5.43", "market_id": "17", "circulate_market_value": "246393070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 23, "hot_rank_chg": -15, "stock_cnt": 5843, "price": "107.76", "change": "-0.53", "market_id": "33", "circulate_market_value": "156567230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 24, "hot_rank_chg": -6, "stock_cnt": 5843, "price": "8.29", "change": "-2.47", "market_id": "33", "circulate_market_value": "13477001000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.21}, {"name": "电竞", "change_pct": 0.17}, {"name": "手游", "change_pct": -0.01}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "人工智能", "change_pct": 0.67}, {"name": "游戏", "change_pct": -1.69}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.6}, {"name": "腾讯概念股", "change_pct": 0.51}, {"name": "快手概念股", "change_pct": -1.04}, {"name": "元宇宙", "change_pct": -0.82}, {"name": "虚拟数字人", "change_pct": 0.1}, {"name": "东数西算/算力", "change_pct": 0.22}, {"name": "web3.0", "change_pct": -0.01}, {"name": "AIGC概念", "change_pct": -0.2}, {"name": "数据要素", "change_pct": 0.45}, {"name": "字节跳动概念股", "change_pct": -0.21}, {"name": "AI营销", "change_pct": -1.08}, {"name": "ChatGPT", "change_pct": -0.33}, {"name": "智能眼镜/MR头显", "change_pct": 0.4}, {"name": "人工智能大模型", "change_pct": 0.01}, {"name": "人形机器人", "change_pct": 0.28}, {"name": "短剧/互动影游", "change_pct": 0.0}, {"name": "多模态", "change_pct": -0.53}, {"name": "Sora/AI视频", "change_pct": -0.25}, {"name": "IP经济/谷子经济", "change_pct": 0.98}, {"name": "小红书概念股", "change_pct": -1.18}]}, {"code": "002384", "name": "东山精密", "hot_rank": 25, "hot_rank_chg": 25, "stock_cnt": 5843, "price": "261.60", "change": "-3.31", "market_id": "33", "circulate_market_value": "362661760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 26, "hot_rank_chg": 0, "stock_cnt": 5843, "price": "20.04", "change": "-7.44", "market_id": "17", "circulate_market_value": "349915280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 27, "hot_rank_chg": 49, "stock_cnt": 5843, "price": "65.97", "change": "3.56", "market_id": "17", "circulate_market_value": "96447797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 28, "hot_rank_chg": 268, "stock_cnt": 5843, "price": "23.19", "change": "10.01", "market_id": "33", "circulate_market_value": "10489736800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力"}, {"code": "600460", "name": "士兰微", "hot_rank": 29, "hot_rank_chg": 16, "stock_cnt": 5843, "price": "47.96", "change": "7.05", "market_id": "17", "circulate_market_value": "79808886000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 30, "hot_rank_chg": 8, "stock_cnt": 5843, "price": "76.55", "change": "-2.95", "market_id": "17", "circulate_market_value": "1519065300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000630", "name": "铜陵有色", "hot_rank": 31, "hot_rank_chg": 53, "stock_cnt": 5843, "price": "7.19", "change": "-9.33", "market_id": "33", "circulate_market_value": "80118095000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -6.74}, {"name": "锂电池", "change_pct": -0.72}, {"name": "安徽国企改革", "change_pct": 0.43}, {"name": "有色 · 铜", "change_pct": -4.09}, {"name": "铜箔/覆铜板", "change_pct": -6.42}, {"name": "有色金属", "change_pct": -1.72}, {"name": "新能源汽车", "change_pct": 0.18}, {"name": "人民币升值受益", "change_pct": -0.65}, {"name": "硫酸", "change_pct": -2.03}, {"name": "国企改革", "change_pct": 0.86}, {"name": "白银", "change_pct": -5.04}, {"name": "有色 · 镍", "change_pct": -4.36}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 32, "hot_rank_chg": -22, "stock_cnt": 5843, "price": "677.72", "change": "-1.74", "market_id": "17", "circulate_market_value": "453050350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 33, "hot_rank_chg": -1, "stock_cnt": 5843, "price": "68.94", "change": "-1.82", "market_id": "17", "circulate_market_value": "73942656000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000070", "name": "特发信息", "hot_rank": 34, "hot_rank_chg": 48, "stock_cnt": 5843, "price": "25.08", "change": "10.00", "market_id": "33", "circulate_market_value": "21486714000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "MPO光连接器"}, {"code": "600353", "name": "旭光电子", "hot_rank": 35, "hot_rank_chg": -24, "stock_cnt": 5843, "price": "49.32", "change": "6.73", "market_id": "17", "circulate_market_value": "40876966000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600392", "name": "盛和资源", "hot_rank": 36, "hot_rank_chg": -15, "stock_cnt": 5843, "price": "32.49", "change": "-5.77", "market_id": "17", "circulate_market_value": "56949335000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 37, "hot_rank_chg": -6, "stock_cnt": 5843, "price": "37.46", "change": "3.62", "market_id": "17", "circulate_market_value": "83136954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 38, "hot_rank_chg": 71, "stock_cnt": 5843, "price": "145.12", "change": "10.00", "market_id": "33", "circulate_market_value": "138840280000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光纤预制棒"}, {"code": "605589", "name": "圣泉集团", "hot_rank": 39, "hot_rank_chg": 23, "stock_cnt": 5843, "price": "66.89", "change": "-9.02", "market_id": "17", "circulate_market_value": "56583522000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002171", "name": "楚江新材", "hot_rank": 40, "hot_rank_chg": -6, "stock_cnt": 5843, "price": "15.30", "change": "-6.88", "market_id": "33", "circulate_market_value": "24690244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 41, "hot_rank_chg": 7, "stock_cnt": 5843, "price": "56.00", "change": "-10.00", "market_id": "17", "circulate_market_value": "18030498000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 42, "hot_rank_chg": -3, "stock_cnt": 5843, "price": "86.48", "change": "4.75", "market_id": "17", "circulate_market_value": "109969824000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 43, "hot_rank_chg": 74, "stock_cnt": 5843, "price": "70.87", "change": "3.61", "market_id": "33", "circulate_market_value": "517459290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 44, "hot_rank_chg": -16, "stock_cnt": 5843, "price": "47.32", "change": "1.37", "market_id": "33", "circulate_market_value": "74488261000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603890", "name": "春秋电子", "hot_rank": 45, "hot_rank_chg": 93, "stock_cnt": 5843, "price": "28.54", "change": "2.96", "market_id": "17", "circulate_market_value": "12752544100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 46, "hot_rank_chg": 86, "stock_cnt": 5843, "price": "13.64", "change": "10.00", "market_id": "17", "circulate_market_value": "48935815000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基板封装"}, {"code": "001896", "name": "豫能控股", "hot_rank": 47, "hot_rank_chg": 127, "stock_cnt": 5843, "price": "20.19", "change": "1.92", "market_id": "33", "circulate_market_value": "30805525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 48, "hot_rank_chg": 10, "stock_cnt": 5843, "price": "34.90", "change": "2.59", "market_id": "33", "circulate_market_value": "41035234000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 49, "hot_rank_chg": 17, "stock_cnt": 5843, "price": "170.32", "change": "-0.99", "market_id": "17", "circulate_market_value": "38267265000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 50, "hot_rank_chg": 3, "stock_cnt": 5843, "price": "70.86", "change": "-0.55", "market_id": "33", "circulate_market_value": "107526664000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 51, "hot_rank_chg": 36, "stock_cnt": 5843, "price": "14.99", "change": "4.10", "market_id": "17", "circulate_market_value": "26819183000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 52, "hot_rank_chg": 5, "stock_cnt": 5843, "price": "10.55", "change": "-0.28", "market_id": "17", "circulate_market_value": "31379722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.68}, {"name": "禽流感", "change_pct": 2.48}, {"name": "铜箔/覆铜板", "change_pct": -6.42}, {"name": "农药", "change_pct": 0.57}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": 1.05}, {"name": "参股基金", "change_pct": 2.34}, {"name": "PET复合铜箔", "change_pct": -2.71}]}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 53, "hot_rank_chg": 55, "stock_cnt": 5843, "price": "109.97", "change": "-2.67", "market_id": "33", "circulate_market_value": "253962810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 54, "hot_rank_chg": -13, "stock_cnt": 5843, "price": "4.08", "change": "-3.09", "market_id": "33", "circulate_market_value": "8173778900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": 0.24}, {"name": "数字孪生", "change_pct": 0.52}, {"name": "深圳本地股", "change_pct": 1.83}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "人工智能", "change_pct": 0.67}, {"name": "互联网医疗", "change_pct": 1.77}, {"name": "云计算数据中心", "change_pct": 0.11}, {"name": "高铁轨交", "change_pct": 0.71}, {"name": "人脸识别", "change_pct": 0.73}, {"name": "智慧停车", "change_pct": 1.44}, {"name": "物联网", "change_pct": 1.06}, {"name": "大数据", "change_pct": 0.54}, {"name": "智慧城市", "change_pct": 1.11}, {"name": "雄安新区", "change_pct": 1.23}, {"name": "机器人", "change_pct": 0.72}, {"name": "数字经济", "change_pct": 0.6}, {"name": "阿里巴巴概念股", "change_pct": 0.43}, {"name": "腾讯概念股", "change_pct": 0.51}, {"name": "建筑节能", "change_pct": 1.76}, {"name": "旧改", "change_pct": 1.63}, {"name": "医疗信息化", "change_pct": 1.55}, {"name": "新冠病毒防治", "change_pct": 2.11}, {"name": "华为产业链", "change_pct": 0.29}, {"name": "医疗耗材供应链SPD", "change_pct": 2.96}, {"name": "区块链", "change_pct": 0.39}]}, {"code": "002579", "name": "中京电子", "hot_rank": 55, "hot_rank_chg": -4, "stock_cnt": 5843, "price": "20.06", "change": "-5.16", "market_id": "33", "circulate_market_value": "11697408500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001696", "name": "宗申动力", "hot_rank": 56, "hot_rank_chg": 119, "stock_cnt": 5843, "price": "21.82", "change": "-9.20", "market_id": "33", "circulate_market_value": "19450309000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 57, "hot_rank_chg": 79, "stock_cnt": 5843, "price": "15.76", "change": "-3.84", "market_id": "17", "circulate_market_value": "23209859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601958", "name": "金钼股份", "hot_rank": 58, "hot_rank_chg": -14, "stock_cnt": 5843, "price": "29.03", "change": "-4.73", "market_id": "17", "circulate_market_value": "93668326000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 59, "hot_rank_chg": 21, "stock_cnt": 5843, "price": "177.36", "change": "-9.74", "market_id": "33", "circulate_market_value": "147034200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 60, "hot_rank_chg": 14, "stock_cnt": 5843, "price": "38.18", "change": "2.69", "market_id": "33", "circulate_market_value": "29880033000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000811", "name": "冰轮环境", "hot_rank": 61, "hot_rank_chg": -31, "stock_cnt": 5843, "price": "43.39", "change": "-1.81", "market_id": "33", "circulate_market_value": "42452589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 62, "hot_rank_chg": 9, "stock_cnt": 5843, "price": "49.75", "change": "-6.66", "market_id": "33", "circulate_market_value": "75517039000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600111", "name": "北方稀土", "hot_rank": 63, "hot_rank_chg": 12, "stock_cnt": 5843, "price": "51.20", "change": "-5.45", "market_id": "17", "circulate_market_value": "185091370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 64, "hot_rank_chg": -27, "stock_cnt": 5843, "price": "54.64", "change": "-2.29", "market_id": "33", "circulate_market_value": "82452362000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 65, "hot_rank_chg": 7, "stock_cnt": 5843, "price": "143.78", "change": "-1.02", "market_id": "33", "circulate_market_value": "276461690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 66, "hot_rank_chg": -23, "stock_cnt": 5843, "price": "93.54", "change": "-5.43", "market_id": "33", "circulate_market_value": "79843627000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000783", "name": "长江证券", "hot_rank": 67, "hot_rank_chg": 114, "stock_cnt": 5843, "price": "9.46", "change": "10.00", "market_id": "33", "circulate_market_value": "52314490000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "券商", "xgb_concepts": [{"name": "期货概念", "change_pct": 1.02}, {"name": "券商", "change_pct": 2.13}, {"name": "大金融", "change_pct": 1.24}, {"name": "参股基金", "change_pct": 2.34}]}, {"code": "603002", "name": "宏昌电子", "hot_rank": 68, "hot_rank_chg": -51, "stock_cnt": 5843, "price": "23.84", "change": "-8.10", "market_id": "17", "circulate_market_value": "27036432000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 69, "hot_rank_chg": 25, "stock_cnt": 5843, "price": "54.01", "change": "0.37", "market_id": "33", "circulate_market_value": "268413500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600549", "name": "厦门钨业", "hot_rank": 70, "hot_rank_chg": -34, "stock_cnt": 5843, "price": "89.36", "change": "-5.44", "market_id": "17", "circulate_market_value": "138859360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 71, "hot_rank_chg": -36, "stock_cnt": 5843, "price": "48.00", "change": "-1.09", "market_id": "17", "circulate_market_value": "129587812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601179", "name": "中国西电", "hot_rank": 72, "hot_rank_chg": -43, "stock_cnt": 5843, "price": "16.60", "change": "-1.13", "market_id": "17", "circulate_market_value": "85089647000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 74, "hot_rank_chg": 16, "stock_cnt": 5843, "price": "168.50", "change": "-3.53", "market_id": "33", "circulate_market_value": "169340080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 75, "hot_rank_chg": 14, "stock_cnt": 5843, "price": "73.82", "change": "-7.53", "market_id": "17", "circulate_market_value": "74571705000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300179", "name": "四方达", "hot_rank": 76, "hot_rank_chg": -29, "stock_cnt": 5843, "price": "59.02", "change": "2.64", "market_id": "33", "circulate_market_value": "22064931000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 77, "hot_rank_chg": 340, "stock_cnt": 5843, "price": "18.67", "change": "10.02", "market_id": "33", "circulate_market_value": "12926352400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电子特气"}, {"code": "002141", "name": "贤丰控股", "hot_rank": 78, "hot_rank_chg": 44, "stock_cnt": 5843, "price": "4.95", "change": "10.00", "market_id": "33", "circulate_market_value": "5113032200.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.68}, {"name": "锂电池", "change_pct": -0.72}, {"name": "ST摘帽", "change_pct": 2.44}, {"name": "粤港澳大湾区", "change_pct": 1.98}, {"name": "新能源汽车", "change_pct": 0.18}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 3.05}]}, {"code": "600909", "name": "华安证券", "hot_rank": 79, "hot_rank_chg": 190, "stock_cnt": 5843, "price": "10.47", "change": "9.98", "market_id": "17", "circulate_market_value": "52603471000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "证券", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 1.0}, {"name": "期货概念", "change_pct": 1.02}, {"name": "券商", "change_pct": 2.13}, {"name": "安徽国企改革", "change_pct": 0.43}, {"name": "大金融", "change_pct": 1.24}, {"name": "参股基金", "change_pct": 2.34}, {"name": "国企改革", "change_pct": 0.86}]}, {"code": "002167", "name": "东方锆业", "hot_rank": 80, "hot_rank_chg": -53, "stock_cnt": 5843, "price": "19.51", "change": "9.98", "market_id": "33", "circulate_market_value": "14802490000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "锆材料"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 81, "hot_rank_chg": 63, "stock_cnt": 5843, "price": "28.57", "change": "-6.14", "market_id": "17", "circulate_market_value": "588593230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 82, "hot_rank_chg": 258, "stock_cnt": 5843, "price": "5.29", "change": "-1.49", "market_id": "33", "circulate_market_value": "30971884000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.34}, {"name": "人工智能", "change_pct": 0.67}, {"name": "水利", "change_pct": 1.24}, {"name": "直播/短视频", "change_pct": 0.08}, {"name": "大数据", "change_pct": 0.54}, {"name": "园林", "change_pct": 2.2}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.69}, {"name": "数字经济", "change_pct": 0.6}, {"name": "腾讯概念股", "change_pct": 0.51}, {"name": "理想汽车概念股", "change_pct": 1.55}, {"name": "第三代半导体", "change_pct": 1.45}, {"name": "快手概念股", "change_pct": -1.04}, {"name": "IGBT", "change_pct": 2.95}, {"name": "虚拟数字人", "change_pct": 0.1}, {"name": "AIGC概念", "change_pct": -0.2}, {"name": "字节跳动概念股", "change_pct": -0.21}, {"name": "氮化镓", "change_pct": 1.09}, {"name": "AI营销", "change_pct": -1.08}, {"name": "多模态", "change_pct": -0.53}, {"name": "液冷服务器", "change_pct": 0.38}, {"name": "小红书概念股", "change_pct": -1.18}, {"name": "区块链", "change_pct": 0.39}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 83, "hot_rank_chg": -23, "stock_cnt": 5843, "price": "271.08", "change": "-1.81", "market_id": "33", "circulate_market_value": "211577490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 84, "hot_rank_chg": -20, "stock_cnt": 5843, "price": "24.44", "change": "9.99", "market_id": "17", "circulate_market_value": "24194620000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "钨钽铌资产注入"}, {"code": "300346", "name": "南大光电", "hot_rank": 85, "hot_rank_chg": 16, "stock_cnt": 5843, "price": "73.59", "change": "3.96", "market_id": "33", "circulate_market_value": "48280867000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600030", "name": "中信证券", "hot_rank": 86, "hot_rank_chg": -17, "stock_cnt": 5843, "price": "28.76", "change": "0.42", "market_id": "17", "circulate_market_value": "350197610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600497", "name": "驰宏锌锗", "hot_rank": 87, "hot_rank_chg": -32, "stock_cnt": 5843, "price": "11.60", "change": "2.56", "market_id": "17", "circulate_market_value": "58468414000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.37}, {"name": "军民融合", "change_pct": -0.38}, {"name": "有色 · 锑", "change_pct": -3.53}, {"name": "有色 · 钼", "change_pct": -5.11}, {"name": "有色 · 锌", "change_pct": -3.7}, {"name": "有色金属", "change_pct": -1.72}, {"name": "军工", "change_pct": -0.27}, {"name": "硫酸", "change_pct": -2.03}, {"name": "国企改革", "change_pct": 0.86}, {"name": "白银", "change_pct": -5.04}, {"name": "新冠病毒防治", "change_pct": 2.11}, {"name": "光纤概念", "change_pct": 1.4}, {"name": "有色 · 铋", "change_pct": 3.32}]}, {"code": "002378", "name": "章源钨业", "hot_rank": 88, "hot_rank_chg": 8, "stock_cnt": 5843, "price": "37.80", "change": "-6.69", "market_id": "33", "circulate_market_value": "45187539000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 89, "hot_rank_chg": 3, "stock_cnt": 5843, "price": "21.09", "change": "-0.66", "market_id": "17", "circulate_market_value": "10804209800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300319", "name": "麦捷科技", "hot_rank": 90, "hot_rank_chg": -13, "stock_cnt": 5843, "price": "32.46", "change": "2.69", "market_id": "33", "circulate_market_value": "27649257000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601066", "name": "中信建投", "hot_rank": 91, "hot_rank_chg": 25, "stock_cnt": 5843, "price": "28.89", "change": "5.48", "market_id": "17", "circulate_market_value": "187659940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002741", "name": "光华科技", "hot_rank": 92, "hot_rank_chg": 33, "stock_cnt": 5843, "price": "37.40", "change": "-10.01", "market_id": "33", "circulate_market_value": "15945797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 93, "hot_rank_chg": 18, "stock_cnt": 5843, "price": "17.97", "change": "-2.76", "market_id": "33", "circulate_market_value": "57963580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 94, "hot_rank_chg": -11, "stock_cnt": 5843, "price": "27.67", "change": "5.69", "market_id": "17", "circulate_market_value": "15578113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600961", "name": "株冶集团", "hot_rank": 95, "hot_rank_chg": 4, "stock_cnt": 5843, "price": "34.06", "change": "7.45", "market_id": "17", "circulate_market_value": "25606730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 96, "hot_rank_chg": 24, "stock_cnt": 5843, "price": "65.12", "change": "10.00", "market_id": "17", "circulate_market_value": "24916507000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "高纯四氯化硅涨价"}, {"code": "002600", "name": "领益智造", "hot_rank": 97, "hot_rank_chg": 114, "stock_cnt": 5843, "price": "16.66", "change": "-0.12", "market_id": "33", "circulate_market_value": "119947082000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 98, "hot_rank_chg": 23, "stock_cnt": 5843, "price": "18.13", "change": "5.53", "market_id": "17", "circulate_market_value": "7595882100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 99, "hot_rank_chg": -1, "stock_cnt": 5843, "price": "18.69", "change": "-3.16", "market_id": "17", "circulate_market_value": "20493486000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300377", "name": "赢时胜", "hot_rank": 100, "hot_rank_chg": 172, "stock_cnt": 5843, "price": "18.34", "change": "1.66", "market_id": "33", "circulate_market_value": "12671511400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "300237": "[行政处罚事先告知书] 美晨科技：关于收到中国证券监督管理委员会《行政处罚事先告知书》的公告", "603517": "[行政处罚事先告知书] 绝味食品：关于收到中国证券监督管理委员会湖南监管局《行政处罚事先告知书》的公告"};