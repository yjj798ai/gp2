const UPDATE_TIME = "2026-07-15 01:57";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": -1.79,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续201天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "创新药",
    "rise": 3.71,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续78天上榜",
    "rankChg": 0,
    "etfName": "药ETF",
    "code": "886015"
  },
  {
    "name": "培育钻石",
    "rise": 0.18,
    "rate": 0,
    "tag": "",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "PCB概念",
    "rise": -0.76,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.9,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续248天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": 0.77,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续177天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "光纤概念",
    "rise": 0.38,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 1,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "2026中报预增",
    "rise": 1.0,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": -1,
    "etfName": "材料ETF",
    "code": "886110"
  },
  {
    "name": "先进封装",
    "rise": -1.75,
    "rate": 0,
    "tag": "",
    "hotTag": "连续41天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "人形机器人",
    "rise": 0.31,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续412天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "国家大基金持股",
    "rise": -2.68,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "算力租赁",
    "rise": 1.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续112天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "ST板块",
    "rise": 0.54,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续86天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "玻璃基板",
    "rise": -1.55,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "机床ETF",
    "code": "886111"
  },
  {
    "name": "CRO概念",
    "rise": 4.68,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 1,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "芯片概念",
    "rise": -0.42,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": -1,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "猪肉",
    "rise": 2.51,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "液冷服务器",
    "rise": -0.28,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "机器人概念",
    "rise": 0.73,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "AI应用",
    "rise": 1.96,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "游戏ETF",
    "code": "886108"
  }
];
const THS_EVENTS = [
  {
    "title": "“BD红利”进入兑现窗口 创新药企价值加速分化",
    "desc": "",
    "heat": 615798,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗"
    ],
    "stocks": [
      {
        "name": "博瑞医药",
        "code": "688166",
        "chg": 20.013546
      }
    ]
  },
  {
    "title": "全国用电负荷达15.51亿千瓦再创新高",
    "desc": "",
    "heat": 437650,
    "direction": "电力",
    "themes": [
      "电力",
      "绿色电力"
    ],
    "stocks": [
      {
        "name": "中赋科技",
        "code": "300692",
        "chg": 11.002445
      }
    ]
  },
  {
    "title": "曝DeepSeek拟今年启动IPO！再融资100亿",
    "desc": "",
    "heat": 215091,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "睿智医药",
        "code": "300149",
        "chg": 19.976905
      }
    ]
  },
  {
    "title": "以色列芯片厂商Tower Semiconductor将在日本投资30亿美元",
    "desc": "",
    "heat": 66159,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "华盛昌",
        "code": "002980",
        "chg": 10.005385
      }
    ]
  },
  {
    "title": "SK 海力士美股 ADR 单日暴涨 27.29% 创新高，较韩股溢价超 50%",
    "desc": "",
    "heat": 52096,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "*ST康佳A",
        "code": "000016",
        "chg": 10.169492
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "减肥药",
    "change": "+5.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+4.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化学原料药",
    "change": "+3.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+3.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+3.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+3.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+3.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+3.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+3.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI医疗",
    "change": "+3.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "猴痘概念",
    "change": "+3.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+3.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+3.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血氧仪",
    "change": "+3.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "体外诊断",
    "change": "+3.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+3.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+3.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+3.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+3.03%",
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
    "hot_rank": 6,
    "hot_rank_chg": 3,
    "stock_cnt": 5849,
    "price": "6.70",
    "change": "-4.56",
    "market_id": "33",
    "circulate_market_value": "236959800000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.95
      },
      {
        "name": "手机产业链",
        "change_pct": -0.47
      },
      {
        "name": "超高清视频",
        "change_pct": 0.51
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.46
      },
      {
        "name": "电竞",
        "change_pct": 2.55
      },
      {
        "name": "半导体",
        "change_pct": -1.77
      },
      {
        "name": "人工智能",
        "change_pct": 1.42
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.76
      },
      {
        "name": "VR&AR",
        "change_pct": 0.52
      },
      {
        "name": "OLED",
        "change_pct": -0.56
      },
      {
        "name": "京津冀",
        "change_pct": 1.69
      },
      {
        "name": "物联网",
        "change_pct": 0.89
      },
      {
        "name": "指纹识别",
        "change_pct": -0.56
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.76
      },
      {
        "name": "白马股",
        "change_pct": 1.05
      },
      {
        "name": "智能制造",
        "change_pct": 0.79
      },
      {
        "name": "小米概念股",
        "change_pct": -0.23
      },
      {
        "name": "国产芯片",
        "change_pct": -1.22
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.87
      },
      {
        "name": "全息概念",
        "change_pct": 1.35
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.18
      },
      {
        "name": "MicroLED",
        "change_pct": -0.56
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.85
      },
      {
        "name": "智能手表",
        "change_pct": -0.4
      },
      {
        "name": "MiniLED",
        "change_pct": -0.67
      },
      {
        "name": "传感器",
        "change_pct": -0.15
      },
      {
        "name": "大硅片",
        "change_pct": -3.03
      },
      {
        "name": "AI PC",
        "change_pct": -0.45
      },
      {
        "name": "华为产业链",
        "change_pct": 0.7
      },
      {
        "name": "回购",
        "change_pct": 1.43
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.27
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.98
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": 4,
    "stock_cnt": 5849,
    "price": "4.49",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "11308109300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.99
      },
      {
        "name": "工业大麻",
        "change_pct": 2.64
      },
      {
        "name": "中药",
        "change_pct": 2.69
      },
      {
        "name": "保健品",
        "change_pct": 2.46
      },
      {
        "name": "医药",
        "change_pct": 3.46
      },
      {
        "name": "化学原料药",
        "change_pct": 3.7
      },
      {
        "name": "流感",
        "change_pct": 2.72
      },
      {
        "name": "振兴东北",
        "change_pct": 2.1
      },
      {
        "name": "食品",
        "change_pct": 1.81
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 21,
    "hot_rank_chg": 32,
    "stock_cnt": 5849,
    "price": "10.40",
    "change": "4.52",
    "market_id": "17",
    "circulate_market_value": "18607038000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.43
      },
      {
        "name": "纯碱",
        "change_pct": 1.17
      },
      {
        "name": "食品",
        "change_pct": 1.81
      },
      {
        "name": "土壤修复",
        "change_pct": 1.92
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.76
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.95
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.43
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 29,
    "hot_rank_chg": 39,
    "stock_cnt": 5849,
    "price": "5.61",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "5794769800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.3
      },
      {
        "name": "锂电池",
        "change_pct": 0.78
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.24
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.75
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.68
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 2.28
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 40,
    "hot_rank_chg": -39,
    "stock_cnt": 5849,
    "price": "7.76",
    "change": "0.39",
    "market_id": "33",
    "circulate_market_value": "12615383700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.99
      },
      {
        "name": "电竞",
        "change_pct": 2.55
      },
      {
        "name": "手游",
        "change_pct": 2.19
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "人工智能",
        "change_pct": 1.42
      },
      {
        "name": "游戏",
        "change_pct": 2.72
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.71
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.57
      },
      {
        "name": "快手概念股",
        "change_pct": 2.56
      },
      {
        "name": "元宇宙",
        "change_pct": 1.57
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.09
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.76
      },
      {
        "name": "web3.0",
        "change_pct": 1.77
      },
      {
        "name": "AIGC概念",
        "change_pct": 2.04
      },
      {
        "name": "数据要素",
        "change_pct": 2.04
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.37
      },
      {
        "name": "AI营销",
        "change_pct": 2.51
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.89
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.27
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.9
      },
      {
        "name": "人形机器人",
        "change_pct": 0.02
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.23
      },
      {
        "name": "多模态",
        "change_pct": 1.96
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 2.25
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.32
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.62
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 42,
    "hot_rank_chg": 23,
    "stock_cnt": 5849,
    "price": "8.40",
    "change": "-7.18",
    "market_id": "33",
    "circulate_market_value": "4550464800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -0.29
      },
      {
        "name": "油气管网",
        "change_pct": 0.4
      },
      {
        "name": "海工装备",
        "change_pct": 0.68
      },
      {
        "name": "举牌",
        "change_pct": 1.61
      },
      {
        "name": "天然气",
        "change_pct": 0.48
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.97
      },
      {
        "name": "风电",
        "change_pct": 0.86
      },
      {
        "name": "页岩气",
        "change_pct": -0.19
      },
      {
        "name": "国企改革",
        "change_pct": 1.39
      },
      {
        "name": "深地经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 47,
    "hot_rank_chg": 191,
    "stock_cnt": 5849,
    "price": "5.15",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "6678188500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.69
      },
      {
        "name": "创新药",
        "change_pct": 4.2
      },
      {
        "name": "央企改革",
        "change_pct": 1.22
      },
      {
        "name": "医疗器械",
        "change_pct": 2.58
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.76
      },
      {
        "name": "保健品",
        "change_pct": 2.46
      },
      {
        "name": "民营医院",
        "change_pct": 2.84
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 3.68
      },
      {
        "name": "医药",
        "change_pct": 3.46
      },
      {
        "name": "化学原料药",
        "change_pct": 3.7
      },
      {
        "name": "海南概念",
        "change_pct": 2.32
      },
      {
        "name": "脑科学",
        "change_pct": 2.14
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.84
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 2.42
      },
      {
        "name": "食品",
        "change_pct": 1.81
      },
      {
        "name": "国企改革",
        "change_pct": 1.39
      },
      {
        "name": "医疗信息化",
        "change_pct": 2.19
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.15
      },
      {
        "name": "自贸区",
        "change_pct": 1.69
      },
      {
        "name": "合成生物",
        "change_pct": 2.69
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 54,
    "hot_rank_chg": 20,
    "stock_cnt": 5849,
    "price": "5.95",
    "change": "1.19",
    "market_id": "17",
    "circulate_market_value": "73756730000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.22
      },
      {
        "name": "核电",
        "change_pct": 0.83
      },
      {
        "name": "强势人气股",
        "change_pct": 0.16
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.47
      },
      {
        "name": "水电",
        "change_pct": 2.01
      },
      {
        "name": "火电",
        "change_pct": 1.37
      },
      {
        "name": "光伏",
        "change_pct": 1.21
      },
      {
        "name": "风电",
        "change_pct": 0.86
      },
      {
        "name": "国企改革",
        "change_pct": 1.39
      },
      {
        "name": "算电协同",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "603313",
    "name": "梦百合",
    "hot_rank": 55,
    "hot_rank_chg": 4,
    "stock_cnt": 5849,
    "price": "7.99",
    "change": "-6.99",
    "market_id": "17",
    "circulate_market_value": "4558989200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.99
      },
      {
        "name": "家具家居",
        "change_pct": 1.44
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "C2M",
        "change_pct": 1.26
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 57,
    "hot_rank_chg": -13,
    "stock_cnt": 5849,
    "price": "11.24",
    "change": "-1.32",
    "market_id": "33",
    "circulate_market_value": "6549457000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -0.29
      },
      {
        "name": "一带一路",
        "change_pct": 1.28
      },
      {
        "name": "天然气",
        "change_pct": 0.48
      },
      {
        "name": "油气改革",
        "change_pct": 0.26
      },
      {
        "name": "页岩气",
        "change_pct": -0.19
      },
      {
        "name": "深地经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 58,
    "hot_rank_chg": 128,
    "stock_cnt": 5849,
    "price": "9.38",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "19529177000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "暑期档",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 3.61
      },
      {
        "name": "足球",
        "change_pct": 1.84
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.53
      },
      {
        "name": "拼多多概念股",
        "change_pct": 1.51
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.99
      },
      {
        "name": "大消费",
        "change_pct": 1.89
      },
      {
        "name": "盲盒",
        "change_pct": 2.49
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.23
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.32
      },
      {
        "name": "首发经济",
        "change_pct": 2.79
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.62
      },
      {
        "name": "服务消费",
        "change_pct": 2.57
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 61,
    "hot_rank_chg": -16,
    "stock_cnt": 5849,
    "price": "5.10",
    "change": "-0.58",
    "market_id": "33",
    "circulate_market_value": "102603465000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.95
      },
      {
        "name": "手机产业链",
        "change_pct": -0.47
      },
      {
        "name": "超高清视频",
        "change_pct": 0.51
      },
      {
        "name": "电竞",
        "change_pct": 2.55
      },
      {
        "name": "半导体",
        "change_pct": -1.77
      },
      {
        "name": "OLED",
        "change_pct": -0.56
      },
      {
        "name": "光伏",
        "change_pct": 1.21
      },
      {
        "name": "黑色家电",
        "change_pct": 1.76
      },
      {
        "name": "家电",
        "change_pct": 1.02
      },
      {
        "name": "智能制造",
        "change_pct": 0.79
      },
      {
        "name": "工业互联网",
        "change_pct": 1.02
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.23
      },
      {
        "name": "国产芯片",
        "change_pct": -1.22
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.57
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.87
      },
      {
        "name": "MicroLED",
        "change_pct": -0.56
      },
      {
        "name": "MiniLED",
        "change_pct": -0.67
      },
      {
        "name": "华为产业链",
        "change_pct": 0.7
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.98
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 62,
    "hot_rank_chg": 21,
    "stock_cnt": 5849,
    "price": "6.68",
    "change": "3.09",
    "market_id": "17",
    "circulate_market_value": "7293803000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 3.46
      },
      {
        "name": "化学原料药",
        "change_pct": 3.7
      },
      {
        "name": "数字经济",
        "change_pct": 1.71
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.83
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.15
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 77,
    "hot_rank_chg": 66,
    "stock_cnt": 5849,
    "price": "9.80",
    "change": "-2.78",
    "market_id": "33",
    "circulate_market_value": "39588666000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -1.77
      },
      {
        "name": "一带一路",
        "change_pct": 1.28
      },
      {
        "name": "京津冀",
        "change_pct": 1.69
      },
      {
        "name": "光伏",
        "change_pct": 1.21
      },
      {
        "name": "碳中和",
        "change_pct": 1.22
      },
      {
        "name": "国产芯片",
        "change_pct": -1.22
      },
      {
        "name": "IGBT",
        "change_pct": -1.9
      },
      {
        "name": "颗粒硅",
        "change_pct": 1.54
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.62
      },
      {
        "name": "大硅片",
        "change_pct": -3.03
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 81,
    "hot_rank_chg": 87,
    "stock_cnt": 5849,
    "price": "10.94",
    "change": "1.20",
    "market_id": "33",
    "circulate_market_value": "8850667700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.96
      },
      {
        "name": "大飞机",
        "change_pct": 1.17
      },
      {
        "name": "北斗导航",
        "change_pct": 0.84
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.35
      },
      {
        "name": "军民融合",
        "change_pct": 1.03
      },
      {
        "name": "磁悬浮",
        "change_pct": 1.15
      },
      {
        "name": "军工",
        "change_pct": 1.0
      },
      {
        "name": "碳纤维",
        "change_pct": 0.18
      },
      {
        "name": "无人机",
        "change_pct": 0.73
      },
      {
        "name": "航天",
        "change_pct": 0.79
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.87
      },
      {
        "name": "低空经济",
        "change_pct": 0.94
      },
      {
        "name": "海洋经济",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "002038",
    "name": "双鹭药业",
    "hot_rank": 92,
    "hot_rank_chg": 48,
    "stock_cnt": 5849,
    "price": "6.81",
    "change": "-3.40",
    "market_id": "33",
    "circulate_market_value": "5801516100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 2.64
      },
      {
        "name": "创新药",
        "change_pct": 4.2
      },
      {
        "name": "基因测序",
        "change_pct": 2.77
      },
      {
        "name": "医药",
        "change_pct": 3.46
      },
      {
        "name": "疫苗",
        "change_pct": 2.66
      },
      {
        "name": "化学原料药",
        "change_pct": 3.7
      },
      {
        "name": "流感",
        "change_pct": 2.72
      },
      {
        "name": "长寿药NMN",
        "change_pct": 1.53
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.83
      },
      {
        "name": "肝素",
        "change_pct": 3.07
      },
      {
        "name": "基因编辑",
        "change_pct": 3.33
      },
      {
        "name": "肝炎概念",
        "change_pct": 3.07
      },
      {
        "name": "医美",
        "change_pct": 2.9
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 3.06
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.15
      },
      {
        "name": "减肥药",
        "change_pct": 5.27
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 97,
    "hot_rank_chg": -40,
    "stock_cnt": 5849,
    "price": "7.08",
    "change": "4.89",
    "market_id": "33",
    "circulate_market_value": "4642398700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.99
      },
      {
        "name": "新零售",
        "change_pct": 2.63
      },
      {
        "name": "农业种植",
        "change_pct": 0.93
      },
      {
        "name": "冷链",
        "change_pct": 0.54
      },
      {
        "name": "大农业",
        "change_pct": 1.48
      },
      {
        "name": "预制菜",
        "change_pct": 2.36
      },
      {
        "name": "国企改革",
        "change_pct": 1.39
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.47
      },
      {
        "name": "免税店概念",
        "change_pct": 2.82
      },
      {
        "name": "湖北国企改革",
        "change_pct": 1.52
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5849, "price": "23.21", "change": "-9.58", "market_id": "33", "circulate_market_value": "77118747000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5849, "price": "78.15", "change": "0.21", "market_id": "33", "circulate_market_value": "118588891000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5849, "price": "96.15", "change": "-6.38", "market_id": "17", "circulate_market_value": "172052210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 4, "hot_rank_chg": 21, "stock_cnt": 5849, "price": "22.04", "change": "-2.61", "market_id": "17", "circulate_market_value": "46097590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 5, "hot_rank_chg": 17, "stock_cnt": 5849, "price": "440.20", "change": "10.00", "market_id": "17", "circulate_market_value": "178870130000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 6, "hot_rank_chg": 3, "stock_cnt": 5849, "price": "6.70", "change": "-4.56", "market_id": "33", "circulate_market_value": "236959800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.95}, {"name": "手机产业链", "change_pct": -0.47}, {"name": "超高清视频", "change_pct": 0.51}, {"name": "苹果产业链", "change_pct": -0.46}, {"name": "电竞", "change_pct": 2.55}, {"name": "半导体", "change_pct": -1.77}, {"name": "人工智能", "change_pct": 1.42}, {"name": "互联网医疗", "change_pct": 2.76}, {"name": "VR&AR", "change_pct": 0.52}, {"name": "OLED", "change_pct": -0.56}, {"name": "京津冀", "change_pct": 1.69}, {"name": "物联网", "change_pct": 0.89}, {"name": "指纹识别", "change_pct": -0.56}, {"name": "汽车零部件", "change_pct": 0.76}, {"name": "白马股", "change_pct": 1.05}, {"name": "智能制造", "change_pct": 0.79}, {"name": "小米概念股", "change_pct": -0.23}, {"name": "国产芯片", "change_pct": -1.22}, {"name": "液晶面板/LCD", "change_pct": -0.87}, {"name": "全息概念", "change_pct": 1.35}, {"name": "理想汽车概念股", "change_pct": 1.18}, {"name": "MicroLED", "change_pct": -0.56}, {"name": "钙钛矿电池", "change_pct": 0.85}, {"name": "智能手表", "change_pct": -0.4}, {"name": "MiniLED", "change_pct": -0.67}, {"name": "传感器", "change_pct": -0.15}, {"name": "大硅片", "change_pct": -3.03}, {"name": "AI PC", "change_pct": -0.45}, {"name": "华为产业链", "change_pct": 0.7}, {"name": "回购", "change_pct": 1.43}, {"name": "智能眼镜/MR头显", "change_pct": 0.27}, {"name": "玻璃基板封装", "change_pct": -1.98}]}, {"code": "001309", "name": "德明利", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5849, "price": "662.40", "change": "-10.00", "market_id": "33", "circulate_market_value": "109341050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 8, "hot_rank_chg": -5, "stock_cnt": 5849, "price": "269.10", "change": "3.51", "market_id": "33", "circulate_market_value": "373059180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": 4, "stock_cnt": 5849, "price": "4.49", "change": "10.05", "market_id": "17", "circulate_market_value": "11308109300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.99}, {"name": "工业大麻", "change_pct": 2.64}, {"name": "中药", "change_pct": 2.69}, {"name": "保健品", "change_pct": 2.46}, {"name": "医药", "change_pct": 3.46}, {"name": "化学原料药", "change_pct": 3.7}, {"name": "流感", "change_pct": 2.72}, {"name": "振兴东北", "change_pct": 2.1}, {"name": "食品", "change_pct": 1.81}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 10, "hot_rank_chg": -4, "stock_cnt": 5849, "price": "36.12", "change": "-2.33", "market_id": "33", "circulate_market_value": "103305825000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 11, "hot_rank_chg": 3, "stock_cnt": 5849, "price": "591.30", "change": "1.25", "market_id": "17", "circulate_market_value": "395279280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 12, "hot_rank_chg": -1, "stock_cnt": 5849, "price": "50.62", "change": "10.00", "market_id": "17", "circulate_market_value": "31908470000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "600118", "name": "中国卫星", "hot_rank": 13, "hot_rank_chg": 18, "stock_cnt": 5849, "price": "78.81", "change": "-4.04", "market_id": "17", "circulate_market_value": "93191969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 14, "hot_rank_chg": 1, "stock_cnt": 5849, "price": "115.70", "change": "2.39", "market_id": "17", "circulate_market_value": "41735697000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 15, "hot_rank_chg": -3, "stock_cnt": 5849, "price": "75.43", "change": "1.36", "market_id": "17", "circulate_market_value": "185078540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 16, "hot_rank_chg": 12, "stock_cnt": 5849, "price": "37.95", "change": "7.05", "market_id": "17", "circulate_market_value": "12786112100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 17, "hot_rank_chg": 9, "stock_cnt": 5849, "price": "50.30", "change": "-4.21", "market_id": "33", "circulate_market_value": "79180026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 18, "hot_rank_chg": 5, "stock_cnt": 5849, "price": "154.37", "change": "4.38", "market_id": "17", "circulate_market_value": "369639200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 19, "hot_rank_chg": -3, "stock_cnt": 5849, "price": "39.65", "change": "3.12", "market_id": "33", "circulate_market_value": "31022344000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 20, "hot_rank_chg": 4, "stock_cnt": 5849, "price": "86.54", "change": "1.87", "market_id": "33", "circulate_market_value": "126939624000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 21, "hot_rank_chg": 32, "stock_cnt": 5849, "price": "10.40", "change": "4.52", "market_id": "17", "circulate_market_value": "18607038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.43}, {"name": "纯碱", "change_pct": 1.17}, {"name": "食品", "change_pct": 1.81}, {"name": "土壤修复", "change_pct": 1.92}, {"name": "东数西算/算力", "change_pct": 0.76}, {"name": "OpenClaw概念", "change_pct": 0.95}, {"name": "DeepSeek概念股", "change_pct": 1.43}]}, {"code": "600522", "name": "中天科技", "hot_rank": 22, "hot_rank_chg": 8, "stock_cnt": 5849, "price": "42.74", "change": "0.35", "market_id": "17", "circulate_market_value": "145869470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 23, "hot_rank_chg": -2, "stock_cnt": 5849, "price": "27.45", "change": "-4.09", "market_id": "33", "circulate_market_value": "20791045000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 24, "hot_rank_chg": 13, "stock_cnt": 5849, "price": "49.87", "change": "-5.24", "market_id": "17", "circulate_market_value": "42217615000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 25, "hot_rank_chg": -15, "stock_cnt": 5849, "price": "56.64", "change": "-4.66", "market_id": "33", "circulate_market_value": "65533223000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 26, "hot_rank_chg": -19, "stock_cnt": 5849, "price": "34.02", "change": "5.10", "market_id": "17", "circulate_market_value": "6223392000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 28, "hot_rank_chg": 14, "stock_cnt": 5849, "price": "95.70", "change": "0.01", "market_id": "33", "circulate_market_value": "69316985000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 29, "hot_rank_chg": 39, "stock_cnt": 5849, "price": "5.61", "change": "10.00", "market_id": "33", "circulate_market_value": "5794769800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.3}, {"name": "锂电池", "change_pct": 0.78}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "铜箔/覆铜板", "change_pct": -0.24}, {"name": "粤港澳大湾区", "change_pct": 1.75}, {"name": "新能源汽车", "change_pct": 0.68}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 2.28}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 30, "hot_rank_chg": 49, "stock_cnt": 5849, "price": "14.87", "change": "-2.36", "market_id": "17", "circulate_market_value": "18977923000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 31, "hot_rank_chg": 29, "stock_cnt": 5849, "price": "17.42", "change": "-7.29", "market_id": "33", "circulate_market_value": "13989519000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 32, "hot_rank_chg": -13, "stock_cnt": 5849, "price": "140.49", "change": "2.42", "market_id": "33", "circulate_market_value": "270135650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 33, "hot_rank_chg": 3, "stock_cnt": 5849, "price": "152.26", "change": "-4.72", "market_id": "33", "circulate_market_value": "153019120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 34, "hot_rank_chg": 42, "stock_cnt": 5849, "price": "18.57", "change": "-3.94", "market_id": "17", "circulate_market_value": "61267989000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 35, "hot_rank_chg": -17, "stock_cnt": 5849, "price": "48.98", "change": "3.42", "market_id": "33", "circulate_market_value": "72280961000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 36, "hot_rank_chg": -3, "stock_cnt": 5849, "price": "53.89", "change": "-1.16", "market_id": "17", "circulate_market_value": "214028820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 37, "hot_rank_chg": -17, "stock_cnt": 5849, "price": "21.90", "change": "-6.92", "market_id": "17", "circulate_market_value": "9175389800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 38, "hot_rank_chg": 5, "stock_cnt": 5849, "price": "28.47", "change": "-6.96", "market_id": "33", "circulate_market_value": "32629623000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 39, "hot_rank_chg": -5, "stock_cnt": 5849, "price": "35.46", "change": "-1.75", "market_id": "33", "circulate_market_value": "38253090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 40, "hot_rank_chg": -39, "stock_cnt": 5849, "price": "7.76", "change": "0.39", "market_id": "33", "circulate_market_value": "12615383700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.99}, {"name": "电竞", "change_pct": 2.55}, {"name": "手游", "change_pct": 2.19}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "人工智能", "change_pct": 1.42}, {"name": "游戏", "change_pct": 2.72}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.71}, {"name": "腾讯概念股", "change_pct": 1.57}, {"name": "快手概念股", "change_pct": 2.56}, {"name": "元宇宙", "change_pct": 1.57}, {"name": "虚拟数字人", "change_pct": 2.09}, {"name": "东数西算/算力", "change_pct": 0.76}, {"name": "web3.0", "change_pct": 1.77}, {"name": "AIGC概念", "change_pct": 2.04}, {"name": "数据要素", "change_pct": 2.04}, {"name": "字节跳动概念股", "change_pct": 2.37}, {"name": "AI营销", "change_pct": 2.51}, {"name": "ChatGPT", "change_pct": 1.89}, {"name": "智能眼镜/MR头显", "change_pct": 0.27}, {"name": "人工智能大模型", "change_pct": 1.9}, {"name": "人形机器人", "change_pct": 0.02}, {"name": "短剧/互动影游", "change_pct": 3.23}, {"name": "多模态", "change_pct": 1.96}, {"name": "Sora/AI视频", "change_pct": 2.25}, {"name": "IP经济/谷子经济", "change_pct": 2.32}, {"name": "小红书概念股", "change_pct": 2.62}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 41, "hot_rank_chg": -1, "stock_cnt": 5849, "price": "229.23", "change": "-1.60", "market_id": "33", "circulate_market_value": "178913640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 42, "hot_rank_chg": 23, "stock_cnt": 5849, "price": "8.40", "change": "-7.18", "market_id": "33", "circulate_market_value": "4550464800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -0.29}, {"name": "油气管网", "change_pct": 0.4}, {"name": "海工装备", "change_pct": 0.68}, {"name": "举牌", "change_pct": 1.61}, {"name": "天然气", "change_pct": 0.48}, {"name": "山东国企改革", "change_pct": 0.97}, {"name": "风电", "change_pct": 0.86}, {"name": "页岩气", "change_pct": -0.19}, {"name": "国企改革", "change_pct": 1.39}, {"name": "深地经济", "change_pct": 0.13}]}, {"code": "300136", "name": "信维通信", "hot_rank": 43, "hot_rank_chg": 13, "stock_cnt": 5849, "price": "88.88", "change": "-1.33", "market_id": "33", "circulate_market_value": "73046725000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 44, "hot_rank_chg": 5, "stock_cnt": 5849, "price": "39.85", "change": "-0.15", "market_id": "33", "circulate_market_value": "160500710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 45, "hot_rank_chg": 57, "stock_cnt": 5849, "price": "21.30", "change": "2.30", "market_id": "33", "circulate_market_value": "25058787000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 46, "hot_rank_chg": -14, "stock_cnt": 5849, "price": "99.01", "change": "-2.84", "market_id": "17", "circulate_market_value": "144857010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 47, "hot_rank_chg": 191, "stock_cnt": 5849, "price": "5.15", "change": "10.04", "market_id": "33", "circulate_market_value": "6678188500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 2.69}, {"name": "创新药", "change_pct": 4.2}, {"name": "央企改革", "change_pct": 1.22}, {"name": "医疗器械", "change_pct": 2.58}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "互联网医疗", "change_pct": 2.76}, {"name": "保健品", "change_pct": 2.46}, {"name": "民营医院", "change_pct": 2.84}, {"name": "CAR-T疗法", "change_pct": 3.68}, {"name": "医药", "change_pct": 3.46}, {"name": "化学原料药", "change_pct": 3.7}, {"name": "海南概念", "change_pct": 2.32}, {"name": "脑科学", "change_pct": 2.14}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 1.84}, {"name": "海南自由贸易港", "change_pct": 2.42}, {"name": "食品", "change_pct": 1.81}, {"name": "国企改革", "change_pct": 1.39}, {"name": "医疗信息化", "change_pct": 2.19}, {"name": "新冠病毒防治", "change_pct": 2.15}, {"name": "自贸区", "change_pct": 1.69}, {"name": "合成生物", "change_pct": 2.69}]}, {"code": "000066", "name": "中国长城", "hot_rank": 48, "hot_rank_chg": -2, "stock_cnt": 5849, "price": "16.92", "change": "0.54", "market_id": "33", "circulate_market_value": "54576980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 49, "hot_rank_chg": -20, "stock_cnt": 5849, "price": "1173.02", "change": "-0.91", "market_id": "33", "circulate_market_value": "1300116860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003020", "name": "立方制药", "hot_rank": 50, "hot_rank_chg": 56, "stock_cnt": 5849, "price": "21.51", "change": "3.37", "market_id": "33", "circulate_market_value": "3625473000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600360", "name": "华微电子", "hot_rank": 51, "hot_rank_chg": 31, "stock_cnt": 5849, "price": "14.36", "change": "-9.69", "market_id": "17", "circulate_market_value": "13789841000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 52, "hot_rank_chg": -4, "stock_cnt": 5849, "price": "48.27", "change": "-0.68", "market_id": "17", "circulate_market_value": "70570489000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 53, "hot_rank_chg": 36, "stock_cnt": 5849, "price": "66.99", "change": "10.00", "market_id": "33", "circulate_market_value": "31168593000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增"}, {"code": "601991", "name": "大唐发电", "hot_rank": 54, "hot_rank_chg": 20, "stock_cnt": 5849, "price": "5.95", "change": "1.19", "market_id": "17", "circulate_market_value": "73756730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.22}, {"name": "核电", "change_pct": 0.83}, {"name": "强势人气股", "change_pct": 0.16}, {"name": "电力体制改革", "change_pct": 1.47}, {"name": "水电", "change_pct": 2.01}, {"name": "火电", "change_pct": 1.37}, {"name": "光伏", "change_pct": 1.21}, {"name": "风电", "change_pct": 0.86}, {"name": "国企改革", "change_pct": 1.39}, {"name": "算电协同", "change_pct": 0.15}]}, {"code": "603313", "name": "梦百合", "hot_rank": 55, "hot_rank_chg": 4, "stock_cnt": 5849, "price": "7.99", "change": "-6.99", "market_id": "17", "circulate_market_value": "4558989200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.99}, {"name": "家具家居", "change_pct": 1.44}, {"name": "独角兽", "change_pct": 0.85}, {"name": "C2M", "change_pct": 1.26}]}, {"code": "300164", "name": "通源石油", "hot_rank": 57, "hot_rank_chg": -13, "stock_cnt": 5849, "price": "11.24", "change": "-1.32", "market_id": "33", "circulate_market_value": "6549457000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -0.29}, {"name": "一带一路", "change_pct": 1.28}, {"name": "天然气", "change_pct": 0.48}, {"name": "油气改革", "change_pct": 0.26}, {"name": "页岩气", "change_pct": -0.19}, {"name": "深地经济", "change_pct": 0.13}]}, {"code": "002739", "name": "儒意电影", "hot_rank": 58, "hot_rank_chg": 128, "stock_cnt": 5849, "price": "9.38", "change": "9.96", "market_id": "33", "circulate_market_value": "19529177000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "暑期档", "xgb_concepts": [{"name": "影视", "change_pct": 3.61}, {"name": "足球", "change_pct": 1.84}, {"name": "阿里巴巴概念股", "change_pct": 1.53}, {"name": "拼多多概念股", "change_pct": 1.51}, {"name": "网红/MCN", "change_pct": 1.99}, {"name": "大消费", "change_pct": 1.89}, {"name": "盲盒", "change_pct": 2.49}, {"name": "短剧/互动影游", "change_pct": 3.23}, {"name": "IP经济/谷子经济", "change_pct": 2.32}, {"name": "首发经济", "change_pct": 2.79}, {"name": "小红书概念股", "change_pct": 2.62}, {"name": "服务消费", "change_pct": 2.57}]}, {"code": "300502", "name": "新易盛", "hot_rank": 60, "hot_rank_chg": -33, "stock_cnt": 5849, "price": "556.79", "change": "-2.27", "market_id": "33", "circulate_market_value": "697208690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 61, "hot_rank_chg": -16, "stock_cnt": 5849, "price": "5.10", "change": "-0.58", "market_id": "33", "circulate_market_value": "102603465000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.95}, {"name": "手机产业链", "change_pct": -0.47}, {"name": "超高清视频", "change_pct": 0.51}, {"name": "电竞", "change_pct": 2.55}, {"name": "半导体", "change_pct": -1.77}, {"name": "OLED", "change_pct": -0.56}, {"name": "光伏", "change_pct": 1.21}, {"name": "黑色家电", "change_pct": 1.76}, {"name": "家电", "change_pct": 1.02}, {"name": "智能制造", "change_pct": 0.79}, {"name": "工业互联网", "change_pct": 1.02}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.23}, {"name": "国产芯片", "change_pct": -1.22}, {"name": "腾讯概念股", "change_pct": 1.57}, {"name": "液晶面板/LCD", "change_pct": -0.87}, {"name": "MicroLED", "change_pct": -0.56}, {"name": "MiniLED", "change_pct": -0.67}, {"name": "华为产业链", "change_pct": 0.7}, {"name": "玻璃基板封装", "change_pct": -1.98}]}, {"code": "600488", "name": "津药药业", "hot_rank": 62, "hot_rank_chg": 21, "stock_cnt": 5849, "price": "6.68", "change": "3.09", "market_id": "17", "circulate_market_value": "7293803000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 3.46}, {"name": "化学原料药", "change_pct": 3.7}, {"name": "数字经济", "change_pct": 1.71}, {"name": "辅助生殖", "change_pct": 2.83}, {"name": "新冠病毒防治", "change_pct": 2.15}]}, {"code": "603259", "name": "药明康德", "hot_rank": 63, "hot_rank_chg": -28, "stock_cnt": 5849, "price": "132.55", "change": "3.95", "market_id": "17", "circulate_market_value": "327833300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 65, "hot_rank_chg": 12, "stock_cnt": 5849, "price": "152.80", "change": "-14.63", "market_id": "33", "circulate_market_value": "4711958700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 66, "hot_rank_chg": 90, "stock_cnt": 5849, "price": "15.27", "change": "-6.15", "market_id": "33", "circulate_market_value": "8908699600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 67, "hot_rank_chg": 24, "stock_cnt": 5849, "price": "231.02", "change": "0.22", "market_id": "33", "circulate_market_value": "104093273000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 68, "hot_rank_chg": -5, "stock_cnt": 5849, "price": "180.00", "change": "-4.00", "market_id": "33", "circulate_market_value": "57334094000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 69, "hot_rank_chg": 45, "stock_cnt": 5849, "price": "33.43", "change": "7.42", "market_id": "33", "circulate_market_value": "25460870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002851", "name": "麦格米特", "hot_rank": 70, "hot_rank_chg": 5, "stock_cnt": 5849, "price": "170.98", "change": "-0.67", "market_id": "33", "circulate_market_value": "78351912000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 71, "hot_rank_chg": -19, "stock_cnt": 5849, "price": "64.65", "change": "-1.45", "market_id": "17", "circulate_market_value": "1282920570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 72, "hot_rank_chg": -34, "stock_cnt": 5849, "price": "29.14", "change": "0.28", "market_id": "17", "circulate_market_value": "600336250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001388", "name": "信通电子", "hot_rank": 73, "hot_rank_chg": -6, "stock_cnt": 5849, "price": "35.26", "change": "8.69", "market_id": "33", "circulate_market_value": "2980865400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 74, "hot_rank_chg": 58, "stock_cnt": 5849, "price": "20.70", "change": "-10.46", "market_id": "33", "circulate_market_value": "24907656000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605090", "name": "九丰能源", "hot_rank": 75, "hot_rank_chg": 56, "stock_cnt": 5849, "price": "41.50", "change": "5.33", "market_id": "17", "circulate_market_value": "29237869000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 76, "hot_rank_chg": 27, "stock_cnt": 5849, "price": "15.19", "change": "-5.59", "market_id": "33", "circulate_market_value": "10516941200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 77, "hot_rank_chg": 66, "stock_cnt": 5849, "price": "9.80", "change": "-2.78", "market_id": "33", "circulate_market_value": "39588666000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -1.77}, {"name": "一带一路", "change_pct": 1.28}, {"name": "京津冀", "change_pct": 1.69}, {"name": "光伏", "change_pct": 1.21}, {"name": "碳中和", "change_pct": 1.22}, {"name": "国产芯片", "change_pct": -1.22}, {"name": "IGBT", "change_pct": -1.9}, {"name": "颗粒硅", "change_pct": 1.54}, {"name": "异质结电池HJT", "change_pct": 0.62}, {"name": "大硅片", "change_pct": -3.03}]}, {"code": "002980", "name": "华盛昌", "hot_rank": 78, "hot_rank_chg": 398, "stock_cnt": 5849, "price": "102.14", "change": "10.01", "market_id": "33", "circulate_market_value": "10345458700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "002821", "name": "凯莱英", "hot_rank": 79, "hot_rank_chg": 2, "stock_cnt": 5849, "price": "191.01", "change": "7.33", "market_id": "33", "circulate_market_value": "60558547000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 81, "hot_rank_chg": 87, "stock_cnt": 5849, "price": "10.94", "change": "1.20", "market_id": "33", "circulate_market_value": "8850667700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.96}, {"name": "大飞机", "change_pct": 1.17}, {"name": "北斗导航", "change_pct": 0.84}, {"name": "高铁轨交", "change_pct": 1.35}, {"name": "军民融合", "change_pct": 1.03}, {"name": "磁悬浮", "change_pct": 1.15}, {"name": "军工", "change_pct": 1.0}, {"name": "碳纤维", "change_pct": 0.18}, {"name": "无人机", "change_pct": 0.73}, {"name": "航天", "change_pct": 0.79}, {"name": "卫星互联网", "change_pct": 0.87}, {"name": "低空经济", "change_pct": 0.94}, {"name": "海洋经济", "change_pct": 0.95}]}, {"code": "300759", "name": "康龙化成", "hot_rank": 82, "hot_rank_chg": -13, "stock_cnt": 5849, "price": "39.39", "change": "7.04", "market_id": "33", "circulate_market_value": "55949259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 83, "hot_rank_chg": 25, "stock_cnt": 5849, "price": "263.01", "change": "-3.84", "market_id": "33", "circulate_market_value": "286300480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 84, "hot_rank_chg": 33, "stock_cnt": 5849, "price": "28.23", "change": "-5.90", "market_id": "33", "circulate_market_value": "12154898800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 85, "hot_rank_chg": 73, "stock_cnt": 5849, "price": "326.02", "change": "-9.03", "market_id": "17", "circulate_market_value": "153740160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 86, "hot_rank_chg": 33, "stock_cnt": 5849, "price": "37.13", "change": "10.02", "market_id": "17", "circulate_market_value": "4851895900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "控制权拟变更"}, {"code": "000547", "name": "航天发展", "hot_rank": 87, "hot_rank_chg": 43, "stock_cnt": 5849, "price": "15.14", "change": "0.00", "market_id": "33", "circulate_market_value": "24059293000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600129", "name": "太极集团", "hot_rank": 88, "hot_rank_chg": 19, "stock_cnt": 5849, "price": "17.99", "change": "2.10", "market_id": "17", "circulate_market_value": "9914499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 89, "hot_rank_chg": -2, "stock_cnt": 5849, "price": "14.66", "change": "-2.07", "market_id": "17", "circulate_market_value": "73139015000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 90, "hot_rank_chg": 51, "stock_cnt": 5849, "price": "31.20", "change": "-2.26", "market_id": "33", "circulate_market_value": "9127985900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 91, "hot_rank_chg": 2, "stock_cnt": 5849, "price": "13.48", "change": "0.75", "market_id": "33", "circulate_market_value": "14321203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002038", "name": "双鹭药业", "hot_rank": 92, "hot_rank_chg": 48, "stock_cnt": 5849, "price": "6.81", "change": "-3.40", "market_id": "33", "circulate_market_value": "5801516100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": 2.64}, {"name": "创新药", "change_pct": 4.2}, {"name": "基因测序", "change_pct": 2.77}, {"name": "医药", "change_pct": 3.46}, {"name": "疫苗", "change_pct": 2.66}, {"name": "化学原料药", "change_pct": 3.7}, {"name": "流感", "change_pct": 2.72}, {"name": "长寿药NMN", "change_pct": 1.53}, {"name": "辅助生殖", "change_pct": 2.83}, {"name": "肝素", "change_pct": 3.07}, {"name": "基因编辑", "change_pct": 3.33}, {"name": "肝炎概念", "change_pct": 3.07}, {"name": "医美", "change_pct": 2.9}, {"name": "阿尔茨海默病", "change_pct": 3.06}, {"name": "新冠病毒防治", "change_pct": 2.15}, {"name": "减肥药", "change_pct": 5.27}]}, {"code": "600460", "name": "士兰微", "hot_rank": 93, "hot_rank_chg": 18, "stock_cnt": 5849, "price": "40.21", "change": "-3.80", "market_id": "17", "circulate_market_value": "66912329000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 94, "hot_rank_chg": -33, "stock_cnt": 5849, "price": "527.10", "change": "-2.14", "market_id": "33", "circulate_market_value": "148535950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 95, "hot_rank_chg": 4, "stock_cnt": 5849, "price": "72.10", "change": "-3.60", "market_id": "33", "circulate_market_value": "104755917000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 96, "hot_rank_chg": -24, "stock_cnt": 5849, "price": "37.51", "change": "-3.89", "market_id": "33", "circulate_market_value": "52748998000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 97, "hot_rank_chg": -40, "stock_cnt": 5849, "price": "7.08", "change": "4.89", "market_id": "33", "circulate_market_value": "4642398700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.99}, {"name": "新零售", "change_pct": 2.63}, {"name": "农业种植", "change_pct": 0.93}, {"name": "冷链", "change_pct": 0.54}, {"name": "大农业", "change_pct": 1.48}, {"name": "预制菜", "change_pct": 2.36}, {"name": "国企改革", "change_pct": 1.39}, {"name": "可降解塑料", "change_pct": 1.47}, {"name": "免税店概念", "change_pct": 2.82}, {"name": "湖北国企改革", "change_pct": 1.52}]}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 98, "hot_rank_chg": -44, "stock_cnt": 5849, "price": "18.13", "change": "-0.44", "market_id": "17", "circulate_market_value": "316565070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 99, "hot_rank_chg": 97, "stock_cnt": 5849, "price": "56.70", "change": "15.66", "market_id": "33", "circulate_market_value": "1852693800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300604", "name": "长川科技", "hot_rank": 100, "hot_rank_chg": 57, "stock_cnt": 5849, "price": "313.92", "change": "-6.46", "market_id": "33", "circulate_market_value": "153625500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002759": "ST/风险警示股", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000078": "ST/风险警示股", "600745": "ST/风险警示股"};