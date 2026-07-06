const UPDATE_TIME = "2026-07-06 02:42";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": -3.2,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续194天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "人形机器人",
    "rise": -2.35,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续405天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "创新药",
    "rise": 2.75,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "ST板块",
    "rise": -0.24,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "2026中报预增",
    "rise": 0.95,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886110"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.56,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续241天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": -2.64,
    "rate": 0,
    "tag": "",
    "hotTag": "连续170天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "机器人概念",
    "rise": -1.89,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "PCB概念",
    "rise": -3.6,
    "rate": 0,
    "tag": "",
    "hotTag": "连续64天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "培育钻石",
    "rise": 0.61,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "猪肉",
    "rise": 2.9,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "光纤概念",
    "rise": -3.64,
    "rate": 0,
    "tag": "",
    "hotTag": "连续70天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "玻璃基板",
    "rise": -4.08,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "半导体设备ETF",
    "code": "886111"
  },
  {
    "name": "国家大基金持股",
    "rise": -2.5,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "液冷服务器",
    "rise": -0.97,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 2,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "先进封装",
    "rise": -3.2,
    "rate": 0,
    "tag": "",
    "hotTag": "连续34天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "黄金概念",
    "rise": -0.05,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "算力租赁",
    "rise": -1.71,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "芯片概念",
    "rise": -2.78,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续65天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "氟化工概念",
    "rise": -2.0,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "化工行业ETF",
    "code": "885551"
  }
];
const THS_EVENTS = [
  {
    "title": "国家药监局：将符合条件的细胞与基因治疗药品纳入创新药临床试验审评审批30日通道",
    "desc": "",
    "heat": 328922,
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
        "chg": 20.0
      }
    ]
  },
  {
    "title": "三星第三季度 DRAM 拟提价 20%，终端厂家称已接到口头通知",
    "desc": "",
    "heat": 51001,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "概伦电子",
        "code": "688206",
        "chg": 15.038149
      }
    ]
  },
  {
    "title": "全球首款忆阻器神经动力学芯片问世！脑机接口赛道加速爆发",
    "desc": "",
    "heat": 20970,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "当虹科技",
        "code": "688039",
        "chg": 12.837466
      }
    ]
  },
  {
    "title": "从跟随者到规则共建者：专家解读韬定律2.0如何解放AI算力的真潜能",
    "desc": "",
    "heat": 10180,
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
        "chg": 15.185823
      }
    ]
  },
  {
    "title": "上游原材料采购成本明显提升，四家充电模块企业集体涨价 15%",
    "desc": "",
    "heat": 10005,
    "direction": "充电模块涨价",
    "themes": [
      "充电桩",
      "充电模块"
    ],
    "stocks": [
      {
        "name": "中石科技",
        "code": "300684",
        "chg": 19.351717
      }
    ]
  },
  {
    "title": "美国国防部启动碳酸锂战略收储 五年拟采购1.62万吨补充国防储备",
    "desc": "",
    "heat": 215,
    "direction": "锂资源",
    "themes": [
      "锂矿/锂盐",
      "盐湖提锂"
    ],
    "stocks": [
      {
        "name": "*ST威领",
        "code": "002667",
        "chg": 8.527755
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "PTA",
    "change": "+4.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+3.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+3.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+3.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+3.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+3.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+3.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+3.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+2.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+2.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+2.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化学原料药",
    "change": "+2.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+2.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血氧仪",
    "change": "+2.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+2.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "丁辛醇",
    "change": "+2.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "维生素",
    "change": "+1.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+1.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化肥",
    "change": "+1.9%",
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
    "stock_cnt": 5863,
    "price": "8.01",
    "change": "-4.30",
    "market_id": "33",
    "circulate_market_value": "283290740000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.08
      },
      {
        "name": "折叠屏",
        "change_pct": -3.49
      },
      {
        "name": "手机产业链",
        "change_pct": -3.35
      },
      {
        "name": "超高清视频",
        "change_pct": -2.2
      },
      {
        "name": "苹果产业链",
        "change_pct": -3.08
      },
      {
        "name": "半导体",
        "change_pct": -3.41
      },
      {
        "name": "人工智能",
        "change_pct": -1.62
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.27
      },
      {
        "name": "VR&AR",
        "change_pct": -3.06
      },
      {
        "name": "OLED",
        "change_pct": -3.34
      },
      {
        "name": "京津冀",
        "change_pct": -0.73
      },
      {
        "name": "物联网",
        "change_pct": -2.2
      },
      {
        "name": "指纹识别",
        "change_pct": -3.4
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.13
      },
      {
        "name": "白马股",
        "change_pct": 0.57
      },
      {
        "name": "智能制造",
        "change_pct": -2.17
      },
      {
        "name": "小米概念股",
        "change_pct": -2.62
      },
      {
        "name": "国产芯片",
        "change_pct": -3.09
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.98
      },
      {
        "name": "全息概念",
        "change_pct": -1.67
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.84
      },
      {
        "name": "MicroLED",
        "change_pct": -3.75
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.95
      },
      {
        "name": "智能手表",
        "change_pct": -4.05
      },
      {
        "name": "MiniLED",
        "change_pct": -3.67
      },
      {
        "name": "传感器",
        "change_pct": -3.15
      },
      {
        "name": "大硅片",
        "change_pct": -4.46
      },
      {
        "name": "AI PC",
        "change_pct": -3.32
      },
      {
        "name": "华为产业链",
        "change_pct": -2.08
      },
      {
        "name": "回购",
        "change_pct": -0.05
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.98
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.18
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 9,
    "hot_rank_chg": 0,
    "stock_cnt": 5863,
    "price": "8.79",
    "change": "-6.30",
    "market_id": "33",
    "circulate_market_value": "14273591000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.83
      },
      {
        "name": "电竞",
        "change_pct": -0.25
      },
      {
        "name": "手游",
        "change_pct": 0.5
      },
      {
        "name": "强势人气股",
        "change_pct": -1.72
      },
      {
        "name": "人工智能",
        "change_pct": -1.62
      },
      {
        "name": "游戏",
        "change_pct": 0.77
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.63
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.14
      },
      {
        "name": "快手概念股",
        "change_pct": -1.74
      },
      {
        "name": "元宇宙",
        "change_pct": -1.88
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.81
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.89
      },
      {
        "name": "web3.0",
        "change_pct": -2.4
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.5
      },
      {
        "name": "数据要素",
        "change_pct": -1.96
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.56
      },
      {
        "name": "AI营销",
        "change_pct": -0.85
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.42
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.98
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.32
      },
      {
        "name": "人形机器人",
        "change_pct": -2.86
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.61
      },
      {
        "name": "多模态",
        "change_pct": -1.76
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -1.78
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.17
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.71
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 12,
    "hot_rank_chg": 6,
    "stock_cnt": 5863,
    "price": "7.81",
    "change": "1.70",
    "market_id": "17",
    "circulate_market_value": "96813456000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.51
      },
      {
        "name": "核电",
        "change_pct": -1.34
      },
      {
        "name": "强势人气股",
        "change_pct": -1.72
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.15
      },
      {
        "name": "水电",
        "change_pct": 0.51
      },
      {
        "name": "火电",
        "change_pct": -0.23
      },
      {
        "name": "光伏",
        "change_pct": -1.81
      },
      {
        "name": "风电",
        "change_pct": -1.66
      },
      {
        "name": "国企改革",
        "change_pct": -0.4
      },
      {
        "name": "算电协同",
        "change_pct": -0.89
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 21,
    "hot_rank_chg": -1,
    "stock_cnt": 5863,
    "price": "5.24",
    "change": "-7.26",
    "market_id": "33",
    "circulate_market_value": "100251860000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.49
      },
      {
        "name": "手机产业链",
        "change_pct": -3.35
      },
      {
        "name": "超高清视频",
        "change_pct": -2.2
      },
      {
        "name": "半导体",
        "change_pct": -3.41
      },
      {
        "name": "OLED",
        "change_pct": -3.34
      },
      {
        "name": "光伏",
        "change_pct": -1.81
      },
      {
        "name": "黑色家电",
        "change_pct": -2.21
      },
      {
        "name": "家电",
        "change_pct": -1.0
      },
      {
        "name": "智能制造",
        "change_pct": -2.17
      },
      {
        "name": "工业互联网",
        "change_pct": -2.24
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.62
      },
      {
        "name": "国产芯片",
        "change_pct": -3.09
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.14
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.98
      },
      {
        "name": "MicroLED",
        "change_pct": -3.75
      },
      {
        "name": "MiniLED",
        "change_pct": -3.67
      },
      {
        "name": "华为产业链",
        "change_pct": -2.08
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.18
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 22,
    "hot_rank_chg": 11,
    "stock_cnt": 5863,
    "price": "6.40",
    "change": "4.24",
    "market_id": "33",
    "circulate_market_value": "8299108100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.77
      },
      {
        "name": "创新药",
        "change_pct": 3.53
      },
      {
        "name": "央企改革",
        "change_pct": -0.51
      },
      {
        "name": "医疗器械",
        "change_pct": 0.34
      },
      {
        "name": "强势人气股",
        "change_pct": -1.72
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.27
      },
      {
        "name": "保健品",
        "change_pct": 1.14
      },
      {
        "name": "民营医院",
        "change_pct": 0.8
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 3.43
      },
      {
        "name": "医药",
        "change_pct": 2.27
      },
      {
        "name": "化学原料药",
        "change_pct": 2.24
      },
      {
        "name": "海南概念",
        "change_pct": 0.37
      },
      {
        "name": "脑科学",
        "change_pct": -0.27
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.49
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.83
      },
      {
        "name": "食品",
        "change_pct": 1.09
      },
      {
        "name": "国企改革",
        "change_pct": -0.4
      },
      {
        "name": "医疗信息化",
        "change_pct": -1.33
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.02
      },
      {
        "name": "自贸区",
        "change_pct": 0.15
      },
      {
        "name": "合成生物",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 55,
    "hot_rank_chg": 24,
    "stock_cnt": 5863,
    "price": "5.49",
    "change": "7.00",
    "market_id": "33",
    "circulate_market_value": "5681146900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.1
      },
      {
        "name": "锂电池",
        "change_pct": -1.36
      },
      {
        "name": "强势人气股",
        "change_pct": -1.72
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -4.11
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.26
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.06
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 66,
    "hot_rank_chg": 6,
    "stock_cnt": 5863,
    "price": "12.54",
    "change": "7.83",
    "market_id": "17",
    "circulate_market_value": "7459149300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": -2.37
      },
      {
        "name": "VR&AR",
        "change_pct": -3.06
      },
      {
        "name": "装修装饰",
        "change_pct": -0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.63
      },
      {
        "name": "百度概念股",
        "change_pct": -1.38
      },
      {
        "name": "全息概念",
        "change_pct": -1.67
      },
      {
        "name": "NFT",
        "change_pct": -0.52
      },
      {
        "name": "元宇宙",
        "change_pct": -1.88
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.81
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.4
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.42
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.98
      },
      {
        "name": "多模态",
        "change_pct": -1.76
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -1.78
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 83,
    "hot_rank_chg": 520,
    "stock_cnt": 5863,
    "price": "8.70",
    "change": "3.08",
    "market_id": "33",
    "circulate_market_value": "20226232000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 0.96
      },
      {
        "name": "有色 · 铜",
        "change_pct": -0.62
      },
      {
        "name": "有色 · 锑",
        "change_pct": -0.76
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.12
      },
      {
        "name": "有色 · 锌",
        "change_pct": 0.98
      },
      {
        "name": "有色金属",
        "change_pct": -1.07
      },
      {
        "name": "国企改革",
        "change_pct": -0.4
      },
      {
        "name": "白银",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "600376",
    "name": "首开股份",
    "hot_rank": 92,
    "hot_rank_chg": -27,
    "stock_cnt": 5863,
    "price": "4.07",
    "change": "6.82",
    "market_id": "17",
    "circulate_market_value": "10498830500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.19
      },
      {
        "name": "京津冀",
        "change_pct": -0.73
      },
      {
        "name": "雄安新区",
        "change_pct": -0.77
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.31
      },
      {
        "name": "住房租赁",
        "change_pct": 0.32
      },
      {
        "name": "物业管理",
        "change_pct": -0.65
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "8.01", "change": "-4.30", "market_id": "33", "circulate_market_value": "283290740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.08}, {"name": "折叠屏", "change_pct": -3.49}, {"name": "手机产业链", "change_pct": -3.35}, {"name": "超高清视频", "change_pct": -2.2}, {"name": "苹果产业链", "change_pct": -3.08}, {"name": "半导体", "change_pct": -3.41}, {"name": "人工智能", "change_pct": -1.62}, {"name": "互联网医疗", "change_pct": -0.27}, {"name": "VR&AR", "change_pct": -3.06}, {"name": "OLED", "change_pct": -3.34}, {"name": "京津冀", "change_pct": -0.73}, {"name": "物联网", "change_pct": -2.2}, {"name": "指纹识别", "change_pct": -3.4}, {"name": "汽车零部件", "change_pct": -1.13}, {"name": "白马股", "change_pct": 0.57}, {"name": "智能制造", "change_pct": -2.17}, {"name": "小米概念股", "change_pct": -2.62}, {"name": "国产芯片", "change_pct": -3.09}, {"name": "液晶面板/LCD", "change_pct": -3.98}, {"name": "全息概念", "change_pct": -1.67}, {"name": "理想汽车概念股", "change_pct": -0.84}, {"name": "MicroLED", "change_pct": -3.75}, {"name": "钙钛矿电池", "change_pct": -2.95}, {"name": "智能手表", "change_pct": -4.05}, {"name": "MiniLED", "change_pct": -3.67}, {"name": "传感器", "change_pct": -3.15}, {"name": "大硅片", "change_pct": -4.46}, {"name": "AI PC", "change_pct": -3.32}, {"name": "华为产业链", "change_pct": -2.08}, {"name": "回购", "change_pct": -0.05}, {"name": "智能眼镜/MR头显", "change_pct": -2.98}, {"name": "玻璃基板封装", "change_pct": -4.18}]}, {"code": "600667", "name": "太极实业", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5863, "price": "27.54", "change": "-8.08", "market_id": "17", "circulate_market_value": "57601072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5863, "price": "675.08", "change": "9.38", "market_id": "33", "circulate_market_value": "190529060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 4, "hot_rank_chg": 6, "stock_cnt": 5863, "price": "92.95", "change": "2.28", "market_id": "17", "circulate_market_value": "166326080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 5, "hot_rank_chg": 10, "stock_cnt": 5863, "price": "19.06", "change": "-13.35", "market_id": "33", "circulate_market_value": "20270664000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "48.00", "change": "7.19", "market_id": "33", "circulate_market_value": "37555422000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "49.16", "change": "-0.36", "market_id": "33", "circulate_market_value": "53032203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 8, "hot_rank_chg": 29, "stock_cnt": 5863, "price": "18.29", "change": "8.54", "market_id": "17", "circulate_market_value": "23342718000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "8.79", "change": "-6.30", "market_id": "33", "circulate_market_value": "14273591000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.83}, {"name": "电竞", "change_pct": -0.25}, {"name": "手游", "change_pct": 0.5}, {"name": "强势人气股", "change_pct": -1.72}, {"name": "人工智能", "change_pct": -1.62}, {"name": "游戏", "change_pct": 0.77}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.63}, {"name": "腾讯概念股", "change_pct": -1.14}, {"name": "快手概念股", "change_pct": -1.74}, {"name": "元宇宙", "change_pct": -1.88}, {"name": "虚拟数字人", "change_pct": -1.81}, {"name": "东数西算/算力", "change_pct": -1.89}, {"name": "web3.0", "change_pct": -2.4}, {"name": "AIGC概念", "change_pct": -1.5}, {"name": "数据要素", "change_pct": -1.96}, {"name": "字节跳动概念股", "change_pct": -1.56}, {"name": "AI营销", "change_pct": -0.85}, {"name": "ChatGPT", "change_pct": -2.42}, {"name": "智能眼镜/MR头显", "change_pct": -2.98}, {"name": "人工智能大模型", "change_pct": -1.32}, {"name": "人形机器人", "change_pct": -2.86}, {"name": "短剧/互动影游", "change_pct": -0.61}, {"name": "多模态", "change_pct": -1.76}, {"name": "Sora/AI视频", "change_pct": -1.78}, {"name": "IP经济/谷子经济", "change_pct": -0.17}, {"name": "小红书概念股", "change_pct": -1.71}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 10, "hot_rank_chg": 3, "stock_cnt": 5863, "price": "44.10", "change": "-10.00", "market_id": "17", "circulate_market_value": "30489665000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "53.63", "change": "-4.15", "market_id": "33", "circulate_market_value": "84421964000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 12, "hot_rank_chg": 6, "stock_cnt": 5863, "price": "7.81", "change": "1.70", "market_id": "17", "circulate_market_value": "96813456000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.51}, {"name": "核电", "change_pct": -1.34}, {"name": "强势人气股", "change_pct": -1.72}, {"name": "电力体制改革", "change_pct": -0.15}, {"name": "水电", "change_pct": 0.51}, {"name": "火电", "change_pct": -0.23}, {"name": "光伏", "change_pct": -1.81}, {"name": "风电", "change_pct": -1.66}, {"name": "国企改革", "change_pct": -0.4}, {"name": "算电协同", "change_pct": -0.89}]}, {"code": "002185", "name": "华天科技", "hot_rank": 13, "hot_rank_chg": 19, "stock_cnt": 5863, "price": "19.77", "change": "1.33", "market_id": "33", "circulate_market_value": "65688825000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 14, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "83.90", "change": "-6.17", "market_id": "17", "circulate_market_value": "205150700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 15, "hot_rank_chg": 6, "stock_cnt": 5863, "price": "47.70", "change": "-5.02", "market_id": "17", "circulate_market_value": "162797700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 16, "hot_rank_chg": -14, "stock_cnt": 5863, "price": "49.92", "change": "-8.45", "market_id": "17", "circulate_market_value": "72982781000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 17, "hot_rank_chg": -10, "stock_cnt": 5863, "price": "47.12", "change": "-3.82", "market_id": "33", "circulate_market_value": "173599390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 18, "hot_rank_chg": 4, "stock_cnt": 5863, "price": "642.98", "change": "-5.13", "market_id": "17", "circulate_market_value": "429826940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 19, "hot_rank_chg": 30, "stock_cnt": 5863, "price": "38.95", "change": "-7.59", "market_id": "33", "circulate_market_value": "16770574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 20, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "64.31", "change": "-9.29", "market_id": "17", "circulate_market_value": "255412760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 21, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "5.24", "change": "-7.26", "market_id": "33", "circulate_market_value": "100251860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.49}, {"name": "手机产业链", "change_pct": -3.35}, {"name": "超高清视频", "change_pct": -2.2}, {"name": "半导体", "change_pct": -3.41}, {"name": "OLED", "change_pct": -3.34}, {"name": "光伏", "change_pct": -1.81}, {"name": "黑色家电", "change_pct": -2.21}, {"name": "家电", "change_pct": -1.0}, {"name": "智能制造", "change_pct": -2.17}, {"name": "工业互联网", "change_pct": -2.24}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.62}, {"name": "国产芯片", "change_pct": -3.09}, {"name": "腾讯概念股", "change_pct": -1.14}, {"name": "液晶面板/LCD", "change_pct": -3.98}, {"name": "MicroLED", "change_pct": -3.75}, {"name": "MiniLED", "change_pct": -3.67}, {"name": "华为产业链", "change_pct": -2.08}, {"name": "玻璃基板封装", "change_pct": -4.18}]}, {"code": "000566", "name": "海南海药", "hot_rank": 22, "hot_rank_chg": 11, "stock_cnt": 5863, "price": "6.40", "change": "4.24", "market_id": "33", "circulate_market_value": "8299108100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.77}, {"name": "创新药", "change_pct": 3.53}, {"name": "央企改革", "change_pct": -0.51}, {"name": "医疗器械", "change_pct": 0.34}, {"name": "强势人气股", "change_pct": -1.72}, {"name": "互联网医疗", "change_pct": -0.27}, {"name": "保健品", "change_pct": 1.14}, {"name": "民营医院", "change_pct": 0.8}, {"name": "CAR-T疗法", "change_pct": 3.43}, {"name": "医药", "change_pct": 2.27}, {"name": "化学原料药", "change_pct": 2.24}, {"name": "海南概念", "change_pct": 0.37}, {"name": "脑科学", "change_pct": -0.27}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.49}, {"name": "海南自由贸易港", "change_pct": 0.83}, {"name": "食品", "change_pct": 1.09}, {"name": "国企改革", "change_pct": -0.4}, {"name": "医疗信息化", "change_pct": -1.33}, {"name": "新冠病毒防治", "change_pct": 0.02}, {"name": "自贸区", "change_pct": 0.15}, {"name": "合成生物", "change_pct": 0.95}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 23, "hot_rank_chg": 39, "stock_cnt": 5863, "price": "28.80", "change": "3.52", "market_id": "17", "circulate_market_value": "593331640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 24, "hot_rank_chg": 15, "stock_cnt": 5863, "price": "13.54", "change": "-9.85", "market_id": "17", "circulate_market_value": "48577048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 25, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "60.07", "change": "-5.00", "market_id": "33", "circulate_market_value": "69501778000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 26, "hot_rank_chg": 74, "stock_cnt": 5863, "price": "22.10", "change": "13.33", "market_id": "33", "circulate_market_value": "26539371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 27, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "220.88", "change": "-5.11", "market_id": "33", "circulate_market_value": "306210740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 28, "hot_rank_chg": 3, "stock_cnt": 5863, "price": "51.60", "change": "-4.97", "market_id": "17", "circulate_market_value": "43682152000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 29, "hot_rank_chg": -13, "stock_cnt": 5863, "price": "38.51", "change": "3.11", "market_id": "17", "circulate_market_value": "59984428000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 30, "hot_rank_chg": 170, "stock_cnt": 5863, "price": "21.23", "change": "6.15", "market_id": "17", "circulate_market_value": "10875930500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 31, "hot_rank_chg": 25, "stock_cnt": 5863, "price": "51.25", "change": "-5.16", "market_id": "33", "circulate_market_value": "77336815000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 32, "hot_rank_chg": 38, "stock_cnt": 5863, "price": "65.06", "change": "0.40", "market_id": "33", "circulate_market_value": "98710267000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 33, "hot_rank_chg": 78, "stock_cnt": 5863, "price": "98.17", "change": "-8.21", "market_id": "33", "circulate_market_value": "71106044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 34, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "882.16", "change": "0.01", "market_id": "33", "circulate_market_value": "145616400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002979", "name": "雷赛智能", "hot_rank": 35, "hot_rank_chg": -12, "stock_cnt": 5863, "price": "73.50", "change": "5.77", "market_id": "33", "circulate_market_value": "16389449000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 36, "hot_rank_chg": -12, "stock_cnt": 5863, "price": "14.78", "change": "-6.16", "market_id": "17", "circulate_market_value": "25645974000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 37, "hot_rank_chg": 4, "stock_cnt": 5863, "price": "59.41", "change": "-8.13", "market_id": "17", "circulate_market_value": "45876365000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 38, "hot_rank_chg": -13, "stock_cnt": 5863, "price": "16.36", "change": "-9.27", "market_id": "33", "circulate_market_value": "117715173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 39, "hot_rank_chg": -13, "stock_cnt": 5863, "price": "23.99", "change": "-2.44", "market_id": "33", "circulate_market_value": "80690487000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 40, "hot_rank_chg": -12, "stock_cnt": 5863, "price": "1081.16", "change": "-3.22", "market_id": "33", "circulate_market_value": "1198845950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 41, "hot_rank_chg": 75, "stock_cnt": 5863, "price": "41.14", "change": "-12.45", "market_id": "33", "circulate_market_value": "57776725000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 42, "hot_rank_chg": 61, "stock_cnt": 5863, "price": "57.21", "change": "5.07", "market_id": "17", "circulate_market_value": "364942720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 43, "hot_rank_chg": 164, "stock_cnt": 5863, "price": "75.82", "change": "5.98", "market_id": "33", "circulate_market_value": "85677423000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 44, "hot_rank_chg": 3, "stock_cnt": 5863, "price": "35.19", "change": "-9.84", "market_id": "33", "circulate_market_value": "13209996800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 45, "hot_rank_chg": 18, "stock_cnt": 5863, "price": "54.07", "change": "-3.89", "market_id": "17", "circulate_market_value": "20851406000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 47, "hot_rank_chg": 31, "stock_cnt": 5863, "price": "17.29", "change": "-5.16", "market_id": "17", "circulate_market_value": "86260134000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 48, "hot_rank_chg": 23, "stock_cnt": 5863, "price": "14.80", "change": "-2.12", "market_id": "17", "circulate_market_value": "61720341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 49, "hot_rank_chg": 126, "stock_cnt": 5863, "price": "148.73", "change": "-3.76", "market_id": "33", "circulate_market_value": "123365803000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 50, "hot_rank_chg": -6, "stock_cnt": 5863, "price": "167.49", "change": "0.53", "market_id": "17", "circulate_market_value": "43217612000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 51, "hot_rank_chg": 58, "stock_cnt": 5863, "price": "506.55", "change": "-3.78", "market_id": "33", "circulate_market_value": "634772460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 52, "hot_rank_chg": 120, "stock_cnt": 5863, "price": "13.38", "change": "-5.77", "market_id": "33", "circulate_market_value": "10832764300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 53, "hot_rank_chg": 6, "stock_cnt": 5863, "price": "62.25", "change": "-3.82", "market_id": "17", "circulate_market_value": "1235294740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 54, "hot_rank_chg": 150, "stock_cnt": 5863, "price": "64.37", "change": "7.50", "market_id": "17", "circulate_market_value": "26801589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 55, "hot_rank_chg": 24, "stock_cnt": 5863, "price": "5.49", "change": "7.00", "market_id": "33", "circulate_market_value": "5681146900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.1}, {"name": "锂电池", "change_pct": -1.36}, {"name": "强势人气股", "change_pct": -1.72}, {"name": "铜箔/覆铜板", "change_pct": -4.11}, {"name": "粤港澳大湾区", "change_pct": -0.26}, {"name": "新能源汽车", "change_pct": -1.06}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.62}]}, {"code": "600460", "name": "士兰微", "hot_rank": 56, "hot_rank_chg": 32, "stock_cnt": 5863, "price": "45.67", "change": "-3.34", "market_id": "17", "circulate_market_value": "75998161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 57, "hot_rank_chg": 182, "stock_cnt": 5863, "price": "44.46", "change": "4.22", "market_id": "33", "circulate_market_value": "52254903000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 58, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "72.79", "change": "-4.24", "market_id": "17", "circulate_market_value": "78072033000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 59, "hot_rank_chg": 91, "stock_cnt": 5863, "price": "131.50", "change": "1.36", "market_id": "33", "circulate_market_value": "125809651000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 60, "hot_rank_chg": 35, "stock_cnt": 5863, "price": "126.13", "change": "-6.81", "market_id": "33", "circulate_market_value": "242581770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000811", "name": "冰轮环境", "hot_rank": 61, "hot_rank_chg": 113, "stock_cnt": 5863, "price": "55.34", "change": "5.11", "market_id": "33", "circulate_market_value": "54144417000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002245", "name": "蔚蓝锂芯", "hot_rank": 62, "hot_rank_chg": 135, "stock_cnt": 5863, "price": "22.12", "change": "8.75", "market_id": "33", "circulate_market_value": "35537987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001270", "name": "铖昌科技", "hot_rank": 63, "hot_rank_chg": -20, "stock_cnt": 5863, "price": "169.97", "change": "4.08", "market_id": "33", "circulate_market_value": "34810409000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 64, "hot_rank_chg": 19, "stock_cnt": 5863, "price": "24.09", "change": "-3.79", "market_id": "33", "circulate_market_value": "18277395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 65, "hot_rank_chg": 154, "stock_cnt": 5863, "price": "15.68", "change": "6.67", "market_id": "17", "circulate_market_value": "5342238700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 66, "hot_rank_chg": 6, "stock_cnt": 5863, "price": "12.54", "change": "7.83", "market_id": "17", "circulate_market_value": "7459149300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "数字孪生", "change_pct": -2.37}, {"name": "VR&AR", "change_pct": -3.06}, {"name": "装修装饰", "change_pct": -0.85}, {"name": "数字经济", "change_pct": -1.63}, {"name": "百度概念股", "change_pct": -1.38}, {"name": "全息概念", "change_pct": -1.67}, {"name": "NFT", "change_pct": -0.52}, {"name": "元宇宙", "change_pct": -1.88}, {"name": "虚拟数字人", "change_pct": -1.81}, {"name": "网红/MCN", "change_pct": -0.4}, {"name": "ChatGPT", "change_pct": -2.42}, {"name": "智能眼镜/MR头显", "change_pct": -2.98}, {"name": "多模态", "change_pct": -1.76}, {"name": "Sora/AI视频", "change_pct": -1.78}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 67, "hot_rank_chg": 27, "stock_cnt": 5863, "price": "440.00", "change": "-7.38", "market_id": "17", "circulate_market_value": "178788860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 68, "hot_rank_chg": -8, "stock_cnt": 5863, "price": "240.02", "change": "-7.47", "market_id": "33", "circulate_market_value": "101282520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002294", "name": "信立泰", "hot_rank": 69, "hot_rank_chg": -27, "stock_cnt": 5863, "price": "43.67", "change": "8.96", "market_id": "33", "circulate_market_value": "48661940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 70, "hot_rank_chg": 4, "stock_cnt": 5863, "price": "22.07", "change": "-0.90", "market_id": "17", "circulate_market_value": "72815536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 71, "hot_rank_chg": 144, "stock_cnt": 5863, "price": "17.36", "change": "1.46", "market_id": "33", "circulate_market_value": "55996240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002536", "name": "飞龙股份", "hot_rank": 72, "hot_rank_chg": 12, "stock_cnt": 5863, "price": "55.62", "change": "7.04", "market_id": "33", "circulate_market_value": "30295920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 73, "hot_rank_chg": 35, "stock_cnt": 5863, "price": "103.40", "change": "-1.59", "market_id": "33", "circulate_market_value": "67523884000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 74, "hot_rank_chg": 79, "stock_cnt": 5863, "price": "19.01", "change": "2.65", "market_id": "17", "circulate_market_value": "331930610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 75, "hot_rank_chg": -11, "stock_cnt": 5863, "price": "49.10", "change": "-0.51", "market_id": "17", "circulate_market_value": "132557533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603667", "name": "五洲新春", "hot_rank": 76, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "71.73", "change": "-5.80", "market_id": "17", "circulate_market_value": "26267725000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 77, "hot_rank_chg": 37, "stock_cnt": 5863, "price": "81.51", "change": "-8.76", "market_id": "33", "circulate_market_value": "118427945000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 78, "hot_rank_chg": -27, "stock_cnt": 5863, "price": "183.50", "change": "-8.02", "market_id": "33", "circulate_market_value": "58448924000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002472", "name": "双环传动", "hot_rank": 79, "hot_rank_chg": -62, "stock_cnt": 5863, "price": "48.18", "change": "3.12", "market_id": "33", "circulate_market_value": "36074811000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 82, "hot_rank_chg": 30, "stock_cnt": 5863, "price": "29.75", "change": "2.48", "market_id": "33", "circulate_market_value": "8703768600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 83, "hot_rank_chg": 520, "stock_cnt": 5863, "price": "8.70", "change": "3.08", "market_id": "33", "circulate_market_value": "20226232000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 0.96}, {"name": "有色 · 铜", "change_pct": -0.62}, {"name": "有色 · 锑", "change_pct": -0.76}, {"name": "湖南国企改革", "change_pct": 0.12}, {"name": "有色 · 锌", "change_pct": 0.98}, {"name": "有色金属", "change_pct": -1.07}, {"name": "国企改革", "change_pct": -0.4}, {"name": "白银", "change_pct": 1.44}]}, {"code": "300059", "name": "东方财富", "hot_rank": 84, "hot_rank_chg": 46, "stock_cnt": 5863, "price": "21.16", "change": "0.47", "market_id": "33", "circulate_market_value": "282689270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 85, "hot_rank_chg": 92, "stock_cnt": 5863, "price": "38.72", "change": "4.93", "market_id": "33", "circulate_market_value": "127053736000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 86, "hot_rank_chg": -33, "stock_cnt": 5863, "price": "85.37", "change": "-1.08", "market_id": "17", "circulate_market_value": "100949097000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 87, "hot_rank_chg": -29, "stock_cnt": 5863, "price": "153.03", "change": "-4.83", "market_id": "17", "circulate_market_value": "366430570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002851", "name": "麦格米特", "hot_rank": 88, "hot_rank_chg": 184, "stock_cnt": 5863, "price": "152.11", "change": "2.99", "market_id": "33", "circulate_market_value": "69713863000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 89, "hot_rank_chg": -51, "stock_cnt": 5863, "price": "88.07", "change": "-0.46", "market_id": "33", "circulate_market_value": "307031180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 90, "hot_rank_chg": 51, "stock_cnt": 5863, "price": "45.57", "change": "2.34", "market_id": "17", "circulate_market_value": "37768925000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002422", "name": "科伦药业", "hot_rank": 91, "hot_rank_chg": -25, "stock_cnt": 5863, "price": "51.53", "change": "7.40", "market_id": "33", "circulate_market_value": "66918036000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600376", "name": "首开股份", "hot_rank": 92, "hot_rank_chg": -27, "stock_cnt": 5863, "price": "4.07", "change": "6.82", "market_id": "17", "circulate_market_value": "10498830500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.19}, {"name": "京津冀", "change_pct": -0.73}, {"name": "雄安新区", "change_pct": -0.77}, {"name": "北京城市规划", "change_pct": 0.31}, {"name": "住房租赁", "change_pct": 0.32}, {"name": "物业管理", "change_pct": -0.65}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 93, "hot_rank_chg": 40, "stock_cnt": 5863, "price": "88.35", "change": "-2.61", "market_id": "33", "circulate_market_value": "75430160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 94, "hot_rank_chg": 21, "stock_cnt": 5863, "price": "18.15", "change": "-6.39", "market_id": "33", "circulate_market_value": "28842547000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001696", "name": "宗申动力", "hot_rank": 95, "hot_rank_chg": 271, "stock_cnt": 5863, "price": "20.96", "change": "5.01", "market_id": "33", "circulate_market_value": "18683707000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 96, "hot_rank_chg": -4, "stock_cnt": 5863, "price": "23.98", "change": "-5.85", "market_id": "33", "circulate_market_value": "28211724000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 98, "hot_rank_chg": 28, "stock_cnt": 5863, "price": "208.01", "change": "-4.29", "market_id": "33", "circulate_market_value": "162343660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 99, "hot_rank_chg": 14, "stock_cnt": 5863, "price": "47.73", "change": "-9.91", "market_id": "17", "circulate_market_value": "15367780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300607", "name": "拓斯达", "hot_rank": 100, "hot_rank_chg": -14, "stock_cnt": 5863, "price": "45.90", "change": "-13.33", "market_id": "33", "circulate_market_value": "15484471000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] 卓然股份：关于立案调查进展暨风险提示公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "ST/风险警示股", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};