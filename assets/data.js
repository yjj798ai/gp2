const UPDATE_TIME = "2026-07-06 11:59";
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
    "name": "猪肉",
    "rise": 3.39,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
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
    "etfName": "创业板人工智能ETF",
    "code": "886033"
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
    "etfName": "平安新兴产业LOF",
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
    "name": "先进封装",
    "rise": -1.95,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续34天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "国家大基金持股",
    "rise": 0.03,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
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
    "name": "数据中心(AIDC)",
    "rise": -1.32,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  }
];
const THS_EVENTS = [
  {
    "title": "国家药监局：将符合条件的细胞与基因治疗药品纳入创新药临床试验审评审批30日通道",
    "desc": "",
    "heat": 317864,
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
    "heat": 112921,
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
    "heat": 44885,
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
    "heat": 30000,
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
    "heat": 11145,
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
    "stock_cnt": 5832,
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
    "stock_cnt": 5832,
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
    "hot_rank": 18,
    "hot_rank_chg": 0,
    "stock_cnt": 5832,
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
    "hot_rank": 20,
    "hot_rank_chg": 13,
    "stock_cnt": 5832,
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
    "stock_cnt": 5832,
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
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 50,
    "hot_rank_chg": 29,
    "stock_cnt": 5832,
    "price": "5.65",
    "change": "9.92",
    "market_id": "33",
    "circulate_market_value": "5836087300.00",
    "change_type": "1",
    "change_section": "14",
    "change_days": "8",
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.96
      },
      {
        "name": "锂电池",
        "change_pct": -2.39
      },
      {
        "name": "强势人气股",
        "change_pct": -2.49
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -4.75
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.58
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.91
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -1.37
      }
    ]
  },
  {
    "code": "000601",
    "name": "韶能股份",
    "hot_rank": 60,
    "hot_rank_chg": 231,
    "stock_cnt": 5832,
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
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 61,
    "hot_rank_chg": 111,
    "stock_cnt": 5832,
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
    "code": "000656",
    "name": "金科股份",
    "hot_rank": 71,
    "hot_rank_chg": 33,
    "stock_cnt": 5832,
    "price": "1.43",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "10849909100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "摘帽",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.58
      },
      {
        "name": "房地产",
        "change_pct": 0.33
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.15
      },
      {
        "name": "复牌股",
        "change_pct": 2.07
      },
      {
        "name": "物业管理",
        "change_pct": -0.81
      },
      {
        "name": "低价股",
        "change_pct": -0.21
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 87,
    "hot_rank_chg": 194,
    "stock_cnt": 5832,
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
  },
  {
    "code": "000876",
    "name": "新希望",
    "hot_rank": 100,
    "hot_rank_chg": 580,
    "stock_cnt": 5832,
    "price": "7.29",
    "change": "7.52",
    "market_id": "33",
    "circulate_market_value": "32805048000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 1.26
      },
      {
        "name": "养猪",
        "change_pct": 3.22
      },
      {
        "name": "大农业",
        "change_pct": 0.92
      },
      {
        "name": "水产养殖",
        "change_pct": -0.48
      },
      {
        "name": "大消费",
        "change_pct": 1.12
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5832, "price": "7.76", "change": "-7.40", "market_id": "33", "circulate_market_value": "274448960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.61}, {"name": "折叠屏", "change_pct": -3.32}, {"name": "手机产业链", "change_pct": -2.91}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "苹果产业链", "change_pct": -2.86}, {"name": "半导体", "change_pct": -1.03}, {"name": "人工智能", "change_pct": -1.78}, {"name": "互联网医疗", "change_pct": -0.9}, {"name": "VR&AR", "change_pct": -3.15}, {"name": "OLED", "change_pct": -2.77}, {"name": "京津冀", "change_pct": -0.85}, {"name": "物联网", "change_pct": -1.96}, {"name": "指纹识别", "change_pct": -2.97}, {"name": "汽车零部件", "change_pct": -1.96}, {"name": "白马股", "change_pct": 0.75}, {"name": "智能制造", "change_pct": -2.43}, {"name": "小米概念股", "change_pct": -2.1}, {"name": "国产芯片", "change_pct": -1.1}, {"name": "液晶面板/LCD", "change_pct": -3.39}, {"name": "全息概念", "change_pct": -2.23}, {"name": "理想汽车概念股", "change_pct": -1.75}, {"name": "MicroLED", "change_pct": -3.42}, {"name": "钙钛矿电池", "change_pct": -4.04}, {"name": "智能手表", "change_pct": -2.96}, {"name": "MiniLED", "change_pct": -3.3}, {"name": "传感器", "change_pct": -2.46}, {"name": "大硅片", "change_pct": -2.41}, {"name": "AI PC", "change_pct": -3.11}, {"name": "华为产业链", "change_pct": -2.06}, {"name": "回购", "change_pct": -0.39}, {"name": "智能眼镜/MR头显", "change_pct": -2.75}, {"name": "玻璃基板封装", "change_pct": -4.3}]}, {"code": "600667", "name": "太极实业", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5832, "price": "27.41", "change": "-8.51", "market_id": "17", "circulate_market_value": "57329171000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 3, "hot_rank_chg": 12, "stock_cnt": 5832, "price": "18.37", "change": "-16.58", "market_id": "33", "circulate_market_value": "19516358000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 4, "hot_rank_chg": 50, "stock_cnt": 5832, "price": "33.31", "change": "10.01", "market_id": "33", "circulate_market_value": "95269021000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国产算力"}, {"code": "600584", "name": "长电科技", "hot_rank": 5, "hot_rank_chg": 5, "stock_cnt": 5832, "price": "95.09", "change": "4.63", "market_id": "17", "circulate_market_value": "170155430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 6, "hot_rank_chg": 2, "stock_cnt": 5832, "price": "45.86", "change": "-7.05", "market_id": "33", "circulate_market_value": "49472270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 7, "hot_rank_chg": 6, "stock_cnt": 5832, "price": "44.10", "change": "-10.00", "market_id": "17", "circulate_market_value": "30489665000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 8, "hot_rank_chg": 1, "stock_cnt": 5832, "price": "8.43", "change": "-10.03", "market_id": "33", "circulate_market_value": "13704599000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.33}, {"name": "电竞", "change_pct": -1.24}, {"name": "手游", "change_pct": -0.03}, {"name": "强势人气股", "change_pct": -2.49}, {"name": "人工智能", "change_pct": -1.78}, {"name": "游戏", "change_pct": -0.55}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.9}, {"name": "腾讯概念股", "change_pct": -1.38}, {"name": "快手概念股", "change_pct": -2.88}, {"name": "元宇宙", "change_pct": -2.4}, {"name": "虚拟数字人", "change_pct": -2.6}, {"name": "东数西算/算力", "change_pct": -1.62}, {"name": "web3.0", "change_pct": -3.55}, {"name": "AIGC概念", "change_pct": -2.02}, {"name": "数据要素", "change_pct": -2.3}, {"name": "字节跳动概念股", "change_pct": -2.16}, {"name": "AI营销", "change_pct": -1.87}, {"name": "ChatGPT", "change_pct": -3.12}, {"name": "智能眼镜/MR头显", "change_pct": -2.75}, {"name": "人工智能大模型", "change_pct": -1.44}, {"name": "人形机器人", "change_pct": -3.59}, {"name": "短剧/互动影游", "change_pct": -2.0}, {"name": "多模态", "change_pct": -2.4}, {"name": "Sora/AI视频", "change_pct": -3.05}, {"name": "IP经济/谷子经济", "change_pct": -0.88}, {"name": "小红书概念股", "change_pct": -2.96}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 9, "hot_rank_chg": -5, "stock_cnt": 5832, "price": "46.03", "change": "2.81", "market_id": "33", "circulate_market_value": "36014085000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 10, "hot_rank_chg": -4, "stock_cnt": 5832, "price": "681.80", "change": "10.32", "market_id": "33", "circulate_market_value": "192166620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 11, "hot_rank_chg": 26, "stock_cnt": 5832, "price": "18.55", "change": "10.02", "market_id": "17", "circulate_market_value": "23674544000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "金刚石散热"}, {"code": "000066", "name": "中国长城", "hot_rank": 12, "hot_rank_chg": 203, "stock_cnt": 5832, "price": "18.82", "change": "9.99", "market_id": "33", "circulate_market_value": "60705601000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "国产算力"}, {"code": "603986", "name": "兆易创新", "hot_rank": 13, "hot_rank_chg": 9, "stock_cnt": 5832, "price": "654.29", "change": "-3.46", "market_id": "17", "circulate_market_value": "437387590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 14, "hot_rank_chg": -2, "stock_cnt": 5832, "price": "84.60", "change": "-5.39", "market_id": "17", "circulate_market_value": "206862320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 15, "hot_rank_chg": -4, "stock_cnt": 5832, "price": "53.30", "change": "-4.67", "market_id": "33", "circulate_market_value": "83902492000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 16, "hot_rank_chg": 3, "stock_cnt": 5832, "price": "63.81", "change": "-10.00", "market_id": "17", "circulate_market_value": "253426970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 17, "hot_rank_chg": 22, "stock_cnt": 5832, "price": "13.52", "change": "-9.99", "market_id": "17", "circulate_market_value": "48505295000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 18, "hot_rank_chg": 0, "stock_cnt": 5832, "price": "7.39", "change": "-3.65", "market_id": "17", "circulate_market_value": "91607098000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.81}, {"name": "核电", "change_pct": -2.04}, {"name": "强势人气股", "change_pct": -2.49}, {"name": "电力体制改革", "change_pct": -0.97}, {"name": "水电", "change_pct": -0.28}, {"name": "火电", "change_pct": -0.81}, {"name": "光伏", "change_pct": -2.4}, {"name": "风电", "change_pct": -2.37}, {"name": "国企改革", "change_pct": -0.73}, {"name": "算电协同", "change_pct": -1.04}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 19, "hot_rank_chg": -17, "stock_cnt": 5832, "price": "50.05", "change": "-8.22", "market_id": "17", "circulate_market_value": "73172840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 20, "hot_rank_chg": 13, "stock_cnt": 5832, "price": "6.43", "change": "4.72", "market_id": "33", "circulate_market_value": "8338010100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.7}, {"name": "创新药", "change_pct": 1.51}, {"name": "央企改革", "change_pct": -0.81}, {"name": "医疗器械", "change_pct": -0.39}, {"name": "强势人气股", "change_pct": -2.49}, {"name": "互联网医疗", "change_pct": -0.9}, {"name": "保健品", "change_pct": 0.53}, {"name": "民营医院", "change_pct": 0.67}, {"name": "CAR-T疗法", "change_pct": 2.15}, {"name": "医药", "change_pct": 0.85}, {"name": "化学原料药", "change_pct": 0.73}, {"name": "海南概念", "change_pct": -0.64}, {"name": "脑科学", "change_pct": -0.07}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.15}, {"name": "海南自由贸易港", "change_pct": 0.34}, {"name": "食品", "change_pct": 0.66}, {"name": "国企改革", "change_pct": -0.73}, {"name": "医疗信息化", "change_pct": -1.77}, {"name": "新冠病毒防治", "change_pct": -0.8}, {"name": "自贸区", "change_pct": -0.18}, {"name": "合成生物", "change_pct": 0.32}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 21, "hot_rank_chg": 7, "stock_cnt": 5832, "price": "1098.92", "change": "-1.53", "market_id": "33", "circulate_market_value": "1219735020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 22, "hot_rank_chg": -1, "stock_cnt": 5832, "price": "48.03", "change": "-4.36", "market_id": "17", "circulate_market_value": "163923970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 23, "hot_rank_chg": 12, "stock_cnt": 5832, "price": "935.00", "change": "6.02", "market_id": "33", "circulate_market_value": "154338590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 24, "hot_rank_chg": 32, "stock_cnt": 5832, "price": "49.00", "change": "-9.33", "market_id": "33", "circulate_market_value": "73941540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 25, "hot_rank_chg": 2, "stock_cnt": 5832, "price": "58.50", "change": "-7.48", "market_id": "33", "circulate_market_value": "67685267000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 26, "hot_rank_chg": -19, "stock_cnt": 5832, "price": "46.15", "change": "-5.80", "market_id": "33", "circulate_market_value": "170025720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 27, "hot_rank_chg": 5, "stock_cnt": 5832, "price": "19.94", "change": "2.20", "market_id": "33", "circulate_market_value": "66253676000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 29, "hot_rank_chg": 15, "stock_cnt": 5832, "price": "172.90", "change": "3.77", "market_id": "17", "circulate_market_value": "44613560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 30, "hot_rank_chg": -10, "stock_cnt": 5832, "price": "5.19", "change": "-8.14", "market_id": "33", "circulate_market_value": "99295258000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.32}, {"name": "手机产业链", "change_pct": -2.91}, {"name": "超高清视频", "change_pct": -1.85}, {"name": "半导体", "change_pct": -1.03}, {"name": "OLED", "change_pct": -2.77}, {"name": "光伏", "change_pct": -2.4}, {"name": "黑色家电", "change_pct": -2.3}, {"name": "家电", "change_pct": -1.21}, {"name": "智能制造", "change_pct": -2.43}, {"name": "工业互联网", "change_pct": -2.23}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.1}, {"name": "国产芯片", "change_pct": -1.1}, {"name": "腾讯概念股", "change_pct": -1.38}, {"name": "液晶面板/LCD", "change_pct": -3.39}, {"name": "MicroLED", "change_pct": -3.42}, {"name": "MiniLED", "change_pct": -3.3}, {"name": "华为产业链", "change_pct": -2.06}, {"name": "玻璃基板封装", "change_pct": -4.3}]}, {"code": "002457", "name": "青龙管业", "hot_rank": 31, "hot_rank_chg": 642, "stock_cnt": 5832, "price": "14.07", "change": "10.01", "market_id": "33", "circulate_market_value": "4689113800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "地下管网"}, {"code": "002396", "name": "星网锐捷", "hot_rank": 32, "hot_rank_chg": 18, "stock_cnt": 5832, "price": "25.74", "change": "10.00", "market_id": "33", "circulate_market_value": "19495865000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "半年报预增"}, {"code": "002497", "name": "雅化集团", "hot_rank": 33, "hot_rank_chg": 905, "stock_cnt": 5832, "price": "22.41", "change": "2.47", "market_id": "33", "circulate_market_value": "23745358000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 34, "hot_rank_chg": -9, "stock_cnt": 5832, "price": "16.23", "change": "-9.93", "market_id": "33", "circulate_market_value": "116851209000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 35, "hot_rank_chg": 14, "stock_cnt": 5832, "price": "38.12", "change": "-9.54", "market_id": "33", "circulate_market_value": "16413204000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 36, "hot_rank_chg": -7, "stock_cnt": 5832, "price": "224.46", "change": "-3.55", "market_id": "33", "circulate_market_value": "311173770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 37, "hot_rank_chg": 167, "stock_cnt": 5832, "price": "65.86", "change": "9.99", "market_id": "17", "circulate_market_value": "27421977000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 38, "hot_rank_chg": 30, "stock_cnt": 5832, "price": "79.60", "change": "5.65", "market_id": "33", "circulate_market_value": "16019781000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 39, "hot_rank_chg": 24, "stock_cnt": 5832, "price": "57.70", "change": "2.56", "market_id": "17", "circulate_market_value": "22251269000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 40, "hot_rank_chg": -9, "stock_cnt": 5832, "price": "50.89", "change": "-6.28", "market_id": "17", "circulate_market_value": "43081099000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 42, "hot_rank_chg": 180, "stock_cnt": 5832, "price": "16.51", "change": "4.69", "market_id": "33", "circulate_market_value": "25190650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 43, "hot_rank_chg": -19, "stock_cnt": 5832, "price": "14.39", "change": "-8.63", "market_id": "17", "circulate_market_value": "24969254000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 44, "hot_rank_chg": 11, "stock_cnt": 5832, "price": "68.41", "change": "-10.00", "market_id": "17", "circulate_market_value": "73374196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002979", "name": "雷赛智能", "hot_rank": 45, "hot_rank_chg": -22, "stock_cnt": 5832, "price": "73.27", "change": "5.35", "market_id": "33", "circulate_market_value": "16320399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 46, "hot_rank_chg": 68, "stock_cnt": 5832, "price": "80.46", "change": "-10.00", "market_id": "33", "circulate_market_value": "116902373000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 47, "hot_rank_chg": -6, "stock_cnt": 5832, "price": "59.49", "change": "-8.01", "market_id": "17", "circulate_market_value": "45938141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 48, "hot_rank_chg": 129, "stock_cnt": 5832, "price": "38.68", "change": "4.82", "market_id": "33", "circulate_market_value": "126889711000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002245", "name": "蔚蓝锂芯", "hot_rank": 49, "hot_rank_chg": 148, "stock_cnt": 5832, "price": "22.37", "change": "9.98", "market_id": "33", "circulate_market_value": "35939637000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "BBU电源"}, {"code": "002141", "name": "贤丰控股", "hot_rank": 50, "hot_rank_chg": 29, "stock_cnt": 5832, "price": "5.65", "change": "9.92", "market_id": "33", "circulate_market_value": "5836087300.00", "change_type": "1", "change_section": "14", "change_days": "8", "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.96}, {"name": "锂电池", "change_pct": -2.39}, {"name": "强势人气股", "change_pct": -2.49}, {"name": "铜箔/覆铜板", "change_pct": -4.75}, {"name": "粤港澳大湾区", "change_pct": -0.58}, {"name": "新能源汽车", "change_pct": -1.91}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -1.37}]}, {"code": "603667", "name": "五洲新春", "hot_rank": 51, "hot_rank_chg": 24, "stock_cnt": 5832, "price": "68.54", "change": "-9.99", "market_id": "17", "circulate_market_value": "25099538000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002025", "name": "航天电器", "hot_rank": 52, "hot_rank_chg": 213, "stock_cnt": 5832, "price": "92.07", "change": "10.00", "market_id": "33", "circulate_market_value": "41787930000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高速光模块发布"}, {"code": "000301", "name": "东方盛虹", "hot_rank": 53, "hot_rank_chg": -39, "stock_cnt": 5832, "price": "13.81", "change": "10.04", "market_id": "33", "circulate_market_value": "91261630000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "603538", "name": "美诺华", "hot_rank": 54, "hot_rank_chg": 69, "stock_cnt": 5832, "price": "41.58", "change": "7.14", "market_id": "17", "circulate_market_value": "10006522600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 55, "hot_rank_chg": 128, "stock_cnt": 5832, "price": "69.71", "change": "5.06", "market_id": "33", "circulate_market_value": "102252845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 56, "hot_rank_chg": 47, "stock_cnt": 5832, "price": "56.77", "change": "4.26", "market_id": "17", "circulate_market_value": "362135960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 57, "hot_rank_chg": 54, "stock_cnt": 5832, "price": "96.79", "change": "-9.50", "market_id": "33", "circulate_market_value": "70106489000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 58, "hot_rank_chg": -32, "stock_cnt": 5832, "price": "23.91", "change": "-2.77", "market_id": "33", "circulate_market_value": "80421406000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 59, "hot_rank_chg": 50, "stock_cnt": 5832, "price": "506.89", "change": "-3.63", "market_id": "33", "circulate_market_value": "635763310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000601", "name": "韶能股份", "hot_rank": 60, "hot_rank_chg": 231, "stock_cnt": 5832, "price": "7.19", "change": "8.94", "market_id": "33", "circulate_market_value": "7546757200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.32}, {"name": "水电", "change_pct": -0.28}, {"name": "重卡", "change_pct": 0.26}, {"name": "充电桩", "change_pct": -1.34}, {"name": "新能源汽车", "change_pct": -1.91}, {"name": "新能源车零部件", "change_pct": -1.84}, {"name": "减速器", "change_pct": -4.76}, {"name": "算电协同", "change_pct": -1.04}]}, {"code": "002361", "name": "神剑股份", "hot_rank": 61, "hot_rank_chg": 111, "stock_cnt": 5832, "price": "12.79", "change": "-9.99", "market_id": "33", "circulate_market_value": "10347352900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -2.01}, {"name": "大飞机", "change_pct": -2.67}, {"name": "北斗导航", "change_pct": -2.68}, {"name": "高铁轨交", "change_pct": -1.38}, {"name": "军民融合", "change_pct": -2.45}, {"name": "磁悬浮", "change_pct": -2.01}, {"name": "军工", "change_pct": -2.34}, {"name": "碳纤维", "change_pct": -3.31}, {"name": "无人机", "change_pct": -3.11}, {"name": "航天", "change_pct": -3.23}, {"name": "卫星互联网", "change_pct": -3.45}, {"name": "低空经济", "change_pct": -2.53}, {"name": "海洋经济", "change_pct": -1.66}]}, {"code": "601138", "name": "工业富联", "hot_rank": 62, "hot_rank_chg": -3, "stock_cnt": 5832, "price": "63.59", "change": "-1.75", "market_id": "17", "circulate_market_value": "1261885830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 63, "hot_rank_chg": 50, "stock_cnt": 5832, "price": "47.68", "change": "-10.00", "market_id": "17", "circulate_market_value": "15351681000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 64, "hot_rank_chg": -17, "stock_cnt": 5832, "price": "35.14", "change": "-9.99", "market_id": "33", "circulate_market_value": "13187479800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 65, "hot_rank_chg": 29, "stock_cnt": 5832, "price": "441.94", "change": "-6.98", "market_id": "17", "circulate_market_value": "179577150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 66, "hot_rank_chg": 41, "stock_cnt": 5832, "price": "18.94", "change": "9.99", "market_id": "17", "circulate_market_value": "3464757300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "拟收购存储公司"}, {"code": "002156", "name": "通富微电", "hot_rank": 67, "hot_rank_chg": 3, "stock_cnt": 5832, "price": "66.18", "change": "2.13", "market_id": "33", "circulate_market_value": "100424988000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 68, "hot_rank_chg": -52, "stock_cnt": 5832, "price": "37.91", "change": "1.50", "market_id": "17", "circulate_market_value": "59049848000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 69, "hot_rank_chg": 31, "stock_cnt": 5832, "price": "22.02", "change": "12.92", "market_id": "33", "circulate_market_value": "26419392000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 70, "hot_rank_chg": 95, "stock_cnt": 5832, "price": "454.70", "change": "6.26", "market_id": "17", "circulate_market_value": "214421360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000656", "name": "金科股份", "hot_rank": 71, "hot_rank_chg": 33, "stock_cnt": 5832, "price": "1.43", "change": "10.00", "market_id": "33", "circulate_market_value": "10849909100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "摘帽", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.58}, {"name": "房地产", "change_pct": 0.33}, {"name": "ST摘帽", "change_pct": -1.15}, {"name": "复牌股", "change_pct": 2.07}, {"name": "物业管理", "change_pct": -0.81}, {"name": "低价股", "change_pct": -0.21}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 72, "hot_rank_chg": 89, "stock_cnt": 5832, "price": "237.00", "change": "-5.24", "market_id": "33", "circulate_market_value": "257947970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 73, "hot_rank_chg": 22, "stock_cnt": 5832, "price": "128.83", "change": "-4.82", "market_id": "33", "circulate_market_value": "247715670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 74, "hot_rank_chg": 652, "stock_cnt": 5832, "price": "13.42", "change": "10.00", "market_id": "17", "circulate_market_value": "10565249400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "交换机"}, {"code": "001287", "name": "中电港", "hot_rank": 75, "hot_rank_chg": 26, "stock_cnt": 5832, "price": "31.47", "change": "10.00", "market_id": "33", "circulate_market_value": "23914056000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "603928", "name": "兴业股份", "hot_rank": 76, "hot_rank_chg": 143, "stock_cnt": 5832, "price": "15.85", "change": "7.82", "market_id": "17", "circulate_market_value": "5400158400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 77, "hot_rank_chg": 47, "stock_cnt": 5832, "price": "94.56", "change": "2.03", "market_id": "17", "circulate_market_value": "138346420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 78, "hot_rank_chg": 48, "stock_cnt": 5832, "price": "209.03", "change": "-3.82", "market_id": "33", "circulate_market_value": "163147570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 79, "hot_rank_chg": 51, "stock_cnt": 5832, "price": "21.18", "change": "0.57", "market_id": "33", "circulate_market_value": "282822800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 80, "hot_rank_chg": -9, "stock_cnt": 5832, "price": "14.99", "change": "-0.86", "market_id": "17", "circulate_market_value": "62512696000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 81, "hot_rank_chg": -19, "stock_cnt": 5832, "price": "28.28", "change": "1.65", "market_id": "17", "circulate_market_value": "582618710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 82, "hot_rank_chg": -4, "stock_cnt": 5832, "price": "17.35", "change": "-4.83", "market_id": "17", "circulate_market_value": "86559475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603211", "name": "晋拓股份", "hot_rank": 83, "hot_rank_chg": 53, "stock_cnt": 5832, "price": "39.53", "change": "9.99", "market_id": "17", "circulate_market_value": "10744570200.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "与宇树科技合资"}, {"code": "301526", "name": "国际复材", "hot_rank": 84, "hot_rank_chg": 32, "stock_cnt": 5832, "price": "40.66", "change": "-13.47", "market_id": "33", "circulate_market_value": "57102616000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600793", "name": "宜宾纸业", "hot_rank": 85, "hot_rank_chg": 99, "stock_cnt": 5832, "price": "17.61", "change": "9.99", "market_id": "17", "circulate_market_value": "3115279500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "子公司购买资产"}, {"code": "600183", "name": "生益科技", "hot_rank": 86, "hot_rank_chg": -28, "stock_cnt": 5832, "price": "154.27", "change": "-4.05", "market_id": "17", "circulate_market_value": "369399750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 87, "hot_rank_chg": 194, "stock_cnt": 5832, "price": "9.35", "change": "-4.49", "market_id": "33", "circulate_market_value": "19466717000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -1.11}, {"name": "足球", "change_pct": -0.85}, {"name": "阿里巴巴概念股", "change_pct": -1.58}, {"name": "拼多多概念股", "change_pct": -1.55}, {"name": "网红/MCN", "change_pct": -1.36}, {"name": "大消费", "change_pct": 1.12}, {"name": "盲盒", "change_pct": -1.28}, {"name": "短剧/互动影游", "change_pct": -2.0}, {"name": "IP经济/谷子经济", "change_pct": -0.88}, {"name": "首发经济", "change_pct": -0.22}, {"name": "小红书概念股", "change_pct": -2.96}, {"name": "服务消费", "change_pct": -0.21}]}, {"code": "600160", "name": "巨化股份", "hot_rank": 88, "hot_rank_chg": -24, "stock_cnt": 5832, "price": "49.05", "change": "-0.61", "market_id": "17", "circulate_market_value": "132422545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300684", "name": "中石科技", "hot_rank": 89, "hot_rank_chg": 684, "stock_cnt": 5832, "price": "74.41", "change": "20.00", "market_id": "33", "circulate_market_value": "15202189000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷服务器"}, {"code": "000070", "name": "特发信息", "hot_rank": 90, "hot_rank_chg": 296, "stock_cnt": 5832, "price": "18.79", "change": "4.45", "market_id": "33", "circulate_market_value": "16097901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 91, "hot_rank_chg": -24, "stock_cnt": 5832, "price": "122.97", "change": "-0.93", "market_id": "17", "circulate_market_value": "304139270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 92, "hot_rank_chg": -7, "stock_cnt": 5832, "price": "149.70", "change": "-2.76", "market_id": "33", "circulate_market_value": "150446350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 93, "hot_rank_chg": 128, "stock_cnt": 5832, "price": "30.10", "change": "3.15", "market_id": "33", "circulate_market_value": "34497775000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002653", "name": "海思科", "hot_rank": 94, "hot_rank_chg": 62, "stock_cnt": 5832, "price": "69.85", "change": "-8.66", "market_id": "33", "circulate_market_value": "37494511000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 95, "hot_rank_chg": -44, "stock_cnt": 5832, "price": "186.45", "change": "-6.54", "market_id": "33", "circulate_market_value": "59388566000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002294", "name": "信立泰", "hot_rank": 96, "hot_rank_chg": -54, "stock_cnt": 5832, "price": "39.83", "change": "-0.62", "market_id": "33", "circulate_market_value": "44393153000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 97, "hot_rank_chg": 11, "stock_cnt": 5832, "price": "105.31", "change": "0.23", "market_id": "33", "circulate_market_value": "68771182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 98, "hot_rank_chg": 102, "stock_cnt": 5832, "price": "20.85", "change": "4.25", "market_id": "17", "circulate_market_value": "10681260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 99, "hot_rank_chg": 16, "stock_cnt": 5832, "price": "17.70", "change": "-8.72", "market_id": "33", "circulate_market_value": "28127443000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000876", "name": "新希望", "hot_rank": 100, "hot_rank_chg": 580, "stock_cnt": 5832, "price": "7.29", "change": "7.52", "market_id": "33", "circulate_market_value": "32805048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 1.26}, {"name": "养猪", "change_pct": 3.22}, {"name": "大农业", "change_pct": 0.92}, {"name": "水产养殖", "change_pct": -0.48}, {"name": "大消费", "change_pct": 1.12}]}];
const LIMIT_UP_POOL = [{"code": "000938", "name": "紫光股份", "price": 33.31, "change_pct": 10.01, "reason": "新紫光集团联席总裁接任董事长；公司旗下新华三为服务器、智算行业龙头之一", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 11.04, "first_limit_up": 1783316784, "break_limit_up_times": 0}, {"code": "002726", "name": "ST龙大", "price": 1.47, "change_pct": 9.7, "reason": "龙大转债即将到期，公司坦言“钱不够还”", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 0.49, "first_limit_up": 1783301100, "break_limit_up_times": 0}, {"code": "603020", "name": "爱普股份", "price": 14.69, "change_pct": 10.04, "reason": "国内香料香精行业龙头，拥有一种天然风味素肉固体调味料的专利", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.6, "first_limit_up": 1783302136, "break_limit_up_times": 0}, {"code": "301191", "name": "菲菱科思", "price": 135.01, "change_pct": 20.0, "reason": "公司拥有CPO交换机，是华为的合作伙伴，此外为思科核心供应商，间接为OPENAI，微软提供网络交换机", "plates": ["交换机"], "limit_up_days": 1, "turnover_ratio": 18.9, "first_limit_up": 1783316355, "break_limit_up_times": 0}, {"code": "601368", "name": "绿城水务", "price": 4.75, "change_pct": 9.95, "reason": "南宁区域最大的供排水一体化经营企业", "plates": ["水利"], "limit_up_days": 1, "turnover_ratio": 2.41, "first_limit_up": 1783318796, "break_limit_up_times": 0}, {"code": "603067", "name": "振华股份", "price": 48.73, "change_pct": 10.0, "reason": "公司为全球产能最大、产品线最全的铬化学品龙头，金属铬产品在高温合金、铜基、铝基特种合金、高端焊接材料、溅射靶材等领域广泛应用，高温合金是燃气轮机的主要材料，单质铬的添加量在15%~20%之间", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 1.36, "first_limit_up": 1783301608, "break_limit_up_times": 0}, {"code": "603789", "name": "ST星农", "price": 6.99, "change_pct": 10.08, "reason": "公司控股股东拟变更为玖元亨通", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 0.98, "first_limit_up": 1783301101, "break_limit_up_times": 0}, {"code": "002910", "name": "庄园牧场", "price": 12.22, "change_pct": 9.99, "reason": "甘肃、青海区域乳制品龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 15.36, "first_limit_up": 1783314036, "break_limit_up_times": 0}, {"code": "002815", "name": "崇达技术", "price": 16.36, "change_pct": 10.02, "reason": "公司是全球领先的小批量PCB企业，供给工业控制领域客户的PCB产品有应用于智能家居、人形机器人、工业机器人等方面", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 10.01, "first_limit_up": 1783302210, "break_limit_up_times": 3}, {"code": "000078", "name": "ST海王", "price": 1.64, "change_pct": 10.07, "reason": "全国性医药商业企业中业务网络覆盖面较广的企业之一，医药商业规模全国第八", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 5.52, "first_limit_up": 1783316133, "break_limit_up_times": 0}, {"code": "600759", "name": "ST洲际", "price": 2.33, "change_pct": 9.91, "reason": "海南本地股，主营石油的勘探、开发和销售，油气行业的技术服务和物业租赁业务", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 7.75, "first_limit_up": 1783319602, "break_limit_up_times": 0}, {"code": "603815", "name": "交建股份", "price": 6.11, "change_pct": 10.09, "reason": "安徽省资质齐全、资质等级较高的公路、市政基础设施施工企业之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.04, "first_limit_up": 1783315118, "break_limit_up_times": 0}, {"code": "301317", "name": "鑫磊股份", "price": 62.21, "change_pct": 20.0, "reason": "公司磁悬浮离心热泵已具备为数据中心提供高效供冷、供热及余热回收一体化解决方案的能力", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 12.11, "first_limit_up": 1783314375, "break_limit_up_times": 0}, {"code": "002457", "name": "青龙管业", "price": 14.07, "change_pct": 10.01, "reason": "全国输节水领域最具竞争力的企业之一", "plates": ["水利"], "limit_up_days": 1, "turnover_ratio": 16.08, "first_limit_up": 1783318962, "break_limit_up_times": 1}, {"code": "605060", "name": "XD联德股", "price": 57.52, "change_pct": 10.0, "reason": "公司燃气轮机零部件产品已向数据中心客户小批量供货", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 3.47, "first_limit_up": 1783301854, "break_limit_up_times": 1}, {"code": "600172", "name": "黄河旋风", "price": 18.55, "change_pct": 10.02, "reason": "公司自主研发的“金刚石—碳化硅复合材料”项目取得重大阶段性成果，核心性能指标达到国际先进水平，成功破解了长期困扰半导体产业的热膨胀失配难题，为我国高端半导体散热技术自主可控提供了关键支撑", "plates": ["培育钻石"], "limit_up_days": 1, "turnover_ratio": 22.58, "first_limit_up": 1783302382, "break_limit_up_times": 3}, {"code": "603221", "name": "爱丽家居", "price": 11.78, "change_pct": 9.99, "reason": "子公司美国地板工厂是一家海外弹性地板数字化工厂，实现了从设备生产到工厂物流的全自动车间，并成功落地实现量产", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.19, "first_limit_up": 1783306788, "break_limit_up_times": 1}, {"code": "603090", "name": "宏盛股份", "price": 54.8, "change_pct": 10.0, "reason": "公司开发的冷却分配单元CDU及列间空调已批量应用于数据中心液冷系统", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 6.94, "first_limit_up": 1783302731, "break_limit_up_times": 10}, {"code": "603903", "name": "中持股份", "price": 15.57, "change_pct": 10.04, "reason": "公司控股股东变更为芯长征，其核心业务包括硅基芯片及模组系列、第三代半导体芯片及模组系列（SiC、GaN）及功率器件检测装备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.83, "first_limit_up": 1783302008, "break_limit_up_times": 6}, {"code": "601101", "name": "昊华能源", "price": 12.54, "change_pct": 10.0, "reason": "京能集团煤炭业务的上市平台，一季报净利润同比上涨15.64%", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 2.91, "first_limit_up": 1783320592, "break_limit_up_times": 0}, {"code": "688039", "name": "当虹科技", "price": 43.56, "change_pct": 20.0, "reason": "1）公司BlackEye多模态视听大模型正式融合DeepSeek-R1和DeepSeek Janus Pro，并完成视听传媒、工业与卫星、车载智能座舱等多行业垂类场景的数据调优训练；\n2）公司曾与神舞科技联合发布脑机接口远程控制系统，将脑机技术与机器人超远距离操控深度融合，适配人形机器人等装备", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 7.34, "first_limit_up": 1783308478, "break_limit_up_times": 0}, {"code": "600180", "name": "*ST瑞茂", "price": 1.54, "change_pct": 10.0, "reason": "大宗能源商品供应链综合服务商，煤炭供应链业务是公司核心业务板块。", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.77, "first_limit_up": 1783317489, "break_limit_up_times": 1}, {"code": "300684", "name": "中石科技", "price": 74.41, "change_pct": 20.0, "reason": "1、公司宜兴子公司主营产品包括液冷模组等，建立相关技术储备和产品线，为国内外多家服务器企业提供液冷等全方位的管理综合解决方案；\n2、公司VC产品在高速光模块中的市场化应用加速落地", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 22.79, "first_limit_up": 1783302612, "break_limit_up_times": 12}, {"code": "002141", "name": "贤丰控股", "price": 5.65, "change_pct": 9.92, "reason": "公司覆铜板上年度年产量近700万张，产品直接用于PCB生产", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 17.37, "first_limit_up": 1783301523, "break_limit_up_times": 9}, {"code": "000545", "name": "金浦钛业", "price": 2.71, "change_pct": 10.16, "reason": "国内较大的硫酸法钛白粉生产企业之一；公司利用硫酸法钛白粉副产的硫酸亚铁，在安徽（淮北）新型煤化工合成材料基地积极推进电池级磷酸铁等新能源电池材料一体化项目建设", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.86, "first_limit_up": 1783301919, "break_limit_up_times": 0}, {"code": "688206", "name": "概伦电子", "price": 48.76, "change_pct": 20.01, "reason": "公司是国内首家以 EDA 为主营业务的上市公司，为芯片设计提供全流程解决方案，且通过收购锐成芯微等企业，构建 “EDA+IP” 融合生态", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.58, "first_limit_up": 1783302189, "break_limit_up_times": 1}, {"code": "002774", "name": "快意电梯", "price": 15.83, "change_pct": 10.01, "reason": "公司拥有乘客电梯、载货电梯、自动扶梯等全系列产品，产品行销全球60多个国家和地区", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 1.87, "first_limit_up": 1783301982, "break_limit_up_times": 0}, {"code": "688496", "name": "*ST清越", "price": 1.03, "change_pct": 19.77, "reason": "公司的硅基OLED产品可以用于MR头戴显示产品中", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 8.06, "first_limit_up": 1783302499, "break_limit_up_times": 8}, {"code": "000892", "name": "欢瑞世纪", "price": 3.76, "change_pct": 9.94, "reason": "1、公司与阶跃星辰共建“麟跃”AI联合实验室，已上线基于IP《十州三境》的首支AI短剧先导概念片，并持续推进AIGC在短剧、互动剧、漫剧等场景落地；\n2、公司通过与明略科技、阶跃星辰合作，用 AI 算法优化短剧投流渠道 / 素材 / 出价、社媒智能运营与 AIGC 营销素材生成，聚焦影视内容精准推广与降本增效", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 7.23, "first_limit_up": 1783301712, "break_limit_up_times": 0}, {"code": "603477", "name": "巨星农牧", "price": 16.73, "change_pct": 9.99, "reason": "生猪养殖为主的大型畜禽养殖企业，其他养殖业务产品包括黄羽鸡", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 6.91, "first_limit_up": 1783315291, "break_limit_up_times": 1}, {"code": "603137", "name": "恒尚节能", "price": 18.94, "change_pct": 9.99, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 4, "turnover_ratio": 0.4, "first_limit_up": 1783301100, "break_limit_up_times": 0}, {"code": "002989", "name": "中天精装", "price": 33.52, "change_pct": 10.01, "reason": "公司布局半导体行业的高端载板、存储封测及智能存储芯片领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.64, "first_limit_up": 1783301850, "break_limit_up_times": 0}, {"code": "603268", "name": "松发股份", "price": 163.35, "change_pct": 10.0, "reason": "公司主要从事船舶及高端装备的研产销", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.03, "first_limit_up": 1783302275, "break_limit_up_times": 18}, {"code": "603211", "name": "晋拓股份", "price": 39.53, "change_pct": 9.99, "reason": "公司机器人业务主要为国际知名品牌柔性机器人提供零部件；公司与施耐德、UR机器人等合作，向其供应伺服马达、感应器、机器关节所需要的零部件", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 5.08, "first_limit_up": 1783301525, "break_limit_up_times": 4}, {"code": "000301", "name": "东方盛虹", "price": 13.81, "change_pct": 10.04, "reason": "全球最大的光伏EVA胶膜原料供应商，上半年净利预增最高近12倍", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.78, "first_limit_up": 1783318293, "break_limit_up_times": 4}, {"code": "603931", "name": "格林达", "price": 59.74, "change_pct": 10.0, "reason": "1、国内湿电子化学品主要生产厂商之一；公司产品主要有显影液、蚀刻液、稀释液、清洗液等，核心产品TMAH显影液系LCD、OLED显示面板生产过程中的关键材料之一；\n2、TMA价格持续上涨，据网络截图显示，查询到公司也在生产和销售偏苯三酸酐", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.69, "first_limit_up": 1783307902, "break_limit_up_times": 1}, {"code": "600288", "name": "大恒科技", "price": 14.14, "change_pct": 10.04, "reason": "控股公司中科大洋的“大洋千机大模型平台”开发了多种垂直场景智能化应用，例如智能内容管理、视频理解摘要、智能写稿创作、文生图/视频、文字场记快剪、文稿一键成片、虚拟数智人播报等", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 5.35, "first_limit_up": 1783308407, "break_limit_up_times": 0}, {"code": "600246", "name": "万通发展", "price": 16.91, "change_pct": 10.02, "reason": "公司拟投资8.54亿元取得数渡科技62.98%股权，标的PCIe5.0交换芯片有望于2025年底逐步开始批量供货", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.85, "first_limit_up": 1783308558, "break_limit_up_times": 0}, {"code": "002828", "name": "贝肯能源", "price": 11.46, "change_pct": 9.98, "reason": "国内领先的油气资源开发综合服务商，是民营企业中为数不多的能够为客户提供钻井总承包、压裂、化工产品销售及配套的检测、维修等一揽子技术服务的油服企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.03, "first_limit_up": 1783301799, "break_limit_up_times": 0}, {"code": "002767", "name": "先锋电子", "price": 19.84, "change_pct": 9.98, "reason": "1、公司为东莞市本末科技有限公司的股东；本末科技作为直驱技术领域的先行者，聚焦于机器人和核心零部件制造；\n2、公司是国内销售规模最大的智能燃气表制造商之一，合作客户超1300家，市占率居行业前列", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 1.47, "first_limit_up": 1783301430, "break_limit_up_times": 0}, {"code": "002403", "name": "爱仕达", "price": 11.78, "change_pct": 9.99, "reason": "公司与智元机器人签署战略合作协议", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.55, "first_limit_up": 1783301604, "break_limit_up_times": 0}, {"code": "000656", "name": "金科股份", "price": 1.43, "change_pct": 10.0, "reason": "公司撤销退市风险警示及其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 3, "turnover_ratio": 6.93, "first_limit_up": 1783301100, "break_limit_up_times": 5}, {"code": "605196", "name": "华通线缆", "price": 29.15, "change_pct": 10.0, "reason": "1、公司的低压电力电缆、控制电缆、中压电缆等产品，可用于智能电网项目；\n2、公司产品海洋探测电缆可以用于海底油、气资源的勘探；第三季度净利润同比增长44.13%", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 1.36, "first_limit_up": 1783301732, "break_limit_up_times": 0}, {"code": "603861", "name": "白云电器", "price": 13.82, "change_pct": 10.03, "reason": "1、公司已完成数据中心智能小母线及一体化电力模块研发，750V直流方案已在园区、楼宇、地铁落地，并储备800VHVDC技术，服务中国联通、佛山开普勒等算力中心；\n2、公司围绕两网数字化、智能化需求，打造综合解决方案，加大 “二次 + 智能技术” 投入，为智能电网提供绿色环保、智能可靠的产品与供电系统方案", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.73, "first_limit_up": 1783302573, "break_limit_up_times": 0}, {"code": "600793", "name": "宜宾纸业", "price": 17.61, "change_pct": 9.99, "reason": "西南最大的食品包装原纸生产企业；公司主营业务有食品包装原纸、生活用纸原纸以及生活用纸成品纸的生产和销售", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 10.48, "first_limit_up": 1783301778, "break_limit_up_times": 13}, {"code": "605377", "name": "华旺科技", "price": 9.7, "change_pct": 9.98, "reason": "国内装饰原纸的主要生产商之一", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.38, "first_limit_up": 1783307752, "break_limit_up_times": 1}, {"code": "603375", "name": "盛景微", "price": 50.91, "change_pct": 10.0, "reason": "公司是一家具备高性能、超低功耗芯片设计能力的企业，依托自研数模混合芯片开发电子控制模块，其子公司上海先积集成电路在精密放大器等芯片领域有技术突破，产品应用于汽车、扫地机器人等领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.36, "first_limit_up": 1783316875, "break_limit_up_times": 0}, {"code": "600470", "name": "六国化工", "price": 6.69, "change_pct": 10.03, "reason": "华东地区规模最大的磷复肥和磷化工一体化专业制造企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 12.23, "first_limit_up": 1783302833, "break_limit_up_times": 4}, {"code": "603819", "name": "神力股份", "price": 13.6, "change_pct": 10.03, "reason": "公司主营大中型电机定子、转子冲片和铁芯，终端产品应用领域包括数据中心等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.25, "first_limit_up": 1783302293, "break_limit_up_times": 8}, {"code": "002042", "name": "华孚时尚", "price": 3.86, "change_pct": 9.97, "reason": "公司上虞AIGC智算中心已对外租赁算力，阿克苏城市公共算力平台项目施工设备已进场，项目正在正常推进中；预计半年报净利润同比增长537.51%至696.88%", "plates": ["云计算数据中心", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.25, "first_limit_up": 1783301100, "break_limit_up_times": 1}, {"code": "002025", "name": "航天电器", "price": 92.07, "change_pct": 10.0, "reason": "1、国内光通信器件行业的重点骨干企业；控股子公司江苏奥雷光电有限公司主营业务为光模块、光互连产品研制生产，产品主要应用于防务、通信、视频监控和工业控制等领域；\n2、中航科工集团旗下，航天连接器龙头，市场占比超过70%", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.35, "first_limit_up": 1783307571, "break_limit_up_times": 0}, {"code": "603757", "name": "大元泵业", "price": 79.19, "change_pct": 10.0, "reason": "公司表示已完成在储能及数据机房液冷领域的产品储备，已开始小批量接受客户订单，公司与华为、中兴在IDC温控领域推进屏蔽齿轮泵项目", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 8.47, "first_limit_up": 1783302348, "break_limit_up_times": 1}, {"code": "603201", "name": "常润股份", "price": 15.6, "change_pct": 10.01, "reason": "中国最大的千斤顶制造企业；公司的产品主要分为4大系列，即商用千斤顶及工具、随车配套零部件、专业汽保维修设备以及外购辅助产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.88, "first_limit_up": 1783302281, "break_limit_up_times": 0}, {"code": "603722", "name": "阿科力", "price": 43.56, "change_pct": 10.0, "reason": "公司控制权易主，华芯智基拟斥资近10亿入主，加码COC材料国产化", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 0.62, "first_limit_up": 1783301101, "break_limit_up_times": 0}, {"code": "603269", "name": "海鸥股份", "price": 17.53, "change_pct": 9.97, "reason": "公司冷却塔已应用于数据算力中心", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 9.75, "first_limit_up": 1783301899, "break_limit_up_times": 6}, {"code": "002175", "name": "*ST东智", "price": 2.87, "change_pct": 9.96, "reason": "公司控制权拟变更，碳基新材料商东泰能源欲以5.47亿元入主", "plates": ["ST股"], "limit_up_days": 5, "turnover_ratio": 0.5, "first_limit_up": 1783301100, "break_limit_up_times": 0}, {"code": "002793", "name": "罗欣药业", "price": 4.74, "change_pct": 9.98, "reason": "公司拥有原料药到制剂的完整产业链", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.61, "first_limit_up": 1783303656, "break_limit_up_times": 3}, {"code": "600215", "name": "派斯林", "price": 6.88, "change_pct": 10.08, "reason": "公司通过全资子公司美国万丰间接持有Paslin及其子公司全部生产经营主体100%股权；Paslin主营业务定位于工业机器人系统集成行业，主要从事智能化连接生产线", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.07, "first_limit_up": 1783302012, "break_limit_up_times": 1}, {"code": "002919", "name": "名臣健康", "price": 22.06, "change_pct": 10.02, "reason": "公司主要产品包括洗发水、护发素、沐浴露、啫喱水及护肤品等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.66, "first_limit_up": 1783319508, "break_limit_up_times": 0}, {"code": "600791", "name": "京能置业", "price": 8.92, "change_pct": 9.99, "reason": "实控人为北京国资委，主营房地产，公司大量的土地储备资产位于规划中的奥运村附近，自身介入的天元港国际中心项目地处北京涉外气氛最浓的区域", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 5.5, "first_limit_up": 1783314341, "break_limit_up_times": 0}, {"code": "000066", "name": "中国长城", "price": 18.82, "change_pct": 9.99, "reason": "公司飞腾芯片产品主要包括高性能服务器CPU、高效能桌面CPU等四大系列，为从端到云的各型设备提供核心算力支撑，一季度业绩同比减亏", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.4, "first_limit_up": 1783314741, "break_limit_up_times": 0}, {"code": "000593", "name": "德龙汇能", "price": 24.66, "change_pct": 9.99, "reason": "公司主营城市管道燃气和零售商业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.86, "first_limit_up": 1783302261, "break_limit_up_times": 0}, {"code": "002396", "name": "星网锐捷", "price": 25.74, "change_pct": 10.0, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["交换机"], "limit_up_days": 2, "turnover_ratio": 5.94, "first_limit_up": 1783301100, "break_limit_up_times": 1}, {"code": "002329", "name": "皇氏集团", "price": 3.27, "change_pct": 10.1, "reason": "2025年12月4日台湾网红陈馆长带货旺旺，皇氏集团与香园食品签署战略合作协议，共同开拓水牛奶在餐饮、新茶饮等领域的应用，而香园食品长期为旺旺集团提供原料解决方案，是旺旺的供应商之一", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.39, "first_limit_up": 1783302450, "break_limit_up_times": 1}, {"code": "002607", "name": "中公教育", "price": 2.09, "change_pct": 10.0, "reason": "国内领先的全品类职业教育机构，周末热度排名靠前", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.63, "first_limit_up": 1783301100, "break_limit_up_times": 0}, {"code": "001287", "name": "中电港", "price": 31.47, "change_pct": 10.0, "reason": "公司是英伟达、AMD的授权分销商之一，代理DRAM、Nand Flash等存储芯片；预计上半年净利同比增长176.43%-193.01%", "plates": ["国产芯片", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.04, "first_limit_up": 1783301514, "break_limit_up_times": 0}, {"code": "002245", "name": "蔚蓝锂芯", "price": 22.37, "change_pct": 9.98, "reason": "全资子公司天鹏电源是国内高端工具类锂电池主要供应商，是宇树科技的重要供应商", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 8.5, "first_limit_up": 1783301400, "break_limit_up_times": 1}, {"code": "002860", "name": "星帅尔", "price": 17.56, "change_pct": 10.03, "reason": "国内冰箱与冷柜压缩机热保护器和起动器的骨干研发生产企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 12.37, "first_limit_up": 1783314222, "break_limit_up_times": 5}, {"code": "603155", "name": "新亚强", "price": 29.57, "change_pct": 10.01, "reason": "公司专业从事有机硅精细化学品的研产销，配套用于平板显示、电子、半导体、芯片等相关领域的电子级六甲基二硅氮烷产品，已向国内多家半导体客户提供产品服务，并在部分主要应用端实现进口产品的替代", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.95, "first_limit_up": 1783301852, "break_limit_up_times": 0}, {"code": "603118", "name": "共进股份", "price": 13.42, "change_pct": 10.0, "reason": "1、参股孙公司山东华云光电技术有限公司致力于光模块等产品的研发、生产及销售；\n2、公司Wi-Fi7万兆路由器实现批量生产及出货，持续获取国内外大客户 Wi-Fi7 新项目，成功完成国内海思方案Wi-Fi 产品开发；\n3、参股公司芯物科技近期获多家半导体产业链公司入股，标的是国家级传感器技术和工艺的研发平台", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 9.13, "first_limit_up": 1783316492, "break_limit_up_times": 0}, {"code": "600241", "name": "时代万恒", "price": 7.41, "change_pct": 9.94, "reason": "控股子公司九夷锂能主营业务为锂电池的研产销，拥有国内领先的圆柱形锂电池全自动化产线，目标市场定位于高端电动工具领域，开拓了博世、飞利浦、斯蒂尔、宝时得等优质客户", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 5.52, "first_limit_up": 1783314249, "break_limit_up_times": 1}];
const RISK_STOCKS = {"688121": "[立案调查] 卓然股份：关于立案调查进展暨风险提示公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "ST/风险警示股", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};