const UPDATE_TIME = "2026-08-05 00:04";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 6.76,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "连续263天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI应用",
    "rise": 2.95,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "算力租赁",
    "rise": 4.63,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续127天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "创新药",
    "rise": 2.23,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续93天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 6.0,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续216天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "商业航天",
    "rise": 2.86,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "连续192天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 2.84,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续427天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": 5.66,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "连续86天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "无人驾驶",
    "rise": 2.62,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "智能汽车ETF",
    "code": "885736"
  },
  {
    "name": "人工智能",
    "rise": 2.53,
    "rate": 0,
    "tag": "33家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": -1,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "机器人概念",
    "rise": 2.44,
    "rate": 0,
    "tag": "33家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "东数西算(算力)",
    "rise": 4.12,
    "rate": 0,
    "tag": "30家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "芯片概念",
    "rise": 4.43,
    "rate": 0,
    "tag": "48家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "先进封装",
    "rise": 6.04,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "MLCC概念",
    "rise": 4.9,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "886112"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 3.63,
    "rate": 0,
    "tag": "35家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "光刻机",
    "rise": 6.64,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "科创半导体ETF",
    "code": "886054"
  },
  {
    "name": "核电",
    "rise": 1.83,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "电力ETF",
    "code": "885571"
  },
  {
    "name": "CRO概念",
    "rise": 5.6,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "光纤概念",
    "rise": 5.77,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续92天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  }
];
const THS_EVENTS = [
  {
    "title": "修订后的《集成电路布图设计保护条例》公布 集成光子、量子等功能的集成电路布图设计被纳入保护范围",
    "desc": "",
    "heat": 923872,
    "direction": "芯片半导体",
    "themes": [
      "芯片概念",
      "半导体",
      "EDA"
    ],
    "stocks": [
      {
        "name": "光库科技",
        "code": "300620",
        "chg": 20.000944
      }
    ]
  },
  {
    "title": "存储芯片巨头，重大发布",
    "desc": "",
    "heat": 761674,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "联讯仪器",
        "code": "688808",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "全国首单Token算力工厂科创债券落地无锡",
    "desc": "",
    "heat": 753380,
    "direction": "Token工厂",
    "themes": [
      "东数西算(算力)",
      "算力租赁"
    ],
    "stocks": [
      {
        "name": "汉鑫科技",
        "code": "920092",
        "chg": 29.987185
      }
    ]
  },
  {
    "title": "英伟达宣告共同封装光学进入量产 光通讯打强心针",
    "desc": "",
    "heat": 709338,
    "direction": "英伟达CPO",
    "themes": [
      "英伟达概念",
      "CPO封装"
    ],
    "stocks": [
      {
        "name": "蘅东光",
        "code": "920045",
        "chg": 20.825801
      }
    ]
  },
  {
    "title": "药明康德上半年归母净利润110.8亿元 在手订单大增超25%",
    "desc": "",
    "heat": 458147,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗",
      "实验猴"
    ],
    "stocks": [
      {
        "name": "义翘神州",
        "code": "301047",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "可重复使用火箭新进展！星河动力航天将择机发射智神星一号",
    "desc": "",
    "heat": 396982,
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
        "name": "震有科技",
        "code": "688418",
        "chg": 12.19126
      }
    ]
  },
  {
    "title": "2026年暑期档电影总票房突破75亿元",
    "desc": "",
    "heat": 382818,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "捷成股份",
        "code": "300182",
        "chg": 11.937378
      }
    ]
  },
  {
    "title": "最快明天就会完全开放”！美伊谈判传来大消息，原油暴跌！特朗普：“我想给他们最后一次机会",
    "desc": "",
    "heat": 115336,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "春晖智控",
        "code": "300943",
        "chg": 12.304251
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "光电共封装CPO",
    "change": "+8.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+7.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+7.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+7.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "密集调研",
    "change": "+6.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+6.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+6.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+6.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+6.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+6.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+6.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+6.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃基板封装",
    "change": "+6.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "英伟达概念",
    "change": "+6.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+6.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+6.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+6.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PET复合铜箔",
    "change": "+6.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+6.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+6.0%",
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
    "hot_rank": 7,
    "hot_rank_chg": -1,
    "stock_cnt": 5827,
    "price": "7.88",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "12810467000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "AI营销",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.55
      },
      {
        "name": "电竞",
        "change_pct": 1.96
      },
      {
        "name": "手游",
        "change_pct": 3.68
      },
      {
        "name": "强势人气股",
        "change_pct": 4.16
      },
      {
        "name": "人工智能",
        "change_pct": 3.0
      },
      {
        "name": "游戏",
        "change_pct": 3.35
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.54
      },
      {
        "name": "快手概念股",
        "change_pct": 5.09
      },
      {
        "name": "元宇宙",
        "change_pct": 3.38
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.61
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.8
      },
      {
        "name": "web3.0",
        "change_pct": 2.92
      },
      {
        "name": "AIGC概念",
        "change_pct": 4.02
      },
      {
        "name": "数据要素",
        "change_pct": 3.12
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.79
      },
      {
        "name": "AI营销",
        "change_pct": 4.95
      },
      {
        "name": "ChatGPT",
        "change_pct": 4.67
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.43
      },
      {
        "name": "人工智能大模型",
        "change_pct": 2.64
      },
      {
        "name": "人形机器人",
        "change_pct": 3.15
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.63
      },
      {
        "name": "多模态",
        "change_pct": 4.36
      },
      {
        "name": "AI视频",
        "change_pct": 5.49
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.05
      },
      {
        "name": "小红书概念股",
        "change_pct": 4.5
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 8,
    "hot_rank_chg": -6,
    "stock_cnt": 5827,
    "price": "5.43",
    "change": "5.85",
    "market_id": "33",
    "circulate_market_value": "31791556000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.32
      },
      {
        "name": "人工智能",
        "change_pct": 3.0
      },
      {
        "name": "水利",
        "change_pct": 0.43
      },
      {
        "name": "直播/短视频",
        "change_pct": 3.63
      },
      {
        "name": "大数据",
        "change_pct": 2.8
      },
      {
        "name": "园林",
        "change_pct": 2.14
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 3.89
      },
      {
        "name": "数字经济",
        "change_pct": 2.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.54
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.79
      },
      {
        "name": "第三代半导体",
        "change_pct": 4.92
      },
      {
        "name": "快手概念股",
        "change_pct": 5.09
      },
      {
        "name": "IGBT",
        "change_pct": 3.87
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.61
      },
      {
        "name": "AIGC概念",
        "change_pct": 4.02
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.79
      },
      {
        "name": "氮化镓",
        "change_pct": 4.83
      },
      {
        "name": "AI营销",
        "change_pct": 4.95
      },
      {
        "name": "多模态",
        "change_pct": 4.36
      },
      {
        "name": "液冷服务器",
        "change_pct": 5.04
      },
      {
        "name": "小红书概念股",
        "change_pct": 4.5
      },
      {
        "name": "区块链",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 10,
    "hot_rank_chg": -3,
    "stock_cnt": 5827,
    "price": "6.45",
    "change": "7.68",
    "market_id": "17",
    "circulate_market_value": "16244389000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.55
      },
      {
        "name": "工业大麻",
        "change_pct": 2.77
      },
      {
        "name": "中药",
        "change_pct": 0.87
      },
      {
        "name": "强势人气股",
        "change_pct": 4.16
      },
      {
        "name": "保健品",
        "change_pct": 0.32
      },
      {
        "name": "民营医院",
        "change_pct": 1.06
      },
      {
        "name": "医药",
        "change_pct": 2.17
      },
      {
        "name": "化学原料药",
        "change_pct": 2.26
      },
      {
        "name": "流感",
        "change_pct": 1.61
      },
      {
        "name": "振兴东北",
        "change_pct": -0.14
      },
      {
        "name": "食品",
        "change_pct": -0.07
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 13,
    "hot_rank_chg": -2,
    "stock_cnt": 5827,
    "price": "10.66",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "3032573900.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "7",
    "change_reason": "AI教育",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 2.56
      },
      {
        "name": "密集调研",
        "change_pct": 6.77
      },
      {
        "name": "ST摘帽",
        "change_pct": 3.98
      },
      {
        "name": "强势人气股",
        "change_pct": 4.16
      },
      {
        "name": "教育",
        "change_pct": 2.25
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.96
      },
      {
        "name": "职业教育",
        "change_pct": 2.28
      },
      {
        "name": "在线教育",
        "change_pct": 2.54
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 2.61
      },
      {
        "name": "华为产业链",
        "change_pct": 3.38
      },
      {
        "name": "智谱AI",
        "change_pct": 4.25
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 15,
    "hot_rank_chg": 14,
    "stock_cnt": 5827,
    "price": "3.48",
    "change": "10.13",
    "market_id": "33",
    "circulate_market_value": "6971752600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI智能体",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 3.31
      },
      {
        "name": "数字孪生",
        "change_pct": 2.97
      },
      {
        "name": "深圳本地股",
        "change_pct": 1.52
      },
      {
        "name": "强势人气股",
        "change_pct": 4.16
      },
      {
        "name": "人工智能",
        "change_pct": 3.0
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.24
      },
      {
        "name": "云计算数据中心",
        "change_pct": 3.81
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.36
      },
      {
        "name": "人脸识别",
        "change_pct": 3.04
      },
      {
        "name": "智慧停车",
        "change_pct": 2.49
      },
      {
        "name": "物联网",
        "change_pct": 2.61
      },
      {
        "name": "大数据",
        "change_pct": 2.8
      },
      {
        "name": "智慧城市",
        "change_pct": 2.51
      },
      {
        "name": "雄安新区",
        "change_pct": 0.85
      },
      {
        "name": "机器人",
        "change_pct": 2.62
      },
      {
        "name": "数字经济",
        "change_pct": 2.62
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.96
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.54
      },
      {
        "name": "建筑节能",
        "change_pct": 1.09
      },
      {
        "name": "旧改",
        "change_pct": 0.83
      },
      {
        "name": "医疗信息化",
        "change_pct": 2.64
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.88
      },
      {
        "name": "华为产业链",
        "change_pct": 3.38
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 1.27
      },
      {
        "name": "区块链",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 19,
    "hot_rank_chg": -2,
    "stock_cnt": 5827,
    "price": "12.60",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "8629770200.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "6",
    "change_reason": "干式变压器",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.11
      },
      {
        "name": "核电",
        "change_pct": 1.96
      },
      {
        "name": "强势人气股",
        "change_pct": 4.16
      },
      {
        "name": "充电桩",
        "change_pct": 2.58
      },
      {
        "name": "云计算数据中心",
        "change_pct": 3.81
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.91
      },
      {
        "name": "储能",
        "change_pct": 2.0
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.96
      },
      {
        "name": "智能电网",
        "change_pct": 2.45
      },
      {
        "name": "核聚变",
        "change_pct": 3.18
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 23,
    "hot_rank_chg": 4,
    "stock_cnt": 5827,
    "price": "5.63",
    "change": "3.88",
    "market_id": "33",
    "circulate_market_value": "199116970000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 5.04
      },
      {
        "name": "手机产业链",
        "change_pct": 4.4
      },
      {
        "name": "超高清视频",
        "change_pct": 3.18
      },
      {
        "name": "苹果产业链",
        "change_pct": 4.98
      },
      {
        "name": "电竞",
        "change_pct": 1.96
      },
      {
        "name": "半导体",
        "change_pct": 5.89
      },
      {
        "name": "人工智能",
        "change_pct": 3.0
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.24
      },
      {
        "name": "VR&AR",
        "change_pct": 4.11
      },
      {
        "name": "OLED",
        "change_pct": 5.01
      },
      {
        "name": "京津冀",
        "change_pct": 0.93
      },
      {
        "name": "物联网",
        "change_pct": 2.61
      },
      {
        "name": "指纹识别",
        "change_pct": 4.86
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.4
      },
      {
        "name": "白马股",
        "change_pct": -0.49
      },
      {
        "name": "智能制造",
        "change_pct": 2.77
      },
      {
        "name": "小米概念股",
        "change_pct": 3.89
      },
      {
        "name": "国产芯片",
        "change_pct": 5.03
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 4.6
      },
      {
        "name": "全息概念",
        "change_pct": 3.59
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.79
      },
      {
        "name": "MicroLED",
        "change_pct": 4.75
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.23
      },
      {
        "name": "智能手表",
        "change_pct": 3.73
      },
      {
        "name": "MiniLED",
        "change_pct": 4.23
      },
      {
        "name": "传感器",
        "change_pct": 3.47
      },
      {
        "name": "大硅片",
        "change_pct": 5.79
      },
      {
        "name": "AI PC",
        "change_pct": 3.94
      },
      {
        "name": "华为产业链",
        "change_pct": 3.38
      },
      {
        "name": "回购",
        "change_pct": 1.31
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.43
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 6.39
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 32,
    "hot_rank_chg": -4,
    "stock_cnt": 5827,
    "price": "11.10",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "8980110800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 1.76
      },
      {
        "name": "大飞机",
        "change_pct": 1.56
      },
      {
        "name": "北斗导航",
        "change_pct": 2.65
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.36
      },
      {
        "name": "军民融合",
        "change_pct": 2.47
      },
      {
        "name": "磁悬浮",
        "change_pct": 0.93
      },
      {
        "name": "军工",
        "change_pct": 2.11
      },
      {
        "name": "碳纤维",
        "change_pct": 2.28
      },
      {
        "name": "无人机",
        "change_pct": 2.37
      },
      {
        "name": "航天",
        "change_pct": 2.91
      },
      {
        "name": "卫星互联网",
        "change_pct": 3.26
      },
      {
        "name": "低空经济",
        "change_pct": 2.22
      },
      {
        "name": "海洋经济",
        "change_pct": 1.35
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 34,
    "hot_rank_chg": 6,
    "stock_cnt": 5827,
    "price": "9.20",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "16460072000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.29
      },
      {
        "name": "纯碱",
        "change_pct": -1.15
      },
      {
        "name": "食品",
        "change_pct": -0.07
      },
      {
        "name": "土壤修复",
        "change_pct": 0.78
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.8
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 5.08
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 4.23
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 42,
    "hot_rank_chg": 2,
    "stock_cnt": 5827,
    "price": "6.56",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "7469585800.00",
    "change_type": "1",
    "change_section": "10",
    "change_days": "6",
    "change_reason": "风光储",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 3.98
      },
      {
        "name": "强势人气股",
        "change_pct": 4.16
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.36
      },
      {
        "name": "航母",
        "change_pct": 1.34
      },
      {
        "name": "光伏",
        "change_pct": 1.97
      },
      {
        "name": "风电",
        "change_pct": 1.21
      },
      {
        "name": "军工",
        "change_pct": 2.11
      },
      {
        "name": "机器人",
        "change_pct": 2.62
      },
      {
        "name": "储能",
        "change_pct": 2.0
      },
      {
        "name": "国企改革",
        "change_pct": 0.33
      },
      {
        "name": "宁夏概念",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "603106",
    "name": "恒银科技",
    "hot_rank": 46,
    "hot_rank_chg": 7,
    "stock_cnt": 5827,
    "price": "9.04",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "4705500800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "AI应用",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 2.09
      },
      {
        "name": "人工智能",
        "change_pct": 3.0
      },
      {
        "name": "人脸识别",
        "change_pct": 3.04
      },
      {
        "name": "智慧停车",
        "change_pct": 2.49
      },
      {
        "name": "雄安新区",
        "change_pct": 0.85
      },
      {
        "name": "信创",
        "change_pct": 3.28
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.61
      },
      {
        "name": "AIGC概念",
        "change_pct": 4.02
      },
      {
        "name": "智慧政务",
        "change_pct": 2.96
      },
      {
        "name": "医疗信息化",
        "change_pct": 2.64
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 48,
    "hot_rank_chg": 8,
    "stock_cnt": 5827,
    "price": "5.92",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "6741443200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "特高压",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.7
      },
      {
        "name": "光伏",
        "change_pct": 1.97
      },
      {
        "name": "特高压",
        "change_pct": 2.39
      },
      {
        "name": "智能电网",
        "change_pct": 2.45
      }
    ]
  },
  {
    "code": "600666",
    "name": "奥瑞德",
    "hot_rank": 62,
    "hot_rank_chg": 9,
    "stock_cnt": 5827,
    "price": "3.78",
    "change": "9.88",
    "market_id": "17",
    "circulate_market_value": "9458026700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 3.81
      },
      {
        "name": "3D玻璃",
        "change_pct": 4.28
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.8
      },
      {
        "name": "词元概念/Token",
        "change_pct": 5.68
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 4.23
      },
      {
        "name": "RWA",
        "change_pct": 2.57
      }
    ]
  },
  {
    "code": "000820",
    "name": "神雾节能",
    "hot_rank": 63,
    "hot_rank_chg": 6,
    "stock_cnt": 5827,
    "price": "4.26",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "1265078900.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "摘帽",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 3.98
      },
      {
        "name": "固废处理",
        "change_pct": 0.71
      },
      {
        "name": "复牌股",
        "change_pct": 3.26
      },
      {
        "name": "环保",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "002579",
    "name": "中京电子",
    "hot_rank": 64,
    "hot_rank_chg": 17,
    "stock_cnt": 5827,
    "price": "11.80",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "6884260300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "PCB",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.32
      },
      {
        "name": "折叠屏",
        "change_pct": 5.04
      },
      {
        "name": "手机产业链",
        "change_pct": 4.4
      },
      {
        "name": "电子烟",
        "change_pct": 3.48
      },
      {
        "name": "半导体",
        "change_pct": 5.89
      },
      {
        "name": "5G",
        "change_pct": 5.05
      },
      {
        "name": "强势人气股",
        "change_pct": 4.16
      },
      {
        "name": "VR&AR",
        "change_pct": 4.11
      },
      {
        "name": "光通信",
        "change_pct": 7.14
      },
      {
        "name": "OLED",
        "change_pct": 5.01
      },
      {
        "name": "PCB板",
        "change_pct": 7.03
      },
      {
        "name": "智能音箱",
        "change_pct": 2.82
      },
      {
        "name": "WiFi",
        "change_pct": 4.38
      },
      {
        "name": "小米概念股",
        "change_pct": 3.89
      },
      {
        "name": "6G",
        "change_pct": 5.05
      },
      {
        "name": "MiniLED",
        "change_pct": 4.23
      },
      {
        "name": "AI PC",
        "change_pct": 3.94
      },
      {
        "name": "华为产业链",
        "change_pct": 3.38
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 8.38
      },
      {
        "name": "毫米波雷达",
        "change_pct": 3.77
      },
      {
        "name": "交换机",
        "change_pct": 5.92
      },
      {
        "name": "人形机器人",
        "change_pct": 3.15
      },
      {
        "name": "AI手机",
        "change_pct": 3.41
      },
      {
        "name": "AI医疗",
        "change_pct": 2.55
      }
    ]
  },
  {
    "code": "600703",
    "name": "三安光电",
    "hot_rank": 66,
    "hot_rank_chg": 28,
    "stock_cnt": 5827,
    "price": "12.70",
    "change": "3.93",
    "market_id": "17",
    "circulate_market_value": "63360538000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 5.89
      },
      {
        "name": "5G",
        "change_pct": 5.05
      },
      {
        "name": "VR&AR",
        "change_pct": 4.11
      },
      {
        "name": "光通信",
        "change_pct": 7.14
      },
      {
        "name": "3D感应",
        "change_pct": 3.57
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.4
      },
      {
        "name": "LED",
        "change_pct": 2.97
      },
      {
        "name": "国产芯片",
        "change_pct": 5.03
      },
      {
        "name": "MicroLED",
        "change_pct": 4.75
      },
      {
        "name": "第三代半导体",
        "change_pct": 4.92
      },
      {
        "name": "激光雷达",
        "change_pct": 5.74
      },
      {
        "name": "华为汽车",
        "change_pct": 1.22
      },
      {
        "name": "MiniLED",
        "change_pct": 4.23
      },
      {
        "name": "氮化镓",
        "change_pct": 4.83
      },
      {
        "name": "大基金概念",
        "change_pct": 5.65
      },
      {
        "name": "碳化硅",
        "change_pct": 4.97
      },
      {
        "name": "磷化铟",
        "change_pct": 6.64
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 8.38
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 67,
    "hot_rank_chg": 19,
    "stock_cnt": 5827,
    "price": "4.17",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "2964188000.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "AI应用",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 3.0
      },
      {
        "name": "影视",
        "change_pct": 3.37
      },
      {
        "name": "旅游",
        "change_pct": -0.26
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.61
      },
      {
        "name": "AI营销",
        "change_pct": 4.95
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 4.63
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.05
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 71,
    "hot_rank_chg": -21,
    "stock_cnt": 5827,
    "price": "5.48",
    "change": "7.45",
    "market_id": "33",
    "circulate_market_value": "5660488200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.37
      },
      {
        "name": "锂电池",
        "change_pct": 2.44
      },
      {
        "name": "强势人气股",
        "change_pct": 4.16
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 6.4
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.42
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.91
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 74,
    "hot_rank_chg": -25,
    "stock_cnt": 5827,
    "price": "6.33",
    "change": "2.43",
    "market_id": "17",
    "circulate_market_value": "78467244000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.28
      },
      {
        "name": "核电",
        "change_pct": 1.96
      },
      {
        "name": "强势人气股",
        "change_pct": 4.16
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.13
      },
      {
        "name": "水电",
        "change_pct": -0.36
      },
      {
        "name": "火电",
        "change_pct": -0.14
      },
      {
        "name": "光伏",
        "change_pct": 1.97
      },
      {
        "name": "风电",
        "change_pct": 1.21
      },
      {
        "name": "国企改革",
        "change_pct": 0.33
      },
      {
        "name": "算电协同",
        "change_pct": 2.51
      }
    ]
  },
  {
    "code": "002348",
    "name": "高乐股份",
    "hot_rank": 80,
    "hot_rank_chg": 30,
    "stock_cnt": 5827,
    "price": "11.02",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "9956933600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "签署算力大单",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 2.56
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.73
      },
      {
        "name": "人工智能",
        "change_pct": 3.0
      },
      {
        "name": "教育",
        "change_pct": 2.25
      },
      {
        "name": "外贸受益概念",
        "change_pct": 0.99
      },
      {
        "name": "RCEP概念",
        "change_pct": 1.41
      },
      {
        "name": "固态电池",
        "change_pct": 2.27
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.8
      },
      {
        "name": "教育信息化",
        "change_pct": 2.21
      },
      {
        "name": "在线教育",
        "change_pct": 2.54
      },
      {
        "name": "玩具",
        "change_pct": 2.4
      },
      {
        "name": "盲盒",
        "change_pct": 1.46
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.05
      }
    ]
  },
  {
    "code": "000967",
    "name": "盈峰环境",
    "hot_rank": 83,
    "hot_rank_chg": -16,
    "stock_cnt": 5827,
    "price": "9.09",
    "change": "5.21",
    "market_id": "33",
    "circulate_market_value": "30521207000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 2.4
      },
      {
        "name": "核电",
        "change_pct": 1.96
      },
      {
        "name": "充电桩",
        "change_pct": 2.58
      },
      {
        "name": "固废处理",
        "change_pct": 0.71
      },
      {
        "name": "大气治理",
        "change_pct": 2.0
      },
      {
        "name": "智慧城市",
        "change_pct": 2.51
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.91
      },
      {
        "name": "环保",
        "change_pct": 1.3
      },
      {
        "name": "机器人",
        "change_pct": 2.62
      },
      {
        "name": "土壤修复",
        "change_pct": 0.78
      },
      {
        "name": "东数西算/算力",
        "change_pct": 4.8
      },
      {
        "name": "垃圾分类",
        "change_pct": 0.31
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 89,
    "hot_rank_chg": 19,
    "stock_cnt": 5827,
    "price": "7.92",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "3045617300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "CRO",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 2.97
      },
      {
        "name": "股权转让",
        "change_pct": 2.26
      },
      {
        "name": "新疆概念",
        "change_pct": 0.43
      },
      {
        "name": "医药",
        "change_pct": 2.17
      },
      {
        "name": "流感",
        "change_pct": 1.61
      },
      {
        "name": "国资入股",
        "change_pct": 1.12
      },
      {
        "name": "减肥药",
        "change_pct": 3.42
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 93,
    "hot_rank_chg": 14,
    "stock_cnt": 5827,
    "price": "11.13",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "6620441100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "AI视频",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 2.97
      },
      {
        "name": "VR&AR",
        "change_pct": 4.11
      },
      {
        "name": "装修装饰",
        "change_pct": 2.18
      },
      {
        "name": "数字经济",
        "change_pct": 2.62
      },
      {
        "name": "百度概念股",
        "change_pct": 2.35
      },
      {
        "name": "全息概念",
        "change_pct": 3.59
      },
      {
        "name": "NFT",
        "change_pct": 3.01
      },
      {
        "name": "元宇宙",
        "change_pct": 3.38
      },
      {
        "name": "虚拟数字人",
        "change_pct": 3.61
      },
      {
        "name": "网红/MCN",
        "change_pct": 2.3
      },
      {
        "name": "ChatGPT",
        "change_pct": 4.67
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.43
      },
      {
        "name": "多模态",
        "change_pct": 4.36
      },
      {
        "name": "AI视频",
        "change_pct": 5.49
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 95,
    "hot_rank_chg": -20,
    "stock_cnt": 5827,
    "price": "5.86",
    "change": "3.35",
    "market_id": "33",
    "circulate_market_value": "7598870800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.87
      },
      {
        "name": "创新药",
        "change_pct": 2.97
      },
      {
        "name": "央企改革",
        "change_pct": 0.28
      },
      {
        "name": "医疗器械",
        "change_pct": 1.65
      },
      {
        "name": "强势人气股",
        "change_pct": 4.16
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.24
      },
      {
        "name": "保健品",
        "change_pct": 0.32
      },
      {
        "name": "民营医院",
        "change_pct": 1.06
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 3.16
      },
      {
        "name": "医药",
        "change_pct": 2.17
      },
      {
        "name": "化学原料药",
        "change_pct": 2.26
      },
      {
        "name": "海南概念",
        "change_pct": 1.21
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": 2.92
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.07
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.17
      },
      {
        "name": "食品",
        "change_pct": -0.07
      },
      {
        "name": "国企改革",
        "change_pct": 0.33
      },
      {
        "name": "医疗信息化",
        "change_pct": 2.64
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.88
      },
      {
        "name": "自贸区",
        "change_pct": 0.03
      },
      {
        "name": "合成生物",
        "change_pct": 2.11
      }
    ]
  },
  {
    "code": "601611",
    "name": "中国核建",
    "hot_rank": 99,
    "hot_rank_chg": -23,
    "stock_cnt": 5827,
    "price": "12.12",
    "change": "4.39",
    "market_id": "17",
    "circulate_market_value": "36527671000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.28
      },
      {
        "name": "核电",
        "change_pct": 1.96
      },
      {
        "name": "军工集团",
        "change_pct": 1.05
      },
      {
        "name": "水利",
        "change_pct": 0.43
      },
      {
        "name": "军工",
        "change_pct": 2.11
      },
      {
        "name": "中字头",
        "change_pct": -0.68
      },
      {
        "name": "大基建",
        "change_pct": 0.09
      },
      {
        "name": "国企改革",
        "change_pct": 0.33
      },
      {
        "name": "核聚变",
        "change_pct": 3.18
      },
      {
        "name": "钍基熔盐堆",
        "change_pct": 0.97
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "300308", "name": "中际旭创", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5827, "price": "1021.99", "change": "13.24", "market_id": "33", "circulate_market_value": "1134347350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 2, "hot_rank_chg": 16, "stock_cnt": 5827, "price": "75.19", "change": "10.01", "market_id": "33", "circulate_market_value": "49101749000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟"}, {"code": "603259", "name": "药明康德", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5827, "price": "141.35", "change": "10.00", "market_id": "17", "circulate_market_value": "349598160000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "业绩超预期"}, {"code": "000815", "name": "美利云", "hot_rank": 4, "hot_rank_chg": 6, "stock_cnt": 5827, "price": "18.37", "change": "10.00", "market_id": "33", "circulate_market_value": "12771982000.00", "change_type": "1", "change_section": "12", "change_days": "7", "change_reason": "算力租赁"}, {"code": "300274", "name": "阳光电源", "hot_rank": 5, "hot_rank_chg": 21, "stock_cnt": 5827, "price": "106.34", "change": "2.51", "market_id": "33", "circulate_market_value": "168817590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5827, "price": "55.00", "change": "0.02", "market_id": "17", "circulate_market_value": "247667140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5827, "price": "7.88", "change": "10.06", "market_id": "33", "circulate_market_value": "12810467000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI营销", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.55}, {"name": "电竞", "change_pct": 1.96}, {"name": "手游", "change_pct": 3.68}, {"name": "强势人气股", "change_pct": 4.16}, {"name": "人工智能", "change_pct": 3.0}, {"name": "游戏", "change_pct": 3.35}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.62}, {"name": "腾讯概念股", "change_pct": 3.54}, {"name": "快手概念股", "change_pct": 5.09}, {"name": "元宇宙", "change_pct": 3.38}, {"name": "虚拟数字人", "change_pct": 3.61}, {"name": "东数西算/算力", "change_pct": 4.8}, {"name": "web3.0", "change_pct": 2.92}, {"name": "AIGC概念", "change_pct": 4.02}, {"name": "数据要素", "change_pct": 3.12}, {"name": "字节跳动概念股", "change_pct": 3.79}, {"name": "AI营销", "change_pct": 4.95}, {"name": "ChatGPT", "change_pct": 4.67}, {"name": "智能眼镜/MR头显", "change_pct": 4.43}, {"name": "人工智能大模型", "change_pct": 2.64}, {"name": "人形机器人", "change_pct": 3.15}, {"name": "短剧/互动影游", "change_pct": 4.63}, {"name": "多模态", "change_pct": 4.36}, {"name": "AI视频", "change_pct": 5.49}, {"name": "IP经济/谷子经济", "change_pct": 2.05}, {"name": "小红书概念股", "change_pct": 4.5}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 8, "hot_rank_chg": -6, "stock_cnt": 5827, "price": "5.43", "change": "5.85", "market_id": "33", "circulate_market_value": "31791556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.32}, {"name": "人工智能", "change_pct": 3.0}, {"name": "水利", "change_pct": 0.43}, {"name": "直播/短视频", "change_pct": 3.63}, {"name": "大数据", "change_pct": 2.8}, {"name": "园林", "change_pct": 2.14}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 3.89}, {"name": "数字经济", "change_pct": 2.62}, {"name": "腾讯概念股", "change_pct": 3.54}, {"name": "理想汽车概念股", "change_pct": 1.79}, {"name": "第三代半导体", "change_pct": 4.92}, {"name": "快手概念股", "change_pct": 5.09}, {"name": "IGBT", "change_pct": 3.87}, {"name": "虚拟数字人", "change_pct": 3.61}, {"name": "AIGC概念", "change_pct": 4.02}, {"name": "字节跳动概念股", "change_pct": 3.79}, {"name": "氮化镓", "change_pct": 4.83}, {"name": "AI营销", "change_pct": 4.95}, {"name": "多模态", "change_pct": 4.36}, {"name": "液冷服务器", "change_pct": 5.04}, {"name": "小红书概念股", "change_pct": 4.5}, {"name": "区块链", "change_pct": 2.16}]}, {"code": "002384", "name": "东山精密", "hot_rank": 9, "hot_rank_chg": -4, "stock_cnt": 5827, "price": "179.09", "change": "10.00", "market_id": "33", "circulate_market_value": "248276360000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "600664", "name": "哈药股份", "hot_rank": 10, "hot_rank_chg": -3, "stock_cnt": 5827, "price": "6.45", "change": "7.68", "market_id": "17", "circulate_market_value": "16244389000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.55}, {"name": "工业大麻", "change_pct": 2.77}, {"name": "中药", "change_pct": 0.87}, {"name": "强势人气股", "change_pct": 4.16}, {"name": "保健品", "change_pct": 0.32}, {"name": "民营医院", "change_pct": 1.06}, {"name": "医药", "change_pct": 2.17}, {"name": "化学原料药", "change_pct": 2.26}, {"name": "流感", "change_pct": 1.61}, {"name": "振兴东北", "change_pct": -0.14}, {"name": "食品", "change_pct": -0.07}]}, {"code": "300502", "name": "新易盛", "hot_rank": 11, "hot_rank_chg": 5, "stock_cnt": 5827, "price": "448.00", "change": "13.68", "market_id": "33", "circulate_market_value": "561900930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001232", "name": "嘉立创", "hot_rank": 12, "hot_rank_chg": 2, "stock_cnt": 5827, "price": "208.01", "change": "146.28", "market_id": "33", "circulate_market_value": "9195404300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 13, "hot_rank_chg": -2, "stock_cnt": 5827, "price": "10.66", "change": "10.01", "market_id": "33", "circulate_market_value": "3032573900.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "AI教育", "xgb_concepts": [{"name": "筹码集中", "change_pct": 2.56}, {"name": "密集调研", "change_pct": 6.77}, {"name": "ST摘帽", "change_pct": 3.98}, {"name": "强势人气股", "change_pct": 4.16}, {"name": "教育", "change_pct": 2.25}, {"name": "阿里巴巴概念股", "change_pct": 2.96}, {"name": "职业教育", "change_pct": 2.28}, {"name": "在线教育", "change_pct": 2.54}, {"name": "华为鸿蒙", "change_pct": 2.61}, {"name": "华为产业链", "change_pct": 3.38}, {"name": "智谱AI", "change_pct": 4.25}]}, {"code": "000636", "name": "风华高科", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5827, "price": "54.33", "change": "4.56", "market_id": "33", "circulate_market_value": "62860503000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 15, "hot_rank_chg": 14, "stock_cnt": 5827, "price": "3.48", "change": "10.13", "market_id": "33", "circulate_market_value": "6971752600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI智能体", "xgb_concepts": [{"name": "边缘计算", "change_pct": 3.31}, {"name": "数字孪生", "change_pct": 2.97}, {"name": "深圳本地股", "change_pct": 1.52}, {"name": "强势人气股", "change_pct": 4.16}, {"name": "人工智能", "change_pct": 3.0}, {"name": "互联网医疗", "change_pct": 1.24}, {"name": "云计算数据中心", "change_pct": 3.81}, {"name": "高铁轨交", "change_pct": 1.36}, {"name": "人脸识别", "change_pct": 3.04}, {"name": "智慧停车", "change_pct": 2.49}, {"name": "物联网", "change_pct": 2.61}, {"name": "大数据", "change_pct": 2.8}, {"name": "智慧城市", "change_pct": 2.51}, {"name": "雄安新区", "change_pct": 0.85}, {"name": "机器人", "change_pct": 2.62}, {"name": "数字经济", "change_pct": 2.62}, {"name": "阿里巴巴概念股", "change_pct": 2.96}, {"name": "腾讯概念股", "change_pct": 3.54}, {"name": "建筑节能", "change_pct": 1.09}, {"name": "旧改", "change_pct": 0.83}, {"name": "医疗信息化", "change_pct": 2.64}, {"name": "新冠病毒防治", "change_pct": 1.88}, {"name": "华为产业链", "change_pct": 3.38}, {"name": "医疗耗材供应链SPD", "change_pct": 1.27}, {"name": "区块链", "change_pct": 2.16}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 16, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "15.72", "change": "6.79", "market_id": "33", "circulate_market_value": "54673064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 17, "hot_rank_chg": 17, "stock_cnt": 5827, "price": "36.19", "change": "9.17", "market_id": "17", "circulate_market_value": "30636765000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 18, "hot_rank_chg": 5, "stock_cnt": 5827, "price": "102.41", "change": "10.00", "market_id": "17", "circulate_market_value": "36941683000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "算力租赁"}, {"code": "000533", "name": "顺钠股份", "hot_rank": 19, "hot_rank_chg": -2, "stock_cnt": 5827, "price": "12.60", "change": "10.04", "market_id": "33", "circulate_market_value": "8629770200.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "干式变压器", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.11}, {"name": "核电", "change_pct": 1.96}, {"name": "强势人气股", "change_pct": 4.16}, {"name": "充电桩", "change_pct": 2.58}, {"name": "云计算数据中心", "change_pct": 3.81}, {"name": "新能源汽车", "change_pct": 1.91}, {"name": "储能", "change_pct": 2.0}, {"name": "阿里巴巴概念股", "change_pct": 2.96}, {"name": "智能电网", "change_pct": 2.45}, {"name": "核聚变", "change_pct": 3.18}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 20, "hot_rank_chg": 4, "stock_cnt": 5827, "price": "212.00", "change": "17.45", "market_id": "33", "circulate_market_value": "230738270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 21, "hot_rank_chg": -8, "stock_cnt": 5827, "price": "356.02", "change": "4.48", "market_id": "17", "circulate_market_value": "237996500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 22, "hot_rank_chg": 8, "stock_cnt": 5827, "price": "65.41", "change": "7.23", "market_id": "17", "circulate_market_value": "117045607000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 23, "hot_rank_chg": 4, "stock_cnt": 5827, "price": "5.63", "change": "3.88", "market_id": "33", "circulate_market_value": "199116970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 5.04}, {"name": "手机产业链", "change_pct": 4.4}, {"name": "超高清视频", "change_pct": 3.18}, {"name": "苹果产业链", "change_pct": 4.98}, {"name": "电竞", "change_pct": 1.96}, {"name": "半导体", "change_pct": 5.89}, {"name": "人工智能", "change_pct": 3.0}, {"name": "互联网医疗", "change_pct": 1.24}, {"name": "VR&AR", "change_pct": 4.11}, {"name": "OLED", "change_pct": 5.01}, {"name": "京津冀", "change_pct": 0.93}, {"name": "物联网", "change_pct": 2.61}, {"name": "指纹识别", "change_pct": 4.86}, {"name": "汽车零部件", "change_pct": 1.4}, {"name": "白马股", "change_pct": -0.49}, {"name": "智能制造", "change_pct": 2.77}, {"name": "小米概念股", "change_pct": 3.89}, {"name": "国产芯片", "change_pct": 5.03}, {"name": "液晶面板/LCD", "change_pct": 4.6}, {"name": "全息概念", "change_pct": 3.59}, {"name": "理想汽车概念股", "change_pct": 1.79}, {"name": "MicroLED", "change_pct": 4.75}, {"name": "钙钛矿电池", "change_pct": 2.23}, {"name": "智能手表", "change_pct": 3.73}, {"name": "MiniLED", "change_pct": 4.23}, {"name": "传感器", "change_pct": 3.47}, {"name": "大硅片", "change_pct": 5.79}, {"name": "AI PC", "change_pct": 3.94}, {"name": "华为产业链", "change_pct": 3.38}, {"name": "回购", "change_pct": 1.31}, {"name": "智能眼镜/MR头显", "change_pct": 4.43}, {"name": "玻璃基板封装", "change_pct": 6.39}]}, {"code": "001309", "name": "德明利", "hot_rank": 24, "hot_rank_chg": -12, "stock_cnt": 5827, "price": "364.18", "change": "4.35", "market_id": "33", "circulate_market_value": "60100536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 25, "hot_rank_chg": -3, "stock_cnt": 5827, "price": "50.27", "change": "6.12", "market_id": "17", "circulate_market_value": "123344797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 26, "hot_rank_chg": 5, "stock_cnt": 5827, "price": "17.15", "change": "5.34", "market_id": "17", "circulate_market_value": "35869948000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 27, "hot_rank_chg": -6, "stock_cnt": 5827, "price": "34.29", "change": "10.01", "market_id": "17", "circulate_market_value": "50131802000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光芯片订单"}, {"code": "600410", "name": "华胜天成", "hot_rank": 28, "hot_rank_chg": 5, "stock_cnt": 5827, "price": "15.62", "change": "10.00", "market_id": "17", "circulate_market_value": "17127247000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力"}, {"code": "000938", "name": "紫光股份", "hot_rank": 29, "hot_rank_chg": 3, "stock_cnt": 5827, "price": "34.32", "change": "3.69", "market_id": "33", "circulate_market_value": "98157694000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 30, "hot_rank_chg": 7, "stock_cnt": 5827, "price": "55.60", "change": "8.30", "market_id": "33", "circulate_market_value": "84370344000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 32, "hot_rank_chg": -4, "stock_cnt": 5827, "price": "11.10", "change": "10.01", "market_id": "33", "circulate_market_value": "8980110800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业航天", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.76}, {"name": "大飞机", "change_pct": 1.56}, {"name": "北斗导航", "change_pct": 2.65}, {"name": "高铁轨交", "change_pct": 1.36}, {"name": "军民融合", "change_pct": 2.47}, {"name": "磁悬浮", "change_pct": 0.93}, {"name": "军工", "change_pct": 2.11}, {"name": "碳纤维", "change_pct": 2.28}, {"name": "无人机", "change_pct": 2.37}, {"name": "航天", "change_pct": 2.91}, {"name": "卫星互联网", "change_pct": 3.26}, {"name": "低空经济", "change_pct": 2.22}, {"name": "海洋经济", "change_pct": 1.35}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 33, "hot_rank_chg": 8, "stock_cnt": 5827, "price": "172.32", "change": "10.00", "market_id": "33", "circulate_market_value": "135500460000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块"}, {"code": "600186", "name": "莲花控股", "hot_rank": 34, "hot_rank_chg": 6, "stock_cnt": 5827, "price": "9.20", "change": "10.05", "market_id": "17", "circulate_market_value": "16460072000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "调味品", "change_pct": -0.29}, {"name": "纯碱", "change_pct": -1.15}, {"name": "食品", "change_pct": -0.07}, {"name": "土壤修复", "change_pct": 0.78}, {"name": "东数西算/算力", "change_pct": 4.8}, {"name": "OpenClaw概念", "change_pct": 5.08}, {"name": "DeepSeek概念股", "change_pct": 4.23}]}, {"code": "001258", "name": "立新能源", "hot_rank": 35, "hot_rank_chg": -10, "stock_cnt": 5827, "price": "13.40", "change": "5.26", "market_id": "33", "circulate_market_value": "12506536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 36, "hot_rank_chg": -21, "stock_cnt": 5827, "price": "16.37", "change": "5.54", "market_id": "17", "circulate_market_value": "24108211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 37, "hot_rank_chg": 1, "stock_cnt": 5827, "price": "15.53", "change": "5.15", "market_id": "33", "circulate_market_value": "51600782000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 38, "hot_rank_chg": -2, "stock_cnt": 5827, "price": "59.93", "change": "7.21", "market_id": "17", "circulate_market_value": "1189256450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301382", "name": "蜂助手", "hot_rank": 39, "hot_rank_chg": 54, "stock_cnt": 5827, "price": "41.00", "change": "15.49", "market_id": "33", "circulate_market_value": "9690635300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 40, "hot_rank_chg": -1, "stock_cnt": 5827, "price": "31.36", "change": "4.50", "market_id": "33", "circulate_market_value": "33830144000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301171", "name": "易点天下", "hot_rank": 41, "hot_rank_chg": -22, "stock_cnt": 5827, "price": "37.60", "change": "16.27", "market_id": "33", "circulate_market_value": "18870863000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000595", "name": "新能股份", "hot_rank": 42, "hot_rank_chg": 2, "stock_cnt": 5827, "price": "6.56", "change": "10.07", "market_id": "33", "circulate_market_value": "7469585800.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "风光储", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 3.98}, {"name": "强势人气股", "change_pct": 4.16}, {"name": "高铁轨交", "change_pct": 1.36}, {"name": "航母", "change_pct": 1.34}, {"name": "光伏", "change_pct": 1.97}, {"name": "风电", "change_pct": 1.21}, {"name": "军工", "change_pct": 2.11}, {"name": "机器人", "change_pct": 2.62}, {"name": "储能", "change_pct": 2.0}, {"name": "国企改革", "change_pct": 0.33}, {"name": "宁夏概念", "change_pct": 2.16}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 43, "hot_rank_chg": 14, "stock_cnt": 5827, "price": "74.14", "change": "3.46", "market_id": "33", "circulate_market_value": "108750910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 44, "hot_rank_chg": -24, "stock_cnt": 5827, "price": "21.69", "change": "1.78", "market_id": "17", "circulate_market_value": "8697690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 45, "hot_rank_chg": -3, "stock_cnt": 5827, "price": "36.19", "change": "6.25", "market_id": "17", "circulate_market_value": "143731730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603106", "name": "恒银科技", "hot_rank": 46, "hot_rank_chg": 7, "stock_cnt": 5827, "price": "9.04", "change": "9.98", "market_id": "17", "circulate_market_value": "4705500800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI应用", "xgb_concepts": [{"name": "金融科技", "change_pct": 2.09}, {"name": "人工智能", "change_pct": 3.0}, {"name": "人脸识别", "change_pct": 3.04}, {"name": "智慧停车", "change_pct": 2.49}, {"name": "雄安新区", "change_pct": 0.85}, {"name": "信创", "change_pct": 3.28}, {"name": "虚拟数字人", "change_pct": 3.61}, {"name": "AIGC概念", "change_pct": 4.02}, {"name": "智慧政务", "change_pct": 2.96}, {"name": "医疗信息化", "change_pct": 2.64}]}, {"code": "300620", "name": "光库科技", "hot_rank": 47, "hot_rank_chg": 32, "stock_cnt": 5827, "price": "254.33", "change": "20.00", "market_id": "33", "circulate_market_value": "62845754000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CPO"}, {"code": "601700", "name": "风范股份", "hot_rank": 48, "hot_rank_chg": 8, "stock_cnt": 5827, "price": "5.92", "change": "10.04", "market_id": "17", "circulate_market_value": "6741443200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "特高压", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.7}, {"name": "光伏", "change_pct": 1.97}, {"name": "特高压", "change_pct": 2.39}, {"name": "智能电网", "change_pct": 2.45}]}, {"code": "600522", "name": "中天科技", "hot_rank": 49, "hot_rank_chg": -2, "stock_cnt": 5827, "price": "29.94", "change": "5.46", "market_id": "17", "circulate_market_value": "102183713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 50, "hot_rank_chg": -5, "stock_cnt": 5827, "price": "32.30", "change": "5.04", "market_id": "33", "circulate_market_value": "25271669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002792", "name": "通宇通讯", "hot_rank": 51, "hot_rank_chg": 9, "stock_cnt": 5827, "price": "28.75", "change": "9.98", "market_id": "33", "circulate_market_value": "9712453900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业航天"}, {"code": "002173", "name": "创新医疗", "hot_rank": 52, "hot_rank_chg": -1, "stock_cnt": 5827, "price": "20.92", "change": "9.99", "market_id": "33", "circulate_market_value": "8804496400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "脑机接口"}, {"code": "601179", "name": "中国西电", "hot_rank": 53, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "14.37", "change": "3.31", "market_id": "17", "circulate_market_value": "73658929000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 54, "hot_rank_chg": 1, "stock_cnt": 5827, "price": "111.77", "change": "10.00", "market_id": "33", "circulate_market_value": "214912530000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力PCB"}, {"code": "301396", "name": "宏景科技", "hot_rank": 55, "hot_rank_chg": 10, "stock_cnt": 5827, "price": "176.65", "change": "20.00", "market_id": "33", "circulate_market_value": "24997175000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "算力服务"}, {"code": "002230", "name": "科大讯飞", "hot_rank": 56, "hot_rank_chg": 10, "stock_cnt": 5827, "price": "43.49", "change": "1.59", "market_id": "33", "circulate_market_value": "95241662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 57, "hot_rank_chg": 15, "stock_cnt": 5827, "price": "100.65", "change": "8.03", "market_id": "33", "circulate_market_value": "101151806000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 58, "hot_rank_chg": 42, "stock_cnt": 5827, "price": "14.80", "change": "0.41", "market_id": "33", "circulate_market_value": "8673511500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 59, "hot_rank_chg": -5, "stock_cnt": 5827, "price": "36.54", "change": "5.88", "market_id": "33", "circulate_market_value": "57519645000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 60, "hot_rank_chg": -17, "stock_cnt": 5827, "price": "19.30", "change": "2.99", "market_id": "33", "circulate_market_value": "8730138800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 61, "hot_rank_chg": -13, "stock_cnt": 5827, "price": "35.67", "change": "3.36", "market_id": "17", "circulate_market_value": "55560752000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600666", "name": "奥瑞德", "hot_rank": 62, "hot_rank_chg": 9, "stock_cnt": 5827, "price": "3.78", "change": "9.88", "market_id": "17", "circulate_market_value": "9458026700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 3.81}, {"name": "3D玻璃", "change_pct": 4.28}, {"name": "东数西算/算力", "change_pct": 4.8}, {"name": "词元概念/Token", "change_pct": 5.68}, {"name": "DeepSeek概念股", "change_pct": 4.23}, {"name": "RWA", "change_pct": 2.57}]}, {"code": "000820", "name": "神雾节能", "hot_rank": 63, "hot_rank_chg": 6, "stock_cnt": 5827, "price": "4.26", "change": "10.08", "market_id": "33", "circulate_market_value": "1265078900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "摘帽", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 3.98}, {"name": "固废处理", "change_pct": 0.71}, {"name": "复牌股", "change_pct": 3.26}, {"name": "环保", "change_pct": 1.3}]}, {"code": "002579", "name": "中京电子", "hot_rank": 64, "hot_rank_chg": 17, "stock_cnt": 5827, "price": "11.80", "change": "9.97", "market_id": "33", "circulate_market_value": "6884260300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.32}, {"name": "折叠屏", "change_pct": 5.04}, {"name": "手机产业链", "change_pct": 4.4}, {"name": "电子烟", "change_pct": 3.48}, {"name": "半导体", "change_pct": 5.89}, {"name": "5G", "change_pct": 5.05}, {"name": "强势人气股", "change_pct": 4.16}, {"name": "VR&AR", "change_pct": 4.11}, {"name": "光通信", "change_pct": 7.14}, {"name": "OLED", "change_pct": 5.01}, {"name": "PCB板", "change_pct": 7.03}, {"name": "智能音箱", "change_pct": 2.82}, {"name": "WiFi", "change_pct": 4.38}, {"name": "小米概念股", "change_pct": 3.89}, {"name": "6G", "change_pct": 5.05}, {"name": "MiniLED", "change_pct": 4.23}, {"name": "AI PC", "change_pct": 3.94}, {"name": "华为产业链", "change_pct": 3.38}, {"name": "光电共封装CPO", "change_pct": 8.38}, {"name": "毫米波雷达", "change_pct": 3.77}, {"name": "交换机", "change_pct": 5.92}, {"name": "人形机器人", "change_pct": 3.15}, {"name": "AI手机", "change_pct": 3.41}, {"name": "AI医疗", "change_pct": 2.55}]}, {"code": "601858", "name": "中国科传", "hot_rank": 65, "hot_rank_chg": 3, "stock_cnt": 5827, "price": "23.94", "change": "10.02", "market_id": "17", "circulate_market_value": "18924570000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "AI应用"}, {"code": "600703", "name": "三安光电", "hot_rank": 66, "hot_rank_chg": 28, "stock_cnt": 5827, "price": "12.70", "change": "3.93", "market_id": "17", "circulate_market_value": "63360538000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 5.89}, {"name": "5G", "change_pct": 5.05}, {"name": "VR&AR", "change_pct": 4.11}, {"name": "光通信", "change_pct": 7.14}, {"name": "3D感应", "change_pct": 3.57}, {"name": "汽车零部件", "change_pct": 1.4}, {"name": "LED", "change_pct": 2.97}, {"name": "国产芯片", "change_pct": 5.03}, {"name": "MicroLED", "change_pct": 4.75}, {"name": "第三代半导体", "change_pct": 4.92}, {"name": "激光雷达", "change_pct": 5.74}, {"name": "华为汽车", "change_pct": 1.22}, {"name": "MiniLED", "change_pct": 4.23}, {"name": "氮化镓", "change_pct": 4.83}, {"name": "大基金概念", "change_pct": 5.65}, {"name": "碳化硅", "change_pct": 4.97}, {"name": "磷化铟", "change_pct": 6.64}, {"name": "光电共封装CPO", "change_pct": 8.38}]}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 67, "hot_rank_chg": 19, "stock_cnt": 5827, "price": "4.17", "change": "10.03", "market_id": "33", "circulate_market_value": "2964188000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "AI应用", "xgb_concepts": [{"name": "人工智能", "change_pct": 3.0}, {"name": "影视", "change_pct": 3.37}, {"name": "旅游", "change_pct": -0.26}, {"name": "虚拟数字人", "change_pct": 3.61}, {"name": "AI营销", "change_pct": 4.95}, {"name": "短剧/互动影游", "change_pct": 4.63}, {"name": "IP经济/谷子经济", "change_pct": 2.05}]}, {"code": "002674", "name": "兴业科技", "hot_rank": 68, "hot_rank_chg": 53, "stock_cnt": 5827, "price": "24.48", "change": "10.02", "market_id": "33", "circulate_market_value": "7161958200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟收购"}, {"code": "600183", "name": "生益科技", "hot_rank": 69, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "112.23", "change": "10.00", "market_id": "17", "circulate_market_value": "270670570000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI覆铜板"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 70, "hot_rank_chg": -7, "stock_cnt": 5827, "price": "32.12", "change": "-1.32", "market_id": "17", "circulate_market_value": "661729600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 71, "hot_rank_chg": -21, "stock_cnt": 5827, "price": "5.48", "change": "7.45", "market_id": "33", "circulate_market_value": "5660488200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.37}, {"name": "锂电池", "change_pct": 2.44}, {"name": "强势人气股", "change_pct": 4.16}, {"name": "铜箔/覆铜板", "change_pct": 6.4}, {"name": "粤港澳大湾区", "change_pct": 0.42}, {"name": "新能源汽车", "change_pct": 1.91}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.79}]}, {"code": "000593", "name": "德龙汇能", "hot_rank": 72, "hot_rank_chg": 8, "stock_cnt": 5827, "price": "20.47", "change": "9.99", "market_id": "33", "circulate_market_value": "7338150500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "举牌"}, {"code": "600363", "name": "联创光电", "hot_rank": 73, "hot_rank_chg": 109, "stock_cnt": 5827, "price": "27.38", "change": "1.26", "market_id": "17", "circulate_market_value": "12345325800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 74, "hot_rank_chg": -25, "stock_cnt": 5827, "price": "6.33", "change": "2.43", "market_id": "17", "circulate_market_value": "78467244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.28}, {"name": "核电", "change_pct": 1.96}, {"name": "强势人气股", "change_pct": 4.16}, {"name": "电力体制改革", "change_pct": -0.13}, {"name": "水电", "change_pct": -0.36}, {"name": "火电", "change_pct": -0.14}, {"name": "光伏", "change_pct": 1.97}, {"name": "风电", "change_pct": 1.21}, {"name": "国企改革", "change_pct": 0.33}, {"name": "算电协同", "change_pct": 2.51}]}, {"code": "300857", "name": "协创数据", "hot_rank": 75, "hot_rank_chg": 23, "stock_cnt": 5827, "price": "241.00", "change": "17.68", "market_id": "33", "circulate_market_value": "117333260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600673", "name": "东阳光", "hot_rank": 76, "hot_rank_chg": 20, "stock_cnt": 5827, "price": "32.15", "change": "9.99", "market_id": "17", "circulate_market_value": "96500087000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "算力服务"}, {"code": "002929", "name": "润建股份", "hot_rank": 77, "hot_rank_chg": 34, "stock_cnt": 5827, "price": "54.01", "change": "10.00", "market_id": "33", "circulate_market_value": "11696932700.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "算力租赁"}, {"code": "002896", "name": "中大力德", "hot_rank": 78, "hot_rank_chg": -14, "stock_cnt": 5827, "price": "76.11", "change": "6.06", "market_id": "33", "circulate_market_value": "14957340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000960", "name": "锡业股份", "hot_rank": 79, "hot_rank_chg": 97, "stock_cnt": 5827, "price": "36.34", "change": "4.39", "market_id": "33", "circulate_market_value": "59794997000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002348", "name": "高乐股份", "hot_rank": 80, "hot_rank_chg": 30, "stock_cnt": 5827, "price": "11.02", "change": "9.98", "market_id": "33", "circulate_market_value": "9956933600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "签署算力大单", "xgb_concepts": [{"name": "筹码集中", "change_pct": 2.56}, {"name": "优化生育（三孩）", "change_pct": 0.73}, {"name": "人工智能", "change_pct": 3.0}, {"name": "教育", "change_pct": 2.25}, {"name": "外贸受益概念", "change_pct": 0.99}, {"name": "RCEP概念", "change_pct": 1.41}, {"name": "固态电池", "change_pct": 2.27}, {"name": "东数西算/算力", "change_pct": 4.8}, {"name": "教育信息化", "change_pct": 2.21}, {"name": "在线教育", "change_pct": 2.54}, {"name": "玩具", "change_pct": 2.4}, {"name": "盲盒", "change_pct": 1.46}, {"name": "IP经济/谷子经济", "change_pct": 2.05}]}, {"code": "002050", "name": "三花智控", "hot_rank": 81, "hot_rank_chg": 6, "stock_cnt": 5827, "price": "38.74", "change": "1.15", "market_id": "33", "circulate_market_value": "142991080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 82, "hot_rank_chg": -21, "stock_cnt": 5827, "price": "41.87", "change": "10.01", "market_id": "33", "circulate_market_value": "11556066600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000967", "name": "盈峰环境", "hot_rank": 83, "hot_rank_chg": -16, "stock_cnt": 5827, "price": "9.09", "change": "5.21", "market_id": "33", "circulate_market_value": "30521207000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 2.4}, {"name": "核电", "change_pct": 1.96}, {"name": "充电桩", "change_pct": 2.58}, {"name": "固废处理", "change_pct": 0.71}, {"name": "大气治理", "change_pct": 2.0}, {"name": "智慧城市", "change_pct": 2.51}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 1.91}, {"name": "环保", "change_pct": 1.3}, {"name": "机器人", "change_pct": 2.62}, {"name": "土壤修复", "change_pct": 0.78}, {"name": "东数西算/算力", "change_pct": 4.8}, {"name": "垃圾分类", "change_pct": 0.31}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 84, "hot_rank_chg": -14, "stock_cnt": 5827, "price": "284.00", "change": "8.27", "market_id": "17", "circulate_market_value": "115400081000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 85, "hot_rank_chg": -12, "stock_cnt": 5827, "price": "91.15", "change": "-3.49", "market_id": "33", "circulate_market_value": "317804820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 86, "hot_rank_chg": 28, "stock_cnt": 5827, "price": "85.55", "change": "2.22", "market_id": "17", "circulate_market_value": "125164299000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300442", "name": "润泽科技", "hot_rank": 87, "hot_rank_chg": 75, "stock_cnt": 5827, "price": "68.00", "change": "7.99", "market_id": "33", "circulate_market_value": "111263529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 88, "hot_rank_chg": 29, "stock_cnt": 5827, "price": "34.37", "change": "1.03", "market_id": "33", "circulate_market_value": "138429340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 89, "hot_rank_chg": 19, "stock_cnt": 5827, "price": "7.92", "change": "10.00", "market_id": "17", "circulate_market_value": "3045617300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CRO", "xgb_concepts": [{"name": "创新药", "change_pct": 2.97}, {"name": "股权转让", "change_pct": 2.26}, {"name": "新疆概念", "change_pct": 0.43}, {"name": "医药", "change_pct": 2.17}, {"name": "流感", "change_pct": 1.61}, {"name": "国资入股", "change_pct": 1.12}, {"name": "减肥药", "change_pct": 3.42}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 90, "hot_rank_chg": -38, "stock_cnt": 5827, "price": "53.79", "change": "10.00", "market_id": "17", "circulate_market_value": "7028911400.00", "change_type": "1", "change_section": "16", "change_days": "9", "change_reason": "控制权拟变更"}, {"code": "603823", "name": "百合花", "hot_rank": 91, "hot_rank_chg": -33, "stock_cnt": 5827, "price": "55.21", "change": "7.25", "market_id": "17", "circulate_market_value": "22987661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 92, "hot_rank_chg": -14, "stock_cnt": 5827, "price": "87.64", "change": "10.00", "market_id": "17", "circulate_market_value": "6928104800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "HDI技改扩产"}, {"code": "603466", "name": "风语筑", "hot_rank": 93, "hot_rank_chg": 14, "stock_cnt": 5827, "price": "11.13", "change": "9.98", "market_id": "17", "circulate_market_value": "6620441100.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI视频", "xgb_concepts": [{"name": "数字孪生", "change_pct": 2.97}, {"name": "VR&AR", "change_pct": 4.11}, {"name": "装修装饰", "change_pct": 2.18}, {"name": "数字经济", "change_pct": 2.62}, {"name": "百度概念股", "change_pct": 2.35}, {"name": "全息概念", "change_pct": 3.59}, {"name": "NFT", "change_pct": 3.01}, {"name": "元宇宙", "change_pct": 3.38}, {"name": "虚拟数字人", "change_pct": 3.61}, {"name": "网红/MCN", "change_pct": 2.3}, {"name": "ChatGPT", "change_pct": 4.67}, {"name": "智能眼镜/MR头显", "change_pct": 4.43}, {"name": "多模态", "change_pct": 4.36}, {"name": "AI视频", "change_pct": 5.49}]}, {"code": "002415", "name": "海康威视", "hot_rank": 94, "hot_rank_chg": 9, "stock_cnt": 5827, "price": "38.63", "change": "1.79", "market_id": "33", "circulate_market_value": "349450600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 95, "hot_rank_chg": -20, "stock_cnt": 5827, "price": "5.86", "change": "3.35", "market_id": "33", "circulate_market_value": "7598870800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.87}, {"name": "创新药", "change_pct": 2.97}, {"name": "央企改革", "change_pct": 0.28}, {"name": "医疗器械", "change_pct": 1.65}, {"name": "强势人气股", "change_pct": 4.16}, {"name": "互联网医疗", "change_pct": 1.24}, {"name": "保健品", "change_pct": 0.32}, {"name": "民营医院", "change_pct": 1.06}, {"name": "CAR-T疗法", "change_pct": 3.16}, {"name": "医药", "change_pct": 2.17}, {"name": "化学原料药", "change_pct": 2.26}, {"name": "海南概念", "change_pct": 1.21}, {"name": "脑科学/脑机接口", "change_pct": 2.92}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -0.07}, {"name": "海南自由贸易港", "change_pct": 0.17}, {"name": "食品", "change_pct": -0.07}, {"name": "国企改革", "change_pct": 0.33}, {"name": "医疗信息化", "change_pct": 2.64}, {"name": "新冠病毒防治", "change_pct": 1.88}, {"name": "自贸区", "change_pct": 0.03}, {"name": "合成生物", "change_pct": 2.11}]}, {"code": "002202", "name": "金风科技", "hot_rank": 96, "hot_rank_chg": -1, "stock_cnt": 5827, "price": "19.49", "change": "1.30", "market_id": "33", "circulate_market_value": "65554714000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 97, "hot_rank_chg": -12, "stock_cnt": 5827, "price": "43.70", "change": "5.05", "market_id": "33", "circulate_market_value": "51361656000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 98, "hot_rank_chg": 7, "stock_cnt": 5827, "price": "336.05", "change": "5.08", "market_id": "33", "circulate_market_value": "94716328000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601611", "name": "中国核建", "hot_rank": 99, "hot_rank_chg": -23, "stock_cnt": 5827, "price": "12.12", "change": "4.39", "market_id": "17", "circulate_market_value": "36527671000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.28}, {"name": "核电", "change_pct": 1.96}, {"name": "军工集团", "change_pct": 1.05}, {"name": "水利", "change_pct": 0.43}, {"name": "军工", "change_pct": 2.11}, {"name": "中字头", "change_pct": -0.68}, {"name": "大基建", "change_pct": 0.09}, {"name": "国企改革", "change_pct": 0.33}, {"name": "核聚变", "change_pct": 3.18}, {"name": "钍基熔盐堆", "change_pct": 0.97}]}, {"code": "601606", "name": "长城军工", "hot_rank": 100, "hot_rank_chg": -18, "stock_cnt": 5827, "price": "33.50", "change": "2.10", "market_id": "17", "circulate_market_value": "24261651000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第四次风险提示性公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告"};