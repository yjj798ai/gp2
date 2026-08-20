const UPDATE_TIME = "2026-08-20 07:37";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 4.46,
    "rate": 0,
    "tag": "23家涨停",
    "hotTag": "连续104天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.95,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续274天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "生物疫苗",
    "rise": 8.06,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885845"
  },
  {
    "name": "商业航天",
    "rise": 0.42,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续203天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "黄金概念",
    "rise": 2.13,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "存储芯片",
    "rise": 0.25,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续227天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "粮食概念",
    "rise": 0.92,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "PCB概念",
    "rise": 0.73,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续97天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "光纤概念",
    "rise": 2.61,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续103天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "AI应用",
    "rise": 1.47,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续32天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "CRO概念",
    "rise": 5.37,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "生物科技ETF",
    "code": "885927"
  },
  {
    "name": "MLCC概念",
    "rise": -0.12,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "算力租赁",
    "rise": 0.84,
    "rate": 0,
    "tag": "",
    "hotTag": "连续138天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": 0.67,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续438天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": 1.09,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "猪肉",
    "rise": 2.02,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "ST板块",
    "rise": 1.73,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "细胞免疫治疗",
    "rise": 6.93,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885769"
  },
  {
    "name": "培育钻石",
    "rise": -0.24,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "农业种植",
    "rise": 1.45,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "农业ETF",
    "code": "885812"
  }
];
const THS_EVENTS = [
  {
    "title": "抗癌疫苗，大消息！美股医药巨头，盘前暴涨超100%",
    "desc": "",
    "heat": 949328,
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
    "heat": 377750,
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
    "heat": 314550,
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
    "title": "公积金使用扩围，更好服务安居消费",
    "desc": "",
    "heat": 201839,
    "direction": "公积金新政",
    "themes": [
      "房地产",
      "租售同权"
    ],
    "stocks": [
      {
        "name": "城投控股",
        "code": "600649",
        "chg": 10.05291
      }
    ]
  },
  {
    "title": "“六张网”建设提速 上市公司掘金新机遇",
    "desc": "",
    "heat": 73026,
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
  },
  {
    "title": "AI 芯片需求激增，消息称三星部分先进制程代工最高涨价15%",
    "desc": "",
    "heat": 72705,
    "direction": "晶圆代工",
    "themes": [
      "先进封装",
      "晶圆代工",
      "EDA",
      "混合键合"
    ],
    "stocks": [
      {
        "name": "联得装备",
        "code": "300545",
        "chg": 12.308229
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "肿瘤疫苗",
    "change": "+15.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+12.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因测序",
    "change": "+7.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+7.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "精准医疗",
    "change": "+7.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+6.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "猴痘概念",
    "change": "+6.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+6.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "体外诊断",
    "change": "+5.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+5.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+5.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+5.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+5.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+4.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+4.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI医疗",
    "change": "+4.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "辅助生殖",
    "change": "+4.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医疗器械",
    "change": "+4.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+4.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+4.14%",
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
    "hot_rank": 3,
    "hot_rank_chg": 1,
    "stock_cnt": 5821,
    "price": "9.08",
    "change": "0.22",
    "market_id": "17",
    "circulate_market_value": "22868070000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.83
      },
      {
        "name": "工业大麻",
        "change_pct": 2.89
      },
      {
        "name": "中药",
        "change_pct": 3.04
      },
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "保健品",
        "change_pct": 3.06
      },
      {
        "name": "民营医院",
        "change_pct": 2.65
      },
      {
        "name": "医药",
        "change_pct": 4.09
      },
      {
        "name": "化学原料药",
        "change_pct": 3.84
      },
      {
        "name": "流感",
        "change_pct": 3.8
      },
      {
        "name": "振兴东北",
        "change_pct": 1.46
      },
      {
        "name": "食品",
        "change_pct": 1.52
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 5,
    "hot_rank_chg": 7,
    "stock_cnt": 5821,
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
        "change_pct": 3.04
      },
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "医药商业",
        "change_pct": 2.33
      },
      {
        "name": "医药",
        "change_pct": 4.09
      },
      {
        "name": "流感",
        "change_pct": 3.8
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 8,
    "hot_rank_chg": 19,
    "stock_cnt": 5821,
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
        "change_pct": 0.41
      },
      {
        "name": "农业种植",
        "change_pct": 1.5
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.41
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.09
      },
      {
        "name": "休闲食品",
        "change_pct": 0.2
      },
      {
        "name": "食品",
        "change_pct": 1.52
      },
      {
        "name": "食品安全",
        "change_pct": 2.55
      },
      {
        "name": "社区团购",
        "change_pct": 1.76
      },
      {
        "name": "大农业",
        "change_pct": 0.87
      },
      {
        "name": "预制菜",
        "change_pct": 0.96
      },
      {
        "name": "人造肉",
        "change_pct": 1.34
      },
      {
        "name": "国企改革",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 9,
    "hot_rank_chg": -2,
    "stock_cnt": 5821,
    "price": "5.90",
    "change": "-1.83",
    "market_id": "33",
    "circulate_market_value": "208666090000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.96
      },
      {
        "name": "手机产业链",
        "change_pct": 2.16
      },
      {
        "name": "超高清视频",
        "change_pct": 1.27
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.41
      },
      {
        "name": "电竞",
        "change_pct": 1.44
      },
      {
        "name": "半导体",
        "change_pct": 0.6
      },
      {
        "name": "人工智能",
        "change_pct": 1.55
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.94
      },
      {
        "name": "VR&AR",
        "change_pct": 1.98
      },
      {
        "name": "OLED",
        "change_pct": 1.33
      },
      {
        "name": "京津冀",
        "change_pct": 1.19
      },
      {
        "name": "物联网",
        "change_pct": 1.56
      },
      {
        "name": "指纹识别",
        "change_pct": 1.86
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.83
      },
      {
        "name": "白马股",
        "change_pct": 0.43
      },
      {
        "name": "智能制造",
        "change_pct": 1.43
      },
      {
        "name": "小米概念股",
        "change_pct": 1.42
      },
      {
        "name": "国产芯片",
        "change_pct": 0.79
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.66
      },
      {
        "name": "全息概念",
        "change_pct": 1.84
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.76
      },
      {
        "name": "MicroLED",
        "change_pct": 2.1
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.24
      },
      {
        "name": "智能手表",
        "change_pct": 1.77
      },
      {
        "name": "MiniLED",
        "change_pct": 1.97
      },
      {
        "name": "传感器",
        "change_pct": 1.09
      },
      {
        "name": "大硅片",
        "change_pct": -2.65
      },
      {
        "name": "AI PC",
        "change_pct": 1.51
      },
      {
        "name": "华为产业链",
        "change_pct": 1.32
      },
      {
        "name": "回购",
        "change_pct": 1.53
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 3.62
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.16
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.64
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 10,
    "hot_rank_chg": 1,
    "stock_cnt": 5821,
    "price": "5.55",
    "change": "-1.60",
    "market_id": "33",
    "circulate_market_value": "14675551000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "装修装饰",
        "change_pct": 1.43
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.88
      },
      {
        "name": "航天",
        "change_pct": -0.31
      },
      {
        "name": "旧改",
        "change_pct": 1.61
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 11,
    "hot_rank_chg": 24,
    "stock_cnt": 5821,
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
        "change_pct": 3.04
      },
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "维生素",
        "change_pct": 2.2
      },
      {
        "name": "基因测序",
        "change_pct": 7.63
      },
      {
        "name": "民营医院",
        "change_pct": 2.65
      },
      {
        "name": "医药",
        "change_pct": 4.09
      },
      {
        "name": "化学原料药",
        "change_pct": 3.84
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 5.35
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 27,
    "hot_rank_chg": -5,
    "stock_cnt": 5821,
    "price": "10.25",
    "change": "-9.05",
    "market_id": "33",
    "circulate_market_value": "8292444600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 1.42
      },
      {
        "name": "大飞机",
        "change_pct": 0.05
      },
      {
        "name": "北斗导航",
        "change_pct": 0.32
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.07
      },
      {
        "name": "军民融合",
        "change_pct": 0.63
      },
      {
        "name": "磁悬浮",
        "change_pct": 1.11
      },
      {
        "name": "军工",
        "change_pct": 0.5
      },
      {
        "name": "碳纤维",
        "change_pct": 0.69
      },
      {
        "name": "无人机",
        "change_pct": 0.46
      },
      {
        "name": "航天",
        "change_pct": -0.31
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.09
      },
      {
        "name": "低空经济",
        "change_pct": 0.96
      },
      {
        "name": "海洋经济",
        "change_pct": 0.36
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 31,
    "hot_rank_chg": -3,
    "stock_cnt": 5821,
    "price": "11.95",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "3399555200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 1.6
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.84
      },
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "教育",
        "change_pct": 0.62
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.38
      },
      {
        "name": "职业教育",
        "change_pct": 0.85
      },
      {
        "name": "在线教育",
        "change_pct": 0.36
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.09
      },
      {
        "name": "华为产业链",
        "change_pct": 1.32
      },
      {
        "name": "智谱AI",
        "change_pct": 0.61
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 39,
    "hot_rank_chg": -16,
    "stock_cnt": 5821,
    "price": "3.25",
    "change": "-8.19",
    "market_id": "33",
    "circulate_market_value": "15183184000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.53
      },
      {
        "name": "股权转让",
        "change_pct": 0.87
      },
      {
        "name": "房地产",
        "change_pct": 2.26
      },
      {
        "name": "京津冀",
        "change_pct": 1.19
      },
      {
        "name": "旅游",
        "change_pct": 2.56
      },
      {
        "name": "国产芯片",
        "change_pct": 0.79
      },
      {
        "name": "内存",
        "change_pct": -0.06
      },
      {
        "name": "闪存",
        "change_pct": 0.42
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.57
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 43,
    "hot_rank_chg": -5,
    "stock_cnt": 5821,
    "price": "6.92",
    "change": "-2.94",
    "market_id": "17",
    "circulate_market_value": "7488814700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.54
      },
      {
        "name": "农业种植",
        "change_pct": 1.5
      },
      {
        "name": "化肥",
        "change_pct": -0.13
      },
      {
        "name": "转基因",
        "change_pct": 0.23
      },
      {
        "name": "土地流转",
        "change_pct": 2.01
      },
      {
        "name": "农垦",
        "change_pct": 1.27
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.09
      },
      {
        "name": "大农业",
        "change_pct": 0.87
      },
      {
        "name": "国企改革",
        "change_pct": 0.93
      },
      {
        "name": "大豆",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 46,
    "hot_rank_chg": 112,
    "stock_cnt": 5821,
    "price": "7.50",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "8540679800.00",
    "change_type": "1",
    "change_section": "14",
    "change_days": "8",
    "change_reason": "特高压",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.94
      },
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "光伏",
        "change_pct": 0.69
      },
      {
        "name": "特高压",
        "change_pct": 0.38
      },
      {
        "name": "智能电网",
        "change_pct": 1.1
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 51,
    "hot_rank_chg": 2,
    "stock_cnt": 5821,
    "price": "11.02",
    "change": "-5.08",
    "market_id": "17",
    "circulate_market_value": "19716304000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.26
      },
      {
        "name": "纯碱",
        "change_pct": 0.86
      },
      {
        "name": "食品",
        "change_pct": 1.52
      },
      {
        "name": "土壤修复",
        "change_pct": 1.53
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.51
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.26
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.89
      }
    ]
  },
  {
    "code": "601011",
    "name": "宝泰隆",
    "hot_rank": 52,
    "hot_rank_chg": 9,
    "stock_cnt": 5821,
    "price": "3.20",
    "change": "5.26",
    "market_id": "17",
    "circulate_market_value": "6130126500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.54
      },
      {
        "name": "锂电池",
        "change_pct": 0.44
      },
      {
        "name": "甲醇",
        "change_pct": 0.37
      },
      {
        "name": "石墨烯",
        "change_pct": 1.42
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.62
      },
      {
        "name": "石墨电极",
        "change_pct": 0.29
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.76
      },
      {
        "name": "煤化工",
        "change_pct": -0.0
      },
      {
        "name": "碳基材料",
        "change_pct": 0.36
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 58,
    "hot_rank_chg": -15,
    "stock_cnt": 5821,
    "price": "7.11",
    "change": "4.25",
    "market_id": "17",
    "circulate_market_value": "16998676000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.54
      },
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "国企改革",
        "change_pct": 0.93
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.55
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 65,
    "hot_rank_chg": -14,
    "stock_cnt": 5821,
    "price": "7.49",
    "change": "0.27",
    "market_id": "33",
    "circulate_market_value": "4736528700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 1.21
      },
      {
        "name": "京津冀",
        "change_pct": 1.19
      },
      {
        "name": "调味品",
        "change_pct": 1.26
      },
      {
        "name": "海南概念",
        "change_pct": 1.98
      },
      {
        "name": "休闲食品",
        "change_pct": 0.2
      },
      {
        "name": "食品",
        "change_pct": 1.52
      },
      {
        "name": "人造肉",
        "change_pct": 1.34
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 67,
    "hot_rank_chg": 13,
    "stock_cnt": 5821,
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
        "change_pct": 3.04
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.38
      },
      {
        "name": "农业种植",
        "change_pct": 1.5
      },
      {
        "name": "医药",
        "change_pct": 4.09
      },
      {
        "name": "流感",
        "change_pct": 3.8
      },
      {
        "name": "大农业",
        "change_pct": 0.87
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 72,
    "hot_rank_chg": -4,
    "stock_cnt": 5821,
    "price": "12.31",
    "change": "2.41",
    "market_id": "33",
    "circulate_market_value": "11489189000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "新疆国企改革",
        "change_pct": 1.43
      },
      {
        "name": "新疆概念",
        "change_pct": 0.94
      },
      {
        "name": "光伏",
        "change_pct": 0.69
      },
      {
        "name": "风电",
        "change_pct": 0.42
      },
      {
        "name": "储能",
        "change_pct": 0.67
      },
      {
        "name": "国企改革",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 79,
    "hot_rank_chg": -2,
    "stock_cnt": 5821,
    "price": "6.05",
    "change": "0.33",
    "market_id": "17",
    "circulate_market_value": "74996339000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.54
      },
      {
        "name": "核电",
        "change_pct": 0.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.07
      },
      {
        "name": "水电",
        "change_pct": 0.09
      },
      {
        "name": "火电",
        "change_pct": -0.03
      },
      {
        "name": "光伏",
        "change_pct": 0.69
      },
      {
        "name": "风电",
        "change_pct": 0.42
      },
      {
        "name": "国企改革",
        "change_pct": 0.93
      },
      {
        "name": "算电协同",
        "change_pct": 0.43
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 82,
    "hot_rank_chg": 17,
    "stock_cnt": 5821,
    "price": "9.79",
    "change": "-5.41",
    "market_id": "17",
    "circulate_market_value": "35123287000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": 1.37
      },
      {
        "name": "OLED",
        "change_pct": 1.33
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.66
      },
      {
        "name": "国企改革",
        "change_pct": 0.93
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.64
      },
      {
        "name": "陕西国企改革",
        "change_pct": 0.66
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 84,
    "hot_rank_chg": 21,
    "stock_cnt": 5821,
    "price": "9.47",
    "change": "4.07",
    "market_id": "33",
    "circulate_market_value": "21993845000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 4.88
      },
      {
        "name": "有色 · 铜",
        "change_pct": 1.21
      },
      {
        "name": "有色 · 锑",
        "change_pct": 2.13
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.41
      },
      {
        "name": "有色 · 锌",
        "change_pct": 1.96
      },
      {
        "name": "有色金属",
        "change_pct": 0.09
      },
      {
        "name": "国企改革",
        "change_pct": 0.93
      },
      {
        "name": "白银",
        "change_pct": 2.95
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 87,
    "hot_rank_chg": 10,
    "stock_cnt": 5821,
    "price": "4.60",
    "change": "-0.65",
    "market_id": "33",
    "circulate_market_value": "26932073000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.76
      },
      {
        "name": "人工智能",
        "change_pct": 1.55
      },
      {
        "name": "水利",
        "change_pct": 0.96
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.35
      },
      {
        "name": "大数据",
        "change_pct": 1.2
      },
      {
        "name": "园林",
        "change_pct": 1.74
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 1.42
      },
      {
        "name": "数字经济",
        "change_pct": 1.26
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.32
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.76
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.32
      },
      {
        "name": "快手概念股",
        "change_pct": 0.77
      },
      {
        "name": "IGBT",
        "change_pct": 0.68
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.38
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.01
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.13
      },
      {
        "name": "氮化镓",
        "change_pct": 0.64
      },
      {
        "name": "AI营销",
        "change_pct": 1.09
      },
      {
        "name": "多模态",
        "change_pct": 1.46
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.74
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.69
      },
      {
        "name": "区块链",
        "change_pct": 1.35
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 90,
    "hot_rank_chg": 16,
    "stock_cnt": 5821,
    "price": "6.34",
    "change": "1.60",
    "market_id": "33",
    "circulate_market_value": "5618827700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 1.5
      },
      {
        "name": "土地流转",
        "change_pct": 2.01
      },
      {
        "name": "海南概念",
        "change_pct": 1.98
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.89
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.95
      },
      {
        "name": "大农业",
        "change_pct": 0.87
      },
      {
        "name": "水产养殖",
        "change_pct": 0.86
      },
      {
        "name": "自贸区",
        "change_pct": 1.54
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 92,
    "hot_rank_chg": 45,
    "stock_cnt": 5821,
    "price": "9.06",
    "change": "-10.03",
    "market_id": "17",
    "circulate_market_value": "3920023300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.87
      },
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "光伏",
        "change_pct": 0.69
      },
      {
        "name": "无线耳机",
        "change_pct": 1.51
      },
      {
        "name": "华为产业链",
        "change_pct": 1.32
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.36
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 94,
    "hot_rank_chg": 81,
    "stock_cnt": 5821,
    "price": "5.12",
    "change": "-9.06",
    "market_id": "33",
    "circulate_market_value": "11260867400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": 1.54
      },
      {
        "name": "轮胎",
        "change_pct": 0.32
      },
      {
        "name": "冷链",
        "change_pct": 1.27
      },
      {
        "name": "机器人",
        "change_pct": 1.02
      },
      {
        "name": "智能制造",
        "change_pct": 1.43
      },
      {
        "name": "工业母机",
        "change_pct": 0.7
      },
      {
        "name": "减速器",
        "change_pct": 0.02
      },
      {
        "name": "头盔",
        "change_pct": 0.29
      },
      {
        "name": "人形机器人",
        "change_pct": 0.89
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 97,
    "hot_rank_chg": -32,
    "stock_cnt": 5821,
    "price": "7.79",
    "change": "5.13",
    "market_id": "33",
    "circulate_market_value": "5667880900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 1.27
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.88
      },
      {
        "name": "风电",
        "change_pct": 0.42
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.45
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.09
      },
      {
        "name": "建筑节能",
        "change_pct": 1.67
      },
      {
        "name": "旧改",
        "change_pct": 1.61
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 98,
    "hot_rank_chg": 37,
    "stock_cnt": 5821,
    "price": "4.13",
    "change": "-5.28",
    "market_id": "33",
    "circulate_market_value": "2955196700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 1.68
      },
      {
        "name": "旅游",
        "change_pct": 2.56
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.57
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5821, "price": "687.00", "change": "-18.70", "market_id": "17", "circulate_market_value": "20670264000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5821, "price": "56.70", "change": "-3.69", "market_id": "17", "circulate_market_value": "47999574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5821, "price": "9.08", "change": "0.22", "market_id": "17", "circulate_market_value": "22868070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.83}, {"name": "工业大麻", "change_pct": 2.89}, {"name": "中药", "change_pct": 3.04}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "保健品", "change_pct": 3.06}, {"name": "民营医院", "change_pct": 2.65}, {"name": "医药", "change_pct": 4.09}, {"name": "化学原料药", "change_pct": 3.84}, {"name": "流感", "change_pct": 3.8}, {"name": "振兴东北", "change_pct": 1.46}, {"name": "食品", "change_pct": 1.52}]}, {"code": "600721", "name": "百花医药", "hot_rank": 4, "hot_rank_chg": 5, "stock_cnt": 5821, "price": "13.66", "change": "-0.44", "market_id": "17", "circulate_market_value": "5252920700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 5, "hot_rank_chg": 7, "stock_cnt": 5821, "price": "8.56", "change": "10.03", "market_id": "17", "circulate_market_value": "4102979000.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.04}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "医药商业", "change_pct": 2.33}, {"name": "医药", "change_pct": 4.09}, {"name": "流感", "change_pct": 3.8}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5821, "price": "57.57", "change": "0.04", "market_id": "17", "circulate_market_value": "259239950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 7, "hot_rank_chg": 10, "stock_cnt": 5821, "price": "167.90", "change": "2.38", "market_id": "17", "circulate_market_value": "415263750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 8, "hot_rank_chg": 19, "stock_cnt": 5821, "price": "8.60", "change": "9.97", "market_id": "17", "circulate_market_value": "5519335700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "粮食安全", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.41}, {"name": "农业种植", "change_pct": 1.5}, {"name": "湖南国企改革", "change_pct": 1.41}, {"name": "乡村振兴", "change_pct": 1.09}, {"name": "休闲食品", "change_pct": 0.2}, {"name": "食品", "change_pct": 1.52}, {"name": "食品安全", "change_pct": 2.55}, {"name": "社区团购", "change_pct": 1.76}, {"name": "大农业", "change_pct": 0.87}, {"name": "预制菜", "change_pct": 0.96}, {"name": "人造肉", "change_pct": 1.34}, {"name": "国企改革", "change_pct": 0.93}]}, {"code": "000725", "name": "京东方A", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5821, "price": "5.90", "change": "-1.83", "market_id": "33", "circulate_market_value": "208666090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.96}, {"name": "手机产业链", "change_pct": 2.16}, {"name": "超高清视频", "change_pct": 1.27}, {"name": "苹果产业链", "change_pct": 2.41}, {"name": "电竞", "change_pct": 1.44}, {"name": "半导体", "change_pct": 0.6}, {"name": "人工智能", "change_pct": 1.55}, {"name": "互联网医疗", "change_pct": 2.94}, {"name": "VR&AR", "change_pct": 1.98}, {"name": "OLED", "change_pct": 1.33}, {"name": "京津冀", "change_pct": 1.19}, {"name": "物联网", "change_pct": 1.56}, {"name": "指纹识别", "change_pct": 1.86}, {"name": "汽车零部件", "change_pct": 0.83}, {"name": "白马股", "change_pct": 0.43}, {"name": "智能制造", "change_pct": 1.43}, {"name": "小米概念股", "change_pct": 1.42}, {"name": "国产芯片", "change_pct": 0.79}, {"name": "液晶面板/LCD", "change_pct": 0.66}, {"name": "全息概念", "change_pct": 1.84}, {"name": "理想汽车概念股", "change_pct": 0.76}, {"name": "MicroLED", "change_pct": 2.1}, {"name": "钙钛矿电池", "change_pct": 1.24}, {"name": "智能手表", "change_pct": 1.77}, {"name": "MiniLED", "change_pct": 1.97}, {"name": "传感器", "change_pct": 1.09}, {"name": "大硅片", "change_pct": -2.65}, {"name": "AI PC", "change_pct": 1.51}, {"name": "华为产业链", "change_pct": 1.32}, {"name": "回购", "change_pct": 1.53}, {"name": "光电共封装CPO", "change_pct": 3.62}, {"name": "智能眼镜/MR头显", "change_pct": 2.16}, {"name": "玻璃基板封装", "change_pct": 0.64}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5821, "price": "5.55", "change": "-1.60", "market_id": "33", "circulate_market_value": "14675551000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.91}, {"name": "装修装饰", "change_pct": 1.43}, {"name": "装配式建筑", "change_pct": 1.88}, {"name": "航天", "change_pct": -0.31}, {"name": "旧改", "change_pct": 1.61}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 11, "hot_rank_chg": 24, "stock_cnt": 5821, "price": "4.73", "change": "10.00", "market_id": "33", "circulate_market_value": "9933727700.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.04}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "维生素", "change_pct": 2.2}, {"name": "基因测序", "change_pct": 7.63}, {"name": "民营医院", "change_pct": 2.65}, {"name": "医药", "change_pct": 4.09}, {"name": "化学原料药", "change_pct": 3.84}, {"name": "PD-1抑制剂", "change_pct": 5.35}]}, {"code": "002202", "name": "金风科技", "hot_rank": 12, "hot_rank_chg": -7, "stock_cnt": 5821, "price": "19.84", "change": "-9.94", "market_id": "33", "circulate_market_value": "66731941000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 13, "hot_rank_chg": 1, "stock_cnt": 5821, "price": "21.21", "change": "0.43", "market_id": "17", "circulate_market_value": "44361610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5821, "price": "36.01", "change": "-4.03", "market_id": "33", "circulate_market_value": "38923868000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 15, "hot_rank_chg": -9, "stock_cnt": 5821, "price": "13.44", "change": "-6.80", "market_id": "17", "circulate_market_value": "17246189000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 16, "hot_rank_chg": 14, "stock_cnt": 5821, "price": "28.60", "change": "5.93", "market_id": "17", "circulate_market_value": "6928922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 17, "hot_rank_chg": -4, "stock_cnt": 5821, "price": "130.57", "change": "-3.25", "market_id": "17", "circulate_market_value": "47099654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 18, "hot_rank_chg": -8, "stock_cnt": 5821, "price": "62.02", "change": "5.28", "market_id": "17", "circulate_market_value": "152175140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 19, "hot_rank_chg": -1, "stock_cnt": 5821, "price": "35.05", "change": "0.86", "market_id": "17", "circulate_market_value": "14055050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 20, "hot_rank_chg": -5, "stock_cnt": 5821, "price": "53.09", "change": "-5.38", "market_id": "33", "circulate_market_value": "61425807000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 21, "hot_rank_chg": 15, "stock_cnt": 5821, "price": "34.25", "change": "4.55", "market_id": "17", "circulate_market_value": "705611420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 22, "hot_rank_chg": -1, "stock_cnt": 5821, "price": "79.48", "change": "2.24", "market_id": "17", "circulate_market_value": "142222670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 23, "hot_rank_chg": 1, "stock_cnt": 5821, "price": "103.56", "change": "-1.09", "market_id": "33", "circulate_market_value": "67628369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 24, "hot_rank_chg": -8, "stock_cnt": 5821, "price": "403.50", "change": "-0.05", "market_id": "17", "circulate_market_value": "269736500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 25, "hot_rank_chg": 15, "stock_cnt": 5821, "price": "49.50", "change": "-6.00", "market_id": "17", "circulate_market_value": "315760610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002900", "name": "哈三联", "hot_rank": 26, "hot_rank_chg": 18, "stock_cnt": 5821, "price": "15.30", "change": "-2.11", "market_id": "33", "circulate_market_value": "2465172700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 27, "hot_rank_chg": -5, "stock_cnt": 5821, "price": "10.25", "change": "-9.05", "market_id": "33", "circulate_market_value": "8292444600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.42}, {"name": "大飞机", "change_pct": 0.05}, {"name": "北斗导航", "change_pct": 0.32}, {"name": "高铁轨交", "change_pct": 1.07}, {"name": "军民融合", "change_pct": 0.63}, {"name": "磁悬浮", "change_pct": 1.11}, {"name": "军工", "change_pct": 0.5}, {"name": "碳纤维", "change_pct": 0.69}, {"name": "无人机", "change_pct": 0.46}, {"name": "航天", "change_pct": -0.31}, {"name": "卫星互联网", "change_pct": -0.09}, {"name": "低空经济", "change_pct": 0.96}, {"name": "海洋经济", "change_pct": 0.36}]}, {"code": "300142", "name": "沃森生物", "hot_rank": 28, "hot_rank_chg": 41, "stock_cnt": 5821, "price": "15.12", "change": "20.00", "market_id": "33", "circulate_market_value": "23843039000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "mRNA疫苗"}, {"code": "600722", "name": "金牛化工", "hot_rank": 29, "hot_rank_chg": -10, "stock_cnt": 5821, "price": "13.24", "change": "3.12", "market_id": "17", "circulate_market_value": "9007432500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 30, "hot_rank_chg": 19, "stock_cnt": 5821, "price": "32.77", "change": "-9.07", "market_id": "33", "circulate_market_value": "25640400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 31, "hot_rank_chg": -3, "stock_cnt": 5821, "price": "11.95", "change": "-10.02", "market_id": "33", "circulate_market_value": "3399555200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 1.6}, {"name": "ST摘帽", "change_pct": 0.84}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "教育", "change_pct": 0.62}, {"name": "阿里巴巴概念股", "change_pct": 1.38}, {"name": "职业教育", "change_pct": 0.85}, {"name": "在线教育", "change_pct": 0.36}, {"name": "华为鸿蒙", "change_pct": 1.09}, {"name": "华为产业链", "change_pct": 1.32}, {"name": "智谱AI", "change_pct": 0.61}]}, {"code": "000506", "name": "招金黄金", "hot_rank": 32, "hot_rank_chg": 10, "stock_cnt": 5821, "price": "19.45", "change": "5.94", "market_id": "33", "circulate_market_value": "18063350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 33, "hot_rank_chg": 1, "stock_cnt": 5821, "price": "14.67", "change": "0.62", "market_id": "17", "circulate_market_value": "21604609000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 34, "hot_rank_chg": -5, "stock_cnt": 5821, "price": "35.40", "change": "8.59", "market_id": "17", "circulate_market_value": "127951294000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 35, "hot_rank_chg": -9, "stock_cnt": 5821, "price": "904.20", "change": "0.96", "market_id": "33", "circulate_market_value": "1003607550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 36, "hot_rank_chg": 28, "stock_cnt": 5821, "price": "18.33", "change": "-6.00", "market_id": "17", "circulate_market_value": "2932800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 37, "hot_rank_chg": -12, "stock_cnt": 5821, "price": "35.66", "change": "0.93", "market_id": "33", "circulate_market_value": "101990192000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 38, "hot_rank_chg": 21, "stock_cnt": 5821, "price": "86.39", "change": "3.75", "market_id": "17", "circulate_market_value": "35970006000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 39, "hot_rank_chg": -16, "stock_cnt": 5821, "price": "3.25", "change": "-8.19", "market_id": "33", "circulate_market_value": "15183184000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.53}, {"name": "股权转让", "change_pct": 0.87}, {"name": "房地产", "change_pct": 2.26}, {"name": "京津冀", "change_pct": 1.19}, {"name": "旅游", "change_pct": 2.56}, {"name": "国产芯片", "change_pct": 0.79}, {"name": "内存", "change_pct": -0.06}, {"name": "闪存", "change_pct": 0.42}, {"name": "IP经济/谷子经济", "change_pct": 1.57}]}, {"code": "002384", "name": "东山精密", "hot_rank": 40, "hot_rank_chg": -1, "stock_cnt": 5821, "price": "197.67", "change": "0.29", "market_id": "33", "circulate_market_value": "274034210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 41, "hot_rank_chg": 6, "stock_cnt": 5821, "price": "74.79", "change": "10.00", "market_id": "17", "circulate_market_value": "9773048600.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "控制权拟变更"}, {"code": "300394", "name": "天孚通信", "hot_rank": 42, "hot_rank_chg": -1, "stock_cnt": 5821, "price": "276.25", "change": "-0.41", "market_id": "33", "circulate_market_value": "300667200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600313", "name": "农发种业", "hot_rank": 43, "hot_rank_chg": -5, "stock_cnt": 5821, "price": "6.92", "change": "-2.94", "market_id": "17", "circulate_market_value": "7488814700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.54}, {"name": "农业种植", "change_pct": 1.5}, {"name": "化肥", "change_pct": -0.13}, {"name": "转基因", "change_pct": 0.23}, {"name": "土地流转", "change_pct": 2.01}, {"name": "农垦", "change_pct": 1.27}, {"name": "乡村振兴", "change_pct": 1.09}, {"name": "大农业", "change_pct": 0.87}, {"name": "国企改革", "change_pct": 0.93}, {"name": "大豆", "change_pct": 0.53}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 44, "hot_rank_chg": -7, "stock_cnt": 5821, "price": "41.42", "change": "2.12", "market_id": "17", "circulate_market_value": "164503130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 45, "hot_rank_chg": -12, "stock_cnt": 5821, "price": "35.89", "change": "-10.01", "market_id": "17", "circulate_market_value": "11555617500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 46, "hot_rank_chg": 112, "stock_cnt": 5821, "price": "7.50", "change": "9.97", "market_id": "17", "circulate_market_value": "8540679800.00", "change_type": "1", "change_section": "14", "change_days": "8", "change_reason": "特高压", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.94}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "光伏", "change_pct": 0.69}, {"name": "特高压", "change_pct": 0.38}, {"name": "智能电网", "change_pct": 1.1}]}, {"code": "002156", "name": "通富微电", "hot_rank": 47, "hot_rank_chg": -15, "stock_cnt": 5821, "price": "63.15", "change": "-0.69", "market_id": "33", "circulate_market_value": "95827108000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 48, "hot_rank_chg": -28, "stock_cnt": 5821, "price": "61.44", "change": "-8.99", "market_id": "17", "circulate_market_value": "72652132000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 49, "hot_rank_chg": 3, "stock_cnt": 5821, "price": "32.63", "change": "-5.39", "market_id": "17", "circulate_market_value": "54298664000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 50, "hot_rank_chg": 10, "stock_cnt": 5821, "price": "31.68", "change": "5.85", "market_id": "17", "circulate_market_value": "10673624000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 51, "hot_rank_chg": 2, "stock_cnt": 5821, "price": "11.02", "change": "-5.08", "market_id": "17", "circulate_market_value": "19716304000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.26}, {"name": "纯碱", "change_pct": 0.86}, {"name": "食品", "change_pct": 1.52}, {"name": "土壤修复", "change_pct": 1.53}, {"name": "东数西算/算力", "change_pct": 0.51}, {"name": "OpenClaw概念", "change_pct": 0.26}, {"name": "DeepSeek概念股", "change_pct": 0.89}]}, {"code": "601011", "name": "宝泰隆", "hot_rank": 52, "hot_rank_chg": 9, "stock_cnt": 5821, "price": "3.20", "change": "5.26", "market_id": "17", "circulate_market_value": "6130126500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.54}, {"name": "锂电池", "change_pct": 0.44}, {"name": "甲醇", "change_pct": 0.37}, {"name": "石墨烯", "change_pct": 1.42}, {"name": "氢能源/燃料电池", "change_pct": 0.62}, {"name": "石墨电极", "change_pct": 0.29}, {"name": "新能源汽车", "change_pct": 0.76}, {"name": "煤化工", "change_pct": -0.0}, {"name": "碳基材料", "change_pct": 0.36}, {"name": "智能眼镜/MR头显", "change_pct": 2.16}]}, {"code": "002185", "name": "华天科技", "hot_rank": 53, "hot_rank_chg": -3, "stock_cnt": 5821, "price": "17.35", "change": "-0.06", "market_id": "33", "circulate_market_value": "57648008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 54, "hot_rank_chg": 3, "stock_cnt": 5821, "price": "32.84", "change": "2.56", "market_id": "17", "circulate_market_value": "112081267000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 56, "hot_rank_chg": 15, "stock_cnt": 5821, "price": "19.27", "change": "9.99", "market_id": "33", "circulate_market_value": "22670554000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏"}, {"code": "300122", "name": "智飞生物", "hot_rank": 57, "hot_rank_chg": 132, "stock_cnt": 5821, "price": "14.48", "change": "19.97", "market_id": "33", "circulate_market_value": "20479154000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "默沙东代理"}, {"code": "600403", "name": "大有能源", "hot_rank": 58, "hot_rank_chg": -15, "stock_cnt": 5821, "price": "7.11", "change": "4.25", "market_id": "17", "circulate_market_value": "16998676000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.54}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "国企改革", "change_pct": 0.93}, {"name": "河南国企改革", "change_pct": 0.55}]}, {"code": "600536", "name": "中国软件", "hot_rank": 59, "hot_rank_chg": -4, "stock_cnt": 5821, "price": "35.95", "change": "3.72", "market_id": "17", "circulate_market_value": "30329429000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 60, "hot_rank_chg": 25, "stock_cnt": 5821, "price": "17.00", "change": "-0.64", "market_id": "17", "circulate_market_value": "13383698900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 61, "hot_rank_chg": 68, "stock_cnt": 5821, "price": "45.05", "change": "5.95", "market_id": "33", "circulate_market_value": "52909319000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 62, "hot_rank_chg": 32, "stock_cnt": 5821, "price": "31.00", "change": "-9.04", "market_id": "17", "circulate_market_value": "48286608000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300139", "name": "晓程科技", "hot_rank": 63, "hot_rank_chg": 23, "stock_cnt": 5821, "price": "49.45", "change": "5.93", "market_id": "33", "circulate_market_value": "11554448700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 64, "hot_rank_chg": -19, "stock_cnt": 5821, "price": "398.10", "change": "1.09", "market_id": "33", "circulate_market_value": "65698066000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000505", "name": "京粮控股", "hot_rank": 65, "hot_rank_chg": -14, "stock_cnt": 5821, "price": "7.49", "change": "0.27", "market_id": "33", "circulate_market_value": "4736528700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 1.21}, {"name": "京津冀", "change_pct": 1.19}, {"name": "调味品", "change_pct": 1.26}, {"name": "海南概念", "change_pct": 1.98}, {"name": "休闲食品", "change_pct": 0.2}, {"name": "食品", "change_pct": 1.52}, {"name": "人造肉", "change_pct": 1.34}]}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 66, "hot_rank_chg": 9, "stock_cnt": 5821, "price": "46.10", "change": "7.91", "market_id": "17", "circulate_market_value": "76706315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 67, "hot_rank_chg": 13, "stock_cnt": 5821, "price": "9.26", "change": "9.98", "market_id": "33", "circulate_market_value": "4610044700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.04}, {"name": "优化生育（三孩）", "change_pct": 2.38}, {"name": "农业种植", "change_pct": 1.5}, {"name": "医药", "change_pct": 4.09}, {"name": "流感", "change_pct": 3.8}, {"name": "大农业", "change_pct": 0.87}]}, {"code": "000603", "name": "盛达资源", "hot_rank": 68, "hot_rank_chg": 95, "stock_cnt": 5821, "price": "33.28", "change": "6.36", "market_id": "33", "circulate_market_value": "22188320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002821", "name": "凯莱英", "hot_rank": 69, "hot_rank_chg": 15, "stock_cnt": 5821, "price": "182.40", "change": "6.92", "market_id": "33", "circulate_market_value": "57828800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 70, "hot_rank_chg": -4, "stock_cnt": 5821, "price": "38.85", "change": "2.40", "market_id": "17", "circulate_market_value": "56798498000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 71, "hot_rank_chg": -15, "stock_cnt": 5821, "price": "30.20", "change": "5.41", "market_id": "17", "circulate_market_value": "26033982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 72, "hot_rank_chg": -4, "stock_cnt": 5821, "price": "12.31", "change": "2.41", "market_id": "33", "circulate_market_value": "11489189000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.91}, {"name": "新疆国企改革", "change_pct": 1.43}, {"name": "新疆概念", "change_pct": 0.94}, {"name": "光伏", "change_pct": 0.69}, {"name": "风电", "change_pct": 0.42}, {"name": "储能", "change_pct": 0.67}, {"name": "国企改革", "change_pct": 0.93}]}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 73, "hot_rank_chg": 23, "stock_cnt": 5821, "price": "18.27", "change": "1.50", "market_id": "17", "circulate_market_value": "319009590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 74, "hot_rank_chg": 7, "stock_cnt": 5821, "price": "64.45", "change": "-2.58", "market_id": "33", "circulate_market_value": "93674982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 75, "hot_rank_chg": -8, "stock_cnt": 5821, "price": "37.53", "change": "0.24", "market_id": "33", "circulate_market_value": "59078059000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 76, "hot_rank_chg": 70, "stock_cnt": 5821, "price": "50.90", "change": "5.06", "market_id": "33", "circulate_market_value": "72279626000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 77, "hot_rank_chg": -14, "stock_cnt": 5821, "price": "164.00", "change": "-6.29", "market_id": "17", "circulate_market_value": "25713645000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 78, "hot_rank_chg": -16, "stock_cnt": 5821, "price": "62.13", "change": "0.48", "market_id": "17", "circulate_market_value": "1232913450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 79, "hot_rank_chg": -2, "stock_cnt": 5821, "price": "6.05", "change": "0.33", "market_id": "17", "circulate_market_value": "74996339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.54}, {"name": "核电", "change_pct": 0.35}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "电力体制改革", "change_pct": 0.07}, {"name": "水电", "change_pct": 0.09}, {"name": "火电", "change_pct": -0.03}, {"name": "光伏", "change_pct": 0.69}, {"name": "风电", "change_pct": 0.42}, {"name": "国企改革", "change_pct": 0.93}, {"name": "算电协同", "change_pct": 0.43}]}, {"code": "603395", "name": "红四方", "hot_rank": 80, "hot_rank_chg": -34, "stock_cnt": 5821, "price": "30.64", "change": "5.66", "market_id": "17", "circulate_market_value": "1991600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 81, "hot_rank_chg": 32, "stock_cnt": 5821, "price": "74.00", "change": "-4.09", "market_id": "33", "circulate_market_value": "2419684800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 82, "hot_rank_chg": 17, "stock_cnt": 5821, "price": "9.79", "change": "-5.41", "market_id": "17", "circulate_market_value": "35123287000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": 1.37}, {"name": "OLED", "change_pct": 1.33}, {"name": "液晶面板/LCD", "change_pct": 0.66}, {"name": "国企改革", "change_pct": 0.93}, {"name": "玻璃基板封装", "change_pct": 0.64}, {"name": "陕西国企改革", "change_pct": 0.66}]}, {"code": "000426", "name": "兴业银锡", "hot_rank": 83, "hot_rank_chg": 153, "stock_cnt": 5821, "price": "38.56", "change": "7.23", "market_id": "33", "circulate_market_value": "68451923000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 84, "hot_rank_chg": 21, "stock_cnt": 5821, "price": "9.47", "change": "4.07", "market_id": "33", "circulate_market_value": "21993845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 4.88}, {"name": "有色 · 铜", "change_pct": 1.21}, {"name": "有色 · 锑", "change_pct": 2.13}, {"name": "湖南国企改革", "change_pct": 1.41}, {"name": "有色 · 锌", "change_pct": 1.96}, {"name": "有色金属", "change_pct": 0.09}, {"name": "国企改革", "change_pct": 0.93}, {"name": "白银", "change_pct": 2.95}]}, {"code": "300502", "name": "新易盛", "hot_rank": 85, "hot_rank_chg": -9, "stock_cnt": 5821, "price": "414.02", "change": "0.61", "market_id": "33", "circulate_market_value": "519281750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301655", "name": "绿控传动", "hot_rank": 86, "hot_rank_chg": 1352, "stock_cnt": 5821, "price": "32.49", "change": "282.24", "market_id": "33", "circulate_market_value": "1461016400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 87, "hot_rank_chg": 10, "stock_cnt": 5821, "price": "4.60", "change": "-0.65", "market_id": "33", "circulate_market_value": "26932073000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.76}, {"name": "人工智能", "change_pct": 1.55}, {"name": "水利", "change_pct": 0.96}, {"name": "直播/短视频", "change_pct": 1.35}, {"name": "大数据", "change_pct": 1.2}, {"name": "园林", "change_pct": 1.74}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.42}, {"name": "数字经济", "change_pct": 1.26}, {"name": "腾讯概念股", "change_pct": 1.32}, {"name": "理想汽车概念股", "change_pct": 0.76}, {"name": "第三代半导体", "change_pct": 0.32}, {"name": "快手概念股", "change_pct": 0.77}, {"name": "IGBT", "change_pct": 0.68}, {"name": "虚拟数字人", "change_pct": 1.38}, {"name": "AIGC概念", "change_pct": 1.01}, {"name": "字节跳动概念股", "change_pct": 1.13}, {"name": "氮化镓", "change_pct": 0.64}, {"name": "AI营销", "change_pct": 1.09}, {"name": "多模态", "change_pct": 1.46}, {"name": "液冷服务器", "change_pct": 0.74}, {"name": "小红书概念股", "change_pct": 0.69}, {"name": "区块链", "change_pct": 1.35}]}, {"code": "600183", "name": "生益科技", "hot_rank": 88, "hot_rank_chg": -14, "stock_cnt": 5821, "price": "126.28", "change": "0.65", "market_id": "17", "circulate_market_value": "304555650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 89, "hot_rank_chg": -16, "stock_cnt": 5821, "price": "75.08", "change": "3.03", "market_id": "33", "circulate_market_value": "110129732000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 90, "hot_rank_chg": 16, "stock_cnt": 5821, "price": "6.34", "change": "1.60", "market_id": "33", "circulate_market_value": "5618827700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 1.5}, {"name": "土地流转", "change_pct": 2.01}, {"name": "海南概念", "change_pct": 1.98}, {"name": "自由贸易港", "change_pct": 1.89}, {"name": "海南自由贸易港", "change_pct": 1.95}, {"name": "大农业", "change_pct": 0.87}, {"name": "水产养殖", "change_pct": 0.86}, {"name": "自贸区", "change_pct": 1.54}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 91, "hot_rank_chg": -9, "stock_cnt": 5821, "price": "62.92", "change": "-1.87", "market_id": "33", "circulate_market_value": "53675352000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 92, "hot_rank_chg": 45, "stock_cnt": 5821, "price": "9.06", "change": "-10.03", "market_id": "17", "circulate_market_value": "3920023300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.87}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "光伏", "change_pct": 0.69}, {"name": "无线耳机", "change_pct": 1.51}, {"name": "华为产业链", "change_pct": 1.32}, {"name": "光伏胶膜", "change_pct": 0.36}]}, {"code": "300765", "name": "石药创新", "hot_rank": 93, "hot_rank_chg": 190, "stock_cnt": 5821, "price": "51.78", "change": "20.00", "market_id": "33", "circulate_market_value": "72729823000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}, {"code": "002031", "name": "巨轮智能", "hot_rank": 94, "hot_rank_chg": 81, "stock_cnt": 5821, "price": "5.12", "change": "-9.06", "market_id": "33", "circulate_market_value": "11260867400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": 1.54}, {"name": "轮胎", "change_pct": 0.32}, {"name": "冷链", "change_pct": 1.27}, {"name": "机器人", "change_pct": 1.02}, {"name": "智能制造", "change_pct": 1.43}, {"name": "工业母机", "change_pct": 0.7}, {"name": "减速器", "change_pct": 0.02}, {"name": "头盔", "change_pct": 0.29}, {"name": "人形机器人", "change_pct": 0.89}]}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 95, "hot_rank_chg": 8, "stock_cnt": 5821, "price": "57.04", "change": "10.01", "market_id": "33", "circulate_market_value": "21019428000.00", "change_type": "1", "change_section": "15", "change_days": "8", "change_reason": "覆铜板"}, {"code": "002281", "name": "光迅科技", "hot_rank": 96, "hot_rank_chg": -4, "stock_cnt": 5821, "price": "173.15", "change": "-2.66", "market_id": "33", "circulate_market_value": "136101050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 97, "hot_rank_chg": -32, "stock_cnt": 5821, "price": "7.79", "change": "5.13", "market_id": "33", "circulate_market_value": "5667880900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 1.27}, {"name": "装配式建筑", "change_pct": 1.88}, {"name": "风电", "change_pct": 0.42}, {"name": "环氧丙烷", "change_pct": 0.45}, {"name": "乡村振兴", "change_pct": 1.09}, {"name": "建筑节能", "change_pct": 1.67}, {"name": "旧改", "change_pct": 1.61}]}, {"code": "000802", "name": "北京文化", "hot_rank": 98, "hot_rank_chg": 37, "stock_cnt": 5821, "price": "4.13", "change": "-5.28", "market_id": "33", "circulate_market_value": "2955196700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 1.68}, {"name": "旅游", "change_pct": 2.56}, {"name": "IP经济/谷子经济", "change_pct": 1.57}]}, {"code": "002365", "name": "永安药业", "hot_rank": 99, "hot_rank_chg": 225, "stock_cnt": 5821, "price": "15.76", "change": "9.98", "market_id": "33", "circulate_market_value": "3865746200.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "牛磺酸"}, {"code": "300684", "name": "中石科技", "hot_rank": 100, "hot_rank_chg": 0, "stock_cnt": 5821, "price": "90.67", "change": "4.71", "market_id": "33", "circulate_market_value": "18548831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};