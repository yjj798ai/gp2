const UPDATE_TIME = "2026-06-24 06:43";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": 3.67,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续186天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.28,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "连续233天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": 1.81,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续56天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "国家大基金持股",
    "rise": 4.54,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "创新药",
    "rise": -0.73,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续63天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "液冷服务器",
    "rise": 0.75,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "先进封装",
    "rise": 2.94,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "算力租赁",
    "rise": -0.18,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续97天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光纤概念",
    "rise": 1.23,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续62天上榜",
    "rankChg": 0,
    "etfName": "电信ETF",
    "code": "886084"
  },
  {
    "name": "商业航天",
    "rise": -0.16,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续162天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "培育钻石",
    "rise": 0.85,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "光刻胶",
    "rise": 2.8,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "人形机器人",
    "rise": -0.52,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续397天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "脑机接口",
    "rise": 0.34,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "芯片概念",
    "rise": 1.19,
    "rate": 0,
    "tag": "39家涨停",
    "hotTag": "连续57天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "锂电池概念",
    "rise": -0.36,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "中芯国际概念",
    "rise": 4.56,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885897"
  },
  {
    "name": "光刻机",
    "rise": 3.62,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "科创半导体ETF",
    "code": "886054"
  },
  {
    "name": "ST板块",
    "rise": -2.44,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "氟化工概念",
    "rise": 1.32,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885551"
  }
];
const THS_EVENTS = [
  {
    "title": "90万亿韩元的股份回购！三星电子股价上涨10%",
    "desc": "",
    "heat": 1142995,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "N臻宝",
        "code": "688797",
        "chg": 1134.290844
      }
    ]
  },
  {
    "title": "消息称台积电先进制程代工将全线涨价",
    "desc": "",
    "heat": 509245,
    "direction": "芯片制程涨价",
    "themes": [
      "芯片概念",
      "先进封装"
    ],
    "stocks": [
      {
        "name": "戈碧迦",
        "code": "920438",
        "chg": 25.155556
      }
    ]
  },
  {
    "title": "光纤概念表现活跃 光纤预制棒价格快速上涨",
    "desc": "",
    "heat": 317732,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念",
      "MPO连接器"
    ],
    "stocks": [
      {
        "name": "飞凯材料",
        "code": "300398",
        "chg": 14.672304
      }
    ]
  },
  {
    "title": "商务部等部门发布重要通知 全链条扩大汽车消费 再推新举措",
    "desc": "",
    "heat": 308110,
    "direction": "汽车消费",
    "themes": [
      "汽车整车",
      "新能源汽车"
    ],
    "stocks": [
      {
        "name": "鑫宏业",
        "code": "301310",
        "chg": 20.008913
      }
    ]
  },
  {
    "title": "“全球最先进机器人”：特斯拉推进 Optimus 3 量产，供应链开始备货",
    "desc": "",
    "heat": 299751,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "鑫宏业",
        "code": "301310",
        "chg": 20.008913
      }
    ]
  },
  {
    "title": "英伟达45℃液冷技术突破AI算力冷却",
    "desc": "",
    "heat": 248019,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "创世纪",
        "code": "300083",
        "chg": 14.577778
      }
    ]
  },
  {
    "title": "【调研风向标】锂电行业景气度回升 VC价格上涨",
    "desc": "",
    "heat": 31846,
    "direction": "VC涨价",
    "themes": [
      "VC添加剂"
    ],
    "stocks": [
      {
        "name": "孚日股份",
        "code": "002083",
        "chg": 6.060606
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "电子布",
    "change": "+6.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+5.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+5.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+5.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "制冷剂",
    "change": "+4.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+4.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+4.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+4.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+4.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+4.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+4.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+4.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+4.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+3.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+3.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+3.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+3.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+3.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液氯",
    "change": "+3.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氟化工",
    "change": "+2.96%",
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
    "hot_rank": 1,
    "hot_rank_chg": 6,
    "stock_cnt": 5851,
    "price": "7.08",
    "change": "4.58",
    "market_id": "33",
    "circulate_market_value": "250399310000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.79
      },
      {
        "name": "手机产业链",
        "change_pct": 1.12
      },
      {
        "name": "超高清视频",
        "change_pct": -0.89
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.52
      },
      {
        "name": "半导体",
        "change_pct": 3.37
      },
      {
        "name": "人工智能",
        "change_pct": -1.27
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.12
      },
      {
        "name": "VR&AR",
        "change_pct": 0.42
      },
      {
        "name": "OLED",
        "change_pct": 1.91
      },
      {
        "name": "京津冀",
        "change_pct": -2.08
      },
      {
        "name": "物联网",
        "change_pct": -1.4
      },
      {
        "name": "指纹识别",
        "change_pct": 0.14
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.61
      },
      {
        "name": "白马股",
        "change_pct": -0.34
      },
      {
        "name": "智能制造",
        "change_pct": -0.86
      },
      {
        "name": "小米概念股",
        "change_pct": 0.45
      },
      {
        "name": "国产芯片",
        "change_pct": 2.39
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.6
      },
      {
        "name": "全息概念",
        "change_pct": -0.93
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.3
      },
      {
        "name": "MicroLED",
        "change_pct": 1.36
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.05
      },
      {
        "name": "智能手表",
        "change_pct": 1.12
      },
      {
        "name": "MiniLED",
        "change_pct": 0.55
      },
      {
        "name": "传感器",
        "change_pct": 0.37
      },
      {
        "name": "大硅片",
        "change_pct": 2.42
      },
      {
        "name": "AI PC",
        "change_pct": 1.79
      },
      {
        "name": "华为产业链",
        "change_pct": -0.77
      },
      {
        "name": "回购",
        "change_pct": -0.48
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.56
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.55
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 9,
    "hot_rank_chg": 6,
    "stock_cnt": 5851,
    "price": "7.92",
    "change": "-5.04",
    "market_id": "17",
    "circulate_market_value": "98177026000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.29
      },
      {
        "name": "核电",
        "change_pct": -1.4
      },
      {
        "name": "强势人气股",
        "change_pct": -0.72
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.42
      },
      {
        "name": "水电",
        "change_pct": -3.01
      },
      {
        "name": "火电",
        "change_pct": -1.92
      },
      {
        "name": "光伏",
        "change_pct": -0.56
      },
      {
        "name": "风电",
        "change_pct": -1.02
      },
      {
        "name": "国企改革",
        "change_pct": -1.91
      },
      {
        "name": "算电协同",
        "change_pct": -0.69
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 39,
    "hot_rank_chg": 59,
    "stock_cnt": 5851,
    "price": "4.06",
    "change": "0.99",
    "market_id": "33",
    "circulate_market_value": "8133711400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -0.54
      },
      {
        "name": "数字孪生",
        "change_pct": -1.54
      },
      {
        "name": "深圳本地股",
        "change_pct": -2.1
      },
      {
        "name": "强势人气股",
        "change_pct": -0.72
      },
      {
        "name": "人工智能",
        "change_pct": -1.27
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.12
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.01
      },
      {
        "name": "高铁轨交",
        "change_pct": -1.6
      },
      {
        "name": "人脸识别",
        "change_pct": -1.15
      },
      {
        "name": "智慧停车",
        "change_pct": -1.89
      },
      {
        "name": "物联网",
        "change_pct": -1.4
      },
      {
        "name": "大数据",
        "change_pct": -1.79
      },
      {
        "name": "智慧城市",
        "change_pct": -1.86
      },
      {
        "name": "雄安新区",
        "change_pct": -2.73
      },
      {
        "name": "机器人",
        "change_pct": -0.7
      },
      {
        "name": "数字经济",
        "change_pct": -1.77
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.35
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.2
      },
      {
        "name": "建筑节能",
        "change_pct": -3.15
      },
      {
        "name": "旧改",
        "change_pct": -2.52
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.06
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.06
      },
      {
        "name": "华为产业链",
        "change_pct": -0.77
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -2.52
      },
      {
        "name": "区块链",
        "change_pct": -2.33
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 46,
    "hot_rank_chg": 54,
    "stock_cnt": 5851,
    "price": "11.41",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "33937690000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "PCB概念",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -1.24
      },
      {
        "name": "禽流感",
        "change_pct": -2.09
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 4.54
      },
      {
        "name": "农药",
        "change_pct": -0.78
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": -1.99
      },
      {
        "name": "参股基金",
        "change_pct": -1.05
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.78
      }
    ]
  },
  {
    "code": "600497",
    "name": "驰宏锌锗",
    "hot_rank": 65,
    "hot_rank_chg": 93,
    "stock_cnt": 5851,
    "price": "12.10",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "60988604000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "锗价上涨",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.29
      },
      {
        "name": "军民融合",
        "change_pct": -0.45
      },
      {
        "name": "有色 · 锑",
        "change_pct": 2.46
      },
      {
        "name": "有色 · 钼",
        "change_pct": -0.15
      },
      {
        "name": "有色 · 锌",
        "change_pct": 0.99
      },
      {
        "name": "有色金属",
        "change_pct": -0.54
      },
      {
        "name": "军工",
        "change_pct": -0.4
      },
      {
        "name": "硫酸",
        "change_pct": 1.52
      },
      {
        "name": "国企改革",
        "change_pct": -1.91
      },
      {
        "name": "白银",
        "change_pct": 1.19
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.06
      },
      {
        "name": "光纤概念",
        "change_pct": 1.05
      },
      {
        "name": "有色 · 铋",
        "change_pct": 2.06
      }
    ]
  },
  {
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 67,
    "hot_rank_chg": 10,
    "stock_cnt": 5851,
    "price": "6.94",
    "change": "-2.80",
    "market_id": "33",
    "circulate_market_value": "77332348000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -0.48
      },
      {
        "name": "锂电池",
        "change_pct": 0.22
      },
      {
        "name": "安徽国企改革",
        "change_pct": -1.05
      },
      {
        "name": "有色 · 铜",
        "change_pct": -0.24
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 4.54
      },
      {
        "name": "有色金属",
        "change_pct": -0.54
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.91
      },
      {
        "name": "人民币升值受益",
        "change_pct": -1.96
      },
      {
        "name": "硫酸",
        "change_pct": 1.52
      },
      {
        "name": "国企改革",
        "change_pct": -1.91
      },
      {
        "name": "白银",
        "change_pct": 1.19
      },
      {
        "name": "有色 · 镍",
        "change_pct": -0.29
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 74,
    "hot_rank_chg": -25,
    "stock_cnt": 5851,
    "price": "8.92",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "14501189000.00",
    "change_type": "1",
    "change_section": "13",
    "change_days": "7",
    "change_reason": "具身智能数据集",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.47
      },
      {
        "name": "电竞",
        "change_pct": -1.08
      },
      {
        "name": "手游",
        "change_pct": -0.85
      },
      {
        "name": "强势人气股",
        "change_pct": -0.72
      },
      {
        "name": "人工智能",
        "change_pct": -1.27
      },
      {
        "name": "游戏",
        "change_pct": -1.75
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.77
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.2
      },
      {
        "name": "快手概念股",
        "change_pct": -1.44
      },
      {
        "name": "元宇宙",
        "change_pct": -1.41
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.03
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.05
      },
      {
        "name": "web3.0",
        "change_pct": -1.96
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.25
      },
      {
        "name": "数据要素",
        "change_pct": -2.18
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.6
      },
      {
        "name": "AI营销",
        "change_pct": -1.92
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.41
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.56
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.37
      },
      {
        "name": "人形机器人",
        "change_pct": -0.44
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.25
      },
      {
        "name": "多模态",
        "change_pct": -0.77
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -1.54
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.87
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.78
      }
    ]
  },
  {
    "code": "600851",
    "name": "海欣股份",
    "hot_rank": 95,
    "hot_rank_chg": -56,
    "stock_cnt": 5851,
    "price": "10.16",
    "change": "4.53",
    "market_id": "17",
    "circulate_market_value": "7500174100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -2.09
      },
      {
        "name": "医药",
        "change_pct": -0.98
      },
      {
        "name": "化学原料药",
        "change_pct": -0.69
      },
      {
        "name": "参股基金",
        "change_pct": -1.05
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 6, "stock_cnt": 5851, "price": "7.08", "change": "4.58", "market_id": "33", "circulate_market_value": "250399310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.79}, {"name": "手机产业链", "change_pct": 1.12}, {"name": "超高清视频", "change_pct": -0.89}, {"name": "苹果产业链", "change_pct": 1.52}, {"name": "半导体", "change_pct": 3.37}, {"name": "人工智能", "change_pct": -1.27}, {"name": "互联网医疗", "change_pct": -2.12}, {"name": "VR&AR", "change_pct": 0.42}, {"name": "OLED", "change_pct": 1.91}, {"name": "京津冀", "change_pct": -2.08}, {"name": "物联网", "change_pct": -1.4}, {"name": "指纹识别", "change_pct": 0.14}, {"name": "汽车零部件", "change_pct": -1.61}, {"name": "白马股", "change_pct": -0.34}, {"name": "智能制造", "change_pct": -0.86}, {"name": "小米概念股", "change_pct": 0.45}, {"name": "国产芯片", "change_pct": 2.39}, {"name": "液晶面板/LCD", "change_pct": 1.6}, {"name": "全息概念", "change_pct": -0.93}, {"name": "理想汽车概念股", "change_pct": -0.3}, {"name": "MicroLED", "change_pct": 1.36}, {"name": "钙钛矿电池", "change_pct": -0.05}, {"name": "智能手表", "change_pct": 1.12}, {"name": "MiniLED", "change_pct": 0.55}, {"name": "传感器", "change_pct": 0.37}, {"name": "大硅片", "change_pct": 2.42}, {"name": "AI PC", "change_pct": 1.79}, {"name": "华为产业链", "change_pct": -0.77}, {"name": "回购", "change_pct": -0.48}, {"name": "智能眼镜/MR头显", "change_pct": 0.56}, {"name": "玻璃基板封装", "change_pct": 1.55}]}, {"code": "600584", "name": "长电科技", "hot_rank": 2, "hot_rank_chg": 4, "stock_cnt": 5851, "price": "94.70", "change": "10.00", "market_id": "17", "circulate_market_value": "169457560000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "先进封装"}, {"code": "002185", "name": "华天科技", "hot_rank": 3, "hot_rank_chg": 32, "stock_cnt": 5851, "price": "20.89", "change": "6.86", "market_id": "33", "circulate_market_value": "69410195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 4, "hot_rank_chg": 8, "stock_cnt": 5851, "price": "118.46", "change": "1.01", "market_id": "17", "circulate_market_value": "289656160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 5, "hot_rank_chg": 47, "stock_cnt": 5851, "price": "74.77", "change": "7.80", "market_id": "33", "circulate_market_value": "545935250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 6, "hot_rank_chg": 7, "stock_cnt": 5851, "price": "221.59", "change": "9.74", "market_id": "17", "circulate_market_value": "57177089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 7, "hot_rank_chg": -3, "stock_cnt": 5851, "price": "62.24", "change": "0.83", "market_id": "17", "circulate_market_value": "212421990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 8, "hot_rank_chg": 24, "stock_cnt": 5851, "price": "44.11", "change": "5.55", "market_id": "33", "circulate_market_value": "47584428000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 9, "hot_rank_chg": 6, "stock_cnt": 5851, "price": "7.92", "change": "-5.04", "market_id": "17", "circulate_market_value": "98177026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.29}, {"name": "核电", "change_pct": -1.4}, {"name": "强势人气股", "change_pct": -0.72}, {"name": "电力体制改革", "change_pct": -2.42}, {"name": "水电", "change_pct": -3.01}, {"name": "火电", "change_pct": -1.92}, {"name": "光伏", "change_pct": -0.56}, {"name": "风电", "change_pct": -1.02}, {"name": "国企改革", "change_pct": -1.91}, {"name": "算电协同", "change_pct": -0.69}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 10, "hot_rank_chg": 19, "stock_cnt": 5851, "price": "695.39", "change": "8.49", "market_id": "17", "circulate_market_value": "464862610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 11, "hot_rank_chg": -9, "stock_cnt": 5851, "price": "17.11", "change": "0.89", "market_id": "17", "circulate_market_value": "21836736000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 12, "hot_rank_chg": 46, "stock_cnt": 5851, "price": "50.27", "change": "10.00", "market_id": "33", "circulate_market_value": "79131972000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储封测扩产"}, {"code": "600206", "name": "有研新材", "hot_rank": 13, "hot_rank_chg": -3, "stock_cnt": 5851, "price": "51.66", "change": "6.85", "market_id": "17", "circulate_market_value": "43732945000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 14, "hot_rank_chg": 13, "stock_cnt": 5851, "price": "123.09", "change": "10.00", "market_id": "33", "circulate_market_value": "80382155000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "磷化铟扩产"}, {"code": "002156", "name": "通富微电", "hot_rank": 15, "hot_rank_chg": 66, "stock_cnt": 5851, "price": "73.88", "change": "7.98", "market_id": "33", "circulate_market_value": "112109370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 16, "hot_rank_chg": 15, "stock_cnt": 5851, "price": "71.84", "change": "2.32", "market_id": "33", "circulate_market_value": "83119822000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 17, "hot_rank_chg": -12, "stock_cnt": 5851, "price": "153.40", "change": "5.71", "market_id": "33", "circulate_market_value": "146761980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 18, "hot_rank_chg": 18, "stock_cnt": 5851, "price": "76.47", "change": "3.20", "market_id": "17", "circulate_market_value": "1517477700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688797", "name": "臻宝科技", "hot_rank": 19, "hot_rank_chg": 299, "stock_cnt": 5851, "price": "558.00", "change": "1167.03", "market_id": "17", "circulate_market_value": "16289525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 20, "hot_rank_chg": 46, "stock_cnt": 5851, "price": "68.74", "change": "10.00", "market_id": "17", "circulate_market_value": "100497523000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光芯片"}, {"code": "002709", "name": "天赐材料", "hot_rank": 21, "hot_rank_chg": 69, "stock_cnt": 5851, "price": "55.91", "change": "3.46", "market_id": "33", "circulate_market_value": "84368806000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 22, "hot_rank_chg": -3, "stock_cnt": 5851, "price": "49.88", "change": "6.04", "market_id": "17", "circulate_market_value": "83003904000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 23, "hot_rank_chg": -6, "stock_cnt": 5851, "price": "21.46", "change": "9.99", "market_id": "33", "circulate_market_value": "16281980000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "锆产品涨价"}, {"code": "600667", "name": "太极实业", "hot_rank": 24, "hot_rank_chg": -2, "stock_cnt": 5851, "price": "23.01", "change": "9.99", "market_id": "17", "circulate_market_value": "48126386000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片封测"}, {"code": "002600", "name": "领益智造", "hot_rank": 25, "hot_rank_chg": 203, "stock_cnt": 5851, "price": "17.66", "change": "10.03", "market_id": "33", "circulate_market_value": "127146787000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "折叠屏"}, {"code": "000811", "name": "冰轮环境", "hot_rank": 26, "hot_rank_chg": 16, "stock_cnt": 5851, "price": "48.30", "change": "7.41", "market_id": "33", "circulate_market_value": "47256511000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 27, "hot_rank_chg": 3, "stock_cnt": 5851, "price": "177.01", "change": "5.44", "market_id": "17", "circulate_market_value": "423850720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 28, "hot_rank_chg": 101, "stock_cnt": 5851, "price": "19.00", "change": "6.92", "market_id": "33", "circulate_market_value": "61285922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 29, "hot_rank_chg": -11, "stock_cnt": 5851, "price": "21.81", "change": "9.98", "market_id": "17", "circulate_market_value": "108810498000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "CPO"}, {"code": "600396", "name": "华电辽能", "hot_rank": 30, "hot_rank_chg": 53, "stock_cnt": 5851, "price": "15.82", "change": "1.02", "market_id": "17", "circulate_market_value": "23298222000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 31, "hot_rank_chg": 15, "stock_cnt": 5851, "price": "256.02", "change": "0.39", "market_id": "33", "circulate_market_value": "354926090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 32, "hot_rank_chg": 184, "stock_cnt": 5851, "price": "44.72", "change": "16.91", "market_id": "33", "circulate_market_value": "62804452000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 33, "hot_rank_chg": 117, "stock_cnt": 5851, "price": "102.96", "change": "7.83", "market_id": "33", "circulate_market_value": "84962617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 34, "hot_rank_chg": 6, "stock_cnt": 5851, "price": "64.82", "change": "9.99", "market_id": "17", "circulate_market_value": "259483320000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB概念"}, {"code": "002463", "name": "沪电股份", "hot_rank": 35, "hot_rank_chg": 37, "stock_cnt": 5851, "price": "142.95", "change": "3.21", "market_id": "33", "circulate_market_value": "274865760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 36, "hot_rank_chg": 215, "stock_cnt": 5851, "price": "66.00", "change": "7.65", "market_id": "33", "circulate_market_value": "97397784000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 37, "hot_rank_chg": 65, "stock_cnt": 5851, "price": "50.61", "change": "8.05", "market_id": "17", "circulate_market_value": "136634150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 38, "hot_rank_chg": -30, "stock_cnt": 5851, "price": "25.51", "change": "10.00", "market_id": "33", "circulate_market_value": "11539162800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力"}, {"code": "002421", "name": "达实智能", "hot_rank": 39, "hot_rank_chg": 59, "stock_cnt": 5851, "price": "4.06", "change": "0.99", "market_id": "33", "circulate_market_value": "8133711400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -0.54}, {"name": "数字孪生", "change_pct": -1.54}, {"name": "深圳本地股", "change_pct": -2.1}, {"name": "强势人气股", "change_pct": -0.72}, {"name": "人工智能", "change_pct": -1.27}, {"name": "互联网医疗", "change_pct": -2.12}, {"name": "云计算数据中心", "change_pct": -1.01}, {"name": "高铁轨交", "change_pct": -1.6}, {"name": "人脸识别", "change_pct": -1.15}, {"name": "智慧停车", "change_pct": -1.89}, {"name": "物联网", "change_pct": -1.4}, {"name": "大数据", "change_pct": -1.79}, {"name": "智慧城市", "change_pct": -1.86}, {"name": "雄安新区", "change_pct": -2.73}, {"name": "机器人", "change_pct": -0.7}, {"name": "数字经济", "change_pct": -1.77}, {"name": "阿里巴巴概念股", "change_pct": -1.35}, {"name": "腾讯概念股", "change_pct": -1.2}, {"name": "建筑节能", "change_pct": -3.15}, {"name": "旧改", "change_pct": -2.52}, {"name": "医疗信息化", "change_pct": -2.06}, {"name": "新冠病毒防治", "change_pct": -1.06}, {"name": "华为产业链", "change_pct": -0.77}, {"name": "医疗耗材供应链SPD", "change_pct": -2.52}, {"name": "区块链", "change_pct": -2.33}]}, {"code": "001896", "name": "豫能控股", "hot_rank": 40, "hot_rank_chg": 80, "stock_cnt": 5851, "price": "20.41", "change": "3.50", "market_id": "33", "circulate_market_value": "31141197000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 41, "hot_rank_chg": 180, "stock_cnt": 5851, "price": "115.18", "change": "8.33", "market_id": "17", "circulate_market_value": "284872420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 42, "hot_rank_chg": 2, "stock_cnt": 5851, "price": "99.70", "change": "-2.73", "market_id": "33", "circulate_market_value": "144769480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 43, "hot_rank_chg": 24, "stock_cnt": 5851, "price": "803.80", "change": "6.46", "market_id": "33", "circulate_market_value": "132558540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 44, "hot_rank_chg": -20, "stock_cnt": 5851, "price": "52.96", "change": "8.42", "market_id": "17", "circulate_market_value": "43893839000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 45, "hot_rank_chg": -31, "stock_cnt": 5851, "price": "82.49", "change": "1.24", "market_id": "33", "circulate_market_value": "93251492000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 46, "hot_rank_chg": 54, "stock_cnt": 5851, "price": "11.41", "change": "10.03", "market_id": "17", "circulate_market_value": "33937690000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB概念", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.24}, {"name": "禽流感", "change_pct": -2.09}, {"name": "铜箔/覆铜板", "change_pct": 4.54}, {"name": "农药", "change_pct": -0.78}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": -1.99}, {"name": "参股基金", "change_pct": -1.05}, {"name": "PET复合铜箔", "change_pct": 1.78}]}, {"code": "600378", "name": "昊华科技", "hot_rank": 47, "hot_rank_chg": 10, "stock_cnt": 5851, "price": "67.27", "change": "1.40", "market_id": "17", "circulate_market_value": "72151472000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 48, "hot_rank_chg": 74, "stock_cnt": 5851, "price": "173.05", "change": "10.00", "market_id": "33", "circulate_market_value": "55120361000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "半导体前驱体"}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 49, "hot_rank_chg": 13, "stock_cnt": 5851, "price": "185.20", "change": "7.79", "market_id": "33", "circulate_market_value": "153525390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 50, "hot_rank_chg": 6, "stock_cnt": 5851, "price": "167.79", "change": "-2.53", "market_id": "17", "circulate_market_value": "37698828000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 51, "hot_rank_chg": -1, "stock_cnt": 5851, "price": "15.13", "change": "-2.07", "market_id": "17", "circulate_market_value": "26253288000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 52, "hot_rank_chg": 21, "stock_cnt": 5851, "price": "265.12", "change": "-0.67", "market_id": "33", "circulate_market_value": "206925720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300390", "name": "天华新能", "hot_rank": 53, "hot_rank_chg": 375, "stock_cnt": 5851, "price": "98.39", "change": "12.28", "market_id": "33", "circulate_market_value": "66144407000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300604", "name": "长川科技", "hot_rank": 54, "hot_rank_chg": 20, "stock_cnt": 5851, "price": "307.68", "change": "10.12", "market_id": "33", "circulate_market_value": "150394990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 55, "hot_rank_chg": -17, "stock_cnt": 5851, "price": "37.27", "change": "-2.56", "market_id": "33", "circulate_market_value": "29160220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 56, "hot_rank_chg": 53, "stock_cnt": 5851, "price": "49.40", "change": "4.44", "market_id": "17", "circulate_market_value": "32217282000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 57, "hot_rank_chg": 299, "stock_cnt": 5851, "price": "151.40", "change": "6.80", "market_id": "17", "circulate_market_value": "302733770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600392", "name": "盛和资源", "hot_rank": 58, "hot_rank_chg": -11, "stock_cnt": 5851, "price": "31.32", "change": "0.97", "market_id": "17", "circulate_market_value": "54898528000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 59, "hot_rank_chg": 6, "stock_cnt": 5851, "price": "81.95", "change": "-1.03", "market_id": "17", "circulate_market_value": "104209378000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 60, "hot_rank_chg": 20, "stock_cnt": 5851, "price": "37.79", "change": "4.74", "market_id": "17", "circulate_market_value": "83869340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002297", "name": "博云新材", "hot_rank": 61, "hot_rank_chg": -18, "stock_cnt": 5851, "price": "33.35", "change": "1.61", "market_id": "33", "circulate_market_value": "19113046000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 62, "hot_rank_chg": 54, "stock_cnt": 5851, "price": "52.91", "change": "-0.77", "market_id": "33", "circulate_market_value": "262946830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300398", "name": "飞凯材料", "hot_rank": 63, "hot_rank_chg": 398, "stock_cnt": 5851, "price": "54.06", "change": "14.29", "market_id": "33", "circulate_market_value": "30481744000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 64, "hot_rank_chg": 4, "stock_cnt": 5851, "price": "14.12", "change": "-1.74", "market_id": "17", "circulate_market_value": "25262633000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600497", "name": "驰宏锌锗", "hot_rank": 65, "hot_rank_chg": 93, "stock_cnt": 5851, "price": "12.10", "change": "10.00", "market_id": "17", "circulate_market_value": "60988604000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "锗价上涨", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.29}, {"name": "军民融合", "change_pct": -0.45}, {"name": "有色 · 锑", "change_pct": 2.46}, {"name": "有色 · 钼", "change_pct": -0.15}, {"name": "有色 · 锌", "change_pct": 0.99}, {"name": "有色金属", "change_pct": -0.54}, {"name": "军工", "change_pct": -0.4}, {"name": "硫酸", "change_pct": 1.52}, {"name": "国企改革", "change_pct": -1.91}, {"name": "白银", "change_pct": 1.19}, {"name": "新冠病毒防治", "change_pct": -1.06}, {"name": "光纤概念", "change_pct": 1.05}, {"name": "有色 · 铋", "change_pct": 2.06}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 66, "hot_rank_chg": -18, "stock_cnt": 5851, "price": "50.08", "change": "3.26", "market_id": "33", "circulate_market_value": "76017956000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000630", "name": "铜陵有色", "hot_rank": 67, "hot_rank_chg": 10, "stock_cnt": 5851, "price": "6.94", "change": "-2.80", "market_id": "33", "circulate_market_value": "77332348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -0.48}, {"name": "锂电池", "change_pct": 0.22}, {"name": "安徽国企改革", "change_pct": -1.05}, {"name": "有色 · 铜", "change_pct": -0.24}, {"name": "铜箔/覆铜板", "change_pct": 4.54}, {"name": "有色金属", "change_pct": -0.54}, {"name": "新能源汽车", "change_pct": -0.91}, {"name": "人民币升值受益", "change_pct": -1.96}, {"name": "硫酸", "change_pct": 1.52}, {"name": "国企改革", "change_pct": -1.91}, {"name": "白银", "change_pct": 1.19}, {"name": "有色 · 镍", "change_pct": -0.29}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 68, "hot_rank_chg": -23, "stock_cnt": 5851, "price": "1305.62", "change": "-0.33", "market_id": "33", "circulate_market_value": "1449159600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002240", "name": "盛新锂能", "hot_rank": 69, "hot_rank_chg": 271, "stock_cnt": 5851, "price": "47.36", "change": "10.01", "market_id": "33", "circulate_market_value": "43235357000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锂矿"}, {"code": "600707", "name": "彩虹股份", "hot_rank": 70, "hot_rank_chg": -54, "stock_cnt": 5851, "price": "13.50", "change": "-1.03", "market_id": "17", "circulate_market_value": "48433541000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603890", "name": "春秋电子", "hot_rank": 71, "hot_rank_chg": 35, "stock_cnt": 5851, "price": "29.95", "change": "7.09", "market_id": "17", "circulate_market_value": "13382575200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 72, "hot_rank_chg": 4, "stock_cnt": 5851, "price": "114.14", "change": "5.10", "market_id": "33", "circulate_market_value": "82673362000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 73, "hot_rank_chg": -47, "stock_cnt": 5851, "price": "19.33", "change": "3.54", "market_id": "33", "circulate_market_value": "13383309600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 74, "hot_rank_chg": -25, "stock_cnt": 5851, "price": "8.92", "change": "9.99", "market_id": "33", "circulate_market_value": "14501189000.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "具身智能数据集", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.47}, {"name": "电竞", "change_pct": -1.08}, {"name": "手游", "change_pct": -0.85}, {"name": "强势人气股", "change_pct": -0.72}, {"name": "人工智能", "change_pct": -1.27}, {"name": "游戏", "change_pct": -1.75}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.77}, {"name": "腾讯概念股", "change_pct": -1.2}, {"name": "快手概念股", "change_pct": -1.44}, {"name": "元宇宙", "change_pct": -1.41}, {"name": "虚拟数字人", "change_pct": -2.03}, {"name": "东数西算/算力", "change_pct": 0.05}, {"name": "web3.0", "change_pct": -1.96}, {"name": "AIGC概念", "change_pct": -1.25}, {"name": "数据要素", "change_pct": -2.18}, {"name": "字节跳动概念股", "change_pct": -1.6}, {"name": "AI营销", "change_pct": -1.92}, {"name": "ChatGPT", "change_pct": -0.41}, {"name": "智能眼镜/MR头显", "change_pct": 0.56}, {"name": "人工智能大模型", "change_pct": -1.37}, {"name": "人形机器人", "change_pct": -0.44}, {"name": "短剧/互动影游", "change_pct": -2.25}, {"name": "多模态", "change_pct": -0.77}, {"name": "Sora/AI视频", "change_pct": -1.54}, {"name": "IP经济/谷子经济", "change_pct": -2.87}, {"name": "小红书概念股", "change_pct": -1.78}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 75, "hot_rank_chg": 16, "stock_cnt": 5851, "price": "91.05", "change": "0.30", "market_id": "33", "circulate_market_value": "77726528000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 76, "hot_rank_chg": -23, "stock_cnt": 5851, "price": "18.95", "change": "-2.77", "market_id": "17", "circulate_market_value": "330882960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 77, "hot_rank_chg": -74, "stock_cnt": 5851, "price": "571.49", "change": "0.16", "market_id": "17", "circulate_market_value": "232218280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002171", "name": "楚江新材", "hot_rank": 78, "hot_rank_chg": -9, "stock_cnt": 5851, "price": "15.09", "change": "1.89", "market_id": "33", "circulate_market_value": "24351359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 79, "hot_rank_chg": -59, "stock_cnt": 5851, "price": "25.30", "change": "3.56", "market_id": "17", "circulate_market_value": "25045985000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 80, "hot_rank_chg": -57, "stock_cnt": 5851, "price": "71.63", "change": "10.00", "market_id": "17", "circulate_market_value": "27407393000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "高纯四氯化硅涨价"}, {"code": "603399", "name": "永杉锂业", "hot_rank": 81, "hot_rank_chg": 149, "stock_cnt": 5851, "price": "22.62", "change": "10.02", "market_id": "17", "circulate_market_value": "11588014500.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "锂盐"}, {"code": "300346", "name": "南大光电", "hot_rank": 82, "hot_rank_chg": 65, "stock_cnt": 5851, "price": "76.37", "change": "6.92", "market_id": "33", "circulate_market_value": "50097959000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 83, "hot_rank_chg": 2, "stock_cnt": 5851, "price": "167.41", "change": "2.29", "market_id": "33", "circulate_market_value": "168244650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605589", "name": "圣泉集团", "hot_rank": 84, "hot_rank_chg": -20, "stock_cnt": 5851, "price": "66.43", "change": "0.38", "market_id": "17", "circulate_market_value": "56194399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 85, "hot_rank_chg": 27, "stock_cnt": 5851, "price": "28.88", "change": "5.21", "market_id": "17", "circulate_market_value": "16259339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002460", "name": "赣锋锂业", "hot_rank": 86, "hot_rank_chg": 181, "stock_cnt": 5851, "price": "71.53", "change": "5.15", "market_id": "33", "circulate_market_value": "86638426000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 87, "hot_rank_chg": 6, "stock_cnt": 5851, "price": "20.16", "change": "-3.54", "market_id": "33", "circulate_market_value": "269202440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 88, "hot_rank_chg": 83, "stock_cnt": 5851, "price": "67.10", "change": "0.90", "market_id": "17", "circulate_market_value": "51814578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301396", "name": "宏景科技", "hot_rank": 89, "hot_rank_chg": 430, "stock_cnt": 5851, "price": "297.60", "change": "20.00", "market_id": "33", "circulate_market_value": "42112485000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 90, "hot_rank_chg": 62, "stock_cnt": 5851, "price": "106.19", "change": "-0.67", "market_id": "33", "circulate_market_value": "245233350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 91, "hot_rank_chg": -21, "stock_cnt": 5851, "price": "37.05", "change": "10.01", "market_id": "33", "circulate_market_value": "43588172000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "光纤光缆"}, {"code": "002415", "name": "海康威视", "hot_rank": 92, "hot_rank_chg": 260, "stock_cnt": 5851, "price": "34.13", "change": "8.66", "market_id": "33", "circulate_market_value": "308753710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 93, "hot_rank_chg": 32, "stock_cnt": 5851, "price": "27.53", "change": "7.50", "market_id": "17", "circulate_market_value": "26005028000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 94, "hot_rank_chg": -34, "stock_cnt": 5851, "price": "50.86", "change": "-9.18", "market_id": "17", "circulate_market_value": "16375556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600851", "name": "海欣股份", "hot_rank": 95, "hot_rank_chg": -56, "stock_cnt": 5851, "price": "10.16", "change": "4.53", "market_id": "17", "circulate_market_value": "7500174100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -2.09}, {"name": "医药", "change_pct": -0.98}, {"name": "化学原料药", "change_pct": -0.69}, {"name": "参股基金", "change_pct": -1.05}]}, {"code": "002202", "name": "金风科技", "hot_rank": 96, "hot_rank_chg": 103, "stock_cnt": 5851, "price": "22.21", "change": "2.12", "market_id": "33", "circulate_market_value": "74703448000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002378", "name": "章源钨业", "hot_rank": 97, "hot_rank_chg": 68, "stock_cnt": 5851, "price": "37.00", "change": "1.34", "market_id": "33", "circulate_market_value": "44219491000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002241", "name": "歌尔股份", "hot_rank": 98, "hot_rank_chg": 225, "stock_cnt": 5851, "price": "23.76", "change": "3.03", "market_id": "33", "circulate_market_value": "74682573000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 99, "hot_rank_chg": 61, "stock_cnt": 5851, "price": "54.45", "change": "3.03", "market_id": "17", "circulate_market_value": "37645402000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 100, "hot_rank_chg": -13, "stock_cnt": 5851, "price": "23.35", "change": "0.04", "market_id": "17", "circulate_market_value": "26492074000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "300237": "[行政处罚事先告知书] 美晨科技：关于收到中国证券监督管理委员会《行政处罚事先告知书》的公告", "301372": "[行政处罚事先告知书] 科净源：关于收到中国证券监督管理委员会北京监管局的《行政处罚事先告知书》的公告"};