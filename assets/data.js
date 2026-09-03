const UPDATE_TIME = "2026-09-03 02:38";
const THS_HOT = [
  {
    "name": "液冷服务器",
    "rise": 0.61,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "AI应用",
    "rise": -0.12,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续42天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": -0.39,
    "rate": 0,
    "tag": "",
    "hotTag": "连续114天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI视频",
    "rise": 0.85,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.09,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续284天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "军工",
    "rise": -0.34,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "兵装重组概念",
    "rise": -2.68,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "MLOps概念",
    "rise": 0.76,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886040"
  },
  {
    "name": "PCB概念",
    "rise": -0.34,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "粮食概念",
    "rise": -1.31,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": -1,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "存储芯片",
    "rise": -0.45,
    "rate": 0,
    "tag": "",
    "hotTag": "连续237天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "培育钻石",
    "rise": 0.89,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "黄金概念",
    "rise": 1.12,
    "rate": 0,
    "tag": "",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "光纤概念",
    "rise": -0.4,
    "rate": 0,
    "tag": "",
    "hotTag": "连续113天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "算力租赁",
    "rise": -0.26,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续148天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": 0.33,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": 0.23,
    "rate": 0,
    "tag": "",
    "hotTag": "连续24天上榜",
    "rankChg": -1,
    "etfName": "科创配置LOF",
    "code": "886112"
  },
  {
    "name": "数字货币",
    "rise": -0.36,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "AIGC概念",
    "rise": -0.06,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "人工智能ETF",
    "code": "886019"
  },
  {
    "name": "商业航天",
    "rise": -0.32,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续213天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  }
];
const THS_EVENTS = [
  {
    "title": "950亿美元服务器积压订单背后 液冷从故事变成生意",
    "desc": "",
    "heat": 205231,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "思泉新材",
        "code": "301489",
        "chg": 18.179487
      }
    ]
  },
  {
    "title": "马斯克：未来十年人形机器人将达10亿台",
    "desc": "",
    "heat": 173736,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "减速器"
    ],
    "stocks": [
      {
        "name": "思泉新材",
        "code": "301489",
        "chg": 18.179487
      }
    ]
  },
  {
    "title": "Snowflake二季度营收15.5亿美元，分析师预期14.9亿美元",
    "desc": "",
    "heat": 146318,
    "direction": "AI编码",
    "themes": [
      "AI编码",
      "AI编程"
    ],
    "stocks": [
      {
        "name": "金现代",
        "code": "300830",
        "chg": 19.976219
      }
    ]
  },
  {
    "title": "厄尔尼诺致供水紧张，印尼最大镍工业园或减产至多四成",
    "desc": "",
    "heat": 133414,
    "direction": "镍",
    "themes": [
      "金属镍"
    ],
    "stocks": [
      {
        "name": "白银有色",
        "code": "601212",
        "chg": 7.657658
      }
    ]
  },
  {
    "title": "芒果超媒落地首部上星AIGC长剧 《后西游记》打开新空间",
    "desc": "",
    "heat": 109810,
    "direction": "AI视频",
    "themes": [
      "AI漫剧",
      "AI视频"
    ],
    "stocks": [
      {
        "name": "博纳影业",
        "code": "001330",
        "chg": 10.069444
      }
    ]
  },
  {
    "title": "国家能源局： 加快输电通道等重大电网工程核准建设",
    "desc": "",
    "heat": 40020,
    "direction": "电力电网",
    "themes": [
      "电力",
      "电网设备",
      "柔性直流输电",
      "特高压",
      "智能电网"
    ],
    "stocks": [
      {
        "name": "金现代",
        "code": "300830",
        "chg": 19.976219
      }
    ]
  },
  {
    "title": "全球首个多模态世界模型发布",
    "desc": "",
    "heat": 26371,
    "direction": "多模态",
    "themes": [
      "多模态",
      "多模态AI"
    ],
    "stocks": [
      {
        "name": "金现代",
        "code": "300830",
        "chg": 19.976219
      }
    ]
  },
  {
    "title": "智谱入驻天猫，开网店卖Token",
    "desc": "",
    "heat": 22985,
    "direction": "词元概念（Token）",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "金禄电子",
        "code": "301282",
        "chg": 12.807746
      }
    ]
  },
  {
    "title": "月之暗面向港交所秘密交表，正式启动IPO",
    "desc": "",
    "heat": 8221,
    "direction": "Kimi",
    "themes": [
      "Kimi"
    ],
    "stocks": [
      {
        "name": "返利科技",
        "code": "600228",
        "chg": 8.102564
      }
    ]
  },
  {
    "title": "我国科研团队破解量子随机存取存储器扩展难题",
    "desc": "",
    "heat": 2468,
    "direction": "量子科技",
    "themes": [
      "量子科技"
    ],
    "stocks": [
      {
        "name": "腾景科技",
        "code": "688195",
        "chg": 7.682796
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "航运",
    "change": "+3.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+3.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+3.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+2.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+2.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+2.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+1.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "培育钻石",
    "change": "+1.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "回购增持再贷款",
    "change": "+1.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+1.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "江苏自贸区",
    "change": "+1.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "券商",
    "change": "+1.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减速器",
    "change": "+1.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+1.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+1.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+1.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机场",
    "change": "+1.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+1.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "RCEP概念",
    "change": "+1.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "轮边电机",
    "change": "+1.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 4,
    "hot_rank_chg": 11,
    "stock_cnt": 5856,
    "price": "12.21",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "8131860000.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "连锁零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 5,
    "hot_rank_chg": -1,
    "stock_cnt": 5856,
    "price": "12.11",
    "change": "-2.34",
    "market_id": "17",
    "circulate_market_value": "7771994800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.19
      },
      {
        "name": "农业种植",
        "change_pct": -1.15
      },
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.86
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.61
      },
      {
        "name": "休闲食品",
        "change_pct": -0.69
      },
      {
        "name": "食品",
        "change_pct": -0.48
      },
      {
        "name": "食品安全",
        "change_pct": -0.17
      },
      {
        "name": "社区团购",
        "change_pct": -1.03
      },
      {
        "name": "大农业",
        "change_pct": -0.73
      },
      {
        "name": "预制菜",
        "change_pct": -0.63
      },
      {
        "name": "人造肉",
        "change_pct": -0.99
      },
      {
        "name": "国企改革",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": 5,
    "stock_cnt": 5856,
    "price": "8.44",
    "change": "-8.66",
    "market_id": "17",
    "circulate_market_value": "21256223000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.0
      },
      {
        "name": "工业大麻",
        "change_pct": -0.14
      },
      {
        "name": "中药",
        "change_pct": -0.66
      },
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "保健品",
        "change_pct": -0.6
      },
      {
        "name": "民营医院",
        "change_pct": -0.57
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "化学原料药",
        "change_pct": -0.43
      },
      {
        "name": "流感",
        "change_pct": -0.3
      },
      {
        "name": "振兴东北",
        "change_pct": -0.05
      },
      {
        "name": "食品",
        "change_pct": -0.48
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 14,
    "hot_rank_chg": 43,
    "stock_cnt": 5856,
    "price": "5.72",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "4065769200.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "AIGC影视",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -0.12
      },
      {
        "name": "影视",
        "change_pct": 1.5
      },
      {
        "name": "旅游",
        "change_pct": -0.21
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.21
      },
      {
        "name": "AI营销",
        "change_pct": 0.4
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.07
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.72
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 15,
    "hot_rank_chg": 6,
    "stock_cnt": 5856,
    "price": "9.29",
    "change": "-7.47",
    "market_id": "17",
    "circulate_market_value": "4452882600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.66
      },
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "医药商业",
        "change_pct": -0.49
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "流感",
        "change_pct": -0.3
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 16,
    "hot_rank_chg": 17,
    "stock_cnt": 5856,
    "price": "10.58",
    "change": "-9.96",
    "market_id": "33",
    "circulate_market_value": "4663896200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -0.33
      },
      {
        "name": "锂电池",
        "change_pct": 0.21
      },
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.12
      },
      {
        "name": "两轮车",
        "change_pct": -0.19
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.02
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 22,
    "hot_rank_chg": 30,
    "stock_cnt": 5856,
    "price": "10.80",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "3072401400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -0.33
      },
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "教育",
        "change_pct": 0.05
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.2
      },
      {
        "name": "职业教育",
        "change_pct": -0.09
      },
      {
        "name": "在线教育",
        "change_pct": -0.6
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.3
      },
      {
        "name": "华为产业链",
        "change_pct": -0.07
      },
      {
        "name": "智谱AI",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 23,
    "hot_rank_chg": -3,
    "stock_cnt": 5856,
    "price": "5.55",
    "change": "-4.47",
    "market_id": "33",
    "circulate_market_value": "6307020000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -0.03
      },
      {
        "name": "锂电池",
        "change_pct": 0.21
      },
      {
        "name": "石墨烯",
        "change_pct": -0.05
      },
      {
        "name": "新能源整车",
        "change_pct": -0.05
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.19
      },
      {
        "name": "汽车整车",
        "change_pct": 0.19
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.12
      },
      {
        "name": "白色家电",
        "change_pct": 0.2
      },
      {
        "name": "家电",
        "change_pct": 0.17
      },
      {
        "name": "汽车热管理",
        "change_pct": 0.41
      },
      {
        "name": "热泵",
        "change_pct": -0.09
      },
      {
        "name": "轮边电机",
        "change_pct": 1.24
      },
      {
        "name": "超级电容",
        "change_pct": -0.06
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.13
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 25,
    "hot_rank_chg": -17,
    "stock_cnt": 5856,
    "price": "3.01",
    "change": "-5.35",
    "market_id": "33",
    "circulate_market_value": "7051491200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.26
      },
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "人工智能",
        "change_pct": -0.12
      },
      {
        "name": "VR&AR",
        "change_pct": -0.31
      },
      {
        "name": "京津冀",
        "change_pct": 0.08
      },
      {
        "name": "装修装饰",
        "change_pct": 0.0
      },
      {
        "name": "住房租赁",
        "change_pct": 0.86
      },
      {
        "name": "破净股",
        "change_pct": 0.49
      },
      {
        "name": "数字经济",
        "change_pct": -0.06
      },
      {
        "name": "房产经纪",
        "change_pct": -0.83
      },
      {
        "name": "物业管理",
        "change_pct": 0.13
      },
      {
        "name": "华为产业链",
        "change_pct": -0.07
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.07
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 32,
    "hot_rank_chg": 59,
    "stock_cnt": 5856,
    "price": "5.78",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "5724473000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "景区运营",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.13
      },
      {
        "name": "旅游",
        "change_pct": -0.21
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.21
      },
      {
        "name": "国企改革",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 34,
    "hot_rank_chg": -4,
    "stock_cnt": 5856,
    "price": "5.67",
    "change": "6.98",
    "market_id": "17",
    "circulate_market_value": "6908396300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.56
      },
      {
        "name": "煤炭",
        "change_pct": 1.26
      },
      {
        "name": "有色金属",
        "change_pct": 0.5
      },
      {
        "name": "国企改革",
        "change_pct": 0.13
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.77
      }
    ]
  },
  {
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 35,
    "hot_rank_chg": 36,
    "stock_cnt": 5856,
    "price": "8.01",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "3047223300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "液冷硅油",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.17
      },
      {
        "name": "有机硅",
        "change_pct": -0.22
      },
      {
        "name": "装修装饰",
        "change_pct": 0.0
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.29
      },
      {
        "name": "光伏",
        "change_pct": -0.33
      },
      {
        "name": "船舶",
        "change_pct": 1.01
      },
      {
        "name": "固态电池",
        "change_pct": 0.08
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.16
      },
      {
        "name": "旧改",
        "change_pct": 0.18
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 0.22
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.13
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 36,
    "hot_rank_chg": -10,
    "stock_cnt": 5856,
    "price": "6.06",
    "change": "-9.96",
    "market_id": "17",
    "circulate_market_value": "3523144400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -1.15
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.62
      },
      {
        "name": "农垦",
        "change_pct": -0.31
      },
      {
        "name": "棉花",
        "change_pct": -1.87
      },
      {
        "name": "新疆概念",
        "change_pct": -0.13
      },
      {
        "name": "风电",
        "change_pct": 0.37
      },
      {
        "name": "大农业",
        "change_pct": -0.73
      },
      {
        "name": "国企改革",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 38,
    "hot_rank_chg": 6,
    "stock_cnt": 5856,
    "price": "7.85",
    "change": "-2.00",
    "market_id": "33",
    "circulate_market_value": "12771901200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.0
      },
      {
        "name": "电竞",
        "change_pct": 0.11
      },
      {
        "name": "手游",
        "change_pct": 0.58
      },
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "人工智能",
        "change_pct": -0.12
      },
      {
        "name": "游戏",
        "change_pct": 0.4
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.06
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.06
      },
      {
        "name": "快手概念股",
        "change_pct": -0.33
      },
      {
        "name": "元宇宙",
        "change_pct": -0.4
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.21
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.09
      },
      {
        "name": "web3.0",
        "change_pct": -0.64
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.19
      },
      {
        "name": "数据要素",
        "change_pct": -0.08
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.27
      },
      {
        "name": "AI营销",
        "change_pct": 0.4
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.15
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.58
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.07
      },
      {
        "name": "人形机器人",
        "change_pct": 0.64
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.72
      },
      {
        "name": "多模态",
        "change_pct": 0.32
      },
      {
        "name": "AI视频",
        "change_pct": -0.4
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.18
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 39,
    "hot_rank_chg": -5,
    "stock_cnt": 5856,
    "price": "5.02",
    "change": "-5.99",
    "market_id": "33",
    "circulate_market_value": "13289278400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "装修装饰",
        "change_pct": 0.0
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.29
      },
      {
        "name": "破净股",
        "change_pct": 0.49
      },
      {
        "name": "航天",
        "change_pct": -0.36
      },
      {
        "name": "旧改",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 40,
    "hot_rank_chg": 1,
    "stock_cnt": 5856,
    "price": "6.64",
    "change": "-6.74",
    "market_id": "33",
    "circulate_market_value": "4280372700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.17
      },
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "装修装饰",
        "change_pct": 0.0
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.29
      },
      {
        "name": "家具家居",
        "change_pct": -0.39
      },
      {
        "name": "智能制造",
        "change_pct": 0.11
      },
      {
        "name": "3D打印",
        "change_pct": -0.52
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -0.09
      },
      {
        "name": "旧改",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "600589",
    "name": "大位科技",
    "hot_rank": 45,
    "hot_rank_chg": 13,
    "stock_cnt": 5856,
    "price": "8.39",
    "change": "-3.34",
    "market_id": "17",
    "circulate_market_value": "12404362400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 0.19
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 46,
    "hot_rank_chg": 1,
    "stock_cnt": 5856,
    "price": "12.35",
    "change": "4.13",
    "market_id": "17",
    "circulate_market_value": "22095858000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.26
      },
      {
        "name": "纯碱",
        "change_pct": -0.44
      },
      {
        "name": "食品",
        "change_pct": -0.48
      },
      {
        "name": "土壤修复",
        "change_pct": -0.48
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.09
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.27
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 49,
    "hot_rank_chg": -25,
    "stock_cnt": 5856,
    "price": "12.29",
    "change": "-4.43",
    "market_id": "17",
    "circulate_market_value": "4726090400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.23
      },
      {
        "name": "股权转让",
        "change_pct": 0.09
      },
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "新疆概念",
        "change_pct": -0.13
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "流感",
        "change_pct": -0.3
      },
      {
        "name": "国资入股",
        "change_pct": -0.16
      },
      {
        "name": "减肥药",
        "change_pct": 0.32
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 50,
    "hot_rank_chg": -22,
    "stock_cnt": 5856,
    "price": "3.68",
    "change": "-6.36",
    "market_id": "17",
    "circulate_market_value": "8141370900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -0.37
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.19
      },
      {
        "name": "光通信",
        "change_pct": 0.2
      },
      {
        "name": "林业",
        "change_pct": -2.48
      },
      {
        "name": "军民融合",
        "change_pct": -0.22
      },
      {
        "name": "军工",
        "change_pct": -0.27
      },
      {
        "name": "人造肉",
        "change_pct": -0.99
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 51,
    "hot_rank_chg": -24,
    "stock_cnt": 5856,
    "price": "4.67",
    "change": "-4.89",
    "market_id": "17",
    "circulate_market_value": "5966391100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.44
      },
      {
        "name": "化肥",
        "change_pct": -0.71
      },
      {
        "name": "保健品",
        "change_pct": -0.6
      },
      {
        "name": "民营医院",
        "change_pct": -0.57
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "煤化工",
        "change_pct": -0.27
      },
      {
        "name": "食品",
        "change_pct": -0.48
      },
      {
        "name": "大农业",
        "change_pct": -0.73
      },
      {
        "name": "干细胞",
        "change_pct": -0.93
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.31
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 53,
    "hot_rank_chg": 62,
    "stock_cnt": 5856,
    "price": "7.21",
    "change": "0.56",
    "market_id": "17",
    "circulate_market_value": "17237757000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 1.26
      },
      {
        "name": "强势人气股",
        "change_pct": -2.47
      },
      {
        "name": "国企改革",
        "change_pct": 0.13
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.77
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 54,
    "hot_rank_chg": 58,
    "stock_cnt": 5856,
    "price": "8.39",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "6060028300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "电网设备",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": 0.05
      },
      {
        "name": "充电桩",
        "change_pct": 0.17
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.57
      },
      {
        "name": "军民融合",
        "change_pct": -0.22
      },
      {
        "name": "光伏",
        "change_pct": -0.33
      },
      {
        "name": "风电",
        "change_pct": 0.37
      },
      {
        "name": "军工",
        "change_pct": -0.27
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.12
      },
      {
        "name": "特高压",
        "change_pct": -0.05
      },
      {
        "name": "自贸区",
        "change_pct": 0.6
      },
      {
        "name": "海洋经济",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 56,
    "hot_rank_chg": 53,
    "stock_cnt": 5856,
    "price": "5.55",
    "change": "3.74",
    "market_id": "17",
    "circulate_market_value": "3104223400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.58
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.33
      },
      {
        "name": "游戏",
        "change_pct": 0.4
      },
      {
        "name": "影视",
        "change_pct": 1.5
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.72
      }
    ]
  },
  {
    "code": "002632",
    "name": "道明光学",
    "hot_rank": 57,
    "hot_rank_chg": 37,
    "stock_cnt": 5856,
    "price": "9.26",
    "change": "-6.28",
    "market_id": "33",
    "circulate_market_value": "5319995100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.5
      },
      {
        "name": "手机产业链",
        "change_pct": -0.54
      },
      {
        "name": "锂电池",
        "change_pct": 0.21
      },
      {
        "name": "石墨烯",
        "change_pct": -0.05
      },
      {
        "name": "VR&AR",
        "change_pct": -0.48
      },
      {
        "name": "光伏",
        "change_pct": -0.41
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.91
      },
      {
        "name": "固态电池",
        "change_pct": -0.02
      },
      {
        "name": "华为产业链",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 58,
    "hot_rank_chg": 7,
    "stock_cnt": 5856,
    "price": "10.72",
    "change": "3.48",
    "market_id": "17",
    "circulate_market_value": "6160110200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -0.52
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.49
      },
      {
        "name": "自贸区",
        "change_pct": 0.57
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 60,
    "hot_rank_chg": 39,
    "stock_cnt": 5856,
    "price": "11.30",
    "change": "5.12",
    "market_id": "33",
    "circulate_market_value": "26267200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 2.45
      },
      {
        "name": "有色 · 铜",
        "change_pct": 0.73
      },
      {
        "name": "有色 · 锑",
        "change_pct": 2.51
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.75
      },
      {
        "name": "有色 · 锌",
        "change_pct": 1.76
      },
      {
        "name": "有色金属",
        "change_pct": 0.4
      },
      {
        "name": "国企改革",
        "change_pct": 0.1
      },
      {
        "name": "白银",
        "change_pct": 2.87
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 62,
    "hot_rank_chg": -23,
    "stock_cnt": 5856,
    "price": "4.18",
    "change": "-7.73",
    "market_id": "33",
    "circulate_market_value": "8789187000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.7
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "维生素",
        "change_pct": 0.55
      },
      {
        "name": "基因测序",
        "change_pct": -0.82
      },
      {
        "name": "民营医院",
        "change_pct": -0.63
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "化学原料药",
        "change_pct": -0.47
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 63,
    "hot_rank_chg": -12,
    "stock_cnt": 5856,
    "price": "11.89",
    "change": "-5.03",
    "market_id": "33",
    "circulate_market_value": "11097193900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.18
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.63
      },
      {
        "name": "新疆概念",
        "change_pct": -0.16
      },
      {
        "name": "光伏",
        "change_pct": -0.41
      },
      {
        "name": "风电",
        "change_pct": 0.32
      },
      {
        "name": "储能",
        "change_pct": -0.11
      },
      {
        "name": "国企改革",
        "change_pct": 0.1
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 71,
    "hot_rank_chg": 29,
    "stock_cnt": 5856,
    "price": "9.95",
    "change": "-3.02",
    "market_id": "33",
    "circulate_market_value": "4958536200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.7
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.58
      },
      {
        "name": "农业种植",
        "change_pct": -1.18
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "流感",
        "change_pct": -0.36
      },
      {
        "name": "大农业",
        "change_pct": -0.74
      }
    ]
  },
  {
    "code": "600828",
    "name": "茂业商业",
    "hot_rank": 73,
    "hot_rank_chg": 11,
    "stock_cnt": 5856,
    "price": "5.05",
    "change": "4.99",
    "market_id": "17",
    "circulate_market_value": "8743368900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.25
      },
      {
        "name": "信托",
        "change_pct": 0.45
      },
      {
        "name": "大金融",
        "change_pct": 1.18
      },
      {
        "name": "免税店概念",
        "change_pct": 1.01
      },
      {
        "name": "地摊经济",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 74,
    "hot_rank_chg": -24,
    "stock_cnt": 5856,
    "price": "4.69",
    "change": "-2.09",
    "market_id": "33",
    "circulate_market_value": "27458998000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.14
      },
      {
        "name": "人工智能",
        "change_pct": -0.23
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.02
      },
      {
        "name": "水利",
        "change_pct": -0.29
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.38
      },
      {
        "name": "大数据",
        "change_pct": -0.25
      },
      {
        "name": "园林",
        "change_pct": -0.65
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.32
      },
      {
        "name": "数字经济",
        "change_pct": -0.16
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.07
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.37
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.3
      },
      {
        "name": "快手概念股",
        "change_pct": -0.49
      },
      {
        "name": "IGBT",
        "change_pct": -0.36
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.36
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.35
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.39
      },
      {
        "name": "氮化镓",
        "change_pct": -0.4
      },
      {
        "name": "AI营销",
        "change_pct": 0.26
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.17
      },
      {
        "name": "多模态",
        "change_pct": 0.18
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.92
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.53
      },
      {
        "name": "区块链",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 78,
    "hot_rank_chg": -1,
    "stock_cnt": 5856,
    "price": "8.09",
    "change": "-1.94",
    "market_id": "17",
    "circulate_market_value": "9212546600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.12
      },
      {
        "name": "强势人气股",
        "change_pct": -2.57
      },
      {
        "name": "光伏",
        "change_pct": -0.41
      },
      {
        "name": "特高压",
        "change_pct": -0.12
      },
      {
        "name": "智能电网",
        "change_pct": -0.25
      }
    ]
  },
  {
    "code": "600830",
    "name": "香溢融通",
    "hot_rank": 82,
    "hot_rank_chg": 60,
    "stock_cnt": 5856,
    "price": "10.91",
    "change": "7.49",
    "market_id": "17",
    "circulate_market_value": "4956661200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "烟草",
        "change_pct": -0.45
      }
    ]
  },
  {
    "code": "002274",
    "name": "华昌化工",
    "hot_rank": 84,
    "hot_rank_chg": 21,
    "stock_cnt": 5856,
    "price": "6.72",
    "change": "-5.62",
    "market_id": "33",
    "circulate_market_value": "6292967700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.44
      },
      {
        "name": "化肥",
        "change_pct": -0.72
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.08
      },
      {
        "name": "纯碱",
        "change_pct": -0.37
      },
      {
        "name": "复牌股",
        "change_pct": -1.76
      },
      {
        "name": "煤化工",
        "change_pct": -0.23
      },
      {
        "name": "大农业",
        "change_pct": -0.74
      },
      {
        "name": "丁辛醇",
        "change_pct": -0.15
      },
      {
        "name": "气凝胶",
        "change_pct": -0.49
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.46
      }
    ]
  },
  {
    "code": "002328",
    "name": "新朋股份",
    "hot_rank": 86,
    "hot_rank_chg": 25,
    "stock_cnt": 5856,
    "price": "9.38",
    "change": "2.18",
    "market_id": "33",
    "circulate_market_value": "5353033700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.61
      },
      {
        "name": "特斯拉",
        "change_pct": -0.1
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.02
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.03
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "储能",
        "change_pct": -0.11
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.14
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.92
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 88,
    "hot_rank_chg": -24,
    "stock_cnt": 5856,
    "price": "8.43",
    "change": "0.48",
    "market_id": "33",
    "circulate_market_value": "6135062300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -0.04
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.3
      },
      {
        "name": "风电",
        "change_pct": 0.32
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.55
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.66
      },
      {
        "name": "建筑节能",
        "change_pct": -0.1
      },
      {
        "name": "旧改",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 92,
    "hot_rank_chg": -32,
    "stock_cnt": 5856,
    "price": "5.76",
    "change": "-0.52",
    "market_id": "33",
    "circulate_market_value": "203714690000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.5
      },
      {
        "name": "手机产业链",
        "change_pct": -0.54
      },
      {
        "name": "超高清视频",
        "change_pct": -0.4
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.27
      },
      {
        "name": "电竞",
        "change_pct": -0.02
      },
      {
        "name": "半导体",
        "change_pct": -0.34
      },
      {
        "name": "人工智能",
        "change_pct": -0.23
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.36
      },
      {
        "name": "VR&AR",
        "change_pct": -0.48
      },
      {
        "name": "OLED",
        "change_pct": -0.69
      },
      {
        "name": "京津冀",
        "change_pct": 0.01
      },
      {
        "name": "物联网",
        "change_pct": -0.52
      },
      {
        "name": "指纹识别",
        "change_pct": -0.67
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.03
      },
      {
        "name": "白马股",
        "change_pct": 0.66
      },
      {
        "name": "智能制造",
        "change_pct": 0.01
      },
      {
        "name": "小米概念股",
        "change_pct": -0.32
      },
      {
        "name": "国产芯片",
        "change_pct": -0.44
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.91
      },
      {
        "name": "全息概念",
        "change_pct": -0.16
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.37
      },
      {
        "name": "MicroLED",
        "change_pct": -0.12
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.91
      },
      {
        "name": "智能手表",
        "change_pct": -1.17
      },
      {
        "name": "MiniLED",
        "change_pct": -0.05
      },
      {
        "name": "传感器",
        "change_pct": -0.49
      },
      {
        "name": "大硅片",
        "change_pct": -0.59
      },
      {
        "name": "AI PC",
        "change_pct": -0.15
      },
      {
        "name": "华为产业链",
        "change_pct": -0.2
      },
      {
        "name": "回购",
        "change_pct": 0.17
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.18
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.79
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.43
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 95,
    "hot_rank_chg": -25,
    "stock_cnt": 5856,
    "price": "11.36",
    "change": "-2.49",
    "market_id": "17",
    "circulate_market_value": "19711655000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -0.1
      },
      {
        "name": "核电",
        "change_pct": -0.02
      },
      {
        "name": "锂电池",
        "change_pct": 0.12
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.98
      },
      {
        "name": "PCB板",
        "change_pct": -0.33
      },
      {
        "name": "中科院系",
        "change_pct": -0.7
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.0
      },
      {
        "name": "固态电池",
        "change_pct": -0.02
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -0.34
      }
    ]
  },
  {
    "code": "600903",
    "name": "贵州燃气",
    "hot_rank": 99,
    "hot_rank_chg": 19,
    "stock_cnt": 5856,
    "price": "6.86",
    "change": "-2.97",
    "market_id": "17",
    "circulate_market_value": "7973299000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "天然气",
        "change_pct": 0.32
      },
      {
        "name": "页岩气",
        "change_pct": -0.67
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600869", "name": "远东股份", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5856, "price": "20.77", "change": "6.51", "market_id": "17", "circulate_market_value": "46184731000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 2, "hot_rank_chg": 5, "stock_cnt": 5856, "price": "37.98", "change": "2.04", "market_id": "17", "circulate_market_value": "26313756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600967", "name": "内蒙一机", "hot_rank": 3, "hot_rank_chg": 26, "stock_cnt": 5856, "price": "13.86", "change": "3.36", "market_id": "17", "circulate_market_value": "23586874000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 4, "hot_rank_chg": 11, "stock_cnt": 5856, "price": "12.21", "change": "10.00", "market_id": "17", "circulate_market_value": "8131860000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "连锁零售", "xgb_concepts": [{"name": "新零售", "change_pct": 0.26}]}, {"code": "600127", "name": "金健米业", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5856, "price": "12.11", "change": "-2.34", "market_id": "17", "circulate_market_value": "7771994800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.19}, {"name": "农业种植", "change_pct": -1.15}, {"name": "强势人气股", "change_pct": -2.47}, {"name": "湖南国企改革", "change_pct": 0.86}, {"name": "乡村振兴", "change_pct": -0.61}, {"name": "休闲食品", "change_pct": -0.69}, {"name": "食品", "change_pct": -0.48}, {"name": "食品安全", "change_pct": -0.17}, {"name": "社区团购", "change_pct": -1.03}, {"name": "大农业", "change_pct": -0.73}, {"name": "预制菜", "change_pct": -0.63}, {"name": "人造肉", "change_pct": -0.99}, {"name": "国企改革", "change_pct": 0.13}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5856, "price": "17.91", "change": "-7.01", "market_id": "17", "circulate_market_value": "12198131800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 7, "hot_rank_chg": 3, "stock_cnt": 5856, "price": "34.74", "change": "-5.13", "market_id": "17", "circulate_market_value": "25159695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 8, "hot_rank_chg": -7, "stock_cnt": 5856, "price": "21.37", "change": "1.18", "market_id": "33", "circulate_market_value": "9740047500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": 5, "stock_cnt": 5856, "price": "8.44", "change": "-8.66", "market_id": "17", "circulate_market_value": "21256223000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.0}, {"name": "工业大麻", "change_pct": -0.14}, {"name": "中药", "change_pct": -0.66}, {"name": "强势人气股", "change_pct": -2.47}, {"name": "保健品", "change_pct": -0.6}, {"name": "民营医院", "change_pct": -0.57}, {"name": "医药", "change_pct": -0.42}, {"name": "化学原料药", "change_pct": -0.43}, {"name": "流感", "change_pct": -0.3}, {"name": "振兴东北", "change_pct": -0.05}, {"name": "食品", "change_pct": -0.48}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 10, "hot_rank_chg": 8, "stock_cnt": 5856, "price": "28.08", "change": "-10.00", "market_id": "17", "circulate_market_value": "11260080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 11, "hot_rank_chg": 5, "stock_cnt": 5856, "price": "30.03", "change": "-10.01", "market_id": "17", "circulate_market_value": "7275368100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 12, "hot_rank_chg": 19, "stock_cnt": 5856, "price": "13.99", "change": "5.43", "market_id": "33", "circulate_market_value": "9234869700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603890", "name": "春秋电子", "hot_rank": 13, "hot_rank_chg": 61, "stock_cnt": 5856, "price": "19.93", "change": "1.58", "market_id": "17", "circulate_market_value": "10034963900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 14, "hot_rank_chg": 43, "stock_cnt": 5856, "price": "5.72", "change": "10.00", "market_id": "33", "circulate_market_value": "4065769200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "AIGC影视", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.12}, {"name": "影视", "change_pct": 1.5}, {"name": "旅游", "change_pct": -0.21}, {"name": "虚拟数字人", "change_pct": -0.21}, {"name": "AI营销", "change_pct": 0.4}, {"name": "AI大模型/智能体", "change_pct": -0.07}, {"name": "短剧/互动影游", "change_pct": 0.72}, {"name": "IP经济/谷子经济", "change_pct": 0.18}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 15, "hot_rank_chg": 6, "stock_cnt": 5856, "price": "9.29", "change": "-7.47", "market_id": "17", "circulate_market_value": "4452882600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.66}, {"name": "强势人气股", "change_pct": -2.47}, {"name": "医药商业", "change_pct": -0.49}, {"name": "医药", "change_pct": -0.42}, {"name": "流感", "change_pct": -0.3}]}, {"code": "000017", "name": "深中华A", "hot_rank": 16, "hot_rank_chg": 17, "stock_cnt": 5856, "price": "10.58", "change": "-9.96", "market_id": "33", "circulate_market_value": "4663896200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.33}, {"name": "锂电池", "change_pct": 0.21}, {"name": "强势人气股", "change_pct": -2.47}, {"name": "新能源汽车", "change_pct": 0.12}, {"name": "两轮车", "change_pct": -0.19}, {"name": "珠宝饰品", "change_pct": 0.02}]}, {"code": "002104", "name": "恒宝股份", "hot_rank": 17, "hot_rank_chg": -6, "stock_cnt": 5856, "price": "13.58", "change": "0.52", "market_id": "33", "circulate_market_value": "8239349500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003005", "name": "竞业达", "hot_rank": 18, "hot_rank_chg": 28, "stock_cnt": 5856, "price": "21.16", "change": "5.80", "market_id": "33", "circulate_market_value": "2839559300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 19, "hot_rank_chg": 3, "stock_cnt": 5856, "price": "13.37", "change": "-7.28", "market_id": "17", "circulate_market_value": "3911767900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002886", "name": "沃特股份", "hot_rank": 20, "hot_rank_chg": -1, "stock_cnt": 5856, "price": "27.76", "change": "-9.99", "market_id": "33", "circulate_market_value": "5804009800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002297", "name": "博云新材", "hot_rank": 21, "hot_rank_chg": 40, "stock_cnt": 5856, "price": "21.70", "change": "8.50", "market_id": "33", "circulate_market_value": "12430643500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 22, "hot_rank_chg": 30, "stock_cnt": 5856, "price": "10.80", "change": "-10.00", "market_id": "33", "circulate_market_value": "3072401400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -0.33}, {"name": "强势人气股", "change_pct": -2.47}, {"name": "教育", "change_pct": 0.05}, {"name": "阿里巴巴概念股", "change_pct": -0.2}, {"name": "职业教育", "change_pct": -0.09}, {"name": "在线教育", "change_pct": -0.6}, {"name": "华为鸿蒙", "change_pct": -0.3}, {"name": "华为产业链", "change_pct": -0.07}, {"name": "智谱AI", "change_pct": 0.17}]}, {"code": "002418", "name": "康盛股份", "hot_rank": 23, "hot_rank_chg": -3, "stock_cnt": 5856, "price": "5.55", "change": "-4.47", "market_id": "33", "circulate_market_value": "6307020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.03}, {"name": "锂电池", "change_pct": 0.21}, {"name": "石墨烯", "change_pct": -0.05}, {"name": "新能源整车", "change_pct": -0.05}, {"name": "云计算数据中心", "change_pct": 0.19}, {"name": "汽车整车", "change_pct": 0.19}, {"name": "新能源汽车", "change_pct": 0.12}, {"name": "白色家电", "change_pct": 0.2}, {"name": "家电", "change_pct": 0.17}, {"name": "汽车热管理", "change_pct": 0.41}, {"name": "热泵", "change_pct": -0.09}, {"name": "轮边电机", "change_pct": 1.24}, {"name": "超级电容", "change_pct": -0.06}, {"name": "液冷服务器", "change_pct": 1.13}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 25, "hot_rank_chg": -17, "stock_cnt": 5856, "price": "3.01", "change": "-5.35", "market_id": "33", "circulate_market_value": "7051491200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.26}, {"name": "强势人气股", "change_pct": -2.47}, {"name": "人工智能", "change_pct": -0.12}, {"name": "VR&AR", "change_pct": -0.31}, {"name": "京津冀", "change_pct": 0.08}, {"name": "装修装饰", "change_pct": 0.0}, {"name": "住房租赁", "change_pct": 0.86}, {"name": "破净股", "change_pct": 0.49}, {"name": "数字经济", "change_pct": -0.06}, {"name": "房产经纪", "change_pct": -0.83}, {"name": "物业管理", "change_pct": 0.13}, {"name": "华为产业链", "change_pct": -0.07}, {"name": "AI大模型/智能体", "change_pct": -0.07}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 26, "hot_rank_chg": -13, "stock_cnt": 5856, "price": "819.50", "change": "-0.29", "market_id": "33", "circulate_market_value": "911979740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 27, "hot_rank_chg": -18, "stock_cnt": 5856, "price": "42.89", "change": "-2.81", "market_id": "17", "circulate_market_value": "170460520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 29, "hot_rank_chg": -23, "stock_cnt": 5856, "price": "556.99", "change": "2.01", "market_id": "17", "circulate_market_value": "16758559000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 30, "hot_rank_chg": -13, "stock_cnt": 5856, "price": "65.63", "change": "-1.90", "market_id": "17", "circulate_market_value": "161032800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 31, "hot_rank_chg": -26, "stock_cnt": 5856, "price": "14.99", "change": "1.63", "market_id": "17", "circulate_market_value": "19251336000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002059", "name": "云南旅游", "hot_rank": 32, "hot_rank_chg": 59, "stock_cnt": 5856, "price": "5.78", "change": "10.10", "market_id": "33", "circulate_market_value": "5724473000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "景区运营", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.13}, {"name": "旅游", "change_pct": -0.21}, {"name": "虚拟数字人", "change_pct": -0.21}, {"name": "国企改革", "change_pct": 0.13}]}, {"code": "002265", "name": "建设工业", "hot_rank": 33, "hot_rank_chg": 39, "stock_cnt": 5856, "price": "20.94", "change": "-2.33", "market_id": "33", "circulate_market_value": "21621536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 34, "hot_rank_chg": -4, "stock_cnt": 5856, "price": "5.67", "change": "6.98", "market_id": "17", "circulate_market_value": "6908396300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.56}, {"name": "煤炭", "change_pct": 1.26}, {"name": "有色金属", "change_pct": 0.5}, {"name": "国企改革", "change_pct": 0.13}, {"name": "河南国企改革", "change_pct": 0.77}]}, {"code": "002909", "name": "集泰股份", "hot_rank": 35, "hot_rank_chg": 36, "stock_cnt": 5856, "price": "8.01", "change": "10.03", "market_id": "33", "circulate_market_value": "3047223300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "液冷硅油", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.17}, {"name": "有机硅", "change_pct": -0.22}, {"name": "装修装饰", "change_pct": 0.0}, {"name": "装配式建筑", "change_pct": -0.29}, {"name": "光伏", "change_pct": -0.33}, {"name": "船舶", "change_pct": 1.01}, {"name": "固态电池", "change_pct": 0.08}, {"name": "新型城镇化", "change_pct": -0.16}, {"name": "旧改", "change_pct": 0.18}, {"name": "飞行汽车/eVTOL", "change_pct": 0.22}, {"name": "液冷服务器", "change_pct": 1.13}]}, {"code": "600540", "name": "新赛股份", "hot_rank": 36, "hot_rank_chg": -10, "stock_cnt": 5856, "price": "6.06", "change": "-9.96", "market_id": "17", "circulate_market_value": "3523144400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -1.15}, {"name": "新疆国企改革", "change_pct": -0.62}, {"name": "农垦", "change_pct": -0.31}, {"name": "棉花", "change_pct": -1.87}, {"name": "新疆概念", "change_pct": -0.13}, {"name": "风电", "change_pct": 0.37}, {"name": "大农业", "change_pct": -0.73}, {"name": "国企改革", "change_pct": 0.13}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 37, "hot_rank_chg": 31, "stock_cnt": 5856, "price": "21.91", "change": "-0.05", "market_id": "33", "circulate_market_value": "9910743100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 38, "hot_rank_chg": 6, "stock_cnt": 5856, "price": "7.85", "change": "-2.00", "market_id": "33", "circulate_market_value": "12771901200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.0}, {"name": "电竞", "change_pct": 0.11}, {"name": "手游", "change_pct": 0.58}, {"name": "强势人气股", "change_pct": -2.47}, {"name": "人工智能", "change_pct": -0.12}, {"name": "游戏", "change_pct": 0.4}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.06}, {"name": "腾讯概念股", "change_pct": 0.06}, {"name": "快手概念股", "change_pct": -0.33}, {"name": "元宇宙", "change_pct": -0.4}, {"name": "虚拟数字人", "change_pct": -0.21}, {"name": "东数西算/算力", "change_pct": -0.09}, {"name": "web3.0", "change_pct": -0.64}, {"name": "AIGC概念", "change_pct": -0.19}, {"name": "数据要素", "change_pct": -0.08}, {"name": "字节跳动概念股", "change_pct": -0.27}, {"name": "AI营销", "change_pct": 0.4}, {"name": "ChatGPT", "change_pct": -0.15}, {"name": "智能眼镜/MR头显", "change_pct": -0.58}, {"name": "AI大模型/智能体", "change_pct": -0.07}, {"name": "人形机器人", "change_pct": 0.64}, {"name": "短剧/互动影游", "change_pct": 0.72}, {"name": "多模态", "change_pct": 0.32}, {"name": "AI视频", "change_pct": -0.4}, {"name": "IP经济/谷子经济", "change_pct": 0.18}, {"name": "小红书概念股", "change_pct": -0.38}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 39, "hot_rank_chg": -5, "stock_cnt": 5856, "price": "5.02", "change": "-5.99", "market_id": "33", "circulate_market_value": "13289278400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.47}, {"name": "装修装饰", "change_pct": 0.0}, {"name": "装配式建筑", "change_pct": -0.29}, {"name": "破净股", "change_pct": 0.49}, {"name": "航天", "change_pct": -0.36}, {"name": "旧改", "change_pct": 0.18}]}, {"code": "002084", "name": "海鸥住工", "hot_rank": 40, "hot_rank_chg": 1, "stock_cnt": 5856, "price": "6.64", "change": "-6.74", "market_id": "33", "circulate_market_value": "4280372700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.17}, {"name": "强势人气股", "change_pct": -2.47}, {"name": "装修装饰", "change_pct": 0.0}, {"name": "装配式建筑", "change_pct": -0.29}, {"name": "家具家居", "change_pct": -0.39}, {"name": "智能制造", "change_pct": 0.11}, {"name": "3D打印", "change_pct": -0.52}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.09}, {"name": "旧改", "change_pct": 0.18}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 41, "hot_rank_chg": 8, "stock_cnt": 5856, "price": "87.20", "change": "1.76", "market_id": "33", "circulate_market_value": "127915046000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 42, "hot_rank_chg": -7, "stock_cnt": 5856, "price": "20.92", "change": "1.90", "market_id": "33", "circulate_market_value": "21363746000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002855", "name": "捷荣技术", "hot_rank": 43, "hot_rank_chg": -5, "stock_cnt": 5856, "price": "17.59", "change": "-7.47", "market_id": "33", "circulate_market_value": "4331137000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 44, "hot_rank_chg": 10, "stock_cnt": 5856, "price": "38.52", "change": "1.40", "market_id": "33", "circulate_market_value": "110169999000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600589", "name": "大位科技", "hot_rank": 45, "hot_rank_chg": 13, "stock_cnt": 5856, "price": "8.39", "change": "-3.34", "market_id": "17", "circulate_market_value": "12404362400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 0.19}, {"name": "东数西算/算力", "change_pct": -0.09}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 46, "hot_rank_chg": 1, "stock_cnt": 5856, "price": "12.35", "change": "4.13", "market_id": "17", "circulate_market_value": "22095858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.26}, {"name": "纯碱", "change_pct": -0.44}, {"name": "食品", "change_pct": -0.48}, {"name": "土壤修复", "change_pct": -0.48}, {"name": "东数西算/算力", "change_pct": -0.09}, {"name": "OpenClaw概念", "change_pct": -0.27}, {"name": "DeepSeek概念股", "change_pct": -0.24}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 47, "hot_rank_chg": -24, "stock_cnt": 5856, "price": "39.55", "change": "-0.70", "market_id": "33", "circulate_market_value": "29955767000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 48, "hot_rank_chg": -8, "stock_cnt": 5856, "price": "51.11", "change": "2.67", "market_id": "33", "circulate_market_value": "58648212000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 49, "hot_rank_chg": -25, "stock_cnt": 5856, "price": "12.29", "change": "-4.43", "market_id": "17", "circulate_market_value": "4726090400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.23}, {"name": "股权转让", "change_pct": 0.09}, {"name": "强势人气股", "change_pct": -2.47}, {"name": "新疆概念", "change_pct": -0.13}, {"name": "医药", "change_pct": -0.42}, {"name": "流感", "change_pct": -0.3}, {"name": "国资入股", "change_pct": -0.16}, {"name": "减肥药", "change_pct": 0.32}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 50, "hot_rank_chg": -22, "stock_cnt": 5856, "price": "3.68", "change": "-6.36", "market_id": "17", "circulate_market_value": "8141370900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.37}, {"name": "云计算数据中心", "change_pct": 0.19}, {"name": "光通信", "change_pct": 0.2}, {"name": "林业", "change_pct": -2.48}, {"name": "军民融合", "change_pct": -0.22}, {"name": "军工", "change_pct": -0.27}, {"name": "人造肉", "change_pct": -0.99}]}, {"code": "600227", "name": "赤天化", "hot_rank": 51, "hot_rank_chg": -24, "stock_cnt": 5856, "price": "4.67", "change": "-4.89", "market_id": "17", "circulate_market_value": "5966391100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.44}, {"name": "化肥", "change_pct": -0.71}, {"name": "保健品", "change_pct": -0.6}, {"name": "民营医院", "change_pct": -0.57}, {"name": "医药", "change_pct": -0.42}, {"name": "煤化工", "change_pct": -0.27}, {"name": "食品", "change_pct": -0.48}, {"name": "大农业", "change_pct": -0.73}, {"name": "干细胞", "change_pct": -0.93}, {"name": "阿尔茨海默病", "change_pct": -0.31}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 52, "hot_rank_chg": 26, "stock_cnt": 5856, "price": "14.14", "change": "10.04", "market_id": "17", "circulate_market_value": "6284444500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "AI漫剧"}, {"code": "600403", "name": "大有能源", "hot_rank": 53, "hot_rank_chg": 62, "stock_cnt": 5856, "price": "7.21", "change": "0.56", "market_id": "17", "circulate_market_value": "17237757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 1.26}, {"name": "强势人气股", "change_pct": -2.47}, {"name": "国企改革", "change_pct": 0.13}, {"name": "河南国企改革", "change_pct": 0.77}]}, {"code": "002300", "name": "太阳电缆", "hot_rank": 54, "hot_rank_chg": 58, "stock_cnt": 5856, "price": "8.39", "change": "9.96", "market_id": "33", "circulate_market_value": "6060028300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "电网设备", "xgb_concepts": [{"name": "核电", "change_pct": 0.05}, {"name": "充电桩", "change_pct": 0.17}, {"name": "福建自贸/海西概念", "change_pct": 0.57}, {"name": "军民融合", "change_pct": -0.22}, {"name": "光伏", "change_pct": -0.33}, {"name": "风电", "change_pct": 0.37}, {"name": "军工", "change_pct": -0.27}, {"name": "新能源汽车", "change_pct": 0.12}, {"name": "特高压", "change_pct": -0.05}, {"name": "自贸区", "change_pct": 0.6}, {"name": "海洋经济", "change_pct": -0.22}]}, {"code": "002432", "name": "九安医疗", "hot_rank": 55, "hot_rank_chg": 254, "stock_cnt": 5856, "price": "68.06", "change": "-0.20", "market_id": "33", "circulate_market_value": "29756528000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 56, "hot_rank_chg": 53, "stock_cnt": 5856, "price": "5.55", "change": "3.74", "market_id": "17", "circulate_market_value": "3104223400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.58}, {"name": "ST摘帽", "change_pct": -0.33}, {"name": "游戏", "change_pct": 0.4}, {"name": "影视", "change_pct": 1.5}, {"name": "短剧/互动影游", "change_pct": 0.72}]}, {"code": "002632", "name": "道明光学", "hot_rank": 57, "hot_rank_chg": 37, "stock_cnt": 5856, "price": "9.26", "change": "-6.28", "market_id": "33", "circulate_market_value": "5319995100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.5}, {"name": "手机产业链", "change_pct": -0.54}, {"name": "锂电池", "change_pct": 0.21}, {"name": "石墨烯", "change_pct": -0.05}, {"name": "VR&AR", "change_pct": -0.48}, {"name": "光伏", "change_pct": -0.41}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "液晶面板/LCD", "change_pct": -0.91}, {"name": "固态电池", "change_pct": -0.02}, {"name": "华为产业链", "change_pct": -0.2}]}, {"code": "601566", "name": "九牧王", "hot_rank": 58, "hot_rank_chg": 7, "stock_cnt": 5856, "price": "10.72", "change": "3.48", "market_id": "17", "circulate_market_value": "6160110200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -0.52}, {"name": "福建自贸/海西概念", "change_pct": 0.49}, {"name": "自贸区", "change_pct": 0.57}, {"name": "IP经济/谷子经济", "change_pct": 0.14}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 59, "hot_rank_chg": -11, "stock_cnt": 5856, "price": "21.15", "change": "-1.45", "market_id": "33", "circulate_market_value": "24882315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 60, "hot_rank_chg": 39, "stock_cnt": 5856, "price": "11.30", "change": "5.12", "market_id": "33", "circulate_market_value": "26267200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 2.45}, {"name": "有色 · 铜", "change_pct": 0.73}, {"name": "有色 · 锑", "change_pct": 2.51}, {"name": "湖南国企改革", "change_pct": 0.75}, {"name": "有色 · 锌", "change_pct": 1.76}, {"name": "有色金属", "change_pct": 0.4}, {"name": "国企改革", "change_pct": 0.1}, {"name": "白银", "change_pct": 2.87}]}, {"code": "600353", "name": "旭光电子", "hot_rank": 61, "hot_rank_chg": 150, "stock_cnt": 5856, "price": "33.07", "change": "-0.03", "market_id": "17", "circulate_market_value": "27417073000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 62, "hot_rank_chg": -23, "stock_cnt": 5856, "price": "4.18", "change": "-7.73", "market_id": "33", "circulate_market_value": "8789187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.7}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "维生素", "change_pct": 0.55}, {"name": "基因测序", "change_pct": -0.82}, {"name": "民营医院", "change_pct": -0.63}, {"name": "医药", "change_pct": -0.48}, {"name": "化学原料药", "change_pct": -0.47}, {"name": "PD-1抑制剂", "change_pct": -0.61}]}, {"code": "001258", "name": "立新能源", "hot_rank": 63, "hot_rank_chg": -12, "stock_cnt": 5856, "price": "11.89", "change": "-5.03", "market_id": "33", "circulate_market_value": "11097193900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.18}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "新疆国企改革", "change_pct": -0.63}, {"name": "新疆概念", "change_pct": -0.16}, {"name": "光伏", "change_pct": -0.41}, {"name": "风电", "change_pct": 0.32}, {"name": "储能", "change_pct": -0.11}, {"name": "国企改革", "change_pct": 0.1}]}, {"code": "600183", "name": "生益科技", "hot_rank": 64, "hot_rank_chg": -22, "stock_cnt": 5856, "price": "141.68", "change": "-2.28", "market_id": "17", "circulate_market_value": "341696580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 65, "hot_rank_chg": -20, "stock_cnt": 5856, "price": "66.59", "change": "0.54", "market_id": "33", "circulate_market_value": "75485123000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 66, "hot_rank_chg": -23, "stock_cnt": 5856, "price": "13.42", "change": "3.55", "market_id": "17", "circulate_market_value": "5616365500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 67, "hot_rank_chg": -30, "stock_cnt": 5856, "price": "112.20", "change": "-2.44", "market_id": "17", "circulate_market_value": "40473165000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 68, "hot_rank_chg": -43, "stock_cnt": 5856, "price": "48.70", "change": "-3.45", "market_id": "17", "circulate_market_value": "52233933000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 69, "hot_rank_chg": -2, "stock_cnt": 5856, "price": "385.85", "change": "-0.77", "market_id": "17", "circulate_market_value": "258796670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 70, "hot_rank_chg": 3, "stock_cnt": 5856, "price": "17.88", "change": "-1.92", "market_id": "17", "circulate_market_value": "37396774000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 71, "hot_rank_chg": 29, "stock_cnt": 5856, "price": "9.95", "change": "-3.02", "market_id": "33", "circulate_market_value": "4958536200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.7}, {"name": "优化生育（三孩）", "change_pct": -0.58}, {"name": "农业种植", "change_pct": -1.18}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "医药", "change_pct": -0.48}, {"name": "流感", "change_pct": -0.36}, {"name": "大农业", "change_pct": -0.74}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 72, "hot_rank_chg": -40, "stock_cnt": 5856, "price": "54.75", "change": "0.79", "market_id": "17", "circulate_market_value": "246496350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600828", "name": "茂业商业", "hot_rank": 73, "hot_rank_chg": 11, "stock_cnt": 5856, "price": "5.05", "change": "4.99", "market_id": "17", "circulate_market_value": "8743368900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.25}, {"name": "信托", "change_pct": 0.45}, {"name": "大金融", "change_pct": 1.18}, {"name": "免税店概念", "change_pct": 1.01}, {"name": "地摊经济", "change_pct": 0.04}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 74, "hot_rank_chg": -24, "stock_cnt": 5856, "price": "4.69", "change": "-2.09", "market_id": "33", "circulate_market_value": "27458998000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.14}, {"name": "人工智能", "change_pct": -0.23}, {"name": "云计算数据中心", "change_pct": 0.02}, {"name": "水利", "change_pct": -0.29}, {"name": "直播/短视频", "change_pct": -0.38}, {"name": "大数据", "change_pct": -0.25}, {"name": "园林", "change_pct": -0.65}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.32}, {"name": "数字经济", "change_pct": -0.16}, {"name": "腾讯概念股", "change_pct": -0.07}, {"name": "理想汽车概念股", "change_pct": 0.37}, {"name": "第三代半导体", "change_pct": -0.3}, {"name": "快手概念股", "change_pct": -0.49}, {"name": "IGBT", "change_pct": -0.36}, {"name": "虚拟数字人", "change_pct": -0.36}, {"name": "AIGC概念", "change_pct": -0.35}, {"name": "字节跳动概念股", "change_pct": -0.39}, {"name": "氮化镓", "change_pct": -0.4}, {"name": "AI营销", "change_pct": 0.26}, {"name": "AI大模型/智能体", "change_pct": -0.17}, {"name": "多模态", "change_pct": 0.18}, {"name": "液冷服务器", "change_pct": 0.92}, {"name": "小红书概念股", "change_pct": -0.53}, {"name": "区块链", "change_pct": -0.42}]}, {"code": "605006", "name": "山东玻纤", "hot_rank": 75, "hot_rank_chg": -19, "stock_cnt": 5856, "price": "15.68", "change": "-1.75", "market_id": "17", "circulate_market_value": "10248468400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 76, "hot_rank_chg": 129, "stock_cnt": 5856, "price": "13.89", "change": "9.98", "market_id": "17", "circulate_market_value": "69297470000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "重整撤回"}, {"code": "603269", "name": "海鸥股份", "hot_rank": 77, "hot_rank_chg": -41, "stock_cnt": 5856, "price": "28.07", "change": "2.41", "market_id": "17", "circulate_market_value": "12124709900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 78, "hot_rank_chg": -1, "stock_cnt": 5856, "price": "8.09", "change": "-1.94", "market_id": "17", "circulate_market_value": "9212546600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.12}, {"name": "强势人气股", "change_pct": -2.57}, {"name": "光伏", "change_pct": -0.41}, {"name": "特高压", "change_pct": -0.12}, {"name": "智能电网", "change_pct": -0.25}]}, {"code": "600206", "name": "有研新材", "hot_rank": 79, "hot_rank_chg": 7, "stock_cnt": 5856, "price": "47.22", "change": "-2.15", "market_id": "17", "circulate_market_value": "39999645000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 80, "hot_rank_chg": -21, "stock_cnt": 5856, "price": "33.48", "change": "-0.65", "market_id": "33", "circulate_market_value": "36199954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 81, "hot_rank_chg": 8, "stock_cnt": 5856, "price": "62.62", "change": "1.33", "market_id": "17", "circulate_market_value": "1242637060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600830", "name": "香溢融通", "hot_rank": 82, "hot_rank_chg": 60, "stock_cnt": 5856, "price": "10.91", "change": "7.49", "market_id": "17", "circulate_market_value": "4956661200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "烟草", "change_pct": -0.45}]}, {"code": "000712", "name": "锦龙股份", "hot_rank": 83, "hot_rank_chg": -20, "stock_cnt": 5856, "price": "13.31", "change": "1.14", "market_id": "33", "circulate_market_value": "11922221200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002274", "name": "华昌化工", "hot_rank": 84, "hot_rank_chg": 21, "stock_cnt": 5856, "price": "6.72", "change": "-5.62", "market_id": "33", "circulate_market_value": "6292967700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.44}, {"name": "化肥", "change_pct": -0.72}, {"name": "氢能源/燃料电池", "change_pct": -0.08}, {"name": "纯碱", "change_pct": -0.37}, {"name": "复牌股", "change_pct": -1.76}, {"name": "煤化工", "change_pct": -0.23}, {"name": "大农业", "change_pct": -0.74}, {"name": "丁辛醇", "change_pct": -0.15}, {"name": "气凝胶", "change_pct": -0.49}, {"name": "新冠病毒防治", "change_pct": -0.46}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 85, "hot_rank_chg": -30, "stock_cnt": 5856, "price": "393.57", "change": "-3.49", "market_id": "17", "circulate_market_value": "159922570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002328", "name": "新朋股份", "hot_rank": 86, "hot_rank_chg": 25, "stock_cnt": 5856, "price": "9.38", "change": "2.18", "market_id": "33", "circulate_market_value": "5353033700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.61}, {"name": "特斯拉", "change_pct": -0.1}, {"name": "云计算数据中心", "change_pct": 0.02}, {"name": "汽车零部件", "change_pct": 0.03}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "储能", "change_pct": -0.11}, {"name": "新能源车零部件", "change_pct": 0.14}, {"name": "液冷服务器", "change_pct": 0.92}]}, {"code": "002384", "name": "东山精密", "hot_rank": 87, "hot_rank_chg": -18, "stock_cnt": 5856, "price": "181.01", "change": "-1.32", "market_id": "33", "circulate_market_value": "250979680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 88, "hot_rank_chg": -24, "stock_cnt": 5856, "price": "8.43", "change": "0.48", "market_id": "33", "circulate_market_value": "6135062300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -0.04}, {"name": "装配式建筑", "change_pct": -0.3}, {"name": "风电", "change_pct": 0.32}, {"name": "环氧丙烷", "change_pct": 0.55}, {"name": "乡村振兴", "change_pct": -0.66}, {"name": "建筑节能", "change_pct": -0.1}, {"name": "旧改", "change_pct": 0.14}]}, {"code": "605188", "name": "国光连锁", "hot_rank": 89, "hot_rank_chg": 54, "stock_cnt": 5856, "price": "15.18", "change": "0.07", "market_id": "17", "circulate_market_value": "7707591900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 90, "hot_rank_chg": 18, "stock_cnt": 5856, "price": "68.75", "change": "-2.34", "market_id": "33", "circulate_market_value": "49860014000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 91, "hot_rank_chg": 16, "stock_cnt": 5856, "price": "23.68", "change": "-1.95", "market_id": "17", "circulate_market_value": "10393077100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 92, "hot_rank_chg": -32, "stock_cnt": 5856, "price": "5.76", "change": "-0.52", "market_id": "33", "circulate_market_value": "203714690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.5}, {"name": "手机产业链", "change_pct": -0.54}, {"name": "超高清视频", "change_pct": -0.4}, {"name": "苹果产业链", "change_pct": -0.27}, {"name": "电竞", "change_pct": -0.02}, {"name": "半导体", "change_pct": -0.34}, {"name": "人工智能", "change_pct": -0.23}, {"name": "互联网医疗", "change_pct": -0.36}, {"name": "VR&AR", "change_pct": -0.48}, {"name": "OLED", "change_pct": -0.69}, {"name": "京津冀", "change_pct": 0.01}, {"name": "物联网", "change_pct": -0.52}, {"name": "指纹识别", "change_pct": -0.67}, {"name": "汽车零部件", "change_pct": 0.03}, {"name": "白马股", "change_pct": 0.66}, {"name": "智能制造", "change_pct": 0.01}, {"name": "小米概念股", "change_pct": -0.32}, {"name": "国产芯片", "change_pct": -0.44}, {"name": "液晶面板/LCD", "change_pct": -0.91}, {"name": "全息概念", "change_pct": -0.16}, {"name": "理想汽车概念股", "change_pct": 0.37}, {"name": "MicroLED", "change_pct": -0.12}, {"name": "钙钛矿电池", "change_pct": -0.91}, {"name": "智能手表", "change_pct": -1.17}, {"name": "MiniLED", "change_pct": -0.05}, {"name": "传感器", "change_pct": -0.49}, {"name": "大硅片", "change_pct": -0.59}, {"name": "AI PC", "change_pct": -0.15}, {"name": "华为产业链", "change_pct": -0.2}, {"name": "回购", "change_pct": 0.17}, {"name": "光电共封装CPO", "change_pct": 0.18}, {"name": "智能眼镜/MR头显", "change_pct": -0.79}, {"name": "玻璃基板封装", "change_pct": -0.43}]}, {"code": "600584", "name": "长电科技", "hot_rank": 93, "hot_rank_chg": -3, "stock_cnt": 5856, "price": "71.47", "change": "0.22", "market_id": "17", "circulate_market_value": "127889459000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 94, "hot_rank_chg": 12, "stock_cnt": 5856, "price": "31.15", "change": "0.48", "market_id": "17", "circulate_market_value": "51835838000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 95, "hot_rank_chg": -25, "stock_cnt": 5856, "price": "11.36", "change": "-2.49", "market_id": "17", "circulate_market_value": "19711655000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.1}, {"name": "核电", "change_pct": -0.02}, {"name": "锂电池", "change_pct": 0.12}, {"name": "铜箔/覆铜板", "change_pct": -0.98}, {"name": "PCB板", "change_pct": -0.33}, {"name": "中科院系", "change_pct": -0.7}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "宁德时代概念股", "change_pct": 0.0}, {"name": "固态电池", "change_pct": -0.02}, {"name": "PET复合铜箔", "change_pct": -0.34}]}, {"code": "300502", "name": "新易盛", "hot_rank": 96, "hot_rank_chg": -17, "stock_cnt": 5856, "price": "387.58", "change": "0.25", "market_id": "33", "circulate_market_value": "486219900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 97, "hot_rank_chg": 6, "stock_cnt": 5856, "price": "246.15", "change": "-1.54", "market_id": "33", "circulate_market_value": "267906720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603958", "name": "哈森股份", "hot_rank": 98, "hot_rank_chg": -22, "stock_cnt": 5856, "price": "21.84", "change": "-8.43", "market_id": "17", "circulate_market_value": "4782048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600903", "name": "贵州燃气", "hot_rank": 99, "hot_rank_chg": 19, "stock_cnt": 5856, "price": "6.86", "change": "-2.97", "market_id": "17", "circulate_market_value": "7973299000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "天然气", "change_pct": 0.32}, {"name": "页岩气", "change_pct": -0.67}]}, {"code": "600272", "name": "开开实业", "hot_rank": 100, "hot_rank_chg": 10, "stock_cnt": 5856, "price": "16.58", "change": "-8.30", "market_id": "17", "circulate_market_value": "2652800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};