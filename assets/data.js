const UPDATE_TIME = "2026-08-21 05:27";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 1.5,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续275天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -3.64,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "黄金概念",
    "rise": 1.21,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "数字货币",
    "rise": 0.82,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "MLCC概念",
    "rise": 1.9,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "科创配置LOF",
    "code": "886112"
  },
  {
    "name": "存储芯片",
    "rise": 0.39,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续228天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 0.99,
    "rate": 0,
    "tag": "",
    "hotTag": "连续98天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": 0.28,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续204天上榜",
    "rankChg": 0,
    "etfName": "航空航天ETF",
    "code": "886078"
  },
  {
    "name": "光纤概念",
    "rise": 0.65,
    "rate": 0,
    "tag": "",
    "hotTag": "连续104天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "算力租赁",
    "rise": -0.33,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续139天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": 0.36,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续439天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "液冷服务器",
    "rise": 0.97,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "粮食概念",
    "rise": -3.78,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "AI应用",
    "rise": -0.79,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续33天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "生物疫苗",
    "rise": -3.16,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885845"
  },
  {
    "name": "芯片概念",
    "rise": 0.4,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "F5G概念",
    "rise": 1.59,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "885998"
  },
  {
    "name": "ST板块",
    "rise": 0.6,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "机器人概念",
    "rise": 0.05,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "铜缆高速连接",
    "rise": 1.48,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886073"
  }
];
const THS_EVENTS = [
  {
    "title": "阿里财报：AI云收入增长45%，增速创22个季度新高",
    "desc": "",
    "heat": 290755,
    "direction": "阿里概念",
    "themes": [
      "阿里巴巴概念",
      "阿里系算力",
      "数据中心(AIDC)"
    ],
    "stocks": [
      {
        "name": "日科化学",
        "code": "300214",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "SK海力士加注CPO",
    "desc": "",
    "heat": 238824,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "深科达",
        "code": "688328",
        "chg": 19.994735
      }
    ]
  },
  {
    "title": "黄金收复4500美元关口，美债收益率与美元同步反弹",
    "desc": "",
    "heat": 232577,
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
        "chg": 10.06192
      }
    ]
  },
  {
    "title": "苹果9月9日将发布iPhone 18 Pro/Pro Max及首款折叠屏iPhone Ultra",
    "desc": "",
    "heat": 145257,
    "direction": "苹果折叠屏手机",
    "themes": [
      "苹果概念",
      "柔性屏(折叠屏)"
    ],
    "stocks": [
      {
        "name": "深科达",
        "code": "688328",
        "chg": 19.994735
      }
    ]
  },
  {
    "title": "《上海市城市更新和住房发展“十五五”规划》印发",
    "desc": "",
    "heat": 87486,
    "direction": "城市更新",
    "themes": [
      "新型城镇化",
      "智慧城市"
    ],
    "stocks": [
      {
        "name": "瑞斯康达",
        "code": "603803",
        "chg": 10.009718
      }
    ]
  },
  {
    "title": "特朗普签署备忘录以促进美航天发射 探索商业机器人登陆火星",
    "desc": "",
    "heat": 75383,
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
        "name": "*ST天箭",
        "code": "002977",
        "chg": 6.571146
      }
    ]
  },
  {
    "title": "“六张网”拉动投资效应显现,上市公司积极布局抢抓机遇,3家获机构密集调研",
    "desc": "",
    "heat": 65019,
    "direction": "算力网",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "博汇股份",
        "code": "300839",
        "chg": 20.019249
      }
    ]
  },
  {
    "title": "抗癌疫苗引爆资本市场 带“飞”A股医药四大赛道",
    "desc": "",
    "heat": 43115,
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
        "name": "康希诺",
        "code": "688185",
        "chg": 20.006208
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "白银",
    "change": "+4.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+3.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+3.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钼",
    "change": "+2.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+2.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+2.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+2.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+2.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+2.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+2.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+2.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+2.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+1.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铁矿石",
    "change": "+1.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液冷服务器",
    "change": "+1.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+1.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IGBT",
    "change": "+1.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+1.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+1.64%",
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
    "stock_cnt": 5840,
    "price": "8.17",
    "change": "-10.02",
    "market_id": "17",
    "circulate_market_value": "20576226000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.99
      },
      {
        "name": "工业大麻",
        "change_pct": -1.78
      },
      {
        "name": "中药",
        "change_pct": -3.37
      },
      {
        "name": "强势人气股",
        "change_pct": 0.61
      },
      {
        "name": "保健品",
        "change_pct": -3.06
      },
      {
        "name": "民营医院",
        "change_pct": -2.36
      },
      {
        "name": "医药",
        "change_pct": -3.42
      },
      {
        "name": "化学原料药",
        "change_pct": -3.53
      },
      {
        "name": "流感",
        "change_pct": -2.83
      },
      {
        "name": "振兴东北",
        "change_pct": -1.26
      },
      {
        "name": "食品",
        "change_pct": -2.56
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 3,
    "hot_rank_chg": 10,
    "stock_cnt": 5840,
    "price": "8.21",
    "change": "-4.54",
    "market_id": "17",
    "circulate_market_value": "5269040200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -2.11
      },
      {
        "name": "农业种植",
        "change_pct": -4.83
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.52
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.76
      },
      {
        "name": "休闲食品",
        "change_pct": -2.36
      },
      {
        "name": "食品",
        "change_pct": -2.56
      },
      {
        "name": "食品安全",
        "change_pct": -1.11
      },
      {
        "name": "社区团购",
        "change_pct": -2.02
      },
      {
        "name": "大农业",
        "change_pct": -1.75
      },
      {
        "name": "预制菜",
        "change_pct": -1.93
      },
      {
        "name": "人造肉",
        "change_pct": -2.64
      },
      {
        "name": "国企改革",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 4,
    "hot_rank_chg": 14,
    "stock_cnt": 5840,
    "price": "8.90",
    "change": "3.97",
    "market_id": "17",
    "circulate_market_value": "4265947800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.37
      },
      {
        "name": "强势人气股",
        "change_pct": 0.61
      },
      {
        "name": "医药商业",
        "change_pct": -4.01
      },
      {
        "name": "医药",
        "change_pct": -3.42
      },
      {
        "name": "流感",
        "change_pct": -2.83
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 16,
    "hot_rank_chg": -7,
    "stock_cnt": 5840,
    "price": "5.10",
    "change": "-8.11",
    "market_id": "33",
    "circulate_market_value": "13485641000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.61
      },
      {
        "name": "装修装饰",
        "change_pct": -0.37
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.57
      },
      {
        "name": "破净股",
        "change_pct": -1.19
      },
      {
        "name": "航天",
        "change_pct": 0.5
      },
      {
        "name": "旧改",
        "change_pct": -0.73
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 18,
    "hot_rank_chg": 1,
    "stock_cnt": 5840,
    "price": "4.36",
    "change": "-7.82",
    "market_id": "33",
    "circulate_market_value": "9156670800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.37
      },
      {
        "name": "强势人气股",
        "change_pct": 0.61
      },
      {
        "name": "维生素",
        "change_pct": -1.6
      },
      {
        "name": "基因测序",
        "change_pct": -2.35
      },
      {
        "name": "民营医院",
        "change_pct": -2.36
      },
      {
        "name": "医药",
        "change_pct": -3.42
      },
      {
        "name": "化学原料药",
        "change_pct": -3.53
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -5.24
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 19,
    "hot_rank_chg": 32,
    "stock_cnt": 5840,
    "price": "10.19",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "5073040600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.37
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.09
      },
      {
        "name": "农业种植",
        "change_pct": -4.83
      },
      {
        "name": "医药",
        "change_pct": -3.42
      },
      {
        "name": "流感",
        "change_pct": -2.83
      },
      {
        "name": "大农业",
        "change_pct": -1.75
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 21,
    "hot_rank_chg": -7,
    "stock_cnt": 5840,
    "price": "6.01",
    "change": "1.86",
    "market_id": "33",
    "circulate_market_value": "212556480000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.45
      },
      {
        "name": "手机产业链",
        "change_pct": 1.14
      },
      {
        "name": "超高清视频",
        "change_pct": -0.13
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.41
      },
      {
        "name": "电竞",
        "change_pct": -0.83
      },
      {
        "name": "半导体",
        "change_pct": 0.44
      },
      {
        "name": "人工智能",
        "change_pct": -0.6
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.37
      },
      {
        "name": "VR&AR",
        "change_pct": 0.41
      },
      {
        "name": "OLED",
        "change_pct": 0.43
      },
      {
        "name": "京津冀",
        "change_pct": -0.87
      },
      {
        "name": "物联网",
        "change_pct": -0.14
      },
      {
        "name": "指纹识别",
        "change_pct": 1.69
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.27
      },
      {
        "name": "白马股",
        "change_pct": -0.4
      },
      {
        "name": "智能制造",
        "change_pct": 0.26
      },
      {
        "name": "小米概念股",
        "change_pct": 0.47
      },
      {
        "name": "国产芯片",
        "change_pct": 0.49
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.06
      },
      {
        "name": "全息概念",
        "change_pct": -0.39
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.36
      },
      {
        "name": "MicroLED",
        "change_pct": 0.94
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.82
      },
      {
        "name": "智能手表",
        "change_pct": 0.94
      },
      {
        "name": "MiniLED",
        "change_pct": 1.04
      },
      {
        "name": "传感器",
        "change_pct": 0.31
      },
      {
        "name": "大硅片",
        "change_pct": -0.15
      },
      {
        "name": "AI PC",
        "change_pct": 0.64
      },
      {
        "name": "华为产业链",
        "change_pct": 0.29
      },
      {
        "name": "回购",
        "change_pct": -0.71
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.33
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.6
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.8
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 34,
    "hot_rank_chg": 5,
    "stock_cnt": 5840,
    "price": "11.78",
    "change": "-4.30",
    "market_id": "33",
    "circulate_market_value": "10994528600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.61
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.36
      },
      {
        "name": "新疆概念",
        "change_pct": -0.85
      },
      {
        "name": "光伏",
        "change_pct": 0.61
      },
      {
        "name": "风电",
        "change_pct": -0.25
      },
      {
        "name": "储能",
        "change_pct": 0.5
      },
      {
        "name": "国企改革",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 36,
    "hot_rank_chg": 24,
    "stock_cnt": 5840,
    "price": "11.32",
    "change": "2.72",
    "market_id": "17",
    "circulate_market_value": "20253045000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -2.03
      },
      {
        "name": "纯碱",
        "change_pct": -0.3
      },
      {
        "name": "食品",
        "change_pct": -2.56
      },
      {
        "name": "土壤修复",
        "change_pct": -0.64
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.29
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.9
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.46
      }
    ]
  },
  {
    "code": "003040",
    "name": "楚天龙",
    "hot_rank": 37,
    "hot_rank_chg": 237,
    "stock_cnt": 5840,
    "price": "12.79",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "5843114800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "数字人民币",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.36
      },
      {
        "name": "金融科技",
        "change_pct": 0.47
      },
      {
        "name": "人工智能",
        "change_pct": -0.6
      },
      {
        "name": "物联网",
        "change_pct": -0.14
      },
      {
        "name": "数字经济",
        "change_pct": -0.46
      },
      {
        "name": "国产操作系统",
        "change_pct": -0.66
      },
      {
        "name": "电子身份证",
        "change_pct": 0.83
      },
      {
        "name": "数字人民币",
        "change_pct": 0.83
      },
      {
        "name": "智慧政务",
        "change_pct": -0.28
      },
      {
        "name": "eSIM",
        "change_pct": 1.76
      },
      {
        "name": "区块链",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "002038",
    "name": "双鹭药业",
    "hot_rank": 39,
    "hot_rank_chg": 81,
    "stock_cnt": 5840,
    "price": "7.08",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "6031532100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "mRNA平台",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.78
      },
      {
        "name": "创新药",
        "change_pct": -3.72
      },
      {
        "name": "基因测序",
        "change_pct": -2.35
      },
      {
        "name": "民营医院",
        "change_pct": -2.36
      },
      {
        "name": "医药",
        "change_pct": -3.42
      },
      {
        "name": "疫苗",
        "change_pct": -2.04
      },
      {
        "name": "化学原料药",
        "change_pct": -3.53
      },
      {
        "name": "流感",
        "change_pct": -2.83
      },
      {
        "name": "长寿药NMN",
        "change_pct": -3.51
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.28
      },
      {
        "name": "肝素",
        "change_pct": -3.24
      },
      {
        "name": "基因编辑",
        "change_pct": -2.56
      },
      {
        "name": "肝炎概念",
        "change_pct": -3.35
      },
      {
        "name": "医美",
        "change_pct": -2.52
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -3.18
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.68
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": 0.24
      },
      {
        "name": "减肥药",
        "change_pct": -4.69
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 40,
    "hot_rank_chg": -15,
    "stock_cnt": 5840,
    "price": "10.76",
    "change": "-9.96",
    "market_id": "33",
    "circulate_market_value": "3061022100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 0.34
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.33
      },
      {
        "name": "强势人气股",
        "change_pct": 0.61
      },
      {
        "name": "教育",
        "change_pct": -1.1
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.86
      },
      {
        "name": "职业教育",
        "change_pct": -1.26
      },
      {
        "name": "在线教育",
        "change_pct": -0.79
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.7
      },
      {
        "name": "华为产业链",
        "change_pct": 0.29
      },
      {
        "name": "智谱AI",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "603801",
    "name": "志邦家居",
    "hot_rank": 45,
    "hot_rank_chg": 88,
    "stock_cnt": 5840,
    "price": "7.28",
    "change": "0.69",
    "market_id": "17",
    "circulate_market_value": "3162078800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "家具家居",
        "change_pct": -0.69
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 47,
    "hot_rank_chg": 0,
    "stock_cnt": 5840,
    "price": "6.81",
    "change": "-9.20",
    "market_id": "17",
    "circulate_market_value": "7754937200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.21
      },
      {
        "name": "强势人气股",
        "change_pct": 0.61
      },
      {
        "name": "光伏",
        "change_pct": 0.61
      },
      {
        "name": "特高压",
        "change_pct": -0.15
      },
      {
        "name": "智能电网",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 55,
    "hot_rank_chg": 76,
    "stock_cnt": 5840,
    "price": "9.49",
    "change": "2.82",
    "market_id": "17",
    "circulate_market_value": "6190098800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.36
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.13
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.18
      },
      {
        "name": "新零售",
        "change_pct": -1.55
      },
      {
        "name": "移动支付",
        "change_pct": 0.86
      },
      {
        "name": "京津冀",
        "change_pct": -0.87
      },
      {
        "name": "北京城市规划",
        "change_pct": -1.58
      },
      {
        "name": "国产芯片",
        "change_pct": 0.49
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.86
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.35
      },
      {
        "name": "物业管理",
        "change_pct": -1.53
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.57
      },
      {
        "name": "国企改革",
        "change_pct": -0.62
      },
      {
        "name": "数字人民币",
        "change_pct": 0.83
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 70,
    "hot_rank_chg": -28,
    "stock_cnt": 5840,
    "price": "6.55",
    "change": "-7.88",
    "market_id": "17",
    "circulate_market_value": "15659821000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.77
      },
      {
        "name": "强势人气股",
        "change_pct": 0.61
      },
      {
        "name": "国企改革",
        "change_pct": -0.62
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.45
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 74,
    "hot_rank_chg": -17,
    "stock_cnt": 5840,
    "price": "10.39",
    "change": "1.37",
    "market_id": "33",
    "circulate_market_value": "8405707300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.36
      },
      {
        "name": "大飞机",
        "change_pct": 0.43
      },
      {
        "name": "北斗导航",
        "change_pct": -0.04
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.0
      },
      {
        "name": "军民融合",
        "change_pct": 0.46
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.28
      },
      {
        "name": "军工",
        "change_pct": 0.42
      },
      {
        "name": "碳纤维",
        "change_pct": 0.4
      },
      {
        "name": "无人机",
        "change_pct": 0.02
      },
      {
        "name": "航天",
        "change_pct": 0.5
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.66
      },
      {
        "name": "低空经济",
        "change_pct": 0.12
      },
      {
        "name": "海洋经济",
        "change_pct": 0.19
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 78,
    "hot_rank_chg": -12,
    "stock_cnt": 5840,
    "price": "7.78",
    "change": "-0.13",
    "market_id": "33",
    "circulate_market_value": "5660605000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -0.36
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.56
      },
      {
        "name": "风电",
        "change_pct": -0.25
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.04
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.74
      },
      {
        "name": "建筑节能",
        "change_pct": -0.28
      },
      {
        "name": "旧改",
        "change_pct": -0.73
      }
    ]
  },
  {
    "code": "000710",
    "name": "贝瑞基因",
    "hot_rank": 79,
    "hot_rank_chg": 224,
    "stock_cnt": 5840,
    "price": "10.31",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "3397453500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI医疗",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -2.28
      },
      {
        "name": "体外诊断",
        "change_pct": -2.15
      },
      {
        "name": "医疗器械",
        "change_pct": -1.83
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.09
      },
      {
        "name": "人工智能",
        "change_pct": -0.59
      },
      {
        "name": "基因测序",
        "change_pct": -2.38
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.3
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.67
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.45
      },
      {
        "name": "AI医疗",
        "change_pct": -2.66
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 80,
    "hot_rank_chg": -15,
    "stock_cnt": 5840,
    "price": "5.89",
    "change": "-2.65",
    "market_id": "17",
    "circulate_market_value": "73012965000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.33
      },
      {
        "name": "核电",
        "change_pct": 0.23
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.87
      },
      {
        "name": "水电",
        "change_pct": -0.87
      },
      {
        "name": "火电",
        "change_pct": -1.01
      },
      {
        "name": "光伏",
        "change_pct": 0.62
      },
      {
        "name": "风电",
        "change_pct": -0.25
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "算电协同",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 83,
    "hot_rank_chg": 17,
    "stock_cnt": 5840,
    "price": "10.42",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "24200197000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "半年报增长",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 2.13
      },
      {
        "name": "有色 · 铜",
        "change_pct": 1.64
      },
      {
        "name": "有色 · 锑",
        "change_pct": 2.06
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.55
      },
      {
        "name": "有色 · 锌",
        "change_pct": 2.56
      },
      {
        "name": "有色金属",
        "change_pct": 1.14
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "白银",
        "change_pct": 4.23
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 84,
    "hot_rank_chg": -23,
    "stock_cnt": 5840,
    "price": "6.74",
    "change": "-10.01",
    "market_id": "33",
    "circulate_market_value": "4262243500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -1.36
      },
      {
        "name": "京津冀",
        "change_pct": -0.86
      },
      {
        "name": "调味品",
        "change_pct": -2.04
      },
      {
        "name": "海南概念",
        "change_pct": -1.27
      },
      {
        "name": "休闲食品",
        "change_pct": -2.37
      },
      {
        "name": "食品",
        "change_pct": -2.55
      },
      {
        "name": "人造肉",
        "change_pct": -2.63
      }
    ]
  },
  {
    "code": "600250",
    "name": "南京商旅",
    "hot_rank": 87,
    "hot_rank_chg": 113,
    "stock_cnt": 5840,
    "price": "9.26",
    "change": "0.22",
    "market_id": "17",
    "circulate_market_value": "2896448400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.97
      },
      {
        "name": "新零售",
        "change_pct": -1.52
      },
      {
        "name": "养老产业",
        "change_pct": -1.77
      },
      {
        "name": "旅游",
        "change_pct": -1.21
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.5
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.81
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 89,
    "hot_rank_chg": -26,
    "stock_cnt": 5840,
    "price": "3.14",
    "change": "-3.38",
    "market_id": "33",
    "circulate_market_value": "14669291000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.4
      },
      {
        "name": "股权转让",
        "change_pct": 0.0
      },
      {
        "name": "房地产",
        "change_pct": -1.59
      },
      {
        "name": "京津冀",
        "change_pct": -0.86
      },
      {
        "name": "旅游",
        "change_pct": -1.21
      },
      {
        "name": "国产芯片",
        "change_pct": 0.47
      },
      {
        "name": "内存",
        "change_pct": 0.84
      },
      {
        "name": "闪存",
        "change_pct": 0.26
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.15
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 90,
    "hot_rank_chg": 262,
    "stock_cnt": 5840,
    "price": "7.11",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "3134244100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "黄金珠宝",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -0.11
      },
      {
        "name": "锂电池",
        "change_pct": 1.3
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.76
      },
      {
        "name": "两轮车",
        "change_pct": -0.54
      },
      {
        "name": "珠宝饰品",
        "change_pct": -0.11
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 91,
    "hot_rank_chg": -37,
    "stock_cnt": 5840,
    "price": "6.45",
    "change": "-6.79",
    "market_id": "17",
    "circulate_market_value": "6980181400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.33
      },
      {
        "name": "农业种植",
        "change_pct": -4.85
      },
      {
        "name": "化肥",
        "change_pct": -1.18
      },
      {
        "name": "转基因",
        "change_pct": -5.38
      },
      {
        "name": "土地流转",
        "change_pct": -2.99
      },
      {
        "name": "农垦",
        "change_pct": -3.34
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.74
      },
      {
        "name": "大农业",
        "change_pct": -1.74
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "大豆",
        "change_pct": -4.33
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 94,
    "hot_rank_chg": -5,
    "stock_cnt": 5840,
    "price": "5.59",
    "change": "-11.83",
    "market_id": "33",
    "circulate_market_value": "4954139900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -4.85
      },
      {
        "name": "土地流转",
        "change_pct": -2.99
      },
      {
        "name": "海南概念",
        "change_pct": -1.27
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.18
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -1.87
      },
      {
        "name": "大农业",
        "change_pct": -1.74
      },
      {
        "name": "水产养殖",
        "change_pct": -2.12
      },
      {
        "name": "自贸区",
        "change_pct": -0.89
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 99,
    "hot_rank_chg": -44,
    "stock_cnt": 5840,
    "price": "4.08",
    "change": "-8.11",
    "market_id": "33",
    "circulate_market_value": "3121774200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.37
      },
      {
        "name": "股权转让",
        "change_pct": 0.0
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.09
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "医药商业",
        "change_pct": -4.0
      },
      {
        "name": "保健品",
        "change_pct": -3.07
      },
      {
        "name": "民营医院",
        "change_pct": -2.36
      },
      {
        "name": "医药",
        "change_pct": -3.42
      },
      {
        "name": "食品",
        "change_pct": -2.55
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.3
      },
      {
        "name": "口腔",
        "change_pct": -1.54
      },
      {
        "name": "医美",
        "change_pct": -2.51
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.67
      }
    ]
  },
  {
    "code": "603318",
    "name": "水发燃气",
    "hot_rank": 100,
    "hot_rank_chg": 548,
    "stock_cnt": 5840,
    "price": "9.54",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4379536600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "氦气",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": 1.15
      },
      {
        "name": "电子特气",
        "change_pct": 1.57
      },
      {
        "name": "一带一路",
        "change_pct": -0.19
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "天然气",
        "change_pct": 0.34
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.67
      },
      {
        "name": "国企改革",
        "change_pct": -0.61
      },
      {
        "name": "氦气",
        "change_pct": 2.55
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "699.00", "change": "1.75", "market_id": "17", "circulate_market_value": "21031316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "8.17", "change": "-10.02", "market_id": "17", "circulate_market_value": "20576226000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.99}, {"name": "工业大麻", "change_pct": -1.78}, {"name": "中药", "change_pct": -3.37}, {"name": "强势人气股", "change_pct": 0.61}, {"name": "保健品", "change_pct": -3.06}, {"name": "民营医院", "change_pct": -2.36}, {"name": "医药", "change_pct": -3.42}, {"name": "化学原料药", "change_pct": -3.53}, {"name": "流感", "change_pct": -2.83}, {"name": "振兴东北", "change_pct": -1.26}, {"name": "食品", "change_pct": -2.56}]}, {"code": "600127", "name": "金健米业", "hot_rank": 3, "hot_rank_chg": 10, "stock_cnt": 5840, "price": "8.21", "change": "-4.54", "market_id": "17", "circulate_market_value": "5269040200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -2.11}, {"name": "农业种植", "change_pct": -4.83}, {"name": "湖南国企改革", "change_pct": -0.52}, {"name": "乡村振兴", "change_pct": -1.76}, {"name": "休闲食品", "change_pct": -2.36}, {"name": "食品", "change_pct": -2.56}, {"name": "食品安全", "change_pct": -1.11}, {"name": "社区团购", "change_pct": -2.02}, {"name": "大农业", "change_pct": -1.75}, {"name": "预制菜", "change_pct": -1.93}, {"name": "人造肉", "change_pct": -2.64}, {"name": "国企改革", "change_pct": -0.62}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 4, "hot_rank_chg": 14, "stock_cnt": 5840, "price": "8.90", "change": "3.97", "market_id": "17", "circulate_market_value": "4265947800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.37}, {"name": "强势人气股", "change_pct": 0.61}, {"name": "医药商业", "change_pct": -4.01}, {"name": "医药", "change_pct": -3.42}, {"name": "流感", "change_pct": -2.83}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 5, "hot_rank_chg": 7, "stock_cnt": 5840, "price": "20.79", "change": "7.89", "market_id": "33", "circulate_market_value": "24458786000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5840, "price": "31.55", "change": "-9.99", "market_id": "17", "circulate_market_value": "12651550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "57.98", "change": "0.71", "market_id": "17", "circulate_market_value": "261086200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 8, "hot_rank_chg": 61, "stock_cnt": 5840, "price": "35.89", "change": "9.99", "market_id": "17", "circulate_market_value": "59723539000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "SiC"}, {"code": "600487", "name": "亨通光电", "hot_rank": 9, "hot_rank_chg": -4, "stock_cnt": 5840, "price": "61.92", "change": "-0.16", "market_id": "17", "circulate_market_value": "151929780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 10, "hot_rank_chg": 64, "stock_cnt": 5840, "price": "17.69", "change": "4.06", "market_id": "17", "circulate_market_value": "13926920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "54.69", "change": "2.96", "market_id": "33", "circulate_market_value": "62721802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 12, "hot_rank_chg": -4, "stock_cnt": 5840, "price": "54.16", "change": "-4.41", "market_id": "17", "circulate_market_value": "45849328000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 13, "hot_rank_chg": 3, "stock_cnt": 5840, "price": "13.13", "change": "-3.88", "market_id": "17", "circulate_market_value": "5049110400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 14, "hot_rank_chg": 1, "stock_cnt": 5840, "price": "21.41", "change": "0.94", "market_id": "17", "circulate_market_value": "44779918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 15, "hot_rank_chg": -11, "stock_cnt": 5840, "price": "27.53", "change": "-3.74", "market_id": "17", "circulate_market_value": "6669693100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 16, "hot_rank_chg": -7, "stock_cnt": 5840, "price": "5.10", "change": "-8.11", "market_id": "33", "circulate_market_value": "13485641000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.61}, {"name": "装修装饰", "change_pct": -0.37}, {"name": "装配式建筑", "change_pct": -0.57}, {"name": "破净股", "change_pct": -1.19}, {"name": "航天", "change_pct": 0.5}, {"name": "旧改", "change_pct": -0.73}]}, {"code": "300142", "name": "沃森生物", "hot_rank": 17, "hot_rank_chg": 17, "stock_cnt": 5840, "price": "16.38", "change": "7.94", "market_id": "33", "circulate_market_value": "25735343000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 18, "hot_rank_chg": 1, "stock_cnt": 5840, "price": "4.36", "change": "-7.82", "market_id": "33", "circulate_market_value": "9156670800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.37}, {"name": "强势人气股", "change_pct": 0.61}, {"name": "维生素", "change_pct": -1.6}, {"name": "基因测序", "change_pct": -2.35}, {"name": "民营医院", "change_pct": -2.36}, {"name": "医药", "change_pct": -3.42}, {"name": "化学原料药", "change_pct": -3.53}, {"name": "PD-1抑制剂", "change_pct": -5.24}]}, {"code": "002412", "name": "汉森制药", "hot_rank": 19, "hot_rank_chg": 32, "stock_cnt": 5840, "price": "10.19", "change": "10.04", "market_id": "33", "circulate_market_value": "5073040600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": -3.37}, {"name": "优化生育（三孩）", "change_pct": -2.09}, {"name": "农业种植", "change_pct": -4.83}, {"name": "医药", "change_pct": -3.42}, {"name": "流感", "change_pct": -2.83}, {"name": "大农业", "change_pct": -1.75}]}, {"code": "600584", "name": "长电科技", "hot_rank": 20, "hot_rank_chg": -14, "stock_cnt": 5840, "price": "78.85", "change": "-0.79", "market_id": "17", "circulate_market_value": "141095340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 21, "hot_rank_chg": -7, "stock_cnt": 5840, "price": "6.01", "change": "1.86", "market_id": "33", "circulate_market_value": "212556480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.45}, {"name": "手机产业链", "change_pct": 1.14}, {"name": "超高清视频", "change_pct": -0.13}, {"name": "苹果产业链", "change_pct": 1.41}, {"name": "电竞", "change_pct": -0.83}, {"name": "半导体", "change_pct": 0.44}, {"name": "人工智能", "change_pct": -0.6}, {"name": "互联网医疗", "change_pct": -2.37}, {"name": "VR&AR", "change_pct": 0.41}, {"name": "OLED", "change_pct": 0.43}, {"name": "京津冀", "change_pct": -0.87}, {"name": "物联网", "change_pct": -0.14}, {"name": "指纹识别", "change_pct": 1.69}, {"name": "汽车零部件", "change_pct": 0.27}, {"name": "白马股", "change_pct": -0.4}, {"name": "智能制造", "change_pct": 0.26}, {"name": "小米概念股", "change_pct": 0.47}, {"name": "国产芯片", "change_pct": 0.49}, {"name": "液晶面板/LCD", "change_pct": 0.06}, {"name": "全息概念", "change_pct": -0.39}, {"name": "理想汽车概念股", "change_pct": 0.36}, {"name": "MicroLED", "change_pct": 0.94}, {"name": "钙钛矿电池", "change_pct": 0.82}, {"name": "智能手表", "change_pct": 0.94}, {"name": "MiniLED", "change_pct": 1.04}, {"name": "传感器", "change_pct": 0.31}, {"name": "大硅片", "change_pct": -0.15}, {"name": "AI PC", "change_pct": 0.64}, {"name": "华为产业链", "change_pct": 0.29}, {"name": "回购", "change_pct": -0.71}, {"name": "光电共封装CPO", "change_pct": 1.33}, {"name": "智能眼镜/MR头显", "change_pct": 0.6}, {"name": "玻璃基板封装", "change_pct": 0.8}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 22, "hot_rank_chg": 9, "stock_cnt": 5840, "price": "41.89", "change": "1.14", "market_id": "17", "circulate_market_value": "166369780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 23, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "81.21", "change": "8.58", "market_id": "17", "circulate_market_value": "10611970600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 24, "hot_rank_chg": 8, "stock_cnt": 5840, "price": "27.89", "change": "-7.62", "market_id": "17", "circulate_market_value": "24051262000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 25, "hot_rank_chg": -15, "stock_cnt": 5840, "price": "164.08", "change": "-2.27", "market_id": "17", "circulate_market_value": "405840560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 26, "hot_rank_chg": -2, "stock_cnt": 5840, "price": "406.59", "change": "0.77", "market_id": "17", "circulate_market_value": "271802140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 27, "hot_rank_chg": -5, "stock_cnt": 5840, "price": "36.00", "change": "-0.03", "market_id": "33", "circulate_market_value": "38913059000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 28, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "34.20", "change": "1.09", "market_id": "17", "circulate_market_value": "704581330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 29, "hot_rank_chg": 7, "stock_cnt": 5840, "price": "36.22", "change": "1.57", "market_id": "33", "circulate_market_value": "103591832000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 30, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "939.01", "change": "3.94", "market_id": "33", "circulate_market_value": "1043132500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 31, "hot_rank_chg": -14, "stock_cnt": 5840, "price": "13.57", "change": "2.49", "market_id": "17", "circulate_market_value": "9231938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 32, "hot_rank_chg": 45, "stock_cnt": 5840, "price": "441.91", "change": "6.74", "market_id": "33", "circulate_market_value": "554262590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 33, "hot_rank_chg": -12, "stock_cnt": 5840, "price": "19.05", "change": "-3.98", "market_id": "33", "circulate_market_value": "64074772000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 34, "hot_rank_chg": 5, "stock_cnt": 5840, "price": "11.78", "change": "-4.30", "market_id": "33", "circulate_market_value": "10994528600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.61}, {"name": "新疆国企改革", "change_pct": -1.36}, {"name": "新疆概念", "change_pct": -0.85}, {"name": "光伏", "change_pct": 0.61}, {"name": "风电", "change_pct": -0.25}, {"name": "储能", "change_pct": 0.5}, {"name": "国企改革", "change_pct": -0.62}]}, {"code": "002579", "name": "中京电子", "hot_rank": 35, "hot_rank_chg": 10, "stock_cnt": 5840, "price": "14.86", "change": "-2.81", "market_id": "33", "circulate_market_value": "8669500700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 36, "hot_rank_chg": 24, "stock_cnt": 5840, "price": "11.32", "change": "2.72", "market_id": "17", "circulate_market_value": "20253045000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -2.03}, {"name": "纯碱", "change_pct": -0.3}, {"name": "食品", "change_pct": -2.56}, {"name": "土壤修复", "change_pct": -0.64}, {"name": "东数西算/算力", "change_pct": -0.29}, {"name": "OpenClaw概念", "change_pct": -0.9}, {"name": "DeepSeek概念股", "change_pct": -0.46}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 37, "hot_rank_chg": 237, "stock_cnt": 5840, "price": "12.79", "change": "9.97", "market_id": "33", "circulate_market_value": "5843114800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数字人民币", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.36}, {"name": "金融科技", "change_pct": 0.47}, {"name": "人工智能", "change_pct": -0.6}, {"name": "物联网", "change_pct": -0.14}, {"name": "数字经济", "change_pct": -0.46}, {"name": "国产操作系统", "change_pct": -0.66}, {"name": "电子身份证", "change_pct": 0.83}, {"name": "数字人民币", "change_pct": 0.83}, {"name": "智慧政务", "change_pct": -0.28}, {"name": "eSIM", "change_pct": 1.76}, {"name": "区块链", "change_pct": -0.12}]}, {"code": "603629", "name": "利通电子", "hot_rank": 38, "hot_rank_chg": -18, "stock_cnt": 5840, "price": "126.70", "change": "-2.96", "market_id": "17", "circulate_market_value": "45703655000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002038", "name": "双鹭药业", "hot_rank": 39, "hot_rank_chg": 81, "stock_cnt": 5840, "price": "7.08", "change": "9.94", "market_id": "33", "circulate_market_value": "6031532100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "mRNA平台", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.78}, {"name": "创新药", "change_pct": -3.72}, {"name": "基因测序", "change_pct": -2.35}, {"name": "民营医院", "change_pct": -2.36}, {"name": "医药", "change_pct": -3.42}, {"name": "疫苗", "change_pct": -2.04}, {"name": "化学原料药", "change_pct": -3.53}, {"name": "流感", "change_pct": -2.83}, {"name": "长寿药NMN", "change_pct": -3.51}, {"name": "辅助生殖", "change_pct": -2.28}, {"name": "肝素", "change_pct": -3.24}, {"name": "基因编辑", "change_pct": -2.56}, {"name": "肝炎概念", "change_pct": -3.35}, {"name": "医美", "change_pct": -2.52}, {"name": "阿尔茨海默病", "change_pct": -3.18}, {"name": "新冠病毒防治", "change_pct": -1.68}, {"name": "肿瘤疫苗", "change_pct": 0.24}, {"name": "减肥药", "change_pct": -4.69}]}, {"code": "003032", "name": "传智教育", "hot_rank": 40, "hot_rank_chg": -15, "stock_cnt": 5840, "price": "10.76", "change": "-9.96", "market_id": "33", "circulate_market_value": "3061022100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.34}, {"name": "ST摘帽", "change_pct": -0.33}, {"name": "强势人气股", "change_pct": 0.61}, {"name": "教育", "change_pct": -1.1}, {"name": "阿里巴巴概念股", "change_pct": -0.86}, {"name": "职业教育", "change_pct": -1.26}, {"name": "在线教育", "change_pct": -0.79}, {"name": "华为鸿蒙", "change_pct": -0.7}, {"name": "华为产业链", "change_pct": 0.29}, {"name": "智谱AI", "change_pct": -0.97}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 41, "hot_rank_chg": -12, "stock_cnt": 5840, "price": "101.11", "change": "-2.37", "market_id": "33", "circulate_market_value": "66028432000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 42, "hot_rank_chg": 10, "stock_cnt": 5840, "price": "77.75", "change": "-10.00", "market_id": "17", "circulate_market_value": "32372589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 43, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "28.51", "change": "-10.01", "market_id": "17", "circulate_market_value": "9605587800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 44, "hot_rank_chg": -18, "stock_cnt": 5840, "price": "13.51", "change": "0.45", "market_id": "17", "circulate_market_value": "17323181000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603801", "name": "志邦家居", "hot_rank": 45, "hot_rank_chg": 88, "stock_cnt": 5840, "price": "7.28", "change": "0.69", "market_id": "17", "circulate_market_value": "3162078800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "家具家居", "change_pct": -0.69}]}, {"code": "002156", "name": "通富微电", "hot_rank": 46, "hot_rank_chg": -2, "stock_cnt": 5840, "price": "64.15", "change": "1.58", "market_id": "33", "circulate_market_value": "97344560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 47, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "6.81", "change": "-9.20", "market_id": "17", "circulate_market_value": "7754937200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.21}, {"name": "强势人气股", "change_pct": 0.61}, {"name": "光伏", "change_pct": 0.61}, {"name": "特高压", "change_pct": -0.15}, {"name": "智能电网", "change_pct": -0.2}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 48, "hot_rank_chg": 60, "stock_cnt": 5840, "price": "69.26", "change": "10.08", "market_id": "33", "circulate_market_value": "59083835000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 49, "hot_rank_chg": -22, "stock_cnt": 5840, "price": "56.15", "change": "-1.56", "market_id": "33", "circulate_market_value": "20691460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 50, "hot_rank_chg": -12, "stock_cnt": 5840, "price": "203.56", "change": "2.98", "market_id": "33", "circulate_market_value": "282199650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 51, "hot_rank_chg": -16, "stock_cnt": 5840, "price": "14.29", "change": "-2.59", "market_id": "17", "circulate_market_value": "21044980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 52, "hot_rank_chg": 58, "stock_cnt": 5840, "price": "33.17", "change": "10.02", "market_id": "33", "circulate_market_value": "25123459000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "603626", "name": "科森科技", "hot_rank": 53, "hot_rank_chg": 101, "stock_cnt": 5840, "price": "18.65", "change": "10.03", "market_id": "17", "circulate_market_value": "10348506200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "折叠屏"}, {"code": "002747", "name": "埃斯顿", "hot_rank": 54, "hot_rank_chg": -14, "stock_cnt": 5840, "price": "33.50", "change": "2.23", "market_id": "33", "circulate_market_value": "26211578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603123", "name": "翠微股份", "hot_rank": 55, "hot_rank_chg": 76, "stock_cnt": 5840, "price": "9.49", "change": "2.82", "market_id": "17", "circulate_market_value": "6190098800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.36}, {"name": "蚂蚁集团概念股", "change_pct": -0.13}, {"name": "无人驾驶", "change_pct": -0.18}, {"name": "新零售", "change_pct": -1.55}, {"name": "移动支付", "change_pct": 0.86}, {"name": "京津冀", "change_pct": -0.87}, {"name": "北京城市规划", "change_pct": -1.58}, {"name": "国产芯片", "change_pct": 0.49}, {"name": "阿里巴巴概念股", "change_pct": -0.86}, {"name": "腾讯概念股", "change_pct": -0.35}, {"name": "物业管理", "change_pct": -1.53}, {"name": "字节跳动概念股", "change_pct": -0.57}, {"name": "国企改革", "change_pct": -0.62}, {"name": "数字人民币", "change_pct": 0.83}]}, {"code": "603958", "name": "哈森股份", "hot_rank": 56, "hot_rank_chg": 81, "stock_cnt": 5840, "price": "20.55", "change": "10.01", "market_id": "17", "circulate_market_value": "4507848000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "苹果产业链"}, {"code": "002900", "name": "哈三联", "hot_rank": 57, "hot_rank_chg": -9, "stock_cnt": 5840, "price": "13.77", "change": "-10.00", "market_id": "33", "circulate_market_value": "2218655400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 59, "hot_rank_chg": -10, "stock_cnt": 5840, "price": "16.50", "change": "-9.98", "market_id": "17", "circulate_market_value": "2640000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 60, "hot_rank_chg": 32, "stock_cnt": 5840, "price": "35.42", "change": "6.40", "market_id": "33", "circulate_market_value": "23608426000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 61, "hot_rank_chg": -24, "stock_cnt": 5840, "price": "47.89", "change": "-3.25", "market_id": "17", "circulate_market_value": "305490420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300570", "name": "太辰光", "hot_rank": 62, "hot_rank_chg": -29, "stock_cnt": 5840, "price": "216.85", "change": "1.66", "market_id": "33", "circulate_market_value": "41696228000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002971", "name": "和远气体", "hot_rank": 63, "hot_rank_chg": 477, "stock_cnt": 5840, "price": "46.61", "change": "10.01", "market_id": "33", "circulate_market_value": "7504421900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "定增获批"}, {"code": "600869", "name": "远东股份", "hot_rank": 64, "hot_rank_chg": 3, "stock_cnt": 5840, "price": "16.80", "change": "1.21", "market_id": "17", "circulate_market_value": "37285126000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001277", "name": "速达股份", "hot_rank": 65, "hot_rank_chg": 163, "stock_cnt": 5840, "price": "37.28", "change": "1.99", "market_id": "33", "circulate_market_value": "1684875600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 66, "hot_rank_chg": 14, "stock_cnt": 5840, "price": "48.73", "change": "5.71", "market_id": "17", "circulate_market_value": "81082401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 67, "hot_rank_chg": -8, "stock_cnt": 5840, "price": "36.26", "change": "2.72", "market_id": "17", "circulate_market_value": "131059716000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601318", "name": "中国平安", "hot_rank": 68, "hot_rank_chg": 72, "stock_cnt": 5840, "price": "53.45", "change": "2.51", "market_id": "17", "circulate_market_value": "569780480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002365", "name": "永安药业", "hot_rank": 69, "hot_rank_chg": 37, "stock_cnt": 5840, "price": "16.65", "change": "5.65", "market_id": "33", "circulate_market_value": "4084053000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 70, "hot_rank_chg": -28, "stock_cnt": 5840, "price": "6.55", "change": "-7.88", "market_id": "17", "circulate_market_value": "15659821000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.77}, {"name": "强势人气股", "change_pct": 0.61}, {"name": "国企改革", "change_pct": -0.62}, {"name": "河南国企改革", "change_pct": -0.45}]}, {"code": "600522", "name": "中天科技", "hot_rank": 71, "hot_rank_chg": -30, "stock_cnt": 5840, "price": "33.31", "change": "1.43", "market_id": "17", "circulate_market_value": "113685353000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 72, "hot_rank_chg": -19, "stock_cnt": 5840, "price": "17.36", "change": "0.06", "market_id": "33", "circulate_market_value": "57681235000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300139", "name": "晓程科技", "hot_rank": 73, "hot_rank_chg": 51, "stock_cnt": 5840, "price": "51.41", "change": "3.96", "market_id": "33", "circulate_market_value": "12012420800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 74, "hot_rank_chg": -17, "stock_cnt": 5840, "price": "10.39", "change": "1.37", "market_id": "33", "circulate_market_value": "8405707300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.36}, {"name": "大飞机", "change_pct": 0.43}, {"name": "北斗导航", "change_pct": -0.04}, {"name": "高铁轨交", "change_pct": -0.0}, {"name": "军民融合", "change_pct": 0.46}, {"name": "磁悬浮", "change_pct": -0.28}, {"name": "军工", "change_pct": 0.42}, {"name": "碳纤维", "change_pct": 0.4}, {"name": "无人机", "change_pct": 0.02}, {"name": "航天", "change_pct": 0.5}, {"name": "卫星互联网", "change_pct": 0.66}, {"name": "低空经济", "change_pct": 0.12}, {"name": "海洋经济", "change_pct": 0.19}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 75, "hot_rank_chg": -25, "stock_cnt": 5840, "price": "276.60", "change": "0.13", "market_id": "33", "circulate_market_value": "301048130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 77, "hot_rank_chg": -9, "stock_cnt": 5840, "price": "19.88", "change": "2.21", "market_id": "33", "circulate_market_value": "18462694000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 78, "hot_rank_chg": -12, "stock_cnt": 5840, "price": "7.78", "change": "-0.13", "market_id": "33", "circulate_market_value": "5660605000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -0.36}, {"name": "装配式建筑", "change_pct": -0.56}, {"name": "风电", "change_pct": -0.25}, {"name": "环氧丙烷", "change_pct": 0.04}, {"name": "乡村振兴", "change_pct": -1.74}, {"name": "建筑节能", "change_pct": -0.28}, {"name": "旧改", "change_pct": -0.73}]}, {"code": "000710", "name": "贝瑞基因", "hot_rank": 79, "hot_rank_chg": 224, "stock_cnt": 5840, "price": "10.31", "change": "10.03", "market_id": "33", "circulate_market_value": "3397453500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI医疗", "xgb_concepts": [{"name": "精准医疗", "change_pct": -2.28}, {"name": "体外诊断", "change_pct": -2.15}, {"name": "医疗器械", "change_pct": -1.83}, {"name": "优化生育（三孩）", "change_pct": -2.09}, {"name": "人工智能", "change_pct": -0.59}, {"name": "基因测序", "change_pct": -2.38}, {"name": "辅助生殖", "change_pct": -2.3}, {"name": "新冠病毒防治", "change_pct": -1.67}, {"name": "DeepSeek概念股", "change_pct": -0.45}, {"name": "AI医疗", "change_pct": -2.66}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 80, "hot_rank_chg": -15, "stock_cnt": 5840, "price": "5.89", "change": "-2.65", "market_id": "17", "circulate_market_value": "73012965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.33}, {"name": "核电", "change_pct": 0.23}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "电力体制改革", "change_pct": -0.87}, {"name": "水电", "change_pct": -0.87}, {"name": "火电", "change_pct": -1.01}, {"name": "光伏", "change_pct": 0.62}, {"name": "风电", "change_pct": -0.25}, {"name": "国企改革", "change_pct": -0.61}, {"name": "算电协同", "change_pct": 0.01}]}, {"code": "600367", "name": "红星发展", "hot_rank": 81, "hot_rank_chg": -17, "stock_cnt": 5840, "price": "34.98", "change": "-2.54", "market_id": "17", "circulate_market_value": "11262621900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 82, "hot_rank_chg": -36, "stock_cnt": 5840, "price": "39.97", "change": "2.91", "market_id": "17", "circulate_market_value": "58450552000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 83, "hot_rank_chg": 17, "stock_cnt": 5840, "price": "10.42", "change": "10.03", "market_id": "33", "circulate_market_value": "24200197000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长", "xgb_concepts": [{"name": "黄金", "change_pct": 2.13}, {"name": "有色 · 铜", "change_pct": 1.64}, {"name": "有色 · 锑", "change_pct": 2.06}, {"name": "湖南国企改革", "change_pct": -0.55}, {"name": "有色 · 锌", "change_pct": 2.56}, {"name": "有色金属", "change_pct": 1.14}, {"name": "国企改革", "change_pct": -0.61}, {"name": "白银", "change_pct": 4.23}]}, {"code": "000505", "name": "京粮控股", "hot_rank": 84, "hot_rank_chg": -23, "stock_cnt": 5840, "price": "6.74", "change": "-10.01", "market_id": "33", "circulate_market_value": "4262243500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": -1.36}, {"name": "京津冀", "change_pct": -0.86}, {"name": "调味品", "change_pct": -2.04}, {"name": "海南概念", "change_pct": -1.27}, {"name": "休闲食品", "change_pct": -2.37}, {"name": "食品", "change_pct": -2.55}, {"name": "人造肉", "change_pct": -2.63}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 85, "hot_rank_chg": -29, "stock_cnt": 5840, "price": "61.90", "change": "0.75", "market_id": "17", "circulate_market_value": "73196077000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 86, "hot_rank_chg": 18, "stock_cnt": 5840, "price": "173.84", "change": "6.00", "market_id": "17", "circulate_market_value": "27256464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600250", "name": "南京商旅", "hot_rank": 87, "hot_rank_chg": 113, "stock_cnt": 5840, "price": "9.26", "change": "0.22", "market_id": "17", "circulate_market_value": "2896448400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.97}, {"name": "新零售", "change_pct": -1.52}, {"name": "养老产业", "change_pct": -1.77}, {"name": "旅游", "change_pct": -1.21}, {"name": "外贸受益概念", "change_pct": -0.5}, {"name": "江苏国企改革", "change_pct": -0.81}, {"name": "国企改革", "change_pct": -0.61}]}, {"code": "600536", "name": "中国软件", "hot_rank": 88, "hot_rank_chg": -16, "stock_cnt": 5840, "price": "33.94", "change": "-5.59", "market_id": "17", "circulate_market_value": "28633681000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 89, "hot_rank_chg": -26, "stock_cnt": 5840, "price": "3.14", "change": "-3.38", "market_id": "33", "circulate_market_value": "14669291000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.4}, {"name": "股权转让", "change_pct": 0.0}, {"name": "房地产", "change_pct": -1.59}, {"name": "京津冀", "change_pct": -0.86}, {"name": "旅游", "change_pct": -1.21}, {"name": "国产芯片", "change_pct": 0.47}, {"name": "内存", "change_pct": 0.84}, {"name": "闪存", "change_pct": 0.26}, {"name": "IP经济/谷子经济", "change_pct": -1.15}]}, {"code": "000017", "name": "深中华A", "hot_rank": 90, "hot_rank_chg": 262, "stock_cnt": 5840, "price": "7.11", "change": "10.06", "market_id": "33", "circulate_market_value": "3134244100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.11}, {"name": "锂电池", "change_pct": 1.3}, {"name": "新能源汽车", "change_pct": 0.76}, {"name": "两轮车", "change_pct": -0.54}, {"name": "珠宝饰品", "change_pct": -0.11}]}, {"code": "600313", "name": "农发种业", "hot_rank": 91, "hot_rank_chg": -37, "stock_cnt": 5840, "price": "6.45", "change": "-6.79", "market_id": "17", "circulate_market_value": "6980181400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.33}, {"name": "农业种植", "change_pct": -4.85}, {"name": "化肥", "change_pct": -1.18}, {"name": "转基因", "change_pct": -5.38}, {"name": "土地流转", "change_pct": -2.99}, {"name": "农垦", "change_pct": -3.34}, {"name": "乡村振兴", "change_pct": -1.74}, {"name": "大农业", "change_pct": -1.74}, {"name": "国企改革", "change_pct": -0.61}, {"name": "大豆", "change_pct": -4.33}]}, {"code": "600737", "name": "中粮糖业", "hot_rank": 92, "hot_rank_chg": -34, "stock_cnt": 5840, "price": "14.51", "change": "-8.45", "market_id": "17", "circulate_market_value": "31034688000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 93, "hot_rank_chg": -23, "stock_cnt": 5840, "price": "404.60", "change": "1.63", "market_id": "33", "circulate_market_value": "66770755000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 94, "hot_rank_chg": -5, "stock_cnt": 5840, "price": "5.59", "change": "-11.83", "market_id": "33", "circulate_market_value": "4954139900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -4.85}, {"name": "土地流转", "change_pct": -2.99}, {"name": "海南概念", "change_pct": -1.27}, {"name": "自由贸易港", "change_pct": -1.18}, {"name": "海南自由贸易港", "change_pct": -1.87}, {"name": "大农业", "change_pct": -1.74}, {"name": "水产养殖", "change_pct": -2.12}, {"name": "自贸区", "change_pct": -0.89}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 95, "hot_rank_chg": -4, "stock_cnt": 5840, "price": "67.19", "change": "4.25", "market_id": "33", "circulate_market_value": "97657440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603290", "name": "斯达半导", "hot_rank": 96, "hot_rank_chg": 117, "stock_cnt": 5840, "price": "97.30", "change": "1.76", "market_id": "17", "circulate_market_value": "23300768000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 97, "hot_rank_chg": -18, "stock_cnt": 5840, "price": "76.30", "change": "1.62", "market_id": "33", "circulate_market_value": "111919267000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300122", "name": "智飞生物", "hot_rank": 98, "hot_rank_chg": -4, "stock_cnt": 5840, "price": "14.02", "change": "-3.18", "market_id": "33", "circulate_market_value": "19828574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 99, "hot_rank_chg": -44, "stock_cnt": 5840, "price": "4.08", "change": "-8.11", "market_id": "33", "circulate_market_value": "3121774200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.37}, {"name": "股权转让", "change_pct": 0.0}, {"name": "优化生育（三孩）", "change_pct": -2.09}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "医药商业", "change_pct": -4.0}, {"name": "保健品", "change_pct": -3.07}, {"name": "民营医院", "change_pct": -2.36}, {"name": "医药", "change_pct": -3.42}, {"name": "食品", "change_pct": -2.55}, {"name": "辅助生殖", "change_pct": -2.3}, {"name": "口腔", "change_pct": -1.54}, {"name": "医美", "change_pct": -2.51}, {"name": "新冠病毒防治", "change_pct": -1.67}]}, {"code": "603318", "name": "水发燃气", "hot_rank": 100, "hot_rank_chg": 548, "stock_cnt": 5840, "price": "9.54", "change": "10.04", "market_id": "17", "circulate_market_value": "4379536600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "氦气", "xgb_concepts": [{"name": "燃气轮机", "change_pct": 1.15}, {"name": "电子特气", "change_pct": 1.57}, {"name": "一带一路", "change_pct": -0.19}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "天然气", "change_pct": 0.34}, {"name": "山东国企改革", "change_pct": -0.67}, {"name": "国企改革", "change_pct": -0.61}, {"name": "氦气", "change_pct": 2.55}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};