const UPDATE_TIME = "2026-07-02 15:11";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.45,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续69天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "2026中报预增",
    "rise": 3.74,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "人形机器人",
    "rise": -0.64,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续403天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "存储芯片",
    "rise": -5.67,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续192天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -5.1,
    "rate": 0,
    "tag": "",
    "hotTag": "连续239天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "机器人概念",
    "rise": -0.93,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "连续70天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "氟化工概念",
    "rise": 0.66,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885551"
  },
  {
    "name": "培育钻石",
    "rise": 2.1,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "PCB概念",
    "rise": -3.83,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续62天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "玻璃基板",
    "rise": -7.47,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886111"
  },
  {
    "name": "商业航天",
    "rise": -2.31,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续168天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "ST板块",
    "rise": 2.23,
    "rate": 0,
    "tag": "63家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "猪肉",
    "rise": 0.58,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "AI应用",
    "rise": -1.12,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "芯片概念",
    "rise": -3.33,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续63天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "光刻胶",
    "rise": -2.35,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "黄金概念",
    "rise": 0.88,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "稀土永磁",
    "rise": 1.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "光纤概念",
    "rise": -4.69,
    "rate": 0,
    "tag": "",
    "hotTag": "连续68天上榜",
    "rankChg": 1,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "算力租赁",
    "rise": -2.04,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续103天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886050"
  }
];
const THS_EVENTS = [
  {
    "title": "巨头抢购电子级氢氟酸 部分供货商年内已涨价三成",
    "desc": "",
    "heat": 326212,
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
    "heat": 160711,
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
    "heat": 105161,
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
    "heat": 48101,
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
    "heat": 48096,
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
    "heat": 13731,
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
    "change": "+3.54%",
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
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5840,
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
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 3,
    "hot_rank_chg": 12,
    "stock_cnt": 5840,
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
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 11,
    "hot_rank_chg": 2,
    "stock_cnt": 5840,
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
    "hot_rank_chg": -5,
    "stock_cnt": 5840,
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
    "hot_rank_chg": 56,
    "stock_cnt": 5840,
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
    "hot_rank": 24,
    "hot_rank_chg": -18,
    "stock_cnt": 5840,
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
    "hot_rank": 25,
    "hot_rank_chg": 27,
    "stock_cnt": 5840,
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
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 49,
    "hot_rank_chg": 176,
    "stock_cnt": 5840,
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
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 59,
    "hot_rank_chg": -10,
    "stock_cnt": 5840,
    "price": "11.03",
    "change": "-7.31",
    "market_id": "33",
    "circulate_market_value": "44558771000.00",
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
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 62,
    "hot_rank_chg": 272,
    "stock_cnt": 5840,
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
    "code": "002292",
    "name": "奥飞娱乐",
    "hot_rank": 63,
    "hot_rank_chg": 1383,
    "stock_cnt": 5840,
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
    "code": "000601",
    "name": "韶能股份",
    "hot_rank": 65,
    "hot_rank_chg": 15,
    "stock_cnt": 5840,
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
    "code": "000536",
    "name": "华映科技",
    "hot_rank": 81,
    "hot_rank_chg": 84,
    "stock_cnt": 5840,
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
    "code": "000506",
    "name": "招金黄金",
    "hot_rank": 98,
    "hot_rank_chg": 1020,
    "stock_cnt": 5840,
    "price": "12.61",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "11710994800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "黄金",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 5.2
      },
      {
        "name": "有色 · 锌",
        "change_pct": -0.45
      },
      {
        "name": "有色金属",
        "change_pct": -0.88
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "9.10", "change": "3.76", "market_id": "33", "circulate_market_value": "321840920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.76}, {"name": "手机产业链", "change_pct": -3.09}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "苹果产业链", "change_pct": -3.75}, {"name": "半导体", "change_pct": -5.13}, {"name": "人工智能", "change_pct": -1.53}, {"name": "互联网医疗", "change_pct": -0.11}, {"name": "VR&AR", "change_pct": -2.96}, {"name": "OLED", "change_pct": -3.8}, {"name": "京津冀", "change_pct": -0.92}, {"name": "物联网", "change_pct": -1.84}, {"name": "指纹识别", "change_pct": -3.49}, {"name": "汽车零部件", "change_pct": 0.4}, {"name": "白马股", "change_pct": -0.78}, {"name": "智能制造", "change_pct": -0.92}, {"name": "小米概念股", "change_pct": -2.56}, {"name": "国产芯片", "change_pct": -4.4}, {"name": "液晶面板/LCD", "change_pct": -3.01}, {"name": "全息概念", "change_pct": -1.04}, {"name": "理想汽车概念股", "change_pct": 0.79}, {"name": "MicroLED", "change_pct": -4.41}, {"name": "钙钛矿电池", "change_pct": -3.66}, {"name": "智能手表", "change_pct": -2.96}, {"name": "MiniLED", "change_pct": -4.15}, {"name": "传感器", "change_pct": -2.0}, {"name": "大硅片", "change_pct": -6.79}, {"name": "AI PC", "change_pct": -3.07}, {"name": "华为产业链", "change_pct": -2.25}, {"name": "回购", "change_pct": -0.56}, {"name": "智能眼镜/MR头显", "change_pct": -3.1}, {"name": "玻璃基板封装", "change_pct": -5.98}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 2, "hot_rank_chg": 26, "stock_cnt": 5840, "price": "23.95", "change": "136.89", "market_id": "33", "circulate_market_value": "25444571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 3, "hot_rank_chg": 12, "stock_cnt": 5840, "price": "10.34", "change": "10.00", "market_id": "33", "circulate_market_value": "16809674000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能数据集", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.17}, {"name": "电竞", "change_pct": -0.05}, {"name": "手游", "change_pct": 0.16}, {"name": "强势人气股", "change_pct": -0.35}, {"name": "人工智能", "change_pct": -1.53}, {"name": "游戏", "change_pct": -0.21}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.41}, {"name": "腾讯概念股", "change_pct": -1.25}, {"name": "快手概念股", "change_pct": -0.04}, {"name": "元宇宙", "change_pct": -0.79}, {"name": "虚拟数字人", "change_pct": -0.27}, {"name": "东数西算/算力", "change_pct": -2.62}, {"name": "web3.0", "change_pct": -0.24}, {"name": "AIGC概念", "change_pct": -0.34}, {"name": "数据要素", "change_pct": -1.29}, {"name": "字节跳动概念股", "change_pct": -0.23}, {"name": "AI营销", "change_pct": 1.79}, {"name": "ChatGPT", "change_pct": -0.56}, {"name": "智能眼镜/MR头显", "change_pct": -3.1}, {"name": "人工智能大模型", "change_pct": -1.36}, {"name": "人形机器人", "change_pct": 0.02}, {"name": "短剧/互动影游", "change_pct": 0.51}, {"name": "多模态", "change_pct": -0.37}, {"name": "Sora/AI视频", "change_pct": 0.4}, {"name": "IP经济/谷子经济", "change_pct": 0.16}, {"name": "小红书概念股", "change_pct": 0.64}]}, {"code": "002407", "name": "多氟多", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5840, "price": "54.82", "change": "-0.78", "market_id": "33", "circulate_market_value": "59138026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5840, "price": "28.89", "change": "-10.00", "market_id": "17", "circulate_market_value": "60424654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5840, "price": "95.98", "change": "-10.00", "market_id": "17", "circulate_market_value": "171748010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5840, "price": "40.70", "change": "-0.88", "market_id": "33", "circulate_market_value": "31843868000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 8, "hot_rank_chg": 62, "stock_cnt": 5840, "price": "18.03", "change": "10.01", "market_id": "17", "circulate_market_value": "23010891000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "培育钻石"}, {"code": "002326", "name": "永太科技", "hot_rank": 9, "hot_rank_chg": 5, "stock_cnt": 5840, "price": "28.00", "change": "7.61", "market_id": "33", "circulate_market_value": "22628453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 10, "hot_rank_chg": 11, "stock_cnt": 5840, "price": "694.81", "change": "-10.00", "market_id": "17", "circulate_market_value": "464474880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 11, "hot_rank_chg": 2, "stock_cnt": 5840, "price": "6.04", "change": "10.02", "market_id": "33", "circulate_market_value": "7832283200.00", "change_type": "1", "change_section": "8", "change_days": "6", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 1.12}, {"name": "创新药", "change_pct": 0.45}, {"name": "央企改革", "change_pct": -0.72}, {"name": "医疗器械", "change_pct": -0.22}, {"name": "强势人气股", "change_pct": -0.35}, {"name": "互联网医疗", "change_pct": -0.11}, {"name": "保健品", "change_pct": 0.84}, {"name": "民营医院", "change_pct": 0.51}, {"name": "CAR-T疗法", "change_pct": -0.23}, {"name": "医药", "change_pct": 0.67}, {"name": "化学原料药", "change_pct": 0.99}, {"name": "海南概念", "change_pct": 2.99}, {"name": "脑科学", "change_pct": -0.54}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.91}, {"name": "海南自由贸易港", "change_pct": 2.02}, {"name": "食品", "change_pct": 0.64}, {"name": "国企改革", "change_pct": -0.48}, {"name": "医疗信息化", "change_pct": -0.97}, {"name": "新冠病毒防治", "change_pct": -0.1}, {"name": "自贸区", "change_pct": 0.72}, {"name": "合成生物", "change_pct": 0.6}]}, {"code": "000021", "name": "深科技", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "56.03", "change": "-10.01", "market_id": "33", "circulate_market_value": "88199937000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605020", "name": "永和股份", "hot_rank": 13, "hot_rank_chg": 99, "stock_cnt": 5840, "price": "48.39", "change": "10.00", "market_id": "17", "circulate_market_value": "24336492000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "制冷剂涨价"}, {"code": "600641", "name": "先导基电", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5840, "price": "48.24", "change": "10.01", "market_id": "17", "circulate_market_value": "44893587000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "拟收购先导微电子"}, {"code": "000100", "name": "TCL科技", "hot_rank": 15, "hot_rank_chg": -5, "stock_cnt": 5840, "price": "5.92", "change": "-3.27", "market_id": "33", "circulate_market_value": "113261643000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.76}, {"name": "手机产业链", "change_pct": -3.09}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "半导体", "change_pct": -5.13}, {"name": "OLED", "change_pct": -3.8}, {"name": "光伏", "change_pct": -2.28}, {"name": "黑色家电", "change_pct": -0.89}, {"name": "家电", "change_pct": -0.34}, {"name": "智能制造", "change_pct": -0.92}, {"name": "工业互联网", "change_pct": -1.26}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.56}, {"name": "国产芯片", "change_pct": -4.4}, {"name": "腾讯概念股", "change_pct": -1.25}, {"name": "液晶面板/LCD", "change_pct": -3.01}, {"name": "MicroLED", "change_pct": -4.41}, {"name": "MiniLED", "change_pct": -4.15}, {"name": "华为产业链", "change_pct": -2.25}, {"name": "玻璃基板封装", "change_pct": -5.98}]}, {"code": "601678", "name": "滨化股份", "hot_rank": 16, "hot_rank_chg": 56, "stock_cnt": 5840, "price": "7.70", "change": "10.00", "market_id": "17", "circulate_market_value": "15733689000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "H股招股", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.24}, {"name": "军民融合", "change_pct": -1.33}, {"name": "氢能源/燃料电池", "change_pct": -0.82}, {"name": "烧碱", "change_pct": 0.8}, {"name": "军工", "change_pct": -1.44}, {"name": "新能源汽车", "change_pct": -0.54}, {"name": "环氧丙烷", "change_pct": 0.92}, {"name": "氟化工", "change_pct": 0.99}, {"name": "双氧水", "change_pct": 0.92}, {"name": "液氯", "change_pct": 2.21}]}, {"code": "600206", "name": "有研新材", "hot_rank": 17, "hot_rank_chg": -13, "stock_cnt": 5840, "price": "57.81", "change": "-3.55", "market_id": "17", "circulate_market_value": "48939248000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002559", "name": "亚威股份", "hot_rank": 18, "hot_rank_chg": 17, "stock_cnt": 5840, "price": "15.38", "change": "10.01", "market_id": "33", "circulate_market_value": "7751597000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "参股半导体检测公司"}, {"code": "600522", "name": "中天科技", "hot_rank": 19, "hot_rank_chg": -8, "stock_cnt": 5840, "price": "51.58", "change": "-6.93", "market_id": "17", "circulate_market_value": "176039940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 20, "hot_rank_chg": -13, "stock_cnt": 5840, "price": "46.82", "change": "1.17", "market_id": "33", "circulate_market_value": "20159134000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 21, "hot_rank_chg": -1, "stock_cnt": 5840, "price": "66.96", "change": "-10.00", "market_id": "33", "circulate_market_value": "77473598000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 22, "hot_rank_chg": 4, "stock_cnt": 5840, "price": "26.05", "change": "7.29", "market_id": "33", "circulate_market_value": "19764473000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 23, "hot_rank_chg": -1, "stock_cnt": 5840, "price": "93.84", "change": "-7.94", "market_id": "17", "circulate_market_value": "229455800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 24, "hot_rank_chg": -18, "stock_cnt": 5840, "price": "7.33", "change": "-5.91", "market_id": "17", "circulate_market_value": "90863333000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.72}, {"name": "核电", "change_pct": -1.2}, {"name": "强势人气股", "change_pct": -0.35}, {"name": "电力体制改革", "change_pct": -1.57}, {"name": "水电", "change_pct": -0.5}, {"name": "火电", "change_pct": -1.79}, {"name": "光伏", "change_pct": -2.28}, {"name": "风电", "change_pct": -1.19}, {"name": "国企改革", "change_pct": -0.48}, {"name": "算电协同", "change_pct": -2.19}]}, {"code": "002458", "name": "益生股份", "hot_rank": 25, "hot_rank_chg": 27, "stock_cnt": 5840, "price": "9.41", "change": "10.06", "market_id": "33", "circulate_market_value": "9093688200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增", "xgb_concepts": [{"name": "养鸡", "change_pct": 1.76}, {"name": "养猪", "change_pct": 0.36}, {"name": "大农业", "change_pct": 0.75}]}, {"code": "603078", "name": "江化微", "hot_rank": 26, "hot_rank_chg": 37, "stock_cnt": 5840, "price": "56.90", "change": "8.05", "market_id": "17", "circulate_market_value": "21942759000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 27, "hot_rank_chg": -10, "stock_cnt": 5840, "price": "16.69", "change": "-5.49", "market_id": "17", "circulate_market_value": "59878208000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 28, "hot_rank_chg": 66, "stock_cnt": 5840, "price": "28.25", "change": "10.01", "market_id": "33", "circulate_market_value": "8264923200.00", "change_type": "1", "change_section": "10", "change_days": "7", "change_reason": "磷化铟收购"}, {"code": "603928", "name": "兴业股份", "hot_rank": 29, "hot_rank_chg": 78, "stock_cnt": 5840, "price": "15.84", "change": "10.00", "market_id": "17", "circulate_market_value": "5396751400.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "半导体光刻胶概念"}, {"code": "002384", "name": "东山精密", "hot_rank": 30, "hot_rank_chg": 30, "stock_cnt": 5840, "price": "221.68", "change": "-10.00", "market_id": "33", "circulate_market_value": "307319800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002971", "name": "和远气体", "hot_rank": 31, "hot_rank_chg": 24, "stock_cnt": 5840, "price": "75.02", "change": "10.00", "market_id": "33", "circulate_market_value": "11733229300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "六氟化钨"}, {"code": "300418", "name": "昆仑万维", "hot_rank": 32, "hot_rank_chg": 411, "stock_cnt": 5840, "price": "45.55", "change": "12.19", "market_id": "33", "circulate_market_value": "53536006000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 33, "hot_rank_chg": 71, "stock_cnt": 5840, "price": "26.30", "change": "4.74", "market_id": "17", "circulate_market_value": "541827160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 34, "hot_rank_chg": -18, "stock_cnt": 5840, "price": "82.17", "change": "1.44", "market_id": "17", "circulate_market_value": "88132696000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 35, "hot_rank_chg": 223, "stock_cnt": 5840, "price": "22.18", "change": "10.02", "market_id": "33", "circulate_market_value": "10032874600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力"}, {"code": "603505", "name": "金石资源", "hot_rank": 36, "hot_rank_chg": 91, "stock_cnt": 5840, "price": "24.39", "change": "10.01", "market_id": "17", "circulate_market_value": "20528302000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "制冷剂涨价"}, {"code": "002979", "name": "雷赛智能", "hot_rank": 37, "hot_rank_chg": 160, "stock_cnt": 5840, "price": "63.23", "change": "10.00", "market_id": "33", "circulate_market_value": "14084056000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "2026中报预增"}, {"code": "300308", "name": "中际旭创", "hot_rank": 38, "hot_rank_chg": 16, "stock_cnt": 5840, "price": "1143.00", "change": "-6.55", "market_id": "33", "circulate_market_value": "1268661170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 39, "hot_rank_chg": -14, "stock_cnt": 5840, "price": "20.27", "change": "-7.27", "market_id": "33", "circulate_market_value": "67350151000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 40, "hot_rank_chg": 31, "stock_cnt": 5840, "price": "97.71", "change": "5.64", "market_id": "17", "circulate_market_value": "60040195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 41, "hot_rank_chg": -17, "stock_cnt": 5840, "price": "54.83", "change": "-1.83", "market_id": "17", "circulate_market_value": "148027080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 42, "hot_rank_chg": 37, "stock_cnt": 5840, "price": "811.00", "change": "-9.21", "market_id": "33", "circulate_market_value": "133870156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 43, "hot_rank_chg": 21, "stock_cnt": 5840, "price": "64.02", "change": "-8.54", "market_id": "17", "circulate_market_value": "1270418790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 44, "hot_rank_chg": 46, "stock_cnt": 5840, "price": "44.92", "change": "1.61", "market_id": "33", "circulate_market_value": "165494150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 45, "hot_rank_chg": 220, "stock_cnt": 5840, "price": "14.92", "change": "6.80", "market_id": "17", "circulate_market_value": "62220776000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 46, "hot_rank_chg": 89, "stock_cnt": 5840, "price": "39.39", "change": "10.00", "market_id": "17", "circulate_market_value": "9479483500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "制剂一体化"}, {"code": "300502", "name": "新易盛", "hot_rank": 47, "hot_rank_chg": 54, "stock_cnt": 5840, "price": "509.00", "change": "-11.56", "market_id": "33", "circulate_market_value": "638409770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000700", "name": "模塑科技", "hot_rank": 48, "hot_rank_chg": 430, "stock_cnt": 5840, "price": "16.87", "change": "9.97", "market_id": "33", "circulate_market_value": "15486920000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "002584", "name": "西陇科学", "hot_rank": 49, "hot_rank_chg": 176, "stock_cnt": 5840, "price": "11.00", "change": "10.00", "market_id": "33", "circulate_market_value": "5152691800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB用化学试剂", "xgb_concepts": [{"name": "体外诊断", "change_pct": -0.14}, {"name": "医疗器械", "change_pct": -0.22}, {"name": "基因测序", "change_pct": -0.53}, {"name": "PCB板", "change_pct": -4.84}, {"name": "医药", "change_pct": 0.67}, {"name": "新能源汽车", "change_pct": -0.54}, {"name": "化学原料药", "change_pct": 0.99}, {"name": "食品安全", "change_pct": -1.64}, {"name": "辅助生殖", "change_pct": 0.72}, {"name": "光刻机（胶）", "change_pct": -3.69}, {"name": "异丙醇", "change_pct": 2.46}, {"name": "新冠病毒防治", "change_pct": -0.1}, {"name": "磷酸铁锂", "change_pct": -1.59}]}, {"code": "603629", "name": "利通电子", "hot_rank": 50, "hot_rank_chg": -31, "stock_cnt": 5840, "price": "174.06", "change": "-10.00", "market_id": "17", "circulate_market_value": "44912876000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 51, "hot_rank_chg": 48, "stock_cnt": 5840, "price": "13.82", "change": "-10.03", "market_id": "17", "circulate_market_value": "20352808000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 52, "hot_rank_chg": -29, "stock_cnt": 5840, "price": "212.48", "change": "-10.00", "market_id": "33", "circulate_market_value": "67679713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 53, "hot_rank_chg": -5, "stock_cnt": 5840, "price": "156.20", "change": "-10.00", "market_id": "33", "circulate_market_value": "156978760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002653", "name": "海思科", "hot_rank": 54, "hot_rank_chg": 21, "stock_cnt": 5840, "price": "78.80", "change": "8.00", "market_id": "33", "circulate_market_value": "42298747000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 56, "hot_rank_chg": 322, "stock_cnt": 5840, "price": "71.28", "change": "10.00", "market_id": "33", "circulate_market_value": "14345351000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "优必选入主"}, {"code": "600176", "name": "中国巨石", "hot_rank": 57, "hot_rank_chg": -26, "stock_cnt": 5840, "price": "67.82", "change": "-3.49", "market_id": "17", "circulate_market_value": "269353030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 58, "hot_rank_chg": 256, "stock_cnt": 5840, "price": "50.17", "change": "10.00", "market_id": "33", "circulate_market_value": "13468757000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "钨全产业链"}, {"code": "002129", "name": "TCL中环", "hot_rank": 59, "hot_rank_chg": -10, "stock_cnt": 5840, "price": "11.03", "change": "-7.31", "market_id": "33", "circulate_market_value": "44558771000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -5.13}, {"name": "一带一路", "change_pct": -0.4}, {"name": "京津冀", "change_pct": -0.92}, {"name": "光伏", "change_pct": -2.28}, {"name": "碳中和", "change_pct": -1.29}, {"name": "国产芯片", "change_pct": -4.4}, {"name": "IGBT", "change_pct": -4.68}, {"name": "颗粒硅", "change_pct": -4.06}, {"name": "异质结电池HJT", "change_pct": -3.08}, {"name": "大硅片", "change_pct": -6.79}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 60, "hot_rank_chg": 26, "stock_cnt": 5840, "price": "60.90", "change": "-8.06", "market_id": "33", "circulate_market_value": "444713650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 61, "hot_rank_chg": 26, "stock_cnt": 5840, "price": "130.51", "change": "-10.00", "market_id": "33", "circulate_market_value": "250946000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 62, "hot_rank_chg": 272, "stock_cnt": 5840, "price": "7.76", "change": "10.07", "market_id": "33", "circulate_market_value": "14861117000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "海峡两岸", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.54}, {"name": "林业", "change_pct": 1.51}, {"name": "民营医院", "change_pct": 0.51}, {"name": "碳中和", "change_pct": -1.29}, {"name": "自贸区", "change_pct": 0.72}]}, {"code": "002292", "name": "奥飞娱乐", "hot_rank": 63, "hot_rank_chg": 1383, "stock_cnt": 5840, "price": "7.03", "change": "5.56", "market_id": "33", "circulate_market_value": "7155720900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -1.85}, {"name": "手游", "change_pct": 0.16}, {"name": "优化生育（三孩）", "change_pct": 0.76}, {"name": "人工智能", "change_pct": -1.53}, {"name": "VR&AR", "change_pct": -2.96}, {"name": "游戏", "change_pct": -0.21}, {"name": "影视", "change_pct": 0.97}, {"name": "动漫", "change_pct": 1.1}, {"name": "独角兽", "change_pct": 0.85}, {"name": "腾讯概念股", "change_pct": -1.25}, {"name": "全息概念", "change_pct": -1.04}, {"name": "NFT", "change_pct": 0.37}, {"name": "元宇宙", "change_pct": -0.79}, {"name": "虚拟数字人", "change_pct": -0.27}, {"name": "玩具", "change_pct": 0.35}, {"name": "盲盒", "change_pct": 0.57}, {"name": "回购", "change_pct": -0.56}, {"name": "IP经济/谷子经济", "change_pct": 0.16}]}, {"code": "605358", "name": "立昂微", "hot_rank": 64, "hot_rank_chg": -37, "stock_cnt": 5840, "price": "71.86", "change": "-9.99", "market_id": "17", "circulate_market_value": "55490247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000601", "name": "韶能股份", "hot_rank": 65, "hot_rank_chg": 15, "stock_cnt": 5840, "price": "7.08", "change": "9.94", "market_id": "33", "circulate_market_value": "7431299100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "业绩预增", "xgb_concepts": [{"name": "造纸", "change_pct": 0.72}, {"name": "水电", "change_pct": -0.5}, {"name": "重卡", "change_pct": 0.81}, {"name": "充电桩", "change_pct": -1.17}, {"name": "新能源汽车", "change_pct": -0.54}, {"name": "新能源车零部件", "change_pct": 0.33}, {"name": "减速器", "change_pct": 0.81}, {"name": "算电协同", "change_pct": -2.19}]}, {"code": "002709", "name": "天赐材料", "hot_rank": 66, "hot_rank_chg": -28, "stock_cnt": 5840, "price": "54.84", "change": "0.68", "market_id": "33", "circulate_market_value": "82754164000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 67, "hot_rank_chg": 28, "stock_cnt": 5840, "price": "83.57", "change": "3.61", "market_id": "33", "circulate_market_value": "291376290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 68, "hot_rank_chg": 145, "stock_cnt": 5840, "price": "61.22", "change": "7.82", "market_id": "17", "circulate_market_value": "25490031000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 69, "hot_rank_chg": -16, "stock_cnt": 5840, "price": "26.63", "change": "-10.00", "market_id": "33", "circulate_market_value": "31329366000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 70, "hot_rank_chg": 6, "stock_cnt": 5840, "price": "56.21", "change": "-10.01", "market_id": "17", "circulate_market_value": "82178728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002273", "name": "水晶光电", "hot_rank": 71, "hot_rank_chg": -27, "stock_cnt": 5840, "price": "39.02", "change": "-0.03", "market_id": "33", "circulate_market_value": "53148298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 72, "hot_rank_chg": 45, "stock_cnt": 5840, "price": "18.29", "change": "3.16", "market_id": "17", "circulate_market_value": "319358800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 73, "hot_rank_chg": -43, "stock_cnt": 5840, "price": "23.51", "change": "-4.66", "market_id": "33", "circulate_market_value": "79076004000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 74, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "97.03", "change": "1.14", "market_id": "33", "circulate_market_value": "140977350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 75, "hot_rank_chg": -39, "stock_cnt": 5840, "price": "50.50", "change": "-4.99", "market_id": "17", "circulate_market_value": "84035628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000792", "name": "盐湖股份", "hot_rank": 76, "hot_rank_chg": 695, "stock_cnt": 5840, "price": "30.18", "change": "-1.02", "market_id": "33", "circulate_market_value": "159698240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 77, "hot_rank_chg": 132, "stock_cnt": 5840, "price": "29.63", "change": "5.11", "market_id": "17", "circulate_market_value": "16681586000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 78, "hot_rank_chg": -45, "stock_cnt": 5840, "price": "19.04", "change": "-4.03", "market_id": "17", "circulate_market_value": "94990917000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 79, "hot_rank_chg": -34, "stock_cnt": 5840, "price": "67.37", "change": "-8.85", "market_id": "33", "circulate_market_value": "102230756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 80, "hot_rank_chg": 54, "stock_cnt": 5840, "price": "250.77", "change": "-12.01", "market_id": "33", "circulate_market_value": "272935070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000536", "name": "华映科技", "hot_rank": 81, "hot_rank_chg": 84, "stock_cnt": 5840, "price": "4.06", "change": "10.03", "market_id": "33", "circulate_market_value": "11218115000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "出售半导体资产", "xgb_concepts": [{"name": "手机产业链", "change_pct": -3.09}, {"name": "福建自贸/海西概念", "change_pct": 0.54}, {"name": "OLED", "change_pct": -3.8}, {"name": "3D玻璃", "change_pct": -2.81}, {"name": "液晶面板/LCD", "change_pct": -3.01}, {"name": "国企改革", "change_pct": -0.48}, {"name": "华为产业链", "change_pct": -2.25}, {"name": "自贸区", "change_pct": 0.72}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 82, "hot_rank_chg": 322, "stock_cnt": 5840, "price": "29.89", "change": "4.99", "market_id": "33", "circulate_market_value": "34257093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 83, "hot_rank_chg": -40, "stock_cnt": 5840, "price": "38.48", "change": "-4.28", "market_id": "33", "circulate_market_value": "14440928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 84, "hot_rank_chg": 330, "stock_cnt": 5840, "price": "34.32", "change": "10.00", "market_id": "17", "circulate_market_value": "9479517500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "电子皮肤"}, {"code": "688008", "name": "澜起科技", "hot_rank": 85, "hot_rank_chg": 23, "stock_cnt": 5840, "price": "269.15", "change": "-14.80", "market_id": "17", "circulate_market_value": "308560700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 86, "hot_rank_chg": -44, "stock_cnt": 5840, "price": "58.28", "change": "-8.65", "market_id": "17", "circulate_market_value": "18764597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 87, "hot_rank_chg": 116, "stock_cnt": 5840, "price": "21.27", "change": "0.85", "market_id": "33", "circulate_market_value": "16110219000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 88, "hot_rank_chg": -38, "stock_cnt": 5840, "price": "94.56", "change": "-7.70", "market_id": "17", "circulate_market_value": "138346420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 89, "hot_rank_chg": -57, "stock_cnt": 5840, "price": "127.84", "change": "-6.63", "market_id": "33", "circulate_market_value": "202949600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 90, "hot_rank_chg": -7, "stock_cnt": 5840, "price": "464.37", "change": "-8.68", "market_id": "17", "circulate_market_value": "188691320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 91, "hot_rank_chg": -30, "stock_cnt": 5840, "price": "121.30", "change": "-3.12", "market_id": "17", "circulate_market_value": "300008890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 92, "hot_rank_chg": -11, "stock_cnt": 5840, "price": "218.19", "change": "-10.00", "market_id": "33", "circulate_market_value": "170296940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920193", "name": "吉和昌", "hot_rank": 93, "hot_rank_chg": 1546, "stock_cnt": 5840, "price": "61.05", "change": "616.55", "market_id": "151", "circulate_market_value": "1538460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 94, "hot_rank_chg": -5, "stock_cnt": 5840, "price": "111.58", "change": "0.20", "market_id": "33", "circulate_market_value": "80819114000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 95, "hot_rank_chg": 880, "stock_cnt": 5840, "price": "28.39", "change": "10.00", "market_id": "17", "circulate_market_value": "47238444000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金"}, {"code": "600183", "name": "生益科技", "hot_rank": 96, "hot_rank_chg": -23, "stock_cnt": 5840, "price": "151.95", "change": "-7.80", "market_id": "17", "circulate_market_value": "363844510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 97, "hot_rank_chg": -19, "stock_cnt": 5840, "price": "106.90", "change": "-6.92", "market_id": "33", "circulate_market_value": "69809508000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 98, "hot_rank_chg": 1020, "stock_cnt": 5840, "price": "12.61", "change": "10.04", "market_id": "33", "circulate_market_value": "11710994800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金", "xgb_concepts": [{"name": "黄金", "change_pct": 5.2}, {"name": "有色 · 锌", "change_pct": -0.45}, {"name": "有色金属", "change_pct": -0.88}]}, {"code": "300346", "name": "南大光电", "hot_rank": 99, "hot_rank_chg": 4, "stock_cnt": 5840, "price": "88.77", "change": "0.03", "market_id": "33", "circulate_market_value": "58232236000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 100, "hot_rank_chg": 13, "stock_cnt": 5840, "price": "599.22", "change": "-10.28", "market_id": "33", "circulate_market_value": "168891290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603286", "name": "日盈电子", "price": 51.78, "change_pct": 10.01, "reason": "公司压阻式的电子皮肤样品已研发成功，在人形机器人新领域，公司以布局柔性触觉传感电子皮肤新产品为契机，结合发展战略及市场需求加快布局柔性线束等其他人形机器人产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.46, "first_limit_up": 1782955975, "break_limit_up_times": 1}, {"code": "000572", "name": "海马汽车", "price": 4.15, "change_pct": 10.08, "reason": "公司与丰田汽车中国签署战略合作框架协议，已投放50台氢燃料电池汽车7X-H在海南示范运营，累计行驶里程突破200万公里", "plates": ["海南自由贸易港"], "limit_up_days": 1, "turnover_ratio": 2.71, "first_limit_up": 1782956316, "break_limit_up_times": 0}, {"code": "603828", "name": "*ST利达", "price": 4.42, "change_pct": 4.99, "reason": "公司拟变更间接控股股东", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.28, "first_limit_up": 1782955848, "break_limit_up_times": 5}, {"code": "003030", "name": "祖名股份", "price": 22.44, "change_pct": 10.0, "reason": "国内生鲜豆制品领军企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.75, "first_limit_up": 1782956028, "break_limit_up_times": 0}, {"code": "603377", "name": "ST东时", "price": 2.82, "change_pct": 4.83, "reason": "因涉嫌信披违法北京证监局拟对公司处以180万元罚款", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.67, "first_limit_up": 1782958637, "break_limit_up_times": 2}, {"code": "002020", "name": "京新药业", "price": 14.66, "change_pct": 9.98, "reason": "公司盐酸卡立哌嗪胶囊获药品注册证书", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.37, "first_limit_up": 1782955500, "break_limit_up_times": 0}, {"code": "600630", "name": "龙头股份", "price": 10.69, "change_pct": 9.98, "reason": "上海纺织集团旗下，公司主营进出口业务，拥有优质品牌三枪，境外收入占比近半", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 11.97, "first_limit_up": 1782956929, "break_limit_up_times": 3}, {"code": "002798", "name": "帝欧水华", "price": 5.56, "change_pct": 10.1, "reason": "公司为国内高端卫浴品牌企业", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.58, "first_limit_up": 1782956799, "break_limit_up_times": 0}, {"code": "000576", "name": "甘化科工", "price": 7.4, "change_pct": 9.96, "reason": "1、公司持有苏州锴威特半导体股份有限公司834.4816万股，占其总股本11.33%；\n2、控股子公司沈阳含能拥有军工相关资质，在钨合金预制破片领域具有相对稳定的竞争地位，与多家兵工厂建立了良好的合作关系，是部分常规炮弹及新型火箭弹预制破片的主要供应商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.81, "first_limit_up": 1782958101, "break_limit_up_times": 0}, {"code": "000520", "name": "凤凰航运", "price": 4.51, "change_pct": 10.0, "reason": "我国内河经营干散货专业化运输规模最大的企业，大股东旗下投资了二十余家企业", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 3.72, "first_limit_up": 1782955812, "break_limit_up_times": 4}, {"code": "300163", "name": "先锋新材", "price": 6.47, "change_pct": 20.04, "reason": "公司主营高分子复合遮阳材料(阳光面料)产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.65, "first_limit_up": 1782957480, "break_limit_up_times": 0}, {"code": "605020", "name": "永和股份", "price": 48.39, "change_pct": 10.0, "reason": "我国氟化工行业中产业链最完整的企业之一；公司主营业务为含氟化学产品的研产销，拥有3000吨/年的六氟环氧丙烷（HFPO）产能", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 12.67, "first_limit_up": 1782962451, "break_limit_up_times": 10}, {"code": "002696", "name": "百洋股份", "price": 5.64, "change_pct": 9.94, "reason": "公司为全球加工规模最大、国内领先的罗非鱼食品综合提供商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.09, "first_limit_up": 1782972882, "break_limit_up_times": 4}, {"code": "600243", "name": "*ST海华", "price": 3.47, "change_pct": 5.15, "reason": "1、子公司苏州江源“海洋平台用大型阀体数控加工设备”的验收获得江苏省科技进步三等奖1项；\n2、子公司青海华鼎齿轮箱有限责任公司目前涉及煤炭减速器生产，目前规模较小", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.0, "first_limit_up": 1782959218, "break_limit_up_times": 8}, {"code": "603897", "name": "长城科技", "price": 37.41, "change_pct": 10.0, "reason": "公司是国内电磁线种类最齐全的企业之一，主营业务为电磁线的研发产销；据机构研究，假设特斯拉人形机器人本体线束成本占BOM表总成本的5%，伺服电机线束价值量占单个伺服电机的12%，当特斯拉人形机器人出货量达到100万台时，有望带来90亿元增量市场", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.89, "first_limit_up": 1782956127, "break_limit_up_times": 1}, {"code": "002592", "name": "ST八菱", "price": 6.48, "change_pct": 5.02, "reason": "公司25年净利润同比增长67.06%", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.1, "first_limit_up": 1782957138, "break_limit_up_times": 1}, {"code": "600988", "name": "赤峰黄金", "price": 28.39, "change_pct": 10.0, "reason": "公司位于内蒙古赤峰境内，是国内矿产品位最高的金矿之一", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 4.04, "first_limit_up": 1782959674, "break_limit_up_times": 0}, {"code": "000632", "name": "ST三木", "price": 3.36, "change_pct": 5.0, "reason": "旗下控股子公司福建融达通供应链管理有限公司，是福州跨境电商公共服务平台、跨境电商保税监管物流中心主要运营方 ，为跨境电商提供一站式平台对接方案", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 3.73, "first_limit_up": 1782956046, "break_limit_up_times": 17}, {"code": "002198", "name": "ST嘉应", "price": 3.34, "change_pct": 5.03, "reason": "公司主导产品双料喉风散、重感灵片为国家中药保护品种", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.79, "first_limit_up": 1782956355, "break_limit_up_times": 0}, {"code": "002029", "name": "七 匹 狼", "price": 8.59, "change_pct": 9.99, "reason": "公司位于福建省晋江市，中国男装品牌的领先企业之一，控股股东持有沐曦集成股份比例0.39%", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.68, "first_limit_up": 1782968958, "break_limit_up_times": 0}, {"code": "600641", "name": "先导基电", "price": 48.24, "change_pct": 10.01, "reason": "公司拟增资控股先导微电子", "plates": ["国产芯片"], "limit_up_days": 3, "turnover_ratio": 7.38, "first_limit_up": 1782955501, "break_limit_up_times": 2}, {"code": "000972", "name": "中基健康", "price": 3.69, "change_pct": 10.15, "reason": "公司撤销退市风险警示", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 1.79, "first_limit_up": 1782957825, "break_limit_up_times": 0}, {"code": "000892", "name": "欢瑞世纪", "price": 3.8, "change_pct": 10.14, "reason": "1、公司与阶跃星辰共建“麟跃”AI联合实验室，已上线基于IP《十州三境》的首支AI短剧先导概念片，并持续推进AIGC在短剧、互动剧、漫剧等场景落地；\n2、公司通过与明略科技、阶跃星辰合作，用 AI 算法优化短剧投流渠道 / 素材 / 出价、社媒智能运营与 AIGC 营销素材生成，聚焦影视内容精准推广与降本增效", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 2.77, "first_limit_up": 1782955977, "break_limit_up_times": 0}, {"code": "000677", "name": "ST海龙", "price": 1.59, "change_pct": 5.3, "reason": "全资子公司拟收购群健航空不少于40%股权", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 5.1, "first_limit_up": 1782957573, "break_limit_up_times": 5}, {"code": "000700", "name": "模塑科技", "price": 16.87, "change_pct": 9.97, "reason": "公司与国内某机器人公司签订采购框架协议并正式获得人形机器人外覆盖件小批量订单，业务正式切入人形机器人赛道", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 12.39, "first_limit_up": 1782958170, "break_limit_up_times": 1}, {"code": "000909", "name": "*ST数源", "price": 4.15, "change_pct": 5.06, "reason": "全资子公司拟挂牌转让温岭祥泰27.5%股权", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 1.75, "first_limit_up": 1782956682, "break_limit_up_times": 5}, {"code": "002392", "name": "北京利尔", "price": 8.78, "change_pct": 10.03, "reason": "公司投资的曦望(Sunrise)是国产全栈自研芯片企业，专注于高性能GPU的研发与商业化，首代及第二代自研GPU产品已成功量产，可应用于数据中心建设，在性能、能效比等关键技术指标上具备优势", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.05, "first_limit_up": 1782959187, "break_limit_up_times": 1}, {"code": "000820", "name": "*ST节能", "price": 3, "change_pct": 4.9, "reason": "公司一季度业绩同比减亏", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 2.41, "first_limit_up": 1782955953, "break_limit_up_times": 1}, {"code": "603717", "name": "天域生物", "price": 6.66, "change_pct": 10.08, "reason": "公司生猪养殖业务主要采用自繁自养的经营模式进行生猪养殖和销售，并辅以与个体养殖户进行合作的养殖回收模式", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 5.17, "first_limit_up": 1782956670, "break_limit_up_times": 0}, {"code": "002586", "name": "ST围海", "price": 4.05, "change_pct": 4.92, "reason": "公司签署6.54亿元重大合同", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.82, "first_limit_up": 1782970815, "break_limit_up_times": 0}, {"code": "002931", "name": "锋龙股份", "price": 71.28, "change_pct": 10.0, "reason": "优必选受让控股股东所持29.99%股份", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.16, "first_limit_up": 1782957420, "break_limit_up_times": 0}, {"code": "603608", "name": "天创时尚", "price": 25.16, "change_pct": 10.01, "reason": "公司控股股东安徽先睿为轴承企业慈兴集团全资子公司，核心业务为机器人轴承与商业航天轴承两大板块", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.39, "first_limit_up": 1782961806, "break_limit_up_times": 0}, {"code": "002581", "name": "*ST未名", "price": 3.43, "change_pct": 4.89, "reason": "公司主要产品恩经复（神经生长因子），联营公司北京科兴致力于人用疫苗及其相关产品", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.77, "first_limit_up": 1782973977, "break_limit_up_times": 0}, {"code": "603505", "name": "金石资源", "price": 24.39, "change_pct": 10.01, "reason": "公司控股子公司金鄂博氟化工2025年度共生产无水氟化氢22.49万吨", "plates": ["氟化工"], "limit_up_days": 2, "turnover_ratio": 12.73, "first_limit_up": 1782962902, "break_limit_up_times": 4}, {"code": "603135", "name": "中重科技", "price": 13.73, "change_pct": 10.02, "reason": "公司主要产品为智能装备及生产线，产线中包含了智能打包机器人、智能标识机器人、拆辊机器人、码垛机器人等机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.92, "first_limit_up": 1782968477, "break_limit_up_times": 0}, {"code": "605199", "name": "ST葫芦娃", "price": 5.72, "change_pct": 4.95, "reason": "公司地处海南，以儿科用药为发展特色，主要产品为小儿肺热咳喘颗粒、注射用盐酸溴己新、复方板蓝根颗粒等", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.6, "first_limit_up": 1782957276, "break_limit_up_times": 0}, {"code": "600082", "name": "ST海泰", "price": 2.81, "change_pct": 4.85, "reason": "公司一季度业绩小幅减亏", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.53, "first_limit_up": 1782955882, "break_limit_up_times": 0}, {"code": "002977", "name": "*ST天箭", "price": 23.18, "change_pct": 4.98, "reason": "高波段、大功率固态微波前端产品供应商；主要代表产品为弹载固态发射机、新型相控阵产品及其他固态发射机产品，其在军事领域的应用包括雷达制导导弹精确制导系统、其它雷达系统、卫星通信和电子对抗等", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 0.37, "first_limit_up": 1782955500, "break_limit_up_times": 0}, {"code": "603822", "name": "ST嘉澳", "price": 71.6, "change_pct": 5.0, "reason": "公司生物柴油产能为30万吨", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.34, "first_limit_up": 1782955976, "break_limit_up_times": 3}, {"code": "000821", "name": "ST京机", "price": 8.04, "change_pct": 4.96, "reason": "公司称对太空光伏进行技术储备", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.39, "first_limit_up": 1782956106, "break_limit_up_times": 5}, {"code": "301019", "name": "宁波色母", "price": 21.53, "change_pct": 20.01, "reason": "公司个别塑料色母粒产品已用于下游3D打印生产厂家塑料部件着色", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.32, "first_limit_up": 1782957699, "break_limit_up_times": 0}, {"code": "605286", "name": "同力天启", "price": 28, "change_pct": 10.02, "reason": "2025年3月，公司与天启鸿源一起同甘肃省庆阳市人民政府成功签署战略合作框架协议，项目建成后， 储能电站将为庆阳“东数西算”产业园区的数据中心直供绿色电力，实现“算电协同”，并在保证供电可靠性的前提下，实现部分备用电源的功用，提高算力中心绿电占比，进一步降低算力中心能耗成本", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.52, "first_limit_up": 1782957594, "break_limit_up_times": 0}, {"code": "000595", "name": "宝塔实业", "price": 5.67, "change_pct": 10.1, "reason": "公司撤销退市风险警示，控股股东宁夏电投拟增持1500万元-3000万元公司股份", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 0.13, "first_limit_up": 1782955500, "break_limit_up_times": 0}, {"code": "002634", "name": "*ST棒杰", "price": 4.61, "change_pct": 5.01, "reason": "公司光伏业务子公司重整申请获受理", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1782973449, "break_limit_up_times": 0}, {"code": "300695", "name": "兆丰股份", "price": 60.37, "change_pct": 20.0, "reason": "据媒体报道，公司董事长曾经表示，公司新建年产100万只人形机器人滚柱丝杠项目在稳步推进", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.66, "first_limit_up": 1782973395, "break_limit_up_times": 0}, {"code": "600759", "name": "ST洲际", "price": 2.02, "change_pct": 5.21, "reason": "海南本地股，主营石油的勘探、开发和销售，油气行业的技术服务和物业租赁业务", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.28, "first_limit_up": 1782955500, "break_limit_up_times": 0}, {"code": "000601", "name": "韶能股份", "price": 7.08, "change_pct": 9.94, "reason": "公司预计上半年净利同比增长61.62%-103.33%，报告期内，公司清洁可再生能源业务通过开展“开源节流”各项工作，促使经营成果同比大幅增长", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 6.9, "first_limit_up": 1782955869, "break_limit_up_times": 1}, {"code": "600172", "name": "黄河旋风", "price": 18.03, "change_pct": 10.01, "reason": "公司自主研发的“金刚石—碳化硅复合材料”项目取得重大阶段性成果，核心性能指标达到国际先进水平，成功破解了长期困扰半导体产业的热膨胀失配难题，为我国高端半导体散热技术自主可控提供了关键支撑", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 18.54, "first_limit_up": 1782959853, "break_limit_up_times": 0}, {"code": "002512", "name": "ST达华", "price": 3.41, "change_pct": 4.92, "reason": "公司一季度净利润3643.11万元，同比增长194.24%", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.61, "first_limit_up": 1782957507, "break_limit_up_times": 3}, {"code": "002674", "name": "兴业科技", "price": 28.25, "change_pct": 10.01, "reason": "公司拟收购青岛立昂磷化铟衬底及半导体电子材料业务，切入光通信与算力光模块核心材料赛道", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 14.89, "first_limit_up": 1782970281, "break_limit_up_times": 11}, {"code": "002584", "name": "西陇科学", "price": 11, "change_pct": 10.0, "reason": "公司拥有光刻胶配套试剂产品，和英特尔产品（成都）有限公司，美维控股，兴森电子，信利半导体，超声电子、韩国东进世美肯公司等建立业务合作关系", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 23.48, "first_limit_up": 1782960516, "break_limit_up_times": 1}, {"code": "002971", "name": "和远气体", "price": 75.02, "change_pct": 10.0, "reason": "公司给长江存储、烽火科技、华星光电等光通信、半导体企业直接或间接供应氢气、氧气、氮气和氩气", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 15.14, "first_limit_up": 1782956457, "break_limit_up_times": 7}, {"code": "001319", "name": "铭科精技", "price": 22.09, "change_pct": 10.01, "reason": "公司在东莞市塘厦镇拿地新建相关产业项目，该项目建成后主要涉及到汽车五金模具、汽车零部件及人形机器人机械手臂总成等业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.03, "first_limit_up": 1782960333, "break_limit_up_times": 0}, {"code": "603359", "name": "*ST东珠", "price": 2.28, "change_pct": 5.07, "reason": "1、公司为迪洛斯战略股东，后者旗下具身机器人亮相，一款约20个自由度的陪伴类机器人；\n2、公司拟跨界并购凯睿星通，标的主要产品包括卫星通信基带产品、卫星通信终端产品、卫星通信网络管理系统及卫星应用系统等", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 2.81, "first_limit_up": 1782956446, "break_limit_up_times": 4}, {"code": "000908", "name": "石药景峰", "price": 6.25, "change_pct": 10.04, "reason": "公司致力于创新药物研发，拥有多个创新药项目", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.46, "first_limit_up": 1782955956, "break_limit_up_times": 0}, {"code": "001378", "name": "德冠新材", "price": 20.33, "change_pct": 10.01, "reason": "公司主要从事功能薄膜和功能母料", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.63, "first_limit_up": 1782957993, "break_limit_up_times": 0}, {"code": "301092", "name": "争光股份", "price": 58.91, "change_pct": 20.0, "reason": "1、公司开发的“ZGC650U”、“ZGA550U”等均粒树脂及“ZGUP8040”除硼树脂，关键指标已可对标美国杜邦、德国朗盛，正逐步应用于国内半导体及面板行业的超纯水制备系统；\n2、公司目前有产品应用于盐湖提锂纯化环节，正按照研发计划展开新型锂吸附材料的开发", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 15.45, "first_limit_up": 1782956136, "break_limit_up_times": 12}, {"code": "002842", "name": "翔鹭钨业", "price": 50.17, "change_pct": 10.0, "reason": "公司是国内钨行业具备完整产业链的企业之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 21.67, "first_limit_up": 1782959241, "break_limit_up_times": 1}, {"code": "000010", "name": "*ST美丽", "price": 1.88, "change_pct": 5.03, "reason": "公司在海南成立了算力运营公司，持股比例为32%，已开始运营，目前为智算中心设计、设备采购、施工和运营提供咨询和技术服务为主，逐渐扩充到调度服务和设备维保业务", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 3.33, "first_limit_up": 1782956037, "break_limit_up_times": 9}, {"code": "603429", "name": "*ST集友", "price": 8.81, "change_pct": 5.01, "reason": "国内较早烟用接装纸专业生产厂商之一；控股子公司集新能源固态电池关键材料研发中试基地正在建设，并与潜在客户进行技术对接、商务洽谈", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.41, "first_limit_up": 1782956512, "break_limit_up_times": 0}, {"code": "002250", "name": "联化科技", "price": 15.51, "change_pct": 10.0, "reason": "公司医药CDMO储备临床Ⅲ期产品30个，并与全球前二十大药企合作，服务专利期内创新药", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.07, "first_limit_up": 1782956511, "break_limit_up_times": 0}, {"code": "601010", "name": "ST文峰", "price": 1.53, "change_pct": 4.79, "reason": "公司主营超市零售，拟斥资8000万元至1.2亿元回购，用于员工持股计划或股权激励", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.25, "first_limit_up": 1782956535, "break_limit_up_times": 0}, {"code": "603538", "name": "美诺华", "price": 39.39, "change_pct": 10.0, "reason": "诺和诺德司美格鲁肽在中国的核心化合物专利到期；公司储备了减肥多肽类中间体，正在进行GLP-1的研发和技术的储备", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 4.13, "first_limit_up": 1782955870, "break_limit_up_times": 0}, {"code": "600084", "name": "*ST尼雅", "price": 4.04, "change_pct": 4.94, "reason": "公司主营葡萄酒生产和销售，通过西藏国中安信私募基金间接参股乐聚机器人", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.35, "first_limit_up": 1782959126, "break_limit_up_times": 0}, {"code": "002998", "name": "优彩资源", "price": 7.65, "change_pct": 10.07, "reason": "公司主营涤纶纤维及其制品，产品包括再生有色涤纶短纤维、低熔点涤纶短纤维和涤纶非织造布等；上半年净利润预计增长72.80%—122.17%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.59, "first_limit_up": 1782955500, "break_limit_up_times": 1}, {"code": "002431", "name": "ST棕榈", "price": 1.32, "change_pct": 4.76, "reason": "公司实际控制人变更为河南省国资委；公司通过产业基金参股英国西布朗足球俱乐部；体育产业项目上，公司积极在全国范围内参与体育公园、全民健身中心、公共体育场馆、体育特色小镇等体育产业项目的建设工作", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.19, "first_limit_up": 1782956754, "break_limit_up_times": 1}, {"code": "002559", "name": "亚威股份", "price": 15.38, "change_pct": 10.01, "reason": "1、参股公司威迈芯材正稳步推进光刻胶主材料产品的国产化进程，目前已经完成了国内客户订单的突破；威迈芯材全资子公司韩国WIMAS主要从事半导体高端光刻胶的核心主材料的研发、生产和销售；\n2、公司产品包含线性和水平多关节机器人", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 18.68, "first_limit_up": 1782956211, "break_limit_up_times": 0}, {"code": "603021", "name": "*ST华鹏", "price": 7.27, "change_pct": 5.06, "reason": "公司25年同比亏损扩大", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 2.37, "first_limit_up": 1782959837, "break_limit_up_times": 9}, {"code": "603416", "name": "信捷电气", "price": 59.87, "change_pct": 9.99, "reason": "公司已具备机器视觉核心零部件和系统解决方案、工业机器人、直线电机、智能机器人、智能工厂等软硬件技术、产品和系统解决方案，主要客户有：立讯精密、富士康、闻泰科技、信捷电气等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.74, "first_limit_up": 1782957729, "break_limit_up_times": 0}, {"code": "002102", "name": "ST能特", "price": 2.36, "change_pct": 4.89, "reason": "公司医药中间体业务的主要产品包括孟鲁司特钠中间体、他汀系列中间体、维生素E中间体等；全资子公司能特科技已成为了生产维生素E中间体的领军企业", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.71, "first_limit_up": 1782956709, "break_limit_up_times": 0}, {"code": "000566", "name": "海南海药", "price": 6.04, "change_pct": 10.02, "reason": "海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["医药"], "limit_up_days": 4, "turnover_ratio": 9.53, "first_limit_up": 1782955800, "break_limit_up_times": 1}, {"code": "000838", "name": "*ST发展", "price": 1.69, "change_pct": 4.97, "reason": "重庆地区优质地产商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.5, "first_limit_up": 1782956508, "break_limit_up_times": 9}, {"code": "000592", "name": "平潭发展", "price": 7.76, "change_pct": 10.07, "reason": "A股唯一一家注册在平潭岛的上市公司，公司拥有90万亩林地，受益林业碳汇交易发展", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.45, "first_limit_up": 1782956364, "break_limit_up_times": 0}, {"code": "603261", "name": "立航科技", "price": 49.56, "change_pct": 10.01, "reason": "我国军机地面保障设备主要供应商，在低空经济相关业务中涉及无人机相关业务", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.03, "first_limit_up": 1782959117, "break_limit_up_times": 1}, {"code": "603559", "name": "中通国脉", "price": 9.01, "change_pct": 10.01, "reason": "公司7月2日起复牌并撤销其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 4.03, "first_limit_up": 1782957634, "break_limit_up_times": 0}, {"code": "002689", "name": "ST远智", "price": 2.71, "change_pct": 5.04, "reason": "公司预计2025年净利同比增长396.77%-507.16%", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.13, "first_limit_up": 1782973722, "break_limit_up_times": 0}, {"code": "001313", "name": "粤海饲料", "price": 8.58, "change_pct": 10.0, "reason": "全资子公司湛江粤海水产有限公司经营有条冻、淡晒金鲳鱼、黄花鱼等水产品及水产品预制菜", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 4.72, "first_limit_up": 1782968469, "break_limit_up_times": 0}, {"code": "600753", "name": "ST海钦", "price": 11.41, "change_pct": 4.97, "reason": "公司一季度业绩同比扭亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.03, "first_limit_up": 1782960343, "break_limit_up_times": 3}, {"code": "000639", "name": "ST西王", "price": 1.22, "change_pct": 5.17, "reason": "公司高管拟增持300万至600万元", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 2.46, "first_limit_up": 1782955500, "break_limit_up_times": 1}, {"code": "603790", "name": "雅运股份", "price": 24.89, "change_pct": 9.99, "reason": "公司主要从事中高端染料和纺织助剂的研产销，此前受让浙江容腾基金份额0.8333%，后者投资了宇树科技", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.55, "first_limit_up": 1782957118, "break_limit_up_times": 0}, {"code": "002354", "name": "天娱数科", "price": 10.34, "change_pct": 10.0, "reason": "1、参股公司芯明发布自研3D视觉AI模组R216g，内置空间智能芯片提供3.5 TOPS端侧算力，专为人形机器人、灵巧手及协作臂设计；\n2、公司拥有智者千问、天星、智慧广告三款企业级大模型，推进具身智能平台建设，完成“人形机器人空间6D动捕长程数据”等5个数据集资产登记，积累超120万条3D数据及10万机器人任务训练数据，为相关场景提供解决方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.32, "first_limit_up": 1782955803, "break_limit_up_times": 0}, {"code": "603338", "name": "浙江鼎力", "price": 46.97, "change_pct": 10.0, "reason": "全球高空作业设备制造商龙头，具备军工相关认证证书，船身/船底除锈、喷涂机器人批量发货", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.08, "first_limit_up": 1782968438, "break_limit_up_times": 1}, {"code": "600490", "name": "鹏欣资源", "price": 6.44, "change_pct": 10.09, "reason": "公司主营黄金、铜、钴及其他金属矿产资源的勘探、开采、冶炼加工及相关产品销售，旗下拥有南非奥尼金矿和TAU矿等，合计黄金储量达651.5吨", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 4.11, "first_limit_up": 1782974164, "break_limit_up_times": 0}, {"code": "002569", "name": "*ST步森", "price": 15.52, "change_pct": 5.01, "reason": "公司25年净利润同比扭亏为盈", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 0.45, "first_limit_up": 1782955500, "break_limit_up_times": 0}, {"code": "603926", "name": "铁流股份", "price": 19.26, "change_pct": 9.99, "reason": "公司空心电机轴处在客户产品开发阶段，子公司广东中配互联网科技公司在云计算、BI分析、智能机器人等方面已进行投入", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.64, "first_limit_up": 1782956802, "break_limit_up_times": 0}, {"code": "000656", "name": "金科股份", "price": 1.18, "change_pct": 10.28, "reason": "公司撤销退市风险警示及其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 0.08, "first_limit_up": 1782955500, "break_limit_up_times": 0}, {"code": "600537", "name": "*ST亿晶", "price": 2.75, "change_pct": 4.96, "reason": "公司预重整工作正在有序推进，主要业务范围集中在电池制备、组件封装、光伏发电等环节，现有5GW电池和5GW组件产能", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.71, "first_limit_up": 1782970779, "break_limit_up_times": 8}, {"code": "002995", "name": "天地在线", "price": 19.68, "change_pct": 10.01, "reason": "公司在自身数字营销及虚拟数字业务的基础上，已尝试在AI数字人、企业AI助手等应用产品上探索布局，参股公司世优科技推出“世优波塔A 数字人智能体已与Deepseek的通用人工智能(AGI)能力结合", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 5.79, "first_limit_up": 1782955953, "break_limit_up_times": 0}, {"code": "603272", "name": "*ST联翔", "price": 26.43, "change_pct": 5.01, "reason": "A股首家墙布上市企业，控股股东拟协议转让5%股份", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 2.31, "first_limit_up": 1782955501, "break_limit_up_times": 1}, {"code": "600815", "name": "厦工股份", "price": 2.89, "change_pct": 9.89, "reason": "实控人厦门国资委，中国最大的工程机械制造基地之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1782956726, "break_limit_up_times": 0}, {"code": "603273", "name": "天元智能", "price": 14.47, "change_pct": 10.04, "reason": "公司主要为生产蒸压加气混凝土制品的绿色环保建材企业提供生产装备及自动化整线解决方案，持股聚通领先（江苏）智能装备公司，经营范围包含工业机器人制造、工业自动控制系统装置制造等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.04, "first_limit_up": 1782956588, "break_limit_up_times": 0}, {"code": "001317", "name": "三羊马", "price": 44.03, "change_pct": 9.99, "reason": "公司布局无人车物流，并为小米景明科技有限公司的承运商之一，与重庆东风小康汽车销售有限公司及其关联方有汽车整车综合物流服务业务合作", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.45, "first_limit_up": 1782962229, "break_limit_up_times": 0}, {"code": "600449", "name": "宁夏建材", "price": 12.39, "change_pct": 10.04, "reason": "公司数据中心已入驻30家单位、上云系统118个，计算能力超5.5万核VCPU，110KV变电站项目在建，为数字服务扩容提供硬件支撑", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.1, "first_limit_up": 1782961826, "break_limit_up_times": 1}, {"code": "000890", "name": "法尔胜", "price": 9.02, "change_pct": 10.0, "reason": "1、参股的普天法尔胜光通信有限公司主要产品为光纤预制棒、光纤、光缆，上述产品可以应用于在运营商基础网络通信及广播电视通信领域；\n2、公司成功推出了性能优良的熊猫型保偏光纤，产品成功应用于神州七号和天宫一号等国家重大特大型号任务中；\n3、公司深度参与特种电缆及电力基础设施建设，在“算电协同”及智能电网升级背景下，其电力传输与配套特种金属材料是储能电站及数据中心电力传输等底层刚需环节", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1782956154, "break_limit_up_times": 0}, {"code": "002360", "name": "ST同德", "price": 5.19, "change_pct": 5.06, "reason": "公司被申请重整，将开展重整投资人招募等工作", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 2.15, "first_limit_up": 1782955500, "break_limit_up_times": 2}, {"code": "605189", "name": "富春染织", "price": 14.59, "change_pct": 10.03, "reason": "公司投资10亿元建设PEEK材料人形机器人轻量化与半导体精密注塑项目，已投产并获行星减速器公司样件订单，切入机器人轻量化赛道", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 10.64, "first_limit_up": 1782970491, "break_limit_up_times": 0}, {"code": "600180", "name": "*ST瑞茂", "price": 1.38, "change_pct": 5.34, "reason": "大宗能源商品供应链综合服务商，煤炭供应链业务是公司核心业务板块。", "plates": ["ST股"], "limit_up_days": 5, "turnover_ratio": 0.32, "first_limit_up": 1782955501, "break_limit_up_times": 0}, {"code": "603580", "name": "艾艾精工", "price": 27.39, "change_pct": 10.0, "reason": "公司撤销退市风险警示", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 2.39, "first_limit_up": 1782957813, "break_limit_up_times": 1}, {"code": "000536", "name": "华映科技", "price": 4.06, "change_pct": 10.03, "reason": "公司地处福州，主要从事LCD显示面板、液晶模组的研产销，已成功进入传音、联想、三星、 vivo、 HMD(诺基亚)、中兴、华为、荣耀等世界知名品牌的供应商体系", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 5.85, "first_limit_up": 1782957078, "break_limit_up_times": 0}, {"code": "600107", "name": "*ST尔雅", "price": 5.92, "change_pct": 4.96, "reason": "公司为国内职业装行业龙头之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.9, "first_limit_up": 1782959957, "break_limit_up_times": 0}, {"code": "002427", "name": "尤夫股份", "price": 5.3, "change_pct": 9.96, "reason": "1、公司以高性能纤维切入海洋经济领域，核心产品拒海水聚酯工业丝通过DNV、ABS船级社认证，适配船舶、海洋钻井、海上风电系泊缆绳等场景，能抵御海水侵蚀，保障海洋作业安全；\n2、根据测算，卫星每成功减重20公斤，就能节省800万元发射成本，UHMWPE纤维在减重方面极具优势；公司在建UHMWPE项目设计产能为1600吨/年，大股东为陕西国资委", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.8, "first_limit_up": 1782956367, "break_limit_up_times": 0}, {"code": "300071", "name": "福石控股", "price": 4.4, "change_pct": 19.89, "reason": "1、公司在数字营销领域的深耕积累了大量优质客户，与抖音、小红书、B站等平台有持续的合作；\n2、公司AI智能客服平台以5G消息为承载，打造Chatbot平台，为企业客户提供AI智能聊天机器人，及一键接入全通道的能力", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 17.85, "first_limit_up": 1782955935, "break_limit_up_times": 1}, {"code": "603337", "name": "杰克科技", "price": 39.55, "change_pct": 10.01, "reason": "公司为工业缝制机龙头，高端AI缝纫机原型样机成功落地，“杰克1号”人形机器人、无人模板机等“机器人+AI人工智能+缝制机械”多技术融合的智能高端产品初具雏形", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.2, "first_limit_up": 1782958602, "break_limit_up_times": 0}, {"code": "002596", "name": "海南瑞泽", "price": 3.23, "change_pct": 9.86, "reason": "海南本地股，主营商品混凝土、新型墙体材料与水泥的生产与销售以及园林绿化业务，大股东所持部分股份将被司法拍卖", "plates": ["海南自由贸易港"], "limit_up_days": 1, "turnover_ratio": 2.17, "first_limit_up": 1782956799, "break_limit_up_times": 0}, {"code": "603789", "name": "ST星农", "price": 6.05, "change_pct": 5.03, "reason": "公司控股股东拟变更为玖元亨通", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.03, "first_limit_up": 1782955501, "break_limit_up_times": 0}, {"code": "002726", "name": "ST龙大", "price": 1.28, "change_pct": 4.92, "reason": "公司下修转股价格议案遭否决", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.24, "first_limit_up": 1782957081, "break_limit_up_times": 4}, {"code": "600156", "name": "华升股份", "price": 9.53, "change_pct": 10.05, "reason": "公司拟6.62亿元购买易信科技97.40%股份，标的公司深耕AIDC领域，业务涉及智算中心双冷源阶梯冷却技术；一季报业绩同比减亏", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.91, "first_limit_up": 1782957565, "break_limit_up_times": 0}, {"code": "000506", "name": "招金黄金", "price": 12.61, "change_pct": 10.03, "reason": "公司主要业务包括以黄金为主要品种的矿业开采", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 5.66, "first_limit_up": 1782959751, "break_limit_up_times": 0}, {"code": "600480", "name": "凌云股份", "price": 9.24, "change_pct": 10.0, "reason": "1、公司六维力传感器入围工信部人形机器人揭榜挂帅项目，已建成专业产线并向多家机器人厂商送样；\n2、公司数据中心液冷解决方案实现散热全栈覆盖，产品已用于储能、充电站、数据中心，并配套宁德时代", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1782971093, "break_limit_up_times": 0}, {"code": "601718", "name": "ST际华", "price": 1.59, "change_pct": 5.3, "reason": "中国军队、武警部队军需品采购的核心供应商；公司具备核污染防治相关技术储备和产业基础，核污染防护产品有全套核污染防护服、鞋等", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.74, "first_limit_up": 1782956364, "break_limit_up_times": 0}, {"code": "002122", "name": "ST汇洲", "price": 2.43, "change_pct": 5.19, "reason": "子公司北京热热文化科技的数据标注业务快速发展", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.03, "first_limit_up": 1782957762, "break_limit_up_times": 1}, {"code": "000711", "name": "ST京蓝", "price": 5.01, "change_pct": 5.03, "reason": "公司一季度净利润同比增长171.81%", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 1.86, "first_limit_up": 1782955500, "break_limit_up_times": 1}, {"code": "600491", "name": "ST龙元", "price": 1.02, "change_pct": 5.15, "reason": "长三角建筑市场最大的民营施工企业之一", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.32, "first_limit_up": 1782955501, "break_limit_up_times": 0}, {"code": "000698", "name": "ST沈化", "price": 3.29, "change_pct": 5.11, "reason": "公司主要从事氯碱、石油、聚醚多元醇等化工产品", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.22, "first_limit_up": 1782957177, "break_limit_up_times": 7}, {"code": "603759", "name": "XD海天股", "price": 7.65, "change_pct": 10.07, "reason": "公司与通威太阳能签署战略合作协议，双方将在光伏电池浆料领域开展深度合作，包括HJT、TOPCon、钙钛矿等新型浆料的研发与应用，并建立共同研发及知识产权共享机制", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 2.66, "first_limit_up": 1782972661, "break_limit_up_times": 0}, {"code": "605055", "name": "迎丰股份", "price": 11.14, "change_pct": 9.97, "reason": "公司主营纺织品印染加工，参股的北京智同精密传动主营产品为工业机器人关节用高精密减速器，致力于面向机器人企业提供标准化产品，并提供高精密减速器研发、定制与升级服务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.6, "first_limit_up": 1782957527, "break_limit_up_times": 0}, {"code": "000078", "name": "ST海王", "price": 1.42, "change_pct": 5.19, "reason": "全国性医药商业企业中业务网络覆盖面较广的企业之一，医药商业规模全国第八", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.32, "first_limit_up": 1782955866, "break_limit_up_times": 1}, {"code": "002667", "name": "*ST威领", "price": 11.84, "change_pct": 4.96, "reason": "公司业务主要包括锂矿选矿、基础性锂电原料锂盐加工及冶炼业务等，通过收购嘉宇矿业74.3%股权，新增钨锡铅锌矿开采业务", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.12, "first_limit_up": 1782955500, "break_limit_up_times": 0}, {"code": "002693", "name": "双成药业", "price": 10.67, "change_pct": 10.0, "reason": "公司主营多肽药业务，一季度业绩同比扭亏", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.82, "first_limit_up": 1782971523, "break_limit_up_times": 0}, {"code": "601678", "name": "滨化股份", "price": 7.7, "change_pct": 10.0, "reason": "1、国内最大的食品级烧碱生产企业，粒碱生产龙头；公司电子级氢氟酸设计产能为0.6万吨/年，六氟磷酸锂设计产能0.1万吨/年；\n2、公司主营业务涵盖氯碱化学品、碳三碳四、湿电子化学品三大板块，拥有合计51万吨/年的环氧丙烷产能，是目前国内最大的民营环氧丙烷生产商", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 11.41, "first_limit_up": 1782957007, "break_limit_up_times": 0}, {"code": "000016", "name": "*ST康佳A", "price": 2.54, "change_pct": 4.96, "reason": "公司PCB业务为2025年唯一营收同比上涨板块", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 1.44, "first_limit_up": 1782955500, "break_limit_up_times": 6}, {"code": "600182", "name": "S佳通", "price": 14.15, "change_pct": 4.97, "reason": "公司股改方案仍未确定，非流通股股东尚未达成共识", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.2, "first_limit_up": 1782956556, "break_limit_up_times": 1}, {"code": "002458", "name": "益生股份", "price": 9.41, "change_pct": 10.06, "reason": "公司是国内最大的祖代白羽肉种鸡养殖企业，另外拥有种猪和商品猪的饲养和销售业，预计中报净利润为2.7亿-3亿，同比增长4287%-4774%，主要系“白羽肉鸡行业景气度上行，公司主营的白羽肉鸡业务量价齐升，整体盈利水平显著增长。”", "plates": ["养猪", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 10.83, "first_limit_up": 1782955857, "break_limit_up_times": 8}, {"code": "301008", "name": "宏昌科技", "price": 31.93, "change_pct": 19.99, "reason": "1、公司控股的良质关节主营谐波减速器、行星减速器及关节模组，现有东莞、平湖两大基地合计关节模组年产能约30万台，目前在手对接项目近20多个；\n2、公司间接参股张雪机车", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 15.06, "first_limit_up": 1782958185, "break_limit_up_times": 1}, {"code": "002005", "name": "ST德豪", "price": 2.43, "change_pct": 5.19, "reason": "公司2025年扭亏为盈", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.35, "first_limit_up": 1782955881, "break_limit_up_times": 2}, {"code": "002542", "name": "*ST中岩", "price": 1.25, "change_pct": 5.04, "reason": "公司的强夯机与盾构机等专用设备制造、地基处理、基坑支护、 地下连续墙、盾构掘进、矩形顶管等施工工艺技术保持国内领先国际先进水平", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.68, "first_limit_up": 1782955836, "break_limit_up_times": 0}, {"code": "600624", "name": "ST复华", "price": 3.59, "change_pct": 4.97, "reason": "公司此前与本源量子签署战略合作协议，共谋量子计算产业发展，本源量子源自中国科学技术大学和中国科学院量子信息重点实验室，是中国首家量子计算企业，中国首家可交付量子计算机工程机的企业，建设了中国第一条量子芯片生产线", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.15, "first_limit_up": 1782957060, "break_limit_up_times": 8}, {"code": "002547", "name": "*ST春兴", "price": 2.63, "change_pct": 5.2, "reason": "公司研发项目包括机器人取代人工上下料技术的研发", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 3.97, "first_limit_up": 1782955500, "break_limit_up_times": 6}, {"code": "600581", "name": "*ST八钢", "price": 2.29, "change_pct": 5.05, "reason": "公司拟剥离焦煤集团至控股股东", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.05, "first_limit_up": 1782956517, "break_limit_up_times": 2}, {"code": "603638", "name": "艾迪精密", "price": 25.87, "change_pct": 9.99, "reason": "公司RV减速机已经实现规模化生产", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.27, "first_limit_up": 1782958931, "break_limit_up_times": 1}, {"code": "603557", "name": "*ST起步", "price": 4.2, "change_pct": 5.0, "reason": "公司获捐赠资产，标的营收利润远超上市公司", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.39, "first_limit_up": 1782955856, "break_limit_up_times": 0}, {"code": "002305", "name": "*ST南置", "price": 1.91, "change_pct": 4.95, "reason": "公司战略转型综合性城市运营服务商", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.59, "first_limit_up": 1782955857, "break_limit_up_times": 3}, {"code": "605488", "name": "福莱新材", "price": 34.32, "change_pct": 10.0, "reason": "1、电子皮肤在人形机器人用途有身体关节的防碰撞、灵巧手等，公司全资子公司浙江欧仁新材料拥有传感器专利，分别是基于柔性压敏元件的拉伸传感器、一种柔性温度传感器及其制备方法等；\n2、目前公司电子级功能材料主要应用于苹果、华为、三星及国内知名高端品牌手机的无线充电模组及石墨散热模块", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 7.55, "first_limit_up": 1782958166, "break_limit_up_times": 3}, {"code": "603137", "name": "恒尚节能", "price": 15.65, "change_pct": 9.98, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 0.2, "first_limit_up": 1782955501, "break_limit_up_times": 0}, {"code": "600793", "name": "宜宾纸业", "price": 14.55, "change_pct": 9.98, "reason": "西南最大的食品包装原纸生产企业；公司主营业务有食品包装原纸、生活用纸原纸以及生活用纸成品纸的生产和销售", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 2.51, "first_limit_up": 1782955894, "break_limit_up_times": 0}, {"code": "002856", "name": "*ST美芝", "price": 21.29, "change_pct": 4.98, "reason": "公司主要业务为建筑装饰工程的设计与施工，承接项目类型主要有公共建筑装饰、住宅精装修和幕墙装饰；一季报净利润同比减亏", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 2.04, "first_limit_up": 1782955500, "break_limit_up_times": 3}, {"code": "300740", "name": "水羊股份", "price": 22.27, "change_pct": 19.99, "reason": "公司拥有轻医美品牌HPH", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.97, "first_limit_up": 1782962628, "break_limit_up_times": 2}, {"code": "002652", "name": "扬子新材", "price": 4.61, "change_pct": 10.02, "reason": "公司有多款产品可满足于半导体洁净室的不同需求", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.59, "first_limit_up": 1782957246, "break_limit_up_times": 0}, {"code": "002109", "name": "ST兴化", "price": 2.66, "change_pct": 5.14, "reason": "公司主要产品为以煤为原料制成的合成氨、甲醇、甲胺及DMF，全资子公司兴化化工具备30万吨/年甲醇产能", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.37, "first_limit_up": 1782956013, "break_limit_up_times": 4}, {"code": "002826", "name": "易明医药", "price": 18.18, "change_pct": 9.98, "reason": "聚焦心血管、糖尿病等慢性病的中药企业", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 3.84, "first_limit_up": 1782955935, "break_limit_up_times": 6}, {"code": "600165", "name": "ST宁科", "price": 2.75, "change_pct": 4.96, "reason": "法院裁定受理子公司恒力国贸重整", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.91, "first_limit_up": 1782957044, "break_limit_up_times": 0}, {"code": "600423", "name": "*ST柳化", "price": 2.48, "change_pct": 5.08, "reason": "柳州市国资委旗下，广西最大的化肥化工生产企业之一", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.67, "first_limit_up": 1782956645, "break_limit_up_times": 0}, {"code": "603928", "name": "兴业股份", "price": 15.84, "change_pct": 10.0, "reason": "公司已研发成功半导体光刻胶用酚醛树脂、特种半导体封装用酚醛树脂等一批特种有机合成功能新材料", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.84, "first_limit_up": 1782956965, "break_limit_up_times": 0}, {"code": "002620", "name": "*ST瑞和", "price": 5.63, "change_pct": 5.04, "reason": "公司能否进入重整程序存在重大不确定性", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 2.39, "first_limit_up": 1782955950, "break_limit_up_times": 5}, {"code": "000951", "name": "中国重汽", "price": 21.84, "change_pct": 10.03, "reason": "公司为国内重卡龙头之一，与天津港、主线科技携手打造的全球首款L4级无人驾驶电动卡车已于2018年在天津港投入运营，目前亦有多款智能驾驶产品已在港口、矿区等特定应用场景实现商业化运营", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.76, "first_limit_up": 1782968745, "break_limit_up_times": 0}, {"code": "002979", "name": "雷赛智能", "price": 63.23, "change_pct": 10.0, "reason": "国内智能装备运动控制领域龙头，预计中报净利润同比增长55%-65%，因“报告期内，公司业务订单情况有较大好转，叠加公司持续加大对重点战略性行业以及新兴业务领域的市场开拓力度，相关业务收入贡献逐步提升，对整体业绩形成积极带动。公司在新兴业务与第二增长曲线，也取得较大突破与显著增长。”", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.59, "first_limit_up": 1782955500, "break_limit_up_times": 0}, {"code": "002175", "name": "*ST东智", "price": 2.49, "change_pct": 5.06, "reason": "公司控制权拟变更，碳基新材料商东泰能源欲以5.47亿元入主", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 0.09, "first_limit_up": 1782955500, "break_limit_up_times": 0}, {"code": "600119", "name": "*ST长投", "price": 4.7, "change_pct": 4.91, "reason": "公司年报及一季报业绩同比减亏", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.12, "first_limit_up": 1782956557, "break_limit_up_times": 16}, {"code": "000955", "name": "欣龙控股", "price": 4.91, "change_pct": 10.09, "reason": "海南本地股，主营水刺、热轧、浆点等无纺布卷材产品及其后加工产品，公司在海南老城经济开发区拥有的近1000亩土地证载尚为工业用地", "plates": ["海南自由贸易港"], "limit_up_days": 1, "turnover_ratio": 2.2, "first_limit_up": 1782956463, "break_limit_up_times": 0}, {"code": "002258", "name": "利尔化学", "price": 13.83, "change_pct": 10.02, "reason": "1、控股股东久远集团及其一致行动人化材科技拟转让合计23.50%股份的公开征集期结束，共有10家意向受让方提交申请并足额缴纳保证金，转让实施可能导致公司控股股东及实控人发生变更；\n2、国内草铵膦、毕克草和毒莠定龙头（除草剂），毕克草和毒莠定原药产销量全国第一、全球第二，同时也是国内最大规模的草铵膦原药生产企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.0, "first_limit_up": 1782968691, "break_limit_up_times": 0}, {"code": "002580", "name": "圣阳股份", "price": 22.18, "change_pct": 10.02, "reason": "公司在数据中心IDC电源及液冷解决方案方面已推出全浸没液冷方舱解决方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 16.28, "first_limit_up": 1782962721, "break_limit_up_times": 0}, {"code": "603517", "name": "ST绝味", "price": 10.4, "change_pct": 5.05, "reason": "国内规模最大、拥有门店数量最多的休闲卤制食品连锁企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.28, "first_limit_up": 1782972787, "break_limit_up_times": 0}, {"code": "603778", "name": "国晟科技", "price": 12.89, "change_pct": 9.98, "reason": "全球前三大异质结产品制造商；消息称公司近期成功为某商业航天公司6U立方卫星提供HJT光伏系统，单星输出功率15W，较砷化镓方案效率提升18%、重量减轻25%，且已稳定运行超1年", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 6.37, "first_limit_up": 1782956583, "break_limit_up_times": 1}, {"code": "002656", "name": "*ST摩登", "price": 2.96, "change_pct": 4.96, "reason": "公司计划申请撤销退市风险警示", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.36, "first_limit_up": 1782955908, "break_limit_up_times": 0}];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "ST/风险警示股", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};