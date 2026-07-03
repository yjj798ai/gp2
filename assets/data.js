const UPDATE_TIME = "2026-07-03 00:02";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.45,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续70天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "2026中报预增",
    "rise": 3.74,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "人形机器人",
    "rise": -0.64,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续404天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "存储芯片",
    "rise": -5.67,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续193天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "机器人概念",
    "rise": -0.93,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -5.1,
    "rate": 0,
    "tag": "",
    "hotTag": "连续240天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "氟化工概念",
    "rise": 0.66,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885551"
  },
  {
    "name": "商业航天",
    "rise": -2.31,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续169天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "培育钻石",
    "rise": 2.1,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "玻璃基板",
    "rise": -7.47,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886111"
  },
  {
    "name": "黄金概念",
    "rise": 0.88,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "ST板块",
    "rise": 2.23,
    "rate": 0,
    "tag": "63家涨停",
    "hotTag": "连续78天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "PCB概念",
    "rise": -3.83,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续63天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "算力租赁",
    "rise": -2.04,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续104天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "芯片概念",
    "rise": -3.33,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续64天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "光刻胶",
    "rise": -2.35,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "猪肉",
    "rise": 0.58,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "AI应用",
    "rise": -1.12,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "稀土永磁",
    "rise": 1.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "海南自贸区",
    "rise": 2.72,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885894"
  }
];
const THS_EVENTS = [
  {
    "title": "巨头抢购电子级氢氟酸 部分供货商年内已涨价三成",
    "desc": "",
    "heat": 325362,
    "direction": "无水氢氟酸",
    "themes": [
      "无水氢氟酸"
    ],
    "stocks": [
      {
        "name": "金石资源",
        "code": "603505",
        "chg": 10.013532
      }
    ]
  },
  {
    "title": "特斯拉量产临近，机器人板块还能回归市场主线吗？",
    "desc": "",
    "heat": 160861,
    "direction": "特斯拉机器人",
    "themes": [
      "特斯拉概念",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "兆丰股份",
        "code": "300695",
        "chg": 19.996025
      }
    ]
  },
  {
    "title": "Meta Platforms(META.US)筹划进军云计算市场",
    "desc": "",
    "heat": 99386,
    "direction": "算力租赁",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "海达尔",
        "code": "920699",
        "chg": 15.355644
      }
    ]
  },
  {
    "title": "密集发射催化 长征十号乙首飞在即",
    "desc": "",
    "heat": 46511,
    "direction": "商业航天",
    "themes": [
      "火箭发射",
      "卫星测控",
      "卫星通信",
      "卫星遥感",
      "火箭回收"
    ],
    "stocks": [
      {
        "name": "金利华电",
        "code": "300069",
        "chg": 18.02099
      }
    ]
  },
  {
    "title": "日月光宣布再度调涨封装报价 最高涨幅超过20%",
    "desc": "",
    "heat": 27056,
    "direction": "先进封装",
    "themes": [
      "先进封装"
    ],
    "stocks": [
      {
        "name": "气派科技",
        "code": "688216",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "机构称玻璃基板从“概念”走向“量产共识” 新型能源规划开启3亿千瓦储能新周期",
    "desc": "",
    "heat": 14976,
    "direction": "玻璃基板",
    "themes": [
      "玻璃基板"
    ],
    "stocks": [
      {
        "name": "京东方Ａ",
        "code": "000725",
        "chg": 3.762828
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄金",
    "change": "+5.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+4.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+3.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芬太尼概念",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "海南概念",
    "change": "+2.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "印染",
    "change": "+2.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "+2.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+2.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+2.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "制冷剂",
    "change": "+2.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "异丙醇",
    "change": "+2.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "粘胶短纤",
    "change": "+2.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "ST股",
    "change": "+2.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "山东自贸区",
    "change": "+2.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "涤纶",
    "change": "+1.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "耐火材料",
    "change": "+1.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "挖掘机",
    "change": "+1.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "海南自由贸易港",
    "change": "+1.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+1.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+1.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 1,
    "hot_rank_chg": 2,
    "stock_cnt": 5798,
    "price": "10.34",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "16809674000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "具身智能数据集",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.17
      },
      {
        "name": "电竞",
        "change_pct": -0.05
      },
      {
        "name": "手游",
        "change_pct": 0.16
      },
      {
        "name": "强势人气股",
        "change_pct": -0.35
      },
      {
        "name": "人工智能",
        "change_pct": -1.53
      },
      {
        "name": "游戏",
        "change_pct": -0.21
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.41
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.25
      },
      {
        "name": "快手概念股",
        "change_pct": -0.04
      },
      {
        "name": "元宇宙",
        "change_pct": -0.79
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.27
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.62
      },
      {
        "name": "web3.0",
        "change_pct": -0.24
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.34
      },
      {
        "name": "数据要素",
        "change_pct": -1.29
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.23
      },
      {
        "name": "AI营销",
        "change_pct": 1.79
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.56
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.1
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.36
      },
      {
        "name": "人形机器人",
        "change_pct": 0.02
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.51
      },
      {
        "name": "多模态",
        "change_pct": -0.37
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.4
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.16
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.64
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 2,
    "hot_rank_chg": -1,
    "stock_cnt": 5798,
    "price": "9.10",
    "change": "3.76",
    "market_id": "33",
    "circulate_market_value": "321840920000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.76
      },
      {
        "name": "手机产业链",
        "change_pct": -3.09
      },
      {
        "name": "超高清视频",
        "change_pct": -1.85
      },
      {
        "name": "苹果产业链",
        "change_pct": -3.75
      },
      {
        "name": "半导体",
        "change_pct": -5.13
      },
      {
        "name": "人工智能",
        "change_pct": -1.53
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.11
      },
      {
        "name": "VR&AR",
        "change_pct": -2.96
      },
      {
        "name": "OLED",
        "change_pct": -3.8
      },
      {
        "name": "京津冀",
        "change_pct": -0.92
      },
      {
        "name": "物联网",
        "change_pct": -1.84
      },
      {
        "name": "指纹识别",
        "change_pct": -3.49
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.4
      },
      {
        "name": "白马股",
        "change_pct": -0.78
      },
      {
        "name": "智能制造",
        "change_pct": -0.92
      },
      {
        "name": "小米概念股",
        "change_pct": -2.56
      },
      {
        "name": "国产芯片",
        "change_pct": -4.4
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.01
      },
      {
        "name": "全息概念",
        "change_pct": -1.04
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.79
      },
      {
        "name": "MicroLED",
        "change_pct": -4.41
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -3.66
      },
      {
        "name": "智能手表",
        "change_pct": -2.96
      },
      {
        "name": "MiniLED",
        "change_pct": -4.15
      },
      {
        "name": "传感器",
        "change_pct": -2.0
      },
      {
        "name": "大硅片",
        "change_pct": -6.79
      },
      {
        "name": "AI PC",
        "change_pct": -3.07
      },
      {
        "name": "华为产业链",
        "change_pct": -2.25
      },
      {
        "name": "回购",
        "change_pct": -0.56
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.1
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -5.98
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 8,
    "hot_rank_chg": -1,
    "stock_cnt": 5798,
    "price": "6.04",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "7832283200.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "6",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.12
      },
      {
        "name": "创新药",
        "change_pct": 0.45
      },
      {
        "name": "央企改革",
        "change_pct": -0.72
      },
      {
        "name": "医疗器械",
        "change_pct": -0.22
      },
      {
        "name": "强势人气股",
        "change_pct": -0.35
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.11
      },
      {
        "name": "保健品",
        "change_pct": 0.84
      },
      {
        "name": "民营医院",
        "change_pct": 0.51
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.23
      },
      {
        "name": "医药",
        "change_pct": 0.67
      },
      {
        "name": "化学原料药",
        "change_pct": 0.99
      },
      {
        "name": "海南概念",
        "change_pct": 2.99
      },
      {
        "name": "脑科学",
        "change_pct": -0.54
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.91
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 2.02
      },
      {
        "name": "食品",
        "change_pct": 0.64
      },
      {
        "name": "国企改革",
        "change_pct": -0.48
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.97
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.1
      },
      {
        "name": "自贸区",
        "change_pct": 0.72
      },
      {
        "name": "合成生物",
        "change_pct": 0.6
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 15,
    "hot_rank_chg": 0,
    "stock_cnt": 5798,
    "price": "5.92",
    "change": "-3.27",
    "market_id": "33",
    "circulate_market_value": "113261643000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.76
      },
      {
        "name": "手机产业链",
        "change_pct": -3.09
      },
      {
        "name": "超高清视频",
        "change_pct": -1.85
      },
      {
        "name": "半导体",
        "change_pct": -5.13
      },
      {
        "name": "OLED",
        "change_pct": -3.8
      },
      {
        "name": "光伏",
        "change_pct": -2.28
      },
      {
        "name": "黑色家电",
        "change_pct": -0.89
      },
      {
        "name": "家电",
        "change_pct": -0.34
      },
      {
        "name": "智能制造",
        "change_pct": -0.92
      },
      {
        "name": "工业互联网",
        "change_pct": -1.26
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.56
      },
      {
        "name": "国产芯片",
        "change_pct": -4.4
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.25
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.01
      },
      {
        "name": "MicroLED",
        "change_pct": -4.41
      },
      {
        "name": "MiniLED",
        "change_pct": -4.15
      },
      {
        "name": "华为产业链",
        "change_pct": -2.25
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -5.98
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 16,
    "hot_rank_chg": 0,
    "stock_cnt": 5798,
    "price": "7.70",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "15733689000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "H股招股",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -1.24
      },
      {
        "name": "军民融合",
        "change_pct": -1.33
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.82
      },
      {
        "name": "烧碱",
        "change_pct": 0.8
      },
      {
        "name": "军工",
        "change_pct": -1.44
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.54
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.92
      },
      {
        "name": "氟化工",
        "change_pct": 0.99
      },
      {
        "name": "双氧水",
        "change_pct": 0.92
      },
      {
        "name": "液氯",
        "change_pct": 2.21
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 23,
    "hot_rank_chg": 2,
    "stock_cnt": 5798,
    "price": "7.33",
    "change": "-5.91",
    "market_id": "17",
    "circulate_market_value": "90863333000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.72
      },
      {
        "name": "核电",
        "change_pct": -1.2
      },
      {
        "name": "强势人气股",
        "change_pct": -0.35
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.57
      },
      {
        "name": "水电",
        "change_pct": -0.5
      },
      {
        "name": "火电",
        "change_pct": -1.79
      },
      {
        "name": "光伏",
        "change_pct": -2.28
      },
      {
        "name": "风电",
        "change_pct": -1.19
      },
      {
        "name": "国企改革",
        "change_pct": -0.48
      },
      {
        "name": "算电协同",
        "change_pct": -2.19
      }
    ]
  },
  {
    "code": "002458",
    "name": "益生股份",
    "hot_rank": 26,
    "hot_rank_chg": -3,
    "stock_cnt": 5798,
    "price": "9.41",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "9093688200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "养鸡",
        "change_pct": 1.76
      },
      {
        "name": "养猪",
        "change_pct": 0.36
      },
      {
        "name": "大农业",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "002292",
    "name": "奥飞娱乐",
    "hot_rank": 41,
    "hot_rank_chg": 44,
    "stock_cnt": 5798,
    "price": "7.03",
    "change": "5.56",
    "market_id": "33",
    "circulate_market_value": "7155720900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -1.85
      },
      {
        "name": "手游",
        "change_pct": 0.16
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.76
      },
      {
        "name": "人工智能",
        "change_pct": -1.53
      },
      {
        "name": "VR&AR",
        "change_pct": -2.96
      },
      {
        "name": "游戏",
        "change_pct": -0.21
      },
      {
        "name": "影视",
        "change_pct": 0.97
      },
      {
        "name": "动漫",
        "change_pct": 1.1
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.25
      },
      {
        "name": "全息概念",
        "change_pct": -1.04
      },
      {
        "name": "NFT",
        "change_pct": 0.37
      },
      {
        "name": "元宇宙",
        "change_pct": -0.79
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.27
      },
      {
        "name": "玩具",
        "change_pct": 0.35
      },
      {
        "name": "盲盒",
        "change_pct": 0.57
      },
      {
        "name": "回购",
        "change_pct": -0.56
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 47,
    "hot_rank_chg": 3,
    "stock_cnt": 5798,
    "price": "11.00",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "5152691800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "PCB用化学试剂",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -0.14
      },
      {
        "name": "医疗器械",
        "change_pct": -0.22
      },
      {
        "name": "基因测序",
        "change_pct": -0.53
      },
      {
        "name": "PCB板",
        "change_pct": -4.84
      },
      {
        "name": "医药",
        "change_pct": 0.67
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.54
      },
      {
        "name": "化学原料药",
        "change_pct": 0.99
      },
      {
        "name": "食品安全",
        "change_pct": -1.64
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.72
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -3.69
      },
      {
        "name": "异丙醇",
        "change_pct": 2.46
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.1
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -1.59
      }
    ]
  },
  {
    "code": "000601",
    "name": "韶能股份",
    "hot_rank": 58,
    "hot_rank_chg": 3,
    "stock_cnt": 5798,
    "price": "7.08",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "7431299100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "业绩预增",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 0.72
      },
      {
        "name": "水电",
        "change_pct": -0.5
      },
      {
        "name": "重卡",
        "change_pct": 0.81
      },
      {
        "name": "充电桩",
        "change_pct": -1.17
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.54
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.33
      },
      {
        "name": "减速器",
        "change_pct": 0.81
      },
      {
        "name": "算电协同",
        "change_pct": -2.19
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 65,
    "hot_rank_chg": -8,
    "stock_cnt": 5798,
    "price": "7.76",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "14861117000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "海峡两岸",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.54
      },
      {
        "name": "林业",
        "change_pct": 1.51
      },
      {
        "name": "民营医院",
        "change_pct": 0.51
      },
      {
        "name": "碳中和",
        "change_pct": -1.29
      },
      {
        "name": "自贸区",
        "change_pct": 0.72
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 66,
    "hot_rank_chg": 3,
    "stock_cnt": 5798,
    "price": "11.03",
    "change": "-7.31",
    "market_id": "33",
    "circulate_market_value": "44557447000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -5.13
      },
      {
        "name": "一带一路",
        "change_pct": -0.4
      },
      {
        "name": "京津冀",
        "change_pct": -0.92
      },
      {
        "name": "光伏",
        "change_pct": -2.28
      },
      {
        "name": "碳中和",
        "change_pct": -1.29
      },
      {
        "name": "国产芯片",
        "change_pct": -4.4
      },
      {
        "name": "IGBT",
        "change_pct": -4.68
      },
      {
        "name": "颗粒硅",
        "change_pct": -4.06
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -3.08
      },
      {
        "name": "大硅片",
        "change_pct": -6.79
      }
    ]
  },
  {
    "code": "000536",
    "name": "华映科技",
    "hot_rank": 84,
    "hot_rank_chg": -9,
    "stock_cnt": 5798,
    "price": "4.06",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "11218115000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "出售半导体资产",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -3.09
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.54
      },
      {
        "name": "OLED",
        "change_pct": -3.8
      },
      {
        "name": "3D玻璃",
        "change_pct": -2.81
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.01
      },
      {
        "name": "国企改革",
        "change_pct": -0.48
      },
      {
        "name": "华为产业链",
        "change_pct": -2.25
      },
      {
        "name": "自贸区",
        "change_pct": 0.72
      }
    ]
  },
  {
    "code": "002693",
    "name": "双成药业",
    "hot_rank": 97,
    "hot_rank_chg": 4,
    "stock_cnt": 5798,
    "price": "10.67",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "4385173600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "许可协议",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 0.14
      },
      {
        "name": "资产重组",
        "change_pct": -0.77
      },
      {
        "name": "半导体",
        "change_pct": -5.13
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.29
      },
      {
        "name": "医药",
        "change_pct": 0.67
      },
      {
        "name": "化学原料药",
        "change_pct": 0.99
      },
      {
        "name": "海南概念",
        "change_pct": 2.99
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.79
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002354", "name": "天娱数科", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "10.34", "change": "10.00", "market_id": "33", "circulate_market_value": "16809674000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能数据集", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.17}, {"name": "电竞", "change_pct": -0.05}, {"name": "手游", "change_pct": 0.16}, {"name": "强势人气股", "change_pct": -0.35}, {"name": "人工智能", "change_pct": -1.53}, {"name": "游戏", "change_pct": -0.21}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.41}, {"name": "腾讯概念股", "change_pct": -1.25}, {"name": "快手概念股", "change_pct": -0.04}, {"name": "元宇宙", "change_pct": -0.79}, {"name": "虚拟数字人", "change_pct": -0.27}, {"name": "东数西算/算力", "change_pct": -2.62}, {"name": "web3.0", "change_pct": -0.24}, {"name": "AIGC概念", "change_pct": -0.34}, {"name": "数据要素", "change_pct": -1.29}, {"name": "字节跳动概念股", "change_pct": -0.23}, {"name": "AI营销", "change_pct": 1.79}, {"name": "ChatGPT", "change_pct": -0.56}, {"name": "智能眼镜/MR头显", "change_pct": -3.1}, {"name": "人工智能大模型", "change_pct": -1.36}, {"name": "人形机器人", "change_pct": 0.02}, {"name": "短剧/互动影游", "change_pct": 0.51}, {"name": "多模态", "change_pct": -0.37}, {"name": "Sora/AI视频", "change_pct": 0.4}, {"name": "IP经济/谷子经济", "change_pct": 0.16}, {"name": "小红书概念股", "change_pct": 0.64}]}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "9.10", "change": "3.76", "market_id": "33", "circulate_market_value": "321840920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.76}, {"name": "手机产业链", "change_pct": -3.09}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "苹果产业链", "change_pct": -3.75}, {"name": "半导体", "change_pct": -5.13}, {"name": "人工智能", "change_pct": -1.53}, {"name": "互联网医疗", "change_pct": -0.11}, {"name": "VR&AR", "change_pct": -2.96}, {"name": "OLED", "change_pct": -3.8}, {"name": "京津冀", "change_pct": -0.92}, {"name": "物联网", "change_pct": -1.84}, {"name": "指纹识别", "change_pct": -3.49}, {"name": "汽车零部件", "change_pct": 0.4}, {"name": "白马股", "change_pct": -0.78}, {"name": "智能制造", "change_pct": -0.92}, {"name": "小米概念股", "change_pct": -2.56}, {"name": "国产芯片", "change_pct": -4.4}, {"name": "液晶面板/LCD", "change_pct": -3.01}, {"name": "全息概念", "change_pct": -1.04}, {"name": "理想汽车概念股", "change_pct": 0.79}, {"name": "MicroLED", "change_pct": -4.41}, {"name": "钙钛矿电池", "change_pct": -3.66}, {"name": "智能手表", "change_pct": -2.96}, {"name": "MiniLED", "change_pct": -4.15}, {"name": "传感器", "change_pct": -2.0}, {"name": "大硅片", "change_pct": -6.79}, {"name": "AI PC", "change_pct": -3.07}, {"name": "华为产业链", "change_pct": -2.25}, {"name": "回购", "change_pct": -0.56}, {"name": "智能眼镜/MR头显", "change_pct": -3.1}, {"name": "玻璃基板封装", "change_pct": -5.98}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "23.95", "change": "136.89", "market_id": "33", "circulate_market_value": "25444571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "54.82", "change": "-0.78", "market_id": "33", "circulate_market_value": "59138026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "28.89", "change": "-10.00", "market_id": "17", "circulate_market_value": "60424654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605020", "name": "永和股份", "hot_rank": 6, "hot_rank_chg": 7, "stock_cnt": 5798, "price": "48.39", "change": "10.00", "market_id": "17", "circulate_market_value": "24336492000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "制冷剂涨价"}, {"code": "600584", "name": "长电科技", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "95.98", "change": "-10.00", "market_id": "17", "circulate_market_value": "171748010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "6.04", "change": "10.02", "market_id": "33", "circulate_market_value": "7832283200.00", "change_type": "1", "change_section": "8", "change_days": "6", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 1.12}, {"name": "创新药", "change_pct": 0.45}, {"name": "央企改革", "change_pct": -0.72}, {"name": "医疗器械", "change_pct": -0.22}, {"name": "强势人气股", "change_pct": -0.35}, {"name": "互联网医疗", "change_pct": -0.11}, {"name": "保健品", "change_pct": 0.84}, {"name": "民营医院", "change_pct": 0.51}, {"name": "CAR-T疗法", "change_pct": -0.23}, {"name": "医药", "change_pct": 0.67}, {"name": "化学原料药", "change_pct": 0.99}, {"name": "海南概念", "change_pct": 2.99}, {"name": "脑科学", "change_pct": -0.54}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.91}, {"name": "海南自由贸易港", "change_pct": 2.02}, {"name": "食品", "change_pct": 0.64}, {"name": "国企改革", "change_pct": -0.48}, {"name": "医疗信息化", "change_pct": -0.97}, {"name": "新冠病毒防治", "change_pct": -0.1}, {"name": "自贸区", "change_pct": 0.72}, {"name": "合成生物", "change_pct": 0.6}]}, {"code": "002326", "name": "永太科技", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "28.00", "change": "7.61", "market_id": "33", "circulate_market_value": "22628453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 10, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "56.03", "change": "-10.01", "market_id": "33", "circulate_market_value": "88199937000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 11, "hot_rank_chg": -3, "stock_cnt": 5798, "price": "18.03", "change": "10.01", "market_id": "17", "circulate_market_value": "23010891000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "培育钻石"}, {"code": "603986", "name": "兆易创新", "hot_rank": 12, "hot_rank_chg": -3, "stock_cnt": 5798, "price": "694.81", "change": "-10.00", "market_id": "17", "circulate_market_value": "464474880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 13, "hot_rank_chg": -3, "stock_cnt": 5798, "price": "40.70", "change": "-0.88", "market_id": "33", "circulate_market_value": "31843868000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603505", "name": "金石资源", "hot_rank": 14, "hot_rank_chg": 19, "stock_cnt": 5798, "price": "24.39", "change": "10.01", "market_id": "17", "circulate_market_value": "20528302000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "制冷剂涨价"}, {"code": "000100", "name": "TCL科技", "hot_rank": 15, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "5.92", "change": "-3.27", "market_id": "33", "circulate_market_value": "113261643000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.76}, {"name": "手机产业链", "change_pct": -3.09}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "半导体", "change_pct": -5.13}, {"name": "OLED", "change_pct": -3.8}, {"name": "光伏", "change_pct": -2.28}, {"name": "黑色家电", "change_pct": -0.89}, {"name": "家电", "change_pct": -0.34}, {"name": "智能制造", "change_pct": -0.92}, {"name": "工业互联网", "change_pct": -1.26}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.56}, {"name": "国产芯片", "change_pct": -4.4}, {"name": "腾讯概念股", "change_pct": -1.25}, {"name": "液晶面板/LCD", "change_pct": -3.01}, {"name": "MicroLED", "change_pct": -4.41}, {"name": "MiniLED", "change_pct": -4.15}, {"name": "华为产业链", "change_pct": -2.25}, {"name": "玻璃基板封装", "change_pct": -5.98}]}, {"code": "601678", "name": "滨化股份", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "7.70", "change": "10.00", "market_id": "17", "circulate_market_value": "15733689000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "H股招股", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.24}, {"name": "军民融合", "change_pct": -1.33}, {"name": "氢能源/燃料电池", "change_pct": -0.82}, {"name": "烧碱", "change_pct": 0.8}, {"name": "军工", "change_pct": -1.44}, {"name": "新能源汽车", "change_pct": -0.54}, {"name": "环氧丙烷", "change_pct": 0.92}, {"name": "氟化工", "change_pct": 0.99}, {"name": "双氧水", "change_pct": 0.92}, {"name": "液氯", "change_pct": 2.21}]}, {"code": "600522", "name": "中天科技", "hot_rank": 17, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "51.58", "change": "-6.93", "market_id": "17", "circulate_market_value": "176039940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 18, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "57.81", "change": "-3.55", "market_id": "17", "circulate_market_value": "48939248000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 19, "hot_rank_chg": -5, "stock_cnt": 5798, "price": "48.24", "change": "10.01", "market_id": "17", "circulate_market_value": "44893587000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "拟收购先导微电子"}, {"code": "600487", "name": "亨通光电", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "93.84", "change": "-7.94", "market_id": "17", "circulate_market_value": "229455800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002559", "name": "亚威股份", "hot_rank": 21, "hot_rank_chg": -3, "stock_cnt": 5798, "price": "15.38", "change": "10.01", "market_id": "33", "circulate_market_value": "7751597000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "参股半导体检测公司"}, {"code": "001399", "name": "惠科股份", "hot_rank": 22, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "46.82", "change": "1.17", "market_id": "33", "circulate_market_value": "20159134000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 23, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "7.33", "change": "-5.91", "market_id": "17", "circulate_market_value": "90863333000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.72}, {"name": "核电", "change_pct": -1.2}, {"name": "强势人气股", "change_pct": -0.35}, {"name": "电力体制改革", "change_pct": -1.57}, {"name": "水电", "change_pct": -0.5}, {"name": "火电", "change_pct": -1.79}, {"name": "光伏", "change_pct": -2.28}, {"name": "风电", "change_pct": -1.19}, {"name": "国企改革", "change_pct": -0.48}, {"name": "算电协同", "change_pct": -2.19}]}, {"code": "002167", "name": "东方锆业", "hot_rank": 24, "hot_rank_chg": -2, "stock_cnt": 5798, "price": "26.05", "change": "7.29", "market_id": "33", "circulate_market_value": "19764473000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 25, "hot_rank_chg": 5, "stock_cnt": 5798, "price": "16.69", "change": "-5.49", "market_id": "17", "circulate_market_value": "59878208000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002458", "name": "益生股份", "hot_rank": 26, "hot_rank_chg": -3, "stock_cnt": 5798, "price": "9.41", "change": "10.06", "market_id": "33", "circulate_market_value": "9093688200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增", "xgb_concepts": [{"name": "养鸡", "change_pct": 1.76}, {"name": "养猪", "change_pct": 0.36}, {"name": "大农业", "change_pct": 0.75}]}, {"code": "603928", "name": "兴业股份", "hot_rank": 27, "hot_rank_chg": 4, "stock_cnt": 5798, "price": "15.84", "change": "10.00", "market_id": "17", "circulate_market_value": "5396751400.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "半导体光刻胶概念"}, {"code": "600378", "name": "昊华科技", "hot_rank": 28, "hot_rank_chg": 8, "stock_cnt": 5798, "price": "82.17", "change": "1.44", "market_id": "17", "circulate_market_value": "88132696000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 29, "hot_rank_chg": 11, "stock_cnt": 5798, "price": "54.83", "change": "-1.83", "market_id": "17", "circulate_market_value": "148027080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 30, "hot_rank_chg": 9, "stock_cnt": 5798, "price": "26.30", "change": "4.74", "market_id": "17", "circulate_market_value": "541827160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 31, "hot_rank_chg": -5, "stock_cnt": 5798, "price": "56.90", "change": "8.05", "market_id": "17", "circulate_market_value": "21942759000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 32, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "221.68", "change": "-10.00", "market_id": "33", "circulate_market_value": "307319800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 33, "hot_rank_chg": -9, "stock_cnt": 5798, "price": "66.96", "change": "-10.00", "market_id": "33", "circulate_market_value": "77473598000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 34, "hot_rank_chg": 9, "stock_cnt": 5798, "price": "20.27", "change": "-7.27", "market_id": "33", "circulate_market_value": "67350151000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 35, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "22.18", "change": "10.02", "market_id": "33", "circulate_market_value": "10032874600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力"}, {"code": "300418", "name": "昆仑万维", "hot_rank": 36, "hot_rank_chg": -7, "stock_cnt": 5798, "price": "45.55", "change": "12.19", "market_id": "33", "circulate_market_value": "53536006000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002971", "name": "和远气体", "hot_rank": 37, "hot_rank_chg": -5, "stock_cnt": 5798, "price": "75.02", "change": "10.00", "market_id": "33", "circulate_market_value": "11733229300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "六氟化钨"}, {"code": "300308", "name": "中际旭创", "hot_rank": 38, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "1143.00", "change": "-6.55", "market_id": "33", "circulate_market_value": "1268661170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002979", "name": "雷赛智能", "hot_rank": 39, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "63.23", "change": "10.00", "market_id": "33", "circulate_market_value": "14084056000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "2026中报预增"}, {"code": "601138", "name": "工业富联", "hot_rank": 40, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "64.02", "change": "-8.54", "market_id": "17", "circulate_market_value": "1270418790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002292", "name": "奥飞娱乐", "hot_rank": 41, "hot_rank_chg": 44, "stock_cnt": 5798, "price": "7.03", "change": "5.56", "market_id": "33", "circulate_market_value": "7155720900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -1.85}, {"name": "手游", "change_pct": 0.16}, {"name": "优化生育（三孩）", "change_pct": 0.76}, {"name": "人工智能", "change_pct": -1.53}, {"name": "VR&AR", "change_pct": -2.96}, {"name": "游戏", "change_pct": -0.21}, {"name": "影视", "change_pct": 0.97}, {"name": "动漫", "change_pct": 1.1}, {"name": "独角兽", "change_pct": 0.85}, {"name": "腾讯概念股", "change_pct": -1.25}, {"name": "全息概念", "change_pct": -1.04}, {"name": "NFT", "change_pct": 0.37}, {"name": "元宇宙", "change_pct": -0.79}, {"name": "虚拟数字人", "change_pct": -0.27}, {"name": "玩具", "change_pct": 0.35}, {"name": "盲盒", "change_pct": 0.57}, {"name": "回购", "change_pct": -0.56}, {"name": "IP经济/谷子经济", "change_pct": 0.16}]}, {"code": "603538", "name": "美诺华", "hot_rank": 42, "hot_rank_chg": -8, "stock_cnt": 5798, "price": "39.39", "change": "10.00", "market_id": "17", "circulate_market_value": "9479483500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "制剂一体化"}, {"code": "002050", "name": "三花智控", "hot_rank": 43, "hot_rank_chg": 3, "stock_cnt": 5798, "price": "44.92", "change": "1.61", "market_id": "33", "circulate_market_value": "165494150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 44, "hot_rank_chg": -2, "stock_cnt": 5798, "price": "509.00", "change": "-11.56", "market_id": "33", "circulate_market_value": "638409770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 45, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "14.92", "change": "6.80", "market_id": "17", "circulate_market_value": "62220776000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 46, "hot_rank_chg": -19, "stock_cnt": 5798, "price": "28.25", "change": "10.01", "market_id": "33", "circulate_market_value": "8264923200.00", "change_type": "1", "change_section": "10", "change_days": "7", "change_reason": "磷化铟收购"}, {"code": "002584", "name": "西陇科学", "hot_rank": 47, "hot_rank_chg": 3, "stock_cnt": 5798, "price": "11.00", "change": "10.00", "market_id": "33", "circulate_market_value": "5152691800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB用化学试剂", "xgb_concepts": [{"name": "体外诊断", "change_pct": -0.14}, {"name": "医疗器械", "change_pct": -0.22}, {"name": "基因测序", "change_pct": -0.53}, {"name": "PCB板", "change_pct": -4.84}, {"name": "医药", "change_pct": 0.67}, {"name": "新能源汽车", "change_pct": -0.54}, {"name": "化学原料药", "change_pct": 0.99}, {"name": "食品安全", "change_pct": -1.64}, {"name": "辅助生殖", "change_pct": 0.72}, {"name": "光刻机（胶）", "change_pct": -3.69}, {"name": "异丙醇", "change_pct": 2.46}, {"name": "新冠病毒防治", "change_pct": -0.1}, {"name": "磷酸铁锂", "change_pct": -1.59}]}, {"code": "603650", "name": "彤程新材", "hot_rank": 48, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "97.71", "change": "5.64", "market_id": "17", "circulate_market_value": "60040195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 49, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "174.06", "change": "-10.00", "market_id": "17", "circulate_market_value": "44912876000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 50, "hot_rank_chg": 8, "stock_cnt": 5798, "price": "156.20", "change": "-10.00", "market_id": "33", "circulate_market_value": "156978760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000792", "name": "盐湖股份", "hot_rank": 51, "hot_rank_chg": 27, "stock_cnt": 5798, "price": "30.18", "change": "-1.02", "market_id": "33", "circulate_market_value": "159698240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002653", "name": "海思科", "hot_rank": 52, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "78.80", "change": "8.00", "market_id": "33", "circulate_market_value": "42298747000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000700", "name": "模塑科技", "hot_rank": 53, "hot_rank_chg": -9, "stock_cnt": 5798, "price": "16.87", "change": "9.97", "market_id": "33", "circulate_market_value": "15486920000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "600176", "name": "中国巨石", "hot_rank": 54, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "67.82", "change": "-3.49", "market_id": "17", "circulate_market_value": "269353030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 55, "hot_rank_chg": 4, "stock_cnt": 5798, "price": "71.86", "change": "-9.99", "market_id": "17", "circulate_market_value": "55490247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 56, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "71.28", "change": "10.00", "market_id": "33", "circulate_market_value": "14345351000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "优必选入主"}, {"code": "001309", "name": "德明利", "hot_rank": 57, "hot_rank_chg": -9, "stock_cnt": 5798, "price": "811.00", "change": "-9.21", "market_id": "33", "circulate_market_value": "133870156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000601", "name": "韶能股份", "hot_rank": 58, "hot_rank_chg": 3, "stock_cnt": 5798, "price": "7.08", "change": "9.94", "market_id": "33", "circulate_market_value": "7431299100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "业绩预增", "xgb_concepts": [{"name": "造纸", "change_pct": 0.72}, {"name": "水电", "change_pct": -0.5}, {"name": "重卡", "change_pct": 0.81}, {"name": "充电桩", "change_pct": -1.17}, {"name": "新能源汽车", "change_pct": -0.54}, {"name": "新能源车零部件", "change_pct": 0.33}, {"name": "减速器", "change_pct": 0.81}, {"name": "算电协同", "change_pct": -2.19}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 59, "hot_rank_chg": 3, "stock_cnt": 5798, "price": "60.90", "change": "-8.06", "market_id": "33", "circulate_market_value": "444713650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 60, "hot_rank_chg": 7, "stock_cnt": 5798, "price": "54.84", "change": "0.68", "market_id": "33", "circulate_market_value": "82754164000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 61, "hot_rank_chg": -6, "stock_cnt": 5798, "price": "50.17", "change": "10.00", "market_id": "33", "circulate_market_value": "13468757000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "钨全产业链"}, {"code": "002463", "name": "沪电股份", "hot_rank": 62, "hot_rank_chg": -2, "stock_cnt": 5798, "price": "130.51", "change": "-10.00", "market_id": "33", "circulate_market_value": "250946000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 63, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "26.63", "change": "-10.00", "market_id": "33", "circulate_market_value": "31329366000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 64, "hot_rank_chg": 10, "stock_cnt": 5798, "price": "29.63", "change": "5.11", "market_id": "17", "circulate_market_value": "16681586000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 65, "hot_rank_chg": -8, "stock_cnt": 5798, "price": "7.76", "change": "10.07", "market_id": "33", "circulate_market_value": "14861117000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "海峡两岸", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.54}, {"name": "林业", "change_pct": 1.51}, {"name": "民营医院", "change_pct": 0.51}, {"name": "碳中和", "change_pct": -1.29}, {"name": "自贸区", "change_pct": 0.72}]}, {"code": "002129", "name": "TCL中环", "hot_rank": 66, "hot_rank_chg": 3, "stock_cnt": 5798, "price": "11.03", "change": "-7.31", "market_id": "33", "circulate_market_value": "44557447000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -5.13}, {"name": "一带一路", "change_pct": -0.4}, {"name": "京津冀", "change_pct": -0.92}, {"name": "光伏", "change_pct": -2.28}, {"name": "碳中和", "change_pct": -1.29}, {"name": "国产芯片", "change_pct": -4.4}, {"name": "IGBT", "change_pct": -4.68}, {"name": "颗粒硅", "change_pct": -4.06}, {"name": "异质结电池HJT", "change_pct": -3.08}, {"name": "大硅片", "change_pct": -6.79}]}, {"code": "002409", "name": "雅克科技", "hot_rank": 67, "hot_rank_chg": -13, "stock_cnt": 5798, "price": "212.48", "change": "-10.00", "market_id": "33", "circulate_market_value": "67679713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 69, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "97.03", "change": "1.14", "market_id": "33", "circulate_market_value": "140977350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 70, "hot_rank_chg": -17, "stock_cnt": 5798, "price": "13.82", "change": "-10.03", "market_id": "17", "circulate_market_value": "20352808000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 71, "hot_rank_chg": 8, "stock_cnt": 5798, "price": "19.04", "change": "-4.03", "market_id": "17", "circulate_market_value": "94990917000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 72, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "50.50", "change": "-4.99", "market_id": "17", "circulate_market_value": "84035628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 73, "hot_rank_chg": 11, "stock_cnt": 5798, "price": "58.28", "change": "-8.65", "market_id": "17", "circulate_market_value": "18764597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 74, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "23.51", "change": "-4.66", "market_id": "33", "circulate_market_value": "79076004000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 75, "hot_rank_chg": 6, "stock_cnt": 5798, "price": "29.89", "change": "4.99", "market_id": "33", "circulate_market_value": "34257093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 76, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "67.37", "change": "-8.85", "market_id": "33", "circulate_market_value": "102230756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002273", "name": "水晶光电", "hot_rank": 77, "hot_rank_chg": -14, "stock_cnt": 5798, "price": "39.02", "change": "-0.03", "market_id": "33", "circulate_market_value": "53148298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 78, "hot_rank_chg": 9, "stock_cnt": 5798, "price": "121.30", "change": "-3.12", "market_id": "17", "circulate_market_value": "300008890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 79, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "250.77", "change": "-12.01", "market_id": "33", "circulate_market_value": "272935070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 80, "hot_rank_chg": 14, "stock_cnt": 5798, "price": "21.27", "change": "0.85", "market_id": "33", "circulate_market_value": "16110219000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 81, "hot_rank_chg": 9, "stock_cnt": 5798, "price": "94.56", "change": "-7.70", "market_id": "17", "circulate_market_value": "138346420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 82, "hot_rank_chg": -10, "stock_cnt": 5798, "price": "56.21", "change": "-10.01", "market_id": "17", "circulate_market_value": "82178728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 83, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "18.29", "change": "3.16", "market_id": "17", "circulate_market_value": "319358800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000536", "name": "华映科技", "hot_rank": 84, "hot_rank_chg": -9, "stock_cnt": 5798, "price": "4.06", "change": "10.03", "market_id": "33", "circulate_market_value": "11218115000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "出售半导体资产", "xgb_concepts": [{"name": "手机产业链", "change_pct": -3.09}, {"name": "福建自贸/海西概念", "change_pct": 0.54}, {"name": "OLED", "change_pct": -3.8}, {"name": "3D玻璃", "change_pct": -2.81}, {"name": "液晶面板/LCD", "change_pct": -3.01}, {"name": "国企改革", "change_pct": -0.48}, {"name": "华为产业链", "change_pct": -2.25}, {"name": "自贸区", "change_pct": 0.72}]}, {"code": "002594", "name": "比亚迪", "hot_rank": 85, "hot_rank_chg": -17, "stock_cnt": 5798, "price": "83.57", "change": "3.61", "market_id": "33", "circulate_market_value": "291376290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 86, "hot_rank_chg": -3, "stock_cnt": 5798, "price": "38.48", "change": "-4.28", "market_id": "33", "circulate_market_value": "14440928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 87, "hot_rank_chg": -21, "stock_cnt": 5798, "price": "61.22", "change": "7.82", "market_id": "17", "circulate_market_value": "25490031000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 88, "hot_rank_chg": 8, "stock_cnt": 5798, "price": "28.39", "change": "10.00", "market_id": "17", "circulate_market_value": "47238444000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金"}, {"code": "002281", "name": "光迅科技", "hot_rank": 89, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "218.19", "change": "-10.00", "market_id": "33", "circulate_market_value": "170296940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 90, "hot_rank_chg": -2, "stock_cnt": 5798, "price": "269.15", "change": "-14.80", "market_id": "17", "circulate_market_value": "308560700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 91, "hot_rank_chg": -20, "stock_cnt": 5798, "price": "34.32", "change": "10.00", "market_id": "17", "circulate_market_value": "9471385300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "电子皮肤"}, {"code": "300058", "name": "蓝色光标", "hot_rank": 92, "hot_rank_chg": 12, "stock_cnt": 5798, "price": "14.23", "change": "2.23", "market_id": "33", "circulate_market_value": "49490948000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 93, "hot_rank_chg": 18, "stock_cnt": 5798, "price": "53.49", "change": "-0.54", "market_id": "17", "circulate_market_value": "341212830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 94, "hot_rank_chg": 4, "stock_cnt": 5798, "price": "106.90", "change": "-6.92", "market_id": "33", "circulate_market_value": "69809508000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002422", "name": "科伦药业", "hot_rank": 95, "hot_rank_chg": 11, "stock_cnt": 5798, "price": "44.75", "change": "6.67", "market_id": "33", "circulate_market_value": "58113373000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 96, "hot_rank_chg": 7, "stock_cnt": 5798, "price": "26.75", "change": "-9.78", "market_id": "17", "circulate_market_value": "25268234000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002693", "name": "双成药业", "hot_rank": 97, "hot_rank_chg": 4, "stock_cnt": 5798, "price": "10.67", "change": "10.00", "market_id": "33", "circulate_market_value": "4385173600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "许可协议", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.14}, {"name": "资产重组", "change_pct": -0.77}, {"name": "半导体", "change_pct": -5.13}, {"name": "ST摘帽", "change_pct": 0.29}, {"name": "医药", "change_pct": 0.67}, {"name": "化学原料药", "change_pct": 0.99}, {"name": "海南概念", "change_pct": 2.99}, {"name": "肝炎概念", "change_pct": 0.79}]}, {"code": "002600", "name": "领益智造", "hot_rank": 98, "hot_rank_chg": 9, "stock_cnt": 5798, "price": "17.18", "change": "-3.48", "market_id": "33", "circulate_market_value": "123690928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 99, "hot_rank_chg": -8, "stock_cnt": 5798, "price": "127.84", "change": "-6.63", "market_id": "33", "circulate_market_value": "202949600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600392", "name": "盛和资源", "hot_rank": 100, "hot_rank_chg": 5, "stock_cnt": 5798, "price": "29.89", "change": "3.00", "market_id": "17", "circulate_market_value": "52391986000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "ST/风险警示股", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};