const UPDATE_TIME = "2026-08-05 13:56";
const THS_HOT = [
  {
    "name": "MLCC概念",
    "rise": 7.01,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886112"
  },
  {
    "name": "AI应用",
    "rise": 1.69,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": 0.62,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续93天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 6.17,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续216天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 4.46,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续263天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "无人驾驶",
    "rise": 2.59,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "智能汽车ETF",
    "code": "885736"
  },
  {
    "name": "算力租赁",
    "rise": 2.32,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续127天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "黄金概念",
    "rise": 4.38,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "PCB概念",
    "rise": 5.04,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续86天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": 2.88,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续427天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": 2.32,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "商业航天",
    "rise": 2.55,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续192天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "芯片概念",
    "rise": 4.08,
    "rate": 0,
    "tag": "33家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "小金属概念",
    "rise": 3.79,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "有色金属ETF",
    "code": "885552"
  },
  {
    "name": "人工智能",
    "rise": 1.78,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "专精特新",
    "rise": 2.88,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "首次上榜",
    "rankChg": 2,
    "etfName": "专精特新ETF",
    "code": "885929"
  },
  {
    "name": "核电",
    "rise": 1.57,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "绿色电力ETF",
    "code": "885571"
  },
  {
    "name": "国家大基金持股",
    "rise": 6.44,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "先进封装",
    "rise": 5.54,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "稀土永磁",
    "rise": 3.3,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "稀土ETF",
    "code": "885343"
  }
];
const THS_EVENTS = [
  {
    "title": "电子布暴涨18%！花旗确认覆铜板涨价窗口开启，建滔板块走强！",
    "desc": "",
    "heat": 990806,
    "direction": "电子布涨价",
    "themes": [
      "电子布"
    ],
    "stocks": [
      {
        "name": "国际复材",
        "code": "301526",
        "chg": 14.042695
      }
    ]
  },
  {
    "title": "日韩巨头涨价催化MLCC",
    "desc": "",
    "heat": 767086,
    "direction": "MLCC",
    "themes": [
      "MLCC概念"
    ],
    "stocks": [
      {
        "name": "龙鑫智能",
        "code": "920117",
        "chg": 29.970436
      }
    ]
  },
  {
    "title": "光芯片股再起波澜，磷化铟材料受资金追捧",
    "desc": "",
    "heat": 584123,
    "direction": "磷化铟",
    "themes": [
      "磷化铟",
      "金属铟"
    ],
    "stocks": [
      {
        "name": "锌业股份",
        "code": "000751",
        "chg": 10.107527
      }
    ]
  },
  {
    "title": "AI应用拐点将至？Palantir业绩炸裂，盘后飙涨近15%",
    "desc": "",
    "heat": 418687,
    "direction": "AI应用",
    "themes": [
      "AI应用",
      "人工智能"
    ],
    "stocks": [
      {
        "name": "汉鑫科技",
        "code": "920092",
        "chg": 23.036477
      }
    ]
  },
  {
    "title": "首部L3、L4级自动驾驶强制国标发布 拟于2027年7月实施，企业需建立全周期安全保障与检验体系",
    "desc": "",
    "heat": 409008,
    "direction": "无人驾驶",
    "themes": [
      "无人驾驶"
    ],
    "stocks": [
      {
        "name": "汉鑫科技",
        "code": "920092",
        "chg": 23.036477
      }
    ]
  },
  {
    "title": "美伊谈判出现反差 霍尔木兹方案浮出水面",
    "desc": "",
    "heat": 302900,
    "direction": "美伊战争/战后重建",
    "themes": [
      "战后重建",
      "白银",
      "黄金概念",
      "航运概念"
    ],
    "stocks": [
      {
        "name": "浩通科技",
        "code": "301026",
        "chg": 19.988833
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "大硅片",
    "change": "+8.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+7.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+7.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+7.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+7.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+7.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+7.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+7.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+7.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+6.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+6.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+6.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+6.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+6.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+6.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+6.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+6.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+6.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+5.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+5.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 7,
    "hot_rank_chg": -5,
    "stock_cnt": 5768,
    "price": "5.67",
    "change": "4.42",
    "market_id": "33",
    "circulate_market_value": "33196707000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.0
      },
      {
        "name": "人工智能",
        "change_pct": 2.08
      },
      {
        "name": "水利",
        "change_pct": 1.09
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.53
      },
      {
        "name": "大数据",
        "change_pct": 1.92
      },
      {
        "name": "园林",
        "change_pct": 1.83
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 3.81
      },
      {
        "name": "数字经济",
        "change_pct": 1.65
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.55
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.56
      },
      {
        "name": "第三代半导体",
        "change_pct": 4.67
      },
      {
        "name": "快手概念股",
        "change_pct": 1.63
      },
      {
        "name": "IGBT",
        "change_pct": 3.84
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.45
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.45
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.87
      },
      {
        "name": "氮化镓",
        "change_pct": 4.28
      },
      {
        "name": "AI营销",
        "change_pct": 1.54
      },
      {
        "name": "多模态",
        "change_pct": 2.28
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.98
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.61
      },
      {
        "name": "区块链",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 14,
    "hot_rank_chg": -8,
    "stock_cnt": 5768,
    "price": "7.92",
    "change": "0.51",
    "market_id": "33",
    "circulate_market_value": "12875494700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.28
      },
      {
        "name": "电竞",
        "change_pct": 0.48
      },
      {
        "name": "手游",
        "change_pct": 0.78
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "人工智能",
        "change_pct": 2.08
      },
      {
        "name": "游戏",
        "change_pct": 0.93
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.65
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.55
      },
      {
        "name": "快手概念股",
        "change_pct": 1.63
      },
      {
        "name": "元宇宙",
        "change_pct": 1.85
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.45
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.26
      },
      {
        "name": "web3.0",
        "change_pct": 1.16
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.45
      },
      {
        "name": "数据要素",
        "change_pct": 1.65
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.87
      },
      {
        "name": "AI营销",
        "change_pct": 1.54
      },
      {
        "name": "ChatGPT",
        "change_pct": 2.98
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.98
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.72
      },
      {
        "name": "人形机器人",
        "change_pct": 3.02
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.63
      },
      {
        "name": "多模态",
        "change_pct": 2.28
      },
      {
        "name": "AI视频",
        "change_pct": 1.54
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.87
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.61
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 18,
    "hot_rank_chg": -7,
    "stock_cnt": 5768,
    "price": "11.73",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "3336969300.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "8",
    "change_reason": "AI教育",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 1.67
      },
      {
        "name": "密集调研",
        "change_pct": 2.93
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.95
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "教育",
        "change_pct": 2.39
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.76
      },
      {
        "name": "职业教育",
        "change_pct": 2.06
      },
      {
        "name": "在线教育",
        "change_pct": 3.53
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.86
      },
      {
        "name": "华为产业链",
        "change_pct": 2.68
      },
      {
        "name": "智谱AI",
        "change_pct": 1.59
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 19,
    "hot_rank_chg": 8,
    "stock_cnt": 5768,
    "price": "5.97",
    "change": "6.04",
    "market_id": "33",
    "circulate_market_value": "211141790000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 4.99
      },
      {
        "name": "手机产业链",
        "change_pct": 4.12
      },
      {
        "name": "超高清视频",
        "change_pct": 2.15
      },
      {
        "name": "苹果产业链",
        "change_pct": 4.33
      },
      {
        "name": "电竞",
        "change_pct": 0.48
      },
      {
        "name": "半导体",
        "change_pct": 5.78
      },
      {
        "name": "人工智能",
        "change_pct": 2.08
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.22
      },
      {
        "name": "VR&AR",
        "change_pct": 3.56
      },
      {
        "name": "OLED",
        "change_pct": 4.35
      },
      {
        "name": "京津冀",
        "change_pct": 0.94
      },
      {
        "name": "物联网",
        "change_pct": 2.16
      },
      {
        "name": "指纹识别",
        "change_pct": 4.2
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.98
      },
      {
        "name": "白马股",
        "change_pct": 0.64
      },
      {
        "name": "智能制造",
        "change_pct": 2.63
      },
      {
        "name": "小米概念股",
        "change_pct": 3.81
      },
      {
        "name": "国产芯片",
        "change_pct": 4.26
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 4.78
      },
      {
        "name": "全息概念",
        "change_pct": 2.78
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.56
      },
      {
        "name": "MicroLED",
        "change_pct": 4.38
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.36
      },
      {
        "name": "智能手表",
        "change_pct": 4.34
      },
      {
        "name": "MiniLED",
        "change_pct": 3.93
      },
      {
        "name": "传感器",
        "change_pct": 3.17
      },
      {
        "name": "大硅片",
        "change_pct": 8.03
      },
      {
        "name": "AI PC",
        "change_pct": 4.26
      },
      {
        "name": "华为产业链",
        "change_pct": 2.68
      },
      {
        "name": "回购",
        "change_pct": 1.47
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.98
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 5.26
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 20,
    "hot_rank_chg": -13,
    "stock_cnt": 5768,
    "price": "6.77",
    "change": "4.96",
    "market_id": "17",
    "circulate_market_value": "17050312000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.28
      },
      {
        "name": "工业大麻",
        "change_pct": 0.77
      },
      {
        "name": "中药",
        "change_pct": -0.41
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "保健品",
        "change_pct": -0.34
      },
      {
        "name": "民营医院",
        "change_pct": -0.05
      },
      {
        "name": "医药",
        "change_pct": 0.42
      },
      {
        "name": "化学原料药",
        "change_pct": 0.42
      },
      {
        "name": "流感",
        "change_pct": 0.54
      },
      {
        "name": "振兴东北",
        "change_pct": 0.15
      },
      {
        "name": "食品",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 26,
    "hot_rank_chg": -9,
    "stock_cnt": 5768,
    "price": "12.70",
    "change": "0.79",
    "market_id": "33",
    "circulate_market_value": "8698260500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 1.39
      },
      {
        "name": "核电",
        "change_pct": 1.86
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "充电桩",
        "change_pct": 2.18
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.26
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.15
      },
      {
        "name": "储能",
        "change_pct": 1.65
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.76
      },
      {
        "name": "智能电网",
        "change_pct": 1.78
      },
      {
        "name": "核聚变",
        "change_pct": 2.41
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 30,
    "hot_rank_chg": 29,
    "stock_cnt": 5768,
    "price": "3.17",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "30157339000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "先进封装",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 5.78
      },
      {
        "name": "无人驾驶",
        "change_pct": 2.7
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.98
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.15
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.85
      },
      {
        "name": "减速器",
        "change_pct": 2.35
      },
      {
        "name": "华为汽车",
        "change_pct": 1.82
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 36,
    "hot_rank_chg": -8,
    "stock_cnt": 5768,
    "price": "11.41",
    "change": "2.79",
    "market_id": "33",
    "circulate_market_value": "9230906700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 1.92
      },
      {
        "name": "大飞机",
        "change_pct": 1.86
      },
      {
        "name": "北斗导航",
        "change_pct": 1.84
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.35
      },
      {
        "name": "军民融合",
        "change_pct": 2.13
      },
      {
        "name": "磁悬浮",
        "change_pct": 1.35
      },
      {
        "name": "军工",
        "change_pct": 1.88
      },
      {
        "name": "碳纤维",
        "change_pct": 2.52
      },
      {
        "name": "无人机",
        "change_pct": 2.16
      },
      {
        "name": "航天",
        "change_pct": 2.76
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.45
      },
      {
        "name": "低空经济",
        "change_pct": 2.02
      },
      {
        "name": "海洋经济",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "002579",
    "name": "中京电子",
    "hot_rank": 37,
    "hot_rank_chg": 44,
    "stock_cnt": 5768,
    "price": "12.98",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "7572686400.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "PCB",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.0
      },
      {
        "name": "折叠屏",
        "change_pct": 4.99
      },
      {
        "name": "手机产业链",
        "change_pct": 4.12
      },
      {
        "name": "电子烟",
        "change_pct": 2.8
      },
      {
        "name": "半导体",
        "change_pct": 5.78
      },
      {
        "name": "5G",
        "change_pct": 3.21
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "VR&AR",
        "change_pct": 3.56
      },
      {
        "name": "光通信",
        "change_pct": 3.96
      },
      {
        "name": "OLED",
        "change_pct": 4.35
      },
      {
        "name": "PCB板",
        "change_pct": 5.57
      },
      {
        "name": "智能音箱",
        "change_pct": 2.97
      },
      {
        "name": "WiFi",
        "change_pct": 4.33
      },
      {
        "name": "小米概念股",
        "change_pct": 3.81
      },
      {
        "name": "6G",
        "change_pct": 3.15
      },
      {
        "name": "MiniLED",
        "change_pct": 3.93
      },
      {
        "name": "AI PC",
        "change_pct": 4.26
      },
      {
        "name": "华为产业链",
        "change_pct": 2.68
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 3.78
      },
      {
        "name": "毫米波雷达",
        "change_pct": 3.6
      },
      {
        "name": "交换机",
        "change_pct": 4.23
      },
      {
        "name": "人形机器人",
        "change_pct": 3.02
      },
      {
        "name": "AI手机",
        "change_pct": 4.51
      },
      {
        "name": "AI医疗",
        "change_pct": 0.92
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 40,
    "hot_rank_chg": -11,
    "stock_cnt": 5768,
    "price": "3.53",
    "change": "1.44",
    "market_id": "33",
    "circulate_market_value": "7071921500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 2.49
      },
      {
        "name": "数字孪生",
        "change_pct": 1.7
      },
      {
        "name": "深圳本地股",
        "change_pct": 1.5
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "人工智能",
        "change_pct": 2.08
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.22
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.26
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.35
      },
      {
        "name": "人脸识别",
        "change_pct": 1.92
      },
      {
        "name": "智慧停车",
        "change_pct": 1.7
      },
      {
        "name": "物联网",
        "change_pct": 2.16
      },
      {
        "name": "大数据",
        "change_pct": 1.92
      },
      {
        "name": "智慧城市",
        "change_pct": 1.77
      },
      {
        "name": "雄安新区",
        "change_pct": 0.64
      },
      {
        "name": "机器人",
        "change_pct": 2.55
      },
      {
        "name": "数字经济",
        "change_pct": 1.65
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.76
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.55
      },
      {
        "name": "建筑节能",
        "change_pct": 0.86
      },
      {
        "name": "旧改",
        "change_pct": 0.63
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.38
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.89
      },
      {
        "name": "华为产业链",
        "change_pct": 2.68
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -0.37
      },
      {
        "name": "区块链",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 43,
    "hot_rank_chg": 6,
    "stock_cnt": 5768,
    "price": "6.43",
    "change": "1.58",
    "market_id": "17",
    "circulate_market_value": "79706853000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.74
      },
      {
        "name": "核电",
        "change_pct": 1.86
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.06
      },
      {
        "name": "水电",
        "change_pct": -0.47
      },
      {
        "name": "火电",
        "change_pct": 0.17
      },
      {
        "name": "光伏",
        "change_pct": 2.03
      },
      {
        "name": "风电",
        "change_pct": 1.21
      },
      {
        "name": "国企改革",
        "change_pct": 0.7
      },
      {
        "name": "算电协同",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 45,
    "hot_rank_chg": -1,
    "stock_cnt": 5768,
    "price": "6.67",
    "change": "1.68",
    "market_id": "33",
    "circulate_market_value": "7594838000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 1.95
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.35
      },
      {
        "name": "航母",
        "change_pct": 1.49
      },
      {
        "name": "光伏",
        "change_pct": 2.03
      },
      {
        "name": "风电",
        "change_pct": 1.21
      },
      {
        "name": "军工",
        "change_pct": 1.88
      },
      {
        "name": "机器人",
        "change_pct": 2.55
      },
      {
        "name": "储能",
        "change_pct": 1.65
      },
      {
        "name": "国企改革",
        "change_pct": 0.7
      },
      {
        "name": "宁夏概念",
        "change_pct": 1.58
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 52,
    "hot_rank_chg": -12,
    "stock_cnt": 5768,
    "price": "9.58",
    "change": "4.13",
    "market_id": "17",
    "circulate_market_value": "17139945000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.26
      },
      {
        "name": "纯碱",
        "change_pct": 0.24
      },
      {
        "name": "食品",
        "change_pct": 0.18
      },
      {
        "name": "土壤修复",
        "change_pct": 1.48
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.26
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 2.47
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.31
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 62,
    "hot_rank_chg": 99,
    "stock_cnt": 5768,
    "price": "11.22",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "14397488000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "金刚石散热",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.0
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "智能制造",
        "change_pct": 2.63
      },
      {
        "name": "工业互联网",
        "change_pct": 1.86
      },
      {
        "name": "培育钻石",
        "change_pct": 5.37
      },
      {
        "name": "金刚线",
        "change_pct": 4.14
      },
      {
        "name": "国资入股",
        "change_pct": 1.49
      },
      {
        "name": "深地经济",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 63,
    "hot_rank_chg": -13,
    "stock_cnt": 5768,
    "price": "5.63",
    "change": "2.74",
    "market_id": "33",
    "circulate_market_value": "5815428500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.69
      },
      {
        "name": "锂电池",
        "change_pct": 2.94
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 6.21
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.72
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.15
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.72
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 71,
    "hot_rank_chg": -15,
    "stock_cnt": 5768,
    "price": "6.51",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "7413310000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "特高压",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.99
      },
      {
        "name": "光伏",
        "change_pct": 2.03
      },
      {
        "name": "特高压",
        "change_pct": 1.89
      },
      {
        "name": "智能电网",
        "change_pct": 1.78
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 79,
    "hot_rank_chg": -2,
    "stock_cnt": 5768,
    "price": "7.25",
    "change": "-1.76",
    "market_id": "33",
    "circulate_market_value": "24119271000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 1.39
      },
      {
        "name": "核电",
        "change_pct": 1.86
      },
      {
        "name": "5G",
        "change_pct": 3.21
      },
      {
        "name": "一带一路",
        "change_pct": 0.99
      },
      {
        "name": "充电桩",
        "change_pct": 2.18
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.53
      },
      {
        "name": "风电",
        "change_pct": 1.21
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.15
      },
      {
        "name": "储能",
        "change_pct": 1.65
      },
      {
        "name": "特高压",
        "change_pct": 1.89
      },
      {
        "name": "智能电网",
        "change_pct": 1.78
      },
      {
        "name": "海洋经济",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "603106",
    "name": "恒银科技",
    "hot_rank": 84,
    "hot_rank_chg": -31,
    "stock_cnt": 5768,
    "price": "9.13",
    "change": "1.00",
    "market_id": "17",
    "circulate_market_value": "4752347600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 1.88
      },
      {
        "name": "人工智能",
        "change_pct": 2.08
      },
      {
        "name": "人脸识别",
        "change_pct": 1.92
      },
      {
        "name": "智慧停车",
        "change_pct": 1.7
      },
      {
        "name": "雄安新区",
        "change_pct": 0.64
      },
      {
        "name": "信创",
        "change_pct": 2.33
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.45
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.45
      },
      {
        "name": "智慧政务",
        "change_pct": 1.86
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 88,
    "hot_rank_chg": -13,
    "stock_cnt": 5768,
    "price": "6.13",
    "change": "4.61",
    "market_id": "33",
    "circulate_market_value": "7948989400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.41
      },
      {
        "name": "创新药",
        "change_pct": 0.89
      },
      {
        "name": "央企改革",
        "change_pct": 0.74
      },
      {
        "name": "医疗器械",
        "change_pct": 0.95
      },
      {
        "name": "强势人气股",
        "change_pct": 3.42
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.22
      },
      {
        "name": "保健品",
        "change_pct": -0.34
      },
      {
        "name": "民营医院",
        "change_pct": -0.05
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 0.41
      },
      {
        "name": "医药",
        "change_pct": 0.42
      },
      {
        "name": "化学原料药",
        "change_pct": 0.42
      },
      {
        "name": "海南概念",
        "change_pct": 0.91
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": 1.45
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.65
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.18
      },
      {
        "name": "食品",
        "change_pct": 0.18
      },
      {
        "name": "国企改革",
        "change_pct": 0.7
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.38
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.89
      },
      {
        "name": "自贸区",
        "change_pct": 0.5
      },
      {
        "name": "合成生物",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "002607",
    "name": "中公教育",
    "hot_rank": 90,
    "hot_rank_chg": 173,
    "stock_cnt": 5768,
    "price": "2.35",
    "change": "9.81",
    "market_id": "33",
    "circulate_market_value": "13027084500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "职业教育",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 2.08
      },
      {
        "name": "教育",
        "change_pct": 2.39
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.76
      },
      {
        "name": "低价股",
        "change_pct": 0.15
      },
      {
        "name": "职业教育",
        "change_pct": 2.06
      },
      {
        "name": "在线教育",
        "change_pct": 3.53
      }
    ]
  },
  {
    "code": "002195",
    "name": "岩山科技",
    "hot_rank": 92,
    "hot_rank_chg": 10,
    "stock_cnt": 5768,
    "price": "7.15",
    "change": "1.71",
    "market_id": "33",
    "circulate_market_value": "40153209000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 2.2
      },
      {
        "name": "无人驾驶",
        "change_pct": 2.7
      },
      {
        "name": "人工智能",
        "change_pct": 2.08
      },
      {
        "name": "网络安全",
        "change_pct": 2.16
      },
      {
        "name": "游戏",
        "change_pct": 0.93
      },
      {
        "name": "大数据",
        "change_pct": 1.92
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": 1.45
      },
      {
        "name": "百度概念股",
        "change_pct": 1.49
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.76
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.55
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.87
      },
      {
        "name": "自动刹车",
        "change_pct": 2.57
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.72
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.63
      },
      {
        "name": "AI医疗",
        "change_pct": 0.92
      },
      {
        "name": "区块链",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "600666",
    "name": "奥瑞德",
    "hot_rank": 94,
    "hot_rank_chg": -23,
    "stock_cnt": 5768,
    "price": "3.93",
    "change": "3.97",
    "market_id": "17",
    "circulate_market_value": "9833345200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 2.26
      },
      {
        "name": "3D玻璃",
        "change_pct": 4.62
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.26
      },
      {
        "name": "词元概念/Token",
        "change_pct": 1.58
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.31
      },
      {
        "name": "RWA",
        "change_pct": 1.28
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 96,
    "hot_rank_chg": 29,
    "stock_cnt": 5768,
    "price": "7.85",
    "change": "2.75",
    "market_id": "33",
    "circulate_market_value": "9883374000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 2.08
      },
      {
        "name": "游戏",
        "change_pct": 0.93
      },
      {
        "name": "智能音箱",
        "change_pct": 2.97
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 3.81
      },
      {
        "name": "数字经济",
        "change_pct": 1.65
      },
      {
        "name": "百度概念股",
        "change_pct": 1.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.55
      },
      {
        "name": "拼多多概念股",
        "change_pct": 1.1
      },
      {
        "name": "传媒",
        "change_pct": 0.37
      },
      {
        "name": "全息概念",
        "change_pct": 2.78
      },
      {
        "name": "NFT",
        "change_pct": 0.42
      },
      {
        "name": "元宇宙",
        "change_pct": 1.85
      },
      {
        "name": "web3.0",
        "change_pct": 1.16
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.87
      },
      {
        "name": "数字人民币",
        "change_pct": 2.03
      },
      {
        "name": "智慧政务",
        "change_pct": 1.86
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.86
      },
      {
        "name": "盲盒",
        "change_pct": 0.82
      },
      {
        "name": "AI营销",
        "change_pct": 1.54
      },
      {
        "name": "华为产业链",
        "change_pct": 2.68
      },
      {
        "name": "供应链金融",
        "change_pct": 0.66
      },
      {
        "name": "ChatGPT",
        "change_pct": 2.98
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.61
      },
      {
        "name": "区块链",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "002036",
    "name": "联创电子",
    "hot_rank": 99,
    "hot_rank_chg": 293,
    "stock_cnt": 5768,
    "price": "7.80",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "8232648600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "国资入主",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": 1.36
      },
      {
        "name": "折叠屏",
        "change_pct": 4.99
      },
      {
        "name": "手机产业链",
        "change_pct": 4.12
      },
      {
        "name": "超高清视频",
        "change_pct": 2.15
      },
      {
        "name": "无线充电",
        "change_pct": 3.5
      },
      {
        "name": "特斯拉",
        "change_pct": 2.46
      },
      {
        "name": "股权转让",
        "change_pct": 2.26
      },
      {
        "name": "无人驾驶",
        "change_pct": 2.7
      },
      {
        "name": "VR&AR",
        "change_pct": 3.56
      },
      {
        "name": "OLED",
        "change_pct": 4.35
      },
      {
        "name": "3D感应",
        "change_pct": 3.47
      },
      {
        "name": "人脸识别",
        "change_pct": 1.92
      },
      {
        "name": "3D玻璃",
        "change_pct": 4.62
      },
      {
        "name": "指纹识别",
        "change_pct": 4.2
      },
      {
        "name": "手势识别",
        "change_pct": 3.1
      },
      {
        "name": "虹膜识别",
        "change_pct": 1.87
      },
      {
        "name": "复牌股",
        "change_pct": 3.36
      },
      {
        "name": "机器视觉",
        "change_pct": 3.38
      },
      {
        "name": "无人机",
        "change_pct": 2.16
      },
      {
        "name": "智能制造",
        "change_pct": 2.63
      },
      {
        "name": "国产芯片",
        "change_pct": 4.26
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 4.78
      },
      {
        "name": "激光雷达",
        "change_pct": 4.16
      },
      {
        "name": "元宇宙",
        "change_pct": 1.85
      },
      {
        "name": "电子后视镜",
        "change_pct": 2.47
      },
      {
        "name": "无线耳机",
        "change_pct": 3.43
      },
      {
        "name": "云游戏",
        "change_pct": 1.83
      },
      {
        "name": "AI PC",
        "change_pct": 4.26
      },
      {
        "name": "国资入股",
        "change_pct": 1.49
      },
      {
        "name": "华为产业链",
        "change_pct": 2.68
      },
      {
        "name": "毫米波雷达",
        "change_pct": 3.6
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.98
      },
      {
        "name": "英伟达概念",
        "change_pct": 3.87
      },
      {
        "name": "人形机器人",
        "change_pct": 3.02
      },
      {
        "name": "智能座舱",
        "change_pct": 3.25
      },
      {
        "name": "AI手机",
        "change_pct": 4.51
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "300308", "name": "中际旭创", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5768, "price": "947.74", "change": "-7.26", "market_id": "33", "circulate_market_value": "1051934330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 2, "hot_rank_chg": 6, "stock_cnt": 5768, "price": "57.80", "change": "6.39", "market_id": "33", "circulate_market_value": "66875338000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5768, "price": "188.83", "change": "5.44", "market_id": "33", "circulate_market_value": "261779130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 4, "hot_rank_chg": 28, "stock_cnt": 5768, "price": "36.94", "change": "7.63", "market_id": "33", "circulate_market_value": "105651085000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 5, "hot_rank_chg": 10, "stock_cnt": 5768, "price": "17.53", "change": "7.09", "market_id": "17", "circulate_market_value": "25816551000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5768, "price": "54.30", "change": "-1.27", "market_id": "17", "circulate_market_value": "244515020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5768, "price": "5.67", "change": "4.42", "market_id": "33", "circulate_market_value": "33196707000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.0}, {"name": "人工智能", "change_pct": 2.08}, {"name": "水利", "change_pct": 1.09}, {"name": "直播/短视频", "change_pct": 1.53}, {"name": "大数据", "change_pct": 1.92}, {"name": "园林", "change_pct": 1.83}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 3.81}, {"name": "数字经济", "change_pct": 1.65}, {"name": "腾讯概念股", "change_pct": 1.55}, {"name": "理想汽车概念股", "change_pct": 2.56}, {"name": "第三代半导体", "change_pct": 4.67}, {"name": "快手概念股", "change_pct": 1.63}, {"name": "IGBT", "change_pct": 3.84}, {"name": "虚拟数字人", "change_pct": 1.45}, {"name": "AIGC概念", "change_pct": 1.45}, {"name": "字节跳动概念股", "change_pct": 1.87}, {"name": "氮化镓", "change_pct": 4.28}, {"name": "AI营销", "change_pct": 1.54}, {"name": "多模态", "change_pct": 2.28}, {"name": "液冷服务器", "change_pct": 3.98}, {"name": "小红书概念股", "change_pct": 1.61}, {"name": "区块链", "change_pct": 1.32}]}, {"code": "300502", "name": "新易盛", "hot_rank": 8, "hot_rank_chg": 8, "stock_cnt": 5768, "price": "424.30", "change": "-5.29", "market_id": "33", "circulate_market_value": "532175370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 9, "hot_rank_chg": 25, "stock_cnt": 5768, "price": "39.81", "change": "10.00", "market_id": "17", "circulate_market_value": "33701288000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "000815", "name": "美利云", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5768, "price": "18.85", "change": "2.61", "market_id": "33", "circulate_market_value": "13105708200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 11, "hot_rank_chg": 2, "stock_cnt": 5768, "price": "385.44", "change": "8.26", "market_id": "17", "circulate_market_value": "257663530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 12, "hot_rank_chg": 6, "stock_cnt": 5768, "price": "82.71", "change": "10.00", "market_id": "33", "circulate_market_value": "54012577000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "磷化铟"}, {"code": "600667", "name": "太极实业", "hot_rank": 13, "hot_rank_chg": 18, "stock_cnt": 5768, "price": "18.45", "change": "7.58", "market_id": "17", "circulate_market_value": "38588953000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 14, "hot_rank_chg": -8, "stock_cnt": 5768, "price": "7.92", "change": "0.51", "market_id": "33", "circulate_market_value": "12875494700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.28}, {"name": "电竞", "change_pct": 0.48}, {"name": "手游", "change_pct": 0.78}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "人工智能", "change_pct": 2.08}, {"name": "游戏", "change_pct": 0.93}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.65}, {"name": "腾讯概念股", "change_pct": 1.55}, {"name": "快手概念股", "change_pct": 1.63}, {"name": "元宇宙", "change_pct": 1.85}, {"name": "虚拟数字人", "change_pct": 1.45}, {"name": "东数西算/算力", "change_pct": 2.26}, {"name": "web3.0", "change_pct": 1.16}, {"name": "AIGC概念", "change_pct": 1.45}, {"name": "数据要素", "change_pct": 1.65}, {"name": "字节跳动概念股", "change_pct": 1.87}, {"name": "AI营销", "change_pct": 1.54}, {"name": "ChatGPT", "change_pct": 2.98}, {"name": "智能眼镜/MR头显", "change_pct": 3.98}, {"name": "人工智能大模型", "change_pct": 1.72}, {"name": "人形机器人", "change_pct": 3.02}, {"name": "短剧/互动影游", "change_pct": 0.63}, {"name": "多模态", "change_pct": 2.28}, {"name": "AI视频", "change_pct": 1.54}, {"name": "IP经济/谷子经济", "change_pct": 0.87}, {"name": "小红书概念股", "change_pct": 1.61}]}, {"code": "603629", "name": "利通电子", "hot_rank": 15, "hot_rank_chg": 8, "stock_cnt": 5768, "price": "112.65", "change": "10.00", "market_id": "17", "circulate_market_value": "40635491000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "算力租赁"}, {"code": "603259", "name": "药明康德", "hot_rank": 16, "hot_rank_chg": -13, "stock_cnt": 5768, "price": "147.50", "change": "4.35", "market_id": "17", "circulate_market_value": "364808840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 17, "hot_rank_chg": 19, "stock_cnt": 5768, "price": "65.92", "change": "9.99", "market_id": "17", "circulate_market_value": "1308122560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 18, "hot_rank_chg": -7, "stock_cnt": 5768, "price": "11.73", "change": "10.04", "market_id": "33", "circulate_market_value": "3336969300.00", "change_type": "1", "change_section": "8", "change_days": "8", "change_reason": "AI教育", "xgb_concepts": [{"name": "筹码集中", "change_pct": 1.67}, {"name": "密集调研", "change_pct": 2.93}, {"name": "ST摘帽", "change_pct": 1.95}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "教育", "change_pct": 2.39}, {"name": "阿里巴巴概念股", "change_pct": 1.76}, {"name": "职业教育", "change_pct": 2.06}, {"name": "在线教育", "change_pct": 3.53}, {"name": "华为鸿蒙", "change_pct": 1.86}, {"name": "华为产业链", "change_pct": 2.68}, {"name": "智谱AI", "change_pct": 1.59}]}, {"code": "000725", "name": "京东方A", "hot_rank": 19, "hot_rank_chg": 8, "stock_cnt": 5768, "price": "5.97", "change": "6.04", "market_id": "33", "circulate_market_value": "211141790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 4.99}, {"name": "手机产业链", "change_pct": 4.12}, {"name": "超高清视频", "change_pct": 2.15}, {"name": "苹果产业链", "change_pct": 4.33}, {"name": "电竞", "change_pct": 0.48}, {"name": "半导体", "change_pct": 5.78}, {"name": "人工智能", "change_pct": 2.08}, {"name": "互联网医疗", "change_pct": 0.22}, {"name": "VR&AR", "change_pct": 3.56}, {"name": "OLED", "change_pct": 4.35}, {"name": "京津冀", "change_pct": 0.94}, {"name": "物联网", "change_pct": 2.16}, {"name": "指纹识别", "change_pct": 4.2}, {"name": "汽车零部件", "change_pct": 1.98}, {"name": "白马股", "change_pct": 0.64}, {"name": "智能制造", "change_pct": 2.63}, {"name": "小米概念股", "change_pct": 3.81}, {"name": "国产芯片", "change_pct": 4.26}, {"name": "液晶面板/LCD", "change_pct": 4.78}, {"name": "全息概念", "change_pct": 2.78}, {"name": "理想汽车概念股", "change_pct": 2.56}, {"name": "MicroLED", "change_pct": 4.38}, {"name": "钙钛矿电池", "change_pct": 2.36}, {"name": "智能手表", "change_pct": 4.34}, {"name": "MiniLED", "change_pct": 3.93}, {"name": "传感器", "change_pct": 3.17}, {"name": "大硅片", "change_pct": 8.03}, {"name": "AI PC", "change_pct": 4.26}, {"name": "华为产业链", "change_pct": 2.68}, {"name": "回购", "change_pct": 1.47}, {"name": "智能眼镜/MR头显", "change_pct": 3.98}, {"name": "玻璃基板封装", "change_pct": 5.26}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 20, "hot_rank_chg": -13, "stock_cnt": 5768, "price": "6.77", "change": "4.96", "market_id": "17", "circulate_market_value": "17050312000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.28}, {"name": "工业大麻", "change_pct": 0.77}, {"name": "中药", "change_pct": -0.41}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "保健品", "change_pct": -0.34}, {"name": "民营医院", "change_pct": -0.05}, {"name": "医药", "change_pct": 0.42}, {"name": "化学原料药", "change_pct": 0.42}, {"name": "流感", "change_pct": 0.54}, {"name": "振兴东北", "change_pct": 0.15}, {"name": "食品", "change_pct": 0.18}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 21, "hot_rank_chg": 1, "stock_cnt": 5768, "price": "54.41", "change": "8.24", "market_id": "17", "circulate_market_value": "133502893000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 22, "hot_rank_chg": -10, "stock_cnt": 5768, "price": "386.24", "change": "6.06", "market_id": "33", "circulate_market_value": "63741092000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 23, "hot_rank_chg": -14, "stock_cnt": 5768, "price": "15.73", "change": "0.06", "market_id": "33", "circulate_market_value": "54707843000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 24, "hot_rank_chg": 6, "stock_cnt": 5768, "price": "68.97", "change": "5.44", "market_id": "17", "circulate_market_value": "123415923000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 25, "hot_rank_chg": 0, "stock_cnt": 5768, "price": "13.53", "change": "0.97", "market_id": "33", "circulate_market_value": "12627868100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 26, "hot_rank_chg": -9, "stock_cnt": 5768, "price": "12.70", "change": "0.79", "market_id": "33", "circulate_market_value": "8698260500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 1.39}, {"name": "核电", "change_pct": 1.86}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "充电桩", "change_pct": 2.18}, {"name": "云计算数据中心", "change_pct": 2.26}, {"name": "新能源汽车", "change_pct": 2.15}, {"name": "储能", "change_pct": 1.65}, {"name": "阿里巴巴概念股", "change_pct": 1.76}, {"name": "智能电网", "change_pct": 1.78}, {"name": "核聚变", "change_pct": 2.41}]}, {"code": "002185", "name": "华天科技", "hot_rank": 27, "hot_rank_chg": 11, "stock_cnt": 5768, "price": "16.59", "change": "6.83", "market_id": "33", "circulate_market_value": "55122793000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 28, "hot_rank_chg": -4, "stock_cnt": 5768, "price": "216.85", "change": "2.29", "market_id": "33", "circulate_market_value": "236016950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 29, "hot_rank_chg": -8, "stock_cnt": 5768, "price": "36.55", "change": "6.59", "market_id": "17", "circulate_market_value": "53435910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000981", "name": "山子高科", "hot_rank": 30, "hot_rank_chg": 29, "stock_cnt": 5768, "price": "3.17", "change": "10.07", "market_id": "33", "circulate_market_value": "30157339000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装", "xgb_concepts": [{"name": "半导体", "change_pct": 5.78}, {"name": "无人驾驶", "change_pct": 2.7}, {"name": "汽车零部件", "change_pct": 1.98}, {"name": "新能源汽车", "change_pct": 2.15}, {"name": "新能源车零部件", "change_pct": 1.85}, {"name": "减速器", "change_pct": 2.35}, {"name": "华为汽车", "change_pct": 1.82}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 31, "hot_rank_chg": 11, "stock_cnt": 5768, "price": "39.28", "change": "8.54", "market_id": "17", "circulate_market_value": "156003940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 32, "hot_rank_chg": 5, "stock_cnt": 5768, "price": "58.00", "change": "4.32", "market_id": "33", "circulate_market_value": "88012229000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 33, "hot_rank_chg": -13, "stock_cnt": 5768, "price": "23.34", "change": "7.61", "market_id": "17", "circulate_market_value": "9359340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 34, "hot_rank_chg": 24, "stock_cnt": 5768, "price": "60.73", "change": "10.00", "market_id": "17", "circulate_market_value": "25286011000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "光刻胶"}, {"code": "600522", "name": "中天科技", "hot_rank": 35, "hot_rank_chg": 12, "stock_cnt": 5768, "price": "32.00", "change": "6.88", "market_id": "17", "circulate_market_value": "109214389000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 36, "hot_rank_chg": -8, "stock_cnt": 5768, "price": "11.41", "change": "2.79", "market_id": "33", "circulate_market_value": "9230906700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.92}, {"name": "大飞机", "change_pct": 1.86}, {"name": "北斗导航", "change_pct": 1.84}, {"name": "高铁轨交", "change_pct": 1.35}, {"name": "军民融合", "change_pct": 2.13}, {"name": "磁悬浮", "change_pct": 1.35}, {"name": "军工", "change_pct": 1.88}, {"name": "碳纤维", "change_pct": 2.52}, {"name": "无人机", "change_pct": 2.16}, {"name": "航天", "change_pct": 2.76}, {"name": "卫星互联网", "change_pct": 2.45}, {"name": "低空经济", "change_pct": 2.02}, {"name": "海洋经济", "change_pct": 1.25}]}, {"code": "002579", "name": "中京电子", "hot_rank": 37, "hot_rank_chg": 44, "stock_cnt": 5768, "price": "12.98", "change": "10.00", "market_id": "33", "circulate_market_value": "7572686400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.0}, {"name": "折叠屏", "change_pct": 4.99}, {"name": "手机产业链", "change_pct": 4.12}, {"name": "电子烟", "change_pct": 2.8}, {"name": "半导体", "change_pct": 5.78}, {"name": "5G", "change_pct": 3.21}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "VR&AR", "change_pct": 3.56}, {"name": "光通信", "change_pct": 3.96}, {"name": "OLED", "change_pct": 4.35}, {"name": "PCB板", "change_pct": 5.57}, {"name": "智能音箱", "change_pct": 2.97}, {"name": "WiFi", "change_pct": 4.33}, {"name": "小米概念股", "change_pct": 3.81}, {"name": "6G", "change_pct": 3.15}, {"name": "MiniLED", "change_pct": 3.93}, {"name": "AI PC", "change_pct": 4.26}, {"name": "华为产业链", "change_pct": 2.68}, {"name": "光电共封装CPO", "change_pct": 3.78}, {"name": "毫米波雷达", "change_pct": 3.6}, {"name": "交换机", "change_pct": 4.23}, {"name": "人形机器人", "change_pct": 3.02}, {"name": "AI手机", "change_pct": 4.51}, {"name": "AI医疗", "change_pct": 0.92}]}, {"code": "301171", "name": "易点天下", "hot_rank": 38, "hot_rank_chg": -19, "stock_cnt": 5768, "price": "39.01", "change": "3.75", "market_id": "33", "circulate_market_value": "19578521000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 39, "hot_rank_chg": 18, "stock_cnt": 5768, "price": "77.20", "change": "4.13", "market_id": "33", "circulate_market_value": "113239415000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 40, "hot_rank_chg": -11, "stock_cnt": 5768, "price": "3.53", "change": "1.44", "market_id": "33", "circulate_market_value": "7071921500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": 2.49}, {"name": "数字孪生", "change_pct": 1.7}, {"name": "深圳本地股", "change_pct": 1.5}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "人工智能", "change_pct": 2.08}, {"name": "互联网医疗", "change_pct": 0.22}, {"name": "云计算数据中心", "change_pct": 2.26}, {"name": "高铁轨交", "change_pct": 1.35}, {"name": "人脸识别", "change_pct": 1.92}, {"name": "智慧停车", "change_pct": 1.7}, {"name": "物联网", "change_pct": 2.16}, {"name": "大数据", "change_pct": 1.92}, {"name": "智慧城市", "change_pct": 1.77}, {"name": "雄安新区", "change_pct": 0.64}, {"name": "机器人", "change_pct": 2.55}, {"name": "数字经济", "change_pct": 1.65}, {"name": "阿里巴巴概念股", "change_pct": 1.76}, {"name": "腾讯概念股", "change_pct": 1.55}, {"name": "建筑节能", "change_pct": 0.86}, {"name": "旧改", "change_pct": 0.63}, {"name": "医疗信息化", "change_pct": 1.38}, {"name": "新冠病毒防治", "change_pct": 0.89}, {"name": "华为产业链", "change_pct": 2.68}, {"name": "医疗耗材供应链SPD", "change_pct": -0.37}, {"name": "区块链", "change_pct": 1.32}]}, {"code": "002407", "name": "多氟多", "hot_rank": 41, "hot_rank_chg": -2, "stock_cnt": 5768, "price": "32.81", "change": "4.62", "market_id": "33", "circulate_market_value": "35394357000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 42, "hot_rank_chg": 21, "stock_cnt": 5768, "price": "34.10", "change": "6.16", "market_id": "17", "circulate_market_value": "702521150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 43, "hot_rank_chg": 6, "stock_cnt": 5768, "price": "6.43", "change": "1.58", "market_id": "17", "circulate_market_value": "79706853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.74}, {"name": "核电", "change_pct": 1.86}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "电力体制改革", "change_pct": -0.06}, {"name": "水电", "change_pct": -0.47}, {"name": "火电", "change_pct": 0.17}, {"name": "光伏", "change_pct": 2.03}, {"name": "风电", "change_pct": 1.21}, {"name": "国企改革", "change_pct": 0.7}, {"name": "算电协同", "change_pct": 1.33}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 44, "hot_rank_chg": 48, "stock_cnt": 5768, "price": "67.27", "change": "11.78", "market_id": "33", "circulate_market_value": "57386220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000595", "name": "新能股份", "hot_rank": 45, "hot_rank_chg": -1, "stock_cnt": 5768, "price": "6.67", "change": "1.68", "market_id": "33", "circulate_market_value": "7594838000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 1.95}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "高铁轨交", "change_pct": 1.35}, {"name": "航母", "change_pct": 1.49}, {"name": "光伏", "change_pct": 2.03}, {"name": "风电", "change_pct": 1.21}, {"name": "军工", "change_pct": 1.88}, {"name": "机器人", "change_pct": 2.55}, {"name": "储能", "change_pct": 1.65}, {"name": "国企改革", "change_pct": 0.7}, {"name": "宁夏概念", "change_pct": 1.58}]}, {"code": "002703", "name": "浙江世宝", "hot_rank": 46, "hot_rank_chg": 54, "stock_cnt": 5768, "price": "16.28", "change": "10.00", "market_id": "33", "circulate_market_value": "9540862600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "线控转向"}, {"code": "002792", "name": "通宇通讯", "hot_rank": 47, "hot_rank_chg": 13, "stock_cnt": 5768, "price": "30.74", "change": "6.92", "market_id": "33", "circulate_market_value": "10384724600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 48, "hot_rank_chg": -3, "stock_cnt": 5768, "price": "34.27", "change": "6.10", "market_id": "33", "circulate_market_value": "26813007000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 49, "hot_rank_chg": -16, "stock_cnt": 5768, "price": "16.15", "change": "3.39", "market_id": "17", "circulate_market_value": "17708389000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 50, "hot_rank_chg": 4, "stock_cnt": 5768, "price": "38.70", "change": "5.91", "market_id": "33", "circulate_market_value": "60919821000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001232", "name": "嘉立创", "hot_rank": 51, "hot_rank_chg": -37, "stock_cnt": 5768, "price": "199.91", "change": "-3.89", "market_id": "33", "circulate_market_value": "8837331200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 52, "hot_rank_chg": -12, "stock_cnt": 5768, "price": "9.58", "change": "4.13", "market_id": "17", "circulate_market_value": "17139945000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.26}, {"name": "纯碱", "change_pct": 0.24}, {"name": "食品", "change_pct": 0.18}, {"name": "土壤修复", "change_pct": 1.48}, {"name": "东数西算/算力", "change_pct": 2.26}, {"name": "OpenClaw概念", "change_pct": 2.47}, {"name": "DeepSeek概念股", "change_pct": 2.31}]}, {"code": "603118", "name": "共进股份", "hot_rank": 54, "hot_rank_chg": 93, "stock_cnt": 5768, "price": "14.40", "change": "5.65", "market_id": "17", "circulate_market_value": "11336780200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 55, "hot_rank_chg": -14, "stock_cnt": 5768, "price": "171.55", "change": "-0.45", "market_id": "33", "circulate_market_value": "134894990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 56, "hot_rank_chg": 27, "stock_cnt": 5768, "price": "34.19", "change": "14.04", "market_id": "33", "circulate_market_value": "48016194000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 57, "hot_rank_chg": 152, "stock_cnt": 5768, "price": "28.70", "change": "10.00", "market_id": "33", "circulate_market_value": "21737814000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "603039", "name": "泛微网络", "hot_rank": 58, "hot_rank_chg": 16, "stock_cnt": 5768, "price": "44.64", "change": "7.62", "market_id": "17", "circulate_market_value": "13733011000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 59, "hot_rank_chg": 35, "stock_cnt": 5768, "price": "13.35", "change": "5.12", "market_id": "17", "circulate_market_value": "66603400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 60, "hot_rank_chg": 58, "stock_cnt": 5768, "price": "57.43", "change": "10.00", "market_id": "33", "circulate_market_value": "83471749000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI PCB微钻扩产"}, {"code": "000988", "name": "华工科技", "hot_rank": 61, "hot_rank_chg": 11, "stock_cnt": 5768, "price": "100.43", "change": "-0.22", "market_id": "33", "circulate_market_value": "100930710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 62, "hot_rank_chg": 99, "stock_cnt": 5768, "price": "11.22", "change": "10.00", "market_id": "17", "circulate_market_value": "14397488000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "金刚石散热", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.0}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "智能制造", "change_pct": 2.63}, {"name": "工业互联网", "change_pct": 1.86}, {"name": "培育钻石", "change_pct": 5.37}, {"name": "金刚线", "change_pct": 4.14}, {"name": "国资入股", "change_pct": 1.49}, {"name": "深地经济", "change_pct": 0.85}]}, {"code": "002141", "name": "贤丰控股", "hot_rank": 63, "hot_rank_chg": -13, "stock_cnt": 5768, "price": "5.63", "change": "2.74", "market_id": "33", "circulate_market_value": "5815428500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.69}, {"name": "锂电池", "change_pct": 2.94}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "铜箔/覆铜板", "change_pct": 6.21}, {"name": "粤港澳大湾区", "change_pct": 0.72}, {"name": "新能源汽车", "change_pct": 2.15}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.72}]}, {"code": "300408", "name": "三环集团", "hot_rank": 64, "hot_rank_chg": 26, "stock_cnt": 5768, "price": "128.19", "change": "5.96", "market_id": "33", "circulate_market_value": "239690460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 65, "hot_rank_chg": -17, "stock_cnt": 5768, "price": "36.86", "change": "3.34", "market_id": "17", "circulate_market_value": "57414334000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 66, "hot_rank_chg": 50, "stock_cnt": 5768, "price": "55.87", "change": "0.70", "market_id": "33", "circulate_market_value": "409251950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 67, "hot_rank_chg": 37, "stock_cnt": 5768, "price": "78.57", "change": "10.00", "market_id": "17", "circulate_market_value": "17653000000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "TGV玻璃基板"}, {"code": "002202", "name": "金风科技", "hot_rank": 68, "hot_rank_chg": 27, "stock_cnt": 5768, "price": "20.16", "change": "3.44", "market_id": "33", "circulate_market_value": "67808262000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301396", "name": "宏景科技", "hot_rank": 69, "hot_rank_chg": -4, "stock_cnt": 5768, "price": "198.90", "change": "12.60", "market_id": "33", "circulate_market_value": "28145702000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601179", "name": "中国西电", "hot_rank": 70, "hot_rank_chg": -24, "stock_cnt": 5768, "price": "14.41", "change": "0.28", "market_id": "17", "circulate_market_value": "73863965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 71, "hot_rank_chg": -15, "stock_cnt": 5768, "price": "6.51", "change": "9.97", "market_id": "17", "circulate_market_value": "7413310000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "特高压", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.99}, {"name": "光伏", "change_pct": 2.03}, {"name": "特高压", "change_pct": 1.89}, {"name": "智能电网", "change_pct": 1.78}]}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 72, "hot_rank_chg": 102, "stock_cnt": 5768, "price": "20.47", "change": "6.67", "market_id": "17", "circulate_market_value": "357423440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 73, "hot_rank_chg": -11, "stock_cnt": 5768, "price": "122.79", "change": "9.41", "market_id": "17", "circulate_market_value": "296138640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 74, "hot_rank_chg": 17, "stock_cnt": 5768, "price": "140.62", "change": "8.60", "market_id": "33", "circulate_market_value": "44790669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 75, "hot_rank_chg": -32, "stock_cnt": 5768, "price": "20.39", "change": "5.65", "market_id": "33", "circulate_market_value": "9223188100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 76, "hot_rank_chg": 38, "stock_cnt": 5768, "price": "88.65", "change": "3.62", "market_id": "17", "circulate_market_value": "129699768000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 77, "hot_rank_chg": 180, "stock_cnt": 5768, "price": "115.52", "change": "7.37", "market_id": "33", "circulate_market_value": "128647273000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 78, "hot_rank_chg": -23, "stock_cnt": 5768, "price": "115.60", "change": "3.43", "market_id": "33", "circulate_market_value": "222276890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002498", "name": "汉缆股份", "hot_rank": 79, "hot_rank_chg": -2, "stock_cnt": 5768, "price": "7.25", "change": "-1.76", "market_id": "33", "circulate_market_value": "24119271000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 1.39}, {"name": "核电", "change_pct": 1.86}, {"name": "5G", "change_pct": 3.21}, {"name": "一带一路", "change_pct": 0.99}, {"name": "充电桩", "change_pct": 2.18}, {"name": "氢能源/燃料电池", "change_pct": 1.53}, {"name": "风电", "change_pct": 1.21}, {"name": "新能源汽车", "change_pct": 2.15}, {"name": "储能", "change_pct": 1.65}, {"name": "特高压", "change_pct": 1.89}, {"name": "智能电网", "change_pct": 1.78}, {"name": "海洋经济", "change_pct": 1.25}]}, {"code": "002674", "name": "兴业科技", "hot_rank": 80, "hot_rank_chg": 41, "stock_cnt": 5768, "price": "26.93", "change": "10.01", "market_id": "33", "circulate_market_value": "7878739100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "磷化铟收购"}, {"code": "600111", "name": "北方稀土", "hot_rank": 81, "hot_rank_chg": 115, "stock_cnt": 5768, "price": "41.77", "change": "3.21", "market_id": "17", "circulate_market_value": "151001300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000593", "name": "德龙汇能", "hot_rank": 82, "hot_rank_chg": -2, "stock_cnt": 5768, "price": "22.52", "change": "10.02", "market_id": "33", "circulate_market_value": "8073041000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "举牌"}, {"code": "002827", "name": "高争民爆", "hot_rank": 83, "hot_rank_chg": -22, "stock_cnt": 5768, "price": "44.76", "change": "6.90", "market_id": "33", "circulate_market_value": "12353702900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603106", "name": "恒银科技", "hot_rank": 84, "hot_rank_chg": -31, "stock_cnt": 5768, "price": "9.13", "change": "1.00", "market_id": "17", "circulate_market_value": "4752347600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "金融科技", "change_pct": 1.88}, {"name": "人工智能", "change_pct": 2.08}, {"name": "人脸识别", "change_pct": 1.92}, {"name": "智慧停车", "change_pct": 1.7}, {"name": "雄安新区", "change_pct": 0.64}, {"name": "信创", "change_pct": 2.33}, {"name": "虚拟数字人", "change_pct": 1.45}, {"name": "AIGC概念", "change_pct": 1.45}, {"name": "智慧政务", "change_pct": 1.86}, {"name": "医疗信息化", "change_pct": 1.38}]}, {"code": "002594", "name": "比亚迪", "hot_rank": 85, "hot_rank_chg": -12, "stock_cnt": 5768, "price": "90.82", "change": "-0.36", "market_id": "33", "circulate_market_value": "316654240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 86, "hot_rank_chg": -16, "stock_cnt": 5768, "price": "312.40", "change": "10.00", "market_id": "17", "circulate_market_value": "126940089000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力数据中心"}, {"code": "688146", "name": "中船特气", "hot_rank": 87, "hot_rank_chg": 143, "stock_cnt": 5768, "price": "286.32", "change": "13.12", "market_id": "17", "circulate_market_value": "41508051000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 88, "hot_rank_chg": -13, "stock_cnt": 5768, "price": "6.13", "change": "4.61", "market_id": "33", "circulate_market_value": "7948989400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.41}, {"name": "创新药", "change_pct": 0.89}, {"name": "央企改革", "change_pct": 0.74}, {"name": "医疗器械", "change_pct": 0.95}, {"name": "强势人气股", "change_pct": 3.42}, {"name": "互联网医疗", "change_pct": 0.22}, {"name": "保健品", "change_pct": -0.34}, {"name": "民营医院", "change_pct": -0.05}, {"name": "CAR-T疗法", "change_pct": 0.41}, {"name": "医药", "change_pct": 0.42}, {"name": "化学原料药", "change_pct": 0.42}, {"name": "海南概念", "change_pct": 0.91}, {"name": "脑科学/脑机接口", "change_pct": 1.45}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.65}, {"name": "海南自由贸易港", "change_pct": 0.18}, {"name": "食品", "change_pct": 0.18}, {"name": "国企改革", "change_pct": 0.7}, {"name": "医疗信息化", "change_pct": 1.38}, {"name": "新冠病毒防治", "change_pct": 0.89}, {"name": "自贸区", "change_pct": 0.5}, {"name": "合成生物", "change_pct": 0.79}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 89, "hot_rank_chg": 23, "stock_cnt": 5768, "price": "149.56", "change": "0.58", "market_id": "17", "circulate_market_value": "41216997000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002607", "name": "中公教育", "hot_rank": 90, "hot_rank_chg": 173, "stock_cnt": 5768, "price": "2.35", "change": "9.81", "market_id": "33", "circulate_market_value": "13027084500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "职业教育", "xgb_concepts": [{"name": "人工智能", "change_pct": 2.08}, {"name": "教育", "change_pct": 2.39}, {"name": "独角兽", "change_pct": 0.85}, {"name": "阿里巴巴概念股", "change_pct": 1.76}, {"name": "低价股", "change_pct": 0.15}, {"name": "职业教育", "change_pct": 2.06}, {"name": "在线教育", "change_pct": 3.53}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 91, "hot_rank_chg": -40, "stock_cnt": 5768, "price": "21.26", "change": "1.62", "market_id": "33", "circulate_market_value": "8947590600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002195", "name": "岩山科技", "hot_rank": 92, "hot_rank_chg": 10, "stock_cnt": 5768, "price": "7.15", "change": "1.71", "market_id": "33", "circulate_market_value": "40153209000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "国产软件", "change_pct": 2.2}, {"name": "无人驾驶", "change_pct": 2.7}, {"name": "人工智能", "change_pct": 2.08}, {"name": "网络安全", "change_pct": 2.16}, {"name": "游戏", "change_pct": 0.93}, {"name": "大数据", "change_pct": 1.92}, {"name": "脑科学/脑机接口", "change_pct": 1.45}, {"name": "百度概念股", "change_pct": 1.49}, {"name": "阿里巴巴概念股", "change_pct": 1.76}, {"name": "腾讯概念股", "change_pct": 1.55}, {"name": "字节跳动概念股", "change_pct": 1.87}, {"name": "自动刹车", "change_pct": 2.57}, {"name": "人工智能大模型", "change_pct": 1.72}, {"name": "短剧/互动影游", "change_pct": 0.63}, {"name": "AI医疗", "change_pct": 0.92}, {"name": "区块链", "change_pct": 1.32}]}, {"code": "301308", "name": "江波龙", "hot_rank": 93, "hot_rank_chg": 12, "stock_cnt": 5768, "price": "364.92", "change": "8.59", "market_id": "33", "circulate_market_value": "102853392000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600666", "name": "奥瑞德", "hot_rank": 94, "hot_rank_chg": -23, "stock_cnt": 5768, "price": "3.93", "change": "3.97", "market_id": "17", "circulate_market_value": "9833345200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 2.26}, {"name": "3D玻璃", "change_pct": 4.62}, {"name": "东数西算/算力", "change_pct": 2.26}, {"name": "词元概念/Token", "change_pct": 1.58}, {"name": "DeepSeek概念股", "change_pct": 2.31}, {"name": "RWA", "change_pct": 1.28}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 95, "hot_rank_chg": -43, "stock_cnt": 5768, "price": "56.22", "change": "4.52", "market_id": "17", "circulate_market_value": "7346447300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000676", "name": "智度股份", "hot_rank": 96, "hot_rank_chg": 29, "stock_cnt": 5768, "price": "7.85", "change": "2.75", "market_id": "33", "circulate_market_value": "9883374000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 2.08}, {"name": "游戏", "change_pct": 0.93}, {"name": "智能音箱", "change_pct": 2.97}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 3.81}, {"name": "数字经济", "change_pct": 1.65}, {"name": "百度概念股", "change_pct": 1.49}, {"name": "腾讯概念股", "change_pct": 1.55}, {"name": "拼多多概念股", "change_pct": 1.1}, {"name": "传媒", "change_pct": 0.37}, {"name": "全息概念", "change_pct": 2.78}, {"name": "NFT", "change_pct": 0.42}, {"name": "元宇宙", "change_pct": 1.85}, {"name": "web3.0", "change_pct": 1.16}, {"name": "字节跳动概念股", "change_pct": 1.87}, {"name": "数字人民币", "change_pct": 2.03}, {"name": "智慧政务", "change_pct": 1.86}, {"name": "华为鸿蒙", "change_pct": 1.86}, {"name": "盲盒", "change_pct": 0.82}, {"name": "AI营销", "change_pct": 1.54}, {"name": "华为产业链", "change_pct": 2.68}, {"name": "供应链金融", "change_pct": 0.66}, {"name": "ChatGPT", "change_pct": 2.98}, {"name": "小红书概念股", "change_pct": 1.61}, {"name": "区块链", "change_pct": 1.32}]}, {"code": "000063", "name": "中兴通讯", "hot_rank": 97, "hot_rank_chg": 20, "stock_cnt": 5768, "price": "34.74", "change": "1.08", "market_id": "33", "circulate_market_value": "139919560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 98, "hot_rank_chg": -11, "stock_cnt": 5768, "price": "39.41", "change": "1.73", "market_id": "33", "circulate_market_value": "145464080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002036", "name": "联创电子", "hot_rank": 99, "hot_rank_chg": 293, "stock_cnt": 5768, "price": "7.80", "change": "10.01", "market_id": "33", "circulate_market_value": "8232648600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国资入主", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": 1.36}, {"name": "折叠屏", "change_pct": 4.99}, {"name": "手机产业链", "change_pct": 4.12}, {"name": "超高清视频", "change_pct": 2.15}, {"name": "无线充电", "change_pct": 3.5}, {"name": "特斯拉", "change_pct": 2.46}, {"name": "股权转让", "change_pct": 2.26}, {"name": "无人驾驶", "change_pct": 2.7}, {"name": "VR&AR", "change_pct": 3.56}, {"name": "OLED", "change_pct": 4.35}, {"name": "3D感应", "change_pct": 3.47}, {"name": "人脸识别", "change_pct": 1.92}, {"name": "3D玻璃", "change_pct": 4.62}, {"name": "指纹识别", "change_pct": 4.2}, {"name": "手势识别", "change_pct": 3.1}, {"name": "虹膜识别", "change_pct": 1.87}, {"name": "复牌股", "change_pct": 3.36}, {"name": "机器视觉", "change_pct": 3.38}, {"name": "无人机", "change_pct": 2.16}, {"name": "智能制造", "change_pct": 2.63}, {"name": "国产芯片", "change_pct": 4.26}, {"name": "液晶面板/LCD", "change_pct": 4.78}, {"name": "激光雷达", "change_pct": 4.16}, {"name": "元宇宙", "change_pct": 1.85}, {"name": "电子后视镜", "change_pct": 2.47}, {"name": "无线耳机", "change_pct": 3.43}, {"name": "云游戏", "change_pct": 1.83}, {"name": "AI PC", "change_pct": 4.26}, {"name": "国资入股", "change_pct": 1.49}, {"name": "华为产业链", "change_pct": 2.68}, {"name": "毫米波雷达", "change_pct": 3.6}, {"name": "智能眼镜/MR头显", "change_pct": 3.98}, {"name": "英伟达概念", "change_pct": 3.87}, {"name": "人形机器人", "change_pct": 3.02}, {"name": "智能座舱", "change_pct": 3.25}, {"name": "AI手机", "change_pct": 4.51}]}, {"code": "002230", "name": "科大讯飞", "hot_rank": 100, "hot_rank_chg": -34, "stock_cnt": 5768, "price": "44.17", "change": "1.56", "market_id": "33", "circulate_market_value": "96730840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002734", "name": "利民股份", "price": 15.16, "change_pct": 10.01, "reason": "国内最大的杀菌剂生产企业之一；公司布局新能源电池用电解质锂盐及功能添加剂项目，产品包括双氟磺酰亚胺锂等，可应用于锂电池、钠电池、固态电池", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 7.5, "first_limit_up": 1785897174, "break_limit_up_times": 12}, {"code": "605178", "name": "时空科技", "price": 64.24, "change_pct": 10.0, "reason": "公司拟收购嘉合劲威，切入存储领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.03, "first_limit_up": 1785893810, "break_limit_up_times": 1}, {"code": "003032", "name": "传智教育", "price": 11.73, "change_pct": 10.04, "reason": "公司近日正式发布“AI具身智能机器人开发”新学科，首期班将于今年10月正式开班，课程覆盖工业机械臂、四足巡检机器人、人形服务机器人三类设备，并对接智元、宇树等头部厂商方案", "plates": ["机器人"], "limit_up_days": 8, "turnover_ratio": 18.79, "first_limit_up": 1785893448, "break_limit_up_times": 5}, {"code": "002119", "name": "康强电子", "price": 22.3, "change_pct": 10.01, "reason": "公司主营引线框架、键合丝等半导体封装材料", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.31, "first_limit_up": 1785898005, "break_limit_up_times": 0}, {"code": "002607", "name": "中公教育", "price": 2.35, "change_pct": 9.81, "reason": "国内领先的全品类职业教育机构，AI教育生态取得关键进展，旗下子公司新希纪元核心产品Token平台正式上线试运行", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 12.18, "first_limit_up": 1785895893, "break_limit_up_times": 3}, {"code": "601700", "name": "风范股份", "price": 6.51, "change_pct": 9.97, "reason": "公司中标2.9亿元南方电网特高压直流输电工程项目", "plates": ["智能电网"], "limit_up_days": 3, "turnover_ratio": 15.39, "first_limit_up": 1785893100, "break_limit_up_times": 1}, {"code": "688600", "name": "皖仪科技", "price": 27.44, "change_pct": 19.98, "reason": "1、国内分析检测仪器竞争优势企业；公司依托氦质谱检漏技术，构建适配AI服务器液冷系统的全流程气密检测解决方案，精准覆盖冷板、管路等核心部件密封性检测；\n2、公司与合肥综合性国家科学中心能源研究院签署《联合实验室共建协议》，共建“核聚变关键真空测量设备研发联合实验室”，开展氚兼容检漏仪及富氘环境下真空检漏技术研究，公司氦质谱检漏仪等产品可用于核聚变装置真空系统检测", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 4.79, "first_limit_up": 1785899796, "break_limit_up_times": 0}, {"code": "000962", "name": "东方钽业", "price": 51.63, "change_pct": 9.99, "reason": "1、国内最大的钽、铌产品生产基地；AI服务器对钽电容需求的爆发式增长，25H2至今全球钽电容龙头Kemet已经宣布了三次涨价，公司电容器级钽粉全球市占率25%，电容器用钽丝全球市占率50%+，4月以来公司已针对下游钽电容客户涨价50%+，涨价已经逐渐传递至公司端；\n2、公司涂层材料已配套商业航天火箭喷管，超导铌材及铌超导腔用于可控核聚变等国家大科学装置", "plates": ["被动元件"], "limit_up_days": 2, "turnover_ratio": 4.93, "first_limit_up": 1785894999, "break_limit_up_times": 2}, {"code": "002674", "name": "兴业科技", "price": 26.93, "change_pct": 10.01, "reason": "公司拟收购青岛立昂磷化铟衬底及半导体电子材料业务，切入光通信与算力光模块核心材料赛道", "plates": ["磷化铟"], "limit_up_days": 2, "turnover_ratio": 10.67, "first_limit_up": 1785897357, "break_limit_up_times": 0}, {"code": "600130", "name": "波导股份", "price": 4.32, "change_pct": 9.92, "reason": "公司参股公司华大北斗专注从事导航定位芯片、算法及产品的自主设计、研发、销售及相关业务，其自主设计研发了国内首颗量产供货的55nm基带和射频一体化北斗多模导航定位芯片，该芯片也是国内首颗进入国际排名前十位的专业导航定位芯片", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 5.7, "first_limit_up": 1785894437, "break_limit_up_times": 3}, {"code": "301026", "name": "浩通科技", "price": 21.49, "change_pct": 19.99, "reason": "公司主营贵金属回收、新材料、贸易三大业务", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 16.93, "first_limit_up": 1785897024, "break_limit_up_times": 5}, {"code": "002425", "name": "凯撒文化", "price": 3.47, "change_pct": 10.16, "reason": "公司在国漫、小说等拥有多款人气IP的游戏改编权", "plates": ["游戏"], "limit_up_days": 2, "turnover_ratio": 1.63, "first_limit_up": 1785893100, "break_limit_up_times": 0}, {"code": "600078", "name": "澄星股份", "price": 11.03, "change_pct": 9.97, "reason": "国内磷酸龙头；全固态电池关键原料五硫化二磷需由超纯黄磷+硫磺合成，1GW固态电池需450吨黄磷（135吨超纯黄磷），用量为硫化锂的150%", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.43, "first_limit_up": 1785912717, "break_limit_up_times": 0}, {"code": "603125", "name": "常青科技", "price": 22.61, "change_pct": 10.02, "reason": "公司高分子特种单体“对叔丁基苯乙烯TBS”可应用于高端光刻胶，现处于送样验证阶段", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.59, "first_limit_up": 1785906034, "break_limit_up_times": 0}, {"code": "002222", "name": "福晶科技", "price": 58.21, "change_pct": 10.0, "reason": "公司具有磁光晶体到法拉第旋光片全制程能力。光隔离器基于法拉第磁光效应，有效提高激光系统的稳定性和输出功率，主要应用于光纤通信、光信息处理系统和精密光学测量系统中", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.54, "first_limit_up": 1785906303, "break_limit_up_times": 27}, {"code": "001267", "name": "汇绿生态", "price": 35.28, "change_pct": 10.01, "reason": "公司拟不超1.95亿元收购武汉钧恒30%股权，武汉钧恒对高速光模块技术持续投入，当前已经具备单波400G高速链路仿真能力，um级高精度光学微组装能力，及各种高速控制算法能力；基于上述能力积累，当前武汉钧恒1.6T模块相关产品已经开发出来，具备送样能力，3.2T模块单点技术已经验证完成，预计年底启动项目开发", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 5.02, "first_limit_up": 1785894120, "break_limit_up_times": 2}, {"code": "603823", "name": "百合花", "price": 60.73, "change_pct": 10.0, "reason": "1、公司拟投1亿元建设年产1000吨聚醚醚酮PEEK材料项目，产品面向人形机器人、新能源汽车、航空航天等高端制造领域；\n2、公司目前是国内少数具备生产全色谱颜料能力的生产企业，拟以自筹资金投入“年产3000吨电池级碳酸锂项目”，开发的普鲁士蓝（白）主要应用于钠离子电池正极材料；\n3、COFS 材料可用于固态电池，公司在COFS方面有做过课题研究，并申请了相关专利；\n4、公司生产的高性能颜料已应用于半导体领域液晶面板用光刻胶，并实现吨级销售", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.99, "first_limit_up": 1785894074, "break_limit_up_times": 11}, {"code": "002766", "name": "索菱股份", "price": 4.39, "change_pct": 10.03, "reason": "车载终端市场绝对龙头，车联网“软件+硬件+运营平台”供应商，智能驾驶舱已进入供货状态", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 1.11, "first_limit_up": 1785893100, "break_limit_up_times": 0}, {"code": "603268", "name": "松发股份", "price": 172.87, "change_pct": 10.0, "reason": "公司主要从事船舶及高端装备的研产销", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.96, "first_limit_up": 1785906620, "break_limit_up_times": 1}, {"code": "603297", "name": "永新光学", "price": 102.22, "change_pct": 10.0, "reason": "公司能提供光刻物镜", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 1.85, "first_limit_up": 1785895307, "break_limit_up_times": 1}, {"code": "600611", "name": "大众交通", "price": 4.69, "change_pct": 10.09, "reason": "1、上海和长三角区域重要的综合交通服务供应商；公司25 年获首批智能网联汽车示范运营牌照，与百度智行深度合作开展主驾无人 Robotaxi 商业化运营，覆盖浦东等核心区域；\n2、公司通过基金间接持有长江存储约0.051%股份", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 2.98, "first_limit_up": 1785893402, "break_limit_up_times": 0}, {"code": "300615", "name": "欣天科技", "price": 15.02, "change_pct": 19.97, "reason": "公司控股股东将变更为深圳元启", "plates": ["股权转让"], "limit_up_days": 3, "turnover_ratio": 2.67, "first_limit_up": 1785893100, "break_limit_up_times": 0}, {"code": "603061", "name": "金海通", "price": 292.86, "change_pct": 10.0, "reason": "公司主营半导体芯片测试设备，深耕集成电路测试分选机领域", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 1.7, "first_limit_up": 1785893801, "break_limit_up_times": 0}, {"code": "001210", "name": "金房能源", "price": 20.79, "change_pct": 10.0, "reason": "公司业务包括IDC机房和智算中心液冷技术与蓄冷相变材料", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.79, "first_limit_up": 1785893556, "break_limit_up_times": 1}, {"code": "002036", "name": "联创电子", "price": 7.8, "change_pct": 10.01, "reason": "1、公司的微棱镜、模造玻璃透镜阵列、硅透镜阵列等光模块光学器件正在送样评测阶段；\n2、公司车载镜头（车内监控、前视ADAS、盲区监控）已获得特斯拉的认证通过，已有正式订单", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1785893544, "break_limit_up_times": 0}, {"code": "002636", "name": "金安国纪", "price": 56.18, "change_pct": 10.01, "reason": "国内覆铜板龙头，同时生产电子级玻纤布；公司上半年业绩预增超9倍，主要因“2026年上半年覆铜板市场整体景气度向好，公司核心产品覆铜板及半固化片处于供不应求状态，销量同比增长叠加售价持续上行，推动公司毛利率提升，进而带动利润实现大幅增长”", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 7.32, "first_limit_up": 1785906252, "break_limit_up_times": 8}, {"code": "603773", "name": "沃格光电", "price": 78.57, "change_pct": 10.0, "reason": "公司光模块/CPO玻璃基封装载板已批量送样，与北极雄芯战略合作开发AI芯片玻璃基先进封装", "plates": ["玻璃基板封装"], "limit_up_days": 2, "turnover_ratio": 4.56, "first_limit_up": 1785893783, "break_limit_up_times": 2}, {"code": "603256", "name": "宏和科技", "price": 138.11, "change_pct": 10.0, "reason": "公司是全球高端电子级玻璃纤维布龙头，极薄布、低介电、低CTE特种电子布技术国际领先，为AI服务器PCB核心上游材料", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.46, "first_limit_up": 1785906694, "break_limit_up_times": 12}, {"code": "600556", "name": "天下秀", "price": 5.54, "change_pct": 9.92, "reason": "公司旗下AI产品“灵感岛”依托红人营销数据库构建完整AI智能体系统，推出六大AI Agent针对不同创作环节深度优化，覆盖账号规划至内容变现全流程", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 7.52, "first_limit_up": 1785896433, "break_limit_up_times": 1}, {"code": "002213", "name": "大为股份", "price": 28.86, "change_pct": 9.98, "reason": "公司半导体存储业务主要产品有NAND、DRAM存储两大系列，子公司大为创芯有产品可以应用在数据中心", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.97, "first_limit_up": 1785894369, "break_limit_up_times": 1}, {"code": "603004", "name": "鼎龙科技", "price": 20.22, "change_pct": 10.01, "reason": "1、公司PBO纤维具有力学强度突出、耐高温等核心性能，可以作为航天器外衣材料使用；\n2、公司生产的聚酰亚胺单体可以用于生产聚酰亚胺材料，据公开资料报道，部分聚酰亚胺材料可以用于固（液）态电池领域", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 8.21, "first_limit_up": 1785894353, "break_limit_up_times": 0}, {"code": "600629", "name": "华建集团", "price": 15.57, "change_pct": 10.04, "reason": "公司旗下上海科技创业投资有限公司持有上海微电子装备（集团）股份有限公司13.275%股权", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.42, "first_limit_up": 1785897700, "break_limit_up_times": 0}, {"code": "603988", "name": "中电电机", "price": 20.65, "change_pct": 10.02, "reason": "公司专注大中型交直流电机、发电机，产品覆盖风电、水利、石化等行业", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 9.68, "first_limit_up": 1785911340, "break_limit_up_times": 1}, {"code": "002655", "name": "共达电声", "price": 27.07, "change_pct": 10.0, "reason": "公司控股股东一致行动人取得2亿元增持专项贷款承诺函", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 6.78, "first_limit_up": 1785898221, "break_limit_up_times": 0}, {"code": "002649", "name": "博彦科技", "price": 10.26, "change_pct": 9.97, "reason": "中国领先的软件与信息技术服务商；公司积极与国内外主流大模型厂商开展技术与生态合作，基于客户场景需求，为行业客户提供一站式AI应用解决方案及服务，相关方案已在部分金融、化工、制造等多个行业实现业务落地", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 4.96, "first_limit_up": 1785893811, "break_limit_up_times": 1}, {"code": "603995", "name": "甬金股份", "price": 22.47, "change_pct": 9.99, "reason": "不锈钢冷轧龙头", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.26, "first_limit_up": 1785906047, "break_limit_up_times": 2}, {"code": "002842", "name": "翔鹭钨业", "price": 34.56, "change_pct": 9.99, "reason": "公司是国内钨行业具备完整产业链的企业之一", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 15.14, "first_limit_up": 1785896955, "break_limit_up_times": 1}, {"code": "603979", "name": "金诚信", "price": 78.68, "change_pct": 10.0, "reason": "公司收购刚果（金）Dikulushi铜银矿并认购了艾芬豪旗下加拿大上市公司Cordoba公司股权，参与其在哥伦比亚的San Matias铜金银矿项目", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 1.77, "first_limit_up": 1785909278, "break_limit_up_times": 2}, {"code": "002579", "name": "中京电子", "price": 12.98, "change_pct": 10.0, "reason": "公司系国内少数兼具刚柔印制电路板批量生产与较强研发能力的PCB制造商，部分产品有直接或间接配套人形机器人的研发、生产等", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 8.0, "first_limit_up": 1785893532, "break_limit_up_times": 1}, {"code": "600721", "name": "百花医药", "price": 8.71, "change_pct": 9.97, "reason": "综合服务性CRO企业，控股股东、实际控制人拟变更为金华市国资委", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 10.82, "first_limit_up": 1785893100, "break_limit_up_times": 1}, {"code": "002980", "name": "华盛昌", "price": 76.14, "change_pct": 10.0, "reason": "公司收购伽蓝特100%股权，后者专注光通信模块和光芯片测试；预计上半年净利润同比增长61.02%至84.02%，主要系全资子公司深圳市伽蓝特科技有限公司并表所致", "plates": ["光通信", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 13.0, "first_limit_up": 1785906546, "break_limit_up_times": 35}, {"code": "600206", "name": "有研新材", "price": 39.81, "change_pct": 10.0, "reason": "控股子公司为长江存储、长鑫存储靶材供应商，子公司有研亿金量产12英寸晶圆制造高纯靶材，为国内大硅片下游晶圆厂提供配套耗材", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 10.42, "first_limit_up": 1785894392, "break_limit_up_times": 1}, {"code": "603629", "name": "利通电子", "price": 112.65, "change_pct": 10.0, "reason": "公司直接运营的AI算力云规模已达38000P", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 7.56, "first_limit_up": 1785893590, "break_limit_up_times": 6}, {"code": "002552", "name": "宝鼎科技", "price": 39.34, "change_pct": 10.01, "reason": "1、公司预计2026年半年度净利润同比增长468.71%-559.71%，因“子公司金宝电子覆铜板及电子铜箔业务扭亏为盈，产品销量及销售价格持续上升”；\n2、公司控股子公司金宝电子专业从事电子铜箔、覆铜板设计、研发、生产及销售，是国内能提供设计至生产一体化全流程服务的少数企业之一；产品广泛应用于 5G 通讯、汽车电子等领域，其中电子铜箔有 HTE 箔、LP 箔等多种类型，覆铜板涵盖玻纤布基、复合基、铝基等，是 PCB 产业链中的重要供应商", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 5.1, "first_limit_up": 1785900261, "break_limit_up_times": 0}, {"code": "300686", "name": "智动力", "price": 15.06, "change_pct": 20.0, "reason": "公司计划投资约3亿元建设光通信、算力热控及、铟锡镓铟系列等项目，拓展光通信及算力热控材料领域", "plates": ["光通信", "磷化铟"], "limit_up_days": 1, "turnover_ratio": 5.78, "first_limit_up": 1785893763, "break_limit_up_times": 0}, {"code": "603657", "name": "春光科技", "price": 26.14, "change_pct": 10.02, "reason": "公司主营吸尘器、洗地机、扫地机器人、布衣清洗机等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.82, "first_limit_up": 1785895785, "break_limit_up_times": 0}, {"code": "002975", "name": "博杰股份", "price": 84.61, "change_pct": 10.0, "reason": "1、参股公司鼎泰芯源主营磷化铟InP单晶材料，自主研发VGF/VB法晶体生长等40余项核心专利，可生产掺硫/掺锡/掺铁InP衬底产品；\n2、公司聚焦液冷服务器制造与检测环节，核心提供液冷板精密焊接设备、液冷系统密封性检测设备及自动化产线解决方案", "plates": ["磷化铟"], "limit_up_days": 2, "turnover_ratio": 2.44, "first_limit_up": 1785893466, "break_limit_up_times": 0}, {"code": "002346", "name": "柘中股份", "price": 20, "change_pct": 10.01, "reason": "公司生产的成套开关设备已应用在中芯国际及其下属公司", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.52, "first_limit_up": 1785897372, "break_limit_up_times": 0}, {"code": "688596", "name": "正帆科技", "price": 57.42, "change_pct": 20.0, "reason": "公司完成收购汉京半导体62.23%股权，新增石英、碳化硅陶瓷等半导体设备核心零组件，产品矩阵延伸至高端耗材", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.32, "first_limit_up": 1785895585, "break_limit_up_times": 19}, {"code": "301045", "name": "天禄科技", "price": 63.36, "change_pct": 20.0, "reason": "公司主营中大尺寸导光板，产品厚度0.3-3 mm、尺寸8-86英寸，已批量供货京东方、小米、华为、LG等头部面板品牌", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 6.29, "first_limit_up": 1785895506, "break_limit_up_times": 0}, {"code": "002908", "name": "德生科技", "price": 7.58, "change_pct": 10.01, "reason": "公司依托AI支撑平台，已在广东、河南、四川构建AI Agent政务服务网络，实现社保咨询、政策解读、业务经办等全场景“智能触达”", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 3.32, "first_limit_up": 1785895392, "break_limit_up_times": 0}, {"code": "605376", "name": "博迁新材", "price": 157.65, "change_pct": 10.0, "reason": "公司是全球领先、国内唯一的小粒径纳米镍粉生产商、国内MLCC镍粉市场领军企业，银包铜粉已批量用于光伏HJT电池低温浆料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 5.55, "first_limit_up": 1785895013, "break_limit_up_times": 1}, {"code": "002355", "name": "兴民智通", "price": 4.94, "change_pct": 10.02, "reason": "1、公司目前用于无人驾驶领域的产品包括车辆测试和监控使用的道路试验终端产品，用于L3及以上的自动驾驶使用的带v2x功能的车载终端；\n2、在智算领域，公司主要从事算力设备出租、算力中心建设、算力运维、模型托管等服务", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 2.06, "first_limit_up": 1785893403, "break_limit_up_times": 0}, {"code": "002963", "name": "豪尔赛", "price": 17.59, "change_pct": 10.01, "reason": "1、公司参股的华奕新能源已中标某头部通讯公司的数据中心冷板试点项目，其基于蒸发冷却独有冷水技术，复合液冷板，可完全实现无压缩机补冷；\n2、公司智慧灯杆解决方案基于灯具节能、智能灯控等技术，结合物联网、大数据、5G、AI、机器视觉等新一代信息技术，通过智慧照明云平台对城市路灯等公共照明实现统一智能化管理", "plates": ["云计算数据中心"], "limit_up_days": 4, "turnover_ratio": 2.5, "first_limit_up": 1785893481, "break_limit_up_times": 0}, {"code": "000603", "name": "盛达资源", "price": 29.15, "change_pct": 10.0, "reason": "公司预计中报净利润同比增长399.31%-470.64%，因“采矿及选矿能力有所提升，产能逐渐释放，2026年上半年度产品产销量增加；另外，叠加贵金属价格上涨，公司矿山主要产品销售价格较上年同期上涨，推动公司经营业绩同比显著增长”", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 7.67, "first_limit_up": 1785896280, "break_limit_up_times": 0}, {"code": "000712", "name": "锦龙股份", "price": 9.81, "change_pct": 9.98, "reason": "公司主要经营业务为证券公司业务，持有中山证券67.78%股权", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.39, "first_limit_up": 1785896466, "break_limit_up_times": 0}, {"code": "000510", "name": "新金路", "price": 16.12, "change_pct": 10.03, "reason": "1、公司高纯石英砂中试正在进行中，中试阶段的纯度大于5N，5N高纯石英砂是半导体芯片制造（石英坩埚、石英器件）、光伏单晶硅拉制（石英坩埚）、高端光学器件等领域的关键材料；\n2、公司控股子公司广西有色栗木矿业主要从事钽、铌、铅、锌、铜等有色金属及非金属的采矿、选矿、冶炼业务", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 9.45, "first_limit_up": 1785894018, "break_limit_up_times": 1}, {"code": "603335", "name": "迪生力", "price": 6.69, "change_pct": 10.03, "reason": "公司拟斥资9800万元收购全芯半导体30%股权，标的公司专注于半导体闪存产品的研发、设计及销售，拥有DDR5 SO-DIMM内存条等多种存储产品", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.06, "first_limit_up": 1785906335, "break_limit_up_times": 7}, {"code": "002971", "name": "和远气体", "price": 37.5, "change_pct": 10.0, "reason": "公司给长江存储、烽火科技、华星光电等光通信、半导体企业直接或间接供应氢气、氧气、氮气和氩气", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.71, "first_limit_up": 1785897513, "break_limit_up_times": 0}, {"code": "603928", "name": "兴业股份", "price": 11.94, "change_pct": 10.05, "reason": "公司已研发成功半导体光刻胶用酚醛树脂、特种半导体封装用酚醛树脂等一批特种有机合成功能新材料", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 10.03, "first_limit_up": 1785894377, "break_limit_up_times": 2}, {"code": "001337", "name": "四川黄金", "price": 43.27, "change_pct": 9.99, "reason": "公司主要从事金矿采选及销售", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 4.81, "first_limit_up": 1785896703, "break_limit_up_times": 1}, {"code": "000657", "name": "中钨高新", "price": 57.43, "change_pct": 10.0, "reason": "1、公司上半年净利润同比预增261%—298%，报告期内，钨精矿均价同比上涨，公司钨精矿及粉末产品盈利显著增长；PCB微钻、高端刀具等产品订单显著增长，带动盈利能力提升；\n2、公司旗下子公司金洲公司是PCB微钻领域龙头，具备极小径钻头精磨等核心技术", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.7, "first_limit_up": 1785899781, "break_limit_up_times": 0}, {"code": "000593", "name": "德龙汇能", "price": 22.52, "change_pct": 10.01, "reason": "公司主营城市管道燃气和零售商业，知名游资刘鑫举牌，持股比例增至5.01%", "plates": ["其他"], "limit_up_days": 4, "turnover_ratio": 6.86, "first_limit_up": 1785893100, "break_limit_up_times": 1}, {"code": "002214", "name": "大立科技", "price": 14.85, "change_pct": 10.0, "reason": "公司股票8月5日起撤销退市风险", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 0.29, "first_limit_up": 1785893100, "break_limit_up_times": 0}, {"code": "603663", "name": "三祥新材", "price": 37.26, "change_pct": 10.01, "reason": "1、公司锆铪分离项目正处于项目建设中，现有半工业化产线已实现连续稳定生产，产出的锆铪产品均为4N级以上，并已将部分产品向下游半导体领域客户送样；\n2、公司锆基卤化物材料目前已向下游电池企业小批量供货", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 2.71, "first_limit_up": 1785898819, "break_limit_up_times": 0}, {"code": "000751", "name": "锌业股份", "price": 5.12, "change_pct": 10.11, "reason": "公司主要生产锌、铅及深加工产品，拥有铟年产能60吨", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 4.86, "first_limit_up": 1785894678, "break_limit_up_times": 0}, {"code": "002990", "name": "盛视科技", "price": 49.29, "change_pct": 10.0, "reason": "1、全资子公司签署《算力产业合作协议》，围绕算电协同、AIDC智能算力中心运营等四大维度开展合作，整体合作业务体量折算合计约60亿元；\n2、公司参股的苏州亿铸智能科技有限公司是一家将新型存储器ReRAM及存算一体创新计算架构相结合，面向数据中心、云计算等场景的大算力AI芯片公司；\n3、人工智能智慧口岸应用领域领先企业之一，已建立了机器人产品线，包括室内/外巡检机器人、协作机器人、车底查验机器人、测温机器人、协运机器人等", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 12.87, "first_limit_up": 1785893412, "break_limit_up_times": 1}, {"code": "603306", "name": "华懋科技", "price": 67.46, "change_pct": 10.0, "reason": "1、国内光刻胶产业链龙头之一，目前已批量供应国内头部晶圆厂；\n2、公司拟以15.04亿元收购富创优越剩余57.84%股权，实现全资控股。标的是全球AI及算力制造产业链企业，致力于高速率光模块、高速铜缆连接器等", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 4.62, "first_limit_up": 1785900271, "break_limit_up_times": 0}, {"code": "601869", "name": "长飞光纤", "price": 312.4, "change_pct": 10.0, "reason": "全球光纤光缆行业的领先企业；公司空芯技术产能水平领先，并已在相关项目中标", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.87, "first_limit_up": 1785906027, "break_limit_up_times": 0}, {"code": "600892", "name": "大晟文化", "price": 4.16, "change_pct": 10.05, "reason": "游戏影视双驱动；公司游戏业务主要由全资子公司淘乐网络开发运营，专注于回合制端游与手游，代表作为《桃花源记》", "plates": ["游戏"], "limit_up_days": 2, "turnover_ratio": 5.42, "first_limit_up": 1785893450, "break_limit_up_times": 2}, {"code": "601231", "name": "环旭电子", "price": 25.96, "change_pct": 10.0, "reason": "公司7月底发布新一代1.6T光模块并自建测试实验室，未来将与控股股东合作拓展CPO光器件及系统组装业务", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 1.11, "first_limit_up": 1785894800, "break_limit_up_times": 1}, {"code": "002396", "name": "星网锐捷", "price": 28.7, "change_pct": 10.0, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["交换机"], "limit_up_days": 1, "turnover_ratio": 12.81, "first_limit_up": 1785894135, "break_limit_up_times": 4}, {"code": "603115", "name": "海星股份", "price": 77.58, "change_pct": 10.0, "reason": "公司已切入AI服务器/数据中心用铝电解电容器市场，800V DC高压架构带动AI电极箔需求增长，公司主营产品电极箔是铝电解电容器的核心原材料", "plates": ["被动元件"], "limit_up_days": 2, "turnover_ratio": 3.14, "first_limit_up": 1785894414, "break_limit_up_times": 1}, {"code": "002491", "name": "通鼎互联", "price": 16.06, "change_pct": 10.0, "reason": "通信线缆全产业链企业；公司聚焦光通信产业的发展，建成了涵盖光纤预制棒、光纤、光缆、通信电缆、通信设备等多个业务类别较为完整的产业链，可为客户提供一揽子的产品和解决方案", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 11.18, "first_limit_up": 1785899673, "break_limit_up_times": 0}, {"code": "603626", "name": "科森科技", "price": 15.11, "change_pct": 9.97, "reason": "1、公司为某品牌家用机器人提供相关结构件；\n2、公司与清陶能源共同投资设立了合资公司——科森清陶能源科技有限公司，专注于固态电池的集成、组装和系统集成等业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.71, "first_limit_up": 1785906025, "break_limit_up_times": 4}, {"code": "300248", "name": "新开普", "price": 10.07, "change_pct": 20.02, "reason": "高校信息化龙头公司；公司校级AI助手、星工场智能体平台已接入DeepSeek模型，并在西安交通大学、南京工业大学、山西大学等高校落地，与自研星普大模型组成混合模型方案，推动高校智慧校园数字化转型", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 8.69, "first_limit_up": 1785894615, "break_limit_up_times": 0}, {"code": "002721", "name": "金一文化", "price": 2.67, "change_pct": 9.88, "reason": "公司主营业务为贵金属工艺品及黄金珠宝首饰的研发设计及销售", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 1.9, "first_limit_up": 1785896913, "break_limit_up_times": 1}, {"code": "002348", "name": "高乐股份", "price": 12.12, "change_pct": 9.98, "reason": "公司再签31.95亿元算力大单", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 10.41, "first_limit_up": 1785893100, "break_limit_up_times": 11}, {"code": "000981", "name": "山子高科", "price": 3.17, "change_pct": 10.07, "reason": "公司有减速器业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.39, "first_limit_up": 1785894126, "break_limit_up_times": 2}, {"code": "300552", "name": "万集科技", "price": 24.88, "change_pct": 20.02, "reason": "公司专业从事智能交通系统(ITS)技术，前装ETC产品已成为60家车企的一级供应商", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 16.15, "first_limit_up": 1785893433, "break_limit_up_times": 2}, {"code": "001359", "name": "平安电工", "price": 86.17, "change_pct": 9.99, "reason": "公司电子级玻纤布、石英布为PCB基材CCL主材", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.6, "first_limit_up": 1785899667, "break_limit_up_times": 0}, {"code": "000811", "name": "冰轮环境", "price": 39.47, "change_pct": 10.01, "reason": "数据中心温控系统是旗下公司顿汉布什的主要业务之一，服务过国家超算广州中心（天河二号）、中国联通西安数据中心、中国移动贵州数据中心等；公司有产品服务数据中心液冷业务", "plates": ["液冷服务器"], "limit_up_days": 2, "turnover_ratio": 5.93, "first_limit_up": 1785898116, "break_limit_up_times": 28}, {"code": "002957", "name": "科瑞技术", "price": 38.47, "change_pct": 10.01, "reason": "公司为国内外客户提供超高精密部件、光耦合设备、共晶设备等多款半导体封装及测试设备，光耦合、共晶、芯片AOI设备均已量产", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 2.12, "first_limit_up": 1785893721, "break_limit_up_times": 0}, {"code": "002428", "name": "云南锗业", "price": 82.71, "change_pct": 10.0, "reason": "1、公司作为磷化铟衬底龙头，产能为15万片/年（2—4英寸）；\n2、公司“空间太阳能电池用锗晶片建设项目”2025年末将形成年产125万片产能，最终达250万片，锗晶片主要用于空间卫星、空间站等深空设备的空间卫星电池，直接配套商业航天需求", "plates": ["磷化铟"], "limit_up_days": 2, "turnover_ratio": 4.77, "first_limit_up": 1785893400, "break_limit_up_times": 1}, {"code": "002080", "name": "中材科技", "price": 48.81, "change_pct": 10.01, "reason": "1、公司自主研发的第一代低介电产品，已成功应用于高端 PCB 领域；\n2、全资子公司泰山玻纤专业从事玻璃纤维及其制品的研发、制造及销售，拥有超140万吨的玻璃纤维年产能，在玻璃纤维配方、大型玻纤池窑设计、窑炉纯氧燃烧技术等方面拥有核心自主知识产权，居世界领先水平", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 3.37, "first_limit_up": 1785906129, "break_limit_up_times": 20}, {"code": "603826", "name": "坤彩科技", "price": 17.36, "change_pct": 10.01, "reason": "公司地处福建，主营珠光材料77%、钛白粉20%", "plates": ["其他 "], "limit_up_days": 1, "turnover_ratio": 0.69, "first_limit_up": 1785894172, "break_limit_up_times": 0}, {"code": "603618", "name": "杭电股份", "price": 26.22, "change_pct": 9.98, "reason": "公司地处杭州，是国网杭州供电公司重要的电缆供应商和技术合作伙伴，具备光通信“光棒—光纤—光缆”一体化产业链，光缆产品通过参与电信运营商招投标实现销售", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 15.27, "first_limit_up": 1785906102, "break_limit_up_times": 26}, {"code": "603045", "name": "福达合金", "price": 53.56, "change_pct": 10.0, "reason": "公司低压电接触材料销售额国内第一，高分断能力焊接触头组件已配套施耐德、西门子、ABB等全球头部客户，北美数据中心低压配套业务在关税压力下逆势增长", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.74, "first_limit_up": 1785898689, "break_limit_up_times": 0}, {"code": "003018", "name": "金富科技", "price": 38.24, "change_pct": 10.01, "reason": "1、公司拟收购卓晖金属和联益热能各51%股权，标的公司均聚焦液冷散热产品；\n2、公司是国内最大的塑料防盗瓶盖供应商之一，长期稳定供应华润怡宝、可口可乐、达能等头部饮料品牌", "plates": ["液冷服务器"], "limit_up_days": 2, "turnover_ratio": 4.25, "first_limit_up": 1785898404, "break_limit_up_times": 0}, {"code": "603078", "name": "江化微", "price": 31.08, "change_pct": 10.02, "reason": "公司是国内湿电子化学品行业的领先企业之一；公司生产的光刻胶配套试剂主要用于下游半导体和平板显示领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.79, "first_limit_up": 1785894061, "break_limit_up_times": 0}, {"code": "603206", "name": "嘉环科技", "price": 15.54, "change_pct": 9.98, "reason": "公司主营业务涉及IDC数据中心设备建设及运维服务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.36, "first_limit_up": 1785894160, "break_limit_up_times": 0}, {"code": "600172", "name": "黄河旋风", "price": 11.22, "change_pct": 10.0, "reason": "公司自主研发的“金刚石—碳化硅复合材料”项目取得重大阶段性成果，核心性能指标达到国际先进水平，成功破解了长期困扰半导体产业的热膨胀失配难题，为我国高端半导体散热技术自主可控提供了关键支撑", "plates": ["培育钻石"], "limit_up_days": 1, "turnover_ratio": 12.03, "first_limit_up": 1785899354, "break_limit_up_times": 0}, {"code": "600367", "name": "红星发展", "price": 29.92, "change_pct": 10.0, "reason": "公司生产的高纯碳酸钡产品以更低杂质和纳米级粒径管控主要应用在液晶玻璃基板行业；康宁为公司直接客户", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 7.97, "first_limit_up": 1785896904, "break_limit_up_times": 2}, {"code": "000056", "name": "*ST皇庭", "price": 2.09, "change_pct": 10.0, "reason": "1、控股子公司意发功率核心产品为FRD等硅基功率半导体，同时具有IGBT设计能力，目前其拥有2条生产线，已稳定生产6英寸晶圆；\n2、公司实施“高新科技+商业管理”双主业战略，商业管理以“自持+整租+委托管理”模式布局粤港澳大湾区及全国一二线城市核心地段，旗下深圳皇庭广场已成为区域购物中心标识之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.6, "first_limit_up": 1785908304, "break_limit_up_times": 3}, {"code": "688549", "name": "中巨芯", "price": 23.21, "change_pct": 20.01, "reason": "公司主要从事电子湿化学品、电子特种气体和前驱体材料，为逻辑芯片、存储芯片制造稳定批量供应电子级硝酸，六氟化钨目前产能为600吨/年", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 17.34, "first_limit_up": 1785899007, "break_limit_up_times": 0}, {"code": "603201", "name": "常润股份", "price": 17.6, "change_pct": 10.0, "reason": "中国最大的千斤顶制造企业；公司的产品主要分为4大系列，即商用千斤顶及工具、随车配套零部件、专业汽保维修设备以及外购辅助产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.27, "first_limit_up": 1785893572, "break_limit_up_times": 3}, {"code": "603186", "name": "华正新材", "price": 119.31, "change_pct": 10.0, "reason": "公司已将AI算力赛道纳入五年战略重点，Extreme Low-loss等级覆铜板已批量供货AI服务器、交换机、数据中心等核心场景；上半年净利同比预增263.26%—380.44%，报告期内，覆铜板行业需求持续提升，公司积极开拓市场，适时产能扩张实现量价齐升；积极有效应对供应链供需持续偏紧的格局，并通过实现高速产品销售增长、持续改善产品结构等，提升产品毛利率，提高盈利水平", "plates": ["PCB板", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 9.11, "first_limit_up": 1785895455, "break_limit_up_times": 5}, {"code": "002992", "name": "宝明科技", "price": 36.19, "change_pct": 10.0, "reason": "公司HVLP4/5铜箔主要技术指标已完成厂内验证，正布局向客户送样", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 1.4, "first_limit_up": 1785906015, "break_limit_up_times": 0}, {"code": "002182", "name": "宝武镁业", "price": 13.12, "change_pct": 9.97, "reason": "公司是全球镁行业龙头企业，成立“低空经济、人形机器人、电动自行车”专项小组，与多家头部企业建立沟通渠道，正在研发镁合金机器人盖板、底座、控制臂等部件", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 3.86, "first_limit_up": 1785894798, "break_limit_up_times": 4}, {"code": "601208", "name": "东材科技", "price": 39.33, "change_pct": 10.01, "reason": "1、公司业务聚焦于电子级树脂材料，如双马树脂、活性酯等，是制造高频高速PCB的核心原材料；2025年净利同比预增65.73%；\n2、电子级树脂材料专家；公司与Chemax、种亿化学成立成都东凯芯半导体材料公司，重点开展高端光刻胶项目", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 6.08, "first_limit_up": 1785898203, "break_limit_up_times": 0}, {"code": "600397", "name": "江钨装备", "price": 15.35, "change_pct": 10.04, "reason": "公司拟定增募资不超过19亿元，用于收购控股股东旗下江钨硬质合金、华茂钨材料及九江有色金属冶炼三家公司100%股权，拟注入钨制品及钽铌制品领域优质资产", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 14.8, "first_limit_up": 1785909574, "break_limit_up_times": 3}, {"code": "001225", "name": "和泰机电", "price": 45.22, "change_pct": 10.0, "reason": "公司通过持续实施自动化、智能化改造，更新迭代生产设备，在物料输送设备制造领域的生产工艺已相对成熟，应用了机器人自动焊接技术，机器人视觉识别自动上下料、自动装箱等技术", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.2, "first_limit_up": 1785893751, "break_limit_up_times": 0}, {"code": "002703", "name": "浙江世宝", "price": 16.28, "change_pct": 10.0, "reason": "公司在线控转向和后轮转向领域技术储备深厚，已获多家主流车企定点，线控转向首个量产项目预计于2026年下半年开始量产", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 2.17, "first_limit_up": 1785893100, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告"};