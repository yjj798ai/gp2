const UPDATE_TIME = "2026-07-02 02:47";
const THS_HOT = [
  {
    "name": "2026中报预增",
    "rise": 5.18,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "创新药",
    "rise": -0.31,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续69天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -1.37,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续192天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.91,
    "rate": 0,
    "tag": "",
    "hotTag": "连续239天上榜",
    "rankChg": 1,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "猪肉",
    "rise": -0.46,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "人形机器人",
    "rise": 1.78,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续403天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": -0.14,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续62天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "ST板块",
    "rise": 2.59,
    "rate": 0,
    "tag": "56家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "商业航天",
    "rise": 0.12,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续168天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "AI应用",
    "rise": -0.07,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "玻璃基板",
    "rise": -4.67,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": -2,
    "etfName": "半导体设备ETF",
    "code": "886111"
  },
  {
    "name": "机器人概念",
    "rise": 1.1,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "连续70天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "算力租赁",
    "rise": -0.27,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续103天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光纤概念",
    "rise": -1.36,
    "rate": 0,
    "tag": "",
    "hotTag": "连续68天上榜",
    "rankChg": 0,
    "etfName": "G60创新ETF",
    "code": "886084"
  },
  {
    "name": "氟化工概念",
    "rise": 2.01,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "化工行业ETF",
    "code": "885551"
  },
  {
    "name": "先进封装",
    "rise": -0.8,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续32天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "芯片概念",
    "rise": -0.15,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "连续63天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "培育钻石",
    "rise": 3.51,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "海南自贸区",
    "rise": 2.86,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 2,
    "etfName": "旅游ETF",
    "code": "885894"
  },
  {
    "name": "光刻胶",
    "rise": 0.27,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "半导体设备ETF",
    "code": "885864"
  }
];
const THS_EVENTS = [
  {
    "title": "特斯拉量产临近，机器人板块还能回归市场主线吗？",
    "desc": "",
    "heat": 324711,
    "direction": "特斯拉机器人",
    "themes": [
      "特斯拉概念",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "三瑞智能",
        "code": "301696",
        "chg": 19.996616
      }
    ]
  },
  {
    "title": "巨头抢购电子级氢氟酸 部分供货商年内已涨价三成",
    "desc": "",
    "heat": 318085,
    "direction": "无水氢氟酸",
    "themes": [
      "无水氢氟酸"
    ],
    "stocks": [
      {
        "name": "金石资源",
        "code": "603505",
        "chg": 7.938656
      }
    ]
  },
  {
    "title": "Meta Platforms(META.US)筹划进军云计算市场",
    "desc": "",
    "heat": 88111,
    "direction": "算力租赁",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "海达尔",
        "code": "920699",
        "chg": 14.053589
      }
    ]
  },
  {
    "title": "日月光宣布再度调涨封装报价 最高涨幅超过20%",
    "desc": "",
    "heat": 57896,
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
    "title": "密集发射催化 长征十号乙首飞在即",
    "desc": "",
    "heat": 49216,
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
        "chg": 8.755622
      }
    ]
  },
  {
    "title": "机构称玻璃基板从“概念”走向“量产共识” 新型能源规划开启3亿千瓦储能新周期",
    "desc": "",
    "heat": 17206,
    "direction": "玻璃基板",
    "themes": [
      "玻璃基板"
    ],
    "stocks": [
      {
        "name": "赛微电子",
        "code": "300456",
        "chg": 2.49775
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄金",
    "change": "+6.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+5.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+4.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+3.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "制冷剂",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+3.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "异丙醇",
    "change": "+3.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业母机",
    "change": "+3.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "培育钻石",
    "change": "+3.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "稀土磁材",
    "change": "+3.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "耐火材料",
    "change": "+3.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PEEK材料",
    "change": "+3.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减速器",
    "change": "+3.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "海南概念",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "轮边电机",
    "change": "+3.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电梯",
    "change": "+3.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超级高铁",
    "change": "+2.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "挖掘机",
    "change": "+2.88%",
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
    "hot_rank_chg": -1,
    "stock_cnt": 5847,
    "price": "8.41",
    "change": "-4.11",
    "market_id": "33",
    "circulate_market_value": "297083930000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.56
      },
      {
        "name": "手机产业链",
        "change_pct": 0.02
      },
      {
        "name": "超高清视频",
        "change_pct": -0.24
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.36
      },
      {
        "name": "半导体",
        "change_pct": -0.79
      },
      {
        "name": "人工智能",
        "change_pct": 0.09
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.13
      },
      {
        "name": "VR&AR",
        "change_pct": -0.74
      },
      {
        "name": "OLED",
        "change_pct": -1.05
      },
      {
        "name": "京津冀",
        "change_pct": -0.04
      },
      {
        "name": "物联网",
        "change_pct": 0.1
      },
      {
        "name": "指纹识别",
        "change_pct": -1.19
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.0
      },
      {
        "name": "白马股",
        "change_pct": -0.57
      },
      {
        "name": "智能制造",
        "change_pct": 1.18
      },
      {
        "name": "小米概念股",
        "change_pct": 0.17
      },
      {
        "name": "国产芯片",
        "change_pct": -0.53
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.93
      },
      {
        "name": "全息概念",
        "change_pct": 0.55
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.0
      },
      {
        "name": "MicroLED",
        "change_pct": -2.09
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.76
      },
      {
        "name": "智能手表",
        "change_pct": -0.16
      },
      {
        "name": "MiniLED",
        "change_pct": -1.68
      },
      {
        "name": "传感器",
        "change_pct": 0.79
      },
      {
        "name": "大硅片",
        "change_pct": -3.13
      },
      {
        "name": "AI PC",
        "change_pct": -0.06
      },
      {
        "name": "华为产业链",
        "change_pct": -0.0
      },
      {
        "name": "回购",
        "change_pct": 0.14
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.27
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.3
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 7,
    "hot_rank_chg": -1,
    "stock_cnt": 5847,
    "price": "7.48",
    "change": "-3.98",
    "market_id": "17",
    "circulate_market_value": "92722747000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.04
      },
      {
        "name": "核电",
        "change_pct": 0.79
      },
      {
        "name": "强势人气股",
        "change_pct": 1.26
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.94
      },
      {
        "name": "水电",
        "change_pct": -0.54
      },
      {
        "name": "火电",
        "change_pct": -1.3
      },
      {
        "name": "光伏",
        "change_pct": -0.11
      },
      {
        "name": "风电",
        "change_pct": 0.48
      },
      {
        "name": "国企改革",
        "change_pct": 0.14
      },
      {
        "name": "算电协同",
        "change_pct": 0.08
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 10,
    "hot_rank_chg": 5,
    "stock_cnt": 5847,
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
        "change_pct": 0.51
      },
      {
        "name": "电竞",
        "change_pct": 0.59
      },
      {
        "name": "手游",
        "change_pct": 0.58
      },
      {
        "name": "强势人气股",
        "change_pct": 1.26
      },
      {
        "name": "人工智能",
        "change_pct": 0.09
      },
      {
        "name": "游戏",
        "change_pct": 0.01
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.06
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.13
      },
      {
        "name": "快手概念股",
        "change_pct": 0.83
      },
      {
        "name": "元宇宙",
        "change_pct": 0.54
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.66
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.34
      },
      {
        "name": "web3.0",
        "change_pct": 0.99
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.51
      },
      {
        "name": "数据要素",
        "change_pct": -0.07
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.9
      },
      {
        "name": "AI营销",
        "change_pct": 1.71
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.37
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.26
      },
      {
        "name": "人工智能大模型",
        "change_pct": -0.28
      },
      {
        "name": "人形机器人",
        "change_pct": 2.37
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.93
      },
      {
        "name": "多模态",
        "change_pct": 0.57
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.97
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.48
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 13,
    "hot_rank_chg": -3,
    "stock_cnt": 5847,
    "price": "5.74",
    "change": "-6.21",
    "market_id": "33",
    "circulate_market_value": "109626557000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.52
      },
      {
        "name": "手机产业链",
        "change_pct": 0.05
      },
      {
        "name": "超高清视频",
        "change_pct": -0.26
      },
      {
        "name": "半导体",
        "change_pct": -0.71
      },
      {
        "name": "OLED",
        "change_pct": -1.05
      },
      {
        "name": "光伏",
        "change_pct": -0.17
      },
      {
        "name": "黑色家电",
        "change_pct": 0.03
      },
      {
        "name": "家电",
        "change_pct": 0.55
      },
      {
        "name": "智能制造",
        "change_pct": 1.14
      },
      {
        "name": "工业互联网",
        "change_pct": 0.62
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.18
      },
      {
        "name": "国产芯片",
        "change_pct": -0.48
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.06
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.89
      },
      {
        "name": "MicroLED",
        "change_pct": -2.05
      },
      {
        "name": "MiniLED",
        "change_pct": -1.67
      },
      {
        "name": "华为产业链",
        "change_pct": -0.02
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.25
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 33,
    "hot_rank_chg": -20,
    "stock_cnt": 5847,
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
        "change_pct": 0.2
      },
      {
        "name": "创新药",
        "change_pct": -0.41
      },
      {
        "name": "央企改革",
        "change_pct": 0.02
      },
      {
        "name": "医疗器械",
        "change_pct": -0.02
      },
      {
        "name": "强势人气股",
        "change_pct": 1.26
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.22
      },
      {
        "name": "保健品",
        "change_pct": -0.11
      },
      {
        "name": "民营医院",
        "change_pct": 0.14
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.62
      },
      {
        "name": "医药",
        "change_pct": -0.13
      },
      {
        "name": "化学原料药",
        "change_pct": 0.13
      },
      {
        "name": "海南概念",
        "change_pct": 3.05
      },
      {
        "name": "脑科学",
        "change_pct": 0.49
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.96
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.9
      },
      {
        "name": "食品",
        "change_pct": -0.06
      },
      {
        "name": "国企改革",
        "change_pct": 0.1
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.12
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.17
      },
      {
        "name": "自贸区",
        "change_pct": 0.87
      },
      {
        "name": "合成生物",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 37,
    "hot_rank_chg": 297,
    "stock_cnt": 5847,
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
        "change_pct": 0.97
      },
      {
        "name": "林业",
        "change_pct": 1.6
      },
      {
        "name": "民营医院",
        "change_pct": 0.14
      },
      {
        "name": "碳中和",
        "change_pct": -0.33
      },
      {
        "name": "自贸区",
        "change_pct": 0.87
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 47,
    "hot_rank_chg": 25,
    "stock_cnt": 5847,
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
        "change_pct": 1.01
      },
      {
        "name": "军民融合",
        "change_pct": 0.81
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.99
      },
      {
        "name": "烧碱",
        "change_pct": 1.26
      },
      {
        "name": "军工",
        "change_pct": 0.54
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.36
      },
      {
        "name": "环氧丙烷",
        "change_pct": 1.59
      },
      {
        "name": "氟化工",
        "change_pct": 2.68
      },
      {
        "name": "双氧水",
        "change_pct": 1.85
      },
      {
        "name": "液氯",
        "change_pct": 2.18
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 51,
    "hot_rank_chg": -22,
    "stock_cnt": 5847,
    "price": "3.78",
    "change": "-1.82",
    "market_id": "33",
    "circulate_market_value": "17612493000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.11
      },
      {
        "name": "房地产",
        "change_pct": 0.03
      },
      {
        "name": "京津冀",
        "change_pct": -0.13
      },
      {
        "name": "旅游",
        "change_pct": -0.38
      },
      {
        "name": "国产芯片",
        "change_pct": -0.48
      },
      {
        "name": "内存",
        "change_pct": -3.3
      },
      {
        "name": "闪存",
        "change_pct": -2.26
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 52,
    "hot_rank_chg": 154,
    "stock_cnt": 5847,
    "price": "9.95",
    "change": "2.79",
    "market_id": "17",
    "circulate_market_value": "29595093000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.05
      },
      {
        "name": "禽流感",
        "change_pct": 0.12
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.48
      },
      {
        "name": "农药",
        "change_pct": 1.45
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": 0.69
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.1
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 62,
    "hot_rank_chg": -13,
    "stock_cnt": 5847,
    "price": "11.40",
    "change": "-4.20",
    "market_id": "33",
    "circulate_market_value": "46053490000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.71
      },
      {
        "name": "一带一路",
        "change_pct": 0.43
      },
      {
        "name": "京津冀",
        "change_pct": -0.13
      },
      {
        "name": "光伏",
        "change_pct": -0.17
      },
      {
        "name": "碳中和",
        "change_pct": -0.33
      },
      {
        "name": "国产芯片",
        "change_pct": -0.48
      },
      {
        "name": "IGBT",
        "change_pct": -0.56
      },
      {
        "name": "颗粒硅",
        "change_pct": -1.71
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.58
      },
      {
        "name": "大硅片",
        "change_pct": -2.97
      }
    ]
  },
  {
    "code": "002458",
    "name": "益生股份",
    "hot_rank": 77,
    "hot_rank_chg": -25,
    "stock_cnt": 5847,
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
        "change_pct": 0.63
      },
      {
        "name": "养猪",
        "change_pct": -0.57
      },
      {
        "name": "大农业",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "603778",
    "name": "国晟科技",
    "hot_rank": 80,
    "hot_rank_chg": 252,
    "stock_cnt": 5847,
    "price": "12.89",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "8286428600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "光伏",
    "xgb_concepts": [
      {
        "name": "业绩爆雷",
        "change_pct": 0.96
      },
      {
        "name": "园林",
        "change_pct": 1.69
      },
      {
        "name": "光伏",
        "change_pct": -0.17
      },
      {
        "name": "固态电池",
        "change_pct": 0.79
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.58
      },
      {
        "name": "国资入股",
        "change_pct": 0.81
      }
    ]
  },
  {
    "code": "000601",
    "name": "韶能股份",
    "hot_rank": 83,
    "hot_rank_chg": -3,
    "stock_cnt": 5847,
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
        "change_pct": 1.21
      },
      {
        "name": "水电",
        "change_pct": -0.55
      },
      {
        "name": "重卡",
        "change_pct": 1.57
      },
      {
        "name": "充电桩",
        "change_pct": 0.83
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.36
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.22
      },
      {
        "name": "减速器",
        "change_pct": 3.16
      },
      {
        "name": "算电协同",
        "change_pct": 0.08
      }
    ]
  },
  {
    "code": "600909",
    "name": "华安证券",
    "hot_rank": 87,
    "hot_rank_chg": -41,
    "stock_cnt": 5847,
    "price": "11.89",
    "change": "-2.62",
    "market_id": "17",
    "circulate_market_value": "59737848000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.48
      },
      {
        "name": "期货概念",
        "change_pct": -1.7
      },
      {
        "name": "券商",
        "change_pct": -2.05
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.49
      },
      {
        "name": "大金融",
        "change_pct": -0.85
      },
      {
        "name": "国企改革",
        "change_pct": 0.1
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "001248", "name": "华润新能源", "hot_rank": 1, "hot_rank_chg": 27, "stock_cnt": 5847, "price": "22.66", "change": "124.14", "market_id": "33", "circulate_market_value": "24074070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5847, "price": "8.41", "change": "-4.11", "market_id": "33", "circulate_market_value": "297083930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.56}, {"name": "手机产业链", "change_pct": 0.02}, {"name": "超高清视频", "change_pct": -0.24}, {"name": "苹果产业链", "change_pct": -0.36}, {"name": "半导体", "change_pct": -0.79}, {"name": "人工智能", "change_pct": 0.09}, {"name": "互联网医疗", "change_pct": -0.13}, {"name": "VR&AR", "change_pct": -0.74}, {"name": "OLED", "change_pct": -1.05}, {"name": "京津冀", "change_pct": -0.04}, {"name": "物联网", "change_pct": 0.1}, {"name": "指纹识别", "change_pct": -1.19}, {"name": "汽车零部件", "change_pct": 2.0}, {"name": "白马股", "change_pct": -0.57}, {"name": "智能制造", "change_pct": 1.18}, {"name": "小米概念股", "change_pct": 0.17}, {"name": "国产芯片", "change_pct": -0.53}, {"name": "液晶面板/LCD", "change_pct": -0.93}, {"name": "全息概念", "change_pct": 0.55}, {"name": "理想汽车概念股", "change_pct": 2.0}, {"name": "MicroLED", "change_pct": -2.09}, {"name": "钙钛矿电池", "change_pct": -1.76}, {"name": "智能手表", "change_pct": -0.16}, {"name": "MiniLED", "change_pct": -1.68}, {"name": "传感器", "change_pct": 0.79}, {"name": "大硅片", "change_pct": -3.13}, {"name": "AI PC", "change_pct": -0.06}, {"name": "华为产业链", "change_pct": -0.0}, {"name": "回购", "change_pct": 0.14}, {"name": "智能眼镜/MR头显", "change_pct": -0.27}, {"name": "玻璃基板封装", "change_pct": -3.3}]}, {"code": "600667", "name": "太极实业", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5847, "price": "30.73", "change": "-4.67", "market_id": "17", "circulate_market_value": "64273091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5847, "price": "60.32", "change": "0.67", "market_id": "17", "circulate_market_value": "51064097000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5847, "price": "56.73", "change": "2.64", "market_id": "33", "circulate_market_value": "61176896000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5847, "price": "99.60", "change": "-6.58", "market_id": "17", "circulate_market_value": "178225690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5847, "price": "7.48", "change": "-3.98", "market_id": "17", "circulate_market_value": "92722747000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.04}, {"name": "核电", "change_pct": 0.79}, {"name": "强势人气股", "change_pct": 1.26}, {"name": "电力体制改革", "change_pct": -0.94}, {"name": "水电", "change_pct": -0.54}, {"name": "火电", "change_pct": -1.3}, {"name": "光伏", "change_pct": -0.11}, {"name": "风电", "change_pct": 0.48}, {"name": "国企改革", "change_pct": 0.14}, {"name": "算电协同", "change_pct": 0.08}]}, {"code": "001399", "name": "惠科股份", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5847, "price": "51.74", "change": "11.80", "market_id": "33", "circulate_market_value": "22273217000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 9, "hot_rank_chg": 3, "stock_cnt": 5847, "price": "57.15", "change": "-8.21", "market_id": "33", "circulate_market_value": "89962991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 10, "hot_rank_chg": 5, "stock_cnt": 5847, "price": "10.34", "change": "10.00", "market_id": "33", "circulate_market_value": "16809674000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能数据集", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.51}, {"name": "电竞", "change_pct": 0.59}, {"name": "手游", "change_pct": 0.58}, {"name": "强势人气股", "change_pct": 1.26}, {"name": "人工智能", "change_pct": 0.09}, {"name": "游戏", "change_pct": 0.01}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.06}, {"name": "腾讯概念股", "change_pct": 0.13}, {"name": "快手概念股", "change_pct": 0.83}, {"name": "元宇宙", "change_pct": 0.54}, {"name": "虚拟数字人", "change_pct": 0.66}, {"name": "东数西算/算力", "change_pct": -0.34}, {"name": "web3.0", "change_pct": 0.99}, {"name": "AIGC概念", "change_pct": 0.51}, {"name": "数据要素", "change_pct": -0.07}, {"name": "字节跳动概念股", "change_pct": 0.9}, {"name": "AI营销", "change_pct": 1.71}, {"name": "ChatGPT", "change_pct": 0.37}, {"name": "智能眼镜/MR头显", "change_pct": -0.26}, {"name": "人工智能大模型", "change_pct": -0.28}, {"name": "人形机器人", "change_pct": 2.37}, {"name": "短剧/互动影游", "change_pct": 0.93}, {"name": "多模态", "change_pct": 0.57}, {"name": "Sora/AI视频", "change_pct": 0.97}, {"name": "IP经济/谷子经济", "change_pct": 0.48}, {"name": "小红书概念股", "change_pct": 1.38}]}, {"code": "600522", "name": "中天科技", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5847, "price": "53.95", "change": "-2.65", "market_id": "17", "circulate_market_value": "184128630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 12, "hot_rank_chg": 13, "stock_cnt": 5847, "price": "21.34", "change": "-2.38", "market_id": "33", "circulate_market_value": "70905388000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 13, "hot_rank_chg": -3, "stock_cnt": 5847, "price": "5.74", "change": "-6.21", "market_id": "33", "circulate_market_value": "109626557000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.52}, {"name": "手机产业链", "change_pct": 0.05}, {"name": "超高清视频", "change_pct": -0.26}, {"name": "半导体", "change_pct": -0.71}, {"name": "OLED", "change_pct": -1.05}, {"name": "光伏", "change_pct": -0.17}, {"name": "黑色家电", "change_pct": 0.03}, {"name": "家电", "change_pct": 0.55}, {"name": "智能制造", "change_pct": 1.14}, {"name": "工业互联网", "change_pct": 0.62}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.18}, {"name": "国产芯片", "change_pct": -0.48}, {"name": "腾讯概念股", "change_pct": 0.06}, {"name": "液晶面板/LCD", "change_pct": -0.89}, {"name": "MicroLED", "change_pct": -2.05}, {"name": "MiniLED", "change_pct": -1.67}, {"name": "华为产业链", "change_pct": -0.02}, {"name": "玻璃基板封装", "change_pct": -3.25}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 14, "hot_rank_chg": 7, "stock_cnt": 5847, "price": "718.11", "change": "-6.98", "market_id": "17", "circulate_market_value": "480050740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 15, "hot_rank_chg": 7, "stock_cnt": 5847, "price": "98.22", "change": "-3.64", "market_id": "17", "circulate_market_value": "240165690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5847, "price": "87.74", "change": "8.36", "market_id": "17", "circulate_market_value": "94106885000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 17, "hot_rank_chg": 53, "stock_cnt": 5847, "price": "18.03", "change": "10.01", "market_id": "17", "circulate_market_value": "23010891000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 18, "hot_rank_chg": -1, "stock_cnt": 5847, "price": "15.89", "change": "-10.02", "market_id": "17", "circulate_market_value": "57008072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 19, "hot_rank_chg": -10, "stock_cnt": 5847, "price": "41.35", "change": "0.73", "market_id": "33", "circulate_market_value": "32360255000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 20, "hot_rank_chg": 40, "stock_cnt": 5847, "price": "223.75", "change": "-9.07", "market_id": "33", "circulate_market_value": "310494480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 21, "hot_rank_chg": -1, "stock_cnt": 5847, "price": "70.43", "change": "-5.34", "market_id": "33", "circulate_market_value": "81465293000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 22, "hot_rank_chg": 4, "stock_cnt": 5847, "price": "26.71", "change": "10.01", "market_id": "33", "circulate_market_value": "20265223000.00", "change_type": "1", "change_section": "10", "change_days": "7", "change_reason": "氧化锆供给缺口"}, {"code": "002594", "name": "比亚迪", "hot_rank": 23, "hot_rank_chg": 72, "stock_cnt": 5847, "price": "85.00", "change": "5.38", "market_id": "33", "circulate_market_value": "296466750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 24, "hot_rank_chg": 12, "stock_cnt": 5847, "price": "52.97", "change": "-0.17", "market_id": "17", "circulate_market_value": "88145886000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 25, "hot_rank_chg": 74, "stock_cnt": 5847, "price": "14.28", "change": "-7.03", "market_id": "17", "circulate_market_value": "21030253000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 26, "hot_rank_chg": 1, "stock_cnt": 5847, "price": "74.35", "change": "-6.85", "market_id": "17", "circulate_market_value": "57413023000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002326", "name": "永太科技", "hot_rank": 27, "hot_rank_chg": -13, "stock_cnt": 5847, "price": "28.30", "change": "8.80", "market_id": "33", "circulate_market_value": "22878982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 28, "hot_rank_chg": 3, "stock_cnt": 5847, "price": "71.66", "change": "2.04", "market_id": "17", "circulate_market_value": "284603930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 29, "hot_rank_chg": -21, "stock_cnt": 5847, "price": "48.24", "change": "10.01", "market_id": "17", "circulate_market_value": "44893587000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "拟收购先导微电子"}, {"code": "300058", "name": "蓝色光标", "hot_rank": 30, "hot_rank_chg": 119, "stock_cnt": 5847, "price": "13.96", "change": "0.29", "market_id": "33", "circulate_market_value": "48551907000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 31, "hot_rank_chg": 33, "stock_cnt": 5847, "price": "66.12", "change": "-5.53", "market_id": "17", "circulate_market_value": "1312091380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 32, "hot_rank_chg": -9, "stock_cnt": 5847, "price": "221.25", "change": "-6.10", "market_id": "33", "circulate_market_value": "70473158000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 33, "hot_rank_chg": -20, "stock_cnt": 5847, "price": "6.04", "change": "10.02", "market_id": "33", "circulate_market_value": "7832283200.00", "change_type": "1", "change_section": "8", "change_days": "6", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 0.2}, {"name": "创新药", "change_pct": -0.41}, {"name": "央企改革", "change_pct": 0.02}, {"name": "医疗器械", "change_pct": -0.02}, {"name": "强势人气股", "change_pct": 1.26}, {"name": "互联网医疗", "change_pct": -0.22}, {"name": "保健品", "change_pct": -0.11}, {"name": "民营医院", "change_pct": 0.14}, {"name": "CAR-T疗法", "change_pct": -0.62}, {"name": "医药", "change_pct": -0.13}, {"name": "化学原料药", "change_pct": 0.13}, {"name": "海南概念", "change_pct": 3.05}, {"name": "脑科学", "change_pct": 0.49}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.96}, {"name": "海南自由贸易港", "change_pct": 1.9}, {"name": "食品", "change_pct": -0.06}, {"name": "国企改革", "change_pct": 0.1}, {"name": "医疗信息化", "change_pct": -0.12}, {"name": "新冠病毒防治", "change_pct": 0.17}, {"name": "自贸区", "change_pct": 0.87}, {"name": "合成生物", "change_pct": 0.25}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 34, "hot_rank_chg": 55, "stock_cnt": 5847, "price": "116.53", "change": "4.84", "market_id": "33", "circulate_market_value": "84556582000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 35, "hot_rank_chg": -16, "stock_cnt": 5847, "price": "174.07", "change": "-9.99", "market_id": "17", "circulate_market_value": "44915456000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 36, "hot_rank_chg": 9, "stock_cnt": 5847, "price": "70.88", "change": "-4.10", "market_id": "33", "circulate_market_value": "107557013000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 37, "hot_rank_chg": 297, "stock_cnt": 5847, "price": "7.76", "change": "10.07", "market_id": "33", "circulate_market_value": "14861117000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "海峡两岸", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.97}, {"name": "林业", "change_pct": 1.6}, {"name": "民营医院", "change_pct": 0.14}, {"name": "碳中和", "change_pct": -0.33}, {"name": "自贸区", "change_pct": 0.87}]}, {"code": "002549", "name": "凯美特气", "hot_rank": 38, "hot_rank_chg": -4, "stock_cnt": 5847, "price": "21.59", "change": "-3.31", "market_id": "33", "circulate_market_value": "14948042000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002971", "name": "和远气体", "hot_rank": 39, "hot_rank_chg": 16, "stock_cnt": 5847, "price": "75.02", "change": "10.00", "market_id": "33", "circulate_market_value": "11733229300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "电子特气"}, {"code": "600160", "name": "巨化股份", "hot_rank": 40, "hot_rank_chg": -16, "stock_cnt": 5847, "price": "56.48", "change": "1.13", "market_id": "17", "circulate_market_value": "152481660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 41, "hot_rank_chg": 66, "stock_cnt": 5847, "price": "15.84", "change": "10.00", "market_id": "17", "circulate_market_value": "5396751400.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "半导体光刻胶概念"}, {"code": "603650", "name": "彤程新材", "hot_rank": 42, "hot_rank_chg": 29, "stock_cnt": 5847, "price": "98.60", "change": "6.61", "market_id": "17", "circulate_market_value": "60587076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 43, "hot_rank_chg": 60, "stock_cnt": 5847, "price": "92.75", "change": "4.52", "market_id": "33", "circulate_market_value": "60843076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 44, "hot_rank_chg": -11, "stock_cnt": 5847, "price": "19.91", "change": "0.35", "market_id": "17", "circulate_market_value": "99331363000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 45, "hot_rank_chg": -15, "stock_cnt": 5847, "price": "23.78", "change": "-3.57", "market_id": "33", "circulate_market_value": "80017786000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 46, "hot_rank_chg": 55, "stock_cnt": 5847, "price": "535.79", "change": "-6.91", "market_id": "33", "circulate_market_value": "672010940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601678", "name": "滨化股份", "hot_rank": 47, "hot_rank_chg": 25, "stock_cnt": 5847, "price": "7.70", "change": "10.00", "market_id": "17", "circulate_market_value": "15733689000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "H股招股", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.01}, {"name": "军民融合", "change_pct": 0.81}, {"name": "氢能源/燃料电池", "change_pct": 0.99}, {"name": "烧碱", "change_pct": 1.26}, {"name": "军工", "change_pct": 0.54}, {"name": "新能源汽车", "change_pct": 1.36}, {"name": "环氧丙烷", "change_pct": 1.59}, {"name": "氟化工", "change_pct": 2.68}, {"name": "双氧水", "change_pct": 1.85}, {"name": "液氯", "change_pct": 2.18}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 48, "hot_rank_chg": 39, "stock_cnt": 5847, "price": "138.35", "change": "-4.61", "market_id": "33", "circulate_market_value": "265982370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002273", "name": "水晶光电", "hot_rank": 49, "hot_rank_chg": -5, "stock_cnt": 5847, "price": "41.57", "change": "6.43", "market_id": "33", "circulate_market_value": "56580736000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 50, "hot_rank_chg": -8, "stock_cnt": 5847, "price": "57.54", "change": "-9.81", "market_id": "17", "circulate_market_value": "18526337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 51, "hot_rank_chg": -22, "stock_cnt": 5847, "price": "3.78", "change": "-1.82", "market_id": "33", "circulate_market_value": "17612493000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.11}, {"name": "房地产", "change_pct": 0.03}, {"name": "京津冀", "change_pct": -0.13}, {"name": "旅游", "change_pct": -0.38}, {"name": "国产芯片", "change_pct": -0.48}, {"name": "内存", "change_pct": -3.3}, {"name": "闪存", "change_pct": -2.26}, {"name": "IP经济/谷子经济", "change_pct": 0.48}]}, {"code": "600226", "name": "亨通股份", "hot_rank": 52, "hot_rank_chg": 154, "stock_cnt": 5847, "price": "9.95", "change": "2.79", "market_id": "17", "circulate_market_value": "29595093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.05}, {"name": "禽流感", "change_pct": 0.12}, {"name": "铜箔/覆铜板", "change_pct": -0.48}, {"name": "农药", "change_pct": 1.45}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": 0.69}, {"name": "PET复合铜箔", "change_pct": -1.1}]}, {"code": "603259", "name": "药明康德", "hot_rank": 53, "hot_rank_chg": 8, "stock_cnt": 5847, "price": "122.31", "change": "-2.28", "market_id": "17", "circulate_market_value": "302506910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 54, "hot_rank_chg": 0, "stock_cnt": 5847, "price": "1178.99", "change": "-3.61", "market_id": "33", "circulate_market_value": "1308607900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 55, "hot_rank_chg": 21, "stock_cnt": 5847, "price": "59.44", "change": "-4.83", "market_id": "17", "circulate_market_value": "86900971000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 56, "hot_rank_chg": 157, "stock_cnt": 5847, "price": "62.46", "change": "10.00", "market_id": "17", "circulate_market_value": "26006327000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "光刻胶颜料"}, {"code": "002050", "name": "三花智控", "hot_rank": 57, "hot_rank_chg": 33, "stock_cnt": 5847, "price": "45.71", "change": "3.39", "market_id": "33", "circulate_market_value": "168478350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 58, "hot_rank_chg": -20, "stock_cnt": 5847, "price": "56.08", "change": "2.99", "market_id": "33", "circulate_market_value": "84504617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 59, "hot_rank_chg": -16, "stock_cnt": 5847, "price": "39.81", "change": "-0.99", "market_id": "33", "circulate_market_value": "14936303000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002559", "name": "亚威股份", "hot_rank": 60, "hot_rank_chg": -25, "stock_cnt": 5847, "price": "15.38", "change": "10.01", "market_id": "33", "circulate_market_value": "7751597000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "参股半导体检测公司"}, {"code": "002361", "name": "神剑股份", "hot_rank": 61, "hot_rank_chg": 109, "stock_cnt": 5847, "price": "15.09", "change": "1.07", "market_id": "33", "circulate_market_value": "12208096500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 62, "hot_rank_chg": -13, "stock_cnt": 5847, "price": "11.40", "change": "-4.20", "market_id": "33", "circulate_market_value": "46053490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.71}, {"name": "一带一路", "change_pct": 0.43}, {"name": "京津冀", "change_pct": -0.13}, {"name": "光伏", "change_pct": -0.17}, {"name": "碳中和", "change_pct": -0.33}, {"name": "国产芯片", "change_pct": -0.48}, {"name": "IGBT", "change_pct": -0.56}, {"name": "颗粒硅", "change_pct": -1.71}, {"name": "异质结电池HJT", "change_pct": -0.58}, {"name": "大硅片", "change_pct": -2.97}]}, {"code": "002635", "name": "安洁科技", "hot_rank": 63, "hot_rank_chg": 2, "stock_cnt": 5847, "price": "22.80", "change": "1.33", "market_id": "33", "circulate_market_value": "9018154900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 64, "hot_rank_chg": -1, "stock_cnt": 5847, "price": "56.67", "change": "7.62", "market_id": "17", "circulate_market_value": "21854063000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 65, "hot_rank_chg": 16, "stock_cnt": 5847, "price": "221.66", "change": "-8.47", "market_id": "33", "circulate_market_value": "173184780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 66, "hot_rank_chg": 38, "stock_cnt": 5847, "price": "26.83", "change": "6.85", "market_id": "17", "circulate_market_value": "552746110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 67, "hot_rank_chg": -10, "stock_cnt": 5847, "price": "20.82", "change": "-2.94", "market_id": "33", "circulate_market_value": "278015620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 68, "hot_rank_chg": -27, "stock_cnt": 5847, "price": "27.48", "change": "-7.29", "market_id": "17", "circulate_market_value": "25957797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 69, "hot_rank_chg": -19, "stock_cnt": 5847, "price": "99.08", "change": "-3.27", "market_id": "17", "circulate_market_value": "144959420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 70, "hot_rank_chg": 18, "stock_cnt": 5847, "price": "15.37", "change": "0.26", "market_id": "17", "circulate_market_value": "26669731000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 71, "hot_rank_chg": 61, "stock_cnt": 5847, "price": "16.49", "change": "-5.39", "market_id": "33", "circulate_market_value": "25160134000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 72, "hot_rank_chg": -24, "stock_cnt": 5847, "price": "163.10", "change": "-6.02", "market_id": "33", "circulate_market_value": "164084010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 74, "hot_rank_chg": 330, "stock_cnt": 5847, "price": "30.61", "change": "7.52", "market_id": "33", "circulate_market_value": "35082289000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 75, "hot_rank_chg": 50, "stock_cnt": 5847, "price": "17.99", "change": "-1.64", "market_id": "33", "circulate_market_value": "58060617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 76, "hot_rank_chg": -44, "stock_cnt": 5847, "price": "132.17", "change": "-3.47", "market_id": "33", "circulate_market_value": "209823600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002458", "name": "益生股份", "hot_rank": 77, "hot_rank_chg": -25, "stock_cnt": 5847, "price": "9.41", "change": "10.06", "market_id": "33", "circulate_market_value": "9093688200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增", "xgb_concepts": [{"name": "养鸡", "change_pct": 0.63}, {"name": "养猪", "change_pct": -0.57}, {"name": "大农业", "change_pct": 0.69}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 78, "hot_rank_chg": 56, "stock_cnt": 5847, "price": "264.80", "change": "-7.09", "market_id": "33", "circulate_market_value": "288205160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 79, "hot_rank_chg": -6, "stock_cnt": 5847, "price": "159.58", "change": "-3.17", "market_id": "17", "circulate_market_value": "382114560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603778", "name": "国晟科技", "hot_rank": 80, "hot_rank_chg": 252, "stock_cnt": 5847, "price": "12.89", "change": "9.98", "market_id": "17", "circulate_market_value": "8286428600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光伏", "xgb_concepts": [{"name": "业绩爆雷", "change_pct": 0.96}, {"name": "园林", "change_pct": 1.69}, {"name": "光伏", "change_pct": -0.17}, {"name": "固态电池", "change_pct": 0.79}, {"name": "异质结电池HJT", "change_pct": -0.58}, {"name": "国资入股", "change_pct": 0.81}]}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 81, "hot_rank_chg": 17, "stock_cnt": 5847, "price": "53.36", "change": "-0.78", "market_id": "17", "circulate_market_value": "340383560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 82, "hot_rank_chg": 4, "stock_cnt": 5847, "price": "62.80", "change": "-5.19", "market_id": "33", "circulate_market_value": "458661160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000601", "name": "韶能股份", "hot_rank": 83, "hot_rank_chg": -3, "stock_cnt": 5847, "price": "7.08", "change": "9.94", "market_id": "33", "circulate_market_value": "7431299100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "业绩预增", "xgb_concepts": [{"name": "造纸", "change_pct": 1.21}, {"name": "水电", "change_pct": -0.55}, {"name": "重卡", "change_pct": 1.57}, {"name": "充电桩", "change_pct": 0.83}, {"name": "新能源汽车", "change_pct": 1.36}, {"name": "新能源车零部件", "change_pct": 2.22}, {"name": "减速器", "change_pct": 3.16}, {"name": "算电协同", "change_pct": 0.08}]}, {"code": "603005", "name": "晶方科技", "hot_rank": 84, "hot_rank_chg": 9, "stock_cnt": 5847, "price": "50.06", "change": "-5.01", "market_id": "17", "circulate_market_value": "32647716000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 85, "hot_rank_chg": -11, "stock_cnt": 5847, "price": "100.38", "change": "4.63", "market_id": "33", "circulate_market_value": "145902760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 86, "hot_rank_chg": -30, "stock_cnt": 5847, "price": "31.67", "change": "5.68", "market_id": "17", "circulate_market_value": "31352029000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600909", "name": "华安证券", "hot_rank": 87, "hot_rank_chg": -41, "stock_cnt": 5847, "price": "11.89", "change": "-2.62", "market_id": "17", "circulate_market_value": "59737848000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.48}, {"name": "期货概念", "change_pct": -1.7}, {"name": "券商", "change_pct": -2.05}, {"name": "安徽国企改革", "change_pct": -0.49}, {"name": "大金融", "change_pct": -0.85}, {"name": "国企改革", "change_pct": 0.1}]}, {"code": "688008", "name": "澜起科技", "hot_rank": 88, "hot_rank_chg": 20, "stock_cnt": 5847, "price": "292.56", "change": "-7.41", "market_id": "17", "circulate_market_value": "335398540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 89, "hot_rank_chg": -7, "stock_cnt": 5847, "price": "17.97", "change": "0.95", "market_id": "33", "circulate_market_value": "129378695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 90, "hot_rank_chg": -12, "stock_cnt": 5847, "price": "111.92", "change": "-2.51", "market_id": "33", "circulate_market_value": "73120399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 91, "hot_rank_chg": -38, "stock_cnt": 5847, "price": "28.16", "change": "-4.76", "market_id": "33", "circulate_market_value": "33164657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920193", "name": "吉和昌", "hot_rank": 92, "hot_rank_chg": 1547, "stock_cnt": 5847, "price": "63.71", "change": "647.77", "market_id": "151", "circulate_market_value": "1605492000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 93, "hot_rank_chg": 31, "stock_cnt": 5847, "price": "20.43", "change": "-4.44", "market_id": "33", "circulate_market_value": "11936607400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 94, "hot_rank_chg": 43, "stock_cnt": 5847, "price": "35.72", "change": "-3.93", "market_id": "33", "circulate_market_value": "143866630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 95, "hot_rank_chg": -10, "stock_cnt": 5847, "price": "83.01", "change": "-3.09", "market_id": "17", "circulate_market_value": "98158423000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603738", "name": "泰晶科技", "hot_rank": 96, "hot_rank_chg": -45, "stock_cnt": 5847, "price": "64.18", "change": "-2.73", "market_id": "17", "circulate_market_value": "24766259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 97, "hot_rank_chg": -38, "stock_cnt": 5847, "price": "132.75", "change": "-3.81", "market_id": "33", "circulate_market_value": "126976858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 98, "hot_rank_chg": 19, "stock_cnt": 5847, "price": "18.63", "change": "5.08", "market_id": "17", "circulate_market_value": "325295490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 99, "hot_rank_chg": 56, "stock_cnt": 5847, "price": "163.88", "change": "-0.58", "market_id": "33", "circulate_market_value": "135859070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 100, "hot_rank_chg": -9, "stock_cnt": 5847, "price": "47.55", "change": "0.15", "market_id": "33", "circulate_market_value": "72177592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};