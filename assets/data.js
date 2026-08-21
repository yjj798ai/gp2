const UPDATE_TIME = "2026-08-21 16:26";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 1.42,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续275天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -3.71,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "黄金概念",
    "rise": 2.46,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "MLCC概念",
    "rise": 1.81,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "存储芯片",
    "rise": 0.56,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续228天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 1.21,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续98天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "数字货币",
    "rise": 1.28,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "光纤概念",
    "rise": 0.67,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续104天上榜",
    "rankChg": 0,
    "etfName": "中银证券科技创新LOF",
    "code": "886084"
  },
  {
    "name": "算力租赁",
    "rise": 0.27,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续139天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "商业航天",
    "rise": 0.6,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续204天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 0.72,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续439天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "AI应用",
    "rise": -0.28,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续33天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "ST板块",
    "rise": 1.32,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "芯片概念",
    "rise": 0.67,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "锂电池概念",
    "rise": 1.08,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "机器人概念",
    "rise": 0.45,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "粮食概念",
    "rise": -3.44,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 1,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "液冷服务器",
    "rise": 1.27,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "生物疫苗",
    "rise": -3.4,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物科技ETF",
    "code": "885845"
  },
  {
    "name": "固态电池",
    "rise": 1.21,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  }
];
const THS_EVENTS = [
  {
    "title": "黄金收复4500美元关口，美债收益率与美元同步反弹",
    "desc": "",
    "heat": 411759,
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
    "title": "阿里财报：AI云收入增长45%，增速创22个季度新高",
    "desc": "",
    "heat": 297250,
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
    "heat": 247043,
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
    "title": "苹果9月9日将发布iPhone 18 Pro/Pro Max及首款折叠屏iPhone Ultra",
    "desc": "",
    "heat": 190465,
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
    "title": "“六张网”拉动投资效应显现,上市公司积极布局抢抓机遇,3家获机构密集调研",
    "desc": "",
    "heat": 124170,
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
    "title": "《上海市城市更新和住房发展“十五五”规划》印发",
    "desc": "",
    "heat": 104362,
    "direction": "城市更新",
    "themes": [
      "新型城镇化",
      "智慧城市"
    ],
    "stocks": [
      {
        "name": "熙菱信息",
        "code": "300588",
        "chg": 11.469712
      }
    ]
  },
  {
    "title": "特朗普签署备忘录以促进美航天发射 探索商业机器人登陆火星",
    "desc": "",
    "heat": 88450,
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
        "chg": 5.187747
      }
    ]
  },
  {
    "title": "抗癌疫苗引爆资本市场 带“飞”A股医药四大赛道",
    "desc": "",
    "heat": 63960,
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
    "change": "+5.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+4.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+3.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+3.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钼",
    "change": "+3.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+3.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+3.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+3.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铁矿石",
    "change": "+2.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+2.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+2.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铜",
    "change": "+2.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+2.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+2.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+2.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+2.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液冷服务器",
    "change": "+2.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+2.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+2.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锆",
    "change": "+2.02%",
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
    "stock_cnt": 5863,
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
        "change_pct": -0.46
      },
      {
        "name": "工业大麻",
        "change_pct": -1.55
      },
      {
        "name": "中药",
        "change_pct": -3.28
      },
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "保健品",
        "change_pct": -2.91
      },
      {
        "name": "民营医院",
        "change_pct": -2.07
      },
      {
        "name": "医药",
        "change_pct": -3.4
      },
      {
        "name": "化学原料药",
        "change_pct": -3.47
      },
      {
        "name": "流感",
        "change_pct": -2.74
      },
      {
        "name": "振兴东北",
        "change_pct": -0.81
      },
      {
        "name": "食品",
        "change_pct": -2.19
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 5,
    "hot_rank_chg": 0,
    "stock_cnt": 5863,
    "price": "9.00",
    "change": "5.14",
    "market_id": "17",
    "circulate_market_value": "4313879800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.28
      },
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "医药商业",
        "change_pct": -3.89
      },
      {
        "name": "医药",
        "change_pct": -3.4
      },
      {
        "name": "流感",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 10,
    "hot_rank_chg": 0,
    "stock_cnt": 5863,
    "price": "6.00",
    "change": "1.70",
    "market_id": "33",
    "circulate_market_value": "212202800000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.57
      },
      {
        "name": "手机产业链",
        "change_pct": 1.33
      },
      {
        "name": "超高清视频",
        "change_pct": 0.28
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.56
      },
      {
        "name": "电竞",
        "change_pct": -0.4
      },
      {
        "name": "半导体",
        "change_pct": 0.61
      },
      {
        "name": "人工智能",
        "change_pct": -0.1
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.06
      },
      {
        "name": "VR&AR",
        "change_pct": 0.61
      },
      {
        "name": "OLED",
        "change_pct": 0.53
      },
      {
        "name": "京津冀",
        "change_pct": -0.42
      },
      {
        "name": "物联网",
        "change_pct": 0.26
      },
      {
        "name": "指纹识别",
        "change_pct": 1.65
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.8
      },
      {
        "name": "白马股",
        "change_pct": -0.41
      },
      {
        "name": "智能制造",
        "change_pct": 0.59
      },
      {
        "name": "小米概念股",
        "change_pct": 0.72
      },
      {
        "name": "国产芯片",
        "change_pct": 0.72
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.49
      },
      {
        "name": "全息概念",
        "change_pct": 0.1
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.72
      },
      {
        "name": "MicroLED",
        "change_pct": 0.91
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.08
      },
      {
        "name": "智能手表",
        "change_pct": 1.18
      },
      {
        "name": "MiniLED",
        "change_pct": 1.11
      },
      {
        "name": "传感器",
        "change_pct": 0.58
      },
      {
        "name": "大硅片",
        "change_pct": -0.27
      },
      {
        "name": "AI PC",
        "change_pct": 0.97
      },
      {
        "name": "华为产业链",
        "change_pct": 0.67
      },
      {
        "name": "回购",
        "change_pct": -0.53
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.95
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.74
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 14,
    "hot_rank_chg": -1,
    "stock_cnt": 5863,
    "price": "8.20",
    "change": "-4.65",
    "market_id": "17",
    "circulate_market_value": "5262622400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.52
      },
      {
        "name": "农业种植",
        "change_pct": -4.33
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.07
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.37
      },
      {
        "name": "休闲食品",
        "change_pct": -1.9
      },
      {
        "name": "食品",
        "change_pct": -2.19
      },
      {
        "name": "食品安全",
        "change_pct": -0.61
      },
      {
        "name": "社区团购",
        "change_pct": -1.68
      },
      {
        "name": "大农业",
        "change_pct": -1.19
      },
      {
        "name": "预制菜",
        "change_pct": -1.39
      },
      {
        "name": "人造肉",
        "change_pct": -2.13
      },
      {
        "name": "国企改革",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 17,
    "hot_rank_chg": 0,
    "stock_cnt": 5863,
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
        "change_pct": 4.41
      },
      {
        "name": "有色 · 铜",
        "change_pct": 2.57
      },
      {
        "name": "有色 · 锑",
        "change_pct": 3.48
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.07
      },
      {
        "name": "有色 · 锌",
        "change_pct": 3.94
      },
      {
        "name": "有色金属",
        "change_pct": 1.84
      },
      {
        "name": "国企改革",
        "change_pct": -0.16
      },
      {
        "name": "白银",
        "change_pct": 5.75
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 25,
    "hot_rank_chg": 1,
    "stock_cnt": 5863,
    "price": "5.15",
    "change": "-7.21",
    "market_id": "33",
    "circulate_market_value": "13617853000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.1
      },
      {
        "name": "装修装饰",
        "change_pct": 0.33
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.09
      },
      {
        "name": "航天",
        "change_pct": 0.79
      },
      {
        "name": "旧改",
        "change_pct": -0.14
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 29,
    "hot_rank_chg": 3,
    "stock_cnt": 5863,
    "price": "11.62",
    "change": "5.45",
    "market_id": "17",
    "circulate_market_value": "20789787000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -1.66
      },
      {
        "name": "纯碱",
        "change_pct": 0.11
      },
      {
        "name": "食品",
        "change_pct": -2.19
      },
      {
        "name": "土壤修复",
        "change_pct": -0.12
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.23
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.3
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 42,
    "hot_rank_chg": 13,
    "stock_cnt": 5863,
    "price": "10.74",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "18635843000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "铜箔",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.03
      },
      {
        "name": "核电",
        "change_pct": 0.58
      },
      {
        "name": "锂电池",
        "change_pct": 1.62
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.03
      },
      {
        "name": "PCB板",
        "change_pct": 1.38
      },
      {
        "name": "中科院系",
        "change_pct": 0.19
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.12
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 1.97
      },
      {
        "name": "固态电池",
        "change_pct": 1.46
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.75
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 46,
    "hot_rank_chg": 6,
    "stock_cnt": 5863,
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
        "change_pct": -3.28
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.77
      },
      {
        "name": "农业种植",
        "change_pct": -4.33
      },
      {
        "name": "医药",
        "change_pct": -3.4
      },
      {
        "name": "流感",
        "change_pct": -2.74
      },
      {
        "name": "大农业",
        "change_pct": -1.19
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 50,
    "hot_rank_chg": -8,
    "stock_cnt": 5863,
    "price": "4.35",
    "change": "-8.03",
    "market_id": "33",
    "circulate_market_value": "9135669300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.28
      },
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "维生素",
        "change_pct": -1.63
      },
      {
        "name": "基因测序",
        "change_pct": -2.32
      },
      {
        "name": "民营医院",
        "change_pct": -2.07
      },
      {
        "name": "医药",
        "change_pct": -3.4
      },
      {
        "name": "化学原料药",
        "change_pct": -3.47
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -5.67
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 51,
    "hot_rank_chg": -4,
    "stock_cnt": 5863,
    "price": "9.97",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4313756300.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "5",
    "change_reason": "CPO",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.54
      },
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "光伏",
        "change_pct": 1.0
      },
      {
        "name": "无线耳机",
        "change_pct": 1.13
      },
      {
        "name": "华为产业链",
        "change_pct": 0.67
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 62,
    "hot_rank_chg": 1,
    "stock_cnt": 5863,
    "price": "7.72",
    "change": "-0.90",
    "market_id": "33",
    "circulate_market_value": "5616950000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -0.03
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.09
      },
      {
        "name": "风电",
        "change_pct": 0.16
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.58
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.37
      },
      {
        "name": "建筑节能",
        "change_pct": 0.67
      },
      {
        "name": "旧改",
        "change_pct": -0.14
      }
    ]
  },
  {
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 68,
    "hot_rank_chg": -3,
    "stock_cnt": 5863,
    "price": "10.74",
    "change": "7.29",
    "market_id": "33",
    "circulate_market_value": "6440885400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.29
      },
      {
        "name": "金融科技",
        "change_pct": 1.09
      },
      {
        "name": "移动支付",
        "change_pct": 1.24
      },
      {
        "name": "物联网",
        "change_pct": 0.26
      },
      {
        "name": "数字经济",
        "change_pct": 0.08
      },
      {
        "name": "电子身份证",
        "change_pct": 1.37
      },
      {
        "name": "ETC",
        "change_pct": 0.43
      },
      {
        "name": "数字人民币",
        "change_pct": 1.34
      },
      {
        "name": "智慧政务",
        "change_pct": 0.31
      },
      {
        "name": "eSIM",
        "change_pct": 2.11
      },
      {
        "name": "华为产业链",
        "change_pct": 0.67
      },
      {
        "name": "区块链",
        "change_pct": 0.43
      },
      {
        "name": "RWA",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 69,
    "hot_rank_chg": -1,
    "stock_cnt": 5863,
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
        "change_pct": 0.89
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.13
      },
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "教育",
        "change_pct": -0.5
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.47
      },
      {
        "name": "职业教育",
        "change_pct": -0.77
      },
      {
        "name": "在线教育",
        "change_pct": -0.3
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.21
      },
      {
        "name": "华为产业链",
        "change_pct": 0.67
      },
      {
        "name": "智谱AI",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 74,
    "hot_rank_chg": -1,
    "stock_cnt": 5863,
    "price": "12.21",
    "change": "-0.81",
    "market_id": "33",
    "circulate_market_value": "11395856800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.62
      },
      {
        "name": "新疆概念",
        "change_pct": -0.16
      },
      {
        "name": "光伏",
        "change_pct": 1.0
      },
      {
        "name": "风电",
        "change_pct": 0.16
      },
      {
        "name": "储能",
        "change_pct": 0.86
      },
      {
        "name": "国企改革",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 76,
    "hot_rank_chg": 7,
    "stock_cnt": 5863,
    "price": "3.95",
    "change": "5.62",
    "market_id": "17",
    "circulate_market_value": "5046519200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.49
      },
      {
        "name": "化肥",
        "change_pct": -0.54
      },
      {
        "name": "保健品",
        "change_pct": -2.91
      },
      {
        "name": "民营医院",
        "change_pct": -2.07
      },
      {
        "name": "医药",
        "change_pct": -3.4
      },
      {
        "name": "煤化工",
        "change_pct": 0.46
      },
      {
        "name": "食品",
        "change_pct": -2.19
      },
      {
        "name": "大农业",
        "change_pct": -1.19
      },
      {
        "name": "干细胞",
        "change_pct": -3.17
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -3.19
      }
    ]
  },
  {
    "code": "003040",
    "name": "楚天龙",
    "hot_rank": 78,
    "hot_rank_chg": 2,
    "stock_cnt": 5863,
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
        "change_pct": 0.01
      },
      {
        "name": "金融科技",
        "change_pct": 1.09
      },
      {
        "name": "人工智能",
        "change_pct": -0.1
      },
      {
        "name": "物联网",
        "change_pct": 0.26
      },
      {
        "name": "数字经济",
        "change_pct": 0.08
      },
      {
        "name": "国产操作系统",
        "change_pct": -0.28
      },
      {
        "name": "电子身份证",
        "change_pct": 1.37
      },
      {
        "name": "数字人民币",
        "change_pct": 1.34
      },
      {
        "name": "智慧政务",
        "change_pct": 0.31
      },
      {
        "name": "eSIM",
        "change_pct": 2.11
      },
      {
        "name": "区块链",
        "change_pct": 0.43
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 83,
    "hot_rank_chg": -1,
    "stock_cnt": 5863,
    "price": "7.01",
    "change": "-6.53",
    "market_id": "17",
    "circulate_market_value": "7982688700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.29
      },
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "光伏",
        "change_pct": 1.0
      },
      {
        "name": "特高压",
        "change_pct": 0.32
      },
      {
        "name": "智能电网",
        "change_pct": 0.32
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 84,
    "hot_rank_chg": 2,
    "stock_cnt": 5863,
    "price": "5.91",
    "change": "-2.31",
    "market_id": "17",
    "circulate_market_value": "73260887000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.04
      },
      {
        "name": "核电",
        "change_pct": 0.58
      },
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.49
      },
      {
        "name": "水电",
        "change_pct": -0.48
      },
      {
        "name": "火电",
        "change_pct": -0.64
      },
      {
        "name": "光伏",
        "change_pct": 1.0
      },
      {
        "name": "风电",
        "change_pct": 0.16
      },
      {
        "name": "国企改革",
        "change_pct": -0.16
      },
      {
        "name": "算电协同",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 87,
    "hot_rank_chg": 0,
    "stock_cnt": 5863,
    "price": "6.45",
    "change": "2.87",
    "market_id": "33",
    "circulate_market_value": "6662435900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -2.34
      },
      {
        "name": "锂电池",
        "change_pct": 1.62
      },
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.03
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.28
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.12
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.09
      }
    ]
  },
  {
    "code": "002038",
    "name": "双鹭药业",
    "hot_rank": 92,
    "hot_rank_chg": 9,
    "stock_cnt": 5863,
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
        "change_pct": -1.55
      },
      {
        "name": "创新药",
        "change_pct": -3.87
      },
      {
        "name": "基因测序",
        "change_pct": -2.32
      },
      {
        "name": "民营医院",
        "change_pct": -2.07
      },
      {
        "name": "医药",
        "change_pct": -3.4
      },
      {
        "name": "疫苗",
        "change_pct": -2.78
      },
      {
        "name": "化学原料药",
        "change_pct": -3.47
      },
      {
        "name": "流感",
        "change_pct": -2.74
      },
      {
        "name": "长寿药NMN",
        "change_pct": -3.01
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.19
      },
      {
        "name": "肝素",
        "change_pct": -3.48
      },
      {
        "name": "基因编辑",
        "change_pct": -2.34
      },
      {
        "name": "肝炎概念",
        "change_pct": -3.28
      },
      {
        "name": "医美",
        "change_pct": -2.47
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -3.19
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.48
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -0.45
      },
      {
        "name": "减肥药",
        "change_pct": -4.93
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 100,
    "hot_rank_chg": -3,
    "stock_cnt": 5863,
    "price": "6.64",
    "change": "-6.61",
    "market_id": "17",
    "circulate_market_value": "15874994000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.1
      },
      {
        "name": "强势人气股",
        "change_pct": 1.14
      },
      {
        "name": "国企改革",
        "change_pct": -0.16
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.42
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "672.41", "change": "-2.12", "market_id": "17", "circulate_market_value": "20231284000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "8.17", "change": "-10.02", "market_id": "17", "circulate_market_value": "20576226000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.46}, {"name": "工业大麻", "change_pct": -1.55}, {"name": "中药", "change_pct": -3.28}, {"name": "强势人气股", "change_pct": 1.14}, {"name": "保健品", "change_pct": -2.91}, {"name": "民营医院", "change_pct": -2.07}, {"name": "医药", "change_pct": -3.4}, {"name": "化学原料药", "change_pct": -3.47}, {"name": "流感", "change_pct": -2.74}, {"name": "振兴东北", "change_pct": -0.81}, {"name": "食品", "change_pct": -2.19}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "21.20", "change": "10.02", "market_id": "33", "circulate_market_value": "24941138000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报扭亏"}, {"code": "300308", "name": "中际旭创", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "943.00", "change": "4.29", "market_id": "33", "circulate_market_value": "1046671800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "9.00", "change": "5.14", "market_id": "17", "circulate_market_value": "4313879800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.28}, {"name": "强势人气股", "change_pct": 1.14}, {"name": "医药商业", "change_pct": -3.89}, {"name": "医药", "change_pct": -3.4}, {"name": "流感", "change_pct": -2.74}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "58.00", "change": "0.75", "market_id": "17", "circulate_market_value": "261176260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "62.18", "change": "0.26", "market_id": "17", "circulate_market_value": "152567720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "14.15", "change": "6.87", "market_id": "17", "circulate_market_value": "9626523400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "54.67", "change": "2.98", "market_id": "33", "circulate_market_value": "62733277000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "6.00", "change": "1.70", "market_id": "33", "circulate_market_value": "212202800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.57}, {"name": "手机产业链", "change_pct": 1.33}, {"name": "超高清视频", "change_pct": 0.28}, {"name": "苹果产业链", "change_pct": 1.56}, {"name": "电竞", "change_pct": -0.4}, {"name": "半导体", "change_pct": 0.61}, {"name": "人工智能", "change_pct": -0.1}, {"name": "互联网医疗", "change_pct": -2.06}, {"name": "VR&AR", "change_pct": 0.61}, {"name": "OLED", "change_pct": 0.53}, {"name": "京津冀", "change_pct": -0.42}, {"name": "物联网", "change_pct": 0.26}, {"name": "指纹识别", "change_pct": 1.65}, {"name": "汽车零部件", "change_pct": 0.8}, {"name": "白马股", "change_pct": -0.41}, {"name": "智能制造", "change_pct": 0.59}, {"name": "小米概念股", "change_pct": 0.72}, {"name": "国产芯片", "change_pct": 0.72}, {"name": "液晶面板/LCD", "change_pct": 0.49}, {"name": "全息概念", "change_pct": 0.1}, {"name": "理想汽车概念股", "change_pct": 0.72}, {"name": "MicroLED", "change_pct": 0.91}, {"name": "钙钛矿电池", "change_pct": 1.08}, {"name": "智能手表", "change_pct": 1.18}, {"name": "MiniLED", "change_pct": 1.11}, {"name": "传感器", "change_pct": 0.58}, {"name": "大硅片", "change_pct": -0.27}, {"name": "AI PC", "change_pct": 0.97}, {"name": "华为产业链", "change_pct": 0.67}, {"name": "回购", "change_pct": -0.53}, {"name": "光电共封装CPO", "change_pct": 0.95}, {"name": "智能眼镜/MR头显", "change_pct": 0.74}, {"name": "玻璃基板封装", "change_pct": 0.53}]}, {"code": "600460", "name": "士兰微", "hot_rank": 11, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "35.89", "change": "9.99", "market_id": "17", "circulate_market_value": "59723539000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "SiC"}, {"code": "600869", "name": "远东股份", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5863, "price": "16.92", "change": "1.93", "market_id": "17", "circulate_market_value": "37551448000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 13, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "31.55", "change": "-9.99", "market_id": "17", "circulate_market_value": "12651550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 14, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "8.20", "change": "-4.65", "market_id": "17", "circulate_market_value": "5262622400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.52}, {"name": "农业种植", "change_pct": -4.33}, {"name": "湖南国企改革", "change_pct": 0.07}, {"name": "乡村振兴", "change_pct": -1.37}, {"name": "休闲食品", "change_pct": -1.9}, {"name": "食品", "change_pct": -2.19}, {"name": "食品安全", "change_pct": -0.61}, {"name": "社区团购", "change_pct": -1.68}, {"name": "大农业", "change_pct": -1.19}, {"name": "预制菜", "change_pct": -1.39}, {"name": "人造肉", "change_pct": -2.13}, {"name": "国企改革", "change_pct": -0.16}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 15, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "80.78", "change": "8.01", "market_id": "17", "circulate_market_value": "10555781100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 16, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "54.24", "change": "-4.27", "market_id": "17", "circulate_market_value": "45917053000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "10.42", "change": "10.03", "market_id": "33", "circulate_market_value": "24200197000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长", "xgb_concepts": [{"name": "黄金", "change_pct": 4.41}, {"name": "有色 · 铜", "change_pct": 2.57}, {"name": "有色 · 锑", "change_pct": 3.48}, {"name": "湖南国企改革", "change_pct": 0.07}, {"name": "有色 · 锌", "change_pct": 3.94}, {"name": "有色金属", "change_pct": 1.84}, {"name": "国企改革", "change_pct": -0.16}, {"name": "白银", "change_pct": 5.75}]}, {"code": "600667", "name": "太极实业", "hot_rank": 18, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "21.44", "change": "1.08", "market_id": "17", "circulate_market_value": "44842664000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 19, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "201.08", "change": "1.73", "market_id": "33", "circulate_market_value": "278761570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 20, "hot_rank_chg": 5, "stock_cnt": 5863, "price": "34.74", "change": "2.69", "market_id": "17", "circulate_market_value": "715706290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 21, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "409.06", "change": "1.38", "market_id": "17", "circulate_market_value": "273453310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 22, "hot_rank_chg": -4, "stock_cnt": 5863, "price": "36.15", "change": "0.39", "market_id": "33", "circulate_market_value": "39075196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 23, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "78.57", "change": "-1.15", "market_id": "17", "circulate_market_value": "140594300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 24, "hot_rank_chg": 3, "stock_cnt": 5863, "price": "42.04", "change": "1.50", "market_id": "17", "circulate_market_value": "166965520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 25, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "5.15", "change": "-7.21", "market_id": "33", "circulate_market_value": "13617853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.14}, {"name": "云计算数据中心", "change_pct": 1.1}, {"name": "装修装饰", "change_pct": 0.33}, {"name": "装配式建筑", "change_pct": 0.09}, {"name": "航天", "change_pct": 0.79}, {"name": "旧改", "change_pct": -0.14}]}, {"code": "600353", "name": "旭光电子", "hot_rank": 26, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "38.28", "change": "10.00", "market_id": "17", "circulate_market_value": "31726891000.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "氮化铝"}, {"code": "600721", "name": "百花医药", "hot_rank": 27, "hot_rank_chg": -5, "stock_cnt": 5863, "price": "13.25", "change": "-3.00", "market_id": "17", "circulate_market_value": "5095256200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 28, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "26.26", "change": "-8.18", "market_id": "17", "circulate_market_value": "6362010200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 29, "hot_rank_chg": 3, "stock_cnt": 5863, "price": "11.62", "change": "5.45", "market_id": "17", "circulate_market_value": "20789787000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -1.66}, {"name": "纯碱", "change_pct": 0.11}, {"name": "食品", "change_pct": -2.19}, {"name": "土壤修复", "change_pct": -0.12}, {"name": "东数西算/算力", "change_pct": 0.23}, {"name": "OpenClaw概念", "change_pct": -0.3}, {"name": "DeepSeek概念股", "change_pct": 0.11}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 30, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "33.17", "change": "10.02", "market_id": "33", "circulate_market_value": "25123459000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "000938", "name": "紫光股份", "hot_rank": 31, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "36.44", "change": "2.19", "market_id": "33", "circulate_market_value": "104221048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 32, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "442.00", "change": "6.76", "market_id": "33", "circulate_market_value": "554375480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300142", "name": "沃森生物", "hot_rank": 33, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "16.10", "change": "6.48", "market_id": "33", "circulate_market_value": "25388421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 34, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "36.61", "change": "10.01", "market_id": "33", "circulate_market_value": "24408486000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金"}, {"code": "001309", "name": "德明利", "hot_rank": 35, "hot_rank_chg": 3, "stock_cnt": 5863, "price": "415.12", "change": "4.28", "market_id": "33", "circulate_market_value": "68506861000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 36, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "100.88", "change": "-2.59", "market_id": "33", "circulate_market_value": "65878234000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 37, "hot_rank_chg": 7, "stock_cnt": 5863, "price": "363.60", "change": "1.65", "market_id": "17", "circulate_market_value": "147744610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 38, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "17.79", "change": "4.65", "market_id": "17", "circulate_market_value": "14005647000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 39, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "125.97", "change": "-3.52", "market_id": "17", "circulate_market_value": "45440327000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 40, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "162.86", "change": "-3.00", "market_id": "17", "circulate_market_value": "402798420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 41, "hot_rank_chg": -4, "stock_cnt": 5863, "price": "67.86", "change": "7.85", "market_id": "33", "circulate_market_value": "57889533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 42, "hot_rank_chg": 13, "stock_cnt": 5863, "price": "10.74", "change": "10.04", "market_id": "17", "circulate_market_value": "18635843000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "铜箔", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.03}, {"name": "核电", "change_pct": 0.58}, {"name": "锂电池", "change_pct": 1.62}, {"name": "铜箔/覆铜板", "change_pct": 2.03}, {"name": "PCB板", "change_pct": 1.38}, {"name": "中科院系", "change_pct": 0.19}, {"name": "新能源汽车", "change_pct": 1.12}, {"name": "宁德时代概念股", "change_pct": 1.97}, {"name": "固态电池", "change_pct": 1.46}, {"name": "PET复合铜箔", "change_pct": 1.75}]}, {"code": "600183", "name": "生益科技", "hot_rank": 43, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "132.80", "change": "5.16", "market_id": "17", "circulate_market_value": "320280250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 44, "hot_rank_chg": 4, "stock_cnt": 5863, "price": "49.43", "change": "7.22", "market_id": "17", "circulate_market_value": "82247139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 45, "hot_rank_chg": 5, "stock_cnt": 5863, "price": "20.77", "change": "6.79", "market_id": "33", "circulate_market_value": "19289244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 46, "hot_rank_chg": 6, "stock_cnt": 5863, "price": "10.19", "change": "10.04", "market_id": "33", "circulate_market_value": "5073040600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": -3.28}, {"name": "优化生育（三孩）", "change_pct": -1.77}, {"name": "农业种植", "change_pct": -4.33}, {"name": "医药", "change_pct": -3.4}, {"name": "流感", "change_pct": -2.74}, {"name": "大农业", "change_pct": -1.19}]}, {"code": "600498", "name": "烽火通信", "hot_rank": 47, "hot_rank_chg": -6, "stock_cnt": 5863, "price": "40.70", "change": "5.71", "market_id": "17", "circulate_market_value": "51754993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 49, "hot_rank_chg": 10, "stock_cnt": 5863, "price": "28.53", "change": "2.85", "market_id": "17", "circulate_market_value": "19724946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 50, "hot_rank_chg": -8, "stock_cnt": 5863, "price": "4.35", "change": "-8.03", "market_id": "33", "circulate_market_value": "9135669300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.28}, {"name": "强势人气股", "change_pct": 1.14}, {"name": "维生素", "change_pct": -1.63}, {"name": "基因测序", "change_pct": -2.32}, {"name": "民营医院", "change_pct": -2.07}, {"name": "医药", "change_pct": -3.4}, {"name": "化学原料药", "change_pct": -3.47}, {"name": "PD-1抑制剂", "change_pct": -5.67}]}, {"code": "603330", "name": "天洋新材", "hot_rank": 51, "hot_rank_chg": -4, "stock_cnt": 5863, "price": "9.97", "change": "10.04", "market_id": "17", "circulate_market_value": "4313756300.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "CPO", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.54}, {"name": "强势人气股", "change_pct": 1.14}, {"name": "光伏", "change_pct": 1.0}, {"name": "无线耳机", "change_pct": 1.13}, {"name": "华为产业链", "change_pct": 0.67}, {"name": "光伏胶膜", "change_pct": 0.47}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 52, "hot_rank_chg": -6, "stock_cnt": 5863, "price": "68.14", "change": "5.72", "market_id": "33", "circulate_market_value": "99038220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 53, "hot_rank_chg": -4, "stock_cnt": 5863, "price": "39.72", "change": "2.24", "market_id": "17", "circulate_market_value": "58070434000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 54, "hot_rank_chg": -9, "stock_cnt": 5863, "price": "63.88", "change": "1.16", "market_id": "33", "circulate_market_value": "96934848000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002241", "name": "歌尔股份", "hot_rank": 55, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "23.40", "change": "6.27", "market_id": "33", "circulate_market_value": "73609622000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 56, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "13.54", "change": "0.74", "market_id": "17", "circulate_market_value": "17374509000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 57, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "33.43", "change": "1.80", "market_id": "17", "circulate_market_value": "114094907000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 58, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "33.57", "change": "2.44", "market_id": "33", "circulate_market_value": "26266348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 59, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "27.33", "change": "-9.50", "market_id": "17", "circulate_market_value": "23559892000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 60, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "17.42", "change": "0.40", "market_id": "33", "circulate_market_value": "57939382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 61, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "273.08", "change": "-1.15", "market_id": "33", "circulate_market_value": "297217010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 62, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "7.72", "change": "-0.90", "market_id": "33", "circulate_market_value": "5616950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -0.03}, {"name": "装配式建筑", "change_pct": 0.09}, {"name": "风电", "change_pct": 0.16}, {"name": "环氧丙烷", "change_pct": 0.58}, {"name": "乡村振兴", "change_pct": -1.37}, {"name": "建筑节能", "change_pct": 0.67}, {"name": "旧改", "change_pct": -0.14}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 63, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "14.28", "change": "-2.66", "market_id": "17", "circulate_market_value": "21030253000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 64, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "77.75", "change": "-10.00", "market_id": "17", "circulate_market_value": "32372589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 65, "hot_rank_chg": 4, "stock_cnt": 5863, "price": "121.21", "change": "6.03", "market_id": "33", "circulate_market_value": "233063860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300570", "name": "太辰光", "hot_rank": 66, "hot_rank_chg": -5, "stock_cnt": 5863, "price": "214.46", "change": "0.50", "market_id": "33", "circulate_market_value": "41217667000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 67, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "19.19", "change": "-3.28", "market_id": "33", "circulate_market_value": "64545663000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 68, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "10.74", "change": "7.29", "market_id": "33", "circulate_market_value": "6440885400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.29}, {"name": "金融科技", "change_pct": 1.09}, {"name": "移动支付", "change_pct": 1.24}, {"name": "物联网", "change_pct": 0.26}, {"name": "数字经济", "change_pct": 0.08}, {"name": "电子身份证", "change_pct": 1.37}, {"name": "ETC", "change_pct": 0.43}, {"name": "数字人民币", "change_pct": 1.34}, {"name": "智慧政务", "change_pct": 0.31}, {"name": "eSIM", "change_pct": 2.11}, {"name": "华为产业链", "change_pct": 0.67}, {"name": "区块链", "change_pct": 0.43}, {"name": "RWA", "change_pct": 1.33}]}, {"code": "003032", "name": "传智教育", "hot_rank": 69, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "10.76", "change": "-9.96", "market_id": "33", "circulate_market_value": "3061022100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.89}, {"name": "ST摘帽", "change_pct": 0.13}, {"name": "强势人气股", "change_pct": 1.14}, {"name": "教育", "change_pct": -0.5}, {"name": "阿里巴巴概念股", "change_pct": -0.47}, {"name": "职业教育", "change_pct": -0.77}, {"name": "在线教育", "change_pct": -0.3}, {"name": "华为鸿蒙", "change_pct": -0.21}, {"name": "华为产业链", "change_pct": 0.67}, {"name": "智谱AI", "change_pct": -0.12}]}, {"code": "300139", "name": "晓程科技", "hot_rank": 70, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "53.68", "change": "8.55", "market_id": "33", "circulate_market_value": "12542827200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 71, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "28.51", "change": "-10.01", "market_id": "17", "circulate_market_value": "9605587800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 72, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "55.14", "change": "-3.33", "market_id": "33", "circulate_market_value": "20319271000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 73, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "94.84", "change": "6.30", "market_id": "17", "circulate_market_value": "93133890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 74, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "12.21", "change": "-0.81", "market_id": "33", "circulate_market_value": "11395856800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.14}, {"name": "新疆国企改革", "change_pct": -0.62}, {"name": "新疆概念", "change_pct": -0.16}, {"name": "光伏", "change_pct": 1.0}, {"name": "风电", "change_pct": 0.16}, {"name": "储能", "change_pct": 0.86}, {"name": "国企改革", "change_pct": -0.16}]}, {"code": "601138", "name": "工业富联", "hot_rank": 75, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "62.84", "change": "1.14", "market_id": "17", "circulate_market_value": "1247002760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 76, "hot_rank_chg": 7, "stock_cnt": 5863, "price": "3.95", "change": "5.62", "market_id": "17", "circulate_market_value": "5046519200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.49}, {"name": "化肥", "change_pct": -0.54}, {"name": "保健品", "change_pct": -2.91}, {"name": "民营医院", "change_pct": -2.07}, {"name": "医药", "change_pct": -3.4}, {"name": "煤化工", "change_pct": 0.46}, {"name": "食品", "change_pct": -2.19}, {"name": "大农业", "change_pct": -1.19}, {"name": "干细胞", "change_pct": -3.17}, {"name": "阿尔茨海默病", "change_pct": -3.19}]}, {"code": "002466", "name": "天齐锂业", "hot_rank": 77, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "48.38", "change": "5.11", "market_id": "33", "circulate_market_value": "71402175000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 78, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "12.79", "change": "9.97", "market_id": "33", "circulate_market_value": "5843114800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数字人民币", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.01}, {"name": "金融科技", "change_pct": 1.09}, {"name": "人工智能", "change_pct": -0.1}, {"name": "物联网", "change_pct": 0.26}, {"name": "数字经济", "change_pct": 0.08}, {"name": "国产操作系统", "change_pct": -0.28}, {"name": "电子身份证", "change_pct": 1.37}, {"name": "数字人民币", "change_pct": 1.34}, {"name": "智慧政务", "change_pct": 0.31}, {"name": "eSIM", "change_pct": 2.11}, {"name": "区块链", "change_pct": 0.43}]}, {"code": "600547", "name": "山东黄金", "hot_rank": 79, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "37.05", "change": "4.96", "market_id": "17", "circulate_market_value": "133915126000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 80, "hot_rank_chg": -4, "stock_cnt": 5863, "price": "172.37", "change": "5.10", "market_id": "17", "circulate_market_value": "27025982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 81, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "18.14", "change": "10.01", "market_id": "17", "circulate_market_value": "17957872000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "钨钽铌资产注入"}, {"code": "002281", "name": "光迅科技", "hot_rank": 82, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "178.58", "change": "3.14", "market_id": "33", "circulate_market_value": "140369190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 83, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "7.01", "change": "-6.53", "market_id": "17", "circulate_market_value": "7982688700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.29}, {"name": "强势人气股", "change_pct": 1.14}, {"name": "光伏", "change_pct": 1.0}, {"name": "特高压", "change_pct": 0.32}, {"name": "智能电网", "change_pct": 0.32}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 84, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "5.91", "change": "-2.31", "market_id": "17", "circulate_market_value": "73260887000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.04}, {"name": "核电", "change_pct": 0.58}, {"name": "强势人气股", "change_pct": 1.14}, {"name": "电力体制改革", "change_pct": -0.49}, {"name": "水电", "change_pct": -0.48}, {"name": "火电", "change_pct": -0.64}, {"name": "光伏", "change_pct": 1.0}, {"name": "风电", "change_pct": 0.16}, {"name": "国企改革", "change_pct": -0.16}, {"name": "算电协同", "change_pct": 0.47}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 85, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "35.35", "change": "4.55", "market_id": "33", "circulate_market_value": "53658774000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601318", "name": "中国平安", "hot_rank": 86, "hot_rank_chg": 13, "stock_cnt": 5863, "price": "53.35", "change": "2.32", "market_id": "17", "circulate_market_value": "568714470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 87, "hot_rank_chg": 0, "stock_cnt": 5863, "price": "6.45", "change": "2.87", "market_id": "33", "circulate_market_value": "6662435900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.34}, {"name": "锂电池", "change_pct": 1.62}, {"name": "强势人气股", "change_pct": 1.14}, {"name": "铜箔/覆铜板", "change_pct": 2.03}, {"name": "粤港澳大湾区", "change_pct": -0.28}, {"name": "新能源汽车", "change_pct": 1.12}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.09}]}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 88, "hot_rank_chg": 4, "stock_cnt": 5863, "price": "17.33", "change": "10.03", "market_id": "17", "circulate_market_value": "7260708000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟衬底"}, {"code": "603626", "name": "科森科技", "hot_rank": 89, "hot_rank_chg": 4, "stock_cnt": 5863, "price": "18.65", "change": "10.03", "market_id": "17", "circulate_market_value": "10348506200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "折叠屏"}, {"code": "002460", "name": "赣锋锂业", "hot_rank": 90, "hot_rank_chg": -5, "stock_cnt": 5863, "price": "54.12", "change": "5.56", "market_id": "33", "circulate_market_value": "65551120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603958", "name": "哈森股份", "hot_rank": 91, "hot_rank_chg": 9, "stock_cnt": 5863, "price": "20.55", "change": "10.01", "market_id": "17", "circulate_market_value": "4507848000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "苹果产业链"}, {"code": "002038", "name": "双鹭药业", "hot_rank": 92, "hot_rank_chg": 9, "stock_cnt": 5863, "price": "7.08", "change": "9.94", "market_id": "33", "circulate_market_value": "6031532100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "mRNA平台", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.55}, {"name": "创新药", "change_pct": -3.87}, {"name": "基因测序", "change_pct": -2.32}, {"name": "民营医院", "change_pct": -2.07}, {"name": "医药", "change_pct": -3.4}, {"name": "疫苗", "change_pct": -2.78}, {"name": "化学原料药", "change_pct": -3.47}, {"name": "流感", "change_pct": -2.74}, {"name": "长寿药NMN", "change_pct": -3.01}, {"name": "辅助生殖", "change_pct": -2.19}, {"name": "肝素", "change_pct": -3.48}, {"name": "基因编辑", "change_pct": -2.34}, {"name": "肝炎概念", "change_pct": -3.28}, {"name": "医美", "change_pct": -2.47}, {"name": "阿尔茨海默病", "change_pct": -3.19}, {"name": "新冠病毒防治", "change_pct": -1.48}, {"name": "肿瘤疫苗", "change_pct": -0.45}, {"name": "减肥药", "change_pct": -4.93}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 93, "hot_rank_chg": -5, "stock_cnt": 5863, "price": "54.65", "change": "2.46", "market_id": "33", "circulate_market_value": "400315370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002192", "name": "融捷股份", "hot_rank": 94, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "72.51", "change": "10.00", "market_id": "33", "circulate_market_value": "18788620000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锂矿"}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 95, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "47.74", "change": "-3.56", "market_id": "17", "circulate_market_value": "304533570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 96, "hot_rank_chg": -6, "stock_cnt": 5863, "price": "15.06", "change": "7.04", "market_id": "17", "circulate_market_value": "7715097200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 97, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "37.90", "change": "0.99", "market_id": "33", "circulate_market_value": "59660496000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 99, "hot_rank_chg": -10, "stock_cnt": 5863, "price": "37.96", "change": "2.37", "market_id": "33", "circulate_market_value": "57282058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 100, "hot_rank_chg": -3, "stock_cnt": 5863, "price": "6.64", "change": "-6.61", "market_id": "17", "circulate_market_value": "15874994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.1}, {"name": "强势人气股", "change_pct": 1.14}, {"name": "国企改革", "change_pct": -0.16}, {"name": "河南国企改革", "change_pct": 0.42}]}];
const LIMIT_UP_POOL = [{"code": "002686", "name": "亿利达", "price": 6.72, "change_pct": 9.98, "reason": "1、公司控股股东变更为润桐控股，实际控制人变更为桐乡市财政局；\n2、公司的产品可以应用数据中心冷却系统，风机产品已经在华为、阿里、腾讯、移动等企业的数据中心中配套应用", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 6.81, "first_limit_up": 1787275917, "break_limit_up_times": 3}, {"code": "002017", "name": "东信和平", "price": 14.53, "change_pct": 9.99, "reason": "1、数字身份安全产品解决方案提供商和服务商；\n2、公司适配北斗/天通的eSIM模组，支持终端直连卫星", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 5.7, "first_limit_up": 1787276754, "break_limit_up_times": 5}, {"code": "601212", "name": "白银有色", "price": 6.09, "change_pct": 9.93, "reason": "公司是我国多品种有色金属综合生产基地，具有年产白银500吨的生产能力，有年产金15吨的生产能力", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 4.54, "first_limit_up": 1787276479, "break_limit_up_times": 6}, {"code": "603045", "name": "福达合金", "price": 57.24, "change_pct": 9.99, "reason": "公司低压电接触材料销售额国内第一，高分断能力焊接触头组件已配套施耐德、西门子、ABB等全球头部客户，北美数据中心低压配套业务在关税压力下逆势增长", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.31, "first_limit_up": 1787277372, "break_limit_up_times": 1}, {"code": "603626", "name": "科森科技", "price": 18.65, "change_pct": 10.03, "reason": "1、公司为某品牌家用机器人提供相关结构件；\n2、公司与清陶能源共同投资设立了合资公司——科森清陶能源科技有限公司，专注于固态电池的集成、组装和系统集成等业务", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 7.87, "first_limit_up": 1787276061, "break_limit_up_times": 2}, {"code": "603758", "name": "秦安股份", "price": 11.76, "change_pct": 10.01, "reason": "公司是新能源汽车发动机及变速器核心零部件供应商，参投墨现科技，后者主营压力传感器、机器人电子皮肤等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.97, "first_limit_up": 1787290591, "break_limit_up_times": 0}, {"code": "601177", "name": "杭齿前进", "price": 13.95, "change_pct": 10.02, "reason": "杭齿集团正式启动省尖兵科技计划项目，针对人形机器人旋转关节和直线关节组件，将突破驱动一传动一传感一体化关节集成技术难题，最终研制出高扭矩、高推力密度和高动态响应关节组件并实现国产化示范应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.29, "first_limit_up": 1787275802, "break_limit_up_times": 0}, {"code": "000017", "name": "深中华A", "price": 7.11, "change_pct": 10.06, "reason": "公司主要业务为自行车、锂电池材料和珠宝黄金业务", "plates": ["黄金"], "limit_up_days": 2, "turnover_ratio": 9.43, "first_limit_up": 1787275500, "break_limit_up_times": 1}, {"code": "002903", "name": "宇环数控", "price": 33.74, "change_pct": 10.01, "reason": "公司智能装备包括工业机器人及智能化成套装备等，为客户提供数字化、网络化的智能制造技术综合解决方案", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 24.66, "first_limit_up": 1787281332, "break_limit_up_times": 0}, {"code": "688356", "name": "键凯科技", "price": 107.34, "change_pct": 20.0, "reason": "公司为国内医用药用聚乙二醇（PEG）赛道唯一的上市公司", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 5.39, "first_limit_up": 1787275501, "break_limit_up_times": 0}, {"code": "002667", "name": "*ST威领", "price": 19.21, "change_pct": 10.02, "reason": "兴业银锡要约收购拟拿下公司控制权，要约收购价格18元/股", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 12.88, "first_limit_up": 1787275500, "break_limit_up_times": 3}, {"code": "603838", "name": "*ST四通", "price": 11.72, "change_pct": 10.05, "reason": "新型家居生活陶瓷供应商，外贸收入占比近8成", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.79, "first_limit_up": 1787281099, "break_limit_up_times": 0}, {"code": "600460", "name": "士兰微", "price": 35.89, "change_pct": 9.99, "reason": "公司拟200亿元投建12英寸高端模拟芯片生产线项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.63, "first_limit_up": 1787276169, "break_limit_up_times": 0}, {"code": "002045", "name": "国光电器", "price": 9.11, "change_pct": 10.02, "reason": "1、全球知名的电声制造厂商；公司音响电声类业务主要产品包括扬声器、蓝牙音箱、智能音箱等，应用于可穿戴产品（如VR/AR）、智能手机、平板电脑等消费电子产品；\n2、公司为VR/AR设备供应声学模组，有MR设备声学模组的技术储备，公司也将生产VR整机", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.89, "first_limit_up": 1787293590, "break_limit_up_times": 0}, {"code": "600110", "name": "诺德股份", "price": 10.74, "change_pct": 10.04, "reason": "公司主营电解铜箔，新一代HVLP铜箔通过认证", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 12.7, "first_limit_up": 1787290028, "break_limit_up_times": 1}, {"code": "300214", "name": "日科化学", "price": 12.9, "change_pct": 20.0, "reason": "公司拟收购亘元新材70.75%股份，标的主营锂电池电解液核心添加剂VC（碳酸亚乙烯酯）和FEC（氟代碳酸乙烯酯），与下游宁德时代、比亚迪等多家优质大客户建立了战略合作关系，是行业领先的锂电池电解液添加剂生产商", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 14.17, "first_limit_up": 1787278656, "break_limit_up_times": 2}, {"code": "002971", "name": "和远气体", "price": 46.61, "change_pct": 10.01, "reason": "公司给长江存储、烽火科技、华星光电等光通信、半导体企业直接或间接供应氢气、氧气、氮气和氩气", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.41, "first_limit_up": 1787275920, "break_limit_up_times": 0}, {"code": "002716", "name": "湖南白银", "price": 10.42, "change_pct": 10.03, "reason": "公司主营业务以白银冶炼和深加工为主，并综合回收黄金等有价金属", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 18.29, "first_limit_up": 1787280036, "break_limit_up_times": 1}, {"code": "003018", "name": "金富科技", "price": 43.02, "change_pct": 10.0, "reason": "1、公司拟收购卓晖金属和联益热能各51%股权，标的公司均聚焦液冷散热产品；\n2、公司是国内最大的塑料防盗瓶盖供应商之一，长期稳定供应华润怡宝、可口可乐、达能等头部饮料品牌", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 3.16, "first_limit_up": 1787276715, "break_limit_up_times": 0}, {"code": "603318", "name": "水发燃气", "price": 9.54, "change_pct": 10.03, "reason": "1、公司依托西北天然气产区布局LNG-BOG提氦业务，现有5N高纯氦产能并持续扩产；\n2、全资子公司大连派思是 GE、西门子、三菱等龙头的核心辅机供应商，供应前置 / 辅助模块、掺氢输配系统等，切入北美 AI 数据中心轻燃机组配套；\n3、山东省国资委旗下；主营业务为LNG业务、城镇燃气运营，以天然气发电为主的燃气设备制造以及分布式能源综合服务业务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 9.63, "first_limit_up": 1787276306, "break_limit_up_times": 1}, {"code": "000710", "name": "贝瑞基因", "price": 10.31, "change_pct": 10.03, "reason": "公司自主研发了 NLPearl 遗传疾病人工智能临床决策支持系统、CNVisi 智能报告解读系统，为科研和临床工作者提供智能决策支持", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 17.65, "first_limit_up": 1787275803, "break_limit_up_times": 2}, {"code": "002412", "name": "汉森制药", "price": 10.19, "change_pct": 10.04, "reason": "公司主营消化系统和心脑血管中药生产企业", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 4.52, "first_limit_up": 1787275500, "break_limit_up_times": 0}, {"code": "002396", "name": "星网锐捷", "price": 33.17, "change_pct": 10.02, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 9.8, "first_limit_up": 1787276670, "break_limit_up_times": 1}, {"code": "600397", "name": "江钨装备", "price": 18.14, "change_pct": 10.01, "reason": "公司拟定增募资不超过19亿元，用于收购控股股东旗下江钨硬质合金、华茂钨材料及九江有色金属冶炼三家公司100%股权，拟注入钨制品及钽铌制品领域优质资产", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.35, "first_limit_up": 1787276895, "break_limit_up_times": 3}, {"code": "003031", "name": "中瓷电子", "price": 142.04, "change_pct": 10.0, "reason": "公司为电子陶瓷龙头，上半年高端光模块外壳和基板逐步实现放量，目前公司已可以设计开发1.6T光通信器件外壳和基板，与国外同类产品技术水平相当。", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 4.74, "first_limit_up": 1787289150, "break_limit_up_times": 1}, {"code": "600577", "name": "精达股份", "price": 8.66, "change_pct": 10.04, "reason": "公司主营业务是特种电磁线、特种导体以及模具制造、维修等生产、研发和销售，产品广泛用于汽车驱动电机、工业精密电机、机器人伺服电机等领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.47, "first_limit_up": 1787279950, "break_limit_up_times": 1}, {"code": "002209", "name": "达 意 隆", "price": 13.16, "change_pct": 10.03, "reason": "公司专注于工业分拣机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.95, "first_limit_up": 1787275500, "break_limit_up_times": 1}, {"code": "688137", "name": "近岸蛋白", "price": 80.99, "change_pct": 20.0, "reason": "国内重组蛋白解决方案专家、领先的mRNA应用服务商；公司整合AlphaFold等AI工具与自研机器学习系统，用于蛋白质设计、改造及表达，推动AI在生命科学领域的应用", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 15.12, "first_limit_up": 1787278699, "break_limit_up_times": 2}, {"code": "003040", "name": "楚天龙", "price": 12.79, "change_pct": 9.97, "reason": "国内较早从事数字人民币相关技术研究与产品开发的企业之一", "plates": ["数字人民币"], "limit_up_days": 1, "turnover_ratio": 6.82, "first_limit_up": 1787275803, "break_limit_up_times": 2}, {"code": "002638", "name": "勤上股份", "price": 4.13, "change_pct": 10.13, "reason": "公司深耕大功率LED照明二十余年，产品覆盖道路、隧道、景观等场景", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.9, "first_limit_up": 1787292666, "break_limit_up_times": 0}, {"code": "000931", "name": "中 关 村", "price": 5.09, "change_pct": 9.94, "reason": "公司拟与海徕科在创新抗体药物研发等领域开展合作", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 8.35, "first_limit_up": 1787275800, "break_limit_up_times": 1}, {"code": "603958", "name": "哈森股份", "price": 20.55, "change_pct": 10.01, "reason": "公司与关联方等拟共同出资1亿元设立参股公司，主营机器人零部件及产品销售、技术服务", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 6.99, "first_limit_up": 1787275839, "break_limit_up_times": 2}, {"code": "002528", "name": "*ST英飞", "price": 5.63, "change_pct": 9.96, "reason": "公司及全资子公司拟申请预重整及重整", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.85, "first_limit_up": 1787289510, "break_limit_up_times": 1}, {"code": "002038", "name": "双鹭药业", "price": 7.08, "change_pct": 9.94, "reason": "公司表示硝酸甘油喷雾剂作为目前国内独家剂型，在心绞痛、心梗时急救产品的迅速起效十分重要", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 6.88, "first_limit_up": 1787275500, "break_limit_up_times": 1}, {"code": "688328", "name": "深科达", "price": 91.16, "change_pct": 19.99, "reason": "公司已与北美存储客户建立直接合作，为其提供存储AOI检测设备、高精度芯片贴合设备、磁头测试产线自动化设备等多款产品，并成为该客户对应业务唯一合作供应商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.53, "first_limit_up": 1787288545, "break_limit_up_times": 1}, {"code": "300839", "name": "博汇股份", "price": 12.47, "change_pct": 20.02, "reason": "1、全资子公司无锡极致液冷科技主要产品为GPU算力服务器液冷系统、算力中心机房液冷组件、液冷油、冷却液、液冷机柜（冷板及浸没式）、冷却塔室外冷机等热管理整体系统；\n2、公司主营特种油、燃料油深加工，具备民营炼厂中稀缺的保税高硫燃料油经营资质；", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 6.74, "first_limit_up": 1787277378, "break_limit_up_times": 0}, {"code": "603330", "name": "天洋新材", "price": 9.97, "change_pct": 10.04, "reason": "公司电子胶板块光模块透镜固定用胶、底填胶等产品已经进入半导体及汽车电子领域小批量供货", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 27.11, "first_limit_up": 1787278004, "break_limit_up_times": 25}, {"code": "000628", "name": "高新发展", "price": 45.35, "change_pct": 9.99, "reason": "公司此前称将持续推动对华鲲振宇公司股权收购工作；25年净利润同比增长78.00%", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 8.72, "first_limit_up": 1787281242, "break_limit_up_times": 0}, {"code": "002192", "name": "融捷股份", "price": 72.51, "change_pct": 10.0, "reason": "国内锂电材料全产业链领军企业；一季度净利润同比增长1296.26%", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 10.76, "first_limit_up": 1787278545, "break_limit_up_times": 4}, {"code": "301591", "name": "肯特股份", "price": 37.78, "change_pct": 20.01, "reason": "公司研究PEEK各种配方、成型与深加工技术，为不同应用场景的客户提供包含且不限于PEEK材料的制品与应用解决方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 24.9, "first_limit_up": 1787294247, "break_limit_up_times": 0}, {"code": "603065", "name": "宿迁联盛", "price": 17.33, "change_pct": 10.03, "reason": "公司拟设立合资公司开展磷化铟衬底业务，预计二期产能40万片/年", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 8.28, "first_limit_up": 1787276983, "break_limit_up_times": 2}, {"code": "600785", "name": "新华百货", "price": 9.74, "change_pct": 10.06, "reason": "宁夏地区最大的商业零售企业，拟斥资2亿元至4亿元回购公司股份", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.61, "first_limit_up": 1787275501, "break_limit_up_times": 0}, {"code": "000603", "name": "盛达资源", "price": 36.61, "change_pct": 10.01, "reason": "公司预计中报净利润同比增长399.31%-470.64%，因“采矿及选矿能力有所提升，产能逐渐释放，2026年上半年度产品产销量增加；另外，叠加贵金属价格上涨，公司矿山主要产品销售价格较上年同期上涨，推动公司经营业绩同比显著增长”", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 14.27, "first_limit_up": 1787291805, "break_limit_up_times": 8}, {"code": "600353", "name": "旭光电子", "price": 38.28, "change_pct": 10.0, "reason": "1）参股子公司储翰科技是一家专注于接入网光模块和光组件生产及销售的高新技术企业，拥有从芯片封装到光电器件到光电模块的垂直整合产品线；\n2）子公司成都旭瓷具备商用氮化铝全产业链的量产能力，产品涵盖氮化铝粉体(原粉，造粒粉，填料粉)、氮化铝基板、氮化铝结构件、氮化铝高温共烧陶瓷(HTCC)及高端功能器件(陶瓷管壳、加热器、光通信器件、TR组件)，产品被广泛应用于新能源汽车、半导体装备、大功率电力电子模块等高端制造领域，以及低轨卫星、船舶导航等国家战略场景", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 12.33, "first_limit_up": 1787277379, "break_limit_up_times": 4}, {"code": "002655", "name": "共达电声", "price": 37.77, "change_pct": 9.99, "reason": "公司主营的微型麦克风、扬声器等声学器件可应用于AI手机，为AI手机的语音交互、音频播放等功能提供声学硬件支持", "plates": ["AI手机"], "limit_up_days": 1, "turnover_ratio": 9.01, "first_limit_up": 1787277453, "break_limit_up_times": 1}, {"code": "603095", "name": "越剑智能", "price": 15.26, "change_pct": 10.02, "reason": "公司AI智能验布机深度融合华为ESIE算法模型与昇腾AI算力，验布速度可达60米/分钟，瑕疵检出率超90%，能精准识别针织、梭织等多场景面料瑕疵，还可通过边缘计算与云端协同实现质量追溯", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.03, "first_limit_up": 1787276136, "break_limit_up_times": 0}, {"code": "002491", "name": "通鼎互联", "price": 21.2, "change_pct": 10.02, "reason": "通信线缆全产业链企业；公司聚焦光通信产业的发展，建成了涵盖光纤预制棒、光纤、光缆、通信电缆、通信设备等多个业务类别较为完整的产业链，可为客户提供一揽子的产品和解决方案", "plates": ["光电共封装CPO"], "limit_up_days": 2, "turnover_ratio": 30.46, "first_limit_up": 1787293629, "break_limit_up_times": 2}, {"code": "002449", "name": "国星光电", "price": 7.07, "change_pct": 9.95, "reason": "公司光耦器件已实现量产并对外销售，高度关注MicroLED CPO等前沿技术发展趋势，前期已开展了MicroLED阵列与CMOS集成工艺开发等技术预研与布局", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 7.12, "first_limit_up": 1787282991, "break_limit_up_times": 4}, {"code": "002988", "name": "豪美新材", "price": 24.11, "change_pct": 9.99, "reason": "华南地区最具规模的汽车轻量化铝基新材料企业，前瞻布局人形机器人、低空飞行器、液冷散热器等新兴赛道", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.75, "first_limit_up": 1787277999, "break_limit_up_times": 3}, {"code": "002631", "name": "德尔未来", "price": 9.54, "change_pct": 10.03, "reason": "控股子公司烯成石墨烯有用于柔性屏的石墨烯透明导电薄膜产品布局", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.18, "first_limit_up": 1787294094, "break_limit_up_times": 0}, {"code": "002886", "name": "沃特股份", "price": 21.24, "change_pct": 9.99, "reason": "公司的聚芳醚酮产线正在建设中，其中包含PEEK产线", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.3, "first_limit_up": 1787293950, "break_limit_up_times": 0}, {"code": "603333", "name": "福华尚纬", "price": 9.85, "change_pct": 10.06, "reason": "1、公司2023-2025年特种电缆收入占比均超91%，核电、轨道交通、光伏风电等高端电缆技术获“华龙一号”国际先进认定；\n2、公司增资控股四川中氟泰华布局6万吨电子级无水氟化氢及7万吨电子级氢氟酸", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.99, "first_limit_up": 1787275865, "break_limit_up_times": 1}, {"code": "002536", "name": "飞龙股份", "price": 46.97, "change_pct": 10.0, "reason": "1、公司针对机器人关节等部位日益增长的液冷散热需求，依托公司在电子泵、温控阀及集成模块等新能源热管理产品上的技术优势，积极布局机器人领域液冷市场；\n2、公司的数据中心液冷产品在芜湖飞龙、郑州飞龙已建有专门生产线；公司多个液冷项目正在进行中，公司电子水泵系列产品和温控阀系列产品已应用在服务器液冷领域，该领域部分项目已经量产", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 6.59, "first_limit_up": 1787276493, "break_limit_up_times": 0}, {"code": "603803", "name": "瑞斯康达", "price": 11.32, "change_pct": 10.01, "reason": "国内光纤通信接入领域领军企业；公司已成功发布智算中心 400G 算力交换机，可适配智算场景下的算力传输需求", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 5.58, "first_limit_up": 1787276594, "break_limit_up_times": 0}, {"code": "300016", "name": "北陆药业", "price": 10.44, "change_pct": 20.0, "reason": "抗焦虑中药第一品牌；参股公司深圳市医未医疗科技有限公司是中国脑部疾病精准诊疗的领导者，是聚焦脑部疾病（脑卒中、阿尔茨海默病、认知症、青少年发育障碍等）超早期筛查和精准诊疗的脑科学数字产品公司，是国内唯一覆盖全脑筛查诊疗全流程的人工智能企业，公司已领先行业成为全国首家在卒中及认知领域均获批NMPA、CE、FDA三大认证的脑科学企业", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 22.65, "first_limit_up": 1787293809, "break_limit_up_times": 0}, {"code": "603052", "name": "可川科技", "price": 61.46, "change_pct": 10.01, "reason": "1、知名牛散屠文斌家族举牌公司。\n2、子公司可川光子致力于高速硅光芯片和硅光模块的研发和生产，目前首条400G/800G高速光模块生产线已正式投产启用。", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 2.41, "first_limit_up": 1787276450, "break_limit_up_times": 0}, {"code": "603079", "name": "圣达生物", "price": 14.03, "change_pct": 10.04, "reason": "公司主要维生素产品生物素和叶酸", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.3, "first_limit_up": 1787276249, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};