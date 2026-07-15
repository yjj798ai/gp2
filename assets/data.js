const UPDATE_TIME = "2026-07-15 19:04";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 3.65,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "CRO概念",
    "rise": 4.74,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "存储芯片",
    "rise": -5.2,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续202天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.88,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续249天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": -1.3,
    "rate": 0,
    "tag": "",
    "hotTag": "连续178天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "AI应用",
    "rise": 1.28,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "PCB概念",
    "rise": -3.49,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "猪肉",
    "rise": 2.23,
    "rate": 0,
    "tag": "",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "人工智能",
    "rise": 0.58,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "减肥药",
    "rise": 4.37,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 1,
    "etfName": "创新药ETF",
    "code": "886051"
  },
  {
    "name": "人形机器人",
    "rise": -0.84,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续413天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "白酒概念",
    "rise": 3.01,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "2026中报预增",
    "rise": -0.18,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "886110"
  },
  {
    "name": "机器人概念",
    "rise": -0.4,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "算力租赁",
    "rise": -0.33,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续113天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "先进封装",
    "rise": -5.17,
    "rate": 0,
    "tag": "",
    "hotTag": "连续42天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "ST板块",
    "rise": 0.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "芯片概念",
    "rise": -2.77,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "885756"
  },
  {
    "name": "阿里巴巴概念",
    "rise": 0.29,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885611"
  },
  {
    "name": "光纤概念",
    "rise": -2.46,
    "rate": 0,
    "tag": "",
    "hotTag": "连续78天上榜",
    "rankChg": 0,
    "etfName": "成长ETF",
    "code": "886084"
  }
];
const THS_EVENTS = [
  {
    "title": "“BD红利”进入兑现窗口 创新药企价值加速分化",
    "desc": "",
    "heat": 814310,
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
    "heat": 409255,
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
    "heat": 221599,
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
    "title": "SK 海力士美股 ADR 单日暴涨 27.29% 创新高，较韩股溢价超 50%",
    "desc": "",
    "heat": 63491,
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
  },
  {
    "title": "以色列芯片厂商Tower Semiconductor将在日本投资30亿美元",
    "desc": "",
    "heat": 41409,
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
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5742,
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
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 4,
    "hot_rank_chg": 0,
    "stock_cnt": 5742,
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
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 20,
    "hot_rank_chg": 5,
    "stock_cnt": 5742,
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
        "change_pct": 2.98
      },
      {
        "name": "创新药",
        "change_pct": 4.0
      },
      {
        "name": "央企改革",
        "change_pct": 0.5
      },
      {
        "name": "医疗器械",
        "change_pct": 2.24
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.29
      },
      {
        "name": "保健品",
        "change_pct": 2.76
      },
      {
        "name": "民营医院",
        "change_pct": 2.68
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 3.14
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
        "name": "海南概念",
        "change_pct": 1.44
      },
      {
        "name": "脑科学",
        "change_pct": 1.03
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.46
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.62
      },
      {
        "name": "食品",
        "change_pct": 2.39
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.06
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.57
      },
      {
        "name": "自贸区",
        "change_pct": 1.19
      },
      {
        "name": "合成生物",
        "change_pct": 2.52
      }
    ]
  },
  {
    "code": "603336",
    "name": "宏辉果蔬",
    "hot_rank": 26,
    "hot_rank_chg": -3,
    "stock_cnt": 5742,
    "price": "8.50",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "5174111000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "果蔬服务",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.45
      },
      {
        "name": "农业种植",
        "change_pct": 0.96
      },
      {
        "name": "冷链",
        "change_pct": -0.05
      },
      {
        "name": "社区团购",
        "change_pct": 2.33
      },
      {
        "name": "苹果期货",
        "change_pct": 2.79
      },
      {
        "name": "大农业",
        "change_pct": 1.41
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 2.34
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 28,
    "hot_rank_chg": 6,
    "stock_cnt": 5742,
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
        "change_pct": 1.96
      },
      {
        "name": "锂电池",
        "change_pct": -1.52
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -3.11
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.4
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.68
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 1.36
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 30,
    "hot_rank_chg": 1,
    "stock_cnt": 5742,
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
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 33,
    "hot_rank_chg": 7,
    "stock_cnt": 5742,
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
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 36,
    "hot_rank_chg": 5,
    "stock_cnt": 5742,
    "price": "2.92",
    "change": "10.19",
    "market_id": "17",
    "circulate_market_value": "3730591400.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报预计扭亏",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.98
      },
      {
        "name": "甲醇",
        "change_pct": 1.62
      },
      {
        "name": "化肥",
        "change_pct": 1.78
      },
      {
        "name": "保健品",
        "change_pct": 2.76
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
        "name": "煤化工",
        "change_pct": 2.48
      },
      {
        "name": "食品",
        "change_pct": 2.39
      },
      {
        "name": "大农业",
        "change_pct": 1.41
      },
      {
        "name": "低价股",
        "change_pct": 1.1
      },
      {
        "name": "干细胞",
        "change_pct": 3.13
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 2.96
      }
    ]
  },
  {
    "code": "603669",
    "name": "灵康药业",
    "hot_rank": 37,
    "hot_rank_chg": 1,
    "stock_cnt": 5742,
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
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 43,
    "hot_rank_chg": 16,
    "stock_cnt": 5742,
    "price": "2.26",
    "change": "10.24",
    "market_id": "33",
    "circulate_market_value": "9941761400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.03
      },
      {
        "name": "京津冀",
        "change_pct": 0.89
      },
      {
        "name": "旅游",
        "change_pct": 2.16
      },
      {
        "name": "园林",
        "change_pct": 0.65
      },
      {
        "name": "海绵城市",
        "change_pct": 1.09
      },
      {
        "name": "固废处理",
        "change_pct": 0.75
      },
      {
        "name": "雄安新区",
        "change_pct": 0.4
      },
      {
        "name": "北京城市规划",
        "change_pct": 1.76
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": 0.36
      },
      {
        "name": "碳中和",
        "change_pct": 0.6
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.34
      },
      {
        "name": "汽车拆解",
        "change_pct": 1.36
      },
      {
        "name": "土壤修复",
        "change_pct": 0.74
      },
      {
        "name": "核污染防治",
        "change_pct": -0.23
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.97
      },
      {
        "name": "低价股",
        "change_pct": 1.1
      },
      {
        "name": "西部大开发",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 45,
    "hot_rank_chg": 17,
    "stock_cnt": 5742,
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
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 46,
    "hot_rank_chg": 1,
    "stock_cnt": 5742,
    "price": "9.38",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "19529177000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "院线龙头",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 3.26
      },
      {
        "name": "足球",
        "change_pct": 0.77
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.52
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.88
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.65
      },
      {
        "name": "大消费",
        "change_pct": 3.3
      },
      {
        "name": "盲盒",
        "change_pct": 2.5
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.67
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.04
      },
      {
        "name": "首发经济",
        "change_pct": 2.61
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.5
      },
      {
        "name": "服务消费",
        "change_pct": 2.51
      }
    ]
  },
  {
    "code": "600829",
    "name": "人民同泰",
    "hot_rank": 48,
    "hot_rank_chg": -4,
    "stock_cnt": 5742,
    "price": "9.89",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "5735098200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "医药零售",
    "xgb_concepts": [
      {
        "name": "医药商业",
        "change_pct": 2.34
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
        "name": "振兴东北",
        "change_pct": 1.67
      },
      {
        "name": "宠物经济",
        "change_pct": 3.38
      },
      {
        "name": "眼科",
        "change_pct": 2.86
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 49,
    "hot_rank_chg": 8,
    "stock_cnt": 5742,
    "price": "7.57",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "2911025600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "CRO",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 4.0
      },
      {
        "name": "股权转让",
        "change_pct": -0.08
      },
      {
        "name": "新疆概念",
        "change_pct": 1.33
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
        "name": "国资入股",
        "change_pct": 0.54
      },
      {
        "name": "减肥药",
        "change_pct": 5.37
      }
    ]
  },
  {
    "code": "002303",
    "name": "美盈森",
    "hot_rank": 51,
    "hot_rank_chg": 19,
    "stock_cnt": 5742,
    "price": "5.01",
    "change": "10.11",
    "market_id": "33",
    "circulate_market_value": "4844074100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "消费电子包装",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.33
      },
      {
        "name": "工业大麻",
        "change_pct": 2.58
      },
      {
        "name": "造纸",
        "change_pct": 1.04
      },
      {
        "name": "军民融合",
        "change_pct": -0.78
      },
      {
        "name": "包装印刷",
        "change_pct": 0.52
      },
      {
        "name": "军工",
        "change_pct": -0.7
      },
      {
        "name": "预制菜",
        "change_pct": 2.63
      },
      {
        "name": "人造肉",
        "change_pct": 2.19
      },
      {
        "name": "数字乡村",
        "change_pct": 1.14
      },
      {
        "name": "区块链",
        "change_pct": 1.13
      }
    ]
  },
  {
    "code": "300149",
    "name": "睿智医药",
    "hot_rank": 54,
    "hot_rank_chg": 1,
    "stock_cnt": 5742,
    "price": "10.39",
    "change": "19.98",
    "market_id": "33",
    "circulate_market_value": "4930714400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "CRO",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 4.0
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.37
      },
      {
        "name": "人工智能",
        "change_pct": 0.4
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 3.14
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
        "name": "食品",
        "change_pct": 2.39
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 1.75
      },
      {
        "name": "减肥药",
        "change_pct": 5.37
      },
      {
        "name": "AI医疗",
        "change_pct": 2.86
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 57,
    "hot_rank_chg": 21,
    "stock_cnt": 5742,
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
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 60,
    "hot_rank_chg": 7,
    "stock_cnt": 5742,
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
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 63,
    "hot_rank_chg": 17,
    "stock_cnt": 5742,
    "price": "2.74",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "6592802500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报预计扭亏",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -1.52
      },
      {
        "name": "5G",
        "change_pct": -2.2
      },
      {
        "name": "一带一路",
        "change_pct": 0.45
      },
      {
        "name": "光通信",
        "change_pct": -3.0
      },
      {
        "name": "军民融合",
        "change_pct": -0.78
      },
      {
        "name": "光伏",
        "change_pct": -0.84
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
        "name": "储能",
        "change_pct": -0.63
      },
      {
        "name": "BIPV概念",
        "change_pct": 0.82
      },
      {
        "name": "低价股",
        "change_pct": 1.1
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.59
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.06
      },
      {
        "name": "华为产业链",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 66,
    "hot_rank_chg": 8,
    "stock_cnt": 5742,
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
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 67,
    "hot_rank_chg": 4,
    "stock_cnt": 5742,
    "price": "5.63",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "13460274000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报减亏",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 2.17
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      },
      {
        "name": "河南国企改革",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "000908",
    "name": "石药景峰",
    "hot_rank": 76,
    "hot_rank_chg": 9,
    "stock_cnt": 5742,
    "price": "7.50",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "6598307600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "芬太尼概念",
        "change_pct": 3.01
      },
      {
        "name": "债转股 · AMC",
        "change_pct": 0.79
      },
      {
        "name": "中药",
        "change_pct": 2.98
      },
      {
        "name": "创新药",
        "change_pct": 4.0
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.61
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
        "name": "眼科",
        "change_pct": 2.86
      },
      {
        "name": "医美",
        "change_pct": 3.18
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 80,
    "hot_rank_chg": -7,
    "stock_cnt": 5742,
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
    "code": "002640",
    "name": "跨境通",
    "hot_rank": 84,
    "hot_rank_chg": 19,
    "stock_cnt": 5742,
    "price": "3.14",
    "change": "10.18",
    "market_id": "33",
    "circulate_market_value": "4861542700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.74
      },
      {
        "name": "数字经济",
        "change_pct": 0.75
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.88
      },
      {
        "name": "无线耳机",
        "change_pct": -2.43
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.65
      }
    ]
  },
  {
    "code": "000989",
    "name": "九芝堂",
    "hot_rank": 88,
    "hot_rank_chg": 12,
    "stock_cnt": 5742,
    "price": "9.99",
    "change": "5.49",
    "market_id": "33",
    "circulate_market_value": "6934596000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.98
      },
      {
        "name": "创新药",
        "change_pct": 4.0
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.29
      },
      {
        "name": "医药",
        "change_pct": 3.3
      },
      {
        "name": "干细胞",
        "change_pct": 3.13
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 90,
    "hot_rank_chg": -11,
    "stock_cnt": 5742,
    "price": "6.87",
    "change": "1.78",
    "market_id": "33",
    "circulate_market_value": "4504700400.00",
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
        "name": "新零售",
        "change_pct": 2.3
      },
      {
        "name": "农业种植",
        "change_pct": 0.96
      },
      {
        "name": "冷链",
        "change_pct": -0.05
      },
      {
        "name": "大农业",
        "change_pct": 1.41
      },
      {
        "name": "预制菜",
        "change_pct": 2.63
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.98
      },
      {
        "name": "免税店概念",
        "change_pct": 2.82
      },
      {
        "name": "湖北国企改革",
        "change_pct": 0.62
      }
    ]
  },
  {
    "code": "000888",
    "name": "峨眉山A",
    "hot_rank": 91,
    "hot_rank_chg": -39,
    "stock_cnt": 5742,
    "price": "9.79",
    "change": "5.38",
    "market_id": "33",
    "circulate_market_value": "5158479300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "旅游",
        "change_pct": 2.16
      },
      {
        "name": "大数据",
        "change_pct": 0.61
      },
      {
        "name": "冰雪产业",
        "change_pct": 1.14
      },
      {
        "name": "全息概念",
        "change_pct": 0.31
      },
      {
        "name": "NFT",
        "change_pct": 2.39
      },
      {
        "name": "智慧政务",
        "change_pct": 0.4
      },
      {
        "name": "国资入股",
        "change_pct": 0.54
      },
      {
        "name": "低空经济",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "601933",
    "name": "永辉超市",
    "hot_rank": 98,
    "hot_rank_chg": 129,
    "stock_cnt": 5742,
    "price": "3.20",
    "change": "3.23",
    "market_id": "17",
    "circulate_market_value": "28560119000.00",
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
        "name": "高管增持",
        "change_pct": 0.46
      },
      {
        "name": "新零售",
        "change_pct": 2.3
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.56
      },
      {
        "name": "社区团购",
        "change_pct": 2.33
      },
      {
        "name": "大消费",
        "change_pct": 3.3
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "603127", "name": "昭衍新药", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5742, "price": "50.62", "change": "10.00", "market_id": "17", "circulate_market_value": "31908470000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5742, "price": "4.49", "change": "10.05", "market_id": "17", "circulate_market_value": "11308109300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.74}, {"name": "工业大麻", "change_pct": 2.58}, {"name": "中药", "change_pct": 2.98}, {"name": "保健品", "change_pct": 2.76}, {"name": "医药", "change_pct": 3.3}, {"name": "化学原料药", "change_pct": 3.53}, {"name": "流感", "change_pct": 2.61}, {"name": "振兴东北", "change_pct": 1.67}, {"name": "食品", "change_pct": 2.39}]}, {"code": "002185", "name": "华天科技", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5742, "price": "23.11", "change": "-10.01", "market_id": "33", "circulate_market_value": "76786482000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5742, "price": "6.38", "change": "-9.12", "market_id": "33", "circulate_market_value": "225642320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.56}, {"name": "手机产业链", "change_pct": -2.8}, {"name": "超高清视频", "change_pct": -1.04}, {"name": "苹果产业链", "change_pct": -2.8}, {"name": "电竞", "change_pct": 3.04}, {"name": "半导体", "change_pct": -4.99}, {"name": "人工智能", "change_pct": 0.4}, {"name": "互联网医疗", "change_pct": 2.29}, {"name": "VR&AR", "change_pct": -1.16}, {"name": "OLED", "change_pct": -3.45}, {"name": "京津冀", "change_pct": 0.89}, {"name": "物联网", "change_pct": -0.34}, {"name": "指纹识别", "change_pct": -2.99}, {"name": "汽车零部件", "change_pct": 0.16}, {"name": "白马股", "change_pct": 1.55}, {"name": "智能制造", "change_pct": -0.28}, {"name": "小米概念股", "change_pct": -2.19}, {"name": "国产芯片", "change_pct": -4.11}, {"name": "液晶面板/LCD", "change_pct": -3.41}, {"name": "全息概念", "change_pct": 0.31}, {"name": "理想汽车概念股", "change_pct": 0.32}, {"name": "MicroLED", "change_pct": -3.3}, {"name": "钙钛矿电池", "change_pct": -1.59}, {"name": "智能手表", "change_pct": -2.29}, {"name": "MiniLED", "change_pct": -3.4}, {"name": "传感器", "change_pct": -2.16}, {"name": "大硅片", "change_pct": -7.31}, {"name": "AI PC", "change_pct": -2.35}, {"name": "华为产业链", "change_pct": -0.91}, {"name": "回购", "change_pct": 1.12}, {"name": "智能眼镜/MR头显", "change_pct": -1.68}, {"name": "玻璃基板封装", "change_pct": -5.26}]}, {"code": "603538", "name": "美诺华", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5742, "price": "39.00", "change": "10.01", "market_id": "17", "circulate_market_value": "13139878100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "GLP-1减肥药"}, {"code": "603137", "name": "恒尚节能", "hot_rank": 6, "hot_rank_chg": 1, "stock_cnt": 5742, "price": "35.61", "change": "10.01", "market_id": "17", "circulate_market_value": "6514256000.00", "change_type": "1", "change_section": "11", "change_days": "10", "change_reason": "拟收购存储公司"}, {"code": "600584", "name": "长电科技", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5742, "price": "92.46", "change": "-9.97", "market_id": "17", "circulate_market_value": "165449270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5742, "price": "662.40", "change": "-10.00", "market_id": "33", "circulate_market_value": "109341050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 9, "hot_rank_chg": 3, "stock_cnt": 5742, "price": "14.95", "change": "10.01", "market_id": "33", "circulate_market_value": "22810431000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力"}, {"code": "002384", "name": "东山精密", "hot_rank": 10, "hot_rank_chg": -1, "stock_cnt": 5742, "price": "262.49", "change": "0.81", "market_id": "33", "circulate_market_value": "363895590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5742, "price": "78.71", "change": "1.08", "market_id": "33", "circulate_market_value": "119438664000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 12, "hot_rank_chg": 4, "stock_cnt": 5742, "price": "29.56", "change": "10.01", "market_id": "33", "circulate_market_value": "56180612000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "游戏"}, {"code": "301520", "name": "万邦医药", "hot_rank": 13, "hot_rank_chg": 4, "stock_cnt": 5742, "price": "58.79", "change": "20.00", "market_id": "33", "circulate_market_value": "1922341500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}, {"code": "000938", "name": "紫光股份", "hot_rank": 14, "hot_rank_chg": -1, "stock_cnt": 5742, "price": "35.53", "change": "-3.92", "market_id": "33", "circulate_market_value": "101618382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 15, "hot_rank_chg": 5, "stock_cnt": 5742, "price": "40.90", "change": "6.51", "market_id": "33", "circulate_market_value": "32000349000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002821", "name": "凯莱英", "hot_rank": 16, "hot_rank_chg": -1, "stock_cnt": 5742, "price": "195.75", "change": "10.00", "market_id": "33", "circulate_market_value": "62061335000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}, {"code": "000021", "name": "深科技", "hot_rank": 17, "hot_rank_chg": 2, "stock_cnt": 5742, "price": "47.26", "change": "-10.00", "market_id": "33", "circulate_market_value": "74394593000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 18, "hot_rank_chg": -8, "stock_cnt": 5742, "price": "304.40", "change": "-15.06", "market_id": "17", "circulate_market_value": "143544890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 19, "hot_rank_chg": -5, "stock_cnt": 5742, "price": "131.50", "change": "3.13", "market_id": "17", "circulate_market_value": "325236350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 20, "hot_rank_chg": 5, "stock_cnt": 5742, "price": "5.15", "change": "10.04", "market_id": "33", "circulate_market_value": "6678188500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 2.98}, {"name": "创新药", "change_pct": 4.0}, {"name": "央企改革", "change_pct": 0.5}, {"name": "医疗器械", "change_pct": 2.24}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "互联网医疗", "change_pct": 2.29}, {"name": "保健品", "change_pct": 2.76}, {"name": "民营医院", "change_pct": 2.68}, {"name": "CAR-T疗法", "change_pct": 3.14}, {"name": "医药", "change_pct": 3.3}, {"name": "化学原料药", "change_pct": 3.53}, {"name": "海南概念", "change_pct": 1.44}, {"name": "脑科学", "change_pct": 1.03}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 1.46}, {"name": "海南自由贸易港", "change_pct": 1.62}, {"name": "食品", "change_pct": 2.39}, {"name": "国企改革", "change_pct": 0.79}, {"name": "医疗信息化", "change_pct": 1.06}, {"name": "新冠病毒防治", "change_pct": 1.57}, {"name": "自贸区", "change_pct": 1.19}, {"name": "合成生物", "change_pct": 2.52}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 21, "hot_rank_chg": 1, "stock_cnt": 5742, "price": "84.70", "change": "-0.29", "market_id": "33", "circulate_market_value": "124240654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 22, "hot_rank_chg": 7, "stock_cnt": 5742, "price": "20.81", "change": "-8.04", "market_id": "17", "circulate_market_value": "43524993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 23, "hot_rank_chg": -5, "stock_cnt": 5742, "price": "73.92", "change": "-10.00", "market_id": "17", "circulate_market_value": "87409597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 24, "hot_rank_chg": 4, "stock_cnt": 5742, "price": "66.99", "change": "10.00", "market_id": "33", "circulate_market_value": "31168593000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增"}, {"code": "603986", "name": "兆易创新", "hot_rank": 25, "hot_rank_chg": -4, "stock_cnt": 5742, "price": "571.79", "change": "-2.09", "market_id": "17", "circulate_market_value": "382237000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603336", "name": "宏辉果蔬", "hot_rank": 26, "hot_rank_chg": -3, "stock_cnt": 5742, "price": "8.50", "change": "9.96", "market_id": "17", "circulate_market_value": "5174111000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "果蔬服务", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.45}, {"name": "农业种植", "change_pct": 0.96}, {"name": "冷链", "change_pct": -0.05}, {"name": "社区团购", "change_pct": 2.33}, {"name": "苹果期货", "change_pct": 2.79}, {"name": "大农业", "change_pct": 1.41}, {"name": "蜜雪冰城概念股", "change_pct": 2.34}]}, {"code": "300759", "name": "康龙化成", "hot_rank": 27, "hot_rank_chg": -1, "stock_cnt": 5742, "price": "40.30", "change": "9.12", "market_id": "33", "circulate_market_value": "57227288000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 28, "hot_rank_chg": 6, "stock_cnt": 5742, "price": "5.61", "change": "10.00", "market_id": "33", "circulate_market_value": "5794769800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.96}, {"name": "锂电池", "change_pct": -1.52}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "铜箔/覆铜板", "change_pct": -3.11}, {"name": "粤港澳大湾区", "change_pct": 1.4}, {"name": "新能源汽车", "change_pct": -0.68}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 1.36}]}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 29, "hot_rank_chg": -2, "stock_cnt": 5742, "price": "57.50", "change": "4.89", "market_id": "17", "circulate_market_value": "366792630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 30, "hot_rank_chg": 1, "stock_cnt": 5742, "price": "6.98", "change": "7.88", "market_id": "17", "circulate_market_value": "7621369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 3.3}, {"name": "化学原料药", "change_pct": 3.53}, {"name": "数字经济", "change_pct": 0.75}, {"name": "辅助生殖", "change_pct": 2.32}, {"name": "新冠病毒防治", "change_pct": 1.57}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 31, "hot_rank_chg": -7, "stock_cnt": 5742, "price": "71.05", "change": "-4.48", "market_id": "17", "circulate_market_value": "174331570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 32, "hot_rank_chg": -2, "stock_cnt": 5742, "price": "33.29", "change": "6.87", "market_id": "33", "circulate_market_value": "25354243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 33, "hot_rank_chg": 7, "stock_cnt": 5742, "price": "7.69", "change": "-0.52", "market_id": "33", "circulate_market_value": "12501585200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.74}, {"name": "电竞", "change_pct": 3.04}, {"name": "手游", "change_pct": 2.6}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "人工智能", "change_pct": 0.4}, {"name": "游戏", "change_pct": 2.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.75}, {"name": "腾讯概念股", "change_pct": 0.56}, {"name": "快手概念股", "change_pct": 1.32}, {"name": "元宇宙", "change_pct": 0.71}, {"name": "虚拟数字人", "change_pct": 1.36}, {"name": "东数西算/算力", "change_pct": -1.01}, {"name": "web3.0", "change_pct": 0.44}, {"name": "AIGC概念", "change_pct": 1.06}, {"name": "数据要素", "change_pct": 1.02}, {"name": "字节跳动概念股", "change_pct": 1.58}, {"name": "AI营销", "change_pct": 1.46}, {"name": "ChatGPT", "change_pct": 1.04}, {"name": "智能眼镜/MR头显", "change_pct": -1.68}, {"name": "人工智能大模型", "change_pct": 1.25}, {"name": "人形机器人", "change_pct": -0.77}, {"name": "短剧/互动影游", "change_pct": 2.67}, {"name": "多模态", "change_pct": 0.85}, {"name": "Sora/AI视频", "change_pct": 1.19}, {"name": "IP经济/谷子经济", "change_pct": 2.04}, {"name": "小红书概念股", "change_pct": 1.5}]}, {"code": "001388", "name": "信通电子", "hot_rank": 34, "hot_rank_chg": 8, "stock_cnt": 5742, "price": "35.68", "change": "9.99", "market_id": "33", "circulate_market_value": "3016372100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "电力智能运维"}, {"code": "603580", "name": "艾艾精工", "hot_rank": 35, "hot_rank_chg": 11, "stock_cnt": 5742, "price": "37.13", "change": "10.02", "market_id": "17", "circulate_market_value": "4851895900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "控制权拟变更"}, {"code": "600227", "name": "赤天化", "hot_rank": 36, "hot_rank_chg": 5, "stock_cnt": 5742, "price": "2.92", "change": "10.19", "market_id": "17", "circulate_market_value": "3730591400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预计扭亏", "xgb_concepts": [{"name": "中药", "change_pct": 2.98}, {"name": "甲醇", "change_pct": 1.62}, {"name": "化肥", "change_pct": 1.78}, {"name": "保健品", "change_pct": 2.76}, {"name": "民营医院", "change_pct": 2.68}, {"name": "医药", "change_pct": 3.3}, {"name": "煤化工", "change_pct": 2.48}, {"name": "食品", "change_pct": 2.39}, {"name": "大农业", "change_pct": 1.41}, {"name": "低价股", "change_pct": 1.1}, {"name": "干细胞", "change_pct": 3.13}, {"name": "阿尔茨海默病", "change_pct": 2.96}]}, {"code": "603669", "name": "灵康药业", "hot_rank": 37, "hot_rank_chg": 1, "stock_cnt": 5742, "price": "8.11", "change": "9.60", "market_id": "17", "circulate_market_value": "5777005700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "西藏概念", "change_pct": 1.62}, {"name": "民营医院", "change_pct": 2.68}, {"name": "医药", "change_pct": 3.3}, {"name": "流感", "change_pct": 2.61}, {"name": "幽门螺杆菌概念", "change_pct": 2.84}, {"name": "阿尔茨海默病", "change_pct": 2.96}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 38, "hot_rank_chg": -2, "stock_cnt": 5742, "price": "425.45", "change": "6.32", "market_id": "17", "circulate_market_value": "172876640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 39, "hot_rank_chg": -4, "stock_cnt": 5742, "price": "1169.31", "change": "-1.25", "market_id": "33", "circulate_market_value": "1297863680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 40, "hot_rank_chg": -1, "stock_cnt": 5742, "price": "54.50", "change": "-8.27", "market_id": "33", "circulate_market_value": "63057215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 41, "hot_rank_chg": 2, "stock_cnt": 5742, "price": "33.88", "change": "-6.10", "market_id": "33", "circulate_market_value": "36548638000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 42, "hot_rank_chg": 9, "stock_cnt": 5742, "price": "112.09", "change": "-0.81", "market_id": "17", "circulate_market_value": "40433486000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002310", "name": "东方新能", "hot_rank": 43, "hot_rank_chg": 16, "stock_cnt": 5742, "price": "2.26", "change": "10.24", "market_id": "33", "circulate_market_value": "9941761400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.03}, {"name": "京津冀", "change_pct": 0.89}, {"name": "旅游", "change_pct": 2.16}, {"name": "园林", "change_pct": 0.65}, {"name": "海绵城市", "change_pct": 1.09}, {"name": "固废处理", "change_pct": 0.75}, {"name": "雄安新区", "change_pct": 0.4}, {"name": "北京城市规划", "change_pct": 1.76}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": 0.36}, {"name": "碳中和", "change_pct": 0.6}, {"name": "乡村振兴", "change_pct": 1.34}, {"name": "汽车拆解", "change_pct": 1.36}, {"name": "土壤修复", "change_pct": 0.74}, {"name": "核污染防治", "change_pct": -0.23}, {"name": "新型城镇化", "change_pct": 0.97}, {"name": "低价股", "change_pct": 1.1}, {"name": "西部大开发", "change_pct": 1.02}]}, {"code": "000063", "name": "中兴通讯", "hot_rank": 44, "hot_rank_chg": -11, "stock_cnt": 5742, "price": "39.45", "change": "-1.15", "market_id": "33", "circulate_market_value": "158889660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 45, "hot_rank_chg": 17, "stock_cnt": 5742, "price": "7.44", "change": "4.06", "market_id": "17", "circulate_market_value": "34335292000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -1.04}, {"name": "国产软件", "change_pct": 0.56}, {"name": "锂电池", "change_pct": -1.52}, {"name": "人工智能", "change_pct": 0.4}, {"name": "养老产业", "change_pct": 1.85}, {"name": "大飞机", "change_pct": -0.16}, {"name": "军民融合", "change_pct": -0.78}, {"name": "物联网", "change_pct": -0.34}, {"name": "大数据", "change_pct": 0.61}, {"name": "智慧城市", "change_pct": 0.05}, {"name": "军工", "change_pct": -0.7}, {"name": "新能源汽车", "change_pct": -0.68}, {"name": "机器人", "change_pct": -0.33}, {"name": "黑色家电", "change_pct": 0.46}, {"name": "家电", "change_pct": 0.4}, {"name": "储能", "change_pct": -0.63}, {"name": "智能制造", "change_pct": -0.28}, {"name": "工业互联网", "change_pct": 0.14}, {"name": "数字经济", "change_pct": 0.75}, {"name": "百度概念股", "change_pct": 0.98}, {"name": "NFT", "change_pct": 2.39}, {"name": "跨境支付", "change_pct": 1.38}, {"name": "华为海思", "change_pct": -1.38}, {"name": "云游戏", "change_pct": 1.95}, {"name": "网红/MCN", "change_pct": 1.65}, {"name": "华为产业链", "change_pct": -0.91}, {"name": "毫米波雷达", "change_pct": -1.89}, {"name": "服务器", "change_pct": -2.63}, {"name": "星闪概念", "change_pct": -0.68}, {"name": "低空经济", "change_pct": -0.41}]}, {"code": "002739", "name": "儒意电影", "hot_rank": 46, "hot_rank_chg": 1, "stock_cnt": 5742, "price": "9.38", "change": "9.96", "market_id": "33", "circulate_market_value": "19529177000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "院线龙头", "xgb_concepts": [{"name": "影视", "change_pct": 3.26}, {"name": "足球", "change_pct": 0.77}, {"name": "阿里巴巴概念股", "change_pct": 0.52}, {"name": "拼多多概念股", "change_pct": 0.88}, {"name": "网红/MCN", "change_pct": 1.65}, {"name": "大消费", "change_pct": 3.3}, {"name": "盲盒", "change_pct": 2.5}, {"name": "短剧/互动影游", "change_pct": 2.67}, {"name": "IP经济/谷子经济", "change_pct": 2.04}, {"name": "首发经济", "change_pct": 2.61}, {"name": "小红书概念股", "change_pct": 1.5}, {"name": "服务消费", "change_pct": 2.51}]}, {"code": "600206", "name": "有研新材", "hot_rank": 47, "hot_rank_chg": 1, "stock_cnt": 5742, "price": "47.65", "change": "-9.46", "market_id": "17", "circulate_market_value": "40338266000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600829", "name": "人民同泰", "hot_rank": 48, "hot_rank_chg": -4, "stock_cnt": 5742, "price": "9.89", "change": "10.01", "market_id": "17", "circulate_market_value": "5735098200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "医药零售", "xgb_concepts": [{"name": "医药商业", "change_pct": 2.34}, {"name": "民营医院", "change_pct": 2.68}, {"name": "医药", "change_pct": 3.3}, {"name": "振兴东北", "change_pct": 1.67}, {"name": "宠物经济", "change_pct": 3.38}, {"name": "眼科", "change_pct": 2.86}]}, {"code": "600721", "name": "百花医药", "hot_rank": 49, "hot_rank_chg": 8, "stock_cnt": 5742, "price": "7.57", "change": "10.03", "market_id": "17", "circulate_market_value": "2911025600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CRO", "xgb_concepts": [{"name": "创新药", "change_pct": 4.0}, {"name": "股权转让", "change_pct": -0.08}, {"name": "新疆概念", "change_pct": 1.33}, {"name": "医药", "change_pct": 3.3}, {"name": "流感", "change_pct": 2.61}, {"name": "国资入股", "change_pct": 0.54}, {"name": "减肥药", "change_pct": 5.37}]}, {"code": "000988", "name": "华工科技", "hot_rank": 50, "hot_rank_chg": -13, "stock_cnt": 5742, "price": "145.21", "change": "-9.15", "market_id": "33", "circulate_market_value": "145933970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002303", "name": "美盈森", "hot_rank": 51, "hot_rank_chg": 19, "stock_cnt": 5742, "price": "5.01", "change": "10.11", "market_id": "33", "circulate_market_value": "4844074100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "消费电子包装", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.33}, {"name": "工业大麻", "change_pct": 2.58}, {"name": "造纸", "change_pct": 1.04}, {"name": "军民融合", "change_pct": -0.78}, {"name": "包装印刷", "change_pct": 0.52}, {"name": "军工", "change_pct": -0.7}, {"name": "预制菜", "change_pct": 2.63}, {"name": "人造肉", "change_pct": 2.19}, {"name": "数字乡村", "change_pct": 1.14}, {"name": "区块链", "change_pct": 1.13}]}, {"code": "600183", "name": "生益科技", "hot_rank": 52, "hot_rank_chg": -2, "stock_cnt": 5742, "price": "152.43", "change": "3.06", "market_id": "17", "circulate_market_value": "364993870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605189", "name": "富春染织", "hot_rank": 53, "hot_rank_chg": 12, "stock_cnt": 5742, "price": "15.64", "change": "9.99", "market_id": "17", "circulate_market_value": "3725994400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报预增"}, {"code": "300149", "name": "睿智医药", "hot_rank": 54, "hot_rank_chg": 1, "stock_cnt": 5742, "price": "10.39", "change": "19.98", "market_id": "33", "circulate_market_value": "4930714400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CRO", "xgb_concepts": [{"name": "创新药", "change_pct": 4.0}, {"name": "优化生育（三孩）", "change_pct": 2.37}, {"name": "人工智能", "change_pct": 0.4}, {"name": "CAR-T疗法", "change_pct": 3.14}, {"name": "医药", "change_pct": 3.3}, {"name": "化学原料药", "change_pct": 3.53}, {"name": "食品", "change_pct": 2.39}, {"name": "甜味剂/代糖", "change_pct": 1.75}, {"name": "减肥药", "change_pct": 5.37}, {"name": "AI医疗", "change_pct": 2.86}]}, {"code": "003020", "name": "立方制药", "hot_rank": 55, "hot_rank_chg": 11, "stock_cnt": 5742, "price": "21.91", "change": "5.34", "market_id": "33", "circulate_market_value": "3692892300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 57, "hot_rank_chg": 21, "stock_cnt": 5742, "price": "12.33", "change": "3.44", "market_id": "17", "circulate_market_value": "18158475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.5}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "电力体制改革", "change_pct": 1.26}, {"name": "火电", "change_pct": 1.47}, {"name": "氢能源/燃料电池", "change_pct": -0.59}, {"name": "风电", "change_pct": -0.47}, {"name": "国企改革", "change_pct": 0.79}]}, {"code": "600522", "name": "中天科技", "hot_rank": 58, "hot_rank_chg": -4, "stock_cnt": 5742, "price": "40.70", "change": "-4.44", "market_id": "17", "circulate_market_value": "138907050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 59, "hot_rank_chg": -27, "stock_cnt": 5742, "price": "76.40", "change": "4.09", "market_id": "33", "circulate_market_value": "296547620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 60, "hot_rank_chg": 7, "stock_cnt": 5742, "price": "5.78", "change": "-1.70", "market_id": "17", "circulate_market_value": "71649395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.5}, {"name": "核电", "change_pct": -0.55}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "电力体制改革", "change_pct": 1.26}, {"name": "水电", "change_pct": 2.08}, {"name": "火电", "change_pct": 1.47}, {"name": "光伏", "change_pct": -0.84}, {"name": "风电", "change_pct": -0.47}, {"name": "国企改革", "change_pct": 0.79}, {"name": "算电协同", "change_pct": -2.05}]}, {"code": "301308", "name": "江波龙", "hot_rank": 61, "hot_rank_chg": -16, "stock_cnt": 5742, "price": "488.00", "change": "-9.38", "market_id": "33", "circulate_market_value": "137543720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 62, "hot_rank_chg": -9, "stock_cnt": 5742, "price": "96.76", "change": "-5.04", "market_id": "17", "circulate_market_value": "141565140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002309", "name": "中利集团", "hot_rank": 63, "hot_rank_chg": 17, "stock_cnt": 5742, "price": "2.74", "change": "10.04", "market_id": "33", "circulate_market_value": "6592802500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预计扭亏", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.52}, {"name": "5G", "change_pct": -2.2}, {"name": "一带一路", "change_pct": 0.45}, {"name": "光通信", "change_pct": -3.0}, {"name": "军民融合", "change_pct": -0.78}, {"name": "光伏", "change_pct": -0.84}, {"name": "军工", "change_pct": -0.7}, {"name": "新能源汽车", "change_pct": -0.68}, {"name": "储能", "change_pct": -0.63}, {"name": "BIPV概念", "change_pct": 0.82}, {"name": "低价股", "change_pct": 1.1}, {"name": "钙钛矿电池", "change_pct": -1.59}, {"name": "异质结电池HJT", "change_pct": -2.06}, {"name": "华为产业链", "change_pct": -0.91}]}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 64, "hot_rank_chg": 26, "stock_cnt": 5742, "price": "21.19", "change": "-9.98", "market_id": "17", "circulate_market_value": "8877922900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 65, "hot_rank_chg": -5, "stock_cnt": 5742, "price": "53.00", "change": "-2.79", "market_id": "17", "circulate_market_value": "210494110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 66, "hot_rank_chg": 8, "stock_cnt": 5742, "price": "10.25", "change": "3.02", "market_id": "17", "circulate_market_value": "18338667000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 2.12}, {"name": "纯碱", "change_pct": 1.23}, {"name": "食品", "change_pct": 2.39}, {"name": "土壤修复", "change_pct": 0.74}, {"name": "东数西算/算力", "change_pct": -1.01}, {"name": "OpenClaw概念", "change_pct": -0.45}, {"name": "DeepSeek概念股", "change_pct": -0.07}]}, {"code": "600403", "name": "大有能源", "hot_rank": 67, "hot_rank_chg": 4, "stock_cnt": 5742, "price": "5.63", "change": "9.96", "market_id": "17", "circulate_market_value": "13460274000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报减亏", "xgb_concepts": [{"name": "煤炭", "change_pct": 2.17}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "国企改革", "change_pct": 0.79}, {"name": "河南国企改革", "change_pct": 1.48}]}, {"code": "688166", "name": "博瑞医药", "hot_rank": 68, "hot_rank_chg": 9, "stock_cnt": 5742, "price": "35.44", "change": "20.01", "market_id": "17", "circulate_market_value": "15444574000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "GLP-1减肥药"}, {"code": "002281", "name": "光迅科技", "hot_rank": 69, "hot_rank_chg": 3, "stock_cnt": 5742, "price": "214.97", "change": "-7.72", "market_id": "33", "circulate_market_value": "167783730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 70, "hot_rank_chg": -9, "stock_cnt": 5742, "price": "28.13", "change": "-8.04", "market_id": "33", "circulate_market_value": "32239947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 71, "hot_rank_chg": -13, "stock_cnt": 5742, "price": "17.38", "change": "-9.99", "market_id": "17", "circulate_market_value": "57341822000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 72, "hot_rank_chg": -8, "stock_cnt": 5742, "price": "556.00", "change": "-2.25", "market_id": "33", "circulate_market_value": "697359200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601888", "name": "中国中免", "hot_rank": 73, "hot_rank_chg": -10, "stock_cnt": 5742, "price": "54.41", "change": "6.85", "market_id": "17", "circulate_market_value": "106234194000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605255", "name": "天普股份", "hot_rank": 74, "hot_rank_chg": 22, "stock_cnt": 5742, "price": "87.19", "change": "10.01", "market_id": "17", "circulate_market_value": "11690435200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中昊芯英"}, {"code": "002463", "name": "沪电股份", "hot_rank": 75, "hot_rank_chg": 0, "stock_cnt": 5742, "price": "137.23", "change": "0.07", "market_id": "33", "circulate_market_value": "263867280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000908", "name": "石药景峰", "hot_rank": 76, "hot_rank_chg": 9, "stock_cnt": 5742, "price": "7.50", "change": "9.97", "market_id": "33", "circulate_market_value": "6598307600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏", "xgb_concepts": [{"name": "芬太尼概念", "change_pct": 3.01}, {"name": "债转股 · AMC", "change_pct": 0.79}, {"name": "中药", "change_pct": 2.98}, {"name": "创新药", "change_pct": 4.0}, {"name": "ST摘帽", "change_pct": 0.61}, {"name": "医药", "change_pct": 3.3}, {"name": "化学原料药", "change_pct": 3.53}, {"name": "眼科", "change_pct": 2.86}, {"name": "医美", "change_pct": 3.18}]}, {"code": "688192", "name": "迪哲医药", "hot_rank": 77, "hot_rank_chg": 4, "stock_cnt": 5742, "price": "67.60", "change": "20.01", "market_id": "17", "circulate_market_value": "31178073000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "授权阿斯利康"}, {"code": "002714", "name": "牧原股份", "hot_rank": 78, "hot_rank_chg": -10, "stock_cnt": 5742, "price": "39.65", "change": "4.12", "market_id": "33", "circulate_market_value": "130071795000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002379", "name": "宏桥控股", "hot_rank": 79, "hot_rank_chg": 20, "stock_cnt": 5742, "price": "18.66", "change": "6.69", "market_id": "33", "circulate_market_value": "21204734000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 80, "hot_rank_chg": -7, "stock_cnt": 5742, "price": "5.02", "change": "-2.14", "market_id": "33", "circulate_market_value": "100993999000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.56}, {"name": "手机产业链", "change_pct": -2.8}, {"name": "超高清视频", "change_pct": -1.04}, {"name": "电竞", "change_pct": 3.04}, {"name": "半导体", "change_pct": -4.99}, {"name": "OLED", "change_pct": -3.45}, {"name": "光伏", "change_pct": -0.84}, {"name": "黑色家电", "change_pct": 0.46}, {"name": "家电", "change_pct": 0.4}, {"name": "智能制造", "change_pct": -0.28}, {"name": "工业互联网", "change_pct": 0.14}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.19}, {"name": "国产芯片", "change_pct": -4.11}, {"name": "腾讯概念股", "change_pct": 0.56}, {"name": "液晶面板/LCD", "change_pct": -3.41}, {"name": "MicroLED", "change_pct": -3.3}, {"name": "MiniLED", "change_pct": -3.4}, {"name": "华为产业链", "change_pct": -0.91}, {"name": "玻璃基板封装", "change_pct": -5.26}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 81, "hot_rank_chg": -25, "stock_cnt": 5742, "price": "27.52", "change": "-3.84", "market_id": "33", "circulate_market_value": "20844064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002422", "name": "科伦药业", "hot_rank": 82, "hot_rank_chg": -13, "stock_cnt": 5742, "price": "49.07", "change": "1.18", "market_id": "33", "circulate_market_value": "63723424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600129", "name": "太极集团", "hot_rank": 83, "hot_rank_chg": 5, "stock_cnt": 5742, "price": "17.98", "change": "1.99", "market_id": "17", "circulate_market_value": "9914499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002640", "name": "跨境通", "hot_rank": 84, "hot_rank_chg": 19, "stock_cnt": 5742, "price": "3.14", "change": "10.18", "market_id": "33", "circulate_market_value": "4861542700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.74}, {"name": "数字经济", "change_pct": 0.75}, {"name": "拼多多概念股", "change_pct": 0.88}, {"name": "无线耳机", "change_pct": -2.43}, {"name": "网红/MCN", "change_pct": 1.65}]}, {"code": "601138", "name": "工业富联", "hot_rank": 85, "hot_rank_chg": -9, "stock_cnt": 5742, "price": "63.62", "change": "-3.02", "market_id": "17", "circulate_market_value": "1262481150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 86, "hot_rank_chg": -2, "stock_cnt": 5742, "price": "16.91", "change": "-10.01", "market_id": "33", "circulate_market_value": "13579952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605090", "name": "九丰能源", "hot_rank": 87, "hot_rank_chg": 10, "stock_cnt": 5742, "price": "41.60", "change": "5.58", "market_id": "17", "circulate_market_value": "29308322000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000989", "name": "九芝堂", "hot_rank": 88, "hot_rank_chg": 12, "stock_cnt": 5742, "price": "9.99", "change": "5.49", "market_id": "33", "circulate_market_value": "6934596000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 2.98}, {"name": "创新药", "change_pct": 4.0}, {"name": "互联网医疗", "change_pct": 2.29}, {"name": "医药", "change_pct": 3.3}, {"name": "干细胞", "change_pct": 3.13}]}, {"code": "002517", "name": "恺英网络", "hot_rank": 89, "hot_rank_chg": -3, "stock_cnt": 5742, "price": "17.18", "change": "9.99", "market_id": "33", "circulate_market_value": "32454509000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增"}, {"code": "000759", "name": "中百集团", "hot_rank": 90, "hot_rank_chg": -11, "stock_cnt": 5742, "price": "6.87", "change": "1.78", "market_id": "33", "circulate_market_value": "4504700400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.74}, {"name": "新零售", "change_pct": 2.3}, {"name": "农业种植", "change_pct": 0.96}, {"name": "冷链", "change_pct": -0.05}, {"name": "大农业", "change_pct": 1.41}, {"name": "预制菜", "change_pct": 2.63}, {"name": "国企改革", "change_pct": 0.79}, {"name": "可降解塑料", "change_pct": 0.98}, {"name": "免税店概念", "change_pct": 2.82}, {"name": "湖北国企改革", "change_pct": 0.62}]}, {"code": "000888", "name": "峨眉山A", "hot_rank": 91, "hot_rank_chg": -39, "stock_cnt": 5742, "price": "9.79", "change": "5.38", "market_id": "33", "circulate_market_value": "5158479300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "旅游", "change_pct": 2.16}, {"name": "大数据", "change_pct": 0.61}, {"name": "冰雪产业", "change_pct": 1.14}, {"name": "全息概念", "change_pct": 0.31}, {"name": "NFT", "change_pct": 2.39}, {"name": "智慧政务", "change_pct": 0.4}, {"name": "国资入股", "change_pct": 0.54}, {"name": "低空经济", "change_pct": -0.41}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 92, "hot_rank_chg": 9, "stock_cnt": 5742, "price": "14.07", "change": "-7.62", "market_id": "17", "circulate_market_value": "17956918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002653", "name": "海思科", "hot_rank": 93, "hot_rank_chg": 11, "stock_cnt": 5742, "price": "74.13", "change": "9.45", "market_id": "33", "circulate_market_value": "39791956000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601995", "name": "中金公司", "hot_rank": 95, "hot_rank_chg": -6, "stock_cnt": 5742, "price": "38.34", "change": "8.18", "market_id": "17", "circulate_market_value": "112088617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 96, "hot_rank_chg": -9, "stock_cnt": 5742, "price": "252.68", "change": "-6.42", "market_id": "17", "circulate_market_value": "289259100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 97, "hot_rank_chg": -6, "stock_cnt": 5742, "price": "47.43", "change": "0.17", "market_id": "33", "circulate_market_value": "69993589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601933", "name": "永辉超市", "hot_rank": 98, "hot_rank_chg": 129, "stock_cnt": 5742, "price": "3.20", "change": "3.23", "market_id": "17", "circulate_market_value": "28560119000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.74}, {"name": "高管增持", "change_pct": 0.46}, {"name": "新零售", "change_pct": 2.3}, {"name": "腾讯概念股", "change_pct": 0.56}, {"name": "社区团购", "change_pct": 2.33}, {"name": "大消费", "change_pct": 3.3}]}, {"code": "301583", "name": "托伦斯", "hot_rank": 99, "hot_rank_chg": -16, "stock_cnt": 5742, "price": "139.66", "change": "-21.99", "market_id": "33", "circulate_market_value": "4305909600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 100, "hot_rank_chg": 2, "stock_cnt": 5742, "price": "27.07", "change": "-9.77", "market_id": "33", "circulate_market_value": "11655441400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603130", "name": "云中马", "price": 38.72, "change_pct": 10.0, "reason": "公司战略投资中玺新材，后者国内唯一实现连续化淤浆聚合生产工艺的中高端UHMWPE颗粒供应商，UMHWPE得益于超高耐磨性，被众多主流机器人公司采纳为腱绳材料方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.73, "first_limit_up": 1784091784, "break_limit_up_times": 1}, {"code": "603969", "name": "银龙股份", "price": 7.8, "change_pct": 10.01, "reason": "消息称公司参股陕硬20%股权，是航发/航天领域唯一全产业链刀具供应商", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.8, "first_limit_up": 1784092723, "break_limit_up_times": 1}, {"code": "600732", "name": "爱旭股份", "price": 12.44, "change_pct": 9.99, "reason": "全球太阳能电池的主要供应商；26Q2单季度扣非净利润约 - 3.91 亿元～-2.81 亿元，亏损环比收窄 20.04%～42.54%，主要原因系公司 ABC 组件销售收入保持稳定增长，海外销售占比持续提升，组件销售毛利率同比、环比显著改善；但受光伏行业供需失衡、终端产品价格传导滞后、4 月起出口退税政策取消、汇率波动及资产减值计提多重因素拖累，整体仍处于亏损状态，二季度单季亏损规模较一季度明显收窄，经营质量持续向好", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.76, "first_limit_up": 1784079520, "break_limit_up_times": 2}, {"code": "002891", "name": "中宠股份", "price": 28.64, "change_pct": 9.98, "reason": "公司为宠物零食出口龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.08, "first_limit_up": 1784082030, "break_limit_up_times": 0}, {"code": "603196", "name": "璞源材料", "price": 23.85, "change_pct": 10.01, "reason": "1、公司预计上半年净利润同比增30.59%至69.77%，主要原因是公司于2025年12月31日完成对四川茵地乐材料科技集团有限公司71%股权的过户手续，茵地乐自2026年1月1日起纳入公司合并报表，提升了公司的整体盈利能力；\n2、公司锂电池粘结剂PAA业务主要产品包括负极粘结剂、隔膜粘结剂及正极边涂粘结剂，广泛应用于动力电池、储能及消费锂电池等领域", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.11, "first_limit_up": 1784080202, "break_limit_up_times": 4}, {"code": "600162", "name": "香江控股", "price": 2.53, "change_pct": 10.0, "reason": "公司是以商贸流通为主业的广州优质开发商", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 1.98, "first_limit_up": 1784080219, "break_limit_up_times": 0}, {"code": "605028", "name": "世茂能源", "price": 24.23, "change_pct": 9.99, "reason": "余姚地区唯一的生活垃圾焚烧处理中心；上半年扣非净利润预计同比增长15.23%-25.16%，报告期内，归属上市公司股东的净利润较上一报告期有较大幅度的下降，主要系证券投资公允价值变动损益影响及投资收益减少所致，扣除非经常性损益的净利润增加系垃圾处置收入的增加和精细化管理降本增效导致", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 1.28, "first_limit_up": 1784079168, "break_limit_up_times": 1}, {"code": "002309", "name": "中利集团", "price": 2.74, "change_pct": 10.04, "reason": "1、公司上半年业绩扭亏，主要系本期确认大额债务重组收益；\n2、公司主要线缆产品涵盖阻燃耐火软电缆、舰船用电缆、高铁及铁路信号线缆、新能源汽车及充电桩线缆、液冷电缆、数据通信线缆、海洋工程平台用电缆、光电复合缆、光纤预制棒及光纤等；\n3、全球领先的组件供应商、光伏电站开发与EPC服务商", "plates": ["光通信", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.84, "first_limit_up": 1784079000, "break_limit_up_times": 0}, {"code": "003010", "name": "若羽臣", "price": 24.56, "change_pct": 9.99, "reason": "全球品牌电子商务综合服务商；预计上半年净利同比增长100%-120%，主要系“自有品牌战略价值凸显，驱动业绩高速增长，绽家品牌方面，大单品香氛洗衣液和洗衣凝珠持续放量，品牌香氛心智进一步巩固，其余单品亦保持细分市场领先优势，公司持续推进以香氛为核心的家居清洁护理品类新品布局；斐萃品牌方面，不断丰富产品线，提升消费者体验，同时强化多渠道协同运营，共同推动自有品牌业务整体收入实现高速增长”", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.08, "first_limit_up": 1784082312, "break_limit_up_times": 1}, {"code": "603580", "name": "艾艾精工", "price": 37.13, "change_pct": 10.01, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["股权转让"], "limit_up_days": 2, "turnover_ratio": 0.08, "first_limit_up": 1784078700, "break_limit_up_times": 0}, {"code": "300149", "name": "睿智医药", "price": 10.39, "change_pct": 19.98, "reason": "公司作为一家提供医药研发与生产的CRO/CDMO企业，拥有全面的涵盖化学药、生物药的全流程、一体化研发及生产服务平台；目前有少量业务正在使用AI辅助技术，在AI应用于CRO/CDMO领域方面仍处于初步探索阶段", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 15.58, "first_limit_up": 1784079423, "break_limit_up_times": 2}, {"code": "300528", "name": "幸福蓝海", "price": 16.99, "change_pct": 19.99, "reason": "公司尝试定制剧、分账剧、短剧等多赛道产品", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 10.46, "first_limit_up": 1784083077, "break_limit_up_times": 0}, {"code": "000676", "name": "智度股份", "price": 5.65, "change_pct": 9.92, "reason": "公司预计上半年净利润同比增长63.69%至75.81%，报告期内，公司主营业务稳健发展，为本期净利润提供稳定支撑，其中互联网媒体业务保持了较好的盈利能力，利润同比增长；公司对外转让参股公司上海邑炎信息科技有限公司22.4128%的股权确认投资收益约为0.67亿元，计入非经常性损益，相关事项已于2026年6月完成", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.85, "first_limit_up": 1784079135, "break_limit_up_times": 2}, {"code": "603429", "name": "*ST集友", "price": 8.13, "change_pct": 10.01, "reason": "国内较早烟用接装纸专业生产厂商之一；控股子公司集新能源固态电池关键材料研发中试基地正在建设，并与潜在客户进行技术对接、商务洽谈", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.74, "first_limit_up": 1784095040, "break_limit_up_times": 0}, {"code": "600664", "name": "哈药股份", "price": 4.49, "change_pct": 10.05, "reason": "全国医药行业首家上市公司；预计上半年净利润同比增长46.40%至68.36%，主要是受医药工业板块业绩提升影响", "plates": ["医药"], "limit_up_days": 4, "turnover_ratio": 4.43, "first_limit_up": 1784079038, "break_limit_up_times": 0}, {"code": "600857", "name": "宁波中百", "price": 21.03, "change_pct": 9.99, "reason": "宁波大型百货零售商店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.13, "first_limit_up": 1784079738, "break_limit_up_times": 2}, {"code": "002558", "name": "巨人网络", "price": 29.56, "change_pct": 10.01, "reason": "中国游戏行业龙头；公司确认参与光轮智能新一轮10亿元战略融资，布局人工智能进入真实物理世界，是公司在AI产业生态投资的重要举措", "plates": ["游戏"], "limit_up_days": 1, "turnover_ratio": 7.95, "first_limit_up": 1784091738, "break_limit_up_times": 12}, {"code": "600199", "name": "金种子酒", "price": 6.94, "change_pct": 9.98, "reason": "深耕安徽地区白酒企业", "plates": ["白酒"], "limit_up_days": 1, "turnover_ratio": 4.96, "first_limit_up": 1784081480, "break_limit_up_times": 1}, {"code": "603127", "name": "昭衍新药", "price": 50.62, "change_pct": 10.0, "reason": "国内创新药龙头，预计上半年净利润同比增长884.9%-1377.4%，报告期内，生物资产市场价格上涨叠加自身自然生长增值，双重因素驱动其公允价值正向变动，为公司业绩做出积极贡献", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.93, "first_limit_up": 1784078701, "break_limit_up_times": 2}, {"code": "000889", "name": "中嘉博创", "price": 3.29, "change_pct": 10.03, "reason": "1、公司上半年业绩同比扭亏，主要系“持续实施降本增效举措，优化人员配置，削减租赁开支，有效降低期间费用，推动利润较去年同期小幅增长”；\n2、公司申请名称一种通过插片式安装的光通信无源器件专利，全资子公司海南博创云天经营范围包含算力销售", "plates": ["云计算数据中心", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.97, "first_limit_up": 1784079000, "break_limit_up_times": 0}, {"code": "000935", "name": "四川双马", "price": 28.13, "change_pct": 10.01, "reason": "公司参与投资专业化基金主要聚焦智能制造、半导体、清洁能源及技术、消费和服务、自动驾驶、精准医疗等领域", "plates": ["创投"], "limit_up_days": 1, "turnover_ratio": 1.66, "first_limit_up": 1784082222, "break_limit_up_times": 23}, {"code": "600257", "name": "大湖股份", "price": 4.9, "change_pct": 10.11, "reason": "1、公司上半年业绩同比扭亏，主要原因为公司康复医疗业务住院收治人次稳步攀升，住院业务规模持续扩大，主营业务收入实现稳步增长；\n2、公司拥有多个天然湖泊，形成了“自营种苗场—科学化养殖—专业化捕捞—销售一体化+柔性物流供应链系统”的淡水渔业发展产业链", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.68, "first_limit_up": 1784079050, "break_limit_up_times": 1}, {"code": "600844", "name": "金煤科技", "price": 2.97, "change_pct": 10.0, "reason": "公司专注于煤制乙二醇，上半年实现扭亏为盈，4月初年产10万吨草酸扩产项目顺利建成投产，公司借此增加了盈利能力较强的草酸产销量，同时主动降低了毛利率较差的乙二醇产销规模，叠加草酸市场行情上行，整体盈利结构得到明显改善。此外，公司持续推进高卡煤掺烧等降耗举措，进一步降低了产品单耗，共同推动了报告期内业绩的扭亏为盈", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 11.29, "first_limit_up": 1784081411, "break_limit_up_times": 1}, {"code": "600403", "name": "大有能源", "price": 5.63, "change_pct": 9.96, "reason": "河南能源集团旗下煤炭企业；此前河南省委、省政府决定对间接控股股东河南能源集团和中国平煤神马控股集团实施战略重组", "plates": ["煤炭"], "limit_up_days": 2, "turnover_ratio": 2.91, "first_limit_up": 1784080060, "break_limit_up_times": 0}, {"code": "000016", "name": "*ST康佳A", "price": 2.6, "change_pct": 10.17, "reason": "公司PCB业务为2025年唯一营收同比上涨板块", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.16, "first_limit_up": 1784079648, "break_limit_up_times": 1}, {"code": "000908", "name": "石药景峰", "price": 7.5, "change_pct": 9.97, "reason": "公司致力于创新药物研发，拥有多个创新药项目；上半年业绩同比扭亏，报告期内，石药集团湖南景峰医药股份有限公司顺利完成司法重整，资产负债结构优化，财务费用等支出下降，主营业务亏损同比大幅收窄；同时，公司本期确认结构性存款收益、政府补助等非经常性损益，进一步提升业绩水平", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.64, "first_limit_up": 1784080500, "break_limit_up_times": 0}, {"code": "603657", "name": "春光科技", "price": 24.13, "change_pct": 9.98, "reason": "公司主营吸尘器、洗地机、扫地机器人、布衣清洗机等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.25, "first_limit_up": 1784080083, "break_limit_up_times": 1}, {"code": "002640", "name": "跨境通", "price": 3.14, "change_pct": 10.18, "reason": "跨境电商龙头，上半年业绩同比扭亏，主要原因为全资下属公司深圳飒芙破产清算，公司已丧失对深圳飒芙的控制权，本报告期深圳飒芙不再纳入公司合并报表范围，深圳飒芙前期超额亏损，本报告期出表确认大额投资收益，属于非经常性损益，预计对本报告期净利润的影响金额为1.6-1.7亿元", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 10.72, "first_limit_up": 1784081085, "break_limit_up_times": 2}, {"code": "002940", "name": "昂利康", "price": 28.94, "change_pct": 10.0, "reason": "公司研发重心转向创新产品，积极布局创新药管线", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.13, "first_limit_up": 1784080428, "break_limit_up_times": 0}, {"code": "001317", "name": "三羊马", "price": 51.07, "change_pct": 9.99, "reason": "1、公司预计上半年实现扭亏为盈，主要系“期间费用减少+投资收益增加”；\n2、机器人业务是三羊马智人科技及合作伙伴冰零智能科技高度关注且重视的下游应用领域，智人科技目前无机器人领域的量产产品；\n3、公司布局无人车物流，并为小米景明科技有限公司的承运商之一，与重庆东风小康汽车销售有限公司及其关联方有汽车整车综合物流服务业务合作", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.92, "first_limit_up": 1784080947, "break_limit_up_times": 0}, {"code": "688192", "name": "迪哲医药", "price": 67.6, "change_pct": 20.01, "reason": "公司与阿斯利康签署独家许可协议，获6亿美元首付款", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 3.42, "first_limit_up": 1784079105, "break_limit_up_times": 0}, {"code": "605189", "name": "富春染织", "price": 15.64, "change_pct": 9.99, "reason": "公司投资10亿元建设PEEK材料人形机器人轻量化与半导体精密注塑项目，已投产并获行星减速器公司样件订单，切入机器人轻量化赛道", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 15.87, "first_limit_up": 1784096588, "break_limit_up_times": 0}, {"code": "600785", "name": "新华百货", "price": 8.47, "change_pct": 10.0, "reason": "宁夏地区最大的商业零售企业；市场传闻控股股东协议转让股份后将注入半导体、集成电路、芯片资产，公司公告不存在该事项", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.75, "first_limit_up": 1784080059, "break_limit_up_times": 2}, {"code": "301520", "name": "万邦医药", "price": 58.79, "change_pct": 20.0, "reason": "公司拟3.02亿元收购赛德盛75.52%股份，落子创新药临床CRO赛道", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 54.06, "first_limit_up": 1784098800, "break_limit_up_times": 0}, {"code": "000566", "name": "海南海药", "price": 5.15, "change_pct": 10.04, "reason": "海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.38, "first_limit_up": 1784079423, "break_limit_up_times": 0}, {"code": "605089", "name": "味知香", "price": 20.19, "change_pct": 10.03, "reason": "国内预制菜第一股，是行业中成立较早的专业半成品菜龙头，拥有肉禽类、水产类等五大产品线", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.91, "first_limit_up": 1784091682, "break_limit_up_times": 0}, {"code": "002821", "name": "凯莱英", "price": 195.75, "change_pct": 10.0, "reason": "国内CMO行业龙头之一", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.09, "first_limit_up": 1784098389, "break_limit_up_times": 0}, {"code": "300231", "name": "银信科技", "price": 9.08, "change_pct": 19.95, "reason": "1、公司已形成从算力基础设施建设到运维服务的全链条能力，参与并落地了多个智算中心的运营与维护服务；\n2、公司目前是华为存储的一级经销商，是华为IT （存储）和数通安全的CSP4钻服务伙伴，合作主要涉及的产品包括服务器、存储、数通安全、视讯几大类", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 11.64, "first_limit_up": 1784094180, "break_limit_up_times": 0}, {"code": "001388", "name": "信通电子", "price": 35.68, "change_pct": 9.99, "reason": "高送转-公司2025年年度权益分派方案为每10股送红股4.80股并派5.00元现金，股权登记日为2026年7月16日", "plates": ["其他"], "limit_up_days": 3, "turnover_ratio": 12.04, "first_limit_up": 1784079090, "break_limit_up_times": 3}, {"code": "002062", "name": "宏润建设", "price": 7.56, "change_pct": 10.04, "reason": "全资子公司宏润科技与镜识科技签约，双方将依托各自在产业与机器人领域的领先优势，携手推动具身智能技术的发展", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.44, "first_limit_up": 1784080497, "break_limit_up_times": 4}, {"code": "600746", "name": "江苏索普", "price": 6.31, "change_pct": 9.93, "reason": "公司是拥有完整产业链的醋酸龙头企业，拥有硫酸产能30万吨/年；上半年净利同比预增115.96%—145.41%，报告期内，公司主要产品价格同比上升\n", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 3.93, "first_limit_up": 1784091838, "break_limit_up_times": 0}, {"code": "000959", "name": "首钢股份", "price": 3.83, "change_pct": 10.06, "reason": "国内电工钢龙头企业；参股公司首程控股通过旗下北京机器人产业发展投资基金持有宇树科技4.087%的股权，是目前已知持股比例最高的港股上市公司", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 0.76, "first_limit_up": 1784083362, "break_limit_up_times": 0}, {"code": "000504", "name": "南华生物", "price": 8.51, "change_pct": 9.95, "reason": "湖南省政府旗下，干细胞储存和节能环保双主业，其中生物医药板块主要为细胞医疗服务，为客户提供干细胞、免疫细胞等生物资源的检测及储存服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.78, "first_limit_up": 1784079495, "break_limit_up_times": 2}, {"code": "000593", "name": "德龙汇能", "price": 21.56, "change_pct": 10.0, "reason": "公司主营城市管道燃气和零售商业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.04, "first_limit_up": 1784079258, "break_limit_up_times": 0}, {"code": "603336", "name": "宏辉果蔬", "price": 8.5, "change_pct": 9.96, "reason": "公司拟收购施美药业41.128%股份，切入医药赛道", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.31, "first_limit_up": 1784083300, "break_limit_up_times": 0}, {"code": "600539", "name": "狮头股份", "price": 16.42, "change_pct": 9.98, "reason": "公司调整收购利珀科技重组方案，配套募资降至2.2亿元\n", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.86, "first_limit_up": 1784082315, "break_limit_up_times": 0}, {"code": "000571", "name": "新大洲A", "price": 6.51, "change_pct": 9.97, "reason": "1、内蒙古呼伦贝尔地区为数不多的生产长焰煤的煤炭企业；\n2、参股子公司中航新大洲公司主要生产产品之一为LEAP发动机零部件，其中LEAP-A对应机型空客320neo，LEAP-B对应机型波音737MAX，LEAP-C对应机型C919", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 2.9, "first_limit_up": 1784083311, "break_limit_up_times": 0}, {"code": "002800", "name": "天顺股份", "price": 13.66, "change_pct": 9.98, "reason": "公司是新疆最大的民营综合型第三方物流供应商，开行了乌鲁木齐至俄罗斯、意大利、阿塞拜疆、哈萨克斯坦、乌兹别克斯坦、伊朗、土耳其、格鲁吉亚、马拉等中欧、中亚国家的班列，持续推进中欧班列集拼集运组织模式", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.81, "first_limit_up": 1784085750, "break_limit_up_times": 0}, {"code": "002310", "name": "东方新能", "price": 2.26, "change_pct": 10.24, "reason": "公司上半年业绩扭亏为盈，主要得益于报告期内重大资产购买的标的资产纳入合并报表范围，以现金购买的海城锐海100%股权及电投瑞享80%股权已完成过户，标的资产合计持有815.85MW新能源电站", "plates": ["智能电网", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.27, "first_limit_up": 1784080899, "break_limit_up_times": 0}, {"code": "002303", "name": "美盈森", "price": 5.01, "change_pct": 10.11, "reason": "国际领先的包装一体化综合服务商；公司主营运输包装、精品包装、标签及电子功能材料模切产品，并持续为消费电子、白酒、家电等行业龙头提供一体化包装服务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 15.75, "first_limit_up": 1784079168, "break_limit_up_times": 15}, {"code": "002786", "name": "银宝山新", "price": 8.06, "change_pct": 9.96, "reason": "公司自主研发智能物联网机器人，包括送餐机器人、工业机器人等产品；上半年业绩同比扭亏，主要系“全球及国内半导体行业景气度持续回升，下游需求稳步回暖，为公司营造了良好的市场契机。公司主动调整产品与客户结构，推动核心业务板块订单增长，产能利用率有效提升，规模效应逐步释放”", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.41, "first_limit_up": 1784082423, "break_limit_up_times": 0}, {"code": "603192", "name": "汇得科技", "price": 20.47, "change_pct": 9.99, "reason": "公司专注于合革用聚氨酯业务，网传纪要表示，聚氨酯具有出色的柔韧性和弹性，能够模拟人类皮肤的触感和运动特性，使人形机器人在与外界接触时更加自然流畅，减少因刚性材料带来的不适感和碰撞损伤", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.78, "first_limit_up": 1784091824, "break_limit_up_times": 0}, {"code": "002382", "name": "蓝帆医疗", "price": 5.96, "change_pct": 9.96, "reason": "医疗器械龙头，业务包括一次性手套、支架、球囊和心脏瓣膜等；上半年业绩同比扭亏，主要系“公司各事业部在2026年上半年全部实现盈利，由于事业部存在少数股东，各事业部归属净利润合计约2.5亿元”", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.25, "first_limit_up": 1784078700, "break_limit_up_times": 1}, {"code": "600227", "name": "赤天化", "price": 2.92, "change_pct": 10.19, "reason": "贵州最大的甲醇生产企业；公司上半年业绩同比扭亏为盈，主要因“公司化工生产装置运行质效同步提升，主要产品尿素、甲醇产量有所增加，单位生产成本有所下降。同时，2026年2月下旬以来地缘因素带来的市场供给端影响，甲醇、复合肥产品销售价格同比上涨，化工业务净利润较上年同期实现增长”", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 13.28, "first_limit_up": 1784083098, "break_limit_up_times": 1}, {"code": "002900", "name": "哈三联", "price": 11.19, "change_pct": 10.03, "reason": "公司美妆系列聚焦日常多护肤场景，打造精细化面膜矩阵；“哈三联”II 类医疗器械敷料系列搭载重组胶原蛋白与透明质酸钠两大核心成分，深耕问题性肌肤赛道", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.43, "first_limit_up": 1784080947, "break_limit_up_times": 0}, {"code": "001896", "name": "豫能控股", "price": 14.95, "change_pct": 10.01, "reason": "1、公司是河南省集火力发电、新能源、抽水蓄能、煤炭贸易物流、综合能源服务于一体的省级资本控股的综合能源上市公司；\n2、公司筹划参股先天算力，并以先天算力为主体收购郑州合盈控股权，郑州合盈数据主要从事第三方超大规模数据中心业务，下属数据中心主要分布于河北省张家口市怀来县、廊坊市，位于京津冀节点，定位服务首都及周边地区实时算力需求", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 9.3, "first_limit_up": 1784098518, "break_limit_up_times": 0}, {"code": "688166", "name": "博瑞医药", "price": 35.44, "change_pct": 20.01, "reason": "公司已实现从“原料药起始物→cGMP高难度中间体→特色原料药→制剂产品”的全产业链覆盖", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.77, "first_limit_up": 1784079640, "break_limit_up_times": 2}, {"code": "002517", "name": "恺英网络", "price": 17.18, "change_pct": 9.99, "reason": "公司主营网游、页游开发运营", "plates": ["游戏"], "limit_up_days": 1, "turnover_ratio": 6.31, "first_limit_up": 1784091600, "break_limit_up_times": 0}, {"code": "603137", "name": "恒尚节能", "price": 35.61, "change_pct": 10.01, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 3, "turnover_ratio": 16.8, "first_limit_up": 1784095817, "break_limit_up_times": 3}, {"code": "002432", "name": "九安医疗", "price": 66.99, "change_pct": 10.0, "reason": "公司上半年净利预增204.29%至269.5%，主要系公司在科创投资领域的布局收益显现，报告期内底层标的估值上涨", "plates": ["业绩增长", "创投"], "limit_up_days": 2, "turnover_ratio": 0.7, "first_limit_up": 1784078700, "break_limit_up_times": 0}, {"code": "002365", "name": "永安药业", "price": 11.98, "change_pct": 10.01, "reason": "公司是牛磺酸行业龙头，上半年净利最高预增290%，主要原因为主营产品牛磺酸的销量增加和销售价格比上年同期上涨", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.95, "first_limit_up": 1784080248, "break_limit_up_times": 0}, {"code": "600721", "name": "百花医药", "price": 7.57, "change_pct": 10.03, "reason": "综合服务性CRO企业，控股股东、实际控制人拟变更为金华市国资委", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.98, "first_limit_up": 1784080128, "break_limit_up_times": 0}, {"code": "000596", "name": "古井贡酒", "price": 88.53, "change_pct": 10.0, "reason": "安徽地区白酒龙头", "plates": ["白酒"], "limit_up_days": 1, "turnover_ratio": 1.8, "first_limit_up": 1784091654, "break_limit_up_times": 0}, {"code": "605255", "name": "天普股份", "price": 87.19, "change_pct": 10.01, "reason": "控股股东等与中昊芯英签署的协议转让股份完成过户登记，中昊芯英为国内掌握TPU架构AI芯片核心研发技术并实现TPU芯片量产核心公司", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 0.89, "first_limit_up": 1784079150, "break_limit_up_times": 0}, {"code": "000722", "name": "湖南发展", "price": 12, "change_pct": 9.99, "reason": "公司预计上半年净利润同比增长318.91%-391.77%，报告期内业绩变化的主要原因是公司实施重大资产重组，高电公司、铜电公司、清电公司、筱电公司相关股权已全部登记至公司名下，上述四家公司成为公司的控股子公司，公司所属水电装机规模较上年同期大幅增长。本报告期内，公司所属水电站上游来水偏丰，水电业务板块发电量较上年同期大幅增长", "plates": ["智能电网", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.18, "first_limit_up": 1784081253, "break_limit_up_times": 0}, {"code": "603839", "name": "安正时尚", "price": 6.47, "change_pct": 10.03, "reason": "公司聚焦中高档品牌时装，上半年净利润同比扭亏", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.0, "first_limit_up": 1784082821, "break_limit_up_times": 0}, {"code": "002980", "name": "华盛昌", "price": 102.14, "change_pct": 10.01, "reason": "公司收购伽蓝特100%股权，后者专注光通信模块和光芯片测试；预计上半年净利润同比增长61.02%至84.02%，主要系全资子公司深圳市伽蓝特科技有限公司并表所致", "plates": ["光通信", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.01, "first_limit_up": 1784078700, "break_limit_up_times": 0}, {"code": "600829", "name": "人民同泰", "price": 9.89, "change_pct": 10.01, "reason": "黑龙江省内最大的医药商业公司，哈药集团医疗商业上市平台", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 4.24, "first_limit_up": 1784079391, "break_limit_up_times": 1}, {"code": "002739", "name": "儒意电影", "price": 9.38, "change_pct": 9.96, "reason": "国内领先的影院投资及运营商，影院经营的领军品牌", "plates": ["影视"], "limit_up_days": 1, "turnover_ratio": 4.57, "first_limit_up": 1784079081, "break_limit_up_times": 4}, {"code": "002141", "name": "贤丰控股", "price": 5.61, "change_pct": 10.0, "reason": "公司覆铜板上年度年产量近700万张，产品直接用于PCB生产", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 8.61, "first_limit_up": 1784079015, "break_limit_up_times": 3}, {"code": "603725", "name": "天安新材", "price": 13.11, "change_pct": 9.98, "reason": "公司参股若铂机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.2, "first_limit_up": 1784079106, "break_limit_up_times": 7}, {"code": "603387", "name": "基蛋生物", "price": 9.23, "change_pct": 10.01, "reason": "国内心血管POCT龙头，上半年净利润预增56%-84%，主要系“海外市场竞争力持续增强，POCT、化学发光等核心产品销量显著增长，带动营业收入实现显著提升”", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.01, "first_limit_up": 1784079426, "break_limit_up_times": 1}, {"code": "603538", "name": "美诺华", "price": 39, "change_pct": 10.01, "reason": "诺和诺德司美格鲁肽在中国的核心化合物专利到期；公司储备了减肥多肽类中间体，正在进行GLP-1的研发和技术的储备", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 30.43, "first_limit_up": 1784080718, "break_limit_up_times": 3}];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002759": "ST/风险警示股", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告"};