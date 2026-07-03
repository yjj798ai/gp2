const UPDATE_TIME = "2026-07-03 19:12";
const THS_HOT = [
  {
    "name": "人形机器人",
    "rise": 3.46,
    "rate": 0,
    "tag": "33家涨停",
    "hotTag": "连续404天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": 2.38,
    "rate": 0,
    "tag": "50家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "存储芯片",
    "rise": -1.97,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续193天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "创新药",
    "rise": 1.82,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续70天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "商业航天",
    "rise": 1.68,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续169天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.32,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续240天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -0.1,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续63天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "减速器",
    "rise": 5.74,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "玻璃基板",
    "rise": -3.44,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886111"
  },
  {
    "name": "ST板块",
    "rise": 2.22,
    "rate": 0,
    "tag": "52家涨停",
    "hotTag": "连续78天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "芯片概念",
    "rise": -0.71,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "连续64天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "2026中报预增",
    "rise": 0.31,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "黄金概念",
    "rise": 1.99,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "光纤概念",
    "rise": -1.14,
    "rate": 0,
    "tag": "",
    "hotTag": "连续69天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "猪肉",
    "rise": 0.0,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "算力租赁",
    "rise": 0.05,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续104天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "先进封装",
    "rise": -2.31,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续33天上榜",
    "rankChg": 2,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "AI应用",
    "rise": 0.58,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "氟化工概念",
    "rise": -3.95,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -3,
    "etfName": "化工ETF",
    "code": "885551"
  },
  {
    "name": "液冷服务器",
    "rise": 0.46,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  }
];
const THS_EVENTS = [
  {
    "title": "宇树科技 IPO注册申请获批",
    "desc": "",
    "heat": 748175,
    "direction": "宇树机器人",
    "themes": [
      "宇树科技",
      "人形机器人",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "丰光精密",
        "code": "920510",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "【观点】南华期货：非农不及预期贵金属强势反弹",
    "desc": "",
    "heat": 578093,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "白银"
    ],
    "stocks": [
      {
        "name": "晓程科技",
        "code": "300139",
        "chg": 12.861901
      }
    ]
  },
  {
    "title": "中报净利环比暴涨410%！AI交换机龙头锐捷网络霸榜",
    "desc": "",
    "heat": 100179,
    "direction": "交换机",
    "themes": [
      "交换机"
    ],
    "stocks": [
      {
        "name": "锐捷网络",
        "code": "301165",
        "chg": 11.307918
      }
    ]
  },
  {
    "title": "资金追捧中报预喜股，机构认为业绩将成为7月市场主线",
    "desc": "",
    "heat": 71369,
    "direction": "2026中报预增",
    "themes": [
      "2026中报预增"
    ],
    "stocks": [
      {
        "name": "吉和昌",
        "code": "920193",
        "chg": 29.99181
      }
    ]
  },
  {
    "title": "苹果上调折叠屏iPhone备货量至1000万部",
    "desc": "",
    "heat": 57832,
    "direction": "苹果折叠屏手机",
    "themes": [
      "苹果概念",
      "柔性屏(折叠屏)"
    ],
    "stocks": [
      {
        "name": "信濠光电",
        "code": "301051",
        "chg": 17.069409
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄金",
    "change": "+8.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减速器",
    "change": "+6.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "轮边电机",
    "change": "+5.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+4.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人形机器人",
    "change": "+4.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "SpaceX概念股",
    "change": "+4.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "一体化压铸",
    "change": "+4.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车热管理",
    "change": "+4.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新能源车零部件",
    "change": "+3.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "重卡",
    "change": "+3.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车零部件",
    "change": "+3.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "自动刹车",
    "change": "+3.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "燃气轮机",
    "change": "+3.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "通用航空",
    "change": "+3.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机械",
    "change": "+3.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农机",
    "change": "+3.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为汽车",
    "change": "+3.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+3.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机器人",
    "change": "+3.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "邮轮游艇",
    "change": "+3.37%",
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
    "stock_cnt": 5751,
    "price": "8.38",
    "change": "-7.91",
    "market_id": "33",
    "circulate_market_value": "296376580000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.58
      },
      {
        "name": "手机产业链",
        "change_pct": 0.62
      },
      {
        "name": "超高清视频",
        "change_pct": -0.68
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.89
      },
      {
        "name": "半导体",
        "change_pct": -2.57
      },
      {
        "name": "人工智能",
        "change_pct": 1.03
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.32
      },
      {
        "name": "VR&AR",
        "change_pct": -0.09
      },
      {
        "name": "OLED",
        "change_pct": -2.68
      },
      {
        "name": "京津冀",
        "change_pct": 0.79
      },
      {
        "name": "物联网",
        "change_pct": 1.17
      },
      {
        "name": "指纹识别",
        "change_pct": -1.57
      },
      {
        "name": "汽车零部件",
        "change_pct": 3.93
      },
      {
        "name": "白马股",
        "change_pct": 0.87
      },
      {
        "name": "智能制造",
        "change_pct": 1.87
      },
      {
        "name": "小米概念股",
        "change_pct": 0.37
      },
      {
        "name": "国产芯片",
        "change_pct": -0.98
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.12
      },
      {
        "name": "全息概念",
        "change_pct": 0.36
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 3.14
      },
      {
        "name": "MicroLED",
        "change_pct": -2.61
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.87
      },
      {
        "name": "智能手表",
        "change_pct": 1.79
      },
      {
        "name": "MiniLED",
        "change_pct": -1.34
      },
      {
        "name": "传感器",
        "change_pct": 0.91
      },
      {
        "name": "大硅片",
        "change_pct": -6.19
      },
      {
        "name": "AI PC",
        "change_pct": -0.12
      },
      {
        "name": "华为产业链",
        "change_pct": 0.56
      },
      {
        "name": "回购",
        "change_pct": 1.17
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.19
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.52
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 6,
    "hot_rank_chg": 3,
    "stock_cnt": 5751,
    "price": "9.37",
    "change": "-9.38",
    "market_id": "33",
    "circulate_market_value": "15232751000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.99
      },
      {
        "name": "电竞",
        "change_pct": -0.01
      },
      {
        "name": "手游",
        "change_pct": -0.71
      },
      {
        "name": "强势人气股",
        "change_pct": 0.82
      },
      {
        "name": "人工智能",
        "change_pct": 1.03
      },
      {
        "name": "游戏",
        "change_pct": -0.15
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.64
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.32
      },
      {
        "name": "快手概念股",
        "change_pct": -2.13
      },
      {
        "name": "元宇宙",
        "change_pct": -0.24
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.45
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.26
      },
      {
        "name": "web3.0",
        "change_pct": -0.88
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.7
      },
      {
        "name": "数据要素",
        "change_pct": 0.33
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.75
      },
      {
        "name": "AI营销",
        "change_pct": -2.65
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.48
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.19
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.37
      },
      {
        "name": "人形机器人",
        "change_pct": 4.55
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.35
      },
      {
        "name": "多模态",
        "change_pct": -0.53
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -1.57
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.66
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.98
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 9,
    "hot_rank_chg": 6,
    "stock_cnt": 5751,
    "price": "7.67",
    "change": "4.64",
    "market_id": "17",
    "circulate_market_value": "95078003000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.11
      },
      {
        "name": "核电",
        "change_pct": 1.93
      },
      {
        "name": "强势人气股",
        "change_pct": 0.82
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.43
      },
      {
        "name": "水电",
        "change_pct": 0.53
      },
      {
        "name": "火电",
        "change_pct": 0.19
      },
      {
        "name": "光伏",
        "change_pct": -0.16
      },
      {
        "name": "风电",
        "change_pct": 1.9
      },
      {
        "name": "国企改革",
        "change_pct": 1.0
      },
      {
        "name": "算电协同",
        "change_pct": 0.07
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 27,
    "hot_rank_chg": 12,
    "stock_cnt": 5751,
    "price": "6.14",
    "change": "1.66",
    "market_id": "33",
    "circulate_market_value": "7961956800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.77
      },
      {
        "name": "创新药",
        "change_pct": 2.26
      },
      {
        "name": "央企改革",
        "change_pct": 1.11
      },
      {
        "name": "医疗器械",
        "change_pct": 2.05
      },
      {
        "name": "强势人气股",
        "change_pct": 0.82
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.32
      },
      {
        "name": "保健品",
        "change_pct": 1.83
      },
      {
        "name": "民营医院",
        "change_pct": 1.23
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 1.96
      },
      {
        "name": "医药",
        "change_pct": 1.6
      },
      {
        "name": "化学原料药",
        "change_pct": 1.34
      },
      {
        "name": "海南概念",
        "change_pct": -0.67
      },
      {
        "name": "脑科学",
        "change_pct": 1.69
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.45
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.18
      },
      {
        "name": "食品",
        "change_pct": 1.31
      },
      {
        "name": "国企改革",
        "change_pct": 1.0
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.18
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.04
      },
      {
        "name": "自贸区",
        "change_pct": 0.89
      },
      {
        "name": "合成生物",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 29,
    "hot_rank_chg": 3,
    "stock_cnt": 5751,
    "price": "5.65",
    "change": "-4.56",
    "market_id": "33",
    "circulate_market_value": "108095994000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.58
      },
      {
        "name": "手机产业链",
        "change_pct": 0.62
      },
      {
        "name": "超高清视频",
        "change_pct": -0.68
      },
      {
        "name": "半导体",
        "change_pct": -2.57
      },
      {
        "name": "OLED",
        "change_pct": -2.68
      },
      {
        "name": "光伏",
        "change_pct": -0.16
      },
      {
        "name": "黑色家电",
        "change_pct": 0.69
      },
      {
        "name": "家电",
        "change_pct": 2.27
      },
      {
        "name": "智能制造",
        "change_pct": 1.87
      },
      {
        "name": "工业互联网",
        "change_pct": 1.85
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.37
      },
      {
        "name": "国产芯片",
        "change_pct": -0.98
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.32
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.12
      },
      {
        "name": "MicroLED",
        "change_pct": -2.61
      },
      {
        "name": "MiniLED",
        "change_pct": -1.34
      },
      {
        "name": "华为产业链",
        "change_pct": 0.56
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.52
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 50,
    "hot_rank_chg": 19,
    "stock_cnt": 5751,
    "price": "5.14",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "5309290000.00",
    "change_type": "1",
    "change_section": "13",
    "change_days": "7",
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.34
      },
      {
        "name": "锂电池",
        "change_pct": -0.43
      },
      {
        "name": "强势人气股",
        "change_pct": 0.82
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.05
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.08
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.99
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 1.17
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 51,
    "hot_rank_chg": 21,
    "stock_cnt": 5751,
    "price": "6.93",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "14160320000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.43
      },
      {
        "name": "军民融合",
        "change_pct": 2.22
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.59
      },
      {
        "name": "烧碱",
        "change_pct": -2.17
      },
      {
        "name": "军工",
        "change_pct": 2.18
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.99
      },
      {
        "name": "环氧丙烷",
        "change_pct": -2.64
      },
      {
        "name": "氟化工",
        "change_pct": -5.5
      },
      {
        "name": "双氧水",
        "change_pct": -2.66
      },
      {
        "name": "液氯",
        "change_pct": -5.46
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 58,
    "hot_rank_chg": 1,
    "stock_cnt": 5751,
    "price": "6.98",
    "change": "-10.05",
    "market_id": "33",
    "circulate_market_value": "13367345300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.98
      },
      {
        "name": "林业",
        "change_pct": -0.14
      },
      {
        "name": "民营医院",
        "change_pct": 1.23
      },
      {
        "name": "碳中和",
        "change_pct": 0.23
      },
      {
        "name": "自贸区",
        "change_pct": 0.89
      }
    ]
  },
  {
    "code": "600376",
    "name": "首开股份",
    "hot_rank": 66,
    "hot_rank_chg": -1,
    "stock_cnt": 5751,
    "price": "3.81",
    "change": "10.12",
    "market_id": "17",
    "circulate_market_value": "9828143600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "间接持股宇树科技",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.89
      },
      {
        "name": "京津冀",
        "change_pct": 0.79
      },
      {
        "name": "雄安新区",
        "change_pct": 1.06
      },
      {
        "name": "北京城市规划",
        "change_pct": 1.01
      },
      {
        "name": "住房租赁",
        "change_pct": 1.35
      },
      {
        "name": "物业管理",
        "change_pct": 1.67
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 71,
    "hot_rank_chg": 4,
    "stock_cnt": 5751,
    "price": "11.63",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "6917855400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "债务重组",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 1.21
      },
      {
        "name": "VR&AR",
        "change_pct": -0.09
      },
      {
        "name": "装修装饰",
        "change_pct": 1.23
      },
      {
        "name": "数字经济",
        "change_pct": 0.64
      },
      {
        "name": "百度概念股",
        "change_pct": 0.24
      },
      {
        "name": "全息概念",
        "change_pct": 0.36
      },
      {
        "name": "NFT",
        "change_pct": -0.05
      },
      {
        "name": "元宇宙",
        "change_pct": -0.24
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.45
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.45
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.48
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.19
      },
      {
        "name": "多模态",
        "change_pct": -0.53
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -1.57
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 91,
    "hot_rank_chg": -20,
    "stock_cnt": 5751,
    "price": "8.33",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "15509923000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "具身智能",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": 1.65
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.57
      },
      {
        "name": "军民融合",
        "change_pct": 2.22
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.59
      },
      {
        "name": "风电",
        "change_pct": 1.9
      },
      {
        "name": "军工",
        "change_pct": 2.18
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.99
      },
      {
        "name": "新能源车零部件",
        "change_pct": 3.99
      },
      {
        "name": "轮边电机",
        "change_pct": 5.63
      },
      {
        "name": "人形机器人",
        "change_pct": 4.55
      }
    ]
  },
  {
    "code": "000656",
    "name": "金科股份",
    "hot_rank": 93,
    "hot_rank_chg": 16,
    "stock_cnt": 5751,
    "price": "1.30",
    "change": "10.17",
    "market_id": "33",
    "circulate_market_value": "9863553700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "摘帽",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.79
      },
      {
        "name": "房地产",
        "change_pct": 0.89
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.09
      },
      {
        "name": "复牌股",
        "change_pct": 2.8
      },
      {
        "name": "物业管理",
        "change_pct": 1.67
      },
      {
        "name": "低价股",
        "change_pct": 1.27
      }
    ]
  },
  {
    "code": "002520",
    "name": "日发精机",
    "hot_rank": 99,
    "hot_rank_chg": -6,
    "stock_cnt": 5751,
    "price": "7.72",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "5538638100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "通用航空",
        "change_pct": 3.67
      },
      {
        "name": "工业自动化",
        "change_pct": 2.66
      },
      {
        "name": "大飞机",
        "change_pct": 2.54
      },
      {
        "name": "军民融合",
        "change_pct": 2.22
      },
      {
        "name": "风电",
        "change_pct": 1.9
      },
      {
        "name": "军工",
        "change_pct": 2.18
      },
      {
        "name": "机器人",
        "change_pct": 3.38
      },
      {
        "name": "智能制造",
        "change_pct": 1.87
      },
      {
        "name": "工业母机",
        "change_pct": 2.55
      },
      {
        "name": "减速器",
        "change_pct": 6.73
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 100,
    "hot_rank_chg": 0,
    "stock_cnt": 5751,
    "price": "10.37",
    "change": "-5.98",
    "market_id": "33",
    "circulate_market_value": "41891272000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -2.57
      },
      {
        "name": "一带一路",
        "change_pct": 1.44
      },
      {
        "name": "京津冀",
        "change_pct": 0.79
      },
      {
        "name": "光伏",
        "change_pct": -0.16
      },
      {
        "name": "碳中和",
        "change_pct": 0.23
      },
      {
        "name": "国产芯片",
        "change_pct": -0.98
      },
      {
        "name": "IGBT",
        "change_pct": -0.83
      },
      {
        "name": "颗粒硅",
        "change_pct": -2.37
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.78
      },
      {
        "name": "大硅片",
        "change_pct": -6.19
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "301308", "name": "江波龙", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5751, "price": "618.02", "change": "3.14", "market_id": "33", "circulate_market_value": "174190110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5751, "price": "8.38", "change": "-7.91", "market_id": "33", "circulate_market_value": "296376580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.58}, {"name": "手机产业链", "change_pct": 0.62}, {"name": "超高清视频", "change_pct": -0.68}, {"name": "苹果产业链", "change_pct": 0.89}, {"name": "半导体", "change_pct": -2.57}, {"name": "人工智能", "change_pct": 1.03}, {"name": "互联网医疗", "change_pct": 1.32}, {"name": "VR&AR", "change_pct": -0.09}, {"name": "OLED", "change_pct": -2.68}, {"name": "京津冀", "change_pct": 0.79}, {"name": "物联网", "change_pct": 1.17}, {"name": "指纹识别", "change_pct": -1.57}, {"name": "汽车零部件", "change_pct": 3.93}, {"name": "白马股", "change_pct": 0.87}, {"name": "智能制造", "change_pct": 1.87}, {"name": "小米概念股", "change_pct": 0.37}, {"name": "国产芯片", "change_pct": -0.98}, {"name": "液晶面板/LCD", "change_pct": -3.12}, {"name": "全息概念", "change_pct": 0.36}, {"name": "理想汽车概念股", "change_pct": 3.14}, {"name": "MicroLED", "change_pct": -2.61}, {"name": "钙钛矿电池", "change_pct": -0.87}, {"name": "智能手表", "change_pct": 1.79}, {"name": "MiniLED", "change_pct": -1.34}, {"name": "传感器", "change_pct": 0.91}, {"name": "大硅片", "change_pct": -6.19}, {"name": "AI PC", "change_pct": -0.12}, {"name": "华为产业链", "change_pct": 0.56}, {"name": "回购", "change_pct": 1.17}, {"name": "智能眼镜/MR头显", "change_pct": 0.19}, {"name": "玻璃基板封装", "change_pct": -3.52}]}, {"code": "002407", "name": "多氟多", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5751, "price": "49.34", "change": "-10.00", "market_id": "33", "circulate_market_value": "53226381000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5751, "price": "44.77", "change": "10.00", "market_id": "33", "circulate_market_value": "35028255000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "拟收购酷卓"}, {"code": "600667", "name": "太极实业", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5751, "price": "29.96", "change": "3.70", "market_id": "17", "circulate_market_value": "62662604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 6, "hot_rank_chg": 3, "stock_cnt": 5751, "price": "9.37", "change": "-9.38", "market_id": "33", "circulate_market_value": "15232751000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.99}, {"name": "电竞", "change_pct": -0.01}, {"name": "手游", "change_pct": -0.71}, {"name": "强势人气股", "change_pct": 0.82}, {"name": "人工智能", "change_pct": 1.03}, {"name": "游戏", "change_pct": -0.15}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.64}, {"name": "腾讯概念股", "change_pct": 0.32}, {"name": "快手概念股", "change_pct": -2.13}, {"name": "元宇宙", "change_pct": -0.24}, {"name": "虚拟数字人", "change_pct": -0.45}, {"name": "东数西算/算力", "change_pct": 0.26}, {"name": "web3.0", "change_pct": -0.88}, {"name": "AIGC概念", "change_pct": -0.7}, {"name": "数据要素", "change_pct": 0.33}, {"name": "字节跳动概念股", "change_pct": -0.75}, {"name": "AI营销", "change_pct": -2.65}, {"name": "ChatGPT", "change_pct": -0.48}, {"name": "智能眼镜/MR头显", "change_pct": 0.19}, {"name": "人工智能大模型", "change_pct": 0.37}, {"name": "人形机器人", "change_pct": 4.55}, {"name": "短剧/互动影游", "change_pct": -1.35}, {"name": "多模态", "change_pct": -0.53}, {"name": "Sora/AI视频", "change_pct": -1.57}, {"name": "IP经济/谷子经济", "change_pct": 0.66}, {"name": "小红书概念股", "change_pct": -1.98}]}, {"code": "002050", "name": "三花智控", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5751, "price": "48.99", "change": "9.06", "market_id": "33", "circulate_market_value": "180488840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 8, "hot_rank_chg": 4, "stock_cnt": 5751, "price": "90.88", "change": "-5.31", "market_id": "17", "circulate_market_value": "162622000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 9, "hot_rank_chg": 6, "stock_cnt": 5751, "price": "7.67", "change": "4.64", "market_id": "17", "circulate_market_value": "95078003000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.11}, {"name": "核电", "change_pct": 1.93}, {"name": "强势人气股", "change_pct": 0.82}, {"name": "电力体制改革", "change_pct": 0.43}, {"name": "水电", "change_pct": 0.53}, {"name": "火电", "change_pct": 0.19}, {"name": "光伏", "change_pct": -0.16}, {"name": "风电", "change_pct": 1.9}, {"name": "国企改革", "change_pct": 1.0}, {"name": "算电协同", "change_pct": 0.07}]}, {"code": "000021", "name": "深科技", "hot_rank": 10, "hot_rank_chg": 4, "stock_cnt": 5751, "price": "55.91", "change": "-0.21", "market_id": "33", "circulate_market_value": "88011038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 11, "hot_rank_chg": -1, "stock_cnt": 5751, "price": "89.42", "change": "-4.71", "market_id": "17", "circulate_market_value": "218648100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 12, "hot_rank_chg": 1, "stock_cnt": 5751, "price": "22.02", "change": "-8.06", "market_id": "33", "circulate_market_value": "23394131000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 13, "hot_rank_chg": -5, "stock_cnt": 5751, "price": "881.91", "change": "8.74", "market_id": "33", "circulate_market_value": "145575130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 14, "hot_rank_chg": -7, "stock_cnt": 5751, "price": "49.00", "change": "2.96", "market_id": "17", "circulate_market_value": "33877405000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 15, "hot_rank_chg": -4, "stock_cnt": 5751, "price": "677.77", "change": "-2.45", "market_id": "17", "circulate_market_value": "453083780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5751, "price": "70.90", "change": "4.54", "market_id": "17", "circulate_market_value": "281585520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 17, "hot_rank_chg": 2, "stock_cnt": 5751, "price": "232.73", "change": "4.99", "market_id": "33", "circulate_market_value": "322638650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 18, "hot_rank_chg": 0, "stock_cnt": 5751, "price": "37.35", "change": "10.02", "market_id": "17", "circulate_market_value": "58177574000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接持股宇树"}, {"code": "600522", "name": "中天科技", "hot_rank": 19, "hot_rank_chg": -2, "stock_cnt": 5751, "price": "50.22", "change": "-2.64", "market_id": "17", "circulate_market_value": "171398330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 20, "hot_rank_chg": 5, "stock_cnt": 5751, "price": "54.30", "change": "-6.07", "market_id": "17", "circulate_market_value": "45967846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688017", "name": "绿的谐波", "hot_rank": 21, "hot_rank_chg": -1, "stock_cnt": 5751, "price": "488.00", "change": "18.15", "market_id": "17", "circulate_market_value": "89465101000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 22, "hot_rank_chg": 8, "stock_cnt": 5751, "price": "63.23", "change": "-5.57", "market_id": "33", "circulate_market_value": "73157939000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002472", "name": "双环传动", "hot_rank": 23, "hot_rank_chg": -1, "stock_cnt": 5751, "price": "47.01", "change": "9.99", "market_id": "33", "circulate_market_value": "35191468000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人"}, {"code": "002979", "name": "雷赛智能", "hot_rank": 24, "hot_rank_chg": -1, "stock_cnt": 5751, "price": "69.55", "change": "9.99", "market_id": "33", "circulate_market_value": "15491794000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "2026中报预增"}, {"code": "600110", "name": "诺德股份", "hot_rank": 25, "hot_rank_chg": 8, "stock_cnt": 5751, "price": "15.75", "change": "8.40", "market_id": "17", "circulate_market_value": "27329100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 26, "hot_rank_chg": 5, "stock_cnt": 5751, "price": "15.02", "change": "-10.01", "market_id": "17", "circulate_market_value": "53886799000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 27, "hot_rank_chg": 12, "stock_cnt": 5751, "price": "6.14", "change": "1.66", "market_id": "33", "circulate_market_value": "7961956800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.77}, {"name": "创新药", "change_pct": 2.26}, {"name": "央企改革", "change_pct": 1.11}, {"name": "医疗器械", "change_pct": 2.05}, {"name": "强势人气股", "change_pct": 0.82}, {"name": "互联网医疗", "change_pct": 1.32}, {"name": "保健品", "change_pct": 1.83}, {"name": "民营医院", "change_pct": 1.23}, {"name": "CAR-T疗法", "change_pct": 1.96}, {"name": "医药", "change_pct": 1.6}, {"name": "化学原料药", "change_pct": 1.34}, {"name": "海南概念", "change_pct": -0.67}, {"name": "脑科学", "change_pct": 1.69}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.45}, {"name": "海南自由贸易港", "change_pct": -0.18}, {"name": "食品", "change_pct": 1.31}, {"name": "国企改革", "change_pct": 1.0}, {"name": "医疗信息化", "change_pct": 1.18}, {"name": "新冠病毒防治", "change_pct": 1.04}, {"name": "自贸区", "change_pct": 0.89}, {"name": "合成生物", "change_pct": 1.48}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 28, "hot_rank_chg": 0, "stock_cnt": 5751, "price": "1116.00", "change": "-2.36", "market_id": "33", "circulate_market_value": "1238692790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 29, "hot_rank_chg": 3, "stock_cnt": 5751, "price": "5.65", "change": "-4.56", "market_id": "33", "circulate_market_value": "108095994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.58}, {"name": "手机产业链", "change_pct": 0.62}, {"name": "超高清视频", "change_pct": -0.68}, {"name": "半导体", "change_pct": -2.57}, {"name": "OLED", "change_pct": -2.68}, {"name": "光伏", "change_pct": -0.16}, {"name": "黑色家电", "change_pct": 0.69}, {"name": "家电", "change_pct": 2.27}, {"name": "智能制造", "change_pct": 1.87}, {"name": "工业互联网", "change_pct": 1.85}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.37}, {"name": "国产芯片", "change_pct": -0.98}, {"name": "腾讯概念股", "change_pct": 0.32}, {"name": "液晶面板/LCD", "change_pct": -3.12}, {"name": "MicroLED", "change_pct": -2.61}, {"name": "MiniLED", "change_pct": -1.34}, {"name": "华为产业链", "change_pct": 0.56}, {"name": "玻璃基板封装", "change_pct": -3.52}]}, {"code": "603629", "name": "利通电子", "hot_rank": 30, "hot_rank_chg": 15, "stock_cnt": 5751, "price": "166.61", "change": "-4.28", "market_id": "17", "circulate_market_value": "42990545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601689", "name": "拓普集团", "hot_rank": 31, "hot_rank_chg": -4, "stock_cnt": 5751, "price": "62.43", "change": "10.01", "market_id": "17", "circulate_market_value": "108493075000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "300223", "name": "北京君正", "hot_rank": 32, "hot_rank_chg": -11, "stock_cnt": 5751, "price": "259.56", "change": "10.61", "market_id": "33", "circulate_market_value": "109454954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 33, "hot_rank_chg": -7, "stock_cnt": 5751, "price": "64.67", "change": "-10.01", "market_id": "17", "circulate_market_value": "49938133000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 34, "hot_rank_chg": 1, "stock_cnt": 5751, "price": "24.59", "change": "4.59", "market_id": "33", "circulate_market_value": "82708590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 35, "hot_rank_chg": -1, "stock_cnt": 5751, "price": "42.14", "change": "-10.00", "market_id": "33", "circulate_market_value": "18144082000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 36, "hot_rank_chg": 1, "stock_cnt": 5751, "price": "18.02", "change": "4.89", "market_id": "33", "circulate_market_value": "129738680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 37, "hot_rank_chg": 10, "stock_cnt": 5751, "price": "16.86", "change": "-6.49", "market_id": "17", "circulate_market_value": "21517672000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 38, "hot_rank_chg": 0, "stock_cnt": 5751, "price": "19.51", "change": "-3.75", "market_id": "33", "circulate_market_value": "64824936000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300718", "name": "长盛轴承", "hot_rank": 39, "hot_rank_chg": 3, "stock_cnt": 5751, "price": "77.23", "change": "20.00", "market_id": "33", "circulate_market_value": "15187842000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人"}, {"code": "600160", "name": "巨化股份", "hot_rank": 40, "hot_rank_chg": 15, "stock_cnt": 5751, "price": "49.35", "change": "-9.99", "market_id": "17", "circulate_market_value": "133232469000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 41, "hot_rank_chg": -12, "stock_cnt": 5751, "price": "88.47", "change": "5.86", "market_id": "33", "circulate_market_value": "308460700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 42, "hot_rank_chg": -2, "stock_cnt": 5751, "price": "56.26", "change": "-1.12", "market_id": "17", "circulate_market_value": "21695952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600143", "name": "金发科技", "hot_rank": 43, "hot_rank_chg": 1, "stock_cnt": 5751, "price": "17.01", "change": "10.03", "market_id": "17", "circulate_market_value": "44818391000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接持股宇树科技"}, {"code": "601211", "name": "国泰海通", "hot_rank": 44, "hot_rank_chg": -1, "stock_cnt": 5751, "price": "19.37", "change": "1.04", "market_id": "17", "circulate_market_value": "261435150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 45, "hot_rank_chg": 171, "stock_cnt": 5751, "price": "14.70", "change": "-7.20", "market_id": "17", "circulate_market_value": "5008348800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 46, "hot_rank_chg": -22, "stock_cnt": 5751, "price": "54.04", "change": "-1.46", "market_id": "33", "circulate_market_value": "81546955000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 47, "hot_rank_chg": 11, "stock_cnt": 5751, "price": "76.01", "change": "-7.50", "market_id": "17", "circulate_market_value": "81525693000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 48, "hot_rank_chg": 0, "stock_cnt": 5751, "price": "27.82", "change": "5.78", "market_id": "17", "circulate_market_value": "573141890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002635", "name": "安洁科技", "hot_rank": 49, "hot_rank_chg": 1, "stock_cnt": 5751, "price": "23.36", "change": "9.98", "market_id": "33", "circulate_market_value": "9239653400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "收购苏州志烽51%股权"}, {"code": "002141", "name": "贤丰控股", "hot_rank": 50, "hot_rank_chg": 19, "stock_cnt": 5751, "price": "5.14", "change": "10.06", "market_id": "33", "circulate_market_value": "5309290000.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.34}, {"name": "锂电池", "change_pct": -0.43}, {"name": "强势人气股", "change_pct": 0.82}, {"name": "铜箔/覆铜板", "change_pct": -0.05}, {"name": "粤港澳大湾区", "change_pct": 1.08}, {"name": "新能源汽车", "change_pct": 1.99}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 1.17}]}, {"code": "601678", "name": "滨化股份", "hot_rank": 51, "hot_rank_chg": 21, "stock_cnt": 5751, "price": "6.93", "change": "-10.00", "market_id": "17", "circulate_market_value": "14160320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.43}, {"name": "军民融合", "change_pct": 2.22}, {"name": "氢能源/燃料电池", "change_pct": 1.59}, {"name": "烧碱", "change_pct": -2.17}, {"name": "军工", "change_pct": 2.18}, {"name": "新能源汽车", "change_pct": 1.99}, {"name": "环氧丙烷", "change_pct": -2.64}, {"name": "氟化工", "change_pct": -5.5}, {"name": "双氧水", "change_pct": -2.66}, {"name": "液氯", "change_pct": -5.46}]}, {"code": "300503", "name": "昊志机电", "hot_rank": 52, "hot_rank_chg": -11, "stock_cnt": 5751, "price": "111.00", "change": "16.99", "market_id": "33", "circulate_market_value": "26748236000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 53, "hot_rank_chg": 4, "stock_cnt": 5751, "price": "160.78", "change": "5.81", "market_id": "17", "circulate_market_value": "384987960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 54, "hot_rank_chg": -5, "stock_cnt": 5751, "price": "199.50", "change": "-6.11", "market_id": "33", "circulate_market_value": "63545288000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 55, "hot_rank_chg": -19, "stock_cnt": 5751, "price": "19.50", "change": "-9.01", "market_id": "33", "circulate_market_value": "23395920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002896", "name": "中大力德", "hot_rank": 56, "hot_rank_chg": -2, "stock_cnt": 5751, "price": "85.62", "change": "9.99", "market_id": "33", "circulate_market_value": "16826271000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "600641", "name": "先导基电", "hot_rank": 57, "hot_rank_chg": 5, "stock_cnt": 5751, "price": "47.51", "change": "-1.51", "market_id": "17", "circulate_market_value": "44214227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 58, "hot_rank_chg": 1, "stock_cnt": 5751, "price": "6.98", "change": "-10.05", "market_id": "33", "circulate_market_value": "13367345300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.98}, {"name": "林业", "change_pct": -0.14}, {"name": "民营医院", "change_pct": 1.23}, {"name": "碳中和", "change_pct": 0.23}, {"name": "自贸区", "change_pct": 0.89}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 59, "hot_rank_chg": -7, "stock_cnt": 5751, "price": "30.28", "change": "4.31", "market_id": "33", "circulate_market_value": "86603001000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603667", "name": "五洲新春", "hot_rank": 60, "hot_rank_chg": -4, "stock_cnt": 5751, "price": "76.15", "change": "8.51", "market_id": "17", "circulate_market_value": "27886341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002294", "name": "信立泰", "hot_rank": 61, "hot_rank_chg": -15, "stock_cnt": 5751, "price": "40.08", "change": "9.99", "market_id": "33", "circulate_market_value": "44671795000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}, {"code": "605189", "name": "富春染织", "hot_rank": 62, "hot_rank_chg": -9, "stock_cnt": 5751, "price": "16.05", "change": "10.01", "market_id": "17", "circulate_market_value": "3823670800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "人形机器人"}, {"code": "002559", "name": "亚威股份", "hot_rank": 64, "hot_rank_chg": 18, "stock_cnt": 5751, "price": "14.24", "change": "-7.41", "market_id": "33", "circulate_market_value": "7177031300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001270", "name": "铖昌科技", "hot_rank": 65, "hot_rank_chg": -1, "stock_cnt": 5751, "price": "163.32", "change": "10.00", "market_id": "33", "circulate_market_value": "33448468000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "600376", "name": "首开股份", "hot_rank": 66, "hot_rank_chg": -1, "stock_cnt": 5751, "price": "3.81", "change": "10.12", "market_id": "17", "circulate_market_value": "9828143600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接持股宇树科技", "xgb_concepts": [{"name": "房地产", "change_pct": 0.89}, {"name": "京津冀", "change_pct": 0.79}, {"name": "雄安新区", "change_pct": 1.06}, {"name": "北京城市规划", "change_pct": 1.01}, {"name": "住房租赁", "change_pct": 1.35}, {"name": "物业管理", "change_pct": 1.67}]}, {"code": "600703", "name": "三安光电", "hot_rank": 67, "hot_rank_chg": 3, "stock_cnt": 5751, "price": "18.23", "change": "-4.25", "market_id": "17", "circulate_market_value": "90949811000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 68, "hot_rank_chg": 10, "stock_cnt": 5751, "price": "15.12", "change": "1.34", "market_id": "17", "circulate_market_value": "63054834000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 69, "hot_rank_chg": 10, "stock_cnt": 5751, "price": "23.40", "change": "10.01", "market_id": "33", "circulate_market_value": "17723513000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "数据中心交换机"}, {"code": "920510", "name": "丰光精密", "hot_rank": 70, "hot_rank_chg": 16, "stock_cnt": 5751, "price": "32.76", "change": "30.00", "market_id": "151", "circulate_market_value": "3076133800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "603466", "name": "风语筑", "hot_rank": 71, "hot_rank_chg": 4, "stock_cnt": 5751, "price": "11.63", "change": "10.03", "market_id": "17", "circulate_market_value": "6917855400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "债务重组", "xgb_concepts": [{"name": "数字孪生", "change_pct": 1.21}, {"name": "VR&AR", "change_pct": -0.09}, {"name": "装修装饰", "change_pct": 1.23}, {"name": "数字经济", "change_pct": 0.64}, {"name": "百度概念股", "change_pct": 0.24}, {"name": "全息概念", "change_pct": 0.36}, {"name": "NFT", "change_pct": -0.05}, {"name": "元宇宙", "change_pct": -0.24}, {"name": "虚拟数字人", "change_pct": -0.45}, {"name": "网红/MCN", "change_pct": 0.45}, {"name": "ChatGPT", "change_pct": -0.48}, {"name": "智能眼镜/MR头显", "change_pct": 0.19}, {"name": "多模态", "change_pct": -0.53}, {"name": "Sora/AI视频", "change_pct": -1.57}]}, {"code": "600460", "name": "士兰微", "hot_rank": 72, "hot_rank_chg": -9, "stock_cnt": 5751, "price": "47.25", "change": "-6.44", "market_id": "17", "circulate_market_value": "78627395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 73, "hot_rank_chg": -7, "stock_cnt": 5751, "price": "64.80", "change": "-3.81", "market_id": "33", "circulate_market_value": "98330904000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 74, "hot_rank_chg": 17, "stock_cnt": 5751, "price": "75.34", "change": "5.70", "market_id": "33", "circulate_market_value": "15162441000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 75, "hot_rank_chg": -2, "stock_cnt": 5751, "price": "135.35", "change": "3.71", "market_id": "33", "circulate_market_value": "260252400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 76, "hot_rank_chg": -15, "stock_cnt": 5751, "price": "54.53", "change": "-2.99", "market_id": "17", "circulate_market_value": "79722577000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 77, "hot_rank_chg": 20, "stock_cnt": 5751, "price": "52.98", "change": "-9.09", "market_id": "17", "circulate_market_value": "17058139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002326", "name": "永太科技", "hot_rank": 78, "hot_rank_chg": -18, "stock_cnt": 5751, "price": "25.81", "change": "-7.82", "market_id": "33", "circulate_market_value": "20858585000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 79, "hot_rank_chg": 10, "stock_cnt": 5751, "price": "25.47", "change": "-4.36", "market_id": "33", "circulate_market_value": "29964662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 80, "hot_rank_chg": 25, "stock_cnt": 5751, "price": "25.04", "change": "-3.88", "market_id": "33", "circulate_market_value": "18998173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002056", "name": "横店东磁", "hot_rank": 81, "hot_rank_chg": 13, "stock_cnt": 5751, "price": "32.82", "change": "7.04", "market_id": "33", "circulate_market_value": "53333537000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 82, "hot_rank_chg": -5, "stock_cnt": 5751, "price": "64.72", "change": "1.09", "market_id": "17", "circulate_market_value": "1284309650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 83, "hot_rank_chg": 1, "stock_cnt": 5751, "price": "39.04", "change": "1.46", "market_id": "33", "circulate_market_value": "14651087000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 84, "hot_rank_chg": 18, "stock_cnt": 5751, "price": "106.95", "change": "-4.15", "market_id": "33", "circulate_market_value": "77465534000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 85, "hot_rank_chg": -5, "stock_cnt": 5751, "price": "475.08", "change": "2.31", "market_id": "17", "circulate_market_value": "193043210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 86, "hot_rank_chg": -19, "stock_cnt": 5751, "price": "86.30", "change": "5.89", "market_id": "17", "circulate_market_value": "102048812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300607", "name": "拓斯达", "hot_rank": 87, "hot_rank_chg": -19, "stock_cnt": 5751, "price": "52.96", "change": "13.55", "market_id": "33", "circulate_market_value": "17873966000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 89, "hot_rank_chg": -15, "stock_cnt": 5751, "price": "526.00", "change": "3.34", "market_id": "33", "circulate_market_value": "659731900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 90, "hot_rank_chg": 22, "stock_cnt": 5751, "price": "13.20", "change": "-4.49", "market_id": "17", "circulate_market_value": "19439730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002249", "name": "大洋电机", "hot_rank": 91, "hot_rank_chg": -20, "stock_cnt": 5751, "price": "8.33", "change": "10.04", "market_id": "33", "circulate_market_value": "15509923000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能", "xgb_concepts": [{"name": "充电桩", "change_pct": 1.65}, {"name": "云计算数据中心", "change_pct": 0.57}, {"name": "军民融合", "change_pct": 2.22}, {"name": "氢能源/燃料电池", "change_pct": 1.59}, {"name": "风电", "change_pct": 1.9}, {"name": "军工", "change_pct": 2.18}, {"name": "新能源汽车", "change_pct": 1.99}, {"name": "新能源车零部件", "change_pct": 3.99}, {"name": "轮边电机", "change_pct": 5.63}, {"name": "人形机器人", "change_pct": 4.55}]}, {"code": "603259", "name": "药明康德", "hot_rank": 92, "hot_rank_chg": -16, "stock_cnt": 5751, "price": "124.12", "change": "2.33", "market_id": "17", "circulate_market_value": "306983540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000656", "name": "金科股份", "hot_rank": 93, "hot_rank_chg": 16, "stock_cnt": 5751, "price": "1.30", "change": "10.17", "market_id": "33", "circulate_market_value": "9863553700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "摘帽", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.79}, {"name": "房地产", "change_pct": 0.89}, {"name": "ST摘帽", "change_pct": 2.09}, {"name": "复牌股", "change_pct": 2.8}, {"name": "物业管理", "change_pct": 1.67}, {"name": "低价股", "change_pct": 1.27}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 94, "hot_rank_chg": 4, "stock_cnt": 5751, "price": "89.63", "change": "-7.63", "market_id": "33", "circulate_market_value": "130225698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 95, "hot_rank_chg": -14, "stock_cnt": 5751, "price": "153.95", "change": "-1.44", "market_id": "33", "circulate_market_value": "154717540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 96, "hot_rank_chg": -45, "stock_cnt": 5751, "price": "427.91", "change": "2.17", "market_id": "17", "circulate_market_value": "201788090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002422", "name": "科伦药业", "hot_rank": 97, "hot_rank_chg": -12, "stock_cnt": 5751, "price": "47.98", "change": "7.22", "market_id": "33", "circulate_market_value": "62307925000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 98, "hot_rank_chg": 54, "stock_cnt": 5751, "price": "20.53", "change": "-7.44", "market_id": "33", "circulate_market_value": "9286515600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002520", "name": "日发精机", "hot_rank": 99, "hot_rank_chg": -6, "stock_cnt": 5751, "price": "7.72", "change": "9.97", "market_id": "33", "circulate_market_value": "5538638100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人", "xgb_concepts": [{"name": "通用航空", "change_pct": 3.67}, {"name": "工业自动化", "change_pct": 2.66}, {"name": "大飞机", "change_pct": 2.54}, {"name": "军民融合", "change_pct": 2.22}, {"name": "风电", "change_pct": 1.9}, {"name": "军工", "change_pct": 2.18}, {"name": "机器人", "change_pct": 3.38}, {"name": "智能制造", "change_pct": 1.87}, {"name": "工业母机", "change_pct": 2.55}, {"name": "减速器", "change_pct": 6.73}]}, {"code": "002129", "name": "TCL中环", "hot_rank": 100, "hot_rank_chg": 0, "stock_cnt": 5751, "price": "10.37", "change": "-5.98", "market_id": "33", "circulate_market_value": "41891272000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -2.57}, {"name": "一带一路", "change_pct": 1.44}, {"name": "京津冀", "change_pct": 0.79}, {"name": "光伏", "change_pct": -0.16}, {"name": "碳中和", "change_pct": 0.23}, {"name": "国产芯片", "change_pct": -0.98}, {"name": "IGBT", "change_pct": -0.83}, {"name": "颗粒硅", "change_pct": -2.37}, {"name": "异质结电池HJT", "change_pct": -0.78}, {"name": "大硅片", "change_pct": -6.19}]}];
const LIMIT_UP_POOL = [{"code": "002542", "name": "*ST中岩", "price": 1.31, "change_pct": 4.8, "reason": "公司的强夯机与盾构机等专用设备制造、地基处理、基坑支护、 地下连续墙、盾构掘进、矩形顶管等施工工艺技术保持国内领先国际先进水平", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 3.83, "first_limit_up": 1783041900, "break_limit_up_times": 3}, {"code": "002005", "name": "ST德豪", "price": 2.55, "change_pct": 4.94, "reason": "公司2025年扭亏为盈", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 1.57, "first_limit_up": 1783046307, "break_limit_up_times": 15}, {"code": "000656", "name": "金科股份", "price": 1.3, "change_pct": 10.17, "reason": "公司撤销退市风险警示及其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 2, "turnover_ratio": 0.07, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "002193", "name": "ST如意", "price": 4.59, "change_pct": 5.03, "reason": "国内毛纺小龙头", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.67, "first_limit_up": 1783049214, "break_limit_up_times": 0}, {"code": "301499", "name": "维科精密", "price": 34.74, "change_pct": 20.0, "reason": "公司拟与芯联基金共同投资半导体产业配套精密零部件及自动化产线项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 25.88, "first_limit_up": 1783057611, "break_limit_up_times": 0}, {"code": "601069", "name": "西部黄金", "price": 25.91, "change_pct": 10.02, "reason": "西北地区最大的黄金采选冶企业", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 2.18, "first_limit_up": 1783042515, "break_limit_up_times": 0}, {"code": "688311", "name": "盟升电子", "price": 31.15, "change_pct": 19.99, "reason": "公司是国内领先的卫星导航和卫星通信终端设备企业，成功研发出弹载导航数据链一体化终端产品，实现了民营企业在该领域内的首次突破", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 6.11, "first_limit_up": 1783058671, "break_limit_up_times": 5}, {"code": "002175", "name": "*ST东智", "price": 2.61, "change_pct": 4.82, "reason": "公司控制权拟变更，碳基新材料商东泰能源欲以5.47亿元入主", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 0.15, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "600265", "name": "*ST景谷", "price": 24.1, "change_pct": 5.01, "reason": "公司一季度净利润同比减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.23, "first_limit_up": 1783061253, "break_limit_up_times": 3}, {"code": "605068", "name": "明新旭腾", "price": 19.11, "change_pct": 10.02, "reason": "公司正积极接触柔性传感器公司，实现皮肤与传感器业务结合", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.09, "first_limit_up": 1783042523, "break_limit_up_times": 0}, {"code": "603915", "name": "国茂股份", "price": 16.03, "change_pct": 10.02, "reason": "公司是国内减速机行业龙头，为杭州云深处四足机器人定制开发的减速器，凭借其较高的重复定位精度以及传动平稳性，协助机器人在各种复杂环境下稳定行走和作业", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.34, "first_limit_up": 1783055334, "break_limit_up_times": 0}, {"code": "002677", "name": "浙江美大", "price": 6.23, "change_pct": 10.07, "reason": "国内集成灶龙头，市场占有率第一，专注于以集成灶产品为主的现代新型厨房电器的研产销", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 0.97, "first_limit_up": 1783042305, "break_limit_up_times": 0}, {"code": "603822", "name": "ST嘉澳", "price": 75.18, "change_pct": 5.0, "reason": "公司生物柴油产能为30万吨", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.25, "first_limit_up": 1783042303, "break_limit_up_times": 0}, {"code": "300912", "name": "凯龙高科", "price": 28.56, "change_pct": 20.0, "reason": "公司拟购买金旺达70%股权，后者专注研发与生产精密传动功能部件，有助于公司完善机器人产业链布局", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.04, "first_limit_up": 1783043103, "break_limit_up_times": 1}, {"code": "002496", "name": "辉丰股份", "price": 2.23, "change_pct": 9.85, "reason": "大型农药生产企业", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 8.84, "first_limit_up": 1783058763, "break_limit_up_times": 6}, {"code": "002141", "name": "贤丰控股", "price": 5.14, "change_pct": 10.06, "reason": "公司覆铜板上年度年产量近700万张，产品直接用于PCB生产", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 17.78, "first_limit_up": 1783048038, "break_limit_up_times": 36}, {"code": "002623", "name": "亚玛顿", "price": 17.15, "change_pct": 10.01, "reason": "光伏减反玻璃龙头", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.83, "first_limit_up": 1783047474, "break_limit_up_times": 0}, {"code": "300985", "name": "致远新能", "price": 49.67, "change_pct": 20.0, "reason": "国内重型卡车、工程车等商用车LNG供气系统的生产商；参股江苏申氢宸30%股权，该公司主营氢燃料电池阳极端喷氢器单元等核心部件，客户涵盖捷氢能源等企业，产品逐步进入量产阶段", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.31, "first_limit_up": 1783054899, "break_limit_up_times": 0}, {"code": "002360", "name": "ST同德", "price": 5.45, "change_pct": 5.01, "reason": "公司被申请重整，将开展重整投资人招募等工作", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 1.22, "first_limit_up": 1783042209, "break_limit_up_times": 1}, {"code": "002485", "name": "ST雪发", "price": 5.85, "change_pct": 5.03, "reason": "公司主要业务为供应链运营管理和综合服务、文化旅游业务及服装销售业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.0, "first_limit_up": 1783047540, "break_limit_up_times": 0}, {"code": "002471", "name": "中超控股", "price": 6.51, "change_pct": 9.97, "reason": "1、公司中标16.45亿元国家电网等项目；\n2、公司孙公司江苏精铸致力于航空航天、舰船燃机、医疗等方面的高温合金精密铸件，形成了自主可控的精密成型技术体系，已为航天科工火箭、上海空间推进研究所等单位提供航天火箭发动机高温合金精密铸件", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.98, "first_limit_up": 1783042383, "break_limit_up_times": 4}, {"code": "002148", "name": "北纬科技", "price": 6.56, "change_pct": 10.07, "reason": "参股公司天宇经纬与宇树科技在机器狗应用领域开展生态合作；预计上半年业绩同比扭亏", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.55, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "002122", "name": "ST汇洲", "price": 2.55, "change_pct": 4.94, "reason": "子公司北京热热文化科技的数据标注业务快速发展", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.34, "first_limit_up": 1783044180, "break_limit_up_times": 0}, {"code": "600769", "name": "祥龙电业", "price": 21.78, "change_pct": 10.0, "reason": "公司实控人武汉东湖新技术开发区管理委员会，与长江储存同一实控人", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.85, "first_limit_up": 1783048627, "break_limit_up_times": 2}, {"code": "002353", "name": "杰瑞股份", "price": 161.46, "change_pct": 10.0, "reason": "公司签署北美数据中心发电机组销售合同，合同金额超1亿美元，标志着公司模块化、智能化发电解决方案成功进入北美高端电力市场", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 2.36, "first_limit_up": 1783046664, "break_limit_up_times": 20}, {"code": "600530", "name": "交大昂立", "price": 5.7, "change_pct": 10.04, "reason": "1、公司运营6家营利性护理院/医院，为8家非营利性老年医疗护理机构输出管理咨询服务，总运营床位数近4000张，项目遍布江浙沪近10个城市；\n2、公司昂立益生菌卫生巾系列由演员佟丽娅代言，产品特别添加了昂立自有的4株复配菌株和2种益生元", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.51, "first_limit_up": 1783043430, "break_limit_up_times": 0}, {"code": "002528", "name": "*ST英飞", "price": 4.48, "change_pct": 4.92, "reason": "公司及全资子公司拟申请预重整及重整", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.45, "first_limit_up": 1783061652, "break_limit_up_times": 0}, {"code": "002981", "name": "朝阳科技", "price": 21.47, "change_pct": 9.99, "reason": "1、子公司星联技术的连接器产品主要应用于工业机器人、储能、新能源汽车等领域，2025年已实现部分工业机器人领域的产品交付；\n2、公司主营业务包括声学产品、精密零组件和OEM代工生产业务，产品广泛应用于智能手机、平板电脑及智能可穿戴设备等智能终，进入了苹果等知名终端品牌的供应链体系", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.23, "first_limit_up": 1783044393, "break_limit_up_times": 0}, {"code": "002850", "name": "科达利", "price": 226.16, "change_pct": 10.0, "reason": "国内最大的锂电池精密结构件供应商之一；公司人形机器人相关业务在谐波减速器和关节模组上布局，主要根据客户需求配套生产", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.27, "first_limit_up": 1783045062, "break_limit_up_times": 0}, {"code": "002872", "name": "ST天圣", "price": 5.03, "change_pct": 5.01, "reason": "公司年报及一季报业绩同比减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.93, "first_limit_up": 1783060962, "break_limit_up_times": 1}, {"code": "002270", "name": "华明装备", "price": 20.14, "change_pct": 9.99, "reason": "1、公司是国内首批实现特高压分接开关批量投运的企业，产品已用于±800kV陇东直流等工程；\n2、公司“双机器人等离子切割装备研发”项目将机器人技术、数控技术、等离子切割技术有机结合，采用两个五自由度机器人并行排列同时参与切割过程，能够完成复杂形状工件的三维切割", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.34, "first_limit_up": 1783045347, "break_limit_up_times": 0}, {"code": "002717", "name": "*ST岭南", "price": 1.07, "change_pct": 4.9, "reason": "公司收到行政处罚事先告知书", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 5.01, "first_limit_up": 1783060842, "break_limit_up_times": 0}, {"code": "603303", "name": "得邦照明", "price": 24.76, "change_pct": 10.0, "reason": "公司主要从事绿色照明产品的研产销，已形成了节能灯、LED灯泡和LED室内应用灯具等四大类绿色照明产品", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.11, "first_limit_up": 1783042825, "break_limit_up_times": 5}, {"code": "600730", "name": "*ST高科", "price": 12.16, "change_pct": 5.01, "reason": "公司主营职业教育；据公司官微，中国高科集团自主研发的AED-CPR心肺复苏一体机以及急救AI科普机器人经过选代发展，已获得较高的品牌知名度，布局覆盖海内外市场", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.18, "first_limit_up": 1783060875, "break_limit_up_times": 1}, {"code": "002168", "name": "ST惠程", "price": 3.82, "change_pct": 4.95, "reason": "重整投资人向公司无偿赠与现金资产3000万元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.46, "first_limit_up": 1783048863, "break_limit_up_times": 4}, {"code": "600391", "name": "航发科技", "price": 35.52, "change_pct": 10.0, "reason": "中国航发集团旗下发动机零部件平台；公司主营业务为航空发动机及燃气轮机及零部件的研产销", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 3.33, "first_limit_up": 1783042728, "break_limit_up_times": 1}, {"code": "300718", "name": "长盛轴承", "price": 77.23, "change_pct": 20.0, "reason": "公司与宇树科技的合作正在有序推进中，已签订合作协议并取得了订单", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.84, "first_limit_up": 1783055589, "break_limit_up_times": 0}, {"code": "600990", "name": "四创电子", "price": 19.13, "change_pct": 10.01, "reason": "1、公司PCB系列产品已应用于“海丝一号”商业SAR卫星，具备商业航天配套能力；子公司华耀电子空天电源创新中心正进行低轨卫星二次电源系统的研发技术攻关工作，努力承接型号项目；\n2、公司控股子公司华耀电子中标了 EAST 受控热核聚变装置电源模块项目，为其提供 4 套 PSM 电源高压系统，且华耀电子是合肥聚变产业联盟成员，在核聚变电源领域具备技术优势", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 2.94, "first_limit_up": 1783060079, "break_limit_up_times": 0}, {"code": "000838", "name": "*ST发展", "price": 1.77, "change_pct": 4.73, "reason": "重庆地区优质地产商", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.9, "first_limit_up": 1783043241, "break_limit_up_times": 0}, {"code": "600988", "name": "赤峰黄金", "price": 31.23, "change_pct": 10.0, "reason": "公司位于内蒙古赤峰境内，是国内矿产品位最高的金矿之一", "plates": ["黄金"], "limit_up_days": 2, "turnover_ratio": 2.24, "first_limit_up": 1783042297, "break_limit_up_times": 0}, {"code": "002822", "name": "ST中装", "price": 3.43, "change_pct": 4.89, "reason": "公司申请撤销股票交易其他风险警示", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1783045647, "break_limit_up_times": 2}, {"code": "603557", "name": "*ST起步", "price": 4.41, "change_pct": 5.0, "reason": "公司获捐赠资产，标的营收利润远超上市公司", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 1.15, "first_limit_up": 1783041900, "break_limit_up_times": 3}, {"code": "002765", "name": "蓝黛科技", "price": 7.91, "change_pct": 10.01, "reason": "新能源汽车动力传动系统零部件供应商；子公司重庆蓝黛与无锡泉智博共同推进相关机器人一体化关节及其核心零部件的研发、生产、测试及装配工作，通过子公司参股无锡泉智博（持股 4.35%），联合开发集成减速器、伺服电机及控制系统的一体化关节模组，适配 3kg-50kg 负载机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.35, "first_limit_up": 1783043448, "break_limit_up_times": 0}, {"code": "605199", "name": "ST葫芦娃", "price": 6.01, "change_pct": 5.07, "reason": "公司地处海南，以儿科用药为发展特色，主要产品为小儿肺热咳喘颗粒、注射用盐酸溴己新、复方板蓝根颗粒等", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 1.06, "first_limit_up": 1783042557, "break_limit_up_times": 6}, {"code": "600759", "name": "ST洲际", "price": 2.12, "change_pct": 4.95, "reason": "海南本地股，主营石油的勘探、开发和销售，油气行业的技术服务和物业租赁业务", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 7.64, "first_limit_up": 1783046666, "break_limit_up_times": 8}, {"code": "603466", "name": "风语筑", "price": 11.63, "change_pct": 10.03, "reason": "公司是中国数字展示行业龙头，依托具身智能研究院，联合宇树科技、松延动力等伙伴，将人形机器人导入数千座展馆，实现导览、演绎常态化运营，并打造具身智能展示中心", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 15.07, "first_limit_up": 1783056161, "break_limit_up_times": 33}, {"code": "002896", "name": "中大力德", "price": 85.62, "change_pct": 9.99, "reason": "公司核心零部件减速器主要运用于工业机器人和工业自动化场景，包括RV、谐波减速器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.3, "first_limit_up": 1783044600, "break_limit_up_times": 0}, {"code": "603717", "name": "天域生物", "price": 7.33, "change_pct": 10.06, "reason": "公司生猪养殖业务主要采用自繁自养的经营模式进行生猪养殖和销售，并辅以与个体养殖户进行合作的养殖回收模式", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 18.0, "first_limit_up": 1783042598, "break_limit_up_times": 32}, {"code": "600592", "name": "龙溪股份", "price": 16.12, "change_pct": 10.03, "reason": "关节轴承行业龙头，广泛应用于航空军工等领域，也是机器人的主要配套件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.64, "first_limit_up": 1783055896, "break_limit_up_times": 2}, {"code": "603580", "name": "艾艾精工", "price": 30.13, "change_pct": 10.0, "reason": "公司撤销退市风险警示", "plates": ["ST摘帽"], "limit_up_days": 2, "turnover_ratio": 5.35, "first_limit_up": 1783061773, "break_limit_up_times": 0}, {"code": "000821", "name": "ST京机", "price": 8.41, "change_pct": 4.99, "reason": "公司称对太空光伏进行技术储备", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 2.86, "first_limit_up": 1783061316, "break_limit_up_times": 0}, {"code": "603165", "name": "荣晟环保", "price": 14.7, "change_pct": 10.03, "reason": "全资子公司嘉兴荣晟参与的容腾基金有投资宇树机器人，容腾基金对其投资额为2000万元，截至目前持股比例为1.3217%", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.31, "first_limit_up": 1783044462, "break_limit_up_times": 0}, {"code": "600187", "name": "*ST国中", "price": 1.47, "change_pct": 5.0, "reason": "公司因持有诸暨市文盛汇股权从而间接持有北京汇源21.89%股权", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.29, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "603713", "name": "密尔克卫", "price": 79.23, "change_pct": 10.0, "reason": "第三方化工供应链龙头；公司服务领域已拓宽至芯片半导体领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.29, "first_limit_up": 1783042721, "break_limit_up_times": 0}, {"code": "603922", "name": "ST金鸿顺", "price": 13.5, "change_pct": 4.98, "reason": "公司主营汽车车身和底盘冲压零部件及其相关模具，拟购买新思考电机95.79%股权，标的是微特电机行业下属微型驱动马达领域头部企业，为国内主流智能手机品牌的摄像头马达核心供应商，并积极拓宽汽车电子行业应用，探索智能驾驶、人形机器人等新兴行业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.04, "first_limit_up": 1783059296, "break_limit_up_times": 0}, {"code": "000576", "name": "甘化科工", "price": 8.14, "change_pct": 10.0, "reason": "1、公司持有苏州锴威特半导体股份有限公司834.4816万股，占其总股本11.33%；\n2、控股子公司沈阳含能拥有军工相关资质，在钨合金预制破片领域具有相对稳定的竞争地位，与多家兵工厂建立了良好的合作关系，是部分常规炮弹及新型火箭弹预制破片的主要供应商", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 5.63, "first_limit_up": 1783042881, "break_limit_up_times": 0}, {"code": "002072", "name": "凯瑞德", "price": 9.64, "change_pct": 10.05, "reason": "公司主营煤炭贸易，此前筹划收购国网电力股权", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.61, "first_limit_up": 1783042986, "break_limit_up_times": 36}, {"code": "605189", "name": "富春染织", "price": 16.05, "change_pct": 10.01, "reason": "公司投资10亿元建设PEEK材料人形机器人轻量化与半导体精密注塑项目，已投产并获行星减速器公司样件订单，切入机器人轻量化赛道", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 10.15, "first_limit_up": 1783055903, "break_limit_up_times": 0}, {"code": "002396", "name": "星网锐捷", "price": 23.4, "change_pct": 10.01, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["交换机"], "limit_up_days": 1, "turnover_ratio": 1.04, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "300580", "name": "贝斯特", "price": 25.96, "change_pct": 20.02, "reason": "公司主营业务之一的工装夹具，用在机床加工中心快速夹紧工件，是工业母机中必不可少的关键核心功能部件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.28, "first_limit_up": 1783055061, "break_limit_up_times": 16}, {"code": "002199", "name": "*ST东晶", "price": 12.89, "change_pct": 4.97, "reason": "公司一季度业绩同比减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.28, "first_limit_up": 1783046001, "break_limit_up_times": 0}, {"code": "002664", "name": "信质集团", "price": 19.88, "change_pct": 10.02, "reason": "全球领先的汽车发电机定子生产企业；网传纪要表示，公司供货华为车BU定转子总成和电机，华为曾想把汽车零部件的能力迁移到机器人端做相关储备，公司跟车BU有过机器人业务的沟通", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.05, "first_limit_up": 1783048725, "break_limit_up_times": 0}, {"code": "001337", "name": "四川黄金", "price": 41.21, "change_pct": 10.01, "reason": "公司主要从事金矿采选及销售", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 2.34, "first_limit_up": 1783042434, "break_limit_up_times": 0}, {"code": "000016", "name": "*ST康佳A", "price": 2.67, "change_pct": 5.12, "reason": "公司PCB业务为2025年唯一营收同比上涨板块", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 2.89, "first_limit_up": 1783042500, "break_limit_up_times": 2}, {"code": "600580", "name": "卧龙电驱", "price": 37.35, "change_pct": 10.01, "reason": "公司入股智元机器人，综合性电机供应商，布局高扭矩密度轴向磁通电机", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.13, "first_limit_up": 1783044129, "break_limit_up_times": 1}, {"code": "603378", "name": "*ST亚士", "price": 5.41, "change_pct": 5.05, "reason": "行业内少数同时拥有功能型建筑涂料、保温装饰板和保温板三大产品体系及其系统服务能力的企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.92, "first_limit_up": 1783049033, "break_limit_up_times": 0}, {"code": "603828", "name": "*ST利达", "price": 4.64, "change_pct": 4.98, "reason": "公司拟变更间接控股股东", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 0.07, "first_limit_up": 1783041901, "break_limit_up_times": 0}, {"code": "603559", "name": "中通国脉", "price": 9.91, "change_pct": 9.99, "reason": "公司7月2日起复牌并撤销其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 2, "turnover_ratio": 3.61, "first_limit_up": 1783042432, "break_limit_up_times": 1}, {"code": "605255", "name": "天普股份", "price": 74.27, "change_pct": 10.0, "reason": "控股股东等与中昊芯英签署的协议转让股份完成过户登记，中昊芯英为国内掌握TPU架构AI芯片核心研发技术并实现TPU芯片量产核心公司", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.39, "first_limit_up": 1783054912, "break_limit_up_times": 1}, {"code": "002726", "name": "ST龙大", "price": 1.34, "change_pct": 4.69, "reason": "公司下修转股价格议案遭否决", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 6.79, "first_limit_up": 1783056480, "break_limit_up_times": 2}, {"code": "603327", "name": "福蓉科技", "price": 8.86, "change_pct": 10.06, "reason": "公司生产的铝制结构件材料有用于折叠屏手机铰链，包括三星、谷歌、OPPO等品牌的折叠屏手机", "plates": ["折叠屏"], "limit_up_days": 1, "turnover_ratio": 1.62, "first_limit_up": 1783042212, "break_limit_up_times": 0}, {"code": "603798", "name": "康普顿", "price": 15.22, "change_pct": 9.97, "reason": "公司基于防冻冷却液产品多年的生产研发技术经验，在数据中心冷液方面已有相应的技术储备", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.45, "first_limit_up": 1783042919, "break_limit_up_times": 0}, {"code": "301379", "name": "天山电子", "price": 32.16, "change_pct": 20.0, "reason": "公司基 NAND技术的企业级SSD固态硬盘模组研发已经完成工程样品研发，并进入核心测试阶段", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 22.75, "first_limit_up": 1783042713, "break_limit_up_times": 12}, {"code": "002771", "name": "真视通", "price": 13.87, "change_pct": 9.99, "reason": "公司数据中心业务主要为用户提供数据中心基础环境建设、基础设施建设等系统建设服务，与航源光热、广电五舟联合研发了两相液冷高效散热服务器等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 11.02, "first_limit_up": 1783044024, "break_limit_up_times": 1}, {"code": "605305", "name": "中际联合", "price": 45.98, "change_pct": 10.0, "reason": "公司是国内高空安全作业设备龙头，产品及服务主要应用于风力发电后市场维护等领域", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.75, "first_limit_up": 1783047546, "break_limit_up_times": 0}, {"code": "600243", "name": "*ST海华", "price": 3.64, "change_pct": 4.9, "reason": "1、子公司苏州江源“海洋平台用大型阀体数控加工设备”的验收获得江苏省科技进步三等奖1项；\n2、子公司青海华鼎齿轮箱有限责任公司目前涉及煤炭减速器生产，目前规模较小", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.79, "first_limit_up": 1783055299, "break_limit_up_times": 0}, {"code": "605028", "name": "世茂能源", "price": 24, "change_pct": 9.99, "reason": "余姚地区唯一的生活垃圾焚烧处理中心", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.99, "first_limit_up": 1783056835, "break_limit_up_times": 1}, {"code": "002217", "name": "ST合力泰", "price": 1.76, "change_pct": 4.76, "reason": "公司与杭州骋风而来合资设立智泰驰骋，布局算力底座、平台及多元异构算力租赁业务，打造重整后的第二增长曲线", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 5.49, "first_limit_up": 1783042278, "break_limit_up_times": 1}, {"code": "603137", "name": "恒尚节能", "price": 17.22, "change_pct": 10.03, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 3, "turnover_ratio": 0.33, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "002377", "name": "国创高新", "price": 2.85, "change_pct": 10.04, "reason": "公司主要从事路面改性沥青系列产品", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 7.13, "first_limit_up": 1783059120, "break_limit_up_times": 2}, {"code": "000908", "name": "石药景峰", "price": 6.88, "change_pct": 10.08, "reason": "公司致力于创新药物研发，拥有多个创新药项目", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 8.86, "first_limit_up": 1783042509, "break_limit_up_times": 1}, {"code": "601010", "name": "ST文峰", "price": 1.61, "change_pct": 5.23, "reason": "公司主营超市零售，拟斥资8000万元至1.2亿元回购，用于员工持股计划或股权激励", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 1.92, "first_limit_up": 1783042424, "break_limit_up_times": 1}, {"code": "002283", "name": "天润工业", "price": 10.24, "change_pct": 9.99, "reason": "1、全资子公司天润智能主导产品包括自动化装备产品桁架机械手、关节机器人集成应用、智能物流缓存、智能检测系统的研发及应用服务；\n2、公司大缸径客户60%为潍柴系，20-30%为卡特，大马力连杆与曲轴持续供不应求", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.57, "first_limit_up": 1783054953, "break_limit_up_times": 0}, {"code": "603789", "name": "ST星农", "price": 6.35, "change_pct": 4.96, "reason": "公司控股股东拟变更为玖元亨通", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 0.25, "first_limit_up": 1783041901, "break_limit_up_times": 0}, {"code": "002501", "name": "*ST利源", "price": 1.39, "change_pct": 5.3, "reason": "公司拟1.11亿元收购金利股份控制权，快速切入再生铝赛道", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.05, "first_limit_up": 1783057224, "break_limit_up_times": 0}, {"code": "002767", "name": "先锋电子", "price": 18.04, "change_pct": 10.0, "reason": "1、公司为东莞市本末科技有限公司的股东；本末科技作为直驱技术领域的先行者，聚焦于机器人和核心零部件制造；\n2、公司是国内销售规模最大的智能燃气表制造商之一，合作客户超1300家，市占率居行业前列", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.8, "first_limit_up": 1783057824, "break_limit_up_times": 0}, {"code": "601177", "name": "杭齿前进", "price": 14.31, "change_pct": 9.99, "reason": "杭齿集团正式启动省尖兵科技计划项目，针对人形机器人旋转关节和直线关节组件，将突破驱动一传动一传感一体化关节集成技术难题，最终研制出高扭矩、高推力密度和高动态响应关节组件并实现国产化示范应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.87, "first_limit_up": 1783043019, "break_limit_up_times": 1}, {"code": "600165", "name": "ST宁科", "price": 2.89, "change_pct": 5.09, "reason": "法院裁定受理子公司恒力国贸重整", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.78, "first_limit_up": 1783045558, "break_limit_up_times": 11}, {"code": "003011", "name": "海象新材", "price": 20.9, "change_pct": 10.0, "reason": "国内领先的PVC地板生产及出口商之一，境外营收占比高", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 9.26, "first_limit_up": 1783058079, "break_limit_up_times": 1}, {"code": "603726", "name": "朗迪集团", "price": 35.45, "change_pct": 9.99, "reason": "公司间接持有长鑫科技集团0.066%股份", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.86, "first_limit_up": 1783054962, "break_limit_up_times": 2}, {"code": "600801", "name": "华新建材", "price": 18.11, "change_pct": 10.02, "reason": "公司主营为水泥的生产及销售，业务集中在湖北", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.31, "first_limit_up": 1783043182, "break_limit_up_times": 0}, {"code": "600376", "name": "首开股份", "price": 3.81, "change_pct": 10.12, "reason": "公司通过金石投资间接投资宇树机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.44, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "000639", "name": "ST西王", "price": 1.28, "change_pct": 4.92, "reason": "公司高管拟增持300万至600万元", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 7.12, "first_limit_up": 1783042365, "break_limit_up_times": 11}, {"code": "002868", "name": "绿康生化", "price": 26.28, "change_pct": 10.0, "reason": "公司当前核心业务为动保产品生产和销售", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.58, "first_limit_up": 1783042662, "break_limit_up_times": 0}, {"code": "600082", "name": "ST海泰", "price": 2.95, "change_pct": 4.98, "reason": "公司一季度业绩小幅减亏", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 1.29, "first_limit_up": 1783042466, "break_limit_up_times": 0}, {"code": "601689", "name": "拓普集团", "price": 62.43, "change_pct": 10.01, "reason": "1、公司为特斯拉汽车提供轻量化底盘、热管理系统等零部件，是特斯拉人形机器人Optimus 电驱执行器等核心部件的供应商；\n2、公司主营汽车零部件，主要产品包括汽车NVH减震系统、智能座舱部件、底盘系统、空气悬架、智能驾驶系统等，智能驾驶系统包括线控转向、线控刹车、电调管柱等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.97, "first_limit_up": 1783055383, "break_limit_up_times": 5}, {"code": "001400", "name": "江顺科技", "price": 125.21, "change_pct": 10.0, "reason": "1、近期公司基于微通道挤压技术开发出新一代液冷模块，采用铝合金一体成型工艺，支持更窄流道（≤100μm）和更高热密度；\n2、公司的相关模具产品可以用于航空航天方向", "plates": ["液冷服务器", "航天"], "limit_up_days": 1, "turnover_ratio": 11.36, "first_limit_up": 1783048092, "break_limit_up_times": 1}, {"code": "002520", "name": "日发精机", "price": 7.72, "change_pct": 9.97, "reason": "1、公司拥有桁架机械手直角坐标机器人方面的专利，并已大量应用到自动化连线设备；一季度扭亏为盈；\n2、公司产品涵盖了数控车床、高端磨床及柔性化生产线等，公司数控机床产品数控化率100%，行业排名第一", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.35, "first_limit_up": 1783042548, "break_limit_up_times": 0}, {"code": "001268", "name": "联合精密", "price": 39.4, "change_pct": 9.99, "reason": "1、公司已完成收购成都迈特航空51%股权，迈特航空为中航工业旗下成飞、沈飞等主机厂供应商，正式切入航空精密零部件领域；\n2、公司主营精密机械零部件业务，正在建设年产3万吨空调压缩机零部件、汽车零部件、机器人零部件、光刻机零部件铸件项目", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 3.95, "first_limit_up": 1783048329, "break_limit_up_times": 0}, {"code": "000711", "name": "ST京蓝", "price": 5.26, "change_pct": 4.99, "reason": "公司一季度净利润同比增长171.81%", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 4.83, "first_limit_up": 1783042281, "break_limit_up_times": 7}, {"code": "000909", "name": "*ST数源", "price": 4.36, "change_pct": 5.06, "reason": "全资子公司拟挂牌转让温岭祥泰27.5%股权", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 0.62, "first_limit_up": 1783042212, "break_limit_up_times": 0}, {"code": "603013", "name": "亚普股份", "price": 17.66, "change_pct": 10.03, "reason": "公司拟收购赢双科技，切入旋转变压器与特种电机领域，客户包括奇瑞、东风、比亚迪，消息称正在开发人形机器人用旋变传感器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.05, "first_limit_up": 1783055547, "break_limit_up_times": 0}, {"code": "002700", "name": "万憬能源", "price": 6.68, "change_pct": 10.05, "reason": "公司主营天然气输配、销售和入户安装业务，目前业务已覆盖新疆阿克苏地区阿克苏市、乌什县、阿瓦提县、阿克苏纺织工业城开发区、阿克苏经济技术开发区、克州阿合奇县、喀什地区巴楚县及甘肃省部分区域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.96, "first_limit_up": 1783043526, "break_limit_up_times": 0}, {"code": "003028", "name": "振邦智能", "price": 24.61, "change_pct": 10.01, "reason": "汽车智能控制器制造商；公司在家用机器人方向有布局，主要应用到清洁机器人和割草机等领域，均可用于家庭", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.82, "first_limit_up": 1783054986, "break_limit_up_times": 0}, {"code": "002198", "name": "ST嘉应", "price": 3.51, "change_pct": 5.09, "reason": "公司主导产品双料喉风散、重感灵片为国家中药保护品种", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 2.73, "first_limit_up": 1783057506, "break_limit_up_times": 8}, {"code": "600238", "name": "*ST椰岛", "price": 4.81, "change_pct": 5.02, "reason": "海南本地股，主营以保健酒类产品为主，25年业绩同比大幅减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.05, "first_limit_up": 1783056833, "break_limit_up_times": 0}, {"code": "002090", "name": "金智科技", "price": 9.59, "change_pct": 9.98, "reason": "公司在虚拟电厂领域涉及的产品及业务包括源网荷储能源聚合调控平台、分布式光伏系统建设及运维、区域分布式光伏集中管控系统、电化学储能相关设备的制造及系统集成、电力辅助服务等，正在积极推广应用", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.12, "first_limit_up": 1783045704, "break_limit_up_times": 0}, {"code": "000078", "name": "ST海王", "price": 1.49, "change_pct": 4.93, "reason": "全国性医药商业企业中业务网络覆盖面较广的企业之一，医药商业规模全国第八", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 2.39, "first_limit_up": 1783041900, "break_limit_up_times": 1}, {"code": "002067", "name": "景兴纸业", "price": 4.2, "change_pct": 9.95, "reason": "箱板纸行业龙头，全资子公司上海景兴实业投资有限公司参与的容腾基金有投资宇树科技，公司对容腾基金的投资额为2000万元，持有份额约为1.6667%，容腾基金对宇树科技的投资额为2000万元", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.01, "first_limit_up": 1783042383, "break_limit_up_times": 0}, {"code": "003021", "name": "兆威机电", "price": 100.8, "change_pct": 10.0, "reason": "1、微型传动系统领先供应商；公司在服务机器人方面为美国irobot、云鲸、小米生态链等多家企业供应扫地机器人的行走轮组驱动器、主刷驱动器、边刷驱动器等核心驱动部件；\n2、公司的微型传动系统可以应用于AR/VR领域，如磁感应系统、瞳距调节驱动系统、头部自动松紧装置、智能眼镜隐藏式微型扬声器等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.63, "first_limit_up": 1783055073, "break_limit_up_times": 0}, {"code": "002715", "name": "登云股份", "price": 14.73, "change_pct": 10.01, "reason": "公司通过全资孙公司黄龙金矿开展黄金矿采选业务；25年9月，公司拟向关联方益科正润投资集团有限公司转让北京黄龙金泰矿业有限公司75%的股权", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 6.6, "first_limit_up": 1783059024, "break_limit_up_times": 0}, {"code": "002536", "name": "飞龙股份", "price": 51.96, "change_pct": 9.99, "reason": "1、公司的数据中心液冷产品在芜湖飞龙、郑州飞龙已建有专门生产线；公司多个液冷项目正在进行中，公司电子水泵系列产品和温控阀系列产品已应用在服务器液冷领域，该领域部分项目已经量产；\n2、公司针对机器人关节等部位日益增长的液冷散热需求，依托公司在电子泵、温控阀及集成模块等新能源热管理产品上的技术优势，积极布局机器人领域液冷市场", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 9.28, "first_limit_up": 1783042875, "break_limit_up_times": 1}, {"code": "002988", "name": "豪美新材", "price": 25.44, "change_pct": 9.99, "reason": "华南地区最具规模的汽车轻量化铝基新材料企业，前瞻布局人形机器人、低空飞行器、液冷散热器等新兴赛道", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.85, "first_limit_up": 1783058763, "break_limit_up_times": 0}, {"code": "301596", "name": "瑞迪智驱", "price": 63.97, "change_pct": 20.0, "reason": "公司产品包括精密传动件、电磁制动器和谐波减速机等，广泛应用于数控机床、机器人、电梯、风电等领域\n", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 18.34, "first_limit_up": 1783055355, "break_limit_up_times": 7}, {"code": "600793", "name": "宜宾纸业", "price": 16.01, "change_pct": 10.03, "reason": "西南最大的食品包装原纸生产企业；公司主营业务有食品包装原纸、生活用纸原纸以及生活用纸成品纸的生产和销售", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 2.07, "first_limit_up": 1783042201, "break_limit_up_times": 0}, {"code": "600624", "name": "ST复华", "price": 3.77, "change_pct": 5.01, "reason": "公司此前与本源量子签署战略合作协议，共谋量子计算产业发展，本源量子源自中国科学技术大学和中国科学院量子信息重点实验室，是中国首家量子计算企业，中国首家可交付量子计算机工程机的企业，建设了中国第一条量子芯片生产线", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.53, "first_limit_up": 1783042673, "break_limit_up_times": 0}, {"code": "002082", "name": "ST万邦", "price": 11.59, "change_pct": 4.98, "reason": "国内拥有药品剂型较多的制药企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.57, "first_limit_up": 1783057923, "break_limit_up_times": 5}, {"code": "001306", "name": "夏厦精密", "price": 63.29, "change_pct": 9.99, "reason": "公司主要产品减速机及其配件，应用领域为机器人，主要用于机器人的关键传动部件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.76, "first_limit_up": 1783042587, "break_limit_up_times": 1}, {"code": "603051", "name": "鹿山新材", "price": 21.91, "change_pct": 9.99, "reason": "1、公司整合资源快速切入人形机器人电子皮肤、电子肌肉及仿真皮肤（TPE、硅胶等材料）领域；\n2、公司针对太空光伏不同应用提出三种封装方案，已持续向头部客户出货多年", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.81, "first_limit_up": 1783047753, "break_limit_up_times": 0}, {"code": "600734", "name": "*ST实达", "price": 1.74, "change_pct": 4.82, "reason": "公司位于福建福州，拟以1.846亿元收购福建数产名商95%股权，标的已投运2000P智算中心，交易完成后将强化公司在智能算力领域布局", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.01, "first_limit_up": 1783045748, "break_limit_up_times": 2}, {"code": "603278", "name": "大业股份", "price": 12.11, "change_pct": 9.99, "reason": "1、公司人形机器人灵巧手用钢丝尚处于市场调研和研究开发阶段；\n2、公司投资联营企业湖北三江航天江北机械工程主要从事航天动力系统、天线罩等航天型号产品及特种压力容器产品、高端机电成套装备、先进激光应用设备等民用产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.61, "first_limit_up": 1783055392, "break_limit_up_times": 0}, {"code": "603012", "name": "创力集团", "price": 8.82, "change_pct": 9.98, "reason": "1、公司和华为油气矿山军团保持沟通,主要就AI大模型、矿鸿和5G等技术进行合作；\n2、公司拥有年产2万套新能源汽车车载充电机，5000套直流充电桩充电模块研发生产", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.19, "first_limit_up": 1783057090, "break_limit_up_times": 0}, {"code": "603286", "name": "日盈电子", "price": 56.96, "change_pct": 10.0, "reason": "公司压阻式的电子皮肤样品已研发成功，在人形机器人新领域，公司以布局柔性触觉传感电子皮肤新产品为契机，结合发展战略及市场需求加快布局柔性线束等其他人形机器人产品", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 6.17, "first_limit_up": 1783045020, "break_limit_up_times": 0}, {"code": "603377", "name": "ST东时", "price": 2.96, "change_pct": 4.96, "reason": "因涉嫌信披违法北京证监局拟对公司处以180万元罚款", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.51, "first_limit_up": 1783042294, "break_limit_up_times": 0}, {"code": "002979", "name": "雷赛智能", "price": 69.55, "change_pct": 10.0, "reason": "国内智能装备运动控制领域龙头，预计中报净利润同比增长55%-65%，因“报告期内，公司业务订单情况有较大好转，叠加公司持续加大对重点战略性行业以及新兴业务领域的市场开拓力度，相关业务收入贡献逐步提升，对整体业绩形成积极带动。公司在新兴业务与第二增长曲线，也取得较大突破与显著增长。”", "plates": ["机器人", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 2.48, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "300779", "name": "惠城环保", "price": 59.27, "change_pct": 20.0, "reason": "公司将不能复活的废催化剂，通过废催化剂元素分解及利用技术，分解成资源化基础化工产品，如硅产品、铝产品、稀土产品、镍产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.7, "first_limit_up": 1783045029, "break_limit_up_times": 0}, {"code": "002977", "name": "*ST天箭", "price": 24.34, "change_pct": 5.0, "reason": "高波段、大功率固态微波前端产品供应商；主要代表产品为弹载固态发射机、新型相控阵产品及其他固态发射机产品，其在军事领域的应用包括雷达制导导弹精确制导系统、其它雷达系统、卫星通信和电子对抗等", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 0.7, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "002667", "name": "*ST威领", "price": 12.43, "change_pct": 4.98, "reason": "公司业务主要包括锂矿选矿、基础性锂电原料锂盐加工及冶炼业务等，通过收购嘉宇矿业74.3%股权，新增钨锡铅锌矿开采业务", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 0.31, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "600084", "name": "*ST尼雅", "price": 4.24, "change_pct": 4.95, "reason": "公司主营葡萄酒生产和销售，通过西藏国中安信私募基金间接参股乐聚机器人", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.12, "first_limit_up": 1783042278, "break_limit_up_times": 0}, {"code": "002434", "name": "万里扬", "price": 6.67, "change_pct": 10.07, "reason": "公司已完成机器人关节模组产品平台规划和技术研发", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.17, "first_limit_up": 1783043943, "break_limit_up_times": 1}, {"code": "603596", "name": "伯特利", "price": 27.65, "change_pct": 9.98, "reason": "1、公司从事汽车制动系统研发，产品包括机械制动产品和电控制动产品；\n2、公司高级驾驶辅助系统（ADAS）产线已量产，ADAS高精地图功能技术正在研发过程中，支持自动驾驶功能实现", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 2.56, "first_limit_up": 1783045453, "break_limit_up_times": 0}, {"code": "000595", "name": "宝塔实业", "price": 6.24, "change_pct": 10.05, "reason": "公司撤销退市风险警示，控股股东宁夏电投拟增持1500万元-3000万元公司股份", "plates": ["ST摘帽"], "limit_up_days": 2, "turnover_ratio": 1.34, "first_limit_up": 1783041900, "break_limit_up_times": 0}, {"code": "002650", "name": "ST加加", "price": 6.35, "change_pct": 4.96, "reason": "公司控股股东变更为中国东方资产管理股份有限公司", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.8, "first_limit_up": 1783048116, "break_limit_up_times": 6}, {"code": "002292", "name": "奥飞娱乐", "price": 7.73, "change_pct": 9.96, "reason": "“中国动漫第一股”、动漫文娱领军企业；预计2026年上半年净利同比增长305.3%-413.38%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.77, "first_limit_up": 1783042269, "break_limit_up_times": 0}, {"code": "603211", "name": "晋拓股份", "price": 35.94, "change_pct": 10.01, "reason": "公司机器人业务主要为国际知名品牌柔性机器人提供零部件；公司与施耐德、UR机器人等合作，向其供应伺服马达、感应器、机器关节所需要的零部件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.82, "first_limit_up": 1783042616, "break_limit_up_times": 0}, {"code": "603338", "name": "浙江鼎力", "price": 51.67, "change_pct": 10.01, "reason": "全球高空作业设备制造商龙头，具备军工相关认证证书，船身/船底除锈、喷涂机器人批量发货", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 3.87, "first_limit_up": 1783049011, "break_limit_up_times": 17}, {"code": "000506", "name": "招金黄金", "price": 13.87, "change_pct": 9.99, "reason": "公司主要业务包括以黄金为主要品种的矿业开采", "plates": ["黄金"], "limit_up_days": 2, "turnover_ratio": 2.92, "first_limit_up": 1783042251, "break_limit_up_times": 0}, {"code": "600841", "name": "动力新科", "price": 6.71, "change_pct": 10.0, "reason": "公司主营柴油发动机及重卡，产品配套商用车、工程机械、船舶、数据中心电站等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.2, "first_limit_up": 1783054962, "break_limit_up_times": 0}, {"code": "002747", "name": "埃斯顿", "price": 44.77, "change_pct": 10.0, "reason": "国产工业机器人龙头；公司通过参股埃斯顿酷卓对人形机器人产品进行前期布局，酷卓的首发人形机器人CODROID 01已于今年工博会上进行展示，并正在进行下一轮的设计与小批量工业场景验证，配合工业机器人在智能生产线和智能工厂中进行应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 16.2, "first_limit_up": 1783042485, "break_limit_up_times": 2}, {"code": "600143", "name": "金发科技", "price": 17.01, "change_pct": 10.03, "reason": "1、公司特种工程塑料可以用于人形机器人的伺服电机及连接器上，通过金石成长基金间接持股宇树科技；\n2、公司改性LCP材料已在商业航天领域中的连接器部件上批量供货", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.6, "first_limit_up": 1783049204, "break_limit_up_times": 3}, {"code": "001317", "name": "三羊马", "price": 48.43, "change_pct": 9.99, "reason": "1、机器人业务是三羊马智人科技及合作伙伴冰零智能科技高度关注且重视的下游应用领域，智人科技目前无机器人领域的量产产品；\n2、公司布局无人车物流，并为小米景明科技有限公司的承运商之一，与重庆东风小康汽车销售有限公司及其关联方有汽车整车综合物流服务业务合作", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 4.84, "first_limit_up": 1783042389, "break_limit_up_times": 0}, {"code": "301199", "name": "迈赫股份", "price": 21.28, "change_pct": 20.02, "reason": "公司主要从事基于机器人和物联网技术的高端智能装备系统和智慧物联系统", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.75, "first_limit_up": 1783058751, "break_limit_up_times": 0}, {"code": "601718", "name": "ST际华", "price": 1.67, "change_pct": 5.03, "reason": "中国军队、武警部队军需品采购的核心供应商；公司具备核污染防治相关技术储备和产业基础，核污染防护产品有全套核污染防护服、鞋等", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 0.07, "first_limit_up": 1783041901, "break_limit_up_times": 0}, {"code": "603730", "name": "岱美股份", "price": 13, "change_pct": 9.98, "reason": "公司拟以1亿元在上海设立全资子公司岱美科技，经营范围涵盖智能机器人、工业机器人及服务机器人相关研发销售", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.82, "first_limit_up": 1783044576, "break_limit_up_times": 3}, {"code": "001270", "name": "铖昌科技", "price": 163.32, "change_pct": 10.0, "reason": "公司主营微波毫米波模拟相控阵T/R芯片", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 2.27, "first_limit_up": 1783042413, "break_limit_up_times": 0}, {"code": "002294", "name": "信立泰", "price": 40.08, "change_pct": 9.99, "reason": "公司产品替格瑞洛片拟中选全国药品集中采购，定增申请获证监会审核通过", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.82, "first_limit_up": 1783060479, "break_limit_up_times": 0}, {"code": "300129", "name": "泰胜风能", "price": 10.63, "change_pct": 19.98, "reason": "公司正推进火箭贮箱产线改造、团队搭建、专家引进，与多家整箭制造商战略合作，切入商业航天赛道", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 11.47, "first_limit_up": 1783047033, "break_limit_up_times": 1}, {"code": "002249", "name": "大洋电机", "price": 8.33, "change_pct": 10.04, "reason": "1、公司已完成机器人关节模组方案设计；\n2、公司开发氢燃料电池关键零部件，可用于SOFC。", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.7, "first_limit_up": 1783043109, "break_limit_up_times": 1}, {"code": "002472", "name": "双环传动", "price": 47.01, "change_pct": 9.99, "reason": "传动用齿轮及齿轮零件龙头企业，国内少数能够生产制造RV减速器的厂家之一", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.97, "first_limit_up": 1783045797, "break_limit_up_times": 1}, {"code": "002109", "name": "ST兴化", "price": 2.79, "change_pct": 4.89, "reason": "公司主要产品为以煤为原料制成的合成氨、甲醇、甲胺及DMF，全资子公司兴化化工具备30万吨/年甲醇产能", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 1.2, "first_limit_up": 1783048743, "break_limit_up_times": 2}, {"code": "601100", "name": "恒立液压", "price": 121.66, "change_pct": 10.0, "reason": "国内液压件龙头，机电液智能控制技术一体化属于公司的研发范畴", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.51, "first_limit_up": 1783059515, "break_limit_up_times": 0}, {"code": "000975", "name": "山金国际", "price": 19.84, "change_pct": 9.98, "reason": "公司矿产金产量在中国黄金上市企业中排名第五，拥有的玉龙矿业是目前国内矿产银（含量银）最大的单体矿山之一", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 2.65, "first_limit_up": 1783042302, "break_limit_up_times": 4}, {"code": "603178", "name": "圣龙股份", "price": 15.68, "change_pct": 10.04, "reason": "国内动力系统泵类产品龙头企业；公司在电机、减速器、控制器领域的技术积累，均可以支持对人形机器人相关领域的研发；一季度业绩同比扭亏", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.47, "first_limit_up": 1783043155, "break_limit_up_times": 0}, {"code": "002635", "name": "安洁科技", "price": 23.36, "change_pct": 9.98, "reason": "1、公司拟现金收购光模块领域公司苏州志烽51%股权；\n2、正利用新能源汽车精密结构件技术经验，推进人形机器人相关零部件的技术拓展和业务规划", "plates": ["资产重组", "光通信"], "limit_up_days": 1, "turnover_ratio": 12.52, "first_limit_up": 1783043295, "break_limit_up_times": 0}, {"code": "002305", "name": "*ST南置", "price": 2.01, "change_pct": 5.24, "reason": "公司战略转型综合性城市运营服务商", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 2.43, "first_limit_up": 1783046670, "break_limit_up_times": 11}, {"code": "002598", "name": "ST章鼓", "price": 6.99, "change_pct": 4.95, "reason": "公司管理层大调整，国资高管入局拿下董事会话语权", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.72, "first_limit_up": 1783057131, "break_limit_up_times": 0}];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "ST/风险警示股", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};