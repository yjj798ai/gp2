const UPDATE_TIME = "2026-08-13 01:27";
const THS_HOT = [
  {
    "name": "算力租赁",
    "rise": 1.24,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续133天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.5,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续269天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": 1.43,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续222天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "AI应用",
    "rise": 0.24,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": -0.33,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 1.06,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续92天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "MLCC概念",
    "rise": 1.05,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "人形机器人",
    "rise": 0.54,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续433天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "光纤概念",
    "rise": 1.3,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续98天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "黄金概念",
    "rise": 0.07,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "机器人概念",
    "rise": 0.43,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "连续100天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "东数西算(算力)",
    "rise": 0.99,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "商业航天",
    "rise": 0.72,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续198天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人工智能",
    "rise": 0.36,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 2,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "DeepSeek概念",
    "rise": 0.34,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "首次上榜",
    "rankChg": 2,
    "etfName": "大数据ETF",
    "code": "886100"
  },
  {
    "name": "芯片概念",
    "rise": 0.96,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续93天上榜",
    "rankChg": -2,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "青蒿素",
    "rise": -0.06,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -2,
    "etfName": "生物医药ETF",
    "code": "885852"
  },
  {
    "name": "云计算",
    "rise": 0.68,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "885362"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 0.77,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "工业母机",
    "rise": 0.32,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885930"
  }
];
const THS_EVENTS = [
  {
    "title": "腾讯，最新业绩出炉！二季度资本开支大增176%",
    "desc": "",
    "heat": 409255,
    "direction": "腾讯概念",
    "themes": [
      "腾讯概念",
      "腾讯系算力",
      "腾讯元宝"
    ],
    "stocks": [
      {
        "name": "城地香江",
        "code": "603887",
        "chg": 10.044053
      }
    ]
  },
  {
    "title": "算力即黄金！单笔合同突破10亿美元，AI新贵Nebius(NBIS.US)云业务营收飙升500%，盘前暴涨",
    "desc": "",
    "heat": 133774,
    "direction": "云算力租赁",
    "themes": [
      "东数西算(算力)",
      "算力租赁",
      "云计算"
    ],
    "stocks": [
      {
        "name": "城地香江",
        "code": "603887",
        "chg": 10.044053
      }
    ]
  },
  {
    "title": "从“不敢保”到“主动保” 保险补齐脑机接口产业化关键一环",
    "desc": "",
    "heat": 97017,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "澳洋健康",
        "code": "002172",
        "chg": 10.133333
      }
    ]
  },
  {
    "title": "马斯克：大概再过四五年，AI 将占到 SpaceX 价值的 99%",
    "desc": "",
    "heat": 95334,
    "direction": "太空算力",
    "themes": [
      "太空算力",
      "太空光伏"
    ],
    "stocks": [
      {
        "name": "优刻得-W",
        "code": "688158",
        "chg": 3.89948
      }
    ]
  },
  {
    "title": "DeepSeek V4 Pro 正式版API上线 大幅增强Agent能力",
    "desc": "",
    "heat": 89460,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "移远通信",
        "code": "603236",
        "chg": 9.994448
      }
    ]
  },
  {
    "title": "到 2030 年全国算力用电量将达 8000 亿度，届时 6 万亿度绿电奔涌入网",
    "desc": "",
    "heat": 17931,
    "direction": "算电协同",
    "themes": [
      "算电协同",
      "电力"
    ],
    "stocks": [
      {
        "name": "同力天启",
        "code": "605286",
        "chg": 10.003227
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "内存",
    "change": "+1.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+1.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+1.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+1.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+1.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+1.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超节点",
    "change": "+1.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+1.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "英伟达概念",
    "change": "+1.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+1.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+1.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "交换机",
    "change": "+1.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+1.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+1.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+1.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+1.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+1.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光纤概念",
    "change": "+1.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高价股",
    "change": "+1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+1.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 5,
    "hot_rank_chg": -3,
    "stock_cnt": 5872,
    "price": "8.90",
    "change": "1.02",
    "market_id": "17",
    "circulate_market_value": "22414738000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.22
      },
      {
        "name": "工业大麻",
        "change_pct": 0.16
      },
      {
        "name": "中药",
        "change_pct": -0.18
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "保健品",
        "change_pct": -0.22
      },
      {
        "name": "民营医院",
        "change_pct": 0.1
      },
      {
        "name": "医药",
        "change_pct": -0.28
      },
      {
        "name": "化学原料药",
        "change_pct": -0.23
      },
      {
        "name": "流感",
        "change_pct": -0.13
      },
      {
        "name": "振兴东北",
        "change_pct": -0.0
      },
      {
        "name": "食品",
        "change_pct": -0.11
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 7,
    "hot_rank_chg": 21,
    "stock_cnt": 5872,
    "price": "11.60",
    "change": "1.31",
    "market_id": "17",
    "circulate_market_value": "20754004000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.26
      },
      {
        "name": "纯碱",
        "change_pct": -0.15
      },
      {
        "name": "食品",
        "change_pct": -0.11
      },
      {
        "name": "土壤修复",
        "change_pct": 0.35
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.29
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.76
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 10,
    "hot_rank_chg": 12,
    "stock_cnt": 5872,
    "price": "6.63",
    "change": "3.27",
    "market_id": "33",
    "circulate_market_value": "14581944000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": 0.43
      },
      {
        "name": "轮胎",
        "change_pct": 0.32
      },
      {
        "name": "冷链",
        "change_pct": 0.14
      },
      {
        "name": "机器人",
        "change_pct": 0.51
      },
      {
        "name": "智能制造",
        "change_pct": 0.49
      },
      {
        "name": "工业母机",
        "change_pct": 0.47
      },
      {
        "name": "减速器",
        "change_pct": 0.43
      },
      {
        "name": "头盔",
        "change_pct": 0.3
      },
      {
        "name": "人形机器人",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 17,
    "hot_rank_chg": -8,
    "stock_cnt": 5872,
    "price": "11.78",
    "change": "-8.75",
    "market_id": "33",
    "circulate_market_value": "3351193300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -0.05
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.19
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "教育",
        "change_pct": -0.1
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.49
      },
      {
        "name": "职业教育",
        "change_pct": 0.02
      },
      {
        "name": "在线教育",
        "change_pct": -0.36
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.6
      },
      {
        "name": "华为产业链",
        "change_pct": 0.7
      },
      {
        "name": "智谱AI",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 18,
    "hot_rank_chg": 3,
    "stock_cnt": 5872,
    "price": "5.51",
    "change": "-0.18",
    "market_id": "33",
    "circulate_market_value": "32259939000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.24
      },
      {
        "name": "人工智能",
        "change_pct": 0.48
      },
      {
        "name": "水利",
        "change_pct": 0.03
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.06
      },
      {
        "name": "大数据",
        "change_pct": 0.43
      },
      {
        "name": "园林",
        "change_pct": 0.33
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.83
      },
      {
        "name": "数字经济",
        "change_pct": 0.54
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.83
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.58
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.9
      },
      {
        "name": "快手概念股",
        "change_pct": 0.37
      },
      {
        "name": "IGBT",
        "change_pct": 0.81
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.21
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.54
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.56
      },
      {
        "name": "氮化镓",
        "change_pct": 1.0
      },
      {
        "name": "AI营销",
        "change_pct": 0.22
      },
      {
        "name": "多模态",
        "change_pct": 0.48
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.07
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.4
      },
      {
        "name": "区块链",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 23,
    "hot_rank_chg": -13,
    "stock_cnt": 5872,
    "price": "8.57",
    "change": "0.47",
    "market_id": "33",
    "circulate_market_value": "13932196000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.22
      },
      {
        "name": "电竞",
        "change_pct": 0.63
      },
      {
        "name": "手游",
        "change_pct": 0.34
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "人工智能",
        "change_pct": 0.48
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
        "change_pct": 0.54
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.83
      },
      {
        "name": "快手概念股",
        "change_pct": 0.37
      },
      {
        "name": "元宇宙",
        "change_pct": 0.32
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.21
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.29
      },
      {
        "name": "web3.0",
        "change_pct": 0.41
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.54
      },
      {
        "name": "数据要素",
        "change_pct": 0.35
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.56
      },
      {
        "name": "AI营销",
        "change_pct": 0.22
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.52
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.9
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.35
      },
      {
        "name": "人形机器人",
        "change_pct": 0.54
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.16
      },
      {
        "name": "多模态",
        "change_pct": 0.48
      },
      {
        "name": "AI视频",
        "change_pct": 0.52
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.26
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 25,
    "hot_rank_chg": 44,
    "stock_cnt": 5872,
    "price": "4.81",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "12718810600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "装修装饰",
        "change_pct": 0.41
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.27
      },
      {
        "name": "破净股",
        "change_pct": -0.04
      },
      {
        "name": "航天",
        "change_pct": 0.63
      },
      {
        "name": "旧改",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 28,
    "hot_rank_chg": 76,
    "stock_cnt": 5872,
    "price": "12.49",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "7519347500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 1.01
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.83
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.29
      },
      {
        "name": "国资入股",
        "change_pct": 0.2
      },
      {
        "name": "华为产业链",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 29,
    "hot_rank_chg": 22,
    "stock_cnt": 5872,
    "price": "6.26",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4479305500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -0.03
      },
      {
        "name": "旅游",
        "change_pct": -0.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 36,
    "hot_rank_chg": 14,
    "stock_cnt": 5872,
    "price": "5.00",
    "change": "5.93",
    "market_id": "17",
    "circulate_market_value": "16342191000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.31
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "养老产业",
        "change_pct": -0.21
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.04
      },
      {
        "name": "民营医院",
        "change_pct": 0.1
      },
      {
        "name": "地摊经济",
        "change_pct": 0.09
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 37,
    "hot_rank_chg": 18,
    "stock_cnt": 5872,
    "price": "3.80",
    "change": "-2.06",
    "market_id": "33",
    "circulate_market_value": "7612833300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 1.06
      },
      {
        "name": "数字孪生",
        "change_pct": 0.38
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "人工智能",
        "change_pct": 0.48
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.19
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.01
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.23
      },
      {
        "name": "人脸识别",
        "change_pct": 0.34
      },
      {
        "name": "智慧停车",
        "change_pct": 0.54
      },
      {
        "name": "物联网",
        "change_pct": 0.65
      },
      {
        "name": "大数据",
        "change_pct": 0.43
      },
      {
        "name": "智慧城市",
        "change_pct": 0.54
      },
      {
        "name": "雄安新区",
        "change_pct": 0.16
      },
      {
        "name": "机器人",
        "change_pct": 0.51
      },
      {
        "name": "数字经济",
        "change_pct": 0.54
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.83
      },
      {
        "name": "建筑节能",
        "change_pct": 0.1
      },
      {
        "name": "旧改",
        "change_pct": 0.29
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.33
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.16
      },
      {
        "name": "华为产业链",
        "change_pct": 0.7
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -0.96
      },
      {
        "name": "区块链",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 38,
    "hot_rank_chg": -7,
    "stock_cnt": 5872,
    "price": "6.00",
    "change": "1.18",
    "market_id": "33",
    "circulate_market_value": "212202800000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.94
      },
      {
        "name": "手机产业链",
        "change_pct": 0.9
      },
      {
        "name": "超高清视频",
        "change_pct": 0.47
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.92
      },
      {
        "name": "电竞",
        "change_pct": 0.63
      },
      {
        "name": "半导体",
        "change_pct": 1.26
      },
      {
        "name": "人工智能",
        "change_pct": 0.48
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.19
      },
      {
        "name": "VR&AR",
        "change_pct": 0.8
      },
      {
        "name": "OLED",
        "change_pct": 0.97
      },
      {
        "name": "京津冀",
        "change_pct": 0.26
      },
      {
        "name": "物联网",
        "change_pct": 0.65
      },
      {
        "name": "指纹识别",
        "change_pct": 1.0
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.38
      },
      {
        "name": "白马股",
        "change_pct": -0.01
      },
      {
        "name": "智能制造",
        "change_pct": 0.49
      },
      {
        "name": "小米概念股",
        "change_pct": 0.83
      },
      {
        "name": "国产芯片",
        "change_pct": 1.17
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.94
      },
      {
        "name": "全息概念",
        "change_pct": 0.83
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.58
      },
      {
        "name": "MicroLED",
        "change_pct": 0.96
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.37
      },
      {
        "name": "智能手表",
        "change_pct": 0.84
      },
      {
        "name": "MiniLED",
        "change_pct": 0.92
      },
      {
        "name": "传感器",
        "change_pct": 0.75
      },
      {
        "name": "大硅片",
        "change_pct": 1.7
      },
      {
        "name": "AI PC",
        "change_pct": 1.16
      },
      {
        "name": "华为产业链",
        "change_pct": 0.7
      },
      {
        "name": "回购",
        "change_pct": 0.23
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.98
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.9
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.1
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 44,
    "hot_rank_chg": -8,
    "stock_cnt": 5872,
    "price": "10.50",
    "change": "-2.60",
    "market_id": "33",
    "circulate_market_value": "21861019000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -0.03
      },
      {
        "name": "足球",
        "change_pct": 0.11
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.49
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.61
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.14
      },
      {
        "name": "大消费",
        "change_pct": -0.3
      },
      {
        "name": "盲盒",
        "change_pct": 0.22
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.26
      },
      {
        "name": "首发经济",
        "change_pct": -0.25
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.4
      },
      {
        "name": "服务消费",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "002248",
    "name": "华东数控",
    "hot_rank": 46,
    "hot_rank_chg": 29,
    "stock_cnt": 5872,
    "price": "11.91",
    "change": "-2.14",
    "market_id": "33",
    "circulate_market_value": "3662272600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高铁轨交",
        "change_pct": 0.23
      },
      {
        "name": "智能制造",
        "change_pct": 0.49
      },
      {
        "name": "工业母机",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 49,
    "hot_rank_chg": -14,
    "stock_cnt": 5872,
    "price": "11.17",
    "change": "0.63",
    "market_id": "33",
    "circulate_market_value": "9905072700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 0.97
      },
      {
        "name": "手机产业链",
        "change_pct": 0.9
      },
      {
        "name": "超高清视频",
        "change_pct": 0.47
      },
      {
        "name": "锂电池",
        "change_pct": 0.31
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "OLED",
        "change_pct": 0.97
      },
      {
        "name": "包装印刷",
        "change_pct": 0.46
      },
      {
        "name": "光伏",
        "change_pct": 0.27
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.37
      },
      {
        "name": "小米概念股",
        "change_pct": 0.83
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.94
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.22
      },
      {
        "name": "华为产业链",
        "change_pct": 0.7
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.08
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 51,
    "hot_rank_chg": -7,
    "stock_cnt": 5872,
    "price": "7.46",
    "change": "-1.71",
    "market_id": "17",
    "circulate_market_value": "8495129500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.29
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "光伏",
        "change_pct": 0.27
      },
      {
        "name": "特高压",
        "change_pct": 0.53
      },
      {
        "name": "智能电网",
        "change_pct": 0.51
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 52,
    "hot_rank_chg": -34,
    "stock_cnt": 5872,
    "price": "11.50",
    "change": "-3.52",
    "market_id": "33",
    "circulate_market_value": "5344889600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.29
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.01
      },
      {
        "name": "水利",
        "change_pct": 0.03
      },
      {
        "name": "大数据",
        "change_pct": 0.43
      },
      {
        "name": "海绵城市",
        "change_pct": -0.09
      },
      {
        "name": "风电",
        "change_pct": 0.37
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.08
      },
      {
        "name": "数字经济",
        "change_pct": 0.54
      },
      {
        "name": "大基建",
        "change_pct": -0.01
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.29
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.33
      },
      {
        "name": "国企改革",
        "change_pct": 0.08
      },
      {
        "name": "旧改",
        "change_pct": 0.29
      },
      {
        "name": "西部大开发",
        "change_pct": -0.27
      },
      {
        "name": "低空经济",
        "change_pct": 0.42
      },
      {
        "name": "房屋检测",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "002329",
    "name": "皇氏集团",
    "hot_rank": 54,
    "hot_rank_chg": 36,
    "stock_cnt": 5872,
    "price": "4.62",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3010359300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.22
      },
      {
        "name": "乳业（奶粉）",
        "change_pct": 0.62
      },
      {
        "name": "股权转让",
        "change_pct": 0.51
      },
      {
        "name": "一带一路",
        "change_pct": 0.29
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.12
      },
      {
        "name": "智慧城市",
        "change_pct": 0.54
      },
      {
        "name": "食品",
        "change_pct": -0.11
      },
      {
        "name": "基因编辑",
        "change_pct": 0.02
      },
      {
        "name": "社区团购",
        "change_pct": 0.32
      },
      {
        "name": "大农业",
        "change_pct": 0.03
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.48
      },
      {
        "name": "广西概念",
        "change_pct": 0.22
      },
      {
        "name": "饮料",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "600683",
    "name": "京投发展",
    "hot_rank": 62,
    "hot_rank_chg": 70,
    "stock_cnt": 5872,
    "price": "12.93",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "9578254300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.31
      },
      {
        "name": "光通信",
        "change_pct": 1.9
      },
      {
        "name": "京津冀",
        "change_pct": 0.26
      },
      {
        "name": "土地流转",
        "change_pct": 0.01
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.38
      },
      {
        "name": "物业管理",
        "change_pct": -0.15
      },
      {
        "name": "国企改革",
        "change_pct": 0.08
      }
    ]
  },
  {
    "code": "600376",
    "name": "首开股份",
    "hot_rank": 63,
    "hot_rank_chg": 32,
    "stock_cnt": 5872,
    "price": "4.34",
    "change": "-1.81",
    "market_id": "17",
    "circulate_market_value": "11195313200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.31
      },
      {
        "name": "京津冀",
        "change_pct": 0.26
      },
      {
        "name": "雄安新区",
        "change_pct": 0.16
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.38
      },
      {
        "name": "住房租赁",
        "change_pct": 0.08
      },
      {
        "name": "物业管理",
        "change_pct": -0.15
      }
    ]
  },
  {
    "code": "600881",
    "name": "亚泰集团",
    "hot_rank": 64,
    "hot_rank_chg": 107,
    "stock_cnt": 5872,
    "price": "2.15",
    "change": "4.37",
    "market_id": "17",
    "circulate_market_value": "6949124600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.29
      },
      {
        "name": "中药",
        "change_pct": -0.18
      },
      {
        "name": "创新药",
        "change_pct": -0.37
      },
      {
        "name": "股权转让",
        "change_pct": 0.51
      },
      {
        "name": "水泥",
        "change_pct": 0.08
      },
      {
        "name": "保健品",
        "change_pct": -0.22
      },
      {
        "name": "医药",
        "change_pct": -0.28
      },
      {
        "name": "疫苗",
        "change_pct": -0.26
      },
      {
        "name": "振兴东北",
        "change_pct": -0.0
      },
      {
        "name": "食品",
        "change_pct": -0.11
      },
      {
        "name": "物业管理",
        "change_pct": -0.15
      },
      {
        "name": "低价股",
        "change_pct": -0.02
      },
      {
        "name": "国企改革",
        "change_pct": 0.08
      }
    ]
  },
  {
    "code": "002400",
    "name": "省广集团",
    "hot_rank": 69,
    "hot_rank_chg": 1,
    "stock_cnt": 5872,
    "price": "7.48",
    "change": "2.05",
    "market_id": "33",
    "circulate_market_value": "12911711300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.22
      },
      {
        "name": "人工智能",
        "change_pct": 0.48
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.01
      },
      {
        "name": "大数据",
        "change_pct": 0.43
      },
      {
        "name": "百度概念股",
        "change_pct": 0.19
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.83
      },
      {
        "name": "传媒",
        "change_pct": 0.01
      },
      {
        "name": "快手概念股",
        "change_pct": 0.37
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.56
      },
      {
        "name": "国企改革",
        "change_pct": 0.08
      },
      {
        "name": "横琴新区",
        "change_pct": 0.34
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.14
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.48
      },
      {
        "name": "AI营销",
        "change_pct": 0.22
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.16
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.4
      },
      {
        "name": "区块链",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 74,
    "hot_rank_chg": 10,
    "stock_cnt": 5872,
    "price": "3.73",
    "change": "-3.37",
    "market_id": "33",
    "circulate_market_value": "7833573900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.18
      },
      {
        "name": "维生素",
        "change_pct": 0.15
      },
      {
        "name": "基因测序",
        "change_pct": -0.08
      },
      {
        "name": "民营医院",
        "change_pct": 0.1
      },
      {
        "name": "医药",
        "change_pct": -0.28
      },
      {
        "name": "化学原料药",
        "change_pct": -0.23
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -0.68
      }
    ]
  },
  {
    "code": "002582",
    "name": "好想你",
    "hot_rank": 78,
    "hot_rank_chg": 163,
    "stock_cnt": 5872,
    "price": "11.00",
    "change": "-1.34",
    "market_id": "33",
    "circulate_market_value": "3786635400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -0.27
      },
      {
        "name": "教育",
        "change_pct": -0.1
      },
      {
        "name": "休闲食品",
        "change_pct": -0.12
      },
      {
        "name": "食品",
        "change_pct": -0.11
      },
      {
        "name": "大农业",
        "change_pct": 0.03
      },
      {
        "name": "预制菜",
        "change_pct": -0.16
      },
      {
        "name": "人造肉",
        "change_pct": -0.1
      },
      {
        "name": "职业教育",
        "change_pct": 0.02
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.14
      },
      {
        "name": "饮料",
        "change_pct": 0.27
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.26
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.28
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 80,
    "hot_rank_chg": -12,
    "stock_cnt": 5872,
    "price": "6.99",
    "change": "0.14",
    "market_id": "33",
    "circulate_market_value": "7220221200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.12
      },
      {
        "name": "锂电池",
        "change_pct": 0.31
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.39
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.04
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.37
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.34
      }
    ]
  },
  {
    "code": "000720",
    "name": "新能泰山",
    "hot_rank": 82,
    "hot_rank_chg": 209,
    "stock_cnt": 5872,
    "price": "4.00",
    "change": "-0.99",
    "market_id": "33",
    "circulate_market_value": "5026126300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.05
      },
      {
        "name": "房地产",
        "change_pct": 0.31
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.17
      },
      {
        "name": "物业管理",
        "change_pct": -0.15
      },
      {
        "name": "国企改革",
        "change_pct": 0.08
      },
      {
        "name": "供应链金融",
        "change_pct": 0.25
      },
      {
        "name": "光纤概念",
        "change_pct": 1.41
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 86,
    "hot_rank_chg": 24,
    "stock_cnt": 5872,
    "price": "12.30",
    "change": "-1.36",
    "market_id": "17",
    "circulate_market_value": "7316390500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 0.38
      },
      {
        "name": "VR&AR",
        "change_pct": 0.8
      },
      {
        "name": "装修装饰",
        "change_pct": 0.41
      },
      {
        "name": "数字经济",
        "change_pct": 0.54
      },
      {
        "name": "百度概念股",
        "change_pct": 0.19
      },
      {
        "name": "全息概念",
        "change_pct": 0.83
      },
      {
        "name": "NFT",
        "change_pct": 0.11
      },
      {
        "name": "元宇宙",
        "change_pct": 0.32
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.21
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.14
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.52
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.9
      },
      {
        "name": "多模态",
        "change_pct": 0.48
      },
      {
        "name": "AI视频",
        "change_pct": 0.52
      }
    ]
  },
  {
    "code": "000859",
    "name": "国风新材",
    "hot_rank": 87,
    "hot_rank_chg": 2,
    "stock_cnt": 5872,
    "price": "10.31",
    "change": "1.08",
    "market_id": "33",
    "circulate_market_value": "9236989500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.94
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.14
      },
      {
        "name": "装修装饰",
        "change_pct": 0.41
      },
      {
        "name": "碳基材料",
        "change_pct": 0.21
      },
      {
        "name": "建筑节能",
        "change_pct": 0.1
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 1.12
      },
      {
        "name": "国企改革",
        "change_pct": 0.08
      }
    ]
  },
  {
    "code": "002047",
    "name": "宝鹰股份",
    "hot_rank": 92,
    "hot_rank_chg": 128,
    "stock_cnt": 5872,
    "price": "4.28",
    "change": "9.18",
    "market_id": "33",
    "circulate_market_value": "6489160300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.51
      },
      {
        "name": "一带一路",
        "change_pct": 0.29
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.19
      },
      {
        "name": "VR&AR",
        "change_pct": 0.8
      },
      {
        "name": "装修装饰",
        "change_pct": 0.41
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.27
      },
      {
        "name": "智慧城市",
        "change_pct": 0.54
      },
      {
        "name": "BIPV概念",
        "change_pct": 0.2
      },
      {
        "name": "旧改",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "002589",
    "name": "瑞康医药",
    "hot_rank": 97,
    "hot_rank_chg": 112,
    "stock_cnt": 5872,
    "price": "3.40",
    "change": "-4.22",
    "market_id": "33",
    "circulate_market_value": "4643011300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.18
      },
      {
        "name": "体外诊断",
        "change_pct": -0.06
      },
      {
        "name": "农业种植",
        "change_pct": -0.27
      },
      {
        "name": "人工智能",
        "change_pct": 0.48
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.19
      },
      {
        "name": "医药商业",
        "change_pct": -0.57
      },
      {
        "name": "养老产业",
        "change_pct": -0.21
      },
      {
        "name": "冷链",
        "change_pct": 0.14
      },
      {
        "name": "医药",
        "change_pct": -0.28
      },
      {
        "name": "破净股",
        "change_pct": -0.04
      },
      {
        "name": "大农业",
        "change_pct": 0.03
      },
      {
        "name": "口腔",
        "change_pct": 0.06
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.33
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.16
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 100,
    "hot_rank_chg": -6,
    "stock_cnt": 5872,
    "price": "12.71",
    "change": "1.93",
    "market_id": "17",
    "circulate_market_value": "16309454000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.24
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "智能制造",
        "change_pct": 0.49
      },
      {
        "name": "工业互联网",
        "change_pct": 0.43
      },
      {
        "name": "培育钻石",
        "change_pct": 0.71
      },
      {
        "name": "金刚线",
        "change_pct": 0.91
      },
      {
        "name": "国资入股",
        "change_pct": 0.2
      },
      {
        "name": "深地经济",
        "change_pct": -0.28
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600667", "name": "太极实业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "22.80", "change": "0.40", "market_id": "17", "circulate_market_value": "47687162000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "13.60", "change": "-3.06", "market_id": "17", "circulate_market_value": "5229847800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "67.52", "change": "1.52", "market_id": "33", "circulate_market_value": "78121502000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 4, "hot_rank_chg": 4, "stock_cnt": 5872, "price": "43.13", "change": "4.66", "market_id": "17", "circulate_market_value": "63055836000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "8.90", "change": "1.02", "market_id": "17", "circulate_market_value": "22414738000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.22}, {"name": "工业大麻", "change_pct": 0.16}, {"name": "中药", "change_pct": -0.18}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "保健品", "change_pct": -0.22}, {"name": "民营医院", "change_pct": 0.1}, {"name": "医药", "change_pct": -0.28}, {"name": "化学原料药", "change_pct": -0.23}, {"name": "流感", "change_pct": -0.13}, {"name": "振兴东北", "change_pct": -0.0}, {"name": "食品", "change_pct": -0.11}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "105.00", "change": "-0.93", "market_id": "33", "circulate_market_value": "68568741000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 7, "hot_rank_chg": 21, "stock_cnt": 5872, "price": "11.60", "change": "1.31", "market_id": "17", "circulate_market_value": "20754004000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.26}, {"name": "纯碱", "change_pct": -0.15}, {"name": "食品", "change_pct": -0.11}, {"name": "土壤修复", "change_pct": 0.35}, {"name": "东数西算/算力", "change_pct": 1.29}, {"name": "OpenClaw概念", "change_pct": 1.76}, {"name": "DeepSeek概念股", "change_pct": 0.93}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "54.80", "change": "2.39", "market_id": "17", "circulate_market_value": "246766540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "32.00", "change": "5.30", "market_id": "17", "circulate_market_value": "12832000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 10, "hot_rank_chg": 12, "stock_cnt": 5872, "price": "6.63", "change": "3.27", "market_id": "33", "circulate_market_value": "14581944000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": 0.43}, {"name": "轮胎", "change_pct": 0.32}, {"name": "冷链", "change_pct": 0.14}, {"name": "机器人", "change_pct": 0.51}, {"name": "智能制造", "change_pct": 0.49}, {"name": "工业母机", "change_pct": 0.47}, {"name": "减速器", "change_pct": 0.43}, {"name": "头盔", "change_pct": 0.3}, {"name": "人形机器人", "change_pct": 0.54}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 11, "hot_rank_chg": 19, "stock_cnt": 5872, "price": "20.68", "change": "9.77", "market_id": "33", "circulate_market_value": "24329376000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002229", "name": "鸿博股份", "hot_rank": 12, "hot_rank_chg": 45, "stock_cnt": 5872, "price": "13.85", "change": "7.28", "market_id": "33", "circulate_market_value": "6830212900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 13, "hot_rank_chg": 40, "stock_cnt": 5872, "price": "21.72", "change": "7.26", "market_id": "17", "circulate_market_value": "23333861000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 14, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "62.00", "change": "3.21", "market_id": "33", "circulate_market_value": "22847204000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 15, "hot_rank_chg": 28, "stock_cnt": 5872, "price": "102.00", "change": "3.86", "market_id": "17", "circulate_market_value": "100155179000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 16, "hot_rank_chg": 10, "stock_cnt": 5872, "price": "35.00", "change": "5.01", "market_id": "17", "circulate_market_value": "11792198300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 17, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "11.78", "change": "-8.75", "market_id": "33", "circulate_market_value": "3351193300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -0.05}, {"name": "ST摘帽", "change_pct": 0.19}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "教育", "change_pct": -0.1}, {"name": "阿里巴巴概念股", "change_pct": 0.49}, {"name": "职业教育", "change_pct": 0.02}, {"name": "在线教育", "change_pct": -0.36}, {"name": "华为鸿蒙", "change_pct": 0.6}, {"name": "华为产业链", "change_pct": 0.7}, {"name": "智谱AI", "change_pct": 0.7}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 18, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "5.51", "change": "-0.18", "market_id": "33", "circulate_market_value": "32259939000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.24}, {"name": "人工智能", "change_pct": 0.48}, {"name": "水利", "change_pct": 0.03}, {"name": "直播/短视频", "change_pct": 0.06}, {"name": "大数据", "change_pct": 0.43}, {"name": "园林", "change_pct": 0.33}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.83}, {"name": "数字经济", "change_pct": 0.54}, {"name": "腾讯概念股", "change_pct": 0.83}, {"name": "理想汽车概念股", "change_pct": 0.58}, {"name": "第三代半导体", "change_pct": 0.9}, {"name": "快手概念股", "change_pct": 0.37}, {"name": "IGBT", "change_pct": 0.81}, {"name": "虚拟数字人", "change_pct": 0.21}, {"name": "AIGC概念", "change_pct": 0.54}, {"name": "字节跳动概念股", "change_pct": 0.56}, {"name": "氮化镓", "change_pct": 1.0}, {"name": "AI营销", "change_pct": 0.22}, {"name": "多模态", "change_pct": 0.48}, {"name": "液冷服务器", "change_pct": 1.07}, {"name": "小红书概念股", "change_pct": 0.4}, {"name": "区块链", "change_pct": 0.4}]}, {"code": "001258", "name": "立新能源", "hot_rank": 19, "hot_rank_chg": -12, "stock_cnt": 5872, "price": "14.90", "change": "-3.62", "market_id": "33", "circulate_market_value": "13906492000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "126.00", "change": "5.56", "market_id": "17", "circulate_market_value": "45451148000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 21, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "60.14", "change": "1.42", "market_id": "17", "circulate_market_value": "147562290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002792", "name": "通宇通讯", "hot_rank": 22, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "38.00", "change": "2.40", "market_id": "33", "circulate_market_value": "12837330300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 23, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "8.57", "change": "0.47", "market_id": "33", "circulate_market_value": "13932196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.22}, {"name": "电竞", "change_pct": 0.63}, {"name": "手游", "change_pct": 0.34}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "人工智能", "change_pct": 0.48}, {"name": "游戏", "change_pct": 0.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.54}, {"name": "腾讯概念股", "change_pct": 0.83}, {"name": "快手概念股", "change_pct": 0.37}, {"name": "元宇宙", "change_pct": 0.32}, {"name": "虚拟数字人", "change_pct": 0.21}, {"name": "东数西算/算力", "change_pct": 1.29}, {"name": "web3.0", "change_pct": 0.41}, {"name": "AIGC概念", "change_pct": 0.54}, {"name": "数据要素", "change_pct": 0.35}, {"name": "字节跳动概念股", "change_pct": 0.56}, {"name": "AI营销", "change_pct": 0.22}, {"name": "ChatGPT", "change_pct": 0.52}, {"name": "智能眼镜/MR头显", "change_pct": 0.9}, {"name": "人工智能大模型", "change_pct": 0.35}, {"name": "人形机器人", "change_pct": 0.54}, {"name": "短剧/互动影游", "change_pct": 0.16}, {"name": "多模态", "change_pct": 0.48}, {"name": "AI视频", "change_pct": 0.52}, {"name": "IP经济/谷子经济", "change_pct": 0.26}, {"name": "小红书概念股", "change_pct": 0.4}]}, {"code": "002185", "name": "华天科技", "hot_rank": 24, "hot_rank_chg": 14, "stock_cnt": 5872, "price": "18.65", "change": "1.91", "market_id": "33", "circulate_market_value": "61967455000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 25, "hot_rank_chg": 44, "stock_cnt": 5872, "price": "4.81", "change": "10.07", "market_id": "33", "circulate_market_value": "12718810600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.42}, {"name": "装修装饰", "change_pct": 0.41}, {"name": "装配式建筑", "change_pct": 0.27}, {"name": "破净股", "change_pct": -0.04}, {"name": "航天", "change_pct": 0.63}, {"name": "旧改", "change_pct": 0.29}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 26, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "425.26", "change": "2.93", "market_id": "17", "circulate_market_value": "284282880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 27, "hot_rank_chg": 6, "stock_cnt": 5872, "price": "37.90", "change": "2.43", "market_id": "33", "circulate_market_value": "108396754000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603887", "name": "城地香江", "hot_rank": 28, "hot_rank_chg": 76, "stock_cnt": 5872, "price": "12.49", "change": "10.04", "market_id": "17", "circulate_market_value": "7519347500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 1.01}, {"name": "阿里巴巴概念股", "change_pct": 0.49}, {"name": "腾讯概念股", "change_pct": 0.83}, {"name": "东数西算/算力", "change_pct": 1.29}, {"name": "国资入股", "change_pct": 0.2}, {"name": "华为产业链", "change_pct": 0.7}]}, {"code": "000802", "name": "北京文化", "hot_rank": 29, "hot_rank_chg": 22, "stock_cnt": 5872, "price": "6.26", "change": "10.02", "market_id": "33", "circulate_market_value": "4479305500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.03}, {"name": "旅游", "change_pct": -0.16}, {"name": "IP经济/谷子经济", "change_pct": 0.26}]}, {"code": "000815", "name": "美利云", "hot_rank": 30, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "19.22", "change": "2.62", "market_id": "33", "circulate_market_value": "13362955500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 31, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "79.30", "change": "1.43", "market_id": "17", "circulate_market_value": "141900580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 32, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "54.00", "change": "1.98", "market_id": "17", "circulate_market_value": "45713880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 33, "hot_rank_chg": -18, "stock_cnt": 5872, "price": "16.80", "change": "-2.21", "market_id": "17", "circulate_market_value": "24741475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 34, "hot_rank_chg": 11, "stock_cnt": 5872, "price": "146.08", "change": "1.99", "market_id": "17", "circulate_market_value": "352308270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 35, "hot_rank_chg": -18, "stock_cnt": 5872, "price": "960.00", "change": "4.24", "market_id": "33", "circulate_market_value": "1065542190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 36, "hot_rank_chg": 14, "stock_cnt": 5872, "price": "5.00", "change": "5.93", "market_id": "17", "circulate_market_value": "16342191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.31}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "养老产业", "change_pct": -0.21}, {"name": "粤港澳大湾区", "change_pct": 0.04}, {"name": "民营医院", "change_pct": 0.1}, {"name": "地摊经济", "change_pct": 0.09}]}, {"code": "002421", "name": "达实智能", "hot_rank": 37, "hot_rank_chg": 18, "stock_cnt": 5872, "price": "3.80", "change": "-2.06", "market_id": "33", "circulate_market_value": "7612833300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": 1.06}, {"name": "数字孪生", "change_pct": 0.38}, {"name": "深圳本地股", "change_pct": 0.35}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "人工智能", "change_pct": 0.48}, {"name": "互联网医疗", "change_pct": -0.19}, {"name": "云计算数据中心", "change_pct": 1.01}, {"name": "高铁轨交", "change_pct": 0.23}, {"name": "人脸识别", "change_pct": 0.34}, {"name": "智慧停车", "change_pct": 0.54}, {"name": "物联网", "change_pct": 0.65}, {"name": "大数据", "change_pct": 0.43}, {"name": "智慧城市", "change_pct": 0.54}, {"name": "雄安新区", "change_pct": 0.16}, {"name": "机器人", "change_pct": 0.51}, {"name": "数字经济", "change_pct": 0.54}, {"name": "阿里巴巴概念股", "change_pct": 0.49}, {"name": "腾讯概念股", "change_pct": 0.83}, {"name": "建筑节能", "change_pct": 0.1}, {"name": "旧改", "change_pct": 0.29}, {"name": "医疗信息化", "change_pct": 0.33}, {"name": "新冠病毒防治", "change_pct": 0.16}, {"name": "华为产业链", "change_pct": 0.7}, {"name": "医疗耗材供应链SPD", "change_pct": -0.96}, {"name": "区块链", "change_pct": 0.4}]}, {"code": "000725", "name": "京东方A", "hot_rank": 38, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "6.00", "change": "1.18", "market_id": "33", "circulate_market_value": "212202800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.94}, {"name": "手机产业链", "change_pct": 0.9}, {"name": "超高清视频", "change_pct": 0.47}, {"name": "苹果产业链", "change_pct": 0.92}, {"name": "电竞", "change_pct": 0.63}, {"name": "半导体", "change_pct": 1.26}, {"name": "人工智能", "change_pct": 0.48}, {"name": "互联网医疗", "change_pct": -0.19}, {"name": "VR&AR", "change_pct": 0.8}, {"name": "OLED", "change_pct": 0.97}, {"name": "京津冀", "change_pct": 0.26}, {"name": "物联网", "change_pct": 0.65}, {"name": "指纹识别", "change_pct": 1.0}, {"name": "汽车零部件", "change_pct": 0.38}, {"name": "白马股", "change_pct": -0.01}, {"name": "智能制造", "change_pct": 0.49}, {"name": "小米概念股", "change_pct": 0.83}, {"name": "国产芯片", "change_pct": 1.17}, {"name": "液晶面板/LCD", "change_pct": 0.94}, {"name": "全息概念", "change_pct": 0.83}, {"name": "理想汽车概念股", "change_pct": 0.58}, {"name": "MicroLED", "change_pct": 0.96}, {"name": "钙钛矿电池", "change_pct": 0.37}, {"name": "智能手表", "change_pct": 0.84}, {"name": "MiniLED", "change_pct": 0.92}, {"name": "传感器", "change_pct": 0.75}, {"name": "大硅片", "change_pct": 1.7}, {"name": "AI PC", "change_pct": 1.16}, {"name": "华为产业链", "change_pct": 0.7}, {"name": "回购", "change_pct": 0.23}, {"name": "光电共封装CPO", "change_pct": 1.98}, {"name": "智能眼镜/MR头显", "change_pct": 0.9}, {"name": "玻璃基板封装", "change_pct": 1.1}]}, {"code": "603758", "name": "秦安股份", "hot_rank": 39, "hot_rank_chg": 52, "stock_cnt": 5872, "price": "15.35", "change": "10.04", "market_id": "17", "circulate_market_value": "6648331400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 40, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "37.78", "change": "5.77", "market_id": "17", "circulate_market_value": "35159198000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 41, "hot_rank_chg": -28, "stock_cnt": 5872, "price": "37.51", "change": "0.29", "market_id": "33", "circulate_market_value": "40464563000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 42, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "15.56", "change": "-9.90", "market_id": "17", "circulate_market_value": "2489600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 43, "hot_rank_chg": -27, "stock_cnt": 5872, "price": "204.10", "change": "1.95", "market_id": "33", "circulate_market_value": "282948260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 44, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "10.50", "change": "-2.60", "market_id": "33", "circulate_market_value": "21861019000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.03}, {"name": "足球", "change_pct": 0.11}, {"name": "阿里巴巴概念股", "change_pct": 0.49}, {"name": "拼多多概念股", "change_pct": 0.61}, {"name": "网红/MCN", "change_pct": 0.14}, {"name": "大消费", "change_pct": -0.3}, {"name": "盲盒", "change_pct": 0.22}, {"name": "短剧/互动影游", "change_pct": 0.16}, {"name": "IP经济/谷子经济", "change_pct": 0.26}, {"name": "首发经济", "change_pct": -0.25}, {"name": "小红书概念股", "change_pct": 0.4}, {"name": "服务消费", "change_pct": -0.32}]}, {"code": "603690", "name": "至纯科技", "hot_rank": 45, "hot_rank_chg": 42, "stock_cnt": 5872, "price": "28.03", "change": "2.67", "market_id": "17", "circulate_market_value": "10734487900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002248", "name": "华东数控", "hot_rank": 46, "hot_rank_chg": 29, "stock_cnt": 5872, "price": "11.91", "change": "-2.14", "market_id": "33", "circulate_market_value": "3662272600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高铁轨交", "change_pct": 0.23}, {"name": "智能制造", "change_pct": 0.49}, {"name": "工业母机", "change_pct": 0.47}]}, {"code": "600522", "name": "中天科技", "hot_rank": 47, "hot_rank_chg": -10, "stock_cnt": 5872, "price": "34.01", "change": "1.37", "market_id": "17", "circulate_market_value": "116074418000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 48, "hot_rank_chg": -14, "stock_cnt": 5872, "price": "43.99", "change": "1.57", "market_id": "17", "circulate_market_value": "174710110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 49, "hot_rank_chg": -14, "stock_cnt": 5872, "price": "11.17", "change": "0.63", "market_id": "33", "circulate_market_value": "9905072700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 0.97}, {"name": "手机产业链", "change_pct": 0.9}, {"name": "超高清视频", "change_pct": 0.47}, {"name": "锂电池", "change_pct": 0.31}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "OLED", "change_pct": 0.97}, {"name": "包装印刷", "change_pct": 0.46}, {"name": "光伏", "change_pct": 0.27}, {"name": "新能源汽车", "change_pct": 0.37}, {"name": "小米概念股", "change_pct": 0.83}, {"name": "液晶面板/LCD", "change_pct": 0.94}, {"name": "可降解塑料", "change_pct": 0.22}, {"name": "华为产业链", "change_pct": 0.7}, {"name": "PET复合铜箔", "change_pct": 1.08}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 50, "hot_rank_chg": -23, "stock_cnt": 5872, "price": "16.00", "change": "0.69", "market_id": "33", "circulate_market_value": "55646885000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 51, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "7.46", "change": "-1.71", "market_id": "17", "circulate_market_value": "8495129500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.29}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "光伏", "change_pct": 0.27}, {"name": "特高压", "change_pct": 0.53}, {"name": "智能电网", "change_pct": 0.51}]}, {"code": "000779", "name": "甘咨询", "hot_rank": 52, "hot_rank_chg": -34, "stock_cnt": 5872, "price": "11.50", "change": "-3.52", "market_id": "33", "circulate_market_value": "5344889600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.29}, {"name": "云计算数据中心", "change_pct": 1.01}, {"name": "水利", "change_pct": 0.03}, {"name": "大数据", "change_pct": 0.43}, {"name": "海绵城市", "change_pct": -0.09}, {"name": "风电", "change_pct": 0.37}, {"name": "乡村振兴", "change_pct": -0.08}, {"name": "数字经济", "change_pct": 0.54}, {"name": "大基建", "change_pct": -0.01}, {"name": "东数西算/算力", "change_pct": 1.29}, {"name": "新型城镇化", "change_pct": 0.33}, {"name": "国企改革", "change_pct": 0.08}, {"name": "旧改", "change_pct": 0.29}, {"name": "西部大开发", "change_pct": -0.27}, {"name": "低空经济", "change_pct": 0.42}, {"name": "房屋检测", "change_pct": -0.2}]}, {"code": "000063", "name": "中兴通讯", "hot_rank": 53, "hot_rank_chg": 20, "stock_cnt": 5872, "price": "35.30", "change": "-0.81", "market_id": "33", "circulate_market_value": "142175030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002329", "name": "皇氏集团", "hot_rank": 54, "hot_rank_chg": 36, "stock_cnt": 5872, "price": "4.62", "change": "10.00", "market_id": "33", "circulate_market_value": "3010359300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.22}, {"name": "乳业（奶粉）", "change_pct": 0.62}, {"name": "股权转让", "change_pct": 0.51}, {"name": "一带一路", "change_pct": 0.29}, {"name": "优化生育（三孩）", "change_pct": 0.12}, {"name": "智慧城市", "change_pct": 0.54}, {"name": "食品", "change_pct": -0.11}, {"name": "基因编辑", "change_pct": 0.02}, {"name": "社区团购", "change_pct": 0.32}, {"name": "大农业", "change_pct": 0.03}, {"name": "5G消息/RCS", "change_pct": 0.48}, {"name": "广西概念", "change_pct": 0.22}, {"name": "饮料", "change_pct": 0.27}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 55, "hot_rank_chg": 45, "stock_cnt": 5872, "price": "77.01", "change": "2.65", "market_id": "33", "circulate_market_value": "112960717000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001696", "name": "宗申动力", "hot_rank": 56, "hot_rank_chg": 59, "stock_cnt": 5872, "price": "17.98", "change": "3.99", "market_id": "33", "circulate_market_value": "16027340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 57, "hot_rank_chg": -17, "stock_cnt": 5872, "price": "416.88", "change": "2.28", "market_id": "33", "circulate_market_value": "68797312000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 58, "hot_rank_chg": -9, "stock_cnt": 5872, "price": "67.99", "change": "3.64", "market_id": "17", "circulate_market_value": "1349199800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 59, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "250.10", "change": "4.19", "market_id": "33", "circulate_market_value": "272205850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 60, "hot_rank_chg": -36, "stock_cnt": 5872, "price": "71.59", "change": "1.65", "market_id": "33", "circulate_market_value": "104052629000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 61, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "19.56", "change": "4.38", "market_id": "17", "circulate_market_value": "19363615000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600683", "name": "京投发展", "hot_rank": 62, "hot_rank_chg": 70, "stock_cnt": 5872, "price": "12.93", "change": "10.04", "market_id": "17", "circulate_market_value": "9578254300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.31}, {"name": "光通信", "change_pct": 1.9}, {"name": "京津冀", "change_pct": 0.26}, {"name": "土地流转", "change_pct": 0.01}, {"name": "北京城市规划", "change_pct": 0.38}, {"name": "物业管理", "change_pct": -0.15}, {"name": "国企改革", "change_pct": 0.08}]}, {"code": "600376", "name": "首开股份", "hot_rank": 63, "hot_rank_chg": 32, "stock_cnt": 5872, "price": "4.34", "change": "-1.81", "market_id": "17", "circulate_market_value": "11195313200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.31}, {"name": "京津冀", "change_pct": 0.26}, {"name": "雄安新区", "change_pct": 0.16}, {"name": "北京城市规划", "change_pct": 0.38}, {"name": "住房租赁", "change_pct": 0.08}, {"name": "物业管理", "change_pct": -0.15}]}, {"code": "600881", "name": "亚泰集团", "hot_rank": 64, "hot_rank_chg": 107, "stock_cnt": 5872, "price": "2.15", "change": "4.37", "market_id": "17", "circulate_market_value": "6949124600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.29}, {"name": "中药", "change_pct": -0.18}, {"name": "创新药", "change_pct": -0.37}, {"name": "股权转让", "change_pct": 0.51}, {"name": "水泥", "change_pct": 0.08}, {"name": "保健品", "change_pct": -0.22}, {"name": "医药", "change_pct": -0.28}, {"name": "疫苗", "change_pct": -0.26}, {"name": "振兴东北", "change_pct": -0.0}, {"name": "食品", "change_pct": -0.11}, {"name": "物业管理", "change_pct": -0.15}, {"name": "低价股", "change_pct": -0.02}, {"name": "国企改革", "change_pct": 0.08}]}, {"code": "603259", "name": "药明康德", "hot_rank": 66, "hot_rank_chg": -19, "stock_cnt": 5872, "price": "158.90", "change": "-0.09", "market_id": "17", "circulate_market_value": "393004230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 67, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "33.58", "change": "0.00", "market_id": "17", "circulate_market_value": "691808210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 68, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "63.82", "change": "1.53", "market_id": "33", "circulate_market_value": "96843801000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002400", "name": "省广集团", "hot_rank": 69, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "7.48", "change": "2.05", "market_id": "33", "circulate_market_value": "12911711300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.22}, {"name": "人工智能", "change_pct": 0.48}, {"name": "云计算数据中心", "change_pct": 1.01}, {"name": "大数据", "change_pct": 0.43}, {"name": "百度概念股", "change_pct": 0.19}, {"name": "腾讯概念股", "change_pct": 0.83}, {"name": "传媒", "change_pct": 0.01}, {"name": "快手概念股", "change_pct": 0.37}, {"name": "字节跳动概念股", "change_pct": 0.56}, {"name": "国企改革", "change_pct": 0.08}, {"name": "横琴新区", "change_pct": 0.34}, {"name": "网红/MCN", "change_pct": 0.14}, {"name": "5G消息/RCS", "change_pct": 0.48}, {"name": "AI营销", "change_pct": 0.22}, {"name": "短剧/互动影游", "change_pct": 0.16}, {"name": "小红书概念股", "change_pct": 0.4}, {"name": "区块链", "change_pct": 0.4}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 70, "hot_rank_chg": -31, "stock_cnt": 5872, "price": "75.00", "change": "1.35", "market_id": "33", "circulate_market_value": "63980474000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 71, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "35.26", "change": "0.03", "market_id": "33", "circulate_market_value": "53522227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 72, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "41.00", "change": "1.61", "market_id": "33", "circulate_market_value": "64540379000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300862", "name": "蓝盾光电", "hot_rank": 73, "hot_rank_chg": 77, "stock_cnt": 5872, "price": "39.41", "change": "20.01", "market_id": "33", "circulate_market_value": "5969472400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 74, "hot_rank_chg": 10, "stock_cnt": 5872, "price": "3.73", "change": "-3.37", "market_id": "33", "circulate_market_value": "7833573900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.18}, {"name": "维生素", "change_pct": 0.15}, {"name": "基因测序", "change_pct": -0.08}, {"name": "民营医院", "change_pct": 0.1}, {"name": "医药", "change_pct": -0.28}, {"name": "化学原料药", "change_pct": -0.23}, {"name": "PD-1抑制剂", "change_pct": -0.68}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 75, "hot_rank_chg": -15, "stock_cnt": 5872, "price": "191.00", "change": "3.23", "market_id": "33", "circulate_market_value": "150189120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605286", "name": "同力天启", "hot_rank": 76, "hot_rank_chg": 119, "stock_cnt": 5872, "price": "34.09", "change": "10.00", "market_id": "17", "circulate_market_value": "5727120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 77, "hot_rank_chg": -16, "stock_cnt": 5872, "price": "76.30", "change": "-1.80", "market_id": "17", "circulate_market_value": "31768856000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002582", "name": "好想你", "hot_rank": 78, "hot_rank_chg": 163, "stock_cnt": 5872, "price": "11.00", "change": "-1.34", "market_id": "33", "circulate_market_value": "3786635400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -0.27}, {"name": "教育", "change_pct": -0.1}, {"name": "休闲食品", "change_pct": -0.12}, {"name": "食品", "change_pct": -0.11}, {"name": "大农业", "change_pct": 0.03}, {"name": "预制菜", "change_pct": -0.16}, {"name": "人造肉", "change_pct": -0.1}, {"name": "职业教育", "change_pct": 0.02}, {"name": "网红/MCN", "change_pct": 0.14}, {"name": "饮料", "change_pct": 0.27}, {"name": "IP经济/谷子经济", "change_pct": 0.26}, {"name": "蜜雪冰城概念股", "change_pct": -0.28}]}, {"code": "002827", "name": "高争民爆", "hot_rank": 79, "hot_rank_chg": -27, "stock_cnt": 5872, "price": "60.30", "change": "-1.50", "market_id": "33", "circulate_market_value": "16642723000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 80, "hot_rank_chg": -12, "stock_cnt": 5872, "price": "6.99", "change": "0.14", "market_id": "33", "circulate_market_value": "7220221200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.12}, {"name": "锂电池", "change_pct": 0.31}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "铜箔/覆铜板", "change_pct": 1.39}, {"name": "粤港澳大湾区", "change_pct": 0.04}, {"name": "新能源汽车", "change_pct": 0.37}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.34}]}, {"code": "603897", "name": "长城科技", "hot_rank": 81, "hot_rank_chg": 76, "stock_cnt": 5872, "price": "32.04", "change": "-0.03", "market_id": "17", "circulate_market_value": "6614199200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000720", "name": "新能泰山", "hot_rank": 82, "hot_rank_chg": 209, "stock_cnt": 5872, "price": "4.00", "change": "-0.99", "market_id": "33", "circulate_market_value": "5026126300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.05}, {"name": "房地产", "change_pct": 0.31}, {"name": "电力体制改革", "change_pct": -0.17}, {"name": "物业管理", "change_pct": -0.15}, {"name": "国企改革", "change_pct": 0.08}, {"name": "供应链金融", "change_pct": 0.25}, {"name": "光纤概念", "change_pct": 1.41}]}, {"code": "300502", "name": "新易盛", "hot_rank": 83, "hot_rank_chg": -29, "stock_cnt": 5872, "price": "444.40", "change": "3.78", "market_id": "33", "circulate_market_value": "557385660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002379", "name": "宏桥控股", "hot_rank": 84, "hot_rank_chg": 34, "stock_cnt": 5872, "price": "20.90", "change": "-2.06", "market_id": "33", "circulate_market_value": "23750211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 85, "hot_rank_chg": -19, "stock_cnt": 5872, "price": "423.20", "change": "2.15", "market_id": "33", "circulate_market_value": "119279721000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 86, "hot_rank_chg": 24, "stock_cnt": 5872, "price": "12.30", "change": "-1.36", "market_id": "17", "circulate_market_value": "7316390500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "数字孪生", "change_pct": 0.38}, {"name": "VR&AR", "change_pct": 0.8}, {"name": "装修装饰", "change_pct": 0.41}, {"name": "数字经济", "change_pct": 0.54}, {"name": "百度概念股", "change_pct": 0.19}, {"name": "全息概念", "change_pct": 0.83}, {"name": "NFT", "change_pct": 0.11}, {"name": "元宇宙", "change_pct": 0.32}, {"name": "虚拟数字人", "change_pct": 0.21}, {"name": "网红/MCN", "change_pct": 0.14}, {"name": "ChatGPT", "change_pct": 0.52}, {"name": "智能眼镜/MR头显", "change_pct": 0.9}, {"name": "多模态", "change_pct": 0.48}, {"name": "AI视频", "change_pct": 0.52}]}, {"code": "000859", "name": "国风新材", "hot_rank": 87, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "10.31", "change": "1.08", "market_id": "33", "circulate_market_value": "9236989500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.94}, {"name": "安徽国企改革", "change_pct": 0.14}, {"name": "装修装饰", "change_pct": 0.41}, {"name": "碳基材料", "change_pct": 0.21}, {"name": "建筑节能", "change_pct": 0.1}, {"name": "光刻机（胶）", "change_pct": 1.12}, {"name": "国企改革", "change_pct": 0.08}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 88, "hot_rank_chg": -32, "stock_cnt": 5872, "price": "22.00", "change": "-1.87", "market_id": "33", "circulate_market_value": "9259030700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 89, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "27.50", "change": "2.31", "market_id": "17", "circulate_market_value": "23706441000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 90, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "158.10", "change": "1.88", "market_id": "33", "circulate_market_value": "50358446000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 91, "hot_rank_chg": -14, "stock_cnt": 5872, "price": "352.00", "change": "1.80", "market_id": "17", "circulate_market_value": "143031090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002047", "name": "宝鹰股份", "hot_rank": 92, "hot_rank_chg": 128, "stock_cnt": 5872, "price": "4.28", "change": "9.18", "market_id": "33", "circulate_market_value": "6489160300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.51}, {"name": "一带一路", "change_pct": 0.29}, {"name": "ST摘帽", "change_pct": 0.19}, {"name": "VR&AR", "change_pct": 0.8}, {"name": "装修装饰", "change_pct": 0.41}, {"name": "装配式建筑", "change_pct": 0.27}, {"name": "智慧城市", "change_pct": 0.54}, {"name": "BIPV概念", "change_pct": 0.2}, {"name": "旧改", "change_pct": 0.29}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 93, "hot_rank_chg": -14, "stock_cnt": 5872, "price": "28.73", "change": "1.48", "market_id": "17", "circulate_market_value": "19863221000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000887", "name": "中鼎股份", "hot_rank": 94, "hot_rank_chg": 75, "stock_cnt": 5872, "price": "23.68", "change": "9.94", "market_id": "33", "circulate_market_value": "31124296000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 95, "hot_rank_chg": -12, "stock_cnt": 5872, "price": "286.00", "change": "2.37", "market_id": "33", "circulate_market_value": "247445750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 96, "hot_rank_chg": 9, "stock_cnt": 5872, "price": "108.67", "change": "2.21", "market_id": "33", "circulate_market_value": "109211791000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002589", "name": "瑞康医药", "hot_rank": 97, "hot_rank_chg": 112, "stock_cnt": 5872, "price": "3.40", "change": "-4.22", "market_id": "33", "circulate_market_value": "4643011300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.18}, {"name": "体外诊断", "change_pct": -0.06}, {"name": "农业种植", "change_pct": -0.27}, {"name": "人工智能", "change_pct": 0.48}, {"name": "互联网医疗", "change_pct": -0.19}, {"name": "医药商业", "change_pct": -0.57}, {"name": "养老产业", "change_pct": -0.21}, {"name": "冷链", "change_pct": 0.14}, {"name": "医药", "change_pct": -0.28}, {"name": "破净股", "change_pct": -0.04}, {"name": "大农业", "change_pct": 0.03}, {"name": "口腔", "change_pct": 0.06}, {"name": "医疗信息化", "change_pct": 0.33}, {"name": "新冠病毒防治", "change_pct": 0.16}, {"name": "医疗耗材供应链SPD", "change_pct": -0.96}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 98, "hot_rank_chg": -56, "stock_cnt": 5872, "price": "21.23", "change": "0.00", "market_id": "33", "circulate_market_value": "9603152700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 99, "hot_rank_chg": -27, "stock_cnt": 5872, "price": "34.71", "change": "0.00", "market_id": "33", "circulate_market_value": "27158324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 100, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "12.71", "change": "1.93", "market_id": "17", "circulate_market_value": "16309454000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.24}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "智能制造", "change_pct": 0.49}, {"name": "工业互联网", "change_pct": 0.43}, {"name": "培育钻石", "change_pct": 0.71}, {"name": "金刚线", "change_pct": 0.91}, {"name": "国资入股", "change_pct": 0.2}, {"name": "深地经济", "change_pct": -0.28}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告"};