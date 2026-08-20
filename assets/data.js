const UPDATE_TIME = "2026-08-20 04:32";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 5.85,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "连续104天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "生物疫苗",
    "rise": 8.92,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885845"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.77,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续274天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": 1.16,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续203天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "黄金概念",
    "rise": 2.46,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "存储芯片",
    "rise": 1.03,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续227天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 1.74,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续97天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "CRO概念",
    "rise": 7.26,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "AI应用",
    "rise": 2.21,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续32天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "光纤概念",
    "rise": 3.14,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续103天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "人形机器人",
    "rise": 1.35,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续438天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "算力租赁",
    "rise": 1.37,
    "rate": 0,
    "tag": "",
    "hotTag": "连续138天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "MLCC概念",
    "rise": 1.78,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "鹏华创新动力LOF",
    "code": "886112"
  },
  {
    "name": "粮食概念",
    "rise": -1.31,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "机器人概念",
    "rise": 1.66,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "猪肉",
    "rise": 0.96,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "猴痘概念",
    "rise": 7.07,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "中药ETF",
    "code": "885994"
  },
  {
    "name": "细胞免疫治疗",
    "rise": 8.05,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885769"
  },
  {
    "name": "培育钻石",
    "rise": 1.06,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "玻璃基板",
    "rise": 1.69,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "工业母机ETF",
    "code": "886111"
  }
];
const THS_EVENTS = [
  {
    "title": "抗癌疫苗，大消息！美股医药巨头，盘前暴涨超100%",
    "desc": "",
    "heat": 1073848,
    "direction": "抗癌疫苗",
    "themes": [
      "肿瘤疫苗",
      "生物疫苗",
      "重组蛋白",
      "生物制品",
      "基因测序"
    ],
    "stocks": [
      {
        "name": "三元基因",
        "code": "920344",
        "chg": 29.973753
      }
    ]
  },
  {
    "title": "2026世界机器人大会开幕 机器人产业加速商业闭环",
    "desc": "",
    "heat": 380185,
    "direction": "世界机器人大会",
    "themes": [
      "机器人概念",
      "人形机器人",
      "减速器"
    ],
    "stocks": [
      {
        "name": "华大智造",
        "code": "688114",
        "chg": 20.003473
      }
    ]
  },
  {
    "title": "凌晨！美联储，重磅发布！现货黄金涨超4%",
    "desc": "",
    "heat": 340932,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "黄金概念",
      "白银"
    ],
    "stocks": [
      {
        "name": "深中华A",
        "code": "000017",
        "chg": 10.051107
      }
    ]
  },
  {
    "title": "AI 芯片需求激增，消息称三星部分先进制程代工最高涨价15%",
    "desc": "",
    "heat": 164732,
    "direction": "晶圆代工",
    "themes": [
      "先进封装",
      "晶圆代工",
      "EDA",
      "混合键合"
    ],
    "stocks": [
      {
        "name": "纳芯微",
        "code": "688052",
        "chg": 11.934323
      }
    ]
  },
  {
    "title": "公积金使用扩围，更好服务安居消费",
    "desc": "",
    "heat": 161019,
    "direction": "公积金新政",
    "themes": [
      "房地产",
      "租售同权"
    ],
    "stocks": [
      {
        "name": "福星股份",
        "code": "000926",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "“六张网”建设提速 上市公司掘金新机遇",
    "desc": "",
    "heat": 77038,
    "direction": "算电协同",
    "themes": [
      "算电协同",
      "电力"
    ],
    "stocks": [
      {
        "name": "金房能源",
        "code": "001210",
        "chg": 10.018484
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "肿瘤疫苗",
    "change": "+15.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+13.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+8.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因测序",
    "change": "+8.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "精准医疗",
    "change": "+8.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "猴痘概念",
    "change": "+7.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+7.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+6.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "体外诊断",
    "change": "+6.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+6.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+6.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+6.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+6.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+6.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+6.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI医疗",
    "change": "+6.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医疗器械",
    "change": "+5.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "辅助生殖",
    "change": "+5.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+5.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+5.22%",
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
    "hot_rank_chg": 2,
    "stock_cnt": 5872,
    "price": "9.23",
    "change": "1.88",
    "market_id": "17",
    "circulate_market_value": "23245846000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.95
      },
      {
        "name": "工业大麻",
        "change_pct": 3.86
      },
      {
        "name": "中药",
        "change_pct": 3.8
      },
      {
        "name": "强势人气股",
        "change_pct": 1.05
      },
      {
        "name": "保健品",
        "change_pct": 3.49
      },
      {
        "name": "民营医院",
        "change_pct": 3.26
      },
      {
        "name": "医药",
        "change_pct": 5.23
      },
      {
        "name": "化学原料药",
        "change_pct": 5.0
      },
      {
        "name": "流感",
        "change_pct": 4.86
      },
      {
        "name": "振兴东北",
        "change_pct": 1.51
      },
      {
        "name": "食品",
        "change_pct": 1.24
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 4,
    "hot_rank_chg": 8,
    "stock_cnt": 5872,
    "price": "8.56",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "4102979000.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "5",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.8
      },
      {
        "name": "医药商业",
        "change_pct": 3.1
      },
      {
        "name": "医药",
        "change_pct": 5.23
      },
      {
        "name": "流感",
        "change_pct": 4.86
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 6,
    "hot_rank_chg": 21,
    "stock_cnt": 5872,
    "price": "8.60",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "5519335700.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "粮食安全",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 0.02
      },
      {
        "name": "农业种植",
        "change_pct": -1.26
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.57
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.28
      },
      {
        "name": "休闲食品",
        "change_pct": -0.15
      },
      {
        "name": "食品",
        "change_pct": 1.24
      },
      {
        "name": "食品安全",
        "change_pct": 3.26
      },
      {
        "name": "社区团购",
        "change_pct": 1.42
      },
      {
        "name": "大农业",
        "change_pct": 0.04
      },
      {
        "name": "预制菜",
        "change_pct": 0.7
      },
      {
        "name": "人造肉",
        "change_pct": 0.41
      },
      {
        "name": "国企改革",
        "change_pct": 0.9
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 9,
    "hot_rank_chg": 2,
    "stock_cnt": 5872,
    "price": "5.45",
    "change": "-3.37",
    "market_id": "33",
    "circulate_market_value": "14411126000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.05
      },
      {
        "name": "装修装饰",
        "change_pct": 1.57
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.61
      },
      {
        "name": "航天",
        "change_pct": 0.64
      },
      {
        "name": "旧改",
        "change_pct": 1.51
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 14,
    "hot_rank_chg": -7,
    "stock_cnt": 5872,
    "price": "5.98",
    "change": "-0.50",
    "market_id": "33",
    "circulate_market_value": "211495460000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.76
      },
      {
        "name": "手机产业链",
        "change_pct": 2.87
      },
      {
        "name": "超高清视频",
        "change_pct": 2.04
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.97
      },
      {
        "name": "电竞",
        "change_pct": 1.94
      },
      {
        "name": "半导体",
        "change_pct": 1.49
      },
      {
        "name": "人工智能",
        "change_pct": 2.29
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.73
      },
      {
        "name": "VR&AR",
        "change_pct": 2.77
      },
      {
        "name": "OLED",
        "change_pct": 2.17
      },
      {
        "name": "京津冀",
        "change_pct": 1.12
      },
      {
        "name": "物联网",
        "change_pct": 2.13
      },
      {
        "name": "指纹识别",
        "change_pct": 2.39
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.12
      },
      {
        "name": "白马股",
        "change_pct": 0.5
      },
      {
        "name": "智能制造",
        "change_pct": 1.92
      },
      {
        "name": "小米概念股",
        "change_pct": 2.23
      },
      {
        "name": "国产芯片",
        "change_pct": 1.71
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.48
      },
      {
        "name": "全息概念",
        "change_pct": 2.37
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.03
      },
      {
        "name": "MicroLED",
        "change_pct": 2.81
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.71
      },
      {
        "name": "智能手表",
        "change_pct": 2.52
      },
      {
        "name": "MiniLED",
        "change_pct": 2.66
      },
      {
        "name": "传感器",
        "change_pct": 1.98
      },
      {
        "name": "大硅片",
        "change_pct": -1.74
      },
      {
        "name": "AI PC",
        "change_pct": 2.1
      },
      {
        "name": "华为产业链",
        "change_pct": 1.94
      },
      {
        "name": "回购",
        "change_pct": 1.92
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 4.07
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.07
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 17,
    "hot_rank_chg": 11,
    "stock_cnt": 5872,
    "price": "11.99",
    "change": "-9.71",
    "market_id": "33",
    "circulate_market_value": "3410934500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 1.77
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.18
      },
      {
        "name": "强势人气股",
        "change_pct": 1.05
      },
      {
        "name": "教育",
        "change_pct": 0.89
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.9
      },
      {
        "name": "职业教育",
        "change_pct": 1.2
      },
      {
        "name": "在线教育",
        "change_pct": 1.0
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.71
      },
      {
        "name": "华为产业链",
        "change_pct": 1.94
      },
      {
        "name": "智谱AI",
        "change_pct": 1.39
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 19,
    "hot_rank_chg": 3,
    "stock_cnt": 5872,
    "price": "10.56",
    "change": "-6.30",
    "market_id": "33",
    "circulate_market_value": "8543240500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 1.7
      },
      {
        "name": "大飞机",
        "change_pct": 0.83
      },
      {
        "name": "北斗导航",
        "change_pct": 1.18
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.22
      },
      {
        "name": "军民融合",
        "change_pct": 1.36
      },
      {
        "name": "磁悬浮",
        "change_pct": 1.45
      },
      {
        "name": "军工",
        "change_pct": 1.2
      },
      {
        "name": "碳纤维",
        "change_pct": 0.99
      },
      {
        "name": "无人机",
        "change_pct": 1.21
      },
      {
        "name": "航天",
        "change_pct": 0.64
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.89
      },
      {
        "name": "低空经济",
        "change_pct": 1.52
      },
      {
        "name": "海洋经济",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 26,
    "hot_rank_chg": -7,
    "stock_cnt": 5872,
    "price": "12.07",
    "change": "-6.00",
    "market_id": "17",
    "circulate_market_value": "8211458500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.8
      },
      {
        "name": "强势人气股",
        "change_pct": 1.05
      },
      {
        "name": "雄安新区",
        "change_pct": 1.43
      },
      {
        "name": "煤化工",
        "change_pct": -0.92
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 27,
    "hot_rank_chg": 8,
    "stock_cnt": 5872,
    "price": "4.73",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "9933727700.00",
    "change_type": "1",
    "change_section": "10",
    "change_days": "6",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.8
      },
      {
        "name": "强势人气股",
        "change_pct": 1.05
      },
      {
        "name": "维生素",
        "change_pct": 2.58
      },
      {
        "name": "基因测序",
        "change_pct": 8.52
      },
      {
        "name": "民营医院",
        "change_pct": 3.26
      },
      {
        "name": "医药",
        "change_pct": 5.23
      },
      {
        "name": "化学原料药",
        "change_pct": 5.0
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 6.19
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 33,
    "hot_rank_chg": -10,
    "stock_cnt": 5872,
    "price": "3.33",
    "change": "-5.93",
    "market_id": "33",
    "circulate_market_value": "15556924000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.97
      },
      {
        "name": "股权转让",
        "change_pct": 1.27
      },
      {
        "name": "房地产",
        "change_pct": 1.9
      },
      {
        "name": "京津冀",
        "change_pct": 1.12
      },
      {
        "name": "旅游",
        "change_pct": 2.41
      },
      {
        "name": "国产芯片",
        "change_pct": 1.71
      },
      {
        "name": "内存",
        "change_pct": 0.75
      },
      {
        "name": "闪存",
        "change_pct": 1.14
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.06
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 37,
    "hot_rank_chg": 43,
    "stock_cnt": 5872,
    "price": "9.26",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "4610044700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.8
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.73
      },
      {
        "name": "农业种植",
        "change_pct": -1.26
      },
      {
        "name": "医药",
        "change_pct": 5.23
      },
      {
        "name": "流感",
        "change_pct": 4.86
      },
      {
        "name": "大农业",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 39,
    "hot_rank_chg": -1,
    "stock_cnt": 5872,
    "price": "6.58",
    "change": "-7.71",
    "market_id": "17",
    "circulate_market_value": "7120867200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.66
      },
      {
        "name": "农业种植",
        "change_pct": -1.26
      },
      {
        "name": "化肥",
        "change_pct": -1.22
      },
      {
        "name": "转基因",
        "change_pct": -3.23
      },
      {
        "name": "土地流转",
        "change_pct": 0.86
      },
      {
        "name": "农垦",
        "change_pct": -0.68
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.28
      },
      {
        "name": "大农业",
        "change_pct": 0.04
      },
      {
        "name": "国企改革",
        "change_pct": 0.9
      },
      {
        "name": "大豆",
        "change_pct": -2.51
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 41,
    "hot_rank_chg": 10,
    "stock_cnt": 5872,
    "price": "6.99",
    "change": "-6.43",
    "market_id": "33",
    "circulate_market_value": "4420338500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 0.67
      },
      {
        "name": "京津冀",
        "change_pct": 1.12
      },
      {
        "name": "调味品",
        "change_pct": 0.28
      },
      {
        "name": "海南概念",
        "change_pct": 1.63
      },
      {
        "name": "休闲食品",
        "change_pct": -0.15
      },
      {
        "name": "食品",
        "change_pct": 1.24
      },
      {
        "name": "人造肉",
        "change_pct": 0.41
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 45,
    "hot_rank_chg": -2,
    "stock_cnt": 5872,
    "price": "6.89",
    "change": "1.03",
    "market_id": "17",
    "circulate_market_value": "16472697000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.85
      },
      {
        "name": "强势人气股",
        "change_pct": 1.05
      },
      {
        "name": "国企改革",
        "change_pct": 0.9
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.39
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 57,
    "hot_rank_chg": -4,
    "stock_cnt": 5872,
    "price": "11.23",
    "change": "-3.27",
    "market_id": "17",
    "circulate_market_value": "20092023000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.28
      },
      {
        "name": "纯碱",
        "change_pct": 0.35
      },
      {
        "name": "食品",
        "change_pct": 1.24
      },
      {
        "name": "土壤修复",
        "change_pct": 1.68
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.17
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.23
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.68
      }
    ]
  },
  {
    "code": "601011",
    "name": "宝泰隆",
    "hot_rank": 60,
    "hot_rank_chg": 1,
    "stock_cnt": 5872,
    "price": "3.16",
    "change": "3.95",
    "market_id": "17",
    "circulate_market_value": "6053499900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.85
      },
      {
        "name": "锂电池",
        "change_pct": 0.85
      },
      {
        "name": "甲醇",
        "change_pct": -0.8
      },
      {
        "name": "石墨烯",
        "change_pct": 1.7
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.86
      },
      {
        "name": "石墨电极",
        "change_pct": 0.05
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.1
      },
      {
        "name": "煤化工",
        "change_pct": -0.92
      },
      {
        "name": "碳基材料",
        "change_pct": 0.88
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.07
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 62,
    "hot_rank_chg": 43,
    "stock_cnt": 5872,
    "price": "9.52",
    "change": "4.62",
    "market_id": "33",
    "circulate_market_value": "22109968000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 4.89
      },
      {
        "name": "有色 · 铜",
        "change_pct": 1.69
      },
      {
        "name": "有色 · 锑",
        "change_pct": 2.99
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.57
      },
      {
        "name": "有色 · 锌",
        "change_pct": 2.59
      },
      {
        "name": "有色金属",
        "change_pct": 0.63
      },
      {
        "name": "国企改革",
        "change_pct": 0.9
      },
      {
        "name": "白银",
        "change_pct": 3.6
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 69,
    "hot_rank_chg": -1,
    "stock_cnt": 5872,
    "price": "12.45",
    "change": "3.58",
    "market_id": "33",
    "circulate_market_value": "11619854000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.05
      },
      {
        "name": "新疆国企改革",
        "change_pct": 1.07
      },
      {
        "name": "新疆概念",
        "change_pct": 0.89
      },
      {
        "name": "光伏",
        "change_pct": 1.04
      },
      {
        "name": "风电",
        "change_pct": 0.72
      },
      {
        "name": "储能",
        "change_pct": 1.04
      },
      {
        "name": "国企改革",
        "change_pct": 0.9
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 73,
    "hot_rank_chg": 62,
    "stock_cnt": 5872,
    "price": "4.04",
    "change": "-7.34",
    "market_id": "33",
    "circulate_market_value": "2890797800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 2.02
      },
      {
        "name": "旅游",
        "change_pct": 2.41
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.06
      }
    ]
  },
  {
    "code": "002953",
    "name": "日丰股份",
    "hot_rank": 77,
    "hot_rank_chg": 13,
    "stock_cnt": 5872,
    "price": "11.06",
    "change": "-5.71",
    "market_id": "33",
    "circulate_market_value": "3111053800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "5G",
        "change_pct": 2.55
      },
      {
        "name": "充电桩",
        "change_pct": 1.44
      },
      {
        "name": "物联网",
        "change_pct": 2.13
      },
      {
        "name": "风电",
        "change_pct": 0.72
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.1
      },
      {
        "name": "机器人",
        "change_pct": 1.63
      },
      {
        "name": "华为产业链",
        "change_pct": 1.94
      },
      {
        "name": "光纤概念",
        "change_pct": 4.18
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 82,
    "hot_rank_chg": 55,
    "stock_cnt": 5872,
    "price": "9.17",
    "change": "-8.94",
    "market_id": "17",
    "circulate_market_value": "3967617400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 1.27
      },
      {
        "name": "强势人气股",
        "change_pct": 1.05
      },
      {
        "name": "光伏",
        "change_pct": 1.04
      },
      {
        "name": "无线耳机",
        "change_pct": 2.26
      },
      {
        "name": "华为产业链",
        "change_pct": 1.94
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 85,
    "hot_rank_chg": 21,
    "stock_cnt": 5872,
    "price": "5.97",
    "change": "-4.33",
    "market_id": "33",
    "circulate_market_value": "5290915000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -1.26
      },
      {
        "name": "土地流转",
        "change_pct": 0.86
      },
      {
        "name": "海南概念",
        "change_pct": 1.63
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.39
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.32
      },
      {
        "name": "大农业",
        "change_pct": 0.04
      },
      {
        "name": "水产养殖",
        "change_pct": 0.43
      },
      {
        "name": "自贸区",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "002038",
    "name": "双鹭药业",
    "hot_rank": 89,
    "hot_rank_chg": 1259,
    "stock_cnt": 5872,
    "price": "6.44",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "5486308900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "mRNA平台",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 3.86
      },
      {
        "name": "创新药",
        "change_pct": 6.63
      },
      {
        "name": "基因测序",
        "change_pct": 8.52
      },
      {
        "name": "民营医院",
        "change_pct": 3.26
      },
      {
        "name": "医药",
        "change_pct": 5.23
      },
      {
        "name": "疫苗",
        "change_pct": 13.02
      },
      {
        "name": "化学原料药",
        "change_pct": 5.0
      },
      {
        "name": "流感",
        "change_pct": 4.86
      },
      {
        "name": "长寿药NMN",
        "change_pct": 1.43
      },
      {
        "name": "辅助生殖",
        "change_pct": 5.38
      },
      {
        "name": "肝素",
        "change_pct": 5.16
      },
      {
        "name": "基因编辑",
        "change_pct": 6.22
      },
      {
        "name": "肝炎概念",
        "change_pct": 6.19
      },
      {
        "name": "医美",
        "change_pct": 4.39
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 5.22
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 3.64
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": 15.48
      },
      {
        "name": "减肥药",
        "change_pct": 6.04
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 94,
    "hot_rank_chg": 81,
    "stock_cnt": 5872,
    "price": "5.17",
    "change": "-8.17",
    "market_id": "33",
    "circulate_market_value": "11370836800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": 2.08
      },
      {
        "name": "轮胎",
        "change_pct": 0.2
      },
      {
        "name": "冷链",
        "change_pct": 1.16
      },
      {
        "name": "机器人",
        "change_pct": 1.63
      },
      {
        "name": "智能制造",
        "change_pct": 1.92
      },
      {
        "name": "工业母机",
        "change_pct": 1.41
      },
      {
        "name": "减速器",
        "change_pct": 0.68
      },
      {
        "name": "头盔",
        "change_pct": 0.77
      },
      {
        "name": "人形机器人",
        "change_pct": 1.52
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 96,
    "hot_rank_chg": -7,
    "stock_cnt": 5872,
    "price": "9.83",
    "change": "-2.96",
    "market_id": "33",
    "circulate_market_value": "4568718600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.03
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.58
      },
      {
        "name": "水利",
        "change_pct": 1.2
      },
      {
        "name": "大数据",
        "change_pct": 1.92
      },
      {
        "name": "海绵城市",
        "change_pct": 1.28
      },
      {
        "name": "风电",
        "change_pct": 0.72
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.28
      },
      {
        "name": "数字经济",
        "change_pct": 1.81
      },
      {
        "name": "大基建",
        "change_pct": 1.21
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.17
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.89
      },
      {
        "name": "国企改革",
        "change_pct": 0.9
      },
      {
        "name": "旧改",
        "change_pct": 1.51
      },
      {
        "name": "西部大开发",
        "change_pct": 0.58
      },
      {
        "name": "低空经济",
        "change_pct": 1.52
      },
      {
        "name": "房屋检测",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 98,
    "hot_rank_chg": -67,
    "stock_cnt": 5872,
    "price": "2.31",
    "change": "-2.94",
    "market_id": "33",
    "circulate_market_value": "5401787600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.56
      },
      {
        "name": "人工智能",
        "change_pct": 2.29
      },
      {
        "name": "VR&AR",
        "change_pct": 2.77
      },
      {
        "name": "京津冀",
        "change_pct": 1.12
      },
      {
        "name": "装修装饰",
        "change_pct": 1.57
      },
      {
        "name": "住房租赁",
        "change_pct": 0.78
      },
      {
        "name": "破净股",
        "change_pct": 0.9
      },
      {
        "name": "数字经济",
        "change_pct": 1.81
      },
      {
        "name": "房产经纪",
        "change_pct": 0.12
      },
      {
        "name": "物业管理",
        "change_pct": 1.22
      },
      {
        "name": "低价股",
        "change_pct": 1.6
      },
      {
        "name": "华为产业链",
        "change_pct": 1.94
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.88
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "709.40", "change": "-16.05", "market_id": "17", "circulate_market_value": "21344229000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "9.23", "change": "1.88", "market_id": "17", "circulate_market_value": "23245846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.95}, {"name": "工业大麻", "change_pct": 3.86}, {"name": "中药", "change_pct": 3.8}, {"name": "强势人气股", "change_pct": 1.05}, {"name": "保健品", "change_pct": 3.49}, {"name": "民营医院", "change_pct": 3.26}, {"name": "医药", "change_pct": 5.23}, {"name": "化学原料药", "change_pct": 5.0}, {"name": "流感", "change_pct": 4.86}, {"name": "振兴东北", "change_pct": 1.51}, {"name": "食品", "change_pct": 1.24}]}, {"code": "603259", "name": "药明康德", "hot_rank": 3, "hot_rank_chg": 14, "stock_cnt": 5872, "price": "171.16", "change": "4.37", "market_id": "17", "circulate_market_value": "423326650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 4, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "8.56", "change": "10.03", "market_id": "17", "circulate_market_value": "4102979000.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.8}, {"name": "医药商业", "change_pct": 3.1}, {"name": "医药", "change_pct": 5.23}, {"name": "流感", "change_pct": 4.86}]}, {"code": "600721", "name": "百花医药", "hot_rank": 5, "hot_rank_chg": 4, "stock_cnt": 5872, "price": "13.92", "change": "1.46", "market_id": "17", "circulate_market_value": "5352903100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 6, "hot_rank_chg": 21, "stock_cnt": 5872, "price": "8.60", "change": "9.97", "market_id": "17", "circulate_market_value": "5519335700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "粮食安全", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.02}, {"name": "农业种植", "change_pct": -1.26}, {"name": "湖南国企改革", "change_pct": 1.57}, {"name": "乡村振兴", "change_pct": 0.28}, {"name": "休闲食品", "change_pct": -0.15}, {"name": "食品", "change_pct": 1.24}, {"name": "食品安全", "change_pct": 3.26}, {"name": "社区团购", "change_pct": 1.42}, {"name": "大农业", "change_pct": 0.04}, {"name": "预制菜", "change_pct": 0.7}, {"name": "人造肉", "change_pct": 0.41}, {"name": "国企改革", "change_pct": 0.9}]}, {"code": "600206", "name": "有研新材", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "56.47", "change": "-4.08", "market_id": "17", "circulate_market_value": "47804867000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "13.89", "change": "-3.68", "market_id": "17", "circulate_market_value": "17823629000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "5.45", "change": "-3.37", "market_id": "33", "circulate_market_value": "14411126000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.05}, {"name": "装修装饰", "change_pct": 1.57}, {"name": "装配式建筑", "change_pct": 1.61}, {"name": "航天", "change_pct": 0.64}, {"name": "旧改", "change_pct": 1.51}]}, {"code": "300142", "name": "沃森生物", "hot_rank": 10, "hot_rank_chg": 59, "stock_cnt": 5872, "price": "15.12", "change": "20.00", "market_id": "33", "circulate_market_value": "23843039000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "mRNA疫苗"}, {"code": "600667", "name": "太极实业", "hot_rank": 11, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "21.41", "change": "1.37", "market_id": "17", "circulate_market_value": "44779918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 12, "hot_rank_chg": 6, "stock_cnt": 5872, "price": "35.23", "change": "1.38", "market_id": "17", "circulate_market_value": "14127230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 13, "hot_rank_chg": -10, "stock_cnt": 5872, "price": "57.21", "change": "-0.59", "market_id": "17", "circulate_market_value": "257618860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 14, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "5.98", "change": "-0.50", "market_id": "33", "circulate_market_value": "211495460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.76}, {"name": "手机产业链", "change_pct": 2.87}, {"name": "超高清视频", "change_pct": 2.04}, {"name": "苹果产业链", "change_pct": 2.97}, {"name": "电竞", "change_pct": 1.94}, {"name": "半导体", "change_pct": 1.49}, {"name": "人工智能", "change_pct": 2.29}, {"name": "互联网医疗", "change_pct": 3.73}, {"name": "VR&AR", "change_pct": 2.77}, {"name": "OLED", "change_pct": 2.17}, {"name": "京津冀", "change_pct": 1.12}, {"name": "物联网", "change_pct": 2.13}, {"name": "指纹识别", "change_pct": 2.39}, {"name": "汽车零部件", "change_pct": 1.12}, {"name": "白马股", "change_pct": 0.5}, {"name": "智能制造", "change_pct": 1.92}, {"name": "小米概念股", "change_pct": 2.23}, {"name": "国产芯片", "change_pct": 1.71}, {"name": "液晶面板/LCD", "change_pct": 1.48}, {"name": "全息概念", "change_pct": 2.37}, {"name": "理想汽车概念股", "change_pct": 1.03}, {"name": "MicroLED", "change_pct": 2.81}, {"name": "钙钛矿电池", "change_pct": 1.71}, {"name": "智能手表", "change_pct": 2.52}, {"name": "MiniLED", "change_pct": 2.66}, {"name": "传感器", "change_pct": 1.98}, {"name": "大硅片", "change_pct": -1.74}, {"name": "AI PC", "change_pct": 2.1}, {"name": "华为产业链", "change_pct": 1.94}, {"name": "回购", "change_pct": 1.92}, {"name": "光电共封装CPO", "change_pct": 4.07}, {"name": "智能眼镜/MR头显", "change_pct": 3.07}, {"name": "玻璃基板封装", "change_pct": 1.48}]}, {"code": "002900", "name": "哈三联", "hot_rank": 15, "hot_rank_chg": 29, "stock_cnt": 5872, "price": "16.79", "change": "7.42", "market_id": "33", "circulate_market_value": "2705245100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 16, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "20.24", "change": "-8.12", "market_id": "33", "circulate_market_value": "68077343000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 17, "hot_rank_chg": 11, "stock_cnt": 5872, "price": "11.99", "change": "-9.71", "market_id": "33", "circulate_market_value": "3410934500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 1.77}, {"name": "ST摘帽", "change_pct": 1.18}, {"name": "强势人气股", "change_pct": 1.05}, {"name": "教育", "change_pct": 0.89}, {"name": "阿里巴巴概念股", "change_pct": 1.9}, {"name": "职业教育", "change_pct": 1.2}, {"name": "在线教育", "change_pct": 1.0}, {"name": "华为鸿蒙", "change_pct": 1.71}, {"name": "华为产业链", "change_pct": 1.94}, {"name": "智谱AI", "change_pct": 1.39}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 18, "hot_rank_chg": 12, "stock_cnt": 5872, "price": "28.22", "change": "4.52", "market_id": "17", "circulate_market_value": "6836859400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 19, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "10.56", "change": "-6.30", "market_id": "33", "circulate_market_value": "8543240500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.7}, {"name": "大飞机", "change_pct": 0.83}, {"name": "北斗导航", "change_pct": 1.18}, {"name": "高铁轨交", "change_pct": 1.22}, {"name": "军民融合", "change_pct": 1.36}, {"name": "磁悬浮", "change_pct": 1.45}, {"name": "军工", "change_pct": 1.2}, {"name": "碳纤维", "change_pct": 0.99}, {"name": "无人机", "change_pct": 1.21}, {"name": "航天", "change_pct": 0.64}, {"name": "卫星互联网", "change_pct": 0.89}, {"name": "低空经济", "change_pct": 1.52}, {"name": "海洋经济", "change_pct": 0.95}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 20, "hot_rank_chg": -10, "stock_cnt": 5872, "price": "61.59", "change": "4.55", "market_id": "17", "circulate_market_value": "151120070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 21, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "132.93", "change": "-1.50", "market_id": "17", "circulate_market_value": "47950962000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 22, "hot_rank_chg": 49, "stock_cnt": 5872, "price": "19.27", "change": "9.99", "market_id": "33", "circulate_market_value": "22670554000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏"}, {"code": "000506", "name": "招金黄金", "hot_rank": 23, "hot_rank_chg": 19, "stock_cnt": 5872, "price": "19.47", "change": "6.05", "market_id": "33", "circulate_market_value": "18081925000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 24, "hot_rank_chg": -16, "stock_cnt": 5872, "price": "36.49", "change": "-2.75", "market_id": "33", "circulate_market_value": "39442709000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 25, "hot_rank_chg": -10, "stock_cnt": 5872, "price": "56.70", "change": "1.05", "market_id": "33", "circulate_market_value": "65602624000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 26, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "12.07", "change": "-6.00", "market_id": "17", "circulate_market_value": "8211458500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.8}, {"name": "强势人气股", "change_pct": 1.05}, {"name": "雄安新区", "change_pct": 1.43}, {"name": "煤化工", "change_pct": -0.92}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 27, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "4.73", "change": "10.00", "market_id": "33", "circulate_market_value": "9933727700.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.8}, {"name": "强势人气股", "change_pct": 1.05}, {"name": "维生素", "change_pct": 2.58}, {"name": "基因测序", "change_pct": 8.52}, {"name": "民营医院", "change_pct": 3.26}, {"name": "医药", "change_pct": 5.23}, {"name": "化学原料药", "change_pct": 5.0}, {"name": "PD-1抑制剂", "change_pct": 6.19}]}, {"code": "600584", "name": "长电科技", "hot_rank": 28, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "80.49", "change": "3.54", "market_id": "17", "circulate_market_value": "144029980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002821", "name": "凯莱英", "hot_rank": 29, "hot_rank_chg": 55, "stock_cnt": 5872, "price": "187.65", "change": "10.00", "market_id": "33", "circulate_market_value": "59493280000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "多肽CDMO"}, {"code": "002428", "name": "云南锗业", "hot_rank": 30, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "104.57", "change": "-0.12", "market_id": "33", "circulate_market_value": "68287935000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 31, "hot_rank_chg": -15, "stock_cnt": 5872, "price": "405.30", "change": "0.39", "market_id": "17", "circulate_market_value": "270939780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 32, "hot_rank_chg": 32, "stock_cnt": 5872, "price": "19.66", "change": "0.82", "market_id": "17", "circulate_market_value": "3145600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 33, "hot_rank_chg": -10, "stock_cnt": 5872, "price": "3.33", "change": "-5.93", "market_id": "33", "circulate_market_value": "15556924000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.97}, {"name": "股权转让", "change_pct": 1.27}, {"name": "房地产", "change_pct": 1.9}, {"name": "京津冀", "change_pct": 1.12}, {"name": "旅游", "change_pct": 2.41}, {"name": "国产芯片", "change_pct": 1.71}, {"name": "内存", "change_pct": 0.75}, {"name": "闪存", "change_pct": 1.14}, {"name": "IP经济/谷子经济", "change_pct": 2.06}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 34, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "34.35", "change": "4.85", "market_id": "17", "circulate_market_value": "707671590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 36, "hot_rank_chg": 127, "stock_cnt": 5872, "price": "33.25", "change": "6.26", "market_id": "33", "circulate_market_value": "22168319000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 37, "hot_rank_chg": 43, "stock_cnt": 5872, "price": "9.26", "change": "9.98", "market_id": "33", "circulate_market_value": "4610044700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.8}, {"name": "优化生育（三孩）", "change_pct": 2.73}, {"name": "农业种植", "change_pct": -1.26}, {"name": "医药", "change_pct": 5.23}, {"name": "流感", "change_pct": 4.86}, {"name": "大农业", "change_pct": 0.04}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 38, "hot_rank_chg": -12, "stock_cnt": 5872, "price": "896.73", "change": "0.13", "market_id": "33", "circulate_market_value": "995316300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600313", "name": "农发种业", "hot_rank": 39, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "6.58", "change": "-7.71", "market_id": "17", "circulate_market_value": "7120867200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.66}, {"name": "农业种植", "change_pct": -1.26}, {"name": "化肥", "change_pct": -1.22}, {"name": "转基因", "change_pct": -3.23}, {"name": "土地流转", "change_pct": 0.86}, {"name": "农垦", "change_pct": -0.68}, {"name": "乡村振兴", "change_pct": 0.28}, {"name": "大农业", "change_pct": 0.04}, {"name": "国企改革", "change_pct": 0.9}, {"name": "大豆", "change_pct": -2.51}]}, {"code": "603538", "name": "美诺华", "hot_rank": 40, "hot_rank_chg": 20, "stock_cnt": 5872, "price": "31.50", "change": "5.25", "market_id": "17", "circulate_market_value": "10612978500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000505", "name": "京粮控股", "hot_rank": 41, "hot_rank_chg": 10, "stock_cnt": 5872, "price": "6.99", "change": "-6.43", "market_id": "33", "circulate_market_value": "4420338500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 0.67}, {"name": "京津冀", "change_pct": 1.12}, {"name": "调味品", "change_pct": 0.28}, {"name": "海南概念", "change_pct": 1.63}, {"name": "休闲食品", "change_pct": -0.15}, {"name": "食品", "change_pct": 1.24}, {"name": "人造肉", "change_pct": 0.41}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 42, "hot_rank_chg": -17, "stock_cnt": 5872, "price": "35.76", "change": "1.22", "market_id": "33", "circulate_market_value": "102276199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 43, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "199.80", "change": "1.37", "market_id": "33", "circulate_market_value": "276987080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 44, "hot_rank_chg": -15, "stock_cnt": 5872, "price": "34.87", "change": "6.96", "market_id": "17", "circulate_market_value": "126035640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 45, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "6.89", "change": "1.03", "market_id": "17", "circulate_market_value": "16472697000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.85}, {"name": "强势人气股", "change_pct": 1.05}, {"name": "国企改革", "change_pct": 0.9}, {"name": "河南国企改革", "change_pct": 0.39}]}, {"code": "603395", "name": "红四方", "hot_rank": 46, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "28.13", "change": "-3.00", "market_id": "17", "circulate_market_value": "1828450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 47, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "50.85", "change": "-3.44", "market_id": "17", "circulate_market_value": "324372270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 48, "hot_rank_chg": -28, "stock_cnt": 5872, "price": "62.93", "change": "-6.78", "market_id": "17", "circulate_market_value": "74414041000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 49, "hot_rank_chg": -15, "stock_cnt": 5872, "price": "14.97", "change": "2.67", "market_id": "17", "circulate_market_value": "22046421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300122", "name": "智飞生物", "hot_rank": 50, "hot_rank_chg": 139, "stock_cnt": 5872, "price": "14.48", "change": "19.97", "market_id": "33", "circulate_market_value": "20479154000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "默沙东代理"}, {"code": "002747", "name": "埃斯顿", "hot_rank": 51, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "33.78", "change": "-6.27", "market_id": "33", "circulate_market_value": "26430659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 52, "hot_rank_chg": 77, "stock_cnt": 5872, "price": "46.18", "change": "8.61", "market_id": "33", "circulate_market_value": "54236456000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 53, "hot_rank_chg": 60, "stock_cnt": 5872, "price": "81.05", "change": "5.04", "market_id": "33", "circulate_market_value": "2650208800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300765", "name": "石药创新", "hot_rank": 54, "hot_rank_chg": 229, "stock_cnt": 5872, "price": "51.78", "change": "20.00", "market_id": "33", "circulate_market_value": "72729823000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}, {"code": "600176", "name": "中国巨石", "hot_rank": 55, "hot_rank_chg": -18, "stock_cnt": 5872, "price": "40.95", "change": "0.96", "market_id": "17", "circulate_market_value": "162636490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300139", "name": "晓程科技", "hot_rank": 56, "hot_rank_chg": 30, "stock_cnt": 5872, "price": "50.01", "change": "7.13", "market_id": "33", "circulate_market_value": "11685297800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 57, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "11.23", "change": "-3.27", "market_id": "17", "circulate_market_value": "20092023000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.28}, {"name": "纯碱", "change_pct": 0.35}, {"name": "食品", "change_pct": 1.24}, {"name": "土壤修复", "change_pct": 1.68}, {"name": "东数西算/算力", "change_pct": 1.17}, {"name": "OpenClaw概念", "change_pct": 1.23}, {"name": "DeepSeek概念股", "change_pct": 1.68}]}, {"code": "600460", "name": "士兰微", "hot_rank": 58, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "33.02", "change": "-4.26", "market_id": "17", "circulate_market_value": "54947652000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603290", "name": "斯达半导", "hot_rank": 59, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "96.62", "change": "-3.68", "market_id": "17", "circulate_market_value": "23137926000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601011", "name": "宝泰隆", "hot_rank": 60, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "3.16", "change": "3.95", "market_id": "17", "circulate_market_value": "6053499900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.85}, {"name": "锂电池", "change_pct": 0.85}, {"name": "甲醇", "change_pct": -0.8}, {"name": "石墨烯", "change_pct": 1.7}, {"name": "氢能源/燃料电池", "change_pct": 0.86}, {"name": "石墨电极", "change_pct": 0.05}, {"name": "新能源汽车", "change_pct": 1.1}, {"name": "煤化工", "change_pct": -0.92}, {"name": "碳基材料", "change_pct": 0.88}, {"name": "智能眼镜/MR头显", "change_pct": 3.07}]}, {"code": "002156", "name": "通富微电", "hot_rank": 61, "hot_rank_chg": -29, "stock_cnt": 5872, "price": "64.30", "change": "1.12", "market_id": "33", "circulate_market_value": "97572178000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 62, "hot_rank_chg": 43, "stock_cnt": 5872, "price": "9.52", "change": "4.62", "market_id": "33", "circulate_market_value": "22109968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 4.89}, {"name": "有色 · 铜", "change_pct": 1.69}, {"name": "有色 · 锑", "change_pct": 2.99}, {"name": "湖南国企改革", "change_pct": 1.57}, {"name": "有色 · 锌", "change_pct": 2.59}, {"name": "有色金属", "change_pct": 0.63}, {"name": "国企改革", "change_pct": 0.9}, {"name": "白银", "change_pct": 3.6}]}, {"code": "001309", "name": "德明利", "hot_rank": 63, "hot_rank_chg": -18, "stock_cnt": 5872, "price": "398.68", "change": "1.24", "market_id": "33", "circulate_market_value": "65793783000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 64, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "85.14", "change": "2.25", "market_id": "17", "circulate_market_value": "35449546000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601069", "name": "西部黄金", "hot_rank": 65, "hot_rank_chg": 87, "stock_cnt": 5872, "price": "30.88", "change": "4.82", "market_id": "17", "circulate_market_value": "27396379000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 66, "hot_rank_chg": -25, "stock_cnt": 5872, "price": "280.92", "change": "1.27", "market_id": "33", "circulate_market_value": "305749970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 67, "hot_rank_chg": -34, "stock_cnt": 5872, "price": "35.99", "change": "-9.75", "market_id": "17", "circulate_market_value": "11587814800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 68, "hot_rank_chg": -18, "stock_cnt": 5872, "price": "17.55", "change": "1.09", "market_id": "33", "circulate_market_value": "58312538000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 69, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "12.45", "change": "3.58", "market_id": "33", "circulate_market_value": "11619854000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.05}, {"name": "新疆国企改革", "change_pct": 1.07}, {"name": "新疆概念", "change_pct": 0.89}, {"name": "光伏", "change_pct": 1.04}, {"name": "风电", "change_pct": 0.72}, {"name": "储能", "change_pct": 1.04}, {"name": "国企改革", "change_pct": 0.9}]}, {"code": "600522", "name": "中天科技", "hot_rank": 70, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "33.05", "change": "3.22", "market_id": "17", "circulate_market_value": "112797986000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 71, "hot_rank_chg": 75, "stock_cnt": 5872, "price": "51.99", "change": "7.31", "market_id": "33", "circulate_market_value": "73827461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 72, "hot_rank_chg": 9, "stock_cnt": 5872, "price": "65.87", "change": "-0.44", "market_id": "33", "circulate_market_value": "95738884000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000802", "name": "北京文化", "hot_rank": 73, "hot_rank_chg": 62, "stock_cnt": 5872, "price": "4.04", "change": "-7.34", "market_id": "33", "circulate_market_value": "2890797800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 2.02}, {"name": "旅游", "change_pct": 2.41}, {"name": "IP经济/谷子经济", "change_pct": 2.06}]}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 74, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "45.72", "change": "7.02", "market_id": "17", "circulate_market_value": "76074028000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 75, "hot_rank_chg": 28, "stock_cnt": 5872, "price": "57.04", "change": "10.01", "market_id": "33", "circulate_market_value": "21019428000.00", "change_type": "1", "change_section": "15", "change_days": "8", "change_reason": "覆铜板"}, {"code": "603186", "name": "华正新材", "hot_rank": 76, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "169.53", "change": "-3.13", "market_id": "17", "circulate_market_value": "26580697000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002953", "name": "日丰股份", "hot_rank": 77, "hot_rank_chg": 13, "stock_cnt": 5872, "price": "11.06", "change": "-5.71", "market_id": "33", "circulate_market_value": "3111053800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "5G", "change_pct": 2.55}, {"name": "充电桩", "change_pct": 1.44}, {"name": "物联网", "change_pct": 2.13}, {"name": "风电", "change_pct": 0.72}, {"name": "新能源汽车", "change_pct": 1.1}, {"name": "机器人", "change_pct": 1.63}, {"name": "华为产业链", "change_pct": 1.94}, {"name": "光纤概念", "change_pct": 4.18}]}, {"code": "600183", "name": "生益科技", "hot_rank": 78, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "128.60", "change": "2.50", "market_id": "17", "circulate_market_value": "310150900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 79, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "39.17", "change": "3.24", "market_id": "17", "circulate_market_value": "57266336000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 80, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "37.90", "change": "1.23", "market_id": "33", "circulate_market_value": "59660496000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301655", "name": "绿控传动", "hot_rank": 81, "hot_rank_chg": 1357, "stock_cnt": 5872, "price": "36.15", "change": "325.29", "market_id": "33", "circulate_market_value": "1625600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 82, "hot_rank_chg": 55, "stock_cnt": 5872, "price": "9.17", "change": "-8.94", "market_id": "17", "circulate_market_value": "3967617400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 1.27}, {"name": "强势人气股", "change_pct": 1.05}, {"name": "光伏", "change_pct": 1.04}, {"name": "无线耳机", "change_pct": 2.26}, {"name": "华为产业链", "change_pct": 1.94}, {"name": "光伏胶膜", "change_pct": 0.42}]}, {"code": "688137", "name": "近岸蛋白", "hot_rank": 83, "hot_rank_chg": 173, "stock_cnt": 5872, "price": "67.49", "change": "20.00", "market_id": "17", "circulate_market_value": "4718728900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "肿瘤疫苗"}, {"code": "603580", "name": "艾艾精工", "hot_rank": 84, "hot_rank_chg": -37, "stock_cnt": 5872, "price": "74.79", "change": "10.00", "market_id": "17", "circulate_market_value": "9773048600.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "控制权拟变更"}, {"code": "300189", "name": "神农种业", "hot_rank": 85, "hot_rank_chg": 21, "stock_cnt": 5872, "price": "5.97", "change": "-4.33", "market_id": "33", "circulate_market_value": "5290915000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -1.26}, {"name": "土地流转", "change_pct": 0.86}, {"name": "海南概念", "change_pct": 1.63}, {"name": "自由贸易港", "change_pct": 1.39}, {"name": "海南自由贸易港", "change_pct": 1.32}, {"name": "大农业", "change_pct": 0.04}, {"name": "水产养殖", "change_pct": 0.43}, {"name": "自贸区", "change_pct": 1.32}]}, {"code": "603118", "name": "共进股份", "hot_rank": 86, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "17.42", "change": "1.81", "market_id": "17", "circulate_market_value": "13714355000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600783", "name": "鲁信创投", "hot_rank": 87, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "18.32", "change": "-9.26", "market_id": "17", "circulate_market_value": "13636662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 88, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "18.39", "change": "2.17", "market_id": "17", "circulate_market_value": "321104890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002038", "name": "双鹭药业", "hot_rank": 89, "hot_rank_chg": 1259, "stock_cnt": 5872, "price": "6.44", "change": "10.09", "market_id": "33", "circulate_market_value": "5486308900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "mRNA平台", "xgb_concepts": [{"name": "工业大麻", "change_pct": 3.86}, {"name": "创新药", "change_pct": 6.63}, {"name": "基因测序", "change_pct": 8.52}, {"name": "民营医院", "change_pct": 3.26}, {"name": "医药", "change_pct": 5.23}, {"name": "疫苗", "change_pct": 13.02}, {"name": "化学原料药", "change_pct": 5.0}, {"name": "流感", "change_pct": 4.86}, {"name": "长寿药NMN", "change_pct": 1.43}, {"name": "辅助生殖", "change_pct": 5.38}, {"name": "肝素", "change_pct": 5.16}, {"name": "基因编辑", "change_pct": 6.22}, {"name": "肝炎概念", "change_pct": 6.19}, {"name": "医美", "change_pct": 4.39}, {"name": "阿尔茨海默病", "change_pct": 5.22}, {"name": "新冠病毒防治", "change_pct": 3.64}, {"name": "肿瘤疫苗", "change_pct": 15.48}, {"name": "减肥药", "change_pct": 6.04}]}, {"code": "603881", "name": "数据港", "hot_rank": 90, "hot_rank_chg": -34, "stock_cnt": 5872, "price": "29.08", "change": "1.50", "market_id": "17", "circulate_market_value": "25068484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688185", "name": "康希诺", "hot_rank": 91, "hot_rank_chg": 199, "stock_cnt": 5872, "price": "64.43", "change": "20.00", "market_id": "17", "circulate_market_value": "7369046000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "mRNA技术"}, {"code": "603127", "name": "昭衍新药", "hot_rank": 92, "hot_rank_chg": 58, "stock_cnt": 5872, "price": "53.54", "change": "7.51", "market_id": "17", "circulate_market_value": "33607953000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 93, "hot_rank_chg": -17, "stock_cnt": 5872, "price": "414.36", "change": "0.69", "market_id": "33", "circulate_market_value": "519708190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 94, "hot_rank_chg": 81, "stock_cnt": 5872, "price": "5.17", "change": "-8.17", "market_id": "33", "circulate_market_value": "11370836800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": 2.08}, {"name": "轮胎", "change_pct": 0.2}, {"name": "冷链", "change_pct": 1.16}, {"name": "机器人", "change_pct": 1.63}, {"name": "智能制造", "change_pct": 1.92}, {"name": "工业母机", "change_pct": 1.41}, {"name": "减速器", "change_pct": 0.68}, {"name": "头盔", "change_pct": 0.77}, {"name": "人形机器人", "change_pct": 1.52}]}, {"code": "002896", "name": "中大力德", "hot_rank": 95, "hot_rank_chg": 156, "stock_cnt": 5872, "price": "69.57", "change": "-8.94", "market_id": "33", "circulate_market_value": "13672082000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000779", "name": "甘咨询", "hot_rank": 96, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "9.83", "change": "-2.96", "market_id": "33", "circulate_market_value": "4568718600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.03}, {"name": "云计算数据中心", "change_pct": 1.58}, {"name": "水利", "change_pct": 1.2}, {"name": "大数据", "change_pct": 1.92}, {"name": "海绵城市", "change_pct": 1.28}, {"name": "风电", "change_pct": 0.72}, {"name": "乡村振兴", "change_pct": 0.28}, {"name": "数字经济", "change_pct": 1.81}, {"name": "大基建", "change_pct": 1.21}, {"name": "东数西算/算力", "change_pct": 1.17}, {"name": "新型城镇化", "change_pct": 1.89}, {"name": "国企改革", "change_pct": 0.9}, {"name": "旧改", "change_pct": 1.51}, {"name": "西部大开发", "change_pct": 0.58}, {"name": "低空经济", "change_pct": 1.52}, {"name": "房屋检测", "change_pct": 0.75}]}, {"code": "301047", "name": "义翘神州", "hot_rank": 97, "hot_rank_chg": 178, "stock_cnt": 5872, "price": "134.26", "change": "20.00", "market_id": "33", "circulate_market_value": "16054894000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CRO概念"}, {"code": "000560", "name": "我爱我家", "hot_rank": 98, "hot_rank_chg": -67, "stock_cnt": 5872, "price": "2.31", "change": "-2.94", "market_id": "33", "circulate_market_value": "5401787600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 1.56}, {"name": "人工智能", "change_pct": 2.29}, {"name": "VR&AR", "change_pct": 2.77}, {"name": "京津冀", "change_pct": 1.12}, {"name": "装修装饰", "change_pct": 1.57}, {"name": "住房租赁", "change_pct": 0.78}, {"name": "破净股", "change_pct": 0.9}, {"name": "数字经济", "change_pct": 1.81}, {"name": "房产经纪", "change_pct": 0.12}, {"name": "物业管理", "change_pct": 1.22}, {"name": "低价股", "change_pct": 1.6}, {"name": "华为产业链", "change_pct": 1.94}, {"name": "人工智能大模型", "change_pct": 1.88}]}, {"code": "601138", "name": "工业富联", "hot_rank": 99, "hot_rank_chg": -37, "stock_cnt": 5872, "price": "62.60", "change": "1.25", "market_id": "17", "circulate_market_value": "1242240180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 100, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "31.47", "change": "-7.66", "market_id": "17", "circulate_market_value": "49018695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};