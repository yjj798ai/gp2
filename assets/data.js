const UPDATE_TIME = "2026-07-06 07:08";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 1.1,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -1.32,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续194天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "人形机器人",
    "rise": -2.83,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续405天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.91,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续241天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "猪肉",
    "rise": 3.39,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "培育钻石",
    "rise": 1.19,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "商业航天",
    "rise": -3.08,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续170天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": -3.57,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续64天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "ST板块",
    "rise": -1.07,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "液冷服务器",
    "rise": -1.0,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "机器人概念",
    "rise": -2.2,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "2026中报预增",
    "rise": 0.61,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "光纤概念",
    "rise": -3.3,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续70天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "青蒿素",
    "rise": 3.1,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885852"
  },
  {
    "name": "先进封装",
    "rise": -1.95,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续34天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "国家大基金持股",
    "rise": 0.03,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885893"
  },
  {
    "name": "玻璃基板",
    "rise": -4.33,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886111"
  },
  {
    "name": "芯片概念",
    "rise": -2.15,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续65天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "算力租赁",
    "rise": -1.75,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "CRO概念",
    "rise": 1.13,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  }
];
const THS_EVENTS = [
  {
    "title": "国家药监局：将符合条件的细胞与基因治疗药品纳入创新药临床试验审评审批30日通道",
    "desc": "",
    "heat": 251409,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗"
    ],
    "stocks": [
      {
        "name": "首药控股-U",
        "code": "688197",
        "chg": 14.666667
      }
    ]
  },
  {
    "title": "三星第三季度 DRAM 拟提价 20%，终端厂家称已接到口头通知",
    "desc": "",
    "heat": 99586,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "概伦电子",
        "code": "688206",
        "chg": 20.009845
      }
    ]
  },
  {
    "title": "全球首款忆阻器神经动力学芯片问世！脑机接口赛道加速爆发",
    "desc": "",
    "heat": 35750,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "当虹科技",
        "code": "688039",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "从跟随者到规则共建者：专家解读韬定律2.0如何解放AI算力的真潜能",
    "desc": "",
    "heat": 30600,
    "direction": "华为韬 (τ) 定律",
    "themes": [
      "先进封装",
      "晶圆代工",
      "EDA",
      "混合键合"
    ],
    "stocks": [
      {
        "name": "概伦电子",
        "code": "688206",
        "chg": 20.009845
      }
    ]
  },
  {
    "title": "上游原材料采购成本明显提升，四家充电模块企业集体涨价 15%",
    "desc": "",
    "heat": 30005,
    "direction": "充电模块涨价",
    "themes": [
      "充电桩",
      "充电模块"
    ],
    "stocks": [
      {
        "name": "中石科技",
        "code": "300684",
        "chg": 19.996775
      }
    ]
  },
  {
    "title": "美国国防部启动碳酸锂战略收储 五年拟采购1.62万吨补充国防储备",
    "desc": "",
    "heat": 10780,
    "direction": "锂资源",
    "themes": [
      "锂矿/锂盐",
      "盐湖提锂"
    ],
    "stocks": [
      {
        "name": "贤丰控股",
        "code": "002141",
        "chg": 9.922179
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "PTA",
    "change": "+5.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+4.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+3.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+3.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+2.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+2.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+2.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+2.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "山东自贸区",
    "change": "+2.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+2.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+2.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+2.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+1.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "长寿药NMN",
    "change": "+1.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+1.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+1.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+1.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+1.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "+1.63%",
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
    "hot_rank_chg": 2,
    "stock_cnt": 5860,
    "price": "7.76",
    "change": "-7.40",
    "market_id": "33",
    "circulate_market_value": "274448960000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.61
      },
      {
        "name": "折叠屏",
        "change_pct": -3.32
      },
      {
        "name": "手机产业链",
        "change_pct": -2.91
      },
      {
        "name": "超高清视频",
        "change_pct": -1.85
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.86
      },
      {
        "name": "半导体",
        "change_pct": -1.03
      },
      {
        "name": "人工智能",
        "change_pct": -1.78
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.9
      },
      {
        "name": "VR&AR",
        "change_pct": -3.15
      },
      {
        "name": "OLED",
        "change_pct": -2.77
      },
      {
        "name": "京津冀",
        "change_pct": -0.85
      },
      {
        "name": "物联网",
        "change_pct": -1.96
      },
      {
        "name": "指纹识别",
        "change_pct": -2.97
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.96
      },
      {
        "name": "白马股",
        "change_pct": 0.75
      },
      {
        "name": "智能制造",
        "change_pct": -2.43
      },
      {
        "name": "小米概念股",
        "change_pct": -2.1
      },
      {
        "name": "国产芯片",
        "change_pct": -1.1
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.39
      },
      {
        "name": "全息概念",
        "change_pct": -2.23
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.75
      },
      {
        "name": "MicroLED",
        "change_pct": -3.42
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -4.04
      },
      {
        "name": "智能手表",
        "change_pct": -2.96
      },
      {
        "name": "MiniLED",
        "change_pct": -3.3
      },
      {
        "name": "传感器",
        "change_pct": -2.46
      },
      {
        "name": "大硅片",
        "change_pct": -2.41
      },
      {
        "name": "AI PC",
        "change_pct": -3.11
      },
      {
        "name": "华为产业链",
        "change_pct": -2.06
      },
      {
        "name": "回购",
        "change_pct": -0.39
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.75
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.3
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 8,
    "hot_rank_chg": 1,
    "stock_cnt": 5860,
    "price": "8.43",
    "change": "-10.03",
    "market_id": "33",
    "circulate_market_value": "13704599000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.33
      },
      {
        "name": "电竞",
        "change_pct": -1.24
      },
      {
        "name": "手游",
        "change_pct": -0.03
      },
      {
        "name": "强势人气股",
        "change_pct": -2.49
      },
      {
        "name": "人工智能",
        "change_pct": -1.78
      },
      {
        "name": "游戏",
        "change_pct": -0.55
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.9
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.38
      },
      {
        "name": "快手概念股",
        "change_pct": -2.88
      },
      {
        "name": "元宇宙",
        "change_pct": -2.4
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.6
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.62
      },
      {
        "name": "web3.0",
        "change_pct": -3.55
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.02
      },
      {
        "name": "数据要素",
        "change_pct": -2.3
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.16
      },
      {
        "name": "AI营销",
        "change_pct": -1.87
      },
      {
        "name": "ChatGPT",
        "change_pct": -3.12
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.75
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.44
      },
      {
        "name": "人形机器人",
        "change_pct": -3.59
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.0
      },
      {
        "name": "多模态",
        "change_pct": -2.4
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -3.05
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.88
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.96
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 13,
    "hot_rank_chg": 5,
    "stock_cnt": 5860,
    "price": "7.39",
    "change": "-3.65",
    "market_id": "17",
    "circulate_market_value": "91607098000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.81
      },
      {
        "name": "核电",
        "change_pct": -2.04
      },
      {
        "name": "强势人气股",
        "change_pct": -2.49
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.97
      },
      {
        "name": "水电",
        "change_pct": -0.28
      },
      {
        "name": "火电",
        "change_pct": -0.81
      },
      {
        "name": "光伏",
        "change_pct": -2.4
      },
      {
        "name": "风电",
        "change_pct": -2.37
      },
      {
        "name": "国企改革",
        "change_pct": -0.73
      },
      {
        "name": "算电协同",
        "change_pct": -1.04
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 24,
    "hot_rank_chg": 9,
    "stock_cnt": 5860,
    "price": "6.43",
    "change": "4.72",
    "market_id": "33",
    "circulate_market_value": "8338010100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.7
      },
      {
        "name": "创新药",
        "change_pct": 1.51
      },
      {
        "name": "央企改革",
        "change_pct": -0.81
      },
      {
        "name": "医疗器械",
        "change_pct": -0.39
      },
      {
        "name": "强势人气股",
        "change_pct": -2.49
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.9
      },
      {
        "name": "保健品",
        "change_pct": 0.53
      },
      {
        "name": "民营医院",
        "change_pct": 0.67
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 2.15
      },
      {
        "name": "医药",
        "change_pct": 0.85
      },
      {
        "name": "化学原料药",
        "change_pct": 0.73
      },
      {
        "name": "海南概念",
        "change_pct": -0.64
      },
      {
        "name": "脑科学",
        "change_pct": -0.07
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.15
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.34
      },
      {
        "name": "食品",
        "change_pct": 0.66
      },
      {
        "name": "国企改革",
        "change_pct": -0.73
      },
      {
        "name": "医疗信息化",
        "change_pct": -1.77
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.8
      },
      {
        "name": "自贸区",
        "change_pct": -0.18
      },
      {
        "name": "合成生物",
        "change_pct": 0.32
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 30,
    "hot_rank_chg": -10,
    "stock_cnt": 5860,
    "price": "5.19",
    "change": "-8.14",
    "market_id": "33",
    "circulate_market_value": "99295258000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.32
      },
      {
        "name": "手机产业链",
        "change_pct": -2.91
      },
      {
        "name": "超高清视频",
        "change_pct": -1.85
      },
      {
        "name": "半导体",
        "change_pct": -1.03
      },
      {
        "name": "OLED",
        "change_pct": -2.77
      },
      {
        "name": "光伏",
        "change_pct": -2.4
      },
      {
        "name": "黑色家电",
        "change_pct": -2.3
      },
      {
        "name": "家电",
        "change_pct": -1.21
      },
      {
        "name": "智能制造",
        "change_pct": -2.43
      },
      {
        "name": "工业互联网",
        "change_pct": -2.23
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.1
      },
      {
        "name": "国产芯片",
        "change_pct": -1.1
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.38
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.39
      },
      {
        "name": "MicroLED",
        "change_pct": -3.42
      },
      {
        "name": "MiniLED",
        "change_pct": -3.3
      },
      {
        "name": "华为产业链",
        "change_pct": -2.06
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.3
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 48,
    "hot_rank_chg": 124,
    "stock_cnt": 5860,
    "price": "12.79",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "10347352900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -2.01
      },
      {
        "name": "大飞机",
        "change_pct": -2.67
      },
      {
        "name": "北斗导航",
        "change_pct": -2.68
      },
      {
        "name": "高铁轨交",
        "change_pct": -1.38
      },
      {
        "name": "军民融合",
        "change_pct": -2.45
      },
      {
        "name": "磁悬浮",
        "change_pct": -2.01
      },
      {
        "name": "军工",
        "change_pct": -2.34
      },
      {
        "name": "碳纤维",
        "change_pct": -3.31
      },
      {
        "name": "无人机",
        "change_pct": -3.11
      },
      {
        "name": "航天",
        "change_pct": -3.23
      },
      {
        "name": "卫星互联网",
        "change_pct": -3.45
      },
      {
        "name": "低空经济",
        "change_pct": -2.53
      },
      {
        "name": "海洋经济",
        "change_pct": -1.66
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 81,
    "hot_rank_chg": 65,
    "stock_cnt": 5860,
    "price": "12.48",
    "change": "-5.46",
    "market_id": "33",
    "circulate_market_value": "43404570000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.33
      },
      {
        "name": "人工智能",
        "change_pct": -1.78
      },
      {
        "name": "VR&AR",
        "change_pct": -3.15
      },
      {
        "name": "直播/短视频",
        "change_pct": -2.04
      },
      {
        "name": "大数据",
        "change_pct": -2.06
      },
      {
        "name": "教育",
        "change_pct": 0.11
      },
      {
        "name": "百度概念股",
        "change_pct": -2.07
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.58
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.38
      },
      {
        "name": "传媒",
        "change_pct": -1.37
      },
      {
        "name": "快手概念股",
        "change_pct": -2.88
      },
      {
        "name": "NFT",
        "change_pct": -1.38
      },
      {
        "name": "元宇宙",
        "change_pct": -2.4
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.6
      },
      {
        "name": "web3.0",
        "change_pct": -3.55
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.02
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.16
      },
      {
        "name": "职业教育",
        "change_pct": -1.14
      },
      {
        "name": "云游戏",
        "change_pct": -1.66
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.36
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -1.87
      },
      {
        "name": "AI营销",
        "change_pct": -1.87
      },
      {
        "name": "词元概念/Token",
        "change_pct": -2.76
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.44
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -3.05
      },
      {
        "name": "智谱AI",
        "change_pct": -2.63
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.96
      },
      {
        "name": "区块链",
        "change_pct": -2.06
      }
    ]
  },
  {
    "code": "000601",
    "name": "韶能股份",
    "hot_rank": 84,
    "hot_rank_chg": 207,
    "stock_cnt": 5860,
    "price": "7.19",
    "change": "8.94",
    "market_id": "33",
    "circulate_market_value": "7546757200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -0.32
      },
      {
        "name": "水电",
        "change_pct": -0.28
      },
      {
        "name": "重卡",
        "change_pct": 0.26
      },
      {
        "name": "充电桩",
        "change_pct": -1.34
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.91
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.84
      },
      {
        "name": "减速器",
        "change_pct": -4.76
      },
      {
        "name": "算电协同",
        "change_pct": -1.04
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 95,
    "hot_rank_chg": 186,
    "stock_cnt": 5860,
    "price": "9.35",
    "change": "-4.49",
    "market_id": "33",
    "circulate_market_value": "19466717000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -1.11
      },
      {
        "name": "足球",
        "change_pct": -0.85
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.58
      },
      {
        "name": "拼多多概念股",
        "change_pct": -1.55
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.36
      },
      {
        "name": "大消费",
        "change_pct": 1.12
      },
      {
        "name": "盲盒",
        "change_pct": -1.28
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.0
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.88
      },
      {
        "name": "首发经济",
        "change_pct": -0.22
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.96
      },
      {
        "name": "服务消费",
        "change_pct": -0.21
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5860, "price": "7.76", "change": "-7.40", "market_id": "33", "circulate_market_value": "274448960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.61}, {"name": "折叠屏", "change_pct": -3.32}, {"name": "手机产业链", "change_pct": -2.91}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "苹果产业链", "change_pct": -2.86}, {"name": "半导体", "change_pct": -1.03}, {"name": "人工智能", "change_pct": -1.78}, {"name": "互联网医疗", "change_pct": -0.9}, {"name": "VR&AR", "change_pct": -3.15}, {"name": "OLED", "change_pct": -2.77}, {"name": "京津冀", "change_pct": -0.85}, {"name": "物联网", "change_pct": -1.96}, {"name": "指纹识别", "change_pct": -2.97}, {"name": "汽车零部件", "change_pct": -1.96}, {"name": "白马股", "change_pct": 0.75}, {"name": "智能制造", "change_pct": -2.43}, {"name": "小米概念股", "change_pct": -2.1}, {"name": "国产芯片", "change_pct": -1.1}, {"name": "液晶面板/LCD", "change_pct": -3.39}, {"name": "全息概念", "change_pct": -2.23}, {"name": "理想汽车概念股", "change_pct": -1.75}, {"name": "MicroLED", "change_pct": -3.42}, {"name": "钙钛矿电池", "change_pct": -4.04}, {"name": "智能手表", "change_pct": -2.96}, {"name": "MiniLED", "change_pct": -3.3}, {"name": "传感器", "change_pct": -2.46}, {"name": "大硅片", "change_pct": -2.41}, {"name": "AI PC", "change_pct": -3.11}, {"name": "华为产业链", "change_pct": -2.06}, {"name": "回购", "change_pct": -0.39}, {"name": "智能眼镜/MR头显", "change_pct": -2.75}, {"name": "玻璃基板封装", "change_pct": -4.3}]}, {"code": "600667", "name": "太极实业", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5860, "price": "27.41", "change": "-8.51", "market_id": "17", "circulate_market_value": "57329171000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 3, "hot_rank_chg": 7, "stock_cnt": 5860, "price": "95.09", "change": "4.63", "market_id": "17", "circulate_market_value": "170155430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 4, "hot_rank_chg": 11, "stock_cnt": 5860, "price": "18.37", "change": "-16.58", "market_id": "33", "circulate_market_value": "19516358000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5860, "price": "45.86", "change": "-7.05", "market_id": "33", "circulate_market_value": "49472270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 6, "hot_rank_chg": 48, "stock_cnt": 5860, "price": "33.31", "change": "10.01", "market_id": "33", "circulate_market_value": "95269021000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国产算力"}, {"code": "002747", "name": "埃斯顿", "hot_rank": 7, "hot_rank_chg": -3, "stock_cnt": 5860, "price": "46.03", "change": "2.81", "market_id": "33", "circulate_market_value": "36014085000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 8, "hot_rank_chg": 1, "stock_cnt": 5860, "price": "8.43", "change": "-10.03", "market_id": "33", "circulate_market_value": "13704599000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.33}, {"name": "电竞", "change_pct": -1.24}, {"name": "手游", "change_pct": -0.03}, {"name": "强势人气股", "change_pct": -2.49}, {"name": "人工智能", "change_pct": -1.78}, {"name": "游戏", "change_pct": -0.55}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.9}, {"name": "腾讯概念股", "change_pct": -1.38}, {"name": "快手概念股", "change_pct": -2.88}, {"name": "元宇宙", "change_pct": -2.4}, {"name": "虚拟数字人", "change_pct": -2.6}, {"name": "东数西算/算力", "change_pct": -1.62}, {"name": "web3.0", "change_pct": -3.55}, {"name": "AIGC概念", "change_pct": -2.02}, {"name": "数据要素", "change_pct": -2.3}, {"name": "字节跳动概念股", "change_pct": -2.16}, {"name": "AI营销", "change_pct": -1.87}, {"name": "ChatGPT", "change_pct": -3.12}, {"name": "智能眼镜/MR头显", "change_pct": -2.75}, {"name": "人工智能大模型", "change_pct": -1.44}, {"name": "人形机器人", "change_pct": -3.59}, {"name": "短剧/互动影游", "change_pct": -2.0}, {"name": "多模态", "change_pct": -2.4}, {"name": "Sora/AI视频", "change_pct": -3.05}, {"name": "IP经济/谷子经济", "change_pct": -0.88}, {"name": "小红书概念股", "change_pct": -2.96}]}, {"code": "301308", "name": "江波龙", "hot_rank": 9, "hot_rank_chg": -3, "stock_cnt": 5860, "price": "681.80", "change": "10.32", "market_id": "33", "circulate_market_value": "192166620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 10, "hot_rank_chg": 25, "stock_cnt": 5860, "price": "935.00", "change": "6.02", "market_id": "33", "circulate_market_value": "154338590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 11, "hot_rank_chg": 11, "stock_cnt": 5860, "price": "654.29", "change": "-3.46", "market_id": "17", "circulate_market_value": "437387590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 12, "hot_rank_chg": -1, "stock_cnt": 5860, "price": "53.30", "change": "-4.67", "market_id": "33", "circulate_market_value": "83902492000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 13, "hot_rank_chg": 5, "stock_cnt": 5860, "price": "7.39", "change": "-3.65", "market_id": "17", "circulate_market_value": "91607098000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.81}, {"name": "核电", "change_pct": -2.04}, {"name": "强势人气股", "change_pct": -2.49}, {"name": "电力体制改革", "change_pct": -0.97}, {"name": "水电", "change_pct": -0.28}, {"name": "火电", "change_pct": -0.81}, {"name": "光伏", "change_pct": -2.4}, {"name": "风电", "change_pct": -2.37}, {"name": "国企改革", "change_pct": -0.73}, {"name": "算电协同", "change_pct": -1.04}]}, {"code": "001896", "name": "豫能控股", "hot_rank": 14, "hot_rank_chg": 208, "stock_cnt": 5860, "price": "16.51", "change": "4.69", "market_id": "33", "circulate_market_value": "25190650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 15, "hot_rank_chg": -3, "stock_cnt": 5860, "price": "84.60", "change": "-5.39", "market_id": "17", "circulate_market_value": "206862320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 16, "hot_rank_chg": 199, "stock_cnt": 5860, "price": "18.82", "change": "9.99", "market_id": "33", "circulate_market_value": "60705601000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国产算力"}, {"code": "600176", "name": "中国巨石", "hot_rank": 17, "hot_rank_chg": 2, "stock_cnt": 5860, "price": "63.81", "change": "-10.00", "market_id": "17", "circulate_market_value": "253426970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 18, "hot_rank_chg": 14, "stock_cnt": 5860, "price": "19.94", "change": "2.20", "market_id": "33", "circulate_market_value": "66253676000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 19, "hot_rank_chg": 2, "stock_cnt": 5860, "price": "48.03", "change": "-4.36", "market_id": "17", "circulate_market_value": "163923970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 20, "hot_rank_chg": -13, "stock_cnt": 5860, "price": "46.15", "change": "-5.80", "market_id": "33", "circulate_market_value": "170025720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 21, "hot_rank_chg": 35, "stock_cnt": 5860, "price": "49.00", "change": "-9.33", "market_id": "33", "circulate_market_value": "73941540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 22, "hot_rank_chg": 41, "stock_cnt": 5860, "price": "57.70", "change": "2.56", "market_id": "17", "circulate_market_value": "22251269000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 24, "hot_rank_chg": 9, "stock_cnt": 5860, "price": "6.43", "change": "4.72", "market_id": "33", "circulate_market_value": "8338010100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.7}, {"name": "创新药", "change_pct": 1.51}, {"name": "央企改革", "change_pct": -0.81}, {"name": "医疗器械", "change_pct": -0.39}, {"name": "强势人气股", "change_pct": -2.49}, {"name": "互联网医疗", "change_pct": -0.9}, {"name": "保健品", "change_pct": 0.53}, {"name": "民营医院", "change_pct": 0.67}, {"name": "CAR-T疗法", "change_pct": 2.15}, {"name": "医药", "change_pct": 0.85}, {"name": "化学原料药", "change_pct": 0.73}, {"name": "海南概念", "change_pct": -0.64}, {"name": "脑科学", "change_pct": -0.07}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.15}, {"name": "海南自由贸易港", "change_pct": 0.34}, {"name": "食品", "change_pct": 0.66}, {"name": "国企改革", "change_pct": -0.73}, {"name": "医疗信息化", "change_pct": -1.77}, {"name": "新冠病毒防治", "change_pct": -0.8}, {"name": "自贸区", "change_pct": -0.18}, {"name": "合成生物", "change_pct": 0.32}]}, {"code": "000636", "name": "风华高科", "hot_rank": 25, "hot_rank_chg": 2, "stock_cnt": 5860, "price": "58.50", "change": "-7.48", "market_id": "33", "circulate_market_value": "67685267000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 26, "hot_rank_chg": 2, "stock_cnt": 5860, "price": "1098.92", "change": "-1.53", "market_id": "33", "circulate_market_value": "1219735020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 27, "hot_rank_chg": 22, "stock_cnt": 5860, "price": "38.12", "change": "-9.54", "market_id": "33", "circulate_market_value": "16413204000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 28, "hot_rank_chg": 155, "stock_cnt": 5860, "price": "69.71", "change": "5.06", "market_id": "33", "circulate_market_value": "102252845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 29, "hot_rank_chg": -4, "stock_cnt": 5860, "price": "16.23", "change": "-9.93", "market_id": "33", "circulate_market_value": "116851209000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 30, "hot_rank_chg": -10, "stock_cnt": 5860, "price": "5.19", "change": "-8.14", "market_id": "33", "circulate_market_value": "99295258000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.32}, {"name": "手机产业链", "change_pct": -2.91}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "半导体", "change_pct": -1.03}, {"name": "OLED", "change_pct": -2.77}, {"name": "光伏", "change_pct": -2.4}, {"name": "黑色家电", "change_pct": -2.3}, {"name": "家电", "change_pct": -1.21}, {"name": "智能制造", "change_pct": -2.43}, {"name": "工业互联网", "change_pct": -2.23}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.1}, {"name": "国产芯片", "change_pct": -1.1}, {"name": "腾讯概念股", "change_pct": -1.38}, {"name": "液晶面板/LCD", "change_pct": -3.39}, {"name": "MicroLED", "change_pct": -3.42}, {"name": "MiniLED", "change_pct": -3.3}, {"name": "华为产业链", "change_pct": -2.06}, {"name": "玻璃基板封装", "change_pct": -4.3}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 31, "hot_rank_chg": -29, "stock_cnt": 5860, "price": "50.05", "change": "-8.22", "market_id": "17", "circulate_market_value": "73172840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 32, "hot_rank_chg": 5, "stock_cnt": 5860, "price": "18.55", "change": "10.02", "market_id": "17", "circulate_market_value": "23674544000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "金刚石散热"}, {"code": "603629", "name": "利通电子", "hot_rank": 33, "hot_rank_chg": 11, "stock_cnt": 5860, "price": "172.90", "change": "3.77", "market_id": "17", "circulate_market_value": "44613560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 34, "hot_rank_chg": -21, "stock_cnt": 5860, "price": "44.10", "change": "-10.00", "market_id": "17", "circulate_market_value": "30489665000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 35, "hot_rank_chg": 130, "stock_cnt": 5860, "price": "454.70", "change": "6.26", "market_id": "17", "circulate_market_value": "214421360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 36, "hot_rank_chg": -7, "stock_cnt": 5860, "price": "224.46", "change": "-3.55", "market_id": "33", "circulate_market_value": "311173770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 37, "hot_rank_chg": -6, "stock_cnt": 5860, "price": "50.89", "change": "-6.28", "market_id": "17", "circulate_market_value": "43081099000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 38, "hot_rank_chg": 30, "stock_cnt": 5860, "price": "79.60", "change": "5.65", "market_id": "33", "circulate_market_value": "16019781000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 39, "hot_rank_chg": 70, "stock_cnt": 5860, "price": "506.89", "change": "-3.63", "market_id": "33", "circulate_market_value": "635763310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 40, "hot_rank_chg": -16, "stock_cnt": 5860, "price": "14.39", "change": "-8.63", "market_id": "17", "circulate_market_value": "24969254000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 41, "hot_rank_chg": -15, "stock_cnt": 5860, "price": "23.91", "change": "-2.77", "market_id": "33", "circulate_market_value": "80421406000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 42, "hot_rank_chg": 28, "stock_cnt": 5860, "price": "66.18", "change": "2.13", "market_id": "33", "circulate_market_value": "100424988000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603667", "name": "五洲新春", "hot_rank": 43, "hot_rank_chg": 32, "stock_cnt": 5860, "price": "68.54", "change": "-9.99", "market_id": "17", "circulate_market_value": "25099538000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 44, "hot_rank_chg": 11, "stock_cnt": 5860, "price": "68.41", "change": "-10.00", "market_id": "17", "circulate_market_value": "73374196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 45, "hot_rank_chg": 525, "stock_cnt": 5860, "price": "19.38", "change": "5.38", "market_id": "33", "circulate_market_value": "8156364300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 46, "hot_rank_chg": 84, "stock_cnt": 5860, "price": "21.18", "change": "0.57", "market_id": "33", "circulate_market_value": "282822800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 47, "hot_rank_chg": 12, "stock_cnt": 5860, "price": "63.59", "change": "-1.75", "market_id": "17", "circulate_market_value": "1261885830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 48, "hot_rank_chg": 124, "stock_cnt": 5860, "price": "12.79", "change": "-9.99", "market_id": "33", "circulate_market_value": "10347352900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -2.01}, {"name": "大飞机", "change_pct": -2.67}, {"name": "北斗导航", "change_pct": -2.68}, {"name": "高铁轨交", "change_pct": -1.38}, {"name": "军民融合", "change_pct": -2.45}, {"name": "磁悬浮", "change_pct": -2.01}, {"name": "军工", "change_pct": -2.34}, {"name": "碳纤维", "change_pct": -3.31}, {"name": "无人机", "change_pct": -3.11}, {"name": "航天", "change_pct": -3.23}, {"name": "卫星互联网", "change_pct": -3.45}, {"name": "低空经济", "change_pct": -2.53}, {"name": "海洋经济", "change_pct": -1.66}]}, {"code": "600160", "name": "巨化股份", "hot_rank": 49, "hot_rank_chg": 15, "stock_cnt": 5860, "price": "49.05", "change": "-0.61", "market_id": "17", "circulate_market_value": "132422545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 50, "hot_rank_chg": 127, "stock_cnt": 5860, "price": "38.68", "change": "4.82", "market_id": "33", "circulate_market_value": "126889711000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 51, "hot_rank_chg": 73, "stock_cnt": 5860, "price": "94.56", "change": "2.03", "market_id": "17", "circulate_market_value": "138346420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 52, "hot_rank_chg": 62, "stock_cnt": 5860, "price": "80.46", "change": "-10.00", "market_id": "33", "circulate_market_value": "116902373000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002457", "name": "青龙管业", "hot_rank": 53, "hot_rank_chg": 620, "stock_cnt": 5860, "price": "14.07", "change": "10.01", "market_id": "33", "circulate_market_value": "4689113800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "地下管网"}, {"code": "000063", "name": "中兴通讯", "hot_rank": 55, "hot_rank_chg": 97, "stock_cnt": 5860, "price": "36.28", "change": "-0.28", "market_id": "33", "circulate_market_value": "146122100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000070", "name": "特发信息", "hot_rank": 56, "hot_rank_chg": 330, "stock_cnt": 5860, "price": "18.79", "change": "4.45", "market_id": "33", "circulate_market_value": "16097901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 57, "hot_rank_chg": -16, "stock_cnt": 5860, "price": "59.49", "change": "-8.01", "market_id": "17", "circulate_market_value": "45938141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 58, "hot_rank_chg": -19, "stock_cnt": 5860, "price": "13.52", "change": "-9.99", "market_id": "17", "circulate_market_value": "48505295000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 59, "hot_rank_chg": 44, "stock_cnt": 5860, "price": "56.77", "change": "4.26", "market_id": "17", "circulate_market_value": "362135960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 60, "hot_rank_chg": 51, "stock_cnt": 5860, "price": "96.79", "change": "-9.50", "market_id": "33", "circulate_market_value": "70106489000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300561", "name": "汇金科技", "hot_rank": 61, "hot_rank_chg": 535, "stock_cnt": 5860, "price": "18.04", "change": "4.88", "market_id": "33", "circulate_market_value": "4348678600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 62, "hot_rank_chg": -15, "stock_cnt": 5860, "price": "35.14", "change": "-9.99", "market_id": "33", "circulate_market_value": "13187479800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 63, "hot_rank_chg": 141, "stock_cnt": 5860, "price": "65.86", "change": "9.99", "market_id": "17", "circulate_market_value": "27421977000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 64, "hot_rank_chg": 31, "stock_cnt": 5860, "price": "128.83", "change": "-4.82", "market_id": "33", "circulate_market_value": "247715670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 65, "hot_rank_chg": 43, "stock_cnt": 5860, "price": "105.31", "change": "0.23", "market_id": "33", "circulate_market_value": "68771182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002294", "name": "信立泰", "hot_rank": 66, "hot_rank_chg": -24, "stock_cnt": 5860, "price": "39.83", "change": "-0.62", "market_id": "33", "circulate_market_value": "44393153000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300503", "name": "昊志机电", "hot_rank": 67, "hot_rank_chg": -21, "stock_cnt": 5860, "price": "109.80", "change": "-1.08", "market_id": "33", "circulate_market_value": "26459066000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 68, "hot_rank_chg": 153, "stock_cnt": 5860, "price": "30.10", "change": "3.15", "market_id": "33", "circulate_market_value": "34497775000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 69, "hot_rank_chg": 47, "stock_cnt": 5860, "price": "40.66", "change": "-13.47", "market_id": "33", "circulate_market_value": "57102616000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 70, "hot_rank_chg": -8, "stock_cnt": 5860, "price": "28.28", "change": "1.65", "market_id": "17", "circulate_market_value": "582618710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 71, "hot_rank_chg": -55, "stock_cnt": 5860, "price": "37.91", "change": "1.50", "market_id": "17", "circulate_market_value": "59049848000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 72, "hot_rank_chg": 16, "stock_cnt": 5860, "price": "46.62", "change": "-1.33", "market_id": "17", "circulate_market_value": "77579029000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 73, "hot_rank_chg": 50, "stock_cnt": 5860, "price": "41.58", "change": "7.14", "market_id": "17", "circulate_market_value": "10006522600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 74, "hot_rank_chg": 41, "stock_cnt": 5860, "price": "17.70", "change": "-8.72", "market_id": "33", "circulate_market_value": "28127443000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 75, "hot_rank_chg": 3, "stock_cnt": 5860, "price": "17.35", "change": "-4.83", "market_id": "17", "circulate_market_value": "86559475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 76, "hot_rank_chg": 85, "stock_cnt": 5860, "price": "237.00", "change": "-5.24", "market_id": "33", "circulate_market_value": "257947970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002979", "name": "雷赛智能", "hot_rank": 77, "hot_rank_chg": -54, "stock_cnt": 5860, "price": "73.27", "change": "5.35", "market_id": "33", "circulate_market_value": "16320399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 78, "hot_rank_chg": -7, "stock_cnt": 5860, "price": "14.99", "change": "-0.86", "market_id": "17", "circulate_market_value": "62512696000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 79, "hot_rank_chg": 87, "stock_cnt": 5860, "price": "93.67", "change": "-8.70", "market_id": "33", "circulate_market_value": "77296506000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600030", "name": "中信证券", "hot_rank": 80, "hot_rank_chg": 64, "stock_cnt": 5860, "price": "29.23", "change": "0.97", "market_id": "17", "circulate_market_value": "355920580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 81, "hot_rank_chg": 65, "stock_cnt": 5860, "price": "12.48", "change": "-5.46", "market_id": "33", "circulate_market_value": "43404570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.33}, {"name": "人工智能", "change_pct": -1.78}, {"name": "VR&AR", "change_pct": -3.15}, {"name": "直播/短视频", "change_pct": -2.04}, {"name": "大数据", "change_pct": -2.06}, {"name": "教育", "change_pct": 0.11}, {"name": "百度概念股", "change_pct": -2.07}, {"name": "阿里巴巴概念股", "change_pct": -1.58}, {"name": "腾讯概念股", "change_pct": -1.38}, {"name": "传媒", "change_pct": -1.37}, {"name": "快手概念股", "change_pct": -2.88}, {"name": "NFT", "change_pct": -1.38}, {"name": "元宇宙", "change_pct": -2.4}, {"name": "虚拟数字人", "change_pct": -2.6}, {"name": "web3.0", "change_pct": -3.55}, {"name": "AIGC概念", "change_pct": -2.02}, {"name": "字节跳动概念股", "change_pct": -2.16}, {"name": "职业教育", "change_pct": -1.14}, {"name": "云游戏", "change_pct": -1.66}, {"name": "网红/MCN", "change_pct": -1.36}, {"name": "5G消息/RCS", "change_pct": -1.87}, {"name": "AI营销", "change_pct": -1.87}, {"name": "词元概念/Token", "change_pct": -2.76}, {"name": "人工智能大模型", "change_pct": -1.44}, {"name": "Sora/AI视频", "change_pct": -3.05}, {"name": "智谱AI", "change_pct": -2.63}, {"name": "小红书概念股", "change_pct": -2.96}, {"name": "区块链", "change_pct": -2.06}]}, {"code": "300223", "name": "北京君正", "hot_rank": 82, "hot_rank_chg": -22, "stock_cnt": 5860, "price": "253.00", "change": "-2.53", "market_id": "33", "circulate_market_value": "106688640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 83, "hot_rank_chg": 37, "stock_cnt": 5860, "price": "45.29", "change": "-2.33", "market_id": "33", "circulate_market_value": "68747069000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000601", "name": "韶能股份", "hot_rank": 84, "hot_rank_chg": 207, "stock_cnt": 5860, "price": "7.19", "change": "8.94", "market_id": "33", "circulate_market_value": "7546757200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.32}, {"name": "水电", "change_pct": -0.28}, {"name": "重卡", "change_pct": 0.26}, {"name": "充电桩", "change_pct": -1.34}, {"name": "新能源汽车", "change_pct": -1.91}, {"name": "新能源车零部件", "change_pct": -1.84}, {"name": "减速器", "change_pct": -4.76}, {"name": "算电协同", "change_pct": -1.04}]}, {"code": "600183", "name": "生益科技", "hot_rank": 85, "hot_rank_chg": -27, "stock_cnt": 5860, "price": "154.27", "change": "-4.05", "market_id": "17", "circulate_market_value": "369399750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 86, "hot_rank_chg": 67, "stock_cnt": 5860, "price": "18.31", "change": "-1.13", "market_id": "17", "circulate_market_value": "319708020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605589", "name": "圣泉集团", "hot_rank": 87, "hot_rank_chg": 174, "stock_cnt": 5860, "price": "57.70", "change": "3.59", "market_id": "17", "circulate_market_value": "48809526000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 88, "hot_rank_chg": 53, "stock_cnt": 5860, "price": "45.20", "change": "1.50", "market_id": "17", "circulate_market_value": "37462264000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 89, "hot_rank_chg": 86, "stock_cnt": 5860, "price": "144.17", "change": "-6.76", "market_id": "33", "circulate_market_value": "119519171000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 90, "hot_rank_chg": -23, "stock_cnt": 5860, "price": "122.97", "change": "-0.93", "market_id": "17", "circulate_market_value": "304139270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600379", "name": "宝光股份", "hot_rank": 91, "hot_rank_chg": 202, "stock_cnt": 5860, "price": "16.71", "change": "6.91", "market_id": "17", "circulate_market_value": "5517668100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 92, "hot_rank_chg": 34, "stock_cnt": 5860, "price": "209.03", "change": "-3.82", "market_id": "33", "circulate_market_value": "163147570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002422", "name": "科伦药业", "hot_rank": 93, "hot_rank_chg": -27, "stock_cnt": 5860, "price": "47.73", "change": "-0.52", "market_id": "33", "circulate_market_value": "61983269000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 94, "hot_rank_chg": -41, "stock_cnt": 5860, "price": "83.15", "change": "-3.65", "market_id": "17", "circulate_market_value": "98323972000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 95, "hot_rank_chg": 186, "stock_cnt": 5860, "price": "9.35", "change": "-4.49", "market_id": "33", "circulate_market_value": "19466717000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -1.11}, {"name": "足球", "change_pct": -0.85}, {"name": "阿里巴巴概念股", "change_pct": -1.58}, {"name": "拼多多概念股", "change_pct": -1.55}, {"name": "网红/MCN", "change_pct": -1.36}, {"name": "大消费", "change_pct": 1.12}, {"name": "盲盒", "change_pct": -1.28}, {"name": "短剧/互动影游", "change_pct": -2.0}, {"name": "IP经济/谷子经济", "change_pct": -0.88}, {"name": "首发经济", "change_pct": -0.22}, {"name": "小红书概念股", "change_pct": -2.96}, {"name": "服务消费", "change_pct": -0.21}]}, {"code": "300821", "name": "东岳硅材", "hot_rank": 96, "hot_rank_chg": 4, "stock_cnt": 5860, "price": "22.02", "change": "12.92", "market_id": "33", "circulate_market_value": "26419392000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000034", "name": "神州数码", "hot_rank": 97, "hot_rank_chg": 169, "stock_cnt": 5860, "price": "28.88", "change": "3.25", "market_id": "33", "circulate_market_value": "24523390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 98, "hot_rank_chg": 19, "stock_cnt": 5860, "price": "268.68", "change": "0.70", "market_id": "17", "circulate_market_value": "308021880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688017", "name": "绿的谐波", "hot_rank": 99, "hot_rank_chg": -65, "stock_cnt": 5860, "price": "453.98", "change": "-6.97", "market_id": "17", "circulate_market_value": "83228210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 100, "hot_rank_chg": 107, "stock_cnt": 5860, "price": "74.06", "change": "3.68", "market_id": "33", "circulate_market_value": "83721730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] 卓然股份：关于立案调查进展暨风险提示公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "ST/风险警示股", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};