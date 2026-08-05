const UPDATE_TIME = "2026-08-05 06:25";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 3.74,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续263天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI应用",
    "rise": 1.02,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "MLCC概念",
    "rise": 6.51,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886112"
  },
  {
    "name": "存储芯片",
    "rise": 5.54,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续216天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "算力租赁",
    "rise": 1.57,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续127天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "创新药",
    "rise": -0.1,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续93天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 4.29,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续86天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "无人驾驶",
    "rise": 1.88,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "智能驾驶ETF",
    "code": "885736"
  },
  {
    "name": "人形机器人",
    "rise": 2.0,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续427天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": 1.86,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续192天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "国家大基金持股",
    "rise": 5.81,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "机器人概念",
    "rise": 1.53,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "黄金概念",
    "rise": 3.63,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 2,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "先进封装",
    "rise": 4.88,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "光纤概念",
    "rise": 3.33,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续92天上榜",
    "rankChg": -1,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "芯片概念",
    "rise": 3.39,
    "rate": 0,
    "tag": "37家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "液冷服务器",
    "rise": 2.87,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "光刻机",
    "rise": 5.25,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "科创半导体ETF",
    "code": "886054"
  },
  {
    "name": "稀土永磁",
    "rise": 2.58,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "华为盘古",
    "rise": 3.15,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "软件ETF",
    "code": "886094"
  }
];
const THS_EVENTS = [
  {
    "title": "电子布暴涨18%！花旗确认覆铜板涨价窗口开启，建滔板块走强！",
    "desc": "",
    "heat": 944384,
    "direction": "电子布涨价",
    "themes": [
      "电子布"
    ],
    "stocks": [
      {
        "name": "国际复材",
        "code": "301526",
        "chg": 12.508339
      }
    ]
  },
  {
    "title": "日韩巨头涨价催化MLCC",
    "desc": "",
    "heat": 721363,
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
    "heat": 497625,
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
    "heat": 347361,
    "direction": "AI应用",
    "themes": [
      "AI应用",
      "人工智能"
    ],
    "stocks": [
      {
        "name": "汉鑫科技",
        "code": "920092",
        "chg": 26.125534
      }
    ]
  },
  {
    "title": "首部L3、L4级自动驾驶强制国标发布 拟于2027年7月实施，企业需建立全周期安全保障与检验体系",
    "desc": "",
    "heat": 336704,
    "direction": "无人驾驶",
    "themes": [
      "无人驾驶"
    ],
    "stocks": [
      {
        "name": "汉鑫科技",
        "code": "920092",
        "chg": 26.125534
      }
    ]
  },
  {
    "title": "美伊谈判出现反差 霍尔木兹方案浮出水面",
    "desc": "",
    "heat": 244634,
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
    "change": "+7.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+7.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+6.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+6.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+6.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+6.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+6.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+6.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+6.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+5.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+5.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+5.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+5.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+5.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+5.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+5.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+5.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+5.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+5.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+5.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 9,
    "hot_rank_chg": 2,
    "stock_cnt": 5755,
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
        "change_pct": 0.89
      },
      {
        "name": "密集调研",
        "change_pct": 2.38
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.33
      },
      {
        "name": "强势人气股",
        "change_pct": 2.68
      },
      {
        "name": "教育",
        "change_pct": 1.45
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.05
      },
      {
        "name": "职业教育",
        "change_pct": 1.17
      },
      {
        "name": "在线教育",
        "change_pct": 2.27
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.29
      },
      {
        "name": "华为产业链",
        "change_pct": 1.92
      },
      {
        "name": "智谱AI",
        "change_pct": 0.77
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 11,
    "hot_rank_chg": -9,
    "stock_cnt": 5755,
    "price": "5.58",
    "change": "2.76",
    "market_id": "33",
    "circulate_market_value": "32669775000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.31
      },
      {
        "name": "人工智能",
        "change_pct": 1.34
      },
      {
        "name": "水利",
        "change_pct": 0.62
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.74
      },
      {
        "name": "大数据",
        "change_pct": 1.25
      },
      {
        "name": "园林",
        "change_pct": 1.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 3.03
      },
      {
        "name": "数字经济",
        "change_pct": 0.99
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.86
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.79
      },
      {
        "name": "第三代半导体",
        "change_pct": 3.9
      },
      {
        "name": "快手概念股",
        "change_pct": 0.94
      },
      {
        "name": "IGBT",
        "change_pct": 3.27
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.76
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.79
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.13
      },
      {
        "name": "氮化镓",
        "change_pct": 3.49
      },
      {
        "name": "AI营销",
        "change_pct": 0.78
      },
      {
        "name": "多模态",
        "change_pct": 1.49
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.27
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.82
      },
      {
        "name": "区块链",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 15,
    "hot_rank_chg": -9,
    "stock_cnt": 5755,
    "price": "7.82",
    "change": "-0.76",
    "market_id": "33",
    "circulate_market_value": "12712925400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.63
      },
      {
        "name": "电竞",
        "change_pct": -0.16
      },
      {
        "name": "手游",
        "change_pct": 0.17
      },
      {
        "name": "强势人气股",
        "change_pct": 2.68
      },
      {
        "name": "人工智能",
        "change_pct": 1.34
      },
      {
        "name": "游戏",
        "change_pct": 0.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.01
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.89
      },
      {
        "name": "快手概念股",
        "change_pct": 0.98
      },
      {
        "name": "元宇宙",
        "change_pct": 1.17
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.82
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.51
      },
      {
        "name": "web3.0",
        "change_pct": 0.48
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.84
      },
      {
        "name": "数据要素",
        "change_pct": 1.04
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.15
      },
      {
        "name": "AI营销",
        "change_pct": 0.78
      },
      {
        "name": "ChatGPT",
        "change_pct": 2.24
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.31
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.02
      },
      {
        "name": "人形机器人",
        "change_pct": 2.08
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.07
      },
      {
        "name": "多模态",
        "change_pct": 1.56
      },
      {
        "name": "AI视频",
        "change_pct": 0.85
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.19
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.86
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 21,
    "hot_rank_chg": -14,
    "stock_cnt": 5755,
    "price": "6.64",
    "change": "2.95",
    "market_id": "17",
    "circulate_market_value": "16722906000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.63
      },
      {
        "name": "工业大麻",
        "change_pct": 0.03
      },
      {
        "name": "中药",
        "change_pct": -1.05
      },
      {
        "name": "强势人气股",
        "change_pct": 2.7
      },
      {
        "name": "保健品",
        "change_pct": -1.23
      },
      {
        "name": "民营医院",
        "change_pct": -0.7
      },
      {
        "name": "医药",
        "change_pct": -0.28
      },
      {
        "name": "化学原料药",
        "change_pct": -0.28
      },
      {
        "name": "流感",
        "change_pct": -0.16
      },
      {
        "name": "振兴东北",
        "change_pct": -0.46
      },
      {
        "name": "食品",
        "change_pct": -0.51
      }
    ]
  },
  {
    "code": "002579",
    "name": "中京电子",
    "hot_rank": 26,
    "hot_rank_chg": 55,
    "stock_cnt": 5755,
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
        "change_pct": 1.35
      },
      {
        "name": "折叠屏",
        "change_pct": 4.21
      },
      {
        "name": "手机产业链",
        "change_pct": 3.45
      },
      {
        "name": "电子烟",
        "change_pct": 2.02
      },
      {
        "name": "半导体",
        "change_pct": 5.17
      },
      {
        "name": "5G",
        "change_pct": 2.56
      },
      {
        "name": "强势人气股",
        "change_pct": 2.7
      },
      {
        "name": "VR&AR",
        "change_pct": 2.87
      },
      {
        "name": "光通信",
        "change_pct": 3.04
      },
      {
        "name": "OLED",
        "change_pct": 3.72
      },
      {
        "name": "PCB板",
        "change_pct": 4.84
      },
      {
        "name": "智能音箱",
        "change_pct": 2.3
      },
      {
        "name": "WiFi",
        "change_pct": 3.78
      },
      {
        "name": "小米概念股",
        "change_pct": 3.11
      },
      {
        "name": "6G",
        "change_pct": 2.65
      },
      {
        "name": "MiniLED",
        "change_pct": 3.29
      },
      {
        "name": "AI PC",
        "change_pct": 3.51
      },
      {
        "name": "华为产业链",
        "change_pct": 1.97
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 3.1
      },
      {
        "name": "毫米波雷达",
        "change_pct": 2.97
      },
      {
        "name": "交换机",
        "change_pct": 3.63
      },
      {
        "name": "人形机器人",
        "change_pct": 2.08
      },
      {
        "name": "AI手机",
        "change_pct": 3.9
      },
      {
        "name": "AI医疗",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 28,
    "hot_rank_chg": -1,
    "stock_cnt": 5755,
    "price": "5.89",
    "change": "4.62",
    "market_id": "33",
    "circulate_market_value": "208312420000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 4.21
      },
      {
        "name": "手机产业链",
        "change_pct": 3.45
      },
      {
        "name": "超高清视频",
        "change_pct": 1.53
      },
      {
        "name": "苹果产业链",
        "change_pct": 3.59
      },
      {
        "name": "电竞",
        "change_pct": -0.13
      },
      {
        "name": "半导体",
        "change_pct": 5.17
      },
      {
        "name": "人工智能",
        "change_pct": 1.38
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.32
      },
      {
        "name": "VR&AR",
        "change_pct": 2.87
      },
      {
        "name": "OLED",
        "change_pct": 3.72
      },
      {
        "name": "京津冀",
        "change_pct": 0.32
      },
      {
        "name": "物联网",
        "change_pct": 1.46
      },
      {
        "name": "指纹识别",
        "change_pct": 3.46
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.14
      },
      {
        "name": "白马股",
        "change_pct": 0.35
      },
      {
        "name": "智能制造",
        "change_pct": 1.83
      },
      {
        "name": "小米概念股",
        "change_pct": 3.11
      },
      {
        "name": "国产芯片",
        "change_pct": 3.68
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 3.94
      },
      {
        "name": "全息概念",
        "change_pct": 2.15
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.8
      },
      {
        "name": "MicroLED",
        "change_pct": 3.65
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.53
      },
      {
        "name": "智能手表",
        "change_pct": 3.47
      },
      {
        "name": "MiniLED",
        "change_pct": 3.29
      },
      {
        "name": "传感器",
        "change_pct": 2.4
      },
      {
        "name": "大硅片",
        "change_pct": 7.51
      },
      {
        "name": "AI PC",
        "change_pct": 3.51
      },
      {
        "name": "华为产业链",
        "change_pct": 1.97
      },
      {
        "name": "回购",
        "change_pct": 0.91
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.31
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 4.57
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 30,
    "hot_rank_chg": -13,
    "stock_cnt": 5755,
    "price": "12.62",
    "change": "0.16",
    "market_id": "33",
    "circulate_market_value": "8643468300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 0.73
      },
      {
        "name": "核电",
        "change_pct": 1.24
      },
      {
        "name": "强势人气股",
        "change_pct": 2.7
      },
      {
        "name": "充电桩",
        "change_pct": 1.34
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.56
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.3
      },
      {
        "name": "储能",
        "change_pct": 0.94
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.07
      },
      {
        "name": "智能电网",
        "change_pct": 1.06
      },
      {
        "name": "核聚变",
        "change_pct": 1.96
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 32,
    "hot_rank_chg": -3,
    "stock_cnt": 5755,
    "price": "3.48",
    "change": "0.29",
    "market_id": "33",
    "circulate_market_value": "6971752600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 1.87
      },
      {
        "name": "数字孪生",
        "change_pct": 1.0
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.85
      },
      {
        "name": "强势人气股",
        "change_pct": 2.7
      },
      {
        "name": "人工智能",
        "change_pct": 1.38
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.32
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.56
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.67
      },
      {
        "name": "人脸识别",
        "change_pct": 1.28
      },
      {
        "name": "智慧停车",
        "change_pct": 1.17
      },
      {
        "name": "物联网",
        "change_pct": 1.46
      },
      {
        "name": "大数据",
        "change_pct": 1.27
      },
      {
        "name": "智慧城市",
        "change_pct": 1.08
      },
      {
        "name": "雄安新区",
        "change_pct": 0.02
      },
      {
        "name": "机器人",
        "change_pct": 1.69
      },
      {
        "name": "数字经济",
        "change_pct": 1.01
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.07
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.89
      },
      {
        "name": "建筑节能",
        "change_pct": 0.07
      },
      {
        "name": "旧改",
        "change_pct": -0.04
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.77
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.18
      },
      {
        "name": "华为产业链",
        "change_pct": 1.97
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -1.04
      },
      {
        "name": "区块链",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 33,
    "hot_rank_chg": 11,
    "stock_cnt": 5755,
    "price": "6.73",
    "change": "2.59",
    "market_id": "33",
    "circulate_market_value": "7663157300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 1.38
      },
      {
        "name": "强势人气股",
        "change_pct": 2.7
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.67
      },
      {
        "name": "航母",
        "change_pct": 0.99
      },
      {
        "name": "光伏",
        "change_pct": 1.28
      },
      {
        "name": "风电",
        "change_pct": 0.51
      },
      {
        "name": "军工",
        "change_pct": 1.17
      },
      {
        "name": "机器人",
        "change_pct": 1.69
      },
      {
        "name": "储能",
        "change_pct": 0.94
      },
      {
        "name": "国企改革",
        "change_pct": 0.15
      },
      {
        "name": "宁夏概念",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 40,
    "hot_rank_chg": 19,
    "stock_cnt": 5755,
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
        "name": "无人驾驶",
        "change_pct": 2.01
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.14
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.3
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.95
      },
      {
        "name": "低价股",
        "change_pct": -0.51
      },
      {
        "name": "减速器",
        "change_pct": 1.29
      },
      {
        "name": "华为汽车",
        "change_pct": 1.09
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 48,
    "hot_rank_chg": -8,
    "stock_cnt": 5755,
    "price": "9.48",
    "change": "3.04",
    "market_id": "17",
    "circulate_market_value": "16961031000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.25
      },
      {
        "name": "纯碱",
        "change_pct": -0.34
      },
      {
        "name": "食品",
        "change_pct": -0.51
      },
      {
        "name": "土壤修复",
        "change_pct": 0.91
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.51
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.7
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.51
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 51,
    "hot_rank_chg": -23,
    "stock_cnt": 5755,
    "price": "11.32",
    "change": "1.98",
    "market_id": "33",
    "circulate_market_value": "9150004800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 1.03
      },
      {
        "name": "大飞机",
        "change_pct": 1.19
      },
      {
        "name": "北斗导航",
        "change_pct": 1.14
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.67
      },
      {
        "name": "军民融合",
        "change_pct": 1.39
      },
      {
        "name": "磁悬浮",
        "change_pct": 0.73
      },
      {
        "name": "军工",
        "change_pct": 1.17
      },
      {
        "name": "碳纤维",
        "change_pct": 1.81
      },
      {
        "name": "无人机",
        "change_pct": 1.51
      },
      {
        "name": "航天",
        "change_pct": 2.03
      },
      {
        "name": "卫星互联网",
        "change_pct": 1.79
      },
      {
        "name": "低空经济",
        "change_pct": 1.31
      },
      {
        "name": "海洋经济",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 52,
    "hot_rank_chg": 4,
    "stock_cnt": 5755,
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
        "change_pct": 0.44
      },
      {
        "name": "光伏",
        "change_pct": 1.28
      },
      {
        "name": "特高压",
        "change_pct": 1.28
      },
      {
        "name": "智能电网",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 54,
    "hot_rank_chg": 532,
    "stock_cnt": 5755,
    "price": "4.69",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "7331953700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "无人驾驶",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 2.01
      },
      {
        "name": "共享经济",
        "change_pct": 0.29
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.56
      },
      {
        "name": "旅游",
        "change_pct": -0.14
      },
      {
        "name": "物业管理",
        "change_pct": 0.3
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 57,
    "hot_rank_chg": 51,
    "stock_cnt": 5755,
    "price": "8.71",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "3349409900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "CRO",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 0.18
      },
      {
        "name": "股权转让",
        "change_pct": 1.56
      },
      {
        "name": "新疆概念",
        "change_pct": 0.04
      },
      {
        "name": "医药",
        "change_pct": -0.28
      },
      {
        "name": "流感",
        "change_pct": -0.16
      },
      {
        "name": "国资入股",
        "change_pct": 0.74
      },
      {
        "name": "减肥药",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "603106",
    "name": "恒银科技",
    "hot_rank": 58,
    "hot_rank_chg": -5,
    "stock_cnt": 5755,
    "price": "9.16",
    "change": "1.33",
    "market_id": "17",
    "circulate_market_value": "4767963200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 1.29
      },
      {
        "name": "人工智能",
        "change_pct": 1.38
      },
      {
        "name": "人脸识别",
        "change_pct": 1.28
      },
      {
        "name": "智慧停车",
        "change_pct": 1.17
      },
      {
        "name": "雄安新区",
        "change_pct": 0.02
      },
      {
        "name": "信创",
        "change_pct": 1.68
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.82
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.84
      },
      {
        "name": "智慧政务",
        "change_pct": 1.23
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.77
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 61,
    "hot_rank_chg": -12,
    "stock_cnt": 5755,
    "price": "6.37",
    "change": "0.63",
    "market_id": "17",
    "circulate_market_value": "78963088000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.23
      },
      {
        "name": "核电",
        "change_pct": 1.24
      },
      {
        "name": "强势人气股",
        "change_pct": 2.7
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.59
      },
      {
        "name": "水电",
        "change_pct": -0.96
      },
      {
        "name": "火电",
        "change_pct": -0.31
      },
      {
        "name": "光伏",
        "change_pct": 1.28
      },
      {
        "name": "风电",
        "change_pct": 0.51
      },
      {
        "name": "国企改革",
        "change_pct": 0.15
      },
      {
        "name": "算电协同",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 64,
    "hot_rank_chg": -14,
    "stock_cnt": 5755,
    "price": "5.54",
    "change": "1.09",
    "market_id": "33",
    "circulate_market_value": "5722464300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.0
      },
      {
        "name": "锂电池",
        "change_pct": 2.07
      },
      {
        "name": "强势人气股",
        "change_pct": 2.7
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 5.42
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.19
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.3
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "600666",
    "name": "奥瑞德",
    "hot_rank": 66,
    "hot_rank_chg": 5,
    "stock_cnt": 5755,
    "price": "3.86",
    "change": "2.12",
    "market_id": "17",
    "circulate_market_value": "9658196600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 1.56
      },
      {
        "name": "3D玻璃",
        "change_pct": 3.62
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.51
      },
      {
        "name": "词元概念/Token",
        "change_pct": 0.97
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.51
      },
      {
        "name": "RWA",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "002348",
    "name": "高乐股份",
    "hot_rank": 67,
    "hot_rank_chg": 43,
    "stock_cnt": 5755,
    "price": "12.12",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "10950819900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "签署算力大单",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 0.97
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.24
      },
      {
        "name": "人工智能",
        "change_pct": 1.38
      },
      {
        "name": "教育",
        "change_pct": 1.53
      },
      {
        "name": "外贸受益概念",
        "change_pct": 0.93
      },
      {
        "name": "RCEP概念",
        "change_pct": 1.23
      },
      {
        "name": "固态电池",
        "change_pct": 2.1
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.51
      },
      {
        "name": "教育信息化",
        "change_pct": 1.77
      },
      {
        "name": "在线教育",
        "change_pct": 2.33
      },
      {
        "name": "玩具",
        "change_pct": 1.97
      },
      {
        "name": "盲盒",
        "change_pct": 0.04
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.19
      }
    ]
  },
  {
    "code": "002036",
    "name": "联创电子",
    "hot_rank": 74,
    "hot_rank_chg": 318,
    "stock_cnt": 5755,
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
        "change_pct": 0.69
      },
      {
        "name": "折叠屏",
        "change_pct": 4.21
      },
      {
        "name": "手机产业链",
        "change_pct": 3.45
      },
      {
        "name": "超高清视频",
        "change_pct": 1.53
      },
      {
        "name": "无线充电",
        "change_pct": 2.88
      },
      {
        "name": "特斯拉",
        "change_pct": 1.59
      },
      {
        "name": "股权转让",
        "change_pct": 1.56
      },
      {
        "name": "无人驾驶",
        "change_pct": 2.01
      },
      {
        "name": "VR&AR",
        "change_pct": 2.87
      },
      {
        "name": "OLED",
        "change_pct": 3.72
      },
      {
        "name": "3D感应",
        "change_pct": 2.81
      },
      {
        "name": "人脸识别",
        "change_pct": 1.28
      },
      {
        "name": "3D玻璃",
        "change_pct": 3.62
      },
      {
        "name": "指纹识别",
        "change_pct": 3.46
      },
      {
        "name": "手势识别",
        "change_pct": 2.19
      },
      {
        "name": "虹膜识别",
        "change_pct": 1.05
      },
      {
        "name": "复牌股",
        "change_pct": 3.23
      },
      {
        "name": "机器视觉",
        "change_pct": 2.77
      },
      {
        "name": "无人机",
        "change_pct": 1.51
      },
      {
        "name": "智能制造",
        "change_pct": 1.83
      },
      {
        "name": "国产芯片",
        "change_pct": 3.68
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 3.94
      },
      {
        "name": "激光雷达",
        "change_pct": 3.35
      },
      {
        "name": "元宇宙",
        "change_pct": 1.17
      },
      {
        "name": "电子后视镜",
        "change_pct": 1.74
      },
      {
        "name": "无线耳机",
        "change_pct": 2.8
      },
      {
        "name": "云游戏",
        "change_pct": 1.14
      },
      {
        "name": "AI PC",
        "change_pct": 3.51
      },
      {
        "name": "国资入股",
        "change_pct": 0.74
      },
      {
        "name": "华为产业链",
        "change_pct": 1.97
      },
      {
        "name": "毫米波雷达",
        "change_pct": 2.97
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.31
      },
      {
        "name": "英伟达概念",
        "change_pct": 3.2
      },
      {
        "name": "人形机器人",
        "change_pct": 2.08
      },
      {
        "name": "智能座舱",
        "change_pct": 2.55
      },
      {
        "name": "AI手机",
        "change_pct": 3.9
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 83,
    "hot_rank_chg": -6,
    "stock_cnt": 5755,
    "price": "7.17",
    "change": "-2.71",
    "market_id": "33",
    "circulate_market_value": "23853127000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 0.73
      },
      {
        "name": "核电",
        "change_pct": 1.24
      },
      {
        "name": "5G",
        "change_pct": 2.56
      },
      {
        "name": "一带一路",
        "change_pct": 0.44
      },
      {
        "name": "充电桩",
        "change_pct": 1.34
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.86
      },
      {
        "name": "风电",
        "change_pct": 0.51
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.3
      },
      {
        "name": "储能",
        "change_pct": 0.94
      },
      {
        "name": "特高压",
        "change_pct": 1.28
      },
      {
        "name": "智能电网",
        "change_pct": 1.06
      },
      {
        "name": "海洋经济",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 85,
    "hot_rank_chg": 99,
    "stock_cnt": 5755,
    "price": "3.47",
    "change": "10.16",
    "market_id": "33",
    "circulate_market_value": "3193045200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "游戏IP",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.18
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.38
      },
      {
        "name": "人工智能",
        "change_pct": 1.38
      },
      {
        "name": "VR&AR",
        "change_pct": 2.87
      },
      {
        "name": "游戏",
        "change_pct": 0.34
      },
      {
        "name": "动漫",
        "change_pct": 0.71
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.89
      },
      {
        "name": "快手概念股",
        "change_pct": 0.98
      },
      {
        "name": "NFT",
        "change_pct": -0.21
      },
      {
        "name": "元宇宙",
        "change_pct": 1.17
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.82
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.15
      },
      {
        "name": "云游戏",
        "change_pct": 1.14
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.19
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 87,
    "hot_rank_chg": 74,
    "stock_cnt": 5755,
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
        "change_pct": 1.35
      },
      {
        "name": "强势人气股",
        "change_pct": 2.7
      },
      {
        "name": "智能制造",
        "change_pct": 1.83
      },
      {
        "name": "工业互联网",
        "change_pct": 1.08
      },
      {
        "name": "培育钻石",
        "change_pct": 4.57
      },
      {
        "name": "金刚线",
        "change_pct": 3.49
      },
      {
        "name": "国资入股",
        "change_pct": 0.74
      },
      {
        "name": "深地经济",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "000967",
    "name": "盈峰环境",
    "hot_rank": 93,
    "hot_rank_chg": -26,
    "stock_cnt": 5755,
    "price": "9.41",
    "change": "3.52",
    "market_id": "33",
    "circulate_market_value": "31595661000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 2.01
      },
      {
        "name": "核电",
        "change_pct": 1.24
      },
      {
        "name": "充电桩",
        "change_pct": 1.34
      },
      {
        "name": "固废处理",
        "change_pct": 0.37
      },
      {
        "name": "大气治理",
        "change_pct": 1.2
      },
      {
        "name": "智慧城市",
        "change_pct": 1.08
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.3
      },
      {
        "name": "环保",
        "change_pct": 0.6
      },
      {
        "name": "机器人",
        "change_pct": 1.69
      },
      {
        "name": "土壤修复",
        "change_pct": 0.91
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.51
      },
      {
        "name": "垃圾分类",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 97,
    "hot_rank_chg": -22,
    "stock_cnt": 5755,
    "price": "6.00",
    "change": "2.39",
    "market_id": "33",
    "circulate_market_value": "7780413800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.05
      },
      {
        "name": "创新药",
        "change_pct": 0.18
      },
      {
        "name": "央企改革",
        "change_pct": 0.23
      },
      {
        "name": "医疗器械",
        "change_pct": 0.22
      },
      {
        "name": "强势人气股",
        "change_pct": 2.7
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.32
      },
      {
        "name": "保健品",
        "change_pct": -1.23
      },
      {
        "name": "民营医院",
        "change_pct": -0.7
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.13
      },
      {
        "name": "医药",
        "change_pct": -0.28
      },
      {
        "name": "化学原料药",
        "change_pct": -0.28
      },
      {
        "name": "海南概念",
        "change_pct": 0.16
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": 0.69
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.02
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.56
      },
      {
        "name": "食品",
        "change_pct": -0.51
      },
      {
        "name": "国企改革",
        "change_pct": 0.15
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.77
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.18
      },
      {
        "name": "自贸区",
        "change_pct": -0.11
      },
      {
        "name": "合成生物",
        "change_pct": 0.06
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "300308", "name": "中际旭创", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5755, "price": "943.00", "change": "-7.81", "market_id": "33", "circulate_market_value": "1045763060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5755, "price": "187.65", "change": "4.81", "market_id": "33", "circulate_market_value": "260143270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 3, "hot_rank_chg": 13, "stock_cnt": 5755, "price": "423.94", "change": "-5.53", "market_id": "33", "circulate_market_value": "531723840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 4, "hot_rank_chg": 14, "stock_cnt": 5755, "price": "82.71", "change": "10.00", "market_id": "33", "circulate_market_value": "54012577000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "磷化铟"}, {"code": "000815", "name": "美利云", "hot_rank": 5, "hot_rank_chg": 5, "stock_cnt": 5755, "price": "18.67", "change": "1.63", "market_id": "33", "circulate_market_value": "12980560900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 6, "hot_rank_chg": 26, "stock_cnt": 5755, "price": "36.85", "change": "7.37", "market_id": "33", "circulate_market_value": "105393678000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 7, "hot_rank_chg": -3, "stock_cnt": 5755, "price": "54.31", "change": "-1.25", "market_id": "17", "circulate_market_value": "244560050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5755, "price": "58.40", "change": "7.49", "market_id": "33", "circulate_market_value": "67569545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5755, "price": "11.73", "change": "10.04", "market_id": "33", "circulate_market_value": "3336969300.00", "change_type": "1", "change_section": "8", "change_days": "8", "change_reason": "AI教育", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.89}, {"name": "密集调研", "change_pct": 2.38}, {"name": "ST摘帽", "change_pct": 1.33}, {"name": "强势人气股", "change_pct": 2.68}, {"name": "教育", "change_pct": 1.45}, {"name": "阿里巴巴概念股", "change_pct": 1.05}, {"name": "职业教育", "change_pct": 1.17}, {"name": "在线教育", "change_pct": 2.27}, {"name": "华为鸿蒙", "change_pct": 1.29}, {"name": "华为产业链", "change_pct": 1.92}, {"name": "智谱AI", "change_pct": 0.77}]}, {"code": "603629", "name": "利通电子", "hot_rank": 10, "hot_rank_chg": 13, "stock_cnt": 5755, "price": "112.65", "change": "10.00", "market_id": "17", "circulate_market_value": "40635491000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "算力租赁"}, {"code": "002131", "name": "利欧股份", "hot_rank": 11, "hot_rank_chg": -9, "stock_cnt": 5755, "price": "5.58", "change": "2.76", "market_id": "33", "circulate_market_value": "32669775000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.31}, {"name": "人工智能", "change_pct": 1.34}, {"name": "水利", "change_pct": 0.62}, {"name": "直播/短视频", "change_pct": 0.74}, {"name": "大数据", "change_pct": 1.25}, {"name": "园林", "change_pct": 1.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 3.03}, {"name": "数字经济", "change_pct": 0.99}, {"name": "腾讯概念股", "change_pct": 0.86}, {"name": "理想汽车概念股", "change_pct": 1.79}, {"name": "第三代半导体", "change_pct": 3.9}, {"name": "快手概念股", "change_pct": 0.94}, {"name": "IGBT", "change_pct": 3.27}, {"name": "虚拟数字人", "change_pct": 0.76}, {"name": "AIGC概念", "change_pct": 0.79}, {"name": "字节跳动概念股", "change_pct": 1.13}, {"name": "氮化镓", "change_pct": 3.49}, {"name": "AI营销", "change_pct": 0.78}, {"name": "多模态", "change_pct": 1.49}, {"name": "液冷服务器", "change_pct": 3.27}, {"name": "小红书概念股", "change_pct": 0.82}, {"name": "区块链", "change_pct": 0.69}]}, {"code": "603259", "name": "药明康德", "hot_rank": 12, "hot_rank_chg": -9, "stock_cnt": 5755, "price": "146.75", "change": "3.84", "market_id": "17", "circulate_market_value": "362953880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 13, "hot_rank_chg": 0, "stock_cnt": 5755, "price": "379.85", "change": "6.74", "market_id": "17", "circulate_market_value": "253926660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 14, "hot_rank_chg": 10, "stock_cnt": 5755, "price": "212.75", "change": "0.34", "market_id": "33", "circulate_market_value": "231630740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 15, "hot_rank_chg": -9, "stock_cnt": 5755, "price": "7.82", "change": "-0.76", "market_id": "33", "circulate_market_value": "12712925400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.63}, {"name": "电竞", "change_pct": -0.16}, {"name": "手游", "change_pct": 0.17}, {"name": "强势人气股", "change_pct": 2.68}, {"name": "人工智能", "change_pct": 1.34}, {"name": "游戏", "change_pct": 0.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.01}, {"name": "腾讯概念股", "change_pct": 0.89}, {"name": "快手概念股", "change_pct": 0.98}, {"name": "元宇宙", "change_pct": 1.17}, {"name": "虚拟数字人", "change_pct": 0.82}, {"name": "东数西算/算力", "change_pct": 1.51}, {"name": "web3.0", "change_pct": 0.48}, {"name": "AIGC概念", "change_pct": 0.84}, {"name": "数据要素", "change_pct": 1.04}, {"name": "字节跳动概念股", "change_pct": 1.15}, {"name": "AI营销", "change_pct": 0.78}, {"name": "ChatGPT", "change_pct": 2.24}, {"name": "智能眼镜/MR头显", "change_pct": 3.31}, {"name": "人工智能大模型", "change_pct": 1.02}, {"name": "人形机器人", "change_pct": 2.08}, {"name": "短剧/互动影游", "change_pct": 0.07}, {"name": "多模态", "change_pct": 1.56}, {"name": "AI视频", "change_pct": 0.85}, {"name": "IP经济/谷子经济", "change_pct": 0.19}, {"name": "小红书概念股", "change_pct": 0.86}]}, {"code": "002703", "name": "浙江世宝", "hot_rank": 16, "hot_rank_chg": 84, "stock_cnt": 5755, "price": "16.28", "change": "10.00", "market_id": "33", "circulate_market_value": "9540862600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "线控转向"}, {"code": "600667", "name": "太极实业", "hot_rank": 17, "hot_rank_chg": 14, "stock_cnt": 5755, "price": "18.32", "change": "6.88", "market_id": "17", "circulate_market_value": "38317053000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 18, "hot_rank_chg": 16, "stock_cnt": 5755, "price": "39.81", "change": "10.00", "market_id": "17", "circulate_market_value": "33701288000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "600396", "name": "华电辽能", "hot_rank": 19, "hot_rank_chg": -4, "stock_cnt": 5755, "price": "17.27", "change": "5.50", "market_id": "17", "circulate_market_value": "25433647000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 20, "hot_rank_chg": -8, "stock_cnt": 5755, "price": "384.59", "change": "5.60", "market_id": "33", "circulate_market_value": "63462192000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 21, "hot_rank_chg": -14, "stock_cnt": 5755, "price": "6.64", "change": "2.95", "market_id": "17", "circulate_market_value": "16722906000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.63}, {"name": "工业大麻", "change_pct": 0.03}, {"name": "中药", "change_pct": -1.05}, {"name": "强势人气股", "change_pct": 2.7}, {"name": "保健品", "change_pct": -1.23}, {"name": "民营医院", "change_pct": -0.7}, {"name": "医药", "change_pct": -0.28}, {"name": "化学原料药", "change_pct": -0.28}, {"name": "流感", "change_pct": -0.16}, {"name": "振兴东北", "change_pct": -0.46}, {"name": "食品", "change_pct": -0.51}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 22, "hot_rank_chg": -1, "stock_cnt": 5755, "price": "36.24", "change": "5.69", "market_id": "17", "circulate_market_value": "52982692000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 23, "hot_rank_chg": -1, "stock_cnt": 5755, "price": "54.32", "change": "8.00", "market_id": "17", "circulate_market_value": "133282065000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 24, "hot_rank_chg": 6, "stock_cnt": 5755, "price": "68.64", "change": "4.94", "market_id": "17", "circulate_market_value": "122825416000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 25, "hot_rank_chg": -16, "stock_cnt": 5755, "price": "15.68", "change": "-0.26", "market_id": "33", "circulate_market_value": "54464388000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 26, "hot_rank_chg": 55, "stock_cnt": 5755, "price": "12.98", "change": "10.00", "market_id": "33", "circulate_market_value": "7572686400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.35}, {"name": "折叠屏", "change_pct": 4.21}, {"name": "手机产业链", "change_pct": 3.45}, {"name": "电子烟", "change_pct": 2.02}, {"name": "半导体", "change_pct": 5.17}, {"name": "5G", "change_pct": 2.56}, {"name": "强势人气股", "change_pct": 2.7}, {"name": "VR&AR", "change_pct": 2.87}, {"name": "光通信", "change_pct": 3.04}, {"name": "OLED", "change_pct": 3.72}, {"name": "PCB板", "change_pct": 4.84}, {"name": "智能音箱", "change_pct": 2.3}, {"name": "WiFi", "change_pct": 3.78}, {"name": "小米概念股", "change_pct": 3.11}, {"name": "6G", "change_pct": 2.65}, {"name": "MiniLED", "change_pct": 3.29}, {"name": "AI PC", "change_pct": 3.51}, {"name": "华为产业链", "change_pct": 1.97}, {"name": "光电共封装CPO", "change_pct": 3.1}, {"name": "毫米波雷达", "change_pct": 2.97}, {"name": "交换机", "change_pct": 3.63}, {"name": "人形机器人", "change_pct": 2.08}, {"name": "AI手机", "change_pct": 3.9}, {"name": "AI医疗", "change_pct": 0.26}]}, {"code": "002185", "name": "华天科技", "hot_rank": 27, "hot_rank_chg": 11, "stock_cnt": 5755, "price": "16.43", "change": "5.79", "market_id": "33", "circulate_market_value": "54591168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 28, "hot_rank_chg": -1, "stock_cnt": 5755, "price": "5.89", "change": "4.62", "market_id": "33", "circulate_market_value": "208312420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 4.21}, {"name": "手机产业链", "change_pct": 3.45}, {"name": "超高清视频", "change_pct": 1.53}, {"name": "苹果产业链", "change_pct": 3.59}, {"name": "电竞", "change_pct": -0.13}, {"name": "半导体", "change_pct": 5.17}, {"name": "人工智能", "change_pct": 1.38}, {"name": "互联网医疗", "change_pct": -0.32}, {"name": "VR&AR", "change_pct": 2.87}, {"name": "OLED", "change_pct": 3.72}, {"name": "京津冀", "change_pct": 0.32}, {"name": "物联网", "change_pct": 1.46}, {"name": "指纹识别", "change_pct": 3.46}, {"name": "汽车零部件", "change_pct": 1.14}, {"name": "白马股", "change_pct": 0.35}, {"name": "智能制造", "change_pct": 1.83}, {"name": "小米概念股", "change_pct": 3.11}, {"name": "国产芯片", "change_pct": 3.68}, {"name": "液晶面板/LCD", "change_pct": 3.94}, {"name": "全息概念", "change_pct": 2.15}, {"name": "理想汽车概念股", "change_pct": 1.8}, {"name": "MicroLED", "change_pct": 3.65}, {"name": "钙钛矿电池", "change_pct": 1.53}, {"name": "智能手表", "change_pct": 3.47}, {"name": "MiniLED", "change_pct": 3.29}, {"name": "传感器", "change_pct": 2.4}, {"name": "大硅片", "change_pct": 7.51}, {"name": "AI PC", "change_pct": 3.51}, {"name": "华为产业链", "change_pct": 1.97}, {"name": "回购", "change_pct": 0.91}, {"name": "智能眼镜/MR头显", "change_pct": 3.31}, {"name": "玻璃基板封装", "change_pct": 4.57}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 29, "hot_rank_chg": -9, "stock_cnt": 5755, "price": "23.21", "change": "7.01", "market_id": "17", "circulate_market_value": "9307210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 30, "hot_rank_chg": -13, "stock_cnt": 5755, "price": "12.62", "change": "0.16", "market_id": "33", "circulate_market_value": "8643468300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 0.73}, {"name": "核电", "change_pct": 1.24}, {"name": "强势人气股", "change_pct": 2.7}, {"name": "充电桩", "change_pct": 1.34}, {"name": "云计算数据中心", "change_pct": 1.56}, {"name": "新能源汽车", "change_pct": 1.3}, {"name": "储能", "change_pct": 0.94}, {"name": "阿里巴巴概念股", "change_pct": 1.07}, {"name": "智能电网", "change_pct": 1.06}, {"name": "核聚变", "change_pct": 1.96}]}, {"code": "601138", "name": "工业富联", "hot_rank": 31, "hot_rank_chg": 5, "stock_cnt": 5755, "price": "65.70", "change": "9.63", "market_id": "17", "circulate_market_value": "1303756860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 32, "hot_rank_chg": -3, "stock_cnt": 5755, "price": "3.48", "change": "0.29", "market_id": "33", "circulate_market_value": "6971752600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": 1.87}, {"name": "数字孪生", "change_pct": 1.0}, {"name": "深圳本地股", "change_pct": 0.85}, {"name": "强势人气股", "change_pct": 2.7}, {"name": "人工智能", "change_pct": 1.38}, {"name": "互联网医疗", "change_pct": -0.32}, {"name": "云计算数据中心", "change_pct": 1.56}, {"name": "高铁轨交", "change_pct": 0.67}, {"name": "人脸识别", "change_pct": 1.28}, {"name": "智慧停车", "change_pct": 1.17}, {"name": "物联网", "change_pct": 1.46}, {"name": "大数据", "change_pct": 1.27}, {"name": "智慧城市", "change_pct": 1.08}, {"name": "雄安新区", "change_pct": 0.02}, {"name": "机器人", "change_pct": 1.69}, {"name": "数字经济", "change_pct": 1.01}, {"name": "阿里巴巴概念股", "change_pct": 1.07}, {"name": "腾讯概念股", "change_pct": 0.89}, {"name": "建筑节能", "change_pct": 0.07}, {"name": "旧改", "change_pct": -0.04}, {"name": "医疗信息化", "change_pct": 0.77}, {"name": "新冠病毒防治", "change_pct": 0.18}, {"name": "华为产业链", "change_pct": 1.97}, {"name": "医疗耗材供应链SPD", "change_pct": -1.04}, {"name": "区块链", "change_pct": 0.69}]}, {"code": "000595", "name": "新能股份", "hot_rank": 33, "hot_rank_chg": 11, "stock_cnt": 5755, "price": "6.73", "change": "2.59", "market_id": "33", "circulate_market_value": "7663157300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 1.38}, {"name": "强势人气股", "change_pct": 2.7}, {"name": "高铁轨交", "change_pct": 0.67}, {"name": "航母", "change_pct": 0.99}, {"name": "光伏", "change_pct": 1.28}, {"name": "风电", "change_pct": 0.51}, {"name": "军工", "change_pct": 1.17}, {"name": "机器人", "change_pct": 1.69}, {"name": "储能", "change_pct": 0.94}, {"name": "国企改革", "change_pct": 0.15}, {"name": "宁夏概念", "change_pct": 1.06}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 34, "hot_rank_chg": 7, "stock_cnt": 5755, "price": "169.84", "change": "-1.44", "market_id": "33", "circulate_market_value": "133542501000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 35, "hot_rank_chg": 2, "stock_cnt": 5755, "price": "57.65", "change": "3.69", "market_id": "33", "circulate_market_value": "87556993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 36, "hot_rank_chg": -3, "stock_cnt": 5755, "price": "15.87", "change": "1.60", "market_id": "17", "circulate_market_value": "17401371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002792", "name": "通宇通讯", "hot_rank": 37, "hot_rank_chg": 23, "stock_cnt": 5755, "price": "30.38", "change": "5.70", "market_id": "33", "circulate_market_value": "10263107800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001232", "name": "嘉立创", "hot_rank": 38, "hot_rank_chg": -24, "stock_cnt": 5755, "price": "200.24", "change": "-3.73", "market_id": "33", "circulate_market_value": "8850151100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 39, "hot_rank_chg": -14, "stock_cnt": 5755, "price": "13.69", "change": "2.16", "market_id": "33", "circulate_market_value": "12777199900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000981", "name": "山子高科", "hot_rank": 40, "hot_rank_chg": 19, "stock_cnt": 5755, "price": "3.17", "change": "10.07", "market_id": "33", "circulate_market_value": "30157339000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 2.01}, {"name": "汽车零部件", "change_pct": 1.14}, {"name": "新能源汽车", "change_pct": 1.3}, {"name": "新能源车零部件", "change_pct": 0.95}, {"name": "低价股", "change_pct": -0.51}, {"name": "减速器", "change_pct": 1.29}, {"name": "华为汽车", "change_pct": 1.09}]}, {"code": "600522", "name": "中天科技", "hot_rank": 41, "hot_rank_chg": 6, "stock_cnt": 5755, "price": "31.82", "change": "6.28", "market_id": "17", "circulate_market_value": "108600058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 42, "hot_rank_chg": 30, "stock_cnt": 5755, "price": "99.63", "change": "-1.01", "market_id": "33", "circulate_market_value": "100126721000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 44, "hot_rank_chg": -5, "stock_cnt": 5755, "price": "32.55", "change": "3.79", "market_id": "33", "circulate_market_value": "35113877000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 45, "hot_rank_chg": 13, "stock_cnt": 5755, "price": "60.73", "change": "10.00", "market_id": "17", "circulate_market_value": "25286011000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "光刻胶"}, {"code": "301171", "name": "易点天下", "hot_rank": 46, "hot_rank_chg": -27, "stock_cnt": 5755, "price": "38.64", "change": "2.77", "market_id": "33", "circulate_market_value": "19392823000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 47, "hot_rank_chg": 10, "stock_cnt": 5755, "price": "76.85", "change": "3.65", "market_id": "33", "circulate_market_value": "112726024000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 48, "hot_rank_chg": -8, "stock_cnt": 5755, "price": "9.48", "change": "3.04", "market_id": "17", "circulate_market_value": "16961031000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.25}, {"name": "纯碱", "change_pct": -0.34}, {"name": "食品", "change_pct": -0.51}, {"name": "土壤修复", "change_pct": 0.91}, {"name": "东数西算/算力", "change_pct": 1.51}, {"name": "OpenClaw概念", "change_pct": 1.7}, {"name": "DeepSeek概念股", "change_pct": 1.51}]}, {"code": "000593", "name": "德龙汇能", "hot_rank": 49, "hot_rank_chg": 31, "stock_cnt": 5755, "price": "22.52", "change": "10.02", "market_id": "33", "circulate_market_value": "8073041000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "举牌"}, {"code": "600176", "name": "中国巨石", "hot_rank": 50, "hot_rank_chg": -8, "stock_cnt": 5755, "price": "39.17", "change": "8.21", "market_id": "17", "circulate_market_value": "155527350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 51, "hot_rank_chg": -23, "stock_cnt": 5755, "price": "11.32", "change": "1.98", "market_id": "33", "circulate_market_value": "9150004800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.03}, {"name": "大飞机", "change_pct": 1.19}, {"name": "北斗导航", "change_pct": 1.14}, {"name": "高铁轨交", "change_pct": 0.67}, {"name": "军民融合", "change_pct": 1.39}, {"name": "磁悬浮", "change_pct": 0.73}, {"name": "军工", "change_pct": 1.17}, {"name": "碳纤维", "change_pct": 1.81}, {"name": "无人机", "change_pct": 1.51}, {"name": "航天", "change_pct": 2.03}, {"name": "卫星互联网", "change_pct": 1.79}, {"name": "低空经济", "change_pct": 1.31}, {"name": "海洋经济", "change_pct": 0.53}]}, {"code": "601700", "name": "风范股份", "hot_rank": 52, "hot_rank_chg": 4, "stock_cnt": 5755, "price": "6.51", "change": "9.97", "market_id": "17", "circulate_market_value": "7413310000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "特高压", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.44}, {"name": "光伏", "change_pct": 1.28}, {"name": "特高压", "change_pct": 1.28}, {"name": "智能电网", "change_pct": 1.06}]}, {"code": "603118", "name": "共进股份", "hot_rank": 53, "hot_rank_chg": 94, "stock_cnt": 5755, "price": "14.26", "change": "4.62", "market_id": "17", "circulate_market_value": "11226561500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 54, "hot_rank_chg": 532, "stock_cnt": 5755, "price": "4.69", "change": "10.09", "market_id": "17", "circulate_market_value": "7331953700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "无人驾驶", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 2.01}, {"name": "共享经济", "change_pct": 0.29}, {"name": "云计算数据中心", "change_pct": 1.56}, {"name": "旅游", "change_pct": -0.14}, {"name": "物业管理", "change_pct": 0.3}]}, {"code": "000021", "name": "深科技", "hot_rank": 55, "hot_rank_chg": -1, "stock_cnt": 5755, "price": "38.30", "change": "4.82", "market_id": "33", "circulate_market_value": "60290159000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 56, "hot_rank_chg": 56, "stock_cnt": 5755, "price": "148.67", "change": "-0.01", "market_id": "17", "circulate_market_value": "40971723000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 57, "hot_rank_chg": 51, "stock_cnt": 5755, "price": "8.71", "change": "9.97", "market_id": "17", "circulate_market_value": "3349409900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "CRO", "xgb_concepts": [{"name": "创新药", "change_pct": 0.18}, {"name": "股权转让", "change_pct": 1.56}, {"name": "新疆概念", "change_pct": 0.04}, {"name": "医药", "change_pct": -0.28}, {"name": "流感", "change_pct": -0.16}, {"name": "国资入股", "change_pct": 0.74}, {"name": "减肥药", "change_pct": 0.11}]}, {"code": "603106", "name": "恒银科技", "hot_rank": 58, "hot_rank_chg": -5, "stock_cnt": 5755, "price": "9.16", "change": "1.33", "market_id": "17", "circulate_market_value": "4767963200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "金融科技", "change_pct": 1.29}, {"name": "人工智能", "change_pct": 1.38}, {"name": "人脸识别", "change_pct": 1.28}, {"name": "智慧停车", "change_pct": 1.17}, {"name": "雄安新区", "change_pct": 0.02}, {"name": "信创", "change_pct": 1.68}, {"name": "虚拟数字人", "change_pct": 0.82}, {"name": "AIGC概念", "change_pct": 0.84}, {"name": "智慧政务", "change_pct": 1.23}, {"name": "医疗信息化", "change_pct": 0.77}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 59, "hot_rank_chg": 57, "stock_cnt": 5755, "price": "55.59", "change": "0.20", "market_id": "33", "circulate_market_value": "407200930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 60, "hot_rank_chg": 34, "stock_cnt": 5755, "price": "13.21", "change": "4.02", "market_id": "17", "circulate_market_value": "65904937000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 61, "hot_rank_chg": -12, "stock_cnt": 5755, "price": "6.37", "change": "0.63", "market_id": "17", "circulate_market_value": "78963088000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.23}, {"name": "核电", "change_pct": 1.24}, {"name": "强势人气股", "change_pct": 2.7}, {"name": "电力体制改革", "change_pct": -0.59}, {"name": "水电", "change_pct": -0.96}, {"name": "火电", "change_pct": -0.31}, {"name": "光伏", "change_pct": 1.28}, {"name": "风电", "change_pct": 0.51}, {"name": "国企改革", "change_pct": 0.15}, {"name": "算电协同", "change_pct": 0.69}]}, {"code": "600111", "name": "北方稀土", "hot_rank": 62, "hot_rank_chg": 134, "stock_cnt": 5755, "price": "41.51", "change": "2.57", "market_id": "17", "circulate_market_value": "150061380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 63, "hot_rank_chg": 41, "stock_cnt": 5755, "price": "78.57", "change": "10.00", "market_id": "17", "circulate_market_value": "17653000000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "TGV玻璃基板"}, {"code": "002141", "name": "贤丰控股", "hot_rank": 64, "hot_rank_chg": -14, "stock_cnt": 5755, "price": "5.54", "change": "1.09", "market_id": "33", "circulate_market_value": "5722464300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.0}, {"name": "锂电池", "change_pct": 2.07}, {"name": "强势人气股", "change_pct": 2.7}, {"name": "铜箔/覆铜板", "change_pct": 5.42}, {"name": "粤港澳大湾区", "change_pct": 0.19}, {"name": "新能源汽车", "change_pct": 1.3}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.13}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 65, "hot_rank_chg": -20, "stock_cnt": 5755, "price": "34.00", "change": "5.29", "market_id": "33", "circulate_market_value": "26601757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600666", "name": "奥瑞德", "hot_rank": 66, "hot_rank_chg": 5, "stock_cnt": 5755, "price": "3.86", "change": "2.12", "market_id": "17", "circulate_market_value": "9658196600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 1.56}, {"name": "3D玻璃", "change_pct": 3.62}, {"name": "东数西算/算力", "change_pct": 1.51}, {"name": "词元概念/Token", "change_pct": 0.97}, {"name": "DeepSeek概念股", "change_pct": 1.51}, {"name": "RWA", "change_pct": 0.49}]}, {"code": "002348", "name": "高乐股份", "hot_rank": 67, "hot_rank_chg": 43, "stock_cnt": 5755, "price": "12.12", "change": "9.98", "market_id": "33", "circulate_market_value": "10950819900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "签署算力大单", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.97}, {"name": "优化生育（三孩）", "change_pct": -0.24}, {"name": "人工智能", "change_pct": 1.38}, {"name": "教育", "change_pct": 1.53}, {"name": "外贸受益概念", "change_pct": 0.93}, {"name": "RCEP概念", "change_pct": 1.23}, {"name": "固态电池", "change_pct": 2.1}, {"name": "东数西算/算力", "change_pct": 1.51}, {"name": "教育信息化", "change_pct": 1.77}, {"name": "在线教育", "change_pct": 2.33}, {"name": "玩具", "change_pct": 1.97}, {"name": "盲盒", "change_pct": 0.04}, {"name": "IP经济/谷子经济", "change_pct": 0.19}]}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 68, "hot_rank_chg": -20, "stock_cnt": 5755, "price": "34.89", "change": "-2.16", "market_id": "17", "circulate_market_value": "54345798000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 69, "hot_rank_chg": 14, "stock_cnt": 5755, "price": "33.72", "change": "12.47", "market_id": "33", "circulate_market_value": "47356129000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 70, "hot_rank_chg": 51, "stock_cnt": 5755, "price": "26.93", "change": "10.01", "market_id": "33", "circulate_market_value": "7878739100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "磷化铟收购"}, {"code": "002463", "name": "沪电股份", "hot_rank": 71, "hot_rank_chg": -16, "stock_cnt": 5755, "price": "115.14", "change": "3.02", "market_id": "33", "circulate_market_value": "221238570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 72, "hot_rank_chg": 185, "stock_cnt": 5755, "price": "114.88", "change": "6.78", "market_id": "33", "circulate_market_value": "127934545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 73, "hot_rank_chg": -3, "stock_cnt": 5755, "price": "312.40", "change": "10.00", "market_id": "17", "circulate_market_value": "126940089000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力数据中心"}, {"code": "002036", "name": "联创电子", "hot_rank": 74, "hot_rank_chg": 318, "stock_cnt": 5755, "price": "7.80", "change": "10.01", "market_id": "33", "circulate_market_value": "8232648600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国资入主", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": 0.69}, {"name": "折叠屏", "change_pct": 4.21}, {"name": "手机产业链", "change_pct": 3.45}, {"name": "超高清视频", "change_pct": 1.53}, {"name": "无线充电", "change_pct": 2.88}, {"name": "特斯拉", "change_pct": 1.59}, {"name": "股权转让", "change_pct": 1.56}, {"name": "无人驾驶", "change_pct": 2.01}, {"name": "VR&AR", "change_pct": 2.87}, {"name": "OLED", "change_pct": 3.72}, {"name": "3D感应", "change_pct": 2.81}, {"name": "人脸识别", "change_pct": 1.28}, {"name": "3D玻璃", "change_pct": 3.62}, {"name": "指纹识别", "change_pct": 3.46}, {"name": "手势识别", "change_pct": 2.19}, {"name": "虹膜识别", "change_pct": 1.05}, {"name": "复牌股", "change_pct": 3.23}, {"name": "机器视觉", "change_pct": 2.77}, {"name": "无人机", "change_pct": 1.51}, {"name": "智能制造", "change_pct": 1.83}, {"name": "国产芯片", "change_pct": 3.68}, {"name": "液晶面板/LCD", "change_pct": 3.94}, {"name": "激光雷达", "change_pct": 3.35}, {"name": "元宇宙", "change_pct": 1.17}, {"name": "电子后视镜", "change_pct": 1.74}, {"name": "无线耳机", "change_pct": 2.8}, {"name": "云游戏", "change_pct": 1.14}, {"name": "AI PC", "change_pct": 3.51}, {"name": "国资入股", "change_pct": 0.74}, {"name": "华为产业链", "change_pct": 1.97}, {"name": "毫米波雷达", "change_pct": 2.97}, {"name": "智能眼镜/MR头显", "change_pct": 3.31}, {"name": "英伟达概念", "change_pct": 3.2}, {"name": "人形机器人", "change_pct": 2.08}, {"name": "智能座舱", "change_pct": 2.55}, {"name": "AI手机", "change_pct": 3.9}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 75, "hot_rank_chg": -24, "stock_cnt": 5755, "price": "21.08", "change": "0.77", "market_id": "33", "circulate_market_value": "8871834900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601179", "name": "中国西电", "hot_rank": 76, "hot_rank_chg": -30, "stock_cnt": 5755, "price": "14.17", "change": "-1.39", "market_id": "17", "circulate_market_value": "72633753000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 77, "hot_rank_chg": -14, "stock_cnt": 5755, "price": "33.86", "change": "5.42", "market_id": "17", "circulate_market_value": "697576720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301396", "name": "宏景科技", "hot_rank": 78, "hot_rank_chg": -13, "stock_cnt": 5755, "price": "198.55", "change": "12.40", "market_id": "33", "circulate_market_value": "28096174000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 79, "hot_rank_chg": -17, "stock_cnt": 5755, "price": "122.02", "change": "8.71", "market_id": "17", "circulate_market_value": "294281600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 80, "hot_rank_chg": 12, "stock_cnt": 5755, "price": "66.10", "change": "9.95", "market_id": "33", "circulate_market_value": "56427496000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 81, "hot_rank_chg": 128, "stock_cnt": 5755, "price": "28.39", "change": "8.82", "market_id": "33", "circulate_market_value": "21503015000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 82, "hot_rank_chg": 9, "stock_cnt": 5755, "price": "140.70", "change": "8.66", "market_id": "33", "circulate_market_value": "44816151000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002498", "name": "汉缆股份", "hot_rank": 83, "hot_rank_chg": -6, "stock_cnt": 5755, "price": "7.17", "change": "-2.71", "market_id": "33", "circulate_market_value": "23853127000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 0.73}, {"name": "核电", "change_pct": 1.24}, {"name": "5G", "change_pct": 2.56}, {"name": "一带一路", "change_pct": 0.44}, {"name": "充电桩", "change_pct": 1.34}, {"name": "氢能源/燃料电池", "change_pct": 0.86}, {"name": "风电", "change_pct": 0.51}, {"name": "新能源汽车", "change_pct": 1.3}, {"name": "储能", "change_pct": 0.94}, {"name": "特高压", "change_pct": 1.28}, {"name": "智能电网", "change_pct": 1.06}, {"name": "海洋经济", "change_pct": 0.53}]}, {"code": "002929", "name": "润建股份", "hot_rank": 84, "hot_rank_chg": 27, "stock_cnt": 5755, "price": "57.15", "change": "5.81", "market_id": "33", "circulate_market_value": "12376961700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002425", "name": "凯撒文化", "hot_rank": 85, "hot_rank_chg": 99, "stock_cnt": 5755, "price": "3.47", "change": "10.16", "market_id": "33", "circulate_market_value": "3193045200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "游戏IP", "xgb_concepts": [{"name": "手游", "change_pct": 0.18}, {"name": "ST摘帽", "change_pct": 1.38}, {"name": "人工智能", "change_pct": 1.38}, {"name": "VR&AR", "change_pct": 2.87}, {"name": "游戏", "change_pct": 0.34}, {"name": "动漫", "change_pct": 0.71}, {"name": "腾讯概念股", "change_pct": 0.89}, {"name": "快手概念股", "change_pct": 0.98}, {"name": "NFT", "change_pct": -0.21}, {"name": "元宇宙", "change_pct": 1.17}, {"name": "虚拟数字人", "change_pct": 0.82}, {"name": "字节跳动概念股", "change_pct": 1.15}, {"name": "云游戏", "change_pct": 1.14}, {"name": "IP经济/谷子经济", "change_pct": 0.19}]}, {"code": "301308", "name": "江波龙", "hot_rank": 86, "hot_rank_chg": 19, "stock_cnt": 5755, "price": "360.17", "change": "7.18", "market_id": "33", "circulate_market_value": "101514596000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 87, "hot_rank_chg": 74, "stock_cnt": 5755, "price": "11.22", "change": "10.00", "market_id": "17", "circulate_market_value": "14397488000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "金刚石散热", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.35}, {"name": "强势人气股", "change_pct": 2.7}, {"name": "智能制造", "change_pct": 1.83}, {"name": "工业互联网", "change_pct": 1.08}, {"name": "培育钻石", "change_pct": 4.57}, {"name": "金刚线", "change_pct": 3.49}, {"name": "国资入股", "change_pct": 0.74}, {"name": "深地经济", "change_pct": 0.27}]}, {"code": "603019", "name": "中科曙光", "hot_rank": 88, "hot_rank_chg": 26, "stock_cnt": 5755, "price": "88.01", "change": "2.88", "market_id": "17", "circulate_market_value": "128763413000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300620", "name": "光库科技", "hot_rank": 89, "hot_rank_chg": -10, "stock_cnt": 5755, "price": "256.66", "change": "0.91", "market_id": "33", "circulate_market_value": "63423975000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 90, "hot_rank_chg": 89, "stock_cnt": 5755, "price": "15.31", "change": "5.30", "market_id": "17", "circulate_market_value": "6414393500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 91, "hot_rank_chg": 139, "stock_cnt": 5755, "price": "275.75", "change": "8.95", "market_id": "17", "circulate_market_value": "39975710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600392", "name": "盛和资源", "hot_rank": 92, "hot_rank_chg": 275, "stock_cnt": 5755, "price": "22.40", "change": "4.48", "market_id": "17", "circulate_market_value": "39263315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000967", "name": "盈峰环境", "hot_rank": 93, "hot_rank_chg": -26, "stock_cnt": 5755, "price": "9.41", "change": "3.52", "market_id": "33", "circulate_market_value": "31595661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 2.01}, {"name": "核电", "change_pct": 1.24}, {"name": "充电桩", "change_pct": 1.34}, {"name": "固废处理", "change_pct": 0.37}, {"name": "大气治理", "change_pct": 1.2}, {"name": "智慧城市", "change_pct": 1.08}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 1.3}, {"name": "环保", "change_pct": 0.6}, {"name": "机器人", "change_pct": 1.69}, {"name": "土壤修复", "change_pct": 0.91}, {"name": "东数西算/算力", "change_pct": 1.51}, {"name": "垃圾分类", "change_pct": 0.11}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 94, "hot_rank_chg": -42, "stock_cnt": 5755, "price": "55.13", "change": "2.47", "market_id": "17", "circulate_market_value": "7204013500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 95, "hot_rank_chg": -34, "stock_cnt": 5755, "price": "44.50", "change": "6.21", "market_id": "33", "circulate_market_value": "12276423300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 96, "hot_rank_chg": 22, "stock_cnt": 5755, "price": "57.43", "change": "10.00", "market_id": "33", "circulate_market_value": "83471749000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI PCB微钻扩产"}, {"code": "000566", "name": "海南海药", "hot_rank": 97, "hot_rank_chg": -22, "stock_cnt": 5755, "price": "6.00", "change": "2.39", "market_id": "33", "circulate_market_value": "7780413800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.05}, {"name": "创新药", "change_pct": 0.18}, {"name": "央企改革", "change_pct": 0.23}, {"name": "医疗器械", "change_pct": 0.22}, {"name": "强势人气股", "change_pct": 2.7}, {"name": "互联网医疗", "change_pct": -0.32}, {"name": "保健品", "change_pct": -1.23}, {"name": "民营医院", "change_pct": -0.7}, {"name": "CAR-T疗法", "change_pct": -0.13}, {"name": "医药", "change_pct": -0.28}, {"name": "化学原料药", "change_pct": -0.28}, {"name": "海南概念", "change_pct": 0.16}, {"name": "脑科学/脑机接口", "change_pct": 0.69}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.02}, {"name": "海南自由贸易港", "change_pct": -0.56}, {"name": "食品", "change_pct": -0.51}, {"name": "国企改革", "change_pct": 0.15}, {"name": "医疗信息化", "change_pct": 0.77}, {"name": "新冠病毒防治", "change_pct": 0.18}, {"name": "自贸区", "change_pct": -0.11}, {"name": "合成生物", "change_pct": 0.06}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 98, "hot_rank_chg": 51, "stock_cnt": 5755, "price": "1145.66", "change": "6.23", "market_id": "17", "circulate_market_value": "719810120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 99, "hot_rank_chg": -56, "stock_cnt": 5755, "price": "20.63", "change": "6.48", "market_id": "33", "circulate_market_value": "9331749400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300615", "name": "欣天科技", "hot_rank": 100, "hot_rank_chg": 65, "stock_cnt": 5755, "price": "15.02", "change": "19.97", "market_id": "33", "circulate_market_value": "2299370700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "控制权变更"}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第四次风险提示性公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告"};