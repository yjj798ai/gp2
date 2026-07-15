const UPDATE_TIME = "2026-07-15 07:12";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 3.65,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续78天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -5.2,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续201天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.88,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续248天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": -1.3,
    "rate": 0,
    "tag": "",
    "hotTag": "连续177天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "CRO概念",
    "rise": 4.74,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "PCB概念",
    "rise": -3.49,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人形机器人",
    "rise": -0.84,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续412天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "猪肉",
    "rise": 2.23,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "AI应用",
    "rise": 1.28,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "白酒概念",
    "rise": 3.01,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885525"
  },
  {
    "name": "算力租赁",
    "rise": -0.33,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续112天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "减肥药",
    "rise": 4.37,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "创新药ETF",
    "code": "886051"
  },
  {
    "name": "光纤概念",
    "rise": -2.46,
    "rate": 0,
    "tag": "",
    "hotTag": "连续77天上榜",
    "rankChg": -1,
    "etfName": "成长ETF",
    "code": "886084"
  },
  {
    "name": "先进封装",
    "rise": -5.17,
    "rate": 0,
    "tag": "",
    "hotTag": "连续41天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "培育钻石",
    "rise": -2.91,
    "rate": 0,
    "tag": "",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "国家大基金持股",
    "rise": -5.98,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "机器人概念",
    "rise": -0.4,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "ST板块",
    "rise": 0.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续86天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "芯片概念",
    "rise": -2.77,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 1,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "2026中报预增",
    "rise": -0.18,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": -1,
    "etfName": "化工ETF",
    "code": "886110"
  }
];
const THS_EVENTS = [
  {
    "title": "“BD红利”进入兑现窗口 创新药企价值加速分化",
    "desc": "",
    "heat": 741610,
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
    "heat": 420515,
    "direction": "电力",
    "themes": [
      "电力",
      "绿色电力"
    ],
    "stocks": [
      {
        "name": "中赋科技",
        "code": "300692",
        "chg": 18.215159
      }
    ]
  },
  {
    "title": "曝DeepSeek拟今年启动IPO！再融资100亿",
    "desc": "",
    "heat": 191204,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "万邦医药",
        "code": "301520",
        "chg": 20.004082
      }
    ]
  },
  {
    "title": "以色列芯片厂商Tower Semiconductor将在日本投资30亿美元",
    "desc": "",
    "heat": 58414,
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
    "heat": 54521,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "古鳌科技",
        "code": "300551",
        "chg": 12.570781
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "减肥药",
    "change": "+5.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+5.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+4.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化学原料药",
    "change": "+3.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "宠物经济",
    "change": "+3.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+3.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+3.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大消费",
    "change": "+3.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+3.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+3.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+3.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医美",
    "change": "+3.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+3.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+3.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+3.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "猴痘概念",
    "change": "+3.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+2.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化妆品",
    "change": "+2.98%",
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
    "hot_rank_chg": 7,
    "stock_cnt": 5858,
    "price": "6.38",
    "change": "-9.12",
    "market_id": "33",
    "circulate_market_value": "225642320000.00",
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
        "change_pct": -2.8
      },
      {
        "name": "超高清视频",
        "change_pct": -1.04
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.8
      },
      {
        "name": "电竞",
        "change_pct": 3.04
      },
      {
        "name": "半导体",
        "change_pct": -4.99
      },
      {
        "name": "人工智能",
        "change_pct": 0.4
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.29
      },
      {
        "name": "VR&AR",
        "change_pct": -1.16
      },
      {
        "name": "OLED",
        "change_pct": -3.45
      },
      {
        "name": "京津冀",
        "change_pct": 0.89
      },
      {
        "name": "物联网",
        "change_pct": -0.34
      },
      {
        "name": "指纹识别",
        "change_pct": -2.99
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.16
      },
      {
        "name": "白马股",
        "change_pct": 1.55
      },
      {
        "name": "智能制造",
        "change_pct": -0.28
      },
      {
        "name": "小米概念股",
        "change_pct": -2.19
      },
      {
        "name": "国产芯片",
        "change_pct": -4.11
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.41
      },
      {
        "name": "全息概念",
        "change_pct": 0.31
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.32
      },
      {
        "name": "MicroLED",
        "change_pct": -3.3
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.59
      },
      {
        "name": "智能手表",
        "change_pct": -2.29
      },
      {
        "name": "MiniLED",
        "change_pct": -3.4
      },
      {
        "name": "传感器",
        "change_pct": -2.16
      },
      {
        "name": "大硅片",
        "change_pct": -7.31
      },
      {
        "name": "AI PC",
        "change_pct": -2.35
      },
      {
        "name": "华为产业链",
        "change_pct": -0.91
      },
      {
        "name": "回购",
        "change_pct": 1.12
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.68
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -5.26
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 17,
    "hot_rank_chg": -16,
    "stock_cnt": 5858,
    "price": "7.69",
    "change": "-0.52",
    "market_id": "33",
    "circulate_market_value": "12501585200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.74
      },
      {
        "name": "电竞",
        "change_pct": 3.04
      },
      {
        "name": "手游",
        "change_pct": 2.6
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "人工智能",
        "change_pct": 0.4
      },
      {
        "name": "游戏",
        "change_pct": 2.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.75
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.56
      },
      {
        "name": "快手概念股",
        "change_pct": 1.32
      },
      {
        "name": "元宇宙",
        "change_pct": 0.71
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.36
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.01
      },
      {
        "name": "web3.0",
        "change_pct": 0.44
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.06
      },
      {
        "name": "数据要素",
        "change_pct": 1.02
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.58
      },
      {
        "name": "AI营销",
        "change_pct": 1.46
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.04
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.68
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.25
      },
      {
        "name": "人形机器人",
        "change_pct": -0.77
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.67
      },
      {
        "name": "多模态",
        "change_pct": 0.85
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 1.19
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.04
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.5
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 25,
    "hot_rank_chg": 58,
    "stock_cnt": 5858,
    "price": "6.98",
    "change": "7.88",
    "market_id": "17",
    "circulate_market_value": "7621369000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 3.3
      },
      {
        "name": "化学原料药",
        "change_pct": 3.53
      },
      {
        "name": "数字经济",
        "change_pct": 0.75
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.32
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.57
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 28,
    "hot_rank_chg": -15,
    "stock_cnt": 5858,
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
        "change_pct": 1.74
      },
      {
        "name": "工业大麻",
        "change_pct": 2.58
      },
      {
        "name": "中药",
        "change_pct": 2.98
      },
      {
        "name": "保健品",
        "change_pct": 2.76
      },
      {
        "name": "医药",
        "change_pct": 3.3
      },
      {
        "name": "化学原料药",
        "change_pct": 3.53
      },
      {
        "name": "流感",
        "change_pct": 2.61
      },
      {
        "name": "振兴东北",
        "change_pct": 1.67
      },
      {
        "name": "食品",
        "change_pct": 2.39
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 42,
    "hot_rank_chg": 32,
    "stock_cnt": 5858,
    "price": "5.78",
    "change": "-1.70",
    "market_id": "17",
    "circulate_market_value": "71649395000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.5
      },
      {
        "name": "核电",
        "change_pct": -0.55
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.26
      },
      {
        "name": "水电",
        "change_pct": 2.08
      },
      {
        "name": "火电",
        "change_pct": 1.47
      },
      {
        "name": "光伏",
        "change_pct": -0.84
      },
      {
        "name": "风电",
        "change_pct": -0.47
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      },
      {
        "name": "算电协同",
        "change_pct": -2.05
      }
    ]
  },
  {
    "code": "603669",
    "name": "灵康药业",
    "hot_rank": 54,
    "hot_rank_chg": 62,
    "stock_cnt": 5858,
    "price": "8.11",
    "change": "9.60",
    "market_id": "17",
    "circulate_market_value": "5777005700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "西藏概念",
        "change_pct": 1.62
      },
      {
        "name": "民营医院",
        "change_pct": 2.68
      },
      {
        "name": "医药",
        "change_pct": 3.3
      },
      {
        "name": "流感",
        "change_pct": 2.61
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": 2.84
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 2.96
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 58,
    "hot_rank_chg": 6,
    "stock_cnt": 5858,
    "price": "7.44",
    "change": "4.06",
    "market_id": "17",
    "circulate_market_value": "34335292000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -1.04
      },
      {
        "name": "国产软件",
        "change_pct": 0.56
      },
      {
        "name": "锂电池",
        "change_pct": -1.52
      },
      {
        "name": "人工智能",
        "change_pct": 0.4
      },
      {
        "name": "养老产业",
        "change_pct": 1.85
      },
      {
        "name": "大飞机",
        "change_pct": -0.16
      },
      {
        "name": "军民融合",
        "change_pct": -0.78
      },
      {
        "name": "物联网",
        "change_pct": -0.34
      },
      {
        "name": "大数据",
        "change_pct": 0.61
      },
      {
        "name": "智慧城市",
        "change_pct": 0.05
      },
      {
        "name": "军工",
        "change_pct": -0.7
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.68
      },
      {
        "name": "机器人",
        "change_pct": -0.33
      },
      {
        "name": "黑色家电",
        "change_pct": 0.46
      },
      {
        "name": "家电",
        "change_pct": 0.4
      },
      {
        "name": "储能",
        "change_pct": -0.63
      },
      {
        "name": "智能制造",
        "change_pct": -0.28
      },
      {
        "name": "工业互联网",
        "change_pct": 0.14
      },
      {
        "name": "数字经济",
        "change_pct": 0.75
      },
      {
        "name": "百度概念股",
        "change_pct": 0.98
      },
      {
        "name": "NFT",
        "change_pct": 2.39
      },
      {
        "name": "跨境支付",
        "change_pct": 1.38
      },
      {
        "name": "华为海思",
        "change_pct": -1.38
      },
      {
        "name": "云游戏",
        "change_pct": 1.95
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.65
      },
      {
        "name": "华为产业链",
        "change_pct": -0.91
      },
      {
        "name": "毫米波雷达",
        "change_pct": -1.89
      },
      {
        "name": "服务器",
        "change_pct": -2.63
      },
      {
        "name": "星闪概念",
        "change_pct": -0.68
      },
      {
        "name": "低空经济",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 65,
    "hot_rank_chg": 170,
    "stock_cnt": 5858,
    "price": "12.33",
    "change": "3.44",
    "market_id": "17",
    "circulate_market_value": "18158475000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.5
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.26
      },
      {
        "name": "火电",
        "change_pct": 1.47
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.59
      },
      {
        "name": "风电",
        "change_pct": -0.47
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 66,
    "hot_rank_chg": -13,
    "stock_cnt": 5858,
    "price": "10.25",
    "change": "3.02",
    "market_id": "17",
    "circulate_market_value": "18338667000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 2.12
      },
      {
        "name": "纯碱",
        "change_pct": 1.23
      },
      {
        "name": "食品",
        "change_pct": 2.39
      },
      {
        "name": "土壤修复",
        "change_pct": 0.74
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.01
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.45
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.07
      }
    ]
  },
  {
    "code": "002457",
    "name": "青龙管业",
    "hot_rank": 69,
    "hot_rank_chg": 78,
    "stock_cnt": 5858,
    "price": "11.70",
    "change": "-8.31",
    "market_id": "33",
    "circulate_market_value": "3899263100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水利",
        "change_pct": 0.68
      },
      {
        "name": "海绵城市",
        "change_pct": 1.09
      },
      {
        "name": "风电",
        "change_pct": -0.47
      },
      {
        "name": "地下管廊",
        "change_pct": 0.76
      },
      {
        "name": "雄安新区",
        "change_pct": 0.4
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.97
      },
      {
        "name": "旧改",
        "change_pct": 1.4
      },
      {
        "name": "宁夏概念",
        "change_pct": -0.07
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 71,
    "hot_rank_chg": -27,
    "stock_cnt": 5858,
    "price": "10.83",
    "change": "-4.83",
    "market_id": "33",
    "circulate_market_value": "6316172700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -2.12
      },
      {
        "name": "一带一路",
        "change_pct": 0.45
      },
      {
        "name": "天然气",
        "change_pct": -0.61
      },
      {
        "name": "油气改革",
        "change_pct": -0.65
      },
      {
        "name": "页岩气",
        "change_pct": -2.24
      },
      {
        "name": "深地经济",
        "change_pct": -1.37
      }
    ]
  },
  {
    "code": "600992",
    "name": "贵绳股份",
    "hot_rank": 77,
    "hot_rank_chg": 155,
    "stock_cnt": 5858,
    "price": "11.35",
    "change": "7.58",
    "market_id": "17",
    "circulate_market_value": "2781771500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "航母",
        "change_pct": -0.35
      },
      {
        "name": "军工",
        "change_pct": -0.7
      },
      {
        "name": "航天",
        "change_pct": -1.43
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 86,
    "hot_rank_chg": 57,
    "stock_cnt": 5858,
    "price": "9.69",
    "change": "-3.87",
    "market_id": "33",
    "circulate_market_value": "39144303000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -4.99
      },
      {
        "name": "一带一路",
        "change_pct": 0.45
      },
      {
        "name": "京津冀",
        "change_pct": 0.89
      },
      {
        "name": "光伏",
        "change_pct": -0.84
      },
      {
        "name": "碳中和",
        "change_pct": 0.6
      },
      {
        "name": "国产芯片",
        "change_pct": -4.11
      },
      {
        "name": "IGBT",
        "change_pct": -4.17
      },
      {
        "name": "颗粒硅",
        "change_pct": 0.1
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.06
      },
      {
        "name": "大硅片",
        "change_pct": -7.31
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 89,
    "hot_rank_chg": -44,
    "stock_cnt": 5858,
    "price": "5.02",
    "change": "-2.14",
    "market_id": "33",
    "circulate_market_value": "100993999000.00",
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
        "change_pct": -2.8
      },
      {
        "name": "超高清视频",
        "change_pct": -1.04
      },
      {
        "name": "电竞",
        "change_pct": 3.04
      },
      {
        "name": "半导体",
        "change_pct": -4.99
      },
      {
        "name": "OLED",
        "change_pct": -3.45
      },
      {
        "name": "光伏",
        "change_pct": -0.84
      },
      {
        "name": "黑色家电",
        "change_pct": 0.46
      },
      {
        "name": "家电",
        "change_pct": 0.4
      },
      {
        "name": "智能制造",
        "change_pct": -0.28
      },
      {
        "name": "工业互联网",
        "change_pct": 0.14
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.19
      },
      {
        "name": "国产芯片",
        "change_pct": -4.11
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.56
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.41
      },
      {
        "name": "MicroLED",
        "change_pct": -3.3
      },
      {
        "name": "MiniLED",
        "change_pct": -3.4
      },
      {
        "name": "华为产业链",
        "change_pct": -0.91
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -5.26
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 95,
    "hot_rank_chg": 87,
    "stock_cnt": 5858,
    "price": "12.68",
    "change": "2.09",
    "market_id": "33",
    "circulate_market_value": "44100156000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.74
      },
      {
        "name": "人工智能",
        "change_pct": 0.4
      },
      {
        "name": "VR&AR",
        "change_pct": -1.16
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.1
      },
      {
        "name": "大数据",
        "change_pct": 0.61
      },
      {
        "name": "教育",
        "change_pct": 0.92
      },
      {
        "name": "百度概念股",
        "change_pct": 0.98
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.52
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.56
      },
      {
        "name": "传媒",
        "change_pct": 2.46
      },
      {
        "name": "快手概念股",
        "change_pct": 1.32
      },
      {
        "name": "NFT",
        "change_pct": 2.39
      },
      {
        "name": "元宇宙",
        "change_pct": 0.71
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.36
      },
      {
        "name": "web3.0",
        "change_pct": 0.44
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.06
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.58
      },
      {
        "name": "职业教育",
        "change_pct": 1.3
      },
      {
        "name": "云游戏",
        "change_pct": 1.95
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.65
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.55
      },
      {
        "name": "AI营销",
        "change_pct": 1.46
      },
      {
        "name": "词元概念/Token",
        "change_pct": -0.12
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.25
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 1.19
      },
      {
        "name": "智谱AI",
        "change_pct": 0.46
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.5
      },
      {
        "name": "区块链",
        "change_pct": 1.13
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600584", "name": "长电科技", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5858, "price": "92.46", "change": "-9.97", "market_id": "17", "circulate_market_value": "165449270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 7, "stock_cnt": 5858, "price": "6.38", "change": "-9.12", "market_id": "33", "circulate_market_value": "225642320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.56}, {"name": "手机产业链", "change_pct": -2.8}, {"name": "超高清视频", "change_pct": -1.04}, {"name": "苹果产业链", "change_pct": -2.8}, {"name": "电竞", "change_pct": 3.04}, {"name": "半导体", "change_pct": -4.99}, {"name": "人工智能", "change_pct": 0.4}, {"name": "互联网医疗", "change_pct": 2.29}, {"name": "VR&AR", "change_pct": -1.16}, {"name": "OLED", "change_pct": -3.45}, {"name": "京津冀", "change_pct": 0.89}, {"name": "物联网", "change_pct": -0.34}, {"name": "指纹识别", "change_pct": -2.99}, {"name": "汽车零部件", "change_pct": 0.16}, {"name": "白马股", "change_pct": 1.55}, {"name": "智能制造", "change_pct": -0.28}, {"name": "小米概念股", "change_pct": -2.19}, {"name": "国产芯片", "change_pct": -4.11}, {"name": "液晶面板/LCD", "change_pct": -3.41}, {"name": "全息概念", "change_pct": 0.31}, {"name": "理想汽车概念股", "change_pct": 0.32}, {"name": "MicroLED", "change_pct": -3.3}, {"name": "钙钛矿电池", "change_pct": -1.59}, {"name": "智能手表", "change_pct": -2.29}, {"name": "MiniLED", "change_pct": -3.4}, {"name": "传感器", "change_pct": -2.16}, {"name": "大硅片", "change_pct": -7.31}, {"name": "AI PC", "change_pct": -2.35}, {"name": "华为产业链", "change_pct": -0.91}, {"name": "回购", "change_pct": 1.12}, {"name": "智能眼镜/MR头显", "change_pct": -1.68}, {"name": "玻璃基板封装", "change_pct": -5.26}]}, {"code": "002185", "name": "华天科技", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5858, "price": "23.11", "change": "-10.01", "market_id": "33", "circulate_market_value": "76786482000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5858, "price": "262.49", "change": "0.81", "market_id": "33", "circulate_market_value": "363895590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5858, "price": "78.71", "change": "1.08", "market_id": "33", "circulate_market_value": "119438664000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 6, "hot_rank_chg": 1, "stock_cnt": 5858, "price": "35.61", "change": "10.01", "market_id": "17", "circulate_market_value": "6514256000.00", "change_type": "1", "change_section": "11", "change_days": "10", "change_reason": "拟收购存储公司"}, {"code": "603538", "name": "美诺华", "hot_rank": 7, "hot_rank_chg": 21, "stock_cnt": 5858, "price": "39.00", "change": "10.01", "market_id": "17", "circulate_market_value": "13139878100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "GLP-1减肥药"}, {"code": "001896", "name": "豫能控股", "hot_rank": 8, "hot_rank_chg": 427, "stock_cnt": 5858, "price": "14.95", "change": "10.01", "market_id": "33", "circulate_market_value": "22810431000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 9, "hot_rank_chg": 17, "stock_cnt": 5858, "price": "47.26", "change": "-10.00", "market_id": "33", "circulate_market_value": "74394593000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5858, "price": "54.50", "change": "-8.27", "market_id": "33", "circulate_market_value": "63057215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 11, "hot_rank_chg": 1, "stock_cnt": 5858, "price": "71.05", "change": "-4.48", "market_id": "17", "circulate_market_value": "174331570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 12, "hot_rank_chg": -6, "stock_cnt": 5858, "price": "35.53", "change": "-3.92", "market_id": "33", "circulate_market_value": "101618382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 13, "hot_rank_chg": 3, "stock_cnt": 5858, "price": "40.90", "change": "6.51", "market_id": "33", "circulate_market_value": "32000349000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 14, "hot_rank_chg": 100, "stock_cnt": 5858, "price": "33.29", "change": "6.87", "market_id": "33", "circulate_market_value": "25354243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 15, "hot_rank_chg": -1, "stock_cnt": 5858, "price": "571.79", "change": "-2.09", "market_id": "17", "circulate_market_value": "382237000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 16, "hot_rank_chg": 15, "stock_cnt": 5858, "price": "73.92", "change": "-10.00", "market_id": "17", "circulate_market_value": "87409597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 17, "hot_rank_chg": -16, "stock_cnt": 5858, "price": "7.69", "change": "-0.52", "market_id": "33", "circulate_market_value": "12501585200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.74}, {"name": "电竞", "change_pct": 3.04}, {"name": "手游", "change_pct": 2.6}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "人工智能", "change_pct": 0.4}, {"name": "游戏", "change_pct": 2.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.75}, {"name": "腾讯概念股", "change_pct": 0.56}, {"name": "快手概念股", "change_pct": 1.32}, {"name": "元宇宙", "change_pct": 0.71}, {"name": "虚拟数字人", "change_pct": 1.36}, {"name": "东数西算/算力", "change_pct": -1.01}, {"name": "web3.0", "change_pct": 0.44}, {"name": "AIGC概念", "change_pct": 1.06}, {"name": "数据要素", "change_pct": 1.02}, {"name": "字节跳动概念股", "change_pct": 1.58}, {"name": "AI营销", "change_pct": 1.46}, {"name": "ChatGPT", "change_pct": 1.04}, {"name": "智能眼镜/MR头显", "change_pct": -1.68}, {"name": "人工智能大模型", "change_pct": 1.25}, {"name": "人形机器人", "change_pct": -0.77}, {"name": "短剧/互动影游", "change_pct": 2.67}, {"name": "多模态", "change_pct": 0.85}, {"name": "Sora/AI视频", "change_pct": 1.19}, {"name": "IP经济/谷子经济", "change_pct": 2.04}, {"name": "小红书概念股", "change_pct": 1.5}]}, {"code": "600667", "name": "太极实业", "hot_rank": 18, "hot_rank_chg": 7, "stock_cnt": 5858, "price": "20.81", "change": "-8.04", "market_id": "17", "circulate_market_value": "43524993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 19, "hot_rank_chg": 5, "stock_cnt": 5858, "price": "84.70", "change": "-0.29", "market_id": "33", "circulate_market_value": "124240654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 20, "hot_rank_chg": 15, "stock_cnt": 5858, "price": "131.50", "change": "3.13", "market_id": "17", "circulate_market_value": "325236350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 21, "hot_rank_chg": 16, "stock_cnt": 5858, "price": "47.65", "change": "-9.46", "market_id": "17", "circulate_market_value": "40338266000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 22, "hot_rank_chg": -7, "stock_cnt": 5858, "price": "112.09", "change": "-0.81", "market_id": "17", "circulate_market_value": "40433486000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002422", "name": "科伦药业", "hot_rank": 23, "hot_rank_chg": 55, "stock_cnt": 5858, "price": "49.07", "change": "1.18", "market_id": "33", "circulate_market_value": "63723424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 24, "hot_rank_chg": 6, "stock_cnt": 5858, "price": "40.70", "change": "-4.44", "market_id": "17", "circulate_market_value": "138907050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 25, "hot_rank_chg": 58, "stock_cnt": 5858, "price": "6.98", "change": "7.88", "market_id": "17", "circulate_market_value": "7621369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 3.3}, {"name": "化学原料药", "change_pct": 3.53}, {"name": "数字经济", "change_pct": 0.75}, {"name": "辅助生殖", "change_pct": 2.32}, {"name": "新冠病毒防治", "change_pct": 1.57}]}, {"code": "001309", "name": "德明利", "hot_rank": 26, "hot_rank_chg": -18, "stock_cnt": 5858, "price": "662.40", "change": "-10.00", "market_id": "33", "circulate_market_value": "109341050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 27, "hot_rank_chg": 16, "stock_cnt": 5858, "price": "28.13", "change": "-8.04", "market_id": "33", "circulate_market_value": "32239947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 28, "hot_rank_chg": -15, "stock_cnt": 5858, "price": "4.49", "change": "10.05", "market_id": "17", "circulate_market_value": "11308109300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.74}, {"name": "工业大麻", "change_pct": 2.58}, {"name": "中药", "change_pct": 2.98}, {"name": "保健品", "change_pct": 2.76}, {"name": "医药", "change_pct": 3.3}, {"name": "化学原料药", "change_pct": 3.53}, {"name": "流感", "change_pct": 2.61}, {"name": "振兴东北", "change_pct": 1.67}, {"name": "食品", "change_pct": 2.39}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 29, "hot_rank_chg": -7, "stock_cnt": 5858, "price": "425.45", "change": "6.32", "market_id": "17", "circulate_market_value": "172876640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 30, "hot_rank_chg": 6, "stock_cnt": 5858, "price": "145.21", "change": "-9.15", "market_id": "33", "circulate_market_value": "145933970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 31, "hot_rank_chg": -2, "stock_cnt": 5858, "price": "1169.31", "change": "-1.25", "market_id": "33", "circulate_market_value": "1297863680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002821", "name": "凯莱英", "hot_rank": 32, "hot_rank_chg": 49, "stock_cnt": 5858, "price": "195.75", "change": "10.00", "market_id": "33", "circulate_market_value": "62061335000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}, {"code": "301583", "name": "托伦斯", "hot_rank": 33, "hot_rank_chg": 44, "stock_cnt": 5858, "price": "139.66", "change": "-21.99", "market_id": "33", "circulate_market_value": "4305909600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 34, "hot_rank_chg": -7, "stock_cnt": 5858, "price": "556.00", "change": "-2.25", "market_id": "33", "circulate_market_value": "697359200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 35, "hot_rank_chg": 41, "stock_cnt": 5858, "price": "17.38", "change": "-9.99", "market_id": "17", "circulate_market_value": "57341822000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 36, "hot_rank_chg": 4, "stock_cnt": 5858, "price": "214.97", "change": "-7.72", "market_id": "33", "circulate_market_value": "167783730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 37, "hot_rank_chg": 12, "stock_cnt": 5858, "price": "39.45", "change": "-1.15", "market_id": "33", "circulate_market_value": "158889660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 38, "hot_rank_chg": -4, "stock_cnt": 5858, "price": "33.88", "change": "-6.10", "market_id": "33", "circulate_market_value": "36548638000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 39, "hot_rank_chg": 122, "stock_cnt": 5858, "price": "20.14", "change": "2.75", "market_id": "33", "circulate_market_value": "268935380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 40, "hot_rank_chg": 118, "stock_cnt": 5858, "price": "304.40", "change": "-15.06", "market_id": "17", "circulate_market_value": "143544890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 41, "hot_rank_chg": 28, "stock_cnt": 5858, "price": "40.30", "change": "9.12", "market_id": "33", "circulate_market_value": "57227288000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 42, "hot_rank_chg": 32, "stock_cnt": 5858, "price": "5.78", "change": "-1.70", "market_id": "17", "circulate_market_value": "71649395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.5}, {"name": "核电", "change_pct": -0.55}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "电力体制改革", "change_pct": 1.26}, {"name": "水电", "change_pct": 2.08}, {"name": "火电", "change_pct": 1.47}, {"name": "光伏", "change_pct": -0.84}, {"name": "风电", "change_pct": -0.47}, {"name": "国企改革", "change_pct": 0.79}, {"name": "算电协同", "change_pct": -2.05}]}, {"code": "301520", "name": "万邦医药", "hot_rank": 43, "hot_rank_chg": 153, "stock_cnt": 5858, "price": "58.79", "change": "20.00", "market_id": "33", "circulate_market_value": "1922341500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 44, "hot_rank_chg": 82, "stock_cnt": 5858, "price": "57.50", "change": "4.89", "market_id": "17", "circulate_market_value": "366792630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 45, "hot_rank_chg": 34, "stock_cnt": 5858, "price": "14.07", "change": "-7.62", "market_id": "17", "circulate_market_value": "17956918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 46, "hot_rank_chg": -27, "stock_cnt": 5858, "price": "137.23", "change": "0.07", "market_id": "33", "circulate_market_value": "263867280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 47, "hot_rank_chg": -24, "stock_cnt": 5858, "price": "152.43", "change": "3.06", "market_id": "17", "circulate_market_value": "364993870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 48, "hot_rank_chg": 13, "stock_cnt": 5858, "price": "488.00", "change": "-9.38", "market_id": "33", "circulate_market_value": "137543720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 50, "hot_rank_chg": 2, "stock_cnt": 5858, "price": "63.62", "change": "-3.02", "market_id": "17", "circulate_market_value": "1262481150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 51, "hot_rank_chg": 116, "stock_cnt": 5858, "price": "29.56", "change": "10.01", "market_id": "33", "circulate_market_value": "56180612000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "游戏"}, {"code": "000858", "name": "五粮液", "hot_rank": 52, "hot_rank_chg": -35, "stock_cnt": 5858, "price": "76.40", "change": "4.09", "market_id": "33", "circulate_market_value": "296547620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 53, "hot_rank_chg": -42, "stock_cnt": 5858, "price": "50.62", "change": "10.00", "market_id": "17", "circulate_market_value": "31908470000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "603669", "name": "灵康药业", "hot_rank": 54, "hot_rank_chg": 62, "stock_cnt": 5858, "price": "8.11", "change": "9.60", "market_id": "17", "circulate_market_value": "5777005700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "西藏概念", "change_pct": 1.62}, {"name": "民营医院", "change_pct": 2.68}, {"name": "医药", "change_pct": 3.3}, {"name": "流感", "change_pct": 2.61}, {"name": "幽门螺杆菌概念", "change_pct": 2.84}, {"name": "阿尔茨海默病", "change_pct": 2.96}]}, {"code": "603019", "name": "中科曙光", "hot_rank": 55, "hot_rank_chg": -23, "stock_cnt": 5858, "price": "96.76", "change": "-5.04", "market_id": "17", "circulate_market_value": "141565140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 56, "hot_rank_chg": 37, "stock_cnt": 5858, "price": "13.41", "change": "0.22", "market_id": "33", "circulate_market_value": "14246835000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 57, "hot_rank_chg": -36, "stock_cnt": 5858, "price": "27.52", "change": "-3.84", "market_id": "33", "circulate_market_value": "20844064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 58, "hot_rank_chg": 6, "stock_cnt": 5858, "price": "7.44", "change": "4.06", "market_id": "17", "circulate_market_value": "34335292000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -1.04}, {"name": "国产软件", "change_pct": 0.56}, {"name": "锂电池", "change_pct": -1.52}, {"name": "人工智能", "change_pct": 0.4}, {"name": "养老产业", "change_pct": 1.85}, {"name": "大飞机", "change_pct": -0.16}, {"name": "军民融合", "change_pct": -0.78}, {"name": "物联网", "change_pct": -0.34}, {"name": "大数据", "change_pct": 0.61}, {"name": "智慧城市", "change_pct": 0.05}, {"name": "军工", "change_pct": -0.7}, {"name": "新能源汽车", "change_pct": -0.68}, {"name": "机器人", "change_pct": -0.33}, {"name": "黑色家电", "change_pct": 0.46}, {"name": "家电", "change_pct": 0.4}, {"name": "储能", "change_pct": -0.63}, {"name": "智能制造", "change_pct": -0.28}, {"name": "工业互联网", "change_pct": 0.14}, {"name": "数字经济", "change_pct": 0.75}, {"name": "百度概念股", "change_pct": 0.98}, {"name": "NFT", "change_pct": 2.39}, {"name": "跨境支付", "change_pct": 1.38}, {"name": "华为海思", "change_pct": -1.38}, {"name": "云游戏", "change_pct": 1.95}, {"name": "网红/MCN", "change_pct": 1.65}, {"name": "华为产业链", "change_pct": -0.91}, {"name": "毫米波雷达", "change_pct": -1.89}, {"name": "服务器", "change_pct": -2.63}, {"name": "星闪概念", "change_pct": -0.68}, {"name": "低空经济", "change_pct": -0.41}]}, {"code": "605358", "name": "立昂微", "hot_rank": 59, "hot_rank_chg": 105, "stock_cnt": 5858, "price": "52.99", "change": "-10.00", "market_id": "17", "circulate_market_value": "40918845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 60, "hot_rank_chg": -4, "stock_cnt": 5858, "price": "83.93", "change": "-6.43", "market_id": "33", "circulate_market_value": "69259056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 61, "hot_rank_chg": -15, "stock_cnt": 5858, "price": "16.51", "change": "-1.90", "market_id": "33", "circulate_market_value": "53254488000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 62, "hot_rank_chg": -14, "stock_cnt": 5858, "price": "47.06", "change": "-3.17", "market_id": "17", "circulate_market_value": "68801475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605189", "name": "富春染织", "hot_rank": 63, "hot_rank_chg": 149, "stock_cnt": 5858, "price": "15.64", "change": "9.99", "market_id": "17", "circulate_market_value": "3725994400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报预增"}, {"code": "600176", "name": "中国巨石", "hot_rank": 64, "hot_rank_chg": -31, "stock_cnt": 5858, "price": "53.00", "change": "-2.79", "market_id": "17", "circulate_market_value": "210494110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 65, "hot_rank_chg": 170, "stock_cnt": 5858, "price": "12.33", "change": "3.44", "market_id": "17", "circulate_market_value": "18158475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.5}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "电力体制改革", "change_pct": 1.26}, {"name": "火电", "change_pct": 1.47}, {"name": "氢能源/燃料电池", "change_pct": -0.59}, {"name": "风电", "change_pct": -0.47}, {"name": "国企改革", "change_pct": 0.79}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 66, "hot_rank_chg": -13, "stock_cnt": 5858, "price": "10.25", "change": "3.02", "market_id": "17", "circulate_market_value": "18338667000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 2.12}, {"name": "纯碱", "change_pct": 1.23}, {"name": "食品", "change_pct": 2.39}, {"name": "土壤修复", "change_pct": 0.74}, {"name": "东数西算/算力", "change_pct": -1.01}, {"name": "OpenClaw概念", "change_pct": -0.45}, {"name": "DeepSeek概念股", "change_pct": -0.07}]}, {"code": "001399", "name": "惠科股份", "hot_rank": 67, "hot_rank_chg": 50, "stock_cnt": 5858, "price": "27.07", "change": "-9.77", "market_id": "33", "circulate_market_value": "11655441400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601888", "name": "中国中免", "hot_rank": 68, "hot_rank_chg": 61, "stock_cnt": 5858, "price": "54.41", "change": "6.85", "market_id": "17", "circulate_market_value": "106234194000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002457", "name": "青龙管业", "hot_rank": 69, "hot_rank_chg": 78, "stock_cnt": 5858, "price": "11.70", "change": "-8.31", "market_id": "33", "circulate_market_value": "3899263100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水利", "change_pct": 0.68}, {"name": "海绵城市", "change_pct": 1.09}, {"name": "风电", "change_pct": -0.47}, {"name": "地下管廊", "change_pct": 0.76}, {"name": "雄安新区", "change_pct": 0.4}, {"name": "PPP", "change_pct": -0.9}, {"name": "新型城镇化", "change_pct": 0.97}, {"name": "旧改", "change_pct": 1.4}, {"name": "宁夏概念", "change_pct": -0.07}]}, {"code": "300821", "name": "东岳硅材", "hot_rank": 70, "hot_rank_chg": 62, "stock_cnt": 5858, "price": "19.51", "change": "-16.01", "market_id": "33", "circulate_market_value": "23407918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 71, "hot_rank_chg": -27, "stock_cnt": 5858, "price": "10.83", "change": "-4.83", "market_id": "33", "circulate_market_value": "6316172700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -2.12}, {"name": "一带一路", "change_pct": 0.45}, {"name": "天然气", "change_pct": -0.61}, {"name": "油气改革", "change_pct": -0.65}, {"name": "页岩气", "change_pct": -2.24}, {"name": "深地经济", "change_pct": -1.37}]}, {"code": "300085", "name": "银之杰", "hot_rank": 72, "hot_rank_chg": 689, "stock_cnt": 5858, "price": "30.61", "change": "5.01", "market_id": "33", "circulate_market_value": "19958114000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003020", "name": "立方制药", "hot_rank": 73, "hot_rank_chg": 33, "stock_cnt": 5858, "price": "21.91", "change": "5.34", "market_id": "33", "circulate_market_value": "3692892300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 74, "hot_rank_chg": 37, "stock_cnt": 5858, "price": "38.57", "change": "-7.73", "market_id": "17", "circulate_market_value": "64183251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600129", "name": "太极集团", "hot_rank": 75, "hot_rank_chg": 32, "stock_cnt": 5858, "price": "17.98", "change": "1.99", "market_id": "17", "circulate_market_value": "9914499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 76, "hot_rank_chg": -34, "stock_cnt": 5858, "price": "94.79", "change": "-0.93", "market_id": "33", "circulate_market_value": "68657858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600992", "name": "贵绳股份", "hot_rank": 77, "hot_rank_chg": 155, "stock_cnt": 5858, "price": "11.35", "change": "7.58", "market_id": "17", "circulate_market_value": "2781771500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "航母", "change_pct": -0.35}, {"name": "军工", "change_pct": -0.7}, {"name": "航天", "change_pct": -1.43}, {"name": "国企改革", "change_pct": 0.79}]}, {"code": "002364", "name": "中恒电气", "hot_rank": 78, "hot_rank_chg": 113, "stock_cnt": 5858, "price": "48.72", "change": "-9.11", "market_id": "33", "circulate_market_value": "27190815000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 80, "hot_rank_chg": -17, "stock_cnt": 5858, "price": "171.30", "change": "-8.63", "market_id": "33", "circulate_market_value": "54562947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 81, "hot_rank_chg": 5, "stock_cnt": 5858, "price": "91.76", "change": "1.75", "market_id": "33", "circulate_market_value": "319931650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 82, "hot_rank_chg": 83, "stock_cnt": 5858, "price": "1251.06", "change": "2.98", "market_id": "17", "circulate_market_value": "1563927100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601995", "name": "中金公司", "hot_rank": 83, "hot_rank_chg": 339, "stock_cnt": 5858, "price": "38.34", "change": "8.18", "market_id": "17", "circulate_market_value": "112088617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 84, "hot_rank_chg": -46, "stock_cnt": 5858, "price": "28.83", "change": "-0.79", "market_id": "17", "circulate_market_value": "593949700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002851", "name": "麦格米特", "hot_rank": 85, "hot_rank_chg": -10, "stock_cnt": 5858, "price": "168.63", "change": "-2.05", "market_id": "33", "circulate_market_value": "77275020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 86, "hot_rank_chg": 57, "stock_cnt": 5858, "price": "9.69", "change": "-3.87", "market_id": "33", "circulate_market_value": "39144303000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -4.99}, {"name": "一带一路", "change_pct": 0.45}, {"name": "京津冀", "change_pct": 0.89}, {"name": "光伏", "change_pct": -0.84}, {"name": "碳中和", "change_pct": 0.6}, {"name": "国产芯片", "change_pct": -4.11}, {"name": "IGBT", "change_pct": -4.17}, {"name": "颗粒硅", "change_pct": 0.1}, {"name": "异质结电池HJT", "change_pct": -2.06}, {"name": "大硅片", "change_pct": -7.31}]}, {"code": "002208", "name": "合肥城建", "hot_rank": 87, "hot_rank_chg": -27, "stock_cnt": 5858, "price": "16.91", "change": "-10.01", "market_id": "33", "circulate_market_value": "13579952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 88, "hot_rank_chg": 20, "stock_cnt": 5858, "price": "259.40", "change": "-5.16", "market_id": "33", "circulate_market_value": "282327860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 89, "hot_rank_chg": -44, "stock_cnt": 5858, "price": "5.02", "change": "-2.14", "market_id": "33", "circulate_market_value": "100993999000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.56}, {"name": "手机产业链", "change_pct": -2.8}, {"name": "超高清视频", "change_pct": -1.04}, {"name": "电竞", "change_pct": 3.04}, {"name": "半导体", "change_pct": -4.99}, {"name": "OLED", "change_pct": -3.45}, {"name": "光伏", "change_pct": -0.84}, {"name": "黑色家电", "change_pct": 0.46}, {"name": "家电", "change_pct": 0.4}, {"name": "智能制造", "change_pct": -0.28}, {"name": "工业互联网", "change_pct": 0.14}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.19}, {"name": "国产芯片", "change_pct": -4.11}, {"name": "腾讯概念股", "change_pct": 0.56}, {"name": "液晶面板/LCD", "change_pct": -3.41}, {"name": "MicroLED", "change_pct": -3.3}, {"name": "MiniLED", "change_pct": -3.4}, {"name": "华为产业链", "change_pct": -0.91}, {"name": "玻璃基板封装", "change_pct": -5.26}]}, {"code": "605090", "name": "九丰能源", "hot_rank": 90, "hot_rank_chg": 41, "stock_cnt": 5858, "price": "41.60", "change": "5.58", "market_id": "17", "circulate_market_value": "29308322000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 91, "hot_rank_chg": 136, "stock_cnt": 5858, "price": "39.65", "change": "4.12", "market_id": "33", "circulate_market_value": "130071795000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 92, "hot_rank_chg": -5, "stock_cnt": 5858, "price": "14.25", "change": "-4.81", "market_id": "17", "circulate_market_value": "71093517000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 94, "hot_rank_chg": -76, "stock_cnt": 5858, "price": "47.43", "change": "0.17", "market_id": "33", "circulate_market_value": "69993589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 95, "hot_rank_chg": 87, "stock_cnt": 5858, "price": "12.68", "change": "2.09", "market_id": "33", "circulate_market_value": "44100156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.74}, {"name": "人工智能", "change_pct": 0.4}, {"name": "VR&AR", "change_pct": -1.16}, {"name": "直播/短视频", "change_pct": 1.1}, {"name": "大数据", "change_pct": 0.61}, {"name": "教育", "change_pct": 0.92}, {"name": "百度概念股", "change_pct": 0.98}, {"name": "阿里巴巴概念股", "change_pct": 0.52}, {"name": "腾讯概念股", "change_pct": 0.56}, {"name": "传媒", "change_pct": 2.46}, {"name": "快手概念股", "change_pct": 1.32}, {"name": "NFT", "change_pct": 2.39}, {"name": "元宇宙", "change_pct": 0.71}, {"name": "虚拟数字人", "change_pct": 1.36}, {"name": "web3.0", "change_pct": 0.44}, {"name": "AIGC概念", "change_pct": 1.06}, {"name": "字节跳动概念股", "change_pct": 1.58}, {"name": "职业教育", "change_pct": 1.3}, {"name": "云游戏", "change_pct": 1.95}, {"name": "网红/MCN", "change_pct": 1.65}, {"name": "5G消息/RCS", "change_pct": 0.55}, {"name": "AI营销", "change_pct": 1.46}, {"name": "词元概念/Token", "change_pct": -0.12}, {"name": "人工智能大模型", "change_pct": 1.25}, {"name": "Sora/AI视频", "change_pct": 1.19}, {"name": "智谱AI", "change_pct": 0.46}, {"name": "小红书概念股", "change_pct": 1.5}, {"name": "区块链", "change_pct": 1.13}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 97, "hot_rank_chg": 0, "stock_cnt": 5858, "price": "87.83", "change": "-7.32", "market_id": "33", "circulate_market_value": "57356119000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 98, "hot_rank_chg": -7, "stock_cnt": 5858, "price": "221.20", "change": "-4.20", "market_id": "33", "circulate_market_value": "99547912000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300033", "name": "同花顺", "hot_rank": 100, "hot_rank_chg": 270, "stock_cnt": 5858, "price": "224.30", "change": "3.04", "market_id": "33", "circulate_market_value": "98335568000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "600745": "ST/风险警示股", "000078": "ST/风险警示股"};