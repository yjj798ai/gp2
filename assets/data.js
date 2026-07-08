const UPDATE_TIME = "2026-07-08 15:16";
const THS_HOT = [
  {
    "name": "中国AI 50",
    "rise": 2.26,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "人工智能ETF",
    "code": "886102"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.58,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续243天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
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
    "name": "创新药",
    "rise": -1.14,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -2.13,
    "rate": 0,
    "tag": "",
    "hotTag": "连续196天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "ST板块",
    "rise": 1.47,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "国资云",
    "rise": 3.03,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885977"
  },
  {
    "name": "人形机器人",
    "rise": -3.34,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续407天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": -3.48,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续66天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -2.33,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续172天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "云计算",
    "rise": 1.86,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885362"
  },
  {
    "name": "AI应用",
    "rise": 0.44,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "猪肉",
    "rise": -2.17,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "光纤概念",
    "rise": -2.27,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "5GETF",
    "code": "886084"
  },
  {
    "name": "机器人概念",
    "rise": -2.08,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续74天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "液冷服务器",
    "rise": -1.78,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "培育钻石",
    "rise": -4.51,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -0.86,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "东数西算(算力)",
    "rise": -0.08,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "先进封装",
    "rise": -2.53,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续36天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  }
];
const THS_EVENTS = [
  {
    "title": "国务院批复同意《旅游强国建设“十五五”规划》",
    "desc": "",
    "heat": 386558,
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
    "heat": 274496,
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
    "heat": 21151,
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
        "chg": 11.132376
      }
    ]
  },
  {
    "title": "全球首款AI智能体手机将在2026世界人工智能大会首发首秀",
    "desc": "",
    "heat": 5376,
    "direction": "AI手机",
    "themes": [
      "AI手机"
    ],
    "stocks": [
      {
        "name": "*ST闻泰",
        "code": "600745",
        "chg": 3.404018
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
        "chg": 10.446097
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "OpenClaw概念",
    "change": "+4.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+4.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "商汤科技概念股",
    "change": "+3.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "国资云",
    "change": "+3.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "网络安全",
    "change": "+2.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+2.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为盘古",
    "change": "+2.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为云·鲲鹏",
    "change": "+2.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "国产操作系统",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IPv6",
    "change": "+2.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+2.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为HMS",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子发票",
    "change": "+2.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "远程办公",
    "change": "+2.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智慧政务",
    "change": "+2.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为昇腾",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "财税改革",
    "change": "+2.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信创",
    "change": "+1.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智谱AI",
    "change": "+1.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "DeepSeek概念股",
    "change": "+1.88%",
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
    "stock_cnt": 5836,
    "price": "7.63",
    "change": "0.66",
    "market_id": "33",
    "circulate_market_value": "269851230000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.56
      },
      {
        "name": "手机产业链",
        "change_pct": -2.32
      },
      {
        "name": "超高清视频",
        "change_pct": 0.12
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.92
      },
      {
        "name": "半导体",
        "change_pct": -1.06
      },
      {
        "name": "人工智能",
        "change_pct": 0.04
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.53
      },
      {
        "name": "VR&AR",
        "change_pct": -1.67
      },
      {
        "name": "OLED",
        "change_pct": -2.44
      },
      {
        "name": "京津冀",
        "change_pct": -0.45
      },
      {
        "name": "物联网",
        "change_pct": 0.04
      },
      {
        "name": "指纹识别",
        "change_pct": -0.89
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.92
      },
      {
        "name": "白马股",
        "change_pct": -0.31
      },
      {
        "name": "智能制造",
        "change_pct": -2.09
      },
      {
        "name": "小米概念股",
        "change_pct": -1.81
      },
      {
        "name": "国产芯片",
        "change_pct": -0.95
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.23
      },
      {
        "name": "全息概念",
        "change_pct": -0.82
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.22
      },
      {
        "name": "MicroLED",
        "change_pct": -3.17
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.98
      },
      {
        "name": "智能手表",
        "change_pct": -2.3
      },
      {
        "name": "MiniLED",
        "change_pct": -2.9
      },
      {
        "name": "传感器",
        "change_pct": -2.11
      },
      {
        "name": "大硅片",
        "change_pct": -2.02
      },
      {
        "name": "AI PC",
        "change_pct": -1.13
      },
      {
        "name": "华为产业链",
        "change_pct": -0.97
      },
      {
        "name": "回购",
        "change_pct": -1.39
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.92
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.7
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 26,
    "hot_rank_chg": -14,
    "stock_cnt": 5836,
    "price": "8.02",
    "change": "-7.92",
    "market_id": "33",
    "circulate_market_value": "13038064100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.36
      },
      {
        "name": "电竞",
        "change_pct": -1.41
      },
      {
        "name": "手游",
        "change_pct": -0.95
      },
      {
        "name": "强势人气股",
        "change_pct": -0.8
      },
      {
        "name": "人工智能",
        "change_pct": 0.04
      },
      {
        "name": "游戏",
        "change_pct": -0.75
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.11
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.99
      },
      {
        "name": "快手概念股",
        "change_pct": -0.14
      },
      {
        "name": "元宇宙",
        "change_pct": -0.39
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.16
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.98
      },
      {
        "name": "web3.0",
        "change_pct": 0.05
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.71
      },
      {
        "name": "数据要素",
        "change_pct": 1.25
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.04
      },
      {
        "name": "AI营销",
        "change_pct": 0.4
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.08
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.92
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.51
      },
      {
        "name": "人形机器人",
        "change_pct": -4.41
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.56
      },
      {
        "name": "多模态",
        "change_pct": 0.51
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.55
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.7
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 37,
    "hot_rank_chg": 3,
    "stock_cnt": 5836,
    "price": "6.95",
    "change": "-0.71",
    "market_id": "17",
    "circulate_market_value": "86152819000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.2
      },
      {
        "name": "核电",
        "change_pct": -2.71
      },
      {
        "name": "强势人气股",
        "change_pct": -0.8
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.22
      },
      {
        "name": "水电",
        "change_pct": -1.18
      },
      {
        "name": "火电",
        "change_pct": -1.05
      },
      {
        "name": "光伏",
        "change_pct": -3.1
      },
      {
        "name": "风电",
        "change_pct": -2.58
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "算电协同",
        "change_pct": -2.68
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 45,
    "hot_rank_chg": 996,
    "stock_cnt": 5836,
    "price": "6.97",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "3775802300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "油气装备",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -0.21
      },
      {
        "name": "油气管网",
        "change_pct": -0.99
      },
      {
        "name": "海工装备",
        "change_pct": -1.83
      },
      {
        "name": "举牌",
        "change_pct": -0.41
      },
      {
        "name": "天然气",
        "change_pct": -0.69
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.59
      },
      {
        "name": "风电",
        "change_pct": -2.58
      },
      {
        "name": "页岩气",
        "change_pct": -0.39
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "深地经济",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "600094",
    "name": "大名城",
    "hot_rank": 53,
    "hot_rank_chg": 57,
    "stock_cnt": 5836,
    "price": "4.22",
    "change": "9.90",
    "market_id": "17",
    "circulate_market_value": "8972690400.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "算力运营",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.27
      },
      {
        "name": "破净股",
        "change_pct": 0.17
      },
      {
        "name": "物业管理",
        "change_pct": 0.41
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.98
      },
      {
        "name": "旧改",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "002414",
    "name": "高德红外",
    "hot_rank": 55,
    "hot_rank_chg": 604,
    "stock_cnt": 5836,
    "price": "12.10",
    "change": "-4.87",
    "market_id": "33",
    "circulate_market_value": "41123210000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -2.32
      },
      {
        "name": "半导体",
        "change_pct": -1.06
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.47
      },
      {
        "name": "军民融合",
        "change_pct": -2.32
      },
      {
        "name": "军工",
        "change_pct": -2.28
      },
      {
        "name": "脑科学",
        "change_pct": -1.28
      },
      {
        "name": "智慧安防",
        "change_pct": 0.47
      },
      {
        "name": "流感",
        "change_pct": -0.17
      },
      {
        "name": "国产芯片",
        "change_pct": -0.95
      },
      {
        "name": "华为昇腾",
        "change_pct": 2.04
      },
      {
        "name": "航天",
        "change_pct": -2.83
      },
      {
        "name": "传感器",
        "change_pct": -2.11
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.14
      },
      {
        "name": "华为产业链",
        "change_pct": -0.97
      },
      {
        "name": "毫米波雷达",
        "change_pct": -2.58
      }
    ]
  },
  {
    "code": "002467",
    "name": "二六三",
    "hot_rank": 56,
    "hot_rank_chg": 1589,
    "stock_cnt": 5836,
    "price": "4.69",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "6410332800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "数据中心",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.17
      },
      {
        "name": "人工智能",
        "change_pct": 0.04
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.18
      },
      {
        "name": "物联网",
        "change_pct": 0.04
      },
      {
        "name": "教育",
        "change_pct": 0.31
      },
      {
        "name": "小米概念股",
        "change_pct": -1.81
      },
      {
        "name": "数字经济",
        "change_pct": 1.11
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.99
      },
      {
        "name": "信创",
        "change_pct": 1.99
      },
      {
        "name": "元宇宙",
        "change_pct": -0.39
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.16
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.98
      },
      {
        "name": "web3.0",
        "change_pct": 0.05
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.71
      },
      {
        "name": "教育信息化",
        "change_pct": 1.64
      },
      {
        "name": "在线教育",
        "change_pct": 0.77
      },
      {
        "name": "智慧政务",
        "change_pct": 2.05
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.53
      },
      {
        "name": "远程办公",
        "change_pct": 2.17
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.37
      },
      {
        "name": "词元概念/Token",
        "change_pct": 4.19
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.55
      },
      {
        "name": "智谱AI",
        "change_pct": 1.9
      },
      {
        "name": "区块链",
        "change_pct": 1.0
      }
    ]
  },
  {
    "code": "002137",
    "name": "实益达",
    "hot_rank": 57,
    "hot_rank_chg": -31,
    "stock_cnt": 5836,
    "price": "11.72",
    "change": "2.54",
    "market_id": "33",
    "circulate_market_value": "4646488700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -1.06
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.18
      },
      {
        "name": "光伏",
        "change_pct": -3.1
      },
      {
        "name": "LED",
        "change_pct": -2.69
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.11
      },
      {
        "name": "无线耳机",
        "change_pct": -2.05
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.53
      },
      {
        "name": "华为产业链",
        "change_pct": -0.97
      },
      {
        "name": "微信小店",
        "change_pct": 0.28
      },
      {
        "name": "区块链",
        "change_pct": 1.0
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 58,
    "hot_rank_chg": -29,
    "stock_cnt": 5836,
    "price": "5.21",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "6755992600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.01
      },
      {
        "name": "创新药",
        "change_pct": -1.63
      },
      {
        "name": "央企改革",
        "change_pct": -1.2
      },
      {
        "name": "医疗器械",
        "change_pct": -0.99
      },
      {
        "name": "强势人气股",
        "change_pct": -0.8
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.53
      },
      {
        "name": "保健品",
        "change_pct": 0.13
      },
      {
        "name": "民营医院",
        "change_pct": -0.05
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -1.93
      },
      {
        "name": "医药",
        "change_pct": -0.96
      },
      {
        "name": "化学原料药",
        "change_pct": -1.31
      },
      {
        "name": "海南概念",
        "change_pct": -1.48
      },
      {
        "name": "脑科学",
        "change_pct": -1.28
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.69
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.71
      },
      {
        "name": "食品",
        "change_pct": -0.06
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.88
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.14
      },
      {
        "name": "自贸区",
        "change_pct": -0.32
      },
      {
        "name": "合成生物",
        "change_pct": -1.72
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 59,
    "hot_rank_chg": -16,
    "stock_cnt": 5836,
    "price": "5.04",
    "change": "-4.18",
    "market_id": "33",
    "circulate_market_value": "96425453000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.56
      },
      {
        "name": "手机产业链",
        "change_pct": -2.32
      },
      {
        "name": "超高清视频",
        "change_pct": 0.12
      },
      {
        "name": "半导体",
        "change_pct": -1.06
      },
      {
        "name": "OLED",
        "change_pct": -2.44
      },
      {
        "name": "光伏",
        "change_pct": -3.1
      },
      {
        "name": "黑色家电",
        "change_pct": -1.15
      },
      {
        "name": "家电",
        "change_pct": -1.86
      },
      {
        "name": "智能制造",
        "change_pct": -2.09
      },
      {
        "name": "工业互联网",
        "change_pct": -1.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.81
      },
      {
        "name": "国产芯片",
        "change_pct": -0.95
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.99
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.23
      },
      {
        "name": "MicroLED",
        "change_pct": -3.17
      },
      {
        "name": "MiniLED",
        "change_pct": -2.9
      },
      {
        "name": "华为产业链",
        "change_pct": -0.97
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.7
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 63,
    "hot_rank_chg": 417,
    "stock_cnt": 5836,
    "price": "6.48",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4248975000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业零售",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.36
      },
      {
        "name": "新零售",
        "change_pct": 0.06
      },
      {
        "name": "农业种植",
        "change_pct": 0.13
      },
      {
        "name": "冷链",
        "change_pct": -1.15
      },
      {
        "name": "大农业",
        "change_pct": -1.27
      },
      {
        "name": "预制菜",
        "change_pct": -0.21
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "可降解塑料",
        "change_pct": -2.02
      },
      {
        "name": "免税店概念",
        "change_pct": 0.6
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 70,
    "hot_rank_chg": 265,
    "stock_cnt": 5836,
    "price": "5.49",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "5994457900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": -0.96
      },
      {
        "name": "化学原料药",
        "change_pct": -1.31
      },
      {
        "name": "数字经济",
        "change_pct": 1.11
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.12
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "603313",
    "name": "梦百合",
    "hot_rank": 72,
    "hot_rank_chg": 169,
    "stock_cnt": 5836,
    "price": "7.06",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "4028343400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "智能家居",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.36
      },
      {
        "name": "家具家居",
        "change_pct": -0.79
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "C2M",
        "change_pct": -1.04
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 75,
    "hot_rank_chg": 7,
    "stock_cnt": 5836,
    "price": "12.26",
    "change": "-5.33",
    "market_id": "17",
    "circulate_market_value": "43984831000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -2.51
      },
      {
        "name": "OLED",
        "change_pct": -2.44
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.23
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.7
      },
      {
        "name": "陕西国企改革",
        "change_pct": -1.05
      }
    ]
  },
  {
    "code": "300369",
    "name": "绿盟科技",
    "hot_rank": 81,
    "hot_rank_chg": 3212,
    "stock_cnt": 5836,
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
        "change_pct": 0.57
      },
      {
        "name": "泛在电力物联网",
        "change_pct": -1.2
      },
      {
        "name": "国产软件",
        "change_pct": 1.59
      },
      {
        "name": "人工智能",
        "change_pct": 0.04
      },
      {
        "name": "网络安全",
        "change_pct": 2.94
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "智能制造",
        "change_pct": -2.09
      },
      {
        "name": "工业互联网",
        "change_pct": -1.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产操作系统",
        "change_pct": 2.56
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.99
      },
      {
        "name": "信创",
        "change_pct": 1.99
      },
      {
        "name": "数据要素",
        "change_pct": 1.25
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 2.61
      }
    ]
  },
  {
    "code": "002152",
    "name": "广电运通",
    "hot_rank": 82,
    "hot_rank_chg": 2218,
    "stock_cnt": 5836,
    "price": "10.08",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "25019908000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "华为昇腾",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 1.66
      },
      {
        "name": "金融科技",
        "change_pct": 1.3
      },
      {
        "name": "人工智能",
        "change_pct": 0.04
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "移动支付",
        "change_pct": 1.02
      },
      {
        "name": "高铁轨交",
        "change_pct": -1.49
      },
      {
        "name": "人脸识别",
        "change_pct": 0.66
      },
      {
        "name": "大数据",
        "change_pct": 1.27
      },
      {
        "name": "教育",
        "change_pct": 0.31
      },
      {
        "name": "智慧城市",
        "change_pct": 0.46
      },
      {
        "name": "电子发票",
        "change_pct": 2.29
      },
      {
        "name": "虹膜识别",
        "change_pct": -1.22
      },
      {
        "name": "机器视觉",
        "change_pct": -1.4
      },
      {
        "name": "智慧安防",
        "change_pct": 0.47
      },
      {
        "name": "智能制造",
        "change_pct": -2.09
      },
      {
        "name": "数字经济",
        "change_pct": 1.11
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.85
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.99
      },
      {
        "name": "信创",
        "change_pct": 1.99
      },
      {
        "name": "华为昇腾",
        "change_pct": 2.04
      },
      {
        "name": "国资云",
        "change_pct": 3.27
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.16
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.98
      },
      {
        "name": "跨境支付",
        "change_pct": 2.39
      },
      {
        "name": "电子身份证",
        "change_pct": 1.58
      },
      {
        "name": "数据要素",
        "change_pct": 1.25
      },
      {
        "name": "教育信息化",
        "change_pct": 1.64
      },
      {
        "name": "数字人民币",
        "change_pct": 1.8
      },
      {
        "name": "智慧政务",
        "change_pct": 2.05
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 2.61
      },
      {
        "name": "华为产业链",
        "change_pct": -0.97
      },
      {
        "name": "时空大数据",
        "change_pct": 0.84
      },
      {
        "name": "服务器",
        "change_pct": 1.8
      },
      {
        "name": "掌纹识别",
        "change_pct": 1.37
      },
      {
        "name": "英伟达概念",
        "change_pct": -0.69
      },
      {
        "name": "人形机器人",
        "change_pct": -4.41
      },
      {
        "name": "多模态",
        "change_pct": 0.51
      },
      {
        "name": "算力一体机",
        "change_pct": 1.81
      },
      {
        "name": "区块链",
        "change_pct": 1.0
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 85,
    "hot_rank_chg": -74,
    "stock_cnt": 5836,
    "price": "10.69",
    "change": "-3.00",
    "market_id": "33",
    "circulate_market_value": "43183963000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -1.06
      },
      {
        "name": "一带一路",
        "change_pct": -1.17
      },
      {
        "name": "京津冀",
        "change_pct": -0.45
      },
      {
        "name": "光伏",
        "change_pct": -3.1
      },
      {
        "name": "碳中和",
        "change_pct": -1.01
      },
      {
        "name": "国产芯片",
        "change_pct": -0.95
      },
      {
        "name": "IGBT",
        "change_pct": -2.13
      },
      {
        "name": "颗粒硅",
        "change_pct": -3.54
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.54
      },
      {
        "name": "大硅片",
        "change_pct": -2.02
      }
    ]
  },
  {
    "code": "000524",
    "name": "岭南控股",
    "hot_rank": 86,
    "hot_rank_chg": 224,
    "stock_cnt": 5836,
    "price": "9.85",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "6599178300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "资产重组",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.47
      },
      {
        "name": "旅游",
        "change_pct": 1.18
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.18
      },
      {
        "name": "复牌股",
        "change_pct": -4.44
      },
      {
        "name": "预制菜",
        "change_pct": -0.21
      },
      {
        "name": "露营",
        "change_pct": -1.35
      },
      {
        "name": "免税店概念",
        "change_pct": 0.6
      },
      {
        "name": "邮轮游艇",
        "change_pct": -1.3
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5836, "price": "7.63", "change": "0.66", "market_id": "33", "circulate_market_value": "269851230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.56}, {"name": "手机产业链", "change_pct": -2.32}, {"name": "超高清视频", "change_pct": 0.12}, {"name": "苹果产业链", "change_pct": -2.92}, {"name": "半导体", "change_pct": -1.06}, {"name": "人工智能", "change_pct": 0.04}, {"name": "互联网医疗", "change_pct": 0.53}, {"name": "VR&AR", "change_pct": -1.67}, {"name": "OLED", "change_pct": -2.44}, {"name": "京津冀", "change_pct": -0.45}, {"name": "物联网", "change_pct": 0.04}, {"name": "指纹识别", "change_pct": -0.89}, {"name": "汽车零部件", "change_pct": -2.92}, {"name": "白马股", "change_pct": -0.31}, {"name": "智能制造", "change_pct": -2.09}, {"name": "小米概念股", "change_pct": -1.81}, {"name": "国产芯片", "change_pct": -0.95}, {"name": "液晶面板/LCD", "change_pct": -3.23}, {"name": "全息概念", "change_pct": -0.82}, {"name": "理想汽车概念股", "change_pct": -2.22}, {"name": "MicroLED", "change_pct": -3.17}, {"name": "钙钛矿电池", "change_pct": -2.98}, {"name": "智能手表", "change_pct": -2.3}, {"name": "MiniLED", "change_pct": -2.9}, {"name": "传感器", "change_pct": -2.11}, {"name": "大硅片", "change_pct": -2.02}, {"name": "AI PC", "change_pct": -1.13}, {"name": "华为产业链", "change_pct": -0.97}, {"name": "回购", "change_pct": -1.39}, {"name": "智能眼镜/MR头显", "change_pct": -1.92}, {"name": "玻璃基板封装", "change_pct": -3.7}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5836, "price": "78.17", "change": "10.01", "market_id": "33", "circulate_market_value": "114662242000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "000938", "name": "紫光股份", "hot_rank": 3, "hot_rank_chg": 22, "stock_cnt": 5836, "price": "33.62", "change": "6.80", "market_id": "33", "circulate_market_value": "96155643000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 4, "hot_rank_chg": 49, "stock_cnt": 5836, "price": "29.10", "change": "10.02", "market_id": "33", "circulate_market_value": "22040780000.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "半年报预增"}, {"code": "603137", "name": "恒尚节能", "hot_rank": 5, "hot_rank_chg": 36, "stock_cnt": 5836, "price": "22.91", "change": "9.99", "market_id": "17", "circulate_market_value": "4191002700.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "拟收购存储公司"}, {"code": "600584", "name": "长电科技", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5836, "price": "94.11", "change": "-6.81", "market_id": "17", "circulate_market_value": "168401810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5836, "price": "23.88", "change": "-9.27", "market_id": "17", "circulate_market_value": "49946027000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 8, "hot_rank_chg": 2, "stock_cnt": 5836, "price": "76.96", "change": "-4.86", "market_id": "17", "circulate_market_value": "188832620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 9, "hot_rank_chg": -6, "stock_cnt": 5836, "price": "44.10", "change": "-10.00", "market_id": "33", "circulate_market_value": "34504044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 11, "hot_rank_chg": -10, "stock_cnt": 5836, "price": "21.57", "change": "-1.64", "market_id": "33", "circulate_market_value": "71669598000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600288", "name": "大恒科技", "hot_rank": 12, "hot_rank_chg": 11, "stock_cnt": 5836, "price": "17.11", "change": "10.03", "market_id": "17", "circulate_market_value": "7473648000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "机器视觉"}, {"code": "000066", "name": "中国长城", "hot_rank": 13, "hot_rank_chg": 42, "stock_cnt": 5836, "price": "19.31", "change": "3.93", "market_id": "33", "circulate_market_value": "62286140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 14, "hot_rank_chg": -5, "stock_cnt": 5836, "price": "237.56", "change": "0.29", "market_id": "33", "circulate_market_value": "329334590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 15, "hot_rank_chg": 192, "stock_cnt": 5836, "price": "30.84", "change": "7.08", "market_id": "33", "circulate_market_value": "35345893000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 16, "hot_rank_chg": 5, "stock_cnt": 5836, "price": "16.15", "change": "-12.75", "market_id": "33", "circulate_market_value": "17157821000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300017", "name": "网宿科技", "hot_rank": 17, "hot_rank_chg": 690, "stock_cnt": 5836, "price": "14.66", "change": "19.97", "market_id": "33", "circulate_market_value": "34325498000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CDN涨价"}, {"code": "600522", "name": "中天科技", "hot_rank": 18, "hot_rank_chg": 20, "stock_cnt": 5836, "price": "44.86", "change": "-5.10", "market_id": "17", "circulate_market_value": "153104920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 19, "hot_rank_chg": 176, "stock_cnt": 5836, "price": "16.36", "change": "10.02", "market_id": "17", "circulate_market_value": "5573917400.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "半导体光刻胶"}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 20, "hot_rank_chg": 12, "stock_cnt": 5836, "price": "21.91", "change": "8.20", "market_id": "17", "circulate_market_value": "9179579500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 21, "hot_rank_chg": 77, "stock_cnt": 5836, "price": "98.15", "change": "4.97", "market_id": "17", "circulate_market_value": "143598780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 22, "hot_rank_chg": -9, "stock_cnt": 5836, "price": "603.17", "change": "-2.71", "market_id": "17", "circulate_market_value": "403214280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 23, "hot_rank_chg": -9, "stock_cnt": 5836, "price": "17.59", "change": "-4.19", "market_id": "17", "circulate_market_value": "22449339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 24, "hot_rank_chg": -6, "stock_cnt": 5836, "price": "42.12", "change": "-7.12", "market_id": "33", "circulate_market_value": "45437681000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 25, "hot_rank_chg": 49, "stock_cnt": 5836, "price": "26.44", "change": "13.48", "market_id": "33", "circulate_market_value": "31722467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 26, "hot_rank_chg": -14, "stock_cnt": 5836, "price": "8.02", "change": "-7.92", "market_id": "33", "circulate_market_value": "13038064100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.36}, {"name": "电竞", "change_pct": -1.41}, {"name": "手游", "change_pct": -0.95}, {"name": "强势人气股", "change_pct": -0.8}, {"name": "人工智能", "change_pct": 0.04}, {"name": "游戏", "change_pct": -0.75}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.11}, {"name": "腾讯概念股", "change_pct": 0.99}, {"name": "快手概念股", "change_pct": -0.14}, {"name": "元宇宙", "change_pct": -0.39}, {"name": "虚拟数字人", "change_pct": 0.16}, {"name": "东数西算/算力", "change_pct": 0.98}, {"name": "web3.0", "change_pct": 0.05}, {"name": "AIGC概念", "change_pct": 0.71}, {"name": "数据要素", "change_pct": 1.25}, {"name": "字节跳动概念股", "change_pct": 0.04}, {"name": "AI营销", "change_pct": 0.4}, {"name": "ChatGPT", "change_pct": 1.08}, {"name": "智能眼镜/MR头显", "change_pct": -1.92}, {"name": "人工智能大模型", "change_pct": 1.51}, {"name": "人形机器人", "change_pct": -4.41}, {"name": "短剧/互动影游", "change_pct": -0.56}, {"name": "多模态", "change_pct": 0.51}, {"name": "Sora/AI视频", "change_pct": 0.55}, {"name": "IP经济/谷子经济", "change_pct": -0.7}, {"name": "小红书概念股", "change_pct": -0.36}]}, {"code": "601138", "name": "工业富联", "hot_rank": 27, "hot_rank_chg": 32, "stock_cnt": 5836, "price": "66.01", "change": "3.50", "market_id": "17", "circulate_market_value": "1309908530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 28, "hot_rank_chg": 140, "stock_cnt": 5836, "price": "29.15", "change": "10.00", "market_id": "33", "circulate_market_value": "8528230500.00", "change_type": "1", "change_section": "14", "change_days": "8", "change_reason": "磷化铟收购"}, {"code": "002841", "name": "视源股份", "hot_rank": 29, "hot_rank_chg": 25, "stock_cnt": 5836, "price": "47.39", "change": "10.01", "market_id": "33", "circulate_market_value": "24706561000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增"}, {"code": "001365", "name": "天海电子", "hot_rank": 30, "hot_rank_chg": 36, "stock_cnt": 5836, "price": "47.81", "change": "10.01", "market_id": "33", "circulate_market_value": "2749344900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "603118", "name": "共进股份", "hot_rank": 31, "hot_rank_chg": 69, "stock_cnt": 5836, "price": "14.44", "change": "6.88", "market_id": "17", "circulate_market_value": "11368271300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 32, "hot_rank_chg": -1, "stock_cnt": 5836, "price": "1128.35", "change": "0.57", "market_id": "33", "circulate_market_value": "1252400550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 33, "hot_rank_chg": -14, "stock_cnt": 5836, "price": "36.50", "change": "-8.04", "market_id": "17", "circulate_market_value": "25235210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000070", "name": "特发信息", "hot_rank": 34, "hot_rank_chg": 277, "stock_cnt": 5836, "price": "17.42", "change": "-4.18", "market_id": "33", "circulate_market_value": "14924185000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 35, "hot_rank_chg": -28, "stock_cnt": 5836, "price": "53.98", "change": "-3.57", "market_id": "17", "circulate_market_value": "45696949000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 36, "hot_rank_chg": 144, "stock_cnt": 5836, "price": "53.27", "change": "-10.00", "market_id": "33", "circulate_market_value": "78611817000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 37, "hot_rank_chg": 3, "stock_cnt": 5836, "price": "6.95", "change": "-0.71", "market_id": "17", "circulate_market_value": "86152819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.2}, {"name": "核电", "change_pct": -2.71}, {"name": "强势人气股", "change_pct": -0.8}, {"name": "电力体制改革", "change_pct": -1.22}, {"name": "水电", "change_pct": -1.18}, {"name": "火电", "change_pct": -1.05}, {"name": "光伏", "change_pct": -3.1}, {"name": "风电", "change_pct": -2.58}, {"name": "国企改革", "change_pct": -0.8}, {"name": "算电协同", "change_pct": -2.68}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 38, "hot_rank_chg": -5, "stock_cnt": 5836, "price": "99.00", "change": "-10.00", "market_id": "33", "circulate_market_value": "64650527000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 39, "hot_rank_chg": -17, "stock_cnt": 5836, "price": "51.13", "change": "-5.44", "market_id": "33", "circulate_market_value": "80486575000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 40, "hot_rank_chg": -24, "stock_cnt": 5836, "price": "115.37", "change": "3.87", "market_id": "17", "circulate_market_value": "41616659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603296", "name": "华勤技术", "hot_rank": 41, "hot_rank_chg": 549, "stock_cnt": 5836, "price": "78.29", "change": "10.00", "market_id": "17", "circulate_market_value": "62522085000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超节点"}, {"code": "002457", "name": "青龙管业", "hot_rank": 42, "hot_rank_chg": -6, "stock_cnt": 5836, "price": "15.48", "change": "3.27", "market_id": "33", "circulate_market_value": "5159025000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 43, "hot_rank_chg": 41, "stock_cnt": 5836, "price": "44.59", "change": "-9.99", "market_id": "33", "circulate_market_value": "67286801000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300454", "name": "深信服", "hot_rank": 44, "hot_rank_chg": 1317, "stock_cnt": 5836, "price": "106.56", "change": "20.00", "market_id": "33", "circulate_market_value": "30689593000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力网关"}, {"code": "002490", "name": "山东墨龙", "hot_rank": 45, "hot_rank_chg": 996, "stock_cnt": 5836, "price": "6.97", "change": "9.94", "market_id": "33", "circulate_market_value": "3775802300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "油气装备", "xgb_concepts": [{"name": "油服", "change_pct": -0.21}, {"name": "油气管网", "change_pct": -0.99}, {"name": "海工装备", "change_pct": -1.83}, {"name": "举牌", "change_pct": -0.41}, {"name": "天然气", "change_pct": -0.69}, {"name": "山东国企改革", "change_pct": -0.59}, {"name": "风电", "change_pct": -2.58}, {"name": "页岩气", "change_pct": -0.39}, {"name": "国企改革", "change_pct": -0.8}, {"name": "深地经济", "change_pct": 1.02}]}, {"code": "603881", "name": "数据港", "hot_rank": 46, "hot_rank_chg": 620, "stock_cnt": 5836, "price": "24.21", "change": "10.00", "market_id": "17", "circulate_market_value": "20870289000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "300418", "name": "昆仑万维", "hot_rank": 47, "hot_rank_chg": 74, "stock_cnt": 5836, "price": "47.96", "change": "7.51", "market_id": "33", "circulate_market_value": "56368536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 48, "hot_rank_chg": 128, "stock_cnt": 5836, "price": "36.87", "change": "3.02", "market_id": "33", "circulate_market_value": "148498390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 49, "hot_rank_chg": -14, "stock_cnt": 5836, "price": "39.33", "change": "-10.00", "market_id": "17", "circulate_market_value": "9465044100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001229", "name": "魅视科技", "hot_rank": 50, "hot_rank_chg": 14, "stock_cnt": 5836, "price": "42.70", "change": "9.99", "market_id": "33", "circulate_market_value": "3149176500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI视觉"}, {"code": "600129", "name": "太极集团", "hot_rank": 51, "hot_rank_chg": 1023, "stock_cnt": 5836, "price": "14.96", "change": "10.00", "market_id": "17", "circulate_market_value": "8249216000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "藿香正气口服液"}, {"code": "600350", "name": "山东高速", "hot_rank": 52, "hot_rank_chg": 536, "stock_cnt": 5836, "price": "13.49", "change": "10.03", "market_id": "17", "circulate_market_value": "65218360000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高速公路"}, {"code": "600094", "name": "大名城", "hot_rank": 53, "hot_rank_chg": 57, "stock_cnt": 5836, "price": "4.22", "change": "9.90", "market_id": "17", "circulate_market_value": "8972690400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力运营", "xgb_concepts": [{"name": "房地产", "change_pct": 0.27}, {"name": "破净股", "change_pct": 0.17}, {"name": "物业管理", "change_pct": 0.41}, {"name": "东数西算/算力", "change_pct": 0.98}, {"name": "旧改", "change_pct": -0.09}]}, {"code": "002951", "name": "金时科技", "hot_rank": 54, "hot_rank_chg": 82, "stock_cnt": 5836, "price": "16.32", "change": "9.97", "market_id": "33", "circulate_market_value": "6546350600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "超级电容"}, {"code": "002414", "name": "高德红外", "hot_rank": 55, "hot_rank_chg": 604, "stock_cnt": 5836, "price": "12.10", "change": "-4.87", "market_id": "33", "circulate_market_value": "41123210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手机产业链", "change_pct": -2.32}, {"name": "半导体", "change_pct": -1.06}, {"name": "无人驾驶", "change_pct": -1.47}, {"name": "军民融合", "change_pct": -2.32}, {"name": "军工", "change_pct": -2.28}, {"name": "脑科学", "change_pct": -1.28}, {"name": "智慧安防", "change_pct": 0.47}, {"name": "流感", "change_pct": -0.17}, {"name": "国产芯片", "change_pct": -0.95}, {"name": "华为昇腾", "change_pct": 2.04}, {"name": "航天", "change_pct": -2.83}, {"name": "传感器", "change_pct": -2.11}, {"name": "新冠病毒防治", "change_pct": -1.14}, {"name": "华为产业链", "change_pct": -0.97}, {"name": "毫米波雷达", "change_pct": -2.58}]}, {"code": "002467", "name": "二六三", "hot_rank": 56, "hot_rank_chg": 1589, "stock_cnt": 5836, "price": "4.69", "change": "10.09", "market_id": "33", "circulate_market_value": "6410332800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.17}, {"name": "人工智能", "change_pct": 0.04}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "直播/短视频", "change_pct": 0.18}, {"name": "物联网", "change_pct": 0.04}, {"name": "教育", "change_pct": 0.31}, {"name": "小米概念股", "change_pct": -1.81}, {"name": "数字经济", "change_pct": 1.11}, {"name": "腾讯概念股", "change_pct": 0.99}, {"name": "信创", "change_pct": 1.99}, {"name": "元宇宙", "change_pct": -0.39}, {"name": "虚拟数字人", "change_pct": 0.16}, {"name": "东数西算/算力", "change_pct": 0.98}, {"name": "web3.0", "change_pct": 0.05}, {"name": "AIGC概念", "change_pct": 0.71}, {"name": "教育信息化", "change_pct": 1.64}, {"name": "在线教育", "change_pct": 0.77}, {"name": "智慧政务", "change_pct": 2.05}, {"name": "网红/MCN", "change_pct": -0.53}, {"name": "远程办公", "change_pct": 2.17}, {"name": "5G消息/RCS", "change_pct": 1.37}, {"name": "词元概念/Token", "change_pct": 4.19}, {"name": "Sora/AI视频", "change_pct": 0.55}, {"name": "智谱AI", "change_pct": 1.9}, {"name": "区块链", "change_pct": 1.0}]}, {"code": "002137", "name": "实益达", "hot_rank": 57, "hot_rank_chg": -31, "stock_cnt": 5836, "price": "11.72", "change": "2.54", "market_id": "33", "circulate_market_value": "4646488700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -1.06}, {"name": "直播/短视频", "change_pct": 0.18}, {"name": "光伏", "change_pct": -3.1}, {"name": "LED", "change_pct": -2.69}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.11}, {"name": "无线耳机", "change_pct": -2.05}, {"name": "网红/MCN", "change_pct": -0.53}, {"name": "华为产业链", "change_pct": -0.97}, {"name": "微信小店", "change_pct": 0.28}, {"name": "区块链", "change_pct": 1.0}]}, {"code": "000566", "name": "海南海药", "hot_rank": 58, "hot_rank_chg": -29, "stock_cnt": 5836, "price": "5.21", "change": "-10.02", "market_id": "33", "circulate_market_value": "6755992600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.01}, {"name": "创新药", "change_pct": -1.63}, {"name": "央企改革", "change_pct": -1.2}, {"name": "医疗器械", "change_pct": -0.99}, {"name": "强势人气股", "change_pct": -0.8}, {"name": "互联网医疗", "change_pct": 0.53}, {"name": "保健品", "change_pct": 0.13}, {"name": "民营医院", "change_pct": -0.05}, {"name": "CAR-T疗法", "change_pct": -1.93}, {"name": "医药", "change_pct": -0.96}, {"name": "化学原料药", "change_pct": -1.31}, {"name": "海南概念", "change_pct": -1.48}, {"name": "脑科学", "change_pct": -1.28}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -0.69}, {"name": "海南自由贸易港", "change_pct": -0.71}, {"name": "食品", "change_pct": -0.06}, {"name": "国企改革", "change_pct": -0.8}, {"name": "医疗信息化", "change_pct": 0.88}, {"name": "新冠病毒防治", "change_pct": -1.14}, {"name": "自贸区", "change_pct": -0.32}, {"name": "合成生物", "change_pct": -1.72}]}, {"code": "000100", "name": "TCL科技", "hot_rank": 59, "hot_rank_chg": -16, "stock_cnt": 5836, "price": "5.04", "change": "-4.18", "market_id": "33", "circulate_market_value": "96425453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.56}, {"name": "手机产业链", "change_pct": -2.32}, {"name": "超高清视频", "change_pct": 0.12}, {"name": "半导体", "change_pct": -1.06}, {"name": "OLED", "change_pct": -2.44}, {"name": "光伏", "change_pct": -3.1}, {"name": "黑色家电", "change_pct": -1.15}, {"name": "家电", "change_pct": -1.86}, {"name": "智能制造", "change_pct": -2.09}, {"name": "工业互联网", "change_pct": -1.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.81}, {"name": "国产芯片", "change_pct": -0.95}, {"name": "腾讯概念股", "change_pct": 0.99}, {"name": "液晶面板/LCD", "change_pct": -3.23}, {"name": "MicroLED", "change_pct": -3.17}, {"name": "MiniLED", "change_pct": -2.9}, {"name": "华为产业链", "change_pct": -0.97}, {"name": "玻璃基板封装", "change_pct": -3.7}]}, {"code": "002240", "name": "盛新锂能", "hot_rank": 60, "hot_rank_chg": 247, "stock_cnt": 5836, "price": "38.14", "change": "-10.01", "market_id": "33", "circulate_market_value": "34818339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 61, "hot_rank_chg": -11, "stock_cnt": 5836, "price": "42.01", "change": "-7.69", "market_id": "33", "circulate_market_value": "154773140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 62, "hot_rank_chg": -57, "stock_cnt": 5836, "price": "69.79", "change": "-3.67", "market_id": "17", "circulate_market_value": "29058302000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 63, "hot_rank_chg": 417, "stock_cnt": 5836, "price": "6.48", "change": "10.02", "market_id": "33", "circulate_market_value": "4248975000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.36}, {"name": "新零售", "change_pct": 0.06}, {"name": "农业种植", "change_pct": 0.13}, {"name": "冷链", "change_pct": -1.15}, {"name": "大农业", "change_pct": -1.27}, {"name": "预制菜", "change_pct": -0.21}, {"name": "国企改革", "change_pct": -0.8}, {"name": "可降解塑料", "change_pct": -2.02}, {"name": "免税店概念", "change_pct": 0.6}, {"name": "湖北国企改革", "change_pct": -0.24}]}, {"code": "603496", "name": "恒为科技", "hot_rank": 64, "hot_rank_chg": 1021, "stock_cnt": 5836, "price": "24.54", "change": "10.00", "market_id": "17", "circulate_market_value": "7857934800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "000636", "name": "风华高科", "hot_rank": 65, "hot_rank_chg": -35, "stock_cnt": 5836, "price": "60.70", "change": "-0.91", "market_id": "33", "circulate_market_value": "70230696000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 66, "hot_rank_chg": -21, "stock_cnt": 5836, "price": "56.06", "change": "-6.57", "market_id": "17", "circulate_market_value": "222647170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000062", "name": "深圳华强", "hot_rank": 67, "hot_rank_chg": 114, "stock_cnt": 5836, "price": "33.86", "change": "4.41", "market_id": "33", "circulate_market_value": "35380317000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603178", "name": "圣龙股份", "hot_rank": 68, "hot_rank_chg": -20, "stock_cnt": 5836, "price": "17.84", "change": "9.11", "market_id": "17", "circulate_market_value": "4217588000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000034", "name": "神州数码", "hot_rank": 69, "hot_rank_chg": 196, "stock_cnt": 5836, "price": "28.56", "change": "6.49", "market_id": "33", "circulate_market_value": "24251662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 70, "hot_rank_chg": 265, "stock_cnt": 5836, "price": "5.49", "change": "10.02", "market_id": "17", "circulate_market_value": "5994457900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": -0.96}, {"name": "化学原料药", "change_pct": -1.31}, {"name": "数字经济", "change_pct": 1.11}, {"name": "辅助生殖", "change_pct": -0.12}, {"name": "新冠病毒防治", "change_pct": -1.14}]}, {"code": "301308", "name": "江波龙", "hot_rank": 71, "hot_rank_chg": -29, "stock_cnt": 5836, "price": "592.71", "change": "-5.60", "market_id": "33", "circulate_market_value": "167056430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603313", "name": "梦百合", "hot_rank": 72, "hot_rank_chg": 169, "stock_cnt": 5836, "price": "7.06", "change": "9.97", "market_id": "17", "circulate_market_value": "4028343400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "智能家居", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.36}, {"name": "家具家居", "change_pct": -0.79}, {"name": "独角兽", "change_pct": 0.85}, {"name": "C2M", "change_pct": -1.04}]}, {"code": "002409", "name": "雅克科技", "hot_rank": 73, "hot_rank_chg": 21, "stock_cnt": 5836, "price": "190.00", "change": "2.25", "market_id": "33", "circulate_market_value": "60519322000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603339", "name": "四方科技", "hot_rank": 74, "hot_rank_chg": 1238, "stock_cnt": 5836, "price": "15.47", "change": "10.03", "market_id": "17", "circulate_market_value": "4787055000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷服务器"}, {"code": "600707", "name": "彩虹股份", "hot_rank": 75, "hot_rank_chg": 7, "stock_cnt": 5836, "price": "12.26", "change": "-5.33", "market_id": "17", "circulate_market_value": "43984831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -2.51}, {"name": "OLED", "change_pct": -2.44}, {"name": "液晶面板/LCD", "change_pct": -3.23}, {"name": "国企改革", "change_pct": -0.8}, {"name": "玻璃基板封装", "change_pct": -3.7}, {"name": "陕西国企改革", "change_pct": -1.05}]}, {"code": "600246", "name": "万通发展", "hot_rank": 76, "hot_rank_chg": -49, "stock_cnt": 5836, "price": "19.50", "change": "4.84", "market_id": "17", "circulate_market_value": "36863043000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 77, "hot_rank_chg": 175, "stock_cnt": 5836, "price": "105.50", "change": "11.63", "market_id": "33", "circulate_market_value": "117488636000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 78, "hot_rank_chg": 1010, "stock_cnt": 5836, "price": "16.38", "change": "10.01", "market_id": "17", "circulate_market_value": "17597083000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "600110", "name": "诺德股份", "hot_rank": 79, "hot_rank_chg": -45, "stock_cnt": 5836, "price": "13.71", "change": "-9.98", "market_id": "17", "circulate_market_value": "23789331000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300369", "name": "绿盟科技", "hot_rank": 81, "hot_rank_chg": 3212, "stock_cnt": 5836, "price": "6.48", "change": "20.00", "market_id": "33", "circulate_market_value": "5233914500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI安全", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.57}, {"name": "泛在电力物联网", "change_pct": -1.2}, {"name": "国产软件", "change_pct": 1.59}, {"name": "人工智能", "change_pct": 0.04}, {"name": "网络安全", "change_pct": 2.94}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "智能制造", "change_pct": -2.09}, {"name": "工业互联网", "change_pct": -1.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产操作系统", "change_pct": 2.56}, {"name": "腾讯概念股", "change_pct": 0.99}, {"name": "信创", "change_pct": 1.99}, {"name": "数据要素", "change_pct": 1.25}, {"name": "华为云·鲲鹏", "change_pct": 2.61}]}, {"code": "002152", "name": "广电运通", "hot_rank": 82, "hot_rank_chg": 2218, "stock_cnt": 5836, "price": "10.08", "change": "10.04", "market_id": "33", "circulate_market_value": "25019908000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华为昇腾", "xgb_concepts": [{"name": "边缘计算", "change_pct": 1.66}, {"name": "金融科技", "change_pct": 1.3}, {"name": "人工智能", "change_pct": 0.04}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "移动支付", "change_pct": 1.02}, {"name": "高铁轨交", "change_pct": -1.49}, {"name": "人脸识别", "change_pct": 0.66}, {"name": "大数据", "change_pct": 1.27}, {"name": "教育", "change_pct": 0.31}, {"name": "智慧城市", "change_pct": 0.46}, {"name": "电子发票", "change_pct": 2.29}, {"name": "虹膜识别", "change_pct": -1.22}, {"name": "机器视觉", "change_pct": -1.4}, {"name": "智慧安防", "change_pct": 0.47}, {"name": "智能制造", "change_pct": -2.09}, {"name": "数字经济", "change_pct": 1.11}, {"name": "阿里巴巴概念股", "change_pct": 0.85}, {"name": "腾讯概念股", "change_pct": 0.99}, {"name": "信创", "change_pct": 1.99}, {"name": "华为昇腾", "change_pct": 2.04}, {"name": "国资云", "change_pct": 3.27}, {"name": "虚拟数字人", "change_pct": 0.16}, {"name": "东数西算/算力", "change_pct": 0.98}, {"name": "跨境支付", "change_pct": 2.39}, {"name": "电子身份证", "change_pct": 1.58}, {"name": "数据要素", "change_pct": 1.25}, {"name": "教育信息化", "change_pct": 1.64}, {"name": "数字人民币", "change_pct": 1.8}, {"name": "智慧政务", "change_pct": 2.05}, {"name": "华为云·鲲鹏", "change_pct": 2.61}, {"name": "华为产业链", "change_pct": -0.97}, {"name": "时空大数据", "change_pct": 0.84}, {"name": "服务器", "change_pct": 1.8}, {"name": "掌纹识别", "change_pct": 1.37}, {"name": "英伟达概念", "change_pct": -0.69}, {"name": "人形机器人", "change_pct": -4.41}, {"name": "多模态", "change_pct": 0.51}, {"name": "算力一体机", "change_pct": 1.81}, {"name": "区块链", "change_pct": 1.0}]}, {"code": "300390", "name": "天华新能", "hot_rank": 83, "hot_rank_chg": -23, "stock_cnt": 5836, "price": "81.02", "change": "-15.83", "market_id": "33", "circulate_market_value": "54467119000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 84, "hot_rank_chg": -13, "stock_cnt": 5836, "price": "46.05", "change": "-11.19", "market_id": "33", "circulate_market_value": "228854690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 85, "hot_rank_chg": -74, "stock_cnt": 5836, "price": "10.69", "change": "-3.00", "market_id": "33", "circulate_market_value": "43183963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -1.06}, {"name": "一带一路", "change_pct": -1.17}, {"name": "京津冀", "change_pct": -0.45}, {"name": "光伏", "change_pct": -3.1}, {"name": "碳中和", "change_pct": -1.01}, {"name": "国产芯片", "change_pct": -0.95}, {"name": "IGBT", "change_pct": -2.13}, {"name": "颗粒硅", "change_pct": -3.54}, {"name": "异质结电池HJT", "change_pct": -2.54}, {"name": "大硅片", "change_pct": -2.02}]}, {"code": "000524", "name": "岭南控股", "hot_rank": 86, "hot_rank_chg": 224, "stock_cnt": 5836, "price": "9.85", "change": "10.06", "market_id": "33", "circulate_market_value": "6599178300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "资产重组", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.47}, {"name": "旅游", "change_pct": 1.18}, {"name": "粤港澳大湾区", "change_pct": 0.18}, {"name": "复牌股", "change_pct": -4.44}, {"name": "预制菜", "change_pct": -0.21}, {"name": "露营", "change_pct": -1.35}, {"name": "免税店概念", "change_pct": 0.6}, {"name": "邮轮游艇", "change_pct": -1.3}]}, {"code": "301251", "name": "威尔高", "hot_rank": 87, "hot_rank_chg": 38, "stock_cnt": 5836, "price": "60.92", "change": "19.99", "market_id": "33", "circulate_market_value": "4604926200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI电源PCB"}, {"code": "002497", "name": "雅化集团", "hot_rank": 88, "hot_rank_chg": -60, "stock_cnt": 5836, "price": "22.19", "change": "-9.98", "market_id": "33", "circulate_market_value": "23512249000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 89, "hot_rank_chg": 394, "stock_cnt": 5836, "price": "58.67", "change": "3.64", "market_id": "33", "circulate_market_value": "21620088000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 90, "hot_rank_chg": -32, "stock_cnt": 5836, "price": "202.00", "change": "5.92", "market_id": "17", "circulate_market_value": "85424477000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 91, "hot_rank_chg": -1, "stock_cnt": 5836, "price": "410.00", "change": "-4.46", "market_id": "17", "circulate_market_value": "166598710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 92, "hot_rank_chg": -48, "stock_cnt": 5836, "price": "16.65", "change": "-6.36", "market_id": "17", "circulate_market_value": "83067162000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 93, "hot_rank_chg": -46, "stock_cnt": 5836, "price": "216.81", "change": "-2.19", "market_id": "33", "circulate_market_value": "169219850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 94, "hot_rank_chg": -7, "stock_cnt": 5836, "price": "510.84", "change": "0.14", "market_id": "33", "circulate_market_value": "640717570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 95, "hot_rank_chg": -33, "stock_cnt": 5836, "price": "47.58", "change": "-3.00", "market_id": "17", "circulate_market_value": "69561713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 96, "hot_rank_chg": -40, "stock_cnt": 5836, "price": "825.00", "change": "-3.06", "market_id": "33", "circulate_market_value": "136181110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 97, "hot_rank_chg": -32, "stock_cnt": 5836, "price": "35.53", "change": "2.16", "market_id": "33", "circulate_market_value": "15298036000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 98, "hot_rank_chg": -59, "stock_cnt": 5836, "price": "65.61", "change": "-3.81", "market_id": "33", "circulate_market_value": "99560040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 99, "hot_rank_chg": 394, "stock_cnt": 5836, "price": "13.42", "change": "10.00", "market_id": "33", "circulate_market_value": "12463247400.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "黄金"}];
const LIMIT_UP_POOL = [{"code": "603380", "name": "易德龙", "price": 47.29, "change_pct": 10.0, "reason": "1、公司长期是浪潮辅助板卡等产品的主要供应商，另外还生产GPU板卡，通讯下游头部服务器客户受AI需求带动订单量显著增加，公司为其提供服务器主板、整机组装等服务；\n2、公司主要产品应用于包括高端家用电器，家用智能机器人，有涉及部分机器人控制板业务，如扫地机器人控制板，是科沃斯机器人的PCBA供应商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.1, "first_limit_up": 1783474249, "break_limit_up_times": 0}, {"code": "002841", "name": "视源股份", "price": 47.39, "change_pct": 10.0, "reason": "公司自主研发的高性能工业级四足机器人MAXHUB X7首次亮相2025世界机器人大会，并荣获“2025具身智能机器人创新产品”奖项；预计上半年净利润同比增264.62%~314.91%", "plates": ["机器人", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 5.53, "first_limit_up": 1783474464, "break_limit_up_times": 5}, {"code": "603296", "name": "华勤技术", "price": 78.29, "change_pct": 10.0, "reason": "公司已构建起覆盖AI服务器、超节点、通用服务器、交换机的全栈式产品组合", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.22, "first_limit_up": 1783474230, "break_limit_up_times": 1}, {"code": "000524", "name": "岭南控股", "price": 9.85, "change_pct": 10.06, "reason": "公司拟收购广州数字科技集团持有的广电城服85%股权，本次交易为广州市属国资内部整合，预计构成重大资产重组与关联交易", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 0.46, "first_limit_up": 1783473900, "break_limit_up_times": 0}, {"code": "001207", "name": "联科科技", "price": 16.28, "change_pct": 10.0, "reason": "1、轮胎助剂行业的区域龙头；专业从事二氧化硅和炭黑的研产销，产品主要用于轮胎和工业橡胶制品、电缆屏蔽料、色母料及饲料和日化行业等领域；控股股东拟向实控人协议转让18.834%股份；；\n2、公司年产10万吨高压电缆屏蔽料用纳米碳材料二期在建5万吨，海缆用高压导电炭黑第一条生产线预计2026年上半年投产", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 4.72, "first_limit_up": 1783475817, "break_limit_up_times": 1}, {"code": "603339", "name": "四方科技", "price": 15.47, "change_pct": 10.03, "reason": "公司是冷链装备供应商龙头，研制了V型干冷器用于数据中心液冷的外部换热", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 10.95, "first_limit_up": 1783479431, "break_limit_up_times": 2}, {"code": "002152", "name": "广电运通", "price": 10.08, "change_pct": 10.04, "reason": "公司围绕“四云两中心”开展自主研发，打造广州政务信创云、公安信创云、国资国企云、AI智算云等专属云服务，并推进新一代高可用云数据中心和算力中心建设", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.82, "first_limit_up": 1783487946, "break_limit_up_times": 0}, {"code": "603881", "name": "数据港", "price": 24.21, "change_pct": 10.0, "reason": "数据中心行业龙头企业，为客户提供完整的数据中心基础设施解决方案，是国内唯一一家同时服务于阿里巴巴、腾讯、百度和网易四大世界级互联网公司的数据中心运营商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.89, "first_limit_up": 1783477906, "break_limit_up_times": 0}, {"code": "000639", "name": "ST西王", "price": 1.34, "change_pct": 9.84, "reason": "公司高管拟增持300万至600万元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.53, "first_limit_up": 1783488621, "break_limit_up_times": 3}, {"code": "002674", "name": "兴业科技", "price": 29.15, "change_pct": 10.0, "reason": "公司拟收购青岛立昂磷化铟衬底及半导体电子材料业务，切入光通信与算力光模块核心材料赛道", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.15, "first_limit_up": 1783478766, "break_limit_up_times": 1}, {"code": "000977", "name": "浪潮信息", "price": 78.17, "change_pct": 10.01, "reason": "浪潮AI服务器市场份额全球第一，公司预计2026年上半年归属于上市公司股东的净利润为26.00亿元至31.00亿元，同比增长226%至288%。其中，二季度净利润预计为19.95亿元至24.95亿元，环比暴增229%至312%。公司表示，业绩变动主要系紧抓行业上行机遇，持续致力于产品技术创新和提升客户满意度，促进经营业绩大幅增长。", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.78, "first_limit_up": 1783473900, "break_limit_up_times": 0}, {"code": "603137", "name": "恒尚节能", "price": 22.91, "change_pct": 9.99, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 6, "turnover_ratio": 25.54, "first_limit_up": 1783473900, "break_limit_up_times": 1}, {"code": "000078", "name": "ST海王", "price": 1.98, "change_pct": 10.0, "reason": "全国性医药商业企业中业务网络覆盖面较广的企业之一，医药商业规模全国第八", "plates": ["ST股"], "limit_up_days": 6, "turnover_ratio": 4.46, "first_limit_up": 1783474848, "break_limit_up_times": 0}, {"code": "002542", "name": "*ST中岩", "price": 1.33, "change_pct": 9.92, "reason": "公司的强夯机与盾构机等专用设备制造、地基处理、基坑支护、 地下连续墙、盾构掘进、矩形顶管等施工工艺技术保持国内领先国际先进水平", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.75, "first_limit_up": 1783491231, "break_limit_up_times": 0}, {"code": "600187", "name": "*ST国中", "price": 1.54, "change_pct": 10.0, "reason": "公司因持有诸暨市文盛汇股权从而间接持有北京汇源21.89%股权", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.53, "first_limit_up": 1783492957, "break_limit_up_times": 1}, {"code": "600756", "name": "浪潮软件", "price": 13.23, "change_pct": 9.98, "reason": "国内领先的数字政府方案与服务提供商；公司重点参与建设地方电子政务云平台和行业电子政务云平台", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.85, "first_limit_up": 1783474200, "break_limit_up_times": 0}, {"code": "300454", "name": "深信服", "price": 106.56, "change_pct": 20.0, "reason": "1、领先的云计算产品与解决方案提供商；公司云计算及IT基础设施业务已陆续推出虚拟化产品、超融合HCI产品、云计算平台SCP、企业级分布式存储 EDS、软件定义终端桌面云aDesk、数据库管理平台DMP等多款创新产品，并向用户提供包括托管云、私有云等多样化的云数据中心解决方案；\n2、国内网络安全行业领军企业之一；公司已经在文件分析、行为检测、日志分析等十几个不同的安全技术领域应用了人工智能，自研的安全大模型（深信服安全GPT）由“大模型算法+威胁情报+安全知识”训练而成", "plates": ["云计算数据中心", "网络安全"], "limit_up_days": 1, "turnover_ratio": 9.11, "first_limit_up": 1783480842, "break_limit_up_times": 1}, {"code": "001208", "name": "华菱线缆", "price": 14.85, "change_pct": 10.0, "reason": "1、子公司三竹科技正在研发液冷电机连接器，产品将间接配套英伟达产业链；\n2、公司长期为“神舟”系列飞船、“长征”系列运载火箭等重点工程配套供应线缆产品", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 2.2, "first_limit_up": 1783473900, "break_limit_up_times": 0}, {"code": "002512", "name": "ST达华", "price": 3.4, "change_pct": 10.03, "reason": "公司一季度净利润3643.11万元，同比增长194.24%", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.85, "first_limit_up": 1783491681, "break_limit_up_times": 2}, {"code": "002467", "name": "二六三", "price": 4.69, "change_pct": 10.09, "reason": "公司是AI 词元跨境传输 + 算力出海 + 词元结算的核心基建商，凭借全牌照、全球节点与海缆资源，为词元出海提供合规通道与算力底座", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.38, "first_limit_up": 1783477452, "break_limit_up_times": 3}, {"code": "301321", "name": "翰博高新", "price": 49.81, "change_pct": 20.0, "reason": "1、参股公司合肥芯东进新材料拟收购韩国东进及其全资子公司香港东进共同投资设立的特殊目的公司70%的股权；\n2、背光显示模组一站式综合方案提供商；公司在MiniLED背光产品及直显预研项目中均有应用玻璃基板方案，主要利用其单面走线技术及玻璃的平整特性", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 9.59, "first_limit_up": 1783487571, "break_limit_up_times": 0}, {"code": "603183", "name": "建研院", "price": 4.05, "change_pct": 10.05, "reason": "近日苏州阿尔戈能算人工智能科技有限公司成立，由建研院全资持股，另外公司曾助力“苏州吴江中国电信算力高效调度示范工程”获绿色数据中心二星认证", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 11.26, "first_limit_up": 1783487210, "break_limit_up_times": 1}, {"code": "002910", "name": "庄园牧场", "price": 12.87, "change_pct": 10.0, "reason": "甘肃、青海区域乳制品龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 18.22, "first_limit_up": 1783479876, "break_limit_up_times": 0}, {"code": "002677", "name": "浙江美大", "price": 6.57, "change_pct": 10.05, "reason": "国内集成灶龙头，市场占有率第一，专注于以集成灶产品为主的现代新型厨房电器的研产销", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.85, "first_limit_up": 1783487391, "break_limit_up_times": 1}, {"code": "603496", "name": "恒为科技", "price": 24.54, "change_pct": 10.0, "reason": "公司提供智算可视化运维、AI一体机、光交换机、集群组网调优等算力底座产品与服务，形成AI算力底座+AI应用双轮驱动战略", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.21, "first_limit_up": 1783474643, "break_limit_up_times": 0}, {"code": "000948", "name": "南天信息", "price": 12.72, "change_pct": 10.03, "reason": "1、国内领先的金融科技数字化综合解决方案和服务提供商之一；公司以“金融科技”和“数字化服务”为业务主线，持续围绕云计算、大数据、人工智能等新技术开展技术孵化和应用孵化，发力自主可控技术体系/生态、云计算数据中心建设、分布式云平台/云核心建设、电子渠道应用平台、区块链技术与应用等领域；\n2、公司有相关跨境支付的业务筹划，也开发了部分银行客户与cips的接口", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.72, "first_limit_up": 1783478544, "break_limit_up_times": 0}, {"code": "603928", "name": "兴业股份", "price": 16.36, "change_pct": 10.02, "reason": "公司已研发成功半导体光刻胶用酚醛树脂、特种半导体封装用酚醛树脂等一批特种有机合成功能新材料", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 14.39, "first_limit_up": 1783475078, "break_limit_up_times": 1}, {"code": "002396", "name": "星网锐捷", "price": 29.1, "change_pct": 10.02, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["交换机"], "limit_up_days": 1, "turnover_ratio": 7.3, "first_limit_up": 1783474497, "break_limit_up_times": 0}, {"code": "002350", "name": "北京科锐", "price": 15.07, "change_pct": 10.0, "reason": "1、目前公司数据中心业务领域主要划分为“设备制造”及“运维服务”两大版块，涉及产品基本涵盖中压、低压配电领域各类设备；\n2、国内配电及控制设备制造品牌企业之一；公司配电设备电力电子系列产品包括超级电容等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.23, "first_limit_up": 1783477215, "break_limit_up_times": 0}, {"code": "600602", "name": "云赛智联", "price": 16.38, "change_pct": 10.01, "reason": "公司与阶跃星辰共同投资设立上海智能算力公司，其中阶跃星辰持股10%，云赛智联直接持股11%", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.71, "first_limit_up": 1783477915, "break_limit_up_times": 1}, {"code": "000759", "name": "中百集团", "price": 6.48, "change_pct": 10.02, "reason": "以商业零售为主业的大型连锁企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.76, "first_limit_up": 1783475430, "break_limit_up_times": 0}, {"code": "002642", "name": "荣联科技", "price": 6.7, "change_pct": 10.02, "reason": "企业云计算和大数据专业服务提供商；公司与阿里云、 百度及新华三等厂商在大模型一体机方面开展深度协作， 通过整合阿里云底层算力与自研平台， 形成 “一体机+行业云+自研平台”模式", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.59, "first_limit_up": 1783479723, "break_limit_up_times": 0}, {"code": "002490", "name": "山东墨龙", "price": 6.97, "change_pct": 9.94, "reason": "公司产品主要有石油钻采机械装备、石油天然气输送装备、油气开采装备等，中海油是公司油田类产品国内销售市场中主要客户之一", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 9.55, "first_limit_up": 1783475535, "break_limit_up_times": 0}, {"code": "600094", "name": "大名城", "price": 4.22, "change_pct": 9.9, "reason": "全资子公司深圳名城金控持有北京佰才邦技术股份有限公司20.4522%股份，后者布局6G及卫星互联网，产品涵盖低轨卫星通信等", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 0.83, "first_limit_up": 1783474255, "break_limit_up_times": 0}, {"code": "000506", "name": "招金黄金", "price": 13.42, "change_pct": 10.0, "reason": "公司主要业务包括以黄金为主要品种的矿业开采", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 5.43, "first_limit_up": 1783476027, "break_limit_up_times": 0}, {"code": "600749", "name": "西藏旅游", "price": 15.33, "change_pct": 9.97, "reason": "公司雅鲁藏布大峡谷景区内运营有观光热气球等体验项目", "plates": ["旅游"], "limit_up_days": 1, "turnover_ratio": 7.56, "first_limit_up": 1783474215, "break_limit_up_times": 4}, {"code": "001365", "name": "天海电子", "price": 47.81, "change_pct": 10.01, "reason": "公司与上海它石智航技术有限公司签署长期战略合作框架协议，围绕人形机器人、具身大模型、汽车线束智能制造多领域开展深度协同", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 36.69, "first_limit_up": 1783487244, "break_limit_up_times": 0}, {"code": "002951", "name": "金时科技", "price": 16.32, "change_pct": 9.97, "reason": "1、公司主营储能系统设备、混合储能系列、超级电容炭及储能消防装置，开发新型号产品(如3000F低内阻超级电容器)保持技术领先；\n2、公司通过智芯一号股权基金（持股99%）间接投资了苏州易缆微半导体技术有限公司；易缆微半导体是一家光纤通信产品研发生产商，致力于光纤通信系统、光网络系统、光电传感系统、物联网系统技术研究和试验发展及进出口业务", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 6.68, "first_limit_up": 1783489743, "break_limit_up_times": 0}, {"code": "300369", "name": "绿盟科技", "price": 6.48, "change_pct": 20.0, "reason": "1、公司积极拓展云安全市场，围绕运营商公有云的安全原子能力打磨云安全产品技术硬实力；\n2、公司迭代“风云卫”AI安全能力平台并推出AI安全一体机“清风卫”，构建“评估-防护-响应”全栈AI安全体系，清风卫产品获公安三所“大模型安全防护围栏”认证", "plates": ["网络安全"], "limit_up_days": 1, "turnover_ratio": 11.02, "first_limit_up": 1783487532, "break_limit_up_times": 2}, {"code": "603661", "name": "恒林股份", "price": 42.67, "change_pct": 10.0, "reason": "跨界布局培育钻石的家居龙头，通过子公司河南闪耀钻石开展业务，产品涵盖培育钻石饰品、大尺寸金刚石单晶片及金刚石单晶刀具", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.92, "first_limit_up": 1783480290, "break_limit_up_times": 1}, {"code": "000838", "name": "*ST发展", "price": 1.88, "change_pct": 9.94, "reason": "重庆地区优质地产商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.91, "first_limit_up": 1783490967, "break_limit_up_times": 1}, {"code": "300017", "name": "网宿科技", "price": 14.66, "change_pct": 19.97, "reason": "1、子公司绿色云图自主研发的液冷技术，能够为企业提供更节能、高效的液冷数据中心建设及改造方案；\n2、公司为国内CDN标准牵头制定方，国内边缘计算龙头，正开发面向边缘计算的支撑平台", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 12.18, "first_limit_up": 1783476378, "break_limit_up_times": 1}, {"code": "301251", "name": "威尔高", "price": 60.92, "change_pct": 19.99, "reason": "公司主营印制电路板，以“AI数据中心电源、新一代通讯、新能源、汽车电子”为产品导向，将DC/DC高端电源PCB作为优先发展的核心方向，已获头部电源厂商批量级订单", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 29.61, "first_limit_up": 1783474233, "break_limit_up_times": 15}, {"code": "600350", "name": "山东高速", "price": 13.49, "change_pct": 10.03, "reason": "中证红利指数成份股，现金股息率高、分红较为稳定", "plates": ["高股息"], "limit_up_days": 1, "turnover_ratio": 0.25, "first_limit_up": 1783493389, "break_limit_up_times": 1}, {"code": "600288", "name": "大恒科技", "price": 17.11, "change_pct": 10.03, "reason": "1、公司机器视觉产品包括工业数字摄像机、图像采集卡、图像处理软件和智能摄像机等机器视觉系统中核心零部件，与工业机器人企业有该类产品方面的合作；\n2、控股公司中科大洋的“大洋千机大模型平台”开发了多种垂直场景智能化应用，例如智能内容管理、视频理解摘要、智能写稿创作、文生图/视频、文字场记快剪、文稿一键成片、虚拟数智人播报等", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 27.93, "first_limit_up": 1783480580, "break_limit_up_times": 2}, {"code": "002546", "name": "新联电子", "price": 7.34, "change_pct": 10.04, "reason": "公司专注用电信息采集系统及设备研发，为国家电网、南方电网提供智能电表、用电信息采集终端等产品；预计2026年上半年净利同比增长134.57%-147.87%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.63, "first_limit_up": 1783474248, "break_limit_up_times": 3}, {"code": "301202", "name": "朗威股份", "price": 39.19, "change_pct": 19.99, "reason": "数据中心机房及综合布线设备提供商，客户包括维谛技术，陆续推出服务器机柜、冷热通道、微模块、T-block机架等数据中心机柜解决方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.6, "first_limit_up": 1783474704, "break_limit_up_times": 0}, {"code": "601010", "name": "ST文峰", "price": 1.64, "change_pct": 10.07, "reason": "公司主营超市零售，拟斥资8000万元至1.2亿元回购，用于员工持股计划或股权激励", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.9, "first_limit_up": 1783478419, "break_limit_up_times": 5}, {"code": "001229", "name": "魅视科技", "price": 42.7, "change_pct": 9.99, "reason": "公司产品已应用于航空、航天等相关领域，为中国载人航天工程和探月工程的指挥控制中心提供了“光纤KVMS解决方案”，助力中国首次火星探测“天问一号”成功发射", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 1.53, "first_limit_up": 1783473900, "break_limit_up_times": 0}, {"code": "600759", "name": "ST洲际", "price": 2.41, "change_pct": 10.05, "reason": "海南本地股，主营石油的勘探、开发和销售，油气行业的技术服务和物业租赁业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.34, "first_limit_up": 1783488238, "break_limit_up_times": 0}, {"code": "600129", "name": "太极集团", "price": 14.96, "change_pct": 10.0, "reason": "公司核心产品藿香正气口服液是目前中国市场占有率最高的中成药产品，是基药目录中唯一的低价药，主要用于感冒，品牌太极为OTC品牌药企第一名", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.09, "first_limit_up": 1783474696, "break_limit_up_times": 3}, {"code": "603285", "name": "键邦股份", "price": 48.42, "change_pct": 10.0, "reason": "公司赛克产品作为高端电磁线漆关键耐热改性单体，全球市场占有率超75%，终端应用覆盖AI算力配套等新兴产业，目前赛克下游绝缘漆占比已升至 60% 以上，深度配套变压器、新能源汽车电机、AI算力中心等高增量赛道", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 14.34, "first_limit_up": 1783491454, "break_limit_up_times": 0}, {"code": "002757", "name": "南兴股份", "price": 18.41, "change_pct": 9.98, "reason": "公司开发了小鹭AIGC智能助手；全资子公司唯一网络是国内领先的数字经济基础设施服务提供商，主要经营范围包括IDC、云计算（含公有云、混合云、私有云及云增值等服务）、云联网、数字化解决方案等服务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.5, "first_limit_up": 1783477674, "break_limit_up_times": 0}, {"code": "603313", "name": "梦百合", "price": 7.06, "change_pct": 9.97, "reason": "记忆绵家居制品供应商；公司主要从事致力于提升人类深度睡眠的家居产品—记忆绵床垫、记忆绵枕头等家居产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.8, "first_limit_up": 1783491061, "break_limit_up_times": 0}, {"code": "603789", "name": "ST星农", "price": 7.03, "change_pct": 10.02, "reason": "公司控股股东拟变更为玖元亨通", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.99, "first_limit_up": 1783489514, "break_limit_up_times": 1}];
const RISK_STOCKS = {"688121": "[立案调查] 卓然股份：关于立案调查进展暨风险提示公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "000078": "ST/风险警示股"};