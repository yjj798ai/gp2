const UPDATE_TIME = "2026-07-03 07:58";
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
    "name": "光纤概念",
    "rise": -1.14,
    "rate": 0,
    "tag": "",
    "hotTag": "连续69天上榜",
    "rankChg": 0,
    "etfName": "TMT50ETF",
    "code": "886084"
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
    "name": "2026中报预增",
    "rise": 0.31,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "黄金概念",
    "rise": 1.99,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "先进封装",
    "rise": -2.31,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续33天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "氟化工概念",
    "rise": -3.95,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "化工行业ETF",
    "code": "885551"
  },
  {
    "name": "算力租赁",
    "rise": 0.05,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续104天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "培育钻石",
    "rise": -2.97,
    "rate": 0,
    "tag": "",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
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
    "name": "猪肉",
    "rise": 0.0,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
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
    "heat": 750280,
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
    "heat": 580308,
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
    "heat": 105939,
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
    "heat": 71374,
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
    "heat": 58247,
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
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5856,
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
        "change_pct": 1.84
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
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 5,
    "hot_rank_chg": 20,
    "stock_cnt": 5856,
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
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 11,
    "hot_rank_chg": -8,
    "stock_cnt": 5856,
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
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 20,
    "hot_rank_chg": -13,
    "stock_cnt": 5856,
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
    "hot_rank": 25,
    "hot_rank_chg": -10,
    "stock_cnt": 5856,
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
        "change_pct": 1.84
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
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 62,
    "hot_rank_chg": -5,
    "stock_cnt": 5856,
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
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 65,
    "hot_rank_chg": 267,
    "stock_cnt": 5856,
    "price": "6.22",
    "change": "7.24",
    "market_id": "33",
    "circulate_market_value": "13680194000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": 2.66
      },
      {
        "name": "轮胎",
        "change_pct": 1.13
      },
      {
        "name": "冷链",
        "change_pct": 0.61
      },
      {
        "name": "机器人",
        "change_pct": 3.38
      },
      {
        "name": "智能制造",
        "change_pct": 1.84
      },
      {
        "name": "工业母机",
        "change_pct": 3.26
      },
      {
        "name": "减速器",
        "change_pct": 6.73
      },
      {
        "name": "头盔",
        "change_pct": 3.27
      },
      {
        "name": "人形机器人",
        "change_pct": 4.55
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 66,
    "hot_rank_chg": 3,
    "stock_cnt": 5856,
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
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 93,
    "hot_rank_chg": -77,
    "stock_cnt": 5856,
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
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5856, "price": "8.38", "change": "-7.91", "market_id": "33", "circulate_market_value": "296376580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.58}, {"name": "手机产业链", "change_pct": 0.62}, {"name": "超高清视频", "change_pct": -0.68}, {"name": "苹果产业链", "change_pct": 0.89}, {"name": "半导体", "change_pct": -2.57}, {"name": "人工智能", "change_pct": 1.03}, {"name": "互联网医疗", "change_pct": 1.32}, {"name": "VR&AR", "change_pct": -0.09}, {"name": "OLED", "change_pct": -2.68}, {"name": "京津冀", "change_pct": 0.79}, {"name": "物联网", "change_pct": 1.17}, {"name": "指纹识别", "change_pct": -1.57}, {"name": "汽车零部件", "change_pct": 3.93}, {"name": "白马股", "change_pct": 0.87}, {"name": "智能制造", "change_pct": 1.84}, {"name": "小米概念股", "change_pct": 0.37}, {"name": "国产芯片", "change_pct": -0.98}, {"name": "液晶面板/LCD", "change_pct": -3.12}, {"name": "全息概念", "change_pct": 0.36}, {"name": "理想汽车概念股", "change_pct": 3.14}, {"name": "MicroLED", "change_pct": -2.61}, {"name": "钙钛矿电池", "change_pct": -0.87}, {"name": "智能手表", "change_pct": 1.79}, {"name": "MiniLED", "change_pct": -1.34}, {"name": "传感器", "change_pct": 0.91}, {"name": "大硅片", "change_pct": -6.19}, {"name": "AI PC", "change_pct": -0.12}, {"name": "华为产业链", "change_pct": 0.56}, {"name": "回购", "change_pct": 1.17}, {"name": "智能眼镜/MR头显", "change_pct": 0.19}, {"name": "玻璃基板封装", "change_pct": -3.52}]}, {"code": "600667", "name": "太极实业", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5856, "price": "29.96", "change": "3.70", "market_id": "17", "circulate_market_value": "62662604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 3, "hot_rank_chg": 43, "stock_cnt": 5856, "price": "48.99", "change": "9.06", "market_id": "33", "circulate_market_value": "180488840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 4, "hot_rank_chg": 8, "stock_cnt": 5856, "price": "55.91", "change": "-0.21", "market_id": "33", "circulate_market_value": "88011038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 5, "hot_rank_chg": 20, "stock_cnt": 5856, "price": "7.67", "change": "4.64", "market_id": "17", "circulate_market_value": "95078003000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.11}, {"name": "核电", "change_pct": 1.93}, {"name": "强势人气股", "change_pct": 0.82}, {"name": "电力体制改革", "change_pct": 0.43}, {"name": "水电", "change_pct": 0.53}, {"name": "火电", "change_pct": 0.19}, {"name": "光伏", "change_pct": -0.16}, {"name": "风电", "change_pct": 1.9}, {"name": "国企改革", "change_pct": 1.0}, {"name": "算电协同", "change_pct": 0.07}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5856, "price": "22.02", "change": "-8.06", "market_id": "33", "circulate_market_value": "23394131000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 7, "hot_rank_chg": -2, "stock_cnt": 5856, "price": "49.34", "change": "-10.00", "market_id": "33", "circulate_market_value": "53226381000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5856, "price": "90.88", "change": "-5.31", "market_id": "17", "circulate_market_value": "162622000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 9, "hot_rank_chg": 11, "stock_cnt": 5856, "price": "89.42", "change": "-4.71", "market_id": "17", "circulate_market_value": "218648100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 10, "hot_rank_chg": 18, "stock_cnt": 5856, "price": "232.73", "change": "4.99", "market_id": "33", "circulate_market_value": "322638650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 11, "hot_rank_chg": -8, "stock_cnt": 5856, "price": "9.37", "change": "-9.38", "market_id": "33", "circulate_market_value": "15232751000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.99}, {"name": "电竞", "change_pct": -0.01}, {"name": "手游", "change_pct": -0.71}, {"name": "强势人气股", "change_pct": 0.82}, {"name": "人工智能", "change_pct": 1.03}, {"name": "游戏", "change_pct": -0.15}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.64}, {"name": "腾讯概念股", "change_pct": 0.32}, {"name": "快手概念股", "change_pct": -2.13}, {"name": "元宇宙", "change_pct": -0.24}, {"name": "虚拟数字人", "change_pct": -0.45}, {"name": "东数西算/算力", "change_pct": 0.26}, {"name": "web3.0", "change_pct": -0.88}, {"name": "AIGC概念", "change_pct": -0.7}, {"name": "数据要素", "change_pct": 0.33}, {"name": "字节跳动概念股", "change_pct": -0.75}, {"name": "AI营销", "change_pct": -2.65}, {"name": "ChatGPT", "change_pct": -0.48}, {"name": "智能眼镜/MR头显", "change_pct": 0.19}, {"name": "人工智能大模型", "change_pct": 0.37}, {"name": "人形机器人", "change_pct": 4.55}, {"name": "短剧/互动影游", "change_pct": -1.35}, {"name": "多模态", "change_pct": -0.53}, {"name": "Sora/AI视频", "change_pct": -1.57}, {"name": "IP经济/谷子经济", "change_pct": 0.66}, {"name": "小红书概念股", "change_pct": -1.98}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 12, "hot_rank_chg": 44, "stock_cnt": 5856, "price": "70.90", "change": "4.54", "market_id": "17", "circulate_market_value": "281585520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 13, "hot_rank_chg": -4, "stock_cnt": 5856, "price": "677.77", "change": "-2.45", "market_id": "17", "circulate_market_value": "453083780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 14, "hot_rank_chg": 5, "stock_cnt": 5856, "price": "50.22", "change": "-2.64", "market_id": "17", "circulate_market_value": "171398330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 15, "hot_rank_chg": 33, "stock_cnt": 5856, "price": "881.91", "change": "8.74", "market_id": "33", "circulate_market_value": "145575130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 16, "hot_rank_chg": -6, "stock_cnt": 5856, "price": "44.77", "change": "10.00", "market_id": "33", "circulate_market_value": "35028255000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "拟收购酷卓"}, {"code": "600110", "name": "诺德股份", "hot_rank": 17, "hot_rank_chg": 109, "stock_cnt": 5856, "price": "15.75", "change": "8.40", "market_id": "17", "circulate_market_value": "27329100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 18, "hot_rank_chg": -1, "stock_cnt": 5856, "price": "54.30", "change": "-6.07", "market_id": "17", "circulate_market_value": "45967846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 19, "hot_rank_chg": 57, "stock_cnt": 5856, "price": "24.59", "change": "4.59", "market_id": "33", "circulate_market_value": "82708590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 20, "hot_rank_chg": -13, "stock_cnt": 5856, "price": "6.14", "change": "1.66", "market_id": "33", "circulate_market_value": "7961956800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.77}, {"name": "创新药", "change_pct": 2.26}, {"name": "央企改革", "change_pct": 1.11}, {"name": "医疗器械", "change_pct": 2.05}, {"name": "强势人气股", "change_pct": 0.82}, {"name": "互联网医疗", "change_pct": 1.32}, {"name": "保健品", "change_pct": 1.83}, {"name": "民营医院", "change_pct": 1.23}, {"name": "CAR-T疗法", "change_pct": 1.96}, {"name": "医药", "change_pct": 1.6}, {"name": "化学原料药", "change_pct": 1.34}, {"name": "海南概念", "change_pct": -0.67}, {"name": "脑科学", "change_pct": 1.69}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.45}, {"name": "海南自由贸易港", "change_pct": -0.18}, {"name": "食品", "change_pct": 1.31}, {"name": "国企改革", "change_pct": 1.0}, {"name": "医疗信息化", "change_pct": 1.18}, {"name": "新冠病毒防治", "change_pct": 1.04}, {"name": "自贸区", "change_pct": 0.89}, {"name": "合成生物", "change_pct": 1.48}]}, {"code": "002600", "name": "领益智造", "hot_rank": 21, "hot_rank_chg": 86, "stock_cnt": 5856, "price": "18.02", "change": "4.89", "market_id": "33", "circulate_market_value": "129738680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 22, "hot_rank_chg": 2, "stock_cnt": 5856, "price": "63.23", "change": "-5.57", "market_id": "33", "circulate_market_value": "73157939000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 23, "hot_rank_chg": 14, "stock_cnt": 5856, "price": "1116.00", "change": "-2.36", "market_id": "33", "circulate_market_value": "1238692790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 24, "hot_rank_chg": 19, "stock_cnt": 5856, "price": "19.51", "change": "-3.75", "market_id": "33", "circulate_market_value": "64824936000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 25, "hot_rank_chg": -10, "stock_cnt": 5856, "price": "5.65", "change": "-4.56", "market_id": "33", "circulate_market_value": "108095994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.58}, {"name": "手机产业链", "change_pct": 0.62}, {"name": "超高清视频", "change_pct": -0.68}, {"name": "半导体", "change_pct": -2.57}, {"name": "OLED", "change_pct": -2.68}, {"name": "光伏", "change_pct": -0.16}, {"name": "黑色家电", "change_pct": 0.69}, {"name": "家电", "change_pct": 2.27}, {"name": "智能制造", "change_pct": 1.84}, {"name": "工业互联网", "change_pct": 1.85}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.37}, {"name": "国产芯片", "change_pct": -0.98}, {"name": "腾讯概念股", "change_pct": 0.32}, {"name": "液晶面板/LCD", "change_pct": -3.12}, {"name": "MicroLED", "change_pct": -2.61}, {"name": "MiniLED", "change_pct": -1.34}, {"name": "华为产业链", "change_pct": 0.56}, {"name": "玻璃基板封装", "change_pct": -3.52}]}, {"code": "688017", "name": "绿的谐波", "hot_rank": 26, "hot_rank_chg": 121, "stock_cnt": 5856, "price": "488.00", "change": "18.15", "market_id": "17", "circulate_market_value": "89465101000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 27, "hot_rank_chg": 41, "stock_cnt": 5856, "price": "88.47", "change": "5.86", "market_id": "33", "circulate_market_value": "308460700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 28, "hot_rank_chg": -2, "stock_cnt": 5856, "price": "56.26", "change": "-1.12", "market_id": "17", "circulate_market_value": "21695952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 29, "hot_rank_chg": 30, "stock_cnt": 5856, "price": "64.67", "change": "-10.01", "market_id": "17", "circulate_market_value": "49938133000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 30, "hot_rank_chg": 0, "stock_cnt": 5856, "price": "15.02", "change": "-10.01", "market_id": "17", "circulate_market_value": "53886799000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603667", "name": "五洲新春", "hot_rank": 31, "hot_rank_chg": 93, "stock_cnt": 5856, "price": "76.15", "change": "8.51", "market_id": "17", "circulate_market_value": "27886341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 32, "hot_rank_chg": -24, "stock_cnt": 5856, "price": "16.86", "change": "-6.49", "market_id": "17", "circulate_market_value": "21517672000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 33, "hot_rank_chg": 40, "stock_cnt": 5856, "price": "47.25", "change": "-6.44", "market_id": "17", "circulate_market_value": "78627395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 34, "hot_rank_chg": 8, "stock_cnt": 5856, "price": "526.00", "change": "3.34", "market_id": "33", "circulate_market_value": "659731900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 35, "hot_rank_chg": 65, "stock_cnt": 5856, "price": "160.78", "change": "5.81", "market_id": "17", "circulate_market_value": "384987960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 36, "hot_rank_chg": 96, "stock_cnt": 5856, "price": "259.56", "change": "10.61", "market_id": "33", "circulate_market_value": "109454954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 37, "hot_rank_chg": 23, "stock_cnt": 5856, "price": "135.35", "change": "3.71", "market_id": "33", "circulate_market_value": "260252400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300503", "name": "昊志机电", "hot_rank": 38, "hot_rank_chg": 270, "stock_cnt": 5856, "price": "111.00", "change": "16.99", "market_id": "33", "circulate_market_value": "26748236000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 39, "hot_rank_chg": -18, "stock_cnt": 5856, "price": "42.14", "change": "-10.00", "market_id": "33", "circulate_market_value": "18144082000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 40, "hot_rank_chg": 9, "stock_cnt": 5856, "price": "166.61", "change": "-4.28", "market_id": "17", "circulate_market_value": "42990545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 41, "hot_rank_chg": -2, "stock_cnt": 5856, "price": "27.82", "change": "5.78", "market_id": "17", "circulate_market_value": "573141890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 42, "hot_rank_chg": -1, "stock_cnt": 5856, "price": "64.72", "change": "1.09", "market_id": "17", "circulate_market_value": "1284309650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 43, "hot_rank_chg": 24, "stock_cnt": 5856, "price": "54.04", "change": "-1.46", "market_id": "33", "circulate_market_value": "81546955000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 44, "hot_rank_chg": 49, "stock_cnt": 5856, "price": "106.95", "change": "-4.15", "market_id": "33", "circulate_market_value": "77465534000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 45, "hot_rank_chg": 27, "stock_cnt": 5856, "price": "54.53", "change": "-2.99", "market_id": "17", "circulate_market_value": "79722577000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 46, "hot_rank_chg": 97, "stock_cnt": 5856, "price": "36.38", "change": "3.00", "market_id": "33", "circulate_market_value": "146524860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 47, "hot_rank_chg": 32, "stock_cnt": 5856, "price": "18.23", "change": "-4.25", "market_id": "17", "circulate_market_value": "90949811000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 48, "hot_rank_chg": -8, "stock_cnt": 5856, "price": "49.35", "change": "-9.99", "market_id": "17", "circulate_market_value": "133232469000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 49, "hot_rank_chg": 13, "stock_cnt": 5856, "price": "64.44", "change": "5.81", "market_id": "33", "circulate_market_value": "470564000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 50, "hot_rank_chg": 112, "stock_cnt": 5856, "price": "21.06", "change": "1.59", "market_id": "33", "circulate_market_value": "281220410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 51, "hot_rank_chg": 32, "stock_cnt": 5856, "price": "39.04", "change": "1.46", "market_id": "33", "circulate_market_value": "14651087000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 52, "hot_rank_chg": -25, "stock_cnt": 5856, "price": "29.03", "change": "2.76", "market_id": "33", "circulate_market_value": "8493122800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 53, "hot_rank_chg": -1, "stock_cnt": 5856, "price": "75.34", "change": "5.70", "market_id": "33", "circulate_market_value": "15162441000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 54, "hot_rank_chg": 23, "stock_cnt": 5856, "price": "64.80", "change": "-3.81", "market_id": "33", "circulate_market_value": "98330904000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 55, "hot_rank_chg": -10, "stock_cnt": 5856, "price": "15.12", "change": "1.34", "market_id": "17", "circulate_market_value": "63054834000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 56, "hot_rank_chg": 33, "stock_cnt": 5856, "price": "217.33", "change": "-0.39", "market_id": "33", "circulate_market_value": "169625710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 57, "hot_rank_chg": -3, "stock_cnt": 5856, "price": "199.50", "change": "-6.11", "market_id": "33", "circulate_market_value": "63545288000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 58, "hot_rank_chg": 6, "stock_cnt": 5856, "price": "25.47", "change": "-4.36", "market_id": "33", "circulate_market_value": "29964662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601689", "name": "拓普集团", "hot_rank": 59, "hot_rank_chg": 179, "stock_cnt": 5856, "price": "62.43", "change": "10.01", "market_id": "17", "circulate_market_value": "108493075000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "000657", "name": "中钨高新", "hot_rank": 60, "hot_rank_chg": 10, "stock_cnt": 5856, "price": "89.63", "change": "-7.63", "market_id": "33", "circulate_market_value": "130225698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 61, "hot_rank_chg": 23, "stock_cnt": 5856, "price": "52.98", "change": "-9.09", "market_id": "17", "circulate_market_value": "17058139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 62, "hot_rank_chg": -5, "stock_cnt": 5856, "price": "6.98", "change": "-10.05", "market_id": "33", "circulate_market_value": "13367345300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.98}, {"name": "林业", "change_pct": -0.14}, {"name": "民营医院", "change_pct": 1.23}, {"name": "碳中和", "change_pct": 0.23}, {"name": "自贸区", "change_pct": 0.89}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 63, "hot_rank_chg": 113, "stock_cnt": 5856, "price": "86.30", "change": "5.89", "market_id": "17", "circulate_market_value": "102048812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600150", "name": "中国船舶", "hot_rank": 64, "hot_rank_chg": 391, "stock_cnt": 5856, "price": "37.15", "change": "8.12", "market_id": "17", "circulate_market_value": "279576830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 65, "hot_rank_chg": 267, "stock_cnt": 5856, "price": "6.22", "change": "7.24", "market_id": "33", "circulate_market_value": "13680194000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": 2.66}, {"name": "轮胎", "change_pct": 1.13}, {"name": "冷链", "change_pct": 0.61}, {"name": "机器人", "change_pct": 3.38}, {"name": "智能制造", "change_pct": 1.84}, {"name": "工业母机", "change_pct": 3.26}, {"name": "减速器", "change_pct": 6.73}, {"name": "头盔", "change_pct": 3.27}, {"name": "人形机器人", "change_pct": 4.55}]}, {"code": "002129", "name": "TCL中环", "hot_rank": 66, "hot_rank_chg": 3, "stock_cnt": 5856, "price": "10.37", "change": "-5.98", "market_id": "33", "circulate_market_value": "41891272000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -2.57}, {"name": "一带一路", "change_pct": 1.44}, {"name": "京津冀", "change_pct": 0.79}, {"name": "光伏", "change_pct": -0.16}, {"name": "碳中和", "change_pct": 0.23}, {"name": "国产芯片", "change_pct": -0.98}, {"name": "IGBT", "change_pct": -0.83}, {"name": "颗粒硅", "change_pct": -2.37}, {"name": "异质结电池HJT", "change_pct": -0.78}, {"name": "大硅片", "change_pct": -6.19}]}, {"code": "002821", "name": "凯莱英", "hot_rank": 67, "hot_rank_chg": 132, "stock_cnt": 5856, "price": "165.80", "change": "8.23", "market_id": "33", "circulate_market_value": "52565872000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000559", "name": "万向钱潮", "hot_rank": 68, "hot_rank_chg": 350, "stock_cnt": 5856, "price": "14.22", "change": "7.97", "market_id": "33", "circulate_market_value": "47130040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 69, "hot_rank_chg": -33, "stock_cnt": 5856, "price": "76.01", "change": "-7.50", "market_id": "17", "circulate_market_value": "81525693000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 70, "hot_rank_chg": 111, "stock_cnt": 5856, "price": "37.35", "change": "10.02", "market_id": "17", "circulate_market_value": "58177574000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接持股宇树"}, {"code": "301526", "name": "国际复材", "hot_rank": 71, "hot_rank_chg": 166, "stock_cnt": 5856, "price": "46.99", "change": "3.98", "market_id": "33", "circulate_market_value": "65992423000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 72, "hot_rank_chg": 10, "stock_cnt": 5856, "price": "18.52", "change": "1.26", "market_id": "17", "circulate_market_value": "323374800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 73, "hot_rank_chg": -20, "stock_cnt": 5856, "price": "13.20", "change": "-4.49", "market_id": "17", "circulate_market_value": "19439730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 74, "hot_rank_chg": 272, "stock_cnt": 5856, "price": "19.39", "change": "4.47", "market_id": "33", "circulate_market_value": "30813057000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 75, "hot_rank_chg": 244, "stock_cnt": 5856, "price": "22.27", "change": "6.40", "market_id": "17", "circulate_market_value": "73475396000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300607", "name": "拓斯达", "hot_rank": 76, "hot_rank_chg": 219, "stock_cnt": 5856, "price": "52.96", "change": "13.55", "market_id": "33", "circulate_market_value": "17873966000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002056", "name": "横店东磁", "hot_rank": 77, "hot_rank_chg": 226, "stock_cnt": 5856, "price": "32.82", "change": "7.04", "market_id": "33", "circulate_market_value": "53333537000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 78, "hot_rank_chg": 12, "stock_cnt": 5856, "price": "92.68", "change": "-1.99", "market_id": "17", "circulate_market_value": "135595880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 79, "hot_rank_chg": 46, "stock_cnt": 5856, "price": "52.42", "change": "3.41", "market_id": "33", "circulate_market_value": "260511670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 80, "hot_rank_chg": -66, "stock_cnt": 5856, "price": "47.51", "change": "-1.51", "market_id": "17", "circulate_market_value": "44214227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 81, "hot_rank_chg": 5, "stock_cnt": 5856, "price": "475.08", "change": "2.31", "market_id": "17", "circulate_market_value": "193043210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 82, "hot_rank_chg": -24, "stock_cnt": 5856, "price": "153.95", "change": "-1.44", "market_id": "33", "circulate_market_value": "154717540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 83, "hot_rank_chg": 89, "stock_cnt": 5856, "price": "14.21", "change": "-3.60", "market_id": "33", "circulate_market_value": "11496159800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 84, "hot_rank_chg": 20, "stock_cnt": 5856, "price": "13.20", "change": "-7.24", "market_id": "33", "circulate_market_value": "45908680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000700", "name": "模塑科技", "hot_rank": 85, "hot_rank_chg": -41, "stock_cnt": 5856, "price": "17.60", "change": "4.33", "market_id": "33", "circulate_market_value": "16157071000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 86, "hot_rank_chg": 58, "stock_cnt": 5856, "price": "30.28", "change": "4.31", "market_id": "33", "circulate_market_value": "86603001000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002326", "name": "永太科技", "hot_rank": 87, "hot_rank_chg": -76, "stock_cnt": 5856, "price": "25.81", "change": "-7.82", "market_id": "33", "circulate_market_value": "20858585000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 88, "hot_rank_chg": -1, "stock_cnt": 5856, "price": "124.12", "change": "2.33", "market_id": "17", "circulate_market_value": "306983540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 89, "hot_rank_chg": 13, "stock_cnt": 5856, "price": "618.02", "change": "3.14", "market_id": "33", "circulate_market_value": "174190110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 90, "hot_rank_chg": 90, "stock_cnt": 5856, "price": "154.63", "change": "-2.08", "market_id": "33", "circulate_market_value": "128190674000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 91, "hot_rank_chg": -3, "stock_cnt": 5856, "price": "266.80", "change": "-0.87", "market_id": "17", "circulate_market_value": "305866600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 92, "hot_rank_chg": 29, "stock_cnt": 5856, "price": "43.38", "change": "-8.46", "market_id": "17", "circulate_market_value": "28291209000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601678", "name": "滨化股份", "hot_rank": 93, "hot_rank_chg": -77, "stock_cnt": 5856, "price": "6.93", "change": "-10.00", "market_id": "17", "circulate_market_value": "14160320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.43}, {"name": "军民融合", "change_pct": 2.22}, {"name": "氢能源/燃料电池", "change_pct": 1.59}, {"name": "烧碱", "change_pct": -2.17}, {"name": "军工", "change_pct": 2.18}, {"name": "新能源汽车", "change_pct": 1.99}, {"name": "环氧丙烷", "change_pct": -2.64}, {"name": "氟化工", "change_pct": -5.5}, {"name": "双氧水", "change_pct": -2.66}, {"name": "液氯", "change_pct": -5.46}]}, {"code": "002008", "name": "大族激光", "hot_rank": 94, "hot_rank_chg": 15, "stock_cnt": 5856, "price": "129.64", "change": "3.70", "market_id": "33", "circulate_market_value": "124030138000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 95, "hot_rank_chg": -73, "stock_cnt": 5856, "price": "25.04", "change": "-3.88", "market_id": "33", "circulate_market_value": "18998173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 96, "hot_rank_chg": -16, "stock_cnt": 5856, "price": "250.10", "change": "-0.27", "market_id": "33", "circulate_market_value": "272205850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 97, "hot_rank_chg": 116, "stock_cnt": 5856, "price": "20.00", "change": "-7.28", "market_id": "17", "circulate_market_value": "10245813000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 98, "hot_rank_chg": 14, "stock_cnt": 5856, "price": "80.18", "change": "-9.68", "market_id": "33", "circulate_market_value": "52597281000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 99, "hot_rank_chg": 170, "stock_cnt": 5856, "price": "49.00", "change": "2.96", "market_id": "17", "circulate_market_value": "33877405000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002294", "name": "信立泰", "hot_rank": 100, "hot_rank_chg": 33, "stock_cnt": 5856, "price": "40.08", "change": "9.99", "market_id": "33", "circulate_market_value": "44671795000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};