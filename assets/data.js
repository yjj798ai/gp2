const UPDATE_TIME = "2026-07-14 05:08";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 1.46,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 2.5,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续70天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.52,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续247天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": -1.45,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续176天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "存储芯片",
    "rise": -0.17,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续200天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "人形机器人",
    "rise": 0.09,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续411天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "先进封装",
    "rise": 0.33,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续40天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "算力租赁",
    "rise": -1.12,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续111天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光纤概念",
    "rise": 1.06,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "2026中报预增",
    "rise": 1.61,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 1,
    "etfName": "材料ETF",
    "code": "886110"
  },
  {
    "name": "ST板块",
    "rise": 0.38,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续85天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "国家大基金持股",
    "rise": -1.04,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "培育钻石",
    "rise": 0.98,
    "rate": 0,
    "tag": "",
    "hotTag": "连续23天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "猪肉",
    "rise": -0.3,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "玻璃基板",
    "rise": 1.77,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "机床ETF",
    "code": "886111"
  },
  {
    "name": "煤炭概念",
    "rise": 2.31,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 3,
    "etfName": "煤炭ETF",
    "code": "885914"
  },
  {
    "name": "芯片概念",
    "rise": -0.28,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "AI应用",
    "rise": -0.7,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -2,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "机器人概念",
    "rise": 0.18,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续78天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "液冷服务器",
    "rise": -0.05,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  }
];
const THS_EVENTS = [
  {
    "title": "《国民健康“十五五”规划》：全链条支持创新药和医疗器械发展应用 支持创新药临床使用",
    "desc": "",
    "heat": 261562,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗"
    ],
    "stocks": [
      {
        "name": "迪哲医药-U",
        "code": "688192",
        "chg": 20.004261
      }
    ]
  },
  {
    "title": "特朗普宣布：美国将重新封锁伊朗，对经过霍尔木兹海峡的货物收20%的费用！",
    "desc": "",
    "heat": 141720,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "特瑞斯",
        "code": "920014",
        "chg": 12.121212
      }
    ]
  },
  {
    "title": "国务院批复！《扩大消费“十五五”规划》出炉",
    "desc": "",
    "heat": 137314,
    "direction": "大消费",
    "themes": [
      "零售",
      "消费",
      "乳业",
      "啤酒概念",
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "行云科技",
        "code": "300209",
        "chg": 18.142292
      }
    ]
  },
  {
    "title": "习近平将出席2026世界人工智能大会暨人工智能全球治理高级别会议开幕式并发表主旨讲话",
    "desc": "",
    "heat": 106530,
    "direction": "世界人工智能大会",
    "themes": [
      "人工智能",
      "AI手机",
      "AI智能体"
    ],
    "stocks": [
      {
        "name": "药易购",
        "code": "300937",
        "chg": 20.010341
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "玻纤",
    "change": "+4.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+4.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+4.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+3.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药商业",
    "change": "+3.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+3.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+3.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+3.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+2.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医疗耗材供应链SPD",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+2.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "镨钕",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+2.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "山西国企改革",
    "change": "+2.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+2.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血氧仪",
    "change": "+2.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PET复合铜箔",
    "change": "+2.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "涤纶",
    "change": "+2.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PVC",
    "change": "+2.34%",
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
    "hot_rank": 4,
    "hot_rank_chg": 2,
    "stock_cnt": 5858,
    "price": "6.98",
    "change": "2.20",
    "market_id": "33",
    "circulate_market_value": "246862600000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.95
      },
      {
        "name": "手机产业链",
        "change_pct": 0.77
      },
      {
        "name": "超高清视频",
        "change_pct": 0.02
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.86
      },
      {
        "name": "电竞",
        "change_pct": -0.97
      },
      {
        "name": "半导体",
        "change_pct": -0.71
      },
      {
        "name": "人工智能",
        "change_pct": -0.57
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.55
      },
      {
        "name": "VR&AR",
        "change_pct": -0.2
      },
      {
        "name": "OLED",
        "change_pct": 0.46
      },
      {
        "name": "京津冀",
        "change_pct": -0.09
      },
      {
        "name": "物联网",
        "change_pct": -0.66
      },
      {
        "name": "指纹识别",
        "change_pct": 0.11
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.41
      },
      {
        "name": "白马股",
        "change_pct": 0.13
      },
      {
        "name": "智能制造",
        "change_pct": 0.05
      },
      {
        "name": "小米概念股",
        "change_pct": 0.21
      },
      {
        "name": "国产芯片",
        "change_pct": -1.12
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.52
      },
      {
        "name": "全息概念",
        "change_pct": -0.38
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.57
      },
      {
        "name": "MicroLED",
        "change_pct": 0.46
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.2
      },
      {
        "name": "智能手表",
        "change_pct": 0.52
      },
      {
        "name": "MiniLED",
        "change_pct": 1.04
      },
      {
        "name": "传感器",
        "change_pct": -0.33
      },
      {
        "name": "大硅片",
        "change_pct": -2.09
      },
      {
        "name": "AI PC",
        "change_pct": -0.2
      },
      {
        "name": "华为产业链",
        "change_pct": -0.34
      },
      {
        "name": "回购",
        "change_pct": 0.72
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.17
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.74
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 15,
    "hot_rank_chg": -3,
    "stock_cnt": 5858,
    "price": "4.08",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "10275520300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.92
      },
      {
        "name": "工业大麻",
        "change_pct": -0.04
      },
      {
        "name": "中药",
        "change_pct": 1.44
      },
      {
        "name": "保健品",
        "change_pct": 1.59
      },
      {
        "name": "医药",
        "change_pct": 1.73
      },
      {
        "name": "化学原料药",
        "change_pct": 1.49
      },
      {
        "name": "流感",
        "change_pct": 1.62
      },
      {
        "name": "振兴东北",
        "change_pct": 1.28
      },
      {
        "name": "食品",
        "change_pct": 1.21
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 24,
    "hot_rank_chg": 36,
    "stock_cnt": 5858,
    "price": "6.29",
    "change": "4.49",
    "market_id": "17",
    "circulate_market_value": "6867967200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 1.73
      },
      {
        "name": "化学原料药",
        "change_pct": 1.49
      },
      {
        "name": "数字经济",
        "change_pct": -0.93
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.97
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.88
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 26,
    "hot_rank_chg": 59,
    "stock_cnt": 5858,
    "price": "10.73",
    "change": "13.08",
    "market_id": "33",
    "circulate_market_value": "6257851600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 1.57
      },
      {
        "name": "一带一路",
        "change_pct": 0.49
      },
      {
        "name": "天然气",
        "change_pct": 1.02
      },
      {
        "name": "油气改革",
        "change_pct": 1.9
      },
      {
        "name": "页岩气",
        "change_pct": 1.94
      },
      {
        "name": "深地经济",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 38,
    "hot_rank_chg": 13,
    "stock_cnt": 5858,
    "price": "5.78",
    "change": "-3.35",
    "market_id": "17",
    "circulate_market_value": "71649395000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.03
      },
      {
        "name": "核电",
        "change_pct": -0.44
      },
      {
        "name": "强势人气股",
        "change_pct": 0.48
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.71
      },
      {
        "name": "水电",
        "change_pct": 0.58
      },
      {
        "name": "火电",
        "change_pct": 1.11
      },
      {
        "name": "光伏",
        "change_pct": -0.04
      },
      {
        "name": "风电",
        "change_pct": -0.19
      },
      {
        "name": "国企改革",
        "change_pct": 0.49
      },
      {
        "name": "算电协同",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 39,
    "hot_rank_chg": -31,
    "stock_cnt": 5858,
    "price": "7.71",
    "change": "-3.62",
    "market_id": "33",
    "circulate_market_value": "12534099000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.92
      },
      {
        "name": "电竞",
        "change_pct": -0.97
      },
      {
        "name": "手游",
        "change_pct": -1.42
      },
      {
        "name": "强势人气股",
        "change_pct": 0.48
      },
      {
        "name": "人工智能",
        "change_pct": -0.57
      },
      {
        "name": "游戏",
        "change_pct": -0.97
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.93
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.92
      },
      {
        "name": "快手概念股",
        "change_pct": -1.26
      },
      {
        "name": "元宇宙",
        "change_pct": -0.8
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.78
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.5
      },
      {
        "name": "web3.0",
        "change_pct": -0.61
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.22
      },
      {
        "name": "数据要素",
        "change_pct": -0.92
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.26
      },
      {
        "name": "AI营销",
        "change_pct": -1.52
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.54
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.17
      },
      {
        "name": "人工智能大模型",
        "change_pct": -0.88
      },
      {
        "name": "人形机器人",
        "change_pct": 0.12
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.36
      },
      {
        "name": "多模态",
        "change_pct": -1.46
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -1.42
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.07
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.02
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 47,
    "hot_rank_chg": 8,
    "stock_cnt": 5858,
    "price": "5.07",
    "change": "5.41",
    "market_id": "33",
    "circulate_market_value": "101999915000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.95
      },
      {
        "name": "手机产业链",
        "change_pct": 0.77
      },
      {
        "name": "超高清视频",
        "change_pct": 0.02
      },
      {
        "name": "电竞",
        "change_pct": -0.97
      },
      {
        "name": "半导体",
        "change_pct": -0.71
      },
      {
        "name": "OLED",
        "change_pct": 0.46
      },
      {
        "name": "光伏",
        "change_pct": -0.04
      },
      {
        "name": "黑色家电",
        "change_pct": -0.65
      },
      {
        "name": "家电",
        "change_pct": -0.05
      },
      {
        "name": "智能制造",
        "change_pct": 0.05
      },
      {
        "name": "工业互联网",
        "change_pct": -0.33
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.21
      },
      {
        "name": "国产芯片",
        "change_pct": -1.12
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.92
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.52
      },
      {
        "name": "MicroLED",
        "change_pct": 0.46
      },
      {
        "name": "MiniLED",
        "change_pct": 1.04
      },
      {
        "name": "华为产业链",
        "change_pct": -0.34
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.74
      }
    ]
  },
  {
    "code": "603313",
    "name": "梦百合",
    "hot_rank": 50,
    "hot_rank_chg": -26,
    "stock_cnt": 5858,
    "price": "8.48",
    "change": "6.13",
    "market_id": "17",
    "circulate_market_value": "4838576800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.92
      },
      {
        "name": "家具家居",
        "change_pct": 0.46
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "C2M",
        "change_pct": 0.64
      }
    ]
  },
  {
    "code": "002600",
    "name": "领益智造",
    "hot_rank": 53,
    "hot_rank_chg": 77,
    "stock_cnt": 5858,
    "price": "12.83",
    "change": "-5.94",
    "market_id": "33",
    "circulate_market_value": "92372213000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.95
      },
      {
        "name": "手机产业链",
        "change_pct": 0.77
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.86
      },
      {
        "name": "无线充电",
        "change_pct": 0.43
      },
      {
        "name": "稀土磁材",
        "change_pct": 1.87
      },
      {
        "name": "5G",
        "change_pct": 0.02
      },
      {
        "name": "VR&AR",
        "change_pct": -0.2
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.16
      },
      {
        "name": "机器人",
        "change_pct": 0.09
      },
      {
        "name": "小米概念股",
        "change_pct": 0.21
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.52
      },
      {
        "name": "激光雷达",
        "change_pct": 0.82
      },
      {
        "name": "减速器",
        "change_pct": 0.36
      },
      {
        "name": "无线耳机",
        "change_pct": -0.1
      },
      {
        "name": "氮化镓",
        "change_pct": -0.38
      },
      {
        "name": "AI PC",
        "change_pct": -0.2
      },
      {
        "name": "华为产业链",
        "change_pct": -0.34
      },
      {
        "name": "回购",
        "change_pct": 0.72
      },
      {
        "name": "人形机器人",
        "change_pct": 0.12
      },
      {
        "name": "AI手机",
        "change_pct": -0.33
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.21
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 59,
    "hot_rank_chg": 2,
    "stock_cnt": 5858,
    "price": "8.60",
    "change": "4.12",
    "market_id": "33",
    "circulate_market_value": "4658809200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 1.57
      },
      {
        "name": "油气管网",
        "change_pct": 1.15
      },
      {
        "name": "海工装备",
        "change_pct": -0.12
      },
      {
        "name": "举牌",
        "change_pct": 0.28
      },
      {
        "name": "天然气",
        "change_pct": 1.02
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.72
      },
      {
        "name": "风电",
        "change_pct": -0.19
      },
      {
        "name": "页岩气",
        "change_pct": 1.94
      },
      {
        "name": "国企改革",
        "change_pct": 0.49
      },
      {
        "name": "深地经济",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 61,
    "hot_rank_chg": -15,
    "stock_cnt": 5858,
    "price": "9.95",
    "change": "-9.96",
    "market_id": "17",
    "circulate_market_value": "17801926000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.73
      },
      {
        "name": "纯碱",
        "change_pct": 1.53
      },
      {
        "name": "食品",
        "change_pct": 1.21
      },
      {
        "name": "土壤修复",
        "change_pct": 0.91
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.5
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -4.12
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.83
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 70,
    "hot_rank_chg": 12,
    "stock_cnt": 5858,
    "price": "10.22",
    "change": "-2.57",
    "market_id": "33",
    "circulate_market_value": "41285323000.00",
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
        "change_pct": 0.49
      },
      {
        "name": "京津冀",
        "change_pct": -0.09
      },
      {
        "name": "光伏",
        "change_pct": -0.04
      },
      {
        "name": "碳中和",
        "change_pct": 0.39
      },
      {
        "name": "国产芯片",
        "change_pct": -1.12
      },
      {
        "name": "IGBT",
        "change_pct": -0.95
      },
      {
        "name": "颗粒硅",
        "change_pct": -1.19
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.04
      },
      {
        "name": "大硅片",
        "change_pct": -2.09
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 75,
    "hot_rank_chg": 138,
    "stock_cnt": 5858,
    "price": "6.99",
    "change": "-8.03",
    "market_id": "33",
    "circulate_market_value": "13124576500.00",
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
        "name": "光伏",
        "change_pct": -0.04
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.16
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.14
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.52
      },
      {
        "name": "氮化镓",
        "change_pct": -0.38
      },
      {
        "name": "碳化硅",
        "change_pct": -1.3
      },
      {
        "name": "地摊经济",
        "change_pct": 0.79
      },
      {
        "name": "人形机器人",
        "change_pct": 0.12
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": -0.14
      }
    ]
  },
  {
    "code": "603318",
    "name": "水发燃气",
    "hot_rank": 81,
    "hot_rank_chg": -28,
    "stock_cnt": 5858,
    "price": "8.85",
    "change": "3.51",
    "market_id": "17",
    "circulate_market_value": "4062777700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": -0.82
      },
      {
        "name": "电子特气",
        "change_pct": -0.3
      },
      {
        "name": "一带一路",
        "change_pct": 0.49
      },
      {
        "name": "强势人气股",
        "change_pct": 0.48
      },
      {
        "name": "天然气",
        "change_pct": 1.02
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.72
      },
      {
        "name": "国企改革",
        "change_pct": 0.49
      },
      {
        "name": "氦气",
        "change_pct": -0.69
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 82,
    "hot_rank_chg": 114,
    "stock_cnt": 5858,
    "price": "12.28",
    "change": "-3.83",
    "market_id": "33",
    "circulate_market_value": "42708984000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.92
      },
      {
        "name": "人工智能",
        "change_pct": -0.57
      },
      {
        "name": "VR&AR",
        "change_pct": -0.2
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.75
      },
      {
        "name": "大数据",
        "change_pct": -1.32
      },
      {
        "name": "教育",
        "change_pct": 0.23
      },
      {
        "name": "百度概念股",
        "change_pct": -1.36
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.97
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.92
      },
      {
        "name": "传媒",
        "change_pct": -0.06
      },
      {
        "name": "快手概念股",
        "change_pct": -1.26
      },
      {
        "name": "NFT",
        "change_pct": -0.57
      },
      {
        "name": "元宇宙",
        "change_pct": -0.8
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.78
      },
      {
        "name": "web3.0",
        "change_pct": -0.61
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.22
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.26
      },
      {
        "name": "职业教育",
        "change_pct": 0.2
      },
      {
        "name": "云游戏",
        "change_pct": -1.56
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.01
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -0.73
      },
      {
        "name": "AI营销",
        "change_pct": -1.52
      },
      {
        "name": "词元概念/Token",
        "change_pct": -3.0
      },
      {
        "name": "人工智能大模型",
        "change_pct": -0.88
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -1.42
      },
      {
        "name": "智谱AI",
        "change_pct": -1.39
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.02
      },
      {
        "name": "区块链",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "002038",
    "name": "双鹭药业",
    "hot_rank": 83,
    "hot_rank_chg": 69,
    "stock_cnt": 5858,
    "price": "6.82",
    "change": "1.49",
    "market_id": "33",
    "circulate_market_value": "5810035200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -0.04
      },
      {
        "name": "创新药",
        "change_pct": 1.38
      },
      {
        "name": "基因测序",
        "change_pct": 1.18
      },
      {
        "name": "医药",
        "change_pct": 1.73
      },
      {
        "name": "疫苗",
        "change_pct": 2.07
      },
      {
        "name": "化学原料药",
        "change_pct": 1.49
      },
      {
        "name": "流感",
        "change_pct": 1.62
      },
      {
        "name": "长寿药NMN",
        "change_pct": 1.74
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.97
      },
      {
        "name": "肝素",
        "change_pct": 1.65
      },
      {
        "name": "基因编辑",
        "change_pct": 1.51
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.9
      },
      {
        "name": "医美",
        "change_pct": 1.43
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 2.06
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.88
      },
      {
        "name": "减肥药",
        "change_pct": 0.78
      }
    ]
  },
  {
    "code": "601600",
    "name": "中国铝业",
    "hot_rank": 85,
    "hot_rank_chg": 151,
    "stock_cnt": 5858,
    "price": "8.44",
    "change": "4.07",
    "market_id": "17",
    "circulate_market_value": "111436189000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 1.48
      },
      {
        "name": "稀土磁材",
        "change_pct": 1.87
      },
      {
        "name": "央企改革",
        "change_pct": 0.03
      },
      {
        "name": "有色金属",
        "change_pct": 1.14
      },
      {
        "name": "白马股",
        "change_pct": 0.13
      },
      {
        "name": "中字头",
        "change_pct": -0.13
      },
      {
        "name": "国企改革",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 89,
    "hot_rank_chg": 78,
    "stock_cnt": 5858,
    "price": "10.71",
    "change": "-6.54",
    "market_id": "33",
    "circulate_market_value": "8664593400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.07
      },
      {
        "name": "大飞机",
        "change_pct": -1.42
      },
      {
        "name": "北斗导航",
        "change_pct": -3.22
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.01
      },
      {
        "name": "军民融合",
        "change_pct": -1.08
      },
      {
        "name": "磁悬浮",
        "change_pct": 0.01
      },
      {
        "name": "军工",
        "change_pct": -1.3
      },
      {
        "name": "碳纤维",
        "change_pct": -0.34
      },
      {
        "name": "无人机",
        "change_pct": -1.55
      },
      {
        "name": "航天",
        "change_pct": -2.49
      },
      {
        "name": "卫星互联网",
        "change_pct": -3.73
      },
      {
        "name": "低空经济",
        "change_pct": -0.99
      },
      {
        "name": "海洋经济",
        "change_pct": -0.71
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 92,
    "hot_rank_chg": 170,
    "stock_cnt": 5858,
    "price": "6.75",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "4426015700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业零售",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.92
      },
      {
        "name": "新零售",
        "change_pct": 1.34
      },
      {
        "name": "农业种植",
        "change_pct": 1.24
      },
      {
        "name": "冷链",
        "change_pct": 0.69
      },
      {
        "name": "大农业",
        "change_pct": 0.91
      },
      {
        "name": "预制菜",
        "change_pct": 0.96
      },
      {
        "name": "国企改革",
        "change_pct": 0.49
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.68
      },
      {
        "name": "免税店概念",
        "change_pct": 1.05
      },
      {
        "name": "湖北国企改革",
        "change_pct": 1.75
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 95,
    "hot_rank_chg": 278,
    "stock_cnt": 5858,
    "price": "5.10",
    "change": "9.91",
    "market_id": "33",
    "circulate_market_value": "5267972600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.78
      },
      {
        "name": "锂电池",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": 0.48
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 4.32
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.66
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.16
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 1.15
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5858, "price": "25.11", "change": "4.06", "market_id": "33", "circulate_market_value": "83431786000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 2, "hot_rank_chg": 8, "stock_cnt": 5858, "price": "99.80", "change": "0.76", "market_id": "17", "circulate_market_value": "178583570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5858, "price": "36.00", "change": "-6.25", "market_id": "33", "circulate_market_value": "102962616000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5858, "price": "6.98", "change": "2.20", "market_id": "33", "circulate_market_value": "246862600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.95}, {"name": "手机产业链", "change_pct": 0.77}, {"name": "超高清视频", "change_pct": 0.02}, {"name": "苹果产业链", "change_pct": 0.86}, {"name": "电竞", "change_pct": -0.97}, {"name": "半导体", "change_pct": -0.71}, {"name": "人工智能", "change_pct": -0.57}, {"name": "互联网医疗", "change_pct": 1.55}, {"name": "VR&AR", "change_pct": -0.2}, {"name": "OLED", "change_pct": 0.46}, {"name": "京津冀", "change_pct": -0.09}, {"name": "物联网", "change_pct": -0.66}, {"name": "指纹识别", "change_pct": 0.11}, {"name": "汽车零部件", "change_pct": 0.41}, {"name": "白马股", "change_pct": 0.13}, {"name": "智能制造", "change_pct": 0.05}, {"name": "小米概念股", "change_pct": 0.21}, {"name": "国产芯片", "change_pct": -1.12}, {"name": "液晶面板/LCD", "change_pct": 0.52}, {"name": "全息概念", "change_pct": -0.38}, {"name": "理想汽车概念股", "change_pct": 0.57}, {"name": "MicroLED", "change_pct": 0.46}, {"name": "钙钛矿电池", "change_pct": -0.2}, {"name": "智能手表", "change_pct": 0.52}, {"name": "MiniLED", "change_pct": 1.04}, {"name": "传感器", "change_pct": -0.33}, {"name": "大硅片", "change_pct": -2.09}, {"name": "AI PC", "change_pct": -0.2}, {"name": "华为产业链", "change_pct": -0.34}, {"name": "回购", "change_pct": 0.72}, {"name": "智能眼镜/MR头显", "change_pct": 0.17}, {"name": "玻璃基板封装", "change_pct": 1.74}]}, {"code": "002384", "name": "东山精密", "hot_rank": 5, "hot_rank_chg": 30, "stock_cnt": 5858, "price": "260.37", "change": "10.00", "market_id": "33", "circulate_market_value": "360956590000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 6, "hot_rank_chg": 17, "stock_cnt": 5858, "price": "33.75", "change": "2.27", "market_id": "17", "circulate_market_value": "11371048300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5858, "price": "571.80", "change": "3.85", "market_id": "17", "circulate_market_value": "382243690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 8, "hot_rank_chg": 37, "stock_cnt": 5858, "price": "147.90", "change": "10.00", "market_id": "17", "circulate_market_value": "354146780000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 9, "hot_rank_chg": -4, "stock_cnt": 5858, "price": "72.99", "change": "4.26", "market_id": "17", "circulate_market_value": "179091640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 10, "hot_rank_chg": 29, "stock_cnt": 5858, "price": "39.06", "change": "1.27", "market_id": "33", "circulate_market_value": "30560725000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 11, "hot_rank_chg": 6, "stock_cnt": 5858, "price": "81.79", "change": "-4.33", "market_id": "33", "circulate_market_value": "119972173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 12, "hot_rank_chg": 32, "stock_cnt": 5858, "price": "57.78", "change": "6.98", "market_id": "33", "circulate_market_value": "66852218000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 13, "hot_rank_chg": 14, "stock_cnt": 5858, "price": "22.30", "change": "-1.89", "market_id": "17", "circulate_market_value": "46641391000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 14, "hot_rank_chg": 16, "stock_cnt": 5858, "price": "52.06", "change": "-0.12", "market_id": "33", "circulate_market_value": "81950539000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 15, "hot_rank_chg": -3, "stock_cnt": 5858, "price": "4.08", "change": "9.97", "market_id": "17", "circulate_market_value": "10275520300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.92}, {"name": "工业大麻", "change_pct": -0.04}, {"name": "中药", "change_pct": 1.44}, {"name": "保健品", "change_pct": 1.59}, {"name": "医药", "change_pct": 1.73}, {"name": "化学原料药", "change_pct": 1.49}, {"name": "流感", "change_pct": 1.62}, {"name": "振兴东北", "change_pct": 1.28}, {"name": "食品", "change_pct": 1.21}]}, {"code": "002156", "name": "通富微电", "hot_rank": 16, "hot_rank_chg": -3, "stock_cnt": 5858, "price": "72.93", "change": "-0.87", "market_id": "33", "circulate_market_value": "110667791000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 17, "hot_rank_chg": 56, "stock_cnt": 5858, "price": "16.65", "change": "-7.76", "market_id": "33", "circulate_market_value": "53706071000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 18, "hot_rank_chg": 2, "stock_cnt": 5858, "price": "1178.99", "change": "6.41", "market_id": "33", "circulate_market_value": "1308607900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 19, "hot_rank_chg": 28, "stock_cnt": 5858, "price": "52.40", "change": "-2.96", "market_id": "17", "circulate_market_value": "44359395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 20, "hot_rank_chg": -9, "stock_cnt": 5858, "price": "35.57", "change": "-3.84", "market_id": "33", "circulate_market_value": "38371754000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 21, "hot_rank_chg": 36, "stock_cnt": 5858, "price": "137.13", "change": "10.00", "market_id": "33", "circulate_market_value": "263675000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 22, "hot_rank_chg": 6, "stock_cnt": 5858, "price": "99.95", "change": "-5.82", "market_id": "17", "circulate_market_value": "146232280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 23, "hot_rank_chg": -9, "stock_cnt": 5858, "price": "82.13", "change": "-10.00", "market_id": "17", "circulate_market_value": "97117833000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 24, "hot_rank_chg": 36, "stock_cnt": 5858, "price": "6.29", "change": "4.49", "market_id": "17", "circulate_market_value": "6867967200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 1.73}, {"name": "化学原料药", "change_pct": 1.49}, {"name": "数字经济", "change_pct": -0.93}, {"name": "辅助生殖", "change_pct": 1.97}, {"name": "新冠病毒防治", "change_pct": 0.88}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 25, "hot_rank_chg": 16, "stock_cnt": 5858, "price": "13.33", "change": "2.07", "market_id": "33", "circulate_market_value": "14161843000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 26, "hot_rank_chg": 59, "stock_cnt": 5858, "price": "10.73", "change": "13.08", "market_id": "33", "circulate_market_value": "6257851600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 1.57}, {"name": "一带一路", "change_pct": 0.49}, {"name": "天然气", "change_pct": 1.02}, {"name": "油气改革", "change_pct": 1.9}, {"name": "页岩气", "change_pct": 1.94}, {"name": "深地经济", "change_pct": 1.3}]}, {"code": "300502", "name": "新易盛", "hot_rank": 27, "hot_rank_chg": 69, "stock_cnt": 5858, "price": "559.60", "change": "9.25", "market_id": "33", "circulate_market_value": "701874470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 28, "hot_rank_chg": -21, "stock_cnt": 5858, "price": "30.00", "change": "1.94", "market_id": "17", "circulate_market_value": "5488000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 29, "hot_rank_chg": 5, "stock_cnt": 5858, "price": "42.04", "change": "1.84", "market_id": "17", "circulate_market_value": "143480400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 30, "hot_rank_chg": -5, "stock_cnt": 5858, "price": "27.62", "change": "-4.73", "market_id": "33", "circulate_market_value": "20919805000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 31, "hot_rank_chg": 5, "stock_cnt": 5858, "price": "23.54", "change": "10.00", "market_id": "17", "circulate_market_value": "9862496600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "磷化铟衬底"}, {"code": "002261", "name": "拓维信息", "hot_rank": 32, "hot_rank_chg": -14, "stock_cnt": 5858, "price": "31.19", "change": "-5.49", "market_id": "33", "circulate_market_value": "35747030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 33, "hot_rank_chg": -4, "stock_cnt": 5858, "price": "30.55", "change": "-3.32", "market_id": "33", "circulate_market_value": "23267412000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 35, "hot_rank_chg": 23, "stock_cnt": 5858, "price": "14.76", "change": "-6.17", "market_id": "17", "circulate_market_value": "73637916000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 36, "hot_rank_chg": 18, "stock_cnt": 5858, "price": "38.70", "change": "-3.35", "market_id": "33", "circulate_market_value": "155868940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600360", "name": "华微电子", "hot_rank": 37, "hot_rank_chg": 5, "stock_cnt": 5858, "price": "15.75", "change": "-7.46", "market_id": "17", "circulate_market_value": "15124651000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 38, "hot_rank_chg": 13, "stock_cnt": 5858, "price": "5.78", "change": "-3.35", "market_id": "17", "circulate_market_value": "71649395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.03}, {"name": "核电", "change_pct": -0.44}, {"name": "强势人气股", "change_pct": 0.48}, {"name": "电力体制改革", "change_pct": 0.71}, {"name": "水电", "change_pct": 0.58}, {"name": "火电", "change_pct": 1.11}, {"name": "光伏", "change_pct": -0.04}, {"name": "风电", "change_pct": -0.19}, {"name": "国企改革", "change_pct": 0.49}, {"name": "算电协同", "change_pct": -0.2}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 39, "hot_rank_chg": -31, "stock_cnt": 5858, "price": "7.71", "change": "-3.62", "market_id": "33", "circulate_market_value": "12534099000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.92}, {"name": "电竞", "change_pct": -0.97}, {"name": "手游", "change_pct": -1.42}, {"name": "强势人气股", "change_pct": 0.48}, {"name": "人工智能", "change_pct": -0.57}, {"name": "游戏", "change_pct": -0.97}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.93}, {"name": "腾讯概念股", "change_pct": -0.92}, {"name": "快手概念股", "change_pct": -1.26}, {"name": "元宇宙", "change_pct": -0.8}, {"name": "虚拟数字人", "change_pct": -0.78}, {"name": "东数西算/算力", "change_pct": -1.5}, {"name": "web3.0", "change_pct": -0.61}, {"name": "AIGC概念", "change_pct": -1.22}, {"name": "数据要素", "change_pct": -0.92}, {"name": "字节跳动概念股", "change_pct": -1.26}, {"name": "AI营销", "change_pct": -1.52}, {"name": "ChatGPT", "change_pct": -1.54}, {"name": "智能眼镜/MR头显", "change_pct": 0.17}, {"name": "人工智能大模型", "change_pct": -0.88}, {"name": "人形机器人", "change_pct": 0.12}, {"name": "短剧/互动影游", "change_pct": -1.36}, {"name": "多模态", "change_pct": -1.46}, {"name": "Sora/AI视频", "change_pct": -1.42}, {"name": "IP经济/谷子经济", "change_pct": 0.07}, {"name": "小红书概念股", "change_pct": -1.02}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 40, "hot_rank_chg": 50, "stock_cnt": 5858, "price": "230.99", "change": "6.94", "market_id": "33", "circulate_market_value": "180287310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 41, "hot_rank_chg": 92, "stock_cnt": 5858, "price": "181.97", "change": "-17.96", "market_id": "33", "circulate_market_value": "5611309900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 42, "hot_rank_chg": 34, "stock_cnt": 5858, "price": "53.28", "change": "6.28", "market_id": "17", "circulate_market_value": "211606160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003020", "name": "立方制药", "hot_rank": 43, "hot_rank_chg": -17, "stock_cnt": 5858, "price": "21.02", "change": "2.09", "market_id": "33", "circulate_market_value": "3542884300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 44, "hot_rank_chg": 12, "stock_cnt": 5858, "price": "31.79", "change": "-3.55", "market_id": "33", "circulate_market_value": "9300598500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 45, "hot_rank_chg": 26, "stock_cnt": 5858, "price": "64.52", "change": "2.22", "market_id": "17", "circulate_market_value": "1280340830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 46, "hot_rank_chg": 21, "stock_cnt": 5858, "price": "15.29", "change": "-0.07", "market_id": "17", "circulate_market_value": "19513950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 47, "hot_rank_chg": 8, "stock_cnt": 5858, "price": "5.07", "change": "5.41", "market_id": "33", "circulate_market_value": "101999915000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.95}, {"name": "手机产业链", "change_pct": 0.77}, {"name": "超高清视频", "change_pct": 0.02}, {"name": "电竞", "change_pct": -0.97}, {"name": "半导体", "change_pct": -0.71}, {"name": "OLED", "change_pct": 0.46}, {"name": "光伏", "change_pct": -0.04}, {"name": "黑色家电", "change_pct": -0.65}, {"name": "家电", "change_pct": -0.05}, {"name": "智能制造", "change_pct": 0.05}, {"name": "工业互联网", "change_pct": -0.33}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.21}, {"name": "国产芯片", "change_pct": -1.12}, {"name": "腾讯概念股", "change_pct": -0.92}, {"name": "液晶面板/LCD", "change_pct": 0.52}, {"name": "MicroLED", "change_pct": 0.46}, {"name": "MiniLED", "change_pct": 1.04}, {"name": "华为产业链", "change_pct": -0.34}, {"name": "玻璃基板封装", "change_pct": 1.74}]}, {"code": "600129", "name": "太极集团", "hot_rank": 48, "hot_rank_chg": -33, "stock_cnt": 5858, "price": "17.21", "change": "-4.07", "market_id": "17", "circulate_market_value": "9489907000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 49, "hot_rank_chg": 78, "stock_cnt": 5858, "price": "123.64", "change": "2.83", "market_id": "17", "circulate_market_value": "305796370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603313", "name": "梦百合", "hot_rank": 50, "hot_rank_chg": -26, "stock_cnt": 5858, "price": "8.48", "change": "6.13", "market_id": "17", "circulate_market_value": "4838576800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.92}, {"name": "家具家居", "change_pct": 0.46}, {"name": "独角兽", "change_pct": 0.85}, {"name": "C2M", "change_pct": 0.64}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 51, "hot_rank_chg": 78, "stock_cnt": 5858, "price": "46.77", "change": "4.07", "market_id": "17", "circulate_market_value": "68377497000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 52, "hot_rank_chg": 45, "stock_cnt": 5858, "price": "19.28", "change": "-9.74", "market_id": "17", "circulate_market_value": "63610491000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 53, "hot_rank_chg": 77, "stock_cnt": 5858, "price": "12.83", "change": "-5.94", "market_id": "33", "circulate_market_value": "92372213000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.95}, {"name": "手机产业链", "change_pct": 0.77}, {"name": "苹果产业链", "change_pct": 0.86}, {"name": "无线充电", "change_pct": 0.43}, {"name": "稀土磁材", "change_pct": 1.87}, {"name": "5G", "change_pct": 0.02}, {"name": "VR&AR", "change_pct": -0.2}, {"name": "新能源汽车", "change_pct": 0.16}, {"name": "机器人", "change_pct": 0.09}, {"name": "小米概念股", "change_pct": 0.21}, {"name": "第三代半导体", "change_pct": -0.52}, {"name": "激光雷达", "change_pct": 0.82}, {"name": "减速器", "change_pct": 0.36}, {"name": "无线耳机", "change_pct": -0.1}, {"name": "氮化镓", "change_pct": -0.38}, {"name": "AI PC", "change_pct": -0.2}, {"name": "华为产业链", "change_pct": -0.34}, {"name": "回购", "change_pct": 0.72}, {"name": "人形机器人", "change_pct": 0.12}, {"name": "AI手机", "change_pct": -0.33}, {"name": "液冷服务器", "change_pct": -0.21}]}, {"code": "001309", "name": "德明利", "hot_rank": 55, "hot_rank_chg": 22, "stock_cnt": 5858, "price": "714.00", "change": "-0.83", "market_id": "33", "circulate_market_value": "117858559000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 56, "hot_rank_chg": 49, "stock_cnt": 5858, "price": "103.62", "change": "-4.07", "market_id": "33", "circulate_market_value": "164499670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 57, "hot_rank_chg": 35, "stock_cnt": 5858, "price": "19.14", "change": "-5.58", "market_id": "33", "circulate_market_value": "64377487000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 58, "hot_rank_chg": 37, "stock_cnt": 5858, "price": "156.36", "change": "1.38", "market_id": "33", "circulate_market_value": "157139560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 59, "hot_rank_chg": 2, "stock_cnt": 5858, "price": "8.60", "change": "4.12", "market_id": "33", "circulate_market_value": "4658809200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 1.57}, {"name": "油气管网", "change_pct": 1.15}, {"name": "海工装备", "change_pct": -0.12}, {"name": "举牌", "change_pct": 0.28}, {"name": "天然气", "change_pct": 1.02}, {"name": "山东国企改革", "change_pct": 0.72}, {"name": "风电", "change_pct": -0.19}, {"name": "页岩气", "change_pct": 1.94}, {"name": "国企改革", "change_pct": 0.49}, {"name": "深地经济", "change_pct": 1.3}]}, {"code": "301526", "name": "国际复材", "hot_rank": 60, "hot_rank_chg": 204, "stock_cnt": 5858, "price": "38.27", "change": "12.69", "market_id": "33", "circulate_market_value": "53746117000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 61, "hot_rank_chg": -15, "stock_cnt": 5858, "price": "9.95", "change": "-9.96", "market_id": "17", "circulate_market_value": "17801926000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.73}, {"name": "纯碱", "change_pct": 1.53}, {"name": "食品", "change_pct": 1.21}, {"name": "土壤修复", "change_pct": 0.91}, {"name": "东数西算/算力", "change_pct": -1.5}, {"name": "OpenClaw概念", "change_pct": -4.12}, {"name": "DeepSeek概念股", "change_pct": -1.83}]}, {"code": "300059", "name": "东方财富", "hot_rank": 62, "hot_rank_chg": 125, "stock_cnt": 5858, "price": "19.70", "change": "-0.86", "market_id": "33", "circulate_market_value": "263059930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300065", "name": "海兰信", "hot_rank": 63, "hot_rank_chg": 30, "stock_cnt": 5858, "price": "21.36", "change": "-16.65", "market_id": "33", "circulate_market_value": "14031279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 64, "hot_rank_chg": -14, "stock_cnt": 5858, "price": "95.01", "change": "9.32", "market_id": "33", "circulate_market_value": "68817208000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 65, "hot_rank_chg": 33, "stock_cnt": 5858, "price": "27.75", "change": "1.43", "market_id": "17", "circulate_market_value": "571699760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 66, "hot_rank_chg": 53, "stock_cnt": 5858, "price": "185.55", "change": "-1.84", "market_id": "33", "circulate_market_value": "59101896000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 67, "hot_rank_chg": 43, "stock_cnt": 5858, "price": "14.72", "change": "-9.97", "market_id": "33", "circulate_market_value": "23391862000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 68, "hot_rank_chg": 2, "stock_cnt": 5858, "price": "109.67", "change": "1.41", "market_id": "17", "circulate_market_value": "39560535000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 69, "hot_rank_chg": 62, "stock_cnt": 5858, "price": "156.92", "change": "-4.07", "market_id": "17", "circulate_market_value": "313771360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 70, "hot_rank_chg": 12, "stock_cnt": 5858, "price": "10.22", "change": "-2.57", "market_id": "33", "circulate_market_value": "41285323000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.71}, {"name": "一带一路", "change_pct": 0.49}, {"name": "京津冀", "change_pct": -0.09}, {"name": "光伏", "change_pct": -0.04}, {"name": "碳中和", "change_pct": 0.39}, {"name": "国产芯片", "change_pct": -1.12}, {"name": "IGBT", "change_pct": -0.95}, {"name": "颗粒硅", "change_pct": -1.19}, {"name": "异质结电池HJT", "change_pct": 0.04}, {"name": "大硅片", "change_pct": -2.09}]}, {"code": "300418", "name": "昆仑万维", "hot_rank": 71, "hot_rank_chg": 86, "stock_cnt": 5858, "price": "44.95", "change": "-6.74", "market_id": "33", "circulate_market_value": "52830811000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 72, "hot_rank_chg": 50, "stock_cnt": 5858, "price": "22.89", "change": "4.01", "market_id": "33", "circulate_market_value": "27463210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002245", "name": "蔚蓝锂芯", "hot_rank": 73, "hot_rank_chg": 198, "stock_cnt": 5858, "price": "20.89", "change": "10.01", "market_id": "33", "circulate_market_value": "33561869000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 74, "hot_rank_chg": -41, "stock_cnt": 5858, "price": "220.71", "change": "1.82", "market_id": "33", "circulate_market_value": "99327394000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 75, "hot_rank_chg": 138, "stock_cnt": 5858, "price": "6.99", "change": "-8.03", "market_id": "33", "circulate_market_value": "13124576500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.71}, {"name": "光伏", "change_pct": -0.04}, {"name": "新能源汽车", "change_pct": 0.16}, {"name": "新能源车零部件", "change_pct": 0.14}, {"name": "第三代半导体", "change_pct": -0.52}, {"name": "氮化镓", "change_pct": -0.38}, {"name": "碳化硅", "change_pct": -1.3}, {"name": "地摊经济", "change_pct": 0.79}, {"name": "人形机器人", "change_pct": 0.12}, {"name": "铜缆高速连接器", "change_pct": -0.14}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 76, "hot_rank_chg": 71, "stock_cnt": 5858, "price": "274.73", "change": "5.96", "market_id": "33", "circulate_market_value": "299012850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 77, "hot_rank_chg": 64, "stock_cnt": 5858, "price": "41.29", "change": "-1.53", "market_id": "17", "circulate_market_value": "68709526000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 78, "hot_rank_chg": 33, "stock_cnt": 5858, "price": "49.69", "change": "-2.91", "market_id": "17", "circulate_market_value": "63186870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 80, "hot_rank_chg": 204, "stock_cnt": 5858, "price": "104.86", "change": "9.02", "market_id": "33", "circulate_market_value": "242313240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603318", "name": "水发燃气", "hot_rank": 81, "hot_rank_chg": -28, "stock_cnt": 5858, "price": "8.85", "change": "3.51", "market_id": "17", "circulate_market_value": "4062777700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "燃气轮机", "change_pct": -0.82}, {"name": "电子特气", "change_pct": -0.3}, {"name": "一带一路", "change_pct": 0.49}, {"name": "强势人气股", "change_pct": 0.48}, {"name": "天然气", "change_pct": 1.02}, {"name": "山东国企改革", "change_pct": 0.72}, {"name": "国企改革", "change_pct": 0.49}, {"name": "氦气", "change_pct": -0.69}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 82, "hot_rank_chg": 114, "stock_cnt": 5858, "price": "12.28", "change": "-3.83", "market_id": "33", "circulate_market_value": "42708984000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.92}, {"name": "人工智能", "change_pct": -0.57}, {"name": "VR&AR", "change_pct": -0.2}, {"name": "直播/短视频", "change_pct": -0.75}, {"name": "大数据", "change_pct": -1.32}, {"name": "教育", "change_pct": 0.23}, {"name": "百度概念股", "change_pct": -1.36}, {"name": "阿里巴巴概念股", "change_pct": -0.97}, {"name": "腾讯概念股", "change_pct": -0.92}, {"name": "传媒", "change_pct": -0.06}, {"name": "快手概念股", "change_pct": -1.26}, {"name": "NFT", "change_pct": -0.57}, {"name": "元宇宙", "change_pct": -0.8}, {"name": "虚拟数字人", "change_pct": -0.78}, {"name": "web3.0", "change_pct": -0.61}, {"name": "AIGC概念", "change_pct": -1.22}, {"name": "字节跳动概念股", "change_pct": -1.26}, {"name": "职业教育", "change_pct": 0.2}, {"name": "云游戏", "change_pct": -1.56}, {"name": "网红/MCN", "change_pct": -0.01}, {"name": "5G消息/RCS", "change_pct": -0.73}, {"name": "AI营销", "change_pct": -1.52}, {"name": "词元概念/Token", "change_pct": -3.0}, {"name": "人工智能大模型", "change_pct": -0.88}, {"name": "Sora/AI视频", "change_pct": -1.42}, {"name": "智谱AI", "change_pct": -1.39}, {"name": "小红书概念股", "change_pct": -1.02}, {"name": "区块链", "change_pct": -0.61}]}, {"code": "002038", "name": "双鹭药业", "hot_rank": 83, "hot_rank_chg": 69, "stock_cnt": 5858, "price": "6.82", "change": "1.49", "market_id": "33", "circulate_market_value": "5810035200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -0.04}, {"name": "创新药", "change_pct": 1.38}, {"name": "基因测序", "change_pct": 1.18}, {"name": "医药", "change_pct": 1.73}, {"name": "疫苗", "change_pct": 2.07}, {"name": "化学原料药", "change_pct": 1.49}, {"name": "流感", "change_pct": 1.62}, {"name": "长寿药NMN", "change_pct": 1.74}, {"name": "辅助生殖", "change_pct": 1.97}, {"name": "肝素", "change_pct": 1.65}, {"name": "基因编辑", "change_pct": 1.51}, {"name": "肝炎概念", "change_pct": 0.9}, {"name": "医美", "change_pct": 1.43}, {"name": "阿尔茨海默病", "change_pct": 2.06}, {"name": "新冠病毒防治", "change_pct": 0.88}, {"name": "减肥药", "change_pct": 0.78}]}, {"code": "002208", "name": "合肥城建", "hot_rank": 84, "hot_rank_chg": -65, "stock_cnt": 5858, "price": "18.79", "change": "-10.01", "market_id": "33", "circulate_market_value": "15089728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601600", "name": "中国铝业", "hot_rank": 85, "hot_rank_chg": 151, "stock_cnt": 5858, "price": "8.44", "change": "4.07", "market_id": "17", "circulate_market_value": "111436189000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 1.48}, {"name": "稀土磁材", "change_pct": 1.87}, {"name": "央企改革", "change_pct": 0.03}, {"name": "有色金属", "change_pct": 1.14}, {"name": "白马股", "change_pct": 0.13}, {"name": "中字头", "change_pct": -0.13}, {"name": "国企改革", "change_pct": 0.49}]}, {"code": "603928", "name": "兴业股份", "hot_rank": 86, "hot_rank_chg": 13, "stock_cnt": 5858, "price": "15.42", "change": "-8.87", "market_id": "17", "circulate_market_value": "5253655700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 87, "hot_rank_chg": 62, "stock_cnt": 5858, "price": "27.28", "change": "-4.18", "market_id": "33", "circulate_market_value": "51847331000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 88, "hot_rank_chg": 82, "stock_cnt": 5858, "price": "35.59", "change": "4.61", "market_id": "33", "circulate_market_value": "50538937000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 89, "hot_rank_chg": 78, "stock_cnt": 5858, "price": "10.71", "change": "-6.54", "market_id": "33", "circulate_market_value": "8664593400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.07}, {"name": "大飞机", "change_pct": -1.42}, {"name": "北斗导航", "change_pct": -3.22}, {"name": "高铁轨交", "change_pct": 0.01}, {"name": "军民融合", "change_pct": -1.08}, {"name": "磁悬浮", "change_pct": 0.01}, {"name": "军工", "change_pct": -1.3}, {"name": "碳纤维", "change_pct": -0.34}, {"name": "无人机", "change_pct": -1.55}, {"name": "航天", "change_pct": -2.49}, {"name": "卫星互联网", "change_pct": -3.73}, {"name": "低空经济", "change_pct": -0.99}, {"name": "海洋经济", "change_pct": -0.71}]}, {"code": "002049", "name": "紫光国微", "hot_rank": 90, "hot_rank_chg": 118, "stock_cnt": 5858, "price": "77.35", "change": "-5.37", "market_id": "33", "circulate_market_value": "65710042000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 91, "hot_rank_chg": -26, "stock_cnt": 5858, "price": "37.53", "change": "0.91", "market_id": "33", "circulate_market_value": "56633184000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 92, "hot_rank_chg": 170, "stock_cnt": 5858, "price": "6.75", "change": "9.94", "market_id": "33", "circulate_market_value": "4426015700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.92}, {"name": "新零售", "change_pct": 1.34}, {"name": "农业种植", "change_pct": 1.24}, {"name": "冷链", "change_pct": 0.69}, {"name": "大农业", "change_pct": 0.91}, {"name": "预制菜", "change_pct": 0.96}, {"name": "国企改革", "change_pct": 0.49}, {"name": "可降解塑料", "change_pct": 1.68}, {"name": "免税店概念", "change_pct": 1.05}, {"name": "湖北国企改革", "change_pct": 1.75}]}, {"code": "300604", "name": "长川科技", "hot_rank": 93, "hot_rank_chg": 107, "stock_cnt": 5858, "price": "332.68", "change": "2.69", "market_id": "33", "circulate_market_value": "162837360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 94, "hot_rank_chg": 13, "stock_cnt": 5858, "price": "89.10", "change": "2.31", "market_id": "33", "circulate_market_value": "310657260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 95, "hot_rank_chg": 278, "stock_cnt": 5858, "price": "5.10", "change": "9.91", "market_id": "33", "circulate_market_value": "5267972600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.78}, {"name": "锂电池", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": 0.48}, {"name": "铜箔/覆铜板", "change_pct": 4.32}, {"name": "粤港澳大湾区", "change_pct": 0.66}, {"name": "新能源汽车", "change_pct": 0.16}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 1.15}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 96, "hot_rank_chg": -9, "stock_cnt": 5858, "price": "392.16", "change": "3.03", "market_id": "17", "circulate_market_value": "159349630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 97, "hot_rank_chg": 125, "stock_cnt": 5858, "price": "40.53", "change": "5.20", "market_id": "33", "circulate_market_value": "61521720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 98, "hot_rank_chg": 27, "stock_cnt": 5858, "price": "118.96", "change": "1.44", "market_id": "33", "circulate_market_value": "113812289000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002422", "name": "科伦药业", "hot_rank": 99, "hot_rank_chg": 98, "stock_cnt": 5858, "price": "46.42", "change": "3.62", "market_id": "33", "circulate_market_value": "60282073000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000970", "name": "中科三环", "hot_rank": 100, "hot_rank_chg": 308, "stock_cnt": 5858, "price": "16.18", "change": "7.37", "market_id": "33", "circulate_market_value": "19670443000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000078": "ST/风险警示股"};