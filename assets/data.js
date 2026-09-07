const UPDATE_TIME = "2026-09-07 02:30";
const THS_HOT = [
  {
    "name": "猪肉",
    "rise": 1.26,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "存储芯片",
    "rise": 2.62,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续239天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 3.56,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续286天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "液冷服务器",
    "rise": 0.9,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "粮食概念",
    "rise": 3.26,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "AI应用",
    "rise": -0.21,
    "rate": 0,
    "tag": "",
    "hotTag": "连续44天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": 0.14,
    "rate": 0,
    "tag": "",
    "hotTag": "连续116天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 3.08,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续109天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "数字货币",
    "rise": -1.38,
    "rate": 0,
    "tag": "",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "培育钻石",
    "rise": 0.71,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "兵装重组概念",
    "rise": -1.09,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "海峡两岸",
    "rise": 0.81,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885939"
  },
  {
    "name": "AI视频",
    "rise": 0.38,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886068"
  },
  {
    "name": "农业种植",
    "rise": 2.18,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "国家大基金持股",
    "rise": 2.09,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "玉米",
    "rise": 2.99,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  },
  {
    "name": "算力租赁",
    "rise": 0.14,
    "rate": 0,
    "tag": "",
    "hotTag": "连续150天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光纤概念",
    "rise": 1.97,
    "rate": 0,
    "tag": "",
    "hotTag": "连续115天上榜",
    "rankChg": 0,
    "etfName": "平安新兴产业LOF",
    "code": "886084"
  },
  {
    "name": "MLCC概念",
    "rise": 1.54,
    "rate": 0,
    "tag": "",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "财通福鑫定开混合",
    "code": "886112"
  },
  {
    "name": "人形机器人",
    "rise": 1.41,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  }
];
const THS_EVENTS = [
  {
    "title": "AI链红利兑现，PCB产业链景气度持续走高",
    "desc": "",
    "heat": 592714,
    "direction": "AI PCB",
    "themes": [
      "电子布",
      "树脂",
      "PCB铜箔",
      "PCB设备",
      "服务器PCB"
    ],
    "stocks": [
      {
        "name": "德福科技",
        "code": "301511",
        "chg": 14.050558
      }
    ]
  },
  {
    "title": "大摩:CPO量产最大瓶颈浮现，测试设备或迎来超级周期",
    "desc": "",
    "heat": 467624,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "则成电子",
        "code": "920821",
        "chg": 20.550964
      }
    ]
  },
  {
    "title": "美股存储暴力拉升传导亚太，韩国扩产60万片晶圆",
    "desc": "",
    "heat": 312648,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "德福科技",
        "code": "301511",
        "chg": 14.050558
      }
    ]
  },
  {
    "title": "我国粮食企业年工业总产值超4万亿元",
    "desc": "",
    "heat": 311575,
    "direction": "粮食",
    "themes": [
      "粮食概念",
      "玉米",
      "大豆",
      "转基因",
      "农业种植"
    ],
    "stocks": [
      {
        "name": "亚盛集团",
        "code": "600108",
        "chg": 10.091743
      }
    ]
  },
  {
    "title": "华为Mate 90系列入网：直接标注5G！首发韬定律麒麟芯",
    "desc": "",
    "heat": 309339,
    "direction": "华为韬 (τ) 定律",
    "themes": [
      "先进封装",
      "晶圆代工",
      "EDA",
      "混合键合"
    ],
    "stocks": [
      {
        "name": "华兴源创",
        "code": "688001",
        "chg": 17.425335
      }
    ]
  },
  {
    "title": "中秋国庆提前订加速“抢跑” “请3休13”点燃超长假期消费热情",
    "desc": "",
    "heat": 120045,
    "direction": "旅游及酒店",
    "themes": [
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "华天酒店",
        "code": "000428",
        "chg": 10.021322
      }
    ]
  },
  {
    "title": "中东航线海运价格连续上涨 部分涨幅超50%",
    "desc": "",
    "heat": 31620,
    "direction": "航运",
    "themes": [
      "航运概念",
      "港口航运",
      "机场航运"
    ],
    "stocks": [
      {
        "name": "润邦股份",
        "code": "002483",
        "chg": 10.054845
      }
    ]
  },
  {
    "title": "8家中央金融企业拟增资3600亿元补充资本",
    "desc": "",
    "heat": 23016,
    "direction": "大金融",
    "themes": [
      "证券",
      "保险",
      "互联网金融",
      "银行"
    ],
    "stocks": [
      {
        "name": "英方软件",
        "code": "688435",
        "chg": 14.910416
      }
    ]
  },
  {
    "title": "“国家反诈AI”App上线",
    "desc": "",
    "heat": 12076,
    "direction": "AI安全",
    "themes": [
      "网络安全",
      "多模态AI"
    ],
    "stocks": [
      {
        "name": "共进股份",
        "code": "603118",
        "chg": 10.0246
      }
    ]
  },
  {
    "title": "美伊，局势突变！国际油价上涨",
    "desc": "",
    "heat": 10901,
    "direction": "美伊战争",
    "themes": [
      "石油加工贸易",
      "油气开采及服务",
      "稀土永磁",
      "天然气"
    ],
    "stocks": [
      {
        "name": "润邦股份",
        "code": "002483",
        "chg": 10.054845
      }
    ]
  },
  {
    "title": "绿色算力，再迎利好！七部门印发双化协同实施方案",
    "desc": "",
    "heat": 2286,
    "direction": "算电协同",
    "themes": [
      "算电协同",
      "电力"
    ],
    "stocks": [
      {
        "name": "金房能源",
        "code": "001210",
        "chg": 5.828003
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "白糖",
    "change": "+4.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+4.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+4.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+4.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+4.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+3.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+3.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+3.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+3.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+3.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+3.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PET复合铜箔",
    "change": "+3.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+3.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高价股",
    "change": "+3.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "橡胶",
    "change": "+3.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+3.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+3.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+2.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃基板封装",
    "change": "+2.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5851,
    "price": "7.86",
    "change": "4.94",
    "market_id": "33",
    "circulate_market_value": "15052627000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.22
      },
      {
        "name": "林业",
        "change_pct": 2.12
      },
      {
        "name": "碳中和",
        "change_pct": 0.0
      },
      {
        "name": "自贸区",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 3,
    "hot_rank_chg": -1,
    "stock_cnt": 5851,
    "price": "4.80",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "9345192600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "玉米制种",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.37
      },
      {
        "name": "农业种植",
        "change_pct": 4.34
      },
      {
        "name": "土地流转",
        "change_pct": 1.65
      },
      {
        "name": "农垦",
        "change_pct": 3.75
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.03
      },
      {
        "name": "食品",
        "change_pct": 1.19
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 1.86
      },
      {
        "name": "大农业",
        "change_pct": 1.49
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 1.92
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 7,
    "hot_rank_chg": 5,
    "stock_cnt": 5851,
    "price": "11.56",
    "change": "3.40",
    "market_id": "17",
    "circulate_market_value": "7540310000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.14
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.6
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.84
      },
      {
        "name": "新零售",
        "change_pct": 1.69
      },
      {
        "name": "移动支付",
        "change_pct": -0.62
      },
      {
        "name": "京津冀",
        "change_pct": 0.16
      },
      {
        "name": "北京城市规划",
        "change_pct": 1.06
      },
      {
        "name": "国产芯片",
        "change_pct": 1.24
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.01
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.23
      },
      {
        "name": "物业管理",
        "change_pct": -0.01
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.22
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      },
      {
        "name": "数字人民币",
        "change_pct": -1.48
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 8,
    "hot_rank_chg": 8,
    "stock_cnt": 5851,
    "price": "7.96",
    "change": "2.44",
    "market_id": "17",
    "circulate_market_value": "20072524000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.37
      },
      {
        "name": "工业大麻",
        "change_pct": 0.47
      },
      {
        "name": "中药",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": 1.57
      },
      {
        "name": "保健品",
        "change_pct": 0.02
      },
      {
        "name": "民营医院",
        "change_pct": 1.02
      },
      {
        "name": "医药",
        "change_pct": 0.28
      },
      {
        "name": "化学原料药",
        "change_pct": 0.13
      },
      {
        "name": "流感",
        "change_pct": 0.54
      },
      {
        "name": "振兴东北",
        "change_pct": 0.11
      },
      {
        "name": "食品",
        "change_pct": 1.19
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 10,
    "hot_rank_chg": -3,
    "stock_cnt": 5851,
    "price": "8.39",
    "change": "-0.83",
    "market_id": "33",
    "circulate_market_value": "13634208000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.37
      },
      {
        "name": "电竞",
        "change_pct": 0.53
      },
      {
        "name": "手游",
        "change_pct": 1.45
      },
      {
        "name": "强势人气股",
        "change_pct": 1.57
      },
      {
        "name": "人工智能",
        "change_pct": 0.02
      },
      {
        "name": "游戏",
        "change_pct": 1.21
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.33
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.23
      },
      {
        "name": "快手概念股",
        "change_pct": 0.25
      },
      {
        "name": "元宇宙",
        "change_pct": 0.2
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.09
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.13
      },
      {
        "name": "web3.0",
        "change_pct": -0.31
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.05
      },
      {
        "name": "数据要素",
        "change_pct": -0.51
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.22
      },
      {
        "name": "AI营销",
        "change_pct": -0.18
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.22
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.46
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.24
      },
      {
        "name": "人形机器人",
        "change_pct": 2.05
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.88
      },
      {
        "name": "多模态",
        "change_pct": -0.1
      },
      {
        "name": "AI视频",
        "change_pct": -0.26
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.82
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 12,
    "hot_rank_chg": 1,
    "stock_cnt": 5851,
    "price": "5.70",
    "change": "1.97",
    "market_id": "33",
    "circulate_market_value": "4051553200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.02
      },
      {
        "name": "影视",
        "change_pct": 0.98
      },
      {
        "name": "旅游",
        "change_pct": 2.15
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.09
      },
      {
        "name": "AI营销",
        "change_pct": -0.18
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.24
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.88
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.82
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 13,
    "hot_rank_chg": 36,
    "stock_cnt": 5851,
    "price": "6.81",
    "change": "-3.94",
    "market_id": "33",
    "circulate_market_value": "4396406900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.22
      },
      {
        "name": "强势人气股",
        "change_pct": 1.57
      },
      {
        "name": "装修装饰",
        "change_pct": 0.87
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.71
      },
      {
        "name": "家具家居",
        "change_pct": 0.24
      },
      {
        "name": "智能制造",
        "change_pct": 1.07
      },
      {
        "name": "3D打印",
        "change_pct": 1.88
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 0.26
      },
      {
        "name": "旧改",
        "change_pct": 0.28
      }
    ]
  },
  {
    "code": "600865",
    "name": "百大集团",
    "hot_rank": 17,
    "hot_rank_chg": -6,
    "stock_cnt": 5851,
    "price": "12.49",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4699241500.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "商业零售",
    "xgb_concepts": [
      {
        "name": "物业管理",
        "change_pct": -0.01
      },
      {
        "name": "免税店概念",
        "change_pct": 1.45
      },
      {
        "name": "地摊经济",
        "change_pct": 1.64
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 19,
    "hot_rank_chg": 181,
    "stock_cnt": 5851,
    "price": "6.06",
    "change": "4.85",
    "market_id": "33",
    "circulate_market_value": "7035226300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 0.98
      },
      {
        "name": "新疆概念",
        "change_pct": 0.77
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.01
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.23
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.88
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.82
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 20,
    "hot_rank_chg": -6,
    "stock_cnt": 5851,
    "price": "3.20",
    "change": "1.59",
    "market_id": "33",
    "circulate_market_value": "7496602000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.69
      },
      {
        "name": "强势人气股",
        "change_pct": 1.57
      },
      {
        "name": "人工智能",
        "change_pct": 0.02
      },
      {
        "name": "VR&AR",
        "change_pct": 1.2
      },
      {
        "name": "京津冀",
        "change_pct": 0.16
      },
      {
        "name": "装修装饰",
        "change_pct": 0.87
      },
      {
        "name": "住房租赁",
        "change_pct": -0.17
      },
      {
        "name": "破净股",
        "change_pct": -0.09
      },
      {
        "name": "数字经济",
        "change_pct": -0.33
      },
      {
        "name": "房产经纪",
        "change_pct": 0.39
      },
      {
        "name": "物业管理",
        "change_pct": -0.01
      },
      {
        "name": "华为产业链",
        "change_pct": 0.71
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "000735",
    "name": "罗牛山",
    "hot_rank": 23,
    "hot_rank_chg": -8,
    "stock_cnt": 5851,
    "price": "6.74",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "7757049300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "生猪养殖",
    "xgb_concepts": [
      {
        "name": "养鸡",
        "change_pct": 1.2
      },
      {
        "name": "养猪",
        "change_pct": 1.02
      },
      {
        "name": "农垦",
        "change_pct": 3.75
      },
      {
        "name": "冷链",
        "change_pct": 0.88
      },
      {
        "name": "大数据",
        "change_pct": -0.54
      },
      {
        "name": "教育",
        "change_pct": 0.02
      },
      {
        "name": "海南概念",
        "change_pct": 1.24
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.45
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.21
      },
      {
        "name": "赛马",
        "change_pct": 3.22
      },
      {
        "name": "大农业",
        "change_pct": 1.49
      },
      {
        "name": "职业教育",
        "change_pct": 0.39
      },
      {
        "name": "自贸区",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 31,
    "hot_rank_chg": -8,
    "stock_cnt": 5851,
    "price": "9.53",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "5029953800.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "4",
    "change_reason": "中报增长",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.34
      },
      {
        "name": "棉花",
        "change_pct": 3.12
      },
      {
        "name": "大农业",
        "change_pct": 1.49
      },
      {
        "name": "供销社",
        "change_pct": 1.62
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 36,
    "hot_rank_chg": -5,
    "stock_cnt": 5851,
    "price": "7.38",
    "change": "4.98",
    "market_id": "17",
    "circulate_market_value": "31582177000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.34
      },
      {
        "name": "橡胶",
        "change_pct": 3.29
      },
      {
        "name": "土地流转",
        "change_pct": 1.65
      },
      {
        "name": "农垦",
        "change_pct": 3.75
      },
      {
        "name": "海南概念",
        "change_pct": 1.24
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.45
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.21
      },
      {
        "name": "大农业",
        "change_pct": 1.49
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.36
      },
      {
        "name": "大消费",
        "change_pct": 0.13
      },
      {
        "name": "免税店概念",
        "change_pct": 1.45
      },
      {
        "name": "自贸区",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "002702",
    "name": "海欣食品",
    "hot_rank": 40,
    "hot_rank_chg": -16,
    "stock_cnt": 5851,
    "price": "6.17",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "2830448900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "速冻食品",
    "xgb_concepts": [
      {
        "name": "食品",
        "change_pct": 1.19
      },
      {
        "name": "预制菜",
        "change_pct": 2.5
      },
      {
        "name": "人造肉",
        "change_pct": 2.57
      },
      {
        "name": "地摊经济",
        "change_pct": 1.64
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 41,
    "hot_rank_chg": 12,
    "stock_cnt": 5851,
    "price": "9.05",
    "change": "-4.83",
    "market_id": "33",
    "circulate_market_value": "3993846900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 0.63
      },
      {
        "name": "锂电池",
        "change_pct": 0.95
      },
      {
        "name": "强势人气股",
        "change_pct": 1.57
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.02
      },
      {
        "name": "两轮车",
        "change_pct": 0.83
      },
      {
        "name": "珠宝饰品",
        "change_pct": -1.1
      }
    ]
  },
  {
    "code": "000582",
    "name": "北部湾港",
    "hot_rank": 42,
    "hot_rank_chg": -22,
    "stock_cnt": 5851,
    "price": "12.30",
    "change": "0.98",
    "market_id": "33",
    "circulate_market_value": "26529233000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "港口",
        "change_pct": -0.28
      },
      {
        "name": "一带一路",
        "change_pct": 0.22
      },
      {
        "name": "天然气",
        "change_pct": -0.28
      },
      {
        "name": "RCEP概念",
        "change_pct": 0.1
      },
      {
        "name": "西部大开发",
        "change_pct": 0.26
      },
      {
        "name": "广西概念",
        "change_pct": 1.34
      },
      {
        "name": "星闪概念",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 43,
    "hot_rank_chg": -17,
    "stock_cnt": 5851,
    "price": "5.19",
    "change": "0.19",
    "market_id": "33",
    "circulate_market_value": "13766737000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.57
      },
      {
        "name": "装修装饰",
        "change_pct": 0.87
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.71
      },
      {
        "name": "航天",
        "change_pct": 0.2
      },
      {
        "name": "旧改",
        "change_pct": 0.28
      }
    ]
  },
  {
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 44,
    "hot_rank_chg": -7,
    "stock_cnt": 5851,
    "price": "7.93",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "3016789100.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "5",
    "change_reason": "液冷硅油",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.22
      },
      {
        "name": "有机硅",
        "change_pct": 0.66
      },
      {
        "name": "装修装饰",
        "change_pct": 0.87
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.71
      },
      {
        "name": "光伏",
        "change_pct": 0.91
      },
      {
        "name": "船舶",
        "change_pct": -0.87
      },
      {
        "name": "固态电池",
        "change_pct": 0.92
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.76
      },
      {
        "name": "旧改",
        "change_pct": 0.28
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 0.87
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.88
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 49,
    "hot_rank_chg": 28,
    "stock_cnt": 5851,
    "price": "5.09",
    "change": "1.60",
    "market_id": "17",
    "circulate_market_value": "7957280300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 0.84
      },
      {
        "name": "共享经济",
        "change_pct": 0.21
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.72
      },
      {
        "name": "旅游",
        "change_pct": 2.15
      },
      {
        "name": "物业管理",
        "change_pct": -0.01
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 52,
    "hot_rank_chg": 6,
    "stock_cnt": 5851,
    "price": "5.89",
    "change": "4.06",
    "market_id": "33",
    "circulate_market_value": "5843320200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.15
      },
      {
        "name": "旅游",
        "change_pct": 2.15
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.09
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 55,
    "hot_rank_chg": 23,
    "stock_cnt": 5851,
    "price": "4.81",
    "change": "-6.05",
    "market_id": "17",
    "circulate_market_value": "5860561900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.09
      },
      {
        "name": "煤炭",
        "change_pct": -2.23
      },
      {
        "name": "有色金属",
        "change_pct": 0.39
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.92
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 57,
    "hot_rank_chg": -3,
    "stock_cnt": 5851,
    "price": "12.49",
    "change": "5.13",
    "market_id": "17",
    "circulate_market_value": "22346337000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.42
      },
      {
        "name": "纯碱",
        "change_pct": -0.42
      },
      {
        "name": "食品",
        "change_pct": 1.19
      },
      {
        "name": "土壤修复",
        "change_pct": 0.38
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.13
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.32
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "002403",
    "name": "爱仕达",
    "hot_rank": 61,
    "hot_rank_chg": -31,
    "stock_cnt": 5851,
    "price": "12.41",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "3687773600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.3
      },
      {
        "name": "股权转让",
        "change_pct": 0.63
      },
      {
        "name": "工业自动化",
        "change_pct": 1.54
      },
      {
        "name": "小家电",
        "change_pct": 1.79
      },
      {
        "name": "机器人",
        "change_pct": 1.39
      },
      {
        "name": "家电",
        "change_pct": 0.72
      },
      {
        "name": "智慧物流",
        "change_pct": 0.56
      },
      {
        "name": "机器视觉",
        "change_pct": 1.67
      },
      {
        "name": "智能制造",
        "change_pct": 1.07
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "减速器",
        "change_pct": 2.78
      },
      {
        "name": "C2M",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "000798",
    "name": "中水渔业",
    "hot_rank": 62,
    "hot_rank_chg": -35,
    "stock_cnt": 5851,
    "price": "11.15",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "4079073800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "远洋渔业",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.15
      },
      {
        "name": "人工智能",
        "change_pct": 0.02
      },
      {
        "name": "社区团购",
        "change_pct": 2.15
      },
      {
        "name": "预制菜",
        "change_pct": 2.5
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      },
      {
        "name": "水产养殖",
        "change_pct": 4.11
      },
      {
        "name": "海洋经济",
        "change_pct": 0.37
      }
    ]
  },
  {
    "code": "600698",
    "name": "湖南天雁",
    "hot_rank": 65,
    "hot_rank_chg": 15,
    "stock_cnt": 5851,
    "price": "8.00",
    "change": "1.14",
    "market_id": "17",
    "circulate_market_value": "6643613900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.15
      },
      {
        "name": "军工集团",
        "change_pct": -0.67
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.2
      },
      {
        "name": "军工",
        "change_pct": 0.01
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 68,
    "hot_rank_chg": -5,
    "stock_cnt": 5851,
    "price": "11.38",
    "change": "4.12",
    "market_id": "17",
    "circulate_market_value": "9888682700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.37
      },
      {
        "name": "快递物流",
        "change_pct": 0.47
      },
      {
        "name": "新零售",
        "change_pct": 1.69
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.28
      },
      {
        "name": "旅游",
        "change_pct": 2.15
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.01
      },
      {
        "name": "物业管理",
        "change_pct": -0.01
      },
      {
        "name": "免税店概念",
        "change_pct": 1.45
      },
      {
        "name": "自贸区",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 75,
    "hot_rank_chg": -46,
    "stock_cnt": 5851,
    "price": "5.63",
    "change": "0.36",
    "market_id": "33",
    "circulate_market_value": "199116970000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.26
      },
      {
        "name": "手机产业链",
        "change_pct": 1.94
      },
      {
        "name": "超高清视频",
        "change_pct": 0.2
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.75
      },
      {
        "name": "电竞",
        "change_pct": 0.53
      },
      {
        "name": "半导体",
        "change_pct": 2.07
      },
      {
        "name": "人工智能",
        "change_pct": 0.02
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.11
      },
      {
        "name": "VR&AR",
        "change_pct": 1.2
      },
      {
        "name": "OLED",
        "change_pct": 2.16
      },
      {
        "name": "京津冀",
        "change_pct": 0.16
      },
      {
        "name": "物联网",
        "change_pct": 0.43
      },
      {
        "name": "指纹识别",
        "change_pct": 1.29
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.2
      },
      {
        "name": "白马股",
        "change_pct": -0.43
      },
      {
        "name": "智能制造",
        "change_pct": 1.07
      },
      {
        "name": "小米概念股",
        "change_pct": 1.47
      },
      {
        "name": "国产芯片",
        "change_pct": 1.24
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.62
      },
      {
        "name": "全息概念",
        "change_pct": 0.83
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.38
      },
      {
        "name": "MicroLED",
        "change_pct": 1.97
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.15
      },
      {
        "name": "智能手表",
        "change_pct": 1.58
      },
      {
        "name": "MiniLED",
        "change_pct": 2.06
      },
      {
        "name": "传感器",
        "change_pct": 1.28
      },
      {
        "name": "大硅片",
        "change_pct": 1.96
      },
      {
        "name": "AI PC",
        "change_pct": 1.64
      },
      {
        "name": "华为产业链",
        "change_pct": 0.71
      },
      {
        "name": "回购",
        "change_pct": 0.28
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 4.63
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.46
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.87
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 77,
    "hot_rank_chg": 24,
    "stock_cnt": 5851,
    "price": "9.28",
    "change": "2.88",
    "market_id": "17",
    "circulate_market_value": "4448089400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": 1.57
      },
      {
        "name": "医药商业",
        "change_pct": 0.76
      },
      {
        "name": "医药",
        "change_pct": 0.28
      },
      {
        "name": "流感",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "002124",
    "name": "天邦食品",
    "hot_rank": 78,
    "hot_rank_chg": -30,
    "stock_cnt": 5851,
    "price": "2.55",
    "change": "5.79",
    "market_id": "33",
    "circulate_market_value": "5049281700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 1.35
      },
      {
        "name": "养猪",
        "change_pct": 1.02
      },
      {
        "name": "社区团购",
        "change_pct": 2.15
      },
      {
        "name": "大农业",
        "change_pct": 1.49
      },
      {
        "name": "预制菜",
        "change_pct": 2.5
      },
      {
        "name": "元宇宙",
        "change_pct": 0.2
      },
      {
        "name": "低价股",
        "change_pct": 0.63
      }
    ]
  },
  {
    "code": "300300",
    "name": "海峡创新",
    "hot_rank": 79,
    "hot_rank_chg": 21,
    "stock_cnt": 5851,
    "price": "8.90",
    "change": "-2.52",
    "market_id": "33",
    "circulate_market_value": "5934605400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.02
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.11
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.72
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.28
      },
      {
        "name": "大数据",
        "change_pct": -0.54
      },
      {
        "name": "智慧城市",
        "change_pct": 0.04
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.13
      },
      {
        "name": "医美",
        "change_pct": 0.89
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.14
      },
      {
        "name": "自贸区",
        "change_pct": 0.27
      },
      {
        "name": "区块链",
        "change_pct": -0.56
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 81,
    "hot_rank_chg": 43,
    "stock_cnt": 5851,
    "price": "7.75",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "6868440800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.34
      },
      {
        "name": "土地流转",
        "change_pct": 1.65
      },
      {
        "name": "海南概念",
        "change_pct": 1.24
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.45
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.21
      },
      {
        "name": "大农业",
        "change_pct": 1.49
      },
      {
        "name": "水产养殖",
        "change_pct": 4.11
      },
      {
        "name": "自贸区",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "000876",
    "name": "新希望",
    "hot_rank": 83,
    "hot_rank_chg": -62,
    "stock_cnt": 5851,
    "price": "7.80",
    "change": "1.30",
    "market_id": "33",
    "circulate_market_value": "35100064000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 1.35
      },
      {
        "name": "养猪",
        "change_pct": 1.02
      },
      {
        "name": "大农业",
        "change_pct": 1.49
      },
      {
        "name": "大消费",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "000428",
    "name": "华天酒店",
    "hot_rank": 85,
    "hot_rank_chg": -39,
    "stock_cnt": 5851,
    "price": "5.16",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "5257658200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "酒店主业",
    "xgb_concepts": [
      {
        "name": "湖南国企改革",
        "change_pct": 0.88
      },
      {
        "name": "旅游",
        "change_pct": 2.15
      },
      {
        "name": "物业管理",
        "change_pct": -0.01
      },
      {
        "name": "预制菜",
        "change_pct": 2.5
      },
      {
        "name": "国企改革",
        "change_pct": 0.12
      },
      {
        "name": "餐饮",
        "change_pct": 2.42
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 86,
    "hot_rank_chg": -26,
    "stock_cnt": 5851,
    "price": "4.76",
    "change": "-1.25",
    "market_id": "33",
    "circulate_market_value": "27810286000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.86
      },
      {
        "name": "人工智能",
        "change_pct": 0.02
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.72
      },
      {
        "name": "水利",
        "change_pct": 0.07
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.03
      },
      {
        "name": "大数据",
        "change_pct": -0.54
      },
      {
        "name": "园林",
        "change_pct": 1.24
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 1.47
      },
      {
        "name": "数字经济",
        "change_pct": -0.33
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.23
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.38
      },
      {
        "name": "第三代半导体",
        "change_pct": 1.58
      },
      {
        "name": "快手概念股",
        "change_pct": 0.25
      },
      {
        "name": "IGBT",
        "change_pct": 1.78
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.09
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.05
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.22
      },
      {
        "name": "氮化镓",
        "change_pct": 1.36
      },
      {
        "name": "AI营销",
        "change_pct": -0.18
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.24
      },
      {
        "name": "多模态",
        "change_pct": -0.1
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.88
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.04
      },
      {
        "name": "区块链",
        "change_pct": -0.56
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 87,
    "hot_rank_chg": -48,
    "stock_cnt": 5851,
    "price": "8.05",
    "change": "-0.98",
    "market_id": "17",
    "circulate_market_value": "2170378300000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.06
      },
      {
        "name": "高股息",
        "change_pct": -0.9
      },
      {
        "name": "银行",
        "change_pct": -1.16
      },
      {
        "name": "白马股",
        "change_pct": -0.43
      },
      {
        "name": "破净股",
        "change_pct": -0.09
      },
      {
        "name": "大金融",
        "change_pct": -1.19
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 89,
    "hot_rank_chg": -6,
    "stock_cnt": 5851,
    "price": "11.93",
    "change": "-0.08",
    "market_id": "17",
    "circulate_market_value": "4587653300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.04
      },
      {
        "name": "股权转让",
        "change_pct": 0.63
      },
      {
        "name": "强势人气股",
        "change_pct": 1.57
      },
      {
        "name": "新疆概念",
        "change_pct": 0.77
      },
      {
        "name": "医药",
        "change_pct": 0.28
      },
      {
        "name": "流感",
        "change_pct": 0.54
      },
      {
        "name": "国资入股",
        "change_pct": 0.33
      },
      {
        "name": "减肥药",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 98,
    "hot_rank_chg": 39,
    "stock_cnt": 5851,
    "price": "3.84",
    "change": "8.17",
    "market_id": "17",
    "circulate_market_value": "8495343500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 0.82
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.72
      },
      {
        "name": "光通信",
        "change_pct": 3.35
      },
      {
        "name": "林业",
        "change_pct": 2.11
      },
      {
        "name": "军民融合",
        "change_pct": 0.25
      },
      {
        "name": "军工",
        "change_pct": 0.01
      },
      {
        "name": "人造肉",
        "change_pct": 2.57
      }
    ]
  },
  {
    "code": "600936",
    "name": "北投科技",
    "hot_rank": 99,
    "hot_rank_chg": 14,
    "stock_cnt": 5851,
    "price": "5.47",
    "change": "0.37",
    "market_id": "17",
    "circulate_market_value": "9140513500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.58
      },
      {
        "name": "机器人",
        "change_pct": 1.39
      },
      {
        "name": "广西概念",
        "change_pct": 1.34
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.24
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000592", "name": "平潭发展", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5851, "price": "7.86", "change": "4.94", "market_id": "33", "circulate_market_value": "15052627000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.22}, {"name": "林业", "change_pct": 2.12}, {"name": "碳中和", "change_pct": 0.0}, {"name": "自贸区", "change_pct": 0.27}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5851, "price": "22.00", "change": "4.17", "market_id": "33", "circulate_market_value": "10050705700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600108", "name": "亚盛集团", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5851, "price": "4.80", "change": "10.09", "market_id": "17", "circulate_market_value": "9345192600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "玉米制种", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.37}, {"name": "农业种植", "change_pct": 4.34}, {"name": "土地流转", "change_pct": 1.65}, {"name": "农垦", "change_pct": 3.75}, {"name": "乡村振兴", "change_pct": 2.03}, {"name": "食品", "change_pct": 1.19}, {"name": "甜味剂/代糖", "change_pct": 1.86}, {"name": "大农业", "change_pct": 1.49}, {"name": "蜜雪冰城概念股", "change_pct": 1.92}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5851, "price": "17.11", "change": "10.03", "market_id": "17", "circulate_market_value": "7604444500.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "AI漫剧"}, {"code": "601086", "name": "国芳集团", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5851, "price": "13.92", "change": "10.04", "market_id": "17", "circulate_market_value": "9270720000.00", "change_type": "1", "change_section": "7", "change_days": "6", "change_reason": "连锁零售"}, {"code": "600127", "name": "金健米业", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5851, "price": "13.53", "change": "10.00", "market_id": "17", "circulate_market_value": "8683326900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮油食品"}, {"code": "603123", "name": "翠微股份", "hot_rank": 7, "hot_rank_chg": 5, "stock_cnt": 5851, "price": "11.56", "change": "3.40", "market_id": "17", "circulate_market_value": "7540310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.14}, {"name": "蚂蚁集团概念股", "change_pct": -0.6}, {"name": "无人驾驶", "change_pct": 0.84}, {"name": "新零售", "change_pct": 1.69}, {"name": "移动支付", "change_pct": -0.62}, {"name": "京津冀", "change_pct": 0.16}, {"name": "北京城市规划", "change_pct": 1.06}, {"name": "国产芯片", "change_pct": 1.24}, {"name": "阿里巴巴概念股", "change_pct": 0.01}, {"name": "腾讯概念股", "change_pct": 0.23}, {"name": "物业管理", "change_pct": -0.01}, {"name": "字节跳动概念股", "change_pct": 0.22}, {"name": "国企改革", "change_pct": 0.12}, {"name": "数字人民币", "change_pct": -1.48}, {"name": "AI大模型/智能体", "change_pct": -0.24}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 8, "hot_rank_chg": 8, "stock_cnt": 5851, "price": "7.96", "change": "2.44", "market_id": "17", "circulate_market_value": "20072524000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.37}, {"name": "工业大麻", "change_pct": 0.47}, {"name": "中药", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": 1.57}, {"name": "保健品", "change_pct": 0.02}, {"name": "民营医院", "change_pct": 1.02}, {"name": "医药", "change_pct": 0.28}, {"name": "化学原料药", "change_pct": 0.13}, {"name": "流感", "change_pct": 0.54}, {"name": "振兴东北", "change_pct": 0.11}, {"name": "食品", "change_pct": 1.19}]}, {"code": "603162", "name": "海通发展", "hot_rank": 9, "hot_rank_chg": -3, "stock_cnt": 5851, "price": "14.22", "change": "-2.87", "market_id": "17", "circulate_market_value": "6007042400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 10, "hot_rank_chg": -3, "stock_cnt": 5851, "price": "8.39", "change": "-0.83", "market_id": "33", "circulate_market_value": "13634208000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.37}, {"name": "电竞", "change_pct": 0.53}, {"name": "手游", "change_pct": 1.45}, {"name": "强势人气股", "change_pct": 1.57}, {"name": "人工智能", "change_pct": 0.02}, {"name": "游戏", "change_pct": 1.21}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.33}, {"name": "腾讯概念股", "change_pct": 0.23}, {"name": "快手概念股", "change_pct": 0.25}, {"name": "元宇宙", "change_pct": 0.2}, {"name": "虚拟数字人", "change_pct": 0.09}, {"name": "东数西算/算力", "change_pct": 0.13}, {"name": "web3.0", "change_pct": -0.31}, {"name": "AIGC概念", "change_pct": 0.05}, {"name": "数据要素", "change_pct": -0.51}, {"name": "字节跳动概念股", "change_pct": 0.22}, {"name": "AI营销", "change_pct": -0.18}, {"name": "ChatGPT", "change_pct": -0.22}, {"name": "智能眼镜/MR头显", "change_pct": 1.46}, {"name": "AI大模型/智能体", "change_pct": -0.24}, {"name": "人形机器人", "change_pct": 2.05}, {"name": "短剧/互动影游", "change_pct": 0.88}, {"name": "多模态", "change_pct": -0.1}, {"name": "AI视频", "change_pct": -0.26}, {"name": "IP经济/谷子经济", "change_pct": 0.82}, {"name": "小红书概念股", "change_pct": -0.04}]}, {"code": "002104", "name": "恒宝股份", "hot_rank": 11, "hot_rank_chg": 7, "stock_cnt": 5851, "price": "13.72", "change": "-2.42", "market_id": "33", "circulate_market_value": "8330492800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 12, "hot_rank_chg": 1, "stock_cnt": 5851, "price": "5.70", "change": "1.97", "market_id": "33", "circulate_market_value": "4051553200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.02}, {"name": "影视", "change_pct": 0.98}, {"name": "旅游", "change_pct": 2.15}, {"name": "虚拟数字人", "change_pct": 0.09}, {"name": "AI营销", "change_pct": -0.18}, {"name": "AI大模型/智能体", "change_pct": -0.24}, {"name": "短剧/互动影游", "change_pct": 0.88}, {"name": "IP经济/谷子经济", "change_pct": 0.82}]}, {"code": "002084", "name": "海鸥住工", "hot_rank": 13, "hot_rank_chg": 36, "stock_cnt": 5851, "price": "6.81", "change": "-3.94", "market_id": "33", "circulate_market_value": "4396406900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.22}, {"name": "强势人气股", "change_pct": 1.57}, {"name": "装修装饰", "change_pct": 0.87}, {"name": "装配式建筑", "change_pct": 0.71}, {"name": "家具家居", "change_pct": 0.24}, {"name": "智能制造", "change_pct": 1.07}, {"name": "3D打印", "change_pct": 1.88}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.26}, {"name": "旧改", "change_pct": 0.28}]}, {"code": "600869", "name": "远东股份", "hot_rank": 14, "hot_rank_chg": -4, "stock_cnt": 5851, "price": "20.50", "change": "-3.30", "market_id": "17", "circulate_market_value": "45496731000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 15, "hot_rank_chg": 23, "stock_cnt": 5851, "price": "27.73", "change": "-3.31", "market_id": "17", "circulate_market_value": "11119730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 16, "hot_rank_chg": 12, "stock_cnt": 5851, "price": "15.62", "change": "-1.08", "market_id": "17", "circulate_market_value": "20060432000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600865", "name": "百大集团", "hot_rank": 17, "hot_rank_chg": -6, "stock_cnt": 5851, "price": "12.49", "change": "10.04", "market_id": "17", "circulate_market_value": "4699241500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "商业零售", "xgb_concepts": [{"name": "物业管理", "change_pct": -0.01}, {"name": "免税店概念", "change_pct": 1.45}, {"name": "地摊经济", "change_pct": 1.64}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 19, "hot_rank_chg": 181, "stock_cnt": 5851, "price": "6.06", "change": "4.85", "market_id": "33", "circulate_market_value": "7035226300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 0.98}, {"name": "新疆概念", "change_pct": 0.77}, {"name": "阿里巴巴概念股", "change_pct": 0.01}, {"name": "腾讯概念股", "change_pct": 0.23}, {"name": "短剧/互动影游", "change_pct": 0.88}, {"name": "IP经济/谷子经济", "change_pct": 0.82}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 20, "hot_rank_chg": -6, "stock_cnt": 5851, "price": "3.20", "change": "1.59", "market_id": "33", "circulate_market_value": "7496602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 1.69}, {"name": "强势人气股", "change_pct": 1.57}, {"name": "人工智能", "change_pct": 0.02}, {"name": "VR&AR", "change_pct": 1.2}, {"name": "京津冀", "change_pct": 0.16}, {"name": "装修装饰", "change_pct": 0.87}, {"name": "住房租赁", "change_pct": -0.17}, {"name": "破净股", "change_pct": -0.09}, {"name": "数字经济", "change_pct": -0.33}, {"name": "房产经纪", "change_pct": 0.39}, {"name": "物业管理", "change_pct": -0.01}, {"name": "华为产业链", "change_pct": 0.71}, {"name": "AI大模型/智能体", "change_pct": -0.24}]}, {"code": "002827", "name": "高争民爆", "hot_rank": 21, "hot_rank_chg": 20, "stock_cnt": 5851, "price": "68.02", "change": "2.98", "market_id": "33", "circulate_market_value": "18801043000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 22, "hot_rank_chg": 75, "stock_cnt": 5851, "price": "381.37", "change": "2.54", "market_id": "17", "circulate_market_value": "255758310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000735", "name": "罗牛山", "hot_rank": 23, "hot_rank_chg": -8, "stock_cnt": 5851, "price": "6.74", "change": "9.95", "market_id": "33", "circulate_market_value": "7757049300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "生猪养殖", "xgb_concepts": [{"name": "养鸡", "change_pct": 1.2}, {"name": "养猪", "change_pct": 1.02}, {"name": "农垦", "change_pct": 3.75}, {"name": "冷链", "change_pct": 0.88}, {"name": "大数据", "change_pct": -0.54}, {"name": "教育", "change_pct": 0.02}, {"name": "海南概念", "change_pct": 1.24}, {"name": "自由贸易港", "change_pct": 0.45}, {"name": "海南自由贸易港", "change_pct": 1.21}, {"name": "赛马", "change_pct": 3.22}, {"name": "大农业", "change_pct": 1.49}, {"name": "职业教育", "change_pct": 0.39}, {"name": "自贸区", "change_pct": 0.27}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 24, "hot_rank_chg": 19, "stock_cnt": 5851, "price": "535.96", "change": "1.07", "market_id": "17", "circulate_market_value": "16125814000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 25, "hot_rank_chg": 7, "stock_cnt": 5851, "price": "17.02", "change": "-1.05", "market_id": "17", "circulate_market_value": "11579040900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 26, "hot_rank_chg": 144, "stock_cnt": 5851, "price": "207.21", "change": "10.00", "market_id": "17", "circulate_market_value": "57104667000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高速光模块"}, {"code": "603118", "name": "共进股份", "hot_rank": 27, "hot_rank_chg": 209, "stock_cnt": 5851, "price": "17.89", "change": "10.03", "market_id": "17", "circulate_market_value": "14084375000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "800G交换机"}, {"code": "600150", "name": "中国船舶", "hot_rank": 28, "hot_rank_chg": -19, "stock_cnt": 5851, "price": "37.95", "change": "1.28", "market_id": "17", "circulate_market_value": "285597330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 29, "hot_rank_chg": 15, "stock_cnt": 5851, "price": "63.55", "change": "2.14", "market_id": "17", "circulate_market_value": "155929220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 30, "hot_rank_chg": 85, "stock_cnt": 5851, "price": "16.74", "change": "-2.16", "market_id": "33", "circulate_market_value": "9810444800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 31, "hot_rank_chg": -8, "stock_cnt": 5851, "price": "9.53", "change": "10.05", "market_id": "17", "circulate_market_value": "5029953800.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "中报增长", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.34}, {"name": "棉花", "change_pct": 3.12}, {"name": "大农业", "change_pct": 1.49}, {"name": "供销社", "change_pct": 1.62}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 32, "hot_rank_chg": 52, "stock_cnt": 5851, "price": "57.49", "change": "4.91", "market_id": "17", "circulate_market_value": "258879710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 33, "hot_rank_chg": -11, "stock_cnt": 5851, "price": "73.02", "change": "-6.04", "market_id": "33", "circulate_market_value": "107128851000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600506", "name": "统一股份", "hot_rank": 34, "hot_rank_chg": -15, "stock_cnt": 5851, "price": "17.81", "change": "-3.52", "market_id": "17", "circulate_market_value": "4445814400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603122", "name": "合富中国", "hot_rank": 35, "hot_rank_chg": -2, "stock_cnt": 5851, "price": "13.74", "change": "1.33", "market_id": "17", "circulate_market_value": "5469243200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601118", "name": "海南橡胶", "hot_rank": 36, "hot_rank_chg": -5, "stock_cnt": 5851, "price": "7.38", "change": "4.98", "market_id": "17", "circulate_market_value": "31582177000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.34}, {"name": "橡胶", "change_pct": 3.29}, {"name": "土地流转", "change_pct": 1.65}, {"name": "农垦", "change_pct": 3.75}, {"name": "海南概念", "change_pct": 1.24}, {"name": "自由贸易港", "change_pct": 0.45}, {"name": "海南自由贸易港", "change_pct": 1.21}, {"name": "大农业", "change_pct": 1.49}, {"name": "可降解塑料", "change_pct": 0.36}, {"name": "大消费", "change_pct": 0.13}, {"name": "免税店概念", "change_pct": 1.45}, {"name": "自贸区", "change_pct": 0.27}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 37, "hot_rank_chg": 30, "stock_cnt": 5851, "price": "868.71", "change": "6.72", "market_id": "33", "circulate_market_value": "964213370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605580", "name": "恒盛能源", "hot_rank": 38, "hot_rank_chg": -2, "stock_cnt": 5851, "price": "23.25", "change": "3.47", "market_id": "17", "circulate_market_value": "6510000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002881", "name": "美格智能", "hot_rank": 39, "hot_rank_chg": 129, "stock_cnt": 5851, "price": "46.12", "change": "9.99", "market_id": "33", "circulate_market_value": "8450985400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "参设合资公司（光器件）"}, {"code": "002702", "name": "海欣食品", "hot_rank": 40, "hot_rank_chg": -16, "stock_cnt": 5851, "price": "6.17", "change": "9.98", "market_id": "33", "circulate_market_value": "2830448900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "速冻食品", "xgb_concepts": [{"name": "食品", "change_pct": 1.19}, {"name": "预制菜", "change_pct": 2.5}, {"name": "人造肉", "change_pct": 2.57}, {"name": "地摊经济", "change_pct": 1.64}]}, {"code": "000017", "name": "深中华A", "hot_rank": 41, "hot_rank_chg": 12, "stock_cnt": 5851, "price": "9.05", "change": "-4.83", "market_id": "33", "circulate_market_value": "3993846900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.63}, {"name": "锂电池", "change_pct": 0.95}, {"name": "强势人气股", "change_pct": 1.57}, {"name": "新能源汽车", "change_pct": 1.02}, {"name": "两轮车", "change_pct": 0.83}, {"name": "珠宝饰品", "change_pct": -1.1}]}, {"code": "000582", "name": "北部湾港", "hot_rank": 42, "hot_rank_chg": -22, "stock_cnt": 5851, "price": "12.30", "change": "0.98", "market_id": "33", "circulate_market_value": "26529233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "港口", "change_pct": -0.28}, {"name": "一带一路", "change_pct": 0.22}, {"name": "天然气", "change_pct": -0.28}, {"name": "RCEP概念", "change_pct": 0.1}, {"name": "西部大开发", "change_pct": 0.26}, {"name": "广西概念", "change_pct": 1.34}, {"name": "星闪概念", "change_pct": -0.16}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 43, "hot_rank_chg": -17, "stock_cnt": 5851, "price": "5.19", "change": "0.19", "market_id": "33", "circulate_market_value": "13766737000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.57}, {"name": "装修装饰", "change_pct": 0.87}, {"name": "装配式建筑", "change_pct": 0.71}, {"name": "航天", "change_pct": 0.2}, {"name": "旧改", "change_pct": 0.28}]}, {"code": "002909", "name": "集泰股份", "hot_rank": 44, "hot_rank_chg": -7, "stock_cnt": 5851, "price": "7.93", "change": "9.99", "market_id": "33", "circulate_market_value": "3016789100.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "液冷硅油", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.22}, {"name": "有机硅", "change_pct": 0.66}, {"name": "装修装饰", "change_pct": 0.87}, {"name": "装配式建筑", "change_pct": 0.71}, {"name": "光伏", "change_pct": 0.91}, {"name": "船舶", "change_pct": -0.87}, {"name": "固态电池", "change_pct": 0.92}, {"name": "新型城镇化", "change_pct": 0.76}, {"name": "旧改", "change_pct": 0.28}, {"name": "飞行汽车/eVTOL", "change_pct": 0.87}, {"name": "液冷服务器", "change_pct": 0.88}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 45, "hot_rank_chg": 6, "stock_cnt": 5851, "price": "36.54", "change": "0.25", "market_id": "17", "circulate_market_value": "25269779000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 46, "hot_rank_chg": 1, "stock_cnt": 5851, "price": "20.70", "change": "-2.54", "market_id": "33", "circulate_market_value": "21159406000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601628", "name": "中国人寿", "hot_rank": 47, "hot_rank_chg": -13, "stock_cnt": 5851, "price": "38.61", "change": "-1.43", "market_id": "17", "circulate_market_value": "803996490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 48, "hot_rank_chg": -31, "stock_cnt": 5851, "price": "14.53", "change": "6.06", "market_id": "17", "circulate_market_value": "4251158300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 49, "hot_rank_chg": 28, "stock_cnt": 5851, "price": "5.09", "change": "1.60", "market_id": "17", "circulate_market_value": "7957280300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.84}, {"name": "共享经济", "change_pct": 0.21}, {"name": "云计算数据中心", "change_pct": 0.72}, {"name": "旅游", "change_pct": 2.15}, {"name": "物业管理", "change_pct": -0.01}]}, {"code": "603629", "name": "利通电子", "hot_rank": 50, "hot_rank_chg": 73, "stock_cnt": 5851, "price": "111.12", "change": "2.56", "market_id": "17", "circulate_market_value": "40083584000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 51, "hot_rank_chg": 89, "stock_cnt": 5851, "price": "185.29", "change": "3.69", "market_id": "33", "circulate_market_value": "256843830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002059", "name": "云南旅游", "hot_rank": 52, "hot_rank_chg": 6, "stock_cnt": 5851, "price": "5.89", "change": "4.06", "market_id": "33", "circulate_market_value": "5843320200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.15}, {"name": "旅游", "change_pct": 2.15}, {"name": "虚拟数字人", "change_pct": 0.09}, {"name": "国企改革", "change_pct": 0.12}]}, {"code": "600667", "name": "太极实业", "hot_rank": 53, "hot_rank_chg": 22, "stock_cnt": 5851, "price": "17.85", "change": "3.66", "market_id": "17", "circulate_market_value": "37334028000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 54, "hot_rank_chg": 10, "stock_cnt": 5851, "price": "16.78", "change": "-2.27", "market_id": "33", "circulate_market_value": "27239387000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 55, "hot_rank_chg": 23, "stock_cnt": 5851, "price": "4.81", "change": "-6.05", "market_id": "17", "circulate_market_value": "5860561900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.09}, {"name": "煤炭", "change_pct": -2.23}, {"name": "有色金属", "change_pct": 0.39}, {"name": "国企改革", "change_pct": 0.12}, {"name": "河南国企改革", "change_pct": -0.92}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 56, "hot_rank_chg": 20, "stock_cnt": 5851, "price": "41.11", "change": "2.31", "market_id": "17", "circulate_market_value": "163271940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 57, "hot_rank_chg": -3, "stock_cnt": 5851, "price": "12.49", "change": "5.13", "market_id": "17", "circulate_market_value": "22346337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.42}, {"name": "纯碱", "change_pct": -0.42}, {"name": "食品", "change_pct": 1.19}, {"name": "土壤修复", "change_pct": 0.38}, {"name": "东数西算/算力", "change_pct": 0.13}, {"name": "OpenClaw概念", "change_pct": 0.32}, {"name": "DeepSeek概念股", "change_pct": -0.36}]}, {"code": "605398", "name": "新炬网络", "hot_rank": 58, "hot_rank_chg": -23, "stock_cnt": 5851, "price": "25.08", "change": "-5.93", "market_id": "17", "circulate_market_value": "4080926800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 59, "hot_rank_chg": 22, "stock_cnt": 5851, "price": "68.37", "change": "1.50", "market_id": "17", "circulate_market_value": "122342274000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603448", "name": "天博智能", "hot_rank": 60, "hot_rank_chg": 454, "stock_cnt": 5851, "price": "92.98", "change": "48.41", "market_id": "17", "circulate_market_value": "2186595500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002403", "name": "爱仕达", "hot_rank": 61, "hot_rank_chg": -31, "stock_cnt": 5851, "price": "12.41", "change": "10.02", "market_id": "33", "circulate_market_value": "3687773600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "人形机器人", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.3}, {"name": "股权转让", "change_pct": 0.63}, {"name": "工业自动化", "change_pct": 1.54}, {"name": "小家电", "change_pct": 1.79}, {"name": "机器人", "change_pct": 1.39}, {"name": "家电", "change_pct": 0.72}, {"name": "智慧物流", "change_pct": 0.56}, {"name": "机器视觉", "change_pct": 1.67}, {"name": "智能制造", "change_pct": 1.07}, {"name": "独角兽", "change_pct": 0.85}, {"name": "减速器", "change_pct": 2.78}, {"name": "C2M", "change_pct": 0.48}]}, {"code": "000798", "name": "中水渔业", "hot_rank": 62, "hot_rank_chg": -35, "stock_cnt": 5851, "price": "11.15", "change": "9.96", "market_id": "33", "circulate_market_value": "4079073800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "远洋渔业", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.15}, {"name": "人工智能", "change_pct": 0.02}, {"name": "社区团购", "change_pct": 2.15}, {"name": "预制菜", "change_pct": 2.5}, {"name": "国企改革", "change_pct": 0.12}, {"name": "水产养殖", "change_pct": 4.11}, {"name": "海洋经济", "change_pct": 0.37}]}, {"code": "600206", "name": "有研新材", "hot_rank": 63, "hot_rank_chg": 56, "stock_cnt": 5851, "price": "46.19", "change": "2.15", "market_id": "17", "circulate_market_value": "39102298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600698", "name": "湖南天雁", "hot_rank": 65, "hot_rank_chg": 15, "stock_cnt": 5851, "price": "8.00", "change": "1.14", "market_id": "17", "circulate_market_value": "6643613900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.15}, {"name": "军工集团", "change_pct": -0.67}, {"name": "汽车零部件", "change_pct": 1.2}, {"name": "军工", "change_pct": 0.01}, {"name": "国企改革", "change_pct": 0.12}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 66, "hot_rank_chg": -16, "stock_cnt": 5851, "price": "22.85", "change": "0.84", "market_id": "33", "circulate_market_value": "10335941600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002855", "name": "捷荣技术", "hot_rank": 67, "hot_rank_chg": 6, "stock_cnt": 5851, "price": "18.80", "change": "4.74", "market_id": "33", "circulate_market_value": "4629072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 68, "hot_rank_chg": -5, "stock_cnt": 5851, "price": "11.38", "change": "4.12", "market_id": "17", "circulate_market_value": "9888682700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.37}, {"name": "快递物流", "change_pct": 0.47}, {"name": "新零售", "change_pct": 1.69}, {"name": "福建自贸/海西概念", "change_pct": 0.28}, {"name": "旅游", "change_pct": 2.15}, {"name": "阿里巴巴概念股", "change_pct": 0.01}, {"name": "物业管理", "change_pct": -0.01}, {"name": "免税店概念", "change_pct": 1.45}, {"name": "自贸区", "change_pct": 0.27}]}, {"code": "003005", "name": "竞业达", "hot_rank": 69, "hot_rank_chg": -4, "stock_cnt": 5851, "price": "18.82", "change": "1.89", "market_id": "33", "circulate_market_value": "2526885700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 70, "hot_rank_chg": 22, "stock_cnt": 5851, "price": "49.32", "change": "1.86", "market_id": "33", "circulate_market_value": "56582730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 71, "hot_rank_chg": -1, "stock_cnt": 5851, "price": "34.84", "change": "-1.22", "market_id": "33", "circulate_market_value": "99644932000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 72, "hot_rank_chg": -27, "stock_cnt": 5851, "price": "14.06", "change": "-1.82", "market_id": "33", "circulate_market_value": "9281077100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 73, "hot_rank_chg": 83, "stock_cnt": 5851, "price": "404.48", "change": "3.37", "market_id": "33", "circulate_market_value": "66829664000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 74, "hot_rank_chg": -22, "stock_cnt": 5851, "price": "13.95", "change": "-0.14", "market_id": "33", "circulate_market_value": "48517127000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 75, "hot_rank_chg": -46, "stock_cnt": 5851, "price": "5.63", "change": "0.36", "market_id": "33", "circulate_market_value": "199116970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.26}, {"name": "手机产业链", "change_pct": 1.94}, {"name": "超高清视频", "change_pct": 0.2}, {"name": "苹果产业链", "change_pct": 2.75}, {"name": "电竞", "change_pct": 0.53}, {"name": "半导体", "change_pct": 2.07}, {"name": "人工智能", "change_pct": 0.02}, {"name": "互联网医疗", "change_pct": -0.11}, {"name": "VR&AR", "change_pct": 1.2}, {"name": "OLED", "change_pct": 2.16}, {"name": "京津冀", "change_pct": 0.16}, {"name": "物联网", "change_pct": 0.43}, {"name": "指纹识别", "change_pct": 1.29}, {"name": "汽车零部件", "change_pct": 1.2}, {"name": "白马股", "change_pct": -0.43}, {"name": "智能制造", "change_pct": 1.07}, {"name": "小米概念股", "change_pct": 1.47}, {"name": "国产芯片", "change_pct": 1.24}, {"name": "液晶面板/LCD", "change_pct": 1.62}, {"name": "全息概念", "change_pct": 0.83}, {"name": "理想汽车概念股", "change_pct": 0.38}, {"name": "MicroLED", "change_pct": 1.97}, {"name": "钙钛矿电池", "change_pct": 1.15}, {"name": "智能手表", "change_pct": 1.58}, {"name": "MiniLED", "change_pct": 2.06}, {"name": "传感器", "change_pct": 1.28}, {"name": "大硅片", "change_pct": 1.96}, {"name": "AI PC", "change_pct": 1.64}, {"name": "华为产业链", "change_pct": 0.71}, {"name": "回购", "change_pct": 0.28}, {"name": "光电共封装CPO", "change_pct": 4.63}, {"name": "智能眼镜/MR头显", "change_pct": 1.46}, {"name": "玻璃基板封装", "change_pct": 2.87}]}, {"code": "603228", "name": "景旺电子", "hot_rank": 76, "hot_rank_chg": 13, "stock_cnt": 5851, "price": "105.38", "change": "9.34", "market_id": "17", "circulate_market_value": "103445002000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 77, "hot_rank_chg": 24, "stock_cnt": 5851, "price": "9.28", "change": "2.88", "market_id": "17", "circulate_market_value": "4448089400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": 1.57}, {"name": "医药商业", "change_pct": 0.76}, {"name": "医药", "change_pct": 0.28}, {"name": "流感", "change_pct": 0.54}]}, {"code": "002124", "name": "天邦食品", "hot_rank": 78, "hot_rank_chg": -30, "stock_cnt": 5851, "price": "2.55", "change": "5.79", "market_id": "33", "circulate_market_value": "5049281700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 1.35}, {"name": "养猪", "change_pct": 1.02}, {"name": "社区团购", "change_pct": 2.15}, {"name": "大农业", "change_pct": 1.49}, {"name": "预制菜", "change_pct": 2.5}, {"name": "元宇宙", "change_pct": 0.2}, {"name": "低价股", "change_pct": 0.63}]}, {"code": "300300", "name": "海峡创新", "hot_rank": 79, "hot_rank_chg": 21, "stock_cnt": 5851, "price": "8.90", "change": "-2.52", "market_id": "33", "circulate_market_value": "5934605400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.02}, {"name": "互联网医疗", "change_pct": -0.11}, {"name": "云计算数据中心", "change_pct": 0.72}, {"name": "福建自贸/海西概念", "change_pct": 0.28}, {"name": "大数据", "change_pct": -0.54}, {"name": "智慧城市", "change_pct": 0.04}, {"name": "独角兽", "change_pct": 0.85}, {"name": "东数西算/算力", "change_pct": 0.13}, {"name": "医美", "change_pct": 0.89}, {"name": "网红/MCN", "change_pct": 0.14}, {"name": "自贸区", "change_pct": 0.27}, {"name": "区块链", "change_pct": -0.56}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 80, "hot_rank_chg": -55, "stock_cnt": 5851, "price": "33.00", "change": "-1.05", "market_id": "17", "circulate_market_value": "679859170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 81, "hot_rank_chg": 43, "stock_cnt": 5851, "price": "7.75", "change": "9.93", "market_id": "33", "circulate_market_value": "6868440800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.34}, {"name": "土地流转", "change_pct": 1.65}, {"name": "海南概念", "change_pct": 1.24}, {"name": "自由贸易港", "change_pct": 0.45}, {"name": "海南自由贸易港", "change_pct": 1.21}, {"name": "大农业", "change_pct": 1.49}, {"name": "水产养殖", "change_pct": 4.11}, {"name": "自贸区", "change_pct": 0.27}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 82, "hot_rank_chg": 29, "stock_cnt": 5851, "price": "20.82", "change": "2.21", "market_id": "33", "circulate_market_value": "24505845000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000876", "name": "新希望", "hot_rank": 83, "hot_rank_chg": -62, "stock_cnt": 5851, "price": "7.80", "change": "1.30", "market_id": "33", "circulate_market_value": "35100064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 1.35}, {"name": "养猪", "change_pct": 1.02}, {"name": "大农业", "change_pct": 1.49}, {"name": "大消费", "change_pct": 0.13}]}, {"code": "603696", "name": "安记食品", "hot_rank": 84, "hot_rank_chg": -29, "stock_cnt": 5851, "price": "16.64", "change": "9.98", "market_id": "17", "circulate_market_value": "3913728000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "调味品"}, {"code": "000428", "name": "华天酒店", "hot_rank": 85, "hot_rank_chg": -39, "stock_cnt": 5851, "price": "5.16", "change": "10.02", "market_id": "33", "circulate_market_value": "5257658200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "酒店主业", "xgb_concepts": [{"name": "湖南国企改革", "change_pct": 0.88}, {"name": "旅游", "change_pct": 2.15}, {"name": "物业管理", "change_pct": -0.01}, {"name": "预制菜", "change_pct": 2.5}, {"name": "国企改革", "change_pct": 0.12}, {"name": "餐饮", "change_pct": 2.42}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 86, "hot_rank_chg": -26, "stock_cnt": 5851, "price": "4.76", "change": "-1.25", "market_id": "33", "circulate_market_value": "27810286000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.86}, {"name": "人工智能", "change_pct": 0.02}, {"name": "云计算数据中心", "change_pct": 0.72}, {"name": "水利", "change_pct": 0.07}, {"name": "直播/短视频", "change_pct": -0.03}, {"name": "大数据", "change_pct": -0.54}, {"name": "园林", "change_pct": 1.24}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.47}, {"name": "数字经济", "change_pct": -0.33}, {"name": "腾讯概念股", "change_pct": 0.23}, {"name": "理想汽车概念股", "change_pct": 0.38}, {"name": "第三代半导体", "change_pct": 1.58}, {"name": "快手概念股", "change_pct": 0.25}, {"name": "IGBT", "change_pct": 1.78}, {"name": "虚拟数字人", "change_pct": 0.09}, {"name": "AIGC概念", "change_pct": 0.05}, {"name": "字节跳动概念股", "change_pct": 0.22}, {"name": "氮化镓", "change_pct": 1.36}, {"name": "AI营销", "change_pct": -0.18}, {"name": "AI大模型/智能体", "change_pct": -0.24}, {"name": "多模态", "change_pct": -0.1}, {"name": "液冷服务器", "change_pct": 0.88}, {"name": "小红书概念股", "change_pct": -0.04}, {"name": "区块链", "change_pct": -0.56}]}, {"code": "601398", "name": "工商银行", "hot_rank": 87, "hot_rank_chg": -48, "stock_cnt": 5851, "price": "8.05", "change": "-0.98", "market_id": "17", "circulate_market_value": "2170378300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.06}, {"name": "高股息", "change_pct": -0.9}, {"name": "银行", "change_pct": -1.16}, {"name": "白马股", "change_pct": -0.43}, {"name": "破净股", "change_pct": -0.09}, {"name": "大金融", "change_pct": -1.19}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 88, "hot_rank_chg": -14, "stock_cnt": 5851, "price": "36.85", "change": "-0.41", "market_id": "33", "circulate_market_value": "27918321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 89, "hot_rank_chg": -6, "stock_cnt": 5851, "price": "11.93", "change": "-0.08", "market_id": "17", "circulate_market_value": "4587653300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.04}, {"name": "股权转让", "change_pct": 0.63}, {"name": "强势人气股", "change_pct": 1.57}, {"name": "新疆概念", "change_pct": 0.77}, {"name": "医药", "change_pct": 0.28}, {"name": "流感", "change_pct": 0.54}, {"name": "国资入股", "change_pct": 0.33}, {"name": "减肥药", "change_pct": 0.67}]}, {"code": "002407", "name": "多氟多", "hot_rank": 90, "hot_rank_chg": 5, "stock_cnt": 5851, "price": "33.10", "change": "0.94", "market_id": "33", "circulate_market_value": "35789205000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 91, "hot_rank_chg": -32, "stock_cnt": 5851, "price": "23.87", "change": "-0.83", "market_id": "17", "circulate_market_value": "11444791600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600737", "name": "中粮糖业", "hot_rank": 92, "hot_rank_chg": -50, "stock_cnt": 5851, "price": "16.58", "change": "6.21", "market_id": "17", "circulate_market_value": "35462104000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 93, "hot_rank_chg": 69, "stock_cnt": 5851, "price": "58.40", "change": "2.69", "market_id": "33", "circulate_market_value": "88619210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 94, "hot_rank_chg": -15, "stock_cnt": 5851, "price": "64.45", "change": "0.91", "market_id": "33", "circulate_market_value": "73082654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 95, "hot_rank_chg": 19, "stock_cnt": 5851, "price": "144.27", "change": "4.95", "market_id": "17", "circulate_market_value": "348015360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 96, "hot_rank_chg": -35, "stock_cnt": 5851, "price": "34.20", "change": "-1.75", "market_id": "17", "circulate_market_value": "24768611000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 97, "hot_rank_chg": 45, "stock_cnt": 5851, "price": "15.97", "change": "2.57", "market_id": "33", "circulate_market_value": "53116644000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 98, "hot_rank_chg": 39, "stock_cnt": 5851, "price": "3.84", "change": "8.17", "market_id": "17", "circulate_market_value": "8495343500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 0.82}, {"name": "云计算数据中心", "change_pct": 0.72}, {"name": "光通信", "change_pct": 3.35}, {"name": "林业", "change_pct": 2.11}, {"name": "军民融合", "change_pct": 0.25}, {"name": "军工", "change_pct": 0.01}, {"name": "人造肉", "change_pct": 2.57}]}, {"code": "600936", "name": "北投科技", "hot_rank": 99, "hot_rank_chg": 14, "stock_cnt": 5851, "price": "5.47", "change": "0.37", "market_id": "17", "circulate_market_value": "9140513500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.58}, {"name": "机器人", "change_pct": 1.39}, {"name": "广西概念", "change_pct": 1.34}, {"name": "AI大模型/智能体", "change_pct": -0.24}]}, {"code": "300502", "name": "新易盛", "hot_rank": 100, "hot_rank_chg": 101, "stock_cnt": 5851, "price": "404.78", "change": "4.79", "market_id": "33", "circulate_market_value": "507341360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "688496": "[行政处罚事先告知书] *ST清越：清越科技关于收到中国证监会《行政处罚事先告知书》的公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "301139": "[行政处罚事先告知书] 元道通信：关于收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "920305": "[行政处罚事先告知书] [临时公告]*ST云创:行政处罚事先告知书", "603169": "[行政处罚事先告知书] 兰石重装：兰石重装关于收到中国证券监督管理委员会甘肃监管局《行政处罚事先告知书》", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300391": "[行政处罚事先告知书] *ST长药：关于公司及相关人员收到《行政处罚事先告知书》的公告", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600581": "[行政处罚事先告知书] 八一钢铁：八一钢铁关于公司、控股股东及相关当事人收到中国证券监督管理委员会新疆监", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};