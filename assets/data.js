const UPDATE_TIME = "2026-09-07 07:49";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 5.59,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续286天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "液冷服务器",
    "rise": 1.89,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "PCB概念",
    "rise": 4.23,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续109天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "粮食概念",
    "rise": 3.7,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "存储芯片",
    "rise": 3.65,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续239天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "猪肉",
    "rise": 1.79,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885573"
  },
  {
    "name": "创新药",
    "rise": 0.34,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续116天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": 0.26,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续44天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "光纤概念",
    "rise": 3.6,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续115天上榜",
    "rankChg": 0,
    "etfName": "科创银华LOF",
    "code": "886084"
  },
  {
    "name": "培育钻石",
    "rise": 1.55,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "数字货币",
    "rise": -1.17,
    "rate": 0,
    "tag": "",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "人形机器人",
    "rise": 1.77,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": 2.72,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "财通福鑫定开混合",
    "code": "886112"
  },
  {
    "name": "算力租赁",
    "rise": 0.69,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续150天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "农业种植",
    "rise": 2.3,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "商业航天",
    "rise": 1.18,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续215天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "芯片概念",
    "rise": 2.18,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "AI视频",
    "rise": 1.45,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "PET铜箔",
    "rise": 3.94,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "机器人概念",
    "rise": 1.31,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  }
];
const THS_EVENTS = [
  {
    "title": "AI链红利兑现，PCB产业链景气度持续走高",
    "desc": "",
    "heat": 810565,
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
        "chg": 16.96649
      }
    ]
  },
  {
    "title": "大摩:CPO量产最大瓶颈浮现，测试设备或迎来超级周期",
    "desc": "",
    "heat": 788364,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "则成电子",
        "code": "920821",
        "chg": 29.972452
      }
    ]
  },
  {
    "title": "华为Mate 90系列入网：直接标注5G！首发韬定律麒麟芯",
    "desc": "",
    "heat": 447789,
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
        "chg": 20.0
      }
    ]
  },
  {
    "title": "美股存储暴力拉升传导亚太，韩国扩产60万片晶圆",
    "desc": "",
    "heat": 428707,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "德福科技",
        "code": "301511",
        "chg": 16.96649
      }
    ]
  },
  {
    "title": "我国粮食企业年工业总产值超4万亿元",
    "desc": "",
    "heat": 401029,
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
    "title": "中秋国庆提前订加速“抢跑” “请3休13”点燃超长假期消费热情",
    "desc": "",
    "heat": 154480,
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
    "title": "“国家反诈AI”App上线",
    "desc": "",
    "heat": 68323,
    "direction": "AI安全",
    "themes": [
      "网络安全",
      "多模态AI"
    ],
    "stocks": [
      {
        "name": "中胤时尚",
        "code": "300901",
        "chg": 11.018711
      }
    ]
  },
  {
    "title": "中东航线海运价格连续上涨 部分涨幅超50%",
    "desc": "",
    "heat": 48535,
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
    "heat": 36221,
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
        "chg": 14.2727
      }
    ]
  },
  {
    "title": "美伊，局势突变！国际油价上涨",
    "desc": "",
    "heat": 35560,
    "direction": "美伊战争",
    "themes": [
      "石油加工贸易",
      "油气开采及服务",
      "稀土永磁",
      "天然气"
    ],
    "stocks": [
      {
        "name": "龙磁科技",
        "code": "300835",
        "chg": 12.516213
      }
    ]
  },
  {
    "title": "绿色算力，再迎利好！七部门印发双化协同实施方案",
    "desc": "",
    "heat": 5776,
    "direction": "算电协同",
    "themes": [
      "算电协同",
      "电力"
    ],
    "stocks": [
      {
        "name": "恒盛能源",
        "code": "605580",
        "chg": 8.633734
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "光电共封装CPO",
    "change": "+7.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+5.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+5.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+5.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+5.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高价股",
    "change": "+5.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+5.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+4.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+4.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+4.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+4.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+4.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+4.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PET复合铜箔",
    "change": "+4.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+4.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光纤概念",
    "change": "+4.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+4.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+3.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+3.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+3.97%",
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
    "hot_rank": 3,
    "hot_rank_chg": -2,
    "stock_cnt": 5807,
    "price": "7.87",
    "change": "5.07",
    "market_id": "33",
    "circulate_market_value": "15071778000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.46
      },
      {
        "name": "林业",
        "change_pct": 2.52
      },
      {
        "name": "碳中和",
        "change_pct": 0.08
      },
      {
        "name": "自贸区",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 6,
    "hot_rank_chg": 10,
    "stock_cnt": 5807,
    "price": "8.00",
    "change": "2.83",
    "market_id": "17",
    "circulate_market_value": "20148079000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.98
      },
      {
        "name": "工业大麻",
        "change_pct": 1.11
      },
      {
        "name": "中药",
        "change_pct": 0.66
      },
      {
        "name": "强势人气股",
        "change_pct": 2.96
      },
      {
        "name": "保健品",
        "change_pct": 0.22
      },
      {
        "name": "民营医院",
        "change_pct": 1.24
      },
      {
        "name": "医药",
        "change_pct": 0.49
      },
      {
        "name": "化学原料药",
        "change_pct": 0.42
      },
      {
        "name": "流感",
        "change_pct": 0.86
      },
      {
        "name": "振兴东北",
        "change_pct": 0.28
      },
      {
        "name": "食品",
        "change_pct": 1.42
      }
    ]
  },
  {
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 11,
    "hot_rank_chg": -9,
    "stock_cnt": 5807,
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
        "change_pct": 0.98
      },
      {
        "name": "农业种植",
        "change_pct": 4.57
      },
      {
        "name": "土地流转",
        "change_pct": 1.57
      },
      {
        "name": "农垦",
        "change_pct": 3.99
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.2
      },
      {
        "name": "食品",
        "change_pct": 1.42
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 1.71
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 2.13
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 16,
    "hot_rank_chg": -9,
    "stock_cnt": 5807,
    "price": "8.43",
    "change": "-0.24",
    "market_id": "33",
    "circulate_market_value": "13715558000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.98
      },
      {
        "name": "电竞",
        "change_pct": 0.64
      },
      {
        "name": "手游",
        "change_pct": 1.59
      },
      {
        "name": "强势人气股",
        "change_pct": 2.96
      },
      {
        "name": "人工智能",
        "change_pct": 0.49
      },
      {
        "name": "游戏",
        "change_pct": 1.36
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.14
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.9
      },
      {
        "name": "快手概念股",
        "change_pct": 0.97
      },
      {
        "name": "元宇宙",
        "change_pct": 0.58
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.61
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.74
      },
      {
        "name": "web3.0",
        "change_pct": 0.12
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.67
      },
      {
        "name": "数据要素",
        "change_pct": 0.0
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.99
      },
      {
        "name": "AI营销",
        "change_pct": 0.86
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.27
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.41
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.23
      },
      {
        "name": "人形机器人",
        "change_pct": 2.48
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.59
      },
      {
        "name": "多模态",
        "change_pct": 0.76
      },
      {
        "name": "AI视频",
        "change_pct": 0.37
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.3
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.61
      }
    ]
  },
  {
    "code": "600865",
    "name": "百大集团",
    "hot_rank": 19,
    "hot_rank_chg": -8,
    "stock_cnt": 5807,
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
        "change_pct": -0.08
      },
      {
        "name": "免税店概念",
        "change_pct": 1.49
      },
      {
        "name": "地摊经济",
        "change_pct": 1.91
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 20,
    "hot_rank_chg": -6,
    "stock_cnt": 5807,
    "price": "3.13",
    "change": "-0.64",
    "market_id": "33",
    "circulate_market_value": "7332613800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 2.33
      },
      {
        "name": "强势人气股",
        "change_pct": 2.96
      },
      {
        "name": "人工智能",
        "change_pct": 0.49
      },
      {
        "name": "VR&AR",
        "change_pct": 1.94
      },
      {
        "name": "京津冀",
        "change_pct": 0.31
      },
      {
        "name": "装修装饰",
        "change_pct": 1.03
      },
      {
        "name": "住房租赁",
        "change_pct": -0.33
      },
      {
        "name": "破净股",
        "change_pct": -0.17
      },
      {
        "name": "数字经济",
        "change_pct": 0.14
      },
      {
        "name": "房产经纪",
        "change_pct": -0.36
      },
      {
        "name": "物业管理",
        "change_pct": -0.08
      },
      {
        "name": "华为产业链",
        "change_pct": 1.48
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.23
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 22,
    "hot_rank_chg": 1,
    "stock_cnt": 5807,
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
        "change_pct": 4.57
      },
      {
        "name": "棉花",
        "change_pct": 3.64
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "供销社",
        "change_pct": 1.8
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 25,
    "hot_rank_chg": -12,
    "stock_cnt": 5807,
    "price": "5.86",
    "change": "4.83",
    "market_id": "33",
    "circulate_market_value": "4165281000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.49
      },
      {
        "name": "影视",
        "change_pct": 2.07
      },
      {
        "name": "旅游",
        "change_pct": 2.68
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.61
      },
      {
        "name": "AI营销",
        "change_pct": 0.86
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.23
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.59
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 26,
    "hot_rank_chg": 11,
    "stock_cnt": 5807,
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
        "change_pct": 0.41
      },
      {
        "name": "强势人气股",
        "change_pct": 2.96
      },
      {
        "name": "有机硅",
        "change_pct": 0.67
      },
      {
        "name": "装修装饰",
        "change_pct": 1.03
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.92
      },
      {
        "name": "光伏",
        "change_pct": 1.38
      },
      {
        "name": "船舶",
        "change_pct": -0.67
      },
      {
        "name": "固态电池",
        "change_pct": 1.16
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.99
      },
      {
        "name": "旧改",
        "change_pct": 0.43
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 1.18
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.17
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 28,
    "hot_rank_chg": 35,
    "stock_cnt": 5807,
    "price": "11.49",
    "change": "5.12",
    "market_id": "17",
    "circulate_market_value": "9984267500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.98
      },
      {
        "name": "快递物流",
        "change_pct": 0.85
      },
      {
        "name": "新零售",
        "change_pct": 2.33
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.46
      },
      {
        "name": "旅游",
        "change_pct": 2.68
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.67
      },
      {
        "name": "物业管理",
        "change_pct": -0.08
      },
      {
        "name": "免税店概念",
        "change_pct": 1.49
      },
      {
        "name": "自贸区",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 29,
    "hot_rank_chg": -17,
    "stock_cnt": 5807,
    "price": "11.76",
    "change": "5.19",
    "market_id": "17",
    "circulate_market_value": "7670765200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.21
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.22
      },
      {
        "name": "无人驾驶",
        "change_pct": 1.32
      },
      {
        "name": "新零售",
        "change_pct": 2.33
      },
      {
        "name": "移动支付",
        "change_pct": -0.35
      },
      {
        "name": "京津冀",
        "change_pct": 0.31
      },
      {
        "name": "北京城市规划",
        "change_pct": 1.08
      },
      {
        "name": "国产芯片",
        "change_pct": 2.07
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.67
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.9
      },
      {
        "name": "物业管理",
        "change_pct": -0.08
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.99
      },
      {
        "name": "国企改革",
        "change_pct": 0.36
      },
      {
        "name": "数字人民币",
        "change_pct": -1.27
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.23
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 30,
    "hot_rank_chg": 1,
    "stock_cnt": 5807,
    "price": "7.20",
    "change": "2.42",
    "market_id": "17",
    "circulate_market_value": "30811880000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.57
      },
      {
        "name": "橡胶",
        "change_pct": 2.51
      },
      {
        "name": "土地流转",
        "change_pct": 1.57
      },
      {
        "name": "农垦",
        "change_pct": 3.99
      },
      {
        "name": "海南概念",
        "change_pct": 1.4
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.57
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.24
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.35
      },
      {
        "name": "大消费",
        "change_pct": 0.36
      },
      {
        "name": "免税店概念",
        "change_pct": 1.49
      },
      {
        "name": "自贸区",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 31,
    "hot_rank_chg": 93,
    "stock_cnt": 5807,
    "price": "7.72",
    "change": "9.50",
    "market_id": "33",
    "circulate_market_value": "6841853300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.57
      },
      {
        "name": "土地流转",
        "change_pct": 1.57
      },
      {
        "name": "海南概念",
        "change_pct": 1.4
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.57
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.24
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "水产养殖",
        "change_pct": 5.01
      },
      {
        "name": "自贸区",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 34,
    "hot_rank_chg": 95,
    "stock_cnt": 5807,
    "price": "4.51",
    "change": "5.13",
    "market_id": "17",
    "circulate_market_value": "5761975100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.57
      },
      {
        "name": "化肥",
        "change_pct": 0.47
      },
      {
        "name": "保健品",
        "change_pct": 0.22
      },
      {
        "name": "民营医院",
        "change_pct": 1.24
      },
      {
        "name": "医药",
        "change_pct": 0.49
      },
      {
        "name": "煤化工",
        "change_pct": -0.88
      },
      {
        "name": "食品",
        "change_pct": 1.42
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "干细胞",
        "change_pct": 0.65
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 35,
    "hot_rank_chg": 102,
    "stock_cnt": 5807,
    "price": "3.91",
    "change": "10.14",
    "market_id": "17",
    "circulate_market_value": "8650206600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "光模块",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 1.2
      },
      {
        "name": "强势人气股",
        "change_pct": 2.96
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.73
      },
      {
        "name": "光通信",
        "change_pct": 5.73
      },
      {
        "name": "林业",
        "change_pct": 2.52
      },
      {
        "name": "军民融合",
        "change_pct": 0.65
      },
      {
        "name": "军工",
        "change_pct": 0.36
      },
      {
        "name": "人造肉",
        "change_pct": 3.21
      }
    ]
  },
  {
    "code": "000735",
    "name": "罗牛山",
    "hot_rank": 36,
    "hot_rank_chg": -21,
    "stock_cnt": 5807,
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
        "change_pct": 1.57
      },
      {
        "name": "养猪",
        "change_pct": 1.35
      },
      {
        "name": "农垦",
        "change_pct": 3.99
      },
      {
        "name": "冷链",
        "change_pct": 1.22
      },
      {
        "name": "大数据",
        "change_pct": -0.17
      },
      {
        "name": "教育",
        "change_pct": 1.01
      },
      {
        "name": "海南概念",
        "change_pct": 1.4
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.57
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.24
      },
      {
        "name": "赛马",
        "change_pct": 3.88
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "职业教育",
        "change_pct": 1.1
      },
      {
        "name": "自贸区",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 41,
    "hot_rank_chg": 221,
    "stock_cnt": 5807,
    "price": "7.00",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "4589942200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业零售",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.98
      },
      {
        "name": "新零售",
        "change_pct": 2.33
      },
      {
        "name": "农业种植",
        "change_pct": 4.57
      },
      {
        "name": "冷链",
        "change_pct": 1.22
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "预制菜",
        "change_pct": 2.91
      },
      {
        "name": "国企改革",
        "change_pct": 0.36
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.35
      },
      {
        "name": "免税店概念",
        "change_pct": 1.49
      },
      {
        "name": "湖北国企改革",
        "change_pct": 1.52
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 42,
    "hot_rank_chg": -16,
    "stock_cnt": 5807,
    "price": "5.33",
    "change": "2.90",
    "market_id": "33",
    "circulate_market_value": "14138095000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.96
      },
      {
        "name": "装修装饰",
        "change_pct": 1.03
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.92
      },
      {
        "name": "航天",
        "change_pct": 0.74
      },
      {
        "name": "旧改",
        "change_pct": 0.43
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 49,
    "hot_rank_chg": 9,
    "stock_cnt": 5807,
    "price": "6.07",
    "change": "7.05",
    "market_id": "33",
    "circulate_market_value": "6011687000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.01
      },
      {
        "name": "旅游",
        "change_pct": 2.68
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.61
      },
      {
        "name": "国企改革",
        "change_pct": 0.36
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 50,
    "hot_rank_chg": 4,
    "stock_cnt": 5807,
    "price": "12.55",
    "change": "5.64",
    "market_id": "17",
    "circulate_market_value": "22453686000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.43
      },
      {
        "name": "纯碱",
        "change_pct": -0.61
      },
      {
        "name": "食品",
        "change_pct": 1.42
      },
      {
        "name": "土壤修复",
        "change_pct": 0.45
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.74
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.17
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.37
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 52,
    "hot_rank_chg": -23,
    "stock_cnt": 5807,
    "price": "5.68",
    "change": "1.25",
    "market_id": "33",
    "circulate_market_value": "200885320000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 3.4
      },
      {
        "name": "手机产业链",
        "change_pct": 2.87
      },
      {
        "name": "超高清视频",
        "change_pct": 0.71
      },
      {
        "name": "苹果产业链",
        "change_pct": 3.68
      },
      {
        "name": "电竞",
        "change_pct": 0.64
      },
      {
        "name": "半导体",
        "change_pct": 3.0
      },
      {
        "name": "人工智能",
        "change_pct": 0.49
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.01
      },
      {
        "name": "VR&AR",
        "change_pct": 1.94
      },
      {
        "name": "OLED",
        "change_pct": 2.88
      },
      {
        "name": "京津冀",
        "change_pct": 0.31
      },
      {
        "name": "物联网",
        "change_pct": 0.89
      },
      {
        "name": "指纹识别",
        "change_pct": 2.36
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.28
      },
      {
        "name": "白马股",
        "change_pct": -0.27
      },
      {
        "name": "智能制造",
        "change_pct": 1.55
      },
      {
        "name": "小米概念股",
        "change_pct": 2.24
      },
      {
        "name": "国产芯片",
        "change_pct": 2.07
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.49
      },
      {
        "name": "全息概念",
        "change_pct": 1.11
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.63
      },
      {
        "name": "MicroLED",
        "change_pct": 2.79
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.39
      },
      {
        "name": "智能手表",
        "change_pct": 2.23
      },
      {
        "name": "MiniLED",
        "change_pct": 2.81
      },
      {
        "name": "传感器",
        "change_pct": 1.89
      },
      {
        "name": "大硅片",
        "change_pct": 2.73
      },
      {
        "name": "AI PC",
        "change_pct": 2.96
      },
      {
        "name": "华为产业链",
        "change_pct": 1.48
      },
      {
        "name": "回购",
        "change_pct": 0.66
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 7.03
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.41
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 3.88
      }
    ]
  },
  {
    "code": "002124",
    "name": "天邦食品",
    "hot_rank": 57,
    "hot_rank_chg": -9,
    "stock_cnt": 5807,
    "price": "2.54",
    "change": "4.96",
    "market_id": "33",
    "circulate_market_value": "5009834100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 2.02
      },
      {
        "name": "养猪",
        "change_pct": 1.35
      },
      {
        "name": "社区团购",
        "change_pct": 2.53
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "预制菜",
        "change_pct": 2.91
      },
      {
        "name": "元宇宙",
        "change_pct": 0.58
      },
      {
        "name": "低价股",
        "change_pct": 0.57
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 68,
    "hot_rank_chg": 9,
    "stock_cnt": 5807,
    "price": "5.01",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "7832215000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 1.32
      },
      {
        "name": "共享经济",
        "change_pct": 0.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.73
      },
      {
        "name": "旅游",
        "change_pct": 2.68
      },
      {
        "name": "物业管理",
        "change_pct": -0.08
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 70,
    "hot_rank_chg": 130,
    "stock_cnt": 5807,
    "price": "6.35",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "7384080500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI影视",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 2.07
      },
      {
        "name": "新疆概念",
        "change_pct": 1.16
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.67
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.9
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.59
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "000798",
    "name": "中水渔业",
    "hot_rank": 73,
    "hot_rank_chg": -46,
    "stock_cnt": 5807,
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
        "change_pct": -0.01
      },
      {
        "name": "人工智能",
        "change_pct": 0.49
      },
      {
        "name": "社区团购",
        "change_pct": 2.53
      },
      {
        "name": "预制菜",
        "change_pct": 2.91
      },
      {
        "name": "国企改革",
        "change_pct": 0.36
      },
      {
        "name": "水产养殖",
        "change_pct": 5.01
      },
      {
        "name": "海洋经济",
        "change_pct": 0.62
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 77,
    "hot_rank_chg": -17,
    "stock_cnt": 5807,
    "price": "4.79",
    "change": "-0.42",
    "market_id": "33",
    "circulate_market_value": "28044477000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.23
      },
      {
        "name": "人工智能",
        "change_pct": 0.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.73
      },
      {
        "name": "水利",
        "change_pct": -0.03
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.77
      },
      {
        "name": "大数据",
        "change_pct": -0.17
      },
      {
        "name": "园林",
        "change_pct": 1.54
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 2.24
      },
      {
        "name": "数字经济",
        "change_pct": 0.14
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.9
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.63
      },
      {
        "name": "第三代半导体",
        "change_pct": 2.49
      },
      {
        "name": "快手概念股",
        "change_pct": 0.97
      },
      {
        "name": "IGBT",
        "change_pct": 2.28
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.61
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.67
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.99
      },
      {
        "name": "氮化镓",
        "change_pct": 2.33
      },
      {
        "name": "AI营销",
        "change_pct": 0.86
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.23
      },
      {
        "name": "多模态",
        "change_pct": 0.76
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.17
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.61
      },
      {
        "name": "区块链",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "002702",
    "name": "海欣食品",
    "hot_rank": 84,
    "hot_rank_chg": -60,
    "stock_cnt": 5807,
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
        "change_pct": 1.42
      },
      {
        "name": "预制菜",
        "change_pct": 2.91
      },
      {
        "name": "人造肉",
        "change_pct": 3.21
      },
      {
        "name": "地摊经济",
        "change_pct": 1.91
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 88,
    "hot_rank_chg": -5,
    "stock_cnt": 5807,
    "price": "12.02",
    "change": "0.67",
    "market_id": "17",
    "circulate_market_value": "4622262600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 0.24
      },
      {
        "name": "股权转让",
        "change_pct": 1.0
      },
      {
        "name": "强势人气股",
        "change_pct": 2.96
      },
      {
        "name": "新疆概念",
        "change_pct": 1.16
      },
      {
        "name": "医药",
        "change_pct": 0.49
      },
      {
        "name": "流感",
        "change_pct": 0.86
      },
      {
        "name": "国资入股",
        "change_pct": 0.67
      },
      {
        "name": "减肥药",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 93,
    "hot_rank_chg": 8,
    "stock_cnt": 5807,
    "price": "9.41",
    "change": "4.32",
    "market_id": "17",
    "circulate_market_value": "4510401000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.66
      },
      {
        "name": "强势人气股",
        "change_pct": 2.96
      },
      {
        "name": "医药商业",
        "change_pct": 1.02
      },
      {
        "name": "医药",
        "change_pct": 0.49
      },
      {
        "name": "流感",
        "change_pct": 0.86
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 94,
    "hot_rank_chg": -45,
    "stock_cnt": 5807,
    "price": "7.25",
    "change": "2.11",
    "market_id": "33",
    "circulate_market_value": "4673599700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.41
      },
      {
        "name": "强势人气股",
        "change_pct": 2.96
      },
      {
        "name": "装修装饰",
        "change_pct": 1.03
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.92
      },
      {
        "name": "家具家居",
        "change_pct": 0.79
      },
      {
        "name": "智能制造",
        "change_pct": 1.55
      },
      {
        "name": "3D打印",
        "change_pct": 2.59
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 0.99
      },
      {
        "name": "旧改",
        "change_pct": 0.43
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 95,
    "hot_rank_chg": -17,
    "stock_cnt": 5807,
    "price": "4.94",
    "change": "-3.52",
    "market_id": "17",
    "circulate_market_value": "6018955500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.62
      },
      {
        "name": "煤炭",
        "change_pct": -1.75
      },
      {
        "name": "有色金属",
        "change_pct": 0.92
      },
      {
        "name": "国企改革",
        "change_pct": 0.36
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 96,
    "hot_rank_chg": -43,
    "stock_cnt": 5807,
    "price": "8.99",
    "change": "-5.57",
    "market_id": "33",
    "circulate_market_value": "3962989300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 1.07
      },
      {
        "name": "锂电池",
        "change_pct": 1.36
      },
      {
        "name": "强势人气股",
        "change_pct": 2.96
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.36
      },
      {
        "name": "两轮车",
        "change_pct": 0.8
      },
      {
        "name": "珠宝饰品",
        "change_pct": -1.02
      }
    ]
  },
  {
    "code": "000428",
    "name": "华天酒店",
    "hot_rank": 100,
    "hot_rank_chg": -54,
    "stock_cnt": 5807,
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
        "change_pct": 1.35
      },
      {
        "name": "旅游",
        "change_pct": 2.68
      },
      {
        "name": "物业管理",
        "change_pct": -0.08
      },
      {
        "name": "预制菜",
        "change_pct": 2.91
      },
      {
        "name": "国企改革",
        "change_pct": 0.36
      },
      {
        "name": "餐饮",
        "change_pct": 2.21
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600127", "name": "金健米业", "hot_rank": 1, "hot_rank_chg": 4, "stock_cnt": 5807, "price": "13.53", "change": "10.00", "market_id": "17", "circulate_market_value": "8683326900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮油食品"}, {"code": "601086", "name": "国芳集团", "hot_rank": 2, "hot_rank_chg": 6, "stock_cnt": 5807, "price": "13.92", "change": "10.04", "market_id": "17", "circulate_market_value": "9270720000.00", "change_type": "1", "change_section": "7", "change_days": "6", "change_reason": "连锁零售"}, {"code": "000592", "name": "平潭发展", "hot_rank": 3, "hot_rank_chg": -2, "stock_cnt": 5807, "price": "7.87", "change": "5.07", "market_id": "33", "circulate_market_value": "15071778000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.46}, {"name": "林业", "change_pct": 2.52}, {"name": "碳中和", "change_pct": 0.08}, {"name": "自贸区", "change_pct": 0.4}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5807, "price": "22.95", "change": "8.66", "market_id": "33", "circulate_market_value": "10484713400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5807, "price": "17.11", "change": "10.03", "market_id": "17", "circulate_market_value": "7604444500.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "AI漫剧"}, {"code": "600664", "name": "哈药股份", "hot_rank": 6, "hot_rank_chg": 10, "stock_cnt": 5807, "price": "8.00", "change": "2.83", "market_id": "17", "circulate_market_value": "20148079000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.98}, {"name": "工业大麻", "change_pct": 1.11}, {"name": "中药", "change_pct": 0.66}, {"name": "强势人气股", "change_pct": 2.96}, {"name": "保健品", "change_pct": 0.22}, {"name": "民营医院", "change_pct": 1.24}, {"name": "医药", "change_pct": 0.49}, {"name": "化学原料药", "change_pct": 0.42}, {"name": "流感", "change_pct": 0.86}, {"name": "振兴东北", "change_pct": 0.28}, {"name": "食品", "change_pct": 1.42}]}, {"code": "600869", "name": "远东股份", "hot_rank": 7, "hot_rank_chg": 3, "stock_cnt": 5807, "price": "20.88", "change": "-1.51", "market_id": "17", "circulate_market_value": "46340085000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 8, "hot_rank_chg": 76, "stock_cnt": 5807, "price": "58.47", "change": "6.70", "market_id": "17", "circulate_market_value": "263292690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688795", "name": "摩尔线程", "hot_rank": 9, "hot_rank_chg": 1298, "stock_cnt": 5807, "price": "415.49", "change": "-20.00", "market_id": "17", "circulate_market_value": "23267440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 10, "hot_rank_chg": 160, "stock_cnt": 5807, "price": "207.21", "change": "10.00", "market_id": "17", "circulate_market_value": "57104667000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高速光模块"}, {"code": "600108", "name": "亚盛集团", "hot_rank": 11, "hot_rank_chg": -9, "stock_cnt": 5807, "price": "4.80", "change": "10.09", "market_id": "17", "circulate_market_value": "9345192600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "玉米制种", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.98}, {"name": "农业种植", "change_pct": 4.57}, {"name": "土地流转", "change_pct": 1.57}, {"name": "农垦", "change_pct": 3.99}, {"name": "乡村振兴", "change_pct": 2.2}, {"name": "食品", "change_pct": 1.42}, {"name": "甜味剂/代糖", "change_pct": 1.71}, {"name": "大农业", "change_pct": 1.6}, {"name": "蜜雪冰城概念股", "change_pct": 2.13}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 12, "hot_rank_chg": 10, "stock_cnt": 5807, "price": "74.74", "change": "-3.83", "market_id": "33", "circulate_market_value": "109637277000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 13, "hot_rank_chg": 62, "stock_cnt": 5807, "price": "17.96", "change": "4.30", "market_id": "17", "circulate_market_value": "37564098000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 14, "hot_rank_chg": 3, "stock_cnt": 5807, "price": "15.07", "change": "10.00", "market_id": "17", "circulate_market_value": "4409150500.00", "change_type": "1", "change_section": "15", "change_days": "9", "change_reason": "转基因玉米"}, {"code": "300308", "name": "中际旭创", "hot_rank": 15, "hot_rank_chg": 52, "stock_cnt": 5807, "price": "898.46", "change": "10.38", "market_id": "33", "circulate_market_value": "997234000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 16, "hot_rank_chg": -9, "stock_cnt": 5807, "price": "8.43", "change": "-0.24", "market_id": "33", "circulate_market_value": "13715558000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.98}, {"name": "电竞", "change_pct": 0.64}, {"name": "手游", "change_pct": 1.59}, {"name": "强势人气股", "change_pct": 2.96}, {"name": "人工智能", "change_pct": 0.49}, {"name": "游戏", "change_pct": 1.36}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.14}, {"name": "腾讯概念股", "change_pct": 0.9}, {"name": "快手概念股", "change_pct": 0.97}, {"name": "元宇宙", "change_pct": 0.58}, {"name": "虚拟数字人", "change_pct": 0.61}, {"name": "东数西算/算力", "change_pct": 0.74}, {"name": "web3.0", "change_pct": 0.12}, {"name": "AIGC概念", "change_pct": 0.67}, {"name": "数据要素", "change_pct": 0.0}, {"name": "字节跳动概念股", "change_pct": 0.99}, {"name": "AI营销", "change_pct": 0.86}, {"name": "ChatGPT", "change_pct": 0.27}, {"name": "智能眼镜/MR头显", "change_pct": 2.41}, {"name": "AI大模型/智能体", "change_pct": 0.23}, {"name": "人形机器人", "change_pct": 2.48}, {"name": "短剧/互动影游", "change_pct": 1.59}, {"name": "多模态", "change_pct": 0.76}, {"name": "AI视频", "change_pct": 0.37}, {"name": "IP经济/谷子经济", "change_pct": 1.3}, {"name": "小红书概念股", "change_pct": 0.61}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 17, "hot_rank_chg": 15, "stock_cnt": 5807, "price": "17.97", "change": "4.48", "market_id": "17", "circulate_market_value": "12225344600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 18, "hot_rank_chg": 123, "stock_cnt": 5807, "price": "15.51", "change": "10.00", "market_id": "33", "circulate_market_value": "9049127400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高阶HDI"}, {"code": "600865", "name": "百大集团", "hot_rank": 19, "hot_rank_chg": -8, "stock_cnt": 5807, "price": "12.49", "change": "10.04", "market_id": "17", "circulate_market_value": "4699241500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "商业零售", "xgb_concepts": [{"name": "物业管理", "change_pct": -0.08}, {"name": "免税店概念", "change_pct": 1.49}, {"name": "地摊经济", "change_pct": 1.91}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 20, "hot_rank_chg": -6, "stock_cnt": 5807, "price": "3.13", "change": "-0.64", "market_id": "33", "circulate_market_value": "7332613800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 2.33}, {"name": "强势人气股", "change_pct": 2.96}, {"name": "人工智能", "change_pct": 0.49}, {"name": "VR&AR", "change_pct": 1.94}, {"name": "京津冀", "change_pct": 0.31}, {"name": "装修装饰", "change_pct": 1.03}, {"name": "住房租赁", "change_pct": -0.33}, {"name": "破净股", "change_pct": -0.17}, {"name": "数字经济", "change_pct": 0.14}, {"name": "房产经纪", "change_pct": -0.36}, {"name": "物业管理", "change_pct": -0.08}, {"name": "华为产业链", "change_pct": 1.48}, {"name": "AI大模型/智能体", "change_pct": 0.23}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 21, "hot_rank_chg": 22, "stock_cnt": 5807, "price": "536.35", "change": "1.14", "market_id": "17", "circulate_market_value": "16137549000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 22, "hot_rank_chg": 1, "stock_cnt": 5807, "price": "9.53", "change": "10.05", "market_id": "17", "circulate_market_value": "5029953800.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "中报增长", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.57}, {"name": "棉花", "change_pct": 3.64}, {"name": "大农业", "change_pct": 1.6}, {"name": "供销社", "change_pct": 1.8}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 23, "hot_rank_chg": 5, "stock_cnt": 5807, "price": "15.89", "change": "0.63", "market_id": "17", "circulate_market_value": "20407187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 24, "hot_rank_chg": 212, "stock_cnt": 5807, "price": "17.89", "change": "10.03", "market_id": "17", "circulate_market_value": "14084375000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "800G交换机"}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 25, "hot_rank_chg": -12, "stock_cnt": 5807, "price": "5.86", "change": "4.83", "market_id": "33", "circulate_market_value": "4165281000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.49}, {"name": "影视", "change_pct": 2.07}, {"name": "旅游", "change_pct": 2.68}, {"name": "虚拟数字人", "change_pct": 0.61}, {"name": "AI营销", "change_pct": 0.86}, {"name": "AI大模型/智能体", "change_pct": 0.23}, {"name": "短剧/互动影游", "change_pct": 1.59}, {"name": "IP经济/谷子经济", "change_pct": 1.3}]}, {"code": "002909", "name": "集泰股份", "hot_rank": 26, "hot_rank_chg": 11, "stock_cnt": 5807, "price": "7.93", "change": "9.99", "market_id": "33", "circulate_market_value": "3016789100.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "液冷硅油", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.41}, {"name": "强势人气股", "change_pct": 2.96}, {"name": "有机硅", "change_pct": 0.67}, {"name": "装修装饰", "change_pct": 1.03}, {"name": "装配式建筑", "change_pct": 0.92}, {"name": "光伏", "change_pct": 1.38}, {"name": "船舶", "change_pct": -0.67}, {"name": "固态电池", "change_pct": 1.16}, {"name": "新型城镇化", "change_pct": 0.99}, {"name": "旧改", "change_pct": 0.43}, {"name": "飞行汽车/eVTOL", "change_pct": 1.18}, {"name": "液冷服务器", "change_pct": 2.17}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 27, "hot_rank_chg": 17, "stock_cnt": 5807, "price": "64.00", "change": "2.86", "market_id": "17", "circulate_market_value": "157033360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 28, "hot_rank_chg": 35, "stock_cnt": 5807, "price": "11.49", "change": "5.12", "market_id": "17", "circulate_market_value": "9984267500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.98}, {"name": "快递物流", "change_pct": 0.85}, {"name": "新零售", "change_pct": 2.33}, {"name": "福建自贸/海西概念", "change_pct": 0.46}, {"name": "旅游", "change_pct": 2.68}, {"name": "阿里巴巴概念股", "change_pct": 0.67}, {"name": "物业管理", "change_pct": -0.08}, {"name": "免税店概念", "change_pct": 1.49}, {"name": "自贸区", "change_pct": 0.4}]}, {"code": "603123", "name": "翠微股份", "hot_rank": 29, "hot_rank_chg": -17, "stock_cnt": 5807, "price": "11.76", "change": "5.19", "market_id": "17", "circulate_market_value": "7670765200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.21}, {"name": "蚂蚁集团概念股", "change_pct": -0.22}, {"name": "无人驾驶", "change_pct": 1.32}, {"name": "新零售", "change_pct": 2.33}, {"name": "移动支付", "change_pct": -0.35}, {"name": "京津冀", "change_pct": 0.31}, {"name": "北京城市规划", "change_pct": 1.08}, {"name": "国产芯片", "change_pct": 2.07}, {"name": "阿里巴巴概念股", "change_pct": 0.67}, {"name": "腾讯概念股", "change_pct": 0.9}, {"name": "物业管理", "change_pct": -0.08}, {"name": "字节跳动概念股", "change_pct": 0.99}, {"name": "国企改革", "change_pct": 0.36}, {"name": "数字人民币", "change_pct": -1.27}, {"name": "AI大模型/智能体", "change_pct": 0.23}]}, {"code": "601118", "name": "海南橡胶", "hot_rank": 30, "hot_rank_chg": 1, "stock_cnt": 5807, "price": "7.20", "change": "2.42", "market_id": "17", "circulate_market_value": "30811880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.57}, {"name": "橡胶", "change_pct": 2.51}, {"name": "土地流转", "change_pct": 1.57}, {"name": "农垦", "change_pct": 3.99}, {"name": "海南概念", "change_pct": 1.4}, {"name": "自由贸易港", "change_pct": 0.57}, {"name": "海南自由贸易港", "change_pct": 1.24}, {"name": "大农业", "change_pct": 1.6}, {"name": "可降解塑料", "change_pct": 0.35}, {"name": "大消费", "change_pct": 0.36}, {"name": "免税店概念", "change_pct": 1.49}, {"name": "自贸区", "change_pct": 0.4}]}, {"code": "300189", "name": "神农种业", "hot_rank": 31, "hot_rank_chg": 93, "stock_cnt": 5807, "price": "7.72", "change": "9.50", "market_id": "33", "circulate_market_value": "6841853300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.57}, {"name": "土地流转", "change_pct": 1.57}, {"name": "海南概念", "change_pct": 1.4}, {"name": "自由贸易港", "change_pct": 0.57}, {"name": "海南自由贸易港", "change_pct": 1.24}, {"name": "大农业", "change_pct": 1.6}, {"name": "水产养殖", "change_pct": 5.01}, {"name": "自贸区", "change_pct": 0.4}]}, {"code": "603228", "name": "景旺电子", "hot_rank": 32, "hot_rank_chg": 57, "stock_cnt": 5807, "price": "105.97", "change": "10.00", "market_id": "17", "circulate_market_value": "104063668000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力PCB"}, {"code": "601138", "name": "工业富联", "hot_rank": 33, "hot_rank_chg": 53, "stock_cnt": 5807, "price": "66.57", "change": "4.52", "market_id": "17", "circulate_market_value": "1321021220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 34, "hot_rank_chg": 95, "stock_cnt": 5807, "price": "4.51", "change": "5.13", "market_id": "17", "circulate_market_value": "5761975100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.57}, {"name": "化肥", "change_pct": 0.47}, {"name": "保健品", "change_pct": 0.22}, {"name": "民营医院", "change_pct": 1.24}, {"name": "医药", "change_pct": 0.49}, {"name": "煤化工", "change_pct": -0.88}, {"name": "食品", "change_pct": 1.42}, {"name": "大农业", "change_pct": 1.6}, {"name": "干细胞", "change_pct": 0.65}, {"name": "阿尔茨海默病", "change_pct": -0.18}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 35, "hot_rank_chg": 102, "stock_cnt": 5807, "price": "3.91", "change": "10.14", "market_id": "17", "circulate_market_value": "8650206600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块", "xgb_concepts": [{"name": "造纸", "change_pct": 1.2}, {"name": "强势人气股", "change_pct": 2.96}, {"name": "云计算数据中心", "change_pct": 1.73}, {"name": "光通信", "change_pct": 5.73}, {"name": "林业", "change_pct": 2.52}, {"name": "军民融合", "change_pct": 0.65}, {"name": "军工", "change_pct": 0.36}, {"name": "人造肉", "change_pct": 3.21}]}, {"code": "000735", "name": "罗牛山", "hot_rank": 36, "hot_rank_chg": -21, "stock_cnt": 5807, "price": "6.74", "change": "9.95", "market_id": "33", "circulate_market_value": "7757049300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "生猪养殖", "xgb_concepts": [{"name": "养鸡", "change_pct": 1.57}, {"name": "养猪", "change_pct": 1.35}, {"name": "农垦", "change_pct": 3.99}, {"name": "冷链", "change_pct": 1.22}, {"name": "大数据", "change_pct": -0.17}, {"name": "教育", "change_pct": 1.01}, {"name": "海南概念", "change_pct": 1.4}, {"name": "自由贸易港", "change_pct": 0.57}, {"name": "海南自由贸易港", "change_pct": 1.24}, {"name": "赛马", "change_pct": 3.88}, {"name": "大农业", "change_pct": 1.6}, {"name": "职业教育", "change_pct": 1.1}, {"name": "自贸区", "change_pct": 0.4}]}, {"code": "600330", "name": "天通股份", "hot_rank": 37, "hot_rank_chg": 317, "stock_cnt": 5807, "price": "28.89", "change": "10.02", "market_id": "17", "circulate_market_value": "35633920000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "铌酸锂"}, {"code": "603986", "name": "兆易创新", "hot_rank": 38, "hot_rank_chg": 59, "stock_cnt": 5807, "price": "385.44", "change": "3.65", "market_id": "17", "circulate_market_value": "258521670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 39, "hot_rank_chg": 226, "stock_cnt": 5807, "price": "58.04", "change": "10.01", "market_id": "17", "circulate_market_value": "24165982000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻胶"}, {"code": "600183", "name": "生益科技", "hot_rank": 40, "hot_rank_chg": 74, "stock_cnt": 5807, "price": "148.15", "change": "7.75", "market_id": "17", "circulate_market_value": "357300590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 41, "hot_rank_chg": 221, "stock_cnt": 5807, "price": "7.00", "change": "10.06", "market_id": "33", "circulate_market_value": "4589942200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.98}, {"name": "新零售", "change_pct": 2.33}, {"name": "农业种植", "change_pct": 4.57}, {"name": "冷链", "change_pct": 1.22}, {"name": "大农业", "change_pct": 1.6}, {"name": "预制菜", "change_pct": 2.91}, {"name": "国企改革", "change_pct": 0.36}, {"name": "可降解塑料", "change_pct": 0.35}, {"name": "免税店概念", "change_pct": 1.49}, {"name": "湖北国企改革", "change_pct": 1.52}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 42, "hot_rank_chg": -16, "stock_cnt": 5807, "price": "5.33", "change": "2.90", "market_id": "33", "circulate_market_value": "14138095000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.96}, {"name": "装修装饰", "change_pct": 1.03}, {"name": "装配式建筑", "change_pct": 0.92}, {"name": "航天", "change_pct": 0.74}, {"name": "旧改", "change_pct": 0.43}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 43, "hot_rank_chg": 8, "stock_cnt": 5807, "price": "36.96", "change": "1.37", "market_id": "17", "circulate_market_value": "25553243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 44, "hot_rank_chg": -6, "stock_cnt": 5807, "price": "27.43", "change": "-4.36", "market_id": "17", "circulate_market_value": "10999430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 45, "hot_rank_chg": -27, "stock_cnt": 5807, "price": "13.53", "change": "-3.70", "market_id": "33", "circulate_market_value": "8221120900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 46, "hot_rank_chg": 94, "stock_cnt": 5807, "price": "190.55", "change": "6.65", "market_id": "33", "circulate_market_value": "264163600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 47, "hot_rank_chg": 23, "stock_cnt": 5807, "price": "35.37", "change": "0.28", "market_id": "33", "circulate_market_value": "101160770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 48, "hot_rank_chg": 28, "stock_cnt": 5807, "price": "41.70", "change": "3.78", "market_id": "17", "circulate_market_value": "165615180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002059", "name": "云南旅游", "hot_rank": 49, "hot_rank_chg": 9, "stock_cnt": 5807, "price": "6.07", "change": "7.05", "market_id": "33", "circulate_market_value": "6011687000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.01}, {"name": "旅游", "change_pct": 2.68}, {"name": "虚拟数字人", "change_pct": 0.61}, {"name": "国企改革", "change_pct": 0.36}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 50, "hot_rank_chg": 4, "stock_cnt": 5807, "price": "12.55", "change": "5.64", "market_id": "17", "circulate_market_value": "22453686000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.43}, {"name": "纯碱", "change_pct": -0.61}, {"name": "食品", "change_pct": 1.42}, {"name": "土壤修复", "change_pct": 0.45}, {"name": "东数西算/算力", "change_pct": 0.74}, {"name": "OpenClaw概念", "change_pct": 1.17}, {"name": "DeepSeek概念股", "change_pct": 0.37}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 51, "hot_rank_chg": 258, "stock_cnt": 5807, "price": "36.75", "change": "10.00", "market_id": "33", "circulate_market_value": "55783874000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "000725", "name": "京东方A", "hot_rank": 52, "hot_rank_chg": -23, "stock_cnt": 5807, "price": "5.68", "change": "1.25", "market_id": "33", "circulate_market_value": "200885320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 3.4}, {"name": "手机产业链", "change_pct": 2.87}, {"name": "超高清视频", "change_pct": 0.71}, {"name": "苹果产业链", "change_pct": 3.68}, {"name": "电竞", "change_pct": 0.64}, {"name": "半导体", "change_pct": 3.0}, {"name": "人工智能", "change_pct": 0.49}, {"name": "互联网医疗", "change_pct": -0.01}, {"name": "VR&AR", "change_pct": 1.94}, {"name": "OLED", "change_pct": 2.88}, {"name": "京津冀", "change_pct": 0.31}, {"name": "物联网", "change_pct": 0.89}, {"name": "指纹识别", "change_pct": 2.36}, {"name": "汽车零部件", "change_pct": 1.28}, {"name": "白马股", "change_pct": -0.27}, {"name": "智能制造", "change_pct": 1.55}, {"name": "小米概念股", "change_pct": 2.24}, {"name": "国产芯片", "change_pct": 2.07}, {"name": "液晶面板/LCD", "change_pct": 2.49}, {"name": "全息概念", "change_pct": 1.11}, {"name": "理想汽车概念股", "change_pct": 0.63}, {"name": "MicroLED", "change_pct": 2.79}, {"name": "钙钛矿电池", "change_pct": 1.39}, {"name": "智能手表", "change_pct": 2.23}, {"name": "MiniLED", "change_pct": 2.81}, {"name": "传感器", "change_pct": 1.89}, {"name": "大硅片", "change_pct": 2.73}, {"name": "AI PC", "change_pct": 2.96}, {"name": "华为产业链", "change_pct": 1.48}, {"name": "回购", "change_pct": 0.66}, {"name": "光电共封装CPO", "change_pct": 7.03}, {"name": "智能眼镜/MR头显", "change_pct": 2.41}, {"name": "玻璃基板封装", "change_pct": 3.88}]}, {"code": "600584", "name": "长电科技", "hot_rank": 53, "hot_rank_chg": 28, "stock_cnt": 5807, "price": "69.00", "change": "2.44", "market_id": "17", "circulate_market_value": "123469605000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 54, "hot_rank_chg": 38, "stock_cnt": 5807, "price": "50.45", "change": "4.21", "market_id": "33", "circulate_market_value": "57890869000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600150", "name": "中国船舶", "hot_rank": 55, "hot_rank_chg": -46, "stock_cnt": 5807, "price": "38.38", "change": "2.43", "market_id": "17", "circulate_market_value": "288833350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 56, "hot_rank_chg": 161, "stock_cnt": 5807, "price": "122.65", "change": "10.00", "market_id": "33", "circulate_market_value": "235837770000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力PCB"}, {"code": "002124", "name": "天邦食品", "hot_rank": 57, "hot_rank_chg": -9, "stock_cnt": 5807, "price": "2.54", "change": "4.96", "market_id": "33", "circulate_market_value": "5009834100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 2.02}, {"name": "养猪", "change_pct": 1.35}, {"name": "社区团购", "change_pct": 2.53}, {"name": "大农业", "change_pct": 1.6}, {"name": "预制菜", "change_pct": 2.91}, {"name": "元宇宙", "change_pct": 0.58}, {"name": "低价股", "change_pct": 0.57}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 58, "hot_rank_chg": -6, "stock_cnt": 5807, "price": "14.24", "change": "1.93", "market_id": "33", "circulate_market_value": "49525727000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600737", "name": "中粮糖业", "hot_rank": 60, "hot_rank_chg": -18, "stock_cnt": 5807, "price": "16.51", "change": "5.77", "market_id": "17", "circulate_market_value": "35312384000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 62, "hot_rank_chg": 139, "stock_cnt": 5807, "price": "417.20", "change": "8.08", "market_id": "33", "circulate_market_value": "523270240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 63, "hot_rank_chg": 56, "stock_cnt": 5807, "price": "46.65", "change": "3.16", "market_id": "17", "circulate_market_value": "39491713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603162", "name": "海通发展", "hot_rank": 64, "hot_rank_chg": -58, "stock_cnt": 5807, "price": "14.13", "change": "-3.48", "market_id": "17", "circulate_market_value": "5969023100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 65, "hot_rank_chg": 77, "stock_cnt": 5807, "price": "16.08", "change": "3.28", "market_id": "33", "circulate_market_value": "53482507000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 66, "hot_rank_chg": -19, "stock_cnt": 5807, "price": "22.10", "change": "4.00", "market_id": "33", "circulate_market_value": "22579569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 67, "hot_rank_chg": 28, "stock_cnt": 5807, "price": "33.30", "change": "1.52", "market_id": "33", "circulate_market_value": "35994579000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 68, "hot_rank_chg": 9, "stock_cnt": 5807, "price": "5.01", "change": "0.00", "market_id": "17", "circulate_market_value": "7832215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 1.32}, {"name": "共享经济", "change_pct": 0.49}, {"name": "云计算数据中心", "change_pct": 1.73}, {"name": "旅游", "change_pct": 2.68}, {"name": "物业管理", "change_pct": -0.08}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 69, "hot_rank_chg": 76, "stock_cnt": 5807, "price": "92.00", "change": "5.64", "market_id": "33", "circulate_market_value": "60076690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 70, "hot_rank_chg": 130, "stock_cnt": 5807, "price": "6.35", "change": "10.05", "market_id": "33", "circulate_market_value": "7384080500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI影视", "xgb_concepts": [{"name": "影视", "change_pct": 2.07}, {"name": "新疆概念", "change_pct": 1.16}, {"name": "阿里巴巴概念股", "change_pct": 0.67}, {"name": "腾讯概念股", "change_pct": 0.9}, {"name": "短剧/互动影游", "change_pct": 1.59}, {"name": "IP经济/谷子经济", "change_pct": 1.3}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 71, "hot_rank_chg": 40, "stock_cnt": 5807, "price": "21.10", "change": "3.53", "market_id": "33", "circulate_market_value": "24823492000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 72, "hot_rank_chg": 2, "stock_cnt": 5807, "price": "38.14", "change": "3.05", "market_id": "33", "circulate_market_value": "28887812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000798", "name": "中水渔业", "hot_rank": 73, "hot_rank_chg": -46, "stock_cnt": 5807, "price": "11.15", "change": "9.96", "market_id": "33", "circulate_market_value": "4079073800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "远洋渔业", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.01}, {"name": "人工智能", "change_pct": 0.49}, {"name": "社区团购", "change_pct": 2.53}, {"name": "预制菜", "change_pct": 2.91}, {"name": "国企改革", "change_pct": 0.36}, {"name": "水产养殖", "change_pct": 5.01}, {"name": "海洋经济", "change_pct": 0.62}]}, {"code": "002703", "name": "浙江世宝", "hot_rank": 74, "hot_rank_chg": 41, "stock_cnt": 5807, "price": "16.86", "change": "-1.46", "market_id": "33", "circulate_market_value": "9880770500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301171", "name": "易点天下", "hot_rank": 75, "hot_rank_chg": -6, "stock_cnt": 5807, "price": "40.30", "change": "5.28", "market_id": "33", "circulate_market_value": "20225952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 76, "hot_rank_chg": 87, "stock_cnt": 5807, "price": "13.97", "change": "6.72", "market_id": "17", "circulate_market_value": "58258997000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 77, "hot_rank_chg": -17, "stock_cnt": 5807, "price": "4.79", "change": "-0.42", "market_id": "33", "circulate_market_value": "28044477000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.23}, {"name": "人工智能", "change_pct": 0.49}, {"name": "云计算数据中心", "change_pct": 1.73}, {"name": "水利", "change_pct": -0.03}, {"name": "直播/短视频", "change_pct": 0.77}, {"name": "大数据", "change_pct": -0.17}, {"name": "园林", "change_pct": 1.54}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 2.24}, {"name": "数字经济", "change_pct": 0.14}, {"name": "腾讯概念股", "change_pct": 0.9}, {"name": "理想汽车概念股", "change_pct": 0.63}, {"name": "第三代半导体", "change_pct": 2.49}, {"name": "快手概念股", "change_pct": 0.97}, {"name": "IGBT", "change_pct": 2.28}, {"name": "虚拟数字人", "change_pct": 0.61}, {"name": "AIGC概念", "change_pct": 0.67}, {"name": "字节跳动概念股", "change_pct": 0.99}, {"name": "氮化镓", "change_pct": 2.33}, {"name": "AI营销", "change_pct": 0.86}, {"name": "AI大模型/智能体", "change_pct": 0.23}, {"name": "多模态", "change_pct": 0.76}, {"name": "液冷服务器", "change_pct": 2.17}, {"name": "小红书概念股", "change_pct": 0.61}, {"name": "区块链", "change_pct": -0.27}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 78, "hot_rank_chg": -33, "stock_cnt": 5807, "price": "14.00", "change": "-2.23", "market_id": "33", "circulate_market_value": "9241470800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 79, "hot_rank_chg": 0, "stock_cnt": 5807, "price": "64.47", "change": "0.88", "market_id": "33", "circulate_market_value": "73059989000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 80, "hot_rank_chg": 43, "stock_cnt": 5807, "price": "111.38", "change": "2.80", "market_id": "17", "circulate_market_value": "40177372000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 81, "hot_rank_chg": 45, "stock_cnt": 5807, "price": "32.72", "change": "3.22", "market_id": "17", "circulate_market_value": "111671713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 82, "hot_rank_chg": 218, "stock_cnt": 5807, "price": "184.47", "change": "10.00", "market_id": "33", "circulate_market_value": "144998910000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "拟发H股"}, {"code": "002702", "name": "海欣食品", "hot_rank": 84, "hot_rank_chg": -60, "stock_cnt": 5807, "price": "6.17", "change": "9.98", "market_id": "33", "circulate_market_value": "2830448900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "速冻食品", "xgb_concepts": [{"name": "食品", "change_pct": 1.42}, {"name": "预制菜", "change_pct": 2.91}, {"name": "人造肉", "change_pct": 3.21}, {"name": "地摊经济", "change_pct": 1.91}]}, {"code": "002855", "name": "捷荣技术", "hot_rank": 85, "hot_rank_chg": -12, "stock_cnt": 5807, "price": "19.15", "change": "6.68", "market_id": "33", "circulate_market_value": "4715251500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 86, "hot_rank_chg": -36, "stock_cnt": 5807, "price": "22.48", "change": "-0.79", "market_id": "33", "circulate_market_value": "10168576200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603448", "name": "天博智能", "hot_rank": 87, "hot_rank_chg": 427, "stock_cnt": 5807, "price": "83.48", "change": "33.25", "market_id": "17", "circulate_market_value": "1963185600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 88, "hot_rank_chg": -5, "stock_cnt": 5807, "price": "12.02", "change": "0.67", "market_id": "17", "circulate_market_value": "4622262600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 0.24}, {"name": "股权转让", "change_pct": 1.0}, {"name": "强势人气股", "change_pct": 2.96}, {"name": "新疆概念", "change_pct": 1.16}, {"name": "医药", "change_pct": 0.49}, {"name": "流感", "change_pct": 0.86}, {"name": "国资入股", "change_pct": 0.67}, {"name": "减肥药", "change_pct": 1.02}]}, {"code": "603696", "name": "安记食品", "hot_rank": 89, "hot_rank_chg": -34, "stock_cnt": 5807, "price": "16.64", "change": "9.98", "market_id": "17", "circulate_market_value": "3913728000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "调味品"}, {"code": "002156", "name": "通富微电", "hot_rank": 90, "hot_rank_chg": 72, "stock_cnt": 5807, "price": "59.15", "change": "4.01", "market_id": "33", "circulate_market_value": "89757299000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 91, "hot_rank_chg": 183, "stock_cnt": 5807, "price": "93.77", "change": "6.96", "market_id": "33", "circulate_market_value": "89712563000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 92, "hot_rank_chg": 64, "stock_cnt": 5807, "price": "403.98", "change": "3.24", "market_id": "33", "circulate_market_value": "66747052000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 93, "hot_rank_chg": 8, "stock_cnt": 5807, "price": "9.41", "change": "4.32", "market_id": "17", "circulate_market_value": "4510401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.66}, {"name": "强势人气股", "change_pct": 2.96}, {"name": "医药商业", "change_pct": 1.02}, {"name": "医药", "change_pct": 0.49}, {"name": "流感", "change_pct": 0.86}]}, {"code": "002084", "name": "海鸥住工", "hot_rank": 94, "hot_rank_chg": -45, "stock_cnt": 5807, "price": "7.25", "change": "2.11", "market_id": "33", "circulate_market_value": "4673599700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.41}, {"name": "强势人气股", "change_pct": 2.96}, {"name": "装修装饰", "change_pct": 1.03}, {"name": "装配式建筑", "change_pct": 0.92}, {"name": "家具家居", "change_pct": 0.79}, {"name": "智能制造", "change_pct": 1.55}, {"name": "3D打印", "change_pct": 2.59}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.99}, {"name": "旧改", "change_pct": 0.43}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 95, "hot_rank_chg": -17, "stock_cnt": 5807, "price": "4.94", "change": "-3.52", "market_id": "17", "circulate_market_value": "6018955500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.62}, {"name": "煤炭", "change_pct": -1.75}, {"name": "有色金属", "change_pct": 0.92}, {"name": "国企改革", "change_pct": 0.36}, {"name": "河南国企改革", "change_pct": -0.72}]}, {"code": "000017", "name": "深中华A", "hot_rank": 96, "hot_rank_chg": -43, "stock_cnt": 5807, "price": "8.99", "change": "-5.57", "market_id": "33", "circulate_market_value": "3962989300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 1.07}, {"name": "锂电池", "change_pct": 1.36}, {"name": "强势人气股", "change_pct": 2.96}, {"name": "新能源汽车", "change_pct": 1.36}, {"name": "两轮车", "change_pct": 0.8}, {"name": "珠宝饰品", "change_pct": -1.02}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 97, "hot_rank_chg": 83, "stock_cnt": 5807, "price": "400.51", "change": "5.73", "market_id": "17", "circulate_market_value": "162742560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 98, "hot_rank_chg": -73, "stock_cnt": 5807, "price": "32.87", "change": "-1.44", "market_id": "17", "circulate_market_value": "677180940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003005", "name": "竞业达", "hot_rank": 99, "hot_rank_chg": -34, "stock_cnt": 5807, "price": "19.18", "change": "3.79", "market_id": "33", "circulate_market_value": "2573853900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000428", "name": "华天酒店", "hot_rank": 100, "hot_rank_chg": -54, "stock_cnt": 5807, "price": "5.16", "change": "10.02", "market_id": "33", "circulate_market_value": "5257658200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "酒店主业", "xgb_concepts": [{"name": "湖南国企改革", "change_pct": 1.35}, {"name": "旅游", "change_pct": 2.68}, {"name": "物业管理", "change_pct": -0.08}, {"name": "预制菜", "change_pct": 2.91}, {"name": "国企改革", "change_pct": 0.36}, {"name": "餐饮", "change_pct": 2.21}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};