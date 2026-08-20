const UPDATE_TIME = "2026-08-20 23:21";
const THS_HOT = [];
const THS_EVENTS = [
  {
    "title": "抗癌疫苗，大消息！美股医药巨头，盘前暴涨超100%",
    "desc": "",
    "heat": 948888,
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
    "heat": 368680,
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
    "heat": 321515,
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
    "heat": 200669,
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
    "title": "AI 芯片需求激增，消息称三星部分先进制程代工最高涨价15%",
    "desc": "",
    "heat": 87265,
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
  },
  {
    "title": "“六张网”建设提速 上市公司掘金新机遇",
    "desc": "",
    "heat": 55611,
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
    "change": "+4.33%",
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
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5872,
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
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 6,
    "hot_rank_chg": 7,
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
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 9,
    "hot_rank_chg": 9,
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
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 12,
    "hot_rank_chg": 7,
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
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 13,
    "hot_rank_chg": -4,
    "stock_cnt": 5872,
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
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 19,
    "hot_rank_chg": -5,
    "stock_cnt": 5872,
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
        "change_pct": 2.1
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
        "change_pct": 0.83
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
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 22,
    "hot_rank_chg": 29,
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
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 28,
    "hot_rank_chg": 19,
    "stock_cnt": 5872,
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
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 34,
    "hot_rank_chg": -9,
    "stock_cnt": 5872,
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
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 40,
    "hot_rank_chg": 26,
    "stock_cnt": 5872,
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
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 42,
    "hot_rank_chg": 13,
    "stock_cnt": 5872,
    "price": "4.44",
    "change": "9.90",
    "market_id": "33",
    "circulate_market_value": "3397224800.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "5",
    "change_reason": "此前炒作生肖",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.04
      },
      {
        "name": "股权转让",
        "change_pct": 0.87
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.38
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
        "name": "食品",
        "change_pct": 1.52
      },
      {
        "name": "辅助生殖",
        "change_pct": 4.59
      },
      {
        "name": "口腔",
        "change_pct": 2.84
      },
      {
        "name": "医美",
        "change_pct": 3.76
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.93
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 47,
    "hot_rank_chg": 14,
    "stock_cnt": 5872,
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
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 48,
    "hot_rank_chg": -6,
    "stock_cnt": 5872,
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
    "code": "002038",
    "name": "双鹭药业",
    "hot_rank": 50,
    "hot_rank_chg": 70,
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
        "change_pct": 2.89
      },
      {
        "name": "创新药",
        "change_pct": 5.07
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
        "name": "疫苗",
        "change_pct": 12.19
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
        "name": "长寿药NMN",
        "change_pct": 0.39
      },
      {
        "name": "辅助生殖",
        "change_pct": 4.59
      },
      {
        "name": "肝素",
        "change_pct": 3.96
      },
      {
        "name": "基因编辑",
        "change_pct": 5.4
      },
      {
        "name": "肝炎概念",
        "change_pct": 4.74
      },
      {
        "name": "医美",
        "change_pct": 3.76
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 3.88
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.93
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": 15.23
      },
      {
        "name": "减肥药",
        "change_pct": 4.17
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 55,
    "hot_rank_chg": -16,
    "stock_cnt": 5872,
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
    "code": "603801",
    "name": "志邦家居",
    "hot_rank": 59,
    "hot_rank_chg": 74,
    "stock_cnt": 5872,
    "price": "7.23",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "3140361200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "定制家居",
    "xgb_concepts": [
      {
        "name": "家具家居",
        "change_pct": 1.83
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 61,
    "hot_rank_chg": -7,
    "stock_cnt": 5872,
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
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 62,
    "hot_rank_chg": 1,
    "stock_cnt": 5872,
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
        "change_pct": 0.83
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
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 64,
    "hot_rank_chg": -4,
    "stock_cnt": 5872,
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
    "code": "600683",
    "name": "京投发展",
    "hot_rank": 71,
    "hot_rank_chg": 40,
    "stock_cnt": 5872,
    "price": "10.65",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "7889281400.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "5",
    "change_reason": "资产重组",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 2.26
      },
      {
        "name": "强势人气股",
        "change_pct": 0.91
      },
      {
        "name": "光通信",
        "change_pct": 3.37
      },
      {
        "name": "京津冀",
        "change_pct": 1.19
      },
      {
        "name": "土地流转",
        "change_pct": 2.01
      },
      {
        "name": "北京城市规划",
        "change_pct": 2.16
      },
      {
        "name": "物业管理",
        "change_pct": 1.68
      },
      {
        "name": "国企改革",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 79,
    "hot_rank_chg": 39,
    "stock_cnt": 5872,
    "price": "6.20",
    "change": "9.93",
    "market_id": "17",
    "circulate_market_value": "26532452000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "天然橡胶龙头",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 1.5
      },
      {
        "name": "橡胶",
        "change_pct": 2.01
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
        "name": "可降解塑料",
        "change_pct": 1.31
      },
      {
        "name": "大消费",
        "change_pct": 1.34
      },
      {
        "name": "免税店概念",
        "change_pct": 1.8
      },
      {
        "name": "自贸区",
        "change_pct": 1.54
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 81,
    "hot_rank_chg": -24,
    "stock_cnt": 5872,
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
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 82,
    "hot_rank_chg": 0,
    "stock_cnt": 5872,
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
    "code": "000523",
    "name": "红棉股份",
    "hot_rank": 83,
    "hot_rank_chg": 49,
    "stock_cnt": 5872,
    "price": "3.53",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "6335707700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "代糖",
    "xgb_concepts": [
      {
        "name": "啤酒",
        "change_pct": 0.1
      },
      {
        "name": "调味品",
        "change_pct": 1.26
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.24
      },
      {
        "name": "白糖",
        "change_pct": 4.8
      },
      {
        "name": "食品",
        "change_pct": 1.52
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 2.31
      },
      {
        "name": "物业管理",
        "change_pct": 1.68
      },
      {
        "name": "国企改革",
        "change_pct": 0.93
      },
      {
        "name": "饮料",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 88,
    "hot_rank_chg": -23,
    "stock_cnt": 5872,
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
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 89,
    "hot_rank_chg": 11,
    "stock_cnt": 5872,
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
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 100,
    "hot_rank_chg": -11,
    "stock_cnt": 5872,
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
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "687.00", "change": "-18.70", "market_id": "17", "circulate_market_value": "20670264000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "9.08", "change": "0.22", "market_id": "17", "circulate_market_value": "22868070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.83}, {"name": "工业大麻", "change_pct": 2.89}, {"name": "中药", "change_pct": 3.04}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "保健品", "change_pct": 3.06}, {"name": "民营医院", "change_pct": 2.65}, {"name": "医药", "change_pct": 4.09}, {"name": "化学原料药", "change_pct": 3.84}, {"name": "流感", "change_pct": 3.8}, {"name": "振兴东北", "change_pct": 1.46}, {"name": "食品", "change_pct": 1.52}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "62.02", "change": "5.28", "market_id": "17", "circulate_market_value": "152175140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 4, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "57.57", "change": "0.04", "market_id": "17", "circulate_market_value": "259239950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "35.05", "change": "0.86", "market_id": "17", "circulate_market_value": "14055050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 6, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "8.60", "change": "9.97", "market_id": "17", "circulate_market_value": "5519335700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "粮食安全", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.41}, {"name": "农业种植", "change_pct": 1.5}, {"name": "湖南国企改革", "change_pct": 1.41}, {"name": "乡村振兴", "change_pct": 1.09}, {"name": "休闲食品", "change_pct": 0.2}, {"name": "食品", "change_pct": 1.52}, {"name": "食品安全", "change_pct": 2.55}, {"name": "社区团购", "change_pct": 1.76}, {"name": "大农业", "change_pct": 0.87}, {"name": "预制菜", "change_pct": 0.96}, {"name": "人造肉", "change_pct": 1.34}, {"name": "国企改革", "change_pct": 0.93}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 7, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "28.60", "change": "5.93", "market_id": "17", "circulate_market_value": "6928922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "53.09", "change": "-5.38", "market_id": "33", "circulate_market_value": "60920242000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 9, "hot_rank_chg": 9, "stock_cnt": 5872, "price": "8.56", "change": "10.03", "market_id": "17", "circulate_market_value": "4102979000.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.04}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "医药商业", "change_pct": 2.33}, {"name": "医药", "change_pct": 4.09}, {"name": "流感", "change_pct": 3.8}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 10, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "19.27", "change": "9.99", "market_id": "33", "circulate_market_value": "22670554000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏"}, {"code": "600584", "name": "长电科技", "hot_rank": 11, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "79.48", "change": "2.24", "market_id": "17", "circulate_market_value": "142222670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "4.73", "change": "10.00", "market_id": "33", "circulate_market_value": "9933727700.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.04}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "维生素", "change_pct": 2.2}, {"name": "基因测序", "change_pct": 7.63}, {"name": "民营医院", "change_pct": 2.65}, {"name": "医药", "change_pct": 4.09}, {"name": "化学原料药", "change_pct": 3.84}, {"name": "PD-1抑制剂", "change_pct": 5.35}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 13, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "5.55", "change": "-1.60", "market_id": "33", "circulate_market_value": "14675551000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.91}, {"name": "装修装饰", "change_pct": 1.43}, {"name": "装配式建筑", "change_pct": 1.88}, {"name": "航天", "change_pct": -0.31}, {"name": "旧改", "change_pct": 1.61}]}, {"code": "600206", "name": "有研新材", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "56.70", "change": "-3.69", "market_id": "17", "circulate_market_value": "47999574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 15, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "167.90", "change": "2.38", "market_id": "17", "circulate_market_value": "415263750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 16, "hot_rank_chg": 16, "stock_cnt": 5872, "price": "30.20", "change": "5.41", "market_id": "17", "circulate_market_value": "26033982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300142", "name": "沃森生物", "hot_rank": 17, "hot_rank_chg": 17, "stock_cnt": 5872, "price": "15.12", "change": "20.00", "market_id": "33", "circulate_market_value": "23843039000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "mRNA疫苗"}, {"code": "600722", "name": "金牛化工", "hot_rank": 18, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "13.24", "change": "3.12", "market_id": "17", "circulate_market_value": "9007432500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 19, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "5.90", "change": "-1.83", "market_id": "33", "circulate_market_value": "208666090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.1}, {"name": "手机产业链", "change_pct": 2.16}, {"name": "超高清视频", "change_pct": 1.27}, {"name": "苹果产业链", "change_pct": 2.41}, {"name": "电竞", "change_pct": 1.44}, {"name": "半导体", "change_pct": 0.6}, {"name": "人工智能", "change_pct": 1.55}, {"name": "互联网医疗", "change_pct": 2.94}, {"name": "VR&AR", "change_pct": 1.98}, {"name": "OLED", "change_pct": 1.33}, {"name": "京津冀", "change_pct": 1.19}, {"name": "物联网", "change_pct": 1.56}, {"name": "指纹识别", "change_pct": 1.86}, {"name": "汽车零部件", "change_pct": 0.83}, {"name": "白马股", "change_pct": 0.43}, {"name": "智能制造", "change_pct": 1.43}, {"name": "小米概念股", "change_pct": 1.42}, {"name": "国产芯片", "change_pct": 0.83}, {"name": "液晶面板/LCD", "change_pct": 0.66}, {"name": "全息概念", "change_pct": 1.84}, {"name": "理想汽车概念股", "change_pct": 0.76}, {"name": "MicroLED", "change_pct": 2.1}, {"name": "钙钛矿电池", "change_pct": 1.24}, {"name": "智能手表", "change_pct": 1.77}, {"name": "MiniLED", "change_pct": 1.97}, {"name": "传感器", "change_pct": 1.09}, {"name": "大硅片", "change_pct": -2.65}, {"name": "AI PC", "change_pct": 1.51}, {"name": "华为产业链", "change_pct": 1.32}, {"name": "回购", "change_pct": 1.53}, {"name": "光电共封装CPO", "change_pct": 3.62}, {"name": "智能眼镜/MR头显", "change_pct": 2.16}, {"name": "玻璃基板封装", "change_pct": 0.64}]}, {"code": "600667", "name": "太极实业", "hot_rank": 20, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "21.21", "change": "0.43", "market_id": "17", "circulate_market_value": "44361610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 21, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "403.50", "change": "-0.05", "market_id": "17", "circulate_market_value": "269736500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 22, "hot_rank_chg": 29, "stock_cnt": 5872, "price": "9.26", "change": "9.98", "market_id": "33", "circulate_market_value": "4610044700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.04}, {"name": "优化生育（三孩）", "change_pct": 2.38}, {"name": "农业种植", "change_pct": 1.5}, {"name": "医药", "change_pct": 4.09}, {"name": "流感", "change_pct": 3.8}, {"name": "大农业", "change_pct": 0.87}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 23, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "41.42", "change": "2.12", "market_id": "17", "circulate_market_value": "164503130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 24, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "13.66", "change": "-0.44", "market_id": "17", "circulate_market_value": "5252920700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 25, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "34.25", "change": "4.55", "market_id": "17", "circulate_market_value": "705611420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 26, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "57.04", "change": "10.01", "market_id": "33", "circulate_market_value": "21019428000.00", "change_type": "1", "change_section": "15", "change_days": "8", "change_reason": "覆铜板"}, {"code": "603580", "name": "艾艾精工", "hot_rank": 27, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "74.79", "change": "10.00", "market_id": "17", "circulate_market_value": "9773048600.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "控制权拟变更"}, {"code": "601700", "name": "风范股份", "hot_rank": 28, "hot_rank_chg": 19, "stock_cnt": 5872, "price": "7.50", "change": "9.97", "market_id": "17", "circulate_market_value": "8540679800.00", "change_type": "1", "change_section": "14", "change_days": "8", "change_reason": "特高压", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.94}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "光伏", "change_pct": 0.69}, {"name": "特高压", "change_pct": 0.38}, {"name": "智能电网", "change_pct": 1.1}]}, {"code": "603629", "name": "利通电子", "hot_rank": 29, "hot_rank_chg": -9, "stock_cnt": 5872, "price": "130.57", "change": "-3.25", "market_id": "17", "circulate_market_value": "47099654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 30, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "36.01", "change": "-4.03", "market_id": "33", "circulate_market_value": "38923868000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 31, "hot_rank_chg": -10, "stock_cnt": 5872, "price": "19.84", "change": "-9.94", "market_id": "33", "circulate_market_value": "66731941000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 32, "hot_rank_chg": 13, "stock_cnt": 5872, "price": "15.29", "change": "10.00", "market_id": "33", "circulate_market_value": "8920367900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "300308", "name": "中际旭创", "hot_rank": 33, "hot_rank_chg": -3, "stock_cnt": 5872, "price": "904.20", "change": "0.96", "market_id": "33", "circulate_market_value": "1003607550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 34, "hot_rank_chg": -9, "stock_cnt": 5872, "price": "11.95", "change": "-10.02", "market_id": "33", "circulate_market_value": "3399555200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 1.6}, {"name": "ST摘帽", "change_pct": 0.84}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "教育", "change_pct": 0.62}, {"name": "阿里巴巴概念股", "change_pct": 1.38}, {"name": "职业教育", "change_pct": 0.85}, {"name": "在线教育", "change_pct": 0.36}, {"name": "华为鸿蒙", "change_pct": 1.09}, {"name": "华为产业链", "change_pct": 1.32}, {"name": "智谱AI", "change_pct": 0.61}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 35, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "35.66", "change": "0.93", "market_id": "33", "circulate_market_value": "101990192000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 36, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "49.50", "change": "-6.00", "market_id": "17", "circulate_market_value": "315760610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 37, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "13.44", "change": "-6.80", "market_id": "17", "circulate_market_value": "17246189000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300570", "name": "太辰光", "hot_rank": 38, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "213.40", "change": "18.38", "market_id": "33", "circulate_market_value": "41013943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 39, "hot_rank_chg": -10, "stock_cnt": 5872, "price": "103.56", "change": "-1.09", "market_id": "33", "circulate_market_value": "67628369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 40, "hot_rank_chg": 26, "stock_cnt": 5872, "price": "7.79", "change": "5.13", "market_id": "33", "circulate_market_value": "5667880900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 1.27}, {"name": "装配式建筑", "change_pct": 1.88}, {"name": "风电", "change_pct": 0.42}, {"name": "环氧丙烷", "change_pct": 0.45}, {"name": "乡村振兴", "change_pct": 1.09}, {"name": "建筑节能", "change_pct": 1.67}, {"name": "旧改", "change_pct": 1.61}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 41, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "32.77", "change": "-9.07", "market_id": "33", "circulate_market_value": "25640400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 42, "hot_rank_chg": 13, "stock_cnt": 5872, "price": "4.44", "change": "9.90", "market_id": "33", "circulate_market_value": "3397224800.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "此前炒作生肖", "xgb_concepts": [{"name": "中药", "change_pct": 3.04}, {"name": "股权转让", "change_pct": 0.87}, {"name": "优化生育（三孩）", "change_pct": 2.38}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "医药商业", "change_pct": 2.33}, {"name": "保健品", "change_pct": 3.06}, {"name": "民营医院", "change_pct": 2.65}, {"name": "医药", "change_pct": 4.09}, {"name": "食品", "change_pct": 1.52}, {"name": "辅助生殖", "change_pct": 4.59}, {"name": "口腔", "change_pct": 2.84}, {"name": "医美", "change_pct": 3.76}, {"name": "新冠病毒防治", "change_pct": 2.93}]}, {"code": "603823", "name": "百合花", "hot_rank": 43, "hot_rank_chg": 9, "stock_cnt": 5872, "price": "86.39", "change": "3.75", "market_id": "17", "circulate_market_value": "35970006000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 44, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "31.68", "change": "5.85", "market_id": "17", "circulate_market_value": "10673624000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300122", "name": "智飞生物", "hot_rank": 45, "hot_rank_chg": 49, "stock_cnt": 5872, "price": "14.48", "change": "19.97", "market_id": "33", "circulate_market_value": "20479154000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "默沙东代理"}, {"code": "600737", "name": "中粮糖业", "hot_rank": 46, "hot_rank_chg": 12, "stock_cnt": 5872, "price": "15.85", "change": "6.16", "market_id": "17", "circulate_market_value": "33900744000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000505", "name": "京粮控股", "hot_rank": 47, "hot_rank_chg": 14, "stock_cnt": 5872, "price": "7.49", "change": "0.27", "market_id": "33", "circulate_market_value": "4736528700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 1.21}, {"name": "京津冀", "change_pct": 1.19}, {"name": "调味品", "change_pct": 1.26}, {"name": "海南概念", "change_pct": 1.98}, {"name": "休闲食品", "change_pct": 0.2}, {"name": "食品", "change_pct": 1.52}, {"name": "人造肉", "change_pct": 1.34}]}, {"code": "600403", "name": "大有能源", "hot_rank": 48, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "7.11", "change": "4.25", "market_id": "17", "circulate_market_value": "16998676000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.54}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "国企改革", "change_pct": 0.93}, {"name": "河南国企改革", "change_pct": 0.55}]}, {"code": "600547", "name": "山东黄金", "hot_rank": 49, "hot_rank_chg": 10, "stock_cnt": 5872, "price": "35.40", "change": "8.59", "market_id": "17", "circulate_market_value": "127951294000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002038", "name": "双鹭药业", "hot_rank": 50, "hot_rank_chg": 70, "stock_cnt": 5872, "price": "6.44", "change": "10.09", "market_id": "33", "circulate_market_value": "5486308900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "mRNA平台", "xgb_concepts": [{"name": "工业大麻", "change_pct": 2.89}, {"name": "创新药", "change_pct": 5.07}, {"name": "基因测序", "change_pct": 7.63}, {"name": "民营医院", "change_pct": 2.65}, {"name": "医药", "change_pct": 4.09}, {"name": "疫苗", "change_pct": 12.19}, {"name": "化学原料药", "change_pct": 3.84}, {"name": "流感", "change_pct": 3.8}, {"name": "长寿药NMN", "change_pct": 0.39}, {"name": "辅助生殖", "change_pct": 4.59}, {"name": "肝素", "change_pct": 3.96}, {"name": "基因编辑", "change_pct": 5.4}, {"name": "肝炎概念", "change_pct": 4.74}, {"name": "医美", "change_pct": 3.76}, {"name": "阿尔茨海默病", "change_pct": 3.88}, {"name": "新冠病毒防治", "change_pct": 2.93}, {"name": "肿瘤疫苗", "change_pct": 15.23}, {"name": "减肥药", "change_pct": 4.17}]}, {"code": "603395", "name": "红四方", "hot_rank": 51, "hot_rank_chg": 11, "stock_cnt": 5872, "price": "30.64", "change": "5.66", "market_id": "17", "circulate_market_value": "1991600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 52, "hot_rank_chg": -14, "stock_cnt": 5872, "price": "197.67", "change": "0.29", "market_id": "33", "circulate_market_value": "274034210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 53, "hot_rank_chg": -18, "stock_cnt": 5872, "price": "14.67", "change": "0.62", "market_id": "17", "circulate_market_value": "21604609000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002900", "name": "哈三联", "hot_rank": 54, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "15.30", "change": "-2.11", "market_id": "33", "circulate_market_value": "2465172700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 55, "hot_rank_chg": -16, "stock_cnt": 5872, "price": "12.31", "change": "2.41", "market_id": "33", "circulate_market_value": "11489189000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.91}, {"name": "新疆国企改革", "change_pct": 1.43}, {"name": "新疆概念", "change_pct": 0.94}, {"name": "光伏", "change_pct": 0.69}, {"name": "风电", "change_pct": 0.42}, {"name": "储能", "change_pct": 0.67}, {"name": "国企改革", "change_pct": 0.93}]}, {"code": "600272", "name": "开开实业", "hot_rank": 56, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "18.33", "change": "-6.00", "market_id": "17", "circulate_market_value": "2932800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 57, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "63.15", "change": "-0.69", "market_id": "33", "circulate_market_value": "95827108000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 58, "hot_rank_chg": 9, "stock_cnt": 5872, "price": "16.60", "change": "7.79", "market_id": "17", "circulate_market_value": "36841256000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603801", "name": "志邦家居", "hot_rank": 59, "hot_rank_chg": 74, "stock_cnt": 5872, "price": "7.23", "change": "10.05", "market_id": "17", "circulate_market_value": "3140361200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "定制家居", "xgb_concepts": [{"name": "家具家居", "change_pct": 1.83}]}, {"code": "002365", "name": "永安药业", "hot_rank": 60, "hot_rank_chg": 46, "stock_cnt": 5872, "price": "15.76", "change": "9.98", "market_id": "33", "circulate_market_value": "3865746200.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "牛磺酸"}, {"code": "600313", "name": "农发种业", "hot_rank": 61, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "6.92", "change": "-2.94", "market_id": "17", "circulate_market_value": "7488814700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.54}, {"name": "农业种植", "change_pct": 1.5}, {"name": "化肥", "change_pct": -0.13}, {"name": "转基因", "change_pct": 0.23}, {"name": "土地流转", "change_pct": 2.01}, {"name": "农垦", "change_pct": 1.27}, {"name": "乡村振兴", "change_pct": 1.09}, {"name": "大农业", "change_pct": 0.87}, {"name": "国企改革", "change_pct": 0.93}, {"name": "大豆", "change_pct": 0.53}]}, {"code": "000620", "name": "盈新发展", "hot_rank": 62, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "3.25", "change": "-8.19", "market_id": "33", "circulate_market_value": "15183184000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.53}, {"name": "股权转让", "change_pct": 0.87}, {"name": "房地产", "change_pct": 2.26}, {"name": "京津冀", "change_pct": 1.19}, {"name": "旅游", "change_pct": 2.56}, {"name": "国产芯片", "change_pct": 0.83}, {"name": "内存", "change_pct": -0.06}, {"name": "闪存", "change_pct": 0.42}, {"name": "IP经济/谷子经济", "change_pct": 1.57}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 63, "hot_rank_chg": -17, "stock_cnt": 5872, "price": "38.85", "change": "2.40", "market_id": "17", "circulate_market_value": "56798498000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 64, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "11.02", "change": "-5.08", "market_id": "17", "circulate_market_value": "19716304000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.26}, {"name": "纯碱", "change_pct": 0.86}, {"name": "食品", "change_pct": 1.52}, {"name": "土壤修复", "change_pct": 1.53}, {"name": "东数西算/算力", "change_pct": 0.51}, {"name": "OpenClaw概念", "change_pct": 0.26}, {"name": "DeepSeek概念股", "change_pct": 0.89}]}, {"code": "600522", "name": "中天科技", "hot_rank": 65, "hot_rank_chg": -24, "stock_cnt": 5872, "price": "32.84", "change": "2.56", "market_id": "17", "circulate_market_value": "112081267000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 66, "hot_rank_chg": -16, "stock_cnt": 5872, "price": "276.25", "change": "-0.41", "market_id": "33", "circulate_market_value": "300667200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 67, "hot_rank_chg": -14, "stock_cnt": 5872, "price": "17.35", "change": "-0.06", "market_id": "33", "circulate_market_value": "57648008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 68, "hot_rank_chg": 12, "stock_cnt": 5872, "price": "46.10", "change": "7.91", "market_id": "17", "circulate_market_value": "76706315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 69, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "398.10", "change": "1.09", "market_id": "33", "circulate_market_value": "65698066000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 70, "hot_rank_chg": 11, "stock_cnt": 5872, "price": "62.13", "change": "0.48", "market_id": "17", "circulate_market_value": "1232913450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600683", "name": "京投发展", "hot_rank": 71, "hot_rank_chg": 40, "stock_cnt": 5872, "price": "10.65", "change": "10.02", "market_id": "17", "circulate_market_value": "7889281400.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "资产重组", "xgb_concepts": [{"name": "房地产", "change_pct": 2.26}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "光通信", "change_pct": 3.37}, {"name": "京津冀", "change_pct": 1.19}, {"name": "土地流转", "change_pct": 2.01}, {"name": "北京城市规划", "change_pct": 2.16}, {"name": "物业管理", "change_pct": 1.68}, {"name": "国企改革", "change_pct": 0.93}]}, {"code": "002821", "name": "凯莱英", "hot_rank": 72, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "182.40", "change": "6.92", "market_id": "33", "circulate_market_value": "57828800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 73, "hot_rank_chg": -9, "stock_cnt": 5872, "price": "35.89", "change": "-10.01", "market_id": "17", "circulate_market_value": "11555617500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300765", "name": "石药创新", "hot_rank": 74, "hot_rank_chg": 19, "stock_cnt": 5872, "price": "51.78", "change": "20.00", "market_id": "33", "circulate_market_value": "72729823000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}, {"code": "300502", "name": "新易盛", "hot_rank": 75, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "414.02", "change": "0.61", "market_id": "33", "circulate_market_value": "519281750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601318", "name": "中国平安", "hot_rank": 76, "hot_rank_chg": 64, "stock_cnt": 5872, "price": "52.14", "change": "0.12", "market_id": "17", "circulate_market_value": "555815790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 77, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "75.08", "change": "3.03", "market_id": "33", "circulate_market_value": "110129732000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 78, "hot_rank_chg": -10, "stock_cnt": 5872, "price": "19.45", "change": "5.94", "market_id": "33", "circulate_market_value": "18063350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601118", "name": "海南橡胶", "hot_rank": 79, "hot_rank_chg": 39, "stock_cnt": 5872, "price": "6.20", "change": "9.93", "market_id": "17", "circulate_market_value": "26532452000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "天然橡胶龙头", "xgb_concepts": [{"name": "农业种植", "change_pct": 1.5}, {"name": "橡胶", "change_pct": 2.01}, {"name": "土地流转", "change_pct": 2.01}, {"name": "农垦", "change_pct": 1.27}, {"name": "海南概念", "change_pct": 1.98}, {"name": "自由贸易港", "change_pct": 1.89}, {"name": "海南自由贸易港", "change_pct": 1.95}, {"name": "大农业", "change_pct": 0.87}, {"name": "可降解塑料", "change_pct": 1.31}, {"name": "大消费", "change_pct": 1.34}, {"name": "免税店概念", "change_pct": 1.8}, {"name": "自贸区", "change_pct": 1.54}]}, {"code": "002827", "name": "高争民爆", "hot_rank": 80, "hot_rank_chg": 23, "stock_cnt": 5872, "price": "57.78", "change": "3.18", "market_id": "33", "circulate_market_value": "15947215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 81, "hot_rank_chg": -24, "stock_cnt": 5872, "price": "10.25", "change": "-9.05", "market_id": "33", "circulate_market_value": "8292444600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.42}, {"name": "大飞机", "change_pct": 0.05}, {"name": "北斗导航", "change_pct": 0.32}, {"name": "高铁轨交", "change_pct": 1.07}, {"name": "军民融合", "change_pct": 0.63}, {"name": "磁悬浮", "change_pct": 1.11}, {"name": "军工", "change_pct": 0.5}, {"name": "碳纤维", "change_pct": 0.69}, {"name": "无人机", "change_pct": 0.46}, {"name": "航天", "change_pct": -0.31}, {"name": "卫星互联网", "change_pct": -0.09}, {"name": "低空经济", "change_pct": 0.96}, {"name": "海洋经济", "change_pct": 0.36}]}, {"code": "603330", "name": "天洋新材", "hot_rank": 82, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "9.06", "change": "-10.03", "market_id": "17", "circulate_market_value": "3920023300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.87}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "光伏", "change_pct": 0.69}, {"name": "无线耳机", "change_pct": 1.51}, {"name": "华为产业链", "change_pct": 1.32}, {"name": "光伏胶膜", "change_pct": 0.36}]}, {"code": "000523", "name": "红棉股份", "hot_rank": 83, "hot_rank_chg": 49, "stock_cnt": 5872, "price": "3.53", "change": "9.97", "market_id": "33", "circulate_market_value": "6335707700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "代糖", "xgb_concepts": [{"name": "啤酒", "change_pct": 0.1}, {"name": "调味品", "change_pct": 1.26}, {"name": "粤港澳大湾区", "change_pct": 1.24}, {"name": "白糖", "change_pct": 4.8}, {"name": "食品", "change_pct": 1.52}, {"name": "甜味剂/代糖", "change_pct": 2.31}, {"name": "物业管理", "change_pct": 1.68}, {"name": "国企改革", "change_pct": 0.93}, {"name": "饮料", "change_pct": 0.54}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 84, "hot_rank_chg": -28, "stock_cnt": 5872, "price": "61.44", "change": "-8.99", "market_id": "17", "circulate_market_value": "72652132000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688072", "name": "拓荆科技", "hot_rank": 85, "hot_rank_chg": 78, "stock_cnt": 5872, "price": "671.26", "change": "-2.72", "market_id": "17", "circulate_market_value": "189760510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 86, "hot_rank_chg": -12, "stock_cnt": 5872, "price": "17.00", "change": "-0.64", "market_id": "17", "circulate_market_value": "13383698900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300927", "name": "江天化学", "hot_rank": 87, "hot_rank_chg": 86, "stock_cnt": 5872, "price": "25.94", "change": "7.06", "market_id": "33", "circulate_market_value": "3654658800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 88, "hot_rank_chg": -23, "stock_cnt": 5872, "price": "6.05", "change": "0.33", "market_id": "17", "circulate_market_value": "74996339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.54}, {"name": "核电", "change_pct": 0.35}, {"name": "强势人气股", "change_pct": 0.91}, {"name": "电力体制改革", "change_pct": 0.07}, {"name": "水电", "change_pct": 0.09}, {"name": "火电", "change_pct": -0.03}, {"name": "光伏", "change_pct": 0.69}, {"name": "风电", "change_pct": 0.42}, {"name": "国企改革", "change_pct": 0.93}, {"name": "算电协同", "change_pct": 0.43}]}, {"code": "002716", "name": "湖南白银", "hot_rank": 89, "hot_rank_chg": 11, "stock_cnt": 5872, "price": "9.47", "change": "4.07", "market_id": "33", "circulate_market_value": "21993845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 4.88}, {"name": "有色 · 铜", "change_pct": 1.21}, {"name": "有色 · 锑", "change_pct": 2.13}, {"name": "湖南国企改革", "change_pct": 1.41}, {"name": "有色 · 锌", "change_pct": 1.96}, {"name": "有色金属", "change_pct": 0.09}, {"name": "国企改革", "change_pct": 0.93}, {"name": "白银", "change_pct": 2.95}]}, {"code": "002008", "name": "大族激光", "hot_rank": 90, "hot_rank_chg": 33, "stock_cnt": 5872, "price": "91.56", "change": "3.81", "market_id": "33", "circulate_market_value": "87598190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 91, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "33.28", "change": "6.36", "market_id": "33", "circulate_market_value": "22188320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603958", "name": "哈森股份", "hot_rank": 92, "hot_rank_chg": 45, "stock_cnt": 5872, "price": "18.68", "change": "10.01", "market_id": "17", "circulate_market_value": "4097644800.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "苹果产业链"}, {"code": "600536", "name": "中国软件", "hot_rank": 93, "hot_rank_chg": -21, "stock_cnt": 5872, "price": "35.95", "change": "3.72", "market_id": "17", "circulate_market_value": "30329429000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 94, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "34.80", "change": "2.99", "market_id": "17", "circulate_market_value": "28842628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301200", "name": "大族数控", "hot_rank": 95, "hot_rank_chg": 94, "stock_cnt": 5872, "price": "286.93", "change": "-2.41", "market_id": "33", "circulate_market_value": "122013560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 96, "hot_rank_chg": -27, "stock_cnt": 5872, "price": "32.63", "change": "-5.39", "market_id": "17", "circulate_market_value": "54298664000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 97, "hot_rank_chg": -21, "stock_cnt": 5872, "price": "52.57", "change": "5.56", "market_id": "17", "circulate_market_value": "32999068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 98, "hot_rank_chg": 45, "stock_cnt": 5872, "price": "37.08", "change": "-2.34", "market_id": "33", "circulate_market_value": "55954129000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 99, "hot_rank_chg": -26, "stock_cnt": 5872, "price": "179.09", "change": "6.95", "market_id": "17", "circulate_market_value": "49355122000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 100, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "6.34", "change": "1.60", "market_id": "33", "circulate_market_value": "5618827700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 1.5}, {"name": "土地流转", "change_pct": 2.01}, {"name": "海南概念", "change_pct": 1.98}, {"name": "自由贸易港", "change_pct": 1.89}, {"name": "海南自由贸易港", "change_pct": 1.95}, {"name": "大农业", "change_pct": 0.87}, {"name": "水产养殖", "change_pct": 0.86}, {"name": "自贸区", "change_pct": 1.54}]}];
const LIMIT_UP_POOL = [{"code": "002491", "name": "通鼎互联", "price": 19.27, "change_pct": 9.99, "reason": "通信线缆全产业链企业；公司聚焦光通信产业的发展，建成了涵盖光纤预制棒、光纤、光缆、通信电缆、通信设备等多个业务类别较为完整的产业链，可为客户提供一揽子的产品和解决方案", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 19.1, "first_limit_up": 1787191212, "break_limit_up_times": 27}, {"code": "002172", "name": "澳洋健康", "price": 4.44, "change_pct": 9.9, "reason": "子公司江苏澳洋医药物流有限公司具体经营内容包括中药材配送、销售业务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 26.36, "first_limit_up": 1787202645, "break_limit_up_times": 0}, {"code": "000520", "name": "凤凰航运", "price": 4.41, "change_pct": 9.98, "reason": "我国内河经营干散货专业化运输规模最大的企业，大股东旗下投资了二十余家企业", "plates": ["航运"], "limit_up_days": 1, "turnover_ratio": 3.09, "first_limit_up": 1787189832, "break_limit_up_times": 0}, {"code": "000590", "name": "古汉医药", "price": 9.69, "change_pct": 9.99, "reason": "公司参股子公司衡道病理助力瑞金医院，与华为合作发布“瑞智（RuiPath） 病理大模型”", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.45, "first_limit_up": 1787189424, "break_limit_up_times": 0}, {"code": "300363", "name": "博腾股份", "price": 24.48, "change_pct": 20.0, "reason": "CDMO服务提供商；公司的原料药CDMO业务主要为客户提供化学药开发及上市过程中的一系列定制研发及生产服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.01, "first_limit_up": 1787190357, "break_limit_up_times": 0}, {"code": "603988", "name": "中电电机", "price": 21.2, "change_pct": 10.02, "reason": "公司专注大中型交直流电机、发电机，产品覆盖风电、水利、石化等行业", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.74, "first_limit_up": 1787189498, "break_limit_up_times": 7}, {"code": "000007", "name": "全新好", "price": 12.09, "change_pct": 10.01, "reason": "公司物业租赁及管理业务主要位于深圳华强北", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 5.23, "first_limit_up": 1787190723, "break_limit_up_times": 2}, {"code": "600683", "name": "京投发展", "price": 10.65, "change_pct": 10.02, "reason": "1、公司拟将房地产开发业务相关资产及负债转让至控股股东北京市基础设施投资有限公司，目前正开展审计、评估等工作；\n2、公司筹划收购西安奇芯光电股权，标的从事光电子器件制造", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 10.4, "first_limit_up": 1787202355, "break_limit_up_times": 5}, {"code": "688114", "name": "华大智造", "price": 69.11, "change_pct": 20.0, "reason": "公司为基因测序仪业务龙头，控股股东提议公司以2.5亿元~5亿元回购股份", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.66, "first_limit_up": 1787189539, "break_limit_up_times": 0}, {"code": "603376", "name": "大明电子", "price": 28.4, "change_pct": 9.99, "reason": "公司专注于汽车电子零部件配套领域\n", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.34, "first_limit_up": 1787190028, "break_limit_up_times": 5}, {"code": "002903", "name": "宇环数控", "price": 30.67, "change_pct": 10.01, "reason": "公司智能装备包括工业机器人及智能化成套装备等，为客户提供数字化、网络化的智能制造技术综合解决方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 20.08, "first_limit_up": 1787202021, "break_limit_up_times": 2}, {"code": "002940", "name": "昂利康", "price": 28.41, "change_pct": 9.99, "reason": "公司研发重心转向创新产品，积极布局创新药管线", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.01, "first_limit_up": 1787189403, "break_limit_up_times": 1}, {"code": "603637", "name": "镇海股份", "price": 14.06, "change_pct": 10.02, "reason": "公司深耕硫磺回收、加氢精制、常减压蒸馏等石化工程EPC，控股股东拟通过公开征集方式转让部分公司股份", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.68, "first_limit_up": 1787190636, "break_limit_up_times": 0}, {"code": "600127", "name": "金健米业", "price": 8.6, "change_pct": 9.97, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["大农业"], "limit_up_days": 4, "turnover_ratio": 43.41, "first_limit_up": 1787189466, "break_limit_up_times": 16}, {"code": "601877", "name": "正泰电器", "price": 26.28, "change_pct": 10.0, "reason": "全球知名的智慧能源解决方案提供商；公司主要从事低压电器及光伏新能源领域的业务，上半年净利润同比增长22.23%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.84, "first_limit_up": 1787189852, "break_limit_up_times": 1}, {"code": "002581", "name": "*ST未名", "price": 5.72, "change_pct": 10.0, "reason": "公司主要产品恩经复（神经生长因子），联营公司北京科兴致力于人用疫苗及其相关产品", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.98, "first_limit_up": 1787208699, "break_limit_up_times": 0}, {"code": "603801", "name": "志邦家居", "price": 7.23, "change_pct": 10.05, "reason": "公司产品包括整体厨房、全屋定制等，周杰伦为品牌代言人", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 4.76, "first_limit_up": 1787189485, "break_limit_up_times": 2}, {"code": "603666", "name": "亿嘉和", "price": 26.07, "change_pct": 10.0, "reason": "公司与与华为云签约深入合作，公司将基于在电力、康养等场景深耕的产品能力积累，提供场景和产品设计制造等能力；华为云将提供平台化大小脑产品能力，并协同电力军团进行场景化方案规划设计，双方共同推动具身智能机器人产品在商业场景的落地", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.13, "first_limit_up": 1787208934, "break_limit_up_times": 0}, {"code": "300841", "name": "康华生物", "price": 60.31, "change_pct": 20.0, "reason": "高端狂犬病疫苗独家生产企业，公司主营业务产品包括冻干人用狂犬病疫苗（人二倍体细胞）和ACYW135群脑膜炎球菌多糖疫苗", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.96, "first_limit_up": 1787189574, "break_limit_up_times": 0}, {"code": "688658", "name": "悦康药业", "price": 15.49, "change_pct": 19.98, "reason": "公司集化学原料药、高端化学药品及生物药品研产销于一体，重点研发项目靶向PCSK9的siRNA 1.1类创新药YKYY015注射液，成功获得了发明专利授权", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.95, "first_limit_up": 1787189101, "break_limit_up_times": 0}, {"code": "688137", "name": "近岸蛋白", "price": 67.49, "change_pct": 20.0, "reason": "国内重组蛋白解决方案专家、领先的mRNA应用服务商；公司整合AlphaFold等AI工具与自研机器学习系统，用于蛋白质设计、改造及表达，推动AI在生命科学领域的应用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.31, "first_limit_up": 1787189101, "break_limit_up_times": 0}, {"code": "600211", "name": "西藏药业", "price": 41.86, "change_pct": 10.01, "reason": "公司拟6000万美元投资Accuredit Therapeutics Limited，标的公司专注于基因编辑技术和产品开发", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.5, "first_limit_up": 1787196545, "break_limit_up_times": 0}, {"code": "002811", "name": "郑中设计", "price": 13.32, "change_pct": 9.99, "reason": "室内设计领域的国际领先企业之一；公司已完成对深迪半导体的战略入股并成为第一大股东，切入MEMS陀螺仪芯片及惯性测量单元IMU的研发与设计赛道，布局第二增长曲线", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.87, "first_limit_up": 1787192457, "break_limit_up_times": 0}, {"code": "003010", "name": "若羽臣", "price": 29.16, "change_pct": 10.0, "reason": "全球品牌电子商务综合服务商；预计上半年净利同比增长100%-120%，主要系“自有品牌战略价值凸显，驱动业绩高速增长，绽家品牌方面，大单品香氛洗衣液和洗衣凝珠持续放量，品牌香氛心智进一步巩固，其余单品亦保持细分市场领先优势，公司持续推进以香氛为核心的家居清洁护理品类新品布局；斐萃品牌方面，不断丰富产品线，提升消费者体验，同时强化多渠道协同运营，共同推动自有品牌业务整体收入实现高速增长”", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.87, "first_limit_up": 1787206635, "break_limit_up_times": 0}, {"code": "603519", "name": "立霸股份", "price": 16.53, "change_pct": 9.98, "reason": "国内知名的家电用复合材料主要生产厂商之一，主导产品分为覆膜板（VCM）和有机涂层板（PCM）两大类，主要应用于冰箱、洗衣机等家电，上半年净利润同比增29.1%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 7.67, "first_limit_up": 1787190120, "break_limit_up_times": 2}, {"code": "001333", "name": "光华股份", "price": 22.19, "change_pct": 10.01, "reason": "公司主营粉末涂料用聚酯树脂的研产销，消息称聚酯树脂可塑性强，牌号众多，高端牌号防腐性和热稳性好，用于数据中心打造轻量化机架，人形机器人外层金属防护必备", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.89, "first_limit_up": 1787203656, "break_limit_up_times": 2}, {"code": "603828", "name": "*ST利达", "price": 4.98, "change_pct": 9.93, "reason": "公司拟变更间接控股股东", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.92, "first_limit_up": 1787191774, "break_limit_up_times": 1}, {"code": "300122", "name": "智飞生物", "price": 14.48, "change_pct": 19.97, "reason": "26价肺炎球菌结合疫苗于澳大利亚启动Ⅰ期临床试验", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.36, "first_limit_up": 1787189400, "break_limit_up_times": 0}, {"code": "300601", "name": "康泰生物", "price": 14.47, "change_pct": 19.98, "reason": "国内疫苗研发平台最丰富的企业之一，四价流感病毒裂解疫苗、口服五价重配轮状病毒减毒活疫苗等处于Ⅰ期临床试验阶段", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.36, "first_limit_up": 1787191236, "break_limit_up_times": 2}, {"code": "603285", "name": "键邦股份", "price": 37.51, "change_pct": 10.0, "reason": "公司赛克产品作为高端电磁线漆关键耐热改性单体，全球市场占有率超75%，终端应用覆盖AI算力配套等新兴产业，目前赛克下游绝缘漆占比已升至 60% 以上，深度配套变压器、新能源汽车电机、AI算力中心等高增量赛道", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.61, "first_limit_up": 1787189869, "break_limit_up_times": 0}, {"code": "301166", "name": "优宁维", "price": 34.06, "change_pct": 20.01, "reason": "1、司美格鲁肽为公司自主品牌爱必信旗下产品，该产品面向科研领域；\n2、公司在细胞治疗领域的产品主要为抗体及抗体相关试剂、其他生物科学试剂、仪器及耗材和综合技术服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.88, "first_limit_up": 1787189874, "break_limit_up_times": 0}, {"code": "300109", "name": "新开源", "price": 15.98, "change_pct": 19.97, "reason": "公司参股公司杭州纽安津是一家专门从事个体化肿瘤治疗性疫苗研发的创新型企业，布局了一系列针对新生抗原的多肽疫苗、mRNA疫苗等管线", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 16.28, "first_limit_up": 1787190141, "break_limit_up_times": 8}, {"code": "300765", "name": "石药创新", "price": 51.78, "change_pct": 20.0, "reason": "控股子公司将与阿斯利康在新型小干扰核酸候选药物领域开展战略合作", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.59, "first_limit_up": 1787190762, "break_limit_up_times": 1}, {"code": "688105", "name": "诺唯赞", "price": 25.52, "change_pct": 19.98, "reason": "公司主营生物试剂、体外诊断业务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.47, "first_limit_up": 1787189462, "break_limit_up_times": 0}, {"code": "002743", "name": "富煌钢构", "price": 4.42, "change_pct": 9.95, "reason": "钢结构行业骨干企业，公司承建的紧凑型聚变能实验装置项目(BEST)5号楼屋面首段钢结构桁架完成高精度滑移安装，作为全超导托卡马克核聚变实验装置”(EAST)的升级选代项目，BEST被列为合肥大科学城三大核心科学装置之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.72, "first_limit_up": 1787189661, "break_limit_up_times": 5}, {"code": "002726", "name": "ST龙大", "price": 2.95, "change_pct": 10.07, "reason": "肉食品屠宰与深加工行业的龙头企业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 10.36, "first_limit_up": 1787206941, "break_limit_up_times": 3}, {"code": "603626", "name": "科森科技", "price": 16.95, "change_pct": 9.99, "reason": "1、公司为某品牌家用机器人提供相关结构件；\n2、公司与清陶能源共同投资设立了合资公司——科森清陶能源科技有限公司，专注于固态电池的集成、组装和系统集成等业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.9, "first_limit_up": 1787194309, "break_limit_up_times": 2}, {"code": "603716", "name": "塞力医疗", "price": 17.3, "change_pct": 9.98, "reason": "公司与华为技术有限公司及脑机智能全国重点实验室三方签署战略合作，聚焦于精神障碍精准诊疗领域，特别是人工智能在精神医学数字疗法中的应用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.15, "first_limit_up": 1787190646, "break_limit_up_times": 0}, {"code": "001277", "name": "速达股份", "price": 36.27, "change_pct": 10.01, "reason": "公司有数据中心散热管路系统的研发项目", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 13.56, "first_limit_up": 1787189400, "break_limit_up_times": 3}, {"code": "000017", "name": "深中华A", "price": 6.46, "change_pct": 10.05, "reason": "公司主要业务为自行车、锂电池材料和珠宝黄金业务", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 2.38, "first_limit_up": 1787189679, "break_limit_up_times": 0}, {"code": "601118", "name": "海南橡胶", "price": 6.2, "change_pct": 9.93, "reason": "中国天然橡胶产业龙头，拥有341万亩橡胶园（国内第一）、20家橡胶基地分公司", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 4.57, "first_limit_up": 1787192249, "break_limit_up_times": 2}, {"code": "002038", "name": "双鹭药业", "price": 6.44, "change_pct": 10.09, "reason": "公司表示硝酸甘油喷雾剂作为目前国内独家剂型，在心绞痛、心梗时急救产品的迅速起效十分重要", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.0, "first_limit_up": 1787189100, "break_limit_up_times": 0}, {"code": "000523", "name": "红棉股份", "price": 3.53, "change_pct": 9.97, "reason": "全资子公司华糖食品已建立“红棉” 、 “广氏” 、 “双喜” 等食品饮料品牌体系", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 15.01, "first_limit_up": 1787206971, "break_limit_up_times": 1}, {"code": "603590", "name": "康辰药业", "price": 34.33, "change_pct": 10.0, "reason": "创新型制药研发企业，主要产品“苏灵”是目前国内血凝酶制剂市场唯一的国家一类新药，在研管线深入布局靶向抗肿瘤药产品系列", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.63, "first_limit_up": 1787189400, "break_limit_up_times": 0}, {"code": "605080", "name": "浙江自然", "price": 22.34, "change_pct": 10.0, "reason": "公司主营户外运动用品，专注于户外床垫、保温箱等产品制造业务，第一大客户为迪卡侬", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.25, "first_limit_up": 1787193710, "break_limit_up_times": 3}, {"code": "002437", "name": "誉衡药业", "price": 4.73, "change_pct": 10.0, "reason": "子公司蒲公英主要产品安脑丸为中药领域产品", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 23.05, "first_limit_up": 1787190498, "break_limit_up_times": 0}, {"code": "600613", "name": "神奇制药", "price": 8.56, "change_pct": 10.03, "reason": "公司拥有中国驰名商标“神奇”品牌，其中枇杷止咳颗粒、强力枇杷露等较为知名", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 12.55, "first_limit_up": 1787189404, "break_limit_up_times": 0}, {"code": "603016", "name": "新宏泰", "price": 30.68, "change_pct": 10.0, "reason": "公司主营断路器关键部件、低压断路器及刀熔开关，产品覆盖16A-8000A配电网络，是断路器行业关键部件配套研发、制造、服务能力领先企业之一", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1787190241, "break_limit_up_times": 2}, {"code": "001210", "name": "金房能源", "price": 29.76, "change_pct": 10.02, "reason": "公司业务包括IDC机房和智算中心液冷技术与蓄冷相变材料", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.72, "first_limit_up": 1787189541, "break_limit_up_times": 1}, {"code": "688433", "name": "华曙高科", "price": 103.25, "change_pct": 20.0, "reason": "1、公司核心产品为金属3D打印设备和高分子3D打印设备，产品和技术可以应用于机器人领域；\n2、公司3D打印设备已用于火箭发动机收扩段、推力室及低空飞行器电动转子马达等商业航天场景", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.64, "first_limit_up": 1787193765, "break_limit_up_times": 2}, {"code": "300710", "name": "万隆光电", "price": 32.27, "change_pct": 20.01, "reason": "公司主要产品包括有线电视光纤传输设备、有线电视电缆传输设备、前端系统、数据通信系统四类", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 8.85, "first_limit_up": 1787193912, "break_limit_up_times": 0}, {"code": "603958", "name": "哈森股份", "price": 18.68, "change_pct": 10.01, "reason": "公司与关联方等拟共同出资1亿元设立参股公司，主营机器人零部件及产品销售、技术服务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.69, "first_limit_up": 1787190170, "break_limit_up_times": 0}, {"code": "002579", "name": "中京电子", "price": 15.29, "change_pct": 10.0, "reason": "公司系国内少数兼具刚柔印制电路板批量生产与较强研发能力的PCB制造商，部分产品有直接或间接配套人形机器人的研发、生产等", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.7, "first_limit_up": 1787190045, "break_limit_up_times": 0}, {"code": "001360", "name": "南矿集团", "price": 18.11, "change_pct": 10.02, "reason": "国内技术领先的中高端矿机装备供应服务商之一；公司境外子公司与Sucpass Gold签订合作协议，负责津巴布韦Brownhill金矿地表氧化矿的开采与堆浸处理，合作方式为黄金成品销售收入分成，黄金成品概算销售收入3640万美元，子公司按75%比例分成", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 4.79, "first_limit_up": 1787192007, "break_limit_up_times": 0}, {"code": "002667", "name": "*ST威领", "price": 17.46, "change_pct": 10.02, "reason": "兴业银锡要约收购拟拿下公司控制权，要约收购价格18元/股", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.27, "first_limit_up": 1787189100, "break_limit_up_times": 0}, {"code": "603580", "name": "艾艾精工", "price": 74.79, "change_pct": 10.0, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 10.12, "first_limit_up": 1787193057, "break_limit_up_times": 0}, {"code": "603177", "name": "德创环保", "price": 11, "change_pct": 10.0, "reason": "1、公司危废治理业务包括废盐资源化处置、危废填埋和危废集中收集；\n2、公司钠离子电池项目定位为第二业绩增长曲线，环卫车领域已实现应用", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.38, "first_limit_up": 1787190447, "break_limit_up_times": 0}, {"code": "605116", "name": "奥锐特", "price": 22, "change_pct": 10.0, "reason": "公司研发了系列女性健康产品，其中脱氢孕酮可用于辅助生育，地氢孕酮片已申请注册上市许可", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.01, "first_limit_up": 1787190845, "break_limit_up_times": 0}, {"code": "002030", "name": "达安基因", "price": 5.97, "change_pct": 9.94, "reason": "广药集团旗下广药资本拟成为公司间接控股股东", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.56, "first_limit_up": 1787189505, "break_limit_up_times": 1}, {"code": "300142", "name": "沃森生物", "price": 15.12, "change_pct": 20.0, "reason": "公司是专业从事人用疫苗的生物药龙头之一，一季报净利润同比增长4082.41%", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.25, "first_limit_up": 1787189100, "break_limit_up_times": 0}, {"code": "600539", "name": "狮头股份", "price": 15.36, "change_pct": 10.03, "reason": "公司调整收购利珀科技重组方案，配套募资降至2.2亿元\n", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 12.49, "first_limit_up": 1787191067, "break_limit_up_times": 2}, {"code": "688356", "name": "键凯科技", "price": 89.45, "change_pct": 20.0, "reason": "公司为国内医用药用聚乙二醇（PEG）赛道唯一的上市公司", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 0.96, "first_limit_up": 1787189101, "break_limit_up_times": 0}, {"code": "000931", "name": "中 关 村", "price": 4.63, "change_pct": 9.98, "reason": "公司拟与海徕科在创新抗体药物研发等领域开展合作", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.55, "first_limit_up": 1787189100, "break_limit_up_times": 0}, {"code": "688426", "name": "康为世纪", "price": 22.87, "change_pct": 19.99, "reason": "国内少数实现分子检测核心环节完整业务布局的生物科技企业；核心产品包括分子检测酶原料、核酸保存试剂、核酸提取纯化试剂以及分子诊断试剂盒", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.9, "first_limit_up": 1787189575, "break_limit_up_times": 1}, {"code": "002365", "name": "永安药业", "price": 15.76, "change_pct": 9.98, "reason": "公司是牛磺酸行业龙头", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 29.81, "first_limit_up": 1787189406, "break_limit_up_times": 5}, {"code": "000710", "name": "贝瑞基因", "price": 9.37, "change_pct": 9.98, "reason": "公司自主研发了 NLPearl 遗传疾病人工智能临床决策支持系统、CNVisi 智能报告解读系统，为科研和临床工作者提供智能决策支持", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.65, "first_limit_up": 1787189472, "break_limit_up_times": 0}, {"code": "603392", "name": "万泰生物", "price": 30.81, "change_pct": 10.0, "reason": "公司九价人乳头瘤病毒疫苗(大肠埃希菌)首次获得批签发证明", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 0.54, "first_limit_up": 1787189634, "break_limit_up_times": 0}, {"code": "688185", "name": "康希诺", "price": 64.43, "change_pct": 20.0, "reason": "国内创新疫苗研发先进企业", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.88, "first_limit_up": 1787189100, "break_limit_up_times": 0}, {"code": "300009", "name": "安科生物", "price": 10.15, "change_pct": 19.98, "reason": "公司主营产品人生长激素“安苏萌”目前在国内获批适应症多，主要用于因内源性生长激素缺乏所引起的儿童生长缓慢，患者依从性高，注射用人生长激素在国内市场占有率逐年提升", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 16.32, "first_limit_up": 1787202033, "break_limit_up_times": 4}, {"code": "601700", "name": "风范股份", "price": 7.5, "change_pct": 9.97, "reason": "公司中标2.9亿元南方电网特高压直流输电工程项目", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 7.25, "first_limit_up": 1787189501, "break_limit_up_times": 1}, {"code": "603882", "name": "金域医学", "price": 30.76, "change_pct": 10.01, "reason": "公司是全国第三方医检行业龙头，已正式接入DeepSeek，在域见医言大模型以及配套的智能体应用“小域医”上正式完成DeepSeek-R1模型的部署。依托DeepSeek的高性能和低成本优势，金域医学将持续打造以大模型为核心的技术和服务体系，构建多模态全场景的医检行业AI智能体，全面提升医检服务的智能化进程，实现对外服务和内部运营的整体提质增效", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.37, "first_limit_up": 1787190122, "break_limit_up_times": 1}, {"code": "002313", "name": "日海智能", "price": 8.78, "change_pct": 10.03, "reason": "公司推出多款端侧AI智能模组，如48TOPS算力的SIM9850等，支持语音交互、图像分析，为陪伴机器人、AR眼镜等场景提供高算力智能连接方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.6, "first_limit_up": 1787195250, "break_limit_up_times": 2}, {"code": "002399", "name": "海普瑞", "price": 11.28, "change_pct": 10.05, "reason": "公司聚焦创新药投资、开发及商业化，已持有超 20 个同类首创新药品种，覆盖超 30 种适应症；在研管线丰富，如心脑血管药物 Apabetalone等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 0.7, "first_limit_up": 1787189400, "break_limit_up_times": 1}, {"code": "002880", "name": "卫光生物", "price": 21.89, "change_pct": 10.0, "reason": "国有血制品公司，拟参与建设深圳市细胞与基因治疗市场化公共服务平台", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.19, "first_limit_up": 1787189625, "break_limit_up_times": 0}, {"code": "600327", "name": "大东方", "price": 4.24, "change_pct": 10.13, "reason": "1、公司旗下老字号“三凤桥”品牌，在各大主流平台设有“三凤桥旗舰店”，提真空及保鲜包装的各类卤味和熟食制品或礼盒套装，本地实体店在特定节日出售“年夜饭”预制礼盒；\n2、下属医疗业务板块中的儿科业务，主体主要包括以儿童身高管理为主的“健高儿科”、以儿心健康为主的“雅恩健康” 、以普儿科和儿保为主的“知贝医疗”组成，三个方向初步覆盖了儿童生长发育的全阶段", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.87, "first_limit_up": 1787195695, "break_limit_up_times": 3}, {"code": "002412", "name": "汉森制药", "price": 9.26, "change_pct": 9.98, "reason": "公司主营消化系统和心脑血管中药生产企业", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 0.87, "first_limit_up": 1787189100, "break_limit_up_times": 0}, {"code": "002552", "name": "宝鼎科技", "price": 57.04, "change_pct": 10.01, "reason": "公司控股子公司金宝电子专业从事电子铜箔、覆铜板设计、研发、生产及销售，是国内能提供设计至生产一体化全流程服务的少数企业之一；产品广泛应用于 5G 通讯、汽车电子等领域，其中电子铜箔有 HTE 箔、LP 箔等多种类型，覆铜板涵盖玻纤布基、复合基、铝基等，是 PCB 产业链中的重要供应商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 10.45, "first_limit_up": 1787190723, "break_limit_up_times": 6}, {"code": "600250", "name": "南京商旅", "price": 9.24, "change_pct": 10.0, "reason": "南京旅游集团下属唯一控股上市公司；公司旅游业务主要在子公司秦淮风光开展", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.83, "first_limit_up": 1787190197, "break_limit_up_times": 2}, {"code": "603036", "name": "如通股份", "price": 15.49, "change_pct": 10.01, "reason": "公司为钻采井口设备供应商，其所有产品可用于海洋油气能源的开采环节", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 9.06, "first_limit_up": 1787189607, "break_limit_up_times": 5}, {"code": "300006", "name": "莱美药业", "price": 5.94, "change_pct": 20.0, "reason": "公司产品是首家上市（独家）国产艾司奥美拉唑口服制剂，仿制药玛巴洛沙韦片获得伦理批件", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.3, "first_limit_up": 1787189100, "break_limit_up_times": 0}, {"code": "603578", "name": "三星新材", "price": 13.75, "change_pct": 10.0, "reason": "公司生物医疗低温存储设备可用于药品、试剂、疫苗、血液制品等生物医疗产品的低温存储", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.15, "first_limit_up": 1787192431, "break_limit_up_times": 0}, {"code": "688276", "name": "百克生物", "price": 18.71, "change_pct": 20.01, "reason": "公司拥有水痘疫苗、狂犬疫苗以及冻干鼻喷流感疫苗三种已获批的疫苗产品，其中水痘疫苗市占率国内第二、狂犬疫苗市占率国内第八，鼻喷流感疫苗是国内唯一鼻喷给药的流感疫苗", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.57, "first_limit_up": 1787189101, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};