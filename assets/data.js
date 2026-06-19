const UPDATE_TIME = "2026-06-19 04:09";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": 1.84,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续183天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 1.42,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续53天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.14,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续230天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "液冷服务器",
    "rise": 1.41,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "先进封装",
    "rise": 1.68,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "算力租赁",
    "rise": 0.95,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "芯片概念",
    "rise": 0.96,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "连续54天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "稀土永磁",
    "rise": 2.49,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "人形机器人",
    "rise": 1.26,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续394天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 0.54,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "创新药",
    "rise": 0.89,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续60天上榜",
    "rankChg": 1,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "商业航天",
    "rise": 0.33,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续159天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "培育钻石",
    "rise": 2.81,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "光纤概念",
    "rise": 0.91,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续59天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "人工智能",
    "rise": 0.19,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "PET铜箔",
    "rise": 0.36,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "机器人概念",
    "rise": 0.42,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "连续61天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "AI应用",
    "rise": 0.14,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续103天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "国家大基金持股",
    "rise": 2.36,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "牙科医疗",
    "rise": 3.17,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "医疗器械ETF",
    "code": "885926"
  }
];
const THS_EVENTS = [
  {
    "title": "英伟达B200租赁价被曝将翻倍，GPU采购新订单排到明年Q2",
    "desc": "",
    "heat": 225031,
    "direction": "算力租赁",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "东方国信",
        "code": "300166",
        "chg": 20.025674
      }
    ]
  },
  {
    "title": "中国光纤企业抢占全球算力市场",
    "desc": "",
    "heat": 155437,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念"
    ],
    "stocks": [
      {
        "name": "九州一轨",
        "code": "688485",
        "chg": 20.00707
      }
    ]
  },
  {
    "title": "电容巨头尼吉康全面涨价，AI服务器需求引爆铝电解电容紧缺",
    "desc": "",
    "heat": 147786,
    "direction": "MLCC涨价",
    "themes": [
      "MLCC"
    ],
    "stocks": [
      {
        "name": "利和兴",
        "code": "301013",
        "chg": 5.052051
      }
    ]
  },
  {
    "title": "科创板第五套上市标准扩围至人工智能大模型领域",
    "desc": "",
    "heat": 124443,
    "direction": "AI大模型",
    "themes": [
      "AIGC概念",
      "多模态AI",
      "AI视频"
    ],
    "stocks": [
      {
        "name": "东方国信",
        "code": "300166",
        "chg": 20.025674
      }
    ]
  },
  {
    "title": "字节跳动发布自建数据中心机房综合测试服务供应商意向征询",
    "desc": "",
    "heat": 78974,
    "direction": "字节系算力",
    "themes": [
      "字节系算力",
      "抖音概念(字节概念)"
    ],
    "stocks": [
      {
        "name": "中富通",
        "code": "300560",
        "chg": 10.489098
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "有色 · 锆",
    "change": "+7.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "金刚线",
    "change": "+5.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+5.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "镨钕",
    "change": "+4.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+4.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+4.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "稀土磁材",
    "change": "+4.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "炭黑",
    "change": "+3.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+3.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+3.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+3.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+3.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+3.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+2.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+2.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+2.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+2.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+2.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+2.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+2.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000716",
    "name": "黑芝麻",
    "hot_rank": 1,
    "hot_rank_chg": 2013,
    "stock_cnt": 5795,
    "price": "4.30",
    "change": "-2.94",
    "market_id": "33",
    "circulate_market_value": "3176364100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.49
      },
      {
        "name": "锂电池",
        "change_pct": -0.43
      },
      {
        "name": "新零售",
        "change_pct": -1.09
      },
      {
        "name": "农业种植",
        "change_pct": -0.88
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.07
      },
      {
        "name": "休闲食品",
        "change_pct": -1.98
      },
      {
        "name": "食品",
        "change_pct": -1.17
      },
      {
        "name": "大农业",
        "change_pct": -1.21
      },
      {
        "name": "植物奶",
        "change_pct": -0.7
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.35
      },
      {
        "name": "广西概念",
        "change_pct": -1.54
      },
      {
        "name": "饮料",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "002217",
    "name": "合力泰",
    "hot_rank": 2,
    "hot_rank_chg": -1,
    "stock_cnt": 5795,
    "price": "2.53",
    "change": "-4.89",
    "market_id": "33",
    "circulate_market_value": "18416686000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.71
      },
      {
        "name": "手机产业链",
        "change_pct": 0.72
      },
      {
        "name": "无线充电",
        "change_pct": 1.69
      },
      {
        "name": "5G",
        "change_pct": 1.57
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.55
      },
      {
        "name": "OLED",
        "change_pct": -0.81
      },
      {
        "name": "PCB板",
        "change_pct": 2.25
      },
      {
        "name": "3D玻璃",
        "change_pct": -1.01
      },
      {
        "name": "指纹识别",
        "change_pct": 0.16
      },
      {
        "name": "小米概念股",
        "change_pct": 0.99
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.82
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.29
      },
      {
        "name": "低价股",
        "change_pct": -1.73
      },
      {
        "name": "电子后视镜",
        "change_pct": -1.05
      },
      {
        "name": "ETC",
        "change_pct": -0.26
      },
      {
        "name": "智能手表",
        "change_pct": 0.84
      },
      {
        "name": "MiniLED",
        "change_pct": -0.07
      },
      {
        "name": "华为产业链",
        "change_pct": 0.52
      },
      {
        "name": "自贸区",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 4,
    "hot_rank_chg": 2,
    "stock_cnt": 5795,
    "price": "6.55",
    "change": "-1.50",
    "market_id": "33",
    "circulate_market_value": "231654730000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.54
      },
      {
        "name": "折叠屏",
        "change_pct": 0.71
      },
      {
        "name": "手机产业链",
        "change_pct": 0.72
      },
      {
        "name": "超高清视频",
        "change_pct": -0.13
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.18
      },
      {
        "name": "半导体",
        "change_pct": 1.67
      },
      {
        "name": "人工智能",
        "change_pct": 0.6
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.49
      },
      {
        "name": "VR&AR",
        "change_pct": 0.66
      },
      {
        "name": "OLED",
        "change_pct": -0.81
      },
      {
        "name": "京津冀",
        "change_pct": -0.82
      },
      {
        "name": "物联网",
        "change_pct": 0.63
      },
      {
        "name": "指纹识别",
        "change_pct": 0.16
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.01
      },
      {
        "name": "白马股",
        "change_pct": -1.21
      },
      {
        "name": "智能制造",
        "change_pct": 0.86
      },
      {
        "name": "小米概念股",
        "change_pct": 0.99
      },
      {
        "name": "国产芯片",
        "change_pct": 1.67
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.82
      },
      {
        "name": "全息概念",
        "change_pct": -0.12
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.05
      },
      {
        "name": "MicroLED",
        "change_pct": -0.42
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.37
      },
      {
        "name": "智能手表",
        "change_pct": 0.84
      },
      {
        "name": "MiniLED",
        "change_pct": -0.07
      },
      {
        "name": "传感器",
        "change_pct": 0.74
      },
      {
        "name": "大硅片",
        "change_pct": -0.44
      },
      {
        "name": "AI PC",
        "change_pct": 1.2
      },
      {
        "name": "华为产业链",
        "change_pct": 0.52
      },
      {
        "name": "回购",
        "change_pct": -0.35
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.91
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 5,
    "hot_rank_chg": -2,
    "stock_cnt": 5795,
    "price": "8.22",
    "change": "-9.97",
    "market_id": "17",
    "circulate_market_value": "101895852000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.25
      },
      {
        "name": "核电",
        "change_pct": -0.1
      },
      {
        "name": "强势人气股",
        "change_pct": 0.23
      },
      {
        "name": "电力体制改革",
        "change_pct": -4.32
      },
      {
        "name": "水电",
        "change_pct": -5.02
      },
      {
        "name": "火电",
        "change_pct": -5.38
      },
      {
        "name": "光伏",
        "change_pct": -1.49
      },
      {
        "name": "风电",
        "change_pct": -1.25
      },
      {
        "name": "国企改革",
        "change_pct": -1.24
      },
      {
        "name": "算电协同",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 20,
    "hot_rank_chg": 4,
    "stock_cnt": 5795,
    "price": "7.73",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "12566612900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "3D视觉",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.49
      },
      {
        "name": "电竞",
        "change_pct": 0.13
      },
      {
        "name": "手游",
        "change_pct": 0.96
      },
      {
        "name": "强势人气股",
        "change_pct": 0.23
      },
      {
        "name": "人工智能",
        "change_pct": 0.6
      },
      {
        "name": "游戏",
        "change_pct": 0.5
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.16
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.23
      },
      {
        "name": "快手概念股",
        "change_pct": 0.9
      },
      {
        "name": "元宇宙",
        "change_pct": 0.49
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.49
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.29
      },
      {
        "name": "web3.0",
        "change_pct": 1.51
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.2
      },
      {
        "name": "数据要素",
        "change_pct": 0.26
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.7
      },
      {
        "name": "AI营销",
        "change_pct": 1.38
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.72
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.91
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.03
      },
      {
        "name": "人形机器人",
        "change_pct": 1.76
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      },
      {
        "name": "多模态",
        "change_pct": 1.59
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 1.87
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.52
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 24,
    "hot_rank_chg": -1,
    "stock_cnt": 5795,
    "price": "9.76",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "29029961000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "铜箔增资",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.02
      },
      {
        "name": "禽流感",
        "change_pct": -0.51
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.58
      },
      {
        "name": "农药",
        "change_pct": -1.1
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": -1.21
      },
      {
        "name": "参股基金",
        "change_pct": -1.97
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 49,
    "hot_rank_chg": -7,
    "stock_cnt": 5795,
    "price": "4.71",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "4865127600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.02
      },
      {
        "name": "锂电池",
        "change_pct": -0.43
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.5
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.26
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.07
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.44
      }
    ]
  },
  {
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 69,
    "hot_rank_chg": 21,
    "stock_cnt": 5795,
    "price": "7.65",
    "change": "1.19",
    "market_id": "33",
    "circulate_market_value": "85243871000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -3.03
      },
      {
        "name": "锂电池",
        "change_pct": -0.43
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.24
      },
      {
        "name": "有色 · 铜",
        "change_pct": 1.86
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.58
      },
      {
        "name": "有色金属",
        "change_pct": 0.54
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.07
      },
      {
        "name": "人民币升值受益",
        "change_pct": -1.79
      },
      {
        "name": "硫酸",
        "change_pct": -0.94
      },
      {
        "name": "国企改革",
        "change_pct": -1.24
      },
      {
        "name": "白银",
        "change_pct": -1.54
      },
      {
        "name": "有色 · 镍",
        "change_pct": -0.01
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 77,
    "hot_rank_chg": -8,
    "stock_cnt": 5795,
    "price": "3.58",
    "change": "10.15",
    "market_id": "17",
    "circulate_market_value": "11701008500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "豪宅项目获奖",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.68
      },
      {
        "name": "强势人气股",
        "change_pct": 0.23
      },
      {
        "name": "养老产业",
        "change_pct": 0.02
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.26
      },
      {
        "name": "地摊经济",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "600545",
    "name": "卓郎智能",
    "hot_rank": 96,
    "hot_rank_chg": -12,
    "stock_cnt": 5795,
    "price": "7.25",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "12962363600.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "电子布设备",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.78
      },
      {
        "name": "工业自动化",
        "change_pct": 1.28
      },
      {
        "name": "新疆概念",
        "change_pct": -1.31
      },
      {
        "name": "玻纤",
        "change_pct": -0.64
      },
      {
        "name": "智能制造",
        "change_pct": 0.86
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.09
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000716", "name": "黑芝麻", "hot_rank": 1, "hot_rank_chg": 2013, "stock_cnt": 5795, "price": "4.30", "change": "-2.94", "market_id": "33", "circulate_market_value": "3176364100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.49}, {"name": "锂电池", "change_pct": -0.43}, {"name": "新零售", "change_pct": -1.09}, {"name": "农业种植", "change_pct": -0.88}, {"name": "新能源汽车", "change_pct": -0.07}, {"name": "休闲食品", "change_pct": -1.98}, {"name": "食品", "change_pct": -1.17}, {"name": "大农业", "change_pct": -1.21}, {"name": "植物奶", "change_pct": -0.7}, {"name": "网红/MCN", "change_pct": -0.35}, {"name": "广西概念", "change_pct": -1.54}, {"name": "饮料", "change_pct": -1.16}]}, {"code": "002217", "name": "合力泰", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "2.53", "change": "-4.89", "market_id": "33", "circulate_market_value": "18416686000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.71}, {"name": "手机产业链", "change_pct": 0.72}, {"name": "无线充电", "change_pct": 1.69}, {"name": "5G", "change_pct": 1.57}, {"name": "福建自贸/海西概念", "change_pct": -1.55}, {"name": "OLED", "change_pct": -0.81}, {"name": "PCB板", "change_pct": 2.25}, {"name": "3D玻璃", "change_pct": -1.01}, {"name": "指纹识别", "change_pct": 0.16}, {"name": "小米概念股", "change_pct": 0.99}, {"name": "液晶面板/LCD", "change_pct": -0.82}, {"name": "东数西算/算力", "change_pct": 1.29}, {"name": "低价股", "change_pct": -1.73}, {"name": "电子后视镜", "change_pct": -1.05}, {"name": "ETC", "change_pct": -0.26}, {"name": "智能手表", "change_pct": 0.84}, {"name": "MiniLED", "change_pct": -0.07}, {"name": "华为产业链", "change_pct": 0.52}, {"name": "自贸区", "change_pct": -1.23}]}, {"code": "600667", "name": "太极实业", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "20.92", "change": "9.99", "market_id": "17", "circulate_market_value": "43755062000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "HBM后工序"}, {"code": "000725", "name": "京东方A", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5795, "price": "6.55", "change": "-1.50", "market_id": "33", "circulate_market_value": "231654730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.54}, {"name": "折叠屏", "change_pct": 0.71}, {"name": "手机产业链", "change_pct": 0.72}, {"name": "超高清视频", "change_pct": -0.13}, {"name": "苹果产业链", "change_pct": 1.18}, {"name": "半导体", "change_pct": 1.67}, {"name": "人工智能", "change_pct": 0.6}, {"name": "互联网医疗", "change_pct": 0.49}, {"name": "VR&AR", "change_pct": 0.66}, {"name": "OLED", "change_pct": -0.81}, {"name": "京津冀", "change_pct": -0.82}, {"name": "物联网", "change_pct": 0.63}, {"name": "指纹识别", "change_pct": 0.16}, {"name": "汽车零部件", "change_pct": -0.01}, {"name": "白马股", "change_pct": -1.21}, {"name": "智能制造", "change_pct": 0.86}, {"name": "小米概念股", "change_pct": 0.99}, {"name": "国产芯片", "change_pct": 1.67}, {"name": "液晶面板/LCD", "change_pct": -0.82}, {"name": "全息概念", "change_pct": -0.12}, {"name": "理想汽车概念股", "change_pct": 0.05}, {"name": "MicroLED", "change_pct": -0.42}, {"name": "钙钛矿电池", "change_pct": -2.37}, {"name": "智能手表", "change_pct": 0.84}, {"name": "MiniLED", "change_pct": -0.07}, {"name": "传感器", "change_pct": 0.74}, {"name": "大硅片", "change_pct": -0.44}, {"name": "AI PC", "change_pct": 1.2}, {"name": "华为产业链", "change_pct": 0.52}, {"name": "回购", "change_pct": -0.35}, {"name": "智能眼镜/MR头显", "change_pct": 0.91}, {"name": "玻璃基板封装", "change_pct": -0.23}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5795, "price": "8.22", "change": "-9.97", "market_id": "17", "circulate_market_value": "101895852000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.25}, {"name": "核电", "change_pct": -0.1}, {"name": "强势人气股", "change_pct": 0.23}, {"name": "电力体制改革", "change_pct": -4.32}, {"name": "水电", "change_pct": -5.02}, {"name": "火电", "change_pct": -5.38}, {"name": "光伏", "change_pct": -1.49}, {"name": "风电", "change_pct": -1.25}, {"name": "国企改革", "change_pct": -1.24}, {"name": "算电协同", "change_pct": -1.03}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 6, "hot_rank_chg": 1, "stock_cnt": 5795, "price": "629.00", "change": "7.33", "market_id": "17", "circulate_market_value": "420481430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 7, "hot_rank_chg": 3, "stock_cnt": 5795, "price": "83.03", "change": "1.55", "market_id": "17", "circulate_market_value": "148575090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5795, "price": "78.08", "change": "7.49", "market_id": "17", "circulate_market_value": "1549426700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 9, "hot_rank_chg": -4, "stock_cnt": 5795, "price": "1367.88", "change": "7.19", "market_id": "33", "circulate_market_value": "1518264400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 10, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "111.01", "change": "0.01", "market_id": "17", "circulate_market_value": "271439560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600392", "name": "盛和资源", "hot_rank": 11, "hot_rank_chg": 5, "stock_cnt": 5795, "price": "31.66", "change": "10.01", "market_id": "17", "circulate_market_value": "55494489000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "稀土"}, {"code": "000657", "name": "中钨高新", "hot_rank": 12, "hot_rank_chg": -4, "stock_cnt": 5795, "price": "98.48", "change": "10.00", "market_id": "33", "circulate_market_value": "143084090000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "调入深证100"}, {"code": "600110", "name": "诺德股份", "hot_rank": 13, "hot_rank_chg": 2, "stock_cnt": 5795, "price": "17.57", "change": "2.03", "market_id": "17", "circulate_market_value": "30487129000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 14, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "42.51", "change": "6.84", "market_id": "17", "circulate_market_value": "35986982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 15, "hot_rank_chg": 7, "stock_cnt": 5795, "price": "19.61", "change": "2.94", "market_id": "33", "circulate_market_value": "65157201000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 16, "hot_rank_chg": -5, "stock_cnt": 5795, "price": "266.20", "change": "10.00", "market_id": "33", "circulate_market_value": "207768660000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "3.2T硅光NPO"}, {"code": "600522", "name": "中天科技", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5795, "price": "56.55", "change": "2.99", "market_id": "17", "circulate_market_value": "193002300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 18, "hot_rank_chg": -6, "stock_cnt": 5795, "price": "20.32", "change": "10.02", "market_id": "33", "circulate_market_value": "11854929700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "定增通过"}, {"code": "002384", "name": "东山精密", "hot_rank": 19, "hot_rank_chg": -5, "stock_cnt": 5795, "price": "273.00", "change": "6.26", "market_id": "33", "circulate_market_value": "378465830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 20, "hot_rank_chg": 4, "stock_cnt": 5795, "price": "7.73", "change": "9.96", "market_id": "33", "circulate_market_value": "12566612900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "3D视觉", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.49}, {"name": "电竞", "change_pct": 0.13}, {"name": "手游", "change_pct": 0.96}, {"name": "强势人气股", "change_pct": 0.23}, {"name": "人工智能", "change_pct": 0.6}, {"name": "游戏", "change_pct": 0.5}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.16}, {"name": "腾讯概念股", "change_pct": 0.23}, {"name": "快手概念股", "change_pct": 0.9}, {"name": "元宇宙", "change_pct": 0.49}, {"name": "虚拟数字人", "change_pct": 0.49}, {"name": "东数西算/算力", "change_pct": 1.29}, {"name": "web3.0", "change_pct": 1.51}, {"name": "AIGC概念", "change_pct": 1.2}, {"name": "数据要素", "change_pct": 0.26}, {"name": "字节跳动概念股", "change_pct": 0.7}, {"name": "AI营销", "change_pct": 1.38}, {"name": "ChatGPT", "change_pct": 1.72}, {"name": "智能眼镜/MR头显", "change_pct": 0.91}, {"name": "人工智能大模型", "change_pct": 1.03}, {"name": "人形机器人", "change_pct": 1.76}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "多模态", "change_pct": 1.59}, {"name": "Sora/AI视频", "change_pct": 1.87}, {"name": "IP经济/谷子经济", "change_pct": -0.52}, {"name": "小红书概念股", "change_pct": 0.53}]}, {"code": "000636", "name": "风华高科", "hot_rank": 21, "hot_rank_chg": 7, "stock_cnt": 5795, "price": "74.60", "change": "0.73", "market_id": "33", "circulate_market_value": "86313178000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 22, "hot_rank_chg": 9, "stock_cnt": 5795, "price": "183.87", "change": "2.06", "market_id": "17", "circulate_market_value": "440277000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 23, "hot_rank_chg": 4, "stock_cnt": 5795, "price": "89.53", "change": "14.05", "market_id": "33", "circulate_market_value": "76428952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 24, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "9.76", "change": "10.03", "market_id": "17", "circulate_market_value": "29029961000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "铜箔增资", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.02}, {"name": "禽流感", "change_pct": -0.51}, {"name": "铜箔/覆铜板", "change_pct": 2.58}, {"name": "农药", "change_pct": -1.1}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": -1.21}, {"name": "参股基金", "change_pct": -1.97}, {"name": "PET复合铜箔", "change_pct": 1.25}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 25, "hot_rank_chg": -5, "stock_cnt": 5795, "price": "52.06", "change": "8.91", "market_id": "33", "circulate_market_value": "79023458000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 26, "hot_rank_chg": -8, "stock_cnt": 5795, "price": "42.01", "change": "10.00", "market_id": "17", "circulate_market_value": "34818357000.00", "change_type": "1", "change_section": "11", "change_days": "6", "change_reason": "氮化铝"}, {"code": "603629", "name": "利通电子", "hot_rank": 27, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "176.58", "change": "7.00", "market_id": "17", "circulate_market_value": "45563114000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 28, "hot_rank_chg": -7, "stock_cnt": 5795, "price": "200.00", "change": "10.08", "market_id": "33", "circulate_market_value": "165803110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 29, "hot_rank_chg": -4, "stock_cnt": 5795, "price": "31.58", "change": "10.00", "market_id": "33", "circulate_market_value": "37152887000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光纤光缆"}, {"code": "002636", "name": "金安国纪", "hot_rank": 30, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "104.41", "change": "9.09", "market_id": "33", "circulate_market_value": "75625773000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300319", "name": "麦捷科技", "hot_rank": 31, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "27.76", "change": "20.02", "market_id": "33", "circulate_market_value": "23631261000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "英伟达电感"}, {"code": "600172", "name": "黄河旋风", "hot_rank": 32, "hot_rank_chg": 0, "stock_cnt": 5795, "price": "14.01", "change": "5.34", "market_id": "17", "circulate_market_value": "17880343000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 33, "hot_rank_chg": 1, "stock_cnt": 5795, "price": "44.04", "change": "2.63", "market_id": "33", "circulate_market_value": "69325085000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 34, "hot_rank_chg": 4, "stock_cnt": 5795, "price": "177.55", "change": "4.13", "market_id": "33", "circulate_market_value": "178435200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 35, "hot_rank_chg": 1, "stock_cnt": 5795, "price": "55.77", "change": "8.90", "market_id": "33", "circulate_market_value": "277160170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 36, "hot_rank_chg": 8, "stock_cnt": 5795, "price": "65.16", "change": "2.13", "market_id": "17", "circulate_market_value": "69888359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601318", "name": "中国平安", "hot_rank": 37, "hot_rank_chg": -4, "stock_cnt": 5795, "price": "49.38", "change": "-6.41", "market_id": "17", "circulate_market_value": "526394010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 38, "hot_rank_chg": 9, "stock_cnt": 5795, "price": "16.13", "change": "10.03", "market_id": "33", "circulate_market_value": "12238040100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锆材料"}, {"code": "688256", "name": "寒武纪", "hot_rank": 39, "hot_rank_chg": -20, "stock_cnt": 5795, "price": "1507.46", "change": "14.20", "market_id": "17", "circulate_market_value": "947126520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002297", "name": "博云新材", "hot_rank": 40, "hot_rank_chg": -5, "stock_cnt": 5795, "price": "28.36", "change": "10.01", "market_id": "33", "circulate_market_value": "16253253000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "硬质合金"}, {"code": "002747", "name": "埃斯顿", "hot_rank": 41, "hot_rank_chg": -2, "stock_cnt": 5795, "price": "36.50", "change": "10.01", "market_id": "33", "circulate_market_value": "28557769000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "600703", "name": "三安光电", "hot_rank": 42, "hot_rank_chg": 13, "stock_cnt": 5795, "price": "17.54", "change": "2.21", "market_id": "17", "circulate_market_value": "87507388000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 43, "hot_rank_chg": 2, "stock_cnt": 5795, "price": "53.50", "change": "-2.02", "market_id": "17", "circulate_market_value": "214167810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 44, "hot_rank_chg": 6, "stock_cnt": 5795, "price": "41.83", "change": "2.45", "market_id": "17", "circulate_market_value": "69608125000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605589", "name": "圣泉集团", "hot_rank": 45, "hot_rank_chg": 6, "stock_cnt": 5795, "price": "69.82", "change": "5.15", "market_id": "17", "circulate_market_value": "59062064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 46, "hot_rank_chg": 8, "stock_cnt": 5795, "price": "164.70", "change": "-0.86", "market_id": "17", "circulate_market_value": "37004571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300166", "name": "东方国信", "hot_rank": 47, "hot_rank_chg": 6, "stock_cnt": 5795, "price": "18.70", "change": "20.03", "market_id": "33", "circulate_market_value": "16937695000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "002463", "name": "沪电股份", "hot_rank": 48, "hot_rank_chg": 8, "stock_cnt": 5795, "price": "147.90", "change": "0.92", "market_id": "33", "circulate_market_value": "284383670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 49, "hot_rank_chg": -7, "stock_cnt": 5795, "price": "4.71", "change": "10.05", "market_id": "33", "circulate_market_value": "4865127600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.02}, {"name": "锂电池", "change_pct": -0.43}, {"name": "ST摘帽", "change_pct": -0.5}, {"name": "粤港澳大湾区", "change_pct": -1.26}, {"name": "新能源汽车", "change_pct": -0.07}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.44}]}, {"code": "600549", "name": "厦门钨业", "hot_rank": 50, "hot_rank_chg": -2, "stock_cnt": 5795, "price": "85.91", "change": "6.27", "market_id": "17", "circulate_market_value": "133498296000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 51, "hot_rank_chg": 7, "stock_cnt": 5795, "price": "38.78", "change": "0.81", "market_id": "33", "circulate_market_value": "41834598000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002741", "name": "光华科技", "hot_rank": 52, "hot_rank_chg": -3, "stock_cnt": 5795, "price": "41.30", "change": "4.72", "market_id": "33", "circulate_market_value": "17608594000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 53, "hot_rank_chg": 4, "stock_cnt": 5795, "price": "100.44", "change": "1.19", "market_id": "33", "circulate_market_value": "65590898000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 54, "hot_rank_chg": 5, "stock_cnt": 5795, "price": "23.58", "change": "1.64", "market_id": "17", "circulate_market_value": "26741571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 55, "hot_rank_chg": -3, "stock_cnt": 5795, "price": "1215.00", "change": "-2.02", "market_id": "17", "circulate_market_value": "1518849100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603011", "name": "合锻智能", "hot_rank": 56, "hot_rank_chg": -16, "stock_cnt": 5795, "price": "39.55", "change": "10.01", "market_id": "17", "circulate_market_value": "19554091000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB层压设备"}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 57, "hot_rank_chg": -16, "stock_cnt": 5795, "price": "47.72", "change": "10.01", "market_id": "33", "circulate_market_value": "12811023800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "定增通过"}, {"code": "002409", "name": "雅克科技", "hot_rank": 58, "hot_rank_chg": 21, "stock_cnt": 5795, "price": "150.16", "change": "1.51", "market_id": "33", "circulate_market_value": "47829376000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000811", "name": "冰轮环境", "hot_rank": 59, "hot_rank_chg": -16, "stock_cnt": 5795, "price": "40.17", "change": "9.99", "market_id": "33", "circulate_market_value": "39302155000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "数据中心液冷"}, {"code": "002156", "name": "通富微电", "hot_rank": 60, "hot_rank_chg": 1, "stock_cnt": 5795, "price": "68.27", "change": "1.56", "market_id": "33", "circulate_market_value": "103596463000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 61, "hot_rank_chg": -24, "stock_cnt": 5795, "price": "23.40", "change": "-10.00", "market_id": "17", "circulate_market_value": "14703626000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 62, "hot_rank_chg": 0, "stock_cnt": 5795, "price": "69.93", "change": "3.88", "market_id": "33", "circulate_market_value": "508340360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 63, "hot_rank_chg": 1, "stock_cnt": 5795, "price": "14.28", "change": "-2.59", "market_id": "17", "circulate_market_value": "25548895000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603778", "name": "国晟科技", "hot_rank": 64, "hot_rank_chg": -18, "stock_cnt": 5795, "price": "14.98", "change": "-9.98", "market_id": "17", "circulate_market_value": "9630000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 65, "hot_rank_chg": -5, "stock_cnt": 5795, "price": "53.31", "change": "10.01", "market_id": "17", "circulate_market_value": "110631439000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "阴极铜龙头"}, {"code": "002138", "name": "顺络电子", "hot_rank": 66, "hot_rank_chg": 25, "stock_cnt": 5795, "price": "71.16", "change": "6.97", "market_id": "33", "circulate_market_value": "53832522000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 67, "hot_rank_chg": 7, "stock_cnt": 5795, "price": "581.48", "change": "4.23", "market_id": "33", "circulate_market_value": "729317310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 68, "hot_rank_chg": -2, "stock_cnt": 5795, "price": "62.12", "change": "-1.54", "market_id": "17", "circulate_market_value": "90819117000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000630", "name": "铜陵有色", "hot_rank": 69, "hot_rank_chg": 21, "stock_cnt": 5795, "price": "7.65", "change": "1.19", "market_id": "33", "circulate_market_value": "85243871000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -3.03}, {"name": "锂电池", "change_pct": -0.43}, {"name": "安徽国企改革", "change_pct": -0.24}, {"name": "有色 · 铜", "change_pct": 1.86}, {"name": "铜箔/覆铜板", "change_pct": 2.58}, {"name": "有色金属", "change_pct": 0.54}, {"name": "新能源汽车", "change_pct": -0.07}, {"name": "人民币升值受益", "change_pct": -1.79}, {"name": "硫酸", "change_pct": -0.94}, {"name": "国企改革", "change_pct": -1.24}, {"name": "白银", "change_pct": -1.54}, {"name": "有色 · 镍", "change_pct": -0.01}]}, {"code": "600498", "name": "烽火通信", "hot_rank": 70, "hot_rank_chg": 7, "stock_cnt": 5795, "price": "75.31", "change": "-1.79", "market_id": "17", "circulate_market_value": "95765812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 71, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "712.00", "change": "0.34", "market_id": "33", "circulate_market_value": "117419359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002971", "name": "和远气体", "hot_rank": 72, "hot_rank_chg": -7, "stock_cnt": 5795, "price": "67.38", "change": "10.01", "market_id": "33", "circulate_market_value": "10538323000.00", "change_type": "1", "change_section": "11", "change_days": "6", "change_reason": "电子特气"}, {"code": "002585", "name": "双星新材", "hot_rank": 73, "hot_rank_chg": 9, "stock_cnt": 5795, "price": "14.85", "change": "-0.07", "market_id": "33", "circulate_market_value": "13168337500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 74, "hot_rank_chg": 4, "stock_cnt": 5795, "price": "74.83", "change": "2.23", "market_id": "17", "circulate_market_value": "75591990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 75, "hot_rank_chg": 31, "stock_cnt": 5795, "price": "23.32", "change": "-3.36", "market_id": "17", "circulate_market_value": "22028233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 76, "hot_rank_chg": 9, "stock_cnt": 5795, "price": "257.80", "change": "-0.42", "market_id": "17", "circulate_market_value": "226793750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 77, "hot_rank_chg": -8, "stock_cnt": 5795, "price": "3.58", "change": "10.15", "market_id": "17", "circulate_market_value": "11701008500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "豪宅项目获奖", "xgb_concepts": [{"name": "房地产", "change_pct": -0.68}, {"name": "强势人气股", "change_pct": 0.23}, {"name": "养老产业", "change_pct": 0.02}, {"name": "粤港澳大湾区", "change_pct": -1.26}, {"name": "地摊经济", "change_pct": -0.13}]}, {"code": "688146", "name": "中船特气", "hot_rank": 78, "hot_rank_chg": 17, "stock_cnt": 5795, "price": "364.00", "change": "7.15", "market_id": "17", "circulate_market_value": "52769386000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 79, "hot_rank_chg": -8, "stock_cnt": 5795, "price": "17.84", "change": "0.17", "market_id": "33", "circulate_market_value": "57544255000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002171", "name": "楚江新材", "hot_rank": 80, "hot_rank_chg": -12, "stock_cnt": 5795, "price": "15.38", "change": "2.53", "market_id": "33", "circulate_market_value": "24819344000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 81, "hot_rank_chg": -9, "stock_cnt": 5795, "price": "238.11", "change": "5.05", "market_id": "17", "circulate_market_value": "37333390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 82, "hot_rank_chg": -15, "stock_cnt": 5795, "price": "19.85", "change": "-8.78", "market_id": "33", "circulate_market_value": "30286759000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 83, "hot_rank_chg": 19, "stock_cnt": 5795, "price": "44.12", "change": "-7.50", "market_id": "17", "circulate_market_value": "119112797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 84, "hot_rank_chg": 9, "stock_cnt": 5795, "price": "56.56", "change": "-0.95", "market_id": "17", "circulate_market_value": "18210803000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 85, "hot_rank_chg": 52, "stock_cnt": 5795, "price": "21.60", "change": "-2.31", "market_id": "33", "circulate_market_value": "12837002600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 86, "hot_rank_chg": -23, "stock_cnt": 5795, "price": "20.20", "change": "10.02", "market_id": "17", "circulate_market_value": "19997190000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "钨钽铌并购"}, {"code": "003031", "name": "中瓷电子", "hot_rank": 87, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "176.29", "change": "10.00", "market_id": "33", "circulate_market_value": "59966224000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光通信陶瓷外壳"}, {"code": "002859", "name": "洁美科技", "hot_rank": 88, "hot_rank_chg": -1, "stock_cnt": 5795, "price": "99.73", "change": "10.00", "market_id": "33", "circulate_market_value": "40480348000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC离型膜"}, {"code": "600396", "name": "华电辽能", "hot_rank": 89, "hot_rank_chg": -14, "stock_cnt": 5795, "price": "16.38", "change": "-7.98", "market_id": "17", "circulate_market_value": "24122938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 90, "hot_rank_chg": 2, "stock_cnt": 5795, "price": "32.86", "change": "-1.20", "market_id": "17", "circulate_market_value": "72927931000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001696", "name": "宗申动力", "hot_rank": 91, "hot_rank_chg": 7, "stock_cnt": 5795, "price": "24.31", "change": "0.37", "market_id": "33", "circulate_market_value": "21669891000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 92, "hot_rank_chg": -3, "stock_cnt": 5795, "price": "16.82", "change": "6.12", "market_id": "33", "circulate_market_value": "121099035000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 93, "hot_rank_chg": -10, "stock_cnt": 5795, "price": "134.90", "change": "-0.69", "market_id": "33", "circulate_market_value": "129062524000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603663", "name": "三祥新材", "hot_rank": 94, "hot_rank_chg": -6, "stock_cnt": 5795, "price": "87.49", "change": "9.99", "market_id": "17", "circulate_market_value": "37004729000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "锆铪分离"}, {"code": "601869", "name": "长飞光纤", "hot_rank": 95, "hot_rank_chg": 6, "stock_cnt": 5795, "price": "471.55", "change": "2.40", "market_id": "17", "circulate_market_value": "191608830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600545", "name": "卓郎智能", "hot_rank": 96, "hot_rank_chg": -12, "stock_cnt": 5795, "price": "7.25", "change": "10.02", "market_id": "17", "circulate_market_value": "12962363600.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "电子布设备", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.78}, {"name": "工业自动化", "change_pct": 1.28}, {"name": "新疆概念", "change_pct": -1.31}, {"name": "玻纤", "change_pct": -0.64}, {"name": "智能制造", "change_pct": 0.86}, {"name": "新冠病毒防治", "change_pct": -0.09}]}, {"code": "000858", "name": "五粮液", "hot_rank": 97, "hot_rank_chg": -24, "stock_cnt": 5795, "price": "75.85", "change": "-2.12", "market_id": "33", "circulate_market_value": "294412790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601958", "name": "金钼股份", "hot_rank": 98, "hot_rank_chg": 1, "stock_cnt": 5795, "price": "27.70", "change": "-2.71", "market_id": "17", "circulate_market_value": "89376942000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 99, "hot_rank_chg": -19, "stock_cnt": 5795, "price": "577.79", "change": "1.07", "market_id": "33", "circulate_market_value": "162851200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 100, "hot_rank_chg": -3, "stock_cnt": 5795, "price": "269.90", "change": "2.82", "market_id": "17", "circulate_market_value": "309420520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];