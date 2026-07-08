const UPDATE_TIME = "2026-07-08 05:46";
const THS_HOT = [
  {
    "name": "中国AI 50",
    "rise": 2.53,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "人工智能ETF",
    "code": "886102"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.74,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续243天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -1.05,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "算力租赁",
    "rise": 0.93,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "存储芯片",
    "rise": -1.22,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续196天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "人形机器人",
    "rise": -2.93,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续407天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": -2.77,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续66天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -2.0,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续172天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "ST板块",
    "rise": 0.41,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光纤概念",
    "rise": -1.66,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "财通升级混合LOF",
    "code": "886084"
  },
  {
    "name": "液冷服务器",
    "rise": -1.22,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "培育钻石",
    "rise": -3.86,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "国资云",
    "rise": 2.66,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885977"
  },
  {
    "name": "AI应用",
    "rise": 0.21,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "先进封装",
    "rise": -1.64,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续36天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "猪肉",
    "rise": -2.32,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885573"
  },
  {
    "name": "东数西算(算力)",
    "rise": -0.02,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "国家大基金持股",
    "rise": 0.9,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "机器人概念",
    "rise": -1.88,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "连续74天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "云计算",
    "rise": 1.59,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885362"
  }
];
const THS_EVENTS = [
  {
    "title": "国务院批复同意《旅游强国建设“十五五”规划》",
    "desc": "",
    "heat": 336499,
    "direction": "旅游",
    "themes": [
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "岭南控股",
        "code": "000524",
        "chg": 10.055866
      }
    ]
  },
  {
    "title": "云计算板块为何走强？算力需求爆发是核心",
    "desc": "",
    "heat": 258205,
    "direction": "国产算力",
    "themes": [
      "国资云",
      "算力租赁"
    ],
    "stocks": [
      {
        "name": "深信服",
        "code": "300454",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "美国撤销对伊朗石油销售等的授权",
    "desc": "",
    "heat": 22426,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "XD科力股",
        "code": "920088",
        "chg": 11.355662
      }
    ]
  },
  {
    "title": "全球首款AI智能体手机将在2026世界人工智能大会首发首秀",
    "desc": "",
    "heat": 12151,
    "direction": "AI手机",
    "themes": [
      "AI手机"
    ],
    "stocks": [
      {
        "name": "*ST闻泰",
        "code": "600745",
        "chg": 6.473214
      }
    ]
  },
  {
    "title": "苹果折叠屏已在量产",
    "desc": "",
    "heat": 615,
    "direction": "苹果折叠屏手机",
    "themes": [
      "苹果概念",
      "柔性屏(折叠屏)"
    ],
    "stocks": [
      {
        "name": "精测电子",
        "code": "300567",
        "chg": 11.022305
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "OpenClaw概念",
    "change": "+4.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+4.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "商汤科技概念股",
    "change": "+3.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "国资云",
    "change": "+3.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "网络安全",
    "change": "+2.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IPv6",
    "change": "+2.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "国产操作系统",
    "change": "+2.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+1.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为云·鲲鹏",
    "change": "+1.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "服务器",
    "change": "+1.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子发票",
    "change": "+1.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "交换机",
    "change": "+1.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "算力一体机",
    "change": "+1.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为HMS",
    "change": "+1.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "远程办公",
    "change": "+1.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+1.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为盘古",
    "change": "+1.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智慧政务",
    "change": "+1.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为昇腾",
    "change": "+1.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "DeepSeek概念股",
    "change": "+1.62%",
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
    "hot_rank_chg": 5,
    "stock_cnt": 5850,
    "price": "7.70",
    "change": "1.45",
    "market_id": "33",
    "circulate_market_value": "272326930000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.82
      },
      {
        "name": "手机产业链",
        "change_pct": -1.87
      },
      {
        "name": "超高清视频",
        "change_pct": 0.15
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.35
      },
      {
        "name": "半导体",
        "change_pct": -0.34
      },
      {
        "name": "人工智能",
        "change_pct": -0.1
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.11
      },
      {
        "name": "VR&AR",
        "change_pct": -1.38
      },
      {
        "name": "OLED",
        "change_pct": -1.87
      },
      {
        "name": "京津冀",
        "change_pct": -0.51
      },
      {
        "name": "物联网",
        "change_pct": -0.05
      },
      {
        "name": "指纹识别",
        "change_pct": -0.25
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.71
      },
      {
        "name": "白马股",
        "change_pct": -0.09
      },
      {
        "name": "智能制造",
        "change_pct": -1.9
      },
      {
        "name": "小米概念股",
        "change_pct": -1.52
      },
      {
        "name": "国产芯片",
        "change_pct": -0.39
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.82
      },
      {
        "name": "全息概念",
        "change_pct": -1.0
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.95
      },
      {
        "name": "MicroLED",
        "change_pct": -2.59
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.73
      },
      {
        "name": "智能手表",
        "change_pct": -1.83
      },
      {
        "name": "MiniLED",
        "change_pct": -2.39
      },
      {
        "name": "传感器",
        "change_pct": -1.74
      },
      {
        "name": "大硅片",
        "change_pct": -0.87
      },
      {
        "name": "AI PC",
        "change_pct": -0.75
      },
      {
        "name": "华为产业链",
        "change_pct": -0.89
      },
      {
        "name": "回购",
        "change_pct": -1.21
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.56
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.75
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 15,
    "hot_rank_chg": 25,
    "stock_cnt": 5850,
    "price": "6.96",
    "change": "-0.57",
    "market_id": "17",
    "circulate_market_value": "86276780000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.17
      },
      {
        "name": "核电",
        "change_pct": -2.41
      },
      {
        "name": "强势人气股",
        "change_pct": -1.54
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.16
      },
      {
        "name": "水电",
        "change_pct": -1.3
      },
      {
        "name": "火电",
        "change_pct": -1.01
      },
      {
        "name": "光伏",
        "change_pct": -2.69
      },
      {
        "name": "风电",
        "change_pct": -2.34
      },
      {
        "name": "国企改革",
        "change_pct": -0.88
      },
      {
        "name": "算电协同",
        "change_pct": -2.35
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 31,
    "hot_rank_chg": -19,
    "stock_cnt": 5850,
    "price": "8.07",
    "change": "-7.35",
    "market_id": "33",
    "circulate_market_value": "13119348800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.6
      },
      {
        "name": "电竞",
        "change_pct": -1.5
      },
      {
        "name": "手游",
        "change_pct": -1.04
      },
      {
        "name": "强势人气股",
        "change_pct": -1.54
      },
      {
        "name": "人工智能",
        "change_pct": -0.1
      },
      {
        "name": "游戏",
        "change_pct": -0.9
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.77
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.83
      },
      {
        "name": "快手概念股",
        "change_pct": -0.34
      },
      {
        "name": "元宇宙",
        "change_pct": -0.43
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.01
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.96
      },
      {
        "name": "web3.0",
        "change_pct": -0.05
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.6
      },
      {
        "name": "数据要素",
        "change_pct": 0.73
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.1
      },
      {
        "name": "AI营销",
        "change_pct": 0.08
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.76
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.56
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.19
      },
      {
        "name": "人形机器人",
        "change_pct": -3.88
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.66
      },
      {
        "name": "多模态",
        "change_pct": 0.29
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.32
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.83
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.6
      }
    ]
  },
  {
    "code": "002137",
    "name": "实益达",
    "hot_rank": 36,
    "hot_rank_chg": -10,
    "stock_cnt": 5850,
    "price": "12.20",
    "change": "6.74",
    "market_id": "33",
    "circulate_market_value": "4836788600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.34
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.02
      },
      {
        "name": "光伏",
        "change_pct": -2.69
      },
      {
        "name": "LED",
        "change_pct": -2.43
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.77
      },
      {
        "name": "无线耳机",
        "change_pct": -1.64
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.64
      },
      {
        "name": "华为产业链",
        "change_pct": -0.89
      },
      {
        "name": "微信小店",
        "change_pct": 0.3
      },
      {
        "name": "区块链",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 40,
    "hot_rank_chg": 3,
    "stock_cnt": 5850,
    "price": "5.03",
    "change": "-4.37",
    "market_id": "33",
    "circulate_market_value": "96234133000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.82
      },
      {
        "name": "手机产业链",
        "change_pct": -1.87
      },
      {
        "name": "超高清视频",
        "change_pct": 0.15
      },
      {
        "name": "半导体",
        "change_pct": -0.34
      },
      {
        "name": "OLED",
        "change_pct": -1.87
      },
      {
        "name": "光伏",
        "change_pct": -2.69
      },
      {
        "name": "黑色家电",
        "change_pct": -1.21
      },
      {
        "name": "家电",
        "change_pct": -1.84
      },
      {
        "name": "智能制造",
        "change_pct": -1.9
      },
      {
        "name": "工业互联网",
        "change_pct": -0.98
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.52
      },
      {
        "name": "国产芯片",
        "change_pct": -0.39
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.83
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.82
      },
      {
        "name": "MicroLED",
        "change_pct": -2.59
      },
      {
        "name": "MiniLED",
        "change_pct": -2.39
      },
      {
        "name": "华为产业链",
        "change_pct": -0.89
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.75
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 52,
    "hot_rank_chg": -23,
    "stock_cnt": 5850,
    "price": "5.29",
    "change": "-8.64",
    "market_id": "33",
    "circulate_market_value": "6859731500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.2
      },
      {
        "name": "创新药",
        "change_pct": -1.42
      },
      {
        "name": "央企改革",
        "change_pct": -1.17
      },
      {
        "name": "医疗器械",
        "change_pct": -1.13
      },
      {
        "name": "强势人气股",
        "change_pct": -1.54
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.11
      },
      {
        "name": "保健品",
        "change_pct": -0.11
      },
      {
        "name": "民营医院",
        "change_pct": -0.3
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -1.84
      },
      {
        "name": "医药",
        "change_pct": -0.97
      },
      {
        "name": "化学原料药",
        "change_pct": -1.33
      },
      {
        "name": "海南概念",
        "change_pct": -1.55
      },
      {
        "name": "脑科学",
        "change_pct": -1.13
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.91
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.9
      },
      {
        "name": "食品",
        "change_pct": -0.4
      },
      {
        "name": "国企改革",
        "change_pct": -0.88
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.5
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.19
      },
      {
        "name": "自贸区",
        "change_pct": -0.68
      },
      {
        "name": "合成生物",
        "change_pct": -1.66
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 72,
    "hot_rank_chg": -61,
    "stock_cnt": 5850,
    "price": "10.79",
    "change": "-2.18",
    "market_id": "33",
    "circulate_market_value": "43587929000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.29
      },
      {
        "name": "一带一路",
        "change_pct": -1.09
      },
      {
        "name": "京津冀",
        "change_pct": -0.5
      },
      {
        "name": "光伏",
        "change_pct": -2.69
      },
      {
        "name": "碳中和",
        "change_pct": -1.13
      },
      {
        "name": "国产芯片",
        "change_pct": -0.35
      },
      {
        "name": "IGBT",
        "change_pct": -1.25
      },
      {
        "name": "颗粒硅",
        "change_pct": -2.91
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.04
      },
      {
        "name": "大硅片",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 77,
    "hot_rank_chg": 5,
    "stock_cnt": 5850,
    "price": "12.44",
    "change": "-3.94",
    "market_id": "17",
    "circulate_market_value": "44630611000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -1.94
      },
      {
        "name": "OLED",
        "change_pct": -1.83
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.75
      },
      {
        "name": "国企改革",
        "change_pct": -0.87
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -2.65
      },
      {
        "name": "陕西国企改革",
        "change_pct": -1.06
      }
    ]
  },
  {
    "code": "603778",
    "name": "国晟科技",
    "hot_rank": 90,
    "hot_rank_chg": -29,
    "stock_cnt": 5850,
    "price": "11.19",
    "change": "2.19",
    "market_id": "17",
    "circulate_market_value": "7193571400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "业绩爆雷",
        "change_pct": 1.18
      },
      {
        "name": "园林",
        "change_pct": -1.21
      },
      {
        "name": "光伏",
        "change_pct": -2.69
      },
      {
        "name": "固态电池",
        "change_pct": -4.13
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.04
      },
      {
        "name": "国资入股",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 95,
    "hot_rank_chg": -46,
    "stock_cnt": 5850,
    "price": "5.59",
    "change": "-4.44",
    "market_id": "33",
    "circulate_market_value": "5774111100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -1.82
      },
      {
        "name": "锂电池",
        "change_pct": -4.25
      },
      {
        "name": "强势人气股",
        "change_pct": -1.49
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -3.39
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.04
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.24
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.45
      }
    ]
  },
  {
    "code": "300369",
    "name": "绿盟科技",
    "hot_rank": 99,
    "hot_rank_chg": 3194,
    "stock_cnt": 5850,
    "price": "6.48",
    "change": "20.00",
    "market_id": "33",
    "circulate_market_value": "5233914500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI安全",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.42
      },
      {
        "name": "泛在电力物联网",
        "change_pct": -1.15
      },
      {
        "name": "国产软件",
        "change_pct": 1.15
      },
      {
        "name": "人工智能",
        "change_pct": -0.09
      },
      {
        "name": "网络安全",
        "change_pct": 2.56
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.19
      },
      {
        "name": "智能制造",
        "change_pct": -1.89
      },
      {
        "name": "工业互联网",
        "change_pct": -0.95
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产操作系统",
        "change_pct": 2.27
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.84
      },
      {
        "name": "信创",
        "change_pct": 1.56
      },
      {
        "name": "数据要素",
        "change_pct": 0.74
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 1.94
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5850, "price": "7.70", "change": "1.45", "market_id": "33", "circulate_market_value": "272326930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.82}, {"name": "手机产业链", "change_pct": -1.87}, {"name": "超高清视频", "change_pct": 0.15}, {"name": "苹果产业链", "change_pct": -2.35}, {"name": "半导体", "change_pct": -0.34}, {"name": "人工智能", "change_pct": -0.1}, {"name": "互联网医疗", "change_pct": 0.11}, {"name": "VR&AR", "change_pct": -1.38}, {"name": "OLED", "change_pct": -1.87}, {"name": "京津冀", "change_pct": -0.51}, {"name": "物联网", "change_pct": -0.05}, {"name": "指纹识别", "change_pct": -0.25}, {"name": "汽车零部件", "change_pct": -2.71}, {"name": "白马股", "change_pct": -0.09}, {"name": "智能制造", "change_pct": -1.9}, {"name": "小米概念股", "change_pct": -1.52}, {"name": "国产芯片", "change_pct": -0.39}, {"name": "液晶面板/LCD", "change_pct": -2.82}, {"name": "全息概念", "change_pct": -1.0}, {"name": "理想汽车概念股", "change_pct": -1.95}, {"name": "MicroLED", "change_pct": -2.59}, {"name": "钙钛矿电池", "change_pct": -2.73}, {"name": "智能手表", "change_pct": -1.83}, {"name": "MiniLED", "change_pct": -2.39}, {"name": "传感器", "change_pct": -1.74}, {"name": "大硅片", "change_pct": -0.87}, {"name": "AI PC", "change_pct": -0.75}, {"name": "华为产业链", "change_pct": -0.89}, {"name": "回购", "change_pct": -1.21}, {"name": "智能眼镜/MR头显", "change_pct": -1.56}, {"name": "玻璃基板封装", "change_pct": -2.75}]}, {"code": "600584", "name": "长电科技", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "96.35", "change": "-4.59", "market_id": "17", "circulate_market_value": "172410090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 3, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "21.72", "change": "-0.96", "market_id": "33", "circulate_market_value": "72167996000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 4, "hot_rank_chg": 21, "stock_cnt": 5850, "price": "34.15", "change": "8.54", "market_id": "33", "circulate_market_value": "97671482000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "24.37", "change": "-7.41", "market_id": "17", "circulate_market_value": "50970883000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 6, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "612.99", "change": "-1.13", "market_id": "17", "circulate_market_value": "409778870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 7, "hot_rank_chg": 48, "stock_cnt": 5850, "price": "19.25", "change": "3.55", "market_id": "33", "circulate_market_value": "62092604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 8, "hot_rank_chg": 6, "stock_cnt": 5850, "price": "17.87", "change": "-2.67", "market_id": "17", "circulate_market_value": "22806690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "235.08", "change": "-0.76", "market_id": "33", "circulate_market_value": "325896510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 10, "hot_rank_chg": 88, "stock_cnt": 5850, "price": "99.19", "change": "6.08", "market_id": "17", "circulate_market_value": "145105730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 11, "hot_rank_chg": 48, "stock_cnt": 5850, "price": "66.33", "change": "4.00", "market_id": "17", "circulate_market_value": "1316258640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 12, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "78.30", "change": "-3.20", "market_id": "17", "circulate_market_value": "192120500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 13, "hot_rank_chg": 18, "stock_cnt": 5850, "price": "1139.35", "change": "1.55", "market_id": "33", "circulate_market_value": "1264609890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 14, "hot_rank_chg": 193, "stock_cnt": 5850, "price": "30.67", "change": "6.49", "market_id": "33", "circulate_market_value": "35151055000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 15, "hot_rank_chg": 25, "stock_cnt": 5850, "price": "6.96", "change": "-0.57", "market_id": "17", "circulate_market_value": "86276780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.17}, {"name": "核电", "change_pct": -2.41}, {"name": "强势人气股", "change_pct": -1.54}, {"name": "电力体制改革", "change_pct": -1.16}, {"name": "水电", "change_pct": -1.3}, {"name": "火电", "change_pct": -1.01}, {"name": "光伏", "change_pct": -2.69}, {"name": "风电", "change_pct": -2.34}, {"name": "国企改革", "change_pct": -0.88}, {"name": "算电协同", "change_pct": -2.35}]}, {"code": "603629", "name": "利通电子", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "117.10", "change": "5.44", "market_id": "17", "circulate_market_value": "42244317000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 17, "hot_rank_chg": 57, "stock_cnt": 5850, "price": "26.60", "change": "14.16", "market_id": "33", "circulate_market_value": "31914434000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 18, "hot_rank_chg": -16, "stock_cnt": 5850, "price": "78.17", "change": "10.01", "market_id": "33", "circulate_market_value": "114662242000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "001399", "name": "惠科股份", "hot_rank": 19, "hot_rank_chg": 46, "stock_cnt": 5850, "price": "36.47", "change": "4.83", "market_id": "33", "circulate_market_value": "15702769000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 20, "hot_rank_chg": 18, "stock_cnt": 5850, "price": "45.81", "change": "-3.09", "market_id": "17", "circulate_market_value": "156347220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 21, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "16.91", "change": "-8.70", "market_id": "33", "circulate_market_value": "17965248000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 22, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "52.13", "change": "-3.61", "market_id": "33", "circulate_market_value": "82060730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 23, "hot_rank_chg": -20, "stock_cnt": 5850, "price": "44.10", "change": "-10.00", "market_id": "33", "circulate_market_value": "34504044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 24, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "42.58", "change": "-6.11", "market_id": "33", "circulate_market_value": "45933914000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002457", "name": "青龙管业", "hot_rank": 25, "hot_rank_chg": 11, "stock_cnt": 5850, "price": "15.93", "change": "6.27", "market_id": "33", "circulate_market_value": "5308996700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 26, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "60.95", "change": "-0.49", "market_id": "33", "circulate_market_value": "70519949000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 27, "hot_rank_chg": -20, "stock_cnt": 5850, "price": "54.30", "change": "-3.00", "market_id": "17", "circulate_market_value": "45967846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 28, "hot_rank_chg": 66, "stock_cnt": 5850, "price": "190.87", "change": "2.72", "market_id": "33", "circulate_market_value": "60519322000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 29, "hot_rank_chg": 92, "stock_cnt": 5850, "price": "47.89", "change": "7.35", "market_id": "33", "circulate_market_value": "56286264000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600288", "name": "大恒科技", "hot_rank": 30, "hot_rank_chg": -7, "stock_cnt": 5850, "price": "17.11", "change": "10.03", "market_id": "17", "circulate_market_value": "7473648000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "机器视觉"}, {"code": "002354", "name": "天娱数科", "hot_rank": 31, "hot_rank_chg": -19, "stock_cnt": 5850, "price": "8.07", "change": "-7.35", "market_id": "33", "circulate_market_value": "13119348800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.6}, {"name": "电竞", "change_pct": -1.5}, {"name": "手游", "change_pct": -1.04}, {"name": "强势人气股", "change_pct": -1.54}, {"name": "人工智能", "change_pct": -0.1}, {"name": "游戏", "change_pct": -0.9}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.77}, {"name": "腾讯概念股", "change_pct": 0.83}, {"name": "快手概念股", "change_pct": -0.34}, {"name": "元宇宙", "change_pct": -0.43}, {"name": "虚拟数字人", "change_pct": -0.01}, {"name": "东数西算/算力", "change_pct": 0.96}, {"name": "web3.0", "change_pct": -0.05}, {"name": "AIGC概念", "change_pct": 0.6}, {"name": "数据要素", "change_pct": 0.73}, {"name": "字节跳动概念股", "change_pct": -0.1}, {"name": "AI营销", "change_pct": 0.08}, {"name": "ChatGPT", "change_pct": 0.76}, {"name": "智能眼镜/MR头显", "change_pct": -1.56}, {"name": "人工智能大模型", "change_pct": 1.19}, {"name": "人形机器人", "change_pct": -3.88}, {"name": "短剧/互动影游", "change_pct": -0.66}, {"name": "多模态", "change_pct": 0.29}, {"name": "Sora/AI视频", "change_pct": 0.32}, {"name": "IP经济/谷子经济", "change_pct": -0.83}, {"name": "小红书概念股", "change_pct": -0.6}]}, {"code": "000063", "name": "中兴通讯", "hot_rank": 32, "hot_rank_chg": 144, "stock_cnt": 5850, "price": "36.83", "change": "2.91", "market_id": "33", "circulate_market_value": "148337290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 33, "hot_rank_chg": 6, "stock_cnt": 5850, "price": "66.67", "change": "-2.26", "market_id": "33", "circulate_market_value": "101168540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 34, "hot_rank_chg": 53, "stock_cnt": 5850, "price": "518.82", "change": "1.71", "market_id": "33", "circulate_market_value": "650726440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 35, "hot_rank_chg": 235, "stock_cnt": 5850, "price": "153.50", "change": "5.61", "market_id": "17", "circulate_market_value": "307092820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002137", "name": "实益达", "hot_rank": 36, "hot_rank_chg": -10, "stock_cnt": 5850, "price": "12.20", "change": "6.74", "market_id": "33", "circulate_market_value": "4836788600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.34}, {"name": "直播/短视频", "change_pct": -0.02}, {"name": "光伏", "change_pct": -2.69}, {"name": "LED", "change_pct": -2.43}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.77}, {"name": "无线耳机", "change_pct": -1.64}, {"name": "网红/MCN", "change_pct": -0.64}, {"name": "华为产业链", "change_pct": -0.89}, {"name": "微信小店", "change_pct": 0.3}, {"name": "区块链", "change_pct": 0.69}]}, {"code": "600246", "name": "万通发展", "hot_rank": 37, "hot_rank_chg": -10, "stock_cnt": 5850, "price": "20.00", "change": "7.53", "market_id": "17", "circulate_market_value": "37808250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 38, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "56.54", "change": "-5.70", "market_id": "17", "circulate_market_value": "224712390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 39, "hot_rank_chg": 45, "stock_cnt": 5850, "price": "44.73", "change": "-9.71", "market_id": "33", "circulate_market_value": "67498063000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 40, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "5.03", "change": "-4.37", "market_id": "33", "circulate_market_value": "96234133000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.82}, {"name": "手机产业链", "change_pct": -1.87}, {"name": "超高清视频", "change_pct": 0.15}, {"name": "半导体", "change_pct": -0.34}, {"name": "OLED", "change_pct": -1.87}, {"name": "光伏", "change_pct": -2.69}, {"name": "黑色家电", "change_pct": -1.21}, {"name": "家电", "change_pct": -1.84}, {"name": "智能制造", "change_pct": -1.9}, {"name": "工业互联网", "change_pct": -0.98}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.52}, {"name": "国产芯片", "change_pct": -0.39}, {"name": "腾讯概念股", "change_pct": 0.83}, {"name": "液晶面板/LCD", "change_pct": -2.82}, {"name": "MicroLED", "change_pct": -2.59}, {"name": "MiniLED", "change_pct": -2.39}, {"name": "华为产业链", "change_pct": -0.89}, {"name": "玻璃基板封装", "change_pct": -2.75}]}, {"code": "600460", "name": "士兰微", "hot_rank": 41, "hot_rank_chg": 22, "stock_cnt": 5850, "price": "46.63", "change": "-1.40", "market_id": "17", "circulate_market_value": "77595670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000034", "name": "神州数码", "hot_rank": 42, "hot_rank_chg": 223, "stock_cnt": 5850, "price": "28.68", "change": "6.93", "market_id": "33", "circulate_market_value": "24353560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300604", "name": "长川科技", "hot_rank": 43, "hot_rank_chg": 271, "stock_cnt": 5850, "price": "321.68", "change": "5.70", "market_id": "33", "circulate_market_value": "157511910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300450", "name": "先导智能", "hot_rank": 44, "hot_rank_chg": 593, "stock_cnt": 5850, "price": "38.02", "change": "2.07", "market_id": "33", "circulate_market_value": "59288934000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 45, "hot_rank_chg": -12, "stock_cnt": 5850, "price": "100.23", "change": "-8.88", "market_id": "33", "circulate_market_value": "65453761000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688347", "name": "华虹宏力", "hot_rank": 46, "hot_rank_chg": 364, "stock_cnt": 5850, "price": "363.27", "change": "12.12", "market_id": "17", "circulate_market_value": "148123340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 47, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "42.38", "change": "-6.88", "market_id": "33", "circulate_market_value": "156136290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 48, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "220.60", "change": "-0.48", "market_id": "33", "circulate_market_value": "172177940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 50, "hot_rank_chg": -16, "stock_cnt": 5850, "price": "13.80", "change": "-9.39", "market_id": "17", "circulate_market_value": "23945497000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 51, "hot_rank_chg": 11, "stock_cnt": 5850, "price": "47.96", "change": "-2.22", "market_id": "17", "circulate_market_value": "70117271000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 52, "hot_rank_chg": -23, "stock_cnt": 5850, "price": "5.29", "change": "-8.64", "market_id": "33", "circulate_market_value": "6859731500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.2}, {"name": "创新药", "change_pct": -1.42}, {"name": "央企改革", "change_pct": -1.17}, {"name": "医疗器械", "change_pct": -1.13}, {"name": "强势人气股", "change_pct": -1.54}, {"name": "互联网医疗", "change_pct": 0.11}, {"name": "保健品", "change_pct": -0.11}, {"name": "民营医院", "change_pct": -0.3}, {"name": "CAR-T疗法", "change_pct": -1.84}, {"name": "医药", "change_pct": -0.97}, {"name": "化学原料药", "change_pct": -1.33}, {"name": "海南概念", "change_pct": -1.55}, {"name": "脑科学", "change_pct": -1.13}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -0.91}, {"name": "海南自由贸易港", "change_pct": -0.9}, {"name": "食品", "change_pct": -0.4}, {"name": "国企改革", "change_pct": -0.88}, {"name": "医疗信息化", "change_pct": 0.5}, {"name": "新冠病毒防治", "change_pct": -1.19}, {"name": "自贸区", "change_pct": -0.68}, {"name": "合成生物", "change_pct": -1.66}]}, {"code": "001309", "name": "德明利", "hot_rank": 53, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "820.72", "change": "-3.56", "market_id": "33", "circulate_market_value": "135474620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 55, "hot_rank_chg": -36, "stock_cnt": 5850, "price": "37.11", "change": "-6.50", "market_id": "17", "circulate_market_value": "25656949000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 56, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "203.50", "change": "6.71", "market_id": "17", "circulate_market_value": "86058817000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 57, "hot_rank_chg": -15, "stock_cnt": 5850, "price": "603.54", "change": "-3.88", "market_id": "33", "circulate_market_value": "170108890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 58, "hot_rank_chg": 35, "stock_cnt": 5850, "price": "129.38", "change": "-0.26", "market_id": "33", "circulate_market_value": "248773220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 59, "hot_rank_chg": -15, "stock_cnt": 5850, "price": "16.87", "change": "-5.12", "market_id": "17", "circulate_market_value": "84164746000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300390", "name": "天华新能", "hot_rank": 60, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "85.27", "change": "-11.42", "market_id": "33", "circulate_market_value": "57324257000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 61, "hot_rank_chg": 84, "stock_cnt": 5850, "price": "46.29", "change": "-0.62", "market_id": "17", "circulate_market_value": "124971246000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 62, "hot_rank_chg": 35, "stock_cnt": 5850, "price": "249.26", "change": "2.12", "market_id": "33", "circulate_market_value": "271291610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 63, "hot_rank_chg": 37, "stock_cnt": 5850, "price": "14.26", "change": "5.55", "market_id": "17", "circulate_market_value": "11226561500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300017", "name": "网宿科技", "hot_rank": 64, "hot_rank_chg": 643, "stock_cnt": 5850, "price": "14.66", "change": "19.97", "market_id": "33", "circulate_market_value": "34325498000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CDN涨价"}, {"code": "300666", "name": "江丰电子", "hot_rank": 65, "hot_rank_chg": 190, "stock_cnt": 5850, "price": "339.98", "change": "3.34", "market_id": "33", "circulate_market_value": "75174944000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 66, "hot_rank_chg": -61, "stock_cnt": 5850, "price": "70.78", "change": "-2.31", "market_id": "17", "circulate_market_value": "29474670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 67, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "47.58", "change": "-8.23", "market_id": "33", "circulate_market_value": "236458330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600673", "name": "东阳光", "hot_rank": 68, "hot_rank_chg": 306, "stock_cnt": 5850, "price": "36.16", "change": "3.52", "market_id": "17", "circulate_market_value": "108536335000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 69, "hot_rank_chg": 20, "stock_cnt": 5850, "price": "62.74", "change": "-0.85", "market_id": "33", "circulate_market_value": "458149990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300454", "name": "深信服", "hot_rank": 70, "hot_rank_chg": 1291, "stock_cnt": 5850, "price": "106.56", "change": "20.00", "market_id": "33", "circulate_market_value": "30689593000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力网关"}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 71, "hot_rank_chg": -39, "stock_cnt": 5850, "price": "21.50", "change": "6.17", "market_id": "17", "circulate_market_value": "9007802800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 72, "hot_rank_chg": -61, "stock_cnt": 5850, "price": "10.79", "change": "-2.18", "market_id": "33", "circulate_market_value": "43587929000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.29}, {"name": "一带一路", "change_pct": -1.09}, {"name": "京津冀", "change_pct": -0.5}, {"name": "光伏", "change_pct": -2.69}, {"name": "碳中和", "change_pct": -1.13}, {"name": "国产芯片", "change_pct": -0.35}, {"name": "IGBT", "change_pct": -1.25}, {"name": "颗粒硅", "change_pct": -2.91}, {"name": "异质结电池HJT", "change_pct": -2.04}, {"name": "大硅片", "change_pct": -0.82}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 73, "hot_rank_chg": -20, "stock_cnt": 5850, "price": "29.10", "change": "10.02", "market_id": "33", "circulate_market_value": "22040780000.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "半年报预增"}, {"code": "002837", "name": "英维克", "hot_rank": 74, "hot_rank_chg": 84, "stock_cnt": 5850, "price": "72.68", "change": "1.95", "market_id": "33", "circulate_market_value": "82173003000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 75, "hot_rank_chg": 105, "stock_cnt": 5850, "price": "53.76", "change": "-9.17", "market_id": "33", "circulate_market_value": "79320165000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 76, "hot_rank_chg": -41, "stock_cnt": 5850, "price": "39.33", "change": "-10.00", "market_id": "17", "circulate_market_value": "9465044100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 77, "hot_rank_chg": 5, "stock_cnt": 5850, "price": "12.44", "change": "-3.94", "market_id": "17", "circulate_market_value": "44630611000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -1.94}, {"name": "OLED", "change_pct": -1.83}, {"name": "液晶面板/LCD", "change_pct": -2.75}, {"name": "国企改革", "change_pct": -0.87}, {"name": "玻璃基板封装", "change_pct": -2.65}, {"name": "陕西国企改革", "change_pct": -1.06}]}, {"code": "605358", "name": "立昂微", "hot_rank": 78, "hot_rank_chg": 8, "stock_cnt": 5850, "price": "58.64", "change": "-3.12", "market_id": "17", "circulate_market_value": "45281771000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 79, "hot_rank_chg": 26, "stock_cnt": 5850, "price": "63.84", "change": "-2.67", "market_id": "17", "circulate_market_value": "68472573000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000062", "name": "深圳华强", "hot_rank": 80, "hot_rank_chg": 101, "stock_cnt": 5850, "price": "33.18", "change": "2.22", "market_id": "33", "circulate_market_value": "34669785000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 81, "hot_rank_chg": 58, "stock_cnt": 5850, "price": "80.07", "change": "-8.54", "market_id": "33", "circulate_market_value": "68378857000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 82, "hot_rank_chg": 31, "stock_cnt": 5850, "price": "147.82", "change": "-1.98", "market_id": "17", "circulate_market_value": "353955220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 83, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "21.14", "change": "-4.73", "market_id": "33", "circulate_market_value": "71104497000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 84, "hot_rank_chg": -15, "stock_cnt": 5850, "price": "149.92", "change": "-2.40", "market_id": "33", "circulate_market_value": "150667450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 85, "hot_rank_chg": -28, "stock_cnt": 5850, "price": "27.35", "change": "-10.00", "market_id": "17", "circulate_market_value": "15397954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 86, "hot_rank_chg": 89, "stock_cnt": 5850, "price": "128.70", "change": "-1.27", "market_id": "33", "circulate_market_value": "123130814000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 87, "hot_rank_chg": 81, "stock_cnt": 5850, "price": "29.15", "change": "10.00", "market_id": "33", "circulate_market_value": "8528230500.00", "change_type": "1", "change_section": "14", "change_days": "8", "change_reason": "磷化铟收购"}, {"code": "688008", "name": "澜起科技", "hot_rank": 88, "hot_rank_chg": 15, "stock_cnt": 5850, "price": "250.27", "change": "-1.16", "market_id": "17", "circulate_market_value": "286500220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 89, "hot_rank_chg": 98, "stock_cnt": 5850, "price": "124.25", "change": "2.95", "market_id": "17", "circulate_market_value": "27916320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603778", "name": "国晟科技", "hot_rank": 90, "hot_rank_chg": -29, "stock_cnt": 5850, "price": "11.19", "change": "2.19", "market_id": "17", "circulate_market_value": "7193571400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "业绩爆雷", "change_pct": 1.18}, {"name": "园林", "change_pct": -1.21}, {"name": "光伏", "change_pct": -2.69}, {"name": "固态电池", "change_pct": -4.13}, {"name": "异质结电池HJT", "change_pct": -2.04}, {"name": "国资入股", "change_pct": -1.35}]}, {"code": "603881", "name": "数据港", "hot_rank": 91, "hot_rank_chg": 575, "stock_cnt": 5850, "price": "24.21", "change": "10.00", "market_id": "17", "circulate_market_value": "20870289000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "001365", "name": "天海电子", "hot_rank": 92, "hot_rank_chg": -26, "stock_cnt": 5850, "price": "47.81", "change": "10.01", "market_id": "33", "circulate_market_value": "2749344900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "603137", "name": "恒尚节能", "hot_rank": 93, "hot_rank_chg": -52, "stock_cnt": 5850, "price": "22.91", "change": "9.99", "market_id": "17", "circulate_market_value": "4191002700.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "拟收购存储公司"}, {"code": "000811", "name": "冰轮环境", "hot_rank": 94, "hot_rank_chg": 55, "stock_cnt": 5850, "price": "51.00", "change": "-3.04", "market_id": "33", "circulate_market_value": "49898180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 95, "hot_rank_chg": -46, "stock_cnt": 5850, "price": "5.59", "change": "-4.44", "market_id": "33", "circulate_market_value": "5774111100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.82}, {"name": "锂电池", "change_pct": -4.25}, {"name": "强势人气股", "change_pct": -1.49}, {"name": "铜箔/覆铜板", "change_pct": -3.39}, {"name": "粤港澳大湾区", "change_pct": -0.04}, {"name": "新能源汽车", "change_pct": -3.24}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.45}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 96, "hot_rank_chg": 86, "stock_cnt": 5850, "price": "1431.96", "change": "3.17", "market_id": "17", "circulate_market_value": "899690400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 97, "hot_rank_chg": 148, "stock_cnt": 5850, "price": "37.78", "change": "-6.25", "market_id": "33", "circulate_market_value": "53057965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 98, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "22.72", "change": "-1.90", "market_id": "33", "circulate_market_value": "26717608000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300369", "name": "绿盟科技", "hot_rank": 99, "hot_rank_chg": 3194, "stock_cnt": 5850, "price": "6.48", "change": "20.00", "market_id": "33", "circulate_market_value": "5233914500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI安全", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.42}, {"name": "泛在电力物联网", "change_pct": -1.15}, {"name": "国产软件", "change_pct": 1.15}, {"name": "人工智能", "change_pct": -0.09}, {"name": "网络安全", "change_pct": 2.56}, {"name": "云计算数据中心", "change_pct": 1.19}, {"name": "智能制造", "change_pct": -1.89}, {"name": "工业互联网", "change_pct": -0.95}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产操作系统", "change_pct": 2.27}, {"name": "腾讯概念股", "change_pct": 0.84}, {"name": "信创", "change_pct": 1.56}, {"name": "数据要素", "change_pct": 0.74}, {"name": "华为云·鲲鹏", "change_pct": 1.94}]}, {"code": "600601", "name": "方正科技", "hot_rank": 100, "hot_rank_chg": -5, "stock_cnt": 5850, "price": "13.43", "change": "-8.64", "market_id": "17", "circulate_market_value": "56007039000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] 卓然股份：关于立案调查进展暨风险提示公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "600745": "ST/风险警示股"};